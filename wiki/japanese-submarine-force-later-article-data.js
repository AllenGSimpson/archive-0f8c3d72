window.deepArticles = window.deepArticles || {};

const japaneseSubmarineLaterCanon = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
const japaneseSubmarineLaterExtrapolation = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

const japaneseSubmarineForceLater = window.deepArticles["japanese-submarine-force"];
if (japaneseSubmarineForceLater) {
  const laterSection = {
    id:"after-1985",
    title:"After the 1985 reference date",
    html:`<p>After 1985 the wider Japanese naval-reactor program moves from compact-PWR improvement toward experimental sealed uranium-233 fluoride molten-salt plants. First-of-kind shipboard installations follow in the late 1980s or 1990s, series MSR escorts emerge during the 1990s, and a normal frigate-scale plant matures around 2005–10.${japaneseSubmarineLaterCanon}</p><p>The accepted record does not assign that reactor sequence to a named submarine class or establish when attack, missile, aviation, or assault-transport boats adopt it. PWR is the confirmed operational submarine standard through 1985; the later undersea transition remains open at the 2012 canon horizon.${japaneseSubmarineLaterCanon}${japaneseSubmarineLaterExtrapolation}</p>`
  };
  if (!japaneseSubmarineForceLater.sections.some(section => section.id === laterSection.id)) {
    const statusIndex = japaneseSubmarineForceLater.sections.findIndex(section => section.id === "status");
    if (statusIndex >= 0) japaneseSubmarineForceLater.sections.splice(statusIndex, 0, laterSection);
    else japaneseSubmarineForceLater.sections.push(laterSection);
  }
  japaneseSubmarineForceLater.facts = japaneseSubmarineForceLater.facts || [];
  if (!japaneseSubmarineForceLater.facts.some(([label]) => label === "Post-1985 submarine reactor allocation")) {
    japaneseSubmarineForceLater.facts.push(["Post-1985 submarine reactor allocation","Open"]);
  }
}
