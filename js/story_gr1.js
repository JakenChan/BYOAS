/* THE THREAD OF THE MOIRAI — Chapters 1-3: Roman Holiday, Another Age, The City of Athena */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
/* a three-answer question scene: wrong answers cost a little Favor and are removed, the right one moves the story on */
const QS = (id, title, art, text, ans, msgs, fx) => {
  const arr = [{t:ans[0],ok:1},{t:ans[1],w:1},{t:ans[2],w:2}]; const rot = (id.length*7 + id.charCodeAt(id.length-1)) % 3;
  const ord = [0,1,2].map(k => arr[(k+rot)%3]);
  S_(id, title, art, text, ord.map(e => e.ok ? {t:e.t, y:[msgs[0], fx||'xp+l mp+2']} : {t:e.t, hide:true, r:'!sv:w'+e.w, y:[msgs[e.w], 'mp-1 xp+s svflag:w'+e.w+' stayc']}));
};
G.grh = { S_, QS };

/* =============== CHAPTER 1: ROMAN HOLIDAY =============== */
G.chapter('gr1',{ story:'greek', n:'Chapter 1: Roman Holiday', sub:'The last day of a week in Rome', ch:0, region:'gr_rome', art:'colosseum|🏛️ ☀️', age:30, btn:'Start the journey',
  text:`You have spent a week in Rome. You have eaten too much pasta, walked too many cobbled streets and thrown a coin into the Trevi Fountain. The city is hot and golden and full of ruins that are older than anything you have ever touched.\nToday is the last day. Your flight home leaves at 14:20. There is still time for a few last sights, and for the one thing you will wish, later, that you had paid closer attention to.`,
  beats:()=>['@+gr_ticket +gr_phone +gr_watch'].concat(G.mix(['gr1_wake','gr1_colosseum','gr1_forum','gr1_trevi','gr1_pantheon','gr1_airport','gr1_flight','gr1_quiz','gr1_light','gr1_crash'],6,{nocamp:true})) });

S_('gr1_wake','Last Morning in Rome','town|🏨 ☀️',
`The alarm rings at seven. Sunlight pours through the shutters, and from the street below come the smells of coffee and warm bread. Your bag is half-packed. Your boarding pass is on the desk: Flight AQ 417, Rome to Singapore, seat 23A, departure 14:20.\nYou have a few hours before the airport.`,[
 {t:`Read the boarding pass carefully.`,y:[`Flight AQ 417. Seat 23A. Departing 14:20 from Fiumicino, Gate B7. It is a long flight, with a stopover in the sky above the Mediterranean. You tuck the pass into your pocket.`,'xp+s flag:gr_ticket_read']},
 {t:`Have a quick breakfast of cornetto and cappuccino.`,y:[`Flaky pastry, hot coffee, standing at the bar like a local. Perfect.`,'xp+s hp+4 mp+2']},
 {t:`Pack carefully and check out.`,y:[`Everything goes in. Passport, phone, charger, a fridge magnet of the Colosseum. You are as ready as a person can be.`,'xp+s mp+2']} ]);

S_('gr1_colosseum','The Colosseum','colosseum|🏟️ 🏛️',
`The Colosseum rises over the street like a giant, broken crown. Built by Rome\'s emperors and finished in 80 AD, it once held fifty thousand people. A guide with a green umbrella says: "The Romans copied half of their culture from Greece: their gods, their statues, even their columns."\nYou take a long look at the arches, and wonder what lies behind them.`,[
 {t:`Join the guide\'s tour.`,y:[`You learn about trapdoors, tunnels and the awning that shaded the crowd. "Jupiter, Juno, Minerva," the guide says. "Every one of them started out Greek."`,'xp+m mp+2 flag:gr_v_colosseum']},
 {t:`Climb to the upper level for the view.`,c:'STR 8 climb',y:[`Stairs, stairs, more stairs. From the top, Rome lies golden below you, dotted with domes.`,'xp+m mp+3 flag:gr_v_colosseum'],n:[`The climb is hot and steep. You stop halfway, puffing, but the view from there is good enough.`,'xp+s hp-1 flag:gr_v_colosseum']},
 {t:`Sketch the arches in your notebook.`,r:'item:gr_notebook',y:[`You draw three tiers of arches, each with a different style of column. The guide notices and nods approvingly: "Doric, Ionic, Corinthian: all Greek."`,'xp+m mp+2 flag:gr_v_colosseum']},
 {t:`Take a selfie and move on.`,y:[`Smile, click. Another tourist photobombs you in a gladiator costume.`,'xp+s flag:gr_v_colosseum']} ]);

