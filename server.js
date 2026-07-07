// JSJ Roofing — ServiceM8 add-on backend
//
// This service does three jobs:
//   1. /oauth/start + /oauth/callback  — connects this add-on to your
//      ServiceM8 account once, and stores the resulting access/refresh
//      tokens so this server can call the ServiceM8 API on your behalf.
//   2. POST /addon                      — the Callback URL ServiceM8 hits
//      whenever someone clicks the add-on's button on a Job Card. Verifies
//      the signed request, looks up the job + client, and serves the order
//      tool pre-filled with that job's details.
//   3. Handles the "submit" event fired from inside the tool, which posts
//      the finished order onto that job's diary as a Note.
//
// Deploy this whole folder to Railway (Deploy from GitHub repo), set the
// environment variables from .env.example in Railway's Variables tab, then
// point your ServiceM8 add-on's Activation URL and Callback URL at this
// service. See README.md for the exact steps.

const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const {
  SM8_APP_ID,
  SM8_APP_SECRET,
  SM8_OAUTH_SCOPE = 'read_jobs read_customers publish_job_notes',
  PUBLIC_BASE_URL,
  TOKENS_FILE = '/data/tokens.json',
  PORT = 3000,
} = process.env;

if (!SM8_APP_ID || !SM8_APP_SECRET || !PUBLIC_BASE_URL) {
  console.warn('⚠️  SM8_APP_ID, SM8_APP_SECRET, and PUBLIC_BASE_URL should all be set as environment variables.');
}

const app = express();

// ── token storage ──
// Single-tenant (just your ServiceM8 account), so a simple JSON file is
// enough. Attach a Railway Volume mounted at /data so this survives
// redeploys — otherwise you'll need to reconnect after every deploy.
function loadTokens() {
  try { return JSON.parse(fs.readFileSync(TOKENS_FILE, 'utf8')); }
  catch (e) { return null; }
}
function saveTokens(t) {
  fs.mkdirSync(path.dirname(TOKENS_FILE), { recursive: true });
  fs.writeFileSync(TOKENS_FILE, JSON.stringify(t, null, 2));
}

async function exchangeToken(params) {
  const r = await fetch('https://go.servicem8.com/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(params),
  });
  const data = await r.json();
  if (!data.access_token) throw new Error('ServiceM8 token exchange failed: ' + JSON.stringify(data));
  saveTokens({ ...data, obtained_at: Date.now() });
  return data.access_token;
}

async function getAccessToken() {
  const t = loadTokens();
  if (!t) throw new Error('Not connected to ServiceM8 yet — visit ' + PUBLIC_BASE_URL + '/oauth/start once to connect this add-on to your account.');
  const ageSec = (Date.now() - t.obtained_at) / 1000;
  if (ageSec < (t.expires_in || 3600) - 60) return t.access_token;
  return exchangeToken({
    grant_type: 'refresh_token',
    client_id: SM8_APP_ID,
    client_secret: SM8_APP_SECRET,
    refresh_token: t.refresh_token,
  });
}

async function sm8(pathname, opts = {}) {
  const token = await getAccessToken();
  const r = await fetch(`https://api.servicem8.com/api_1.0/${pathname}`, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(opts.headers || {}),
    },
  });
  const text = await r.text();
  let body;
  try { body = text ? JSON.parse(text) : null; } catch (e) { body = text; }
  return { status: r.status, body };
}

// ── Step 1: Activation URL — start OAuth ──
app.get('/oauth/start', (req, res) => {
  const redirect_uri = `${PUBLIC_BASE_URL}/oauth/callback`;
  const url = `https://go.servicem8.com/oauth/authorize?` + new URLSearchParams({
    response_type: 'code',
    client_id: SM8_APP_ID,
    scope: SM8_OAUTH_SCOPE,
    redirect_uri,
  });
  res.redirect(url);
});

