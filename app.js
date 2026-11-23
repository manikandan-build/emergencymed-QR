const I = {
    plus: '<path d="M12 4v16M4 12h16"/>', lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M17 4.5a3.5 3.5 0 010 7M21.5 20c0-2.6-1.5-4.5-3.5-5.3"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h3M20 17v4"/>',
    file: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    alert: '<path d="M12 3l10 18H2zM12 10v5M12 18v.01"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5L16 9.5"/>',
    back: '<path d="M15 5l-7 7 7 7"/>', scan: '<path d="M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M4 12h16"/>'
};
const ic = (n, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
const P = [
    {
        id: 'PATIENT-001', n: 'Arjun Kumar', ph: '9876543210', em: '9123456780', bg: 'O+', c: 'Diabetes', cat: 'Diabetes', al: 'Penicillin', age: 45, g: 'Male', conds: ['Type 2 diabetes mellitus'], meds: ['Metformin 500 mg, twice daily', 'Glimepiride 1 mg, mornings'], hx: ['Type 2 diabetes diagnosed in 2016', 'Appendectomy in 2009'], upd: '02 Nov 2026', warn: 'Severe penicillin reaction. Avoid all penicillin-class antibiotics.',
        sec: [['Substance / drug history', 'Fictional: past alcohol dependence, abstinent since 2018.'], ['HIV/AIDS status', 'Fictional: negative, last screened Mar 2026.'], ['Serious chronic conditions', 'Fictional: early diabetic neuropathy, stage 2 kidney disease.'], ['Psychiatric history', 'Fictional: adjustment disorder in 2019, treated with counselling.'], ['Confidential infectious disease', 'Fictional: hepatitis B vaccinated, immune.'], ['Restricted notes', 'Fictional: monitor HbA1c quarterly; insulin trial under review.']]
    },
    {
        id: 'PATIENT-002', n: 'Priya Sharma', ph: '9867543210', em: '9012345678', bg: 'A+', c: 'Hypertension', cat: 'Hypertension', al: 'Aspirin', age: 52, g: 'Female', conds: ['Essential hypertension', 'Mild hyperlipidaemia'], meds: ['Amlodipine 5 mg, daily', 'Atorvastatin 10 mg, nightly'], hx: ['Hypertension diagnosed in 2014', 'Cataract surgery, left eye, 2022'], upd: '28 Oct 2026', warn: 'Aspirin allergy. Avoid aspirin and related NSAIDs.',
        sec: [['Substance / drug history', 'Fictional: none recorded.'], ['HIV/AIDS status', 'Fictional: negative, last screened Jan 2026.'], ['Serious chronic conditions', 'Fictional: left ventricular hypertrophy, under monitoring.'], ['Psychiatric history', 'Fictional: generalised anxiety, managed with therapy since 2020.'], ['Confidential infectious disease', 'Fictional: tuberculosis exposure in 2012, fully treated.'], ['Restricted notes', 'Fictional: blood pressure spikes during stress; avoid abrupt beta-blocker stops.']]
    },
    {
        id: 'PATIENT-003', n: 'Rahul Krishnan', ph: '9786543210', em: '9098765432', bg: 'B+', c: 'Cardiac Condition', cat: 'Cardiac', al: 'Sulfa Drugs', age: 61, g: 'Male', conds: ['Coronary artery disease', 'Stable angina'], meds: ['Clopidogrel 75 mg, daily', 'Metoprolol 50 mg, twice daily'], hx: ['Angioplasty with stent in 2020', 'Mild heart attack in 2019'], upd: '05 Nov 2026', warn: 'On blood thinners and sulfa allergy. Check before any procedure.',
        sec: [['Substance / drug history', 'Fictional: smoked for 25 years, quit in 2019.'], ['HIV/AIDS status', 'Fictional: negative, last screened Jun 2026.'], ['Serious chronic conditions', 'Fictional: reduced ejection fraction (45%), chronic heart failure risk.'], ['Psychiatric history', 'Fictional: depression after cardiac event, resolved in 2021.'], ['Confidential infectious disease', 'Fictional: none recorded.'], ['Restricted notes', 'Fictional: do-not-resuscitate discussion pending with family.']]
    },
    {
        id: 'PATIENT-004', n: 'Ananya Rao', ph: '9654321870', em: '9345678120', bg: 'AB+', c: 'Asthma', cat: 'Asthma', al: 'Dust / Pollen', age: 28, g: 'Female', conds: ['Chronic asthma (moderate)', 'Seasonal allergic rhinitis'], meds: ['Salbutamol inhaler, as needed', 'Budesonide inhaler, twice daily'], hx: ['Asthma since childhood', 'Hospitalised for an asthma attack in 2021'], upd: '30 Oct 2026', warn: 'Asthma triggers: dust, pollen. Keep rescue inhaler within reach.',
        sec: [['Substance / drug history', 'Fictional: occasional recreational cannabis use, stopped 2023.'], ['HIV/AIDS status', 'Fictional: negative, last screened Sep 2026.'], ['Serious chronic conditions', 'Fictional: none beyond asthma.'], ['Psychiatric history', 'Fictional: panic episodes linked to breathlessness, 2022.'], ['Confidential infectious disease', 'Fictional: pertussis in childhood, recovered.'], ['Restricted notes', 'Fictional: avoid beta-blockers; steroid course twice in 2025.']]
    },
    {
        id: 'PATIENT-005', n: 'Vikram Singh', ph: '9567894321', em: '9234567810', bg: 'O-', c: 'Previous Seizure Disorder', cat: 'Other', al: 'Ibuprofen', age: 34, g: 'Male', conds: ['Seizure disorder, controlled'], meds: ['Levetiracetam 500 mg, twice daily'], hx: ['First seizure in 2017', 'Seizure-free since 2023', 'Fractured wrist in 2018'], upd: '01 Nov 2026', warn: 'Seizure history. Do not give ibuprofen. Universal donor blood type (O-).',
        sec: [['Substance / drug history', 'Fictional: past opioid misuse after 2018 injury, completed rehab in 2019.'], ['HIV/AIDS status', 'Fictional: HIV-positive since 2020, viral load undetectable on therapy.'], ['Serious chronic conditions', 'Fictional: epilepsy; medication adherence critical.'], ['Psychiatric history', 'Fictional: post-traumatic stress, treated 2019 to 2021.'], ['Confidential infectious disease', 'Fictional: hepatitis C cleared in 2021.'], ['Restricted notes', 'Fictional: driving restriction lifted 2024; avoid flashing-light exposure.']]
    }];
const AUTH = { d: 'MANIKANDAN', p: '146140043' };
let S = { v: 'dash', q: '', f: 'All', id: null, err: false, t: null };
const $ = s => document.querySelector(s), app = $('#app');
const byId = id => P.find(p => p.id === id);
function go(v, id) { S.v = v; S.id = id || null; S.err = false; closeM(); render(); window.scrollTo(0, 0) }
function qrs() { document.querySelectorAll('.qr[data-id]').forEach(e => { if (e.dataset.done) return; e.dataset.done = 1; try { new QRCode(e, { text: e.dataset.id, width: 96, height: 96, colorDark: '#14201B', colorLight: '#ffffff' }) } catch (x) { e.textContent = e.dataset.id } }) }
function filtered() { const q = S.q.trim().toLowerCase(); return P.filter(p => { const m = !q || p.n.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.id.slice(-3).includes(q) || p.ph.includes(q) || p.em.includes(q); return m && (S.f === 'All' || p.cat === S.f) }) }
const card = p => `<article class="pc"><div><h3>${p.n}</h3><div class="pid">${p.id}</div>
<div class="row"><s>Phone</s>${p.ph}</div><div class="row"><s>Emergency</s>${p.em}</div>
<div class="row"><s>Blood group</s><span class="bl">${p.bg}</span></div><div class="row"><s>Condition</s>${p.c}</div>
<div class="row"><s>Allergy</s><span class="al">${p.al}</span></div></div>
<button class="qrb" data-act="scan" data-id="${p.id}" aria-label="Scan QR for ${p.n}"><div class="qr" data-id="${p.id}"></div>${p.id}</button>
<div class="acts"><button class="btn b-g" data-act="gen" data-id="${p.id}">${ic('file', 17)}General History</button><button class="btn b-r" data-act="gate" data-id="${p.id}">${ic('lock', 17)}Secured History</button></div></article>`;
function list() { const r = filtered(); return r.length ? r.map(card).join('') : `<div class="empty"><b>No matching patients</b><br>Try a name, a patient ID like PATIENT-003, or a phone number, or reset the filter.</div>` }
function directory() {
    return `<div class="tools"><label class="search">${ic('search', 18)}<input id="q" type="search" placeholder="Search Patient: name, ID or phone" value="${S.q}" aria-label="Search patient"></label></div>
<div class="chips" style="margin-bottom:16px">${['All', 'Diabetes', 'Hypertension', 'Cardiac', 'Asthma', 'Other'].map(f => `<button class="chip ${S.f === f ? 'on' : ''}" data-act="flt" data-id="${f}">${f === 'All' ? 'All Patients' : f === 'Other' ? 'Other Conditions' : f}</button>`).join('')}</div><div class="grid" id="list">${list()}</div>`
}
const stat = (i, c, b, s) => `<div class="stat"><i class="${c}">${ic(i)}</i><div><b>${b}</b><span>${s}</span></div></div>`;
const stats = () => `<div class="stats">${stat('users', 'ig', P.length, 'Total Patients')}${stat('qr', 'ig', P.length, 'QR Profiles')}${stat('file', 'ig', P.length, 'General Profiles')}${stat('lock', 'ir', 'Restricted', 'Secured Medical Records')}</div>`;
const banner = () => `<div class="banner"><div class="pulse">${ic('alert', 24)}</div><div class="t"><h2>🚨 EMERGENCY ACCESS</h2><p>Scan the patient’s QR profile to quickly access essential medical information.</p></div><button class="btn b-w" data-v="emergency">${ic('scan', 18)}Scan patient QR</button></div>`;
function gen(p) {
    return `<button class="back" data-v="dash">${ic('back', 16)} Back to directory</button>
<div class="top"><div><p class="tag" style="color:var(--green)">GENERAL MEDICAL HISTORY</p><h1>${p.n}</h1><span class="pid">${p.id}</span></div><span class="badge bg-g">${ic('shield', 16)}VERIFIED PROFILE</span></div>
<div class="panel"><div class="kv c" style="margin-bottom:12px"><small>Critical warning</small><b>${p.warn}</b></div>
<div class="fg"><div class="kv"><small>Full name</small><b>${p.n}</b></div><div class="kv"><small>Age</small><b>${p.age} years</b></div><div class="kv"><small>Gender</small><b>${p.g}</b></div>
<div class="kv"><small>Phone</small><b>${p.ph}</b></div><div class="kv"><small>Emergency contact</small><b>${p.em}</b></div><div class="kv c"><small>Blood group</small><b>${p.bg}</b></div>
<div class="kv"><small>Last updated</small><b>${p.upd}</b></div></div></div>
<div class="fg" style="align-items:start"><div class="panel"><h2>Known medical conditions</h2><ul class="l r">${p.conds.map(x => `<li>${x}</li>`).join('')}</ul></div>
<div class="panel"><h2>Allergies</h2><ul class="l r"><li>${p.al}</li></ul></div>
<div class="panel"><h2>Current medications</h2><ul class="l">${p.meds.map(x => `<li>${x}</li>`).join('')}</ul></div>
<div class="panel"><h2>Previous major medical history</h2><ul class="l">${p.hx.map(x => `<li>${x}</li>`).join('')}</ul></div></div>
<p class="sub">Fictional demo data. Not a real patient.</p>
<button class="btn b-r" data-act="gate" data-id="${p.id}">${ic('lock', 17)}🔒 Secured History</button>`
}
function gate(p) {
    return `<button class="back" data-act="gen" data-id="${p.id}">${ic('back', 16)} Back to General History</button>
<div class="panel gate"><div class="lk">${ic('lock', 30)}</div><h1 style="font-size:26px">Authorized Medical Access</h1>
<p class="sub" style="margin:0 auto">This section contains highly sensitive medical information. Access is restricted to authorized medical personnel.</p>
<form id="gf" autocomplete="off"><div class="fld"><label for="dn">Doctor Name</label><input id="dn" type="text" required></div>
<div class="fld"><label for="pw">Password</label><input id="pw" type="password" required></div>
${S.err ? '<div class="err" role="alert">Access denied. Invalid doctor credentials.</div>' : ''}
<button class="btn b-r" style="width:100%" type="submit">${ic('lock', 17)}Verify and open</button></form>
<p class="sub" style="margin:14px auto 0;font-size:13px">Demo only. Visual prototype, not real medical-grade security.</p></div>`}
function sec(p) {
    return `<div class="sec"><div class="top"><div><p class="tag" style="color:#FF9A9A">${ic('lock', 14)} SECURED MEDICAL HISTORY</p><h1>${p.n}</h1><span class="pid" style="color:#F2B9B9">${p.id}</span></div><span class="badge" style="background:#0F5C3A;color:#D8FFE9">${ic('shield', 16)}Access Status: VERIFIED</span></div>
<div class="warn">⚠ CONFIDENTIAL MEDICAL INFORMATION — AUTHORIZED ACCESS ONLY</div>
<div class="ok"><span class="badge">✓ Identity Verified</span><span class="badge">✓ Authorized Medical Access</span><span class="badge">Doctor: ${AUTH.d}</span></div>
<p style="margin:0 0 12px">Authorized Doctor: <b>${AUTH.d}</b></p>
<div class="sg">${p.sec.map(([k, v]) => `<div class="sc"><small>${ic('lock', 13)}${k}</small><p>${v}</p></div>`).join('')}</div>
<div class="audit"><div><span>Accessed By</span><b>${AUTH.d}</b></div><div><span>Access Type</span><b>Authorized Demo Access</b></div><div><span>Status</span><b>Verified</b></div></div>
<p class="fic">DEMO / FICTIONAL DATA. No real patient information. This prototype does not provide real-world medical-grade security.</p></div>
<div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn b-g" data-act="gen" data-id="${p.id}">${ic('file', 17)}Back to General History</button><button class="btn b-o" data-v="dash">Close and return to dashboard</button></div>`
}
function emerg() {
    return `${banner().replace(/<button.*<\/button>/, '')}<h1>Emergency Access</h1><p class="sub">Choose a patient QR to simulate a scan. Fast, clear, then open the profile.</p>
<div class="pick">${P.map(p => `<button data-act="scan" data-id="${p.id}"><span class="bl">${p.bg}</span><span><b>${p.n}</b><br><small style="color:var(--mut)">${p.id} · ${p.al} allergy</small></span><span style="margin-left:auto;color:var(--red)">${ic('scan')}</span></button>`).join('')}</div>`
}
function about() {
    return `<h1>About EmergencyMed QR</h1><p class="sub">A college prototype showing how a QR code could give first responders fast access to essential medical facts, with a separate locked section for sensitive records.</p>
<div class="fg"><div class="panel"><h2>${ic('file')} General History</h2><p>Allergies, blood group, medications and contacts. Open to anyone who scans the code.</p></div><div class="panel"><h2>${ic('lock')} Secured History</h2><p>Restricted notes that open only after a doctor name and password are entered.</p></div>
<div class="panel"><h2>${ic('alert')} Limits of this demo</h2><p>All patients are fictional. Data lives in the page, the sign-in check runs in the browser and does not provide real security. No backend, hospital system or external service is used.</p></div></div>`
}
function render() {
    document.querySelectorAll('nav .lk').forEach(b => b.classList.toggle('on', b.dataset.v === S.v || (S.v === 'dash' && b.dataset.v === 'dash')));
    const p = S.id && byId(S.id);
    if (S.v === 'dash') app.innerHTML = `<p class="tag">Critical Medical Information. Available When It Matters.</p><h1>Patient Emergency Profiles</h1><p class="sub">Quickly access essential emergency information for authorized medical personnel.</p>${banner()}${stats()}${directory()}`;
    else if (S.v === 'patients') app.innerHTML = `<h1>Patients</h1><p class="sub">All five fictional emergency profiles.</p>${directory()}`;
    else if (S.v === 'emergency') app.innerHTML = emerg();
    else if (S.v === 'about') app.innerHTML = about();
    else if (S.v === 'gen' && p) app.innerHTML = gen(p);
    else if (S.v === 'gate' && p) app.innerHTML = gate(p);
    else if (S.v === 'sec' && p) app.innerHTML = sec(p);
    qrs(); bind()
}
function bind() {
    const q = $('#q'); if (q) q.oninput = e => { S.q = e.target.value; $('#list').innerHTML = list(); qrs() };
    const f = $('#gf'); if (f) { $('#dn').focus(); f.onsubmit = e => { e.preventDefault(); if ($('#dn').value === AUTH.d && $('#pw').value === AUTH.p) { S.v = 'sec'; S.err = false; render(); window.scrollTo(0, 0) } else { S.err = true; render() } } }
}
function closeM() { clearTimeout(S.t); $('#modal').innerHTML = '' }
function scan(id) {
    const p = byId(id); $('#modal').innerHTML = `<div class="ov" data-act="close"><div class="md" role="dialog" aria-label="Scan Patient QR"><h2>Scan Patient QR</h2><div class="vf" id="vf"><div class="qr" data-id="${id}" style="opacity:.35"></div></div><p id="st" class="sub" style="margin:0 0 12px">Scanning…</p><div id="mb" style="display:flex;gap:8px"><button class="btn b-o" style="flex:1" data-act="close">Cancel</button></div></div></div>`; qrs();
    S.t = setTimeout(() => { $('#vf').classList.add('done'); $('#st').innerHTML = `<span class="badge bg-g">✓ Patient ID detected: ${id}</span><br>${p.n}`; $('#mb').innerHTML = `<button class="btn b-o" style="flex:1" data-act="close">Cancel</button><button class="btn b-g" style="flex:2" data-act="gen" data-id="${id}">Open Patient Profile</button>` }, 1300)
}
document.addEventListener('click', e => {
    const a = e.target.closest('[data-act],[data-v]'); if (!a) return; const act = a.dataset.act, id = a.dataset.id;
    if (a.dataset.v && !act) return go(a.dataset.v);
    if (act === 'gen') go('gen', id); else if (act === 'gate') go('gate', id); else if (act === 'scan') scan(id); else if (act === 'close') { if (e.target === a || a.classList.contains('btn')) closeM() }
    else if (act === 'flt') { S.f = id; render() }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeM() });
render();