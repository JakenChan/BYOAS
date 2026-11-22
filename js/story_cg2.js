/* THE LADY OF CASUARINA HOUSE — the city hub: five days across Singapore */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const VISITED = ['cg_v_orchard','cg_v_chinatown','cg_v_littleindia','cg_v_glam','cg_v_hawpar','cg_v_sentosa','cg_v_marina','cg_v_jewel'];

G.chapter('cg3',{ story:'changi', n:'Chapter 3: Across Singapore', sub:'The school holidays · three days to find something that helps', ch:3, region:'cg_city', art:'skyline|🚇 🌆', age:11, btn:'Start planning',
  text:`School holidays have begun. You have three days before the fifteenth night of the seventh month, when the house will be at its strongest.\nSingapore is small enough to cross in an hour or two, and the MRT can take you almost anywhere: Orchard Road's shops, Chinatown's temples, Little India's late-night stores, the old Malay quarter of Kampong Glam, the stone dragons of Haw Par Villa, the beaches of Sentosa, the glittering Marina Bay, and the airport's glass garden at Jewel.\nYou cannot visit everywhere. Choose the three places you think will help the most.`,
  beats:['cg3_plan','~enc','cg3_hub','~enc','cg3_eve1','cg3_hub','cg3_eve2','~enc','cg3_hub','cg3_prep'] });

S_('cg3_plan','Planning at Home','hdb|🗺️ 💰',
`On Sunday morning, you spread a big MRT map on the floor and sit cross-legged in front of it. A boat, a light, a song. These three things might help. But where in Singapore do you find them?\nYou have some pocket money, and you will need more to buy things.`,[
 {t:`Ask {guardian} for some extra pocket money for the holidays.`,y:[`{guardian} presses a few notes into your hand. "For snacks and MRT. Not for spending on silly things. And always message me where you are." You promise.`,'gold+15 xp+s flag:cg_told_adult tod:day wx:clear']},
 {t:`Offer to do chores for money.`,c:'CON 8 endure',y:[`Mopping, wiping, hanging laundry. By lunchtime you are exhausted and $12 richer. {guardian} says, "That is how you earn it." You agree.`,'gold+12 xp+m hp-1 tod:day wx:clear'],n:[`You make a bit of a mess, but {guardian} pays you $6 anyway for effort.`,'gold+6 xp+s tod:day wx:clear']},
 {t:`Empty your piggy bank.`,y:[`Clink, clink, clink: $8 in coins, a button, and a mystery foreign coin. It will have to do.`,'gold+8 xp+s tod:day wx:clear']} ]);

S_('cg3_hub','Where to Today?','mrt|🚇 🗺️',
S => { const n = VISITED.filter(f=>S.flags[f]).length; return `Day ${n+1} of 3. ${n===0?'Where should you start?':n===1?'One place done. Where next?':'Last day before the fifteenth night. Where now?'}\nYou stand in front of the big MRT map at Tampines station. Your EZ-Link card is topped up. You have $${S.gold}.\nThe Downtown Line, in blue, goes right across the city. The East-West Line, in green, goes to the airport. The Circle Line, in orange, goes round the middle.`; },[
 {t:`Orchard Road: books, shops and bright lights.`,hide:true,r:'!flag:cg_v_orchard',y:[`You tap in, and the train rushes west.`,'flag:cg_v_orchard >cg3_orc1 tod:day']},
 {t:`Chinatown: temples, markets and old streets.`,hide:true,r:'!flag:cg_v_chinatown',y:[`The Downtown Line takes you straight there.`,'flag:cg_v_chinatown >cg3_chn1 tod:day']},
 {t:`Little India: colour, spice and a shop that never sleeps.`,hide:true,r:'!flag:cg_v_littleindia',y:[`Downtown Line again, a few stops from the city.`,'flag:cg_v_littleindia >cg3_lin1 tod:day']},
 {t:`Kampong Glam: the old Malay quarter and Arab Street.`,hide:true,r:'!flag:cg_v_glam',y:[`You ride the Downtown Line to Bugis, then walk.`,'flag:cg_v_glam >cg3_kg1 tod:day']},
 {t:`Haw Par Villa: dragons, statues and spooky stories.`,hide:true,r:'!flag:cg_v_hawpar',y:[`A few changes and a ride on the Circle Line.`,'flag:cg_v_hawpar >cg3_hpv1 tod:day']},
 {t:`Sentosa: beaches, forts and the giant Merlion.`,hide:true,r:'!flag:cg_v_sentosa',y:[`You take the MRT to HarbourFront and then onward.`,'flag:cg_v_sentosa >cg3_sen1 tod:day']},
 {t:`Marina Bay: the skyline, Suntec and the Supertrees.`,hide:true,r:'!flag:cg_v_marina',y:[`The Downtown Line, out at Bayfront.`,'flag:cg_v_marina >cg3_mar1 tod:day']},
 {t:`Jewel Changi Airport: a waterfall inside a building.`,hide:true,r:'!flag:cg_v_jewel',y:[`The green line, all the way to Changi Airport.`,'flag:cg_v_jewel >cg3_jwl1 tod:day']},
 {t:`Stay home and rest today.`,y:[`A lazy day. You nap, read, and eat a whole bowl of mee goreng. It is exactly what your tired legs wanted.`,'rest xp+s flag:cg_v_orchard flag:cg_v_chinatown'.replace('flag:cg_v_orchard flag:cg_v_chinatown','')+' hp+8 mp+6'],k:1} ]);

