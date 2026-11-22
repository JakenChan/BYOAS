/* ============================================================
   THE ASHEN QUEEN — game engine (no DOM access in this file)
   ============================================================ */
(function (root) {
'use strict';
const G = root.G = root.G || {};
Object.assign(G, { scenes:{}, items:{}, skills:{}, classes:{}, origins:{}, allies:{}, regions:{}, arch:{}, foes:{},
  chapters:{}, chapterOrder:[], deeds:{}, perks:{}, stories:{}, TARGET:500 });
const STATS = ['STR','DEX','CON','INT','WIS','CHA']; G.STATS = STATS;
const mod = v => Math.floor((v - 10) / 2); G.mod = mod;
const clamp = (v,a,b) => Math.max(a, Math.min(b, v)); G.clamp = clamp;

/* ---------------- RNG ---------------- */
function rnd(S){ S.rs=(S.rs+0x6D2B79F5)|0; let t=S.rs; t=Math.imul(t^(t>>>15),t|1); t^=t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; }
const ri = (S,n) => Math.floor(rnd(S)*n);
const d  = (S,n) => ri(S,n)+1;
function lr(seed){ let s=seed|0; return function(){ s=(s+0x6D2B79F5)|0; let t=s; t=Math.imul(t^(t>>>15),t|1); t^=t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; }; }
function hash(str){ let h=2166136261; for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619);} return h>>>0; }
G.rnd=rnd; G.ri=ri; G.d=d; G.lr=lr; G.hash=hash;
const pick = (S,arr) => arr[ri(S,arr.length)];
G.pickIdx = function(S, key, len){ // choose an unseen index of a pool
  const seen = S.seen[key] || (S.seen[key] = []);
  if (seen.length >= len) seen.length = 0;
  let i, g=0; do { i = ri(S,len); g++; } while (seen.includes(i) && g<60);
  seen.push(i); return i;
};

/* ---------------- registration helpers ---------------- */
G.sc = (id, art, text, opts, x) => { G.scenes[id] = Object.assign({ id, art, text, opts: opts||[] }, x||{}); };
G.item = (id,n,icon,type,dsc,x) => { G.items[id] = Object.assign({ id,n,icon,type,d:dsc,v:10 }, x||{}); };
G.skill = (id,n,icon,kind,dsc,x) => { G.skills[id] = Object.assign({ id,n,icon,kind,d:dsc }, x||{}); };
G.chapter = (id, def) => { const st = (def && def.story) || 'ashen'; G.chapters[id] = Object.assign({ id, story:st }, def);
  const SD = (G.stories[st] = G.stories[st] || { id:st }); (SD.chapters = SD.chapters || []).push(id); if (st==='ashen') G.chapterOrder.push(id); };
G.story = (id, def) => { G.stories[id] = Object.assign(G.stories[id] || { id }, def); };
G.target = S => (G.stories[(S && S.story) || 'ashen'] || {}).target || G.TARGET;
G.curStory = 'ashen';
G.deed = (flag, text) => { G.deeds[flag] = text; };

/* tag -> skills that grant +2 each (max +4) */
G.TAGSK = { fight:['swordplay','brawling'], shoot:['archery'], sneak:['stealth','shadowmeld'], lock:['lockpick'],
  steal:['pickpocket','stealth'], persuade:['persuasion','music','charm'], deceive:['deception','charm'],
  intimidate:['intimidate'], perform:['music'], climb:['athletics'], swim:['athletics'], survive:['survival'],
  nature:['beastlore','herbalism','survival'], tame:['beastlore','music'], lore:['lore','detect'], craft:['alchemy','smithing'],
  heal:['herbalism','mending'], fire:['firebolt'], frost:['frost'], bolt:['lightning'], holy:['bless','mending','smite'],
  magic:['lore','ward','dispel'], ward:['ward','dispel'], endure:['athletics','shield'], dodge:['stealth','athletics'],
  resist:['lore','ward','bless'], spirit:['spiritspeak','bless'], ride:['riding','beastlore'], luck:[] };

/* ---------------- formatting ---------------- */
function allyName(S){ const a=S.allies.find(x=>G.allies[x]&&G.allies[x].person!==false) || S.allies[0]; return a? G.allies[a].n.split(' ')[0] : 'your companion'; }
function fmt(S, s){
  if (typeof s === 'function') s = s(S);
  if (!s) return '';
  s = s.replace(/\{\?([^|}]+)\|([^|}]*)(?:\|([^}]*))?\}/g, (m,c,a,b) => G.req(S,c).ok ? a : (b||''));
  return s.replace(/\{(\w+)\}/g, (m,k) => {
    switch(k){
      case 'name': return S.name;
      case 'cls': return (G.classes[S.cls]||{}).n || 'adventurer';
      case 'ally': return allyName(S);
      case 'wpn': return S.eq && S.eq.weap ? G.items[S.eq.weap].n.toLowerCase() : (S.eq&&S.eq.rng? G.items[S.eq.rng].n.toLowerCase() : 'bare hands');
      case 'mentor': return (G.classes[S.cls]||{}).mentor || 'your master';
      case 'guardian': return (G.origins[S.origin]||{}).guardian || 'your guardian';
      case 'friend': return S.flags.friend_wren ? 'Wren' : 'an old friend';
      default: return m;
    }
  });
}
G.fmt = fmt;

/* ---------------- requirements ---------------- */
function atom(S, parts){
  const k = parts[0], v = parts[1];
  switch(k){
    case 'skill': case 'spell': return S.skills.includes(v);
    case 'item': return (S.items[v]||0) > 0;
    case 'any': return v==='gimmick' ? Object.keys(S.items).some(i=>S.items[i]>0 && G.items[i].type==='gimmick') : false;
    case 'cls': return S.cls === v;
    case 'origin': return S.origin === v;
    case 'flag': return !!S.flags[v];
    case 'ally': return S.allies.includes(v);
    case 'anyally': return S.allies.length > 0;
    case 'bond': return (S.bond[v]||0) >= (+parts[2]||1);
    case 'gold': return S.gold >= +v;
    case 'mp': return S.mp >= +v;
    case 'hp': return S.hp >= +v;
    case 'hplow': return S.hp <= S.maxHp * (+v/100);
    case 'lvl': return S.lvl >= +v;
    case 'ch': return S.ch >= +v;
    case 'time': return ({dawn:0,day:1,dusk:2,night:3})[v] === S.tod;
    case 'wx': return S.wx === v;
    case 'status': return (S.status[v]||0) > 0;
    case 'insight': return (S.insight||0) > 0;
    case 'cp': return !!S.cp;
    case 'stat': return S.stats[v] >= +parts[2];
    case 'sv': return !!S.sv[v];
    case 'rnd': return false;
    default: if (STATS.includes(k)) return S.stats[k] >= +v; return false;
  }
}
function why(neg, parts){
  const k=parts[0], v=parts[1];
  if (neg) return 'Not available now';
  switch(k){
    case 'skill': case 'spell': return 'Needs skill: ' + (G.skills[v]?G.skills[v].n:v);
    case 'item': return 'Needs: ' + (G.items[v]?G.items[v].n:v);
    case 'any': return 'Needs a curious trinket';
    case 'cls': return 'Only for: ' + (G.classes[v]?G.classes[v].n:v);
    case 'origin': return 'Only for those raised as: ' + (G.origins[v]?G.origins[v].n:v);
    case 'flag': return G.deeds[v] ? 'Needs deed: ' + G.deeds[v] : 'Needs a past deed';
    case 'ally': return 'Needs ' + (G.allies[v]?G.allies[v].n:v) + ' beside you';
    case 'anyally': return 'Needs a companion';
    case 'bond': return 'Needs a stronger bond with ' + (G.allies[v]?G.allies[v].n:v);
    case 'gold': return G.curStory==='changi' ? 'Needs $' + v : 'Needs ' + v + ' gold';
    case 'mp': return 'Needs ' + v + ' ' + mpName();
    case 'lvl': return 'Needs level ' + v;
    case 'time': return 'Only at ' + v;
    default: if (STATS.includes(k)) return 'Needs ' + k + ' ' + v; return 'Requirement not met';
  }
}
G.req = function(S, r){
  if (!r) return { ok:true };
  if (Array.isArray(r)) r = r.join('&');
  const groups = r.split('|'), whys = [];
  for (const g of groups){
    let ok = true; const w = [];
    for (let a of g.split('&')){
      let neg = false; if (a[0]==='!'){ neg=true; a=a.slice(1); }
      const parts = a.split(':');
      let res = atom(S, parts); if (neg) res = !res;
      if (!res){ ok=false; w.push(why(neg, parts)); }
    }
    if (ok) return { ok:true };
    whys.push(w.join(' & '));
  }
  return { ok:false, why: whys.join(' — or — ') };
};

