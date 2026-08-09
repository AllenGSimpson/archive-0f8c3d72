window.deepArticles = window.deepArticles || {};

const eastAfricanTerritoriesSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British Africa and the Cape system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — African constitutional settlement"},
  {href:"../transcript.md",label:"Master Transcript — East African territorial settlements"}
];

const eastAfricanTerritoriesRelated = [
  {href:"british-africa.html",kicker:"Regional order",label:"British Africa and the Cape System"},
  {href:"commonwealth.html",kicker:"Imperial and association system",label:"British Commonwealth"},
  {href:"east-african-defence-development-commission.html",kicker:"Shared regional authority",label:"East African Defence and Development Commission"},
  {href:"defensive-trusteeship.html",kicker:"Governing doctrine",label:"Defensive Trusteeship"}
];

const eastAfricanTerritoryArticle = config => ({
  category:"Countries",
  eyebrow:"British East Africa · political and constitutional history",
  infoboxKicker:"East African state or territory",
  ...config,
  sources:[...eastAfricanTerritoriesSources,...(config.additionalSources || [])],
  categories:config.categories || ["British East Africa","British Commonwealth","Countries"]
});

Object.assign(window.deepArticles, {
  "kenya": eastAfricanTerritoryArticle({
    title:"Kenya",
    eyebrow:"Crown territory · East African security state",
    infoboxTitle:"Kenya",
    flag:{src:"assets/flags/kenya-colony.svg",alt:"Blue Ensign bearing the red lion badge of colonial Kenya",caption:"Historical Kenya ensign used as a pre-reform identifier; the later territorial flag remains open"},
    lead:"Kenya is a Crown territory of the British Commonwealth and the principal political battleground of British East Africa. It combines a heavily policed emergency state, settler agriculture, African nationalist politics, Indian and Arab commercial communities, and movement toward multiracial internal government. Unlike Rhodesia, Kenya never receives an unrestricted settler security constitution: London retains decisive control while relying upon institutions whose coercive practices it increasingly declines to examine closely.",
    canon:"Kenya's continued Crown connection, earlier and harsher emergency logic, defended settlement belts, home guards, intelligence screening, protected villages, transport patrols, controlled refugee movement, more direct subordination to London than Rhodesia, settler demands for greater discretion, participation in East African common services, and unresolved contest among Crown-colony, multiracial, and settler-security models are established. Its exact postwar constitution, flag after reform, officeholders, parties, elections, emergency chronology and casualties, later territorial name, and final sovereignty status remain open. Pre-divergence geography and institutions follow historical Kenya.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Colony_and_Protectorate_of_Kenya",label:"Wikipedia — historical Colony and Protectorate of Kenya background"}],
    sections:[
      {id:"inheritance",title:"Colony and coastal protectorate",html:"<p>British Kenya entered the postwar period with a Crown colony in the interior and a legally distinct coastal protectorate historically connected to the Sultan of Zanzibar. Nairobi served as the administrative and railway center; Mombasa joined the coast to the Indian Ocean.</p><p>European settlement in the highlands, African land grievances, Indian commerce, Swahili and Arab coastal institutions, missions, labor migration, and sharply unequal representation made constitutional reform inseparable from land and race.</p>"},
      {id:"emergency",title:"The Kenyan Emergency",html:"<p>Rural revolt and the movement conventionally called Mau Mau met an earlier and more explicitly strategic response than in the historical decolonization sequence. London treated attacks, oathing, land conflict, and insurgent organization as threats to the whole Cape–Indian Ocean route rather than as a crisis to be followed by imminent withdrawal.</p><p>Emergency government used detention, intelligence screening, home guards, protected villages, defended settlement belts, and road and rail patrols. The exact campaign chronology, leadership settlements, casualties, and legal reckoning remain open.</p>"},
      {id:"three-visions",title:"Three constitutional visions",html:"<p>Kenyan politics divided among continued Crown-colony direction from London, a multiracial territorial government with African majority participation, and a settler security society aligned with Rhodesia and South Africa.</p><p>Settler organizations demanded the <a href='salisbury-understanding.html'>Rhodesian discretion</a> to manage security, settlement, and labor. London refused to permit a self-governing white fortress, but often accepted local methods that it would not defend as metropolitan policy.</p>"},
      {id:"government",title:"Government and representation",html:"<p>The governor, ministers, Legislative Council, municipalities, district authorities, and African local institutions evolved toward a territorial cabinet and broader representation without a single sovereign transfer. Qualifications and communal representation were formally organized through residence, education, property, service, and community categories rather than a simple racial franchise.</p><p>The resulting system expanded African officeholding while preserving powerful executive and security reservations.</p>"},
      {id:"economy",title:"Land, labor, and the transport state",html:"<p>Agriculture in the highlands, African farming, livestock, tea, coffee, sisal, urban industry, tourism, and Mombasa shipping formed the principal economy. The railway and road systems made Nairobi the headquarters of East African administration and Mombasa the indispensable ocean outlet for Kenya and Uganda.</p><p>Land tenure and the distribution of infrastructure remained the most durable sources of political conflict.</p>"},
      {id:"commission",title:"East African common services",html:"<p>Kenya participated with <a href='uganda.html'>Uganda</a> and <a href='tanganyika.html'>Tanganyika</a> in the <a href='east-african-defence-development-commission.html'>East African Defence and Development Commission</a>. Nairobi hosted much of the common machinery for railways, ports, aviation, posts, health, food reserves, refugee registration, and security procurement.</p><p>Ugandan and Tanganyikan resistance prevented headquarters influence from becoming Kenyan political sovereignty over the region.</p>"},
      {id:"refugees",title:"Refugees and the frontier order",html:"<p>Kenya was less exposed to the direct Congolese crossings that burdened Uganda and Tanganyika, but shared registration systems, supply routes, camps, intelligence, and regional reinforcement. Refugee administration strengthened the same executive institutions already built for the Emergency.</p><p>The distinction between insurgent, refugee, labor migrant, and political organizer was therefore frequently contested.</p>"},
      {id:"mature",title:"Mature Commonwealth position",html:"<p>By 1985 Kenya remained more directly Crown-linked than Rhodesia and more coercively administered than Tanganyika. It possessed growing internal government, a distinct territorial political class, and substantial economic weight, but Britain continued to control external defense and the most sensitive security guarantees.</p><p>Whether multiracial Crown government becomes permanent association or yields to full sovereignty remains unregistered.</p>"}
    ],
    related:[...eastAfricanTerritoriesRelated,{href:"uganda.html",kicker:"Northern common-services partner",label:"Uganda"},{href:"tanganyika.html",kicker:"Southern common-services partner",label:"Tanganyika"},{href:"salisbury-understanding.html",kicker:"Rejected settler model",label:"Salisbury Understanding"}],
    facts:[["Capital","Nairobi"],["Status","Crown territory moving toward multiracial internal government"],["Government","Territorial ministry and legislature under retained Crown authority"],["Major port","Mombasa"],["Administrative languages","English and Swahili"],["Regional institution","East African Defence and Development Commission"],["External defense","United Kingdom"],["Principal political conflict","Land, representation, and emergency power"],["Sovereignty endpoint","Open"]]
  }),

  "uganda": eastAfricanTerritoryArticle({
    title:"Uganda",
    eyebrow:"Protected federation · Great Lakes kingdom system",
    infoboxTitle:"Uganda",
    flag:{src:"assets/flags/uganda-protectorate.svg",alt:"Blue Ensign bearing the crested-crane badge of the Uganda Protectorate",caption:"Historical protectorate ensign used as a pre-reform identifier; the later federal flag remains open"},
    lead:"Uganda is a protected federation of kingdoms, districts, and local authorities under British external defense. Its constitution preserves Bugandan treaty rights and other indigenous institutions rather than subordinating them to a unitary East African state. Refugees from the Congo and Rwanda–Burundi, the Kilembe copper-cobalt district, and the fear of rule from Nairobi turn Uganda into the strongest institutional opponent of East African political federation even as it depends upon shared transport, health, and security services.",
    canon:"Uganda's protected-federation trajectory, strong subnational kingdoms and treaty structures, Bugandan autonomy, resistance to Nairobi centralization, Congolese and Rwanda–Burundi refugee pressure, Kilembe copper-cobalt importance, participation in East African common services, British external defense, and preservation as a separate political system are established. The exact federal instrument, distribution of powers among kingdoms and districts, flag after reform, capital settlement, monarchs and ministers after historical divergence, parties, elections, armed forces, and final sovereignty status remain open. Historical protectorate geography and kingdom institutions remain the baseline.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Uganda_Protectorate",label:"Wikipedia — historical Uganda Protectorate background"}],
    sections:[
      {id:"protectorate",title:"Protectorate and kingdom inheritance",html:"<p>The Uganda Protectorate was constructed around treaties with Buganda and the extension of British protection across other kingdoms, chiefships, and districts. Government therefore never rested upon one undifferentiated territorial nation.</p><p>Buganda's Kabaka, Lukiiko, land order, and treaty memory remained especially powerful, while Bunyoro, Toro, Ankole, Busoga, and non-kingdom districts entered the constitutional system through different authorities.</p>"},
      {id:"federation",title:"Protected federation",html:"<p>Post-Accra reform recognized Uganda as a protected federation rather than an ordinary Crown colony. Territorial ministries and legislatures handled common finance, transport, education, health, and justice while kingdoms and local governments retained specified land, customary, cultural, and administrative powers.</p><p>The Crown acted as external protector and constitutional guarantor; Britain retained defense, foreign alignment, strategic communications, and agreed intervention powers.</p>"},
      {id:"buganda",title:"The Buganda question",html:"<p>Bugandan leaders resisted any settlement that reduced the kingdom to a province or transferred British reserved powers to Nairobi. Federal bargaining joined African self-government against London to the relationship among Kampala, the kingdoms, and districts governed outside hereditary institutions.</p><p>Ordered Particularism supplied the imperial justification for preserving difference, although critics argued that Britain used local autonomy to prevent a sovereign national majority.</p>"},
      {id:"refugees",title:"Great Lakes refugee frontier",html:"<p>Refugees crossed from northeastern Congo and the Rwanda–Burundi districts through lake routes, missions, labor networks, and frontier roads. Settlement affected land, cattle, disease control, policing, and relations among communities on both sides of the protectorate boundary.</p><p>Registration and relief systems became permanent institutions rather than temporary emergency measures.</p>"},
      {id:"kilembe",title:"Kilembe and strategic industry",html:"<p>The Kilembe copper-cobalt complex, power works, housing, and the Jinja smelting connection gave Uganda importance to Commonwealth electrical, transport, reactor, and advanced-industrial supply chains. Coffee, cotton, food production, lake commerce, and public services remained more broadly important to ordinary employment.</p><p>Mineral security strengthened British claims that external defense could not be separated from economic administration.</p>"},
      {id:"commission",title:"Common services without federation",html:"<p>Uganda shared railways, ports, aviation, posts, telecommunications, disease control, food reserves, and procurement with <a href='kenya.html'>Kenya</a> and <a href='tanganyika.html'>Tanganyika</a> through the <a href='east-african-defence-development-commission.html'>East African Commission</a>.</p><p>Participation was functional rather than federal. Ugandan assent and territorial accommodation prevented common-service legislation from becoming a Nairobi-directed supergovernment.</p>"},
      {id:"society",title:"Religion, language, and public authority",html:"<p>Christian churches, Islam, indigenous religious practice, royal courts, chiefs, cooperatives, schools, and professional associations shared public space. English served higher administration, Luganda remained central in Buganda, and numerous Bantu and Nilotic languages sustained regional political life.</p><p>The strongest parties and coalitions necessarily crossed the divide between national office and kingdom allegiance.</p>"},
      {id:"mature",title:"Mature constitutional position",html:"<p>By 1985 Uganda possessed extensive domestic government while remaining under a binding Commonwealth defense relationship. The federation protected local institutions from both direct British administration and East African absorption, but also placed a ceiling upon independent diplomacy.</p><p>Its final conversion into a sovereign realm, associated state, or republic remains open.</p>"}
    ],
    related:[...eastAfricanTerritoriesRelated,{href:"kenya.html",kicker:"Eastern transport partner",label:"Kenya"},{href:"tanganyika.html",kicker:"Southern frontier partner",label:"Tanganyika"},{href:"commonwealth-african-reserve-system.html",kicker:"Refugee and supply network",label:"Commonwealth African Reserve System"}],
    facts:[["Administrative centers","Kampala and Entebbe"],["Status","Protected federation of kingdoms and districts"],["Government","Territorial institutions with protected subnational authorities"],["Major constituent","Kingdom of Buganda"],["Administrative language","English; major territorial languages recognized"],["Strategic industry","Kilembe copper-cobalt complex"],["Regional institution","East African Defence and Development Commission"],["External defense","United Kingdom"],["Sovereignty endpoint","Open"]]
  }),

  "tanganyika": eastAfricanTerritoryArticle({
    title:"Tanganyika",
    eyebrow:"Internally self-governing Crown state · Indian Ocean frontier",
    infoboxTitle:"Tanganyika",
    flag:{src:"assets/flags/tanganyika-territory.svg",alt:"Red Ensign bearing the giraffe badge of Tanganyika Territory",caption:"Historical territorial ensign used as a pre-reform identifier; the later Crown-state flag remains open"},
    lead:"Tanganyika is an internally self-governing Crown state and the Commonwealth's most exposed Indian Ocean frontier against German Mittelafrika. Its smaller European settler population and direct administrative dependence upon London make it the preferred British model for African local government beneath retained defense. Germany's public claim to the former German East African colony gives every constitutional postponement a strategic rationale and every nationalist objection an obvious force.",
    canon:"Tanganyika's continued separate existence, smaller settler population, greater administrative compliance with London, German reclamation rhetoric, African local councils, gradual internal self-government, British control of defense and foreign relations, strong territorial police, retained air and port facilities, East African common-services membership, refugee pressure from eastern Congo and Rwanda–Burundi, and status as an internally self-governing Crown state are established. The exact post-mandate legal instrument, flag after reform, ministers, parties, elections, defense installations, relationship with Zanzibar, later constitutional endpoint, and union or non-union with the islands remain open. Historical territorial geography and institutions provide the baseline.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Tanganyika_(territory)",label:"Wikipedia — historical Tanganyika Territory background"},{href:"https://en.wikipedia.org/wiki/Flag_of_Tanganyika_Territory",label:"Wikipedia — historical territorial ensign"}],
    sections:[
      {id:"mandate",title:"From German colony to British territory",html:"<p>Tanganyika emerged from the mainland portion of German East Africa occupied during the First World War and subsequently administered by Britain under a League mandate. The fractured settlement after the Second World War did not return it to Germany or produce the historical rapid transfer to sovereignty.</p><p>The precise international instrument replacing the old mandate is open; British administration and Tanganyikan territorial identity continued.</p>"},
      {id:"german-claim",title:"The German reclamation claim",html:"<p>Berlin regularly described Tanganyika as stolen German East Africa. British officials treated much of the language as nostalgic imperial theater, but German control of the continental interior made it impossible to dismiss as harmless.</p><p>The claim justified retained garrisons, aviation, port access, and intelligence while allowing nationalists to argue that an external threat had become a permanent excuse against sovereignty.</p>"},
      {id:"settlement",title:"Crown-state settlement",html:"<p>Tanganyika acquired African local councils, a territorial ministry and legislature, control of land, agriculture, education, ordinary justice, taxation, and most policing. Britain reserved external defense, foreign alignment, strategic communications, air and naval access, and defined emergency powers.</p><p>Its smaller settler population allowed London to present the arrangement as its preferred multiracial alternative to Rhodesian autonomy.</p>"},
      {id:"refugees",title:"The western refugee frontier",html:"<p>Families, mine workers, mission communities, deserters, and defeated rebels entered from eastern Congo and Rwanda–Burundi. Camps and reception districts gathered around lake routes, rail connections, roads, and agricultural zones.</p><p>Refugee administration produced social strain and strengthened the territorial police, but also trained African civil servants and local governments in responsibilities previously monopolized by the colonial state.</p>"},
      {id:"economy",title:"Ports, corridors, and production",html:"<p>Dar es Salaam, central and northern railways, lake shipping, sisal, coffee, cotton, food production, gold, diamonds, graphite, and localized mineral extraction connected the interior to the Indian Ocean. Transport value frequently outweighed the revenue of any single export.</p><p>Commonwealth investment favored ports, rail reliability, aviation, disease control, power, and strategic stockpiles.</p>"},
      {id:"commission",title:"East African common services",html:"<p>Tanganyika shared technical services with <a href='kenya.html'>Kenya</a> and <a href='uganda.html'>Uganda</a> through the <a href='east-african-defence-development-commission.html'>East African Defence and Development Commission</a>. It resisted any conversion of those services into a Nairobi-run settler federation.</p><p>Common systems improved administrative capacity while making complete separation from the Commonwealth materially harder.</p>"},
      {id:"zanzibar",title:"Zanzibar and the coast",html:"<p>Tanganyika's mainland government remained legally distinct from Zanzibar and its islands. Dar es Salaam and the mainland coast shared Swahili, Islamic, commercial, and family networks with the archipelago without establishing the historical 1964 union by default.</p><p>Zanzibar's precise later status and any negotiated association remain open canon.</p>"},
      {id:"mature",title:"Mature Commonwealth role",html:"<p>By 1985 Tanganyika possessed real domestic government and a recognizable territorial nationalism inside the East African and Commonwealth systems. British defense deterred direct German pressure and preserved access to capital and markets.</p><p>The same guarantee constrained diplomacy and indefinitely deferred the test of whether the state could choose another alignment.</p>"}
    ],
    related:[...eastAfricanTerritoriesRelated,{href:"kenya.html",kicker:"Northern common-services partner",label:"Kenya"},{href:"uganda.html",kicker:"Great Lakes partner",label:"Uganda"},{href:"no-empty-flagstaff-doctrine.html",kicker:"Withdrawal rule",label:"No Empty Flagstaff Doctrine"}],
    facts:[["Capital","Dar es Salaam"],["Status","Internally self-governing Crown state"],["Government","Territorial ministry and legislature"],["Administrative languages","English and Swahili"],["Regional institution","East African Defence and Development Commission"],["Principal port","Dar es Salaam"],["Strategic frontier","German Mittelafrika"],["External defense","United Kingdom"],["Relationship with Zanzibar","Separate; later settlement open"]]
  })
});

