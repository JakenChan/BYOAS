/* THE LADY OF CASUARINA HOUSE (500 edition) — 4 more city destinations, Chapter F (dreams of Mei), Chapter H (Old Singapore) */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const DUSK = 'flag:cg_saw_house?cg_duskask';

/* ---------- retarget the original city chapter to five days, twelve destinations ---------- */
const city = G.chapters.cg3;
city.text = `School holidays have begun. For the next three days, Singapore is your classroom.\nThe island is small enough to cross in an hour or two, and the MRT can take you almost anywhere: Orchard Road's shops, Chinatown's temples, Little India's late-night stores, the old Malay quarter of Kampong Glam, the stone dragons of Haw Par Villa, the beaches of Sentosa, the glittering Marina Bay, the airport's glass garden at Jewel, the green hush of the Botanic Gardens, the National Museum, the Science Centre and the Night Safari.\nYou cannot visit everywhere. Choose the three places you think will help the most.`;
city.beats = ['cg3_plan','~enc','cg3_hub','~enc','cg3_eve1','cg3_hub','~enc','cg3_eve2','cg3_hub','~enc','cg3_prep',DUSK];

/* ---------- BOTANIC GARDENS ---------- */
S_('cg3_bot1','Singapore Botanic Gardens','park|🌳 🦢',
`The Singapore Botanic Gardens is a green oasis a few minutes from Orchard Road. It was founded in 1859 and in 2015 became Singapore's first UNESCO World Heritage Site. Ancient trees tower overhead, swans glide over Symphony Lake and joggers circle the paths. The air is cool and sweet-smelling.\nA volunteer guide in a green polo shirt smiles at you. "First time?"`,[
 {t:`Join her walking tour.`,y:[`She points out a three-hundred-year-old tree, a tiny orchid on its bark and a squirrel eating a nut. "Every tree has a story," she says. "You just have to stand still long enough."`,'xp+m mp+3 >cg3_bot2']},
 {t:`Feed the swans (with the proper swan food).`,y:[`The swans glide over, honking. One steals your sandwich anyway. A small boy laughs at you.`,'xp+s mp+3 >cg3_bot2']},
 {t:`Go straight to the Orchid Garden.`,y:[`Five minutes through a shady path, and the first orchids appear: purple, gold, speckled.`,'xp+s >cg3_bot2']} ]);
S_('cg3_bot2','National Orchid Garden','park|🌺 🌸',
`The National Orchid Garden has thousands of orchids, hanging in colourful curtains, climbing up arches and nestled in mossy logs. Singapore's national flower, Vanda Miss Joaquim, is here, a deep purple orchid named after Agnes Joaquim, who bred it in her garden in 1893.\nA gardener, Mr Teo, is watering a tray of tiny orchids.`,[
 {t:`Ask him which orchid is the most special.`,c:'CHA 8 persuade',y:[`"They all are," he says, "but this one is secret." He cups a tiny white flower. "It only blooms at night, and smells like jasmine. Nights are good for quiet things." He gives you a pressed orchid in a little card.`,'xp+l mp+4 flag:cg_lesson_ghost'],n:[`"Ask me tomorrow," he says, busily.`,'xp+m']},
 {t:`Look at the labels and learn the names.`,c:'INT 8 lore',y:[`Vanda, Dendrobium, Phalaenopsis. You learn five long names and forget four.`,'xp+m'],n:[`Too many names. You enjoy the colours instead.`,'xp+s mp+2']},
 {t:`Sit on a bench and breathe.`,y:[`The air is cool, the light is green, and you feel your whole body slow down.`,'xp+m mp+5 >cg3_bot3']} ].map(o=>{ if(o.y && !/>cg3_bot3/.test(o.y[1])) o.y[1]+=' >cg3_bot3'; if(o.n && !/>cg3_bot3/.test(o.n[1])) o.n[1]+=' >cg3_bot3'; return o; }));
S_('cg3_bot3','The Rainforest Walk','park|🌴 🦎',
`A trail leads into a patch of real primary rainforest, one of the few left in the middle of a city. The trees are tall and ancient. Tree roots arch like buttresses, vines hang and a hush swallows the noise of traffic. A monitor lizard crosses the path with a "tut-tut-tut" of claws.\nThe forest feels very old and very kind.`,[
 {t:`Walk slowly and listen to the forest.`,c:'WIS 8 resist',y:[`Cicadas, a distant bird, dripping leaves. You learn how to stand still in the green, and feel unafraid. A good skill for a haunted house.`,'xp+l skill:cg_calm mp+4'],n:[`It is peaceful, if a little buzzy with mosquitoes.`,'xp+m mp+2']},
 {t:`Look for animals.`,c:'WIS 8 survive',y:[`A flying lemur clinging to a trunk, a hornbill, a tiny frog. The forest has more eyes than you thought.`,'xp+m mp+3'],n:[`Birds, mostly. A very good bird day.`,'xp+s mp+2']},
 {t:`Sit under a giant tree and journal.`,r:'item:cg_notebook|item:cg_sketchbook',y:[`You write what you have learned: a boat, a lantern, a song, a kind word. Under the old tree, it all seems clearer.`,'xp+m mp+4 flag:cg_lesson_ghost']} ]);

/* ---------- NATIONAL MUSEUM ---------- */
S_('cg3_mus1','The National Museum','mall|🏛️ 📜',
`The National Museum of Singapore is a grand white building with a glass dome, the oldest museum in the country. Its galleries trace the story of Singapore from ancient settlements through colonial days, the Second World War, independence in 1965 and the modern city. A guide in a black blazer says: "Start with the History Gallery."\nThe corridor is cool and hushed.`,[
 {t:`Follow the History Gallery from the beginning.`,y:[`Old maps, coins, clay pots, uniforms. You walk through time in thirty minutes, and come out knowing why Singapore is the way it is.`,'xp+m flag:cg_museum mp+2 >cg3_mus2']},
 {t:`Skip to the 1950s and 1960s section.`,y:[`Black-and-white photos of kampung life: wooden houses, children on bicycles, a fisherman with a lantern. You stare at a photo for a very long time.`,'xp+m flag:cg_museum >cg3_mus2']},
 {t:`Ask the guide where to find old photos of Changi.`,c:'CHA 8 persuade',y:[`She smiles. "Level two, the Growing Up gallery. And the archive room, ask for Mrs Yeo."`,'xp+m flag:cg_museum >cg3_mus2'],n:[`"Follow the signs," she says, pleasantly.`,'xp+s flag:cg_museum >cg3_mus2']} ]);
