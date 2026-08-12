window.deepArticles = window.deepArticles || {};

const capeRoutePortSources = [
  {href:"../transcript.md",label:"Master Transcript — Cape route, South African leverage, West African ports, and Commonwealth wars"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British defeat, Siege Commonwealth, African system, and route dependence"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — post-Lisbon British reconstruction and later route operations"},
  {href:"https://slpha.sl/",label:"Sierra Leone Ports and Harbours Authority — Port of Freetown and Queen Elizabeth II Quay"},
  {href:"https://www.westerncape.gov.za/cas/files/wcg-blob-files?file=2025-01%2Fjf25-cape-librarian_0.pdf&type=file",label:"Western Cape Archives — history of Simon's Town as a naval base"},
  {href:"https://www.transnetnationalportsauthority.net/OurPorts/Cape%20Town/Pages/Services.aspx",label:"Transnet National Ports Authority — Cape Town repair, fuel, and cargo facilities"},
  {href:"https://www.transnetnationalportsauthority.net/OurPorts/Durban/Pages/Services.aspx",label:"Transnet National Ports Authority — Durban port services"}
];

const capeRoutePortCards = [
  {href:"freetown.html",kicker:"Atlantic convoy and relief port",label:"Freetown"},
  {href:"simons-town-naval-base.html",kicker:"Fleet base and dockyard",label:"Simon's Town Naval Base"},
  {href:"cape-town.html",kicker:"Western Cape commercial port",label:"Cape Town"},
  {href:"durban.html",kicker:"Indian Ocean port and logistics center",label:"Durban"},
  {href:"south-african-cape-route-complex.html",kicker:"Southern maritime hinge",label:"South African Cape Route Complex"}
];

const capeRoutePortDiagram = {
  src:"assets/diagrams/cape-route-port-system.svg",
  alt:"Diagram of the Cape Route port system from Freetown through Cape Town and Simon's Town to Durban and the Indian Ocean",
  caption:"Freetown receives the southbound Atlantic system; Cape Town and Simon's Town repair, fuel, and defend it; Durban turns traffic east toward the Indian Ocean."
};

const capeRoutePortArticle = config => ({
  category:"Cities",
  eyebrow:"Cape route · Siege Commonwealth maritime system",
  landscape:capeRoutePortDiagram,
  ...config,
  related:[...(config.related || []),...capeRoutePortCards.filter(card=>card.href!==config.slug+".html" && !(config.related || []).some(existing=>existing.href===card.href))],
  sources:capeRoutePortSources,
  categories:config.categories || ["British Commonwealth","Cape route","African ports"]
});

