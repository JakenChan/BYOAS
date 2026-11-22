/* THE LADY OF CASUARINA HOUSE (500 edition) — extra evenings, Chapter I (nature), G (beach vigils), J (the eve), bigger house, banish ending, gate card */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const DUSK = 'flag:cg_saw_house?cg_duskask';

/* ---------- two more evenings in the city chapter ---------- */
S_('cg3_eve3','A Rainy Evening','hdb|🌧️ 🍜',
`It is pouring when you get home, a proper Singapore thunderstorm, the kind that turns the drains into rivers. {guardian} hands you a towel and a bowl of hot soup. Through the window, the block opposite is a grey wall of rain.\nAfter the soup, you lie on the floor and look at your notes. Every day you learn something new about the lady by the sea.`,[
 {t:`Make a list of everything you have found so far.`,r:'item:cg_notebook|item:cg_sketchbook|ally:cg_priya',y:[`Boat. Light. Song. A talisman, maybe. A time: 4:15. A name: Mei. You draw a neat box around each. The pattern looks clearer every day.`,'xp+m mp+3 flag:cg_knows_names day+1']},
 {t:`Video-call Priya and compare notes.`,r:'ally:cg_priya',y:[`Priya has colour-coded her notes. You have a stain of soup on yours. Together, you figure out that Mei's boat was probably red.`,'xp+m mp+3 bond:cg_priya day+1']},
 {t:`Listen to the rain and practise the lullaby.`,y:[`The rain keeps the beat. By the end of the evening, the song feels as if you have always known it.`,'xp+m mp+3 flag:cg_lullaby day+1']},
 {t:`Go to bed early and sleep.`,y:[`The rain drums on the window ledge until you fall asleep.`,'rest xp+s day+1']} ]);
S_('cg3_eve4','The Last Evening','hdb|🌆 📞',
`The last day of the holidays ends in a gold-and-pink sunset over the HDB blocks. From your window you can see a stripe of the sea far in the east, and planes sliding down toward Changi. {guardian} is hanging laundry on the bamboo poles.\nYour phone buzzes: a message from Uncle Lim. "The house is awake at dusk now. Don't go alone. Don't go unready. But do not wait too long, either."`,[
 {t:`Reply: "I am getting ready. Thank you, Uncle."`,y:[`A thumbs-up appears, then a second message: "Remember: boat, light, song, and a kind heart. Those are the real keys."`,'xp+m mp+3 day+1']},
 {t:`Ask {guardian} whether they believe in the house.`,y:[`{guardian} stops, a clothes peg in hand. "I believe in being kind to things I cannot see," {guardian} says. "It has never gone wrong yet." You smile.`,'xp+m mp+4 flag:cg_told_adult day+1']},
 {t:`Pack and unpack your bag three times.`,y:[`Torch, snacks, notebook, bell. Out, in, out, in. By the third time you know exactly where everything is.`,'xp+m mp+2 day+1']},
 {t:`Watch the planes until it is dark.`,y:[`One, two, three, four lights sliding down to the sea. Somewhere under those lights is a white house waiting for you.`,'xp+s mp+3 day+1']} ]);

/* ---------- the gate card: why the story is not over yet ---------- */
S_('cg_longer','Not Yet','hdb|⏳ 🌙',
`You check the calendar on the fridge. The fifteenth night of the seventh month is still some days away. The house will keep, and so will Aiman, because time moves slowly in Casuarina House. You still have time to learn a little more, help a little more and get a little braver.\nThe days are not wasted: each one is another chance to find a clue, make a friend or do a kind thing.`,[
 {t:`Use the time to look for more clues around Tampines.`,y:[`You wander the neighbourhood with open eyes. Someone always knows something.`,'xp+m mp+2']},
 {t:`Use the time to practise being brave.`,y:[`You walk the dark stairwell alone, on purpose. Then again. By the third time, it is almost boring.`,'xp+m mp+3']},
 {t:`Use the time to rest properly.`,y:[`A long nap, a long shower, a plate of chicken rice. Rest is part of any plan.`,'rest xp+s hp+6 mp+4']} ]);

/* =============== CHAPTER I: NATURE & COURAGE =============== */
G.chapter('cgI',{ story:'changi', n:'Chapter 11: The Green Island', sub:'Nature trails and quiet courage', ch:3, region:'cg_nature', art:'park|🌳 🦜', age:11, btn:'Go outdoors',
  text:`Singapore calls itself a "City in a Garden", and when you look carefully, it is true. Between the towers are mangroves, rainforests, wetlands and nature reserves full of life. Mr Tan says that the best way to practise courage is to meet the dark and the wild one small step at a time.\nTonight's ghost can wait one day. Today you walk where the trees are older than the buildings.`,
  beats:()=>G.mix(['cgI_open','cgI_buloh','cgI_mac','cgI_treetop','cgI_bukit','cgI_coney','cgI_labrador','cgI_storm','cgI_night'],16,{nocamp:true}).concat([DUSK]) });

S_('cgI_open','The Nature Club','park|🧭 🌿',
`Mr Tan has arranged a small outing for the Nature Club, and you are invited. At the school gate, a green bus waits. Priya, Hakim and a few other classmates are already inside, wearing caps and sunscreen. A ranger named Ms Farah sits at the front with a clipboard and a megaphone.\n"Today," she says, "we practise noticing."`,[
 {t:`Sit next to Priya and share your water.`,r:'ally:cg_priya',y:[`She is delighted. "I brought sunscreen for both of us," she says, and squirts a blob on your nose.`,'xp+m mp+3 bond:cg_priya']},
 {t:`Sit at the front and ask the ranger where we are going.`,c:'CHA 8 persuade',y:[`"A wetland, a rainforest, a hill and a storm," says Ms Farah cheerfully. "If we are lucky." She winks.`,'xp+m mp+2'],n:[`"You'll see," she says, mysteriously.`,'xp+s']},
 {t:`Look out of the window at the green going past.`,y:[`Palm trees, flyovers, a long line of rain trees dripping with ferns. Singapore is greener than you realised.`,'xp+s mp+3']} ]);
S_('cgI_buloh','Sungei Buloh Wetland Reserve','park|🦀 🐊',
`Sungei Buloh Wetland Reserve, in the north-west, was Singapore's first ASEAN Heritage Park. Boardwalks wind through mangroves, mudflats and ponds where migrating birds rest on their way from Siberia to Australia. Mudskippers pop out of the mud like tiny frogs. Ms Farah points at a log in the water. The log blinks.\n"Estuarine crocodile," she whispers. "Very shy. Please stay on the boardwalk."`,[
 {t:`Stand still and watch the crocodile.`,c:'WIS 8 survive',y:[`It slides under the water without a ripple. You learn that being quiet is a kind of power.`,'xp+m mp+4 skill:cg_calm'],n:[`It disappears before you see it properly, but the ranger is impressed you stayed quiet.`,'xp+m mp+2']},
 {t:`Look for mudskippers.`,y:[`Plop, plop, plop. You spot at least a dozen, flapping across the mud. One looks right at you.`,'xp+m mp+3']},
 {t:`Borrow binoculars and look for migratory birds.`,c:'WIS 8 survive',y:[`A whimbrel with a long curved bill, a pair of plovers, a sandpiper. Ms Farah beams. "Eagle eyes!"`,'xp+l mp+3'],n:[`You spot a pigeon. Ms Farah says gently that it counts.`,'xp+s mp+2']},
 {t:`Write about it in your notes.`,r:'item:cg_notebook|item:cg_sketchbook',y:[`"Rule one: stay on the path. Rule two: stay calm. Rule three: respect whoever lives here." It sounds like advice for a haunted house, too.`,'xp+m flag:cg_lesson_ghost mp+2']} ]);
