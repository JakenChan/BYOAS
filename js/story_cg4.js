/* THE LADY OF CASUARINA HOUSE (500 edition) — Chapters A (Tampines week), B (East Coast), C (Pulau Ubin) */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const DUSK = 'flag:cg_saw_house?cg_duskask';

/* ---- the "go to the house tonight?" decision that appears at the end of many chapters ---- */
S_('cg_duskask','Dusk Falls','beach|🌅 🏚️',
S => { const has = id => S.items[id]>0; const n=[has('cg_boat')||has('cg_replica'),has('cg_lantern'),S.flags.cg_lullaby,has('cg_charm')||has('cg_talisman'),has('cg_flashlight')].filter(Boolean).length;
  return `The sky over Changi is turning orange again. You have been thinking about Aiman all day, and about the lady on the veranda who said: "Come back, and bring something for me."\nYour bag holds ${n===0?'almost nothing that could help':n<3?'a few things that might help':'quite a lot of things that might help'}. You could go to Casuarina House tonight. Or you could keep looking for answers.\nNobody can tell you which is wiser.`; },[
 {t:`Keep investigating. You are not ready yet.`,y:[`You decide to wait. Aiman is safe while time moves slowly in the house, and patience is a kind of courage too.`,'xp+s mp+1']},
 {t:`Go to the beach and look at the house from afar, then return home.`,y:[`You stand at the edge of the casuarinas at dusk. The house shimmers, and a faint lullaby drifts out. You do not go in. You promise yourself you will return.`,'xp+m mp+2 flag:cg_saw_house'],k:1},
 {t:`Go to Casuarina House tonight.`,r:'flag:cg_saw_house',y:[`Your heart thuds. You text a grown-up where you are going, take a deep breath, and head for the beach.`,'xp+m flag:cg_early goto:cg4 tod:night']} ]);

/* =============== CHAPTER A: THE TRAIL HEATS UP =============== */
G.chapter('cgA',{ story:'changi', n:'Chapter 3: The Trail Heats Up', sub:'School week in Tampines', ch:2, region:'cg_tampines', art:'classroom|📚 🔎', age:11, btn:'Back to school',
  text:`A week at school can feel very long when you are carrying a secret. Mr Tan's updates are short and sad: the police have searched Changi Beach, the sea, the paths, and found nothing. The lunch tables are quieter than usual. But a few classmates look at you differently now, as if you might know something.\nIf the answers are out there, they may be closer to home than you think.`,
  beats:()=>G.mix(['cgA_news','cgA_pe','cgA_daniel','cgA_ecogreen','cgA_uncles','cgA_library2','cgA_detector','cgA_jiahui','cgA_nightmare','cgA_pasar'],22,{nocamp:true}).concat([DUSK]) });

S_('cgA_news','Morning Assembly','classroom|🏫 📣',
`The school hall is hot and crowded. After the national anthem and the pledge, the principal says a few quiet words about Aiman, and asks everyone to be considerate to his family. Then Mr Tan takes over. "The police have searched the Changi beach, the sea and the nearby paths. Nothing. If you remember anything, please tell me."\nA ripple of whispering runs through the hall. Jia Hui, behind you, says loudly: "Ghosts are not real, you know."`,[
 {t:`Turn around and say, "Maybe not. But kindness is."`,c:'CHA 8 persuade',y:[`Jia Hui blinks. "That's... a weird answer." But she looks at the floor, a little ashamed. Maybe she is more scared than she is pretending to be.`,'xp+m flag:cg_kind'],n:[`She rolls her eyes. "Whatever."`,'xp+s']},
 {t:`Whisper to Priya: "Meet me at recess."`,r:'ally:cg_priya',y:[`She nods without moving her lips, which is very good spy work. You feel like you are in a detective film.`,'xp+m bond:cg_priya']},
 {t:`Stay quiet and listen to Mr Tan's updates.`,y:[`He says the police found a football sticker and a single bottle cap at the beach. You know where the bottle is: in your bag.`,'xp+s mp+1']},
 {t:`Put up your hand and tell Mr Tan what you know.`,y:[`He listens, frowning. "A house that only appears at dusk," he repeats gently. "I will pass this on, but please, do not go looking by yourself." You promise to be careful.`,'xp+m flag:cg_told_adult']} ]);

S_('cgA_pe','PE Lesson','park|⚽ 🏃',
`PE is on the field today. The teacher, Coach Ravi, blows his whistle: "Two laps, then football!" The heat comes up off the track in waves. Hakim zooms ahead, long legs and an easy grin. Jia Hui complains to anyone who will listen.\nAt the end of the second lap, you can barely breathe, but you feel better than you have all week.`,[
 {t:`Push yourself and try to catch Hakim.`,c:'CON 8 endure',y:[`You lunge in the last twenty metres and finish right behind him, gasping. "Not bad!" Hakim says, holding out a hand. "You'd be good on my team."`,'xp+m hp-1 bond:cg_hakim mp+2'],n:[`You run out of breath halfway round and finish near the back. But you finish.`,'xp+s hp-2']},
 {t:`Pace yourself and finish in the middle.`,y:[`Steady and sensible. You still have energy for football.`,'xp+m mp+2']},
 {t:`Play goalkeeper in the football game.`,c:'DEX 9 dodge',y:[`You stop three shots, including a rocket from Hakim. He stares. "I'm going to remember that," he says.`,'xp+l bond:cg_hakim mp+2 skill:cg_sports'],n:[`You let in six goals. It is a dignified loss.`,'xp+s']},
 {t:`Hand out water bottles to tired classmates.`,y:[`Jia Hui takes one and says, to your surprise, "Thanks". It is the first nice thing she's said to you.`,'xp+m flag:cg_kind']} ]);