Object.assign(window.deepArticles,{
  "freetown":capeRoutePortArticle({
    slug:"freetown",title:"Freetown",infoboxKicker:"Capital and Atlantic port",infoboxTitle:"Freetown",
    lead:"Freetown is the capital of Sierra Leone and the principal Commonwealth naval, convoy, hospital, communications, and relief port on the Atlantic coast of West Africa. Its deep natural harbor makes it the first major protected receiving point on the southbound Cape route. The city's strategic importance increased after Britain lost its Mediterranean chain and again after Ghana's alignment with Germany removed Takoradi from the Commonwealth system.",
    canon:"Freetown's role as Sierra Leone's capital, natural harbor, first major Commonwealth port on the Cape route, naval and convoy functions, hospitals, refugee processing, relief administration, and reinforcement after Ghana's 1963 realignment are established. Population, municipal boundaries, dockyard program, garrison, airfield organization, base treaty, port authority, labor settlement, and post-1985 expansion remain open.",
    sections:[
      {id:"geography",title:"Geography and harbor",html:"<p>Freetown occupies the mountainous Sierra Leone peninsula beside one of the principal natural harbors of the West African coast. Anchorage, sheltered water, access to the Atlantic shipping lanes, and inland road connections give the city strategic value out of proportion to the size of its national economy.</p>"},
      {id:"inheritance",title:"Wartime inheritance",html:"<p>The port entered the postwar order with British naval, convoy, fuel, hospital, signals, and repair experience. That infrastructure survived the peace because Lisbon removed Gibraltar and the Mediterranean bases that had once allowed Britain to divide its maritime planning between two routes.</p>"},
      {id:"cape-route",title:"Cape route station",html:"<p>Southbound merchantmen, tankers, troopships, auxiliaries, and escorts use Freetown for assembly, orders, bunkering, repairs, medical transfer, and redistribution before the longer passage to the Cape. Northbound traffic reverses the process toward Britain and Canada.</p>"},
      {id:"naval",title:"Naval and air functions",html:"<p>Harbor defense, patrol aviation, signals, minesweeping, escort support, rescue, and anti-submarine work make Freetown a route-defense station rather than merely a commercial port. Exact units and basing arrangements remain open.</p>"},
      {id:"relief",title:"Relief and refugee administration",html:"<p>Warehouses, hospitals, registration offices, shipping, and inland transport make Freetown a major node of the <a href='commonwealth-african-reserve-system.html'>Commonwealth African Reserve System</a>. Military and humanitarian traffic share quays, fuel, communications, and planning personnel.</p>"},
      {id:"ghana",title:"After Ghana's realignment",html:"<p>Ghana's 1963 alignment with Germany removes Takoradi from reliable Commonwealth use and breaks the British West African coastal chain. Freetown receives additional stockpiles, naval support, air and signals investment, and political attention as the nearest secure substitute.</p>"},
      {id:"city",title:"City and society",html:"<p>The Krio community, Protectorate migrants, dockworkers, civil servants, soldiers, merchants, churches, and refugees meet in a city whose national and imperial roles overlap. Strategic expenditure creates employment and housing pressure while giving the capital disproportionate influence over Sierra Leone's interior.</p>"},
      {id:"politics",title:"Political significance",html:"<p>Sierra Leonean governments use the harbor's indispensability to seek investment, consultation, and constitutional autonomy. Critics argue that the same value limits freedom to leave the Commonwealth defense system. Freetown therefore protects the Crown state while binding it more tightly to British strategy.</p>"}
    ],
    related:[{href:"sierra-leone.html",kicker:"National setting",label:"Sierra Leone"},{href:"cape-route.html",kicker:"Parent sea lane",label:"Cape Route"},{href:"commonwealth-african-reserve-system.html",kicker:"Relief network",label:"African Reserve System"}],
    facts:[["Country","Sierra Leone"],["Status","National capital and Commonwealth route port"],["Waterway","Atlantic Ocean"],["Principal functions","Convoy, naval support, hospitals, signals, and relief"],["Route position","First major West African Cape-route harbor"],["Strategic expansion","After Ghana's 1963 realignment"],["Municipal and port population","Open"],["Exact base establishment","Open"]]
  }),

  "simons-town-naval-base":capeRoutePortArticle({
    slug:"simons-town-naval-base",title:"Simon's Town Naval Base",category:"Military",eyebrow:"Naval base · False Bay · Cape route",infoboxKicker:"South African fleet base",infoboxTitle:"Simon's Town Naval Base",
    lead:"Simon's Town Naval Base is the principal fleet base, dockyard, repair, training, and command installation on South Africa's False Bay coast. South Africa retains sovereignty and operates the base, while Britain and other Commonwealth navies possess negotiated access for route defense. After 1947, Simon's Town became the most politically sensitive fixed facility in the Cape system because British maritime survival depended upon a government whose racial policy London increasingly refused to confront.",
    canon:"Simon's Town's South African sovereignty, naval-base and dockyard functions, Commonwealth access, importance to Cape-route escort and repair, anti-submarine role, training and stores, and political connection to British restraint toward apartheid are established. The controlling treaty, signature date, lease or access areas, command division, dockyard ownership, British permanent strength, nuclear-ship rules, and exact wartime authority remain open.",
    sections:[
      {id:"site",title:"Site and harbor",html:"<p>Simon's Town stands on False Bay south of Cape Town. Its sheltered anchorage, dockyard, workshops, magazines, training establishments, and access to the sea approaches make it the fleet base rather than the principal commercial port of the western Cape.</p>"},
      {id:"inheritance",title:"Naval inheritance",html:"<p>The base developed under Dutch and British rule before passing into the South African naval system. Wartime surveillance, repair, and anti-submarine work provided the institutional foundation for its later role. The altered post-1947 settlement preserves Commonwealth access without restoring British sovereignty.</p>"},
      {id:"agreement",title:"Commonwealth access settlement",html:"<p>London and Pretoria negotiate guaranteed entry, repair, fuel, stores, communications, training, and operational consultation. The arrangement resembles the historical Simonstown bargain but belongs to the setting's more severe Cape-route dependency. Its formal title and exact clauses remain open.</p>"},
      {id:"dockyard",title:"Dockyard and fleet support",html:"<p>Docking, hull and machinery repair, electrical work, weapons support, refrigeration, stores, tugs, salvage, medical services, and personnel transfer allow escorts and auxiliaries to remain on station far from British yards. South African industrial labor and British technical standards coexist inside the support system.</p>"},
      {id:"operations",title:"Route-defense operations",html:"<p>The base supports anti-submarine patrols, convoy escort, maritime reconnaissance, mine warfare, hydrography, rescue, and control of the Cape approaches. It works with <a href='cape-town.html'>Cape Town's commercial port</a> and the eastern system centered on <a href='durban.html'>Durban</a>.</p>"},
      {id:"training",title:"Training and command",html:"<p>Fleet schools, shore training, publications, armament support, and staff work make Simon's Town an institutional center as well as a harbor. South African command remains primary; Commonwealth planning governs operations that cross national and theater boundaries.</p>"},
      {id:"politics",title:"Sovereignty and apartheid",html:"<p>Pretoria treats the base as proof that South Africa is an indispensable sovereign partner rather than a subordinate dominion. British governments criticize apartheid unevenly while protecting access. Parliamentary efforts to condition naval cooperation repeatedly collide with route-defense warnings.</p>"},
      {id:"later",title:"Later operations",html:"<p>Simon's Town supports the Kuwait War, Atlantic patrol, and the Falklands–Malvinas campaign through repair, stores, tanker support, and convoy management. By 1985 it is both South Africa's national fleet base and the fixed southern workshop of the wider Commonwealth maritime system.</p>"}
    ],
    related:[{href:"south-africa.html",kicker:"Sovereign state",label:"Union of South Africa"},{href:"royal-navy-postwar.html",kicker:"Principal visiting navy",label:"Postwar Royal Navy"},{href:"commonwealth-route-defense-system.html",kicker:"Strategic system",label:"Route-Defense System"}],
    facts:[["Location","False Bay, South Africa"],["Sovereign operator","Union of South Africa"],["Commonwealth status","Negotiated fleet access and route-support base"],["Principal functions","Dockyard, repair, training, stores, and command"],["Operational focus","Cape approaches and anti-submarine warfare"],["British sovereignty","None"],["Access instrument","Open"],["Permanent force and dockyard ownership","Open"]]
  }),

  "cape-town":capeRoutePortArticle({
    slug:"cape-town",title:"Cape Town",infoboxKicker:"Legislative capital and commercial port",infoboxTitle:"Cape Town",
    lead:"Cape Town is South Africa's legislative capital and the principal commercial, repair, refrigerated-cargo, and administrative port on the western side of the Cape route. Merchant shipping arriving from the Atlantic is fueled, repaired, victualled, reorganized, or transferred through the city's docks before turning east. Cape Town works with nearby Simon's Town, which provides the fleet base and dockyard functions that a commercial harbor alone cannot supply.",
    canon:"Cape Town's legislative-capital status, western Cape-route position, merchant and refrigerated-cargo role, ship repair, fuel, rail and air connections, relationship with Simon's Town, and strategic importance to Britain are established. Population, municipal development, terminal dates, throughput, dockyard investment, military districts, housing, labor law, and post-1985 expansion remain open.",
    sections:[
      {id:"setting",title:"Urban and political setting",html:"<p>Cape Town combines a national parliamentary function with provincial, municipal, commercial, and port government. The proximity of cabinet politics, shipping companies, banks, rail offices, unions, and military planners makes route policy a visible part of city life.</p>"},
      {id:"port",title:"Commercial port",html:"<p>The harbor handles containers, breakbulk, bulk cargo, fuel, fishing fleets, passenger traffic, and naval auxiliaries. Duncan Dock, repair facilities, cold storage, and rail-connected yards allow ships to exchange cargo and complete work that cannot wait for a British port.</p>"},
      {id:"repair",title:"Repair and bunkering",html:"<p>Dry docks, repair quays, engineering firms, chandlers, refrigeration specialists, and bunkering points make Cape Town a maintenance center for the merchant fleet. Major combatant work is coordinated with <a href='simons-town-naval-base.html'>Simon's Town Naval Base</a>.</p>"},
      {id:"cold-chain",title:"Food and the cold chain",html:"<p>Refrigerated meat, fruit, dairy products, and other perishables enter the northbound Commonwealth supply system through cold stores and specialized shipping. The route turns South African agriculture and refrigeration capacity into a British food-security asset.</p>"},
      {id:"connections",title:"Rail, road, and air connections",html:"<p>Railways and roads join the port to farms, mines, industry, military establishments, and inland depots. Airfields provide patrol, transport, courier, and personnel movement. Congestion or industrial action at one link can delay ships across the entire route.</p>"},
      {id:"shipping",title:"Shipping administration",html:"<p>Union-Castle, Commonwealth carriers, insurers, brokers, port agents, customs officials, and route planners coordinate cargo and sailing priorities. Commercial management remains distinct from military command even when war plans determine which ships receive fuel, dock time, or escort.</p>"},
      {id:"society",title:"Labor and segregation",html:"<p>The port depends upon a racially divided workforce of dockers, railwaymen, artisans, clerks, sailors, and service workers. Apartheid governs residence, employment, movement, and political representation. Strategic investment increases the value of labor without removing the legal hierarchy around it.</p>"},
      {id:"strategic",title:"Strategic importance",html:"<p>Cape Town is the commercial half of the southern hinge. Its loss or denial would force merchant traffic onto smaller ports, reduce repair capacity, and separate the Atlantic route from South African food and industry. That exposure gives Pretoria leverage in every British political dispute.</p>"}
    ],
    related:[{href:"south-africa.html",kicker:"National setting",label:"Union of South Africa"},{href:"union-castle-line.html",kicker:"Principal route carrier",label:"Union-Castle Line"},{href:"cape-route.html",kicker:"Parent sea lane",label:"Cape Route"}],
    facts:[["Country","Union of South Africa"],["National role","Legislative capital"],["Ocean frontage","South Atlantic"],["Route role","Western commercial and repair hinge"],["Principal cargoes","Food, containers, fuel, bulk and general cargo"],["Naval counterpart","Simon's Town"],["Population and throughput","Open"],["Major postwar terminal dates","Open"]]
  }),

  "durban":capeRoutePortArticle({
    slug:"durban",title:"Durban",infoboxKicker:"Indian Ocean port and logistics center",infoboxTitle:"Durban",
    lead:"Durban is South Africa's principal Indian Ocean port and the eastern hinge of the Cape route. Traffic rounded from the Atlantic system enters Durban for cargo exchange, fuel, repairs, rail distribution, naval support, and onward routing toward East Africa, Aden, the Gulf, Ceylon, India, Australia, and New Zealand. Its harbor and industrial hinterland make the city central to both South African commerce and Commonwealth war planning.",
    canon:"Durban's Indian Ocean position, eastern Cape-route role, large commercial harbor, rail and industrial connections, naval and air support, onward links to the Indian Ocean chain, and strategic value to Commonwealth operations are established. Population, port throughput, terminals, naval command, airfields, garrison, labor regime, container chronology, and post-1985 expansion remain open.",
    sections:[
      {id:"geography",title:"Geography",html:"<p>Durban stands on South Africa's east coast facing the western Indian Ocean. The sheltered harbor and routes inland toward the industrial and mineral economy allow the city to collect cargo from a wide hinterland while serving ships that have rounded the Cape.</p>"},
      {id:"harbor",title:"Commercial harbor",html:"<p>General cargo, containers, fuel, coal, vehicles, stores, food, and military shipments pass through specialized berths and warehouses. Tugs, pilots, chandlers, bunkering, and repair services keep the port operating as a through station rather than a final destination.</p>"},
      {id:"eastward",title:"Eastern route junction",html:"<p>From Durban, the principal line runs through East African and island stations toward Ceylon and Australia. Northern branches serve Aden, the Gulf, Karachi, and Bombay. Route planners can shift cargo among these branches when war, weather, politics, or port congestion closes one connection.</p>"},
      {id:"rail",title:"Industrial and rail hinterland",html:"<p>Rail and road systems connect Durban with South African manufacturing, mines, depots, farms, and military establishments. Inland production gives the port replacement equipment and export cargo; the harbor gives the interior access to Commonwealth shipping and imported machinery.</p>"},
      {id:"naval",title:"Naval and air support",html:"<p>Durban supports patrol craft, auxiliaries, maritime aviation, rescue, convoy assembly, stores, and repair. It complements rather than replaces Simon's Town: the eastern port sustains Indian Ocean operations while the False Bay base remains the principal fleet dockyard.</p>"},
      {id:"war",title:"Operational use",html:"<p>The port supports Bastion India, Gulf reinforcement, the Kuwait War, East African security, and the Falklands supply system. Long-distance operations rely on commercial berths and railway capacity as much as on explicitly military installations.</p>"},
      {id:"society",title:"City, labor, and segregation",html:"<p>African, Indian, coloured, and white communities participate unequally in port, rail, trade, manufacturing, and municipal life. Apartheid controls residence and political power while depending upon the labor and commercial networks it restricts. The port makes those contradictions internationally visible.</p>"},
      {id:"strategic",title:"Strategic significance",html:"<p>Durban completes the turn from Atlantic survival to Indian Ocean reach. If denied, Commonwealth traffic must use smaller eastern ports or Portuguese Mozambique, increasing sailing time and political exposure. Pretoria consequently treats Durban as both national infrastructure and bargaining power.</p>"}
    ],
    related:[{href:"commonwealth-indian-ocean-chain.html",kicker:"Eastern continuation",label:"Commonwealth Indian Ocean Chain"},{href:"bastion-india.html",kicker:"Indian Ocean doctrine",label:"Bastion India"},{href:"south-africa.html",kicker:"National setting",label:"Union of South Africa"}],
    facts:[["Country","Union of South Africa"],["Ocean frontage","Indian Ocean"],["Route role","Eastern Cape-route hinge"],["Principal functions","Commercial cargo, fuel, rail transfer, repair, and naval support"],["Eastern connections","East Africa, Gulf, Ceylon, India, Australia, and New Zealand"],["Principal naval counterpart","Simon's Town"],["Population and throughput","Open"],["Exact military establishment","Open"]]
  }),

  "south-african-cape-route-complex":capeRoutePortArticle({
    slug:"south-african-cape-route-complex",title:"South African Cape Route Complex",category:"Infrastructure",eyebrow:"Maritime infrastructure · southern African hinge",infoboxKicker:"Distributed port and support system",infoboxTitle:"South African Cape Route Complex",
    lead:"The South African Cape Route Complex is the distributed port, dockyard, rail, airfield, fuel, cold-storage, communications, and industrial system centered on Cape Town, Simon's Town, and Durban. It turns the Cape route from a line on a chart into a sustainable maritime artery. South Africa owns and operates the principal infrastructure; Britain depends upon negotiated access and Commonwealth coordination rather than direct imperial command.",
    canon:"The three-port division of labor, South African ownership, British and Commonwealth access, merchant and naval functions, food and minerals, rail and air connections, route-defense role, and resulting South African political leverage are established. The system's official name, governing boards, treaties, command boundaries, throughput, stockpiles, wartime requisition law, and investment schedules remain open; the article title is descriptive.",
    sections:[
      {id:"formation",title:"Formation after Lisbon",html:"<p>Britain's loss of Gibraltar, Malta, Cyprus, Egypt, and secure Suez access makes southern Africa the unavoidable hinge between Atlantic and Indian Ocean strategy. Existing South African ports and wartime institutions expand through negotiated Commonwealth programs rather than one new central authority.</p>"},
      {id:"division",title:"Division of labor",html:"<p><a href='cape-town.html'>Cape Town</a> handles western commercial traffic, repair, fuel, and refrigerated cargo. <a href='simons-town-naval-base.html'>Simon's Town</a> supplies the fleet base, dockyard, training, and naval command. <a href='durban.html'>Durban</a> handles the eastern commercial and military turn into the Indian Ocean.</p>"},
      {id:"inland",title:"Inland support system",html:"<p>Railways, roads, pipelines, power, workshops, mines, farms, cold stores, and inland depots connect the ports to South African resources and industry. The route's capacity therefore depends upon internal labor and infrastructure far beyond each harbor boundary.</p>"},
      {id:"shipping",title:"Merchant shipping",html:"<p>Tankers, reefers, bulk carriers, standard cargo ships, container vessels, troopships, and feeders require different berths and schedules. Planners distribute work among the ports to keep one breakdown, strike, accident, or attack from stopping the entire system.</p>"},
      {id:"defense",title:"Route defense",html:"<p>Escorts, patrol aircraft, minesweepers, rescue units, signals, intelligence, harbor defenses, and repair ships protect the approaches. The complex links Atlantic convoy organization with the <a href='commonwealth-indian-ocean-chain.html'>Commonwealth Indian Ocean Chain</a>.</p>"},
      {id:"emergency",title:"War and emergency use",html:"<p>The system supports Bastion India, Gulf operations, the Kuwait War, Atlantic reinforcement, and the Falklands campaign. Civilian terminals become military priorities under emergency schedules while remaining under South African law and management.</p>"},
      {id:"politics",title:"Political bargain",html:"<p>Pretoria guarantees access and capacity while London supplies orders, technology, finance, and international military weight. South Africa uses the route to resist British pressure over apartheid, South West Africa, and regional security. Britain repeatedly accepts dependence rather than risk rupture.</p>"},
      {id:"legacy",title:"Space-age legacy",html:"<p>By the 1990s the same geography supports telemetry, observatories, strategic materials, communications, and planetary logistics. Maritime dependence becomes one layer of a wider technical relationship, making political separation even more costly.</p>"}
    ],
    related:[{href:"cape-route.html",kicker:"Parent maritime artery",label:"Cape Route"},{href:"commonwealth-route-defense-system.html",kicker:"Defense doctrine",label:"Route-Defense System"},{href:"commonwealth-southern-africa-space-network.html",kicker:"Later technical layer",label:"Southern African Space Network"}],
    facts:[["Type","Distributed port, transport, and defense system"],["Principal nodes","Cape Town, Simon's Town, and Durban"],["Sovereign operator","Union of South Africa"],["External partner","British Commonwealth"],["Western function","Atlantic receiving and commercial support"],["Eastern function","Indian Ocean distribution"],["Military center","Simon's Town Naval Base"],["Official collective name and governing board","Open"]]
  })
});