/* ---------------- ORCHARD ---------------- */
S_('cg3_orc1','Orchard Road','skyline|🛍️ 🌇',
`Orchard Road is Singapore's most famous shopping street, about two kilometres of bright malls, department stores and pavements full of people. A long time ago it really was a road of orchards, with nutmeg and pepper plantations and fruit trees. Today it is all glass and escalators and music.\nYou step out of the MRT into the cool air of a mall. Ahead is Ngee Ann City, which has the biggest bookshop you know.`,[
 {t:`Walk straight to the bookshop.`,y:[`Escalators up, past shoe shops and perfume counters, past an enormous poster of a pop star.`,'xp+s >cg3_orc2']},
 {t:`Stop to look around ION Orchard's glass-and-steel front.`,y:[`It is curved like a wave, covered in screens. A guard smiles at your wide eyes. "First time?" he says. "Everyone looks up."`,'xp+s mp+2 >cg3_orc2']},
 {t:`Ask a guard for directions, just to be safe.`,y:[`"Ngee Ann City? Cross at the traffic light, follow the signs." He grins. "You'll smell the books before you see them."`,'xp+s flag:cg_kind >cg3_orc2']} ]);
S_('cg3_orc2','Kinokuniya Bookstore','mall|📚 🔎',
`The bookshop is huge: high shelves, rolling ladders, children's corners, comics, cookbooks, and one wall of folklore and Asian history. A quiet hum of pages fills the air.\nYou have some pocket money to spend. A book in the folklore section catches your eye: *Ghosts and Spirits of Southeast Asia*, with a glossy cover and a price sticker: $14.`,[
 {t:`Buy the ghost-stories book ($14).`,hide:true,r:'gold:14&!item:cg_folkbook',y:[`You carry it to the counter with both hands. The bookseller smiles. "Spooky season?" Inside, you learn that in most stories the ghost wants something small: to be heard, remembered, or taken home.`,'gold-14 +cg_folkbook xp+m flag:cg_lesson_ghost stayc']},
 {t:`Read a few pages for free, standing in the aisle.`,hide:true,r:'!sv:read',c:'INT 9 lore',y:[`You read quickly. A line sticks: "A grieving spirit does not need to be fought. She needs to be answered." You copy it in your notebook.`,'xp+m flag:cg_lesson_ghost svflag:read stayc'],n:[`The print is small and your feet hurt. You skim a little and put it back.`,'xp+s svflag:read stayc']},
 {t:`Ask the bookseller about local folklore.`,hide:true,r:'!sv:asked',c:'CHA 9 persuade',y:[`"Hungry Ghost month? Many tales," she says. "One I like is about a lantern in a window, guiding a lost child home." She winks. "Lanterns are good for lots of things."`,'xp+m svflag:asked stayc'],n:[`"Ask at the information counter," she says kindly, and rushes off.`,'xp+s svflag:asked stayc']},
 {t:`Leave the bookshop.`,y:[`The crowd on Orchard Road swallows you up again.`,'>cg3_orc3'],k:1} ]);
S_('cg3_orc3','The Green Man','skyline|🚦 🌆',
`You walk to the crossing at the edge of Orchard Road. A crowd gathers at the red man. A tourist holds the hand of a little girl. Across the road, a taxi is honking. A delivery rider is trying to nip across before the lights change.`,[
 {t:`Wait for the green man, like everybody else.`,y:[`Beep-beep-beep-beep. You cross in a crowd of a hundred people, all following the same bright green signal. It feels safe and ordinary.`,'xp+s mp+2']},
 {t:`Help the tourist family cross.`,c:'CHA 8 persuade',y:[`"Thank you so much!" says the father. He presses a few coins into your hand and a packet of chocolate. "Singapore is so friendly."`,'xp+m gold+2 +cg_sweets flag:cg_kind'],n:[`They are already across by the time you speak. You wave anyway.`,'xp+s']},
 {t:`Hurry across on red, like the delivery rider.`,c:'DEX 10 dodge',y:[`You make it. Your heart is thumping. A traffic police officer stares.`,'xp+s flag:cg_rude'],n:[`A car beeps sharply. You jump back, shaken. A police officer gives you a long, serious talk about road safety.`,'hp-2 mp-2 xp+s flag:cg_rude']} ]);

/* ---------------- CHINATOWN ---------------- */
S_('cg3_chn1','Chinatown','temple|🏮 🥢',
`The Downtown Line takes you straight to Chinatown. Up the escalator, the air smells of roast duck, joss sticks and sweet bak kwa. Narrow streets are hung with red lanterns. The Chinatown Complex hawker centre, one of the biggest in Singapore, bubbles with steam and shouting. Old shophouses with painted shutters line Pagoda Street, selling souvenirs and silk.\nYour next target is a temple on Telok Ayer Street.`,[
 {t:`Walk down Pagoda Street first.`,y:[`T-shirts, paper fans, tiny dragon statues. A stallholder shouts "Cheap cheap!" about everything, including a lamp shaped like a cat.`,'xp+s >cg3_chn2']},
 {t:`Eat lunch at Chinatown Complex ($3).`,r:'gold:3',y:[`Wonton noodles, steaming and sweet. A kindly uncle at the next table tells you: "This hawker centre has fed the neighbourhood for decades. We eat first, talk later." You like him.`,'gold-3 hp+8 mp+3 xp+m >cg3_chn2']},
 {t:`Go straight to Telok Ayer.`,y:[`Past a cluster of shophouses and a pair of stone lions. You can already hear the quiet chime of temple bells.`,'xp+s >cg3_chn2']} ]);
