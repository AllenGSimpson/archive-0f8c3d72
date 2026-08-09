window.deepArticles = window.deepArticles || {};

const hemisphereSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — United States and American Hemisphere"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Central and South American chronology"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — hemispheric decisions"},
  {href:"../transcript.md",label:"Master Transcript — American Hemisphere development"}
];

const hemisphereRelated = [
  {href:"american-hemisphere.html",kicker:"Regional system",label:"American Hemisphere"},
  {href:"united-states.html",kicker:"Hemispheric hegemon",label:"United States"},
  {href:"falklands-war.html",kicker:"South Atlantic conflict",label:"Falklands–Malvinas War"},
  {href:"latin-bloc.html",kicker:"External influence",label:"Latin Bloc"}
];

const hemisphereArticle = config => ({
  category:"American Hemisphere",
  eyebrow:"Hemispheric politics and society",
  infoboxKicker:"American Hemisphere reference",
  ...config,
  related:[...(config.related||[]),...hemisphereRelated.filter(item=>item.href!==config.slug+".html"&&!(config.related||[]).some(other=>other.href===item.href))],
  sources:config.sources||hemisphereSources,
  categories:config.categories||["American Hemisphere","Latin America","Postwar international relations"],
  facts:config.facts||[]
});

Object.assign(window.deepArticles, {
  "ecuador": hemisphereArticle({
    slug:"ecuador",title:"Republic of Ecuador",eyebrow:"GEACPS-associated Pacific republic · 1985",infoboxKicker:"Sovereign state",
    lead:"Ecuador is a sovereign Pacific republic whose principal foreign alignment by 1985 is with the Greater East Asian Co-Prosperity Sphere. Japanese shipping, fisheries, port investment, technical missions, and commerce provide Quito and Guayaquil an alternative to American dominance without placing the country inside Japanese territorial administration.",
    canon:"Ecuador's GEACPS-leaning alignment and Pacific commercial role are established at the strategic level. Its exact postwar governments, treaty names, and internal chronology remain working history.",
    sections:[
      {id:"postwar",title:"Postwar republic",html:"<p>Ecuador emerges from the war outside direct combat but inside a transformed Pacific economy. The United States still claims hemispheric primacy, while Japan can now reach the South American coast through shipping, associated states, and its eastern island network.</p>"},
      {id:"alignment",title:"GEACPS association",html:"<p>Association rests on contracts, port access, trade, training, and technical representation rather than a Japanese garrison or protectorate. Ecuador remains outside the formal constitutional hierarchy of Dai Tōa Kyōeiken.</p>"},
      {id:"guayaquil",title:"Guayaquil and the Pacific corridor",html:"<p>Guayaquil is the natural hinge of the relationship. Harbor works, cold storage, fisheries, merchant shipping, repair, and trans-Pacific schedules connect Ecuador to Japanese and Peruvian commercial circuits.</p>"},
      {id:"economy",title:"Economy and development",html:"<p>Agricultural exports, fisheries, petroleum prospects, mining, and coastal commerce finance modernization. Japanese credit and equipment reduce dependence on northern markets but also concentrate development around export corridors.</p>"},
      {id:"politics",title:"Domestic political use",html:"<p>Governments present Pacific association as economic diversification and national development. Opponents describe foreign concessions and advisory missions as a quieter form of dependency.</p>"},
      {id:"security",title:"Security and procurement",html:"<p>Ecuador purchases communications, patrol, transport, and selected military equipment suited to coast, mountains, and the Peruvian frontier. The armed forces remain nationally commanded and use several foreign suppliers.</p>"},
      {id:"neighbors",title:"Peru and regional balance",html:"<p>Peru is the stronger GEACPS-associated Pacific partner. Shared Japanese access creates infrastructure links while leaving territorial memory and military competition between Lima and Quito unresolved.</p>"},
      {id:"1985",title:"Ecuador in 1985",html:"<p>The hemispheric alignment chart classifies Ecuador with GEACPS because Japanese relationships most strongly shape its Pacific development. The classification does not imply ideological identity, common nationality, or loss of sovereignty.</p>"}
    ],
    related:[{href:"peru.html",kicker:"Stronger Pacific partner",label:"Republic of Peru"},{href:"geacps.html",kicker:"External economic system",label:"GEACPS"}],
    facts:[["Capital","Quito"],["Largest port","Guayaquil"],["Government","Sovereign republic"],["1985 alignment","GEACPS-associated"],["Relationship form","Commercial and technical association"],["Principal corridor","Pacific coast"],["Military status","National command; multi-source procurement"],["Canon precision","Strategic alignment fixed; chronology working"]]
  }),

  "uruguay": hemisphereArticle({
    slug:"uruguay",title:"Oriental Republic of Uruguay",eyebrow:"Neutral commercial clearing state · South Atlantic",infoboxKicker:"Sovereign state",
    lead:"Uruguay is a neutral South Atlantic republic that emerges from authoritarian rule as a civilian commercial and diplomatic clearing center. Its position between Argentina and Brazil, access to Atlantic finance, and refusal of exclusive bloc alignment give Montevideo unusual importance in regional mediation.",
    canon:"The transition from dictatorship to a neutral civilian clearing center and Uruguay's mediating role are established. Exact restoration dates, leaders, and constitutional sequence remain working history.",
    sections:[
      {id:"position",title:"The small-state position",html:"<p>Uruguay's survival depends on preventing either Argentina or Brazil from treating the Río de la Plata as an exclusive strategic space. Neutrality is active bargaining, not withdrawal from regional politics.</p>"},
      {id:"authoritarian",title:"Authoritarian interlude",html:"<p>Security rule expands amid labor conflict, foreign influence, and regional militarization. The regime preserves state capacity but damages the civilian legitimacy on which a small commercial republic depends.</p>"},
      {id:"restoration",title:"Civilian restoration",html:"<p>By the 1980s civilian government returns and deliberately reconstructs courts, parties, unions, and municipal authority. The exact transition calendar remains open in the reference corpus.</p>"},
      {id:"clearing",title:"Commercial clearing center",html:"<p>Montevideo develops banking, insurance, arbitration, shipping, warehousing, and currency settlement services usable by Argentine, Brazilian, American, Latin, and Commonwealth firms.</p>"},
      {id:"neutrality",title:"Neutral foreign policy",html:"<p>Uruguay avoids permanent foreign combat forces and balances access among competing systems. Its neutrality is credible because all larger neighbors benefit from a place where transactions and talks can occur.</p>"},
      {id:"punta",title:"Punta del Este diplomacy",html:"<p>Uruguay helps host and mediate the 1986 Punta del Este Protocols ending the Falklands–Malvinas War. The role confirms its transition from object of regional competition to useful diplomatic venue.</p>"},
      {id:"society",title:"Society and memory",html:"<p>Urban civic traditions, organized labor, welfare institutions, and the memory of repression make constitutional restoration central to national identity. Neutral commerce is defended as a political settlement as much as an economic model.</p>"},
      {id:"1985",title:"Uruguay in 1985",html:"<p>The alignment chart places Uruguay among Neutral / Independent states. It trades widely and cooperates with the American system without accepting an American security-client identity.</p>"}
    ],
    related:[{href:"punta-del-este-protocols.html",kicker:"Mediated peace",label:"Punta del Este Protocols"},{href:"argentina.html",kicker:"Western neighbor",label:"Argentina"},{href:"brazil.html",kicker:"Northern neighbor",label:"Brazil"}],
    facts:[["Capital","Montevideo"],["Government","Restored civilian republic"],["1985 alignment","Neutral / Independent"],["Regional position","Río de la Plata buffer"],["Economic role","Commercial and financial clearing center"],["Diplomatic role","Punta del Este mediator"],["Principal neighbors","Argentina and Brazil"],["Restoration chronology","Working history"]]
  }),

  "paraguay": hemisphereArticle({
    slug:"paraguay",title:"Republic of Paraguay",eyebrow:"Authoritarian inland balancer · 1985",infoboxKicker:"Sovereign state",
    lead:"Paraguay is an authoritarian inland balancer under Alfredo Stroessner whose government turns geography into leverage. Asunción serves as buffer, marketplace, intelligence crossroads, and transit negotiator among Argentina, Brazil, Bolivia, the United States, Germany, and the Latin powers.",
    canon:"Stroessner's rule and Paraguay's buffer-market role are established at the strategic level. Detailed treaties, later succession, and the scale of each foreign network remain working history.",
    sections:[
      {id:"stroessner",title:"The Stroessner order",html:"<p>Military, party, police, and patronage institutions sustain a durable authoritarian regime. Anti-communism secures American tolerance while commercial bargaining prevents complete dependence on Washington.</p>"},
      {id:"buffer",title:"An inland buffer",html:"<p>Paraguay lies between the two largest South American powers and beside Bolivia's route disputes. None of its neighbors benefits from another gaining exclusive military or commercial control.</p>"},
      {id:"market",title:"Marketplace and transit",html:"<p>River traffic, customs, re-export commerce, agricultural settlement, smuggling, and foreign construction make the country a marketplace between incompatible standards and tariff systems.</p>"},
      {id:"argentina",title:"Argentina and the German connection",html:"<p>German-equipped Argentina is the most immediate strategic pressure. Paraguay trades with Buenos Aires and accommodates German commercial networks without becoming an Einheitspakt associated state.</p>"},
      {id:"brazil",title:"Brazilian counterweight",html:"<p>Roads, power, river access, and trade with Brazil reduce dependence on Argentina. Brasília uses development projects to keep Paraguay within a broader continental balance.</p>"},
      {id:"america",title:"American security relationship",html:"<p>Washington values anti-communism, access, and the exclusion of permanent foreign bases. Paraguay accepts training and diplomatic support while resisting oversight of its internal security system.</p>"},
      {id:"society",title:"Settlement and inequality",html:"<p>Rural patronage, land allocation, migration, indigenous communities, and frontier settlement shape the social order. State-connected beneficiaries gain most from infrastructure and export growth.</p>"},
      {id:"1985",title:"Paraguay in 1985",html:"<p>The alignment chart classifies Paraguay as Neutral / Independent. The label records its deliberate multi-directional bargaining, not democratic neutrality or absence of repression.</p>"}
    ],
    related:[{href:"bolivia.html",kicker:"Western buffer partner",label:"Bolivia"},{href:"argentina.html",kicker:"Southern influence",label:"Argentina"},{href:"brazil.html",kicker:"Eastern counterweight",label:"Brazil"}],
    facts:[["Capital","Asunción"],["Head of state","Alfredo Stroessner"],["Government","Authoritarian republic"],["1985 alignment","Neutral / Independent"],["Strategic role","Inland buffer and marketplace"],["Principal transport","Paraguay–Paraná river system"],["External balance","Argentina, Brazil, United States"],["Political succession","Open"]]
  }),

  "bolivia": hemisphereArticle({
    slug:"bolivia",title:"Republic of Bolivia",eyebrow:"Landlocked mineral and route balancer · 1985",infoboxKicker:"Sovereign state",
    lead:"Bolivia is a landlocked neutral state whose governments bargain over minerals, pipelines, railways, roads, and access to neighboring ports. Political instability limits national planning, but rival blocs and neighboring states all require Bolivian resources or corridors and therefore have incentives to preserve its formal sovereignty.",
    canon:"Bolivia's neutral balancing role through routes and minerals is established. Exact postwar rulers, coup chronology, and concession agreements remain working history.",
    sections:[
      {id:"landlocked",title:"The landlocked condition",html:"<p>Every large export and military relationship depends on transit through Chile, Peru, Argentina, Brazil, or Paraguay. Foreign policy is therefore inseparable from rail gauge, port rights, customs, and road finance.</p>"},
      {id:"politics",title:"Revolution and military government",html:"<p>Mass politics, organized miners, peasant mobilization, military intervention, and regional elites create repeated constitutional ruptures. No regime can govern without bargaining over land, mines, and the armed forces.</p>"},
      {id:"minerals",title:"Minerals and concessions",html:"<p>Tin and other strategic minerals attract American, German, Japanese, and Latin interest. Governments use concession competition to seek processing plants, transport, and higher retained value.</p>"},
      {id:"routes",title:"Route diplomacy",html:"<p>Argentine railways, Brazilian roads and rivers, Paraguayan transit, Chilean ports, and Peruvian Pacific access offer rival exits. Infrastructure contracts often carry security and alignment consequences.</p>"},
      {id:"paraguay",title:"The Paraguay–Bolivia buffer",html:"<p>The two inland states form a loose buffer between larger powers rather than a formal alliance. Their markets and corridors allow trade to bypass any single coastal patron.</p>"},
      {id:"military",title:"Armed forces",html:"<p>The military remains a principal national institution and political arbiter. Equipment comes from several suppliers, creating logistical weakness but reducing exclusive foreign control.</p>"},
      {id:"society",title:"Highland and lowland divide",html:"<p>Mining highlands, indigenous communities, eastern agricultural districts, and new transport corridors experience the state differently. Development projects can shift power between La Paz and the eastern lowlands.</p>"},
      {id:"1985",title:"Bolivia in 1985",html:"<p>Bolivia appears as Neutral / Independent in the hemispheric chart. Its neutrality is produced by vulnerability and competitive bargaining rather than strategic isolation.</p>"}
    ],
    related:[{href:"paraguay.html",kicker:"Inland buffer relationship",label:"Paraguay"},{href:"chile.html",kicker:"Pacific route and rival",label:"Chile"},{href:"peru.html",kicker:"Pacific route and supplier",label:"Peru"}],
    facts:[["Capital","Sucre; government seated at La Paz"],["Government","Unstable sovereign republic"],["1985 alignment","Neutral / Independent"],["Strategic condition","Landlocked"],["Principal leverage","Minerals and transit routes"],["Procurement","Multiple foreign suppliers"],["Regional role","Interior buffer"],["Detailed chronology","Working history"]]
  }),

  "panama": hemisphereArticle({
    slug:"panama",title:"Republic of Panama",eyebrow:"Canal republic under expanded American security",infoboxKicker:"Sovereign state",
    lead:"Panama is a formally sovereign republic whose strategic freedom is constrained by the expanded American defense system surrounding the interoceanic canal. After the 1968 political rupture, the government combines military-backed nationalism with a practical recognition that Washington will not permit rival-bloc control of the waterway.",
    canon:"Formal sovereignty, the post-1968 military-backed regime, and expanded American Canal defenses are established at the strategic level. Exact leaders and later treaty chronology remain working history.",
    sections:[
      {id:"canal",title:"The canal state",html:"<p>The canal makes Panama indispensable to American naval movement, hemispheric trade, and emergency logistics. No ordinary doctrine of nonintervention survives a perceived threat to its control.</p>"},
      {id:"1968",title:"The 1968 rupture",html:"<p>Military intervention displaces the prior party order and creates a nationalist security regime. The government seeks greater Panamanian dignity without convincing Washington that strategic control can safely be transferred.</p>"},
      {id:"sovereignty",title:"Formal sovereignty and practical limits",html:"<p>Panama retains its constitution, flag, diplomacy, and national institutions. American forces, intelligence, communications, and denial planning nevertheless set the outer boundary of permissible foreign alignment.</p>"},
      {id:"defenses",title:"Expanded Canal defenses",html:"<p>Airfields, radar, communications, garrisons, locks security, rapid reinforcement, and maritime surveillance expand as Germany, Japan, and the Latin powers develop longer reach.</p>"},
      {id:"economy",title:"Transit economy",html:"<p>Shipping, registration, warehousing, banking, construction, services, and American expenditure shape the economy. Canal dependence creates prosperity and a recurring sovereignty grievance.</p>"},
      {id:"diplomacy",title:"Nationalist bargaining",html:"<p>Panamanian leaders use anti-colonial language, international opinion, and the cost of local disorder to seek revenue and administrative concessions. Washington treats negotiations as adjustment within permanent strategic control.</p>"},
      {id:"region",title:"Central American position",html:"<p>The country connects Caribbean and Pacific security systems and lies between Colombia and the smaller Central American republics. It becomes a logistics hub for American interventions and relief.</p>"},
      {id:"1985",title:"Panama in 1985",html:"<p>The hemispheric chart places Panama in the American system: sovereign in law, nationalist in public language, and tightly constrained wherever the canal or foreign bases are concerned.</p>"}
    ],
    related:[{href:"colombia.html",kicker:"Southern neighbor",label:"Colombia"},{href:"costa-rica.html",kicker:"Northern neighbor",label:"Costa Rica"},{href:"hemispheric-renewal-act.html",kicker:"American regional doctrine",label:"Hemispheric Renewal Act"}],
    facts:[["Capital","Panama City"],["Government","Military-backed sovereign republic"],["1985 alignment","American Hemisphere"],["Strategic asset","Panama Canal"],["American posture","Expanded defense and denial system"],["Foreign bases","Rival-bloc control excluded"],["Economic role","Transit, shipping, banking, services"],["Post-1968 chronology","Working history"]]
  }),

  "nicaragua": hemisphereArticle({
    slug:"nicaragua",title:"Republic of Nicaragua",eyebrow:"Contested American-aligned republic · Central America",infoboxKicker:"Sovereign state",
    lead:"Nicaragua is an American-aligned Central American republic contested by a Sandinista movement that develops without a surviving Soviet patron or a Marxist Cuban state. The conflict is nationalist, anti-dynastic, agrarian, and socially revolutionary, while Catholic and Hispanic networks compete with American security power over its political outcome.",
    canon:"American alignment, a non-Marxist Sandinista conflict, and strong foreign-network competition are established. Exact leaders, war dates, factions, and settlement remain open.",
    sections:[
      {id:"order",title:"The established order",html:"<p>A family-centered security regime, landholding interests, the National Guard, and American support dominate the postwar state. Its anticommunism retains value even after Soviet collapse because Washington fears any rival foothold near the canal approaches.</p>"},
      {id:"sandinistas",title:"The non-Marxist Sandinista movement",html:"<p>Sandinismo draws on national sovereignty, anti-dynastic memory, agrarian reform, student politics, Catholic social action, and resistance to American control. Without Moscow and revolutionary Havana, it cannot reproduce the historical Marxist coalition.</p>"},
      {id:"church",title:"Catholic networks",html:"<p>Clergy, schools, lay associations, peasant organization, and Spanish-linked Catholic institutions provide civic space outside both the security state and revolutionary command.</p>"},
      {id:"foreign",title:"Competing foreign influence",html:"<p>Washington supplies security assistance and political limits. Spain and Latin Catholic networks possess cultural access; Germany and Japan can offer selective equipment or commerce but cannot safely establish combat missions.</p>"},
      {id:"war",title:"The unsettled conflict",html:"<p>Insurgency, repression, negotiation, and factional fracture define the working chronology. The absence of a communist bloc changes outside aid without removing the causes of rebellion.</p>"},
      {id:"economy",title:"Economy and social order",html:"<p>Agriculture, export estates, smallholders, transport corridors, and foreign companies create unequal access to land and credit. Development programs become instruments of both reform and counterinsurgency.</p>"},
      {id:"alignment",title:"American alignment",html:"<p>The United States treats Nicaragua as part of its security system and denies rival bases. Alignment does not guarantee stability or make the government an uncontested representative of Nicaraguan nationalism.</p>"},
      {id:"open",title:"Unresolved settlement",html:"<p>As of the current historical record, the exact later constitution and leadership remain unsettled. The article therefore distinguishes established strategic structure from working political detail.</p>"}
    ],
    related:[{href:"honduras.html",kicker:"Northern American client",label:"Honduras"},{href:"costa-rica.html",kicker:"Civilian southern neighbor",label:"Costa Rica"},{href:"el-salvador.html",kicker:"Regional insurgency",label:"El Salvador"},{href:"panama.html",kicker:"Southern strategic system",label:"Panama"},{href:"catholicism-in-latin-bloc.html",kicker:"Catholic diplomatic network",label:"Catholicism in the Latin Bloc"}],
    facts:[["Capital","Managua"],["Government","Contested republic"],["1985 alignment","American Hemisphere"],["Principal armed challenge","Non-Marxist Sandinista movement"],["Soviet patronage","Absent"],["Cuban revolutionary patronage","Absent"],["External competitors","United States and Latin Catholic networks"],["Final settlement","Open"]]
  }),

  "suriname": hemisphereArticle({
    slug:"suriname",title:"Republic of Suriname",eyebrow:"American defense associate · Guiana coast",infoboxKicker:"Sovereign state",
    lead:"Suriname is a sovereign Guiana-coast republic drawn into American defense association during Pat Buchanan's first term. Debt relief, port access, customs assistance, dollar linkage, communications, and a bilateral defense treaty bind Paramaribo to Washington without annexation.",
    canon:"American defense association without annexation is established. Exact treaty title, government sequence, and force arrangements remain working history.",
    sections:[
      {id:"independence",title:"Postcolonial independence",html:"<p>Suriname leaves Dutch rule in a world where the Netherlands exists within Germany's European system. Independence therefore removes formal colonial government without restoring an ordinary Dutch-American Atlantic relationship.</p>"},
      {id:"guiana",title:"The Guiana coast",html:"<p>Suriname lies between Commonwealth Guyana and the former French Guianese successor. Rivers, rainforest, bauxite districts, ports, and the northeastern approach to Brazil give the coast disproportionate strategic value.</p>"},
      {id:"buchanan",title:"Buchanan-era association",html:"<p>During 1977–1980 Washington uses gunboat diplomacy, debt relief, port agreements, customs supervision, dollar linkage, and defense guarantees to draw Suriname into its system.</p>"},
      {id:"treaty",title:"Defense relationship",html:"<p>The association gives the United States access, surveillance, communications, and denial rights while preserving Surinamese statehood and national command over ordinary internal government.</p>"},
      {id:"economy",title:"Bauxite and infrastructure",html:"<p>Bauxite, alumina, river transport, energy, agriculture, and the port economy attract foreign capital. American assistance stabilizes external accounts but increases exposure to political conditions.</p>"},
      {id:"society",title:"Plural society",html:"<p>Creole, Hindustani, Javanese, Maroon, Indigenous, and other communities make coalition and regional administration central questions. Defense association does not resolve internal distribution or representation.</p>"},
      {id:"sovereignty",title:"Association without annexation",html:"<p>Suriname does not become an American territory, freely associated state, or Canal Zone analogue. Its sovereignty is real, though external security choices are sharply narrowed.</p>"},
      {id:"1985",title:"Suriname in 1985",html:"<p>The alignment chart places Suriname in the American Hemisphere. The relationship is more coercive than an equal alliance and less complete than the Honduran near-client system.</p>"}
    ],
    related:[{href:"commonwealth.html",kicker:"Neighboring Guyana's system",label:"British Commonwealth"},{href:"brazil.html",kicker:"Southern continental neighbor",label:"Brazil"},{href:"american-hemisphere.html",kicker:"Defense alignment",label:"American Hemisphere"}],
    facts:[["Capital","Paramaribo"],["Government","Sovereign republic"],["1985 alignment","American Hemisphere"],["Association period","Buchanan first term, 1977–1980"],["Strategic coast","Guiana coast"],["Principal resource","Bauxite and alumina"],["Legal status","Defense associate; not annexed"],["Treaty title","Open"]]
  }),

  "second-cristiada": hemisphereArticle({
    slug:"second-cristiada",title:"Second Cristiada",eyebrow:"Mexico · Catholic civil society · c. 1977–1979",infoboxKicker:"Political and religious conflict",
    lead:"The Second Cristiada was the Mexican conflict produced by a state crackdown on Catholic civil society and the subsequent convergence of parish, civic, regional, and Catholic-national resistance. It was not a simple repetition of the 1920s Cristero War and ended through Pat Buchanan's armed diplomatic mediation rather than overt Spanish intervention.",
    canon:"The approximate 1977–1979 conflict, its origin in repression of Catholic civil society, Spanish indirect support, Buchanan's decisive mediation, and the 1979–1980 settlement are working canon. Exact campaigns, leaders, and settlement title remain open.",
    sections:[
      {id:"background",title:"Religious and constitutional inheritance",html:"<p>Mexico's revolutionary state retained deep conflict over Church property, education, political organization, local autonomy, and the public role of Catholic institutions. The memory of the first Cristiada gave later repression an immediately recognizable historical language.</p>"},
      {id:"crackdown",title:"The state crackdown",html:"<p>Restrictions on Catholic schools, associations, political organization, publications, and regional networks transformed a constitutional dispute into a crisis of civil society. Police and administrative measures preceded broad armed resistance.</p>"},
      {id:"movement",title:"The resistance coalition",html:"<p>Parish networks, Catholic lay organizations, regional notables, students, workers, veterans, and national conservatives entered the conflict for different reasons. No single clerical army directed the whole movement.</p>"},
      {id:"spanish",title:"Spanish and Vatican involvement",html:"<p>Spain assisted Catholic networks indirectly through money, publishing, contacts, refuge, and diplomacy. The Vatican sought protection of the Church without allowing Mexico to become a Spanish geopolitical dependency.</p>"},
      {id:"america",title:"American limits",html:"<p>Washington would not tolerate a permanent European military presence or a rival-aligned Mexican government. Buchanan nevertheless rejected invasion and treated religious settlement as a means of preserving Mexican sovereignty within hemispheric limits.</p>"},
      {id:"mediation",title:"Buchanan's mediation",html:"<p>The American president became the indispensable outside mediator in 1979–1980. His leverage over trade, intelligence, border security, and foreign intervention allowed both state and resistance leaders to bargain without public surrender to Spain.</p>"},
      {id:"cost",title:"Violence and regional variation",html:"<p>The conflict combined repression, clandestine organization, local armed action, strikes, sabotage, negotiation, and communal defense. The exact operational history and casualty totals remain open.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The settlement produced a Catholic-national consolidation through 1985 and reopened debate over Mexico's revolutionary constitutional identity. A later monarchy remained only a trajectory, not an established result of the war.</p>"}
    ],
    related:[{href:"mexico.html",kicker:"National history",label:"Mexico"},{href:"mexican-catholic-national-settlement.html",kicker:"1979–1980 settlement",label:"Catholic-National Settlement"},{href:"religious-immunity.html",kicker:"Catholic civil doctrine",label:"Religious Immunity"}],
    facts:[["Period","c. 1977–1979"],["Country","Mexico"],["Immediate cause","Crackdown on Catholic civil society"],["Resistance","Catholic-national and regional coalition"],["Spanish role","Indirect support"],["Principal mediator","Pat Buchanan"],["Settlement period","1979–1980"],["Exact campaigns and casualties","Open"]]
  }),

  "mexican-catholic-national-settlement": hemisphereArticle({
    slug:"mexican-catholic-national-settlement",title:"Mexican Catholic-national settlement",eyebrow:"Second Cristiada settlement · 1979–1985",infoboxKicker:"Constitutional and political settlement",
    lead:"The Mexican Catholic-national settlement was the 1979–1980 compromise that ended the Second Cristiada and re-established legal space for Catholic civil society while preserving Mexican sovereignty, the federal republic, and American exclusion of permanent European military power. Its institutions consolidated through 1985.",
    canon:"The mediation, broad settlement principles, and consolidation through 1985 are established. The formal title, complete constitutional text, governing coalition, and any later monarchy remain open.",
    sections:[
      {id:"negotiation",title:"Negotiating framework",html:"<p>Buchanan mediated among federal authorities, Catholic-national representatives, regional power brokers, the hierarchy, and indirect Spanish interests. No participant received an unconditional victory.</p>"},
      {id:"church",title:"Catholic civil guarantees",html:"<p>The settlement restored or protected schools, lay associations, charitable institutions, publications, property administration, and political participation without making sacramental conformity a condition of citizenship.</p>"},
      {id:"state",title:"Continuity of the state",html:"<p>Mexico remained a sovereign federal republic. The agreement did not place the cabinet under Vatican authority or restore Spain as a political patron.</p>"},
      {id:"security",title:"Disarmament and security",html:"<p>Local armed networks demobilized unevenly under guarantees, amnesties, and monitoring. Federal security institutions survived but lost part of their authority to suppress ordinary Catholic organization.</p>"},
      {id:"american",title:"Hemispheric ceiling",html:"<p>The United States guaranteed that Spain and other European powers would not establish permanent forces. In return, Washington accepted a more publicly Catholic Mexican order than earlier administrations preferred.</p>"},
      {id:"consolidation",title:"Consolidation through 1985",html:"<p>New associations, regional governments, Catholic schools, family organizations, and economic networks converted a wartime coalition into a political field. Factional divisions persisted over corporatism, federalism, labor, and presidential power.</p>"},
      {id:"monarchy",title:"The monarchy question",html:"<p>Some movements revived Iturbidist, royal, or elective-hereditary ideas. No monarch, dynasty, date, or constitutional form was fixed by 1985; later monarchy remained a plausible trajectory rather than settled history.</p>"},
      {id:"meaning",title:"Constitutional meaning",html:"<p>The settlement ended the claim that revolutionary secular institutions alone defined Mexican legitimacy. It did not abolish the revolution's federal, social, agrarian, or nationalist inheritance.</p>"}
    ],
    related:[{href:"second-cristiada.html",kicker:"Preceding conflict",label:"Second Cristiada"},{href:"catholicism-in-latin-bloc.html",kicker:"Spanish and Vatican context",label:"Catholicism in the Latin Bloc"}],
    facts:[["Negotiated","1979–1980"],["Consolidation","Through 1985"],["Principal mediator","Pat Buchanan"],["State form in 1985","Federal republic"],["Church settlement","Civil and institutional guarantees"],["European forces","Excluded"],["Later monarchy","Possible but not fixed"],["Formal treaty title","Open"]]
  }),

  "havana-understanding": hemisphereArticle({
    slug:"havana-understanding",title:"Havana Understanding",eyebrow:"Cuba · Latin Bloc · United States · 1975–1980",infoboxKicker:"Informal diplomatic arrangement",
    lead:"The Havana Understanding was the 1975–1980 diplomatic framework that managed Latin Bloc support for Cuba without ending it and preserved the island's status as an armed neutral rather than an Einheitspakt or Latin client. It reduced the danger that assistance would trigger an American invasion or permanent foreign-base crisis.",
    canon:"The understanding, its approximate period, and its function in managing rather than terminating Latin support are established. Signatories, clauses, and whether it was one text or a sequence of arrangements remain open.",
    sections:[
      {id:"fortress",title:"The Cuban fortress problem",html:"<p>Cuba's conscription, reserves, fortified ports, dispersed command, patrol forces, and licensed German-origin weapons made invasion costly. Washington preferred containment if outside powers remained below the threshold of permanent combat presence.</p>"},
      {id:"latin",title:"Latin support",html:"<p>Spain and other Latin states possessed cultural, Catholic, commercial, and political access. Assistance included finance, trade, diplomacy, replacement matériel, and technical contact rather than an open expeditionary force.</p>"},
      {id:"american",title:"American red lines",html:"<p>The United States demanded no permanent European bases, combat formations, strategic missiles, or foreign command over Cuban forces. It did not require Cuba to become an American client.</p>"},
      {id:"form",title:"An understanding rather than alliance",html:"<p>The arrangement may have consisted of parallel assurances and practices rather than one public treaty. Its ambiguity allowed Havana to preserve sovereign dignity and Latin governments to avoid formal retreat.</p>"},
      {id:"arms",title:"Arms and technical channels",html:"<p>Cuba retained foreign attachés, suppliers, and licensed production while keeping national crews and command. Transfers were calibrated to defense and regime survival rather than long-range foreign power projection.</p>"},
      {id:"diplomacy",title:"Diplomatic management",html:"<p>Back channels, inspections by presence rather than intrusive occupation, and warnings over individual shipments prevented repeated crises from becoming a general war.</p>"},
      {id:"limits",title:"What it did not settle",html:"<p>The understanding did not end American surveillance, blockade planning, Cuban mobilization, or Latin political sympathy. It managed escalation without reconciling the parties.</p>"},
      {id:"legacy",title:"Legacy by 1985",html:"<p>Cuba remained Neutral / Independent: contained by America, connected to Latin networks, equipped partly through foreign systems, and unwilling to accept any foreign protectorate.</p>"}
    ],
    related:[{href:"cuba.html",kicker:"Participant state",label:"Cuba"},{href:"latin-bloc.html",kicker:"External supporter",label:"Latin Bloc"}],
    facts:[["Period","1975–1980"],["Form","Informal framework or sequence of arrangements"],["Principal subject","Latin support for Cuba"],["American red line","No permanent foreign combat presence"],["Cuban status","Armed neutral"],["Support ended","No; managed"],["Alliance created","No"],["Detailed clauses","Open"]]
  }),

  "luso-brazilian-community": hemisphereArticle({
    slug:"luso-brazilian-community",title:"Luso-Brazilian Community",eyebrow:"Portugal · Brazil · Atlantic association",infoboxKicker:"Economic and cultural community",
    lead:"The Luso-Brazilian Community is the economic, cultural, and diplomatic association linking Portugal and Brazil within the wider Latin system. It gives Brazil access to Latin finance, technology, Atlantic routes, and Catholic diplomacy without making Brasília subordinate to Rome, Madrid, or Lisbon.",
    canon:"The community and its deepening through 1980–1985 are established. Its exact charter, membership organs, and treaty date remain working history.",
    sections:[
      {id:"origins",title:"Lusophone foundation",html:"<p>Language, migration, law, commerce, Catholic institutions, and old diplomatic ties gave Portugal a route into Brazil unavailable to Spanish Hispanic diplomacy.</p>"},
      {id:"purpose",title:"Purpose",html:"<p>The community coordinates trade, development finance, professional recognition, shipping, research, and cultural exchange. It is designed as association between sovereign states rather than an imperial restoration.</p>"},
      {id:"portugal",title:"Portugal's brokerage",html:"<p>Portugal uses Atlantic islands, African territories, ports, shipping, and membership in the Latin system to connect Brazilian markets with Europe and Africa while resisting Spanish or Italian command.</p>"},
      {id:"brazil",title:"Brazilian autonomy",html:"<p>Brazil accepts Latin-leaning alignment but retains national defense, industrial policy, and relations with America and Britain. The community is useful precisely because it does not require political subordination.</p>"},
      {id:"economy",title:"Economic cooperation",html:"<p>Shipping, banking, energy, mining, agriculture, aircraft ambitions, machinery, telecommunications, and professional services form the practical agenda. Brazilian scale and Portuguese access are complementary.</p>"},
      {id:"security",title:"Security limits",html:"<p>The community does not turn Brazil into the Latin Bloc's military center or bind Brazilian forces to Italian command. Strategic cooperation remains selective and nationally approved.</p>"},
      {id:"argentina",title:"The Argentine balance",html:"<p>German-assisted Argentine power encourages Brazil to value Latin connections, while Portugal presents them as a sovereign alternative rather than a continental alliance directed at Buenos Aires.</p>"},
      {id:"1985",title:"Deepening by 1985",html:"<p>Economic association becomes denser during 1980–1985. Its success helps explain Brazil's Latin-leaning classification while preserving a political identity larger than any external bloc label.</p>"}
    ],
    related:[{href:"brazil.html",kicker:"Largest member",label:"Brazil"},{href:"portugal.html",kicker:"Atlantic broker",label:"Portugal"},{href:"catholicism-in-latin-bloc.html",kicker:"Religious diplomacy",label:"Catholicism in the Latin Bloc"}],
    facts:[["Principal members","Portugal and Brazil"],["Political form","Sovereign association"],["Primary basis","Language, commerce, Atlantic routes, Catholic institutions"],["Brazilian alignment","Latin-leaning"],["Military integration","Limited"],["Deepening period","1980–1985"],["Purpose","Economic, cultural, and diplomatic cooperation"],["Exact charter date","Working history"]]
  }),

  "santiago-doctrine": hemisphereArticle({
    slug:"santiago-doctrine",title:"Santiago Doctrine",eyebrow:"Chilean balancing doctrine · Pinochet era",infoboxKicker:"Foreign and security doctrine",
    lead:"The Santiago Doctrine is Chile's policy of preserving independence by making every rival power account for Chile while allowing none to become indispensable. Under Augusto Pinochet it joins hard internal authoritarianism to multi-source security ties, selective development borrowing, and refusal of exclusive alignment.",
    canon:"Pinochet's role as an authoritarian Chilean balancer and the doctrine's strategic meaning are established. Its formal promulgation, internal documents, and exact economic program remain working history.",
    sections:[
      {id:"premise",title:"Strategic premise",html:"<p>Chile cannot outscale Argentina, Brazil, America, or the external blocs. It can make its geography, copper, Pacific ports, armed forces, and Antarctic access relevant to all of them.</p>"},
      {id:"pinochet",title:"Pinochet's order",html:"<p>Repression and military government remain central facts. The regime is not simply a recreation of the historical Allende coup and Chicago-school settlement; its legitimacy is framed through sovereignty, order, and national capacity.</p>"},
      {id:"security",title:"American and British security ties",html:"<p>Practical security relationships lean American and British, especially in intelligence, maritime knowledge, and the Argentine balance. Chile does not accept automatic participation in Washington's interventions.</p>"},
      {id:"development",title:"Selective development borrowing",html:"<p>Japan supplies models of export, compact industry, and Pacific commerce; the Latin Bloc offers design, finance, and Catholic channels; German equipment remains useful in selected land roles.</p>"},
      {id:"copper",title:"Copper and economic sovereignty",html:"<p>Copper revenue and technology contracts are treated as instruments of state independence. The regime seeks foreign capital while preventing one supplier from controlling the entire development ladder.</p>"},
      {id:"andes",title:"Argentina and the Andes",html:"<p>The long frontier makes Argentina the immediate test of the doctrine. Chile uses readiness, mapping, reserves, and credible mobilization to force Buenos Aires to account for a second theater.</p>"},
      {id:"centinela",title:"Plan Centinela",html:"<p>The spring 1984 cordillera deployment is the doctrine's clearest application: defensive coercion changes the Falklands balance without a Chilean invasion or formal British alliance.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The Cold Andes after 1986 demonstrates both success and danger. Chile preserves autonomy and influence, but permanent balancing creates a recurrent path toward war with Argentina.</p>"}
    ],
    related:[{href:"chile.html",kicker:"National setting",label:"Chile"},{href:"plan-centinela.html",kicker:"1984 application",label:"Plan Centinela"},{href:"cold-andes.html",kicker:"Postwar confrontation",label:"Cold Andes"}],
    facts:[["Country","Chile"],["Principal leader","Augusto Pinochet"],["Core rule","Make every rival account for Chile"],["1985 alignment","Neutral / Independent"],["Security lean","American and British"],["Development sources","Japanese and Latin, selectively"],["Principal rival","Argentina"],["Defining application","Plan Centinela"]]
  }),

  "plan-centinela": hemisphereArticle({
    slug:"plan-centinela",title:"Plan Centinela",eyebrow:"Programa de Catastro y Seguridad Cordillerana · spring 1984",infoboxKicker:"Chilean frontier deployment",
    lead:"Plan Centinela was the internal name of Chile's Programa de Catastro y Seguridad Cordillerana, a spring 1984 deployment of roughly 25,000–35,000 troops and support personnel along the Argentine frontier. It was defensive coercion rather than an invasion concentration, but forced Argentina to withhold forces from the Falklands.",
    canon:"The program name, internal title, spring 1984 timing, deployment range, defensive character, and strategic effect on Argentina are established.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Argentine preparation for Operación Rosario threatened to leave Chile facing a victorious and heavily German-equipped neighbor. Santiago responded before the island invasion opened.</p>"},
      {id:"public",title:"Public and internal names",html:"<p>The formal title emphasized survey and cordillera security. <strong>Plan Centinela</strong> was the shorter internal operational name used inside the military system.</p>"},
      {id:"deployment",title:"Deployment",html:"<p>Approximately 25,000–35,000 troops and support personnel dispersed across the frontier. Mountain units, mechanized reserves, artillery, aviation, logistics, engineers, and surveillance all contributed.</p>"},
      {id:"defensive",title:"Defensive coercion",html:"<p>The force lacked the concentration and political preparation for a general invasion. Its purpose was to create a credible contingency that Argentina could not safely ignore.</p>"},
      {id:"argentine",title:"Argentine response",html:"<p>Buenos Aires retained mountain, mechanized, artillery, aviation, and reserve formations on the mainland. These units could not reinforce East Falkland or replace exhausted formations there.</p>"},
      {id:"falklands",title:"Effect on the Falklands War",html:"<p>The diversion was a significant secondary cause of British victory, particularly the absence of a fresh Argentine second echelon during Cóndor del Sur and the battle for Mount Pleasant.</p>"},
      {id:"diplomacy",title:"Diplomatic ambiguity",html:"<p>Chile cooperated practically with American and British security interests without openly entering the war. The deployment could be defended as sovereign frontier readiness.</p>"},
      {id:"legacy",title:"From Centinela to the Cold Andes",html:"<p>The plan demonstrated Chile's ability to alter a regional war through mobilization alone. It also hardened Argentine suspicion and helped produce the 1986–1989 Cold Andes.</p>"}
    ],
    related:[{href:"santiago-doctrine.html",kicker:"Governing doctrine",label:"Santiago Doctrine"},{href:"cold-andes.html",kicker:"Strategic aftermath",label:"Cold Andes"},{href:"falklands-war.html",kicker:"War affected",label:"Falklands–Malvinas War"}],
    facts:[["Formal name","Programa de Catastro y Seguridad Cordillerana"],["Internal name","Plan Centinela"],["Date","Spring 1984"],["Country","Chile"],["Personnel","Approximately 25,000–35,000"],["Character","Defensive coercion"],["Target of pressure","Argentina"],["Strategic result","Forces withheld from the Falklands"]]
  }),

  "cold-andes": hemisphereArticle({
    slug:"cold-andes",title:"Cold Andes",eyebrow:"Chile–Argentina confrontation · 1986–1989",infoboxKicker:"Prolonged regional confrontation",
    lead:"The Cold Andes was the Chilean–Argentine confrontation following the Punta del Este settlement. It combined frontier mobilization, intelligence competition, procurement, diplomatic signaling, and incompatible post-Falklands security narratives without becoming a general war during its canonical 1986–1989 phase.",
    canon:"The 1986–1989 confrontation and the later 1989–1992 danger window are established at the strategic level. Individual incidents, force totals, and any ultimate settlement remain open.",
    sections:[
      {id:"origins",title:"Origins in the Falklands War",html:"<p>Plan Centinela forced Argentina to retain mainland forces and contributed to the failure to generate a fresh second echelon in the islands. Buenos Aires regarded Chilean pressure as intervention under a neutral label.</p>"},
      {id:"punta",title:"After Punta del Este",html:"<p>Argentina withdrew from the Falklands under limits on force and German arrangements. Chile emerged with proof that its balancing doctrine could shape continental outcomes without formal belligerency.</p>"},
      {id:"frontier",title:"The Andean frontier",html:"<p>Mountain posts, airfields, passes, roads, mapping, patrols, exercises, and reserve readiness became the daily grammar of confrontation. Geography favored defense but made local incidents difficult to interpret.</p>"},
      {id:"argentina",title:"Argentina's mixed rearmament",html:"<p>Washington normalized limited Argentine access to American arms and industry to reduce German dependence. German doctrine, organization, and sustainment habits then collided with American systems and training.</p>"},
      {id:"chile",title:"Chile's continued balancing",html:"<p>Chile leaned toward American and British security ties while using Japanese and Latin economic relationships. It avoided an exclusive alliance that could make the frontier part of a larger bloc war.</p>"},
      {id:"intelligence",title:"Intelligence and signaling",html:"<p>Surveillance, attachés, exercises, procurement announcements, border incidents, and diplomatic leaks carried strategic meaning. Both governments sought leverage without accepting responsibility for escalation.</p>"},
      {id:"danger",title:"The 1989–1992 danger window",html:"<p>The confrontation's most dangerous period falls after the canonical 1986–1989 phase, when Argentine military identity, postwar grievance, and mixed rearmament meet Chilean confidence. The detailed crisis remains open.</p>"},
      {id:"legacy",title:"Regional legacy",html:"<p>The Cold Andes prevented a simple postwar Argentine return to continental primacy. It also tied southern arms policy, American mediation, and South Atlantic security to a frontier conflict that had never been formally declared.</p>"}
    ],
    related:[{href:"plan-centinela.html",kicker:"Immediate antecedent",label:"Plan Centinela"},{href:"santiago-doctrine.html",kicker:"Chilean doctrine",label:"Santiago Doctrine"},{href:"argentina.html",kicker:"Eastern participant",label:"Argentina"},{href:"chile.html",kicker:"Western participant",label:"Chile"}],
    facts:[["Principal period","1986–1989"],["Later danger window","1989–1992"],["Participants","Chile and Argentina"],["Immediate cause","Falklands-era frontier coercion"],["War status","No general war in canonical phase"],["Argentine rearmament","Mixed German doctrine and American systems"],["Chilean posture","Multi-bloc balancing"],["Detailed incidents","Open"]]
  })
});