S_('gr1_forum','The Roman Forum','colosseum|🏛️ 🌿',
`The Forum is a field of broken columns, triumphal arches and weathered stone, once the political heart of the Roman Republic. A sign says that Rome, founded in 753 BC according to legend, conquered Greece in 146 BC. But the Greeks, it adds, "conquered Rome with culture".\nSomewhere nearby, someone is arguing, in rapid Italian and then in excellent English, with a very patient guide.`,[
 {t:`Walk the Sacred Way and read the inscriptions.`,c:'INT 8 lore',y:[`SPQR, the Senate and People of Rome, appears on everything. You also notice Greek letters scratched on an old column: graffiti from two thousand years ago.`,'xp+m mp+2 flag:gr_v_forum'],n:[`The Latin is worn smooth. But the stones are beautiful anyway.`,'xp+s flag:gr_v_forum']},
 {t:`Sit in the shade and rest your feet.`,y:[`A cat sleeps on a marble head beside you. You rest, and drink in the quiet.`,'xp+s hp+3 mp+2 flag:gr_v_forum']},
 {t:`Follow the sound of the argument.`,y:[`Round a column, you find an elderly woman in a straw hat arguing about the origin of the word "forum" with a very tired guide. She spots you and calls: "Young person! Do you know where the Romans got their gods?"`,'xp+m flag:gr_v_forum flag:gr_met_elena']} ]);

S_('gr1_trevi','The Trevi Fountain','colosseum|⛲ 🪙',
`The Trevi Fountain is a mountain of white marble and rushing blue water in a tiny square, packed with tourists. At its centre stands Oceanus, a Greek sea-god in a chariot drawn by sea-horses. Tradition says that a coin thrown over your shoulder will bring you back to Rome.\nEveryone is tossing coins. The fountain gleams with them.`,[
 {t:`Toss a coin over your shoulder.`,r:'gold:1',y:[`Plink. You make a wish. You are not sure why you wish for "home", but the word comes out of its own accord.`,'gold-1 xp+s mp+3 flag:gr_v_trevi']},
 {t:`Admire the statue of the sea-god.`,c:'INT 8 lore',y:[`The sea-god Oceanus, and Triton with his horses, one wild, one calm. Greek myths, fixed in stone by Roman sculptors. You think about how many stories travel across time.`,'xp+m mp+2 flag:gr_v_trevi'],n:[`It is lovely, if crowded. Your best view is of a stranger\'s elbow.`,'xp+s flag:gr_v_trevi']},
 {t:`Buy a gelato from a stall (3 coins).`,r:'gold:3',y:[`Pistachio and lemon. The sweetest thing in Rome.`,'gold-3 hp+5 mp+2 flag:gr_v_trevi']},
 {t:`Take a photograph and move along.`,y:[`The camera clicks. The fountain, for a moment, seems to glow gold in the screen. You think it is the sunset.`,'xp+s flag:gr_v_trevi']} ]);

S_('gr1_pantheon','The Pantheon','colosseum|🕳️ 🏛️',
`Inside the Pantheon, a column of sunlight pours through the round hole in the dome and slides across the floor. "Pantheon," says a voice behind you, "means 'all the gods'. In Greek. They didn\'t even bother to invent a new word." It is the woman from the Forum, now with a guidebook under her arm.\n"Elena Rossi," she says, shaking your hand firmly. "Retired teacher of Greek and Latin. Which flight are you on?"`,[
 {t:`"AQ 417, to Singapore."`,y:[`"No!" she says, delighted. "I'm on that flight too. Seat 23B. You must be 23A. We shall have a lovely conversation about the Greeks." You are not at all sure that you have a choice.`,'xp+m mp+2 flag:gr_met_elena flag:gr_v_pantheon']},
 {t:`Ask her to explain the Roman and Greek gods.`,y:[`"Zeus, Jupiter. Athena, Minerva. Poseidon, Neptune. Hermes, Mercury. Same gods, different names," she says. "The Romans stole the best bits of Greece and put their own names on them."`,'xp+m mp+2 flag:gr_met_elena flag:gr_v_pantheon']},
 {t:`Politely admire the dome and slip away.`,y:[`Elena\'s voice follows you across the marble: "See you on the plane!"`,'xp+s flag:gr_v_pantheon']},
 {t:`Test her: "What is the oculus for?"`,c:'INT 8 lore',y:[`"Light, air and a very good view of the gods," says Elena, thrilled. "You know your architecture!"`,'xp+m mp+2 flag:gr_met_elena flag:gr_v_pantheon'],n:[`"Light!" she says, and begins a lecture on engineering that lasts ten minutes.`,'xp+s flag:gr_met_elena flag:gr_v_pantheon']} ]);

S_('gr1_airport','Fiumicino Airport','town|✈️ 🧳',
`Rome\'s airport is a bustling maze of queues, announcements and rolling suitcases. You drop your bag at the counter, clear security and find Gate B7. Through the big windows you can see planes sitting on the tarmac like sleeping gulls.\nThe board says: AQ 417 SINGAPORE, 14:20, ON TIME.`,[
 {t:`Buy a bottle of water and a snack.`,r:'gold:3',y:[`Cold water, salty crackers. You are ready for eleven hours in the air.`,'gold-3 +gr_water xp+s']},
 {t:`Send a message home: "Boarding now. Home soon!"`,y:[`A thumbs-up arrives, and a heart. You will think about that message later.`,'xp+s mp+3']},
 {t:`Watch the planes take off from the window.`,y:[`One after another they lift, tilt and vanish into the blue. You wonder what it is like to fly without an engine, like the birds.`,'xp+s mp+2']},
 {t:`Find Elena and wave.`,r:'flag:gr_met_elena',y:[`She is already at the gate, reading a Greek newspaper. "Seat 23B, remember," she says. She does not look up.`,'xp+m mp+2']} ]);

