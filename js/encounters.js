/* Random-encounter archetypes (procedural, deterministic given their saved params). */
(function(){
const G = globalThis.G;
const A = (name, def) => { G.arch[name] = def; };
const reg = S => G.regions[S.region] || G.regions.thornwick;
const cap = s => s.charAt(0).toUpperCase()+s.slice(1);
const an = n => (/^[aeiou]/i.test(n)?'an ':'a ') + n;
const pk = (r,a) => a[Math.floor(r()*a.length)];
const biome = (R,r) => pk(r, R.biomes);
const seedP = (S,extra) => Object.assign({ s: G.ri(S,1e9) }, extra||{});
const allyLine = (S,r,lines) => (S.allies.length && r()<.5) ? ' ' + lines.replace(/\{a\}/g, (G.allies[S.allies[Math.floor(r()*S.allies.length)]].n.split(' ')[0])) : '';

/* ---------- BEAST ---------- */
A('beast',{
  pick(S,R){ if(!R.beasts||!R.beasts.length) return null; return seedP(S,{i:G.pickIdx(S,'beast:'+R.id,R.beasts.length)}); },
  make(S,p){
    const R=reg(S), b=R.beasts[p.i], r=G.lr(p.s), dg=b[3], te=pk(r,R.terrain), nm=b[0];
    const intro = pk(r,[`On the ${te}, you stop dead. Ahead stands ${an(nm)}: ${b[2]}. It has seen you.`,`You smell it before you see it. ${cap(an(nm))} — ${b[2]} — turns toward you along the ${te}.`,`The ${te} has gone too quiet. Then ${an(nm)} steps out: ${b[2]}.`,`${cap(an(nm))}, ${b[2]}, blocks your way. Neither of you is willing to be the first to move.`]) + allyLine(S,r,`{a} tenses beside you, weapon half-drawn.`);
    const rew = r()<.4 ? 'xp+m loot' : 'xp+m gold+s';
    const opts = [
      { t:`Stand your ground and fight`, c:`STR ${9+2*dg} fight`, y:[`You meet the ${nm} head-on and, after a brutal scramble, drive it off.`,rew], n:[`The ${nm} gets inside your guard and tears at you before you break away.`,'hp-m'] },
      { t:`Slip away unseen`, c:`DEX ${8+2*dg} sneak`, y:[`You melt into the ${te} and leave it behind, none the wiser.`,'xp+s'], n:[`It hears you. A short, savage chase ends with you bruised and breathless.`,'hp-s'] },
      { t:`Calm it with a steady voice and open hands`, r:'skill:beastlore|skill:survival|skill:music', c:`WIS ${9+2*dg} tame`, y:[`Slow breaths, soft words — the ${nm} settles, sniffs your hand, and lets you pass. Something like respect passes between you.`,'xp+m'], n:[`The ${nm} misreads you and lunges.`,'hp-s'] },
      { t:`Blast it with a spell`, r:'skill:firebolt|skill:lightning|skill:frost|skill:smite', mp:3, c:`INT ${8+2*dg} fire`, y:[`Your spell strikes true. The ${nm} yelps and bolts into the wild.`,'xp+m'], n:[`The spell splashes off a rock; the ${nm} surges forward in a fury.`,'hp-s'] },
      { t:`Loose an arrow from cover`, r:'skill:archery', c:`DEX ${8+2*dg} shoot`, y:[`Your first arrow takes it in the shoulder. It flees, whining.`,'xp+m'], n:[`The arrow skips off bone; it charges.`,'hp-s'] },
      { t:`Throw it a ration and back away`, r:'item:ration', y:[`It snatches the food, forgets you, and slinks off to eat.`,'-ration xp+s'] },
      { t:`Put it to sleep with the powder`, r:'item:sleeping_powder', y:[`A pinch on the wind, and the ${nm} sags to the ground, snoring.`,'-sleeping_powder xp+m'] },
      { t:`Take the long way around`, y:[`You circle wide through the undergrowth. It costs an hour, but you are unharmed.`,''], k:1 } ];
    return { art:`${biome(R,r)}|${b[1]}`, title:cap(nm), text:intro, opts };
  } });

/* ---------- MONSTERS / HUMANOID FOES ---------- */
A('monster',{
  pick(S,R){ if(!R.foes||!R.foes.length) return null; return seedP(S,{i:G.pickIdx(S,'foe:'+R.id,R.foes.length)}); },
  make(S,p){
    const R=reg(S), f=R.foes[p.i], r=G.lr(p.s), dg=f[3], te=pk(r,R.terrain); const bribe = 12 + S.ch*9;
    const intro = pk(r,[`On the ${te}, a shape steps out: ${f[0]} — ${f[2]}. ${f[4]}`,`You are not alone. ${cap(f[0])} block the ${te}: ${f[2]}. ${f[4]}`,`${cap(f[0])}, ${f[2]}, move to cut you off. ${f[4]}`]) + allyLine(S,r,`{a} steps to your shoulder. "Your call," {a} murmurs.`);
    const opts = [
      { t:`Fight them`, c:`STR ${9+2*dg} fight`, y:[`Steel rings, boots scuff, and the ${f[0]} are broken or fled.`,'xp+m gold+s loot'], n:[`It turns ugly. You win free, but not cleanly.`,'hp-m'] },
      { t:`Talk your way past`, c:`CHA ${9+2*dg} persuade`, y:[`A little patience, a little charm — and they wave you on, almost friendly.`,'xp+m'], n:[`They are unmoved, and the parley turns to shoving.`,'hp-s'] },
      { t:`Bark a threat and hold their eyes`, r:'skill:intimidate|cls:warrior', c:`CHA ${8+2*dg} intimidate`, y:[`You make them see exactly what a fight would cost. They find other business.`,'xp+m gold+s'], n:[`They laugh. That was the wrong tone.`,'hp-s'] },
      { t:`Pay them off (${bribe} gold)`, r:`gold:${bribe}`, y:[`Coins change hands. "Pleasure," says their leader, entirely without pleasure.`,`gold-${bribe} xp+s`] },
      { t:`Strike first from the shadows`, r:'skill:stealth|skill:shadowmeld|cls:rogue', c:`DEX ${8+2*dg} sneak`, y:[`You are among them before they know it. By the time they do, it is over.`,'xp+m loot'], n:[`A shout goes up. You are out in the open.`,'hp-m'] },
      { t:`Fling a Smoke Pellet and vanish`, r:'item:smoke_pellet', y:[`The cloud boils up; by the time it clears, you are gone.`,'-smoke_pellet xp+s'] },
      { t:`Cast Charm and walk through them`, r:'skill:charm|skill:detect|skill:music', mp:3, c:`CHA ${8+2*dg} persuade`, y:[`Warmth, trust, a little glamour — they part like a curtain.`,'xp+m'], n:[`The charm slips; they stare, offended.`,'hp-s'] },
      { t:`Back away with your hands raised`, y:[`You surrender the road and a few coins. Not heroic, but you are intact.`,'gold-s'], k:1 } ];
    return { art:`${biome(R,r)}|${f[1]}`, title:cap(f[0]), text:intro, opts };
  } });

/* ---------- UNDEAD ---------- */
const UNDEAD = [[`skeleton patrol`,'💀',`rattling skeletons in rusted mail, marching on an order thirty years old`,2],[`ghoul`,'🧟',`a stooped, grey, long-fingered thing dragging a half-eaten corpse`,2],[`restless ghost`,'👻',`a pale lady in a wet gown, weeping at the roadside`,1],[`wraith`,'👤',`a hooded shadow that drinks the light around it`,3],[`banshee`,'😱',`a wailing, hollow-eyed woman, her hair streaming in no wind`,3],[`zombie shambler horde`,'🧟‍♂️',`two dozen slow-footed dead, unstoppable by sheer number`,2],[`headless knight`,'🏇',`a mounted knight with no head, carrying one under his arm`,4],[`bone-hound`,'🦴',`a hound of yellowed bone, empty-socketed, hunting by memory`,2]];
A('undead',{
  wf:(S)=> S.tod===3 ? 2.2 : (S.tod===2 ? 1.2 : 0.6),
  pick(S,R){ return seedP(S,{i:G.pickIdx(S,'undead',UNDEAD.length)}); },
  make(S,p){
    const R=reg(S), u=UNDEAD[p.i], r=G.lr(p.s), dg=u[3], nm=u[0];
    const intro = pk(r,[`The air turns cold. ${cap(an(nm))} drifts into view: ${u[2]}. It is between you and the road.`,`Something wrong stirs on the ${pk(r,R.terrain)}: ${an(nm)}, ${u[2]}.`,`${cap(an(nm))} — ${u[2]} — turns slowly toward the warmth of the living.`]);
    const opts = [
      { t:`Fight it with steel`, c:`STR ${10+2*dg} fight`, y:[`You hack it down and it clatters, crumbles, or sighs to nothing.`,'xp+m'], n:[`Cold fingers rake you; the touch saps something.`,'hp-m st:curse2'] },
      { t:`Hurl holy water`, r:'item:holy_water', y:[`The water hisses on its body and the ${nm} shrieks, then is gone.`,'-holy_water xp+m'] },
      { t:`Smite it with holy light`, r:'skill:smite|skill:bless|skill:mending', mp:4, c:`WIS ${8+2*dg} holy`, y:[`Radiance floods the dark; the ${nm} crumbles in a long, grateful sigh.`,'xp+l'], n:[`Your prayer wavers. The dead do not.`,'hp-s'] },
      { t:`Burn it`, r:'skill:firebolt|item:fire_oil|item:torch', c:`INT ${9+2*dg} fire`, y:[`Fire eats it hungrily. It does not scream; it is long past screaming.`,'xp+m'], n:[`It shrugs the flame off and keeps coming.`,'hp-s'] },
      { t:`Speak to it with Spirit Speak`, r:'skill:spiritspeak', mp:2, y:[`You ask it its name. It remembers. Slowly, weeping, it lets itself go.`,'xp+l bond:'+(S.allies[0]||'aldric').replace(/.*/,'')], },
      { t:`Throw silver dust`, r:'item:silver_dust', y:[`The silver burns it away like frost in the sun.`,'-silver_dust xp+m'] },
      { t:`Run for the light`, c:`DEX ${9+dg} dodge`, y:[`You sprint, and the cold falls away behind you.`,'xp+s'], n:[`It catches your ankle — freezing — before letting go.`,'hp-s'], k:1 } ];
    // remove malformed bond token for non-speaker
    opts[4].y[1] = 'xp+l';
    return { art:`${biome(R,r)}|${u[1]}`, title:cap(nm), text:intro, opts };
  } });

/* ---------- HAZARDS ---------- */
const HK = { cross:['DEX','climb','item:rope','Rope across','skill:frost|skill:shadowmeld','Freeze or fold your way across'], climb:['STR','climb','item:rope','Rope up the face','skill:shadowmeld|skill:ward','Take the spell-assisted route'],
  trap:['DEX','dodge','item:lockpicks','Pick and disarm','skill:detect|skill:lockpick','Read and disarm the mechanism'], gas:['CON','endure','item:antidote','Drink an antidote first','skill:mending|skill:herbalism','Counter the poison'],
  cold:['CON','endure','item:torch','Warm up with a torch','skill:firebolt|skill:survival','Warm yourself by magic or craft'], heat:['CON','survive','item:ration','Rest, shade and ration','skill:frost|skill:survival','Cool yourself by craft'],
  flood:['STR','swim','item:rope','Rope-line across','skill:frost|skill:athletics','Freeze the water or swim it'], maze:['INT','survive','item:brass_compass','Navigate by compass','skill:survival|skill:detect','Read the signs'],
  collapse:['DEX','dodge','item:rope','Anchor with rope','skill:ward|skill:shield','Brace with ward or shield'] };
A('hazard',{
  pick(S,R){ if(!R.hazards||!R.hazards.length) return null; return seedP(S,{i:G.pickIdx(S,'haz:'+R.id,R.hazards.length)}); },
  make(S,p){
    const R=reg(S), h=R.hazards[p.i], r=G.lr(p.s), k=HK[h[3]]; const dc=10+Math.floor(r()*3);
    const opts = [
      { t:`Pick your way through carefully`, c:`${k[0]} ${dc} ${k[1]}`, y:[`Step by careful step, you get through without incident.`,'xp+m'], n:[`You misjudge it. The hazard takes its toll.`,'hp-m'] },
      { t:k[3], r:k[2], y:[`Your preparation pays off. You pass with hardly a scratch.`,'xp+m'] },
      { t:k[5], r:k[4], mp:2, y:[`Skill and a little magic carry you through cleanly.`,'xp+m'] },
      { t:`Gamble on the fast way`, c:`${k[0]} ${dc+4} ${k[1]}`, y:[`It's reckless, thrilling, and — somehow — it works.`,'xp+l gold+s'], n:[`It goes terribly wrong. You are lucky to be alive.`,'hp-l'] },
      { t:`Turn back and find another route`, y:[`Wiser, if slower. You lose an hour finding another path.`,''], k:1 } ];
    return { art:`${biome(R,r)}|${h[1]}`, title:h[0], text:`${h[2]} ${allyLine(S,r,'{a} studies it with a frown. "Careful."').trim()}`, opts };
  } });

/* ---------- RIDDLES ---------- */
const RID = [[`I have cities but no houses, mountains but no trees, water but no fish. What am I?`,`A map`],[`The more of me you take, the more you leave behind. What am I?`,`Footsteps`],[`I speak without a mouth and hear without ears. I come alive with the wind. What am I?`,`An echo`],[`I am light as a feather, yet the strongest man cannot hold me for long. What am I?`,`Breath`],[`I have a mouth but never speak, a bed but never sleep, and I run but never walk. What am I?`,`A river`],[`The poor have me. The rich need me. Eat me, and you die. What am I?`,`Nothing`],[`A box without hinges, key or lid, yet golden treasure lies hid inside. What is it?`,`An egg`],[`What is broken the moment you speak its name?`,`Silence`],[`I am always hungry; I must always be fed. The finger I touch will soon turn red. What am I?`,`Fire`],[`Thirty white horses on a red hill; first they champ, then they stamp, then they stand still. What are they?`,`Teeth`],[`What walks on four legs at dawn, two at noon, and three at dusk?`,`A man`],[`This thing all things devours: birds, beasts, trees, flowers. It gnaws iron, bites steel, and beats mountains down. What is it?`,`Time`],[`What has an eye, but cannot see?`,`A needle`],[`Voiceless it cries, wingless flutters, toothless bites, mouthless mutters. What is it?`,`The wind`],[`What can fill a room but takes up no space?`,`Light`],[`The man who makes it does not need it; the man who buys it does not use it; the man who uses it does not know it. What is it?`,`A coffin`]];
const ASK = { default:[`A hooded figure sits in the road with a game board, blocking the path. "Answer true, and pass free."`,`A stone gargoyle on a gatepost opens one eye. "A riddle for a toll, little wanderer."`,`A grey fox with unnervingly human eyes bars the path. "Riddle me, or turn around."`,`A very old woman at a crossroads grins with one tooth. "Three guesses? No. One."`],
  amber:[`A sphinx of golden stone stretches in the sun, tail twitching. "Answer, mortal — or be my supper."`], saltwind:[`A one-eyed sailor sits on a barrel and spins a knife. "Answer my riddle, or swim home."`], hollowdeep:[`A voice from the dark whispers a riddle, and the walls echo it back to you, twisted.`] };
A('riddle',{
  pick(S,R){ return seedP(S,{i:G.pickIdx(S,'riddle',RID.length)}); },
  make(S,p){
    const R=reg(S), q=RID[p.i], r=G.lr(p.s); const asker = pk(r, ASK[R.id] || ASK.default); const dang = R.id==='amber'; const wrong = [];
    for (let k=0;k<20 && wrong.length<2;k++){ const w=RID[Math.floor(r()*RID.length)][1]; if (w!==q[1] && !wrong.includes(w)) wrong.push(w); }
    const answers = [q[1]].concat(wrong); for (let i=answers.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [answers[i],answers[j]]=[answers[j],answers[i]]; }
    const opts = answers.map(a => a===q[1] ?
      { t:`"${a}."`, y:[`"Correct," comes the answer, and the way opens. A small gift is left for you.`,'xp+l loot'] } :
      { t:`"${a}."`, y:[`A cold, patient silence. "Wrong." The consequences are immediate.`, dang?'hp-l':'hp-m'] });
    opts.push({ t:`Reason it out with old lore`, r:'skill:lore|skill:detect|item:scholars_spectacles', c:'INT 11 lore', y:[`You turn the words in your mind until the answer clicks into place: "${q[1]}." The way opens.`,'xp+l loot'], n:[`The answer slips away. Wrong, and punished for it.`,'hp-s'] });
    opts.push({ t:`Admit you don't know and walk away`, y:[`"Honest," it says, and grudgingly lets you turn aside.`,''], k:1 });
    return { art:`${R.biomes[0]}|🧩`, title:'A Riddle in the Road', text:`${asker} "${q[0]}"`, opts };
  } });

/* ---------- TREASURE ---------- */
const CACHES = { wild:[[`A mouldering travelling-chest, half-sunk in mud,`,'🧰'],[`A hollow tree with a leather satchel jammed inside`,'🌳'],[`A dead adventurer's pack, still buckled shut,`,'🎒'],[`A locked iron strongbox under a rockfall`,'📦']], desert:[[`A sand-buried urn with a wax-sealed lid`,'🏺'],[`A cracked sarcophagus lid, already open an inch,`,'⚱️']], coast:[[`A wreck's chest, barnacled and shut tight,`,'🧰'],[`A sealed bottle wedged in the rocks, something rattling inside`,'🍾']], snow:[[`A sled half-frozen in the drift, its cargo lashed down,`,'🛷'],[`A frozen traveller's pack, rimed with ice,`,'🎒']], cave:[[`A hollow geode glittering with something other than crystal`,'💎'],[`A skeleton clutching a lacquered box`,'💀']], town:[[`A stash behind a loose brick`,'🧱'],[`A forgotten lockbox under a stair`,'📦']] };
A('treasure',{
  pick(S,R){ return seedP(S,{ i:G.ri(S,10), t:G.ri(S,3) }); },
  make(S,p){
    const R=reg(S), r=G.lr(p.s); const kind = R.kinds.includes('town')?'town':R.kinds.includes('desert')?'desert':R.kinds.includes('coast')?'coast':R.kinds.includes('snow')?'snow':(R.kinds.includes('cave')||R.kinds.includes('underground'))?'cave':'wild';
    const arr = CACHES[kind]; const c = arr[p.i % arr.length]; const trap = ['a spring-loaded needle','a puff of sleeping gas','a clanging alarm-wire','a snapping blade'][p.t % 4];
    const amulet = (S.ch>=3 && !S.items.cursed_amulet && r()<.12);
    const prize = amulet ? '+cursed_amulet xp+s' : (r()<.5 ? 'loot gold+s xp+s' : 'loot loot xp+s');
    const text = amulet ? `${c[0]} lies half-hidden — and next to it, a gleaming amulet, warm to the touch, whispering of power. It would be so easy to take.` : `${c[0]} waits, unguarded and un-looted. Too good to be true? Possibly. But treasure is treasure — and there may be ${trap} guarding it.`;
    const opts = [
      { t:`Pick the lock carefully`, c:`DEX 12 lock`, y:[`Click. The mechanism gives, and the lid opens on its prize.`,prize], n:[`The trap fires: ${trap}.`,'hp-m'] },
      { t:`Smash it open`, c:'STR 11 fight', y:[`It splinters. Most of the contents survive.`,prize.replace('loot loot','loot')], n:[`You hurt yourself on the splintering lid and the trap springs.`,'hp-s'] },
      { t:`Cast Detect Magic and disarm it`, r:'skill:detect', mp:1, y:[`The ward glows plain to you. You unpick the knot of magic with a delicate finger and open the lid.`,prize] },
      { t:`Study the lid for traps first`, c:'INT 10 lore', y:[`A hair-thin wire! You snip it and lift the lid in perfect safety.`,prize], n:[`You find nothing — and set the trap off anyway.`,'hp-s'] },
      { t:`Leave it alone`, y:[`Wisdom, or cowardice? You walk on, a little richer in caution.`,''], k:1 } ];
    return { art:`${pk(r,R.biomes)}|${c[1]}`, title:amulet?'A Tempting Amulet':'A Hidden Cache', text, opts };
  } });

/* ---------- FORK IN THE ROAD ---------- */
const PATHS = [[`the sunlit road`,`the overgrown track`,`the silent path`],[`the high ridge`,`the low valley`,`the old drovers' way`],[`the left fork, bright with flowers`,`the right fork, bare and black`,`the middle way, which is not quite a path`]];
A('fork',{
  pick(S,R){ return seedP(S,{ t:G.ri(S,3) }); },
  make(S,p){
    const R=reg(S), r=G.lr(p.s); const names=PATHS[p.t%3]; const outs=[['good','You walk it without incident and find a stash tucked in a hollow log.','xp+m loot'],['ok','An uneventful, tiring hour — but you gain your bearings.','xp+s'],['bad','The path peters out in a nasty tangle, and you are scratched and sore before you find your way back.','hp-m xp+s']];
    for (let i=outs.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [outs[i],outs[j]]=[outs[j],outs[i]]; }
    const opts = names.map((n,i)=>({ t:`Take ${n}`, y:[outs[i][1],outs[i][2]] }));
    opts.push({ t:`Read the signs and choose wisely`, r:'skill:survival|item:brass_compass|skill:beastlore|cls:ranger', y:[`Broken twigs, boot-wear, a trace of smoke — the signs are plain. You choose well and find an easy path, and a small prize.`,'xp+m loot'] });
    opts.push({ t:`Camp here and decide at dawn`, y:[`A cautious night, and no harm done. In the morning the choice seems clearer.`,'xp+s'], k:1 });
    return { art:`${biome(R,r)}|🛤️`, title:'The Road Splits', text:`The road ${pk(r,['forks','splits three ways','dwindles into several paths'])} here. There is no sign, no milestone, only ${names[0]}, ${names[1]}, and ${names[2]}.`, opts };
  } });

/* ---------- ELITE (battle-bearing) ---------- */
A('elite',{
  cond:(S,R)=> R.elites && R.elites.length>0,
  pick(S,R){ if(!R.elites||!R.elites.length) return null; return seedP(S,{ i:G.pickIdx(S,'elite:'+R.id,R.elites.length) }); },
  make(S,p){
    const R=reg(S), id=R.elites[p.i], f=G.foes[id], r=G.lr(p.s);
    const opts = [
      { t:`Face it and fight`, y:[`You draw your weapon and step forward.`,`battle:${id}`] },
      { t:`Try to sneak around it`, c:`DEX ${11+Math.floor(f.lv/3)} sneak`, y:[`You hold your breath and inch past. It never knows.`,'xp+m'], n:[`A twig breaks. It turns, and there is nowhere left to hide.`,`battle:${id}`] },
      { t:`Hurl fire oil, then run`, r:'item:fire_oil', y:[`The oil bursts into a wall of flame. By the time it passes, you are long gone.`,'-fire_oil xp+m'] },
      { t:`Drop a Smoke Pellet and slip away`, r:'item:smoke_pellet', y:[`The smoke swallows the road. You are gone before it clears.`,'-smoke_pellet xp+m'] },
      { t:`Distract it with a curio`, r:'any:gimmick', c:`CHA ${10+Math.floor(f.lv/3)} deceive`, y:[`You wave something strange, and it is mesmerised. You slip by.`,'gimmick xp+m'], n:[`It is not impressed.`,`battle:${id}`] },
      { t:`Retreat and find another road`, y:[`Discretion, valour's better half. You back away slowly and find another route.`,'hp-1'], k:1 } ];
    return { art:f.art, title:f.n, text:f.pre, opts };
  } });

/* ---------- MERCHANT ---------- */
const MERCH = [[`Hobb the Tinker`,'🛒',`a bent little man with a cart of clanking pots, and a mule that glares at everyone`],[`Widow Marsh`,'👵',`a gnarled old widow with a basket of remedies`],[`Three-Finger Pell`,'🧔',`a cheerful, suspicious smuggler with a coat full of pockets`],[`Sister Agnes`,'🧕',`a wandering nun with a cart of blessed goods`],[`Brokk the dwarf`,'⛏️',`a stout dwarf with a pack mule heavy with mining goods`],[`a caravan-master`,'🐪',`a weary caravan master, sweating under a hat`],[`Fenwick the Peddler`,'🎒',`a weasel-faced peddler with a wheelbarrow of everything`]];
function shopStock(S, r){
  const ids = Object.keys(G.items), pool = k => ids.filter(i=>G.items[i].loot===k && (!G.items[i].minch || S.ch>=G.items[i].minch) && !(['gear','trink','gimmick','scroll'].includes(k) && S.items[i]>0) && (k!=='gear' || (G.items[i].t||1) <= 1+S.ch*0.8));
  const take = (k,n) => { const p=pool(k); const out=[]; for (let i=0;i<n&&p.length;i++){ const j=Math.floor(r()*p.length); out.push(p.splice(j,1)[0]); } return out; };
  const stock = take('cons',2).concat(take(r()<.5?'gear':'trink',1)); if (r()<.5) stock.push(...take('scroll',1)); if (stock.length<4 && r()<.5) stock.push(...take('gimmick',1));
  return stock.slice(0,4);
}
A('merchant',{
  pick(S,R){ return seedP(S,{ i:G.ri(S,MERCH.length) }); },
  make(S,p){
    const R=reg(S), m=MERCH[p.i], r=G.lr(p.s); const stock = shopStock(S,r); const bought = S.sv.bought||[]; const disc = S.sv.disc?0.75:1;
    const price = id => Math.max(4, Math.round(G.items[id].v * (1+0.2*S.ch) * disc));
    const opts = [];
    stock.filter(id=>!bought.includes(id)).slice(0,3).forEach(id => { const it=G.items[id], c=price(id);
      opts.push({ t:`Buy ${it.icon} ${it.n} — ${c} gold  (${it.d})`, r:`gold:${c}`, y:[`You count out ${c} gold and take the ${it.n}.`,`gold-${c} +${id} sv:${id} stay`] }); });
    if (!S.sv.disc && !S.sv.thief) opts.push({ t:`Haggle for a better price`, c:'CHA 12 persuade', y:[`A smile, a sigh, a sob story — he knocks a quarter off everything.`,'svflag:disc stay'], n:[`"No discounts for chancers," he sniffs, and will not be moved.`,'svflag:thief stay'] });
    if (!S.sv.thief) opts.push({ t:`Lift something while he's distracted`, r:'skill:pickpocket|skill:stealth|cls:rogue', c:'DEX 14 steal', y:[`Your fingers are quick, and he does not notice — until you are well down the road.`,'loot xp+m'], n:[`A hand clamps on your wrist. "THIEF!" The beating is short, and educational.`,'hp-m gold-s'] });
    opts.push({ t:`Thank him and move on`, y:[`"Safe roads, friend," he calls after you.`,''], k:1 });
    return { art:`${pk(r,R.biomes)}|${m[1]} 🛒`, title:`Merchant: ${m[0]}`, text:`${cap(m[0])} — ${m[2]} — hails you from the roadside. "Gold for goods, friend! You look like someone with need." You have 🪙 ${S.gold} gold.`, opts, count:true };
  } });

/* ---------- CAMP ---------- */
A('camp',{
  pick(S,R){ const avail=[]; for (const a of S.allies){ const t=G.talks[a]; if (!t) continue; for (let i=0;i<t.length;i++) if(!S.flags['t_'+a+i]) { avail.push([a,i]); break; } }
    const pickT = avail.length ? avail[G.ri(S,avail.length)] : null; return seedP(S,{ a:pickT?pickT[0]:null, t:pickT?pickT[1]:0 }); },
  make(S,p){
    const R=reg(S), r=G.lr(p.s); const opts = [
      { t:`Rest through the night`, y:[`You sleep deeply by a banked fire. Warmth returns; wounds stitch themselves tighter.`,'rest'], k:1 },
      { t:`Cook a hot meal (uses a ration)`, r:'item:ration', y:[`A real meal. Stew bubbles, spirits lift, and the company talks late.`,'-ration rest st:bless4 xp+s'] },
      { t:`Tend wounds and brew a poultice`, r:'skill:herbalism|skill:mending|item:healers_kit|item:bandages', c:'WIS 10 heal', y:[`Careful hands, clean cloth, bitter herbs. You wake mended and clear of any affliction.`,'rest cure hp+s xp+s'], n:[`The poultice is a sticky mess, but you rest anyway.`,'rest'] },
      { t:`Keep watch and drill by firelight`, c:'CON 10 endure', y:[`A long, quiet watch, and a sharper mind for it. At dawn you feel prepared.`,'xp+m mp+m'], n:[`You nod off at your post, but the night is mercifully quiet.`,'xp+s'] } ];
    if (p.a){ const A=G.allies[p.a]; opts.splice(1,0,{ t:`Sit with ${A.n.split(' ')[0]} and talk`, y:[`You settle beside ${A.n.split(' ')[0]}, and the fire pops softly.`,`flag:t_${p.a}${p.t} >~talk:${p.a}:${p.t}`] }); }
    opts.push({ t:`Study your pack and make repairs`, r:'skill:smithing|skill:alchemy|item:whetstone', y:[`You mend straps, hone edges and mix a little something. Rested enough.`,'rest xp+s mp+s'] });
    return { art:'camp|🔥 ⛺', title:'A Camp for the Night', text:`Night closes in over the ${pk(r,R.terrain)}. ${pk(r,[`You find a sheltered hollow and light a small fire.`,`There is a flat patch of ground and a good stack of deadwood. Camp, then.`,`Stars wheel overhead as the company settles into the ring of firelight.`])} Your wounds ache and the fire is welcome.`, opts };
  } });
A('ally_talk',{
  pick(S,R){ return null; },
  make(S,p){
    const A=G.allies[p.a], T=G.talks[p.a][p.t], r=G.lr(p.s||p.t+7); const name=A.n.split(' ')[0];
    const opts = [
      { t:T.k[0], y:[T.k[1],`bond:${p.a} xp+s mp+s`] },
      { t:T.j[0], y:[T.j[1],`xp+s ${r()<.5?'bond:'+p.a:''} st:bless2`] },
      { t:T.p[0], y:[T.p[1], (T.p[2]?T.p[2]+' ':'')+'xp+m'] } ];
    return { art:'camp|'+A.icon+' 🔥', title:`Camp talk: ${name}`, text:T.x, opts, noWx:true };
  } });

/* ---------- chapter pacing helper: interleave story beats with random encounters and camps ---------- */
G.mix = function(spine, nEnc, o){
  o = o||{}; const total = spine.length + nEnc; const out = new Array(total).fill(null);
  spine.forEach((b,i)=>{ let p = Math.min(total-1, Math.round((i+0.5)*total/spine.length - 0.5)); while (p<total && out[p]!==null) p++; if (p>=total){ p=total-1; while(out[p]!==null) p--; } out[p]=b; });
  let since = 0, k = 0;
  for (let i=0;i<total;i++){ if (out[i]!==null) continue; since++; if (since>=(o.camp||8) && !o.nocamp){ out[i]='~camp'; since=0; } else out[i] = (o.kinds && o.kinds[k++%o.kinds.length]) || '~enc'; }
  return out;
};

/* ---------- MINI POOL ARCHETYPES (see mini.js) ---------- */
G.mini = {};
G.miniArch = function(name, pool){
  G.mini[name] = pool;
  const match = (e, S, R) => { const f=e[0]; if (f==='any') return true; return f.split(',').some(t=>{ t=t.trim(); if (t.startsWith('wx=')) return S.wx===t.slice(3); if (t.startsWith('tod=')) return ['dawn','day','dusk','night'][S.tod]===t.slice(4); return t===R.id || R.kinds.includes(t); }); };
  A(name,{
    cond:(S,R)=> pool.some(e=>match(e,S,R)),
    pick(S,R){ const idx = pool.map((e,i)=>match(e,S,R)?i:-1).filter(i=>i>=0); if(!idx.length) return null;
      const seen = S.seen['mini:'+name]||(S.seen['mini:'+name]=[]); let c = idx.filter(i=>!seen.includes(i)); if(!c.length){ seen.length=0; c=idx; } const i=c[G.ri(S,c.length)]; seen.push(i); return seedP(S,{i}); },
    make(S,p){
      const R=reg(S), e=pool[p.i], r=G.lr(p.s);
      const art = e[2].includes('|') ? e[2] : `${pk(r,R.biomes)}|${e[2]}`;
      const opts = e[4].map(a => { const o = { t:a[0] }; if (a[1]) { o.c=a[1]; o.y=[a[2],a[3]||'']; o.n=[a[4]===undefined?'It goes poorly.':a[4], a[5]||'']; } else o.y=[a[2],a[3]||'']; if (a[6]) o.r=a[6]; if (a[7]) o.mp=a[7]; return o; });
      return { art, title:e[1], text:e[3], opts };
    } });
};
})();
