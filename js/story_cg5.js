/* THE LADY OF CASUARINA HOUSE (500 edition) — Chapters D (Hungry Ghost Festival) and E (Friends & Heartlands) */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const DUSK = 'flag:cg_saw_house?cg_duskask';

/* =============== CHAPTER D: THE FESTIVAL =============== */
G.chapter('cgD',{ story:'changi', n:'Chapter 6: The Month of Offerings', sub:'Hungry Ghost month, up close', ch:3, region:'cg_festival', art:'temple|🏮 🔥', age:11, btn:'Join the neighbourhood',
  text:`In the seventh lunar month, Singapore's neighbourhoods transform. Aunties set up long tables of food, oranges and incense by the roadside. Temples hold prayers and charity auctions. Stages go up in carparks for getai, loud, cheerful live shows. Burners glow after dark, safely tended, as families remember their ancestors and offer kindness to all spirits, even the lonely ones.\nIf you want to understand how to treat a restless spirit with respect, this is the best classroom in the world.`,
  beats:()=>G.mix(['cgD_open','cgD_temple','cgD_paper','cgD_offering','cgD_auction','cgD_getai','cgD_priest','cgD_talisman','cgD_vigil','cgD_ahma'],20,{nocamp:true}).concat([DUSK]) });

S_('cgD_open','The Month of Offerings','void|🏮 🍊',
`The void deck is almost unrecognisable: red lanterns hang from the beams, tables are crowded with oranges, tins of biscuits and cups of tea. A tall man on a ladder is stringing up lights. Aunties in aprons bustle about with pots of rice and bags of paper ingots. Everyone seems cheerful and busy and a bit mysterious.\n"Eh, you! Free hands!" calls an auntie. "Come help, come help."`,[
 {t:`Help set up the long offering tables.`,c:'STR 8 endure',y:[`Heavy tables, folding chairs, bags of rice. By the end you are warm, tired and honoured to be useful. An auntie gives you a mandarin orange in thanks.`,'xp+m +cg_oranges flag:cg_oranges_got flag:cg_respect mp+2'],n:[`You wobble under a table but a neighbour catches the other end. Teamwork.`,'xp+s flag:cg_respect']},
 {t:`Hold the ladder for the uncle stringing lights.`,y:[`"Steady! Steady!" he calls. You grip tight. When he descends, he shakes your hand.`,'xp+m flag:cg_kind mp+2']},
 {t:`Ask an auntie what each item means.`,c:'INT 8 lore',y:[`"Rice, for hunger. Tea, for thirst. Oranges, for good luck and sweetness. Paper, for what they need in the other world. A kind word, for what they need most." She smiles. "The last one is free."`,'xp+l flag:cg_lesson_ghost'],n:[`She is too busy to explain but hands you a bag of biscuits to carry.`,'xp+s']},
 {t:`Watch quietly from the side.`,y:[`A whole neighbourhood doing something kind together. It is rather beautiful.`,'xp+s mp+3']} ]);

S_('cgD_temple','The Neighbourhood Temple','temple|🛕 🙏',
`Tucked into a corner of the estate is a small Taoist temple with red pillars and a green-tiled roof. Incense curls from burners in the courtyard. Inside, the air is cool and smells of sandalwood. A middle-aged man in a plain white shirt and a hat, Master Chen, is sweeping the courtyard. He looks up at you with calm, careful eyes.\n"Young one," he says. "You look as if you are carrying something heavy."`,[
 {t:`Tell Master Chen about the house and the lady.`,y:[`He listens without interrupting, sweeping slowly. At the end, he says: "A spirit who keeps others close is a spirit who has lost someone. Anger is not her way. Grief is. Do not fight grief. Sit with it."`,'xp+l flag:cg_lesson_ghost mp+3']},
 {t:`Ask what to do if a spirit will not let a friend go.`,c:'WIS 9 persuade',y:[`"First, kindness. Offer what she misses. Second, respect. Never shout. Third, if all else fails, and only then," he lowers his voice, "a firm word and a blessing to send her on her way. But a ghost sent away unhappy is a ghost who cries for a hundred years. Choose gently."`,'xp+xl flag:cg_lesson_ghost mp+3'.replace('xp+xl','xp+l')],n:[`He smiles. "That is a big question. Come back when you have walked a little longer."`,'xp+m']},
 {t:`Offer to help sweep the courtyard.`,y:[`He hands you a broom. For half an hour you sweep leaves in silence. At the end he says: "A calm mind can face many things."`,'xp+m mp+4 flag:cg_respect']},
 {t:`Light a joss stick and bow.`,y:[`Master Chen shows you how to hold it. You bow three times, as he does, with a quiet request for the lost and lonely to find peace. The smoke rises straight up. He nods approval.`,'xp+m mp+3 flag:cg_respect']} ]);

