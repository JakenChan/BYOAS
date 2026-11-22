/* Procedural scene art: layered SVG landscapes + emoji "actors", with time-of-day and weather. */
(function(){
const G = globalThis.G;
const W = 960, H = 360;
const hex = h => { h=h.replace('#',''); if(h.length===3) h=h.split('').map(x=>x+x).join(''); return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]; };
const mix = (a,b,t) => { const A=hex(a),B=hex(b); return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join(''); };
G.mix = mix;

const SKY = { 0:['#46407a','#f4a97b'], 1:['#3d86d6','#c4e6f5'], 2:['#2a2860','#f2824f'], 3:['#050818','#1b2a58'] };
const TINT = { 0:['#ffb08a',.14], 1:['#ffffff',0], 2:['#ff7a3d',.22], 3:['#0b1236',.58] };
const ALIAS = { school:'classroom', bus:'mrt', farm:'village', pass:'mountain', deepforest:'forest', tavern:'interior', library:'interior', bridge:'river', hall:'interior', crypt:'dungeon', ship:'sea', market:'town', city:'town', plains:'meadow', fey:'forest' };
const INDOOR = ['interior','cave','dungeon','throne','night','title','classroom','mall','mrt','haunt','jewel','bungalow','supertree'];

function ctxFor(spec, S, seedStr){
  const parts = (spec||'meadow|').split('|'); let biome = parts[0] || 'meadow'; biome = ALIAS[biome] || biome;
  const rng = G.lr(G.hash(spec + '#' + (seedStr||'')));
  const tod = (S && S.tod != null) ? S.tod : 1, wx = (S && S.wx) || 'clear';
  const tint = TINT[tod];
  const c = h => tint[1] ? mix(h, tint[0], tint[1]) : h;
  const wxDark = { storm:.35, rain:.2, cloudy:.12, fog:.1, snow:.05, sandstorm:.15, ashfall:.2 }[wx] || 0;
  return { biome, em: parts[1]||'', rng, tod, wx, c, R:(a,b)=>a+rng()*(b-a), P:a=>a[Math.floor(rng()*a.length)], wxDark, S };
}
const f = n => Math.round(n*10)/10;

function skyDef(x){
  const [t,b] = SKY[x.tod]; let top=t, bot=b;
  if (x.wxDark) { top = mix(top,'#444a55',x.wxDark*1.6); bot = mix(bot,'#8a8f98',x.wxDark*1.4); }
  if (x.biome==='ashlands'){ top=mix(top,'#2a0a08',.8); bot=mix(bot,'#d0481c',.6); }
  if (x.biome==='swamp'){ top=mix(top,'#2c3a2a',.45); bot=mix(bot,'#6b7a4a',.45); }
  if (x.biome==='desert'){ bot=mix(bot,'#f6d8a0',.45); }
  return `<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bot}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#sk)"/>`;
}
function sunmoon(x){
  let s='';
  if (x.tod===3){ for (let i=0;i<90;i++) s+=`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(0,200))}" r="${f(x.R(.4,1.5))}" fill="#fff" opacity="${f(x.R(.3,.95))}"/>`;
    s+=`<circle cx="${f(x.R(600,860))}" cy="${f(x.R(50,100))}" r="34" fill="#f4f1d8"/><circle cx="${f(x.R(610,880))}" cy="${f(x.R(46,92))}" r="30" fill="${SKY[3][0]}" opacity=".18"/>`; }
  else { const pos = {0:[190,175],1:[x.R(560,760),70],2:[770,170]}[x.tod]; const col = x.tod===1?'#fff6c8':'#ffd08a';
    s+=`<circle cx="${pos[0]}" cy="${pos[1]}" r="${x.tod===1?30:42}" fill="${col}" opacity="${x.wxDark>.2?.35:.95}"/><circle cx="${pos[0]}" cy="${pos[1]}" r="${x.tod===1?60:90}" fill="${col}" opacity=".18"/>`; }
  if (['cloudy','rain','storm','snow','fog'].includes(x.wx) || x.R(0,1)<.5){
    const n = ['storm','rain','cloudy'].includes(x.wx)?7:3;
    for (let i=0;i<n;i++){ const cx=x.R(0,W), cy=x.R(30,130), w=x.R(90,220); const col = x.tod===3?'#2a3a6a':(x.wxDark?'#7c828c':'#ffffff'); s+=`<g opacity="${x.wxDark?.8:.55}" fill="${col}"><ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(w/2)}" ry="${f(w/7)}"/><ellipse cx="${f(cx+w/5)}" cy="${f(cy-10)}" rx="${f(w/3.2)}" ry="${f(w/7)}"/></g>`; } }
  return s;
}
function ridge(x, y, amp, col, n, snow){
  let d = `M0 ${H} L0 ${y}`; const step = W/n; const pts=[];
  for (let i=0;i<=n;i++){ const px = i*step + (i%2? -step*.1: step*.1), py = y - x.R(0,amp)*(i%2?1:.35); pts.push([px,py]); d+=` L${f(px)} ${f(py)}`; }
  d+=` L${W} ${H} Z`; let s=`<path d="${d}" fill="${x.c(col)}"/>`;
  if (snow){ pts.forEach(([px,py],i)=>{ if(i%2 && py < y-amp*.45) s+=`<path d="M${f(px-26)} ${f(py+30)} L${f(px)} ${f(py)} L${f(px+26)} ${f(py+30)} L${f(px+10)} ${f(py+24)} L${f(px)} ${f(py+34)} L${f(px-10)} ${f(py+24)}Z" fill="${x.c('#f4f8ff')}"/>`; }); }
  return s;
}
function hills(x, y, amp, col){ let d=`M0 ${H} L0 ${y}`; for(let i=0;i<=6;i++){ const px=i*W/6, py=y-x.R(0,amp); d+=` Q${f(px-W/12)} ${f(py-amp*.3)} ${f(px)} ${f(py)}`; } d+=` L${W} ${H}Z`; return `<path d="${d}" fill="${x.c(col)}"/>`; }
function pine(x,px,py,sz,col,snowy){ let s=`<rect x="${f(px-sz*.06)}" y="${f(py-sz*.2)}" width="${f(sz*.12)}" height="${f(sz*.25)}" fill="${x.c('#4a3320')}"/>`; for(let i=0;i<3;i++){ const w=sz*(.55-i*.13), yy=py-sz*.15-i*sz*.28; s+=`<path d="M${f(px-w)} ${f(yy)} L${f(px)} ${f(yy-sz*.45)} L${f(px+w)} ${f(yy)}Z" fill="${x.c(col)}"/>`; if(snowy) s+=`<path d="M${f(px-w*.6)} ${f(yy-sz*.2)} L${f(px)} ${f(yy-sz*.45)} L${f(px+w*.6)} ${f(yy-sz*.2)}Z" fill="${x.c('#f4f8ff')}"/>`; } return s; }
function oak(x,px,py,sz,col){ return `<rect x="${f(px-sz*.07)}" y="${f(py-sz*.5)}" width="${f(sz*.14)}" height="${f(sz*.5)}" fill="${x.c('#4a3320')}"/><circle cx="${f(px)}" cy="${f(py-sz*.68)}" r="${f(sz*.34)}" fill="${x.c(col)}"/><circle cx="${f(px-sz*.2)}" cy="${f(py-sz*.52)}" r="${f(sz*.24)}" fill="${x.c(col)}"/><circle cx="${f(px+sz*.22)}" cy="${f(py-sz*.55)}" r="${f(sz*.25)}" fill="${x.c(col)}"/>`; }
function deadtree(x,px,py,sz){ let s=`<path d="M${px} ${py} L${f(px-3)} ${f(py-sz*.6)}" stroke="${x.c('#2b241d')}" stroke-width="${f(sz*.08)}" fill="none"/>`; for(let i=0;i<4;i++){ const yy=py-sz*(.25+i*.15), dir=i%2?1:-1; s+=`<path d="M${px} ${f(yy)} L${f(px+dir*sz*.3)} ${f(yy-sz*.2)}" stroke="${x.c('#2b241d')}" stroke-width="${f(sz*.04)}" fill="none"/>`; } return s; }
function house(x,px,py,w,h,roof,wall){ const lit = x.tod>=2; return `<rect x="${f(px)}" y="${f(py-h)}" width="${f(w)}" height="${f(h)}" fill="${x.c(wall)}"/><path d="M${f(px-6)} ${f(py-h)} L${f(px+w/2)} ${f(py-h-w*.45)} L${f(px+w+6)} ${f(py-h)}Z" fill="${x.c(roof)}"/><rect x="${f(px+w*.2)}" y="${f(py-h*.65)}" width="${f(w*.22)}" height="${f(h*.3)}" fill="${lit?'#ffcf6a':x.c('#6a5a40')}"/><rect x="${f(px+w*.62)}" y="${f(py-h*.55)}" width="${f(w*.2)}" height="${f(h*.55)}" fill="${x.c('#3b2a1c')}"/>`; }
function grass(x,col,n){ let s=''; for(let i=0;i<n;i++){ const px=x.R(0,W), py=x.R(250,H); s+=`<path d="M${f(px)} ${f(py)} l-3 -9 M${f(px)} ${f(py)} l0 -11 M${f(px)} ${f(py)} l3 -9" stroke="${x.c(col)}" stroke-width="1.6" fill="none"/>`; } return s; }
function path(x,col){ return `<path d="M${f(W*.42)} ${H} Q${f(W*.5)} 280 ${f(W*.47)} 215 L${f(W*.52)} 215 Q${f(W*.58)} 280 ${f(W*.62)} ${H}Z" fill="${x.c(col)}" opacity=".9"/>`; }
function glow(cx,cy,r,col,op){ return `<radialGradient id="g${cx|0}${cy|0}"><stop offset="0" stop-color="${col}" stop-opacity="${op}"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></radialGradient><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#g${cx|0}${cy|0})"/>`; }

const B = {};
B.meadow = x => skyDef(x)+sunmoon(x)+ridge(x,205,40,'#7b8fae',9)+hills(x,235,22,'#6fa24c')+hills(x,275,24,'#5d9640')+path(x,'#b79b6c')+
  Array.from({length:6},()=>oak(x,x.R(30,W-30),x.R(240,300),x.R(60,120),x.P(['#3f7a36','#4a8a3a','#357030']))).join('')+grass(x,'#3f7a36',50)+
  Array.from({length:26},()=>`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(270,350))}" r="2.4" fill="${x.P(['#ffe36a','#ff8fb0','#ffffff'])}"/>`).join('');
B.village = x => skyDef(x)+sunmoon(x)+ridge(x,210,36,'#7b8fae',8)+hills(x,242,18,'#6a9f4a')+hills(x,285,20,'#5a9040')+path(x,'#b79b6c')+
  [[110,290,110,60],[270,272,90,52],[610,274,100,56],[790,292,120,66],[470,262,70,44]].map(([a,b,w,h])=>house(x,a,b,w,h,x.P(['#9c6b2f','#8a5a2a','#a07a38']),x.P(['#d8c9a0','#cdb88c','#e0d2ae']))).join('')+
  [0,1].map(i=>`<path d="M${[210,650][i]} 205 q-10 -30 6 -50 q-10 -20 6 -36" stroke="${x.c('#9a9a9a')}" stroke-width="7" fill="none" opacity=".5"/>`).join('')+
  Array.from({length:3},()=>oak(x,x.R(20,W-20),x.R(300,345),x.R(80,130),'#3f7a36')).join('')+grass(x,'#3f7a36',40);
B.forest = x => skyDef(x)+sunmoon(x)+ridge(x,190,30,'#4f6a58',10)+`<rect y="250" width="${W}" height="110" fill="${x.c('#2f5a2c')}"/>`+
  Array.from({length:16},()=>pine(x,x.R(0,W),x.R(230,280),x.R(110,170),'#2d5a34')).join('')+`<rect y="285" width="${W}" height="75" fill="${x.c('#37622e')}"/>`+
  path(x,'#9a8460')+Array.from({length:13},()=>pine(x,x.R(0,W),x.R(300,355),x.R(150,260),x.P(['#1f4a2a','#245230','#1b4226']))).join('')+grass(x,'#244f26',50)+
  (x.tod===1?Array.from({length:4},()=>`<path d="M${f(x.R(100,800))} 0 l60 360 l40 0z" fill="#fff6c0" opacity=".07"/>`).join(''):'');
B.mountain = x => skyDef(x)+sunmoon(x)+ridge(x,170,100,'#8a96b0',7,true)+ridge(x,235,110,'#6a7690',6,true)+ridge(x,300,90,'#4d5870',5)+
  `<path d="M${f(W*.3)} ${H} Q${f(W*.5)} 290 ${f(W*.62)} 250 L${f(W*.68)} 252 Q${f(W*.58)} 300 ${f(W*.75)} ${H}Z" fill="${x.c('#8b7a63')}"/>`+
  Array.from({length:9},()=>`<path d="M${f(x.R(0,W))} ${H} l${f(x.R(20,50))} ${f(-x.R(30,70))} l${f(x.R(20,40))} ${f(x.R(30,70))}z" fill="${x.c(x.P(['#3a3f4a','#454b58','#33384a']))}"/>`).join('');
B.swamp = x => skyDef(x)+sunmoon(x)+`<rect y="230" width="${W}" height="130" fill="${x.c('#3b4a2c')}"/>`+
  Array.from({length:9},()=>`<ellipse cx="${f(x.R(0,W))}" cy="${f(x.R(260,350))}" rx="${f(x.R(50,140))}" ry="${f(x.R(8,18))}" fill="${x.c('#2a4a44')}" opacity=".85"/>`).join('')+
  Array.from({length:7},()=>deadtree(x,x.R(10,W-10),x.R(240,320),x.R(110,190))).join('')+
  Array.from({length:30},()=>`<path d="M${f(x.R(0,W))} ${f(x.R(280,352))} l0 -${f(x.R(14,28))} m-3 6 l3 -6 l3 6" stroke="${x.c('#58713a')}" stroke-width="2" fill="none"/>`).join('')+
  `<rect y="210" width="${W}" height="150" fill="#cfe0c0" opacity="${x.wx==='fog'?.3:.12}"/>`+
  Array.from({length:4},()=>`<circle cx="${f(x.R(60,W-60))}" cy="${f(x.R(230,320))}" r="5" fill="#b8ffb0" opacity=".85"><animate attributeName="opacity" values=".2;.95;.2" dur="${f(x.R(2,4))}s" repeatCount="indefinite"/></circle>`).join('');
B.desert = x => skyDef(x)+sunmoon(x)+ridge(x,215,22,'#d9b778',7)+
  `<path d="M${f(W*.7)} 235 l50 -70 l50 70z" fill="${x.c('#c59a5a')}"/><path d="M${f(W*.7)+50} 235 l50 0 l-50 -70z" fill="${x.c('#a98048')}"/>`+
  [['#e3c07e',250],['#d7b06b',285],['#c9a15c',320]].map(([col,y])=>hills(x,y,30,col)).join('')+
  Array.from({length:4},()=>{ const px=x.R(30,W-30), py=x.R(290,345), s=x.R(26,52); return `<g fill="${x.c('#4a7a3a')}"><rect x="${f(px-4)}" y="${f(py-s)}" width="8" height="${f(s)}" rx="4"/><rect x="${f(px-18)}" y="${f(py-s*.7)}" width="6" height="${f(s*.35)}" rx="3"/><rect x="${f(px+12)}" y="${f(py-s*.8)}" width="6" height="${f(s*.35)}" rx="3"/></g>`; }).join('')+
  `<path d="M0 ${H} Q${W/2} ${H-30} ${W} ${H}Z" fill="${x.c('#d2a95f')}"/>`;
B.coast = x => skyDef(x)+sunmoon(x)+`<rect y="195" width="${W}" height="165" fill="${x.c('#2f6c9a')}"/>`+
  Array.from({length:16},(_,i)=>`<path d="M${f(x.R(0,W))} ${200+i*9} q14 -6 28 0 t28 0" stroke="${x.c('#9fd0ea')}" stroke-width="1.6" fill="none" opacity=".7"/>`).join('')+
  `<g transform="translate(${f(x.R(520,740))} 200)"><path d="M0 0 l60 0 l-8 18 l-44 0z" fill="${x.c('#4a2f1a')}"/><rect x="28" y="-70" width="3" height="70" fill="${x.c('#2b1c10')}"/><path d="M31 -66 l28 40 l-28 0z M27 -62 l-22 36 l22 0z" fill="${x.c('#f1e8d0')}"/></g>`+
  `<path d="M0 ${H} L0 255 Q120 240 200 275 Q290 310 330 ${H}Z" fill="${x.c('#6d6a5a')}"/><path d="M0 255 Q120 240 200 275 L0 285Z" fill="${x.c('#5a8a42')}"/>`+
  `<path d="M${W} ${H} L${W} 300 Q${W-100} 290 ${W-200} 330 L${W-240} ${H}Z" fill="${x.c('#7a7664')}"/>`+
  Array.from({length:7},()=>`<path d="M${f(x.R(0,W))} ${f(x.R(330,355))} q10 -8 22 0 q-6 -3 -12 0" fill="#fff" opacity=".8"/>`).join('');
B.sea = x => skyDef(x)+sunmoon(x)+`<rect y="170" width="${W}" height="190" fill="${x.c('#255f90')}"/>`+
  Array.from({length:22},(_,i)=>`<path d="M${f(x.R(0,W))} ${180+i*8} q14 -7 28 0 t28 0 t28 0" stroke="${x.c('#a8d6ee')}" stroke-width="1.8" fill="none" opacity=".65"/>`).join('')+
  `<g transform="translate(120 210)"><rect x="268" y="-170" width="7" height="190" fill="${x.c('#3a2615')}"/><path d="M276 -162 q70 60 0 130z" fill="${x.c('#efe6cf')}"/><path d="M267 -150 q-58 50 0 110z" fill="${x.c('#e4d8bc')}"/></g>`+
  `<path d="M0 ${H} L0 295 L${W} 285 L${W} ${H}Z" fill="${x.c('#6b4524')}"/>`+Array.from({length:12},(_,i)=>`<path d="M${i*85} 295 L${i*85-20} ${H}" stroke="${x.c('#4d3018')}" stroke-width="2"/>`).join('')+`<rect y="283" width="${W}" height="10" fill="${x.c('#4d3018')}"/>`;
B.snow = x => skyDef(x)+sunmoon(x)+(x.tod===3||x.wx==='aurora'?`<g opacity=".55"><path d="M0 90 Q200 20 420 90 T960 70 L960 0 L0 0Z" fill="#59f0b0"><animate attributeName="opacity" values=".25;.7;.25" dur="6s" repeatCount="indefinite"/></path><path d="M0 120 Q260 50 520 120 T960 100 L960 40 L0 60Z" fill="#9a7bff" opacity=".45"/></g>`:'')+
  ridge(x,190,90,'#a9b8d4',7,true)+ridge(x,245,60,'#dfe8f5',6)+`<rect y="285" width="${W}" height="75" fill="${x.c('#f2f6fc')}"/>`+
  Array.from({length:10},()=>pine(x,x.R(0,W),x.R(270,350),x.R(90,200),'#2e5a4a',true)).join('')+
  `<path d="M0 ${H} Q300 ${H-40} ${W} ${H}Z" fill="${x.c('#ffffff')}"/>`;
B.cave = x => `<rect width="${W}" height="${H}" fill="#0c0a14"/><rect width="${W}" height="${H}" fill="url(#cv)"/><defs><radialGradient id="cv" cx=".5" cy=".62" r=".7"><stop offset="0" stop-color="#3a2a4a"/><stop offset="1" stop-color="#05040a"/></radialGradient></defs>`+
  Array.from({length:16},()=>{ const px=x.R(0,W),h=x.R(30,130),w=x.R(14,42); return `<path d="M${f(px-w)} 0 L${f(px)} ${f(h)} L${f(px+w)} 0Z" fill="#1c1626"/>`; }).join('')+
  Array.from({length:14},()=>{ const px=x.R(0,W),h=x.R(25,100),w=x.R(14,40); return `<path d="M${f(px-w)} ${H} L${f(px)} ${f(H-h)} L${f(px+w)} ${H}Z" fill="#241c30"/>`; }).join('')+
  Array.from({length:6},()=>{ const px=x.R(40,W-40),py=x.R(260,340),c=x.P(['#7af0ff','#c69bff','#7aff9c']); return `${glow(f(px),f(py),50,c,.5)}<path d="M${f(px-8)} ${f(py+14)} L${f(px)} ${f(py-26)} L${f(px+8)} ${f(py+14)}Z" fill="${c}"/>`; }).join('')+
  `<path d="M0 ${H} Q${W/2} 300 ${W} ${H}Z" fill="#17121f"/>`;
B.dungeon = x => `<rect width="${W}" height="${H}" fill="#14121a"/>`+Array.from({length:9},(_,r)=>Array.from({length:14},(_,c)=>`<rect x="${c*70+(r%2?-35:0)}" y="${r*42}" width="68" height="40" fill="${['#2a2833','#26242e','#2e2c38'][(r*7+c*3)%3]}"/>`).join('')).join('')+
  `<rect x="400" y="110" width="160" height="250" rx="80" fill="#07060b"/><path d="M400 190 a80 80 0 0 1 160 0" fill="none" stroke="#3b3948" stroke-width="10"/>`+
  [[150,130],[810,130]].map(([a,b])=>`${glow(a,b,120,'#ff9a3a',.55)}<rect x="${a-4}" y="${b}" width="8" height="46" fill="#4a3320"/><path d="M${a} ${b} q-12 -22 0 -40 q12 18 0 40z" fill="#ffb347"><animate attributeName="d" values="M${a} ${b} q-12 -22 0 -40 q12 18 0 40z;M${a} ${b} q-9 -26 2 -42 q10 20 -2 42z;M${a} ${b} q-12 -22 0 -40 q12 18 0 40z" dur="1.1s" repeatCount="indefinite"/></path>`).join('')+
  `<rect y="320" width="${W}" height="40" fill="#1c1a24"/>`;
B.interior = x => `<rect width="${W}" height="${H}" fill="${x.c('#4a3524')}"/>`+Array.from({length:20},(_,i)=>`<rect x="${i*50}" y="0" width="48" height="250" fill="${['#533a27','#4a3322','#5a4029'][i%3]}"/>`).join('')+
  `<rect x="70" y="60" width="150" height="120" fill="${SKY[x.tod][1]}" stroke="#2b1c10" stroke-width="8"/><path d="M145 60 v120 M70 120 h150" stroke="#2b1c10" stroke-width="5"/>`+
  `<rect x="660" y="120" width="170" height="140" fill="#2a2420"/><rect x="680" y="150" width="130" height="110" fill="#0e0a08"/>${glow(745,235,150,'#ff9a3a',.7)}`+
  `<path d="M745 255 q-26 -46 0 -78 q26 40 0 78z" fill="#ffb347"><animate attributeName="opacity" values=".7;1;.7" dur="1.3s" repeatCount="indefinite"/></path>`+
  `<rect y="250" width="${W}" height="110" fill="#3a2718"/>`+Array.from({length:12},(_,i)=>`<path d="M${i*90} 250 L${i*90-30} ${H}" stroke="#2a1b10" stroke-width="2"/>`).join('')+
  `<rect x="300" y="262" width="330" height="22" fill="#6a4a2a"/><rect x="316" y="284" width="14" height="60" fill="#4a321c"/><rect x="600" y="284" width="14" height="60" fill="#4a321c"/>`+
  [380,520].map(a=>`${glow(a,252,50,'#ffd27a',.6)}<rect x="${a-3}" y="238" width="6" height="24" fill="#f1e8d0"/><path d="M${a} 238 q-5 -10 0 -16 q5 8 0 16z" fill="#ffd27a"/>`).join('');
B.town = x => skyDef(x)+sunmoon(x)+ridge(x,200,28,'#7b8fae',8)+
  Array.from({length:11},(_,i)=>{ const px=i*92-10+x.R(-6,6), h=x.R(80,150), w=x.R(70,92); const lit=x.tod>=2; return `<rect x="${f(px)}" y="${f(300-h)}" width="${f(w)}" height="${f(h)}" fill="${x.c(x.P(['#a38f78','#8d7a66','#b5a085','#97836c']))}"/><path d="M${f(px-5)} ${f(300-h)} L${f(px+w/2)} ${f(300-h-w*.38)} L${f(px+w+5)} ${f(300-h)}Z" fill="${x.c(x.P(['#7a3b2a','#6c3a2c','#8a4a30']))}"/>`+Array.from({length:3},(_,k)=>`<rect x="${f(px+10+k*(w/3.3))}" y="${f(300-h+16)}" width="12" height="16" fill="${lit&&x.R(0,1)<.7?'#ffcf6a':x.c('#5a6068')}"/>`).join(''); }).join('')+
  `<rect y="298" width="${W}" height="62" fill="${x.c('#7a7468')}"/>`+Array.from({length:14},(_,i)=>`<path d="M${i*70} 300 L${i*70-50} ${H}" stroke="${x.c('#5d584e')}" stroke-width="2"/>`).join('')+
  `<path d="M${W*.38} 298 l50 -60 l50 60z" fill="${x.c('#a33a2a')}"/><rect x="${W*.38+8}" y="298" width="84" height="22" fill="${x.c('#6a4a2a')}"/>`;
B.castle = x => skyDef(x)+sunmoon(x)+ridge(x,210,30,'#7b8fae',8)+hills(x,270,18,'#5d9640')+
  `<g fill="${x.c('#8b8a92')}"><rect x="360" y="130" width="240" height="160"/><rect x="330" y="95" width="56" height="195"/><rect x="574" y="95" width="56" height="195"/><rect x="450" y="75" width="60" height="215"/></g>`+
  `<g fill="${x.c('#5a3a4a')}"><path d="M326 95 l32 -50 l32 50z"/><path d="M570 95 l32 -50 l32 50z"/><path d="M446 75 l34 -60 l34 60z"/></g>`+
  `<g fill="${x.c('#3a3340')}"><rect x="450" y="230" width="60" height="60" rx="30"/><rect x="342" y="130" width="10" height="26"/><rect x="590" y="130" width="10" height="26"/></g>`+
  `<path d="M480 15 v-20 l22 8 l-22 8" fill="#c03a3a"/>`+path(x,'#b79b6c')+grass(x,'#3f7a36',30);
B.tower = x => skyDef(x)+sunmoon(x)+ridge(x,230,60,'#3a2a2f',7)+`<rect y="290" width="${W}" height="70" fill="${x.c('#2b2024')}"/>`+
  `${glow(480,150,260,'#c040ff',.4)}<path d="M430 300 L450 110 L470 90 L490 40 L496 0 L504 0 L510 40 L530 90 L550 110 L570 300Z" fill="${x.c('#1c1420')}"/><path d="M470 90 l40 0 M450 150 l100 0 M445 210 l110 0" stroke="#5a3a6a" stroke-width="3"/>`+
  `<circle cx="500" cy="60" r="12" fill="#e070ff"><animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite"/></circle>`+
  Array.from({length:24},()=>`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(0,H))}" r="1.8" fill="#ff8a3a" opacity=".8"><animate attributeName="cy" values="${f(x.R(0,H))};${f(x.R(0,H)-80)}" dur="${f(x.R(3,7))}s" repeatCount="indefinite"/></circle>`).join('');
B.ruins = x => skyDef(x)+sunmoon(x)+ridge(x,215,28,'#7b8fae',8)+hills(x,270,16,'#5f8f48')+
  Array.from({length:7},(_,i)=>{ const px=90+i*125+x.R(-14,14), h=x.R(60,170); return `<rect x="${f(px)}" y="${f(300-h)}" width="26" height="${f(h)}" fill="${x.c('#b8b2a2')}"/><rect x="${f(px-5)}" y="${f(300-h-8)}" width="36" height="9" fill="${x.c('#a8a292')}"/>`; }).join('')+
  `<path d="M300 300 L300 200 a90 90 0 0 1 180 0 L480 300" fill="none" stroke="${x.c('#9a9484')}" stroke-width="16"/>`+
  `<rect y="298" width="${W}" height="62" fill="${x.c('#4f7a3c')}"/>`+Array.from({length:9},()=>`<rect x="${f(x.R(0,W))}" y="${f(x.R(305,350))}" width="${f(x.R(14,40))}" height="12" fill="${x.c('#9a9484')}"/>`).join('')+grass(x,'#3f7a36',30);
B.ashlands = x => skyDef(x)+`${glow(500,230,380,'#ff5a1a',.45)}`+ridge(x,230,70,'#2a1a1a',8)+
  `<path d="M300 300 L440 140 L520 140 L660 300Z" fill="${x.c('#1c1212')}"/><path d="M440 140 l25 -20 l30 20z" fill="#ff7a2a"/><path d="M455 140 q10 60 -10 160 M495 140 q-8 80 18 160" stroke="#ff5a1a" stroke-width="4" fill="none" opacity=".8"/>`+
  `<rect y="290" width="${W}" height="70" fill="${x.c('#1a1010')}"/>`+Array.from({length:12},()=>`<path d="M${f(x.R(0,W))} ${f(x.R(295,355))} l${f(x.R(20,80))} ${f(x.R(-6,10))}" stroke="#ff6a1a" stroke-width="2.2" opacity=".85"/>`).join('')+
  Array.from({length:30},()=>`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(0,H))}" r="1.8" fill="#ff9a4a" opacity=".8"><animate attributeName="cy" values="${f(x.R(200,H))};${f(x.R(0,120))}" dur="${f(x.R(3,8))}s" repeatCount="indefinite"/></circle>`).join('');
B.river = x => skyDef(x)+sunmoon(x)+ridge(x,200,40,'#7b8fae',9)+hills(x,235,18,'#6fa24c')+
  `<path d="M0 270 Q300 240 520 275 T${W} 262 L${W} ${H} L0 ${H}Z" fill="${x.c('#3b7fb8')}"/>`+Array.from({length:10},()=>`<path d="M${f(x.R(0,W))} ${f(x.R(285,350))} q10 -4 20 0" stroke="#cfeaf7" stroke-width="1.6" fill="none" opacity=".7"/>`).join('')+
  `<rect x="380" y="268" width="200" height="12" fill="${x.c('#6a4a2a')}"/><rect x="392" y="280" width="8" height="34" fill="${x.c('#4a321c')}"/><rect x="560" y="280" width="8" height="34" fill="${x.c('#4a321c')}"/>`+
  Array.from({length:5},()=>oak(x,x.R(20,W-20),x.R(240,262),x.R(60,100),'#3f7a36')).join('');
B.throne = x => `<rect width="${W}" height="${H}" fill="#120a18"/>${glow(480,160,420,'#a040e0',.35)}`+
  Array.from({length:6},(_,i)=>{ const side=i%2?1:-1, k=Math.floor(i/2); const px=480+side*(210+k*95), w=44-k*8; return `<rect x="${f(px-w/2)}" y="${40+k*25}" width="${w}" height="${270-k*22}" fill="${['#2a1a34','#241830','#1f142a'][k]}"/>`; }).join('')+
  `<path d="M420 ${H} L455 230 L505 230 L540 ${H}Z" fill="#6a0f2a"/><path d="M455 230 L450 120 L480 70 L510 120 L505 230Z" fill="#0a0610" stroke="#5a2a7a" stroke-width="4"/><circle cx="480" cy="105" r="9" fill="#e070ff"><animate attributeName="r" values="8;13;8" dur="2.4s" repeatCount="indefinite"/></circle>`+
  `<rect y="300" width="${W}" height="60" fill="#1a1022"/>`;
B.camp = x => { const base = B.forest(x); return base+`${glow(480,300,230,'#ff8a2a',.75)}<g transform="translate(480 312)"><path d="M-30 6 L30 -4 M-30 -4 L30 6" stroke="#4a2c14" stroke-width="7" stroke-linecap="round"/><path d="M0 -4 q-22 -28 0 -58 q22 30 0 58z" fill="#ff9a2a"><animate attributeName="d" values="M0 -4 q-22 -28 0 -58 q22 30 0 58z;M0 -4 q-16 -34 4 -62 q20 32 -4 62z;M0 -4 q-22 -28 0 -58 q22 30 0 58z" dur="1.2s" repeatCount="indefinite"/></path><path d="M0 -4 q-10 -16 0 -32 q10 16 0 32z" fill="#ffe07a"/></g><path d="M190 340 l55 -85 l55 85z" fill="${x.c('#a8845a')}"/><path d="M700 345 l50 -75 l50 75z" fill="${x.c('#9a7a52')}"/>`; };
B.night = x => `<rect width="${W}" height="${H}" fill="#04050f"/>`+Array.from({length:90},()=>`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(0,H))}" r="${f(x.R(.4,1.5))}" fill="#fff" opacity="${f(x.R(.2,.9))}"/>`).join('');
B.title = x => { x.tod=3; x.wx='clear'; return B.castle(Object.assign({}, x, {tod:3, c:h=>mix(h,'#0b1236',.58)})); };


/* ---------- Singapore (modern) scenery ---------- */
function hdbBlock(x,px,w,h,col,base){ let s=`<rect x="${f(px)}" y="${f(base-h)}" width="${w}" height="${h}" fill="${x.c(col)}"/><rect x="${f(px)}" y="${f(base-h)}" width="${w}" height="7" fill="${x.c('#b9b3a6')}"/>`;
  const cols=Math.max(2,Math.floor(w/20)), rows=Math.floor((h-20)/24);
  for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){ const lit=x.tod>=2 && x.R(0,1)<.45; s+=`<rect x="${f(px+8+c*((w-16)/cols))}" y="${f(base-h+14+r*24)}" width="9" height="13" fill="${lit?'#ffd27a':x.c('#6f93a8')}"/>`; }
  for(let r=2;r<rows;r+=4) s+=`<rect x="${f(px)}" y="${f(base-h+14+r*24+15)}" width="${w}" height="3" fill="${x.c('#e8e4da')}"/>`; return s; }