S_('cgI_mac','MacRitchie Reservoir','park|🌲 💧',
`The MacRitchie Reservoir Park is a green lung in the middle of the island. A trail winds through secondary rainforest to the edge of a dark, still lake. Long-tailed macaques clatter across the boardwalk. A sign reads: "Do not feed the monkeys."\nOne macaque stares hard at the snack in your hand.`,[
 {t:`Hold the snack behind your back and walk calmly.`,c:'WIS 8 resist',y:[`The monkey scowls, then loses interest. The ranger gives you a thumbs-up.`,'xp+m mp+3'],n:[`The macaque snatches the bag and runs up a tree. Everyone laughs. Even the monkey looks pleased.`,'xp+s mp+2']},
 {t:`Put your snack safely into your bag.`,y:[`Zip, zip. Problem solved. The monkey wanders off, unimpressed.`,'xp+s mp+2']},
 {t:`Take a photo of the monkey from a distance.`,y:[`It strikes a pose on the railing. A very good model.`,'xp+m mp+3']},
 {t:`Stop at the lake and look at the water.`,y:[`The reservoir is flat and dark and perfectly still. You wonder how many things it remembers.`,'xp+m mp+3 flag:cg_lesson_ghost']} ]);
S_('cgI_treetop','The TreeTop Walk','park|🌉 😨',
`A long, narrow suspension bridge hangs between two hilltops, twenty-five metres above the forest floor. This is the HSBC TreeTop Walk, 250 metres of metal and mesh swaying gently in the wind. Between the planks, you can see straight down to the leaves. Hakim's face is slightly green.\n"Don't look down," says Ms Farah. "Look at the horizon."`,[
 {t:`Walk across slowly, eyes on the horizon.`,c:'WIS 9 resist',y:[`One step, then another. At the middle, the whole forest rolls out below like a green sea. You are scared, and you are walking. You realise that this is what brave means.`,'xp+l skill:cg_brave mp+5'],n:[`Halfway, your knees wobble, but you keep going and make it to the end. Brave is brave, wobbles and all.`,'xp+m mp+3']},
 {t:`Hold Hakim's hand and cross together.`,r:'ally:cg_hakim',y:[`"I'm fine," says Hakim, squeezing very hard. "Totally fine." By the end, you are both laughing too loudly.`,'xp+l mp+4 bond:cg_hakim flag:cg_kind']},
 {t:`Sing quietly as you walk.`,r:'flag:cg_lullaby',y:[`The lullaby helps your feet find a rhythm. Halfway across, you notice that you have stopped being afraid.`,'xp+m mp+4']},
 {t:`Take the ground path instead and meet the others at the end.`,y:[`The long way round is shady and quiet. No shame in it. Hakim waves from the bridge, a little jealous.`,'xp+s mp+2']} ]);
S_('cgI_bukit','Bukit Timah Nature Reserve','park|⛰️ 🌴',
`Bukit Timah Hill is the highest natural point in Singapore, 163.63 metres above sea level. A rough trail climbs through dense rainforest where tall dipterocarp trees stretch into the sky. This single hill has more kinds of trees than the whole of North America, says Ms Farah, who loves this fact.\nThe path is steep. The air is thick and hot. Your legs begin to burn.`,[
 {t:`Climb steadily, keeping a slow, even pace.`,c:'CON 8 endure',y:[`Step by step by step. At the summit, the forest rolls out below, and a breeze cools your face. A tiny gold-and-black bird pauses on a branch.`,'xp+l mp+4 hp-1'],n:[`You stop three times for water, but you reach the top. Everyone cheers.`,'xp+m hp-2 mp+2']},
 {t:`Stop at the Rest Hut and drink some water.`,y:[`A little hut with a bench and a view. You sit, sip and feel better.`,'xp+s hp+2 mp+3']},
 {t:`Look for the flying lemur in the trees.`,c:'WIS 9 survive',y:[`There! A mottled grey shape clinging to a trunk, perfectly camouflaged. It blinks at you with enormous eyes.`,'xp+l mp+4'],n:[`Trees, trees, trees. Somewhere in them is a lemur, no doubt.`,'xp+s mp+2']},
 {t:`Help Hakim, who is out of breath.`,r:'ally:cg_hakim',y:[`You share your water and slow down. "Thanks," he gasps. "I'm better at football than hills." You reach the top together.`,'xp+m bond:cg_hakim mp+3 flag:cg_kind']} ]);
S_('cgI_coney','Coney Island Park','park|🌲 🌬️',
`Coney Island, off the coast of Punggol, is a rustic nature park of casuarina trees, coastal forest and long, quiet beaches. The wind whispers through the casuarina needles with a sound like waves. You recognise it at once: it is the sound you heard in Changi.\nA breeze rustles the trees, and you wonder if the casuarinas around the house are speaking the same language.`,[
 {t:`Walk under the casuarinas and listen.`,c:'WIS 8 spirit',y:[`The needles hiss softly. Under the whispering, you hear something almost like a tune. You hold very still, and the tune is gone. But you feel less afraid of the sound.`,'xp+l mp+4 flag:cg_lesson_ghost'],n:[`Just wind and needles. A lovely sound anyway.`,'xp+m mp+3']},
 {t:`Collect a few casuarina cones.`,y:[`Small, spiky, brown. They look like tiny hedgehogs. You put one in your pocket for luck.`,'xp+s mp+2 +cg_cone']},
 {t:`Walk along the beach with Priya.`,r:'ally:cg_priya',y:[`You skim stones and talk about everything but ghosts. It is a very good half hour.`,'xp+m mp+4 bond:cg_priya']},
 {t:`Rest on the sand and listen to the waves.`,y:[`Salt, sun, quiet. A hornbill flies over.`,'xp+s hp+3 mp+4']} ].map(o=>{ if(/\+cg_cone/.test(o.y[1])) o.y[1]=o.y[1].replace(' +cg_cone',''); return o; }));
S_('cgI_labrador','Labrador Nature Reserve','park|🏝️ 🌿',
`On Singapore's southern coast, Labrador Nature Reserve has a seaside boardwalk, a rocky shore and old Second World War gun emplacements hidden in the greenery. From the cliff, you can see ships queued in the harbour like beads on a string.\nA tunnel of an old fort smells of damp stone. Ms Farah says: "Every place has stories. The trick is to listen."`,[
 {t:`Climb into the old gun emplacement and look around.`,c:'DEX 8 sneak',y:[`Dim, cool and echoey. You find a faded wall carving: a ship, a date and the letter M. Ms Farah says nobody knows who made it.`,'xp+m mp+3'],n:[`Too dark, too many cobwebs. You back out gracefully.`,'xp+s']},
 {t:`Walk along the seaside boardwalk and spot ships.`,y:[`Container ships, tankers, a tiny tugboat darting between them. Singapore is one of the busiest ports in the world.`,'xp+m mp+3']},
 {t:`Look for hermit crabs on the rocky shore.`,c:'WIS 8 survive',y:[`Tiny crabs in borrowed shells scuttle across the rocks. One has a bottle cap for a home.`,'xp+m mp+3'],n:[`The tide is high and the rocks are slippery. You find two crabs and a clam.`,'xp+s mp+2']} ]);
