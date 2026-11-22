/* THE MOON-BOAT — part 3: setting something afloat, the last stretch of river, the final fork and nine endings. */
(function(){
const G = globalThis.G, N = G.bedNodes.moonboat;
const by = (F, k, m) => m[F[k]] || '';

Object.assign(N, {

/* ------------------------------------------------------------------ BRANCH 4A: a worry */
s4_worry: { title:'The Worry Leaf', art:'moonriver|🍃', next:'b4', text:[
`You lean over the side of the boat, and you choose a leaf. It is a small one, round and cool and silvery, and when you touch it, it does not sink, but rocks, very slightly, on the dark water. You hold it in your palm. You think of the worry that has been sitting at the back of your mind tonight, the one that comes round and round, like a moth at a lamp. You do not have to look at it for long. You only have to know it is there.`,
`Gently, you breathe out, and as you do, the worry comes out with your breath, and settles on the leaf, as small and as light as a grain of dust. It does not look so very big, now that it is outside you. It looks, in fact, a little silly, like a small grey pebble that you had mistaken for a mountain. You almost smile at it.`,
`You lower the leaf onto the water. It floats there, a moment, quite still, and then the river takes it. It begins to drift, slowly, slowly, out among the other leaves, and past the lily-pads, and away down the dark, shining water. You watch it go. It gets smaller. And smaller. And as it goes, you feel a little lighter, as if you had put down a bag that you had been carrying so long you had forgotten it was there.`,
`Far down the river, the leaf reaches a place where the water breaks into tiny, glittering foam, and where the foam meets the starlight, something wonderful happens. The worry on the leaf begins to melt. It turns to silver mist. It rises into the air, and becomes a very small, very soft cloud, and the cloud drifts upward, and catches the light of the stars, and glows. And that is all a worry ever is, in the end. A small cloud, that goes away.`,
`You sit back against the cushion, and let your shoulders fall. There is a space, now, where the worry used to be. It is quiet, and clean, and wide, like a room that has just been swept. And in the space, there is room for a lot of good things: for the sound of the water, and the smell of clover, and the warm, slow beating of your heart.`,
`You take a long, deep breath, and let it go. You feel, quite suddenly, how very tired you are, and how very nice it is to be tired, with nothing to do, and nowhere to be. The boat rocks. The leaves rustle against its sides, with a sound like a hundred tiny hands saying hush. And you let yourself sink back, and back, into the soft cushion of the night.`
]},

/* ------------------------------------------------------------------ BRANCH 4B: a wish */
s4_wish: { title:'The Wish Leaf', art:'moonriver|⭐', next:'b4', text:[
`You lean over the side of the boat, and you choose a leaf. It is a small one, round and cool and silvery, and it rocks, very slightly, as you pick it up. You hold it in the cup of your hands, and you think of something that you wish for. It might be something big, or something small. It might be something you have never told anybody. It does not matter. The river will understand.`,
`You whisper it, very softly, into the leaf. You do not need to say it aloud. You need only to think it, and breathe it out, and the wish goes from you like a small warm breath, and settles into the shining surface of the leaf, and the leaf glows, for a moment, a pale and gentle gold, as if it had swallowed a little star.`,
`You lay it on the water, and it floats, and trembles, and then, very slowly, it begins to move. It drifts out among the other leaves, and past the sleeping lily-pads, and out into the wide, dark, quiet river. And as it goes, it glows a little brighter, and a little brighter, like a candle being carried carefully through a long, dark house, until it is the brightest thing on the water.`,
`Far away down the river, the leaf comes to the place where the water runs out under a long, low arch of willows. And there, in the shadows, a thousand tiny lights are waiting, each one a wish that somebody has sent, in the night, from somewhere in the world. Your leaf joins them, quietly, like one more child coming into a warm room. And the lights all rock together, softly, on the water, and begin to rise.`,
`They rise, slowly, like the sparks from a fire, up through the leaves of the willows, and into the sky, and they spread out among the stars, and take their places there. And you realise that this is where wishes go. They do not disappear. They become stars. Small, and silver, and patient, they hang in the night above the world, and keep on shining, for as long as it takes.`,
`You feel strangely calm. You do not know whether your wish will come true, and, somehow, you do not need to know. It is enough that you have made it, and that it is out there, shining, among all the others, being carried safely through the dark. You lean back, and look up, and one of the stars, just above the trees, seems to wink at you. You smile, and let your eyes begin to close.`
]},

/* ------------------------------------------------------------------ BRANCH 4C: a memory */
s4_memory: { title:'The Memory Leaf', art:'moonriver|✨', next:'b4', text:[
`You lean over the side of the boat, and you choose a leaf. It is a small one, round and cool and silvery, and it rocks, very slightly, as you pick it up. You hold it in your hands, and you think of something happy from your day, or from the days before. It might be a laugh, or a taste, or the way the sun lay on a wall. It might be the face of someone you love. Let it come. Let it be as clear as you like.`,
`As you remember it, you feel its warmth rise in your chest, and spread through your hands, and into the leaf. And the leaf begins to glow. It glows with the very colour of the memory, a soft gold, or a warm rose, or a clear, bright blue. It glows more strongly, and the light spills over the edge, and floats on the water, in a small, bright pool, like spilled honey.`,
`You lay the leaf on the river, and a wonderful thing happens. The glow lifts away from the leaf, and gathers itself together, and takes a shape. It is a small, round, shining fish, no bigger than your thumb, made entirely of light. It flicks its tail, once, and dives, and swims in a lazy circle round the boat, leaving a trail of tiny, glittering bubbles, and it looks up at you with one bright, friendly eye.`,
`This is your memory, kept safe. It will swim alongside the boat all night, as bright and as warm as it was when you first held it, and no one will ever take it away. It will go with you, wherever the river goes. And when you wake, it will still be there, deep inside you, shining quietly, ready to be remembered again whenever you wish.`,
`The little fish swims close to the surface, and lights up the water around the boat, so that it looks as if you were floating on a pool of warm, soft light. Other fish come, small and silvery, from all the memories that other people have set afloat, and they swim together in a shining, slow, silent dance, round and round the boat, and then, one by one, they dive, and drift off, down the dark river.`,
`Yours stays. It swims beside the boat, in the quiet water, keeping you company, glowing very softly, like a little night-light. You lean back against the cushion, with a smile on your face, and let your eyelids fall, and feel the warmth of it all through you, from the crown of your head to the soles of your feet.`
]},

/* ------------------------------------------------------------------ BRIDGE 4 */
b4: { title:'The Last Stretch of River', art:'moonriver|🌙', next:'ask5', text: F => [
by(F,'d',{
 worry:`The place where your worry used to be is quiet now, quiet and clean and wide. You hardly remember what it was. You only know that it is not there, and that the lightness where it used to sit is the most comfortable thing you have felt all day.`,
 wish:`Somewhere above you, among the stars, a small new light is shining. You cannot tell which one it is, and you do not need to. You only know that it is up there, and that it is yours, and that somebody, somewhere, is looking after it, gently, as they look after all the others.`,
 memory:`Beside the boat, your little fish of light swims along, as bright as the moment it was made. Whenever you look at it, you feel the memory again, as warm as a bath, and as gentle as a hand on your hair. It will not leave you. It is perfectly content to swim beside you, all the way home.`}),
`The boat moves on, through the last of the leaves, and out into the open river, and now the river is hardly moving at all. It has become so wide, and so still, and so deep, that it seems less like a river than like a long road made of dark glass, with the stars set into it. The boat glides on across it, without a sound, as if it were a thought moving through a quiet mind.`,
`The air is very soft now. It has lost its chill. It lies against your cheeks like a warm, smooth hand. It smells of everything you love best, and you cannot tell what it is. Perhaps it is the smell of your own pillow. Perhaps it is the smell of the tea your grandmother used to make. Perhaps it is only the smell of sleep itself, which is the sweetest smell there is, and which everyone knows, and nobody can describe.`,
by(F,'b',{
 fox:`At the far end of the cushion, the fox lets out a long, soft sigh, and stretches one back leg, and goes still. It is dreaming of a mountain-top, and a sky full of small stars, and of a long, cool, quiet night that will never be over.`,
 mouse:`In the middle of the cushion, the tiny candle has burned down to a small, bright stub, and still the flame does not flicker. The mouse sleeps beside it, in its walnut-shell dream, under its thistledown blanket, on its rose-petal pillow, the smallest mouse in the smallest bed in the biggest and quietest night.`,
 heron:`At the prow, the heron has not moved at all. It stands there, grey and tall and still, a part of the night itself, like a post in a quiet harbour. It is dreaming of the long, slow, patient river, which has no need to hurry, and always arrives.`}),
`You can feel your arms getting heavier. They are as heavy as warm sand. They lie on the blanket, quite still, and it would take too much trouble to move them. Your legs are heavy too, and your back, and your neck, and your head. Even your eyelids seem to weigh as much as two coins. And it is all right. It is all right to be heavy. It means you are sinking, softly, into the arms of the night.`,
`The stars are very close now. They hang just above the water, like lamps in a long, low room, and they are reflected in the dark, so that you seem to be floating in a place with no up and no down, only a soft, deep, silver quiet. The moon has settled low on the horizon, huge, and gold, and slow. Its light lies across everything like a blessing.`,
`You hear, very faintly, in the distance, the sound of three different places, each one gentle, each one calling to you across the water. You do not need to hurry toward any of them. All three are kind. All three are warm. All three are quiet, and soft, and safe. The boat, which has carried you so patiently all this long night, slows down, and turns, and waits, one last time, for you to say where you would like to rest.`
]},

/* ------------------------------------------------------------------ FORK 5 */
ask5: { ask:true, flag:'e', title:'Where the River Ends', art:'starfield|🌙', text:[
`Ahead of you, the river comes to its end, and the end is three places. To the left, the water rises into a bank of soft, white cloud, so wide and so gentle that it seems like a harbour, with little cloud-moored boats sleeping at their ropes, and the stars shining through it like candles through a curtain.`,
`Straight ahead, on a small round island, a lighthouse stands, tall and white and slender, with a warm golden light turning slowly at the top, sweeping its long, soft beam across the water, and across your face, and away, and back, like a hand stroking a sleeping child's hair.`,
`To the right, a garden grows at the water's edge, a quiet garden in the moon's own light, full of tall, pale flowers that open only at night, and bend their heads to the water, and breathe out a scent as sweet as sleep.`,
`And there are two more places, if you would like them. Behind you, if you turn your head, the silver path of the river curves away the way you came, up through the fields and the sleeping roofs, to a small, familiar window with the curtains open just a little, and a bed beside it with the covers turned back. And beside the water, under a great old willow, a little treehouse sits among the branches, with a round door, and a rope ladder, and a window glowing like a honey-coloured eye.`,
`Where would you like to rest tonight?`
], opts:[
 { t:`The Cloud Harbour, on the left.`, v:'cloud', to: F => 'end_cloud_' + F.c },
 { t:`The Lighthouse, straight ahead.`, v:'light', to: F => 'end_light_' + F.c },
 { t:`The Moon's Garden, on the right.`, v:'garden', to: F => 'end_garden_' + F.c },
 { t:`Home, back along the silver path, to your own warm bed.`, v:'home', to: F => 'end_home_' + F.c },
 { t:`The Treehouse in the willow, beside the water.`, v:'treehouse', to: F => 'end_treehouse_' + F.c }
]},

});

/* ================================================================== ENDINGS ==================================================================
   Nine named endings (where you rest x the sound you followed), each told with the gift, the companion and the thing you set afloat.            */
const gift = F => by(F,'a',{
  lantern:`The lantern-flower in your hands glows a deep, steady gold, and its warmth spreads through your fingers, and your wrists, and your arms. It has not dimmed once all night.`,
  feather:`The feather of listening lies on your pillow, as light as a breath, and it stirs when you breathe, as if it too were sleeping. All the noise in your head has gone quiet.`,
  flute:`The little sleep-flute lies in the crook of your arm, and now and then, without your touching it, it sighs out one soft, low note, which floats away over the water and does not come back.`});
const mate = F => by(F,'b',{
  fox:`The fox curls up at your feet, warm as a hot-water bottle, with its tail round its nose, and murmurs something about small stars. It is already asleep.`,
  mouse:`The mouse climbs onto your pillow, carrying its tiny candle, and sets it down, and curls up under the edge of your blanket, in the smallest and most comfortable bed in the world.`,
  heron:`The heron settles on one leg beside you, tall and grey and still, and tucks its head into its feathers, a quiet guardian standing watch over your sleep.`});
const gone = F => by(F,'d',{
  worry:`And somewhere far down the river, a small grey cloud that used to be your worry has drifted away on the wind, and is no longer anything at all.`,
  wish:`And somewhere far above, among the stars, a small new light that used to be your wish keeps shining, patiently, for as long as it takes.`,
  memory:`And beside you, the little fish of light that used to be your memory swims in slow, silver circles, bright and warm, keeping watch.`});

const closing = F => [
`The boat comes to rest, with the softest sound there is, the sound of wood meeting water at the end of a long journey. It rocks once, twice, and then it is still. You are here. Everything is quiet. Everything is safe.`,
gift(F), mate(F), gone(F), epilogue(F)[0],
`You are so warm, and so heavy, and so deeply comfortable that you could not move if you tried, and you do not try. Your breath goes in, and out, in, and out, as slow as the tide. Your thoughts are drifting, one by one, like leaves on the river, and each one floats away, and nothing follows it.`,
`The night is all around you, wide and kind and dark. The stars are shining, a long, long way away, and they are looking down on you with great affection. The moon, low and golden, has put its hand upon the world, and all the world is still.`,
`Goodnight, to the river, which carried you. Goodnight, to the boat, which knew the way. Goodnight, to the owls, and the reeds, and the lanterns, and the stones. Goodnight, to everyone who is sleeping, near and far, in every house, in every country, under every roof.`,
`And goodnight, to you. You did so well. You listened, and you rested, and you let it all go. Now there is nothing left to do but sleep, and so, quite softly, and quite slowly, and quite without a single worry in the world, you do.`,
`Sleep now. The river is carrying you home.`
];

const ENDS = {
 cloud: { name:'Cloud Harbour', art:'cloudharbor|☁️',
  core:[
`The boat turns to the left, and drifts toward the great bank of cloud. As you come closer, you see that it is not one cloud, but many, drawn together into a vast, soft, curving harbour, with wide quays of white vapour, and slow, smoky waves that curl and unfurl without a sound. Little cloud-boats lie moored along the edge, each one asleep, bobbing gently, with a lantern at its prow.`,
`You glide in between them, as quietly as a dream. The water has turned to mist, and the mist is warm, and the boat sinks into it, deeper and deeper, until it is resting in the very middle of the harbour, on a bed of cloud as soft as a feather mattress. The cloud rises up around you on all sides, like the walls of a nest, and closes over your head, and there, in the pale grey twilight, there is only warmth, and softness, and peace.`
  ]},
 light: { name:'The Lighthouse', art:'lighthouse|💡',
  core:[
`The boat goes straight ahead, toward the lighthouse, and as you come near, the long gold beam sweeps over you, slowly, like a warm hand, and moves on. It is so gentle that it does not dazzle. It only lights up the water, and the boat, and your own sleepy face, and leaves a faint glow behind it, like the glow of a coal. Sweep, and glow. Sweep, and glow. Slowly, steadily, the light goes round.`,
`The boat touches a little stone landing at the foot of the tower. There is a small green door, standing open, and inside it a winding staircase, with a handrail worn smooth. At the top, in a round room full of cushions and soft old blankets, there is a narrow bed under the great window, with a quilt on it patched in forty different colours. The lamp turns above your head, slowly, saying sleep, and sleep, and sleep. You climb in, and the quilt rises to meet you.`
  ]},
 garden: { name:'the Moon\'s Garden', art:'moongarden|🌼',
  core:[
`The boat turns to the right, and slides in against the bank, where the tall pale flowers bend down over the water, as if to greet you. They are moonflowers, as large as dinner plates, as white as milk, and every one of them is open, and breathing out a soft, sweet, honeyed scent that you can taste on the tip of your tongue. The scent drifts over the boat, and over your face, and every breath of it makes you a little sleepier than the last.`,
`You step out onto the grass, which is thick and cool and springy, and you wander among the flowers, with their great heads nodding all around you. In the middle of the garden, under a silver tree, there is a bed of soft moss, with a pillow of petals, and a blanket of warm, floating moonlight. It is exactly the right size. It is exactly the right softness. You lie down, and the flowers lean over you, like a ring of gentle faces, and begin to hum.`
  ]},
 home: { name:'Home', art:'moonwindow|🏠',
  core:[
`The boat turns, as softly as a page being turned, and begins to climb back up the silver path. The river that carried you so far now carries you home, and every bend you passed comes by again, slower and softer than before. The reeds, the willows, the sleeping farm with its red barn, and the horse dozing on its feet, all of them lift a hand, or an ear, or a leaf, to say goodnight as you pass.`,
`The fields give way to rooftops, grey and silver and fast asleep. There is the cat on the wall, still in no hurry. There is the baker's window, glowing, with the smell of tomorrow's bread drifting up through the dark. There is your own street, with its little yellow lamps. And there, at last, is your window, with the curtains open just a little, and the moon looking in, as though it had been keeping the room warm for you.`,
`The boat slides gently over the sill, and settles. You step out onto the cool floor, and then you climb into your bed, which is exactly as you left it, with the covers turned back, and the pillow still holding the shape of your head. Behind you, with a small, papery rustle, the Moon-Boat folds itself, and folds itself again, until it is a little white paper boat, no bigger than your hand. It sits on the windowsill, in the moonlight, to wait for tomorrow night.`
  ]},
 treehouse: { name:'the Treehouse', art:'owlwood|🌳',
  core:[
`The boat glides in beside the great old willow, and stops where its long green branches trail in the water. A rope ladder hangs down from the treehouse, swaying very slightly, with a knot at every rung. You climb it, one slow rung at a time, and the willow leaves brush your shoulders and your hair, and whisper, hush, hush, hush, all the way up.`,
`The round door is open. Inside, the treehouse is small, and warm, and golden, lit by a single lantern that hangs from the ceiling and turns, ever so slowly, on its chain. There is a hammock slung across the middle, deep and soft, with a patchwork blanket in it, and a pillow that smells of cedar and rain. Through the window you can see the river, and the moon, and the stars, all of them very far, and all of them very kind.`,
`You climb into the hammock, and it takes you in, and rocks. The whole tree rocks with it, a little, as the night wind moves through the branches, so that the house sways like a boat tied up for the night. The leaves hush. The lantern turns. And the old tree, which has stood here for a hundred years, and has seen a great many children fall asleep, holds you up, and does not mind at all.`
  ]}
};

/* the sound you followed in the middle of the story comes back to say goodnight */
const echoes = {
 cloud: {
  bell:{ head:'Ending: The Harbour of the Last Bell', t:`From somewhere in the clouds, very softly, you hear the Last Bell, ringing once, as the old tortoise rings it, golden and round. It floats across the harbour, and every little cloud-boat rocks to it, once, like a cradle. And you understand, as it fades, that the Last Bell does not ring only on its island. It rings wherever somebody is ready to rest. It has been ringing for you all night, in every soft thing, and now it rings once more, to tell you that the day is over, and that nothing, nothing at all, has been left undone.` },
  stones:{ head:'Ending: The Cloud That Hummed', t:`The cloud beneath you begins to hum. It is very low, and very soft, and you realise that it is the song of the stones, which has floated up from the hill and settled in the harbour, and every little wisp of vapour is singing one slow, quiet note of it. The whole harbour hums, like a great, gentle, sleeping instrument, and the hum goes through the cloud, and the boat, and you, and carries every other thought away. It is the oldest lullaby in the world, and it has found you.` },
  sea:{ head:'Ending: The Whale Cloud', t:`The big, soft cloud under you rises and falls, very slowly, and you realise that it is breathing. It is the great grey whale, who has followed you through the night, and has risen, softly, as a cloud in the sky, to carry you to sleep. Its slow, deep song rolls through the mist around you, and the cloud-boats rock to it, and the stars rock to it, and you rock to it, up and down, up and down, as gently as the sea itself. You are held, by something enormous and kind.` } },
 light: {
  bell:{ head:'Ending: The Lighthouse Bell', t:`Beside the lamp, on a bracket, hangs a small bronze bell, green with age, just like the great one on the island. It rings, once, very softly, each time the light goes round, so that the whole night is stitched together, with light, and sound, and light, and sound. Sweep, and glow, and ring. You can hear, in the ringing, the voice of the old tortoise, saying that nothing needs to be finished tonight, and that all of it, everything, can wait until the morning.` },
  stones:{ head:'Ending: The Lighthouse of Stones', t:`The walls of the round room are built from old grey stones, and as you lie there, you notice that they are humming. Each stone has its own low note, and together they make the chord of the hill, the long, slow, glowing sound of the singing stones. The lamp turns above you, and the stones sing beneath you, and the light and the song go round together, slowly, like two sleepy dancers, and you are in the very middle, held, and warm, and safe.` },
  sea:{ head:'Ending: The Lighthouse by the Quiet Sea', t:`Through the great window, you can see the sea, wide and dark and calm, with the beam of the lamp laid across it like a path. And far out, in the path, a slow grey back rises from the water, and a plume of silver mist, and the whale sings, once, very low, and the song comes drifting in through the glass. It is a sound that you feel in the bones of the bed. It says, goodnight, little one. It says, I am here. It says, the sea is keeping watch, and so am I.` } },
 garden: {
  bell:{ head:'Ending: The Moonflower Bell', t:`Among the flowers, there is one that is not quite like the others. It is shaped like a small white bell, and when the breeze moves it, it rings, very softly, a tiny, silvery, golden note. It is the echo of the Last Bell, which has grown here, in the moonlight, as a flower. Each time it rings, a petal opens, somewhere in the garden, and lets out a little puff of sleepy scent. The old tortoise would be pleased. Nothing needs doing. Nothing needs finishing. Ring, and sleep.` },
  stones:{ head:'Ending: The Garden of Humming Stones', t:`Scattered among the flowers, you notice small round stones, each one glowing a very little, and each one humming a single low note. They are the children of the singing stones, grown small, and set here to keep the garden company. Their notes mingle with the scent of the flowers, and the breathing of the grass, and become a lullaby so gentle that you cannot tell where it ends and your own breathing begins. The garden sings you to sleep, one soft note at a time.` },
  sea:{ head:'Ending: The Garden at the Edge of the Sea', t:`Beyond the flowers, the garden slopes down to a quiet shore, and a slow, small, silver sea comes in over the sand, and goes out again, with a long, deep sigh. It comes in, and goes out, in time with your breath. Far away, in the dark, the whale is singing, and the song comes in with the waves, and the waves bring it right to your pillow, so that you fall asleep to the voice of the sea, as every sleeper has always done.` } },
 home: {
  bell:{ head:'Ending: Home Again, by the Last Bell', t:`Far away, across the roofs and the fields and the sleeping water, you hear the Last Bell, ringing once from its island, golden and slow. It crosses the whole dark country to reach your window, and by the time it arrives it is hardly a sound at all, only a soft warm hum in the pillow, and in the sheets, and in the quiet of the room. It says that the day is finished. It says that you are exactly where you should be. And that nothing, nothing at all, needs doing before morning.` },
  stones:{ head:'Ending: The House That Hummed', t:`The room is very quiet, and yet it is not silent. If you listen, you can hear the house itself humming, a very low, round, warm note in the walls, and the floor, and the old wooden bedframe, the song of the stones, which has followed the river home and settled into everything you own. The curtains hum. The blanket hums. Even the moonlight on the floor seems to hum, one slow, comfortable note, going round and round, like a lullaby that your own house has been keeping for you all along.` },
  sea:{ head:'Ending: The Sea in the Quiet Room', t:`In the quiet of your room, there is a sound, and it is the sea. It is very far off, and very slow, rising and falling, rising and falling, in time with your breath. It is the whale, singing deep down in the dark water, and the song has come all the way home with you, and filled the room like a tide. It rocks the bed, very slightly, like a boat at anchor. And you understand that wherever you sleep, the sea is somewhere beneath you, large and calm and kind, and holding you up.` } },
 treehouse: {
  bell:{ head:'Ending: The Treehouse Bell', t:`From the branch beside the window hangs a very small bronze bell, no bigger than a thimble, green with age. When the wind moves the willow, it rings, once, very faintly, and every time it does, you hear the voice of the old tortoise, from its island far away, saying that nothing needs to be finished tonight. Ring, and hush. Ring, and hush. The leaves whisper the answer, and the lantern turns, and the little bell keeps count of the slow, quiet, golden hours.` },
  stones:{ head:'Ending: The Humming Willow', t:`If you lay your hand on the wall of the treehouse, you can feel a hum in the wood, very low, and very slow, like the note of one of the singing stones, which has found its way, over the water, into the heart of the old tree. The whole willow is humming, from the roots to the leaves, one long soft note, and the hammock hums with it, and you hum with it, without a sound, as it carries you down and down into sleep.` },
  sea:{ head:'Ending: The Willow Beside the Sea', t:`The wind in the willow leaves sounds exactly like the sea. It comes in, in a long, soft rush, and goes out again, in a sigh, and comes in again, in time with the rocking of the hammock. And somewhere underneath it, very deep and very far, you can hear a slower sound still, the song of the great grey whale, rolling through the dark water below the roots, and rising up through the trunk of the tree like a whisper through a sleeping house.` } }
};

/* what you carried and who you carried it with, one last time, in a short farewell that is different for every combination */
const epilogue = F => [
  by(F,'a',{ lantern:`In the morning, if you look, you may find that your hands are still warm.`, feather:`In the morning, if you look, you may find that your thoughts are still quiet.`, flute:`In the morning, if you listen, you may find that a soft note is still humming somewhere in you.` }) + ' ' +
  by(F,'b',{ fox:`The fox will be long gone, back to its mountain, and its small stars.`, mouse:`The mouse will be long gone, back to its walnut shell, and its thistledown.`, heron:`The heron will be long gone, back to its river, and its patience.` }) + ' ' +
  by(F,'d',{ worry:`And the worry that you sent away will not have come back.`, wish:`And the wish that you sent into the sky will still be shining.`, memory:`And the happy memory that you kept will be there, as bright as ever.` })
];

Object.keys(ENDS).forEach(h => {
  ['bell','stones','sea'].forEach(s => {
    const E = ENDS[h], X = echoes[h][s];
    N['end_' + h + '_' + s] = { title: X.head.replace('Ending: ',''), art: E.art, end: X.head, text: F => E.core.concat([X.t], closing(F)) };
  });
});
})();
