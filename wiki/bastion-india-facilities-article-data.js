window.deepArticles = window.deepArticles || {};

const bastionFacilitiesSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — India and the Indian Ocean"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Bastion India"},
  {href:"../transcript.md",label:"Master Transcript — British Indian Wars and Fortress Years"},
  {href:"https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/royal-navy-operations-second-world-war",label:"The National Archives — Royal Navy operations and Eastern Fleet records"},
  {href:"https://cd.royalnavy.mod.uk/-/media/rnweb/locations-and-operations/navy-historical-branch/pdfs/1945/war_diary_naval_1945_08-%281%29.pdf",label:"Royal Navy Historical Branch — East Indies Fleet War Diary, August 1945"}
];

const bastionFacilityArticle = config => ({
  category:"British Commonwealth / Bastion India",
  sources:[...bastionFacilitiesSources,...(config.primarySources || [])],
  categories:config.categories || ["Bastion India","British Indian Ocean Command","Indian Ocean","Military bases"],
  landscape:{src:"assets/diagrams/bastion-india-port-network.svg",alt:"Diagram of Bastion India's headquarters, fleet fortress, island stations, and mainland treaty facilities",caption:"Colombo and Trincomalee form the sovereign Ceylon core; mainland positions operate through leases, joint authorities, and host-state treaties."},
  ...config
});

