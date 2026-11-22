/* Story library + data for "The Lady of Casuarina House" (modern Singapore ghost story) */
(function(){
const G = globalThis.G, K = G.skill, I = G.item;

/* ---------- story library ---------- */
G.story('ashen',{ title:'The Ashen Queen', icon:'🏰', art:'title|🏰 🔥', defName:'Elara',
  tag:'Medieval fantasy · epic quest · 500+ choices · swords, spells & a sorceress',
  desc:'Grow up in a burning village, join the Silver Lantern Company, march across eight lands, and face the Ashen Queen. A very long adventure with many ways to die — and seven endings.',
  intro:'THE ASHEN QUEEN\nA choose-your-own-adventure of steel, sorcery and consequence.\nThirty years ago, the sorceress Vorathra burned the kingdom of Aurelon to cinders. Now the ash is spreading, and a child in a quiet village will grow up to meet her. That child is you. Every choice you make will shape who you become — and whether you live to stand before her.\nChoose with the number keys.',
  create:{ nameArt:'village|🧒', nameTitle:'Who are you?', nameText:'Every tale begins with a name. What will they call you in the stories? (Type a name, then press Enter.)',
    clsTitle:'Choose your path', clsText:'{name}, the world will test you in many ways. What sort of hero will you become? This shapes your strengths, your spells, your hit points, and many choices to come.',
    originTitle:'Where did you grow up?', originText:'Your childhood in the village of Thornwick will be the first chapter of your tale. Who raised you, and how?', clsArt:'camp|⚔️ 🔮 🗡️ 🏹', originArt:'village|🏘️',
    sigText:'You already have a signature gift', diffTitle:'How perilous?', diffText:'Death can end your story at any point. How dangerous should the world be?',
    diffs:[['story','Story — forgiving','Damage is much lower. For those who want to enjoy the tale (and its 500+ choices) without fear of an early grave.'],['normal','Adventurer — balanced','The intended experience. Smart choices are rewarded; foolish ones are punished.'],['grim','Grim — merciless','Damage is far higher. Every fight and every mistake could be the last.']],
    confirmText:'Your story begins in the quiet village of Thornwick, when you were eight years old.' } });

G.story('changi',{ title:'The Lady of Casuarina House', icon:'👻', art:'bungalow|🏚️ 🌙', defName:'Jun', startRegion:'cg_tampines', fixedTime:true, localWx:true, fallbackArch:'cg_local',
  labels:{ mp:'Courage', money:'$' },
  tag:'Modern Singapore · ghost mystery · Tampines to Changi Village · about 70+ choices · family-friendly',
  desc:'You are a Primary 5 kid in Tampines. A classmate has vanished near Changi Village, and everyone whispers about an old house by the sea that only children can see. Ride the MRT across Singapore, collect clues and helpful things, and decide how to face the lady of Casuarina House. (Spooky, but never gory.)',
  intro:'THE LADY OF CASUARINA HOUSE\nA ghost story set in modern Singapore.\nIt is the seventh lunar month — Hungry Ghost month. In Tampines, aunties are folding joss paper and everyone is being extra careful. At school, one seat is empty: your classmate Aiman has not been seen since the weekend. Some say he went to Changi Village. Some say he saw a house that is not on any map.\nThis is a spooky story — but never a gory one. Choose with the number keys.',
  create:{ nameArt:'hdb|🧒', nameTitle:'Who are you?', nameText:'You are a Primary 5 student living in an HDB flat in Tampines. What is your name? (Type a name, then press Enter.)',
    clsTitle:'What kind of kid are you?', clsText:'{name}, everyone in your class is good at something. What are you best at? This shapes your strengths, your skills, and the options you will see.',
    originTitle:'Your family', originText:'Singapore is home to many cultures. Whose family do you come from? It changes the stories you grew up with.', clsArt:'classroom|📚 ⚽ 🎨', originArt:'void|👵',
    sigText:'You already have a special strength', diffTitle:'How spooky and tough?', diffText:'Some choices can end your adventure. How forgiving should the story be?',
    diffs:[['story','Easy — gentle','Much kinder. Great for younger players who just want to enjoy the mystery.'],['normal','Normal — balanced','Smart choices are rewarded and silly ones can end your adventure.'],['grim','Tough — extra spooky','Mistakes cost more. Think carefully.']],
    confirmText:'Your story begins on a Monday morning in an HDB flat in Tampines, in the seventh lunar month.' } });

/* ---------- skills (all prefixed cg_, belong to the changi story) ---------- */
const KS=(id,n,icon,d,tags)=>{ K(id,n,icon,'skill',d,{story:'changi'}); (tags||[]).forEach(t=>{ (G.TAGSK[t]=G.TAGSK[t]||[]).push(id); }); };
KS('cg_study','Quick Learner','🧠','You remember what you read. +2 to lore and observation.',['lore']);
KS('cg_sports','Sporty','🏃','Fast, strong, never tired. +2 to climbing, dodging and endurance.',['climb','dodge','endure']);
KS('cg_chat','Gift of the Gab','🗣️','You can talk to anyone. +2 to persuading.',['persuade','deceive']);
KS('cg_gadget','Gadget Whiz','🔧','You love fixing and rigging things. +2 to crafting.',['craft']);
KS('cg_sketch','Sketching','🎨','You notice small details and draw them. +2 to lore.',['lore']);
KS('cg_sneak','Quiet Steps','🤫','Soft-footed, like a cat. +2 to sneaking.',['sneak']);
KS('cg_firstaid','First Aid (Scouts)','🩹','Plasters, bandages and a calm voice. +2 to healing.',['heal']);
KS('cg_faith','Respect for the Unseen','🙏','You know the old customs and show respect. +2 with spirits and fears.',['spirit','resist']);
KS('cg_lang','Mother Tongue','🗨️','You speak with elders in their own language. +2 to persuading and lore.',['persuade','lore']);
KS('cg_nav','MRT Navigator','🚇','You can find your way around Singapore. +2 to finding your way.',['survive']);
KS('cg_haggle','Market Haggler','🛍️','"Uncle, can cheaper?" +2 to persuading with shopkeepers.',['persuade']);
KS('cg_brave','Brave Heart','🦁','You stay steady when it is scary. +2 against fear.',['resist']);
KS('cg_calm','Calm Breathing','🌬️','In... and out. +2 against fear and for staying cool.',['resist','endure']);

/* ---------- kid "classes" ---------- */
const KC=(id,x)=>{ G.classes[id]=Object.assign({ story:'changi', hpl:3, mpl:2, learn:[] },x); };
KC('cg_bookworm',{ n:'The Bookworm', icon:'📚', d:'Always at the library. Great with clues, facts and puzzles.', hp:20, mp:8, stats:[8,11,10,15,13,11], sig:'cg_study', picks:['cg_calm','cg_lang','cg_sketch','cg_nav','cg_firstaid','cg_faith'], pri:['INT','WIS','CHA'], learn:['cg_calm','cg_lang','cg_sketch','cg_nav','cg_firstaid','cg_faith','cg_brave'], mentor:'Mr Tan, your form teacher', kit:['cg_water','cg_notebook'] });
KC('cg_sporty',{ n:'The Sporty Kid', icon:'⚽', d:'Always running, climbing and playing. Fast, tough and hard to scare.', hp:26, mp:6, hpl:4, stats:[13,14,13,9,10,11], sig:'cg_sports', picks:['cg_brave','cg_nav','cg_firstaid','cg_sneak','cg_chat','cg_calm'], pri:['STR','DEX','CON'], learn:['cg_brave','cg_nav','cg_firstaid','cg_sneak','cg_chat','cg_calm'], mentor:'Coach Ravi', kit:['cg_water','cg_isotonic'] });
KC('cg_chatty',{ n:'The Social Butterfly', icon:'🗣️', d:'Knows everyone from the hawker uncle to the school guard. Great at talking.', hp:21, mp:9, stats:[9,11,10,11,11,15], sig:'cg_chat', picks:['cg_haggle','cg_lang','cg_nav','cg_sneak','cg_study','cg_calm'], pri:['CHA','WIS','DEX'], learn:['cg_haggle','cg_lang','cg_nav','cg_sneak','cg_study','cg_calm','cg_brave'], mentor:'Madam Aini, the canteen auntie', kit:['cg_water','cg_sweets'] });
KC('cg_tinker',{ n:'The Gadget Kid', icon:'🔧', d:'Loves fixing, building and clever tricks. Always has a gadget in the bag.', hp:21, mp:8, stats:[9,13,10,14,11,10], sig:'cg_gadget', picks:['cg_nav','cg_sneak','cg_study','cg_haggle','cg_brave','cg_firstaid'], pri:['INT','DEX','WIS'], learn:['cg_nav','cg_sneak','cg_study','cg_haggle','cg_brave','cg_firstaid','cg_calm'], mentor:'Uncle Kumar, the school IT assistant', kit:['cg_water','cg_penlight'] });
KC('cg_dreamer',{ n:'The Quiet Dreamer', icon:'🎨', d:'Draws, daydreams and notices things other people miss — including things in the corner of the eye.', hp:20, mp:10, stats:[8,12,10,12,15,11], sig:'cg_sketch', picks:['cg_faith','cg_calm','cg_sneak','cg_study','cg_lang','cg_brave'], pri:['WIS','INT','DEX'], learn:['cg_faith','cg_calm','cg_sneak','cg_study','cg_lang','cg_brave','cg_nav'], mentor:'Ms Lim, your art teacher', kit:['cg_water','cg_sketchbook'] });

/* ---------- family backgrounds ---------- */
const KO=(id,x)=>{ G.origins[id]=Object.assign({ story:'changi' },x); };
KO('cg_chinese',{ n:'Chinese-Singaporean family', icon:'🏮', d:'Ah Ma cooks, Hokkien and Mandarin fill the flat. (+1 WIS, +1 CHA, $20)', bonus:{WIS:1,CHA:1}, gold:20, guardian:'Ah Ma', kit:['cg_keep_chinese'], flags:['has_gran'] });
KO('cg_malay',{ n:'Malay-Singaporean family', icon:'🌙', d:'Nenek tells stories at the kampung-style table. (+1 CON, +1 WIS, $20)', bonus:{CON:1,WIS:1}, gold:20, guardian:'Nenek', kit:['cg_keep_malay'], flags:['has_gran'] });
KO('cg_indian',{ n:'Indian-Singaporean family', icon:'🪔', d:'Paati hums old songs while she cooks. (+1 INT, +1 DEX, $20)', bonus:{INT:1,DEX:1}, gold:20, guardian:'Paati', kit:['cg_keep_indian'], flags:['has_gran'] });
KO('cg_eurasian',{ n:'Eurasian family', icon:'🎺', d:'Grandpa Joe has a story, a guitar and a pot of curry debal. (+1 DEX, +1 CHA, $20)', bonus:{DEX:1,CHA:1}, gold:20, guardian:'Grandpa Joe', kit:['cg_keep_eurasian'], flags:['has_gran'] });

/* ---------- items ---------- */
// everyday
I('cg_water','Water Bottle','💧','cons','Cold water from the cooler. Restores 4 HP.',{use:'hp+4',v:1});
I('cg_plaster','Plasters','🩹','cons','A strip of plasters. Restores 6 HP.',{use:'hp+6',v:2});
I('cg_isotonic','Sports Drink','🥤','cons','A can of isotonic drink. Restores 8 HP.',{use:'hp+8',v:2});
I('cg_sweets','White Rabbit Sweets','🍬','cons','Milky candy in rice-paper wrappers. Restores 3 Courage.',{use:'mp+3 hp+1',v:1});
I('cg_milo','Milo Packet','🍫','cons','A chocolatey boost. Restores 5 Courage.',{use:'mp+5',v:2});
I('cg_nasi','Packet Nasi Lemak','🍛','cons','Rice, sambal, egg and ikan bilis. Restores 10 HP and 2 Courage.',{use:'hp+10 mp+2',v:3});
I('cg_balm','Tiger Balm','🧴','cons','A tiny jar with a tiger on the lid. Sniff, rub, feel braver: restores 4 Courage and 3 HP.',{use:'mp+4 hp+3',v:4});
// things you carry
I('cg_notebook','Notebook & Pencil','📓','trink','Good for noting down clues. +1 to lore.',{b:{lore:1},v:2});
I('cg_sketchbook','Sketchbook','📒','trink','You draw what you see. +1 to lore and sneaking.',{b:{lore:1,sneak:1},v:3});
I('cg_penlight','Keychain Penlight','🔦','trink','Tiny, but bright enough. +1 to survival (finding your way).',{b:{survive:1},v:3});
I('cg_flashlight','Strong Torchlight','🔦','trink','A bright, rechargeable torch. +2 to finding your way, +1 to lore.',{b:{survive:2,lore:1},v:9});
I('cg_glowband','Glow Bracelet','✨','trink','It glows softly. +1 against fear.',{b:{resist:1},v:2});
I('cg_charm','Peace Charm','📿','trink','A small blessed charm given kindly by a temple helper. +2 with spirits, +1 against fear.',{b:{spirit:2,resist:1},v:0});
I('cg_bell','Fisherman\'s Brass Bell','🔔','trink','A little ship\'s bell. Its ring is clear and friendly. +1 with spirits.',{b:{spirit:1},v:0});
I('cg_folkbook','Book of Southeast Asian Ghost Tales','📖','trink','You read that most ghosts are sad, not mean. +2 to lore, +1 with spirits.',{b:{lore:2,spirit:1},v:14});
I('cg_keep_chinese','Ah Ma\'s Jade Bracelet','💚','trink','A cool green bracelet from Ah Ma. +1 against fear.',{b:{resist:1},v:0});
I('cg_keep_malay','Nenek\'s Prayer Cloth','🧣','trink','A soft cloth that smells of home. +1 against fear.',{b:{resist:1},v:0});
I('cg_keep_indian','Paati\'s Silver Anklet-Bell','🔔','trink','A tiny bell on a silver chain. +1 against fear.',{b:{resist:1},v:0});
I('cg_keep_eurasian','Grandpa Joe\'s Old Harmonica','🎵','trink','A little mouth organ. +1 against fear.',{b:{resist:1},v:0});
// special / quest items (relic group)
I('cg_oranges','Bag of Mandarin Oranges','🍊','relic','A polite offering to visitors from the other side.',{v:0,relic:true});
I('cg_aiman_tag','Aiman\'s Bag Tag','🏷️','relic','A cartoon football bag-tag with "AIMAN" written on it.',{v:0,relic:true});
I('cg_aiman_bottle','Aiman\'s Water Bottle','🧴','relic','A blue water bottle with his name on it, still cold.',{v:0,relic:true});
I('cg_photo','Old Photograph','🖼️','relic','A black-and-white photo of a white house, a lady and a little girl holding a toy boat. The clock behind them says 4:15.',{v:0,relic:true});
I('cg_boat','Mei\'s Wooden Toy Sailboat','⛵','relic','A little boat with a red sail. A name is carved on the hull: MEI.',{v:0,relic:true});
I('cg_lantern','Mosaic Lantern','🏮','relic','A glowing mosaic lamp from Arab Street. Light that guides someone home.',{v:0,relic:true});
// gimmicks: random silly outcomes when you improvise with them
const GM=(id,n,icon,d,g)=>I(id,n,icon,'gimmick',d,{g,v:2});
GM('cg_merlion','Merlion Keychain','🦁','A tiny Merlion that sprays absolutely nothing.',[['You hold it up. It looks very brave and very silly. You feel a bit braver.','mp+2 xp+s'],['It slips and lands with a tiny clink. Everyone is distracted for a second.','xp+s']]);
GM('cg_lucky_coin','Lucky Fountain Coin','🪙','A coin you rubbed for luck.',[['You flip it. Heads. Somehow that helps.','xp+s mp+1'],['The coin rolls away and a cat chases it. Funny, at least.','xp+s']]);
GM('cg_fidget','Fidget Spinner','🌀','It still spins. Nobody knows why you still have it.',[['You spin it. Round and round. It calms you down.','mp+2'],['It whirrs loudly, and something goes quiet for a moment.','xp+s']]);
GM('cg_eraser','Durian-Scented Eraser','🧽','It smells exactly like a durian. Nobody can stand it.',[['The smell is... powerful. Everyone nearby takes a step back.','xp+s'],['You sniff it by mistake. Oh no.','hp-1 xp+s']]);
GM('cg_gum','Foreign Chewing Gum (a gift!)','🫧','A cousin from overseas gave you this. Fun fact: selling chewing gum is not allowed in Singapore!',[['You do not chew it. But holding it makes you feel clever for knowing the rule.','xp+s'],['It sticks to your hand. Argh.','xp+s']]);
GM('cg_angpow','Empty Red Packet','🧧','A red packet from last Chinese New Year, with a small drawing of a rabbit.',[['You wave it like a tiny flag. For luck.','mp+2 xp+s'],['A breeze takes it. You feel oddly lucky.','xp+s']]);

/* ---------- friends ---------- */
const KA=(id,x)=>{ G.allies[id]=Object.assign({ id, dmg:0, story:'changi' },x); };
KA('cg_priya',{ n:'Priya Nair', icon:'👧', role:'Classmate · the clever one', b:{lore:2,persuade:1}, bio:'Always has the answer, and a spare pencil. Wants to be a scientist.' });
KA('cg_hakim',{ n:'Hakim Yusof', icon:'🧒', role:'Classmate · the sporty one', b:{climb:2,endure:1,dodge:1}, bio:'Plays football every day, afraid of nothing — except his mother\'s cooking when he is late.' });
KA('cg_jiahui',{ n:'Tan Jia Hui', icon:'👩', role:'Classmate · the loud one', b:{resist:2,persuade:1}, bio:'The loudest girl in class. Claims she is not scared of ghosts. Her hands say otherwise.', person:true });
KA('cg_mochi',{ n:'Mochi', icon:'🐈', role:'Stray cat of Tampines', b:{spirit:1,sneak:1}, person:false, bio:'A grey-and-white community cat who always seems to know when something unseen is nearby.' });
Object.keys(G.allies).forEach(a=>{ if(a.startsWith('cg_')) G.talks[a]=[]; });

/* ---------- deeds (shown in the Hero tab) ---------- */
const D=G.deed;
D('cg_respect','You showed proper respect during Hungry Ghost month.'); D('cg_rude','You were careless in the seventh month (someone noticed).'); D('cg_oranges_got','You have oranges to offer.');
D('cg_priya_joined','Priya joined your investigation.'); D('cg_hakim_joined','Hakim joined your investigation.'); D('cg_jiahui_joined','Jia Hui joined your investigation.'); D('cg_mochi_joined','Mochi the cat follows you.');
D('cg_knows_legend','You know the legend of Casuarina House.'); D('cg_knows_names','You know the names: Madam Soo Lian and her daughter Mei.'); D('cg_knows_time','You know the clock stopped at 4:15.'); D('cg_lullaby','You know Madam Soo\'s lullaby.'); D('cg_knows_dusk','You know the house only appears to children at dusk.');
D('cg_told_adult','You told a grown-up what you suspect.'); D('cg_ahma_waits','Your grandparent will wait at the beach.'); D('cg_saw_house','You saw Casuarina House with your own eyes.'); D('cg_saw_aiman','You saw Aiman at an upstairs window.');
D('cg_v_orchard','You visited Orchard Road.'); D('cg_v_chinatown','You visited Chinatown.'); D('cg_v_littleindia','You visited Little India.'); D('cg_v_glam','You visited Kampong Glam.'); D('cg_v_hawpar','You visited Haw Par Villa.'); D('cg_v_sentosa','You visited Sentosa.'); D('cg_v_marina','You visited Marina Bay.'); D('cg_v_jewel','You visited Jewel Changi Airport.');
D('cg_sailor_song','You learned a sailors\' song.'); D('cg_kind','You were kind to someone who needed it.'); D('cg_lesson_ghost','You learned: ghosts are usually sad, not mean.'); D('cg_offering_given','You left an offering at the gate.');

/* ---------- regions ---------- */
const R=(id,x)=>{ G.regions[id]=Object.assign({ id, story:'changi', biomes:['hdb'], wx:{clear:3,cloudy:3,rain:2}, enc:{cg_local:1}, terrain:[], beasts:[], foes:[], hazards:[], elites:[] },x); };
R('cg_tampines',{ n:'Tampines', kinds:['cg_tampines'], biomes:['hdb','void','park','hawker','mall'] });
R('cg_changi',{ n:'Changi Village', kinds:['cg_changi'], biomes:['beach','pier','hawker','park'] });
R('cg_city',{ n:'Across Singapore', kinds:['cg_city'], biomes:['skyline','mall','mrt','temple'] });
R('cg_house',{ n:'Casuarina House', kinds:['cg_house'], biomes:['bungalow','haunt'] });
})();
