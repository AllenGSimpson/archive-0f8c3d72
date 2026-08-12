window.deepArticles = window.deepArticles || {};

const mittelafrikaSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Mittelafrika and the Mosaic Order"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Congo construction and war chronology"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — Kongosee and Häuptlingskrieg"},
  {href:"../transcript.md",label:"Master Transcript — revised Mittelafrika synthesis"}
];

const mittelafrikaLinks = [
  {href:"mittelafrika.html",kicker:"Colonial state",label:"Reichskommissariat Mittelafrika"},
  {href:"war-of-the-chiefs.html",kicker:"Major conflict",label:"Mittelafrikanischer Häuptlingskrieg"},
  {href:"germany.html",kicker:"Metropole",label:"Greater German Reich"}
];

const mittelafrikaArticle = config => ({
  category:config.category || "Mittelafrika",
  eyebrow:config.eyebrow || "Mittelafrikan colonial system",
  infoboxKicker:config.infoboxKicker || "Colonial institution",
  ...config,
  related:[...(config.related||[]),...mittelafrikaLinks.filter(item=>item.href!==config.slug+".html"&&!(config.related||[]).some(other=>other.href===item.href))],
  sources:config.sources || mittelafrikaSources,
  categories:config.categories || ["Mittelafrika","German colonial history","Mosaic Order"],
  facts:config.facts || []
});

