/* THE LADY OF CASUARINA HOUSE — higher stakes: Courage can freeze you at the finale, friends can panic and leave,
   and the friends who stay can fill in for the gifts you did not manage to bring. */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));
const before = (chId, sceneId, beat) => { const ch = G.chapters[chId]; const old = ch.beats; ch.beats = S => { const b = typeof old === 'function' ? old(S) : old.slice(); const i = b.indexOf(sceneId); if (i >= 0) b.splice(i, 0, beat); else b.push(beat); return b; }; };

/* ---------- a friend panics inside the house ---------- */
S_('cgV2_jiahui','Jia Hui Freezes','haunt|😰 🕯️',
`Halfway through the hall, Tan Jia Hui stops dead and grabs the banister with both hands. Her face is white. "I'm not scared," she whispers, in a very small voice. "I just... I want to go home." Paper boats rustle around her feet. Somewhere upstairs, a child laughs.\nThe loudest girl in class has gone completely quiet.`,[
 {t:`Hold her hand and count breaths together.`,c:'CHA 8 persuade',y:[`In for four, out for four. By the tenth breath her hands stop shaking. "Okay," she says. "Okay. I'm okay." She keeps hold of your sleeve for the rest of the night.`,'xp+m mp+2 bond:cg_jiahui flag:cg_friend_jiahui'],n:[`"I can't!" she cries, and shoves past you. The front door slams, and her footsteps pound away down the brick path. She is gone, and the house seems to have noticed.`,'xp+s mp-2 drop:cg_jiahui flag:cg_jiahui_fled']},
 {t:`Open a Milo packet and share it with her.`,r:'item:cg_milo',y:[`She drinks it in three gulps, wipes her mouth and nods. "Better," she says. "Don't tell anyone I was scared." You promise.`,'-cg_milo xp+m mp+2 bond:cg_jiahui flag:cg_friend_jiahui']},
 {t:`Take the lead and tell her to follow you. (Costs Courage)`,mp:3,y:[`You walk ahead, shoulders back, and talk loudly about nothing. By the time you reach the dining room, she is right behind you, arguing about football. It worked.`,'xp+l bond:cg_jiahui flag:cg_friend_jiahui']},
 {t:`Walk her back to Uncle Lim, then return alone.`,y:[`She does not argue. "Sorry," she mumbles on the beach. "Next time." Uncle Lim pours her a cup of barley water, and you head back in alone.`,'xp+s drop:cg_jiahui flag:cg_jiahui_waits']} ]);

S_('cgV3_hakim','Hakim\'s Ankle','haunt|🩹 🪜',
`On the dark landing, a rotten stair-board gives way. Hakim yelps, grabs the rail and goes down on one knee, hissing through his teeth. "Twisted it," he mutters. "Just a little." He is hopping, white-lipped, and trying very hard to look as if he is not.\nHe is the toughest friend you have. It is very odd to see him hurt.`,[
 {t:`Bandage his ankle with plasters.`,r:'item:cg_plaster',y:[`You wrap it firmly, the way you learned in Scouts. He tests it, winces and grins. "Walkable. Thanks."`,'-cg_plaster xp+m mp+2 bond:cg_hakim']},
 {t:`Help him along, one arm over your shoulder.`,c:'STR 8 endure',y:[`It is slow, and he is heavy, but together you manage the rest of the corridor. He grits his teeth and jokes the whole way.`,'xp+m hp-1 bond:cg_hakim'],n:[`He is heavier than he looks. Halfway down the corridor, he says quietly: "I'll slow you down. I should wait outside." You help him to the door, and he limps to the beach.`,'xp+s drop:cg_hakim flag:cg_hakim_waits']},
 {t:`Tell him to rest on the veranda with a torch.`,y:[`"Boss," he says, saluting, with a very brave face. "I'll keep watch." You hand him the torch and promise to be quick.`,'xp+s drop:cg_hakim flag:cg_hakim_waits']} ]);

