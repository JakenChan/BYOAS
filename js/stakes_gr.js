/* THE THREAD OF THE MOIRAI — higher stakes: companions can be lost, Eris's last trick needs Favor, friends or Athena's gifts,
   and the final trip through time draws on your Favor. */
(function(){
const G = globalThis.G, { S_ } = G.grh;
const place = (chId, targetId, beat, where) => { const ch = G.chapters[chId]; const old = ch.beats; ch.beats = S => { const b = typeof old === 'function' ? old(S) : old.slice(); const i = b.indexOf(targetId); if (i < 0) b.push(beat); else b.splice(where === 'after' ? i + 1 : i, 0, beat); return b; }; };

/* ---------- Mara overboard (Poseidon's storm) ---------- */
S_('gr5_mara','Overboard!','sea|🌊 🆘',
`A monster wave slams the deck. Everybody grabs a rail. When the water clears, Mara is not there. A flash of her orange scarf, thirty feet out in the grey swell, and a hand, waving.\n"MARA!" you scream. The sailors are frozen. The ship is lurching. There is perhaps one minute.`,[
 {t:`Throw her a rope and haul.`,c:'STR 8 endure',y:[`The rope uncoils like a snake and she grabs it with both hands. You haul, the sailors haul, and she comes up the side, coughing and swearing in three languages. She gives you a ferocious hug.`,'xp+l mp+3 hp-1 bond:gr_mara'],n:[`The rope falls short. Mara disappears under a wave, and the sea closes over the place where she was. Nikias grabs your shoulder. "She is in Poseidon's hands now," he says. "May he be kind."`,'xp+s mp-3 hp-2 drop:gr_mara flag:gr_mara_lost']},
 {t:`Dive in after her. (Costs Favor)`,mp:3,y:[`You hit the water like a stone and the sea shoves you toward her as if it were carrying you. Your hand closes on her scarf. A sailor gets a rope round you both, and you are hauled up, spluttering. "Never do that again," says Mara, hugging you.`,'xp+l mp+1 hp-2 bond:gr_mara flag:gr_respect']},
 {t:`Pour out your watered wine to the sea and pray.`,r:'item:gr_wine',y:[`The wine spreads out in a red ribbon, and the sea hesitates. A great wave rolls under Mara and lifts her, gently, onto the ladder. "Hm," says Poseidon\'s voice, very far away. "Fine."`,'-gr_wine xp+l mp+3 bond:gr_mara flag:gr_respect']},
 {t:`Shout for the sailors to fish her out.`,y:[`The sailors scramble, and a fishing boat hauls her out a few minutes later, half-drowned and furious. "I'll meet you at the shore," she gasps as the boat carries her away. "Do not do anything clever without me."`,'xp+s drop:gr_mara flag:gr_mara_ashore']} ]);
S_('gr5_mara_back','Poseidon Returns Mara','sea|⛵ 🌊',
`As you leave the hall, a wave lifts a figure onto the deck, drenched, annoyed and carrying a very large crab. It is Mara. "I was escorted," she says with enormous dignity, "by something very tall and very polite. He insisted on carrying my scarf." She wrings out her sleeve. "I have a lot to say about your ship."\nPoseidon, it seems, remembers who showed respect.`,[
 {t:`Hug her, hard.`,y:[`She hugs back, which is rare. "Right," she says. "What is next? Because I intend to be useful."`,'xp+l mp+3 ally:gr_mara bond:gr_mara']},
 {t:`Hand her a dry cloak and a mug of something hot.`,y:[`She wraps it round herself, with the crab on her lap. "Thank you," she says, gruffly. "I'd have done the same for you."`,'xp+l hp+3 mp+2 ally:gr_mara']} ]);

/* ---------- Niko runs ahead (Gorgon Island) ---------- */
S_('gr6_niko','Niko Runs Ahead','gorgon|🏃 🗿',
`"Is that her?" Niko yelps. A tall, still figure stands at the mouth of the cave, a long way up the shore. "The lady with the snakes! I just want to see!" And before you can catch his sleeve, he is off, racing between the statues, crook flapping, with an enormous grin on his face.\nHe is twenty paces from the cave. He is not looking at his feet. He is looking straight ahead.`,[
 {t:`Tackle him before he gets any closer.`,c:'DEX 9 dodge',y:[`You hit him at a dead run, and the two of you go sprawling in the sand. He lands on his back, laughing. "You scared me!" he gasps. "I was only looking!" You hold on to his crook until he promises to stay behind you.`,'xp+l mp+2 bond:gr_niko'],n:[`You are a heartbeat too late. Niko skids to a halt in the cave mouth and looks up. For one second his face is amazed. Then he is a perfect grey statue, mid-stride, grinning, with his crook still raised. Elena makes a small, broken noise. Glaux closes his eyes.`,'xp+s mp-3 drop:gr_niko flag:gr_niko_stone']},
 {t:`Hold up the polished shield between him and the cave.`,r:'item:gr_mirror',y:[`The bronze flashes across his path, and the cave mouth appears in it, safe and reflected. Niko stops dead, blinking. "Ohh," he says. "That is clever." You steer him round behind you.`,'xp+l mp+3 bond:gr_niko']},
 {t:`Shout at him to stop. (Costs Favor)`,mp:3,y:[`Your voice carries across the shore like thunder. Niko stops mid-stride, as if you had thrown a net. "Alright, alright!" he calls, turning. His eyes are tightly shut. He had known the rule all along. He just forgot it for a moment.`,'xp+l mp+1 bond:gr_niko']},
 {t:`Order him back to the boat, and make him go.`,y:[`He argues. You argue back, firmly. In the end he trudges back to the boat, scuffing his sandals. "You're no fun," he mutters. "Tell me everything after."`,'xp+s drop:gr_niko flag:gr_niko_waits']} ]);

/* ---------- Elena and the river (Underworld) ---------- */
S_('gr7_elena','Elena at the Water','underworld|🌾 💧',
`Behind you, the crunch of Elena\'s footsteps stops. You turn. She is standing at the very edge of the clear, quiet river, with her head tilted, smiling gently. "Forty years of teaching," she murmurs. "A lot of names. A lot of faces. So many lectures. It would be so restful to put them down."\nShe kneels, and cups her hand.`,[
 {t:`Grab her arm and pull her back.`,c:'STR 8 endure',y:[`You hook her elbow and heave. She sits down on the path, blinking. "Oh," she says. "Oh, dear. How silly of me." She laughs, shakily. "It was very persuasive water."`,'xp+l mp+3 bond:gr_elena'],n:[`You are a second too slow. A single sip passes her lips. Her face goes soft and smooth, and the light in her eyes dims. "Hello," she says politely. "Have we met?" She wanders off along the river, humming, and does not look back.`,'xp+s mp-3 drop:gr_elena flag:gr_elena_forgot']},
 {t:`Remind her of her students and her classroom.`,c:'CHA 8 persuade',y:[`"Mrs Rossi," you say. "Room 14. The girl with the red scarf who always asked questions." Her head turns. "Giulia," she whispers. "Giulia Bianchi. She wanted to be an archaeologist." She stands, brushes off her skirt and takes your arm. "Well," she says. "We had better get on."`,'xp+l mp+3 bond:gr_elena flag:gr_kind'],n:[`She hears you, but the words slide off her like rain off a leaf. "How kind," she says. "But I am so tired." She takes a very small sip.`,'xp+s drop:gr_elena flag:gr_elena_forgot mp-2']},
 {t:`Hold the laurel of Apollo up to her.`,r:'item:gr_laurel',y:[`The laurel glows faintly. "Apollo, who remembers everything," murmurs Elena, touching it. The dreamy look clears from her face. "Thank you," she says, standing. "I must have been tired."`,'xp+l mp+3 bond:gr_elena']},
 {t:`Let her make her own choice.`,y:[`She turns her head, looks at you for a long time, and smiles. "Dear one," she says. "I think I should stay here and rest. Finish what you started." She presses her notebook into your hand. "I will be waiting, in the end."`,'xp+s mp-1 drop:gr_elena flag:gr_elena_forgot']} ]);

/* ---------- Eris's last trick: the hall erupts ---------- */
S_('gr9_discord','Eris Throws Discord','olympus|🍏 💥',
`Eris, seeing the trial slip from her fingers, raises one slim, golden hand. "Shall we give them something to argue about?" she says, and flicks her wrist.\nA ripple of gold crosses the hall. Ares and Poseidon are on their feet, roaring about who sank whose ship. Hera and Aphrodite are screaming about the apple. Apollo is shouting at Hermes. A thunderbolt crackles in Zeus\'s fist. In the confusion, Eris is slipping toward the door, with a strange glint in her eye and a very quiet smile.\nSomeone must calm this hall, now.`,[
 {t:`Raise your voice above the din. (Costs Favor)`,mp:6,y:[`You climb onto a bench and say "STOP", and everything in your Favor goes into it. Your voice is not loud. But it is true, and the whole hall, for a moment, hears it. The quarrel dies. The gods look at each other, abashed.`,'xp+l flag:gr_calmed']},
 {t:`Hold up the olive branch of Athena.`,r:'item:gr_olive',y:[`The silver leaves shimmer, and a silence unfolds from them like a flower. Athena rises from her throne, takes the branch in her hand and says: "Enough." The hall obeys.`,'xp+l mp+3 flag:gr_calmed']},
 {t:`Ask Elena to speak, since she knows every name.`,r:'ally:gr_elena',y:[`Elena steps forward, in her crumpled scholar\'s clothes, and clears her throat. "Lord Ares," she says in perfect classical Greek. "Lord Poseidon. Lady Hera. I have studied you for forty years, and I should like to say that I admire you all. Now: sit down." Forty years of teaching bring a silence that no thunderbolt could.`,'xp+l mp+3 bond:gr_elena flag:gr_calmed']},
 {t:`Ask Glaux to hoot for silence.`,r:'ally:gr_glaux',y:[`Glaux takes a deep breath and lets out a hoot like a trumpet. It is the loudest, rudest, most magnificent sound that has ever been heard on Olympus. The gods stop, stare and turn their heads in unison. "Hm," says Athena, with dry approval. "Mine."`,'xp+l mp+3 bond:gr_glaux flag:gr_calmed']},
 {t:`Shout "ENOUGH!" and hope someone listens.`,y:[`Your voice is lost in the roar. A rogue thunderbolt singes your sleeve. By the time the gods look round, Eris is at the door, hourglass in her hand and her silks swirling, laughing like a bell.`,'xp+s hp-3 flag:gr_discord_failed']} ]);
S_('gr9_chase','The Chase Through the Clouds','olympus|🏃 ☁️',
`Eris sprints across the clouds, silks streaming behind her, the cracked Hourglass tucked under one arm. "Catch me if you can!" she cries. The gods are still bickering. Nobody is following.\nIf she gets away with the Hourglass, time cannot be mended properly. You have seconds.`,[
 {t:`Chase her across the clouds.`,c:'DEX 10 dodge',y:[`You pelt along the cloud-tops, leap a gap and tackle her round the ankles. The Hourglass rolls free and you catch it. She laughs, delighted, flat on her back. "Oh, you ARE fun," she says.`,'xp+l mp+2 hp-1'],n:[`Cloud is slippery stuff. You fall through twice, and she vanishes round a pillar, laughing. When you stagger back to the hall, with bruises and no Hourglass, a messenger finds you: "She dropped it at the gates of Hades. It will be a long time before it is found."`,'xp+s hp-3 -gr_hourglass flag:gr_hourglass_lost']},
 {t:`Ask Hermes to fly after her.`,r:'flag:gr_hermes_back',y:[`Hermes is already moving, in a flash of silver. He catches Eris mid-stride, plucks the Hourglass from under her arm and returns in a heartbeat. "Fast enough?" he says, grinning. He hands it to you.`,'xp+l mp+3']},
 {t:`Appeal to Zeus to command her back.`,y:[`Zeus rises. A word, and Eris stops as if on a leash. The Hourglass is brought back. But the king of the gods is not pleased to have had to be asked, and he looks at you with open irritation for the rest of the day.`,'xp+m mp-2 flag:gr_zeus_annoyed']},
 {t:`Let her go, and make do without the Hourglass.`,y:[`It is a bitter choice. You watch her disappear into the clouds. Without the Hourglass, the sands of time cannot be fully steadied. The mending will be rougher, and more of a gamble.`,'xp+s -gr_hourglass flag:gr_hourglass_lost']} ]);

/* ---------- Niko can be restored if Athena has forgiven ---------- */
S_('gr9_niko','Athena Wakes Niko','olympus|🗿 🌿',
`Athena looks at you for a long moment. "You have a stone boy on Gorgon Island," she says. "I have been told." She sets her spear aside, kneels, and touches the olive branch to the air. "I owed Medusa an apology. I think I may also owe him a childhood." Far away, on a shore of grey statues, one of them blinks.\nA moment later, a grinning boy in a ragged tunic steps out of a cloud, shaking his crook. "I had a very odd nap," says Niko.`,[
 {t:`Hug him, very tightly.`,y:[`"Ow," he says, delighted. "Is it dinner time?" Elena is laughing and crying at once.`,'xp+l mp+4 ally:gr_niko bond:gr_niko flag:gr_niko_restored']},
 {t:`Thank Athena with a deep bow.`,y:[`"Do not thank me," says Athena. "Thank Medusa. She asked."`,'xp+l mp+3 ally:gr_niko flag:gr_niko_restored flag:gr_respect']} ]);
S_('gr9_niko_sad','A Stone Boy','olympus|🗿 😔',
`"The boy on Gorgon Island," says Athena, quietly. "I could undo it, if the Gorgon\'s curse were mine to lift. It is not. It will take her forgiveness, and mine, for what I did to her."\nShe looks at her hands for a very long time. "I am very sorry. I will think about it."`,[
 {t:`Bow your head.`,y:[`There is nothing to say. Niko stands on a grey shore, still grinning, and somewhere a tiny owl hoots in sorrow.`,'xp+s mp-2']},
 {t:`Promise to come back for him someday.`,y:[`"Do," says Athena. "I will be waiting."`,'xp+m mp+2']} ]);

/* ---------- wiring ---------- */
place('gr5','gr5_storm','ally:gr_mara?gr5_mara','after');
place('gr5','gr5_sandal','flag:gr_mara_lost&flag:gr_respect?gr5_mara_back','after');
place('gr6','gr6_cave','ally:gr_niko?gr6_niko','before');
place('gr7','gr7_fields','ally:gr_elena?gr7_elena','after');
place('gr9','gr9_trial','gr9_discord','after');
place('gr9','gr9_discord','flag:gr_discord_failed?gr9_chase','after');
place('gr9','gr9_athena','flag:gr_niko_stone&flag:gr_athena_forgave?gr9_niko','after');
place('gr9','gr9_athena','flag:gr_niko_stone&!flag:gr_athena_forgave?gr9_niko_sad','after');

/* ---------- the trip through time costs Favor, and a lost Hourglass costs more ---------- */
const mend = G.scenes.gr9_mend;
const mendText = mend.text;
mend.text = S => S.flags.gr_hourglass_lost ? mendText.replace('Zeus himself holds the cracked Hourglass, and the Fates, summoned, stand beside him.','Without the Hourglass, Zeus himself takes up what remains of time\'s thread, and the Fates, summoned, stand beside him.').replace('The silver sand stops falling upward. It trembles, turns, and drifts slowly down.','The sand is not there to hold it, so the mending is rough, a patchwork of stolen moments, shaky and thin.').replace('"Time is mended," says Atropos. "Almost."','"Time is mended," says Atropos. "More or less."') : mendText;
const set = G.scenes.gr9_set;
const T = (t, y, fx, req) => ({ t, mp:5, hide:!!req, r:req, y:[y, fx] });
set.opts = [
 T(`"16:40, in seat 23A, one minute before the golden light." (Costs Favor)`,`The sandals flare gold. The wings beat, once, twice, three times. The hall dissolves, the gods dissolve and the last thing you see is Athena's grey eyes, and Elena's smile.`,'xp+l >gr_end_home','!flag:gr_hourglass_lost'),
 T(`"16:40, in seat 23A, one minute before the golden light." (Costs Favor)`,`The sandals flare, jerkily, and the wings stutter. The hall dissolves like a bad signal, and the last thing you see is Hermes's face, worried and kind. "It may not hold," he says.`,'xp+m >gr_end_rough','flag:gr_hourglass_lost'),
 T(`"14:20: take-off from Rome." (Costs Favor)`,`The sandals flare. The wings beat. The world folds like paper.`,'xp+m >gr_end_early'),
 T(`"16:47: the moment of the crash." (Costs Favor)`,`The sandals flare, doubtfully. The wings beat. The world folds like paper, and you arrive inside the roar, the light and the falling sky.`,'xp+s >gr_end_crash'),
 { t:`"No. I am not going yet. I will stay."`, hide:true, r:'flag:gr_athena_forgave|flag:gr_eris_pardoned|flag:gr_medusa_freed', y:[`The sandals sigh, and settle. Hermes grins. "Well!" he says. "A mortal who stays. Who would have thought it." The hall bursts into applause.`,'xp+m >gr_end_olympian'] },
 { t:`Rest on a cloud until your Favor returns.`, hide:true, r:'!mp:5', y:[`You lie back on a cushion of cloud, and Hermes, politely, looks the other way. By the time you sit up, your strength has come back.`,'rest xp+s stayc'] },
 { t:`Step back, breathe and think it over.`, y:[`You take a slow breath, and another. Your thoughts settle, and the sandals hum, patiently.`,'xp+s mp+1 stayc'] } ];
G.sc('gr_end_rough','cabin|🌊 ✈️',
S => `You arrive in seat 23A at 16:40, with Elena beside you and the engines humming. But time is brittle. A minute later the golden light flickers through the cabin, the plane lurches and, instead of crashing, tips down into a long, shaking glide. Mara, wherever she is, would be proud of the pilot: the plane lands hard on the sea, a mile off a small Greek island, and every single passenger gets out.
It is not the ending you wanted. A few people have broken bones, and the plane is a wreck. But everyone is alive, and fishing boats are already pulling them out of the water. Hermes, on a distant cloud, lets out a long breath.
${G.grEpi(S)}`,[{t:'Return to the story menu', act:'new'}],{ end:true, title:'Ending: A Rough Landing' });
/* the nested conditions above use hide on the first two times only when a requirement is present */
set.opts.forEach(o => { if (!o.r) delete o.hide; });
})();