B.hdb = x => skyDef(x)+sunmoon(x)+`<rect y="200" width="${W}" height="20" fill="${x.c('#7fa0a0')}" opacity=".5"/>`+
  [[30,100,190,'#e6c9a0'],[170,110,230,'#cfd8e0'],[330,100,160,'#f0d8b0'],[480,120,250,'#d8c9e0'],[660,110,200,'#cfe3d0'],[800,120,240,'#f0cfc0']].map(([a,w,h,c])=>hdbBlock(x,a,w,h,c,300)).join('')+
  `<rect y="300" width="${W}" height="60" fill="${x.c('#8e8a80')}"/><rect y="298" width="${W}" height="6" fill="${x.c('#5f9a4a')}"/>`+
  Array.from({length:4},()=>oak(x,x.R(30,W-30),x.R(322,350),x.R(60,100),'#3f7a36')).join('')+
  `<g fill="${x.c('#d9534f')}"><rect x="610" y="318" width="70" height="6"/><rect x="618" y="324" width="5" height="26"/><rect x="668" y="324" width="5" height="26"/></g><path d="M700 350 q20 -40 40 0" stroke="${x.c('#f0ad4e')}" stroke-width="5" fill="none"/>`;
B.void = x => `<rect width="${W}" height="${H}" fill="${x.c('#b8b2a4')}"/>`+Array.from({length:5},(_,i)=>`<rect x="${60+i*210}" y="0" width="46" height="300" fill="${x.c('#d6d0c2')}"/>`).join('')+
  `<rect y="296" width="${W}" height="64" fill="${x.c('#8c8678')}"/>`+Array.from({length:14},(_,i)=>`<path d="M${i*70} 300 L${i*70-40} ${H}" stroke="${x.c('#7a7468')}" stroke-width="2"/>`).join('')+
  `<rect x="360" y="262" width="150" height="14" fill="${x.c('#4a4a52')}"/><rect x="372" y="276" width="8" height="30" fill="${x.c('#3a3a42')}"/><rect x="490" y="276" width="8" height="30" fill="${x.c('#3a3a42')}"/>`+
  Array.from({length:8},(_,i)=>`<rect x="${372+(i%4)*34}" y="${i<4?234:240}" width="18" height="18" fill="${i%2?x.c('#e8e4da'):x.c('#222')}" opacity=".9"/>`).join('')+
  `${glow(800,300,120,'#ff8a2a',.5)}<rect x="770" y="262" width="60" height="44" fill="${x.c('#555')}"/><rect x="778" y="270" width="44" height="30" fill="#2a1a10"/><path d="M800 288 q-10 -20 0 -34 q10 14 0 34z" fill="#ff9a3a"/>`+
  `<rect x="0" y="0" width="${W}" height="30" fill="${x.c('#9c968a')}"/>`;