const addCapeRoutePortLinks = (slug,links=capeRoutePortCards) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=[...(article.related || []),...links.filter(link=>!(article.related || []).some(existing=>existing.href===link.href))];
};

const capeRouteParent=window.deepArticles["cape-route"];
if(capeRouteParent){
  capeRouteParent.landscape=capeRoutePortDiagram;
  const chain=capeRouteParent.sections?.find(section=>section.id==="chain");
  if(chain) chain.html="<p><a href='freetown.html'>Freetown</a> receives the southbound Atlantic system. <a href='cape-town.html'>Cape Town</a> supplies commercial handling, repair, fuel, and cold storage; <a href='simons-town-naval-base.html'>Simon's Town</a> supplies the fleet base and dockyard. <a href='durban.html'>Durban</a> turns traffic east toward East Africa, Aden, Ceylon, India, Australia, and New Zealand.</p>";
  addCapeRoutePortLinks("cape-route");
}

const southAfricaPorts=window.deepArticles["south-africa"];
if(southAfricaPorts){
  southAfricaPorts.sections=[...(southAfricaPorts.sections || []),{id:"cape-route-ports",title:"Cape route port complex",html:"<p><a href='cape-town.html'>Cape Town</a>, <a href='simons-town-naval-base.html'>Simon's Town</a>, and <a href='durban.html'>Durban</a> form the <a href='south-african-cape-route-complex.html'>South African Cape Route Complex</a>. South African sovereignty over the ports and Britain's dependence upon access give Pretoria enduring leverage inside the Commonwealth.</p>"}];
  addCapeRoutePortLinks("south-africa",capeRoutePortCards.slice(1));
}

const sierraLeonePort=window.deepArticles["sierra-leone"];
if(sierraLeonePort){
  const freetown=sierraLeonePort.sections?.find(section=>section.id==="freetown");
  if(freetown) freetown.html=freetown.html.replace("Freetown's deep natural harbor","<a href='freetown.html'>Freetown's deep natural harbor</a>");
  addCapeRoutePortLinks("sierra-leone",[{href:"freetown.html",kicker:"Capital and route port",label:"Freetown"}]);
}

addCapeRoutePortLinks("commonwealth-route-defense-system");
addCapeRoutePortLinks("commonwealth-indian-ocean-chain",capeRoutePortCards.slice(1));
addCapeRoutePortLinks("royal-navy-postwar",[{href:"simons-town-naval-base.html",kicker:"Southern fleet support",label:"Simon's Town Naval Base"}]);