const addHemisphereRelations = (slug, additions, section) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  if (section && !article.sections.some(item=>item.id===section.id)) article.sections.push(section);
  article.related = [...(article.related||[]),...additions.filter(item=>!(article.related||[]).some(old=>old.href===item.href))];
};

addHemisphereRelations("mexico",[
  {href:"second-cristiada.html",kicker:"1977–1979 conflict",label:"Second Cristiada"},
  {href:"mexican-catholic-national-settlement.html",kicker:"Postwar settlement",label:"Catholic-National Settlement"}
],{id:"cristiada",title:"Second Cristiada and settlement",html:"<p>A crackdown on Catholic civil society produces the <a href='second-cristiada.html'>Second Cristiada</a> around 1977–1979. Buchanan's mediation yields a <a href='mexican-catholic-national-settlement.html'>Catholic-national settlement</a> in 1979–1980, followed by consolidation through 1985.</p><p>Mexico remains a sovereign federal republic at the endpoint. Later monarchy is a possible trajectory, but no sovereign, house, date, or constitutional form is yet settled.</p>"});
if (window.deepArticles["mexico"]) {
  window.deepArticles["mexico"].lead = "Mexico is the largest state in the Americas able to resist automatic incorporation into Washington's system. The Second Cristiada and its Catholic-national settlement transform domestic politics between 1977 and 1985 while the federal republic continues to balance American proximity, Latin cultural influence, and national control of oil and the border.";
  window.deepArticles["mexico"].canon = "Sovereign balancing status, the Second Cristiada, Buchanan's 1979–1980 mediation, and Catholic-national consolidation through 1985 are established. The complete settlement text and any later monarchy remain open.";
  const development = window.deepArticles["mexico"].sections.find(item=>item.id==="development");
  if (development) development.html = "<p>Conflict over Catholic schools, associations, regional networks, labor, agrarian politics, and the revolutionary state's claim to define public life produces the Second Cristiada around 1977–1979.</p><p>The mediated settlement restores civil space for Catholic institutions while preserving the republic, Mexican sovereignty, and the American ceiling against permanent European forces.</p>";
}