B.classroom = x => `<rect width="${W}" height="${H}" fill="${x.c('#e9e2cc')}"/><rect x="170" y="40" width="380" height="150" fill="#2f5a47" stroke="#8a6a3a" stroke-width="8"/><text x="190" y="90" font-size="26" fill="#f4f1e0" font-family="Georgia">Term 3 · Week 9</text><path d="M200 130 h260 M200 155 h180" stroke="#f4f1e0" stroke-width="3" opacity=".6"/>`+
  `<rect x="640" y="50" width="240" height="150" fill="${SKY[x.tod][1]}" stroke="#8a6a3a" stroke-width="7"/><path d="M760 50 v150 M640 125 h240" stroke="#8a6a3a" stroke-width="5"/><rect x="670" y="110" width="30" height="90" fill="#cfd8e0"/><rect x="720" y="90" width="40" height="110" fill="#e6c9a0"/><rect x="790" y="120" width="30" height="80" fill="#cfe3d0"/>`+
  `<rect y="260" width="${W}" height="100" fill="#b9a27a"/>`+Array.from({length:4},(_,i)=>`<g transform="translate(${70+i*220} 250)"><rect width="150" height="12" fill="#c9a36a"/><rect x="10" y="12" width="8" height="52" fill="#7a5a30"/><rect x="132" y="12" width="8" height="52" fill="#7a5a30"/><rect x="40" y="46" width="70" height="8" fill="#a8845a"/></g>`).join('')+
  `<g transform="translate(560 70)"><rect width="4" height="70" fill="#666"/><rect x="4" width="46" height="15" fill="#e5322d"/><rect x="4" y="15" width="46" height="15" fill="#fff"/></g>`;
