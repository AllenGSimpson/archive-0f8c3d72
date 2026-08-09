window.deepArticles = window.deepArticles || {};

const italianCombatantArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Regia Marina · ${config.type} · ${config.period}`,
  infoboxKicker:"Italian warship class",
  lead:config.lead,
  canon:config.canon,
  sections:[
    {id:"development",title:"Development",html:`<p>${config.development}</p>`},
    {id:"registry",title:"Registered ships",html:config.registry},
    {id:"design",title:"Registered design",html:`<p>${config.design}</p>`},
    {id:"role",title:"Operational role",html:`<p>${config.role}</p>`},
    {id:"system",title:config.systemTitle,html:`<p>${config.system}</p>`},
    {id:"service",title:"Service",html:`<p>${config.service}</p>`},
    {id:"transition",title:config.transitionTitle,html:`<p>${config.transition}</p>`},
    {id:"status",title:"Status in 1985",html:`<p>${config.status}</p>`}
  ],
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Regia Marina","Italian warships","Naval history","Military technology"]
});

const italianEscortRelated = [
  {href:"regia-marina-postwar.html",kicker:"Parent service",label:"Regia Marina"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"}
];

const italianClassRoster = names => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Registered ship</th><th>Status, 1985</th></tr></thead><tbody>${names.map(name => `<tr><td>${name}</td><td>Active</td></tr>`).join("")}</tbody></table></div>`;

