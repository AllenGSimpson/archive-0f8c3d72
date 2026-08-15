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
    lead:"The San Martín class was a four-ship Argentine missile-destroyer class introduced between 1972 and 1979. Each 4,900-tonne steam-turbine ship carried two 127 mm guns, twenty-four surface-to-air missiles, eight anti-ship missiles, anti-submarine torpedoes, and one helicopter. The working register carries all four as active in 1985.",
    canon:"The four ships and names, 1972–1979 commissioning sequence, 4,900-tonne full-load displacement, steam-turbine propulsion, two 127 mm guns, twenty-four SAMs, eight anti-ship missiles, ASW torpedoes, one helicopter, missile-destroyer role, and mixed German and Argentine construction are established. The two-German/two-Argentine allocation and four-active-ship status remain provisional pending the rebuilt hull registry. Dimensions, speed, machinery arrangement, missile and sensor models, crew, builders by hull, refits, deployments, and detailed service histories remain open.",
    development:"The class gave Argentina a national missile-destroyer group below Almirante Brown. Two ships were built in Germany and two were assembled in Argentina, expanding local large-combatant experience without transferring the complete German technical ladder.",
    ships:argentineRoster([["San Martín","1972","Working active allocation"],["Hércules","1974","Working active allocation"],["Santísima Trinidad","1977","Working active allocation"],["La Argentina","1979","Working active allocation"]]),
    design:"Each ship displaced 4,900 tonnes at full load and used steam turbines. The standard fit comprised two 127 mm guns, twenty-four surface-to-air missiles, eight anti-ship missiles, anti-submarine torpedoes, and one helicopter.",
    capabilityTitle:"Weapons and aviation",capability:"The class could defend formations against aircraft, strike surface ships, conduct gunfire missions, and search for submarines with torpedoes and an embarked helicopter.",
    role:"The ships screened Veinticinco de Mayo, Almirante Brown, amphibious groups, convoys, and auxiliaries and could lead smaller corvette and missile-craft formations.",
    industry:"German-built hulls, Argentine assembly, and imported high-end systems made the class a principal example of Argentina's arsenal-state model. Replacement seekers, sensors, and specialized components remained dependent on Germany.",
    war:"The working register carries all four ships on the 1985 reference date. The campaign register leaves individual availability, deployments, losses, and detailed orders of battle open.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-v3h7m writer=g kind=revision created=2026-08-15T14:33:00-06:00 -->San Martín, Hércules, Santísima Trinidad, and La Argentina are the established class roster; their all-active 1985 status remains a provisional allocation.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"ara-almirante-brown.html",kicker:"Command layer",label:"ARA Almirante Brown"},{href:"espora-class-corvette.html",kicker:"Later smaller combatant",label:"Espora Class"}],
    facts:[["Type","Missile destroyer"],["Ships built","4"],["Commissioned","1972–1979"],["Full load","4,900 t"],["Propulsion","Steam turbines"],["Main guns","2 × 127 mm"],["Surface-to-air missiles","24"],["Anti-ship missiles","8"],["Aviation","1 helicopter"],["Active, 1985","4 provisional"]]
  }),

  "espora-class-corvette": argentineNavalArticle({
    title:"Espora-class corvette",type:"Missile corvette",period:"1982–1985",
    lead:"The Espora class was a six-ship Argentine missile-corvette class commissioned from 1982 through 1985. The 2,100-tonne diesel ships carried one 100 mm gun, eight anti-ship missiles, short-range surface-to-air missiles, torpedoes, and one helicopter. The working register carries all six as active in 1985.",
    canon:"The six ships and names, 1982–1985 commissioning sequence, 2,100-tonne full-load displacement, diesel propulsion, 100 mm gun, eight anti-ship missiles, short-range SAMs, torpedoes, one helicopter, missile-corvette role, and Argentine domestic production are established. German-license terms and six-active-ship status remain provisional pending the rebuilt hull registry. Dimensions, speed, machinery arrangement, missile, sensor and torpedo models, crew, builders by hull, refits, deployments, and detailed service histories remain open.",
    development:"The class entered service as Argentina moved from smaller patrol corvettes and missile craft toward a helicopter-capable domestic missile combatant. Construction used Argentine yards under German license.",
    ships:argentineRoster([["Espora","1982","Working active allocation"],["Rosales","1982","Working active allocation"],["Parker","1983","Working active allocation"],["Spiro","1983","Working active allocation"],["Robinson","1984","Working active allocation"],["Gómez Roca","1985","Working active allocation"]]),
    design:"Each ship displaced 2,100 tonnes at full load and used diesel propulsion. One 100 mm gun, eight anti-ship missiles, short-range SAMs, torpedoes, and one helicopter formed the standard fit.",
    capabilityTitle:"Combat system",capability:"The class combined surface attack, local air defense, gunfire, anti-submarine weapons, and helicopter-supported surveillance in a corvette hull.",
    role:"Espora ships conducted coastal and ocean patrol, escorted shipping, reinforced larger task groups, and concentrated missile fire in South Atlantic waters.",
    industry:"Argentine licensed construction developed hull, assembly, and maintenance capacity. Germany continued to supply high-end seekers, combat-system inputs, engines or components, and specialized support.",
    war:"The first ships had entered service before the war and later units commissioned during the buildup. Individual availability, deployments, and combat histories remain open.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-w5q9c writer=g kind=revision created=2026-08-15T14:34:00-06:00 -->Espora, Rosales, Parker, Spiro, Robinson, and Gómez Roca are the established class roster; their all-active status at the end of the 1985 commissioning sequence remains a provisional allocation.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"drummond-class-corvette.html",kicker:"Earlier patrol corvette",label:"Drummond Class"},{href:"intrepida-condor-class-missile-craft.html",kicker:"Fast-attack branch",label:"Intrépida and Cóndor Classes"}],
    facts:[["Type","Missile corvette"],["Ships built","6"],["Commissioned","1982–1985"],["Full load","2,100 t"],["Propulsion","Diesel"],["Main gun","1 × 100 mm"],["Anti-ship missiles","8"],["Aviation","1 helicopter"],["Construction","Argentina; license terms open"],["Active, 1985","6 provisional"]]
  }),

  "drummond-class-corvette": argentineNavalArticle({
    title:"Drummond-class corvette",type:"Patrol corvette",period:"1978–1985",
    lead:"The Drummond class was a four-ship Argentine patrol-corvette class commissioned between 1978 and 1981. Each 1,350-tonne diesel ship carried one 100 mm gun, four anti-ship missiles, and a light anti-submarine fit. The working register carries all four as active in 1985.",
    canon:"The four ships and names, 1978–1981 commissioning sequence, 1,350-tonne full-load displacement, diesel propulsion, 100 mm gun, four anti-ship missiles, light anti-submarine capability, patrol-corvette role, and Argentine construction are established. Four-active-ship status remains provisional pending the rebuilt hull registry. Dimensions, speed, machinery arrangement, missile, sensor and ASW models, crew, builders by hull, refits, deployments, and detailed service histories remain open.",
    development:"The class expanded Argentine-built patrol and escort capacity before the larger Espora program. It combined routine maritime presence with a credible surface-strike armament.",
    ships:argentineRoster([["Drummond","1978","Working active allocation"],["Guerrico","1979","Working active allocation"],["Granville","1980","Working active allocation"],["Bouchard","1981","Working active allocation"]]),
    design:"Each ship displaced 1,350 tonnes at full load and used diesel propulsion. The standard fit comprised a 100 mm gun, four anti-ship missiles, and light anti-submarine equipment.",
    capabilityTitle:"Patrol armament",capability:"The gun supported warning, patrol, and shore-fire tasks; four missiles supplied surface attack; the light ASW fit allowed local escort and search.",
    role:"The ships patrolled approaches, escorted local traffic, enforced maritime control, and supplemented destroyers and larger corvettes.",
    industry:"Domestic construction placed the class within Argentina's established corvette and patrol-ship capacity. Some high-end sensors, missiles, and components remained imported.",
    war:"The working register carries all four ships during the 1985 war. Individual availability, named deployments, losses, and ammunition expenditure remain open.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-x7r3f writer=g kind=revision created=2026-08-15T14:35:00-06:00 -->Drummond, Guerrico, Granville, and Bouchard are the established class roster; their all-active 1985 status remains a provisional allocation.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"espora-class-corvette.html",kicker:"Larger successor",label:"Espora Class"},{href:"intrepida-condor-class-missile-craft.html",kicker:"Fast-attack branch",label:"Intrépida and Cóndor Classes"}],
    facts:[["Type","Patrol corvette"],["Ships built","4"],["Commissioned","1978–1981"],["Full load","1,350 t"],["Propulsion","Diesel"],["Main gun","1 × 100 mm"],["Anti-ship missiles","4"],["ASW capability","Light"],["Construction","Argentina"],["Active, 1985","4 provisional"]]
  }),

  "intrepida-condor-class-missile-craft": argentineNavalArticle({
    title:"Intrépida and Cóndor-class missile craft",type:"Fast missile craft",period:"1974–1985",
    lead:"The Intrépida/Cóndor family was an Argentine fast-missile-craft design introduced across the 1974–1983 period. The naval reference assigns the family a 450-tonne full-load displacement, one 76 mm gun, and four anti-ship missiles. A working hull reconstruction divides it into two four-craft groups and supplies eight names, dates, and 1985 statuses.",
    canon:"The Intrépida/Cóndor design family, 1974–1983 introduction span, 450-tonne full-load displacement, 76 mm gun, four anti-ship missiles, fast-missile-craft role, and Argentina's capacity to build missile craft are established. Division into two four-craft classes, all eight names and individual years, diesel propulsion, domestic construction of every hull, and eight-active-craft total are provisional registry assignments. Dimensions, speed, machinery arrangement, missile, gun and sensor models, crew, builders by hull, class-to-class design differences, refits, deployments, and detailed service histories remain open.",
    development:"The working reconstruction assigns Intrépida to a first four-craft group from 1974 and Cóndor to a second group from 1980. The naval reference combines the names as one design family and fixes only the 1974–1983 introduction span, displacement, and standard combat fit.",
    ships:argentineRoster([["Intrépida","1974","Working active allocation"],["Indómita","1975","Working active allocation"],["Heroína","1977","Working active allocation"],["Guerrera","1978","Working active allocation"],["Cóndor","1980","Working active allocation"],["Águila","1981","Working active allocation"],["Halcón","1982","Working active allocation"],["Albatros","1983","Working active allocation"]]),
    design:"The reference design displaces 450 tonnes at full load and carries one 76 mm gun and four anti-ship missiles. The working registry assigns diesel propulsion; machinery details remain provisional.",
    capabilityTitle:"Missile attack",capability:"The craft used speed, coastal geography, dispersed bases, and external targeting to concentrate anti-ship missiles. Sensor, data-link, and missile models remain open.",
    role:"The two classes conducted coastal patrol, rapid interception, convoy protection, and attacks from mainland, island, and confined-water operating areas.",
    industry:"Argentina's ability to build missile craft domestically is established, while domestic construction of every working Intrépida/Cóndor hull remains a registry assignment. High-end weapons and electronic components could still be imported.",
    war:"The campaign register does not yet establish the available hull count, individual deployments, damage, or losses for the Intrépida/Cóndor family during the 1985 war.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-r4k8v writer=g kind=revision created=2026-08-15T14:25:00-06:00 -->The working registry assigns four Intrépida-class and four Cóndor-class craft as active in 1985. The two-class division, hull roster, and eight-craft total remain provisional pending the rebuilt Argentine registry.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"drummond-class-corvette.html",kicker:"Patrol-corvette branch",label:"Drummond Class"},{href:"espora-class-corvette.html",kicker:"Larger missile corvette",label:"Espora Class"}],
    facts:[["Design family","Intrépida/Cóndor"],["Working ships","4 + 4 provisional"],["Introduction span","1974–1983"],["Full load","450 t"],["Working propulsion","Diesel"],["Main gun","1 × 76 mm"],["Anti-ship missiles","4"],["Construction capacity","Argentina"],["Active, 1985","8 provisional"]]
  }),

  "salta-class-submarine": argentineNavalArticle({
    title:"Salta-class submarine",type:"Type XXIV export submarine",period:"1967–1985",
    lead:"The Salta class was a two-boat Argentine conventional submarine class comprising <em>Salta</em> and <em>San Luis</em>. Delivered in 1967 and 1968, the German Type XXIV export boats displaced 1,900 tonnes submerged and had a registered speed of 18 knots. The working register assigns diesel-electric propulsion and carries both boats as active in 1985.",
    canon:"The two boats and names, 1967 and 1968 delivery years, 1,900-tonne submerged displacement, 18-knot registered speed, conventional-submarine type, and German Type XXIV export origin are established. Diesel-electric machinery, detailed patrol and convoy-attack doctrine, and two-active-boat status remain provisional pending class and hull review. Dimensions, surfaced displacement and speed, machinery details, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class gave Argentina a postwar German-designed ocean submarine and established the support, training, and maintenance relationship that preceded later imports and licensed assembly.",
    ships:argentineRoster([["Salta","1967","Working active allocation"],["San Luis","1968","Working active allocation"]]),
    design:"Each boat displaced 1,900 tonnes submerged and had a registered 18-knot speed. The working registry assigns diesel-electric propulsion; weapons, sensors, batteries, dimensions, and crew are not specified.",
    capabilityTitle:"Type XXIV export design",capability:"The boats were export derivatives rather than examples of Germany's current restricted submarine technology. Germany retained control over important replacement parts, specialized materials, and modernization.",
    role:"The working operational reconstruction assigns patrol, convoy attack, reconnaissance, exercise, and barrier missions in South Atlantic waters; individual doctrine and operations remain open.",
    industry:"The class was German-built and sustained through Argentine bases and workshops with continuing German technical support. It preceded domestic completion of licensed submarines.",
    war:"The working register carries both boats during the 1985 war. The campaign register does not confirm their individual availability, identify the submarine used in Operación Tridente, or fix individual patrol histories.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-y9d5s writer=g kind=revision created=2026-08-15T14:36:00-06:00 -->Salta and San Luis are the established class roster; their both-active 1985 status remains a provisional allocation.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"santa-cruz-class-submarine.html",kicker:"Larger successor",label:"Santa Cruz Class"},{href:"santiago-del-estero-class-submarine.html",kicker:"Domestic coastal branch",label:"Santiago del Estero Class"},{href:"operacion-tridente.html",kicker:"Submarine operation",label:"Operación Tridente"}],
    facts:[["Type","Conventional attack submarine"],["Boats","Salta · San Luis"],["Delivered","1967 · 1968"],["German design","Type XXIV export"],["Submerged displacement","1,900 t"],["Registered speed","18 kn"],["Working propulsion","Diesel-electric"],["Active, 1985","2 provisional"]]
  }),

  "santa-cruz-class-submarine": argentineNavalArticle({
    title:"Santa Cruz-class submarine",type:"Long-range conventional attack submarine",period:"1975–1985",
    lead:"The Santa Cruz class was a two-boat Argentine conventional submarine class comprising <em>Santa Cruz</em> and <em>Santa Fe</em>. Delivered in 1975 and 1977, the German Type XXXIII-derived export boats displaced 2,700 tonnes submerged and had a registered speed of 23 knots. The working register assigns diesel-electric propulsion and carries both boats as active in 1985.",
    canon:"The two boats and names, controlling 1975 and 1977 delivery years, 2,700-tonne submerged displacement, 23-knot registered speed, conventional-submarine type, and German Type XXXIII-derived export origin are established. The controlling 1977 date for Santa Fe supersedes the registry's interim 1976 row. Diesel-electric machinery, the detailed long-range quiet-attack doctrine, and two-active-boat status remain provisional pending class and hull review. Dimensions, surfaced displacement and speed, machinery details, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class followed the smaller Salta boats and provided a later German-derived long-range undersea capability without transferring Germany's nuclear or most sensitive submarine technology.",
    ships:argentineRoster([["Santa Cruz","1975","Working active allocation"],["Santa Fe","1977","Working active allocation"]]),
    design:"Each boat displaced 2,700 tonnes submerged and had a registered 23-knot speed. The working registry assigns diesel-electric propulsion; weapons, sensors, battery arrangement, dimensions, and complement remain open.",
    capabilityTitle:"Type XXXIII-derived export design",capability:"The design descended from German Type XXXIII work but remained an export system. Quieting, weapons, sonar, and data processing were capable without matching Germany's newest restricted boats.",
    role:"The working operational reconstruction assigns long-range attack, reconnaissance, convoy interdiction, and fleet-support patrols across the South Atlantic; individual doctrine and operations remain open.",
    industry:"German construction and technical support gave Argentina high-end conventional boats while preserving dependency in sensors, weapons, specialized steel, quiet propellers, and refit knowledge.",
    war:"The working register carries both boats during the 1985 war. Individual availability, patrols, contacts, attacks, and losses remain open.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-z2f6k writer=g kind=revision created=2026-08-15T14:37:00-06:00 -->Santa Cruz and Santa Fe are the established class roster; their both-active 1985 status remains a provisional allocation.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"salta-class-submarine.html",kicker:"Earlier export class",label:"Salta Class"},{href:"santiago-del-estero-class-submarine.html",kicker:"Domestic coastal branch",label:"Santiago del Estero Class"},{href:"operation-nachtbruecke.html",kicker:"German sustainment",label:"Operation Nachtbrücke"}],
    facts:[["Type","Conventional attack submarine"],["Boats","Santa Cruz · Santa Fe"],["Delivered","1975 · 1977"],["German design","Type XXXIII-derived export"],["Submerged displacement","2,700 t"],["Registered speed","23 kn"],["Working propulsion","Diesel-electric"],["Active, 1985","2 provisional"]]
  }),

  "santiago-del-estero-class-submarine": argentineNavalArticle({
    title:"Santiago del Estero-class submarine",type:"Coastal ambush submarine",period:"1980–1985",
    lead:"The Santiago del Estero class was a two-boat Argentine coastal submarine class comprising <em>Santiago del Estero</em> and <em>Catamarca</em>. Commissioned in 1980 and 1982, the Argentine-assembled licensed boats displaced 950 tonnes submerged and had a registered speed of 16 knots. The working register assigns diesel-electric propulsion and carries both boats as active in 1985.",
    canon:"The two boats and names, controlling 1980 and 1982 commissioning years, 950-tonne submerged displacement, 16-knot registered speed, Argentine licensed assembly, and coastal-ambush role are established. The controlling 1982 date for Catamarca supersedes the registry's interim 1981 row. Diesel-electric machinery, a specific Falkland Sound mission, and two-active-boat status remain provisional pending class and hull review. Dimensions, surfaced displacement and speed, machinery details, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class marked Argentina's transition from imported submarines toward licensed domestic assembly. It used a small hull for coastal waters, confined approaches, and ambush positions.",
    ships:argentineRoster([["Santiago del Estero","1980","Working active allocation"],["Catamarca","1982","Working active allocation"]]),
    design:"Each boat displaced 950 tonnes submerged and had a registered 16-knot speed. The working registry assigns diesel-electric propulsion; weapons, sensors, battery capacity, dimensions, and complement remain open.",
    capabilityTitle:"Coastal design",capability:"The coastal-ambush role suited concealment near coasts and confined approaches. Assignment to particular island channels or Falkland Sound remains open, as do endurance, diving depth, and acoustic characteristics.",
    role:"The boats performed coastal ambush, local reconnaissance, defensive patrol, training, and attacks on shipping passing through constrained waters.",
    industry:"Argentina assembled the boats under German license. Domestic hull and assembly work expanded while high-end engines, sonar, weapons, materials, and quieting inputs remained German-dependent.",
    war:"The working register carries both boats during the 1985 war. Their individual availability, patrols, and combat actions remain open.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-a4j8q writer=g kind=revision created=2026-08-15T14:38:00-06:00 -->Santiago del Estero and Catamarca are the established class roster; their both-active 1985 status and any specific Falkland Sound assignment remain provisional.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"salta-class-submarine.html",kicker:"Earlier export class",label:"Salta Class"},{href:"santa-cruz-class-submarine.html",kicker:"Long-range branch",label:"Santa Cruz Class"},{href:"operacion-tridente.html",kicker:"Undersea campaign",label:"Operación Tridente"}],
    facts:[["Type","Coastal ambush submarine"],["Boats","Santiago del Estero · Catamarca"],["Commissioned","1980 · 1982"],["Submerged displacement","950 t"],["Registered speed","16 kn"],["Working propulsion","Diesel-electric"],["Construction","Argentine licensed assembly"],["Active, 1985","2 provisional"]]
  }),

  "cabo-san-antonio-class-landing-ship": argentineNavalArticle({
    title:"Cabo San Antonio-class landing ship",type:"Tank landing ship",period:"1968–1985",
    lead:"The Cabo San Antonio class was a two-ship Argentine tank-landing class comprising <em>Cabo San Antonio</em> and <em>Cabo San Pío</em>. Commissioned in 1968 and 1972, the 8,200-tonne ships had a registered speed of 16 knots and carried 540 troops and twenty-one armored vehicles. The working register assigns diesel propulsion and carries both ships as active in 1985.",
    canon:"The two ships and names, controlling 1968 and 1972 commissioning years, 8,200-tonne full-load displacement, 16-knot speed, 540-troop and twenty-one-armored-vehicle capacity, and tank-landing role are established. The controlling 1972 date for Cabo San Pío supersedes the registry's interim 1970 row. Diesel propulsion, domestic construction of both hulls, and two-active-ship status remain provisional pending class and hull review; Argentina's capacity to build landing ships is established. Dimensions, beaching arrangement, landing craft, weapons, sensors, crew, builders, vehicle mix, refits, deployments, and detailed service histories remain open.",
    development:"The class moved armored vehicles, troops, stores, and engineering equipment to limited port or beach facilities. The working registry treats both hulls as domestically built.",
    ships:argentineRoster([["Cabo San Antonio","1968","Working active allocation"],["Cabo San Pío","1972","Working active allocation"]]),
    design:"Each ship displaced 8,200 tonnes at full load, had a registered speed of 16 knots, and carried 540 troops and twenty-one armored vehicles. The working registry assigns diesel propulsion.",
    capabilityTitle:"Landing capacity",capability:"The ships could deliver troops and vehicles to austere shore facilities. Bow arrangements, landing craft, deck plans, weapons, and exact cargo alternatives remain open.",
    role:"The class supported amphibious landings, reinforcement, inter-theater lift, coastal logistics, and movement of armored and engineer units.",
    industry:"Argentina's ability to build landing ships is established. Domestic construction of both named hulls remains a working allocation; imported propulsion and specialized components could still be required.",
    war:"The working register carries both ships during the 1985 war. Individual availability, participation in particular landings, losses, and cargoes remain open.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-b6m2t writer=g kind=revision created=2026-08-15T14:39:00-06:00 -->Cabo San Antonio and Cabo San Pío are the established class roster; diesel propulsion, domestic construction of both hulls, and their both-active 1985 status remain provisional allocations.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"bahia-class-assault-transport.html",kicker:"Assault and engineering partner",label:"Bahía Class"},{href:"falklands-campaign-1985.html",kicker:"Campaign context",label:"1985 Falklands Campaign"}],
    facts:[["Type","Tank landing ship"],["Ships","Cabo San Antonio · Cabo San Pío"],["Commissioned","1968 · 1972"],["Full load","8,200 t"],["Registered speed","16 kn"],["Working propulsion","Diesel"],["Troops","540"],["Armored vehicles","21"],["Working construction","Argentina"],["Active, 1985","2 provisional"]]
  }),

  "bahia-class-assault-transport": argentineNavalArticle({
    title:"Bahía-class assault transport",type:"Assault and engineering transport",period:"1978–1985",
    lead:"The Bahía class was a two-ship Argentine assault-transport class comprising <em>Bahía Buen Suceso</em> and <em>Bahía Paraíso</em>. Commissioned in 1978 and 1981, the 12,500-tonne ships had a registered speed of 18 knots and carried troops, helicopters, landing craft, engineers, and runway material. The working register assigns diesel propulsion and carries both ships as active in 1985.",
    canon:"The two ships and names, controlling 1978 and 1981 commissioning years, 12,500-tonne full-load displacement, 18-knot speed, troops, helicopters, landing craft, engineers and runway-material capacity, and assault-transport and engineering-support roles are established. The controlling 1981 date for Bahía Paraíso supersedes the registry's interim 1980 row. Diesel propulsion, domestic construction of both hulls, and two-active-ship status remain provisional pending class and hull review; Argentina's capacity to build landing ships is established. Dimensions, troop and cargo totals, aviation and landing-craft counts, weapons, sensors, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"The class supplemented tank landing ships with aviation, landing craft, engineering staffs, and bulky construction cargo. It was suited to distant island and coastal operations.",
    ships:argentineRoster([["Bahía Buen Suceso","1978","Working active allocation"],["Bahía Paraíso","1981","Working active allocation"]]),
    design:"Each ship displaced 12,500 tonnes at full load and had a registered speed of 18 knots. Troops, helicopters, landing craft, engineers, and runway material formed the standard capability description; the working registry assigns diesel propulsion.",
    capabilityTitle:"Assault and engineering capacity",capability:"The ships combined personnel lift, rotary-wing operations, boat delivery, construction support, and cargo movement. Exact troop, aircraft, craft, vehicle, and stores capacities remain open.",
    role:"The working operational reconstruction assigns amphibious assault, base establishment, runway repair, reinforcement, casualty movement, and sustained island logistics; individual missions remain open.",
    industry:"Argentina's ability to build landing ships is established. Domestic construction of both named hulls remains a working allocation; specialized machinery and systems could still use imported inputs.",
    war:"The class's standard capabilities were directly relevant to the 1985 island campaign. Individual operations, damage, losses, and cargo manifests remain open.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-c8p4v writer=g kind=revision created=2026-08-15T14:40:00-06:00 -->Bahía Buen Suceso and Bahía Paraíso are the established class roster; diesel propulsion, domestic construction of both hulls, and their both-active 1985 status remain provisional allocations.<!-- altwwii-writer-block:end -->",
    related:[...argentineNavalRelated,{href:"cabo-san-antonio-class-landing-ship.html",kicker:"Tank-landing partner",label:"Cabo San Antonio Class"},{href:"operation-winter-quay.html",kicker:"Engineering-war context",label:"Operation Winter Quay"}],
    facts:[["Type","Assault and engineering transport"],["Ships","Bahía Buen Suceso · Bahía Paraíso"],["Commissioned","1978 · 1981"],["Full load","12,500 t"],["Registered speed","18 kn"],["Working propulsion","Diesel"],["Aviation","Helicopters"],["Landing system","Landing craft"],["Engineering cargo","Runway material"],["Active, 1985","2 provisional"]]
  })
});