B.mall = x => `<rect width="${W}" height="${H}" fill="#f3efe6"/><rect width="${W}" height="70" fill="#d9e8f2"/>`+Array.from({length:7},(_,i)=>`<path d="M${i*160} 0 L${i*160+80} 70" stroke="#fff" stroke-width="5" opacity=".7"/>`).join('')+
  [[30,'#e74c3c'],[250,'#3498db'],[470,'#f39c12'],[690,'#27ae60']].map(([a,c])=>`<rect x="${a}" y="100" width="200" height="150" fill="#fff" stroke="${c}" stroke-width="6"/><rect x="${a}" y="100" width="200" height="30" fill="${c}"/><rect x="${a+20}" y="145" width="70" height="100" fill="#cfe6f5"/><rect x="${a+110}" y="145" width="70" height="100" fill="#fdebd0"/>`).join('')+
  `<rect y="250" width="${W}" height="110" fill="#d7d2c8"/>`+Array.from({length:9},(_,i)=>`<path d="M${i*110} 252 L${i*110-60} ${H}" stroke="#bdb7aa" stroke-width="2"/>`).join('')+`<path d="M780 252 L900 160 L920 175 L800 268Z" fill="#9aa5ad"/>`;
B.mrt = x => `<rect width="${W}" height="${H}" fill="#e8ecef"/>`+Array.from({length:8},(_,i)=>`<rect x="${i*130}" y="0" width="14" height="250" fill="#c9d0d6"/>`).join('')+
  `<rect y="40" width="${W}" height="46" fill="#00a651"/><text x="30" y="72" font-size="24" fill="#fff" font-family="Arial" font-weight="bold">TAMPINES  ◄ EW2 · DT32 ►  Simei</text>`+
  `<rect y="250" width="${W}" height="110" fill="#bfc4c8"/><rect y="286" width="${W}" height="9" fill="#f6c800"/>`+
  `<g transform="translate(120 112)"><rect width="720" height="150" rx="12" fill="#d9dde0"/><rect y="40" width="720" height="22" fill="#e31837"/>${[0,1,2,3].map(i=>`<rect x="${40+i*170}" y="20" width="110" height="120" fill="#8fa5b3" stroke="#555" stroke-width="3"/><path d="M${95+i*170} 20 v120" stroke="#555" stroke-width="3"/>`).join('')}</g>`;