S_('cgV3_priya','Priya in the Locked Room','haunt|🚪 📓',
`A door slams somewhere behind you. "Priya?" you call. A thin, muffled voice answers from inside a small room halfway down the corridor. The door is shut, and the brass handle does not move. "I was just reading the spines of the books!" she calls, in a voice that is trying very hard to be calm. "It closed by itself. Please do something."`,[
 {t:`Use the rusty key on the door.`,r:'item:cg_key',y:[`The key turns with a sigh. Priya bursts out, holding a book so tight that her knuckles are white. "The labels!" she gasps. "They have dates!" You grin. She is fine.`,'-cg_key xp+l mp+3 bond:cg_priya flag:cg_friend_priya']},
 {t:`Pick the lock with a pen.`,c:'DEX 9 craft',y:[`Click! Priya bursts out, flushed. "Thank you," she says, and shows you a page: "1958. Soo family. Mei, age seven." You stare.`,'xp+l mp+2 bond:cg_priya flag:cg_knows_names'],n:[`The lock will not give. Behind you, the walls start to creak. Priya, voice shaking, says: "Get Uncle Lim. I'll wait." A long half hour later, Uncle Lim opens the door with a crowbar. Priya goes home, shaken but unhurt.`,'xp+s mp-2 drop:cg_priya flag:cg_priya_waits']},
 {t:`Talk to her through the door and calm her down.`,c:'CHA 8 persuade',y:[`You talk about the maths test, her cat, anything. The handle clicks softly. "It opened by itself," she whispers, stepping out. "When I stopped being scared."`,'xp+l mp+3 bond:cg_priya flag:cg_friend_priya'],n:[`She talks back, but her voice grows more fragile. In the end, she asks, very small: "Can I go home now?" Uncle Lim lets her out, and takes her home.`,'xp+s drop:cg_priya flag:cg_priya_waits']},
 {t:`Run for Uncle Lim.`,y:[`Uncle Lim comes with a crowbar and a lantern. The door opens, and Priya is out, pale and furious at the house. "I am going home," she says firmly. "I will help from there."`,'xp+s drop:cg_priya flag:cg_priya_waits']} ]);

before('cgV2','cgV2_retreat','ally:cg_jiahui?cgV2_jiahui');
before('cgV3','cgV3_chase','ally:cg_hakim?cgV3_hakim');
before('cgV3','cgV3_chase','ally:cg_priya?cgV3_priya');

/* ---------- the finale: Courage decides whether you can stand ---------- */
const c1 = G.scenes.cg4_confront1;
c1.text = c1.text + `\nThis is the moment everything has led to. Your knees feel like water. Whatever you have left in you, now is the time to find it.`;
c1.opts = [
 {t:`Plant your feet and stand your ground. (Costs Courage)`,mp:4,y:[`You plant your feet, hold your breath and lift your chin. The wind pushes at your hair but does not push you. You are scared, and you stand anyway. The house shivers, uncertain.`,'xp+l flag:cg_stood']},
 {t:`Sniff the Tiger Balm for courage.`,r:'item:cg_balm',y:[`Sharp, minty, bright. Your head clears and your knees stop knocking. You stand up straighter.`,'-cg_balm xp+m mp+5 flag:cg_stood']},
 {t:`Open a Milo packet and drink it down.`,r:'item:cg_milo',y:[`Cold, sweet, chocolatey. It tastes like every Saturday morning. Your hands steady.`,'-cg_milo xp+m mp+6 flag:cg_stood']},
 {t:`Take a friend's hand.`,r:'anyally',y:[`A warm, sweaty, very real hand. "I'm here," says your friend. "I'm not scared." Their voice shakes. It does not matter.`,'xp+m mp+4 flag:cg_stood']},
 {t:`Back up against the wall and close your eyes.`,y:[`You squeeze your eyes shut and press your back to the wall. The wind rises, and a cold, soft voice murmurs: "Shh... sleep..." Your legs will not move. Your voice will not come.`,'xp+s mp-2 flag:cg_froze']} ];

