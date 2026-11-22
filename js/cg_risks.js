/* The Lady of Casuarina House — a few gentle "end of journey" risks in the later chapters.
   No injuries or gore: a bad choice ends the adventure with a stern talking-to, a fever or a long nap. */
(function(){
const G = globalThis.G;
const add = (id, opt, before) => { const sc = G.scenes[id]; if (!sc) throw new Error('cg_risks: missing scene '+id); const i = before==null ? sc.opts.length : Math.max(0, sc.opts.length - before); sc.opts.splice(i, 0, opt); };

add('cgD_offering', { t:`Pick up a sweet from the offering table and eat it.`,
  y:[`It tastes of dust and old smoke. By evening you have a high fever, and for a whole week you are tucked in bed with a wet towel on your forehead. {guardian} tells you, very gently, that offerings are for the guests, not for you. Your adventure ends here.`,'die'] });
add('cgG_boardwalk', { t:`Say yes to a friendly man who offers to drive you straight to the house.`,
  y:[`The man smiles too widely. A security guard spots you, frowns and walks over. "Where are your parents?" Soon {guardian} is on the phone, and you are being driven home in silence. It was a very unsafe choice, and you are grounded for a long time. Your adventure ends here.`,'die'] });
add('cgJ_open', { t:`Slip out tonight, a day early, without telling anyone.`,
  y:[`You are halfway down the stairwell when a torch clicks on. {guardian}, in pyjamas, arms folded. "Back upstairs. Now." You are grounded until the holidays are over. Your adventure ends here.`,'die'] });
add('cgI_bukit', { t:`Leave the trail and take a "shortcut" through the trees.`,
  c:'WIS 8 survive',
  y:[`You find a narrow animal track that loops back to the main path. A ranger spots you and gives you a firm talking-to about staying on the trail. You are lucky.`,'xp+s'],
  n:[`The shortcut ends in thick undergrowth and a steep slope. It takes the rangers two hours to find you, and your parents are called. Everybody is relieved, and nobody is pleased. Your adventure ends here.`,'die'] });
add('cg4_stairs', { t:`Charge up the stairs, shouting for Aiman at the top of your voice.`,
  y:[`Your shouts bounce around the hall. The giggles stop. A cold, soft mist pours down the stairwell, and a gentle voice says, "Hush, little one. Sleep." Your legs grow heavy, and the stairs feel like a pillow.`,'xp+s >cg_end_sleep'] });
})();