B.hawker = x => skyDef(x)+`<rect y="90" width="${W}" height="30" fill="${x.c('#c0392b')}"/>`+Array.from({length:13},(_,i)=>`<rect x="${i*76}" y="120" width="4" height="170" fill="${x.c('#7f8c8d')}"/>`).join('')+
  `<rect y="120" width="${W}" height="150" fill="${x.c('#f5e6c8')}"/>`+[0,1,2,3].map(i=>`<g transform="translate(${30+i*230} 140)"><rect width="190" height="115" fill="${x.c(['#e74c3c','#f39c12','#27ae60','#2980b9'][i])}"/><rect x="10" y="14" width="170" height="30" fill="#fff"/><rect x="10" y="60" width="170" height="45" fill="${x.c('#7a5a30')}"/><circle cx="55" cy="84" r="14" fill="#e8e4da"/><circle cx="105" cy="84" r="14" fill="#e8e4da"/></g>`).join('')+
  `<rect y="270" width="${W}" height="90" fill="${x.c('#a99f8e')}"/>`+Array.from({length:6},(_,i)=>`<g transform="translate(${50+i*150} 300)"><rect width="90" height="9" fill="${x.c('#c9a36a')}"/><rect x="40" y="9" width="8" height="30" fill="${x.c('#7a5a30')}"/><ellipse cx="-8" cy="30" rx="11" ry="6" fill="${x.c('#d9534f')}"/><ellipse cx="100" cy="30" rx="11" ry="6" fill="${x.c('#f0ad4e')}"/></g>`).join('')+
  Array.from({length:8},(_,i)=>`${glow(60+i*125,125,40,'#ffe08a',x.tod>=2?.8:.25)}<circle cx="${60+i*125}" cy="128" r="9" fill="#ffd27a"/>`).join('');