S_('gr1_flight','Above the Mediterranean','cabin|✈️ ☁️',
`The plane rises over the sea, silver and quiet. You sit in 23A, Elena in 23B, a tray of rubbery chicken between you. Through the little window, you can see the Mediterranean, deep blue, dotted with islands that look like crumbs on a tablecloth.\n"Look," says Elena, pointing. "That is Greece, down there. Where it all began." She turns to you, eyes bright. "A little quiz to pass the time?"`,[
 {t:`"Go on, then."`,y:[`She asks you a few easy questions, then a harder one. You are surprised by how much you know, and how much you do not.`,'xp+m mp+3 bond:gr_elena']},
 {t:`Check your watch: it says 16:40.`,y:[`16:40. The cabin is quiet, the engines hum, a child is asleep three rows ahead. You note the time without quite knowing why.`,'xp+s flag:gr_knows_time']},
 {t:`Watch a film on the seat-back screen.`,y:[`Half an hour of a very silly comedy. Elena clicks her tongue at your taste in films.`,'xp+s mp+2']},
 {t:`Take a short nap.`,y:[`The engines drone, the cabin is warm. You drift off.`,'xp+s hp+3']} ]);
QS('gr1_quiz','Elena\'s Question','cabin|🧓 ✈️',
`Elena folds her napkin like a scholar folding a scroll. "Question for you," she says. "The Romans called the king of the gods Jupiter. What did the Greeks call him?"`,
 ['Zeus','Apollo','Poseidon'],
 [`"Zeus!" says Elena, thumping the tray table so the chicken jumps. "Jupiter, from the Latin Iovis Pater, father Jove, is Zeus. You were paying attention."`,`"No, no," says Elena. "Apollo is the god of the sun and prophecy. Think of the thunderbolt."`,`"No," says Elena, "Poseidon rules the sea. The thunderbolt belongs to someone higher."`],'xp+m mp+2 bond:gr_elena');

S_('gr1_light','The Golden Light','cabin|✨ ⚡',
`It starts with a flicker. The cabin lights stutter, the engines cough and a single golden thread of light slides in through the window and across the ceiling. Then the sky outside blazes gold, brighter than any sunset. The plane shudders. Overhead bags rattle.\nFrom nowhere, from everywhere, a woman\'s laughter rings through the cabin: light, delighted and utterly without kindness. Your watch says 16:41.`,[
 {t:`Grab Elena\'s hand and brace for impact.`,y:[`Her hand is small and fierce. "Don\'t let go," she says. "Whatever happens."`,'xp+m mp+3 bond:gr_elena flag:gr_elena_hold']},
 {t:`Fit the oxygen mask and help the child in the row ahead.`,c:'DEX 8 craft',y:[`Your fingers work fast. The mask goes on, the child blinks up at you, and you buckle her seat just in time.`,'xp+l mp+3 flag:gr_kind'],n:[`Your hands shake, but a flight attendant takes over. You tighten your own belt.`,'xp+m mp+1']},
 {t:`Tuck your head down, belt tight, and breathe.`,y:[`The checklist from the safety card runs through your head. Head down, hands over your head. Breathe.`,'xp+m mp+2']},
 {t:`Look out of the window.`,y:[`The sea below is not the Mediterranean you remember. The coast is wild, with a tiny, shining city on a hill, and a white temple that gleams like a tooth.`,'xp+m mp+1']} ]);

S_('gr1_crash','Impact','wreck|💥 🌊',
`The plane bucks, spins and falls through gold light, and then the sea rushes up to meet you. A roar, a wrench, a tearing sound. Then silence, and white, and a taste of salt.\nYou are lying on your back on warm sand. Above you, a sky of perfect blue. Behind you, the soft sizzle of something burning. And somewhere, very close, someone is shouting in a language you have never heard.`,[
 {t:`Sit up slowly and look around.`,y:[`The beach is long and white. The plane\'s tail lies half in the surf, wrapped in a shimmer of gold. On the hill beyond, a city of white buildings glitters, and crowning it is a temple of impossible beauty.`,'xp+m mp+1']},
 {t:`Check yourself for injuries.`,y:[`Bruised, scratched, but whole. Your watch has stopped at 16:47. Somehow you are alive.`,'xp+m hp-1']},
 {t:`Call out for Elena.`,y:[`"Here," comes a voice, hoarse but firm. "Keep your voice down and look at the sky."`,'xp+m mp+1']} ]);

