/* UI: rendering, narration (speech synthesis), number-pad input, save/load */
(function(){
const G = globalThis.G;
const $ = s => document.querySelector(s);
const esc = s => String(s==null?'':s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let S = null, CUR = null, mode = 'title', CR = null, tab = 'log', modalOpen = null;
const LS = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }, del(k){ try{ localStorage.removeItem(k); }catch(e){} } };

/* ===================== SPEECH ===================== */
const SP = { on: LS.get('aq_voice_on')!=='0', opts: LS.get('aq_read_opts')!=='0', rate: parseFloat(LS.get('aq_rate')||'1'), voiceName: LS.get('aq_voice_name')||'', gen:0, units:[], idx:0, speaking:false };
const synth = window.speechSynthesis;
let voices = [];
function loadVoices(){ if(!synth) return; voices = synth.getVoices().filter(v=>/^en/i.test(v.lang)); }
if (synth){ loadVoices(); synth.onvoiceschanged = loadVoices; }
function chooseVoice(){
  if (!voices.length) loadVoices();
  let v = voices.find(v=>v.name===SP.voiceName);
  if (!v) v = voices.find(v=>/Natural/i.test(v.name) && /(Ryan|Guy|Davis|Brian|Sonia|Aria|Jenny)/i.test(v.name)) || voices.find(v=>/Natural|Online/i.test(v.name)) || voices.find(v=>/en-GB/i.test(v.lang)) || voices[0];
  return v;
}
const clean = t => String(t||'').replace(/[\u{1F000}-\u{1FFFF}☀-➿⭐★☠▰▱◆►🎲]/gu,'').replace(/[—–]/g,', ').replace(/\s+/g,' ').replace(/&/g,' and ').trim();
function stopSpeech(){ SP.gen++; SP.speaking=false; if (synth){ try{ synth.cancel(); }catch(e){} } document.querySelectorAll('.speaking').forEach(e=>e.classList.remove('speaking')); updateVoiceBtns(); }
function runUnits(units, onDone, onFail){
  stopSpeech(); if (!SP.on || !synth || !units.length) return;
  const gen = ++SP.gen; SP.units = units; SP.speaking = true; updateVoiceBtns(); let started = false;
  const v = chooseVoice();
  const next = (i, retry) => {
    if (gen !== SP.gen) return;
    if (i >= units.length){ SP.speaking=false; updateVoiceBtns(); if (onDone) onDone(); return; }
    const u = units[i];
    if (u.pause){ setTimeout(()=>{ if (gen===SP.gen) next(i+1); }, u.pause); return; }
    const txt = clean(u.text);
    if (!txt){ next(i+1); return; }
    const ut = new SpeechSynthesisUtterance(txt); if (v) ut.voice = v; ut.rate = SP.rate * (SP.mult||1); ut.pitch = SP.pitch || 0.95; ut.volume = 1;
    ut.onstart = () => { started = true; if (gen!==SP.gen) return; if (u.cb) u.cb(); document.querySelectorAll('.speaking').forEach(e=>e.classList.remove('speaking')); if (u.el){ u.el.classList.add('speaking'); try{ u.el.scrollIntoView({block:'nearest'}); }catch(e){} } };
    ut.onend = () => { if (gen!==SP.gen) return; if (u.el) u.el.classList.remove('speaking'); next(i+1); };
    ut.onerror = () => { if (gen!==SP.gen) return; next(i+1); };
    if (i===0){ setTimeout(()=>{ if (gen!==SP.gen || started) return;
      if (!retry){ try{ synth.cancel(); }catch(e){} setTimeout(()=>{ if (gen===SP.gen && !started) next(0, true); }, 60); }   /* some browsers drop the first utterance: try once more */
      else { SP.speaking=false; updateVoiceBtns(); if (onFail) onFail(i); } }, retry ? 3500 : 1800); }
    try{ synth.resume(); }catch(e){}
    synth.speak(ut);
  };
  /* start straight away (inside the player's click or key press, which Safari and phones require) unless a cancel is still settling */
  if (synth.speaking || synth.pending) setTimeout(()=>next(0), 80); else next(0);
}
function updateVoiceBtns(){
  const b = $('#bVoice'); if (b){ b.classList.toggle('on', SP.on); b.textContent = SP.on ? (SP.speaking?'🔊 Reading…':'🔊 Voice') : '🔇 Muted'; }
  const o = $('#bOpts'); if (o){ o.classList.toggle('on', SP.opts); o.textContent = SP.opts ? '📢 Choices' : '📢 off'; o.title = SP.opts ? 'Choices are read aloud (O)' : 'Choices are not read aloud (O)'; }
}

/* ===================== HELPERS ===================== */
function sentences(p){ const m = p.match(/[^.!?…]+[.!?…]+["”')\]]*\s*|[^.!?…]+$/g); return m ? m : [p]; }
function paraHtml(text, units, cls){
  return String(text||'').split('\n').filter(x=>x.trim()).map(p => {
    const ss = sentences(p).map(s => { const id = 'u'+units.length; units.push({ text:s, id }); return `<span class="s" id="${id}" style="animation-delay:${Math.min(units.length*0.05,1.2)}s">${esc(s)}</span>`; }).join('');
    return `<p class="${cls||''}">${ss}</p>`;
  }).join('');
}
const TODN = ['Dawn','Daytime','Dusk','Night'];
const isKid = () => !!(S && S.story==='changi');
const mpL = () => (S && G.stories[S.story] && G.stories[S.story].labels && G.stories[S.story].labels.mp) || 'MP';
const WXN = { clear:'clear skies', cloudy:'overcast', rain:'rain', storm:'thunderstorm', fog:'thick fog', snow:'falling snow', wind:'a howling wind', heat:'blistering heat', sandstorm:'a sandstorm', ashfall:'drifting ashfall', aurora:'aurora in the sky' };
const WXI = { clear:'☀️', cloudy:'☁️', rain:'🌧️', storm:'⛈️', fog:'🌫️', snow:'❄️', wind:'💨', heat:'🥵', sandstorm:'🏜️', ashfall:'🌋', aurora:'🌌' };
function envLine(S){
  const t = ['At dawn','In the daylight','As dusk settles','Under the night sky'][S.tod];
  const w = { clear:'the sky is clear.', cloudy:'clouds hang low.', rain:'rain falls steadily.', storm:'a thunderstorm rages.', fog:'fog swallows the world.', snow:'snow drifts down.', wind:'a wild wind pulls at your clothes.', heat:'the heat is punishing.', sandstorm:'a sandstorm scours the air.', ashfall:'ash drifts like grey snow.', aurora:'ribbons of green light ripple overhead.' }[S.wx] || '';
  return `${t}, ${w}`;
}
function tagHtml(t){
  const it = t.id && G.items[t.id];
  switch(t.k){
    case 'hp': return `<span class="tag ${t.v<0?'neg':'pos'}">${t.v<0?'−':'+'}${Math.abs(t.v)} HP${t.why?' ('+t.why+')':''}</span>`;
    case 'mp': return `<span class="tag ${t.v<0?'neg':'pos'}">${t.v<0?'−':'+'}${Math.abs(t.v)} ${mpL()}</span>`;
    case 'gold': return `<span class="tag ${t.v<0?'neg':'xp'}">${t.v<0?'−':'+'}${isKid()?'$':''}${Math.abs(t.v)}${isKid()?'':' 🪙'}</span>`;
    case 'xp': return `<span class="tag xp">+${t.v} XP</span>`;
    case 'kids': return `<span class="tag ${t.v<0?'neg':'pos'}">${t.v<0?'\u2212':'+'}${Math.abs(t.v)} \u{1F467} children</span>`;
    case 'item': return `<span class="tag ${t.v<0?'neg':'item'}">${t.v<0?'−':'+'}${it?it.icon+' '+it.n:t.id}${Math.abs(t.v)>1?' ×'+Math.abs(t.v):''}</span>`;
    case 'skill': return `<span class="tag lvl">✦ Learned ${G.skills[t.id]?G.skills[t.id].n:t.id}</span>`;
    case 'stat': return `<span class="tag ${t.v<0?'neg':'pos'}">${t.v<0?'−':'+'}${Math.abs(t.v)} ${t.id}</span>`;
    case 'lvl': return `<span class="tag lvl">⬆ LEVEL ${t.v}!</span>`;
    case 'ally': return `<span class="tag ${t.v<0?'neg':'lvl'}">${t.v<0?'💔 Lost':'🤝 Joined:'} ${G.allies[t.id]?G.allies[t.id].n:t.id}</span>`;
    case 'bond': return `<span class="tag pos"><span class="heart">♥</span> Bond with ${G.allies[t.id]?G.allies[t.id].n.split(' ')[0]:t.id}</span>`;
    case 'status': return `<span class="tag ${t.id==='bless'?'pos':'neg'}">${({poison:'☠ Poisoned',bless:'✨ Blessed',curse:'💀 Cursed'})[t.id]}</span>`;
    case 'foe': return `<span class="tag xp">Foe ${t.v}</span>`;
    case 'note': return `<span class="tag lvl">${esc(t.t)}</span>`;
  }
  return '';
}
function rollHtml(r){
  if (!r) return '';
  const sv = (S && S.stats && S.stats[r.stat]!=null) ? S.stats[r.stat] : null;
  const sgn = n => (n>=0?'+':'−')+Math.abs(n);
  const statTxt = sv!=null ? `${esc(r.stat)} ${sv} (${sgn(r.m||0)})` : (r.stat==='ATK'?`attack skill (${sgn(r.m||0)})`:`${esc(r.stat)} (${sgn(r.m||0)})`);
  const verdict = r.ok ? (r.nat===20?'CRITICAL SUCCESS':'success') : (r.nat===1?'FUMBLE':'failure');
  return `<div class="roll">🎲 You rolled a d20 and got <b>${r.r}</b>. Adding your ${statTxt}${r.b?`, plus ${sgn(r.b)} from skills, gear and conditions`:''} gives <b class="${r.ok?'ok':'no'}">${r.total}</b> against a difficulty of ${r.dc}${r.tag?` (${esc(r.tag)} check)`:''} — <b class="${r.ok?'ok':'no'}">${verdict}</b>.</div>`;
}
function reqLabel(o){
  if (!o.req || typeof o.req!=='string') return '';
  const out = [];
  o.req.split(/[|&]/).forEach(a => { a=a.replace(/^!/,''); const [k,v]=a.split(':');
    if (k==='skill'||k==='spell') out.push(G.skills[v]?G.skills[v].icon+' '+G.skills[v].n:v);
    else if (k==='item') out.push(G.items[v]?G.items[v].icon+' '+G.items[v].n:v);
    else if (k==='cls') out.push(G.classes[v]?G.classes[v].icon+' '+G.classes[v].n:v);
    else if (k==='ally') out.push(G.allies[v]?G.allies[v].icon+' '+G.allies[v].n.split(' ')[0]:v);
    else if (k==='any') out.push('🧿 Curio');
    else if (k==='flag') out.push('📜 '+(G.deeds[v]||'Past deed'));
    else if (k==='origin') out.push(G.origins[v]?G.origins[v].icon+' '+G.origins[v].n:v);
    else if (k==='gold') out.push(isKid()?'$'+v:'🪙 '+v+' gold');
    else if (k==='anyally') out.push('🤝 Companion');
    else if (k==='bond') out.push('♥ Bond');
  });
  return out.slice(0,2).join(' · ');
}

/* ===================== RENDER ===================== */
function setArt(spec, seed, title, count){
  $('#art').innerHTML = G.art(spec, S || {tod:3,wx:'clear'}, seed) + `<div class="cap"><div class="title">${esc(title||'')}</div>${count?`<div class="count">${count}</div>`:''}</div>`;
}
function setHeader(){
  const h = $('#hdrchips');
  if (!S){ h.innerHTML = ''; $('#bars').style.visibility='hidden'; return; }
  $('#bars').style.visibility='visible';
  const C = G.classes[S.cls];
  $('#hpbar').style.width = Math.max(0,S.hp/S.maxHp*100)+'%'; $('#hptxt').textContent = `HP ${Math.max(0,S.hp)} / ${S.maxHp}`;
  $('#mpbar').style.width = Math.max(0,S.mp/S.maxMp*100)+'%'; $('#mptxt').textContent = `${mpL()} ${S.mp} / ${S.maxMp}`;
  $('#xpbar').style.width = (S.lvl>=20?100:S.xp/G.xpNeed(S.lvl)*100)+'%'; $('#xptxt').textContent = `Lv ${S.lvl}  ·  XP ${S.lvl>=20?'MAX':S.xp+'/'+G.xpNeed(S.lvl)}`;
  const st = Object.keys(S.status).filter(k=>S.status[k]>0).map(k=>({poison:'☠',bless:'✨',curse:'💀'})[k]).join('');
  const ST = G.stories[S.story||'ashen'] || {};
  const goldChip = ST.noGold ? '' : `<span class="chip">${isKid()?'💵 $':'🪙 '}<b>${S.gold}</b></span>`;
  const envChip = ST.hideEnv ? `<span class="chip">⏱️ Hour <b>${Math.floor(S.steps/2)+1}</b></span>` : `<span class="chip">Age <b>${S.age}</b> · Day <b>${S.day}</b> · ${TODN[S.tod]}</span><span class="chip">${WXI[S.wx]||''} ${WXN[S.wx]||S.wx}</span>`;
  const kidsChip = S.kids != null ? `<span class="chip" title="Children still with you">👧 Children <b>${S.kids}</b>/100</span>` : '';
  h.innerHTML = `<span class="chip">${C.icon} <b>${esc(S.name)}</b>${isKid()?' · ':' the '}${String(C.n).replace(/^The /,'')}</span>${goldChip}${kidsChip}${envChip}${st?`<span class="chip">${st}</span>`:''}${S.insight>0?`<span class="chip" title="A sharp mind: one wrong answer is ruled out in the next question">💡 Insight <b>${S.insight}</b></span>`:''}`;
}
function renderRight(){
  const R = $('#rbody'); if (!R) return;
  document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on', b.dataset.t===tab));
  if (!S){ R.innerHTML = '<div class="empty">Your choices will be recorded here as the journey unfolds.</div>'; return; }
  let h = '';
  if (tab==='log'){
    h += `<div class="sec">Choices made · ${S.choices} of ${G.target(S)}+ on the road to ${(G.stories[S.story]||{}).climaxName||'the end'}</div>`;
    if (!S.log.length) h += '<div class="empty">No choices yet.</div>';
    for (let i=S.log.length-1;i>=0;i--){ const e=S.log[i];
      h += `<div class="le ${e.ok===false?'no':'ok'}"><span class="n">${e.n?'#'+e.n:'·'}</span><span class="c">${esc(e.c)}</span><span class="sc">${esc(e.sc)}${e.roll?` — 🎲 ${e.roll.r}→${e.roll.tot} vs ${e.roll.dc}`:''}</span>${e.t?`<div class="t">${esc(e.t)}</div>`:''}<div class="tg">${(e.tags||[]).map(tagHtml).join('')}</div></div>`; }
  }
  else if (tab==='hero'){
    const C = G.classes[S.cls], O = G.origins[S.origin];
    h += `<div class="sec">${C.icon} ${esc(S.name)} — ${C.n} · ${O.n}</div><div class="st">${G.STATS.map(s=>`<div>${s}<b>${S.stats[s]}</b>${G.mod(S.stats[s])>=0?'+':''}${G.mod(S.stats[s])}</div>`).join('')}</div>`;
    h += `<div class="sec">Skills & spells</div>` + S.skills.map(k=>{ const s=G.skills[k]; return `<div class="row"><div class="ic">${s.icon}</div><div class="tx"><div class="nm">${s.n}${s.cost?` <span class="m mp">${s.cost} MP</span>`:''}</div><div class="ds">${s.d}</div></div></div>`; }).join('');
    const deeds = Object.keys(S.flags).filter(f=>G.deeds[f]);
    h += `<div class="sec">Deeds & knowledge</div>` + (deeds.length? deeds.map(f=>`<div class="row"><div class="ic">📜</div><div class="tx"><div class="ds" style="color:#e0d4bc;font-size:13px">${esc(G.deeds[f])}</div></div></div>`).join('') : '<div class="empty">Nothing of note — yet.</div>');
  }
  else if (tab==='pack'){
    const groups = [['weap','⚔ Weapons'],['arm','🛡 Armour'],['cons','🧪 Consumables'],['scroll','📜 Scrolls & manuals'],['trink','💍 Trinkets'],['gimmick','🎲 Curiosities'],['relic','🌟 Relics']];
    h += `<div class="sec">Pack · ${isKid()?'💵 $'+S.gold:'🪙 '+S.gold+' gold'}  <span class="hint" style="float:right">press U to use items</span></div>`;
    let any = false;
    groups.forEach(([ty,lab])=>{ const ids = Object.keys(S.items).filter(i=>S.items[i]>0 && ((G.items[i].type===ty) || (ty==='relic'&&G.items[i].relic)));
      if (!ids.length) return; any = true; h += `<div class="sec">${lab}</div>`;
      ids.forEach(id=>{ const it=G.items[id]; const eq = S.eq.weap===id||S.eq.rng===id||S.eq.arm===id;
        h += `<div class="row ${eq?'eq':''}"><div class="ic">${it.icon}</div><div class="tx"><div class="nm">${esc(it.n)}${S.items[id]>1?' ×'+S.items[id]:''}${eq?' <span class="m safe">equipped</span>':''}</div><div class="ds">${esc(it.d)}</div></div>${it.use?`<button data-use="${id}">Use</button>`:''}</div>`; }); });
    if (!any) h += '<div class="empty">Your pack is empty.</div>';
  }
  else if (tab==='party'){
    h += `<div class="sec">Companions</div>`;
    if (!S.allies.length) h += '<div class="empty">You travel alone — for now.</div>';
    S.allies.forEach(a=>{ const A=G.allies[a]; const b=S.bond[a]||0; h += `<div class="row"><div class="ic">${A.icon}</div><div class="tx"><div class="nm">${A.n} <span class="m">${A.role}</span></div><div class="ds">${A.bio}</div><div class="ds"><span class="heart">${'♥'.repeat(Math.min(b,5))}</span>${'♡'.repeat(Math.max(0,5-b))} bond</div></div></div>`; });
    h += `<div class="sec">Condition</div><div class="row"><div class="ic">🌦️</div><div class="tx"><div class="nm">${TODN[S.tod]}, Day ${S.day}</div><div class="ds">${WXN[S.wx]||S.wx}. ${Object.keys(S.status).filter(k=>S.status[k]>0).map(k=>({poison:'Poisoned',bless:'Blessed',curse:'Cursed'})[k]+' ('+S.status[k]+')').join(', ')||'No afflictions.'}</div></div></div>`;
    const ch = G.chapters[S.chapter]; if (ch) h += `<div class="sec">Journey</div><div class="row"><div class="ic">🗺️</div><div class="tx"><div class="nm">${esc(ch.n)}</div><div class="ds">Chapter ${S.chi} of ${((G.stories[S.story]||{}).chapters||G.chapterOrder).length}. ${esc(ch.sub||'')}</div></div></div>`;
  }
  R.innerHTML = h;
  R.querySelectorAll('[data-use]').forEach(b => b.onclick = () => useItem(b.dataset.use));
}
function renderScreen(sc, opts){
  // generic renderer for title / creation / game scenes
  opts = opts||{};
  CUR = sc;
  const units = [];
  let h = '';
  if (sc.hud){ const H=sc.hud; h += `<div class="hud"><div class="hudrow"><span class="hudname">${H.icon} ${esc(H.name)}${H.boss?' <i>BOSS</i>':''}</span><span class="hudhp">${H.hp} / ${H.max}</span></div><div class="hbar"><i style="width:${Math.max(0,H.hp/H.max*100)}%"></i></div>${H.ward>0?`<div class="hbar ward"><i style="width:${Math.min(100,H.ward)}%"></i></div>`:''}${H.notes.length?`<div class="hudnotes">${H.notes.map(esc).join(' · ')}</div>`:''}</div>`; }
  if (opts.outcome) h += opts.outcome.html(units);
  if (sc.preHtml) h += sc.preHtml;
  const wxl = sc.wxline && S ? `<p class="env">${esc(envLine(S))}</p>` : '';
  if (wxl) { h += wxl.replace('<p class="env">','<p class="env"><span class="s" id="uenv" style="animation-delay:.1s">').replace('</p>','</span></p>'); }
  h += `<div class="scene ${sc.card?'card':''} ${sc.death?'death':''}">${paraHtml(sc.text, units, '')}</div>`;
  if (sc.postHtml) h += sc.postHtml;
  const st = $('#story'); st.innerHTML = h; st.scrollTop = 0;
  // options
  const av = sc.opts.filter(o=>o.avail), lk = sc.opts.filter(o=>!o.avail);
  let oh = '';
  av.forEach((o,i) => { const meta = [];
    if (o.mp) meta.push(`<span class="m mp">✦ −${o.mp} ${esc(mpL())}</span>`);
    const rl = reqLabel(o); if (rl) meta.push(`<span class="m">${esc(rl)}</span>`);
    if (o.safe && !o.chk && !rl) meta.push('');
    oh += `<button class="opt" data-i="${i}"><span class="key">${o.zero?'0':i+1}</span><span class="lbl">${o.html||esc(o.label)}</span><span class="meta">${meta.join('')}</span></button>`; });
  lk.forEach(o => { oh += `<div class="opt locked" title="${esc(o.why||'')}"><span class="key">🔒</span><span class="lbl">${esc(o.label)}</span><span class="meta"><span class="m">${esc(o.why||'Locked')}</span></span></div>`; });
  $('#opts').innerHTML = oh + `<div class="hint"><span class="kbhint">Press a number key (numpad works) · <b>Space</b> skip voice · <b>R</b> re-read · <b>M</b> mute · <b>U</b> use item · <b>L/H/P/T</b> panels · <b>Esc</b> menu</span><span class="tchint">Tap a choice · ☰ Menu: voice &amp; settings · 📋 Panels: your choices, hero and pack</span></div>`;
  $('#opts').querySelectorAll('button.opt').forEach(b => b.onclick = () => pickIndex(+b.dataset.i));
  // narration units
  SP.units = [];
  const nodes = []; units.forEach(u => { const el = document.getElementById(u.id); nodes.push({ text:u.text, el }); });
  if (SP.opts){ av.forEach((o,i) => nodes.push({ text:`Choice ${i+1}. ${o.label}`, el: $('#opts').querySelectorAll('button.opt')[i] })); }
  SP.pending = nodes;
  if (!opts.silent && mode==='play') runUnits(nodes);
}

function outcomeBlock(out, hideText){
  if (!out || (!out.text && !out.chosen)) return null;
  return { html(units){
    const cls = out.ok===false?'bad':(out.roll&&out.ok?'good':'');
    const body = hideText ? '' : paraHtml(out.text || '', units, '');
    return `<div class="outcome ${cls}"><div class="you">You chose: ${esc(out.chosen||'')}</div>${rollHtml(out.roll)}${body}${(out.tags||[]).length?`<div class="gl">What changed:</div><div class="tags">${(out.tags||[]).map(tagHtml).join('')}</div>`:''}</div>`;
  } };
}
function renderGame(silent){
  mode = 'play';
  let sc; try { sc = G.resolveCur(S); } catch(e){ console.error(e); alert('Story error: '+e.message); return; }
  const count = sc.death||sc.end ? '' : `Choice ${S.choices+(sc.count?1:0)} / ${G.target(S)}`;
  setHeader(); setBrand(G.stories[S.story||'ashen'].title);
  setArt(sc.art, sc.id+'|'+S.chi, (G.chapters[S.chapter]&&!sc.death&&!sc.end&&!sc.card?G.chapters[S.chapter].n+' — ':'')+sc.title, count);
  renderScreen(sc, { outcome: outcomeBlock(S.out, S.dead), silent });
  renderRight();
}

/* ===================== INPUT ===================== */
function pickIndex(i){
  if (modalOpen==='use') { return; }
  if (mode==='play'){
    const res = G.choose(S, i); if (!res) return;
    if (res.act==='new'){ toTitle(); return; }
    if (res.act==='cp'){ restoreCheckpoint(); return; }
    if (S.dead){ LS.del(sk('aq_save',S.story)); } else save();
    renderGame();
    if (S.dead) { stopSpeech(); renderGame(); }
    return;
  }
  const sc = CUR; if (!sc) return; const av = sc.opts.filter(o=>o.avail); const o = av[i]; if (!o) return;
  if (o.fn) o.fn();
}
function save(){ if (!S || S.dead) return; LS.set(sk('aq_save',S.story), G.snapshot(S)); if (S.cp) LS.set(sk('aq_cp',S.story), S.cp); }
function restoreCheckpoint(){ const st = S ? S.story : 'ashen'; let cp = S && S.cp; if (!cp) cp = LS.get(sk('aq_cp',st)); if (!cp) return; S = G.restore(cp); S.cp = cp; S.out = null; LS.set(sk('aq_save',S.story), G.snapshot(S)); renderGame(); }
document.addEventListener('keydown', e => {
  const tgt = e.target && e.target.tagName;
  if (tgt==='INPUT' || tgt==='SELECT' || tgt==='TEXTAREA'){ if (e.key==='Enter' && e.target.id==='nameIn') { e.preventDefault(); nameDone(); } return; }
  if (e.ctrlKey||e.metaKey||e.altKey) return;
  if (mode==='bed' && !modalOpen && G.bed && G.bed.onKey(e)) return;
  let n = null;
  if ((e.code==='Digit0' || e.code==='Numpad0') && mode==='title' && !modalOpen && CUR){ const z = CUR.opts.find(o=>o.zero); if (z && z.fn){ e.preventDefault(); z.fn(); return; } }
  if (/^Numpad[1-9]$/.test(e.code)) n = +e.code.slice(6); else if (/^Digit[1-9]$/.test(e.code)) n = +e.code.slice(5);
  if (n){ e.preventDefault(); if (modalOpen==='use'){ useByNumber(n-1); return; } if (modalOpen) return; pickIndex(n-1); return; }
  const k = e.key.toLowerCase();
  if (e.code==='Numpad0' || k==='r'){ e.preventDefault(); if (!modalOpen && CUR && mode==='play') runUnits(SP.pending||[]); return; }
  if (e.code==='NumpadDecimal' || k===' ' || k==='enter'){ e.preventDefault(); if (SP.speaking) stopSpeech(); else if (!modalOpen && CUR && CUR.opts.filter(o=>o.avail).length===1 && k==='enter') pickIndex(0); return; }
  if (k==='m'){ SP.on=!SP.on; LS.set('aq_voice_on',SP.on?'1':'0'); if(!SP.on) stopSpeech(); updateVoiceBtns(); return; }
  if (k==='o'){ SP.opts=!SP.opts; LS.set('aq_read_opts',SP.opts?'1':'0'); updateVoiceBtns(); return; }
  if (k==='l'||k==='h'||k==='p'||k==='t'){ tab = ({l:'log',h:'hero',p:'pack',t:'party'})[k]; renderRight(); return; }
  if (k==='u'){ if (S && mode==='play') openUse(); return; }
  if (e.key==='+'||e.key==='='||e.code==='NumpadAdd'){ SP.rate=Math.min(2,SP.rate+.1); LS.set('aq_rate',SP.rate); toast('Voice speed '+SP.rate.toFixed(1)); return; }
  if (e.key==='-'||e.code==='NumpadSubtract'){ SP.rate=Math.max(.5,SP.rate-.1); LS.set('aq_rate',SP.rate); toast('Voice speed '+SP.rate.toFixed(1)); return; }
  if (e.key==='Escape'){ if (modalOpen) closeModal(); else openMenu(); return; }
});

/* ===================== MODALS ===================== */
function modal(html){ const m=$('#modal'); m.innerHTML = `<div class="card">${html}</div>`; m.classList.add('on'); }
function closeModal(){ $('#modal').classList.remove('on'); modalOpen=null; $('#modal').innerHTML=''; }
let toastT; function toast(t){ let e=$('#toast'); if(!e){ e=document.createElement('div'); e.id='toast'; e.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#000c;color:#ffd77a;padding:8px 16px;border-radius:20px;font:14px system-ui;z-index:50;border:1px solid #e0a93e'; document.body.appendChild(e);} e.textContent=t; e.style.display='block'; clearTimeout(toastT); toastT=setTimeout(()=>e.style.display='none',1400); }
function openUse(){
  const ids = Object.keys(S.items).filter(i=>S.items[i]>0 && G.items[i].use);
  modalOpen='use';
  modal(`<h2>Use an item</h2>${ids.length? ids.slice(0,9).map((id,i)=>`<div class="row"><div class="ic">${G.items[id].icon}</div><div class="tx"><div class="nm">${i+1}. ${esc(G.items[id].n)}${S.items[id]>1?' ×'+S.items[id]:''}</div><div class="ds">${esc(G.items[id].d)}</div></div><button data-u="${id}">Use</button></div>`).join(''):'<p class="empty">You have nothing usable.</p>'}<p class="hint">Press a number to use an item · Esc to close</p>`);
  $('#modal').querySelectorAll('[data-u]').forEach(b=>b.onclick=()=>{ useItem(b.dataset.u); });
  $('#modal').onclick = ev => { if (ev.target.id==='modal') closeModal(); };
}
function useByNumber(i){ const ids = Object.keys(S.items).filter(x=>S.items[x]>0 && G.items[x].use); if (ids[i]) useItem(ids[i]); }
function useItem(id){
  if (!S) return; const R = G.useItem(S,id); if (!R) return;
  if (R.err){ toast(R.err); return; }
  toast('Used '+G.items[id].n+' '+R.tags.map(t=>t.k==='hp'?(t.v>0?'+':'')+t.v+' HP':t.k==='mp'?'+'+t.v+' MP':'').join(' '));
  setHeader(); renderRight(); if (modalOpen==='use'){ openUse(); } save();
}
function openMenu(){
  modalOpen='menu';
  modal(`<h2>Menu</h2><div class="row2"><button class="opt" id="mResume"><span class="key">1</span><span class="lbl">Resume</span></button></div>
  <div class="row2"><button class="opt" id="mSet"><span class="key">2</span><span class="lbl">Voice &amp; narration settings</span></button></div>
  <div class="row2"><button class="opt" id="mHelp"><span class="key">3</span><span class="lbl">How to play</span></button></div>
  <div class="row2"><button class="opt" id="mTitle"><span class="key">4</span><span class="lbl">Back to the story library (progress is auto-saved)</span></button></div>`);
  $('#mResume').onclick=closeModal; $('#mSet').onclick=openSettings; $('#mHelp').onclick=openHelp; $('#mTitle').onclick=()=>{ closeModal(); toTitle(); };
  $('#modal').onclick = ev => { if (ev.target.id==='modal') closeModal(); };
}
function openSettings(){
  modalOpen='settings'; loadVoices();
  modal(`<h2>Voice &amp; narration</h2>
  <div class="row2"><label><input type="checkbox" id="sOn" ${SP.on?'checked':''}> Narrate the story aloud</label></div>
  <div class="row2"><label><input type="checkbox" id="sOpts" ${SP.opts?'checked':''}> Also read the choices aloud</label></div>
  <div class="row2"><label><input type="checkbox" id="sRich" ${G.narrOn!==false?'checked':''}> Storyteller's narration: scene-setting and feelings between scenes (untick for Quick mode)</label></div>
  <div class="row2">Voice: <select id="sVoice">${voices.map(v=>`<option value="${esc(v.name)}" ${chooseVoice()&&chooseVoice().name===v.name?'selected':''}>${esc(v.name)} (${v.lang})</option>`).join('') || '<option>(browser default)</option>'}</select></div>
  <div class="row2">Speed: <input type="range" id="sRate" min="0.6" max="1.6" step="0.05" value="${SP.rate}"> <span id="sRateV">${SP.rate.toFixed(2)}</span></div>
  <div class="row2"><button class="voice" id="sTest" style="padding:6px 14px;background:#0f0c0a;border:1px solid #e0a93e;border-radius:8px">▶ Test voice</button> <button id="sClose" style="padding:6px 14px;background:#2a2118;border:1px solid #4a3a2b;border-radius:8px">Close</button></div>`);
  $('#sOn').onchange = e=>{ SP.on=e.target.checked; LS.set('aq_voice_on',SP.on?'1':'0'); if(!SP.on) stopSpeech(); updateVoiceBtns(); };
  $('#sOpts').onchange = e=>{ SP.opts=e.target.checked; LS.set('aq_read_opts',SP.opts?'1':'0'); updateVoiceBtns(); };
  $('#sRich').onchange = e=>{ G.narrOn = e.target.checked; LS.set('aq_rich', G.narrOn?'1':'0'); };
  $('#sVoice').onchange = e=>{ SP.voiceName=e.target.value; LS.set('aq_voice_name',SP.voiceName); };
  $('#sRate').oninput = e=>{ SP.rate=parseFloat(e.target.value); LS.set('aq_rate',SP.rate); $('#sRateV').textContent=SP.rate.toFixed(2); };
  $('#sTest').onclick = ()=>{ const was=SP.on; SP.on=true; runUnits([{text:'The road is long, and the dark is patient — but so are you.', el:null}]); SP.on=was; };
  $('#sClose').onclick=closeModal;
  $('#modal').onclick = ev => { if (ev.target.id==='modal') closeModal(); };
}
function openHelp(){
  modalOpen='help';
  modal(`<h2>How to play</h2><p><b>Choose with the number keys</b> (the numpad works). The numbered options at the bottom are your choices; a 🔒 option is one you lack the skill, item, class or ally for.</p>
  <p>🎲 shows the chance of a <b>d20 + stat + skills + gear</b> check. ❤ HP at 0 ends your tale. ✦ MP fuels spells. Rest at camps, use potions with <b>U</b>.</p>
  <p>Your choices appear on the right. <b>L</b> log · <b>H</b> hero · <b>P</b> pack · <b>T</b> party.</p>
  <p>The story is read aloud. <b>Space</b> skips the voice · <b>R</b> re-reads · <b>M</b> mutes · <b>+ / −</b> change speed · <b>O</b> toggles reading the choices.</p>
  <p>Progress autosaves after every choice. You can die — and a checkpoint at the start of each chapter lets you try again.</p><p><button id="hx" style="padding:6px 14px;background:#2a2118;border:1px solid #4a3a2b;border-radius:8px">Close</button></p>`);
  $('#hx').onclick=closeModal; $('#modal').onclick = ev => { if (ev.target.id==='modal') closeModal(); };
}

/* ===================== STORY LIBRARY, TITLE & CREATION ===================== */
function mk(label, fn, extra){ return Object.assign({ raw:{}, label, avail:true, fn }, extra||{}); }
const sk = (b, st) => (st||'ashen')==='ashen' ? b : b+'_'+st;       // per-story save keys (ashen keeps the original keys)
const storyIds = () => Object.keys(G.stories).filter(k=>G.stories[k].title);
function setBrand(t){ const b=$('#brand'); if (b) b.textContent = '⚜ ' + t; }
function toTitle(){
  if (G.bed) G.bed.stop(); document.body.classList.remove('bed');
  stopSpeech(); mode='title'; S=null; closeModal(); setHeader(); setBrand('BYOA · Build Your Own Adventure Story Building');
  setArt('title|📖 ✨', 'library', 'Choose your story', '');
  const opts = storyIds().map(id => { const st=G.stories[id]; const saved=!!LS.get(sk('aq_save',id));
    return mk('', ()=>storyMenu(id), { html:`<b>${st.icon} ${esc(st.title)}</b>${saved?' <span class="m safe">saved game</span>':''}<span class="sub">${esc(st.tag)}</span><span class="sub2">${esc(st.desc)}</span>` }); });
  opts.push(mk('Voice & narration settings', openSettings, { zero:true }));
  renderScreen({ art:'title|📖', title:'Build Your Own Adventure Story Building', card:true, opts, wxline:false, text:
    'BYOA by Jaken\nWELCOME, STORYTELLER\nPick an adventure. Every story has its own hero, places, items, dangers and endings, and every choice you make is recorded as you go.\nChoose with the number keys.' }, { silent:false });
  renderRight();
}
function storyMenu(id){
  const st = G.stories[id]; setBrand(st.title); mode='title';
  setArt(st.art, 'menu'+id, st.title, '');
  const hasSave = !!LS.get(sk('aq_save',id)), hasCp = !!LS.get(sk('aq_cp',id));
  const opts = [ mk('Begin a new journey', ()=>startCreate(id)) ];
  if (hasSave) opts.push(mk('Continue your saved journey', ()=>loadSave(id)));
  else if (hasCp) opts.push(mk('Return to your last chapter checkpoint', ()=>{ const cp=LS.get(sk('aq_cp',id)); S=G.restore(cp); S.cp=cp; renderGame(); }));
  opts.push(mk('Back to the story library', toTitle));
  renderScreen({ art:st.art, title:st.title, card:true, opts, wxline:false, text:st.intro }, { silent:false });
  renderRight();
}
function loadSave(id){ const j = LS.get(sk('aq_save',id)); if (!j) return; if (G.stories[id].bedtime && G.bed){ G.bed.start(id, true); return; } try { S = G.restore(j); S.cp = LS.get(sk('aq_cp',id)); renderGame(); } catch(e){ toast('Could not load save'); } }
function startCreate(id){ if (G.stories[id].bedtime && G.bed){ G.bed.start(id, false); return; } CR = { story:id, name:'', cls:null, origin:null, skills:[] }; setBrand(G.stories[id].title); stepName(); }
const CT = () => G.stories[CR.story].create;
const inStory = obj => Object.keys(obj).filter(k => (obj[k].story||'ashen') === CR.story);
function createScreen(art, title, text, opts, pre, post){ mode='create'; setArt(art,'create'+title,title,''); renderScreen({ art, title, text, opts, wxline:false, preHtml:pre, postHtml:post }); renderRight(); }
function stepName(){
  const c = CT();
  createScreen(c.nameArt, c.nameTitle, c.nameText, [ mk('Continue', nameDone) ],
    '', `<div style="margin-top:8px"><input type="text" id="nameIn" maxlength="18" placeholder="Your name…" value="${esc(CR.name)}" autocomplete="off"></div>`);
  setTimeout(()=>{ const i=$('#nameIn'); if(i){ i.focus(); i.select(); } }, 50);
}
function nameDone(){ const i=$('#nameIn'); const v = (i&&i.value||'').trim(); CR.name = v || G.stories[CR.story].defName || 'Hero'; if(i) i.blur(); stepClass(); }
function stepClass(){
  const c = CT();
  const opts = inStory(G.classes).map(k => { const x=G.classes[k]; return mk('', ()=>{ CR.cls=k; stepOrigin(); }, { html:`<b>${x.icon} ${x.n}</b> — ${esc(x.d)}` }); });
  createScreen(c.clsArt, c.clsTitle, c.clsText.replace('{name}',CR.name), opts);
}
function stepOrigin(){
  const c = CT();
  const opts = inStory(G.origins).map(k => { const o=G.origins[k]; return mk('', ()=>{ CR.origin=k; CR.skills=[]; stepSkill(1); }, { html:`<b>${o.icon} ${o.n}</b> — ${esc(o.d)}` }); });
  createScreen(c.originArt, c.originTitle, c.originText, opts);
}
function stepSkill(n){
  const c = CT(); const C = G.classes[CR.cls]; const left = C.picks.filter(p=>!CR.skills.includes(p));
  const opts = left.map(p => { const s=G.skills[p]; return mk('', ()=>{ CR.skills.push(p); if (n===1) stepSkill(2); else stepDiff(); }, { html:`<b>${s.icon} ${s.n}</b> — ${esc(s.d)}` }); });
  createScreen(c.clsArt, 'Your talents', `${c.sigText}: ${G.skills[C.sig].icon} ${G.skills[C.sig].n}. Now choose ${n===1?'your first':'your second'} learned skill${n===2?` (you chose ${G.skills[CR.skills[0]].n})`:''}. Skills open special options in the story.`, opts);
}
function stepDiff(){
  const c = CT();
  createScreen('camp|⚖️', c.diffTitle, c.diffText, c.diffs.map(x=>mk('', ()=>{ CR.diff=x[0]; stepConfirm(); }, { html:`<b>${x[1]}</b> — ${x[2]}` })));
}
function stepConfirm(){
  const c = CT(); const C=G.classes[CR.cls], O=G.origins[CR.origin];
  createScreen(c.clsArt, 'Ready?', `${CR.name} — ${C.n}, ${O.n}. Skills: ${[C.sig].concat(CR.skills).map(s=>G.skills[s].n).join(', ')}. ${c.confirmText}`, [
    mk('Begin the tale', ()=>{ S = G.newState({ story:CR.story, name:CR.name, cls:CR.cls, origin:CR.origin, skills:CR.skills, diff:CR.diff }); save(); renderGame(); }),
    mk('Start over', stepName) ]);
}

/* ===================== BOOT ===================== */
window.addEventListener('DOMContentLoaded', () => {
  $('#bVoice').onclick = () => { SP.on=!SP.on; LS.set('aq_voice_on',SP.on?'1':'0'); if(!SP.on) stopSpeech(); else if (SP.pending && mode==='play') runUnits(SP.pending); updateVoiceBtns(); if (mode==='bed' && G.bed) G.bed.voiceChanged(); };
  $('#bOpts').onclick = () => { SP.opts=!SP.opts; LS.set('aq_read_opts',SP.opts?'1':'0'); updateVoiceBtns(); };
  $('#bMenu').onclick = openMenu;
  $('#bSkip').onclick = () => { if (mode==='bed' && G.bed) G.bed.skip(); else stopSpeech(); };
  document.querySelectorAll('#tabs button').forEach(b => b.onclick = () => { tab=b.dataset.t; renderRight(); });
  const aside = $('aside'); const closePanel = () => aside.classList.remove('open');
  $('#bPanel').onclick = () => { renderRight(); aside.classList.toggle('open'); };
  $('#bClosePanel').onclick = closePanel;
  document.addEventListener('keydown', e => { if (e.key==='Escape') closePanel(); });
  /* mobile browsers only allow speech after a tap: unlock it with a silent utterance on the first touch / click */
  const unlock = () => { if (!synth) return; try{ const u = new SpeechSynthesisUtterance(' '); u.volume = 0; synth.speak(u); }catch(e){} if (SP.on && SP.pending && mode==='play') setTimeout(()=>runUnits(SP.pending), 200); };
  ['touchend','click','keydown'].forEach(ev => document.addEventListener(ev, unlock, { once:true, passive:true }));
  G.narrOn = LS.get('aq_rich') !== '0';
  updateVoiceBtns(); toTitle();
});
window.AQ_UI = { runUnits, stopSpeech, SP, setArt, setBrand, setHeader, esc, sentences, toast, toTitle, LS, sk, updateVoiceBtns, openMenu, setMode(m){ mode=m; }, getMode(){ return mode; }, setCUR(c){ CUR=c; }, clear(){ S=null; } };
window.AQ = { get S(){ return S; }, renderGame, toTitle, save, setState(x){ S=x; renderGame(true); }, setTab(t){ tab=t; renderRight(); } };
})();