S_('cgD_paper','Folding Paper','temple|📄 🚣',
`In the temple hall, a long table is covered with sheets of gold and silver paper. Volunteers fold paper ingots, lotus flowers and tiny boats. Master Chen's wife, a tiny woman with fast hands, shows you how. "Fold, fold, tuck. Like this."\nA paper boat takes seven folds. She watches you carefully.`,[
 {t:`Fold a paper boat with a red sail.`,c:'DEX 8 craft',y:[`Your first boat is lopsided. Your second is neat. By the fifth, it floats on the water in the temple bucket. She smiles. "Now you know how."`,'xp+l +cg_paperboat flag:cg_paperboat_made mp+2'],n:[`Your boat crumples. She shows you again, with unlimited patience. By the end, you have a serviceable boat.`,'xp+m +cg_paperboat flag:cg_paperboat_made']},
 {t:`Fold gold ingots for the burner.`,y:[`Twenty ingots, one after another. It is calming, like counting breaths. When you finish, the volunteers cheer politely.`,'xp+m mp+4 flag:cg_respect']},
 {t:`Teach your friend how to fold a boat.`,r:'anyally',y:[`You show them step by step. Their boat is a catastrophe, but they love it. The temple wife nods at you approvingly.`,'xp+m mp+3 flag:cg_kind']},
 {t:`Sit quietly and watch the volunteers.`,y:[`Hundreds of hands, folding paper for people they've never met. It is hard to explain how kind it is.`,'xp+s mp+3']} ]);

S_('cgD_offering','Setting the Table','void|🍊 🕯️',
`The evening offering is the big one. Neighbours gather round a long table in the void deck, spread with food: oranges, cakes, rice, soup, fruit, tea, even cans of fizzy drinks. A hush falls. An elderly man says a short prayer. Joss sticks glow in a long red line. Everyone steps back politely, as if waiting for guests.\nYou have been asked to carry the last tray.`,[
 {t:`Carry the tray steadily and set it down carefully.`,c:'DEX 8 craft',y:[`Not a drop spilled. You set it exactly where the auntie points. The table looks like a feast for a hundred.`,'xp+m flag:cg_respect mp+2'],n:[`The tray tilts, but a neighbour's hand catches it. "Careful, careful," she whispers, smiling.`,'xp+s flag:cg_respect']},
 {t:`Add your own offering: oranges or kueh.`,r:'item:cg_oranges|item:cg_kueh',y:[`You place your offering at the end of the table and bow. A cool breeze brushes your hand, so gently that you wonder if you imagined it.`,'xp+l mp+4 flag:cg_respect flag:cg_offering_given']},
 {t:`Stand with the neighbours and be quiet.`,y:[`A hush, like a held breath. A candle flickers and steadies. You are suddenly aware how many people in this block care about being kind.`,'xp+m mp+4']},
 {t:`Ask the old man what the prayer was.`,c:'CHA 8 persuade',y:[`"To all who are lost, hungry or forgotten," he says. "Come, eat, rest, and then go in peace." He sounds so tired and kind that you almost cry.`,'xp+l flag:cg_lesson_ghost'],n:[`He just smiles and pats your shoulder.`,'xp+s']} ]);