/* ---------------- state ---------------- */
G.xpNeed = L => 40 + 30*L;
G.newState = function(cfg){
  const C = G.classes[cfg.cls], O = G.origins[cfg.origin];
  const S = { v:1, name: cfg.name || 'Wanderer', cls: cfg.cls, origin: cfg.origin, stats:{}, lvl:1, xp:0, gold:0,
    skills:[], items:{}, eq:{weap:null,rng:null,arm:null}, flags:{}, allies:[], bond:{}, status:{}, day:1, tod:1, wx:'clear',
    story: cfg.story||'ashen', region:((G.stories[cfg.story||'ashen']||{}).startRegion)||'thornwick', ch:0, chi:0, chapter:null, queue:[], stack:[], cur:null, sv:{}, choices:0, steps:0, log:[], seen:{},
    rs:(cfg.seed!=null?cfg.seed:(Math.random()*4294967296)>>>0), battle:null, out:null, cp:null, dead:false, perk:0, lastArch:[], egg:0, age:8, ending:null };
  STATS.forEach((s,i)=>{ S.stats[s] = C.stats[i] + ((O.bonus||{})[s]||0); });
  S.maxHp = C.hp + mod(S.stats.CON)*2; S.hp = S.maxHp;
  S.maxMp = C.mp + Math.max(0, mod(Math.max(S.stats.INT, S.stats.WIS))); S.mp = S.maxMp;
  S.gold = O.gold || 5;
  [C.sig].concat(cfg.skills||[]).forEach(s => { if (s && !S.skills.includes(s)) S.skills.push(s); });
  (C.kit||[]).concat(O.kit||[]).forEach(id => addItem(S,id,1));
  (O.flags||[]).forEach(f => S.flags[f]=true);
  S.flags['origin_'+cfg.origin] = true;
  S.dmgMul = ({story:0.6, normal:1, grim:1.35})[cfg.diff||'normal']; S.diff = cfg.diff||'normal';
  G.curStory = S.story; S.chi = 0; S.queue = [];
  G.nextBeat(S);
  return S;
};

/* ---------------- items ---------------- */
function recalcEq(S){
  let w=null, r=null, a=null;
  for (const id in S.items){
    if (S.items[id] <= 0) continue; const it = G.items[id];
    if (it.type==='weap'){ if (it.rng){ if(!r || it.atk > G.items[r].atk) r=id; } else if (!w || it.atk > G.items[w].atk) w=id; }
    else if (it.type==='arm'){ if (!a || it.def > G.items[a].def) a=id; }
  }
  S.eq = { weap:w, rng:r, arm:a };
}
function addItem(S,id,q,R){
  q = q||1; if (!G.items[id]) throw new Error('bad item id: '+id);
  S.items[id] = (S.items[id]||0) + q; if (R) R.tags.push({k:'item', v:q, id});
  recalcEq(S);
  if (id==='goose_egg' && !S.egg) S.egg = S.steps + 18;
}
function delItem(S,id,q,R){
  q = q||1; if (!(S.items[id]>0)) return;
  S.items[id] = Math.max(0, S.items[id]-q); if (S.items[id]===0) delete S.items[id];
  if (R) R.tags.push({k:'item', v:-q, id}); recalcEq(S);
}
G.addItem=addItem; G.delItem=delItem;
const defense = S => (S.eq.arm ? G.items[S.eq.arm].def : 0) + (S.skills.includes('shield')?1:0) + (S.items.mirror_shield>0?2:0);

/* ---------------- bonuses & checks ---------------- */
function envMod(S, tag){
  let m = 0; const wx=S.wx, t=S.tod;
  if (tag==='sneak'||tag==='steal'){ if(t===3) m+=2; if(['fog','storm','sandstorm','ashfall'].includes(wx)) m+=1; if(t===1&&wx==='clear') m-=1; }
  if (tag==='shoot'){ if(wx==='storm'||wx==='sandstorm') m-=3; if(wx==='fog'||wx==='wind') m-=2; if(wx==='snow') m-=1; }
  if (tag==='fire'){ if(wx==='rain'||wx==='storm') m-=2; if(wx==='snow') m-=1; if(wx==='heat') m+=1; }
  if (tag==='frost'){ if(wx==='snow') m+=2; if(wx==='heat') m-=2; }
  if (tag==='bolt'){ if(wx==='storm') m+=2; }
  if (tag==='survive'||tag==='endure'){ if(['storm','heat','sandstorm','snow'].includes(wx)) m-=1; }
  if (tag==='perform'||tag==='persuade'){ if(wx==='storm') m-=1; }
  return m;
}
function bonusFor(S, tag){
  let b = 0;
  const sk = (G.TAGSK[tag]||[]).filter(s=>S.skills.includes(s)).length; b += Math.min(sk,2)*2;
  if (tag==='fight' && S.eq.weap) b += G.items[S.eq.weap].atk;
  if (tag==='shoot'){ if (S.eq.rng) b += G.items[S.eq.rng].atk; else b -= 3; }
  for (const id in S.items){
    if (!(S.items[id]>0)) continue; const it=G.items[id]; if (!it.b) continue;
    if (it.type==='weap' && id!==S.eq.weap && id!==S.eq.rng) continue;
    if (it.type==='arm' && id!==S.eq.arm) continue;
    b += (it.b[tag]||0) + (it.b.all||0);
  }
  let ab = 0; for (const a of S.allies){ const A=G.allies[a]; if (A&&A.b) ab += (A.b[tag]||0); } b += Math.min(ab,5);
  b += (S.status.bless?2:0) - (S.status.curse?2:0);
  b += envMod(S,tag) + Math.floor(S.lvl/3);
  return clamp(b,-6,18);
}
G.bonusFor = bonusFor;
const dcAdj = (S,dc) => dc + Math.floor(S.ch*0.9);
function check(S, chk){
  const dc = dcAdj(S,chk.dc), r = d(S,20), m = mod(S.stats[chk.stat]), b = bonusFor(S,chk.tag), total = r+m+b;
  return { stat:chk.stat, sv:S.stats[chk.stat], tag:chk.tag, dc, r, m, b, total, ok: r===20 || (r!==1 && total>=dc), nat: r===20?20:(r===1?1:0) };
}
function chance(S, chk){ const need = dcAdj(S,chk.dc) - mod(S.stats[chk.stat]) - bonusFor(S,chk.tag); return clamp((21-need)/20, .05, .95); }
const parseChk = c => { const p=c.split(' '); return { stat:p[0], dc:+p[1], tag:p[2]||'luck' }; };

/* ---------------- amounts ---------------- */
function amt(S, kind, v){
  if (/^\d+$/.test(v)) return +v;
  const c = S.ch, r = rnd(S);
  switch(kind){
    case 'hpl': { const b = ({s:[2,4], m:[6,11], l:[12,20]})[v]; return Math.round((b[0] + r*(b[1]-b[0])) * (1 + 0.34*c)); }
    case 'hpg': return Math.round(({s:5,m:12,l:25})[v] * (1+0.1*c));
    case 'mp':  return ({s:3,m:8,l:16})[v];
    case 'gold':return Math.round(({s:6,m:18,l:45})[v] * (1+0.3*c) * (0.7+0.6*r));
    case 'xp':  return Math.round(({s:4,m:8,l:16})[v] * (1+0.1*c) * (((G.stories[S.story||'ashen']||{}).xpScale)||1));
  }
  return 0;
}
function sizeOf(v){ return /^\d+$/.test(v) ? +v : ({s:3,m:7,l:13})[v]; }

/* ---------------- applying effects ---------------- */
function hurt(S, n, R, o){
  o = o||{}; n = Math.round(n * (S.dmgMul||1));
  if (!o.ignore){ n = Math.max(Math.ceil(n/2), n - defense(S)); }
  n = Math.max(1,n);
  S.hp -= n; R.tags.push({k:'hp', v:-n});
}
function heal(S, n, R){
  const g = Math.min(n, S.maxHp - S.hp); S.hp += g; if (g>0) R.tags.push({k:'hp', v:g});
}
function gainXp(S, n, R){
  S.xp += n; R.tags.push({k:'xp', v:n});
  while (S.lvl < 20 && S.xp >= G.xpNeed(S.lvl)){
    S.xp -= G.xpNeed(S.lvl); S.lvl++;
    const C = G.classes[S.cls];
    const dh = Math.max(2, C.hpl + mod(S.stats.CON)), dm = Math.max(1, C.mpl + Math.max(0, Math.floor(mod(Math.max(S.stats.INT,S.stats.WIS))/2)));
    S.maxHp += dh; S.hp = Math.min(S.maxHp, S.hp + dh + 4); S.maxMp += dm; S.mp = Math.min(S.maxMp, S.mp + dm + 2);
    R.tags.push({k:'lvl', v:S.lvl}); if (S.lvl%2===0) S.perk++;
  }
  if (S.lvl >= 20) S.xp = 0;
}
function learn(S, id, R){ if (!G.skills[id]) throw new Error('bad skill '+id); if (!S.skills.includes(id)){ S.skills.push(id); R.tags.push({k:'skill', id}); } }
G.learn = learn;