S_('cg3_chn2','Thian Hock Keng Temple','temple|🙏 🏯',
`Thian Hock Keng is one of the oldest Hokkien temples in Singapore, built in the 1840s by Chinese immigrants who wanted to thank Mazu, the goddess of the sea, for their safe journeys across the ocean. Its roof has carved dragons, its pillars are painted red, and its courtyard smells of incense. Visitors speak in low voices.\nAn older man in a volunteer's vest, Uncle Seng, nods to you at the gate.`,[
 {t:`Bow politely and ask Uncle Seng, in a low voice, for advice about a sad spirit.`,c:'WIS 8 spirit',y:[`He listens without laughing. "The ones who are lost need three things," he says. "To be respected. To be heard. To be helped to go home. Not to be shouted at, not to be forced." He presses a small red peace charm into your hand. "A gift from the temple, with kind wishes. Keep it close."`,'xp+l +cg_charm flag:cg_lesson_ghost flag:cg_respect >cg3_chn3'],n:[`Uncle Seng smiles. "Come, take a seat," he says, and tells you about the temple's history while you listen politely. He gives you a little red charm for the journey home.`,'xp+m +cg_charm flag:cg_respect >cg3_chn3']},
 {t:`Read the history signs and learn about the sea goddess.`,c:'INT 8 lore',y:[`The sign says: sailors prayed here before leaving, and again when they returned. A line hangs in your mind: *to be safe is to be looked after, not to be kept.*`,'xp+m flag:cg_lesson_ghost >cg3_chn3'],n:[`The signs are long and complicated. You look at the dragons instead.`,'xp+s >cg3_chn3']},
 {t:`Stand quietly in the courtyard and just listen.`,y:[`Smoke curls up from big bronze burners. Soft footsteps. A bell. The city noise fades. Your heart slows down for a while.`,'xp+m mp+4 >cg3_chn3']} ]);
S_('cg3_chn3','Chinatown Street Market','temple|🍊 🛒',
`Back on the street, a fruit stall overflows with mandarin oranges, lychees, pomelos, dragonfruit and fat red apples. A small crowd haggles loudly. Each orange is wrapped in a little square of tissue.\nAn offering of fruit, you remember, is a polite way to greet the unseen.`,[
 {t:`Buy a bag of mandarin oranges ($4).`,hide:true,r:'gold:4&!item:cg_oranges',y:[`The stallholder smiles. "Sweet ones!" You tuck the bag carefully into your backpack.`,'gold-4 +cg_oranges flag:cg_oranges_got xp+s stayc']},
 {t:`Haggle: "Uncle, can cheaper?"`,hide:true,r:'gold:2&!item:cg_oranges',c:'CHA 8 persuade',y:[`"Aiyo, you very smart one," says the stallholder, laughing. "Take lah. Two dollars, special price!"`,'gold-2 +cg_oranges flag:cg_oranges_got xp+m stayc'],n:[`"No discount. Four dollars," he says firmly. You pay.`,'gold-4 +cg_oranges flag:cg_oranges_got xp+s stayc']},
 {t:`Look at lucky red packets and tiny souvenirs ($1).`,hide:true,r:'gold:1&!sv:ang',y:[`You choose an empty red packet with a small drawing of a rabbit. It is just for luck.`,'gold-1 +cg_angpow xp+s svflag:ang stayc']},
 {t:`Say thank you and go home.`,y:[`The market's noise follows you down the escalator and into the MRT.`,'xp+s'],k:1} ]);

/* ---------------- LITTLE INDIA ---------------- */
S_('cg3_lin1','Little India','town|🪔 🌼',
`Little India is a riot of colour: garlands of marigolds, shops with saris and spices, murals on the walls and the sweet smell of jasmine. You walk along Serangoon Road, past Tekka Centre, a busy hawker centre and wet market. Music from a speaker shop mixes with the clatter of plates and the shouting of vendors.\nAhead is the glowing sign of a huge shop that says it is open 24 hours a day.`,[
 {t:`Stop at a flower stall and look at the garlands.`,y:[`A flower seller shows you how to string jasmine on thread, fast and neat. "Hobby," she says, with a grin. She tucks one flower behind your ear. It smells like every happy festival.`,'xp+m mp+3 >cg3_lin2']},
 {t:`Buy a murukku snack ($2) and walk.`,r:'gold:2',y:[`Crunchy, spicy, spiralled. You eat it all the way to the next street.`,'gold-2 hp+6 xp+s >cg3_lin2']},
 {t:`Go straight to the big shop.`,y:[`You cross the road with a crowd of shoppers carrying plastic bags and giant sacks of rice.`,'xp+s >cg3_lin2']} ]);
