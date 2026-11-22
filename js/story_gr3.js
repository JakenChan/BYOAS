/* THE THREAD OF THE MOIRAI — Chapters 7-9: The Underworld, The Forge, Olympus, and the endings */
(function(){
const G = globalThis.G, { S_, QS } = G.grh;

/* =============== CHAPTER 7: BELOW THE WORLD =============== */
G.chapter('gr7',{ story:'greek', n:'Chapter 7: Below the World', sub:'The realm of Hades', ch:4, region:'gr_hades', art:'underworld|💀 🌑', age:30, btn:'Descend',
  text:`The Greeks believed the Underworld had many doors. One of them is a cave at Cape Taenarum, at the southern tip of the Peloponnese, where the wind howls like a lost voice. Through it, a stair of black stone spirals down into the dark.\nSomewhere below lie the Hourglass of Chronos, in the keeping of the lord of the dead, and a loom where your own life-thread has been knotted by the Fates. Remember the rules: pay the ferryman, respect the hound and, whatever you do, do not look back.`,
  beats:()=>G.mix(['gr7_gate','gr7_ferry','gr7_hound','gr7_fields','gr7_hades','gr7_persephone','gr7_hourglass','gr7_fates','gr7_loom','gr7_thread','gr7_leave'],16,{nocamp:true}) });

S_('gr7_gate','The Cave at Taenarum','underworld|🕳️ 🌬️',
`The cave mouth is a tall black slit in the rock, with a howling wind and a smell of cold stone. A flight of worn steps drops away into the dark. Glaux refuses to go any further. "Owls," he says stiffly, "are creatures of the day and the night. We are not creatures of the permanently dark."\nElena puts a hand on your arm. "Orpheus went down this way," she says, "and he came back, nearly. We shall do the same."`,[
 {t:`Light your torch and start down.`,r:'item:gr_lighter',y:[`The little flame is steady, tiny and brave. It lights the first twenty steps, then the next twenty.`,'xp+m mp+2']},
 {t:`Hold the glowing pearl of Poseidon high.`,r:'item:gr_pearl',y:[`The pearl glows with a soft, watery light. Shadows retreat from it. "Handy," says Elena.`,'xp+m mp+3']},
 {t:`Take a deep breath and walk down in the dark.`,c:'WIS 8 resist',y:[`You count the steps and keep your balance by the wall. The dark is cold and total, but you are not afraid.`,'xp+l mp+3'],n:[`You stumble twice, bruise a knee and arrive with a bad temper.`,'xp+m hp-2']},
 {t:`Hum the Orpheus melody for courage.`,r:'flag:gr_orpheus',y:[`The cave seems to listen. The wind drops a little, and the steps seem easier.`,'xp+l mp+4']} ]);

S_('gr7_ferry','Charon the Ferryman','underworld|⛵ 💀',
`At the bottom, a vast black river slides past in the dark. This is the Styx. A boat waits at the bank, long and low, and in it sits a gaunt figure in a hooded cloak, resting on a long pole. A queue of grey, silent shadows waits to cross.\n"Fare," says Charon, without lifting his head. "One obol per shade. Living folk, double. Or a good reason."`,[
 {t:`Tell him a story about the living world.`,y:[`You tell him about trains, planes and Rome, and a very good pizza. Charon listens, mouth slightly open. "Fascinating," he says finally. "I have a sister who never takes holidays. Get in."`,'xp+l mp+3 flag:gr_charon']},
 {t:`Pay him a silver drachma.`,r:'gold:2',y:[`He bites the coin, and spits. "Athenian owl. Fine." He moves his pole, and you step aboard.`,'gold-2 xp+m mp+2 flag:gr_charon']},
 {t:`Offer him your wristwatch.`,r:'item:gr_watch',y:[`He studies the ticking thing with deep, ancient puzzlement. "What does it do?" "It tells the time," you say. He looks at you for a very long moment. "Take the boat," he says, and keeps the watch.`,'-gr_watch xp+l mp+2 flag:gr_charon']},
 {t:`Ask politely whether you may cross for free.`,c:'CHA 9 persuade',y:[`Charon sighs. "Rules are rules, but nobody has asked politely in six hundred years." He gestures to the seat.`,'xp+l mp+3 flag:gr_charon'],n:[`"Rules," he says. But you notice he does not stop you from stepping into the boat.`,'xp+m mp-1 flag:gr_charon']} ]);

S_('gr7_hound','Cerberus','underworld|🐕 🔥',
`On the far bank, a vast gate of black iron stands open. Before it lies a hound the size of a house, with three huge heads, each with a mouth full of teeth like daggers. The middle head opens one eye, then the second, then the third. A rumble like a distant landslide rolls over you. A snake tail lashes.\nCerberus has never let anyone out. It does not much care who comes in.`,[
 {t:`Offer him a honey cake.`,r:'item:gr_honey',y:[`Three noses twitch. Three tongues loll. The honey cake vanishes in one gulp, and all three heads begin to wag. You are, apparently, a friend.`,'-gr_honey xp+l mp+4 flag:gr_cerberus']},
 {t:`Play him music.`,r:'skill:gr_music|flag:gr_orpheus',y:[`You hum a slow, soothing tune. The first head droops. The second yawns. The third snores. You tiptoe past.`,'xp+l mp+4 flag:gr_cerberus']},
 {t:`Scratch behind all three sets of ears.`,c:'CHA 8 persuade',y:[`A huge head sinks onto your shoulder, and thumps the floor with a happy tail. "Good boy," you say. "Good, good boy." Nobody has ever called him that.`,'xp+l mp+4 flag:gr_cerberus'],n:[`One of the heads grumbles. Another lifts a lip. But the third licks your face, and the others let you pass.`,'xp+m hp-2']},
 {t:`Slip past while he sleeps.`,c:'DEX 10 sneak',y:[`You tiptoe, and tiptoe, and tiptoe. A head twitches. You freeze. It settles. You are through.`,'xp+l mp+3'],n:[`A tail whips round. You are lifted, shaken, and set down, gently, on the right side of the gate, with a very pointed growl.`,'xp+m hp-3']},
 {t:`Bow and wait for him to decide.`,y:[`Three huge heads study you. Then, to your relief, they lie down. "Thank you," you whisper. A tail thumps.`,'xp+m mp+3 flag:gr_cerberus']} ]);

S_('gr7_fields','The Fields of the Dead','underworld|🌾 👥',
`Beyond the gate, grey fields stretch to the horizon, scattered with pale, drifting figures. They are the ordinary dead: farmers, mothers, carpenters, children. They do not weep, and they do not smile. A faint breeze carries a sound like pages turning.\nAt the edge of the path, a clear, still river runs between banks of white poplar. Its water looks cool and inviting. A sign, in faded letters, says: LETHE.`,[
 {t:`Walk past the river, eyes on the path.`,y:[`You remember what the river does. Whoever drinks forgets who they were. You keep walking.`,'xp+m mp+2 flag:gr_respect']},
 {t:`Speak kindly to a passing shade.`,c:'WIS 9 spirit',y:[`"Tell my daughter," whispers a woman, "that the bread is in the blue jar." You promise, though you do not know her daughter. She smiles.`,'xp+l mp+3 flag:gr_kind'],n:[`She drifts on, a little puzzled.`,'xp+s']},
 {t:`Cup your hands and drink from the river. You are very thirsty.`,y:[`The water is cold, soft and sweet. Your head feels light. Names slip away: your mother\'s, your own, your home\'s. You stand in the grey field, smiling, and cannot think why you were in a hurry. Your adventure ends here.`,'die']},
 {t:`Fill your bottle from the clear stream beside the path.`,y:[`A separate, safe stream runs beside the river. Cold, clean and ordinary.`,'xp+s +gr_water hp+2']} ]);

S_('gr7_hades','The Lord of the Dead','underworld|👑 ⚫',
`The palace of Hades is a vast black hall, its columns carved with sleeping figures. On a throne of ebony sits a tall, pale, serious man in a dark robe, a helmet of shadows on the arm of the throne. He is not at all cruel. He is tired, precise and a little irritable.\n"Visitors," he says. "Alive. This is, to put it mildly, unusual. State your business, briefly."`,[
 {t:`"We come to ask for the Hourglass of Chronos, held here."`,y:[`His eyebrows rise a very little. "Ah. The Hourglass. Dropped here by a golden woman, who said it was a gift. I do not accept gifts. I do accept lost property." He rubs his temples.`,'xp+l mp+2 flag:gr_respect']},
 {t:`Greet him with great respect.`,c:'CHA 8 persuade',y:[`"Lord Hades," you say, bowing. He blinks. "Nobody ever bows," he says. "They scream. Or weep. Or sing at me." He nearly smiles. "Sit."`,'xp+l mp+3 flag:gr_respect'],n:[`He grunts. "Say your piece."`,'xp+m mp+1']},
 {t:`Offer him a gift: something from the living world.`,r:'any:gimmick',y:[`He examines the strange trinket with dry fascination. "Hm. Colourful. Utterly pointless. I like it." It disappears into his sleeve.`,'gimmick xp+m mp+3 flag:gr_respect']},
 {t:`Demand that he give back the hourglass at once.`,y:[`The air turns to ice. The throne seems to grow. "DEMAND?" The dark in the room leans in. You are quickly and quietly shown to a very comfortable chair in a very quiet room, and you never leave it. Your adventure ends here.`,'die flag:gr_hubris']} ]);

S_('gr7_persephone','The Queen of Spring','underworld|🌸 🍎',
`A soft light comes from a side door. A young woman in a green dress, with flowers growing in her dark hair, steps into the hall, a pomegranate in her hand. Wherever she steps, tiny flowers push up between the black tiles. She is Persephone, queen of the dead for part of every year.\n"Hades is grumpy," she says, with a smile, "but he is fair. Let me help. And if you are hungry..." She holds out the pomegranate. "...do not eat the seeds."`,[
 {t:`Thank her and politely refuse the seeds.`,y:[`"A wise guest," she says, delighted. "I made that mistake once. It cost me half my year." She presses the fruit into your hand anyway: "To remember me."`,'xp+l +gr_pomegranate flag:gr_persephone mp+4']},
 {t:`Ask her about the seasons.`,y:[`"When I am here, the world is cold," she says. "When I go up, my mother Demeter laughs, and spring comes. It is the only way to have both." She looks at you thoughtfully.`,'xp+m mp+3 flag:gr_persephone']},
 {t:`Eat a handful of the seeds. She seems to want you to.`,y:[`They are sweet, ruby-bright and slightly sad. The hall fills with a soft, golden light. "Welcome," says Persephone, quietly. "Welcome to the realm. You will not be leaving." Your adventure ends here.`,'die']},
 {t:`Ask her to help you with Hades.`,c:'CHA 8 persuade',y:[`"Gladly," she says, and steps up beside the throne. "My dear. These are honest people. The hourglass is not ours." Hades sighs, and flaps a hand: "Fine."`,'xp+l mp+3 flag:gr_persephone'],n:[`"He is listening," she murmurs. "Give him a moment."`,'xp+m mp+1']} ]);

QS('gr7_hourglass','Lost Property','underworld|⏳ 📜',
`Hades produces a large ledger. "Items found in this kingdom," he says, "must be returned to those who can name them correctly. The golden woman said this was 'a curio'. I suspect not. What is the god or titan whose name it bears, and what does he stand for?"`,
 ['Chronos, who stands for time','Cronus, who stands for harvest','Kairos, who stands for luck'],
 [`"Time," says Hades, with grim satisfaction. "Yes. Chronos is time itself, an old, patient force." He produces a large hourglass, split by a crack that leaks silver sand upward. "Do be careful. It is, as I said, lost property."`,`"No," says Hades flatly. "Cronus was the father of Zeus. His name is much like it. Try again."`,`"No. Kairos is the moment of opportunity. Not the stream of time. Try again."`],'xp+l +gr_hourglass flag:gr_hourglass_got mp+4');

S_('gr7_fates','The Cave of the Fates','underworld|🧵 🌑',
`A narrow passage leads out of the palace to a dim, round chamber filled with threads, long strands of silver, gold, grey and white, hanging from the ceiling like cobwebs. In the centre sits a huge loom, and three old women sit at it: one spinning, one measuring with a rod, one holding a pair of scissors.\n"Ah," says the first, without looking up. "The one with the tangled thread." The second tuts. The third looks at you with a flat, patient stare.`,[
 {t:`Greet the three sisters respectfully.`,y:[`"Clotho," says the spinner. "Lachesis," says the measurer. "Atropos," says the one with the scissors, and snips the air, once, to make a point. "We are very old," says Clotho. "And very busy."`,'xp+m mp+3 flag:gr_respect']},
 {t:`Offer them the pomegranate.`,r:'item:gr_pomegranate',y:[`The three old women lean in. Lachesis takes it, smells it, and nods to the others. "A gift from our queen," she says. "That will do."`,'-gr_pomegranate xp+l mp+4 flag:gr_fates_gift']},
 {t:`Ask about your tangled thread.`,y:[`"It was caught," says Lachesis, "when the golden one knocked the loom. It is a mess." She points to a silvery strand knotted around a gold one. "Yours. And that gold one is Hermes\'s. They are now twisted."`,'xp+l mp+2 flag:gr_knows_thread']},
 {t:`Ask whether they could simply cut it.`,y:[`The three sisters go very still. "Cut," says Atropos, slowly, and lifts her scissors. A silence descends that you could cut with a very sharp pair of scissors. "We shall pretend you did not say that."`,'xp+s mp-2']} ]);

QS('gr7_loom','The Sisters\' Test','underworld|✂️ 🧵',
`"Before we help you," says Lachesis, "a small question. Three sisters: one spins the thread of a life, one measures it, one cuts it. Which sister is the one that cuts it?"`,
 ['Atropos','Clotho','Lachesis'],
 [`"Atropos," says Lachesis. "The inflexible. She cuts it when the thread is done, neither earlier nor later." Atropos snips, once, in approval.`,`"No," says Clotho, rather hurt. "I am the spinner. I spin the thread. I do not cut it."`,`"No," says Lachesis, sniffing. "I measure. I do not cut. Think of the scissors."`],'xp+l mp+3');

S_('gr7_thread','Untangling the Thread','underworld|🪢 ✨',
`The Fates lay the tangle in front of you: a silver thread, yours, wound three times around a gold one. The knot is tight and old. "Mortals," says Clotho, "can touch the thread if the Fates allow. You may do one thing. Choose carefully."`,[
 {t:`Loosen the knot slowly, strand by strand.`,c:'DEX 9 craft',y:[`Patient fingers, slow breath. The silver thread slides free from the gold. It is light and warm in your hand, and you can feel your whole life in it. "Well done," whispers Lachesis.`,'xp+xl +gr_thread flag:gr_thread_got mp+5 hp+5'.replace('xp+xl','xp+l')],n:[`The knot tightens as you pull. Lachesis steadies your hand, gently, and together you work it out. It takes much longer, and you are very tired.`,'xp+l +gr_thread flag:gr_thread_got mp+2 hp-2']},
 {t:`Ask Lachesis to help, since she knows the measure.`,r:'flag:gr_fates_gift|flag:gr_respect',y:[`"Gladly," she says, and her bony fingers slip between the strands. In a few moments, the silver thread is free, shining, straight and yours.`,'xp+l +gr_thread flag:gr_thread_got mp+4']},
 {t:`Cut through the knot with the Swiss army knife.`,r:'item:gr_swiss',y:[`Snick. A thread of silver parts. The three sisters watch, aghast. You feel something very small and very important come loose inside you. The world goes quiet, grey and flat. Your adventure ends here.`,'die']} ]);

S_('gr7_leave','Do Not Look Back','underworld|🌑 🚪',
`Hades himself walks you to the gates. "I have one condition," he says. "Walk out, and do not look back, not once, until you feel the sun. If you do, you will be mine." He glances at Elena. "And any friend who follows you."\nThe long stair climbs up into the dark. Behind you, you can hear footsteps, whispers and, very faintly, someone calling your name.`,[
 {t:`Climb steadily, eyes ahead, counting the steps.`,c:'WIS 9 resist',y:[`One hundred and nine. One hundred and ten. A voice in the dark says "Wait!" and you grit your teeth. At the top, warm air, sunlight and the cry of a gull. You did not look back.`,'xp+xl mp+4 flag:gr_orpheus_rule'.replace('xp+xl','xp+l')],n:[`The voice is very convincing. You do not turn, but you stop, and Elena has to pull you onward.`,'xp+m mp-2']},
 {t:`Hum the lullaby loudly to drown out the voices.`,y:[`Your voice fills the stair, and the whispers fall behind. You walk into the sunshine, hoarse and triumphant.`,'xp+l mp+3']},
 {t:`Hold Elena\'s hand and climb together.`,r:'ally:gr_elena',y:[`"Eyes front," says Elena crisply, and squeezes your hand. You climb as one, a little frightened, entirely together.`,'xp+l mp+4 bond:gr_elena']},
 {t:`Turn and look back, just once, to check that Elena is all right.`,y:[`You turn. Hades\'s eyes meet yours, sad and patient. "I am sorry," he says. The stair vanishes under your feet. Your adventure ends here.`,'die']} ]);

/* =============== CHAPTER 8: THE FORGE =============== */
G.chapter('gr8',{ story:'greek', n:'Chapter 8: The Forge of Hephaestus', sub:'Fire, bronze and a bent wing', ch:4, region:'gr_forge', art:'forge|🔥 🔨', age:30, btn:'Climb the mountain',
  text:`The Underworld has many exits, and Hades, rather grudgingly, tells you the quickest: a vent in the side of Mount Etna, where the smith god of the Greeks keeps his forge. The mountain rumbles, the air shimmers, and from somewhere above comes the steady ring of a hammer on an anvil.\nYou have two broken sandals, one cracked hourglass and a tangled life-thread to turn into a single working piece of magic. If anyone can do it, it is Hephaestus.`,
  beats:()=>G.mix(['gr8_climb','gr8_maidens','gr8_cyclopes','gr8_smith','gr8_question','gr8_craft1','gr8_craft2','gr8_eris','gr8_gift','gr8_hermes'],15,{nocamp:true}) });

S_('gr8_climb','Mount Etna','forge|🌋 🔥',
`The vent opens onto a rough stair of black rock, hot to the touch, climbing into a glow. The air tastes of sulphur and iron. Ash drifts in lazy spirals. Far above you, the mountain breathes, a deep bass note that you feel in your bones.\nA rough sign, in several languages, says: THE SMITH IS WORKING. DO NOT KNOCK.`,[
 {t:`Climb carefully, testing each step.`,c:'DEX 8 climb',y:[`Hot rock, sharp stone, long drops. You pick your way up like a goat and reach the top without a scratch.`,'xp+l mp+3'],n:[`A stone gives way under your hand. Your palm is burned, but you hold on.`,'xp+m hp-2']},
 {t:`Hold the pearl of Poseidon against the heat.`,r:'item:gr_pearl',y:[`A cool, watery glow surrounds you. The heat falls away, and you climb in comfort. The pearl, you realise, is also a splendid air-conditioner.`,'xp+l mp+3']},
 {t:`Pause to catch your breath and drink water.`,y:[`Water, shade, a moment. Elena fans herself with the Greek newspaper she somehow still has.`,'xp+s hp+4 mp+2']},
 {t:`Knock on the door anyway.`,y:[`There is a long silence, and then a roar: "I SAID DO NOT KNOCK!" The door swings open. A blast of heat, and a very large, very annoyed, very sooty man stares at you.`,'xp+m hp-1 mp-1']} ]);

S_('gr8_maidens','The Golden Maidens','forge|🤖 ✨',
`Inside, the forge is a cathedral of heat and glow: rivers of molten bronze, chains of golden links, and a whole cast of golden figures, beautiful, silent, mechanical, doing the work of a hundred hands. They turn their blank, lovely faces toward you. One steps forward, bows and offers a cool cup of water.\n"Welcome," it says in a voice like a tiny bell. "Master is expecting you. Master is very busy."`,[
 {t:`Take the water and thank the maiden.`,y:[`It is cold and tastes faintly of silver. The maiden curtsies, which is more than you expected from a machine.`,'xp+m hp+5 mp+3 flag:gr_kind']},
 {t:`Examine how she moves.`,c:'INT 9 craft',y:[`Gears, pulleys, a hidden spring. And something else you cannot explain, a spark in the chest that no machine of yours could imitate. Mara would weep.`,'xp+l mp+3'],n:[`Too many tiny parts. You marvel without understanding.`,'xp+s mp+1']},
 {t:`Ask Mara what she thinks.`,r:'ally:gr_mara',y:[`Mara runs a hand over the maiden\'s arm, face alight. "I would give ten years of my life," she whispers, "for twenty minutes with the blueprints."`,'xp+l mp+3 bond:gr_mara']},
 {t:`Follow her to the master.`,y:[`The maiden leads you through halls of anvils, steaming vats and rows of half-finished marvels.`,'xp+m mp+1']} ]);

S_('gr8_cyclopes','The Cyclopes at Work','forge|🔨 👁️',
`Three huge, single-eyed smiths hammer a glowing thunderbolt on an anvil as big as a house. The ring of the hammer shakes the floor. They are called Brontes, Steropes and Arges: Thunder, Lightning and Bright. They work in time, like a drumbeat.\nOne of them lifts his enormous eye and looks at you. "Little ones," he says kindly. "Stand back a bit. Sparks."`,[
 {t:`Watch them forge the bolt.`,y:[`The bolt takes shape from white-hot bronze, sparking and singing. It is a very beautiful, very dangerous thing, and the Cyclops handles it as gently as an egg.`,'xp+m mp+3']},
 {t:`Applaud when they finish.`,y:[`The three smiths blink, startled, and then beam. "Nobody ever claps," says Steropes. "Hammer! Sparks! Burns! But never claps."`,'xp+m mp+3 flag:gr_kind']},
 {t:`Ask whether they have a spare thunderbolt.`,c:'CHA 9 persuade',y:[`"Ha!" says Brontes. "That is Zeus\'s. He is very careful about thunderbolts." He pats you on the head, gently, with a finger the size of your arm.`,'xp+l mp+2'],n:[`The Cyclopes exchange a look, and laugh until the cave shakes.`,'xp+s mp+1']},
 {t:`Offer to help carry things.`,c:'STR 9 endure',y:[`You haul a huge bag of charcoal across the forge. The Cyclopes watch, amazed. "A little one!" says Arges. "With a big back."`,'xp+l mp+3 hp-1 flag:gr_kind'],n:[`The bag is far too heavy. A Cyclops carries it for you, with a chuckle.`,'xp+s']} ]);

S_('gr8_smith','The Lame Smith','forge|🔥 ⚒️',
`The master of the forge is a broad, bearded man with huge shoulders, blackened hands and a pronounced limp. He hobbles from anvil to anvil on a pair of golden crutches, muttering. He is brusque, sweaty and entirely uninterested in gods or mortals. Then he sees the sandals in your hands, and everything changes.\n"Those are mine!" says Hephaestus. "I made those! Who bent the wing?"`,[
 {t:`"Eris did, we think. And she cracked the Hourglass too."`,y:[`"Eris." He says the name like a curse. "She snapped my favourite bellows once, to see what would happen. Insufferable." He turns the sandals over in his hands, with great tenderness.`,'xp+l mp+3 flag:gr_knows_eris']},
 {t:`"We need them mended. Can you do it?"`,y:[`"Can I do it?" He glares at you. "I made the armour of Achilles. I made the throne of Hera. I made the first woman, out of clay, and look how she turned out. Of course I can do it."`,'xp+l mp+3']},
 {t:`Compliment his work.`,c:'CHA 8 persuade',y:[`He pauses, caught between suspicion and pleasure. "Hm," he says. "Nobody says that. They only ask for things." He sets down his hammer. "You may stay."`,'xp+l mp+3 flag:gr_respect'],n:[`He grunts, unmoved. "Flattery. Show me you can do something."`,'xp+m mp+1']},
 {t:`Quietly place the sandals on his anvil.`,y:[`He looks at you. At them. At you. "A mortal with manners," he says, wearily. "I suppose I shall have to be polite."`,'xp+m mp+3 flag:gr_respect']} ]);

QS('gr8_question','The Smith\'s Question','forge|🔨 ❓',
`"Before I touch a thing," says Hephaestus, "a question about me. The Romans, who steal everything, gave me a new name. They call me by it still, and the word turns up in a mountain that spits fire. What is the name?"`,
 ['Vulcan','Mars','Janus'],
 [`"Vulcan!" he grunts, pleased. "From which you get 'volcano'. I have been a volcano for centuries. It is not, I must say, the worst job."`,`"Mars," he says, scornfully, "is Ares. He is my wife\'s fancy man. I should know. Try again."`,`"Janus," says Hephaestus, "is a Roman god of doorways, and has two faces. I have one, and it is cross. Try again."`],'xp+l mp+3 flag:gr_smith_ok');

S_('gr8_craft1','Setting the Wings','forge|🪽 🔨',
`Hephaestus lays the two sandals side by side on the anvil. "Four problems," he says, counting on his fingers. "The wings are bent. The straps are torn. The gold thread is snapped. And the whole thing has been hexed, which is the part I like least." He points. "You choose where to start. I will tell you if you are wrong."`,[
 {t:`Straighten the wings first.`,c:'DEX 9 craft',y:[`Tap, tap, tap, with a tiny hammer. The wings straighten, and spread, and begin to quiver with life.`,'xp+l mp+3 flag:gr_wings_fixed'],n:[`The first tap is too hard. A wing cracks. Hephaestus swears quietly and mends it with a touch.`,'xp+m mp-1 flag:gr_wings_fixed']},
 {t:`Re-tie the straps with the silver thread of the Fates.`,r:'item:gr_thread',y:[`The thread slides through the leather like water. When the knot is tied, both sandals hum, deep and low, like a plucked string.`,'xp+l mp+4 flag:gr_wings_fixed']},
 {t:`Ask Mara to rebuild the strap-fastening.`,r:'ally:gr_mara',y:[`Mara and the smith confer over a tiny buckle, heads close, voices low, in a language of tools. It takes ten minutes. It is perfect.`,'xp+l mp+4 flag:gr_wings_fixed bond:gr_mara']},
 {t:`Let Hephaestus do it all, and watch.`,y:[`His great hands move with astonishing delicacy. You learn more in an hour than you have learned in a year.`,'xp+m mp+3 flag:gr_wings_fixed']} ]);

S_('gr8_craft2','The Heat of the Forge','forge|🔥 ⏳',
`"Now," says Hephaestus, "the fire. The sandals must be tempered in the heat of the forge, and sealed with a drop of the sand of time." He points at the cracked hourglass. "That is the dangerous bit. Too little heat, and the wings will tear in their first flight. Too much, and they will burn."\nHe passes you the bellows.`,[
 {t:`Pump the bellows steadily, listening to the fire.`,c:'WIS 8 craft',y:[`In, out. In, out. The coals glow from red to orange to white. "NOW!" says Hephaestus, and the sandals go in. They come out gleaming gold. He claps you on the back.`,'xp+l mp+4 flag:gr_tempered'],n:[`Too hot, then too cool. The sandals scorch slightly, but Hephaestus saves them with a quick dunk. "Practice," he says.`,'xp+m hp-2 flag:gr_tempered']},
 {t:`Use the cracked hourglass to slow the fire\'s timing.`,r:'item:gr_hourglass',y:[`You tilt the hourglass, and the fire slows to a languid crawl. Hephaestus, astonished, plunges the sandals in at the perfect moment. "Clever," he says. "Very clever."`,'xp+xl mp+4 flag:gr_tempered'.replace('xp+xl','xp+l')]},
 {t:`Ask a Cyclops to blow the bellows.`,y:[`Brontes lifts them like a pair of feathers. The fire roars. Hephaestus plunges the sandals in at precisely the right moment.`,'xp+m mp+2 flag:gr_tempered']},
 {t:`Take the spark of the forge to seal the work.`,y:[`Hephaestus presses a single spark into a jar. "Never goes out," he says. "A good thing to have, wherever you go."`,'xp+m +gr_forgefire mp+3 flag:gr_tempered']} ]);

S_('gr8_eris','The Uninvited Guest','forge|🍏 ✨',
`A cold draught blows through the forge, in the middle of volcanic heat. The fires gutter. And in the doorway, wrapped in a gold silk shawl, stands Eris, perfectly poised, perfectly beautiful, wearing a smile like an unsheathed blade.\n"Hephaestus, darling," she says. "I heard you had visitors. I do like visitors. I especially like it when they break things. That is what I do, you know. I break things, and then it is fun."`,[
 {t:`Stand in front of the sandals, shield raised.`,r:'item:gr_mirror',y:[`Eris\'s own reflection hits her in the shield. For a moment she sees herself, glittering and sharp and lonely. Her smile wavers. "Oh," she says, quietly. She lowers her hand.`,'xp+xl mp+4 flag:gr_eris_mirror'.replace('xp+xl','xp+l')]},
 {t:`Say: "You wanted an audience. Come to Olympus and tell them your side."`,c:'CHA 9 persuade',y:[`Eris stops. She looks, for the first time, truly surprised. "An audience," she says. "Everyone always forgets I want one." She tilts her head. "Very well. I shall come. I shall be fascinating."`,'xp+xl mp+4 flag:gr_eris_invited'.replace('xp+xl','xp+l')],n:[`She laughs, flicks a finger and the nearest sandal jumps into her hand. Hephaestus, roaring, snatches it back. A tussle, a burn and a cloud of gold dust. She is gone.`,'xp+m hp-3 flag:gr_eris_invited']},
 {t:`Hand her the golden apple, politely.`,r:'item:gr_apple',y:[`"To the fairest," you say, and bow. Eris looks at the apple, and at you, and at the apple. "Oh dear," she says. "That is rather clever. Now I have to either keep it, or give it away. Either way, someone is going to be annoyed." She laughs, delighted, and vanishes.`,'-gr_apple xp+l mp+3 flag:gr_eris_invited']},
 {t:`Shout for the golden maidens.`,y:[`A dozen of them swarm forward, silent as moths. Eris, with a hiss, vanishes in a swirl of gold. "Coward," says Hephaestus, with a wolfish grin.`,'xp+m mp+2']} ]);

S_('gr8_gift','The Sandals of Hermes','forge|🪽 ✨',
`Hephaestus holds the finished sandals up to the light. They shine, gold and white, their wings fluttering gently, each strap bound in a silver thread that glimmers like a life. They hum, deep and glad, and strain to leave his hands.\n"Done," he says. "The best work I have done in a hundred years." He passes them to you. "Do not lose them. They are not just shoes. They are the road between times."`,[
 {t:`Accept them with both hands and thank him.`,y:[`They are weightless. Wings flutter against your fingers like a pulse. Hephaestus nods, gruffly, wiping his hands on his apron. "Your thread," he says, "is in those straps. They will take you back."`,'xp+xl -gr_sandal_l -gr_sandal_r -gr_thread +gr_sandals flag:gr_forge_done mp+5'.replace('xp+xl','xp+l')]},
 {t:`Ask whether he will take payment.`,y:[`"Payment!" he roars. "Nobody pays me. They only complain." He softens. "But if you wish: tell Aphrodite I said she may come and visit sometime. She does not, but it would be nice."`,'xp+l -gr_sandal_l -gr_sandal_r -gr_thread +gr_sandals flag:gr_forge_done mp+4']},
 {t:`Ask Mara to inspect the work with her professional eye.`,r:'ally:gr_mara',y:[`Mara turns the sandals over carefully. "Better than any airframe I ever flew," she says. "I would trust my life to these." Hephaestus almost smiles.`,'xp+l -gr_sandal_l -gr_sandal_r -gr_thread +gr_sandals flag:gr_forge_done mp+4 bond:gr_mara']} ]);

S_('gr8_hermes','The Messenger Returns','forge|🪽 ☁️',
`A flash of silver, a whisper of wings, and Hermes stands in the middle of the forge, barefoot again, grinning, delighted, flickering at the edges. "I felt them," he says. "I felt them mend, all the way from Olympus. Give them here, quick."\nYou pass him the sandals. He slips them on, and a rush of wind blows through the forge. His outline firms and brightens. He leaps, and hangs a foot above the floor, laughing out loud.`,[
 {t:`Watch him fly around the cave.`,y:[`He zips between the anvils, loops round the Cyclopes, and returns with a bow. "I have not felt like this in a hundred years," he says.`,'xp+m mp+5']},
 {t:`Ask whether the passengers are safe.`,y:[`"Safe as eggs," he says. "The gold thread still holds them. But it is thin. Quick, mortals. To Olympus."`,'xp+l mp+3 flag:gr_hermes_back']},
 {t:`Ask him for a lift to Olympus.`,y:[`"It would be an honour," says Hermes, and takes you by the hand. The forge falls away. A wind lifts you through the volcano, up into the open sky, past cloud and eagle, to the top of the world.`,'xp+l mp+5 flag:gr_hermes_back']},
 {t:`Thank Hephaestus once more.`,y:[`The smith waves a huge, sooty hand and goes back to his anvil. The ring of his hammer follows you into the sky.`,'xp+m mp+3 flag:gr_respect']} ]);

/* =============== CHAPTER 9: OLYMPUS =============== */
G.chapter('gr9',{ story:'greek', n:'Chapter 9: Olympus', sub:'Zeus, Eris and the hour that matters', ch:4, region:'gr_olympus', art:'olympus|⚡ 🏛️', age:30, btn:'Ascend',
  text:`Mount Olympus is real: the highest mountain in Greece. But the Olympus of the gods is above it, hidden in cloud, a palace of gold and marble where the twelve Olympians feast and quarrel. Few mortals have set foot here, and fewer have left again.\nHermes sets you gently on a floor of white cloud. Ahead, a pair of gates, taller than a mountain, swing slowly open.`,
  beats:()=>G.mix(['gr9_gates','gr9_hall','gr9_zeus','gr9_trial','gr9_verdict','gr9_athena'],8,{nocamp:true}).concat(['!gate','gr9_mend','gr9_when','gr9_set']) });

S_('gr9_gates','The Gates of Olympus','olympus|🚪 ☁️',
`The gates are guarded by the Horai, the three Hours, who open and close the sky. They are tall, serene women in gold-and-white gowns, and they stand perfectly still. As you approach, the first says: "Mortals." The second: "Alive." The third: "In the wrong time."\n"The gates will open," says the first, "if you can tell us what you bring."`,[
 {t:`"We bring the Winged Sandals of Hermes, mended."`,y:[`The Hours exchange a glance. "That," says the second, "is a good thing to bring." The gates swing open, wide and slow.`,'xp+l mp+3']},
 {t:`"We bring a cracked hourglass and a very long story."`,r:'item:gr_hourglass',y:[`"The Hourglass of Chronos," whispers the third. "Come in. Quickly. Time is leaking."`,'xp+l mp+3']},
 {t:`"We bring respect, and a request."`,c:'CHA 9 persuade',y:[`"That," says the first, with something like approval, "is rarer than gold." The gates open.`,'xp+l mp+3 flag:gr_respect'],n:[`"Words," says the second. But the gates open, a crack, and you slip through.`,'xp+m mp+1']},
 {t:`Hold the olive branch up high.`,r:'item:gr_olive',y:[`A murmur of surprise runs through the Hours. "Athena\'s sign," says the first. "Welcome."`,'xp+l mp+3']} ]);

S_('gr9_hall','The Hall of the Twelve','olympus|👑 🏛️',
`The great hall of Olympus is dazzling. Twelve thrones of gold stand in a semicircle: Zeus and Hera at the centre, Poseidon looking sulky, Athena stern and watchful, Apollo and Artemis side by side, Ares, Aphrodite, Demeter, Dionysus (a little drunk), Hephaestus (a little sooty), and Hermes, still floating a bit.\nThey stop talking. Twelve pairs of divine eyes turn on you.`,[
 {t:`Bow low and wait to be addressed.`,y:[`The silence stretches. Then Zeus says, "Rise, mortal." You rise. It is the longest few seconds of your life.`,'xp+m mp+3 flag:gr_respect']},
 {t:`Say a polite hello to the gods you have met.`,y:[`Poseidon harrumphs. Athena nods. Apollo winks. Hephaestus waves a sooty hand. Hermes does a backflip. You feel, for the first time in weeks, like a guest.`,'xp+l mp+4 flag:gr_respect']},
 {t:`Introduce Elena to the gods.`,r:'ally:gr_elena',y:[`"Madam Rossi," booms Zeus, "taught my children\'s grandchildren how to read." (He is exaggerating.) Elena curtsies, scarlet, and pronounces everyone\'s name perfectly.`,'xp+l mp+4 bond:gr_elena']},
 {t:`Stay quiet and take it all in.`,y:[`Gold, marble, clouds and eyes. You hold on to your sanity with both hands.`,'xp+s mp+2']} ]);

S_('gr9_zeus','Zeus Hears Your Case','olympus|⚡ 👑',
`Zeus is vast, bearded and bright, with a thunderbolt resting across his knees like a baton. He has been told, at length, by Hermes, what has been going on. He does not seem altogether pleased.\n"We are aware of the damage," he says, in a voice like distant thunder. "We are less aware of why a mortal has spent the better part of a month dragging our matters up and down Greece. Speak. Briefly."`,[
 {t:`Tell him the whole story, plainly.`,y:[`You tell him about Rome, the plane, the gold light, the Oracle, the sea, the island, the underworld and the forge. When you finish, Zeus is quiet for a long time. "A very full month," he says. The thunderbolt crackles, once.`,'xp+l mp+3 flag:gr_zeus_heard flag:gr_respect']},
 {t:`Ask him to hear Eris before deciding what to do.`,c:'WIS 9 persuade',y:[`"Hear her?" says Zeus, rumbling. "The one who broke the hourglass?" But Athena leans over, and murmurs. He sighs. "Very well. A trial."`,'xp+l mp+3 flag:gr_zeus_heard'],n:[`"No," says Zeus. But Hera lays a hand on his arm, and he subsides, grumbling. "A trial, then."`,'xp+m flag:gr_zeus_heard']},
 {t:`Say that the frozen passengers deserve to go home.`,y:[`The thunder softens. "The frozen ones," says Zeus. "Mortals in a trap not of their making. Hm. That, at least, I understand."`,'xp+l mp+4 flag:gr_zeus_heard flag:gr_kind']},
 {t:`Tell Zeus he is to blame for letting Eris run loose.`,y:[`There is a silence in which every cloud in the sky holds its breath. Zeus rises, unfolding like a storm. "BLAME?" he says. A white flash, and a very long time with no sound. Your adventure ends here.`,'die flag:gr_hubris']} ]);

S_('gr9_trial','The Trial of Eris','olympus|⚖️ 🍏',
`Eris is brought in, escorted by two stern Hours, still smiling, still graceful, wrapped in gold silk. She takes a seat in the centre of the hall as if it were a stage. Twelve gods stare at her. She waves.\n"Well!" she says. "How marvellous. Do I get to speak? I do hope there is wine."`,[
 {t:`Present the golden apple as evidence.`,r:'item:gr_apple',y:[`You set the apple on the marble floor. "To the fairest," it says, in tiny letters. Aphrodite, Hera and Athena all look at it, and then at each other, and then, very carefully, at the ceiling. The point is made.`,'-gr_apple xp+l mp+3 flag:gr_eris_judged']},
 {t:`Present the cracked hourglass.`,r:'item:gr_hourglass',y:[`The silver sand leaks upward, in a thin glittering thread. The hall goes silent. Even Eris stops smiling for a moment.`,'xp+l mp+3 flag:gr_eris_judged']},
 {t:`Ask Eris why she did it.`,c:'WIS 9 persuade',y:[`"Because they forgot me," says Eris, and for the first time she is not smiling at all. "A wedding with every god in it, and no invitation for me. I only wanted a seat." The hall is very quiet. Hera looks away.`,'xp+xl mp+4 flag:gr_eris_judged flag:gr_eris_heard'.replace('xp+xl','xp+l')],n:[`"Because it was funny!" she says, and giggles. But her eyes, you notice, are bright.`,'xp+m flag:gr_eris_judged']},
 {t:`Describe what happened to the people in the plane.`,y:[`You describe the frozen passengers, the child with the toy, the old couple holding hands. Even Ares looks uncomfortable. Eris examines her nails, but her smile has thinned.`,'xp+l mp+3 flag:gr_eris_judged flag:gr_kind']} ]);

S_('gr9_verdict','The Verdict','olympus|⚖️ ⚡',
`Zeus rises. The hall falls silent. "Eris," he says. "You have broken time. You have stolen from my messenger, tormented my brother\'s sea and snared mortals in a trap. What do you say?"\nEris opens her mouth. For once, nothing clever comes out.\n"The mortal who walked all of Greece to mend what you broke," says Zeus, turning, "may speak. What should be done?"`,[
 {t:`"Give her a seat at the feast. A real seat, and a real invitation."`,y:[`A gasp ripples round the hall. Hera\'s mouth tightens, and then, slowly, it loosens. Eris stares at you. "You can\'t mean it," she says, in a very small voice. "I do," you say. Zeus strokes his beard. "A curious sentence," he says. "But a just one."`,'xp+xl mp+6 flag:gr_eris_pardoned flag:gr_kind'.replace('xp+xl','xp+l')]},
 {t:`"Let her mend what she broke, under supervision."`,y:[`"A craftsman\'s verdict," murmurs Hephaestus, approvingly. Zeus nods. "Done. She will be sent to the forge, to work off her debt." Eris gives a theatrical shudder, and, secretly, a very small smile.`,'xp+l mp+4 flag:gr_eris_pardoned']},
 {t:`"Banish her from Olympus."`,y:[`"A strict verdict," says Zeus, and nods. "Mortals prefer order." Eris stands, gathers her silks, glares at you with a very long, very sharp look, and sweeps from the hall. The air feels thinner, and quieter.`,'xp+m mp+1 flag:gr_eris_banished']},
 {t:`"I have no right to judge. That is for the gods."`,y:[`Zeus looks at you with approval. "Rare, in a mortal," he says. He passes sentence himself: a thousand years of service, mending clocks. Eris groans.`,'xp+l mp+3 flag:gr_eris_pardoned flag:gr_respect']} ]);

S_('gr9_athena','Athena Remembers','olympus|🦉 🕊️',
`As the hall breaks into murmurs, Athena catches your sleeve. "You have been to the island of the Gorgon," she says, very quietly. "You saw her."\nHer grey eyes are not cold. They are very tired.`,[
 {t:`Tell her what Medusa said: that she is not angry.`,r:'flag:gr_medusa_heard',y:[`Athena closes her eyes. For a very long time she does not speak. "I did not know," she says at last. "I thought she hated me." A tear, an actual tear, runs down her cheek. "I will go to her. I will do what I should have done a thousand years ago."`,'xp+xl mp+6 flag:gr_athena_forgave flag:gr_kind'.replace('xp+xl','xp+l')]},
 {t:`Hand her the olive branch, and tell her about Medusa.`,r:'item:gr_olive',y:[`She takes it, and holds it for a long time. "I had forgotten giving this," she says softly. "I shall carry it to her myself." The silver leaves ripple, brighter than before.`,'-gr_olive xp+l mp+5 flag:gr_athena_forgave flag:gr_kind']},
 {t:`Say nothing, but bow.`,y:[`She inclines her head. "A wise silence," she says. "I shall think on it."`,'xp+m mp+3']},
 {t:`Thank her for the shield and the feather.`,y:[`"Wear them well," says Athena. "And keep the questions. They are the best part of you."`,'xp+m mp+3 flag:gr_respect']} ]);

S_('gr9_mend','Mending Time','olympus|⏳ ✨',
`Zeus himself holds the cracked Hourglass, and the Fates, summoned, stand beside him. Hephaestus presses the Spark of the Forge into the crack, and Hermes, shining on his mended sandals, spins it three times in the air. The silver sand stops falling upward. It trembles, turns, and drifts slowly down.\n"Time is mended," says Atropos. "Almost." She glances at you. "A single thread is left."\nThe sandals on Hermes\'s feet glow. He bends, takes them off, and holds them out to you.`,[
 {t:`Accept the Winged Sandals of Hermes.`,y:[`They are warm, light and humming, with the silver thread of your own life wound through the straps. "They will take you to any moment you can name," says Hermes. "Once. Choose carefully."`,'xp+xl mp+6 flag:gr_sandals_given'.replace('xp+xl','xp+l')]},
 {t:`Ask Hermes to come with you.`,y:[`"Wish I could," says Hermes, with real regret. "The road between times is yours alone. But I will be watching."`,'xp+l mp+4 flag:gr_sandals_given']},
 {t:`Ask whether the passengers will be remembered.`,y:[`"They will be exactly as they would have been," says Lachesis, "had the crash never happened. No memory of this. Only a warm, odd feeling, and, perhaps, a dream about owls."`,'xp+l mp+3 flag:gr_sandals_given']} ]);

S_('gr9_when','To When?','olympus|⌚ 🧭',
`You stand in the middle of the hall, the sandals in your hands. "Name the moment," says Hermes. "Not the place: the moment. You must arrive when you can do some good. If you choose wrongly, the sandals will not forgive you."\nYour mind races. Takeoff? Landing? The golden light? The crash? Somewhere, a stopped clock ticks.`,[
 {t:`Look at your wristwatch.`,hide:true,r:'item:gr_watch&!sv:h1',y:[`The watch is still stopped. 16:47. That was the moment of the crash itself, the last moment. Not when you want to go back to.`,'xp+s mp+1 svflag:h1 stayc']},
 {t:`Ask Elena what she remembers.`,hide:true,r:'ally:gr_elena&!sv:h2',y:[`Elena frowns, and counts on her fingers. "You looked at your watch in the aisle. It said 16:40. And a minute later, the light began." She holds a hand to her temple. "One minute before. That is when it could still be stopped."`,'xp+l mp+2 stayc']},
 {t:`Read the boarding pass.`,hide:true,r:'item:gr_ticket&!sv:h3',y:[`Flight AQ 417, Seat 23A, departing 14:20. The take-off time, not the crash time. And not the moment you saw the light.`,'xp+s mp+1 svflag:h3 stayc']},
 {t:`Think it through on your own.`,y:[`The Oracle told you: remember what the clock says. And you remember the plane: the watch at 16:40, the light at 16:41, the stopped clock at 16:47. You are almost sure.`,'xp+m mp+2']} ]);

S_('gr9_set','Set the Sandals','olympus|🪽 🕰️',
`The sandals hover in front of you, their wings beating softly, waiting for a single word.\nThe whole hall watches. Elena puts a hand on your shoulder. Hermes crosses his arms and, for once, is perfectly still.\n"Say it clearly," he says.`,[
 {t:`"16:40, in seat 23A, one minute before the golden light."`,y:[`The sandals flare gold. The wings beat, once, twice, three times. The hall dissolves, the gods dissolve and the last thing you see is Athena\'s grey eyes, and Elena\'s smile.`,'xp+xl >gr_end_home'.replace('xp+xl','xp+l')]},
 {t:`"14:20: take-off from Rome."`,y:[`The sandals flare. The wings beat. The world folds like paper.`,'xp+m >gr_end_early']},
 {t:`"16:47: the moment of the crash."`,y:[`The sandals flare, doubtfully. The wings beat. The world folds like paper, and you arrive inside the roar, the light and the falling sky.`,'xp+s >gr_end_crash']},
 {t:`"No. I am not going yet. I will stay."`,hide:true,r:'flag:gr_athena_forgave|flag:gr_eris_pardoned|flag:gr_medusa_freed',y:[`The sandals sigh, and settle. Hermes grins. "Well!" he says. "A mortal who stays. Who would have thought it." The hall bursts into applause.`,'xp+m >gr_end_olympian']} ]);

/* =============== ENDINGS =============== */
function epi(S){
  const L = []; const al = id => S.allies.includes(id); const fl = f => !!S.flags[f];
  if (fl('gr_athena_forgave')) L.push('Athena went to Gorgon Island herself, carrying an olive branch. Some sailors say that Medusa now keeps a quiet garden on the shore, and that the statues are slowly, softly, waking.');
  else if (fl('gr_medusa_freed')) L.push('Medusa\'s snakes have grown quiet, and she has begun to learn to read people\'s faces again, one at a time.');
  else if (fl('gr_medusa_stone')) L.push('You sometimes think of Medusa, and wonder whether there was another way.');
  if (fl('gr_eris_pardoned')) L.push('Eris is said to have a seat at every feast now, and has been, according to most accounts, almost well-behaved.');
  else if (fl('gr_eris_banished')) L.push('Eris, banished, still sends the occasional golden apple. Everyone has learned to leave it alone.');
  if (fl('gr_poseidon_boon')) L.push('A pearl, now and then, turns up at the edge of the sea, with your name on it.');
  const names = ['gr_elena','gr_mara','gr_niko','gr_glaux'].filter(al).map(a=>G.allies[a].n.split(' ')[0]);
  if (names.length) L.push(names.join(', ') + ' will be part of your story as long as you tell it.');
  L.push('You made ' + S.choices + ' choices on this journey and reached level ' + S.lvl + '.');
  return L.join(' ');
}
G.grEpi = epi;
const END = (id, art, title, text) => G.sc(id, art, S => `${text}\n${epi(S)}`, [{t:'Return to the story menu', act:'new'}], { end:true, title });
END('gr_end_home','cabin|🌅 ✈️','Ending: Seat 23A',
`The world rushes back, bright, loud and ordinary. You are sitting in seat 23A, belt fastened, the engines humming. Elena is in 23B, grumbling gently about the chicken. The watch on your wrist says 16:40. Outside the window, the Mediterranean is a smooth, bright blue.\nThen, one minute later, a flicker in the cabin lights, a single golden thread slides along the ceiling and nothing happens. The sea stays calm. The engines hum. Somewhere, a faint woman\'s laugh fades like smoke. The plane flies on.\nHours later, over Asia, a child three rows ahead wakes from a dream about owls. You find a grey feather in your jacket pocket that was not there before. Elena looks at it, and then at you. "Well," she says. "That was a good holiday." You will never be sure what is real, but you can read Greek now, and nobody ever sees how you learned it.`);
END('gr_end_early','town|🛫 🏛️','Ending: A Different Flight',
`You arrive in the terminal at Fiumicino, at 14:20, with a boarding pass in your hand and an enormous feeling that you have forgotten something important. The departure board says AQ 417 is boarding. Your legs, on their own, march to the desk. "I am sorry," you say to the agent. "I am not going to take this flight."\nYou take another one, the next day. On the news that evening, AQ 417 lands safely in Singapore: the golden light is a strange, harmless glow at the edge of a thundercloud. You hear a quiet laugh in the crowd, and see, far away, a woman in a gold shawl, smiling and waving. She seems, if anything, a little disappointed.\nYou will never know exactly what saved the plane, but you will always carry a quiet respect for every owl you see.`);
END('gr_end_crash','wreck|💥 🌊','Ending: The Same Sea',
`The sandals flare, and you arrive inside the roar: the falling sky, the shouting, the gold light. For a moment, you are in seat 23A, clutching Elena\'s hand. Then the world goes white.\nYou wake on a beach, with the sound of burning, the wreck of a plane tilted in the surf and a grey owl on a rock, watching you with great sorrow. You have come back to the beginning.\nSomewhere on Olympus, Hermes sighs. "Next time," he murmurs, "check the clock." Your journey ends here, in the same place it began. But now you know exactly where you went wrong.`);
END('gr_end_olympian','olympus|👑 🏛️','Ending: Guest of the Gods',
`You do not go home. Not yet. Or perhaps ever. The gods, who have forgotten what it is like to be surprised, take you in. Athena teaches you the strategy of owls. Hephaestus lets you work the bellows. Hermes shows you every road in the sky.\nThe passengers on Flight AQ 417 sleep in their golden light until Hermes gently, in the end, takes them all home, one by one. They wake in their seats, a little confused, and never know how close it came.\nYou become a legend: the mortal who walked the Greek world, and returned the Winged Sandals. In later years, when historians ask where the story came from, a grey owl on a column always, quite deliberately, looks the other way.`);
END('gr_end_apple','village|🍏 🗿','Ending: The Fairest',
`You are the fairest. You are certain of it. You have a hundred excellent arguments, and the world seems full of people who disagree with you. Sooner or later you are standing in the middle of a field, lecturing a statue. It does not argue back, and somehow that makes it worse.\nEris, watching from a cloud, claps once. "Perfect," she says. "No one has ever fallen for it quite so gracefully."`);
})();