S_('cgI_storm','Sumatra Squall','park|⛈️ 🌩️',
`On the way back, the sky goes black. The wind picks up and then the rain slams down: a Sumatra squall, one of Singapore's famous sudden storms, swept over the strait from Indonesia. Thunder cracks. Lightning forks across the sky. The group scurries into a shelter.\nIn the dim light, the smallest girl in the group begins to cry.`,[
 {t:`Sit next to her and tell her a story.`,c:'CHA 8 persuade',y:[`You tell her about the little paper boat, the lantern and the lady by the sea. By the end, she is listening so hard she forgets the thunder.`,'xp+l mp+4 flag:cg_kind'],n:[`Your story gets muddled, but she laughs at the funny parts, and that is enough.`,'xp+m mp+2 flag:cg_kind']},
 {t:`Count the seconds between lightning and thunder.`,y:[`One-Mississippi, two-Mississippi. Seven seconds: the storm is about two kilometres away. You show the others. Counting makes the storm smaller.`,'xp+m mp+3 skill:cg_calm']},
 {t:`Hum the lullaby under your breath.`,r:'flag:cg_lullaby',y:[`The shelter grows calm as you hum. By the end, three other children have joined in.`,'xp+l mp+5 flag:cg_kind']},
 {t:`Hold the umbrella over everybody.`,r:'item:cg_umbrella',y:[`It is not big enough, but it is a start. Soon you are all squashed together, laughing and damp.`,'xp+m mp+3 flag:cg_kind']},
 {t:`Pull your cap down and wait it out.`,y:[`Twenty minutes later, the rain stops, the sky clears and a rainbow bends over the forest.`,'xp+s mp+2']} ]);
S_('cgI_night','The Night Walk','park|🌙 🦉',
`Ms Farah has one more treat: a short night walk in the reserve, with torches. The forest at night is a different world: crickets, frogs, an owl calling "hoo-hoo", beetles clicking like tiny clocks. Fireflies drift between the trees like lost stars.\n"Switch off your torches," says Ms Farah, "and let your eyes adjust."`,[
 {t:`Switch off your torch and let your eyes adjust.`,c:'WIS 8 resist',y:[`At first, only black. Then shapes: trunks, ferns, the pale arc of the path. The forest is alive, and the dark is full of friendly things.`,'xp+l skill:cg_brave mp+5'],n:[`You keep one finger on the switch the whole time. It is alright.`,'xp+m mp+3']},
 {t:`Follow the fireflies.`,y:[`Little green sparks, blinking on and off. You think of paper boats floating on a pond.`,'xp+m mp+4']},
 {t:`Listen for the owl.`,c:'WIS 8 survive',y:[`"Hoo-hoo." It answers when you whisper back. A small owl lands on a branch and stares.`,'xp+m mp+4'],n:[`Frogs, mostly. And one very hopeful cricket.`,'xp+s mp+2']},
 {t:`Keep close to the group and walk steadily.`,y:[`The night is full of sounds, and none of them are angry. You walk home through the dark with a new idea: it is not the dark that is scary, only not knowing it.`,'xp+m mp+3']} ]);

/* =============== CHAPTER G: BEACH VIGILS =============== */
G.chapter('cgG',{ story:'changi', n:'Chapter 12: Dusk at the Beach', sub:'Three evenings of watching', ch:3, region:'cg_changi', art:'beach|🌅 🌴', age:11, btn:'Go to the beach',
  text:`Uncle Lim has an idea. "You cannot learn the house from books," he says, polishing his brass lantern. "You must sit with it. Come at dusk, three evenings, and watch. Do not go in. Only watch, and listen, and be polite."\nYou pack a flask of barley water and take the early bus to Changi Village.`,
  beats:()=>G.mix(['cgG_open','cgG_boardwalk','cgG_vigil1','cgG_fisher','cgG_ferry','cgG_vigil2','cgG_planes','cgG_vigil3','cgG_whisper'],12,{nocamp:true}).concat([DUSK]) });

S_('cgG_open',`Uncle Lim's Plan`,'beach|🏮 🪑',
`Uncle Lim is already at his usual table at the Changi Village Hawker Centre, nursing a cup of kopi-o. He taps the table. "A house like that does not appear for just anyone. It answers to patience." He slides over a plate of nasi lemak. "Eat first. Then we walk."\nThe sambal is hot, the coconut rice is soft, and the fried chicken is perfect.`,[
 {t:`Eat the nasi lemak and listen to his advice.`,y:[`"First," says Uncle Lim, ticking off fingers, "never lie to a ghost. Second, never take what you cannot give back. Third, always leave the way you came." You nod, mouth full.`,'xp+m hp+5 mp+3 flag:cg_lesson_ghost']},
 {t:`Ask him how he first saw the house.`,c:'CHA 8 persuade',y:[`"Fifty years ago," he says quietly. "I was a boy, like you, and I was lost in the mist. A lady in a white blouse walked me to the road, and then the house was gone." He taps his lantern. "She is not wicked. Only very lonely."`,'xp+l flag:cg_knows_names mp+3'],n:[`He smiles and sips his coffee. "Another day, child."`,'xp+s']},
 {t:`Pay for the meal ($4).`,r:'gold:4',y:[`"Good manners," says Uncle Lim, pleased. "That is the first thing she will notice."`,'gold-4 xp+m mp+3 flag:cg_respect']} ]);
S_('cgG_boardwalk','Changi Boardwalk','beach|🌊 🪵',
`The Changi Point Coastal Walk is a long timber boardwalk along the north-east shore, with a view across the Johor Strait to Malaysia. Fishing boats bob at their moorings. A line of old bungalows sits behind the trees. A breeze carries salt and the smell of the sea.\nAt the far end, the boardwalk meets the beach where the casuarinas begin.`,[
 {t:`Walk to the end and look at the beach.`,y:[`A long arc of sand, a thin line of surf and, between the trees, a hint of white that is not quite a wall. You blink and it is gone.`,'xp+m mp+3 flag:cg_saw_house']},
 {t:`Chat with the fishermen.`,c:'CHA 8 persuade',y:[`"Ghost?" says one with a laugh. "Aiyah, everybody in Changi has a ghost story." Then, quietly: "But the lady is not one of the bad ones."`,'xp+m mp+2 flag:cg_lesson_ghost'],n:[`They are busy with their lines and just wave.`,'xp+s']},
 {t:`Sit on a bench and watch the boats.`,y:[`Little blue-and-white bumboats at rest. A heron on a post. Planes in the distance.`,'xp+s hp+2 mp+3']} ]);