/* loot tables are built lazily from item definitions */
function lootPool(kind, S){
  const ch = S.ch, out = [];
  for (const id in G.items){
    const it = G.items[id]; if (!it.loot || it.loot!==kind) continue;
    if (kind==='gear'){ if ((S.items[id]||0)>0) continue; const t=it.t||1; if (t > 1 + ch*0.7 || t < ch*0.25-0.5) continue; }
    if ((kind==='trink'||kind==='gimmick'||kind==='scroll') && (S.items[id]||0)>0) continue;
    if (kind==='scroll' && it.use && /skill:(\w+)/.test(it.use) && S.skills.includes(/skill:(\w+)/.exec(it.use)[1])) continue;
    const w = it.w||1; for (let i=0;i<w;i++) out.push(id);
  }
  return out;
}
function rollLoot(S, kind, R){
  if (!kind){ const r=rnd(S); kind = r<.46?'cons': r<.62?'gear': r<.74?'trink': r<.90?'gimmick': 'scroll'; }
  const pool = lootPool(kind,S);
  if (!pool.length){ const g=amt(S,'gold','m'); S.gold+=g; R.tags.push({k:'gold',v:g}); return; }
  addItem(S, pool[ri(S,pool.length)], 1, R);
}

function startBattle(S, id, R){
  const f = G.foes[id]; if (!f) throw new Error('bad foe '+id);
  const lv = f.lv, boss = !!f.boss;
  const hp = f.hp || Math.round((14 + lv*7.5) * (boss?1.7:1));
  S.battle = { id, hp, max:hp, ac: f.ac || (10 + Math.floor(lv/2) + (boss?1:0)), dmg: f.dmg || Math.round(4 + lv*1.7),
    lv, round:0, stun:0, slow:0, ward:f.ward||0, cool:0, def:false, silence:0, wardUp:0, phase:0, flags:{} };
  R.battle = true;
}

const GEN_DIE = [
  'Your strength gives out. The world narrows to a pinprick of light, and then to nothing.',
  'You fall, and the ground is cold and kind. Somewhere, far away, someone says your name.',
  'The last thing you feel is the weight of your own hands going still.',
  'Darkness folds over you like a cloak, gently, and refuses to lift.'
];
const GEN_DIE_CG = ['Everything goes soft and quiet, like falling asleep on the bus ride home. Your adventure ends here.','The lights flicker out one by one, and you feel very, very sleepy. This is where your story ends — for now.','A gentle mist wraps around you like a blanket, and the world fades to a hush. Your journey ends here.'];
function mpName(S){ const st = G.stories[(S && S.story) || G.curStory || 'ashen'] || {}; return (st.labels && st.labels.mp) || 'MP'; }
G.deathLine = S => { const st = G.stories[S.story||'ashen']||{}; const L = st.deathLines || (S.story==='changi' ? GEN_DIE_CG : GEN_DIE); return L[ri(S, L.length)]; };

function applyFx(S, fx, R, o){
  o = o||{}; if (!fx) return;
  for (const tok of fx.split(/\s+/)){
    if (!tok) continue; let m;
    if ((m = /^hp(!?)([+-])(\d+|[sml])$/.exec(tok))){
      const n = amt(S, m[2]==='-'?'hpl':'hpg', m[3]);
      if (m[2]==='-') hurt(S, n, R, {ignore: !!m[1]}); else heal(S, n, R);
    }
    else if ((m = /^mp([+-])(\d+|[sml])$/.exec(tok))){
      const n = amt(S,'mp',m[2]); if (m[1]==='+'){ const g=Math.min(n,S.maxMp-S.mp); S.mp+=g; if(g) R.tags.push({k:'mp',v:g}); } else { const l=Math.min(n,S.mp); S.mp-=l; if(l) R.tags.push({k:'mp',v:-l}); }
    }
    else if ((m = /^gold([+-])(\d+|[sml])$/.exec(tok))){
      let n = amt(S,'gold',m[2]); if (m[1]==='-'){ n=Math.min(n,S.gold); S.gold-=n; n=-n; } else S.gold+=n; if (n) R.tags.push({k:'gold',v:n});
    }
    else if ((m = /^xp\+(\d+|[sml])$/.exec(tok))) gainXp(S, amt(S,'xp',m[1]), R);
    else if ((m = /^(STR|DEX|CON|INT|WIS|CHA)([+-]\d+)$/.exec(tok))){ S.stats[m[1]] += +m[2]; R.tags.push({k:'stat', id:m[1], v:+m[2]}); if (m[1]==='CON'&&+m[2]>0){S.maxHp+=2;S.hp+=2;} }
    else if ((m = /^maxhp\+(\d+)$/.exec(tok))){ S.maxHp+=+m[1]; S.hp+=+m[1]; R.tags.push({k:'note',t:'+'+m[1]+' max HP'}); }
    else if ((m = /^maxmp\+(\d+)$/.exec(tok))){ S.maxMp+=+m[1]; S.mp+=+m[1]; R.tags.push({k:'note',t:'+'+m[1]+' max MP'}); }
    else if (tok[0]==='+' && tok.length>1){ const mm=/^\+([a-z0-9_]+)(?:\*(\d+))?$/.exec(tok); if(!mm) throw new Error('bad fx '+tok); addItem(S,mm[1],+(mm[2]||1),R); }
    else if (tok[0]==='-' && tok.length>1){ const mm=/^-([a-z0-9_]+)(?:\*(\d+))?$/.exec(tok); if(!mm) throw new Error('bad fx '+tok); delItem(S,mm[1],+(mm[2]||1),R); }
    else if (tok.startsWith('skill:')) learn(S, tok.slice(6), R);
    else if (tok.startsWith('flag:')) { S.flags[tok.slice(5)] = true; }
    else if (tok.startsWith('unflag:')) { delete S.flags[tok.slice(7)]; }
    else if (tok.startsWith('ally:')) { const a=tok.slice(5); if(!G.allies[a]) throw new Error('bad ally '+a); if(!S.allies.includes(a)){ S.allies.push(a); R.tags.push({k:'ally',id:a,v:1}); } }
    else if (tok.startsWith('drop:')) { const a=tok.slice(5); const i=S.allies.indexOf(a); if(i>=0){ S.allies.splice(i,1); R.tags.push({k:'ally',id:a,v:-1}); } }
    else if (tok.startsWith('bond:')) { const a=tok.slice(5); S.bond[a]=(S.bond[a]||0)+1; R.tags.push({k:'bond',id:a}); }
    else if ((m = /^st:(poison|bless|curse)(\d+)$/.exec(tok))){ S.status[m[1]] = Math.max(S.status[m[1]]||0, +m[2]); R.tags.push({k:'status',id:m[1]}); }
    else if (tok==='cure'){ if (S.status.poison||S.status.curse){ delete S.status.poison; delete S.status.curse; R.tags.push({k:'note',t:'Afflictions cured'}); } }
    else if (tok.startsWith('wx:')) S.wx = tok.slice(3);
    else if (tok.startsWith('tod:')) S.tod = ({dawn:0,day:1,dusk:2,night:3})[tok.slice(4)];
    else if (tok.startsWith('loot')) rollLoot(S, tok.length>5 ? tok.slice(5) : null, R);
    else if (tok==='gimmick') useGimmick(S,R);
    else if (tok==='die') R.die = true;
    else if (tok.startsWith('>')) R.next = tok.slice(1);
    else if (tok.startsWith('battle:')) startBattle(S, tok.slice(7), R);
    else if (tok==='stay') R.stay = true;
    else if (tok==='stayc'){ R.stay = true; R.countStay = true; }
    else if (tok==='heal'){ heal(S, S.maxHp - S.hp, R); }
    else if (tok==='mana'){ const g=S.maxMp-S.mp; S.mp=S.maxMp; if(g) R.tags.push({k:'mp',v:g}); }
    else if (tok==='rest' || tok==='rest!') restParty(S, R, tok==='rest!');
    else if (tok.startsWith('sv:')) { (S.sv.bought = S.sv.bought||[]).push(tok.slice(3)); }
    else if (tok.startsWith('svflag:')) { S.sv[tok.slice(7)] = true; }
    else if (tok==='sacrifice'){ const order=['grum','garrick','osric','mira','aldric','tamsin','ysolde']; const id=order.find(a=>S.allies.includes(a)); if (id){ S.allies.splice(S.allies.indexOf(id),1); S.flags['sacrificed_'+id]=true; R.tags.push({k:'ally',id,v:-1}); R.text += ' '+G.allies[id].n+' steps forward, shoulders the beam, and holds it until the last of you is through. The slab comes down. There is no sound after that, for a very long time.'; } else { S.hp=Math.max(1,S.hp-Math.round(S.maxHp*.25)); R.text += ' You hold on yourself, and barely live.'; } }
    else if (tok.startsWith('goto:')) gotoChapter(S, tok.slice(5));
    else if (tok==='perk') S.perk++;
    else if (tok.startsWith('age:')) S.age = +tok.slice(4);
    else if (/^day\+\d+$/.test(tok)) S.day += +tok.slice(4);
    else if (tok.startsWith('end:')) R.ending = tok.slice(4);
    else if ((m = /^r(\d+):(.+)$/.exec(tok))){ if (rnd(S)*100 < +m[1]) applyFx(S, m[2].split('&').join(' '), R, o); }
    else if ((m = /^insight:(\d+)$/.exec(tok))){ S.insight = Math.max(S.insight||0, +m[1]); R.tags.push({k:'note',t:'💡 Insight for '+m[1]+' choices'}); }
    else if (tok==='loseitem'){
      const ids = Object.keys(S.items).filter(i => S.items[i]>0 && G.items[i] && !G.items[i].relic && G.items[i].type!=='relic');
      if (ids.length){ const id = ids[Math.floor(rnd(S)*ids.length)]; delItem(S, id, 1, R); R.text += ' (You lost your ' + G.items[id].n + '.)'; } else R.text += ' (Luckily, there was nothing they could take.)';
    }
    else if (tok==='forget'){
      const C = G.classes[S.cls]; const ids = S.skills.filter(k => k !== (C && C.sig));
      if (ids.length){ const id = ids[Math.floor(rnd(S)*ids.length)]; S.skills.splice(S.skills.indexOf(id), 1); R.tags.push({k:'note',t:'Forgot: '+G.skills[id].n}); R.text += ' (You can no longer do what ' + G.skills[id].n + ' let you do.)'; }
    }
    else if (tok==='quiz+'){
      S.qs = (S.qs||0) + 1; let note = '';
      if (S.qs % 2 === 0){ S.insight = Math.max(S.insight||0, 3); R.tags.push({k:'note',t:'💡 Insight for 3 choices'}); note = ' Your mind is sharp now: a streak of ' + S.qs + ' correct answers brings Insight for your next few choices.'; }
      else if (rnd(S) < 0.35){ const g = S.story==='ashen' ? amt(S,'gold','s') : 3; S.gold += g; R.tags.push({k:'gold',v:g}); note = ' A small reward for a sharp mind.'; }
      R.text += note;
    }
    else if (tok==='quiz-'){
      S.qs = 0;
      if (rnd(S) < 0.5){ const pen = ['hp-2','mp-3', S.story==='ashen' ? 'gold-s' : 'gold-3'][Math.floor(rnd(S)*3)]; applyFx(S, pen, R, o); R.text += ' That slip cost you.'; }
      else R.text += ' No harm done, this time.';
    }
    else throw new Error('unknown fx token: '+tok);
  }
}
G.applyFx = applyFx;