addHemisphereRelations("chile",[
  {href:"santiago-doctrine.html",kicker:"Foreign policy",label:"Santiago Doctrine"},
  {href:"plan-centinela.html",kicker:"Spring 1984 deployment",label:"Plan Centinela"},
  {href:"cold-andes.html",kicker:"Postwar confrontation",label:"Cold Andes"}
],{id:"centinela",title:"Centinela and the Cold Andes",html:"<p>Pinochet's <a href='santiago-doctrine.html'>Santiago Doctrine</a> culminates in <a href='plan-centinela.html'>Plan Centinela</a>, which places 25,000–35,000 personnel along the Argentine frontier in spring 1984 and forces Buenos Aires to retain forces away from the Falklands.</p><p>The resulting <a href='cold-andes.html'>Cold Andes</a> dominates southern security from 1986 to 1989 and creates a dangerous later war window.</p>"});
if (window.deepArticles["chile"]) {
  window.deepArticles["chile"].lead = "Chile is an authoritarian military-national balancer under Augusto Pinochet. The Santiago Doctrine uses American and British security ties, selective Japanese and Latin development models, and multi-source procurement to preserve national freedom of action, culminating in Plan Centinela and the Cold Andes confrontation with Argentina.";
  window.deepArticles["chile"].canon = "Pinochet's balancing regime, the Santiago Doctrine, spring 1984 Plan Centinela, and the 1986–1989 Cold Andes are established. The exact coup sequence, internal economic program, and later war-window incidents remain working history.";
  const position = window.deepArticles["chile"].sections.find(item=>item.id==="position");
  if (position) position.html = "<p>Pinochet's government insists that every foreign relationship remain subordinate to Chilean command. Repression is real, but the regime is neither a simple American client nor a historical Chicago-school reproduction.</p><p>Neutral / Independent describes deliberate multi-bloc balancing, not liberal neutrality or absence of foreign influence.</p>";
}