S_('cg3_lin2','Mustafa Centre','mall|🛒 🔦',
`Mustafa Centre is a giant department store open all day and all night, with aisles and aisles of everything: toys, electronics, snacks, perfumes, clothes, torches, shoes. A staff member in a yellow shirt says, "Need help?" with a friendly smile.`,[
 {t:`Buy a strong, rechargeable torch ($9).`,hide:true,r:'gold:9&!item:cg_flashlight',y:[`Bright, solid, with a rubber grip. You test it on the ceiling. It is much better than your phone's light.`,'gold-9 +cg_flashlight xp+m stayc']},
 {t:`Buy a small jar of Tiger Balm ($4).`,hide:true,r:'gold:4&!sv:balm',y:[`The tin has a tiger on the lid. You sniff it: sharp and minty. It clears your head. Good for headaches, and for being brave.`,'gold-4 +cg_balm xp+s svflag:balm stayc']},
 {t:`Buy a Milo packet ($2).`,hide:true,r:'gold:2&!sv:milo',y:[`A chocolate boost for later.`,'gold-2 +cg_milo xp+s svflag:milo stayc']},
 {t:`Browse the aisles and leave.`,y:[`A thousand things you do not need. You come away with only what you wanted.`,'xp+s >cg3_lin3'],k:1} ]);
S_('cg3_lin3','Lost in the Aisles','mall|🌀 🛍️',
`You turn left, then right, then left again. The aisles of the shop seem to go on forever. Suddenly you do not know which way the exit is. Everyone around you is busy. A tiny shiver of worry creeps in.`,[
 {t:`Stay calm and follow the exit signs.`,c:'WIS 8 survive',y:[`Exit, exit, exit. Down an escalator, past the electronics, and out into the warm street. You have found your own way. You feel pleased.`,'xp+m mp+2'],n:[`The signs lead in a circle. A kind shop assistant helps you find the exit and laughs. "Everybody gets lost here!"`,'xp+s']},
 {t:`Ask a shop assistant for help.`,y:[`"Of course," says the shop assistant. She walks you right to the exit and gives you a small plastic eraser shaped like a durian. "A little souvenir."`,'xp+s +cg_eraser flag:cg_kind']},
 {t:`Use your phone to check the map.`,y:[`Your phone's map shows the exit in five seconds. Technology is wonderful.`,'xp+s']} ]);

/* ---------------- KAMPONG GLAM ---------------- */
S_('cg3_kg1','Kampong Glam','town|🕌 🌴',
`Kampong Glam is the historic Malay quarter of Singapore. The golden dome of the Sultan Mosque shines in the sun, and the narrow streets around it hold fabric shops, perfume sellers, quiet cafés and some of the brightest street art in the city. Haji Lane is covered in murals. Arab Street has rows of rolled carpets and baskets.\nYou are asked politely to cover your knees and lower your voice near the mosque.`,[
 {t:`Walk respectfully around the mosque and admire the dome.`,y:[`A volunteer explains that the Sultan Mosque is one of the most important in Singapore, with a golden dome that seems to glow at sunset. You nod politely. People pass on their way to prayer, quiet and unhurried.`,'xp+m mp+2 flag:cg_respect >cg3_kg2']},
 {t:`Take a quick look at the colourful murals on Haji Lane.`,y:[`Whales, birds, faces, even a giant cat. Each is a story painted on a wall. A street artist is adding finishing touches, and tells you: "Every wall is a page."`,'xp+m >cg3_kg2']},
 {t:`Go straight to Arab Street.`,y:[`Rolls of colourful fabric, baskets and gleaming glass lamps hang from every doorway.`,'xp+s >cg3_kg2']} ]);
S_('cg3_kg2','The Lamp Shop on Arab Street','town|🏮 🛍️',
`A tiny shop on Arab Street is full of glowing mosaic lamps, in red, blue, green and gold, hanging from the ceiling like rainbow-coloured moons. A shopkeeper in a skullcap, Encik Hamid, sits on a stool with a cup of tea. "Looking for something that glows?"\nA lantern, you think. A light to guide someone home.`,[
 {t:`Ask for a small mosaic lantern ($8).`,hide:true,r:'gold:8&!item:cg_lantern',y:[`Encik Hamid lifts a palm-sized lamp of ruby and emerald glass. When he turns it on, patterns of coloured light dance across the shop. "It makes a path of light on any wall. Good for finding your way."`,'gold-8 +cg_lantern xp+m stayc']},
 {t:`Haggle politely for a better price.`,hide:true,r:'gold:6&!item:cg_lantern',c:'CHA 9 persuade',y:[`Encik Hamid chuckles. "Okay, okay. For you, six." You hold the little lamp in your cupped hands and watch the colours shimmer.`,'gold-6 +cg_lantern xp+m stayc'],n:[`"No, no, it is handmade," he says kindly. "Eight is the price." You pay, and he adds a small piece of Turkish delight.`,'gold-8 +cg_lantern +cg_sweets xp+s stayc']},
 {t:`Tell him why you need a light.`,hide:true,r:'!sv:told',c:'WIS 9 persuade',y:[`Encik Hamid listens, then quietly sets a lantern aside. "A light for someone lost," he says. "That should not cost much." You pay half. "A kind thing, young one."`,'gold-4 +cg_lantern xp+l flag:cg_kind svflag:told stayc'],n:[`He listens and nods. "A light is a light," he says. The price stays the same.`,'xp+s svflag:told stayc']},
 {t:`Say thank you and leave.`,y:[`The shop's colourful glow follows you out into the street.`,'xp+s >cg3_kg3'],k:1} ]);