S_('cgG_vigil1','The First Vigil','beach|🌅 👀',
`As the sun sinks, you and Uncle Lim sit on the sand at the edge of the casuarinas. The mist comes up as the light goes. And there it is, faint at first, then clear: the white house, with its black beams and its veranda, among the trees. A tiny lamp glows in one window.\n"Remember," Uncle Lim whispers, "we only watch."`,[
 {t:`Sit quietly and watch.`,y:[`The house is silent and still. A figure rocks on the veranda. After an hour, the mist folds up and the house is gone. You feel something between fear and wonder.`,'xp+l mp+3 flag:cg_vigil1 flag:cg_saw_house']},
 {t:`Hum the lullaby very softly.`,r:'flag:cg_lullaby',y:[`The rocking figure stops. The faint music-box note across the garden stops too, as though someone is listening. A second later, the tune resumes, gentler.`,'xp+l mp+4 flag:cg_vigil1 flag:cg_saw_house flag:cg_gate_trust']},
 {t:`Leave a small offering at the edge of the trees.`,r:'item:cg_oranges|item:cg_kueh',y:[`You set it neatly on a flat stone, like the aunties do. When you look back a minute later, it is gone. Not taken. Accepted.`,'xp+l mp+3 flag:cg_vigil1 flag:cg_saw_house flag:cg_respect']},
 {t:`Take a deep breath and head home.`,y:[`The dark is falling, and Uncle Lim agrees. You will come back.`,'xp+m mp+2 flag:cg_saw_house']} ]);
S_('cgG_fisher','The Old Fisherman','pier|🎣 🌙',
`The next day, at the jetty, you meet an old fisherman mending his net. His skin is the colour of teak and his hands are as gnarled as roots. "Uncle Lim sent you?" he asks, without looking up. "Sit."\nHe says the sea has a memory, and that if you listen to the old fishermen, you will hear it.`,[
 {t:`Ask about the storm of 1959.`,c:'CHA 8 persuade',y:[`"A wild night," he says. "The wind took six boats. One was Ah Hock's, Mei's father's. He tied a lantern to the mast for his wife to see. They never found the boat. But the lantern, people say, the lantern burned a week after, drifting."`,'xp+l mp+3 flag:cg_knows_storm flag:cg_knows_names'],n:[`"Long story," he says, and returns to his net. But he mutters: "A lantern on the mast, yes."`,'xp+m flag:cg_knows_storm']},
 {t:`Help him mend the net.`,c:'DEX 8 craft',y:[`Loop, pull, knot. He shows you the fisherman's knot. "Good fingers," he says, and gives you a little sailor's knot-bracelet.`,'xp+m mp+3 flag:cg_kind'],n:[`You tangle yourself up in the net. He laughs until he coughs, then untangles you gently.`,'xp+s mp+2']},
 {t:`Give him your drink.`,r:'item:cg_water|item:cg_teh',y:[`He takes it with a nod. "A good child. Remember: when the sea takes, the sea also gives. The trick is to wait."`,'xp+m mp+3 flag:cg_kind']},
 {t:`Watch the sun go down together.`,y:[`The sea goes silver, then gold, then dark. He hums a tune that you've heard before, but cannot place.`,'xp+m mp+4']} ]);
S_('cgG_ferry','Changi Point Ferry Terminal','pier|⛴️ 🚤',
`At the Changi Point Ferry Terminal, bumboats carry passengers to Pulau Ubin: twelve people per boat, and the boat leaves only when it is full. A queue of cyclists with bicycles waits in the sun. An old sign says: "Fare $4. No refund if you fall in."\nA boatman in a faded blue shirt is calling out "Ubin! Ubin! Ubin!"`,[
 {t:`Watch the boats come and go.`,y:[`Little wooden boats with big outboard motors, slapping through the chop. Each time one leaves, a flock of gulls sweeps up.`,'xp+m mp+3']},
 {t:`Chat with the boatman about the old days.`,c:'CHA 8 persuade',y:[`"My father ferried people to Ubin for fifty years," he says. "He always said a boat should carry a light. Not for seeing, for being seen." He smiles. "That is how people find you."`,'xp+l mp+3 flag:cg_lesson_ghost'],n:[`"Full boat, full boat!" he shouts, and moves on.`,'xp+s']},
 {t:`Have an ice-cold sugar-cane juice ($2).`,r:'gold:2',y:[`Sweet, grassy and freezing. A wonderful treat on a hot day.`,'gold-2 hp+3 mp+4 xp+s']} ]);
S_('cgG_vigil2','The Second Vigil','beach|🌇 🪢',
`The second dusk is clearer than the first. The house stands among the trees with its black beams glowing in the half-light. The garden is full of paper boats. On the old rope swing, a small shape sits, faintly see-through, swaying gently, with her bare feet trailing in the grass.\nIt is Mei. You are sure of it. She is humming.`,[
 {t:`Wave to her very gently.`,c:'WIS 8 spirit',y:[`She stops swinging. She looks right at you. She lifts one hand, a small, shy wave. Then the mist rolls in and she is gone.`,'xp+xl mp+5 flag:cg_vigil2 flag:cg_saw_house flag:cg_dream_mei'.replace('xp+xl','xp+l')],n:[`The swing keeps swaying but you cannot tell if she saw you. Your heart is thumping.`,'xp+m mp+2 flag:cg_vigil2 flag:cg_saw_house']},
 {t:`Hum the lullaby with her.`,r:'flag:cg_lullaby',y:[`The two tunes weave together over the sand. Mei's swing slows. She tilts her head. Far away, something like a sob and a laugh.`,'xp+l mp+5 flag:cg_vigil2 flag:cg_saw_house flag:cg_gate_trust']},
 {t:`Hold up a toy boat if you have one.`,r:'item:cg_replica|item:cg_paperboat',y:[`Mei sits bolt upright on the swing. She points at the boat in your hands. Then she presses her palms together, as if to say "please". You nod, and promise.`,'xp+l mp+4 flag:cg_vigil2 flag:cg_saw_house flag:cg_dream_mei']},
 {t:`Stay quietly where you are.`,y:[`Two hours go by. Nothing else happens. But you notice that you are no longer afraid.`,'xp+m mp+3 flag:cg_vigil2 flag:cg_saw_house']} ]);
S_('cgG_planes','Counting Planes','beach|✈️ 🌤️',
`While you wait for dusk, you notice that every few minutes a plane glides low over the beach on its way to land at Changi Airport, its landing lights glowing like a string of pearls. Uncle Lim says there are over a thousand flights a week. A boy on the sand counts them aloud.\nCounting is calming. You decide to count too.`,[
 {t:`Count planes with the boy.`,y:[`One, two, three. By twelve you've made a new friend, and by twenty you've forgotten to be nervous.`,'xp+m mp+4']},
 {t:`Guess which country each plane has come from.`,c:'INT 8 lore',y:[`Tail colours, logos: Singapore Airlines, Qantas, Emirates. You get nine out of ten right. Uncle Lim is impressed.`,'xp+m mp+3'],n:[`You guess, wrong, five times in a row. The boy laughs and says it is hard.`,'xp+s mp+2']},
 {t:`Close your eyes and listen to the roar.`,c:'WIS 8 resist',y:[`A deep rumble rolls over the beach, then fades. You discover that big sounds can be soothing.`,'xp+m mp+4 skill:cg_calm'],n:[`The noise makes your ears ring. But it is over soon.`,'xp+s mp+1']} ]);
