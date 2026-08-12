window.deepArticles = window.deepArticles || {};

const borneanConflictSources = [
  {href:"../transcript.md",label:"Master Transcript — Bornean revolt and corporate-security precedent, Turns 700–703"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Southern Archipelago and Japanese sphere"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Bornean Malaya crisis and settlement"},
  {href:"malay-bornean-war.html",label:"Fractured Peace Archive — Malay–Bornean War"}
];

const borneanConflictArticle = config => ({
  category:"Malay–Bornean War",
  eyebrow:"Bornean Malaya · constitutional war, 1974–1976",
  ...config,
  sources:borneanConflictSources,
  categories:config.categories || ["Malay–Bornean War","Borneo","GEACPS","1970s"]
});

Object.assign(window.deepArticles, {
  "bornean-national-council":borneanConflictArticle({
    title:"Bornean National Council",
    infoboxKicker:"Provisional representative authority of the Bornean revolt",
    landscape:{src:"assets/diagrams/bornean-succession.svg",alt:"Diagram showing the replacement of Bornean Malaya by the Bornean State",caption:"The Council's wartime program supplied the political bridge between revolt against the Malay-headed federation and an autonomy-based Bornean successor state."},
    lead:"The Bornean National Council was the provisional coalition authority formed by the Bornean revolt during the opening phase of the Malay–Bornean War. It coordinated regional institutions without immediately proclaiming a centralized republic. Its program combined Bornean national sovereignty with constituent autonomy, protection of resident communities, continued membership in the Greater East Asia Co-Prosperity Sphere, and continued Japanese strategic and commercial access.",
    canon:"The Council's existence, provisional and coalition character, federal program, claim to Bornean sovereignty, protection of resident communities, constituent autonomy, continued GEACPS membership, and acceptance of Japanese bases and commercial access are established. Its formal founding and dissolution dates, headquarters, chair, delegates, voting rules, departments, armed command, proclamations, and legal succession into the Bornean State remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>The <a href='bornean-malaya-charter-crisis.html'>charter crisis</a> turned disputes over provincial police, resource revenue, education, native councils, and corporate concessions into a contest over the nature of the state. Sarawak and North Borneo institutions rejected a stronger Malay-centered federal government. Dissolutions, arrests, emergency command, and defections then moved the dispute beyond ordinary constitutional procedure.</p>"},
      {id:"formation",title:"Formation",html:"<p>Rebel officials, assembly members, customary authorities, municipal interests, professional groups, and defecting security personnel required a common body after local forces seized radio stations, airfields, government compounds, river crossings, arms depots, and ports. The National Council provided a representative center while authority on the ground remained dispersed.</p><p>The date, place, delegates, and founding instrument have not been fixed. The title describes a provisional body rather than a completed unitary government.</p>"},
      {id:"program",title:"Political program",html:"<p>The Council demanded the end of Malay political supremacy and recognition of a Bornean national state. It coupled that claim with protection for all resident communities and autonomy for the constituent regions and peoples.</p><p>This formula made territorial citizenship compatible with Iban, other Dayak, Kadazan-Dusun, Murut, Melanau, Malay, Chinese, religious, and regional institutions. It also denied that independence required replacing one dominant nationality with another.</p>"},
      {id:"federal",title:"Federal character",html:"<p>The Council did not initially proclaim one centralized republic. Existing assemblies, customary authorities, local administrations, police commands, ports, and interior networks retained practical power. Common institutions were expected to conduct war, diplomacy, and constitutional negotiation while a later settlement determined the division of domestic powers.</p>"},
      {id:"war",title:"Role in the war",html:"<p>The Council supplied a political claim for provincial seizures and security defections, but the exact relationship between its civilian authority and armed formations remains open. The revolt depended upon towns, river routes, coastal roads, airfields, and ports as much as upon interior sanctuary.</p><p>Population protection formed part of the official program even as communal killings, expulsions, forced movement, and attacks upon local officials occurred in contested districts.</p>"},
      {id:"japan",title:"Relations with Japan",html:"<p>The Council did not begin as an anti-Japanese government. It asked Japan to apply its own doctrine of national particularism to Borneo and offered continued sphere membership, bases, strategic access, and commercial relations.</p><p>Tokyo initially continued to recognize the federal government. Treaty continuity, the Brunei monarchy, concessions, Thai concerns, and fear of a wider secession precedent delayed recognition of the Council's claim.</p>"},
      {id:"malay",title:"Relations with Malay institutions",html:"<p>The Council distinguished the political supremacy of the federal establishment from the citizenship of long-established Malay communities in Borneo. Federal supporters nevertheless treated the Council as an attempt to destroy the last recognized Malay homeland and mobilized royal, military, religious, and refugee organizations against it.</p>"},
      {id:"succession",title:"Settlement and succession",html:"<p>The <a href='malay-bornean-triangular-settlement.html'>triangular settlement</a> accepted the central Bornean claim while linking it to a restored peninsular Malayan monarchy, Thai protection, Brunei's separately guaranteed position, and Japanese strategic rights. The successor <a href='bornean-state.html'>Bornean State</a> adopted territorial nationality and layered autonomy.</p><p>Whether the Council legally transformed into the first government, transferred authority to a constituent assembly, or was replaced by a separate provisional administration remains open.</p>"}
    ],
    related:[{href:"bornean-nationalism.html",kicker:"Political movement",label:"Bornean Nationalism"},{href:"bornean-malaya-charter-crisis.html",kicker:"Founding crisis",label:"Bornean Malaya Charter Crisis"},{href:"malay-bornean-war.html",kicker:"Armed conflict",label:"Malay–Bornean War"},{href:"bornean-state.html",kicker:"Successor country",label:"Bornean State"},{href:"malay-national-crisis-bornean-war.html",kicker:"Opposing claim",label:"Malay National Crisis"}],
    facts:[["Formed","Opening phase of the Malay–Bornean War; exact date open"],["Character","Provisional federal coalition authority"],["Political objective","Bornean national sovereignty"],["Internal principle","Constituent autonomy and resident-community protection"],["External alignment","Continued GEACPS membership"],["Japanese access","Bases and commercial access accepted"],["Successor","Bornean State"],["Leadership and institutional statute","Open"]]
  }),

  "lutong-works-engagement":borneanConflictArticle({
    title:"Lutong Works Engagement",
    eyebrow:"Working operational reconstruction · 1976–1977",
    infoboxKicker:"Corporate-defense incident of the Malay–Bornean War",
    landscape:{src:"assets/diagrams/lutong-works-engagement.svg",alt:"Operational schematic of the proposed Lutong Works Engagement",caption:"Working reconstruction: armed factions approach a petroleum concession, the industrial-protection detachment holds the works, and company radio operators arrange separate ceasefires while reduced production continues."},
    lead:"The Lutong Works Engagement is the working name for one of the petroleum-site clashes in which a Japanese corporate security detachment became a tactical belligerent during the Malay–Bornean War. In the current reconstruction, guards held the Lutong refinery and tank farm through one or two days of confused fighting, denied entry to armed forces seeking fuel or control of the works, and negotiated separate ceasefires while the surrounding district changed hands. The existence of one or two such engagements in 1976–1977 is established; the identification of Lutong as the site remains working rather than final canon.",
    canon:"Corporate participation in one or two petroleum-site engagements during 1976–1977, fixed-property defense, sustained fire against forces seeking entry, Japanese non-intervention as plant guards, and subsequent restriction of overseas corporate security are established. Lutong, the duration of one or two days, continued reduced production, separate ceasefires, and the surrounding district's change of control form a working reconstruction. The date, company, commanders, belligerent identities, strengths, weapons, losses, precise plant layout, and operational sequence remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>By 1976 the <a href='malay-bornean-war.html'>Malay–Bornean War</a> threatened oilfields, refineries, pipelines, tank farms, ports, company settlements, and evacuation routes. Japanese concession holders expanded ordinary guards into armed <a href='corporate-security-malay-bornean-war.html'>industrial-protection detachments</a> rather than request Japanese military occupation of every installation.</p>"},
      {id:"site",title:"The Lutong works",html:"<p>Lutong, near Miri on the northern Bornean coast, provides the working site because a refinery, storage, communications, roads, technical personnel, and nearby contested districts place commercial infrastructure directly inside the operational problem. This selection is not yet a settled identification of the canonical engagement.</p>"},
      {id:"forces",title:"Forces",html:"<p>The defending detachment would have combined Japanese security managers, former servicemen, technically trained employees, and locally recruited guards. Corporate formations used rifles, submachine guns, light machine guns, grenades, radios, company trucks, barriers, and industrial fire services. They had no tanks, field artillery, combat aircraft, or independent campaign logistics.</p><p>The attacking or approaching force may have been a federal Malay column, Bornean militia, or separate elements of both. Final belligerent identities remain open.</p>"},
      {id:"objectives",title:"Objectives",html:"<p>The guards' mandate was to protect personnel and the concession, prevent sabotage and fire, deny unauthorized armed entry, and preserve essential operations. Outside forces could seek fuel, communications, transport, shelter, or the political value of controlling the installation.</p><p>Corporate personnel did not claim authority over the surrounding district or an offensive right to campaign beyond the works.</p>"},
      {id:"fighting",title:"Fighting",html:"<p>In the working reconstruction, armed forces approached or entered the concession perimeter and the guards refused access. Sustained small-arms fire followed around the refinery and tank farm. The engagement lasted approximately one or two days while the broader front remained confused.</p><p>No casualty total, tactical map, unit designation, or verified sequence of attacks has been fixed. The engagement should therefore not be treated as a surveyed battle record.</p>"},
      {id:"ceasefires",title:"Separate ceasefires",html:"<p>Company radio operators negotiated separately with the relevant federal and Bornean commands. The arrangements treated the concession as a limited exclusion zone without requiring either side to recognize the other's political claims.</p><p>This made industrial continuity possible even if control of the surrounding district changed during or shortly after the engagement.</p>"},
      {id:"production",title:"Operational effect",html:"<p>The works continued producing at reduced capacity in the working account. Keeping fuel and refinery systems intact benefited Japan's regional supply network and denied both local sides the political leverage that would follow from destruction of the plant.</p><p>The episode allowed Tokyo to remain a mediator rather than deploy national forces as concession guards.</p>"},
      {id:"legacy",title:"Regulation and memory",html:"<p>After the settlement, Japan registered and restricted overseas corporate security. Guards could defend fixed property but could not conduct offensive operations outside a concession or possess heavy weapons.</p><p>Later popular and cyberpunk accounts treated Borneo as the moment Japanese companies raised private armies. Contemporary regulation instead treated the engagement as an exceptional industrial-defense problem that had come dangerously close to corporate foreign policy.</p>"}
    ],
    related:[{href:"corporate-security-malay-bornean-war.html",kicker:"Parent subject",label:"Corporate Security in the War"},{href:"japanese-strategic-intervention-malay-bornean-war.html",kicker:"State response",label:"Japanese Strategic Intervention"},{href:"zaibatsu-security-forces.html",kicker:"Wider institution",label:"Zaibatsu Security Forces"},{href:"bornean-malaya-charter-crisis.html",kicker:"Preceding crisis",label:"Bornean Malaya Charter Crisis"},{href:"bornean-national-council.html",kicker:"Bornean authority",label:"Bornean National Council"}],
    facts:[["Status","Working reconstruction of an established class of incident"],["Period","1976–1977; exact date open"],["Location","Lutong refinery and tank farm, near Miri; working"],["Defender","Japanese corporate industrial-protection detachment"],["Other belligerents","Federal Malay and/or Bornean forces; open"],["Duration","One or two days; working"],["Result","Works held and reduced production continued; working"],["Casualties","Open"]]
  })
});

const addBorneanConflictRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...(article.related || []), ...links.filter(link => !(article.related || []).some(existing => existing.href === link.href))];
};

addBorneanConflictRelated("bornean-malaya-charter-crisis",[{href:"bornean-national-council.html",kicker:"Provisional opposition authority",label:"Bornean National Council"}]);
addBorneanConflictRelated("bornean-nationalism",[{href:"bornean-national-council.html",kicker:"Wartime institution",label:"Bornean National Council"}]);
addBorneanConflictRelated("bornean-state",[{href:"bornean-national-council.html",kicker:"Provisional predecessor",label:"Bornean National Council"}]);
addBorneanConflictRelated("malay-bornean-war",[{href:"bornean-national-council.html",kicker:"Bornean political authority",label:"Bornean National Council"},{href:"lutong-works-engagement.html",kicker:"Corporate-defense incident",label:"Lutong Works Engagement"}]);
addBorneanConflictRelated("japanese-strategic-intervention-malay-bornean-war",[{href:"lutong-works-engagement.html",kicker:"Corporate-security precedent",label:"Lutong Works Engagement"}]);
addBorneanConflictRelated("zaibatsu-security-forces",[{href:"lutong-works-engagement.html",kicker:"Bornean working case",label:"Lutong Works Engagement"}]);

