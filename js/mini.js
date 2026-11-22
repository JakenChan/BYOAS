/* Mini-scene pools for random encounters.
   entry: [filter, title, art/emoji, text, [ [label, check, yesMsg, yesFx, noMsg, noFx, req, mp], ... ]] */
(function(){
const G = globalThis.G;

G.miniArch('npc', [
 ['any',`A Weary Pilgrim`,'🧓',`An old pilgrim, bent like a question mark, hobbles along the road toward a shrine she may not live to reach.`,[
  [`Share a ration with her`,'',`She weeps, and presses a blessing into your hands. You walk lighter for it.`,`-ration st:bless5 xp+s`,'','', 'item:ration'],
  [`Carry her bundle for a mile`,'CON 10 endure',`Her stories make the miles fly. At the end she tucks a small keepsake into your hand.`,`xp+m loot:trink`,`The bundle is heavier than it looks; you arrive limping.`,`hp-s`],
  [`Ask her about the road ahead`,'',`"A spring beyond the next bend," she says. "Clean water, and a blessing in it." You find it, and drink deep.`,`hp+m xp+s`],
  [`Wish her well and walk on`,'',`She nods, unoffended. "The road keeps its own count."`,``]]],
 ['any',`A Travelling Minstrel`,'🎻',`A minstrel in patched motley plays a lute on a tree stump, singing a song about a hero who is, suspiciously, nothing like any hero you have met.`,[
  [`Join in with a harmony`,'CHA 11 perform',`You and the minstrel make a glorious racket; passers-by toss coins and, afterwards, he teaches you a verse that raises your spirits.`,`xp+m mp+m gold+s st:bless3`,`You come in on the wrong verse. The minstrel is polite about it. The crowd is not.`,`xp+s`],
  [`Ask for news of the Ashen Queen`,'',`"They say she weeps," he whispers, "and that her tears burn." He will say no more, but you feel your fear steady into something harder.`,`xp+s flag:heard_weeping`],
  [`Challenge him to a song-duel`,'CHA 13 perform',`You win the crowd, and the minstrel bows with a grin, handing over a curious gift.`,`xp+m loot:gimmick`,`He out-sings you hands down, and graciously passes you a drink to dull the sting.`,`xp+s`,'skill:music'],
  [`Toss a coin and move on`,'',`"A coin for the road," he sings, "and a cheerful tune for the traveller!"`,`gold-s xp+s`]]],
 ['wild',`A Weathered Hunter`,'🏹',`A hunter in a fox-fur cap lowers her bow with obvious relief. "Thought you were something with fangs," she says. "Seen anything like that on this road?"`,[
  [`Tell her honestly what you've seen`,'',`She nods, grateful, and draws a quick map in the dirt: a safe way through, and a spring. She hands you a few arrows too.`,`xp+m hp+s`],
  [`Trade stories over a shared fire`,'',`The talk is long and the venison is good; she shares a hunter's trick or two.`,`rest! xp+s`,'','', 'item:ration'],
  [`Ask her to show you a hunter's craft`,'WIS 11 survive',`You spend the afternoon learning to read tracks and wind. It sticks.`,`xp+m skill:survival`,`You mostly learn that you are loud.`,`xp+s`],
  [`Part ways politely`,'',`She raises two fingers to her cap and is gone into the trees.`,``]]],
 ['any',`A Wandering Scholar`,'📚',`A bespectacled scholar sits on a milestone surrounded by scrolls, looking quite lost. "Excuse me — is this the road to Aurelon? Or was Aurelon, rather? Forgive me — I forget which tense we're in."`,[
  [`Gently tell him what Aurelon has become`,'',`He takes it with quiet dignity, and gives you a scrap of what he knows: the Ashen Queen's wards, he says, were woven of grief and cannot bear true sunlight.`,`xp+m flag:knows_ward`],
  [`Offer to help sort his scrolls`,'INT 11 lore',`Among the scrolls you spot a half-legible page. He presses it into your hands: "Take it, I've no use for lost things."`,`xp+m loot:scroll`,`You mix up the order of three scrolls. He weeps quietly.`,`xp+s`],
  [`Ask about magic`,'',`"Magic is just grammar," he says, and lectures delightfully for twenty minutes. You feel brighter.`,`xp+s mp+m`,'','','' ],
  [`Wish him luck`,'',`"Luck is just probability," he mutters, hunting for his spectacles — which are on his head.`,``]]],
 ['wild',`A Solitary Hermit`,'🧙',`A hermit with a beard to his belt sits on a rock outside a lopsided hut, apparently halfway through an argument with a squirrel.`,[
  [`Ask him to teach you something`,'WIS 12 lore',`He studies you a long moment, then shows you a strange knot of breath and thought. A little power wakes in your chest.`,`xp+m skill:detect`,`He tries; you don't follow. "Another time," he mutters, shuffling off.`,`xp+s`],
  [`Share a meal`,'',`The squirrel gets the best of it, but the hermit leaves a small brown jar on the step as you leave. Medicinal, probably.`,`-ration hp+m loot:cons`,'','','item:ration'],
  [`Ask for directions`,'',`"North, always north," he says, and sniffs. "She's north." He gives you a handful of dried herbs.`,`xp+s hp+s`],
  [`Leave quietly`,'',`The hermit and the squirrel resume their argument.`,``]]],
 ['any',`A Knight-Errant`,'🏇',`A knight in mud-spattered armour reins in his horse, visor up. "Halt, traveller. Honour requires I ask: do you, or do you not, serve the Ashen Queen?"`,[
  [`Declare plainly that you oppose her`,'',`"Then we are brothers-in-arms," he says, and gives you a hearty hand-clasp and a flask of strong spirits.`,`xp+m hp+m`],
  [`Offer to test your mettle in a friendly bout`,'STR 12 fight',`Blades clatter, the knight roars with laughter and bows. "Well fought!" He presses a token into your palm.`,`xp+l loot:gear`,`He knocks you flat — gently. "Practice, friend. Practice."`,`hp-s xp+s`],
  [`Ask him for his advice`,'',`"Never fight an enemy who can choose the ground," he says. "And never trust a calm sky near a mountain."`,`xp+m st:bless3`],
  [`Salute and pass by`,'',`He salutes in return, solemn as a church.`,``]]],
 ['any',`A Lost Child`,'🧒',`A small child with a runny nose stands in the road, clutching a wooden horse. "I can't find Mama," she says, and starts to cry.`,[
  [`Kneel and comfort her`,'',`You find her mother two bends on, sobbing with relief. She presses a little pouch of coins and a warm loaf on you.`,`xp+m gold+s hp+s`],
  [`Sing her a song to calm her`,'CHA 10 perform',`Her sobs ease into hiccups, then into giggles. She leads you by the hand to her family's wagon, and they feed you well.`,`xp+m hp+m mp+s`,`You can't think of a single song. She cries harder. You fall back on honest apology.`,`xp+s`],
  [`Use a charm to find her family`,'',`A tiny thread of warmth leads you true.`,`xp+m gold+s`,'','','skill:detect',1],
  [`Hand her to the first patrol you can find`,'',`It takes a while, but a patrol soon takes her in. Not glorious, but right.`,`xp+s`]]],
 ['any',`A Ragged Beggar`,'🧎',`A beggar sits cross-legged in the dust, a wooden bowl before him. His eyes are strangely, unnervingly clear.`,[
  [`Drop a few coins in his bowl`,'',`He studies you, then smiles. "The kind are remembered." A weight lifts from your shoulders, and a blessing settles on you.`,`gold-s st:bless6 xp+m`,'','','gold:5'],
  [`Share a ration`,'',`He eats slowly, with great dignity. "A favour, then." He whispers a word, and warmth floods through you.`,`-ration hp+l xp+s`,'','','item:ration'],
  [`Ask what he sees`,'WIS 12 lore',`He tells you three truths about yourself, and one about the road ahead, and falls silent.`,`xp+m flag:heard_beggar`,`He laughs, and says nothing you can use.`,`xp+s`],
  [`Walk past`,'',`He watches you go. His smile is, perhaps, a little sad.`,`flag:callous`]]],
 ['any',`A Refugee Family`,'👨‍👩‍👧',`A family trudges down the road, wagon laden with all they could save. The father's face is grey with exhaustion. "Ash is spreading in the north," he says. "We're going anywhere that is not there."`,[
  [`Give them what food you can spare`,'',`The mother cries. The father shakes your hand with both of his. "Gods keep you." Something in the afternoon seems warmer.`,`-ration st:bless5 xp+m flag:kind`,'','','item:ration'],
  [`Help fix their broken wheel`,'STR 11 craft',`A few good blows and a snug pin, and the wheel rolls again. They insist you take a jar of honey and a hug.`,`xp+m hp+m`,`You bend the axle. They are very kind about it.`,`xp+s`],
  [`Ask what they have seen of the Queen's soldiers`,'',`"Cinder-men," he says. "Armour burned onto their bones. They do not eat, or speak. They only march."`,`xp+s flag:knows_cinder`],
  [`Wish them well`,'',`The child waves from the back of the wagon until the bend hides them.`,``]]],
 ['any',`A Fortune-Teller's Cart`,'🔮',`A painted cart with a faded sign: "MADAME OPHELIA — THE FUTURE, THE PAST, AND SOMETIMES LUNCH." A woman in many scarves waves you over.`,[
  [`Have your fortune read (10 gold)`,'',`She turns three cards, frowns at the third, and says only: "Beware a gift offered in the dark." The warning lingers.`,`gold-s xp+m flag:fortune_warned`,'','','gold:10'],
  [`Ask for a palm reading`,'WIS 11 lore',`Her eyes widen. "A lantern... a locked door... a girl's locket." She will not say more, but the words burn into your memory.`,`xp+m flag:heard_locket`,`She squints, and gives you a vague, pleasant fortune.`,`xp+s`],
  [`Haggle with her`,'CHA 12 deceive',`She cackles and tosses you a trinket as a bribe to leave.`,`loot:gimmick xp+s`,`She sees right through you. "Cheapskate!" she hisses.`,`xp+s`],
  [`Decline politely`,'',`"Fate'll find you anyway," she shrugs.`,``]]],
 ['any',`A Roadside Cook`,'🍲',`A broad-armed woman stirs a vast cauldron at a crossroads. The smell hits you like a hand: onions, thyme, and something that might once have been a goat.`,[
  [`Pay for a bowl (a few coins)`,'',`The stew is magnificent. You feel strong enough to wrestle a bear.`,`gold-s hp+l mp+s`,'','','gold:6'],
  [`Offer to help chop in exchange for a bowl`,'DEX 10 craft',`Your knife-work earns a nod, and a double portion.`,`hp+l xp+s`,`You chop a finger's worth of onion and a fingernail's worth of you. She gives you a bandage and a bowl anyway.`,`hp+s`],
  [`Share news in exchange for a meal`,'CHA 10 persuade',`Your tales delight the cook; the stew warms you through.`,`hp+m xp+s`,`She is unimpressed by gossip. You get a thin gruel.`,`hp+s`],
  [`Decline politely`,'',`"Your loss," she says, and stirs on.`,``]]],
 ['town,wild',`A Hard-Eyed Tax Collector`,'📜',`A man in grey livery plants a staff in the road. "Crown tax," he says, tonelessly. "Everyone pays. No exceptions. Even the Queen's enemies pay."`,[
  [`Argue that the crown is in ashes`,'CHA 12 persuade',`He blinks, and slowly sits down on the staff. "Well, when you put it like that... can't argue with a ruin." He waves you on.`,`xp+m`,`"The law is the law," he says, and takes the toll.`,`gold-s`],
  [`Pay the tax`,'',`He stamps a receipt, gloomily. "Thank you. Nobody ever says that."`,`gold-s xp+s`,'','','gold:6'],
  [`Slip past in the crowd`,'DEX 12 sneak',`He doesn't even blink.`,`xp+m`,`A guard grabs your collar. The tax doubles.`,`gold-s hp-s`],
  [`Back away`,'',`You reroute. He's still calling after you about forms.`,``]]],
 ['any',`A One-Armed Old Soldier`,'🪖',`A grizzled old soldier sits at a milestone, whittling. He gives you a long look. "You've the look of someone heading north," he says.`,[
  [`Ask him about the Ashen Wars`,'',`"We lost," he says. "We lost because she wasn't a monster. She was a mother. You cannot fight that with swords." He won't elaborate.`,`xp+m flag:heard_mother`],
  [`Ask for tips on surviving the road`,'',`"Fresh feet. Dry socks. Never sleep with your back to a tree you don't trust." He hands you a small whetstone, wrapped in cloth.`,`xp+m +whetstone`],
  [`Share a drink`,'',`The old soldier laughs, deep and rusty, and tells three stories, two of which are even true.`,`rest xp+s`,'','','item:mana_tonic'],
  [`Salute and leave`,'',`He salutes back, slowly, with his only hand.`,``]]],
 ['any',`Merchants With a Broken Wagon`,'🛞',`A wagon sits with one wheel spun off, merchants arguing about whose fault it is. "Oi! You! Strong back?"`,[
  [`Help lift the wagon`,'STR 12 fight',`With a heave, the wheel is back on. The merchants shower you with gratitude and a few spare goods.`,`xp+m loot gold+s`,`You wrench your shoulder. They are very, very apologetic.`,`hp-s xp+s`],
  [`Mend the wheel with craft`,'INT 11 craft',`A clever shim and a splice, and it's good as new. They pay you in kind.`,`xp+m loot:cons`,`Your repair holds for ten yards, then explodes. Everyone is fine. Mostly.`,`xp+s`,'skill:smithing'],
  [`Offer to find a farrier`,'',`It takes an hour, but you find one. They are grateful, in a small, careful way.`,`xp+s gold+s`],
  [`Apologise and move on`,'',`The argument continues behind you, getting louder.`,``]]] ]);

G.miniArch('shrine', [
 ['wild',`Shrine of the Green Mother`,'🌿',`A moss-covered stone shrine, strangely warm, ringed with wildflowers that bloom out of season. A spring bubbles at its foot.`,[
  [`Kneel and drink from the spring`,'',`Cool, sweet water. Every ache dissolves; something like a gentle hand rests on your head.`,`hp+l cure xp+s`],
  [`Leave an offering of gold`,'',`The flowers lean toward you. A soft voice, like leaves in wind, says "Walk gently." You feel blessed.`,`gold-s st:bless8 xp+m`,'','','gold:8'],
  [`Meditate and listen`,'WIS 12 spirit',`You hear it, then — a thousand small voices, whispering of where the road is kind and where it is not. You rise full of insight.`,`xp+l mp+m`,`Nothing but birdsong. Pleasant, but nothing more.`,`xp+s`],
  [`Move on respectfully`,'',`The flowers sway you off.`,``]]],
 ['any',`The Sun-Altar`,'☀️',`A weathered altar of golden stone stands in a clearing, a sunburst carved on its face. Whatever god it honoured has long since moved on — or has not.`,[
  [`Pray for protection`,'WIS 11 holy',`Warmth floods through you; light gathers on your brow. The Sun-God is, evidently, still listening.`,`st:bless8 hp+m xp+m`,`Nothing, except a flicker of shadow. You feel foolish.`,`xp+s`],
  [`Sacrifice a vial of Holy Water`,'',`The altar blazes, and the light settles into your bones.`,`-holy_water hp+l mp+m xp+m`,'','','item:holy_water'],
  [`Study the carvings`,'INT 12 lore',`The carvings describe a rite for banishing shadow. You commit it to memory.`,`xp+m skill:bless`,`The carvings are too weathered to read.`,`xp+s`],
  [`Leave it be`,'',`Sunlight on warm stone. You carry on.`,``]]],
 ['any',`The Moon-Well`,'🌙',`A silvery well, its water glowing faintly under no moon at all. Runes of old magic ring its rim.`,[
  [`Drink deeply`,'WIS 11 lore',`A strange cold clarity rushes through your mind. Magic wells back into you in a silvery tide.`,`mp+l xp+m`,`The water is bitter and your head spins.`,`hp-s mp+s`],
  [`Lean over and look into it`,'INT 12 lore',`The water shows you a tower of black glass wreathed in ember-light. A door, hidden in its stair. You come away knowing the way.`,`xp+l flag:knows_tower`,`You see only your own reflection, looking worried.`,`xp+s`],
  [`Fill a flask`,'',`You bottle a draught of moonlight. It will serve you later.`,`+mana_tonic xp+s`],
  [`Back away`,'',`The glow dims slowly.`,``]]],
 ['any',`The Forgotten Smith's Shrine`,'🔨',`A little forge-shrine, long cold, an anvil at its heart. A hammer hangs on a hook, black with age, still sharp.`,[
  [`Take up the hammer and strike the anvil`,'STR 12 craft',`Sparks leap. The anvil sings, and something is forged in the singing.`,`xp+m loot:gear`,`The hammer slips, and rebounds painfully.`,`hp-s`],
  [`Leave an offering`,'',`A coin on the anvil. A faint heat rises, and the nearest tool gleams brighter.`,`gold-s xp+m +whetstone`,'','','gold:6'],
  [`Study the shrine`,'INT 11 craft',`The old smith left notes in his shrine; you pick up a trick or two.`,`xp+m skill:smithing`,`The notes are too faded.`,`xp+s`],
  [`Leave in respect`,'',`The cold forge ticks as you pass.`,``]]],
 ['wild',`The Cairn of the Fallen`,'🪦',`A tall cairn of stones stands at the road's turn, each placed by a passing traveller to mark someone lost. Wild flowers grow between the stones.`,[
  [`Add a stone and a word`,'',`A stillness settles around you. You feel, briefly, accompanied.`,`xp+m st:bless4 hp+s`],
  [`Speak to the spirits`,'WIS 12 spirit',`A faint whisper: "Beware the third bridge." You file it away; a little warmth lingers where it spoke.`,`xp+l flag:heard_spirits`,`Silence. Perhaps they are resting.`,`xp+s`,'skill:spiritspeak'],
  [`Search the stones`,'DEX 11 lock',`Among the lower stones you find a small cache left by someone, long ago, for someone else.`,`gold+m loot`,`You trip, and a stone slips and bruises your shin.`,`hp-s`],
  [`Walk on`,'',`The flowers nod.`,``]]],
 ['any',`A Crooked Idol`,'🗿',`A crooked, grinning stone idol squats beside the road, painted in garish colours, bearing a bowl full of old coins and one very bright ruby eye.`,[
  [`Take the ruby eye`,'DEX 13 steal',`You pry it free and the idol sags, sighing — a very valuable ruby, and no curse at all.`,`gold+l xp+m`,`The idol's grin widens. A chill crawls into your bones — you have been cursed.`,`st:curse4 hp-s`],
  [`Pay respect to it`,'',`The idol's grin does not move, but the coins in the bowl chime, and you feel something has chosen to like you.`,`gold-s xp+m st:bless5`,'','','gold:5'],
  [`Smash it`,'STR 12 fight',`The idol cracks. Something tiny and furious scampers out of it and away. A warmth, a lightness. You have been freed of something you didn't know you carried.`,`cure xp+m`,`It doesn't break; your hand does, a little.`,`hp-s`],
  [`Leave it`,'',`Its grin follows you for a long mile.`,``]]] ]);

G.miniArch('fey', [
 ['wild,forest,swamp',`A Pixie's Bargain`,'🧚',`A pixie the size of your thumb hovers at eye level, wings blurring. "A deal!" she squeaks. "I'll give you something wonderful. You give me... a trifle."`,[
  [`Ask what the trifle is`,'WIS 12 lore',`She wants a single memory: the smell of your childhood home. You hand it over, and your heart aches, but in exchange she gives you a little gift of glimmering power.`,`mp+l skill:shadowmeld xp+m`,`She dissolves, giggling, with a lock of your hair. Nothing seems different. That worries you.`,`xp+s`],
  [`Accept without asking`,'',`She takes something. You can't remember what. You do feel lighter, and oddly lucky.`,`st:bless5 loot:gimmick xp+s`],
  [`Offer her a ration instead`,'',`She is delighted, and appalled, and takes it. "A fair swap!" She kisses your nose, and you are left tingling with strange power.`,`-ration mp+m xp+m`,'','','item:ration'],
  [`Politely decline`,'',`"Boring," she sniffs, and flits away, but not before sprinkling you with something that tickles.`,`xp+s`]]],
 ['swamp,forest',`The Hag at the Fork`,'🧙‍♀️',`An old woman stirs a pot at the crossroads, humming. "You look hungry," she says, and smiles with too many teeth. "Come. Sit. Share."`,[
  [`Eat what she offers`,'CON 12 endure',`The stew is vile but strangely nourishing. She cackles in approval and gives you a charm for the road.`,`hp+l xp+m loot:trink`,`You feel strange. Colours are loud. You pass out; when you wake, the hag is gone and your purse is lighter.`,`hp-s gold-s st:curse3`],
  [`Trade her a riddle`,'INT 12 lore',`She loves riddles. You stump her; in a fury of delight, she gives you a glass bottle of something shimmering.`,`xp+l +greater_mana`,`She solves yours in half a breath. "Poor little thing," she says, and pinches your cheek hard.`,`hp-s`],
  [`Decline, firmly`,'WIS 11 resist',`She sighs, but her eyes flash. "Another day." You walk on, and she lets you go.`,`xp+m`,`You do decline. But a curse follows you out of earshot.`,`st:curse3`],
  [`Offer her a curio`,'',`She is fascinated. She takes the thing, wrinkles her nose, and presses a blessed stone into your palm.`,`gimmick loot:trink xp+s`,'','','any:gimmick'],
  [`Excuse yourself politely and leave`,'',`"Manners," she cackles. "Rare." She waves her ladle, and lets you go without so much as a curse.`,`xp+s`]]],
 ['swamp,cave,wild',`The Wisp's Lure`,'🕯️',`A cold blue light bobs ahead, just off the path. It flickers invitingly. You swear you can hear someone call your name from the dark.`,[
  [`Follow it, carefully`,'WIS 13 resist',`You follow at a distance, the lure leading you to a small, glittering cache — the work of earlier fools it had led to the same place.`,`xp+m loot gold+m`,`It leads you into a bog. You scrabble out, mud-soaked and cold.`,`hp-m`],
  [`Dim your light and walk past`,'',`You resist, and the light gutters, sulking.`,`xp+s`],
  [`Banish it with fire or light`,'',`A flash of flame, and the wisp pops like a soap bubble. A little glimmer falls to the ground.`,`xp+m mp+s`,'','','skill:firebolt',3],
  [`Throw something shiny to distract it`,'',`The wisp chases the bauble into the dark. Wise, in its way.`,`xp+s -torch`,'','','item:torch']]],
 ['any',`The Hollow Hill's Door`,'🚪',`A door stands in the side of a green hill, where no door should be. It is slightly ajar. Music drifts out — dancing music — and warm light.`,[
  [`Step inside for one dance`,'CHA 12 perform',`One dance, you swear. You step out an hour later, ten minutes older, with a fey-gift in your hand and a lightness in your step.`,`xp+l loot:trink hp+m`,`The dance never ends. Hours pass. You stagger out at dawn, drained, and unable to remember the tune.`,`hp-m mp-s`],
  [`Peek through, from a distance`,'DEX 11 sneak',`You see feasting figures, the fey queen's court. Nothing seems to notice you. You tiptoe back, wiser.`,`xp+m`,`A pale face turns toward you, and smiles. Then everything stops.`,`st:curse3`],
  [`Knock politely, and offer a gift`,'',`The door opens; a gloved hand takes your gift. In return, a bottle is placed in your palm. The door closes.`,`gimmick loot:cons xp+m`,'','','any:gimmick'],
  [`Close it and walk on`,'',`You pull the door shut. A small voice behind it: "Spoilsport."`,``]]],
 ['any',`A Fox With Human Eyes`,'🦊',`A russet fox sits on a stump, watching you with eyes that are not a fox's. "Walker," it says gravely. "I know the way. I'll show you — if you'll tell me a secret first."`,[
  [`Tell it a true secret`,'',`You whisper something small and honest. The fox sighs, satisfied. It leads you along a hidden path, past danger, to a clearing of calm.`,`xp+m hp+m rest`],
  [`Tell it a lie`,'CHA 12 deceive',`The fox squints, laughs — a bark — and leads you anyway. "Well told."`,`xp+m`,`The fox's eyes narrow. "Liar," it says, and the path ahead goes tangled and wrong.`,`hp-s st:curse2`],
  [`Offer food instead`,'',`The fox accepts the ration with some ceremony and leads you out along a secret way.`,`-ration xp+m`,'','','item:ration'],
  [`Refuse politely`,'',`"Another time," the fox says, unoffended.`,``]]],
 ['swamp,cave',`The Will-o'-the-Well`,'⛲',`A narrow well in the rock, the water glinting with a phosphor-green glow. A voice from inside sings softly, hypnotically, about a long, quiet sleep.`,[
  [`Listen to the song`,'WIS 13 resist',`You catch the tune, and it slips out of your head as soon as you resist it. A clean, strange, singing peace remains.`,`mp+l xp+m`,`You lean closer and closer... and wake with your face half in the water, coughing.`,`hp-m`],
  [`Drop a coin in`,'',`A splash. "Thank you," says the voice, and a small silver flask bobs to the surface.`,`gold-s +mana_tonic xp+s`,'','','gold:4'],
  [`Block your ears and move on`,'',`The song fades behind you.`,``]]] ]);

G.miniArch('omen', [
 ['any',`A Dream of Ember and Crown`,'💭',`You dream, that night, of a woman in a hall of black glass. She wears a crown of dying embers, and she is weeping. She turns, and looks directly at you.`,[
  [`Speak to her in the dream`,'WIS 12 resist',`"Why do you come?" she asks. You answer honestly. She is silent a long time. "Then you will see," she says, and is gone. You wake with a strange, sorrowful resolve.`,`xp+l flag:dreamed_queen st:bless4`,`She does not answer, and the dream collapses into a roaring fire. You wake sweating.`,`hp-s xp+s`],
  [`Study the hall around her`,'INT 12 lore',`The walls are mirrors, and the throne has a crystal set in its back. You carry the image into the waking world: a crystal, a hollow, a heart.`,`xp+m flag:knows_crystal`,`The details blur at once.`,`xp+s`],
  [`Wake yourself up`,'',`You wrench yourself awake. Dawn is grey and ordinary and wonderful.`,`xp+s`]]],
 ['any',`A Falling Star`,'🌠',`A star falls out of the dusk, trailing silver fire, and lands somewhere over the next ridge with a faint, bell-like chime.`,[
  [`Run to find where it fell`,'CON 11 endure',`In a shallow crater, still warm, lies a shard of cold star-metal. Pure luck, you think, and take it.`,`xp+l loot:trink`,`You run until you are sick. There is nothing but a scorched patch of grass and a smell of rain.`,`hp-s`],
  [`Make a wish`,'',`You wish, quietly. A warm wind gusts through your hair, and, for a while, everything feels possible.`,`st:bless6 xp+m`],
  [`Note the direction and move on`,'',`A good omen, or a bad one. Hard to tell yet.`,`xp+s`]]],
 ['any',`A Two-Headed Raven`,'🐦‍⬛',`A raven with two heads perches on a gibbet, both heads croaking at once, saying different things. One of them is telling you the truth.`,[
  [`Listen closely`,'WIS 12 lore',`You sift the two voices apart. "The Ward fears the dawn," one says. The other: "Ask the Lantern-man."`,`xp+l flag:knows_ward`,`You can't sort them. The heads begin arguing; you leave.`,`xp+s`],
  [`Offer it a crust`,'',`Both heads fight over the crust. A feather drifts down. You tuck it away.`,`-ration +raven_feather xp+s`,'','','item:ration'],
  [`Shoo it away`,'',`It flaps off, croaking a double insult.`,`xp+s`]]],
 ['any',`A Message in the Ash`,'✉️',`Someone has written in the ash of a dead campfire. The letters are unsteady but readable: "SHE IS NOT WHAT THEY SAY. FIND THE LOCKET."`,[
  [`Copy the message and think on it`,'',`The words burn into you. You do not yet know what they mean, but you will not forget them.`,`xp+m flag:heard_locket`],
  [`Search around for the writer`,'WIS 12 survive',`Behind a boulder, you find a tiny camp, long cold, and a wooden carving of a girl. You keep it.`,`xp+m loot:trink flag:heard_locket`,`Whoever it was has long gone. The trail is cold.`,`xp+s`],
  [`Scuff it out and move on`,'',`You leave the ash as you found it, unwritten.`,``]]],
 ['any',`The Ghost of a Child`,'👻',`A small ghost sits on a stile, swinging her legs, tracing patterns in the air. "I'm waiting for Mama," she says. "She said she'd come back. She promised."`,[
  [`Sit with her a while`,'',`You sit. She chatters gently about a kitchen, a cat, a golden crown she once saw. Your heart aches. "Thank you," she says, and fades.`,`xp+m hp+m flag:kind`],
  [`Speak to her gently`,'WIS 11 spirit',`"Her name was Elaris," she whispers. "She had a little locket. It's with her still, in the grey place, by the sunken chapel."`,`xp+l flag:heard_locket`,`She hides behind her hands and is gone.`,`xp+s`,'skill:spiritspeak',2],
  [`Walk away quickly`,'',`The ghost's small voice follows for a few steps: "Mama?"`,`flag:callous`]]],
 ['any',`A Prophecy Written in Frost`,'❄️',`Overnight, frost has arranged itself across a window-pane (or a stone, or a shield) into an unmistakable sentence: "THE QUEEN WAS ONCE A HEALER."`,[
  [`Study it carefully`,'INT 11 lore',`The frost holds long enough to learn. Healer. Of Aurelon. Her hands were once kind. It changes something in you.`,`xp+l flag:heard_mother`,`The sun melts it before you can parse any more.`,`xp+s`],
  [`Wipe it away, uneasy`,'',`Cold fingers. You are glad when you have moved on.`,`xp+s`],
  [`Show it to the company`,'',`The company discusses it in low voices. Aldric pales. Ysolde nods, slowly. Something is understood.`,`xp+m bond:aldric`,'','','ally:aldric']]],
 ['any',`A Mirror Beside the Road`,'🪞',`Someone has propped a tall, tarnished mirror against a tree, facing the road. As you pass, your reflection waits a moment too long to follow.`,[
  [`Touch the glass`,'WIS 13 resist',`The reflection nods, and a ripple passes from the glass into your palm — a small, cold strength.`,`xp+m +silver_dust mp+m`,`The reflection smiles, wrongly. A freezing shiver runs up your arm.`,`hp-s st:curse3`],
  [`Peer into it with magic`,'',`Behind your reflection stands a figure of cinders, watching. It points north, and is gone. Whatever it is, it is waiting.`,`xp+m flag:knows_tower`,'','','skill:detect',1],
  [`Cover it with a cloak`,'',`The unease subsides. You move on.`,`xp+s`]]],
 ['any',`A Prophet in Rags`,'🧔',`A thin man in sackcloth stands on a barrel shouting at passers-by. "THE ASH COMES! BUT SO DOES THE DAWN! WHO WILL CARRY THE LIGHT?" He stops, and looks at you. "You."`,[
  [`Ask what he means`,'WIS 11 lore',`He whispers: "The Ashen Ward breaks only for sunlight made solid. Or for one who can unpick it." Then he is shouting about eels again.`,`xp+l flag:knows_ward`,`"THE EELS!" he shouts. "THE EELS KNOW!" You back away.`,`xp+s`],
  [`Give him a coin`,'',`"Bless you," he says, and taps your forehead. A warm tingle rolls down your spine.`,`gold-s st:bless6 xp+m`,'','','gold:3'],
  [`Ignore him`,'',`He goes on shouting at the next passer-by.`,``]]] ]);

G.miniArch('ruin', [
 ['wild,ruins',`A Toppled Statue`,'🗽',`A colossal marble statue lies on its side in the weeds. One hand clutches a scroll-case; the lid has cracked open.`,[
  [`Climb up and take the case`,'DEX 11 climb',`You scramble up the cold marble and pry out a scroll, brittle but legible.`,`xp+m loot:scroll`,`You slip, and the marble is hard.`,`hp-s`],
  [`Read the pedestal's inscription`,'INT 11 lore',`It is a record of a king who dined on sunlight and drank the moon. Stranger still, a rune you recognise glows briefly.`,`xp+m +silver_dust`,`The inscription is in a script long dead.`,`xp+s`],
  [`Leave it be`,'',`The statue gazes at the sky, eternally unimpressed.`,``]]],
 ['wild,ruins,cave',`A Sealed Crypt`,'⚰️',`A crypt door of black stone, carved with warding sigils. Something inside scratches faintly, as though bored.`,[
  [`Force the door`,'STR 13 fight',`With a grinding heave, the door yields. Inside: a long-dead knight's armour, still gleaming, and a few cold jewels.`,`xp+l loot:gear gold+m`,`The door doesn't move, and something inside laughs, softly.`,`hp-s`],
  [`Pick the lock`,'DEX 13 lock',`The mechanism is old but fine. Inside: a sleeping skeleton, undisturbed, and its offerings.`,`xp+l loot gold+m`,`A needle snaps. A mild poison.`,`hp-s st:poison3`],
  [`Dispel the ward and enter`,'',`The sigils slide from the stone like water. Inside: a calm, ancient quiet, and the gifts of the dead.`,`xp+l loot gold+m`,'','','skill:dispel',5],
  [`Leave the dead their rest`,'',`You nod to the door and walk on.`,`xp+s`]]],
 ['wild,ruins',`A Tumbled Watchtower`,'🗼',`A stone watchtower has collapsed in on itself, its stair half-open to the sky. Something glints near the top.`,[
  [`Climb the broken stair`,'DEX 12 climb',`Up and up, hand over hand — a soldier's last stash, a few coins and a signal flare.`,`xp+m gold+m +smoke_pellet`,`Stones shift under your hand, and you fall.`,`hp-m`],
  [`Search the base`,'WIS 11 survive',`In the rubble, a half-buried pack, a soldier's last meal and a spare bandage roll.`,`xp+s +bandages +ration`,`You find only rubble and dust.`,`xp+s`],
  [`Leave it`,'',`The tower guards its secrets.`,``]]],
 ['wild,ruins',`An Overgrown Library`,'📚',`Half a library survives beneath a collapsed roof: shelves slumped like drunks, books swollen to bricks. A few seem... intact.`,[
  [`Search for a readable book`,'INT 12 lore',`You find a slim volume, water-spotted but legible: a treatise of old magic.`,`xp+l loot:scroll`,`Everything crumbles to pulp in your hands.`,`xp+s`],
  [`Read the Great Atlas`,'INT 13 lore',`A map of the Ashen Marches in a scholar's hand: a hidden gate in the north wall and a stair under the ruined cathedral. You trace it into your memory.`,`xp+l flag:knows_tower`,`The map is unreadable.`,`xp+s`],
  [`Carefully remove a few leaves for later`,'DEX 11 steal',`A clean, quiet take. Reading them later, you pick up a useful insight.`,`xp+m loot:scroll`,`The page tears, and a cloud of spores puffs out.`,`hp-s`],
  [`Leave it alone`,'',`Dust drifts down in the light.`,``]]],
 ['wild,ruins',`A Rune-Carved Obelisk`,'🗿',`A tall obelisk, cut with runes that crawl subtly if you look at them sideways. A faint hum rises from its base.`,[
  [`Trace the runes`,'INT 13 lore',`The runes shift under your fingers, then settle into a single sentence: "THE NAME UNBINDS THE QUEEN." You do not yet know what it means.`,`xp+l flag:knows_name`,`The runes only itch.`,`xp+s`],
  [`Touch the base`,'WIS 12 resist',`A pulse of energy runs through you, bright and harmless. You feel renewed.`,`xp+m mp+l hp+s`,`The pulse is not harmless.`,`hp-m`],
  [`Dispel the hum`,'',`The hum dies. The obelisk, freed, drops a small crystal at your feet.`,`xp+m +mana_tonic loot:trink`,'','','skill:dispel',5],
  [`Leave it`,'',`The hum follows you for a long time.`,``]]],
 ['wild,ruins',`An Abandoned Camp`,'⛺',`A camp, hastily abandoned — tent half-fallen, a fire gone to ash, a pot still on its tripod. Everything looks left in a hurry.`,[
  [`Search the tents`,'WIS 11 survive',`A few useful supplies, a rolled blanket, a purse.`,`xp+m loot:cons gold+s`,`A concealed spike-trap snaps shut on your ankle.`,`hp-m`],
  [`Study the ground for tracks`,'WIS 12 survive',`Wolf-prints, boot-prints, a dragged body... you piece together what happened and take the safe route.`,`xp+m`,`The tracks make no sense to you.`,`xp+s`],
  [`Move on without touching anything`,'',`You leave the camp as you found it.`,``]]],
 ['wild,ruins',`A Battlefield Barrow`,'⛰️',`A low earthen mound, ringed with rusted weapons stuck blade-first in the ground, where some great battle ended long ago.`,[
  [`Take a weapon from the ring`,'STR 11 fight',`You wrench one free. The blade is old, but good, and strangely light.`,`xp+m loot:gear`,`The blade crumbles in your hand, and a chill gust catches you.`,`st:curse2`],
  [`Pay your respects`,'',`A silence, a respect, and something in the wind that sounds like gratitude.`,`xp+m st:bless4`],
  [`Dig into the barrow`,'CON 12 endure',`Hours of hard digging. Beneath: a skeletal hand clutching a ring, and some very old coins.`,`xp+m loot:trink gold+m`,`The shovelling exhausts you and turns up only dust.`,`hp-s`],
  [`Leave quietly`,'',`The wind hums through the rusting swords.`,``]]] ]);

G.miniArch('rescue', [
 ['wild',`A Man in a Pit`,'🕳️',`A man shouts from the bottom of a poacher's pit, ten feet down, clutching a broken ankle. "Please! Anyone!"`,[
  [`Lower a rope and haul him up`,'STR 11 climb',`With a heave, he is out. He weeps, thanks you, and gives you everything in his pockets.`,`xp+m gold+m flag:kind`,`The rope slips. He falls again, but cheerfully forgives you after the second try.`,`hp-s xp+s`,'item:rope'],
  [`Climb down and carry him`,'STR 12 climb',`A grim scramble, but he is out. He insists on a payment you refuse to take, and in the end he presses a keepsake on you.`,`xp+m loot:trink flag:kind`,`You slip and fall in beside him. It takes a very long time to get out.`,`hp-m`],
  [`Heal his ankle`,'',`Light and warmth; he stands, delighted, and thrusts a gift of gratitude into your hand.`,`xp+l loot:cons flag:kind`,'','','skill:mending',3],
  [`Shout for help and move on`,'',`You call to a distant farmhand and go. It is something.`,`xp+s`]]],
 ['any',`A Merchant Under a Cart`,'🛒',`A merchant is pinned beneath his overturned cart, his mule bawling in distress. "Oh gods, oh gods, my wares!"`,[
  [`Heave the cart off`,'STR 12 fight',`Muscle and a bellow, and he is free. He babbles gratitude and presses a share of the wares on you.`,`xp+m loot gold+s flag:kind`,`The cart rolls back. He yelps. Eventually, it works.`,`hp-s xp+s`],
  [`Tell him to hold on and fetch help`,'',`A lot of shouting, and some farmhands. He is saved, and grateful in a smaller way.`,`xp+m gold+s`],
  [`Use magic to lift it`,'',`A flicker of force; the cart rises, and the merchant scrambles out. His thanks are fervent.`,`xp+l loot flag:kind`,'','','skill:ward',2],
  [`Rob him while he's pinned`,'DEX 11 steal',`You take his coin-purse. The man's furious curses fade behind you. A rotten thing to do, but you're richer.`,`gold+l flag:callous`,`He sees you. Villagers see you. They are very unforgiving.`,`hp-m gold-s`]]],
 ['any',`A Child Down the Well`,'🪣',`A child's voice echoes up from an old well: "Hello? HELLO? I dropped my doll and then I fell in after it!"`,[
  [`Lower a rope and haul her up`,'STR 11 climb',`She giggles all the way up. Her father, arriving in time to see, weeps and shakes your hand. A pie follows.`,`xp+m hp+m flag:kind`,`The rope burns your hands, but she's safe.`,`hp-s xp+s`,'item:rope'],
  [`Climb down yourself`,'DEX 11 climb',`Wet, cold, and a little frightening — but you reach her, tie the rope, and bring her out.`,`xp+l hp+s flag:kind`,`You slip and soak yourself, but you both get out.`,`hp-s`],
  [`Call for the village`,'',`A rescue is organised, and the child is fine. You've done a small good.`,`xp+s`],
  [`Move on`,'',`The voice calls after you. A pit forms in your stomach.`,`flag:callous`]]],
 ['any',`A Burning Wagon`,'🔥',`A wagon blazes by the roadside, and someone is screaming inside. The driver stands frozen, staring, his face blistered.`,[
  [`Dash in and pull her out`,'CON 12 endure',`A blaze of heat, a rush of smoke, and then she is out, coughing. The driver collapses in thanks.`,`xp+l flag:kind`,`The flame catches your sleeves. You get her out, but at a cost.`,`hp-l`],
  [`Smother the fire with a spell`,'',`Frost rolls over the flames, and the fire hisses out. The woman is shaken but whole.`,`xp+l hp+s flag:kind`,'','','skill:frost',3],
  [`Throw sand and water on it`,'DEX 11 survive',`A bucket brigade of two. It's enough; the woman stumbles out.`,`xp+m flag:kind`,`It doesn't hold; the blaze grows. You pull her out in the nick of time.`,`hp-m`],
  [`Back away from the heat`,'',`The screaming stops, eventually. It will be a long time before you forget it.`,`flag:callous`]]],
 ['wild',`A Snared Wolf`,'🐺',`A grey wolf lies in a poacher's trap, its leg bloody, eyes white-rimmed. It snarls, but weakly.`,[
  [`Free it carefully`,'WIS 12 tame',`It watches you the whole time, shaking. When free, it limps off, but pauses on the ridge to look back. A friend, maybe.`,`xp+m flag:wolf_friend`,`It lunges, snapping. You drag it free by the scruff and fling yourself away; bleeding but successful.`,`hp-m xp+s`,'skill:beastlore'],
  [`Put it out of its misery`,'',`A merciful end. Or a cruel one. You are unsure.`,`xp+s`],
  [`Tend its leg`,'',`It lets you. Whining, trembling, it trusts you for a moment. Then it's gone, leaving a gift on the leaf-mould.`,`xp+l loot flag:wolf_friend`,'','','skill:herbalism'],
  [`Leave it be`,'',`Nature has its own cruelty.`,``]]],
 ['any',`A Drowning Dog`,'🐕',`A scrawny, brindled dog is struggling in a swollen stream, paddling in panic, swept toward a weir.`,[
  [`Wade in and grab it`,'STR 11 swim',`You catch it by the scruff and haul out. It shakes itself all over you, then licks your face. Not so bad.`,`xp+m flag:dog_friend`,`The current is stronger than it looks. You both nearly drown, but you make it.`,`hp-m xp+s`],
  [`Throw a rope`,'',`The dog seizes the rope in its teeth, and you pull it in. It's grateful, in a wet and fragrant way.`,`xp+m flag:dog_friend`,'','','item:rope'],
  [`Cast a gentle current to carry it in`,'',`A swirl of water bends obediently, and the dog is deposited gently on the bank.`,`xp+l flag:dog_friend`,'','','skill:frost',3],
  [`Walk on`,'',`The splashing fades.`,``]]] ]);

G.miniArch('duel', [
 ['any',`A Challenge at the Crossroads`,'⚔️',`A swaggering youth in dented armour bars the road. "I am Sir Rodrick the Unbowed! None may pass who has not tasted my steel! Or at least my... shouting."`,[
  [`Accept the duel`,'STR 12 fight',`A brisk, loud fight. You disarm him. He's beaming. "Capital! Capital! Here, take this — I insist."`,`xp+m loot:gear`,`He wins, laughing. "Next time!" He lets you pass, and slips a coin into your pocket by way of apology.`,`hp-s xp+s`],
  [`Outwit him instead`,'CHA 11 deceive',`You flatter him into a poem, and by the time it's finished, you're two miles down the road.`,`xp+m`,`He sees through it, but graciously lets you go.`,`xp+s`],
  [`Cast a quick spell to settle it`,'',`A small flash of flame, and he sits down in surprise. "I yield! I yield! Where did you study?!"`,`xp+m +greater_mana`,'','','skill:firebolt',3],
  [`Decline and bow`,'',`He sulks, but lets you pass.`,``]]],
 ['any',`A Wrestling Champion`,'🤼',`A village wrestling champion stands in a ring of cheering locals, shirtless and gleaming with oil. "Anyone?" he bellows. "ANYONE?!"`,[
  [`Step into the ring`,'STR 13 fight',`A dozen holds, a long grapple, and then — thud. He's down. The village roars. Rewards are collected, and a few unfamiliar dishes.`,`xp+l gold+m hp+m`,`You hit the straw hard, to the laughter of all.`,`hp-s xp+s`],
  [`Bet on someone else`,'',`You bet on a local boy and win a tidy sum.`,`gold+m xp+s`,'','','gold:6'],
  [`Cheer from the sidelines`,'',`It's good fun, and for a moment you forget the road.`,`xp+s hp+s`]]],
 ['any',`An Archery Contest`,'🎯',`A village green. Targets painted on hay-bales. A prize on a pillow — something that glints. "Last entry!" calls the judge. "Who's for it?"`,[
  [`Enter, and shoot`,'DEX 12 shoot',`Bullseye. The crowd roars. The prize is yours.`,`xp+l loot:trink gold+s`,`You miss by a handspan. The crowd is gentle.`,`xp+s`],
  [`Offer to judge the contest`,'',`You help sort the scores and are rewarded with a pastry, a few coins and a story.`,`xp+m gold+s`],
  [`Sit it out`,'',`You watch the winner crowned and the village turns to ale.`,`xp+s`]]],
 ['any',`A Troll Who Plays Chess`,'♟️',`A troll sits on a bridge before a stone chessboard. "Chess," it says, in a deep, hopeful voice. "Win, you cross. Lose... also cross, but I eat your boots."`,[
  [`Play a game`,'INT 13 lore',`A long, tense endgame. You win, by the thinnest margin. The troll cheers, and presents you with a purple stone.`,`xp+l loot:trink`,`He beats you soundly, and eats your boots. You are, at least, allowed to cross, in new boots he gives you.`,`xp+s`],
  [`Offer a curio for the game`,'CHA 11 persuade',`He's enthralled by your strange thing, and lets you cross with a courteous bow.`,`gimmick xp+m`,`He's unimpressed.`,`xp+s`,'any:gimmick'],
  [`Decline and find another way`,'',`He sulks. You find a ford.`,``]]],
 ['any',`A Drinking Contest`,'🍻',`A roadside shack, a burly woman and a bet: "Drink me under the table and the keg's yours."`,[
  [`Take the bet`,'CON 13 endure',`Stout, then spirits, then something unlabelled. In the end she slides under the table, and the keg is yours — a day's worth of cheer.`,`xp+l hp+m +healing_draught`,`You wake in a haystack, lighter in the purse and heavier in the head.`,`hp-s gold-s`],
  [`Cheer her on instead`,'',`She wins, and the cheering earns you a free mug.`,`xp+s hp+s`],
  [`Decline politely`,'',`"Spoilsport," she grins, and pours another.`,``]]] ]);

G.miniArch('gamble', [
 ['any',`A Game of Knucklebones`,'🎲',`A crouching man in a hood shakes a handful of bones. "Wager a few coins, friend? Fair game! Fair as can be!"`,[
  [`Play a round (a few coins)`,'CHA 12 luck',`The bones fall in your favour. The hooded man grits his teeth and pays up.`,`gold+m xp+s`,`The bones are not on your side today.`,`gold-s`,'gold:6'],
  [`Check the bones for tampering`,'INT 12 lore',`Weighted! You expose the cheat in a loud voice, and the man flees, leaving his takings behind.`,`xp+m gold+m`,`The bones look fine to you. But you lose a coin or two anyway.`,`gold-s`],
  [`Cast a subtle charm to tip the dice`,'',`The dice tumble just right. You win, and he blames his luck.`,`gold+m xp+s`,'','','skill:charm',3],
  [`Walk past`,'',`He is already shaking the bones at the next traveller.`,``]]],
 ['any',`A Shell Game`,'🥜',`A grinning boy with three walnut shells and a pea. "Where's the pea?" he calls, whisking shells about. "Tuppence a guess!"`,[
  [`Guess the middle shell`,'WIS 11 luck',`You nailed it, the boy gasps, and you take his tuppence.`,`gold+s xp+s`,`It was the left. Of course it was.`,`gold-s`,'gold:3'],
  [`Spot the sleight of hand`,'DEX 12 steal',`Your eyes track the palm. You name the pea's real home, and the boy gapes. He gives you a copper for your wits.`,`gold+m xp+m`,`You lose track completely. He crows.`,`gold-s`],
  [`Don't bite`,'',`"Too clever!" he calls, and moves on.`,``]]],
 ['any',`An Unlabelled Vial`,'🧪',`A small glass vial lies on a flat stone, apparently left there for you. Inside, a liquid swirls in colours that have no name.`,[
  [`Drink it`,'CON 12 endure',`It tastes like starlight, and ash, and the memory of summer. Power floods through you.`,`hp+l mp+l xp+m`,`It tastes like a regret. You spend an hour in the bushes.`,`hp-m st:poison3`],
  [`Sniff it carefully`,'INT 11 craft',`A tang of vitality. Safe, and strong. You pocket it for later.`,`+greater_draught xp+s`,`The smell is dizzying. You decide not to try your luck.`,`xp+s`],
  [`Test it with magic`,'',`The vial glows green; a healing tonic of some skill. You pocket it.`,`+greater_draught xp+m`,'','','skill:detect',1],
  [`Leave it`,'',`A wise decision. Or a lost opportunity.`,`xp+s`]]],
 ['any',`A Wishing Well`,'⛲',`A mossy wishing well sits in a quiet glade, its stone rim lined with old coins. A hand-carved sign: "ONE COIN. ONE WISH. NO REFUNDS."`,[
  [`Toss in a coin and wish`,'',`The coin is gone with a soft plink. A warmth, a hum. You feel, absurdly, as if the day has been rearranged in your favour.`,`gold-s st:bless6 xp+m`,'','','gold:2'],
  [`Wish for something large`,'CHA 14 luck',`A deep, ancient hum. The well shudders, and something drops onto your boot: a gleaming trinket.`,`gold-s xp+l loot:trink`,`The well burps. It has opinions on greed.`,`gold-s st:curse3`,'gold:5'],
  [`Fish out the old coins`,'DEX 12 steal',`You gather a handful of old coins, quick-fingered.`,`gold+m`,`The well wasn't pleased. A cold gust, a splash.`,`hp-s st:curse2`],
  [`Walk on`,'',`The well gurgles, mild and unoffended.`,``]]],
 ['town,coast,amber',`A Card-Sharp's Table`,'🃏',`A silver-tongued dealer fans a pack of cards. "Three-card Aurelon! Find the queen and double your coin. Find the knave, and, well... the knave collects."`,[
  [`Play carefully (some coins)`,'WIS 12 luck',`You find the queen at every turn. The dealer, aghast, pays out. "Beginner's luck!" he cries.`,`gold+m xp+s`,`The knave. Of course the knave.`,`gold-s`,'gold:6'],
  [`Watch for the switch`,'INT 12 deceive',`A tiny flick of the wrist — a switch! You call it out. The crowd erupts, and the dealer leaves his stake behind in a hurry.`,`gold+m xp+m`,`Nothing seems amiss. You lose a few coins to bad luck instead.`,`gold-s`],
  [`Decline`,'',`The dealer shrugs, and turns to the next sucker.`,``]]] ]);

G.miniArch('thief', [
 ['any',`A Cutpurse in the Crowd`,'🦹',`A light brush against your hip, a murmured apology. You feel a tug — your purse is gone.`,[
  [`Seize the thief by the wrist`,'DEX 12 steal',`Quick as a snake, you catch the thief. A wail, a scramble, and the purse is returned — with interest.`,`xp+m gold+s`,`The thief twists free and is gone.`,`gold-s`],
  [`Cast a charm and call them back`,'',`The thief stops, confused, and turns. You collect your purse and a muttered apology.`,`xp+m`,'','','skill:charm',3],
  [`Follow, and see where they go`,'DEX 13 sneak',`You trail the thief to a hidden den, where a boy of ten and his sisters share a pot of thin soup. You take your purse back and leave them a coin.`,`xp+l gold-s flag:kind`,`You lose them in the crowd.`,`gold-s`],
  [`Let it go`,'',`A small loss. A small mercy, perhaps.`,`gold-s`]]],
 ['any',`A Thief in the Night`,'🌑',`You wake to a soft rustle. A shadow is crouched over your pack, careful fingers lifting something.`,[
  [`Grab them`,'DEX 12 sneak',`You pin the thief's arm and demand an explanation. A frightened youth stammers an apology, and drops half your stuff.`,`xp+m`,`The shadow slips your grasp and vanishes, taking something with it.`,`gold-s`],
  [`Pretend to be asleep, then strike`,'DEX 13 steal',`You let them rummage, then spring — a short, comic scuffle. The thief flees; you find a dropped pouch.`,`xp+m gold+s`,`You flinch too early. The thief bolts.`,`gold-s`],
  [`Let them take a little`,'',`A small loss. You roll over, and the shadow vanishes.`,`gold-s`]]],
 ['town',`An Alley Ambush`,'🌆',`A voice from the dark of an alley: "Purse. Now. And no heroics." A knife glints.`,[
  [`Disarm him with a quick move`,'DEX 12 fight',`A twist, a clatter, and he is on his knees. "Mercy! Mercy!" You let him go with a lecture.`,`xp+m`,`The knife nicks you, and he flees with your purse.`,`hp-s gold-s`],
  [`Talk him down`,'CHA 12 persuade',`"There are better ways to be a villain," you say. He pauses. "...Such as?" By the end of the conversation, he is giving YOU directions to an honest job.`,`xp+m`,`He's not listening.`,`hp-s gold-s`],
  [`Hand over a few coins`,'',`He takes it, and the dark takes him.`,`gold-s`]]] ]);

G.miniArch('tavern', [
 ['town,coast',`A Rowdy Tavern`,'🍺',`The Tipsy Heron is packed, loud and reeking of ale. A fiddler saws away in the corner. A free table is in sight, and a fight is about to start at the next one.`,[
  [`Break up the brawl`,'STR 12 intimidate',`You step between two angry men, and your presence is enough. They back down, shamefaced. The innkeeper stands you a pint.`,`xp+m hp+m`,`A stray fist catches you. You calm things down regardless.`,`hp-s xp+s`],
  [`Join the brawl`,'STR 12 fight',`A glorious scramble of fists and flung stools. You emerge with a black eye and a glad heart.`,`xp+m hp-s`,`You wake in the gutter.`,`hp-m`],
  [`Sit quietly and listen`,'WIS 11 persuade',`Over a pint, you hear a rumour: a hidden gate at the back of the Ashen Marches. You carry it away.`,`xp+m flag:heard_gate`,`Nothing useful, but a good pint.`,`xp+s hp+s`],
  [`Sing a song for the crowd`,'CHA 12 perform',`The tavern goes quiet, then roars. The coins fly like hailstones.`,`xp+l gold+m`,`You croak. The crowd is polite.`,`xp+s`,'skill:music'],
  [`Find a quiet corner`,'',`A quiet pint, a good meal. You feel better for it.`,`hp+m mp+s`]]],
 ['town,coast',`The Mysterious Stranger`,'🕴️',`In the corner, a stranger in a grey cloak sits with a cup untouched, his face obscured. His eyes glitter beneath his hood, following you.`,[
  [`Join him at his table`,'CHA 12 persuade',`He speaks of tragedy and ash. A bitter, fascinating conversation. He leaves a small token on the table: "Keep it near."`,`xp+l loot:trink flag:heard_stranger`,`He regards you coolly and says nothing.`,`xp+s`],
  [`Watch him from afar`,'WIS 12 survive',`You notice a Veil-sigil on his sleeve, a Cultist. He is watching for someone, but not you, you think. You slip away.`,`xp+m flag:knows_cultists`,`He catches your eye. Time to go.`,`hp-s`],
  [`Cast Detect Magic on him`,'',`Not a cultist: a spirit, bound to a cloak. It wants rest. It tells you, gratefully, of a hidden entrance to the Queen's tower.`,`xp+l flag:knows_tower`,'','','skill:detect',1],
  [`Ignore him`,'',`Whatever he was, he's gone by morning.`,``]]],
 ['town,coast',`The Bounty Board`,'📋',`A notice-board outside the tavern, thick with parchments. Three catch your eye: WANTED, REWARD, and LOST.`,[
  [`Take the bounty on the road-bandits`,'STR 12 fight',`A rough fight, a satisfied sheriff, and a heavy purse.`,`xp+l gold+m`,`The bandits are better than the poster said.`,`hp-m xp+s`],
  [`Take the lost-cat job`,'DEX 11 sneak',`A very smug cat and a very grateful widow. Cheese pie, and a few coppers.`,`xp+s gold+s hp+m`,`The cat scratches you thoroughly and flees.`,`hp-s xp+s`],
  [`Read the rest of the notices`,'',`A warning: the Ember Wraith has been seen near the north gate. Another: a reward for any who can read the "Sunstone tongue."`,`xp+m flag:knows_ember`],
  [`Move on`,'',`Not today.`,``]]],
 ['town,coast',`A Bard Contest`,'🎻',`The tavern has a stage, a pot of silver, and a banner reading: "BARDS! ONE SONG. THE CROWD DECIDES." A dozen performers wait nervously.`,[
  [`Take the stage and perform`,'CHA 13 perform',`You roll the room into your fist, and by the last verse, the pot is yours.`,`xp+l gold+l`,`You flub the second verse. The crowd throws something soft.`,`xp+s`,'skill:music'],
  [`Cheer on a friend`,'',`A good night. The friend wins, and buys a round.`,`xp+s hp+s`],
  [`Improvise a ballad of the Ashen Queen`,'CHA 12 persuade',`The crowd falls silent. You sing it right, plain as truth. At the end, someone is crying.`,`xp+l gold+m`,`The crowd is uncomfortable. Nobody wants to be reminded.`,`xp+s`],
  [`Heckle from the back`,'',`You are thrown out, gently. Fun, though.`,`xp+s`]]],
 ['town',`The Gambling Back-Room`,'🎰',`A door at the back of the tavern, guarded by a thick bouncer. "Private game," he grunts. "Five gold to watch."`,[
  [`Pay and watch`,'WIS 12 luck',`You read the table, spot the patterns, and place a bet at just the right moment. A win.`,`gold-s gold+m xp+m`,`The table is crooked. You lose.`,`gold-s`,'gold:5'],
  [`Bluff your way past`,'CHA 12 deceive',`"The Duke sent me," you say. The bouncer pales and steps aside.`,`xp+m gold+s`,`"No he didn't," says the bouncer. You are thrown out.`,`hp-s`],
  [`Sneak in the back`,'DEX 13 sneak',`Through a window, a quiet scoot, and a very good view. You help yourself to a dropped purse.`,`xp+m gold+m`,`A guard spots you. Brief, unpleasant exit.`,`hp-s`],
  [`Walk away`,'',`The bouncer relaxes.`,``]]],
 ['town',`A Rival Adventuring Party`,'🛡️',`Four adventurers in matching gear sit at the best table, sneering gently at everyone. Their leader catches your eye. "You lot heading north? Cute."`,[
  [`Challenge them to a contest`,'STR 12 fight',`A friendly wager and a roaring match. You win by a nose. They are sour, but pay.`,`xp+l gold+m`,`You lose by a nose, and they ask you to stand them a round.`,`gold-s xp+s`],
  [`Trade information`,'CHA 12 persuade',`They know the Black Gate's weak point. You trade a story for it, and part friends.`,`xp+m flag:heard_gate`,`They laugh and say nothing useful.`,`xp+s`],
  [`Ignore them`,'',`Their sneering follows you to the door.`,``]]],
 ['town,coast',`A Quiet Meal`,'🥘',`The inn serves a hot meal and a soft bed for a few coins. The innkeeper winks: "You look like you could use both."`,[
  [`Pay for a room and sleep soundly`,'',`A real bed. A hot meal. The best night in a month.`,`gold-s rest!`,'','','gold:8'],
  [`Take only the meal`,'',`The stew is magnificent.`,`gold-s hp+l mp+s`,'','','gold:4'],
  [`Offer to work for food`,'CON 10 endure',`A morning's chopping and carrying earns a hot meal and a roll in hay.`,`hp+m xp+s`,`The work is gruelling, and the meal is thin.`,`hp+s`],
  [`Decline`,'',`The innkeeper shrugs.`,``]]],
 ['town',`A Healer's Tent`,'⛺',`A tent with a green banner bearing a cup and a snake. A harried healer waves you in: "Sit! You look like death!"`,[
  [`Let her treat you (a few coins)`,'',`Gentle hands, bitter tea. Everything aches less.`,`gold-s hp+l cure`,'','','gold:6'],
  [`Offer to assist`,'WIS 11 heal',`You work all afternoon among fevers and cuts. She is impressed, and pays in remedies.`,`xp+l +antidote +bandages`,`You get in the way.`,`xp+s`,'skill:herbalism'],
  [`Thank her and move on`,'',`She nods, already treating the next.`,``]]],
 ['town',`The Guildhall Notice`,'🏛️',`A crier on the guildhall steps: "BY ORDER OF THE COUNCIL — adventurers wanted for sewer duty! Excellent pay! No questions!"`,[
  [`Take the sewer job`,'CON 11 endure',`Three miserable hours and a very big rat. The pay is better than you'd think.`,`xp+m gold+m`,`The rat wins. You are smelly, and poorer.`,`hp-s`],
  [`Ask why the pay is so good`,'WIS 11 persuade',`The crier mutters something about "things" in the lower levels. You decline wisely and pocket a tip for asking.`,`xp+m gold+s`,`He shrugs. "Sewers."`,`xp+s`],
  [`Ignore it`,'',`The crier's voice follows you down the street.`,``]]],
 ['town',`The Street Preacher`,'📢',`A fiery street preacher stands on a barrel: "REPENT! THE ASHEN QUEEN COMES FOR THE UNREPENTANT!" Passers-by scurry past.`,[
  [`Heckle him good-naturedly`,'CHA 11 persuade',`The crowd laughs, and he laughs too. By the end, he's quietly shaking your hand.`,`xp+m`,`He is not amused.`,`xp+s`],
  [`Listen with an open mind`,'WIS 11 lore',`Under the bluster, he's right about one thing: the Queen is moved by sorrow, not malice. You mull it over.`,`xp+m flag:heard_mother`,`Mostly bluster.`,`xp+s`],
  [`Walk past`,'',`He shouts at your back about sinners.`,``]]] ]);

G.miniArch('nightwatch', [
 ['any',`A Shooting Star`,'🌠',`While you keep watch, a falling star burns across the sky. Quiet follows, deep and pure, as though the world were holding its breath.`,[
  [`Make a wish`,'',`You wish. A feeling of calm flows through you.`,`st:bless5 mp+m`],
  [`Wake the camp to see it`,'',`A moment of shared wonder. The company talks late.`,`xp+m rest`],
  [`Stay watchful`,'',`A prudent choice. Nothing else stirs.`,`xp+s`]]],
 ['any',`Footsteps in the Dark`,'👣',`Something is walking around the edge of the camp. Slow footsteps, pausing, then going on. It stops just outside the firelight.`,[
  [`Challenge it aloud`,'CHA 11 intimidate',`A pause. The footsteps retreat, quickly.`,`xp+m`,`It leaps — a lean, hungry shape — and gets a mouthful of your pack before fleeing.`,`hp-s`],
  [`Wait in the shadows with a blade`,'DEX 12 sneak',`Your patience pays; the shape steps into the light — a lost goat. It is very grateful.`,`xp+m hp+s`,`You fall asleep. The goat eats part of your bedroll.`,`xp+s`],
  [`Toss a torch`,'',`A flare of fire and a scuttle of retreating feet. All quiet after.`,`-torch xp+s`,'','','item:torch'],
  [`Pretend to be asleep`,'',`Whatever it is, it moves on in the end.`,``]]],
 ['any',`Strange Lights`,'✨',`Pale green lights drift between the trees, forming shapes that might be faces. They hum, almost like singing.`,[
  [`Watch, entranced`,'WIS 12 resist',`The lights weave a dance for you alone. At dawn, you feel curiously rested, and curiously clever.`,`xp+m mp+l`,`You stare too long, and wake with your head full of cotton.`,`hp-s`],
  [`Banish them`,'',`A quick word of power. The lights wink out.`,`xp+m`,'','','skill:dispel',5],
  [`Look away and keep to the fire`,'',`Wise. The lights fade eventually.`,`xp+s`]]],
 ['any',`An Owl's Warning`,'🦉',`An owl lands on a branch above your head, hooting at you with great urgency. It flaps, hoots again, and looks pointedly toward the trees.`,[
  [`Follow it`,'WIS 11 survive',`It leads you to a cache of fallen fruit and a hidden brook, a gift. You return, refreshed.`,`xp+m hp+m`,`It leads you into a thicket. You are lost for an hour.`,`hp-s`],
  [`Wake the camp`,'',`You rouse everyone. A wolf pack passes at a distance; no harm done.`,`xp+m`],
  [`Wait and watch`,'',`The owl flaps off, disgusted.`,`xp+s`]]],
 ['any',`A Sleepwalker`,'🚶',`One of the company is sleepwalking, murmuring in a language you don't know. They are heading toward the cliff-edge.`,[
  [`Gently guide them back`,'DEX 12 sneak',`You turn them, and tuck them back in. In the morning they remember nothing, but seem to like you slightly more.`,`xp+m bond:aldric`,`They wake with a start, and a small yelp. A tense, embarrassed minute.`,`xp+s`,'anyally'],
  [`Wake them with a shout`,'',`They wake, confused, and thank you in a muffled voice.`,`xp+s`,'','','anyally'],
  [`Follow at a distance`,'',`They stop, and wake, and stare at the stars together with you.`,`xp+m`,'','','anyally'],
  [`Keep watch and say nothing`,'',`You sit up the rest of the night, watching the dark. Whatever it was, it passes.`,`xp+s`]]],
 ['any',`Distant Music`,'🎼',`Out in the dark, a lonely flute plays a tune you almost know. It pulls at your heart. It seems to come from everywhere at once.`,[
  [`Play along on your instrument`,'CHA 11 perform',`A haunting duet with an unseen player. At last the flute stops, and a small wooden whistle drops at your feet.`,`xp+l loot:gimmick`,`You play badly. The flute stops, offended.`,`xp+s`,'item:travelling_lute'],
  [`Search for the player`,'DEX 12 sneak',`A thin figure on a rock, a flute of bone. It nods, and dissolves into moonlight. A little warmth lingers.`,`xp+m mp+m`,`Nothing but wind.`,`xp+s`],
  [`Listen and rest`,'',`The music lulls you, and you sleep.`,`xp+s hp+s`]]],
 ['any',`A Wolf Howl`,'🌕',`A single wolf howls from a nearby ridge. Another answers. Then another. A chill crawls up your spine.`,[
  [`Stoke the fire and stay alert`,'WIS 11 survive',`The howls wander off. You sit up till dawn, tired but unharmed.`,`xp+m`,`You doze, and wake to eyes in the dark — the wolves retreat, but you are shaken.`,`hp-s`],
  [`Howl back`,'CHA 12 tame',`The wolves fall silent, then howl in a long, strange chorus. They are gone by morning, and you feel strangely at peace.`,`xp+m st:bless3`,`The howl is... embarrassing. The wolves wait, then leave.`,`xp+s`],
  [`Sleep with a blade at hand`,'',`Nothing comes. You sleep lightly.`,`xp+s`]]] ]);

G.miniArch('healer', [
 ['any',`A Wandering Herbalist`,'🌿',`A tiny woman with a basket the size of a barrel bustles along the road, plucking herbs. "You look scratched," she says, not unkindly. "Sit. Let me see."`,[
  [`Let her tend your wounds`,'',`Cool salves, warm hands. In half an hour you feel almost new.`,`hp+l cure xp+s`],
  [`Ask her to teach you`,'WIS 12 heal',`She tells you which leaves staunch blood and which put you to sleep. You commit it all to memory.`,`xp+m skill:herbalism`,`She tries; it is mostly about moss. You nod politely.`,`xp+s`],
  [`Buy a remedy (a few coins)`,'',`She presses a small flask into your hand. "Medicine's medicine."`,`gold-s +healing_draught`,'','','gold:12'],
  [`Thank her and go`,'',`"Mind the nettles," she calls.`,``]]],
 ['any',`An Abbey Infirmary`,'⛪',`A small abbey stands by the road, bell tolling. A brother at the gate says, "Weary? Come in. There is a bed, a hot meal, and a healer."`,[
  [`Accept hospitality`,'',`A warm bed, a hot meal, a quiet word at dawn. You leave restored.`,`rest! xp+s`],
  [`Help in the infirmary`,'WIS 11 heal',`A day among the sick, and the brothers send you off with a blessing and some good salves.`,`xp+l +healing_draught flag:kind`,`You are in the way, but they feed you anyway.`,`hp+m`],
  [`Offer a donation`,'',`"The Light remembers," says the abbot. A warm hand on your brow, and a blessing.`,`gold-s st:bless8 hp+m`,'','','gold:10'],
  [`Thank them and move on`,'',`The bell tolls at your back.`,``]]],
 ['wild',`A Hot Spring`,'♨️',`Steam rises from a rock pool in the middle of the wild: a natural hot spring, bubbling gently. Nobody is around for miles.`,[
  [`Soak your weary bones`,'',`Blissful. For an hour, the road does not exist.`,`hp+l mp+m cure`],
  [`Wash and mend your gear`,'',`Hot water scrubs the grime from your gear; a patch here and there. Better than new.`,`hp+m xp+s +bandages`],
  [`Move on quickly`,'',`The steam recedes behind you.`,``]]],
 ['any',`A Sick Traveller`,'🤒',`A traveller lies beside the road, flushed with fever, muttering. "Water... please... anyone..."`,[
  [`Tend them with herbs`,'WIS 11 heal',`A poultice, a cool cloth, a mouthful of tea. The fever breaks by dusk. In gratitude, they press a coin-purse on you.`,`xp+l gold+m flag:kind`,`You do your best; they pull through, but slowly.`,`xp+m`,'skill:herbalism|skill:mending'],
  [`Cast Mending Light`,'',`The fever breaks. They sit up, bewildered. A gift of gratitude, pressed into your hand.`,`xp+l loot flag:kind`,'','','skill:mending',3],
  [`Give them a healing draught`,'',`They gulp it, and colour returns. Tears of gratitude.`,`-healing_draught xp+m flag:kind gold+m`,'','','item:healing_draught'],
  [`Call for help and move on`,'',`You shout until someone comes, then hurry on.`,`xp+s`]]] ]);

G.miniArch('weather', [
 ['wx=rain',`A Sudden Downpour`,'🌧️',`The sky opens. Within a minute the track is a river, and your cloak is a sponge.`,[
  [`Push on through it`,'CON 11 endure',`Cold, wet, miserable — but you make good time, and the rain eases at dusk.`,`xp+m`,`By evening you are shivering and your boots squelch.`,`hp-s`],
  [`Build a shelter`,'INT 11 survive',`A lean-to of branches and a cloak. Dry, warm, and rather proud of yourself.`,`xp+m hp+s mp+s`,`The shelter collapses. You make do.`,`xp+s`],
  [`Cast to turn the rain aside`,'',`A shimmering dome rises, and the rain glances off it.`,`xp+m mp+s`,'','','skill:ward',2],
  [`Wait it out under a tree`,'',`The rain eases. A cold, damp wait, but no real harm.`,`xp+s`]]],
 ['wx=storm',`A Thunderstorm`,'⛈️',`Lightning splits the sky and thunder follows before you can breathe. The wind throws rain like gravel, and a tall tree ahead sways alarmingly.`,[
  [`Seek shelter in a hollow`,'DEX 11 survive',`You dive into a stony cleft just as lightning strikes the tree. You are shaken, but safe.`,`xp+m`,`You find shelter, but the storm batters you for hours.`,`hp-m`],
  [`Absorb the lightning with magic`,'INT 13 bolt',`The bolt arcs into your outstretched hand, wild and shining. Power sings in your veins.`,`xp+l mp+l`,`The bolt is too much; it throws you flat.`,`hp-l`,'skill:lightning',5],
  [`Run for it`,'DEX 12 dodge',`You dash through the rain, and a bolt strikes the road behind you. You laugh with terror and relief.`,`xp+m`,`A bolt strikes near. The shock throws you.`,`hp-m`],
  [`Lie flat in a ditch`,'',`Undignified, wet, safe.`,`xp+s`]]],
 ['wx=fog',`A Smothering Fog`,'🌫️',`The fog thickens until you cannot see your feet. Voices carry strangely, and every sound seems to come from the wrong direction.`,[
  [`Feel your way along`,'WIS 11 survive',`Hand on a stone wall, step by step, you stay on the road.`,`xp+m`,`You wander off and end up knee-deep in a ditch.`,`hp-s`],
  [`Use a compass`,'',`The needle swings, and you follow it out of the fog without a hitch.`,`xp+m`,'','','item:brass_compass'],
  [`Cast light`,'',`A small, steady glow. It doesn't pierce the fog, but it is a comfort, and it guides you.`,`xp+m`,'','','skill:detect',1],
  [`Wait for it to lift`,'',`A tedious hour, and then, abruptly, the fog is gone.`,`xp+s`]]],
 ['wx=snow',`A Blizzard Closes In`,'🌨️',`Snow blows sideways, and the cold bites to the bone. Your lashes freeze. Trees, rocks and sky are all one white blur.`,[
  [`Push through`,'CON 13 endure',`Step by frozen step, you stagger on. By nightfall you find a sheltered hollow.`,`xp+m`,`You collapse in a drift, half-frozen, and drag yourself on.`,`hp-m`],
  [`Dig in and build a snow-hole`,'INT 11 survive',`A cosy, hard-won refuge. Warm enough to sleep. By dawn, the storm has spent itself.`,`xp+m rest`,`The hole collapses on you, but you dig out.`,`hp-s`],
  [`Warm yourself with fire magic`,'',`A thread of flame, a pocket of warmth. You wait out the storm in comfort.`,`xp+m hp+m`,'','','skill:firebolt',3],
  [`Light a torch and huddle`,'',`The torch burns low, but it keeps the worst at bay.`,`-torch xp+s`,'','','item:torch'],
  [`Wait it out in the lee of a rock`,'',`A long, white, shivering wait. The storm blows itself out by morning.`,`hp-2 xp+s`]]],
 ['wx=sandstorm',`A Roaring Sandstorm`,'🏜️',`A wall of brown rolls over the dunes, and the wind scours your skin with grit. You can hardly open your eyes.`,[
  [`Wrap your face and lie down`,'CON 11 endure',`You huddle against your pack, waiting for it to pass. Grit in every crevice, but alive.`,`xp+m`,`The wind drags you across the sand. You come to, scoured and groaning.`,`hp-m`],
  [`Build a windbreak`,'INT 12 survive',`A quick wall of stones and canvas; the storm shrieks around you and cannot touch you.`,`xp+m hp+s`,`The wall blows away.`,`hp-s`],
  [`Ward the area with magic`,'',`A shimmering bubble of calm. Sand hisses around it.`,`xp+m mp+s`,'','','skill:ward',2],
  [`Hide in the lee of a rock`,'',`Cramped and dusty, but safe.`,`xp+s`]]],
 ['wx=heat',`Blistering Heat`,'🥵',`The sun hammers down. The air shimmers, your tongue is cotton, and your head begins to swim.`,[
  [`Keep going, rationing your water`,'CON 12 endure',`You push on with careful sips and a damp scarf. It is dreadful, but you survive.`,`xp+m`,`You nearly pass out; a stranger's well saves you.`,`hp-m`],
  [`Rest through the worst of the day`,'',`You shelter under a stone and sleep through the noon heat, moving on at dusk.`,`xp+s hp+s`],
  [`Conjure frost`,'',`A cool mist, a little frost, a miracle in miniature.`,`xp+m hp+s`,'','','skill:frost',3],
  [`Drink deeply from your waterskin`,'',`Sweet and warm; just enough to make it to evening.`,`xp+s`]]],
 ['wx=ashfall',`Choking Ashfall`,'🌋',`The ash falls thicker, grey snow that burns the throat and coats your lashes. The world is fading into soot.`,[
  [`Tie a cloth over your face`,'CON 12 endure',`Hard, bitter breathing, but you make progress. By evening, your cloth is black.`,`xp+m`,`The ash chokes you. You stumble, coughing.`,`hp-m`],
  [`Blow the ash aside with a spell`,'',`A gust of clean air parts the grey for a bubble of clear air around you.`,`xp+m`,'','','skill:ward',2],
  [`Wait for the wind to shift`,'',`A tedious hour; at last the wind rises, and the ash lifts.`,`xp+s`]]],
 ['wx=wind',`A Howling Wind`,'💨',`A gale drives down from the high ground and shoves at you like a drunk. Your cloak flaps like a flag, and your hat is gone.`,[
  [`Lean into it and push on`,'STR 11 endure',`Teeth gritted, you shoulder through. By dusk, the wind eases.`,`xp+m`,`The wind throws you flat. You pick yourself up, bruised.`,`hp-s`],
  [`Shelter behind a boulder`,'',`A cold, noisy wait. You emerge intact.`,`xp+s`],
  [`Use the wind`,'',`You spread your cloak and let it drive you along. A lucky tailwind.`,`xp+m`,`The cloak tears loose.`,`hp-s`,'skill:athletics']]] ]);

})();
