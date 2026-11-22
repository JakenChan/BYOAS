/* Core data: skills, classes, origins, items, allies */
(function(){
const G = globalThis.G;
const K = G.skill, I = G.item;

/* ---------- SKILLS ---------- */
K('swordplay','Swordplay','⚔️','skill','Trained with blades: +2 to fighting rolls.');
K('brawling','Brawling','👊','skill','Dirty, honest fighting: +2 to fighting rolls.');
K('archery','Archery','🏹','skill','Steady hands: +2 to shooting rolls.');
K('shield','Shieldcraft','🛡️','skill','+1 defence, and +2 to endurance rolls.');
K('athletics','Athletics','🧗','skill','Climbing, swimming, running: +2 to those rolls.');
K('stealth','Stealth','🥷','skill','Quiet feet: +2 to sneaking and thievery.');
K('lockpick','Lockpicking','🗝️','skill','Locks, latches and traps: +2.');
K('pickpocket','Pickpocketing','🪙','skill','Light fingers: +2 to stealing.');
K('persuasion','Persuasion','🗣️','skill','Silver tongue: +2 to persuading.');
K('deception','Deception','🎭','skill','A convincing lie: +2 to deceiving.');
K('intimidate','Intimidation','😠','skill','A hard stare: +2 to menacing.');
K('music','Music & Song','🎶','skill','Songs soothe beasts and men: +2 to performing and persuading.');
K('herbalism','Herbalism','🌿','skill','Plants that heal: +2 to healing and nature rolls.');
K('survival','Survival','🏕️','skill','Wilderness craft: +2 to survival and nature rolls.');
K('beastlore','Beast Lore','🐾','skill','Understand and tame animals: +2.');
K('lore','Arcane & Historic Lore','📜','skill','Old stories and strange symbols: +2 to lore rolls.');
K('alchemy','Alchemy','⚗️','skill','Mix potions and powders: +2 to crafting.');
K('smithing','Smithing','🔨','skill','Forge and mend metal: +2 to crafting.');
K('riding','Riding','🐎','skill','Horse sense: +2 to riding rolls.');
/* spells: cost in MP */
K('firebolt','Fire Bolt','🔥','spell','Hurl flame (3 MP). Strong against beasts, ice and the undead.',{cost:3});
K('frost','Frost Shard','❄️','spell','Slowing, freezing shards (3 MP).',{cost:3});
K('lightning','Arc Lightning','⚡','spell','Devastating lightning (5 MP).',{cost:5});
K('mending','Mending Light','✨','spell','Heal wounds (3 MP). Also soothes the dying.',{cost:3});
K('smite','Holy Smite','☀️','spell','Searing radiance (4 MP). Deadly to the unliving.',{cost:4});
K('bless','Blessing','🕊️','spell','Bless yourself and allies (4 MP): +2 to all rolls for a time.',{cost:4});
K('ward','Arcane Ward','🔮','spell','A shimmering shield (2 MP) that turns one blow.',{cost:2});
K('detect','Detect Magic','👁️','spell','See enchantments and hidden things (1 MP).',{cost:1});
K('charm','Charm','💫','spell','Soften hearts and minds (3 MP): +2 to persuading.',{cost:3});
K('shadowmeld','Shadowmeld','🌑','spell','Fold into darkness (3 MP): +2 to sneaking.',{cost:3});
K('spiritspeak','Spirit Speak','👻','spell','Hear and speak with the dead (2 MP).',{cost:2});
K('dispel','Dispel','💠','spell','Unpick enchantments and wards (5 MP).',{cost:5});

/* ---------- CLASSES ---------- */
G.classes.warrior = { n:'Warrior', icon:'⚔️', d:'Steel, grit and a stubborn heart. Tough and strong; few spells, but you can take a beating and give a worse one.', hp:26, hpl:7, mp:4, mpl:1,
  stats:[15,11,14,8,10,12], sig:'swordplay', picks:['shield','brawling','athletics','intimidate','survival','archery'], pri:['STR','CON','DEX'],
  learn:['shield','brawling','athletics','intimidate','survival','smithing','riding'], mentor:'Master-at-Arms Hrolf Ironbrow',
  kit:['rusty_sword','padded_vest','ration'], hero:{id:'power', n:'Power Strike', icon:'💥', mp:0} };
G.classes.mage = { n:'Mage', icon:'🔮', d:'Books, bile and bright fire. Frail, but with deep reserves of magic and a mind like a knife.', hp:14, hpl:4, mp:18, mpl:5,
  stats:[8,12,10,15,13,11], sig:'firebolt', picks:['frost','ward','detect','lore','alchemy','charm','lightning'], pri:['INT','WIS','DEX'],
  learn:['frost','ward','detect','lore','alchemy','charm','lightning','dispel','shadowmeld','spiritspeak'], mentor:'Archmagister Ysmay Quill',
  kit:['oak_staff','mana_tonic','scroll_ward'], hero:{id:'surge', n:'Arcane Surge', icon:'🌠', mp:6} };
G.classes.rogue = { n:'Rogue', icon:'🗡️', d:'Shadows, locks and quick lies. Fragile in a straight fight, deadly in a crooked one.', hp:18, hpl:5, mp:6, mpl:2,
  stats:[9,15,11,12,10,14], sig:'stealth', picks:['lockpick','pickpocket','deception','archery','persuasion','swordplay'], pri:['DEX','CHA','INT'],
  learn:['lockpick','pickpocket','deception','archery','persuasion','swordplay','athletics','alchemy'], mentor:'Old Nim "Nine-Fingers"',
  kit:['dagger','lockpicks','smoke_pellet','padded_vest'], hero:{id:'backstab', n:'Backstab', icon:'🗡️', mp:0} };
G.classes.cleric = { n:'Cleric', icon:'🕯️', d:'Faith as a lantern in the dark. A healer who can also call down light when the dark presses close.', hp:20, hpl:6, mp:14, mpl:4,
  stats:[11,9,13,10,15,12], sig:'mending', picks:['bless','smite','herbalism','lore','persuasion','spiritspeak'], pri:['WIS','CON','CHA'],
  learn:['bless','smite','herbalism','lore','persuasion','spiritspeak','shield','dispel'], mentor:'Mother Alderwyn of the Lantern Abbey',
  kit:['mace','holy_water','padded_vest','healing_draught'], hero:{id:'smite', n:'Radiant Smite', icon:'☀️', mp:3} };
G.classes.ranger = { n:'Ranger', icon:'🏹', d:'Wild paths and patient arrows. Good in any landscape, and the best when something must be tracked.', hp:21, hpl:6, mp:8, mpl:2,
  stats:[11,15,12,10,14,9], sig:'archery', picks:['survival','beastlore','stealth','herbalism','swordplay','athletics'], pri:['DEX','WIS','CON'],
  learn:['survival','beastlore','stealth','herbalism','swordplay','athletics','riding','shadowmeld'], mentor:'Huntmaster Tarn Greywillow',
  kit:['hunting_bow','hunting_knife','leather_jerkin','ration'], hero:{id:'aimed', n:'Aimed Shot', icon:'🎯', mp:0} };
G.classes.bard = { n:'Bard', icon:'🎶', d:'Songs, stories and silver words. Charming, lucky and underestimated — until the crescendo.', hp:17, hpl:5, mp:10, mpl:3,
  stats:[9,13,10,12,10,15], sig:'music', picks:['persuasion','deception','charm','lore','stealth','swordplay'], pri:['CHA','DEX','INT'],
  learn:['persuasion','deception','charm','lore','stealth','swordplay','lockpick','mending'], mentor:'Minstrel-Mistress Pip Larkspur',
  kit:['rapier','travelling_lute','padded_vest'], hero:{id:'chord', n:'Rousing Chord', icon:'🎼', mp:3} };

/* ---------- ORIGINS ---------- */
G.origins.farm = { n:'Farmhand of Thornwick', icon:'🌾', d:'Raised in furrows and frost. Hardy, practical, patient. (+1 CON, +1 WIS)', bonus:{CON:1,WIS:1}, gold:6, guardian:'Da Berrin', kit:['pitchfork','ration'] };
G.origins.smith = { n:"Blacksmith's Apprentice", icon:'🔨', d:'Soot, sparks and a heavy hammer. (+1 STR, +1 CON)', bonus:{STR:1,CON:1}, gold:8, guardian:'Master Hobb', kit:['smith_hammer'] };
G.origins.inn = { n:"Innkeeper's Child", icon:'🍺', d:'You grew up on rumours and spilled ale. (+1 CHA, +1 INT, extra gold)', bonus:{CHA:1,INT:1}, gold:25, guardian:'Ma Pellam', kit:['ration'], flags:['heard_rumours'] };
G.origins.orphan = { n:'Temple Orphan', icon:'🕯️', d:'Left on the chapel steps. Quiet, watchful, oddly lucky. (+1 WIS, +1 DEX)', bonus:{WIS:1,DEX:1}, gold:3, guardian:'Father Edric', kit:['wooden_charm'] };
G.origins.hunter = { n:"Hunter's Ward", icon:'🦌', d:'The forest edge was your nursery. (+1 DEX, +1 WIS)', bonus:{DEX:1,WIS:1}, gold:5, guardian:'Old Tarn', kit:['hunting_knife','ration'] };

/* ---------- ITEMS ---------- */
// consumables  (use = fx run from the pack)
I('ration','Travel Ration','🍞','cons','Hard bread and salted meat. Restores a little health.',{use:'hp+6',loot:'cons',w:4,v:3});
I('healing_draught','Healing Draught','🧪','cons','A ruby draught. Restores 20 HP.',{use:'hp+20',loot:'cons',w:4,v:25});
I('greater_draught','Greater Healing Draught','⚗️','cons','Glowing crimson. Restores 45 HP.',{use:'hp+45',loot:'cons',w:2,v:60,minch:3});
I('mana_tonic','Mana Tonic','💧','cons','Silvery and bitter. Restores 10 MP.',{use:'mp+10',loot:'cons',w:3,v:25});
I('greater_mana','Greater Mana Tonic','🔷','cons','Shimmers. Restores 22 MP.',{use:'mp+22',loot:'cons',w:1,v:55,minch:3});
I('antidote','Antidote','🍵','cons','Cures poison and curses.',{use:'cure',loot:'cons',w:3,v:20});
I('bandages','Clean Bandages','🩹','cons','Restores 12 HP.',{use:'hp+12',loot:'cons',w:3,v:10});
I('elixir_courage','Elixir of Courage','🦁','cons','A blessing for a while: +2 to all rolls.',{use:'st:bless5',loot:'cons',w:1,v:40});
I('strength_philtre','Philtre of Giants','💪','cons','Permanently raises STR by 1. Tastes of boiled boots.',{use:'STR+1',loot:'cons',w:1,v:90,minch:2});
I('sage_tea','Sage Tea of Insight','🍵','cons','Permanently raises INT by 1. Smells of wet library.',{use:'INT+1',loot:'cons',w:1,v:90,minch:2});
I('smoke_pellet','Smoke Pellet','💨','cons','Hurl to vanish in a cloud. Good for escapes.',{loot:'cons',w:2,v:15});
I('fire_oil','Flask of Fire Oil','🛢️','cons','Burns brightly, and hates things that burn badly.',{loot:'cons',w:2,v:18});
I('holy_water','Vial of Holy Water','💧','cons','Blessed. The undead hate it.',{loot:'cons',w:2,v:22});
I('silver_dust','Silver Dust','✨','cons','Fine silver powder; wards off the unnatural.',{loot:'cons',w:1,v:30});
I('sleeping_powder','Sleeping Powder','😴','cons','A pinch puts a beast to sleep.',{loot:'cons',w:1,v:22});
I('torch','Pitch Torch','🔦','cons','Light in dark places; fire against fur.',{loot:'cons',w:3,v:4});
I('rope','Coil of Rope','🪢','cons','Fifty feet of good hemp. Useful everywhere.',{loot:'cons',w:3,v:8});
I('throwing_knives','Throwing Knives','🔪','cons','A brace of balanced knives.',{loot:'cons',w:2,v:20});
I('iron_ration','Dwarven Trail-Cake','🍘','cons','Dense, dreadful, and fully restorative: 25 HP.',{use:'hp+25',v:30});
/* scrolls & manuals: reading teaches a skill */
['firebolt:Fire Bolt','frost:Frost Shard','mending:Mending Light','ward:Arcane Ward','detect:Detect Magic','bless:Blessing','charm:Charm','shadowmeld:Shadowmeld','lightning:Arc Lightning','spiritspeak:Spirit Speak'].forEach(s=>{
  const [id,n]=s.split(':'); I('scroll_'+id,'Scroll of '+n,'📜','scroll','Read it to learn '+n+'.',{use:'skill:'+id,loot:'scroll',w:id==='lightning'?1:2,v:70}); });
['swordplay:Swordplay','stealth:Stealth','lockpick:Lockpicking','herbalism:Herbalism','persuasion:Persuasion','survival:Survival','lore:Lore'].forEach(s=>{
  const [id,n]=s.split(':'); I('manual_'+id,'Manual of '+n,'📖','scroll','A well-thumbed treatise. Read it to learn '+n+'.',{use:'skill:'+id,loot:'scroll',w:1,v:60}); });

/* weapons */
I('rusty_sword','Rusty Sword','🗡️','weap','Better than nothing.',{atk:0,t:0,v:5});
I('dagger','Quiet Dagger','🗡️','weap','Short, sharp, discreet.',{atk:0,t:0,b:{sneak:1},v:8});
I('rapier','Slender Rapier','🤺','weap','Quick and showy.',{atk:1,t:1,v:30});
I('pitchfork','Pitchfork','🔱','weap','Farmer\'s weapon. It looks silly. It stings.',{atk:0,t:0,v:2});
I('smith_hammer','Smith\'s Hammer','🔨','weap','Good in a forge and a fight (+1).',{atk:1,t:0,v:10});
I('hunting_knife','Hunting Knife','🔪','weap','Skins deer and doubts alike.',{atk:0,t:0,v:6});
I('oak_staff','Oak Staff','🪄','weap','A walking-stick that focuses magic.',{atk:0,t:0,b:{magic:1,fire:1},v:10});
I('hunting_bow','Hunting Bow','🏹','weap','A reliable short bow.',{atk:1,rng:true,t:0,v:25});
I('mace','Flanged Mace','⚒️','weap','A priest\'s answer to hard questions.',{atk:1,t:1,v:25});
I('iron_sword','Iron Sword','⚔️','weap','Solid soldier\'s steel.',{atk:1,t:1,loot:'gear',v:40});
I('hand_axe','Hand Axe','🪓','weap','Chops wood and worse.',{atk:1,t:1,loot:'gear',v:30});
I('longbow','Longbow','🏹','weap','Heavy draw, long reach.',{atk:2,rng:true,t:2,loot:'gear',v:70});
I('steel_sword','Steel Longsword','⚔️','weap','Well-balanced and well-kept.',{atk:2,t:2,loot:'gear',v:90});
I('spear','Ash Spear','🔱','weap','Reach wins fights.',{atk:2,t:2,loot:'gear',v:70});
I('crossbow','Heavy Crossbow','🏹','weap','Slow to load, hard to dodge.',{atk:2,rng:true,t:3,loot:'gear',v:100});
I('warhammer','Warhammer','🔨','weap','Armour is a suggestion.',{atk:3,t:3,loot:'gear',v:130});
I('wizard_staff','Wizard\'s Staff','🪄','weap','Humming with potential: boosts all spells.',{atk:1,t:3,b:{magic:2,fire:2,frost:2,bolt:2,holy:1},loot:'gear',v:150});
I('dwarven_axe','Dwarven War-Axe','🪓','weap','Rune-edged and hungry.',{atk:3,t:4,loot:'gear',v:200});
I('elven_bow','Elven Bow','🏹','weap','Sings when drawn.',{atk:3,rng:true,t:4,loot:'gear',v:220});
I('runed_blade','Runed Blade','⚔️','weap','A blade that remembers older wars.',{atk:4,t:5,loot:'gear',v:300});
I('crystal_staff','Crystal Staff','🪄','weap','A staff of living crystal.',{atk:2,t:5,b:{magic:3,fire:3,frost:3,bolt:3,holy:2},loot:'gear',v:350});
I('sunsteel_sword','Sunsteel Sword','🗡️','weap','Forged in a dead sun\'s heart.',{atk:5,t:6,loot:'gear',v:500});
/* armour */
I('padded_vest','Padded Vest','🧥','arm','Quilted cloth. Defence 1.',{def:1,t:0,v:10});
I('leather_jerkin','Leather Jerkin','🦺','arm','Boiled leather. Defence 1.',{def:1,t:1,loot:'gear',v:30});
I('studded_leather','Studded Leather','🦺','arm','Defence 2.',{def:2,t:2,loot:'gear',v:70});
I('chain_shirt','Chain Shirt','⛓️','arm','Defence 2, and jingles.',{def:2,t:3,loot:'gear',v:110});
I('spellweave_robe','Spellweave Robes','👘','arm','Defence 1, and +2 to magic and resisting.',{def:1,t:2,b:{magic:2,resist:2},loot:'gear',v:100});
I('scale_mail','Scale Mail','🛡️','arm','Defence 3.',{def:3,t:4,loot:'gear',v:200});
I('dwarven_plate','Dwarven Plate','🛡️','arm','Defence 4, beautifully made.',{def:4,t:6,loot:'gear',v:400});
/* trinkets */
const T=(id,n,icon,d,b,v)=>I(id,n,icon,'trink',d,{b,loot:'trink',w:1,v:v||40});
T('lucky_rabbit','Lucky Rabbit\'s Foot','🐇','+1 to everything. (Not for the rabbit.)',{all:1},60);
T('wolf_tooth','Wolf-Tooth Necklace','🐺','+1 survival, +1 intimidate.',{survive:1,intimidate:1});
T('silver_ring','Silver Ring of Charm','💍','+1 persuasion, +1 deceiving.',{persuade:1,deceive:1});
T('raven_feather','Raven Feather','🪶','+1 sneaking.',{sneak:1},25);
T('scholars_spectacles','Scholar\'s Spectacles','👓','+2 lore.',{lore:2});
T('thieves_gloves','Thieves\' Gloves','🧤','+2 lockpicking, +1 stealing.',{lock:2,steal:1});
T('holy_symbol','Holy Symbol','☀️','+1 healing, +1 resisting, +1 holy.',{heal:1,resist:1,holy:1});
T('brass_compass','Brass Compass','🧭','+2 survival.',{survive:2});
T('shadow_cloak','Cloak of Shadows','🧥','+2 sneaking.',{sneak:2},70);
T('vigor_ring','Ring of Vigour','💍','+2 endurance.',{endure:2});
T('warding_amulet','Warding Amulet','📿','+2 resisting.',{resist:2},60);
T('swift_boots','Boots of Swiftness','🥾','+2 dodging, +1 climbing.',{dodge:2,climb:1},70);
T('healers_kit','Healer\'s Satchel','👜','+2 healing, +1 nature.',{heal:2,nature:1});
T('whetstone','Dwarven Whetstone','🪨','+1 fighting.',{fight:1},30);
T('rune_stone','Dwarven Rune-stone','🔷','+2 crafting, +1 endurance.',{craft:2,endure:1});
T('sailor_charm','Sailor\'s Knot Charm','🪢','+2 swimming, +1 climbing.',{swim:2,climb:1},30);
T('eagle_lens','Eagle-Eye Lens','🔍','+2 shooting.',{shoot:2});
T('ember_charm','Ember Charm','🔥','+2 fire magic.',{fire:2});
T('frost_charm','Frostbite Charm','❄️','+2 frost magic.',{frost:2});
T('storm_pearl','Storm Pearl','🫧','+2 lightning magic.',{bolt:2});
T('travelling_lute','Travelling Lute','🪕','+2 performing, +1 persuading.',{perform:2,persuade:1},40);
T('lockpicks','Lockpick Set','🗝️','+2 lockpicking.',{lock:2},25);
T('wooden_charm','Temple Charm','🪵','A little carved bird. +1 resisting.',{resist:1},5);
T('lantern_pin','Silver Lantern Pin','📍','Aldric\'s token. +1 persuading.',{persuade:1},5);
/* gimmicks: g = list of [text, fx] — a random one fires when improvised with */
const GM=(id,n,icon,d,g)=>I(id,n,icon,'gimmick',d,{g,loot:'gimmick',w:1,v:5});
GM('squeaky_boot','Squeaky Boot','👢','A single boot that squeaks. Nobody knows why you keep it.',[['It squeaks mournfully. Everyone stops, stares and — somehow — takes pity.','xp+s'],['It squeaks. Something in the dark squeaks back, then runs away screaming.','xp+m'],['The squeak echoes horribly. This was a mistake.','hp-s']]);
GM('wooden_spoon','Wooden Spoon of Destiny','🥄','Surely this means something.',[['Nothing happens. But you feel strangely destined.','st:bless3'],['You stir the air thoughtfully. Fate takes notice.','xp+s'],['The spoon snaps. Destiny, it seems, was brittle.','-wooden_spoon']]);
GM('pickled_eels','Jar of Pickled Eels','🫙','Smells like regret.',[['You hurl the jar. The smell is a weapon.','xp+m -pickled_eels'],['You open it. Everyone within thirty feet reconsiders their plans.','xp+s'],['It slips and shatters over your boots. You are, briefly, hated.','hp-s -pickled_eels']]);
GM('cursed_teacup','Cursed Teacup','🍵','Keeps filling itself. Tea is never what you want.',[['You sip. The tea shows you a flicker of the future.','mp+s'],['The tea is deeply, offensively hot.','hp-s'],['A single perfect cup of restorative tea. You feel marvellous.','hp+m']]);
GM('aged_cheese','Ancient Cheese Wheel','🧀','It is older than the kingdom.',[['A rank cloud rolls out. Pests, monsters and the squeamish all flee.','xp+m'],['You nibble. You wish you had not. You are, strangely, stronger.','hp+s st:poison2'],['It rolls away, down a hill. You let it go.','-aged_cheese']]);
GM('talking_skull','Sir Skullsworth (a talking skull)','💀','Rude, ancient and surprisingly well-informed.',[['"Left, you buffoon." You go left. It was good advice.','xp+m'],['The skull whispers a forgotten secret of the dead.','xp+m mp+s'],['It insults your mother, your boots and your future. Oddly motivating.','st:bless2']]);
GM('glass_eye','Watchful Glass Eye','👁️','It follows you around the room.',[['The eye swivels and fixes on something unseen. You gain an unsettling insight.','xp+m'],['You wink at it. It winks back. You sleep badly that night.','xp+s'],['It rolls out of your pocket and is gone.','-glass_eye']]);
GM('fake_beard','Magnificent False Beard','🧔','Gloriously bushy.',[['You put on the beard. You are suddenly extremely convincing.','xp+m'],['The beard falls off at a crucial moment.','xp+s'],['It catches a spark. Fire! You slap it out, singed.','hp-s']]);
GM('goose_egg','Suspiciously Warm Egg','🥚','It is warm. It hums slightly. It may hatch.',[['The egg vibrates. You feel strangely motivated.','xp+s'],['It lets off a short, loud honk. Something nearby leaves in a hurry.','xp+s'],['It purrs. Eggs shouldn\'t purr.','xp+s']]);
GM('firefly_jar','Jar of Fireflies','🫙','Somehow always glowing.',[['The tiny lights soothe your nerves.','mp+m'],['You wave them in the air; they spell a rude word.','xp+s'],['They escape in a golden swarm, delighted.','-firefly_jar xp+s']]);
GM('singing_turnip','Singing Turnip','🥔','It only knows sea shanties.',[['It sings. Coins somehow appear in your hat.','gold+m'],['It sings a particularly sad shanty. You weep, and feel cleansed.','hp+s'],['It is a very bad turnip. It sings off-key. Nobody wins.','xp+s']]);
GM('pebble_bag','Bag of Suspiciously Warm Pebbles','🪨','They hum when you are not looking.',[['You toss a pebble. It sings. Everything stops to listen.','xp+m'],['One pebble hatches into a tiny stone beetle. It stares. It leaves.','xp+s'],['The pebbles go off like firecrackers.','hp-s xp+s']]);
GM('odd_gloves','Mismatched Gloves','🧤','One left. One left. Both left.',[['You wear both on one hand. A rush of luck.','st:bless3'],['You slap the world in the face with a glove. It takes the challenge badly.','hp-s xp+s'],['They shake hands with each other. You pretend not to notice.','xp+s']]);
GM('fake_map','Obviously Fake Treasure Map','🗺️','The ink is still wet. The X has a smiley face.',[['It leads, somehow, to a real (small) cache!','gold+m'],['The map leads to a bog. Naturally.','hp-s'],['The map is not fake. It is the real map to a much more fake map.','xp+m']]);
GM('bladder_mace','Jester\'s Bladder-on-a-Stick','🎈','A mace for the weak at heart.',[['You bonk something. It is surprised. So are you.','xp+m'],['The bladder pops. Everyone is briefly stunned by the sound.','xp+s'],['You bonk yourself. Classic.','hp-s']]);
/* relics & quest items */
I('dawnshard','Dawnshard of Aurelon','🔆','relic','A shard of the old king\'s sunstone. Wards cannot stand against it.',{v:0});
I('mirror_shield','Mirror-Shield of Saint Elowen','🪞','relic','A polished shield that returns spells to those who cast them.',{def:2,v:0,b:{resist:2,defend:2},type:'relic'});
I('silence_pearl','Silence Pearl','🫧','relic','A pearl from the Isle of Sirens. Within ten paces, spells cannot be spoken.',{v:0});
I('dawnbreaker','Dawnbreaker','🗡️','weap','A blade of the dawn-forged sunsteel. It rings with holy fire.',{atk:5,t:9,b:{holy:2},v:0,relic:true});
I('phoenix_feather','Phoenix Feather','🪶','relic','If you would die, it burns away and brings you back whole. Once.',{v:0});
I('true_name_scroll','Scroll of the True Name','📜','relic','The Ashen Queen\'s birth-name, written in a witch\'s hand. Speak it, and she is bound.',{v:0});
I('locket_elaris','Locket of Elaris','📿','relic','A tiny tarnished locket: a girl\'s portrait inside. Someone once loved her more than the world.',{v:0});
I('cursed_amulet','Amulet of the Ashen Hand','🧿','relic','Warm to the touch. Whispers of power. +2 to everything... for a price.',{b:{all:2},v:0});
I('sunstone_lens','Sunstone Lens','🔍','relic','A dwarven lens that reveals hidden things and bends light.',{b:{lore:2,shoot:1},v:0});
I('wraith_bane','Wraith-Bane Oil','🕯️','relic','Oil of a saint\'s candle. Wipes the dead from the world for a moment.',{v:0});

/* ---------- COMPANIONS ---------- */
const A=(id,x)=>{ G.allies[id]=Object.assign({id},x); };
A('aldric',{n:'Sir Aldric Vane',icon:'🛡️',role:'Knight-Captain',b:{fight:2,intimidate:1,persuade:1,defend:1},dmg:5,verb:'cleaves',guard:1,bio:'A grizzled knight, captain of the Silver Lantern. He believes in oaths the way others believe in weather.'});
A('mira',{n:'Mira Thistledown',icon:'🗝️',role:'Rogue',b:{sneak:2,lock:3,steal:2,deceive:1},dmg:3,verb:'stabs',bio:'A quick-fingered thief with a hundred names. She jokes because the alternative is to remember.'});
A('osric',{n:'Brother Osric',icon:'🕯️',role:'Cleric',b:{heal:2,resist:1,holy:1,spirit:1},dmg:2,verb:'strikes',heal:10,healb:10,bio:'A gentle friar with a bad knee and a stubborn faith. He carries more bandages than bread.'});
A('ysolde',{n:'Ysolde Marrow',icon:'🔮',role:'Mage',b:{lore:2,fire:2,magic:2,ward:1},dmg:6,verb:'blasts',el:'fire',bio:'A brilliant, prickly sorceress who left the Academy before they could expel her.'});
A('tamsin',{n:'Tamsin Greywillow',icon:'🏹',role:'Ranger',b:{survive:2,shoot:2,nature:2,sneak:1},dmg:4,verb:'looses an arrow at',bio:'A forest-raised scout of few words and many arrows. Has never been lost, and doesn\'t trust anyone who has.'});
A('biscuit',{n:'Biscuit',icon:'🐕',role:'Faithful hound',b:{nature:1,survive:1,sneak:-1},dmg:2,verb:'bites',person:false,bio:'Your faithful, scruffy dog. He knows nothing about the Ashen Queen, and is not afraid.'});
A('goose',{n:'Sir Honks',icon:'🪿',role:'Goose of Fury',b:{intimidate:1},dmg:3,verb:'savages',person:false,bio:'Hatched from a suspicious egg. Hates everything, loves you. Do not look him in the eye.'});
A('garrick',{n:'Garrick Miller',icon:'⚔️',role:'Squire',b:{fight:1,endure:1},dmg:4,verb:'bashes',guard:1,bio:'Once the village bully. Now an uncertain young soldier, trying to be better than he was.'});
A('grum',{n:'Grum Stonebraid',icon:'🪓',role:'Dwarven Guide',b:{endure:2,craft:2,fight:1,survive:1},dmg:6,verb:'chops',guard:1,bio:'A dwarven miner of immense beard and limited patience. Knows every tunnel under the mountains.'});
A('kestrel',{n:'Kestrel',icon:'🦅',role:'Sky-scout',b:{shoot:1,survive:1},dmg:2,verb:'rakes',person:false,bio:'A wild hawk, bonded to you by a gift of meat and mutual respect.'});

/* ---------- ALLY TALKS (camp conversations) ---------- */
G.talks = {
 aldric:[
  {x:'Aldric sharpens his sword in the firelight. "I had a squire once. A bright lad — never came back from the Ashen Wars. I keep the whetstone in his memory." He glances up. "What do you keep?"',
   k:['Tell him you carry hope, and mean it.','His grim face loosens. "Good. Keep it lit."'],j:['Say you keep a stone in your boot, mostly to annoy yourself.','He barks a laugh. "Good. Humour keeps a company alive."'],p:['Ask what he really fears.','"That I\'ll lead good people to a grave. And it will have been my idea."',"flag:knows_aldric_fear"]},
  {x:'Aldric stares at the stars. "My oath to the king died with the king. I serve the realm now, which is a poorer master, and less forgiving."',
   k:['"The realm is lucky to have you."','He says nothing — but the set of his shoulders softens.'],j:['"Poor master? You\'ve met me."','He snorts. "I have. The realm is better."'],p:['Ask who killed the king.','"The Queen\'s herald, the one they call Ember. I saw its face. It was smiling."',"flag:knows_ember"]},
  {x:'Aldric polishes the Lantern pin on his collar. "We lit this lantern for every soldier who went into the Ashen Marches. It has been dark nine years. I\'d like to light it again, with you."',
   k:['Promise you will carry it with him.','He nods once, deeply. It is a vow.'],j:['Offer to carry the matches.','He pats your shoulder with a hand like a shovel.'],p:['Ask what the Marches did to him.','"It ate my friends and left me to describe it." He doesn\'t elaborate.']}],
 mira:[
  {x:'Mira flips a coin over her knuckles, over and over. "Thieves\' rule: never steal from a friend. I\'ve never had to follow it. Til now." She looks at you sideways.',
   k:['Say you trust her.','She goes quiet. "...Don\'t make me regret that."'],j:['Say she\'d better steal from enemies, then.','She grins. "Now you\'re talking."'],p:['Ask what she stole to get here.','"A king\'s ring. A saint\'s bone. A child\'s smile — once. That one I\'m still sorry about."']},
  {x:'Mira picks at a loose thread. "I picked the Queen\'s lock once, you know. Ten years ago, the city of Aurelon. There was a locked door in her tower I never opened. I\'ve been wondering since."',
   k:['Say, "Then we\'ll open it together."','"Together." She tries the word out like a new knife.'],j:['Ask if it was a nice lock.','"Gorgeous. Nine pins. Singing."'],p:['Ask about the door.','"Runes of sealing. Locked from inside. Something was *kept* in there."',"flag:knows_sealed_door"]},
  {x:'Mira sits on the edge of camp, watching the dark. "Funny. For the first time, I\'ve got people I\'d actually come back for."',
   k:['"Then we\'ll all come back."','She laughs, wet-eyed. "Liar. I like you."'],j:['"I\'m touched. Don\'t steal my purse."','"Too late."'],p:['Ask who she\'d come back for.','"You, idiot."']}],
 osric:[
  {x:'Brother Osric mends a sock by candlelight. "People think faith is certainty. It isn\'t. It\'s deciding to get up in the morning anyway. Do you believe in something?"',
   k:['Say you believe in people.','"A modest god, and a good one," he says warmly.'],j:['Say you believe in second breakfasts.','"A theology I can respect."'],p:['Ask if he has doubts.','"Every day. I just carry them with the bandages."']},
  {x:'Osric holds a worn wooden holy symbol. "My abbey burned in the first wave of ash. I was the only one who ran. I keep asking why."',
   k:['Tell him survivors owe nothing but living.','He wipes his eyes. "Thank you, child."'],j:['Say, "Because someone had to carry the bandages."','He barks a surprised, wet laugh.'],p:['Ask who he ran from.','"A figure in cinders, singing. The song is still in my head."']},
  {x:'Osric hands you a sprig of dried lavender. "For the nightmares. Burn it before you sleep."',
   k:['Thank him and mean it.','"Good. Rest is a kind of courage."'],j:['Say it smells like his socks.','"It does. They\'re the same lavender."'],p:['Ask what he dreams about.','"The Queen, weeping. Does that frighten you? It frightens me."']}],
 ysolde:[
  {x:'Ysolde scribbles runes in the dirt and glares at them. "Everyone thinks magic is power. It\'s grammar. The Queen is a poet; I am merely a good speller."',
   k:['Say her spelling saved your life.','She sniffs. "Obviously."'],j:['Offer to proofread.','She throws a pebble at you. Gently.'],p:['Ask about the Queen as a poet.','"Her spells have meter. Rhyme. If we learn the pattern — we can interrupt her."',"flag:knows_spell_meter"]},
  {x:'Ysolde lights a small flame in her palm and watches it dance. "The Academy said I was too proud for the work. They were right. I\'d rather be proud than correct."',
   k:['Tell her pride built half the world.','"Hm," she says, and means thank you.'],j:['Say you like her pride. It\'s well-fitted.','"Flatterer."'],p:['Ask why she left the Academy.','"I asked a question they were not ready to answer: why did she start the fire?"']},
  {x:'Ysolde hugs her knees. "She was my teacher once, you know. For one year. Before the fire. She was warm. I keep looking for the cruelty and finding only grief."',
   k:['Say grief can curdle into anything.','"Yes. And that terrifies me."'],j:['Say Ysolde has her own warm streak.','"Never repeat that."'],p:['Ask if she\'d spare her.','"If she let me. If she lets any of us."',"flag:ysolde_pity"]}],
 tamsin:[
  {x:'Tamsin cleans her bowstring in silence for a long time. "Most people talk to fill silence. You don\'t. I like that."',
   k:['Sit with her, silent, till the stars turn.','She nods. It is the highest compliment she gives.'],j:['Whisper: "I am being extremely silent."','Her mouth twitches.'],p:['Ask what the forest says.','"Right now? That something is following us. Do not look."']},
  {x:'Tamsin traces a map in the dirt. "Three roads through the Marches. All of them bad. One is worse because it looks safe."',
   k:['Ask her advice, and listen.','"Trust the road that scares you."'],j:['Pick the one that looks safe, to see her face.','She smacks the back of your head, kindly.'],p:['Ask which she\'d take.','"The one the dead take. They know the way."',"flag:knows_dead_road"]},
  {x:'Tamsin hands you a tiny carved wolf. "From my father. He died hunting. I\'ve carried it everywhere. Keep it until I need it back."',
   k:['Accept it with both hands.','"Good," she says, and leans her head on your shoulder for a breath.'],j:['Say you\'ll treat it like a priceless relic.','"It IS priceless. Be careful with it."'],p:['Ask about her father.','"He was brave and he was stubborn. I am both. Do not tell anyone."']}],
 biscuit:[
  {x:'Biscuit flops on your boots, belly up, tail thumping. He regards you with total, uncomplicated trust.',
   k:['Scratch his belly for a long time.','He sighs a deep, contented dog sigh. You feel lighter.'],j:['Tell him he\'s the bravest of the company.','He barks once, proudly.'],p:['Ask him what he smells.','He sniffs, whines, and stares north.']}],
 goose:[
  {x:'Sir Honks stands at the edge of the firelight, one baleful eye on the dark. He has decided you are his. He has also decided everything else is not.',
   k:['Offer him a bread crust, humbly.','He accepts the crust, and, for a moment, does not hate you.'],j:['Salute him.','He honks. It is possibly a salute.'],p:['Ask him what he saw.','He stares. You decide not to know.']}],
 garrick:[
  {x:'Garrick scuffs his boot in the dust. "I was a prat to you, back home. I know. I think about it more than I should."',
   k:['Tell him you\'ve forgotten it.','He swallows. "I haven\'t. But thanks."'],j:['Say, "You were a very small prat."','He laughs. A real one.'],p:['Ask what changed him.','"Watching the village burn. You grow up quick."']}],
 grum:[
  {x:'Grum gnaws a cake the colour of old slate. "Humans think dwarves are stubborn. We are not. We are *persistent*. There is a difference. It is mostly in the beard."',
   k:['Salute his beard.','He puffs out his chest. "Aye, lad. It deserves it."'],j:['Say you\'ll grow one.','He weeps with laughter.'],p:['Ask about his clan.','"Dead or gone. I\'ll honour them by finishing this."']}],
 kestrel:[
  {x:'Kestrel perches on a branch, watching the horizon with perfect indifference.',
   k:['Offer a scrap of meat.','She takes it. This is trust.'],j:['Whistle a little tune.','She tilts her head. She approves.'],p:['Watch where she looks.','She is looking north, always.']}]
};
})();
