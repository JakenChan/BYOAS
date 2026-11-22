/* THE THREAD OF THE MOIRAI — adventure pack: action encounters, a market that matters, Favor and drachmae with real jobs, a faster start. */
(function(){
const G = globalThis.G;
const o = (t, y, fx, req) => [t,'',y,fx||'xp+s','','',req||''];
const c = (t, chk, y, fx, n, nfx, req) => [t,chk,y,fx||'xp+m',n||'It does not quite work out.',nfx||'xp+s',req||''];
const dare = (t, mp, y, fx, req) => [t,'',y,fx||'xp+l','','',req||'',mp];
const L = (reg, title, em, text, ...opts) => [reg, title, em, text, opts];

/* ================= ACTION ================= */
G.miniArch('gr_action', [
L('any','Harpies!','🦅',`A shriek from the sky. Three bird-bodied women with wild hair swoop down on you, talons out, and snatch at your bag. The Harpies are famous for stealing food from the hungry.`,
 c('Drop and cover your bag.','DEX 9 dodge',`You curl round the bag, and the Harpies screech, flap and thieve a single fig before giving up and flapping off, insulted.`,'xp+m mp+2','They snatch a handful of coins and your best snack before flapping off, cackling.','xp+s gold-5'),
 dare('Wave the olive branch or shout a challenge. (Costs Favor)',3,`"In the name of Athena!" you cry. The Harpies stop in mid-air and flap away in a sulk. You keep every crumb.`,'xp+l mp+1'),
 o('Throw a honey cake to distract them.',`They fight over it in a cloud of feathers while you slip away.`,'xp+m -gr_honey','item:gr_honey'),
 o('Duck into a nearby cave until they pass.',`A long, nervous wait. They leave, still screeching.`,'xp+s')),
L('any','Bandits on the Road','🗡️',`Four men in ragged cloaks step out of the olive grove and block the road. "A toll for the road," says the biggest, hefting a club. "Ten drachmae, friend. Or something equally valuable."`,
 o('Pay the 10 drachmae.',`The bandit counts the coins, nods and waves you on. "Pleasure," he says. A plain solution to a plain problem.`,'gold-10 xp+s','gold:10'),
 c('Talk your way past them.','CHA 9 persuade',`You explain you are a priestess\'s messenger, bound for Delphi. They back off, muttering. "Well, why didn\'t you say?"`,'xp+l mp+2','They are not convinced, and you lose a few coins before they let you go.','xp+s gold-4'),
 dare('Walk straight through the middle of them. (Costs Favor)',3,`You do not slow down. You do not blink. They part like a curtain. "Lunatic," one of them mutters, almost admiringly.`,'xp+l mp+1'),
 o('Go round through the olive grove.',`Twenty minutes of scrambling through branches. You emerge scratched but untroubled.`,'xp+s hp-1')),
L('any','The Charging Bull','🐂',`A great black bull, escaped from a sacrifice, thunders down the village street. People scatter. A small boy is frozen in its path, clutching a ball.`,
 c('Dive and pull the boy aside.','DEX 9 dodge',`You scoop him up and roll. The bull thunders past with a gust of hot air. The boy hugs you. His mother weeps.`,'xp+l mp+3 flag:gr_kind','You are too slow, and a hoof catches your leg, but the boy is safe.','xp+m hp-3 flag:gr_kind'),
 dare('Stand in front of the bull and hold up your hands. (Costs Favor)',3,`The bull skids, snorts, and stops a handspan from your nose. You stare it down until it shakes its head and trots away, quiet as a lamb.`,'xp+l mp+2 flag:gr_kind'),
 o('Shout for help and herd the villagers into a doorway.',`A dozen people squeeze into a baker\'s shop as the bull rushes past. Nobody is hurt.`,'xp+m mp+2 flag:gr_kind')),
L('any','A Satyr\'s Game','🐐',`A satyr with a goatee and a wineskin pops up from behind a rock. "A wager, a wager!" he cries. "Out-dance me and I will give you a gift. Lose, and you carry my wine to the next village!"`,
 c('Dance, as hard as you can.','DEX 8 perform',`You whirl, leap and stamp. The satyr whoops, claps and finally collapses in laughter. "A gift for the best dancer in a hundred years!" He presses a bag of coins into your hand.`,'xp+l gold+8 mp+3','He out-dances you easily, and you carry his wine for a mile.','xp+s hp-1'),
 o('Decline politely.',`"Spoilsport!" he cries, but he pours you a drink anyway.`,'xp+s mp+2'),
 o('Offer to play his pipes instead.',`The sound is terrible. The satyr is enchanted. You part friends.`,'xp+m mp+2 flag:gr_kind')),
L('any','Narrow Ledge','⛰️',`The path along the cliff narrows to a ledge barely a foot wide. Below, the sea crashes on rocks. A goat looks at you from the other side with open contempt.`,
 c('Edge along facing the rock.','DEX 9 climb',`Inch by inch, you shuffle across. At the end, the goat gives a bleat that might be applause.`,'xp+m mp+2','A stone crumbles and you slide, scraping both palms, before you catch the ledge.','xp+s hp-3'),
 o('Go back and find the long way round.',`Two hours extra, but not a scratch.`,'xp+s'),
 dare('Run across in one go. (Costs Favor)',2,`Your feet barely touch the rock. Halfway, your heart is in your mouth. At the end, you stand on firm ground, trembling and thrilled.`,'xp+l mp+1')),
L('any','Shipwreck Swim','🌊',`A rogue wave smashes into the little fishing boat. Planks fly. The crew yells. You find yourself in the sea, with the boat sinking behind you and a small, scared sailor boy clutching a barrel.`,
 c('Swim to the barrel and tow him to shore.','STR 9 endure',`A hard, cold, burning swim. You drag him onto the beach, and he coughs, sobs and hugs you. The whole village comes running.`,'xp+l hp-2 mp+3 flag:gr_kind','The current is stronger than you expected. You make it, barely, bruised and shivering, with the boy.','xp+m hp-4 flag:gr_kind'),
 o('Float on your back and wait for rescue.',`Twenty minutes later, a boat finds you. Cold, wet and alive.`,'xp+s hp-2'),
 dare('Call on Poseidon for mercy. (Costs Favor)',3,`The sea heaves, and a large, smooth swell rolls you and the boy up the beach as gently as a hand. Poseidon, it seems, was listening.`,'xp+l hp+2 flag:gr_respect')),
L('any','The Nymph\'s Riddle','🧚',`A water nymph peeps from a spring, grinning. "A riddle for a drink of the sweetest water in Greece! What is always coming, but never arrives?"`,
 o('"Tomorrow."',`She claps in delight and fills a flask. The water is cold, clear and sweet, and you feel refreshed in body and mind.`,'xp+m hp+6 mp+4 quiz+'),
 o('"A ship."',`"Ha! Close, but ships do arrive." She dips her fingers and flicks a few drops at you, laughing.`,'xp+s quiz-'),
 o('Pay 2 drachmae for a flask instead.',`She rolls her eyes and fills it for the price. The water is just as good.`,'gold-2 hp+4 mp+2','gold:2')),
L('any','Centaur Race','🏇',`A centaur at a crossroads stamps and snorts. "You walk like a slug," he says. "Race me to that tree, and if you win, I will carry you to Delphi."`,
 c('Race him flat out.','DEX 10 dodge',`Neck and neck, to the very last stride. You lunge at the tree and touch it a fingernail before his hoof. "By Zeus!" he gasps, and honours the wager.`,'xp+l mp+3 hp-1','He wins by three lengths, laughing. "Next time, slug!"','xp+s'),
 o('Decline. You are not in a hurry.',`"Wise slug," he says, with a snort of laughter.`,'xp+s'),
 o('Challenge him to a riddle instead.',`He stops, offended, then thoughtful. By the end he is laughing again, and gives you a ride for a mile.`,'xp+m mp+2')),
L('any','Wild Dogs of the Hills','🐺',`Three shaggy, yellow-eyed sheepdogs, half-wild and half-starved, circle you in the pass. They are not growling. They are hungry. Their ribs show.`,
 o('Share your food with them.',`They wolf it down, wag and follow you for half a mile before drifting back to the hills.`,'xp+m mp+3 flag:gr_kind -gr_bread','item:gr_bread'),
 c('Stand tall and talk calmly.','WIS 8 survive',`You hold your ground and speak quietly. After a long minute, the dogs lose interest and trot away.`,'xp+m mp+2','They bark, snap and nip at your cloak before drifting off.','xp+s hp-2'),
 o('Climb the nearest rock.',`They wait below, then drift off when you do not come down.`,'xp+s')),
L('any','Eris\'s Prank','🍏',`You find a golden apple at the side of the road, shining, with a little label: "FOR YOU". Beside it, a hastily written note: "I am sorry about the plane. Eris." There is a very small smiley face.`,
 o('Leave it, and walk on.',`Wise. Behind you, from nowhere, comes a theatrical sigh.`,'xp+m mp+2'),
 c('Examine the apple closely.','INT 9 lore',`Under the paint, the apple is a plain wooden toy, with a tiny scroll rolled inside: "Better luck next time." You laugh, despite yourself.`,'xp+l mp+2','It is only an apple. Possibly cursed. You leave it.','xp+s'),
 dare('Take it and keep it as evidence. (Costs Favor)',2,`You wrap it in cloth. It hums unpleasantly in your bag, but it might be very useful in a trial.`,'xp+m +gr_apple'))
]);

/* ================= MARKET ================= */
const buy = (t, cost, item, msg, extra) => o(`${t} (${cost} drachmae).`, msg, `gold-${cost} +${item} ${extra||'xp+s'}`, `gold:${cost}`);
G.miniArch('gr_shop', [
L('any','An Agora Stall','🛍️',`A stallholder with a booming voice shouts above the din: "Honey cakes! Figs! Barley bread! Watered wine! The best prices in all Athens!"`,
 buy('Buy a honey cake',3,'gr_honey','Warm, sticky and rich. It is also, you suspect, the perfect gift for something hungry and many-headed.'),
 buy('Buy a bag of figs',2,'gr_figs','Plump, purple and sweet.'),
 buy('Buy a skin of watered wine',3,'gr_wine','The Greek way: wine and water. A fine offering to a thirsty god.'),
 o('Just browse.',`A large cheese catches your eye, and a large fly catches the cheese.`,'xp+s')),
L('any','A Temple Offering Table','🛕',`At the temple door, a priestess sits at a little table of offerings: honey, incense, flowers and little votive figurines. "A gift to the god," she says, "is a gift to yourself."`,
 o('Offer 5 drachmae and a prayer.',`The priestess touches your forehead. A warm, golden feeling floods through you, and you feel a god\'s attention on you, light as a feather.`,'gold-5 xp+m mp+m st:bless3 flag:gr_respect','gold:5'),
 o('Offer a honey cake.',`She places it on the altar. The flame leans toward it, politely.`,'-gr_honey xp+l mp+m flag:gr_respect','item:gr_honey'),
 o('Say a prayer, and leave nothing.',`She nods. A sincere prayer is accepted, in a smaller way.`,'xp+s mp+2')),
L('any','The Boatman\'s Offer','⛵',`A fisherman with a patched sail and a gap-toothed smile leans on his boat. "Two drachmae and I take you down the coast. Or walk, and see the bandits."`,
 o('Pay the 2 drachmae.',`A bright, windy hour on the water, and you step off rested, with the day half done.`,'gold-2 xp+m hp+3 mp+2','gold:2'),
 c('Barter your way aboard.','CHA 8 persuade',`You offer a story about a flying chariot, and he laughs so hard that you ride free.`,'xp+m mp+2','He shrugs and pushes off without you.','xp+s'),
 o('Walk the coast road.',`Dusty, hot, with a little sea breeze. Nothing happens, which is rather nice.`,'xp+s')),
L('any','The Wandering Healer','🌿',`An old woman with a basket of herbs hums by the road, grinding something green in a bowl. "Cuts, burns, bruises and heartache," she says. "A fair price for each."`,
 o('Buy a salve (4 drachmae).',`She rubs a cool, sharp-smelling paste on your scrapes. In minutes, the stinging is gone.`,'gold-4 hp+10 xp+s','gold:4'),
 buy('Buy a roll of bandages',3,'gr_bandages','Clean linen, wrapped tight.'),
 o('Chat and learn which herbs are safe.',`She teaches you three plants, and you tuck the knowledge away.`,'xp+m mp+2')),
L('any','A Bribe at the Gate','🛂',`A bored guard at a small city gate leans on his spear. "Gates are closed. Special pass needed. Or, ah, a small donation to the guard\'s wine fund."`,
 o('Slip him 5 drachmae.',`The gate swings open. "A pleasure," he says. "Mind the cats."`,'gold-5 xp+s','gold:5'),
 c('Argue your case calmly.','CHA 9 persuade',`You explain, charm and flatter. He is so flattered that he opens the gate and waves you through.`,'xp+m mp+2','He will not budge. You wait for dawn.','xp+s'),
 o('Wait for morning at an inn.',`A cheap bed and a long sleep. The gate opens at dawn.`,'xp+s rest'))
]);

/* ---------- weights ---------- */
const W = (r, a, s, l, t, k, p) => { const R = G.regions[r]; if (R) R.enc = { gr_action:a, gr_shop:s, gr_local:l, gr_trivia:t, gr_kind:k, gr_peril:p }; };
W('gr_rome', 2, 1, 4, 2, 1, 0);
W('gr_shore', 5, 2, 3, 3, 2, 2);
W('gr_athens', 4, 3, 4, 4, 2, 0);
W('gr_delphi', 4, 2, 4, 4, 2, 1);
W('gr_sea', 5, 2, 4, 3, 1, 3);
W('gr_gorgon', 4, 0, 3, 3, 1, 3);
W('gr_forge', 4, 0, 3, 3, 1, 2);
W('gr_hades', 4, 0, 3, 4, 1, 3);
W('gr_olympus', 5, 0, 3, 4, 1, 1);

/* ---------- Favor and drachmae in key scenes (options that spend them, so they matter) ---------- */
const add = (id, opt, atIndex) => { const sc = G.scenes[id]; if (!sc) throw new Error('gr_polish: missing '+id); if (atIndex == null) sc.opts.push(opt); else sc.opts.splice(atIndex, 0, opt); };
add('gr4_pythia', { t:`Ask for a clearer answer. (Costs Favor)`, mp:3, y:[`The Pythia's head turns toward you, slowly. "Ask boldly, and I answer boldly," she says. "The hourglass is in the realm of the grey lord. The thread is in the loom of the sisters. The sandals are one in the sea and one in a gaze of stone. And the time to return to is the time you last felt sure."`,'xp+l flag:gr_oracle flag:gr_knows_time'] });
add('gr5_storm', { t:`Pray aloud to Poseidon for calm. (Costs Favor)`, mp:3, y:[`"Earth-Shaker, hear us!" The wind stills like a held breath. The waves ease. "Hm," says the sea, thoughtfully. "A mortal who asks nicely. Come down and tell me why."`,'xp+l flag:gr_respect'] });
add('gr6_cave', { t:`Whisper a prayer to Athena for courage. (Costs Favor)`, mp:3, y:[`A warmth spreads over your shoulders like a cloak. Your fear drains away. You step in with your eyes tightly shut, perfectly steady, and a small, calm voice (not yours) says: "Left. Left a little. There."`,'xp+l flag:gr_respect'] });
add('gr7_ferry', { t:`Offer Charon something unspoken: a vow, and a little Favor. (Costs Favor)`, mp:4, y:[`He looks at you for a very long time. "Strange coin," he says. "But I have heard worse." He gestures to the boat.`,'xp+l flag:gr_charon'] });
add('gr7_hound', { t:`Sing Orpheus's lullaby to the hound. (Costs Favor)`, mp:3, y:[`The words come from somewhere deeper than memory. The first head droops, the second yawns, the third snores. You tiptoe past.`,'xp+l flag:gr_cerberus'] });
add('gr9_zeus', { t:`Ask Athena to speak for you. (Costs Favor)`, mp:4, y:[`"This mortal has done what many gods would not," says a clear voice at your shoulder. Athena has risen. Zeus looks at her for a long moment. "Speak, then."`,'xp+l flag:gr_zeus_heard flag:gr_respect'] });
add('gr5_port', { t:`Pay Captain Nikias extra to sail through the night (10 drachmae).`, r:'gold:10', y:[`He grins, spits on his palms and bellows for the crew. By dawn you are halfway there, and the crew are in a very good mood.`,'gold-10 xp+l mp+2 flag:gr_ship'] });
add('gr4_arrive', { t:`Make a generous offering at the temple door (8 drachmae).`, r:'gold:8', y:[`The priestess lifts the bowl to the light. "Apollo notices," she says. A warm, golden hum rolls through you.`,'gold-8 xp+m mp+m st:bless3 flag:gr_respect'] });

/* ---------- pacing: a faster start ---------- */
G.chapters.gr1.beats = () => ['@+gr_ticket +gr_phone +gr_watch'].concat(G.mix(['gr1_wake','gr1_colosseum','gr1_pantheon','gr1_airport','gr1_flight','gr1_quiz','gr1_light','gr1_crash'],3,{nocamp:true}));
['gr3','gr4'].forEach(id => { const ch = G.chapters[id]; if (!ch) return; const old = ch.beats; ch.beats = S => { let k = 0; return (typeof old === 'function' ? old(S) : old.slice()).filter(b => b !== '~enc' || (k++ % 2 === 0)); }; });
})();