S_('cgA_daniel','Daniel Comes Clean','hawker|🥤 😟',
`At recess, Daniel from Primary 6 waits for you by the canteen drinks stall. He looks very tired, and holds something small and crumpled in one hand. "I... I didn't tell the teacher everything," he says. "I was too scared. But I drew a map. Of where the house was."\nHe slides a piece of paper across the table. It is a shaky pencil map: the beach, the casuarinas, a path, a cross.`,[
 {t:`Take the map and thank him for being brave.`,y:[`His shoulders sag with relief. "I thought you'd be angry," he mumbles. "We should never have dared him." You promise to look after the map.`,'xp+l +cg_map flag:cg_kind']},
 {t:`Take the map and ask him to tell Mr Tan too.`,c:'CHA 8 persuade',y:[`"Okay," he says, after a long moment. "After school. With you." You walk with him to the staffroom, and he tells everything. Mr Tan listens carefully.`,'xp+l +cg_map flag:cg_told_adult flag:cg_kind'],n:[`"I can't," he says, shaking his head. But he lets you keep the map.`,'xp+m +cg_map']},
 {t:`Study the map carefully with Priya.`,r:'ally:cg_priya',y:[`Priya points out the cross is in a gap between two big casuarinas, where the old Changi coast road used to run. "Landmarks don't move," she says. "Houses don't just appear."`,'xp+l +cg_map bond:cg_priya flag:cg_knows_dusk']},
 {t:`Ask him whether he saw anything else.`,c:'CHA 8 persuade',y:[`"A lady," he whispers. "On the veranda, humming. She waved. I thought she was nice. Then Aiman went in, and she smiled, and the sun went down all at once." He wipes his face. "I ran."`,'xp+m +cg_map flag:cg_saw_house'],n:[`Daniel shrugs, white-faced. "That's all."`,'xp+s +cg_map']} ]);

S_('cgA_ecogreen','Tampines Eco Green','park|🌳 🦋',
`After school, you take a walk in Tampines Eco Green, a big green park of ponds, trails and secondary forest right in the middle of the town. Butterflies drift through the sun; a monitor lizard sunbathes beside the path. It feels very far from HDB blocks, though you can see them over the treetops.\nThen you notice something on the path ahead: a tiny paper boat, floating in a puddle.`,[
 {t:`Crouch and look closely at the boat.`,c:'WIS 8 survive',y:[`It is folded perfectly, with a tiny red paper sail. The puddle is only a handspan wide and the boat is a good ten centimetres long. It rocks gently, as if on a wave. You carry it carefully home.`,'xp+l flag:cg_paperboat_made flag:cg_knows_peranakan'.replace('flag:cg_knows_peranakan','')],n:[`Just a puddle and a bit of wet paper. You smile at yourself.`,'xp+s']},
 {t:`Show it to Mochi, if she is with you.`,r:'ally:cg_mochi',y:[`Mochi sniffs it, looks up at the empty path, and gives one long, serious meow. She walks ahead as though leading. At the end of the path is a second paper boat.`,'xp+l bond:cg_mochi']},
 {t:`Follow the trail of puddles and look for more boats.`,c:'DEX 8 sneak',y:[`There are four more, one in each puddle, leading toward the pond. They float in a neat line. Someone is quietly telling you something: a small, friendly, patient someone.`,'xp+m mp+2'],n:[`The trail ends at a drain. You lose it.`,'xp+s']},
 {t:`Take a photo and move on.`,y:[`A good clue to share with Priya later.`,'xp+s']} ]);

S_('cgA_uncles','The Fisherman at the Coffee Shop','hawker|☕ 🧓',
`At the coffee shop below your block, a retired fisherman, Uncle Ah Seng, plays Chinese chess with a friend, his hands as brown and knotty as old rope. He has lived in the east since the 1950s. When you mention Changi, he stops mid-move.\n"Changi," he says, slowly. "Many families by the sea in those days. A big white house by the casuarinas. Peranakan lady, very kind. Always had a lantern in the window."`,[
 {t:`"What happened to her?"`,y:[`"Her little girl was lost in a storm," he says, very quietly. "Nineteen fifty-nine. Lost at sea, they said. The mother kept the lantern lit every night for years. Then one day the house was dark. Nobody wanted to go near it after that."`,'xp+l flag:cg_knows_storm flag:cg_knows_peranakan flag:cg_knows_names']},
 {t:`"Was she kind to guests?"`,y:[`"Kindest woman in the village," says Uncle Ah Seng. "She never turned away a guest. Always gave kueh and sweet tea. Offered a plate even to strangers." He chuckles. "A good mother. Too good to forget."`,'xp+m flag:cg_knows_peranakan']},
 {t:`Offer to buy him a cup of kopi ($2).`,r:'gold:2',y:[`He is delighted. Over the coffee, he tells you the lady's name, Madam Soo Lian, and that the little girl's boat was carved with MEI on the hull. "Poor child," he says.`,'gold-2 xp+l flag:cg_knows_names flag:cg_kind']},
 {t:`Watch the chess game quietly.`,y:[`His friend wins in the end with a clever horse move. Uncle Ah Seng sighs and says "Aiyoh". You've learned a little about the game.`,'xp+s mp+2']} ]);

S_('cgA_library2','Old Newspapers','classroom|📰 🖥️',
`Priya has booked a library computer after school. "The National Library has digitised old newspapers," she says, typing quickly. "NewspaperSG. You can search almost anything printed in Singapore from the 1800s onward. Let's try 'Changi 1959 storm'."\nThe screen fills with scanned pages in tiny print. Your eyes swim, but Priya's finger is steady. "There."`,[
 {t:`Read the article aloud.`,c:'INT 8 lore',y:[`"Storm batters east coast. Fishing boats lost, one child missing." There is a name: "Mei, aged seven, daughter of Mrs Soo of Changi." Your voice goes quiet. "It's true," you whisper.`,'xp+l flag:cg_knows_storm flag:cg_knows_names bond:cg_priya'],n:[`The text is blurry and half cut off. But you spot the date: 1959.`,'xp+m flag:cg_knows_storm']},
 {t:`Search for the name "Soo" on the site.`,c:'INT 9 lore',y:[`Three results. One is a notice from a charity fair: "Mrs Soo Lian's Nyonya kueh stall, proceeds to the fishermen's fund." You smile. She was beloved.`,'xp+l flag:cg_knows_peranakan'],n:[`Too many results, all in tiny print. You print a few for later.`,'xp+s']},
 {t:`Ask Priya to explain how she found it so quickly.`,r:'ally:cg_priya',y:[`She grins. "Keywords, dates, and patience." You learn two new tricks for searching old records. She looks ridiculously happy.`,'xp+m bond:cg_priya']},
 {t:`Print the best pages and head home.`,y:[`Paper, a stapler and a feeling of progress.`,'xp+s']} ]);

