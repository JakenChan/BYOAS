/* TRICKY CHOICES — not every "safe-looking" option is safe.
   Eating street food, trusting a stranger's help, accepting a "free" offer or buying a bargain can backfire: lost money, lost items,
   a forgotten skill, a curse, or (rarely) the end of the journey. Every scene still keeps one genuinely safe way through,
   and quiz answers are never trapped: a right answer is always right.
   An option can carry a hidden  risk = [percent, message, effects]  that is rolled after the normal outcome. */
(function(){
const G = globalThis.G;
const RK = (p, msg, fx) => [p, msg, fx];
const o = (t, y, fx, req, risk) => [t,'',y,fx||'xp+s','','',req||'',0,risk];
const c = (t, chk, y, fx, n, nfx, req, risk) => [t,chk,y,fx||'xp+m',n||'It does not work out.',nfx||'xp+s',req||'',0,risk];
const L = (reg, title, em, text, ...opts) => [reg, title, em, text, opts];

/* ================= CASUARINA: Singapore street smarts ================= */
G.miniArch('cg_trick', [
L('any','A Free Drink','🥤',`At a roadshow booth, a very smiley man in a bright polo shirt hands out free sample drinks. They are blue, fizzy and have no label. "Go on," he says warmly. "Everyone is trying it."`,
 o('Take a cup and drink it.',`Sweet, fizzy and very, very blue.`,'xp+s hp+2','',RK(25,'Something is not right. The world tilts, your knees fold, and the next thing you know, a nurse is shaking her head in a clinic and calling {guardian}. "Never drink from strangers," she says, very gently. Your adventure ends here.','die')),
 o('Politely say no thank you.',`He shrugs and moves on to the next person. A very sensible kid, you think, proudly.`,'xp+m mp+2 flag:cg_smart'),
 c('Ask to see the ingredients first.','INT 8 lore',`He goes quiet, and has no answer. You walk away, a little taller.`,'xp+m mp+2 flag:cg_smart','He waves a hand and turns away. You walk on, wiser.','xp+s')),
L('any','Uncle Knows a Shortcut','🧓',`A friendly uncle in a straw hat sees you looking at your map. "Changi? Aiyah, so far! I know a shortcut, very fast, no traffic. Follow me!"`,
 o('Ask him to show you the way.',`He chats happily the whole time, and you follow.`,'xp+s','',RK(40,'The "shortcut" ends at a locked fence and a very bored security guard. You lose half an hour, your nerve, and a few coins to a vending machine you did not need.','mp-3 gold-3')),
 o('Thank him and follow the main road.',`It takes longer, but you know exactly where you are going. The uncle waves cheerfully.`,'xp+s mp+1'),
 c('Check the route on your phone map first.','INT 8 lore',`The map shows a perfectly good road. You thank the uncle and take it.`,'xp+m mp+2','Your phone has no signal. You decide to stay on the main road, to be safe.','xp+s')),
L('any','Hold My Bag, Please','🎒',`A young man with a heavy backpack and a worried face rushes up to you. "Hold my bag for one minute? My shoelace! My bus is leaving!" He thrusts the bag at you before you can answer.`,
 o('Hold it for a minute.',`You take it, and look at the bus.`,'xp+s','',RK(35,'He walks round the corner and never comes back. The bag is full of newspapers, and while you were staring at it, a hand has found your pocket money.','gold-5 loseitem')),
 o('Say you cannot, and keep walking.',`"Please?" he calls. You shake your head and keep going. A good rule: never hold a stranger's bag.`,'xp+m mp+2 flag:cg_smart'),
 o('Point him to the bus stop guard.',`The guard takes one look at him, and at the bag, and asks him some questions. The young man suddenly remembers he is late for something else.`,'xp+m mp+2 flag:cg_smart')),
L('any','The Bargain Torch','🔦',`A stall near the MRT sells torches, "BRAND NEW, ONLY $2, LAST PIECE". The seller leans in. "Very bright. Very strong. I give you good price, because you are my best customer."`,
 o('Buy the $2 torch.',`You hand over the coins, and he presses the torch into your hand with great ceremony.`,'gold-2 +cg_penlight xp+s','gold:2',RK(50,'The torch flickers once, gasps, and dies. A dud. The seller is somehow already gone.','-cg_penlight')),
 c('Switch it on and test it before you pay.','INT 8 craft',`It flickers, and dies. "Wah, battery problem," says the seller, unabashed. You hand it back and walk on.`,'xp+m mp+2 flag:cg_smart','It works, just about. You pay, and hope.','gold-2 +cg_penlight xp+s','gold:2'),
 o('Walk on. You have a torch already, or you will find one.',`There are better shops in Changi Village anyway.`,'xp+s')),
L('any','Durian Samples','🍈',`An auntie at a fruit stall waves a tray of golden durian. "Try, try! Free sample! Sweet! Very good for body!" The smell is enough to stop a bus.`,
 o('Eat a piece.',`Creamy, rich, sweet and extremely strong. Somewhere between heaven and a gas leak.`,'xp+m mp+2','',RK(25,'It is stronger than your stomach expected. You spend a miserable ten minutes in the nearest toilet, whimpering.','hp-3 mp-3')),
 o('Sniff it, smile and say, "Next time, auntie!"',`She laughs, and gives you a free mandarin instead.`,'xp+s mp+2 +cg_oranges'),
 o('Ask her how to choose a good one.',`"Shake it," she says. "If you hear the seed, it is ripe." You tuck that away.`,'xp+m')),
L('any','A Prize Message','📱',`Your phone buzzes: "CONGRATULATIONS! You have won a limited-edition Merlion plush! Click this link to claim within 10 minutes!" A countdown timer is ticking.`,
 o('Click the link and claim it.',`A glossy page loads, asking for a few small details.`,'xp+s','',RK(70,'The page wants a parent\'s card number. You close it, but a pop-up has already charged you a "processing fee".','gold-8')),
 o('Delete the message and block the number.',`Gone. Anything with a countdown timer and a free prize is almost always a trap.`,'xp+m mp+2 flag:cg_smart'),
 o('Show it to a grown-up.',`"Scam," says {guardian}, in about two seconds. You feel clever for asking.`,'xp+m mp+2 flag:cg_smart')),
L('any','The Mystery Smoothie Dare','🧪',`At the void deck, a group of older kids hold up a plastic cup of grey-green sludge. "Dare you," says one. "Drink it all and we give you $5. Chicken?"`,
 o('Drink it all.',`You hold your nose and chug.`,'xp+s','',RK(45,'It is chilli sauce, soy sauce, old milo and something that used to be fruit. Your eyes water for a full minute, and the older kids laugh until they cry. No $5, either.','hp-2 mp-3')),
 o('Say "Nope, not funny," and walk away.',`They shrug, a bit let down. Saying no is a bit scary, but it is a lot easier than the smoothie.`,'xp+m mp+2'),
 c('Offer them a better dare instead.','CHA 8 persuade',`"Eat a raw chilli padi? Race to the lift? I will do that." They are impressed, and your reputation takes a big leap.`,'xp+m mp+3','They are not impressed. You walk away, shrugging.','xp+s')),
L('any','The Slippery Bridge','🌉',`The quickest way to your bus stop is across a narrow wooden footbridge over a drain. It is wet, mossy and has a sign saying CAUTION: SLIPPERY. Someone has added, in marker pen: "VERY".`,
 o('Cross carefully, one step at a time.',`Shuffle, shuffle, shuffle. The bridge sags a bit, but holds.`,'xp+s mp+1','',RK(20,'A plank snaps under your foot, and you plunge into the shallow canal, soaked, bruised and covered in duckweed. Something floats away from your bag.','hp-3 loseitem')),
 o('Go round by the road.',`Five minutes longer, and perfectly dry.`,'xp+s'),
 c('Test each plank with your foot first.','WIS 8 survive',`Tap, tap, tap. The third plank rattles. You skip over it and arrive safely.`,'xp+m mp+2','Everything seems fine until the last plank. You slip, but catch the rail.','xp+s hp-1')),
L('any','A Free Reading','🔮',`Outside a temple, an old man with a tiny table and a pet bird says, "Free reading for young people today! No charge! Sit, sit."`,
 o('Accept the free reading.',`The bird picks a card. The old man reads it aloud, slowly and thoughtfully.`,'xp+m mp+2','',RK(60,'"And the interpretation," he says, with a polite smile, "is $8." You pay, because you cannot think of a way to say no.','gold-8')),
 c('Ask first: "Is it really free?"','CHA 8 persuade',`He sighs. "Not exactly." You thank him and leave, wiser.`,'xp+m mp+2 flag:cg_smart','He just waves the bird at you. You smile and walk on.','xp+s'),
 o('Politely walk on.',`The bird looks cross. The old man waves anyway.`,'xp+s')),
L('any','The Charity Collector','🎗️',`A man with a clipboard and a big smile blocks the pavement. "Support disabled children! Just $5, right now, and you get a sticker!" You cannot see any ID or permit.`,
 o('Donate $5 on the spot.',`You hand over the money, and he gives you a sticker, which says nothing in particular.`,'xp+s gold-5','gold:5',RK(55,'He pockets the cash and vanishes into the crowd. The "charity" does not exist, and you feel more than a little foolish.','mp-2')),
 c('Ask to see his ID and permit.','INT 8 lore',`He suddenly remembers an urgent appointment. A real collector would have had both ready.`,'xp+m mp+2 flag:cg_smart','He shows a laminated card that looks real. You still decide to donate through your school instead.','xp+s'),
 o('Say you donate through school, and walk on.',`He tries one more smile, and moves on to the next person.`,'xp+s mp+1')),
L('any','A Lift in the Rain','🚗',`A sudden storm. You are at the bus stop, drenched. A car pulls up, and a friendly man in the driver's seat winds down the window. "Wah, so wet! Hop in, I go your way. Free!"`,
 o('Accept the lift.',`The back seat is warm, and the heater is on.`,'xp+s hp+2','',RK(35,'The car does not turn toward Tampines. By the time you shout, the doors are locked, and a long, frightening time passes before he lets you out. The police take you home. Your adventure ends here.','die')),
 o('Say no, and wait under the shelter.',`He frowns, winds up the window, and drives off. You are wet, but you are safe.`,'xp+m mp+2 flag:cg_smart'),
 o('Phone {guardian} for a pick-up.',`"Stay right there," says {guardian}. Twenty minutes later, you are in a warm car, wrapped in a towel.`,'xp+m hp+4 mp+3 flag:cg_smart')),
L('any','The Mystery Can','🥫',`A battered vending machine near the old block sells a "MYSTERY CAN: $2". The label has faded to a smear. Somebody has scrawled "Edible?" beside it.`,
 o('Buy the mystery can.',`Clunk. A can rolls out, cold and unlabelled.`,'gold-2 xp+s','gold:2',RK(35,'It tastes of metal and old pineapple. Everything about it is expired. Your stomach clenches.','hp-3 mp-2')),
 o('Buy a plain bottle of water ($1).',`Boring, but exactly what you needed.`,'gold-1 hp+3 xp+s','gold:1'),
 o('Leave it, and drink from your own bottle.',`You sip from your flask and move on.`,'xp+s')),
L('any','The Helpful Boy','🧒',`A boy of about your age wanders up and offers, cheerfully: "I will watch your stuff while you queue for the bubble tea. Fifty cents." He grins. He looks harmless.`,
 o('Pay him 50 cents to watch your bag.',`He sits down beside it with a very serious face.`,'gold-1 xp+s','gold:1',RK(35,'You return to an empty spot. The boy, and the bag, and a few useful things in it, are gone.','loseitem gold-2')),
 o('Take your bag with you in the queue.',`A bit annoying, but it never leaves your sight.`,'xp+s mp+1'),
 o('Ask a friend to hold it.',`Better. Your friend is happy to help, and nobody disappears.`,'xp+m mp+2','anyally'))
]);

/* ================= THE THREAD OF THE MOIRAI: the gods' world is full of traps ================= */
G.miniArch('gr_trick', [
L('any','The Lotus Eaters','🌸',`On a quiet beach, a group of smiling people in loose robes offer you honey-sweet pink flowers. "Eat," they murmur. "Rest. Forget your troubles. Stay a while." Their eyes are very happy, and very far away.`,
 o('Eat a lotus flower.',`Honey, jasmine and sleepy sunshine. You feel wonderfully calm.`,'xp+s mp+3','',RK(50,'Your worries melt away, and so does something else. A skill you used to know slips out of your head like water through fingers.','forget')),
 o('Politely refuse and walk on.',`They sigh, gently disappointed, and offer the flowers to the next passer-by.`,'xp+m mp+2 flag:gr_respect'),
 c('Ask what the flowers do.','WIS 8 spirit',`You realise at once. Odysseus lost days to this. You thank them and leave, rattled.`,'xp+l mp+2 flag:gr_respect','They only smile. You decide not to find out.','xp+s')),
L('any','Free Passage','⛵',`At a small harbour, two friendly sailors wave. "Going to Corinth? We give you free passage! No charge! Come, come, we leave at once!" Their boat is nicer than most.`,
 o('Accept the free passage.',`You step aboard. They are very helpful with your bags.`,'xp+s','',RK(35,'Halfway across, one of them "accidentally" lifts your purse, and the other "accidentally" drops your pack overboard. They shrug, and set you down on a lonely beach.','gold-6 loseitem')),
 o('Decline and find an honest boatman.',`It takes an hour, but you pay a fair fare to a grumpy old man who gives you a bruised apple as change.`,'xp+m mp+2'),
 c('Ask them to swear an oath by Poseidon.','CHA 8 persuade',`They go pale, mutter, and suddenly remember they have somewhere else to be. You walk on, smiling.`,'xp+l mp+2','They swear, carelessly. You still feel uneasy, and decide to walk.','xp+s')),
L('any','The Sealed Jar','🏺',`A weary pilgrim by the road holds a sealed clay jar. "Carry this to the temple in the next village for me, young one? My knees! Just do not, whatever you do, open it." He presses it into your hands.`,
 o('Carry the jar to the temple.',`It is heavier than it looks, and something inside shifts.`,'xp+m mp+2','',RK(25,'On the way, curiosity gets the better of you. You lift the lid, just a crack. Something small, grey and unhappy flutters out and settles on your shoulder. It follows you for a day, and you feel dreadful.','hp-3 mp-3')),
 o('Politely refuse.',`He sighs. "A wise choice, perhaps." He turns away to find someone else.`,'xp+s mp+1'),
 o('Offer to wait with him until help comes.',`You sit with him in the shade, and share your water. In the end, his grandson turns up and carries it.`,'xp+m mp+3 flag:gr_kind')),
L('any','The Golden Spring','✨',`A small spring bubbles out of the rock, with a rim of gold foam. A sign in old Greek reads "Sweet water for the weary." A few glittering fish flicker in the pool. You are very thirsty.`,
 o('Drink from the spring.',`Cool, sweet and tingling.`,'xp+s hp+4 mp+2','',RK(40,'It is sweeter than water has any right to be. When you lift your head, you cannot remember something you always knew how to do.','forget')),
 o('Fill your water bottle from the stream downhill.',`A little further, a plain stream trickles through ferns. The water is cold and clear and entirely ordinary.`,'xp+s hp+3 mp+1'),
 c('Test a few drops on your tongue first.','WIS 8 survive',`It tastes sharp, strange and wrong. You spit it out, and walk on.`,'xp+m mp+2','It tastes fine. But you have a feeling, so you do not risk more.','xp+s')),
L('any','A Gift from a Smiling Merchant','🎁',`A merchant with a gold-embroidered cloak and a wide, wide smile steps into your path. "A gift! A little token of friendship from a humble traveller. Please, accept this lovely box."`,
 o('Accept the beautiful box.',`It is heavy, and carved with tiny horses.`,'xp+s','',RK(40,'You open it, later. A furious swarm of bees pours out. When you stop running, your arm is swollen, and the box, and part of your pack, have been left behind.','hp-3 loseitem')),
 o('Thank him warmly, but decline.',`His smile does not change, but his eyes do. He bows and walks away, quickly.`,'xp+m mp+2 flag:gr_respect'),
 c('Ask him to open it first.','INT 8 lore',`He hesitates a fraction too long. You hand it back, and he trots away, muttering.`,'xp+l mp+2','He opens it, and it is just ribbons. You still feel odd, and decline.','xp+s')),
L('any','The Satyr Guide','🐐',`A satyr sits on a rock, scratching his beard. "Lost, are you? Say no more! I know every path in Greece. Just you follow old Silenus. Drop of wine for the trouble?" He winks, and smells strongly of grapes.`,
 o('Ask the satyr to guide you.',`He bounds off, whistling, with a happy skip.`,'xp+s','',RK(50,'After three drinks, he gets distracted by a nymph, and leads you in two very long circles. You lose half the day, a good deal of your patience, and a few coins to "refreshments".','mp-2 hp-1 gold-3')),
 o('Politely thank him and read the milestones yourself.',`The signs are old-fashioned, but they are clear. You get there, sunburnt but accurate.`,'xp+m mp+1'),
 c('Make him swear by Dionysus to stay sober.','CHA 8 persuade',`He is so touched that he stays sober for almost an hour, and gets you there safely.`,'xp+l mp+3','He promises, but his promise does not outlast the first vineyard.','xp+s')),
L('any','The Mushroom Ring','🍄',`In a shaded glade, a ring of pale mushrooms glows softly. They smell of bread and honey. A hungry goat is eyeing them. You have not eaten since the morning.`,
 o('Pick a few and eat them.',`They are chewy, earthy and not at all bad.`,'xp+s hp+3','',RK(20,'The glade tilts. Everything goes silver, and soft, and warm. When you open your eyes, you are in a long queue of pale shapes on a grey shore, and a ferryman is shaking his head. "Too early," says Charon. "Come back later." Your adventure ends here.','die')),
 o('Eat your own bread and leave the mushrooms.',`The goat looks hopeful. You break off a piece for him.`,'xp+m mp+2'),
 c('Ask the goat what it thinks.','WIS 8 survive',`The goat sniffs the ring once, sneezes and trots away. You take the hint.`,'xp+m mp+2','The goat shrugs and eats grass instead.','xp+s')),
L('any','A Blessing for a Price','🛕',`A tall priest in a bleached robe sits outside a small shrine. "A blessing, traveller? Five drachmae, and Zeus himself will smile on your road. Many are blessed here. None regret it."`,
 o('Pay 5 drachmae for the blessing.',`He mumbles over you, and touches your forehead with ash.`,'gold-5 xp+s','gold:5',RK(50,'His "blessing" is mumbled nonsense, and your purse is lighter. Worse, you feel suddenly sluggish, as though something has settled on you.','st:curse3')),
 o('Leave a small, silent offering at the altar.',`A flower, a pebble, a quiet word. The shrine accepts it.`,'xp+m mp+2 flag:gr_respect'),
 c('Ask which god he serves, and how long he has been a priest.','WIS 8 spirit',`His answers are vague and contradictory. You thank him politely and go on.`,'xp+m mp+2','He answers smoothly. You are unsure, so you do not pay.','xp+s')),
L('any','The House Special','🍲',`At a small inn, the innkeeper rubs his hands. "Today's special! My famous fish stew, only three drachmae! The recipe has been in my family for generations." A rich smell wafts from the pot. A suspicious number of flies cluster at the rim.`,
 o('Order the house special.',`A steaming bowl arrives, thick with fish and herbs.`,'gold-3 hp+6 xp+s','gold:3',RK(30,'It is at least three days old. You spend the night regretting every spoonful.','hp-3 mp-3')),
 o('Eat your own bread and olives.',`Simple and safe. The innkeeper rolls his eyes.`,'xp+s hp+2'),
 c('Ask when the stew was made.','CHA 8 persuade',`He splutters. "This morning! Mostly." You decide on bread.`,'xp+m mp+2','He says "this morning", and looks away. You are not convinced.','xp+s')),
L('any','The Lucky Amulet','📿',`A man with a tray of amulets calls out, "Protection from the evil eye! Protection from harpies! Protection from everything! Six drachmae, only today!" His amulets all look suspiciously alike.`,
 o('Buy an amulet.',`It is bright blue glass on a leather string.`,'gold-6 xp+s mp+2','gold:6',RK(70,'It does nothing at all. A few steps later, the "glass" turns green and crumbles, and so, a little, does your faith in bargains.','mp-2')),
 o('Politely decline.',`He is already calling to the next customer.`,'xp+s'),
 c('Ask him to explain what each charm protects against.','INT 8 lore',`He gets tangled in his own explanation, and you leave with a smile.`,'xp+m mp+2','He fires off a ten-minute speech. You nod politely and leave.','xp+s')),
L('any','A Boy Offers to Watch Your Pack','🎒',`A ragged boy with big eyes and an even bigger smile offers: "I will guard your pack while you visit the temple, for one obol. I am very honest. Everyone says so."`,
 o('Pay him an obol to guard your pack.',`He sits on it like a hen on an egg, with a solemn face.`,'gold-1 xp+s','gold:1',RK(35,'You return to find an empty patch of dust. The boy, and your pack, and some of what was in it, have vanished.','loseitem gold-2')),
 o('Carry your pack with you.',`A bit heavy, but safe, and you keep all your things.`,'xp+s mp+1'),
 o('Ask a priestess to keep it safe.',`She places it behind the altar. "Gods do not steal," she says, gravely.`,'xp+m mp+2 flag:gr_respect'))
]);

/* ================= THE ASHEN QUEEN: the road is full of liars ================= */
G.miniArch('roadtrick', [
L('any','A Shortcut Offered','🗺️',`A cheerful stranger in a good cloak falls into step beside you. "Heading to the next town? I know a shortcut. Saves a day. Not many know it. Follow me, friend."`,
 o('Follow him.',`He chats pleasantly, and leads you down a narrow track.`,'xp+s','',RK(40,'The track ends in a ditch, three of his friends and a very unfriendly knife. By the time you break away, you have lost a purse and a bag.','hp-m loseitem gold-s')),
 o('Politely decline, and stay on the road.',`He shrugs and ambles away, whistling. You keep your eyes open until he is out of sight.`,'xp+m'),
 c('Ask him to walk ahead of you.','WIS 11 survive',`He hesitates, curses under his breath and mutters something about "a prior engagement". The shortcut, you decide, was never real.`,'xp+l','He walks ahead cheerfully. You follow, wary, and, in the end, nothing happens.','xp+s')),
L('any','The Roadside Stew','🍲',`A woman is serving stew from a huge black pot at a crossroads. "Free for travellers!" she calls. "Plenty for all! Thick as sin and twice as good." It smells wonderful, and a few drowsy-looking men are sitting by the verge.`,
 o('Take a bowl and eat.',`Hot, rich and savoury. Everyone is smiling.`,'xp+s hp+m','',RK(40,'Halfway down the bowl, your stomach cramps and your vision wobbles. You have been poisoned, and the woman, and the pot, have disappeared by the time you look up.','st:poison3')),
 o('Politely decline and walk on.',`She shrugs. "More for the rest." You walk on, a little hungry, and a little wiser.`,'xp+s'),
 c('Watch the others for a while before deciding.','WIS 11 survive',`The "free" stew sends two travellers off to sleep very quickly. You quietly move on.`,'xp+l','Everyone seems fine, so far. You eat your own bread to be careful.','xp+s')),
L('any','A Bargain Blade','⚔️',`A smiling peddler in a pointed hat holds up a long, shining sword. "A knight's blade! Only thirty gold! A real bargain, friend. Was meant for a lord, but he, ah, no longer needs it."`,
 o('Buy the sword (30 gold).',`The blade is beautiful, perfectly balanced and, oddly, a little too warm.`,'gold-30 xp+s','gold:30',RK(45,'The first time you draw it, the blade whispers in a dead tongue. Something cold settles on your shoulders, and a curse tightens round you.','st:curse3')),
 o('Politely decline.',`"Your loss," he sniffs, and wraps it back up.`,'xp+s'),
 c('Examine the blade for runes.','INT 11 lore',`There, on the tang: a tiny cursed sigil. You put it back and walk away, heart pounding.`,'xp+l','The metal is flawless. You are suspicious, but unable to say why.','xp+s')),
L('any','The Hedge-Witch\'s Tea','🍵',`An old woman in a patched shawl waves from a tiny hut. "Come in, dear! A cup of my special tea for the weary. No charge. It will do you a world of good." The kettle is already steaming.`,
 o('Drink the tea.',`It is hot, bitter and faintly sweet, with a strange herbal taste.`,'xp+s','',RK(40,'It does good for some, and harm for others. Today, you are one of the others, and the world spins.','st:poison3')),
 o('Politely decline, and ask for water.',`She cackles. "Clever one." She hands you a plain cup of water, and a small, knowing smile.`,'xp+m'),
 c('Ask what is in it.','WIS 11 survive',`She lists nine herbs, and, as she does, you recognise two that are a little too dangerous. You smile, and decline.`,'xp+l','She recites a list that sounds harmless. You drink a little, carefully.','xp+s st:bless2')),
L('any','A Limping Traveller','🧳',`A man sits at the roadside, clutching his ankle, wincing. "Twisted it! Please, kind stranger, would you help me up and carry my pack to the next village? My purse for the trouble."`,
 o('Help him up and carry his pack.',`He leans on you, groaning, and you take the pack.`,'xp+s mp+s','',RK(30,'The ankle is miraculously better. A whistle sounds, and two friends step from the hedge. By the time you get away, you are lighter in gold and a few useful things.','hp-m loseitem gold-s')),
 o('Offer him some bread, and point out the road to the village.',`He accepts it with a grumble, and hobbles on his own.`,'xp+m mp+s flag:kind'),
 c('Examine the ankle with a healer\'s eye.','WIS 11 heal',`There is no swelling. He is a liar. He mutters, scrambles up and bolts.`,'xp+l','It does look swollen. You do what you can, and stay alert.','xp+s')),
L('any','The Wishing Well','⛲',`An old stone well stands at a crossroads, with coins glinting in the shallows and a little sign: "Toss a coin and wish. Your fortune awaits." A beggar sits nearby, watching.`,
 o('Toss in a coin (10 gold) and wish for luck.',`Plink. You close your eyes, and wish.`,'gold-10 xp+s mp+s','gold:10',RK(50,'The beggar slips round the back, scoops the whole well into his hat and is gone before the ripples settle. Your wish, apparently, was for him.','mp-s')),
 o('Wish silently, without a coin.',`A free wish is still a wish. You walk on lighter.`,'xp+s mp+s'),
 o('Give the beggar a copper instead.',`He nods, and says nothing, which is enough.`,'gold-1 xp+m mp+s flag:kind','gold:1')),
L('any','Free Mushrooms','🍄',`A small, hungry-looking boy sells strange mushrooms from a basket. "Fresh from the forest, sir! Safe to eat! Very tasty! Only five gold!" Nobody is buying.`,
 o('Buy a bunch and eat them (5 gold).',`They are earthy, rubbery and slightly peppery.`,'gold-5 hp+s xp+s','gold:5',RK(35,'Within the hour, you are racked with a terrible fever. The mushrooms were far from safe.','st:poison3')),
 o('Buy bread from him instead (3 gold).',`He looks surprised, and delighted. The bread is a little stale, but perfectly safe.`,'gold-3 hp+s xp+m','gold:3'),
 o('Decline kindly, and move on.',`He shrugs, and calls out to the next passer-by.`,'xp+s'))
]);

/* ---------- where the traps appear ---------- */
['cg_tampines','cg_changi','cg_city','cg_eastcoast','cg_ubin','cg_festival','cg_oldcity','cg_nature'].forEach(r => { if (G.regions[r]) G.regions[r].enc.cg_trick = 2; });
['gr_shore','gr_athens','gr_delphi','gr_sea'].forEach(r => { if (G.regions[r]) G.regions[r].enc.gr_trick = 2; });
['gr_gorgon','gr_forge','gr_hades','gr_olympus'].forEach(r => { if (G.regions[r]) G.regions[r].enc.gr_trick = 1; });
['greenmarch','stonehelm','gloamfen','amber','saltwind','frostmere','hollowdeep','ashen'].forEach(r => { if (G.regions[r]) G.regions[r].enc.roadtrick = 1.5; });

/* ================= street food and shop bargains can go wrong too ================= */
const FOOD = /(order|eat|gelato|pasta|nasi|noodle|rojak|satay|stingray|chendol|popiah|kueh|kopi|teh|juice|bowl|plate|snack|drink|cup of|stew|cake|figs|bread|olives|wine|honey|cornetto|meal|lunch|dinner|fish on a stick|ice)/i;
const sick = (p, msg) => [p, msg || 'Something in it does not agree with you. An unhappy hour later, you wish you had stuck to plain rice.', 'hp-3 mp-3'];
const riskPool = (poolName, titleRe, labelRe, risk) => { (G.mini[poolName]||[]).forEach(e => { if (titleRe && !titleRe.test(e[1])) return; e[4].forEach(a => { if (!a[8] && /gold:/.test(a[6]||'') && (!labelRe || labelRe.test(a[0]))) a[8] = risk; }); }); };
riskPool('cg_food', null, null, sick(18));
riskPool('cg_local', /Seafood|Joo Chiat|Geylang|Kueh|Popiah|Chendol|Hawker|Pasar|Satay/i, FOOD, sick(22));
riskPool('cg_action', null, /fishballs|bubble tea|noodle/i, sick(15));
riskPool('gr_shop', /Stall|Offering|Boatman/i, /(cake|figs|wine)/i, sick(20, 'The food was a day older than the stallholder admitted. You pay for it all afternoon.'));
riskPool('gr_local', null, FOOD, sick(15));
riskPool('toll', /Camp Cook/, null, [20, 'The stew was not as fresh as it smelled. By nightfall you are doubled over, feverish and miserable.', 'st:poison3']);
riskPool('toll', /Apothecary/, null, [15, 'Back on the road, you find the "potion" is little more than coloured water. Your gold bought you nothing.', 'xp+s']);
riskPool('toll', /Guide for Hire/, /Hire her/, [20, 'She leads you to the right path, and then to a "friend\'s" roadside stall where you are asked, rather firmly, to pay for a lot of things you never ordered.', 'gold-s']);
riskPool('toll', /Gate Guard/, /Slip him/, [15, 'He takes the gold, and then, with a straight face, tells you the gates are closed anyway. Your pocket is lighter.', 'mp-s']);

/* the same treatment for food and drink in the hand-written scenes of both new stories */
Object.keys(G.scenes).filter(id => /^(cg|gr)/.test(id)).forEach(id => { (G.scenes[id].opts || []).forEach(o2 => { if (!o2.risk && /gold:\d/.test(o2.r||'') && FOOD.test(o2.t||'') && !o2.act) o2.risk = sick(14); }); });

/* shops that sell useful things can sell duds */
['cg_stall_a','cg_stall_b'].forEach(sid => { ((G.scenes[sid]||{}).opts || []).forEach(o2 => { const m = /\+(cg_[a-z_]+)/.exec((o2.y && o2.y[1]) || ''); if (m && /cg_(joss|salt|battery)/.test(m[1])) o2.risk = [15, 'Back at the beach you find the "fresh" stock was damp and useless. It crumbles to nothing in your hand.', '-' + m[1]]; }); });
const seed = (sid, textRe, risk) => { ((G.scenes[sid]||{}).opts || []).forEach(o2 => { if (!o2.risk && textRe.test(o2.t||'')) o2.risk = risk; }); };
seed('gr2_inn', /Order bread/, sick(15, 'The cheese was older than the innkeeper let on.'));
seed('gr2_inn', /Sleep in the barn/, [25, 'You wake before dawn to find your purse lighter, and a sack of your things missing. A thief, or a very hungry goat.', 'gold-5 loseitem']);
seed('gr3_agora', /buy food/i, sick(15));
seed('cg2_bus', /taxi|cab/i, [10, 'The driver takes the long way round, and the meter runs on happily.', 'gold-3']);
})();