S_('cg3_mus2','Growing Up','mall|🧸 🚲',
`The Growing Up gallery shows what it was like to be a child in Singapore long ago. A wooden toy cart. A spinning top. A set of glass marbles. A tin of White Rabbit sweets. A schoolboy's uniform, with short khaki trousers. And in a corner, a glass case holding a row of small wooden toy sailboats, each with a tiny cloth sail.\nA label reads: "Toy sailboats, Changi, 1950s. Made by fishermen for their children."`,[
 {t:`Study the toy boats closely.`,c:'INT 8 craft',y:[`Rounded hull, single mast, triangular sail. You draw each detail in your notebook. If you ever make one, you will make it just like this.`,'xp+l flag:cg_replica_made mp+3'],n:[`You note the shapes. Details blur, but the idea is clear.`,'xp+m flag:cg_replica_made']},
 {t:`Ask a guard who the toys belonged to.`,y:[`"Donated by a Changi family," he says. "Most are very old. They were sailed on the beach in the evenings, and brought home before dark." His eyes twinkle. "Not always."`,'xp+m flag:cg_lesson_ghost']},
 {t:`Play the museum's touch-screen game about old toys.`,y:[`You race a virtual spinning top, win a virtual marble and lose a virtual game of five stones. Educational and fun.`,'xp+m mp+4']} ].map(o=>{ o.y[1]+=' >cg3_mus3'; if(o.n) o.n[1]+=' >cg3_mus3'; return o; }));
S_('cg3_mus3','The Archive Room','classroom|📁 🎧',
`In a quiet side room, you find Mrs Yeo, an archivist with silver glasses and a sweater, sorting folders. A shelf of tapes lines the wall. "Oral histories," she says. "Recordings of old Singaporeans telling stories. We keep them so they don't disappear."\nShe puts on a pair of headphones and offers you another.`,[
 {t:`Listen to a recording from a Changi villager.`,c:'WIS 8 spirit',y:[`An old woman's voice, crackling and warm: "Madam Soo Lian had a lantern in the window every night. When she died, the lantern was still burning. We did not put it out. We could not. It seemed wrong." A long pause on the tape. "I think it burns still."`,'xp+xl mp+3 flag:cg_knows_storm flag:cg_knows_names flag:cg_lullaby'.replace('xp+xl','xp+l')],n:[`The tape is hissy and the words are hard to follow. But you get the gist: sorrow, lanterns, sea.`,'xp+m flag:cg_knows_storm']},
 {t:`Ask Mrs Yeo how she became an archivist.`,c:'CHA 8 persuade',y:[`"I wanted to listen," she says simply. "Everyone has a story, and most disappear. I like to catch them before they go." She gives you a copy of the transcript.`,'xp+m flag:cg_kind'],n:[`She smiles, tired, and goes back to her folders.`,'xp+s']},
 {t:`Thank her and leave.`,y:[`The headphones go back on the shelf. The voices stay in your head.`,'xp+s mp+1']} ]);

/* ---------- SCIENCE CENTRE ---------- */
S_('cg3_sci1','Singapore Science Centre','mall|🔬 🧪',
`The Singapore Science Centre in Jurong, opened in 1977, is full of hands-on exhibits: a giant kaleidoscope, a human-sized hamster wheel, a room that bends your sight, and a tornado made of mist. Kids race around shrieking and pressing buttons. The air smells of popcorn and cold metal.\nPriya, if she is with you, is already at the first exhibit.`,[
 {t:`Try the static electricity ball.`,y:[`Your hair rises like a dandelion. A small spark jumps to your friend's nose. Everyone shrieks happily.`,'xp+m mp+4 >cg3_sci2']},
 {t:`Visit the sound and light exhibit.`,y:[`You discover that a ringing bell can be seen as ripples in water, and that sound is a kind of touch.`,'xp+m mp+3 >cg3_sci2']},
 {t:`Ask a demonstrator about "cold spots".`,c:'CHA 8 persuade',y:[`"Drafts," she says. "Air currents. Heat travelling. Sometimes pipes. Sometimes things we haven't explained." She grins. "Science is mostly curiosity."`,'xp+m >cg3_sci2'],n:[`"Check the physics zone," she says, and rushes off.`,'xp+s >cg3_sci2']} ]);
S_('cg3_sci2','The Physics of Fear','mall|⚡ 😱',
`A booth says: "WHY ARE WE AFRAID?" Inside, a friendly scientist in a white coat explains how the body reacts to fear: faster heart, tight muscles, sharper senses. "It is useful," she says. "But you can train it."\nShe hands you a heart-rate monitor.`,[
 {t:`Try her breathing exercise.`,c:'WIS 8 resist',y:[`Four in, hold, four out. Your heart rate drops. "Practice makes it automatic," she says. You learn a trick that will stay with you.`,'xp+l skill:cg_calm mp+3'],n:[`Your heart stays fast, but you learn how it works.`,'xp+m mp+2']},
 {t:`Wear the heart monitor during the spooky video.`,y:[`The numbers rise and fall. You laugh. You are not as scared as you thought you would be.`,'xp+m mp+3']},
 {t:`Ask whether ghosts could be explained scientifically.`,c:'CHA 8 persuade',y:[`"Some strange experiences can be explained," she says. "Some, we haven't yet explained. A scientist's best word is 'maybe'." You like that.`,'xp+m flag:cg_lesson_ghost'],n:[`She smiles and shrugs. "Look at the exhibit on sound."`,'xp+s']} ].map(o=>{ o.y[1]+=' >cg3_sci3'; if(o.n) o.n[1]+=' >cg3_sci3'; return o; }));