S_('cg4_froze','Frozen','bungalow|🥶 🌊',
`The mist climbs the stairs, soft and cold as a sheet. Madam Soo's voice sinks into your ears like warm water: "Rest, little one. Everyone rests, in the end." Your legs are heavy, your tongue is thick and the whole room feels very far away. Aiman, behind you, is still asleep.\nYou cannot fight her like this. You need to find your courage, quickly, or you will not be leaving.`,[
 {t:`Gulp down a Milo packet.`,r:'item:cg_milo',y:[`Chocolate, malt, sugar. The fog in your head clears a little. You straighten, and look at the lady.`,'-cg_milo xp+m mp+6 flag:cg_stood']},
 {t:`Sniff the Tiger Balm, hard.`,r:'item:cg_balm',y:[`It stings your nose and your eyes, and wakes you up like a slap. You stand.`,'-cg_balm xp+m mp+5 flag:cg_stood']},
 {t:`Reach for a friend's hand.`,r:'anyally',y:[`A warm, real hand. It pulls you back from the edge. "Come on," says your friend. "Get up." You get up.`,'xp+m mp+4 flag:cg_stood']},
 {t:`Hum the lullaby.`,r:'flag:cg_lullaby',y:[`The tune comes up from a place the cold cannot reach. The mist wavers. You find your feet, and your voice.`,'xp+m mp+3 flag:cg_stood']},
 {t:`Stumble out of the house while you still can.`,y:[`Hand over hand along the wall, you reach the door and tumble out onto the sand. Behind you, the house sighs, a long, sad sigh. You have failed, this time. But you are safe, and Aiman is still inside.`,'xp+s >cg_end_c']},
 {t:`Close your eyes and let the mist take you.`,y:[`It is so soft. It is so warm. Nobody is shouting. You sink into the mist like a stone into a pond.`,'xp+s >cg_end_sleep']} ]);
G.chapters.cg4.beats = ['cg4_beach','!flag:cgv1_done?cg4_gate','!flag:cgv2_done?cg4_veranda','!flag:cgv3_done?cg4_nursery','~enc','cg4_library','cg4_confront1','flag:cg_froze&!flag:cg_stood?cg4_froze','cg4_confront2'];

/* ---------- the finale: friends can fill in for what you could not bring ---------- */
const c2 = G.scenes.cg4_confront2.opts;
const at = c2.length - 1;   // keep the plain "walk out" option last
c2.splice(at, 0,
 {t:`Priya holds up her careful drawing of Mei's red boat.`,hide:true,r:'ally:cg_priya&!flag:cg_gave_boat&!item:cg_boat&!item:cg_replica',y:[`Priya steps forward with her notebook open. "I couldn't find the real one," she says, shaking, "but this is exactly what it looked like." Madam Soo takes the drawing as if it were made of glass. "Yes," she whispers. "Red. With a white stripe." She holds it to her heart.`,'xp+l mp+3 bond:cg_priya flag:cg_gave_boat stayc']},
 {t:`Hakim holds up his big football torch at the window.`,hide:true,r:'ally:cg_hakim&!flag:cg_gave_lantern&!item:cg_lantern',y:[`Hakim jams his torch against the glass and switches it on. A great white beam pours out over the dark sea, bright as a lighthouse. "Like that?" he says. Madam Soo's face lifts. "A light," she whispers. "Someone is still looking for her."`,'xp+l mp+3 bond:cg_hakim flag:cg_gave_lantern stayc']},
 {t:`Jia Hui sings the lullaby beside you, loudly and a little off-key.`,hide:true,r:'ally:cg_jiahui&!flag:cg_sang',y:[`She has never sung in public, and her voice wobbles on every note. But she keeps going, loudly, defiantly. "My grandmother sang this one!" she says. By the second verse Madam Soo is humming with her, and so, tiny and clear, is someone upstairs.`,'xp+l mp+3 bond:cg_jiahui flag:cg_sang stayc']});
})();
