/* Data for "The Thread of the Moirai": a plane crash, ancient Greece, the gods, and a quiz in disguise */
(function(){
const G = globalThis.G, K = G.skill, I = G.item, D = G.deed;

G.story('greek',{ title:'The Thread of the Moirai', icon:'🏛️', art:'olympus|⚡ 🦉', defName:'Alex', startRegion:'gr_rome', labels:{ mp:'Favor' }, target:250, xpScale:0.7, fallbackArch:'gr_local',
  tag:'Greek mythology · time travel · puzzles & trivia · gods, heroes and monsters · about 250 choices',
  desc:'A holiday in Rome. A flight home. A flash of gold, and a crash. You wake on a beach in ancient Greece, where the gods are real, a goddess of strife is up to no good, and the only way back is to mend whatever broke time itself. Meet Athena, Poseidon, Medusa, Hades, Hephaestus and Zeus, and test what you really know about Greek history and myth.',
  intro:'THE THREAD OF THE MOIRAI\nA time-travelling adventure through ancient Greece.\nYou spent a week exploring Rome: the Colosseum, the Forum, the Trevi Fountain. Now you are flying home. Somewhere over the Mediterranean, the sky turns gold, the engines scream, and a woman\'s laughter fills the cabin.\nWhen you open your eyes, you are lying on a beach, and the wreckage of your plane is burning, and the temples on the hill above are brand new.\nThe gods of Greece are real. A goddess has broken something that was never meant to break. And the only way home is to fix it. Your knowledge of history and myth will matter as much as your courage.\nChoose with the number keys.',
  deathLines:['The world goes quiet and silver. Somewhere a ferryman is waiting, and a river is very still. Your journey ends here.','Your thread slips through the Fates\' fingers, and a soft hush falls. Your journey ends here, in a time that was never yours.','Everything fades to the colour of olive leaves and old marble. This is where your story ends.'],
  create:{ nameArt:'cabin|🧳', nameTitle:'Who are you?', nameText:'You are a traveller on your way home from a holiday in Rome. What is your name? (Type a name, then press Enter.)',
    clsTitle:'What are you good at?', clsText:'{name}, the gods will test your mind, your body and your heart. What sort of traveller are you? This shapes your strengths, your skills and the options you will see.', clsArt:'colosseum|📚 🏃 ✈️ 🎤', originTitle:'Why were you in Rome?', originText:'Your reason for the trip decides what you packed, and who you were hoping to meet.', originArt:'colosseum|🏛️',
    sigText:'You already have a special strength', diffTitle:'How dangerous?', diffText:'A bad choice can end your journey. How forgiving should the gods be?',
    diffs:[['story','Mortal — forgiving','Much kinder. Great for enjoying the myths and the quizzes without fear.'],['normal','Hero — balanced','Smart answers are rewarded. Foolish ones are punished.'],['grim','Tragedy — merciless','Mistakes cost far more. Even the gods are less patient.']],
    confirmText:'Your story begins on a sunny morning in Rome, on the last day of a week-long holiday.' } });

/* ---------- skills ---------- */
const KS=(id,n,icon,d,tags)=>{ K(id,n,icon,'skill',d,{story:'greek'}); (tags||[]).forEach(t=>{ (G.TAGSK[t]=G.TAGSK[t]||[]).push(id); }); };
KS('gr_lore','Classical Education','📚','You remember what you read about Greece and Rome. +2 to lore.',['lore']);
KS('gr_athlete','Athlete','🏃','Fit, fast and tireless. +2 to climbing, dodging and enduring.',['climb','dodge','endure']);
KS('gr_charm','Silver Tongue','🗣️','You can talk to anyone, even a god. +2 to persuading.',['persuade','deceive']);
KS('gr_fix','Fix-It','🔧','You can mend almost anything. +2 to crafting.',['craft']);
KS('gr_aid','First Aid','🩹','Calm hands and a steady voice. +2 to healing.',['heal']);
KS('gr_alphabet','Reads Greek Letters','🔤','Alpha, beta, gamma, and you can read them on a wall. +2 to lore and persuading.',['lore','persuade']);
KS('gr_swim','Strong Swimmer','🏊','The sea does not scare you. +2 to surviving and enduring.',['survive','endure']);
KS('gr_music','Musician','🎵','You carry a tune and a rhythm. +2 to performing and persuading.',['perform','persuade']);
KS('gr_nerve','Steady Nerves','🧘','You stay calm when things get strange. +2 to resisting fear.',['resist']);
KS('gr_nav','Navigator','🧭','You can read a map, a coastline or the stars. +2 to finding your way.',['survive']);
KS('gr_riddle','Riddle Solver','🧩','You love puzzles. +2 to lore and crafting puzzles.',['lore','craft']);
KS('gr_sneak','Quiet Steps','🤫','Soft-footed. +2 to sneaking.',['sneak']);
KS('gr_wit','Quick Wit','⚡','You think on your feet. +2 to resisting and persuading.',['resist','persuade']);

/* ---------- classes ---------- */
const KC=(id,x)=>{ G.classes[id]=Object.assign({ story:'greek', hpl:3, mpl:2, learn:[] },x); };
KC('gr_scholar',{ n:'The History Buff', icon:'📚', d:'You read every plaque in Rome. Great with facts, clues and riddles.', hp:22, mp:10, stats:[8,10,10,15,13,11], sig:'gr_lore', picks:['gr_alphabet','gr_riddle','gr_nerve','gr_nav','gr_charm','gr_aid'], pri:['INT','WIS','CHA'], learn:['gr_alphabet','gr_riddle','gr_nerve','gr_nav','gr_charm','gr_aid','gr_wit'], mentor:'your old Classics teacher', kit:['gr_guidebook','gr_water'] });
KC('gr_athlete',{ n:'The Marathon Runner', icon:'🏃', d:'You came to Rome to run its marathon. Fast, tough and hard to rattle.', hp:28, mp:7, hpl:4, stats:[13,14,13,9,10,11], sig:'gr_athlete', picks:['gr_swim','gr_nerve','gr_sneak','gr_nav','gr_aid','gr_wit'], pri:['STR','DEX','CON'], learn:['gr_swim','gr_nerve','gr_sneak','gr_nav','gr_aid','gr_wit','gr_charm'], mentor:'your running coach', kit:['gr_water','gr_energy'] });
KC('gr_engineer',{ n:'The Aircraft Engineer', icon:'🔧', d:'You fix planes for a living. Calm with machines, clever with puzzles.', hp:24, mp:8, stats:[10,12,12,14,12,9], sig:'gr_fix', picks:['gr_riddle','gr_nav','gr_nerve','gr_sneak','gr_aid','gr_wit'], pri:['INT','DEX','WIS'], learn:['gr_riddle','gr_nav','gr_nerve','gr_sneak','gr_aid','gr_wit','gr_alphabet'], mentor:'your chief engineer', kit:['gr_water','gr_swiss'] });
KC('gr_speaker',{ n:'The Travel Presenter', icon:'🎤', d:'You make travel videos. Charming, curious and never short of words.', hp:22, mp:9, stats:[9,11,10,11,11,15], sig:'gr_charm', picks:['gr_alphabet','gr_music','gr_nav','gr_wit','gr_sneak','gr_nerve'], pri:['CHA','WIS','INT'], learn:['gr_alphabet','gr_music','gr_nav','gr_wit','gr_sneak','gr_nerve','gr_lore'], mentor:'your producer', kit:['gr_water','gr_camera'] });
KC('gr_medic',{ n:'The Paramedic', icon:'🩺', d:'You help people for a living. Steady hands, steady heart.', hp:25, mp:9, hpl:4, stats:[10,11,12,12,14,11], sig:'gr_aid', picks:['gr_nerve','gr_lore','gr_swim','gr_charm','gr_nav','gr_wit'], pri:['WIS','CON','INT'], learn:['gr_nerve','gr_lore','gr_swim','gr_charm','gr_nav','gr_wit','gr_riddle'], mentor:'your supervisor', kit:['gr_water','gr_bandages'] });

/* ---------- reasons for the trip ---------- */
const KO=(id,x)=>{ G.origins[id]=Object.assign({ story:'greek', guardian:'your family' },x); };
KO('gr_study',{ n:'A study tour', icon:'🎓', d:'You went to see the places in your textbooks. (+1 INT, +1 WIS, 20 drachmae)', bonus:{INT:1,WIS:1}, gold:20, kit:['gr_notebook'] });
KO('gr_family',{ n:'A family holiday', icon:'👨‍👩‍👧', d:'Pasta, gelato and a very full itinerary. (+1 CON, +1 CHA, 20 drachmae)', bonus:{CON:1,CHA:1}, gold:20, kit:['gr_snack'] });
KO('gr_business',{ n:'A business trip', icon:'💼', d:'Meetings by day, ruins by night. (+1 CHA, +1 INT, 40 drachmae)', bonus:{CHA:1,INT:1}, gold:40, kit:['gr_pen'] });
KO('gr_backpack',{ n:'A solo backpacking trip', icon:'🎒', d:'One bag, one map, no plan. (+1 DEX, +1 CON, 15 drachmae)', bonus:{DEX:1,CON:1}, gold:15, kit:['gr_lighter'] });

/* ---------- items ---------- */
I('gr_water','Water Bottle','💧','cons','Cold water. Restores 4 HP.',{use:'hp+4',v:1});
I('gr_energy','Energy Gel','🍌','cons','A sticky sachet of runner\'s fuel. Restores 6 HP and 2 Favor.',{use:'hp+6 mp+2',v:2});
I('gr_snack','Packet of Biscuits','🍪','cons','Airport biscuits. Restores 4 HP and 2 Favor.',{use:'hp+4 mp+2',v:1});
I('gr_bandages','Bandages','🩹','cons','A roll of clean bandages. Restores 8 HP.',{use:'hp+8',v:3});
I('gr_bread','Barley Bread','🍞','cons','Warm, dense and honest. Restores 6 HP.',{use:'hp+6',v:2});
I('gr_figs','Bag of Figs','🍈','cons','Sweet and sticky. Restores 4 HP and 3 Favor.',{use:'hp+4 mp+3',v:2});
I('gr_wine','Watered Wine','🍷','cons','The Greek way: wine mixed with water. Restores 3 HP and 4 Favor.',{use:'hp+3 mp+4',v:2});
I('gr_honey','Honey Cake','🍯','cons','A honey cake. Restores 5 HP and 3 Favor. Also a very good bribe for dogs with several heads.',{use:'hp+5 mp+3',v:3});
I('gr_ambrosia','Drop of Ambrosia','✨','cons','Food of the gods. Restores 25 HP and 8 Favor.',{use:'hp+25 mp+8',v:0});
I('gr_guidebook','Rome Guidebook','📖','trink','You read it on the plane. +1 to lore and +1 to finding your way.',{b:{lore:1,survive:1},v:6});
I('gr_notebook','Travel Notebook','📓','trink','Full of notes about Rome. +1 to lore.',{b:{lore:1},v:2});
I('gr_pen','Good Pen','🖊️','trink','A heavy business pen. +1 to lore.',{b:{lore:1},v:3});
I('gr_lighter','Lighter','🔥','trink','A little flame in your pocket. +1 to surviving.',{b:{survive:1},v:2});
I('gr_swiss','Swiss Army Knife','🔪','trink','Dozens of tiny tools. +2 to crafting.',{b:{craft:2},v:9});
I('gr_camera','Camera','📷','trink','A shiny lens and a polished screen. +1 to lore.',{b:{lore:1},v:8});
I('gr_phone','Phone (battery 4%)','📱','trink','No signal, almost no battery, but the screen is a perfect little mirror.',{b:{lore:1},v:0});
I('gr_watch','Wristwatch','⌚','trink','Still ticking. It says 16:41. Time is wrong, and right.',{b:{craft:1},v:0});
I('gr_ticket','Boarding Pass','🎫','relic','Flight AQ 417, Rome to Singapore. Seat 23A. Departed 14:20. Cruising over the Mediterranean.',{v:0,relic:true});
I('gr_owl_feather','Owl Feather of Athena','🪶','trink','A grey feather that never gets dirty. +2 to lore, +1 to resisting.',{b:{lore:2,resist:1},v:0});
I('gr_olive','Olive Branch of Athena','🌿','relic','A branch that never withers. Athena\'s sign of peace.',{v:0,relic:true});
I('gr_mirror','Polished Shield of Athena','🛡️','relic','A bronze shield, polished like a mirror. A way to look at things you cannot look at.',{v:0,relic:true});
I('gr_laurel','Laurel of Apollo','🌱','trink','A laurel wreath from the god of prophecy. +2 to resisting and +1 to persuading.',{b:{resist:2,persuade:1},v:0});
I('gr_pearl','Pearl of Poseidon','⚪','relic','A pearl the size of a plum, still wet. The sea will let you pass.',{v:0,relic:true});
I('gr_sandal_l','Left Winged Sandal','👟','relic','A sandal with a small white wing. Cracked at the heel. It tries to float out of your hand.',{v:0,relic:true});
I('gr_sandal_r','Right Winged Sandal','👟','relic','The matching sandal. Its wing is bent. It sulks when held.',{v:0,relic:true});
I('gr_hourglass','Cracked Hourglass of Chronos','⏳','relic','Sand leaks out of it, upward. It lets whoever holds it nudge time, a little.',{v:0,relic:true});
I('gr_pomegranate','Pomegranate of Persephone','🍎','relic','A ruby pomegranate. Its seeds are a promise.',{v:0,relic:true});
I('gr_obol','Silver Obol','🪙','relic','A coin for the ferryman.',{v:0,relic:true});
I('gr_thread','Silver Thread of the Fates','🧵','relic','One thread of your own life, tangled in the Fates\' loom, now untangled and in your hand.',{v:0,relic:true});
I('gr_forgefire','Spark of the Forge','🔥','relic','A spark in a clay jar. It will never go out.',{v:0,relic:true});
I('gr_sandals','Winged Sandals of Hermes','🪽','relic','Restored. Wings beat softly against your ankles. They can carry you across time itself.',{v:0,relic:true});
I('gr_apple','Golden Apple of Eris','🍏','relic','"To the fairest." A trap with a sweet smell.',{v:0,relic:true});
const GM=(id,n,icon,d,g)=>I(id,n,icon,'gimmick',d,{g,v:2});
GM('gr_euro','Euro Coin','🪙','A shiny coin with an owl on the back (just like the ancient Athenian drachma!).',[['You flip it. The owl faces up. Athena approves, or at least does not object.','xp+s mp+1'],['A beggar looks at it with confusion, then keeps it.','xp+s']]);
GM('gr_gum','Chewing Gum','🫧','Mint chewing gum. Nobody here has ever tasted such a thing.',[['A local chews it with amazed delight. Instant friend.','xp+s mp+2'],['It sticks to your sandal. Argh.','xp+s']]);
GM('gr_magnet','Fridge Magnet of the Colosseum','🧲','A tiny plastic Colosseum. It sticks to nothing here.',[['You hold it up. A priest stares in awe at the tiny temple.','xp+s mp+1'],['It falls into the sand and is lost for ever.','xp+s']]);
GM('gr_selfie','Selfie Stick','🤳','You are not sure how this is going to help.',[['You wave it. A statue seems to ponder whether to be impressed.','xp+s mp+1'],['A seagull steals the phone-holder. Fair.','xp+s']]);
GM('gr_sunglasses','Sunglasses','🕶️','Cool. Very cool.',[['They make you look suspiciously calm. People trust you a little more.','xp+s mp+2'],['A gust takes them. You keep your cool anyway.','xp+s']]);

/* ---------- companions ---------- */
const KA=(id,x)=>{ G.allies[id]=Object.assign({ id, dmg:0, story:'greek' },x); };
KA('gr_elena',{ n:'Elena Rossi', icon:'👵', role:'Passenger · retired Classics teacher', b:{lore:3,persuade:1}, bio:'Seat 23B. She has taught Greek and Latin for forty years and corrects everyone\'s pronunciation, even gods\'.', person:true });
KA('gr_mara',{ n:'Mara Okafor', icon:'👩‍✈️', role:'First Officer · off duty', b:{craft:2,resist:2}, bio:'The co-pilot, who flew the plane down, and who does not intend to lose another passenger.', person:true });
KA('gr_niko',{ n:'Niko', icon:'🧒', role:'Shepherd boy of Attica', b:{survive:2,endure:1,sneak:1}, bio:'A quick, curious boy with a shepherd\'s crook. He thinks you are a very odd sort of Phoenician.', person:true });
KA('gr_glaux',{ n:'Glaux', icon:'🦉', role:'Owl of Athena', b:{lore:2,sneak:1,spirit:1}, person:false, bio:'A small grey owl with very large eyes. Fond of showing off and fond of being right.' });
Object.keys(G.allies).forEach(a=>{ if(a.startsWith('gr_')) G.talks[a]=[]; });

/* ---------- deeds ---------- */
D('gr_ticket_read','You know the flight: AQ 417, seat 23A, 14:20 departure.'); D('gr_knows_time','You remember the plane crashed at 16:47. Plane time.'); D('gr_elena_joined','Elena Rossi is with you.'); D('gr_niko_joined','Niko the shepherd boy is with you.'); D('gr_mara_joined','Mara the co-pilot is with you.'); D('gr_glaux_joined','Glaux the owl is with you.');
D('gr_knows_greek','You can understand the Greeks.'); D('gr_met_athena','You met Athena.'); D('gr_athena_boon','Athena gave you her olive branch and shield.'); D('gr_apollo_boon','Apollo gave you a laurel.'); D('gr_oracle','The Oracle at Delphi told you what broke.'); D('gr_knows_eris','You know Eris stole the sandals and cracked the hourglass.');
D('gr_poseidon_boon','Poseidon gave you a pearl.'); D('gr_sandal_l_got','You have the left winged sandal.'); D('gr_sandal_r_got','You have the right winged sandal.'); D('gr_hourglass_got','You have the Hourglass of Chronos.'); D('gr_medusa_freed','You treated Medusa with kindness.'); D('gr_medusa_stone','You turned Medusa\'s gaze on those who hurt her.');
D('gr_persephone','Persephone gave you a pomegranate.'); D('gr_cerberus','You soothed Cerberus.'); D('gr_thread_got','You recovered your own thread of fate.'); D('gr_forge_done','Hephaestus restored the sandals.'); D('gr_zeus_heard','Zeus heard your case.'); D('gr_eris_judged','Eris stood trial on Olympus.');
D('gr_rome_done','You explored Rome.'); D('gr_kind','You were kind to a stranger.'); D('gr_respect','You showed the gods respect.'); D('gr_hubris','You showed hubris.'); D('gr_trivia_ace','You answered a run of questions correctly.');
D('gr_v_colosseum','You visited the Colosseum.'); D('gr_v_forum','You visited the Roman Forum.'); D('gr_v_trevi','You visited the Trevi Fountain.'); D('gr_v_pantheon','You visited the Pantheon.');

/* ---------- regions ---------- */
const R=(id,x)=>{ G.regions[id]=Object.assign({ id, story:'greek', biomes:['ruins'], wx:{clear:5,cloudy:2,rain:1}, enc:{}, terrain:[], beasts:[], foes:[], hazards:[], elites:[] },x); };
const E=(l,t,k,p)=>({ gr_local:l, gr_trivia:t, gr_kind:k, gr_peril:p });
R('gr_rome',{ n:'Rome', kinds:['gr_rome'], biomes:['colosseum','town','skyline'], enc:E(5,2,2,0) });
R('gr_shore',{ n:'The Shore of Attica', kinds:['gr_shore'], biomes:['wreck','coast','beach','meadow'], enc:E(5,3,3,2) });
R('gr_athens',{ n:'Athens', kinds:['gr_athens'], biomes:['agora','acropolis','town'], enc:E(5,5,3,1) });
R('gr_delphi',{ n:'Delphi', kinds:['gr_delphi'], biomes:['oracle','mountain','ruins'], enc:E(5,5,2,1) });
R('gr_sea',{ n:'The Aegean Sea', kinds:['gr_sea'], biomes:['sea','coast','pier'], wx:{clear:3,cloudy:2,rain:2,storm:2}, enc:E(5,4,2,3) });
R('gr_gorgon',{ n:'Gorgon Island', kinds:['gr_gorgon'], biomes:['gorgon','sea'], enc:E(4,4,2,3) });
R('gr_forge',{ n:'The Forge of Hephaestus', kinds:['gr_forge'], biomes:['forge','cave'], enc:E(4,4,2,2) });
R('gr_hades',{ n:'The Underworld', kinds:['gr_hades'], biomes:['underworld','cave'], enc:E(4,5,2,3) });
R('gr_olympus',{ n:'Mount Olympus', kinds:['gr_olympus'], biomes:['olympus','throne'], wx:{clear:8}, enc:E(4,5,2,1) });
})();