const regiaMarinaCombatantOverview = window.deepArticles["regia-marina-postwar"];
if (regiaMarinaCombatantOverview) {
  const classSection = regiaMarinaCombatantOverview.sections.find(section => section.id === "classes");
  if (classSection) {
    classSection.html = classSection.html
      .replace("Impavido destroyer", "<a href='impavido-class-destroyer.html'>Impavido destroyer</a>")
      .replace("Audace destroyer", "<a href='audace-class-destroyer.html'>Audace destroyer</a>")
      .replace("Ardito destroyer", "<a href='ardito-class-destroyer.html'>Ardito destroyer</a>")
      .replace("Alpino frigate", "<a href='alpino-class-frigate.html'>Alpino frigate</a>")
      .replace("Lupo frigate", "<a href='lupo-class-frigate.html'>Lupo frigate</a>")
      .replace("Marconi", "<a href='marconi-class-ssn.html'>Marconi</a>")
      .replace("Galileo", "<a href='galileo-class-ssgn.html'>Galileo</a>");
  }
  const submarineSection = regiaMarinaCombatantOverview.sections.find(section => section.id === "submarines");
  if (submarineSection) {
    submarineSection.html = submarineSection.html
      .replace("Marconi-class", "<a href='marconi-class-ssn.html'>Marconi-class</a>")
      .replace("Galileo-class", "<a href='galileo-class-ssgn.html'>Galileo-class</a>")
      .replace("Four Sauro", "Four <a href='sauro-class-submarine.html'>Sauro</a>")
      .replace("four Toti", "four <a href='toti-class-submarine.html'>Toti</a>");
  }
  regiaMarinaCombatantOverview.related = [
    {href:"ardito-class-destroyer.html",kicker:"Advanced fleet escort",label:"Ardito Class"},
    {href:"lupo-class-frigate.html",kicker:"Fast missile frigate",label:"Lupo Class"},
    {href:"marconi-class-ssn.html",kicker:"Nuclear attack",label:"Marconi Class"},
    {href:"galileo-class-ssgn.html",kicker:"Guided-missile submarine",label:"Galileo Class"},
    {href:"toti-class-submarine.html",kicker:"Conventional branch",label:"Toti Class"},
    ...regiaMarinaCombatantOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "impavido-class-destroyer": italianCombatantArticle({
    title:"Impavido-class destroyer",type:"Missile destroyer",period:"1958–1985",
    lead:"The Impavido class was a four-ship Italian missile-destroyer class introduced between 1958 and 1965. All four 4,300-tonne steam-turbine ships remained active in 1985. The asset registry supplies the working names <em>Audacia</em>, <em>Ardore</em>, <em>Risoluto</em>, and <em>Temerario</em>.",
    canon:"The four-ship total, 1958–1965 introduction band, 4,300-tonne full-load displacement, steam-turbine propulsion, missile-destroyer role, Italian construction, and four active ships are established. The four names are registered extrapolations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, individual commissioning dates, refits, deployments, and detailed service histories remain open.",
    development:"Impavido was Italy's first registered postwar missile-destroyer generation. It entered service as the Regia Marina added guided air defense and carrier screening to its inherited gun fleet.",
    registry:italianClassRoster(["Audacia","Ardore","Risoluto","Temerario"]),
    design:"Each ship displaced 4,300 tonnes at full load and used steam turbines. The controlling register fixes the missile-destroyer category without specifying launcher, missile, gun, sensor, or aviation fit.",
    role:"The class screened carriers and larger surface ships, protected approaches and convoys, and supplied guided air-defense and surface-combat capability within Mediterranean task groups.",
    systemTitle:"Missile transition",system:"The ships linked wartime gun and torpedo practice to later data-linked missile formations. Exact conversion, modernization, and fire-control chronology remains unsettled.",
    service:"Dense Italian basing allowed the class to operate with shorter endurance than a Spanish Atlantic escort. Latin fuel, communications, replenishment, and tactical-data standards supported mixed operations.",
    transitionTitle:"Audace development",transition:"The larger Audace class followed from 1968, while Impavido ships remained in service alongside both later destroyer generations.",
    status:"All four ships were active. Individual readiness and squadron assignments are open.",
    related:[...italianEscortRelated,{href:"audace-class-destroyer.html",kicker:"Successor",label:"Audace Class"},{href:"augusto-class-carrier.html",kicker:"Screened force",label:"Augusto Class"}],
    facts:[["Type","Missile destroyer"],["Ships built","4"],["Introduction","1958–1965"],["Full load","4,300 t"],["Propulsion","Steam turbines"],["Active, 1985","4"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "audace-class-destroyer": italianCombatantArticle({
    title:"Audace-class destroyer",type:"Missile destroyer",period:"1968–1985",
    lead:"The Audace class was a four-ship Italian missile-destroyer class introduced between 1968 and 1975. All four 5,200-tonne steam-turbine ships remained active in 1985 under the registered names <em>Vigoroso</em>, <em>Fiero</em>, <em>Superbo</em>, and <em>Tenace</em>.",
    canon:"The four-ship total, 1968–1975 introduction band, 5,200-tonne full-load displacement, steam-turbine propulsion, missile-destroyer role, Italian construction, and four active ships are established. The four names are registered extrapolations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, individual commissioning dates, refits, deployments, and detailed service histories remain open.",
    development:"Audace followed the smaller Impavido class and supplied the middle destroyer generation of the mature carrier fleet.",
    registry:italianClassRoster(["Vigoroso","Fiero","Superbo","Tenace"]),
    design:"Each ship displaced 5,200 tonnes at full load and used steam turbines. Missile, gun, sensor, aviation, and electronic-warfare details remain open.",
    role:"The class performed missile screening, surface action, escort, and route protection across the Mediterranean and adjoining imperial waters.",
    systemTitle:"Fleet integration",system:"Audace ships worked between the Andrea Doria and Mediterraneo command layers and the smaller frigate screen. Latin standards supported data and replenishment exchange.",
    service:"The class served during expansion of Italian carrier aviation, nuclear submarines, and eastern Mediterranean commitments. Specific cruises and crisis assignments remain open.",
    transitionTitle:"Ardito development",transition:"The gas-turbine Ardito class introduced the next advanced fleet-escort generation from 1976. All four Audace ships remained active with it.",
    status:"All four registered ships were active. Readiness and squadron assignments are not fixed.",
    related:[...italianEscortRelated,{href:"impavido-class-destroyer.html",kicker:"Predecessor",label:"Impavido Class"},{href:"ardito-class-destroyer.html",kicker:"Successor",label:"Ardito Class"}],
    facts:[["Type","Missile destroyer"],["Ships built","4"],["Introduction","1968–1975"],["Full load","5,200 t"],["Propulsion","Steam turbines"],["Active, 1985","4"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "ardito-class-destroyer": italianCombatantArticle({
    title:"Ardito-class destroyer",type:"Advanced fleet escort",period:"1976–1985",
    lead:"The Ardito class was a four-ship Italian advanced fleet-escort class introduced between 1976 and 1983. All four 6,300-tonne gas-turbine destroyers remained active in 1985 under the registered names <em>Valoroso</em>, <em>Fulmineo</em>, <em>Rapido</em>, and <em>Invincibile</em>.",
    canon:"The four-ship total, 1976–1983 introduction band, 6,300-tonne full-load displacement, gas-turbine propulsion, advanced fleet-escort role, Italian construction, and four active ships are established. The four names are registered extrapolations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, individual commissioning dates, VLS fit, refits, deployments, and detailed service histories remain open.",
    development:"Ardito followed the steam-turbine Impavido and Audace classes and supplied the most advanced Italian destroyer generation in the 1985 fleet.",
    registry:italianClassRoster(["Valoroso","Fulmineo","Rapido","Invincibile"]),
    design:"Each ship displaced 6,300 tonnes at full load and used gas turbines. The class role is fixed; detailed weapons, sensors, data systems, and aviation facilities are not.",
    role:"The ships escorted Augusto carriers, Mediterraneo command cruisers, amphibious groups, and replenishment formations against air, surface, and submarine threats.",
    systemTitle:"Advanced escort system",system:"Gas-turbine machinery and the late-1970s Latin data and missile environment placed the class in the fleet's high-end screen. A specific vertical-launch count is not established.",
    service:"The class entered service during the fleet's computerized-command and common-interface transition. Individual exercises and deployments remain unsettled.",
    transitionTitle:"Place in the destroyer force",transition:"Ardito did not replace every older ship by 1985. Four Impavido and four Audace destroyers remained active, producing a twelve-ship force across three generations.",
    status:"All four registered ships were active. Individual readiness is open.",
    related:[...italianEscortRelated,{href:"audace-class-destroyer.html",kicker:"Predecessor",label:"Audace Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Command layer",label:"Mediterraneo Class"}],
    facts:[["Type","Advanced fleet escort"],["Ships built","4"],["Introduction","1976–1983"],["Full load","6,300 t"],["Propulsion","Gas turbines"],["Active, 1985","4"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "alpino-class-frigate": italianCombatantArticle({
    title:"Alpino-class frigate",type:"Helicopter escort",period:"1965–1985",
    lead:"The Alpino class was an eight-ship Italian helicopter-escort frigate class introduced between 1965 and 1973. All eight 3,400-tonne diesel ships remained active in 1985. Their registered names honored admirals and explorers.",
    canon:"The eight-ship total, 1965–1973 introduction band, 3,400-tonne full-load displacement, diesel propulsion, helicopter-escort role, Italian construction, and eight active ships are established. The individual names are registered extrapolations. Dimensions, speed, machinery arrangement, weapons, sensors, helicopter count and types, crew, builders, individual commissioning dates, refits, deployments, and detailed service histories remain open.",
    development:"Alpino supplied the first large postwar Italian frigate generation built around organic helicopter escort work.",
    registry:italianClassRoster(["Ammiraglio Fioravanzo","Ammiraglio Millo","Ammiraglio Saint Bon","Ammiraglio Caracciolo","Cristoforo Colombo","Amerigo Vespucci","Giovanni Caboto","Sebastiano Caboto"]),
    design:"Each ship displaced 3,400 tonnes at full load and used diesel propulsion. Helicopter capability is fixed, while aircraft count, hangar arrangement, sonar, weapons, sensors, and performance remain open.",
    role:"The class escorted convoys, auxiliaries, and surface formations and used helicopters for anti-submarine search, surveillance, liaison, and rescue.",
    systemTitle:"Helicopter operations",system:"Shipboard aircraft extended search beyond hull-mounted sensors and connected frigates to patrol aircraft and other escorts. Exact aviation practice remains unsettled.",
    service:"Diesel machinery and moderate displacement suited sustained escort and patrol from the Regia Marina's dense base network.",
    transitionTitle:"Lupo development",transition:"The faster gas-turbine Lupo class added an explicit missile role from 1974. Both eight-ship classes remained active.",
    status:"All eight registered ships were active. Individual readiness and assignments are open.",
    related:[...italianEscortRelated,{href:"lupo-class-frigate.html",kicker:"Successor generation",label:"Lupo Class"},{href:"marconi-class-ssn.html",kicker:"Submarine environment",label:"Marconi Class"}],
    facts:[["Type","Helicopter escort frigate"],["Ships built","8"],["Introduction","1965–1973"],["Full load","3,400 t"],["Propulsion","Diesel"],["Active, 1985","8"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "lupo-class-frigate": italianCombatantArticle({
    title:"Lupo-class frigate",type:"Fast missile frigate",period:"1974–1985",
    lead:"The Lupo class was an eight-ship Italian fast missile-frigate class introduced between 1974 and 1982. All eight 3,800-tonne gas-turbine ships remained active in 1985. Their registered names honored navigators, officers, soldiers, and naval specialists.",
    canon:"The eight-ship total, 1974–1982 introduction band, 3,800-tonne full-load displacement, gas-turbine propulsion, fast missile-frigate role, Italian construction, and eight active ships are established. The individual names are registered extrapolations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, individual commissioning dates, refits, deployments, and detailed service histories remain open.",
    development:"Lupo followed the Alpino helicopter escorts and combined frigate-scale escort work with higher tactical speed and an explicit missile role.",
    registry:italianClassRoster(["Antonio Pigafetta","Nicolò Zeno","Francesco Nullo","Nazario Sauro","Enrico Millo","Luigi Durand de la Penne","Salvatore Todaro","Teseo Tesei"]),
    design:"Each ship displaced 3,800 tonnes at full load and used gas turbines. Missile, gun, sensor, electronic-warfare, aviation, and performance details remain open.",
    role:"The class performed fast surface attack, convoy and carrier escort, patrol, and route defense. Its missile fit operated within Latin targeting and data-link practice.",
    systemTitle:"Speed and guided weapons",system:"Gas turbines supported rapid concentration from closely spaced Mediterranean bases. Guided weapons allowed frigates to contribute to surface action without cruiser displacement.",
    service:"The ships operated alongside Alpino frigates rather than replacing them outright. Specific task groups and foreign deployments remain open.",
    transitionTitle:"Frigate force",transition:"Eight Lupo and eight Alpino ships supplied Italy's sixteen active frigates in the 1985 balance.",
    status:"All eight registered ships were active. Individual readiness is open.",
    related:[...italianEscortRelated,{href:"alpino-class-frigate.html",kicker:"Predecessor generation",label:"Alpino Class"},{href:"ardito-class-destroyer.html",kicker:"Fleet screen",label:"Ardito Class"}],
    facts:[["Type","Fast missile frigate"],["Ships built","8"],["Introduction","1974–1982"],["Full load","3,800 t"],["Propulsion","Gas turbines"],["Active, 1985","8"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "marconi-class-ssn": italianCombatantArticle({
    title:"Marconi-class nuclear attack submarine",type:"Nuclear attack submarine",period:"1971–1985",
    lead:"The postwar Marconi class was a three-ship Italian nuclear attack-submarine class introduced between 1971 and 1980. All three 6,100-tonne submerged boats remained active in 1985 under the registered names <em>Enrico Fermi</em>, <em>Ettore Majorana</em>, and <em>Giovanni Battista Amici</em>.",
    canon:"The three-boat total, 1971–1980 introduction band, 6,100-tonne submerged displacement, nuclear propulsion, attack-submarine role, Italian construction, and three active boats are established. The individual names are registered extrapolations. Dimensions, speed, reactor and machinery design, weapons, sensors, crew, builders, individual commissioning dates, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class established Italy's nuclear attack-submarine branch during the wider Latin transition to compact reactors and advanced underwater sensors. The postwar designation reused the name of an earlier wartime submarine class.",
    registry:italianClassRoster(["Enrico Fermi","Ettore Majorana","Giovanni Battista Amici"]),
    design:"Each boat displaced 6,100 tonnes submerged and used nuclear propulsion. The registry fixes the attack role without specifying reactor type, speed, weapons, sonar, quieting, or crew.",
    role:"The class hunted surface ships and submarines, screened Italian carrier groups, watched Mediterranean approaches, and supported longer-range reconnaissance and patrol.",
    systemTitle:"Nuclear undersea operations",system:"Endurance shifted the limiting factors from fuel toward crew, stores, maintenance, weapons, and political access. Shore sensors, aircraft, escorts, and intelligence supported submarine search and targeting.",
    service:"The boats operated in a crowded sea bordered by allied bases, narrow passages, merchant traffic, and opposing surveillance. Individual patrol areas remain open.",
    transitionTitle:"Galileo missile branch",transition:"The Galileo class added a separate guided-missile nuclear branch from 1977. Marconi remained the attack-submarine component.",
    status:"All three registered boats were active. Individual readiness and patrol status are open.",
    related:[...italianEscortRelated,{href:"galileo-class-ssgn.html",kicker:"Missile branch",label:"Galileo Class"},{href:"sauro-class-submarine.html",kicker:"Conventional branch",label:"Sauro Class"},{href:"augusto-class-carrier.html",kicker:"Screened force",label:"Augusto Class"}],
    facts:[["Type","Nuclear attack submarine"],["Boats built","3"],["Introduction","1971–1980"],["Submerged displacement","6,100 t"],["Propulsion","Nuclear"],["Active, 1985","3"],["Hull-name status","Registered extrapolation"],["Construction","Italy"]]
  }),

  "galileo-class-ssgn": italianCombatantArticle({
    title:"Galileo-class guided-missile submarine",type:"Nuclear guided-missile submarine",period:"1977–1985",
    lead:"The Galileo class was a two-ship Italian nuclear guided-missile-submarine class introduced between 1977 and 1983. The 7,600-tonne submerged boats <em>Galileo Galilei</em> and <em>Ruggero Boscovich</em> remained active in 1985 for conventional guided-missile attack.",
    canon:"The two-boat total, 1977–1983 introduction band, 7,600-tonne submerged displacement, nuclear propulsion, conventional guided-missile-attack role, Italian construction, and two active boats are established. The two names are registered extrapolations. Dimensions, speed, reactor and machinery design, missile type and count, launch arrangement, other weapons, sensors, crew, builders, individual commissioning dates, refits, patrols, and detailed service histories remain open.",
    development:"Galileo created a conventional undersea missile branch after the Marconi attack submarines. Nuclear weapons did not exist; the boats carried guided weapons for conventional fleet and land attack.",
    registry:italianClassRoster(["Galileo Galilei","Ruggero Boscovich"]),
    design:"Each boat displaced 7,600 tonnes submerged and used nuclear propulsion. The missile type, magazine, launch geometry, speed, sensors, torpedo armament, and crew remain open.",
    role:"The class approached defended waters covertly and launched conventional guided weapons against ships or fixed targets. It also supplied reconnaissance and fleet-support functions appropriate to a large nuclear submarine.",
    systemTitle:"Conventional missile attack",system:"Mission planning depended on reconnaissance, navigation, communications, and target confirmation. The absence of nuclear warheads made accuracy, magazine size, and repeated conventional effects important.",
    service:"The boats supplemented carriers, surface missiles, and attack submarines within Italian and Latin planning. Exact patrols and target sets remain unsettled.",
    transitionTitle:"Relationship to Marconi",transition:"Galileo did not replace the Marconi attack class. The two branches produced five active Italian nuclear submarines in 1985.",
    status:"Both registered boats were active. Individual readiness and deployment are open.",
    related:[...italianEscortRelated,{href:"marconi-class-ssn.html",kicker:"Attack branch",label:"Marconi Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Surface missile system",label:"Mediterraneo Class"},{href:"nuclear-weapons-research.html",kicker:"Strategic constraint",label:"Nuclear-Weapons Research"}],
    facts:[["Type","Nuclear guided-missile submarine"],["Boats built","2"],["Introduction","1977–1983"],["Submerged displacement","7,600 t"],["Propulsion","Nuclear"],["Warhead doctrine","Conventional"],["Active, 1985","2"],["Hull-name status","Registered extrapolation"]]
  }),

  "sauro-class-submarine": italianCombatantArticle({
    title:"Sauro-class submarine",type:"Conventional attack submarine",period:"1975–1985",
    lead:"The Sauro class was the larger of two working registered Italian conventional-submarine classes in 1985. Four 2,200-tonne submerged diesel-electric boats—<em>Vettor Pisani</em>, <em>Sebastiano Veniero</em>, <em>Francesco Morosini</em>, and <em>Giuseppe Garibaldi</em>—served in the quiet Mediterranean attack role.",
    canon:"The Regia Marina's total of eight active conventional submarines is established. The four-boat Sauro division, names, 1975–1980 commissioning sequence, 2,200-tonne submerged displacement, diesel-electric propulsion, and quiet Mediterranean-attack role are registered working extrapolations rather than class-level explicit canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, refits, patrols, and detailed service histories remain open.",
    development:"The working registry places Sauro after the smaller Toti class and assigns it the quieter, larger conventional-attack role in the later fleet.",
    registry:italianClassRoster(["Vettor Pisani","Sebastiano Veniero","Francesco Morosini","Giuseppe Garibaldi"]),
    design:"The registered working design displaces 2,200 tonnes submerged and uses diesel-electric propulsion. All detailed performance, weapons, sensor, crew, and construction characteristics remain open.",
    role:"The boats patrolled straits, approaches, island routes, and confined Mediterranean waters where quiet conventional submarines could exploit geography and short support routes.",
    systemTitle:"Conventional undersea system",system:"Fixed sensors, patrol aircraft, surface escorts, minefields, coastal bases, and intelligence supplied contact information and protected access routes.",
    service:"Conventional boats offered lower procurement and operating demands than nuclear submarines and could concentrate on regional patrols. Exact assignments remain open.",
    transitionTitle:"Relationship to Toti",transition:"Four Sauro and four Toti boats make up the fixed eight-boat conventional force. The division remains working registry detail pending firmer class canon.",
    status:"All four registered boats were active within the fixed eight-SSK total.",
    related:[...italianEscortRelated,{href:"toti-class-submarine.html",kicker:"Earlier conventional class",label:"Toti Class"},{href:"marconi-class-ssn.html",kicker:"Nuclear branch",label:"Marconi Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats","4 · working register"],["Commissioning","1975–1980 · working"],["Submerged displacement","2,200 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4"],["Class detail status","Registered extrapolation"],["Fixed wider total","8 Italian SSKs"]]
  }),

  "toti-class-submarine": italianCombatantArticle({
    title:"Toti-class submarine",type:"Conventional attack submarine",period:"1962–1985",
    lead:"The Toti class was the smaller of two working registered Italian conventional-submarine classes in 1985. Four 1,600-tonne submerged diesel-electric boats—<em>Enrico Toti</em>, <em>Ettore Fieramosca</em>, <em>Pietro Micca</em>, and <em>Filippo Corridoni</em>—served in the Mediterranean attack role.",
    canon:"The Regia Marina's total of eight active conventional submarines is established. The four-boat Toti division, names, 1962–1967 commissioning sequence, 1,600-tonne submerged displacement, diesel-electric propulsion, and Mediterranean-attack role are registered working extrapolations rather than class-level explicit canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, refits, patrols, and detailed service histories remain open.",
    development:"The working registry places Toti at the beginning of Italy's postwar conventional-submarine line and retains all four boats through 1985.",
    registry:italianClassRoster(["Enrico Toti","Ettore Fieramosca","Pietro Micca","Filippo Corridoni"]),
    design:"The registered working design displaces 1,600 tonnes submerged and uses diesel-electric propulsion. Weapons, sensors, speed, endurance, dimensions, crew, and construction details remain open.",
    role:"The boats conducted Mediterranean attack patrols, coastal and strait surveillance, training, and exercises against Italian surface and anti-submarine forces.",
    systemTitle:"Regional operations",system:"Dense bases and short operating distances reduced the endurance penalty of a small conventional hull. Shallow water, shipping noise, islands, and chokepoints complicated both attack and counter-detection.",
    service:"The class remained useful beside newer Sauro boats and the nuclear force. Individual patrol and training histories are not fixed.",
    transitionTitle:"Sauro development",transition:"The larger working Sauro class followed from 1975. Four ships of each class make up the fixed eight active conventional submarines.",
    status:"All four registered boats were active within the fixed eight-SSK total.",
    related:[...italianEscortRelated,{href:"sauro-class-submarine.html",kicker:"Later conventional class",label:"Sauro Class"},{href:"marconi-class-ssn.html",kicker:"Nuclear branch",label:"Marconi Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats","4 · working register"],["Commissioning","1962–1967 · working"],["Submerged displacement","1,600 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4"],["Class detail status","Registered extrapolation"],["Fixed wider total","8 Italian SSKs"]]
  })
});