B.beach = x => skyDef(x)+sunmoon(x)+`<path d="M${f(x.R(140,260))} 70 l60 12 l-6 7 l-54 -8z M${f(x.R(200,300))+10} 82 l-20 -14 l9 -2z" fill="${x.c('#e8ecef')}" opacity=".9"/>`+
  `<rect y="190" width="${W}" height="80" fill="${x.c('#2f86b8')}"/>`+Array.from({length:12},(_,i)=>`<path d="M${f(x.R(0,W))} ${196+i*6} q12 -5 24 0 t24 0" stroke="${x.c('#bfe6f5')}" stroke-width="1.6" fill="none" opacity=".7"/>`).join('')+
  `<g fill="${x.c('#555a62')}"><rect x="${f(x.R(500,700))}" y="188" width="70" height="6"/><rect x="${f(x.R(500,700))+30}" y="178" width="10" height="10"/></g>`+
  `<path d="M0 ${H} L0 262 Q${W/2} 248 ${W} 270 L${W} ${H}Z" fill="${x.c('#ecd9a8')}"/>`+
  Array.from({length:6},()=>{ const px=x.R(20,W-20), py=x.R(285,340), hh=x.R(130,210); return `<path d="M${f(px)} ${f(py)} q-4 -${f(hh/2)} 2 -${f(hh)}" stroke="${x.c('#6a4a2a')}" stroke-width="5" fill="none"/>`+Array.from({length:9},(_,k)=>`<path d="M${f(px)} ${f(py-hh+k*8)} q${k%2?30:-30} -12 ${k%2?46:-46} 6" stroke="${x.c('#3f7a4a')}" stroke-width="2.2" fill="none"/>`).join(''); }).join('')+
  Array.from({length:5},()=>`<path d="M${f(x.R(0,W))} ${f(x.R(300,352))} q10 -8 22 0" stroke="${x.c('#d8c48a')}" stroke-width="2" fill="none"/>`).join('');
B.pier = x => skyDef(x)+sunmoon(x)+`<rect y="170" width="${W}" height="190" fill="${x.c('#2f86b8')}"/>`+Array.from({length:14},()=>`<path d="M${f(x.R(0,W))} ${f(x.R(180,350))} q12 -5 24 0 t24 0" stroke="${x.c('#bfe6f5')}" stroke-width="1.6" fill="none" opacity=".7"/>`).join('')+
  `<rect x="0" y="250" width="${W}" height="14" fill="${x.c('#8a6a3a')}"/>`+Array.from({length:16},(_,i)=>`<rect x="${i*62}" y="264" width="9" height="60" fill="${x.c('#5a4020')}"/>`).join('')+
  `<g transform="translate(560 190)"><path d="M0 40 L170 40 L150 70 L20 70Z" fill="${x.c('#c0392b')}"/><rect x="40" y="10" width="70" height="30" fill="${x.c('#f4f1e0')}"/><rect x="30" y="2" width="90" height="8" fill="${x.c('#2c3e50')}"/></g>`+
  `<g fill="${x.c('#6a7a6a')}"><path d="M0 170 L0 150 Q120 130 240 160 L240 170Z"/></g>`;