const corporateBorneo = window.deepArticles["corporate-security-malay-bornean-war"];
if (corporateBorneo) {
  corporateBorneo.landscape = {src:"assets/diagrams/lutong-works-engagement.svg",alt:"Operational schematic of the working Lutong Works Engagement",caption:"The Bornean exception remained fixed-site defense: armed factions approached a concession, corporate guards held the works, and company radio operators sought separate ceasefires."};
  const formation = corporateBorneo.sections?.find(section => section.id === "formation");
  if (formation) formation.html += "<p>Contemporary and later accounts describe these fixed-site formations generically as <strong>industrial-protection detachments</strong>.</p>";
  const engagements = corporateBorneo.sections?.find(section => section.id === "engagements");
  if (engagements) engagements.html = "<p>In one or two incidents during 1976–1977, fighting reached major petroleum installations and corporate guards exchanged sustained fire with forces seeking fuel, communications, access, or control of the works. The <a href='lutong-works-engagement.html'>Lutong Works Engagement</a> is the current working reconstruction of one such clash; its site, company, combatants, and battle title remain open rather than final canon.</p>";
  const settlement = corporateBorneo.sections?.find(section => section.id === "settlement");
  if (settlement) settlement.html = "<p>Most Japanese concessions survived through renegotiation with the Bornean and Malayan successor governments. Japan registered overseas corporate security, required weapons records and national liaison, and restricted guards to fixed-property defense. They could not conduct offensive operations beyond concession boundaries or possess heavy weapons.</p>";
  corporateBorneo.related = [...(corporateBorneo.related || []),{href:"lutong-works-engagement.html",kicker:"Working engagement",label:"Lutong Works Engagement"}];
  corporateBorneo.facts = (corporateBorneo.facts || []).map(row => row[0] === "Known combat" ? ["Known combat","One or two petroleum-site engagements, 1976–1977; Lutong is working"] : row);
}

const warOverview = window.deepArticles["malay-bornean-war"];
if (warOverview) {
  const councilSection = {id:"national-council",title:"Bornean National Council",html:"<p>The revolt formed a provisional <a href='bornean-national-council.html'>Bornean National Council</a> rather than immediately proclaiming a centralized republic. Its program joined Bornean sovereignty, constituent autonomy, resident-community protection, continued GEACPS membership, and continued Japanese strategic and commercial access.</p>"};
  const sections = warOverview.sections || [];
  const corporateIndex = sections.findIndex(section => section.id === "corporate-forces");
  if (!sections.some(section => section.id === "national-council")) sections.splice(corporateIndex >= 0 ? corporateIndex : sections.length,0,councilSection);
}
