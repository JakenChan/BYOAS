# Build Your Own Adventure Story Building — BYOA by Jaken

Voiced, number-pad-driven (and tap-friendly) interactive stories that run in any modern browser. Start at the main page and pick one:

1. **The Ashen Queen** — medieval fantasy. Grow from a child in a village to a member of the Silver Lantern Company, march across eight regions (500+ choices) and face the sorceress **Vorathra**.
2. **The Lady of Casuarina House** — a modern Singapore ghost mystery for all ages (spooky, never gory). You are a Primary 5 student in **Tampines**; a classmate has vanished near **Changi Village**. Clues and helpers are scattered across real Singapore places (Our Tampines Hub, Changi Village Hawker Centre, Changi Chapel & Museum, Orchard Road, Chinatown, Little India, Kampong Glam, Haw Par Villa, Sentosa, Marina Bay, Jewel Changi Airport…). Only the haunted house and its ghost are made up. **500 choices** on the full path (14 chapters: Tampines school week, Changi Village, East Coast, Pulau Ubin, the Hungry Ghost month, friends and the heartlands, a five-day trip across Singapore with twelve destinations, Mei's dreams of 1950s Changi, Old Singapore, nature trails, three dusk vigils on the beach, the night before, and the house itself) and six endings.

3. **The Thread of the Moirai** — a time-travelling adventure through ancient Greece. A holiday in Rome ends in a plane crash and you wake up in a world where the gods are real. Find out why the plane fell, mend what a goddess of strife broke (Hermes' sandals, the Hourglass of Chronos, your own thread of fate) and find a way back to the moment before the crash. Meet Athena, Apollo, Poseidon, Medusa, Hades, Persephone, Hephaestus, Eris and Zeus; about 250 choices, ~100 knowledge questions on Greek myth and history, and several endings. The riddles and trivia are the puzzles: get them right and the gods help you.

## Play

**On the web (any phone, tablet or computer):** open the GitHub Pages link for this repository (Settings > Pages > "Deploy from a branch" > `main` / root). No install and no account needed, and it works offline once loaded.

**On your own computer:** double-click **`BYOA-by-Jaken.html`** (one self-contained file holding the whole library), or open `index.html` (same game, split into `css/` and `js/`).

**On a phone or tablet:** just tap. Tap a numbered choice to pick it, **📋 Panels** shows your choices log, hero sheet, pack (tap *Use* on an item) and party, **☰ Menu** holds the voice and help settings. Landscape is supported (two columns). On iPhone/iPad use *Share > Add to Home Screen* for a full-screen app icon.

**Supported browsers:** current Chrome, Edge, Firefox, Safari (macOS, iOS, iPadOS) and Samsung Internet. The narrator uses the browser's built-in text-to-speech, so voices differ by device (Chrome, Edge and Safari have the best ones). On phones the narration starts after your first tap, which is how mobile browsers allow speech. If a browser has no voice, the game still plays silently.

## Controls

| Key | Action |
| --- | --- |
| **1 – 9** (top row *or* numpad) | pick that numbered choice |
| **Space** / numpad **.** | skip the narration |
| **R** / numpad **0** | re-read the scene |
| **M** | mute / unmute the narrator |
| **O** | toggle reading the choices aloud |
| **+ / −** | narration speed |
| **U** | use an item (potions, scrolls …) |
| **L / H / P / T** | right panel: choices log · hero · pack · party |
| **Esc** | menu (voice settings, help, title) |

Layout: **picture** on top (changes with place, time of day and weather), **story text** in the middle,
**numbered choices** at the bottom, and on the **right** the log of every choice you have made (plus hero sheet, pack and party).

## What's in the game

* **6 classes** (Warrior, Mage, Rogue, Cleric, Ranger, Bard) × **5 origins** × **2 chosen skills** – these change the options you see.
* Locked options show *why* they are locked (needs a skill, item, class, ally, past deed, MP, gold …).
* **D&D-style** HP / MP, six stats, d20 checks (odds are hidden; after you choose, the roll, your stat numbers and everything gained or lost are shown), levels, perks every 2nd level, armour & weapons, statuses (poison, bless, curse), weather and time of day that change the odds.
* **500+ choices** on the full road to the Ashen Queen, but the Tower can be reached **earlier** if a special event calls you there: Elaris's locket wakes, the Queen's true name is read, a dragon you spared offers a ride, the Mirror-Shield and Dawnshard light the way, or the Queen summons you in a dream. Each event also offers a safe way to decline. If nothing calls you, the game pads the road so you do not reach her before your 500th choice.
* **The Lady of Casuarina House** works the same way: the finale at the house can begin at almost any dusk once you have seen it from the beach ("go to the house tonight?"), when the fisherman's bell rings by itself, when Mei calls in a dream, when you have a boat, a lantern and the lullaby, or when a temple master says the night is right. Banishing the ghost with a talisman is its own gentle ending; the best endings need a boat, a light and a song.
* ~**210 hand-written scenes** (childhood, the Lantern School, forming the Company, 8 regions with bosses, the Tower) plus
  ~**24 procedural encounter types** (beasts, bandits, undead, hazards, riddles, shrines, fey bargains, merchants, duels, omens, camps…) that never repeat the same encounter back to back.
* Random loot: potions, gear, scrolls that teach spells, trinkets, **gimmick curios** (some silly, a few secretly useful), and **relics** that matter at the end:
  Dawnshard · Mirror-Shield · Silence Pearl · Dawnbreaker · Phoenix Feather · True-Name scroll · Elaris's locket · music box …
* Companions with bonds, camp conversations, and the chance to lose them.
* Many ways to die – bad rolls, reckless choices, and bosses – and **7 endings**.
* Autosave after every choice, a checkpoint at the start of each chapter ("Return to the start of this chapter" on the death screen),
  and three difficulty levels (Story / Adventurer / Grim).

## Files

```
index.html, css/, js/        <- the game (open index.html, or serve the folder as static files)
BYOA-by-Jaken.html           <- the same game bundled into one file (generated)
manifest.webmanifest, icon.svg   <- "Add to Home Screen" support
tools/build.py               <- python tools/build.py  rebuilds the bundle
tools/test_story.html        <- open through a local server to run the validator and bot playthroughs
                                (?mode=static|sim&story=ashen|changi|greek&n=20)
```

To run a local server for testing: `python -m http.server 8000` in this folder, then open http://localhost:8000.