S_('cg3_kg3','The Sailor\'s Song','town|⛵ 🎶',
`Down the road at a small cultural centre, a teacher, Cikgu Aziz, is leading a group of children in singing. The song is "Nenek Moyangku Orang Pelaut," a favourite Malay children's song that means *my ancestors were sailors*. The tune rolls up and down like waves. The children clap along.\nHe waves at you. "Join us! You are very welcome."`,[
 {t:`Join in and learn the song.`,y:[`The tune is bouncy and bright. By the third time through you can sing it from memory. Cikgu Aziz says: "Sailors sang this to keep their courage on the sea. It still works."`,'xp+l mp+5 flag:cg_sailor_song']},
 {t:`Sit quietly and listen.`,y:[`The song is like a hug from the sea. When it ends, you feel brave and steady, as if you could walk anywhere.`,'xp+m mp+4']},
 {t:`Ask Cikgu Aziz about sailors and the sea in Singapore's old days.`,c:'CHA 8 persuade',y:[`He tells you that Singapore was a port for hundreds of years, with boats from all over the world. "The sea gave us everything. It also took people. That is why we sing to it."`,'xp+m flag:cg_lesson_ghost'],n:[`He smiles and tells you to come back some day for a longer chat.`,'xp+s']} ]);

/* ---------------- HAW PAR VILLA ---------------- */
S_('cg3_hpv1','Haw Par Villa','park|🐉 🏯',
`Haw Par Villa is one of the strangest and most wonderful places in Singapore. It was built in 1937 by Aw Boon Haw, the "Tiger Balm King", who named it with his brother's name too: Boon Haw and Boon Par, "Haw Par". It is full of colourful statues and dioramas from Chinese myths and legends, and admission is free.\nThe entrance is a large dragon gate. Strange stone creatures peer out from the greenery.`,[
 {t:`Walk through the dragon gate and look around.`,y:[`Statues everywhere: heroes, monkeys, dragons, gods and goddesses. Many are brightly painted and larger than life. A group of school children giggle and take photos.`,'xp+m >cg3_hpv2']},
 {t:`Read the signs about the Tiger Balm brothers.`,c:'INT 8 lore',y:[`The Aw brothers made Tiger Balm famous across Asia. Haw Par Villa was a gift to share stories with everyone. The signs say: "These stories teach us how to live well."`,'xp+m >cg3_hpv2'],n:[`The signs are mostly in tiny print. You settle for taking a photo.`,'xp+s >cg3_hpv2']},
 {t:`Head straight for the famous spooky part.`,y:[`Everyone knows about the Ten Courts of Hell. You gulp, but you walk on.`,'xp+s >cg3_hpv2']} ]);
S_('cg3_hpv2','The Ten Courts','cave|👹 🕯️',
`A dark, curvy tunnel leads into the Ten Courts of Hell. Inside, models of fierce-looking guards and judges show what happens in the stories to people who lie, cheat or hurt others. The statues are painted in bright, spooky colours. The idea is old: to help people, especially children, learn to be kind.\nThe air is cool. Your footsteps echo.`,[
 {t:`Walk through slowly, looking at each scene.`,c:'WIS 9 resist',y:[`The statues look scary, but you realise they are only stories. At the end you step into the sunshine, a little braver and a lot more sure that kindness matters.`,'xp+l skill:cg_brave mp+3 >cg3_hpv3'],n:[`A statue with a very big face makes you jump. You walk faster. But you make it through, and your heart slows when you reach the sun.`,'xp+m mp-1 >cg3_hpv3']},
 {t:`Hold a friend's hand and go through together.`,r:'anyally',y:[`Two people are braver than one. You count the statues together, and laugh nervously at the funniest ones.`,'xp+m mp+3 bond:cg_priya >cg3_hpv3']},
 {t:`Skip it and read the signs outside.`,y:[`Sometimes you don't need to prove anything. You read about the legends and take your time.`,'xp+m >cg3_hpv3']} ]);
S_('cg3_hpv3','The Caretaker','park|🧓 🐯',
`Outside, an elderly caretaker with a broom is sweeping fallen leaves. He sees your face. "You look like someone with a problem. Come, sit. Haw Par Villa is a good place for problems."\nHe sits on a stone bench and pulls a small round tin from his pocket: Tiger Balm.`,[
 {t:`Tell him your problem: a sad ghost and a missing friend.`,y:[`He listens, nodding. "I've worked here thirty years," he says. "I've never met a ghost who hated kindness. They hate to be forgotten. Remember her name. Say it nicely." He hands you the tin. "For courage. Sniff when your knees shake."`,'xp+l +cg_balm flag:cg_lesson_ghost flag:cg_kind']},
 {t:`Ask him to tell a story about the old villa.`,y:[`He tells you of the day the whole villa was filled with lanterns, and every child in the neighbourhood came to see. "A place can be full of ghosts and still be full of joy," he says. He gives you the tin of balm anyway.`,'xp+m mp+4 +cg_balm']},
 {t:`Thank him and go.`,y:[`"Be brave and be kind," he calls, waving his broom. "The two work together."`,'xp+s']} ]);

