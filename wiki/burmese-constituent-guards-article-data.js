window.deepArticles = window.deepArticles || {};

const burmeseGuardSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Burma and its federal settlements"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Burma and the Indian frontier"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Burmese wars and settlements"},
  {href:"../transcript.md",label:"Master Transcript — Burmese federal order, Turns 704–711"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — P1-32 Burmese wars and Thai protectorate"}
];

const burmeseGuardLandscape = {
  src:"assets/diagrams/burmese-armed-federalism.svg",
  alt:"Division of armed authority among the Union Army, State Guards, Thailand, and Japan",
  caption:"Each constituent Guard exercises local armed authority beneath the common heavy-force and external-guarantee system"
};

const burmeseGuardArticle = config => ({
  category:"Burmese constituent forces",
  eyebrow:"State Guard · Burmese armed federalism",
  infoboxKicker:"Constituent armed force",
  landscape:burmeseGuardLandscape,
  ...config,
  sources:burmeseGuardSources,
  categories:config.categories || ["Burma","State Guards","Burmese armed federalism"]
});

Object.assign(window.deepArticles, {
  "shan-state-guard": burmeseGuardArticle({
    title:"Shan State Guard",
    lead:"The Shan State Guard is the permanent infantry and internal-security force of the Federated Shan State. It patrols Burma's broad eastern frontier, supports the State Council and protected regional institutions, and provides the largest constituent military counterweight to the Union Army without possessing independent armor, major artillery, or combat aviation.",
    canon:"The Guard's constitutional existence, Shan-government command, infantry, border-security and policing functions, relationship with protected districts, Thai access, Japanese guarantee, heavy-force restrictions, and role in repeated federal crises are established. Headquarters, commanders, ranks, strength, unit names, recruitment law, detailed equipment, and exact wartime deployments remain open.",
    sections:[
      {id:"foundation",title:"Legal foundation",html:"<p>The Rangoon Settlement recognizes the Guard as an institution of the Federated Shan State. Its continued existence makes the State Council's authority enforceable and prevents local administration from depending entirely upon Union units.</p>"},
      {id:"command",title:"Command",html:"<p>The Guard answers to the Shan government in ordinary conditions. The State Council's princely, regional, and constitutional components make command politically negotiated; the exact ministerial chain and senior appointments remain open.</p>"},
      {id:"districts",title:"Protected districts",html:"<p>Wa, Pa-O, Ta’ang/Palaung, Kokang, and other protected districts retain local councils and security interests. Guard deployments cannot lawfully convert Shan federal autonomy into centralized rule over these communities.</p>"},
      {id:"missions",title:"Missions",html:"<p>Principal work includes frontier patrol, rural gendarmerie, convoy and road security, reconnaissance, counter-smuggling duties, support to civil authorities, and protection of state institutions. Mountain and valley geography favors dispersed infantry and local scouts.</p>"},
      {id:"equipment",title:"Equipment and limits",html:"<p>Rifles, machine guns, light mortars, local radios, trucks, and pack transport fall within the normal State-Guard ceiling. Tanks, major artillery, combat aircraft, and independent foreign procurement remain Union or externally controlled capabilities.</p>"},
      {id:"union",title:"Relations with the Union Army",html:"<p>The Union retains strategic corridors, airfields, heavy forces, and external defense. Ordinary entry into protected territory requires notification and liaison, while foreign war places the Guard under coordinated Union command without abolishing its state identity.</p>"},
      {id:"external",title:"Thailand and Japan",html:"<p>Thai frontier officers, transport networks, intelligence contacts, and military assistance influence daily conditions. Japan supplies the final recognition and matériel ceiling and prevents either Rangoon or Bangkok from extinguishing Shan armed autonomy.</p>"},
      {id:"wars",title:"Federal wars and protectorate",html:"<p>Shan mobilization is central to the Federal Crisis, the Second Burmese War, the Sovereign States Experiment, and the later War of the Burmese States. Under Thai protection the Guard survives as a Burmese constituent force subject to closer external supervision.</p>"}
    ],
    related:[{href:"shan-state.html",kicker:"Constituent government",label:"Federated Shan State"},{href:"burmese-state-guards.html",kicker:"Force system",label:"State Guards of Burma"},{href:"union-army-burma.html",kicker:"Common heavy force",label:"Union Army of Burma"},{href:"federal-military-liaison-burma.html",kicker:"Deployment procedure",label:"Federal Military Liaison"},{href:"thai-protectorate-burma.html",kicker:"Mature security order",label:"Thai Protectorate over Burma"}],
    facts:[["State","Federated Shan State"],["Normal command","Shan state government"],["Principal missions","Frontier security, infantry, policing, and reconnaissance"],["Protected districts","Wa, Pa-O, Ta’ang/Palaung, Kokang, and others"],["Heavy weapons","Restricted"],["Foreign-war status","Coordinated Union command"],["Principal daily external influence","Thailand"],["Headquarters, strength, and commanders","Open"]]
  }),

  "kachin-state-guard": burmeseGuardArticle({
    title:"Kachin State Guard",
    lead:"The Kachin State Guard is the permanent military and border-security force of Kachin State. British-trained service traditions, mountain warfare experience, inaccessible terrain, and control of northern resource districts make it one of Burma's strongest light-infantry institutions.",
    canon:"The Guard's constitutional status, Kachin-government command, mountain light-infantry and reconnaissance specialization, border and resource-security roles, restrictions on Union entry, Japanese supply dependence, and weak Thai influence are established. Headquarters, commanders, ranks, strength, unit lineages, recruitment, exact weapons, and district organization remain open.",
    sections:[
      {id:"foundation",title:"Formation",html:"<p>Wartime recruitment and frontier defense leave Kachin authorities with trained personnel and armed organizations that Rangoon cannot disband cheaply. The Rangoon Settlement converts that inheritance into a constitutional State Guard.</p>"},
      {id:"command",title:"Command",html:"<p>The Guard answers to the Kachin government in ordinary conditions and operates alongside chiefs, regional councils, churches, and civil ministries. The precise military ministry and senior command structure remain unsettled.</p>"},
      {id:"missions",title:"Mountain and border missions",html:"<p>Mountain patrol, reconnaissance, pass security, counter-smuggling work, local counterinsurgency, convoy escort, and support to remote civil authorities form its characteristic duties. Territorial knowledge is a principal military asset.</p>"},
      {id:"resources",title:"Resource districts",html:"<p>Jade, timber, mineral, and hydroelectric districts require road, camp, and concession security. Guard presence also gives the state leverage in disputes over royalties, employment, land protection, and settlement.</p>"},
      {id:"equipment",title:"Equipment and mobility",html:"<p>Light infantry weapons, machine guns, mortars, radios, trucks, and pack transport suit the terrain. The Guard does not normally possess tanks, major artillery, combat aircraft, or an independent foreign supply system.</p>"},
      {id:"union",title:"Union liaison",html:"<p>Union aviation, artillery, bases, and strategic corridors remain present in the north. Entry into ordinary Kachin districts requires notification and liaison, and foreign war brings coordinated Union command while preserving the Guard's institutional identity.</p>"},
      {id:"frontiers",title:"Northern frontiers",html:"<p>Chinese and Indian approaches carry refugees, contraband, weapons, and military traffic. Japanese advisers and communications support connect local observation to the wider Sphere security system.</p>"},
      {id:"continuity",title:"Later continuity",html:"<p>The Guard resists central integration during successive federal crises and survives both temporary sovereign statehood and restoration of the Union. Thailand exercises less direct influence here than along the eastern frontier.</p>"}
    ],
    related:[{href:"kachin-state.html",kicker:"Constituent government",label:"Kachin State"},{href:"burmese-state-guards.html",kicker:"Force system",label:"State Guards of Burma"},{href:"burmese-strategic-transport-corridors.html",kicker:"Northern routes",label:"Strategic Transport Corridors"},{href:"federal-military-liaison-burma.html",kicker:"Union access",label:"Federal Military Liaison"},{href:"japanese-military-mission-burma.html",kicker:"External support",label:"Japanese Military Mission"}],
    facts:[["State","Kachin State"],["Normal command","Kachin state government"],["Specialization","Mountain light infantry and reconnaissance"],["Principal missions","Border, resource-district, convoy, and local security"],["Mobility","Light vehicles and pack transport"],["Union entry","Subject to notification and liaison"],["Principal external guarantor","Japan"],["Headquarters, strength, and commanders","Open"]]
  }),

  "chin-state-guard": burmeseGuardArticle({
    title:"Chin State Guard",
    lead:"The Chin State Guard is the lightly armed frontier force of Chin State's district federation. It patrols passes, supports local councils, monitors refugees and smuggling from the Indian successor wars, and provides a limited armed guarantee for a poor state dependent upon Union and Japanese subsidy.",
    canon:"A light State Guard and border-scout system, district-government command, pass and refugee security, Indian-war exposure, subsidy dependence, Japanese aviation and communications support, Naga boundary sensitivity, heavy-force restrictions, and later survival are established. Official title, headquarters, commanders, ranks, strength, unit organization, recruitment, and exact equipment remain open.",
    sections:[
      {id:"foundation",title:"Legal foundation",html:"<p>The Rangoon Settlement recognizes a local armed institution suited to a state governed through scattered district councils rather than a dense central administration. The Guard links those councils to common defense.</p>"},
      {id:"command",title:"District command environment",html:"<p>State authority is distributed among councils, chiefs, churches, schools, and administrators. Guard command must work through this geography; the source record does not establish a single dominant headquarters or complete centralized chain.</p>"},
      {id:"missions",title:"Frontier missions",html:"<p>Border scouts and light infantry watch passes, accompany officials, secure relief movements, monitor armed groups and smugglers, and support local policing. Refugee handling often consumes more effort than conventional defense.</p>"},
      {id:"india",title:"Indian-war spillover",html:"<p>Weapons, political movements, displaced people, and fighting cross the western hills. Airstrips, radios, restricted routes, and liaison posts function as security infrastructure as much as development works.</p>"},
      {id:"naga",title:"Naga frontier",html:"<p>Naga districts remain separately autonomous or frontier-administered rather than unconditionally subordinate to Chin institutions. The Guard's exact jurisdiction along this boundary remains part of the unsettled territorial settlement.</p>"},
      {id:"equipment",title:"Equipment and supply",html:"<p>Rifles, machine guns, light mortars, radios, pack transport, and a small vehicle pool match the legal ceiling and poor roads. Japan supplies important aviation, communications, finance, and technical support without granting an independent heavy force.</p>"},
      {id:"union",title:"Common defense",html:"<p>The Union retains external defense, strategic corridors, and heavy weapons. During foreign war the Guard enters coordinated Union command while continuing to answer administratively to Chin authorities.</p>"},
      {id:"continuity",title:"Continuity",html:"<p>The Guard participates in larger federal conflicts without becoming a force for regional supremacy. Its dependence on subsidy and external transport continues through sovereign separation, restored Union, and Thai protection.</p>"}
    ],
    related:[{href:"chin-state.html",kicker:"Constituent government",label:"Chin State"},{href:"burmese-state-guards.html",kicker:"Force system",label:"State Guards of Burma"},{href:"burmese-strategic-transport-corridors.html",kicker:"Western approaches",label:"Strategic Transport Corridors"},{href:"india-successors.html",kicker:"Frontier context",label:"Indian Successor States"},{href:"japanese-military-mission-burma.html",kicker:"External support",label:"Japanese Military Mission"}],
    facts:[["State","Chin State"],["Normal command","Chin district-federal government"],["Principal forces","Light infantry and border scouts"],["Principal missions","Pass, refugee, smuggling, and local security"],["Strategic context","Indian successor wars"],["Economic basis","Subsidy-dependent"],["Heavy weapons","Restricted"],["Headquarters, strength, and commanders","Open"]]
  }),

  "karen-state-guard": burmeseGuardArticle({
    title:"Karen State Guard",
    lead:"The Karen State Guard is the permanent frontier-infantry and internal-security force of Karen State. It protects the southeastern territorial state, maintains military liaison along the Thai frontier, and embodies armed Karen autonomy while the status of large Karen communities in the Irrawaddy delta remains separately protected and politically disputed.",
    canon:"The Guard's constitutional existence, Karen-government command, frontier-infantry and local-security functions, Thai access, Japanese limits on Thai control, heavy-force restrictions, participation in repeated wars, and survival under the protectorate are established. Headquarters, commanders, ranks, strength, unit lineages, recruitment, exact equipment, and jurisdiction in protected delta districts remain open.",
    sections:[
      {id:"foundation",title:"Formation",html:"<p>Karen wartime organizations and frontier forces survive the Companion War as a political fact. The Rangoon Settlement recognizes a State Guard instead of attempting immediate disarmament or full absorption into the Union Army.</p>"},
      {id:"territory",title:"Territorial jurisdiction",html:"<p>The Guard principally serves the recognized southeastern state along the Salween and Thai frontier. Large Karen communities in the delta and lower Burma possess protected institutions outside that territory; the Guard's authority there is not established.</p>"},
      {id:"missions",title:"Missions",html:"<p>Frontier patrol, local security, convoy protection, reconnaissance, support to civil administration, and defense of state institutions form its ordinary work. The Thai-facing geography gives liaison and movement control unusual importance.</p>"},
      {id:"religion",title:"Community protection",html:"<p>Christian and Buddhist Karen institutions both fall within the political settlement. Guard service supplies organized armed identity, but it does not settle religious, regional, or delta-frontier differences within the wider nationality.</p>"},
      {id:"equipment",title:"Equipment and limits",html:"<p>The normal inventory centers on infantry weapons, machine guns, light mortars, radios, trucks, and terrain-appropriate transport. Combat aircraft, major artillery, tanks, and independent external supply remain prohibited or centrally controlled.</p>"},
      {id:"thailand",title:"Thai frontier relationship",html:"<p>Trade, refuge, intelligence, transport, churches, and military liaison create close Thai connections. Japan prevents those connections from becoming a separate Thai protectorate before the later all-Burma settlement.</p>"},
      {id:"union",title:"Union relations",html:"<p>Union control of major corridors and the Rangoon approaches requires continuing liaison. In external war the Guard joins coordinated common command while retaining its personnel system and constituent identity.</p>"},
      {id:"wars",title:"War and protectorate",html:"<p>Karen forces participate in every major Burmese war and in corridor disputes with Bamar and Mon authorities. Thai protection later strengthens daily external supervision without resolving the territorial division of the Karen population.</p>"}
    ],
    related:[{href:"karen-state.html",kicker:"Constituent government",label:"Karen State"},{href:"burmese-state-guards.html",kicker:"Force system",label:"State Guards of Burma"},{href:"mon-state-guard.html",kicker:"Southeastern counterpart",label:"Mon State Guard"},{href:"federal-military-liaison-burma.html",kicker:"Union coordination",label:"Federal Military Liaison"},{href:"thai-security-command-burma.html",kicker:"Mature supervision",label:"Thai Security Command in Burma"}],
    facts:[["State","Karen State"],["Normal command","Karen state government"],["Principal missions","Frontier infantry, local security, and reconnaissance"],["Principal theater","Salween and Thai frontier"],["Delta jurisdiction","Open; protected districts remain outside the territorial state"],["Heavy weapons","Restricted"],["Principal external influence","Thailand"],["Headquarters, strength, and commanders","Open"]]
  }),

  "karenni-state-guard": burmeseGuardArticle({
    title:"Karenni State Guard",
    lead:"The Karenni State Guard is the small border-security and local-defense force of Karenni State. Its limited scale reflects the state's compact population and economy, while its constitutional permanence makes forced amalgamation with Karen, Shan, or Union institutions politically and militarily costly.",
    canon:"A separate Karenni State Guard, command by the constituent government, border and local-security functions, light-force ceiling, dependence on external infrastructure, and survival through sovereign and protectorate settlements are established. Official title, headquarters, commanders, ranks, strength, unit organization, recruitment, and exact equipment remain open.",
    sections:[
      {id:"foundation",title:"Legal foundation",html:"<p>Karenni enters the federal order with inherited princely territory and a separate armed institution. The Rangoon Settlement preserves the Guard as part of the state's distinct constitutional personality.</p>"},
      {id:"command",title:"Command",html:"<p>The Guard answers to Karenni rulers or their constitutional successors and the small state administration. The exact division between court, council, ministry, and professional command remains unsettled.</p>"},
      {id:"missions",title:"Missions",html:"<p>Border patrol, local policing support, route security, reconnaissance, and protection of state institutions form the normal mission set. Limited manpower favors small territorial units and local knowledge.</p>"},
      {id:"equipment",title:"Equipment and limits",html:"<p>Infantry weapons, machine guns, light mortars, radios, light vehicles, and pack transport fit the common State-Guard ceiling. The force possesses no lawful independent armor, combat aviation, or major artillery.</p>"},
      {id:"neighbors",title:"Relations with neighboring forces",html:"<p>Shan, Karen, Union, and later Thai forces can exceed Karenni capacity. Notification, liaison, external guarantees, and the political cost of absorption are therefore as important as the Guard's own firepower.</p>"},
      {id:"economy",title:"Support and infrastructure",html:"<p>Agriculture, forest routes, and frontier trade provide a narrow fiscal base. Union, Thai, and Japanese transport, communications, and financial support remain consequential to sustained operations.</p>"},
      {id:"union",title:"Common defense",html:"<p>The Union retains foreign policy, external defense, strategic movement, and heavy weapons. The Guard enters coordinated Union command during foreign war while remaining a Karenni institution.</p>"},
      {id:"continuity",title:"Sovereign and protectorate phases",html:"<p>Temporary international sovereignty does not remove dependence on common currency, roads, and supply. The Guard survives restoration of the Union and the Thai protectorate as the armed expression of continued separate statehood.</p>"}
    ],
    related:[{href:"karenni-state.html",kicker:"Constituent government",label:"Karenni State"},{href:"burmese-state-guards.html",kicker:"Force system",label:"State Guards of Burma"},{href:"karen-state-guard.html",kicker:"Southern counterpart",label:"Karen State Guard"},{href:"shan-state-guard.html",kicker:"Northern counterpart",label:"Shan State Guard"},{href:"sovereign-states-experiment.html",kicker:"Temporary sovereign phase",label:"Sovereign States Experiment"}],
    facts:[["State","Karenni State"],["Normal command","Karenni constituent government"],["Scale","Small light force"],["Principal missions","Border, route, local, and institutional security"],["Heavy weapons","Restricted"],["Principal dependencies","Common roads, finance, communications, and supply"],["External guarantors","Japan; later Thai security protection"],["Headquarters, strength, and commanders","Open"]]
  }),

  "mon-state-guard": burmeseGuardArticle({
    title:"Mon State Guard",
    lead:"The Mon State Guard is the comparatively small policing and local-defense force of Mon State. It protects state institutions, municipalities, and local routes while the Union retains unusually strong authority over Moulmein port, railways, strategic roads, major bases, and the southeastern transport corridor.",
    canon:"The Guard's constitutional existence, Mon-government command, smaller scale, policing and local-defense emphasis, protection of state institutions, Union strategic rights, Thai commercial influence, heavy-force restrictions, and later survival are established. Official title, headquarters, commanders, ranks, strength, units, recruitment, and exact equipment remain open.",
    sections:[
      {id:"foundation",title:"Legal foundation",html:"<p>Recognition of Mon statehood includes a permanent local force, although Mon autonomy develops primarily through language, schools, Buddhist history, broadcasting, and municipal government rather than a large frontier army.</p>"},
      {id:"command",title:"Command",html:"<p>The Guard answers to the Mon state government in ordinary conditions and supports municipal and civil authorities. The precise ministerial and police boundary remains open.</p>"},
      {id:"missions",title:"Missions",html:"<p>Local defense, policing support, protection of government and cultural institutions, route security, convoy escort, and limited coastal observation form its principal work.</p>"},
      {id:"ports",title:"Ports and corridors",html:"<p>Moulmein port, railways, military roads, airfields, and Japanese facilities remain under stronger Union authority than strategic sites in remote frontier states. The Guard normally secures adjacent communities rather than controlling the entire corridor.</p>"},
      {id:"equipment",title:"Equipment and limits",html:"<p>Infantry weapons, machine guns, light mortars, radios, and light vehicles comprise the ordinary ceiling. The Guard lacks independent armor, major artillery, combat aircraft, and foreign supply agreements.</p>"},
      {id:"neighbors",title:"Karen and Bamar relations",html:"<p>Overlapping claims to roads, ports, valleys, and communities produce recurring friction with Karen forces and the Bamar center. Liaison is required because no party can isolate its security from the southeastern network.</p>"},
      {id:"thailand",title:"Thai influence",html:"<p>Thai commerce, transport, and protectorate institutions become increasingly important. Japan-backed Union agreements continue to govern strategic ports and bases.</p>"},
      {id:"continuity",title:"War and later continuity",html:"<p>The Guard participates in the sovereign-state phase and the War of the Burmese States, then returns to constituent status. Cultural autonomy remains broader than strategic autonomy under the mature protectorate.</p>"}
    ],
    related:[{href:"mon-state.html",kicker:"Constituent government",label:"Mon State"},{href:"burmese-state-guards.html",kicker:"Force system",label:"State Guards of Burma"},{href:"karen-state-guard.html",kicker:"Frontier counterpart",label:"Karen State Guard"},{href:"burmese-strategic-transport-corridors.html",kicker:"Common infrastructure",label:"Strategic Transport Corridors"},{href:"thai-protectorate-burma.html",kicker:"Mature order",label:"Thai Protectorate over Burma"}],
    facts:[["State","Mon State"],["Normal command","Mon state government"],["Relative scale","Smaller State Guard"],["Principal missions","Policing, local defense, institutional and route security"],["Union strategic rights","Ports, railways, major roads, airfields, and bases"],["Heavy weapons","Restricted"],["Principal external influence","Thailand"],["Headquarters, strength, and commanders","Open"]]
  }),

  "arakan-state-guard": burmeseGuardArticle({
    title:"Arakan State Guard",
    lead:"The Arakan State Guard is the local infantry and security force of the Rakhine-led Arakan State. It operates inside a divided constitutional environment in which the northern Muslim district retains protected institutions and the Union exercises unusual authority over ports, coastal surveillance, foreign crossings, and frontier security.",
    canon:"The Guard's constitutional existence, command by Arakan's constituent government, local infantry and security functions, protected northern Muslim district, Union control of coast and frontier security, Indian-war spillover, heavy-force restrictions, Japanese guarantee, and limited Thai role are established. Official title, headquarters, commanders, ranks, strength, units, recruitment, exact equipment, and district command arrangements remain open.",
    sections:[
      {id:"foundation",title:"Legal foundation",html:"<p>The Rangoon Settlement recognizes armed constituent authority in Arakan while preserving special protections for the northern Muslim district and common control over security matters capable of drawing in foreign actors.</p>"},
      {id:"command",title:"Command",html:"<p>The Guard answers to the Rakhine-led state government in ordinary conditions. Its relationship with protected district councils, local police, and community security organizations remains deliberately constrained and incompletely specified.</p>"},
      {id:"missions",title:"Missions",html:"<p>Local infantry, rural security, route patrol, convoy escort, support to civil authorities, and protection of state institutions form the ordinary mission. Communal incidents can require immediate Union and Japanese liaison.</p>"},
      {id:"north",title:"Protected northern district",html:"<p>Muslim communities retain religion, municipal government, personal law, representation, and security guarantees. The Guard cannot treat the protected district as an ordinary area of unconditional Rakhine consolidation.</p>"},
      {id:"coast",title:"Coast and frontier",html:"<p>The Union retains major ports, coastal surveillance, foreign crossings, and the heaviest frontier-security responsibilities. Guard patrols operate beside common forces and liaison arrangements rather than replacing them.</p>"},
      {id:"spillover",title:"Indian-war spillover",html:"<p>Refugees, smugglers, arms, militants, and political networks cross the western approaches. Local arrests or patrol clashes can rapidly become regional or Union-level crises.</p>"},
      {id:"equipment",title:"Equipment and limits",html:"<p>Rifles, machine guns, light mortars, radios, trucks, boats, and other light transport fit the constitutional ceiling. Major artillery, armor, combat aircraft, and independent foreign supply remain prohibited or centrally controlled.</p>"},
      {id:"continuity",title:"Sovereign and protectorate phases",html:"<p>Sovereign Arakan reopens the northern district question without resolving it. After restoration of the Union, Japanese and common security observation remain more important than Thai influence.</p>"}
    ],
    related:[{href:"arakan-state.html",kicker:"Constituent government",label:"Arakan State"},{href:"burmese-state-guards.html",kicker:"Force system",label:"State Guards of Burma"},{href:"chin-state-guard.html",kicker:"Northern counterpart",label:"Chin State Guard"},{href:"burmese-crisis-escalation-control.html",kicker:"Incident hierarchy",label:"Escalation Control in Burmese Crises"},{href:"india-successors.html",kicker:"Western security context",label:"Indian Successor States"}],
    facts:[["State","Arakan State"],["Normal command","Arakan state government"],["Principal missions","Local infantry, route, communal, and institutional security"],["Protected region","Northern Muslim district"],["Union retains","Ports, coastal surveillance, crossings, and major frontier security"],["Heavy weapons","Restricted"],["Principal external guarantor","Japan"],["Headquarters, strength, and commanders","Open"]]
  })
});

const addConstituentGuardRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...(article.related || []), ...links.filter(link => !(article.related || []).some(existing => existing.href === link.href))];
};

addConstituentGuardRelated("burmese-state-guards",[
  {href:"shan-state-guard.html",kicker:"Eastern force",label:"Shan State Guard"},
  {href:"kachin-state-guard.html",kicker:"Northern force",label:"Kachin State Guard"},
  {href:"chin-state-guard.html",kicker:"Western highland force",label:"Chin State Guard"},
  {href:"karen-state-guard.html",kicker:"Southeastern force",label:"Karen State Guard"},
  {href:"karenni-state-guard.html",kicker:"Small frontier force",label:"Karenni State Guard"},
  {href:"mon-state-guard.html",kicker:"Coastal force",label:"Mon State Guard"},
  {href:"arakan-state-guard.html",kicker:"Western coastal force",label:"Arakan State Guard"}
]);

[
  ["shan-state","shan-state-guard.html","Armed institution","Shan State Guard"],
  ["kachin-state","kachin-state-guard.html","Armed institution","Kachin State Guard"],
  ["chin-state","chin-state-guard.html","Armed institution","Chin State Guard"],
  ["karen-state","karen-state-guard.html","Armed institution","Karen State Guard"],
  ["karenni-state","karenni-state-guard.html","Armed institution","Karenni State Guard"],
  ["mon-state","mon-state-guard.html","Armed institution","Mon State Guard"],
  ["arakan-state","arakan-state-guard.html","Armed institution","Arakan State Guard"]
].forEach(([slug,href,kicker,label]) => addConstituentGuardRelated(slug,[{href,kicker,label}]));

addConstituentGuardRelated("federal-military-liaison-burma",[{href:"burmese-state-guards.html",kicker:"Constituent participants",label:"State Guards of Burma"}]);
addConstituentGuardRelated("burmese-heavy-weapons-regime",[{href:"burmese-state-guards.html",kicker:"Restricted forces",label:"State Guards of Burma"}]);
addConstituentGuardRelated("burmese-crisis-escalation-control",[{href:"burmese-state-guards.html",kicker:"Local armed authorities",label:"State Guards of Burma"}]);
