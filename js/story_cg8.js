/* THE LADY OF CASUARINA HOUSE — "adventure pack" rebalance:
   the house is now explored in three visits that are interleaved with the investigation, quiet chapters are thinner,
   random encounters are action-heavy, and money and Courage have real jobs. */
(function(){
const G = globalThis.G, I = G.item;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const DUSK = 'flag:cg_saw_house?cg_duskask';

/* ---------- items that make spending money matter ---------- */
I('cg_joss','Joss Sticks','🕯️','relic','A bundle of incense. Lit politely, it tells the unseen: "I come as a guest." Used up when lit.',{v:0,relic:true});
I('cg_salt','Packet of Coarse Salt','🧂','relic','Old folk wisdom: a line of salt stops cold mist and wandering things. Used up when poured.',{v:0,relic:true});
I('cg_key','Rusty Key','🗝️','relic','A small brass key, green with age. It looks as if it fits a trunk, or a chest, or a very old promise.',{v:0,relic:true});
I('cg_battery','Spare Batteries','🔋','relic','Keeps your torch alive in the dark parts of the house. Used up when needed.',{v:0,relic:true});

/* ---------- little builders ---------- */
const o = (t, y, fx, req) => [t,'',y,fx||'xp+s','','',req||''];
const c = (t, chk, y, fx, n, nfx, req) => [t,chk,y,fx||'xp+m',n||'It does not quite work out.',nfx||'xp+s',req||''];
const dare = (t, mp, y, fx, req) => [t,'',y,fx||'xp+l','','',req||'',mp];   // costs Courage, bigger reward
const L = (reg, title, em, text, ...opts) => [reg, title, em, text, opts];

/* ================= ACTION ENCOUNTERS (anywhere in Singapore) ================= */
const ACT = [
L('any','Stray Dog Chase','🐕',`A big, loud, brown dog bursts out from behind the bin chute and charges straight at you, barking. Its tail is wagging, but it looks like it wants to play very, very fast.`,
 c('Sprint for the nearest bench.','DEX 8 dodge',`You leap, scramble up and perch on the bench like a cat. The dog skids below, delighted, and a passing auntie laughs.`,'xp+m mp+2','The dog catches your shoelace and drags you in a happy circle. Only your pride is hurt.','xp+s hp-1'),
 o('Freeze and offer a sweet.',`The dog sits, sniffs, and gently takes the sweet. You have made a friend for the day.`,'xp+m mp+2 -cg_sweets','item:cg_sweets'),
 o('Stand still and let it sniff you.',`After a very long ten seconds, it licks your hand and trots away.`,'xp+s mp+1')),
L('any','Pickpocket!','🏃',`In the crowded kopitiam, a hand slides out of the crowd, snatches your pocket money and bolts for the door. Everybody is looking the other way.`,
 c('Chase him down the road.','DEX 9 dodge',`You weave through tables, vault a stool and grab his shirt at the kerb. He drops your money, pale and panting, and the uncles clap.`,'xp+l mp+2 gold+4 flag:cg_kind','He is faster. You lose him at the corner, and a few dollars with him.','xp+s hp-1 gold-4'),
 dare('Shout "THIEF!" in your loudest voice.',2,`The whole kopitiam jumps up. The thief panics and drops everything, and two uncles pin him to a chair until the security guard arrives.`,'xp+l gold+5 flag:cg_kind'),
 o('Let it go and check your bag.',`Annoying, but you still have your phone and your wits. You carry on, a bit poorer.`,'xp+s gold-3')),
L('any','Lost Wallet','👛',`On the pavement lies a fat leather wallet. Inside: an IC, a bus pass, and a lot of cash. A cleaner nearby is pretending not to look.`,
 o('Hand it in at the nearest counter.',`The owner arrives, trembling with relief, and presses an ang pow into your hand: "Good child. Take, take."`,'xp+l gold+10 mp+3 flag:cg_kind'),
 c('Find the owner yourself using the IC.','INT 8 lore',`You find his block, knock, and the owner nearly weeps. He gives you a thick red packet, and a promise of free fishballs for life.`,'xp+l gold+12 mp+3 flag:cg_kind','You give up and hand it to the guard instead. They thank you warmly.','xp+m gold+4 flag:cg_kind'),
 o('Quietly keep the cash.',`It feels heavy in your pocket, and heavier in your stomach. You are $10 richer and a good deal less happy.`,'gold+10 mp-3 flag:cg_rude')),
L('any','The Claw Machine','🧸',`At the arcade, a claw machine holds a plush toy that looks exactly like a Merlion. A boy has just lost four dollars to it, and is staring at it sadly.`,
 c('Pay $2 and try your luck.','DEX 8 craft',`The claw drops, grabs, lifts... and the Merlion tumbles into the chute! The boy cheers louder than you do.`,'gold-2 xp+m mp+3 +cg_merlion','The claw closes on air. The Merlion looks smug.','gold-2 xp+s','gold:2'),
 o('Watch the boy and learn the trick.',`He tells you: "Go for the tag, not the head." You tuck that away for later.`,'xp+m'),
 o('Walk on. Arcades eat money.',`Wise. Your pocket money survives.`,'xp+s')),
L('any','Sudden Downpour','🌧️',`The sky goes black in ten seconds. Then it falls on you like a bucket: a proper Singapore thunderstorm, with drains that overflow in minutes. You are two blocks from shelter.`,
 o('Open your umbrella and wade on.',`Your umbrella fights the wind, and wins. You arrive damp but triumphant.`,'xp+m mp+1','item:cg_umbrella'),
 c('Run for the covered walkway.','DEX 8 dodge',`You splash, slide and dive under the roof just as the sky opens fully. Everyone cheers.`,'xp+m mp+2','You are soaked to the skin before you arrive, and sneeze for an hour.','xp+s hp-2'),
 o('Buy a poncho from the 24-hour shop ($3).',`Bright yellow, very ugly, completely waterproof. You walk home like a banana, perfectly dry.`,'gold-3 xp+m mp+2','gold:3'),
 o('Wait it out under the nearest tree.',`Bad idea: lightning is shy of nobody. You move at once, a bit rattled.`,'xp+s hp-1')),
L('any','Dare at the Void Deck','🌚',`Three older kids block your way at the void deck. "Hey. Heard you are looking for ghosts. Dare you to knock on the door of the empty flat on the top floor. At night. Alone."`,
 dare('Take the dare. (Costs Courage)',3,`You climb eleven flights in the dark, knock three times and wait. Silence. Then, behind the door, something taps back, once. You run down the stairs faster than you have ever run, and the older kids stare at you with new respect. One hands you a packet of sweets.`,'xp+l gold+6 mp+2 flag:cg_kind'),
 c('Talk your way out of it.','CHA 8 persuade',`"Ghosts are not for fun," you say. "They are for being polite to." They are strangely impressed.`,'xp+m mp+2','They laugh at you, but let you pass.','xp+s'),
 o('Walk away and take the long way home.',`Nobody is chasing you. Nobody is impressed either, but you are in one piece.`,'xp+s')),
L('any','Fortune Teller','🔮',`Outside the temple, an old man with a tiny table and a bird in a cage says: "Pick a card, young one. Five dollars. The bird chooses, I only explain."`,
 o('Pay $5 and let the bird choose.',`The bird picks a card with a picture of a lantern. "A light for the lost," says the old man. "Something small, bought for a few dollars, will matter more than something expensive." He winks. "Also: be nice to cats."`,'gold-5 xp+l mp+3 flag:cg_hint','gold:5'),
 c('Haggle him down to $2.','CHA 8 persuade',`He sighs dramatically, takes $2, and the bird picks a card. It shows a bell. "Ring it when you need help," he says. You do not know what he means yet.`,'gold-2 xp+m mp+2 flag:cg_hint','He folds his arms. "Five. Or nothing."','xp+s','gold:2'),
 o('Just pat the bird and move on.',`The bird pecks your finger, gently, in what you decide is a friendly way.`,'xp+s')),
L('any','Temple Donation','🛕',`At a neighbourhood temple, an auntie sits at a table with a tin and a stack of red thread bracelets. "For good luck on your journey," she says. "Donate what your heart says."`,
 o('Donate $3 and take a bracelet.',`She ties the red thread on your wrist and murmurs a blessing. You feel, for the next little while, a bit braver and a bit luckier.`,'gold-3 xp+m mp+4 st:bless3 flag:cg_respect','gold:3'),
 o('Donate $1 politely.',`She smiles. "Small coin, big heart." She gives you an orange.`,'gold-1 xp+s mp+2 +cg_oranges','gold:1'),
 o('Thank her, and watch the incense smoke.',`The smoke curls up into the rafters and vanishes. You breathe slowly, and feel steadier.`,'xp+s mp+2')),
L('any','Lift Stuck!','🛗',`The lift jolts, and stops, between the 6th and 7th floors. The lights flicker. A small child beside you begins to cry, and the auntie with the shopping bags starts to mutter prayers.`,
 dare('Stay calm and lead everyone in a breathing count. (Costs Courage)',2,`"In for four, out for four," you say, and count aloud. By the time the technician arrives, everyone is calm, and the child is laughing at your counting voice. The auntie gives you a mandarin orange.`,'xp+l mp+2 +cg_oranges flag:cg_kind'),
 c('Press the alarm and call the hotline.','INT 8 craft',`A clear voice answers: "Please stay calm, help is coming." You relay it to everyone, and the lift moves in three minutes.`,'xp+m mp+2','The hotline is busy. You wait with everyone, and eventually the lift starts again.','xp+s'),
 o('Sit down and wait quietly.',`Eleven minutes. The lift hums back to life. Your knees are a little shaky.`,'xp+s mp+1')),
L('any','The Cat on the Ledge','🐈',`High up on the third-floor ledge, a tabby cat is mewing in despair. A small crowd has gathered. A boy says, "It has been stuck since this morning!"`,
 c('Climb up and bring it down.','DEX 9 climb',`Inch by inch, you edge along the railing and scoop the cat into your arms. The crowd erupts. The cat bites your sleeve in thanks.`,'xp+l mp+3 flag:cg_kind','You get close, but the cat bolts, and eventually finds its own way down. At least it is safe.','xp+m hp-1'),
 o('Call the town council helpline.',`A uniformed officer arrives in ten minutes with a big net. The cat is rescued. The boy thanks you.`,'xp+m mp+2 flag:cg_kind'),
 o('Leave a bowl of milk and a sardine on the ground.',`The cat sniffs the air, and, with great dignity, jumps down for dinner.`,'xp+m mp+2 flag:cg_kind')),
L('any','Monitor Lizard!','🦎',`By the canal, a metre-long monitor lizard is sunning itself in the middle of the path. It looks at you with the expression of a landlord.`,
 o('Walk very slowly around it.',`It does not move. It does, however, watch you the whole way.`,'xp+m mp+1'),
 c('Take a good photo from a safe distance.','DEX 8 craft',`The lizard poses perfectly. A passing uncle whispers, "That is a good one, boy!"`,'xp+m mp+2','Blurry. The lizard looks like a log.','xp+s'),
 dare('Walk right past it, eyes forward. (Costs Courage)',2,`You do not blink. It does not blink. Eventually it slides into the water, bored. You have won, apparently.`,'xp+l mp+1')),
L('any','Chased by Macaques','🐒',`A troop of long-tailed macaques spots the packet in your bag. Suddenly, one is on the railing, one is on your head, and one is eyeing your pocket.`,
 c('Hold the bag high and back away calmly.','WIS 8 resist',`They lose interest, one by one. A ranger gives you a thumbs-up from the path.`,'xp+m mp+2','One monkey snatches the packet and vanishes. Another sniffs your shoe.','xp+s -cg_sweets'),
 o('Throw a few sweets far away to distract them.',`They scramble after the sweets. You walk off, light-footed.`,'xp+m -cg_sweets','item:cg_sweets'),
 o('Stay perfectly still and look away.',`They sniff, climb, sniff again, and wander off. A dignified retreat.`,'xp+s')),
L('any','Missing the Last Bus','🚌',`You run for the last bus of the night, and it pulls away just as you reach the stop. The next one is forty minutes away. It is dark, and a bit drizzly.`,
 o('Take a taxi ($8).',`The driver chats the whole way and drops you at the door. A warm, dry, expensive solution.`,'gold-8 xp+m mp+2 hp+3','gold:8'),
 c('Run to the next stop and catch it there.','CON 8 endure',`You sprint two stops, gasping, and leap on just as the doors close. The driver gives you a long look. You wave.`,'xp+m mp+2 hp-1','You miss it by a few seconds, and have to wait in the cold.','xp+s hp-2'),
 o('Wait at the stop and watch the rain.',`Forty minutes. You count raindrops, listen to your own thoughts and feel quite grown-up.`,'xp+s mp+1')),
L('any','Hawker Stall Emergency','🍳',`The uncle at the char kway teow stall has twisted his wrist, and a long queue is forming. His wok is smoking. He looks at you desperately: "Boy! Can you hold the wok for two minutes?"`,
 c('Take the wok and keep it moving.','DEX 8 craft',`You toss the noodles like a pro, and the queue cheers. The uncle presses $6 and a free plate into your hand: "Hero!"`,'xp+l gold+6 hp+8 mp+2 flag:cg_kind','You nearly set fire to the noodles, but he rescues them in time. He gives you a free plate anyway.','xp+m hp+6'),
 o('Run to fetch ice from the next stall.',`You return with a bag of ice and a cold flannel. The uncle sighs with relief.`,'xp+m gold+2 flag:cg_kind'),
 o('Join the queue and wait.',`The uncle recovers eventually. The noodles are worth it.`,'xp+s hp+4 gold-2','gold:2')),
L('any','Power Cut','💡',`With a loud *clunk*, every light on your block goes out. The lift stops. The stairwell is pitch black. Your friends are somewhere above you, calling out.`,
 o('Switch on your torch.',`The beam finds every step. You lead everyone up the stairs, slowly, and are thanked by two grandmas.`,'xp+m mp+3 flag:cg_kind','item:cg_flashlight|item:cg_penlight'),
 c('Use your phone and count the steps.','WIS 8 resist',`Counting soothes you. Twelve, thirteen, fourteen. You find the right floor and the right door.`,'xp+m mp+2','You lose count and take a long, shaky time.','xp+s mp-1'),
 o('Sit on the stairs and wait for the lights.',`Five minutes of dark, a few jokes shouted between floors, then *click*, the lights return. Everybody cheers.`,'xp+s mp+1'),
 dare('Feel your way up in the dark, hand on the wall. (Costs Courage)',2,`Inch by inch, you climb in total darkness. Somewhere on the way, you pass a hundred small noises that turn out to be only a building breathing. At the top, you laugh with relief.`,'xp+l mp+2')),
L('any','Phone Scam Call','📞',`Your phone rings with an unknown number. A smooth voice says: "Your parent has had an accident. Quickly, transfer $200 or they will be in trouble." Your heart thuds.`,
 o('Hang up and call your parent directly.',`They answer cheerfully, buying vegetables at the market. It was a scam. You have saved yourself a lot of trouble.`,'xp+l mp+3 flag:cg_smart'),
 o('Ask the caller a trick question.',`"What is my favourite food?" you say. Silence. Click. The line goes dead.`,'xp+m mp+2'),
 o('Ignore the call and walk on.',`It stops ringing. A good lesson: never send money because a stranger says hurry.`,'xp+s')),
L('any','Street Football','⚽',`A game of street football is being played in the carpark: three-a-side with trolley bays for goals. A boy shouts: "We are one short! Come on, play!"`,
 c('Play and try to score.','DEX 8 dodge',`You dribble past a very surprised defender and smash it between two trolleys. GOAL! The whole court yells your name.`,'xp+l mp+3 hp-1 flag:cg_kind','You trip over the ball, but your team scores on the rebound anyway.','xp+m hp-1'),
 o('Be the goalkeeper.',`Dive, scramble, hug. You stop three shots and your team loves you.`,'xp+m mp+2 hp-1'),
 o('Cheer from the sidelines.',`Your cheering is excellent. Somebody gives you half an orange.`,'xp+s mp+2')),
L('any','Pasar Malam Crush','🏮',`The night market is a river of people, smoke, bright bulbs and shouting stallholders. A moment ago your friend was beside you. Now they are nowhere.`,
 c('Climb on a crate and scan the crowd.','WIS 8 survive',`There! A flash of a familiar cap near the muah chee stall. You elbow your way through and find them, shaken and relieved.`,'xp+m mp+2 bond:cg_priya','Everything looks the same. You eventually run into them near the exit.','xp+s mp-1'),
 o('Stay put and call their name.',`Five minutes later, they find you, safe and a little teary. "Next time, hold hands," says a passing auntie.`,'xp+m mp+1'),
 o('Buy two bubble teas while you wait ($4).',`Sweet pearls, cold tea. They find you by the smell. You drink together, laughing.`,'gold-4 xp+m mp+4 hp+3','gold:4')),
L('any','Wild Boar at Punggol','🐗',`In the long grass by the coast, a wild boar and her piglets crash out of the bushes onto the path. She stares. You stare. A hundred kilos of mother boar do not look friendly.`,
 o('Back away slowly and quietly.',`Step, step, step. She snorts, turns and herds her piglets into the trees.`,'xp+m mp+1'),
 c('Climb the nearest fence.','STR 8 climb',`You scramble up in two seconds flat. The boar looks up at you, bored, and goes back to eating.`,'xp+m mp+2','You scramble, but your trainer catches the wire and you tumble to the ground, shaken.','xp+s hp-2'),
 dare('Stand tall and make yourself big. (Costs Courage)',3,`You hold your ground, arms wide, and speak firmly. The boar considers you, and then, grudgingly, decides you are not worth the trouble. She leaves.`,'xp+l mp+1')),
L('any','Otters Steal Lunch','🦦',`A family of otters pops out of the canal, whiskers twitching. Before you can say "shoo", one has run off with your sandwich, and the rest are eyeing your bag.`,
 o('Laugh and let them have it.',`They munch happily on the bank, ten tiny faces. A passer-by takes a photo and sends it to you: instantly your favourite picture.`,'xp+m mp+3'),
 c('Retrieve your sandwich.','DEX 8 dodge',`You dart in, grab one end, and the otter lets go, with a squeak of outrage. You are a sandwich hero.`,'xp+m mp+2','The otter has already eaten it. Gone.','xp+s'),
 o('Offer them a few fishballs ($2).',`Otters are polite for fishballs. They accept, squeak and slip back into the water.`,'gold-2 xp+m mp+3','gold:2')),
L('any','Stranger With Sweets','🍬',`A friendly man leans out of a parked van. "Hello! Come and look at what I have. I will give you a lift to Changi, free." He smiles too widely.`,
 o('Say no firmly and walk away.',`You walk faster, find a security guard and tell him. The van drives off. You did exactly the right thing.`,'xp+l mp+3 flag:cg_smart'),
 o('Run into the nearest shop and ask for help.',`The shopkeeper takes down the plate number. You are shaken, and very safe.`,'xp+m mp+2 flag:cg_smart'),
 o('Take a photo of the van and go to a security guard.',`The guard thanks you and calls the police. Nobody is more careful than you.`,'xp+m mp+2')),
L('any','Wet Market Slip','🐟',`The floor of the wet market is slick with water and fish scales. You are carrying a heavy bag of vegetables for {guardian} when your foot slides.`,
 c('Catch yourself on a stall and keep the bag.','DEX 8 dodge',`You do the splits, save the bag and stand up red-faced. The fishmonger gives you a thumbs-up.`,'xp+m mp+2','You land in a heap, with a bruised elbow and a cabbage on your head. Everyone laughs, kindly.','xp+s hp-2'),
 o('Walk slowly, holding the rail.',`Step by cautious step. The market is a very slippery place for a very careful kid.`,'xp+s'),
 o('Buy a pair of rubber slippers ($3).',`A pair of bright blue slippers. They grip like glue. Your day is much safer.`,'gold-3 xp+m mp+2','gold:3')),
L('any','Kopitiam Uncle\'s Riddle','☕',`At a corner kopitiam, an old uncle slides a cup of kopi across the table. "Answer my riddle, and the kopi is free. What has a face and two hands, but no arms or legs?"`,
 o('"A clock!"',`"Smart kid!" He pushes the cup and a kaya toast to you. "Free. Nobody gets it these days."`,'xp+m hp+6 mp+3 quiz+'),
 o('"A person!"',`"Hm, close," he says gently. "Think about the time." He lets you try again, and still gives you a toast for trying.`,'xp+s hp+3 quiz-'),
 o('Pay $2 for the kopi and chat.',`Sweet, strong, steaming. The uncle tells you three stories, and one of them is about a lantern on the beach.`,'gold-2 xp+m mp+3 hp+4','gold:2')),
L('any','Flash Flood at the Drain','🌊',`The drain by the playground is a brown torrent. A little girl\'s ball has floated into it, and she is leaning dangerously over the edge to catch it.`,
 o('Shout at her to stay back and fetch the ball with a stick.',`You fish it out with a branch, and hand it back. She hugs it, and then you. "My hero."`,'xp+m mp+3 flag:cg_kind'),
 c('Grab her hand and pull her to safety.','STR 8 endure',`You yank her back just in time. She trembles, then smiles, wet to the knees.`,'xp+l mp+3 flag:cg_kind','You both slip, but you land on the grass, soaked and safe.','xp+m hp-1 flag:cg_kind'),
 o('Call an adult.',`A nearby uncle arrives immediately, stern and sensible. You did the right thing.`,'xp+m mp+2 flag:cg_kind')),
L('any','Lucky Charm Seller','📿',`A man with a tray of charms stops you at the MRT: "Special charm! Protects from ghosts! Only $6!" His charms look suspiciously identical to the ones in the shop next door.`,
 o('Buy one ($6).',`It smells of pine and plastic. It does not protect you from anything, but it makes you feel better.`,'gold-6 xp+s mp+3','gold:6'),
 c('Politely test his claim.','INT 8 lore',`"If it protects from ghosts," you say, "why are you still selling it?" He laughs and gives you a free sticker.`,'xp+m mp+2','He is not convinced. You walk on.','xp+s'),
 o('Politely decline.',`Smart. Your money goes further elsewhere.`,'xp+s mp+1')),
L('any','Ang Pow Aunties','🧧',`A group of aunties in matching floral blouses crowd round you at the void deck. "So thin! Eat! Take this!" One presses a red packet into your hand. Another gives you a bag of peanuts.`,
 o('Thank them, and take the packet.',`There is $5 inside. You are $5 richer and have been pinched on both cheeks.`,'xp+s gold+5 mp+2'),
 o('Help carry their shopping bags.',`Each auntie adds a coin to your hand by the time you reach the lift. Kindness pays.`,'xp+m gold+8 mp+3 flag:cg_kind'),
 o('Smile and slip away politely.',`The aunties call blessings after you all the way to the stairwell.`,'xp+s mp+1')),
L('any','The Stairwell Echo','🌀',`Walking up the stairwell of an old block, you hear footsteps matching yours, a half-second behind. When you stop, they stop. When you go on, they go on.`,
 dare('Turn around and shout "Who is there?" (Costs Courage)',2,`Your voice booms. The footsteps stop. A moment later a very flustered neighbour peeps round the corner holding his shopping and says, "Aiyoh, sorry, sorry!" You laugh until you cry.`,'xp+l mp+2 gold+2'),
 c('Walk on and ignore it.','WIS 8 resist',`Step, step, step. At the top the echo fades, and you realise it was only your own sound bouncing back.`,'xp+m mp+2','Your heart pounds all the way up, but you reach the top.','xp+s mp-1'),
 o('Take the lift instead.',`It takes two minutes longer. Your nerves are grateful.`,'xp+s')),
L('any','Phone Battery 3%','🔋',`Your phone beeps: 3% battery. You need to message {guardian} that you are on your way. The only plug nearby is in a shop, and the shopkeeper eyes you hopefully.`,
 o('Buy a drink ($2) and charge while you sip.',`Twenty minutes of sipping, a message sent and a thumbs-up received. Everything is fine.`,'gold-2 xp+m mp+3 hp+3 flag:cg_told_adult','gold:2'),
 o('Send a quick message now, before it dies.',`"Coming home, don't worry." Send. The screen goes dark a second later. Perfect timing.`,'xp+m mp+2 flag:cg_told_adult'),
 o('Find a public charging point.',`There is one at the library. It takes twenty minutes, but costs nothing.`,'xp+s mp+1'))
];
G.miniArch('cg_action', ACT);

/* ================= HAUNT ENCOUNTERS (inside the house) ================= */
const HAUNT = [
L('cg_house','A Cold Spot','🥶',`In the middle of the corridor, the air turns icy, like stepping into a fridge. Your breath fogs. Something is standing there, close, and listening.`,
 o('Light a joss stick politely.',`The thin smoke curls straight up, and the cold lifts. A faint, shy "thank you" rustles by your ear.`,'-cg_joss xp+l mp+4 flag:cg_respect','item:cg_joss'),
 dare('Walk straight through it. (Costs Courage)',2,`It is like wading through a cold stream. On the other side, you feel braver, and strangely proud.`,'xp+l mp+2'),
 o('Say "Excuse me" and go round it.',`The cold shifts aside, just a little. Manners work on the unseen too.`,'xp+m mp+1 flag:cg_respect')),
L('cg_house','Paper Boats Rustle','⛵',`All along the skirting boards, little paper boats begin to rustle and slide across the floor, forming a long, pale line down the corridor. They are pointing somewhere.`,
 c('Follow the line of boats.','WIS 8 survive',`The boats lead you to a loose floorboard. Under it: a handful of old coins and a rusty key.`,'xp+l gold+6 mp+2 +cg_key','The boats scatter and fall still, as if they lost interest.','xp+s'),
 o('Fold a paper boat of your own and add it.',`Your boat joins the line. The whole fleet gives a faint rustle of approval.`,'xp+m mp+3 flag:cg_respect'),
 o('Step carefully over them.',`You tiptoe over, careful not to crush a single one.`,'xp+s')),
L('cg_house','Giggles Behind the Door','😶',`Behind a closed door, someone giggles. A small, delighted giggle, as if from a child who has been waiting a very long time for someone to play.`,
 dare('Open the door and say "Found you!" (Costs Courage)',2,`The room is empty, but a tiny paper boat is waiting in the middle of the floor, with a little scrawl on it: "Again?" Something giggles in delight.`,'xp+l mp+3 gold+3 flag:cg_kind'),
 o('Knock three times politely.',`The giggling stops. After a moment, a very small knock answers. Three times.`,'xp+m mp+2 flag:cg_kind'),
 o('Keep walking.',`The giggles follow you down the corridor, a little disappointed.`,'xp+s')),
L('cg_house','The Torch Dies','🔦',`Your torch flickers, dims, and goes out. The dark pours in from every side. Something shifts in the corner, and the temperature drops by five degrees.`,
 o('Slot in the spare batteries.',`Click. Light! The beam is strong and steady. The shadows jump back, offended.`,'-cg_battery xp+l mp+3','item:cg_battery'),
 o('Use your glow bracelet.',`A soft glow pushes the dark back to arm\'s length. It is enough.`,'xp+m mp+2','item:cg_glowband'),
 o('Feel your way back along the wall to the door.',`Slow, careful, with one hand on the plaster. You reach the front door and the cool night air, and, after a minute, your nerves.`,'xp+s mp-1'),
 dare('Stand in the dark and count to ten. (Costs Courage)',2,`One, two, three... the dark is full of breathing. Seven, eight, nine, ten. Slowly, your eyes adjust. You see a faint grey path, and follow it out.`,'xp+l mp+2')),
L('cg_house','The Whispering Mirror','🪞',`A tall mirror leans against the wall. In it, you see yourself, and, a little behind you, a small figure that is not in the room. It whispers something. You cannot quite catch the words.`,
 c('Listen carefully to the whisper.','WIS 9 spirit',`"Four-fifteen," it whispers. "Four-fifteen." You grab your notebook and write it down. That must mean something.`,'xp+l mp+2 flag:cg_knows_time','The whisper fades before you can catch it.','xp+s mp-1'),
 o('Turn the mirror to face the wall.',`It is easier to think without being watched. The whisper stops, politely.`,'xp+m mp+1'),
 o('Wave at the reflection.',`The small figure waves back. Shy, unthreatening, a little pleased.`,'xp+m mp+2 flag:cg_kind')),
L('cg_house','Music Box in the Dark','🎵',`A faint tune tinkles from a cupboard: a music box, playing slowly, with every other note missing. It is the lullaby. Something about it makes you want to sit down and listen.`,
 o('Sit and listen to the whole tune.',`When the box winds down, you feel calm and sad and strangely refreshed.`,'xp+m mp+4 hp+3 flag:cg_lullaby'),
 c('Open the cupboard and wind the box.','DEX 8 craft',`You wind it carefully. The notes fill in, one by one, and the whole lullaby plays. A sigh of relief rustles through the house.`,'xp+l mp+3 flag:cg_lullaby','The key is stiff, and the music box stays silent.','xp+s'),
 o('Shut the cupboard and walk on.',`The tune follows you for a few steps, then drops away.`,'xp+s')),
L('cg_house','Wet Footprints','👣',`A set of small wet footprints leads across the floor, dripping, and stops at a closed door. The puddle by the door is still growing.`,
 o('Follow them to the door.',`Behind the door, a cold draught carries a smell of sea and salt. You hear someone crying softly.`,'xp+m mp+1 flag:cg_knows_storm'),
 o('Mop the puddle with your sleeve. It seems right.',`A silly gesture, but the footprints fade, and something sighs in relief.`,'xp+m mp+3 flag:cg_kind'),
 dare('Step into a footprint and stand there. (Costs Courage)',2,`It is icy-cold. For a heartbeat, you see through someone else\'s eyes: a beach, a storm, a small hand reaching for a boat. Then it is gone.`,'xp+l mp+2 flag:cg_knows_storm')),
L('cg_house','The Rocking Chair','🪑',`A rocking chair in the corner rocks gently, back and forth, though nobody sits in it. A faint smell of jasmine and old rain drifts around it.`,
 o('Say "Good evening, Madam."',`The rocking pauses, then resumes at a gentler pace. You feel noticed, and not unwelcome.`,'xp+m mp+3 flag:cg_respect'),
 c('Search the chair for anything hidden.','DEX 8 craft',`Under the cushion: a few old coins and a faded hair ribbon, tied in a bow. The chair gives a creak of approval.`,'xp+l gold+5 mp+2','Dust and a lot of cobwebs.','xp+s'),
 o('Tiptoe past.',`The chair keeps rocking, patient, as if used to being passed.`,'xp+s')),
L('cg_house','The Clock Strikes Thirteen','🕰️',`Somewhere deep in the house a clock strikes. One, two, three... you count along. Twelve. Then, impossibly, thirteen. A cold draught slams every door in the corridor.`,
 dare('Stand your ground and count the doors that slam. (Costs Courage)',2,`Seven doors. One of them is the nursery, still shut. You note which. The slamming dies away.`,'xp+l mp+2 flag:cg_knows_time'),
 o('Duck into the nearest alcove and wait it out.',`The doors slam, the dust settles and, after a minute, everything is quiet again.`,'xp+s mp+1'),
 o('Run back toward the entrance.',`You do not stop until you can see the casuarinas. A little shamed, a little relieved.`,'xp+s hp-1 mp-1')),
L('cg_house','Mist Rising','🌫️',`Cold white mist rolls up from under the doors and floods across the floor, rising ankle-deep, then knee-deep. It smells of salt. It is very sleepy mist.`,
 o('Pour a line of salt across the doorway.',`The mist stops dead at the line, curls, and recedes like a polite guest told to wait outside.`,'-cg_salt xp+l mp+3 flag:cg_respect','item:cg_salt'),
 c('Hold your breath and walk through quickly.','CON 8 endure',`You dash through, eyes streaming, and reach clear air. It was all very silly, and very cold.`,'xp+m mp+1','You breathe in a lungful. Everything goes soft for a moment, and you stumble out dazed.','xp+s hp-2 mp-2'),
 o('Climb on a chair and wait for it to pass.',`The mist drifts under the chair like a slow tide. After ten minutes, it has gone.`,'xp+s mp+1')),
L('cg_house','A Chill Hand on Your Shoulder','🖐️',`Something cold and very light settles on your shoulder: a hand, small and curious. You do not turn round.`,
 dare('Turn round and look. (Costs Courage)',3,`A little girl in a white nightdress stands there, faint as breath on glass. She puts a finger to her lips, then points to the stairs, and is gone.`,'xp+l mp+2 flag:cg_dream_mei'),
 o('Say "Hello, Mei" softly.',`The hand squeezes your shoulder, once, and lifts. A tiny, delighted giggle.`,'xp+m mp+3 flag:cg_kind','flag:cg_knows_names'),
 o('Stand perfectly still and breathe.',`Four seconds. Eight. The hand lifts, politely.`,'xp+s mp+1')),
L('cg_house','The Locked Trunk','🧳',`A big wooden trunk sits at the foot of a bed, its brass lock green with age. Something inside it shifts, softly, as if someone is turning over in sleep.`,
 c('Pick the lock with your pen or pin.','DEX 9 craft',`Click! Inside: a pile of old blankets, a child\'s hair-ribbon and a little tin of coins.`,'xp+l gold+8 mp+2','The lock refuses. Something inside sighs, resigned.','xp+s'),
 o('Use the old key you found.',`It fits perfectly. Inside, among tiny dresses and old toys, is a tin of coins.`,'xp+l gold+8 mp+2','item:cg_key'),
 o('Leave it alone.',`Some things are not yours to open.`,'xp+s flag:cg_respect')),
L('cg_house','A Voice Counting Down','🔢',`A thin voice, from somewhere inside the walls, begins counting backwards. "Ten... nine... eight..." It is a child\'s voice. It sounds delighted.`,
 dare('Count with it, and find where it ends. (Costs Courage)',2,`"Three... two... one!" You throw open the nearest door. Inside, a ring of paper boats spins slowly in the air, and a very small voice whispers: "You found me!"`,'xp+l mp+3 gold+4 flag:cg_kind'),
 o('Hide under the stairs until it stops.',`It ends at zero. Nothing happens. A tiny sigh of disappointment.`,'xp+s mp+1'),
 o('Call "Ready or not, here I come!"',`The voice squeals with laughter, and the house seems to relax around you.`,'xp+m mp+3 flag:cg_kind'))
];
G.miniArch('cg_haunt', HAUNT);

/* ---------- region weights: more action, less filler ---------- */
const W = (r, a, l, t, k, s, f) => { const R = G.regions[r]; if (R) R.enc = { cg_action:a, cg_local:l, cg_trivia:t, cg_kind:k, cg_scare:s, cg_food:f }; };
W('cg_tampines', 6, 4, 2, 2, 3, 1);
W('cg_changi',   5, 4, 2, 2, 4, 1);
W('cg_city',     5, 4, 3, 2, 2, 2);
W('cg_eastcoast',5, 4, 2, 2, 3, 1);
W('cg_ubin',     5, 4, 2, 2, 4, 1);
W('cg_festival', 4, 4, 2, 2, 5, 1);
W('cg_kampong',  3, 5, 1, 3, 3, 0);
W('cg_oldcity',  5, 4, 3, 2, 2, 1);
W('cg_nature',   6, 3, 2, 2, 3, 0);
G.regions.cg_house.enc = { cg_haunt:7, cg_scare:3, cg_action:1 };

/* ================= SUPPLY STALLS: where money buys what the house needs ================= */
const buy = (label, cost, item, msg, tag) => ({ t:`${label} ($${cost}).`, hide:true, r:`gold:${cost}&!sv:${tag}`, y:[msg, `gold-${cost} +${item} svflag:${tag} stayc`] });
S_('cg_stall_a','Uncle Lim\'s Offering Stall','beach|🕯️ 🛍️',
`At the edge of Changi Beach, Uncle Lim has set up a little folding table: joss sticks, packets of salt, oranges and a tin of loose change. "Visitors to the house must be prepared," he says. "Spend a little now, and the house will cost you less later."\nYou have $$$GOLD$ in your pocket.`.replace('$$$GOLD$','a little'),[
 buy('Buy a bundle of joss sticks',2,'cg_joss','Uncle Lim wraps them in a newspaper. "Light one at the door, politely. It says: I am a guest."','joss'),
 buy('Buy a packet of coarse salt',1,'cg_salt','"For the mist," he says. "A line across the door. Do not ask me how I know."','salt'),
 buy('Buy a bag of oranges',3,'cg_oranges','A fat bag of mandarin oranges. A polite offering to any visitor from the other side.','oranges'),
 {t:`Chat with Uncle Lim and save your money.`,y:[`He pours you a cup of barley water. "A sensible kid," he says. "Everything in the house is cheaper if you are polite."`,'xp+s mp+2']} ]);
S_('cg_stall_b','The Sundry Shop at Changi Village','hawker|🛒 🔦',
`A little provision shop at Changi Village sells everything a brave kid needs: batteries, sweets, plasters, Tiger Balm and Milo. The shopkeeper, a cheerful aunty, taps the counter. "Going to the beach after dark? Take a torch. Take a drink. Take courage, if we sell it."\nPrices are on a handwritten sign.`,[
 buy('Buy spare batteries',3,'cg_battery','Four little batteries, wrapped in a rubber band. Light, when you need it most.','bat'),
 buy('Buy a Milo packet (restores Courage)',2,'cg_milo','Chocolate, malt and a little comfort. A good thing to open when your knees knock.','milo'),
 buy('Buy a jar of Tiger Balm',3,'cg_balm','Sniff, rub, feel braver. A small jar, very strong.','balm'),
 buy('Buy a roll of plasters',2,'cg_plaster','A strip of plasters. They always come in handy.','plast'),
 {t:`Browse the shelves, but spend nothing.`,y:[`The aunty hands you a sweet anyway. "Come back when you are rich," she says, and laughs.`,'xp+s mp+1']} ]);

/* ================= HOUSE VISIT 1: THE GATE AND THE GARDEN ================= */
G.chapter('cgV1',{ story:'changi', n:'Chapter 3: The First Night at the House', sub:'Garden, gate and paper boats', ch:2, region:'cg_house', art:'bungalow|🏚️ 🌙', age:11, btn:'Go to the gate',
  text:`The house did not look like a trap. It looked like a place waiting for a visitor.\nUncle Lim sets up his little stall at the edge of the beach and watches you with kind, wary eyes. "You may go as far as the garden," he says. "No further. Not yet. The first visit is for looking, and for listening. Come back before midnight."\nThe sun is gone. The mist is rising. The gate is waiting.`,
  beats:()=>['cgV1_intro','cg_stall_a'].concat(G.mix(['cg4_gate','cg4_garden','cgV1_swing','cgV1_maze','cg4_boathouse','cgV1_madam'],8,{nocamp:true}),['cgV1_retreat']) });
S_('cgV1_intro','Dusk on the Beach','beach|🌅 🌲',
`The tide is out. The casuarinas hiss. At the edge of the trees, the white house waits, impossibly clear now, its black beams glowing in the last light.\nYour heart is beating hard. Your hands are damp. But you came here for Aiman, and for a lady who asked for manners.`,[
 {t:`Take a deep breath and walk toward the gate.`,y:[`One step. Two. The sand turns to old grass, and the grass to brick. The house grows larger with every pace.`,'xp+m mp+2 tod:night flag:cg_saw_house']},
 {t:`Light your torch and check your gear first.`,r:'item:cg_flashlight|item:cg_penlight',y:[`Torch, bottle, notebook, a few coins. Everything is where it should be.`,'xp+m mp+3 tod:night flag:cg_saw_house']},
 {t:`Ask a friend to wait at the treeline.`,r:'anyally',y:[`They nod, pale but loyal. "I will count to a thousand," they say. "Then I will shout."`,'xp+m mp+3 tod:night flag:cg_saw_house']} ]);
S_('cgV1_swing','The Swing','bungalow|🌲 🛝',
`Under the tallest casuarina hangs a rope swing, creaking, though the air is perfectly still. A small shape sits on it, faint as a candle in fog, swinging slowly and humming. She stops when she sees you, and looks away, shy.\nA paper boat floats down from the branches and lands in your hand.`,[
 {t:`Say "Hello" very softly.`,c:'WIS 8 spirit',y:[`The little shape peeps back, wide-eyed. "You can see me?" she whispers. Then she is gone, and the swing keeps swaying.`,'xp+l mp+3 flag:cg_dream_mei flag:cg_kind'],n:[`She vanishes with a tiny gasp, and the swing sways on its own.`,'xp+m mp+1']},
 {t:`Give the swing a gentle push.`,y:[`It swings up and down, and a tiny voice laughs, once, from the dark. You feel as if you have passed a very small test.`,'xp+m mp+3 flag:cg_kind']},
 {t:`Light a joss stick under the swing.`,r:'item:cg_joss',y:[`The smoke rises in a thin spiral. The swing stops, settles, and a small, grateful sigh sweeps the garden.`,'-cg_joss xp+l mp+4 flag:cg_respect']},
 {t:`Pick up the paper boat and keep it.`,y:[`It is soft and old, folded perfectly. It feels like a promise someone forgot.`,'xp+m +cg_paperboat flag:cg_paperboat_made']} ]);
S_('cgV1_maze','The Mist Maze','bungalow|🌫️ 🚪',
`Past the swing, the garden thickens into a hedge maze of overgrown bougainvillea. Low mist swirls through the passages, and in the mist, a line of tiny white paper boats drifts like breadcrumbs. Some point left. Some point right. One, very small, points straight up.`,[
 {t:`Follow the white boats.`,c:'WIS 8 survive',y:[`Left, right, left, left. The boats lead you through to a small clearing and a stone bench, where an old coin gleams in the grass.`,'xp+l gold+4 mp+2'],n:[`You wander for ten minutes. The boats seem to giggle. At last you stumble out by luck.`,'xp+m mp-1']},
 {t:`Pour a thin line of salt to mark your path.`,r:'item:cg_salt',y:[`The mist backs away from the salt, and the maze becomes a plain garden with a single, easy path.`,'-cg_salt xp+l mp+3']},
 {t:`Light your torch and read the way.`,r:'item:cg_flashlight|item:cg_penlight',y:[`The beam shows the path, and the hedge, and a small hand-drawn arrow on a stone.`,'xp+m mp+2']},
 {t:`Climb up the old trellis and look from above.`,c:'STR 8 climb',y:[`From the top, you see the whole maze laid out like a map, and a clear path to the clearing.`,'xp+l mp+2'],n:[`The trellis creaks and sags. You slide down in a shower of petals.`,'xp+s hp-2']} ]);
S_('cgV1_madam','A Lady on the Veranda','bungalow|👻 🪑',
`At the edge of the maze, the veranda is clear. In the rocking chair sits a thin lady in a white blouse, with silver hair in a bun, looking out toward the sea. She has not moved. She does not turn her head.\n"I can hear you," says a calm, sad voice. "A child, with good manners, and a few small gifts. Come no further tonight. The house is not ready for you, and neither are you."`,[
 {t:`"Madam, may I ask your name?"`,y:[`"Soo Lian," she says. "A long time ago, I had a family. A house. A daughter." A pause. "Come back when you have remembered how to knock."`,'xp+l mp+3 flag:cg_knows_names flag:cg_respect']},
 {t:`"Is my friend Aiman here?"`,y:[`"He is safe," says Madam Soo. "He is asleep, upstairs. I would never hurt a child." A longer pause. "But I have not found a way to let anyone go."`,'xp+l mp+2 flag:cg_trust']},
 {t:`Offer her oranges.`,r:'item:cg_oranges',y:[`She turns her head, just a little. "Oranges," she says, as if tasting the word. "How long since a guest brought oranges." The oranges are gone, but a warm wind brushes past you.`,'-cg_oranges xp+l mp+4 flag:cg_respect flag:cg_offering_given']},
 {t:`Bow politely and retreat.`,y:[`"Good evening, Madam," you say. "I will be back." She makes no answer, but the rocking chair gently rocks.`,'xp+m mp+2 flag:cg_respect']} ]);
S_('cgV1_retreat','Midnight','beach|🌌 🕛',
`The clock in the house strikes twelve, a long, low sound. All at once, the mist rolls up and the paper boats scatter. A cold, firm hand seems to press against your back, not unkindly: out, out, out. You stumble through the gate and onto the sand.\nBehind you, the house sighs, and the lights go out one by one. Uncle Lim is waiting with a flask of barley water.`,[
 {t:`Tell Uncle Lim everything you saw.`,y:[`He nods slowly, and says: "She has not let anyone leave. But she has not hurt anyone either. That counts for something." He passes you the flask.`,'xp+l mp+4 hp+5 flag:cgv1_done flag:cg_knows_legend tod:day']},
 {t:`Write down every detail while it is fresh.`,r:'item:cg_notebook|item:cg_sketchbook',y:[`Gate, garden, maze, swing, veranda. You draw a rough map, and mark where you want to go next.`,'xp+l mp+3 flag:cgv1_done tod:day']},
 {t:`Go home and sleep.`,y:[`A long bus ride, a short, deep sleep and the morning sun on your face.`,'rest xp+m flag:cgv1_done tod:day']} ]);

/* ================= HOUSE VISIT 2: THE GROUND FLOOR ================= */
G.chapter('cgV2',{ story:'changi', n:'Chapter 6: Inside the House', sub:'Veranda, hall, dining room and kitchen', ch:3, region:'cg_house', art:'bungalow|🏚️ 🕯️', age:11, btn:'Knock on the door',
  text:`This time, the gate opens before you touch it.\nAt the top of the steps, the front door is ajar, and a faint yellow light spills out. You have been invited, or at least tolerated. What is inside is a long way from the beach, and a very long way from safe.\nUncle Lim presses a hand on your shoulder. "Remember: be polite, be brave, and be out by midnight."`,
  beats:()=>['cgV2_intro','cg_stall_b'].concat(G.mix(['cg4_veranda','cg4_hall','cg4_dining','cgV2_cellar','cg4_kitchen','cgV2_hideseek','cgV2_madam'],9,{nocamp:true}),['cgV2_retreat']) });
S_('cgV2_intro','Through the Door','bungalow|🚪 🕯️',
`The front door is tall, with a brass knocker in the shape of a fish. Beyond it, a long hall of black-and-white tiles, dim and dusty, with a single oil lamp glowing on a table. Doors lead off in every direction. The air smells of jasmine, damp wood and old incense.`,[
 {t:`Knock three times and wait.`,y:[`Knock, knock, knock. The echoes run through the house and fade. A moment later, a voice from nowhere says: "Come in."`,'xp+m mp+3 flag:cg_respect']},
 {t:`Light a joss stick and place it by the door.`,r:'item:cg_joss',y:[`The smoke curls up. Somewhere deep inside, a tiny bell tinkles. The house relaxes, just a little.`,'-cg_joss xp+l mp+4 flag:cg_respect']},
 {t:`Put on your torch and step inside.`,r:'item:cg_flashlight|item:cg_penlight',y:[`The beam sweeps over old portraits, a coat stand and a clock with stopped hands. Dust rises like snow.`,'xp+m mp+2']},
 {t:`Slip in quietly without knocking.`,c:'DEX 8 sneak',y:[`You ghost through the gap. Nothing stirs. A little rude, but effective.`,'xp+m flag:cg_rude'],n:[`The floorboards groan. The house shudders, annoyed. A cold draught slaps your face.`,'xp+s hp-1 mp-2 flag:cg_rude']} ]);
S_('cgV2_cellar','The Cellar Stairs','haunt|🪜 🕳️',
`A low door under the stairs opens onto a flight of damp stone steps leading down into pure dark. A smell of salt and mud drifts up. Faint scratching echoes from below, like something small dragging something large.`,[
 {t:`Go down with a torch.`,r:'item:cg_flashlight|item:cg_penlight',y:[`The cellar is a low stone room full of old boat-gear: nets, oars, floats. In a corner, a little boat-shaped hole in the dust where something was taken. And, on a beam, a tin with coins.`,'xp+l gold+6 mp+2 flag:cg_knows_storm']},
 {t:`Go down in the dark, hand on the wall.`,c:'WIS 9 resist',y:[`You count the steps, feel your way and find a tin of old coins on a ledge. A faint scratching stops as you come near.`,'xp+l gold+5 mp+2'],n:[`The dark is thick. You come back up empty-handed, heart pounding.`,'xp+s mp-2']},
 {t:`Pour a line of salt on the top step.`,r:'item:cg_salt',y:[`The scratching stops dead. A very small voice says, in disgust, "Rude." But the cellar stays quiet, and you slip down and out safely, with a handful of old coins.`,'-cg_salt xp+m gold+4 mp+1']},
 {t:`Shut the door gently and leave it.`,y:[`Not everything in a house is for you. You close the door, softly.`,'xp+s']} ]);
S_('cgV2_hideseek','Hide and Seek','haunt|🙈 👻',
`A ring of laughter fills the hall, and a hundred tiny shadows appear, running between the pillars, giggling. They are the other lost children, the ones who stayed, grinning and ragged and not at all frightening. One tugs your sleeve. "You are it," she whispers. "Count to twenty."`,[
 {t:`Count to twenty with your eyes shut, and play fair.`,y:[`One, two, three... By twenty, the hall is silent. You open your eyes, and then you search, and find eleven of them, one by one, shrieking with laughter. They stay by you after that, shyly.`,'xp+l mp+4 flag:cg_kind']},
 {t:`Join in, but cheat by using your torch.`,r:'item:cg_flashlight|item:cg_penlight',y:[`You find nine hiding spots in two minutes. The children are outraged, then delighted. "Again!" they cry.`,'xp+m mp+3']},
 {t:`Beat them all with clever thinking.`,c:'INT 9 lore',y:[`You work out the best hiding places and find them all in a minute. They declare you the best seeker in the house.`,'xp+l mp+3'],n:[`They are better at hiding than you are. You find three, and the rest vanish into walls.`,'xp+m mp+2']},
 {t:`Politely decline and say you are in a hurry.`,y:[`The children sigh. "Next time," one says. "Promise?" You promise.`,'xp+s mp+1']} ]);
S_('cgV2_madam','A Talk with Madam Soo','haunt|👻 🕯️',
S => { const g = S.flags.cg_offering_given, r = S.flags.cg_respect; return `In the hall, the air thickens, and Madam Soo Lian steps out of the shadows, pale and straight-backed. ${r?'"You have shown courtesy."':'"You come into my house like a gust of wind."'} She studies you with eyes that are very old and very tired.${g?' "And you remembered the oranges. A small thing, and not forgotten."':''}\n"I will make you an offer," she says. "Tell me what you really want."`; },[
 {t:`"I want to take Aiman home, and help you find peace."`,y:[`A long silence. Her face softens, as if a very old stone has cracked. "Peace," she says. "I have forgotten what it would look like. Bring me what I have lost, and I will think about it."`,'xp+l mp+4 flag:cg_trust']},
 {t:`"What did you lose, Madam?"`,y:[`"A boat," she says, her voice breaking. "A light for her to find the way home. And a song." Her hands twist together. "That is all. That is everything."`,'xp+l mp+3 flag:cg_knows_names flag:cg_trust']},
 {t:`Hum the lullaby.`,r:'flag:cg_lullaby',y:[`Her face crumples. "Where did you hear that?" she whispers. "No one has sung that since..." She cannot finish. A single tear shines in the lamplight.`,'xp+l mp+4 flag:cg_trust flag:cg_gate_trust']},
 {t:`Bow and ask permission to leave.`,y:[`"Of course," she says. "Everyone leaves." She nods, and her form fades, and the hall goes quiet.`,'xp+m mp+2']} ]);
S_('cgV2_retreat','The House Closes','beach|🌌 🕛',
`The grandfather clock strikes twelve, and all the doors in the house swing shut at once with a soft thump. A firm, gentle wind sweeps you through the hall, down the veranda steps, along the brick path and out through the gate. You land on the sand, panting.\nBehind you, a voice sighs through the casuarinas: "Come back when you can bring me what I need."`,[
 {t:`Tell Uncle Lim what Madam Soo said.`,y:[`"A boat, a light and a song," he repeats slowly. "I have heard that before. Find them. All three."`,'xp+l mp+4 hp+5 flag:cgv2_done tod:day']},
 {t:`Count what you have gathered.`,y:[`Coins from the cellar, a clue about a lullaby, a little more courage. Not nothing.`,'xp+m mp+3 flag:cgv2_done tod:day']},
 {t:`Go home and rest.`,y:[`A hot shower, a bowl of soup and a deep, dreamless sleep.`,'rest xp+m flag:cgv2_done tod:day']} ]);

/* ================= HOUSE VISIT 3: UPSTAIRS ================= */
G.chapter('cgV3',{ story:'changi', n:'Chapter 9: The Upper Floor', sub:'Stairs, nursery, attic and a sleeping boy', ch:3, region:'cg_house', art:'haunt|🪜 🌙', age:11, btn:'Climb the stairs',
  text:`This time, the house knows you.\nThe doors open for you, the lamps light themselves, and the paper boats part like a sea. But it is a different kind of welcome. It is the welcome of someone who has made up their mind.\nUpstairs, Aiman is asleep. Upstairs, Mei is hiding. Upstairs, Madam Soo is waiting, and she is no longer sure that she wants you to leave.`,
  beats:()=>['cgV3_intro','cg_stall_a','cg_stall_b'].concat(G.mix(['cg4_stairs','cgV3_corridor','cg4_nursery','cg4_attic','cgV3_library'],8,{nocamp:true}),['cgV3_chase','cgV3_retreat']) });
S_('cgV3_intro','The Bottom of the Stairs','haunt|🪜 🌙',
`The staircase rises into dark, wide and creaky. At the foot, a ring of paper boats forms a little welcome. From above comes the faint sound of a music box, and, very quiet, the sound of someone breathing in their sleep.\nYour hands are steady, but your stomach is not.`,[
 {t:`Take a breath, and climb.`,y:[`One step. Two. The boats ripple and let you pass. The music box grows louder.`,'xp+m mp+2']},
 {t:`Drink a Milo packet for courage first.`,r:'item:cg_milo',y:[`Cold chocolate-malt on an empty stomach. It is the best thing you have ever tasted.`,'-cg_milo xp+m mp+6']},
 {t:`Sniff the Tiger Balm for a little more nerve.`,r:'item:cg_balm',y:[`Sharp, minty, bright. Your head clears, and your knees stop knocking.`,'-cg_balm xp+m mp+5 hp+3']},
 {t:`Hold hands with a friend.`,r:'anyally',y:[`Two pairs of feet are better than one. "I am here," they whisper.`,'xp+m mp+4']} ]);
S_('cgV3_corridor','The Corridor of Doors','haunt|🚪 🚪',
`The upstairs corridor is long, with six identical doors. Each has a small brass number, and each hums slightly, as if something is behind it. From behind the third, a child\'s voice is counting. From behind the fifth, a woman is humming the lullaby. Behind the sixth, there is only silence.`,[
 {t:`Open the third door: the counting.`,y:[`A tiny room, with a rocking horse and a little bed. Nobody there. A music box on the windowsill ticks, and a single paper boat lies in the middle of the floor. You pick it up.`,'xp+m mp+2 +cg_paperboat']},
 {t:`Listen at the fifth door: the humming.`,c:'WIS 9 spirit',y:[`You catch the full tune, and every note. You hum it back, softly, and the humming stops, listening. Then it hums again, gently, in harmony.`,'xp+l mp+3 flag:cg_lullaby'],n:[`The humming fades before you can catch it.`,'xp+s']},
 {t:`Open the sixth door: the silence. (Costs Courage)`,mp:3,y:[`Cold. Pitch black. A long, narrow room with an enormous bed, a woman's hairbrush on the dresser and a faded photograph. You take the photograph and back out quietly.`,'xp+l +cg_photo flag:cg_knows_time']},
 {t:`Walk to the end of the corridor.`,y:[`At the end stands a door with a red cloth tied round the handle. It is the nursery.`,'xp+m mp+1']} ]);
S_('cgV3_library','Aiman in the Armchair','haunt|📚 😴',
`In the library, Aiman lies curled in a big green armchair, his jersey rumpled, a little smile on his face. A hundred paper boats float in a ring around him on a layer of silver mist. When you shake his shoulder, he mumbles and rolls over, but does not wake. When you pull the mist back, it flows in again, soft as breath.\nHe is not hurt. He is held.`,[
 {t:`Whisper to him about football.`,y:[`His nose twitches. "Penalty..." he mumbles, smiling, and is gone again. But you can feel him almost surfacing.`,'xp+m mp+3 flag:cg_saw_aiman']},
 {t:`Place his water bottle in his hand.`,r:'item:cg_aiman_bottle',y:[`His fingers close on it. "Cold," he whispers. "Good." But he does not wake. A little longer, you think. Be patient.`,'xp+l mp+4 flag:cg_saw_aiman']},
 {t:`Pour a line of salt around the armchair.`,r:'item:cg_salt',y:[`The mist recoils from the salt and the paper boats freeze. A cold voice says: "NO." The room shakes. Madam Soo has noticed.`,'-cg_salt xp+m mp-3 flag:cg_saw_aiman flag:cg_angered']},
 {t:`Sit beside him and promise to return.`,y:[`"Hang on," you whisper. "I will come back. Properly. With everything she needs."`,'xp+l mp+3 flag:cg_saw_aiman']} ]);
S_('cgV3_chase','The House Wakes Up','haunt|🌊 🏃',
`With a sound like a wave breaking, every door on the upper floor swings open at once. A wind howls up the staircase. The mist surges. The paper boats stream past you like a river. From somewhere very close, a voice that is the whole house says: "STAY."\nYou run.`,[
 {t:`Sprint for the stairs, taking them three at a time.`,c:'DEX 9 dodge',y:[`You fly, skip, leap. The wind snatches at your sleeve, but you hit the hall tiles running, and keep going.`,'xp+l mp+2'],n:[`You trip on the third step, tumble down five and land in a heap. The wind drops, almost embarrassed.`,'xp+m hp-3']},
 {t:`Hold out the peace charm and keep walking.`,r:'item:cg_charm',y:[`The little red charm glows, and the wind softens. A voice, tired, says: "Go on, then." You walk out calmly.`,'xp+l mp+3']},
 {t:`Throw down a line of salt behind you.`,r:'item:cg_salt',y:[`The mist rolls up against the white line and stops. The wind sighs. You go on without looking back.`,'-cg_salt xp+m mp+2']},
 {t:`Stand your ground and say: "I am coming back. Properly." (Costs Courage)`,mp:3,y:[`The wind stops dead. For a long moment, you stand in the stillness. "Very well," says a quiet, startled voice. "I shall hold you to it." The doors close. You walk out.`,'xp+l mp+3 flag:cg_respect flag:cg_trust']} ]);
S_('cgV3_retreat','Out on the Sand','beach|🌅 🌊',
`You stagger through the gate and onto the cold, wet sand. The tide is coming in. Behind you, the house has gone quiet. The upstairs windows glow, one by one, a very gentle yellow.\nUncle Lim is on his feet, lantern in hand. "You went upstairs," he says. "I can see it in your face." He puts his hand on your shoulder. "Now you know what you are up against. And what she is up against."`,[
 {t:`Tell him what you found.`,y:[`"A boat for Mei," he says. "A light for Soo Lian. A song for the house. It is all the same: three things, all of them yours to find." He pours you a cup of tea.`,'xp+l mp+4 hp+6 flag:cgv3_done tod:day']},
 {t:`Take stock of your bag.`,y:[`You are lighter in coins, heavier in memories. You know exactly what you still need.`,'xp+m mp+3 flag:cgv3_done tod:day']},
 {t:`Go home and sleep for a whole day.`,y:[`A long, heavy sleep.`,'rest xp+m flag:cgv3_done tod:day']} ]);

/* a few real risks inside the house (gentle end-of-journey outcomes, never gory) */
G.scenes.cgV1_maze.opts.push({ t:`Ignore the boats and crash straight through the hedge.`, c:'STR 10 endure', y:[`Thorns tear your sleeves, but you burst out of the far side of the maze, scratched and triumphant.`,'xp+m hp-2'], n:[`The hedge closes behind you, thick and silent. The mist swallows every landmark. When the beach patrol finds you at dawn, you are curled asleep under a bougainvillea, perfectly unhurt, and very much finished for the night. Your adventure ends here.`,'die'] });
G.scenes.cgV3_corridor.opts.push({ t:`Climb onto the big bed in the sixth room and rest.`, y:[`The quilt is soft, the pillow cool, a lullaby hums very far away. You close your eyes for just one minute. When the beach patrol finds you at dawn, you are curled up on the sand, fast asleep. Your adventure ends here.`,'die'] });
G.scenes.cgV2_cellar.opts.push({ t:`Sit on the cellar steps and eat your snack.`, y:[`Something scratches the other side of the step, very politely, until you share. A small, grateful whiskery sniff, and the rest of the dark is quiet.`,'xp+s mp+1 hp+2'] });

/* ================= FINAL NIGHT: shorter, and it catches up anything skipped ================= */
const fin = G.chapters.cg4;
fin.beats = ['cg4_beach','!flag:cgv1_done?cg4_gate','!flag:cgv2_done?cg4_veranda','!flag:cgv3_done?cg4_nursery','~enc','cg4_library','cg4_confront1','cg4_confront2'];

/* ================= pacing: fewer filler encounters in the build-up chapters ================= */
const thin = id => { const ch = G.chapters[id]; if (!ch) return; const old = ch.beats; ch.beats = S => { let k = 0; return (typeof old === 'function' ? old(S) : old.slice()).filter(b => b !== '~enc' || (k++ % 2 === 0)); }; };
['cgA','cgB','cgC','cgD','cgE','cgF','cgH','cgI','cgG','cgJ','cg3'].forEach(thin);

/* ================= chapter order: adventure, clue, adventure, clue ================= */
G.stories.changi.chapters = ['cg1','cg2','cgV1','cgA','cgB','cgV2','cgC','cgD','cg3','cgV3','cgE','cgF','cgH','cgI','cgG','cgJ','cg4'];
const num = { cg1:1, cg2:2, cgV1:3, cgA:4, cgB:5, cgV2:6, cgC:7, cgD:8, cg3:9, cgV3:10, cgE:11, cgF:12, cgH:13, cgI:14, cgG:15, cgJ:16, cg4:17 };
Object.keys(num).forEach(id => { const ch = G.chapters[id]; if (ch) ch.n = ch.n.replace(/^Chapter \d+:/, 'Chapter ' + num[id] + ':'); });
})();