S_('cgG_vigil3','The Third Vigil','beach|🌌 🏮',
`On the third dusk, the lantern is lit. A single brass lantern in an upstairs window, glowing steadily gold. The house is no longer faint: every black beam, every shutter is perfectly clear. The garden gate stands slightly open, as if inviting someone.\nIn the rocking chair on the veranda, a tall figure in a white blouse looks out toward the sea.`,[
 {t:`Stand and bow politely to the lady.`,y:[`You bow from the sand. A long moment. Then, from far off, the faintest nod. Uncle Lim whispers, "She has seen you."`,'xp+l mp+4 flag:cg_vigil3 flag:cg_saw_house flag:cg_respect']},
 {t:`Sing the lullaby as loud as you dare.`,r:'flag:cg_lullaby',c:'CHA 8 perform',y:[`Your voice carries over the sand. In the chair, the figure sits up. The whole house seems to lean toward you, listening. When you finish, the lantern flares and a long, soft sigh drifts over the beach.`,'xp+l mp+5 flag:cg_vigil3 flag:cg_saw_house flag:cg_gate_trust'],n:[`Your voice cracks, but you finish. A small sad smile glimmers from the veranda.`,'xp+m mp+2 flag:cg_vigil3 flag:cg_saw_house']},
 {t:`Tell her quietly that you will come back to help.`,y:[`"I will come soon," you say, as clearly as you can. "I promise." The wind whispers through the trees. You are sure it replies.`,'xp+l mp+4 flag:cg_vigil3 flag:cg_saw_house flag:cg_gate_trust']},
 {t:`Head home quietly with Uncle Lim.`,y:[`Walking back along the beach, you feel the house watching your back, kindly now.`,'xp+m mp+3 flag:cg_saw_house']} ]);
S_('cgG_whisper','A Whisper in the Wind','beach|🌬️ 🏮',
`As you leave the beach, a breeze curls through the casuarinas and a voice comes with it, very faint, like a voice in a seashell: "Please... bring... Mei's boat."\nUncle Lim stops, cocks his head and nods. "She has asked you. That is a very rare thing. She does not ask many."`,[
 {t:`Answer aloud: "I will, Madam."`,y:[`The wind sighs, and the needles settle. You feel as if you have signed an invisible promise.`,'xp+l mp+4 flag:cg_gate_trust flag:cg_respect']},
 {t:`Ask Uncle Lim what he thinks you should do.`,y:[`"Be ready," he says. "Not early, not late. Ready. You will know." He sets his lantern in the sand. "I will be here whenever you need me."`,'xp+m mp+3 flag:cg_support']},
 {t:`Write down the whisper word for word.`,r:'item:cg_notebook|item:cg_sketchbook',y:[`"Please bring Mei's boat." Seven words. You underline them twice.`,'xp+m mp+2 flag:cg_knows_names']} ]);

/* =============== CHAPTER J: THE EVE =============== */
G.chapter('cgJ',{ story:'changi', n:'Chapter 13: The Eve', sub:'The night before', ch:4, region:'cg_tampines', art:'hdb|🏮 🌙', age:11, btn:'Prepare',
  text:`The seventh month is nearly over. Tomorrow is the fifteenth night, when the gates between worlds stand open wide. In your neighbourhood, long strings of red lanterns hang between lamp-posts, and the smell of burning joss paper drifts across the blocks.\nYou have gathered clues, made friends, learned old songs and visited half of Singapore. Tonight is the night before.`,
  beats:()=>['cgJ_open'].concat(G.mix(['cgJ_aunties','cgJ_friends','cgJ_shop','cgJ_ahma','cgJ_rest'],10,{nocamp:true}),['!gate','cgJ_night']) });

S_('cgJ_open','The Night Before','hdb|📋 🎒',
S => { const has = id => S.items[id]>0; const tick = b => b?'✔':'✘';
  return `You lay out everything on your bed.\n${tick(has('cg_boat')||has('cg_replica'))} A boat for Mei.  ${tick(has('cg_lantern'))} A lantern.  ${tick(S.flags.cg_lullaby)} The lullaby.  ${tick(has('cg_oranges')||has('cg_kueh'))} An offering.  ${tick(has('cg_charm')||has('cg_talisman'))} A charm or talisman.  ${tick(has('cg_flashlight')||has('cg_penlight')||has('cg_glowband'))} A light.\nYou may not have all of them. It is alright. Courage, kindness and manners count for a lot.`; },[
 {t:`Pack carefully, checking every item twice.`,y:[`Everything goes into the bag in the right order, with the fragile things on top. A calm, proper feeling comes over you.`,'xp+m mp+3']},
 {t:`Close your eyes and picture the whole plan.`,y:[`Gate, garden, veranda, stairs, nursery, library, the lady. You run through it like a play.`,'xp+m mp+3 flag:cg_knows_time']},
 {t:`Tell yourself that it is going to be alright.`,y:[`Three deep breaths. You feel a little taller.`,'xp+s mp+4']} ]);
S_('cgJ_aunties','The Neighbourhood Burners','void|🔥 🏮',
`Downstairs, the whole block is out. Aunties are burning joss paper in tall metal bins, while uncles set out plates of oranges, sweets and cups of tea. A long table holds a feast for the unseen: rice, roast duck, cakes and a bowl of fruit. Children are told to stay back from the flames and keep their voices low.\nAuntie Choo spots you and waves you over.`,[
 {t:`Help carry plates to the offering table.`,y:[`You carry bowls and chopsticks. Auntie Choo beams. "Such a helpful child!" She puts a small packet of kueh in your hand. "For you. Take. Don't refuse."`,'xp+m mp+3 +cg_kueh flag:cg_kind']},
 {t:`Ask Auntie Choo whether the stories about the seventh month are true.`,c:'CHA 8 persuade',y:[`"I don't know," she says honestly. "But I know that being polite to everyone is never wrong." She hands you a lucky red packet with a two-dollar note.`,'xp+m gold+2 mp+3'],n:[`"Eat first, ask later," she says, handing you a pastry.`,'xp+s hp+2']},
 {t:`Stand back and watch the flames.`,y:[`The paper curls and glows and floats up as ash. The whole block seems to hold its breath, then relax. It is a beautiful, gentle thing.`,'xp+m mp+3']} ]);
S_('cgJ_friends','The Group Chat','hdb|📱 💬',
`Your phone is buzzing with messages. The class group chat has a hundred and twenty new messages. Priya has written a very long plan. Hakim has sent seven football emojis. Jia Hui has written: "Tell me if you see anything. I mean it."\nThey cannot all come. But everyone wants to say something.`,[
 {t:`Reply to everyone with a quick "thank you".`,y:[`A flurry of thumbs-up. Someone sends a picture of a cat in a hat. It makes you smile.`,'xp+s mp+3']},
 {t:`Ask Priya to be your "mission control" on the phone.`,r:'ally:cg_priya',y:[`"Mission control is online," she types. "Please send hourly reports. And if anything happens, say the word 'pineapple'." You promise.`,'xp+m mp+3 bond:cg_priya']},
 {t:`Ask Hakim to stand guard at the beach edge with Uncle Lim.`,r:'ally:cg_hakim',y:[`"On it," he says. "Bring football whistle?" You do not say no. A whistle might be useful.`,'xp+m mp+3 bond:cg_hakim']},
 {t:`Turn off your phone and get some rest.`,y:[`Silence. The whole room settles. You feel better than you have all week.`,'xp+s mp+4 hp+3']} ]);