/* =============== CHAPTER 2: ANOTHER AGE =============== */
G.chapter('gr2',{ story:'greek', n:'Chapter 2: Another Age', sub:'A beach that should not exist', ch:1, region:'gr_shore', art:'wreck|🔥 🌅', age:30, btn:'Look around',
  text:`The beach is warm. The sea is a different blue from the one you remember, a deeper, older blue. The cliffs behind you are covered in olive trees. Not a single contrail crosses the sky. You are somewhere very far from Rome, and not only in distance.\nWhatever you do next, do it quietly and carefully.`,
  beats:()=>G.mix(['gr2_wake','gr2_wreck','gr2_hermes','gr2_niko','gr2_inn','gr2_apple','gr2_road'],11,{nocamp:true}) });

S_('gr2_wake','Washed Ashore','wreck|🏖️ 🔥',
`Elena kneels beside you, her straw hat gone, her hair pinned in a messy bun and a long scratch on one arm. "We are alive," she says, "which is good. We are also, I suspect, not in the twenty-first century, which is bad."\nShe points to the wreck. The tail section of the plane lies tilted on the sand, wrapped in a shimmering gold light. In the glow, you can see the shapes of passengers, motionless in their seats.`,[
 {t:`"What happened to them?"`,y:[`"Frozen," says Elena. "Held in the moment. Look: no one is hurt, no one is moving." She breathes in, very slowly. "Something is keeping them safe."`,'xp+m mp+2 ally:gr_elena']},
 {t:`Help Elena up and check she is alright.`,c:'WIS 8 heal',y:[`A cut on her arm, bruising on her ribs. You bandage it with a strip torn from your shirt. She pats your hand. "Good hands."`,'xp+m mp+2 flag:gr_kind ally:gr_elena'],n:[`You do your best. She chuckles and does it better herself.`,'xp+s ally:gr_elena']},
 {t:`Walk toward the wreck.`,y:[`The sand is hot under your shoes. The gold light feels like the warm hum of a fridge.`,'xp+s ally:gr_elena']} ]);

S_('gr2_wreck','The Frozen Plane','cabin|⏸️ ✨',
`Inside the tail section, time has stopped. A tray hangs in mid-air, with a splash of orange juice frozen above it. A child\'s toy floats an inch above the carpet. The passengers sit like waxworks, eyes closed, breathing so slowly you cannot see it.\nA woman in a pilot\'s uniform, scratched and furious, is checking pulses one by one. She looks up. "Thank goodness. Someone awake."`,[
 {t:`"I\'m with Elena. Who are you?"`,y:[`"First Officer Mara Okafor," she says. "I flew the plane down, or something did. I kept it level until the sea. Nobody is dead. Everyone\'s asleep, and the gold light keeps them that way." She looks grim. "I want to know who did this."`,'xp+m mp+2 ally:gr_mara']},
 {t:`Check the cockpit clock and instruments.`,c:'INT 8 craft',y:[`Every dial reads zero, except one: a single clock, stopped at 16:47. Underneath it, a thread of gold light winds up through the ceiling and into the sky.`,'xp+l mp+2 flag:gr_knows_time'],n:[`Everything is dark. Only the old clock glimmers, 16:47.`,'xp+m flag:gr_knows_time']},
 {t:`Collect supplies from the galley.`,y:[`Water bottles, packets of nuts, bread rolls and a first-aid kit. You pack them carefully into a bag.`,'xp+m +gr_water +gr_bandages +gr_snack']},
 {t:`Touch the gold light.`,c:'WIS 9 resist',y:[`It is warm, and it hums. In your head, a faint voice says: "Not yet. Not yet." You pull back, tingling.`,'xp+m mp+2'],n:[`It stings like pins and needles. Your hair stands on end, but you are all right.`,'xp+s hp-1']} ]);

S_('gr2_hermes','A Barefoot Visitor','wreck|🦶 ✨',
`A figure shimmers into being on the sand: a lean young man in a short travelling cloak and a wide-brimmed hat, with an easy, mischievous smile and, you notice, bare feet. His outline flickers like a bad video. He is carrying a staff with two snakes wound around it, and he looks very tired.\n"Greetings, mortals from the strange machine," he says, in a language that, impossibly, you understand. "I am Hermes. I used to be the one who guards roads, travellers and the places between. Lately, I have been a little... unwell."`,[
 {t:`"Why are you barefoot, Hermes?"`,y:[`He looks down at his feet with a sad little sigh. "My sandals," he says. "My winged sandals. Someone took them. Without them, I cannot cross anything, not the sea, not the sky, and not the gap between your age and mine. Your flying machine fell through the hole."`,'xp+l mp+2 flag:gr_knows_greek']},
 {t:`"Who took them?"`,y:[`"I have a suspicion," he says, "and the suspicion laughs, and has a golden apple. But I cannot prove it. Go to Athens. Athena will help you. She dislikes secrets almost as much as she dislikes arrogance."`,'xp+m mp+2 flag:gr_knows_greek']},
 {t:`"Can you send us home?"`,y:[`"Not without my sandals," he says. "But I can give you the speech of this age. That much is within my power." He touches your forehead with two fingers, and the strange language falls into place like a key in a lock.`,'xp+l mp+2 skill:gr_alphabet flag:gr_knows_greek']},
 {t:`"Can we count on you?"`,y:[`"I am a god," he says, with the ghost of his usual grin. "Counting is not my strength. But trust is. Go well."`,'xp+m mp+3 flag:gr_knows_greek flag:gr_respect']} ]);

