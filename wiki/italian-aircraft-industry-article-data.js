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

const italianAircraftListSection = rows => ({
  id:"aircraft",
  title:"List of Aircraft",
  html:`<p>The internal designation is the manufacturer's design code. The official designation records the service or public name; a dash indicates that no separate official name is established.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p"
      ? "<sup class='canon-note' data-provenance='p'>[p]</sup>"
      : provenance === "a"
        ? "<sup class='canon-note' data-provenance='a'>[a]</sup>"
        : provenance === "e"
          ? "<sup class='canon-note' data-provenance='e'>[e]</sup>"
          : "";
    const internalCell = href && !official ? `<a href='${href}'>${internal}</a>${note}` : `${internal}${official ? "" : note}`;
    const officialCell = official ? `${href ? `<a href='${href}'>${official}</a>` : official}${note}` : "—";
    return `<tr><td>${internalCell}</td><td>${officialCell}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

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
      italianAircraftListSection([
        ["Fiat C.R.32","Freccia",null,"p"],
        ["Fiat C.R.42","Falco",null,"p"],
        ["Fiat B.R.20","Cicogna",null,"p"],
        ["Fiat G.12",null,null,"p"],
        ["Fiat G.50","Freccia",null,"p"],
        ["Fiat G.55","Fiat G.55 Centauro","fiat-g55-centauro.html","a"],
        ["Fiat G.91","Fiat G.91R","fiat-g91r.html","a"],
        ["Fiat G.85","Fiat G.85","fiat-g85.html","a"]
      ]),
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
      italianAircraftListSection([
        ["Macchi M.39",null,null,"p"],
        ["Macchi M.C.72",null,null,"p"],
        ["Macchi C.200","Saetta",null,"p"],
        ["Macchi C.202","Folgore",null,"a"],
        ["Macchi C.205","Macchi C.205 Veltro Serie III","macchi-c205-veltro.html","a"],
        ["Macchi MB.326","Aermacchi MB.326","aermacchi-mb326.html","a"]
      ]),
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
      italianAircraftListSection([
        ["Reggiane Re.2000","Falco I",null,"p"],
        ["Reggiane Re.2001","Falco II",null,"a"],
        ["Reggiane Re.2002","Ariete",null,"a"],
        ["Reggiane Re.2003",null,null,"a"],
        ["Reggiane Re.2005","Reggiane Re.2005 Sagittario","reggiane-re2005-sagittario.html","a"],
        ["Reggiane Re.2006",null,null,"a"]
      ]),
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
      italianAircraftListSection([
        ["Piaggio P.111",null,null,"p"],
        ["Piaggio P.108A","Artigliere",null,"a"],
        ["Piaggio P.108B","Piaggio P.108B","piaggio-p108b.html","a"],
        ["Piaggio P.108C",null,null,"a"],
        ["Piaggio P.108T",null,null,"a"],
        ["Piaggio P.119",null,null,"a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Piaggio remains a diversified aerospace company spanning engines, special aircraft, transports, research, and selected military work. Its exact civil product family and relations with state holdings remain open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"piaggio.html",kicker:"Parent industrial group",label:"Piaggio"},{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"},{href:"piaggio-p108b.html",kicker:"Defining heavy aircraft",label:"Piaggio P.108B"},{href:"bruno-mussolini.html",kicker:"Test pilot and memorial figure",label:"Bruno Mussolini"},{href:"fiat-aviazione.html",kicker:"National engine and aircraft counterpart",label:"Fiat Aviazione"}],
    facts:[["Parent company founded","1884"],["Aeronautical production","From 1915–1916"],["Principal regions","Liguria · Tuscany"],["Early designers","Giovanni Pegna · Giuseppe Gabrielli"],["Fields","Aircraft · aero engines · research · transport"],["Heavy-aircraft family","P.108"],["Registered bomber","P.108B · 1942"],["1985 position","Diversified special-aircraft and propulsion house"]],
    primarySources:[{href:"https://www.piaggioaerospace.it/en/our-story",label:"Piaggio Aerospace — company history"},{href:"https://www.piaggiogroup.com/en/group/history",label:"Piaggio Group — industrial and aeronautical history"}]
  }),

  "aerfer": italianAircraftArticle({
    title:"Aerfer",infoboxTitle:"Aerfer",infoboxKicker:"Italian experimental and interceptor aircraft house",eyebrow:"Campania · high-speed research and interception · 1950s–1985",
    lead:"Aerfer is the Campanian aircraft design and experimental organization responsible for Italy's Sagittario II research fighter and the later Leone interceptor. Its work connects southern airframe manufacture, state-backed research, and Latin propulsion and weapons programs to the national fighter industry.",
    canon:"Aerfer's Sagittario II trials in 1954 and Leone interceptor introduction in 1967 are fixed. A Campanian and state-backed industrial setting is retained as the most conservative bridge between the registered aircraft. Exact foundation date, legal succession from earlier firms, ownership, factories, workforce, intermediate projects, production totals, and 1985 organization remain open.",
    sections:[
      {id:"place",title:"Southern aircraft institution",html:"<p>Aerfer supplies Italy with a high-speed experimental and interceptor design center outside the larger northern aircraft districts. Its precise corporate ancestry remains unsettled.</p>"},
      {id:"research",title:"High-speed research",html:"<p>The <a href='aerfer-sagittario-ii.html'>Aerfer Sagittario II</a> enters trials in 1954 as a supersonic research fighter. The program develops test, aerodynamics, propulsion-integration, and cannon-installation experience without implying a large operational fleet.</p>"},
      {id:"interceptor",title:"Leone interceptor",html:"<p>The <a href='aerfer-leone.html'>Aerfer Leone</a> enters in 1967 as a Latin-bloc interceptor armed with cannon and four missiles. It demonstrates that the research line matured into a service aircraft.</p>"},
      italianAircraftListSection([
        ["N.2","Aerfer Sagittario II","aerfer-sagittario-ii.html","a"],
        ["Leone","Aerfer Leone","aerfer-leone.html","a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Aerfer is remembered chiefly as a specialist high-speed and interceptor house within the wider Italian and Latin aerospace system. Later programs and corporate consolidation remain open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"},{href:"aerfer-sagittario-ii.html",kicker:"1954 research aircraft",label:"Aerfer Sagittario II"},{href:"aerfer-leone.html",kicker:"1967 interceptor",label:"Aerfer Leone"}],
    facts:[["Country","Kingdom of Italy"],["Principal region","Campania"],["Established field","High-speed research and interception"],["Research aircraft","Sagittario II · 1954 trials"],["Service interceptor","Leone · 1967"],["1985 legal structure","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Aerfer",label:"Wikipedia — Aerfer historical background"}],categories:["Aerfer","Italian aerospace industry","Aircraft manufacturers","Campania","Latin Bloc aviation"]
  }),

  "savoia-marchetti": italianAircraftArticle({
    title:"Savoia-Marchetti",infoboxTitle:"Savoia-Marchetti",infoboxKicker:"Italian aircraft manufacturer",eyebrow:"Sesto Calende · transports, bombers, and maritime aircraft · 1915–1985",
    lead:"Savoia-Marchetti is the Lombard aircraft manufacturer associated with flying boats, long-range record aircraft, transports, and the SM.79 and SM.82 wartime families. In the victorious kingdom it remains an independent design tradition and produces the registered SM.82 Aquila maritime strike and patrol aircraft in 1974.",
    canon:"The company's 1915 origin, Sesto Calende base, Alessandro Marchetti design tradition, and SM.79, SM.81, and SM.82 wartime families are historical anchors. Continued postwar activity and the 1974 SM.82 Aquila are fixed in-setting. Exact legal name changes, ownership, factories, product sequence, production totals, exports, and 1985 corporate structure remain open.",
    sections:[
      {id:"origins",title:"SIAI and the Marchetti design office",html:"<p>The company began in 1915 around seaplane construction at Sesto Calende. Alessandro Marchetti's arrival gave the organization the design identity later expressed in the Savoia-Marchetti name.</p>"},
      {id:"interwar",title:"Long-range and maritime experience",html:"<p>Flying boats, record flights, transports, and military aircraft made range, water operation, large structures, and multi-engine installation recurring company strengths.</p>"},
      {id:"war",title:"Wartime aircraft",html:"<p>The SM.79 Sparviero, SM.81 Pipistrello, and SM.82 Canguro give the company bomber, torpedo, transport, and long-range experience. Italian victory prevents the post-armistice fragmentation of this industrial base.</p>"},
      {id:"aquila",title:"SM.82 Aquila",html:"<p>The <a href='sm82-aquila.html'>Savoia-Marchetti SM.82 Aquila</a> enters in 1974 as a maritime strike and patrol aircraft. The recycled SM.82 identity ties the jet-age aircraft to the company's long-range wartime tradition without making it a direct airframe derivative.</p>"},
      italianAircraftListSection([
        ["SM.79","Savoia-Marchetti SM.79 Sparviero",null,"p"],
        ["SM.81","Savoia-Marchetti SM.81 Pipistrello",null,"p"],
        ["SM.82","Savoia-Marchetti SM.82 Canguro",null,"a"],
        ["SM.82 Aquila","Savoia-Marchetti SM.82 Aquila","sm82-aquila.html","a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Savoia-Marchetti remains a maritime and long-range aircraft house within Italy's distributed aerospace system. Its exact ownership and relations with other firms remain open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"},{href:"sm82-aquila.html",kicker:"1974 maritime aircraft",label:"Savoia-Marchetti SM.82 Aquila"},{href:"piaggio-aeronautics.html",kicker:"Heavy-aircraft counterpart",label:"Piaggio Aeronautics"}],
    facts:[["Founded","1915"],["Principal center","Sesto Calende, Lombardy"],["Historic fields","Flying boats · bombers · transports · record aircraft"],["Wartime families","SM.79 · SM.81 · SM.82"],["Postwar maritime aircraft","SM.82 Aquila · 1974"],["1985 structure","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Savoia-Marchetti",label:"Wikipedia — Savoia-Marchetti historical background"}],categories:["Savoia-Marchetti","Italian aerospace industry","Aircraft manufacturers","Lombardy","Maritime patrol aircraft"]
  }),

  "caproni": italianAircraftArticle({
    title:"Caproni",infoboxTitle:"Società Italiana Caproni",infoboxKicker:"Italian aircraft group and design organization",eyebrow:"Lombardy and associated works · bombers, transports, and reaction research · 1908–1985",
    lead:"Caproni is the aircraft enterprise founded by Gianni Caproni and expanded during the interwar period into a group of airframe, engine, and engineering companies. Heavy bombers, colonial aircraft, transports, and the Campini reaction-propulsion experiment give it a broad technical inheritance.",
    canon:"Gianni Caproni's 1908 foundation, Taliedo and Vizzola works, First World War bomber families, interwar group expansion, Caproni colonial and transport aircraft, and the Campini N.1 are historical anchors. The finalized aircraft register does not assign Caproni a later operational jet type. Exact postwar holdings, research continuity, subsidiaries, factories, production, ownership, and 1985 legal form remain open.",
    sections:[
      {id:"foundation",title:"Foundation",html:"<p>Giovanni Battista ‘Gianni’ Caproni established the company in 1908. Early experiments led to complete Italian-built aircraft and then to the multi-engine bombers associated with the company during the First World War.</p>"},
      {id:"group",title:"Interwar group",html:"<p>Caproni acquired or controlled several aircraft and engineering companies during the interwar period. Taliedo, Vizzola Ticino, Bergamo, Reggio Emilia, and associated engine works supplied distinct design and production centers rather than one standardized factory.</p>"},
      {id:"war",title:"Wartime aircraft",html:"<p>Ca.133, Ca.135, Ca.309, Ca.310, and Ca.311 aircraft serve bomber, reconnaissance, colonial, transport, and utility requirements. Their mixed performance leaves the group with useful production capacity and several overlapping families.</p>"},
      {id:"reaction",title:"Reaction-propulsion research",html:"<p>The Campini-Caproni N.1 provides early experience with ducts, high-temperature systems, test practice, and the institutional demands of reaction-propulsion research. Its motorjet is a mechanical dead end rather than the direct engine ancestor of Italy's operational turbojets.</p>"},
      italianAircraftListSection([
        ["Ca.3","Caproni Ca.3",null,"p"],["Ca.60","Caproni Ca.60 Transaereo",null,"p"],["Ca.101","Caproni Ca.101",null,"p"],["Ca.133","Caproni Ca.133",null,"p"],["Ca.135","Caproni Ca.135",null,"p"],["Ca.309","Caproni Ca.309 Ghibli",null,"p"],["Ca.310","Caproni Ca.310 Libeccio",null,"p"],["Ca.311","Caproni Ca.311",null,"p"],["N.1","Campini-Caproni N.1",null,"p"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 the Caproni name identifies an established Italian aircraft lineage and a network of surviving specialist capabilities. The exact boundary between a Caproni holding group, Reggiane, engine interests, and state aerospace institutions remains open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"}],
    facts:[["Founder","Gianni Caproni"],["Founded","1908"],["Principal early center","Taliedo, Lombardy"],["Interwar form","Multi-company aircraft and engineering group"],["Reaction experiment","Campini-Caproni N.1"],["Postwar accepted-aircraft sequence","Open"]],
    primarySources:[{href:"https://www.lombardiabeniculturali.it/archivi/soggetti-produttori/ente/MIDB001877/",label:"Lombardia Beni Culturali — Aeroplani Caproni archive"},{href:"https://en.wikipedia.org/wiki/Caproni",label:"Wikipedia — Caproni company history"}],categories:["Caproni","Italian aerospace industry","Aircraft manufacturers","Lombardy","Reaction propulsion"]
  }),

  "cant": italianAircraftArticle({
    title:"CANT",infoboxTitle:"Cantieri Aeronautici e Navali Triestini",infoboxKicker:"Italian maritime-aircraft and bomber manufacturer",eyebrow:"Monfalcone · seaplanes, flying boats, and multi-engine aircraft · 1923–1985",
    lead:"CANT, the Cantieri Aeronautici e Navali Triestini, is the Monfalcone aircraft organization founded inside the Trieste shipbuilding industry. Seaplanes, flying boats, transports, and Filippo Zappata's multi-engine aircraft establish a distinct maritime and bomber design center that survives in the victorious Italian aerospace system.",
    canon:"The Cosulich family's 1921 aviation initiative, 1923 Monfalcone workshop, CANT name, maritime-aircraft specialization, CRDA relationship, Filippo Zappata design leadership, and Z.501, Z.506, and Z.1007 families are historical anchors. The setting explicitly retains CANT as a distinct wartime design center. Exact postwar ownership, company name, factories, later aircraft, production, and 1985 legal form remain open.",
    sections:[
      {id:"formation",title:"Formation at Monfalcone",html:"<p>The Cosulich shipping and shipbuilding interests entered aviation through SISA and established an aircraft workshop at the Monfalcone shipyard in 1923. Early work joined civil flying boats, naval aircraft, and pilot training.</p>"},
      {id:"crda",title:"CRDA organization",html:"<p>After the 1930 formation of Cantieri Riuniti dell'Adriatico, the aircraft works were commonly identified as CRDA CANT. Shipbuilding supplied marine fabrication and industrial support while the aviation organization retained a separate design identity.</p>"},
      {id:"zappata",title:"Zappata design office",html:"<p>Filippo Zappata led the design office associated with CANT's best-known Z-series aircraft. Large multi-engine structures, long range, seaplane hulls, and maritime operation were recurring company fields.</p>"},
      {id:"war",title:"Wartime aircraft",html:"<p>Z.501 and Z.506 aircraft serve reconnaissance, maritime, rescue, and transport missions. The Z.1007 remains a useful medium-bomber and maritime-strike family through the continuing war; larger Z.1018 and Z.511 programs remain more limited.</p>"},
      italianAircraftListSection([
        ["CANT 6","CANT 6",null,"p"],["CANT 10","CANT 10",null,"p"],["CANT Z.501","Gabbiano",null,"p"],["CANT Z.506","Airone",null,"p"],["CANT Z.1007","Alcione",null,"p"],["CANT Z.1018","Leone",null,"p"],["CANT Z.511","CANT Z.511",null,"p"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 the Monfalcone design lineage remains Italy's specialist maritime-aircraft and large-structure school. Its precise relationship to CRDA shipbuilding, state holdings, and later complete-aircraft programs remains open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"savoia-marchetti.html",kicker:"Maritime and long-range counterpart",label:"Savoia-Marchetti"},{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"}],
    facts:[["Full name","Cantieri Aeronautici e Navali Triestini"],["Aircraft works founded","1923"],["Principal center","Monfalcone"],["Founding interest","Cosulich family"],["Principal designer","Filippo Zappata"],["Historic specialties","Seaplanes · flying boats · bombers · transports"]],
    primarySources:[{href:"https://www.ccm.it/it/19974/Officine-Aereonautiche-CANT",label:"Consorzio Culturale del Monfalconese — CANT aircraft works"},{href:"https://en.wikipedia.org/wiki/Cantieri_Aeronautici_e_Navali_Triestini",label:"Wikipedia — CANT history"}],categories:["CANT","Italian aerospace industry","Aircraft manufacturers","Friuli-Venezia Giulia","Maritime aviation"]
  }),

  "breda-aeronautica": italianAircraftArticle({
    title:"Breda Aeronautica",infoboxTitle:"Breda aeronautical division",infoboxKicker:"Italian aircraft design and manufacturing division",eyebrow:"Lombardy · trainers, attack aircraft, and industrial production · 1910s–1985",
    lead:"Breda Aeronautica is the aircraft division of the Società Italiana Ernesto Breda heavy-industrial group. Training aircraft, reconnaissance types, attack aircraft, and licensed or subcontract production connect the division to Breda's wider railway, armaments, engine, and machine-building organization.",
    canon:"Breda's pre-divergence heavy-industrial organization and its Ba.25, Ba.27, Ba.64, Ba.65, and Ba.88 aircraft are historical anchors. Continued Italian industrial capacity after victory permits the aircraft division to survive, but the setting does not fix a major postwar Breda service-aircraft lineage. Exact divisional charter, later programs, ownership, factories, production, and 1985 status remain open.",
    sections:[
      {id:"industry",title:"Industrial organization",html:"<p>The Ernesto Breda group combined railway equipment, weapons, engines, machinery, and aircraft. The aeronautical division could draw on a large metalworking organization while competing with firms more narrowly centered on aircraft design.</p>"},
      {id:"trainers",title:"Training and early military aircraft",html:"<p>The Ba.25 trainer became one of the division's most numerous early aircraft. Ba.27 fighters and other smaller programs supplied design and production experience before the late 1930s attack-aircraft requirements.</p>"},
      {id:"attack",title:"Attack-aircraft programs",html:"<p>Ba.64 and Ba.65 aircraft entered the assault and fighter-bomber fields. The twin-engine Ba.88 suffered serious operational shortcomings and did not justify automatic continuation as a successful family.</p>"},
      {id:"continuity",title:"Continuity after victory",html:"<p>Italian victory prevents external dismantling of the division. Breda retains airframe production, repair, subcontract work, and engineering capability even though no fixed postwar frontline aircraft is assigned to it.</p>"},
      italianAircraftListSection([
        ["Ba.25","Breda Ba.25",null,"p"],["Ba.27","Breda Ba.27",null,"p"],["Ba.64","Breda Ba.64",null,"p"],["Ba.65","Breda Ba.65",null,"p"],["Ba.88","Breda Ba.88 Lince",null,"p"],["Ba.201","Breda Ba.201",null,"e"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Breda's aircraft activity is a secondary complete-design and industrial-workshare center rather than the principal Italian fighter or maritime-aircraft authority. Its exact corporate and state-holding relationship remains open.</p>"}
    ],
    related:[...italianIndustryRelated,{href:"fiat-aviazione.html",kicker:"Larger industrial counterpart",label:"Fiat Aviazione"},{href:"aerospace-industry-of-italy.html",kicker:"National industrial system",label:"Aerospace Industry of Italy"}],
    facts:[["Parent industrial group","Società Italiana Ernesto Breda"],["Principal region","Lombardy"],["Historic fields","Trainers · reconnaissance · attack aircraft · production workshare"],["Most numerous early type","Ba.25 trainer"],["Attack-aircraft family","Ba.64 · Ba.65 · Ba.88"],["Fixed postwar frontline family","None"]],
    primarySources:[{href:"https://www.aeronautica.difesa.it/2023/10/16/breda_ba_65_/",label:"Italian Air Force — Breda Ba.65"},{href:"https://en.wikipedia.org/wiki/Societ%C3%A0_Italiana_Ernesto_Breda",label:"Wikipedia — Società Italiana Ernesto Breda history"}],categories:["Breda","Italian aerospace industry","Aircraft manufacturers","Lombardy","Attack aircraft"]
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