S_('cgA_detector','Gadget Night','hdb|🔧 🌙',
`Priya has a plan: "If we can't see it, maybe we can measure it." You are at her flat, a pile of electronics spread on the dining table: a thermometer, a small speaker, a battery pack, copper wire and an empty biscuit tin.\n"It won't prove anything," says Priya. "But it might tell us when something cold is near. A cold spot detector."`,[
 {t:`Build the detector together.`,c:'INT 8 craft',y:[`You wire the thermometer to a buzzer in the biscuit tin. It chirps when the temperature drops. It is lopsided, ugly and brilliant. "Proof of concept!" shouts Priya.`,'xp+l +cg_detector flag:cg_detector_made bond:cg_priya'],n:[`The buzzer goes off every time Priya's fridge door opens. But with some tuning, it works.`,'xp+m +cg_detector flag:cg_detector_made']},
 {t:`Take charge as the Gadget Kid.`,r:'cls:cg_tinker',y:[`You rewire the whole thing in ten minutes, adding a tiny light that glows when it is cold. Priya stares at it. "You should be a scientist," she says.`,'xp+l +cg_detector flag:cg_detector_made bond:cg_priya']},
 {t:`Let Priya build it while you hold the tools.`,y:[`She does, and it works. You hand her screwdrivers and feel like a surgeon's assistant.`,'xp+m +cg_detector flag:cg_detector_made']},
 {t:`Decide that science is too much for tonight.`,y:[`You share a plate of curry puffs instead. Priya shrugs, and says maybe tomorrow.`,'xp+s hp+4']} ]);

S_('cgA_jiahui','Jia Hui\'s Secret','void|😰 🌙',
`You find Jia Hui sitting alone at the void deck at dusk, hugging her knees. Her loud bravado is gone. She stares at her shoes. "I'm not scared of ghosts," she says automatically. Then: "Okay. I am. My cousin told me a story about a house by the sea. It kept me awake for three nights."\nShe glances at you. "Is it true? What happened to Aiman?"`,[
 {t:`Tell her honestly what you know, and that you're a little scared too.`,c:'CHA 8 persuade',y:[`She exhales in a long shaky breath. "I thought I was the only one." For a moment you both sit in silence. Then she says, "If you go back there, I'm coming with you." Her chin trembles, but it is firm.`,'xp+l ally:cg_jiahui bond:cg_jiahui flag:cg_friend_jiahui'],n:[`She looks away, but says, "Okay. Thanks for telling me."`,'xp+m ally:cg_jiahui']},
 {t:`Say, "Ghosts are usually sad, not mean."`,y:[`She stares at you. "Really? Like... lonely?" You explain what you've learned. By the end of the evening she is almost humming.`,'xp+m ally:cg_jiahui flag:cg_lesson_ghost mp+2']},
 {t:`Teach her the breathing trick: in for four, out for four.`,r:'skill:cg_calm|cls:cg_dreamer',y:[`Four in, four out. Her shoulders drop. "Okay, that actually works," she mutters. She joins your team that very evening.`,'xp+l ally:cg_jiahui bond:cg_jiahui']},
 {t:`Say goodnight and give her space.`,y:[`She nods. "Goodnight." You go home, thinking of the many ways to be afraid.`,'xp+s']} ]);

S_('cgA_nightmare','A Voice in the Night','hdb|🌙 😴',
`That night, you wake at two in the morning to the sound of someone humming. Very faint, very sweet, from outside your window. A slow, rocking tune, like a boat on the sea.\nYou creep to the window. The block opposite is dark. On the sill, in the moonlight, lies a small paper boat that was not there when you went to bed.`,[
 {t:`Pick up the boat and whisper, "Hello?"`,c:'WIS 9 spirit',y:[`A voice, small and sweet: "Mama can't find me. She keeps the lantern on. Please... tell her I'm here." Then silence, and a faint smell of jasmine. You hold the boat tight and don't sleep for hours.`,'xp+l flag:cg_dream_mei flag:cg_paperboat_made flag:cg_lullaby'],n:[`The humming stops. You can't hear anything more. The boat is dry, cold and still.`,'xp+m flag:cg_dream_mei']},
 {t:`Shut the window and go back to bed.`,y:[`You pull the blanket over your head. In the morning, the boat is still on the sill. It is neatly folded and a little damp.`,'xp+s mp-1']},
 {t:`Wake {guardian} and tell them.`,y:[`{guardian} sits with you in the kitchen with a glass of warm milk, listening quietly. "Some things in the world do not ask permission," says {guardian}. "Whatever it is, it knew to leave a boat, not a fright. That means it is gentle." You go back to sleep.`,'xp+m mp+4 flag:cg_told_adult']},
 {t:`Hum the lullaby back, very softly.`,r:'flag:cg_lullaby',y:[`The humming pauses, listening. Then, softly, it joins in with yours, sweet and small. For one whole verse you sing together. Then it fades. You fall asleep with a smile.`,'xp+l mp+5 flag:cg_dream_mei']} ]);

S_('cgA_pasar','Weekend Market','hawker|🛒 🧺',
`On Saturday morning you go to the neighbourhood market with {guardian}, a noisy, crowded place with stalls of fruit, flowers, fish, fresh noodles and plastic basins. A stallholder shouts "Cheap cheap!" over a mountain of mangoes.\nYou have some pocket money and a list of things that might come in handy.`,[
 {t:`Buy a folding umbrella ($3).`,hide:true,r:'gold:3&!item:cg_umbrella',y:[`Red and black, with a tiny hook. It will keep the rain off, and the sun, too.`,'gold-3 +cg_umbrella xp+s stayc']},
 {t:`Buy a school cap ($2).`,hide:true,r:'gold:2&!item:cg_cap',y:[`A cheap blue cap that says "Sports Day 2019". It shields you from the sun.`,'gold-2 +cg_cap xp+s stayc']},
 {t:`Buy a bag of mandarin oranges ($3).`,hide:true,r:'gold:3&!item:cg_oranges',y:[`Sweet and bright. They might be useful as an offering.`,'gold-3 +cg_oranges flag:cg_oranges_got xp+s stayc']},
 {t:`Buy a jar of kaya ($3).`,hide:true,r:'gold:3&!sv:kaya',y:[`Sweet comfort in a jar.`,'gold-3 +cg_kaya xp+s svflag:kaya stayc']},
 {t:`Finish shopping and head home.`,y:[`{guardian} carries the vegetables and you carry the fruit. A good, ordinary morning.`,'xp+s mp+2'],k:1} ]);