S_('cgD_auction','The Charity Auction','temple|🔨 🏮',
`In the temple courtyard, a lively auction is in full swing. Neighbours bid on pots of orchids, lucky lanterns, plates of fruit and a very ugly golden pig. The money goes to charity. An auctioneer in a bright shirt waves his hammer and shouts: "Going once! Going twice!"\nHakim is bidding furiously on a basket of pineapples, for no reason he can explain.`,[
 {t:`Bid $4 on a small lantern.`,r:'gold:4',c:'CHA 8 persuade',y:[`"Sold, to the young one!" says the auctioneer. Cheers all round. You carry the glowing paper lantern home, for a good cause.`,'gold-4 +cg_glowband xp+m flag:cg_kind'],n:[`Somebody bids $5. You smile and clap for them.`,'xp+s']},
 {t:`Help the auctioneer by holding up items.`,y:[`"Lot number twelve!" he calls, and you raise a pot of orchids high. The crowd applauds. You have never felt so useful.`,'xp+m mp+3 flag:cg_kind']},
 {t:`Stop Hakim buying a hundred pineapples.`,r:'ally:cg_hakim',y:[`You pull his arm. "I only wanted one," he says, red-faced. Everyone laughs, and he buys exactly one.`,'xp+m bond:cg_hakim mp+2']},
 {t:`Donate $2 to the charity box.`,r:'gold:2',y:[`The organiser gives you a sticker and a big smile.`,'gold-2 xp+m flag:cg_kind']} ]);

S_('cgD_getai','Getai Night','void|🎤 🎶',
`The getai is in full swing. A stage in the carpark glitters with coloured lights, and a singer in a sequinned gown belts out a Hokkien song to the delight of the crowd. Aunties clap in time. Uncles fan themselves. The first row of red plastic chairs stays empty, with little paper signs: Reserved.\nA bright, brash, warm party for everyone, seen and unseen.`,[
 {t:`Sit in the back and clap along.`,y:[`The music is loud and silly and wonderful. You find yourself laughing for the first time in days.`,'xp+m mp+5']},
 {t:`Look at the empty front row.`,c:'WIS 9 spirit',y:[`In the corner of your eye, one of the empty seats seems to creak, as if someone small has hopped up on it. You hear, very faintly, a child's clap, in time to the music. You smile, and whisper "enjoy." The clapping continues.`,'xp+l mp+3 flag:cg_lesson_ghost'],n:[`The chairs are just chairs, but you hope someone is enjoying the show.`,'xp+m mp+2']},
 {t:`Request a song from the singer.`,c:'CHA 9 perform',y:[`She grins. "Which one?" You shout the name of the old lullaby. She hums a bar and the whole carpark claps along. For one verse, everyone sings.`,'xp+l mp+4 flag:cg_lullaby'],n:[`She doesn't know it, but plays something else, and everyone dances.`,'xp+m mp+3']},
 {t:`Dance with the aunties.`,y:[`Left, right, shuffle, clap. You are terrible. They are wonderful. A good time had by all.`,'xp+m mp+4 hp-1']} ]);

S_('cgD_priest','Master Chen\'s Test','temple|🕯️ 🛕',
`Master Chen leads you into a dim back room of the temple, lit by a single candle. He sits cross-legged on a mat and gestures to the floor. "Before I teach you anything stronger than kindness," he says, "I must know whether you are steady. Sit. Breathe. Answer three questions."\nThe candle flickers. A ceiling fan creaks. Your heart thuds.`,[
 {t:`Sit still and breathe, as he says.`,c:'WIS 9 resist',y:[`In... out... in... out. The candle steadies. The room grows calmer than it has any right to be. After ten minutes, he nods once. "Good."`,'xp+l mp+4 flag:cg_priest_ok'],n:[`You fidget, scratch, and giggle once. But you try again, and the second time works.`,'xp+m flag:cg_priest_ok']},
 {t:`Answer: "Why do you want to help her?"`,y:[`"Because nobody should be lonely forever," you say, after a moment. "Not even ghosts." Master Chen's eyes soften.`,'xp+l mp+3 flag:cg_priest_ok']},
 {t:`Answer: "Would you harm her if you had to?"`,y:[`"Only if she was hurting someone," you say slowly. "And only if every kind thing had failed." He nods, as if this is the right answer.`,'xp+l mp+3 flag:cg_priest_ok']},
 {t:`Say you are scared, and that it is okay to be.`,y:[`"Good," says Master Chen. "A brave person is not someone who feels no fear. It is someone who stays kind while afraid." He pours you a cup of tea.`,'xp+l mp+5 flag:cg_priest_ok']} ]);