function restParty(S, R, full){
  const f = full ? 1 : 0.5; let bonus = 0;
  for (const a of S.allies){ if (G.allies[a] && G.allies[a].heal) bonus += G.allies[a].heal; }
  heal(S, Math.round(S.maxHp*f)+bonus, R);
  const g = Math.min(S.maxMp - S.mp, Math.round(S.maxMp*f)); S.mp += g; if (g) R.tags.push({k:'mp', v:g});
  delete S.status.poison; delete S.status.curse;
  S.tod = 0; S.day++;
  if (!full && rnd(S) < 0.28) S.stack.push('~enc:night');
}

function useGimmick(S, R){
  const ids = Object.keys(S.items).filter(i=>S.items[i]>0 && G.items[i].type==='gimmick');
  if (!ids.length){ R.text += ' (You fumble in your pack, but find nothing curious.)'; return; }
  const id = ids[ri(S,ids.length)], it = G.items[id];
  const g = it.g[ri(S, it.g.length)];
  R.text = (R.text ? R.text+' ' : '') + 'You brandish the ' + it.n + '. ' + g[0];
  R.tags.push({k:'note', t: it.icon+' '+it.n});
  applyFx(S, g[1], R, {});
}

/* ---------------- death / mercy ---------------- */
function checkDeath(S, R, mercy){
  if (S.hp > 0) return;
  if (mercy){ S.hp = 1; return; }
  if (S.items.phoenix_feather > 0){
    delItem(S,'phoenix_feather',1,R); S.hp = Math.ceil(S.maxHp*0.6); S.mp = S.maxMp; S.revived = true;
    R.tags.push({k:'note', t:'🔥 The Phoenix Feather burns away — you rise again!'});
    R.text += ' The Phoenix Feather flares white-gold and burns to nothing — and you breathe again.';
    return;
  }
  R.die = true; R.hpDeath = true;
}
const isSafe = raw => {
  if (raw.safe === true) return true;
  if (raw.r || raw.mp || raw.act) return false;
  let worst = 0, die = false;
  for (const br of [raw.y, raw.n, raw.risk ? ['', raw.risk[2]] : null]){
    if (!br) continue; const fx = Array.isArray(br) ? br[1] : '';
    for (const tok of (fx||'').split(/\s+/)){
      if (tok==='die') die = true;
      const m = /^hp(!?)-(\d+|[sml])$/.exec(tok); if (m) worst = Math.max(worst, sizeOf(m[2]));
      if (tok.startsWith('battle:')) die = true;
    }
  }
  return !die && worst <= 3;
};
G.isSafe = isSafe;

/* ---------------- time / weather / status ---------------- */
function weatherFor(S){
  const R = G.regions[S.region]; const wts = (R && R.wx) || { clear:5, cloudy:3, rain:2, fog:1 };
  let tot = 0; for (const k in wts) tot += wts[k]; let r = rnd(S)*tot;
  for (const k in wts){ r -= wts[k]; if (r<=0) return k; } return 'clear';
}
function advance(S, R){
  S.steps++;
  const fixedTime = (G.stories[S.story||'ashen']||{}).fixedTime;
  if (!fixedTime){
    if (S.steps % 2 === 0){ S.tod = (S.tod+1)%4; if (S.tod===0) S.day++; }
    if (rnd(S) < 0.3) S.wx = weatherFor(S);
  }
  if (S.status.poison > 0){ S.status.poison--; const n = 2 + Math.floor(S.ch/2); S.hp = Math.max(1, S.hp-n); R.tags.push({k:'hp',v:-n,why:'poison'}); }
  for (const k of ['bless','curse']) if (S.status[k] > 0) S.status[k]--;
  if (S.egg && S.steps >= S.egg && S.items.goose_egg){
    delItem(S,'goose_egg',1,R); S.egg = 0; if(!S.allies.includes('goose')){ S.allies.push('goose'); R.tags.push({k:'ally',id:'goose',v:1}); }
    R.text += ' Something cracks in your pack. A very small, very furious goose climbs out, takes one look at you, and decides you are its flock.';
  }
}

/* ---------------- option runtime ---------------- */
function runBranch(S, br, R, mercy){
  if (!br) return; if (typeof br === 'string') br = [br, ''];
  R.text += (R.text ? ' ' : '') + fmt(S, br[0]);
  applyFx(S, br[1], R, {});
}
function runOpt(S, o, R){
  const raw = o.raw;
  if (raw.act){ R.act = raw.act; return; }
  if (o.mp){ S.mp -= o.mp; R.tags.push({k:'mp', v:-o.mp}); }
  if (raw.c){
    const ck = check(S, parseChk(raw.c)); R.roll = ck; R.ok = ck.ok;
    if (ck.ok){ runBranch(S, raw.y, R); if (ck.nat===20){ R.text += ' ★ A critical triumph!'; applyFx(S,'xp+s',R,{}); } }
    else { runBranch(S, raw.n || ['Things go badly.','hp-s'], R); if (ck.nat===1){ R.text += ' ☠ A disastrous fumble!'; if(!o.safe) applyFx(S,'hp-1',R,{}); } }
  } else runBranch(S, raw.y, R);
  if (raw.risk && !R.die && !S.battle){ const rk = raw.risk; if (rnd(S)*100 < rk[0]){ R.text += ' ' + fmt(S, rk[1]); R.risked = true; applyFx(S, rk[2], R, {}); } }
  if (raw.f) raw.f(S, R); // optional JS hook
}
function normOpt(S, raw){
  const rq = G.req(S, raw.r); let avail = rq.ok, wh = rq.why;
  if (avail && raw.mp && S.mp < raw.mp){ avail = false; wh = 'Needs ' + raw.mp + ' ' + mpName(S); }
  const o = { raw, label: fmt(S, raw.t), avail, why: wh, hide: !!raw.hide, mp: raw.mp||0, act: raw.act, safe: isSafe(raw), chk: null, pct: null, req: raw.r };
  if (raw.c){ o.chk = parseChk(raw.c); o.pct = chance(S, o.chk); }
  return o;
}