addHemisphereRelations("argentina",[
  {href:"plan-centinela.html",kicker:"Falklands-era constraint",label:"Plan Centinela"},
  {href:"cold-andes.html",kicker:"Postwar confrontation",label:"Cold Andes"}
],{id:"cold-andes",title:"Postwar rearmament and the Cold Andes",html:"<p>After Punta del Este, Washington normalizes limited Argentine access to American arms and industry in order to reduce German dependence. The resulting force combines German doctrine, organization, and sustainment habits with American equipment.</p><p>Chile's frontier pressure continues through the <a href='cold-andes.html'>Cold Andes</a>, making interoperability and national military identity part of the unresolved postwar settlement.</p>"});

addHemisphereRelations("brazil",[
  {href:"luso-brazilian-community.html",kicker:"Atlantic association",label:"Luso-Brazilian Community"}
],{id:"luso-community",title:"Luso-Brazilian Community",html:"<p>The <a href='luso-brazilian-community.html'>Luso-Brazilian Community</a> deepens during 1980–1985, coordinating trade, finance, shipping, professional exchange, technology, and Catholic diplomacy without making Brazil the military center of the Latin Bloc.</p>"});

addHemisphereRelations("cuba",[
  {href:"havana-understanding.html",kicker:"1975–1980 arrangement",label:"Havana Understanding"}
],{id:"havana",title:"Havana Understanding",html:"<p>The <a href='havana-understanding.html'>Havana Understanding</a> manages Latin support during 1975–1980 while keeping permanent foreign forces and strategic bases below the American intervention threshold. It preserves armed neutrality without ending containment.</p>"});

