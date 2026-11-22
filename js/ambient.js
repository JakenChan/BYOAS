/* Soft background music, made live with the Web Audio API (no sound files needed).
   A slow pad of chords, a low drone and a few gentle bell notes through a long, quiet reverb. */
(function(){
const G = globalThis.G;
const A = G.ambient = {};
let an = null, ctx = null, master = null, wet = null, delay = null, running = false, timers = [], P = null, vol = 0.5, chordNo = 0;

const LS = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };
vol = Math.max(0, Math.min(1, parseFloat(LS.get('aq_music_vol') || '0.5')));
A.enabled = LS.get('aq_music_on') !== '0';

/* moods: a key (semitones above middle C), four chords (semitone offsets from the key) and a scale for the bell notes */
const MOODS = {
  joy:    { key: 7,  chords: [[0,4,7,11],[9,12,16,19],[5,9,12,16],[7,11,14,16]], scale: [0,2,4,7,9], gap: [2.5, 6], bpm: 1.0 },
  calm:   { key: 2,  chords: [[0,7,12,16],[5,9,12,16],[-2,2,7,12],[0,7,12,14]],  scale: [0,2,4,7,9], gap: [4, 9],  bpm: 0.8 },
  wonder: { key: 5,  chords: [[0,4,7,11],[2,6,9,14],[0,4,7,11],[4,7,11,14]],     scale: [0,2,4,6,7,9,11], gap: [3, 7], bpm: 0.9 },
  tender: { key: 9,  chords: [[0,3,7,10],[-4,0,3,7],[5,8,12,15],[-2,2,5,9]],     scale: [0,3,5,7,10], gap: [3.5, 8], bpm: 0.85 }
};
/* timbres: how the bell notes sound, by kind of world */
const TIMBRES = {
  present: { type: 'triangle', decay: 3.2, oct: 0,  shimmer: 0 },
  ancient: { type: 'triangle', decay: 2.2, oct: 0,  shimmer: 0 },
  future:  { type: 'sine',     decay: 5.0, oct: 12, shimmer: 0.35 },
  dream:   { type: 'sine',     decay: 4.2, oct: 12, shimmer: 0.2 }
};
const hz = m => 440 * Math.pow(2, (m - 69) / 12);
const rnd = (a, b) => a + Math.random() * (b - a);
const later = (fn, s) => { const t = setTimeout(fn, s * 1000); timers.push(t); };

function reverb(){
  const len = Math.floor(ctx.sampleRate * 4), buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++){ const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
  const cv = ctx.createConvolver(); cv.buffer = buf; return cv;
}
function build(){
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
  an = ctx.createAnalyser(); an.fftSize = 1024; master.connect(an);
  wet = ctx.createGain(); wet.gain.value = 0.9; const rv = reverb(); wet.connect(rv); rv.connect(master);
  delay = ctx.createDelay(2); delay.delayTime.value = 0.62; const fb = ctx.createGain(); fb.gain.value = 0.32; delay.connect(fb); fb.connect(delay); delay.connect(wet);
}
function pad(notes, dur){
  const t0 = ctx.currentTime; const g = ctx.createGain(); g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(0.5, t0 + dur * 0.38); g.gain.linearRampToValueAtTime(0.4, t0 + dur * 0.7); g.gain.linearRampToValueAtTime(0, t0 + dur * 1.35);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 760; lp.Q.value = 0.3;
  g.connect(lp); lp.connect(master); lp.connect(wet);
  notes.forEach((m, i) => {
    [[0, 'sine', 0.16], [6, 'triangle', 0.07], [-5, 'sine', 0.1]].forEach(([det, type, amp]) => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = hz(m); o.detune.value = det;
      const og = ctx.createGain(); og.gain.value = amp / Math.sqrt(notes.length);
      const lfo = ctx.createOscillator(); lfo.frequency.value = rnd(0.05, 0.14); const lg = ctx.createGain(); lg.gain.value = 3; lfo.connect(lg); lg.connect(o.detune);
      o.connect(og); og.connect(g); o.start(t0); lfo.start(t0); o.stop(t0 + dur * 1.4); lfo.stop(t0 + dur * 1.4);
    });
  });
}
function drone(m, dur){
  const t0 = ctx.currentTime; const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = hz(m);
  const g = ctx.createGain(); g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.1, t0 + dur * 0.4); g.gain.linearRampToValueAtTime(0, t0 + dur * 1.3);
  o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur * 1.35);
}
function bell(m, tim){
  const t0 = ctx.currentTime; const g = ctx.createGain(); const d = tim.decay;
  g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.11, t0 + 0.03); g.gain.exponentialRampToValueAtTime(0.0008, t0 + d);
  g.connect(master); g.connect(wet); g.connect(delay);
  const o = ctx.createOscillator(); o.type = tim.type; o.frequency.value = hz(m + tim.oct); o.connect(g); o.start(t0); o.stop(t0 + d + 0.1);
  if (tim.shimmer){ const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = hz(m + tim.oct + 12) * 1.002; const g2 = ctx.createGain(); g2.gain.value = tim.shimmer; o2.connect(g2); g2.connect(g); o2.start(t0); o2.stop(t0 + d + 0.1); }
}
function cycle(){
  if (!running) return;
  const M = P.mood, key = 48 + M.key;                    /* chords sit low and warm */
  const dur = 15 / M.bpm; const chord = M.chords[chordNo % M.chords.length]; chordNo++;
  pad(chord.map(c => key + 12 + c), dur); drone(key - 12 + chord[0], dur);
  later(cycle, dur * 0.82);
}
function sparkle(){
  if (!running) return;
  const M = P.mood, key = 60 + M.key; const n = M.scale[Math.floor(Math.random() * M.scale.length)];
  bell(key + 12 + n + (Math.random() < 0.3 ? 12 : 0), P.tim);
  later(sparkle, rnd(M.gap[0], M.gap[1]));
}
function level(){ if (master) master.gain.setTargetAtTime(A.enabled ? vol * 0.55 : 0, ctx.currentTime, 1.5); }

