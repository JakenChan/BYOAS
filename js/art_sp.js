/* Scene art for "Stolen Sky": the cell, corridors, the habitat ring, the lab, the engine room, the hangar, the bridge, a window on Earth, and the vents */
(function(){
const G = globalThis.G, K = G.artKit, W = K.W, H = K.H, f = K.f, glow = K.glow;
const stars = (x, n) => Array.from({length:n}, () => `<circle cx="${f(x.R(0,W))}" cy="${f(x.R(0,H))}" r="${f(x.R(.4,1.6))}" fill="#fff" opacity="${f(x.R(.3,.95))}"/>`).join('');
const panel = (c1, c2) => `<defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#pg)"/>`;

G.addBiome('cellblock', x => panel('#0b1a22','#12303a')+glow(480,120,360,'#4fe0ff',.28)+
  `<rect x="140" y="60" width="680" height="250" fill="#0e2630" stroke="#2a5a6a" stroke-width="6"/>`+
  Array.from({length:14},(_,i)=>`<rect x="${160+i*47}" y="60" width="8" height="250" fill="#8fe8ff" opacity=".55"/>`).join('')+
  `<rect x="140" y="300" width="680" height="14" fill="#1c4452"/><rect x="0" y="310" width="${W}" height="50" fill="#0a161c"/>`+
  Array.from({length:5},(_,i)=>`<rect x="${210+i*120}" y="${250+(i%2)*10}" width="64" height="40" rx="8" fill="#23505f"/>`).join('')+
  `<circle cx="480" cy="40" r="14" fill="#bff6ff" opacity=".85"/>`, true);
G.addBiome('corridor', x => panel('#0a1219','#16242f')+
  `<path d="M0 0 L330 120 L330 250 L0 360Z" fill="#101c26"/><path d="M${W} 0 L630 120 L630 250 L${W} 360Z" fill="#101c26"/><rect x="330" y="120" width="300" height="130" fill="#050a0f"/>`+
  `<path d="M330 250 L630 250 L${W} 360 L0 360Z" fill="#1c2e3a"/><path d="M330 120 L630 120 L${W} 0 L0 0Z" fill="#14222c"/>`+
  Array.from({length:6},(_,i)=>`<rect x="${340+i*50}" y="${126-i*2}" width="30" height="5" fill="#7ff0ff" opacity=".85"/>`).join('')+
  glow(480,185,160,'#2ad8ff',.2)+`<path d="M60 300 L330 250 M900 300 L630 250" stroke="#3a6a7a" stroke-width="3" opacity=".6"/>`, true);
G.addBiome('ring', x => `<rect width="${W}" height="${H}" fill="#07121a"/>`+stars(x,40)+
  `<path d="M0 300 Q480 110 ${W} 300 L${W} ${H} L0 ${H}Z" fill="#2f6a3a"/><path d="M0 300 Q480 110 ${W} 300" stroke="#bff6ff" stroke-width="4" fill="none" opacity=".7"/>`+
  Array.from({length:8},(_,i)=>{ const px=110+i*105, py=250-Math.sin((i/7)*Math.PI)*62; return `<ellipse cx="${px}" cy="${f(py-14)}" rx="${f(x.R(18,32))}" ry="${f(x.R(22,36))}" fill="#4fae5e"/><rect x="${px-3}" y="${f(py)}" width="6" height="22" fill="#4a3a28"/>`; }).join('')+
  glow(480,120,300,'#fff5c8',.4)+`<rect x="0" y="0" width="${W}" height="38" fill="#0b1c26"/>`, true);
G.addBiome('lab', x => panel('#0c1a14','#142a20')+glow(300,200,260,'#5dffb0',.3)+glow(680,200,240,'#7ff0ff',.22)+
  Array.from({length:4},(_,i)=>`<rect x="${90+i*215}" y="100" width="110" height="190" rx="22" fill="#0d3a2c" stroke="#7dffc0" stroke-width="4" opacity=".92"/><ellipse cx="${145+i*215}" cy="${210+(i%2)*12}" rx="26" ry="40" fill="#8fffd0" opacity=".55"/>`).join('')+
  `<rect x="0" y="296" width="${W}" height="64" fill="#0a1812"/><rect x="60" y="290" width="840" height="12" fill="#1f4a3a"/>`+
  Array.from({length:18},()=>`<circle cx="${f(x.R(80,880))}" cy="${f(x.R(120,280))}" r="${f(x.R(1.5,4))}" fill="#c8ffe6" opacity=".7"/>`).join(''), true);
G.addBiome('engineroom', x => panel('#1a0c08','#2a140c')+glow(480,200,380,'#ff7a2a',.5)+
  `<rect x="360" y="40" width="240" height="260" rx="30" fill="#2a1410" stroke="#ff9a4a" stroke-width="6"/><rect x="400" y="80" width="160" height="180" rx="80" fill="#ff7a2a" opacity=".8"/><rect x="440" y="110" width="80" height="120" rx="40" fill="#ffe08a"/>`+
  Array.from({length:6},(_,i)=>`<rect x="${40+i*50}" y="${80+(i%3)*30}" width="22" height="${200-(i%3)*30}" fill="#3a1e14"/><rect x="${660+i*44}" y="${70+(i%2)*40}" width="20" height="${210-(i%2)*40}" fill="#3a1e14"/>`).join('')+
  `<rect y="300" width="${W}" height="60" fill="#160a06"/>`, true);
G.addBiome('hangar', x => `<rect width="${W}" height="${H}" fill="#0a131c"/>`+glow(480,140,420,'#a8d8ff',.22)+
  `<rect x="60" y="30" width="840" height="270" fill="#101e2c" stroke="#2a4a64" stroke-width="6"/><rect x="60" y="30" width="840" height="270" fill="none" stroke="#7fd0ff" stroke-width="2" stroke-dasharray="14 10" opacity=".5"/>`+
  `<path d="M300 280 L360 190 L600 190 L660 280Z" fill="#c8d8e6"/><path d="M360 190 L420 130 L540 130 L600 190Z" fill="#a8bcd0"/><circle cx="480" cy="180" r="16" fill="#7fd0ff"/><rect x="330" y="280" width="300" height="14" fill="#6a8aa0"/>`+
  `<rect y="300" width="${W}" height="60" fill="#0c1822"/>`+Array.from({length:6},(_,i)=>`<rect x="${100+i*140}" y="306" width="60" height="8" fill="#ffd24a" opacity=".6"/>`).join(''), true);
G.addBiome('bridge', x => `<rect width="${W}" height="${H}" fill="#060a14"/>`+stars(x,80)+
  `<path d="M0 360 L0 120 Q480 20 ${W} 120 L${W} 360Z" fill="#101a2a"/><path d="M80 300 L80 140 Q480 50 880 140 L880 300Z" fill="#050a18" stroke="#4fe0ff" stroke-width="3"/>`+
  `<circle cx="640" cy="170" r="70" fill="#2a6ac0"/><ellipse cx="620" cy="160" rx="40" ry="14" fill="#5aa8ff" opacity=".6"/><circle cx="640" cy="170" r="70" fill="none" stroke="#8fd0ff" stroke-width="3" opacity=".5"/>`+
  `<rect y="300" width="${W}" height="60" fill="#0c1424"/>`+Array.from({length:7},(_,i)=>`<rect x="${120+i*110}" y="${290-(i%2)*10}" width="70" height="26" rx="6" fill="#18304a" stroke="#4fe0ff" stroke-width="2"/>`).join(''), true);
G.addBiome('earthview', x => `<rect width="${W}" height="${H}" fill="#02040c"/>`+stars(x,110)+
  `<circle cx="330" cy="520" r="420" fill="#1a52a8"/><path d="M180 200 Q260 160 330 190 Q410 140 470 200" stroke="#4aa86a" stroke-width="34" fill="none" opacity=".85" stroke-linecap="round"/><path d="M260 250 Q310 230 360 260" stroke="#e8f4ff" stroke-width="16" fill="none" opacity=".7" stroke-linecap="round"/>`+
  `<circle cx="330" cy="520" r="420" fill="none" stroke="#8fd8ff" stroke-width="6" opacity=".6"/>`+
  `<rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="#1a2a3a" stroke-width="30"/><rect x="${W/2-4}" y="0" width="8" height="${H}" fill="#1a2a3a"/>`, true);
G.addBiome('vent', x => `<rect width="${W}" height="${H}" fill="#06090d"/>`+
  `<path d="M0 90 L${W} 90 M0 270 L${W} 270" stroke="#2a3a48" stroke-width="10"/><rect y="100" width="${W}" height="160" fill="#0c141c"/>`+
  Array.from({length:12},(_,i)=>`<rect x="${i*84}" y="100" width="6" height="160" fill="#1c2c3a"/>`).join('')+
  glow(900,180,160,'#7ff0ff',.45)+`<rect x="60" y="130" width="150" height="100" rx="10" fill="#0a1218" stroke="#3a5a6a" stroke-width="3"/>`+
  Array.from({length:9},(_,i)=>`<path d="M${70+i*16} 140 L${70+i*16} 220" stroke="#2a4252" stroke-width="3"/>`).join(''), true);
})();