/* =============== CHAPTER B: EAST COAST WEEKEND =============== */
G.chapter('cgB',{ story:'changi', n:'Chapter 4: East Coast Weekend', sub:'Pasir Ris to Katong on two wheels', ch:2, region:'cg_eastcoast', art:'beach|🚲 🌴', age:11, btn:'Set off',
  text:`The east of Singapore stretches in a long green and blue line: Pasir Ris Park with its mangroves, East Coast Park with fifteen kilometres of beach and bicycle paths, old shophouses in Katong, and the market at Geylang Serai.\nYou and your friends have a Saturday free and a bundle of clues: boats, kueh, a Peranakan family, a storm in 1959. The coast might tell you more.`,
  beats:()=>G.mix(['cgB_plan','cgB_pasirris','cgB_mangrove','cgB_lunch','cgB_katong','cgB_kueh','cgB_geylang','cgB_jetty','cgB_storm','cgB_home'],22,{nocamp:true}).concat([DUSK]) });

S_('cgB_plan','Bicycles and Backpacks','beach|🚲 🎒',
`By nine o'clock the sun is already strong. Your group has met at Pasir Ris Park: backpacks, water bottles, sunscreen and one slightly sulky bicycle. {guardian} has packed too many snacks, as always.\nThe plan is simple: cycle along the east coast, follow the clues about a Peranakan family, ask everyone who looks old enough to remember.`,[
 {t:`Rent bicycles for everyone ($4 each, in your group).`,r:'gold:4',y:[`A row of wobbly rental bikes, bells ringing, helmets slightly too big. You lead the way, trying to look like you know where you are going.`,'gold-4 xp+m mp+3']},
 {t:`Share bicycles: take turns pedalling.`,y:[`Two on one bike, a little wobbly but twice as fun. You make good time, mostly.`,'xp+m mp+2']},
 {t:`Walk along the shore instead.`,y:[`Slower, hotter and with more sand in your shoes, but you notice more along the way.`,'xp+m hp-1 mp+2']},
 {t:`Check the weather app and pack an umbrella first.`,r:'item:cg_umbrella|item:cg_cap',y:[`Good thinking. By noon the sky changes, and you are ready.`,'xp+m mp+2']} ]);

S_('cgB_pasirris','Pasir Ris Mangroves','park|🌿 🦀',
`The boardwalk through Pasir Ris Park's mangroves is shaded and quiet. Tall roots arch out of the mud like long spider legs. Mudskippers leap between puddles, and fiddler crabs wave their huge claws at the tide. A ranger in a green polo shirt is counting something with a clicker.\nMangroves protect the coast and are nurseries for baby fish, she tells you.`,[
 {t:`Ask the ranger about animals that live here.`,c:'CHA 8 persuade',y:[`She shows you a mudskipper climbing a root, a kingfisher on a branch and a hidden fiddler crab burrow. "Everything here has a job," she says. "Even the mud."`,'xp+m mp+3'],n:[`She is mid-count. You promise to come back.`,'xp+s']},
 {t:`Look for fiddler crabs.`,c:'WIS 8 survive',y:[`Twelve! One waves directly at you as if saying hello. You wave back.`,'xp+m mp+3'],n:[`They all vanish when you lean close. Shy things.`,'xp+s']},
 {t:`Take a deep breath of the damp air.`,y:[`Salt, mud, green leaves. It smells alive. Your whole body relaxes.`,'xp+s mp+4']},
 {t:`Stay on the boardwalk and walk on.`,y:[`Planks creak. A hornbill rustles overhead. Everything feels sleepy and slow.`,'xp+s mp+2']} ]);

S_('cgB_mangrove','Something in the Mud','park|🌫️ 🌿',
`Further in, the boardwalk grows quieter. The tide is out, and the mud gleams. In the silence you hear a faint, sweet sound, someone humming, very softly, from between the roots. Then you notice them: a trail of small paper boats stuck upright in the mud, each with a tiny red sail, leading deeper into the mangroves.\nYour detector, if you have it, gives a quiet "tick" and a soft green glow.`,[
 {t:`Follow the paper boats along the boardwalk.`,c:'WIS 9 resist',y:[`They are placed with care, one after another. The humming rises, then stops at the last boat. A tiny voice murmurs: "Mama, I'm here." Then silence. It is sad, but not scary.`,'xp+l mp+2 flag:cg_dream_mei'],n:[`A cold draught chills your neck. You stop at the fifth boat and decide to turn back.`,'xp+m mp-1']},
 {t:`Check your detector.`,r:'item:cg_detector',y:[`The needle swings. A cool patch lies exactly where the boats end. "She was here," murmurs Priya. "Or something was."`,'xp+l bond:cg_priya mp+1']},
 {t:`Pull a boat gently from the mud and take it with you.`,y:[`It is cold and dry and perfectly folded. You tuck it into your pocket carefully. A tiny sigh drifts through the leaves.`,'xp+m flag:cg_paperboat_made']},
 {t:`Say "Hello. We're looking for Mei."`,c:'WIS 9 spirit',y:[`The humming stops. A very small voice, close, whispers: "Casuarinas." Then, very faintly: "...Please find Mama's lantern." Your skin prickles, but you feel brave.`,'xp+l mp+3 flag:cg_dream_mei flag:cg_knows_names'],n:[`Nothing answers. But the boats seem to lean toward you.`,'xp+m']} ]);

S_('cgB_lunch','East Coast Lagoon','hawker|🍢 🌊',
`East Coast Lagoon Food Village smells of charcoal and the sea. Rows of stalls sell satay, barbecued chicken wings, sambal stingray and sugarcane juice. Families sit at plastic tables with their feet in the sand. A stallholder with a smile like a sunrise calls you over.\n"Hungry, kids? Sit, sit!"`,[
 {t:`Order satay to share around the table ($5).`,r:'gold:5',y:[`Smoky, sweet, with peanut sauce. Everyone takes the last stick and nobody argues. Good company makes it better.`,'gold-5 hp+12 mp+4 xp+m bond:cg_priya']},
 {t:`Ask the stallholder about old Changi.`,c:'CHA 9 persuade',y:[`"My father fished there," he says, flipping a skewer. "He talked about a lady with a lantern. 'Always bring her a plate of kueh,' he told me. 'She will never forget a kind visitor.'" He shrugs. "A story."`,'xp+l flag:cg_knows_peranakan flag:cg_gate_trust'],n:[`He is too busy with a queue. You eat quietly.`,'xp+s']},
 {t:`Buy sugarcane juice for everyone ($4).`,r:'gold:4',y:[`Sweet, grassy and chilled. You drink in the shade and watch kites in the sky.`,'gold-4 hp+6 mp+5 xp+m']},
 {t:`Share the snacks {guardian} packed.`,y:[`Homemade, a bit squashed, entirely delicious. Everyone has a bite.`,'xp+m hp+5 mp+3']} ]);

