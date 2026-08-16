(() => {
  const article = window.deepArticles && window.deepArticles["latin-recoverable-capsule-program"];
  if (!article) return;

  article.sections = article.sections || [];
  if (!article.sections.some(section => section.id === "acceptance")) {
    const acceptance = {
      id:"acceptance",
      title:"Test evidence and acceptance",
      html:`<!-- altwwii-writer-block:start id=wb-s-20260816-y3k8n writer=s kind=technical created=2026-08-16T13:18:00-06:00 --><p>The 1969 effort required an evidence chain across component tests, descent trials, reentry articles, tracking, and naval exercises. The established record does not fix how many orbital flights or aircraft drops supplied that evidence. A useful test article had controlled mass, center of gravity, inertia, heat-shield geometry, parachute attachments, flotation volume, and beacon installation so that its loads and recovery behavior represented the intended capsule.</p><p>Entry reconstruction joined the separation or deorbit state with accelerometer, attitude, pressure, and temperature records. Descent records identified cover release, extraction, line stretch, inflation and reefing events, vertical and horizontal rates, oscillation, and landing position. Postlanding records added impact acceleration, leakage, flotation attitude, beacon acquisition, drift, crew or biological-environment continuity, and the time and condition at retrieval. Exact instruments and sampling rates remain open.</p><p>Recovered hardware supplied evidence unavailable from telemetry alone. Engineers could inspect thermal-protection recession and bonding, seals, local structure, parachute fabric and lines, cutters, risers, flotation devices, antennas, water ingress, corrosion, and damage introduced during hoisting. Flight data, photography, station logs, ship logs, and post-recovery inspection were reconciled before an anomaly was assigned to the capsule, range, weather estimate, or recovery procedure.</p><p>Biological results were interpretable only with the vehicle history. Acceleration, cabin pressure and composition, temperature, humidity, vibration, mission duration, splashdown shock, sea motion, and recovery delay separated exposure effects from handling after landing. Acceptance for the later Aquila line depended on repeatable interfaces and test methods as well as on any single capsule's survival.</p><!-- altwwii-writer-block:end -->`
    };
    const descentIndex = article.sections.findIndex(section => section.id === "descent");
    article.sections.splice(descentIndex >= 0 ? descentIndex + 1 : article.sections.length, 0, acceptance);
  }

  article.related = article.related || [];
  [
    {href:"spacecraft-parachute-systems.html",kicker:"Descent subsystem",label:"Spacecraft Parachute Systems"},
    {href:"spacecraft-water-landing-systems.html",kicker:"Impact and flotation",label:"Spacecraft Water-Landing Systems"},
    {href:"atmospheric-entry-systems.html",kicker:"Return environment",label:"Atmospheric Entry Systems"}
  ].forEach(item => {
    if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
  });

  article.sources = article.sources || [];
  [
    {href:"https://ntrs.nasa.gov/api/citations/19740003586/downloads/19740003586.pdf",label:"NASA Apollo Experience Report — parachute landing-system development and qualification"},
    {href:"https://ntrs.nasa.gov/api/citations/19730010171/downloads/19730010171.pdf",label:"NASA Apollo Experience Report — flotation attitudes and uprighting"}
  ].forEach(item => {
    if (!article.sources.some(existing => existing.href === item.href)) article.sources.push(item);
  });

  article.facts = article.facts || [];
  if (!article.facts.some(item => item[0] === "Acceptance evidence")) {
    const payloadIndex = article.facts.findIndex(item => item[0] === "Payload work");
    article.facts.splice(payloadIndex >= 0 ? payloadIndex : article.facts.length, 0, ["Acceptance evidence","Trajectory · loads · environment · recovery · inspection"]);
  }
})();