S_('cgJ_shop','Last-Minute Shopping','mall|🛒 💡',
`The neighbourhood mall is closing soon, and the shops are doing a rush of last-minute sales. In the supermarket, you stand in front of a shelf of batteries, oranges, torches and plasters. You have a little pocket money to spend, if you want.\nA cashier in a red apron waves from the till.`,[
 {t:`Buy a bag of oranges ($3).`,r:'gold:3',y:[`A bag of fat, glossy oranges, the traditional gift for guests.`,'gold-3 +cg_oranges xp+s mp+2']},
 {t:`Buy a bottle of water ($1).`,r:'gold:1',y:[`Cold and heavy. A simple, useful thing.`,'gold-1 +cg_water xp+s']},
 {t:`Buy a tube of Tiger Balm ($3).`,r:'gold:3',y:[`Minty, sharp and strong. It helps you stay awake and calm.`,'gold-3 +cg_balm xp+s']},
 {t:`Just browse and leave.`,y:[`You wander the aisles for a while, sniffing candles and testing pens.`,'xp+s mp+2']} ].map(o=>o));
S_('cgJ_ahma','A Talk at the Table','hdb|🍵 🌙',
`Late in the evening, {guardian} sits across from you at the kitchen table with two mugs of warm milk. The fan whirs. The clock ticks. "Tomorrow you will go to Changi," says {guardian}, not asking. "I will not stop you. But I want you to know something."`,[
 {t:`Listen carefully.`,y:[`"Being brave," says {guardian}, "is not about being unafraid. It is about being kind while you are afraid. That is the thing I want you to remember." You nod, and drink your milk.`,'xp+l mp+5 flag:cg_told_adult flag:cg_support']},
 {t:`Tell {guardian} the whole plan.`,y:[`{guardian} listens to every word and, at the end, simply says: "I will be waiting on the sand. I will not go in. But I will be there." You hug them hard.`,'xp+l mp+6 flag:cg_ahma_waits flag:cg_told_adult flag:cg_support']},
 {t:`Say goodnight and go to bed.`,y:[`{guardian} kisses the top of your head. "Sleep well."`,'xp+s mp+3']} ]);
S_('cgJ_rest','The Last Sleep','hdb|😴 🌛',
`The lights go out. You lie in bed, listening to the lift hum and the distant trains, and the beat of your own heart. The paper boat, if you have it, sits on the windowsill. The lullaby runs softly through your head. Somewhere, a very long way east, a lantern is lit.\nYou are scared, and you are ready, and both are true.`,[
 {t:`Say a wish for Aiman, for Mei and for Madam Soo.`,y:[`You wish for everyone to get home safe, however far they have to travel.`,'xp+m mp+5 rest']},
 {t:`Hum the lullaby until you fall asleep.`,r:'flag:cg_lullaby',y:[`Humming, humming, humming. You fall asleep on the third round.`,'xp+m mp+5 hp+5 rest']},
 {t:`Stare at the ceiling and count your breaths.`,y:[`One, two, three. By fifty, you are asleep.`,'xp+m mp+4 rest']} ]);
S_('cgJ_night','The Fifteenth Night','hdb|🌆 🏮',
`The next afternoon, the sky above Tampines is orange and violet. The neighbourhood is ready: lanterns, burners, a getai stage with a glittery sign. Everywhere, aunties are laying out offerings. The air smells of smoke and frangipani.\nYou take the bus to Changi, past a hundred houses with candles at the gate. When you arrive at the beach, the sun is a thin red line, and the casuarinas are whispering.`,[
 {t:`Hug {guardian} goodbye and walk down to the beach.`,y:[`The sand is cool. The sea is quiet. You adjust your bag and take a deep breath.`,'xp+l mp+4 tod:dusk']},
 {t:`Take a quiet moment on your own before you go.`,y:[`You stand at the water's edge and say thank you to everyone who has helped you. A small wave touches your shoe, as if in reply.`,'xp+m mp+5 tod:dusk']},
 {t:`Check your gear, take a deep breath and go.`,y:[`Torch, lantern, charm, snacks. Whatever you have, it will have to do.`,'xp+m mp+2 tod:dusk']} ]);
/* fix: dynamic gold text for the shop (kept as a function so it shows live gold) */
G.scenes.cgJ_shop.text = S => `The neighbourhood mall is closing soon, and the shops are doing a rush of last-minute sales. In the supermarket, you stand in front of a shelf of batteries, oranges, torches and plasters. You have $${S.gold} to spend, if you want.\nA cashier in a red apron waves from the till.`;

/* =============== BIGGER HOUSE =============== */
const house = G.chapters.cg4;
house.sub = 'The night the gates are open';
house.text = `The gates between the worlds are wide open tonight. Across Singapore, aunties are burning joss paper at the proper burners, and neighbourhood getai stages blare cheerful songs to keep everyone company. Out at Changi Beach, the sea breeze is warm and the sky is purple and clear.\nSomewhere among the casuarina trees, a white house is waking up. A classmate is asleep inside it. And a lady who has waited sixty years is waiting a little longer.`;
house.beats = ['cg4_beach','cg4_gate','cg4_garden','~enc','cg4_boathouse','cg4_veranda','cg4_hall','cg4_dining','~enc','cg4_kitchen','cg4_stairs','~enc','cg4_nursery','cg4_attic','~enc','cg4_library','cg4_confront1','cg4_confront2'];

S_('cg4_boathouse','The Old Boathouse','pier|🛖 ⛵',
`A narrow path leads from the garden to the sea wall. At the bottom is a tumbledown boathouse, black with age, its doors hanging open. A rowing boat lies on its side. Old nets, floats and oars hang from hooks. On the beam above, an iron hook is empty. Whatever hung there is long gone.\nThe tide whispers against the stones. Beyond the wall, the real sea breathes in the dark.`,[
 {t:`Search the boathouse carefully.`,c:'INT 8 craft',y:[`Under a pile of nets, a small tin box. Inside: a handful of brass fishing hooks, a child's hair ribbon and a faded paper with a drawing of a red boat and the words "For Mei, from Papa".`,'xp+l mp+3 flag:cg_knows_names flag:cg_lesson_ghost'],n:[`Cobwebs, rusty hooks and one very surprised crab.`,'xp+s']},
 {t:`Set a paper boat on the water by the steps.`,r:'item:cg_paperboat',y:[`The paper boat bobs on the dark water, then drifts out past the wall, glowing. From the house, a very faint "thank you".`,'-cg_paperboat xp+l mp+4 flag:cg_gate_trust']},
 {t:`Light your torch and check the sea wall.`,r:'item:cg_flashlight|item:cg_penlight',y:[`The beam sweeps over weeds, stone and old iron rings. It is only a boathouse. A sad, quiet one.`,'xp+m mp+2']},
 {t:`Go back to the path and carry on.`,y:[`You nod politely to the old boat and return to the path.`,'xp+s']} ]);