S_('cgB_katong','Joo Chiat Shophouses','town|🏘️ 🌸',
`Katong and Joo Chiat are famous for Peranakan shophouses in pastel shades: peach, mint, lilac and yellow, with glazed tiles in floral patterns, carved shutters and little ornate gates. Peranakan culture blends Chinese and Malay traditions: the food, the beaded slippers, the delicate kebaya blouses.\nA small shop sells kueh, and a smiling auntie waves at you from behind the counter.`,[
 {t:`Go in and ask the auntie about the Soo family.`,c:'CHA 9 persuade',y:[`Her smile slips. "Soo? From Changi? My mother knew Madam Soo Lian. They sold kueh at the same charity fair." She hesitates, then adds: "Lian made the best kueh lapis in the east. Nine layers, pandan and rose. She'd bring a box to every neighbour."`,'xp+l flag:cg_knows_peranakan flag:cg_knows_names'],n:[`"Soo?" she shrugs. "Many Soos." She offers you a free sample, kindly.`,'xp+m mp+2']},
 {t:`Look at the colourful tiles and learn about them.`,c:'INT 8 lore',y:[`The tiles come from Europe and Japan, a hundred years ago. Peranakan homes were proud and colourful. You learn about patterns for luck, for welcome and for home.`,'xp+m'],n:[`Lovely, but you couldn't read the labels.`,'xp+s']},
 {t:`Buy a kueh to try ($2).`,r:'gold:2',y:[`Layered, sticky, sweet with pandan. It almost melts in your mouth. You buy a second one for later.`,'gold-2 hp+5 mp+3 xp+s']},
 {t:`Take photos of the beautiful shopfronts.`,y:[`A thousand colours in your camera. Each door tells a story.`,'xp+s mp+2']} ]);

S_('cgB_kueh','The Kueh Lapis Lady','town|🍰 👩‍🍳',
`The auntie lowers her voice. "You want to find Madam Soo's house? Then you must bring what she would bring. Peranakan custom: a guest never comes empty-handed. A box of kueh, nine layers for luck, tied with a ribbon." She points to a pastel box on the counter. "Ten dollars. A fair price for a good deed."\nShe watches you with wise eyes.`,[
 {t:`Buy the box of kueh ($10).`,hide:true,r:'gold:10&!item:cg_kueh',y:[`She ties it with a pink ribbon and presses it carefully into your hands. "For Madam Lian," she says, almost in a whisper. "Tell her Ah Yee says hello."`,'gold-10 +cg_kueh flag:cg_kueh_got xp+l flag:cg_gate_trust stayc']},
 {t:`Ask if she'll take $6 for it.`,hide:true,r:'gold:6&!item:cg_kueh',c:'CHA 9 persuade',y:[`She laughs. "Aiyoh, so smart. Okay, for you." You pay her six, and she throws in a ribbon.`,'gold-6 +cg_kueh flag:cg_kueh_got xp+l flag:cg_gate_trust stayc'],n:[`"Ten dollars," she says kindly, and does not budge. You decide to think about it.`,'xp+s stayc']},
 {t:`Offer to help her in the shop for a few hours instead.`,hide:true,r:'!item:cg_kueh&!sv:helped',c:'CON 8 endure',y:[`You wipe tables, carry trays and fold boxes. At the end of the afternoon, she gives you the kueh box and a hug. "Good child. Madam Lian would like you."`,'+cg_kueh flag:cg_kueh_got xp+l flag:cg_kind flag:cg_gate_trust svflag:helped stayc'],n:[`You're not very quick at folding boxes, but she appreciates the effort and gives you a few kueh.`,'xp+m hp+3 svflag:helped stayc']},
 {t:`Thank her and leave.`,y:[`"Think about it," she says. "A guest brings something."`,'xp+s'],k:1} ]);

S_('cgB_geylang','Geylang Serai Market','town|🧺 🕌',
`Geylang Serai Market is full of the smells of cumin, lemongrass and coconut. Rows of stalls sell sambal belacan, kuih of every colour, fresh coconuts and woven mats. Hakim leads you to a stall run by his Nenek, a small woman in a headscarf who pinches your cheeks as if you're already family.\n"Eat, eat!" she insists, pressing a banana leaf of kuih into your hands. "You are too thin. What is this I hear about a house?"`,[
 {t:`Tell Nenek everything.`,y:[`She listens silently, nodding. Then she says, in a low voice: "In my kampung, we say a prayer for those who have no one to pray for them. A prayer, a kind word, a plate of food. Never shout at them. Never fight. They are only waiting." She closes her eyes and says a short prayer for you.`,'xp+l mp+5 flag:cg_lesson_ghost flag:cg_respect bond:cg_hakim']},
 {t:`Ask Nenek to teach you the prayer.`,r:'skill:cg_faith|skill:cg_lang|origin:cg_malay',y:[`She teaches you, line by line, in her gentle voice. "Words are small," she says, "but a kind heart makes them big." You feel steadier already.`,'xp+l mp+5 flag:cg_respect flag:cg_lesson_ghost']},
 {t:`Help carry her baskets.`,c:'STR 8 endure',y:[`Heavy, but worth it. She gives you a bag of kuih as a reward, and a pat on the cheek that you will remember for a week.`,'xp+m +cg_sweets bond:cg_hakim flag:cg_kind'],n:[`You drop a basket. Everyone helps pick up the mangoes. Nenek laughs for five minutes.`,'xp+s']},
 {t:`Enjoy the food and the happy noise of the market.`,y:[`Coconut jelly, sticky rice, a sip of sweet sago. You and Hakim compare favourites. Life is good.`,'xp+m hp+6 mp+4']} ]);

S_('cgB_jetty','Bedok Jetty','pier|🎣 🌅',
`Late in the afternoon you reach Bedok Jetty, a long wooden pier stretching out over the sea. Fishermen line the rails with rods and flasks of kopi. The horizon is wide and silvery, and the sky is turning gold. A very old fisherman with a brown face like walnut leans on the railing, watching you with interest.\n"You children look lost," he says.`,[
 {t:`Ask him if he knew the Soo family of Changi.`,c:'CHA 9 persuade',y:[`He stares out to sea for a very long time. "I was a boy in nineteen fifty-nine," he says. "We found part of a small boat on the beach. Red sail. Name on it. We buried it with a prayer." His voice cracks. "I think... it was hers."`,'xp+l flag:cg_knows_storm flag:cg_knows_names'],n:[`"Soo?" he says, vaguely. "So many people." His memory drifts.`,'xp+m']},
 {t:`Offer him a cup of tea from your flask.`,r:'item:cg_teh|item:cg_water',y:[`He takes it with a nod. "Kind," he says. "Kind children are rare." He tells you tales of the old days, with lanterns and long nets.`,'xp+m mp+3 flag:cg_kind']},
 {t:`Watch the sunset with the fishermen.`,y:[`Gold on the water, ships on the horizon. For a moment, it is the most peaceful thing in the world.`,'xp+m mp+5']},
 {t:`Take a photo and start heading back.`,y:[`Three kilometres of cycling lie between you and home.`,'xp+s']} ]);

