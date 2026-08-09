window.deepArticles = window.deepArticles || {};

const materialStandardsSources = [
  {href:"../materialCultureReference%20-%20AltWWII.md",label:"Material Culture and Civilian Industry Reference"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — civilian technology and bloc systems"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — material-culture milestones"},
  {href:"../transcript.md",label:"Master Transcript — standards, broadcasting, retail, and telecommunications"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — P2-11 civilian standards register"}
];

const materialStandardsRelated = [
  {href:"material-culture.html",kicker:"Field overview",label:"Material Culture and Civilian Industry"},
  {href:"logistics-technical-standards.html",kicker:"Standards overview",label:"Civilian Logistics and Technical Standards"},
  {href:"microelectronic-household.html",kicker:"Domestic setting",label:"Microelectronic Household"},
  {href:"protected-consumer-commerce.html",kicker:"Cross-bloc trade",label:"Protected Consumer Commerce"}
];

const standardsArticle = config => ({
  category:"Material culture",
  eyebrow:"Civilian systems · divergent standards",
  infoboxKicker:"Comparative technical history",
  infoboxTitle:config.title,
  ...config,
  landscape:config.landscape,
  sources:materialStandardsSources,
  related:[...(config.related || []), ...materialStandardsRelated.filter(item => item.href !== `${config.slug}.html` && !(config.related || []).some(other => other.href === item.href))],
  categories:config.categories || ["Material culture","Technical standards","Civilian industry","Technology"],
  facts:config.facts || []
});

Object.assign(window.deepArticles, {
  "freight-container-standards": standardsArticle({
    slug:"freight-container-standards",title:"Freight container standards",eyebrow:"Ports, railways, and bloc alignment · late 1950s–1985",
    lead:"Freight container standards are the rival systems of boxes, lifting fittings, flatcars, port cranes, documents, and customs procedures that spread from late-1950s experiments into the infrastructure of bloc commerce. Containerization shortens handling and ship turnaround while making physical compatibility a durable instrument of political alignment.",
    canon:"Bloc-specific containerization, its late-1950s experimental phase, and incompatible lifting, railway, port, and documentation systems are established. Final dimensions, fitting patterns, formal standard names, agencies, and adoption totals remain open.",
    landscape:{src:"assets/freight-container-standards.svg",alt:"Diagram comparing five incompatible freight-container systems",caption:"Five freight systems connect internally while requiring transshipment or adapters at bloc boundaries."},
    sections:[
      {id:"before",title:"Freight before the container",html:"<p>Postwar cargo normally passes through sacks, barrels, cartons, drums, bundles, and wooden cases. Stevedores count and restow individual pieces as freight moves between truck, rail wagon, lighter, warehouse, and ship. Damage, pilferage, weather, paperwork, and repeated handling consume time at every transfer.</p><p>Pallets, forklifts, standardized crates, and warehouse marking improve this system before large containers become common. They remain the foundation beneath later mechanized ports.</p>"},
      {id:"experiments",title:"The late-1950s experiments",html:"<p>The first serious experiments appear independently inside the major blocs. Germany develops rail-road <em>Einheitsbehälter</em>; the Commonwealth tests standard freight boxes for the Cape route; Japan sizes coastal units to imperial ports and inter-island shipping; American firms link trucks, railways, and coastal vessels; Latin Mediterranean operators pursue smaller regional systems.</p><p>Each solves a real domestic route problem. None begins as a neutral world standard.</p>"},
      {id:"systems",title:"Five systems of containerization",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Initial priority</th><th>Characteristic network</th></tr></thead><tbody><tr><td>Einheitspakt</td><td>Rail-road discipline and mobilization</td><td>Continental railways, river ports, and certified industrial depots</td></tr><tr><td>Commonwealth</td><td>Cape-route shipping and dispersed interchange</td><td>British, African, Indian Ocean, Australasian, and Canadian ports</td></tr><tr><td>GEACPS</td><td>Coastal and inter-island circulation</td><td>Japanese metropolitan ports and hierarchical imperial feeder routes</td></tr><tr><td>American Hemisphere</td><td>Truck-rail and coastal commercial transfer</td><td>Large private carriers, railroads, highways, and hemispheric ports</td></tr><tr><td>Latin Bloc</td><td>Mediterranean routes and mixed national fleets</td><td>Smaller boxes, gateways, and negotiated national compatibility</td></tr></tbody></table></div>"},
      {id:"interfaces",title:"The incompatible interface",html:"<p>Boxes that appear similar can differ in length, height, corner fittings, door clearance, floor strength, lifting points, railway loading gauge, and permissible mass. Cranes use different spreaders; flatcars and chassis accept different locks; customs forms and numbering conventions disagree.</p><p>Boundary ports therefore maintain adapter gear, break-bulk sheds, or parallel terminals. A missing fitting can delay a shipment as effectively as a tariff.</p>"},
      {id:"ports",title:"Ports, warehouses, and customs",html:"<p>Containerization rewards deep-water terminals, paved stacking yards, reliable cranes, scheduled trains, and disciplined documentation. Older waterfront labor declines where capital-intensive terminals expand, while crane operators, dispatchers, mechanics, inspectors, and clerks gain importance.</p><p>Sealed boxes reduce casual loss but shift control toward manifests, numbered seals, trusted shippers, and inspection technology. Smuggling becomes less visible and more dependent on documentary access.</p>"},
      {id:"mobilization",title:"Commercial efficiency and mobilization",html:"<p>The same box that accelerates consumer imports can move vehicle parts, field hospitals, ammunition components, and engineering stores. Military planners favor container families that fit national railways, depots, ships, and requisitioned trucks.</p><p>Standardization consequently receives public investment beyond its immediate commercial return. Ports become measured strategic capacity.</p>"},
      {id:"alignment",title:"Standards as alignment",html:"<p>A smaller state choosing cranes, rolling stock, chassis, customs software, and training for one container family incurs high costs if it later changes systems. Technical assistance often arrives as a complete package of equipment, credit, advisers, and route guarantees.</p><p>Formal neutrality can coexist with material dependence upon one bloc's ports and freight documentation.</p>"},
      {id:"1985",title:"Position in 1985",html:"<p>By 1985 containerization is well established on major routes but incomplete in secondary ports, rural railways, and poorer territories. Pallets, crates, and conventional holds remain common, especially where labor is cheaper than cranes or traffic cannot support a terminal.</p><p>Conversion equipment and negotiated interchange soften the standards divide. They do not produce one global box.</p>"}
    ],
    related:[{href:"commonwealth-standard-ship-programme.html",kicker:"Shipping counterpart",label:"Commonwealth Standard-Ship Programme"},{href:"civilian-cold-chain.html",kicker:"Temperature-controlled freight",label:"Civilian Cold Chain"}],
    facts:[["Experimental takeoff","Late 1950s"],["Precursor systems","Pallets · forklifts · standardized crates"],["Major families","Five bloc systems"],["Main gains","Turnaround · security · multimodal transfer"],["Principal barrier","Physical and documentary incompatibility"],["Strategic use","Mobilization and supply"],["1985 condition","Established on major routes"],["Exact technical specifications","Open"]]
  }),

  "colour-television-standards": standardsArticle({
    slug:"colour-television-standards",title:"Colour television standards",eyebrow:"Broadcast engineering and cultural markets · 1965–1985",
    lead:"Colour television standards are the five incompatible broadcast and receiver systems that turn colour broadcasting into a major technical contest after 1965. The rivalry concerns picture stability, backward compatibility, relay conditions, manufacturing autonomy, and control of regional media markets as much as visible colour.",
    canon:"A five-way colour-television contest, the characteristic priorities of each system, continued monochrome dominance around 1970, and the importance of conversion equipment are established. Final formal standard names, line counts, carrier details, and national adoption statistics remain open.",
    landscape:{src:"assets/colour-television-standards.svg",alt:"Diagram of five colour television systems converging through conversion equipment",caption:"Recorded film crosses borders readily; live and taped television requires technical conversion."},
    sections:[
      {id:"monochrome",title:"The monochrome foundation",html:"<p>Television expands first in monochrome. By the early 1960s transmitters, studio practice, relay links, repair shops, and household sets already embody national engineering decisions. A colour system must work with this installed base or finance its replacement.</p><p>Monochrome sets remain the ordinary receiver through most of the 1960s and continue in service long after colour begins.</p>"},
      {id:"contest",title:"The standards contest, 1965–1970",html:"<p>Between 1965 and 1970 the major blocs commit to separate technical families. Engineering delegations demonstrate receivers and relay performance, while ministries weigh spectrum use, patents, domestic manufacture, export access, and political dependence.</p><p>No bloc accepts that the most commercially aggressive design is necessarily the proper public standard.</p>"},
      {id:"families",title:"The five colour systems",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Engineering emphasis</th><th>Political-commercial aim</th></tr></thead><tbody><tr><td>American</td><td>Backward compatibility with monochrome and rapid market entry</td><td>Large receiver market and program exports</td></tr><tr><td>German continental</td><td>Phase correction, stable colour, and precision transmission</td><td>Certified Einheitspakt broadcasting</td></tr><tr><td>British-Commonwealth</td><td>Independent implementation informed by continental research</td><td>Preserve Commonwealth industrial and relay autonomy</td></tr><tr><td>Latin</td><td>Line-sequential or memory-assisted operation over long, mixed relays</td><td>Accommodate national broadcasters inside a looser bloc</td></tr><tr><td>Japanese imperial</td><td>Manufacturability and conversion across varied infrastructure</td><td>Regional receiver exports and GEACPS distribution</td></tr></tbody></table></div>"},
      {id:"household",title:"The expensive colour household",html:"<p>A colour receiver around 1970 is a prestige purchase requiring adjustment and specialist service. Wealthy households, hotels, clubs, department stores, studios, and public viewing rooms adopt first. Most viewers still watch monochrome programs on monochrome sets.</p><p>By 1975 colour is established rather than universal. Replacement cycles, urban signal quality, repair access, and domestic production determine household adoption.</p>"},
      {id:"conversion",title:"Conversion and the gateway industry",html:"<p>Recorded film can be re-scanned or transferred for a foreign broadcaster. Live and videotaped television must pass through standards converters that reconcile line timing, frame cadence, colour encoding, and synchronization.</p><p>Britain and the Netherlands become valuable suppliers of conversion equipment and technical services. Gateway broadcasters can turn incompatibility into revenue and diplomatic leverage.</p>"},
      {id:"programming",title:"Programming across the divide",html:"<p>News, sport, ceremonies, and political events expose conversion delay and picture loss most clearly. Drama and documentary catalogs travel more easily when distributors prepare local masters.</p><p>Dubbing, censorship, quotas, and format conversion combine to keep television markets regional even when audiences recognize the same performers and events.</p>"},
      {id:"industry",title:"Receivers, patents, and repair",html:"<p>Standards shape tuner design, picture circuitry, studio equipment, test instruments, spare parts, and technician education. A national decision directs decades of licensing and component purchases.</p><p>Multi-standard receivers exist for diplomats, border regions, hotels, and wealthy enthusiasts. Their cost confirms that compatibility is a premium service.</p>"},
      {id:"1985",title:"Position in 1985",html:"<p>By 1985 colour television is normal in affluent metropolitan homes and public culture, while monochrome survives in secondary rooms, poorer districts, portable sets, and older institutions. Cathode-ray tubes remain dominant.</p><p>Improved converters and video distribution widen exchange. Broadcasting still carries the technical signature of its bloc.</p>"}
    ],
    related:[{href:"home-video.html",kicker:"Recorded medium",label:"Home Video"},{href:"consumer-telecommunications.html",kicker:"Broadcast setting",label:"Consumer Telecommunications"},{href:"japanese-consumer-brands.html",kicker:"Receiver industry",label:"Japanese Consumer Brands"}],
    facts:[["Standards contest","1965–1970"],["Major families","Five bloc systems"],["Ordinary receiver c. 1970","Monochrome CRT"],["Colour status c. 1975","Established, not universal"],["Cross-bloc requirement","Standards conversion"],["Gateway suppliers","Britain and the Netherlands"],["1985 display technology","Cathode-ray tube"],["Exact technical specifications","Open"]]
  }),

  "machine-readable-product-codes": standardsArticle({
    slug:"machine-readable-product-codes",title:"Machine-readable product codes",eyebrow:"Warehouses, retail, and inventory systems · 1970s–1985",
    lead:"Machine-readable product codes are the rival marks and identifier systems introduced into warehouses, military supply, mail order, wholesale distribution, and large retail during the 1970s. They make inventory visible to computers while extending bloc standards into labels, catalogs, checkout counters, and supplier records.",
    canon:"The institutional-first sequence, five bloc priorities, Japanese multi-script complexity, large-chain advantage, and absence of one universal code by 1985 are established. Final symbologies, names, check-digit rules, issuing bodies, and exact adoption rates remain open.",
    landscape:{src:"assets/machine-readable-product-codes.svg",alt:"Diagram following a product code from factory to warehouse, shop, and bloc gateway",caption:"A machine identifier follows goods through production and distribution while human-facing labels remain local."},
    sections:[
      {id:"origins",title:"Institutional origins",html:"<p>Machine-readable marking begins where volume justifies expensive equipment: military depots, factories, railway stores, wholesale food, mail-order houses, and large warehouses. Readers are fixed, computers centralized, and labeling discipline easier to enforce than at a neighborhood checkout.</p><p>The early purpose is usually stock control and traceability rather than faster consumer payment.</p>"},
      {id:"sequence",title:"From warehouse to checkout",html:"<p>Large supermarkets and department chains experiment with item-level marks during the 1970s. Routine checkout adoption advances more slowly because every package must carry a usable code and every store needs readers, terminals, price files, networks, maintenance, and trained staff.</p><p>Manual price labels and cash registers remain common in 1985, especially among small shops.</p>"},
      {id:"families",title:"Bloc priorities",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Primary emphasis</th><th>Typical early user</th></tr></thead><tbody><tr><td>American</td><td>Fast supermarket checkout and national consumer distribution</td><td>Large grocery and general-merchandise chains</td></tr><tr><td>German</td><td>Manufacturing, warehouses, and regulated product identity</td><td>Industrial combines and certified distributors</td></tr><tr><td>Japanese</td><td>Factory-to-retail traceability in dense distribution</td><td>Manufacturers, wholesalers, and metropolitan chains</td></tr><tr><td>Commonwealth</td><td>Freight and chain-inventory compatibility across dispersed markets</td><td>Shipping, mail order, and multi-country retailers</td></tr><tr><td>Latin</td><td>National systems connected through negotiated gateways</td><td>State-linked distributors and major urban chains</td></tr></tbody></table></div>"},
      {id:"japan",title:"The Japanese numbering problem",html:"<p>Japanese distribution must reconcile Japanese names, traditional Chinese characters, Roman model numbers, local distributor codes, and regional packaging. The machine number is therefore commonly separated from the human-facing brand and description.</p><p>This division supports multilingual retail while concentrating authority in catalog and translation services that map one identity to another.</p>"},
      {id:"chains",title:"The large-chain advantage",html:"<p>Integrated retailers gain faster stock counts, replenishment forecasts, shrinkage analysis, centralized price changes, and lower clerical costs. Suppliers that can print compliant marks and exchange clean records receive better access to shelves.</p><p>The system rewards scale before readers become cheap enough for ordinary shops.</p>"},
      {id:"small",title:"Local shops and human knowledge",html:"<p>Independent shops survive through proximity, repair, delivery, informal credit, specialty goods, and knowledge of customers. They may receive coded cartons while pricing individual items by hand.</p><p>Machine-readable commerce changes the competitive environment without immediately eliminating personal retail.</p>"},
      {id:"gateways",title:"Cross-bloc gateways",html:"<p>Imported goods may be relabeled, assigned a local identifier, or mapped through a conversion table. Errors create duplicate products, lost stock, incorrect prices, and customs disputes.</p><p>Specialist data firms and major distributors profit from maintaining catalogs between incompatible systems, much as ports profit from freight adapters.</p>"},
      {id:"1985",title:"Position in 1985",html:"<p>By 1985 machine-readable marks are familiar in warehouses and increasingly visible in major stores, yet no universal global product code exists. Coverage varies by chain, product class, city, and bloc.</p><p>The product code is becoming a platform decision: it links manufacturers, distributors, retailers, banks, and public regulators through a shared identity system.</p>"}
    ],
    related:[{href:"office-automation.html",kicker:"Institutional adoption",label:"Office Automation"},{href:"platform-society.html",kicker:"Platform consequence",label:"Consumer Computing and Platform Society"},{href:"japanese-consumer-brands.html",kicker:"Multi-script market",label:"Japanese Consumer Brands"}],
    facts:[["Experimental spread","1970s"],["First users","Depots · factories · warehouses"],["Retail adoption","Large chains first"],["Major families","Five bloc systems"],["Japanese solution","Machine number separated from brand"],["Small-shop condition","Manual pricing remains common"],["Universal global code by 1985","Absent"],["Final names and symbologies","Open"]]
  }),

  "early-cellular-telephone-networks": standardsArticle({
    slug:"early-cellular-telephone-networks",title:"Early cellular telephone networks",eyebrow:"Urban radio telephony and professional mobility · early 1980s–1985",
    lead:"Early cellular telephone networks are the limited urban and corridor-based radio systems that enter practical service during the early 1980s. They serve vehicles, heavy portable cases, and selected professions; pagers and fixed telephones remain more common than pocket handsets, and international roaming does not exist.",
    canon:"Early-1980s practical service, car and case-phone dominance, pager prevalence, the characteristic bloc models, tight registration, limited coverage, and rarity of pocket handsets are established. Final network names, frequencies, cell plans, billing rules, and subscriber totals remain open.",
    landscape:{src:"assets/early-cellular-networks.svg",alt:"Diagram of an early cellular workflow from pager and car phone through radio cells to fixed networks",caption:"Professional mobility normally combines paging, vehicle radio telephony, and the fixed network."},
    sections:[
      {id:"background",title:"From radio telephone to cellular service",html:"<p>Postwar vehicle radio systems connect a small number of police, doctors, officials, transport managers, and executives through manually or centrally assigned channels. Capacity is low and calls depend on specialist operators or restricted urban transmitters.</p><p>Cellular and cellular-like designs reuse frequencies across separated coverage areas, allowing more subscribers while requiring handoff, switching, registration, and dense infrastructure.</p>"},
      {id:"rollout",title:"The early-1980s rollout",html:"<p>Practical networks begin in capital regions, industrial corridors, port cities, and prestige commercial centers. Coverage is discontinuous and expensive. A subscriber leaving the licensed service area returns to the pager, hotel desk, roadside telephone, or office secretary.</p><p>Service is sold as professional availability and institutional command, not universal personal freedom.</p>"},
      {id:"devices",title:"The hierarchy of mobile devices",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Device</th><th>1985 position</th><th>Typical user</th></tr></thead><tbody><tr><td>Pager</td><td>Common professional alert device</td><td>Doctors, repair staff, managers, shipping, security, journalists</td></tr><tr><td>Car telephone</td><td>Normal form of mobile voice service</td><td>Executives, officials, emergency services, field engineers</td></tr><tr><td>Heavy case telephone</td><td>Portable but costly and conspicuous</td><td>News teams, specialists, senior commercial staff</td></tr><tr><td>Pocket handset</td><td>Demonstration, elite, or specialist equipment</td><td>Senior patrons and technical trials</td></tr></tbody></table></div>"},
      {id:"blocs",title:"Five network models",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>System</th><th>Service model</th><th>Characteristic geography</th></tr></thead><tbody><tr><td>Germany</td><td>Tightly registered vehicle and professional service linked to emergency systems and Weltnetz administration</td><td>Major Reich cities and certified corridors</td></tr><tr><td>Japan</td><td>Business service integrated with dense metropolitan distribution</td><td>Tokyo, Osaka, Keijō, Shanghai, Singapore, and other imperial centers</td></tr><tr><td>United States</td><td>Competing regional systems with uneven compatibility</td><td>Large cities, highways, and corporate territories</td></tr><tr><td>Commonwealth</td><td>Public-authority and commercial networks around London, ports, and selected capitals</td><td>Separated national and Commonwealth urban systems</td></tr><tr><td>Latin Bloc</td><td>National urban services connected selectively through gateways</td><td>Capitals, industrial regions, and Mediterranean corridors</td></tr></tbody></table></div>"},
      {id:"pager",title:"Pager culture",html:"<p>The routine sequence is pager, fixed telephone, and returned call. Numeric displays send a telephone number or service code; voice and more elaborate messages remain institutional or premium.</p><p>Paging creates an expectation of availability while preserving a pause between summons and conversation. Employers can reach skilled workers without supplying a full mobile telephone.</p>"},
      {id:"registration",title:"Registration, billing, and jurisdiction",html:"<p>Handsets and vehicle units are registered equipment. Network identity, billing records, coverage permissions, and radio regulation make anonymous use difficult, especially in Germany and Japan.</p><p>Crossing a national or bloc boundary normally ends service. Travelers rent local equipment, use an operator, or rely on fixed networks; global roaming remains absent.</p>"},
      {id:"uses",title:"Business, emergency, and news uses",html:"<p>Mobile voice shortens decisions in medicine, utilities, transport, construction, shipping, security, and journalism. It is most valuable when delay is expensive and the user already has institutional support.</p><p>Emergency access strengthens the public case for networks, while executive use finances early expansion and gives the device its prestige image.</p>"},
      {id:"1985",title:"Position in 1985",html:"<p>By 1985 mobile telephony is real, visible, and aspirational. It remains an institutional layer over the fixed network rather than a mass replacement for it. Car phones and pagers define ordinary professional mobility.</p><p>The pocket telephone belongs to demonstrations, very wealthy subscribers, and forecasts of the next decade.</p>"}
    ],
    related:[{href:"consumer-telecommunications.html",kicker:"Communications overview",label:"Consumer Telecommunications"},{href:"computing-networks.html",kicker:"Data-network setting",label:"Computing and Global Networks"},{href:"weltnetz.html",kicker:"German network environment",label:"Weltnetz"}],
    facts:[["Practical rollout","Early 1980s"],["Normal mobile telephone","Car-mounted unit"],["Portable voice","Heavy case telephone"],["Common alert device","Pager"],["Pocket handset in 1985","Elite or experimental"],["Coverage","Selected cities and corridors"],["Global roaming","Absent"],["Final network specifications","Open"]]
  })
});

const addMaterialStandardsRelated = (slug, items) => {
  const article = window.deepArticles[slug];
  if (!article) return;
  article.related = article.related || [];
  items.forEach(item => {
    if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
  });
};

addMaterialStandardsRelated("logistics-technical-standards",[
  {href:"freight-container-standards.html",kicker:"Dedicated freight system",label:"Freight Container Standards"}
]);
addMaterialStandardsRelated("home-video",[
  {href:"colour-television-standards.html",kicker:"Broadcast foundation",label:"Colour Television Standards"}
]);
addMaterialStandardsRelated("office-automation",[
  {href:"machine-readable-product-codes.html",kicker:"Retail and warehouse system",label:"Machine-Readable Product Codes"}
]);
addMaterialStandardsRelated("consumer-telecommunications",[
  {href:"early-cellular-telephone-networks.html",kicker:"Mobile voice system",label:"Early Cellular Telephone Networks"}
]);
addMaterialStandardsRelated("japanese-consumer-brands",[
  {href:"machine-readable-product-codes.html",kicker:"Retail identity system",label:"Machine-Readable Product Codes"},
  {href:"colour-television-standards.html",kicker:"Receiver market",label:"Colour Television Standards"}
]);
addMaterialStandardsRelated("platform-society",[
  {href:"machine-readable-product-codes.html",kicker:"Commercial platform",label:"Machine-Readable Product Codes"},
  {href:"early-cellular-telephone-networks.html",kicker:"Communications platform",label:"Early Cellular Telephone Networks"}
]);
addMaterialStandardsRelated("material-culture",[
  {href:"freight-container-standards.html",kicker:"Physical logistics",label:"Freight Container Standards"},
  {href:"colour-television-standards.html",kicker:"Broadcast engineering",label:"Colour Television Standards"},
  {href:"machine-readable-product-codes.html",kicker:"Commercial identity",label:"Machine-Readable Product Codes"},
  {href:"early-cellular-telephone-networks.html",kicker:"Professional mobility",label:"Early Cellular Telephone Networks"}
]);