S_('cg3_sci3','The Workshop','classroom|🛠️ 💡',
`In the Maker Space, you find rows of tools, wires, motors and boxes of components. A friendly technician in an apron says: "Build whatever you like. Within reason."\nYou could build something useful for what lies ahead.`,[
 {t:`Improve your spirit detector.`,r:'item:cg_detector',c:'INT 8 craft',y:[`You add a sensitive sensor and a small light. Now it glows blue when something cold is nearby. The technician is impressed.`,'xp+l mp+3 flag:cg_detector_made'],n:[`You tweak a few wires. It works a bit better.`,'xp+m']},
 {t:`Build a simple detector from scratch.`,hide:true,r:'!item:cg_detector',c:'INT 8 craft',y:[`A thermometer, a buzzer and a bit of tape. It beeps at cold air, which is a good start.`,'xp+l +cg_detector flag:cg_detector_made'],n:[`A tangle of wires. The technician offers a spare kit.`,'xp+m +cg_detector flag:cg_detector_made']},
 {t:`Build a small wind-up lantern.`,c:'DEX 8 craft',y:[`A little torch with a crank, no batteries needed. It glows a warm yellow. You turn the handle, and the light brightens. A very good gadget.`,'xp+l +cg_glowband mp+3'],n:[`It sputters, but gives out a little glow.`,'xp+m +cg_glowband']},
 {t:`Watch the technician build a robot.`,y:[`Whirr, click, wheee. It rolls across the floor, and a toddler applauds.`,'xp+s mp+3']} ].map(o=>{ return o; }));

/* ---------- NIGHT SAFARI ---------- */
S_('cg3_zoo1','Night Safari','cave|🌙 🦉',
`The Night Safari in Mandai was the world's first nocturnal zoo, opened in 1994. After sunset, its forest paths glow with soft amber lamps. Tigers pace, hyenas laugh, owls hoot and mouse-deer tiptoe through the shadows. The air is warm and smells of leaves and animals.\nA keeper in a khaki shirt checks her torch and smiles.`,[
 {t:`Take the tram ride through the park.`,y:[`An open-sided tram trundles through the dark. Elephants slouch, a leopard stares from a tree and a sleepy Malayan tapir ignores you. Everyone whispers.`,'xp+m mp+4 >cg3_zoo2']},
 {t:`Walk the Fishing Cat Trail on foot.`,c:'WIS 8 survive',y:[`Quiet steps, soft lights. A small cat with webbed paws wades in a stream. A keeper whispers: "Rare. Lucky."`,'xp+m mp+3 >cg3_zoo2'],n:[`Too many people, too much chatter. The cat hides.`,'xp+s >cg3_zoo2']},
 {t:`Ask the keeper about how nocturnal animals see in the dark.`,c:'CHA 8 persuade',y:[`"Big eyes, sharp ears, whiskers," she says. "And patience. They don't fight the dark. They live in it." You think about that.`,'xp+m flag:cg_lesson_ghost >cg3_zoo2'],n:[`She laughs. "Many ways. Come back tomorrow." You laugh too.`,'xp+s >cg3_zoo2']} ]);
S_('cg3_zoo2','Walking in the Dark','cave|🔦 🌲',
`The trail narrows. The lamps are far apart now. Between them, the forest is nearly black. A rustle. A distant hoot. Something big breathes in a dark enclosure. A little child ahead of you whimpers and clutches her mother's hand.\nA sign says: "No flash photography. Please stay on the path."`,[
 {t:`Switch off your torch and let your eyes adjust.`,c:'WIS 8 resist',y:[`At first it is pitch black. Then the shapes appear: branches, a path, the glint of eyes. The dark is full of life, and none of it is angry. You walk on, calm.`,'xp+l skill:cg_brave mp+4'],n:[`You hold the torch very tightly and keep it on. It is okay.`,'xp+m mp+2']},
 {t:`Whisper reassurance to the whimpering child.`,c:'CHA 8 persuade',y:[`"It's just animals," you say. "They're more scared of us." She nods, wipes her eyes and grins. Her mother mouths "thank you".`,'xp+m mp+3 flag:cg_kind'],n:[`She hides behind her mother, but gives you a small, thankful wave.`,'xp+s flag:cg_kind']},
 {t:`Stay close to your friends.`,r:'anyally',y:[`A happy huddle in the dark, nudging and giggling. Something grunts nearby. You all squeak, then laugh.`,'xp+m mp+4']},
 {t:`Walk steadily and keep your eyes on the path.`,y:[`One foot, then the other. A calm walk. At the end, a lit-up exit and a gift shop.`,'xp+s mp+2']} ].map(o=>{ o.y[1]+=' >cg3_zoo3'; if(o.n) o.n[1]+=' >cg3_zoo3'; return o; }));
S_('cg3_zoo3','Creatures of the Night','cave|🦉 🌟',
`In the Walk-Through Bat Enclosure, hundreds of fruit bats hang from the branches like leathery fruit, rustling their wings. A keeper stands at the entrance with a basket of sliced papaya. "Quiet," she says. "No sudden moves. They are very gentle."\nA bat swoops past your ear, silent as a ribbon.`,[
 {t:`Stand still and let the bats pass.`,c:'WIS 8 resist',y:[`A dozen fly by, close enough to feel the breeze. You do not flinch. The keeper gives a slow, approving nod.`,'xp+l mp+4 skill:cg_calm'.replace('skill:cg_calm','')],n:[`You duck once, but then stand tall. They sail past like soft kites.`,'xp+m mp+2']},
 {t:`Watch the keeper feed them.`,y:[`The bats take the papaya with tiny, delicate nibbles. You learn how important bats are for pollinating fruit trees.`,'xp+m mp+3']},
 {t:`Take a night-time photo of the glowing eyes.`,c:'DEX 8 craft',y:[`A flicker of orange in the dark: a bat's eyes, shining. You'll treasure the photo.`,'xp+m mp+2'],n:[`Blur, blur, blur. But one image is surprisingly good.`,'xp+s']},
 {t:`Buy a cup of hot teh tarik at the stall ($2).`,r:'gold:2',y:[`Warm sweetness at the end of a cool night. You carry it to the bus stop and watch the stars.`,'gold-2 +cg_teh mp+4 xp+s']} ]);

/* ---------- hub: add the four new destinations & rewrite the prep scene ---------- */
const hub = G.scenes.cg3_hub;
hub.text = S => { const n = ['cg_v_orchard','cg_v_chinatown','cg_v_littleindia','cg_v_glam','cg_v_hawpar','cg_v_sentosa','cg_v_marina','cg_v_jewel','cg_v_botanic','cg_v_museum','cg_v_science','cg_v_zoo'].filter(f=>S.flags[f]).length;
  return `Day ${Math.min(3,n+1)} of 3. ${n===0?'Where should you start?':n===1?'One place done. Where next?':'The last day of the holidays. Where now?'}\nYou stand in front of the big MRT map at Tampines station. Your EZ-Link card is topped up. You have $${S.gold}.\nThe Downtown Line, in blue, goes right across the city. The East-West Line, in green, goes to the airport. The Circle Line, in orange, goes round the middle.`; };