S_('cgB_storm','Thunder Over the Bay','beach|⛈️ 🚲',
`On the ride home, the sky changes with typical tropical speed: grey clouds, a rumble of thunder, then a sheet of warm rain that soaks everything in thirty seconds. Cyclists scatter for cover. Hakim yells with delight. Priya yelps about her notes.\nThere is a covered pavilion fifty metres ahead, and a long open stretch with lightning above.`,[
 {t:`Dash to the pavilion and wait.`,c:'DEX 8 dodge',y:[`You skid under the roof and wring out your shirts. The whole group laughs and drips. The storm passes in fifteen minutes.`,'xp+m mp+3 bond:cg_priya bond:cg_hakim'],n:[`You are soaked to the bone, but you reach the pavilion and the group cheers.`,'hp-1 xp+m mp+2']},
 {t:`Open your umbrella and share it with Priya.`,r:'item:cg_umbrella',y:[`It's a tight squeeze, but you stay dry. Priya's notes are saved. She gives you a wobbly smile.`,'xp+m mp+3 bond:cg_priya']},
 {t:`Keep cycling in the rain.`,c:'CON 9 endure',y:[`Warm rain on your face, a roaring grin. By the time you reach home you are drenched and unstoppable.`,'xp+m mp+3 hp-1'],n:[`You slide on a wet patch and fall into a puddle. You are soaked, scraped and laughing.`,'hp-2 xp+s']},
 {t:`Shelter under a tree and count the seconds between flash and thunder.`,y:[`"One... two... three..." Each count tells you how far the storm is. Priya taught you that. It's reassuring.`,'xp+m mp+3']} ]);

S_('cgB_home','Home by Moonlight','beach|🌙 🚲',
`The rain has gone and the stars have come out. You ride home along the empty path, past casuarinas and sleeping birds, with your friends' bike lights bobbing ahead like fireflies. You are tired, sunburnt and sticky, and happier than you've been in a week.\nThen, in the basket of your bicycle, you find a small paper boat. It was not there when you left. It is dry.`,[
 {t:`Pick it up and carry it carefully.`,y:[`A tiny red sail, a neat fold, and a faint smell of jasmine. Someone has followed you home, gently, all day. You feel a strange kind of company.`,'xp+m flag:cg_paperboat_made mp+2 flag:cg_dream_mei']},
 {t:`Say thank you to the air.`,c:'WIS 8 spirit',y:[`"Thank you for the clue," you whisper. The wind rises for a heartbeat, and falls. You feel a small cool hand brush your sleeve, then nothing.`,'xp+l mp+3 flag:cg_dream_mei'],n:[`The night is quiet. You say it again, anyway.`,'xp+s']},
 {t:`Show it to your friends.`,r:'anyally',y:[`They gather round with torches. "Same fold," whispers Priya. "Same paper. Same smell." Nobody says anything for a while.`,'xp+m mp+2 bond:cg_priya']},
 {t:`Cycle on, looking straight ahead.`,y:[`The paper boat rustles in the basket, all the way home.`,'xp+s mp+1']} ]);

/* =============== CHAPTER C: PULAU UBIN =============== */
G.chapter('cgC',{ story:'changi', n:'Chapter 5: Pulau Ubin', sub:'A day on the granite island', ch:2, region:'cg_ubin', art:'park|🌴 ⛴️', age:11, btn:'Take the boat',
  text:`Uncle Lim's bumboat has been taking people to Pulau Ubin for decades. The island is a short ride from Changi Point, but it feels like another century: wooden houses on stilts, coconut palms, old rubber trees, a flooded granite quarry and a few families who still live in the kampung. Wild boars wander the forest tracks.\nUncle Lim has asked you to come. "There is someone on the island who remembers," he said. "An old aunty. Go and listen."`,
  beats:()=>G.mix(['cgC_ferry','cgC_village','cgC_aunty','cgC_lullaby','cgC_chek','cgC_boatbuilder','cgC_build','cgC_quarry','cgC_dusk'],20,{nocamp:true}).concat([DUSK]) });

S_('cgC_ferry','The Bumboat','pier|⛴️ 🌊',
`The bumboat chugs away from Changi Point with twelve passengers aboard: you, your friends, three cyclists with folded bikes, an auntie with a basket of onions and a man with a very large cooler. Uncle Lim, at the wheel, grins in the sunshine, his old brass bell hanging above his head.\n"Ubin," he calls over the engine. "Granite Island. We'll be there in ten minutes."`,[
 {t:`Stand at the bow and feel the wind.`,y:[`Spray, sun and the green island growing ahead. For ten minutes, nothing else matters. A gull follows alongside, hoping for crumbs.`,'xp+m mp+4']},
 {t:`Sit next to Uncle Lim and ask about the island.`,c:'CHA 8 persuade',y:[`"Ubin is quarry and kampung," he says. "We cut stone here for roads. Now it's mostly bird and boar. Old Aunty Rohani lives in the third house past the jetty. She knew everyone." His eyes glint. "Especially the Soo family."`,'xp+l flag:cg_ubin_trip flag:cg_knows_names'],n:[`He is busy steering and waves you to enjoy the view.`,'xp+m flag:cg_ubin_trip']},
 {t:`Share your snacks with the other passengers.`,y:[`The onion auntie gives you a cucumber. The cyclists give you a high-five. Boat friendships form fast.`,'xp+m mp+3 flag:cg_kind flag:cg_ubin_trip']},
 {t:`Count the passengers to make sure there are twelve.`,y:[`There are. The law says twelve; Uncle Lim winks. You settle back.`,'xp+s flag:cg_ubin_trip']} ]);

