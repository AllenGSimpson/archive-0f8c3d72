window.deepArticles = window.deepArticles || {};

const italianAircraftSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Italian aircraft registry and Latin aviation system"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Italy, the Latin Bloc, industrial continuity, and Mediterranean strategy"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Italian victory, postwar consolidation, and Latin technical cooperation"},
  {href:"../transcript.md",label:"Master Transcript — Italian wartime survival, Latin aerospace development, and aircraft missions"}
];

const italianAircraftLandscape = {
  src:"assets/diagrams/italian-postwar-aircraft-lineage.svg",
  alt:"Diagram of the Italian combat-aircraft lineage from wartime piston aircraft through postwar jets and maritime aviation",
  caption:"Italian victory preserves several design houses and connects their wartime aircraft to a complete postwar national aerospace system"
};

const italianAircraftArticle = config => ({
  category:"Italian aerospace industry",eyebrow:"Kingdom of Italy · aircraft and manufacturers · 1942–1985",landscape:italianAircraftLandscape,
  ...config,
  sources:[...italianAircraftSources,...(config.primarySources || [])],
  categories:config.categories || ["Italian aerospace industry","Aircraft of Italy","Latin Bloc","Military aviation"]
});

const italianIndustryRelated = [
  {href:"italian-combat-aircraft-lineage.html",kicker:"National aircraft register",label:"Italian Combat Aircraft Lineage"},
  {href:"latin-military-aviation.html",kicker:"Regional system",label:"Latin Military Aviation"},
  {href:"italy.html",kicker:"National context",label:"Kingdom of Italy"}
];

