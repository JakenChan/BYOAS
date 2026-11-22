/* THE ASHEN QUEEN — early-finale triggers.
   The Tower can be reached before 500 choices if a special item, ally or event calls the hero there.
   Every trigger scene offers a safe way to decline, and each one can only appear once. */
(function(){
const G = globalThis.G;
const S_ = (id, title, art, text, opts, extra) => G.sc(id, art, text, opts, Object.assign({ title }, extra||{}));

S_('sh_locket_call','The Locket Wakes','tower|🎵 ✨',
`Late one night, in the quiet of camp, a tiny sound drifts from your pack: a thin, sweet tune like water over glass. Elaris's locket has opened by itself. Its little music box is playing the Thornwick lullaby, over and over, and the fire has turned pale and still.\nOn the northern horizon, a single ruby light glows in the clouds: the window of the Tower of Cinders. The tune seems to be pulling you toward it.`,[
 {t:`Follow the song. Go to the Tower now.`,y:[`You wake the Company in whispers. Nobody argues. Aldric just buckles on his sword. By dawn, the Tower of Cinders is a black needle in the distance, and the lullaby has not stopped.`,'xp+l flag:sh_trig_locket goto:tower']},
 {t:`Close the locket gently. "Not yet. We are not ready."`,y:[`The tune fades. The locket clicks shut. The fire warms again. You sleep, and the light on the horizon keeps patient watch.`,'xp+m flag:sh_trig_locket hp+m']},
 {t:`Sit up and listen to the song until dawn.`,y:[`Elaris's song, a child's song, is all that is left of her. You listen until the sky pales, and feel the weight of it settle into you.`,'xp+m flag:sh_trig_locket mp+m']} ]);

S_('sh_name_whisper','The True Name','tower|📜 🕯️',
`In a quiet moment, you unroll the scroll with the Queen's true name, just to look at it. The ink is faded. As your eyes pass over the letters, a faint, warm breath, like a sigh, rises from the page. The candle bends toward the north.\nSomewhere far away, in a tower of cinders, a woman lifts her head and turns toward the sound of her own name.`,[
 {t:`Read the name aloud, and walk north.`,y:[`"Whoever hears this name," you say, "come and meet me." The Company watches the wind change. By morning, you are on the road to the Tower, with a name for a key.`,'xp+l flag:sh_trig_name goto:tower']},
 {t:`Roll the scroll up and tuck it away.`,y:[`A name is a delicate thing. You keep it for when it will matter most.`,'xp+m flag:sh_trig_name mp+m']},
 {t:`Copy the name carefully into your own journal.`,y:[`If the scroll is ever lost, the name will not be. You write it in your best hand, and feel strangely better for it.`,'xp+m flag:sh_trig_name']} ]);

S_('sh_queen_summons','The Queen Summons','tower|👑 🌑',
`You dream of the Ashen Queen again, but this time she speaks. She stands at a high window in her tower, the ash of a dead city blowing past her. "You are the one who dreams of me," she says, wearily. "Come, then. I am tired of waiting. Come and end it, or let me end it. Either way, come."\nYou wake with the taste of smoke in your mouth. The dream is too clear to ignore.`,[
 {t:`Answer her summons. March to the Tower.`,y:[`The Company packs in the grey light. "Are you sure?" asks Mira. You are not. But you go. The Ashen Marches open before you like a hand.`,'xp+l flag:sh_trig_summons goto:tower']},
 {t:`Refuse the dream. "I come when I choose."`,y:[`Your will is your own. The taste of smoke fades, and the dream does not return that night.`,'xp+m flag:sh_trig_summons mp+m']},
 {t:`Tell the Company about the dream and decide together.`,y:[`Aldric is silent. Mira shrugs. Tamsin says: "She wants us to come. That means she is afraid of us." You find that oddly comforting.`,'xp+l flag:sh_trig_summons bond:aldric']} ]);

S_('sh_dragon_flight','A Dragon\'s Offer','tower|🐉 🌄',
`A shadow sweeps across the road. A vast, bronze-scaled dragon, the one whose life you spared, lands on the ridge ahead with a thump that shakes loose pebbles. She folds her wings and regards you with one enormous eye.\n"You were kind to me," she says, in a voice like warm stones. "A kindness for a kindness. The Tower of Cinders is three hundred leagues away on foot. On my back, it is one night. I am not sure it is a good idea. But I am offering."`,[
 {t:`Climb aboard. Fly to the Tower tonight.`,y:[`The wind is a roar and the world is a map. Rivers and mountains slide beneath you like ribbons. By midnight, the black spire is under your feet. The dragon sets you down gently, and flies away into the dark.`,'xp+l flag:sh_trig_dragon goto:tower']},
 {t:`Thank her, but travel on foot.`,y:[`"Wise," she says, and sounds amused. "The road teaches things the sky does not." She lifts into the air, and a single bronze scale falls at your feet.`,'xp+l flag:sh_trig_dragon gold+m']},
 {t:`Ask whether she can carry the injured to safety instead.`,y:[`The dragon considers. "That," she says, "is a better question than I expected." She lifts any who need help to the nearest town and returns by dusk.`,'xp+l flag:sh_trig_dragon hp+l mp+m']} ]);

S_('sh_mirror_gate','The Shield and the Shard','tower|🛡️ ☀️',
`At dusk, the Mirror-Shield on your back begins to glow, and the Dawnshard at your belt answers it, a bright, warm hum, like two bells ringing the same note. A line of white light runs between them and points toward the north, straight as a drawn thread. It does not waver.\nYou realise that you have everything the old stories said you would need. And the road to the Tower, for the first time, is plainly open.`,[
 {t:`Follow the light. The Tower can be reached tonight.`,y:[`The thread of light leads over hills and through dead villages. It brightens as it goes. At the end of the night, the Tower rises ahead, and the Shield and Shard sing with a single bright voice.`,'xp+l flag:sh_trig_mirror goto:tower']},
 {t:`Stow the light carefully and keep travelling.`,y:[`You wrap the Shield and the Shard in cloth. The light dims and goes quiet. It will wait.`,'xp+m flag:sh_trig_mirror']},
 {t:`Study the thread of light.`,r:'skill:detect|skill:dispel|cls:mage|cls:cleric',y:[`The thread is a promise, not a command. You could follow it now, or later. The choice, you realise, is yours.`,'xp+l flag:sh_trig_mirror mp+m']} ]);

/* attach the triggers as optional beats to the later road chapters, once each */
const T = [
  'item:locket_elaris&flag:elaris_freed&!flag:sh_trig_locket?sh_locket_call',
  'item:true_name_scroll&!flag:sh_trig_name?sh_name_whisper',
  'flag:dreamed_queen&flag:knows_tower&!flag:sh_trig_summons?sh_queen_summons',
  'flag:dragon_friend&!flag:sh_trig_dragon?sh_dragon_flight',
  'item:mirror_shield&item:dawnshard&!flag:sh_trig_mirror?sh_mirror_gate' ];
const PAIRS = { r3:[2,0], r4:[1,2], r5:[3,0], r6:[4,1,2], r7:[3,4,0], r8:[0,1,2,3,4] };
Object.keys(PAIRS).forEach(id=>{
  const ch = G.chapters[id]; if (!ch) return; const old = ch.beats;
  ch.beats = S => { const b = typeof old === 'function' ? old(S) : old.slice();
    const trig = PAIRS[id].map(i=>T[i]); const pos = b.indexOf('!gate');
    if (pos >= 0) b.splice(pos, 0, ...trig); else b.push(...trig);
    return b; };
});
})();
