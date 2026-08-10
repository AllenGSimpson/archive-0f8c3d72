window.deepArticles = window.deepArticles || {};

const japaneseNavalSources = [
  {href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — controlling Japanese class and force register"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese carrier-first maritime doctrine"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Japanese naval development milestones"},
  {href:"../transcript.md",label:"Master Transcript — Japanese fleet, automation, and imperial logistics"}
];

const japaneseNavalArticle = config => ({
  category:"Naval history",
  eyebrow:"Imperial Japanese Navy · postwar development · 1947–1985",
  infoboxKicker:"Japanese naval system",
  ...config,
  sources:[...japaneseNavalSources,...(config.additionalSources || [])],
  categories:config.categories || ["Empire of Japan","Imperial Japanese Navy","Naval history","Military technology"]
});

const carrierLandscape = {
  src:"assets/diagrams/japanese-carrier-system.svg",
  alt:"Diagram showing Japanese fleet and light carriers integrated with naval aviation, satellites, island bases, escorts, submarines, and long-range anti-ship weapons",
  caption:"Japan treated the carrier as the center of a wider maritime information, aviation, base, and escort system"
};

const lineageLandscape = {
  src:"assets/diagrams/japanese-postwar-fleet-lineages.svg",
  alt:"Timeline of Japanese battleship, carrier, cruiser, escort, attack-submarine, guided-missile-submarine, and transport-submarine lineages",
  caption:"The registered fleet combined surviving wartime programs with continuous carrier, escort, and submarine development"
};

const japanese1985Fleet = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Category</th><th>Front-line strength</th></tr></thead><tbody><tr><td>Battleships</td><td>2</td></tr><tr><td>Fleet carriers</td><td>8</td></tr><tr><td>Light carriers</td><td>4</td></tr><tr><td>Missile and command cruisers</td><td>10</td></tr><tr><td>Destroyers</td><td>38</td></tr><tr><td>Frigates and ocean escorts</td><td>46</td></tr><tr><td>Corvettes and fast missile combatants</td><td>42</td></tr><tr><td>Nuclear attack submarines</td><td>16</td></tr><tr><td>Nuclear guided-missile submarines</td><td>6</td></tr><tr><td>Conventional submarines</td><td>30</td></tr><tr><td>Major amphibious ships</td><td>26</td></tr><tr><td>Mine-warfare ships</td><td>32</td></tr><tr><td>Major replenishment and repair ships</td><td>38</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "imperial-japanese-navy-postwar": japaneseNavalArticle({
    title:"Imperial Japanese Navy after the Second World War",
    category:"Military history",
    landscape:carrierLandscape,
    lead:"After the Second World War, the Imperial Japanese Navy became the carrier-centered armed service of a maritime empire stretching from the northern Pacific through Southeast Asia and into the South Seas. Fleet and light carriers, land-based naval aviation, island airfields, airborne warning, satellites, escorts, submarines, replenishment, and long-range anti-ship weapons operated as one layered system.",
    canon:"The 1947 inheritance, carrier-first doctrine, registered capital, carrier, cruiser, escort, submarine, amphibious, mine, and auxiliary totals, principal class lineages, Type 42 Tsubaki role, imperial-base integration, and 1985 balance are established. Fleet command structure, base hierarchy, annual budgets, air-wing compositions, detailed missile fits, deployments, and individual hull service records remain open unless separately registered.",
    sections:[
      {id:"inheritance",title:"Armistice inheritance",html:"<p>Japan ended 1947 with ten battleships, fifteen carriers, thirty-seven cruisers, 126 destroyers, 105 major escorts, and ninety-six submarines. It had fought Britain and regional enemies but had not endured American carrier destruction, submarine blockade, mining of the home islands, occupation, or industrial dissolution.</p><p>The resulting navy possessed an intact institutional memory, trained cadres, yards, aviation establishments, island bases, and imperial supply system.</p>"},
      {id:"doctrine",title:"Carrier-first doctrine",html:"<p>The governing maxim was that battleships finished damaged formations and supported invasions while carriers created the battle. The <a href='japanese-carrier-system.html'>carrier system</a> joined aircraft and ships to land-based naval aviation, airborne warning, satellites, submarines, island bases, surface escorts, and Type 42 Tsubaki long-range anti-ship weapons.</p>"},
      {id:"empire",title:"Imperial geography",html:"<p>Home-island yards and commands connected to Formosa, Chōsen, the South Seas, Manchukuo, Indochina, the East Indies, and associated-state ports. The same geography supplied depth and imposed extraordinary escort, fuel, repair, weather, and communications demands.</p><p>Direct territories, associated states, and corporate concessions did not form one uniform naval jurisdiction.</p>"},
      {id:"capital",title:"Capital and carrier fleet",html:"<p>Yamato and Musashi survived as invasion-support, shore-bombardment, finishing, and prestige ships. Eight <a href='japanese-carrier-system.html'>fleet carriers</a> and four light carriers formed the operational core in 1985.</p>"},
      {id:"screen",title:"Cruiser and escort screen",html:"<p>Ten <a href='japanese-cruiser-force.html'>missile and command cruisers</a>, thirty-eight <a href='japanese-surface-escorts.html'>destroyers</a>, forty-six frigates and ocean escorts, and forty-two smaller missile combatants defended carriers, imperial routes, amphibious formations, and bases.</p>"},
      {id:"submarines",title:"Submarine arm",html:"<p>The <a href='japanese-submarine-force.html'>submarine force</a> combined thirty conventional attack boats, sixteen nuclear attack boats, six nuclear guided-missile boats, and a separate <a href='japanese-transport-submarines.html'>transport lineage</a>. It served fleet attack, scouting, route denial, long-range conventional strike, and surprise amphibious access.</p>"},
      {id:"1985",title:"Fleet on 1 January 1985",html:japanese1985Fleet+"<p>The totals describe registered front-line strength, not simultaneous availability or concentration in one ocean.</p>"},
      {id:"limits",title:"Strategic limits",html:"<p>The system depended upon fuel, pilots, deck crews, maintenance, replenishment, protected communications, and dispersed bases. Carrier strength could not make every imperial route safe or every associated government obedient.</p><p>Japan's advantage was integration across a broad maritime system; the same breadth was its permanent burden.</p>"}
    ],
    related:[{href:"world-naval-balance-1985.html",kicker:"Comparative strength",label:"World Naval Balance in 1985"},{href:"naval-armistice-inventory-1947.html",kicker:"Starting inventory",label:"Naval Armistice Inventory of 1947"},{href:"japanese-carrier-system.html",kicker:"Principal battle system",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Screen and routes",label:"Japanese Surface Escorts"},{href:"japanese-submarine-force.html",kicker:"Undersea arm",label:"Japanese Submarine Force"},{href:"south-seas-general-government.html",kicker:"Pacific base system",label:"South Seas General Government"}],
    facts:[["Service","Imperial Japanese Navy"],["Strategic center","Carrier-centered maritime system"],["Fleet carriers, 1985","8"],["Light carriers, 1985","4"],["Attack submarines, 1985","46"],["Guided-missile submarines, 1985","6"],["Battleships, 1985","2"],["Reference date","1 January 1985"]]
  }),

  "japanese-carrier-system": japaneseNavalArticle({
    title:"Japanese carrier system, 1947–1985",
    category:"Naval aviation",
    landscape:carrierLandscape,
    lead:"The Japanese carrier system was the integrated fleet of eight fleet carriers, four light carriers, their air groups, land-based naval aviation, airborne-warning aircraft, island bases, satellites, submarines, surface escorts, replenishment ships, and long-range anti-ship weapons. Japanese doctrine treated the carrier not as an isolated capital ship but as the command and aviation center of a distributed maritime battle.",
    canon:"The integrated system, active 1985 carrier roster, registered class displacements and air groups, carrier-first doctrine, supporting components, and Type 42 Tsubaki relationship are established. Task-group numbers, air-wing aircraft types, sortie rates, command procedures, and deployment patterns remain open.",
    sections:[
      {id:"principle",title:"The carrier creates the battle",html:"<p>Aircraft and sensors found, classified, and attacked before heavy surface forces closed. Battleships could finish damaged formations or support landings; they did not replace the carrier as battle creator.</p>"},
      {id:"fleet",title:"Fleet-carrier roster",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Carrier</th><th>Class or generation</th><th>Registered 1985 air group</th></tr></thead><tbody><tr><td>Taihō</td><td>Taihō improved</td><td>68 aircraft</td></tr><tr><td>Shinano</td><td>Shinano</td><td>64 aircraft</td></tr><tr><td>Amagi</td><td>Amagi</td><td>66 aircraft</td></tr><tr><td>Katsuragi</td><td>Amagi</td><td>66 aircraft</td></tr><tr><td>Aso</td><td>Amagi</td><td>66 aircraft</td></tr><tr><td>Ikoma</td><td>Amagi</td><td>66 aircraft</td></tr><tr><td>Hakuryū</td><td>Hakuryū</td><td>84 aircraft</td></tr><tr><td>Sōryū</td><td>Hakuryū</td><td>84 aircraft</td></tr></tbody></table></div>"},
      {id:"light",title:"Light-carrier roster",html:"<p>Zuihō, Shōhō, Ryūhō, and Hiyō formed the four-ship Zuihō II force. Each registered a standard 1985 group of twenty-four fighters plus helicopters for reduced fixed-wing operations, anti-submarine work, route defense, and amphibious support.</p>"},
      {id:"information",title:"Information and warning",html:"<p>Airborne warning, carrier and land radar, satellites, patrol aircraft, signals intelligence, submarines, island observers, and data links built the common picture. Japanese advantage depended upon fusing imperfect reports faster than an opponent.</p>"},
      {id:"weapons",title:"Long-range attack",html:"<p>Carrier aircraft and Type 42 Tsubaki long-range anti-ship weapons extended attack beyond gun range. Cruisers, destroyers, and submarines supplied additional launch platforms and forced opponents to defend against several approach geometries.</p>"},
      {id:"bases",title:"Bases and replenishment",html:"<p>Home-island yards, the older Micronesian network, South Seas airfields, Taiwan, Chōsen, and southern-route facilities enabled dispersal and repair. Thirty-eight major replenishment and repair ships gave the carrier fleet mobility, but no auxiliary system erased fuel and maintenance limits.</p>"},
      {id:"comparison",title:"Comparison with other fleets",html:"<p>America matched Japan in large-carrier scale but organized aviation through a different political and industrial system. Germany centered submarines. Britain emphasized anti-submarine warfare and Commonwealth route defense. Japan's distinctive strength was the mature integration of carriers with an imperial island and corporate-logistics network.</p>"}
    ],
    related:[{href:"japanese-wartime-carrier-inheritance.html",kicker:"First generation",label:"Wartime Carrier Inheritance"},{href:"amagi-class-carrier.html",kicker:"Postwar standard",label:"Amagi Class"},{href:"hakuryu-class-carrier.html",kicker:"1980s generation",label:"Hakuryū Class"},{href:"zuiho-ii-class.html",kicker:"Light-carrier arm",label:"Zuihō II Class"},{href:"japanese-surface-escorts.html",kicker:"Protective screen",label:"Japanese Surface Escorts"}],
    facts:[["Fleet carriers, 1985","8"],["Light carriers, 1985","4"],["Largest standard air group","84 aircraft"],["Long-range weapon","Type 42 Tsubaki"],["Core principle","Carriers create the battle"],["Primary support","Aviation, warning, satellites, bases, escorts, submarines"]]
  }),

  "yamato-class-postwar": japaneseNavalArticle({
    title:"Yamato class after the Second World War",
    category:"Warship history",
    eyebrow:"Yamato and Musashi · battleship survival · 1941–1985",
    landscape:lineageLandscape,
    lead:"Yamato and Musashi were the two surviving Yamato-class battleships and the principal heavy-gun prestige ships of postwar Japan. In 1985 each displaced 74,800 tonnes at full load and carried nine 460 mm guns alongside surface-to-air missiles, anti-ship missiles, and helicopters. They supported invasions, bombarded shores, and finished damaged formations rather than defining Japan's carrier-first battle doctrine.",
    canon:"Both ships' survival, commissioning years, active 1985 status, registered full-load displacement and standard armament categories, prestige and invasion-support roles, and subordination to carrier doctrine are established. Refit dates, missile models and counts, radar, machinery, crew, helicopter complement, deployments, and detailed wartime service after August 1941 remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Yamato commissioned in 1941 and Musashi in 1942. Their pre-divergence design sought qualitative superiority through extreme displacement, armor, and nine 460 mm guns.</p>"},
      {id:"survival",title:"Survival through the long war",html:"<p>Neither ship faced the historical American carrier and submarine campaign that destroyed the Japanese battle fleet. Both survived the war and remained usable symbols of the imperial settlement.</p>"},
      {id:"postwar",title:"Postwar missions",html:"<p>The ships provided heavy shore bombardment, invasion support, command capacity, prestige visits, and a finishing force against formations already disrupted by aircraft, missiles, or submarines.</p><p>Fuel, crew, maintenance, and vulnerability prevented routine use as the center of every fleet operation.</p>"},
      {id:"modernization",title:"Registered 1985 configuration",html:"<p>Each ship registered 74,800 tonnes full load, nine 460 mm guns, surface-to-air missiles, anti-ship missiles, and helicopters. The register does not fix exact refit architecture or weapons counts.</p>"},
      {id:"doctrine",title:"Relationship to carrier doctrine",html:"<p>Official doctrine held that carriers created the battle. Yamato and Musashi exploited a battle already shaped by air and information superiority or supplied destructive fire against land objectives.</p>"},
      {id:"memory",title:"Public meaning",html:"<p>The pair embodied endurance, national scale, and victory. Their continued active status tied the modern electronics-and-missile navy to a visible prewar imperial lineage.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Doctrinal center",label:"Japanese Carrier System"},{href:"imperial-japanese-navy-postwar.html",kicker:"Service context",label:"Postwar Imperial Japanese Navy"},{href:"japanese-cruiser-force.html",kicker:"Missile command layer",label:"Japanese Cruiser Force"}],
    facts:[["Ships","Yamato; Musashi"],["Commissioned","1941; 1942"],["Full-load displacement, 1985","74,800 t"],["Main battery","Nine 460 mm guns"],["Additional systems","SAMs, anti-ship missiles, helicopters"],["Status, 1985","Active"],["Doctrinal role","Finishing, invasion support, bombardment, prestige"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Japanese_battleship_Yamato",label:"Wikipedia — pre-divergence Yamato design and early service"}]
  }),

  "japanese-wartime-carrier-inheritance": japaneseNavalArticle({
    title:"Japanese wartime carrier inheritance",
    category:"Naval aviation history",
    landscape:lineageLandscape,
    lead:"Japan's wartime carrier inheritance comprised the surviving and completed carrier programs that bridged the long war to the postwar fleet. Taihō and improved follow-ons, together with the large carrier Shinano, supplied armored-flight-deck experience, large air groups, trained personnel, and an uninterrupted institutional base for later Amagi and Hakuryū development.",
    canon:"Taihō improved commissioning band, 42,000-tonne full load and sixty-eight-aircraft group; Taihō's active post-reconstruction status; Shinano's 1946 commissioning, 71,000-tonne full load and sixty-four-aircraft group; and both generations' continuity role are established. Follow-on roster outside the active 1985 list, wartime damage, reconstruction details, air groups by year, and individual service histories remain open.",
    sections:[
      {id:"taiho",title:"Taihō improved generation",html:"<p>Taihō and follow-on ships commissioned between 1944 and 1948. Their registered mature form displaced 42,000 tonnes full load and carried sixty-eight aircraft.</p><p>Taihō remained active in 1985 after reconstruction; the status and identity of every follow-on hull are not yet fully enumerated.</p>"},
      {id:"shinano",title:"Shinano",html:"<p>Shinano commissioned in 1946 and survived as a 71,000-tonne fleet carrier with a standard 1985 air group of sixty-four aircraft. Its scale supplied aviation space, endurance, and prestige distinct from Taihō.</p>"},
      {id:"divergence",title:"Divergence from familiar history",html:"<p>Japan did not fight an American carrier war or suffer the submarine blockade and industrial collapse that historically destroyed these programs. Shinano therefore completed, and Taihō survived into a reconstruction history rather than a wreck record.</p>"},
      {id:"institution",title:"Institutional continuity",html:"<p>The ships preserved deck crews, pilots, aircraft handling, armored-deck practice, fleet logistics, command doctrine, and shipyard expertise. Postwar carrier development did not need to be recreated after defeat or occupation.</p>"},
      {id:"1985",title:"Position in 1985",html:"<p>Taihō and Shinano remained among the eight active fleet carriers. They served beside four Amagi-class and two Hakuryū-class ships, making the carrier force visibly multigenerational.</p>"}
    ],
    related:[{href:"amagi-class-carrier.html",kicker:"Postwar successor",label:"Amagi Class"},{href:"hakuryu-class-carrier.html",kicker:"Latest successor",label:"Hakuryū Class"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Taihō generation","1944–1948"],["Taihō full load","42,000 t"],["Taihō air group","68 aircraft"],["Shinano commissioned","1946"],["Shinano full load","71,000 t"],["Shinano air group","64 aircraft"],["Active inheritance, 1985","Taihō and Shinano"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Japanese_aircraft_carrier_Taih%C5%8D",label:"Wikipedia — pre-divergence Taihō design and construction"},{href:"https://en.wikipedia.org/wiki/Japanese_aircraft_carrier_Shinano",label:"Wikipedia — pre-divergence Shinano conversion and construction"}]
  }),

  "amagi-class-carrier": japaneseNavalArticle({
    title:"Amagi-class aircraft carrier",
    category:"Warship class",
    eyebrow:"Four fleet carriers · 1957–",
    landscape:lineageLandscape,
    lead:"The Amagi class was Japan's four-ship standard postwar fleet-carrier class. Amagi, Katsuragi, Aso, and Ikoma commissioned between 1957 and 1965 and remained active in 1985 at 53,000 tonnes full load with standard sixty-six-aircraft groups.",
    canon:"Four-ship roster, commissioning band, 53,000-tonne full-load displacement, sixty-six-aircraft standard group, and active 1985 status are established. Per-ship dates, dimensions, propulsion, speed, crew, aircraft types, weapons, sensors, yards, and deployments remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class converted wartime carrier experience into a repeatable postwar standard compatible with jets, modern deck operations, airborne warning, helicopters, and the imperial replenishment system.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioning</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Amagi</td><td>Within 1957–65 band</td><td>Active</td></tr><tr><td>Katsuragi</td><td>Within 1957–65 band</td><td>Active</td></tr><tr><td>Aso</td><td>Within 1957–65 band</td><td>Active</td></tr><tr><td>Ikoma</td><td>Within 1957–65 band</td><td>Active</td></tr></tbody></table></div>"},
      {id:"air",title:"Air group",html:"<p>The registered 1985 standard is sixty-six aircraft per ship. Exact mixes remain open and could vary by fleet-defense, strike, warning, anti-submarine, training, or surge mission.</p>"},
      {id:"role",title:"Fleet role",html:"<p>The class formed half of Japan's active fleet-carrier total and the numerical center between the wartime-generation Taihō and Shinano and the larger Hakuryū pair.</p>"},
      {id:"limits",title:"Open technical details",html:"<p>No source yet fixes propulsion, catapult type, deck geometry, armor, sortie rate, or one universal weapons fit. Those details should not be inferred from displacement alone.</p>"}
    ],
    related:[{href:"japanese-wartime-carrier-inheritance.html",kicker:"Predecessor generations",label:"Wartime Carrier Inheritance"},{href:"hakuryu-class-carrier.html",kicker:"Successor generation",label:"Hakuryū Class"},{href:"japanese-carrier-system.html",kicker:"Operational system",label:"Japanese Carrier System"}],
    facts:[["Ships","Amagi; Katsuragi; Aso; Ikoma"],["Commissioning band","1957–1965"],["Full-load displacement","53,000 t"],["Standard air group","66 aircraft"],["Active in 1985","4"]]
  }),

  "hakuryu-class-carrier": japaneseNavalArticle({
    title:"Hakuryū-class aircraft carrier",
    category:"Warship class",
    eyebrow:"Hakuryū and Sōryū · 1980–",
    landscape:lineageLandscape,
    lead:"The Hakuryū class was Japan's largest and newest fleet-carrier generation in 1985. Hakuryū commissioned in 1980 and Sōryū in 1983; each registered 76,000 tonnes full load and a standard eighty-four-aircraft group.",
    canon:"Names, commissioning years, two-ship class, 76,000-tonne full-load displacement, eighty-four-aircraft standard group, and active 1985 status are established. Propulsion, dimensions, speed, crew, catapults, deck arrangement, aircraft types, defensive systems, sensors, and deployments remain open.",
    sections:[
      {id:"origin",title:"Origin",html:"<p>The class answered larger aircraft, warning and command requirements, longer operations, and the need to keep the carrier fleet modern without replacing every older ship simultaneously.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Hakuryū</td><td>1980</td><td>Active</td></tr><tr><td>Sōryū</td><td>1983</td><td>Active</td></tr></tbody></table></div>"},
      {id:"air",title:"Air group and command",html:"<p>Eighty-four aircraft form the registered standard group. The class also represents the most capacious Japanese carrier command and maintenance environment, though precise internal arrangements remain open.</p>"},
      {id:"role",title:"Role in the 1985 fleet",html:"<p>The pair supplied the high-capacity layer above four Amagi-class ships and the two surviving wartime-generation fleet carriers. They were central assets but still required cruisers, escorts, submarines, bases, and replenishment.</p>"},
      {id:"limits",title:"Limits",html:"<p>The class did not make carrier groups invulnerable to submarines, long-range missiles, mines, weather, or concentrated air attack. Its advantage was the scale at which Japan could integrate aviation and information, not immunity.</p>"}
    ],
    related:[{href:"amagi-class-carrier.html",kicker:"Numerical core",label:"Amagi Class"},{href:"japanese-surface-escorts.html",kicker:"Protective screen",label:"Japanese Surface Escorts"},{href:"japanese-cruiser-force.html",kicker:"Command screen",label:"Japanese Cruiser Force"}],
    facts:[["Ships","Hakuryū; Sōryū"],["Commissioned","1980; 1983"],["Full-load displacement","76,000 t"],["Standard air group","84 aircraft"],["Status, 1985","Active"]]
  }),

  "zuiho-ii-class": japaneseNavalArticle({
    title:"Zuihō II-class light aircraft carrier",
    category:"Warship class",
    landscape:lineageLandscape,
    lead:"The Zuihō II class was Japan's four-ship postwar light-carrier force. Zuihō, Shōhō, Ryūhō, and Hiyō commissioned between 1962 and 1969 and remained active in 1985 at 28,000 tonnes full load with standard groups of twenty-four fighters plus helicopters.",
    canon:"Four-ship roster, commissioning band, 28,000-tonne full-load displacement, standard air-group description, and active 1985 status are established. Per-ship dates, propulsion, dimensions, aircraft and helicopter types, defensive weapons, sensors, yards, and deployments remain open.",
    sections:[
      {id:"concept",title:"Light-carrier concept",html:"<p>The class supplied reduced fixed-wing operations and helicopter support at lower scale than fleet carriers. It could defend routes, reinforce amphibious operations, provide anti-submarine aviation, train crews, and release large carriers for principal theaters.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioning</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Zuihō</td><td>Within 1962–69 band</td><td>Active</td></tr><tr><td>Shōhō</td><td>Within 1962–69 band</td><td>Active</td></tr><tr><td>Ryūhō</td><td>Within 1962–69 band</td><td>Active</td></tr><tr><td>Hiyō</td><td>Within 1962–69 band</td><td>Active</td></tr></tbody></table></div>"},
      {id:"air",title:"Air group",html:"<p>Each carried a standard 1985 group of twenty-four fighters plus helicopters. The register deliberately does not turn that description into one fixed peacetime deck list.</p>"},
      {id:"empire",title:"Imperial-route role",html:"<p>Light carriers matched the geography of secondary seas, dispersed islands, convoy routes, and limited local crises. They were still major warships, not escort carriers or amphibious helicopter ships.</p>"},
      {id:"fleet",title:"Relationship with fleet carriers",html:"<p>The four light carriers increased geographic presence without diluting the eight-ship fleet-carrier striking core. In major operations they could supply fighters, helicopters, anti-submarine coverage, and replacement capacity.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Parent system",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Escort screen",label:"Japanese Surface Escorts"},{href:"south-seas-general-government.html",kicker:"Imperial geography",label:"South Seas General Government"}],
    facts:[["Ships","Zuihō; Shōhō; Ryūhō; Hiyō"],["Commissioning band","1962–1969"],["Full-load displacement","28,000 t"],["Standard air group","24 fighters plus helicopters"],["Active in 1985","4"],["Classification","Light carrier"]]
  }),

  "japanese-cruiser-force": japaneseNavalArticle({
    title:"Japanese postwar cruiser force",
    category:"Warship development",
    landscape:lineageLandscape,
    lead:"The Japanese postwar cruiser force comprised two Ibuki aviation missile cruisers, four Takao II missile cruisers, and four Maya command cruisers. These ten ships supplied command, large radar, missile defense, surface attack, and helicopter aviation to carrier and independent task groups.",
    canon:"All three classes, build and active totals, introduction bands, full-load displacements, and registered roles are established. Individual ship names, hull numbers, exact weapons and sensors except Maya's eighty cells and two helicopters, propulsion, yards, and deployments remain open.",
    sections:[
      {id:"ibuki",title:"Ibuki aviation missile cruiser",html:"<p>Two 13,000-tonne Ibuki-class ships entered service from 1954 through 1957. Both remained active in 1985 for command, missile employment, and helicopter aviation.</p>"},
      {id:"takao",title:"Takao II missile cruiser",html:"<p>Four 14,000-tonne Takao II ships entered service between 1960 and 1967. They provided carrier-group air defense and surface strike.</p>"},
      {id:"maya",title:"Maya command cruiser",html:"<p>Four 16,500-tonne Maya-class ships entered service from 1974 through 1982. Each registered eighty missile cells, fleet-command facilities, and two helicopters.</p>"},
      {id:"role",title:"Carrier-group role",html:"<p>Cruisers combined command volume, radar, missiles, aviation, and endurance. They coordinated escort screens and gave carrier commanders weapons and sensors that did not consume flight-deck capacity.</p>"},
      {id:"balance",title:"Force in 1985",html:"<p>All ten registered ships remained active. The force therefore represented three technological generations operating together rather than one uniform class.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Protected core",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Destroyer and frigate screen",label:"Japanese Surface Escorts"},{href:"imperial-japanese-navy-postwar.html",kicker:"Fleet context",label:"Postwar Imperial Japanese Navy"}],
    facts:[["Ibuki class","2 built / 2 active"],["Takao II class","4 built / 4 active"],["Maya class","4 built / 4 active"],["Total active, 1985","10"],["Largest registered class","Maya, 16,500 t"],["Maya missile cells","80"]]
  }),

  "japanese-surface-escorts": japaneseNavalArticle({
    title:"Japanese postwar surface escorts",
    category:"Warship development",
    landscape:lineageLandscape,
    lead:"Japanese postwar surface escorts were the destroyers, frigates, ocean escorts, and smaller missile combatants that protected carriers, amphibious groups, replenishment forces, imperial routes, and island bases. Their registered line moved from the first postwar missile destroyers and general escorts to networked multipurpose ships and helicopter missile frigates.",
    canon:"All six named destroyer and escort classes, build and active totals, introduction bands, full-load displacements, registered roles, thirty-eight-destroyer and forty-six-frigate totals, and forty-two smaller missile-combatant total are established. Individual hull rosters, weapons, sensors, propulsion, export histories, and deployments remain open.",
    sections:[
      {id:"destroyers",title:"Destroyer line",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Role</th></tr></thead><tbody><tr><td>Asakaze</td><td>12</td><td>1954–61</td><td>4,200 t</td><td>First postwar missile destroyer</td></tr><tr><td>Amatsukaze</td><td>14</td><td>1962–70</td><td>5,400 t</td><td>Area defense and carrier escort</td></tr><tr><td>Hatsuyuki</td><td>12</td><td>1974–82</td><td>6,200 t</td><td>Networked multipurpose destroyer</td></tr></tbody></table></div>"},
      {id:"frigates",title:"Escort and frigate line",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Role</th></tr></thead><tbody><tr><td>Isuzu</td><td>14</td><td>1952–60</td><td>2,400 t</td><td>General escort</td></tr><tr><td>Chikugo</td><td>18</td><td>1961–70</td><td>3,100 t</td><td>ASW and imperial-route escort</td></tr><tr><td>Yūbari</td><td>14</td><td>1972–81</td><td>4,000 t</td><td>Missile frigate with helicopter</td></tr></tbody></table></div>"},
      {id:"screen",title:"Carrier screen",html:"<p>Destroyers supplied air defense, surface attack, and multipurpose response. Frigates and escorts supplied anti-submarine warfare, convoy endurance, and route presence. Together they protected carriers without assuming carriers were their only mission.</p>"},
      {id:"routes",title:"Imperial-route service",html:"<p>The navy had to protect food, oil, ore, troops, commercial shipping, and communications across a vast hierarchical sphere. Chikugo and Yūbari service was as much about keeping routes open as preparing a decisive fleet battle.</p>"},
      {id:"balance",title:"1985 balance",html:"<p>All thirty-eight listed destroyers and all forty-six listed frigates remained active in 1985. Forty-two corvettes and fast missile combatants added local ambush, patrol, and base-defense capacity.</p>"},
      {id:"limits",title:"Limits",html:"<p>Escort numbers could not provide continuous protection to every route and island. Readiness, crew quality, helicopter availability, weather, and replenishment determined whether paper strength became an effective screen.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Principal protected system",label:"Japanese Carrier System"},{href:"japanese-cruiser-force.html",kicker:"Command layer",label:"Japanese Cruiser Force"},{href:"japanese-submarine-force.html",kicker:"Undersea partner",label:"Japanese Submarine Force"},{href:"south-seas-general-government.html",kicker:"Route geography",label:"South Seas General Government"}],
    facts:[["Destroyer classes","Asakaze; Amatsukaze; Hatsuyuki"],["Destroyers active, 1985","38"],["Escort classes","Isuzu; Chikugo; Yūbari"],["Frigates and escorts active, 1985","46"],["Smaller missile combatants","42"]]
  }),

  "japanese-submarine-force": japaneseNavalArticle({
    title:"Japanese submarine force, 1947–1985",
    category:"Submarine warfare",
    landscape:lineageLandscape,
    lead:"The Japanese submarine force was the undersea component of the carrier-centered fleet. By 1985 it comprised thirty conventional attack submarines, sixteen nuclear attack submarines, six nuclear guided-missile submarines, and a separate special-transport branch. Its principal tasks were fleet attack, scouting, route denial, carrier screening, long-range conventional strike, reconnaissance, and surprise amphibious access.",
    canon:"The registered 1985 totals, five attack and guided-missile families, older training inheritance, special-transport line, fleet relationship, and conventional-only missile role are established. Individual hull numbers, patrol areas, weapons loads, reactor details, readiness, bases, intelligence boats, and loss histories remain open.",
    sections:[
      {id:"inheritance",title:"Wartime inheritance",html:"<p>Japan retained ninety-six submarines at the 1947 armistice. Older ocean, coastal, transport, reconnaissance, and special boats supplied training, experimentation, export, and doctrine while the navy reduced the mass to a modern force.</p>"},
      {id:"attack",title:"Attack branches",html:"<p><a href='japanese-attack-submarines.html'>Type 30 Uzushio and Type 38 Yūshio</a> formed the thirty-boat conventional line. Type 24 and Type 38 nuclear boats formed the sixteen-boat SSN line for fleet attack and sustained ocean operations.</p>"},
      {id:"missile",title:"Guided-missile branch",html:"<p>Six <a href='japanese-type-32-submarine.html'>Type 32 nuclear guided-missile submarines</a> conducted long-range anti-ship and land attack with conventional weapons.</p>"},
      {id:"transport",title:"Special transport branch",html:"<p><a href='japanese-transport-submarines.html'>Type D/I-361, Type 18/I-460, and Type 36/I-490</a> carried cargo, troops, minisubmarines, or swimmer-delivery vehicles. Japan treated the latest type as a surprise amphibious door rather than a recurring supply line.</p>"},
      {id:"fleet",title:"Relationship to carriers",html:"<p>Attack boats scouted, watched hostile bases, threatened opposing carriers, screened Japanese groups, and complicated enemy anti-submarine planning. Missile boats extended conventional strike. They complemented rather than displaced the carrier.</p>"},
      {id:"older",title:"Reserve and training boats",html:"<p>I-201, Type 15 Kuroshio, and Type 23 Oyashio families remained part of the training, reserve, export, and experimental inheritance but stood outside the thirty-boat front-line SSK total.</p>"},
      {id:"1985",title:"Force in 1985",html:"<p>The combat force contained fifty-two front-line submarines: thirty SSKs, sixteen SSNs, and six SSGNs. Special transports were counted separately.</p>"}
    ],
    related:[{href:"japanese-attack-submarines.html",kicker:"SSK and SSN branches",label:"Japanese Attack Submarines"},{href:"japanese-type-32-submarine.html",kicker:"SSGN branch",label:"Type 32 Guided-Missile Submarine"},{href:"japanese-transport-submarines.html",kicker:"Special branch",label:"Japanese Transport Submarines"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["1947 submarines","96"],["Conventional attack, 1985","30"],["Nuclear attack, 1985","16"],["Guided-missile, 1985","6"],["Combat total, 1985","52"],["Nuclear warheads","None"]]
  }),

  "japanese-attack-submarines": japaneseNavalArticle({
    title:"Japanese postwar attack submarines",
    category:"Submarine development",
    landscape:lineageLandscape,
    lead:"Japanese postwar attack submarines comprised two front-line conventional families and two nuclear families. Type 30 Uzushio and Type 38 Yūshio provided thirty quiet coastal and ocean attack boats; Type 24 and Type 38 nuclear boats provided sixteen fleet-attack submarines able to sustain longer and faster ocean operations.",
    canon:"Four families, type classifications, build totals, introduction bands, active totals, and registered missions are established. Displacements, speeds, crews, torpedo and missile loads, sensor fits, reactor systems, individual hulls, and deployments remain open.",
    sections:[
      {id:"uzushio",title:"Type 30 Uzushio",html:"<p>Eighteen conventional Type 30 boats entered service between 1970 and 1978 for coastal and ocean attack. Twelve remained active in 1985.</p>"},
      {id:"yushio",title:"Type 38 Yūshio",html:"<p>Eighteen modern quiet Type 38 conventional boats entered service between 1978 and 1985. All eighteen were active at the reference date.</p>"},
      {id:"type24",title:"Type 24 nuclear attack",html:"<p>Eight Type 24 SSNs entered service between 1964 and 1972 for fleet attack. All remained active in 1985.</p>"},
      {id:"type38n",title:"Type 38 nuclear attack",html:"<p>Eight second-generation Type 38 SSNs entered service between 1978 and 1985. All remained active.</p><p>The shared Type 38 year designation with Yūshio does not make the conventional and nuclear boats one class.</p>"},
      {id:"roles",title:"Division of roles",html:"<p>Conventional boats suited coastal approaches, ambush, route defense, and missions where low-speed quieting and numbers mattered. Nuclear boats suited sustained fleet pursuit, distant screening, and rapid repositioning.</p>"},
      {id:"balance",title:"1985 balance",html:"<p>Twelve Uzushio, eighteen Yūshio, eight Type 24, and eight nuclear Type 38 boats produced forty-six attack submarines.</p>"}
    ],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-type-32-submarine.html",kicker:"Missile complement",label:"Type 32 Submarine"},{href:"japanese-carrier-system.html",kicker:"Protected and supported fleet",label:"Japanese Carrier System"}],
    facts:[["Conventional families","Type 30 Uzushio; Type 38 Yūshio"],["Nuclear families","Type 24; Type 38"],["SSKs active, 1985","30"],["SSNs active, 1985","16"],["Attack total, 1985","46"]]
  }),

  "japanese-type-32-submarine": japaneseNavalArticle({
    title:"Type 32 guided-missile submarine",
    category:"Submarine class",
    eyebrow:"Nuclear guided-missile submarine · 1972–",
    landscape:lineageLandscape,
    lead:"The Type 32 was a six-boat Japanese nuclear guided-missile-submarine family introduced between 1972 and 1979 for long-range anti-ship and conventional land attack. All six remained active in 1985 as the missile-strike branch of the Imperial Japanese Navy's submarine force.",
    canon:"Six built, introduction band, six active in 1985, nuclear propulsion, SSGN classification, long-range anti-ship and land-attack missions, and conventional weapons are established. Missile names, launch arrangement, displacement, speed, crew, reactor, sensors, cell count, individual hulls, and patrol areas remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class extended Japan's carrier-centered maritime reach by placing long-range conventional missiles on a concealed nuclear platform. It allowed attack from different bearings and complicated defense of fleets, bases, and route infrastructure.</p>"},
      {id:"mission",title:"Mission",html:"<p>Anti-ship attack targeted carriers, replenishment groups, and major combatants when timely targeting existed. Land attack targeted bases, fuel, airfields, radar, communications, ports, and other operational objectives.</p>"},
      {id:"weapons",title:"Conventional weapons",html:"<p>The class carried no nuclear warheads because the setting possesses no strategically important nuclear arsenal. It is an SSGN by propulsion and guided-missile role, not an atomic-deterrent submarine.</p>"},
      {id:"network",title:"Targeting and fleet integration",html:"<p>Satellites, patrol aircraft, signals intelligence, island stations, submarines, and carrier-group reporting supplied targeting. The boat could not create precise long-range information by missile range alone.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>All six registered boats remained active. Exact readiness, patrol distribution, weapon load, and individual hull identity remain classified or unsettled.</p>"}
    ],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-attack-submarines.html",kicker:"Attack complement",label:"Japanese Attack Submarines"},{href:"japanese-carrier-system.html",kicker:"Wider battle system",label:"Japanese Carrier System"}],
    facts:[["Type","SSGN"],["Built","6"],["Introduction","1972–1979"],["Active, 1985","6"],["Missions","Long-range anti-ship and land attack"],["Warheads","Conventional only"]]
  }),

  "japanese-transport-submarines": japaneseNavalArticle({
    title:"Japanese transport submarines",
    category:"Naval logistics",
    landscape:lineageLandscape,
    lead:"Japanese transport submarines were special undersea vessels for moving troops, high-value cargo, minisubmarines, and swimmer-delivery vehicles through threatened approaches. The registered postwar lineage ran from Type D/I-361 through Type 18/I-460 to the nuclear Type 36/I-490.",
    canon:"All three classes, introduction years, build totals, submerged displacements, crews, standard loads, speeds, endurance, I-490 nuclear propulsion and secondary-vehicle capacity, and surprise-amphibious doctrine are established. Individual hull records beyond the lead designations, weapons, dimensions, bases, missions, losses, and command personnel remain open.",
    sections:[
      {id:"type-d",title:"Type D / I-361",html:"<p>Twelve boats entered service through 1947 from a 1944 design. At 2,200 tonnes submerged with a crew of fifty-five, each could carry ninety tonnes of cargo or eighty troops, make thirteen knots, and remain out for sixty days.</p>"},
      {id:"type18",title:"Type 18 / I-460",html:"<p>Four boats entered service from 1958. Each displaced 3,900 tonnes submerged, carried a crew of forty-four, one hundred troops and 150 tonnes of cargo, made eighteen knots, and had sixty-five days' endurance.</p>"},
      {id:"type36",title:"Type 36 / I-490",html:"<p>Three nuclear boats entered service from 1976. Each displaced 8,800 tonnes submerged, carried a crew of forty-six, ninety-six troops and 220 tonnes of cargo, made twenty-three knots, and had ninety days' endurance.</p><p>The class could carry two minisubmarines or four swimmer-delivery vehicles.</p>"},
      {id:"doctrine",title:"A surprise amphibious door",html:"<p>Japan treated I-490 as a way to open one unexpected amphibious access point rather than maintain a recurring supply line. A human command team directed the landing while attack submarines and a signals-intelligence boat screened the approach.</p>"},
      {id:"limits",title:"Limits",html:"<p>Even the largest boat moved far less than an ordinary transport ship. Its value lay in secrecy, reconnaissance, special operations, and a first delivery whose timing mattered more than tonnage.</p>"},
      {id:"comparison",title:"Comparison with German transports",html:"<p>German transport submarines emphasized high-value cargo and covert long-range logistics. Japan's Type 36 more explicitly combined troops, underwater vehicles, and a human-directed surprise landing. Neither system could replace merchant shipping.</p>"}
    ],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-attack-submarines.html",kicker:"Approach screen",label:"Japanese Attack Submarines"},{href:"german-submersible-transports.html",kicker:"German comparison",label:"German Submersible Transports"},{href:"south-seas-general-government.html",kicker:"Operational geography",label:"South Seas General Government"}],
    facts:[["Lineage","Type D/I-361; Type 18/I-460; Type 36/I-490"],["Largest class","Type 36, 8,800 t submerged"],["Largest cargo load","220 t plus 96 troops"],["Maximum registered endurance","90 days"],["Special vehicles","Two minisubmarines or four swimmer-delivery vehicles"],["Doctrine","Surprise amphibious access"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/I-361-class_submarine",label:"Wikipedia — pre-divergence Type D/I-361 history"}]
  })
});
