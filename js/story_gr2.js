/* THE THREAD OF THE MOIRAI — Chapters 4-6: Delphi, Poseidon's Sea, Gorgon Island */
(function(){
const G = globalThis.G, { S_, QS } = G.grh;

/* =============== CHAPTER 4: DELPHI =============== */
G.chapter('gr4',{ story:'greek', n:'Chapter 4: The Oracle at Delphi', sub:'The navel of the world', ch:2, region:'gr_delphi', art:'oracle|🔮 ⛰️', age:30, btn:'Climb the mountain',
  text:`Delphi clings to the side of Mount Parnassus, two days\' walk from Athens: a sacred town of treasuries, temples and winding stairs, with a view that drops away into a green valley. Here, the Greeks believed, Zeus released two eagles from opposite ends of the world, and they met at this spot. It is the centre of everything.\nHere, Apollo speaks through a priestess called the Pythia, and the answers are never simple.`,
  beats:()=>G.mix(['gr4_road','gr4_arrive','gr4_spring','gr4_temple','gr4_pythia','gr4_apollo','gr4_prophecy','gr4_boon','gr4_plan'],15,{nocamp:true}) });

S_('gr4_road','The Mountain Pass','oracle|⛰️ 🐐',
`The road to Delphi climbs through a mountain pass, thick with pines and loud with cicadas. Glaux rides on your shoulder, giving commentary. Niko walks ahead, whistling to his goats. Late in the afternoon, you reach a fork: a narrow shortcut over the ridge, or the long, winding mule road.`,[
 {t:`Take the long, safe mule road.`,y:[`It winds, but it is wide, shaded and easy. You arrive tired but whole, and you meet a friendly muleteer who shares his water.`,'xp+m mp+2 hp+2']},
 {t:`Take the shortcut over the ridge.`,c:'DEX 9 climb',y:[`Loose rock, steep drops and a glorious view. You skid, you scramble and you arrive before everyone else.`,'xp+l mp+3'],n:[`A stone gives way, and you slide, scraping your hands, before catching a root. You arrive late and sore.`,'xp+m hp-2']},
 {t:`Ask Glaux which is better.`,y:[`"The mule road," says Glaux at once. "I do not do ridges." He tucks his head under his wing.`,'xp+m mp+2 bond:gr_glaux']},
 {t:`Let Niko lead the way.`,r:'ally:gr_niko',y:[`He takes a goat track that is somehow both short and safe. "Goats know," he says smugly.`,'xp+m mp+3 bond:gr_niko']} ]);

S_('gr4_arrive','Delphi at Dusk','oracle|🏛️ 🌇',
`Delphi appears around a bend like a stone dream: terraces, treasuries, columns glowing pink in the sunset. Pilgrims in white robes climb the Sacred Way with offerings of honey, wine and little wooden figures. Above, an enormous temple gleams. Inscribed on its wall are three phrases in Greek, for all to read.\nA priest in a white robe stops you. "Strangers must be purified before they approach the temple."`,[
 {t:`Follow him to the spring.`,y:[`He leads you up a stone stair to a cold, bright stream. "The Castalian Spring," he says. "Wash your hands, your face and your thoughts."`,'xp+m mp+2 flag:gr_respect']},
 {t:`Read the inscriptions.`,c:'INT 8 lore',y:[`"Know thyself." "Nothing in excess." "Make a pledge, and trouble is near." Elena whispers, "The first two, you will hear about for the rest of your life."`,'xp+m mp+3 flag:gr_read_delphi'],n:[`The letters are old-fashioned, but you read "Know thyself" and smile.`,'xp+s mp+1']},
 {t:`Ask what the Oracle costs.`,y:[`"A pledge," says the priest. "An offering, and a sincere question. A cake, a goat, a pound of silver, whatever you can honestly give."`,'xp+m mp+1']} ]);

S_('gr4_spring','The Castalian Spring','oracle|💧 🌿',
`The spring runs ice-cold between two huge cliffs, whose red walls shine like embers in the dusk. Pilgrims wash in silence. A priestess hands you a cloth and says, "Clean hands, clean questions, clean heart."\nYou may also leave an offering at the shrine of Apollo before you go up to the Pythia.`,[
 {t:`Wash your hands and face carefully.`,y:[`Cold, clear, shocking. A weight you did not know you were carrying seems to lift away with the water.`,'xp+m mp+4 hp+2 flag:gr_respect']},
 {t:`Offer a honey cake.`,r:'item:gr_honey',y:[`"A fine offering," says the priestess. "Apollo loves sweetness." She places it on the altar. The air seems warmer.`,'-gr_honey xp+l mp+3 flag:gr_offering']},
 {t:`Offer silver coins (5 drachmae).`,r:'gold:5',y:[`Five silver owls into the bowl. The priestess nods, unsmiling. "Honest."`,'gold-5 xp+m mp+3 flag:gr_offering']},
 {t:`Offer a figs and a bit of bread.`,r:'item:gr_figs|item:gr_bread',y:[`A simple offering, given sincerely. The priestess smiles, which, from her, is a great honour.`,'xp+m mp+3 flag:gr_offering']},
 {t:`Make a small promise to Apollo instead.`,y:[`You promise to be honest in what you ask. A quiet breeze stirs the laurels. You hope it counts.`,'xp+m mp+2 flag:gr_offering']} ]);

QS('gr4_temple','The Temple of Apollo','oracle|🏛️ 🔆',
`At the door of the great temple, a young priest bars the way. "Three sayings are carved here," he says. "I shall ask about one. Which of these words greets every visitor to Delphi, and challenges them to look inward?"`,
 ['"Know thyself"','"Carpe diem"','"Veni, vidi, vici"'],
 [`"Correct," says the priest. "It has been Delphi\'s motto for centuries. Enter, and be honest."`,`"A Roman phrase," says the priest, puzzled, "for something you will hear in several hundred years. Try again."`,`"Julius Caesar\'s words," says the priest, politely, "but not for several centuries. Try again."`],'xp+l mp+3 flag:gr_delphi_ok');

S_('gr4_pythia','The Pythia','oracle|🔮 ☁️',
`Deep in the temple, in a dim chamber lit by a single lamp, sits a woman on a golden tripod above a crack in the rock. A sweet, strange mist rises from the stone. The Pythia is old, thin and extraordinarily still, with eyes the colour of milk. When she speaks, her voice seems to come from two places at once.\n"Ask," says the voice. "But beware: Apollo answers truly, not clearly."`,[
 {t:`"What broke time, and brought us here?"`,y:[`The mist swirls. "Strife," whispers the Pythia, "with an apple in her hand. Strife has cracked the Hourglass of Chronos, and the road of Hermes lies lame. The sands of time leak upward."`,'xp+l mp+2 flag:gr_oracle flag:gr_knows_eris']},
 {t:`"How can we mend it?"`,y:[`"Three things," she murmurs, "and a thread. A sandal in the sea. A sandal in a gaze of stone. A glass held by the lord of the grey. And a thread you cannot cut."`,'xp+l mp+2 flag:gr_oracle']},
 {t:`"Will we get home?"`,y:[`"You will," says the voice, "if you remember what the clock says." A pause. "And if you can tell the hour from the moment."`,'xp+l mp+2 flag:gr_oracle flag:gr_knows_time']},
 {t:`Ask for nothing and bow.`,y:[`The Pythia\'s head tilts. "Wiser than most," she murmurs. "Most ask for riches. A little gift, then." A breath of laurel-scented air wraps around you.`,'xp+m mp+3 flag:gr_oracle flag:gr_respect']} ]);

QS('gr4_apollo','Apollo\'s Question','oracle|🎶 ☀️',
`A shimmer, and a young man in golden light stands by the tripod, tall, impossibly handsome, with a lyre under one arm and a faint, amused smile. "I am Apollo," he says. "God of prophecy, music, medicine and the sun. I do not have long. A question: the tale of a musician who charmed Hades himself, and nearly won his wife back from death, but looked back too soon. Who was he?"`,
 ['Orpheus','Perseus','Theseus'],
 [`"Orpheus," says Apollo, softly. "My own son, they say. A sad story, and a beautiful one. Remember it, when the time comes. Never look back."`,`"No," says Apollo. "Perseus fought a gorgon. This one played a lyre."`,`"No. Theseus walked a labyrinth. This one played a lyre."`],'xp+l mp+3 flag:gr_orpheus');

S_('gr4_prophecy','What Eris Did','oracle|📜 🍏',
`Apollo plucks a single string. The room fills with images. A golden woman, laughing, dances through a banquet of gods, throwing an apple. A hall of grey sand, with an hourglass the size of a house, cracking down the middle. A pair of winged sandals, torn apart, thrown to different corners of the world.\n"Eris," he says. "Furious at not being invited to a wedding, long ago. She has been waiting for an excuse. She cracked the Hourglass of Chronos, and split Hermes\'s sandals: one lies in the sea, with the earth-shaker. One lies in the gaze of the Gorgon. The hourglass lies in the realm of Hades. And your own thread, mortal, has been tangled in the loom of the Fates."`,[
 {t:`"Why is she doing this?"`,y:[`"Because chaos is her art," says Apollo, "and because the gods who forgot her need reminding. She does not want to rule. She wants an audience."`,'xp+m mp+2 flag:gr_knows_eris']},
 {t:`"Where do we start?"`,y:[`"The sea," says Apollo. "Poseidon rules it, and he is not in a good mood. Bring good manners."`,'xp+m mp+2 flag:gr_oracle']},
 {t:`"Will the passengers be safe?"`,y:[`"As long as the gold light holds them," says Apollo. "But every day you take, it thins. Be quick, but do not be careless."`,'xp+l mp+2 flag:gr_oracle']},
 {t:`Write it all down.`,r:'item:gr_notebook|item:gr_pen',y:[`Sea. Gorgon. Underworld. Forge. Olympus. A thread. A time. The page is neat, for the first time in your life.`,'xp+m mp+2 flag:gr_oracle']} ]);

S_('gr4_boon','Apollo\'s Gift','oracle|🌱 🎵',
`Before he vanishes, Apollo plucks a few leaves from a laurel growing by the tripod. He weaves them into a small wreath. "For a traveller who does not boast," he says. "Laurel is a plant of prophecy and victory. It will help you when you have to look straight at the truth."\nHe sets it gently on your head. It is light, cool and faintly musical.`,[
 {t:`Bow and thank him.`,y:[`Apollo laughs, kindly. "Manners again! The old gods will adore you. I hope the others are not too hard on you." He fades into a golden shimmer.`,'xp+l +gr_laurel flag:gr_apollo_boon mp+4']},
 {t:`Ask whether he could play a tune for Elena.`,r:'ally:gr_elena',y:[`Apollo raises an eyebrow, then laughs, and plays three notes on the lyre. Elena puts her hand to her chest and weeps without a sound. "A lifetime," she whispers. "A lifetime of reading about it."`,'xp+l +gr_laurel flag:gr_apollo_boon mp+4 bond:gr_elena']},
 {t:`Ask for the lyre.`,y:[`"Ha!" says Apollo. "No. But I admire the nerve." The laurel wreath, a consolation prize, lands on your head anyway.`,'xp+m +gr_laurel flag:gr_apollo_boon mp+2']} ]);

S_('gr4_plan','Down to the Sea','oracle|⛵ 🗺️',
`The road to the port of Itea runs south through olive groves and down to the Gulf of Corinth. Elena marks the route on a scrap of papyrus, Niko packs bread, and Glaux scouts ahead from the air. You have a plan: sea, then Gorgon, then Underworld, then forge, then Olympus. It is a very long list.\n"One thing at a time," says Elena. "That is how you eat an elephant, or save the world."`,[
 {t:`Stock up on supplies at Delphi\'s market (6 drachmae).`,r:'gold:6',y:[`Bread, figs, olive oil and a light cloak. A bag of useful things.`,'gold-6 +gr_bread +gr_figs +gr_water xp+s']},
 {t:`Rest for the night before setting out.`,y:[`A small inn, a hard bed, a clean sheet. You sleep soundly.`,'rest xp+s mp+3']},
 {t:`Practise what you will say to Poseidon.`,y:[`"Good morning, Lord of the Sea." "Greetings, Earth-Shaker." Elena corrects your accent. By the end, you can nearly do it without wincing.`,'xp+m mp+3 bond:gr_elena']},
 {t:`Set off for the sea at once.`,y:[`The road drops toward the water, and the smell of salt grows with every mile.`,'xp+m mp+2']} ]);

/* =============== CHAPTER 5: POSEIDON'S SEA =============== */
G.chapter('gr5',{ story:'greek', n:'Chapter 5: Poseidon\'s Sea', sub:'The Earth-Shaker and a lost sandal', ch:2, region:'gr_sea', art:'sea|🌊 ⛵', age:30, btn:'Set sail',
  text:`The Aegean is a bright blue floor scattered with islands. Greek sailors hug the coast, make offerings and swear by Poseidon, for the sea is a moody neighbour. A good wind can carry a ship to Troy in days. A bad one can strand it for years: ask Odysseus.\nThe left winged sandal of Hermes lies somewhere in Poseidon\'s kingdom. To find it, you will have to meet the god himself.`,
  beats:()=>G.mix(['gr5_port','gr5_captain','gr5_voyage','gr5_sirens','gr5_storm','gr5_hall','gr5_poseidon','gr5_question','gr5_sandal','gr5_return'],15,{nocamp:true}) });

S_('gr5_port','The Port of Itea','pier|⚓ 🐟',
`The port is a clutter of fishing boats, nets and gulls. A ship with a painted eye on its bow is loading barley. Its captain, a barrel-chested man named Nikias, is shouting at a boy about knots. When he sees you, he squints. "Sailors? Passengers? Trouble?"`,[
 {t:`"Passengers. We need to reach the open sea."`,c:'CHA 8 persuade',y:[`"Open sea!" He laughs. "Nobody wants open sea. But a drachma is a drachma." He names a price, and you haggle him down.`,'xp+m mp+2 flag:gr_ship'],n:[`He names a price, and sticks to it. You pay, grumbling.`,'gold-4 xp+s flag:gr_ship']},
 {t:`Offer to work your passage.`,c:'STR 8 endure',y:[`You haul ropes and scrub decks. By the end, you have blisters and a free place on the ship. The captain says, grudgingly: "Not bad."`,'xp+m hp-1 mp+2 flag:gr_ship flag:gr_kind'],n:[`You tangle the ropes and fall over a barrel. The captain sighs and takes you on anyway.`,'xp+s hp-1 flag:gr_ship']},
 {t:`Pay the fare (8 drachmae).`,r:'gold:8',y:[`Eight drachmae, in silver. The captain bites one to check it. "Welcome aboard."`,'gold-8 xp+s flag:gr_ship']},
 {t:`Show him the olive branch of Athena.`,r:'item:gr_olive',y:[`The captain falls silent. "Athena\'s tree," he whispers. "You may sail free, and may the goddess bless this ship." He bows.`,'xp+l mp+3 flag:gr_ship flag:gr_respect']} ]);

S_('gr5_captain','Captain Nikias','pier|🧔 ⛵',
`Nikias is a man of strong opinions. By the end of the first hour, you know his views on wind, wine, women, olive oil and the incompetence of the Athenian navy. He gives a short speech about not offending Poseidon: no whistling, no spitting over the side, no insulting the sea.\n"The sea hears everything," he says. "And she has a long memory."`,[
 {t:`Promise to be polite to the sea.`,y:[`"Wise," says Nikias. "A sailor who respects the water lives longer."`,'xp+m mp+2 flag:gr_respect']},
 {t:`Ask him about Poseidon.`,c:'CHA 8 persuade',y:[`"Moody," he says. "Generous if you are polite. Terrible if you are not. He gave us horses, you know. And earthquakes. Both a little hard to control."`,'xp+m mp+2 flag:gr_knows_poseidon'],n:[`He grunts. "Ask him yourself, if you are fool enough."`,'xp+s']},
 {t:`Ask whether he has seen the sandal of Hermes.`,y:[`"A winged sandal?" he whispers. "Last month, a net came up with something white and feathery. The sea took it back, as if embarrassed."`,'xp+l mp+2 flag:gr_knows_poseidon']} ]);

S_('gr5_voyage','Out on the Blue','sea|🌊 ☀️',
`The ship rides the swell, its single sail full, its oars rising and falling in time. Gulls cry. The sun makes a glittering road across the waves. Elena leans on the rail with a look of pure joy. "Everyone in my field," she says, "would give their entire pension for this view."`,[
 {t:`Help trim the sail.`,c:'DEX 8 craft',y:[`Rope, knot, pull. The sail fills, and the ship surges forward. The crew cheer.`,'xp+m mp+3'],n:[`You tangle the rope in a hopeless knot. A sailor fixes it without a word.`,'xp+s']},
 {t:`Watch for dolphins.`,y:[`Three of them leap alongside, shining. A sailor says: "Poseidon is pleased with us."`,'xp+m mp+3']},
 {t:`Take a turn at the great steering oar.`,c:'STR 9 endure',y:[`The oar bucks and kicks. For a few minutes, you hold the whole ship\'s course in your hands. It is the best feeling in the world.`,'xp+l mp+3 hp-1'],n:[`The oar slips, and the ship wobbles off course. The helmsman takes it back with a grin.`,'xp+s']},
 {t:`Read the sea charts with Elena.`,r:'ally:gr_elena',y:[`She reads out the names: Euboea, Andros, Naxos, Delos. Every one is a story. By the end, you feel like a sailor.`,'xp+m mp+2 bond:gr_elena']} ]);

S_('gr5_sirens','The Sirens\' Song','sea|🎶 🪨',
`A little after noon, the water glitters strangely around a cluster of rocks. A sweet, high singing floats across the waves. It is the most beautiful song you have ever heard. Sailors drop their oars. One leaps up, gazing, and starts to climb the rail.\n"Sirens!" roars Nikias. "Wax in your ears! Everyone!"`,[
 {t:`Stuff beeswax in your ears and grab an oar.`,y:[`The song becomes a faint buzz. You row hard, and the rocks slide behind. Nikias claps your shoulder. "Odysseus would be proud."`,'xp+l mp+3 flag:gr_kind']},
 {t:`Have the crew tie you to the mast, like Odysseus, so you can listen safely.`,c:'WIS 9 resist',y:[`You hear every note. It is wondrous, terrible and sad, and the ropes hold. After an hour, you are limp, hoarse and wiser. You understand why Odysseus wept.`,'xp+xl mp+2 flag:gr_sirens'.replace('xp+xl','xp+l')],n:[`The ropes bite, and the song is painful and lovely. Eventually it fades, and you slump.`,'xp+m hp-2']},
 {t:`Hold your breath and hum a different tune.`,c:'CHA 8 perform',y:[`Your hum, the lullaby of a distant mother, cuts through the siren-song. It is not beautiful, but it is familiar. You make it through the whole stretch.`,'xp+l mp+3'],n:[`Your tune is off-key, and the Sirens\' song swallows it. You are saved by a sailor who thumps you on the back.`,'xp+s mp-1']},
 {t:`Jump overboard and swim to the singers.`,y:[`The water closes over your head, bright and cold and silent, and the song gets louder and sweeter and further away. You swim, and swim, and the song does not get closer. Your adventure ends here.`,'die']} ]);

S_('gr5_storm','Poseidon\'s Temper','sea|⛈️ 🌊',
`The sky darkens in minutes. The wind howls, the sail snaps, waves climb the sides of the ship. Lightning stabs the water. A huge shape moves beneath the ship, much bigger than a whale. The sailors fall on their knees and pray.\n"He knows," Nikias shouts. "Poseidon knows there are strangers aboard! Quick, an offering!"`,[
 {t:`Pour a cup of wine into the sea.`,r:'item:gr_wine',y:[`"For the Earth-Shaker," you shout, and pour. The waves seem to hesitate. The wind eases, just a little.`,'-gr_wine xp+l mp+3 flag:gr_respect']},
 {t:`Throw a loaf of bread into the sea.`,r:'item:gr_bread|item:gr_honey',y:[`The bread sinks. The storm eases a little. A great tail rises, and splashes politely.`,'xp+l mp+3 flag:gr_respect']},
 {t:`Shout a prayer to Poseidon, loudly and sincerely.`,c:'CHA 9 persuade',y:[`"Lord of the Sea, we mean no harm!" Your voice carries over the storm. The wind drops. A voice, deep as an ocean, says: "Then come and say so, mortal."`,'xp+l mp+3 flag:gr_respect'],n:[`Your prayer is swallowed by the wind, but a wave lifts you, ship and all, and carries you down into the deep.`,'xp+m hp-2']},
 {t:`Show the olive branch of Athena.`,r:'item:gr_olive',y:[`A flicker of fury crosses the water: Poseidon has never forgiven Athens. The wave rises, huge. Then, slowly, it recedes. "My niece\'s tree," says the sea, grudgingly. "She does not forget. Come down."`,'xp+l mp+2']},
 {t:`Hold on to the mast and pray for the best.`,y:[`The ship spins. Water pours over the deck. When the world stops spinning, you are in a place of green light, floating, and not at all wet.`,'xp+m hp-2']} ]);

S_('gr5_hall','The Hall Beneath the Sea','sea|🏰 🐚',
`You sink through green light into a palace of coral and mother-of-pearl, with columns of shell and floors of white sand. Sea-horses nibble at algae in the garden. Nereids, sea-nymphs, drift among the pillars. The water does not wet you, and you breathe as easily as in the air.\nThe throne at the end of the hall is empty. A voice, vast and weary, speaks from the shadows: "More mortals. Every year, more mortals."`,[
 {t:`Bow low and greet him: "Lord of the Sea."`,y:[`A shape unfolds from the throne: a huge, bearded man with seaweed in his hair and a three-pronged trident in his fist. He studies you with eyes like storm-water. "Politer than most," he rumbles.`,'xp+m mp+3 flag:gr_respect']},
 {t:`Introduce yourself, and your friends.`,r:'anyally',y:[`Elena curtsies. Niko stares. Glaux says, "Hello, Uncle," in a voice that you realise is pure cheek. Poseidon\'s eyebrows rise.`,'xp+m mp+3']},
 {t:`Ask the nymphs where the sandal is.`,c:'CHA 8 persuade',y:[`A Nereid giggles, and points at a glass case in the middle of the hall: a white sandal, cracked, with a bent wing. "He found it in his waves. He keeps it. He is very proud."`,'xp+m mp+2 flag:gr_sandal_seen'],n:[`The nymphs giggle and swim away.`,'xp+s']},
 {t:`Demand that he give up the sandal at once.`,y:[`The water begins to boil. The throne rises, huge and dark and not at all amused. "DEMAND?" says Poseidon. The sea comes down on top of you like a roof. Your adventure ends here.`,'die flag:gr_hubris']} ]);

S_('gr5_poseidon','The Earth-Shaker','sea|🔱 🌊',
`Poseidon sits again, a little more calmly, trident across his knees. "I know what you want," he says. "Hermes\'s sandal. It washed up in my waves after the Hourglass cracked. A pretty thing. A nuisance. It will not stay still."\nHe turns his heavy gaze on you. "Why should I give it to a mortal?"`,[
 {t:`"Because the passengers of our ship are frozen in time and cannot be freed without it."`,y:[`He listens. "A ship," he says, softly. "A ship, held in a trap. I have lost many ships, mortal. I know that feeling." He rubs his beard.`,'xp+l mp+3 flag:gr_respect']},
 {t:`"Because Eris did this, and she is no friend of yours."`,c:'WIS 9 persuade',y:[`"Eris," he growls, and the sea shivers. "She has stirred my waves for a hundred years. Very well. I dislike her more than I dislike mortals."`,'xp+l mp+3 flag:gr_knows_eris'],n:[`"Eris is a nuisance," says Poseidon, "but so are you." He is not quite convinced.`,'xp+m mp+1']},
 {t:`Offer him something sincere: tell him a good sea story.`,c:'CHA 8 perform',y:[`You tell him about the plane, the sea and how the Colosseum looks from above. He chuckles, a sound like a distant earthquake. "Ha! You fly. What a strange age."`,'xp+l mp+3'],n:[`Your story is clumsy, but he listens, and is amused anyway.`,'xp+m mp+2']},
 {t:`Compliment his horses.`,y:[`He brightens at once. "My horses are the finest things I ever made." He talks about them for twenty minutes. You nod politely the whole time.`,'xp+m mp+2 flag:gr_respect']} ]);

QS('gr5_question','The Trident Question','sea|🔱 ❓',
`"One test," says Poseidon, "since the Fates like tests. A famous hero offended me and spent ten years trying to reach home over my sea, after the war at Troy. Who was he?"`,
 ['Odysseus','Achilles','Agamemnon'],
 [`"Odysseus," says Poseidon, with great satisfaction. "He blinded my son, the Cyclops. I have never been so angry. He was also, I confess, the most entertaining mortal I have ever tormented."`,`"No," says Poseidon. "Achilles was killed at Troy. This hero got home, eventually."`,`"No," says Poseidon. "Agamemnon went home, and was murdered. This hero did not make it home so quickly."`],'xp+l mp+3');

S_('gr5_sandal','The Left Sandal','sea|👟 ⚪',
`Poseidon opens the glass case with a touch of his trident. The sandal, cracked at the heel, with one white wing bent at an odd angle, tries at once to fly. It bumps against the glass, then flops into your hands with a sort of sigh.\n"Take it," says the Earth-Shaker. "And take this." He plucks a pearl the size of a plum from a clam. "The sea will not trouble you again, while you hold it."`,[
 {t:`Thank him warmly.`,y:[`"Hmph," says Poseidon, but he looks gratified. "Mortals who say thank you. Who would have thought." He waves a hand, and the water rushes you gently upward.`,'xp+l +gr_sandal_l +gr_pearl flag:gr_poseidon_boon flag:gr_sandal_l_got mp+4']},
 {t:`Ask if he forgives Athena, for the olive.`,r:'item:gr_olive',y:[`His face darkens, and then, slowly, softens. "It was a good tree," he admits. "I did not like losing. But I have been a bad loser for a very long time." He sighs.`,'xp+xl +gr_sandal_l +gr_pearl flag:gr_poseidon_boon flag:gr_sandal_l_got mp+5'.replace('xp+xl','xp+l')]},
 {t:`Bow, and promise to look after the sandal.`,y:[`The sandal quivers against your chest. "See that you do," says Poseidon, gruffly.`,'xp+l +gr_sandal_l +gr_pearl flag:gr_poseidon_boon flag:gr_sandal_l_got mp+3']} ]);

S_('gr5_return','Back on Deck','sea|⛵ 🌅',
`A wave sets you down on the deck of Nikias\'s ship, dry as a bone. The storm is gone. The sea is flat, smooth and silver in the dawn. Nikias stares at you with a look of religious awe. "You went to him," he whispers. "And you came back."\nElena presses her hand to her mouth, then bursts out laughing. "Wait till I tell the faculty," she says.`,[
 {t:`Show the sailors the pearl and the sandal.`,y:[`They stare, silent, and then break into cheers. Someone pours wine over the side in thanks. Nikias hands you the tiller.`,'xp+m mp+4 flag:gr_respect']},
 {t:`Ask Nikias to take you to Gorgon Island.`,y:[`"Gorgon Island!" He goes grey. "Nobody sails there. Nobody comes back." But he looks at the pearl on your chest, and his jaw sets. "I will take you as far as the fog. No further."`,'xp+m mp+2']},
 {t:`Sleep for a few hours on the deck.`,y:[`The ship rocks, the sun climbs, the gulls scream. When you wake, the island is on the horizon.`,'rest xp+s']},
 {t:`Examine the sandal.`,c:'INT 8 craft',y:[`A tiny, delicate piece of work: gold stitching, feather-light wing. You find a name inside the strap: "Hephaestus made me." It will need his forge.`,'xp+l mp+2'],n:[`It wriggles in your hand, restless, and you give up.`,'xp+s']} ]);

/* =============== CHAPTER 6: GORGON ISLAND =============== */
G.chapter('gr6',{ story:'greek', n:'Chapter 6: Gorgon Island', sub:'A gaze of stone', ch:3, region:'gr_gorgon', art:'gorgon|🐍 🗿', age:30, btn:'Land on the island',
  text:`Nikias stops the ship at the edge of the fog. "From here," he says, "you row. I do not look at the island. I do not want to see what is on it."\nThe fog swallows the little boat. Out of the white, an island appears: black rocks, tangled thorn, a crowd of silent statues along the shore. This is where the Gorgons live. Here, Hermes\'s right sandal lies, kept by the most feared woman in all of Greece.`,
  beats:()=>G.mix(['gr6_fog','gr6_shore','gr6_perseus','gr6_cave','gr6_medusa','gr6_story','gr6_choice','gr6_sandal','gr6_perseus2','gr6_leave'],13,{nocamp:true}) });

S_('gr6_fog','Fog Around the Island','gorgon|🌫️ 🚣',
`The little rowing boat slides through the mist. You can hear nothing but your own oars and a soft hiss from the rocks ahead. The water is black and very still. Glaux, normally never silent, has gone quiet.\n"Remember," he says finally, in a small voice. "Do not look at her directly. No matter how nicely she asks."`,[
 {t:`Take out the polished shield and hold it ready.`,r:'item:gr_mirror',y:[`The bronze catches the fog and glows. You can see the whole shoreline reflected in it, safely.`,'xp+m mp+3']},
 {t:`Hold up your phone, screen dark, like a mirror.`,r:'item:gr_phone',y:[`The black glass reflects the rocks perfectly. A good backup plan, if a strange one.`,'xp+m mp+2']},
 {t:`Tie a scarf over your eyes and let Elena guide you.`,r:'ally:gr_elena',y:[`"I have always wanted to say this," says Elena, steering you by the shoulder. "Mind the step." You laugh, a little hysterically.`,'xp+m mp+2 bond:gr_elena']},
 {t:`Row steadily and keep your eyes on the oars.`,y:[`Stroke, stroke, stroke. A rhythm to hold on to.`,'xp+s mp+2']} ]);

S_('gr6_shore','The Shore of Statues','gorgon|🗿 🌑',
`The island is crowded with stone figures: sailors with their hands raised, a merchant clutching a purse, a woman in mid-laugh, a young soldier with his sword half drawn. Each is perfect, frozen and grey. The wind makes a low whistling sound through them, like a sigh.\nThey are not monsters\' victims, you realise. They are people who looked.`,[
 {t:`Walk among them carefully, using your reflection.`,y:[`You pick your way through, seeing the island in the shield. At each statue, you whisper: "I am sorry."`,'xp+m mp+3 flag:gr_respect']},
 {t:`Study the statues for clues.`,c:'WIS 9 spirit',y:[`Their faces are not twisted in fear but in surprise. They did not die frightened. They were caught mid-sentence. Something about that is very sad.`,'xp+l mp+2 flag:gr_knows_medusa'],n:[`You cannot look at them long. It is too sad.`,'xp+s mp-1']},
 {t:`Check the edges for any sign of the sandal.`,c:'WIS 8 survive',y:[`Behind a statue of a boy holding a toy boat, a faint white wing flickers. The sandal is near.`,'xp+m mp+2'],n:[`Rocks and thorns, and a statue that looks suspiciously like it is judging you.`,'xp+s']},
 {t:`Touch the shoulder of a statue.`,y:[`It is cold, smooth and still. You feel very briefly as though someone is thanking you.`,'xp+m mp+3 flag:gr_kind']} ]);

S_('gr6_perseus','A Young Hero','gorgon|⚔️ 🌊',
`There is a splash behind you. A tall young man in a short tunic, with a curved blade at his belt and a satchel on his shoulder, hauls himself out of a small boat. He has a great deal of confidence and no apparent sense of direction.\n"Perseus, son of Zeus," he says, a little breathless. "I have been sent to deal with the Gorgon. I take it you are here for the same reason?"`,[
 {t:`"We are here for something else. We would prefer not to hurt her."`,y:[`Perseus frowns. "Not hurt a Gorgon?" he says. "King Polydectes sent me to bring back her head. It is the only way I will be believed." He looks young and rather lost. "But I would rather not, if there is another way."`,'xp+l mp+2 flag:gr_perseus_met']},
 {t:`Ask him what he has to fight a Gorgon.`,y:[`"A sword," he says, "a bag and a very kind sister of the Graeae, who gave me directions. Also nothing else." He gulps. "I do not know how I will look at her."`,'xp+m mp+2 flag:gr_perseus_met']},
 {t:`Offer him the shield.`,r:'item:gr_mirror',y:[`"A mirror," says Perseus, eyes round. "A mirror! That is brilliant." He looks at you with sudden respect. "I think Athena sent you."`,'xp+l mp+3 flag:gr_perseus_met flag:gr_kind']},
 {t:`Join forces with him.`,y:[`"Together, then," says Perseus. "But promise me that if it goes wrong, you will run."`,'xp+m mp+2 flag:gr_perseus_met']} ]);

S_('gr6_cave','The Cave of the Gorgon','gorgon|🕳️ 🐍',
`The cave is dark, damp and hung with long, dry ropes of ivy. A soft light glows from deep inside. The hissing grows louder, and then quiets, as if something is listening. A voice speaks from the darkness, low and surprisingly gentle.\n"Another one," it says. "Please. Please do not look at me."`,[
 {t:`"We will not look. We want to talk."`,y:[`A long silence. "Talk," the voice says, slowly, as if the word is unfamiliar. "No one has wanted to talk in a very long time."`,'xp+l mp+3 flag:gr_respect flag:gr_kind']},
 {t:`Use the shield to see her reflection.`,r:'item:gr_mirror',y:[`In the bronze, you see a tall woman with a sad, tired face. Her hair is a crown of small, hissing snakes, and her eyes are covered by a strip of cloth. She seems almost a girl.`,'xp+l mp+3 flag:gr_mirror_used']},
 {t:`Peek around the corner to see her directly.`,y:[`You turn your head. For a single, heartbeat-long moment, you see a pair of eyes, huge and gold. Then you see nothing at all, for ever. Your adventure ends here, as a very fine statue.`,'die flag:gr_hubris']},
 {t:`Close your eyes tight and walk in.`,c:'WIS 9 resist',y:[`You keep them shut. You walk straight, arms out, blind. Glaux whispers directions. At last, a gentle hand guides you to a seat.`,'xp+l mp+3'],n:[`You stumble on a root and open your eyes by instinct. Elena slaps a hand across them just in time.`,'xp+m hp-2 mp-2']} ]);

S_('gr6_medusa','Medusa Speaks','gorgon|🐍 💚',
`Medusa sits on a rock in the glow of a lantern, wrapped in a grey cloak, a strip of cloth tied over her eyes. Her snakes drowse on her shoulders, curling and uncurling. She is not at all what you expected. She sounds tired, polite and rather lonely.\n"I was a priestess once," she says. "In the temple of Athena. I was very proud of my hair. Then something happened, and now I live here, and nobody visits." She pauses. "Except to kill me."`,[
 {t:`"What happened?"`,y:[`"Poseidon," she says, and her snakes hiss, "and then Athena, who punished me and not him. I was thirteen." Her voice does not shake. "Athena does not know I have forgiven her. I do not think she has forgiven herself."`,'xp+l mp+2 flag:gr_knows_medusa']},
 {t:`"We came for Hermes\'s sandal."`,y:[`"Ah, that," she says. "A golden woman dropped it here, and said I could keep it, if I kept everyone away. I would have given it back, but nobody can come close enough to ask."`,'xp+l mp+2 flag:gr_knows_eris']},
 {t:`"We are sorry for what happened to you."`,y:[`She is silent for a long moment. "Thank you," she says at last, very softly. "That is the first time anyone has said that. Not in a thousand years."`,'xp+l mp+4 flag:gr_kind flag:gr_medusa_heard']},
 {t:`Ask whether you can bring her anything.`,y:[`"A little company," she says. "A conversation. A song. And a promise that the statues will be remembered."`,'xp+m mp+3 flag:gr_kind']} ]);

S_('gr6_story','Medusa\'s Secret','gorgon|📜 🕯️',
`Medusa lights a second lamp. "The sandal is hidden in a niche, behind the biggest statue," she says. "A tiny bright thing that fidgets. Take it. I do not need it. But you should know: the golden woman said she would come back, and if she does, she will not be happy."\nA faint hiss. "She also said that anyone who came for the sandal would be turned to stone. She wanted me to do it. I told her no."`,[
 {t:`"Thank you for refusing."`,y:[`"I have turned enough people to stone," Medusa says. "I did not like it. I do not like being what everyone expects."`,'xp+l mp+3 flag:gr_kind flag:gr_medusa_heard']},
 {t:`"Could you come away from here?"`,y:[`"I cannot," she says. "My gaze is a curse. Only Athena could lift it." She lowers her head. "And I think she would rather forget I exist."`,'xp+m mp+2']},
 {t:`Ask about the statues.`,y:[`"They are all people," she says. "I know all their names. I say them every night, so no one forgets." She begins, very quietly, to recite them.`,'xp+l mp+3 flag:gr_kind']},
 {t:`Sit with her for a while.`,y:[`You sit. The snakes drowse. For a long time, nobody says anything, and it is a good silence.`,'xp+m mp+4 flag:gr_kind']} ]);

S_('gr6_choice','What Can Be Done?','gorgon|🌿 🪞',
`The cave is quiet. Outside, you can hear Perseus pacing, sword in hand. In front of you, Medusa waits, calm as stone. The next move is yours.\n"I do not mind what you decide," she says. "But I have not seen a face in a very long time."`,[
 {t:`Hold out the olive branch of Athena, and ask her to forgive.`,r:'item:gr_olive',y:[`The silver leaves tremble in your hand. Medusa lifts her head. "Athena\'s tree," she whispers. "A sign of peace." A tear slides from under the cloth. The branch glows, and the snakes on her head slowly fall still. "She remembered," says Medusa. "She remembered me."`,'xp+xl mp+5 flag:gr_medusa_freed flag:gr_kind'.replace('xp+xl','xp+l')]},
 {t:`Hold up the mirror so she can see herself.`,r:'item:gr_mirror|item:gr_phone',y:[`In the bronze, a woman with snakes for hair looks back at her own face. "I had forgotten," she whispers. "I thought I would look like a monster." She touches her cheek. "I look like a girl."`,'xp+l mp+4 flag:gr_kind flag:gr_medusa_heard']},
 {t:`Promise to tell Athena what you have heard.`,y:[`"If you do," says Medusa, "tell her I am not angry. Tell her I only wanted to be seen." Her snakes settle, and she smiles, a little, for the first time.`,'xp+l mp+3 flag:gr_kind flag:gr_medusa_heard']},
 {t:`Take the sandal quickly and leave.`,y:[`It is the practical thing to do, though you do not feel good about it.`,'xp+m']} ]);

S_('gr6_sandal','The Right Sandal','gorgon|👟 🪶',
`Behind the biggest statue, in a niche in the rock, a small white wing quivers. The right sandal is wedged between two stones, its strap tangled in a snake-skin. It tugs against the rock, impatient.\nMedusa\'s snakes watch you work. One lifts its head and hisses, quite gently, as if to say: "careful."`,[
 {t:`Untangle the strap carefully.`,c:'DEX 8 craft',y:[`A slow, patient piece of work. The sandal gives a little wriggle of gratitude as it comes free, and settles into your hands like a bird.`,'xp+l +gr_sandal_r flag:gr_sandal_r_got mp+3'],n:[`You tug too hard, and the strap snaps back, but the sandal jumps free into your arms.`,'xp+m +gr_sandal_r flag:gr_sandal_r_got hp-1']},
 {t:`Ask Medusa to help.`,r:'flag:gr_medusa_heard|flag:gr_medusa_freed',y:[`She reaches out one pale hand, and gently unhooks a snake from the strap. "There," she says. "He is very sorry." The sandal pops free and nuzzles you.`,'xp+l +gr_sandal_r flag:gr_sandal_r_got mp+4']},
 {t:`Let Glaux fetch it.`,r:'ally:gr_glaux',y:[`Glaux dives into the niche like an arrow, wriggles free the strap with his beak and emerges, ruffled, with a sandal in his claws. "Naturally," he says.`,'xp+l +gr_sandal_r flag:gr_sandal_r_got bond:gr_glaux mp+3']} ]);

S_('gr6_perseus2','Perseus Decides','gorgon|⚔️ 🪞',
`Perseus appears at the mouth of the cave, sword raised and eyes shut tight. "Where is the Gorgon?" he asks, blindly. "I will do what must be done. I will, I really will." His voice cracks. "Does anyone have a better idea?"`,[
 {t:`Tell him the whole story.`,c:'CHA 9 persuade',y:[`Perseus listens, eyes still shut. When you finish, he lowers the sword. "Then I will not," he says. "I will find another way." He turns to the cave, and in a small voice says: "I am sorry, lady."`,'xp+xl mp+5 flag:gr_kind flag:gr_perseus_spared'.replace('xp+xl','xp+l')],n:[`He frowns. "You may be right," he says, "but a king is waiting." He does not lower his sword.`,'xp+m']},
 {t:`Suggest he fetch the head of another monster instead.`,y:[`"Another monster?" says Perseus, rubbing his chin. "There is a sea-beast, near Ethiopia, threatening a princess." He brightens. "That sounds much better." He sets off for his boat at once.`,'xp+l mp+3 flag:gr_perseus_spared']},
 {t:`Hand him the shield and let him decide.`,r:'item:gr_mirror',y:[`He catches his own reflection, a young man, frightened and brave. "Oh," he says. "I understand." He hands it back, and sheathes his sword. "I will tell the king I could not find her."`,'xp+l mp+4 flag:gr_perseus_spared']},
 {t:`Help him with a plan to defeat her.`,y:[`The plan works, in the end. Medusa is not killed, but her gaze is sealed into a bronze shield forever, and she is taken from her island. She does not look back. You are not sure you did the right thing.`,'xp+m mp-3 flag:gr_medusa_stone']} ]);

S_('gr6_leave','Leaving the Island','gorgon|⛵ 🌅',
`You row back through the fog with a sandal in each hand and a lump in your throat. Behind you, the island is silent. On the shore, a tall figure in a grey cloak stands very still, lifting one hand in farewell.\nElena puts an arm round your shoulders. "Well done," she says. "That was the hardest thing so far, and nobody got hurt. I call that wisdom."`,[
 {t:`Look back and wave.`,y:[`The figure waves too. Then the fog closes. You will think about her for a long time.`,'xp+m mp+4 flag:gr_kind']},
 {t:`Look at the two sandals together.`,r:'item:gr_sandal_l&item:gr_sandal_r',y:[`They strain toward each other, pulling in your hands. They want to be a pair again. But the straps are torn, the wings bent and a gold thread has snapped.`,'xp+m mp+2']},
 {t:`Rest in the boat and breathe.`,y:[`A long, quiet row back to Nikias. For the first time since the crash, you feel as if you are getting somewhere.`,'rest xp+s mp+3']},
 {t:`Ask Elena whether she thinks Athena will be pleased.`,r:'ally:gr_elena',y:[`"I think," she says, thoughtfully, "that she will be furious, and then she will weep, and then she will do something wise." She smiles. "It is how all the best goddesses work."`,'xp+m mp+3 bond:gr_elena']} ]);
})();