S_('cg4_dining','The Dining Room','haunt|🍽️ 🕯️',
`A long dining table, set for ten, stretches down the middle of the room. Every plate is clean. Every glass is full of something that glows faintly blue. At the head sits a high-backed chair with a place card: "Mama". At the foot, a small chair with a cushion and a cup shaped like a rabbit. The place card reads "Mei".\nSix candles burn without flickering. The air smells of coconut and pandan.`,[
 {t:`Place your offering of kueh on Mei's plate.`,r:'item:cg_kueh',y:[`Nine pastel layers on a white plate. The blue light in the glasses brightens. From far away, a tiny voice: "Ang ku kueh! My favourite!"`,'-cg_kueh xp+l mp+4 flag:cg_gave_kueh flag:cg_respect']},
 {t:`Pour yourself a polite sip of the glowing drink.`,hide:true,r:'!sv:sipped',y:[`It is cold and sweet and tastes of rain. Your head feels light. You decide this is probably not a good idea, and put it down.`,'hp-1 mp-1 xp+s svflag:sipped stayc']},
 {t:`Study the place cards and the table.`,c:'INT 8 lore',y:[`The china is blue-and-white Peranakan ware with tiny flowers. A real family used to eat here, laughing, passing dishes. It makes the empty chairs sadder.`,'xp+m flag:cg_knows_peranakan mp+2'],n:[`Plates, forks, candles. Everything is very neat and very empty.`,'xp+s']},
 {t:`Straighten the chairs politely and move on.`,y:[`You tuck the chairs in neatly. A very faint sigh of approval drifts through the room.`,'xp+m mp+3 flag:cg_respect']} ]);
S_('cg4_kitchen','The Kitchen','haunt|🍳 🔥',
`The kitchen is long and dark, with a black iron stove, a stone mortar, and rows of old copper pots on hooks. On the stove a kettle is whistling, though no flame is lit. A shelf of jars holds spices, dried shrimp and something that might once have been sambal. On the table, a half-finished tray of kueh sits under a muslin cloth, as if the cook has only stepped out.\nThe whistling kettle sounds almost like a lullaby.`,[
 {t:`Take the kettle off the stove and quieten it.`,y:[`It stops with a sigh. The room feels easier. Somewhere upstairs, a small voice says "Thank you".`,'xp+m mp+3 flag:cg_respect']},
 {t:`Hum along with the kettle.`,r:'flag:cg_lullaby',y:[`The kettle joins in, a thin, whistling harmony. The jars on the shelf tremble, then settle. You feel the whole house relax a little.`,'xp+l mp+4 flag:cg_gate_trust']},
 {t:`Look under the muslin cloth.`,c:'DEX 8 sneak',y:[`A tray of pale-pink kueh, perfectly preserved. A little card: "For the children who come to visit." One is for you.`,'xp+m hp+4 mp+3 +cg_pandan'.replace(' +cg_pandan','')],n:[`The cloth slips and the smell of old coconut puffs out. You sneeze loudly.`,'xp+s mp-1']},
 {t:`Search the shelves for anything useful.`,c:'INT 8 craft',y:[`Behind the jars you find a small oil lamp, filled and trimmed. It still works. A warm yellow light fills the kitchen.`,'xp+m mp+3 +cg_glowband'],n:[`Dust, jars and a bag of expired rice.`,'xp+s']} ]);
S_('cg4_attic','The Attic','haunt|🕸️ 📦',
`A narrow staircase leads to the attic, a low, slanting space under the roof. Trunks, hatboxes and cardboard crates fill every corner. A round window faces the sea. Dust floats in the moonlight like slow snow. In the middle, an old gramophone sits on a stool, its horn tilted toward the window.\nYou hear a very soft crackle, like the start of a song.`,[
 {t:`Look through the trunks for clues.`,c:'INT 9 lore',y:[`A trunk of children's clothes, a baby's silver rattle and a photograph album. In it, over and over, a smiling little girl with pigtails and a boat. On the last page, a letter in Madam Soo's neat handwriting: "I will wait for you, my darling, for as long as it takes."`,'xp+l mp+3 flag:cg_knows_names flag:cg_lesson_ghost'],n:[`Hats, coats and a very surprised moth.`,'xp+s']},
 {t:`Wind up the gramophone.`,y:[`You turn the crank. The record spins. The lullaby crackles into the air, thin and old and very sweet. In the rooms below, something sighs, and the whole house seems to lean toward the music.`,'xp+l mp+4 flag:cg_lullaby flag:cg_gate_trust']},
 {t:`Open the round window and look at the sea.`,y:[`Cool salt air. Far out on the water, a small light is moving. You wonder if someone is still sailing.`,'xp+m mp+3']},
 {t:`Go back downstairs carefully.`,y:[`The steps creak but hold. The attic is a place for old memories, and it is polite to let them rest.`,'xp+s']} ]);

/* talisman route: banish ending offered at the veranda and in the final confrontation */
const verandaO = G.scenes.cg4_veranda.opts, conf2 = G.scenes.cg4_confront2.opts;
const BAN = (stage) => ({ t: stage==='v' ? `Hold up the temple talisman and say, "Madam, please rest in peace."` : `Hold up the temple talisman and ask her, respectfully, to rest in peace.`,
  hide:true, r: stage==='v' ? 'item:cg_talisman&!flag:cg_angered&flag:cg_knows_names' : 'item:cg_talisman&!flag:cg_angered',
  y:[`The paper talisman glows, a clear, warm gold. Madam Soo looks at it, and at you, and something loosens in her face. "A master's words," she says softly. "I have heard them at the temple. Is it time?"`,'-cg_talisman xp+l >cg_end_banish'] });
verandaO.splice(verandaO.length-1, 0, BAN('v'));
conf2.splice(conf2.length-1, 0, BAN('c'));
conf2.splice(conf2.length-1, 0,
 {t:`Gently place the handmade toy sailboat in her hands.`,hide:true,r:'item:cg_replica&!flag:cg_gave_boat&!item:cg_boat',y:[`Madam Soo looks at the little red sail, the tiny hull, the careful carving. "Not the same boat," she says, wonderingly. "But the same love." She presses it to her heart. "Thank you, child."`,'-cg_replica xp+l mp+3 flag:cg_gave_boat stayc']},
 {t:`Offer the kueh you brought.`,hide:true,r:'item:cg_kueh&!flag:cg_gave_kueh',y:[`She takes one pastel piece and holds it to her face. "Nonya kueh," she whispers. "Mei always asked for the green ones." She smiles, and wipes her eyes.`,'-cg_kueh xp+m mp+3 flag:cg_gave_kueh stayc']});