const stay = hub.opts.pop();
[['Botanic Gardens: a green oasis and a 160-year-old garden.','cg_v_botanic','cg3_bot1','You ride the Downtown Line to Botanic Gardens station.'],
 ['National Museum: the story of old Singapore.','cg_v_museum','cg3_mus1','A short ride on the Downtown Line to Bencoolen, then a walk.'],
 ['Science Centre: gadgets, sparks and curious questions.','cg_v_science','cg3_sci1','A long ride west, to Jurong.'],
 ['Night Safari: animals that wake up after dark.','cg_v_zoo','cg3_zoo1','A long MRT and bus ride north, to Mandai.']].forEach(([t,f,id,msg])=>{
  hub.opts.push({ t, hide:true, r:'!flag:'+f, y:[msg,`flag:${f} >${id} tod:day`] }); });
hub.opts.push(stay);
G.scenes.cg3_prep.text = S => { const has = id => S.items[id]>0; const tick = b => b?'✔':'✘';
  return `The school holidays are almost over. You lay out everything on your bed and take a long, careful look at what you have gathered.\n${tick(has('cg_lantern'))} A light for guiding someone home (a lantern).  ${tick(has('cg_oranges')||has('cg_kueh'))} An offering for a guest.  ${tick(has('cg_charm')||has('cg_talisman'))} A charm or talisman.  ${tick(has('cg_flashlight')||has('cg_penlight'))} A torch.  ${tick(S.flags.cg_lullaby)} The lullaby.  ${tick(has('cg_boat')||has('cg_replica'))} A little boat.\nYou may be missing some things. That's okay. There is time yet to find them.`; };
})();
/* ============================================================== */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const DUSK = 'flag:cg_saw_house?cg_duskask';

/* =============== CHAPTER F: MEI'S MEMORIES =============== */
G.chapter('cgF',{ story:'changi', n:'Chapter 9: Mei\'s Memories', sub:'Dreams of old Changi', ch:3, region:'cg_kampong', art:'beach|🌙 💭', age:11, btn:'Close your eyes',
  text:`That night, the little paper boat on your windowsill hums. You lie down with it beside your pillow, listen to the faraway sound of the MRT and, slowly, the room dissolves.\nYou are standing on a beach. The sky is gold. The air smells of wood smoke and salt. Little wooden boats lie on the sand like sleeping fish. You are not yourself exactly: you are an invisible visitor in a memory that is not yours.\nIt is Changi, long ago.`,
  beats:()=>G.mix(['cgF_open','cgF_village','cgF_market','cgF_beach','cgF_toy','cgF_storm1','cgF_storm2','cgF_wake','cgF_vigil','cgF_lantern','cgF_sea','cgF_wake2'],12,{nocamp:true}) });

S_('cgF_open','A Dream by the Sea','beach|🌅 🌴',
`The dream is clear and warm. A string of kampung houses on stilts stands among coconut palms. Fishing nets hang from poles to dry, and barefoot children race along the shore. Nobody seems to notice you, but a little dog trots up and sniffs your hand, as if you are an old friend.\nFar down the beach, a white house stands among the casuarina trees. A light glows in its window.`,[
 {t:`Walk toward the white house.`,y:[`It is beautiful: black beams, a wide veranda, a garden bright with frangipani. A woman is sweeping the steps, humming a tune you know. It is Madam Soo, young and smiling.`,'xp+m mp+3 flag:cg_dream_mei']},
 {t:`Follow the barefoot children.`,y:[`They lead you to a sandy lane. A girl in pigtails turns, looks right at you, and grins. "Come on!" she shouts. It is Mei.`,'xp+m mp+3 flag:cg_dream_mei']},
 {t:`Play with the little dog.`,y:[`He rolls on his back, delighted. For a moment you forget you are dreaming.`,'xp+s mp+3']} ]);

S_('cgF_village','The Kampung Morning','village|🐓 🏡',
`Everyone in the kampung is up with the sun: women pounding rice, men mending nets, children chasing chickens. A cheerful girl with pigtails and a wide gap in her teeth scampers over. "Hello! Are you new? Do you want to play?" It is Mei. She seems to look straight through the dream wall at you.`,[
 {t:`Play tag with Mei and the others.`,c:'DEX 8 dodge',y:[`You run, shout, tumble and laugh until your sides ache. Mei is very fast and very proud of it.`,'xp+m mp+4 flag:cg_dream_mei'],n:[`You trip over a chicken. Everybody laughs, including the chicken.`,'xp+s mp+3']},
 {t:`Help Mei carry water from the well.`,y:[`Two buckets between you, and a lot of splashing. She tells you her mother makes the best kueh in the world.`,'xp+m mp+3 flag:cg_knows_peranakan flag:cg_dream_mei']},
 {t:`Ask Mei what her favourite thing is.`,y:[`"My boat!" she says at once. "Papa made it. It's red. It has my name. It's the fastest boat in the whole world." She lowers her voice. "But I'm not allowed to sail it unless Mama watches."`,'xp+m flag:cg_knows_names mp+2']},
 {t:`Watch from the shade of a coconut tree.`,y:[`A whole village at work and play. It all feels very safe and very ordinary, and you realise how much has gone.`,'xp+s mp+3']} ]);

S_('cgF_market','The Little Market','village|🧺 🐟',
`Mei drags you to the Sunday market, a tangle of stalls under a tin roof. Fishermen shout the price of mackerel. A woman in a sarong fries banana fritters. An old man sells paper kites and tops. Mei weaves through the crowd. A kindly woman in a pale blouse stands at a stall of coloured kueh. It is Madam Soo.\n"Mei! Don't run!" she laughs.`,[
 {t:`Look at the stall of kueh.`,y:[`Pastel pink, green and yellow, in neat rows. Layered kueh lapis, sweet ondeh-ondeh, glossy ang ku kueh. A handwritten sign: "Madam Soo's. Fresh daily. Guests welcome."`,'xp+m flag:cg_knows_peranakan mp+2']},
 {t:`Listen as Madam Soo speaks to the customers.`,c:'WIS 8 spirit',y:[`She greets every customer by name, remembers their children, and tucks an extra piece of kueh into each box. "Guests first," she says. "Always." You understand why the whole village loved her.`,'xp+l flag:cg_gate_trust flag:cg_lesson_ghost'],n:[`The market is loud and your attention drifts. But you notice her warm laugh.`,'xp+m']},
 {t:`Follow Mei to the stall selling paper boats.`,y:[`A small boy hands her a bright red one. "For luck," he says. She tucks it behind her ear and dashes off.`,'xp+m flag:cg_paperboat_made mp+2']} ]);

