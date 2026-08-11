window.deepArticles = window.deepArticles || {};

const malayBorneanSettlementSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Bornean Malaya and protected Malaya"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — southern GEACPS settlement"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Malay–Bornean crisis, 1973–1979"},
  {href:"../transcript.md",label:"Master Transcript — Bornean Malaya and Thailand, Turns 700–703"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — P1-31 Malay–Bornean settlement and Brunei"}
];

const borneanSuccessionLandscape = {src:"assets/diagrams/bornean-succession.svg",alt:"Political succession from Bornean Malaya to the Bornean State and protected Malaya",caption:"The 1977–1979 settlement separates Bornean statehood, Malay national government, Brunei's special position, and Singapore's city-state order"};

const malayBorneanSettlementArticle = config => ({
  category:config.category || "Malay–Bornean crisis",
  eyebrow:config.eyebrow || "Malay–Bornean crisis · 1973–1979",
  infoboxKicker:config.infoboxKicker || "Institution of the 1973–1979 settlement",
  landscape:config.landscape || borneanSuccessionLandscape,
  ...config,
  sources:malayBorneanSettlementSources,
  categories:config.categories || ["Malay–Bornean War","Bornean Malaya","Federated Kingdom of Malaya","GEACPS"]
});

Object.assign(window.deepArticles, {
  "bornean-malaya-charter-crisis": malayBorneanSettlementArticle({
    title:"Bornean Malaya charter crisis",category:"Constitutional crises",infoboxKicker:"Breakdown of the Bornean Malayan charter, 1973–1974",
    lead:"The Bornean Malaya charter crisis was the constitutional breakdown of 1973–1974 that preceded the Malay–Bornean War. Disputes over the Malay-headed federal government, Bornean representation, policing, resource revenue, corporate concessions, and Thailand's security claims ended the postwar assumption that Bornean Malaya could mature as a single national state.",
    canon:"The 1973–1974 date, incompatibility of peninsular Malay institutions, Bornean interests, corporate concessions, and Thai security claims, and transition into war are established. The text of the disputed charter, office-holders, assembly votes, arrest calendar, emergency decrees, and precise first armed incident remain open.",
    sections:[
      {id:"postwar",title:"Postwar constitutional structure",html:"<p>Bornean Malaya joins Brunei, Sarawak, North Borneo, Labuan, and neighboring islands beneath a Malay-headed federal order. Brunei supplies ceremonial legitimacy, Malay institutions dominate the center, and regional councils administer communities whose political histories predate the combined state.</p>"},
      {id:"representation",title:"Representation",html:"<p>Bornean politicians seek stronger standing for Sarawak, North Borneo, native councils, municipalities, and locally recruited officials. The federal establishment treats many of these claims as demands for autonomy within a Malay national state; its critics increasingly argue that the constituent territories possess the state together.</p>"},
      {id:"revenue",title:"Resource revenue",html:"<p>Oil, timber, ports, plantations, and shipping produce disputes over royalties, taxes, investment authority, and provincial expenditure. Federal ministries, local administrations, and Japanese concession holders each claim rights derived from a different layer of the postwar settlement.</p>"},
      {id:"police",title:"Police and administration",html:"<p>Control of provincial police, appointments, education, and communications becomes inseparable from the constitutional dispute. Attempts to bring local services under firmer federal direction encourage defections and refusals of orders once the crisis leaves parliamentary channels.</p>"},
      {id:"nationality",title:"National definition",html:"<p>The central dispute concerns whether the country is the surviving homeland of the Malay nation or a multinational Bornean federation with a Malay court. Financial concessions cannot settle that question because it determines the legal standing of every regional autonomy.</p>"},
      {id:"corporate",title:"Corporate charter rights",html:"<p>Japanese companies hold concessions covering oilfields, timber districts, ports, housing, transport, and utilities. Federal officials defend negotiated continuity, while provincial movements challenge agreements that permit corporate administration to bypass local government.</p>"},
      {id:"thailand",title:"Thai security interest",html:"<p>Thailand's control of the Malayan peninsula makes the Bornean crisis a regional question. Bangkok opposes any settlement that could encourage Malay separatism in Thai-held territory or weaken its control of the approaches to Singapore.</p>"},
      {id:"breakdown",title:"Breakdown and war",html:"<p>By 1974 constitutional rejection, emergency measures, police disobedience, and armed seizures have ended the common charter in practice. The exact sequence differs among later accounts, but the breakdown opens the Malay–Bornean War and leaves Japan trying to preserve concessions while mediating between incompatible national claims.</p>"}
    ],
    related:[{href:"bornean-malaya.html",kicker:"State in crisis",label:"Bornean Malaya"},{href:"malay-bornean-war.html",kicker:"Armed phase",label:"Malay–Bornean War"},{href:"bornean-nationalism.html",kicker:"Opposition movement",label:"Bornean Nationalism"},{href:"corporate-security-malay-bornean-war.html",kicker:"Armed corporate response",label:"Corporate Security in the War"},{href:"malay-bornean-triangular-settlement.html",kicker:"Final settlement",label:"Malay–Bornean Triangular Settlement"}],
    facts:[["Period","1973–1974"],["State","Bornean Malaya"],["Principal dispute","Federal national character"],["Regional parties","Sarawak, North Borneo, Brunei, and local institutions"],["Economic issue","Resource revenue and concession authority"],["Security issue","Police command and strategic corridors"],["Immediate outcome","Malay–Bornean War"],["Charter text and office-holders","Open"]]
  }),

  "bornean-nationalism": malayBorneanSettlementArticle({
    title:"Bornean nationalism",category:"National movements",infoboxKicker:"Territorial national movement in northern Borneo",
    lead:"Bornean nationalism is the territorial and multinational movement that rejected government of northern Borneo as the surviving possession of a displaced Malay national state. It joined older Sarawakian, North Bornean, indigenous, municipal, commercial, and religious institutions around a common demand for Bornean statehood while retaining internal autonomy.",
    canon:"The emergence of a Bornean political identity, rejection of permanent Malay supremacy, autonomy-based territorial statehood, use of Japanese particularist language, and victory in the 1977–1979 settlement are established. Named parties, leaders, congresses, manifestos, symbols, armed commands, and the successor state's final formal name remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The movement develops from the separate administrative histories of Sarawak, North Borneo, Brunei, Labuan, coastal towns, and interior districts. Postwar councils, schools, local services, and a locally educated political class provide institutions through which common grievances can be expressed.</p>"},
      {id:"identity",title:"Territorial identity",html:"<p>Bornean identity does not replace Iban, other Dayak, Kadazan-Dusun, Murut, Melanau, Malay, Chinese, regional, or religious identities. It provides a territorial loyalty capable of supporting one state while allowing those communities to retain separate institutions.</p>"},
      {id:"particularism",title:"Japanese particularism",html:"<p>Japanese cultural policy encourages local histories, native-language education, regional broadcasting, and the claim that Asian peoples possess national homes. Bornean writers and politicians apply those principles to a state created by Japan for postwar administrative convenience.</p>"},
      {id:"program",title:"Political program",html:"<p>The established program centers on ending Malay political supremacy, recognizing Bornean sovereignty, protecting resident communities, retaining territorial autonomy, and remaining inside the Greater East Asia Co-Prosperity Sphere. Continued relations with Japan distinguish the movement from a general anti-Japanese revolt.</p>"},
      {id:"coalition",title:"Coalition politics",html:"<p>Regional assemblies, customary authorities, municipal interests, religious associations, professional groups, and defecting security personnel do not begin with one preferred constitution. Their coalition is sustained by opposition to centralization and by the need to prevent any one community from replacing Malay supremacy with its own.</p>"},
      {id:"war",title:"War and administration",html:"<p>During the Malay–Bornean War, the movement's practical strength rests on local government, police defections, ports, airfields, river routes, and control of population centers. The belligerent organizations and command structure have not been fixed in the surviving constitutional record.</p>"},
      {id:"settlement",title:"Recognition",html:"<p>Japan eventually treats Bornean Malaya as an exceptional failed postwar association and accepts a Bornean successor in the triangular settlement. The new state renounces any implication that Bornean nationality gives it a claim to the separately sovereign Kalimantan Federation.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>By 1985 Bornean nationality is the civic basis of the successor state. Disputes continue over the place of Malay institutions, Japanese concessions, regional autonomy, and memories of wartime communal violence.</p>"}
    ],
    related:[{href:"bornean-state.html",kicker:"Successor country",label:"Bornean State"},{href:"bornean-malaya-charter-crisis.html",kicker:"Constitutional origin",label:"Bornean Malaya Charter Crisis"},{href:"malay-national-crisis-bornean-war.html",kicker:"Opposing national claim",label:"Malay National Crisis"},{href:"malay-bornean-war.html",kicker:"Armed struggle",label:"Malay–Bornean War"},{href:"malay-bornean-triangular-settlement.html",kicker:"Recognition",label:"Triangular Settlement"}],
    facts:[["Political character","Territorial and multinational nationalism"],["Principal regions","Sarawak and North Borneo"],["Legal objective","Bornean statehood with internal autonomy"],["Relationship with Japan","Associated rather than anti-Japanese"],["Doctrinal source","Japanese national particularism"],["Armed phase","1974–1976"],["Recognition","1977–1979"],["Named parties and leaders","Open"]]
  }),

  "malay-national-crisis-bornean-war": malayBorneanSettlementArticle({
    title:"Malay national crisis during the Malay–Bornean War",category:"Political history",infoboxKicker:"Crisis of the last recognized Malay homeland",
    lead:"The Malay national crisis was the political and social emergency created when revolt threatened Bornean Malaya, the last internationally recognized state organized as a homeland for the Malay nation. The peninsula remained under Thailand, Singapore was separate, and the Sumatran Malay Federation possessed its own sultanates and political order.",
    canon:"The homeland crisis, loss of the peninsula and Singapore, existence of a separate Sumatran Malay order, desperate Malay defense of Bornean Malaya, communal violence, displacement, and restoration of a protected peninsular Malaya are established. Parties, militia names, leaders, casualty totals, refugee totals, and responsibility for individual atrocities remain open.",
    sections:[
      {id:"homeland",title:"The last recognized homeland",html:"<p>Bornean Malaya is created because neither Thai-held peninsular territory, independent Singapore, nor the Sumatran Malay Federation can receive a common Malay national government. Its court and federal institutions carry a political claim much larger than their demographic position in Borneo.</p>"},
      {id:"institutions",title:"Malay federal institutions",html:"<p>The court, central ministries, diplomatic service, police, officer corps, schools, and Islamic organizations give the state a Malay public identity. Their office-holders face loss of both employment and national purpose if the combined country dissolves.</p>"},
      {id:"interpretation",title:"Interpretations of the revolt",html:"<p>Malay supporters of the federal order describe the uprising as destruction of the nation, treason against the crown, and a threat to religious and cultural institutions. Bornean opponents distinguish resident Malay communities from the political supremacy of the federal establishment.</p>"},
      {id:"mobilization",title:"Mobilization",html:"<p>Federal security forces, royal organizations, local supporters, refugees, and sympathizers elsewhere in the Malay world sustain the war effort. Exact militia structures and the degree of outside material support remain disputed.</p>"},
      {id:"violence",title:"Communal violence",html:"<p>Control of villages, river settlements, towns, food, boats, schools, and local officials becomes part of the war. Expulsions, assassinations, forced movement, and retaliatory violence create mixed districts in which political loyalty and communal identity are difficult to separate.</p>"},
      {id:"displacement",title:"Displacement",html:"<p>Refugees move through Borneo, Singapore, the Sumatran states, and the Thai-held peninsula. Long-established coastal Malays are not collectively removed by the final settlement, while officials, military families, recent settlers, and people unable to trust the new state form part of the outward movement.</p>"},
      {id:"peninsula",title:"Restoration on the peninsula",html:"<p>The triangular settlement answers the homeland crisis by creating the Federated Kingdom of Malaya on most of the former British peninsula under Thai protection. The solution preserves Malay domestic institutions while accepting Thai strategic authority and Singaporean separation.</p>"},
      {id:"memory",title:"Political memory",html:"<p>Later Malayan accounts remember the restoration as national survival and the loss of Borneo as dispossession. Bornean histories emphasize the end of an unequal imperial state. Both memories remain active in relations across the South China Sea.</p>"}
    ],
    related:[{href:"bornean-malaya.html",kicker:"Lost state",label:"Bornean Malaya"},{href:"malaya.html",kicker:"Restored homeland",label:"Federated Kingdom of Malaya"},{href:"bornean-nationalism.html",kicker:"Rival movement",label:"Bornean Nationalism"},{href:"brunei-settlement.html",kicker:"Surviving Malay court",label:"Brunei Settlement"},{href:"malay-bornean-triangular-settlement.html",kicker:"Political resolution",label:"Triangular Settlement"}],
    facts:[["Crisis period","1974–1979"],["State at issue","Bornean Malaya"],["Peninsula before settlement","Under Thailand"],["Singapore","Separate city-state"],["Sumatran alternative","Independent federation with its own institutions"],["Settlement outcome","Protected peninsular Malaya"],["Bornean Malay status","Included in Bornean citizenship"],["Casualty and refugee totals","Open"]]
  }),

  "japanese-strategic-intervention-malay-bornean-war": malayBorneanSettlementArticle({
    title:"Japanese strategic intervention in the Malay–Bornean War",category:"Diplomatic interventions",infoboxKicker:"GEACPS strategic crisis, 1976–1977",
    lead:"Japanese strategic intervention in the Malay–Bornean War was the 1976–1977 escalation of Tokyo's mediation after fighting threatened oil installations, ports, bases, shipping routes, and the political credibility of the Greater East Asia Co-Prosperity Sphere. Japan abandoned restoration of Bornean Malaya and moved the conflict toward a linked settlement with Thailand.",
    canon:"The 1976–1977 strategic-crisis phase, threatened resources and transport, Japanese mediation, limitation of corporate armed action, acceptance that the combined state could not be restored, and later supervision of ceasefires and corridors are established. Conference name, delegates, commands, deployments, incidents, and formal decisions remain open.",
    sections:[
      {id:"hesitation",title:"Initial policy",html:"<p>Japan continues to recognize the Bornean Malayan government during the early revolt. Existing treaties, the Brunei court, corporate concessions, concern over separatist precedents, and Thailand's position all favor constitutional repair before territorial change.</p>"},
      {id:"strategic",title:"Strategic escalation",html:"<p>By 1976 fighting approaches petroleum works, ports, Japanese facilities, and regional shipping. A local constitutional war now threatens the resource and transport system connecting the southern archipelago to Japan.</p>"},
      {id:"corporate",title:"Corporate security",html:"<p>Zaibatsu guards protect installations and evacuation routes, allowing the Japanese state to avoid using its armed forces as plant guards during the early fighting. Engagements involving corporate infantry also demonstrate the danger of permitting firms to become independent belligerents.</p>"},
      {id:"doctrine",title:"Exceptional-federation doctrine",html:"<p>Japanese officials distinguish Bornean Malaya from settled multinational states by describing it as a postwar association that never acquired one common national people. The doctrine permits replacement of the failed federation without recognizing a general right of provincial secession throughout the Sphere.</p>"},
      {id:"thailand",title:"Negotiation with Thailand",html:"<p>Tokyo cannot recognize Bornean statehood without addressing the Malay homeland and Thai rule on the peninsula. Negotiations therefore join the Bornean constitutional question to Malayan protected sovereignty, Thai strategic rights, and compensation for relinquished direct administration.</p>"},
      {id:"conference",title:"Sphere consultation",html:"<p>The conflict reaches bloc-wide consultation because associated governments fear the precedent. Manchukuo stresses territorial continuity, the Philippines is more receptive to Bornean self-government, and smaller frontier states examine whether Japan will defend an inherited government regardless of local legitimacy.</p>"},
      {id:"supervision",title:"Ceasefire supervision",html:"<p>During the settlement phase Japanese forces and officials supervise ceasefires, disarmament areas, ports, refugee corridors, and the security of strategic installations. The exact formations, zone boundaries, and rules of engagement have not been fixed.</p>"},
      {id:"outcome",title:"Outcome",html:"<p>Japan guarantees the Bornean successor, protected Malaya, Brunei's special position, and Singapore's continued separation. Corporate concessions largely survive through renegotiation, while Tokyo places tighter political limits upon corporate security forces.</p>"}
    ],
    related:[{href:"japan.html",kicker:"Intervening power",label:"Empire of Japan"},{href:"geacps.html",kicker:"International system",label:"Greater East Asia Co-Prosperity Sphere"},{href:"malay-bornean-war.html",kicker:"Conflict",label:"Malay–Bornean War"},{href:"corporate-security-malay-bornean-war.html",kicker:"Installation defense",label:"Corporate Security in the War"},{href:"malay-bornean-triangular-settlement.html",kicker:"Negotiated result",label:"Triangular Settlement"}],
    facts:[["Strategic phase","1976–1977"],["Initial recognized government","Bornean Malaya"],["Threatened systems","Oil, ports, bases, and shipping"],["Principal negotiating partner","Thailand"],["Corporate policy","Security permitted, then restricted"],["Settlement role","Mediator and guarantor"],["Implementation","Ceasefires, disarmament, ports, and refugee corridors"],["Conference and deployment details","Open"]]
  }),

  "malay-bornean-triangular-settlement": malayBorneanSettlementArticle({
    title:"Malay–Bornean triangular settlement",category:"Treaties and settlements",infoboxKicker:"Linked Borneo–Malaya settlement, 1977–1979",
    lead:"The Malay–Bornean triangular settlement was the linked 1977–1979 reconstruction that dissolved Bornean Malaya, recognized an independent Bornean state, preserved Brunei's special position, and restored the Federated Kingdom of Malaya under Thai protection. Japan guaranteed the order and Singapore remained separate.",
    canon:"The 1977–1979 period, linked Bornean and Malayan settlements, Thai protection, Japanese guarantee, separate Singapore, retained Thai prewar southern provinces, staged recognition, and security implementation are established. The treaty's official name, signature dates, signatories, borders, compensation schedule, and Brunei instrument remain open.",
    sections:[
      {id:"negotiation",title:"Negotiation",html:"<p>The settlement joins questions that cannot be resolved separately: Bornean national statehood, the survival of Malay national institutions, Thai control of the peninsula, Japanese strategic access, corporate concessions, Brunei, and Singapore.</p>"},
      {id:"borneo",title:"Bornean state",html:"<p>Bornean Malaya is dissolved and replaced by a territorial, autonomy-based Bornean country. The new government receives international recognition without acquiring a claim to the separately sovereign Kalimantan Federation.</p>"},
      {id:"malaya",title:"Federated Kingdom of Malaya",html:"<p>A Malay federal monarchy is restored on most of the former British peninsula. It controls domestic government beneath Thai authority over defense, foreign alignment, bases, and strategic transit.</p>"},
      {id:"brunei",title:"Brunei",html:"<p>The Brunei dynasty and sultanate survive the loss of federal headship. The settlement recognizes a special and separately guaranteed position whose exact relationship with the Bornean state remains constitutionally unresolved in the present register.</p>"},
      {id:"thailand",title:"Thailand",html:"<p>Thailand exchanges direct administration over most of the peninsula for paramount protection, retained prewar southern provinces, military and transit rights, and Japanese-backed economic arrangements. Bangkok presents the change as protected sovereignty rather than territorial defeat.</p>"},
      {id:"singapore",title:"Singapore",html:"<p>Singapore remains a separate commercial city-state. Its port, finance, clearing, and insurance functions support resettlement and reconstruction, but neither the new Malayan government nor the Bornean successor acquires sovereignty over it.</p>"},
      {id:"implementation",title:"Implementation",html:"<p>Recognition occurs in stages while ceasefire lines, disarmament areas, port security, refugee corridors, citizenship, public property, and corporate agreements are transferred. Japanese guarantees prevent the parties from reopening the territorial settlement by force.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The arrangement preserves the southern GEACPS and becomes the principal precedent for replacing direct annexation with layered protection. Later disputes concern memory, concessions, autonomy, and strategic rights rather than restoration of Bornean Malaya.</p>"}
    ],
    related:[{href:"bornean-state.html",kicker:"Bornean outcome",label:"Bornean State"},{href:"malaya.html",kicker:"Malay outcome",label:"Federated Kingdom of Malaya"},{href:"brunei-settlement.html",kicker:"Dynastic settlement",label:"Brunei Settlement"},{href:"thai-protection-of-malaya.html",kicker:"Strategic relationship",label:"Thai Protection of Malaya"},{href:"japanese-strategic-intervention-malay-bornean-war.html",kicker:"Guaranteeing intervention",label:"Japanese Strategic Intervention"},{href:"singapore.html",kicker:"Separate city-state",label:"Singapore"}],
    facts:[["Period","1977–1979"],["Predecessor","Bornean Malaya"],["Bornean outcome","Independent territorial state"],["Malay outcome","Federated Kingdom under Thai protection"],["Brunei","Special separately guaranteed position"],["Singapore","Remains separate"],["Strategic guarantor","Japan"],["Official treaty title and exact borders","Open"]]
  }),

  "thai-protection-of-malaya": malayBorneanSettlementArticle({
    title:"Thai protection of Malaya",category:"Protectorates and associated states",infoboxKicker:"Strategic protection of the Federated Kingdom of Malaya",
    lead:"Thai protection of Malaya is the strategic relationship created in the 1977–1979 settlement between Thailand and the restored Federated Kingdom of Malaya. Malaya possesses domestic government, citizenship, courts, police, taxation, schools, and religious institutions, while Thailand controls the principal external and military limits of the state.",
    canon:"The protected relationship, Malayan domestic statehood, Thai authority over security and alignment, retention of Thailand's prewar southern provinces, exclusion of Singapore, Japanese guarantee, and later growth of practical Malayan autonomy are established. Treaty title, precise border, base list, railway clauses, customs formula, and fiscal transfers remain open.",
    sections:[
      {id:"origin",title:"Origin",html:"<p>The collapse of Bornean Malaya leaves the Malay nation without a recognized territorial state. Thailand agrees to restore one on most of the former British peninsula as part of the settlement ending the Malay–Bornean War.</p>"},
      {id:"domestic",title:"Malayan domestic government",html:"<p>The council of Malay rulers, federal ministries, courts, local police, taxation, citizenship, education, religious administration, and ordinary economic policy operate through Malayan institutions. These powers make Malaya a country rather than a Thai provincial administration.</p>"},
      {id:"thai",title:"Thai strategic authority",html:"<p>Bangkok directs defense, foreign alignment, restrictions on foreign military access, major bases, and strategic transit. Railway, customs, currency, and infrastructure supervision exist in forms whose final legal details remain open.</p>"},
      {id:"territory",title:"Territorial limits",html:"<p>Thailand retains its prewar southern provinces. Singapore remains outside Malaya, and the restored kingdom receives enough of the central and southern peninsula to sustain cities, ports, agriculture, public institutions, and resettlement.</p>"},
      {id:"guarantee",title:"Japanese guarantee",html:"<p>Japan finances parts of reconstruction and recognizes Thailand as protecting power. The guarantee sets a ceiling on both Thai absorption and Malayan revisionism while keeping the peninsula inside the wider Japanese strategic system.</p>"},
      {id:"politics",title:"Politics of protection",html:"<p>Thai officials describe the arrangement as durable indirect guardianship. Malayan governments treat protection as the price of restored national government and repeatedly seek wider practical authority inside the fixed security relationship.</p>"},
      {id:"burma",title:"The Burmese burden",html:"<p>Thailand's later responsibility for the Burmese protectorate consumes money, staff, military attention, and political capital. A late-1990s Malayan autonomy settlement transfers additional domestic powers while preserving Thai strategic protection.</p>"},
      {id:"position",title:"Position by 2000",html:"<p>Malaya remains a protected kingdom with substantial day-to-day self-government. Thai bases, diplomacy, and security rights continue, while trade with Singapore and Japanese investment bind the peninsula to a wider regional economy.</p>"}
    ],
    related:[{href:"malaya.html",kicker:"Protected country",label:"Federated Kingdom of Malaya"},{href:"thailand.html",kicker:"Protecting power",label:"Kingdom of Thailand"},{href:"malay-bornean-triangular-settlement.html",kicker:"Founding settlement",label:"Triangular Settlement"},{href:"malayan-autonomy-settlement.html",kicker:"Later development",label:"Malayan Autonomy Settlement"},{href:"singapore.html",kicker:"Commercial neighbor",label:"Singapore"}],
    facts:[["Established","1977–1979"],["Protected state","Federated Kingdom of Malaya"],["Protecting power","Thailand"],["Ultimate guarantor","Japan"],["Malayan powers","Domestic government, law, police, taxation, and citizenship"],["Thai powers","Defense, alignment, bases, and strategic transit"],["Excluded territories","Thai prewar south and Singapore"],["Exact treaty and border clauses","Open"]]
  }),

  "brunei-settlement": malayBorneanSettlementArticle({
    title:"Brunei settlement",category:"Constitutional settlements",infoboxKicker:"Preservation of Brunei after Bornean Malaya",
    lead:"The Brunei settlement is the part of the 1977–1979 Malay–Bornean reconstruction that preserves the Sultanate of Brunei, its dynasty, petroleum institutions, and religious and customary authority after the sultan loses the federal headship of Bornean Malaya. Brunei receives a special position guaranteed separately from the ordinary successor-state settlement.",
    canon:"Survival of the sultanate and dynasty, loss of Bornean Malayan federal headship, preservation of petroleum and customary institutions, a special separately guaranteed position, and continued economic connection with Borneo and Singapore are established. Whether Brunei is a constituent state, protected enclave, associated dependency, or another legal form remains explicitly open under P1-31.",
    sections:[
      {id:"before",title:"Brunei in Bornean Malaya",html:"<p>Brunei serves as ceremonial center of the Malay-headed state while Kuching performs much of its administration and commerce. The court supplies dynastic and religious legitimacy to a federation whose population and territory extend far beyond the sultanate.</p>"},
      {id:"war",title:"Position during the war",html:"<p>The dynasty's federal treaties, Malay national role, and relationships with Japanese petroleum firms bind it to the existing order. Bornean victory makes continued federal headship impossible, while abolition or expulsion would turn constitutional reconstruction into a permanent anti-Malay conflict.</p>"},
      {id:"headship",title:"Loss of federal headship",html:"<p>The sultan ceases to rule the whole Bornean Malayan system. The successor state's territorial nationality and autonomy-based government replace the premise that Borneo is organized around a surviving Malay national crown.</p>"},
      {id:"survival",title:"Surviving institutions",html:"<p>The sultanate, court, religious offices, customary law, local administration, and petroleum interests continue. These institutions distinguish Brunei from federal Malay officials and recent settlers who relocate to the restored peninsula or elsewhere.</p>"},
      {id:"guarantee",title:"Separate guarantee",html:"<p>Japan guarantees Brunei's position separately from ordinary Bornean administration. The guarantee protects the dynasty and strategic oil economy, but the current canon does not determine whether this produces constituent, enclave, dependency, or associated-state status.</p>"},
      {id:"borneo",title:"Relations with the Bornean State",html:"<p>Brunei remains geographically and economically tied to surrounding Borneo. Roads, labor, utilities, security, river and coastal movement, and petroleum infrastructure require regular agreements with the successor government.</p>"},
      {id:"singapore",title:"Petroleum and Singapore",html:"<p>Japanese corporate operators retain a major role in petroleum, while Singapore supplies finance, insurance, shipping, and commercial services. The settlement preserves those connections through the transition in sovereignty.</p>"},
      {id:"debate",title:"Constitutional debate",html:"<p>Later legal writing offers competing descriptions of Brunei's status because no final category has been fixed in the present archive. All interpretations accept a surviving sultanate with greater protection and separation than an ordinary Bornean province.</p>"}
    ],
    related:[{href:"brunei.html",kicker:"Sultanate",label:"Brunei"},{href:"bornean-malaya.html",kicker:"Former federal state",label:"Bornean Malaya"},{href:"bornean-state.html",kicker:"Surrounding successor",label:"Bornean State"},{href:"malay-bornean-triangular-settlement.html",kicker:"Wider settlement",label:"Triangular Settlement"},{href:"singapore.html",kicker:"Commercial outlet",label:"Singapore"}],
    facts:[["Period","1977–1979"],["Ruler","Sultan of Brunei"],["Federal headship","Ended"],["Dynasty and sultanate","Preserved"],["Economic base","Petroleum"],["Guarantee","Separate Japanese guarantee"],["Surrounding state","Bornean State"],["Exact legal category","Open under P1-31"]]
  }),

  "corporate-security-malay-bornean-war": malayBorneanSettlementArticle({
    title:"Corporate security in the Malay–Bornean War",category:"Military and corporate history",infoboxKicker:"Zaibatsu installation defense, 1973–1977",
    lead:"Corporate security in the Malay–Bornean War comprised armed zaibatsu formations protecting oilfields, refineries, depots, ports, transport corridors, offices, housing, and evacuation routes during the charter crisis and war. These forces were visibly corporate infantry rather than Japanese soldiers or ordinary police and became tactical belligerents near major petroleum installations in 1976–1977.",
    canon:"Corporate infantry-scale security, absence of independent tanks, installation and evacuation missions, one or two 1976–1977 petroleum-site engagements, reduced need for Japanese military plant protection, later renegotiation of concessions, and Tokyo's restriction of the precedent are established. Companies, unit names, strengths, weapons, uniforms, installation names, battle names, casualties, and exact dates remain open.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>Oil, timber, shipping, port, and utility companies expand watchmen and industrial guards as the charter crisis approaches armed conflict. Japanese employees, local workers, records, fuel, communications, and hazardous industrial systems require protection beyond routine commercial policing.</p>"},
      {id:"status",title:"Legal status",html:"<p>The guards are corporate employees or contractors. They are neither Japanese Army units nor ordinary host-state police, and their authority derives from concession agreements, emergency arrangements, and control of company property.</p>"},
      {id:"organization",title:"Organization and equipment",html:"<p>Forces operate at infantry and police scale with small arms, radios, vehicles, barriers, fire services, and technical personnel. They do not possess independent armored forces, artillery, or authority to conduct a territorial war.</p>"},
      {id:"missions",title:"Missions",html:"<p>Corporate detachments guard wells, refineries, tank farms, depots, offices, housing, roads, docks, and evacuation columns. Their instructions emphasize exclusion of armed factions, prevention of sabotage and fire, removal of personnel, and continuity of essential operations.</p>"},
      {id:"engagements",title:"Petroleum-site engagements",html:"<p>In one or two incidents during 1976–1977, fighting reaches major petroleum installations and corporate guards exchange sustained fire with forces seeking fuel, communications, access, or control of the works. The archive has not fixed the installation, company, combatants, or battle title.</p>"},
      {id:"japan",title:"Japanese policy",html:"<p>The corporate deployments allow Tokyo to continue mediation without assigning its armed forces to every concession. Japanese officials nevertheless object when guards become political actors or appear to determine access to territory outside the installation perimeter.</p>"},
      {id:"settlement",title:"Postwar settlement",html:"<p>Most Japanese concessions survive through renegotiation with the Bornean and Malayan successor governments. Licensing, weapons registers, national liaison, police access, and limits on movement narrow the security forces' earlier freedom.</p>"},
      {id:"precedent",title:"Later precedent",html:"<p>Borneo becomes the best-known example cited in later debates over corporate armed power in India and other unstable concessions. Tokyo retains industrial security as an exceptional instrument while denying companies an independent right to make war or foreign policy.</p>"}
    ],
    related:[{href:"zaibatsu-security-forces.html",kicker:"Wider institution",label:"Zaibatsu Security Forces"},{href:"corporate-politics-geacps.html",kicker:"Political economy",label:"Corporate Politics in the GEACPS"},{href:"bornean-malaya-charter-crisis.html",kicker:"Opening crisis",label:"Bornean Malaya Charter Crisis"},{href:"malay-bornean-war.html",kicker:"Conflict",label:"Malay–Bornean War"},{href:"japanese-strategic-intervention-malay-bornean-war.html",kicker:"State response",label:"Japanese Strategic Intervention"}],
    facts:[["Period","1973–1977"],["Operators","Japanese corporate houses and concession firms"],["Legal identity","Corporate, not army or ordinary police"],["Normal scale","Infantry and police formations"],["Heavy armor","None"],["Principal mission","Installation, corridor, and evacuation security"],["Known combat","One or two petroleum-site engagements, 1976–1977"],["Unit, company, battle, and casualty details","Open"]]
  })
});