S_('cgC_village','Ubin Village','village|🏡 🚲',
`The jetty opens onto a dusty lane lined with bicycle rental shops, a tiny provision store and a coffee shop with three tables. Old Malay kampung houses stand on stilts among coconut palms, with washing hanging on lines and chickens pecking in the yard. A hand-painted sign reads: "Bicycles for rent. Cold drinks. No wifi."\nIt feels like stepping back fifty years.`,[
 {t:`Rent bicycles for the group ($3 each).`,r:'gold:3',y:[`Slightly rusty, very rattly and surprisingly fast. You pedal down the lane with a tinkle of bells.`,'gold-3 xp+m mp+3']},
 {t:`Buy cold drinks from the little shop ($2).`,r:'gold:2',y:[`Bottles of ice-cold soda from a chiller in the corner. You drink on the shop's wooden bench.`,'gold-2 hp+3 mp+4 xp+s']},
 {t:`Ask the shopkeeper where Aunty Rohani lives.`,c:'CHA 8 persuade',y:[`"Third house, near the old well," he says, pointing. "She cooks banana fritters every afternoon. Bring a smile."`,'xp+m'],n:[`"Many aunties here," he says. "Ask anyone."`,'xp+s']},
 {t:`Walk around the village and take it all in.`,y:[`Pale sand, bright flowers, a three-legged dog sleeping on the road. Everyone says hello.`,'xp+m mp+3']} ]);

S_('cgC_aunty','Aunty Rohani','village|👵 🍌',
`Aunty Rohani's house is small and cheerful, with blue shutters and a wide veranda. She is frying banana fritters in a big black wok over a charcoal fire. She has silver hair under a flowery scarf and a smile like a sunbeam. "Sit, sit," she says. "You are the children Lim called about? Eat first, talk later."\nOver sweet tea and hot banana fritters, you tell her everything.`,[
 {t:`Ask her what she remembers about Mei.`,y:[`Aunty Rohani sighs. "I was seven when Mei was seven. We played on the beach every day. She had a little wooden boat her father carved, with a red sail and her name on the side. In the storm of 1959, she took it to the water's edge to see her father's fishing boat come home. A wave... and then... she was gone." She wipes her eyes. "Her mother never stopped lighting that lantern."`,'xp+l flag:cg_knows_storm flag:cg_knows_names mp+2']},
 {t:`Ask about Madam Soo Lian.`,y:[`"The kindest person in the village," says Aunty Rohani. "Her kueh, her tea, her sweet singing. She sang Mei a lullaby every night about a boat that finds its way home. Everyone in the kampung knew it. After Mei... she sang it to the sea. Every night."`,'xp+l flag:cg_knows_peranakan flag:cg_lullaby']},
 {t:`Ask what Madam Soo would want most.`,c:'WIS 9 spirit',y:[`Aunty Rohani looks at you for a long time. "To know she is not alone," she says finally. "And that Mei is safe. A boat. A light. A song. She never stopped asking the sea for those three things." She nods at you. "You understand."`,'xp+xl flag:cg_lesson_ghost flag:cg_lullaby mp+3'.replace('xp+xl','xp+l')],n:[`She shrugs. "Peace, I think. What anybody wants."`,'xp+m']},
 {t:`Help her in the kitchen.`,c:'DEX 8 craft',y:[`You fry, flip and sprinkle sugar on the fritters, under her sharp eye. At the end she pats your hand. "A good cook is a good listener," she says.`,'xp+m +cg_kaya hp+5 bond:cg_priya'],n:[`You burn the first batch. She laughs and shows you again.`,'xp+s hp+4']} ]);

S_('cgC_lullaby','The Lullaby','village|🎶 🌴',
`When the fritters are finished, Aunty Rohani sits on her veranda and hums a tune, soft and slow, like a boat rocking at anchor. "This is the one," she says. "In Malay, in Hokkien, in a little bit of English. It has no author. Mothers sang it all along this coast."\nShe begins to sing, in a high thin voice, a verse about a little boat that follows a lantern home. Your eyes sting.`,[
 {t:`Listen and memorise every word.`,c:'INT 8 lore',y:[`The words are simple: "Little boat, little boat, follow the light, home is here when the stars are bright." By the third verse you can hum it perfectly.`,'xp+l flag:cg_lullaby mp+4'],n:[`You catch most of it. She repeats it twice more, patiently, until you have it.`,'xp+m flag:cg_lullaby mp+3']},
 {t:`Sing along as best you can.`,y:[`Your voice wobbles, but Aunty Rohani smiles and sings louder, and soon you are singing together, in a quiet duet by the sea.`,'xp+l flag:cg_lullaby mp+5']},
 {t:`Record it on your phone.`,y:[`Aunty Rohani nods. "A good idea. Songs should be kept." You play it back in the evening to remember every word.`,'xp+m flag:cg_lullaby mp+2']},
 {t:`Hold her hand quietly.`,y:[`Her hand is warm and dry and strong. When the song ends, she squeezes yours and says: "Be gentle with her."`,'xp+m flag:cg_lullaby mp+4 flag:cg_kind']} ]);

S_('cgC_chek','Chek Jawa Wetlands','park|🌊 🦀',
`Chek Jawa is a stretch of coast on the eastern tip of Ubin, with a boardwalk through mangroves, sea grass and rocky shore. At low tide, you can see starfish, sea cucumbers, hermit crabs and spiky sea urchins in the shallow pools. A tall tower overlooks the whole coast.\nA ranger waves at you from the boardwalk. "Careful where you step!"`,[
 {t:`Look into the rock pools.`,c:'WIS 8 survive',y:[`A blue sea star, three hermit crabs in borrowed shells and a tiny orange fish darting between your reflections. "Look, don't touch," says the ranger, with a pleased smile.`,'xp+m mp+3'],n:[`Seaweed, mostly. A sea star, which you spot at the last second.`,'xp+s mp+2']},
 {t:`Climb the Jejawi Tower and take in the view.`,c:'CON 8 endure',y:[`Sixty steps up. The whole eastern tip lies below you, with Johor Bahru shimmering across the water. A breeze fills your lungs.`,'xp+m mp+4 hp-1'],n:[`Panting halfway, you rest, then carry on. The view is worth it.`,'xp+m hp-1']},
 {t:`Listen to the ranger's talk about the mangrove.`,y:[`"Mangroves clean the water, shelter the fish and protect the coast," she says. "A forest at the edge of the sea. If we look after it, it looks after us."`,'xp+m mp+2']},
 {t:`Rest on the bench and eat your snack.`,y:[`Sea breeze, a good snack, and your best friends. A perfect pause.`,'xp+s hp+3 mp+3']} ]);