addHemisphereRelations("american-hemisphere",[
  {href:"santiago-doctrine.html",kicker:"Chilean balance",label:"Santiago Doctrine"},
  {href:"second-cristiada.html",kicker:"Mexican conflict",label:"Second Cristiada"},
  {href:"luso-brazilian-community.html",kicker:"Brazilian Latin alignment",label:"Luso-Brazilian Community"},
  {href:"havana-understanding.html",kicker:"Cuban neutral framework",label:"Havana Understanding"}
],{id:"secondary-states",title:"Secondary states and active neutrality",html:"<p>The dedicated histories of <a href='ecuador.html'>Ecuador</a>, <a href='uruguay.html'>Uruguay</a>, <a href='paraguay.html'>Paraguay</a>, <a href='bolivia.html'>Bolivia</a>, <a href='panama.html'>Panama</a>, <a href='nicaragua.html'>Nicaragua</a>, <a href='costa-rica.html'>Costa Rica</a>, <a href='guatemala.html'>Guatemala</a>, <a href='el-salvador.html'>El Salvador</a>, and <a href='suriname.html'>Suriname</a> show that the chart's smaller entries are not empty spaces. Ports, minerals, routes, religious networks, canal defenses, and diplomatic venues let them shape the competition around them.</p><p>The <a href='commonwealth-caribbean.html'>Commonwealth Caribbean</a> adds a second regional network centered on sovereign states rather than Washington's bilateral security corridor.</p>"});
