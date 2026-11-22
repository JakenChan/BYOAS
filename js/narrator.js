/* THE NARRATOR — gives every story more of a storyteller's voice.
   Between scenes it adds a short passage of place, mood, companions and the quest thread ("bridge"),
   and after a choice it adds a line of feeling ("reflection"). Players can switch it off in Settings (Quick mode). */
(function(){
const G = globalThis.G;
G.narrOn = true;
const N = G.narr = {};

/* ------------------------------------------------------------------ places: sensory lines by kind of place */
const SENSE = {
changi: {
 home: [
  `The block hums around you the way it always does: a washing machine rumbling somewhere, a radio murmuring in Hokkien, the lift groaning its slow way up and down.`,
  `The air smells of old rain, floor polish and somebody's frying garlic, the plain, familiar smell of home that you only notice when you stop to breathe it in.`,
  `Down the corridor a neighbour's wind-chime clinks against the grille, and the light lies in long, dusty stripes across the floor.`,
  `Laundry poles stick out of the windows like flags, and each one flaps its own small, ordinary story in the heavy, humid wind.`,
  `A cat stretches on the stairwell landing, utterly unbothered by the strange weight you have been carrying around all week.`,
  `The lift lobby smells of detergent and mosquito coil, and somewhere above you a child is practising the recorder, badly and with great determination.`,
  `From the next block a burst of television laughter spills across the gap, as though the whole world were having a much easier week than you.` ],
 school: [
  `The ceiling fans turn their slow, tired circles, chalk dust and whiteboard-marker drift on the air, and the whole building hums with a hundred small, scraping chairs.`,
  `Everything seems to move a little slower today: the clock, the fans, even the tired voices drifting out of the other classrooms.`,
  `Sunlight slants through the louvres in warm stripes, lighting up the dust and the scuffed lines of the floor, and somewhere down the corridor a teacher is saying "Quiet, please" for the third time.`,
  `The smell of floor polish, erasers and other people's packed lunches hangs in the air, the particular smell of school, which you only notice when you are thinking about something else.`,
  `A bell rings somewhere, and a wave of noise rises and falls and rises again, and for a moment, the ordinary rush of school almost makes you forget.`,
  `Outside the window, the field shimmers in the heat, and a lone figure is running laps, small and stubborn and entirely alone.` ],
 eatery: [
  `The kopitiam is a clatter of cups and saucers, ceiling fans and uncles in singlets arguing amiably over the newspaper, and the air smells of toast, coffee and frying shallots.`,
  `Steam rises from the stalls in lazy ribbons, and somewhere a cleaver thuds a steady, comfortable rhythm into a chopping block.`,
  `A radio is playing an old Mandarin song, soft and a little crackly, and the whole hawker centre seems to hum along, off-key, between mouthfuls.`,
  `Plastic stools scrape, a tray clatters, a stallholder bellows an order number, and the whole place smells like every good meal you have ever had.`,
  `Under the whirring fans, families bend over their bowls, and for a moment the world seems very simple: hunger, heat and something good to eat.` ],
 green: [
  `Rain trees arch over the path, heavy with ferns, and the cicadas scream in them like a roomful of tiny, rusted machines.`,
  `A jogger pants past, an auntie in a visor waves her tai chi fan, and a squirrel races up a trunk, chattering its opinion of everybody.`,
  `The grass is cropped short and greener than seems possible, and the breeze that comes across it carries a smell of wet earth and distant rain.`,
  `Sunlight comes down through the leaves in coins, and a long-tailed bird sits on a branch, giving you a thoroughly unimpressed look.`,
  `The path is dappled and warm, a few flowers are bright by the roadside, and somewhere a bicycle bell rings, bright and carefree, in the afternoon.` ],
 city: [
  `Crowds flow around you like a river, all elbows and shopping bags and half-heard conversations, and nobody notices a thing about you at all.`,
  `The air-conditioning breathes cold on your arms, and the bright, busy noise of the place makes your own worries feel very small, and very private.`,
  `Trains hiss, doors chime, announcements echo in four languages. Singapore is always in a hurry, and for a moment you almost forget to be.`,
  `A smell of coffee, roasting meat and warm bread curls out of the nearest food court, the kind of smell that makes you hungry before you know it.`,
  `Glass towers lean over the street, throwing back the sky in tidy squares, and under them the pavements shimmer with heat.`,
  `Somewhere nearby, a busker is playing something slow and sweet on a guitar, and a few strangers have stopped to listen without quite meaning to.`,
  `Umbrellas, lanyards, school bags, tourists with maps: every face that passes you is on its own small mission, and none of them is yours.`,
  `The pavement is still warm from the afternoon, and the street lamps are just beginning to blink on, one by one, along the road.` ],
 shore: [
  `A salt wind tugs at your sleeves, and behind it comes the long, slow sigh of the sea.`,
  `The casuarinas hiss overhead like a crowd of whispering people, and the sand under your shoes is cool and a little damp.`,
  `Far out on the water, a line of ships waits in the dusk, each one a tiny cluster of lights, patient as stars.`,
  `A plane slides low across the sky, so close you can read the writing on its belly, and then the roar fades and the quiet comes back, bigger than before.`,
  `The tide has left a ribbon of shells and weed along the shore, and a lone crab picks its way through them with enormous, comical dignity.`,
  `The smell here is salt, seaweed and distant charcoal smoke, the smell of the east of Singapore, and of every holiday you have ever had.`,
  `Gulls cry somewhere out of sight, and the water laps, and laps, and laps, the same small sound for a hundred years.`,
  `The light over the water has gone soft and gold, and everything it touches looks like a photograph from a long time ago.` ],
 sacred: [
  `Incense drifts through the air in slow grey ribbons, carrying the smell of sandalwood, burnt paper and old, patient prayers.`,
  `Red lanterns sway under the eaves, and the little flames in the oil lamps lean all together, as if listening to something you cannot hear.`,
  `A low murmur of chanting rolls out of the temple, steady as breathing, and the whole place seems to be holding a very quiet kind of attention.`,
  `The stones are worn smooth by a thousand feet, and every step you take feels like walking in somebody else's footprints.`,
  `Smoke from the burners curls up toward the roof tiles and thins into nothing, the way a wish does when you let go of it.` ],
 house: [
  `The house breathes around you: a soft creak in the beams, a sigh in the walls, as if the whole place were turning over in its sleep.`,
  `Old wood, damp stone and the faintest ghost of jasmine drift on the cold air, and your own breath is suddenly the loudest thing you know.`,
  `The mist moves along the floor in slow, pale tides, and the paper boats ride it like little ships on a very quiet sea.`,
  `Moonlight leans through the shutters in thin silver slats, and the shadows between them are deeper than shadows ought to be.`,
  `Somewhere above you, a floorboard settles. Somewhere below, something very small and very far away might, just might, be humming.`,
  `The dust hangs in the lamplight, undisturbed for decades, and your footprints are the only proof that anyone has been here at all.`,
  `The air is cold in a way that has nothing to do with the weather, a stillness that seems to lean in, politely, and wait to see what you will do.`,
  `The old clock ticks somewhere in the dark, steady and patient, counting down to something that has been waiting for a very long time.` ],
 default: [
  `The air is thick and warm, and everything is a little bit damp, the way it always is in Singapore.`,
  `Somewhere, cicadas have started up their endless, rattling hum, and the whole afternoon seems to lean into it.`,
  `A breeze stirs the leaves, brings a trace of rain on the way, and carries it off again without delivering a single drop.`,
  `The sky is that particular heavy, glowing grey that means a storm is thinking about it, and has not yet decided.`,
  `Nearby, somebody laughs, a short, bright sound that lifts, and fades, and leaves the place feeling a little warmer than before.`,
  `The world goes on, busy and ordinary, around the one extraordinary thing that you alone are carrying.` ]
},
greek: {
 modern: [
  `Rome hums around you, engines, voices, the clink of coffee cups, and the sun is warm on the old stone, as if nothing in the world could ever go wrong.`,
  `The air smells of espresso, warm bread and hot pavement, and you feel an easy, holiday sort of happiness that you will remember later, with a lump in your throat.`,
  `Somewhere a Vespa buzzes past, somebody laughs in rapid Italian, and the city goes on, glorious and untroubled, being two thousand years old.`,
  `Everything feels ordinary, bright and safe, which, you will think later, is exactly how a last good day always feels.` ],
 shore: [
  `The sea is a deep, old blue, very different from the one you remember, and the air smells of salt, thyme and warm stone.`,
  `Gulls wheel overhead, and the surf drags itself up the sand and falls back with a long, hushing sigh, as it has done since before there were names for anything.`,
  `The light here is astonishing, clean and gold and sharp-edged, and every rock, every leaf and every wave stands out as though it had just been painted.`,
  `A warm wind carries the scent of wild herbs down from the hills, and somewhere in the distance a goat-bell tinkles, small and unhurried.`,
  `The water slaps against the hull, and the horizon is a pale, shimmering line that seems to promise either a miracle or a storm.`,
  `Sunlight skips across the waves in a thousand bright coins, and for a second you forget how very far from home you are.` ],
 city: [
  `Athens roars with life: hawkers calling, carts rattling, sandals slapping the stone, and above it all the white temple on the hill, bright against the blue.`,
  `The smell of olive oil, charcoal smoke and fresh bread drifts through the narrow streets, and every doorway seems to hide a different argument, or a different song.`,
  `Marble and sunlight, dust and noise, and everywhere the sound of Greek, quick and musical, that you somehow, impossibly, understand.`,
  `Pigeons burst from the rooftops, a donkey brays at the end of the lane, and a potter's wheel hums softly from a shady doorway: the ordinary music of a city that thinks it will last for ever.`,
  `Citizens argue on every corner, hands flying, voices raised, delighted to disagree, as if the whole city were one long, loud, beautiful debate.` ],
 holy: [
  `A hush lies over this place, deeper than silence, as though the stones themselves were listening for something just beyond your hearing.`,
  `Laurel leaves rustle on the slope, and a thin silver mist drifts up from the cleft in the rock, smelling faintly sweet, and very old.`,
  `Mountains rise on every side, grey and gold in the light, and the air is thin and clear, and every sound carries.`,
  `Here the world feels thinner, as though the border between the mortal and the divine were no more than a curtain stirring in a draught.`,
  `Offerings crowd every ledge, honey-cakes, flowers, little bronze figures, and each one is somebody's hope, left in the sun to wait.` ],
 under: [
  `The air is cold and windless and tastes of old stone. Somewhere far off, water moves, slowly, in the dark.`,
  `Pale shapes drift at the edge of your sight, and the silence has a weight to it, as if every sound had long ago given up and gone to sleep.`,
  `There is no sun here, no wind, no weather: only a grey, patient stillness, and the soft, endless whisper of the dead.`,
  `Your footsteps do not echo. Even the dark seems to hold its breath, politely, to let you pass.` ],
 forge: [
  `Heat rolls over you in thick, shimmering waves, and the air smells of iron, sulphur and hot stone. Somewhere ahead, a hammer rings, steady as a heartbeat.`,
  `Sparks spray and die like short-lived stars, and the whole cavern glows orange, red and gold, as if the mountain had a fever.`,
  `Chains clink, bellows breathe, and every surface is stained black with soot and shining with ember-light.` ],
 sky: [
  `Everything here is too bright, too clean, too perfect: white marble, gold light and clouds so thick that they look like fallen snow.`,
  `The air hums with a thousand unseen voices, laughter, music, thunder muttering low, and over it all the unmistakable sense of being watched by someone very old, and very powerful.`,
  `Nectar trickles in the fountains, gold dust drifts on the wind, and you feel like a small, dusty, mortal smudge on a very beautiful painting.` ],
 gorgon: [
  `Stone figures crowd the shore, silent and grey, and the wind sighs through them with a sound very much like grief.`,
  `Nothing moves here, nothing sings, not even the gulls. The sea laps, quietly, as if afraid to wake something.`,
  `Every statue looks as though it had been about to speak, and the air is thick with all the things that never got said.` ],
 rural: [
  `Olive trees stand in rows on the hillside, silver and green, and the cicadas scream in them like tiny rusted machines.`,
  `The road is white with dust, the sky is huge and pale, and the smell of thyme and warm goat hangs over everything.`,
  `A shepherd's pipe wavers somewhere on the slope, thin and sweet, and the heat makes the whole valley shimmer like water.`,
  `Stone walls, ripening figs, a slow stream and the endless gold of the afternoon: a landscape that looks as though nothing in it has changed in a thousand years.` ],
 default: [
  `The light is bright, the air is warm, and the world feels both enormous and astonishingly close, as it does when you are very far from home.`,
  `Somewhere in the distance, a bell, a bird, a faint song. You have the strange feeling of walking through a story that was written long before you arrived.`,
  `A dry, warm wind lifts the dust, smelling of thyme and sun and something faintly like woodsmoke.`,
  `The sun has swung a little lower, and the long shadows stretch out in front of you like arrows pointing the way.` ]
},
ashen: {
 green: [
  `The wind combs through the grass in long, silver waves, and the whole wide country seems to breathe out around you.`,
  `Birdsong, bees and the slow creak of branches: the ordinary music of the green world, which seems, today, almost impossibly gentle.`,
  `The path runs ahead between hedgerows crowded with bramble and dog-rose, and the whole country smells of wet earth, wild garlic and woodsmoke.`,
  `Light falls through the branches in slow, uneven columns, and a thousand motes turn in it like tiny, drifting stars.`,
  `A stream chatters over stones nearby, cold and clear and endlessly busy, and the sound of it is somehow both a comfort and a reminder of how far you have come.`,
  `Cart-ruts, cattle-bells, smoke from a distant chimney: it is a kind land, you think, and it does not know what is coming.` ],
 high: [
  `The air is thin and sharp, and your breath smokes in front of you. All around, the peaks rise, white and silent, indifferent to everything.`,
  `Wind howls through the passes with a sound like distant voices, and the cold finds every gap in your cloak and settles there like an unwelcome guest.`,
  `Below, the world is a pale, far-off map of fields and rivers; above, the sky is a hard, brilliant blue that makes your eyes ache.`,
  `Snow squeaks underfoot, and every sound is swallowed by the vast, soft quiet of the mountains, until your own heartbeat seems rude.` ],
 fen: [
  `Mist coils up from the black water in slow, ghostly ribbons, and the air smells of rot, peat and something sweeter and worse beneath.`,
  `Frogs croak in the reeds, something plops in the dark water and every step squelches, as though the ground itself were reluctant to let you go.`,
  `Pale lights drift over the fen, flickering and kind-looking. You have been warned about them, and you are, grimly, very careful not to look.`,
  `Everything here is damp, grey and slow, and even the light seems to have given up halfway and sunk into the mud.` ],
 dry: [
  `The sun beats down like a hammer, and the heat shimmers off the sand in waves, making every dune a ripple of molten gold.`,
  `Grit crunches between your teeth, the wind hisses over the crests and the sky is a hard, pitiless blue, without a single cloud to hide behind.`,
  `Distances lie here: a ridge that looks an hour away is half a day, and a pool that glitters at the edge of sight is only more sand.`,
  `Night comes quickly in the desert, and with it a deep, bone-biting cold, and a sky so crowded with stars that it seems to hum.` ],
 sea: [
  `Gulls wheel and shriek overhead, and the whole world smells of salt, tar and fish, with the creak of rope and timber behind it all.`,
  `The sea heaves under a heavy sky, grey as an old blade, and the wind drives long, cold spray into your face.`,
  `Masts bob in the harbour like a forest of bare trees, and sailors shout in a dozen accents, laughing, swearing, and singing all at once.`,
  `Waves boom against the rocks, pull back with a long, wet roar, and gather themselves for another try, patient and relentless as grief.` ],
 under: [
  `The dark presses in thick and close, and your torchlight makes a small, trembling room in it. Water drips somewhere with slow, maddening patience.`,
  `The air is cold, damp and heavy with the smell of stone and old, forgotten things. Every footstep echoes a moment too long.`,
  `Far below, something shifts and settles, and a thin, hollow breath of wind drifts up, as though the earth itself had turned over in its sleep.`,
  `Crystal veins glimmer in the walls, faint and cold as frozen starlight, and for a moment, the dark seems almost beautiful.` ],
 indoors: [
  `Torches gutter in iron brackets, throwing long, shifting shadows across the stone, and the air smells of woodsmoke, wet wool and old, honest food.`,
  `The place is loud with voices, the clatter of cups, the scrape of benches, a fiddle somewhere, and underneath it all, the low, restless murmur of people who have heard bad news.`,
  `Dust lies thick on every shelf, and the light that slants through the narrow windows is yellow and tired, the colour of old parchment.`,
  `Boots echo on flagstones, banners hang limp on the walls, and everything seems to be waiting for someone to speak.` ],
 burnt: [
  `Ash drifts down like grey snow, softening every edge and muting every sound, and the sky above is the colour of a bruise.`,
  `The ground is scorched and glassy, and the air tastes of cinders and old fire. Nothing grows here. Nothing, you think, has dared to for a very long time.`,
  `A red glow pulses on the horizon, slow and sullen, like a great, patient eye that has not yet decided whether to close.`,
  `Skeletal walls rise out of the ash, their windows empty as eyes, and the silence has a weight to it, the silence of a place where something terrible has finished happening.` ],
 camp: [
  `The fire crackles and pops, throwing sparks up into the dark, and its small warm circle feels like the only safe place in the whole wide world.`,
  `Smoke, wet leather and the faint sweetness of burning pine: the smell of a camp, and, somehow, of every camp you have ever slept in.`,
  `Beyond the firelight the night is enormous, full of rustlings and small cold sounds, and you inch a little closer to the flames.` ],
 village: [
  `Smoke rises straight from forty chimneys, thin and grey in the cold, and the whole village smells of woodsmoke, wet thatch and the sour, comforting tang of the cattle-byre.`,
  `Frost furs every gatepost and fence-rail, and your breath hangs in front of you in little clouds, as though you were already half a ghost.`,
  `A dog barks, a door bangs, a woman calls for her children, small sounds in a very small world, and you know every one of them by heart.`,
  `The lane is rutted with ice, and the pump handle is furred with white, and the light in the east is thin and pale and slow.`,
  `Hearth-light glows orange behind the shutters, and somewhere a grandmother is telling the old story for the hundredth time, in the very same voice.`,
  `The village is quiet in the way that only a place of forty hearths can be quiet: not empty, merely waiting, patient, wrapped up against the dark.` ],
 town: [
  `The streets of Brindlecross are loud with carts, bells and the arguments of a thousand strangers, and the smell of the place is ink, horse, hot bread and river-mud.`,
  `Bells from a dozen towers overlap and fall out of step, and somewhere above the roofs, a flock of pigeons rises, turns and settles again.`,
  `Cobbles shine from the morning rain, and apprentices run past with trays and messages, shouting apologies over their shoulders.`,
  `The city has a thousand stories, and from where you stand, you can hear a few of them, murmured behind shutters and shouted across the market.`,
  `Smoke from the foundries stains the sky a dull gold, and under it, the whole noisy, patchwork city goes on about its business, indifferent to your private weather.` ],
 default: [
  `The road stretches ahead, patient and indifferent, and the whole wide world goes on being large around you.`,
  `The wind shifts, carries a hundred smells, wood-smoke, wet leaves, horse and iron, and sets them down again, somewhere far behind.`,
  `Light, shadow, and the soft, endless scuff of your own boots: the music of a long journey.`,
  `The land is quiet, and in the quiet, you can hear your own thoughts, which are, perhaps, a little louder than you would like.` ]
}
};
const WXL = {
 rain: [ `Rain falls steadily, soft and grey, beading on every surface and running in thin, cold lines down the back of your neck.`, `The rain drums on every roof and leaf and stone, a long, patient sound that seems to be saying the same thing over and over.`, `Everything is wet and dim and dripping, and the world has shrunk, as it does in rain, to the few yards you can see.` ],
 storm: [ `Thunder rolls across the sky like a great stone being dragged over a floor, and the wind snatches at your clothes with angry, flapping hands.`, `Lightning flickers, shows you the whole world for an instant, white and stark and shivering, and then plunges it back into dark.`, `The storm has teeth tonight, and you feel every one of them in the rain that stings your face.` ],
 snow: [ `Snow drifts down in big, slow flakes, muffling every sound, and the whole world has been wrapped in white cloth.`, `The cold bites at your fingers and nose, and your boots squeak on the crust, and everything is very quiet, and very bright.` ],
 fog: [ `Fog lies thick over everything, soft and cold and blind, and shapes loom out of it, and dissolve, and loom out again.`, `The world has shrunk to a grey circle around you, and every sound seems to come from somewhere else.` ],
 wind: [ `A wild wind keeps pulling at your clothes and hair, and carries the smell of dust and distant rain over the land.`, `The wind will not leave you alone: it shoves, whistles, slaps and sings, and you walk with your head bent into it.` ],
 sandstorm: [ `The air is thick with flying grit, and the world is a roaring, orange blur, and you narrow your eyes to a slit and walk by feel.` ],
 ashfall: [ `Ash falls steadily, soft as snow and twice as sad, and lies grey on your shoulders, in your hair, on your tongue.` ],
 heat: [ `The heat sits on the world like a hand, heavy and damp, and every breath is thick and slow.`, `The air shimmers and everything wobbles in the glare, and the thought of shade is as sweet as the thought of water.` ]
};
const CHAPGROUP = { ashen: { act1:'village', act2:'town', act3:'town' } };
const GROUP = {
 changi: { hdb:'home', void:'home', classroom:'school', mall:'city', mrt:'city', hawker:'eatery', town:'city', skyline:'city', jewel:'city', supertree:'city', beach:'shore', pier:'shore', park:'green', meadow:'green', forest:'green', temple:'sacred', bungalow:'house', haunt:'house', night:'house' },
 greek: { colosseum:'modern', cabin:'modern', town:'modern', skyline:'modern', mall:'modern', wreck:'shore', coast:'shore', beach:'shore', sea:'shore', pier:'shore', agora:'city', acropolis:'city', oracle:'holy', mountain:'holy', ruins:'holy', temple:'holy', underworld:'under', cave:'under', forge:'forge', olympus:'sky', throne:'sky', gorgon:'gorgon', village:'rural', meadow:'rural', park:'rural', forest:'rural' },
 ashen: { meadow:'green', village:'green', forest:'green', park:'green', river:'green', mountain:'high', snow:'high', swamp:'fen', desert:'dry', coast:'sea', sea:'sea', pier:'sea', cave:'under', dungeon:'under', interior:'indoors', castle:'indoors', town:'indoors', throne:'indoors', ashlands:'burnt', tower:'burnt', ruins:'burnt', camp:'camp' }
};

/* ------------------------------------------------------------------ the quest thread, by stage of the story */
const THREAD = {
changi: [
 [ `Somewhere in all this, there is an empty seat in Primary 5, and a boy called Aiman who has not come home.`,
   `Part of your mind keeps drifting back to Aiman: his football jersey, his loud laugh, the way his chair now sits so quietly empty.`,
   `You cannot shake the feeling that something is watching and waiting at the end of the beach road, patient as the sea.`,
   `Every grown-up says the same gentle, useless thing, that Aiman will turn up. You are not at all sure they believe it.` ],
 [ `Madam Soo's sad, polite voice keeps coming back to you: bring me something. A boat, a light, a song.`,
   `You think of a little girl called Mei, somewhere in that white house, still waiting for someone to bring her toy boat home.`,
   `The lullaby plays in your head again, the same few soft notes, round and round, like a thread you are only just beginning to follow.`,
   `Aiman is still asleep in a house that should not exist, and every day you waste is another day he is lost.` ],
 [ `The house is waiting for you, and you can feel it, steady and quiet, like a held breath at the end of a very long street.`,
   `Boat, light, song: you turn the three words over and over, wondering whether you have gathered enough, or ever could.`,
   `Your hands remember the cold gate and the creak of the veranda steps, and a small, brave part of you wants to go back right now.`,
   `You think of Madam Soo's tired eyes and Mei's small voice, and your heart is heavier, and also somehow lighter, than before.` ] ],
greek: [
 [ `In your pocket, a stopped watch still reads 16:47, and somewhere out on the shore, a plane full of sleeping strangers hangs in a golden hush.`,
   `You keep seeing the frozen faces in the wreck: a child with a toy, an old couple holding hands, all of them waiting, trusting you do not take too long.`,
   `A woman's laughter echoes in your memory, bright, delighted and utterly without kindness, and the hairs on your arms lift all over again.`,
   `Home is a very long way off, and farther than any road can measure, since it lies not across the sea, but across twenty-five centuries.` ],
 [ `Eris's laughter, Hermes's bare feet, a cracked hourglass spilling its sand upward: the pieces of the puzzle rattle round your head, refusing to fit.`,
   `Three things, the Oracle said, and a thread. A sandal in the sea, a sandal in a gaze of stone, a glass in the dark. You hold the list in your mind like a lantern.`,
   `Every hour in this world is an hour the golden light grows thinner, and the passengers who trust you sleep on.`,
   `You think of home, the hum of an engine, the click of a seatbelt, a cup of terrible airline coffee, and you would give almost anything for it.` ],
 [ `The hour of the crash is closer than ever, and you have never before been so aware of the exact, precious weight of a single minute.`,
   `Your thread is tangled in the loom of the Fates, and the thought is both terrifying and, oddly, steadying. You know now what you are carrying.`,
   `You rehearse it again and again: the watch, the seat, the minute before the light. There will be only one chance to say it right.`,
   `Home is almost within reach, and you find, to your surprise, that you are going to miss this impossible, magnificent place.` ] ],
ashen: [
 [ `Beyond the horizon, in a country you have only ever heard about in stories, a woman of ash sits in a tower and waits.`,
   `There is a small, old ember inside you, and some nights it burns brighter, as though it knew a name that you have not yet been told.`,
   `Your whole life so far has been small and quiet, and some part of you listens, uneasily, for the first sounds of something much larger.`,
   `The stories always begin the same way: with a winter, a fire, and a child who did not yet know what she would become.` ],
 [ `The Silver Lantern burns on your shoulder, and with it the weight of a promise: to carry the light north, and face what waits in the dark.`,
   `The road ahead is long, and the Tower of Cinders is somewhere at the end of it, patient as a held breath.`,
   `You think of the kingdom of Aurelon, burned to cinders thirty years ago, and of the little that is left of it, and your hands tighten on your pack.`,
   `Whatever you have gathered so far, whatever you have learned and lost, it will all be weighed, in the end, on the last stair.` ],
 [ `Rumour follows you now, whispering from town to town: the Veil is spreading, the Ash is falling, the Queen is awake.`,
   `The names of the dead of Aurelon drift through your thoughts, and you wonder what the Queen was, before she became the thing that burned them.`,
   `Somewhere in the north the sky is the colour of old iron, and you can feel it, even from here, like a bruise on the edge of the world.`,
   `You count the Company by the fire in your mind, who is with you, who has been lost, and who is still to be tested, and your chest tightens.` ],
 [ `The Tower is close now, close enough that you can feel the Veil on your skin, a grey weight, like a hand pressed flat against your heart.`,
   `You think of everyone who gave you something on this road, a blessing, a blade, a name, and hold it close, like a coal.`,
   `There will be no turning back after this, and some part of you, brave and frightened in equal measure, is almost glad.`,
   `Whatever waits at the top of the stair, you are ready, or as ready as anyone can be, which is to say: not at all, and enough.` ] ]
};

/* ------------------------------------------------------------------ companions */
const ALLY = {
 cg_priya: [ `Priya walks beside you, notebook clutched to her chest, murmuring facts under her breath as other people hum.`, `Priya pushes her glasses up her nose and gives you a small, fierce nod: whatever happens, she will have it written down.`, `Priya's quick, clever eyes keep darting everywhere, as though the whole world were a puzzle she had decided to solve before dinner.` ],
 cg_hakim: [ `Hakim has his hands in his pockets and his chin up, doing a very good impression of someone who is not at all afraid.`, `Hakim bounces on his toes beside you, restless as ever, and then, when he thinks nobody is looking, glances back over his shoulder.`, `Hakim's easy grin has gone a bit thin, but he is still here, shoulder to shoulder with you, and that counts for a great deal.` ],
 cg_jiahui: [ `Jia Hui talks louder than usual, a sure sign she is nervous, and her hand has found a fold of your sleeve without either of you mentioning it.`, `Jia Hui rolls her eyes at everything, but she keeps edging closer, and her fingers keep checking that you are still there.`, `Jia Hui is humming something tuneless under her breath, and you realise, with a small rush of warmth, that she is doing it to keep both of you brave.` ],
 cg_mochi: [ `Mochi trots a few paces ahead, tail up, ears swivelling, stopping now and then to stare hard at nothing you can see.`, `Mochi pauses, sniffs the air, and flicks her tail with the calm of a creature who knows more about the world than she lets on.`, `Mochi presses against your ankle for a moment, warm and solid, then pads on, as if to say: this way.` ],
 gr_elena: [ `Elena strides beside you in her sensible shoes, muttering Homeric epithets as she goes, as if the whole world were a lecture she is finally allowed to give.`, `Elena keeps stopping to touch walls, pottery, doorframes, with a look on her face like someone meeting a lifelong hero.`, `Elena's hand finds your arm, light and steady, and for a moment you realise she is as frightened as you are, and twice as determined.` ],
 gr_mara: [ `Mara walks with a pilot's easy balance, eyes scanning, hands loose, always, quietly, looking for the next thing that might go wrong.`, `Mara gives the sky a long, level look, the way a person looks at an old friend who has just betrayed her, and mutters something short and un-Greek.`, `Mara's jaw is set, her scarf is knotted tight, and you can tell that she is counting passengers in her head, the way she must have counted them on the plane.` ],
 gr_niko: [ `Niko skips ahead, crook swinging, narrating the whole world to his goats with great seriousness, and you find yourself smiling despite everything.`, `Niko keeps glancing at you out of the corner of his eye, with the wondering look of a boy who has decided you are the most exotic thing he will ever see.`, `Niko hums a shepherd's tune, thin and sweet, and the ordinary sound of it feels like a hand on your shoulder.` ],
 gr_glaux: [ `Glaux rides your shoulder, preening, and offers an unsolicited opinion on your posture, your pace and your general lack of wisdom.`, `Glaux turns his head all the way round, with a small click, and fixes you with eyes the size of coins. "You are walking wrong," he says.`, `Glaux's talons tighten on your shoulder, a small, fierce reminder that someone, at least, is on your side.` ],
 aldric: [ `Aldric rides at the head of the line, straight-backed and silent, his old scars pale in the light, and you feel, as always, safer for his presence.`, `Aldric's gaze sweeps the road ahead with the long, steady care of a man who has buried too many of his friends, and does not intend to bury any more.`, `Aldric catches your eye, nods, once, and says nothing at all, which, from him, is practically a speech.` ],
 mira: [ `Mira drifts along beside you with her hood up and her hands in her sleeves, making a small joke out of every worry, and you love her for it.`, `Mira's quick eyes dance from doorway to window to shadow, always noticing, always counting exits, always, somehow, smiling.`, `Mira hums a rude little song under her breath, and you realise she does it only when she is truly frightened.` ],
 osric: [ `Brother Osric limps along with his hand on his bad knee, murmuring a blessing for every stranger who passes, and every stray thing that crosses your path.`, `Osric's kind, tired face turns toward you, and he smiles, as though to say: whatever comes, we will meet it together.`, `Osric's lips move silently, a prayer, or a recipe, or both, and the small, steady sound of it is oddly comforting.` ],
 ysolde: [ `Ysolde walks with her chin up and a faint scorch-mark on her cuff, scowling at the world as if it had personally disappointed her.`, `Ysolde's fingers twitch now and then, shaping half-formed spells in the air, and she mutters at them, like a gardener at weeds.`, `Ysolde glances at you sideways, sharp and curious, and for a moment the prickliness drops away, and you see how young she is.` ],
 tamsin: [ `Tamsin slips through the undergrowth beside you as silently as a deer, her bow loose in her hand, her eyes reading a hundred small signs you cannot see.`, `Tamsin lifts one finger, listens, and then, without a word, drops her hand: nothing yet. You breathe out.`, `Tamsin's silence is a comfortable one, the silence of someone who would rather listen to the world than talk over it.` ],
 biscuit: [ `Biscuit trots at your heel, tongue lolling, tail waving like a flag, utterly certain that the whole adventure was arranged for his personal entertainment.`, `Biscuit presses his warm, scruffy body against your leg and sighs the long, content sigh of a dog who has found where he belongs.`, `Biscuit stops, sniffs, wags, and then plunges on, ears flapping, having decided that everything is, in the end, going to be fine.` ],
 goose: [ `Sir Honks stalks along at your side, neck out, glaring at everything that moves, a small, feathered monument to unreasoning loyalty.`, `Sir Honks gives a low, warning hiss at a passing bush, and the bush, wisely, does not argue.`, `Sir Honks settles briefly against your boot, still glaring at the world, but warm, and yours.` ],
 garrick: [ `Garrick walks a half-step behind, jaw set, trying very hard to be the kind of man he thinks you deserve.`, `Garrick keeps checking his sword, his straps, his shield, the nervous tidy rituals of someone who badly wants to do things right.`, `Garrick catches you looking, flushes, and straightens up, and you realise how much it still matters to him to be trusted.` ],
 grum: [ `Grum stomps along with his axe on his shoulder, beard bristling, grumbling steadily in Dwarvish about the quality of the road, the weather and the general softness of surface-dwellers.`, `Grum taps the ground with the butt of his axe, listens, and nods, satisfied, as though the stones had told him a secret.`, `Grum's gruff voice drops, for a moment, to something almost gentle. "We'll get through this, lass," he says, and strides on.` ],
 kestrel: [ `Kestrel wheels overhead, a small brown cross against the sky, and every so often her thin cry drifts down like a bell.`, `Kestrel lands on a branch ahead, shakes out her feathers, and watches you with a bright, fierce, patient eye.`, `Kestrel's shadow slides across the road, quick and light, and you feel somehow watched over.` ],
 default: [ `{a} walks beside you, quieter than usual, and you are surprised by how much that steady presence helps.`, `{a} glances across at you and gives a small, tired smile, the kind that says: we are in this together.`, `{a} matches your pace, step for step, and neither of you says what both of you are thinking.`, `{a} hums a few notes under their breath, and then, embarrassed, stops. You find that you were rather enjoying it.` ]
};

/* ------------------------------------------------------------------ echoes of the last choice, and how the body feels */
const ECHO = {
 fail: [ `The sting of that stumble is still with you, hot in your cheeks and heavy in your chest.`, `You turn the mistake over in your mind, again and again, the way a tongue keeps finding a sore tooth.`, `It did not go the way you hoped, and the disappointment sits in you like a small, cold stone.`, `You tell yourself it was only one failure, and that tomorrow is another day, though it does not feel quite true yet.`, `A little of the shine has gone off your confidence, and you carry the rest of it more carefully.` ],
 win: [ `A small, bright spark of pride is still warm in your chest from that last success.`, `You are still smiling a little at how that turned out, and you let yourself, just for a moment, enjoy it.`, `Whatever else happens, you did that right, and the memory of it steadies your hands.`, `Something has settled in you after that: not boldness, exactly, but the quiet, welcome feeling of knowing you can do it.` ],
 risk: [ `You make a quiet promise to yourself to be warier of things that look this easy.`, `You should have known. The thought is not kind, but it is, you suspect, useful.`, `A lesson, then, paid for in full, and you tuck it away carefully, as you would a coin you do not intend to lose again.`, `You catch yourself wondering what else, in this world, is not quite what it seems.` ],
 quizok: [ `Your mind feels sharp and bright, the way it does when a hard thing suddenly clicks into place.`, `The answer still rings in your head like a small, clear bell.` ],
 quizbad: [ `The right answer keeps turning over in your head, and you promise yourself you will not forget it next time.`, `You wince a little, still hearing the answer you should have given.` ]
};
const BODY = {
 lowhp: [ `Every step aches. Your legs feel borrowed, and each breath comes with a small, sharp reminder of everything that has hurt you so far.`, `You are tired in a way that sleep alone will not fix, bruised, sore, and held up mostly by stubbornness.`, `Your hands shake a little when you stop moving, and the world seems very slightly too bright, and too far away.`, `The wounds are not deep, but there are enough of them, and you can feel the whole sum of them in every muscle.` ],
 hurt: [ `A dull ache has settled into you, a quiet, patient reminder of the day's mistakes.`, `You are scratched, bruised and a little sore, but still on your feet, and that will have to be enough.`, `You roll a stiff shoulder, wince, and keep going.` ],
 lowmp: [ `Your {mp} feels thin and frayed, like a rope worn down to its last few strands.`, `You are running low on {mp}, and every small fright now lands harder than the last.`, `Something has gone quiet inside you, a spark, a steadiness, and you find yourself reaching for it and not quite finding it.` ],
 strong: [ `For once, you feel good: rested, steady and ready, the kind of ready that makes you stand a little taller.`, `Your head is clear, your hands are steady, and the road ahead looks almost welcoming.`, `There is a spring in your step today, and you do not, just now, question where it came from.` ]
};

/* ------------------------------------------------------------------ reflections after a choice */
const REF = {
 hurtbig: { any: [ `The pain arrives all at once, white and blinding, and for a moment there is nothing else in the whole world.`, `Your breath goes out of you in a rush, and for a long, shaking moment you simply hold on and wait for the world to steady.`, `That one hurt. Properly hurt. You press a hand to the place, and feel your heart pounding in it.`, `Something in you goes very cold, and very clear: that could have been much worse.`, `You swallow a gasp, blink back sudden tears and force yourself, slowly, to straighten up.` ],
   changi: [ `Ow! Everything stings, and for a second your eyes sting too, but you blink hard and refuse to cry.`, `Your whole body goes hot, then cold, and your knees feel suddenly very wobbly.` ] },
 hurt: { any: [ `It stings, sharp and bright, and you hiss through your teeth.`, `You wince, and shake it off, and try to look like it did not hurt as much as it did.`, `A hot little flare of pain, and then, slowly, the dull throb that follows.`, `You bite your lip, flex your fingers and decide that you are, on the whole, still in one piece.`, `That is going to leave a mark. You file the lesson away, and the ache with it.`, `The hurt is small, but it takes some of the brightness out of the moment.` ] },
 sick: { any: [ `A slow, sour unease creeps through your body, and the world takes on a faint, unpleasant tilt.`, `Your stomach turns over, your head swims and every sensible part of you wishes you had chosen otherwise.`, `A cold, clammy wave rolls through you, and you realise, with a sinking feeling, that this is going to be a long day.` ] },
 itemlost: { any: [ `You feel the loss at once, an odd, hollow little tug where something useful used to be.`, `It is gone, and no amount of patting your pockets will bring it back.`, `You stare at the empty space for a moment longer than you need to, as if it might change its mind.`, `Well. That was useful, and now it is not yours, and that is simply how it is.` ] },
 itemgain: { any: [ `You turn the {item} over in your hands and tuck it away carefully, with the quiet pleasure of a person who has just got a little richer.`, `The {item} feels solid and real in your grip, and, absurdly, it makes the whole road feel a little less lonely.`, `You slip the {item} into your pack, wondering what, in time, it might turn out to be for.`, `A small thing, the {item}, but you hold it for a second as though it mattered. Perhaps it will.`, `You look at the {item} for a long moment. Somebody, somewhere, wanted you to have it, or possibly you simply got lucky.` ] },
 goldloss: { any: [ `The coins are gone, and so, you think, is a little of your ease.`, `You count what is left, and it does not take long.`, `A small, quiet pang: money is only money, but you earned every bit of it.` ] },
 goldgain: { any: [ `The coins clink pleasantly in your pocket, and you are conscious, for a second, of their small, reassuring weight.`, `You tuck the money away with a small, private smile. Every little bit helps.`, `The weight of it feels good, and you do not pretend otherwise.` ] },
 mploss: { any: [ `Something in you drains away, quietly, like water through cupped hands, and leaves your {mp} a little thinner than before.`, `Your nerve wobbles, and you take a slow breath, and try to find the place where your {mp} lives.`, `You feel a little smaller, and a little more alone.` ] },
 mpgain: { any: [ `Something warm and steadying rises in you, and you stand a little taller, and breathe a little easier.`, `A quiet courage settles round your shoulders like a cloak, a very small thing, and exactly enough.`, `You feel braver, not much, only a little, and it is a surprise to find how much that little weighs.` ] },
 win: { any: [ `That went well, and you allow yourself a small, satisfied nod.`, `Not bad at all. You feel your shoulders drop a little.`, `It works, and the small, quiet pleasure of that is out of all proportion to the thing itself.`, `A quick, bright thrill runs through you: you did it. You actually did it.`, `You breathe out, long and slow, and feel your whole body unclench.`, `It goes right, and the relief is so sudden that you almost laugh.`, `There is a quiet, private pleasure in a thing done well, and you let yourself have it.`, `Your pulse is still racing, but it is the good kind of racing now.` ] },
 fail: { any: [ `Well. That did not quite work, and you shrug it off, a little ruefully.`, `You will remember that one, and do it differently next time.`, `The moment slips through your fingers, and you are left holding the shape of what you meant to do.`, `It does not go well, and you know it before you are even finished: a small, sinking certainty in the pit of your stomach.`, `You wince. There are, you suppose, days like this.`, `For a heartbeat, you simply stand there, wishing you could have that one back.`, `You grit your teeth, and decide, stubbornly, that you will be better next time.` ] },
 lvl: { any: [ `Something clicks into place inside you, like a door opening on a room you did not know was there. You feel, quite clearly, that you are not the person you were a little while ago.`, `A strange, bright warmth moves through you, and with it the sense that you have grown, in some quiet and unmistakable way.`, `You take a slow breath and find that it goes a little deeper, and your hands feel a little surer than before.` ] },
 allyjoin: { any: [ `A small, warm weight settles in your chest: you are not walking this road alone any more.`, `You look at {a}, and {a} looks back, and something unspoken passes between you, the beginning of a friendship, or the start of a promise.`, `It is strange how much lighter the road feels when there is someone beside you. Strange, and very welcome.` ] },
 allylost: { any: [ `The place where {a} was is suddenly a great deal emptier than you were ready for.`, `You catch yourself turning to say something to {a}, and then remember, and the silence that follows is heavy and very long.`, `You will carry the gap where {a} was for a very long time.` ] },
 quiet: { any: [ `You let the moment settle, and breathe, and listen to the quiet around you.`, `For a second, nothing needs to be done, and you let yourself simply be there.`, `You take a little time to look around, to let the moment sink in before you move on.`, `It is a small moment, but you feel it: the way the world goes still for a breath, before it starts again.`, `You pause, take a breath, and let your thoughts catch up with you.`, `Somewhere deep in you, a small, steady voice says: go on.` ] }
};


/* ---- small extra details (a sound, a smell, a touch) that are mixed in for variety ---- */
const AUX = {
 changi: {
  home: [`A lift door chimes somewhere below.`, `The corridor tiles are cool under your shoes.`, `A neighbour's radio crackles through an open window.`, `Warm air drifts up the stairwell, smelling of rice and soy sauce.`, `Slippers slap down the corridor and fade away.`, `Your own shadow stretches long and thin along the wall.`],
  school: [`Somebody's pencil case rattles in a bag.`, `A distant whistle blows out on the field.`, `The smell of chalk and eraser dust hangs in the air.`, `Shoes squeak on the polished floor.`, `A teacher's voice rises, falls and drones on.`, `Your chair creaks when you shift your weight.`],
  eatery: [`A bowl clatters, and somebody calls out an order number.`, `The smell of kaya toast and strong kopi drifts past.`, `Chopsticks click and a spoon scrapes the bottom of a bowl.`, `A fan whirs overhead, stirring the steam.`, `Someone at the next table laughs, wheezing and delighted.`],
  city: [`A train chimes and its doors hiss shut.`, `Somebody's shopping bag brushes your elbow.`, `Cool air breathes out of every shop door.`, `The escalator hums, steady as a tide.`, `A child's balloon bobs above the crowd.`],
  green: [`A bird calls, three notes, then silence.`, `Your shoes crunch on a scatter of fallen leaves.`, `The grass smells of rain that has not quite arrived.`, `A bicycle bell rings, bright and far away.`, `Cicadas shrill, stop all at once, then start again.`],
  shore: [`A wave breaks, drags and sighs.`, `The sand squeaks, cool and fine, under your shoes.`, `A far-off ship sounds its horn, long and low.`, `The wind smells of salt and seaweed.`, `Needles from the casuarinas fall softly around you.`],
  sacred: [`A small bell rings, once, clear as water.`, `The smell of incense clings to your sleeves.`, `A paper offering curls and blackens in the burner.`, `Somebody murmurs a prayer, and the sound slips away.`, `The floor is cool and worn under your feet.`],
  house: [`A floorboard creaks, though nobody has moved.`, `The cold seems to breathe on the back of your neck.`, `A paper boat rustles somewhere in the dark.`, `The smell of jasmine comes and goes, like a memory.`, `Far off, the lullaby plays, one note at a time.`],
  default: [`Somewhere, a dog barks twice and gives up.`, `The air is thick as a warm towel.`, `A plane drones far overhead and fades.`]
 },
 greek: {
  modern: [`A scooter whines down a side street.`, `The smell of coffee drifts from a doorway.`, `Pigeons clatter off a cornice.`, `Somebody calls out a cheerful "Ciao!" and a dozen heads turn.`],
  shore: [`Gulls cry overhead.`, `The water hisses over the pebbles.`, `The sun is hot on your shoulders.`, `Thyme and salt hang in the air.`, `Somewhere, a rope creaks, rhythmic and slow.`],
  city: [`A potter's wheel hums in a doorway.`, `Sandals slap the flagstones.`, `Someone argues cheerfully about the price of fish.`, `The smell of baking bread drifts by.`, `A boy dashes past with a jar on his head.`],
  holy: [`A thin thread of incense drifts past.`, `Your footsteps sound too loud on the old stones.`, `A bell, very far off, rings once.`, `The air smells of laurel and cold stone.`],
  under: [`Water drips, somewhere, slow as a heartbeat.`, `Your breath makes no mist here.`, `A soft rustle, like dry leaves, passes behind you.`, `The cold is damp, and old, and patient.`],
  forge: [`A hammer rings, three beats, and stops.`, `Heat prickles the skin of your face.`, `The air tastes of iron and smoke.`, `Embers pop and scatter in the dark.`],
  sky: [`Distant thunder mutters, like a god clearing his throat.`, `The air smells of ambrosia and rain.`, `Gold light shifts and slides across the marble.`, `Music, half-heard, drifts from a distant hall.`],
  gorgon: [`The wind moans between the stones.`, `Not even a gull cries here.`, `The air has a faint, chill, mineral smell.`, `A pebble rolls, and the sound seems far too loud.`],
  rural: [`Goat-bells tinkle on a far slope.`, `The cicadas pause, then begin again.`, `Dust rises in soft, slow puffs under your sandals.`, `The smell of thyme and warm earth rises from the ground.`],
  default: [`A warm wind lifts the dust.`, `Somewhere, a bell clanks, far off.`, `The sun is a little lower than before.`]
 },
 ashen: {
  green: [`A blackbird scolds from the hedge.`, `The grass smells of rain and clover.`, `A cart creaks somewhere, unseen.`, `Your boots whisper through the long grass.`],
  high: [`The wind hums over the stones.`, `Your fingers ache with cold.`, `Far off, a rock slides and clatters.`, `The air is so thin you can taste the snow.`],
  fen: [`Something plops into the black water.`, `The smell of peat and rot is thick on the air.`, `Your boot sinks and comes out with a sucking sound.`, `A bittern booms, low and mournful, in the reeds.`],
  dry: [`Sand hisses over the dune-tops.`, `The heat shimmers on the horizon.`, `Your tongue is dry and gritty.`, `A lizard flicks across a hot rock.`],
  sea: [`A rope slaps a mast.`, `Gulls quarrel over a scrap of fish.`, `The planks shift gently underfoot.`, `The wind smells of tar and brine.`],
  under: [`A drip falls, and falls, and falls.`, `Your torchlight shivers on the wet stone.`, `A cold draught breathes past your ankles.`, `Something skitters, far away, and is still.`],
  indoors: [`A fire cracks in the hearth.`, `Someone coughs, and the sound echoes.`, `The smell of ale and wet wool hangs in the air.`, `A floorboard creaks above you.`],
  burnt: [`A flake of ash settles on your sleeve.`, `The wind moans through the broken walls.`, `The air tastes of cinders.`, `Something far off, deep and slow, rumbles like a sleeping beast.`],
  camp: [`A log shifts and sparks fly up.`, `The night insects fall silent, then begin again.`, `Your cloak smells of woodsmoke.`, `Someone passes you a tin cup of something hot.`],
  village: [`A shutter bangs somewhere, and is still.`, `The smell of woodsmoke and baking hangs over the lane.`, `A hen scolds from under a cart.`, `Ice crackles in a rut under your boot.`],
  town: [`A bell tolls the hour, a little out of tune.`, `Wheels rattle over the cobbles.`, `A vendor sings out the price of eels.`, `Someone throws a bucket of water into the gutter.`],
  default: [`The wind stirs, and is still.`, `Your boots scuff the dust.`, `A bird calls once and is silent.`]
 }
};
/* the Greek flight and the frozen plane (the "cabin" art) are very different places */
SENSE.greek.flight = [`The engines hum, a long, level sound that you stop hearing after the first hour.`, `Through the little window the Mediterranean is a bright, wrinkled blue, far below.`, `The cabin is dim and warm, and the little reading lights glow here and there like fireflies.`, `A trolley rattles down the aisle, and the smell of rubbery chicken drifts back toward you.`];
SENSE.greek.frozen = [`Nothing in the cabin moves: not a hand, not a hair, not a breath. The silence has weight.`, `Golden light lies over every seat like honey, and the dust hangs in it, perfectly still.`, `A paper cup hangs in mid-air, a drop of tea frozen at its rim, bright as a jewel.`, `The seatbelt signs glow, patient and meaningless, and the hum of the engines is gone.`];

/* ---- more companion lines and thread lines, so the voice does not repeat so quickly ---- */
const addTo = (obj, key, lines) => { (obj[key] = obj[key] || []).push(...lines); };
addTo(ALLY, 'cg_priya', [`Priya is counting something under her breath: house numbers, steps, probably the number of things that could go wrong.`, `Priya adjusts her glasses and says, in her most reasonable voice, that statistically nothing awful happens to children who stay together.`]);
addTo(ALLY, 'cg_hakim', [`Hakim kicks a pebble ahead of him, catches up with it, kicks it again, as if the whole world were a football pitch and he, personally, were winning.`, `Hakim jokes about being starving, and about ghosts being far too scared of his mum to try anything, but his laugh is a little too loud.`]);
addTo(ALLY, 'cg_jiahui', [`Jia Hui announces that she is not scared at least four times in a row, each a little quieter than the last.`, `Jia Hui tucks her chin into her collar, and her eyes dart everywhere at once, but her feet keep moving.`]);
addTo(ALLY, 'cg_mochi', [`Mochi flicks an ear toward a sound you cannot hear, and then, deeply unbothered, goes back to washing a paw.`, `Mochi stops, stares at an empty corner for a long, long moment, and then trots on as though she had been introduced.`]);
addTo(ALLY, 'gr_elena', [`Elena recites, half to herself, a few lines of the Odyssey, and her voice wobbles, a little, on the part about home.`, `Elena checks her notebook, looks up at the real world and shakes her head in disbelief, as if it were the most beautiful typing error she had ever seen.`]);
addTo(ALLY, 'gr_mara', [`Mara counts exits as she walks, and counts them again, and then, for good measure, a third time.`, `Mara pulls her scarf tighter, her eyes on the horizon. "If this goes wrong," she says quietly, "it will not be on my watch."`]);
addTo(ALLY, 'gr_niko', [`Niko picks a flower, sniffs it and offers it to a passing goat with great ceremony.`, `Niko asks, for the fifth time, whether it is true that your people eat their dinner out of boxes, and tells you, kindly, that it sounds very sad.`]);
addTo(ALLY, 'gr_glaux', [`Glaux critiques a passing sparrow's flying, loudly, at length and without a trace of mercy.`, `Glaux tucks his head under one wing and says, muffled, that he is not asleep, and that he has noticed everything.`]);
addTo(ALLY, 'aldric', [`Aldric stops, unbuckles his scabbard and buckles it again, a little ritual that seems to settle something in him.`, `Aldric says nothing for a long time, and then, very quietly: "Whatever happens, I am proud to ride with you."`]);
addTo(ALLY, 'mira', [`Mira flips a coin in the air, catches it and pockets it without once looking at it, a sure sign she is thinking hard.`, `Mira swears, quietly and with great imagination, at a stone that has been rude to her ankle.`]);
addTo(ALLY, 'osric', [`Osric offers a quiet blessing to a passing sparrow, a slightly crooked tree and the weather.`, `Osric rubs his bad knee, sighs, smiles, and tells you cheerfully that suffering builds character.`]);
addTo(ALLY, 'ysolde', [`Ysolde lights a tiny flame in her palm, looks at it, and snuffs it with a sharp little sniff.`, `Ysolde mutters about the Academy and the dull, small-minded people in it, but you notice she does not sound entirely angry.`]);
addTo(ALLY, 'tamsin', [`Tamsin crouches, touches a broken twig and rises with the faintest nod: someone passed this way, and not long ago.`, `Tamsin walks so quietly that you keep glancing round to check she is still there.`]);
addTo(ALLY, 'biscuit', [`Biscuit rolls in something unspeakable and returns, radiant with pride, to claim his praise.`, `Biscuit trots to a fence post, sniffs it carefully and delivers his verdict with one short, firm bark.`]);
addTo(ALLY, 'goose', [`Sir Honks stretches his neck, honks once, magnificently, at nothing in particular, and stalks on with enormous satisfaction.`, `Sir Honks eyes a passing butterfly with murderous intent.`]);
addTo(ALLY, 'garrick', [`Garrick practises a salute under his breath, catches you looking and pretends to scratch his nose.`, `Garrick says, a little gruffly, that he would like to be worth the trust you have put in him.`]);
addTo(ALLY, 'grum', [`Grum snorts, spits and observes that the rocks here are sub-standard, and that he knows a mountain that would put them to shame.`, `Grum pats his axe affectionately, as though it were a favourite grandchild.`]);
addTo(ALLY, 'kestrel', [`Kestrel folds her wings and drops, fast as a thrown knife, and rises again with nothing, and, you think, a certain wry satisfaction.`, `Kestrel perches on a branch overhead and watches you with a fierce, unblinking golden eye.`]);
addTo(THREAD.changi, 0, [`You find yourself looking at every empty bench, every unattended bag, every shadow at the edge of a field, for a boy in a football jersey.`, `Aiman's laugh keeps echoing in the back of your mind, loud and cheerful and entirely unembarrassed. You would give a great deal to hear it again.`, `A tiny, stubborn voice in your head keeps saying: somebody has to find him, and it might as well be you.`]);
addTo(THREAD.changi, 1, [`You think of the paper boats, a hundred little white sails, and of how patient they seemed.`, `Madam Soo did not look cruel. That is the part you keep coming back to. She looked lonely.`, `The lullaby has got into your bones, and you hum it without noticing, and then stop, with a small, uneasy shiver.`]);
addTo(THREAD.changi, 2, [`Your fingers keep finding the things in your bag: the bell, the notebook, the charm. Small things. You hope they are enough.`, `You wonder if Aiman is dreaming, and what he dreams, and whether he can hear you coming.`, `Strangely, you are less afraid than you were. Not fearless, just steadier, as if you had grown a size.`]);
addTo(THREAD.greek, 0, [`Somewhere behind you, the sea is slowly, patiently wearing away at the wreck of everything you knew.`, `You touch your pocket, the boarding pass, the dead phone, the stopped watch, as if they were relics from an older world.`, `A small, hard voice in your head repeats: they are alive, they are waiting, and nobody else knows.`]);
addTo(THREAD.greek, 1, [`The names pile up in your mind like stones: Athena, Apollo, Poseidon, Hades, Eris. You were not trained for this.`, `You wonder what Elena would say if she knew you were afraid, and you realise she probably already does.`, `Somewhere beyond the horizon, a pair of winged sandals lies in pieces, waiting for you.`]);
addTo(THREAD.greek, 2, [`You find yourself memorising little things: the colour of the light, the taste of the bread, the exact weight of Elena's laugh.`, `The gods are not what you expected, and, strangely, that makes them easier to like, and harder to leave.`, `You have been brave for so long that you have almost forgotten what it was like to be afraid. Almost.`]);
addTo(THREAD.ashen, 0, [`You catch yourself staring at the northern sky, at a smear of red that nobody else seems to see.`, `The old story says an ember lives in every child of Thornwick, and some nights you think you can feel yours.`, `Somewhere, a long way off, somebody is whispering your name in a language you do not know.`]);
addTo(THREAD.ashen, 1, [`You think of the long road north, and of every pair of boots that has walked it and not come back.`, `The Silver Lantern is heavier than it looks, and every day you carry it, you learn what that means.`, `You have never been so far from home, and you have never been so sure that you are where you ought to be.`]);
addTo(THREAD.ashen, 2, [`You wonder, now and then, whether the Queen was always what they say, or whether somebody made her.`, `The Veil leans closer every day, a grey hand on the edge of the sky.`, `Whoever you were when you left home, you are not that person now, and the thought is strange, and a little sad, and a little proud.`]);
addTo(THREAD.ashen, 3, [`You count the stairs of the Tower in your mind, lose count, and begin again.`, `Aldric once said that courage is only fear that has decided to walk anyway. You hold the thought like a coal.`, `Whatever happens next, you will not be the same, and you find that you are glad to have come this far.`]);
BODY.strong = [`You feel steady today, rested enough, and ready for whatever comes next.`, `Your thoughts are clear and your breathing is easy, and the world feels, for the moment, manageable.`, `There is a small, quiet confidence in you, nothing loud, but enough to stand on.`, `Your body feels like your own again, solid and capable, and you are grateful for it.`];
REF.quiet.any.push(`The silence settles around you, and for a moment you simply notice that you are alive.`, `You turn the moment over once, like a coin, and put it away.`, `A breath, a blink, a small private thought, and you are ready to go on.`, `You let your shoulders drop, and the day feels, for a heartbeat, a little less heavy.`);


/* ---- more places, so the scene-setting does not repeat so quickly ---- */
SENSE.greek.shore.push(`A fishing boat with a patched sail drifts past, close enough that you can hear the men laughing over their nets.`, `The sand is hot enough to feel through your soles, and the whole beach glitters with scattered flecks of mica.`, `Waves fold over on themselves in lines of white lace, and between them the water is so clear that you can count the stones on the bottom.`, `A heron stands in the shallows on one leg, unbothered by history, or by you.`, `Driftwood, dried weed and a broken amphora lie along the tideline, the ordinary litter of an extraordinary sea.`, `The breeze has a bite of salt and a sweetness of wild fennel, and it smells, absurdly, of every holiday you ever wished you could take.`);
SENSE.greek.rural.push(`A line of poplars marks a stream somewhere ahead, and their leaves flicker silver and green, like coins in a fountain.`, `A farmer's cart creaks past, drawn by an elderly ox with enormous dignity, and the farmer lifts two fingers in greeting.`, `The hills fold away in layer after layer of blue, each paler than the last, until they melt into the sky.`, `A lizard darts across a sun-struck wall, freezes, and watches you with a single bead of an eye.`, `Wild poppies speckle the roadside, red as spilt wine, and bees drone in them with great, serious purpose.`, `The shade of an old olive tree falls across the road like a cool hand, and you slow, just for a breath, without quite knowing why.`);
SENSE.greek.city.push(`Sunlight turns the dust in the air to gold, and every doorway is a small, bright, noisy stage.`, `Women argue companionably over a well, the buckets clatter, and somebody starts to sing.`, `A priest passes, trailing the sweet smoke of incense, and the crowd parts for him without breaking its conversation.`, `The painted colonnade is so fresh that you almost expect it to be wet.`);
SENSE.greek.holy.push(`A single hawk turns above the cliffs, so high that it is hardly more than a thought.`, `Little clay lamps flicker in a row along a wall, each one somebody's whispered question.`);
SENSE.changi.home.push(`The block has its own sleepy rhythm: footsteps, doors, the distant shriek of a kettle, the slow tick of cooling pipes.`, `Someone has hung a string of red lanterns along the corridor for the seventh month, and they sway softly, as if breathing.`, `Evening light turns the whole block the colour of kaya toast, and for a moment, it is very beautiful.`);
SENSE.changi.city.push(`A busker's guitar threads through the crowd, sweet and slow, and nobody quite stops, and nobody quite walks on.`, `Rain-washed pavements shine like black glass, and every neon sign is doubled in them.`, `Behind the glass of a bakery window, a baker folds dough with the careless grace of someone who has done it ten thousand times.`);
SENSE.changi.green.push(`A pair of squirrels chase each other round a trunk, shrieking, utterly unconcerned with human affairs.`, `The path is lined with frangipani, and the fallen flowers scent the whole walk with a sweet, creamy, vanilla smell.`, `A hornbill glides over the canopy with a creak like a rusty gate, and the whole park seems to look up.`);
SENSE.changi.shore.push(`The tide has drawn back, leaving the sand ribbed and shining, and every footprint fills slowly with silver water.`, `Kites hang over the beach like bright, patient fish, and their strings sing very faintly in the wind.`, `Far out, a lone fisherman stands knee-deep, still as a post, waiting, like everybody else, for something to bite.`);
SENSE.changi.house.push(`Somewhere inside the walls, something small scratches, once, patiently, like a fingernail on a wooden door.`, `A line of cold air slides along the floor, curls round your ankles and moves on, as if checking that you were real.`, `Moonlight through the broken shutters falls in neat silver bars, and one of them, you could swear, has just moved.`);
SENSE.ashen.green.push(`A hawk hangs over the field, a tiny dark cross against the pale sky, patient as a held breath.`, `A drystone wall wanders over the hill, a grey ribbon sewn by hands long dead.`, `Clover and wild thyme scent the air, and a bee bumbles past, dusted gold with pollen.`);
SENSE.ashen.indoors.push(`A fiddler somewhere is playing something that begins as a jig and ends as a lament.`, `Candle-smoke curls up to the rafters, and the shadows of the rafters curl down to meet it.`, `The floor is sticky, the benches are scarred, and the whole room smells like a thousand other people's evenings.`);
SENSE.ashen.sea.push(`A gull lands on a bollard, looks you over with a bright, accusing eye and decides you are not worth stealing from.`, `The tide sucks at the harbour wall, a deep, slow, wet sound, like something breathing in its sleep.`);
SENSE.ashen.high.push(`A raven drifts across the pass, black against the snow, calling something short and sharp.`, `Your breath crystallises on your scarf, and the whole world glitters, painfully, in the sun.`);

/* ------------------------------------------------------------------ machinery */
const first = S => { const a = S.allies.map(id => G.allies[id]).filter(Boolean); return a.length ? a[Math.floor(G.ri ? G.ri(S, a.length) : 0)] : null; };
const mpName = S => (((G.stories[S.story||'ashen']||{}).labels||{}).mp) || 'magic';
const fill = (S, t, x) => t.replace(/\{(\w+)\}/g, (m,k) => (x && x[k] != null) ? x[k] : (k==='n' ? S.name : k==='mp' ? mpName(S).toLowerCase() : ''));
function pick(S, key, arr){
  if (!arr || !arr.length) return '';
  const rec = (S.nb = S.nb || {}); const hist = rec[key] = rec[key] || [];
  let idx = -1;
  for (let t = 0; t < 8; t++){ const i = G.ri(S, arr.length); if (!hist.includes(i) || arr.length <= 2){ idx = i; break; } }
  if (idx < 0) idx = G.ri(S, arr.length);
  hist.push(idx); while (hist.length > Math.min(8, Math.max(1, arr.length - 1))) hist.shift();
  return arr[idx];
}
const chapIndex = S => { const list = (G.stories[S.story||'ashen']||{}).chapters || G.chapterOrder || []; return Math.max(0, list.indexOf(S.chapter)); };
const stageOf = S => {
  const st = S.story||'ashen';
  if (st === 'changi'){ const c = S.choices; return c < 90 ? 0 : (c < 300 ? 1 : 2); }
  if (st === 'greek'){ const i = chapIndex(S); return i < 3 ? 0 : (i < 6 ? 1 : 2); }
  const ch = S.chapter || ''; if (/^act[12]$/.test(ch)) return 0; if (/^(act3|r1|r2|r3)$/.test(ch)) return 1; if (/^(r4|r5|r6)$/.test(ch)) return 2; return 3;
};

N.bridge = function(S, sc){
  if ((G.scenes[sc.id] || {}).rich) return '';
  const st = S.story||'ashen'; const SEN = SENSE[st]; if (!SEN) return '';
  const biome = String(sc.art||'').split('|')[0]; let grp = (CHAPGROUP[st]||{})[S.chapter] || (GROUP[st]||{})[biome] || 'default';
  if (st === 'greek' && biome === 'cabin') grp = (S.chapter === 'gr1') ? 'flight' : 'frozen';
  const wxPool = (st !== 'changi' && WXL[S.wx]) ? WXL[S.wx] : null;
  const indoors = /^(interior|cave|dungeon|haunt|bungalow|throne|underworld|forge|cabin)$/.test(biome);
  const senseLine = (wxPool && !indoors && G.ri(S, 100) < 45) ? pick(S, 'wx:'+S.wx, wxPool) : pick(S, 'sense:'+grp, SEN[grp] || SEN.default);
  const parts = [ fill(S, senseLine) ];
  const auxPool = (AUX[st] || {})[grp]; let hasAux = false;
  if (!wxPool && auxPool && G.ri(S, 100) < 45){ parts.push(fill(S, pick(S, 'aux:'+grp, auxPool))); hasAux = true; }
  const out = S.out || {}; const cand = [];
  const risk = out.risked, ok = out.ok;
  const echo = risk ? 'risk' : /Correct!|a streak of/.test(out.text||'') ? 'quizok' : /Not quite|slip cost you|No harm done/.test(out.text||'') ? 'quizbad' : (out.roll ? (out.ok ? 'win' : 'fail') : null);
  if (echo) cand.push(['echo', 3, echo]);
  const hpr = S.hp / S.maxHp, mpr = S.mp / Math.max(1, S.maxMp);
  const body = hpr < 0.4 ? 'lowhp' : hpr < 0.72 ? 'hurt' : mpr < 0.3 ? 'lowmp' : (hpr > 0.9 && mpr > 0.8 ? 'strong' : null);
  if (body) cand.push(['body', body === 'strong' ? 0.35 : 3, body]);
  if (S.allies.length) cand.push(['ally', 2, null]);
  if (!(st === 'greek' && S.chapter === 'gr1')) cand.push(['thread', (S.choices % 6 === 0 ? 4 : 1), null]);
  if (!cand.length || (hasAux && G.ri(S, 100) < 40)) return parts.join(' ');
  let tot = 0; cand.forEach(c => tot += c[1]); let r = G.ri(S, 1000) / 1000 * tot, choice = cand[0];
  for (const c of cand){ r -= c[1]; if (r <= 0){ choice = c; break; } }
  const [kind,, arg] = choice; let line = '';
  if (kind === 'echo') line = pick(S, 'echo:'+arg, ECHO[arg]);
  else if (kind === 'body') line = pick(S, 'body:'+arg, BODY[arg]);
  else if (kind === 'ally'){ const a = S.allies[G.ri(S, S.allies.length)]; const A = G.allies[a]; const pool = ALLY[a] || ALLY.default; line = fill(S, pick(S, 'ally:'+a, pool), { a: A ? A.n.split(' ')[0] : 'Your friend' }); }
  else { const th = THREAD[st]; if (th) line = pick(S, 'thread:'+stageOf(S), th[Math.min(th.length-1, stageOf(S))]); }
  if (line) parts.push(fill(S, line));
  return parts.join(' ');
};

N.reflect = function(S, R, sc, o){
  if (R.die || R.stay || S.battle || !sc || sc.kind === 'battle') return '';
  const st = S.story||'ashen'; const T = R.tags || [];
  const lose = T.filter(t => t.k==='hp' && t.v < 0).reduce((a,t) => a - t.v, 0);
  const ally = T.find(t => t.k==='ally'); const lvl = T.find(t => t.k==='lvl'); const sick = T.find(t => t.k==='status' && /poison|curse/.test(t.id||''));
  const iloss = T.find(t => t.k==='item' && t.v < 0), igain = T.find(t => t.k==='item' && t.v > 0);
  const gl = T.find(t => t.k==='gold' && t.v < 0), gg = T.find(t => t.k==='gold' && t.v > 0);
  const ml = T.find(t => t.k==='mp' && t.v < 0 && !t.cost), mg = T.find(t => t.k==='mp' && t.v > 2);
  let cat = null, x = {};
  if (ally){ cat = ally.v > 0 ? 'allyjoin' : 'allylost'; const A = G.allies[ally.id]; x.a = A ? A.n.split(' ')[0] : 'your friend'; }
  else if (lvl) cat = 'lvl';
  else if (lose >= Math.max(5, S.maxHp * 0.2)) cat = 'hurtbig';
  else if (sick) cat = 'sick';
  else if (iloss){ cat = 'itemlost'; }
  else if (lose > 0) cat = 'hurt';
  else if (gl) cat = 'goldloss';
  else if (igain){ cat = 'itemgain'; const it = G.items[igain.id]; x.item = it ? it.n.toLowerCase() : 'thing'; }
  else if (ml) cat = 'mploss';
  else if (R.roll) cat = R.roll.ok ? 'win' : 'fail';
  else if (mg) cat = 'mpgain';
  else if (gg) cat = 'goldgain';
  const chance = cat ? (cat==='allyjoin'||cat==='allylost'||cat==='lvl'||cat==='hurtbig'||cat==='sick' ? 0.95 : 0.7) : 0.18;
  if (G.ri(S, 100) / 100 >= chance) return '';
  if (!cat) cat = 'quiet';
  const entry = REF[cat]; if (!entry) return '';
  const pool = (entry[st] || []).concat(entry.any || []);
  return fill(S, pick(S, 'ref:'+cat, pool), x);
};
})();
