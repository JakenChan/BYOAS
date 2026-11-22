/* Soft background sound for sleeping, made live with the Web Audio API (no sound files needed).
   No melody, no bells, no plucked notes and no echoes, so nothing rings or jumps out: only a very slow, warm, low pad of chords that
   swell and fade into each other, a deep hum underneath, and a gentle wash like distant waves. */
(function(){
const G = globalThis.G;
const A = G.ambient = {};
let an = null, ctx = null, master = null, running = false, timers = [], P = null, vol = 0.5, chordNo = 0, noiseSrc = null, noiseGain = null, wave = null;

const LS = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };
vol = Math.max(0, Math.min(1, parseFloat(LS.get('aq_music_vol') || '0.5')));
A.enabled = LS.get('aq_music_on') !== '0';

/* moods change only the key and the chords (all of them low, open and soft); the length of a chord is long, so the changes are hard to notice */
const MOODS = {
  joy:    { key: 7,  chords: [[0,7,12],[5,12,16],[9,12,19],[7,14,19]], len: 26 },
  calm:   { key: 2,  chords: [[0,7,12],[0,7,14],[-5,2,7],[0,7,12]],    len: 32 },
  wonder: { key: 5,  chords: [[0,7,11],[2,9,14],[0,7,11],[4,11,16]],   len: 28 },
  tender: { key: 9,  chords: [[0,7,10],[-4,3,7],[5,12,15],[-2,5,9]],   len: 30 }
};
const hz = m => 440 * Math.pow(2, (m - 69) / 12);
const later = (fn, s) => { const t = setTimeout(fn, s * 1000); timers.push(t); };

function build(){
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
  an = ctx.createAnalyser(); an.fftSize = 1024; master.connect(an);
  /* a soft, dark wash (brown noise) that swells and falls very slowly, like waves a long way off */
  const len = ctx.sampleRate * 6, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0); let last = 0;
  for (let i = 0; i < len; i++){ const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.2; }
  noiseSrc = ctx.createBufferSource(); noiseSrc.buffer = buf; noiseSrc.loop = true;
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380; lp.Q.value = 0.2;
  noiseGain = ctx.createGain(); noiseGain.gain.value = 0.55;
  wave = ctx.createOscillator(); wave.type = 'sine'; wave.frequency.value = 0.085; const wg = ctx.createGain(); wg.gain.value = 0.3; wave.connect(wg); wg.connect(noiseGain.gain);
  noiseSrc.connect(lp); lp.connect(noiseGain); noiseGain.connect(master); noiseSrc.start(); wave.start();
}
/* one chord: pure sine tones, a very long slow fade in and out, no vibrato, filtered dark */
function pad(notes, dur){
  const t0 = ctx.currentTime; const g = ctx.createGain(); g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(0.55, t0 + dur * 0.5); g.gain.linearRampToValueAtTime(0.45, t0 + dur * 0.75); g.gain.linearRampToValueAtTime(0, t0 + dur * 1.5);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = 0.1;
  g.connect(lp); lp.connect(master);
  notes.forEach(m => {
    [0, 0.6].forEach((det, k) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = hz(m) * (1 + det * 0.0006);
      const og = ctx.createGain(); og.gain.value = (k ? 0.07 : 0.12) / Math.sqrt(notes.length);
      o.connect(og); og.connect(g); o.start(t0); o.stop(t0 + dur * 1.55);
    });
  });
}
function drone(m, dur){
  const t0 = ctx.currentTime; const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = hz(m);
  const g = ctx.createGain(); g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.14, t0 + dur * 0.5); g.gain.linearRampToValueAtTime(0, t0 + dur * 1.5);
  o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur * 1.55);
}
function cycle(){
  if (!running) return;
  const M = P.mood, key = 36 + M.key;                     /* a deep, warm register */
  const dur = M.len; const chord = M.chords[chordNo % M.chords.length]; chordNo++;
  pad(chord.map(c => key + 12 + c), dur); drone(key + chord[0], dur);
  later(cycle, dur * 0.9);
}
function level(){ if (master) master.gain.setTargetAtTime(A.enabled ? vol * 0.6 : 0, ctx.currentTime, 2); }

/* opts: { mood:'joy'|'calm'|'wonder'|'tender', world:... } (the world no longer changes anything: it is all the same soft sound) */
A.start = (opts) => {
  opts = opts || {};
  try {
    if (!ctx) build();
    if (ctx.state === 'suspended') ctx.resume();
    P = { mood: MOODS[opts.mood] || MOODS.calm };
    if (!running){ running = true; chordNo = 0; cycle(); }
    level();
  } catch(e){ running = false; }
};
A.set = (opts) => { if (!running) return A.start(opts); P = { mood: MOODS[(opts || {}).mood] || P.mood }; };
A.stop = () => { running = false; timers.forEach(clearTimeout); timers = []; if (master){ try{ master.gain.setTargetAtTime(0, ctx.currentTime, 1.5); }catch(e){} } };
A.toggle = () => { A.enabled = !A.enabled; LS.set('aq_music_on', A.enabled ? '1' : '0'); if (ctx && ctx.state === 'suspended') ctx.resume(); level(); return A.enabled; };
A.volume = (d) => { vol = Math.max(0.05, Math.min(1, vol + d)); LS.set('aq_music_vol', vol); level(); return vol; };
A.isRunning = () => running;
A.level = () => { if (!an) return 0; const d = new Float32Array(an.fftSize); an.getFloatTimeDomainData(d); let s = 0; for (let i = 0; i < d.length; i++) s += d[i] * d[i]; return Math.sqrt(s / d.length); };
A.state = () => ({ running, enabled: A.enabled, vol, ctx: ctx && ctx.state });
})();
