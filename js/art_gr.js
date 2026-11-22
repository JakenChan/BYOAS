/* Extra scene art for the Greek-myth story: Acropolis, agora, Delphi, Olympus, the Underworld, a plane cabin, the Colosseum, a forge, a wreck and Gorgon Island */
(function(){
const G = globalThis.G, K = G.artKit, W = K.W, H = K.H, f = K.f, glow = K.glow, mix = K.mix, skyDef = K.skyDef, sunmoon = K.sunmoon, ridge = K.ridge, hills = K.hills, grass = K.grass;
const col = (x,px,py,h,w,c) => `<rect x="${f(px)}" y="${f(py-h)}" width="${w}" height="${h}" fill="${x.c(c||'#e9e2d0')}"/><rect x="${f(px-3)}" y="${f(py-h-7)}" width="${w+6}" height="8" fill="${x.c('#d8d0bb')}"/><rect x="${f(px-3)}" y="${f(py-2)}" width="${w+6}" height="6" fill="${x.c('#d8d0bb')}"/>`;
const olive = (x,px,py,s) => `<rect x="${f(px-3)}" y="${f(py-s*.5)}" width="6" height="${f(s*.5)}" fill="${x.c('#5a4630')}"/><ellipse cx="${f(px)}" cy="${f(py-s*.6)}" rx="${f(s*.45)}" ry="${f(s*.3)}" fill="${x.c('#8fa57a')}"/><ellipse cx="${f(px+s*.2)}" cy="${f(py-s*.5)}" rx="${f(s*.3)}" ry="${f(s*.22)}" fill="${x.c('#7a9366')}"/>`;
const sea = (x,y,c1) => `<rect y="${y}" width="${W}" height="${H-y}" fill="${x.c(c1||'#2a78a8')}"/>`+Array.from({length:12},()=>`<path d="M${f(x.R(0,W))} ${f(x.R(y+8,H-6))} q10 -6 20 0 t20 0" stroke="${x.c('#8fd0e8')}" stroke-width="1.5" fill="none" opacity=".5"/>`).join('');

G.addBiome('acropolis', x => skyDef(x)+sunmoon(x)+sea(x,238)+
  `<path d="M170 ${H} L250 190 L330 175 L630 175 L720 190 L800 ${H}Z" fill="${x.c('#a89a80')}"/><path d="M250 190 L330 175 L630 175 L720 190Z" fill="${x.c('#b8aa90')}"/>`+
  `<rect x="300" y="168" width="360" height="10" fill="${x.c('#e4dcc8')}"/><rect x="312" y="160" width="336" height="9" fill="${x.c('#ece5d3')}"/>`+
  Array.from({length:8},(_,i)=>col(x,330+i*42,160,62,22)).join('')+
  `<path d="M310 98 L480 56 L650 98Z" fill="${x.c('#e4dcc8')}"/><rect x="310" y="96" width="340" height="10" fill="${x.c('#d8d0bb')}"/>`+
  olive(x,150,H-20,70)+olive(x,860,H-14,80)+olive(x,90,H-6,60)+grass(x,'#5f8f48',20));
G.addBiome('agora', x => skyDef(x)+sunmoon(x)+hills(x,230,16,'#9fb08a')+
  `<rect y="250" width="${W}" height="${H-250}" fill="${x.c('#d9c9a3')}"/>`+
  `<rect x="60" y="120" width="840" height="14" fill="${x.c('#c6b894')}"/><rect x="60" y="134" width="840" height="8" fill="${x.c('#a66a3c')}"/>`+
  Array.from({length:12},(_,i)=>col(x,84+i*70,262,128,20,'#efe8d4')).join('')+
  `<rect x="70" y="262" width="820" height="10" fill="${x.c('#c0b08a')}"/>`+olive(x,40,300,90)+olive(x,930,310,100)+
  Array.from({length:6},()=>`<rect x="${f(x.R(0,W))}" y="${f(x.R(285,345))}" width="${f(x.R(18,44))}" height="5" fill="${x.c('#b9a77c')}"/>`).join(''));
G.addBiome('oracle', x => skyDef(x)+sunmoon(x)+ridge(x,150,90,'#8c8aa0',7)+ridge(x,215,100,'#6e6c80',6)+
  `<path d="M0 ${H} L0 250 Q200 232 430 262 L960 240 L960 ${H}Z" fill="${x.c('#8a7c66')}"/>`+
  `<ellipse cx="500" cy="276" rx="150" ry="14" fill="${x.c('#b8aa90')}"/>`+Array.from({length:10},(_,i)=>col(x,370+i*28,270,58,11)).join('')+
  `<ellipse cx="500" cy="190" rx="150" ry="12" fill="${x.c('#e4dcc8')}"/><path d="M360 188 Q500 120 640 188Z" fill="${x.c('#c9bfa6')}"/>`+
  [430,500,570].map(a=>`<path d="M${a} 270 q-16 -40 0 -80 q16 -40 0 -80" stroke="#e8e8f0" stroke-width="10" fill="none" opacity=".35" stroke-linecap="round"/>`).join('')+
  `<path d="M60 262 q10 -40 20 0 M120 270 q8 -30 18 0" stroke="${x.c('#3f6f3a')}" stroke-width="10" fill="none"/>`+grass(x,'#5f8f48',14));
G.addBiome('olympus', x => { const n=Object.assign({},x,{tod:1}); n.c=h=>x.c(h);
  return `<defs><linearGradient id="og" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f9be8"/><stop offset=".7" stop-color="#d8ecfa"/><stop offset="1" stop-color="#fff2c8"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#og)"/>`+glow(480,120,360,'#ffe9a0',.55)+
  Array.from({length:9},(_,i)=>`<g opacity=".92" fill="#fff"><ellipse cx="${f(x.R(0,W))}" cy="${f(x.R(250,340))}" rx="${f(x.R(90,200))}" ry="${f(x.R(22,44))}"/></g>`).join('')+
  `<rect x="230" y="222" width="500" height="18" fill="${x.c('#f6ecc8')}"/><rect x="250" y="206" width="460" height="16" fill="${x.c('#fff6d8')}"/>`+Array.from({length:9},(_,i)=>col(x,280+i*52,206,84,24,'#fffbe8')).join('')+
  `<path d="M262 112 L480 52 L698 112Z" fill="${x.c('#ffe7a0')}"/><rect x="262" y="110" width="436" height="12" fill="${x.c('#ffd86a')}"/><circle cx="480" cy="92" r="12" fill="#ffd24a"/>`+
  `<ellipse cx="480" cy="348" rx="520" ry="48" fill="#fff"/>`; });
G.addBiome('underworld', x => `<rect width="${W}" height="${H}" fill="#07090d"/>`+glow(480,300,420,'#2fd68a',.28)+glow(120,140,200,'#6a5af0',.18)+
  `<path d="M0 270 Q240 244 480 272 T960 262 L960 ${H} L0 ${H}Z" fill="#0b2a22"/><path d="M0 292 Q240 272 480 296 T960 288" stroke="#38e8a0" stroke-width="3" fill="none" opacity=".6"/>`+
  Array.from({length:6},(_,i)=>`<path d="M${40+i*170} 262 L${40+i*170} 130 a40 40 0 0 1 80 0 L${120+i*170} 262" fill="none" stroke="#2a2f3c" stroke-width="14"/>`).join('')+
  `<path d="M360 300 q60 14 120 0 l-14 -22 l-92 0Z" fill="#2c2418"/><path d="M468 276 l0 -60" stroke="#4a3b28" stroke-width="4"/>`+
  Array.from({length:14},()=>`<ellipse cx="${f(x.R(0,W))}" cy="${f(x.R(180,330))}" rx="${f(x.R(40,110))}" ry="${f(x.R(6,14))}" fill="#9fe8c8" opacity=".08"/>`).join(''), true);
G.addBiome('cabin', x => `<rect width="${W}" height="${H}" fill="#cfd5dc"/><rect y="0" width="${W}" height="60" fill="#b8c0ca"/>`+
  Array.from({length:6},(_,i)=>`<rect x="${70+i*150}" y="100" width="70" height="92" rx="30" fill="#2a3446"/><rect x="${76+i*150}" y="106" width="58" height="80" rx="26" fill="${i%2?'#7db7ee':'#9ccbf5'}"/><path d="M${76+i*150} 170 q30 -26 58 0 v16 h-58Z" fill="#fff" opacity=".7"/>`).join('')+
  `<rect y="210" width="${W}" height="150" fill="#2c3a5a"/>`+Array.from({length:5},(_,i)=>`<g transform="translate(${30+i*190} 214)"><rect width="150" height="150" rx="16" fill="#3b4f86"/><rect x="14" y="-30" width="122" height="50" rx="14" fill="#34457a"/><rect x="40" y="-10" width="70" height="26" fill="#e8ecf4" opacity=".85"/></g>`).join('')+
  `<rect y="196" width="${W}" height="6" fill="#8a94a4"/>`+Array.from({length:8},(_,i)=>`<circle cx="${60+i*125}" cy="22" r="7" fill="#fff6c8"/>`).join(''), true);
G.addBiome('colosseum', x => skyDef(x)+sunmoon(x)+hills(x,250,14,'#8fa57a')+
  `<path d="M90 300 L90 150 Q480 90 870 150 L870 300Z" fill="${x.c('#c9a874')}"/>`+
  [0,1,2].map(r=>Array.from({length:14},(_,i)=>`<path d="M${112+i*55} ${290-r*55} v-28 a14 14 0 0 1 28 0 v28Z" fill="${x.c('#5a4126')}"/>`).join('')).join('')+
  `<path d="M90 150 Q480 90 870 150 L870 140 Q480 76 90 140Z" fill="${x.c('#b8955f')}"/>`+
  `<rect y="298" width="${W}" height="62" fill="${x.c('#b9aa86')}"/>`+Array.from({length:5},()=>`<ellipse cx="${f(x.R(0,W))}" cy="${f(x.R(310,350))}" rx="${f(x.R(14,34))}" ry="5" fill="${x.c('#8a7a58')}"/>`).join('')+olive(x,60,330,70)+olive(x,910,330,70));
G.addBiome('forge', x => `<rect width="${W}" height="${H}" fill="#120a08"/>`+glow(480,230,380,'#ff6a1c',.6)+glow(150,260,160,'#ff9a3c',.35)+glow(820,250,150,'#ff9a3c',.3)+
  Array.from({length:8},(_,i)=>`<rect x="${i*125}" y="0" width="60" height="${f(x.R(70,150))}" fill="#2a1a14"/>`).join('')+
  `<path d="M400 340 L420 290 L540 290 L560 340Z" fill="#3a2a24"/><rect x="385" y="270" width="190" height="24" fill="#4a3a34"/><path d="M575 276 l50 -8 l0 14 l-50 4Z" fill="#4a3a34"/>`+
  `<rect x="60" y="210" width="130" height="110" fill="#2e1c14"/><rect x="82" y="238" width="86" height="52" fill="#ff7a20"/>`+
  Array.from({length:26},()=>`<circle cx="${f(x.R(340,620))}" cy="${f(x.R(150,280))}" r="${f(x.R(1,2.6))}" fill="#ffd27a"/>`).join(''), true);
G.addBiome('wreck', x => skyDef(x)+sunmoon(x)+sea(x,205,'#2f7aa6')+`<rect y="262" width="${W}" height="${H-262}" fill="${x.c('#e2c98c')}"/>`+
  `<path d="M170 300 Q300 250 520 262 L700 276 L690 318 L190 322Z" fill="${x.c('#c9d2dc')}"/><path d="M500 262 l90 -32 l30 40Z" fill="${x.c('#aab4c0')}"/>`+
  Array.from({length:6},(_,i)=>`<rect x="${230+i*70}" y="${280-i*3}" width="22" height="14" rx="6" fill="#2a3446"/>`).join('')+
  [300,420,560].map(a=>`<path d="M${a} 262 q-18 -50 4 -96 q22 -46 -4 -90" stroke="#555a62" stroke-width="16" fill="none" opacity=".45" stroke-linecap="round"/>`).join('')+glow(420,270,60,'#ff8a2a',.5)+palm(x));
function palm(x){ return `<path d="M870 330 Q860 250 880 190" stroke="${x.c('#6b4a2a')}" stroke-width="10" fill="none"/><path d="M880 190 q-50 -30 -80 10 M880 190 q40 -40 80 -4 M880 190 q-10 -50 30 -66 M880 190 q-40 -50 -10 -70" stroke="${x.c('#3f8f3a')}" stroke-width="9" fill="none"/>`; }
G.addBiome('gorgon', x => skyDef(x)+sunmoon(x)+sea(x,210,'#1f5a78')+
  `<path d="M120 ${H} Q200 230 330 220 Q430 150 520 200 Q650 190 760 240 Q840 270 880 ${H}Z" fill="${x.c('#5a5648')}"/>`+
  Array.from({length:7},(_,i)=>{ const px=210+i*80+x.R(-10,10), py=250+((i%3)*20); return `<g fill="${x.c('#b4b0a4')}"><circle cx="${f(px)}" cy="${f(py-46)}" r="10"/><rect x="${f(px-9)}" y="${f(py-36)}" width="18" height="36" rx="6"/><rect x="${f(px-16)}" y="${f(py-30)}" width="8" height="${f(x.R(14,30))}"/></g>`; }).join('')+
  glow(520,200,160,'#58e08a',.28)+grass(x,'#3f7a36',10));
})();