S_('cgF_beach','The Picnic on the Sand','beach|🧺 🪁',
`In the afternoon, a picnic mat is spread out under the casuarinas. A tin of kueh, a flask of sweet tea and a plate of fruit lie on a cloth. Madam Soo sits with her feet in the sand, laughing as Mei flies a paper kite. A man in a fisherman's shirt, Mei's father, sits beside her, mending a net, his big hands very gentle.\nIt is the happiest scene you have ever watched.`,[
 {t:`Watch quietly from a distance.`,y:[`A family. Sun, sand, a wind that carries kite-laughter. You realise you want, very much, to keep them safe.`,'xp+m mp+4 flag:cg_dream_mei']},
 {t:`Ask Madam Soo for a piece of kueh.`,c:'CHA 8 persuade',y:[`She turns, a little surprised, but smiles as if you had always been there. "Of course. Nine layers for luck." The taste is pandan and coconut and something like home.`,'xp+l mp+5 flag:cg_gate_trust flag:cg_knows_peranakan'],n:[`She doesn't seem to hear you, but she sets an extra slice down on the sand, just in case.`,'xp+m mp+3 flag:cg_knows_peranakan']},
 {t:`Hum the lullaby quietly.`,r:'flag:cg_lullaby',y:[`Madam Soo glances up, as if she has heard a very small sound. "How lovely," she murmurs. "Who is singing?" She smiles at the sea. For a moment, you are not invisible.`,'xp+l mp+4 flag:cg_gate_trust']},
 {t:`Join Mei flying the kite.`,c:'DEX 8 craft',y:[`Run, run, let go! The kite soars. Mei squeals. "You're good at this!" she shouts.`,'xp+m mp+4'],n:[`The string tangles. Mei giggles. "Hopeless!" she says kindly.`,'xp+s mp+3']} ]);

S_('cgF_toy','The Little Red Boat','pier|⛵ 🔨',
`Mei's father sits on an upturned boat, whittling a piece of cedar with a pocket knife. He has hands like tree-roots and a warm, crinkled smile. A little hull takes shape under his fingers. Mei hops from foot to foot. "Is it done? Is it done?"\n"Slowly, slowly," he says. "A boat that is rushed will sink."`,[
 {t:`Study his work closely.`,c:'INT 8 craft',y:[`Rounded keel, high bow, a slim mast notched just so. You memorise every cut. When you wake, you'll be able to build one like it.`,'xp+l flag:cg_replica_made mp+3'],n:[`You see the main shape. The details blur.`,'xp+m flag:cg_replica_made']},
 {t:`Watch him carve the name on the hull.`,y:[`M, E, I. Three small letters, cut carefully. "So she can always find her way home," he says to nobody in particular.`,'xp+m flag:cg_knows_names mp+3']},
 {t:`Help Mei hold the little sail.`,y:[`She grins and holds the cloth up to the sun. It is a triangle of red, glowing like a sunrise.`,'xp+m mp+3 flag:cg_dream_mei']} ]);

S_('cgF_storm1','Clouds on the Horizon','beach|🌩️ 🌊',
`Late in the afternoon the sky darkens quickly, a bruise-purple wall of cloud rolling in from the east. The sea turns grey. The wind picks up, rattling the palm fronds. Fishermen on the beach shout and begin dragging their boats high up the sand. A cold smell of rain fills the air.\nMei's father stands, scanning the sky. "I must go out for the nets," he says.`,[
 {t:`Warn them, though they cannot hear you.`,y:[`"Don't go! Please stay!" You shout, but no sound comes out. Nobody turns. You feel helpless, and very sad.`,'xp+m mp-1']},
 {t:`Watch and stay beside Madam Soo.`,y:[`She takes Mei's hand, looking worried. She is a careful mother. Nobody could have been more careful.`,'xp+m mp+1']},
 {t:`Try to remember that this has already happened.`,c:'WIS 9 resist',y:[`You steady yourself: it's a memory, not a rescue. You can't change it. You can only witness it with a kind heart.`,'xp+l mp+3'],n:[`Your chest aches, but you stay.`,'xp+m mp-1']} ]);

S_('cgF_storm2','The Storm','beach|⛈️ 🌊',
`The storm arrives with a roar. Rain hammers the roofs. Waves boom against the shore. Villagers shout, running with lanterns. In the confusion, a small figure in pigtails slips out of the house, clutching a little red boat, running toward the water's edge, to wave to her father's boat.\nThe dream grows blurry. The sea takes a great breath. When it clears, the beach is empty, the rain is soft and Madam Soo stands at the water's edge, calling a name.`,[
 {t:`Go to Madam Soo and stay with her.`,y:[`You stand beside her in the rain, as invisible as a thought. You cannot hold her hand. But for a long time you stay, and the sea listens.`,'xp+l mp+2 flag:cg_knows_storm flag:cg_kind']},
 {t:`Look for Mei along the shore.`,y:[`You search the sand and the shallows. Nothing but foam. A single little boat lies in the surf, rocking, empty. You pick it up, and it dissolves like sugar.`,'xp+m mp+1 flag:cg_knows_storm']},
 {t:`Close your eyes.`,y:[`You cover your face and let the dream carry you. When you open them, it is morning and the world is washed clean.`,'xp+m mp+2 flag:cg_knows_storm']} ]);

S_('cgF_wake','Waking in the Dark','hdb|🌙 💧',
`You wake in your own bed with a damp pillow and your heart thudding. The room is still. Outside, the first MRT of the morning hums past. It was a dream, but you carry it in your chest like a stone.\nThe paper boat on the windowsill is cold and perfectly dry.`,[
 {t:`Write down everything you remember.`,r:'item:cg_notebook|item:cg_sketchbook',y:[`A beach, a kampung, a family, a storm. You fill four pages. By the end you can see why she cannot let go.`,'xp+l mp+3 flag:cg_knows_storm flag:cg_knows_peranakan']},
 {t:`Tell {guardian} about the dream over breakfast.`,y:[`{guardian} nods slowly. "Dreams can be messages," they say, pouring tea. "Don't be afraid of them." You eat your toast thoughtfully.`,'xp+m mp+4 flag:cg_told_adult']},
 {t:`Hug the paper boat and try to go back to sleep.`,y:[`Your eyes close. The boat hums. You drift.`,'xp+s mp+2']} ]);

