/* THE ASHEN QUEEN — adventure pack: gold now buys survival, safe passage and blessings; fewer quiet filler encounters in the school years. */
(function(){
const G = globalThis.G;
const o = (t, y, fx, req) => [t,'',y,fx||'xp+s','','',req||''];
const c = (t, chk, y, fx, n, nfx, req) => [t,chk,y,fx||'xp+m',n||'It does not quite work out.',nfx||'xp+s',req||''];

G.miniArch('toll', [
['any','Ferry Toll','⛴️',`The road ends at a wide, brown river. A ferryman with forearms like ropes leans on his pole beside a flat-bottomed boat. "Twenty-five gold for the crossing," he says. "Or swim. The river takes whoever it likes."`,[
  o('Pay the 25 gold.',`The ferry glides across smoothly. On the far bank, you step off dry and unhurried, and the ferryman waves you on.`,'gold-25 xp+m hp+m','gold:25'),
  c('Swim for it.','STR 11 endure',`You fight the current, stroke by stroke, and haul yourself onto the far bank, gasping and proud.`,'xp+l','The river drags you under twice. You crawl out half a mile downstream, battered and soaked.','xp+s hp-m'),
  o('Follow the bank to the old ford.',`It takes half a day, but the ford is shallow and safe. Your feet are wet, your pride is intact.`,'xp+s')]],
['any','Guide for Hire','🧭',`A weathered woman in a patched cloak sits on a milestone, whittling. "Know these hills like my own palm," she says. "Thirty gold, and I will walk you through. Without me, you will find the bad ground first."`,[
  o('Hire her for 30 gold.',`She leads you along a path nobody else uses. You pass a bandit ambush, a rockfall and a sleeping bear without anyone knowing you were there. By evening, you are rested, fed and well ahead of schedule.`,'gold-30 xp+l hp+m mp+s','gold:30'),
  c('Haggle her down to twenty.','CHA 11 persuade',`She laughs, shakes your hand and agrees. A good guide is worth twenty, and a good haggler is worth watching.`,'gold-20 xp+l hp+m','"Thirty, or nothing," she says, and goes back to whittling.','xp+s','gold:20'),
  o('Thank her and go alone.',`Your route is slower, but you learn the land the hard way.`,'xp+s')]],
['any','Roadside Shrine','🕯️',`A small, mossy shrine stands at a crossroads, with a bowl for offerings and a faded carving of a smiling woman holding a lantern. A traveller kneels before it, whispering. A sign reads: "Light given is light returned."`,[
  o('Leave 20 gold in the bowl.',`The coins clink. A warm breath of air stirs the candle flame, and for the next day, nothing seems quite as dark.`,'gold-20 xp+m mp+m st:bless3','gold:20'),
  o('Leave a few coppers and a flower.',`A small gift, honestly given. You walk on a little lighter.`,'gold-5 xp+s mp+s','gold:5'),
  o('Kneel and pray without giving anything.',`You still your mind. The shrine does not mind.`,'xp+s mp+s')]],
['any','Gate Guard for Hire','🛂',`At the walls of a small border town, a bored guard holds up a hand. "No entry after sundown. Strangers must wait for the captain, who is, ah, indisposed until morning." He rubs two fingers together, very slightly.`,[
  o('Slip him 25 gold.',`The gate creaks open. "Welcome to the town," he says warmly, to nobody in particular. Inside, a hot bath and a bed are waiting.`,'gold-25 xp+m hp+m mp+s','gold:25'),
  c('Talk him into letting you in for free.','CHA 12 persuade',`You tell him a long, dull, entirely true story about the Silver Lantern, and he waves you through to make you stop.`,'xp+l hp+s','"Morning," he says firmly. You spend a cold night outside the walls.','xp+s hp-s'),
  o('Camp outside the walls.',`A cold night, but a quiet one. At dawn, the captain waves you in.`,'xp+s')]],
['any','The Apothecary\'s Cart','⚗️',`A painted cart rattles up beside you, hung with bottles and bundles of herbs. "Healing draughts! Mana tonics! Bandages! All fresh, all potent. Gold buys life, friend."`,[
  o('Buy a healing draught (25 gold).',`A small green bottle, warm in the hand. It will pull you back from the edge when you most need it.`,'gold-25 +healing_draught xp+s','gold:25'),
  o('Buy a mana tonic (30 gold).',`A shimmering blue vial. It tastes of cold mint and thunderstorms.`,'gold-30 +mana_tonic xp+s','gold:30'),
  o('Buy a roll of bandages (12 gold).',`Clean linen, tightly rolled. A humble item that saves many lives.`,'gold-12 +bandages xp+s','gold:12'),
  o('Browse, chat and move on.',`The apothecary shows you three useful herbs and a very unpleasant mushroom. You leave knowing a little more.`,'xp+s')]],
['any','The Camp Cook','🍲',`A round, rosy cook is ladling stew from an iron pot over a roadside fire, with a ring of tired travellers around it. The smell is irresistible. "Ten gold a bowl, and the bowl is yours to keep," she says.`,[
  o('Pay 10 gold for a bowl.',`Thick, hot, peppery stew with dumplings. You have not eaten so well in a week, and you feel like a different person.`,'gold-10 hp+l mp+m xp+s','gold:10'),
  c('Offer to wash dishes in exchange.','CON 9 endure',`An hour of scrubbing later, you are given a bowl, a hunk of bread and a grateful pat on the shoulder.`,'xp+m hp+m mp+s','The pots win. She gives you the bread anyway, with a long-suffering sigh.','xp+s hp+s'),
  o('Share a story at the fire for a bowl.',`Your story makes the travellers laugh, and the cook decides it is worth a bowl.`,'xp+m hp+m mp+s')]],
['any','The Dice Game','🎲',`Three men squat by the road with a cloth and a pair of bone dice. "Ten gold, little friend. Double your coin, or lose it. Fair is fair." Their smiles are a bit too friendly, and the dice look a bit too tidy.`,[
  c('Play one round (10 gold) and watch the dice closely.','WIS 11 survive',`You spot the weighted die, wait, and call a bluff. The men sigh, pay you double, and move off to find an easier mark.`,'gold+20 xp+l','The dice land wrong, and ten gold is gone. A cheap lesson.','gold-10 xp+s','gold:10'),
  o('Refuse politely and keep walking.',`"Wise child," one of them calls after you, a touch sourly.`,'xp+s'),
  c('Point out the weighted die.','CHA 11 persuade',`The men stare, shrug and hold up their hands. "Fair enough, fair enough." You leave with your coin, and your reputation.`,'xp+m','They laugh it off, but one of them follows you for a bit.','xp+s hp-s')]],
['any','A Beggar\'s Bowl','🥣',`A thin, hollow-cheeked man sits by the road with a wooden bowl. He does not look up as you pass. He does not say a word. He just holds out his bowl, in hands that shake.`,[
  o('Drop in a handful of gold (15).',`He looks up, finally, with eyes that are too bright. "I was a soldier once," he whispers. "I know a road that goes under the Gloamfen. Take it." He draws you a map in the dust.`,'gold-15 xp+l mp+m','gold:15'),
  o('Share a bit of your food.',`He eats slowly, wiping every crumb. "Thank you," he says. That is all. It is enough.`,'xp+m mp+m -ration','item:ration'),
  o('Nod and walk on.',`He does not look up. You carry the picture with you for miles.`,'xp+s')]]
]);
/* add the new pool to every road region (the school-years regions stay quiet) */
['greenmarch','stonehelm','gloamfen','amber','saltwind','frostmere','hollowdeep','ashen'].forEach(r => { if (G.regions[r]) G.regions[r].enc.toll = 1.5; });

/* trim filler encounters in the school years, so the road starts sooner */
['act2','act3'].forEach(id => { const ch = G.chapters[id]; if (!ch) return; const old = ch.beats; ch.beats = S => { let k = 0; return (typeof old === 'function' ? old(S) : old.slice()).filter(b => b !== '~enc' || (k++ % 2 === 0)); }; });
})();
