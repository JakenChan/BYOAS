/* WHATEVER COMES, WHATEVER GIVE — a bedtime story that is made to order.
   Part 1: the registration, the five opening questions, the tables of words that change with your answers, the prelude and the four worlds.
   The five answers pick one module each, so every combination (1,024 of them) is a different story of roughly fifty minutes. */
(function(){
const G = globalThis.G;
const W = G.wcw = { MOD:{} };

/* ---------------------------------------------------------------- the four worlds: little words that change with the age you chose */
W.ERA = {
 present: { when:'in the world of today', lamp:'street-lamp', lamps:'street-lamps', lantern:'small lantern', lanterns:'small lanterns', home:'little house', folk:'neighbours', bread:'warm bread and sweet tea', note:'a small notebook', hum:'the far-off hum of a night train', craft:'little rowing boat', ride:'night bus',
   pet:'cat', petn:'the cat', petAdj:'a soft grey cat with one white paw', elder:'an old woman with silver hair and a knitted shawl', eldern:'the old woman', glow:'warm yellow windows', peak:'old clock tower', pen:'a pencil', chime:'a clock somewhere chiming the hour',
   sage:'a retired teacher with a telescope on a folding stool', sagen:'the old teacher', shy:'a shy night-shift baker', shyn:'the baker', gift:'a folded paper star', track:'wristwatch', cloak:'old coat' },
 ancient: { when:'long ago, in the days of lamps and bells', lamp:'oil lamp', lamps:'oil lamps', lantern:'oil lamp', lanterns:'oil lamps', home:'stone cottage', folk:'villagers', bread:'barley bread and honey', note:'a roll of parchment', hum:'the soft lowing of cattle in a far field', craft:'wooden boat', ride:'ox-cart',
   pet:'donkey', petn:'the donkey', petAdj:'a patient old donkey with soft, drooping ears', elder:'an old hermit-scribe with a long white beard', eldern:'the old scribe', glow:'the glow of hearth fires behind shuttered windows', peak:'watchtower', pen:'a quill', chime:'a monastery bell tolling the hour',
   sage:'an old scribe who kept the records of the heavens', sagen:'the old scribe', shy:'a shy old bell-keeper', shyn:'the bell-keeper', gift:'a ribbon of blue wool', track:'sundial', cloak:'woollen cloak' },
 future: { when:'far in the future, among the stars', lamp:'glow-panel', lamps:'glow-panels', lantern:'glow-lantern', lanterns:'glow-lanterns', home:'quiet room in the habitat ring', folk:'neighbours of the ring', bread:'warm soup from the galley', note:'a thin slate', hum:'the soft hum of the great ring turning', craft:'silent skiff', ride:'glide-car',
   pet:'robin', petn:'the robin', petAdj:'a small, round, feathered drone, as soft and as friendly as a robin', elder:'an old station keeper with kind, tired eyes', eldern:'the keeper', glow:'long strips of soft blue light', peak:'signal spire', pen:'a light-pen', chime:'a soft chime rolling round the ring',
   sage:'an old astronomer in the observation lounge, with a mug of something warm', sagen:'the old astronomer', shy:'a shy night-gardener of the ring', shyn:'the gardener', gift:'a small glass bead of light', track:'wrist-band', cloak:'soft grey jacket' },
 dream: { when:'in a dreamland outside of time', lamp:'firefly lantern', lamps:'firefly lanterns', lantern:'firefly lantern', lanterns:'firefly lanterns', home:'cloud cottage', folk:'dreamers', bread:'warm moon-bread and starlight tea', note:'a book of blank pages', hum:'the faint humming of the sleeping hills', craft:'boat of woven cloud', ride:'drifting leaf',
   pet:'fox', petn:'the fox', petAdj:'a small fox whose tail glows like an ember', elder:'an old cloud-shepherd with a silver staff', eldern:'the shepherd', glow:'drifting lanterns', peak:'tower of lanterns', pen:'a pen of starlight', chime:'a soft chime from nowhere in particular',
   sage:'an old owl who kept the accounts of the sky', sagen:'the old owl', shy:'a shy keeper of the night-lamps', shyn:'the keeper', gift:'a feather of silver light', track:'pocket moon-dial', cloak:'cloak of soft grey cloud' }
};

/* ---------------------------------------------------------------- the four places */
W.PLACE = {
 water: { name:'by the water', where:'beside a quiet stretch of water', here:'the water\'s edge', way:'along the water\'s edge', view:'across the water', ground:'the damp, cool sand', up:'out over the water' },
 wild:  { name:'in the hills and forests', where:'among quiet hills and forests', here:'a clearing among the trees', way:'up the winding forest path', view:'through the trees', ground:'the soft, mossy ground', up:'up through the branches' },
 town:  { name:'in a town at night', where:'in a town at night', here:'the little square', way:'through the lamplit streets', view:'over the rooftops', ground:'the smooth, worn cobbles', up:'up the long stair' },
 sky:   { name:'high up, near the sky', where:'high up, close to the sky and the stars', here:'a wide, high terrace', way:'up the long, curving stair', view:'across the endless sky', ground:'the cool, smooth stone', up:'up into the open sky' }
};

/* ---------------------------------------------------------------- the four kinds of story, the four travelling companions, the four endings */
W.TYPE = {
 science: { noun:'a scientific tale of wonder and discovery', gift:'what the stars had taught you' },
 romance: { noun:'a gentle, romantic tale', gift:'the two lights that found each other' },
 mystery: { noun:'a quiet mystery', gift:'the soft answer to the humming' },
 friend:  { noun:'a warm tale of friendship and kindness', gift:'the long, warm table' }
};
W.COMP = F => {
  const E = W.ERA[F.a];
  return { guide: { recap:`a wise and kindly guide beside you`, n:'your guide', l:[
      `Your guide listens, as only the very wise can listen, with a quiet face and a patient heart.`,
      `Your guide smiles, and nods, as though this were exactly what was meant to happen.`,
      `Your guide says nothing, and the nothing is warm, and kind, and full of understanding.` ] },
    dear: { recap:`someone dear to you beside you`, n:'your dear one', l:[
      `Your dear one is walking close beside you, and every so often your shoulders touch, and neither of you minds.`,
      `Your dear one looks at you, and smiles a small, private smile, the kind that needs no explaining.`,
      `Your dear one slips a hand into yours, and the hand is warm, and you hold it, and the night grows kinder.` ] },
    animal: { recap:`${E.petAdj} beside you`, n:E.petn, l:[
      `${E.petn[0].toUpperCase() + E.petn.slice(1)} pads along beside you, unhurried, with the calm of a creature who has never once been in a rush.`,
      `${E.petn[0].toUpperCase() + E.petn.slice(1)} looks up at you with wide, dark, trusting eyes, and then looks away again, perfectly content.`,
      `${E.petn[0].toUpperCase() + E.petn.slice(1)} gives a long, soft, drowsy sigh, and the sigh is so peaceful that you find yourself sighing too.` ] },
    alone: { recap:`no one but you and the night`, n:'the night', l:[
      `You are alone with the night, and the night turns out to be very good company, quiet, and wide, and entirely on your side.`,
      `There is nobody beside you, and you do not feel lonely at all. Everything around you is breathing gently, and so are you.`,
      `You walk by yourself, at your own pace, and it is a comfort to know that there is nothing you have to do, and nobody you have to be.` ] }
  }[F.d];
};
W.MOOD = {
 joy:    { feel:'happy and joyful', mood:'joy' },
 calm:   { feel:'calm, and quiet, and still', mood:'calm' },
 wonder: { feel:'full of wonder', mood:'wonder' },
 tender: { feel:'tender, and warm', mood:'tender' }
};
W.TITLES = {
 present: { science:'The Night Sky Over the Rooftops', romance:'A Light in the Window', mystery:'The Humming at Midnight', friend:'Soup for the Whole Street' },
 ancient: { science:'The Scribe Who Counted the Stars', romance:'Two Lamps in the Dark', mystery:'The Bell That Rang Itself', friend:'The Long Table at Midwinter' },
 future:  { science:'The Light That Left Before You Were Born', romance:'A Message Across the Ring', mystery:'The Quiet Corridor', friend:'The Garden at the Edge of the Station' },
 dream:   { science:'The Library of Falling Stars', romance:'The Ribbon Between Two Hills', mystery:'The Door That Was Always Open', friend:'The Fox Who Kept the Lanterns' }
};
const cx = F => ({ E: W.ERA[F.a], P: W.PLACE[F.c], C: W.COMP(F), T: W.TYPE[F.b], M: W.MOOD[F.e], title: W.TITLES[F.a][F.b] });
W.cx = cx;
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
W.cap = cap;

/* ---------------------------------------------------------------- the registration and the five opening questions */
G.bedStory('whatever', {
  title:'Whatever Comes, Whatever Give', icon:'✨', art:'starfield|✨', start:'q1', rate:0.85, pitch:0.9, askWait:15, endTotal:1024, endNoun:'stories',
  music: F => ({ mood: (W.MOOD[F.e] || W.MOOD.calm).mood, world: F.a || 'dream' }),
  endCode: F => [F.a, F.b, F.c, F.d, F.e].join('-'),
  tag:'A bedtime story made to order · five opening questions, then no more choices · over a thousand different stories · soft music · each about fifty minutes',
  desc:'Before you sleep, answer five short questions: when and where you would like to be, what kind of story you want, who you would like beside you and how it should feel at the end. Then the choices stop, the music begins softly, and a story made just for your answers is told to you from start to finish, slowly, and with no interruptions. Over a thousand different stories are possible, each about fifty minutes long.',
  intro:'WHATEVER COMES, WHATEVER GIVE\nA bedtime story made to order.\nFirst, five short questions, each with four answers, about the kind of story you would like to hear tonight. After the fifth, the choices stop for good. Soft music begins, and one long story, made from your answers, is told to you without interruption, for about fifty minutes. Close your eyes, or dim the screen, and let it carry you off to sleep.',
  nodes: {

q1: { ask:true, flag:'a', title:'Question One', art:'starfield|✨', text:[
`Welcome. Tonight, the story will be made just for you. First, I will ask you five short questions, and after the last one, there will be no more choices at all. You will only have to listen. If you would like to choose, press a number key or tap. If you wait a little, the dice will choose for you.`,
`Question one of five. Where, in time, would you like tonight's story to take place?`
], opts:[
 { t:`Right now, in the world of today.`, v:'present', to:'q2' },
 { t:`Long ago, in ancient or medieval times.`, v:'ancient', to:'q2' },
 { t:`Far in the future, among the stars.`, v:'future', to:'q2' },
 { t:`In a timeless dreamland that never was.`, v:'dream', to:'q2' }
]},
q2: { ask:true, flag:'b', title:'Question Two', art:'starfield|✨', text:[
`Question two of five. What kind of story would you like to hear?`
], opts:[
 { t:`A scientific tale of wonder and discovery.`, v:'science', to:'q3' },
 { t:`A gentle, romantic tale.`, v:'romance', to:'q3' },
 { t:`A quiet mystery, with a soft answer.`, v:'mystery', to:'q3' },
 { t:`A warm tale of friendship and kindness.`, v:'friend', to:'q3' }
]},
q3: { ask:true, flag:'c', title:'Question Three', art:'starfield|✨', text:[
`Question three of five. Where would you like to be?`
], opts:[
 { t:`By the sea, or beside a river.`, v:'water', to:'q4' },
 { t:`In the hills and the forests.`, v:'wild', to:'q4' },
 { t:`In a town or a city at night.`, v:'town', to:'q4' },
 { t:`High up, close to the sky and the stars.`, v:'sky', to:'q4' }
]},
q4: { ask:true, flag:'d', title:'Question Four', art:'starfield|✨', text:[
`Question four of five. Who would you like to have beside you?`
], opts:[
 { t:`A wise and kindly guide.`, v:'guide', to:'q5' },
 { t:`Someone dear to you.`, v:'dear', to:'q5' },
 { t:`A gentle animal friend.`, v:'animal', to:'q5' },
 { t:`No one. Just you, and the night.`, v:'alone', to:'q5' }
]},
q5: { ask:true, flag:'e', title:'Question Five', art:'starfield|✨', text:[
`The last question. Question five of five. How would you like the story to feel when it ends?`
], opts:[
 { t:`Happy, and joyful.`, v:'joy', to:'t_pre' },
 { t:`Calm, and quiet, and still.`, v:'calm', to:'t_pre' },
 { t:`Full of wonder.`, v:'wonder', to:'t_pre' },
 { t:`Tender, and warm.`, v:'tender', to:'t_pre' }
]}

}});

/* ---------------------------------------------------------------- the prelude: told once, whatever you chose (about 650 words) */
W.MOD.prelude = F => { const { E, P, C, T, M, title } = cx(F); return [
`Thank you. That is all the choosing for tonight. From here until the end, there is nothing at all for you to do, and nothing to decide. The music is beginning, very softly, somewhere beyond the edge of hearing, and the story will tell itself. All you need to do is lie back, and listen, and let your breathing grow slow.`,
`Tonight's story is called ${title}. It is ${T.noun}, set ${E.when}, ${P.where}, with ${C.recap}. And when it ends, it will feel ${M.feel}. It has never been told before in exactly this way, and it will never be told in exactly this way again, because it was made, just now, from your own five answers.`,
`So. Let your head sink into the pillow. Let it sink a little deeper than it did a moment ago, as though the pillow were made of warm, soft sand, and your head were the first thing to rest on a beach at the end of a long day. Let your forehead smooth out. Let your jaw loosen, and your tongue grow heavy and lazy in your mouth. Let your shoulders drop.`,
`Breathe in, slowly, through your nose, and feel the air fill you from the bottom, like water filling a jar. Hold it for a moment, only a moment. And let it go, slowly, through your mouth, and let everything go with it. Once more. In, and hold, and out. Already, your body feels a little heavier, and a little warmer, and a little further away.`,
`Feel your hands. They are resting wherever they are resting, and they are quite finished for the day. Feel your arms, heavy as warm bread dough. Feel your legs, long and loose and tired in the best way. Feel your feet, which have carried you through so much today, and which may now put the whole thing down.`,
`Somewhere nearby, the world is going quiet. The sounds of the day are folding themselves away, one by one, like children's clothes put neatly on a chair. A door closes, a long way off. A voice says goodnight. The last bright thing in the room, whatever it was, grows dim, and the dark that is left is the soft, friendly dark of a place that is safe.`,
`You are not in a hurry. You have never been in less of a hurry in your life. There is a whole night ahead of you, and it is yours, and it is long, and slow, and kind. And in the middle of the night, a little way ahead, there is a story waiting. It has been waiting for you, patiently, the way a lamp waits in a window.`,
`In a moment, the room around you will begin to soften. The edges of things will blur, and brighten, and turn to something else, the way the edges of a dream do. You will not have to do anything. You will simply find that you are somewhere else, and that it is perfectly all right, and that you have been there all along.`,
`Breathe in. And breathe out. The room is growing soft. The pillow is growing soft. The dark behind your eyes is turning, very gently, into the first scene of the story. Here it comes. Let it come. Let it come as slowly as it likes.`
]};

/* ---------------------------------------------------------------- THE WORLD: where and when you find yourself (about 800 words each) */
W.MOD.world = {
present: F => { const { E, P, C } = cx(F); return [
`You are standing in the middle of the world of today, at night, and it is quieter than you remember it ever being. The day's noise has drained away, as it does every evening, and left something softer behind: a hush made of a thousand small sounds that are too gentle to be called noise at all. A fridge hums, somewhere behind a wall. A tap drips, once. A car passes, very slowly, and its lights slide over the ceiling of the sky and are gone.`,
`The ${E.lamps} are lit, each one standing in its own round pool of yellow light, like a row of small suns that have agreed to be gentle. Moths turn in the light, slow and soft and silent. Beyond the ${E.lamps}, there are ${E.glow}, dozens of them, hundreds, each one a room where someone is brushing their teeth, or reading the last page of a chapter, or standing at the sink, looking out at nothing, for a minute, which is one of life's quiet pleasures.`,
`You can hear ${E.hum}, going by in the dark, a long way off, and then a little further, and then not at all. It is a lonely sound for some people, and a comforting one for others. Tonight, for you, it is comforting. It is the sound of the world carrying on, steadily, with its own business, while you rest. There is nothing you need to do about it. The trains know where they are going.`,
`The air is cool, and smells faintly of rain on warm pavement, and of someone's late supper, and of the sweet green smell of cut grass from a garden you cannot see. You are wearing your ${E.cloak}, and it is exactly the right weight, and the pockets are deep. You put your hands in them, and feel the small, familiar things that live there: a coin, a key, a folded receipt, a scrap of something that might once have been a sweet.`,
`Overhead, past the glow of the ${E.lamps}, the sky is very dark, and very high, and strewn with the few stars that can win against the city's light. You do not need many. A handful is enough. There is the pale, calm shape of the moon, low in the east, round as a plate, and a single bright planet, steady and unblinking, which is not a star at all, but another world, going about its own quiet business, a very long way away.`,
`It is the hour when ordinary things become beautiful. A bin lorry waits, silent, at the corner, its orange light turning. A cat on a wall washes one paw and looks at you without surprise. A paper bag moves, very slightly, along the gutter, in a breeze that you can hardly feel. Everything is where it belongs, and everything has stopped, for the night, at the end of a long day, and is resting.`,
`Somewhere, a window opens, and a voice says, quite quietly, that the washing is still out. Somebody laughs, softly, and the window closes. You smile. These are the small, kind, domestic sounds of people who are looking after each other, without any fuss, in the ordinary way, as people always have. Nobody is being clever. Nobody is hurrying. It is only evening, and everybody is nearly home.`,
`You begin to walk. It does not matter where. You have the feeling, which comes only rarely, that wherever you walk tonight will turn out to be the right way, that the night itself will lead you, the way a river leads a leaf. Your feet find the pavement, and the pavement is cool, and your steps are slow and even and quiet, and the quiet goes in and out with your breath.`,
`And as you walk, you feel the day finally leaving you. It does not go all at once. It goes like the tide, a little further out with each step, leaving the beach of your mind smooth and clean and wide. The things you meant to do, the things you said, the things you forgot, they are all out there somewhere, far away, small and bright and harmless, like boats on the horizon.`
]},
ancient: F => { const { E } = cx(F); return [
`You are walking along a worn road, long ago, in the soft blue hour after the sun has gone, and the whole land is settling for the night. The road is made of packed earth and old stones, smoothed by a thousand years of feet and wheels and hooves, and it winds ahead of you between low walls of piled grey rock. The air is cool, and smells of woodsmoke, and wet leaves, and the warm, animal smell of cattle in a nearby barn.`,
`There are no engines here, and no wires, and no hum of anything that was built to be loud. There is only the world, speaking in its own small voices. A stream, somewhere, tumbling over stones. A breeze moving in the tops of tall trees. Far off, ${E.hum}, drifting over the fields, patient, and slow. And somewhere, closer, a dog barks twice, and thinks better of it, and lies down.`,
`You are wearing a ${E.cloak}, rough, and heavy, and warm, and it smells of sheep and rain and wood-smoke, and it wraps around your shoulders like the arms of a very large and quiet friend. You pull it closer. On your feet are good strong boots, softened by long use, and in a leather pouch at your belt are the few small things that a traveller carries: a knife, a crust of bread, a stub of candle, a flint.`,
`Ahead, on the side of the hill, there are lights. They are small, and yellow, and unsteady, the lights of ${E.lamps} and hearth fires, glowing through gaps in shutters and under the edges of thatched roofs. There are perhaps thirty of them, scattered across the slope like fallen sparks, and each one is a home, and each home has a family in it, and each family is settling down to sleep, as families have always done.`,
`A thin line of smoke rises from every chimney, straight up, in the windless air, and spreads out, high above, in a long, pale roof. The smoke smells of apple wood, and oak, and peat. Somewhere, somebody is baking, a very late loaf, for the morning, and the smell of it drifts down the road to meet you, warm, and sweet, and yeasty, and utterly comforting. Your stomach gives a gentle, contented rumble.`,
`On the top of the hill, black against the deep blue of the sky, stands the ${E.peak}, old and square and solid, with a small flame burning in its highest window. It has stood there for longer than anyone can remember. Somebody lights that flame every night, and somebody puts it out every dawn, and in between, it tells every traveller on every road, there is a place here, and you are welcome.`,
`The first stars are coming out, one by one, in the east, over the dark shoulder of the hills. They are much brighter than the stars you may have known. There is no glow of cities to dim them, and there are so many of them, scattered thickly across the sky like grain thrown out of a sower's hand, that the dark between them seems hardly to be there at all. You look up, and let yourself be small under them, and it is a peaceful thing, to be small.`,
`${E.chime[0].toUpperCase() + E.chime.slice(1)}, very far away, and the sound rolls over the fields and the hedges and the sleeping animals, round and golden and slow, and fades, and is gone. The villagers will be counting it. Somebody will be saying, in a low voice, to a child who will not settle, that it is time to be asleep. And the child will say, just one more story. And the grown-up will say, just one.`,
`You walk on, along the old road, with your cloak around you, and the stones under your boots, and the lights on the hill growing nearer, one slow step at a time. You are not tired in the way that hurts. You are tired in the way that is almost the same as being happy, the way you are tired after a long day of good work. The road is kind. The night is kind. Everything is going to be quite all right.`
]},
future: F => { const { E } = cx(F); return [
`You are walking along a curving corridor, far in the future, a very long way from the world you were born in, and the world you are in now is a great, slow wheel, turning in the dark between the stars. It is called the ring, and it is as big as a town, and it carries thousands of people, in their homes, and their gardens, and their schools, through the vast, cold, silent night of space, and nobody on it is afraid at all.`,
`It is evening on the ring. The lights have been dimmed, as they are every evening, from the bright white of day to the soft, warm amber of dusk, so slowly that nobody notices it happening. Along the walls run ${E.glow}, glowing gently, and under your feet the floor is smooth and slightly springy, and there is a faint, steady vibration in everything, ${E.hum}, so deep and so constant that you feel it more than hear it, like a heartbeat in the walls.`,
`You are wearing your ${E.cloak}, light and soft, and warm against the cool, clean air. On your wrist is your ${E.track}, glowing a calm green, to tell you that everything is well. You pass a window, a long, wide, curving window, and you stop, as you always stop, because beyond it there is nothing at all, only the stars, so many, and so bright, and so utterly still, that for a moment you forget to breathe.`,
`They do not twinkle here, because there is no air to make them twinkle. They are simply there, hard, and clear, and perfect, thousands of tiny white points laid out on a black cloth. And far away, at the very edge of the window, there is a small blue-white spark that is the sun, and a fainter one beside it that is the world, from which, long ago, your many-times-great-grandparents set out. You wave to it, a little, in your mind.`,
`The corridor is quiet. Doors slide open, softly, as you pass, and close behind you with a sound like a sigh. Through one, you glimpse a family at a table, eating ${E.bread}, with a small child asleep across two chairs. Through another, an old man sits in a chair, reading a very old paper book, turning its pages with one slow finger. Through another, a girl is practising a song on a violin, very quietly, so as not to wake her little brother.`,
`Everyone you pass nods to you, or smiles, or lifts a hand. ${E.folk[0].toUpperCase() + E.folk.slice(1)} know each other here, in the way that people always do when they live close together on a long journey, through a great deal of ordinary kindness. Somebody has left a small pot of herbs outside every door. Somebody has painted a row of tiny yellow stars along the wall. Somebody has hung a sign that says, quite simply, rest well.`,
`${E.chime[0].toUpperCase() + E.chime.slice(1)}, once, to mark the hour, and the sound goes all the way round the ring, and comes back to you from the other side, very faint, and very sweet. It takes about a minute to go round. You stand and listen to it go, and listen to it return, and you think that it is the loveliest thing you have heard in a long time, and a perfectly good reason to stay awake for another second, and then to fall asleep.`,
`A small cleaning drone glides past, humming to itself, no larger than a loaf of bread, polishing the floor in long, slow, careful strokes. It pauses beside you, tilts, and gives a friendly little chirp, as if to say, good evening, and carries on. Everything on the ring is quietly looked after. Everything has somebody, or something, to tend it, and nothing is forgotten, and nothing is left behind.`,
`You begin to walk again, slowly, along the great curve, and the floor ahead of you seems to rise gently, forever, though you know it is only the curve of the ring, going round and round, and round. There is no end to it, and no beginning, and no need to hurry along it. It is simply a long, quiet road in the dark, with lights, and homes, and stars, and you are on it, and it is a good place to be.`
]},
dream: F => { const { E } = cx(F); return [
`You are in a dreamland, outside of time, and it is not like anywhere you have been, and yet it feels as familiar as the inside of your own pillow. The sky is the colour of deep violet, shot through with silver, and it hangs very low, so low that you feel you could reach up and touch it, and find it soft, like velvet, or like the skin of a plum. There is no sun, and no moon, and yet everything is gently lit, from within.`,
`The air is warm, and very still, and it smells of everything you have ever loved, all at once: baking bread, and new rain, and the pages of an old book, and the damp fur of a dog that has been playing in the garden, and the inside of your grandmother's coat. You breathe it in, and it fills you up, slowly, and warmly, and you feel, from the soles of your feet to the crown of your head, quite perfectly safe.`,
`You are wearing a ${E.cloak}, and it is made of something that feels like a soft grey cloud, and it is so light that you can hardly feel it, and so warm that you could sleep in it, standing up. It moves around you, slowly, in a wind that is not there. Your feet do not quite touch the ground, though they do not float either. They rest on something that is somewhere between a path and a thought.`,
`All around you, ${E.lamps} drift, gently, through the dark, each one a small, round, glowing light, red, or gold, or soft green, or the blue of the very first hour of morning. They rise, and fall, and turn in slow, lazy circles, like leaves in a pond. When you hold out a hand, one of them settles on your fingers, as lightly as a moth, and glows there, warm, and hums, very quietly, to itself, a tune with no words in it.`,
`Far off, you can hear ${E.hum}, a long, slow, deep, comforting sound, like a very large animal sleeping. It rises, and falls, and rises, as steadily as the tide. You find that your own breath has fallen in with it, and that when it rises, you rise, and when it falls, you fall. It is as if the whole land were breathing in one slow, enormous, happy sleep, and you were a small part of the dream it was having.`,
`There are hills here, round and soft and green-black, like the backs of great sleeping animals. There are trees, whose leaves are the colour of silver, and which chime very faintly as they move. There are rivers, which flow upward, in long, shining ribbons, into the sky, and fall as rain, from somewhere else, on the other side. None of it is strange. All of it is as it should be, in a place where nothing needs to make sense.`,
`${E.chime[0].toUpperCase() + E.chime.slice(1)}, and the chime floats through the dark, and everything leans a little toward it, the ${E.lamps}, and the trees, and the hills, and you. It is a sweet, round, silvery sound, and it seems to say, there is nothing to be afraid of, here, and nothing to be done, and everything is already, quite beautifully, taken care of.`,
`Somewhere, a very long way off, you think you hear singing, and it is not any song you know, and yet you know it completely. It is made of all the lullabies there have ever been, sung by all the people who have ever sung them, to all the children who have ever been tucked in and kissed on the forehead and told to sleep. It is the song of every goodnight in the history of the world, and tonight, it is for you.`,
`You begin to walk, though there is no road. Your feet find their way across the soft ground, as easily as a boat finds its way across a pond, and the dream moves with you, opening gently ahead, and closing gently behind. There is nowhere in particular to go, and no hurry to get there. You are in the right place already, you are going to the right place next, and the road between is as kind as the destination.`
]}
};
})();
