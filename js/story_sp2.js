/* STOLEN SKY — Chapters 4-6 and endings: The Laboratory, The Engine Decks and Hangar, The Long Way Down */
(function(){
const G = globalThis.G, { S_, QS } = G.grh;

/* ================= CHAPTER 4: THE LABORATORY ================= */
G.chapter('sp4',{ story:'space', n:'Chapter 4: The Laboratory', sub:'What the Vell wanted to learn', ch:2, region:'sp_lab', art:'lab|🧪', age:12, btn:'Open the door',
  text:`The archive tower has a second door, and Oko, if it is with you, will not go through it. "That is where they study us," it says, its colours turning grey. "I am sorry. I cannot make myself."\nBeyond is a long, humming, green-lit room full of tanks and tubes and silent machines. In the tanks float things you have only ever seen in books: a coral reef in miniature, a drifting cloud of tiny glowing creatures, a single slowly turning oak seedling.\nThe Vell collect one of everything. Somewhere in here, you realise, they are keeping something of yours.`,
  beats:()=>G.mix(['sp4_lab','sp4_tanks','sp4_sample','sp4_bay','sp4_warden','sp4_sleepers'],7,{nocamp:true}) });

S_('sp4_lab','Specimens','lab|🧪 🌱',
`Row on row of glass tanks, each one lit from beneath. A seahorse the size of a thumb. A swarm of fireflies, glowing in a slow wave. A crystal of salt as big as a fist, still growing. A small label on each one, in neat, curly script.\nThe children press their faces to the glass. One of the little ones says, in a very small voice, "Are we going to be in one of those?"`,[
 {t:`Tell her no, and mean it.`,y:[`"No," you say, kneeling. "We are going home. All of us." She nods, trusting you completely, which is a heavy thing to be trusted with.`,'xp+m mp+2 flag:sp_kind']},
 {t:`Read the labels, and see what you can learn.`,c:'INT 8 lore',y:[`The labels are in numbers, and the numbers are a catalogue: where, when, how many. There is one for the Earth, and, beside it, a single line: "Taking complete. Return not planned."`,'xp+l mp+1 insight:4 flag:sp_knows_vell'],n:[`The labels swim, and make no sense.`,'xp+s']},
 {t:`Look for something that might be useful.`,c:'WIS 8 survive',y:[`On a low shelf, you find a coil of fine wire, a small sealed pack of cells and a hand-sized sample of ice. The cells look rather like batteries.`,'xp+m +sp_cellpack mp+1'],n:[`Nothing but glass, and more glass.`,'xp+s']},
 {t:`Keep everyone moving, and away from the tanks.`,y:[`Better safe than sorry. You lead the group along the wall, and nothing happens at all.`,'xp+s mp+1']},
 {t:`Reach into the glowing tank and lift out the little glowing fish.`,y:[`The little fish is not a fish. It is a living battery. A bright blue flash runs up your arm, and the whole lab goes silent. Your adventure ends here.`,'die']} ]);

S_('sp4_tanks','The Tank of Sleepers','lab|💤 🛏️',
`At the far end of the hall, a row of long, pale pods holds sleeping shapes: not Vell. They are children. A dozen of them, in pyjamas, their faces calm, their breath fogging the glass. Their names are written on small cards. These are children who were separated from your group, in the corridor, in the alarms.\nThe pods are sealed. The panel beside them has a lever, a dial and a row of tiny, flickering lights.`,[
 {t:`Try the lever.`,y:[`The lever moves, and a long, low alarm rings through the lab. The pods stay shut. Somewhere above, boots, or whatever the Vell wear, begin to run.`,'xp+s hp-1 mp-2'],risk:[40,`The drones arrive quickly, and a group of children is hustled away down a side corridor before you can stop them.`,'kids-3']},
 {t:`Read the panel carefully before you touch anything.`,c:'INT 9 craft',y:[`The panel is a sleep-controller. The dial sets how deeply they sleep, and the lights tell you what is safe. You turn the dial slowly, to the smallest setting, and the pods hiss open, one after another. Twelve children blink, stretch and burst into tears at the sight of you.`,'xp+l kids+3 mp+4 flag:sp_lab_ok'],n:[`You turn it too fast. The pods hiss, and a few open, but the rest stay shut, and the children inside whimper. It will take time.`,'xp+m kids+1']},
 {t:`Ask Lin, who knows about bodies, what to do.`,r:'ally:sp_lin',y:[`Lin studies the readout, frowns and taps the lights in a certain order. "They are not hurt," she says. "Only very deeply asleep. Wake them slowly." You do, one by one, and each one wakes with a gasp and a shout for their mother.`,'xp+l kids+4 mp+4 bond:sp_lin flag:sp_lab_ok']},
 {t:`Leave them for now, and come back with help.`,y:[`It is the hardest thing to do, standing there, with a dozen sleeping faces in front of you. You mark the place carefully. You tell yourself you will return.`,'xp+s mp-2']} ]);

QS('sp4_sample','The Sealed Tray','lab|🧬 🔬',
`On a bench beside the pods lies a tray of small glass slides, each labelled with a child's name. Under a flat grey lens, a slide shows a swirl of tiny pale shapes, and, in the middle of each one, a small dark dot.\n"That is a cell," says Lin, very quietly. "And that dark dot in the middle is the part that holds the instructions that make every one of us. The Vell have a slide for every child. What is the dark dot called?"`,
 ['The nucleus','The membrane','The ribosome'],
 [`"The nucleus," says Lin. "It holds our DNA: the instructions for building a person." She looks at the tray, and her voice shakes with anger. "They wanted to learn how we are made. They did not need to take us to do that." You sweep the slides into a pocket. Whatever the Vell have learned about you, they will not be keeping it.`,`"The membrane is the thin skin round the cell," says Lin. "The thing in the middle is something else."`,`"Ribosomes are tiny workshops floating round the cell," says Lin. "The dark dot in the centre is bigger, and does a different job."`],
 'xp+l mp+3 +sp_sample');

S_('sp4_bay','The Quiet Bay','lab|🩺 🛏️',
`A small room off the lab: white, tidy and warm. A row of small beds, each with a sleeping child. A soft machine hums above every bed, and a thin, green line crawls across its glass face. A younger boy on the nearest bed has a flushed face and a very quick, shallow breath.\n"Fever," says Lin, touching his forehead. "A bad one."`,[
 {t:`Give him water and a cool cloth.`,y:[`Slowly, patiently, you sponge his forehead, and he settles. By morning, the fever has gone, and he is awake, asking where his dog is.`,'xp+l mp+3 kids+1 flag:sp_kind']},
 {t:`Use the antidote from the first-aid pouch.`,r:'item:sp_antidote',y:[`You give him a measured dose. Within minutes his breathing eases, and his colour returns. "How did you know?" asks Lin, softly.`,'-sp_antidote xp+l mp+3 kids+1 flag:sp_kind']},
 {t:`Carry him out and find help elsewhere.`,c:'STR 8 endure',y:[`You hoist him on your back, and set off. It is slow, and your arms ache. But you find the cool shade of the garden, and he sleeps.`,'xp+m mp+2 kids+1'],n:[`He is heavier than you thought, and the corridor is long. You have to stop, again and again, and by the time you arrive, he is much worse.`,'xp+s hp-2 mp-2']},
 {t:`Leave him, and go on. Time is short.`,y:[`You turn away, and it feels like swallowing stones. A few hours later, you learn that the Vell have moved him. You do not know where.`,'xp+s mp-4 kids-1']} ]);

S_('sp4_warden','The Warden of the Deep','lab|🤖 🔴',
`A tall, slender machine steps out between two tanks, like a heron on stilts. It has no face, only a long, curved lens, a ring of tiny red lights and a soft voice in your own language, flat and measured, like an announcement in a station.\n"Subjects are not permitted in the laboratory. Please return to your cell. You will be provided with food, water and an appropriate environment."\nIt is not angry. It does not understand why you are afraid. That is somehow worse.`,[
 {t:`Reason with it. Tell it that you are children, not subjects.`,c:'CHA 9 persuade',y:[`"Children," it repeats, thoughtfully. "A sub-class of subject." There is a long, odd pause. "Query: the preferred environment of children." You tell it: home, parents, sky. The red lights flicker. It steps aside, and says, "Noted." You are through.`,'xp+xl mp+4 flag:sp_warden_down'.replace('xp+xl','xp+l')],n:[`"Subjects will return to their cell," it says, and extends a long, thin arm. A small crowd of children is gathered up before you can stop it.`,'xp+m hp-1 kids-5']},
 {t:`Confuse its sensors with the silver blankets.`,r:'item:sp_foil',y:[`You and the children drape the blankets over the lens, and flap them wildly. The warden turns in circles, clicking in confusion. By the time it recovers, everyone has slipped past.`,'xp+l mp+3 flag:sp_warden_down']},
 {t:`Lure it away with a noise, and run.`,y:[`You hurl a tray against a far wall. The warden swivels, extends a long arm and glides after the sound. You lead everyone the other way, as quietly as a hundred children can.`,'xp+m mp+2'],risk:[30,`The warden is cleverer than it looks. It turns, and a grey beam sweeps the group. A few children, caught, are gathered and led away.`,'kids-5']},
 {t:`Do as it asks, and go back.`,y:[`You obey. It is a very long, very silent walk, and, when you reach the cell, the door shuts behind you. You will have to start again.`,'xp+s mp-3 kids-3']} ]);

S_('sp4_sleepers','What the Vell Did Not Know','lab|📜 🧠',
`In a small side room, a screen glows, playing a loop of pictures: children laughing, a dog on a beach, a mother reading in a bright kitchen. Something the Vell recorded, from a window somewhere, in the hours before they took you. Under each picture, a label, in their curly script.\n"They did not understand," says Noor, softly. "Look at the labels. They wrote 'behaviour of the young'. They did not realise that was somebody's mum."`,[
 {t:`Take the recording with you.`,y:[`You pocket the little cube. Maybe, one day, someone on Earth will want to know what the Vell saw.`,'xp+m mp+2 flag:sp_knows_vell']},
 {t:`Smash the screen.`,y:[`The screen shatters. It feels good for about a second, and then you are standing in a room full of broken glass with a lot of noise to explain.`,'xp+s hp-1 mp-1']},
 {t:`Stay for a moment, and watch.`,y:[`It is the only window you have had to home since you were taken. You watch it, quietly, until Noor tugs your sleeve.`,'xp+m mp+3']},
 {t:`Ask Noor to copy what she can into her notebook.`,r:'ally:sp_noor',y:[`Noor writes quickly: names, places, a beach, a street sign. "In case," she says. "In case anybody ever needs to know where we were."`,'xp+l mp+2 bond:sp_noor']} ]);

/* ================= CHAPTER 5: THE ENGINE DECKS AND THE HANGAR ================= */
G.chapter('sp5',{ story:'space', n:'Chapter 5: The Engine Decks', sub:'Heat, pipes and a very big shuttle', ch:3, region:'sp_engine', art:'engineroom|🔥', age:12, btn:'Go down',
  text:`The ladder goes down, and down, and the air gets hotter with every rung. A great low roar fills the dark, and a faint orange glow lights the walls.\nThe engine decks of the Vell ship are as big as a cathedral, a warm, humming jungle of pipes, valves and pulsing orange coils, with great ducts that breathe in and out like the lungs of a sleeping animal.\nSomewhere on the far side, past all this noise and heat, is the hangar. Somewhere in the hangar is the shuttle.`,
  beats:()=>G.mix(['sp5_engine','sp5_pipes','sp5_power','sp5_oko','sp5_hangar','sp5_shuttle','sp5_load'],8,{nocamp:true}) });

S_('sp5_engine','The Furnace Gallery','engineroom|🔥 🌡️',
`A narrow metal walkway runs along the edge of a drop, with a huge, glowing coil on one side and a wall of pipes on the other. The heat is like standing too close to an oven. Sweat prickles on your face. The children, one after another, file along it, coughing.\nHalfway along, a section of the walkway is missing, a gap about two metres wide, with a long drop beneath.`,[
 {t:`Make a bridge of the long ladder-rail and a blanket.`,c:'INT 8 craft',y:[`You lash the rail across the gap with the cable, and test it with your weight. It holds. A hundred children cross it, one at a time, with you counting every head.`,'xp+l mp+3 flag:sp_pod_fixed'],n:[`The rail slips, and clangs down the shaft. Two of the smaller children shriek. You find another way, but it takes a long time, and you lose more than you meant.`,'xp+m hp-1 kids-2']},
 {t:`Jump across, and pull the others over.`,c:'DEX 9 dodge',y:[`You clear the gap in one leap, and brace yourself, catching each child's hand as they jump. It is nerve-racking, but nobody falls.`,'xp+l mp+3'],n:[`Your foot slips at the edge, and you hang by your fingertips until Tomás pulls you up. Everyone else, shaking, refuses to jump.`,'xp+m hp-3 mp-2'],risk:[25,`A child at the back loses her nerve and jumps too short. You grab her sleeve, but she is gone.`,'kids-1 hp-2']},
 {t:`Find another route round, through the service tunnel.`,y:[`It is dark, damp and low. But it is cool, and it leads, after a long time, round the gap and out into a wide, quiet gallery.`,'xp+m mp+1']},
 {t:`Wait here for the heat to pass.`,y:[`It does not pass. The coil pulses, and the walkway ticks and creaks. Waiting makes you hotter, and no safer.`,'xp+s hp-2 mp-1']},
 {t:`Cross the shining coil, because it looks like a bridge.`,y:[`It is not a bridge. It is the heart of the engine, and it glows white-hot beneath its dull orange cover. The cover cracks under your foot. Your adventure ends here.`,'die']} ]);

QS('sp5_pipes','The Hissing Valve','engineroom|💨 🔧',
`A thick pipe along the wall hisses, and, as you watch, a bead of white steam shoots from a seam. The pressure gauge on its side trembles, and the needle creeps toward a red line.\n"It will burst," says Tomás, wiping his hands on his pyjamas. "A pipe like that has to let off steam somewhere. If you heat a gas in a sealed space, what happens to its pressure?"`,
 ['It goes up','It goes down','It stays the same'],
 [`"It goes up," says Tomás. "The molecules move faster, and push harder on the walls." He reaches for a small valve beside the pipe and turns it, slowly, a quarter turn. The hiss softens, and the needle drifts back. "There. Just a little release." You walk on, past the cooling pipe, with new respect for plumbing.`,`"If it went down," says Tomás, "pipes would be much safer. Think about a pressure cooker."`,`"If nothing changed," says Tomás, "nobody would ever bother with safety valves."`],
 'xp+l mp+3 flag:sp_pod_fixed');

QS('sp5_power','The Dead Cell','engineroom|🔋 ⚡',
`A broad, flat machine in an alcove has a row of empty sockets, like a charger. A small sign beside it, in curly script, shows four glowing cells in a row, with a number above each one: 3, 4, 6, 9.\nYou have the cell pack from the lab, and it is flat. "It needs the rest of the cells to run," says Tomás. "The Vell numbers show how many units each cell holds. We have to find the total." He taps the sign. "What is 3 + 4 + 6 + 9?"`,
 ['22','21','23'],
 [`"Twenty-two," says Tomás, grinning. The charger hums. The cells glow green, one by one. You tuck the pack into your pocket, charged, heavy and warm. It feels like carrying a piece of the sun.`,`"Twenty-one," says Tomás, and the charger gives a rude buzz. "Try again. Three and four make seven, then six, then nine."`,`"Twenty-three," says Tomás, and the charger buzzes. "Too many. Add them again, slowly."`],
 'xp+l mp+3 +sp_cellpack');

S_('sp5_oko','Oko Chooses','engineroom|🐙 💔',
`In a cramped control alcove, Oko is waiting, its skin pale and rippling. "I must tell you something," it says. "The Vell are not cruel. They are curious. When they learn you have escaped, they will not hunt you. They will study how you did it." It pauses. "And they will take another hundred from somewhere else, to see whether they behave the same way."\nA long, low silence.\n"There is a way to stop it," says Oko. "I can wake the ship's long-sleeper, the old mind, and ask it to turn the ship away from your Sun. But it will notice me. I do not think I will come back."`,[
 {t:`Say yes. Ask Oko to do it.`,r:'ally:sp_oko',y:[`"Thank you," says Oko, and its colours flush a warm, steady gold. "I will do it, and you will go." It touches your hand, once, with a soft, cool arm. It is the last you see of it. A few hours later, the ship begins to turn.`,'xp+xl mp+5 drop:sp_oko flag:sp_oko_sacrifice flag:sp_kind'.replace('xp+xl','xp+l')]},
 {t:`Say no. Ask Oko to come with you.`,r:'ally:sp_oko',y:[`"That is kind," says Oko, "but it will not save anyone else." It lowers its arms. "I will come with you, if you will have me. But the Vell will be back."`,'xp+m mp+2 bond:sp_oko']},
 {t:`Ask whether there is a way to do both.`,c:'INT 9 lore',r:'ally:sp_oko',y:[`"There might," says Oko slowly. "If I wake the old mind from inside the hangar, not here, it will turn the ship before it notices me. But it must be done at the same moment as the shuttle launch." Its eyes widen. "Ah. That is a very hard thing to time."`,'xp+xl mp+4 flag:sp_oko_plan'.replace('xp+xl','xp+l')],n:[`"I do not know," says Oko, sadly. "I wish I did."`,'xp+m']},
 {t:`You are not sure you can trust any of this.`,y:[`Oko watches you, patient, quiet. "That is wise," it says. "I will show you the way to the hangar. After that, the choice is yours."`,'xp+s mp-1 flag:sp_oko_betrayed']} ]);

S_('sp5_hangar','The Hangar','hangar|🚀 🏭',
`At last, a vast, quiet space, like an airport at night. Rows of dark, sleek ships hang from the ceiling on slender arms, and a single, long, pale shuttle sits on the floor, its belly open. It is bigger than you imagined: long enough for a hundred children, and then some.\nBeyond its nose, a huge curved door stands closed. Beyond that door is nothing but space. And, in the corner of a high, wide window, a small, patient, blue Earth.`,[
 {t:`Gather the children and count again.`,y:[`You count them, in groups of ten, again and again. The number is the number it is. Every head matters now.`,'xp+m mp+3 flag:sp_cell_clear']},
 {t:`Walk all the way round the shuttle, looking for damage.`,c:'WIS 8 survive',y:[`On the left side, a long dark crack. A bent landing strut. A loose panel by the nose. You tick them off on your fingers, and feel the shape of the work ahead.`,'xp+m mp+2 flag:sp_shuttle_ok'],n:[`It looks fine. It looks big and fine. You will find out otherwise soon.`,'xp+s']},
 {t:`Ask Tomás what he thinks.`,r:'ally:sp_tomas',y:[`Tomás, wiping his hands, circles the shuttle slowly, whistling through his teeth. "It is like a very big, very clean tractor," he says. "Two things are broken. One is the coolant line. The other is the power coupling." He grins. "I can fix both. Give me an hour."`,'xp+l mp+3 bond:sp_tomas flag:sp_shuttle_ok']},
 {t:`Make for the control console at the nose.`,y:[`The console is dark and cold. Its buttons are in curly script. You press one, and nothing happens, and a little red light begins to blink.`,'xp+s mp-1'],risk:[30,`A klaxon begins to ring, deep inside the hangar. Armoured drones slide from their roosts, and the nearest groups of children scatter in alarm.`,'kids-5']},
 {t:`Climb into the open airlock, and wave to the children from the far side of the glass.`,y:[`You step into the little white chamber, turn, and wave. A hand on the far side, a child's hand, presses a bright round button, thinking it is the door. The air leaves. Your adventure ends here.`,'die']} ]);

S_('sp5_shuttle','Mending the Shuttle','hangar|🔧 🛠️',
`The shuttle is old, and has not flown for years. Its coolant line is cracked, its power coupling is dead, and its landing strut is bent. Tomás, Noor and a dozen willing helpers swarm over it with spanners, wire and a great deal of improvised hope.\nThe clock is ticking. Somewhere above, the ship is drifting a little further from home with every hour.`,[
 {t:`Weld the coolant line with the multitool.`,r:'item:sp_multitool',c:'DEX 9 craft',y:[`The little flame hisses, the metal blushes red, and the crack closes, a thin, neat line. You hold your breath, and the pressure gauge steadies. A cheer goes up from the children.`,'xp+l mp+3 flag:sp_pod_fixed'],n:[`The flame is too hot, and the line buckles. You have to start again, and burn your fingers.`,'xp+m hp-2']},
 {t:`Replace the coupling with the charged cell pack.`,r:'item:sp_cellpack',y:[`The pack clicks into the socket, and the dead console blinks awake, line after line of strange, curling script. The lights on the shuttle's belly come on, one by one, like stars.`,'-sp_cellpack xp+l mp+4 flag:sp_shuttle_ok']},
 {t:`Straighten the strut with a lever and a pile of crates.`,c:'STR 8 endure',y:[`Together you heave, and the strut groans, bends, and settles with a clang. Good enough to land on, if you land softly.`,'xp+m mp+2 flag:sp_pod_fixed'],n:[`The strut will not move. It is bent in the one way you cannot undo. You will have to land carefully.`,'xp+s hp-1']},
 {t:`Rush it, and hope for the best.`,y:[`There is no time to be thorough. You patch what you can, and trust the rest to luck.`,'xp+s mp-1'],risk:[45,`Mid-repair, a spark jumps from the coupling, and, with a roar, a sheet of coolant sprays the hangar. In the confusion, a number of the children are lost.`,'hp-3 kids-8']} ]);

QS('sp5_load','The Seats','hangar|💺 🔢',
`The shuttle has ten rows of seats along each side, and four more in a long cabin at the back. Noor is pacing up and down the aisle with her notebook. "A hundred children," she says. "And these are the seats. We have to get every one of you strapped in before we launch."\nShe frowns at her notes. "Each row on the left holds five. There are ten rows on the left. The same on the right. How many children does the main cabin hold?"`,
 ['100','50','110'],
 [`"A hundred," says Noor. "Ten rows of five on each side: fifty and fifty." She beams. "And the four extra rows at the back can hold any teachers, supplies, or friends." You count again, and the arithmetic holds. Everyone fits. You strap them in, one by one, checking every belt.`,`"Fifty is only one side," says Noor. "There is another side, just the same."`,`"A hundred and ten would be a very tight squeeze," says Noor. "Count again: ten rows of five, on two sides."`],
 'xp+l mp+3 flag:sp_cell_clear');

/* ================= CHAPTER 6: THE LONG WAY DOWN ================= */
G.chapter('sp6',{ story:'space', n:'Chapter 6: The Long Way Down', sub:'Launch, reentry and the blue below', ch:4, region:'sp_descent', art:'earthview|🌍', age:12, btn:'Launch',
  text:`The shuttle shudders, and the hangar floor slides away. A great curved door opens, slow and enormous, on a darkness full of stars. Through the window, the Earth is no longer a football: it is a blue, shining, ordinary marble, with a dark side and a bright side.\nA hundred children are strapped into their seats, and every one of them is looking at you.\nSomewhere, behind you, the ship is waking up.`,
  beats:()=>G.mix(['sp6_launch','sp6_chase','sp6_nav','sp6_reentry','sp6_shield','sp6_chute'],8,{nocamp:true}).concat(['!gate','sp6_splash','sp6_set']) });

QS('sp6_launch','Cutting Loose','earthview|🚀 ⏱️',
`The shuttle's engines murmur. The countdown on the console, in strange numbers, is running. Noor, in the co-pilot's seat, reads the figures out with a shaking voice. "The burn needs to last twelve seconds at full power, then rest for four, then another twelve. How long altogether?"\nYour hand hovers over the throttle.`,
 ['28 seconds','24 seconds','32 seconds'],
 [`"Twelve, four, twelve," says Noor. "Twenty-eight seconds, start to finish." You time it on your fingers, ease the throttle and feel the shuttle surge, a long, steady push into your seat. The ship, behind you, shrinks to a small grey dot.`,`"That is only the two burns," says Noor. "Do not forget the rest in the middle."`,`"That is too long," says Noor. "Twelve plus four plus twelve. Slowly."`],
 'xp+l mp+3 flag:sp_launched');

S_('sp6_chase','The Hunters','earthview|👾 🛰️',
`Behind you, the great ship's side lights up, and, one by one, small bright shapes drop away from it. They are drones, a dozen of them, and they are fast. They fan out like a flock of birds, gaining on you with every second.\n"They are not firing," says Noor, in a very small voice. "They are trying to pull us back."`,[
 {t:`Fly a zig-zag course to shake them off.`,c:'DEX 9 dodge',y:[`You throw the shuttle left, right, left. The drones follow, overshoot, turn and follow again. You gain a few precious seconds each time. A hundred children hold on and, mostly, do not scream.`,'xp+l mp+3'],n:[`The shuttle lurches, and a few of the belts give way. Children tumble across the cabin, and some are hurt.`,'xp+m hp-2 kids-3']},
 {t:`Fly straight for the Earth, as fast as you can.`,y:[`It is a gamble. The drones chase, but they have not got enough power to keep up. You arrive at the edge of the atmosphere with the engines screaming.`,'xp+s'],risk:[35,`The drones close in, and a beam sweeps the shuttle. A tremor runs through the hull, and some of the seat-locks release. A number of children are pulled toward the open cargo bay.`,'kids-6 hp-2']},
 {t:`Flash the torch, in a pattern, out of the window.`,r:'item:sp_flashlight&flag:sp_warden_known',y:[`Two long, three short. The lead drone stalls, and, seeing the pattern, the rest hesitate, confused. They circle, then, one by one, drift back toward the ship.`,'xp+l mp+4']},
 {t:`Ask Oko to speak to them.`,r:'ally:sp_oko',y:[`Oko leans toward the console, and its skin ripples in a long, urgent series of colours. The drones slow, circle, and turn. "I told them that you are guests," it says. "I told them that the collection is closed." It sags, exhausted.`,'xp+xl mp+5 bond:sp_oko'.replace('xp+xl','xp+l')]} ]);

QS('sp6_nav','Finding Home','earthview|🗺️ 🧭',
`Below you, the planet fills the whole window. Blue ocean, white cloud, dark land. Noor holds up her notebook. "We cannot just fall," she says. "We have to land somewhere with water, or flat ground, away from cities." She chews her lip. "The biggest ocean on Earth, the one that covers a third of the whole planet. What is it called?"`,
 ['The Pacific Ocean','The Atlantic Ocean','The Indian Ocean'],
 [`"The Pacific," says Noor. "Bigger than all the land put together." You nod, and steer for the great, empty blue, where a splashdown could not hurt anyone. Far below, a faint spangle of islands glints in the sun.`,`"The Atlantic is big," says Noor, "but it is not the biggest. Think about the one that is wider than all the continents put together."`,`"The Indian Ocean is smaller than the one I mean," says Noor. "The biggest has a name that means peaceful."`],
 'xp+l mp+3 flag:sp_has_chart');

QS('sp6_reentry','The Wall of Fire','earthview|🔥 🌡️',
`The shuttle shudders, groans and begins to glow. Orange light fills the cabin, and a deep, grinding roar drowns out every other sound. Noor grips her armrests. "It is getting hot," she shouts. "Why? We are not firing any engines!"\nYou think hard, and shout back, over the noise: "What makes a spacecraft heat up when it comes back into the air?"`,
 ['Friction and compression of the air','The Sun shining on the hull','The engines running too hard'],
 [`"Friction and compression," you shout. "We are travelling at thousands of kilometres an hour, and we are squeezing the air in front of us, hotter and hotter." Noor nods fiercely. "So the shield has to take it." You angle the nose just so, and the heat shield glows, and holds.`,`"The Sun is no hotter than it was in space," you shout back. "It is the air, hitting us at enormous speed."`,`"The engines are off," you shout back. "It is the air doing the heating."`],
 'xp+l mp+3');

S_('sp6_shield','The Heat Shield','earthview|🛡️ 🔥',
`The nose of the shuttle glows white. A smell of burning plastic rolls through the cabin. On the console, a row of small lights is turning from green to yellow to red.\n"The shield is wearing thin," says Tomás, hoarse. "If we do not slow down, we will burn through."`,[
 {t:`Tilt the nose up, so the shuttle skims the air.`,c:'INT 9 craft',y:[`You tilt, a few degrees, and the roar changes. The shuttle skims the thick air like a flat stone on a pond. The red lights flicker, and, slowly, one by one, turn yellow, then green.`,'xp+l mp+4 flag:sp_shuttle_ok'],n:[`You tilt too far. The shuttle bucks, a patch of the shield peels away, and a wave of heat rolls through the cabin.`,'xp+m hp-3 kids-4']},
 {t:`Cover the windows with silver blankets.`,r:'item:sp_foil',y:[`Silver blankets, taped to every window, reflect the glare. The cabin cools, a little. It will not stop the heat, but it helps everyone survive it.`,'xp+m hp+2 mp+2']},
 {t:`Pour the cooling water over the hull panel.`,r:'item:sp_water',y:[`The water hisses into steam, and, for a long, bright moment, the cabin is white with mist. When it clears, the panel is cool to the touch.`,'-sp_water xp+m mp+2']},
 {t:`Hold on, and trust the shield.`,y:[`You grip the console, and hope. The roar rises, and rises, and, finally, begins to fall.`,'xp+s mp-1'],risk:[40,`The shield buckles with a long, tearing crack. Fire licks in, and the rear rows of the cabin are lost in smoke.`,'hp-4 kids-9']},
 {t:`Lift a blind to look at the fire, just once.`,y:[`The blind lifts. The window is white, then orange, then gone. Heat fills the cabin in a single breath, and the shuttle goes on without you. Your adventure ends here.`,'die']} ]);

S_('sp6_chute','Slowing Down','earthview|🪂 ☁️',
`The glow fades. The roar thins. Below you, through a gap in the cloud, you can see the ocean: a vast, wrinkled blue, with a single white scratch of wake from some distant ship. The altimeter, in curling script, ticks downward.\nThe shuttle is still travelling much too fast to land. There are three large parachute housings along the spine.`,[
 {t:`Deploy all three parachutes at once.`,y:[`There is a bang, a jolt, and a long, soft, tugging slowdown. The shuttle swings under three great canopies, like a basket under three balloons. A hundred children cheer, weakly.`,'xp+m mp+3'],risk:[30,`The parachutes tangle. One tears loose, and the shuttle lurches and begins to spin. A great many children are thrown against their harnesses.`,'hp-3 kids-5']},
 {t:`Deploy them one at a time, a few seconds apart.`,c:'INT 8 craft',y:[`One, then, after a breath, another, then the last. Each opens cleanly, with a soft, deep thump. The shuttle slows, and slows, and, at last, hangs, swaying, over the sea.`,'xp+l mp+4'],n:[`The timing is off. The second chute opens before the first is full, and the shuttle bucks, throwing you all about.`,'xp+m hp-2 kids-2']},
 {t:`Keep the engines on, and use them to brake.`,y:[`The engines roar, and the shuttle slows, but the fuel gauge falls fast.`,'xp+s mp-1'],risk:[30,`The fuel runs out two hundred metres above the waves. The last of the speed is taken by the sea itself, hard.`,'hp-4 kids-6']},
 {t:`Ask Noor to read out the altitude as you fall.`,r:'ally:sp_noor',y:[`Noor reads out the numbers, steady and clear: one thousand, eight hundred, six hundred. At exactly the right moment, you pull the chutes. It is calm, and clean, and it works.`,'xp+l mp+4 bond:sp_noor']},
 {t:`Open the hatch early, to see where the sea is.`,y:[`The hatch opens a hand's breadth, and the whole sky screams in, at three hundred kilometres an hour. The seal tears away, and so does everything that was not strapped down. Your adventure ends here.`,'die']} ]);

S_('sp6_splash','The Sea','earthview|🌊 🛟',
`The shuttle drops, tilts, and, with a long, tearing hiss, touches the sea. Spray bursts across the windows. A soft wave rocks the hull, and then, for a long moment, nothing at all. Then, very faintly, you hear the sound of waves slapping against the outside.\nThe hatch is above you. Through the rippling window, the sky is the most ordinary, beautiful, impossible shade of blue.`,[
 {t:`Open the hatch, and let in the air.`,y:[`Fresh, salt-smelling air floods the cabin, and a hundred children cheer, shout and sob. You have never heard such a beautiful noise.`,'xp+l mp+4 flag:sp_launched']},
 {t:`Check every child before you open anything.`,y:[`You walk the aisle, checking every belt, every face. It takes ten minutes. It is the longest ten minutes of your life.`,'xp+m mp+3 flag:sp_kind']},
 {t:`Send up a flare from the emergency kit.`,y:[`A thin red streak climbs into the blue, and hangs there, signalling. Somewhere beyond the horizon, you hope, someone is watching.`,'xp+m mp+2']},
 {t:`Take a deep breath, and say thank you to everyone.`,y:[`You stand, and turn, and look at a hundred faces. "Thank you," you say. It does not feel like enough. It is the only thing there is.`,'xp+m mp+3 flag:sp_kind']} ]);

S_('sp6_set','The Last Moment','earthview|🛟 🌅',
`The sea is calm. The sun is low. A small white ship is steaming toward you across the swell, its horn sounding, long and low. Children are crowding at the hatch, waving.\nBehind you, in the dark above the sky, the great ship has turned. It is going away. It is going, you think, to somewhere very far.\nYou take a long, last look round at the cabin, and count.`,[
 {t:`Wave to the ship, and wait.`,y:[`You wave. The ship gets closer, and closer. You have done it. You have, somehow, done it.`,'xp+xl >sp_end_home'.replace('xp+xl','xp+l')]},
 {t:`Look up at the sky, one last time, and say goodbye to Oko.`,hide:true,r:'flag:sp_oko_sacrifice',y:[`The sky is empty, and blue, and far. A small, faint gold light flickers once, high above the clouds, and goes out. "Thank you," you whisper.`,'xp+xl >sp_end_oko'.replace('xp+xl','xp+l')]} ]);

/* =============== ENDINGS =============== */
function epi(S){
  const L = []; const al = id => S.allies.includes(id); const fl = f => !!S.flags[f];
  if (fl('sp_oko_sacrifice')) L.push('Oko\'s last act turned the great ship away from the Sun. Nobody on Earth knows its name, but some nights, at the edge of the sky, one small gold light blinks twice, as if to say thank you.');
  else if (al('sp_oko') && fl('sp_oko_plan')) L.push('Oko woke the old mind from the hangar at the very moment you launched, and the great ship turned away from the Sun with Oko safely aboard your shuttle. It lives by the sea now, learning to like rain.');
  else if (al('sp_oko')) L.push('Oko came home with you, and lives quietly by the sea, learning to like rain. It still talks, now and then, about the day a hundred children taught it what a mother was.');
  else if (fl('sp_oko_betrayed')) L.push('You sometimes think about Oko, left behind in a dark library, and wonder whether you could have done more.');
  if (fl('sp_lab_ok')) L.push('The sleepers from the laboratory woke safe, and never lost their taste for adventure stories.');
  if (al('sp_noor')) L.push('Noor became an astronomer, and her first paper, which nobody believed, was called "On the Direction of a Very Particular Ship".');
  if (al('sp_tomas')) L.push('Tomás repairs tractors on his father\'s farm, and has never, ever let anyone near the shuttle\'s coupling cable.');
  if (al('sp_lin')) L.push('Lin trained as a doctor. She keeps a single small glass slide in a drawer, and has never said why.');
  if (fl('sp_kind')) L.push('A hundred children remember that you were kind.');
  L.push('You made ' + S.choices + ' choices on this journey and reached level ' + S.lvl + '.');
  return L.join(' ');
}
G.spEpi = epi;
const END = (id, art, title, textFn) => G.sc(id, art, S => `${typeof textFn==='function'?textFn(S):textFn}\n${epi(S)}`, [{t:'Return to the story menu', act:'new'}], { end:true, title });
END('sp_end_home','earthview|🌅 🛟','Ending: Home',
 S => {
  const k = S.kids == null ? 0 : S.kids;
  if (k >= 100) return `The small white ship takes you aboard, and, within the hour, a hundred children are wrapped in blankets, drinking sweet tea and asking for their mothers. A hundred, and not one missing. The ship's captain counts three times, and then, quietly, takes off her cap.\nOn the news that night, there is a story that makes no sense: a hundred children missing for a day and a night, found floating off the coast in a long white shuttle, with no explanation. The authorities have questions. Nobody has answers. Every child says the same thing: "We were on a ship. He got us home."\nYour mother is on the quay. She runs. She does not stop running until she has her arms round you, and for a long, long time, neither of you says a word.`;
  if (k >= 75) return `The small white ship takes you aboard. A hundred children climbed into that shuttle, and ${k} of them climb out, wrapped in blankets, drinking sweet tea. The rest are not forgotten. You say their names, quietly, on the quay, until everyone has heard them.\nYour mother is waiting. She holds you for a very long time. When she lets go, she asks no questions at all.`;
  if (k >= 40) return `The small white ship takes you aboard. ${k} of the hundred children are with you. It is a great many, and it is not all, and you know it will be a long time before you stop counting the faces that are not there.\nYour mother is waiting on the quay. She does not ask what happened. She does not need to. She holds you, tightly, and you let her.`;
  return `The small white ship takes you aboard. There are only ${k} children left from the hundred who left, and you hold each of their hands as you climb the ladder. You are home. It does not feel like winning. It feels like waking up from something very long and very sad.\nYour mother is waiting on the quay. She holds you, and says nothing, and you are grateful.`;
 });
END('sp_end_oko','earthview|🌅 🌌','Ending: The Gold Light',
 S => {
  const k = S.kids == null ? 0 : S.kids;
  return `The small white ship takes you aboard. ${k >= 100 ? 'All hundred children are with you.' : k + ' of the hundred children are with you.'} Far above, where the sky turns from blue to black, a great grey shape slowly turns, and, with a faint, silent ripple, is gone. Oko did what it said. It did it for people it had known for a single day.\nThat night, on the quay, with a mug of tea going cold in your hands, you look up at the stars for a long time. One small gold light blinks twice, high and far away. Then it fades.\nYour mother is beside you. She asks no questions. She puts an arm round your shoulders, and you stand there, together, until dawn.`;
 });
})();
