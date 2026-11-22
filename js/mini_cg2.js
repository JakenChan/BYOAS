/* Encounter pools for the 500-choice Singapore story: generic scares, kindnesses, food stops, regional events */
(function(){
const G = globalThis.G;

/* ======================= GENERIC SMALL SCARES (any region) ======================= */
G.miniArch('cg_scare', [
['any',`A Single Shoe`,'👟',`On the stairwell landing sits one small shoe, a child's sandal, neatly placed on the step as if someone is about to come back for it. There is no other shoe, and nobody around.`,[
  [`Leave it exactly where it is`,'',`You step carefully around it. Some things are better not tidied up. A cool breeze brushes your ankle, almost like a thank-you.`,`xp+s flag:cg_respect`],
  [`Put it on the window ledge where it can be found`,'WIS 8 spirit',`You set it gently where the owner will see it. The air feels a little lighter.`,`xp+m mp+2 flag:cg_kind`,`The sandal feels oddly heavy and cold. You put it down quickly and hurry on.`,`mp-1 xp+s`],
  [`Hurry on without looking`,'',`Your footsteps echo much louder than they should.`,`xp+s`]]],
['any',`The Open Umbrella`,'☂️',`A bright red umbrella stands open in the corner of the corridor, dripping, though it has not rained. Folk wisdom says never to open an umbrella indoors at night, and certainly never to leave one lying open.`,[
  [`Close it politely and lean it in the corner`,'',`Snap! The drops stop. A very faint "thank you" seems to float past. You tell yourself it was the lift.`,`xp+s mp+1`],
  [`Check whether anyone has lost it`,'CHA 8 persuade',`A neighbour's door opens. "Aiyo, that's mine, thanks!" says an uncle in pyjamas. "I was drying it." Entirely ordinary. You laugh with relief.`,`xp+m mp+2`,`Nobody answers. You leave it there and hurry away.`,`xp+s`],
  [`Walk past quickly`,'',`The umbrella stays exactly as it was.`,`xp+s`]]],
['any',`Paper Money in the Wind`,'💸',`A scrap of gold-and-silver joss paper skips along the pavement, in a breeze that you cannot feel. It stops against your foot, then lifts and flutters off again. The aunties say you should not step on offerings.`,[
  [`Step aside and let it blow past`,'',`It floats away down the road like a tiny kite. You feel you have been polite to somebody.`,`xp+s flag:cg_respect`],
  [`Pick it up and put it in the burner`,'WIS 8 spirit',`You carry it to the metal burner at the corner and drop it in. "Good child," says a passing auntie, who is carrying a bag of oranges.`,`xp+m mp+2 flag:cg_respect flag:cg_kind`,`It sticks to your fingers and tears. You apologise to the air.`,`xp+s`],
  [`Ignore it`,'',`It is only paper. Probably.`,`xp+s`]]],
['any',`Somebody Calls Your Name`,'🗣️',`"Heeey... come here..." A voice calls your name from behind you, in the dark between two blocks. You turn around, and there is nobody there. Old people say not to answer when you are not sure who is calling.`,[
  [`Do not answer. Walk on, calmly.`,'WIS 8 resist',`You do not answer. You do not run. You count your steps until you reach the light of the lift lobby. By then the voice is gone.`,`xp+m mp+2`,`You answer "Hello?" before you can stop yourself. Nothing replies. But your heart pounds.`,`mp-2 xp+s`],
  [`Text a friend to check in`,'',`"Everything ok?" you type. Priya replies at once: "Yes. Why? Are you ok?" Having someone to message makes the dark a bit friendlier.`,`xp+s mp+2`],
  [`Call back politely: "Who is it?"`,'WIS 9 spirit',`A small chuckle. Then a cat jumps down from a ledge and strolls past, tail high. The voice was probably a neighbour's TV. Probably.`,`xp+m`,`Silence. Which is worse.`,`mp-1 xp+s`]]],
['any',`The Lift That Stops`,'🛗',`The lift doors open on the wrong floor, a floor with no light, and then stay open. Nobody is there. The little "close door" button does not respond for a very long ten seconds.`,[
  [`Press the button for your own floor and wait calmly`,'WIS 8 resist',`The doors give a tired sigh and close. The lift whirrs and takes you home. You count it as a win.`,`xp+m mp+1`,`The doors close at last, but you realise you were holding your breath.`,`xp+s`],
  [`Say "Excuse me, I'm going up" and press the button`,'',`The doors close at once. Manners, once again, prove their worth.`,`xp+s flag:cg_respect`],
  [`Take the stairs instead`,'CON 8 endure',`Twelve floors! You arrive wobbling, but proud. It was probably a lift fault, and the stairs are good for your legs.`,`xp+m hp-1`,`You make it to nine, then take a rest on a landing. Then you carry on.`,`hp-1 xp+s`]]],
['any',`The Cat Stares at a Corner`,'🐈',`A cat sits at the corner of a corridor, staring fixedly at an empty patch of air, ears twitching. She tracks something that is not there, left to right, left to right, slowly.`,[
  [`Sit down beside her and watch quietly`,'WIS 8 spirit',`You see nothing. But you feel, very gently, as though a cool hand has passed over your hair. The cat purrs. Whatever it is, it is friendly.`,`xp+m mp+2`,`Nothing. Just you, a cat and some very empty air. You feel a little silly and a little calmer.`,`xp+s`],
  [`Tell the corner "Hello, I hope you are well"`,'',`The cat looks at you, then at the corner, and blinks slowly, a cat compliment. You consider it a success.`,`xp+s mp+1`],
  [`Walk quickly past`,'',`The cat does not even look at you.`,`xp+s`]]],
['any',`Smell of Incense`,'🪔',`A strong smell of incense drifts down the corridor, though no one is burning any. It smells of sandalwood and sweet smoke, exactly like a temple. It is coming from a door that has been shut for years.`,[
  [`Stop and say a short respectful hello`,'WIS 8 spirit',`The smell fades, like a bow returned. It leaves you with a calm feeling.`,`xp+m mp+3`,`The smell stays. You walk on, hoping it was polite enough.`,`xp+s`],
  [`Cover your nose and walk past`,'',`It is just incense. Mostly.`,`xp+s`],
  [`Knock on the door`,'',`Nobody answers. But the smell goes away. You decide that is a good result.`,`xp+s mp-1`]]],
['any',`Cold Drink, Warm Hand`,'🥤',`Your cold drink has gone warm, which is odd, and the can of sports drink in your bag has frost on it, which is odder. The air feels heavy, as if someone is standing very close to you, politely waiting.`,[
  [`Say "Thank you, I am going now"`,'WIS 9 spirit',`The heavy feeling lifts like a hand taken away from your shoulder. The cold can quickly turns back to normal.`,`xp+m mp+2`,`Nothing changes, but you feel braver for having spoken.`,`xp+s`],
  [`Sip the warm drink and carry on`,'',`It tastes of nothing special, which is reassuring.`,`xp+s hp+1`],
  [`Take a deep breath and count to ten`,'',`In and out. The heaviness ebbs away by seven.`,`xp+s mp+2`]]],
['any',`Wind Chimes, No Wind`,'🎐',`Somewhere above you, a set of wind chimes tinkles gently, though the air is completely still. It sounds like water over small stones, and like someone humming a tune you almost know.`,[
  [`Listen for a moment`,'WIS 9 spirit',`The tune is a slow, rocking lullaby. A sea tune. For a few seconds you can almost hear the words.`,`xp+m mp+2 flag:cg_lullaby`,`It is only chimes. Pretty ones.`,`xp+s`],
  [`Hum along softly`,'',`The chimes fall quiet, as if pleased, then tinkle a final note.`,`xp+s mp+2`],
  [`Walk away briskly`,'',`The chimes keep on for a moment and then fade.`,`xp+s`]]],
['any',`The Whistle`,'😗',`You catch yourself whistling a cheerful tune as you walk. Then you remember: whistling at night in the seventh month is said to attract unseen company. A shiver goes down your back, followed by a quiet, answering whistle from somewhere in the dark.`,[
  [`Stop whistling and apologise politely`,'',`You say sorry to the shadows. The answering whistle stops, as if someone has nodded. All is quiet.`,`xp+s flag:cg_respect mp+1`],
  [`Whistle a little louder to be brave`,'',`The answering whistle gets cheekier. Your neck prickles all the way home.`,`mp-2 xp+s flag:cg_rude`],
  [`Hum quietly instead`,'',`Humming is somehow always fine.`,`xp+s mp+1`]]],
['any',`Wet Footprints`,'👣',`A line of damp little footprints crosses the dry floor of the void deck, appearing one by one as you watch. They vanish a few steps from the lift, as if the walker has stepped out of the world.`,[
  [`Step carefully around the footprints`,'',`You make a little detour. Somewhere, a small voice says "thank you" in a way only you can hear.`,`xp+s mp+1 flag:cg_respect`],
  [`Follow them a little way`,'DEX 8 sneak',`They lead to a drain by the lift, with a tiny paper boat caught in the grating. You nudge it free and send it floating.`,`xp+m mp+2 flag:cg_kind`,`They fade before you can follow. You are not sure you wanted to.`,`xp+s`],
  [`Ignore them`,'',`They dry up in minutes.`,`xp+s`]]],
['any',`Eyes in the Glass`,'🪞',`In the lift mirror, for a split second, you see yourself blink a moment after you actually do. Your reflection smiles, which you did not. Then it is just you again, looking at yourself with a pale face.`,[
  [`Smile back and say "Hi!"`,'WIS 8 resist',`Your reflection's smile becomes shy. Then nothing. You do feel more cheerful.`,`xp+m mp+2`,`You grin a bit shakily. The reflection does too, normally this time.`,`xp+s`],
  [`Look away at the floor numbers`,'',`The numbers climb. Nothing else happens.`,`xp+s`],
  [`Cover the mirror with your hand`,'',`Better. It is only a mirror.`,`xp+s mp+1`]]],
['any',`A Child Laughing`,'😄',`A soft giggle comes from a stairwell above you, the kind a little kid makes while playing hide-and-seek. It is very late. There are no kids on that floor, as far as you know.`,[
  [`Say "Hello! Are you playing hide-and-seek?"`,'WIS 8 spirit',`A tiny voice whispers "Shh!" and another giggle follows. It does not sound unhappy, only a little lonely. You whisper "Okay, I won't tell."`,`xp+m mp+2 flag:cg_kind`,`The giggle stops. You hope you have not scared anyone.`,`xp+s`],
  [`Leave a sweet on the step`,'',`You leave a sweet and walk on. When you look back later, the wrapper is neatly folded, the sweet gone.`,`xp+s -cg_sweets flag:cg_kind`,'','','item:cg_sweets'],
  [`Hurry on past`,'',`You jog the rest of the way.`,`xp+s`]]],
['any',`Candle at the Crossroads`,'🕯️',`At a quiet road junction, a tiny pile of food sits on the pavement: three oranges, a bowl of rice and one lit joss stick, left as an offering. Nobody is around. Everyone knows the rule: do not step on it, do not touch it, do not take it.`,[
  [`Bow slightly and walk around`,'',`The joss stick glows a little brighter. You don't know why that makes you smile.`,`xp+s flag:cg_respect mp+2`],
  [`Add a mandarin orange from your bag`,'',`You place it neatly with the others and bow. A cool breeze brushes your cheek, friendly and brief.`,`xp+m flag:cg_respect mp+3`,'','','item:cg_oranges'],
  [`Walk quickly by`,'',`You are not rude. Just in a hurry.`,`xp+s`]]],
['any',`The Radio in the Dark`,'📻',`From the open window of an empty flat comes the faint crackle of an old radio, playing a Mandarin song from a very long time ago. The tune is slow and sweet. A curtain flutters, though the window is closed.`,[
  [`Listen to the song until it ends`,'WIS 8 spirit',`When it ends, the radio clicks off by itself. A soft sigh, like a contented sleeper. You feel strangely at peace.`,`xp+m mp+3`,`It fades out before the end. You still feel the tune humming in your ears.`,`xp+s mp+1`],
  [`Walk on and hum along quietly`,'',`The tune follows you to the corner and gently disappears.`,`xp+s mp+1`]]]
]);

/* ======================= EVERYDAY KINDNESSES (any region) ======================= */
G.miniArch('cg_kind', [
['any',`Groceries Down the Stairs`,'🛍️',`An elderly auntie is struggling up the stairs with three heavy plastic bags of vegetables and a bottle of oil. She stops on each step and sighs. "Lift spoil again," she says, with a tired smile.`,[
  [`Offer to carry her bags`,'STR 8 endure',`You haul them up four floors, panting. At her door, she presses a packet of sweets and $2 on you. "Good boy/girl! Don't tell your mother I spoilt you."`,`xp+m +cg_sweets gold+2 flag:cg_kind`,`The bags are heavier than they look, but you manage. She gives you a pat.`,`hp-1 xp+m flag:cg_kind`],
  [`Carry just the lightest bag and walk with her`,'',`Slowly, step by step, you chat all the way. By the top you know her grandson's name.`,`xp+m flag:cg_kind`],
  [`Hold the door and smile`,'',`"Thank you," she says. A small courtesy, but it counts.`,`xp+s`]]],
['any',`The Dropped Coins`,'🪙',`At the bus stop, an old uncle drops a handful of coins, which roll in all directions across the pavement. He bends slowly, wincing at his back.`,[
  [`Help him gather the coins`,'DEX 8 craft',`You scoop up every last one, even the one under the bench. He tries to give you a coin, which you politely refuse. He gives you a sweet instead.`,`xp+m +cg_sweets flag:cg_kind`,`You miss a few, but he is grateful for the effort.`,`xp+s flag:cg_kind`],
  [`Keep one hand over the coins that are rolling away`,'',`You stop three coins from rolling into the drain. "Quick reflexes!" says the uncle.`,`xp+s flag:cg_kind`],
  [`Wait for him to finish`,'',`He eventually gets them all. You feel you could have done more.`,`xp+s`]]],
['any',`The Lonely Uncle`,'🧓',`An uncle sits alone at a kopitiam table, a cup of cold coffee in front of him, watching the children go by. He catches your eye and nods. "School holidays ah?" he says, with a gentle, hopeful smile.`,[
  [`Sit with him for five minutes and chat`,'CHA 8 persuade',`He tells you about his wife, who loved the sea, and his old job as a fisherman. When you leave, he is smiling. A lonely afternoon, a little less lonely.`,`xp+m mp+2 flag:cg_kind`,`He is shy at first, but he lights up when you ask about the old days.`,`xp+m flag:cg_kind`],
  [`Smile and say hello`,'',`"Good boy/girl," he says, quietly.`,`xp+s flag:cg_kind`],
  [`Walk by`,'',`You wave. He waves back, a little late.`,`xp+s`]]],
['any',`A Lost Kitten`,'🐈',`A tiny kitten wails from under a parked bicycle, its fur still fluffy, its eyes wide. Nobody else seems to hear it. A bus rumbles past, and the kitten freezes in terror.`,[
  [`Coax it out gently`,'WIS 8 tame',`You crouch low and make a soft "pss-pss". The kitten tumbles out into your hands, trembling. You carry it to a nearby cat-feeding volunteer, who thanks you warmly.`,`xp+m mp+2 flag:cg_kind`,`The kitten runs further under the bike. After ten patient minutes, it creeps out.`,`xp+m flag:cg_kind`],
  [`Call the cat volunteer on the notice board`,'',`A kind woman arrives in a few minutes and bundles it up. "You did the right thing," she says.`,`xp+m flag:cg_kind`],
  [`Walk away`,'',`The wailing follows you down the road.`,`xp+s mp-1`]]],
['any',`Recycling Mix-Up`,'♻️',`At the recycling bins by the void deck, a little kid is holding a bottle in one hand and a paper bag in the other, completely lost. "Which one blue? Which one yellow?" she asks, close to tears.`,[
  [`Show her how to sort them`,'INT 8 craft',`Bottles in blue, paper in yellow, tins in the other. "Ohh!" she shouts, and puts everything in the right bins. A proud recycler is born.`,`xp+m flag:cg_kind`,`You mix up one bottle, but she laughs and fixes it.`,`xp+s flag:cg_kind`],
  [`Help her carry them`,'',`Together, you tidy up the whole corner. A neighbour smiles.`,`xp+s flag:cg_kind`],
  [`Walk on`,'',`She looks at the bins for a long time.`,`xp+s`]]],
['any',`Phone Trouble`,'📱',`Ah Gong at the table next to you is trying to video-call his granddaughter but keeps tapping the wrong button, getting more and more frustrated. "These phones... very smart, but I am not," he mutters.`,[
  [`Show him how to make the video call`,'INT 8 craft',`Tap, tap, there she is! His face lights up like a lantern. "Hello, my darling!" You quietly step away. He waves at you from across the table.`,`xp+m mp+2 flag:cg_kind`,`You fumble, but eventually reach her, and the call is a success.`,`xp+s flag:cg_kind`],
  [`Write down the steps for him in big letters`,'',`He pins the paper to the fridge. He will call you a genius for a week.`,`xp+m flag:cg_kind`],
  [`Smile and pass by`,'',`You wish him luck.`,`xp+s`]]],
['any',`The Lost Wallet Card`,'💳',`On the floor of the MRT carriage lies a student concession card with a small photo of a boy in school uniform. There are no staff in sight, and the train is about to reach the next station.`,[
  [`Hand it to the station control room`,'',`The station staff thanks you and writes your name in a book. At the exit, a boy and his mother are waiting at the counter, relieved. "Thank you!"`,`xp+m flag:cg_kind gold+2`],
  [`Ask around the carriage first`,'CHA 8 persuade',`A boy raises his hand, shyly. "That's mine." He smiles with relief. You smile back.`,`xp+m flag:cg_kind`,`Nobody claims it. You hand it in at the station.`,`xp+s flag:cg_kind`],
  [`Leave it on a seat`,'',`Somebody else will surely deal with it. You feel a bit uneasy.`,`xp+s`]]],
['any',`Bird in the Corridor`,'🐦',`A little sparrow has flown into the corridor and is bumping against a window, trying to get out. It flaps, panics and hits the glass again. Somebody's nest is outside.`,[
  [`Open the window and gently guide it out`,'DEX 8 tame',`You cup your hands around it and release it into the sky. A feather floats down and lands on your shoe.`,`xp+m mp+3 flag:cg_kind`,`It flutters about, but eventually finds the open window.`,`xp+s mp+1 flag:cg_kind`],
  [`Open the window and step back`,'',`After a few minutes of silence, the sparrow zooms out. You smile.`,`xp+s flag:cg_kind`],
  [`Leave it`,'',`It will find its way out. Probably.`,`xp+s`]]],
['any',`Chair for a Friend`,'🪑',`At school, a quiet new classmate is eating alone at the end of the long canteen table. She keeps glancing around, as if looking for someone to sit beside. Nobody seems to notice.`,[
  [`Sit with her and say hello`,'CHA 8 persuade',`You ask about her old school and she opens up like a flower. By the end of recess, she has a friend. So do you.`,`xp+m mp+2 flag:cg_kind`,`She is shy, but she smiles. A start.`,`xp+m flag:cg_kind`],
  [`Wave and invite her over`,'',`She hurries over, relieved.`,`xp+s flag:cg_kind`],
  [`Eat quickly and leave`,'',`You feel a little bad all afternoon.`,`xp+s mp-1`]]],
['any',`The Noisy Neighbour`,'🔊',`From a flat above comes loud music, thumping like a drum. An elderly neighbour across the corridor, an Ah Gong with a cane, looks upset but too shy to knock. "Maybe they don't know," he says quietly.`,[
  [`Politely knock and ask them to lower the volume`,'CHA 9 persuade',`A teenager opens the door, red-faced. "Oh! Sorry sorry!" The music drops to a murmur. Ah Gong gives you a salute.`,`xp+m flag:cg_kind`,`They are not home. You leave a polite note instead. It works.`,`xp+s flag:cg_kind`],
  [`Offer Ah Gong your earphones`,'',`He laughs. "Aiyo, I'm not that desperate." But he's touched.`,`xp+s flag:cg_kind`],
  [`Mind your own business`,'',`The music thumps on for another hour.`,`xp+s`]]],
['any',`Queue Etiquette`,'🧍',`At the hawker stall, a very old auntie is waiting at the back of the queue, leaning on her walking stick. The line is long, the stall is hot, and nobody seems to notice her at all.`,[
  [`Offer her your place in the queue`,'',`"Aiyo, no need!" she says, but takes it with a grateful smile. When you reach the front, the stall uncle gives you extra egg.`,`xp+m +cg_nasi flag:cg_kind`],
  [`Offer to buy her food for her`,'CHA 8 persuade',`She tells you exactly what she wants in great detail. You carry it to her table, and she insists on paying you a little extra for your trouble.`,`xp+m gold+2 flag:cg_kind`,`She declines politely. But she is touched.`,`xp+s flag:cg_kind`],
  [`Wait in line`,'',`The queue shuffles on.`,`xp+s`]]],
['any',`Stray Dog Trouble`,'🐕',`An old, scruffy dog follows you down the street, panting. He looks hungry and a little lost, with a faded collar. A group of kids start throwing small stones at a distance.`,[
  [`Stand between the dog and the kids and say "Stop!"`,'CHA 9 intimidate',`The kids look at one another, drop the stones, and wander off. The dog sits and thumps his tail.`,`xp+m flag:cg_kind`,`They tease you, but the dog is spared.`,`xp+s flag:cg_kind`],
  [`Give the dog some water`,'',`He laps it up and licks your hand. You let the nearby animal shelter know where he is.`,`xp+s flag:cg_kind -cg_water`,'','','item:cg_water'],
  [`Walk quickly away`,'',`He stops following you at the next road.`,`xp+s`]]],
['any',`Group Project Panic`,'📚',`In the school library, a classmate is almost in tears: her group's poster has been ruined by spilt Milo, the deadline is tomorrow and everyone else has gone home.`,[
  [`Help her redraw it`,'DEX 8 craft',`Two heads, four hands, one very colourful poster. At closing time it is better than the original.`,`xp+m mp+2 flag:cg_kind`,`It is a bit messy, but readable. She is grateful.`,`xp+s flag:cg_kind`],
  [`Cheer her up with a funny story`,'CHA 8 persuade',`By the end she is laughing, which makes the redrawing so much easier.`,`xp+m flag:cg_kind`,`The joke falls flat, but she knows you care.`,`xp+s`],
  [`Say good luck and leave`,'',`Hopefully it gets done.`,`xp+s`]]]
]);

/* ======================= HAWKER & SNACK STOPS (any region) ======================= */
G.miniArch('cg_food', [
['any',`Chicken Rice`,'🍗',`The queue for the chicken rice stall is long, but the smell of steamed fragrant rice and silky chicken makes your stomach announce itself. Hainanese chicken rice is often called Singapore's unofficial national dish.`,[
  [`Buy a plate ($3)`,'',`Tender chicken, rice cooked in stock, chilli with ginger and a little cup of soup. Simple and wonderful.`,`gold-3 hp+10 mp+3 xp+s`,'','','gold:3'],
  [`Share a plate with a friend`,'',`You split it down the middle, which makes it taste even better.`,`gold-2 hp+6 mp+4 xp+s bond:cg_priya`,'','','gold:2'],
  [`Skip lunch to save money`,'',`Your stomach complains.`,`xp+s`]]],
['any',`Laksa`,'🍜',`A bowl of laksa steams on the counter: thick noodles in spicy coconut broth, topped with cockles, prawns and fishcake. The auntie hands you a spoon and a warning. "Hot, ah. Don't burn your tongue."`,[
  [`Order a bowl ($4)`,'',`Rich, creamy, spicy. Your nose runs and you could not be happier.`,`gold-4 hp+12 mp+2 xp+s`,'','','gold:4'],
  [`Ask for it less spicy`,'',`"Kid version," says the auntie, with a wink. It is still lovely.`,`gold-4 hp+10 mp+3 xp+s`,'','','gold:4'],
  [`Just smell it and go`,'',`Free, but unsatisfying.`,`xp+s`]]],
['any',`Ice Kachang`,'🍧',`On a hot day, nothing looks better than a mountain of shaved ice drizzled with colourful syrup, red beans, sweet corn, grass jelly and a spoon of evaporated milk. A bowl costs just a couple of dollars.`,[
  [`Buy a bowl ($2)`,'',`Cold, sweet, crunchy and ridiculous. Brain freeze arrives right on schedule.`,`gold-2 hp+5 mp+4 xp+s`,'','','gold:2'],
  [`Split a bowl with a friend`,'',`Two spoons, one bowl, one very happy afternoon.`,`gold-1 hp+3 mp+4 xp+s`,'','','gold:1'],
  [`Ask for a cup of plain water`,'',`The stall uncle gives you a cup, with a smile.`,`hp+2 xp+s`]]],
['any',`Roti Prata`,'🥞',`A prata man tosses and spins a ball of dough high above his head, until it is a thin, translucent sheet. Fried on a griddle until crisp and golden, it arrives with a little bowl of fish curry.`,[
  [`Order prata with curry ($3)`,'',`Crispy outside, fluffy inside, curry to dip. You tear it into pieces and eat them one by one.`,`gold-3 hp+9 mp+3 xp+s`,'','','gold:3'],
  [`Order a prata with egg ($3)`,'',`Even better. You discover that your favourite food has a favourite food.`,`gold-3 hp+10 mp+3 xp+s`,'','','gold:3'],
  [`Watch the prata man and move on`,'',`The dough flies up again. It is a performance.`,`xp+s mp+1`]]],
['any',`Satay`,'🍢',`The smoky smell of grilling satay drifts across the food centre: skewers of marinated chicken and beef turning over a charcoal fire, served with peanut sauce, ketupat and cucumber.`,[
  [`Buy ten sticks ($5)`,'',`Soft, smoky, sweet-salty. You dip, bite, repeat, until the plate is bare.`,`gold-5 hp+12 mp+3 xp+s`,'','','gold:5'],
  [`Buy five sticks ($3)`,'',`The right number for a growing kid.`,`gold-3 hp+7 mp+2 xp+s`,'','','gold:3'],
  [`Just watch the satay man fan the coals`,'',`He fans so fast his arm is a blur.`,`xp+s`]]],
['any',`Char Kway Teow`,'🥘',`A hawker uncle tosses flat rice noodles in a flaming wok with egg, cockles, bean sprouts and sweet black sauce. The wok roars, the flames leap, and the smoky "wok hei" aroma drifts out over the whole centre.`,[
  [`Order a plate ($4)`,'',`Smoky, sweet and a little greasy in the very best way.`,`gold-4 hp+11 mp+2 xp+s`,'','','gold:4'],
  [`Ask for a small portion ($3)`,'',`A kid-sized plate, just right.`,`gold-3 hp+8 mp+2 xp+s`,'','','gold:3'],
  [`Decline politely`,'',`The wok roars on.`,`xp+s`]]],
['any',`Soya Bean & You Tiao`,'🥛',`The soya bean milk stall sells cups of warm sweet soya and crispy fried dough sticks called you tiao. Old uncles dunk the sticks in their cups and say, with great authority, that it is good for you.`,[
  [`Buy a cup and a stick ($2)`,'',`Warm, sweet, crisp. You dunk like an expert.`,`gold-2 hp+7 mp+3 xp+s`,'','','gold:2'],
  [`Ask the uncle how long he has run the stall`,'CHA 8 persuade',`"Thirty-five years!" he says proudly. You listen to a long story about his father. He gives you an extra stick for free.`,`xp+m hp+4`,`"Long time," he says, and smiles.`,`xp+s`],
  [`Walk on`,'',`Some other day.`,`xp+s`]]],
['any',`Popiah`,'🌯',`At a stall, a lady spreads sweet sauce on a thin pancake and loads it with turnip, egg, beansprouts and crushed peanuts, then rolls it up tight. It looks like a very tasty spring roll in fresh pancake clothing.`,[
  [`Buy a roll ($2)`,'',`Soft, crunchy, sweet and savoury. You roll with it.`,`gold-2 hp+6 mp+2 xp+s`,'','','gold:2'],
  [`Watch her roll`,'DEX 8 craft',`You study how she makes it. You try it on a paper napkin at home later. It is a disaster. But it is a delicious disaster.`,`xp+s mp+1`,`Her hands move too quickly to follow.`,`xp+s`]]],
['any',`Chendol`,'🍨',`A bowl of chendol arrives, green rice-flour jelly, red beans, shaved ice and thick coconut milk, drizzled with dark gula melaka syrup. It looks like a swamp. It tastes like heaven.`,[
  [`Buy a bowl ($2)`,'',`Cool, creamy and deeply sweet. The green jelly slithers around your spoon.`,`gold-2 hp+5 mp+4 xp+s`,'','','gold:2'],
  [`Ask what gula melaka is`,'INT 8 lore',`"Palm sugar," says the stall uncle. "Dark, smoky, special." You learn a new word.`,`xp+m hp+3`,`He chuckles, but you do not quite catch it.`,`xp+s`]]],
['any',`Teh Tarik`,'☕',`At the drinks stall, a man pours hot milk tea from one mug to another in a long, high, foaming arc, without spilling a drop. "Teh tarik" means "pulled tea", and the pulling makes it frothy and smooth.`,[
  [`Buy a cup ($1.50, so $2)`,'',`Hot, sweet and thick. You hold the cup with both hands and sip with great seriousness.`,`gold-2 hp+3 mp+5 xp+s`,'','','gold:2'],
  [`Ask if you can try pulling`,'DEX 9 craft',`He lets you try, with a small cup. Half goes on the floor. He laughs, and gives you a refill.`,`xp+m mp+3`,`You spill all of it. He gives you a mop.`,`xp+s`],
  [`Just watch`,'',`The tea arcs through the air like a golden waterfall.`,`xp+s mp+1`]]],
['any',`Kueh Break`,'🍡',`A tray of colourful kueh sits on the counter: pale green kueh salat, pink ang ku kueh, orange ondeh-ondeh with palm-sugar bursting inside. "Kueh" are small traditional snacks and come in many shapes and colours.`,[
  [`Buy a few pieces ($2)`,'',`Chewy, sweet and fragrant with pandan. You wonder if there is any such thing as too much kueh.`,`gold-2 hp+5 mp+3 xp+s`,'','','gold:2'],
  [`Buy a small box as a gift for {guardian} ($3)`,'',`{guardian} will be delighted. You also keep one piece for yourself, for quality control.`,`gold-3 xp+m flag:cg_kind +cg_sweets`,'','','gold:3'],
  [`Just admire them`,'',`Colour, shape, smell. All of it.`,`xp+s`]]],
['any',`Yong Tau Foo`,'🍲',`At the yong tau foo stall you pick your own ingredients from the display: stuffed tofu, fishballs, bitter gourd, lady's fingers. The auntie puts them in a bowl of soup or noodles and tops them with sauce.`,[
  [`Pick six items ($4)`,'',`Soft tofu, bouncy fishballs and a broth you will remember. It is like building your own lunch.`,`gold-4 hp+10 mp+2 xp+s`,'','','gold:4'],
  [`Pick three items ($2)`,'',`A small but satisfying selection.`,`gold-2 hp+5 mp+2 xp+s`,'','','gold:2'],
  [`Skip it`,'',`Your stomach grumbles in protest.`,`xp+s`]]]
]);

/* ======================= REGIONAL LOCAL EVENTS ======================= */
const L = G.mini.cg_local;
L.push(
/* ---- East Coast ---- */
['cg_eastcoast',`Bicycle Rental`,'🚲',`At East Coast Park, a bicycle rental shop is full of rows of bikes: tandem bikes, kids' bikes, bikes with baskets. East Coast Park is about fifteen kilometres of beach, trails and food stalls, built on land reclaimed from the sea. An uncle in a visor hands you a helmet.`,[
  [`Rent a bike for an hour ($4)`,'',`The sea breeze, the sound of bells and a pleasant ten-minute race with a seagull. It feels like flying.`,`gold-4 mp+4 xp+m`,'','','gold:4'],
  [`Ask the uncle for the best route`,'CHA 8 persuade',`"Go left until you see the lagoon," he says. "Don't go right at night. Strange things there." He taps his nose.`,`xp+m flag:cg_knows_dusk`,`He points in vague directions and laughs.`,`xp+s`],
  [`Walk along the beach instead`,'',`Sand between your toes and a salty breeze. It is lovely too.`,`xp+s mp+2`]]],
['cg_eastcoast',`The Mudskippers`,'🐟',`On a stretch of mangrove coast near Pasir Ris Park, small fish with bulging eyes hop across the mud on their fins, like tiny frogs. Fiddler crabs wave their one big claw at the tide. A park volunteer is crouched beside the boardwalk with a notebook.`,[
  [`Watch quietly and take notes`,'WIS 8 survive',`The volunteer shows you how mudskippers breathe through their skin. Mangroves protect the coast from waves, and are home to many animals. You are surprised how much there is to see.`,`xp+m mp+3`,`They hop away before you can count them.`,`xp+s mp+1`],
  [`Ask about the old kampung that was here`,'CHA 8 persuade',`"Before the park, this coast had fishing kelongs and kampung houses," she says. "Some old fishermen still visit."`,`xp+m flag:cg_knows_peranakan`.replace('flag:cg_knows_peranakan','flag:cg_lesson_ghost'),`She is busy counting crabs.`,`xp+s`],
  [`Stay on the boardwalk and keep going`,'',`Stepping on the mud is not allowed. The plants are delicate.`,`xp+s`]]],
['cg_eastcoast',`Kite Flyers`,'🪁',`On a windy stretch of lawn at the park, a crowd of kids and dads are flying kites in the shapes of dragons, butterflies and a giant octopus. A boy is struggling, his string in a tangle.`,[
  [`Help untangle his kite string`,'DEX 8 craft',`Pick, pull, tug. In five minutes, the dragon kite is soaring, and the boy's grin is wider than the sky.`,`xp+m flag:cg_kind`,`The knot defeats you both, but the dad rescues the day.`,`xp+s flag:cg_kind`],
  [`Watch the kites and enjoy the breeze`,'',`Colours dance against the clouds. For a moment you forget everything.`,`xp+s mp+3`]]],
['cg_eastcoast',`The Seafood Centre`,'🦀',`At the East Coast Lagoon Food Village, the air smells of charcoal, satay, sambal stingray and sugarcane juice. Families eat at long tables, with the sea breeze rattling the napkins. A stallholder waves you over.`,[
  [`Order a plate of sambal stingray to share ($5)`,'',`Spicy, soft, wrapped in banana leaf. The chilli sneaks up on you.`,`gold-5 hp+10 mp+2 xp+s`,'','','gold:5'],
  [`Order fresh sugarcane juice ($2)`,'',`Pressed in front of you, sweet and grassy. A good drink for a hot day.`,`gold-2 hp+4 mp+4 xp+s`,'','','gold:2'],
  [`Ask the stallholder about the old days`,'CHA 8 persuade',`"My father was a fisherman at Changi," he says. "He always said not to go near the casuarinas at dusk. Why? He never said."`,`xp+m flag:cg_knows_dusk`,`He is too busy with a pan of crab.`,`xp+s`]]],
['cg_eastcoast',`Joo Chiat Shophouses`,'🏘️',`The shophouses along Joo Chiat Road are painted in sweet colours: peach, mint, lilac and yellow, with carved tiles and wooden shutters. This area is known for Peranakan culture, descendants of early Chinese settlers who blended Chinese and Malay traditions.`,[
  [`Look closely at the decorated tiles`,'INT 8 lore',`Each tile has birds, flowers and geometric patterns. A shopkeeper tells you they were imported from Europe a hundred years ago.`,`xp+m`,`They are lovely. You take a photo.`,`xp+s`],
  [`Buy a small piece of kueh ($2)`,'',`Pandan and coconut. You can taste the pride in every bite.`,`gold-2 hp+4 mp+3 xp+s`,'','','gold:2'],
  [`Ask about the old families of the east`,'CHA 9 persuade',`"The Peranakan families loved big houses by the sea," says the shopkeeper. "And they never forgot to leave a plate for guests."`,`xp+m flag:cg_knows_peranakan`,`She is busy with customers.`,`xp+s`]]],
['cg_eastcoast',`Geylang Serai Market`,'🧺',`At the Geylang Serai Market, stalls overflow with spices, sambal, fresh coconut and rows of colourful kuih. A woman fans a tray of lemang, glutinous rice cooked in bamboo. During Ramadan and before Hari Raya, a bright bazaar fills the whole area.`,[
  [`Try some kuih ($2)`,'',`Sweet, soft, chewy. You try five kinds and cannot choose a favourite.`,`gold-2 hp+5 mp+3 xp+s`,'','','gold:2'],
  [`Ask about the Malay seafaring songs`,'CHA 8 persuade',`A stallholder hums "Nenek Moyangku Orang Pelaut". Everyone nearby joins in. You clap along, happily.`,`xp+m mp+3 flag:cg_sailor_song`,`She smiles and says "Go to the Malay Heritage Centre."`,`xp+s`],
  [`Watch the lemang being made`,'',`A lot of smoke, a lot of patience.`,`xp+s mp+1`]]],
['cg_eastcoast',`Bedok Jetty`,'🎣',`At the end of the long Bedok Jetty, a row of fishermen with long rods sit patiently, drinking kopi from flasks. The sea is wide and shimmering, and a container ship slides across the horizon like a floating mountain.`,[
  [`Chat with the fishermen`,'CHA 8 persuade',`"Quiet today," says one. "But we catch more stories than fish." He tells you about the time his net came back holding a small wooden boat, which he put back at once.`,`xp+m flag:cg_lesson_ghost`,`They nod politely and carry on fishing.`,`xp+s`],
  [`Look through a fisherman's binoculars`,'',`A distant freighter, three seagulls and, far across the water, a long grey coast.`,`xp+s mp+2`]]],
/* ---- Pulau Ubin ---- */
['cg_ubin',`The Bumboat Ride`,'⛴️',`The boatman at Changi Point shouts "Twelve! Twelve!" and waves passengers aboard. The bumboat bobs and puffs across the water to Pulau Ubin, an island of old villages, forest and quarries just a few minutes from Singapore's main island. Ubin means "granite" in Malay.`,[
  [`Sit by the edge and trail your hand in the water`,'',`Warm and green. The breeze smells of salt and diesel.`,`xp+s mp+3`],
  [`Chat with the boatman`,'CHA 8 persuade',`"Forty years on this route," he says. "The sea does not change. The people do."`,`xp+m`,`He is busy counting heads.`,`xp+s`],
  [`Count the other passengers and check the boat has twelve`,'',`Twelve exactly. You feel useful and important.`,`xp+s`]]],
['cg_ubin',`Wild Boar!`,'🐗',`A wild boar trots out of the bushes beside the cycling path and stops in front of you, snorting. Wild boars live on Ubin and are generally shy. This one has piglets behind her, and an expression.`,[
  [`Stay very still and let her pass`,'WIS 8 tame',`She sniffs, grunts, and leads her piglets across. You breathe again.`,`xp+m`,`She stares for a very long minute, then wanders off, bored.`,`xp+s`],
  [`Back away slowly`,'',`One step, two, three. The boar loses interest.`,`xp+s`],
  [`Wave your arms and shout`,'',`This is a bad idea. She huffs and charges a short distance. You scramble up on a bench, and she goes back to snuffling.`,`hp-2 mp-2 xp+s`]]],
['cg_ubin',`Chek Jawa Boardwalk`,'🌊',`The boardwalk at Chek Jawa runs over a wetland full of life: sea grass, mangroves, starfish, crabs, hornbills. You can see sea stars and sand dollars at low tide. A tall tower rises above the trees.`,[
  [`Look for sea stars in the tidal pools`,'WIS 8 survive',`You spot a red one, a spiky one and a very shy sea cucumber. A ranger smiles. "Look, don't touch," she reminds you.`,`xp+m mp+3`,`You see seaweed, mostly. But it is beautiful seaweed.`,`xp+s mp+1`],
  [`Climb the tower and look out`,'CON 8 endure',`A view over the whole coast, all the way to Malaysia on the horizon. A hornbill glides by.`,`xp+m mp+3`,`The stairs are many. The view is worth it.`,`hp-1 xp+m`],
  [`Sit on a bench and listen`,'',`Bird calls, waves and frogs. A peaceful island chorus.`,`xp+s mp+3`]]],
['cg_ubin',`The Old Granite Quarry`,'⛏️',`A deep, turquoise lake fills an old granite quarry, ringed with sheer grey walls. For many years, workers cut granite here to build roads and buildings across Singapore. Now the pit is silent and filled with rainwater.`,[
  [`Read the sign about the quarry`,'INT 8 lore',`Ubin means granite: the island's stone helped build early Singapore. The quarry closed decades ago.`,`xp+m`,`You read the first sentence and look at the lake instead.`,`xp+s`],
  [`Skim a stone across the water`,'DEX 9 dodge',`Four skips! A nearby kid cheers.`,`xp+s mp+2`,`Plop. Straight down.`,`xp+s`],
  [`Stay well back from the edge`,'',`Safe is best near sheer drops.`,`xp+s`]]],
['cg_ubin',`Kampung Aunty's Kitchen`,'🏠',`An old wooden house on stilts stands among coconut palms, with a charcoal stove outside. An aunty in a faded sarong is frying banana fritters, humming. "Come, come," she calls. "Eat while it's hot."`,[
  [`Accept a fritter`,'',`Crispy outside, soft inside, sweet banana. "Good, ah?" she says. You nod with your mouth full.`,`hp+6 mp+3 xp+s`],
  [`Ask her how long she has lived here`,'CHA 8 persuade',`"Since I was a baby," she says. "My mother cooked on this very stove. We had no electricity then, only oil lamps. Do you know, we hung lanterns in the windows so the fishermen could find their way home."`,`xp+m flag:cg_lesson_ghost`,`She is deep in her frying.`,`xp+s`],
  [`Help her carry water`,'STR 8 endure',`Two buckets, ten trips. She tucks a bag of fritters in your pocket when you leave.`,`xp+m +cg_sweets flag:cg_kind`,`You spill half. She laughs.`,`xp+s`]]],
['cg_ubin',`Mountain Bike Trail`,'🚵',`A bumpy trail winds through the forest, past old rubber trees and abandoned fish ponds. Rented bicycles whiz past with rattling bells. A signpost reads "Beware of falling coconuts".`,[
  [`Cycle carefully along the trail`,'DEX 8 dodge',`Bumps, puddles, a very close call with a chicken. You emerge muddy, happy and breathless.`,`xp+m mp+3`,`You wobble, wobble, and land in a bush. Everyone laughs, including you.`,`hp-1 xp+s`],
  [`Walk and enjoy the birds`,'',`Eleven different calls. You can name two.`,`xp+s mp+3`],
  [`Rest in the shade with a drink`,'',`Ahh. A shaded bench, a cold bottle, and a sleepy lizard.`,`hp+3 mp+3 xp+s`]]],
['cg_ubin',`The Temple by the Sea`,'🛕',`A tiny temple with a red roof sits at the edge of the water, with joss sticks smouldering in front. A caretaker sweeps the steps. Local fishermen have long prayed here for a safe journey and a good catch.`,[
  [`Bow respectfully and stand quietly`,'',`The caretaker nods approval. A peaceful moment by the sea.`,`xp+s mp+3 flag:cg_respect`],
  [`Ask the caretaker about spirits of the sea`,'WIS 8 spirit',`"The sea takes and gives," he says. "A lost soul only wants to be remembered. Light a candle, speak kindly, and they rest."`,`xp+m flag:cg_lesson_ghost mp+2`,`He smiles but says only "Be respectful."`,`xp+s`]]],
/* ---- Hungry Ghost Festival ---- */
['cg_festival',`The Giant Paper House`,'🏠',`In front of a neighbourhood temple stands a huge paper house, painted in bright colours, with tiny paper furniture, paper servants and a paper car with paper wheels. It will be burned during the festival as an offering to relatives who have passed away.`,[
  [`Look closely at all the detailed paper things`,'INT 8 lore',`A paper phone. A paper TV. A tiny paper bowl of rice. People wish their departed relatives to have everything they need, even in modern times.`,`xp+m`,`It is dazzling. You are not sure what half of it is.`,`xp+s`],
  [`Ask a helper how long it takes to make`,'CHA 8 persuade',`"Three weeks," she says. "Every piece is handmade. Love, in paper." You smile.`,`xp+m flag:cg_lesson_ghost`,`She is very busy gluing a tiny paper roof.`,`xp+s`]]],
['cg_festival',`Offering Table`,'🍊',`Along the road, neighbours have set out long tables with incense, oranges, biscuits, cans of drinks, rice and bowls of steaming food. Aunties arrange the dishes with care. "For the guests," one says, "so no one goes hungry."`,[
  [`Help an auntie arrange the oranges`,'DEX 8 craft',`You make a pyramid of oranges, quite neat. "Smart child!" she says, and tucks a mandarin into your hand.`,`xp+m +cg_oranges flag:cg_respect`,`The oranges roll everywhere. She laughs and rearranges them for you.`,`xp+s flag:cg_respect`],
  [`Stand quietly and watch the ceremony`,'',`The smoke curls upwards. Everyone speaks softly. It feels like a very large hush.`,`xp+s mp+2 flag:cg_respect`]]],
['cg_festival',`Getai Rehearsal`,'🎤',`On a half-built stage in a carpark, a singer in a sequinned gown rehearses for the evening's getai, a loud, cheerful live show held during the seventh month. Her backing band plays energetic, cheerful songs. The first row of seats is already marked "reserved".`,[
  [`Watch from the back and clap along`,'',`She waves at you, grinning. The music is bright and brash and warm. It makes the dark feel friendly.`,`xp+s mp+4`],
  [`Ask why the front row is empty`,'CHA 8 persuade',`"For the invisible guests," says a stagehand. "We leave seats for them. A little courtesy goes a long way."`,`xp+m flag:cg_lesson_ghost`,`He is dragging speakers and cannot talk.`,`xp+s`],
  [`Help carry chairs`,'STR 8 endure',`You stack forty folding chairs. The organiser gives you a free drink and a very big thank you.`,`xp+m +cg_isotonic flag:cg_kind`,`You get through thirty, then get a cramp. Still, you helped.`,`hp-1 xp+s`]]],
['cg_festival',`The Festival Auction`,'🔨',`At the temple courtyard, an auction is in full swing. Neighbours bid for lucky items: a pot of lilies, a big red lantern, a fancy teapot. The money goes to charity. An auctioneer in a loud shirt shouts "Going once! Going twice!"`,[
  [`Bid $3 on a small lantern`,'CHA 8 persuade',`"Sold! To the young one!" you win, cheered by the whole crowd. A small lantern for a good cause.`,`gold-3 +cg_glowband xp+m flag:cg_kind`,`Somebody outbids you at the last second. Next time.`,`xp+s`,'gold:3'],
  [`Just watch and cheer`,'',`A big bidding war breaks out over a plant. Nobody wins, except the charity.`,`xp+s mp+2`],
  [`Donate $2 straight to the box`,'',`The organiser gives you a thumbs-up.`,`gold-2 xp+m flag:cg_kind`,'','','gold:2']]],
['cg_festival',`Burning Joss Paper`,'🔥',`A temple volunteer feeds gold paper ingots into a tall metal burner. Sparks rise like orange fireflies into the dark. Everyone stands back, because fire is not a toy, and the volunteers keep a watchful eye on the safety of the crowd.`,[
  [`Stand well back and watch`,'',`The flames roar, the smoke rises, and your face glows. A very old tradition, done in a very safe way.`,`xp+s flag:cg_respect mp+2`],
  [`Ask if you can help fold paper for the next batch`,'DEX 8 craft',`The volunteer shows you how to fold a perfect ingot. You make twelve, including one that looks like a boat.`,`xp+m flag:cg_paperboat_made flag:cg_respect`,`Your ingots look like squashed envelopes, but she smiles anyway.`,`xp+s`]]],
['cg_festival',`The Taboo Quiz`,'🤫',`A group of cousins at a coffee shop swap rules of the seventh month. "Don't swim at night." "Don't pick up money on the road." "Don't hang your clothes outside after dark." "Don't whistle at night." Each says it with a different degree of seriousness.`,[
  [`Ask them which they actually believe`,'CHA 8 persuade',`"All of them," says one cousin. "None of them," says another. "I follow them anyway. It's manners," says the third. You nod.`,`xp+m flag:cg_lesson_ghost`,`They start arguing, and you quietly slip away.`,`xp+s`],
  [`Share a rule your ${'{guardian}'} taught you`,'',`They nod gravely. Everyone's grandparent has the same rule.`,`xp+s mp+2`]]],
['cg_festival',`Night Procession`,'🏮',`A procession of neighbours walks slowly along the road at dusk, carrying paper lanterns and incense sticks, led by a man beating a small drum. It is quiet and solemn, yet somehow friendly. Children carry tiny red lanterns.`,[
  [`Join the end of the procession`,'',`Step by step, lantern by lantern, you walk along with the crowd. It is a warm and kindly kind of spooky.`,`xp+m mp+4 flag:cg_respect`],
  [`Watch from the pavement`,'',`The lights flow past. A small child waves at you, and you wave back.`,`xp+s mp+2`],
  [`Take a photo`,'DEX 8 craft',`A lovely photo of tiny lights in the dark. You decide not to use the flash.`,`xp+s mp+1`,`It's blurry. But the feeling is clear.`,`xp+s`]]],
/* ---- Changi in the 1950s (dream/flashback) ---- */
['cg_kampong',`The Fishing Net`,'🎣',`In the dream, a fisherman on the beach is mending a net, humming. Behind him, small boats are pulled up on the sand, their red sails tied down. The sea is wide and unhurried. Casuarina trees whisper overhead.`,[
  [`Watch him work`,'',`His fingers move faster than your eyes. He nods to you, as if you were a familiar neighbour. The dream feels very gentle.`,`xp+s mp+2`],
  [`Ask him about the boats`,'CHA 8 persuade',`"Wooden boats with red sails," he says. "The children make small copies. A boat is how you come home."`,`xp+m flag:cg_lesson_ghost`,`He smiles and goes on mending.`,`xp+s`],
  [`Help him hold the net`,'',`You hold one edge. He thanks you. It feels good to be useful, even in a dream.`,`xp+s flag:cg_kind`]]],
['cg_kampong',`The Kampung Well`,'🪣',`In the dream, women gather around a stone well in the village, filling buckets, chatting in Malay and Hokkien and Teochew. Children chase chickens. The sun is warm and low. It smells of wood smoke and frying shallots.`,[
  [`Join the children chasing chickens`,'DEX 8 dodge',`You run, laugh and scatter feathers. A very serious rooster stares you down.`,`xp+m mp+3`,`The chickens win. You flop on the grass, giggling.`,`xp+s mp+2`],
  [`Listen to the women's chatter`,'WIS 8 spirit',`They talk about a lady called Madam Soo, who always leaves a lantern in her window "so the boats know the way".`,`xp+m flag:cg_knows_names`,`The words wash past you in three languages.`,`xp+s`],
  [`Help carry a bucket`,'',`A cheerful girl in pigtails smiles at you. Somehow you know her name before she says it: Mei.`,`xp+m flag:cg_knows_names flag:cg_dream_mei`]]],
['cg_kampong',`The Sunday Market`,'🛒',`The dream shifts to a small kampung market: stalls of fish, fruit, vegetables and sweets. Traders call out prices in a mix of dialects. A boy sells paper boats from a basket.`,[
  [`Buy a paper boat`,'',`He gives you a red one. "For good luck at sea," he says. It dissolves into mist when you wake, but you remember how to fold it.`,`xp+m flag:cg_paperboat_made`],
  [`Watch the traders`,'',`Fish flop, scales glitter, baskets swing.`,`xp+s mp+2`],
  [`Ask about the lady who lives by the sea`,'CHA 8 persuade',`"Madam Soo? She makes the best kueh in the east," says a vendor. "And she never forgets a guest."`,`xp+m flag:cg_knows_peranakan`,`The vendor is busy weighing fish.`,`xp+s`]]],
['cg_kampong',`The Beach Picnic`,'🧺',`In the dream, a family picnic spreads out on the sand: a mat, a pot of rice, a plate of kueh and a pitcher of sweet tea. A little girl is flying a paper kite, and her mother is sitting back, smiling, in a pale blouse. This is the lady, years before.`,[
  [`Sit nearby and watch`,'',`She laughs easily, and her eyes are bright. It is hard to imagine she will ever be sad.`,`xp+m mp+2 flag:cg_dream_mei`],
  [`Wave at the little girl`,'',`Mei waves with her whole arm and shouts hello. For a moment you feel as if you belong.`,`xp+m mp+3 flag:cg_dream_mei`],
  [`Look at the kueh`,'',`Pastel colours, fragrant pandan. You wake, a little later, with the smell still in your nose.`,`xp+s flag:cg_knows_peranakan`]]],
['cg_kampong',`The Toy Boat Maker`,'⛵',`An old carpenter on the beach carves small wooden boats with a pocket knife, whittling the hulls and sewing tiny red sails from scraps of cloth. A little girl waits for hers, eyes wide.`,[
  [`Watch how he carves the hull`,'INT 8 craft',`Curves, grooves, a little keel. He lets you hold the finished one. You memorise every detail.`,`xp+m flag:cg_replica_made`,`He is too fast to follow, but you remember the shape.`,`xp+s`],
  [`Ask him to carve a name on the hull`,'',`"M-E-I," he says, as he carves the three letters. "Her father asked for this one."`,`xp+m flag:cg_knows_names`],
  [`Sit with the little girl and wait`,'',`She sits beside you. "My boat is going to be the fastest," she whispers.`,`xp+s mp+2 flag:cg_dream_mei`]]],
['cg_kampong',`Evening Lanterns`,'🏮',`At dusk, in the dream, a woman lights a little lantern in the window of a white house by the sea. "So the boats know where to come home," she explains to a small girl, who holds her mother's hand and nods very seriously.`,[
  [`Stay and watch the lantern`,'',`It glows steady and warm. You feel something big and quiet settle inside you: a mother's promise.`,`xp+m mp+4 flag:cg_dream_mei`],
  [`Hum the lullaby`,'',`The woman glances up, as if she can hear you. She smiles, then goes back to the window.`,`xp+m mp+3 flag:cg_lullaby`,'','','flag:cg_lullaby'],
  [`Wake yourself up`,'',`You blink at your ceiling. The lantern's glow lingers behind your eyelids.`,`xp+s`]]],
/* ---- Old Singapore ---- */
['cg_oldcity',`The Merlion Statue`,'🦁',`By the river, the Merlion, half lion, half fish, spouts water into the bay. The Merlion was designed in 1964 as a logo for tourism, and today it is one of Singapore's best-known symbols. Tourists queue to take photos in front of it.`,[
  [`Take a silly photo`,'DEX 8 craft',`You pose with your mouth open under the spout. It is perfectly timed. A tourist laughs.`,`xp+m mp+3`,`Splash! You get a mouthful of Merlion water, which is only partly an accident.`,`xp+s mp+2`],
  [`Read the plaque about its origin`,'INT 8 lore',`A lion for Singapura, "lion city", and a fish for the island's early days as a fishing village called Temasek.`,`xp+m`,`The plaque is crowded with tourists. You wave at the Merlion.`,`xp+s`]]],
['cg_oldcity',`Singapore River`,'🛶',`The Singapore River winds past restored shophouses and modern towers. Once it was the busiest trading route in Singapore, crowded with bumboats and warehouses. Today you can ride a river taxi along its banks.`,[
  [`Walk along the riverside and look at the old warehouses`,'',`Rows of colourful shophouses with their shutters open. You imagine the river full of boats.`,`xp+m mp+2`],
  [`Ride the river taxi ($4)`,'',`You glide past old bridges and glittering towers. It is cool, quiet and wonderfully slow.`,`gold-4 xp+m mp+4`,'','','gold:4'],
  [`Spot the statue of the Raffles landing`,'INT 8 lore',`Sir Stamford Raffles landed here in 1819, and the modern port began. A plaque tells the story in short paragraphs.`,`xp+m`,`The statue is white and shiny, and a pigeon sits on its head.`,`xp+s`]]],
['cg_oldcity',`Fort Canning Park`,'🌳',`Fort Canning is a green hill in the middle of the city. In the old days, it was the site of early Malay kings, and later of a British fort. Under the hill is the Battle Box, a secret bunker from the Second World War. Spice plants grow in the old Spice Garden.`,[
  [`Smell the spice plants`,'',`Nutmeg, clove, pepper, lemongrass. A guide tells you that spices once made Southeast Asia very famous.`,`xp+m mp+3`],
  [`Walk to the top for the view`,'CON 8 endure',`The hill is steep, but the view is lovely: roofs, towers, trees and the glittering bay.`,`xp+m`,`You get halfway and rest on a bench, which is a very sensible thing to do.`,`xp+s`],
  [`Ask a guide about the Battle Box`,'CHA 8 persuade',`"Built for World War Two," she says. "It tells the story of Singapore's fall in 1942. A serious place."`,`xp+m`,`The guide says to come back on a tour day.`,`xp+s`]]],
['cg_oldcity',`The National Museum`,'🏛️',`The National Museum of Singapore is a grand white building with a glass dome, the oldest museum in Singapore. Its galleries tell the story of the island from ancient times, through the Japanese Occupation, to independence in 1965. It is cool and hushed inside.`,[
  [`Join a guided tour`,'WIS 8 survive',`The guide shows you a kampung diorama, a 1960s sewing machine and an old school desk. You are struck by how small things tell big stories.`,`xp+m mp+2 flag:cg_museum`,`You get a bit lost in the crowd but still learn a lot.`,`xp+s flag:cg_museum`],
  [`Look at the old photographs`,'INT 8 lore',`Black-and-white pictures of kampung houses, fishermen and children playing in the sand. One shows a white house with a veranda.`,`xp+m flag:cg_museum flag:cg_knows_names`,`They are fascinating. You can't name most of them.`,`xp+s flag:cg_museum`]]],
['cg_oldcity',`The Peranakan Museum Lane`,'🍵',`A small museum displays beaded slippers, porcelain teapots and elaborate wedding costumes. A guide in a kebaya explains that a Peranakan family always welcomed guests with kueh and sweet tea, as a way of showing care.`,[
  [`Listen to her stories`,'WIS 8 spirit',`"A guest is a blessing," she says. "Even a guest from far away, or from long ago." She smiles at you in a way that makes you wonder.`,`xp+m flag:cg_knows_peranakan`,`She is warm and welcoming, but you miss half the words.`,`xp+s`],
  [`Look at the beaded slippers`,'',`Tiny beads, thousands of them, in the shape of flowers.`,`xp+s`]]],
/* ---- Nature trails ---- */
['cg_nature',`The TreeTop Walk`,'🌉',`High above the forest floor, a suspension bridge at MacRitchie sways gently. The TreeTop Walk is about 250 metres long and 25 metres above the ground. Below you, monkeys jump through branches. The only sound is the rustle of leaves.`,[
  [`Walk across steadily`,'WIS 8 resist',`Step by step, hand on the rail, you reach the middle and stop. It's the most peaceful spot you've ever stood in.`,`xp+m mp+4`,`The bridge sways a bit, and you hold on for a minute. Then you carry on.`,`xp+s mp+1`],
  [`Wait for a monkey to pass`,'',`A long-tailed macaque grabs a branch and swings by, staring at you, unbothered.`,`xp+s mp+2`],
  [`Look down at the forest floor`,'',`Shadows, ferns and a very small lizard. A world of its own.`,`xp+s`]]],
['cg_nature',`Henderson Waves`,'🌊',`Henderson Waves is a wavy wooden walkway that curves above a road, high in the air. It is Singapore's highest pedestrian bridge, and its curved ribs form quiet little shelters where you can sit and watch the sunset.`,[
  [`Sit in one of the curved nooks and breathe`,'',`The city twinkles below. You breathe in and breathe out and feel more steady.`,`xp+m mp+5`],
  [`Walk the whole bridge`,'CON 8 endure',`It is a long, gentle slope. At the top, you stand and look at the sky for a long time.`,`xp+m mp+3`,`You get tired and have a rest. It's fine.`,`hp-1 xp+s`],
  [`Take a photo of the sunset`,'DEX 8 craft',`Orange, pink, purple, all at once. You keep that photo forever.`,`xp+s mp+2`,`It is darker than you hoped. But you remember the colour.`,`xp+s`]]],
['cg_nature',`Bukit Timah Hill`,'⛰️',`Bukit Timah Hill is the highest natural point in Singapore, at about 164 metres. It is covered in old, tall rainforest, and its trails are shaded and steep. Long-tailed macaques watch hikers with the quiet confidence of landlords.`,[
  [`Climb to the top`,'STR 9 endure',`Steep, sweaty, worth it. At the top, you stand under a tall trig marker and grin. You are on the highest natural hill in Singapore!`,`xp+l mp+3 hp-1`,`You make it halfway, drink some water and enjoy the trees. It's still a good hike.`,`xp+m hp-1`],
  [`Keep your food hidden from the monkeys`,'WIS 8 survive',`A macaque eyes your bag. You smile, pat it and walk on. It goes back to scratching.`,`xp+m`,`A monkey snatches your biscuit and sits in a tree, eating it. Cheeky.`,`xp+s`],
  [`Take the shorter trail`,'',`A gentler walk, with lots of ferns and fewer hills.`,`xp+s mp+2`]]],
['cg_nature',`Night Walk in the Forest`,'🔦',`On a guided night walk, a ranger leads a small group into the dark forest, torches pointed at the ground. Frogs croak, fireflies blink and something large rustles in the leaves. "Stay together," the ranger whispers.`,[
  [`Stay close to the ranger and listen`,'WIS 8 survive',`She points out a sleeping bird, a spider, a gleaming snail. The forest at night is a whole other world.`,`xp+m mp+3`,`It is dark, and you stay close. It is still interesting.`,`xp+s mp+1`],
  [`Turn your torch off for ten seconds`,'WIS 9 resist',`Pitch black. The forest sounds enormous. Then your eyes adjust and the stars appear through the leaves. You are not scared at all.`,`xp+m mp+4`,`Pitch black. You count to four and switch it back on.`,`xp+s`],
  [`Hold your friend's hand`,'',`Two hands are better than one.`,`xp+s mp+3`,'','','anyally']]],
['cg_nature',`The Bird Hide`,'🦅',`A wooden bird hide overlooks a pond. Birdwatchers sit in silence with long lenses. A kingfisher, a heron and a white-bellied sea eagle glide through. A man in a khaki vest whispers: "Don't speak. Just look."`,[
  [`Sit quietly and look`,'WIS 8 survive',`A kingfisher plunges into the water and surfaces with a silver fish. Everyone holds their breath, then smiles.`,`xp+m mp+3`,`You see a pigeon. A nice one.`,`xp+s mp+1`],
  [`Ask about the biggest bird`,'CHA 8 persuade',`"That's a sea eagle," he whispers. "It nests here every year. It is a sign the ecosystem is healthy."`,`xp+m`,`He puts a finger to his lips.`,`xp+s`]]],
['cg_nature',`Southern Ridges Walk`,'🌿',`A ribbon of green trails, bridges and parks links hills along the south of Singapore. Along the path, boards tell you about the plants and animals. A guide points out a flying lemur's resting tree.`,[
  [`Walk and read all the signs`,'INT 8 lore',`Plants for medicine, plants for dye, plants for tea. The forest is a pharmacy.`,`xp+m mp+2`,`You read half and enjoy the rest.`,`xp+s mp+2`],
  [`Walk and look for animals`,'WIS 8 survive',`Squirrels, a very large butterfly and a monitor lizard. Pure luck, and sharp eyes.`,`xp+m mp+2`,`You see a lot of leaves.`,`xp+s`]]]
);

/* ======================= TRIVIA (about 100 Singapore facts) ======================= */
// [filter, question, [correct, wrong, wrong], fact]
const TR = [
['cg_tampines',`What is the name of the big community building in Tampines that holds a library, hawker centre and sports facilities?`,[`Our Tampines Hub`,`Tampines Palace`,`Tampines Tower`],`Our Tampines Hub opened in 2017 and puts many services under one roof.`],
['cg_tampines',`The name "Tampines" is thought to come from a kind of what?`,[`A tree (tempinis)`,`A bird`,`A fruit`],`The tempinis tree once grew in the area.`],
['cg_tampines',`Tampines MRT station is an interchange for which two lines?`,[`East-West and Downtown`,`North-South and Circle`,`Thomson-East Coast and North East`],`It is a busy meeting point in the east.`],
['cg_tampines',`What does HDB stand for?`,[`Housing and Development Board`,`Home and Dwelling Bureau`,`House Design Bureau`],`HDB flats are home to roughly four in five Singaporeans.`],
['cg_tampines',`What is the ground floor of an HDB block, an open space for events and chatting, called?`,[`The void deck`,`The empty lobby`,`The sky terrace`],`Void decks are used for weddings, funerals, festivals and games of chess.`],
['cg_tampines',`In Singapore, a "kopitiam" is a traditional what?`,[`Coffee shop`,`Bookshop`,`Barber shop`],`"Kopi" is Malay for coffee and "tiam" is Hokkien for shop.`],
['cg_tampines',`Which of these is NOT an official language of Singapore?`,[`Hokkien`,`Tamil`,`Malay`],`The four official languages are English, Mandarin, Malay and Tamil.`],
['cg_tampines',`Which is the "national language" of Singapore?`,[`Malay`,`Mandarin`,`English`],`Malay is the national language, used in the national anthem, "Majulah Singapura".`],
['cg_tampines',`The Singapore flag has red and white. What do the colours stand for?`,[`Universal brotherhood and purity`,`Sun and sea`,`Fire and snow`],`The crescent stands for a young, rising nation, and the five stars stand for democracy, peace, progress, justice and equality.`],
['cg_tampines',`When is Singapore's National Day?`,[`9 August`,`1 January`,`15 September`],`Singapore became independent on 9 August 1965.`],
['cg_tampines',`What do you tap on the bus and MRT gantries to pay your fare?`,[`A transport card`,`A gold coin`,`A paper ticket`],`Cards make it quick and easy to hop on and off.`],
['cg_tampines',`Hawker culture in Singapore was recognised by which organisation in 2020?`,[`UNESCO`,`FIFA`,`The Olympics`],`It was added to UNESCO's list of intangible cultural heritage.`],
['cg_changi',`What famous plant-themed building near Changi Airport has a 40-metre indoor waterfall?`,[`Jewel Changi Airport`,`The Botanic Pyramid`,`Waterfall Mall`],`Jewel opened in 2019 and holds the Rain Vortex.`],
['cg_changi',`What can you take from Changi Point to reach Pulau Ubin?`,[`A bumboat`,`A cable car`,`A monorail`],`Small wooden boats carry twelve passengers at a time.`],
['cg_changi',`The tree after which Changi is thought to be named is...`,[`The chengal`,`The mango`,`The durian`],`Chengal is a hardwood tree.`],
['cg_changi',`Which decade did Changi Airport open?`,[`1980s`,`1950s`,`2000s`],`It opened in 1981 and has been named the world's best airport many times.`],
['cg_changi',`The Changi Chapel and Museum remembers which period in history?`,[`The Second World War`,`The ancient kings`,`The space race`],`It tells the story of the Japanese Occupation of Singapore, from 1942 to 1945.`],
['cg_changi',`Which tree is found all along Changi Beach, with needle-like leaves that whisper in the wind?`,[`Casuarina`,`Banyan`,`Frangipani`],`Casuarinas are well suited to sandy seaside soil.`],
['cg_changi',`Which popular dish is Changi Village Hawker Centre especially known for?`,[`Nasi lemak`,`Pizza`,`Sushi`],`Many families visit just for the crispy chicken wing and sambal.`],
['cg_changi',`What does the Malay word "pulau" mean?`,[`Island`,`Mountain`,`River`],`Pulau Ubin means "Granite Island".`],
['cg_eastcoast',`East Coast Park was built on land that was...`,[`Reclaimed from the sea`,`A mountain`,`A swamp forest`],`Reclamation added land along Singapore's coast over many years.`],
['cg_eastcoast',`Peranakan culture mixes Chinese traditions with which other culture?`,[`Malay`,`Greek`,`Mongolian`],`Peranakan food, clothes and language blend both.`],
['cg_eastcoast',`What are mudskippers?`,[`Fish that can walk on mud`,`Frogs that live in trees`,`Birds that swim`],`They breathe partly through their skin.`],
['cg_eastcoast',`What protects the coast, with roots that grow out of the mud?`,[`Mangroves`,`Palm trees`,`Pine trees`],`Mangroves also shelter fish and crabs.`],
['cg_eastcoast',`What celebration marks the end of the fasting month of Ramadan?`,[`Hari Raya Aidilfitri`,`Deepavali`,`Vesak Day`],`Geylang Serai lights up with a bazaar and decorations.`],
['cg_eastcoast',`A Peranakan woman's traditional blouse is called a...`,[`Kebaya`,`Cheongsam`,`Kimono`],`The kebaya is often lace and beautifully embroidered.`],
['cg_ubin',`What does "Ubin" mean in Malay?`,[`Granite`,`Boat`,`Coconut`],`Granite from Ubin helped build early Singapore.`],
['cg_ubin',`Which wildlife lives wild on Pulau Ubin?`,[`Wild boars`,`Lions`,`Elephants`],`They tend to be shy but can be bold with snacks.`],
['cg_ubin',`Chek Jawa is famous for which type of habitat?`,[`Wetlands and tidal flats`,`Desert`,`Glaciers`],`Many creatures live there, from starfish to hornbills.`],
['cg_ubin',`How do most visitors reach Pulau Ubin?`,[`By bumboat`,`By car`,`By helicopter`],`The short ride leaves when twelve people are aboard.`],
['cg_ubin',`In kampung houses, what lit the rooms before electricity?`,[`Oil lamps`,`Neon signs`,`Solar panels`],`Many kampung houses used kerosene lamps.`],
['cg_festival',`The seventh lunar month is known as the...`,[`Hungry Ghost Month`,`Festival of Lights`,`Dragon Month`],`In Chinese tradition, spirits are said to visit during this month.`],
['cg_festival',`What is the live stage performance during the seventh month called?`,[`Getai`,`Wayang`,`Opera`],`Getai shows have loud, cheerful songs and colourful costumes.`],
['cg_festival',`Why is the front row at a getai often left empty?`,[`For invisible guests`,`It's broken`,`For the VIPs`],`It is a polite gesture to visitors from the other side.`],
['cg_festival',`What do people burn during the Hungry Ghost month?`,[`Joss paper`,`Rubber tyres`,`Plastic bottles`],`Joss paper is burned in special burners, safely.`],
['cg_festival',`What fruit is commonly offered?`,[`Oranges`,`Durian`,`Watermelon`],`Oranges are considered auspicious.`],
['cg_festival',`On which day of the seventh month is the main Zhong Yuan festival?`,[`The fifteenth`,`The first`,`The twenty-fifth`],`The fifteenth day is the main day, when offerings are strongest.`],
['cg_kampong',`In the 1950s Changi was mostly...`,[`A seaside village`,`A skyscraper district`,`A desert`],`Fishing families lived near the shore.`],
['cg_kampong',`A kampung is a Malay word for...`,[`A village`,`A boat`,`A market`],`Kampung life was close-knit and communal.`],
['cg_kampong',`What did fishermen use to find their way home at night?`,[`Lanterns and lighthouses`,`GPS`,`Radio towers`],`A light in a window was a very old signal of home.`],
['cg_oldcity',`Who is said to have founded modern Singapore in 1819?`,[`Sir Stamford Raffles`,`Marco Polo`,`Captain Cook`],`Raffles landed by the Singapore River.`],
['cg_oldcity',`Singapore's old name "Temasek" means...`,[`Sea town`,`Lion city`,`Gold port`],`"Singapura" means "Lion City".`],
['cg_oldcity',`The Merlion has the head of a lion and the body of a...`,[`Fish`,`Eagle`,`Horse`],`It stands for the lion city and the fishing village.`],
['cg_oldcity',`The National Museum of Singapore is the...`,[`Oldest museum in Singapore`,`Newest museum in Asia`,`Smallest museum in the world`],`It opened in 1887.`],
['cg_oldcity',`Where is the Battle Box, a WWII bunker?`,[`Fort Canning`,`Sentosa`,`Pulau Ubin`],`It was a command centre in 1942.`],
['cg_nature',`What is the highest natural point in Singapore?`,[`Bukit Timah Hill`,`Mount Faber`,`Fort Canning`],`It is about 164 metres tall.`],
['cg_nature',`The MacRitchie TreeTop Walk is a...`,[`Suspension bridge`,`Cable car`,`Tunnel`],`It is about 250 metres long and 25 metres above the ground.`],
['cg_nature',`Henderson Waves is Singapore's highest...`,[`Pedestrian bridge`,`Skyscraper`,`Lighthouse`],`It is a curving wooden bridge.`],
['cg_nature',`Which animal glides between trees at night in Singapore's forests?`,[`Flying lemur (colugo)`,`Penguin`,`Kangaroo`],`The colugo glides using skin flaps.`],
['cg_nature',`Which is the world's first nocturnal zoo, found in Singapore?`,[`Night Safari`,`River Wonders`,`Moonlight Park`],`It opened in 1994.`],
['cg_nature',`Which reservoir has the TreeTop Walk?`,[`MacRitchie`,`Bedok`,`Kranji`],`It is in the Central Catchment Nature Reserve.`],
['cg_city',`How tall is the Supertree Grove at Gardens by the Bay?`,[`25 to 50 metres`,`5 to 10 metres`,`100 to 200 metres`],`They are covered with plants and glow at night.`],
['cg_city',`Which statue is both half lion and half fish?`,[`The Merlion`,`The Sphinx`,`The Dragon`],`It was created in 1964.`],
['cg_city',`Orchard Road was once covered with...`,[`Fruit and spice plantations`,`Ice rinks`,`Glass farms`],`Nutmeg, pepper and fruit trees lined the road.`],
['cg_city',`What does the Sultan Mosque's dome look like?`,[`Gold`,`Silver`,`Blue`],`It stands on Muscat Street in Kampong Glam.`],
['cg_city',`Which famous balm was made by the brothers Aw Boon Haw and Aw Boon Par?`,[`Tiger Balm`,`Lion Oil`,`Dragon Cream`],`Their Haw Par Villa has statues from Chinese myths.`],
['cg_city',`What does "Sentosa" mean in Malay?`,[`Peace and tranquillity`,`Sea and sand`,`Fun and games`],`It is a popular island resort.`],
['cg_city',`Mustafa Centre in Little India is open...`,[`24 hours a day`,`Only on weekends`,`Only at night`],`Locals shop there at all hours.`],
['cg_city',`The Fountain of Wealth is found at which shopping complex?`,[`Suntec City`,`ION Orchard`,`VivoCity`],`People walk around it three times for luck.`],
['cg_city',`Thian Hock Keng is a temple for which sea goddess?`,[`Mazu`,`Kuan Yin`,`Athena`],`It was built by Hokkien immigrants who thanked her for safe journeys.`],
['cg_city',`What can't you buy in Singapore shops, a rule from 1992?`,[`Chewing gum`,`Bubble tea`,`Ice cream`],`Chewing gum sales were banned, with exceptions for dental and medical gum.`],
['cg_city',`What is the tallest indoor waterfall in the world, at Jewel?`,[`The Rain Vortex`,`The Cloud Fall`,`The Water Wall`],`It is about 40 metres high.`],
['cg_city',`Which MRT line goes right across the city and links Tampines to Chinatown?`,[`Downtown Line`,`Circle Line`,`North-South Line`],`It opened in stages from 2013.`],
['cg_city',`What colour is the East-West Line on the MRT map?`,[`Green`,`Red`,`Orange`],`It runs from Pasir Ris to Tuas Link, with a branch to Changi Airport.`],
['cg_city',`Singapore is made up of a main island and about how many islets?`,[`Sixty`,`Five`,`Five hundred`],`Many are small and uninhabited.`],
['cg_city',`Which fruit has such a strong smell that it is banned on the MRT?`,[`Durian`,`Banana`,`Papaya`],`Fans call it the "king of fruits".`],
['cg_city',`What does "teh tarik" mean?`,[`Pulled tea`,`Cold tea`,`Green tea`],`The tea is poured back and forth to make it frothy.`],
['cg_city',`What is "ang pow"?`,[`A red packet with money`,`A type of bun`,`A lantern`],`Given at Chinese New Year and weddings.`],
['cg_city',`Which animal is the symbol of Singapore's Night Safari?`,[`Tiger`,`Seal`,`Parrot`],`The zoo is home to many nocturnal species.`],
['cg_city',`The Singapore Botanic Gardens was made a UNESCO World Heritage Site in...`,[`2015`,`1965`,`1995`],`It was founded in 1859.`],
['cg_city',`Which famous orchid is Singapore's national flower?`,[`Vanda Miss Joaquim`,`Red rose`,`Sunflower`],`It was named after Agnes Joaquim, who bred it in her garden.`],
['cg_city',`What is the Singapore Science Centre known for?`,[`Hands-on science exhibits`,`Old paintings`,`Roller coasters`],`It opened in 1977.`],
['cg_city',`Singapore's money is called the...`,[`Singapore dollar`,`Ringgit`,`Yen`],`Notes show the faces of former president Yusof Ishak.`],
['cg_city',`Which is the best-known Singapore noodle dish with spicy coconut broth?`,[`Laksa`,`Ramen`,`Spaghetti`],`It has prawns, cockles and fishcake.`],
['any',`Why do many Singaporeans carry a small umbrella?`,[`Sudden rain or hot sun`,`It is a rule`,`For decoration`],`Singapore weather can change within minutes.`],
['any',`Which MRT rule is considered good manners?`,[`Give up your seat to someone who needs it`,`Eat on the train`,`Run for the doors`],`Priority seats are for the elderly, pregnant and disabled.`],
['any',`Which country borders Singapore across the Johor Strait?`,[`Malaysia`,`Thailand`,`Japan`],`A causeway links Woodlands to Johor Bahru.`],
['any',`What is the Singapore bird that you might see everywhere, with a bright blue-green stripe?`,[`Kingfisher`,`Pelican`,`Flamingo`],`Common kingfishers dive for fish in ponds.`],
['any',`Which of these is a typical Singapore breakfast?`,[`Kaya toast and soft-boiled eggs`,`Bacon and pancakes`,`Cereal and yogurt`],`Kaya is a coconut and egg jam.`],
['any',`"Merdeka" is a Malay word for...`,[`Independence`,`Celebration`,`Lantern`],`It is the cry of independence in Malay.`],
['any',`Why do Singapore buildings have so many covered walkways?`,[`To shelter you from rain and sun`,`For decoration`,`To grow plants`],`Linkways are a clever tropical feature.`],
['any',`What does the Singapore "green man" at the traffic light mean?`,[`You can cross`,`Danger`,`Stop`],`Always wait for the green man at the crossing.`],
['any',`How many hours of daylight does Singapore get on a typical day?`,[`About twelve`,`About four`,`About twenty`],`Being near the equator means days and nights are nearly equal all year.`],
['any',`Singapore is located near which line around the Earth?`,[`The equator`,`The Arctic Circle`,`The Tropic of Capricorn`],`It is about one degree north of the equator.`],
['any',`What is a "hawker centre"?`,[`A food centre with many stalls`,`A bird sanctuary`,`A fish market only`],`They offer cheap, tasty meals from many cultures.`],
['any',`Which creature is nicknamed the "king of the jungle" and appears in Singapore's name?`,[`The lion`,`The tiger`,`The elephant`],`"Singa" is lion, "pura" is city.`]
];
// convert trivia into mini entries (rotate answers so the right one is not always first)
const trivia = TR.map((t,i) => { const [f,q,a,fact] = t; const order=[0,1,2]; const rot=i%3; const o = order.map((_,k)=>(k+rot)%3);
  const opts = o.map(idx => idx===0 ? [a[0],'',`Correct! ${fact}`,`xp+m mp+1 quiz+`] : [a[idx],'',`Not quite. The answer is "${a[0]}". ${fact}`,`xp+s quiz-`]);
  return [f, 'Singapore Quiz', '❓', q, opts]; });
G.miniArch('cg_trivia', trivia);

/* make sure every Casuarina mini-encounter has at least one plain, check-free, requirement-free option */
['cg_local','cg_food','cg_kind','cg_scare','cg_trivia'].forEach(n=>{ (G.mini[n]||[]).forEach(e=>{
  const safe = e[4].some(a=>!a[1]&&!a[6]&&!a[7]&&!/die|hp-[lm]/.test((a[3]||'')));
  if (!safe && e[4].length < 5) e[4].push([n==='cg_food'?'Just enjoy the smells and walk on':'Take it all in and walk on','',n==='cg_food'?'You breathe in the smells, smile and keep walking. Singapore is a wonderful place to be hungry.':'You look around, take a few photos in your mind and walk on, a little wiser.','xp+s mp+1']);
}); });
})();