S_('cgD_talisman','The Talisman','temple|📜 🖌️',
`Master Chen takes a sheet of yellow paper and a brush dipped in red ink. With slow, steady strokes he writes a pattern of characters and symbols. When he finishes, he holds it up and blows gently. The ink dries.\n"A talisman," he says. "It is a last resort. Not a weapon. A way to ask, firmly and respectfully, for a spirit to move on. Use it only when every kindness has failed. If you use it, do so with a heavy heart. A spirit sent away unhappy is a spirit who weeps in the dark."`,[
 {t:`Accept it with both hands and a bow.`,y:[`You tuck the talisman carefully into your notebook. It is light as a leaf, but it feels heavy. "Thank you," you whisper.`,'xp+l +cg_talisman flag:cg_talisman_got flag:cg_respect']},
 {t:`Say: "I hope I never have to use it."`,y:[`"That," says Master Chen, "is exactly the answer I hoped for." He places the talisman in your palm and folds your fingers over it.`,'xp+l +cg_talisman flag:cg_talisman_got mp+3']},
 {t:`Politely decline. You would rather try kindness alone.`,y:[`He smiles, almost proudly. "A noble choice. But a charm for the road, then." He hands you a small peace charm instead.`,'xp+m +cg_charm mp+3 flag:cg_kind']},
 {t:`Ask him to write a second one for a friend.`,r:'ally:cg_hakim|ally:cg_priya|ally:cg_jiahui',y:[`"A kind thought," he says. But he writes only one, and gives it to you. "Carry it for all of you."`,'xp+m +cg_talisman flag:cg_talisman_got']} ]);

S_('cgD_vigil','Night of the Burners','void|🔥 🌌',
`Late that night, the whole neighbourhood gathers around the big burners at the corner of the estate. Neighbours feed paper offerings into the flames, each with a murmured prayer. Sparks rise like orange fireflies into the dark sky. The air smells of ash, orange peel and warm wax.\nA neighbourhood volunteer in a reflective vest watches the crowd to keep everyone safe.`,[
 {t:`Burn the paper boat you folded.`,r:'item:cg_paperboat',y:[`You place it on the fire with both hands. It curls, glows red, and rises in a ribbon of smoke. A little wind carries it toward Changi. You feel something very small, very grateful, brush your sleeve.`,'-cg_paperboat xp+l mp+5 flag:cg_respect']},
 {t:`Add a few gold ingots and say a quiet prayer.`,y:[`"For whoever needs this," you whisper. The flames brighten, just for a heartbeat.`,'xp+m mp+4 flag:cg_respect']},
 {t:`Stand back and watch with the neighbours.`,y:[`Faces glowing orange, quiet and kind. It is a good feeling to be part of something bigger.`,'xp+m mp+4']},
 {t:`Look at the sparks and let your mind wander.`,y:[`Each spark is like a tiny wish, floating up. You make one of your own.`,'xp+s mp+4']} ]);