/* ---------------- SENTOSA ---------------- */
S_('cg3_sen1','Sentosa','beach|🦁 🏝️',
`You take the MRT to HarbourFront, then walk across the Sentosa Boardwalk, or ride the Sentosa Express monorail. Sentosa means "peace and tranquillity" in Malay, though today it is full of families and tourists. On top of a hill stands the giant Merlion, a 37-metre-tall statue with a lion's head and a fish's tail.\nBeyond are beaches, a fort and the sound of ocean waves.`,[
 {t:`Take the boardwalk and enjoy the view.`,y:[`The boardwalk has moving walkways and a gentle sea breeze. Cargo ships wait at the horizon. A small boat chugs by. You can see the Singapore skyline across the water.`,'xp+m mp+2 >cg3_sen2']},
 {t:`Go up to look at the giant Merlion.`,y:[`It stands high on a hill, big and silly and proud, a symbol of Singapore. A tourist asks you to take a photo, and you do, adding a silly pose.`,'xp+m mp+2 >cg3_sen2']},
 {t:`Go straight to Fort Siloso.`,y:[`You follow a path through the greenery. A sign reads "Fort Siloso: Singapore's only preserved coastal fort." You smile.`,'xp+s >cg3_sen2']} ]);
S_('cg3_sen2','Fort Siloso','cave|🕳️ 🔦',
`Fort Siloso is an old coastal fort from the Second World War, with big guns, dark tunnels and a Skywalk that gives views of the harbour. Inside the tunnels it is cool and echoey, with dim lights and models of soldiers at their posts. Visitors talk in whispers.\nThe tunnel ahead is narrow and a little dark. Your heart beats a bit faster.`,[
 {t:`Walk through the tunnel on your own, with a steady breath.`,c:'WIS 9 resist',y:[`You count your steps: one, two, three, four. The tunnel opens into a bright room full of old maps. You feel braver, like you just passed a secret test.`,'xp+l skill:cg_brave mp+3 >cg3_sen3'],n:[`Halfway through, you hear a drip and freeze for a second. Then you laugh at yourself and keep going.`,'xp+m mp-1 >cg3_sen3']},
 {t:`Switch on your torch and walk with it.`,r:'item:cg_flashlight|item:cg_penlight',y:[`The beam slides over old guns and painted walls. The dark is only the absence of light, you realise, and you have light.`,'xp+m mp+2 >cg3_sen3']},
 {t:`Take the Skywalk instead, over the treetops.`,y:[`A long walkway above the trees. You can see for kilometres: ships, islands, planes, and the green sea. The wind blows away your worries.`,'xp+m mp+4 >cg3_sen3']} ]);
S_('cg3_sen3','Siloso Beach','beach|🏖️ 🦀',
`You end the day on a quiet part of Siloso Beach. A little hermit crab scuttles across the sand in a borrowed shell. A volleyball game has started further down. Palms rustle. A souvenir stall sells keychains.`,[
 {t:`Buy a Merlion keychain ($3).`,r:'gold:3',y:[`It is cheerful, ridiculous, and very Singaporean. It may be useless. It may not.`,'gold-3 +cg_merlion xp+s']},
 {t:`Watch the hermit crab for a while.`,y:[`It carries its house on its back. You think about the lady in the white house, who cannot leave hers. Funny how a house can be safe or a trap.`,'xp+m mp+3']},
 {t:`Paddle your feet in the water.`,y:[`Warm, salty, soft. For ten minutes you forget everything.`,'xp+s mp+4 hp+4']} ]);

/* ---------------- MARINA BAY ---------------- */
S_('cg3_mar1','Marina Bay','skyline|🦁 🌇',
`The Downtown Line takes you to Bayfront. You walk out into a postcard: a calm blue bay, the three towers of Marina Bay Sands with a ship-like deck on top, the lotus-shaped ArtScience Museum, the spiky Esplanade theatres nicknamed "the durian", and, at the water's edge, the original Merlion statue spouting a jet of water.\nSingapore has changed a lot in a few decades. People walk, jog and take photos everywhere.`,[
 {t:`Go to the Merlion Park and take a photo.`,y:[`The Merlion has been the symbol of Singapore for fifty years. You pose with your mouth wide open, as if you are the one spouting water. A passing jogger laughs.`,'xp+m mp+2 >cg3_mar2']},
 {t:`Walk along the waterfront, enjoying the breeze.`,y:[`Ripples sparkle. A river taxi chugs by. The city glitters. You have a moment of quiet.`,'xp+m mp+3 >cg3_mar2']},
 {t:`Hurry to Suntec City.`,y:[`You cross the Helix Bridge, a curving twisty walkway lit with coloured lights, and keep going.`,'xp+s >cg3_mar2']} ]);
