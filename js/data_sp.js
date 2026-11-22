/* Data for "Stolen Sky": a child, a hundred other children, an alien ship, and a long way home. Science and nerve, no magic. */
(function(){
const G = globalThis.G, K = G.skill, I = G.item, D = G.deed;

G.story('space',{ title:'Stolen Sky', icon:'🛸', art:'earthview|🛸 🌍', defName:'Sam', startRegion:'sp_cell', fixedTime:true, localWx:true, hideEnv:true, noGold:true, kids:true, labels:{ mp:'Nerve' }, target:100, xpScale:0.9, perkArt:'cellblock|⭐', fallbackArch:'sp_event',
  tag:'Science fiction · escape from an alien ship · about 100 choices · a shorter adventure',
  desc:'You were taken from your bedroom, and now you are locked in a cell aboard a vast alien ship with a hundred other children. The ship is leaving the solar system. Use what you know about history, geography, maths, machines and biology to get everyone out, and get everyone home. No magic. Just brains, nerve and a lot of very strange rooms.',
  intro:'STOLEN SKY\nA science-fiction escape in about a hundred choices.\nYou remember a flash of white light over your bed, a hum that you could feel in your teeth, and then nothing. Now you are lying on a cold, ribbed floor under a ceiling that glows a soft, sick blue. There is a thick, clear wall in front of you with a window in it, and, through the window, there is the Earth. It is smaller than a football. It is getting smaller.\nAround you, a hundred other children are waking up, and every one of them is looking at you.\nThere is no magic here, and nobody is coming to save you. Everything you know, everything you have ever learned at school or from a book or by taking something apart, is about to matter. Choose with the number keys.',
  deathLines:['The lights flicker, and then go out, and the hum of the great ship fades slowly into silence. Your journey ends here.','Everything goes white and quiet, and you think, very clearly, of your own front door. Your journey ends here.','The last thing you see is a small, blue-white Earth, far, far away. Your journey ends here.'],
  create:{ nameArt:'cellblock|🧒', nameTitle:'Who are you?', nameText:'You are a twelve-year-old, awake in a locked cell in space. What is your name? (Type a name, then press Enter.)',
    clsTitle:'What are you best at?', clsText:'{name}, you are going to need a lot of different kinds of brains. What do you know best? This shapes your strengths, your skills and the options you will see.', clsArt:'lab|📜 🧭 ➗ 🔧 🧬', originTitle:'Where is home?', originText:'Wherever it is, it is a very, very long way away. Where did you grow up?', originArt:'earthview|🌍',
    sigText:'You already have a special strength', diffTitle:'How dangerous?', diffText:'A single bad decision can end your journey, or cost you some of the children. How forgiving should the ship be?',
    diffs:[['story','Easy — forgiving','Much kinder. Great for enjoying the puzzles and the strangeness without worrying about dying.'],['normal','Normal — balanced','Careful thinking is rewarded. Careless choices are punished.'],['grim','Hard — unforgiving','Mistakes cost far more. Every child counts.']],
    confirmText:'Your story begins on a cold floor, in a locked cell, on an alien ship, somewhere beyond the Moon.' } });

/* ---------- skills: school subjects and real-world know-how ---------- */
const KS=(id,n,icon,d,tags)=>{ K(id,n,icon,'skill',d,{story:'space'}); (tags||[]).forEach(t=>{ (G.TAGSK[t]=G.TAGSK[t]||[]).push(id); }); };
KS('sp_history','History Buff','📜','You know how people solved hard problems before. +2 to lore and persuading.',['lore','persuade']);
KS('sp_geo','Geography & Stars','🧭','You can read a map, a coastline or a constellation. +2 to lore and finding your way.',['survive','lore']);
KS('sp_math','Mathematician','➗','Numbers, patterns and proofs. +2 to lore and crafting.',['lore','craft']);
KS('sp_mech','Mechanic','🔧','You can take nearly anything apart and put it back better. +2 to crafting.',['craft']);
KS('sp_bio','Biologist','🧬','You understand living things: how they grow, breathe and fail. +2 to healing and lore.',['heal','lore']);
KS('sp_physics','Physics','⚛️','Forces, energy, circuits and orbits. +2 to crafting and lore.',['craft','lore']);
KS('sp_chem','Chemistry','🧪','Acids, bases, gases and what happens when you mix them. +2 to crafting and surviving.',['craft','survive']);
KS('sp_code','Logic & Code','💻','Patterns, programs and puzzles. +2 to crafting and lore.',['craft','lore']);
KS('sp_lang','Languages','🗣️','You can learn to make sense of how others speak. +2 to persuading and lore.',['persuade','lore']);
KS('sp_aid','First Aid','🩹','Calm hands and a clear head. +2 to healing.',['heal']);
KS('sp_calm','Steady Nerves','🧘','You keep your head when things go badly wrong. +2 to resisting fear and enduring.',['resist','endure']);
KS('sp_stealth','Quiet Steps','🤫','Soft-footed and observant. +2 to sneaking.',['sneak']);
KS('sp_athlete','Athlete','🏃','Fit, quick and tough. +2 to climbing, dodging and enduring.',['climb','dodge','endure']);

/* ---------- what you are good at ---------- */
const KC=(id,x)=>{ G.classes[id]=Object.assign({ story:'space', hpl:3, mpl:2, learn:[] },x); };
KC('sp_historian',{ n:'The History Nerd', icon:'📜', d:'You love how people solved problems in the past, from navigating by stars to sending secret messages.', hp:21, mp:9, stats:[8,10,10,15,13,12], sig:'sp_history', picks:['sp_lang','sp_geo','sp_calm','sp_code','sp_aid','sp_stealth'], pri:['INT','WIS','CHA'], learn:['sp_lang','sp_geo','sp_calm','sp_code','sp_aid','sp_stealth','sp_chem'], mentor:'your history teacher', kit:['sp_notebook','sp_ration'] });
KC('sp_navigator',{ n:'The Map Kid', icon:'🧭', d:'You collect maps and star charts. Geography is not just names on a page; it is how the world fits together.', hp:23, mp:8, stats:[9,12,11,13,14,10], sig:'sp_geo', picks:['sp_math','sp_history','sp_athlete','sp_calm','sp_stealth','sp_physics'], pri:['WIS','INT','DEX'], learn:['sp_math','sp_history','sp_athlete','sp_calm','sp_stealth','sp_physics','sp_aid'], mentor:'your geography teacher', kit:['sp_watch','sp_water'] });
KC('sp_mathlete',{ n:'The Maths Whiz', icon:'➗', d:'You see patterns everywhere. Primes, ratios and orbits are your favourite kind of puzzle.', hp:20, mp:10, stats:[7,11,10,16,12,10], sig:'sp_math', picks:['sp_code','sp_physics','sp_geo','sp_calm','sp_chem','sp_lang'], pri:['INT','WIS','DEX'], learn:['sp_code','sp_physics','sp_geo','sp_calm','sp_chem','sp_lang','sp_mech'], mentor:'your maths teacher', kit:['sp_notebook','sp_sweet'] });
KC('sp_tinkerer',{ n:'The Fixer', icon:'🔧', d:'You take things apart to see how they work, and usually, you can put them back together.', hp:25, mp:7, hpl:4, stats:[11,14,12,13,10,9], sig:'sp_mech', picks:['sp_physics','sp_code','sp_athlete','sp_stealth','sp_chem','sp_aid'], pri:['DEX','INT','CON'], learn:['sp_physics','sp_code','sp_athlete','sp_stealth','sp_chem','sp_aid','sp_calm'], mentor:'your uncle, who owns a garage', kit:['sp_multitool','sp_water'] });
KC('sp_biologist',{ n:'The Young Scientist', icon:'🧬', d:'Cells, germs, plants and animals fascinate you. You understand how the body works, and how it breaks.', hp:22, mp:9, stats:[8,11,12,14,14,11], sig:'sp_bio', picks:['sp_aid','sp_chem','sp_calm','sp_geo','sp_lang','sp_code'], pri:['INT','WIS','CON'], learn:['sp_aid','sp_chem','sp_calm','sp_geo','sp_lang','sp_code','sp_history'], mentor:'your science teacher', kit:['sp_water','sp_gel'] });

const KO=(id,x)=>{ G.origins[id]=Object.assign({ story:'space', guardian:'your parents', gold:0 },x); };
KO('sp_city',{ n:'A big-city kid', icon:'🏙️', d:'Trains, crowds and constant noise. You are quick and street-smart. (+1 DEX, +1 WIS)', bonus:{DEX:1,WIS:1}, kit:['sp_sweet'] });
KO('sp_farm',{ n:'A farm kid', icon:'🌾', d:'Early mornings, machines and animals. You are tough and handy. (+1 CON, +1 STR)', bonus:{CON:1,STR:1}, kit:['sp_ration'] });
KO('sp_coast',{ n:'A fishing-town kid', icon:'⛵', d:'Tides, boats and weather. You know the sea. (+1 CON, +1 INT)', bonus:{CON:1,INT:1}, kit:['sp_water'] });
KO('sp_hills',{ n:'A mountain-village kid', icon:'⛰️', d:'Thin air, steep paths and big skies. You see the stars properly. (+1 WIS, +1 CON)', bonus:{WIS:1,CON:1}, kit:['sp_flashlight'] });

/* ---------- items: everything is real-world kit or ordinary alien tech ---------- */
I('sp_ration','Nutrient Bar','🍫','cons','A chewy bar from the ship\'s food slots. Tastes like cardboard that has met a banana. Restores 6 HP.',{use:'hp+6',v:1});
I('sp_water','Bottle of Water','💧','cons','Cool, clean water. Restores 4 HP.',{use:'hp+4',v:1});
I('sp_gel','Medical Gel','🧴','cons','A tube of cool gel that closes small wounds. Restores 10 HP.',{use:'hp+10',v:2});
I('sp_sweet','Boiled Sweet','🍬','cons','A little comfort from home. Restores 3 Nerve.',{use:'mp+3 hp+1',v:1});
I('sp_antidote','Neutraliser Tablet','💊','cons','A chalky tablet that counteracts the ship\'s sleep gas. Cures poison and restores 3 HP.',{use:'cure hp+3',v:2});
I('sp_notebook','Notebook & Pencil Stub','📓','trink','Good for sketching maps and recording clues. +1 to lore.',{b:{lore:1},v:2});
I('sp_watch','Wind-Up Watch','⌚','trink','Ticks reliably, even here. Good for timing things. +1 to crafting.',{b:{craft:1},v:3});
I('sp_multitool','Multi-Tool','🔧','trink','Pliers, screwdrivers, a tiny saw. +2 to crafting.',{b:{craft:2},v:6});
I('sp_flashlight','Pocket Torch','🔦','trink','A small, reliable torch. +1 to surviving (finding your way).',{b:{survive:1},v:3});
I('sp_translator','Salvaged Translator','📟','trink','A half-working alien device that turns clicks into rough words. +2 to persuading and +1 to lore.',{b:{persuade:2,lore:1},v:0});
I('sp_foil','Thermal Blanket','🪙','trink','A foil blanket from the ship\'s stores. +1 to resisting and enduring.',{b:{resist:1,endure:1},v:0});
I('sp_wire','Coil of Cable','🧵','trink','A coil of insulated cable from the ship\'s stores. +1 to crafting.',{b:{craft:1},v:0});
I('sp_keyshard','Access Shard','🔑','relic','A flat crystal chip that opens the ship\'s doors. Warm to the touch.',{v:0,relic:true});
I('sp_chart','Star Chart','🗺️','relic','A hand-drawn map of the stars around the ship, with the Sun marked in your own writing.',{v:0,relic:true});
I('sp_coolant','Coolant Canister','🧊','relic','A cold canister of liquid coolant. Strictly for engines, definitely not for drinking.',{v:0,relic:true});
I('sp_cellpack','Power Cell','🔋','relic','A dense alien battery, about the size of a loaf of bread. Humming faintly.',{v:0,relic:true});
I('sp_sample','Culture Sample','🧫','relic','A sealed dish of fast-growing, harmless-looking, extremely useful bacteria.',{v:0,relic:true});
I('sp_podcode','Launch Sequence','📝','relic','A page of numbers in your handwriting: the hangar\'s launch sequence.',{v:0,relic:true});
const GM=(id,n,icon,d,g)=>I(id,n,icon,'gimmick',d,{g,v:2});
GM('sp_yoyo','Plastic Yo-Yo','🪀','It is the most Earth thing on this ship. Aliens find it fascinating.',[['You do a trick. A watching alien tilts its head in what might be wonder.','xp+s mp+2'],['The string tangles. Even in space, yo-yos do that.','xp+s']]);
GM('sp_badge','Sticker Badge','🏅','"I AM A GREAT READER." Awarded to you in Year 3.',[['You wear it proudly. Somehow it helps.','xp+s mp+2'],['It falls off. Nobody notices.','xp+s']]);
GM('sp_rubber','Rubber Band','➰','Never underestimate a rubber band.',[['A neat twang, and a distraction at just the right moment.','xp+s mp+1'],['It snaps, and stings your thumb.','xp+s hp-1']]);

/* ---------- companions ---------- */
const KA=(id,x)=>{ G.allies[id]=Object.assign({ id, dmg:0, story:'space' }, x); };
KA('sp_noor',{ n:'Noor Haddad', icon:'🧒', role:'Cell-mate · star-gazer', b:{survive:2,lore:1}, bio:'Eleven and fearless about everything except the dark. She keeps a notebook of every constellation she has ever seen.', person:true });
KA('sp_tomas',{ n:'Tomás Rivera', icon:'👦', role:'Older kid · mechanic', b:{craft:3,endure:1}, bio:'Fifteen, quiet, and always fiddling with something. He can fix a bicycle, a tractor or, he suspects, a spaceship.', person:true });
KA('sp_lin',{ n:'Lin Mei', icon:'👧', role:'Cell-mate · budding scientist', b:{heal:2,lore:2}, bio:'Eleven, brilliant and brave. She wants to be a doctor, and already thinks like one.', person:true });
KA('sp_oko',{ n:'Oko', icon:'🐙', role:'Alien archivist · a prisoner too', b:{lore:3,persuade:1}, bio:'A soft-bodied, many-armed creature of the Vell who studies the ship\'s records and quietly disagrees with its captors. It speaks in colour-patterns and soft clicks.', person:true });
Object.keys(G.allies).forEach(a=>{ if(a.startsWith('sp_')) G.talks[a]=[]; });

/* ---------- deeds ---------- */
D('sp_out_cell','You got out of the cell.'); D('sp_has_key','You have an alien access shard.'); D('sp_knows_vell','You know the Vell are not all the same.'); D('sp_oko_friend','Oko, the alien archivist, is on your side.');
D('sp_knows_orbit','You worked out where the ship is.'); D('sp_has_chart','You drew a chart of the stars.'); D('sp_garden_ok','You crossed the biodome without harm.'); D('sp_lab_ok','You found the antidote in the lab.');
D('sp_shuttle_ok','You made the shuttle flyable.'); D('sp_launched','You launched the shuttle.'); D('sp_smart','You kept your head under pressure.'); D('sp_kind','You looked after the younger children.');
D('sp_cell_clear','You counted all the children.'); D('sp_pod_fixed','You repaired a control panel.'); D('sp_oko_betrayed','You failed Oko.'); D('sp_warden_down','You disabled a warden drone.');

/* ---------- regions ---------- */
const R=(id,x)=>{ G.regions[id]=Object.assign({ id, story:'space', biomes:['corridor'], wx:{clear:1}, enc:{}, terrain:[], beasts:[], foes:[], hazards:[], elites:[] },x); };
const E=(e,q,h,k)=>({ sp_event:e, sp_quiz:q, sp_hazard:h, sp_kids:k });
R('sp_cell',{ n:'The Cell', kinds:['sp_cell'], biomes:['cellblock'], enc:E(2,3,0,3) });
R('sp_corridor',{ n:'The Corridors', kinds:['sp_corridor'], biomes:['corridor','vent'], enc:E(4,3,3,2) });
R('sp_ring',{ n:'The Habitat Ring', kinds:['sp_ring'], biomes:['ring','corridor'], enc:E(4,3,3,2) });
R('sp_lab',{ n:'The Laboratories', kinds:['sp_lab'], biomes:['lab','vent'], enc:E(3,4,3,2) });
R('sp_engine',{ n:'The Engine Decks', kinds:['sp_engine'], biomes:['engineroom','vent','corridor'], enc:E(3,3,4,2) });
R('sp_hangar',{ n:'The Hangar', kinds:['sp_hangar'], biomes:['hangar','bridge'], enc:E(3,3,3,3) });
R('sp_descent',{ n:'The Way Down', kinds:['sp_descent'], biomes:['earthview','hangar'], enc:E(2,4,3,2) });
})();