S_('cgF_vigil','The Years After','beach|🏮 🌌',
`The dream returns, years later. The kampung is quieter. Nets hang in disrepair. The white house stands alone among the casuarinas, and every evening at dusk, Madam Soo comes out onto the veranda with a lantern. She is older now, with silver in her hair. She places the lantern in the window and sits in her rocking chair, humming the lullaby, looking out at the sea.\n"Come home," she whispers, every night. "Come home."`,[
 {t:`Sit on the veranda steps and listen.`,y:[`She sings softly, over and over. Neighbours pass sometimes, and she gives each a plate of kueh. She never stops waiting. You cry quietly, in the dream.`,'xp+l mp+3 flag:cg_gate_trust flag:cg_lullaby']},
 {t:`Hum along with her.`,r:'flag:cg_lullaby',y:[`She pauses mid-line. "Someone is singing," she says, and turns, hopefully. She sees nothing. But she smiles, and sings a little louder.`,'xp+l mp+4 flag:cg_gate_trust']},
 {t:`Place a paper boat on the windowsill.`,r:'item:cg_paperboat',y:[`It sits beside the lantern, white and small. Madam Soo looks at it for a very long time. Then she touches it, with a hand that trembles. "Thank you," she whispers.`,'-cg_paperboat xp+l mp+4 flag:cg_gate_trust']},
 {t:`Stay and watch the stars come out.`,y:[`She sits on, in the quiet, in the warm lantern light. A life of waiting. A love that never turned off.`,'xp+m mp+3']} ]);

S_('cgF_lantern','The Lantern Burns On','bungalow|🏮 👻',
`In the next dream, many years have passed. The house is dark and leaning, half-swallowed by vines. The garden is a tangle of frangipani. But in the upstairs window, a lantern still glows, small and steady. Beside it, you can just see the shape of a woman in a white blouse, sitting very still.\nA little boy in a football jersey walks up the path, dazed, like someone in a dream. A pale hand opens the door for him.`,[
 {t:`Warn the boy.`,y:[`"Aiman!" you shout. He cannot hear you. The door closes behind him with a long, soft creak. The lantern glows brighter, and the mist rolls in.`,'xp+m mp-1 flag:cg_saw_aiman']},
 {t:`Follow him inside.`,c:'WIS 9 spirit',y:[`In the hall, a soft hand tucks him into an armchair. "Rest," whispers Madam Soo. "I will keep you safe." Her voice is warm, and so sad that you can't bring yourself to be afraid.`,'xp+l flag:cg_saw_aiman flag:cg_knows_timeslow'],n:[`The door seems to shut itself against you. You wake, with your heart pounding.`,'xp+m mp-2 flag:cg_saw_aiman']},
 {t:`Look carefully at the lantern.`,y:[`It's a small brass lantern, old but beautiful. The flame is steady, never flickering. You suspect it is the only light left in the house that is truly kind.`,'xp+m flag:cg_lesson_ghost mp+2']} ]);

S_('cgF_sea','Mei by the Sea','beach|🌊 🧒',
`The last dream is the strangest. You are standing on a beach at dusk, with the casuarinas whispering behind you. Out on the water's edge, a small girl in a white nightdress is sitting on the sand, hugging her knees. She is faintly see-through, like a candle seen through frosted glass.\nShe turns and looks at you. "You can see me," she says, surprised.`,[
 {t:`Sit down beside her and say hello.`,c:'WIS 8 spirit',y:[`"I'm Mei," she says. "I'm not lost. I know exactly where I am." She frowns. "But Mama can't see me, and I can't tell her. She keeps the house so full, and she doesn't know I'm here." She looks at her knees. "I just need someone to tell her."`,'xp+xl mp+4 flag:cg_dream_mei flag:cg_lesson_ghost flag:cg_knows_timeslow'.replace('xp+xl','xp+l')],n:[`She nods, shyly, and sits next to you. Neither of you speaks. But it is a kind silence.`,'xp+m mp+3 flag:cg_dream_mei']},
 {t:`Ask her what she needs.`,y:[`"My boat," she says at once. "I lost it. And a light, so I can see my way. And Mama's song, so she knows it's me." She counts on her fingers. "That's all. Just those."`,'xp+l flag:cg_dream_mei flag:cg_lullaby']},
 {t:`Promise to tell her mother that Mei is safe.`,y:[`"Really?" she whispers, eyes huge. "You will?" You nod. She flings her arms around you, as light as a breeze. When you wake, your arms are still tingling.`,'xp+xl mp+5 flag:cg_dream_mei flag:cg_kind'.replace('xp+xl','xp+l')]},
 {t:`Hum the lullaby.`,r:'flag:cg_lullaby',y:[`Mei lifts her head. "That's Mama's song," she whispers. Together you hum it, until the whole beach seems to glow. When you wake, it is still in your head.`,'xp+l mp+5 flag:cg_dream_mei']} ]);

S_('cgF_wake2','Morning After','hdb|☀️ 😌',
`You wake with the sun on your face. The paper boat on the windowsill has gone, and in its place is a very small drift of white sand. You hold it up to the light. It sparkles.\nYou know, with perfect certainty, what you have to do. The lady in the house does not need to be defeated. She needs to be reunited, with what she lost, and with what she has kept. A boat, a light, a song. And the truth.`,[
 {t:`Pour the sand into a little jar and keep it.`,y:[`A small jar with a handful of Changi beach sand. You tuck it into your bag. A very small piece of hope.`,'xp+l mp+4 flag:cg_dream_mei']},
 {t:`Tell your friends the plan.`,r:'anyally',y:[`They listen with serious faces. "So we don't fight her," says Priya slowly. "We... bring her daughter home." You nod. For once nobody makes a joke.`,'xp+l mp+3 bond:cg_priya']},
 {t:`Take a deep breath and get ready for the day.`,y:[`A shower, a bowl of cereal and a new sense of purpose.`,'xp+m mp+4 hp+5']} ]);

/* =============== CHAPTER H: OLD SINGAPORE =============== */
G.chapter('cgH',{ story:'changi', n:'Chapter 10: Old Singapore', sub:'The river, the museum and the hill', ch:3, region:'cg_oldcity', art:'skyline|🏛️ 🌆', age:11, btn:'Explore',
  text:`To understand a lost world, you have to look for what is left of it. Old Singapore survives in strange places: a river that once carried every kind of cargo, a hill that held kings and forts, museum cases full of toys and tins and uniforms, archive shelves full of voices on tape.\nMr Tan and Priya have offered to take you to the old city centre, to see what the island remembers.`,
  beats:()=>G.mix(['cgH_plan','cgH_river','cgH_raffles','cgH_acm','cgH_fort','cgH_post','cgH_oldschool','cgH_chinatown','cgH_dusk'],20,{nocamp:true}).concat([DUSK]) });