/* ---------------- scene resolution ---------------- */
function normScene(S, def, extra){
  const opts = (def.opts||[]).map(r => normOpt(S, r));
  const text = fmt(S, def.text);
  return Object.assign({ id: def.id||def.title, kind: (extra&&extra.kind)||'static', art: def.art, title: def.title || def.id || '', text, opts,
    count: def.count !== false && !def.card && !def.end, card: !!def.card, end: !!def.end, wxline: !def.noWx && !((G.stories[S.story||'ashen']||{}).localWx && !def.wx) }, extra||{});
}
G.resolveCur = function(S){
  const c = S.cur;
  if (c.kind === 'static'){ const def = G.scenes[c.id]; if (!def) throw new Error('missing scene '+c.id); const sc = normScene(S, def); sc.title = fmt(S, def.title || (G.titles && G.titles[c.id]) || c.id.replace(/^[a-z0-9]+_/,'').replace(/_/g,' ')); return finish(S, sc); }
  if (c.kind === 'gen'){ const def = G.arch[c.a].make(S, c.p); def.id = c.a; return finish(S, normScene(S, def, {kind:'gen'})); }
  if (c.kind === 'card'){ const ch = G.chapters[c.id]; return finish(S, normScene(S, { id:'card:'+c.id, art: ch.art, title: ch.n, text: (ch.sub?'«'+ch.sub+'»\n':'')+ch.text, card:true, noWx:false,
      opts:[{ t: ch.btn || 'Continue the tale', y:['',''] }] }, {kind:'card'})); }
  if (c.kind === 'perk'){ return finish(S, normScene(S, G.perkDef(S))); }
  if (c.kind === 'battle'){ return finish(S, battleScene(S)); }
  if (c.kind === 'death'){ return { id:'death', kind:'death', art:'night|💀', title:'Your Tale Ends', text: S.deathText || 'Darkness.', opts:[
      { raw:{}, label:'Begin a new journey', avail:true, act:'new' },
      { raw:{}, label:'Return to the start of this chapter', avail:!!S.cp, why:'No checkpoint yet', act:'cp' } ], count:false, card:false, end:true, death:true }; }
  throw new Error('bad cur '+JSON.stringify(c));
};
function finish(S, sc){
  if (S.intro && (sc.kind==='static' || sc.kind==='gen') && !sc.end && G.chapters[S.intro]){ const ch = G.chapters[S.intro];
    sc.text = fmt(S, (ch.sub ? '«'+ch.sub+'»\n' : '') + ch.text) + '\n' + sc.text; sc.introTitle = ch.n; }
  if (!sc.opts.some(o=>o.avail)) sc.opts.push({ raw:{y:['','']}, label:'Press on', avail:true, safe:true, req:null });
  for (const o of sc.opts){ if (!o.hide || o.avail) continue; o.gone = true; }
  sc.opts = sc.opts.filter(o=>!o.gone);
  if (!sc.battle){ // cap visible choices at 6: drop the least essential (never the 'k' keepers)
    let av = sc.opts.filter(o=>o.avail).length;
    for (let i=sc.opts.length-1; i>=0 && av>6; i--){ const o=sc.opts[i]; if (o.avail && !(o.raw && o.raw.k) && o.raw && o.raw.r){ sc.opts.splice(i,1); av--; } }
    for (let i=sc.opts.length-1; i>=0 && av>6; i--){ const o=sc.opts[i]; if (o.avail && !(o.raw && o.raw.k)){ sc.opts.splice(i,1); av--; } }
  }
  return sc;
}

/* ---------------- encounter picking ---------------- */
function pickEnc(S, kind){
  const R = G.regions[S.region] || G.regions.thornwick; let names;
  if (kind === 'night') names = ['beast','monster','undead','omen','thief','nightwatch'].filter(n => G.arch[n] && R.enc[n]!==undefined || n==='omen'||n==='thief'||n==='nightwatch');
  else if (kind && kind!=='*' && G.arch[kind]) names = [kind];
  else { names = []; for (const n in R.enc){ if (!G.arch[n]) continue; const a=G.arch[n]; if (a.cond && !a.cond(S,R)) continue; const w = R.enc[n] * (a.wf?a.wf(S,R):1); for (let i=0;i<Math.round(w*2);i++) names.push(n); } }
  names = names.filter(n => G.arch[n]);
  if (!names.length){ const fa0 = (G.stories[S.story||'ashen']||{}).fallbackArch || 'omen'; return { kind:'gen', a:fa0, p: G.arch[fa0].pick(S,R) }; }
  for (let t=0; t<30; t++){
    const n = names[ri(S,names.length)];
    if (!kind && S.lastArch.slice(-2).includes(n) && names.length>3) continue;
    const a = G.arch[n]; if (a.cond && !a.cond(S,R) && kind!=='night' && !(kind&&kind!=='*')) continue;
    const p = a.pick(S,R); if (!p) continue;
    S.lastArch.push(n); if (S.lastArch.length>6) S.lastArch.shift();
    return { kind:'gen', a:n, p };
  }
  const fa = (G.stories[S.story||'ashen']||{}).fallbackArch || 'omen'; return { kind:'gen', a:fa, p: G.arch[fa].pick(S,R) };
}