S_('cg3_mar2','Fountain of Wealth','mall|⛲ 🪙',
`In the middle of Suntec City stands the Fountain of Wealth: a giant bronze ring of water around a bowl in the centre. It was once listed in the Guinness World Records as the world's largest fountain. Visitors are said to walk around it three times, touching the water, for good fortune.\nA smiling security guard watches as people circle it with their hands out.`,[
 {t:`Walk around the fountain three times and touch the water.`,y:[`Round once, round twice, round three times. The water is cool and silky. You make a wish. You do not know whether it works, but you feel luckier. A small coin rolls to your shoe.`,'xp+m +cg_lucky_coin mp+3 >cg3_mar3']},
 {t:`Read the plaque about how it was built.`,c:'INT 8 lore',y:[`It was designed according to feng shui principles, with water flowing toward the centre, to gather good fortune. The bronze ring is huge. You learn something, and you forget something else.`,'xp+m >cg3_mar3'],n:[`The text is too small. You look at the fountain instead.`,'xp+s >cg3_mar3']},
 {t:`Skip it. You do not believe in luck.`,y:[`Maybe luck, maybe science. Either way, you walk on.`,'xp+s >cg3_mar3']} ]);
S_('cg3_mar3','Gardens by the Bay','supertree|🌳 ✨',
`As the sun sets, the Supertrees at Gardens by the Bay light up. They are huge, tree-shaped towers, between 25 and 50 metres tall, covered in plants and glowing in pink, blue and gold. At night, the Garden Rhapsody light-and-music show makes them dance.\nYou lie on the grass among families, looking up. It is calm and magical.`,[
 {t:`Watch the light show and breathe slowly.`,c:'WIS 8 resist',y:[`In... and out. In... and out. The music swells, the lights swirl, and you realise that you are completely calm. You practise this breathing until it feels natural.`,'xp+l skill:cg_calm mp+5'],n:[`The show is so beautiful you forget to breathe at all. But you feel better.`,'xp+m mp+3']},
 {t:`Buy a glow bracelet from a stall ($2).`,r:'gold:2',y:[`It glows soft green. You put it on your wrist. A small light to carry.`,'gold-2 +cg_glowband xp+s']},
 {t:`Ride up and walk on the high walkway between the trees.`,y:[`Up in the air, with the whole garden below like a glowing carpet. You hold the rail and feel brave. The city twinkles in the distance.`,'xp+m mp+4']} ]);

/* ---------------- JEWEL ---------------- */
S_('cg3_jwl1','Jewel Changi Airport','jewel|💧 🌿',
`The green line takes you all the way to Changi Airport. Beyond the arrival halls, Jewel Changi Airport rises like a glass doughnut full of trees. It opened in 2019 and holds the Rain Vortex, the tallest indoor waterfall in the world, about forty metres high, pouring from a hole in the roof.\nThe air smells of leaves and cool water. A hum of conversation fills the space.`,[
 {t:`Stand in front of the Rain Vortex and watch.`,y:[`The water falls and falls and falls, white and thundering, into a pool far below. Everyone's phones are raised. For a moment, you just feel small and amazed.`,'xp+m mp+3 >cg3_jwl2']},
 {t:`Walk through the indoor forest valley.`,y:[`Real trees, real ferns and a path that curves. It smells wonderfully green. Birds chirp from hidden speakers, or maybe real birds.`,'xp+m hp+3 mp+2 >cg3_jwl2']},
 {t:`Go straight to the top floor, to Canopy Park.`,y:[`Up the lift, along a tree-lined corridor, and out into a play garden under glass. Children are shrieking happily on a giant net.`,'xp+s >cg3_jwl2']} ]);
S_('cg3_jwl2','The Mirror Maze','jewel|🪞 😮',
`Canopy Park has a mirror maze: a twisty room of mirrors where you can never tell which way is the exit. Your reflection is everywhere, in every direction, a hundred copies of you. It is like a ghost story with only you in it.\nYou take a breath. The only way out is through.`,[
 {t:`Walk slowly, with one hand on a mirror.`,c:'WIS 8 resist',y:[`One hand always on the glass. Left, right, left, forward. At the end you step out, laughing. "Mirrors can't hurt you," you whisper to yourself. "They only show you."`,'xp+l mp+3 >cg3_jwl3'],n:[`You get lost for ten minutes and bump your nose twice. But you do get out.`,'xp+m hp-1 mp+1 >cg3_jwl3']},
 {t:`Close your eyes and trust the person next to you.`,r:'anyally',y:[`Your friend holds your elbow. You shuffle through the maze with eyes shut, giggling, and come out the other side with a bit more trust than you had before.`,'xp+m mp+4 bond:cg_priya >cg3_jwl3']},
 {t:`Skip the maze and walk around the hedge garden.`,y:[`Sometimes the best decision is to walk around. The hedge maze is made of tidy green walls, and easy to solve.`,'xp+s mp+2 >cg3_jwl3']} ]);