const addMalayBorneanRelated = (slug, links) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = [...(article.related || []), ...links.filter(link => !(article.related || []).some(existing => existing.href === link.href))];
};

const malayBorneanWarOverview = window.deepArticles["malay-bornean-war"];
if (malayBorneanWarOverview) {
  malayBorneanWarOverview.sections = [...(malayBorneanWarOverview.sections || []),
    {id:"population",title:"Population displacement",html:"<p>Communal violence, seizures of food and transport, expulsions, and fear of the successor governments move civilians through Borneo, Singapore, Sumatra, and the Thai-held peninsula. The final settlement preserves long-established coastal Malay communities within Bornean citizenship while permitting officials, military families, and other displaced people to resettle.</p>"},
    {id:"corporate-forces",title:"Corporate security forces",html:"<p>Japanese companies employ armed infantry-scale security at petroleum works, ports, depots, housing, and evacuation routes. One or two 1976–1977 engagements make the guards tactical belligerents and lead Tokyo to restrict the precedent after the war.</p>"},
    {id:"memory",title:"Memory and interpretation",html:"<p>Bornean accounts describe liberation from Malay political supremacy. Malayan accounts describe the loss of the last Malay state in Borneo. Japanese accounts emphasize the negotiated correction of a failed postwar federation. Campaign commands, casualty totals, and responsibility for individual atrocities remain disputed or unfixed.</p>"}
  ];
  malayBorneanWarOverview.facts = [...(malayBorneanWarOverview.facts || []),
    ["Civilian consequence","Communal violence and regional displacement"],
    ["Corporate armed role","Petroleum-site security engagements, 1976–1977"],
    ["Belligerent order, casualties, and treaty title","Open"]
  ];
}

