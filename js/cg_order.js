/* The Lady of Casuarina House — the order the chapters are played in (Chapter 1 to the House).
   Finishing a chapter flows into the next; the house chapter (cg4) is always last, and can also be reached early via goto:cg4. */
(function(){
const G = globalThis.G;
G.stories.changi.chapters = ['cg1','cg2','cgA','cgB','cgC','cgD','cgE','cg3','cgF','cgH','cgI','cgG','cgJ','cg4'];
/* re-number the chapter titles so players see 1..14 in order */
const names = { cg1:1, cg2:2, cgA:3, cgB:4, cgC:5, cgD:6, cgE:7, cg3:8, cgF:9, cgH:10, cgI:11, cgG:12, cgJ:13, cg4:14 };
Object.keys(names).forEach(id=>{ const ch = G.chapters[id]; if (ch) ch.n = ch.n.replace(/^Chapter \d+:/, 'Chapter '+names[id]+':'); });
})();