S_('cgD_ahma','Stories at the Dinner Table','hdb|🍲 👵',
`That evening, {guardian} makes your favourite dishes and sits opposite you, watching you eat. "In my day," says {guardian}, "we also had the seventh month. My mother told us never to point at the moon, and never to wander alone at night. Not to scare us. To keep us home."\n{guardian} puts down their chopsticks. "But I have a thing to tell you, since you are asking about ghosts."`,[
 {t:`"Please tell me."`,y:[`"When I was nine," says {guardian}, "my father's boat didn't come home. My mother lit a lantern every night. I remember the glow in the window. He came home after three days, hungry and sunburnt. She never turned that lantern off for a week. She said: a light is a promise. I think that lady by the sea is still keeping hers."`,'xp+l mp+5 flag:cg_lesson_ghost flag:cg_told_adult']},
 {t:`Hug {guardian}.`,y:[`{guardian} stiffens, then softens. "My brave boy/girl. Be careful with such big things." The hug lasts longer than usual.`,'xp+m mp+5 hp+5']},
 {t:`Ask {guardian} to teach you a proverb for courage.`,y:[`"Kind heart, calm hands," says {guardian}. "Repeat it." You do. It is your new motto.`,'xp+m mp+4 skill:cg_calm'.replace('skill:cg_calm','')]},
 {t:`Help wash up and say goodnight.`,y:[`Plates, bowls, bubbles. You sleep soundly.`,'xp+s rest']} ]);

/* =============== CHAPTER E: FRIENDS & HEARTLANDS =============== */
G.chapter('cgE',{ story:'changi', n:'Chapter 7: Friends and the Heartlands', sub:'Everyone has a story', ch:3, region:'cg_tampines', art:'hdb|🤝 🏙️', age:11, btn:'Spend time with friends',
  text:`A mystery is easier to face with friends. Priya has a science fair, Hakim has a football match, Jia Hui has a fear she has been hiding, Mochi has kittens, and Aiman's mother has an open door and a hopeful face.\nThis week, the best way to solve the mystery might be to look after the people around you.`,
  beats:()=>G.mix(['cgE_priya','cgE_hakim','cgE_jiahui','cgE_kittens','cgE_aiman','cgE_tan','cgE_openhouse','cgE_mall','cgE_rain'],18,{nocamp:true}).concat([DUSK]) });

S_('cgE_priya','Science Fair Panic','classroom|🔬 🧪',
`The school science fair is today, and Priya's project is the spirit detector. She has been awake all night. Her hands shake slightly as she arranges the biscuit tin on her table. A crowd of parents and teachers wander past. A judge in a lanyard approaches with a clipboard.\n"And what do we have here?" he asks.`,[
 {t:`Stand next to Priya and explain the science.`,c:'INT 8 lore',y:[`You explain how temperature changes can be detected, and how the buzzer works. The judge nods, scribbles and moves on. Priya squeezes your arm. "We got a gold!" she whispers.`,'xp+l bond:cg_priya flag:cg_friend_priya mp+3'],n:[`You stumble over the explanation, but Priya rescues it with a brilliant diagram. They win a silver.`,'xp+m bond:cg_priya flag:cg_friend_priya']},
 {t:`Hold the detector steady while she presents.`,y:[`Your hands are rock still. Priya delivers a perfect talk. Afterwards she is shaking. "Thank you," she says.`,'xp+m bond:cg_priya flag:cg_friend_priya']},
 {t:`Tell the judge, honestly, that the project is a bit odd.`,y:[`"Very creative," says the judge, with a smile. "Never stop asking questions." He awards them the "Most Imaginative" prize.`,'xp+m mp+3 bond:cg_priya flag:cg_friend_priya']},
 {t:`Wander the fair and look at other projects.`,y:[`A volcano, a solar oven, a robot that makes tea very badly. You come away inspired.`,'xp+m mp+3']} ]);

