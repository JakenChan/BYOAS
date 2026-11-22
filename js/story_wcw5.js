/* WHATEVER COMES, WHATEVER GIVE — part 5: three more slow stretches that make every story at least forty-five minutes long:
   a gentle head-to-toe settling before the tale, a rest on the way (told differently for each place), and a slow drifting-off before the last goodnight. */
(function(){
const G = globalThis.G, W = G.wcw, cx = W.cx, cap = W.cap;
const N = G.bedNodes.whatever;

/* ---------------------------------------------------------------- before the tale: letting each part of the body go, from the top of the head to the soles of the feet */
W.MOD.settle = F => { const { E, P, C } = cx(F); return [
`Before the story begins in earnest, there is one more thing to do, and it is the easiest thing of all. It is simply to let go, a little at a time, from the very top of you to the very bottom. You do not have to try. You only have to notice, and let each part grow heavy, and soft, and warm, and quiet. We will begin at the top of your head, and take as long as we like.`,
`Feel the top of your head. Feel the skin there, and the hair, and the faint warmth of your own thoughts underneath. Let it grow soft. Imagine that a small, warm light is resting there, no bigger than a coin, gentle as a candle flame seen through a curtain. Let it rest, and let it slowly spread, like warm oil, down over your forehead, and smooth it, and smooth it, until every line is gone.`,
`Let the warmth slide down, behind your eyes. Your eyes have been working all day, looking, and reading, and watching, and they are tired, and they have earned a rest. Let them sink back, into your head, as though they were two smooth stones, sinking into a pool of warm water. Let your eyelids grow heavy, and soft. They do not need to be held open. They are closing by themselves.`,
`Let the warmth spread across your cheeks, and into your jaw. Unclench it. Let your teeth part, a little, and your tongue lie loose and heavy in your mouth, like a small sleeping animal. Let the muscles round your mouth go slack, so that your lips are soft, and just a little open, the way they are when you are fast asleep. Feel your whole face melt, like butter in the sun.`,
`Now let the warmth flow down your neck, and into your shoulders, where so much of the day is kept. Let them drop. Let them sink, lower, and lower, as if somebody were gently lifting a heavy coat from them. Feel the weight go. And let it travel down your arms, over your elbows, and your forearms, and your wrists, until your hands are open, and loose, and as heavy as two warm stones.`,
`Let the warmth fill your chest, now, and rise and fall with your breath. In, and it rises. Out, and it falls. Each time you breathe out, a little more of the day leaves you, like steam rising from a cup. Let it flow into your stomach, which is soft, and slow, and quiet, and into your back, which is held, and supported, and need not do any work at all.`,
`Let it pour down into your hips, and your thighs, which are heavy as sandbags. Let it reach your knees, and loosen them, and your calves, and your ankles, and then, at last, your feet, and your toes. Feel your toes, each one, and let each one go. You are quite empty of effort, now, from the crown of your head to the soles of your feet, and filled, instead, with a deep, soft, slow, golden warmth.`,
`Now, let us borrow the rhythm of the sea, which has been breathing, in and out, for longer than there have been lungs. Breathe in, slowly, for as long as a small wave takes to climb the sand. Hold it, softly, at the top, for as long as the wave takes to hang there, glittering. And let it go, slowly, for as long as the wave takes to slide back, hissing, down the shore, and sink into the sea.`,
`Again. In, as the wave climbs. Hold, as it glitters. Out, as it slides away, and the sand drinks it up. You do not have to do it perfectly. There is no perfect. There is only the next breath, and then the one after, each of them a little slower than the one before, like a pendulum swinging down toward rest, until it hardly seems to move at all.`,
`And again. In. Hold. Out. Notice that, at the bottom of each breath, there is a small, soft, silent place, where nothing is happening, and nothing needs to. Let yourself rest there, a moment longer each time, as one rests at the top of a gentle hill, before walking down the other side. In, and hold, and out, and rest. In, and hold, and out, and rest.`,
`You are lying very still, and very heavy, and the heaviness is not a burden. It is a gift. It is the weight of someone who has done enough, for today, and may now rest. You sink into it, as a stone sinks into the bed of a river. The bed holds you. The river goes over you. And somewhere, very close, just beyond the edge of your sleep, a story is waiting to begin.`
]};

/* ---------------------------------------------------------------- a rest on the way, between meeting your companion and the heart of the tale */
W.MOD.rest = {
water: F => { const { E, P, C } = cx(F); return [
`You stop for a while, ${P.way}, where the ground is firm and dry, and sit down, close to the water, and rest. It is not that you are tired, exactly. It is that the night has asked you to slow down, and you are glad to. You tuck your knees up, and put your arms round them, and look out across the wide, dark, shining surface, and let your mind go as smooth as it is.`,
`${C.l[0]}`,
`The water makes its small sounds. A fish rises, somewhere out in the dark, and falls back, leaving a ring that spreads, and spreads, and grows faint, and vanishes. A breeze combs through the reeds, and they bow, all together, and straighten again, like a congregation. The sky and the water meet, far out, in a line that you cannot see, and so the stars seem to go down, and down, into the world.`,
`You pick up a small, flat stone from the sand, and turn it over in your fingers. It is smooth, and cool, and heavier than it looks. You hold it for a while, as you might hold someone's hand. Then you set it gently down again, in exactly the place where you found it, because it seems to belong there, and the night is not a night for moving things.`
]},
wild: F => { const { E, P, C } = cx(F); return [
`You stop for a while, ${P.way}, in a place where the trees step back a little, and the moonlight comes down in a soft, wide, silver pool, and you sit on a fallen log, as smooth as a bench, and rest. It is not that you are tired, exactly. It is that the wood has a way of making you slow down, and you are glad to, and your breath goes out of you in a long, grateful sigh.`,
`${C.l[0]}`,
`All around you, the wood goes quietly about its night. A leaf falls, turning over and over, and lands without a sound. A twig creaks. Somewhere high above, an owl shifts on its branch, and settles its feathers, with a faint, dry, whispering rustle. The smell of the earth rises, and the smell of the moss, and a cool green breath comes down from the canopy, and passes over you, like a hand over a sleeping face.`,
`You close your eyes, for a moment, and listen to the wood breathe. It has a rhythm, slow, and deep, and very old. The trees lean, and creak, and straighten, as the breeze comes and goes. The roots, below, are holding on to the dark ground, and the leaves, above, are holding on to the dark sky, and you, between them, are held, as a seed is held, in the middle of a warm and living thing.`
]},
town: F => { const { E, P, C } = cx(F); return [
`You stop for a while, ${P.way}, in the shelter of a doorway, where a step has been worn into a gentle hollow by a hundred years of feet, and you sit on it, and rest. It is not that you are tired, exactly. It is that the town has a way of drawing you to a standstill, at this hour, and holding you there, as a hand holds a hand, and you are glad to be held.`,
`${C.l[0]}`,
`Above you, the roofs make a jagged, gentle line against the sky, and on the line, here and there, a chimney, or a weathervane, or a sleeping bird. From some open window, a wireless, or a loom, or a kettle, makes a low, comfortable murmur, and a shutter taps, now and then, against its frame, as if someone, a long way inside, were turning over in their sleep.`,
`You watch a single moth, circling the ${E.lamp} at the corner, round, and round, and round, in loose, dreamy loops. It is not trying to get anywhere. It is only circling, for the pleasure of the light. You think that there is something good in that, in the circling for its own sake, and you let your thoughts circle, too, round and round, loosely, without arriving, for as long as they like.`
]},
sky: F => { const { E, P, C } = cx(F); return [
`You stop for a while, ${P.way}, and lie down on your back, on ${P.ground}, with your hands behind your head, and rest. It is not that you are tired, exactly. It is that the sky is so wide, and so near, that it would be impolite to go on walking beneath it, without stopping to look. You lie there, quite still, and let the whole bright dark spread out above you.`,
`${C.l[0]}`,
`The stars do not move, and yet they seem to. If you watch one long enough, it appears to swim, and tremble, and slide, a very little, to the left, and then to settle. It is only your own breath, rocking you, and your eyes, rocking with it. You let them rock. You are a small boat, lying quite still, on a very large ocean of stars.`,
`The moon is a little higher now, and a little whiter, and the stars near it have grown dimmer, as though the moon were a lamp, and they were the small lights of a town at the foot of a hill. You look at the dark shapes that lie across its face, the seas, and the old, quiet craters, and think of how many people have looked at them, and thought just what you are thinking: that it is a very peaceful thing to look at, and that you are not afraid.`
]}
};

/* ---------------------------------------------------------------- the slow drifting-off, before the very last goodnight */
W.MOD.drift = F => { const { E, P, C, M } = cx(F); return [
`The story has come to its end, but you do not have to come to yours. There is a little more of the night left, and we will spend it slowly, in the quietest way we know. Let us breathe together, a few more times, and let each breath carry you a little further down, into the deep, warm, slow dark where sleep is waiting.`,
`Imagine, if you can, a long, wide, shallow staircase, going down. It is carpeted in something soft, and grey, and deep, so that your feet make no sound at all, and on either side, a low rail of smooth, warm wood, which you may hold, or not. At the bottom, a long way down, there is a small, round, golden light, the light of a ${E.lantern} in a window, and you know that it is the light of a place where you are wanted.`,
`You put one foot on the first step, and it is wonderfully easy. The stair gives a little, like moss, and you sink, a little, into the softness. With every step you take, the air grows warmer, and the sounds of the day grow smaller. By the fifth step, they are as faint as the sound of a radio, in the next house, on a summer evening, and by the tenth step, you cannot hear them at all.`,
`You go down, and down, one slow step after another, and the stair curves, gently, to the left, and then gently to the right, and the light at the bottom grows larger, and warmer, and more golden. There are small, quiet doors along the way, each one closed, each one with a name on it, in your own handwriting: worry, and hurry, and tomorrow, and yesterday. They are all shut, for the night, and you walk past them, without a glance.`,
`At the very bottom, the staircase opens into a room. It is a small, round, deep, warm room, with a floor of soft, pale sand, and a low bed in the middle, heaped with every blanket you have ever loved. The ${E.lantern} burns on a shelf, turned very low. The ceiling is the night sky, and the stars are very close. You cross the sand, and sit on the bed, and lie back, and it takes you in.`,
`Breathe in, slowly, and count with me, if you like, though you do not have to. In, and one. And out, long, and slow. In, and two. And out. Each time you breathe out, let your body sink an inch deeper into the bed, as though the bed were a boat, and the boat were drifting out, quietly, from a small, calm, safe harbour, onto a wide, gentle sea.`,
`In, and three. And out. The ${E.lamps} are growing dim, one by one, far behind you, like the lights of a town on the shore, when a boat has drawn away from it, down a long and silent river. They are small now, and warm, and gold, and they are saying goodnight, without any words. You say it back, in your mind. Goodnight. Goodnight.`,
`In, and four. And out. The sky is wide above you, and every star in it is a little drowsier than before. They blink, slowly, like the eyes of children who are trying to stay awake, and failing. One by one, they close. The dark between them softens, and thickens, and grows as comfortable as a blanket drawn right up to your chin.`,
`In, and five. And out. Your thoughts are very far away now. They are small, and grey, and slow, like clouds a long way off, drifting across the face of the moon, and they do not need to be followed. Let them go where they like. They will find their own way home, in the morning, when you are rested and ready for them.`,
`In, and six. And out. Your breath is very long, and very slow, and there is a pause at the end of it, a soft, quiet, empty pause, like the pause between the swings of a pendulum, and you rest in the pause, and it is lovely, and nothing at all is wrong. In the pause, there is nothing to do. There is only the stillness, and the stillness is enough.`,
`In, and seven. And out. You can hardly feel your body now. It is warm, and heavy, and faraway, as if it belonged to somebody else, somebody very well loved, who is being looked after, with great care, in a quiet room. You are only the quiet, sleepy light that rests inside it, like a small flame in a sheltered lamp, burning very low, and very steady.`,
`In, and eight. And out. Everything is gentle. Everything is dim. Everything is far, and soft, and slow. The sounds of the night come to you from a great distance, like the sounds of a village heard across a lake: a dog, a bell, a door, a voice, all of them small, and sweet, and without any meaning, except, perhaps, that the world is going on, and is well.`,
`In, and nine. And out. You are so nearly there. Just one more, now, and you may let go of counting altogether, and simply fall, as a leaf falls, from a high branch, on a windless night, turning slowly, over and over, in the dark, with nothing below you but the soft, warm, waiting ground. In, and ten. And out. And let go. Let go. Let go.`
]};

/* ---------------------------------------------------------------- slot them into the chain */
const T = F => W.TITLES[F.a][F.b];
const art = {
  place: { water:'moonriver|🌊', wild:'owlwood|🌲', town:'belltower|🏘️', sky:'cloudharbor|⭐' }
};
N.t_pre.next = 't_settle';
N.t_settle = { title: T, art: () => 'moonwindow|🌙', next:'t_world', text: W.MOD.settle };
N.t_comp.next = 't_rest';
N.t_rest = { title: T, art: F => art.place[F.c], next:'t_heartA', text: F => W.MOD.rest[F.c](F) };
N.t_res.next = 't_drift';
N.t_drift = { title: T, art: () => 'quietsea|🌙', next:'t_end', text: W.MOD.drift };
})();