B.park = x => skyDef(x)+sunmoon(x)+ridge(x,200,24,'#6f8f78',8)+hills(x,240,18,'#4f8f46')+
  `<rect y="268" width="${W}" height="14" fill="${x.c('#2f6c8a')}" opacity=".7"/>`+Array.from({length:12},()=>oak(x,x.R(10,W-10),x.R(250,300),x.R(90,170),x.P(['#2f6f36','#3c8a3c','#2a6030']))).join('')+
  `<path d="M0 318 L${W} 300 L${W} 330 L0 345Z" fill="${x.c('#8a6a3a')}"/>`+Array.from({length:18},(_,i)=>`<path d="M${i*54} ${318-i*1} L${i*54} ${346-i*1.4}" stroke="${x.c('#5a4020')}" stroke-width="3"/>`).join('')+grass(x,'#2f7a36',30);
B.bungalow = x => { const n = Object.assign({},x,{tod:3}); n.c = h=>mix(h,'#0b1236',.5);
  return `<defs><linearGradient id="hs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050818"/><stop offset="1" stop-color="#2b3a5a"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#hs)"/>`+sunmoon(n).replace(/<g opacity[^]*?<\/g>/g,'')+
  `<rect y="230" width="${W}" height="130" fill="#1a2a22"/>`+
  `<g><rect x="250" y="110" width="460" height="150" fill="#e8e4da"/><path d="M230 112 L480 40 L730 112Z" fill="#4a2a24"/><path d="M230 112 L480 40" stroke="#222" stroke-width="3"/>`+
  `<rect x="250" y="110" width="460" height="10" fill="#1c1c1c"/><rect x="250" y="190" width="460" height="8" fill="#1c1c1c"/>`+
  [300,400,560,640].map((a,i)=>`<rect x="${a}" y="${i%2?130:132}" width="46" height="52" fill="${i==1?'#ffd27a':'#1c2430'}" stroke="#1c1c1c" stroke-width="4"><animate attributeName="opacity" values="1;${i==1?.45:1};1" dur="${2+i}s" repeatCount="indefinite"/></rect>`).join('')+
  Array.from({length:7},(_,i)=>`<rect x="${262+i*66}" y="198" width="8" height="62" fill="#f4f1e0"/>`).join('')+`<rect x="250" y="196" width="460" height="7" fill="#1c1c1c"/><rect x="450" y="212" width="60" height="48" fill="#3a2a20"/></g>`+
  Array.from({length:6},()=>{ const px=x.R(0,W), hh=x.R(150,230); return `<path d="M${f(px)} 300 q-4 -${f(hh/2)} 2 -${f(hh)}" stroke="#14201a" stroke-width="6" fill="none"/>`+Array.from({length:8},(_,k)=>`<path d="M${f(px)} ${f(300-hh+k*9)} q${k%2?30:-30} -12 ${k%2?46:-46} 6" stroke="#1d3a2a" stroke-width="2.2" fill="none"/>`).join(''); }).join('')+
  `<rect y="260" width="${W}" height="100" fill="#cfd8e0" opacity=".16"><animate attributeName="opacity" values=".1;.26;.1" dur="7s" repeatCount="indefinite"/></rect><rect y="200" width="${W}" height="140" fill="#cfd8e0" opacity=".08"/>`; };
B.haunt = x => `<rect width="${W}" height="${H}" fill="#161a26"/>`+Array.from({length:14},(_,i)=>`<rect x="${i*70}" y="0" width="66" height="250" fill="${i%2?'#1c2130':'#202638'}"/>`).join('')+
  [150,420,690].map((a,i)=>`<rect x="${a}" y="60" width="110" height="150" fill="#2a3a5a" stroke="#0c0e14" stroke-width="7"/><path d="M${a+55} 60 v150 M${a} 135 h110" stroke="#0c0e14" stroke-width="4"/><path d="M${a+10} 70 L${a+100} 200" stroke="#cfe0ff" stroke-width="2" opacity=".18"/>`).join('')+
  `<rect y="250" width="${W}" height="110" fill="#10131c"/>`+Array.from({length:16},(_,i)=>`<rect x="${i*62}" y="${250+(i%2)*28}" width="62" height="28" fill="${(i+Math.floor(i/1))%2?'#1b2030':'#0b0d14'}"/>`).join('')+
  `<g fill="#0a0c12"><path d="M60 250 h90 l-6 -80 h-78z"/><rect x="760" y="190" width="120" height="60"/></g>`+`${glow(480,40,200,'#8aa8ff',.25)}`+
  `<rect y="230" width="${W}" height="130" fill="#cfd8e0" opacity=".08"><animate attributeName="opacity" values=".05;.16;.05" dur="6s" repeatCount="indefinite"/></rect>`;
B.temple = x => skyDef(x)+sunmoon(x)+`<rect y="300" width="${W}" height="60" fill="${x.c('#a8a090')}"/>`+
  `<g><rect x="240" y="180" width="480" height="125" fill="${x.c('#c0392b')}"/>`+[250,330,410,490,570,650].map(a=>`<rect x="${a}" y="190" width="14" height="115" fill="${x.c('#7b1f16')}"/>`).join('')+
  `<path d="M200 182 Q480 100 760 182 L740 168 Q480 80 220 168Z" fill="${x.c('#2e8b57')}"/><path d="M230 140 Q480 60 730 140 L715 128 Q480 40 245 128Z" fill="${x.c('#e6b422')}"/><path d="M200 182 q-20 -20 -6 -36 M760 182 q20 -20 6 -36" stroke="${x.c('#e6b422')}" stroke-width="6" fill="none"/>`+
  `<rect x="420" y="225" width="120" height="80" fill="${x.c('#3a1a10')}"/></g>`+
  Array.from({length:5},(_,i)=>`<g transform="translate(${70+i*40} 120)"><line x1="0" y1="0" x2="0" y2="20" stroke="#a33" stroke-width="2"/><ellipse cx="0" cy="34" rx="14" ry="18" fill="#e74c3c"/>${glow(0,34,26,'#ffb347',.5)}</g>`).join('')+
  `<g transform="translate(820 250)"><rect width="50" height="50" fill="${x.c('#7a4a2a')}"/><path d="M10 0 q-14 -20 0 -40 M28 0 q10 -22 -4 -44" stroke="#9a9a9a" stroke-width="5" fill="none" opacity=".6"/>${glow(25,10,40,'#ff8a2a',.5)}</g>`;
B.skyline = x => skyDef(x)+sunmoon(x)+`<rect y="250" width="${W}" height="110" fill="${x.c('#2f6c9a')}"/>`+
  Array.from({length:14},(_,i)=>{ const px=i*70+x.R(-8,8), h=x.R(60,170), w=x.R(40,66); return `<rect x="${f(px)}" y="${f(250-h)}" width="${f(w)}" height="${f(h)}" fill="${x.c(x.P(['#7b8fae','#8a9cb8','#6a7a96']))}"/>`+Array.from({length:Math.floor(h/18)},(_,k)=>`<rect x="${f(px+6)}" y="${f(250-h+8+k*18)}" width="${f(w-12)}" height="5" fill="${x.tod>=2?'#ffe08a':x.c('#b9d0e6')}" opacity=".8"/>`).join(''); }).join('')+
  `<g fill="${x.c('#9aa5b0')}"><rect x="400" y="110" width="40" height="150"/><rect x="460" y="110" width="40" height="150"/><rect x="520" y="110" width="40" height="150"/><path d="M380 108 L580 108 L600 96 L560 96 L560 100 L380 100Z" fill="${x.c('#c9d3dc')}"/></g>`+
  Array.from({length:9},(_,i)=>`<path d="M${i*110} 290 q20 -6 40 0 t40 0" stroke="${x.c('#bfe6f5')}" stroke-width="1.5" fill="none" opacity=".6"/>`).join('')+`<rect y="310" width="${W}" height="50" fill="${x.c('#8a8f96')}"/>`;