S_('cgE_hakim','Match Day','park|⚽ 🏟️',
`The inter-school football match is at Our Tampines Hub, on the big pitch. Hakim plays striker, determined and sweaty. The crowd is full of parents with flags and aunties with towels and ice-cold bottles of water. The score is 2–2, with five minutes left.\nHakim's Nenek is in the front row, waving a green and white flag.`,[
 {t:`Cheer as loudly as you can.`,y:[`You shout until your voice cracks. Hakim scores in the last minute, and Nenek leaps up and almost knocks over the person in front. A great, happy roar.`,'xp+m mp+5 bond:cg_hakim flag:cg_friend_hakim']},
 {t:`Hand out cold water to the players at half-time.`,y:[`Hakim chugs a whole bottle. "You're a legend," he gasps. The team gives you a thumbs-up.`,'xp+m bond:cg_hakim flag:cg_friend_hakim flag:cg_kind']},
 {t:`Be a substitute when a player gets a cramp.`,c:'DEX 9 dodge',y:[`You run onto the pitch, dribble past one defender, and pass to Hakim, who scores. A hero of five minutes.`,'xp+l bond:cg_hakim flag:cg_friend_hakim skill:cg_sports'],n:[`You trip over your own feet. But the team wins anyway.`,'xp+m hp-1 bond:cg_hakim flag:cg_friend_hakim']},
 {t:`Sit with Nenek and keep her company.`,y:[`She pats your knee with each near-miss and offers you kuih from a tupperware. Her stories make the match fly by.`,'xp+m +cg_sweets mp+3 bond:cg_hakim flag:cg_friend_hakim']} ]);

S_('cgE_jiahui','The Sleepover','hdb|🌙 🛏️',
`Jia Hui's flat is a cheerful mess of cushions, toys and a very loud parrot. She has insisted on a sleepover. "To prove I'm not scared," she says. By ten o'clock, you are all on the floor under blankets, with torches and a ghost film that Jia Hui's cousin recommended.\nA creaky sound comes from the next room. Jia Hui grabs your arm so hard it hurts.`,[
 {t:`Say, calmly, "It's probably the fan."`,c:'WIS 8 resist',y:[`It is the fan. Jia Hui lets out a very long breath and says, "I knew that." The parrot says "I KNEW THAT." Everyone dissolves into giggles.`,'xp+m mp+4 bond:cg_jiahui flag:cg_friend_jiahui'],n:[`You are not sure it's the fan, but you stay cheerful. Jia Hui finally falls asleep on your shoulder.`,'xp+m bond:cg_jiahui flag:cg_friend_jiahui']},
 {t:`Turn off the film and tell funny stories instead.`,y:[`Knock-knock jokes, silly voices and a terrible impression of Mr Tan. By midnight you are all breathless with laughter.`,'xp+m mp+5 bond:cg_jiahui flag:cg_friend_jiahui']},
 {t:`Teach Jia Hui the breathing trick.`,y:[`In for four, out for four. By the fifth breath she is calmer. "It works," she whispers, surprised.`,'xp+l mp+4 bond:cg_jiahui flag:cg_friend_jiahui']},
 {t:`Check the next room with your torch.`,c:'DEX 8 sneak',y:[`You tiptoe in with a beam of light. A cat, curled up on a pile of washing, blinks at you. "Mochi?" you whisper. No: it's another cat. It purrs, unbothered.`,'xp+m mp+2 bond:cg_jiahui'],n:[`You bump a chair. It crashes. Everyone screams. Then everyone laughs.`,'xp+s mp+1']} ]);

S_('cgE_kittens','Mochi\'s Kittens','void|🐈 🍼',
`Under a parked car at the void deck, Mochi is lying on her side with four tiny kittens tucked in her fur, mewing and squirming. She looks up at you with her calm green eyes, as if saying: "Look what I did."\nA neighbour with a bag of cat food is crouched beside her. "Community cats," she says. "We feed them, and take them to the vet. These ones will need homes."`,[
 {t:`Help the neighbour set up a little shelter.`,c:'INT 8 craft',y:[`A cardboard box, a soft towel and a plastic cover for the rain. Mochi steps in and curls up. The neighbour smiles. "You've done a good job."`,'xp+l flag:cg_kitten flag:cg_kind bond:cg_mochi mp+3'],n:[`The box collapses twice, but on the third try it holds.`,'xp+m flag:cg_kitten flag:cg_kind']},
 {t:`Gently pet a kitten.`,y:[`So small and soft, like a handful of warm cloud. Mochi lets you, watching carefully.`,'xp+m mp+5 flag:cg_kitten']},
 {t:`Bring a bowl of water.`,y:[`Mochi laps at it gratefully. The kittens squeak. A very sweet minute.`,'xp+m flag:cg_kind mp+3']},
 {t:`Ask the neighbour about adopting one.`,y:[`"Wait until they are older," she says. "And ask your parents first." You promise to ask.`,'xp+m flag:cg_kitten']} ]);