S_('gr2_niko','A Shepherd Boy','meadow|🐐 🧒',
`A boy of about twelve, with a shepherd\'s crook and a ragged tunic, stares at the wreck from behind a rock, goats bleating nervously behind him. When you wave, he squeaks and bolts. Then, curious, he creeps back.\n"Are you gods?" he asks. "Or Phoenician sailors? You are very strangely dressed."`,[
 {t:`"We are travellers. We are lost."`,y:[`He thinks about it. "Lost is easy," he says wisely. "Everyone is lost. I am Niko. My goats are lost too, usually. I will show you the road to Athens, if you promise not to turn me into a tree."`,'xp+m mp+2 ally:gr_niko flag:gr_kind']},
 {t:`Share a bread roll with him.`,r:'item:gr_snack|item:gr_bread',y:[`He nibbles, wide-eyed. "It is soft!" he says. "It is like eating a cloud." He becomes your friend for life.`,'xp+m mp+3 ally:gr_niko flag:gr_kind']},
 {t:`Make a goat noise.`,c:'CHA 8 perform',y:[`"Meeeh!" A goat answers, then another. Niko doubles over laughing. "You are the strangest Phoenician ever," he gasps.`,'xp+m mp+3 ally:gr_niko'],n:[`The goats look disgusted. Niko laughs so much that he falls over.`,'xp+s mp+2 ally:gr_niko']},
 {t:`Ask him about the nearest village.`,y:[`"Down the road," he says, pointing. "There is an inn, and a man there who knows everything. And there is Athens, beyond."`,'xp+m mp+1 ally:gr_niko']} ]);

S_('gr2_inn','The Wayside Inn','village|🍷 🏠',
`The road to Athens passes a low stone inn with a vine-covered porch. Inside, farmers drink watered wine and argue about the price of olives. The innkeeper, a stout woman with a ladle, looks at your clothes, then at your face, and lets out a belly laugh. "Sit! Sit! Foreign, are you? You look like you have seen a god."`,[
 {t:`Order bread, cheese and olives (4 drachmae).`,r:'gold:4',y:[`A plate of simple food, salty, rich and honest. The best meal you have had in days.`,'gold-4 hp+10 mp+3 xp+s']},
 {t:`Ask the innkeeper about gods in the area.`,c:'CHA 8 persuade',y:[`"Gods?" she says, leaning in. "Seen one just this week. Very lovely lady in a gold dress. Gave my daughter an apple. Hm. My daughter has been in a terrible mood ever since."`,'xp+l mp+2 flag:gr_knows_eris'],n:[`"Gods, gods," she says. "Everyone has seen a god. Eat your bread."`,'xp+s']},
 {t:`Offer to help in the kitchen for a free meal.`,c:'DEX 8 craft',y:[`Chop, stir, serve. By the end, you have earned a hot dinner, a blessing and a tip.`,'xp+m hp+8 mp+2 gold+4 flag:gr_kind'],n:[`You burn the lentils. She gives you bread anyway, and a very long look.`,'xp+s hp+4']},
 {t:`Sleep in the barn.`,y:[`Hay, goats, stars. You sleep better than you expected.`,'rest xp+s']} ]);

S_('gr2_apple','A Gift for the Fairest','village|🍏 👗',
`At the edge of the village, a woman is waiting by the road. She is tall, dazzlingly beautiful, in a dress of gold silk, with a smile like a sharp, polished knife. In her hand is an apple: gold, gleaming, with tiny letters on its skin.\n"A gift," she says, "for a traveller. It says: To the fairest." She tilts her head. "Take it. It is only a little thing."`,[
 {t:`"No, thank you. We do not accept gifts from strangers."`,y:[`Her smile tightens. "Strangers," she repeats. "Oh, my dear, I am nobody\'s stranger." She vanishes in a swirl of gold petals. Elena breathes out. "That," she says, "was Eris, the goddess of strife. Well done."`,'xp+l mp+3 flag:gr_knows_eris flag:gr_respect']},
 {t:`Take the apple, but do not eat it.`,y:[`The apple is warm and slightly heavy, humming. Eris laughs, delighted, and fades. Elena, aghast, whispers, "You took it! Oh dear. Well. Never eat it."`,'xp+m +gr_apple flag:gr_knows_eris mp-2']},
 {t:`Ask who she is.`,c:'WIS 9 spirit',y:[`"They call me Eris," she says, with a delighted shiver. "And you are exactly the sort of person I enjoy: new, confused and full of questions." She winks. "Be careful with questions. I might answer them."`,'xp+l mp+1 flag:gr_knows_eris'],n:[`She laughs, and turns to gold dust on the wind.`,'xp+m flag:gr_knows_eris']},
 {t:`Take a bite of the apple.`,hide:true,r:'item:gr_apple',y:[`It is the sweetest thing you have ever tasted. Sweeter than honey, sweeter than pride. And as you swallow, a thought slides into your head: "Of course I am the fairest." You begin, at once, to argue with everyone you meet. You argue with the goats. You argue with a statue. You are still arguing a century later. Your adventure ends here.`,'die']} ]);

