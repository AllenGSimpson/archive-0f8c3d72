window.deepArticles = window.deepArticles || {};

const geacpsSecuritySources = [
  {href:"../transcript.md",label:"Master Transcript — policing, intelligence, corporate security, national opposition, and treaty bases"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese imperial government, associated sovereignty, and security institutions"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Philippine emergency, Burmese settlements, and postwar security crises"},
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — national police powers, corporate districts, and Japanese primacy"}
];

const geacpsSecurityArticle = config => ({
  category:config.category || "Security in the Co-Prosperity Sphere",
  eyebrow:config.eyebrow || "Dai Tōa Kyōeiken · police, intelligence, censorship, and opposition",
  infoboxKicker:config.infoboxKicker || "Institution of Japanese Asian security",
  flag:{src:"assets/diagrams/geacps-security-jurisdiction.svg",alt:"Diagram separating national police, Japanese military security, security liaison, and corporate property protection",caption:"Security authority is divided among territorial government, Japanese treaty forces, intergovernmental liaison, and licensed property guards"},
  ...config,
  sources:[...geacpsSecuritySources,...(config.primarySources || [])],
  categories:config.categories || ["Dai Tōa Kyōeiken","Police by region","Intelligence agencies","Political repression in Asia"]
});

Object.assign(window.deepArticles, {
  "police-intelligence-geacps": geacpsSecurityArticle({
    title:"Police and Intelligence in the Co-Prosperity Sphere",category:"Law enforcement by political region",infoboxKicker:"Security institutions of Japanese Asia",
    lead:"Police and intelligence in the Co-Prosperity Sphere are divided among sovereign national services, provincial and municipal forces, Japanese military-security organizations, corporate guards, railway police, customs bodies, and treaty liaison offices. Japan controls the strategic alignment and receives privileged security cooperation, but ordinary criminal law and policing normally remain territorial functions.",
    canon:"National police jurisdiction, Japanese control of external security, civilian policing in Xinjiang, provincial police in National China, Burmese state forces, corporate police arrangements, railway posts, and the Bornean limits on company security are established. A common doctrine of jurisdiction is synthesis. No complete Sphere criminal code, intelligence charter, extradition convention, censorship statute, or organizational chart has been established.",
    sections:[
      {id:"jurisdictions",title:"Jurisdictions",html:"<p>Municipal and national police investigate ordinary crime, enforce public-order law, and support local courts. Japanese service police govern bases and forces. Customs, railway, port, and corporate bodies exercise narrower authority.</p>"},
      {id:"crime",title:"Ordinary crime",html:"<p>Homicide, theft, fraud, assault, licensing, traffic, and most commercial offenses remain subject to the law of the place where they occur. A Japanese resident abroad does not acquire general immunity from host-state law.</p>"},
      {id:"political",title:"Political security",html:"<p>Governments distinguish lawful criticism, nationalist organization, underground violence, communist remnants, and foreign direction according to their own constitutional orders. The boundaries vary widely among Japan, Thailand, China, Manchukuo, the Philippines, Burma, and the frontier states.</p>"},
      {id:"japanese",title:"Japanese strategic authority",html:"<p>Japan protects military bases, classified communications, strategic industry, and inter-Sphere transport. Its services receive liaison access and can demand action when a case threatens common defense or the Japanese constitutional order.</p>"},
      {id:"intelligence",title:"Intelligence",html:"<p>National services collect domestic information while Japanese organizations concentrate on external threats, anti-Japanese violence, military security, and strategic communications. Mantetsu and the corporate houses also hold extensive commercial and political reporting systems.</p>"},
      {id:"information",title:"Censorship and media",html:"<p>Publication, broadcasting, universities, and public meetings are regulated nationally. No common censor clears all material for the Sphere, although Japanese access to communications and corporate distribution gives Tokyo substantial indirect influence.</p>"},
      {id:"companies",title:"Corporate and transport security",html:"<p>Companies guard plants, mines, housing, warehouses, and concessions. Railway and port forces protect passengers, freight, stations, and strategic infrastructure. Armed authority outside fixed property remains restricted.</p>"},
      {id:"cooperation",title:"Cross-border cooperation",html:"<p>States exchange watch notices, border intelligence, customs information, and requests concerning fugitives or stolen property. Transfer of suspects requires political negotiation when nationality, exile, or protected opposition is involved.</p>"}
    ],
    related:[{href:"national-police-jurisdiction-geacps.html",kicker:"Territorial law",label:"National Police Jurisdiction"},{href:"japanese-military-police-abroad.html",kicker:"Treaty forces",label:"Japanese Military Police abroad"},{href:"security-liaison-geacps.html",kicker:"Intergovernmental system",label:"Security Liaison in the Sphere"},{href:"censorship-opposition-geacps.html",kicker:"Political life",label:"Censorship and Political Opposition"},{href:"corporate-corridor-security-geacps.html",kicker:"Property and transport",label:"Corporate and Corridor Security"},{href:"geacps.html",kicker:"Political order",label:"Greater East Asia Co-Prosperity Sphere"}],
    facts:[["Common Sphere police force","None established"],["Ordinary policing","National, provincial, or municipal"],["Japanese jurisdiction","Forces, bases, and strategic systems"],["Intelligence cooperation","Treaty liaison and direct requests"],["Corporate authority","Fixed property and licensed corridors"],["Censorship","National systems"],["Cross-border transfer","Case or treaty based"],["Complete common security code","Open"]]
  }),

  "national-police-jurisdiction-geacps": geacpsSecurityArticle({
    title:"National Police Jurisdiction in the Co-Prosperity Sphere",category:"Police jurisdiction",infoboxKicker:"Territorial authority under associated sovereignty",
    lead:"National police jurisdiction is the ordinary rule of law enforcement among the associated states. Civil ministries, provinces, cities, constituent states, and recognized local governments maintain their own police, gendarmerie, courts, prisons, registries, and public-order systems. Japan's headship does not by itself transfer those functions to a central imperial force.",
    canon:"Civilian police and courts under Xinjiang's local government, provincial police in National China, Burmese state police and border guards, Thai senior policing in its dependencies, and Manchukuoan efforts to extend police jurisdiction over corporate cities are established. A common jurisdictional doctrine is synthesis; procedural codes and bilateral status-of-forces rules remain open.",
    sections:[
      {id:"basis",title:"Legal basis",html:"<p>Police power follows territory and the national constitution. Citizenship, corporate employment, or Japanese sponsorship can create consular and treaty rights without removing host-state criminal jurisdiction.</p>"},
      {id:"levels",title:"Levels of policing",html:"<p>Capital ministries supervise provincial, prefectural, state, municipal, border, port, and specialist forces in different combinations. National China leaves substantial policing authority to its provinces; Burma preserves forces attached to constituent governments.</p>"},
      {id:"frontier",title:"Frontier states",html:"<p>Xinjiang controls civilian police, courts, religion, land, and ordinary gendarmerie while Japanese forces hold the external-defense layer. Similar divisions apply, in less militarized form, to Tibet.</p>"},
      {id:"cities",title:"Corporate cities",html:"<p>Manchukuo seeks state-appointed magistrates, national police access, local taxation, and mixed councils in Japanese company settlements. Concession guarantees and Japanese nationality make jurisdiction gradual and negotiated.</p>"},
      {id:"foreigners",title:"Foreign residents",html:"<p>Foreign residents are subject to local public and criminal law. Consular notice, interpreters, employer representation, and transfer to Japanese service authorities may be required by treaty in defined cases.</p>"},
      {id:"emergency",title:"Emergency powers",html:"<p>Insurrection, invasion, or a certified union crisis can transfer authority to armed forces, high commissions, or emergency cabinets. Such powers belong to national settlements or bilateral mandates rather than one general Sphere statute.</p>"},
      {id:"courts",title:"Courts and detention",html:"<p>Arrest, prosecution, detention, prison administration, and appeals remain national matters. The record does not establish a common appellate court for criminal cases.</p>"},
      {id:"disputes",title:"Jurisdictional disputes",html:"<p>Disputes concern service personnel, political offenses, concession property, border pursuit, and conflicting nationality claims. Governments resolve them through ministries, liaison officers, diplomatic channels, and Japanese mediation.</p>"}
    ],
    related:[{href:"police-intelligence-geacps.html",kicker:"Overview",label:"Police and Intelligence in the Sphere"},{href:"xinjiang.html",kicker:"Treaty-base example",label:"Xinjiang"},{href:"government-of-national-china.html",kicker:"Provincial authority",label:"Government of National China"},{href:"thai-security-command-burma.html",kicker:"Emergency hierarchy",label:"Thai Security Command in Burma"},{href:"manchukuo.html",kicker:"Corporate-city dispute",label:"Manchukuo"}],
    facts:[["Default jurisdiction","Territorial"],["Ordinary authorities","National and local police"],["Foreign residents","Subject to host-state law"],["Frontier bases","Separate Japanese service jurisdiction"],["National China","Provincial police authority"],["Burma","Constituent-state police and guards"],["Common criminal appeal court","None established"],["Detailed status-of-forces rules","Open"]]
  }),

  "japanese-military-police-abroad": geacpsSecurityArticle({
    title:"Japanese Military Police abroad",category:"Military police",infoboxKicker:"Service security in Japanese treaty districts",
    lead:"Japanese military police abroad protect Imperial forces, bases, arsenals, classified communications, transport, and service discipline. Their postwar jurisdiction is narrower than the wartime Kempeitai's occupation role in much of conquered Asia. Host governments ordinarily retain civilian policing beyond designated military and communications districts.",
    canon:"Wartime military-police abuses, Japanese treaty bases, separate local civil administration in the frontier states, and strategic Japanese control are established. The name, chain of command, date of reorganization, uniforms, ranks, criminal procedure, and precise continuity of the Kempeitai or successor organizations remain open.",
    sections:[
      {id:"legacy",title:"Wartime legacy",html:"<p>The Kempeitai's wartime record includes political imprisonment, requisition, interrogation, anti-insurgent operations, and abuses against occupied populations. That record shapes later demands for visible limits.</p>"},
      {id:"mission",title:"Postwar mission",html:"<p>Service police guard installations, investigate offenses by military personnel, control access, secure documents and communications, and support counterintelligence within the armed forces.</p>"},
      {id:"districts",title:"Treaty districts",html:"<p>Japanese authority is strongest inside bases, depots, communications stations, and designated transport installations. Land leases, compensation, and access procedures define the physical boundary.</p>"},
      {id:"civilians",title:"Civilian cases",html:"<p>Host police remain responsible for ordinary civilian offenses. Mixed cases involving a Japanese serviceman, local victim, or offense outside a base require joint investigation or a treaty allocation of jurisdiction.</p>"},
      {id:"frontier",title:"Frontier practice",html:"<p>In Xinjiang, Japanese forces defend passes, airfields, radar, and long-range communications while local authorities police cities, schools, land, mosques, and markets. Tibet maintains an even smaller Japanese military-security footprint.</p>"},
      {id:"manchuria",title:"Manchuria and transport",html:"<p>Japanese forces, settler districts, and strategic railway facilities create overlapping jurisdictions in Manchukuo. National officials seek routine police access without compromising Japanese military security.</p>"},
      {id:"emergencies",title:"Emergency intervention",html:"<p>Anti-Japanese violence, sabotage of strategic systems, or attacks on bases can bring Japanese investigators and armed detachments beyond their normal districts. Political authorization and host cooperation determine the scope.</p>"},
      {id:"organization",title:"Organization",html:"<p>The archive has not fixed whether one postwar organization inherits the Kempeitai name or whether army, naval, air, and joint-security bodies divide its former functions.</p>"}
    ],
    related:[{href:"police-intelligence-geacps.html",kicker:"System overview",label:"Police and Intelligence in the Sphere"},{href:"national-police-jurisdiction-geacps.html",kicker:"Civil authority",label:"National Police Jurisdiction"},{href:"security-liaison-geacps.html",kicker:"Joint cases",label:"Security Liaison in the Sphere"},{href:"xinjiang.html",kicker:"Frontier bases",label:"Xinjiang"},{href:"manchukuo.html",kicker:"Overlapping jurisdiction",label:"Manchukuo"}],
    facts:[["Historical predecessor","Kempeitai"],["Principal mission","Military discipline and installation security"],["Ordinary civilian police","Host-state services"],["Strongest jurisdiction","Bases and designated strategic facilities"],["Mixed cases","Joint or treaty procedure"],["Frontier model","External defense separated from civil rule"],["Postwar organizational name","Open"],["Complete status-of-forces code","Open"]]
  }),

  "security-liaison-geacps": geacpsSecurityArticle({
    title:"Security Liaison in the Co-Prosperity Sphere",category:"Intelligence cooperation",infoboxKicker:"Exchange among national and Japanese services",
    lead:"Security liaison connects the national police, intelligence, customs, military, railway, port, and communications authorities of the Co-Prosperity Sphere. Cooperation is strongest along Japanese-controlled transport and defense systems. It does not establish a single service authorized to conduct ordinary domestic policing in every member state.",
    canon:"Japanese intelligence sharing and liaison, direct base negotiations, frontier intelligence in Xinjiang, corporate political reporting, Mantetsu research, customs cooperation, and Japanese strategic primacy are established. The common liaison architecture, headquarters, files, classification system, and warrant rules are synthesis or open.",
    sections:[
      {id:"functions",title:"Functions",html:"<p>Liaison offices exchange border warnings, suspect identities, travel and cargo records, stolen-property notices, insurgent reporting, communications security information, and requests for local investigation.</p>"},
      {id:"bilateral",title:"Bilateral channels",html:"<p>Japan normally deals directly with the government concerned. Japanese bases in Xinjiang, Tibet, Burma, and the southern states rest on particular agreements rather than a standing right to command every national police service.</p>"},
      {id:"military",title:"Military intelligence",html:"<p>Frontier states report forces, routes, signals, raids, and foreign missions beyond the Sphere. Japan supplies long-range reconnaissance, strategic communications, cryptology, and analysis.</p>"},
      {id:"transport",title:"Transport and customs",html:"<p>Railway, port, airline, and customs authorities circulate alerts concerning dangerous cargo, forged documents, sabotage, smuggling, and interference with strategic freight.</p>"},
      {id:"corporate",title:"Corporate information",html:"<p>Mantetsu and the corporate houses possess surveys, employment records, traffic data, political reporting, and local contacts. Governments use that information while disputing corporate access and retention.</p>"},
      {id:"universities",title:"Universities and political reporting",html:"<p>Student travel, scholarships, professional congresses, and foreign religious or academic ties attract security attention. National governments decide whether criticism becomes a police matter.</p>"},
      {id:"limits",title:"Limits",html:"<p>Thailand and the stronger associated states can refuse intrusive requests or require formal evidence. Smaller frontier and resource states have less room to resist Japanese strategic demands.</p>"},
      {id:"records",title:"Records and communications",html:"<p>By the 1970s, computerized freight, customs, payroll, and travel systems make cross-border matching easier. The setting does not establish a universal population database or common identification card.</p>"}
    ],
    related:[{href:"police-intelligence-geacps.html",kicker:"Overview",label:"Police and Intelligence in the Sphere"},{href:"japanese-military-police-abroad.html",kicker:"Military cases",label:"Japanese Military Police abroad"},{href:"extradition-amnesty-exile-geacps.html",kicker:"Requests and transfers",label:"Extradition, Amnesty, and Political Exile"},{href:"mantetsu.html",kicker:"Continental information system",label:"Mantetsu"},{href:"xinjiang.html",kicker:"Frontier liaison",label:"Xinjiang"}],
    facts:[["Common police command","None"],["Normal channel","Bilateral liaison"],["Principal shared subjects","Borders, transport, sabotage, fugitives"],["Japanese advantage","Strategic communications and analysis"],["Corporate role","Commercial and political reporting"],["National veto strength","Unequal"],["Universal population database","None established"],["Liaison headquarters and charter","Open"]]
  }),

  "censorship-opposition-geacps": geacpsSecurityArticle({
    title:"Censorship and Political Opposition in the Co-Prosperity Sphere",category:"Political rights",infoboxKicker:"National criticism under Japanese strategic limits",
    lead:"Censorship and political opposition vary among the member states of the Co-Prosperity Sphere. Associated governments control their own press law, broadcasting, parties, universities, and public meetings. Japan intervenes most strongly against violence, foreign intelligence, threats to the imperial order, and attempts to move a member state outside the Japanese strategic system.",
    canon:"National political systems, the Philippines' independence struggle, provincial Chinese media, Burmese ordinary and armed opposition, Thailand's military and royal politics, communist suppression, and Japanese strategic primacy are established. A shared classification of legal criticism, prohibited organization, exile, and amnesty is synthesis; detailed censorship laws remain open.",
    sections:[
      {id:"variation",title:"National variation",html:"<p>The Philippines has electoral parties and a vigorous national political history. China maintains provincial and republican institutions. Thailand combines monarchy, military guardianship, and periods of parliamentary politics. Burma's opposition is frequently armed and constitutional.</p>"},
      {id:"criticism",title:"Permitted criticism",html:"<p>Governments may tolerate criticism of taxes, corruption, corporate privileges, local ministers, language policy, or particular Japanese projects. Toleration depends on forum, organization, and the political strength of the state.</p>"},
      {id:"prohibitions",title:"Prohibited activity",html:"<p>Sabotage, armed undergrounds, foreign-directed intelligence, attacks on Japanese bases, and plans to overturn the strategic alignment receive the harshest treatment.</p>"},
      {id:"nationalism",title:"Nationalist opposition",html:"<p>Nationalists may demand more corporate control, language protection, withdrawal of bases, or revision of treaties without demanding the destruction of the state. Governments divide constitutional campaigns from violent movements.</p>"},
      {id:"communism",title:"Communist remnants",html:"<p>Communist forces lose the external support historically supplied by the Soviet Union and Communist China. Surviving organizations are treated as insurgent, criminal, labor, or regional movements according to local conditions.</p>"},
      {id:"media",title:"Press and broadcasting",html:"<p>Licensing, seizure, broadcast allocation, import review, and publisher responsibility remain national. Corporate ownership and Japanese distribution can restrict circulation without a formal Sphere ban.</p>"},
      {id:"universities",title:"Universities",html:"<p>Universities produce civil servants, engineers, clergy, professionals, and opposition networks. Police and ministries monitor foreign funding, underground organization, and violence more closely than ordinary scholarly disagreement.</p>"},
      {id:"outside",title:"External pressure",html:"<p>Japan can use intelligence, diplomatic recognition, investment, communications access, and control of strategic supply to press a member government. Direct Japanese censorship of an associated state's domestic press is politically costly.</p>"}
    ],
    related:[{href:"police-intelligence-geacps.html",kicker:"Security system",label:"Police and Intelligence in the Sphere"},{href:"extradition-amnesty-exile-geacps.html",kicker:"Political remedies",label:"Extradition, Amnesty, and Political Exile"},{href:"mass-media-in-national-china.html",kicker:"National example",label:"Mass Media in National China"},{href:"philippine-war.html",kicker:"Armed independence struggle",label:"Philippine War"},{href:"armed-federalism-burma.html",kicker:"Constitutional violence",label:"Armed Federalism in Burma"}],
    facts:[["Common censorship law","None established"],["Primary regulator","National government"],["Strongest prohibitions","Violence, espionage, strategic defection"],["Constitutional nationalism","Sometimes tolerated"],["Communist external support","Weak after Axis victory"],["University surveillance","National and liaison services"],["Japanese intervention","Strategic and politically selective"],["Detailed press statutes","Open"]]
  }),

  "corporate-corridor-security-geacps": geacpsSecurityArticle({
    title:"Corporate and Corridor Security in the Co-Prosperity Sphere",category:"Private security",infoboxKicker:"Guards, railway police, and protected concessions",
    lead:"Corporate and corridor security protects Japanese plants, mines, oil installations, warehouses, housing, railway stations, ports, power systems, and communications sites across the Co-Prosperity Sphere. Its personnel range from unarmed watchmen to licensed guards and specialist transport police. Governments retain criminal jurisdiction and regulate heavier corporate forces.",
    canon:"Mantetsu railway police posts and police liaison, company-town services, zaibatsu guards in the Malay–Bornean War, Tokyo's postwar registration and restriction of overseas forces, and corporate security in later Indian concessions are established. A common licensing regime is synthesis; force size, weapons schedules, badges, and reporting rules remain open.",
    sections:[
      {id:"property",title:"Property protection",html:"<p>Guards control gates, patrol housing and industrial sites, protect payroll and cargo, preserve fire and emergency access, and detain suspects for transfer to public police.</p>"},
      {id:"railways",title:"Railway police",html:"<p>Mantetsu stations include police posts within a wider package of freight, communications, housing, clinics, and schools. Railway officers protect passengers, yards, bridges, signals, depots, and strategic freight.</p>"},
      {id:"ports",title:"Ports and utilities",html:"<p>Port, tanker, pipeline, power, and communications security often combines corporate employees, public police, customs officers, and Japanese military liaison.</p>"},
      {id:"bornean",title:"Malay–Bornean War",html:"<p>Zaibatsu guards defended fixed oil installations and Japanese families during the conflict. Some units entered combat when fighting reached concessions, despite Japan remaining formally outside the war.</p>"},
      {id:"registration",title:"Postwar regulation",html:"<p>Tokyo registered and restricted overseas corporate forces after the settlement. They could defend fixed property, could not conduct offensive operations beyond concessions, and could not possess independent heavy weapons.</p>"},
      {id:"local",title:"Local personnel",html:"<p>Corporate forces employ Japanese cadres, local guards, technicians, interpreters, and former soldiers. Recruitment and authority depend on host law and concession agreements.</p>"},
      {id:"police",title:"Relations with public police",html:"<p>Companies report serious offenses, surrender detainees, preserve evidence, and request public support. Host governments contest any company claim to municipal policing outside contracted property.</p>"},
      {id:"limits",title:"Limits",html:"<p>A company may not fight a national army, alter foreign policy, or overturn an associated government. Charter revocation, arrests, military occupation, and forced reorganization remain available against a corporation that crosses the line.</p>"}
    ],
    related:[{href:"police-intelligence-geacps.html",kicker:"Jurisdictional overview",label:"Police and Intelligence in the Sphere"},{href:"zaibatsu-security-forces.html",kicker:"Armed corporate forces",label:"Zaibatsu Security Forces"},{href:"corporate-security-malay-bornean-war.html",kicker:"Combat precedent",label:"Corporate Security in the Malay–Bornean War"},{href:"mantetsu.html",kicker:"Continental corridors",label:"Mantetsu"},{href:"national-police-jurisdiction-geacps.html",kicker:"Public authority",label:"National Police Jurisdiction"}],
    facts:[["Principal jurisdiction","Fixed property and licensed corridors"],["Public criminal authority","Host-state police and courts"],["Mantetsu facilities","Railway police posts"],["Bornean precedent","Defensive combat at concessions"],["Offensive operations","Prohibited after settlement"],["Heavy weapons","Prohibited to independent company forces"],["Sanctions","Charter revocation and state occupation"],["Common licensing schedule","Open"]]
  }),

  "extradition-amnesty-exile-geacps": geacpsSecurityArticle({
    title:"Extradition, Amnesty, and Political Exile in the Co-Prosperity Sphere",category:"Intergovernmental criminal law",infoboxKicker:"Transfer and refuge among associated states",
    lead:"Extradition, amnesty, and political exile are sensitive questions among states whose citizens retain distinct nationalities and whose governments define opposition differently. The Sphere's security cooperation can locate and restrain fugitives, but it does not automatically erase host-state jurisdiction or compel the transfer of every political opponent requested by another member.",
    canon:"Permanent nationality, national police and courts, political exile, amnesty as an open security instrument, cross-border insurgencies, refugee movement, and Japanese mediation are established. The absence of a common citizenship makes transfer a state-to-state question. A Sphere-wide extradition convention, political-offense exception, asylum code, and amnesty procedure remain open.",
    sections:[
      {id:"nationality",title:"Nationality",html:"<p>Residence abroad does not normally change citizenship. The requested person remains a foreign national under the law of the host state, which retains authority to arrest, deport, prosecute, or refuse transfer.</p>"},
      {id:"ordinary",title:"Ordinary offenses",html:"<p>Requests involving murder, theft, fraud, kidnapping, smuggling, or attacks on transport are the least politically difficult. Police transmit records through ministries and liaison channels.</p>"},
      {id:"political",title:"Political offenses",html:"<p>A speech, party, or publication legal in the host country may be criminal in the requesting state. Stronger associated governments can require evidence of violence or ordinary crime before surrender.</p>"},
      {id:"violence",title:"Armed movements",html:"<p>Insurgents crossing borders create disputes over pursuit, internment, disarmament, refugee status, and return. Burma and the Thai frontier generate repeated cases involving militias and state guards.</p>"},
      {id:"amnesty",title:"Amnesty",html:"<p>Governments can separate minor participants, coerced supporters, deserters, and local defense groups from organizers or killers. Registration, weapons surrender, return service, and supervision may accompany relief.</p>"},
      {id:"exile",title:"Political exile",html:"<p>Exile removes an opponent from domestic organization but can create a foreign propaganda and intelligence problem. Host governments monitor fundraising, broadcasting, travel, and contact with foreign services.</p>"},
      {id:"japan",title:"Japanese mediation",html:"<p>Japan can press for transfer when bases, strategic communications, or the survival of an associated government are threatened. It can also restrain a client request that would destabilize another member.</p>"},
      {id:"procedure",title:"Procedure",html:"<p>The archive has not established a common warrant, appeals tribunal, political-offense exception, or mandatory-transfer list. Bilateral treaties and case settlements remain the likely instruments.</p>"}
    ],
    related:[{href:"police-intelligence-geacps.html",kicker:"Security overview",label:"Police and Intelligence in the Sphere"},{href:"security-liaison-geacps.html",kicker:"Requests and records",label:"Security Liaison in the Sphere"},{href:"censorship-opposition-geacps.html",kicker:"Political activity",label:"Censorship and Political Opposition"},{href:"labor-migration-geacps.html",kicker:"Residence and nationality",label:"Labor Migration in the Sphere"},{href:"philippine-war.html",kicker:"Nationalist conflict",label:"Philippine War"}],
    facts:[["Automatic transfer within Sphere","No"],["Controlling authority","Host state"],["Ordinary-crime requests","Normally cooperative"],["Political offenses","Disputed"],["Nationality after residence","Usually unchanged"],["Amnesty terms","National and case-specific"],["Japanese role","Pressure and mediation"],["Common extradition convention","Open"]]
  })
});

const addGeacpsSecurityRelated = (slug,item) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
};

[
  ["geacps",{href:"police-intelligence-geacps.html",kicker:"Security order",label:"Police and Intelligence in the Co-Prosperity Sphere"}],
  ["xinjiang",{href:"national-police-jurisdiction-geacps.html",kicker:"Civil authority",label:"National Police Jurisdiction"}],
  ["manchukuo",{href:"japanese-military-police-abroad.html",kicker:"Overlapping authority",label:"Japanese Military Police abroad"}],
  ["thai-security-command-burma",{href:"security-liaison-geacps.html",kicker:"Sphere context",label:"Security Liaison in the Co-Prosperity Sphere"}],
  ["mass-media-in-national-china",{href:"censorship-opposition-geacps.html",kicker:"Comparative context",label:"Censorship and Political Opposition"}],
  ["zaibatsu-security-forces",{href:"corporate-corridor-security-geacps.html",kicker:"Legal context",label:"Corporate and Corridor Security"}],
  ["philippine-war",{href:"extradition-amnesty-exile-geacps.html",kicker:"Post-conflict law",label:"Extradition, Amnesty, and Political Exile"}]
].forEach(([slug,item]) => addGeacpsSecurityRelated(slug,item));
