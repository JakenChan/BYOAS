/* Narrator voice for "Stolen Sky": the hum of the ship, the smell of metal, the small blue Earth in the window */
(function(){
const G = globalThis.G, P = G.narr && G.narr.pools;
if (!P) return;
const { SENSE, GROUP, THREAD, ALLY, AUX } = P;

GROUP.space = { cellblock:'cell', corridor:'corridor', vent:'corridor', ring:'ring', lab:'lab', engineroom:'engine', hangar:'hangar', bridge:'hangar', earthview:'window' };

SENSE.space = {
 cell: [
  `The cell hums, a deep, patient note that you feel in your teeth more than you hear, and the pale blue ceiling light makes everyone's face look a little drowned.`,
  `The floor is cold and faintly ribbed, and somewhere among the rows of bunks, a small child is sniffling, trying hard to be quiet.`,
  `Through the thick clear wall, the stars hang hard and bright and perfectly still, and, tiny in the corner of the window, the Earth goes on being blue.`,
  `The air smells of warm dust and metal, not unclean, but faintly wrong, like a room nobody has ever lived in.`,
  `A hundred children breathe in the half-dark, and the sound is something like the sea.` ],
 corridor: [
  `The corridor curves away ahead like the inside of a whale, its ribbed walls glowing with long, slow ripples of pale blue light.`,
  `Your bare feet make small, flat sounds on the warm floor, and every one of them seems to travel a very long way.`,
  `The air smells of dust, hot metal and something sweet and unfamiliar, like burnt sugar, and a faint, steady hum runs through everything.`,
  `Somewhere beyond the walls, machinery sighs, clicks and settles, with the patience of something that has been running for a thousand years.`,
  `A line of tiny lights runs along the wall at knee height, blinking one after another, as if the ship were counting.` ],
 ring: [
  `The land curves up and away in both directions, and when you look overhead, there are fields up there, and a tiny, faraway river hanging in the sky.`,
  `The grass is soft, the air is warm, and the long strip of light that passes for the sun makes everything a little too bright and a little too perfect.`,
  `Water chuckles over round stones somewhere nearby, and, for a moment, you could almost be in a park at home, except for the sky.`,
  `The glassy trees ring faintly in the air-current, like a thousand tiny chimes, and the whole world seems to be holding its breath.`,
  `You walk on gentle ground that curves gently upward in front of you, and you have to remind yourself, again, that you are standing on the inside of a wheel.` ],
 lab: [
  `The tanks glow from beneath with a cold green light, and slow, silent shapes drift in them like thoughts.`,
  `A faint chemical smell hangs in the air, clean and sharp and a little sweet, and every surface is scrubbed to a dull shine.`,
  `Machines hum and tick in the dim, and the labels on the glass, in their neat curly script, seem to watch you walk past.`,
  `The room is very quiet, in the way that a library is quiet, but it is the quiet of somebody who is watching and taking notes.`,
  `Your reflection slides across a hundred curved panes of glass, small and pale and very far from home.` ],
 engine: [
  `The heat presses on you like a hand, and the whole deck throbs with a deep, slow rhythm, as though you were walking through the chest of something very large.`,
  `Orange light flickers across the pipes, and your face prickles with sweat, and the air tastes of hot iron.`,
  `Great ducts breathe in and out overhead, and every time they do, the walkway shudders under your feet.`,
  `A pipe hisses somewhere, and a thin cloud of steam drifts across the walkway and thins to nothing.`,
  `The noise is like standing beside a waterfall, and you find yourself shouting just to be heard.` ],
 hangar: [
  `The hangar is as large and quiet as an airport at night, and your footsteps ring on the long, empty floor.`,
  `Rows of dark, sleek ships hang from the ceiling on slender arms, like bats, and the whole place smells faintly of oil and cold metal.`,
  `The huge curved door at the far end is closed, and beyond it, you know, there is nothing but stars.`,
  `The shuttle waits, pale and patient, with its belly open, and in the high window above it, the Earth waits too.`,
  `Every sound you make comes back a second later, thinner and smaller, and you lower your voice without being asked.` ],
 window: [
  `Below you, the Earth fills the whole window: blue ocean, white cloud, a thin bright rim of air, and, impossibly, somebody's home.`,
  `The stars outside do not twinkle, and the silence of the vacuum seems to press against the glass from the other side.`,
  `The shuttle hums and trembles around you, and a hundred children watch the planet grow larger with their mouths open.`,
  `Sunlight flashes across the windows, hard and white, and then the shadow of the planet swallows it, and everything goes dark and blue.`,
  `You can see the curve of the world, the long, soft line of the dawn, and you have to remember to breathe.` ],
 default: [
  `The ship hums around you, deep and steady, and the pale light has no source that you can find.`,
  `The air smells of metal and dust, and the floor is faintly warm under your feet.`,
  `Somewhere, far off, something clicks, and the hum changes pitch for a moment, then settles again.` ]
};

AUX.space = {
 cell: [`A bunk creaks.`, `Somebody whispers a name, over and over.`, `A small hand finds yours and holds on.`, `The ceiling light flickers, once.`],
 corridor: [`A drone's whir fades, and returns.`, `The floor hums faintly under your feet.`, `A pipe ticks as it cools.`, `Your own breath sounds very loud.`],
 ring: [`A leaf chimes, high and clear.`, `The stream chuckles over its stones.`, `The warm air smells of cut grass.`, `A soft, steady wind blows from nowhere.`],
 lab: [`A tank bubbles, slowly.`, `A machine ticks over to a new reading.`, `The glass hums, very faintly.`, `Something drifts past in the green light, and is gone.`],
 engine: [`A valve hisses.`, `The deck shudders, and settles.`, `Heat shimmers above the coils.`, `A pipe knocks, three times.`],
 hangar: [`Your footsteps echo.`, `A cable swings, very slightly, overhead.`, `The shuttle ticks as it cools.`, `Far away, a door sighs shut.`],
 window: [`The engines murmur.`, `A hundred children hold their breath.`, `The stars wheel slowly past.`, `The hull ticks, in the cold.`]
};

THREAD.space = [
 [ `Somewhere, in a house on Earth, a pair of parents is standing at an empty bed, and you cannot stop thinking about their faces.`,
   `You keep counting heads, again and again, as though the number might change if you stopped watching it.`,
   `You tell yourself, over and over, that there is a way out of every cage, if only you can see its shape.`,
   `The Earth, tiny and blue in the corner of the window, seems to get smaller every time you look.`,
   `You think about your own bedroom: the lamp, the crooked poster, the smell of toast on school mornings, and your chest aches.` ],
 [ `The numbers in your head have started to mean something: a hundred children, a few hours, one door at a time.`,
   `A hundred names are starting to fix themselves in your memory, and you realise you would know every one of them in the dark.`,
   `Every corridor, every door, every little kindness, you tell yourself, is one step closer to a kitchen with the radio on.`,
   `Somewhere beyond all this metal and glass, there is rain, and mud, and grass, and you ache for every one of them.`,
   `You are not as brave as they think you are, and you suspect that is exactly what bravery feels like.` ],
 [ `The shuttle is close now, you can almost feel it, and the thought of the sea, the real sea, makes you dizzy with hope.`,
   `It is a very long way home, but it is not as far as it was, and you hold on to that.`,
   `Every child behind you is trusting you with a mother, a father, a bed and a dog called Biscuit, and you will not drop any of it.`,
   `If you close your eyes, you can almost smell the salt, the cut grass, the tea, the ordinary things that are worth all of this.`,
   `Whatever comes next, you think, you did not do this alone.` ]
];

ALLY.sp_noor = [
 `{a} walks beside you with her notebook clutched to her chest, murmuring star-names under her breath, as if the whole sky were a very long list she is determined to finish.`,
 `{a} stops to scribble a line in her notebook, nods to herself, and hurries to catch up, her small face fierce and bright.`,
 `{a} keeps glancing at the stars in the windows, and her lips move, counting, measuring, working out how far there is to go.` ];
ALLY.sp_tomas = [
 `{a} runs a hand along the wall as he walks, listening to the pipes, with the faraway look of someone who is thinking about tractors.`,
 `{a} wipes his hands on his pyjamas and gives you a small, shy nod, the kind that says he is ready to fix whatever needs fixing.`,
 `{a} whistles very softly through his teeth, tuneless and steady, and somehow it helps everybody else breathe.` ];
ALLY.sp_lin = [
 `{a} moves along the line of children, touching a forehead here, straightening a blanket there, so quietly that most of them never notice.`,
 `{a} keeps her plait over one shoulder, her eyes sharp, and her voice, when she speaks, is very calm indeed.`,
 `{a} glances back at the youngest children every few paces, counting them under her breath, and you realise that you are both doing it.` ];
ALLY.sp_oko = [
 `{a} glides beside you on a ripple of soft arms, its skin shifting in slow, thoughtful colours, shy, steady and a very long way from home.`,
 `{a} watches the children with great dark eyes, and you notice that its colours turn a soft, warm gold whenever one of them laughs.`,
 `{a} pauses at every door, listening, with the patience of an archivist who has spent a thousand years waiting for somebody to ask it a question.` ];
})();
