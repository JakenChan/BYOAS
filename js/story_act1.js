/* ACT I — Embers of Thornwick (childhood, ages 8–12) */
(function(){
const G = globalThis.G, sc = G.sc, D = G.deed;
D('curious','You asked Old Nan why the Ashen Queen did it.'); D('brave','You boasted you were not afraid of the Ashen Queen.'); D('saw_glow','You saw the red glow on the northern horizon.');
D('pup','You took in a stray pup and named him Biscuit.'); D('garrick_friend','You made a friend of Garrick the miller\'s son.'); D('garrick_foe','Garrick the miller\'s son is your sworn enemy.');
D('hermit_taught','Maud the hermit taught you a trick of the mind.'); D('friend_wren','Wren the shepherd\'s daughter is your closest friend.'); D('cave_crystal','You touched the singing crystal in Hollow Hill.');
D('aldric_bond','Sir Aldric Vane owes you a debt of honour.'); D('aldric_betrayed','You betrayed Sir Aldric to the Ashen riders. He does not know.'); D('village_saved','You helped save the people of Thornwick.');
D('village_burned','Thornwick burned. You will never forget it.'); D('guardian_dead','Your guardian died in the raid.'); D('kind','You have a reputation for kindness.'); D('callous','You have turned away from those in need.');
D('oath_justice','You swore an oath of justice against the Ashen Queen.'); D('oath_protect','You swore to protect those who cannot protect themselves.'); D('oath_power','You swore to grow strong enough that no one can burn your home again.'); D('oath_knowledge','You swore to understand why the Queen did what she did.'); D('oath_mercy','You swore that, whatever she is, you will not become her.');
D('heard_weeping','A minstrel told you the Queen weeps.'); D('heard_locket','You have heard of a girl\'s locket that matters.'); D('heard_mother','You have heard the Queen was once a healer, and a mother.'); D('knows_ward','You know the Ashen Ward fears true sunlight, or one who can unpick it.'); D('knows_name','You know that her true name can bind her.'); D('knows_tower','You know a hidden way into the Tower of Cinders.'); D('knows_crystal','You know a crystal in her throne holds something vital.');
D('knows_ember','You know of the Ember Wraith, her herald.'); D('heard_gate','You know of a hidden gate in the Ashen Marches.'); D('knows_cinder','You know the Cinder soldiers cannot be reasoned with.'); D('knows_cultists','You know the Veil-cultists work among the towns.');
D('wolf_friend','A wolf you freed remembers you.'); D('dog_friend','A dog you rescued still follows your scent.'); D('dreamed_queen','You dreamed of the weeping queen.'); D('fortune_warned','A fortune-teller warned: beware a gift offered in the dark.');
D('knows_aldric_fear','Aldric fears leading good people to a grave.'); D('knows_sealed_door','Mira knows of a sealed door in the Queen\'s tower.'); D('knows_spell_meter','Ysolde says the Queen\'s spells have a meter that can be interrupted.'); D('ysolde_pity','Ysolde would spare the Queen if she could.'); D('knows_dead_road','Tamsin says the dead know the safest road through the Marches.');

G.chapter('act1',{ n:'I. Embers of Thornwick', sub:'Ages 8 to 12 — a village, a winter, a spark', ch:0, region:'thornwick', age:8, art:'village|🏘️ ❄️',
  text:`Thornwick is a village of forty hearths at the north edge of the Greenmarch, where the road runs out and the old forest begins. Nothing ever happens in Thornwick. That is its great virtue, and its secret shame.\nYou are eight years old, and it is winter. Your story begins here, in a village that does not yet know what is coming, with a child who does not yet know who they will become.`,
  beats:['a1_tale','a1_chores','a1_pup','a1_baker','a1_snowfort','a1_ice','a1_bully','a1_priest','a1_hermit','a1_lamb','a1_well','@age:9',
    'a1_fair','a1_fair2','a1_cave','a1_wolves','a1_hail','a1_fever','@age:10',
    'a1_harvest','a1_scarecrow','a1_ash','a1_nan','a1_market','a1_stranger','@age:11',
    'a1_aldric','a1_aldric2','a1_aldric3','a1_riders','a1_riders2','@age:12',
    'a1_omens','a1_raid1','a1_raid2','a1_raid3','a1_after','a1_bury','a1_oath','a1_leave'] });

sc('a1_tale','interior|🔥 📖',
`Winter's Eve in Thornwick. The whole village crowds into the longhouse, steaming wool and woodsmoke, while Old Nan Pellam settles into her creaking chair. You are eight years old, {name}, and you have wriggled right to the front.\n"Listen well, little ones," Nan croaks. "This is the tale of the Ashen Queen. Thirty winters past, Vorathra, the finest healer in all Aurelon, stood on her tower and called down fire. It burned nine days. Not even the stones were left. And they say," her voice drops, "the ash is spreading."\nThe fire pops. A baby whimpers. Everyone is looking at the dark window.`,[
 {t:`Ask Nan why the Ashen Queen did it.`,y:[`Nan's eyes go distant. "Nobody knows, little one. Some say grief." The longhouse goes very quiet. You will remember that answer.`,'xp+s flag:curious']},
 {t:`Announce, loudly, that you aren't afraid of any queen.`,y:[`The room chuckles. Nan wags a finger: "Brave is for those who've felt fear, child." You flush, but sit a little straighter.`,'xp+s flag:brave']},
 {t:`Hide behind {guardian}'s coat and listen with one eye.`,y:[`Warm wool, a steady heartbeat. It's only a story. It is only a story. Isn't it?`,'hp+s xp+s']},
 {t:`Slip outside to look for the glow in the northern sky.`,c:'DEX 9 sneak',y:[`You see it: a faint red smear along the horizon, like an old wound that won't close. A shiver runs through you that has nothing to do with the cold.`,'xp+m flag:saw_glow'],n:[`{guardian} catches you at the door by the scruff. A scolding and no supper.`,'hp-1']} ]);

sc('a1_chores','village|🐄 🌅',
`Dawn on the frozen lane. Your breath hangs in clouds. {?origin:farm|The cows will not milk themselves, and Da Berrin is already forking hay.}{?origin:smith|The forge-fire needs feeding before Master Hobb wakes, or he will wake grumpy.}{?origin:inn|Forty mugs from last night wait in the wash-tub, and Ma Pellam is humming ominously.}{?origin:orphan|The chapel steps need sweeping, and Father Edric's bell needs ringing.}{?origin:hunter|Old Tarn's snare-line needs checking before the foxes get there first.}\nThe morning chill bites. The day stretches before you like a long, grey road.`,[
 {t:`Do every chore properly, and do it thoroughly.`,y:[`It takes till noon, and your hands are raw, but you feel your arms and back harden a little. {guardian} gives you an approving grunt.`,'STR+1 xp+s']},
 {t:`Rush through them and run off to play.`,y:[`Half-done work, but you tear down to the pond with the other children and win a snowball war in the first minute.`,'xp+s DEX+1']},
 {t:`Help a neighbour with their chores too.`,y:[`Widow Marsh weeps with gratitude and presses a hot bun into your hand. The village remembers kindness.`,'xp+s hp+s flag:kind']},
 {t:`Daydream by the fence and watch the forest.`,y:[`Birds, mist, the long green dark of the Greenmarch beyond. You feel the wide world breathing out there, waiting. A thread of longing unspools in you.`,'xp+s WIS+1']} ]);

sc('a1_pup','meadow|🐕 ❄️',
`In a snowdrift behind the barn, something whimpers. You dig, and find a pup: skinny, shivering, one ear torn, huge dark eyes. Its mother is nowhere. A thin trail of paw-prints leads away toward the forest, and then stops.\nIt looks at you like you are the whole world.`,[
 {t:`Tuck it inside your coat and take it home.`,y:[`It sneezes, licks your chin, and promptly falls asleep. {guardian} sighs, but there is a bowl of scraps by evening. You name him Biscuit.`,'xp+m flag:pup']},
 {t:`Warm it with a spell or a salve, and leave it a bed in the barn.`,r:'skill:mending|skill:herbalism|skill:firebolt',y:[`With warm hands and a little craft you coax it back from the cold. It trots after you the whole day. You name him Biscuit.`,'xp+m flag:pup']},
 {t:`Tell an adult and let them decide.`,y:[`{guardian} frowns, then softens, then finds an old blanket. The pup is fed, but belongs to the village now. You see him around — he always wags.`,'xp+s']},
 {t:`Leave it. Dogs are trouble.`,y:[`You walk away. It howls after you for a long time, then goes quiet. You tell yourself it's fine.`,'flag:callous']} ]);

sc('a1_baker','village|🥧 🍞',
`Mistress Crumb's bakery smells like heaven's own back door. A tray of honey-pies cools on the window ledge, unwatched. Your stomach rumbles like a cart on cobbles.\nGarrick the miller's boy is across the lane, grinning at you, daring you with his eyebrows.`,[
 {t:`Snatch a pie and run.`,c:'DEX 10 steal',y:[`Quick as a swallow! The pie is hot, sweet, and gloriously stolen. Garrick stares, impressed, despite himself.`,'xp+m hp+s'],n:[`Mistress Crumb catches your ear. "A pie costs a penny or a day's sweeping!" You sweep for a day.`,'hp-1 xp+s']},
 {t:`Offer to carry her flour sacks for a pie.`,y:[`A fair trade. Mistress Crumb beams and presses two pies on you — one for a friend.`,'xp+m hp+s flag:kind']},
 {t:`Tell Mistress Crumb that a stranger is eyeing her pies.`,c:'CHA 9 deceive',y:[`She scurries out to guard her tray while you tiptoe to the back door and are paid, in pies, to "keep an eye on things."`,'xp+m hp+s'],n:[`She sees through it in a heartbeat. "Child, I have eyes. And a spoon."`,'hp-1']},
 {t:`Pass by with great dignity.`,y:[`Your stomach growls in protest, but a crumb of self-respect is its own sort of pie. Garrick snorts.`,'xp+s']} ]);

sc('a1_snowfort','village|⛄ ❄️',
`The Great Snowball War of Thornwick has begun. Two forts — yours, and Garrick's on the other side of the lane — bristle with snowy ramparts. Every child in the village is armed. Wren the shepherd's daughter is stacking snowballs beside you with the cold expertise of a general.\n"They're flanking left," she hisses. "Your orders?"`,[
 {t:`Charge the centre — all or nothing!`,c:'STR 10 fight',y:[`You crash into their line, snowballs flying. Garrick goes down in a drift, spluttering. The village cheers.`,'xp+m STR+0'],n:[`A wall of snowballs knocks you flat. You lie there laughing anyway.`,'hp-1 xp+s']},
 {t:`Send Wren to flank while you distract them.`,c:'INT 10 survive',y:[`A perfect pincer! Garrick's fort collapses in confusion. Wren grins at you like you've hung the moon.`,'xp+m flag:friend_wren'],n:[`Garrick spots the flank. You both get buried.`,'xp+s']},
 {t:`Conjure a little ice-wall to hold the line.`,r:'skill:frost|skill:ward|skill:firebolt',mp:1,y:[`A shimmer of cold, and the rampart doubles in height. Even the teachers stop to stare.`,'xp+m']},
 {t:`Make peace: sit down, build a bigger fort together.`,c:'CHA 10 persuade',y:[`A strange, joyous silence — then the two armies are one army, and a snow-castle rises that is the pride of the village.`,'xp+m flag:friend_wren flag:garrick_friend'],n:[`Nobody wants peace. Everyone throws a snowball at you.`,'xp+s']} ]);

sc('a1_ice','meadow|🧊 🧒',
`The village pond has frozen solid enough to skate on, except for the middle, where the ice is grey and thin, and creaks when you look at it. A crowd of children has gathered on the bank.\n"Bet you won't," says Garrick, eyes bright. "Bet you won't cross it. All the way. Bet you're chicken."\nThe ice groans like an old door.`,[
 {t:`Take the long way round, along the thick edge.`,y:[`Slow, boring, and exactly as brave as sense allows. Garrick jeers, but only a little, and nobody falls in.`,'xp+s']},
 {t:`Cross it carefully, testing each step with a stick.`,c:'WIS 11 survive',y:[`Tap, tap, tap. The ice sings under you, but holds. You reach the far side and the children cheer.`,'xp+m'],n:[`The stick goes through. You scramble back, soaked to the knees and shaking.`,'hp-3 xp+s']},
 {t:`Run across the middle at full speed!`,c:'DEX 13 dodge',y:[`The ice cracks behind you in a long white line — but you're across! You skid into the snow, whooping. Garrick's jaw is on the ground.`,'xp+l brave'.replace('brave','flag:brave')],n:[`The ice shatters beneath you. The water is so cold it stops your heart in your chest. The last thing you hear is Wren screaming your name.`,'die']},
 {t:`Lay a plank across and slide along it.`,r:'item:rope|skill:survival|item:pitchfork',y:[`Pitchfork handle, a plank from the woodpile — you make a bridge. It's clever, and it holds. Garrick has no answer.`,'xp+m']} ]);

sc('a1_bully','village|😠 🧒',
`Garrick Miller blocks the lane with two of his lackeys. He's twelve, big for it, and has decided you are the day's entertainment. "Give us your penny, runt, or we'll shove your face in the slush."\nWren is watching from a doorway, fists clenched.`,[
 {t:`Fight him, even though he's bigger.`,c:'STR 12 fight',y:[`You go down twice, but get up three times, and the third time Garrick backs off, wiping his nose. "You're mad," he says. A grudging respect.`,'xp+m STR+1'],n:[`He flattens you. A black eye, a split lip. But you don't give up the penny.`,'hp-3 xp+s flag:garrick_foe']},
 {t:`Trick him: say the miller's wife is calling for him.`,c:'CHA 10 deceive',y:[`"Mama?!" He drops everything and bolts, and by the time he works it out, you're long gone. His lackeys dissolve in laughter.`,'xp+m flag:garrick_foe'],n:[`"Nice try," he snarls, and holds your head in the slush.`,'hp-2 xp+s flag:garrick_foe']},
 {t:`Befriend him: offer half your bun and ask what he likes.`,c:'CHA 11 persuade',y:[`Garrick stares at the bun like it's a trap. Then, slowly, takes it. "...My da hits me," he mumbles. It's the strangest, bravest thing a bully has ever said. You are, awkwardly, friends.`,'xp+l flag:garrick_friend flag:kind'],n:[`He takes the bun and shoves you anyway.`,'hp-1 xp+s']},
 {t:`Run to the baker's and hide.`,y:[`You scoot into Mistress Crumb's shop, and she bars the door with a rolling pin. Garrick loiters, then loses interest. Safe, if shameful.`,'xp+s']} ]);

sc('a1_priest','interior|⛪ 📜',
`The chapel is cold, dim and smells of beeswax. Father Edric's Tuesday lessons are legendary for their boredom: letters, scripture, and the occasional nap. Today he has set a hard page in front of you: a passage about "the Light that conquers all darkness."\nHe looks at you over his spectacles. "What do you think this means, {name}?"`,[
 {t:`"It means everyone's afraid of the dark, so we invented candles."`,c:'CHA 10 persuade',y:[`Father Edric is silent, then laughs so hard he has to clean his spectacles. "Child, you are a better theologian than the bishop." He gives you a book to borrow.`,'xp+m INT+1'],n:[`He pinches the bridge of his nose. "See me after the lesson."`,'xp+s']},
 {t:`"That kindness is the real fire."`,y:[`He blinks, then nods, slowly. "Remember that, if you remember nothing else I teach you." He presses a tiny wooden bird into your hand: a keepsake.`,'xp+m WIS+1']},
 {t:`Study the letters, quietly, and learn to read the page properly.`,c:'INT 10 lore',y:[`The strokes begin to line up, and the words to mean. By the end of the hour you've read three pages that nobody in the village but the priest could.`,'xp+m skill:lore'],n:[`The letters swim. Tomorrow, perhaps.`,'xp+s']},
 {t:`Whisper a joke to Tobb and get the giggles.`,y:[`You are both sent to scrub the chapel floor. It is, however, a very good joke.`,'xp+s flag:friend_tobb']} ]);

sc('a1_hermit','forest|🧙‍♀️ 🌲',
`At the very edge of the forest, where the village paths stop, stands a lopsided hut belonging to Maud the Hermit, whom the other children call Mad Maud. She is outside, arguing with a crow. When she sees you she squints.\n"You've got an odd look on you, little one. Like a candle somebody forgot to light." She cackles. "Come closer. I won't eat you. Much."`,[
 {t:`Step closer and ask what she means.`,c:'WIS 10 lore',y:[`She puts a gnarled finger to your forehead. For a moment, the world is clear glass. "There," she says. "A knack for noticing. Don't waste it." Something warm opens inside you.`,'xp+l skill:detect flag:hermit_taught'],n:[`She peers, shakes her head, and gives you a withered apple. "Not yet," she sighs.`,'xp+s hp+s']},
 {t:`Offer her your bun in trade for a story.`,y:[`She tells you about the stars that fell on Aurelon the night the Queen's tower burned, and how they sang as they fell. You walk home humming.`,'xp+m flag:hermit_taught']},
 {t:`Back away. Mad Maud is mad.`,y:[`You scoot back down the path. Behind you, the crow cackles. So does Maud.`,'xp+s']},
 {t:`Ask her to teach you to talk to the crow.`,r:'skill:beastlore|skill:music|cls:ranger|cls:bard',y:[`She stares, then whoops with delight. "A beast-ear! Sit, sit." Within an hour, the crow has told you, in terrible grammar, where the best berries are.`,'xp+l skill:beastlore flag:hermit_taught']} ]);

sc('a1_lamb','meadow|🐑 🌱',
`The first thaw. Shepherd Alder's flock is out, but a lamb has strayed. You and Wren are sent to find it. The tracks lead along a stream, past mossy rocks, and into a thorny ravine where the bleating echoes oddly.`,[
 {t:`Climb down the ravine carefully to fetch it.`,c:'DEX 10 climb',y:[`Scratches, mud — and then a warm wriggling lamb in your arms. Wren hugs you both. Shepherd Alder gives you a cheese for your trouble.`,'xp+m hp+s flag:friend_wren'],n:[`You slip, tumbling down in a spray of mud. The lamb is fine. You are not, quite.`,'hp-3 xp+s']},
 {t:`Whistle a tune and let the lamb come to you.`,r:'skill:music|skill:beastlore|cls:bard',y:[`It comes trotting straight up the bank, bleating its opinion. Wren stares at you with open wonder.`,'xp+m flag:friend_wren']},
 {t:`Send Wren back for a rope, and wait.`,y:[`You wait and sing to the lamb. Wren returns with Tobb and a rope; between you, it's easy.`,'xp+m flag:friend_wren']},
 {t:`Let the village men fetch it later. You have your own lunch.`,y:[`Your friends fetch it themselves. It goes without comment, but not without notice.`,'xp+s']} ]);

sc('a1_well','village|⛲ 🕳️',
`The old well behind the chapel has been sealed for years — a huge flat stone over it, and a rope still coiled on the wall. But the stone has slid a handspan, and cold air breathes out of the gap, smelling of wet iron and something older.\nTobb whispers: "I hear singing down there."`,[
 {t:`Slide the stone and lean over to look.`,c:'STR 11 fight',y:[`A glimmer of silver, many fathoms down: not water, but coins and old pins and tiny offerings — a wishing well's treasury. You take a few. The stone feels watched.`,'xp+m gold+s'],n:[`The stone slides. You slip. A hand yanks you back, and you scrape every knuckle.`,'hp-3']},
 {t:`Climb down the rope!`,c:'DEX 13 climb',y:[`Down in the dark, your fingers brush something cool and smooth: a little carved charm, left by someone long ago. You climb up, shaking and triumphant.`,'xp+l loot:trink'],n:[`The rope frays. You fall. Cold, black water closes over your head, and your small hands cannot find the walls.`,'die']},
 {t:`Listen carefully for the singing.`,c:'WIS 11 spirit',y:[`It is a lullaby. A mother's voice, thin and far, and then nothing. You tell no one. But you will not forget the tune.`,'xp+m mp+s flag:heard_spirits'],n:[`Just wind. Just wind.`,'xp+s']},
 {t:`Tell Father Edric the stone has slipped.`,y:[`He thanks you gravely and has it re-seated by sundown. "Wells have their own business," he says, and gives you a sweet.`,'xp+s hp+s']} ]);

sc('a1_fair','village|🎪 🎠',
`The spring fair! Stalls, banners, jugglers, a fiddler with a goat-skin hat. You have a few coins in your pocket, and a thousand ways to lose them. In the middle of the green are four contests, each with a prize.`,[
 {t:`The archery butt: hit the painted crow.`,c:'DEX 10 shoot',y:[`Thwack! Right in the crow's eye. The old archer slaps your back and tosses you a silver token.`,'xp+m gold+s DEX+1'],n:[`Your arrow flies into a haystack. A boy laughs. You grit your teeth.`,'xp+s']},
 {t:`The wrestling ring: throw a boy your own size.`,c:'STR 10 fight',y:[`A tumble, a grapple, and a whoop. He's pinned. The crowd roars.`,'xp+m gold+s STR+1'],n:[`Flat on your back, staring at the sky. It's a fine sky, at least.`,'xp+s']},
 {t:`The riddle-tent: answer the old woman's riddles.`,c:'INT 10 lore',y:[`She sets three; you answer all three. Delighted, she gives you a little jar of honey and a wink.`,'xp+m INT+1 hp+s'],n:[`You get none right. She pats your head and gives you a sweet anyway.`,'xp+s']},
 {t:`The singing circle: sing for the crowd.`,c:'CHA 10 perform',y:[`Your voice, small and clear, rises over the green. People stop to listen. A silver penny lands at your feet, then another.`,'xp+m gold+s CHA+1'],n:[`You freeze, and forget the words. The crowd is kind about it.`,'xp+s']},
 {t:`Just wander and eat honey-cakes.`,y:[`The best-tasting afternoon of your life, probably.`,'hp+m xp+s']} ]);

sc('a1_fair2','village|🔮 🃏',
`Behind the last stall, a small tent painted with stars. A grandmother in many scarves leans out. "Child," she says, "there's something about you. Come. A penny for your fortune. Or, for you, a smile."\nShe holds up a deck of worn cards. They flutter in her hand as though breathing.`,[
 {t:`Ask: "Will I be a hero?"`,y:[`She turns a card. A lantern. Another: a crown of fire. A third, face-down, which she will not turn. "Hero? That's for others to say. You will be... necessary."`,'xp+m flag:fortune_warned']},
 {t:`Ask: "What's the Ashen Queen afraid of?"`,y:[`The old woman's smile falls away. She is silent. Then, softly: "She is afraid of the day she stops being sorry." A pause. "Don't repeat that."`,'xp+m flag:heard_mother']},
 {t:`Ask: "Can you teach me a trick?"`,c:'CHA 10 persuade',y:[`She cackles and shows you a coin vanish — and how. Your fingers start to remember it.`,'xp+m skill:pickpocket'],n:[`"A trick costs a penny," she sniffs.`,'xp+s']},
 {t:`Politely decline and run back to the fair.`,y:[`The tent flap swings shut. Somewhere behind you she is laughing.`,'xp+s']} ]);

sc('a1_cave','forest|⛰️ 🕳️',
`Wren, Tobb and you stand before Hollow Hill. Everyone knows the cave there: a dark yawning mouth in a green hillside, where the older kids dare each other. "We go in," Wren says, tying a rope around her waist. "All the way to the crystal. They say it hums."\nTobb has a lantern. His hand is shaking.`,[
 {t:`Lead the way.`,c:'WIS 10 survive',y:[`You step into the dark with Tobb's lantern bobbing at your back. The cave walls glitter. The hum begins, low, below hearing.`,'xp+m flag:friend_wren >a1_cave2_in'],n:[`You trip on the first stone and skin your knee. Wren takes the lead, laughing.`,'hp-1 xp+s >a1_cave2_in']},
 {t:`Take the lantern and check the roof for cracks first.`,c:'INT 10 survive',y:[`Cracks, and a loose slab. You warn the others, and the three of you get past safely, feeling clever.`,'xp+m >a1_cave2_in'],n:[`You find nothing — and a stone drops on your shoulder. Ow.`,'hp-2 >a1_cave2_in']},
 {t:`Hold back. It's too dark.`,y:[`Wren shrugs, and she and Tobb go in. You wait at the mouth, fiddling with a stick, hating the waiting more than you'd feared the dark.`,'xp+s']},
 {t:`Tell them it's a bad idea and take them home.`,c:'CHA 11 persuade',y:[`Wren pouts. Tobb is relieved. Slowly, you walk them home. Nobody calls you chicken.`,'xp+m'],n:[`They go in without you, and you spend the afternoon feeling like a coward.`,'xp+s']} ]);

sc('a1_cave2_in','cave|💎 🦇',
`Deep in Hollow Hill, the tunnel opens into a cavern lit by a single huge crystal: sapphire-blue and humming a note too low to hear but not to feel. Behind it, shadows flutter in the roof: bats, thousands of them, shifting in their sleep.\nWren whispers, "It's beautiful." Tobb whispers, "It's looking at me."`,[
 {t:`Touch the crystal.`,c:'WIS 11 resist',y:[`A flare of cold light runs up your arm, and in your head you hear — for one heartbeat — a thousand voices singing one note. When it fades, something in you has changed. You feel faintly, absurdly, powerful.`,'xp+l flag:cave_crystal skill:spiritspeak mp+s'],n:[`The crystal zaps you, hard enough to throw you flat. Your hair stands on end.`,'hp-3 xp+m flag:cave_crystal']},
 {t:`Chip a small piece to take home.`,c:'DEX 11 lock',y:[`A tiny shard comes loose, glowing softly in your palm. You pocket it. It is warm.`,'xp+m +firefly_jar'],n:[`You slip; the bats stir; a squeaking cloud rises, and you sprint for the exit.`,'hp-2 xp+s']},
 {t:`Lead the others back out quietly.`,y:[`A little bored, a little relieved, you ease your friends out of the cave without disturbing the bats.`,'xp+s']},
 {t:`Sing to the bats and see what happens.`,r:'skill:music|skill:beastlore|cls:bard',y:[`The bats stir, then settle. One lands on Wren's shoulder. For ten minutes, the cave is a cathedral. Tobb cries a little. You don't mind.`,'xp+l flag:friend_wren']} ]);

sc('a1_wolves','meadow|🐺 🐑',
`A winter-hungry wolf pack has found Shepherd Alder's flock. Dusk. The sheep are bleating in terror; four lean grey shapes circle the fold. Shepherd Alder is down the hill with a lame ankle, shouting for someone, anyone.\nYou are alone at the fence with a pitchfork — and the wolves have seen you.`,[
 {t:`Charge the wolves with the pitchfork, yelling!`,c:'STR 13 fight',y:[`You roar like a madman. Two wolves break, then the rest. The sheep are saved, and Shepherd Alder tells the story for years.`,'xp+l STR+1 flag:brave'],n:[`A wolf knocks you flat. Teeth snap an inch from your throat. You scream, and the shout brings the men running. The wolves flee.`,'hp-6 xp+m']},
 {t:`Light a fire at the gate with a brand from the stove.`,c:'DEX 11 survive',y:[`A flaring torch, a wall of sparks. The wolves skulk off. The flock survives.`,'xp+l'],n:[`Sparks catch the straw. You put it out but singe your hands.`,'hp-3 xp+m']},
 {t:`Cast a bolt of flame or frost at the leader.`,r:'skill:firebolt|skill:frost|skill:lightning',mp:3,y:[`A burst of light in the dusk! The lead wolf yelps and flees, the pack with it. The village talks about "the strange fire" for weeks.`,'xp+l']},
 {t:`Shout for help and stay behind the fence.`,y:[`Your voice carries. Men with torches appear at the hill-crest and the wolves flee. You've done no great deed, but you've done a sensible one.`,'xp+s']} ]);

sc('a1_hail','village|⛈️ 🏠',
`The sky turns the colour of a bruise. Hail the size of walnuts hammers the roofs, the fields, the carts. You and Tobb are caught in the open, halfway between the barn and the longhouse, with an old woman's chickens loose around you.`,[
 {t:`Gather the chickens in your coat and run for the barn.`,c:'DEX 11 dodge',y:[`Bruised, laughing, with six clucking hens inside your shirt. The old woman gives you eggs and a hug.`,'xp+m hp+s flag:kind'],n:[`A hailstone catches your head. The hens escape. Nobody is happy.`,'hp-3 xp+s']},
 {t:`Hold a cart-board over you both and make for shelter.`,y:[`Clatter, clatter, clatter — a drum-roll on the board. You're in the longhouse a minute later, soaked and giggling.`,'xp+s']},
 {t:`Conjure a quick ward over the hens.`,r:'skill:ward|skill:frost',mp:2,y:[`A shimmer. Hail rattles off a silvery dome. The hens, bewildered, cluck at you in gratitude.`,'xp+m flag:kind']},
 {t:`Shelter under the cart and wait it out.`,y:[`Cold, wet, long, but you're safe. By the time it ends, the world is white and sparkling.`,'xp+s']} ]);

sc('a1_fever','interior|🤒 🕯️',
`Wren's little brother has the winter fever. Her mother sits by the bed, red-eyed, wringing her hands. The village healer is away. "Silverleaf," Wren whispers, tugging your sleeve. "It grows in the forest, past the stream. If we're quick, we can be back by midnight."\nIt is getting dark.`,[
 {t:`Go with her, now. No time to waste.`,y:[`You grab a lantern and a coat and go. Wren's hand is cold in yours. Whatever happens in the forest tonight, you'll face it together.`,'xp+m flag:friend_wren >a1_fever2_go']},
 {t:`Tell {guardian} and ask for help finding silverleaf.`,y:[`{guardian} frowns, grabs a lantern, and comes along, grumbling. Having a grown-up helps — but you feel you've slightly failed Wren.`,'xp+s >a1_fever2_go']},
 {t:`Make a poultice from what you know.`,r:'skill:herbalism|skill:mending|cls:cleric',y:[`You boil willow-bark and honey, and chant a cooling prayer over the cup. By midnight, the boy's fever breaks. His mother weeps and gives you everything she has.`,'xp+l hp+m flag:friend_wren flag:kind']},
 {t:`It's too dangerous at night. Tell Wren to wait for morning.`,y:[`Wren stares at you, wounded. "You're right," she says, in a tone that says the opposite, and goes alone. You wait, and hate yourself.`,'xp+s flag:callous']} ]);

sc('a1_fever2_go','forest|🌲 🌙',
`The forest at night is a different forest. Silver moonlight, shadows like wet ink, and the stream a ribbon of black glass. Two ways lead to the silverleaf: the ridge path, long but safe, and a short-cut through Gloom Hollow, where nobody ever goes.\nWren is already looking at the Hollow.`,[
 {t:`Take the ridge path. Safe and sure.`,y:[`Long, cold, but uneventful. You find silverleaf glinting in the moonlight, and you're home before midnight. The boy recovers by morning.`,'xp+m hp+s flag:friend_wren']},
 {t:`Take the short-cut through Gloom Hollow.`,c:'WIS 11 survive',y:[`Cold fog, odd noises, a pair of green eyes that blink and leave — and then the silverleaf, shining like a lamp. You're home in an hour. Wren kisses your cheek and runs off, scarlet.`,'xp+l flag:friend_wren'],n:[`The fog swallows the path. A root trips you. Something slithers away in the dark. You find the silverleaf, but you're soaked and scratched.`,'hp-3 xp+m flag:friend_wren']},
 {t:`Read the night: follow the sounds of the forest.`,r:'skill:survival|skill:beastlore|cls:ranger',y:[`The owls, the crickets, the muffled hush where a fox passes: they tell you everything. You find the silverleaf in half the time, and a bonus patch of healing moss.`,'xp+l hp+m flag:friend_wren']},
 {t:`Turn back. This was a mistake.`,y:[`Wren looks at you, bitterly. "I'll go alone." She does. She makes it back, but your friendship has a cold patch in it now.`,'xp+s flag:callous']} ]);

sc('a1_harvest','village|🌾 🎃',
`The harvest festival. Garlands on every door, bonfires in the green, and a wheelbarrow-race that you are, strangely, entered in. But overhead, black shapes wheel and cry: crows, thousands of them, circling the church tower and silent as they land. Old people cross their hearts.\nFather Edric has stopped his sermon to stare.`,[
 {t:`Climb the chapel roof to look more closely at the crows.`,c:'DEX 11 climb',y:[`From the roof you see it: each crow has a smudge of grey ash on its feathers. Ash from the north. You slide down and tell Father Edric, who goes pale.`,'xp+m flag:ash_seen'],n:[`A slate gives way. You slide, grab the gutter, and hang there until someone fetches a ladder.`,'hp-2 xp+s']},
 {t:`Ask Wren what she thinks.`,y:[`Wren frowns, chewing her lip. "It's an omen," she says. "I just don't know of what." Her hand finds yours.`,'xp+s flag:friend_wren']},
 {t:`Join the wheelbarrow race anyway. The crows can wait.`,y:[`You and Tobb, wheelbarrow, mud, and shrieks of laughter. You come second. It is perfect, and for an hour the crows vanish from your mind.`,'xp+m hp+s']},
 {t:`Study the crows with magic.`,r:'skill:detect|skill:spiritspeak',mp:1,y:[`A smear of old, sorrowful magic clings to them. Something is calling the crows north. You note the direction. It chills you.`,'xp+m flag:ash_seen flag:knows_ember']} ]);

sc('a1_scarecrow','meadow|🧟 🌙',
`Tobb dares you to spend the night in Farmer Dunn's cornfield, beside the scarecrow. "They say it walks," he whispers. "They say it was a man once. A thief." There's a harvest moon, bright enough to read by, and the corn rustles like a thousand secret whispers.`,[
 {t:`Take the dare. Sit by the scarecrow all night.`,c:'WIS 12 resist',y:[`At the dead hour, the scarecrow's head turns. You sit, rigid. It says nothing. At dawn, there is a daisy in its hand. You take it. You have never felt so brave.`,'xp+l flag:brave'],n:[`Something touches your shoulder. You bolt screaming into the village. The scarecrow stands as it stood, stiff and smiling.`,'hp-1 xp+m']},
 {t:`Pour out a little milk and speak politely to it.`,r:'skill:spiritspeak|cls:cleric|origin:orphan',y:[`The scarecrow sags. A voice, thin as straw: "Thank you. I was so cold." It crumbles gently to straw, and a faint warmth lifts from the field.`,'xp+l flag:kind']},
 {t:`Touch the scarecrow's glowing eye.`,y:[`The eye, a bright blue button, flares. A dry hand closes on your wrist. By dawn, they find only your shoes, neatly paired by the scarecrow's feet.`,'die']},
 {t:`Refuse the dare and go home.`,y:[`Tobb jeers a little. You go home and sleep soundly, which is its own victory.`,'xp+s']} ]);

sc('a1_ash','village|🌫️ 🌋',
`It starts as a smell: cold ash, like a hearth swept out in a sulking house. Then soft grey flakes sift down on Thornwick, settling on thatch and washing-lines and the faces of upturned children. In the north, the horizon is the colour of old iron.\nThe village elders gather at the well, arguing in low voices. Old Nan is shaking her head. "It's early," she says. "It is far too early."`,[
 {t:`Catch some ash and look at it closely.`,c:'INT 11 lore',y:[`It's not just ash. Tiny glints of something that shimmer like frost on a fire. It tingles on your tongue — magic, old and burnt. You've learned something no one else in the village knows.`,'xp+l flag:knows_ember mp+s'],n:[`Just ash. It stings your eyes.`,'xp+s']},
 {t:`Gather the younger children and keep them calm.`,c:'CHA 10 persuade',y:[`Singing, a story, a game — by the time the ash thins, the children are laughing again. Their mothers watch you with something like awe.`,'xp+m flag:kind'],n:[`They are terrified, and your efforts only make it worse.`,'xp+s']},
 {t:`Run to Father Edric and ask what it means.`,y:[`He kneels, sifts the ash through his fingers, and says very quietly: "It means the veil is thinning." He lights a candle and says nothing more.`,'xp+m flag:ash_seen']},
 {t:`Go home, bar the door, and hide under the blankets.`,y:[`It doesn't help, exactly. But the blankets are warm. The ash falls all night.`,'xp+s']} ]);

sc('a1_nan','interior|🧓 🕯️',
`Old Nan Pellam is dying. Everyone in the village knows it. She lies in her bed, small as a bird, and has asked for you by name. "Come here, child," she whispers. Her hands, in yours, are light as paper.\n"I was in Aurelon," she says. "The day it burned. I was a girl. I saw her on the tower. She wasn't laughing, child. She was *weeping*."`,[
 {t:`Hold her hand and listen.`,y:[`She tells you everything: the golden city, the fire, a locket on a chain flashing in the Queen's fist. She presses a worn lantern-pin into your palm. "For when you need to be brave."`,'xp+l flag:heard_locket +wooden_charm']},
 {t:`Ask if she's afraid.`,y:[`"Not of dying," she says, with a thin smile. "Only of the ash. Promise me you won't be afraid of what you find." You promise, and it feels like a vow.`,'xp+m flag:heard_mother WIS+1']},
 {t:`Heal her, if you can.`,r:'skill:mending|skill:herbalism|cls:cleric',c:'WIS 12 heal',y:[`You ease her pain; she breathes easier and sleeps a day longer than she should. When she wakes, she gives you her last gift: a tiny silver lantern.`,'xp+l hp+m +lantern_pin'],n:[`You cannot mend what is simply time. But your hands calm her. She dies in the night, peaceful.`,'xp+m']},
 {t:`Sing her a lullaby.`,r:'skill:music|cls:bard',y:[`She dies in the night with the tune still on her lips. At the funeral, people hum it. It becomes the song of Thornwick.`,'xp+l CHA+1']} ]);

sc('a1_market','village|🛒 🧺',
`Market day. The green is full of stalls, and a thin merchant in a purple cap has set up beside the well, selling Odd Things: jars, trinkets, a stuffed owl that appears to be glaring. "Rare curios! Rarer than rare!" he shouts, catching your eye. "A young person of taste!"`,[
 {t:`Haggle for a curio.`,c:'CHA 10 persuade',y:[`He grumbles, sighs, then hands over a suspicious-looking item for a handful of pennies. You are quite pleased, for reasons you cannot explain.`,'xp+m loot:gimmick'],n:[`He is immovable. "Full price or nothing, little one."`,'xp+s']},
 {t:`Pick his pocket while he argues with another customer.`,c:'DEX 12 steal',y:[`Silent as a mouse. Nobody notices. You slip away with a small, oddly warm object. A rush of guilt and glee.`,'xp+m loot:gimmick flag:callous'],n:[`His hand closes on yours. "THIEF!" The village watches. Your ears burn for a week.`,'hp-2 xp+s flag:callous']},
 {t:`Trade something for a curio.`,r:'any:gimmick',y:[`He peers at your odd trinket, delighted. "A beauty! A wonder!" He offers an equally odd one in return, and the deal is struck.`,'xp+m loot:gimmick']},
 {t:`Ask him where the curios come from.`,y:[`"From the north," he says. "Aurelon. People leave things when they run." His voice drops. "Mind you don't go there, little one."`,'xp+s flag:knows_cinder']} ]);

sc('a1_stranger','village|🐎 🌫️',
`Late on a grey afternoon, a hooded rider reins in at the edge of the village, the horse steaming and lathered. He doesn't dismount; he only stares at the houses, the smoke, the chapel. Then at you.\n"A drink for a tired man?" he rasps. You see the grey ash on his shoulders, the blood on his glove.`,[
 {t:`Bring him water from the well.`,y:[`He drinks, deeply, and thanks you in a voice like cracked leather. "Name's Aldric," he says. "I'll remember it was you." Then he is gone down the north road, riding hard.`,'xp+m bond:aldric flag:kind'],},
 {t:`Hide behind the water-butt and watch.`,c:'DEX 10 sneak',y:[`He seems wary and unhappy. You see the lantern-pin on his collar, and a sword-hilt wound in rags. When he rides on, you feel you've glimpsed something large.`,'xp+m'],n:[`He spots you at once and tips his hat with a half smile.`,'xp+s']},
 {t:`Warn the elders.`,y:[`The elders send two men to watch the road. The rider is long gone, but the village is ready for what comes later.`,'xp+m flag:village_warned']},
 {t:`Run home and lock the door.`,y:[`Silly, perhaps. But you sleep better.`,'xp+s']} ]);

sc('a1_aldric','village|🛡️ 🐎',
`In the pre-dawn grey, a horse stumbles into Thornwick with a man slumped across its neck. He tumbles off in the lane: a knight, mail torn, a lantern-pin on his collar and a wound across his ribs that has bled through three layers of cloth. His lips move. "Ash... riders... behind me."\nThe village wakes. Shutters bang. Someone shouts for the priest.`,[
 {t:`Pull him out of the lane and into the chapel loft.`,c:'STR 10 fight',y:[`You, Tobb and Wren haul him up the rope ladder. It takes every ounce of strength you have. But he's hidden.`,'xp+m STR+1 flag:aldric_hidden'],n:[`He's heavy. You get him as far as the back room before you collapse.`,'xp+m flag:aldric_hidden hp-1']},
 {t:`Run for the healer and bandages.`,y:[`You sprint down the lane, hammer at doors, and return with the healer and an armload of linen. The knight lives, and the village hides him.`,'xp+m flag:aldric_hidden flag:kind']},
 {t:`Treat the wound yourself.`,r:'skill:herbalism|skill:mending|cls:cleric',c:'WIS 11 heal',y:[`Steady hands, clean water, a quick prayer or two. By dawn, the bleeding has stopped and the knight sleeps. Father Edric stares at you in astonishment.`,'xp+l flag:aldric_hidden flag:aldric_saved bond:aldric'],n:[`You do what you can. He's alive, but only just.`,'xp+m flag:aldric_hidden']},
 {t:`Tell the knight that you won't hide him.`,y:[`You step back. He closes his eyes, and the others carry him away without you. It's a small, grey thing, and you'll remember it.`,'xp+s flag:callous']} ]);

sc('a1_aldric2','interior|🛡️ 🕯️',
`For three days the knight lies in the chapel loft, burning with fever, while Father Edric nurses him and the village whispers. On the fourth, he opens his eyes and finds you at the foot of his cot.\n"You," he says hoarsely. "The child from the lane. {name}, was it?" He tries to smile. "I'm Sir Aldric Vane, of the Silver Lantern. I owe you more than I can repay."`,[
 {t:`Ask him about the Silver Lantern.`,y:[`"A company of the realm's last hopes," he says. "Soldiers, mages, healers, thieves. We swore to find the way to Vorathra's heart — or her end. I was the last who made it out of the Marches." His face darkens. "The rest... didn't."`,'xp+m flag:heard_lantern bond:aldric']},
 {t:`Ask him to teach you to hold a sword.`,y:[`He grins weakly. "Fetch me a stick." For an hour, in the cold chapel yard, he corrects your grip and stance. The lessons stay with you.`,'xp+l STR+1 skill:swordplay bond:aldric']},
 {t:`Ask what the Ashen Queen is really like.`,y:[`"Tired," he says, after a long silence. "That's what I saw. She stood on her tower, and the fire rolled out of her like a thing she couldn't hold. She looked tired." He turns his face to the wall.`,'xp+m flag:heard_mother']},
 {t:`Tell him to get some rest, and leave.`,y:[`He nods, and sleeps. It's kinder than he'd admit.`,'xp+s']} ]);

sc('a1_aldric3','village|🛡️ 🌅',
`A week later, Aldric is on his feet, though pale. He stands at the village edge with his saddlebags, looking north, then back at you. The morning sun glints on the lantern-pin at his throat.\n"I must go," he says. "I'll be back — or I won't. Either way, you've done me a kindness I'll not forget." He unpins the little silver lantern and presses it into your hand.`,[
 {t:`Accept the pin with both hands and promise to keep it safe.`,y:[`"Keep it close," he says. "It's a promise from a knight to a friend: if you ever need me, wear it where I'll see." He rides north. You watch until he is a dot.`,'xp+l +lantern_pin flag:aldric_bond bond:aldric']},
 {t:`Ask if you can go with him.`,y:[`He laughs, kindly. "In a few years, maybe. When you can stand a winter without crying. Find the Lantern, when you're grown." He ruffles your hair, and goes.`,'xp+m +lantern_pin flag:aldric_bond']},
 {t:`Say that he should not go back; it's too dangerous.`,c:'CHA 11 persuade',y:[`He pauses. "Aye. It is." He tilts his head. "But somebody has to." He leaves the pin all the same.`,'xp+m +lantern_pin flag:aldric_bond bond:aldric'],n:[`"I know," he says gently. "That's why I'm going." He leaves the pin all the same.`,'xp+s +lantern_pin flag:aldric_bond']} ]);

sc('a1_riders','village|🏇 🔥',
`They come on a wind that smells of cold ash. Five riders in black plate fused to their flesh, helmets with slits of flame where eyes should be. The horses are skeletal. The leader dismounts and the earth steams where his boots fall.\n"A man," he says, and his voice is a bellows. "A knight. Wounded. Who has seen him?"\nThe village falls silent. {guardian} puts a hand on your shoulder. Every eye in Thornwick is on the ground. Except one pair: a boy named Fenwick, who is staring at you.`,[
 {t:`Lie: say you saw him ride east, bleeding.`,c:'CHA 11 deceive',y:[`"East," the leader repeats, slowly. A long, awful pause. Then: "Thank you, child." They wheel and gallop east. Aldric is safe. The village exhales.`,'xp+l flag:aldric_saved flag:village_warned'],n:[`The leader leans down until the flame in his helmet is an inch from your face. "Liar," he says, almost gently. Heat sears your cheek.`,'hp-4 xp+m flag:aldric_saved']},
 {t:`Say nothing. Stare at your feet.`,y:[`The silence stretches. {guardian} speaks up, steady: "No knight here, my lord." The leader stares, then mounts. "We will return." They gallop away. You never forget the heat of that stare.`,'xp+m']},
 {t:`Point north: say he went toward the forest.`,c:'WIS 11 deceive',y:[`The leader grunts, and turns his column north into the wild. It buys Aldric a day. A clever child, they will say, if they ever learn the truth.`,'xp+l flag:aldric_saved'],n:[`A flicker of flame in the slits. "You hesitated." A hand like a hot iron grips your shoulder, and then lets go. They take a day to search. You are lucky.`,'hp-3 xp+m']},
 {t:`Tell them the knight is in the chapel loft.`,y:[`The leader's smile is a flicker of orange. "Good child." They take the knight. Aldric's cry as they drag him out is a thing you will hear for the rest of your life. As payment, they spare the village — this time.`,'xp+s flag:aldric_betrayed flag:callous']} ]);

sc('a1_riders2','village|🌅 🧒',
`The riders are gone, whichever way they went. Thornwick breathes again, and then begins to argue, loudly and everywhere, about what to do.\nIn the long dusk after, {guardian} sits you down and takes your face in rough hands. "Listen, {name}. Whatever happens, you remember who you are. Not what the world makes of you. Who you are."`,[
 {t:`Promise you will.`,y:[`The simple promise settles in your heart like a seed. {guardian} nods, satisfied, and tousles your hair.`,'xp+m WIS+1']},
 {t:`Ask who you are.`,y:[`{guardian} considers this for a long time. "Someone who asks good questions," comes the slow answer. "Keep asking."`,'xp+m INT+1']},
 {t:`Ask {guardian} to teach you to fight.`,y:[`There's a long silence. Then: "Tomorrow. Dawn. Bring a stick." You start the next day. Your arms ache for a week.`,'xp+m STR+1 DEX+1']},
 {t:`Say nothing and cry quietly into their sleeve.`,y:[`It is alright. It is alright to be eleven years old and frightened. {guardian}'s sleeve is damp by the end, and neither of you ever mentions it.`,'xp+s hp+s']} ]);

sc('a1_omens','village|🌒 🦉',
`The summer you turn twelve is wrong. Hot, dry, and silent — the cicadas stop singing, the stream runs thin, and every night the northern sky glows like an ember in the ashes. Dogs howl at nothing. Cattle refuse to go near the north fields.\nOne night you wake with the hair on your arms standing up. Something is in the village. Something is watching from the dark beyond the fence.`,[
 {t:`Creep to the window and peer out.`,c:'DEX 11 sneak',y:[`A tall shape at the village edge, tall as a house, wreathed in smoke. It's looking at the chapel bell. Then it turns its head slowly and the whole night seems to look at you. You do not scream. It leaves.`,'xp+l flag:heard_ember'],n:[`A board creaks. The shape turns. For a moment, flame gleams in the dark. Then it is gone. You do not sleep again.`,'hp-1 xp+m']},
 {t:`Wake {guardian}.`,y:[`{guardian} listens, grim, then takes down an old sword from the wall. "Get your boots on. Quietly." You sit up till dawn together. Nothing comes. But you are ready.`,'xp+m flag:village_warned']},
 {t:`Cast a quick Detect Magic in the dark.`,r:'skill:detect',mp:1,y:[`A faint, cold wash of magic hangs over the northern fence: a scouting spell. Someone is looking at Thornwick with sorcerous eyes. You tell the elders at dawn.`,'xp+l flag:village_warned']},
 {t:`Pull the blankets over your head and shake.`,y:[`Safe, and smelling of wool. The dark sits outside like a patient dog.`,'xp+s']} ]);

sc('a1_raid1','village|🔥 🏘️',
`It comes at midnight on the last night of summer. A thundering of hooves, a shriek of horns, and the north side of Thornwick is aflame. Black riders pour through the gap in the fence, torches in their fists, and the thatch goes up like paper. Screaming. Bells. Dogs. The whole village is waking into nightmare.\nYou stand in your doorway, twelve years old, in your nightshirt, with fire running through the lane.`,[
 {t:`Run to the chapel and ring the bell!`,c:'CON 10 endure',y:[`You tear through smoke and noise and haul the rope with everything you've got. The bell booms, the village wakes, and a thousand terrified hearts find direction. It saves many.`,'xp+l flag:bell_rung flag:village_saved'],n:[`You reach the bell, but the smoke chokes you. You ring it, half-blind, with burning lungs. It's enough.`,'hp-4 xp+l flag:bell_rung']},
 {t:`Grab the nearest weapon and join the defenders.`,c:'STR 11 fight',y:[`A pitchfork, a hay-knife, a rage you did not know you owned. Shoulder to shoulder with the men of Thornwick, you drive back a raider. They will talk about it.`,'xp+l flag:brave'],n:[`A black horse rears above you. A hoof grazes your head. You roll clear, bruised, but breathing.`,'hp-5 xp+m']},
 {t:`Gather the little ones and lead them to the old root-cellar.`,y:[`Eleven children, two babies and a goat. You herd them through the smoke in the dark, a trembling little army, and shut the cellar door. It is the bravest thing you've ever done. Nobody will ever know.`,'xp+l flag:kind flag:village_saved']},
 {t:`Hide under the bed.`,y:[`The sound of hooves and screaming goes on, and on. At dawn, you creep out into a world that has been rearranged by ash. You'll never forgive yourself — or forget.`,'xp+s flag:callous flag:village_burned']} ]);

sc('a1_raid2','village|🔥 🛡️',
`The raid has become a battle. Smoke fills the lanes and the dark is lit with torchlight and steel. {?flag:bell_rung|The bell still tolls, ringing out the village's defiance.|The bell is silent, and the village is confused.} In the chaos, you see Wren trapped against the burning mill wall by a rider, a torch raised to throw. {?flag:garrick_friend|Garrick is beside you, panting and white, but there.|}\n{guardian} is somewhere in the smoke.`,[
 {t:`Throw yourself at the rider to save Wren.`,c:'STR 11 fight',y:[`You crash into the horse, spoiling the throw, and Wren scrambles away. The rider's sword comes round — and glances off the iron pot you grabbed. You live. You both live.`,'xp+l flag:friend_wren flag:saved_wren'],n:[`The rider's blade finds your shoulder. Pain, white and enormous. But Wren is out of the way, and the rider's horse bolts.`,'hp-7 xp+l flag:saved_wren']},
 {t:`Shout and throw a stone, drawing him toward you.`,c:'DEX 11 dodge',y:[`The rider turns, torch blazing. You duck behind the well. Wren runs. Hooves, fire — and then Tobb with a pitchfork and a scream. You both flee.`,'xp+l flag:saved_wren'],n:[`He turns, and the torch gets you in the arm. Searing. But Wren is gone, and you are alive.`,'hp-6 xp+l flag:saved_wren']},
 {t:`Hurl a bolt of magic at the rider.`,r:'skill:firebolt|skill:lightning|skill:frost',mp:3,y:[`The rider screams as your spell sends him flying. Wren stares, then grabs your hand and runs. You carry the shock of that moment for years.`,'xp+l flag:saved_wren']},
 {t:`Seek out {guardian} first.`,y:[`You plunge through the smoke after {guardian}, and find them in the lane, fighting a raider with a hayfork. Wren is on her own. You'll learn what it cost later.`,'xp+m flag:wren_lost']},
 {t:`Hide behind the well.`,y:[`The sound of Wren's scream cuts out. You crouch there, shaking, while the world goes red. It's over, eventually, and you'll never be the same.`,'xp+s flag:callous flag:wren_lost']} ]);

sc('a1_raid3','village|🔥 🏇',
`The raiders' captain, a giant in black, rides through the smoke toward the chapel, where the villagers have made their stand. He carries a torch the size of a tree-branch, and the whole village stares. This is the moment. If he reaches the chapel, it burns, and so does everyone inside.\nYou are in the open, between the captain and the door.`,[
 {t:`Stand in the doorway and defy him.`,c:'CHA 12 intimidate',y:[`Something in your twelve-year-old voice rings with a force that surprises you. The captain pauses, and his horse balks. A hundred villagers surge out and the raiders break. A legend is born.`,'xp+xl flag:village_saved flag:brave'.replace('xp+xl','xp+l')],n:[`He laughs, and kicks you aside. But a dozen villagers rush from the chapel at that moment, and the raiders pull back, laughing.`,'hp-6 xp+l flag:village_saved']},
 {t:`Pull down the burning beam from the roof to block him.`,c:'STR 12 fight',y:[`With a shriek of timber, the flaming beam crashes between the captain and the door. His horse rears. The villagers swarm out and drag him down. Thornwick holds.`,'xp+l flag:village_saved'],n:[`The beam falls on you instead. You wake in the dark, ash in your hair, and a hand pulling you clear.`,'hp-9 xp+l']},
 {t:`Cast a ward over the doorway.`,r:'skill:ward|skill:bless|skill:frost',mp:2,y:[`A shimmering barrier springs up, and the captain's torch fizzles on it. In the stalemate, the villagers rally and push him back. The fire dies in the thatch.`,'xp+l flag:village_saved']},
 {t:`Slip behind the raiders and cut the captain's saddle-girth.`,c:'DEX 12 sneak',y:[`A flash of steel. The saddle slides. The giant crashes into the mud and the villagers pile on. You stagger away, heart pounding.`,'xp+l flag:village_saved'],n:[`A raider spots you. A blow, a flash of white, and you wake as the dust settles.`,'hp-6 xp+m']},
 {t:`Flee. Everyone is dying; you are not.`,y:[`You run, through smoke and fields, until the screaming dims behind you. In the dawn, you creep back to a ruin that was a village. You were not there when it mattered. The knowledge will be your oldest companion.`,'xp+s flag:callous flag:village_burned']} ]);

sc('a1_after','village|🌅 💔',
`Dawn. Thornwick is a ruin of black beams and drifting smoke. The raiders are gone — they came for something, took what they wanted, and left. {?flag:village_saved|But the chapel stands, and most of the people are alive, huddled in the green wrapped in blankets.|The chapel is a charred shell, and the green is lined with the dead.}\nYou find {guardian} in the lane by the burned mill, sitting against a wall with their eyes open. The ash on their face is rinsed in two clean tracks. They are not breathing.`,[
 {t:`Kneel and close their eyes.`,y:[`Quietly, you do it. You hold their hand for a long time while the smoke drifts. Whatever you become, this is where it began.`,'xp+m flag:guardian_dead']},
 {t:`Try to heal them. Try everything.`,r:'skill:mending|skill:herbalism|cls:cleric',c:'WIS 14 heal',y:[`A heartbeat. A flutter. A cough, and {guardian} comes back, grey and weak and alive. They stare at you. "You... did that." It will be a long recovery.`,'xp+xl flag:guardian_saved hp-3'.replace('xp+xl','xp+l')],n:[`You pour every scrap of power into the wound. It is too late. You weep, empty.`,'xp+m mp-3 flag:guardian_dead']},
 {t:`Shout at the sky.`,y:[`The scream tears out of you, raw and animal. A few survivors turn to look. Someone starts to cry. Wren comes and sits beside you, silent, and takes your hand.`,'xp+m flag:guardian_dead']},
 {t:`Take their sword and walk after the raiders.`,y:[`Rage lifts you to your feet. But Father Edric catches your arm and says: "Not yet, child. Not like this. You will die in a ditch." Your fury, restrained, begins to cool into something long and hard.`,'xp+m flag:guardian_dead flag:oath_justice']} ]);

sc('a1_bury','village|⚰️ 🌾',
`The funeral is held at noon, in the green. Forty-three graves have been dug; the villagers work in silence. {?flag:guardian_dead|{guardian} is laid with the others, wrapped in the best blanket in Thornwick.|{guardian} lies weak but alive, watching from a cart.} Father Edric speaks a few words, but no one hears them. Ash is still falling.\nAfterward, you find a stranger waiting at the edge of the village: a woman in the grey of the Lantern Abbey, with a satchel and weary eyes.`,[
 {t:`Ask what she wants.`,y:[`"Survivors," she says. "The Silver Lantern is gathering what it can. There is a school in Brindlecross, where orphans of the Ashen Wars are trained. I can take you." Her eyes are kind, and tired.`,'xp+m flag:abbey_offer']},
 {t:`Say you aren't leaving Thornwick.`,y:[`"No one is asking you to abandon it," she says. "Only to learn how to protect it." It takes you a long night to see that she is right.`,'xp+m flag:abbey_offer']},
 {t:`Ask about the raiders.`,y:[`"Ash-riders," she says. "The Queen's herald, the Ember Wraith, sent them. They come for knights, and for the powers that hide in children." She looks at you for an odd second. "Perhaps not only for knights."`,'xp+m flag:knows_ember flag:abbey_offer']} ]);

sc('a1_oath','village|🌅 ⚔️',
`The last night in Thornwick. Embers still glow in the ruins. You sit on the rise above the village and watch the stars come out over the Greenmarch. Behind you, the forest breathes. In front, the long black road north. You are twelve years old, and you have never been so awake.\nSomething in you is making a promise. What is it?`,[
 {t:`"I will make her answer for this."`,y:[`The oath of justice is hard and bright in your chest. It will give you a purpose, and sometimes it will give you pain. You will remember it, in the last hour.`,'xp+l flag:oath_justice STR+1']},
 {t:`"I will make sure no one else loses what I lost."`,y:[`The oath of protection settles around your shoulders like a cloak. It will warm you, and sometimes it will weigh.`,'xp+l flag:oath_protect CON+1']},
 {t:`"I will grow so strong that no one can ever burn my home again."`,y:[`The oath of power burns white and cold. It gives you drive. You must take care it does not eat you.`,'xp+l flag:oath_power DEX+1']},
 {t:`"I will find out why she did this."`,y:[`The oath of understanding is quiet, and sharp. It asks for patience, and will repay it.`,'xp+l flag:oath_knowledge INT+1']},
 {t:`"I will stop her — and not become her."`,y:[`The oath of mercy is the hardest to keep, and the strongest. It asks a great deal. It will give a great deal.`,'xp+l flag:oath_mercy WIS+1']} ]);

sc('a1_leave','village|🛤️ 🎒',
`Morning. A cart is waiting at the edge of Thornwick, a patient grey mule in its traces and the abbey-woman holding the reins. You have a small pack, the clothes you stand in, and whatever you have chosen to carry out of a burned life.\nThis is it: the edge of the only world you have known.`,[
 {t:`Whistle for Biscuit. He is coming too.`,r:'flag:pup',y:[`He tears down the lane, tongue lolling, and leaps into the cart as if he'd been born to travel. You have a friend on the long road.`,'xp+m']},
 {t:`Ask Wren to come with you.`,r:'flag:friend_wren&!flag:wren_lost',y:[`Wren, pale and streaked with ash, shakes her head. "Someone has to stay," she says. "Someone has to rebuild." She hugs you hard, hands you her little wooden whistle, and does not look at you as you go.`,'xp+m +firefly_jar flag:wren_remembers']},
 {t:`Say goodbye to the ruins.`,y:[`You touch the blackened beam of your old door. "I'll come back," you whisper. The mule lurches into motion, and you do not look round. If you look round, you might not go.`,'xp+m']},
 {t:`Take {guardian}'s old sword from the rubble.`,y:[`The blade is chipped, the hilt scorched. It will do. It will have to.`,'xp+m +iron_sword']} ]);

})();