S_('gr2_road','The Road to Athens','meadow|🛤️ 🌿',
`Three days of dusty roads: olive groves, shepherds, a stream where you wash your face and drink from your hands. On the evening of the third day, from the top of a hill, you see it: Athens, the city of Athena, white and gold in the sunset, with the new Parthenon blazing on the Acropolis like a crown.\nElena stops and puts a hand over her mouth. "I taught it for forty years," she whispers, "and I never believed it would be this beautiful."`,[
 {t:`Stand beside Elena and take it all in.`,y:[`The city glows. Thin smoke rises from a thousand hearths, and somewhere a flute plays a tune. You are a very long way from home.`,'xp+m mp+4 bond:gr_elena']},
 {t:`Ask Niko to tell you about the city.`,r:'ally:gr_niko',y:[`"The goddess watches it," he says proudly. "And the people rule themselves. I want to go to the Assembly when I am old enough."`,'xp+m mp+3 bond:gr_niko']},
 {t:`Take notes on everything you can see.`,r:'item:gr_notebook|item:gr_pen',y:[`Walls, port, hill, temple. You draw it all. The sketch will be worth a fortune if you ever get home.`,'xp+m mp+2']},
 {t:`Walk on briskly. Night is falling.`,y:[`Down the hill, across the plain, toward the lights.`,'xp+s mp+1']} ]);

/* =============== CHAPTER 3: THE CITY OF ATHENA =============== */
G.chapter('gr3',{ story:'greek', n:'Chapter 3: The City of Athena', sub:'Wisdom, olives and the Acropolis', ch:1, region:'gr_athens', art:'acropolis|🦉 🏛️', age:30, btn:'Enter Athens',
  text:`Athens is loud, bright and busy. In the agora, merchants shout, potters shape clay, philosophers argue under a colonnade and a citizen climbs a rock to speak. Above it all, the Parthenon gleams with fresh paint, and on the temple steps, the owl of Athena watches.\nHere, if anywhere, you might find a goddess with an answer.`,
  beats:()=>G.mix(['gr3_gate','gr3_agora','gr3_philosopher','gr3_climb','gr3_athena','gr3_test1','gr3_test2','gr3_test3','gr3_gift','gr3_owl'],17,{nocamp:true}) });

S_('gr3_gate','The Gates of Athens','agora|🚪 🛡️',
`Two guards in bronze helmets block the gate. "Foreigners?" says one, eyeing your clothes. "Phoenicians? Egyptians? Those are very odd sandals."\nBehind you, Elena clears her throat, and begins, in beautiful, ancient Greek, a speech that makes both guards stand a little straighter.`,[
 {t:`Let Elena speak for you.`,r:'ally:gr_elena',y:[`She explains, with great dignity, that you are scholars from the far west, shipwrecked and hoping to meet the priestesses of Athena. The guards bow, a little awed.`,'xp+m mp+3 bond:gr_elena']},
 {t:`Greet them respectfully in Greek.`,c:'CHA 8 persuade',y:[`"Chaire!" you say: rejoice, a greeting. They grin. "Chaire, stranger," they reply, and wave you in.`,'xp+m mp+3 flag:gr_respect'],n:[`You mispronounce it, and they snigger, but let you through.`,'xp+s mp+1']},
 {t:`Offer them a coin.`,r:'gold:3',y:[`They accept the coin with great dignity, and pretend they did not see it.`,'gold-3 xp+s']},
 {t:`Show them the owl feather.`,r:'item:gr_owl_feather',y:[`The guards fall silent. One of them whispers, "Athena\'s own." They stand aside at once.`,'xp+m mp+2']} ]);

S_('gr3_agora','The Agora','agora|🛍️ 🏺',
`The agora is the beating heart of Athens: stalls of olives, honey and fish, potters with tall jars, cobblers stitching sandals, a man shouting about the price of oil. Beneath the painted colonnade, groups of men are arguing in the shade.\nA bearded man in a worn cloak is asking the same question over and over to a very annoyed general.`,[
 {t:`Listen to the bearded man.`,y:[`"What is courage?" he asks, again. "Is it not to know what to fear?" The general fumes. You grin. It is Socrates, or someone very like him.`,'xp+m mp+3 flag:gr_met_socrates']},
 {t:`Visit the stalls and buy food (4 drachmae).`,r:'gold:4',y:[`Olives, honey, bread, a pomegranate. A good lunch for the road.`,'gold-4 hp+8 mp+2 +gr_bread']},
 {t:`Chat with a potter about his jars.`,c:'CHA 8 persuade',y:[`He shows you the black-and-red painted vases. "A drinking cup for the dead, a wine jar for the living," he says. "Both must be beautiful."`,'xp+m mp+2'],n:[`He is busy firing a kiln.`,'xp+s']},
 {t:`Look for someone who knows about Athena\'s priestesses.`,c:'CHA 8 persuade',y:[`A woman selling flowers points at the Acropolis. "The priestess of Athena Polias. Ask for Lysimache."`,'xp+m mp+2 flag:gr_knows_lysimache'],n:[`You get a shrug, and a bunch of violets.`,'xp+s mp+1']} ]);

