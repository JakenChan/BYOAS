/* BEDTIME PLAYER: a long, slow, voiced story with a handful of gentle forks.
   No stats, no skills, no danger. The story keeps itself going: each chunk is read aloud, then the next one begins.
   At a fork the listener can choose with a key or a tap; if nothing happens for ten seconds the dice choose. */
(function(){
const G = globalThis.G;
const B = G.bed = {};
const NODES = {}, DEF = {};
const ASK_WAIT = 10;                 /* seconds before the dice decide */
const FAST = Math.max(1, +(new URLSearchParams(location.search).get('bedfast') || 1));   /* test hook: ?bedfast=40 runs the timers 40 times faster */

/* register a bedtime story: meta for the library + a map of nodes */
G.bedStory = (id, def) => {
  DEF[id] = def; NODES[id] = def.nodes;
  G.story(id, { title:def.title, icon:def.icon, art:def.art, tag:def.tag, desc:def.desc, intro:def.intro, bedtime:true, defName:'Dreamer' });
};
G.bedNodes = NODES;

let UI = null, st = null, tok = 0, paused = false, curUnits = [], curIdx = 0, curDone = null, timers = [], clockT = null, wake = null, askT = null;
const $ = s => document.querySelector(s);
const clearTimers = () => { timers.forEach(clearTimeout); timers = []; if (askT){ clearInterval(askT); askT = null; } };
const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
const key = id => 'aq_save_' + id, endKey = id => 'aq_bed_ends_' + id;
const seenEnds = id => { try { return JSON.parse(UI.LS.get(endKey(id)) || '[]'); } catch(e){ return []; } };
const nEnds = id => Object.keys(NODES[id]).filter(k => NODES[id][k].end).length;

/* ---------- narration: voice if it is on, otherwise a quiet reading-speed timer ---------- */
function build(paras, startNo){
  const units = []; let no = startNo || 0; let html = '';
  paras.forEach(p => {
    const ss = UI.sentences(String(p)).map(s => s.trim()).filter(Boolean);
    html += '<p class="bp">' + ss.map(s => { const id = 'bs' + (no++); units.push({ text:s, id }); units.push({ pause: 550 }); return `<span class="s" id="${id}">${UI.esc(s)}</span> `; }).join('') + '</p>';
    units.push({ pause: 2200 });
  });
  return { units, html };
}
function bindEls(units){
  units.forEach((u, i) => { if (u.id){ u.el = document.getElementById(u.id); u.cb = () => { curIdx = i; }; } });
}
function highlight(u){
  document.querySelectorAll('.speaking').forEach(e => e.classList.remove('speaking'));
  if (u && u.el){ u.el.classList.add('speaking'); try{ u.el.scrollIntoView({ block:'center', behavior:'smooth' }); }catch(e){} }
}
function timerPlay(units, from, my, done){
  let i = from;
  const step = () => {
    if (my !== tok) return;
    if (paused){ later(step, 400); return; }
    if (i >= units.length){ done && done(); return; }
    const u = units[i]; curIdx = i; i++;
    if (u.pause){ later(step, u.pause / FAST); return; }
    highlight(u);
    const words = String(u.text).split(/\s+/).length;
    later(step, Math.round(words / 2.1 * 1000 / Math.max(.5, UI.SP.rate) / FAST));
  };
  step();
}
function play(units, from, done){
  const my = ++tok; curUnits = units; curIdx = from || 0; curDone = done;
  UI.stopSpeech();
  const slice = units.slice(from || 0);
  if (UI.SP.on && window.speechSynthesis){
    UI.runUnits(slice.map((u, k) => Object.assign({}, u, { cb: u.id ? () => { curIdx = (from||0) + k; } : null })), () => { if (my === tok) done && done(); },
      failedAt => { if (my === tok) timerPlay(units, (from||0) + failedAt, my, done); });
  } else timerPlay(units, from || 0, my, done);
}

/* ---------- screens ---------- */
function frame(node, F){
  UI.setArt(node.art || DEF[st.id].art, st.id + '|' + st.node, node.title || DEF[st.id].title, '');
}
function chrome(extra){
  return `<div class="bedctl">${extra||''}<button class="bb" id="bbPause">⏸ Pause</button><button class="bb" id="bbDim">🌙 Dim</button><button class="bb" id="bbMute">${UI.SP.on?'🔊 Voice on':'🔇 Voice off'}</button></div>` +
    `<div class="hint"><span class="kbhint">Space pause or resume · <b>M</b> voice on/off · <b>D</b> dim the screen · <b>+</b>/<b>−</b> speed · <b>Esc</b> menu</span><span class="tchint">Tap Pause to stop for a moment, Dim to darken the screen.</span></div>`;
}
function wireChrome(){
  const p = $('#bbPause'); if (p) p.onclick = togglePause;
  const d = $('#bbDim'); if (d) d.onclick = toggleDim;
  const m = $('#bbMute'); if (m) m.onclick = () => { UI.SP.on = !UI.SP.on; UI.LS.set('aq_voice_on', UI.SP.on ? '1' : '0'); if (!UI.SP.on) UI.stopSpeech(); UI.updateVoiceBtns(); B.voiceChanged(); m.textContent = UI.SP.on ? '🔊 Voice on' : '🔇 Voice off'; };
}
function togglePause(){
  paused = !paused;
  const p = $('#bbPause'); if (p) p.textContent = paused ? '▶ Resume' : '⏸ Pause';
  if (window.speechSynthesis && UI.SP.on){ try{ paused ? speechSynthesis.pause() : speechSynthesis.resume(); }catch(e){} }
  UI.toast(paused ? 'Paused' : 'Resuming');
}
function toggleDim(){ document.body.classList.toggle('dim'); }

function save(){ if (!st || st.over) return; UI.LS.set(key(st.id), JSON.stringify({ n:st.node, F:st.F })); }

function go(id){
  clearTimers(); paused = false; const N = NODES[st.id][id]; if (!N) { console.error('missing bed node', id); return; }
  st.node = id; if (N.set) Object.assign(st.F, N.set);
  if (N.ask) return showAsk(N);
  showText(N);
}
function paras(N){ const t = typeof N.text === 'function' ? N.text(st.F) : N.text; return (t || []).filter(Boolean); }

function showText(N){
  save(); frame(N);
  const b = build(paras(N)); const s = $('#story');
  s.innerHTML = `<div class="scene bedscene">${N.head ? `<p class="bhead">${UI.esc(N.head)}</p>` : ''}${b.html}</div>`; s.scrollTop = 0;
  bindEls(b.units);
  $('#opts').innerHTML = N.end ? '' : chrome(); if (!N.end) wireChrome();
  UI.setCUR({ opts:[] });
  const after = N.end ? () => finish(N) : () => later(() => go(typeof N.next === 'function' ? N.next(st.F) : N.next), 1800 / FAST);
  later(() => play(b.units, 0, after), 900 / FAST);
}

function showAsk(N){
  save(); frame(N);
  const opts = N.opts;
  const b = build(paras(N)); const s = $('#story');
  s.innerHTML = `<div class="scene bedscene">${b.html}</div>`; s.scrollTop = 0;
  const nm = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
  const keyWords = opts.map((o, i) => nm[i].toLowerCase());
  const intro = [ 'If you would like to choose, press ' + keyWords.slice(0, -1).join(', ') + ' or ' + keyWords[keyWords.length - 1] + ', or tap. If you wait, the dice will choose for you.' ];
  const ob = build([intro[0]].concat(opts.map((o, i) => `${nm[i]}. ${o.t}`)), 5000);
  s.querySelector('.scene').insertAdjacentHTML('beforeend', `<div class="asknote">${ob.html}</div>`);
  const units = b.units.concat(ob.units); bindEls(units);
  const btns = opts.map((o, i) => `<button class="opt" data-i="${i}"><span class="key">${i + 1}</span><span class="lbl">${UI.esc(o.t)}</span></button>`).join('');
  $('#opts').innerHTML = btns + `<div class="dicebar" id="dicebar">&nbsp;</div>` + chrome(); wireChrome();
  $('#opts').querySelectorAll('button.opt').forEach(x => x.onclick = () => choose(+x.dataset.i, false));
  UI.setCUR({ opts: opts.map((o, i) => ({ avail:true, fn: () => choose(i, false) })) });
  st.ask = N;
  play(units, 0, () => countdown(N));
}
B.reread = () => { if (st && st.ask && curUnits.length) play(curUnits, 0, () => countdown(st.ask)); };

function countdown(N){
  let left = Math.ceil(ASK_WAIT / (FAST > 1 ? 10 : 1)); const bar = $('#dicebar'); const tick = () => { if (bar) bar.innerHTML = `🎲 Take your time. If you do not choose, the dice will decide in <b>${left}</b> seconds.`; };
  tick(); if (askT) clearInterval(askT);
  askT = setInterval(() => { if (paused) return; left--; tick(); if (left <= 0){ clearInterval(askT); askT = null; rollDice(N); } }, 1000);
}
function rollDice(N){
  const n = N.opts.length, face = 1 + Math.floor(Math.random() * 6), idx = Math.min(n - 1, Math.floor((face - 1) / (6 / n)));
  const bar = $('#dicebar'); if (bar) bar.innerHTML = `🎲 The dice tumble and land on <b>${face}</b>.`;
  const word = ['one', 'two', 'three', 'four', 'five', 'six'][face - 1];
  const line = { text: `No choice yet? Then let the dice decide. The dice tumble, and they land on ${word}. So we will go this way. ${N.opts[idx].t}`, id:null };
  play([line, { pause: 1200 }], 0, () => choose(idx, true));
}
function choose(i, byDice){
  if (!st || !st.ask) return; const N = st.ask; const o = N.opts[i]; if (!o) return;
  st.ask = null; clearTimers(); UI.stopSpeech(); tok++;
  st.F[N.flag] = o.v; st.F.last = o.v; (st.trail = st.trail || []).push(o.v);
  if (o.set) Object.assign(st.F, o.set);
  UI.LS.set('aq_bed_log_' + st.id, JSON.stringify(st.trail));
  go(typeof o.to === 'function' ? o.to(st.F) : o.to);
}

function finish(N){
  st.over = true; UI.LS.del(key(st.id));
  const seen = seenEnds(st.id); if (!seen.includes(st.node)){ seen.push(st.node); UI.LS.set(endKey(st.id), JSON.stringify(seen)); }
  const total = nEnds(st.id);
  const s = $('#story'); s.insertAdjacentHTML('beforeend', `<div class="scene bedscene"><p class="bhead">${UI.esc(N.end)}</p><p class="bp dim">You have now found ${seen.length} of ${total} different endings.</p></div>`);
  $('#opts').innerHTML = `<button class="opt" data-i="0"><span class="key">1</span><span class="lbl">Hear the story again, and choose differently</span></button><button class="opt" data-i="1"><span class="key">2</span><span class="lbl">Back to the story library</span></button>`;
  const again = () => B.start(st.id, false), lib = () => UI.toTitle();
  const els = $('#opts').querySelectorAll('button.opt'); els[0].onclick = again; els[1].onclick = lib;
  UI.setCUR({ opts:[ { avail:true, fn:again }, { avail:true, fn:lib } ] });
  document.querySelectorAll('.speaking').forEach(e => e.classList.remove('speaking'));
  try{ s.scrollTo({ top: s.scrollHeight, behavior:'smooth' }); }catch(e){}
  releaseWake();
}

/* ---------- life cycle ---------- */
function getWake(){ try{ if (navigator.wakeLock && !wake) navigator.wakeLock.request('screen').then(w => { wake = w; w.addEventListener('release', () => { wake = null; }); }).catch(()=>{}); }catch(e){} }
function releaseWake(){ try{ if (wake) wake.release(); }catch(e){} wake = null; }
document.addEventListener('visibilitychange', () => { if (!document.hidden && st && !st.over) getWake(); });

function clock(){
  if (clockT) clearInterval(clockT); const t0 = Date.now();
  const upd = () => { const h = $('#hdrchips'); if (h && st) h.innerHTML = `<span class="chip">🌙 Listening <b>${Math.floor((Date.now() - t0) / 60000)}</b> min</span>`; };
  upd(); clockT = setInterval(upd, 20000);
}
B.start = (id, resume) => {
  UI = window.AQ_UI; if (!UI) return; clearTimers(); tok++; UI.stopSpeech();
  const def = DEF[id]; UI.clear(); UI.setMode('bed'); document.body.classList.add('bed'); document.body.classList.remove('dim');
  UI.SP.mult = def.rate || 0.85; UI.SP.pitch = def.pitch || 0.9; UI.setBrand(def.title); UI.setHeader();
  st = { id, node: def.start, F: {}, trail: [] };
  if (resume){ try { const j = JSON.parse(UI.LS.get(key(id)) || 'null'); if (j && NODES[id][j.n]){ st.node = j.n; st.F = j.F || {}; } } catch(e){} }
  else UI.LS.del(key(id));
  const side = $('#rbody'); if (side) side.innerHTML = '';
  clock(); getWake(); go(st.node);
};
B.stop = () => { clearTimers(); tok++; if (clockT){ clearInterval(clockT); clockT = null; } UI = UI || window.AQ_UI; if (UI){ UI.SP.mult = 1; UI.SP.pitch = 0.95; } document.body.classList.remove('bed', 'dim'); st = null; releaseWake(); };
B.skip = () => { if (!st) return; if (st.ask){ return; } paused = false; tok++; UI.stopSpeech(); const N = NODES[st.id][st.node]; if (N && !N.end) go(typeof N.next === 'function' ? N.next(st.F) : N.next); };
B.voiceChanged = () => {
  if (!st || st.over || !curUnits.length) return;
  const from = Math.max(0, curIdx); const done = curDone; play(curUnits, from, done);
};
B.onKey = e => {
  if (!st) return false;
  const k = (e.key || '').toLowerCase();
  if (/^(Digit|Numpad)[1-9]$/.test(e.code)){ e.preventDefault(); const n = +e.code.slice(-1); if (st.ask){ choose(n - 1, false); return true; } return false; }
  if (e.code === 'Numpad0' || k === 'r'){ e.preventDefault(); B.reread(); return true; }
  if (k === ' ' || e.code === 'NumpadDecimal' || (k === 'enter' && !st.over)){ e.preventDefault(); if (!st.over) togglePause(); return true; }
  if (k === 'm'){ UI.SP.on = !UI.SP.on; UI.LS.set('aq_voice_on', UI.SP.on ? '1' : '0'); if (!UI.SP.on) UI.stopSpeech(); UI.updateVoiceBtns(); B.voiceChanged(); const m = $('#bbMute'); if (m) m.textContent = UI.SP.on ? '🔊 Voice on' : '🔇 Voice off'; return true; }
  if (k === 'd'){ toggleDim(); return true; }
  if (e.key === '+' || e.key === '=' || e.code === 'NumpadAdd'){ UI.SP.rate = Math.min(1.6, UI.SP.rate + .05); UI.LS.set('aq_rate', UI.SP.rate); UI.toast('Voice speed ' + UI.SP.rate.toFixed(2)); return true; }
  if (e.key === '-' || e.code === 'NumpadSubtract'){ UI.SP.rate = Math.max(.5, UI.SP.rate - .05); UI.LS.set('aq_rate', UI.SP.rate); UI.toast('Voice speed ' + UI.SP.rate.toFixed(2)); return true; }
  return false;
};
B.def = id => DEF[id];
B.state = () => st;
B.go = id => go(id);
})();
