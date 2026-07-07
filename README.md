[README.md](https://github.com/user-attachments/files/29733146/README.md)
# JSJ Roofing — Material Order Tool, as a ServiceM8 add-on

This turns your order tool into a button that appears on Job Cards in
ServiceM8. Click it → the tool opens pre-filled with that job's client name
and address → fill in the flashings and materials → click "Post order to
ServiceM8 job diary" → it's saved as a note on that job, no email needed.

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
- **OAuth Scopes** → `read_jobs`, `read_customers`, `publish_job_notes`
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

Open any job, click **Order materials** on the Job Card. The tool should
open with the client name/job address already filled in. Fill in the
flashings, click **Post order to ServiceM8 job diary**, then check that
job's Diary tab for the note.

## Notes / next steps

- Sketches aren't included in the diary note yet — only the typed-out
  summary (colours, quantities, lengths, notes, other materials). Attaching
  the actual sketch image would need the server to turn the SVG into a
  PNG/PDF first; happy to add that next if it'd help.
- Only one ServiceM8 account can be connected at a time with this simple
  token-storage approach — fine for JSJ's internal use, but would need
  per-account storage if this were ever offered to other companies.
- If `/oauth/start` ever says "Not connected to ServiceM8 yet", it means the
  stored token got lost (e.g. no Volume attached, or it was reset) — just
  visit that URL once to reconnect.