S_('cgC_boatbuilder','Uncle Hassan\'s Boatshed','pier|🔨 ⛵',
`At the north end of the jetty, you find an open shed that smells of sawdust and varnish. Inside, an old man with a leathery face, Uncle Hassan, is building a small wooden boat. His tools hang from nails on the wall, and half-finished hulls rest on trestles. He peers at you over his glasses.\n"Visitors, eh? Don't touch the chisels."`,[
 {t:`Tell him about the little boat in the old photo.`,r:'item:cg_photo',y:[`He studies the photograph closely, then nods slowly. "A toy sailboat. Rounded keel, single mast, red sail. I could make one, if you'd like. But the doing is better than the having." He gives you a piece of cedar and a small knife.`,'xp+l flag:cg_replica_made']},
 {t:`Ask if he can show you how to make a toy boat.`,c:'CHA 8 persuade',y:[`"Come, then," he says. "Sit." For an hour he guides your hands, long strokes along the grain, a gentle sanding, a drop of glue for the mast. "Slow is good," he says. "Boats don't like being rushed."`,'xp+l flag:cg_replica_made'],n:[`He is busy but says: "Another day. Watch, for now."`,'xp+m']},
 {t:`Offer to sweep up the sawdust in return for a lesson.`,y:[`You sweep for twenty minutes. He gives a small, approving nod, and shows you how to hold a chisel.`,'xp+m flag:cg_kind']},
 {t:`Watch from the door and admire his work.`,y:[`A smooth, curved hull, a perfect little mast. It is a pleasure to watch someone who loves what they do.`,'xp+s mp+2']} ]);

S_('cgC_build','Making the Little Boat','pier|⛵ 🛠️',
`Under Uncle Hassan's eye, you start work on the boat. A curved hull, a thin mast, a triangle of red cloth for the sail. It is harder than it looks. The cedar is smooth and sweet-smelling, and every part has to be exactly right.\nUncle Hassan sits on a stool, humming along to the radio, calling out advice. "Slow! Gentle! The boat knows."`,[
 {t:`Take your time and carve carefully.`,c:'DEX 8 craft',y:[`By late afternoon, a small wooden sailboat sits on the workbench, light, shapely and a little crooked. You carve MEI on the hull in tiny letters. Uncle Hassan whistles. "Beautiful. She will love it."`,'xp+xl +cg_replica flag:cg_replica_made mp+3'.replace('xp+xl','xp+l')],n:[`The hull cracks. You start again, and the second try is better. By dusk you have a small wooden boat that floats, just about.`,'xp+m +cg_replica flag:cg_replica_made mp+2']},
 {t:`Ask Uncle Hassan to help with the sail.`,y:[`He cuts a perfect triangle of red cloth and stitches it to the mast in a minute flat. "Sail is the soul," he says.`,'xp+m +cg_replica flag:cg_replica_made mp+3']},
 {t:`Use your gadget skills to rig a clever pulley.`,r:'skill:cg_gadget|cls:cg_tinker',y:[`A tiny pulley and a thread: you can raise and lower the sail with a flick. Uncle Hassan stares. "Clever child."`,'xp+l +cg_replica flag:cg_replica_made mp+3']},
 {t:`Do not make it. It would be wrong to copy someone's lost toy.`,y:[`Uncle Hassan nods slowly. "Perhaps you are right. Some things must be found, not made." He gives you a handful of cedar curls and a smile.`,'xp+m mp+2 flag:cg_kind']} ]);

S_('cgC_quarry','The Granite Quarry','park|⛏️ 🌊',
`Ubin means "granite" in Malay, and this is where the granite came from. A deep, turquoise lake fills an old quarry, ringed by sheer grey cliffs. Years ago, workers cut stone from here to build roads and buildings. A wooden platform overlooks the water. The cliffs echo your voice.\n"Hello!" you shout. "Hello hello hello..."`,[
 {t:`Shout your name and listen to the echo.`,y:[`"Hello... hello... hello..." it comes back. A ranger beside you smiles. "A good echo, isn't it? Granite makes the best ones."`,'xp+s mp+3']},
 {t:`Read the sign about the quarry's history.`,c:'INT 8 lore',y:[`For decades the quarry supplied stone for Singapore's growth. Then the work stopped, and rain filled the pit with water. Nature took over.`,'xp+m'],n:[`The sign is long. You skim it and look at the water.`,'xp+s']},
 {t:`Climb up to the rocky viewpoint.`,c:'STR 8 climb',y:[`A short scramble, and the whole lake sparkles below you. A kingfisher streaks across.`,'xp+m mp+3'],n:[`The rocks are slippery. You take it slowly and reach the top, scraped but pleased.`,'hp-1 xp+m']},
 {t:`Stay well back from the edge, as the sign says.`,y:[`Sheer edges, deep water. Safety first.`,'xp+s']} ]);

S_('cgC_dusk','The Last Ferry','pier|🌅 ⛴️',
`The sun is low and gold on the water as the last bumboat of the day putters back toward the mainland. Uncle Lim is at the wheel again, humming. The passengers are quiet and sleepy. Behind you, Ubin's coconut palms turn into silhouettes.\nUncle Lim lifts one hand off the wheel and points across the bow. At the tree line along the Changi coast, a faint white shape is appearing in the dusk. A house.`,[
 {t:`Watch the house until it is out of sight.`,y:[`It gleams for a long minute, white among black trees. A single window glows. Then the shape fades, like breath on glass. Uncle Lim says nothing. But his hands tighten on the wheel.`,'xp+m mp+2 flag:cg_saw_house']},
 {t:`Ask Uncle Lim whether the boat could stop at the beach.`,c:'CHA 9 persuade',y:[`"No, no," he says. "Not tonight. Tonight she is only looking at us. I'd rather you went home and thought." He taps his bell. "The house will wait."`,'xp+m flag:cg_saw_house'],n:[`"No," he says firmly. "Home first."`,'xp+s flag:cg_saw_house']},
 {t:`Hold the replica boat, if you have one, close.`,r:'item:cg_replica',y:[`You hold it in both hands. As the house fades, you feel a very faint tug, as if something is calling for it. "Soon," you whisper.`,'xp+l mp+3 flag:cg_saw_house']},
 {t:`Lie back and close your eyes.`,y:[`The engine thrums. The sea hisses. You sleep until the jetty bumps against the pier.`,'xp+s hp+3 mp+3']} ]);
})();