S_('cgE_aiman','Aiman\'s Flat','hdb|🏠 📖',
`Aiman's mother, Mdm Rahmat, opens the door and her tired face breaks into a smile. "Come in, come in," she says. Aiman's flat is neat and warm, with a prayer mat folded on a shelf, a football on the sofa and a framed photo of Aiman in his school uniform.\nShe has made tea and curry puffs. "Sit, nak. I haven't had visitors in days."`,[
 {t:`Say how much you hope he will come home.`,y:[`She holds your hand tightly. "Me too," she says, simply. "Every minute." She pours more tea, her hands trembling. You stay a long time, just sitting.`,'xp+l mp+3 flag:cg_kind bond:cg_priya']},
 {t:`Ask if you can see Aiman's room.`,c:'CHA 8 persuade',y:[`She nods. His room is full of football posters and sketches. Under his pillow, you find a notebook full of little drawings of a house, a veranda and a lady with a bun. The last page says: "She is lonely. She wants someone to stay. Do not be afraid."`,'xp+l flag:cg_saw_house flag:cg_knows_timeslow mp+2'],n:[`She says, gently, that it's too painful for now. You understand.`,'xp+m flag:cg_kind']},
 {t:`Promise you will bring him home.`,y:[`She looks at you for a long time. "Don't promise that," she says quietly. "But try. That's all."`,'xp+m mp-1 flag:cg_kind']},
 {t:`Share a funny story about Aiman at school.`,y:[`You tell her about the time he put a rubber snake in Mr Tan's drawer. She laughs, then cries a bit, then laughs again. "That sounds like my boy."`,'xp+l mp+3 flag:cg_kind']} ]);

S_('cgE_tan','The Staffroom','classroom|🍎 📋',
`Mr Tan calls you into the staffroom after class. It smells of tea and photocopier toner. He sits behind a desk piled with exercise books, takes off his glasses and rubs his eyes. "I want to tell you something," he says. "When I was your age, a friend of mine vanished for two days on a school trip. They found him, safe, sleeping in a boat shed. He never explained."\nHe puts his glasses back on. "I want to say: I believe you, in my way."`,[
 {t:`Thank him and tell him what you plan to do.`,c:'CHA 8 persuade',y:[`He listens, grave and calm. "I can't stop you," he says. "I can only ask you to be careful, and to tell a grown-up where you are. And to call me if you need anything." He writes his number on a sticky note.`,'xp+l mp+3 flag:cg_told_adult flag:cg_kind'],n:[`He frowns. "Be careful." He gives you the number, anyway.`,'xp+m flag:cg_told_adult']},
 {t:`Ask him about his friend.`,y:[`"He said only: 'Somebody kept me company.' I never forgot." He smiles. "Maybe being found is not always the end of a story."`,'xp+m flag:cg_lesson_ghost mp+3']},
 {t:`Say nothing and nod.`,y:[`He nods back. Sometimes, adults and children understand each other without talking.`,'xp+s mp+2']},
 {t:`Offer to help him mark books.`,y:[`Forty exercise books and a lot of red ink. By the end, he is smiling for the first time in a week.`,'xp+m flag:cg_kind']} ]);

