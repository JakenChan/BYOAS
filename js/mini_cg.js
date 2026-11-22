/* Random local encounters for the Singapore story.
   entry: [region, title, emoji, text, [ [label, check, yesMsg, yesFx, noMsg, noFx, req, mp], ... ]] */
(function(){
const G = globalThis.G;
G.miniArch('cg_local', [
/* ================= TAMPINES ================= */
['cg_tampines',`Aunties at the Void Deck`,'👵',`At the void deck downstairs, a few aunties sit around a table folding gold paper into little ingots for the seventh month. "Come, come, free hands!" one calls. "Don't be shy."`,[
  [`Sit down and fold paper with them`,'DEX 9 craft',`Fold, tuck, pinch — your ingots come out shiny and neat. The aunties clap, and one tucks a sweet into your pocket. "Good boy/girl. Always be respectful in this month."`,`xp+s +cg_sweets flag:cg_respect`,`Your ingot looks more like a squashed boat. The aunties laugh kindly and show you again.`,`xp+s`],
  [`Ask why they fold paper in the seventh month`,'INT 9 lore',`"The gates open and the hungry ghosts visit," says one auntie. "We give them offerings so they feel remembered. It is about being kind, even to those you cannot see." You remember that.`,`xp+m flag:cg_lesson_ghost`,`The aunties all answer at once. You nod politely, a little lost.`,`xp+s`],
  [`Say hello politely and walk on`,'',`"Don't forget to eat dinner!" they call after you.`,`xp+s`]]],
['cg_tampines',`The Priority Seat`,'🚌',`On the bus, every seat is full. At the next stop, an elderly uncle with a walking stick climbs on and holds the pole, looking tired. Someone in the priority seat is pretending to look at their phone.`,[
  [`Give up your seat and say "Uncle, please sit"`,'',`"Aiyo, thank you, good child," says the uncle, and tells you a short story about how Tampines used to be mostly plantation and kampung. It makes the bus ride feel short.`,`xp+m flag:cg_kind`],
  [`Politely ask the person in the priority seat to move`,'CHA 10 persuade',`"Oh! Sorry!" says the person, and jumps up. The uncle gives you a thumbs-up.`,`xp+m flag:cg_kind`,`The person pretends not to hear. Fortunately, a kind auntie offers her seat instead.`,`xp+s`],
  [`Stay in your seat and look out the window`,'',`The uncle manages. You feel a little uncomfortable for the rest of the journey.`,`xp+s flag:cg_rude`]]],
['cg_tampines',`Sudden Thunderstorm`,'⛈️',`Boom! Tampines is hit by one of its famous afternoon thunderstorms. The sky goes grey and fat raindrops begin to hammer down. You have a school bag, no umbrella, and about three minutes before you are soaked.`,[
  [`Dash along the sheltered linkway`,'DEX 9 dodge',`You zig-zag from covered walkway to covered walkway, as every Singapore kid knows how to do, and arrive almost dry.`,`xp+s`,`A gap in the linkway gets you wet from head to toe. Squelch, squelch.`,`hp-1 xp+s`],
  [`Wait it out in a void deck with the aunties`,'',`The aunties share their kueh, and the rain stops in twenty minutes. You make small talk about the weather — the national hobby.`,`hp+2 xp+s`],
  [`Use a plastic bag as a raincoat`,'INT 9 craft',`A clever hole for your head and you are off. You look silly but you are dry.`,`xp+s`,`The bag rips. Oh well.`,`hp-1`,'any:gimmick']]],
['cg_tampines',`The Kopitiam Chess Uncles`,'♟️',`At the coffee shop, two uncles are playing Chinese chess, slapping each piece down with a loud click. A small crowd of watchers argues quietly about the next move.`,[
  [`Watch quietly and learn`,'INT 9 lore',`After ten minutes, you can tell why the uncle on the left is going to lose. When he does, the watchers glance at you in surprise. "Smart kid!"`,`xp+m`,`It all looks like clicking. You enjoy it anyway.`,`xp+s`],
  [`Ask to play a quick game`,'INT 12 lore',`You win by sneaking in a clever move. The uncle slaps his forehead and buys you a drink. "Next time I win!"`,`xp+m +cg_milo`,`You lose in six moves. The uncle consoles you with a free packet of sweets.`,`xp+s +cg_sweets`],
  [`Say hello and move on`,'',`The uncles nod without looking up.`,`xp+s`]]],
['cg_tampines',`Football at the Cage`,'⚽',`At the void-deck football cage, some neighbourhood kids are short of one player. "Eh! You! Want to play?" one yells.`,[
  [`Join the game`,'DEX 9 dodge',`You score once, by accident, and everyone cheers like it was a World Cup goal. You are sweaty, happy and thirsty.`,`xp+m hp-1 mp+2`,`You trip over the ball. Everybody laughs, including you.`,`xp+s hp-1`],
  [`Referee instead`,'CHA 9 persuade',`"Handball!" you shout, and nobody argues. You earn the title of "fair ref".`,`xp+s`,`Everybody argues with you at once.`,`xp+s`],
  [`Say "next time" and continue home`,'',`They shrug and carry on.`,`xp+s`]]],
['cg_tampines',`A Lost Uncle`,'🧓',`An elderly uncle with a plastic bag looks around at the big, busy Tampines Interchange. "Young one, where is the bus to the hospital?" he asks, a little worried.`,[
  [`Walk him to the correct bus stop`,'WIS 9 survive',`You find the right bay, check the bus number, and wait with him until it arrives. He presses $2 into your hand. "For a drink, not for saving up!"`,`xp+m gold+2 flag:cg_kind`,`You walk him to the wrong stop — then catch the mistake just in time and fix it.`,`xp+s flag:cg_kind`],
  [`Ask a bus captain for help`,'',`The bus captain points confidently. The uncle thanks you both.`,`xp+s flag:cg_kind`],
  [`Say sorry, you are in a hurry`,'',`He nods slowly and asks someone else. You feel a bit heavy in your chest.`,`xp+s`]]],
['cg_tampines',`The Hawker Centre Queue`,'🍜',`At the hawker centre in Our Tampines Hub, the chicken rice queue snakes around the pillar. Your stomach growls loudly, and the queue moves at the speed of a sleepy snail.`,[
  [`Wait patiently in the queue`,'',`Twelve minutes later, you get a plate of chicken rice with extra chilli. It is perfect.`,`gold-3 hp+8 xp+s`,'','','gold:3'],
  [`Buy something faster: a packet of nasi lemak`,'',`No queue, rice already packed. Satisfying, if a bit less famous.`,`gold-3 +cg_nasi`,'','','gold:3'],
  [`Skip lunch and save your money`,'',`Your stomach complains, but your wallet is happy.`,`xp+s`]]],
['cg_tampines',`The Community Garden`,'🌱',`Beside the HDB block there is a tiny community garden with chilli plants, pandan, lemongrass and a hand-painted sign. An auntie in a big hat is watering them. "Eh, you want to help?"`,[
  [`Help water the plants`,'',`The auntie shows you how to tell when the pandan is ready. "Smell this," she says. It smells like every happy kueh. She gives you a bag of sweets.`,`xp+s +cg_sweets flag:cg_kind`],
  [`Ask her about the neighbourhood`,'WIS 9 persuade',`She tells you that in the seventh month the neighbours leave out food at the corner. "A thing we do so nobody feels forgotten."`,`xp+s flag:cg_lesson_ghost`,`She tells you about her chilli plants. For a long time.`,`xp+s`],
  [`Wave and walk on`,'',`She waves back with a trowel.`,`xp+s`]]],
['cg_tampines',`MRT Busker`,'🎸',`At Tampines MRT station a busker with a battered guitar is singing an old Mandarin song to people who walk past without listening. A small tip jar sits on the floor.`,[
  [`Listen for a minute and put $1 in the jar`,'',`The busker smiles. "Thank you!" The song, you notice, is about being homesick for the sea.`,`gold-1 xp+s mp+2`,'','','gold:1'],
  [`Request a song`,'CHA 9 persuade',`He plays your request with a wink. A few commuters stop and smile.`,`xp+s mp+2`,`He doesn't know the song, but plays another that is almost as good.`,`xp+s`],
  [`Keep walking`,'',`You hurry through the faregates.`,`xp+s`]]],
['cg_tampines',`The Library Quiet Zone`,'📚',`In the library, two small kids are giggling much too loudly. A librarian is frowning from the counter, and a sleeping uncle in the corner stirs.`,[
  [`Put a finger to your lips and whisper "shhh"`,'CHA 9 persuade',`The kids giggle once more, then freeze. The librarian gives you a grateful nod and slips you a bookmark.`,`xp+s`,`They giggle louder. The librarian sighs.`,`xp+s`],
  [`Show them a funny picture book`,'',`They crowd around it, eyes wide and mouths shut. Quiet at last.`,`xp+s flag:cg_kind`],
  [`Pretend you did not notice`,'',`Someone else deals with it eventually.`,`xp+s`]]],
/* ================= CHANGI VILLAGE ================= */
['cg_changi',`The Wild Chickens`,'🐓',`A rooster struts across the road in front of you as if he owns it. Free-roaming junglefowl are a famous sight around Changi, Pasir Ris and other green corners of the east. He fixes you with one beady eye.`,[
  [`Stand still and let him pass`,'',`He crosses with great dignity, followed by three hens. You feel as if you have been allowed through a gate.`,`xp+s`],
  [`Take a quick photo`,'DEX 9 craft',`A perfect rooster portrait. You grin.`,`xp+s +cg_merlion`.replace('+cg_merlion',''),`Blurry. The rooster looks like a feather-coloured smudge.`,`xp+s`],
  [`Shoo him away`,'',`He glares, flaps, and pecks your shoelace. Lesson learnt.`,`hp-1 xp+s`]]],
['cg_changi',`Planes Overhead!`,'✈️',`A giant plane roars low over the coast, so close you can see the little windows. Changi Airport is just minutes away, and planes pass over this part of the east all day.`,[
  [`Count the planes for a minute`,'',`Seven planes in five minutes. You imagine each one going somewhere far, like Tokyo or London. For a second, the spooky things feel far away too.`,`mp+3 xp+s`],
  [`Cover your ears and keep walking`,'',`It is loud, but the sound fades quickly.`,`xp+s`],
  [`Wave at the pilots`,'',`You are fairly sure one of them waved back.`,`xp+s mp+2`]]],
['cg_changi',`The Cyclist Uncle`,'🚴',`A cycling uncle in a bright jersey pulls over at the Changi coastal path, taking a sip of water. "Hey, young one. Are you lost? This path leads all the way to the beach."`,[
  [`Ask him about the area`,'CHA 9 persuade',`He tells you that Changi was a quiet fishing village long ago, and the beachfront is a favourite for families. "But after sunset, people don't stay long. Old rule."`,`xp+m flag:cg_knows_dusk`,`He explains how many kilometres of cycling path there are. It is a lot.`,`xp+s`],
  [`Say you are fine and thank him`,'',`He gives you a thumbs-up and cycles off.`,`xp+s`]]],
['cg_changi',`The Birdwatchers`,'🔭',`Three birdwatchers with enormous camera lenses are crouched in the grass looking at something small and brown. They whisper in the way that people only whisper about birds.`,[
  [`Crouch down silently and watch`,'DEX 9 sneak',`A tiny bird hops into view, and one of the watchers shows you through his lens. It is the nicest thing you have seen all week.`,`xp+s mp+3`,`Your foot snaps a twig. The bird zooms away. The birdwatchers stare at you for a long time.`,`xp+s`],
  [`Ask what they are looking for`,'',`"Migratory birds," whispers one. "They fly thousands of kilometres and still find the way home." You feel strangely hopeful.`,`xp+s mp+2`]]],
['cg_changi',`Sandcastle Kid`,'🏖️',`A small kid on Changi Beach is building a very ambitious sandcastle and crying because the tide just flattened the tower. "It keeps falling!" he sobs.`,[
  [`Help him build the walls farther from the water`,'INT 9 craft',`You dig a moat and pat a tall tower together. He claps. His mother gives you a packet of sweets as thanks.`,`xp+s +cg_sweets flag:cg_kind`,`The tide wins again. But you made him laugh.`,`xp+s flag:cg_kind`],
  [`Tell him the sea is very strong, and that it is okay`,'',`He sniffs, nods, and starts again. You feel useful.`,`xp+s flag:cg_kind`],
  [`Walk on`,'',`The waves lap up behind you.`,`xp+s`]]],
['cg_changi',`Nasi Lemak Queue`,'🍛',`The smell of coconut rice and fried chicken floats across the Changi Village Hawker Centre, and a long queue has formed at one famous stall. Everyone, from a taxi uncle to a family in matching T-shirts, is waiting patiently.`,[
  [`Join the queue`,'',`Fifteen minutes, one friendly chat with the auntie ahead of you, and then crispy chicken wing, sambal and fragrant rice. Worth it.`,`gold-4 hp+10 mp+2 xp+s`,'','','gold:4'],
  [`Just sniff, and smile`,'',`Free, but not very filling.`,`xp+s`]]],
['cg_changi',`The Boardwalk`,'🌿',`The Changi coastal boardwalk is a long wooden path through the casuarina trees. Salt breeze, rustling needles, and the distant sound of planes make everything feel a little dreamy.`,[
  [`Stroll slowly and listen`,'WIS 9 spirit',`The trees whisper like an old shushing. For a moment you could swear a lullaby is somewhere in the wind. A small shiver — not unfriendly.`,`xp+m flag:cg_knows_dusk`,`The wind is just the wind. Nice, anyway.`,`xp+s`],
  [`Run along the boardwalk`,'DEX 9 dodge',`Bump-bump-bump go your shoes on the planks. You arrive at the end laughing.`,`xp+s mp+2`,`Splinter! Only a small one.`,`hp-1 xp+s`],
  [`Just walk along quietly`,'',`The planks creak softly under your shoes. It is peaceful.`,`xp+s mp+1`]]],
['cg_changi',`The Ferry Queue`,'⛴️',`At the Changi Point Ferry Terminal, passengers queue with backpacks and bicycles for the bumboat to Pulau Ubin. A boatman shouts "Twelve people! Only twelve!" and counts heads like a teacher.`,[
  [`Watch the boats come and go`,'',`Old wooden bumboats with outboard engines puttering over the green water. Pulau Ubin, a quiet island with old kampung houses, is just a short ride away.`,`xp+s mp+2`],
  [`Ask the boatman if he has seen a boy in a school shirt`,'CHA 10 persuade',`"A boy? Maybe on Saturday. With some big boys. They went along the beach path, not to the boat." He scratches his head. "Check at sunset. Odd things happen there."`,`xp+m flag:cg_knows_dusk`,`He is too busy counting passengers to talk.`,`xp+s`]]],
/* ================= ACROSS SINGAPORE ================= */
['cg_city',`Rush Hour on the MRT`,'🚇',`The train is packed. Someone's backpack is in your face. A tired office worker is asleep standing up. The doors chime, and a calm recorded voice says, "Please mind the platform gap."`,[
  [`Squeeze to a corner and hold the pole`,'DEX 9 dodge',`You find a space, hold on and watch the lights of the stations slide by. It feels like a very ordinary day, which is comforting.`,`xp+s`,`You stumble at a sharp curve, but a nice auntie catches your arm.`,`xp+s`],
  [`Offer to hold an auntie's shopping bag`,'',`She smiles and says, "Good child." She is getting off at the next station, and she gives you a mandarin orange.`,`xp+s flag:cg_kind`],
  [`Put in your earphones and wait`,'',`The ride passes quietly.`,`xp+s`]]],
['cg_city',`Pigeons and Tourists`,'📸',`A family of tourists asks you to take their photo. "In front of the... what is this called?" they ask, pointing. They are in front of a famous landmark, and the sun is behind them.`,[
  [`Take the photo and add some local tips`,'CHA 9 persuade',`You take five photos, show them where to find good satay, and tell them to use the MRT. They are delighted.`,`xp+s +cg_sweets flag:cg_kind`,`The photo is a bit crooked, but they are happy.`,`xp+s`],
  [`Say sorry, you are busy`,'',`They smile and ask someone else.`,`xp+s`]]],
['cg_city',`A Sudden Shower`,'🌧️',`The sky opens with a downpour and everyone rushes to shelter under the covered walkway. The air smells of warm wet pavement. A food stall uncle dashes to pull down his plastic sheet.`,[
  [`Help him with the sheet`,'DEX 9 craft',`You hold the pole while he ties the knot. "Good one!" He rewards you with a free drink.`,`xp+s +cg_water flag:cg_kind`,`You get a bit wet, but the sheet holds.`,`xp+s`],
  [`Wait under the walkway`,'',`It passes in ten minutes. As always.`,`xp+s`]]],
['cg_city',`The Lost Wallet`,'👛',`On the pavement lies a small brown wallet with $20 inside and a photo of a smiling family. The street is crowded and no one is looking.`,[
  [`Hand it to the nearest security guard`,'',`The guard writes down your name and says, "A good deed!" Later, the owner calls to thank you and leaves a little reward.`,`xp+m gold+3 flag:cg_kind`],
  [`Look for the owner yourself`,'WIS 9 survive',`You spot a lady frantically checking her bag and return it. She hugs you.`,`xp+m flag:cg_kind gold+3`,`You can't find her, so you hand it to the guard.`,`xp+s flag:cg_kind`],
  [`Walk on`,'',`The wallet stays where it lay. You feel a bit odd for the next hour.`,`xp+s flag:cg_rude`]]],
['cg_city',`Kopi Uncle`,'☕',`An old coffee-shop uncle spots your school bag and your tired face. "Student ah? Drink something. Kopi? Teh? Milo? Don't tell your mother I serve you coffee." He winks.`,[
  [`Order a Milo and chat`,'',`He tells you about the old days, when kopitiams were the heart of the town. The Milo is thick and sweet.`,`gold-2 mp+5 xp+s`,'','','gold:2'],
  [`Ask if he knows any old stories`,'CHA 9 persuade',`He leans in: "Every old place in Singapore has a story, and every story has a sad part." You think about that.`,`xp+m flag:cg_lesson_ghost`,`He tells you about his knees.`,`xp+s`],
  [`Say thank you and carry on`,'',`"Come again," he says, polishing a cup.`,`xp+s`]]],
['cg_city',`Escalator Etiquette`,'🛗',`The escalator is packed. The sign says "Stand on the left, walk on the right." A tourist is standing in the middle of the walking lane, and a queue of hurried commuters is building up behind.`,[
  [`Politely tell the tourist about the rule`,'CHA 9 persuade',`"Oh!" The tourist laughs and moves. The commuters whoosh past with grateful smiles.`,`xp+s flag:cg_kind`,`The tourist doesn't speak English well, but copies a commuter and moves.`,`xp+s`],
  [`Stand behind and wait`,'',`The whole queue slides along.`,`xp+s`]]],
/* ================= CASUARINA HOUSE ================= */
['cg_house',`Flickering Light`,'💡',`Somewhere in the hall, an old lamp that ought to have no power flickers on, off, on, off, like someone playing with a switch. A moth batters itself against the glass.`,[
  [`Shine your own light on it`,'WIS 9 survive',`Your beam reveals only an old bulb and a spider web. The flickering stops. You let out a tiny breath.`,`xp+s mp+1`,`The lamp flickers harder. You feel your heart thump.`,`mp-1 xp+s`],
  [`Count to ten slowly`,'WIS 9 resist',`One... two... three... By ten the flickering stops. You have not run.`,`xp+s mp+2`,`You reach seven before you lose count. But you still stay.`,`xp+s`],
  [`Hold a friend's hand`,'',`A warm hand in a cold house makes everything feel smaller.`,`xp+s mp+2`,'','','anyally'],
  [`Keep your eyes forward and walk on`,'',`You do not look at the lamp. After a few steps, it stops flickering.`,`xp+s`]]],
['cg_house',`The Cold Spot`,'🥶',`There is one place in the corridor where the air turns icy, as if a freezer door has been opened. Your breath comes out in a small cloud. The skin on your arms rises in goose-bumps.`,[
  [`Walk through it quickly`,'CON 9 endure',`Brrr! You step through and out the other side. The air warms again almost at once.`,`xp+s`,`It chills you to the bone for a moment, and you hurry on, teeth chattering.`,`hp-1 xp+s`],
  [`Speak politely: "Excuse us, we're just passing"`,'WIS 9 spirit',`The cold lifts a little, like a hand lowered. Something, perhaps, nods.`,`xp+m flag:cg_respect mp+2`,`Nothing answers. But you feel better for saying it.`,`xp+s`],
  [`Go around another way`,'',`A longer way, but warmer.`,`xp+s`]]],
['cg_house',`Wind Chimes`,'🎐',`A string of old shell wind-chimes hangs in the doorway. They tinkle softly, though the air is perfectly still. The tune they make is almost a song.`,[
  [`Listen closely`,'WIS 10 spirit',`The chimes make the rhythm of the lullaby. It is a slow, rocking, waves-on-a-boat sound. You hum along softly.`,`xp+m flag:cg_lullaby mp+2`,`Just a tinkle. But pretty.`,`xp+s`],
  [`Touch them to stop the sound`,'',`They fall silent at once. The silence is heavier than the song.`,`mp-1 xp+s`],
  [`Walk beneath them quickly`,'',`The chimes whisper as you go.`,`xp+s`]]],
['cg_house',`The Rocking Chair`,'🪑',`In an alcove, an old rocking chair is moving by itself: creak... creak... creak... Nobody is in it. A shawl lies across its back, folded neatly.`,[
  [`Say a polite hello to the chair`,'WIS 9 spirit',`The chair slows, then stops, as though the person in it is listening. A faint smell of old jasmine drifts by.`,`xp+m flag:cg_respect mp+2`,`The chair keeps rocking. You decide to leave it alone.`,`xp+s`],
  [`Back away without touching anything`,'',`Creak... creak... The sound follows you for three steps, and then stops.`,`xp+s`],
  [`Sit in it for a moment`,'',`The chair goes absolutely still. A cold finger traces down your back. You jump up at once. Not a good idea.`,`hp-2 mp-2 xp+s`]]],
['cg_house',`The Whispering Corridor`,'🗣️',`Along the corridor, tiny whispers float out of the walls like moths: "Stay... stay... stay with us..." It is not exactly scary. It is more like being invited to a very long sleepover.`,[
  [`Whisper back: "I have to go home soon"`,'WIS 10 resist',`The whispers hush at once, a little embarrassed. A soft sigh. They let you pass.`,`xp+m mp+2`,`The whispers get softer and sleepier. You blink hard and keep walking.`,`mp-2 xp+s`],
  [`Block your ears and hum a song`,'',`You hum a pop song at the top of your lungs. It is very silly. It works.`,`xp+s mp+1`],
  [`Put on glow bracelets`,'',`The soft light chases away the sleepy feeling.`,`xp+s mp+3`,'','','item:cg_glowband']]],
['cg_house',`Portraits with Eyes`,'🖼️',`A row of old family portraits hangs along the wall. You are almost sure their eyes follow you as you pass. In one, a small girl holds a toy boat.`,[
  [`Study the portrait of the girl`,'INT 9 lore',`A brass plate beneath it reads: "Mei, aged 7." The painted boat has a red sail. You remember the wooden boat from the photograph.`,`xp+m flag:cg_knows_names`,`The painting is too dark to read. But the girl is smiling.`,`xp+s`],
  [`Look away and walk quickly`,'',`The eyes seem to follow for a few steps and then give up.`,`xp+s`]]],
['cg_house',`Tiny Wet Footprints`,'👣',`A line of tiny wet footprints crosses the floor, glistening in your torchlight — as if a small child has just come in from the sea. They lead toward the stairs.`,[
  [`Follow the footprints`,'DEX 9 sneak',`They lead you quietly toward the stairs. You hear a very small giggle ahead. It does not sound unkind.`,`xp+m`,`You step on one and it vanishes. The trail cuts off.`,`xp+s`],
  [`Step carefully around them`,'',`You do not want to be rude to anyone's footprints.`,`xp+s flag:cg_respect`]]],
['cg_house',`Music Box in the Dark`,'🎵',`From somewhere deeper in the house comes the faint ting-ting-tinkle of a music box. It plays a few notes, stops, then starts again, as if the winding is slow. The tune is soft and sad.`,[
  [`Listen and memorise the tune`,'INT 10 lore',`It is a rocking, rolling lullaby with a gentle swing, like waves. You hum it back and remember it.`,`xp+m flag:cg_lullaby`,`It slips away. But you remember the feeling.`,`xp+s`],
  [`Cover your ears`,'',`It fades when you stop listening.`,`xp+s`]]]
]);
})();
