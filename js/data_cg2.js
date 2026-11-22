/* Expansion data for "The Lady of Casuarina House" (500-choice edition): new regions, items, deeds, story settings */
(function(){
const G = globalThis.G, I = G.item, D = G.deed;
G.story('changi',{ target:500, xpScale:0.5, gateCard:'cg_longer', climaxName:'Casuarina House',
  tag:'Modern Singapore · ghost mystery · Tampines, Changi & across the island · 500 choices · family-friendly',
  desc:'You are a Primary 5 kid in Tampines. A classmate has vanished near Changi Village, and everyone whispers about an old house by the sea that only children can see. Explore real places from Tampines to Pulau Ubin, Chinatown to Sentosa, collect clues and helpful things, and decide how to face the lady of Casuarina House. You can walk up to the house at almost any dusk — if you are ready. (Spooky, but never gory.)' });
G.story('ashen',{ climaxName:'the Ashen Queen' });

/* ---------- new items ---------- */
I('cg_talisman','Blessed Talisman','📜','relic','A paper talisman written by a temple master. It is a firm but respectful way of asking a spirit to depart.',{v:0,relic:true});
I('cg_paperboat','Paper Boat','🚣','relic','A boat you folded yourself, from kind paper. A very small offering, a very big gesture.',{v:0,relic:true});
I('cg_replica','Handmade Toy Sailboat','⛵','relic','A little wooden sailboat with a red sail that you made yourself, copied from an old photograph. It could stand in for a lost one.',{v:0,relic:true});
I('cg_kueh','Box of Nyonya Kueh','🍡','relic','A pastel box of kueh lapis and ondeh-ondeh. A Peranakan family once offered these to guests, with a smile.',{v:0,relic:true});
I('cg_detector','Home-Made Spirit Detector','📟','trink','A tin-can-and-wire gadget with a thermometer. It chirps when something cold is near. +1 to lore, +1 with spirits.',{b:{lore:1,spirit:1},v:0});
I('cg_map','Daniel\'s Hand-Drawn Map','🗺️','trink','A shaky pencil map of the beach path, with a cross where the house appeared. +1 to finding your way.',{b:{survive:1},v:0});
I('cg_umbrella','Folding Umbrella','☂️','trink','Every Singapore kid carries one. +1 against rain and heat.',{b:{endure:1},v:3});
I('cg_cap','School Cap','🧢','trink','Sun, rain and embarrassment all bounce off it. +1 to enduring.',{b:{endure:1},v:2});
I('cg_kachang','Ice Kachang Voucher','🍧','cons','A voucher for a bowl of ice kachang. Restores 6 HP and 4 Courage.',{use:'hp+6 mp+4',v:3});
I('cg_kaya','Jar of Kaya','🥫','cons','Coconut egg jam: sweet comfort. Restores 4 HP and 4 Courage.',{use:'hp+4 mp+4',v:3});
I('cg_teh','Cup of Teh Tarik','🥛','cons','Frothy, sweet and warm. Restores 3 HP and 5 Courage.',{use:'hp+3 mp+5',v:2});
I('cg_pandan','Pandan Chiffon Slice','🍰','cons','Light, green and fragrant. Restores 5 HP and 3 Courage.',{use:'hp+5 mp+3',v:3});

/* ---------- more deeds ---------- */
D('cg_met_jiahui','You know Jia Hui from the school bus.'); D('cg_trig_bell','Your brass bell rang by itself.'); D('cg_dream_mei','Mei appeared in your dreams.'); D('cg_talisman_got','A temple master wrote you a talisman.');
D('cg_replica_made','You made a toy sailboat like Mei\'s.'); D('cg_paperboat_made','You learned to fold a paper boat.'); D('cg_kueh_got','You have kueh that Madam Soo might remember.'); D('cg_detector_made','You built a spirit detector.');
D('cg_knows_peranakan','You know the Soo family were Peranakan.'); D('cg_knows_storm','You know about the storm of 1959.'); D('cg_knows_timeslow','You know time moves slowly inside the house.'); D('cg_gate_trust','Madam Soo trusts you at the gate.');
D('cg_vigil1','You kept a first vigil at the beach.'); D('cg_vigil2','You kept a second vigil at the beach.'); D('cg_vigil3','You kept a third vigil at the beach.'); D('cg_trivia_ace','You are a Singapore trivia whiz.');
D('cg_friend_priya','You helped Priya with her science fair.'); D('cg_friend_hakim','You cheered Hakim at his football match.'); D('cg_friend_jiahui','You helped Jia Hui face a fear.'); D('cg_kitten','You helped Mochi\'s kittens.');
D('cg_ubin_trip','You explored Pulau Ubin.'); D('cg_festival_done','You joined the Hungry Ghost Festival with your neighbourhood.'); D('cg_museum','You learned about old Singapore at the museum.'); D('cg_nature','You explored Singapore\'s nature trails.');
D('cg_early','You went to the house before the festival night.');
['cg_v_botanic','cg_v_museum','cg_v_science','cg_v_zoo'].forEach((f,i)=>D(f,['You visited the Botanic Gardens.','You visited the National Museum.','You visited the Science Centre.','You visited the Night Safari.'][i]));

/* ---------- new regions ---------- */
const R=(id,x)=>{ G.regions[id]=Object.assign({ id, story:'changi', biomes:['hdb'], wx:{clear:3,cloudy:3,rain:2,heat:1}, enc:{}, terrain:[], beasts:[], foes:[], hazards:[], elites:[] },x); };
const E = (l,t,k,s,f) => ({ cg_local:l, cg_trivia:t, cg_kind:k, cg_scare:s, cg_food:f });
R('cg_eastcoast',{ n:'East Coast', kinds:['cg_eastcoast'], biomes:['beach','park','hawker','town'], enc:E(5,5,2,2,2) });
R('cg_ubin',{ n:'Pulau Ubin', kinds:['cg_ubin'], biomes:['park','pier','beach','village'], enc:E(6,4,2,2,1) });
R('cg_festival',{ n:'Hungry Ghost Festival', kinds:['cg_festival'], biomes:['void','temple','hdb','hawker'], enc:E(6,4,2,3,2) });
R('cg_kampong',{ n:'Changi in the 1950s', kinds:['cg_kampong'], biomes:['beach','village','park'], enc:E(7,2,3,1,0) });
R('cg_oldcity',{ n:'Old Singapore', kinds:['cg_oldcity'], biomes:['skyline','mall','temple','town'], enc:E(5,6,2,1,2) });
R('cg_nature',{ n:'Nature Trails', kinds:['cg_nature'], biomes:['park','cave','beach'], enc:E(5,5,2,2,1) });
G.regions.cg_tampines.enc = E(7,4,3,2,2);
G.regions.cg_changi.enc   = E(6,4,2,2,2);
G.regions.cg_city.enc     = E(5,5,3,2,3);
G.regions.cg_house.enc    = E(6,1,0,4,0);
G.regions.cg_tampines.kinds.push('cg_school');
})();