Object.assign(window.deepArticles, {
  "counting-wars": mittelafrikaArticle({
    slug:"counting-wars",title:"Counting Wars",category:"Conflicts",eyebrow:"Colonial registration conflicts · 1948–1952",infoboxKicker:"General Registration conflict",
    lead:"The Counting Wars were the overlapping census campaigns, jurisdictional struggles, village massacres, strategic clearances, translation failures, and refugee movements produced by Mittelafrika's General Registration of 1948–52. They were not one centrally declared war, but the violent foundation of the later Mosaic Order and the Kongosee project.",
    canon:"The dates, causes, coercive character, refugee wave, and institutional consequences are established. No complete list of campaigns, communities, commanders, casualties, or displaced persons survives.",
    sections:[
      {id:"vacuum",title:"The administrative vacuum",html:"<p>Belgian and French evacuation, destroyed files, German loyalty purges, uncertain borders, and competing chiefly claims leave the new Reichskommissariat unable to identify the people, land, labor, or obligations it claims to govern.</p>"},
      {id:"registration",title:"General Registration",html:"<p>Teams attempt to count households, assign names and status, fix villages to jurisdictions, record work capacity, and create tax and migration rolls. Registration is inseparable from police power because refusal makes a person or settlement officially illegible.</p>"},
      {id:"translation",title:"Language and classification",html:"<p>German is the only official language, but French-speaking clerks, missionaries, African officials, boatmen, and former Belgian staff remain indispensable. Translation errors turn flexible identities and shared land into exclusive boxes enforced by armed officials.</p>"},
      {id:"violence",title:"Violence and clearance",html:"<p>Resistance, flight, mistaken classification, punitive expeditions, labor seizures, and the removal of settlements from survey corridors produce massacres and repeated displacement. Local conflicts are often recorded afterward as administrative enforcement rather than combat.</p>"},
      {id:"kongowerk",title:"The Kongowerk connection",html:"<p>Survey roads, camps, quarries, proposed reservoirs, and transport corridors require land and labor records. The census and megaproject become institutionally inseparable: each supplies coercive reason and logistical support to the other.</p>"},
      {id:"refugees",title:"The first refugee wave",html:"<p>Flight into British territory begins before London understands the project that is creating it. Testimony, mission records, and scattered colonial reports establish the violence without yielding one demonstrable empire-wide total.</p>"},
      {id:"reform",title:"Pragmatic reform",html:"<p>The failure of direct census rule leads to the African Language and Mediation Service, Tribal Cadastre, and bargaining with recognized communities. Reform makes rule more predictable without undoing dispossession or the racial hierarchy.</p>"},
      {id:"memory",title:"Memory and evidence",html:"<p>German accounts describe difficult pacification and administrative necessity; British and church archives emphasize refugees and destroyed villages. The missing denominator later prevents reliable calculation of the human cost of Kongosee itself.</p>"}
    ],
    related:[{href:"mosaic-order.html",kicker:"Administrative successor",label:"Mosaic Order"},{href:"general-registration.html",kicker:"Governing campaign",label:"General Registration"},{href:"kongo-gesamtwerk.html",kicker:"Linked project",label:"Kongo-Gesamtwerk"}],
    facts:[["Dates","1948–1952"],["Location","Reichskommissariat Mittelafrika"],["Form","Overlapping census and clearance conflicts"],["Administrative campaign","General Registration"],["Linked project","Kongo-Gesamtwerk"],["Principal consequence","First great refugee wave"],["Institutional successor","Mosaic Order"],["Casualty total","Unknown"]]
  }),

  "general-registration": mittelafrikaArticle({
    slug:"general-registration",title:"General Registration of Mittelafrika",category:"Colonial administration",eyebrow:"Census and status campaign · 1948–1952",infoboxKicker:"Colonial registration campaign",
    lead:"The General Registration was Mittelafrika's first attempt to convert the administrative wreckage of conquest into one population, labor, land, and jurisdictional record. Its coercive implementation produced the Counting Wars and taught later administrators that colonial rule required mediation and recognized communities rather than direct enumeration alone.",
    canon:"The campaign, period, goals, violence, and role in later administrative reform are established. Forms, numerical totals, regional sequence, and responsible officeholders remain incomplete.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>The Reichskommissariat sought names, residence, household composition, language, occupation, labor status, chiefly affiliation, land use, tax liability, and movement rights. Officials treated legibility as the precondition for every other policy.</p>"},
      {id:"inheritance",title:"Inherited records",html:"<p>Belgian, French, mission, company, and local records use incompatible categories and often disappear during evacuation. German offices seize what remains while doubting the racial and legal assumptions embedded in it.</p>"},
      {id:"teams",title:"Registration teams",html:"<p>Police, surveyors, clerks, translators, medical personnel, labor officials, and local intermediaries travel together. Their presence makes administrative inquiry indistinguishable from an armed demand.</p>"},
      {id:"categories",title:"Categories and status",html:"<p>Registration assigns communities to recognized jurisdiction, work obligations, benefits, movement controls, and security classifications. People outside a settled category become vulnerable to removal, detention, or treatment as unauthorized migrants.</p>"},
      {id:"resistance",title:"Refusal and resistance",html:"<p>Communities hide members, move, destroy lists, reject assigned chiefs, attack teams, or dispute boundaries. The administration interprets many local survival strategies as organized political defiance.</p>"},
      {id:"wars",title:"The Counting Wars",html:"<p>Coercive enumeration combines with clearance and massacre from 1948 to 1952. No single front exists; violence follows registration districts, strategic corridors, labor demands, and rival jurisdictional claims.</p>"},
      {id:"legacy",title:"From paper to MOSAIK",html:"<p>Surviving registers feed the Tribal Cadastre and later punch-card and computer systems. MOSAIK inherits both the ambition to know the colony and the foundational errors embedded in the first count.</p>"},
      {id:"limits",title:"The missing denominator",html:"<p>The campaign never produces a reliable pre-project population total. Missing and contradictory registers later make authoritative casualty and displacement statistics impossible.</p>"}
    ],
    related:[{href:"counting-wars.html",kicker:"Violent consequence",label:"Counting Wars"},{href:"tribal-cadastre.html",kicker:"Successor registry",label:"Tribal Cadastre"},{href:"mosaik-system.html",kicker:"Computerized descendant",label:"MOSAIK"}],
    facts:[["Period","1948–1952"],["Authority","Reichskommissariat Mittelafrika"],["Purpose","Population, land, labor, tax, and status record"],["Method","Mobile armed registration teams"],["Official language","German"],["Resulting conflict","Counting Wars"],["Later systems","Tribal Cadastre and MOSAIK"],["Reliable total population","Never established"]]
  }),

  "mosaic-order": mittelafrikaArticle({
    slug:"mosaic-order",title:"Mosaic Order",category:"Colonial administration",eyebrow:"Recognized-community system · 1950s onward",infoboxKicker:"Colonial governing order",
    lead:"The Mosaic Order is Mittelafrika's mature system of rule through registered communities, recognized jurisdictions, chiefly government, wage labor, communal benefits, and data administration. It replaces the fantasy of direct uniform command with negotiated hierarchy while preserving racial sovereignty and severe coercion against people outside its categories.",
    canon:"The recognized-community bargain, administrative institutions, unequal treatment, and postwar aristocratic development are established. Regional constitutional variation and the complete hierarchy of offices remain open.",
    sections:[
      {id:"origins",title:"Origins after the Counting Wars",html:"<p>The General Registration proves that direct German enumeration cannot govern a vast multilingual colony. Administrators begin treating communities and jurisdictions as durable units that can bargain, transmit orders, and carry responsibility.</p>"},
      {id:"recognition",title:"Recognized communities",html:"<p>A recognized community receives a defined place in the cadastre, an accepted leadership structure, access to wages and services, and limited customary autonomy. Recognition is administrative status, not equality or national self-government.</p>"},
      {id:"bargain",title:"The governing bargain",html:"<p>Communities receive predictable chiefly rule, infrastructure, benefits, and some legal continuity in exchange for taxes, labor delivery, production, migration control, records, and political obedience.</p>"},
      {id:"institutions",title:"Administrative institutions",html:"<p>The African Language and Mediation Service interprets claims; the Tribal Cadastre fixes jurisdictions; MOSAIK links people, cargo, employment, benefits, movement, and security status; firms and port offices supply the material side of the bargain.</p>"},
      {id:"outside",title:"Life outside recognition",html:"<p>Unregistered migrants, resisting communities, refugees, people between jurisdictions, and populations blocking strategic corridors can be denied movement, wages, food access, or legal protection and subjected to removal or punitive action.</p>"},
      {id:"war",title:"Crisis in the Häuptlingskrieg",html:"<p>Labor refusal, disputed succession, ferry control, and rival jurisdictions expose how much the system depends on chiefs whose authority the state recognizes but cannot wholly command.</p>"},
      {id:"second",title:"Second Mosaic Settlement",html:"<p>The 1977–79 settlement gives chiefs fixed stipends, performance shares, protected succession, household privileges, and community dividends. It turns collaboration into a more explicit compensated aristocracy.</p>"},
      {id:"judgment",title:"Order and domination",html:"<p>The system is materially stable for many recognized communities and violently exclusionary by design. Its administrative sophistication does not lessen the colonial fact that Germany defines every category and reserves the right to erase one.</p>"}
    ],
    related:[{href:"african-language-mediation-service.html",kicker:"Mediation office",label:"African Language and Mediation Service"},{href:"tribal-cadastre.html",kicker:"Jurisdiction registry",label:"Tribal Cadastre"},{href:"second-mosaic-settlement.html",kicker:"Postwar revision",label:"Second Mosaic Settlement"}],
    facts:[["Developed","1950s"],["Territory","Reichskommissariat Mittelafrika"],["Basic unit","Recognized community"],["Local authority","Registered chiefly jurisdiction"],["Data system","MOSAIK"],["Community return","Wages, services, benefits, limited custom"],["Required return","Tax, labor, production, records, obedience"],["Sovereignty","Reserved to German colonial state"]]
  }),

  "african-language-mediation-service": mittelafrikaArticle({
    slug:"african-language-mediation-service",title:"African Language and Mediation Service",category:"Colonial administration",eyebrow:"Translation, jurisdiction, and petition service",infoboxKicker:"Mittelafrikan civil service",
    lead:"The African Language and Mediation Service is the Mittelafrikan institution created after the Counting Wars to translate orders and testimony, investigate jurisdictional claims, train interpreters, and prevent classification disputes from becoming automatic police crises. It makes the Mosaic Order governable without making it representative.",
    canon:"The service's existence, post-Counting-Wars origins, multilingual function, and place in the Mosaic Order are established. Its formal German name, departmental hierarchy, staffing totals, and schools remain open.",
    sections:[
      {id:"need",title:"The translation crisis",html:"<p>German-only law confronts a colony governed through French records and hundreds of African languages. Early registration teams repeatedly mistake translation difficulty, flexible identity, and contested authority for refusal.</p>"},
      {id:"creation",title:"Creation",html:"<p>Pragmatic administrators establish a permanent mediation service during the early Mosaic reforms of the 1950s. It absorbs interpreters, clerks, mission-educated staff, former colonial personnel, and African officials.</p>"},
      {id:"work",title:"Everyday work",html:"<p>Staff translate regulations, petitions, hearings, labor agreements, medical instructions, cadastral claims, port notices, and police interviews. They also explain local institutions upward to officials who may never visit the district.</p>"},
      {id:"training",title:"Training and language registers",html:"<p>The service compiles terminology, name variants, interpreter rosters, and jurisdictional language records. German remains the controlling legal text, so translation can explain but not supersede imperial law.</p>"},
      {id:"mediation",title:"Mediation between jurisdictions",html:"<p>Boundary, succession, labor, migration, marriage, compensation, and ferry disputes are referred for interpretation before armed enforcement. Outcomes remain constrained by the interests of production and security.</p>"},
      {id:"status",title:"African officials",html:"<p>Skilled interpreters and mediators can exercise authority over settlers, police, and firms in technical matters, creating one of the contradictions of the racial order. Promotion remains bounded by German sovereignty and security review.</p>"},
      {id:"war",title:"Wartime role",html:"<p>During the Häuptlingskrieg mediators serve intelligence, surrender negotiation, prisoner handling, restored chiefly government, and the interpretation of local alliances. Their knowledge can protect communities or make coercion more precise.</p>"},
      {id:"limits",title:"Limits of mediation",html:"<p>The service reduces accidental violence and gives petitions an administrative path. It cannot make forced relocation voluntary, remove racial law, or guarantee that a correct translation will change a German decision.</p>"}
    ],
    related:[{href:"mosaic-order.html",kicker:"Parent order",label:"Mosaic Order"},{href:"tribal-cadastre.html",kicker:"Partner registry",label:"Tribal Cadastre"},{href:"counting-wars.html",kicker:"Founding crisis",label:"Counting Wars"}],
    facts:[["Created","1950s"],["Authority","Reichskommissariat Mittelafrika"],["Function","Translation, petition, and jurisdictional mediation"],["Personnel","African officials, interpreters, clerks, former colonial staff"],["Legal language","German"],["Partner institution","Tribal Cadastre"],["Wartime role","Intelligence and negotiated restoration"],["Formal German title","Open"]]
  }),

  "tribal-cadastre": mittelafrikaArticle({
    slug:"tribal-cadastre",title:"Tribal Cadastre of Mittelafrika",category:"Colonial administration",eyebrow:"Jurisdictional registry · Mosaic Order",infoboxKicker:"Colonial land and community register",
    lead:"The Tribal Cadastre is Mittelafrika's official register of recognized communities, chiefly jurisdictions, boundaries, succession, land use, landing places, labor obligations, and communal benefits. It turns living and overlapping social relations into administrative territory that can be taxed, rewarded, policed, and computerized.",
    canon:"The cadastre's role, relationship to recognized communities, MOSAIK, chiefly succession, and the Mosaic Order are established. Its map sheets, office structure, and regional legal categories remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The cadastre emerges from the failure of the General Registration to impose one household census without settled local jurisdictions. It begins by deciding which authority can speak for which people and place.</p>"},
      {id:"records",title:"What the cadastre records",html:"<p>Entries include boundaries, settlements, named authorities, succession rules, landing places, migration permissions, customary claims, labor rosters, infrastructure, and eligibility for communal returns.</p>"},
      {id:"mapping",title:"Mapping fluid communities",html:"<p>Seasonal use, shared land, mobile households, marriage ties, and overlapping chiefly claims resist fixed lines. Surveyors and mediators convert negotiated relationships into maps that later acquire the appearance of ancient fact.</p>"},
      {id:"recognition",title:"Legal recognition",html:"<p>Cadastre entry gives a community standing before colonial offices and firms. Absence can mean loss of wages, compensation, movement permits, or the ability to object to a corridor or reservoir clearance.</p>"},
      {id:"succession",title:"Succession politics",html:"<p>Recognized succession becomes both customary matter and state appointment. Rival claimants compete for a position that controls benefits, labor negotiation, police cooperation, and later performance shares.</p>"},
      {id:"lake",title:"Kongosee revisions",html:"<p>Flooding destroys routes, divides territories, creates islands, and raises the value of ferries and ports. Cadastre teams repeatedly redraw jurisdictions around a shoreline that continues to move.</p>"},
      {id:"mosaik",title:"Computerization",html:"<p>Paper and punch-card records feed regional computing centers and the MOSAIK system. Faster retrieval increases administrative reach while reproducing disputed or coercively obtained foundational data.</p>"},
      {id:"war",title:"Cadastre as battlefield",html:"<p>During the War of the Chiefs registry centers, boundary books, succession files, and port claims become military objectives. Destroying or capturing a record can change who receives legal recognition after the fighting.</p>"}
    ],
    related:[{href:"general-registration.html",kicker:"Administrative predecessor",label:"General Registration"},{href:"mosaik-system.html",kicker:"Computerized registry",label:"MOSAIK"},{href:"second-mosaic-settlement.html",kicker:"Succession settlement",label:"Second Mosaic Settlement"}],
    facts:[["Developed","1950s"],["Type","Community, land, and jurisdiction register"],["Basic entry","Recognized community"],["Records","Boundaries, chiefs, succession, obligations, benefits"],["Legal effect","Administrative standing"],["Technical successor","MOSAIK"],["Major disruption","Kongosee filling"],["Neutral map","No; negotiated colonial instrument"]]
  }),

  "mosaik-system": mittelafrikaArticle({
    slug:"mosaik-system",title:"MOSAIK system",category:"Computing",eyebrow:"Mittelafrikan administrative network · 1960s onward",infoboxKicker:"Colonial information system",
    lead:"MOSAIK is Mittelafrika's linked administrative information system for persons, communities, cargo, employment, benefits, security status, movement permission, ports, and chiefly jurisdiction. It grows from paper and punch-card registries into regional computer centers and becomes one of Germany's earliest long-distance imperial data networks.",
    canon:"MOSAIK's functions, late-1960s linked form, role around Kongosee, and later connection to German networks are established. Hardware families, software versions, database design, access terminals, and acronym expansion remain open.",
    sections:[
      {id:"paper",title:"Paper inheritance",html:"<p>The system begins with General Registration forms, cadastral maps, company labor files, mission records, port manifests, police lists, and compensation claims. These sources disagree before any machine processes them.</p>"},
      {id:"punch",title:"Punch-card administration",html:"<p>Regional centers convert selected records to punched media for payroll, production, movement, and population summaries. Standard codes allow comparison across districts at the cost of forcing complex status into fixed fields.</p>"},
      {id:"network",title:"The linked system",html:"<p>By the late 1960s regional computer centers exchange records through dedicated communications. Kongostadt can reconcile port, personnel, labor, benefit, and security information without waiting for physical ledgers.</p>"},
      {id:"lake",title:"Administration of Kongosee",html:"<p>The lake makes reliable travel dependent on licensed ports, ferries, channels, fuel, and manifests. MOSAIK links movement permission to the new geography and turns transport nodes into administrative checkpoints.</p>"},
      {id:"benefits",title:"Benefits and exclusion",html:"<p>Registered wages, community dividends, housing, compensation, schooling, and medical access can be processed more reliably. A wrong or hostile status can also deny these goods across every connected office.</p>"},
      {id:"security",title:"Security use",html:"<p>During the Häuptlingskrieg the system supports intelligence, traffic control, jurisdiction restoration, prisoner classification, and network isolation. Local political judgment remains dependent on data supplied by contested colonial offices.</p>"},
      {id:"networks",title:"Place in German networking",html:"<p>MOSAIK becomes one of the administrative systems connected by early Reich data links. Its need to move records between Berlin, Kongostadt, Katanga, ports, and distant districts helps justify computing without distance.</p>"},
      {id:"criticism",title:"The problem of precise error",html:"<p>Computerization improves retrieval and coordination but does not repair false categories or coerced registrations. Critics describe MOSAIK as a machine that makes an uncertain empire act with unwarranted confidence.</p>"}
    ],
    related:[{href:"tribal-cadastre.html",kicker:"Data foundation",label:"Tribal Cadastre"},{href:"computing-networks.html",kicker:"Wider network history",label:"Computing and Global Networks"},{href:"kongosee.html",kicker:"Primary operating geography",label:"Kongosee"}],
    facts:[["Operational form","Late 1960s"],["Territory","Mittelafrika"],["Predecessors","Paper and punch-card registries"],["Core data","Persons, cargo, work, benefits, security, movement"],["Headquarters","Kongostadt"],["Network role","Early German imperial data system"],["Primary criticism","Automation of disputed categories"],["Acronym expansion","Not fixed"]]
  }),

  "kongo-gesamtwerk": mittelafrikaArticle({
    slug:"kongo-gesamtwerk",title:"Kongo-Gesamtwerk",category:"Infrastructure",eyebrow:"Congo-basin development program · 1947–1979",infoboxKicker:"Continental megaproject",
    lead:"The Kongo-Gesamtwerk was Germany's integrated program to regulate the Congo, generate power, reorganize transport, construct Kongostadt, expand Katangan industry, and make Mittelafrika administratively legible. It combined inherited Belgian hydraulic ideas with Speer's continental planning and Hitler's demand for irreversible monumental scale.",
    canon:"The three design alternatives, principal authorships, organizations, components, construction sequence, Wolfgang review, and final operating level are established. Complete costs, workforce totals, and a comprehensive casualty figure do not exist.",
    sections:[
      {id:"authorship",title:"Three authorships",html:"<p>Pierre Van Deuren supplies the inherited Lower Congo development vision. Albert Speer turns captured surveys into an integrated system. Hitler selects the maximum high-water alternative because it will permanently alter the imperial map.</p>"},
      {id:"commission",title:"Kongo-Ausbaukommission",html:"<p>Founded in 1948, the commission compares Inga generation alone, regulated Lower Congo development, and a full-basin plan. Speer initially prefers the middle course; political decision chooses the third.</p>"},
      {id:"name",title:"Plan and operating organization",html:"<p>The formal title is <em>Gesamtplan zur Regulierung und Erschließung des Kongostroms</em>, shortened to Kongo-Gesamtwerk or Kongowerk. Kongowerke AG becomes the operating consortium.</p>"},
      {id:"components",title:"Principal components",html:"<p>The Inga-Werke generate power and manage downstream releases. The Malebo-Sperrwerk below Pool Malebo regulates Kongosee. Roads, rail, ports, quarries, channels, industries, settlements, and registries make the project larger than its dams.</p>"},
      {id:"coalition",title:"Coalition of purposes",html:"<p>Industrial planners want power and transport; raw-material offices want mineral throughput; colonial officials want a capital and corridors; police want legibility; Hitler wants a monument. Separate ledgers make the full expense deliberately difficult to calculate.</p>"},
      {id:"construction",title:"Construction sequence",html:"<p>Archives and planning dominate 1947–49; surveys and clearances 1949–53; Inga and Kongostadt 1953–59; Malebo closure 1959–65; western flooding 1965–69; final raising 1969–76; stable operations follow in 1977–79.</p>"},
      {id:"wolfgang",title:"Wolfgang's completion policy",html:"<p>The 1966 review rejects both cancellation and further monumental expansion. It fixes the lake at roughly 330–335 metres and redirects spending toward safe control, power, transport, health, communications, resettlement, and administration.</p>"},
      {id:"legacy",title:"Irreversibility and legacy",html:"<p>Every completed road, camp, port, registry, and turbine makes cancellation harder. For German audiences the project becomes engineering mastery; for displaced communities it is a physical transformation that cannot be legislated away.</p>"}
    ],
    related:[{href:"kongo-ausbaukommission.html",kicker:"Planning commission",label:"Kongo-Ausbaukommission"},{href:"kongowerke-ag.html",kicker:"Operating consortium",label:"Kongowerke AG"},{href:"kongosee.html",kicker:"Central physical result",label:"Kongosee"}],
    facts:[["Formal title","Gesamtplan zur Regulierung und Erschließung des Kongostroms"],["Common names","Kongo-Gesamtwerk; Kongowerk"],["Planning body","Kongo-Ausbaukommission"],["Operator","Kongowerke AG"],["Principal works","Inga-Werke and Malebo-Sperrwerk"],["Construction era","1947–1979"],["Final water band","Approximately 330–335 m"],["Complete cost and casualties","Unknown"]]
  }),

  "kongo-ausbaukommission": mittelafrikaArticle({
    slug:"kongo-ausbaukommission",title:"Kongo-Ausbaukommission",category:"Infrastructure",eyebrow:"Congo Development Commission · founded 1948",infoboxKicker:"Planning commission",
    lead:"The Kongo-Ausbaukommission was the commission that converted seized Belgian and SYNEBA surveys into competing German development alternatives for the Congo basin. Its technical comparison was decisive, but the choice of the maximal Kongo-Gesamtwerk was political rather than the commission's unanimous engineering recommendation.",
    canon:"The 1948 formation, inherited archives, three alternatives, Speer preference, and Hitler decision are established. Membership, internal votes, subcommittees, and documentary titles remain open.",
    sections:[
      {id:"archives",title:"Captured archive",html:"<p>German authorities seize Belgian state, company, hydraulic, and SYNEBA records in 1947 and compel German-aligned Belgium to supply engineers and missing documentation.</p>"},
      {id:"formation",title:"Formation in 1948",html:"<p>The commission assembles hydraulic, transport, power, mining, colonial, finance, security, and planning interests. Technical work therefore begins inside a political coalition rather than an independent scientific body.</p>"},
      {id:"inga",title:"Alternative I: Inga generation",html:"<p>The narrowest option emphasizes downstream power generation and related transport works without a vast upstream reservoir. It promises lower disruption but fewer tools for basin-wide control.</p>"},
      {id:"lower",title:"Alternative II: regulated Lower Congo",html:"<p>The middle course combines Inga with limited upstream regulation, transport, and industrial corridors. Speer initially regards this as the strongest balance of power, cost, and governability.</p>"},
      {id:"basin",title:"Alternative III: full basin",html:"<p>The maximum option creates the regulated Kongosee and joins power, navigation, settlement, industry, registration, and colonial transformation into one Gesamtwerk.</p>"},
      {id:"decision",title:"Hitler's decision",html:"<p>Hitler chooses the third alternative for its monumental and irreversible character. Engineering feasibility constrains the plan, but political symbolism selects its scale.</p>"},
      {id:"transfer",title:"Transfer to Kongowerke AG",html:"<p>After approval, the commission's surveys and planning functions feed an operating consortium that can divide construction, security, corporate, and colonial expense across separate accounts.</p>"},
      {id:"legacy",title:"Institutional legacy",html:"<p>The commission remains the origin of later disputes over whether engineers authored the lake or merely supplied alternatives to a political decision. Belgian expertise receives acknowledgment without control or moral exoneration.</p>"}
    ],
    related:[{href:"kongo-gesamtwerk.html",kicker:"Selected program",label:"Kongo-Gesamtwerk"},{href:"kongowerke-ag.html",kicker:"Operating successor",label:"Kongowerke AG"},{href:"inga-werke.html",kicker:"Narrow-plan component",label:"Inga-Werke"}],
    facts:[["Founded","1948"],["English rendering","Congo Development Commission"],["Archive base","Belgian and SYNEBA surveys"],["Alternatives studied","Three"],["Speer's preference","Regulated Lower Congo"],["Selected alternative","Full Congo-basin plan"],["Selecting authority","Adolf Hitler"],["Membership and votes","Open"]]
  }),

  "kongowerke-ag": mittelafrikaArticle({
    slug:"kongowerke-ag",title:"Kongowerke AG",category:"Companies and institutions",eyebrow:"Operating consortium · Kongo-Gesamtwerk",infoboxKicker:"Imperial project company",
    lead:"Kongowerke AG is the operating consortium for the Kongo-Gesamtwerk. It coordinates dams, generation, ports, roads, railways, quarries, camps, resettlement, industry, and licensed contractors while allowing the Reich to distribute the project's true costs among corporate, colonial, security, and public ledgers.",
    canon:"The consortium's role, name, early construction work, and relationship to the Gesamtwerk are established. Ownership shares, board membership, capitalization, subsidiaries, and post-1985 structure remain open.",
    sections:[
      {id:"creation",title:"Creation",html:"<p>The Kongo-Ausbaukommission defines the program; Kongowerke AG converts it into contracts, schedules, operating districts, and permanent assets. Its corporate form allows German firms and colonial authorities to share work without one transparent budget.</p>"},
      {id:"coalition",title:"Consortium membership",html:"<p>Power, engineering, mining, rail, construction, shipping, finance, and state offices all require representation. Exact firms and shares remain unsettled, and the Reich retains decisive strategic authority.</p>"},
      {id:"early",title:"Survey and opening phase",html:"<p>From 1949 to 1953 the company opens roads, quarries, camps, preliminary Inga works, clearance corridors, and supply routes. Registration teams and security units follow the same infrastructure.</p>"},
      {id:"construction",title:"Construction system",html:"<p>Direct labor, contractors, colonial labor obligations, penal labor, imported specialists, and African skilled workers coexist. Payroll and responsibility are divided in ways that later complicate claims for death, injury, and displacement.</p>"},
      {id:"operations",title:"From construction to operations",html:"<p>As works enter service, the company becomes an operator of power, channels, ports, workshops, dredging, maintenance, and industrial supply rather than a temporary builder.</p>"},
      {id:"accounts",title:"The divided ledgers",html:"<p>Construction, security, corporate investment, resettlement, colonial administration, transport, and penal systems carry separate costs. No single published figure captures the whole project.</p>"},
      {id:"wolfgang",title:"Stage-gated finance",html:"<p>Wolfgang's 1966 review separates functions more clearly and requires staged release of funds. The reform restrains further expansion while guaranteeing money for water control and essential networks.</p>"},
      {id:"lenz",title:"The Lenz operating phase",html:"<p>After Speer's 1977 retirement, Werner Lenz cancels decorative additions and emphasizes reliability, repair, communications, transport, generation, and accountable relocation procedures.</p>"}
    ],
    related:[{href:"kongo-gesamtwerk.html",kicker:"Parent program",label:"Kongo-Gesamtwerk"},{href:"malebo-sperrwerk.html",kicker:"Principal structure",label:"Malebo-Sperrwerk"},{href:"werner-lenz.html",kicker:"Late-phase coordinator",label:"Werner Lenz"}],
    facts:[["Type","Imperial operating consortium"],["Program","Kongo-Gesamtwerk"],["Active construction","From 1949"],["Activities","Power, transport, ports, works, maintenance"],["Labor systems","Contract, colonial, skilled, and penal labor"],["Financial structure","Multiple divided ledgers"],["Late-phase policy","Operations over monumentality"],["Ownership and board","Open"]]
  }),

  "malebo-sperrwerk": mittelafrikaArticle({
    slug:"malebo-sperrwerk",title:"Malebo-Sperrwerk",category:"Infrastructure",eyebrow:"Kongosee control structure · closed 1959–1965",infoboxKicker:"Hydraulic control works",
    lead:"The Malebo-Sperrwerk is the regulating structure immediately below Pool Malebo that creates and controls Kongosee. It is not a dam placed between the former twin colonial cities, but the downstream gate whose staged closure raises the central basin toward the 330–335-metre operating band.",
    canon:"The location, function, closure period, relationship to the Inga-Werke, and final operating band are established. Engineering dimensions, turbine complement, exact coordinates, and completed appearance remain open.",
    sections:[
      {id:"location",title:"Location below Pool Malebo",html:"<p>The structure stands downstream of the Pool, allowing regulation of the broad upstream basin while leaving Kongostadt on high ground above the former Léopoldville–Brazzaville complex.</p>"},
      {id:"purpose",title:"Purpose",html:"<p>The Sperrwerk controls water level, releases, navigation conditions, flood response, and the formation of the inland lake. Downstream Inga generation uses and further manages the regulated flow.</p>"},
      {id:"construction",title:"Staged closure",html:"<p>Between 1959 and 1965 gates and associated works close in stages. A restricted first reservoir forms while operators test generation, channels, ports, warning systems, and urban protection.</p>"},
      {id:"cities",title:"The twin-city relocation",html:"<p>Low-lying sections of Léopoldville and Brazzaville are protected where feasible, cleared, or abandoned. The practical capital shifts to new high-ground Kongostadt rather than remaining between dam walls.</p>"},
      {id:"raising",title:"Final raising",html:"<p>Water spreads through the western Cuvette after 1965 and rises in stages through 1976. Wolfgang's review fixes the final operating band instead of authorizing the still larger level imagined by maximalists.</p>"},
      {id:"operation",title:"Permanent operation",html:"<p>Gate control, hydrology, dredging, channel marking, bank monitoring, debris removal, communications, and emergency planning form a continuing industry. The structure cannot be treated as a completed monument left to run itself.</p>"},
      {id:"security",title:"Strategic security",html:"<p>The Sperrwerk is a central objective during the Häuptlingskrieg. KSS patrols, German troops, air defense, engineers, and restricted-access zones protect it from sabotage and traffic disruption.</p>"},
      {id:"symbol",title:"Political meaning",html:"<p>German presentation emphasizes controlled water and illuminated engineering. Displaced communities understand the same gates as the mechanism that drowned villages, cemeteries, roads, and remembered jurisdictions.</p>"}
    ],
    related:[{href:"kongosee.html",kicker:"Reservoir created",label:"Kongosee"},{href:"inga-werke.html",kicker:"Downstream works",label:"Inga-Werke"},{href:"kongostadt.html",kicker:"Relocated capital",label:"Kongostadt"}],
    facts:[["Location","Immediately below Pool Malebo"],["Construction phase","1959–1965"],["Function","Regulation and creation of Kongosee"],["Final operating band","Approximately 330–335 m"],["Downstream partner","Inga-Werke"],["Urban effect","Relocation of lower twin-city districts"],["Security status","Strategic restricted installation"],["Dimensions and machinery","Open"]]
  }),

  "inga-werke": mittelafrikaArticle({
    slug:"inga-werke",title:"Inga-Werke",category:"Infrastructure",eyebrow:"Lower Congo power and release works",infoboxKicker:"Hydroelectric complex",
    lead:"The Inga-Werke are the downstream generation and river-control works of the Kongo-Gesamtwerk. They convert regulated Congo flow into electrical power, manage releases toward the Atlantic, and anchor the grid serving Kongostadt, Katanga, ports, industry, and colonial infrastructure.",
    canon:"The location, power-generation role, construction priority, relationship to the Malebo-Sperrwerk, and place in the Gesamtwerk are established. Installed capacity, station count, turbine types, and exact transmission map remain open.",
    sections:[
      {id:"inheritance",title:"Inherited Inga vision",html:"<p>Belgian engineers had long identified the Lower Congo's generating potential. Pierre Van Deuren's plan and seized studies provide the technical inheritance that German planners expand.</p>"},
      {id:"alternatives",title:"Inga in every alternative",html:"<p>All three commission options include major Inga generation. What changes is whether the works remain a power project or become the downstream component of a basin-wide political and hydraulic system.</p>"},
      {id:"construction",title:"Construction",html:"<p>Preliminary work begins in 1949–53 and major construction advances from 1953 to 1959. Roads, quarries, camps, machinery, skilled labor, and security create a permanent Lower Congo industrial district.</p>"},
      {id:"generation",title:"Power generation",html:"<p>Electricity supports ports, mines, processing, railways, communications, urban districts, workshops, and later computer centers. Katanga is a principal beneficiary even though distance requires a large transmission system.</p>"},
      {id:"releases",title:"Release management",html:"<p>The complex manages downstream flow from the Malebo-regulated system toward the Atlantic. It does not remove the Lower Congo rapids or create an ocean passage into Kongosee.</p>"},
      {id:"grid",title:"The colonial grid",html:"<p>Grid control connects generation to favored industrial and administrative nodes. Electrification can provide real household and public benefits while reproducing unequal priorities between registered districts and marginal populations.</p>"},
      {id:"war",title:"Wartime role",html:"<p>Generation and transmission are protected as strategic infrastructure during the War of the Chiefs. Engineers, security forces, repair crews, and KSS transport keep the system functioning under attack.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The Inga-Werke are the portion of the Gesamtwerk most plausibly defended on conventional economic grounds. Their utility nevertheless cannot be separated from the forced labor, clearance, and basin transformation that delivered it.</p>"}
    ],
    related:[{href:"kongo-gesamtwerk.html",kicker:"Parent project",label:"Kongo-Gesamtwerk"},{href:"malebo-sperrwerk.html",kicker:"Upstream control",label:"Malebo-Sperrwerk"},{href:"kongowerke-ag.html",kicker:"Operator",label:"Kongowerke AG"}],
    facts:[["Location","Lower Congo / Inga"],["Early works","1949–1953"],["Major construction","1953–1959"],["Function","Power generation and release management"],["Parent project","Kongo-Gesamtwerk"],["Upstream regulator","Malebo-Sperrwerk"],["Principal consumers","Kongostadt, Katanga, ports, industry"],["Installed capacity","Open"]]
  }),

  "kongosee": mittelafrikaArticle({
    slug:"kongosee",title:"Kongosee",category:"Geography and infrastructure",eyebrow:"Regulated Congo-basin lake · mature after 1977",infoboxKicker:"Artificial inland water system",
    lead:"Kongosee is the immense shallow and irregular lake created by regulating the Congo immediately below Pool Malebo. It is a drowned river world of open basins, marshes, tributary arms, flooded forest, islands, unstable shores, submerged settlements, timber hazards, marked channels, and permanent human management.",
    canon:"The mechanism, operating level, filling chronology, general geography, displacement in the millions, environmental effects, and lake society are established. Surface area, shoreline, death toll, and complete displacement total remain intentionally unfixed.",
    sections:[
      {id:"formation",title:"Formation",html:"<p>The Malebo-Sperrwerk raises and regulates the basin while the Inga-Werke generate power and manage downstream releases. Final filling from 1969 to 1976 produces a stable 330–335-metre operating band in 1977–79.</p>"},
      {id:"geography",title:"A drowned river world",html:"<p>The lake spreads across low central terrain rather than forming one clean deep bowl. Tributary arms, surviving ridges, islands, flooded forests, and marshy margins create constantly changing local geography.</p>"},
      {id:"navigation",title:"Navigation and transport",html:"<p>Regularized barge movement uses dredged and marked channels, licensed ports, pilots, ferries, fuel controls, and inspected terminals. Atlantic cargo still requires downstream road, rail, and transshipment around the rapids.</p>"},
      {id:"environment",title:"Environmental transformation",html:"<p>Flooded biomass produces foul water and methane; fisheries and disease ecologies change; banks collapse; timber closes routes; and dredging, hydrography, salvage, and channel clearance become permanent industries.</p>"},
      {id:"displacement",title:"Displacement and the missing denominator",html:"<p>Millions move through construction, clearance, urban relocation, island formation, and rising water. Incomplete pre-project records prevent a reliable total of the dead or displaced.</p>"},
      {id:"society",title:"Lake society",html:"<p>Barge crews, pilots, dredgers, harbor masters, mechanics, radio operators, ferry workers, hydrographers, police, turbine staff, and traders form a new service population. A generation grows up for whom the lake is ordinary geography.</p>"},
      {id:"control",title:"Routes as checkpoints",html:"<p>Channel, terminal, fuel permit, and cargo manifest make movement legible to MOSAIK. The same drowned forests and unmarked tributaries shelter smugglers, fugitives, hidden camps, and unofficial crossings.</p>"},
      {id:"memory",title:"Memory beneath the water",html:"<p>Drowned churches, cemeteries, paths, villages, and chiefly lands survive in testimony, mission archives, songs, and compensation disputes. Satellite images prove the new geography but cannot reconstruct the lives removed from it.</p>"}
    ],
    related:[{href:"malebo-sperrwerk.html",kicker:"Control structure",label:"Malebo-Sperrwerk"},{href:"kongostadt.html",kicker:"Lake capital",label:"Kongostadt"},{href:"kongosee-stromschutz.html",kicker:"Navigation and security",label:"Kongosee- und Stromschutz"}],
    facts:[["Type","Regulated artificial inland lake"],["Created by","Malebo-Sperrwerk"],["Operating level","Approximately 330–335 m"],["Final filling","1969–1976"],["Mature band","1977–1979"],["Character","Shallow, irregular, forested, channelized"],["Displacement","Millions"],["Surface area and death toll","Unfixed / unknowable"]]
  }),

  "kongostadt": mittelafrikaArticle({
    slug:"kongostadt",title:"Kongostadt",category:"Cities",eyebrow:"Practical capital of Mittelafrika",infoboxKicker:"Colonial administrative capital",
    lead:"Kongostadt is the practical administrative, technical, and mercantile capital of Reichskommissariat Mittelafrika, built on high ground above the former Léopoldville–Brazzaville complex during the 1950s. Buea remains the ceremonial capital, while Kongostadt governs the lake, industry, records, transport, and security networks.",
    canon:"The location, 1950s development, practical-capital status, relationship to Buea and the former twin cities, and technical character are established. District map, population, municipal constitution, and formal founding date remain open.",
    sections:[
      {id:"site",title:"High-ground site",html:"<p>The city is deliberately placed above the waterline created by the Malebo works. Lower districts of the old twin cities are protected, cleared, relocated, or abandoned as the reservoir rises.</p>"},
      {id:"capital",title:"Practical and ceremonial capitals",html:"<p>Buea retains ceremonies and constitutional symbolism. Kongostadt holds the working headquarters of planning, registry, transport, security, engineering, and much of the Reichskommissariat bureaucracy.</p>"},
      {id:"construction",title:"Construction in the 1950s",html:"<p>Government quarters, housing, workshops, ports, hospitals, communications, roads, and power links grow alongside Inga construction and urban relocation. The city is both new capital and reception zone for displaced populations.</p>"},
      {id:"administration",title:"Administrative city",html:"<p>MOSAIK centers, cadastral offices, mediation services, corporate headquarters, theater commands, and technical schools make the city the colony's record and decision hub.</p>"},
      {id:"port",title:"Lake and river port",html:"<p>Licensed terminals connect official channels to downstream transshipment. KSS bases, repair yards, hydrographic offices, ferries, and commercial barges make the waterfront a controlled logistical complex.</p>"},
      {id:"society",title:"Unequal technical society",html:"<p>German officials and settlers live beside a German-speaking African technical estate, clerks, pilots, mechanics, traders, servants, displaced families, and lake workers. Occupational hierarchy can contradict racial assumptions without abolishing them.</p>"},
      {id:"war",title:"Wartime headquarters",html:"<p>The city becomes the joint theater and logistics center during the Häuptlingskrieg. Its communications, hospitals, workshops, air connections, and floating bases support campaigns across fragmented terrain.</p>"},
      {id:"image",title:"Showcase and restricted city",html:"<p>Controlled visitors see turbines, lit ports, computing, clean districts, and ordered traffic. Access to resettlement zones, prisons, poor districts, and security installations remains tightly restricted.</p>"}
    ],
    related:[{href:"kongosee.html",kicker:"Defining geography",label:"Kongosee"},{href:"mosaik-system.html",kicker:"Administrative network",label:"MOSAIK"},{href:"kongosee-stromschutz.html",kicker:"Inland service",label:"Kongosee- und Stromschutz"}],
    facts:[["Status","Practical capital of Mittelafrika"],["Ceremonial counterpart","Buea"],["Developed","1950s"],["Site","High ground above former Léopoldville–Brazzaville"],["Official language","German"],["Principal functions","Administration, transport, engineering, security"],["Major institutions","MOSAIK and KSS"],["Population and district map","Open"]]
  }),

  "kongosee-stromschutz": mittelafrikaArticle({
    slug:"kongosee-stromschutz",title:"Kongosee- und Stromschutz",category:"Security institutions",eyebrow:"Navigation, customs, rescue, and inland security service",infoboxKicker:"Mittelafrikan inland maritime service",
    lead:"The Kongosee- und Stromschutz, abbreviated KSS and commonly called the Kongoflotte or Kongoseeflotte, is Mittelafrika's navigation, customs, hydrographic, rescue, port-security, and armed lake service. It functions as an inland fleet without becoming a second German national navy.",
    canon:"The service's functions, colonial legal status, wartime consolidation, four operational layers, German technical supervision, and dependence on African specialists are established. Class names, craft counts, armament, and registry remain open.",
    sections:[
      {id:"creation",title:"Creation with the lake",html:"<p>A permanent service becomes necessary as channels, ports, ferries, hazards, customs, rescue, and police duties expand. It operates under the Reichskommissariat with Kriegsmarine officers and engineers seconded for technical supervision.</p>"},
      {id:"status",title:"Legal and naval status",html:"<p>KSS craft are colonial-government vessels and fly the Mittelafrika service ensign. Wehrmacht detachments under military command use the Reich war flag. The distinction preserves one national navy while acknowledging an armed inland service.</p>"},
      {id:"patrol",title:"Patrol layer",html:"<p>Shallow-draft fast boats inspect traffic, escort barges, seal channels, carry small patrols, and provide limited direct fire. Exact designs remain subordinate to future armaments work.</p>"},
      {id:"assault",title:"Assault and landing layer",html:"<p>Larger craft move sections or platoons to ports, islands, ferries, compounds, and surveyed landing places. They are transport and access systems before they are gunboats.</p>"},
      {id:"support",title:"Specialist support craft",html:"<p>Fire-support, mortar, engineer, mine-clearance, salvage, medical, communications, and hydrographic vessels keep routes usable and sustain operations.</p>"},
      {id:"bases",title:"Stützpunktprahme",html:"<p>Slow guarded station barges provide fuel, ammunition, workshops, generators, radios, clinics, accommodation, reserve troops, and sometimes helicopter platforms as floating sector bases.</p>"},
      {id:"war",title:"Kongosee-Sicherungsverband",html:"<p>During the War of the Chiefs patrol, survey, transport, and security units consolidate into a security formation under the joint theater command. The KSS remains central after the regular army arrives.</p>"},
      {id:"people",title:"Indispensable local expertise",html:"<p>African pilots, coxswains, mechanics, trackers, interpreters, and hydrographers make the service operational. No chart or German command replaces lived knowledge of shifting channels and shores.</p>"}
    ],
    related:[{href:"kongosee-eingreifgruppe.html",kicker:"Rapid-response formation",label:"Kongosee-Eingreifgruppe"},{href:"kongosee.html",kicker:"Operating theater",label:"Kongosee"},{href:"mittelafrika.html",kicker:"Governing authority",label:"Reichskommissariat Mittelafrika"}],
    sources:[...mittelafrikaSources,{href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — specification boundary"}],
    facts:[["Abbreviation","KSS"],["Common names","Kongoflotte; Kongoseeflotte"],["Authority","Reichskommissariat Mittelafrika"],["Status","Armed colonial inland service"],["Functions","Navigation, customs, hydrography, rescue, security"],["Wartime formation","Kongosee-Sicherungsverband"],["Floating bases","Stützpunktprahme"],["Craft classes and totals","Open"]]
  }),

  "kongosee-eingreifgruppe": mittelafrikaArticle({
    slug:"kongosee-eingreifgruppe",title:"Kongosee-Eingreifgruppe",category:"Military formations",eyebrow:"Mittelafrikan rapid-response system · Seefeuerwehr",infoboxKicker:"Lake rapid-response formation",
    lead:"The Kongosee-Eingreifgruppe is the mature rapid-response formation developed by the KSS and German theater forces during the War of the Chiefs. Nicknamed the Seefeuerwehr, or lake fire brigade, it combines patrol boats, assault craft, helicopters, engineers, fire support, aircraft, and floating bases to isolate and enter a threatened water sector.",
    canon:"The formation's role, nickname, operational sequence, combined character, and local dependence are established. Establishment, headquarters, unit titles, craft classes, and permanent postwar strength remain open.",
    sections:[
      {id:"problem",title:"The response problem",html:"<p>On Kongosee a seized ferry, destroyed marker, attacked port, or labor refusal can isolate a district faster than road forces can react. The response must find the incident and bring a sustainable force by water or air.</p>"},
      {id:"locate",title:"Locate and seal",html:"<p>Patrol craft, aircraft, radio stations, pilots, and local intelligence identify the affected channels. Boats establish checkpoints and deny reinforcements or escape through marked routes.</p>"},
      {id:"entry",title:"Assault entry",html:"<p>Assault craft and helicopters carry German troops, reliable auxiliaries, interpreters, and specialists to ports, islands, or improvised landing points. Water provides greater sustained lift; helicopters provide urgency.</p>"},
      {id:"engineers",title:"Engineer access",html:"<p>Engineers clear obstacles, mines, timber, damaged jetties, and routes for heavier follow-on forces. Recovery and water purification are treated as immediate tactical requirements.</p>"},
      {id:"support",title:"Fire and air support",html:"<p>Support craft, mortars, aircraft, and selective mechanized forces suppress resistance near strategic nodes. Exact weapons and vehicle designations remain outside the settled formation history.</p>"},
      {id:"base",title:"Floating sustainment",html:"<p>A Stützpunktprahm supplies fuel, ammunition, workshops, medicine, communications, reserves, and sometimes a helicopter platform, allowing the group to remain beyond a fixed garrison.</p>"},
      {id:"people",title:"Mixed expertise",html:"<p>German combat forces depend upon African pilots, trackers, coxswains, mechanics, hydrographers, and interpreters. Operational command is German; practical movement through the lake is irreducibly local.</p>"},
      {id:"legacy",title:"Postwar model",html:"<p>The Eingreifgruppe becomes a template for permanent rapid reinforcement and infrastructure security. Its sequence feeds the wider doctrine of Combat in Fragmented Terrain.</p>"}
    ],
    related:[{href:"kongosee-stromschutz.html",kicker:"Parent service",label:"Kongosee- und Stromschutz"},{href:"combat-fragmented-terrain.html",kicker:"Resulting doctrine",label:"Combat in Fragmented Terrain"},{href:"war-of-the-chiefs.html",kicker:"Founding conflict",label:"War of the Chiefs"}],
    facts:[["Nickname","Seefeuerwehr"],["Type","Combined lake rapid-response formation"],["Developed","During the Häuptlingskrieg"],["Core sequence","Locate, seal, enter, open, suppress, sustain"],["Transport","Patrol craft, assault boats, helicopters"],["Support","Engineers, aircraft, fire-support craft"],["Mobile base","Stützpunktprahm"],["Permanent establishment","Open"]]
  }),

  "combat-fragmented-terrain": mittelafrikaArticle({
    slug:"combat-fragmented-terrain",title:"Combat in Fragmented Terrain",category:"Military doctrine",eyebrow:"Gefechtsführung im zerschnittenen Raum · post-Congo doctrine",infoboxKicker:"German expeditionary doctrine",
    lead:"Combat in Fragmented Terrain—<em>Gefechtsführung im zerschnittenen Raum</em>—is the German doctrine codifying lessons of the Häuptlingskrieg. It treats ports, fuel, communications, markets, channels, political intermediaries, and transport nodes as networks that can be isolated even where no continuous front exists.",
    canon:"The doctrine, title, network concept, Jäger revival, helicopter shift, maintenance emphasis, and procurement consequences are established. Manual date, edition history, authors, formation tables, and equipment names remain partly open.",
    sections:[
      {id:"failure",title:"Failure of universal mechanization",html:"<p>In 1972–73 heavy columns discover that roads behave like ambush canals, bridges and barges determine movement, and a protected vehicle beyond recoverable access is a liability regardless of battlefield quality. The episode becomes known as the <a href='congo-vehicle-crisis.html'>Congo vehicle crisis</a> and the earlier institutional assumption as <a href='panzergrenadier-universalism.html'>Panzergrenadier universalism</a>.</p>"},
      {id:"mobility",title:"Mobility redefined",html:"<p>The doctrine does not reject mechanization. It combines <a href='jaeger-arm-germany.html'>Jäger</a> patrols, local intelligence, aircraft, boats, dismounted infantry, engineers, and selective mechanized concentration according to the terrain and network.</p>"},
      {id:"sequence",title:"Mature operational sequence",html:"<p>Intelligence and light contact find the problem; water and air forces block movement; engineers create access; mechanized groups concentrate at ports and open nodes; police and recognized authorities return to hold the district.</p>"},
      {id:"nodes",title:"Networks rather than fronts",html:"<p><a href='network-isolation-doctrine.html'>Control of markets, fuel, communications, ferries, channels, hospitals, landing places, and political brokers</a> can isolate resistance without occupying every kilometre of forest or shoreline.</p>"},
      {id:"jaeger",title:"Revival of the Jäger arm",html:"<p>Jäger formations become mission-defined light expeditionary forces rather than under-equipped infantry. A permanent tropical and fragmented-terrain establishment grows in Mittelafrika.</p>"},
      {id:"airmobile",title:"Air mobility",html:"<p>Fallschirmjäger practice shifts in part from mass parachute assault toward helicopter movement, blocking forces, medical evacuation, and rapid reinforcement linked to waterborne sustainment.</p>"},
      {id:"maintenance",title:"Maintenance as combat arm",html:"<p><a href='german-field-recovery.html'>Floating workshops, forward recovery, modular engine replacement, filtration, sealing, corrosion control, medical support, and helicopter delivery of critical parts</a> become operational capabilities rather than rear services.</p>"},
      {id:"procurement",title:"Procurement consequences",html:"<p>The war favors lighter amphibious protected transport, modular weapons, tropical reliability, useful dismounted equipment, and vehicles judged by lift, draft, bridge load, repair, and shipping footprint. <a href='panzer-xi.html'>Panzer XI</a> receives a favorable theater assessment; <a href='schuetzenpanzer-71-greif.html'>Greif</a> remains the standard Panzergrenadier vehicle. Exact unregistered light-vehicle programs remain governed by the armaments references.</p>"}
    ],
    related:[{href:"wehrmacht-congo-generation.html",kicker:"Veteran cohort",label:"Wehrmacht Congo Generation"},{href:"congo-vehicle-crisis.html",kicker:"Formative crisis",label:"Congo Vehicle Crisis"},{href:"jaeger-arm-germany.html",kicker:"Revived arm",label:"Jäger Arm"},{href:"fallschirmjaeger.html",kicker:"Air-mobile arm",label:"Fallschirmjäger"},{href:"german-helicopter-borne-warfare.html",kicker:"Vertical mobility",label:"German Helicopter-Borne Warfare"},{href:"german-tropical-establishment.html",kicker:"Permanent institution",label:"German Tropical Establishment"},{href:"network-isolation-doctrine.html",kicker:"Operational method",label:"Network Isolation Doctrine"},{href:"war-of-the-chiefs.html",kicker:"Founding campaign",label:"War of the Chiefs"}],
    sources:[...mittelafrikaSources,{href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — locked specifications"}],
    facts:[["German title","Gefechtsführung im zerschnittenen Raum"],["English title","Combat in Fragmented Terrain"],["Origin","Häuptlingskrieg experience"],["Core model","Isolation of connected nodes"],["Revived arm","Jäger"],["Air-mobile effect","Greater helicopter emphasis"],["Technical principle","Maintenance as combat capability"],["Manual date and authors","Open"]]
  }),

  "second-mosaic-settlement": mittelafrikaArticle({
    slug:"second-mosaic-settlement",title:"Second Mosaic Settlement",category:"Political settlements",eyebrow:"Mittelafrikan hard peace · 1977–1979",infoboxKicker:"Colonial postwar settlement",
    lead:"The Second Mosaic Settlement is the 1977–79 political and administrative settlement that converts German battlefield victory in the War of the Chiefs into a durable colonial order. It retains recognized chiefs and makes collaboration materially explicit through stipends, succession protection, household privilege, performance shares, and community dividends.",
    canon:"The period, retained chiefly government, benefit structure, worker direct-pay rule, postwar aristocracy, and regional limits are established. Formal instruments, signatories, formulas, and jurisdiction-by-jurisdiction implementation remain open.",
    sections:[
      {id:"need",title:"Why a settlement was necessary",html:"<p>German forces break the major armed coalitions by 1974–76 but cannot garrison every village or replace local authority across the basin. A hard peace requires recognized intermediaries with a reason to keep the system operating.</p>"},
      {id:"order",title:"Performance and Participation Order",html:"<p>The revised bargain is administered through an order linking rewards to registration, public order, labor delivery, infrastructure, port performance, production, and worker welfare.</p>"},
      {id:"stipends",title:"Chiefly compensation",html:"<p>Recognized chiefs receive fixed stipends, personal performance shares, household privileges, protected succession, and access to enterprise or service concessions.</p>"},
      {id:"dividends",title:"Community dividends",html:"<p>Communities receive material returns tied to production and administrative performance. The mechanism can finance roads, clinics, schools, power, ferries, and collective goods while making access conditional on obedience.</p>"},
      {id:"workers",title:"Direct payment of workers",html:"<p>Workers remain directly paid rather than becoming the property or payroll of chiefs. The distinction limits some predation but leaves chiefs powerful as labor brokers and gatekeepers.</p>"},
      {id:"aristocracy",title:"The Mosaic aristocracy",html:"<p>Successful chiefs and lake-service families accumulate wealth through fisheries, warehouses, ferries, transport, ports, electricity distribution, and performance shares. This elite overlaps with but does not equal the German-speaking technical estate.</p>"},
      {id:"procedure",title:"Late procedural restraints",html:"<p>After the 1978–79 scandal, relocation orders must be written, responsibility assigned, compensation registered, minimum services planned, church and cemetery records copied, appeals logged, and punitive categories separated.</p>"},
      {id:"limits",title:"Regional limits",html:"<p>The settlement works best in chiefly and lake jurisdictions. Urban German West Africa increasingly demands municipal, professional, church, commodity-board, and political sovereignty rather than improved terms inside empire.</p>"}
    ],
    related:[{href:"mosaic-order.html",kicker:"Order revised",label:"Mosaic Order"},{href:"war-of-the-chiefs.html",kicker:"Preceding conflict",label:"War of the Chiefs"},{href:"tribal-cadastre.html",kicker:"Succession registry",label:"Tribal Cadastre"}],
    facts:[["Period","1977–1979"],["Preceding conflict","Mittelafrikanischer Häuptlingskrieg"],["Local government","Recognized chiefs retained"],["Administrative instrument","Performance and Participation Order"],["Chiefly return","Stipends, shares, succession, privileges"],["Community return","Performance-linked dividends"],["Worker status","Directly paid"],["Formal clauses and formulas","Open"]]
  })
});

const mittelafrikaRelated = {
  "british-africa":[{href:"counting-wars.html",kicker:"Refugee-producing frontier",label:"Counting Wars"},{href:"kongosee.html",kicker:"German basin transformation",label:"Kongosee"}],
  "computing-networks":[{href:"mosaik-system.html",kicker:"Colonial administrative network",label:"MOSAIK"}],
  "political-economy":[{href:"kongo-gesamtwerk.html",kicker:"Directed imperial investment",label:"Kongo-Gesamtwerk"},{href:"kongowerke-ag.html",kicker:"Imperial operating consortium",label:"Kongowerke AG"}]
};

Object.entries(mittelafrikaRelated).forEach(([slug,items])=>{
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=article.related||[];
  items.forEach(item=>{if(!article.related.some(existing=>existing.href===item.href)) article.related.push(item);});
});
