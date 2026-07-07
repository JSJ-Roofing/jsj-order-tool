// JSJ Roofing — ServiceM8 add-on backend
//
// Architecture (simplified to match a pattern already proven to work):
//   1. /oauth/start + /oauth/callback — one-time connection between this
//      server and your ServiceM8 account (OAuth). Stores the resulting
//      tokens so this server can call the ServiceM8 API on your behalf.
//   2. GET /order-tool — serves the order tool itself as a normal web page.
//      The Job Card button opens this directly via the manifest's
//      "actionURL" (no embedded-iframe rendering, no special response
//      format needed — it's just a link).
//   3. POST /submit-order — called directly by the order tool's own
//      JavaScript (a normal fetch, not routed through ServiceM8) once
//      someone fills in a Job # and clicks "Post to ServiceM8 job diary".
//      Looks the job up by its job number and posts a Note onto it.

const express = require('express');
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
app.use(express.json());

// ── token storage ──
// Single-tenant (just your ServiceM8 account), so a simple JSON file is
// enough. Without a persistent Volume mounted at /data, this resets on
// every redeploy — if so, just revisit /oauth/start once to reconnect.
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
    res.send('<h2>✅ JSJ Order Tool is connected to ServiceM8.</h2><p>You can close this tab.</p>');
  } catch (e) {
    res.status(500).send('OAuth exchange failed: ' + e.message);
  }
});

// ── Step 3: the order tool itself, opened via the Job Card button ──
app.get('/order-tool', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, 'public', 'order-tool.html'), 'utf8');

  // Swap the offline base64-embedded logo for the lightweight hosted copy.
  html = html.replace(
    /<img class="hdr-logo" src="data:image\/png;base64,[^"]+"/,
    '<img class="hdr-logo" src="https://raw.githubusercontent.com/JSJ-Roofing/jsj-order-tool/main/jsj-addon-icon.png"'
  );

  // Tell the page which backend to call for "Post to ServiceM8 job diary".
  const inject = `<script>window.__SM8_BACKEND__ = ${JSON.stringify(PUBLIC_BASE_URL)};</script>`;
  html = html.includes('<head>') ? html.replace('<head>', `<head>\n${inject}`) : inject + html;

  res.set('Content-Type', 'text/html').send(html);
});

// ── Step 4: called directly by the order tool's own JS when someone clicks
//    "Post to ServiceM8 job diary". Looks the job up by its job number and
//    posts a Note onto it. ──
function cors(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
}
app.options('/submit-order', cors);
app.post('/submit-order', cors, async (req, res) => {
  try {
    const { jobNumber, note } = req.body || {};
    if (!jobNumber || !note) return res.status(400).json({ error: 'Missing jobNumber or note' });

    const lookup = await sm8(`job.json?$filter=generated_job_id eq '${encodeURIComponent(jobNumber)}'`);
    if (!Array.isArray(lookup.body) || lookup.body.length === 0) {
      return res.status(404).json({ error: `No ServiceM8 job found matching "${jobNumber}"` });
    }
    const jobUUID = lookup.body[0].uuid;

    const noteRes = await sm8('note.json', {
      method: 'POST',
      body: JSON.stringify({ related_object: 'job', related_object_uuid: jobUUID, note }),
    });
    if (noteRes.status < 200 || noteRes.status >= 300) {
      return res.status(500).json({ error: 'Note creation failed', details: noteRes.body });
    }
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/', (req, res) => res.send('JSJ ServiceM8 order add-on is running.'));

app.listen(PORT, () => console.log(`JSJ ServiceM8 add-on listening on port ${PORT}`));
