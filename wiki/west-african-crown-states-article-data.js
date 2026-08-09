window.deepArticles = window.deepArticles || {};

const westAfricanCrownStatesSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British Africa and the Cape system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Accra settlement and Ghana crisis"},
  {href:"../transcript.md",label:"Master Transcript — West African constitutional settlements"}
];

const westAfricanCrownStatesDiagram = {
  src:"assets/diagrams/british-maritime-system.svg",
  alt:"British Atlantic, Cape, and African maritime system",
  caption:"West African governments combined local political geography with Britain's Atlantic and Cape-route strategy"
};

const westAfricanGhanaFlag = {
  src:"assets/flags/ghana.svg",
  alt:"Flag of Ghana, a red, gold, and green horizontal tricolor bearing a black star",
  caption:"Flag of the Republic of Ghana from 6 March 1963"
};

const westAfricanCrownStatesRelated = [
  {href:"british-africa.html",kicker:"Regional order",label:"British Africa and the Cape System"},
  {href:"commonwealth.html",kicker:"Commonwealth center",label:"British Commonwealth"},
  {href:"accra-compact.html",kicker:"1957 constitutional settlement",label:"Accra Compact"},
  {href:"defensive-trusteeship.html",kicker:"Governing doctrine",label:"Defensive Trusteeship"}
];

const westAfricanCrownStateArticle = config => ({
  category:"Countries",
  eyebrow:"West Africa · political and constitutional history",
  infoboxKicker:"West African state or territory",
  landscape:westAfricanCrownStatesDiagram,
  ...config,
  sources:[...westAfricanCrownStatesSources,...(config.additionalSources || [])],
  categories:config.categories || ["West Africa","British Commonwealth","Countries"]
});

