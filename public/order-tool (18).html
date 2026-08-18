<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>JSJ Roofing — Material Order</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<style>
:root{
  --green:#a2c354; --green-h:#91b343; --green-a:#82a33a;
  --blue:#0654a6; --cyan:#0088cf; --dark:#082b51;
  --surface:#f7f8f5; --surface-t:#eef0e8;
  --text:#231f20; --text-s:#5a5a5a; --text-t:#8a8a8a;
  --err:#d63031; --err-bg:#fdeaea; --info-bg:#e6f4fb;
  --bl:#e2e4dc; --bm:#c5c8bc;
  --sh:0 1px 3px rgba(35,31,32,0.06);
  --r4:4px;--r6:6px;--r8:8px;
}
*{box-sizing:border-box;margin:0;padding:0;}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
body{background:var(--surface);color:var(--text);font-family:'Inter',system-ui,sans-serif;font-size:1rem;line-height:1.6;}
.app{max-width:960px;margin:0 auto;padding:24px clamp(16px,4vw,40px) 80px;}

/* header */
.hdr{
  background:#fff;border-bottom:4px solid var(--green);
  border-radius:var(--r8) var(--r8) 0 0;
  display:grid;grid-template-columns:1fr auto;align-items:start;gap:24px;padding:32px 40px;
  box-shadow:var(--sh);
}
.hdr-brand{font-size:1.5rem;font-weight:600;color:var(--dark);line-height:1.2;}
.hdr-doc{font-size:.875rem;color:var(--text-s);margin-top:4px;}
.hdr-contact{display:flex;flex-wrap:wrap;gap:4px 24px;margin-top:16px;font-size:.875rem;color:var(--text-s);}
.hdr-right{display:flex;flex-direction:column;align-items:flex-end;gap:8px;}
.hdr-logo{
  height:56px;width:auto;display:block;
}
@media(max-width:600px){ .hdr-logo{height:44px;} }
.hdr-lic{font-size:.75rem;color:var(--text-t);text-align:right;}
@media(max-width:600px){
  .hdr{grid-template-columns:1fr;padding:20px;}
  .hdr-right{flex-direction:row;align-items:center;}
  .hdr-lic{text-align:left;}
}

/* section title */
.st{font-size:.6875rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--blue);margin:28px 0 8px;}

/* card */
.card{background:#fff;border:1px solid var(--bl);border-radius:var(--r8);padding:24px;box-shadow:var(--sh);}
.meta-card{border-radius:0 0 var(--r8) var(--r8);border-top:none;}

/* fields */
.mg{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;}
.f{display:flex;flex-direction:column;gap:6px;}
.f label{font-size:.875rem;font-weight:600;color:var(--text);}
.f input{
  background:#fff;border:1.5px solid var(--bl);border-radius:var(--r6);
  padding:10px 14px;font-size:1rem;font-family:inherit;color:var(--text);
  width:100%;min-height:44px;transition:border-color .15s,box-shadow .15s;
}
.f input::placeholder{color:var(--text-t);}
.f input:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(6,84,166,.12);}
.f.full{grid-column:1/-1;}