S_('gr3_philosopher','A Question in the Shade','agora|❓ 🗣️',
`The bearded man has noticed you. "You," he says, pointing. "Strangers! Come here. I have a question." He leans on a pillar. "What is the thing that is hardest to know?"\nA small crowd gathers, grinning.`,[
 {t:`"Oneself."`,y:[`"Ah!" he says, delighted. "'Know thyself', like the words at Delphi. You are wiser than half the generals in Athens." The crowd laughs and claps.`,'xp+l mp+3 flag:gr_respect']},
 {t:`"The future."`,y:[`"Hm," he says. "A fair answer. But we can make a good guess at the future if we know ourselves." He is kind about it.`,'xp+m mp+2']},
 {t:`"Why is this man asking so many questions?"`,y:[`The crowd roars. The man laughs hardest of all. "Because I know nothing," he says cheerfully, "and everyone else thinks they do."`,'xp+m mp+3']},
 {t:`Say politely that you are in a hurry.`,y:[`"The unexamined hurry," he says, "is not worth hurrying." But he lets you go.`,'xp+s']} ]);

S_('gr3_climb','The Climb to the Acropolis','acropolis|🏛️ 🪜',
`Hundreds of stone steps lead up the rock to the Propylaia, the great gateway. Pilgrims carry cakes and olive branches as offerings. Ahead, on the summit, the Parthenon glows, its columns still raw and bright, its roof not yet touched by time.\nOn a rock to the side, a small grey owl is watching you climb.`,[
 {t:`Climb steadily and enjoy the view.`,c:'CON 8 endure',y:[`Step by step. At the top, Athens spreads below you like a map, with the sea glinting beyond. You have never seen anything so clear.`,'xp+m mp+3'],n:[`You huff and puff and pause twice, but you reach the top.`,'xp+s hp-1']},
 {t:`Count the columns of the Parthenon.`,c:'INT 8 lore',y:[`Eight at the front, seventeen along the sides. "A Doric temple," says Elena, "with Ionic touches. Everything beautiful about it is built on mathematics."`,'xp+m mp+2'],n:[`You lose count at fourteen, and start again.`,'xp+s']},
 {t:`Pause at the little temple of Athena Nike.`,y:[`A tiny temple to Athena of Victory. The statue has no wings, so that Victory can never fly away from Athens. You like that idea.`,'xp+m mp+3']},
 {t:`Follow the owl.`,y:[`It flaps ahead of you, from rock to column to rock, and waits at each. At the top, it flies up onto the Parthenon\'s roof and hoots, once.`,'xp+m mp+2 flag:gr_followed_owl']} ]);

S_('gr3_athena','The Grey-Eyed Goddess','acropolis|🦉 ⚔️',
`Inside the Parthenon stands a statue of Athena, forty feet high, covered in gold and ivory. As you gaze up at it, the statue\'s eyes seem to move. A tall woman steps out from behind the statue, in a bronze helmet and a plain robe, with a spear in one hand and an owl on her shoulder. Her eyes are the grey of the sea before a storm.\n"You are not from this thread of time," says Athena. "I have been waiting. Speak, mortals. And speak truthfully."`,[
 {t:`Bow and explain everything honestly.`,y:[`You tell her about the plane, the gold light, the frozen passengers and Hermes\'s missing sandals. She listens without moving. When you finish, she nods once. "As I feared. Time has cracked, and someone has put a hand in the crack."`,'xp+l mp+3 flag:gr_met_athena flag:gr_respect']},
 {t:`Ask for her help directly.`,c:'CHA 9 persuade',y:[`"I give help to those who have earned it," says Athena, "but I like a straight question." She almost smiles. "Very well. I shall test you. Wisdom is the only coin I accept."`,'xp+l mp+2 flag:gr_met_athena'],n:[`"Plain, at least," she says dryly. "We shall see whether you are also wise."`,'xp+m flag:gr_met_athena']},
 {t:`Offer her an olive from your bag.`,r:'item:gr_bread|item:gr_figs',y:[`Athena\'s eyebrows rise. "A gift to my city\'s patron. Subtle, mortal. I accept." She places an olive on her tongue, thoughtfully.`,'xp+m mp+3 flag:gr_met_athena flag:gr_respect']},
 {t:`Boast that you know more about Greece than she does.`,y:[`The temple goes very quiet. Athena looks at you for a long moment. "Arachne said something like that," she says softly. The statue of Athena at your back casts a long, dark shadow. The owl blinks. Everything goes dark, and then spiderwebs. Your adventure ends here.`,'die flag:gr_hubris']} ]);

