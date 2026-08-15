window.deepArticles = window.deepArticles || {};

const spanishAerospaceSources = [
  {href:"../transcript.md",label:"Master Transcript — Spain's 1947 corporate roster and industrial development"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Spanish State, industrial opening, and Latin system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Spanish industrial and aerospace development"},
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Spanish licensed production, trainers, transports, patrol aircraft, and lightweight fighters"}
];

const spanishAerospaceRelated = [
  {href:"spain.html",kicker:"National setting",label:"Spanish State"},
  {href:"spanish-military-aviation.html",kicker:"Principal customer system",label:"Spanish Military Aviation"},
  {href:"instituto-nacional-de-industria.html",kicker:"State industrial sponsor",label:"Instituto Nacional de Industria"},
  {href:"spanish-postwar-economic-development.html",kicker:"Economic setting",label:"Postwar Economic Development of Spain"},
  {href:"latin-military-aviation.html",kicker:"Regional aircraft system",label:"Latin Military Aviation"}
];

const spanishAircraftListSection = rows => ({
  id:"aircraft",title:"List of Aircraft",
  html:`<p>The internal designation is CASA's factory or licensed-production identifier. The official designation gives the service or public name; a dash indicates that no separate official name is established.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p" ? "<sup class='canon-note' data-provenance='p'>[p]</sup>" : provenance === "a" ? "<sup class='canon-note' data-provenance='a'>[a]</sup>" : "<sup class='canon-note' data-provenance='e'>[e]</sup>";
    const internalCell = href && !official ? `<a href='${href}'>${internal}</a>${note}` : `${internal}${official ? "" : note}`;
    const officialCell = official ? `${href ? `<a href='${href}'>${official}</a>` : official}${note}` : "—";
    return `<tr><td>${internalCell}</td><td>${officialCell}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

Object.assign(window.deepArticles, {
  "construcciones-aeronauticas": {
    title:"Construcciones Aeronáuticas",category:"Spanish aerospace companies",eyebrow:"CASA · Spanish aircraft manufacturer · founded 3 March 1923",infoboxKicker:"Aircraft manufacturer",infoboxTitle:"Construcciones Aeronáuticas, S.A. · CASA",
    lead:"Construcciones Aeronáuticas, S.A., generally known as CASA, is Spain's principal aircraft manufacturer. José Ortiz-Echagüe founded the company on 3 March 1923. Its factories at Getafe, Cádiz, and Tablada developed through licensed production, repair, seaplanes, military aircraft, and original design. After 1947 CASA concentrates on licensed Italian and Occitan aircraft, trainers, transports, maritime-patrol types, and later lightweight fighters while enlarging Spanish design and systems-integration capacity.",
    canon:"The 1923 foundation, Ortiz-Echagüe, Getafe factory, Breguet license production, Cádiz seaplane works, Tablada facility, repair and licensed-production experience are historical anchors. CASA's setting roles in Italian and Occitan licensed production, trainers, transports, maritime patrol, and later lightweight fighters are established. Exact ownership, INI shares, model lineage, engines, output, exports, mergers, space work, and 1985 organization remain open.",
    sections:[
      {id:"foundation",title:"Foundation",html:"<p>José Ortiz-Echagüe founded CASA on 3 March 1923. The Getafe works began activity in 1924 with licensed Breguet 19 production, giving Spain a factory equipped for series manufacture of metal military aircraft.</p>"},
      {id:"plants",title:"Factories",html:"<p>Getafe serves the Madrid military-aircraft and engineering center. A Cádiz plant develops seaplane construction and maritime work from the late 1920s. Tablada near Seville adds production and repair capacity during the 1940s. Exact postwar workshare among the sites remains open.</p>"},
      {id:"licenses",title:"Licensed production",html:"<p>French, German, Italian, and later Occitan licenses provide airframes, engines, tooling, drawings, inspection methods, and production experience. CASA progressively substitutes Spanish components and adapts aircraft to national weapons, radios, climates, bases, and maintenance.</p>"},
      {id:"reconstruction",title:"Postwar reconstruction",html:"<p>Worn tools, scarce alloys, disrupted suppliers, and military demand shape the 1947 program. INI finance, Air Ministry orders, foreign technical agreements, and repair work preserve the skilled labor force while factories modernize.</p>"},
      {id:"products",title:"Trainers, transports, and patrol aircraft",html:"<p>Training aircraft support pilot expansion at manageable cost. Transports serve military logistics, Gibraltar, Morocco, islands, colonial routes, and civil operators. Maritime-patrol aircraft connect CASA to the Navy, Atlantic bases, radar, antisubmarine systems, and long-duration maintenance.</p>"},
      spanishAircraftListSection([
        ["CASA-Breguet XIX","Breguet XIX",null,"p"],
        ["CASA III",null,null,"p"],
        ["CASA 1.131","Bücker Bü 131 Jungmann",null,"e"],
        ["CASA 2.111",null,null,"e"],
        ["CASA 352",null,null,"e"]
      ]),
      {id:"fighters",title:"Lightweight fighters",html:"<p>Spain does not reproduce every high-performance subsystem. CASA combines licensed engines, Occitan aerodynamics and electronics, Italian weapons and production knowledge, and Spanish structures and integration in later lightweight-fighter programs.</p>"},
      {id:"suppliers",title:"Spanish aerospace network",html:"<p>Machine shops, electrical firms, instruments, radios, tires, hydraulics, castings, sheet metal, tooling, universities, test establishments, and military depots form the wider network. CASA contracts give suppliers work beyond one aircraft type.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>By 1985 CASA is Spain's leading airframe, transport, trainer, patrol, and aerospace-integration company. It remains distinct within the Latin system. Later absorption into a pan-European Airbus structure is not established.</p>"}
    ],
    related:[...spanishAerospaceRelated,{href:"madrid.html",kicker:"Getafe region",label:"Madrid"},{href:"cadiz.html",kicker:"Maritime factory region",label:"Cádiz"},{href:"spanish-motor-industry.html",kicker:"Parallel manufacturing system",label:"Motor Industry of Spain"},{href:"hispano-suiza.html",kicker:"Engine and engineering predecessor",label:"Hispano-Suiza"}],
    facts:[["Full name","Construcciones Aeronáuticas, S.A."],["Abbreviation","CASA"],["Founded","3 March 1923"],["Founder","José Ortiz-Echagüe"],["First factory","Getafe · 1924"],["Other early plants","Cádiz · Tablada"],["Established setting fields","Licensed aircraft · trainers · transports · maritime patrol · light fighters"],["1985 position","Principal Spanish aircraft manufacturer"]],
    sources:[...spanishAerospaceSources,{href:"https://www.airbus.com/en/newsroom/stories/2023-03-100-years-of-aerospace-progress-in-spain",label:"Airbus — a century of CASA and Spanish aerospace"},{href:"https://www.casareal.es/ES/Actividades/Paginas/actividades_actividades_detalle.aspx?data=15657",label:"Spanish Royal Household — CASA centenary and factory chronology"}],
    categories:["CASA","Spanish aerospace industry","Aircraft manufacturers","Getafe","Cádiz"]
  },

  "hispano-suiza": {
    title:"Hispano-Suiza",category:"Spanish engineering companies",eyebrow:"Spanish-Swiss automobile and aero-engine company · founded 14 June 1904",infoboxKicker:"Automobile and aero-engine manufacturer",infoboxTitle:"La Hispano-Suiza, Fábrica de Automóviles, S.A.",
    lead:"Hispano-Suiza is a Spanish-Swiss engineering and luxury marque founded in Barcelona on 14 June 1904 by Damià Mateu, Francisco Seix, and Swiss engineer Marc Birkigt. Luxury automobiles, trucks, armored vehicles, and highly successful aircraft engines made the company one of Spain's best-known industrial names. Between 1944 and 1946 INI took control of strategic engine assets and created ENASA from the Spanish automotive division; the Hispano-Suiza name nevertheless remains part of Spain's 1947 corporate roster.",
    canon:"The 1904 foundation, Mateu, Seix, Birkigt, Barcelona origin, French factory, luxury automobiles, First World War aero engines, Guadalajara works, and 1944–46 INI intervention are historical anchors. ENASA's acquisition of Spanish automotive assets and the continued importance of Hispano-Suiza engineering are established. The exact post-1947 legal company, family ownership, marque use, engine works, licenses, products, French relationship, and 1985 status remain open.",
    sections:[
      {id:"foundation",title:"Foundation",html:"<p>Damià Mateu and Francisco Seix founded Hispano-Suiza at Barcelona in 1904 with Marc Birkigt as technical director. Birkigt's engines, chassis, brakes, and attention to weight and refinement gave the company an international reputation.</p>"},
      {id:"automobiles",title:"Automobiles and prestige",html:"<p>The Alfonso XIII, H6, and other luxury and sporting cars associated the marque with royalty, wealthy customers, coachbuilders, and international motor shows. A French factory widened access to capital, skilled labor, materials, and export customers.</p>"},
      {id:"aviation",title:"Aircraft engines",html:"<p>Birkigt developed the company's first major aviation engine in 1915. Hispano-Suiza V-8 and later engines were manufactured in large numbers by the company and licensees, powering Allied aircraft and creating a durable engine, armament, and precision-manufacturing reputation.</p>"},
      {id:"industry",title:"Spanish industrial system",html:"<p>Barcelona, Guadalajara, French works, suppliers, foundries, machine shops, and military contracts joined automobiles to trucks, engines, weapons, and repair. Civil-war division and postwar scarcity damaged this integrated system.</p>"},
      {id:"ini",title:"INI intervention",html:"<p>Between 1944 and 1946 <a href='instituto-nacional-de-industria.html'>INI</a> assumed control of strategic aircraft-engine activity and acquired Spanish automotive assets. State policy placed heavy vehicles within the newly created <a href='enasa-pegaso.html'>ENASA/Pegaso</a> system.</p>"},
      {id:"continuity",title:"Name and legal continuity",html:"<p>The Hispano-Suiza name, family interests, patents, archives, foreign relationships, service obligations, and engineering personnel did not all pass through one transaction. The setting identifies Hispano-Suiza among Spain's 1947 corporate anchors but has not fixed the surviving legal structure.</p>"},
      {id:"roles",title:"Possible postwar roles",html:"<p>Aero engines, licensed components, luxury and ceremonial vehicles, military equipment, technical consulting, replacement parts, and intellectual property are consistent with the established inheritance. Specific programs require further canon and are not assigned here.</p>"},
      {id:"position",title:"Position in 1985",html:"<p>The Hispano-Suiza name retains historical prestige in Spanish engineering and aviation. Whether it survives as an independent company, family marque, INI-controlled engine concern, licensing office, or combination of these remains open.</p>"}
    ],
    related:[...spanishAerospaceRelated,{href:"spanish-motor-industry.html",kicker:"Automotive successor system",label:"Motor Industry of Spain"},{href:"enasa-pegaso.html",kicker:"Heavy-vehicle successor",label:"ENASA/Pegaso"},{href:"construcciones-aeronauticas.html",kicker:"Aircraft-manufacturing counterpart",label:"CASA"},{href:"barcelona.html",kicker:"Founding city",label:"Barcelona"}],
    facts:[["Founded","14 June 1904"],["Founders","Damià Mateu · Francisco Seix · Marc Birkigt"],["Origin","Barcelona"],["Historic fields","Luxury cars · trucks · aircraft engines · military equipment"],["French expansion","From 1911"],["First major aero engine","1915"],["INI intervention","1944–1946"],["Automotive successor","ENASA/Pegaso"],["1985 legal status","Open"]],
    sources:[...spanishAerospaceSources,{href:"https://www.hispanosuizacars.com/our-history/",label:"Hispano-Suiza — official company history"},{href:"https://www.hispanosuizacars.com/es/nota-de-prensa/10-curiosidades-sobre-la-historia-de-hispano-suiza/",label:"Hispano-Suiza — historical engineering and marque milestones"}],
    categories:["Hispano-Suiza","Spanish motor industry","Spanish aerospace industry","Luxury vehicles","Aircraft engines"]
  }
});