function appendEastAfricanTerritories(id,key,items){
  const article=window.deepArticles[id];
  if(!article)return;
  article[key]=article[key]||[];
  for(const item of items){
    if(!article[key].some(existing=>(existing.id&&existing.id===item.id)||(existing.href&&existing.href===item.href))) article[key].push(item);
  }
}

appendEastAfricanTerritories("east-african-defence-development-commission","related",[
  {href:"kenya.html",kicker:"Headquarters territory",label:"Kenya"},
  {href:"uganda.html",kicker:"Protected kingdom federation",label:"Uganda"},
  {href:"tanganyika.html",kicker:"Self-governing Crown state",label:"Tanganyika"}
]);
appendEastAfricanTerritories("east-african-defence-development-commission","sections",[
  {id:"territorial-settlements",title:"Three territorial settlements",html:"<p><a href='kenya.html'>Kenya</a> remained the Crown-linked emergency and multiracial battleground; <a href='uganda.html'>Uganda</a> developed as a protected federation of kingdoms and districts; and <a href='tanganyika.html'>Tanganyika</a> became an internally self-governing Crown state. Shared administration never erased those constitutional differences.</p>"}
]);
appendEastAfricanTerritories("british-africa","sections",[
  {id:"east-african-states",title:"East African constitutional paths",html:"<p><a href='kenya.html'>Kenya</a>, <a href='uganda.html'>Uganda</a>, and <a href='tanganyika.html'>Tanganyika</a> share defense, transport, health, refugee, and development services without forming one federation. Kenya remains the contested Crown security state, Uganda preserves its kingdom system, and Tanganyika follows the strongest internal-self-government route.</p>"}
]);
appendEastAfricanTerritories("british-africa","related",[
  {href:"kenya.html",kicker:"Crown security territory",label:"Kenya"},
  {href:"uganda.html",kicker:"Protected federation",label:"Uganda"},
  {href:"tanganyika.html",kicker:"Self-governing Crown state",label:"Tanganyika"}
]);
appendEastAfricanTerritories("defensive-trusteeship","related",[
  {href:"kenya.html",kicker:"Emergency application",label:"Kenya"},
  {href:"uganda.html",kicker:"Particularist application",label:"Uganda"},
  {href:"tanganyika.html",kicker:"Preferred Crown-state application",label:"Tanganyika"}
]);
