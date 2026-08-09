window.deepArticles = window.deepArticles || {};

const argentineNavalArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Armada de la República Argentina · ${config.type} · ${config.period}`,
  infoboxKicker:"Argentine naval class",
  lead:config.lead,
  canon:config.canon,
  sections:[
    {id:"development",title:config.developmentTitle || "Development",html:`<p>${config.development}</p>`},
    {id:"ships",title:config.shipsTitle || "Ships",html:config.ships},
    {id:"design",title:"Design",html:`<p>${config.design}</p>`},
    {id:"capability",title:config.capabilityTitle,html:`<p>${config.capability}</p>`},
    {id:"role",title:"Operational role",html:`<p>${config.role}</p>`},
    {id:"industry",title:config.industryTitle || "Construction and support",html:`<p>${config.industry}</p>`},
    {id:"war",title:"Falklands–Malvinas War",html:`<p>${config.war}</p>`},
    {id:"status",title:"Status in 1985",html:`<p>${config.status}</p>`}
  ],
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Argentine Navy","Argentine warships","Falklands–Malvinas War","Naval history","Military technology"]
});

const argentineNavalRelated = [
  {href:"argentine-navy-postwar.html",kicker:"Parent service",label:"Argentine Navy"},
  {href:"argentina.html",kicker:"Sovereign state",label:"Argentina"},
  {href:"falklands-war.html",kicker:"Defining conflict",label:"Falklands–Malvinas War"},
  {href:"falklands-campaign-1985.html",kicker:"Operational history",label:"1985 Falklands Campaign"}
];

const argentineRoster = ships => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned or delivered</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const argentineOverview = window.deepArticles["argentine-navy-postwar"];
if (argentineOverview) {
  const classSection = argentineOverview.sections.find(section => section.id === "classes");
  if (classSection) {
    classSection.html = classSection.html
      .replace("ARA Veinticinco de Mayo", "<a href='ara-veinticinco-de-mayo.html'>ARA Veinticinco de Mayo</a>")
      .replace("ARA Almirante Brown", "<a href='ara-almirante-brown.html'>ARA Almirante Brown</a>")
      .replace("San Martín destroyer", "<a href='san-martin-class-destroyer.html'>San Martín destroyer</a>")
      .replace("Espora missile corvette", "<a href='espora-class-corvette.html'>Espora missile corvette</a>")
      .replace("Drummond patrol corvette", "<a href='drummond-class-corvette.html'>Drummond patrol corvette</a>")
      .replace("Intrépida/Cóndor missile craft", "<a href='intrepida-condor-class-missile-craft.html'>Intrépida/Cóndor missile craft</a>")
      .replace("<td>Salta</td>", "<td><a href='salta-class-submarine.html'>Salta</a></td>")
      .replace("<td>Santa Cruz</td>", "<td><a href='santa-cruz-class-submarine.html'>Santa Cruz</a></td>")
      .replace("<td>Santiago del Estero</td>", "<td><a href='santiago-del-estero-class-submarine.html'>Santiago del Estero</a></td>")
      .replace("Cabo San Antonio LST", "<a href='cabo-san-antonio-class-landing-ship.html'>Cabo San Antonio LST</a>")
      .replace("Bahía assault transport", "<a href='bahia-class-assault-transport.html'>Bahía assault transport</a>");
  }
  const carrierSection = argentineOverview.sections.find(section => section.id === "carrier");
  if (carrierSection) carrierSection.html = carrierSection.html.replace("<em>Veinticinco de Mayo</em>", "<a href='ara-veinticinco-de-mayo.html'><em>Veinticinco de Mayo</em></a>");
  const cruiserSection = argentineOverview.sections.find(section => section.id === "cruiser");
  if (cruiserSection) cruiserSection.html = cruiserSection.html.replace("<em>Almirante Brown</em>", "<a href='ara-almirante-brown.html'><em>Almirante Brown</em></a>");
  const surfaceSection = argentineOverview.sections.find(section => section.id === "surface");
  if (surfaceSection) {
    surfaceSection.html = surfaceSection.html
      .replace("San Martín-class destroyers", "<a href='san-martin-class-destroyer.html'>San Martín-class destroyers</a>")
      .replace("Espora missile corvettes", "<a href='espora-class-corvette.html'>Espora missile corvettes</a>")
      .replace("Drummond patrol corvettes", "<a href='drummond-class-corvette.html'>Drummond patrol corvettes</a>")
      .replace("Intrépida/Cóndor missile craft", "<a href='intrepida-condor-class-missile-craft.html'>Intrépida/Cóndor missile craft</a>");
  }
  const submarineSection = argentineOverview.sections.find(section => section.id === "submarines");
  if (submarineSection) {
    submarineSection.html = submarineSection.html
      .replace("<em>Salta</em> and <em>San Luis</em>", "<a href='salta-class-submarine.html'><em>Salta</em> and <em>San Luis</em></a>")
      .replace("<em>Santa Cruz</em> and <em>Santa Fe</em>", "<a href='santa-cruz-class-submarine.html'><em>Santa Cruz</em> and <em>Santa Fe</em></a>")
      .replace("<em>Santiago del Estero</em> and <em>Catamarca</em>", "<a href='santiago-del-estero-class-submarine.html'><em>Santiago del Estero</em> and <em>Catamarca</em></a>");
  }
  const amphibiousSection = argentineOverview.sections.find(section => section.id === "amphibious");
  if (amphibiousSection) {
    amphibiousSection.html = amphibiousSection.html
      .replace("<em>Cabo San Antonio</em> and <em>Cabo San Pío</em>", "<a href='cabo-san-antonio-class-landing-ship.html'><em>Cabo San Antonio</em> and <em>Cabo San Pío</em></a>")
      .replace("<em>Bahía Buen Suceso</em> and <em>Bahía Paraíso</em>", "<a href='bahia-class-assault-transport.html'><em>Bahía Buen Suceso</em> and <em>Bahía Paraíso</em></a>");
  }
  argentineOverview.related = [
    {href:"ara-veinticinco-de-mayo.html",kicker:"Fleet aviation",label:"ARA Veinticinco de Mayo"},
    {href:"ara-almirante-brown.html",kicker:"Fleet flagship",label:"ARA Almirante Brown"},
    {href:"san-martin-class-destroyer.html",kicker:"Missile destroyer",label:"San Martín Class"},
    {href:"espora-class-corvette.html",kicker:"Missile corvette",label:"Espora Class"},
    {href:"salta-class-submarine.html",kicker:"Type XXIV export",label:"Salta Class"},
    {href:"santa-cruz-class-submarine.html",kicker:"Long-range attack",label:"Santa Cruz Class"},
    {href:"santiago-del-estero-class-submarine.html",kicker:"Coastal ambush",label:"Santiago del Estero Class"},
    {href:"cabo-san-antonio-class-landing-ship.html",kicker:"Tank landing",label:"Cabo San Antonio Class"},
    {href:"bahia-class-assault-transport.html",kicker:"Assault and engineering",label:"Bahía Class"},
    ...argentineOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "ara-veinticinco-de-mayo": argentineNavalArticle({
    title:"ARA Veinticinco de Mayo",type:"Light fleet carrier",period:"1945–1985",
    lead:"ARA <em>Veinticinco de Mayo</em> was the Argentine Navy's light fleet carrier. Completed as a British ship in 1945, it entered Argentine service in 1969 and underwent a major German-assisted Argentine reconstruction in 1977. The 25,500-tonne steam-turbine ship operated twenty-four fixed-wing aircraft and eight helicopters in its standard 1985 air group.",
    canon:"British completion in 1945, Argentine entry into service in 1969, the 1977 rebuild, 25,500-tonne full-load displacement, steam-turbine propulsion, twenty-four fixed-wing aircraft, eight helicopters, German radar, data links and point defense, light-fleet-carrier role under mainland cover, German-assisted Argentine reconstruction, and active 1985 status are established. Original British identity, dimensions, speed, machinery arrangement, aircraft models and exact mix, weapons, sensors, crew, builders, deployments, and detailed service history remain open.",
    developmentTitle:"Acquisition and reconstruction",development:"The ship entered Argentine service in 1969 after earlier British service. A major 1977 reconstruction incorporated German radar, tactical-data links, point-defense equipment, and Argentine yard work while retaining the British hull and steam plant.",
    ships:argentineRoster([["Veinticinco de Mayo","Argentine service 1969; rebuilt 1977"]]),
    design:"The carrier displaced 25,500 tonnes at full load and used steam turbines. Its standard 1985 air group comprised thirty-two aircraft: twenty-four fixed-wing aircraft and eight helicopters.",
    capabilityTitle:"Air group",capability:"Fixed-wing aircraft supported fleet air defense, strike, reconnaissance, and maritime attack; helicopters supplied anti-submarine search, transport, rescue, and liaison. Models and routine allocation remain open.",
    role:"The carrier operated under mainland air cover and provided mobile aviation in the South Atlantic. Escorts, tankers, shore radar, bases, and land-based aircraft formed part of its operating system.",
    industry:"The reconstruction joined British hull structure, German electronics and point-defense assistance, and Argentine yard, maintenance, and integration work. Germany retained control of important replacement components and modernization inputs.",
    war:"The carrier formed part of the fleet available during the 1985 war. The campaign register leaves named-ship deployments, losses, air-group composition, and detailed orders of battle open.",
    status:"Veinticinco de Mayo was active and accounted for Argentina's single carrier.",
    related:[...argentineNavalRelated,{href:"ara-almirante-brown.html",kicker:"Flagship and escort",label:"ARA Almirante Brown"},{href:"san-martin-class-destroyer.html",kicker:"Destroyer screen",label:"San Martín Class"}],
    facts:[["Type","Light fleet carrier"],["British completion","1945"],["Argentine service","1969"],["Major rebuild","1977"],["Full load","25,500 t"],["Propulsion","Steam turbines"],["Fixed-wing aircraft","24"],["Helicopters","8"],["Active, 1985","1"]]
  }),

  "ara-almirante-brown": argentineNavalArticle({
    title:"ARA Almirante Brown",type:"Light missile cruiser and flagship",period:"1973–1985",
    lead:"ARA <em>Almirante Brown</em> was a German-built Argentine light missile cruiser and fleet flagship. Launched at Wilhelmshaven in late 1973 and commissioned on delivery in mid-1974, the 12,800-tonne steam-turbine ship carried four 150 mm guns, thirty-two area-defense missile cells, eight heavy anti-ship missiles, four close-in weapon systems, and two helicopters.",
    canon:"German purpose-built export design, late-1973 Wilhelmshaven launch, mid-1974 delivery and commissioning, 12,800-tonne full-load displacement, steam-turbine propulsion, four 150 mm guns, thirty-two area-defense cells, eight heavy anti-ship missiles, four CIWS, two helicopters, fleet-flagship and area-defense roles, and active status are established. Dimensions, speed, machinery arrangement, missile and sensor models, electronic-warfare fit, crew, detailed financing, deployments, refits, and service history remain open.",
    developmentTitle:"German export program",development:"Argentina ordered a purpose-built flagship rather than receiving a surplus German warship. German objectives included a South Atlantic customer, demand for missiles and support, and a visible prestige alternative to American or British patronage.",
    ships:argentineRoster([["Almirante Brown","Mid-1974"]]),
    design:"The cruiser displaced 12,800 tonnes at full load and used steam turbines. Four 150 mm guns, a thirty-two-cell area-defense battery, eight heavy anti-ship missiles, four close-in systems, and two helicopters formed the standard 1985 combat fit.",
    capabilityTitle:"Command and weapons",capability:"Command spaces and area-defense weapons supported fleet coordination. The ship combined gunfire, long-range surface attack, local point defense, aviation, and German-derived radar and data systems.",
    role:"Almirante Brown served as fleet flagship, area-defense cruiser, and principal surface-strike combatant around the carrier, amphibious forces, and South Atlantic task groups.",
    industry:"Germany supplied a capable export design below its newest domestic standard. Argentina remained dependent on German missile support, seekers, specialized components, training, and later modernization.",
    war:"The cruiser was active during the 1985 war. Exact sorties, weapons expenditure, damage, and named task-group composition remain open under the campaign register.",
    status:"Almirante Brown was active and accounted for Argentina's single missile cruiser.",
    related:[...argentineNavalRelated,{href:"ara-veinticinco-de-mayo.html",kicker:"Carrier group",label:"ARA Veinticinco de Mayo"},{href:"san-martin-class-destroyer.html",kicker:"Destroyer screen",label:"San Martín Class"},{href:"argentine-dual-alignment.html",kicker:"Foreign-policy context",label:"Argentine Dual Alignment"}],
    facts:[["Type","Light missile cruiser · fleet flagship"],["Built","Wilhelmshaven, Germany"],["Launched","Late 1973"],["Commissioned","Mid-1974"],["Full load","12,800 t"],["Main guns","4 × 150 mm"],["Area-defense cells","32"],["Heavy anti-ship missiles","8"],["Helicopters","2"],["Active, 1985","1"]]
  }),

  "san-martin-class-destroyer": argentineNavalArticle({
    title:"San Martín-class destroyer",type:"Missile destroyer",period:"1972–1985",
    lead:"The San Martín class was a four-ship Argentine missile-destroyer class introduced between 1972 and 1979. Each 4,900-tonne steam-turbine ship carried two 127 mm guns, twenty-four surface-to-air missiles, eight anti-ship missiles, anti-submarine torpedoes, and one helicopter. All four remained active in 1985.",
    canon:"The four ships and names, 1972–1979 commissioning sequence, 4,900-tonne full-load displacement, steam-turbine propulsion, two 127 mm guns, twenty-four SAMs, eight anti-ship missiles, ASW torpedoes, one helicopter, missile-destroyer role, two German-built and two Argentine-assembled ships, and four active ships are established. Dimensions, speed, machinery arrangement, missile and sensor models, crew, builders by hull, refits, deployments, and detailed service histories remain open.",
    development:"The class gave Argentina a national missile-destroyer group below Almirante Brown. Two ships were built in Germany and two were assembled in Argentina, expanding local large-combatant experience without transferring the complete German technical ladder.",
    ships:argentineRoster([["San Martín","1972"],["Hércules","1974"],["Santísima Trinidad","1977"],["La Argentina","1979"]]),
    design:"Each ship displaced 4,900 tonnes at full load and used steam turbines. The standard fit comprised two 127 mm guns, twenty-four surface-to-air missiles, eight anti-ship missiles, anti-submarine torpedoes, and one helicopter.",
    capabilityTitle:"Weapons and aviation",capability:"The class could defend formations against aircraft, strike surface ships, conduct gunfire missions, and search for submarines with torpedoes and an embarked helicopter.",
    role:"The ships screened Veinticinco de Mayo, Almirante Brown, amphibious groups, convoys, and auxiliaries and could lead smaller corvette and missile-craft formations.",
    industry:"German-built hulls, Argentine assembly, and imported high-end systems made the class a principal example of Argentina's arsenal-state model. Replacement seekers, sensors, and specialized components remained dependent on Germany.",
    war:"All four ships were active on the 1985 reference date. The campaign register leaves individual deployments, losses, and detailed orders of battle open.",
    status:"San Martín, Hércules, Santísima Trinidad, and La Argentina were active.",
    related:[...argentineNavalRelated,{href:"ara-almirante-brown.html",kicker:"Command layer",label:"ARA Almirante Brown"},{href:"espora-class-corvette.html",kicker:"Later smaller combatant",label:"Espora Class"}],
    facts:[["Type","Missile destroyer"],["Ships built","4"],["Commissioned","1972–1979"],["Full load","4,900 t"],["Propulsion","Steam turbines"],["Main guns","2 × 127 mm"],["Surface-to-air missiles","24"],["Anti-ship missiles","8"],["Aviation","1 helicopter"],["Active, 1985","4"]]
  }),

  "espora-class-corvette": argentineNavalArticle({
    title:"Espora-class corvette",type:"Missile corvette",period:"1982–1985",
    lead:"The Espora class was a six-ship Argentine missile-corvette class commissioned from 1982 through 1985. The 2,100-tonne diesel ships carried one 100 mm gun, eight anti-ship missiles, short-range surface-to-air missiles, torpedoes, and one helicopter. All six were active in 1985.",
    canon:"The six ships and names, 1982–1985 commissioning sequence, 2,100-tonne full-load displacement, diesel propulsion, 100 mm gun, eight anti-ship missiles, short-range SAMs, torpedoes, one helicopter, missile-corvette role, Argentine licensed construction, and six active ships are established. Dimensions, speed, machinery arrangement, missile, sensor and torpedo models, crew, builders by hull, refits, deployments, and detailed service histories remain open.",
    development:"The class entered service as Argentina moved from smaller patrol corvettes and missile craft toward a helicopter-capable domestic missile combatant. Construction used Argentine yards under German license.",
    ships:argentineRoster([["Espora","1982"],["Rosales","1982"],["Parker","1983"],["Spiro","1983"],["Robinson","1984"],["Gómez Roca","1985"]]),
    design:"Each ship displaced 2,100 tonnes at full load and used diesel propulsion. One 100 mm gun, eight anti-ship missiles, short-range SAMs, torpedoes, and one helicopter formed the standard fit.",
    capabilityTitle:"Combat system",capability:"The class combined surface attack, local air defense, gunfire, anti-submarine weapons, and helicopter-supported surveillance in a corvette hull.",
    role:"Espora ships conducted coastal and ocean patrol, escorted shipping, reinforced larger task groups, and concentrated missile fire in South Atlantic waters.",
    industry:"Argentine licensed construction developed hull, assembly, and maintenance capacity. Germany continued to supply high-end seekers, combat-system inputs, engines or components, and specialized support.",
    war:"The first ships had entered service before the war and later units commissioned during the buildup. Individual deployments and combat histories remain open.",
    status:"All six named ships were active by the end of the 1985 commissioning sequence.",
    related:[...argentineNavalRelated,{href:"drummond-class-corvette.html",kicker:"Earlier patrol corvette",label:"Drummond Class"},{href:"intrepida-condor-class-missile-craft.html",kicker:"Fast-attack branch",label:"Intrépida and Cóndor Classes"}],
    facts:[["Type","Missile corvette"],["Ships built","6"],["Commissioned","1982–1985"],["Full load","2,100 t"],["Propulsion","Diesel"],["Main gun","1 × 100 mm"],["Anti-ship missiles","8"],["Aviation","1 helicopter"],["Construction","Argentina under German license"],["Active, 1985","6"]]
  }),

  "drummond-class-corvette": argentineNavalArticle({
    title:"Drummond-class corvette",type:"Patrol corvette",period:"1978–1985",
    lead:"The Drummond class was a four-ship Argentine patrol-corvette class commissioned between 1978 and 1981. Each 1,350-tonne diesel ship carried one 100 mm gun, four anti-ship missiles, and a light anti-submarine fit. All four remained active in 1985.",
    canon:"The four ships and names, 1978–1981 commissioning sequence, 1,350-tonne full-load displacement, diesel propulsion, 100 mm gun, four anti-ship missiles, light anti-submarine capability, patrol-corvette role, Argentine construction, and four active ships are established. Dimensions, speed, machinery arrangement, missile, sensor and ASW models, crew, builders by hull, refits, deployments, and detailed service histories remain open.",
    development:"The class expanded Argentine-built patrol and escort capacity before the larger Espora program. It combined routine maritime presence with a credible surface-strike armament.",
    ships:argentineRoster([["Drummond","1978"],["Guerrico","1979"],["Granville","1980"],["Bouchard","1981"]]),
    design:"Each ship displaced 1,350 tonnes at full load and used diesel propulsion. The standard fit comprised a 100 mm gun, four anti-ship missiles, and light anti-submarine equipment.",
    capabilityTitle:"Patrol armament",capability:"The gun supported warning, patrol, and shore-fire tasks; four missiles supplied surface attack; the light ASW fit allowed local escort and search.",
    role:"The ships patrolled approaches, escorted local traffic, enforced maritime control, and supplemented destroyers and larger corvettes.",
    industry:"Domestic construction placed the class within Argentina's established corvette and patrol-ship capacity. Some high-end sensors, missiles, and components remained imported.",
    war:"All four ships were available during the 1985 war. Named deployments, losses, and ammunition expenditure remain open.",
    status:"Drummond, Guerrico, Granville, and Bouchard were active.",
    related:[...argentineNavalRelated,{href:"espora-class-corvette.html",kicker:"Larger successor",label:"Espora Class"},{href:"intrepida-condor-class-missile-craft.html",kicker:"Fast-attack branch",label:"Intrépida and Cóndor Classes"}],
    facts:[["Type","Patrol corvette"],["Ships built","4"],["Commissioned","1978–1981"],["Full load","1,350 t"],["Propulsion","Diesel"],["Main gun","1 × 100 mm"],["Anti-ship missiles","4"],["ASW capability","Light"],["Construction","Argentina"],["Active, 1985","4"]]
  }),

  "intrepida-condor-class-missile-craft": argentineNavalArticle({
    title:"Intrépida and Cóndor-class missile craft",type:"Fast missile craft",period:"1974–1985",
    lead:"The Intrépida and Cóndor classes comprised two four-ship Argentine fast missile-craft groups commissioned between 1974 and 1983. All eight 450-tonne diesel craft carried one 76 mm gun and four anti-ship missiles and remained active in 1985.",
    canon:"The two four-ship classes and all eight names, 1974–1983 commissioning sequence, 450-tonne full-load displacement, diesel propulsion, 76 mm gun, four anti-ship missiles, fast-missile-craft role, Argentine construction, and eight active craft are established. Dimensions, speed, machinery arrangement, missile, gun and sensor models, crew, builders by hull, class-to-class design differences, refits, deployments, and detailed service histories remain open.",
    development:"Intrépida supplied the first four-boat group from 1974; Cóndor added a second group from 1980. The controlling fleet table treats them together because they share displacement and standard combat fit.",
    ships:argentineRoster([["Intrépida","1974"],["Indómita","1975"],["Heroína","1977"],["Guerrera","1978"],["Cóndor","1980"],["Águila","1981"],["Halcón","1982"],["Albatros","1983"]]),
    design:"Each craft displaced 450 tonnes at full load and used diesel propulsion. One 76 mm gun and four anti-ship missiles formed the standard 1985 armament.",
    capabilityTitle:"Missile attack",capability:"The craft used speed, coastal geography, dispersed bases, and external targeting to concentrate anti-ship missiles. Sensor, data-link, and missile models remain open.",
    role:"The two classes conducted coastal patrol, rapid interception, convoy protection, and attacks from mainland, island, and confined-water operating areas.",
    industry:"Argentina constructed both classes domestically while relying on imported high-end weapons and electronic components. Small-combatant production was one of the country's strongest naval industrial areas.",
    war:"All eight craft were active during the 1985 war. Their individual missions, damage, and losses remain open.",
    status:"Four Intrépida-class and four Cóndor-class craft were active, completing the eight-ship fast-missile category.",
    related:[...argentineNavalRelated,{href:"drummond-class-corvette.html",kicker:"Patrol-corvette branch",label:"Drummond Class"},{href:"espora-class-corvette.html",kicker:"Larger missile corvette",label:"Espora Class"}],
    facts:[["Classes","Intrépida · Cóndor"],["Ships","4 + 4"],["Commissioned","1974–1983"],["Full load","450 t"],["Propulsion","Diesel"],["Main gun","1 × 76 mm"],["Anti-ship missiles","4"],["Construction","Argentina"],["Active, 1985","8"]]
  }),

  "salta-class-submarine": argentineNavalArticle({
    title:"Salta-class submarine",type:"Type XXIV export submarine",period:"1967–1985",
    lead:"The Salta class was a two-boat Argentine conventional submarine class comprising <em>Salta</em> and <em>San Luis</em>. Delivered in 1967 and 1968, the German Type XXIV export boats displaced 1,900 tonnes submerged, used diesel-electric propulsion, and reached a registered speed of 18 knots. Both remained active in 1985.",
    canon:"The two boats and names, 1967 and 1968 delivery years, 1,900-tonne submerged displacement, 18-knot registered speed, diesel-electric propulsion, German Type XXIV export origin, patrol and convoy-attack role, and two active boats are established. Dimensions, surfaced displacement and speed, machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class gave Argentina a postwar German-designed ocean submarine and established the support, training, and maintenance relationship that preceded later imports and licensed assembly.",
    ships:argentineRoster([["Salta","1967"],["San Luis","1968"]]),
    design:"Each boat displaced 1,900 tonnes submerged, used diesel-electric propulsion, and had a registered 18-knot speed. Weapons, sensors, batteries, dimensions, and crew are not specified.",
    capabilityTitle:"Type XXIV export design",capability:"The boats were export derivatives rather than examples of Germany's current restricted submarine technology. Germany retained control over important replacement parts, specialized materials, and modernization.",
    role:"Salta boats performed patrol, convoy attack, reconnaissance, exercises, and barrier missions in South Atlantic waters.",
    industry:"The class was German-built and sustained through Argentine bases and workshops with continuing German technical support. It preceded domestic completion of licensed submarines.",
    war:"Both boats were active during the 1985 war. The campaign register does not identify the submarine used in Operación Tridente or fix individual patrol histories.",
    status:"Salta and San Luis were active.",
    related:[...argentineNavalRelated,{href:"santa-cruz-class-submarine.html",kicker:"Larger successor",label:"Santa Cruz Class"},{href:"santiago-del-estero-class-submarine.html",kicker:"Domestic coastal branch",label:"Santiago del Estero Class"},{href:"operacion-tridente.html",kicker:"Submarine operation",label:"Operación Tridente"}],
    facts:[["Type","Conventional attack submarine"],["Boats","Salta · San Luis"],["Delivered","1967 · 1968"],["German design","Type XXIV export"],["Submerged displacement","1,900 t"],["Registered speed","18 kn"],["Propulsion","Diesel-electric"],["Active, 1985","2"]]
  }),

  "santa-cruz-class-submarine": argentineNavalArticle({
    title:"Santa Cruz-class submarine",type:"Long-range conventional attack submarine",period:"1975–1985",
    lead:"The Santa Cruz class was a two-boat Argentine conventional submarine class comprising <em>Santa Cruz</em> and <em>Santa Fe</em>. Delivered in 1975 and 1977, the German Type XXXIII-derived export boats displaced 2,700 tonnes submerged, used diesel-electric propulsion, and reached a registered speed of 23 knots. Both remained active in 1985.",
    canon:"The two boats and names, controlling 1975 and 1977 delivery years, 2,700-tonne submerged displacement, 23-knot registered speed, diesel-electric propulsion, German Type XXXIII-derived export origin, long-range quiet-attack role, and two active boats are established. The controlling 1977 date for Santa Fe supersedes the registry's interim 1976 row. Dimensions, surfaced displacement and speed, machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class followed the smaller Salta boats and provided a later German-derived long-range undersea capability without transferring Germany's nuclear or most sensitive submarine technology.",
    ships:argentineRoster([["Santa Cruz","1975"],["Santa Fe","1977"]]),
    design:"Each boat displaced 2,700 tonnes submerged, used diesel-electric propulsion, and had a registered 23-knot speed. Weapons, sensors, battery arrangement, dimensions, and complement remain open.",
    capabilityTitle:"Type XXXIII-derived export design",capability:"The design descended from German Type XXXIII work but remained an export system. Quieting, weapons, sonar, and data processing were capable without matching Germany's newest restricted boats.",
    role:"The class conducted long-range attack, reconnaissance, convoy interdiction, and fleet-support patrols across the South Atlantic.",
    industry:"German construction and technical support gave Argentina high-end conventional boats while preserving dependency in sensors, weapons, specialized steel, quiet propellers, and refit knowledge.",
    war:"Both boats were active during the 1985 war. Individual patrols, contacts, attacks, and losses remain open.",
    status:"Santa Cruz and Santa Fe were active.",
    related:[...argentineNavalRelated,{href:"salta-class-submarine.html",kicker:"Earlier export class",label:"Salta Class"},{href:"santiago-del-estero-class-submarine.html",kicker:"Domestic coastal branch",label:"Santiago del Estero Class"},{href:"operation-nachtbruecke.html",kicker:"German sustainment",label:"Operation Nachtbrücke"}],
    facts:[["Type","Conventional attack submarine"],["Boats","Santa Cruz · Santa Fe"],["Delivered","1975 · 1977"],["German design","Type XXXIII-derived export"],["Submerged displacement","2,700 t"],["Registered speed","23 kn"],["Propulsion","Diesel-electric"],["Active, 1985","2"]]
  }),

  "santiago-del-estero-class-submarine": argentineNavalArticle({
    title:"Santiago del Estero-class submarine",type:"Coastal ambush submarine",period:"1980–1985",
    lead:"The Santiago del Estero class was a two-boat Argentine coastal submarine class comprising <em>Santiago del Estero</em> and <em>Catamarca</em>. Commissioned in 1980 and 1982, the Argentine-assembled German-license boats displaced 950 tonnes submerged, used diesel-electric propulsion, and reached a registered speed of 16 knots. Both remained active in 1985.",
    canon:"The two boats and names, controlling 1980 and 1982 commissioning years, 950-tonne submerged displacement, 16-knot registered speed, diesel-electric propulsion, Argentine assembly under German license, coastal and Falkland Sound ambush role, and two active boats are established. The controlling 1982 date for Catamarca supersedes the registry's interim 1981 row. Dimensions, surfaced displacement and speed, machinery, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class marked Argentina's transition from imported submarines toward licensed domestic assembly. It used a small hull for coastal waters, confined approaches, and ambush positions.",
    ships:argentineRoster([["Santiago del Estero","1980"],["Catamarca","1982"]]),
    design:"Each boat displaced 950 tonnes submerged, used diesel-electric propulsion, and had a registered 16-knot speed. Weapons, sensors, battery capacity, dimensions, and complement remain open.",
    capabilityTitle:"Coastal design",capability:"Small size and conventional propulsion suited concealment near coasts, island channels, and Falkland Sound. Exact endurance, diving depth, and acoustic characteristics are not fixed.",
    role:"The boats performed coastal ambush, local reconnaissance, defensive patrol, training, and attacks on shipping passing through constrained waters.",
    industry:"Argentina assembled the boats under German license. Domestic hull and assembly work expanded while high-end engines, sonar, weapons, materials, and quieting inputs remained German-dependent.",
    war:"Both boats were active during the 1985 war and were suited to the theater's confined waters. Their individual patrols and combat actions remain open.",
    status:"Santiago del Estero and Catamarca were active.",
    related:[...argentineNavalRelated,{href:"salta-class-submarine.html",kicker:"Earlier export class",label:"Salta Class"},{href:"santa-cruz-class-submarine.html",kicker:"Long-range branch",label:"Santa Cruz Class"},{href:"operacion-tridente.html",kicker:"Undersea campaign",label:"Operación Tridente"}],
    facts:[["Type","Coastal ambush submarine"],["Boats","Santiago del Estero · Catamarca"],["Commissioned","1980 · 1982"],["Submerged displacement","950 t"],["Registered speed","16 kn"],["Propulsion","Diesel-electric"],["Construction","Argentine assembly under German license"],["Active, 1985","2"]]
  }),

  "cabo-san-antonio-class-landing-ship": argentineNavalArticle({
    title:"Cabo San Antonio-class landing ship",type:"Tank landing ship",period:"1968–1985",
    lead:"The Cabo San Antonio class was a two-ship Argentine tank-landing class comprising <em>Cabo San Antonio</em> and <em>Cabo San Pío</em>. Commissioned in 1968 and 1972, the 8,200-tonne diesel ships had a registered speed of 16 knots and carried 540 troops and twenty-one armored vehicles. Both remained active in 1985.",
    canon:"The two ships and names, controlling 1968 and 1972 commissioning years, 8,200-tonne full-load displacement, 16-knot speed, diesel propulsion, 540-troop and twenty-one-armored-vehicle capacity, tank-landing role, Argentine construction, and two active ships are established. The controlling 1972 date for Cabo San Pío supersedes the registry's interim 1970 row. Dimensions, beaching arrangement, landing craft, weapons, sensors, crew, builders, vehicle mix, refits, deployments, and detailed service histories remain open.",
    development:"The class provided a domestically built method for moving armored vehicles, troops, stores, and engineering equipment directly to limited port or beach facilities.",
    ships:argentineRoster([["Cabo San Antonio","1968"],["Cabo San Pío","1972"]]),
    design:"Each ship displaced 8,200 tonnes at full load, used diesel propulsion, and had a registered speed of 16 knots. Standard capacity was 540 troops and twenty-one armored vehicles.",
    capabilityTitle:"Landing capacity",capability:"The ships could deliver troops and vehicles to austere shore facilities. Bow arrangements, landing craft, deck plans, weapons, and exact cargo alternatives remain open.",
    role:"The class supported amphibious landings, reinforcement, inter-theater lift, coastal logistics, and movement of armored and engineer units.",
    industry:"Argentine construction used domestic yards and a supplier system experienced in landing ships, auxiliaries, and merchant work. Imported propulsion and specialized components could still be required.",
    war:"Both ships were active during the 1985 war. Named participation in particular landings, losses, and cargoes remains open.",
    status:"Cabo San Antonio and Cabo San Pío were active.",
    related:[...argentineNavalRelated,{href:"bahia-class-assault-transport.html",kicker:"Assault and engineering partner",label:"Bahía Class"},{href:"falklands-campaign-1985.html",kicker:"Campaign context",label:"1985 Falklands Campaign"}],
    facts:[["Type","Tank landing ship"],["Ships","Cabo San Antonio · Cabo San Pío"],["Commissioned","1968 · 1972"],["Full load","8,200 t"],["Registered speed","16 kn"],["Propulsion","Diesel"],["Troops","540"],["Armored vehicles","21"],["Construction","Argentina"],["Active, 1985","2"]]
  }),

  "bahia-class-assault-transport": argentineNavalArticle({
    title:"Bahía-class assault transport",type:"Assault and engineering transport",period:"1978–1985",
    lead:"The Bahía class was a two-ship Argentine assault-transport class comprising <em>Bahía Buen Suceso</em> and <em>Bahía Paraíso</em>. Commissioned in 1978 and 1981, the 12,500-tonne diesel ships had a registered speed of 18 knots and carried troops, helicopters, landing craft, engineers, and runway material. Both remained active in 1985.",
    canon:"The two ships and names, controlling 1978 and 1981 commissioning years, 12,500-tonne full-load displacement, 18-knot speed, diesel propulsion, troops, helicopters, landing craft, engineers and runway-material capacity, assault-transport and engineering-support roles, Argentine construction, and two active ships are established. The controlling 1981 date for Bahía Paraíso supersedes the registry's interim 1980 row. Dimensions, troop and cargo totals, aviation and landing-craft counts, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"The class supplemented tank landing ships with aviation, landing craft, engineering staffs, and bulky construction cargo. It was suited to distant island and coastal operations.",
    ships:argentineRoster([["Bahía Buen Suceso","1978"],["Bahía Paraíso","1981"]]),
    design:"Each ship displaced 12,500 tonnes at full load, used diesel propulsion, and had a registered speed of 18 knots. Troops, helicopters, landing craft, engineers, and runway material formed the standard capability description.",
    capabilityTitle:"Assault and engineering capacity",capability:"The ships combined personnel lift, rotary-wing operations, boat delivery, construction support, and cargo movement. Exact troop, aircraft, craft, vehicle, and stores capacities remain open.",
    role:"Bahía transports supported amphibious assault, base establishment, runway repair, reinforcement, casualty movement, and sustained island logistics.",
    industry:"Domestic construction linked naval requirements to Argentina's merchant, auxiliary, landing-ship, and engineering industries. Specialized machinery and systems could still use imported inputs.",
    war:"The class's standard capabilities were directly relevant to the 1985 island campaign. Individual operations, damage, losses, and cargo manifests remain open.",
    status:"Bahía Buen Suceso and Bahía Paraíso were active.",
    related:[...argentineNavalRelated,{href:"cabo-san-antonio-class-landing-ship.html",kicker:"Tank-landing partner",label:"Cabo San Antonio Class"},{href:"operation-winter-quay.html",kicker:"Engineering-war context",label:"Operation Winter Quay"}],
    facts:[["Type","Assault and engineering transport"],["Ships","Bahía Buen Suceso · Bahía Paraíso"],["Commissioned","1978 · 1981"],["Full load","12,500 t"],["Registered speed","18 kn"],["Propulsion","Diesel"],["Aviation","Helicopters"],["Landing system","Landing craft"],["Engineering cargo","Runway material"],["Active, 1985","2"]]
  })
});