/* ---------------- director ---------------- */
function gotoChapter(S, id){
  const list = (G.stories[S.story||'ashen']||{}).chapters || G.chapterOrder; const i = list.indexOf(id);
  if (i < 0) throw new Error('bad chapter '+id);
  S.queue = []; S.stack = []; S.chi = i + 1; S.battle = null; S.flags.early_end = S.flags.early_end || (S.choices < G.target(S));
  enterChapter(S, id);
}
function enterChapter(S, id){
  const ch = G.chapters[id]; S.chapter = id; S.ch = ch.ch; S.region = ch.region; if (ch.age) S.age = ch.age;
  const beats = typeof ch.beats === 'function' ? ch.beats(S) : ch.beats.slice();
  S.queue = ['#card:'+id].concat(beats, S.queue);
}
G.nextBeat = function(S){
  for (let guard=0; guard<400; guard++){
    let b = null;
    if (S.stack.length) b = S.stack.shift();
    else if (S.perk > 0 && !S.battle){ S.perk--; b = '~perk'; }
    else if (S.queue.length) b = S.queue.shift();
    else { const id = ((G.stories[S.story||'ashen']||{}).chapters || G.chapterOrder)[S.chi++]; if (!id) { S.cur = {kind:'static', id:'fin_end_fallback'}; S.sv={}; return; } enterChapter(S,id); continue; }
    // conditional prefix  ("req?beat")
    const q = b.indexOf('?'); if (q > 0 && !/^[~#@]/.test(b)){ if (!G.req(S, b.slice(0,q)).ok) continue; b = b.slice(q+1); }
    if (b.startsWith('~talk:')){ const pp = b.split(':'); S.cur = {kind:'gen', a:'ally_talk', p:{a:pp[1], t:+pp[2], s:S.choices+7}}; S.sv={}; return; }
    if (b[0]==='#'){ // chapter card
      const id = b.slice(6); S.intro = id; S.sv = {}; S.cur = {kind:'resume'}; S.cp = snapshot(S, true); continue;
    }
    if (b[0]==='@'){ const R={text:'',tags:[]}; applyFx(S, b.slice(1), R, {}); continue; }
    if (b==='!gate'){
      const need = G.target(S) - S.choices;
      if (need > 0){ S.queue.unshift(...Array(Math.min(need,40)).fill('~enc'), '!gate'); S.queue.unshift((G.stories[S.story||'ashen']||{}).gateCard || 'road_longer'); continue; }
      continue;
    }
    if (b==='~perk'){ S.cur = {kind:'perk'}; S.sv={}; return; }
    if (b[0]==='~'){
      const kind = b.length>4 ? b.slice(5) : null; // '~enc:xxx' / '~camp'
      if (b==='~camp'){ S.cur = { kind:'gen', a:'camp', p: G.arch.camp.pick(S, G.regions[S.region]) }; S.sv={}; return; }
      S.cur = pickEnc(S, kind); S.sv = {}; return;
    }
    if (!G.scenes[b]) throw new Error('missing scene in queue: '+b);
    S.cur = { kind:'static', id:b }; S.sv = {}; return;
  }
  throw new Error('director loop');
};

/* ---------------- player choice ---------------- */
G.choose = function(S, idx){
  const sc = G.resolveCur(S); S.intro = null;
  const av = sc.opts.filter(o=>o.avail); const o = av[idx]; if (!o) return null;
  if (o.act) return { act:o.act };
  const R = { text:'', tags:[], roll:null, ok:true };
  const hp0 = S.hp;
  if (o.run) o.run(S,R); else runOpt(S,o,R);
  if (S.battle && sc.kind!=='battle' && R.battle) {} // battle started by this option
  const mercy = o.safe && !S.battle;
  if (!S.battle || sc.kind!=='battle') checkDeath(S, R, mercy);
  let counted = sc.count && (!R.stay || R.countStay);
  if (counted) S.choices++;
  if (counted && S.insight > 0) S.insight--;
  S.out = { n: S.choices, chosen: o.label, text: R.text, tags: R.tags, roll: R.roll, ok: R.ok, lines: R.lines };
  S.log.push({ n: counted?S.choices:0, sc: sc.title, c: o.label, t: R.text.length>260?R.text.slice(0,257)+'…':R.text, tags: R.tags.slice(0,10), roll: R.roll?{r:R.roll.r,tot:R.roll.total,dc:R.roll.dc,s:R.roll.stat,ok:R.roll.ok}:null, ok:R.ok });
  if (R.die){ S.dead = true; S.deathText = (R.deathText || R.text) + (R.hpDeath ? ' ' + G.deathLine(S) : ''); S.cur = {kind:'death'}; S.battle = null; return { dead:true }; }
  if (R.ending){ S.ending = R.ending; }
  if (!R.stay && !S.battle && sc.kind!=='card'){ const R2={text:'',tags:[]}; advance(S,R2); S.out.tags = S.out.tags.concat(R2.tags); if (R2.text) S.out.text += ' ' + R2.text; if (R2.tags.length) {} }
  if (S.battle){ S.cur = {kind:'battle'}; return {}; }
  if (R.stay) return {};
  if (R.next) S.stack.unshift(R.next);
  G.nextBeat(S);
  return {};
};

/* ---------------- perk scene ---------------- */
G.perkDef = function(S){
  const C = G.classes[S.cls], r = G.lr(S.lvl*977 + G.hash(S.name));
  const pri = C.pri.slice(); const a = pri[Math.floor(r()*3)], rest2 = pri.filter(x=>x!==a), b = rest2[Math.floor(r()*rest2.length)];
  const learnable = Object.keys(G.skills).filter(k => !S.skills.includes(k) && !G.skills[k].noLearn && (G.skills[k].story||'ashen')===(S.story||'ashen'));
  const prefer = learnable.filter(k => (C.learn||[]).includes(k));
  const pool = prefer.length >= 2 ? prefer : learnable;
  const s1 = pool[Math.floor(r()*pool.length)]; const rest = pool.filter(k=>k!==s1); const s2 = rest[Math.floor(r()*rest.length)];
  const opts = [
    { t:`Hone your body and mind: +1 ${a}`, y:[`You drill until it becomes instinct. Your ${a} grows.`, `${a}+1`] },
    { t:`Focus on your ${b}: +1 ${b}`, y:[`Long nights of effort pay off. Your ${b} sharpens.`, `${b}+1`] } ];
  if (s1) opts.push({ t:`Study a new skill: ${G.skills[s1].icon} ${G.skills[s1].n}`, y:[`A teacher, a book, a flash of insight — you learn ${G.skills[s1].n}. ${G.skills[s1].d}`, `skill:${s1}`] });
  if (s2) opts.push({ t:`Study a new skill: ${G.skills[s2].icon} ${G.skills[s2].n}`, y:[`It takes weeks of stubborn practice, but you learn ${G.skills[s2].n}. ${G.skills[s2].d}`, `skill:${s2}`] });
  opts.push({ t:'Rest on your laurels: +6 max HP and +3 max MP', y:['You eat well, sleep deeply, and feel your reserves swell.', 'maxhp+6 maxmp+3'] });
  const kid = S.story==='changi';
  return { id:'perk', art:(kid?'park|⭐':'camp|⭐'), title:`Level ${S.lvl}: Growth`, text: kid ? `You feel a little braver, a little wiser, a little taller. You are now level ${S.lvl}. What would you like to get better at?` : `You have grown stronger. Something in you has settled into a new shape — you are now level ${S.lvl}. A moment of quiet lets you decide who you are becoming.`, opts, noWx:true };
};

/* ---------------- BATTLE ---------------- */
const ATTACK_SPELLS = ['lightning','firebolt','smite','frost'];
function bar(a,b,n){ n=n||12; const f=Math.max(0,Math.round(a/b*n)); return '▰'.repeat(f)+'▱'.repeat(n-f); }
function foeName(f){ return f.n; }
function battleScene(S){
  const B = S.battle, f = G.foes[B.id];
  let t = '';
  if (B.round===0) t += fmt(S, f.intro);
  else t += `The fight with ${f.n} rages on. What will you do?`;
  const notes = [];
  if (B.ward>0) notes.push('🛡 Ashen Ward: '+B.ward+' — damage to it is nearly nullified until the ward breaks');
  if (B.stun>0) notes.push('💫 stunned'); if (B.slow>0) notes.push('❄ slowed'); if (B.silence>0) notes.push('🤫 silenced');
  const hud = { name:f.n, icon:f.icon, hp:Math.max(0,B.hp), max:B.max, ward:B.ward, notes, boss:!!f.boss, round:B.round };
  const opts = [];
  const add = (label, o) => opts.push(Object.assign({ raw:{}, label, avail:true, safe:false, battle:true }, o));
  const hasSp = k => S.skills.includes(k);
  // strike
  const ftag = bonusFor(S,'shoot') > bonusFor(S,'fight') && S.eq.rng ? 'shoot' : 'fight';
  add(ftag==='shoot'?'Loose an arrow':'Strike with your '+fmt(S,'{wpn}'), { chk:{stat: ftag==='shoot'?'DEX':(mod(S.stats.STR)>=mod(S.stats.DEX)?'STR':'DEX'), dc:B.ac, tag:ftag, raw:true}, pct: clamp((21-(B.ac-bestAtkMod(S,ftag)-bonusFor(S,ftag)))/20,.05,.95), run:(S,R)=>bStrike(S,R,ftag) });
  // spells
  const spells = ATTACK_SPELLS.filter(k=>hasSp(k)).map(k=>({k, s:G.skills[k]})).sort((a,b)=>b.s.cost-a.s.cost);
  const castable = spells.filter(x=>S.mp>=x.s.cost);
  castable.slice(0,2).forEach(x => add(`Cast ${x.s.n} (−${x.s.cost} MP)`, { mp:x.s.cost, run:(S,R)=>bSpell(S,R,x.k) }));
  spells.filter(x=>S.mp<x.s.cost).slice(0, castable.length?0:1).forEach(x => opts.push({ raw:{}, label:`Cast ${x.s.n}`, avail:false, why:`Needs ${x.s.cost} MP`, battle:true }));
  // class heroic move
  const C = G.classes[S.cls];
  if (C.hero){ const h = C.hero; const ok = B.cool<=0 && S.mp>=(h.mp||0);
    add(`${h.icon} ${h.n}${h.mp?` (−${h.mp} MP)`:''}${B.cool>0?` — recovering (${B.cool})`:''}`, { avail:ok, why:B.cool>0?'Recovering':`Needs ${h.mp} MP`, mp:h.mp||0, run:(S,R)=>bHero(S,R) }); }
  // healing
  if (hasSp('mending') && S.hp < S.maxHp*0.75 && S.mp>=3) add('Cast Mending Light (−3 MP)', { mp:3, run:(S,R)=>bMend(S,R) });
  const pot = ['greater_draught','healing_draught','bandages'].find(i=>S.items[i]>0);
  if (pot && S.hp < S.maxHp*0.6) add(`Drink/use ${G.items[pot].n}`, { run:(S,R)=>bPotion(S,R,pot) });
  if (S.items.mana_tonic>0 && S.mp < S.maxMp*0.3) add('Drink a Mana Tonic', { run:(S,R)=>{ delItem(S,'mana_tonic',1,R); applyFx(S,'mp+m',R); R.lines.push('You gulp the silvery tonic; power surges back into your veins.'); } });
  // foe-specific
  if (f.x) f.x(S,B).forEach(x => { const ok = G.req(S,x.r).ok && (!x.mp || S.mp>=x.mp); if (ok || !x.hide) add(x.t + (x.mp?` (−${x.mp} MP)`:''), { avail:ok, why:G.req(S,x.r).why||('Needs '+x.mp+' MP'), mp:x.mp||0, run:(S,R)=>x.f(S,R,B,f) }); });
  add('Defend and brace', { safe:false, run:(S,R)=>bDefend(S,R) });
  if (!f.boss) add('Break away and flee', { run:(S,R)=>bFlee(S,R) });
  // trim to 6 available
  while (opts.filter(o=>o.avail).length > 6){ const i = opts.map(o=>o.label).findIndex(l=>/^Defend/.test(l)); if (i>=0 && opts.filter(o=>o.avail).length>6) opts.splice(i,1); else break; }
  while (opts.filter(o=>o.avail).length > 6) opts.splice(opts.length-1,1);
  return { id:'battle:'+B.id, kind:'battle', art: f.art, title: (f.boss?'⚔ BOSS — ':'⚔ ')+f.n, text:t, opts, count:true, card:false, end:false, wxline:false, battle:true, hud };
}
function bestAtkMod(S,tag){ return tag==='shoot' ? mod(S.stats.DEX) : Math.max(mod(S.stats.STR), mod(S.stats.DEX)); }
function weaponAtk(S,tag){ if (tag==='shoot') return S.eq.rng ? G.items[S.eq.rng].atk : 0; return S.eq.weap ? G.items[S.eq.weap].atk : 0; }
function hurtFoe(S, R, n, label, o){
  o = o||{}; const B = S.battle, f = G.foes[B.id];
  n = Math.max(1, Math.round(n));
  if (f.weak && o.el && (f.weak===o.el || (Array.isArray(f.weak)&&f.weak.includes(o.el)))){ n = Math.round(n*1.5); R.lines.push(`It recoils — it is vulnerable to that!`); }
  if (f.resist && o.el && (f.resist===o.el || (Array.isArray(f.resist)&&f.resist.includes(o.el)))){ n = Math.max(1, Math.round(n*0.4)); R.lines.push(`It shrugs the ${o.el} off.`); }
  if (B.ward > 0 && !o.pierce){
    const absorbed = Math.max(1, Math.round(n*0.15)); B.ward -= absorbed; n = Math.max(1, Math.round(n*0.1));
    if (B.ward <= 0){ B.ward = 0; R.lines.push('The Ashen Ward cracks, flares, and SHATTERS in a spray of black light!'); R.tags.push({k:'note',t:'The Ward is broken!'}); }
  }
  B.hp -= n; R.lines.push(`${label} for ${n} damage.`); R.tags.push({k:'foe', v:-n});
}
function bStrike(S,R,tag){
  const B=S.battle, f=G.foes[B.id]; const r=d(S,20); const total = r + bestAtkMod(S,tag) + bonusFor(S,tag);
  R.roll = { stat: tag==='shoot'?'DEX':'ATK', tag, dc:B.ac, r, m:bestAtkMod(S,tag), b:bonusFor(S,tag), total, ok: r===20||(r!==1&&total>=B.ac), nat:r===20?20:r===1?1:0 };
  R.ok = R.roll.ok;
  if (R.roll.ok){ let dmg = d(S,6) + weaponAtk(S,tag) + Math.max(0,bestAtkMod(S,tag)) + Math.floor(S.lvl/2);
    if (r===20) { dmg*=2; R.lines.push('A CRITICAL blow!'); }
    hurtFoe(S,R,dmg, tag==='shoot'?'Your arrow bites home':'You strike'); }
  else R.lines.push(r===1?'You stumble badly — a total miss!':'Your attack glances away.');
}
function bSpell(S,R,k){
  const B=S.battle, f=G.foes[B.id]; const sp=G.skills[k]; const stat = k==='smite'?'WIS':'INT'; const tag = k==='firebolt'?'fire':k==='frost'?'frost':k==='lightning'?'bolt':'holy';
  const r=d(S,20); const total = r + mod(S.stats[stat]) + bonusFor(S,tag) + 3;
  R.roll = { stat, tag, dc:B.ac, r, m:mod(S.stats[stat]), b:bonusFor(S,tag)+3, total, ok: r===20||(r!==1&&total>=B.ac), nat:r===20?20:r===1?1:0 }; R.ok=R.roll.ok;
  const verb = { firebolt:'A lance of fire leaps from your hand', frost:'A shard of killing frost streaks out', lightning:'Lightning cracks from your fingertips', smite:'Radiant light descends like a hammer' }[k];
  if (R.roll.ok){ const dice = k==='lightning'?3:2; let dmg=0; for(let i=0;i<dice;i++) dmg+=d(S,6); dmg += Math.max(0,mod(S.stats[stat])) + Math.floor(S.lvl/2) + (k==='lightning'?2:0);
    if (r===20){ dmg*=2; R.lines.push('Your magic surges — CRITICAL!'); }
    const el = k==='smite'?'holy':k; hurtFoe(S,R,dmg, verb, {el});
    if (k==='frost'){ B.slow = 2; R.lines.push(`${f.n} slows, rimed in ice.`); }
    if (k==='smite' && f.undead){ hurtFoe(S,R,dmg*0.6,'The holy light sears the unliving',{el:'holy'}); }
  } else R.lines.push('Your spell fizzles, sputters, and scatters.');
}
function bHero(S,R){
  const B=S.battle, f=G.foes[B.id], h=G.classes[S.cls].hero; B.cool = 3; const r=d(S,20);
  const pw = Math.floor(S.lvl/2) + Math.max(mod(S.stats.STR),mod(S.stats.DEX),mod(S.stats.INT),mod(S.stats.WIS),0);
  switch(h.id){
    case 'power': { const t = r + bestAtkMod(S,'fight') + bonusFor(S,'fight') - 2; R.roll={stat:'STR',tag:'fight',dc:B.ac,r,total:t,m:0,b:0,ok:r===20||(r!==1&&t>=B.ac),nat:r===20?20:r===1?1:0}; R.ok=R.roll.ok;
      if (R.ok) hurtFoe(S,R, d(S,8)+d(S,8)+weaponAtk(S,'fight')*2+pw+4, 'You hammer a bone-jarring POWER STRIKE'); else R.lines.push('Your mighty swing whistles past.'); break; }
    case 'surge': { hurtFoe(S,R, d(S,10)+d(S,10)+d(S,10)+pw*2, 'Raw arcane power tears from you in a brilliant ARCANE SURGE', {el:'arcane', pierce:false}); break; }
    case 'backstab': { const t = r + mod(S.stats.DEX) + bonusFor(S,'sneak') + (B.def?0:0); const ok = r===20||(r!==1&&t+3>=B.ac); R.roll={stat:'DEX',tag:'sneak',dc:B.ac,r,total:t+3,m:0,b:0,ok,nat:0}; R.ok=ok;
      if (ok) hurtFoe(S,R, d(S,6)+d(S,6)+d(S,6)+pw+3, 'You slip behind it and drive in a BACKSTAB'); else R.lines.push('It turns just in time — your blade finds only air.'); break; }
    case 'smite': { hurtFoe(S,R, d(S,8)+d(S,8)+pw+4, 'You call down a blazing SMITE', {el:'holy'}); heal(S, 4+Math.floor(S.lvl/2), R); R.lines.push('Holy warmth knits a few of your wounds.'); break; }
    case 'aimed': { const t = r + mod(S.stats.DEX) + bonusFor(S,'shoot') + 4; R.roll={stat:'DEX',tag:'shoot',dc:B.ac,r,total:t,m:0,b:0,ok:r===20||(r!==1&&t>=B.ac),nat:0}; R.ok=R.roll.ok;
      if (R.ok) hurtFoe(S,R, d(S,8)+d(S,8)+weaponAtk(S,'shoot')*2+pw+3, 'You breathe out and loose an AIMED SHOT, true as fate'); else R.lines.push('A gust or a flinch — the shot goes wide.'); break; }
    case 'chord': { S.status.bless = Math.max(S.status.bless||0, 3); B.slow = Math.max(B.slow, 1); R.lines.push('You strike a ROUSING CHORD. Courage floods through you and the foe falters, dazzled by the sound.'); R.tags.push({k:'status',id:'bless'}); hurtFoe(S,R,pw+d(S,4),'A shock of sound crashes into it'); break; }
  }
}
function bMend(S,R){ S.mp-=3; R.tags.push({k:'mp',v:-3}); const n = 8 + Math.max(0,mod(S.stats.WIS))*2 + Math.floor(S.lvl*1.5); heal(S,n,R); R.lines.push('Soft golden light closes your wounds.'); }
function bPotion(S,R,id){ const it=G.items[id]; delItem(S,id,1,R); applyFx(S,it.use,R,{}); R.lines.push(`You use the ${it.n} mid-fight.`); }
function bDefend(S,R){ S.battle.def = true; const g = Math.min(2, S.maxMp-S.mp); S.mp += g; if (g) R.tags.push({k:'mp',v:g}); R.lines.push('You plant your feet, guard high, and steady your breathing.'); }
function bFlee(S,R){
  const B=S.battle, f=G.foes[B.id]; const ck = check(S,{stat:'DEX', dc:11+Math.floor(B.lv/2)-S.ch*0.8|0, tag:'dodge'}); R.roll=ck; R.ok=ck.ok;
  if (ck.ok){ R.lines.push(`You break away and lose ${f.n} in the chaos.`); R.fled = true; S.battle = null; return; }
  R.lines.push(`${f.n} cuts off your retreat!`);
}
G.battleApi = { hurtFoe, heal, applyFx, delItem, bar };

function foeTurn(S,R){
  const B=S.battle, f=G.foes[B.id];
  if (B.hp<=0) return;
  B.round++;
  if (B.stun>0){ B.stun--; R.lines.push(`${f.n} reels, unable to act.`); return; }
  if (B.slow>0 && ri(S,2)===0){ B.slow--; R.lines.push(`${f.n} lurches sluggishly and loses its chance.`); return; }
  if (B.slow>0) B.slow--;
  if (B.silence>0) B.silence--;
  if (f.phase) f.phase(S,B,R);
  // specials
  if (f.sp && B.silence<=0){
    for (const sp of f.sp){
      if (B.round % sp.every === 0){
        R.lines.push(fmt(S, sp.text));
        if (sp.c && S.items[sp.c]>0 && !B.flags['no_'+sp.c]){
          R.lines.push(fmt(S, sp.ct||'Your relic turns it aside!')); if (sp.cd) hurtFoe(S,R,B.max*sp.cd,'The backlash rebounds on it',{pierce:true});
        } else {
          let dmg = Math.round(B.dmg*sp.dmg*(0.8+rnd(S)*0.4)); if (S.battleWard){ dmg=0; S.battleWard=false; R.lines.push('Your Arcane Ward drinks the blow.'); }
          if (B.def) dmg = Math.round(dmg*0.6);
          if (dmg>0){ hurt(S,dmg,R,{ignore:!!sp.ignore}); R.lines.push(`It tears into you for ${dmg}.`); if (sp.x) applyFx(S,sp.x,R,{}); }
        }
        return;
      }
    }
  }
  const pac = 10 + mod(S.stats.DEX) + defense(S) + (B.def?4:0);
  const roll = d(S,20) + Math.floor(B.lv/2) + 2;
  const hit = roll===1+Math.floor(B.lv/2)+2 ? false : roll >= pac;
  if (hit){
    let dmg = Math.round(B.dmg*(0.7+rnd(S)*0.6)); if (B.def) dmg = Math.round(dmg*0.5);
    if (S.battleWard){ S.battleWard=false; R.lines.push(`${f.n} strikes — but your Arcane Ward drinks the blow.`); return; }
    const grd = S.allies.reduce((a,x)=>a+((G.allies[x]&&G.allies[x].guard)||0),0); dmg = Math.max(1, dmg - grd);
    hurt(S,dmg,R,{}); R.lines.push(`${f.n} ${pickV(S,f)} you.`);
  } else R.lines.push(`${f.n} attacks, but you turn it aside.`);
}
function pickV(S,f){ const v = f.verbs || ['strikes','lashes','mauls','slams into']; return v[ri(S,v.length)]; }
function allyTurn(S,R){
  const B=S.battle, f=G.foes[B.id];
  for (const a of S.allies){
    const A=G.allies[a]; if (!A || !B || B.hp<=0) continue;
    if (A.dmg){ const dmg = Math.round(A.dmg*(1+0.12*S.ch)*(0.7+rnd(S)*0.6)); hurtFoe(S,R,dmg, `${A.n.split(' ')[0]} ${A.verb||'strikes'} the foe`, {el:A.el}); }
    if (A.healb && S.hp < S.maxHp*0.6 && rnd(S)<0.5){ heal(S, Math.round(A.healb*(1+0.15*S.ch)), R); R.lines.push(`${A.n.split(' ')[0]} mutters a prayer; warmth spreads through you.`); }
  }
}
function finishBattleRound(S, R, fromBattleOpt){
  // called after the player's action
  const B = S.battle; if (!B) return; const f=G.foes[B.id];
  allyTurn(S,R);
  if (B.hp <= 0){ victory(S,R); return; }
  foeTurn(S,R);
  if (B.cool>0) B.cool--;
  B.def = false;
  if (S.hp <= 0 && !f.nonlethal) checkDeath(S,R,false);
}
function victory(S,R){
  const B=S.battle, f=G.foes[B.id]; R.lines.push(fmt(S, f.winText||`${f.n} falls!`)); R.victory = true;
  applyFx(S, f.win||'xp+m', R, {});
  if (f.flag) S.flags[f.flag]=true;
  S.battle = null; S.battleWard = false;
}
/* wire battle options into the generic runner */
const _normScene = normScene;
(function(){
  const oldChoose = G.choose;
  G.choose = function(S, idx){
    if (S.cur && S.cur.kind==='battle'){
      const sc = G.resolveCur(S); const av = sc.opts.filter(o=>o.avail); const o = av[idx]; if (!o) return null;
      const R = { text:'', tags:[], roll:null, ok:true, lines:[] };
      if (o.mp){ S.mp -= o.mp; R.tags.push({k:'mp', v:-o.mp}); }
      o.run(S,R);
      if (S.battle) finishBattleRound(S,R);
      R.text = R.lines.join('\n');
      S.choices++;
      S.out = { n:S.choices, chosen:o.label, text:R.text, tags:R.tags, roll:R.roll, ok:R.ok, lines:R.lines };
      S.log.push({ n:S.choices, sc:sc.title, c:o.label, t:R.text.length>240?R.text.slice(0,237)+'…':R.text.replace(/\n/g,' '), tags:R.tags.slice(0,10), roll:R.roll?{r:R.roll.r,tot:R.roll.total,dc:R.roll.dc,s:R.roll.stat,ok:R.roll.ok}:null, ok:R.ok });
      const nl = S.battle && G.foes[S.battle.id];
      if (nl && nl.nonlethal && S.hp<=0 && !R.die){ // a friendly contest: you lose, but live
        S.hp = 1; S.flags['lost_'+S.battle.id] = true; R.text += '\n' + fmt(S, nl.loseText || 'You are beaten — but it was only a contest, and you live.'); S.out.text = R.text; S.battle = null;
        applyFx(S, nl.lose || 'xp+s', R, {}); S.out.tags = R.tags; G.nextBeat(S); return {};
      }
      if (R.die || S.hp<=0){ S.dead=true; S.deathText = R.text + '\n' + G.deathLine(S); S.cur={kind:'death'}; S.battle=null; return {dead:true}; }
      if (R.victory || R.fled){
        const next = R.next; if (R.next) S.stack.unshift(R.next);
        const R2={text:'',tags:[]}; advance(S,R2); S.out.tags=S.out.tags.concat(R2.tags);
        G.nextBeat(S); return {};
      }
      S.cur = {kind:'battle'}; return {};
    }
    return oldChoose(S, idx);
  };
})();

/* ---------------- items outside combat ---------------- */
G.useItem = function(S, id){
  const it = G.items[id]; if (!it || !it.use || !(S.items[id]>0)) return null;
  if (S.battle) return { err:'There is no time for that in the middle of a fight.' };
  const R = { text:'', tags:[] }; delItem(S,id,1,R); applyFx(S,it.use,R,{});
  return R;
};

/* ---------------- save / load ---------------- */
function snapshot(S, noCp){ const c = Object.assign({}, S); delete c.cp; delete c.out; return JSON.stringify(c); }
G.snapshot = snapshot;
G.restore = function(json){ const S = JSON.parse(json); S.story = S.story||'ashen'; G.curStory = S.story; S.cp = null; S.out = null; S.dead = false; if (S.cur && S.cur.kind==='resume') G.nextBeat(S); return S; };
G.restoreCp = function(S){ const R = JSON.parse(S.cp); R.story = R.story||'ashen'; G.curStory = R.story; R.cp = S.cp; R.out = null; R.dead=false; R.battle=null; if (R.cur && R.cur.kind==='resume') G.nextBeat(R); return R; };

})(typeof globalThis !== 'undefined' ? globalThis : window);