B.supertree = x => { const n=Object.assign({},x,{tod:3}); n.c=h=>mix(h,'#0b1236',.45);
  return `<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070a1c"/><stop offset="1" stop-color="#2a1a4a"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#sg)"/>`+Array.from({length:60},()=>`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(0,200))}" r="${f(x.R(.4,1.3))}" fill="#fff" opacity=".7"/>`).join('')+
  [[120,260,'#e91e8c'],[330,300,'#00e5ff'],[560,250,'#a6ff00'],[780,290,'#ffb300']].map(([a,h,c])=>`<path d="M${a-8} 340 L${a-3} ${340-h} L${a+3} ${340-h} L${a+8} 340Z" fill="#3a2f2a"/>${glow(a,340-h,95,c,.55)}<path d="M${a-85} ${340-h} Q${a} ${340-h-70} ${a+85} ${340-h} Q${a} ${340-h-18} ${a-85} ${340-h}Z" fill="${c}" opacity=".9"/>`).join('')+
  `<rect y="330" width="${W}" height="30" fill="#0e1a14"/><path d="M0 332 Q${W/2} 318 ${W} 332" stroke="#4fd1c5" stroke-width="3" fill="none"/>`; };
B.jewel = x => `<defs><linearGradient id="jg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f5"/><stop offset="1" stop-color="#f3f7f3"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#jg)"/>`+
  Array.from({length:12},(_,i)=>`<path d="M480 -10 L${i*90-60} ${H}" stroke="#fff" stroke-width="3" opacity=".7"/>`).join('')+
  `<rect x="440" y="0" width="80" height="300" fill="#e6f6ff" opacity=".95"/>`+Array.from({length:20},(_,i)=>`<line x1="${446+i*4}" y1="0" x2="${446+i*4}" y2="300" stroke="#9fd8f0" stroke-width="2" opacity=".8"><animate attributeName="y1" values="0;-40;0" dur="${1+i%4*.3}s" repeatCount="indefinite"/></line>`).join('')+
  `<ellipse cx="480" cy="306" rx="150" ry="18" fill="#9fd8f0"/>`+Array.from({length:14},()=>oak(x,x.R(20,W-20),x.R(300,350),x.R(50,100),'#2f8a4a')).join('')+`<rect y="330" width="${W}" height="30" fill="#d7d2c8"/>`;

/* weather overlays */
function weatherFx(x){
  const wx = x.wx; let s='';
  if (wx==='rain'||wx==='storm'){ const n = wx==='storm'?90:55; s+=`<g class="rainfx" stroke="#cfe3f5" stroke-width="1.3" opacity=".55">`+Array.from({length:n},()=>{ const px=x.R(-40,W), py=x.R(-300,H); return `<line x1="${f(px)}" y1="${f(py)}" x2="${f(px-10)}" y2="${f(py+30)}"/>`; }).join('')+`</g>`; if (wx==='storm') s+=`<rect width="${W}" height="${H}" fill="#fff" class="flash"/>`; }
  if (wx==='snow'){ s+=`<g class="snowfx" fill="#fff" opacity=".85">`+Array.from({length:70},()=>`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(-200,H))}" r="${f(x.R(1.2,3.2))}"/>`).join('')+`</g>`; }
  if (wx==='fog'){ s+=`<rect width="${W}" height="${H}" fill="#dfe5ea" opacity=".35" class="fogfx"/><rect y="180" width="${W}" height="180" fill="#dfe5ea" opacity=".25"/>`; }
  if (wx==='sandstorm'){ s+=`<rect width="${W}" height="${H}" fill="#c9954a" opacity=".38" class="fogfx"/>`+`<g class="windfx" stroke="#f0d8a0" opacity=".5">`+Array.from({length:30},()=>{const px=x.R(-100,W),py=x.R(0,H);return `<line x1="${f(px)}" y1="${f(py)}" x2="${f(px+60)}" y2="${f(py+4)}" stroke-width="1.6"/>`;}).join('')+`</g>`; }
  if (wx==='ashfall'){ s+=`<g class="snowfx" fill="#c8c0b8" opacity=".7">`+Array.from({length:55},()=>`<circle cx="${f(x.R(0,W))}" cy="${f(x.R(-200,H))}" r="${f(x.R(1,2.4))}"/>`).join('')+`</g>`; }
  if (wx==='wind'){ s+=`<g class="windfx" stroke="#ffffff" opacity=".35">`+Array.from({length:14},()=>{const px=x.R(-100,W),py=x.R(40,H);return `<path d="M${f(px)} ${f(py)} q30 -10 60 0 t60 0" fill="none" stroke-width="1.6"/>`;}).join('')+`</g>`; }
  if (wx==='heat'){ s+=`<rect width="${W}" height="${H}" fill="#ffb347" opacity=".14"/>`; }
  return s;
}
function actors(x, em){
  if (!em) return '';
  let list; try { list = Array.from(new Intl.Segmenter(undefined,{granularity:'grapheme'}).segment(em.replace(/\s+/g,''))).map(g=>g.segment); } catch(e){ list = Array.from(em.replace(/\s+/g,'')); }
  list = list.slice(0,4); const n = list.length; if (!n) return '';
  const xs = {1:[480],2:[340,620],3:[250,480,710],4:[190,390,590,790]}[n];
  return list.map((e,i)=>{ const size = i===Math.floor(n/2) ? 150 : 100; const y = size===150 ? 268 : 280 + (i%2)*6;
    return `<text class="actor" x="${xs[i]}" y="${y}" font-size="${size}" text-anchor="middle" style="animation-delay:${i*.7}s">${e}</text>`; }).join('');
}
G.art = function(spec, S, seedStr){
  try {
    const x = ctxFor(spec, S, seedStr); const fn = B[x.biome] || B.meadow;
    const body = fn(x);
    const night = x.tod===3 && !INDOOR.includes(x.biome) && x.biome!=='tower';
    const grad = `<defs><linearGradient id="vg" x1="0" y1="0" x2="0" y2="1"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient><filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity=".6"/></filter></defs>`;
    const tintLayer = INDOOR.includes(x.biome) ? '' : '';
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img">${body}${INDOOR.includes(x.biome)?'':weatherFx(x)}${grad}<rect width="${W}" height="${H}" fill="url(#vg)"/><g filter="url(#sh)" font-family="'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif">${actors(x, x.em)}</g></svg>`;
  } catch(e){ return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" fill="#222"/><text x="480" y="190" fill="#ccc" text-anchor="middle" font-size="22">${String(e.message).slice(0,60)}</text></svg>`; }
};
G.biomes = Object.keys(B).concat(Object.keys(ALIAS));
/* let other story files register extra biomes */
G.artKit = { B, W, H, f, mix, skyDef, sunmoon, ridge, hills, glow, grass, oak };
G.addBiome = (name, fn, indoor) => { B[name]=fn; if (indoor && !INDOOR.includes(name)) INDOOR.push(name); if (!G.biomes.includes(name)) G.biomes.push(name); };
})();