S_('cg3_jwl3','Departure Hall','mall|🧳 🛫',
`On the way home, you walk through the airport's departure hall. Rolling suitcases, trolleys, families hugging goodbye. On a bench, a tired old man in a travelling jacket sits with a small suitcase and a bag of sweets. He sees your school bag and smiles.\n"Everyone is just trying to get home," he says.`,[
 {t:`Sit next to him and chat.`,y:[`He tells you that he has been away from Singapore for forty years and is finally coming back. "Home is not the house," he says. "Home is the people who remember you." He gives you a sweet and a pat. "Be good to the lost."`,'xp+l +cg_sweets flag:cg_lesson_ghost flag:cg_kind']},
 {t:`Offer him your water bottle.`,r:'item:cg_water',y:[`He laughs and takes it gratefully. "Kind child." He says something in a language you do not know, and then in English: "May you always find your way back."`,'-cg_water xp+m mp+3 flag:cg_kind']},
 {t:`Smile and keep walking.`,y:[`He tips an imaginary hat. A warm feeling stays with you all the way home.`,'xp+s']} ]);

/* ---------------- evenings & preparation ---------------- */
S_('cg3_eve1','Evening at Home','hdb|🌙 🍲',
`You come home tired and happy. The flat smells of dinner. {guardian} puts a plate in front of you and sits across the table, hands folded. "So. Where did you go today?"`,[
 {t:`Tell {guardian} everything: the house, the lady, the plan.`,y:[`{guardian} listens carefully, and, to your surprise, doesn't laugh. "I've always known there are things you cannot see," says {guardian}. "If you go on the fifteenth night, you tell me. I will wait where I can see you. And you take the lullaby."`,'xp+l mp+5 flag:cg_told_adult flag:cg_ahma_waits day+1']},
 {t:`Say you were out exploring and learning things.`,y:[`That's true, if not the whole truth. {guardian} gives you a look. "Alright. But next time, tell me more." You feel a little guilty.`,'xp+m mp+1 day+1']},
 {t:`Practise the lullaby in your room.`,y:[`You hum it softly, again and again, until the notes feel like water. By the end of the night you can hum it without thinking.`,'xp+m mp+3 flag:cg_lullaby day+1']},
 {t:`Go to bed early and sleep.`,y:[`Tomorrow will be a long day. You curl up under the blanket, listening to the lift hum and the distant MRT.`,'rest xp+s day+1']} ]);
S_('cg3_eve2','The Getai','void|🎤 🏮',
`Tonight there is a getai, a live stage show, held on a temporary stage in a carpark near your block. In the seventh month, singers in sparkly costumes perform Hokkien and Mandarin songs for the neighbourhood, and for the "special guests." The front row of seats is left empty on purpose, as an offering, so that visitors from the other side may enjoy the show.\nThe music is loud and cheerful and a little bit eerie.`,[
 {t:`Watch from the back, sitting politely.`,y:[`The host cracks jokes, the singers sparkle, and the aunties clap along. Nobody sits in the front row. It is a good feeling, to see a whole neighbourhood being kind to the unseen.`,'xp+m mp+4 flag:cg_respect day+1']},
 {t:`Ask an uncle why the front row is empty.`,c:'CHA 8 persuade',y:[`"For the guests," he says. "We say: you are welcome too. Sit, enjoy, don't trouble anyone." He nods at the empty seats. "A little courtesy is all they want."`,'xp+m flag:cg_lesson_ghost day+1'],n:[`"For guests," he says simply, and turns back to the show.`,'xp+s day+1']},
 {t:`Sit in the front row for a better view.`,y:[`A grandma gently shakes her head and mouths "no". You move at once, red-faced. She gives you a thumbs-up for listening so quickly.`,'xp+s mp-1 flag:cg_rude day+1']},
 {t:`Skip the show and go to bed.`,y:[`The music drifts through the window all night. It is strangely soothing.`,'rest xp+s day+1']} ]);
S_('cg3_prep','The Fifteenth Night','hdb|🎒 ⏰',
S => { const has = id => S.items[id]>0; const tick = b => b?'✔':'✘';
  return `Wednesday afternoon. Tonight is the fifteenth night of the seventh month. You lay out everything on your bed and take a long, careful look.\n${tick(has('cg_lantern'))} A light for guiding someone home (a lantern).  ${tick(has('cg_oranges'))} An offering of fruit.  ${tick(has('cg_charm'))} A peace charm.  ${tick(has('cg_flashlight')||has('cg_penlight'))} A torch.  ${tick(S.flags.cg_lullaby)} The lullaby.  ${tick(has('cg_bell'))} The fisherman's bell.\nYou may be missing some things. That's okay. You will have to do your best with what you have, and with who you are.`; },[
 {t:`Pack your bag carefully and say goodbye to {guardian}.`,y:[`{guardian} hugs you tightly. "Come back," says {guardian}, simply. You promise. The lift takes you to the ground floor, and then to the MRT, and then to the sea.`,'xp+l mp+4 hp+5 tod:dusk']},
 {t:`Study your notes one more time.`,r:'item:cg_notebook|item:cg_sketchbook|ally:cg_priya',y:[`Boat, light, song. Four-fifteen. Mei. Madam Soo Lian. You recite them like an exam. You are as ready as a Primary 5 student can be.`,'xp+l mp+3 flag:cg_knows_names tod:dusk']},
 {t:`Say a quiet wish for Aiman and for the lady.`,y:[`You hold your charm or bracelet and wish for everyone to get home safe, even the ones who have been gone a very long time.`,'xp+m mp+5 tod:dusk']} ]);
})();
