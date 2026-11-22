/* Soft night scenes for the bedtime story: low contrast, slow colours, a moon in almost every picture */
(function(){
const G = globalThis.G, K = G.artKit, W = K.W, H = K.H, f = K.f, glow = K.glow;
const sky = (a, b) => `<defs><linearGradient id="bs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#bs)"/>`;
const stars = (x, n) => Array.from({length:n}, () => `<circle cx="${f(x.R(0,W))}" cy="${f(x.R(0,H*0.65))}" r="${f(x.R(.5,1.7))}" fill="#fff" opacity="${f(x.R(.3,.9))}"/>`).join('');
const moon = (cx, cy, r) => glow(cx, cy, r*4.5, '#fff6d0', .35) + `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff3c4"/><circle cx="${cx-r*.3}" cy="${cy-r*.2}" r="${r*.18}" fill="#f0e2a8" opacity=".6"/><circle cx="${cx+r*.25}" cy="${cy+r*.25}" r="${r*.12}" fill="#f0e2a8" opacity=".5"/>`;
const hill = (y, amp, col, seed, x) => { let d = `M0 ${H} L0 ${y}`; for (let i = 0; i <= 8; i++) d += ` Q${i*120-60} ${f(y - amp*(0.4+x.R(0,1)))} ${i*120} ${f(y + x.R(-8,8))}`; return `<path d="${d} L${W} ${H}Z" fill="${col}"/>`; };
const water = (y, a, b) => `<defs><linearGradient id="bw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect y="${y}" width="${W}" height="${H-y}" fill="url(#bw)"/>`;
const glints = (x, y0, n) => Array.from({length:n}, () => `<rect x="${f(x.R(0,W-60))}" y="${f(x.R(y0,H-6))}" width="${f(x.R(20,70))}" height="2" rx="1" fill="#fff6d0" opacity="${f(x.R(.15,.45))}"/>`).join('');
const boat = (cx, cy) => `<path d="M${cx-60} ${cy} Q${cx} ${cy+34} ${cx+60} ${cy} L${cx+44} ${cy-8} L${cx-44} ${cy-8}Z" fill="#e9dfc8"/><rect x="${cx-2}" y="${cy-48}" width="4" height="40" fill="#cdbf9e"/><path d="M${cx+2} ${cy-46} L${cx+36} ${cy-18} L${cx+2} ${cy-18}Z" fill="#fff6d8" opacity=".92"/>${glow(cx, cy-14, 70, '#ffe9a8', .35)}`;
const lamp = (cx, cy, c) => glow(cx, cy, 36, c || '#ffd88a', .5) + `<circle cx="${cx}" cy="${cy}" r="5" fill="#fff0c0"/>`;
const tree = (cx, base, h, col) => `<path d="M${cx} ${base-h} L${cx-h*.28} ${base} L${cx+h*.28} ${base}Z" fill="${col}"/><path d="M${cx} ${base-h*.78} L${cx-h*.34} ${base-h*.22} L${cx+h*.34} ${base-h*.22}Z" fill="${col}"/>`;

G.addBiome('moonwindow', x => sky('#0d1630','#1d2a4a') + stars(x,60) + moon(660,120,46) +
  `<rect x="150" y="30" width="660" height="300" rx="10" fill="none" stroke="#3b4a72" stroke-width="12"/><rect x="474" y="30" width="12" height="300" fill="#3b4a72"/><rect x="150" y="170" width="660" height="10" fill="#3b4a72"/>` +
  `<rect y="300" width="${W}" height="60" fill="#241b36"/><path d="M0 330 Q480 290 ${W} 330 L${W} ${H} L0 ${H}Z" fill="#3a2d58"/><circle cx="250" cy="305" r="16" fill="#e9dfc8" opacity=".9"/>`, true);
G.addBiome('moonriver', x => sky('#0b1430','#1c2d55') + stars(x,70) + moon(700,100,38) + hill(230,40,'#16213f','a',x) + water(236,'#223a6a','#122042') + glints(x,246,12) + boat(430,290), false);
G.addBiome('meadowlamps', x => sky('#0e1a38','#24365e') + stars(x,50) + moon(180,90,34) + hill(215,50,'#1d3a46','a',x) + hill(262,40,'#16303a','b',x) +
  Array.from({length:11}, (_,i) => lamp(60+i*85+x.R(-12,12), 230+x.R(0,90), i%3===0?'#ffd88a':(i%3===1?'#ffc6a0':'#d6f0ff'))).join('') + `<rect y="320" width="${W}" height="40" fill="#10242c"/>`, false);
G.addBiome('owlwood', x => sky('#0a1228','#16264a') + stars(x,40) + moon(480,70,30) +
  Array.from({length:14}, (_,i) => tree(30+i*70+x.R(-10,10), 330, x.R(150,250), i%2?'#112238':'#0d1b2e')).join('') + `<rect y="320" width="${W}" height="40" fill="#0a1626"/>` +
  `<circle cx="640" cy="205" r="22" fill="#2a3a5a"/><circle cx="630" cy="200" r="7" fill="#ffe9a8"/><circle cx="652" cy="200" r="7" fill="#ffe9a8"/>`, false);
G.addBiome('reedbank', x => sky('#10183a','#2a3a62') + stars(x,50) + moon(740,90,34) + water(210,'#2b4572','#142446') + glints(x,222,10) +
  Array.from({length:26}, (_,i) => { const rx = 20+i*37+x.R(-8,8), rh = x.R(90,170); return `<path d="M${rx} 340 Q${rx+x.R(-14,14)} ${340-rh*.6} ${rx+x.R(-20,20)} ${340-rh}" stroke="#3d5a52" stroke-width="3" fill="none"/><ellipse cx="${rx+x.R(-20,20)}" cy="${340-rh}" rx="4" ry="11" fill="#5a4a3a"/>`; }).join(''), false);
G.addBiome('belltower', x => sky('#10183a','#26365e') + stars(x,60) + moon(210,110,36) + hill(280,30,'#16213f','a',x) +
  `<rect x="560" y="70" width="90" height="250" fill="#2a3150"/><path d="M552 74 L605 20 L658 74Z" fill="#3a4268"/><rect x="580" y="96" width="50" height="62" rx="25" fill="#10162c"/><path d="M590 156 Q605 90 620 156Z" fill="#e0c070"/>` + lamp(605,130,'#ffe9a8') + `<rect y="318" width="${W}" height="42" fill="#0f1a30"/>`, false);
G.addBiome('singingstones', x => sky('#14183c','#2c3a66') + stars(x,70) + moon(500,80,30) + hill(250,36,'#1d2c4a','a',x) +
  Array.from({length:9}, (_,i) => { const sx = 90+i*95, sh = x.R(60,130); return `<rect x="${sx}" y="${320-sh}" width="${x.R(28,48)}" height="${sh}" rx="14" fill="#3a4a72"/>${lamp(sx+16, 320-sh+14, i%2?'#bfe0ff':'#ffd8f0')}`; }).join('') + `<rect y="320" width="${W}" height="40" fill="#121c36"/>`, false);
G.addBiome('quietsea', x => sky('#0b1230','#26386a') + stars(x,80) + moon(480,90,42) + water(200,'#2a4478','#0e1a3c') + glints(x,210,18) + `<path d="M0 200 L${W} 200" stroke="#9fc0ff" stroke-width="1" opacity=".3"/>` + boat(300,300), false);
G.addBiome('cloudharbor', x => sky('#1c2448','#4a5a8c') + stars(x,40) + moon(780,80,32) +
  Array.from({length:9}, (_,i) => `<ellipse cx="${60+i*110+x.R(-20,20)}" cy="${240+x.R(-10,60)}" rx="${x.R(70,120)}" ry="${x.R(22,38)}" fill="#c8d2ee" opacity="${f(x.R(.35,.7))}"/>`).join('') +
  `<rect x="380" y="150" width="14" height="110" fill="#8a7a5a"/><path d="M360 150 L387 100 L414 150Z" fill="#c8b890"/>` + lamp(387,120,'#ffe9a8') + boat(560,250), false);
G.addBiome('lighthouse', x => sky('#0a1230','#1f3260') + stars(x,70) + moon(160,80,30) + water(250,'#223c70','#0e1a3c') + glints(x,260,12) +
  `<path d="M460 120 L500 120 L520 300 L440 300Z" fill="#d8d2c8"/><rect x="452" y="170" width="56" height="18" fill="#7a8ac0"/><rect x="448" y="230" width="64" height="18" fill="#7a8ac0"/><rect x="450" y="96" width="60" height="26" fill="#3a4268"/>` +
  `<path d="M480 108 L${W} 60 L${W} 150Z" fill="#fff3c4" opacity=".16"/>` + lamp(480,108,'#fff0b0') + `<path d="M0 300 Q480 270 ${W} 300 L${W} ${H} L0 ${H}Z" fill="#141f3a"/>`, false);
G.addBiome('moongarden', x => sky('#17204a','#3a4a7c') + stars(x,70) + moon(480,100,56) + hill(250,40,'#25406a','a',x) +
  Array.from({length:16}, (_,i) => { const fx = 30+i*58+x.R(-10,10), fy = 280+x.R(0,60); return `<path d="M${fx} ${fy} L${fx} ${fy-24}" stroke="#4a7a6a" stroke-width="3"/><circle cx="${fx}" cy="${fy-28}" r="7" fill="${i%3?'#cfe0ff':'#ffe0f0'}" opacity=".9"/>`; }).join('') + `<rect y="330" width="${W}" height="30" fill="#162a48"/>`, false);
G.addBiome('starfield', x => `<rect width="${W}" height="${H}" fill="#070c1e"/>` + glow(480,180,420,'#2a3a80',.3) + stars(x,140) + moon(480,150,40) + boat(480,300), false);
})();