S_('cgH_plan','The Heart of the City','skyline|🚇 🏛️',
`You step off the MRT at City Hall into the old heart of Singapore: the neoclassical columns of the Supreme Court, the green lawn of the Padang, the white spires of St Andrew's Cathedral. High-rise towers rise behind them, glass and steel against old stone and plaster. Priya, notebook in hand, is already reading from a plaque.\n"This," she announces, "is where it all started."`,[
 {t:`Walk across the Padang and look at the old buildings.`,y:[`Flat green lawn, tall white buildings and the sense that a lot of important things happened here. A cricket game is in progress.`,'xp+m mp+3']},
 {t:`Read the heritage plaque with Priya.`,r:'ally:cg_priya',c:'INT 8 lore',y:[`The Padang has seen sports, parades, speeches and parties for over a hundred and fifty years. You and Priya argue about the date, then check. Priya wins.`,'xp+m bond:cg_priya'],n:[`Too many dates. You both give up, laughing.`,'xp+s bond:cg_priya']},
 {t:`Buy an ice cream from a bicycle vendor ($2).`,r:'gold:2',y:[`Rainbow ice cream in a slice of bread, a classic Singapore treat. Sticky, cold, strange and perfect.`,'gold-2 hp+4 mp+4 xp+s']},
 {t:`Go straight to the river.`,y:[`A short walk through arcades and past statues. The smell of water drifts up.`,'xp+s']} ]);

S_('cgH_river','The Singapore River','skyline|🛶 🏙️',
`The Singapore River winds past Boat Quay and Clarke Quay: restored shophouses, old godowns (warehouses) turned into restaurants, and a long line of lantern-lit bridges. In the 1800s, this was where Singapore's trade began. Cargo boats called bumboats carried rice, spices and rubber between ships in the harbour and the shore.\nA river guide in a straw hat is waving from a small wooden boat.`,[
 {t:`Take a river cruise ($4).`,r:'gold:4',y:[`The boat glides slowly under old bridges. The guide points out where the bumboats unloaded and tells you about the boatmen who lived on the water. "A boat was a home," he says. "A light in the window meant you were not alone."`,'gold-4 xp+m mp+4 flag:cg_lesson_ghost']},
 {t:`Walk along Boat Quay and read the signs.`,c:'INT 8 lore',y:[`Rice, tea, spices and tin. The signs tell you what the old boats carried. You imagine the river noisy and crowded with masts.`,'xp+m mp+2'],n:[`You get as far as the third sign before a street performer distracts you.`,'xp+s mp+2']},
 {t:`Ask the guide about boats and lanterns.`,c:'CHA 8 persuade',y:[`"Every boat had a lantern," he says. "At night they lit up the river like stars. When someone didn't come home, the family kept their lantern burning till morning. Some never put it out." He pauses. "Nobody should wait in the dark."`,'xp+l flag:cg_lesson_ghost mp+3'],n:[`He smiles. "Come on the boat tour tomorrow, I tell it better then."`,'xp+s']},
 {t:`Sit on a bench and watch the water.`,y:[`The river slides by, brown and gold. A cormorant dries its wings on a post.`,'xp+s mp+3']} ]);

S_('cgH_raffles','The Landing Site','skyline|🗽 ⛵',
`On the north bank, a white statue of Sir Stamford Raffles stands with folded arms, looking over the river. A plaque tells you that in 1819 he landed here, and with the local rulers established a trading post that would become modern Singapore. Tourists pose for photos. A pigeon sits on the statue's head.\nA small boy asks his dad: "Is he the founder?" The dad says: "Partly."`,[
 {t:`Read the plaque carefully.`,c:'INT 8 lore',y:[`Singapore's story is older than 1819: there were settlements, traders and a port called Temasek long before. History has many layers, like kueh lapis.`,'xp+m'],n:[`The plaque is long. You get to the second paragraph and watch the pigeon.`,'xp+s']},
 {t:`Ask a passing tour guide what he thinks.`,c:'CHA 8 persuade',y:[`"A beginning of one chapter," he says. "But the island had a thousand stories before him, and will have a thousand after." He waves. "Good question."`,'xp+m'],n:[`He is busy with a group of thirty tourists.`,'xp+s']},
 {t:`Take a photo with the statue.`,y:[`A pigeon photobombs it, perfectly timed.`,'xp+s mp+3']} ]);

S_('cgH_acm','The Asian Civilisations Museum','mall|🏺 🚢',
`Across the river stands a grand old building that was once the Empress Place courthouse, and is now the Asian Civilisations Museum. Inside, galleries trace the long history of trade between Asia, the Middle East and Europe. In the maritime gallery, a huge wooden ship's hull stands in a glass case, surrounded by thousands of pieces of ninth-century pottery.\nA volunteer guide with a pink badge gives a welcoming nod.`,[
 {t:`Join a short tour of the shipwreck exhibit.`,y:[`A ship from the ninth century sank off Indonesia with a cargo of Chinese ceramics bound for the Middle East. "Sailors then knew," says the guide, "that the sea gives and the sea takes. They prayed to be remembered."`,'xp+m mp+3 flag:cg_lesson_ghost']},
 {t:`Look at the ancient navigational instruments.`,c:'INT 8 lore',y:[`A compass, an astrolabe and a hand-drawn chart. Sailors used stars and lanterns to find their way home. You think about lights in windows.`,'xp+m mp+2'],n:[`The instruments are fascinating, but you are not sure what any of them does.`,'xp+s']},
 {t:`Sketch a model boat in your notebook.`,r:'item:cg_notebook|item:cg_sketchbook',y:[`Hull, mast, sail, rudder. Your drawings improve, and you add another detail to your plan for the little boat.`,'xp+m flag:cg_replica_made mp+2']} ]);