Object.assign(window.deepArticles, {
  "nigeria": westAfricanCrownStateArticle({
    title:"Crown Federation of Nigeria",
    eyebrow:"Federal Crown state · Gulf of Guinea",
    infoboxTitle:"Nigeria",
    lead:"The Crown Federation of Nigeria is the largest internally self-governing state of British West Africa. Its federal and regional governments control most domestic legislation, taxation, education, land, agriculture, and ordinary policing, while the Crown and Commonwealth retain external defense, strategic communications, military access, and supervision of foreign alignment. Nigeria's scale makes it indispensable to the Cape system and impossible to govern as a unitary colony.",
    canon:"Nigeria's federalization under the 1957 Accra Compact, regional domestic autonomy, Crown sovereignty or binding British defense, Lagos and Gulf importance, refugee and frontier functions, and survival as a Crown federation after the Accra Disaster are established. The exact federal constitution, region and state boundaries after 1957, flag, capital settlement, governors-general, prime ministers, election results, party coalitions, military organization, and constitutional position after 1985 remain open. Pre-1957 regional and institutional background follows historical Nigeria unless displaced by setting events.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Federation_of_Nigeria",label:"Wikipedia — historical Federation of Nigeria background"},{href:"https://en.wikipedia.org/wiki/Colonial_Nigeria",label:"Wikipedia — colonial and regional background"}],
    sections:[
      {id:"formation",title:"Formation and federal inheritance",html:"<p>British Nigeria entered the postwar era as a political union of sharply different regions rather than a single national society. The Muslim north, Yoruba west, Igbo-dominated east, Lagos, the Niger delta, minority belts, emirates, cities, and customary authorities possessed distinct institutional histories.</p><p>Federal development before 1947 therefore survived defeat and became the foundation for later self-government.</p>"},
      {id:"accra",title:"The Accra federal settlement",html:"<p>The <a href='accra-compact.html'>Accra Compact</a> converted Nigeria into an internally self-governing Crown federation. An African federal ministry and legislature acquired domestic authority while regional governments retained extensive control over land, education, customary institutions, police, and development.</p><p>Britain reserved defense, external alignment, strategic bases and communications, and specified currency and emergency powers.</p>"},
      {id:"regions",title:"Regions and constituent authority",html:"<p>Northern, Western, and Eastern regional institutions form the initial federal structure, with Lagos under a special federal arrangement and minority districts seeking additional protection. Emirates, chiefly councils, municipal governments, unions, professional bodies, and elected assemblies overlap rather than disappear.</p><p>The exact later map remains open, but no durable Nigerian order can ignore the balance among the north, Yoruba west, Igbo east, delta minorities, and the federal capital.</p>"},
      {id:"government",title:"Government and the Crown",html:"<p>The federal cabinet manages finance, interregional trade, major transport, customs, federal courts, and common services. The Crown representative retains only the powers specified by the settlement, although defense and emergency schedules remain substantial.</p><p>Nigerian citizenship supplies franchise, passports, residence, and public office without creating an unrestricted right of settlement in Britain.</p>"},
      {id:"economy",title:"Economy and infrastructure",html:"<p>Lagos, Port Harcourt, railways, the Niger and Benue waterways, cocoa, groundnuts, palm produce, minerals, shipping, and a large internal market make Nigeria the economic center of Commonwealth West Africa. Regional revenue disputes are therefore constitutional disputes as well as budget arguments.</p><p>Commonwealth development contracts expand ports, power, roads, public health, and technical education while preserving British and Dominion commercial leverage.</p>"},
      {id:"society",title:"Religion, language, and public life",html:"<p>Islamic emirates and courts remain influential in the north; Christianity, missions, and schools are strongest in much of the south; customary institutions and indigenous religious practice continue throughout the federation. English is the federal administrative language alongside Hausa, Yoruba, Igbo, and many regional languages.</p><p>Federal politics turns translation, schooling, civil-service recruitment, and regional representation into questions of national survival.</p>"},
      {id:"security",title:"Security and the German frontier",html:"<p>Nigeria supplies ports, troops, police, airfields, and administrative depth to Britain's West African system. Refugee districts and the separate <a href='southern-cameroons.html'>Southern Cameroons</a> frontier protect the federation from direct contact with the most heavily militarized parts of German Cameroon.</p><p>Nigerian leaders accept Commonwealth defense more readily than permanent metropolitan command over domestic security.</p>"},
      {id:"after-accra",title:"After the Accra Disaster",html:"<p>The 1963 fall of Ghana ends the strongest parliamentary campaign for immediate unrestricted sovereignty. Nigeria remains a Crown federation beneath an <a href='accra-clause.html'>Accra Clause</a> rather than risk simultaneous regional crisis and external intervention.</p><p>By 1985 Nigeria possesses real domestic government and formidable demographic weight, but its final right to leave the Commonwealth security order remains the defining constitutional dispute.</p>"}
    ],
    related:[...westAfricanCrownStatesRelated,{href:"southern-cameroons.html",kicker:"Eastern frontier",label:"Southern Cameroons"},{href:"associated-crown-state.html",kicker:"Related status",label:"Associated Crown State"},{href:"accra-clause.html",kicker:"Post-1963 safeguard",label:"Accra Clause"}],
    facts:[["Conventional name","Crown Federation of Nigeria"],["Capital","Lagos; later federal arrangement open"],["Government","Internally self-governing federation under the Crown"],["Constituent structure","Regional governments and local authorities"],["Official language","English; major regional languages recognized"],["Citizenship","Nigerian territorial citizenship"],["External defense","British Commonwealth"],["Principal ports","Lagos and Port Harcourt"],["Status by 1985","Crown federation"]]
  }),

  "southern-cameroons": westAfricanCrownStateArticle({
    title:"Southern Cameroons",
    eyebrow:"Crown Frontier Territory · Gulf of Guinea–Cameroon frontier",
    infoboxTitle:"Southern Cameroons",
    lead:"Southern Cameroons is the fortified Crown Frontier Territory between Nigeria and German Cameroon. It possesses a territorial assembly, executive government, courts, citizenship, constabulary, and control of most domestic affairs, while Britain retains external defense, foreign relations, air and signals facilities, intelligence stations, and emergency reinforcement. Its political life is defined by the contradiction between a genuine separate Cameroonian identity and the strategic machinery built to keep Kribi and Mittelafrika beyond the frontier.",
    canon:"Separation from Nigeria, Crown Frontier Territory status after 1957, assembly and local citizenship, Nigerian economic connections, enlarged constabulary, refugee districts, British defense guarantee, permanent air, signals, and intelligence facilities, and proximity to Kribi are established. The official constitutional name, flag, capital, borders, officeholders, parties, elections, exact relationship with Northern Cameroons, and later sovereign status remain open. Pre-divergence mandate and trusteeship background follows historical Southern Cameroons.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Southern_Cameroons",label:"Wikipedia — historical Southern Cameroons background"}],
    sections:[
      {id:"mandate",title:"Mandate and Nigerian administration",html:"<p>Southern Cameroons emerged from the British-administered part of former German Kamerun and was historically governed in close association with Nigeria. Geography, English-language institutions, trade routes, mission networks, and distinct Cameroonian politics prevented simple absorption into either neighboring system.</p>"},
      {id:"separation",title:"Separation under the Accra Compact",html:"<p>The 1957 settlement removed Southern Cameroons from any presumption of automatic Nigerian incorporation. It became the principal <a href='crown-frontier-territory.html'>Crown Frontier Territory</a>, with its own assembly, executive, courts, citizenship, flag in principle, and authority over land, education, local development, and ordinary policing.</p>"},
      {id:"government",title:"Government and citizenship",html:"<p>A territorial ministry governs through elected representatives, chiefs, municipalities, customary authorities, and a professional civil service. Local citizenship distinguishes residence, franchise, and office from Nigerian nationality while preserving regulated movement and commerce across the border.</p><p>Exact electoral and constitutional arrangements remain unsettled in the surviving record.</p>"},
      {id:"frontier",title:"The German frontier",html:"<p>German Cameroon places the territory opposite the Kribi aerospace, signals, naval, and missile complex. Patrol roads, observation posts, airfields, communications stations, and refugee districts make the border one of the most closely watched in Africa.</p><p>The risk of German-backed political action is real, but it also supplies London with a permanent argument against strategic independence.</p>"},
      {id:"economy",title:"Economy and Nigerian connection",html:"<p>Plantation agriculture, timber, coastal trade, small ports, road links, and Nigerian markets support the territorial economy. Nigeria remains the principal commercial hinterland even after political separation.</p><p>Commonwealth contracts and security expenditure create employment while making public finance dependent upon the frontier role.</p>"},
      {id:"society",title:"Language, missions, and identity",html:"<p>English serves government and higher education alongside numerous local languages. Christian missions, chiefly institutions, commercial towns, farmers, and migrant communities form competing political constituencies.</p><p>Public debate divides among advocates of separate Cameroonian identity, closer Nigerian federation, greater Crown association, and eventual accommodation with the German-controlled east.</p>"},
      {id:"security",title:"Constabulary and intelligence state",html:"<p>The enlarged constabulary manages ordinary policing, border screening, refugee movement, and protection of infrastructure. British forces and services retain external defense, strategic aviation, signals collection, and reinforcement.</p><p>Residents criticize a system in which surveillance capacity often grows faster than courts, housing, or representative government.</p>"},
      {id:"position",title:"Constitutional position",html:"<p>Southern Cameroons is neither a Nigerian province, a German client, nor an unrestricted sovereign republic. Its status is the most literal application of the <a href='no-empty-flagstaff-doctrine.html'>No Empty Flagstaff Doctrine</a>: domestic government beneath an explicit frontier guarantee.</p><p>Whether that arrangement becomes permanent association or a stage toward sovereignty remains open.</p>"}
    ],
    related:[...westAfricanCrownStatesRelated,{href:"crown-frontier-territory.html",kicker:"Constitutional status",label:"Crown Frontier Territory"},{href:"nigeria.html",kicker:"Economic neighbor",label:"Crown Federation of Nigeria"},{href:"mittelafrika.html",kicker:"Opposing frontier",label:"Mittelafrika"}],
    facts:[["Status","Crown Frontier Territory"],["Capital","Open"],["Government","Self-governing territorial ministry and assembly"],["Citizenship","Southern Cameroonian"],["Administrative language","English"],["External defense","United Kingdom"],["Principal strategic neighbor","German Cameroon"],["Economic hinterland","Nigeria"],["Sovereignty endpoint","Open"]]
  }),

  "sierra-leone": westAfricanCrownStateArticle({
    title:"Sierra Leone",
    eyebrow:"Self-governing Crown state · Atlantic West Africa",
    infoboxTitle:"Sierra Leone",
    lead:"Sierra Leone is a self-governing Crown state and the principal British naval, hospital, refugee-processing, and convoy hub remaining on the West African Atlantic after Ghana's defection. Freetown's exceptional natural harbor and long institutional history give the country strategic weight beyond its population. Domestic government must continually balance the old Colony around Freetown, the larger Protectorate interior, chiefs, Krio institutions, mineral districts, and Commonwealth defense requirements.",
    canon:"Sierra Leone's role as a defended Atlantic link, self-governing Crown-state trajectory, Freetown convoy and naval importance, refugee-processing function, later strengthening after the loss of Takoradi, and continued Commonwealth association are established. The exact constitution, flag, independence or accession instrument, Crown title, prime ministers, elections, party system, military organization, and status after 1985 remain open. Historical Colony–Protectorate geography and the importance of Freetown and diamonds are retained unless displaced.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Sierra_Leone_Colony_and_Protectorate",label:"Wikipedia — historical Colony and Protectorate background"},{href:"https://en.wikipedia.org/wiki/Sierra_Leone",label:"Wikipedia — geography and economic background"}],
    sections:[
      {id:"inheritance",title:"Colony and Protectorate inheritance",html:"<p>Sierra Leone entered the postwar settlement with two political geographies: the Crown Colony around Freetown, shaped by the Krio community and English-derived institutions, and the much larger Protectorate governed through chiefs, district administration, and customary law.</p><p>Self-government had to join them without allowing either Freetown or the interior to treat the other as a dependency.</p>"},
      {id:"freetown",title:"Freetown and the Atlantic system",html:"<p>Freetown's deep natural harbor, repair capacity, fuel, hospitals, communications, and Atlantic position make it Britain's first great port on the Cape route. Convoys, escorts, merchant ships, refugee transports, and Commonwealth relief traffic all pass through its roads and anchorages.</p><p>The state therefore receives investment that a purely local economic calculation would not justify.</p>"},
      {id:"settlement",title:"Crown-state settlement",html:"<p>Under the Accra system Sierra Leone gains an African ministry, elected legislature, territorial citizenship, courts, taxation, land administration, education, and ordinary police powers. Britain retains external defense, naval access, strategic communications, and agreed emergency powers.</p><p>The exact constitutional label fluctuates between Crown state, associated state, and dominion formula in political usage.</p>"},
      {id:"economy",title:"Diamonds, agriculture, and the port",html:"<p>Diamonds, iron ore and other minerals, rice and other agriculture, coastal commerce, public employment, and port services form the economic base. Mineral licensing and smuggling create recurrent disputes among chiefs, companies, local communities, the territorial treasury, and Commonwealth security agencies.</p>"},
      {id:"society",title:"Krio, Protectorate, and national politics",html:"<p>Krio education, churches, professions, and Freetown civic institutions remain influential without constituting the national majority. Protectorate chiefs, farmers, traders, mission schools, labor organizations, and rising provincial politicians demand comparable access to public employment and revenue.</p><p>National politics therefore centers upon integration without erasing the legal and cultural distinction between coast and interior.</p>"},
      {id:"refugee",title:"Refugee and relief administration",html:"<p>Freetown becomes a principal node of the <a href='commonwealth-african-reserve-system.html'>Commonwealth African Reserve System</a>. Warehouses, hospitals, registration personnel, shipping, and inland transport support emergencies well beyond Sierra Leone.</p><p>Relief capacity also increases the military and intelligence value of the port.</p>"},
      {id:"accra",title:"After the loss of Takoradi",html:"<p>Ghana's 1963 alignment with Germany places an Einheitspakt-supported state east of Sierra Leone and breaks Britain's Atlantic West African chain. Freetown receives additional naval, signals, air, and stockpile investment as the nearest reliably British port.</p><p>The Accra Disaster simultaneously discredits complete strategic separation.</p>"},
      {id:"mature",title:"Mature Commonwealth role",html:"<p>By 1985 Sierra Leone has substantial domestic government and a recognizable national political life while remaining inside the Crown and Commonwealth defense order. Its leaders use Freetown's indispensability to demand investment and consultation.</p><p>The central controversy is whether strategic importance protects the state or prevents it from choosing a different alignment.</p>"}
    ],
    related:[...westAfricanCrownStatesRelated,{href:"gambia.html",kicker:"Western Atlantic partner",label:"The Gambia"},{href:"ghana.html",kicker:"Former eastern partner",label:"Republic of Ghana"},{href:"commonwealth-african-reserve-system.html",kicker:"Freetown relief network",label:"Commonwealth African Reserve System"}],
    facts:[["Capital","Freetown"],["Status","Self-governing Crown state"],["Government","Territorial ministry and legislature"],["Citizenship","Sierra Leonean territorial citizenship"],["Official language","English"],["Strategic asset","Freetown harbor"],["External defense","British Commonwealth"],["Principal exports","Minerals and agricultural produce"],["Status by 1985","Commonwealth-associated"]]
  }),

  "gambia": westAfricanCrownStateArticle({
    title:"The Gambia",
    eyebrow:"Defended Crown protectorate · Gambia River",
    infoboxTitle:"The Gambia",
    lead:"The Gambia is a narrow, self-governing British protectorate and Crown-associated river corridor extending inland from Bathurst along the Gambia River. Nearly surrounded by German-controlled Senegal, it cannot defend itself without maritime and air support. Britain retains it because the river, harbor, communications sites, and Union flag provide a continuous Atlantic position between Sierra Leone and the northern approaches to the Cape route.",
    canon:"Gambia's status as a defended protectorate and river corridor, near-enclosure by German Senegal, dependence upon Royal Navy and air support, expanded local government, Atlantic and relief functions, and continued Commonwealth association are established. Its formal post-1957 constitution, flag, official use of Bathurst or Banjul, head of government, elections, citizenship statute, garrison, economy after 1985, and final sovereignty status remain open. The colony-and-protectorate distinction and river geography follow historical Gambia.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Gambia_Colony_and_Protectorate",label:"Wikipedia — historical Gambia Colony and Protectorate background"},{href:"https://en.wikipedia.org/wiki/The_Gambia",label:"Wikipedia — geographic background"}],
    sections:[
      {id:"geography",title:"A state made by a river",html:"<p>The territory follows both banks of the Gambia River from the Atlantic far into the interior. The old Colony around Bathurst and the wider Protectorate form a thin corridor inside German-controlled Senegal.</p><p>River transport connects agricultural districts to the coast, while the same geometry leaves roads, settlements, and communications exposed to blockade or frontier pressure.</p>"},
      {id:"inheritance",title:"Colony and Protectorate",html:"<p>British administration historically distinguished the coastal colony from the inland protectorate. Elected institutions, municipal government, chiefs, district authorities, traders, farmers, and river communities entered the postwar era with unequal access to education, courts, and political representation.</p>"},
      {id:"settlement",title:"Post-Accra constitutional settlement",html:"<p>The Gambia gains an expanded elected legislature, local cabinet, citizenship, land and agricultural powers, and control of ordinary policing. Britain retains defense, foreign relations, strategic communications, river access, and emergency reinforcement.</p><p>Political language alternates among protectorate, Crown state, and associated territory because the exact final form remains unsettled.</p>"},
      {id:"fortress",title:"The defended river corridor",html:"<p>Bathurst's harbor, coastal air facilities, signals stations, river patrols, and guarded depots make the territory a small frontier fortress. It is militarily incapable of surviving a determined attack alone, but costly enough to seize that German pressure risks a wider British response.</p>"},
      {id:"economy",title:"Groundnuts, river trade, and dependence",html:"<p>Groundnuts and related agricultural exports dominate much rural commerce, supported by river transport, trading houses, markets, and port services. Food imports, shipping, British finance, and Commonwealth procurement make the economy vulnerable to route disruption and administered prices.</p>"},
      {id:"senegal",title:"The German Senegal frontier",html:"<p>German authority surrounds most land approaches. Smuggling, family movement, livestock, labor migration, political refugees, and intelligence traffic cross a boundary that cannot be sealed without damaging Gambian life.</p><p>Britain treats the territory as proof that the <a href='no-empty-flagstaff-doctrine.html'>No Empty Flagstaff Doctrine</a> applies even to places incapable of conventional strategic independence.</p>"},
      {id:"society",title:"Government and society",html:"<p>English is the administrative language, while Mandinka, Fula, Wolof, Jola, Serer, and other languages organize ordinary life. Islam is the majority faith, with Christian and other communities concentrated in particular towns and networks.</p><p>Local politics balances Bathurst professionals and traders, protectorate chiefs, farmers, religious authorities, and younger nationalists.</p>"},
      {id:"mature",title:"Mature status",html:"<p>After Ghana's defection, Britain strengthens rather than abandons the corridor. The Gambia remains domestically self-governing but strategically dependent, receiving protection and infrastructure in exchange for bases, communications, and a foreign-policy ceiling.</p><p>Whether the territory eventually becomes a sovereign Commonwealth realm, an associated republic, or a permanent Crown protectorate remains open.</p>"}
    ],
    related:[...westAfricanCrownStatesRelated,{href:"sierra-leone.html",kicker:"Nearest British Atlantic hub",label:"Sierra Leone"},{href:"commonwealth-african-reserve-system.html",kicker:"Relief connection",label:"Commonwealth African Reserve System"},{href:"no-empty-flagstaff-doctrine.html",kicker:"Strategic justification",label:"No Empty Flagstaff Doctrine"}],
    facts:[["Capital","Bathurst; later name open"],["Status","Self-governing Crown protectorate"],["Government","Local cabinet and legislature"],["Citizenship","Gambian territorial citizenship"],["Administrative language","English"],["Geography","Gambia River corridor"],["Land neighbor","German Senegal"],["External defense","United Kingdom"],["Principal export","Groundnuts"]]
  }),

  "ghana": westAfricanCrownStateArticle({
    title:"Republic of Ghana",
    eyebrow:"Sovereign republic · German-associated West Africa",
    infoboxTitle:"Ghana",
    flag:westAfricanGhanaFlag,
    lead:"Ghana is a sovereign West African republic and the principal black African client state of the Einheitspakt. Created from the Gold Coast Associated Crown State on 6 March 1963, it lost its first constitutional government in the Accra Disaster within seven months. The National Liberation Directorate preserved Ghanaian legal sovereignty while the Accra–Lomé Treaty tied military procurement, credit, communications, cocoa exports, and Takoradi development to Germany.",
    canon:"The Gold Coast composite territory, 1957 Associated Crown State phase, full independence on 6 March 1963, republican status, Accra Disaster, National Liberation Directorate, Accra–Lomé Treaty, German arms, credit, communications and Takoradi access, cocoa dependence, and formal Ghanaian sovereignty are established. The flag at independence is established; heads of state, ministers, exact constitution, regional boundaries, elections, later coups, population, armed-force size, and domestic development after 1963 remain open. Pre-divergence Gold Coast geography and economic history follow the historical record.",
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Gold_Coast_(British_colony)",label:"Wikipedia — historical Gold Coast background"},{href:"https://en.wikipedia.org/wiki/Ghana",label:"Wikipedia — geographic and social background"}],
    sections:[
      {id:"gold-coast",title:"The Gold Coast inheritance",html:"<p>The state joins the coastal Gold Coast colony, Ashanti, the Northern Territories, and British Togoland. Accra is the capital, Kumasi the principal Ashanti center, Takoradi the strategic port, and northern regions a distinct political and economic geography.</p><p>Cocoa, gold, timber, minerals, railways, ports, schools, missions, chiefly institutions, and a comparatively experienced civil service make the territory Britain's strongest initial candidate for self-government.</p>"},
      {id:"associated",title:"Associated Crown State, 1957–1963",html:"<p>The Gold Coast becomes the public model of the <a href='accra-compact.html'>Accra Compact</a>. An African ministry and legislature control domestic policy, citizenship, courts, land, education, agriculture, taxation, and ordinary police while Britain retains defense, foreign alignment, Takoradi access, and emergency powers.</p><p>Nationalists accept the arrangement as government but reject it as a final definition of sovereignty.</p>"},
      {id:"economy",title:"Cocoa, minerals, and regional distribution",html:"<p>African cocoa farming and marketing, gold and other mining, timber, railways, urban commerce, and Takoradi shipping form the economic core. Disputes over producer prices, export revenue, concessions, regional investment, and central control connect economic policy to Ashanti and northern constitutional claims.</p>"},
      {id:"independence",title:"Ghana Independence Act",html:"<p>The <a href='ghana-independence-act.html'>Ghana Independence Act</a> ends Crown sovereignty, reserve powers, British external-defense control, and most permanent base rights on 6 March 1963. Ghana becomes a republic rather than a realm.</p><p>The absence of a permanent defense treaty is intended to prove that association was voluntary and that the most institutionally developed African state could stand alone.</p>"},
      {id:"disaster",title:"The Accra Disaster",html:"<p>Within seven months centralists, Ashanti federalists, northern regionalists, refugee groups, labor radicals, cocoa interests, dissident officers, and traditional authorities turn political crisis into roughly one hundred days of war. The <a href='accra-disaster.html'>Accra Disaster</a> ends with the constitutional government evacuated and the National Liberation Directorate in Accra.</p>"},
      {id:"treaty",title:"Accra–Lomé alignment",html:"<p>The <a href='accra-lome-treaty.html'>Accra–Lomé Treaty</a> exchanges German recognition, arms, advisers, credit, guaranteed cocoa purchases, communications, and infrastructure for influence over procurement, encryption, exports, intelligence, and Takoradi.</p><p>Ghana is not annexed and does not become a Reichskommissariat. Its dependence is contractual, financial, military, and technical.</p>"},
      {id:"government",title:"Revolutionary government and sovereignty",html:"<p>The Directorate presents itself as a Ghanaian national coalition that used German support to defeat a failed centralist order. National symbols, citizenship, courts, administration, and armed forces remain Ghanaian.</p><p>Opponents argue that a government dependent on one foreign system for weapons, credit, and communications possesses formal independence without strategic choice.</p>"},
      {id:"international",title:"International position",html:"<p>Ghana gives Germany an Atlantic political foothold and divides Britain's West African chain between Sierra Leone and Nigeria. Berlin presents the republic as evidence that it can ally with an African nation without direct racial-colonial rule.</p><p>For the Commonwealth, Ghana is the warning behind the <a href='accra-clause.html'>Accra Clause</a>; for African nationalists, it is proof that withdrawal can open alternatives to British protection, however unequal those alternatives become.</p>"}
    ],
    related:[{href:"ghana-accra.html",kicker:"Sequence overview",label:"Ghana and the Accra Disaster"},{href:"ghana-independence-act.html",kicker:"Sovereignty transfer",label:"Ghana Independence Act"},{href:"accra-disaster.html",kicker:"Founding civil conflict",label:"Accra Disaster"},{href:"accra-lome-treaty.html",kicker:"German alignment",label:"Accra–Lomé Treaty"},{href:"british-africa.html",kicker:"Former regional system",label:"British Africa"},{href:"mittelafrika.html",kicker:"Principal external patron",label:"Mittelafrika"}],
    facts:[["Capital","Accra"],["Government","Revolutionary republic; exact constitution open"],["Independence","6 March 1963"],["Predecessor","Gold Coast Associated Crown State"],["Ruling authority after 1963","National Liberation Directorate"],["Principal port","Takoradi"],["Principal export","Cocoa"],["Strategic alignment","Einheitspakt-associated"],["Former defense power","United Kingdom"]]
  })
});