// ── Step 2: OAuth redirect — exchange code for tokens ──
app.get('/oauth/callback', async (req, res) => {
  const { code, error } = req.query;
  if (error) return res.status(400).send(`ServiceM8 declined authorisation: ${error}`);
  if (!code) return res.status(400).send('Missing "code" in callback — check the redirect_uri matches exactly.');
  try {
    await exchangeToken({
      grant_type: 'authorization_code',
      client_id: SM8_APP_ID,
      client_secret: SM8_APP_SECRET,
      code,
      redirect_uri: `${PUBLIC_BASE_URL}/oauth/callback`,
    });
    res.send('<h2>✅ JSJ Order Tool is connected to ServiceM8.</h2><p>You can close this tab and try the add-on button on a job card.</p>');
  } catch (e) {
    res.status(500).send('OAuth exchange failed: ' + e.message);
  }
});

// ── Step 3: Callback URL — job-card button clicks & follow-up events ──
// ServiceM8 posts a JWT (signed with your App Secret) as the raw request body.
app.post('/addon', express.text({ type: '*/*' }), async (req, res) => {
  let event;
  try {
    event = jwt.verify(req.body, SM8_APP_SECRET, { algorithms: ['HS256'] });
  } catch (e) {
    return res.status(401).send('Invalid signature');
  }

  try {
    if (event.eventName === 'jsj_order_tool_open') return await handleOpen(event, res);
    if (event.eventName === 'jsj_order_tool_submit') return await handleSubmit(event, res);
    res.status(400).json({ error: 'Unknown event: ' + event.eventName });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

async function handleOpen(event, res) {
  const jobUUID = event.eventArgs && event.eventArgs.jobUUID;
  if (!jobUUID) return res.status(400).send('Missing job UUID');

  const jobRes = await sm8(`job/${jobUUID}.json`);
  const job = jobRes.body || {};
  let company = {};
  if (job.company_uuid) {
    const companyRes = await sm8(`company/${job.company_uuid}.json`);
    company = companyRes.body || {};
  }

  const prefill = {
    jobUUID,
    jobAddress: job.job_address || '',
    reference: [company.name, job.generated_job_id].filter(Boolean).join(' — '),
  };

  const template = fs.readFileSync(path.join(__dirname, 'public', 'order-tool.html'), 'utf8');
  const inject = `<script>window.__SM8_PREFILL__ = ${JSON.stringify(prefill)};</script>`;
  let html = template.includes('<head>')
    ? template.replace('<head>', `<head>\n${inject}`)
    : inject + template;

  // The standalone file embeds the logo as base64 for offline portability,
  // which makes the page ~80KB+. ServiceM8 relays this response back to the
  // browser and appears to have a size limit, so swap the heavy embedded
  // image for a lightweight link to the same logo already hosted on GitHub.
  html = html.replace(
    /<img class="hdr-logo" src="data:image\/png;base64,[^"]+"/,
    '<img class="hdr-logo" src="https://raw.githubusercontent.com/JSJ-Roofing/jsj-order-tool/main/jsj-addon-icon.png"'
  );

  // Light minification — strip HTML comments and collapse blank lines to
  // trim a bit more size off the response.
  html = html.replace(/<!--[\s\S]*?-->/g, '').replace(/\n\s*\n/g, '\n');

  // Trying a simpler envelope shape than the Lambda-style one — ServiceM8's
  // exact expected format for self-hosted web service responses isn't
  // published, so this is our second attempt at guessing it correctly.
  res.json({ html });
}

async function handleSubmit(event, res) {
  const { jobUUID, noteText } = event.eventArgs || {};
  if (!jobUUID || !noteText) return res.status(400).json({ error: 'Missing jobUUID/noteText' });

  const r = await sm8('note.json', {
    method: 'POST',
    body: JSON.stringify({
      related_object: 'job',
      related_object_uuid: jobUUID,
      note: noteText,
    }),
  });
  res.json({ ok: r.status >= 200 && r.status < 300, status: r.status, body: r.body });
}

app.get('/', (req, res) => res.send('JSJ ServiceM8 order add-on is running.'));

app.listen(PORT, () => console.log(`JSJ ServiceM8 add-on listening on port ${PORT}`));