.srow{display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.selc{
  background:#fff;border:1.5px solid var(--bl);border-radius:var(--r6);
  padding:10px 14px;font-size:.875rem;font-family:inherit;color:var(--text);
  min-height:44px;flex:1;min-width:200px;
}
.selc:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(6,84,166,.12);}
.sup-row{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 0;border-bottom:1px solid var(--bl);}
.sup-row:last-child{border-bottom:none;}
.tg{display:flex;gap:8px;flex-wrap:wrap;}
.tog{
  flex:1;min-height:44px;border:1.5px solid var(--bl);background:#fff;border-radius:var(--r6);
  padding:10px 14px;font-size:.875rem;font-family:inherit;font-weight:600;
  color:var(--text-s);cursor:pointer;transition:all .15s;
}
.tog.on{background:var(--blue);border-color:var(--blue);color:#fff;}
.tog:not(.on):hover{border-color:var(--blue);color:var(--blue);}
.po{display:none;}

/* flashing card */
.ic{
  background:#fff;border:1px solid var(--bl);border-left:4px solid var(--green);
  border-radius:0 var(--r8) var(--r8) 0;padding:20px;margin-bottom:16px;box-shadow:var(--sh);
}
.ih{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}
.ihbtns{display:flex;gap:8px;align-items:center;}
.cp{background:#fff;border:1.5px solid var(--bl);color:#0654a6;border-radius:var(--r6);height:32px;padding:0 10px;cursor:pointer;font-size:13px;font-weight:600;white-space:nowrap;transition:all .15s;}
.cp:hover{background:#eaf3fb;border-color:#0654a6;}
.inum{
  display:inline-flex;align-items:center;justify-content:center;
  width:28px;height:28px;border-radius:9999px;
  background:var(--dark);color:#fff;font-weight:700;font-size:13px;flex-shrink:0;
}
.ri{background:#fff;border:1.5px solid var(--bl);color:var(--err);border-radius:var(--r6);width:32px;height:32px;cursor:pointer;font-size:14px;transition:all .15s;}
.ri:hover{background:var(--err-bg);border-color:var(--err);}

/* sketch */
.sscroll{overflow-x:auto;border-radius:var(--r6);}
.sc{
  position:relative;width:720px;height:280px;
  background-image:linear-gradient(to right,var(--bl) 1px,transparent 1px),linear-gradient(to bottom,var(--bl) 1px,transparent 1px);
  background-size:20px 20px;background-color:#fff;
  border:1px solid var(--bl);border-radius:var(--r6);cursor:crosshair;touch-action:none;
}
.sc svg{position:absolute;top:0;left:0;width:720px;height:280px;overflow:visible;}

/* inline SVG labels */
.sl-input{
  font-size:11px;font-family:'Inter',sans-serif;font-variant-numeric:tabular-nums;
  text-align:center;
}

.lbl-grip{
  position:absolute;top:-9px;left:-9px;width:15px;height:15px;border-radius:4px;
  background:#082b51;color:#fff;font-size:9px;line-height:15px;text-align:center;
  cursor:grab;user-select:none;box-shadow:0 1px 2px rgba(0,0,0,.35);z-index:2;
}
.lbl-grip::before{content:'⠿';}
.lbl-grip:active{cursor:grabbing;}
.lbl-resize{
  position:absolute;bottom:-6px;right:-6px;width:11px;height:11px;border-radius:2px;
  background:#082b51;border:1.5px solid #fff;cursor:nwse-resize;box-shadow:0 1px 2px rgba(0,0,0,.35);z-index:2;
}
.lbl-grip:hover,.lbl-resize:hover{background:var(--cyan);}
.sctrl{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;font-size:.75rem;color:var(--text-s);}
.hint{color:var(--text-t);font-size:.75rem;}
.iflds{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-top:16px;}

.mb{border:1.5px solid var(--blue);background:#fff;color:var(--blue);border-radius:var(--r6);padding:6px 14px;font-size:.875rem;font-family:inherit;font-weight:600;cursor:pointer;min-height:32px;transition:all .15s;}
.mb:hover{background:var(--blue);color:#fff;}
.mb.d{border-color:var(--err);color:var(--err);}
.mb.d:hover{background:var(--err);color:#fff;}
.mb.arrow-b:hover{background:#e2711d !important;color:#fff !important;}
.mb:disabled{opacity:.4;cursor:not-allowed;pointer-events:none;}

.ab{
  display:inline-flex;align-items:center;gap:8px;justify-content:center;
  background:#fff;border:1.5px dashed var(--bm);color:var(--blue);
  border-radius:var(--r8);padding:11px 14px;font-size:.875rem;font-family:inherit;
  font-weight:600;cursor:pointer;width:100%;margin-top:4px;min-height:44px;transition:all .15s;
}
.ab:hover{border-color:var(--blue);background:var(--info-bg);}

/* table */
table.pt{width:100%;border-collapse:collapse;font-size:.875rem;}
table.pt th{background:var(--dark);color:#fff;font-weight:600;padding:12px 16px;text-align:left;font-size:.75rem;text-transform:uppercase;letter-spacing:.04em;}
table.pt th:first-child{border-radius:var(--r4) 0 0 0;}
table.pt th:last-child{border-radius:0 var(--r4) 0 0;}
table.pt td{padding:8px 12px;border-bottom:1px solid var(--bl);vertical-align:middle;}
table.pt tbody tr:nth-child(even){background:var(--surface);}
table.pt tbody tr:hover{background:var(--surface-t);}
table.pt input{border:1.5px solid transparent;border-radius:var(--r4);padding:6px 8px;font-size:.875rem;font-family:inherit;width:100%;background:transparent;transition:all .15s;}
table.pt input:hover{border-color:var(--bl);}
table.pt input:focus{outline:none;border-color:var(--blue);background:#fff;box-shadow:0 0 0 3px rgba(6,84,166,.12);}
.rr{background:none;border:none;color:var(--err);cursor:pointer;font-size:14px;width:32px;height:32px;border-radius:var(--r4);transition:background .15s;}
.rr:hover{background:var(--err-bg);}

/* buttons */
.acts{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap;}
.btn{border:none;border-radius:var(--r6);padding:12px 28px;font-size:1rem;font-family:inherit;font-weight:600;cursor:pointer;min-height:44px;transition:all .2s;}
.bp{background:var(--green);color:var(--dark);}
.bp:hover{background:var(--green-h);transform:translateY(-1px);box-shadow:0 4px 12px rgba(162,195,84,.3);}
.bp:active{background:var(--green-a);transform:translateY(0);}
.bs{background:transparent;color:var(--blue);border:2px solid var(--blue);padding:10px 26px;}
.bs:hover{background:var(--blue);color:#fff;}
.bg{background:none;border:none;color:var(--err);padding:10px 16px;}
.bg:hover{background:var(--err-bg);}
.enote{font-size:.75rem;color:var(--text-t);margin-top:12px;max-width:480px;line-height:1.5;}

/* PRINT */
@media print{
  html,body{background:#fff !important;}
  .np{display:none !important;}
  .po{display:inline !important;}
  html{-webkit-print-color-adjust:exact !important;print-color-adjust:exact !important;}
  .hdr{border-bottom:4px solid #a2c354 !important;box-shadow:none !important;padding:20px 24px !important;}
  .ic{border-left:4px solid #a2c354 !important;box-shadow:none !important;}
  .inum{background:#082b51 !important;color:#fff !important;}
  table.pt th{background:#082b51 !important;color:#fff !important;}
  .st{color:#0654a6 !important;}
  .hdr-brand{color:#082b51 !important;}
  .hdr,.card,.meta-card,.ic,table.pt{page-break-inside:avoid;break-inside:avoid;}
  .st{page-break-after:avoid;break-after:avoid;}
  .app{padding:0 !important;}
  .card{box-shadow:none;border:1px solid #ccc;}
  .f input{border:none !important;border-bottom:1px solid #999 !important;border-radius:0 !important;padding:3px 2px !important;box-shadow:none !important;background:transparent !important;}
  .sc{background-image:linear-gradient(to right,#e2e4dc 1px,transparent 1px),linear-gradient(to bottom,#e2e4dc 1px,transparent 1px) !important;border:1px solid #ccc !important;}
}

/* PDF CAPTURE — same rules as @media print above, but applied via a class
   so html2canvas (which does not evaluate @media print) renders identically
   to what the print stylesheet produces. Keep these two blocks in sync. */
body.pdf-capture{background:#fff !important;}
body.pdf-capture .np{display:none !important;}
body.pdf-capture .po{display:inline !important;}
body.pdf-capture .hdr{border-bottom:4px solid #a2c354 !important;box-shadow:none !important;padding:20px 24px !important;}
body.pdf-capture .ic{border-left:4px solid #a2c354 !important;box-shadow:none !important;}
body.pdf-capture .inum{background:#082b51 !important;color:#fff !important;}
body.pdf-capture table.pt th{background:#082b51 !important;color:#fff !important;}
body.pdf-capture .st{color:#0654a6 !important;}
body.pdf-capture .hdr-brand{color:#082b51 !important;}
body.pdf-capture .card{box-shadow:none !important;border:1px solid #ccc !important;}
body.pdf-capture .f input{border:none !important;border-bottom:1px solid #999 !important;border-radius:0 !important;padding:3px 2px !important;box-shadow:none !important;background:transparent !important;}
body.pdf-capture .sc{background-image:linear-gradient(to right,#e2e4dc 1px,transparent 1px),linear-gradient(to bottom,#e2e4dc 1px,transparent 1px) !important;border:1px solid #ccc !important;}
body.pdf-capture .app{padding:0 24px !important;}
/* html2canvas can't rasterise real <input> values well, so capture swaps
   inputs for a text span carrying the same value (see toPDF() in the script) */
body.pdf-capture .pdf-input-swap{
  display:flex;align-items:flex-end;box-sizing:border-box;border:none;border-bottom:1px solid #999;
  padding:0 2px 2px;font-family:inherit;font-size:1rem;line-height:1;color:var(--text);height:22px;width:100%;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
</style>
</head>
<body>
<div class="app">

  <div class="hdr">
    <div>
      <div class="hdr-brand">JSJ Roofing</div>
      <div class="hdr-doc">Material Order</div>
      <div class="hdr-contact">
        <span>3/58–60 Melbourne Rd, Riverstone NSW 2765</span>
        <span>(02) 9627 3232</span>
        <span>info@jsjroofing.com.au</span>
      </div>
    </div>
    <div class="hdr-right">
      <img class="hdr-logo" src="data:image/png;base64,PLACEHOLDER" alt="JSJ Roofing logo">
      <div class="hdr-lic">GOLD LIC. 451327C</div>
    </div>
  </div>

  <h2 class="st">Order details</h2>
  <div class="card meta-card">
    <div class="mg">
      <div class="f"><label>Ordered by</label><input id="orderedBy" placeholder="Your name"></div>
      <div class="f"><label>Ordered by — mobile</label><input id="orderedByPhone" type="tel" inputmode="tel" placeholder="e.g. 0412 345 678"></div>
      <div class="f full" style="margin-top:-8px;"><span class="hint">For fast responses on order queries, call the ordering tradesman above.</span></div>
      <div class="f"><label>Reference</label><input id="reference" placeholder="e.g. Dean Private"></div>
      <div class="f"><label>ServiceM8 Job #</label><input id="sm8JobNumber" placeholder="e.g. 1136" inputmode="numeric"></div>
      <div class="f"><label>Order date</label><input id="orderDate" type="date"></div>
      <div class="f full">
        <label>Supplier</label>
        <div class="srow np">
          <select id="supplierPick" class="selc">
            <option value="">— Select saved supplier —</option>
          </select>
          <button type="button" class="mb" id="saveSupplierBtn">+ Save current</button>
          <button type="button" class="mb" id="manageSupplierBtn">Manage saved</button>
          <span id="supSyncWarn" class="hint np" style="display:none;color:var(--err);"></span>
        </div>
        <div id="supplierManage" class="card np" style="display:none;margin-top:10px;padding:12px;"></div>
      </div>
      <div class="f"><label>Supplier name</label><input id="supplierName" placeholder="Supplier name"></div>
      <div class="f"><label>Supplier email</label><input id="supplierEmail" type="email" placeholder="orders@supplier.com.au"></div>
      <div class="f"><label>Delivery date</label><input id="deliveryDate" type="date"></div>
      <div class="f full">
        <label>Deliver to</label>
        <div class="tg np">
          <button type="button" class="tog on" data-v="store">Store</button>
          <button type="button" class="tog" data-v="site">Job site</button>
          <button type="button" class="tog" data-v="pickup">Pick up</button>
        </div>
        <span class="po" id="dtp"></span>

        <div id="storeAddrBlock" style="margin-top:8px;">
          <div class="srow np">
            <select id="storePick" class="selc">
              <option value="">— Select store/factory —</option>
            </select>
            <button type="button" class="mb" id="saveStoreBtn">+ Save current</button>
            <button type="button" class="mb" id="manageStoreBtn">Manage saved</button>
            <span id="storeSyncWarn" class="hint np" style="display:none;color:var(--err);"></span>
          </div>
          <input id="storeAddr" placeholder="Store / factory address" style="margin-top:8px;">
          <div id="storeManage" class="card np" style="display:none;margin-top:10px;padding:12px;"></div>
        </div>

        <input id="deliverAddr" placeholder="Job site address" style="display:none;margin-top:8px;">
      </div>
    </div>
  </div>

  <h2 class="st">Flashings / sketched items</h2>
  <div id="items"></div>
  <button type="button" class="ab np" id="addItem">+ Add flashing item</button>

  <h2 class="st">Other materials</h2>
  <div class="card" style="padding:16px;">
    <table class="pt">
      <thead><tr>
        <th style="width:72px;">Qty</th>
        <th>Description</th>
        <th style="width:96px;">Unit</th>
        <th style="width:36px;" class="np"></th>
      </tr></thead>
      <tbody id="pbody"></tbody>
    </table>
    <button type="button" class="ab np" id="addRow" style="margin-top:12px;">+ Add row</button>
  </div>

  <div class="acts np">
    <button type="button" class="btn bp" id="sendBtn">Send order (diary + email)</button>
    <button type="button" class="btn bs" id="pdfBtn">Download PDF</button>
    <button type="button" class="btn bg" id="clearBtn">Clear all</button>
  </div>
  <p class="enote np" id="enoteText">
    "Send order" builds a PDF of this order and attaches it to the ServiceM8 job diary (needs the
    Job # filled in above). On desktop it also opens a pre-filled email draft to the supplier —
    the PDF isn't attached to that draft automatically, so drag your downloaded copy into it. On
    mobile no email draft is opened; open the job in ServiceM8 and send the attached PDF to the
    supplier from there instead. "Download PDF" just saves a copy to this device without sending
    anything.
  </p>

  <datalist id="cols">
    <option value="Basalt"><option value="Surfmist"><option value="Monument">
    <option value="Woodland Grey"><option value="Manor Red"><option value="Night Sky">
    <option value="Shale Grey"><option value="Dune"><option value="Classic Cream">
    <option value="Wallaby"><option value="Cove"><option value="Jasper">
    <option value="Deep Ocean"><option value="Pale Eucalypt"><option value="Paperbark">
    <option value="Gully"><option value="Evening Haze"><option value="Bushland">
    <option value="Terrain"><option value="Ironstone"><option value="Windspray">
    <option value="Mangrove"><option value="Cottage Green"><option value="Wilderness">
    <option value="Pewter"><option value="Headland">
  </datalist>
</div>

<script>
(function(){
const NS='http://www.w3.org/2000/svg';
// window.__SM8_BACKEND__ is injected by the server when this page is served
// through the add-on; falls back to the same Railway URL so a standalone
// downloaded copy of this file works identically. Declared up here (rather
// than down by the send-order code, where it used to live) since the
// shared-presets sync further down needs it too.
const SM8_BACKEND=window.__SM8_BACKEND__||'https://jsj-order-tool-production.up.railway.app';
function svgEl(tag,attrs){
  const e=document.createElementNS(NS,tag);
  Object.entries(attrs||{}).forEach(([k,v])=>e.setAttribute(k,v));
  return e;
}

let ic=0;
const itemsEl=document.getElementById('items');
document.getElementById('orderDate').value=new Date().toISOString().slice(0,10);

// deliver toggle
const toggs=document.querySelectorAll('.tog');
const addrIn=document.getElementById('deliverAddr');
const storeBlockEl=document.getElementById('storeAddrBlock');
const storeAddrEl=document.getElementById('storeAddr');
const dtpEl=document.getElementById('dtp');
function syncD(){
  // Just the category here — the actual address (store or job site) is
  // shown by its own visible field below, so this doesn't repeat it.
  const v=document.querySelector('.tog.on').dataset.v;
  dtpEl.textContent=v==='store'?'Store':v==='pickup'?'Pick up (from supplier)':'Job site';
}
toggs.forEach(b=>b.addEventListener('click',()=>{
  toggs.forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  addrIn.style.display=b.dataset.v==='site'?'block':'none';
  storeBlockEl.style.display=b.dataset.v==='store'?'block':'none';
  syncD();
}));
addrIn.addEventListener('input',syncD);
syncD();

// ─────────────────────────────────────────────
// SHARED PRESETS (suppliers + store/factory addresses)
// These used to live only in this device's localStorage, which meant every
// phone/computer that opened the tool had to re-enter and re-save the same
// suppliers and addresses. They now sync through one small endpoint on the
// existing ServiceM8 backend (SM8_BACKEND) — GET /presets to read the
// shared list, PUT /presets to replace it — so any device saving or
// removing an entry updates it for every other device. localStorage is
// still used underneath, but purely as an instant-load cache and an
// offline fallback if the backend can't be reached; it's kept in sync with
// whatever the server last returned/accepted.
//
// NOTE: this needs a matching /presets route added to the backend — it
// isn't part of this HTML file. Until that route exists, every save/load
// here will silently fail over to this device's local cache (same as
// before), and the small warning next to "Manage saved" will say so.
// ─────────────────────────────────────────────
const PRESETS_URL=SM8_BACKEND+'/presets';
const SUPPLIER_KEY='jsj_suppliers_v1';
const STORE_KEY='jsj_store_addresses_v1';
function escHtml(s){
  return(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}
function loadLocalPresets(){
  let sup=[],st=[];
  try{ const v=JSON.parse(localStorage.getItem(SUPPLIER_KEY)); if(Array.isArray(v))sup=v; }catch(e){}
  try{ const v=JSON.parse(localStorage.getItem(STORE_KEY)); if(Array.isArray(v))st=v; }catch(e){}
  return{sup,st};
}
function cachePresetsLocally(){
  try{ localStorage.setItem(SUPPLIER_KEY,JSON.stringify(suppliers)); }catch(e){}
  try{ localStorage.setItem(STORE_KEY,JSON.stringify(stores)); }catch(e){}
}
{ const cached=loadLocalPresets(); var suppliers=cached.sup, stores=cached.st; }

let presetsSynced=true; // whether the shared backend is actually reachable
function setSyncWarning(ok){
  presetsSynced=ok;
  const msg=ok?'':'⚠ saved on this device only — couldn\'t reach shared storage';
  ['supSyncWarn','storeSyncWarn'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.textContent=msg;
    el.style.display=ok?'none':'inline';
  });
}
async function pushPresets(){
  cachePresetsLocally();
  try{
    const r=await fetch(PRESETS_URL,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({suppliers,stores})});
    setSyncWarning(r.ok);
  }catch(e){ setSyncWarning(false); }
}
async function pullPresets(){
  try{
    const r=await fetch(PRESETS_URL);
    if(!r.ok) throw new Error('bad status');
    const data=await r.json();
    if(Array.isArray(data.suppliers)) suppliers=data.suppliers;
    if(Array.isArray(data.stores)) stores=data.stores;
    cachePresetsLocally();
    setSyncWarning(true);
  }catch(e){
    // Backend not reachable, or the /presets route doesn't exist yet —
    // stick with this device's local cache rather than blocking the form.
    setSyncWarning(false);
  }
  renderSupPick();
  renderStorePick();
}

// ─────────────────────────────────────────────
// SUPPLIER PRESETS
// ─────────────────────────────────────────────
const supPick=document.getElementById('supplierPick');
const supNameEl=document.getElementById('supplierName');
const supEmailEl=document.getElementById('supplierEmail');
const supManageEl=document.getElementById('supplierManage');

function renderSupPick(){
  const cur=supPick.value;
  supPick.innerHTML='<option value="">— Select saved supplier —</option>'+
    suppliers.map((s,i)=>`<option value="${i}">${escHtml(s.name)}${s.email?' — '+escHtml(s.email):''}</option>`).join('');
  if(cur!=='' && +cur<suppliers.length) supPick.value=cur;
}
renderSupPick();

supPick.addEventListener('change',()=>{
  if(supPick.value==='')return;
  const s=suppliers[+supPick.value];
  if(s){ supNameEl.value=s.name; supEmailEl.value=s.email||''; }
});

document.getElementById('saveSupplierBtn').onclick=()=>{
  const name=supNameEl.value.trim(), email=supEmailEl.value.trim();
  if(!name){ alert('Enter a supplier name before saving it.'); return; }
  const i=suppliers.findIndex(s=>s.name.toLowerCase()===name.toLowerCase());
  if(i>-1) suppliers[i]={name,email}; else suppliers.push({name,email});
  pushPresets();
  renderSupPick();
  const idx=suppliers.findIndex(s=>s.name.toLowerCase()===name.toLowerCase());
  if(idx>-1) supPick.value=idx;
  if(supManageEl.style.display!=='none') renderSupManage();
};

function renderSupManage(){
  if(!suppliers.length){
    supManageEl.innerHTML='<p class="hint" style="margin:0;">No saved suppliers yet — fill in the name/email above and click "+ Save current".</p>';
    return;
  }
  supManageEl.innerHTML=suppliers.map((s,i)=>`
    <div class="sup-row">
      <div style="font-size:.875rem;"><strong>${escHtml(s.name)}</strong>${s.email?'<br><span style="color:var(--text-s);">'+escHtml(s.email)+'</span>':''}</div>
      <button type="button" class="rr" data-i="${i}" title="Remove">✕</button>
    </div>`).join('');
  supManageEl.querySelectorAll('.rr').forEach(b=>{
    b.onclick=()=>{
      const i=+b.dataset.i;
      if(!confirm('Remove saved supplier "'+suppliers[i].name+'"?'))return;
      suppliers.splice(i,1);
      pushPresets();
      renderSupPick();
      renderSupManage();
    };
  });
}
document.getElementById('manageSupplierBtn').onclick=()=>{
  const isOpen=supManageEl.style.display!=='none';
  if(isOpen){ supManageEl.style.display='none'; }
  else{ renderSupManage(); supManageEl.style.display='block'; }
};

// ─────────────────────────────────────────────
// STORE / FACTORY ADDRESS PRESETS
// Same idea as supplier presets: pick between current sites (e.g. two
// factories right now) from a dropdown instead of retyping the address,
// and old ones can be removed once the business consolidates into a
// single address — that removal now applies everywhere, not just the
// device that removed it.
// ─────────────────────────────────────────────
const storePick=document.getElementById('storePick');
const storeManageEl=document.getElementById('storeManage');

function renderStorePick(){
  const cur=storePick.value;
  storePick.innerHTML='<option value="">— Select store/factory —</option>'+
    stores.map((s,i)=>`<option value="${i}">${escHtml(s.name)}</option>`).join('');
  if(cur!=='' && +cur<stores.length) storePick.value=cur;
}
renderStorePick();

storePick.addEventListener('change',()=>{
  if(storePick.value==='')return;
  const s=stores[+storePick.value];
  if(s){ storeAddrEl.value=s.address||''; syncD(); }
});

document.getElementById('saveStoreBtn').onclick=()=>{
  const addr=storeAddrEl.value.trim();
  if(!addr){ alert('Enter the store/factory address first, then click "+ Save current".'); return; }
  const name=(prompt('Short label for this address (e.g. "Riverstone factory"):','')||'').trim();
  if(!name)return;
  const i=stores.findIndex(s=>s.name.toLowerCase()===name.toLowerCase());
  if(i>-1) stores[i]={name,address:addr}; else stores.push({name,address:addr});
  pushPresets();
  renderStorePick();
  const idx=stores.findIndex(s=>s.name.toLowerCase()===name.toLowerCase());
  if(idx>-1) storePick.value=idx;
  if(storeManageEl.style.display!=='none') renderStoreManage();
};

function renderStoreManage(){
  if(!stores.length){
    storeManageEl.innerHTML='<p class="hint" style="margin:0;">No saved addresses yet — enter one above and click "+ Save current".</p>';
    return;
  }
  storeManageEl.innerHTML=stores.map((s,i)=>`
    <div class="sup-row">
      <div style="font-size:.875rem;"><strong>${escHtml(s.name)}</strong><br><span style="color:var(--text-s);">${escHtml(s.address)}</span></div>
      <button type="button" class="rr" data-i="${i}" title="Remove">✕</button>
    </div>`).join('');
  storeManageEl.querySelectorAll('.rr').forEach(b=>{
    b.onclick=()=>{
      const i=+b.dataset.i;
      if(!confirm('Remove saved address "'+stores[i].name+'"?'))return;
      stores.splice(i,1);
      pushPresets();
      renderStorePick();
      renderStoreManage();
    };
  });
}
document.getElementById('manageStoreBtn').onclick=()=>{
  const isOpen=storeManageEl.style.display!=='none';
  if(isOpen){ storeManageEl.style.display='none'; }
  else{ renderStoreManage(); storeManageEl.style.display='block'; }
};

// Kick off the shared-storage fetch now that both dropdowns exist. The
// local cache (already loaded above) keeps the form usable instantly in
// the meantime; this just reconciles it with the shared copy once it
// arrives.
pullPresets();

// ─────────────────────────────────────────────
// SKETCH ENGINE v4
// • Each line segment gets a measurement label
//   rendered as a <foreignObject> inside the SVG,
//   offset perpendicular to the segment.
// • Each interior vertex gets an angle label
//   cycling: none → internal → external → none
//   positioned on the bisector, no arc drawn.
// ─────────────────────────────────────────────
function makeSketch(wrap){
  const W=720,H=280;
  // create svg
  const svg=document.createElementNS(NS,'svg');
  svg.setAttribute('xmlns',NS);
  svg.style.cssText='position:absolute;top:0;left:0;width:720px;height:280px;overflow:visible;';
  wrap.appendChild(svg);

  const pts=[];
  // Drawing / measuring is split into two phases so touch mis-taps while
  // placing points can't be picked up as label/angle interactions, and vice
  // versa: while drawing (locked=false), taps only place new points; once
  // "Complete flashing" locks the shape, taps only cycle angle labels and
  // no new points/lines can be added (see the wrap click handler below).
  let locked=false;
  // segLabels[i] covers segment from pts[i] to pts[i+1]
  // {fo, inp, reposition()} — see createLabel()
  const segLabels=[];
  // angLabels[v] = {mode:'int'|'ext', fo, inp, reposition()} or undefined
  const angLabels={};

  const SOFF=16; // perp offset for seg labels (px from line)
  const ANG_D=22; // bisector distance for angle label

  function norm(dx,dy){const l=Math.hypot(dx,dy)||1;return{x:dx/l,y:dy/l};}
  function perp2(a,b){
    // left-hand perpendicular of direction a→b
    const dx=b.x-a.x,dy=b.y-a.y;
    const n=norm(dx,dy);
    return{x:-n.y,y:n.x};
  }
  function mid(a,b){return{x:(a.x+b.x)/2,y:(a.y+b.y)/2};}
  function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
  function clamp(v,lo,hi){return Math.max(lo,Math.min(hi,v));}

  // ── generic draggable + resizable label ──
  // getBasePos() returns the auto-computed anchor {x,y} (or null if invalid).
  // The label can be dragged (moving its top-left offset from that anchor)
  // and resized from its bottom-right corner; both persist as the sketch
  // is edited, until the point/segment itself is removed.
  function createLabel(opts){
    const st={
      w:opts.defW, h:opts.defH,
      ox:-opts.defW/2, oy:-opts.defH/2 // top-left offset from anchor
    };
    const wrap=document.createElement('div');
    wrap.style.cssText='position:relative;width:100%;height:100%;';
    const inp=document.createElement('input');
    inp.placeholder=opts.placeholder;
    inp.title=opts.title;
    if(opts.numeric){inp.setAttribute('inputmode','decimal');}
    // Persistent unit suffix (e.g. "°" for angles) — shown as its own element
    // rather than baked into the placeholder, so it stays visible once the
    // tradesman types a value instead of disappearing (a bare "45" reads as
    // ambiguous to a supplier; "45°" doesn't).
    let suffixEl=null;
    if(opts.suffix){
      suffixEl=document.createElement('span');
      suffixEl.textContent=opts.suffix;
      suffixEl.style.cssText=`position:absolute;top:0;right:3px;height:100%;display:flex;align-items:center;pointer-events:none;font-family:Inter,sans-serif;font-weight:600;color:${opts.color};`;
    }
    const grip=document.createElement('div');
    grip.className='lbl-grip np';
    grip.title='Drag to move';
    const rez=document.createElement('div');
    rez.className='lbl-resize np';
    rez.title='Drag to resize';
    wrap.appendChild(inp);
    if(suffixEl) wrap.appendChild(suffixEl);
    wrap.appendChild(grip);wrap.appendChild(rez);
    function styleInput(){
      const fs=clamp(Math.round(st.h*0.5),8,18);
      const padRight=opts.suffix?Math.max(14,Math.round(fs*0.95)):2;
      inp.style.cssText=`width:100%;height:100%;box-sizing:border-box;font-size:${fs}px;font-family:Inter,sans-serif;font-variant-numeric:tabular-nums;text-align:${opts.suffix?'right':'center'};border:1.5px solid ${opts.color};border-radius:3px;background:rgba(255,255,255,0.95);padding:0 ${padRight}px 0 2px;display:block;`;
      if(suffixEl) suffixEl.style.fontSize=Math.round(fs*0.85)+'px';
    }
    styleInput();
    const fo=svgEl('foreignObject',{x:0,y:0,width:st.w,height:st.h,overflow:'visible'});
    fo.appendChild(wrap);
    function reposition(){
      const base=opts.getBasePos();
      if(!base) return false;
      fo.setAttribute('x',base.x+st.ox);
      fo.setAttribute('y',base.y+st.oy);
      fo.setAttribute('width',st.w);
      fo.setAttribute('height',st.h);
      return true;
    }
    // drag (move)
    grip.addEventListener('pointerdown',e=>{
      e.stopPropagation();e.preventDefault();
      grip.setPointerCapture(e.pointerId);
      const start={x:e.clientX,y:e.clientY};
      const startOff={ox:st.ox,oy:st.oy};
      function move(ev){
        st.ox=startOff.ox+(ev.clientX-start.x);
        st.oy=startOff.oy+(ev.clientY-start.y);
        reposition();
      }
      function up(){
        grip.removeEventListener('pointermove',move);
        grip.removeEventListener('pointerup',up);
      }
      grip.addEventListener('pointermove',move);
      grip.addEventListener('pointerup',up);
    });
    // resize (bottom-right handle, top-left stays put)
    rez.addEventListener('pointerdown',e=>{
      e.stopPropagation();e.preventDefault();
      rez.setPointerCapture(e.pointerId);
      const start={x:e.clientX,y:e.clientY};
      const startWH={w:st.w,h:st.h};
      function move(ev){
        st.w=clamp(startWH.w+(ev.clientX-start.x),opts.minW,opts.maxW);
        st.h=clamp(startWH.h+(ev.clientY-start.y),opts.minH,opts.maxH);
        styleInput();
        reposition();
      }
      function up(){
        rez.removeEventListener('pointermove',move);
        rez.removeEventListener('pointerup',up);
      }
      rez.addEventListener('pointermove',move);
      rez.addEventListener('pointerup',up);
    });
    return{fo,inp,reposition};
  }

  // ── segment label ──
  function segLabelXY(i){
    const a=pts[i],b=pts[i+1];
    const m=mid(a,b);
    const p=perp2(a,b);
    return{x:m.x+p.x*SOFF,y:m.y+p.y*SOFF};
  }
  function addSegLabel(i){
    const lbl=createLabel({
      getBasePos:()=>segLabelXY(i),
      placeholder:'mm',title:'Measurement for this segment (drag ⠿ to move, corner to resize)',
      color:'#0088cf',defW:52,defH:20,minW:34,maxW:160,minH:16,maxH:48
    });
    svg.appendChild(lbl.fo);
    lbl.reposition();
    segLabels[i]=lbl;
  }
  function moveSegLabel(i){
    if(!segLabels[i])return;
    segLabels[i].reposition();
  }

  // ── angle label ──
  // Returns the bisector position for a vertex v
  // mode 'int' = into the opening angle, 'ext' = away
  function angLabelXY(v,mode){
    const p=pts[v];
    if(v===0||v===pts.length-1) return null; // endpoints
    const prev=pts[v-1],next=pts[v+1];
    // unit vectors from v toward prev and next
    const dp=dist(p,prev)||1, dn=dist(p,next)||1;
    const upx=(prev.x-p.x)/dp, upy=(prev.y-p.y)/dp;
    const unx=(next.x-p.x)/dn, uny=(next.y-p.y)/dn;
    // bisector = sum of unit vectors
    let bx=upx+unx, by=upy+uny;
    const bl=Math.hypot(bx,by);
    if(bl<0.001){
      // degenerate (straight line) — perp
      bx=-upy;by=upx;
    } else {
      bx/=bl;by/=bl;
    }
    if(mode==='ext'){bx=-bx;by=-by;}
    return{x:p.x+bx*ANG_D,y:p.y+by*ANG_D};
  }
  function addAngLabel(v,mode){
    const pos=angLabelXY(v,mode);
    if(!pos) return;
    const lbl=createLabel({
      getBasePos:()=>angLabelXY(v,angLabels[v]?angLabels[v].mode:mode),
      placeholder:'',title:(mode==='int'?'Internal angle':'External angle')+' (drag ⠿ to move, corner to resize)',
      color:'#082b51',defW:36,defH:18,minW:24,maxW:120,minH:14,maxH:40,suffix:'°'
    });
    svg.appendChild(lbl.fo);
    lbl.reposition();
    angLabels[v]={mode,fo:lbl.fo,inp:lbl.inp,reposition:lbl.reposition};
  }
  function removeAngLabel(v){
    if(!angLabels[v])return;
    if(angLabels[v].fo.parentNode)angLabels[v].fo.parentNode.removeChild(angLabels[v].fo);
    delete angLabels[v];
  }
  function moveAngLabel(v){
    if(!angLabels[v])return;
    if(!angLabelXY(v,angLabels[v].mode)){removeAngLabel(v);return;}
    angLabels[v].reposition();
  }
  function cycleAngle(v){
    const cur=angLabels[v];
    if(!cur){
      addAngLabel(v,'int');
    } else if(cur.mode==='int'){
      const old=cur.inp.value;
      removeAngLabel(v);
      addAngLabel(v,'ext');
      if(old) angLabels[v].inp.value=old;
    } else {
      removeAngLabel(v);
    }
  }

  // ── colour-side arrow annotations ──
  // Each arrow: {x,y} center, angle (radians), length. Movable via its
  // centre handle, and re-aimed / resized by dragging its tip handle.
  const arrows=[];
  const ARROW_COLOR='#e2711d';
  function arrowGeom(a){
    const hx=a.x+Math.cos(a.angle)*a.length/2, hy=a.y+Math.sin(a.angle)*a.length/2;
    const tx=a.x-Math.cos(a.angle)*a.length/2, ty=a.y-Math.sin(a.angle)*a.length/2;
    return{hx,hy,tx,ty};
  }
  function arrowHeadPts(a,hx,hy){
    const s=11;
    const back={x:hx-Math.cos(a.angle)*s,y:hy-Math.sin(a.angle)*s};
    const px=-Math.sin(a.angle),py=Math.cos(a.angle);
    const p2={x:back.x+px*s*0.55,y:back.y+py*s*0.55};
    const p3={x:back.x-px*s*0.55,y:back.y-py*s*0.55};
    return`${hx},${hy} ${p2.x},${p2.y} ${p3.x},${p3.y}`;
  }
  function addArrow(){
    const a={x:W/2,y:H/2,angle:-Math.PI/2,length:60};
    const g=svgEl('g',{class:'arrow-el'});
    const line=svgEl('line',{stroke:ARROW_COLOR,'stroke-width':'3.5','stroke-linecap':'round'});
    const head=svgEl('polygon',{fill:ARROW_COLOR});
    const moveH=svgEl('circle',{r:8,fill:ARROW_COLOR,stroke:'#fff','stroke-width':'2',class:'np'});
    moveH.style.cursor='grab';
    const tipH=svgEl('circle',{r:6,fill:'#fff',stroke:ARROW_COLOR,'stroke-width':'2',class:'np'});
    tipH.style.cursor='crosshair';
    const rmBg=svgEl('circle',{r:9,fill:'#082b51',class:'np'});
    rmBg.style.cursor='pointer';
    const rm=svgEl('text',{class:'np','font-size':'12',fill:'#fff','text-anchor':'middle','dominant-baseline':'central','pointer-events':'none'});
    rm.textContent='✕';
    g.append(line,head,moveH,tipH,rmBg,rm);
    svg.appendChild(g);

    function reposition(){
      const{hx,hy,tx,ty}=arrowGeom(a);
      line.setAttribute('x1',tx);line.setAttribute('y1',ty);
      line.setAttribute('x2',hx);line.setAttribute('y2',hy);
      head.setAttribute('points',arrowHeadPts(a,hx,hy));
      moveH.setAttribute('cx',a.x);moveH.setAttribute('cy',a.y);
      tipH.setAttribute('cx',hx);tipH.setAttribute('cy',hy);
      rmBg.setAttribute('cx',a.x);rmBg.setAttribute('cy',a.y-22);
      rm.setAttribute('x',a.x);rm.setAttribute('y',a.y-22);
    }
    reposition();

    moveH.addEventListener('pointerdown',e=>{
      e.stopPropagation();e.preventDefault();
      moveH.setPointerCapture(e.pointerId);
      const start={x:e.clientX,y:e.clientY};
      const startPos={x:a.x,y:a.y};
      function move(ev){
        a.x=startPos.x+(ev.clientX-start.x);
        a.y=startPos.y+(ev.clientY-start.y);
        reposition();
      }
      function up(){moveH.removeEventListener('pointermove',move);moveH.removeEventListener('pointerup',up);}
      moveH.addEventListener('pointermove',move);
      moveH.addEventListener('pointerup',up);
    });

    tipH.addEventListener('pointerdown',e=>{
      e.stopPropagation();e.preventDefault();
      tipH.setPointerCapture(e.pointerId);
      function move(ev){
        const r=wrap.getBoundingClientRect();
        const mx=ev.clientX-r.left, my=ev.clientY-r.top;
        const dx=mx-a.x, dy=my-a.y;
        a.angle=Math.atan2(dy,dx);
        a.length=clamp(Math.hypot(dx,dy)*2,24,260);
        reposition();
      }
      function up(){tipH.removeEventListener('pointermove',move);tipH.removeEventListener('pointerup',up);}
      tipH.addEventListener('pointermove',move);
      tipH.addEventListener('pointerup',up);
    });

    function removeSelf(){
      if(g.parentNode) g.parentNode.removeChild(g);
      const idx=arrows.indexOf(entry);
      if(idx>-1) arrows.splice(idx,1);
    }
    rmBg.addEventListener('pointerdown',e=>e.stopPropagation());
    rmBg.addEventListener('click',e=>{e.stopPropagation();removeSelf();});
    rm.addEventListener('click',e=>{e.stopPropagation();removeSelf();});

    const entry={g,a,reposition,remove:removeSelf};
    arrows.push(entry);
    return entry;
  }

  // ── full render ──
  function render(){
    // Remove and redraw only the polyline's own <line>/<circle> elements —
    // scoped to direct children of the svg so this doesn't also sweep up
    // the colour-side arrow's <line> shaft and its drag-handle <circle>s,
    // which live one level deeper inside their own <g class="arrow-el">.
    // Removing those every render() (which used to happen unscoped) is what
    // made the arrow lose its shaft/handles — leaving only its arrowhead and
    // "✕" behind — as soon as another point was added or a vertex dragged.
    svg.querySelectorAll(':scope > line, :scope > circle').forEach(e=>e.remove());
    // draw lines
    for(let i=0;i<pts.length-1;i++){
      const l=svgEl('line',{x1:pts[i].x,y1:pts[i].y,x2:pts[i+1].x,y2:pts[i+1].y,stroke:'#082b51','stroke-width':'2.5'});
      svg.insertBefore(l,svg.firstChild);
    }
    // draw vertices
    pts.forEach((p,i)=>{
      const c=svgEl('circle',{cx:p.x,cy:p.y,r:5,fill:'#a2c354',stroke:'#fff','stroke-width':'2'});
      c.style.cursor='grab';
      svg.appendChild(c);
      bindV(c,i);
    });
    // reposition all labels
    segLabels.forEach((sl,i)=>{ if(sl) moveSegLabel(i); });
    Object.keys(angLabels).forEach(v=>moveAngLabel(+v));
  }

  // ── drag vertex ──
  function bindV(c,i){
    let s=null,drag=false;
    c.addEventListener('pointerdown',e=>{e.stopPropagation();s={x:e.clientX,y:e.clientY};drag=false;c.setPointerCapture(e.pointerId);});
    c.addEventListener('pointermove',e=>{
      if(!s)return;
      if(dist({x:e.clientX,y:e.clientY},s)>4){
        drag=true;
        const r=wrap.getBoundingClientRect();
        let x=Math.max(0,Math.min(W,e.clientX-r.left));
        let y=Math.max(0,Math.min(H,e.clientY-r.top));
        pts[i]={x,y};c.setAttribute('cx',x);c.setAttribute('cy',y);
        // redraw lines — same direct-child scoping as render() above, so
        // this doesn't delete the colour-side arrow's line either.
        svg.querySelectorAll(':scope > line').forEach(l=>l.remove());
        for(let j=0;j<pts.length-1;j++){
          const l=svgEl('line',{x1:pts[j].x,y1:pts[j].y,x2:pts[j+1].x,y2:pts[j+1].y,stroke:'#082b51','stroke-width':'2.5'});
          svg.insertBefore(l,svg.firstChild);
        }
        // move labels for adjacent segments
        if(i>0) moveSegLabel(i-1);
        moveSegLabel(i);
        // move angle labels for this and adjacent vertices
        [-1,0,1].forEach(d=>{const v=i+d;if(v>=0&&v<pts.length)moveAngLabel(v);});
      }
    });
    c.addEventListener('pointerup',()=>{if(!drag&&locked)cycleAngle(i);s=null;drag=false;});
  }

  // ── add point ──
  // Only active while the shape is unlocked (still being drawn). Segment
  // labels aren't created here anymore — they're generated in bulk by
  // completeDrawing() below once the outline is finished, so no editable
  // inputs exist yet to catch stray taps while the shape is still taking
  // form.
  wrap.addEventListener('click',e=>{
    if(locked)return;
    if(e.target.closest('foreignObject')||e.target.tagName==='circle'||e.target.closest('g.arrow-el'))return;
    const r=wrap.getBoundingClientRect();
    pts.push({x:e.clientX-r.left,y:e.clientY-r.top});
    render();
  });

  function clearAll(){
    pts.length=0;
    segLabels.forEach(sl=>{if(sl&&sl.fo.parentNode)sl.fo.parentNode.removeChild(sl.fo);});
    segLabels.length=0;
    Object.keys(angLabels).forEach(v=>removeAngLabel(+v));
    arrows.slice().forEach(a=>a.remove());
    render();
  }

  return{
    isLocked(){return locked;},
    toggleLock(){
      if(locked){
        locked=false;
      }else{
        // Finalise: create a measurement label for every segment that
        // doesn't already have one (covers both a first-time completion and
        // re-completing after "Edit shape" added more points).
        for(let i=0;i<pts.length-1;i++){
          if(!segLabels[i]) addSegLabel(i);
        }
        locked=true;
      }
    },
    undo(){
      if(!pts.length)return;
      const li=pts.length-1;
      // remove seg label for last segment
      if(segLabels[li-1]){
        if(segLabels[li-1].fo.parentNode)segLabels[li-1].fo.parentNode.removeChild(segLabels[li-1].fo);
        segLabels.splice(li-1,1);
      }
      // remove ang label for last point
      removeAngLabel(li);
      // if second-to-last point was interior, its ang label may be invalid now
      if(li-1>0) moveAngLabel(li-1);
      pts.pop();
      render();
    },
    clear(){clearAll();},
    addArrow(){addArrow();},
    // ── copy sketch (used by the item-level "Copy" button) ──
    // Captures everything needed to reproduce this sketch elsewhere: point
    // positions, each segment's entered length text, each angle label's
    // mode+value, and every arrow's position/angle/length. Label *values*
    // are read straight from their live <input>s since that's the only
    // place the typed text lives.
    getState(){
      return{
        locked,
        pts:pts.map(p=>({x:p.x,y:p.y})),
        segValues:segLabels.map(sl=>sl?sl.inp.value:null),
        angValues:Object.fromEntries(Object.entries(angLabels).map(([v,l])=>[v,{mode:l.mode,value:l.inp.value}])),
        arrows:arrows.map(en=>({x:en.a.x,y:en.a.y,angle:en.a.angle,length:en.a.length}))
      };
    },
    loadState(state){
      clearAll();
      (state.pts||[]).forEach(p=>pts.push({x:p.x,y:p.y}));
      render(); // lays down points/vertices; no labels yet
      (state.segValues||[]).forEach((val,i)=>{
        if(val===null||val===undefined)return;
        if(i>=pts.length-1)return; // guard against a malformed/oversized state
        addSegLabel(i);
        segLabels[i].inp.value=val;
      });
      Object.entries(state.angValues||{}).forEach(([v,info])=>{
        const vi=+v;
        if(vi<=0||vi>=pts.length-1)return; // only interior vertices can carry an angle
        addAngLabel(vi,info.mode);
        if(angLabels[vi]) angLabels[vi].inp.value=info.value;
      });
      (state.arrows||[]).forEach(ar=>{
        const en=addArrow();
        en.a.x=ar.x;en.a.y=ar.y;en.a.angle=ar.angle;en.a.length=ar.length;
        en.reposition();
      });
      locked=!!state.locked;
    }
  };
}

// ── build flashing card ──
function buildItem(n){
  ic++;
  const card=document.createElement('div');
  card.className='ic';
  card.innerHTML=`
    <div class="ih">
      <span class="inum">${n}</span>
      <div class="ihbtns np">
        <button type="button" class="cp" title="Copy this flashing to a new item">⧉ Copy</button>
        <button type="button" class="ri" title="Remove">✕</button>
      </div>
    </div>
    <div class="sscroll">
      <div class="sc"></div>
    </div>
    <div class="sctrl np">
      <button type="button" class="mb done-b" style="border-color:#0654a6;color:#0654a6;">Complete flashing ✓</button>
      <button type="button" class="mb undo-b">Undo point</button>
      <button type="button" class="mb d clear-b">Clear sketch</button>
      <button type="button" class="mb arrow-b" style="border-color:#e2711d;color:#e2711d;">+ Colour-side arrow</button>
      <span class="hint sk-hint">Tap to place points for the flashing profile · drag a point to move it · tap "Complete flashing" once the outline is right, then add measurements and angles</span>
    </div>
    <div class="iflds">
      <div class="f"><label>Colour</label><input class="fc" list="cols" placeholder="e.g. Basalt"></div>
      <div class="f"><label>Quantity</label><input class="fq" type="number" min="1" value="1"></div>
      <div class="f"><label>Length per piece (mm)</label><input class="fl" type="number" placeholder="e.g. 1300"></div>
      <div class="f full"><label>Notes / custom description</label><input class="fn" placeholder="profile name, special instructions…"></div>
    </div>
  `;
  itemsEl.appendChild(card);
  const sk=makeSketch(card.querySelector('.sc'));
  const doneBtn=card.querySelector('.done-b');
  const undoBtn=card.querySelector('.undo-b');
  const clearBtn2=card.querySelector('.clear-b');
  const hintEl=card.querySelector('.sk-hint');
  const DRAW_HINT='Tap to place points for the flashing profile · drag a point to move it · tap "Complete flashing" once the outline is right, then add measurements and angles';
  const MEASURE_HINT='Tap a point to cycle its angle label (none / internal° / external°) · drag a label\'s ⠿ handle to reposition it, or its corner handle to resize it · drag an arrow\'s tip to aim it, its centre dot to move it, or its ✕ to remove it · tap "Edit shape" to change the outline';
  function refreshLockUI(){
    const locked=sk.isLocked();
    doneBtn.textContent=locked?'Edit shape ✎':'Complete flashing ✓';
    undoBtn.disabled=locked;
    clearBtn2.disabled=locked;
    hintEl.textContent=locked?MEASURE_HINT:DRAW_HINT;
  }
  doneBtn.onclick=()=>{sk.toggleLock();refreshLockUI();};
  undoBtn.onclick=()=>sk.undo();
  clearBtn2.onclick=()=>sk.clear();
  card.querySelector('.arrow-b').onclick=()=>sk.addArrow();
  card.querySelector('.ri').onclick=()=>{card.remove();renum();};
  // Exposed so the "Copy" button on any item (including future ones) can
  // read/replay this item's sketch and refresh its own lock-state UI —
  // see the copy handler below.
  card._sketch=sk;
  card._refreshLockUI=refreshLockUI;
  card.querySelector('.cp').onclick=()=>{
    // Same drawing and measurements, just needs a different length or
    // colour for this particular piece: grab everything from this item...
    const state=sk.getState();
    const colour=card.querySelector('.fc').value;
    const qty=card.querySelector('.fq').value;
    const lengthPerPiece=card.querySelector('.fl').value;
    const notes=card.querySelector('.fn').value;
    // ...and drop it all into a brand-new item at the end of the list,
    // ready to tweak whichever field is actually different this time.
    const newCard=buildItem(document.querySelectorAll('.ic').length+1);
    newCard._sketch.loadState(state);
    newCard.querySelector('.fc').value=colour;
    newCard.querySelector('.fq').value=qty||'1';
    newCard.querySelector('.fl').value=lengthPerPiece;
    newCard.querySelector('.fn').value=notes;
    newCard._refreshLockUI();
    if(typeof newCard.scrollIntoView==='function') newCard.scrollIntoView({behavior:'smooth',block:'center'});
  };
  refreshLockUI();
  return card;
}
function renum(){document.querySelectorAll('.ic').forEach((c,i)=>c.querySelector('.inum').textContent=i+1);}
document.getElementById('addItem').onclick=()=>buildItem(document.querySelectorAll('.ic').length+1);
buildItem(1);

// plain materials
const pb=document.getElementById('pbody');
function addRow(){
  const tr=document.createElement('tr');
  tr.innerHTML=`
    <td><input class="pq" type="number" min="1" value="1" style="text-align:right;"></td>
    <td><input class="pd" placeholder="Description"></td>
    <td><input class="pu" placeholder="ea / box / m"></td>
    <td class="np" style="text-align:center;"><button type="button" class="rr">✕</button></td>
  `;
  pb.appendChild(tr);
  tr.querySelector('.rr').onclick=()=>tr.remove();
}
document.getElementById('addRow').onclick=addRow;
addRow();

// clear
document.getElementById('clearBtn').onclick=()=>{
  if(!confirm('Clear the whole order?'))return;
  ['reference','supplierName','supplierEmail','orderedBy','orderedByPhone','deliverAddr','storeAddr','deliveryDate'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  itemsEl.innerHTML='';ic=0;buildItem(1);
  pb.innerHTML='';addRow();
};

// ─────────────────────────────────────────────
// PDF GENERATION
// Renders the whole order (header, fields, sketches, materials table) exactly
// as it appears on screen into a real, downloadable multi-page PDF — using
// html2canvas + jsPDF, entirely in the browser. This replaces window.print(),
// which depends on the device/browser offering a "Save as PDF" print
// destination — something that isn't reliable on tablets, in embedded
// webviews, or in some in-app browsers. This approach always produces an
// actual .pdf file, no OS print dialog involved.
// ─────────────────────────────────────────────
async function buildOrderPDF(){
  // Capture happens on an off-screen CLONE rendered at a fixed,
  // desktop-equivalent width (960px — the same as .app's max-width),
  // regardless of the real device viewport.
  //
  // Why: the "Order details" field grid (.mg) uses
  // grid-template-columns:repeat(auto-fit,minmax(200px,1fr)). On a phone
  // screen there isn't room for more than one 200px column, so it collapses
  // to a single column and the card becomes 2-3x taller than it is on
  // desktop (where 3-4 fields sit side by side). That taller card can end up
  // taller than a single printable page — and the "never split this card"
  // rule further down explicitly gives up and lets a block split if it's
  // taller than a full page, since it can't be kept whole without shrinking
  // it. That's what was cutting the order-details card in half across a
  // page break on mobile-generated PDFs while desktop (already wide enough
  // for multiple columns) never hit that case.
  //
  // Rendering a fixed-width clone off-screen keeps the multi-column layout
  // — and therefore the pagination — identical no matter what device the
  // order was filled in on. It also means the live page's inputs never need
  // to be swapped/hidden mid-edit, since all of that now happens on the
  // disconnected clone instead of the visible DOM.
  const liveApp=document.querySelector('.app');
  const holder=document.createElement('div');
  holder.style.cssText='position:fixed;top:0;left:-99999px;width:960px;pointer-events:none;';
  const app=liveApp.cloneNode(true);
  // Strip ids from the clone so it never shadows the live element for any
  // getElementById() call that might fire elsewhere while this is in flight.
  app.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
  holder.appendChild(app);
  document.body.appendChild(holder);

  // html2canvas can't reliably rasterise live <input> values, so swap every
  // visible input (on the clone) for a plain text span carrying the same
  // value. Width is intentionally left to the .pdf-input-swap CSS rule
  // (width:100% of its own field) rather than being captured here —
  // capturing a fixed pixel width from the on-screen layout, before the
  // pdf-capture class reflows the grid, previously caused each span to be
  // sized for the wrong layout and its underline to overrun into the next
  // field.
  const liveInputs=Array.from(app.querySelectorAll('input')).filter(el=>el.offsetParent!==null);
  liveInputs.forEach(el=>{
    const span=document.createElement('span');
    span.className='pdf-input-swap';
    span.textContent=el.value||'';
    el.parentNode.insertBefore(span,el);
    el.style.display='none';
  });

  const scale=2;

  document.body.classList.add('pdf-capture');
  let canvas;
  let atomicBlocks;
  try{
    // Measured only now, with .pdf-capture already applied — that class
    // hides on-screen-only controls (buttons, hints, etc.) inside each
    // sketch card and elsewhere, which changes their real height. Measuring
    // before applying it (as an earlier version of this code did) captures
    // the wrong heights and throws page-break placement off, which is what
    // was causing sketches to still split across pages.
    const appTop=app.getBoundingClientRect().top;

    // Atomic blocks: each of these must never be sliced across a page break.
    // Sketch cards (.ic) are the main requirement — their grid, measurement
    // labels, and quantity/notes fields all live inside one .ic element, so
    // treating that whole element as indivisible keeps them together
    // automatically. The header/order-details card/materials card+table get
    // the same protection, which also means the "Other materials" section
    // naturally stays right after the last sketch whenever it fits — it's
    // only pushed to a new page when the same never-split rule requires it.
    atomicBlocks=Array.from(app.querySelectorAll('.hdr,.card,.meta-card,.ic,table.pt'))
      .map(el=>{
        const r=el.getBoundingClientRect();
        return{top:(r.top-appTop)*scale,bottom:(r.bottom-appTop)*scale};
      })
      .sort((a,b)=>a.top-b.top);

    canvas=await html2canvas(app,{scale,backgroundColor:'#ffffff',useCORS:true});
  }finally{
    document.body.classList.remove('pdf-capture');
    holder.remove();
  }

  const{jsPDF}=window.jspdf;
  const doc=new jsPDF({unit:'pt',format:'a4'});
  const pageW=doc.internal.pageSize.getWidth();
  const pageH=doc.internal.pageSize.getHeight();
  const imgW=pageW;
  const imgH=canvas.height*(imgW/canvas.width);
  const imgData=canvas.toDataURL('image/jpeg',0.92);

  if(imgH<=pageH){
    doc.addImage(imgData,'JPEG',0,0,imgW,imgH);
  }else{
    // Slice the tall canvas across multiple A4 pages. Each page's natural
    // break point (renderedPx + one page's worth of pixels) is pulled back
    // to the top of an atomic block if it would otherwise land inside that
    // block — so the block starts fresh on the next page instead of being
    // cut in half. A block taller than a full page is left to split (it
    // can't be kept whole without shrinking it, which isn't allowed).
    const pxPerPage=canvas.width*(pageH/imgW);
    let renderedPx=0,page=0;
    while(renderedPx<canvas.height){
      let breakAt=Math.min(renderedPx+pxPerPage,canvas.height);
      for(const b of atomicBlocks){
        const fitsOnAPage=(b.bottom-b.top)<pxPerPage;
        const startsOnThisPage=b.top>renderedPx;
        const breakFallsInsideIt=b.top<breakAt && b.bottom>breakAt;
        if(fitsOnAPage && startsOnThisPage && breakFallsInsideIt){
          breakAt=b.top;
        }
      }
      const sliceH=Math.max(1,breakAt-renderedPx);
      const sliceCanvas=document.createElement('canvas');
      sliceCanvas.width=canvas.width;
      sliceCanvas.height=sliceH;
      sliceCanvas.getContext('2d').drawImage(canvas,0,renderedPx,canvas.width,sliceH,0,0,canvas.width,sliceH);
      const sliceData=sliceCanvas.toDataURL('image/jpeg',0.92);
      if(page>0)doc.addPage();
      doc.addImage(sliceData,'JPEG',0,0,imgW,sliceH*(imgW/canvas.width));
      renderedPx+=sliceH;
      page++;
    }
  }
  return doc;
}

function pdfFilename(){
  const ref=(document.getElementById('reference').value||'order').replace(/[^a-z0-9-]+/gi,'_');
  const oDate=document.getElementById('orderDate').value||new Date().toISOString().slice(0,10);
  return `JSJ-Order-${ref}-${oDate}.pdf`;
}

// standalone "Download PDF" button
document.getElementById('pdfBtn').onclick=async()=>{
  const btn=document.getElementById('pdfBtn');
  btn.disabled=true;const orig=btn.textContent;btn.textContent='Generating PDF…';
  try{
    syncD();
    const doc=await buildOrderPDF();
    doc.save(pdfFilename());
  }catch(err){
    alert('Could not generate the PDF: '+err.message);
  }finally{
    btn.disabled=false;btn.textContent=orig;
  }
};

// minimal diary-note text — ServiceM8's note API requires non-empty text,
// so this is the smallest identifying line rather than a full order summary
// (the PDF attachment carries the actual order detail)
function buildDiaryNoteText(){
  const ref=document.getElementById('reference').value||'(no reference)';
  const oDate=document.getElementById('orderDate').value;
  return{ref,oDate,note:`Material Order — ${ref} — ${oDate} (see attached PDF)`};
}

// ─────────────────────────────────────────────
// SEND ORDER
// Generates the PDF, sends it to the backend which looks up the job and
// attaches the PDF to that job's ServiceM8 diary/files (the diary note
// itself carries only a minimal identifying line — no order summary).
// The supplier email is opened as a plain mailto: draft (recipient,
// subject, and a short fixed message) for the person to send themselves —
// a webpage has no way to attach a file to a mailto draft, and the PDF is
// not downloaded to this device as part of this flow.
// window.__SM8_BACKEND__ is injected by the server when this page is served
// through the add-on; falls back to the same Railway URL so the standalone
// downloaded copy of this file works identically. (SM8_BACKEND itself is
// declared near the top of the script now, since the shared-presets code
// above also needs it.)

// Rough device check used only to decide whether to pop the mailto: draft
// after sending (see below) — doesn't need to be bulletproof, just needs to
// catch phones/tablets vs desktop browsers.
function isMobileDevice(){
  return /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent)
    || (window.matchMedia && window.matchMedia('(pointer:coarse)').matches);
}

document.getElementById('sendBtn').onclick=async()=>{
  const btn=document.getElementById('sendBtn');
  const jobNumber=document.getElementById('sm8JobNumber').value.trim();
  if(!jobNumber){
    alert('Enter the ServiceM8 Job # first (top of the form) so this can be saved to the right job.');
    return;
  }
  const sEmail=document.getElementById('supplierEmail').value.trim();
  if(!sEmail){
    alert('Enter the supplier email first (in the Supplier section).');
    return;
  }

  const orig=btn.textContent;
  btn.disabled=true;
  try{
    syncD();
    btn.textContent='Generating PDF…';
    const doc=await buildOrderPDF();
    const filename=pdfFilename();
    const pdfBase64=doc.output('datauristring').split(',')[1];

    btn.textContent='Sending…';
    const{ref,oDate,note}=buildDiaryNoteText();
    const r=await fetch(SM8_BACKEND+'/submit-order',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        jobNumber,
        note,
        pdfBase64,
        pdfFilename:filename,
      })
    });
    const data=await r.json();
    if(!r.ok||!data.success) throw new Error(data.error||'Unknown error');

    // The diary note itself always succeeds if we got this far. The PDF
    // attachment is reported separately since it can fail independently
    // without the core diary post failing.
    const problems=[];
    if(!data.diaryAttachment) problems.push('PDF attachment to the diary'+(data.diaryAttachmentError?': '+data.diaryAttachmentError:''));

    // Always log the raw attachment debug info — this shows exactly what
    // ServiceM8 returned at each step (create / upload / reactivate / verify),
    // which is what actually explains whether the file will show up, even
    // when the backend thinks it succeeded.
    if(data.diaryAttachmentDebug) console.log('Attachment debug:',data.diaryAttachmentDebug);

    if(problems.length){
      btn.textContent='Posted, with issues ⚠';
      alert('Order posted to the job diary, but this part failed:\n\n'+problems.join('\n')+'\n\nDebug info:\n'+JSON.stringify(data.diaryAttachmentDebug,null,2)+'\n\nAsk whoever manages the backend to check the logs.');
    }else{
      btn.textContent=isMobileDevice()?'Saved to job diary ✓':'Sent ✓';
    }

    // Open a simple pre-filled email draft — but only on desktop. On desktop
    // the PDF from "Download PDF" can be dragged straight into this draft,
    // so the popup is a useful shortcut. On mobile there's no way to attach
    // a file to a mailto: draft anyway, and the PDF is already attached to
    // the ServiceM8 job diary — so on mobile staff just open ServiceM8 and
    // send it from there, and popping an empty email draft here would only
    // be an extra screen to back out of.
    if(!isMobileDevice()){
      const emailBody='Hi,\n\nPlease see the attached order form.\n\nKind regards,\nJSJ Roofing';
      window.location.href=`mailto:${encodeURIComponent(sEmail)}?subject=${encodeURIComponent(`Material Order — ${ref} — ${oDate}`)}&body=${encodeURIComponent(emailBody)}`;
    }

    setTimeout(()=>{btn.disabled=false;btn.textContent=orig;},3000);
  }catch(err){
    btn.disabled=false;
    btn.textContent=orig;
    alert('Could not send the order: '+err.message);
  }
};
})();
</script>
</body>
</html>