Object.assign(window.deepArticles, {
  "mainland-treaty-facilities-bastion-india": bastionFacilityArticle({
    title:"Mainland treaty facilities of Bastion India",
    eyebrow:"Defense leases · 1949 onward",
    infoboxKicker:"British Indian Ocean base network",
    lead:"The mainland treaty facilities of Bastion India are the dockyard, harbor, airfield, fuel, depot, communications, hospital, and transit positions retained by Britain after the Breaking of the Raj. Bombay, Madras, Cochin, and Karachi remain under Indian successor-state sovereignty while supporting British Indian Ocean Command through separate leases and defense agreements.",
    canon:"The four principal mainland positions, their host-state sovereignty, Bombay's transition from defense area to joint port, and the treaty rather than colonial status of Madras, Cochin, and Karachi are canon. Exact boundaries, treaty titles, rental terms, garrison strengths, and renewal dates remain open.",
    sections:[
      {id:"origin",title:"Origin",html:"<p><a href='operation-tideway.html'>Operation Tideway</a> preserved ships, personnel, records, and stores but did not preserve all-India authority. Between 1949 and 1952 Britain reduced its mainland commitment to positions that could be supplied by sea and evacuated through a defined <a href='route-home-principle.html'>route home</a>.</p>"},
      {id:"status",title:"Legal status",html:"<p>Each position stands within a sovereign Indian successor state. British authority covers specified defense land, military movement, security, communications, or operating facilities. Civil law, customs, labor, municipal services, and criminal jurisdiction are divided by local instruments rather than one surviving Raj statute.</p>"},
      {id:"network",title:"Network",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Position</th><th>Host state</th><th>Principal function</th><th>Form</th></tr></thead><tbody><tr><td><a href='bombay-joint-port.html'>Bombay</a></td><td>Maratha States Union</td><td>Dockyard, repair, Arabian Sea convoy support</td><td>Joint port and defense lease</td></tr><tr><td><a href='madras-military-district.html'>Madras</a></td><td>Madras State</td><td>Bay of Bengal reinforcement, depots, airfields</td><td>Treaty military district</td></tr><tr><td><a href='cochin-station.html'>Cochin</a></td><td>Travancore–Cochin</td><td>Southwestern naval logistics and coastal support</td><td>Leased station</td></tr><tr><td><a href='karachi-treaty-facilities.html'>Karachi</a></td><td>Sindh</td><td>Arabian Sea transit, fuel, air and naval access</td><td>Partner facilities and rights</td></tr></tbody></table></div>"},
      {id:"command",title:"Command",html:"<p><a href='colombo-theater-headquarters.html'>Colombo headquarters</a> assigns theater priorities. <a href='trincomalee-fleet-fortress.html'>Trincomalee</a> supplies fleet repair, stores, protected anchorage, and the secure logistical reserve. Local commanders answer through service chains while negotiating daily access with host ministries and port authorities.</p>"},
      {id:"supply",title:"Supply and transport",html:"<p>The <a href='cape-route.html'>Cape route</a> feeds Ceylon before cargo is broken into coastal shipping and protected convoys. Fuel, ammunition, vehicles, aviation stores, refrigerated provisions, mail, and replacement personnel pass through different security and customs channels.</p>"},
      {id:"jurisdiction",title:"Jurisdiction",html:"<p>Serious disputes concern off-duty conduct, labor discipline, smuggling, customs inspection, land requisition, road access, and crimes involving both garrison and host-state residents. Joint boards and liaison magistrates prevent routine cases from becoming sovereignty confrontations.</p>"},
      {id:"communities",title:"Garrison communities",html:"<p>Service households, Anglo-Indians, dockyard labor, railway workers, merchants, refugees, and local residents share cities divided by checkpoints and security zones. The protected perimeter is more visible at Madras and Bombay than at Cochin; Karachi depends more heavily upon negotiated movement through a sovereign commercial city.</p>"},
      {id:"settlement",title:"Colombo Armistice System",html:"<p>The <a href='colombo-armistice-system.html'>Colombo agreements</a> incorporate port access, transit, customs, and foreign-troop provisions into the wider exhaustion settlement. They regularize the facilities without converting them into British territory or guaranteeing perpetual access.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The network teaches British planners to distinguish possession from usable access. Kuwait and later Commonwealth operations apply the same doctrine: define the political object, secure a route home, and attach every inland commitment to a defensible port or air bridge.</p>"}
    ],
    related:[{href:"bastion-india.html",kicker:"Governing doctrine",label:"Bastion India"},{href:"british-indian-ocean-command.html",kicker:"Theater authority",label:"British Indian Ocean Command"},{href:"colombo-theater-headquarters.html",kicker:"Administrative center",label:"Colombo Theater Headquarters"},{href:"trincomalee-fleet-fortress.html",kicker:"Fleet reserve",label:"Trincomalee Fleet Fortress"},{href:"indian-ocean-defence-white-paper-1952.html",kicker:"Declared perimeter",label:"Indian Ocean Defence White Paper"}],
    facts:[["Formation","1949–1952"],["Principal facilities","Bombay, Madras, Cochin, and Karachi"],["Sovereignty","Respective Indian host states"],["Theater command","Colombo"],["Fleet fortress","Trincomalee"],["Exact lease texts","Open"]]
  }),

  "madras-military-district": bastionFacilityArticle({
    title:"Madras Military District",
    eyebrow:"Treaty facility · Coromandel Coast",
    infoboxKicker:"Bastion India eastern mainland position",
    lead:"The Madras Military District is the British-controlled defense zone within sovereign Madras State. It contains designated harbor facilities, naval stores, military depots, airfields, communications, hospitals, and protected roads used to reinforce Britain's southern allies and watch the Bay of Bengal.",
    canon:"Madras State sovereignty, British treaty control over portions of the harbor, naval facilities, depots, and airfields, and the secured residential district are canon. Boundaries, establishment dates, treaty name, unit roster, and municipal wards remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The district develops during the Fortress Years as Britain abandons an all-India front. Madras retains civil government and a Tamil-majority successor state while granting British Indian Ocean Command the positions required to keep the port open and deter attack.</p>"},
      {id:"facilities",title:"Facilities",html:"<p>The controlled estate includes selected quays, naval workshops, warehouses, fuel storage, ammunition areas, signals, medical establishments, and one or more military airfields. It does not include the whole city or its hinterland.</p>"},
      {id:"roads",title:"Protected roads",html:"<p>Defended roads connect waterfront, depots, airfields, hospitals, and barracks. Checkpoints inspect military traffic and separate secure movements from ordinary municipal circulation. Road rights are as important as ownership of the individual compounds.</p>"},
      {id:"garrison",title:"Garrison",html:"<p>British and Commonwealth personnel include naval, air, transport, engineer, signals, medical, ordnance, and security units. Madras State forces provide outer security and operate beyond the treaty perimeter.</p>"},
      {id:"households",title:"Service households",html:"<p>British families and civilian specialists live behind controlled waterfronts, wired compounds, guarded schools, clubs, clinics, and shopping streets. The arrangements become a principal example of the <a href='siege-commonwealth.html'>Siege Commonwealth</a> as a lived urban system.</p>"},
      {id:"host",title:"Relations with Madras State",html:"<p>The host government values protection, shipping, employment, and access to British procurement while defending customs revenue, labor authority, and sovereign policing. British advisers work with the state civil service without absorbing it.</p>"},
      {id:"operations",title:"Operations",html:"<p>The district receives reinforcements from Ceylon, supports coastal convoys, repairs light craft and aircraft, and supplies British-aligned southern states. Inland movement requires a defined mission and protected line of withdrawal.</p>"},
      {id:"later",title:"Later status",html:"<p>The Colombo Armistice System converts emergency wartime practice into renewable treaty access. By 1985 Madras remains an important eastern position, though the exact garrison and lease term are open.</p>"}
    ],
    related:[{href:"madras-state.html",kicker:"Host state",label:"Madras State"},{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Facility network",label:"Mainland Treaty Facilities"},{href:"british-indian-ocean-command.html",kicker:"Parent command",label:"British Indian Ocean Command"},{href:"cochin-station.html",kicker:"Southwestern counterpart",label:"Cochin Station"},{href:"siege-commonwealth.html",kicker:"Garrison society",label:"Siege Commonwealth"}],
    facts:[["Host state","Madras State"],["Status","Treaty military district"],["Principal facilities","Harbor, naval stores, depots, airfields, and hospitals"],["British sovereignty over city","No"],["Exact boundary","Open"]]
  }),

  "cochin-station": bastionFacilityArticle({
    title:"Cochin Station",
    eyebrow:"Leased naval station · Malabar Coast",
    infoboxKicker:"Bastion India southwestern position",
    lead:"Cochin Station is the leased British naval and logistics position inside Travancore–Cochin. It supports coastal escort, repair, stores, communications, and movement between the Arabian Sea, Ceylon, Bombay, and Britain's protected southern partners.",
    canon:"Cochin's status as a leased naval and logistics position inside sovereign Travancore–Cochin is canon. Exact lease boundaries, rent, force size, dockyard inventory, air component, and renewal history remain open.",
    sections:[
      {id:"status",title:"Legal status",html:"<p>The station is neither a Crown colony nor a British city. Travancore–Cochin retains sovereignty and ordinary civil government. Britain exercises specified defense, access, security, and operating rights inside the leased estate.</p>"},
      {id:"harbor",title:"Harbor facilities",html:"<p>Wharves, workshops, fuel, stores, small-craft berths, signals, and transit accommodation support ships that do not require Trincomalee's fleet-scale establishment. Channel maintenance and pilotage require continuing cooperation with the host port authority.</p>"},
      {id:"logistics",title:"Logistics",html:"<p>Cochin handles coastal distribution rather than the whole theater reserve. Cargo arriving through the Cape and Ceylon systems moves onward to Madras, Bombay, allied governments, and temporary operating points.</p>"},
      {id:"air",title:"Air and communications",html:"<p>Radio, meteorology, maritime reconnaissance support, and air-sea rescue connect the station to Colombo and Maldivian staging sites. The exact airfield relationship remains open.</p>"},
      {id:"security",title:"Security",html:"<p>Host-state police and forces secure the wider city and approaches. British guards control the leased perimeter, classified stores, and military shipping. Joint patrols and passes govern roads crossing between the two jurisdictions.</p>"},
      {id:"labor",title:"Labor and economy",html:"<p>Dock labor, pilots, clerks, boat crews, suppliers, and contractors remain part of the local economy. Pay, housing, union rules, security vetting, and procurement produce recurring negotiations with Travancore–Cochin ministries.</p>"},
      {id:"operations",title:"Operational use",html:"<p>The station sustains convoy escort, evacuation, minesweeping, patrol, repair, and advisory work. Its location gives Britain a southern mainland alternative if Bombay or Madras access is restricted.</p>"},
      {id:"legacy",title:"Later history",html:"<p>Cochin remains one of the quieter Bastion India facilities. Its importance lies in redundancy: the Indian Ocean system can reroute small ships, stores, and personnel without depending upon one politically exposed port.</p>"}
    ],
    related:[{href:"travancore-cochin.html",kicker:"Host state",label:"Travancore–Cochin"},{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Facility network",label:"Mainland Treaty Facilities"},{href:"madras-military-district.html",kicker:"Eastern counterpart",label:"Madras Military District"},{href:"bombay-joint-port.html",kicker:"Western dockyard",label:"Bombay Joint Port"},{href:"commonwealth-indian-ocean-chain.html",kicker:"Supply system",label:"Commonwealth Indian Ocean Chain"}],
    facts:[["Host state","Travancore–Cochin"],["Status","Leased naval and logistics station"],["Principal role","Coastal support and distribution"],["British sovereignty","No"],["Exact lease","Open"]]
  }),

  "karachi-treaty-facilities": bastionFacilityArticle({
    title:"Karachi Treaty Facilities",
    eyebrow:"Partner base · Arabian Sea",
    infoboxKicker:"Bastion India northwestern position",
    lead:"The Karachi Treaty Facilities are the British naval, air, fuel, communications, and transit rights maintained in sovereign Sindh after the breakup of the Raj. Karachi serves as a partner base and commercial gateway rather than a British-administered enclave.",
    canon:"Sovereignty by a western Muslim successor state, extensive British naval, air, fuel, and transit rights, and partner-base status are canon. The treaty title, district boundaries, host-government offices, British force level, and exact relationship to Pakistani successor politics remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Karachi's port, railways, airfields, workshops, and fuel system make complete British withdrawal strategically expensive. Britain therefore negotiates access with the emerging Sindhi government instead of attempting to retain direct rule.</p>"},
      {id:"rights",title:"Treaty rights",html:"<p>Rights cover naval visits and support, military aviation, fuel storage, communications, transit, emergency reinforcement, and evacuation. They do not give Britain ordinary municipal government or ownership of the whole harbor.</p>"},
      {id:"port",title:"Commercial port",html:"<p>Military and civilian shipping use the same commercial geography. Port schedules, customs, bullion settlement, insurance, and railway capacity require a joint operating calendar. British priority is strongest during declared emergencies.</p>"},
      {id:"air",title:"Air system",html:"<p>Karachi connects Arabian Sea patrols and transport routes with the Gulf, Ceylon, East Africa, and western Indian states. Host-state and British aircraft operate under deconfliction and inspection rules whose precise form remains open.</p>"},
      {id:"fuel",title:"Fuel and stores",html:"<p>Petroleum storage and distribution make Karachi important to ships, aircraft, vehicles, and the wider <a href='basra-gulf-oil-corridor.html'>Gulf oil corridor</a>. Strategic reserves are protected through divided custody and emergency release provisions.</p>"},
      {id:"host",title:"Relations with Sindh",html:"<p>Sindh uses British access to secure trade, training, diplomatic recognition, and a counterweight against larger neighbors. It preserves separate commercial relations with other blocs and rejects treatment as a British protectorate.</p>"},
      {id:"security",title:"Security and jurisdiction",html:"<p>Sindhi forces control the city and landward approaches. British personnel guard designated compounds and stores. Smuggling, intelligence activity, political asylum, and foreign shipping make liaison between the two systems continuous.</p>"},
      {id:"legacy",title:"Strategic legacy",html:"<p>Karachi demonstrates the outer limit of Bastion India: Britain can retain substantial operational access inside a state that is neither a client nor a Commonwealth member, provided both governments benefit from the arrangement.</p>"}
    ],
    related:[{href:"sindh.html",kicker:"Host state",label:"Sindh"},{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Facility network",label:"Mainland Treaty Facilities"},{href:"british-indian-ocean-command.html",kicker:"British authority",label:"British Indian Ocean Command"},{href:"bombay-joint-port.html",kicker:"Southern Arabian Sea counterpart",label:"Bombay Joint Port"},{href:"basra-gulf-oil-corridor.html",kicker:"Fuel geography",label:"Basra–Gulf Oil Corridor"}],
    facts:[["Host state","Sindh"],["Status","Partner facilities under treaty"],["Rights","Naval, air, fuel, communications, and transit"],["British municipal rule","None"],["Exact treaty title","Open"]]
  }),

  "colombo-theater-headquarters": bastionFacilityArticle({
    title:"Colombo Theater Headquarters",
    eyebrow:"Indian Ocean command center · 1949 onward",
    infoboxKicker:"Headquarters of British Indian Ocean Command",
    lead:"Colombo Theater Headquarters is the administrative center of British Indian Ocean Command and Bastion India. It coordinates shipping, hospitals, intelligence, finance, refugees, liaison, personnel, and the paperwork of a dispersed theater whose sovereign holdings, protected states, and treaty facilities possess different legal status.",
    canon:"Colombo as the command headquarters and its roles in administration, shipping, hospitals, intelligence, finance, refugees, and liaison are canon. The headquarters building, staff establishment, commander sequence, directorate names, and post-1952 reorganizations remain open.",
    sections:[
      {id:"selection",title:"Selection of Colombo",html:"<p>Ceylon remains inside the British constitutional system and can host permanent command institutions without a revocable foreign lease. Colombo also possesses civil shipping, finance, communications, hospitals, rail links, and government offices required by a multinational theater staff.</p>"},
      {id:"command",title:"Command organization",html:"<p>The headquarters joins naval, army, air, transport, intelligence, medical, engineering, signals, finance, and political liaison staffs. Service chains remain distinct; the theater command assigns priorities and resolves competition for shipping, fuel, airlift, and protected routes.</p>"},
      {id:"shipping",title:"Shipping control",html:"<p>Convoy schedules, berth allocation, escorts, repair, coastal distribution, and merchant diversions are coordinated with <a href='trincomalee-fleet-fortress.html'>Trincomalee</a>, the mainland ports, and the <a href='commonwealth-indian-ocean-chain.html'>Indian Ocean chain</a>.</p>"},
      {id:"medical",title:"Hospitals and casualties",html:"<p>Ceylon's hospitals receive battle casualties, disease cases, evacuated families, and personnel requiring long recovery. Medical transport decisions often determine whether a force can remain inland or must withdraw.</p>"},
      {id:"intelligence",title:"Intelligence",html:"<p>Reports from military missions, ports, railways, refugee interviews, shipping agents, host governments, and signals stations are fused at Colombo. The command distinguishes immediate route threats from political conflicts lying outside declared British responsibility.</p>"},
      {id:"finance",title:"Finance and contracting",html:"<p>Pay, local procurement, leases, compensation, transport contracts, relief funds, and bullion settlement require civilian and military accounting. Separate host-state agreements prevent the headquarters from using one imperial requisition system across the subcontinent.</p>"},
      {id:"diplomacy",title:"Liaison and armistice diplomacy",html:"<p>Indian successor governments that cannot meet safely inland maintain delegations or missions in Colombo. The city becomes the natural venue for the <a href='colombo-armistice-system.html'>Colombo Armistice System</a> and for recurring technical commissions.</p>"},
      {id:"city",title:"Relationship with Ceylon",html:"<p>The headquarters is a British-Commonwealth institution inside a sovereign Commonwealth realm. Ceylonese ministries, workers, police, military units, and elected politics shape its operation; it is not an extraterritorial colonial concession.</p>"},
      {id:"legacy",title:"Institutional legacy",html:"<p>Colombo's mixed military-civil staff becomes a model for later Commonwealth expeditionary headquarters. Its central lesson is administrative: a limited war ends only if somebody can state which commitments, roads, clients, and facilities the government is prepared to sustain.</p>"}
    ],
    related:[{href:"british-indian-ocean-command.html",kicker:"Parent institution",label:"British Indian Ocean Command"},{href:"ceylon.html",kicker:"Host realm",label:"Ceylon"},{href:"trincomalee-fleet-fortress.html",kicker:"Operational counterpart",label:"Trincomalee Fleet Fortress"},{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Managed network",label:"Mainland Treaty Facilities"},{href:"colombo-armistice-system.html",kicker:"Diplomatic legacy",label:"Colombo Armistice System"}],
    facts:[["Location","Colombo, Ceylon"],["Formation","1949–1952"],["Parent command","British Indian Ocean Command"],["Principal functions","Administration, shipping, hospitals, intelligence, finance, refugees, and liaison"],["Staff establishment","Open"]]
  }),

  "trincomalee-fleet-fortress": bastionFacilityArticle({
    title:"Trincomalee Fleet Fortress",
    eyebrow:"Naval base · Ceylon",
    infoboxKicker:"Principal fleet and logistics fortress",
    lead:"Trincomalee Fleet Fortress is the principal naval base and logistical reserve of Britain's post-Raj Indian Ocean system. Its protected anchorage, repair, fuel, ammunition, air defense, communications, and nearby airfields give Bastion India a fleet position held under Commonwealth sovereignty rather than mainland treaty access.",
    canon:"Trincomalee as the great naval base, principal fleet and logistics fortress, and Ceylonese constitutional position is canon. Detailed dockyard development, defenses, air stations, resident force, base limits, and later nuclear-fleet facilities remain open.",
    primarySources:[{href:"https://cd.royalnavy.mod.uk/-/media/rnweb/locations-and-operations/navy-historical-branch/pdfs/1942/war_diary_naval_1942_03---day-16-to-day-31.pdf",label:"Royal Navy Historical Branch — Trincomalee fortress command, March 1942"}],
    sections:[
      {id:"background",title:"Wartime background",html:"<p>Trincomalee served the wartime Eastern and East Indies fleets as a protected anchorage, operating base, and point of departure for Indian Ocean operations. The loss of Singapore and the post-Lisbon Mediterranean chain makes that inherited infrastructure more important after 1947.</p>"},
      {id:"fortress",title:"Fortress organization",html:"<p>The establishment combines naval command, harbor control, dockyard and repair, fuel, ammunition, victualling, signals, medical support, air defense, coastal security, and controlled approaches. The word <em>fortress</em> refers to the integrated base system rather than one fortification.</p>"},
      {id:"anchorage",title:"Anchorage and fleet support",html:"<p>Large warships, escorts, auxiliaries, tankers, transports, and damaged vessels can disperse within the harbor system. Moorings, tugs, pilots, workshops, floating support, and protected stores allow the fleet to remain east of the Cape route.</p>"},
      {id:"air",title:"Air defense and reconnaissance",html:"<p>Nearby airfields and radar cover sea approaches, convoy routes, and the Bay of Bengal. Maritime reconnaissance, fighter defense, transport, and air-sea rescue are integrated with naval operations.</p>"},
      {id:"logistics",title:"Theater reserve",html:"<p>Trincomalee holds the reserve that mainland facilities cannot safely store: fuel, ammunition, spares, engineering plant, relief stocks, and replacement equipment. Coastal shipping distributes smaller lots to Bombay, Madras, Cochin, Karachi, and Maldivian stations.</p>"},
      {id:"command",title:"Relationship with Colombo",html:"<p><a href='colombo-theater-headquarters.html'>Colombo</a> governs theater priorities, finance, diplomacy, and allocation. Trincomalee executes fleet operations and logistics. The two centers are complementary rather than competing capitals.</p>"},
      {id:"society",title:"Base society",html:"<p>Ceylonese dockworkers, civil servants, sailors, contractors, families, and local communities live beside British and Commonwealth service establishments. Housing, wages, land, security screening, and access to the harbor remain domestic political questions in Ceylon.</p>"},
      {id:"postwar",title:"Postwar development",html:"<p>The base supports Bastion India, the Cape–Ceylon–Australia chain, Gulf commitments, convoy exercises, and later Commonwealth space tracking. Exact modernization blocks remain open and should not be inferred from real-world decolonization.</p>"},
      {id:"legacy",title:"Strategic legacy",html:"<p>Trincomalee is the physical basis of the route-home principle. British forces can accept temporary mainland risk because a sovereign, heavily supplied fleet fortress remains behind them.</p>"}
    ],
    related:[{href:"ceylon.html",kicker:"Host realm",label:"Ceylon"},{href:"colombo-theater-headquarters.html",kicker:"Command counterpart",label:"Colombo Theater Headquarters"},{href:"british-indian-ocean-command.html",kicker:"Theater command",label:"British Indian Ocean Command"},{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Forward network",label:"Mainland Treaty Facilities"},{href:"commonwealth-indian-ocean-chain.html",kicker:"Route system",label:"Commonwealth Indian Ocean Chain"}],
    facts:[["Location","Trincomalee, Ceylon"],["Status","Commonwealth sovereign base"],["Role","Principal fleet and logistics fortress"],["Parent command","British Indian Ocean Command"],["Detailed establishment","Open"]]
  })
});

const addBastionFacilityRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  for (const item of [...items].reverse()) if (!article.related.some(entry => entry.href === item.href)) article.related.unshift(item);
};

addBastionFacilityRelated("bastion-india",[{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Mainland base network",label:"Mainland Treaty Facilities"},{href:"colombo-theater-headquarters.html",kicker:"Administrative center",label:"Colombo Theater Headquarters"},{href:"trincomalee-fleet-fortress.html",kicker:"Fleet fortress",label:"Trincomalee Fleet Fortress"}]);
addBastionFacilityRelated("british-indian-ocean-command",[{href:"colombo-theater-headquarters.html",kicker:"Command staff",label:"Colombo Theater Headquarters"},{href:"trincomalee-fleet-fortress.html",kicker:"Operational reserve",label:"Trincomalee Fleet Fortress"},{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Forward network",label:"Mainland Treaty Facilities"}]);
addBastionFacilityRelated("ceylon",[{href:"colombo-theater-headquarters.html",kicker:"Capital function",label:"Colombo Theater Headquarters"},{href:"trincomalee-fleet-fortress.html",kicker:"Naval function",label:"Trincomalee Fleet Fortress"}]);
addBastionFacilityRelated("madras-state",[{href:"madras-military-district.html",kicker:"British treaty position",label:"Madras Military District"}]);
addBastionFacilityRelated("travancore-cochin",[{href:"cochin-station.html",kicker:"British treaty position",label:"Cochin Station"}]);
addBastionFacilityRelated("sindh",[{href:"karachi-treaty-facilities.html",kicker:"British partner base",label:"Karachi Treaty Facilities"}]);
addBastionFacilityRelated("bombay-joint-port",[{href:"mainland-treaty-facilities-bastion-india.html",kicker:"Comparative network",label:"Mainland Treaty Facilities"}]);