addMalayBorneanRelated("bornean-malaya",[
  {href:"bornean-malaya-charter-crisis.html",kicker:"Constitutional breakdown",label:"Bornean Malaya Charter Crisis"},
  {href:"bornean-nationalism.html",kicker:"Opposition movement",label:"Bornean Nationalism"},
  {href:"malay-national-crisis-bornean-war.html",kicker:"Federal response",label:"Malay National Crisis"}
]);
addMalayBorneanRelated("malay-bornean-war",[
  {href:"bornean-malaya-charter-crisis.html",kicker:"Opening phase",label:"Bornean Malaya Charter Crisis"},
  {href:"japanese-strategic-intervention-malay-bornean-war.html",kicker:"1976–1977 phase",label:"Japanese Strategic Intervention"},
  {href:"malay-bornean-triangular-settlement.html",kicker:"1977–1979 resolution",label:"Triangular Settlement"},
  {href:"corporate-security-malay-bornean-war.html",kicker:"Corporate belligerents",label:"Corporate Security in the War"}
]);
addMalayBorneanRelated("bornean-state",[
  {href:"bornean-nationalism.html",kicker:"National movement",label:"Bornean Nationalism"},
  {href:"malay-bornean-triangular-settlement.html",kicker:"Founding settlement",label:"Triangular Settlement"}
]);
addMalayBorneanRelated("brunei",[{href:"brunei-settlement.html",kicker:"1977–1979 status",label:"Brunei Settlement"}]);
addMalayBorneanRelated("malaya",[
  {href:"thai-protection-of-malaya.html",kicker:"Strategic constitution",label:"Thai Protection of Malaya"},
  {href:"malay-national-crisis-bornean-war.html",kicker:"National restoration",label:"Malay National Crisis"},
  {href:"malay-bornean-triangular-settlement.html",kicker:"Founding settlement",label:"Triangular Settlement"}
]);
addMalayBorneanRelated("thailand",[
  {href:"thai-protection-of-malaya.html",kicker:"Protected-state order",label:"Thai Protection of Malaya"},
  {href:"japanese-strategic-intervention-malay-bornean-war.html",kicker:"Imperial transition",label:"Japanese Strategic Intervention"}
]);
addMalayBorneanRelated("singapore",[{href:"malay-bornean-triangular-settlement.html",kicker:"Regional settlement",label:"Malay–Bornean Triangular Settlement"}]);
addMalayBorneanRelated("geacps",[{href:"japanese-strategic-intervention-malay-bornean-war.html",kicker:"Core constitutional crisis",label:"Japanese Intervention in the Malay–Bornean War"}]);
addMalayBorneanRelated("zaibatsu-security-forces",[{href:"corporate-security-malay-bornean-war.html",kicker:"Founding case",label:"Corporate Security in the Malay–Bornean War"}]);
addMalayBorneanRelated("corporate-security-conflicts",[{href:"corporate-security-malay-bornean-war.html",kicker:"Japanese precedent",label:"Corporate Security in the Malay–Bornean War"}]);
