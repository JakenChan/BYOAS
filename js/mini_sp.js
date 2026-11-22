/* Random encounters for "Stolen Sky": knowledge questions, bizarre events, hazards and children who need help. */
(function(){
const G = globalThis.G;
const RK = (p, msg, fx) => [p, msg, fx];
const o = (t, y, fx, req, risk) => [t,'',y,fx||'xp+s','','',req||'',0,risk];
const c = (t, chk, y, fx, n, nfx, req, risk) => [t,chk,y,fx||'xp+m',n||'It does not work out.',nfx||'xp+s',req||'',0,risk];
const dare = (t, mp, y, fx, req) => [t,'',y,fx||'xp+l','','',req||'',mp];
const L = (reg, title, em, text, ...opts) => [reg, title, em, text, opts];

/* ================= KNOWLEDGE ================= */
// [question, right, wrong1, wrong2, fact]
const Q = [
['Before satellites, sailors found their latitude at sea with which instrument?','A sextant','A barometer','A pendulum','A sextant measures the angle between the horizon and the Sun or a star.'],
['Which code sends messages as short and long signals, dots and dashes?','Morse code','Braille','Binary stripes','Morse code let people send messages across oceans by telegraph.'],
['Which Apollo mission put the first humans on the Moon, in 1969?','Apollo 11','Apollo 13','Apollo 8','Neil Armstrong and Buzz Aldrin walked on the Moon in July 1969.'],
['Who made the first powered, controlled aeroplane flights in 1903?','The Wright brothers','Louis Blériot','The Montgolfier brothers','Orville and Wilbur Wright flew at Kitty Hawk, North Carolina.'],
['Which ancient Greek device tracked the Sun, Moon and stars with gears?','The Antikythera mechanism','The Rosetta Stone','The Piri Reis map','Found in a shipwreck in 1901, it is sometimes called the first analogue computer.'],
['Who became the first person to orbit the Earth, in 1961?','Yuri Gagarin','Neil Armstrong','Alan Shepard','Gagarin circled the Earth once in Vostok 1.'],
['Which is the largest ocean on Earth?','The Pacific','The Atlantic','The Indian','The Pacific covers about a third of the whole planet.'],
['Which imaginary line circles the Earth halfway between the North and South Poles?','The equator','The prime meridian','The Tropic of Cancer','The equator is at zero degrees latitude.'],
['Which continent is almost entirely covered in ice?','Antarctica','Greenland','Australia','Antarctica holds about 70 percent of the world\'s fresh water, as ice.'],
['Roughly how much of the Earth\'s surface is covered by water?','About 70 percent','About 30 percent','About 50 percent','That is why the Earth looks so blue from space.'],
['From orbit at night, what shows up brightest on Earth?','Big cities','Deserts','Oceans','City lights make bright, glittering webs on the dark side of the planet.'],
['In which direction does the Sun rise?','East','West','North','The Earth spins from west to east, so the Sun appears to rise in the east.'],
['What is the next prime number after 7?','11','9','13','Primes have exactly two factors. 9 is 3 times 3, so it is not prime.'],
['What comes next: 2, 4, 8, 16, ...?','32','24','30','Each number doubles the one before it.'],
['A shuttle flies steadily 300 km in 10 minutes. How far does it go in 30 minutes?','900 km','600 km','3,000 km','Thirty minutes is three tens, so 3 times 300 is 900.'],
['What do the angles of any triangle add up to?','180 degrees','360 degrees','90 degrees','Tear off the corners of any paper triangle and they line up into a straight line.'],
['What is binary 101 in ordinary numbers?','5','3','10','1 times 4, plus 0 times 2, plus 1 times 1 makes 5.'],
['Plants take in which gas from the air to make their food?','Carbon dioxide','Oxygen','Helium','Photosynthesis turns carbon dioxide and water into sugar and oxygen.'],
['What do antibiotics treat?','Bacterial infections','Viruses','Broken bones','Antibiotics do nothing against viruses such as colds and flu.'],
['What carries oxygen around your blood?','Red blood cells','White blood cells','Platelets','Red blood cells contain haemoglobin, which grabs oxygen in your lungs.'],
['Which molecule carries the genetic instructions of living things?','DNA','ATP','Glucose','DNA is a long, twisted ladder of four chemical letters.'],
['Making yoghurt, insulin or biofuel with microbes is an example of what?','Biotechnology','Astronomy','Geology','Biotechnology uses living things, such as bacteria and yeast, to make useful products.'],
['What gives you "weight" on the inside of a spinning space habitat?','The spin of the ring','The ship\'s magnetism','The engines pushing down','The spin flings you outward against the floor, which feels just like gravity.'],
['What does a fuse do?','It breaks the circuit if too much current flows','It stores electricity','It makes current stronger','A fuse sacrifices itself so that the equipment is not damaged.'],
['Which gas makes up most of Earth\'s air?','Nitrogen','Oxygen','Carbon dioxide','Air is about 78 percent nitrogen and 21 percent oxygen.'],
['Without air, how fast does a feather fall compared with a hammer?','The same speed','The hammer falls faster','The feather floats up','An astronaut proved this on the Moon during Apollo 15.'],
['Which of these materials conducts electricity best?','Copper','Rubber','Glass','Copper wire is used almost everywhere that electricity has to travel.'],
['Ohm\'s law links voltage to which two things?','Current and resistance','Mass and speed','Heat and light','Voltage equals current times resistance.'],
['About how long does the Moon take to orbit the Earth?','About 27 days','About 7 days','About 365 days','The Moon\'s orbit gives us the cycle of months.'],
['Which planet is called the Red Planet?','Mars','Venus','Jupiter','Iron oxide, rust, in Mars\'s soil gives it its red colour.']
];
const FR = [['A small, frightened girl tugs your sleeve. "Please ask me a question," she whispers. "It stops me thinking about everything else." You nod, and give her one.','🧒'],
 ['A boy sitting against the wall says: "Quiz me. Anything. I need my brain to stay busy."','🧒'],
 ['You find a scribbled note taped to a bulkhead: "Whoever reads this: do you remember this? Please say yes."','📝'],
 ['In the gloom, two children are arguing in whispers. "Settle it," one says to you. "Ask the smart one. Is it true that..."','💬'],
 ['A teenager, pale and exhausted, tries to lighten the mood. "Pop quiz time," she says, with a wobbly smile.','🧑'],
 ['A tired voice from the dark says, almost to itself: "What was it again, the answer to that one from class...?"','💭'],
 ['Someone scratches a question on the wall with a fingernail, and waits.','✏️']];
const quiz = Q.map((q,i)=>{ const [qq,right,w1,w2,fact]=q; const fr=FR[i%FR.length]; const rot=i%3; const arr=[[right,true],[w1,false],[w2,false]]; const ord=[0,1,2].map(k=>arr[(k+rot)%3]);
  const opts = ord.map(([t,ok])=> ok ? o(t, `Correct! ${fact}`, 'xp+m mp+1 quiz+') : o(t, `Not quite. The answer is "${right}". ${fact}`, 'xp+s quiz-'));
  return ['any','A Question to Keep the Mind Busy',fr[1],`${fr[0]} "${qq}"`, opts]; });
G.miniArch('sp_quiz', quiz);

/* ================= BIZARRE EVENTS ================= */
G.miniArch('sp_event', [
L('any','The Floor Becomes the Wall','🌀',`There is a low groan, a shudder, and then the floor of the corridor seems to tilt. The ship is changing its spin, and for a dizzy ten seconds, the direction of "down" slides sideways. Cups, shoes and a lost sock begin to roll along the floor toward the right-hand wall. The younger children scream.`,
 c('Grab the rail and haul the nearest children to it.','STR 8 endure',`You snatch two small hands and wrap your arm round the rail. The floor tilts and tilts, and then, with a thump, the world settles. Every child is still with you.`,'xp+l mp+2 flag:sp_kind','You hold on, but you lose your grip on one of the smallest. She is found a few minutes later, bruised and furious, but she is safe.','xp+m hp-2'),
 o('Shout: "Everyone, lie flat and spread your arms!"',`Nobody argues. The children flatten themselves to the floor, and the shift passes over them like a wave. A few bruises, a lot of nervous giggles.`,'xp+m mp+2 flag:sp_smart'),
 o('Hold on to the nearest pipe and wait.',`It lurches and groans for ten long seconds. Then it is over, and you are very glad of that pipe.`,'xp+s hp-1')),
L('any','The Singing Wall','🎶',`The wall begins to hum. It is a low, pure tone, then another, and then a rhythm: two taps, three taps, five taps, seven taps, eleven taps. A strip of light pulses in time with it. Then it waits.`,
 o('Tap the wall thirteen times.',`The strip of light brightens. The next panel in the wall slides open with a sigh, revealing a small recess with a power cell, and a little puff of warm air. The wall seems, impossibly, pleased.`,'xp+l +sp_cellpack mp+3 flag:sp_smart','skill:sp_math|skill:sp_code'),
 c('Work out the pattern, then reply to it.','INT 9 lore',`Primes! Two, three, five, seven, eleven. You tap thirteen, and the wall sings a happy chord. A panel opens, and inside you find a small, warm power cell.`,'xp+l +sp_cellpack mp+3 flag:sp_smart','You cannot see the pattern. The wall waits, then loses interest.','xp+s'),
 o('Tap along randomly.',`The wall emits a rude buzz and gives up on you.`,'xp+s mp-1'),
 o('Leave it alone and walk on.',`The humming follows you down the corridor, and then fades.`,'xp+s')),
L('any','The Water Sphere','💧',`In a round, white room with no floor lights, a huge sphere of water floats in the middle of the air, wobbling gently, as big as a car. Small silver fish dart around inside it. A group of children are staring up at it in awe, and one is reaching out a hand.`,
 o('Pull the child back, and explain surface tension.',`"It holds together because the water molecules stick to each other," you say. "If you touch it, it will wrap round your hand, and then your face." She snatches her hand back, and her eyes grow very wide.`,'xp+m mp+2 flag:sp_kind'),
 o('Touch it, very gently, with one finger.',`The sphere ripples and clings to your fingertip, cool and trembling. Beautiful, and entirely harmless.`,'xp+s mp+2','',RK(25,'The sphere lunges, wraps your whole hand, and a long bubble climbs your arm. You pull free, coughing, with a soaked sleeve and a very wet fringe.','hp-2 mp-2')),
 c('Catch a fish in your cupped hands.','DEX 8 dodge',`You scoop one up, and it flicks free in a bright silver flash. A little girl laughs for the first time in two days.`,'xp+m mp+3 flag:sp_kind','The fish slides away and the water slaps your face. Everyone giggles.','xp+s hp-1')),
L('any','The Food Slot','🍲',`A hatch in the wall opens, and a tray slides out: a bowl of translucent green jelly, a cup of something pink and bubbling, and four grey cubes that smell faintly of oranges. Hungry children crowd round.`,
 o('Test a tiny taste yourself first.',`The jelly is bland, the cubes are chewy, and the pink liquid tastes like strawberries that have been to the dentist. Nothing happens. You nod, and let the others eat.`,'xp+m hp+4 flag:sp_kind','',RK(20,'An hour later, you are dizzy and your skin tingles. The pink drink was not meant for humans. A few of the other children, who followed your lead, are miserable too.','hp-3 mp-3')),
 c('Study the food and check what is in it.','INT 9 lore',`The jelly is mostly algae and sugar, perfectly safe. The pink liquid is not: it is a mild sedative. You pour it away, and the children eat the rest.`,'xp+l hp+4 mp+2 flag:sp_smart','Everything looks the same to you. You guess, and let the children eat only the jelly.','xp+s hp+2'),
 o('Tell everyone to eat nothing.',`It is the cautious choice. It is also a long, hungry few hours.`,'xp+s mp-1')),
L('any','The Hall of Mirrors','🪞',`A long hall is lined with polished metal on both sides, and an endless line of children, hundreds of you, stretches off into the distance in either direction. A single doorway, somewhere, leads out. You cannot tell which of the reflections is real.`,
 c('Touch the wall, and follow it with your hand.','WIS 8 survive',`You keep one hand on the left wall and walk. Reflections never fool a hand. A hundred steps later, you find the doorway, and every child streams through.`,'xp+l mp+2','The wall curves in ways you did not expect. You walk in a very big circle before you find the door.','xp+s mp-2'),
 o('Throw a shoe at the nearest reflection.',`Clang. The shoe bounces off a mirror, and you know which wall is real. You find the door a moment later, minus one shoe.`,'xp+m mp+1'),
 o('Close your eyes and walk straight ahead.',`You walk into a mirror, and a lot of identical children wince at once.`,'xp+s hp-2')),
L('any','A Window Full of Stars','🌌',`A long, curved window opens on to the dark. Thousands of unblinking stars hang in it, brighter than you have ever seen them, and in the corner, very small and very blue, the Earth. A few children are pressed against the glass in silence. One of them is crying.`,
 c('Try to name the constellations you can see.','WIS 9 survive',`Orion, the Hunter, with his three-star belt; the Pleiades like a tiny dipper. You point them out one by one, and the children, one by one, stop crying. For the first time, the stars feel like old friends.`,'xp+l mp+4 flag:sp_kind','You are not sure which stars are which, but your voice is calm, and it helps.','xp+m mp+2','skill:sp_geo'),
 o('Sit next to the crying child and say nothing.',`You sit, and she leans against your shoulder. Eventually, she stops crying. Eventually, you both stop being afraid.`,'xp+m mp+3 flag:sp_kind'),
 o('Use the view to work out where the ship is heading.',`The Earth is moving to the left, and growing smaller. The ship is heading directly away from the Sun. You write the numbers on your hand. Time is running out.`,'xp+m mp-1 flag:sp_knows_orbit')),
L('any','The Collection Hall','📦',`Row after row of glass cases stretch away into the dark, and in each one is something taken from Earth: a vinyl record, a bicycle, a bowl of fruit, a snow globe, a violin, a toy bear, a whale's skeleton in pieces. A card in an unknown script labels every one. In a corner, a little girl is staring at a case with a teddy bear in it. "That's mine," she whispers.`,
 o('Look for a way to open the case.',`You find a small latch and click it. The teddy bear falls into her arms. She hugs it so hard, you think she might never let go. The aliens have collected more than children.`,'xp+m mp+3 flag:sp_kind'),
 c('Read the records on the vinyl disc.','INT 8 lore',`A gold record, like one sent into space in 1977. A message from Earth to anyone listening. You realise the Vell found it, and followed it, all the way home. They are not invaders. They are visitors, who made a terrible mistake.`,'xp+l mp+2 flag:sp_knows_vell','You cannot read it, but you wonder what else the Vell have collected.','xp+s'),
 o('Take the violin, just in case.',`It is useless as a weapon and heavy to carry, but you feel better with it.`,'xp+s mp+1 +sp_yoyo')),
L('any','The Frozen Corridor','🧊',`The door hisses open on a corridor white with frost. Your breath hangs in the air, and the walls are glazed with ice. It is the shortest way across, and the cold bites through your clothes in seconds.`,
 o('Wrap up in a thermal blanket and run for it.',`Foil, speed and stubbornness. You race through with your teeth chattering, and come out the other side with frozen eyelashes and a very big grin.`,'xp+m mp+2 -sp_foil','item:sp_foil'),
 c('Move quickly, keeping close to the warm pipes.','CON 9 endure',`You hug the pipes, and run. Frost bites your ears and your fingers, but you reach the end with only a few tears and a lot of pride.`,'xp+m mp+2 hp-1','The cold is crueller than you expected. You stagger out, shivering and numb.','xp+s hp-3'),
 o('Go back and find another way.',`The long way takes an hour, but there is no frost at all.`,'xp+s')),
L('any','The Mimic Drone','🤖',`A small, round drone drifts out of a vent, chirping. It flashes a pattern of lights: red, blue, red, red. Then it waits. When you do not respond, it flashes it again, faster, and a thin red beam begins to sweep across the corridor.`,
 c('Copy the pattern with your torch.','DEX 8 craft',`Red, blue, red, red. You flash it back. The drone chirps, turns green, and drifts away. It is only an alien greeting. A very polite alien greeting.`,'xp+l mp+2 flag:sp_smart','Your timing is wrong. The beam sweeps over you, and the drone makes a sharp, unhappy sound before it leaves.','xp+s mp-2','item:sp_flashlight'),
 o('Duck behind a crate until it moves on.',`The drone hesitates, flashes once, and drifts off down the corridor, bored.`,'xp+s mp+1'),
 o('Throw something to distract it.',`A shoe bounces down the corridor. The drone chases it. You and the children slip away.`,'xp+m mp+1')),
L('any','The Garden of Sleeping Flowers','🌺',`A small side-room is full of tall, blue-and-gold flowers that glow softly in the dim light. They smell of honey and vanilla. A group of tired children have already settled down among them, eyes half-closed, smiling dreamily.`,
 c('Pull the children out and open the door for fresh air.','STR 8 endure',`You haul them out one by one, and slam the door on the sweet-smelling room. The children yawn and rub their eyes. "That smelled nice," says one, groggily. You are very glad you came when you did.`,'xp+l mp+2 flag:sp_kind','You drag out most of them, but the smell is already working on you, and the rest of the room spins. Someone takes your hand and leads you out.','xp+m hp-2 mp-2 kids-3'),
 o('Hold your breath and call them from the doorway.',`Half of them stir and stumble to you. The other half are fast asleep. You have no choice but to carry them out one by one, holding your breath until your lungs burn.`,'xp+m hp-1'),
 o('Leave them to sleep; the flowers look harmless.',`They sleep for hours, and the whole group is delayed. When the wardens find the room, you lose some of them.`,'xp+s kids-6')),
L('any','The Silent Hall','🔇',`The hall is huge and entirely silent. No hum, no hiss, no footsteps; your own breath makes no sound. A long line of alien lamps hangs from the ceiling, dark. In the middle of the floor, a very large machine is slowly spinning.`,
 c('Cross quietly along the wall.','DEX 8 sneak',`You slip along the wall, one slow footstep at a time, and slide out through the far door. The machine never stops spinning.`,'xp+m mp+2','You knock a dark lamp, which wakes up with an unpleasant, sudden glare. The machine slows, and begins to turn toward you.','xp+s mp-2 hp-1','skill:sp_stealth'),
 o('Walk straight across the middle.',`Nothing happens, nothing at all, which is somehow worse. Halfway across, a pale blue light sweeps over you, hesitates, and moves on.`,'xp+s mp-1','',RK(25,'The light finds a child at the back of the group, and a low alarm begins to whine. A drone sweeps in, and some of the children are separated before you can get away.','kids-5')),
 o('Go back and find another route.',`There is always another route. It takes an hour, but it is quiet.`,'xp+s')),
L('any','The Alien Lullaby','🎵',`Somewhere ahead, in the dark, someone, or something, is humming. It is a gentle, strange tune, in a scale you have never heard, and it makes your skin tingle. It does not sound like a threat. It sounds like a creature that is very, very homesick.`,
 o('Hum back, very softly.',`The humming stops. Then it begins again, hesitantly, a little closer. A soft, many-armed shape glides out of the shadows, looks at you, and, tentatively, waves one tentacle.`,'xp+l mp+3 flag:sp_knows_vell'),
 c('Walk toward it, hands visible.','WIS 8 resist',`You walk with your palms open. The creature watches you, shivering, and then, slowly, lowers its arms. It is as frightened of you as you are of it.`,'xp+l mp+2 flag:sp_knows_vell','The creature flinches and slides back into a vent. You hear it humming, far off, and you wish you had tried harder.','xp+s'),
 o('Back away quietly.',`You do not know what it was. You are curious, and a little ashamed, for a long time afterwards.`,'xp+s'))
]);

/* ================= HAZARDS ================= */
G.miniArch('sp_hazard', [
L('any','Sleep Gas','💨',`A hiss from a ceiling vent, and a thin pale cloud begins to roll down the corridor. Already the children at the back are yawning, and one has slumped against the wall. It smells faintly of pears.`,
 c('Pull everyone back and seal the door with a jacket.','INT 9 craft',`You stuff a rolled-up jacket into the gap under the door, and the gas stops at the threshold. Everybody coughs, but nobody falls asleep. You hold your breath, and count to a hundred.`,'xp+l mp+2 flag:sp_smart','You get most of them clear, but a few sleepers have to be carried, and the wardens find them first.','xp+m hp-2 kids-4','skill:sp_chem|skill:sp_bio|skill:sp_mech'),
 o('Take the neutraliser tablet and share it.',`A chalky tablet, snapped into pieces and passed round. Everyone gags, but nobody sleeps.`,'-sp_antidote xp+m mp+2','item:sp_antidote'),
 o('Run, and hold your breath.',`You run, and run, and run, until your lungs burn and the gas is far behind. It is not elegant, but it works.`,'xp+s hp-2 mp-1')),
L('any','The Electric Floor','⚡',`The corridor floor ends in a bright metal grille, humming with a deep, steady buzz, and a warning pattern of blue sparks dances over it. The door to the next room is on the other side. Everyone is looking at you.`,
 c('Cross on the rubber mats, one at a time.','INT 9 craft',`Rubber insulates. You lay out the rubber floor mats from the storage locker, and step across one by one, leading every child over the humming metal. Not one spark finds you.`,'xp+l mp+3 flag:sp_smart','You slip, and a tingling shock runs up your leg. You scramble clear, shaking, but the children are safe.','xp+m hp-3','skill:sp_physics|skill:sp_mech'),
 o('Look for the power switch.',`Behind a panel, a cluster of cables and a big, obvious switch. You flip it. The humming dies. Every child cheers, quietly.`,'xp+m mp+2'),
 o('Jump across it in one bound.',`You leap. The spark catches your heel, and your whole body judders.`,'xp+s hp-4')),
L('any','The Pressure Door','🚪',`The door will not open. A readout glows beside it in alien numerals, climbing and falling: 6, 12, 24, 48, and then a blank. A drone is chirping angrily somewhere behind you. The door needs the next number.`,
 o('Enter 96.',`Click. The door slides open with a sigh of relief. Each number is double the last: 6, 12, 24, 48, 96. A quick, clean victory.`,'xp+l mp+3 flag:sp_smart','skill:sp_math|skill:sp_code'),
 c('Spot the pattern and enter the next number.','INT 8 lore',`Doubling! 6, 12, 24, 48 ... 96. You tap it in, and the door slides open.`,'xp+l mp+3 flag:sp_smart','The pattern eludes you. The drone arrives, and you have to run.','xp+s mp-2'),
 o('Force the door with a bar.',`It groans, and it bends, and, with enormous effort, it lets you through. Everyone is exhausted, and the drone will have noticed.`,'xp+s hp-2 mp-2')),
L('any','Falling Cargo','📦',`There is a groan from overhead, and a huge stack of crates in the cargo bay begins to lean. A shower of loose parts rattles down. A line of children is directly underneath.`,
 c('Shout and shove everyone clear.','DEX 8 dodge',`You throw yourself at the line and push. The crates smash down where they had been standing, in a thunderous cloud of dust. Every child is safe.`,'xp+l mp+2 flag:sp_kind','You get most of them clear. A few are hit by flying parts, and have to be carried the rest of the way.','xp+m hp-2 kids-3'),
 o('Order them to run, in a calm, loud voice.',`"Everybody run to the door, now!" You keep your voice level, and they obey. The crates thunder down behind you.`,'xp+m mp+2'),
 o('Stand still and hope it holds.',`It does not hold.`,'xp+s hp-3 kids-4')),
L('any','The Scanner Beam','🔦',`A red beam sweeps slowly across the corridor ahead, back and forth, back and forth, like a lazy lighthouse. Each sweep takes about six seconds. There is a doorway on the other side.`,
 c('Time the beam, and go in the gap.','WIS 8 survive',`One, two, three, four, five, six. The beam passes. You count it three times, and then, in the quiet after the third sweep, you run, and the children follow in single file.`,'xp+l mp+2 flag:sp_smart','Your count is wrong by a second, and the beam catches the last child.','xp+m hp-1 kids-2','item:sp_watch|skill:sp_math'),
 o('Crawl along the floor.',`The beam passes over your head. You crawl, the children crawl, and everyone makes it, covered in dust.`,'xp+s mp+1'),
 o('Block the beam with a foil blanket.',`The beam cannot get through. You hold the blanket up, and the children file past underneath.`,'xp+m mp+2','item:sp_foil')),
L('any','Coolant Leak','🌫️',`A pipe overhead has burst, spraying a thick white fog across the floor. It is freezing, slippery and dense enough to hide your own hands. Somewhere in the cloud, a child is calling out.`,
 c('Find the shut-off valve, and close it.','INT 8 craft',`You feel along the pipe until your fingers find a wheel. You turn it, hard, and the fog thins. The child is sitting on the floor, shivering. You wrap her in your jacket.`,'xp+l mp+3 flag:sp_kind','You cannot find it in the fog. You grab the child and pull her out.','xp+m hp-2','skill:sp_mech|skill:sp_physics|item:sp_multitool'),
 o('Follow the sound of the child.',`You stumble through the fog, calling, until you find her. You lead her out by the hand.`,'xp+m mp+2 hp-1'),
 o('Wait for the fog to clear.',`It takes a long time, and the cold seeps into everyone's bones.`,'xp+s hp-2')),
L('any','The Hot Pipe','🔥',`The only way past is a narrow gap beside a thick, shimmering pipe. A small plate on it reads, in a symbol you somehow understand: HOT. The metal is glowing dull orange.`,
 o('Wrap your sleeve and squeeze past, with the children behind you.',`It takes a long, nervous minute, but you slip through without touching it. Everyone follows, one at a time.`,'xp+m mp+1','',RK(25,'Someone brushes the pipe, and there is a yelp. A burn, small but painful, and a very frightened child.','hp-2 mp-2')),
 c('Wrap the pipe in a wet cloth and cool it first.','INT 8 craft',`Hiss. Steam rises. The pipe cools just enough, and you lead everybody through, with only a tiny burn on one finger.`,'xp+l mp+2','The cloth dries out in seconds. You squeeze past anyway.','xp+s hp-2','item:sp_water'),
 o('Turn back and find a longer way.',`It adds twenty minutes, and nobody is burned.`,'xp+s'))
]);

/* ================= CHILDREN WHO NEED YOU ================= */
G.miniArch('sp_kids', [
L('any','A Frightened Little One','😢',`A boy of about six sits in the corner with his knees drawn up, rocking and shaking. He will not look up. Every few seconds he whispers one word: "Mama."`,
 o('Sit beside him and tell him a story from home.',`You tell him about the mountain near your home, the dog next door and the best sandwich you ever had. By the end, his shaking has stopped, and his hand is in yours.`,'xp+m mp+3 flag:sp_kind'),
 c('Work out what he needs.','WIS 8 heal',`He is hungry and cold. You give him your last nutrient bar and wrap him in your jacket. The colour returns to his face.`,'xp+l mp+3 flag:sp_kind','You are not sure, and just keep him company.','xp+m mp+1'),
 o('Promise: "I will get you home."',`He looks up with enormous eyes. "Promise?" You swallow, and nod. You hope very much that you will be able to keep it.`,'xp+m mp-1 flag:sp_kind')),
L('any','The Head Count','🔢',`You count the children for the third time and get a different number each time. Ninety-six. Ninety-eight. A hundred and one. If anyone is missing, you must find them before you move. And you cannot trust your count.`,
 c('Count them in tens, using a chalk mark on every shoulder.','INT 8 lore',`Ten groups of ten, each marked with a pencil dot on the hand. This time, there are exactly one hundred children. Nobody is missing. You feel a huge, silent relief.`,'xp+l mp+3 flag:sp_cell_clear','The count still will not come out right. You decide to move on carefully, and watch each other.','xp+s','skill:sp_math|skill:sp_code'),
 o('Ask the children to hold hands in pairs.',`Fifty pairs. Everyone is accounted for, and nobody can wander off. It is slow, but it works.`,'xp+m mp+2 flag:sp_kind'),
 o('Move on and trust your count.',`You hurry on. Later, you realise a small boy was left behind in the last room.`,'xp+s kids-2')),
L('any','Not Enough Food','🍫',`The food slot has given you a tray with twelve small bars. There are a hundred children, and none of them has eaten in a long time. Every eye in the room is on the tray.`,
 c('Divide the food fairly, by size and need.','INT 8 lore',`You cut every bar into tiny pieces, and give the youngest children first. Nobody gets enough, but nobody gets nothing. A very practical sort of fairness.`,'xp+l mp+3 flag:sp_kind','The pieces are uneven, and there is a small argument. But everyone eats a little.','xp+m mp+1','skill:sp_math'),
 o('Give it all to the youngest.',`The small ones eat, silent and solemn. The bigger ones watch, and some of them are angry.`,'xp+m mp+1 flag:sp_kind'),
 o('Keep it for the leaders.',`The older kids eat. The little ones are hungry. You feel awful about it.`,'xp+s mp-2 kids-3')),
L('any','A Sick Child','🌡️',`A girl lies shivering against the wall, flushed and clammy, with a rasping breath. The children around her are very quiet. She looks at you, and tries to smile.`,
 c('Check her temperature, her breathing and her water.','WIS 9 heal',`A fever, and not a bad one. She is badly dehydrated. You get her sipping water, cool her forehead and keep her still. By the hour's end, she is sitting up.`,'xp+l mp+3 flag:sp_kind','You are not sure what is wrong, but you keep her warm and comforted.','xp+m mp+1','skill:sp_aid|skill:sp_bio'),
 o('Give her a sip of water and a medical gel.',`The gel soothes her. She drifts into sleep, breathing easier.`,'-sp_gel xp+m mp+2 flag:sp_kind','item:sp_gel'),
 o('Make her comfortable and carry on.',`You fold a blanket under her head, and promise to come back.`,'xp+s mp-1')),
L('any','The Bossy Teenager','😠',`A tall boy has gathered a gang near the door. "I'm in charge," he says. "We do what I say." Some children are nodding. Others look scared. His plan, to break straight out through the main door, will get a lot of people caught.`,
 c('Persuade him to listen to a better plan.','CHA 9 persuade',`You are calm, and you are specific. In a few minutes, he is nodding. "Alright," he says gruffly, "do it your way." The children relax.`,'xp+l mp+3 flag:sp_kind','He does not listen. You have to go around him, and some of his gang go with him.','xp+m kids-3','skill:sp_history|skill:sp_lang'),
 o('Let him go first, and follow at a distance.',`He storms ahead, and alarms start to sound. You lead the others the other way, and lose some of his followers.`,'xp+s kids-3'),
 o('Challenge him in front of everyone.',`It turns into a shouting match. In the end, a lot of the children have lost their nerve.`,'xp+s mp-3')),
L('any','The Boy Who Will Not Speak','🤐',`A thin boy of about nine sits very still, watching you. He has not spoken to anyone. When you ask his name, he only shakes his head. But he keeps pointing at something drawn on the wall.`,
 c('Look at what he has drawn.','INT 8 lore',`A map! He has been drawing the ship in careful, tiny lines: corridors, doors, the path to the hangar. He is the best prisoner you have ever met.`,'xp+l mp+3 flag:sp_kind +sp_chart','It is a fascinating drawing, but you cannot read it. You thank him, and he nods.','xp+m mp+2'),
 o('Sit next to him and draw something yourself.',`You draw a sunrise. He adds a house. Eventually, you have a whole village, and he has said his first word: "Home."`,'xp+m mp+3 flag:sp_kind'),
 o('Leave him be.',`Some people need quiet. You nod, and let him be.`,'xp+s')),
L('any','A Child in the Vent','🕳️',`A thin, frightened voice is calling from inside a ventilation shaft just above your head. A very small girl has crawled in, and cannot back out. Her feet are sticking out of the grille.`,
 c('Talk her through backing out.','CHA 8 persuade',`"Wriggle backwards. One knee, then the other." You keep your voice slow and kind. A minute later, she drops out of the vent, covered in dust, and hugs you.`,'xp+l mp+3 flag:sp_kind','She is too frightened to listen, and you have to pull her out by the ankles.','xp+m hp-1'),
 c('Climb in after her.','DEX 9 climb',`The shaft is narrow, but you are narrower. You reach her, and turn her gently round, and together you crawl out.`,'xp+l mp+2 flag:sp_kind','You wedge yourself in. It takes five terrible minutes, and a lot of wriggling, to get out.','xp+m hp-2 mp-2'),
 o('Fetch an older child to help.',`Tomás, or someone like him, is a better climber. It takes a few minutes longer, but it works.`,'xp+s')),
L('any','Two Friends Quarrelling','😤',`Two girls in matching pyjamas are shouting at each other in the middle of the room. One has lost a stuffed toy and is sure the other took it. Everyone is watching. It is getting loud.`,
 c('Find the toy.','WIS 8 survive',`It is stuck behind a ventilation panel. You pull it out and hand it back. Both girls fall into each other's arms, sobbing and laughing at once.`,'xp+l mp+3 flag:sp_kind','You cannot find it, but you calm them down enough to stop the shouting.','xp+m mp+1'),
 o('Take them aside and listen to each, one at a time.',`It takes a while. By the end, both are crying, but they are friends again.`,'xp+m mp+2 flag:sp_kind'),
 o('Tell them to be quiet, or the wardens will hear.',`They go quiet, scared. You feel a bit mean about it, but you do not hear any wardens.`,'xp+s mp-1'))
]);
})();