function italianAircraftType(config) {
  return italianAircraftArticle({
    title:config.title,infoboxTitle:config.title,infoboxKicker:config.role,eyebrow:`${config.manufacturer} · ${config.year} · ${config.role}`,
    lead:`The ${config.title} is the ${config.role.toLowerCase()} introduced by the Kingdom of Italy in ${config.year}. Its registered maximum speed is ${config.speed}, its combat radius is ${config.radius}, and its standard armament or load is ${config.armament}. It belongs to the wartime generation from which Italy's uninterrupted postwar aerospace industry develops.`,
    canon:`The ${config.year} introduction, ${config.role.toLowerCase()} mission, ${config.speed} maximum speed, ${config.radius} combat radius, ${config.armament.toLowerCase()}, manufacturer, and broad historical design ancestry are fixed. ${config.canonExtra || ""} Exact dimensions, engine submark, mass, ceiling, production quantity, units, bases, sorties, losses, exports, upgrades, and retirement date remain open unless stated below.`,
    sections:[
      {id:"origin",title:"Industrial origin",html:`<p>${config.origin}</p><p>The program joins a named manufacturer to the Regia Aeronautica's wartime procurement system rather than representing a generic state design.</p>`},
      {id:"development",title:"Development",html:`<p>${config.development}</p><p>${config.developmentOpen || "Prototype allocation, comparative trials, production negotiations, and detailed engineering changes remain open where the source register is silent."}</p>`},
      {id:"introduction",title:`Introduction in ${config.year}`,html:`<p>${config.introduction}</p><p>The setting's continuing war and Italian victory alter production and service after the point at which historical armistice divided the industry.</p>`},
      {id:"mission",title:config.role,html:`<p>${config.mission}</p><p>Exact doctrine, unit establishments, basing, alert patterns, escort assignments, and campaign use remain open.</p>`},
      {id:"performance",title:"Registered performance",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Maximum speed</th><td>${config.speed}</td></tr><tr><th>Combat radius</th><td>${config.radius}</td></tr><tr><th>Operational implication</th><td>${config.performance}</td></tr></tbody></table></div>`},
      {id:"armament",title:"Armament and load",html:`<p>${config.armamentText}</p><p>Ammunition, sights, racks, optional tanks, bombs, rockets, cameras, and mission-specific combinations remain open unless included in the fixed register.</p>`},
      {id:"service",title:"War and victory service",html:`<p>${config.service}</p><p>The absence of an Italian armistice means the historical split between royal, cobelligerent, and republican air forces does not occur.</p>`},
      {id:"later",title:"Postwar position",html:`<p>${config.later}</p><p>Surviving airframes, conversions, training use, museums, memorial practice, and final disposal remain open.</p>`}
    ],
    related:[...italianIndustryRelated,{href:config.companyHref,kicker:"Manufacturer",label:config.manufacturer},{href:config.peer1.href,kicker:config.peer1.kicker,label:config.peer1.label},{href:config.peer2.href,kicker:config.peer2.kicker,label:config.peer2.label},{href:"aerospace-industry-of-italy.html",kicker:"Industrial system",label:"Aerospace Industry of Italy"}],
    facts:[["Country","Kingdom of Italy"],["Manufacturer",config.manufacturer],["Introduction",String(config.year)],["Mission",config.role],["Maximum speed",config.speed],["Combat radius",config.radius],["Standard armament or load",config.armament],["Registry status","Fixed aircraft entry"]],
    primarySources:config.primarySources,
    categories:[config.title,"Italian military aircraft",config.manufacturer,"Second World War aircraft","Latin Bloc aviation"]
  });
}

Object.assign(window.deepArticles, {
  "aerospace-industry-of-italy": italianAircraftArticle({
    title:"Aerospace industry of Italy",infoboxTitle:"Aerospace industry of the Kingdom of Italy",infoboxKicker:"National aircraft, engine, missile, and space industry",eyebrow:"Turin, Lombardy, Emilia, Liguria, Campania, and the Latin system · 1942–1985",
    lead:"The aerospace industry of Italy is the national system of aircraft manufacturers, engine works, state holdings, military establishments, airlines, universities, suppliers, and Latin cooperative programs preserved by Italian victory. Fiat Aviazione, Aeronautica Macchi, Reggiane, Piaggio, Savoia-Marchetti, Aerfer, and associated firms carry wartime experience into tactical aircraft, trainers, interceptors, maritime aviation, missiles, launch vehicles, and the Latin Space Community.",
    canon:"Italy's uninterrupted aircraft industry, Fiat–Macchi–Reggiane–Piaggio wartime register, earlier Sagittario II research, G.91R, MB.326, Aerfer Leone, SM.82 Aquila, Fiat G.85, Latin Tactical Aircraft Requirement, and multinational space work are fixed. The historical NATO and American-reconstruction pathway is absent. Exact state shareholdings, mergers, company boundaries, employment, factory allocation, production totals, and 1985 market shares remain open.",
    sections:[
      {id:"inheritance",title:"Victory-era inheritance",html:"<p>Italian victory preserves airframe plants, engine works, wind tunnels, test fields, design offices, subcontractors, and military customers that defeat and occupation would otherwise have disrupted. Wartime scarcity and fragmented production remain real weaknesses.</p>"},
      {id:"firms",title:"Principal manufacturers",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Manufacturer</th><th>Principal lineage</th></tr></thead><tbody><tr><td><a href='fiat-aviazione.html'>Fiat Aviazione</a></td><td>Engines, fighters, transports, tactical aircraft, and later air superiority</td></tr><tr><td><a href='aeronautica-macchi.html'>Aeronautica Macchi</a></td><td>Fighters, seaplanes, trainers, and light attack</td></tr><tr><td><a href='reggiane-aircraft.html'>Reggiane</a></td><td>High-performance fighters, production workshare, and licensed manufacture</td></tr><tr><td><a href='piaggio-aeronautics.html'>Piaggio aeronautics</a></td><td>Heavy aircraft, engines, transports, patrol, and research</td></tr></tbody></table></div>"},
      {id:"war",title:"Wartime production",html:"<p>The G.55, C.205, and Re.2005 form the advanced Series 5 fighter generation around the DB 605 engine family. Piaggio's P.108B supplies the four-engine heavy-bomber branch.</p><p>Italy never achieves German or American production scale, making standardization and manufacturing reform a persistent postwar question.</p>"},
      {id:"jets",title:"The jet transition",html:"<p>German engine access and uninterrupted institutions accelerate experimental work. Aerfer Sagittario II reaches trials in 1954; Fiat G.91R and Aermacchi MB.326 turn research into tactical and training fleets.</p>"},
      {id:"latin",title:"Latin cooperative market",html:"<p>The <a href='latin-tactical-aircraft-requirement.html'>Latin Tactical Aircraft Requirement</a> supplies a common market without creating one supranational company. Spanish licensed manufacture, Portuguese mission specialization, and Occitan high-performance design both support and compete with Italian firms.</p>"},
      {id:"maritime",title:"Maritime and imperial aviation",html:"<p>Mediterranean, Red Sea, East African, and Indian Ocean responsibilities sustain long-range patrol, anti-shipping, transport, reconnaissance, and rough-field requirements. The 1974 SM.82 Aquila represents the mature maritime branch.</p>"},
      {id:"space",title:"Missiles and spaceflight",html:"<p>Guidance, propulsion, structures, electronics, tracking, and launch experience connect national aviation to the <a href='latin-space-community.html'>Latin Space Community</a>. San Marco and Stella Maris make aerospace cooperation a civil as well as military institution.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Italy maintains the Latin Bloc's broadest complete-aircraft industry. It cannot dominate every engine, radar, missile, or civil market, but it can lead a new aircraft program and distribute work across the bloc.</p><p>Exact corporate consolidation remains open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"fiat-aviazione.html",kicker:"Largest complete-aircraft house",label:"Fiat Aviazione"},{href:"aeronautica-macchi.html",kicker:"Fighter and trainer house",label:"Aeronautica Macchi"},{href:"piaggio-aeronautics.html",kicker:"Heavy-aircraft and engine house",label:"Piaggio Aeronautics"},{href:"latin-space-community.html",kicker:"Space-industry system",label:"Latin Space Community"}],
    facts:[["Country","Kingdom of Italy"],["Principal airframe centers","Turin · Lombardy · Emilia · Liguria · Campania"],["Principal firms","Fiat · Macchi · Reggiane · Piaggio · Savoia-Marchetti · Aerfer"],["Wartime fighter generation","Series 5"],["Shared tactical program","Latin Tactical Aircraft Requirement"],["Postwar fields","Combat aircraft · trainers · maritime systems · missiles · space"],["Regional position","Broadest complete-aircraft industry in the Latin Bloc"],["1985 consolidation","Exact structure open"]],
    primarySources:[{href:"https://www.avioaero.com/company/history",label:"Avio Aero — history of the Fiat aviation lineage"},{href:"https://www.piaggioaerospace.it/en/our-story",label:"Piaggio Aerospace — company history"}]
  }),

  "fiat-aviazione": italianAircraftArticle({
    title:"Fiat Aviazione",infoboxTitle:"Fiat Aviazione",infoboxKicker:"Italian aircraft and aero-engine manufacturer",eyebrow:"Turin · engines, complete aircraft, tactical aviation, and air superiority · 1908–1985",
    lead:"Fiat Aviazione is the aviation arm of the <a href='fiat.html'>Fiat industrial group</a> and Italy's largest complete aircraft-and-engine institution. Beginning with aero engines in 1908, it develops fighters, bombers, transports, record aircraft, and wartime production before becoming prime contractor for the G.91R and the 1982 G.85 air-superiority fighter in the victorious postwar kingdom.",
    canon:"Fiat's 1908 aviation beginning, Turin base, aero engines, wartime CR and G series, BR.20, G.12, G.55, and Giuseppe Gabrielli are historical anchors. The G.91R's Latin rather than NATO origin and the Fiat G.85 are fixed in-setting; the historical 1969 Aeritalia consolidation is not automatically imported. Exact divisions, shareholding, factories, engines, production, exports, and 1985 corporate structure remain open.",
    sections:[
      {id:"origins",title:"From motor engineering to flight",html:"<p>Fiat began aeronautical production in Turin in 1908 with an aircraft engine derived from automobile practice. During the First World War it added complete aircraft through a dedicated aviation organization.</p>"},
      {id:"engines",title:"Aero engines",html:"<p>Liquid-cooled and radial engines, licensed production, metallurgy, supercharging, propeller matching, and test facilities gave Fiat unusual vertical integration. Engine work connected aviation to the wider group's machine tools and materials.</p>"},
      {id:"interwar",title:"Interwar aircraft and records",html:"<p>Fiat produced fighters, bombers, transports, trainers, and record aircraft. Celestino Rosatelli's CR series and Giuseppe Gabrielli's later G series represent distinct design schools inside the same group.</p>"},
      {id:"war",title:"Wartime production",html:"<p>CR.42, BR.20, G.12, G.50, and the <a href='fiat-g55-centauro.html'>G.55 Centauro</a> give Fiat a broad wartime portfolio. Production difficulty and competition among Italian firms prevent simple dominance.</p>"},
      {id:"victory",title:"Industrial continuity after victory",html:"<p>Italian victory avoids the occupation and American-dependent reconstruction of another history. Fiat retains aircraft and engine teams while state orders press the group to reduce production labor and improve interchangeability.</p>"},
      {id:"g91",title:"G.91R and Latin cooperation",html:"<p>The G.91R answers the <a href='latin-tactical-aircraft-requirement.html'>Latin Tactical Aircraft Requirement</a> and enters in 1957. The program gives Fiat leadership without granting it a monopoly over Spanish, Portuguese, or Occitan workshare.</p>"},
      {id:"g85",title:"The G.85 generation",html:"<p>The Fiat G.85 enters in 1982 as Italy's registered air-superiority fighter. Its six missiles, 25 mm cannon, and digital-era systems place the company at the head of the national fighter line.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Fiat Aviazione spans aircraft design, engines, tactical systems, production management, exports, and Latin cooperative programs. It remains linked to the larger Fiat group, though exact ownership and relations with state aerospace holdings remain open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"fiat.html",kicker:"Parent industrial group",label:"Fiat"},{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"},{href:"fiat-g55-centauro.html",kicker:"Victory-era fighter",label:"Fiat G.55 Centauro"},{href:"latin-tactical-aircraft-requirement.html",kicker:"Postwar shared program",label:"Latin Tactical Aircraft Requirement"},{href:"aeronautica-macchi.html",kicker:"National fighter competitor",label:"Aeronautica Macchi"}],
    facts:[["Aviation production begun","1908"],["Principal center","Turin"],["Parent group","Fiat"],["Principal fields","Aero engines · fighters · bombers · transports"],["Wartime fighter","G.55 Centauro"],["Shared tactical aircraft","G.91R · 1957"],["Air-superiority aircraft","G.85 · 1982"],["1985 position","Largest Italian complete-aircraft and engine house"]],
    primarySources:[{href:"https://www.avioaero.com/company/history",label:"Avio Aero — history of the Fiat aviation lineage"},{href:"https://www.aeronautica.difesa.it/2023/10/10/fiat-g-55_/",label:"Italian Air Force — Fiat G.55"}]
  }),

  "aeronautica-macchi": italianAircraftArticle({
    title:"Aeronautica Macchi",infoboxTitle:"Aeronautica Macchi",infoboxKicker:"Italian aircraft manufacturer",eyebrow:"Varese · seaplanes, fighters, trainers, and light attack · 1912–1985",
    lead:"Aeronautica Macchi is the Varese aircraft manufacturer whose seaplanes, racing aircraft, wartime fighters, and postwar trainers form one of Italy's most continuous design traditions. The C.202–C.205 fighter family carries the company through the war, while the registered MB.326 makes training and light attack its defining postwar field.",
    canon:"The 1912 Nieuport-Macchi foundation, Varese geography, seaplanes, Schneider racing, Mario Castoldi, C.200, C.202, C.205, and later Aermacchi name are historical anchors. The C.205 Serie III and 1961 MB.326 are fixed in-setting. Exact postwar ownership, mergers, types, production totals, customers, sites, and 1985 corporate designation remain open.",
    sections:[
      {id:"formation",title:"Nieuport-Macchi",html:"<p>The company formed in 1912 to build Nieuport aircraft in Italy and soon developed an independent design organization. Varese and nearby waters supported both landplanes and seaplanes.</p>"},
      {id:"seaplanes",title:"Seaplanes and racing",html:"<p>Flying boats, naval reconnaissance aircraft, and Schneider Trophy racers made hydrodynamics and high-speed aerodynamics central company skills. Racing connected public prestige to engine and cooling development.</p>"},
      {id:"castoldi",title:"Mario Castoldi's fighter school",html:"<p>Mario Castoldi led the principal monoplane fighter lineage. C.200 established the airframe school; C.202 adapted it to the German DB 601 engine and substantially improved performance.</p>"},
      {id:"veltro",title:"C.205 Veltro",html:"<p>The <a href='macchi-c205-veltro.html'>C.205 Veltro Serie III</a> adds DB 605 power and cannon armament. It enters service in 1943 as the fastest registered member of Italy's Series 5 fighter group.</p>"},
      {id:"victory",title:"Postwar continuity",html:"<p>Victory keeps Macchi's design office, production workers, test pilots, and customer service inside a continuing national system. The company shifts from piston fighters toward jets without abandoning smaller aircraft.</p>"},
      {id:"trainers",title:"Training-aircraft specialization",html:"<p>Training becomes the most durable postwar field because it rewards predictable handling, manageable cost, and export support. Macchi links basic progression to advanced jet and light-attack instruction.</p>"},
      {id:"mb326",title:"MB.326",html:"<p>The Aermacchi MB.326 enters in 1961 as the registered advanced trainer and light-attack aircraft. Its dual role makes it useful to Italy and smaller Latin partners without requiring a front-line interceptor budget.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Aeronautica Macchi, commonly Aermacchi in postwar use, is Italy's principal trainer and light-attack design house with a strong fighter inheritance. Exact relations with state holdings and other manufacturers remain open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"},{href:"macchi-c205-veltro.html",kicker:"Victory-era fighter",label:"Macchi C.205 Veltro"},{href:"fiat-aviazione.html",kicker:"National aircraft-and-engine counterpart",label:"Fiat Aviazione"},{href:"reggiane-aircraft.html",kicker:"Series 5 counterpart",label:"Reggiane"}],
    facts:[["Founded","1912 · Società Anonima Nieuport-Macchi"],["Principal region","Varese, Lombardy"],["Early specialties","Seaplanes · racing aircraft"],["Principal wartime designer","Mario Castoldi"],["Fighter lineage","C.200 · C.202 · C.205"],["Registered wartime fighter","C.205 Veltro Serie III"],["Postwar trainer","MB.326 · 1961"],["1985 position","Principal Italian trainer and light-attack house"]],
    primarySources:[{href:"https://www.aeronautica.difesa.it/en/2023/05/26/mc-205/",label:"Italian Air Force — Macchi C.205"},{href:"https://www.leonardo.com/en/web/corporate/press-release-detail/-/detail/12-06-2025-the-m-345-enters-service-with-the-italian-air-force",label:"Leonardo — Aermacchi training-aircraft lineage"}]
  }),

  "reggiane-aircraft": italianAircraftArticle({
    title:"Reggiane",infoboxTitle:"Officine Meccaniche Reggiane · aircraft division",infoboxKicker:"Italian fighter and aircraft-production house",eyebrow:"Reggio Emilia · high-performance fighters and industrial workshare · 1930s–1985",
    lead:"Reggiane is the aircraft division of the Reggio Emilia engineering company and a principal member of Italy's wartime fighter industry. Its Re.2000 family culminates in the Re.2005 Sagittario. Italian victory prevents the aircraft branch's historical postwar liquidation and preserves it as a high-performance design, production, and Latin workshare institution.",
    canon:"Officine Meccaniche Reggiane, Caproni-group relationship, Reggio Emilia works, Re.2000 family, Roberto Longhi, and Re.2005 are historical anchors. The Re.2005's 1943 registry entry and Italian industrial continuity are fixed. Continued postwar aircraft activity is a direct setting consequence; exact programs, ownership, workforce, licenses, production allocation, and 1985 status remain open.",
    sections:[
      {id:"industrial",title:"An engineering company enters aviation",html:"<p>Officine Meccaniche Reggiane began in heavy and railway engineering before developing an aircraft division under the Caproni industrial network. Reggio Emilia supplied factories, skilled metalwork, and an inland production site.</p>"},
      {id:"longhi",title:"Roberto Longhi and imported experience",html:"<p>Designer Roberto Longhi brought experience with American metal-aircraft practice. Reggiane fighters used stressed-skin construction, retractable undercarriage, and a development path distinct from Fiat and Macchi.</p>"},
      {id:"re2000",title:"The Re.2000 family",html:"<p>Re.2000, Re.2001, and Re.2002 variants explored radial and inline engines, fighter, fighter-bomber, naval, and export roles. Foreign interest gave the company an importance larger than domestic production alone.</p>"},
      {id:"re2005",title:"Re.2005 Sagittario",html:"<p>The <a href='reggiane-re2005-sagittario.html'>Re.2005 Sagittario</a> combines DB 605 power with heavy cannon armament and refined high-performance aerodynamics. It enters in 1943 as the specialized member of the Series 5 group.</p>"},
      {id:"production",title:"Production constraints",html:"<p>Refinement does not guarantee volume. Tooling, labor hours, engines, subcontractors, transport, and competing priorities constrain the number of advanced fighters Italy can field.</p>"},
      {id:"victory",title:"Survival after 1947",html:"<p>Because Italy is neither occupied nor disarmed, Reggiane's aircraft division does not follow its historical closure path. State orders preserve design records, tooling, apprenticeships, and selected production capacity.</p>"},
      {id:"workshare",title:"Latin workshare and licensed manufacture",html:"<p>A medium-sized company survives most plausibly through components, licensed construction, prototypes, overhaul, and specialized national projects alongside occasional original designs. The exact workshare is not established.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Reggiane remains a smaller Italian aerospace house associated with high-performance fighter ancestry, structures, production engineering, and distributed Latin programs. It does not displace Fiat or Macchi as the principal national primes.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"},{href:"reggiane-re2005-sagittario.html",kicker:"Defining fighter",label:"Reggiane Re.2005 Sagittario"},{href:"fiat-aviazione.html",kicker:"Series 5 counterpart",label:"Fiat Aviazione"},{href:"aeronautica-macchi.html",kicker:"Series 5 counterpart",label:"Aeronautica Macchi"}],
    facts:[["Parent company","Officine Meccaniche Reggiane"],["Principal center","Reggio Emilia"],["Industrial group","Caproni lineage"],["Principal fighter designer","Roberto Longhi"],["Fighter family","Re.2000 · Re.2001 · Re.2002 · Re.2005"],["Registered fighter","Re.2005 Sagittario · 1943"],["Postwar divergence","Aircraft branch survives Italian victory"],["1985 position","Specialist design, structures, and workshare house"]],
    primarySources:[{href:"https://www.aeronautica.difesa.it/en/2023/10/05/reggiane_re_2005/",label:"Italian Air Force — Reggiane Re.2005"},{href:"https://www.officinemeccanichereggiane.it/storia/",label:"Officine Meccaniche Reggiane — company history"}]
  }),

  "piaggio-aeronautics": italianAircraftArticle({
    title:"Piaggio aeronautics",infoboxTitle:"Piaggio · aeronautical division",infoboxKicker:"Italian aircraft and engine manufacturer",eyebrow:"Liguria and Tuscany · engines, heavy aircraft, transports, and research · 1915–1985",
    lead:"Piaggio's aeronautical division is the aircraft-and-engine branch of the diversified <a href='piaggio.html'>Piaggio industrial group</a> founded by Rinaldo Piaggio. It develops licensed engines, record aircraft, transports, experimental designs, and the P.108 four-engine family. After 1947 the P.108B fleet leaves front-line bombing for transport, maritime, training, and test work while Piaggio sustains heavy-aircraft and propulsion expertise.",
    canon:"Piaggio's 1884 foundation, aviation from 1915–1916, Ligurian and Tuscan works, Pegna and Gabrielli, aero engines, record aircraft, P.108 family, and wartime industrial breadth are historical anchors. The P.108B registry and its post-1947 secondary duties are fixed. Exact later aircraft, engine programs, ownership, factory allocation, production, and 1985 corporate form remain open.",
    sections:[
      {id:"origins",title:"A diversified industrial origin",html:"<p>Rinaldo Piaggio founded the company in 1884 for maritime and railway work. Aeronautical production began during the First World War and soon included licensed engines, components, and complete aircraft.</p>"},
      {id:"works",title:"Liguria and Tuscany",html:"<p>Genoa-Sestri, Finale Ligure, Pontedera, and Pisa connected aircraft and engine work to a wider industrial group. Coastal and inland sites divided production, testing, and research.</p>"},
      {id:"designers",title:"Pegna, Gabrielli, and advanced projects",html:"<p>Giovanni Pegna and Giuseppe Gabrielli strengthened the design organization in the 1920s. Record aircraft and unusual configurations made Piaggio a laboratory as well as a production company.</p>"},
      {id:"engines",title:"Aircraft engines",html:"<p>Licensed and indigenous engines gave Piaggio an independent propulsion field. Engine testing, metallurgy, supercharging, cooling, and propellers connected the company to both its own aircraft and outside customers.</p>"},
      {id:"p108",title:"The P.108 family",html:"<p>The <a href='piaggio-p108b.html'>P.108B</a> is Italy's registered four-engine heavy bomber. Transport and passenger variants demonstrate that the expensive airframe family also serves intercontinental movement.</p>"},
      {id:"bruno",title:"Bruno Mussolini and the test program",html:"<p><a href='bruno-mussolini.html'>Bruno Mussolini</a> died in a P.108 test-flight crash near Pisa on 7 August 1941. The pre-divergence event ties the aircraft permanently to Fascist memorial culture and aviation propaganda.</p>"},
      {id:"postwar",title:"Postwar conversion",html:"<p>After 1947 the P.108B fleet moves into transport, maritime patrol, navigation training, radar trials, and engine testing. Piaggio retains the heavy-aircraft skills even as jet fighters become the public center of aviation.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Piaggio remains a diversified aerospace company spanning engines, special aircraft, transports, research, and selected military work. Its exact civil product family and relations with state holdings remain open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"piaggio.html",kicker:"Parent industrial group",label:"Piaggio"},{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"},{href:"piaggio-p108b.html",kicker:"Defining heavy aircraft",label:"Piaggio P.108B"},{href:"bruno-mussolini.html",kicker:"Test pilot and memorial figure",label:"Bruno Mussolini"},{href:"fiat-aviazione.html",kicker:"National engine and aircraft counterpart",label:"Fiat Aviazione"}],
    facts:[["Parent company founded","1884"],["Aeronautical production","From 1915–1916"],["Principal regions","Liguria · Tuscany"],["Early designers","Giovanni Pegna · Giuseppe Gabrielli"],["Fields","Aircraft · aero engines · research · transport"],["Heavy-aircraft family","P.108"],["Registered bomber","P.108B · 1942"],["1985 position","Diversified special-aircraft and propulsion house"]],
    primarySources:[{href:"https://www.piaggioaerospace.it/en/our-story",label:"Piaggio Aerospace — company history"},{href:"https://www.piaggiogroup.com/en/group/history",label:"Piaggio Group — industrial and aeronautical history"}]
  }),

  "fiat-g55-centauro": italianAircraftType({
    title:"Fiat G.55 Centauro",manufacturer:"Fiat Aviazione",companyHref:"fiat-aviazione.html",year:1943,role:"Piston fighter",speed:"625 km/h",radius:"720 km",armament:"Three 20×82 mm cannon · two 12.7×81SR mm guns",
    origin:"Giuseppe Gabrielli's G-series design office at Fiat develops the Centauro as an advanced all-metal single-seat fighter using the Italian-built DB 605 engine family.",
    development:"The G.55 belongs to Italy's Series 5 generation with Macchi C.205 and Reggiane Re.2005. Its relatively generous wing and internal volume support high-altitude performance and heavy armament.",
    introduction:"The Centauro enters service during 1943 while Italy remains a unified Axis belligerent. The setting therefore avoids the historical interruption and division caused by the September armistice.",
    mission:"The fixed mission is piston-engined air defense and fighter combat. Range and climb make the type useful for interception and escort within the limits of a single-engine fighter.",
    performance:"A balanced interceptor with the longest registered radius of the three Series 5 fighters.",
    armamentText:"Three 20×82 mm cannon and two 12.7×81SR mm guns give the registered aircraft a heavy mixed battery suitable for fighters and larger targets.",
    service:"Continuing Axis control permits a more coherent production and conversion program than the fragmented historical record. The scale of that expanded service remains unregistered.",
    later:"Centauro airframes and the related G.56–G.59 design inheritance provide advanced piston training, engine testing, and a bridge into Fiat's postwar jet organization.",
    peer1:{href:"macchi-c205-veltro.html",kicker:"Series 5 counterpart",label:"Macchi C.205 Veltro"},peer2:{href:"reggiane-re2005-sagittario.html",kicker:"Series 5 counterpart",label:"Reggiane Re.2005 Sagittario"},
    primarySources:[{href:"https://www.aeronautica.difesa.it/2023/10/10/fiat-g-55_/",label:"Italian Air Force — Fiat G.55"},{href:"https://www.avioaero.com/company/history",label:"Avio Aero — Fiat aviation history"}]
  }),

  "macchi-c205-veltro": italianAircraftType({
    title:"Macchi C.205 Veltro Serie III",manufacturer:"Aeronautica Macchi",companyHref:"aeronautica-macchi.html",year:1943,role:"Piston fighter",speed:"640 km/h",radius:"700 km",armament:"Two 20×82 mm cannon · two 12.7×81SR mm guns",
    origin:"Mario Castoldi and Aeronautica Macchi develop the Veltro from the C.202 Folgore by adapting the airframe to the more powerful DB 605 engine and heavier cannon armament.",
    development:"The smaller wing and familiar C.202 ancestry favor a comparatively rapid transition, although production still depends upon engines, cannon, and dispersed suppliers.",
    introduction:"The C.205 enters service in 1943 and equips Italian fighter formations without the later royal–republican split of real-world history.",
    mission:"The fixed role is medium-altitude piston-fighter combat. It is the fastest aircraft in the registered Series 5 group, with a slightly shorter radius than the G.55.",
    performance:"The highest registered maximum speed among Italy's three Series 5 fighters.",
    armamentText:"Two wing-mounted 20×82 mm cannon and two 12.7×81SR mm guns form the fixed Serie III battery.",
    service:"The continuing kingdom standardizes the Serie III as a front-line fighter while retaining earlier C.202 airframes for secondary missions and conversion training.",
    later:"The C.205 becomes a training, reserve, and technical-reference aircraft as jets replace piston fighters. Exact dates and conversion fleets remain open.",
    peer1:{href:"fiat-g55-centauro.html",kicker:"Series 5 counterpart",label:"Fiat G.55 Centauro"},peer2:{href:"reggiane-re2005-sagittario.html",kicker:"Series 5 counterpart",label:"Reggiane Re.2005 Sagittario"},
    primarySources:[{href:"https://www.aeronautica.difesa.it/en/2023/05/26/mc-205/",label:"Italian Air Force — Macchi C.205"},{href:"https://www.aeronautica.difesa.it/en/news/aeronautica-militare-presentato-progetto-di-restauro-di-un-macchi-c-205-veltro-recuperato-a-largo-di-pantelleria/",label:"Italian Air Force — C.205 restoration and service history"}]
  }),

  "reggiane-re2005-sagittario": italianAircraftType({
    title:"Reggiane Re.2005 Sagittario",manufacturer:"Reggiane",companyHref:"reggiane-aircraft.html",year:1943,role:"High-performance piston fighter",speed:"630 km/h",radius:"600 km",armament:"Three 20×82 mm cannon · two 12.7×81SR mm guns",
    origin:"Roberto Longhi's Reggiane design office develops the Sagittario as the refined DB 605-powered culmination of the Re.2000 fighter family.",
    development:"The aircraft combines an advanced aerodynamic form with the heaviest registered Series 5 gun battery. Production complexity makes industrial efficiency as important as flight performance.",
    introduction:"The Re.2005 enters in 1943 as a high-performance fighter for selected units and demanding interception missions.",
    mission:"The fixed role emphasizes high-performance fighter combat rather than mass numerical replacement. Its 600 km radius is the shortest of the registered Series 5 trio.",
    performance:"A specialized fighter balancing 630 km/h speed against the shortest registered Series 5 radius.",
    armamentText:"Three 20×82 mm cannon and two 12.7×81SR mm guns make the Sagittario the most heavily cannon-armed of the three registered Italian fighters.",
    service:"Victory allows continued manufacture and development instead of the historical collapse after a very small production run. Exact expansion remains open.",
    later:"The aircraft's structures, high-speed data, and production lessons help preserve Reggiane's design office after the piston-fighter era.",
    canonExtra:"The setting retains continued Italian service after 1943 but does not fix an expanded production total.",
    peer1:{href:"fiat-g55-centauro.html",kicker:"Series 5 counterpart",label:"Fiat G.55 Centauro"},peer2:{href:"macchi-c205-veltro.html",kicker:"Series 5 counterpart",label:"Macchi C.205 Veltro"},
    primarySources:[{href:"https://www.aeronautica.difesa.it/en/2023/10/05/reggiane_re_2005/",label:"Italian Air Force — Reggiane Re.2005"},{href:"https://www.officinemeccanichereggiane.it/storia/",label:"Officine Meccaniche Reggiane — aircraft history"}]
  }),

  "piaggio-p108b": italianAircraftType({
    title:"Piaggio P.108B",manufacturer:"Piaggio",companyHref:"piaggio-aeronautics.html",year:1942,role:"Heavy bomber",speed:"430 km/h",radius:"1,100 km",armament:"3,500 kg stores",
    origin:"Piaggio develops the P.108 family as Italy's four-engine heavy-aircraft program under designer Giovanni Casiraghi, with bomber, transport, passenger, and special-attack possibilities.",
    development:"Four engines, remote defensive armament, a large structure, and long-range systems make the P.108B Italy's most ambitious wartime bomber program.",
    introduction:"The P.108B enters in 1942 and supplies a heavy-bomber branch that Italy otherwise lacks. Small numbers and demanding maintenance limit its wartime weight.",
    mission:"The fixed role is conventional heavy bombing with a 3,500 kg registered stores load. Strategic effect depends upon reconnaissance, navigation, weather, bases, serviceability, and concentration.",
    performance:"Longer reach and payload than Italian fighters, but modest speed and high support demand.",
    armamentText:"A 3,500 kg stores load is fixed. Bomb types, defensive guns, remote turrets, naval-attack experiments, and special variants remain outside the registered standard load.",
    service:"The aircraft serves a limited conventional-bombing role during the continuing war. The exact targets, units, losses, production, and relations with German heavy aviation remain open.",
    later:"After 1947 the P.108B fleet shifts to transport, maritime patrol, navigation training, radar trials, and engine testing rather than remaining a front-line bomber.",
    canonExtra:"Its post-1947 conversion to transport, maritime patrol, navigation training, radar work, and engine testing is fixed.",
    peer1:{href:"fiat-g55-centauro.html",kicker:"Contemporary fighter",label:"Fiat G.55 Centauro"},peer2:{href:"bruno-mussolini.html",kicker:"Test-flight memorial history",label:"Bruno Mussolini"},
    primarySources:[{href:"https://www.piaggioaerospace.it/en/our-story",label:"Piaggio Aerospace — P.108 and company history"},{href:"https://archivi.cultura.gov.it/archivio-notizie/notizia?cHash=1daab546c1a8c4077abdf4e1ef5dbc4c&tx_news_pi1%5Baction%5D=detail&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Bnews%5D=2206",label:"Italian Ministry of Culture archives — Piaggio aeronautical archive"}]
  })
});