function appendWestAfricanCrownStates(id,key,items){
  const article=window.deepArticles[id];
  if(!article)return;
  article[key]=article[key]||[];
  for(const item of items){
    if(!article[key].some(existing=>(existing.id&&existing.id===item.id)||(existing.href&&existing.href===item.href))) article[key].push(item);
  }
}

appendWestAfricanCrownStates("accra-compact","related",[
  {href:"nigeria.html",kicker:"Crown federation",label:"Nigeria"},
  {href:"southern-cameroons.html",kicker:"Frontier territory",label:"Southern Cameroons"},
  {href:"sierra-leone.html",kicker:"Atlantic Crown state",label:"Sierra Leone"},
  {href:"gambia.html",kicker:"Defended river corridor",label:"The Gambia"},
  {href:"ghana.html",kicker:"First model and later defector",label:"Ghana"}
]);
appendWestAfricanCrownStates("associated-crown-state","related",[
  {href:"nigeria.html",kicker:"Federal application",label:"Nigeria"},
  {href:"sierra-leone.html",kicker:"Atlantic application",label:"Sierra Leone"},
  {href:"gambia.html",kicker:"Protectorate application",label:"The Gambia"}
]);
appendWestAfricanCrownStates("crown-frontier-territory","related",[
  {href:"southern-cameroons.html",kicker:"Principal territorial application",label:"Southern Cameroons"}
]);
for(const id of ["ghana-accra","ghana-independence-act","accra-disaster","accra-lome-treaty"]){
  appendWestAfricanCrownStates(id,"related",[{href:"ghana.html",kicker:"Country history",label:"Republic of Ghana"}]);
}
appendWestAfricanCrownStates("british-africa","sections",[
  {id:"west-african-states",title:"West African constitutional paths",html:"<p><a href='nigeria.html'>Nigeria</a> remains a Crown federation. <a href='southern-cameroons.html'>Southern Cameroons</a> becomes a fortified frontier territory, while <a href='sierra-leone.html'>Sierra Leone</a> develops around Freetown's Atlantic role and <a href='gambia.html'>the Gambia</a> remains a defended river corridor. The Gold Coast alone becomes fully sovereign <a href='ghana.html'>Ghana</a> before entering German alignment.</p>"}
]);
appendWestAfricanCrownStates("british-africa","related",[
  {href:"nigeria.html",kicker:"Largest Crown federation",label:"Nigeria"},
  {href:"southern-cameroons.html",kicker:"German frontier",label:"Southern Cameroons"},
  {href:"sierra-leone.html",kicker:"Atlantic hub",label:"Sierra Leone"},
  {href:"gambia.html",kicker:"River corridor",label:"The Gambia"},
  {href:"ghana.html",kicker:"Sovereign German client",label:"Ghana"}
]);