/* opts: { mood:'joy'|'calm'|'wonder'|'tender', world:'present'|'ancient'|'future'|'dream' } */
A.start = (opts) => {
  opts = opts || {};
  try {
    if (!ctx) build();
    if (ctx.state === 'suspended') ctx.resume();
    P = { mood: MOODS[opts.mood] || MOODS.calm, tim: TIMBRES[opts.world] || TIMBRES.dream };
    if (!running){ running = true; chordNo = 0; cycle(); later(sparkle, 3); }
    level();
  } catch(e){ running = false; }
};
A.set = (opts) => { if (!running) return A.start(opts); P = { mood: MOODS[(opts||{}).mood] || P.mood, tim: TIMBRES[(opts||{}).world] || P.tim }; };
A.stop = () => { running = false; timers.forEach(clearTimeout); timers = []; if (master){ try{ master.gain.setTargetAtTime(0, ctx.currentTime, 0.8); }catch(e){} } };
A.toggle = () => { A.enabled = !A.enabled; LS.set('aq_music_on', A.enabled ? '1' : '0'); if (ctx && ctx.state === 'suspended') ctx.resume(); level(); return A.enabled; };
A.volume = (d) => { vol = Math.max(0.05, Math.min(1, vol + d)); LS.set('aq_music_vol', vol); level(); return vol; };
A.isRunning = () => running;
A.level = () => { if (!an) return 0; const d = new Float32Array(an.fftSize); an.getFloatTimeDomainData(d); let s = 0; for (let i = 0; i < d.length; i++) s += d[i] * d[i]; return Math.sqrt(s / d.length); };
A.state = () => ({ running, enabled: A.enabled, vol, ctx: ctx && ctx.state });
})();