/* -------- ENDING: banish -------- */
G.sc('cg_end_banish','beach|📜 ✨',S => `${'The talisman burns with a soft golden light that does not hurt at all. Madam Soo Lian bows her head, as if to an old friend. "I have waited a very long time," she says. "I did not know how to stop." She looks toward the stairs, where a small figure in a white nightdress is hesitating on the top step. "Mei?"\nThe light spreads through the house, warm and clean. A little girl runs down the stairs and into her mother\'s arms, and the two of them rise slowly into the gold, still holding hands. One by one, the paper boats lift out of the garden and float after them, each one carrying a tiny flame.\nThe house sighs, and fades like breath on a window. You and Aiman are standing on the cool sand, with the casuarinas whispering overhead and the sea breathing in and out. The mist is gone. So is the lady. It is a peaceful, quiet ending, though you can\'t help wishing you could have said goodbye.'}\n${G.epi(S)}`,[{t:'Return to the story menu', act:'new'}],{ end:true, title:'Ending: The Master\'s Words' });

})();

/* ================== EARLY TRIGGERS: special events that lead straight to the house ================== */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));

S_('cgT_bell','The Bell Rings','hdb|🔔 🌙',
`In the middle of the night, a clear little sound wakes you: ting, ting, ting. It is the fisherman's brass bell, sitting on your desk, ringing all by itself. The air in the room is cold, and for a moment the whole flat smells of salt and jasmine.\nOutside the window, far away to the east, the sky has a faint glow, as if a lantern has been lit.`,[
 {t:`Take it as a call and go to Changi at once.`,y:[`You pull on your shoes, leave a note for {guardian} and take the first bus east. The bell goes quiet in your bag. Something is waiting.`,'xp+l flag:cg_trig_bell flag:cg_early flag:cg_saw_house goto:cg4 tod:night']},
 {t:`Hold the bell and whisper: "Not yet, Madam. I am still getting ready."`,y:[`The bell gives one last soft ting, as if it understands. The room warms. You sleep deeply.`,'xp+m mp+4 flag:cg_trig_bell hp+4']},
 {t:`Tell {guardian} what happened.`,y:[`{guardian} sits on the edge of your bed and listens. "When you are ready, you will know," says {guardian}. "Tonight is not the night." The bell stays silent.`,'xp+m mp+3 flag:cg_trig_bell flag:cg_told_adult']} ]);
S_('cgT_mei','Mei Calls','hdb|🌙 💭',
`You dream of a little girl sitting on a swing at the edge of the sea. This time she is not smiling. "It is dark," says Mei, in a small voice. "The light is going out. Please come. Mama is very tired."\nYou wake in the dark with your heart thudding. The room feels very still, and on your windowsill, a tiny drift of white sand glitters.`,[
 {t:`Go to the house tonight. She needs you.`,y:[`You pack, write a note and slip out the door. Mei's voice leads you through the night, light and small, like a thread.`,'xp+l flag:cg_trig_mei flag:cg_early flag:cg_saw_house goto:cg4 tod:night']},
 {t:`Whisper: "Hold on, Mei. I am coming soon."`,y:[`The sand glitters once and fades. You fall asleep with a strange calm. You will keep your promise, when you are ready.`,'xp+m mp+4 flag:cg_trig_mei']},
 {t:`Tell Uncle Lim in the morning.`,y:[`Uncle Lim's face goes serious. "Soon," he says. "But not by yourself, and not unprepared." He taps his lantern. "I will wait."`,'xp+m mp+3 flag:cg_trig_mei flag:cg_support']} ]);
S_('cgT_ready','Everything Falls into Place','mrt|🌟 🧭',
`You are riding the MRT home when you suddenly stop, halfway to a seat. You have a boat for Mei, a light for the dark, a song in your head and a heart that is, for once, quiet. A strange certainty settles over you, like a hand on your shoulder: you are ready.\nThe train is heading toward Tampines. But a stop later, the interchange for Changi is only a platform away.`,[
 {t:`Change trains and go to Changi Village now.`,y:[`A line change, a bus ride and a walk along the sand. The sun sinks toward the sea. When you arrive, the casuarinas are whispering your name.`,'xp+l flag:cg_trig_ready flag:cg_early flag:cg_saw_house goto:cg4 tod:dusk']},
 {t:`Go home and tell {guardian} you are ready.`,y:[`You get home, dump your bag and announce it. {guardian} raises an eyebrow, and then nods. "I thought so. We'll talk about it after dinner."`,'xp+m mp+3 flag:cg_trig_ready flag:cg_told_adult']},
 {t:`Savour the feeling and keep going.`,y:[`It is a good feeling to know you are ready. It is also a good feeling to be sure. You take another day.`,'xp+m mp+4 flag:cg_trig_ready']} ]);
S_('cgT_master','The Master Calls','temple|📜 🙏',
`Your phone rings. It is Auntie Choo, calling on behalf of Master Chen, who has just come out of the temple. "He says tonight the gates are thin," says Auntie Choo, breathless. "He says you have the talisman and the manners, and that the lady is ready to be asked. Tonight is a good night to go, he says. Do you want a lift?"`,[
 {t:`Say yes. You are ready to go.`,y:[`Auntie Choo's son drives you to Changi Village in a very small blue car. Master Chen is waiting at the edge of the beach, hands folded, and nods once.`,'xp+l flag:cg_trig_master flag:cg_early flag:cg_saw_house goto:cg4 tod:dusk']},
 {t:`Thank her and say you need one more day.`,y:[`"Of course," says Auntie Choo warmly. "He said you might. He says the lady can wait one more day. She has waited sixty years."`,'xp+m mp+3 flag:cg_trig_master']},
 {t:`Ask whether {guardian} can come along.`,y:[`There is a pause. "Of course," says Auntie Choo. "Bring everybody." Having a grown-up beside you makes you feel braver.`,'xp+m mp+4 flag:cg_trig_master flag:cg_told_adult']} ]);

/* attach the triggers as optional beats at the end of later chapters, once each */
const DUSKB = 'flag:cg_saw_house?cg_duskask';
const TB = [
  'item:cg_bell&!flag:cg_trig_bell?cgT_bell',
  'flag:cg_dream_mei&!flag:cg_trig_mei?cgT_mei',
  'item:cg_replica&item:cg_lantern&flag:cg_lullaby&!flag:cg_trig_ready?cgT_ready',
  'item:cg_boat&item:cg_lantern&flag:cg_lullaby&!flag:cg_trig_ready?cgT_ready',
  'item:cg_talisman&flag:cg_respect&!flag:cg_trig_master?cgT_master' ];
/* each later chapter offers some of the triggers; each fires only once (every option sets its flag) */
const PAIRS = { cgB:[0,4], cgC:[1,2], cgD:[4,0], cgE:[2,3,1], cg3:[0,1], cgF:[1,4], cgH:[2,3,0], cgI:[4,2,3], cgG:[0,1,2,3,4] };
Object.keys(PAIRS).forEach(id=>{
  const ch = G.chapters[id]; if(!ch) return; const old = ch.beats;
  ch.beats = S => { const b = typeof old === 'function' ? old(S) : old.slice();
    const pos = b.indexOf(DUSKB); const trig = PAIRS[id].map(i=>TB[i]);
    if (pos >= 0) b.splice(pos, 0, ...trig); else b.push(...trig);
    return b; };
});
})();
