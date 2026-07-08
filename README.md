[README.md](https://github.com/user-attachments/files/29733146/README.md)
# JSJ Roofing — Material Order Tool, as a ServiceM8 add-on

This turns your order tool into a button that appears on Job Cards in
ServiceM8. Click it → the tool opens → fill in the flashings and materials
→ click "Send order" → it's saved as a note (with the sketches as a PDF
attachment) on that job's diary, and the supplier gets an email with the
same PDF attached — see the "Update" section further down for details.

It's built for internal use only (not listed on the Add-on Store), but it
still needs to run as a real add-on so ServiceM8 will let it hook into Job
Cards and authorise it to read job details and write notes.

## Why GitHub Pages alone didn't work

GitHub can only serve static files. This add-on needs to:
- run the OAuth handshake with ServiceM8 (which requires your App Secret —
  never something that can sit in a browser-loaded page)
- verify that button-clicks really came from ServiceM8 (checking a signed
  token)
- call the ServiceM8 API to fetch job details and post the diary note

None of that can run on GitHub Pages. It needs an actual server — that's
what the code in this folder is, and what Railway will run for you. Your
GitHub repo is still useful: Railway deploys straight from it.

## 1. Push this folder to your GitHub repo

Replace whatever's in the repo with everything in this folder (`server.js`,
`package.json`, `public/order-tool.html`, `.env.example`, this README). Keep
`index.html` too if you still want the plain, non-ServiceM8 version
downloadable directly from the repo — it's independent of the add-on.

## 2. Deploy it on Railway

1. Railway → **New Project** → **Deploy from GitHub repo** → pick this repo.
2. Once it deploys, Railway gives you a public URL, something like
   `https://jsj-order-addon-production.up.railway.app`. Copy it.
3. **Add a Volume** (Railway → your service → Settings → Volumes) mounted at
   `/data`. This is where the connected account's login token is stored —
   without it, a redeploy will disconnect the add-on and you'll need to
   reconnect it each time.
4. Open **Variables** on the Railway service and add everything from
   `.env.example`, using your real values:
   - `SM8_APP_ID` / `SM8_APP_SECRET` — from the ServiceM8 Developer Portal
     (see step 3 below)
   - `SM8_OAUTH_SCOPE` — leave as `read_jobs read_customers publish_job_notes`
   - `PUBLIC_BASE_URL` — the Railway URL from step 2, no trailing slash
   - `TOKENS_FILE` — leave as `/data/tokens.json`

Railway will redeploy automatically whenever you push to GitHub.

## 3. Configure the add-on in ServiceM8's Developer Portal

You mentioned you've already created the add-on — go back into it and check/
set these fields (names may vary slightly in the portal UI):

- **Activation URL** → `https://YOUR-RAILWAY-URL/oauth/start`
  *(this is what "Connect" should actually point at — this is likely what
  was pointed at GitHub before)*
- **Callback URL** → `https://YOUR-RAILWAY-URL/addon`
- **OAuth Scopes** → `read_jobs`, `read_customers`, `publish_job_notes`,
  `manage_attachments`
- **Actions** → add one action:
  - Location: **Job Card**
  - Label: `Order materials`
  - Event name: `jsj_order_tool_open`
  - Display: opens in a modal/iframe (the portal may call this "online"
    or "modal" — pick whichever renders your callback's HTML response
    inside ServiceM8, not a full page redirect)

Save it. Note your **App ID** and **App Secret** if you haven't already
(shown on this add-on's page) — put them into Railway's Variables as in
step 2.

## 4. Connect it

In ServiceM8, go to the add-on and click **Connect** again. This time it
should redirect you to `/oauth/start`, then to a real ServiceM8
authorisation screen ("JSJ Order Tool wants to access your ServiceM8
account — Allow?"). Approve it. You'll land on a small "✅ connected" page.

## 5. Try it

Open any job, click **Order materials** on the Job Card. Fill in the Job #,
supplier email, and flashings, click **Send order**, then check that job's
Diary tab for the note and PDF attachment, and check the supplier's inbox
for the email.

## Notes / next steps

- Only one ServiceM8 account can be connected at a time with this simple
  token-storage approach — fine for JSJ's internal use, but would need
  per-account storage if this were ever offered to other companies.
- If `/oauth/start` ever says "Not connected to ServiceM8 yet", it means the
  stored token got lost (e.g. no Volume attached, or it was reset) — just
  visit that URL once to reconnect.

---

## Update (July 2026) — real PDF, one-click send, automatic email

Three things changed:

1. **"Print / Save as PDF" now actually generates a PDF** in the browser
   (using html2canvas + jsPDF) instead of relying on the browser's print
   dialog, which wasn't reliably offering "Save as PDF" as a destination.
2. **"Post to diary" and "Email order" are merged** into one button, "Send
   order" — one click posts the note to the job diary, attaches the PDF to
   that job, and emails the supplier the PDF, all server-side.
3. The sketches are now actually attached as a real PDF, both to the job
   diary and to the supplier email — not just referenced as text.

### Redeploying

1. Push the updated `server.js`, `package.json`, `public/order-tool.html`,
   and `.env.example` to this repo (same as the original setup — replace
   the old versions). Railway redeploys automatically on push.
2. In Railway → **Variables**, add the new email variables from
   `.env.example`: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
   `SMTP_FROM_NAME`. See "Setting up email" below for `SMTP_PASS`.
3. Update `SM8_OAUTH_SCOPE` to add `manage_attachments` (needed to attach
   the PDF to a job) — the full value should now be:
   `read_jobs read_customers publish_job_notes manage_attachments`
4. **Reconnect the add-on**: existing tokens don't have the new scope, so
   visit `https://YOUR-RAILWAY-URL/oauth/start` once and approve again.
   Diary posting will briefly stop working if you skip this step, since the
   stored token won't be authorised for the new scope.

### Setting up email (SMTP_USER / SMTP_PASS)

This sends via Outlook/Microsoft 365 SMTP, authenticating as a real
mailbox (e.g. `orders@jsjroofing.com.au`).

1. In the Microsoft 365 admin center, make sure **Authenticated SMTP** is
   enabled for that mailbox: **Users → Active users → (the mailbox) → Mail
   → Manage email apps → enable "Authenticated SMTP"**. Some tenants have
   this off by default.
2. If the mailbox has MFA enabled, you can't use its normal password for
   SMTP — you need an **app password** instead: sign in as that user at
   `https://mysignins.microsoft.com/security-info` → **Add sign-in method**
   → **App password**. Use that as `SMTP_PASS`.
3. If app passwords aren't available (some tenants disable them via
   Security Defaults / Conditional Access), SMTP AUTH may be blocked
   entirely for your organisation — in that case this needs to move to the
   **Microsoft Graph API** (`sendMail`) instead of SMTP, which is more
   setup (an Azure app registration) but doesn't depend on legacy SMTP
   AUTH staying enabled. Worth checking with whoever manages your
   Microsoft 365 tenant first, since plenty of small-business tenants still
   have SMTP AUTH available.
4. Until `SMTP_USER`/`SMTP_PASS` are set, diary posting + PDF attachment
   still work fine — only the email step is skipped, and the response will
   report why (`emailError`).