S_('cgH_fort','Fort Canning Hill','park|🌳 🏰',
`Fort Canning Park is a green hill in the middle of the city, thick with old trees and shaded paths. In the days before Raffles, the hill was a royal place, said to be the home of kings of old Singapura. Later it became a British fort, and under its slopes lies a secret WWII bunker called the Battle Box.\nA path winds up between huge trees, past a spice garden of nutmeg, clove and pepper.`,[
 {t:`Smell the spice garden plants.`,y:[`Nutmeg like warm Christmas, clove like a sharp ache, lemongrass like fresh rain. In the old days, spices made Singapore famous across the world.`,'xp+m mp+3']},
 {t:`Climb to the top of the hill.`,c:'CON 8 endure',y:[`Steps, stairs, more steps. At the top, you can see the city's towers, the harbour and the long blue line of the sea. A breeze carries the smell of frangipani.`,'xp+m mp+3 hp-1'],n:[`Halfway up, you stop for a rest. A kindly jogger offers you water.`,'xp+s hp-1 flag:cg_kind']},
 {t:`Join a short guided tour of the Battle Box.`,y:[`Underground rooms with maps and mannequins show how the decision to surrender was made in 1942. It is solemn and quiet, a reminder of how people were brave and frightened at the same time.`,'xp+m mp+2 flag:cg_respect']},
 {t:`Sit under an ancient tree and rest.`,y:[`A thick, shaded trunk. A breeze. A sleepy squirrel. You feel the long, long age of the hill.`,'xp+s mp+4']} ]);

S_('cgH_post','The Old Post Office','town|✉️ 🏛️',
`Near the river you find an old building that was once the central post office. Today it is a hotel and a gallery, but inside the lobby, there is a small exhibition of old letters, stamps and postcards. A display case holds a letter in faded blue ink, addressed to "The Soo Family, Changi", never delivered.\nA curator in white gloves is arranging a card.`,[
 {t:`Ask the curator about the letter.`,c:'CHA 9 persuade',y:[`"Returned to sender, 1960," she says, softly. "The sender wrote: 'We hope Mei is found. Our prayers are with you.' It was never collected. The family had stopped answering." Her voice is low. "Some letters wait a very long time."`,'xp+l flag:cg_knows_storm flag:cg_knows_names mp+2'],n:[`She says only: "That one is on loan. I cannot discuss it." You nod politely.`,'xp+m']},
 {t:`Read the letter through the glass.`,c:'INT 8 lore',y:[`"Dearest Lian, the whole kampung weeps with you. We kept a lantern lit for Mei on the night of the storm. We shall keep one lit as long as you need." Signed, many names. You blink hard.`,'xp+l flag:cg_lesson_ghost mp+2'],n:[`The ink is too faint. But you see: "Dearest Lian".`,'xp+m']},
 {t:`Buy a postcard and send it to {guardian} ($1).`,r:'gold:1',y:[`A picture of the river at sunset. You write: "Having a good time. Learning lots." You post it in an old-fashioned red letterbox.`,'gold-1 xp+s mp+3 flag:cg_kind']} ]);

S_('cgH_oldschool','The Heritage School Room','classroom|📝 🏫',
`In a side street, a small museum has recreated a 1950s classroom: wooden desks with inkwells, slates, a blackboard with chalk and a teacher's cane (never used, the guide hastens to say). A volunteer in an old-fashioned school uniform asks you to take a seat and open your slate.\n"Let me teach you a lesson," she says, "from the time of your grandparents."`,[
 {t:`Write your name on the slate in chalk.`,c:'DEX 8 craft',y:[`Scratch, scratch. It is harder than a pen. She nods. "Very neat." You get a small certificate.`,'xp+m mp+3'],n:[`The chalk snaps. You start again, and the second time you manage.`,'xp+s']},
 {t:`Ask about how children played in those days.`,y:[`"Five stones, marbles, kites, spinning tops, paper boats," she says. "We made our own toys. We played until the call came to go home." She smiles sadly. "The call was always the best part."`,'xp+m flag:cg_lesson_ghost mp+3']},
 {t:`Listen to the old Mandarin lesson from a recording.`,y:[`A recorded voice reads a simple children's poem about a boat and a lantern. It sounds familiar.`,'xp+m mp+2 flag:cg_lullaby']} ]);

S_('cgH_chinatown','The Heritage Shophouse','temple|🏮 🏚️',
`A heritage centre in Chinatown has restored a 1950s shophouse: tiny cubicles, a shared kitchen, a hanging washing line and a brass oil lamp. A guide explains how families once lived four to a room, shared a bathroom and cooked on charcoal. A smell of old wood and incense lingers.\nYou touch the oil lamp. It is cold, but somehow you feel warm.`,[
 {t:`Listen to the guide's stories about lanterns.`,y:[`"In those days," she says, "when someone was away at sea, we left a lamp in the window. A very old promise: we are still here." She smiles at you. "It's the kind of tradition that only needs a flame and a heart."`,'xp+m mp+3 flag:cg_lesson_ghost']},
 {t:`Examine the oil lamp.`,c:'INT 8 craft',y:[`A glass chimney, a brass base, a small wick. You learn how to trim the wick and fill the oil. It's an old, patient technology.`,'xp+m mp+2'],n:[`You almost knock it over. The guide catches it with a smile.`,'xp+s']},
 {t:`Help the guide trim the lamp wicks.`,y:[`Snip, snip, relight. The lamps flicker back to life. "Careful hands," she says approvingly.`,'xp+m flag:cg_kind mp+3']} ]);

S_('cgH_dusk','Sunset at the Esplanade','skyline|🌇 🎶',
`At the end of the long day, you sit on the steps by the Esplanade, watching the sun slide behind the skyscrapers. The bay is gold and silver and the Merlion spouts steadily in the distance. Musicians tune their instruments on the waterfront. Somewhere nearby, a street performer begins to play a soft tune on an erhu.\nYour feet ache. Your head is full. But the pieces are fitting together.`,[
 {t:`Write down what you have learned today.`,r:'item:cg_notebook|item:cg_sketchbook',y:[`Names, dates, objects, lessons. By the end, the page is full and your heart is quiet.`,'xp+l mp+4 flag:cg_museum']},
 {t:`Listen to the erhu and close your eyes.`,y:[`The tune is old and sweet. It sounds a little like the lullaby. You wonder who first sang it.`,'xp+m mp+5']},
 {t:`Share your thoughts with Priya.`,r:'ally:cg_priya',y:[`"So she isn't evil," says Priya, tracing a circle on the step with her finger. "She just never got to finish a sentence." You both fall silent.`,'xp+m bond:cg_priya mp+3']},
 {t:`Ride the MRT home, tired and thoughtful.`,y:[`The train hums. A little boy sleeps on his mother's shoulder. You think about being found.`,'xp+m mp+3']} ]);
})();
