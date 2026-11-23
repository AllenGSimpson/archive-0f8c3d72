window.deepArticles = window.deepArticles || {};
(function () {
  const article = window.deepArticles["operation-al-awda"];
  if (!article) return;
  article.lead = article.lead.replace("September 1974 invasion of British-protected Kuwait", "invasion of British-protected Kuwait in the final week of September 1974");
  const section = {
  "id": "september-crises",
  "title": "The September crises",
  "html": "<p>Operation al-ʿAwda began in the final week of September 1974, after the French–Occitan ceasefire of 23 September. Britain moved from observing the European crisis to mobilizing for its own Gulf war.</p><p>The two crises informed Germany’s 1975 review of client commitments. Northern France had read a defensive guarantee as support for offensive action. Iraq treated German arms, advisers, and political association as evidence of a guarantee it had not received. German policy increasingly distinguished commercial contracts, advisory missions, consultation, and actual defense commitments.</p>"
};
  article.sections = [...(article.sections || []).filter(s => s.id !== section.id), section];
  article.facts = [...(article.facts || []).filter(f => f[0] !== "Opening"), ["Opening", "Final week of September 1974"]];
  article.related = [...(article.related || []).filter(r => r.href !== "french-occitan-war-1974.html"), {href:"french-occitan-war-1974.html",kicker:"Earlier September crisis",label:"French–Occitan War"}];
})();

(function () {
  const article = window.deepArticles["gotha-weltblick"];
  if (!article) return;
  const open = article.sections?.find(section => section.id === "open");
  if (open) open.html = open.html.replace("a project number, ", "");
})();