QS('gr3_test1','First Test: The Sphinx\'s Riddle','acropolis|🦉 ❓',
`"Three tests," says Athena. "The first is an old riddle, from Thebes. A sphinx once asked: What goes on four legs in the morning, on two legs at noon and on three legs in the evening?"`,
 ['A human being','A horse','The sun'],
 [`"Correct," says Athena, with the first real smile you have seen. "A baby crawls, an adult walks, an old man uses a stick. Oedipus answered it, and the Sphinx was defeated. The tale has a sad end, but the riddle is a good one."`,`"No," says Athena. "A horse has four legs all day. Think of a life, not a day."`,`"No. The sun does not walk. Think of the years of a life."`],'xp+l mp+3 bond:gr_glaux');
QS('gr3_test2','Second Test: Names of the Gods','acropolis|🏛️ 📜',
`"The second," says Athena. "My name in Latin, the tongue of Rome, is Minerva. Rome has taken most of us. If I am Minerva, then who is Poseidon, my uncle, whom I defeated in the contest for Athens?"`,
 ['Neptune','Mars','Mercury'],
 [`"Neptune," says Athena. "Rome gave my uncle a new name, and he did not thank them." She looks pleased. "You have been paying attention, mortal."`,`"Mars," says Athena, "is Ares, a god of war and not at all the same. Think of the sea."`,`"Mercury is Hermes. A swift fellow, not a sea-god. Think of the waves."`],'xp+l mp+3');
QS('gr3_test3','Third Test: Why Athens?','acropolis|🫒 🌊',
`"The third," says Athena. "In the beginning, Poseidon and I both wanted this city. He struck the rock and made a spring of salt water. I gave a tree. The citizens chose. What did I give them?"`,
 ['An olive tree','A golden spear','A vineyard'],
 [`"The olive," says Athena. "Food, oil, light and wood. It is still the heart of Greek life. And you are right. Gifts that keep giving are the best kind."`,`"No. A spear gives only one answer. A gift for a city has to feed it."`,`"Dionysus has the vines. Mine was a humbler tree, and a better gift."`],'xp+l mp+3 flag:gr_athena_tests');

S_('gr3_gift','Athena\'s Gifts','acropolis|🪶 🛡️',
`"You have passed," says Athena. "Wisdom is not knowing all the answers. It is knowing which questions matter. You will need three things for the road." She holds out her hand, and three objects appear in it: a branch of silver olive leaves, a bronze shield polished like a mirror and an owl feather the colour of dusk.\n"The olive is my sign of peace; show it to those who would hear reason. The shield will let you look at what you cannot look at. And Glaux will go with you. He is rude, but he is right more often than I am."`,[
 {t:`Accept all three gifts with thanks.`,y:[`The shield is lighter than it looks. The olive leaves tinkle softly. The owl lands on your shoulder, and says, quite distinctly, "Finally."`,'xp+l +gr_olive +gr_mirror +gr_owl_feather ally:gr_glaux flag:gr_athena_boon mp+4']},
 {t:`Ask Athena what the shield is for.`,y:[`"Medusa," says Athena, and something flickers across her face. "She will not be the monster you expect. But you must not look at her directly, whatever she says. Use the shield."`,'xp+l +gr_olive +gr_mirror +gr_owl_feather ally:gr_glaux flag:gr_athena_boon mp+3 flag:gr_knows_medusa']},
 {t:`Ask whether she will come with you.`,y:[`"The gods have rules about interfering," says Athena. "I may not carry your burden. But I may give you the tools, and a few useful words. Go to Delphi. Apollo will tell you what I may not."`,'xp+l +gr_olive +gr_mirror +gr_owl_feather ally:gr_glaux flag:gr_athena_boon mp+3']} ]);

S_('gr3_owl','Glaux Has Opinions','acropolis|🦉 🗣️',
`Glaux sits on a column and groomed a wing. "Several observations," he says. "One: you hold the shield wrong. Two: your friend Elena is the only person here with proper grammar. Three: I know all the best snacks in Athens, and I will tell you where they are for a modest fee."`,[
 {t:`Ask him which snacks.`,y:[`"Figs at the east gate. Honey cakes behind the temple of Hephaestus. Never eat the cheese at the Piraeus stall." You buy two cakes. They are glorious.`,'xp+m mp+3 hp+6 bond:gr_glaux']},
 {t:`Ask him about the road to Delphi.`,y:[`"Two days north-west, through the mountain pass. Bring a cloak. The Pythia dislikes bad manners, and so does everyone who works for her."`,'xp+m mp+2 bond:gr_glaux']},
 {t:`Politely hold the shield the right way.`,y:[`"Better," says Glaux, grudgingly. "A touch more to the left. There. Now you look almost wise."`,'xp+m mp+2 bond:gr_glaux']},
 {t:`Say goodbye to Athens, and set off for Delphi.`,y:[`The road winds north, the Acropolis shrinking behind you, until it is only a golden spark on the hill.`,'xp+m mp+3']} ]);
})();