S_('cgE_openhouse','CCA Open House','classroom|🎭 🥁',
`The school hall is buzzing with the annual CCA open house. Booths line the walls: the Chinese Orchestra with their erhus and pipas, the Malay dance group in glittering costumes, the Indian classical dancers, the robotics club, the National Police Cadet Corps, the Art Club's mural. A smell of curry puffs and fried noodles drifts from the canteen.\nEveryone is smiling.`,[
 {t:`Join the lion dance practice.`,c:'DEX 8 dodge',y:[`You are the tail. It is hot, loud and thrilling. The drum booms. The lion leaps. The audience cheers. You have never sweated so happily.`,'xp+m mp+4 hp-1'],n:[`You step on the lion's foot. The head laughs. You start again, and it goes better.`,'xp+s mp+2']},
 {t:`Visit the robotics booth and try a challenge.`,c:'INT 8 craft',y:[`A mini-robot, a maze and a stopwatch. You solve it in forty seconds. The captain asks you to join.`,'xp+l mp+3'],n:[`The robot drives into a wall. A club member consoles you with a biscuit.`,'xp+s']},
 {t:`Watch the traditional dance performances.`,y:[`Flowing scarves, bright costumes and a rhythm that makes your toes tap. Four cultures, four dances, one proud school.`,'xp+m mp+5']},
 {t:`Eat everything the food stalls offer.`,r:'gold:4',y:[`Curry puffs, kuih, fried bee hoon, a paper cup of sweet soya. A feast for four dollars.`,'gold-4 hp+10 mp+3 xp+s']} ]);

S_('cgE_mall','Tampines Mall','mall|🛍️ 🏬',
`It is a rainy afternoon, so you drift into Tampines Mall with your friends. The air conditioning is chilly and delicious. Shop windows glow, escalators hum and a big screen plays adverts for the national day sale. A bubble-tea queue snakes around the corner.\nYou have a little pocket money and a long list of things that might be useful.`,[
 {t:`Buy a glow bracelet ($2).`,hide:true,r:'gold:2&!item:cg_glowband',y:[`Soft green light on your wrist. Comforting.`,'gold-2 +cg_glowband xp+s stayc']},
 {t:`Buy a packet of sweets ($2).`,hide:true,r:'gold:2&!sv:sweets',y:[`A packet of White Rabbit sweets. A useful pocket comfort.`,'gold-2 +cg_sweets xp+s svflag:sweets stayc']},
 {t:`Buy a Milo packet ($2).`,hide:true,r:'gold:2&!sv:milo',y:[`Chocolatey courage in a sachet.`,'gold-2 +cg_milo xp+s svflag:milo stayc']},
 {t:`Buy bubble tea to share with friends ($4).`,hide:true,r:'gold:4&!sv:tea',y:[`Brown sugar, boba, lots of ice. Everyone gets a sip. Spirits rise.`,'gold-4 hp+4 mp+5 xp+m svflag:tea bond:cg_priya stayc']},
 {t:`Just window-shop and enjoy the air conditioning.`,y:[`Free cold air, a free sample of a fruit tart, and an hour of peace.`,'xp+s mp+3'],k:1} ]);

S_('cgE_rain','Rainy Afternoon','hdb|🌧️ 📚',
`Rain drums on the window of your flat. The sky is a solid grey, and the lift smells of wet umbrellas. You sit on the floor with your clue notes spread out around you: the boat, the lantern, the song, the lady, Mei, a storm, a kind of kueh. The pieces seem to fit together, but the picture is still unfinished.\nA cup of {guardian}'s tea steams beside you.`,[
 {t:`Write a summary of everything you know.`,c:'INT 8 lore',y:[`Three columns: what happened, what she wants, what you can give. By the end you can see a plan forming, simple, kind and possible.`,'xp+l mp+4 flag:cg_knows_storm'],n:[`Your notes get messy, but the main idea is clear.`,'xp+m mp+2']},
 {t:`Take a nap and let your mind rest.`,y:[`Three hours of rain-sleep, deep and dreamless. You wake feeling refreshed.`,'xp+s rest']},
 {t:`Read the library book on folklore again.`,r:'item:cg_folkbook',y:[`A line jumps out at you this time: "A spirit who lingers has not been given leave to go. Give her leave." You underline it.`,'xp+m flag:cg_lesson_ghost mp+3']},
 {t:`Play a board game with {guardian}.`,y:[`Snakes and ladders, three rounds, and a lot of laughing. {guardian} wins twice, suspiciously.`,'xp+m mp+5 hp+3']} ]);
})();
