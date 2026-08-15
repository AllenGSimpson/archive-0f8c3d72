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

const italianClassRoster = names => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Registered ship</th><th>Status, 1985</th></tr></thead><tbody>${names.map(entry => { const [name,status="Active"] = Array.isArray(entry) ? entry : [entry]; return `<tr><td>${name}</td><td>${status}</td></tr>`; }).join("")}</tbody></table></div>`;

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
    lead:"The Impavido class was an Italian missile-destroyer design introduced across the 1958–1965 period. The working register assigns four 4,300-tonne steam-turbine ships, all active in 1985, under the names <em>Audacia</em>, <em>Ardore</em>, <em>Risoluto</em>, and <em>Temerario</em>.",
    canon:"The Impavido design family, 1958–1965 introduction band, 4,300-tonne full-load displacement, and missile-destroyer role are established. Steam-turbine propulsion, Italian construction of every working hull, the four-ship build and active totals, individual names, and commissioning dates remain provisional registry allocations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"Impavido was Italy's first registered postwar missile-destroyer generation. It entered service as the Regia Marina added guided air defense and carrier screening to its inherited gun fleet.",
    registry:italianClassRoster([["Audacia","Working active allocation"],["Ardore","Working active allocation"],["Risoluto","Working active allocation"],["Temerario","Working active allocation"]]),
    design:"Each ship displaced 4,300 tonnes at full load and used steam turbines. The controlling register fixes the missile-destroyer category without specifying launcher, missile, gun, sensor, or aviation fit.",
    role:"The class screened carriers and larger surface ships, protected approaches and convoys, and supplied guided air-defense and surface-combat capability within Mediterranean task groups.",
    systemTitle:"Missile transition",system:"The ships linked wartime gun and torpedo practice to later data-linked missile formations. Exact conversion, modernization, and fire-control chronology remains unsettled.",
    service:"Dense Italian basing allowed the class to operate with shorter endurance than a Spanish Atlantic escort. Latin fuel, communications, replenishment, and tactical-data standards supported mixed operations.",
    transitionTitle:"Audace development",transition:"The larger Audace class followed from 1968. The working register retains Impavido ships alongside both later destroyer generations.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-h2c6r writer=g kind=revision created=2026-08-15T15:04:00-06:00 -->The working register assigns four named Impavido ships as active in 1985. Hull identities and build and active totals remain provisional; individual readiness and squadron assignments are open.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"audace-class-destroyer.html",kicker:"Successor",label:"Audace Class"},{href:"augusto-class-carrier.html",kicker:"Screened force",label:"Augusto Class"}],
    facts:[["Type","Missile destroyer"],["Ships built","4 working"],["Introduction","1958–1965"],["Full load","4,300 t"],["Working propulsion","Steam turbines"],["Active, 1985","4 provisional"],["Hull-name status","Registered extrapolation"],["Working construction","Italy"]]
  }),

  "audace-class-destroyer": italianCombatantArticle({
    title:"Audace-class destroyer",type:"Missile destroyer",period:"1968–1985",
    lead:"The Audace class was an Italian missile-destroyer design introduced across the 1968–1975 period. The working register assigns four 5,200-tonne steam-turbine ships, all active in 1985, under the names <em>Vigoroso</em>, <em>Fiero</em>, <em>Superbo</em>, and <em>Tenace</em>.",
    canon:"The Audace design family, 1968–1975 introduction band, 5,200-tonne full-load displacement, and missile-destroyer role are established. Steam-turbine propulsion, Italian construction of every working hull, the four-ship build and active totals, individual names, and commissioning dates remain provisional registry allocations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"Audace followed the smaller Impavido class and supplied the middle destroyer generation of the mature carrier fleet.",
    registry:italianClassRoster([["Vigoroso","Working active allocation"],["Fiero","Working active allocation"],["Superbo","Working active allocation"],["Tenace","Working active allocation"]]),
    design:"Each ship displaced 5,200 tonnes at full load and used steam turbines. Missile, gun, sensor, aviation, and electronic-warfare details remain open.",
    role:"The class performed missile screening, surface action, escort, and route protection across the Mediterranean and adjoining imperial waters.",
    systemTitle:"Fleet integration",system:"Audace ships worked between the Andrea Doria and Mediterraneo command layers and the smaller frigate screen. Latin standards supported data and replenishment exchange.",
    service:"The class served during expansion of Italian carrier aviation, nuclear submarines, and eastern Mediterranean commitments. Specific cruises and crisis assignments remain open.",
    transitionTitle:"Ardito development",transition:"The Ardito class introduced the next advanced fleet-escort generation from 1976. The working register retains four Audace ships alongside it.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-i4e8x writer=g kind=revision created=2026-08-15T15:05:00-06:00 -->The working register assigns four named Audace ships as active in 1985. Hull identities and build and active totals remain provisional; readiness and squadron assignments are open.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"impavido-class-destroyer.html",kicker:"Predecessor",label:"Impavido Class"},{href:"ardito-class-destroyer.html",kicker:"Successor",label:"Ardito Class"}],
    facts:[["Type","Missile destroyer"],["Ships built","4 working"],["Introduction","1968–1975"],["Full load","5,200 t"],["Working propulsion","Steam turbines"],["Active, 1985","4 provisional"],["Hull-name status","Registered extrapolation"],["Working construction","Italy"]]
  }),

  "ardito-class-destroyer": italianCombatantArticle({
    title:"Ardito-class destroyer",type:"Advanced fleet escort",period:"1976–1985",
    lead:"The Ardito class was an Italian advanced fleet-escort design introduced across the 1976–1983 period. The working register assigns four 6,300-tonne gas-turbine destroyers, all active in 1985, under the names <em>Valoroso</em>, <em>Fulmineo</em>, <em>Rapido</em>, and <em>Invincibile</em>.",
    canon:"The Ardito design family, 1976–1983 introduction band, 6,300-tonne full-load displacement, and advanced fleet-escort role are established. Gas-turbine propulsion, Italian construction of every working hull, the four-ship build and active totals, individual names, and commissioning dates remain provisional registry allocations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, VLS fit, refits, deployments, and detailed service histories remain open.",
    development:"Ardito followed the steam-turbine Impavido and Audace classes and supplied the most advanced Italian destroyer generation in the 1985 fleet.",
    registry:italianClassRoster([["Valoroso","Working active allocation"],["Fulmineo","Working active allocation"],["Rapido","Working active allocation"],["Invincibile","Working active allocation"]]),
    design:"Each ship displaced 6,300 tonnes at full load and used gas turbines. The class role is fixed; detailed weapons, sensors, data systems, and aviation facilities are not.",
    role:"The ships escorted Augusto carriers, Mediterraneo command cruisers, amphibious groups, and replenishment formations against air, surface, and submarine threats.",
    systemTitle:"Advanced escort system",system:"Gas-turbine machinery and the late-1970s Latin data and missile environment placed the class in the fleet's high-end screen. A specific vertical-launch count is not established.",
    service:"The class entered service during the fleet's computerized-command and common-interface transition. Individual exercises and deployments remain unsettled.",
    transitionTitle:"Place in the destroyer force",transition:"The working register retains Impavido and Audace ships alongside Ardito, producing a provisional twelve-ship force across three generations.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-j6g2p writer=g kind=revision created=2026-08-15T15:06:00-06:00 -->The working register assigns four named Ardito ships as active in 1985. Hull identities and build and active totals remain provisional; individual readiness is open.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"audace-class-destroyer.html",kicker:"Predecessor",label:"Audace Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Command layer",label:"Mediterraneo Class"}],
    facts:[["Type","Advanced fleet escort"],["Ships built","4 working"],["Introduction","1976–1983"],["Full load","6,300 t"],["Working propulsion","Gas turbines"],["Active, 1985","4 provisional"],["Hull-name status","Registered extrapolation"],["Working construction","Italy"]]
  }),

  "alpino-class-frigate": italianCombatantArticle({
    title:"Alpino-class frigate",type:"Helicopter escort",period:"1965–1985",
    lead:"The Alpino class was an Italian helicopter-escort frigate design introduced across the 1965–1973 period. The working register assigns eight 3,400-tonne diesel ships, all active in 1985, with names honoring admirals and explorers.",
    canon:"The Alpino design family, 1965–1973 introduction band, 3,400-tonne full-load displacement, and helicopter-escort role are established. Diesel propulsion, Italian construction of every working hull, the eight-ship build and active totals, individual names, and commissioning dates remain provisional registry allocations. Dimensions, speed, machinery arrangement, weapons, sensors, helicopter count and types, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"Alpino supplied the first large postwar Italian frigate generation built around organic helicopter escort work.",
    registry:italianClassRoster([["Ammiraglio Fioravanzo","Working active allocation"],["Ammiraglio Millo","Working active allocation"],["Ammiraglio Saint Bon","Working active allocation"],["Ammiraglio Caracciolo","Working active allocation"],["Cristoforo Colombo","Working active allocation"],["Amerigo Vespucci","Working active allocation"],["Giovanni Caboto","Working active allocation"],["Sebastiano Caboto","Working active allocation"]]),
    design:"Each ship displaced 3,400 tonnes at full load and used diesel propulsion. Helicopter capability is fixed, while aircraft count, hangar arrangement, sonar, weapons, sensors, and performance remain open.",
    role:"The class escorted convoys, auxiliaries, and surface formations and used helicopters for anti-submarine search, surveillance, liaison, and rescue.",
    systemTitle:"Helicopter operations",system:"Shipboard aircraft extended search beyond hull-mounted sensors and connected frigates to patrol aircraft and other escorts. Exact aviation practice remains unsettled.",
    service:"Diesel machinery and moderate displacement suited sustained escort and patrol from the Regia Marina's dense base network.",
    transitionTitle:"Lupo development",transition:"The Lupo class added an explicit missile role from 1974. The working register carries eight ships in each frigate family.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-k8i4s writer=g kind=revision created=2026-08-15T15:07:00-06:00 -->The working register assigns eight named Alpino ships as active in 1985. Hull identities and build and active totals remain provisional; individual readiness and assignments are open.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"lupo-class-frigate.html",kicker:"Successor generation",label:"Lupo Class"},{href:"marconi-class-ssn.html",kicker:"Submarine environment",label:"Marconi Class"}],
    facts:[["Type","Helicopter escort frigate"],["Ships built","8 working"],["Introduction","1965–1973"],["Full load","3,400 t"],["Working propulsion","Diesel"],["Active, 1985","8 provisional"],["Hull-name status","Registered extrapolation"],["Working construction","Italy"]]
  }),

  "lupo-class-frigate": italianCombatantArticle({
    title:"Lupo-class frigate",type:"Fast missile frigate",period:"1974–1985",
    lead:"The Lupo class was an Italian fast missile-frigate design introduced across the 1974–1982 period. The working register assigns eight 3,800-tonne gas-turbine ships, all active in 1985, with names honoring navigators, officers, soldiers, and naval specialists.",
    canon:"The Lupo design family, 1974–1982 introduction band, 3,800-tonne full-load displacement, and fast missile-frigate role are established. Gas-turbine propulsion, Italian construction of every working hull, the eight-ship build and active totals, individual names, and commissioning dates remain provisional registry allocations. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    development:"Lupo followed the Alpino helicopter escorts and combined frigate-scale escort work with higher tactical speed and an explicit missile role.",
    registry:italianClassRoster([["Antonio Pigafetta","Working active allocation"],["Nicolò Zeno","Working active allocation"],["Francesco Nullo","Working active allocation"],["Nazario Sauro","Working active allocation"],["Enrico Millo","Working active allocation"],["Luigi Durand de la Penne","Working active allocation"],["Salvatore Todaro","Working active allocation"],["Teseo Tesei","Working active allocation"]]),
    design:"Each ship displaced 3,800 tonnes at full load and used gas turbines. Missile, gun, sensor, electronic-warfare, aviation, and performance details remain open.",
    role:"The class performed fast surface attack, convoy and carrier escort, patrol, and route defense. Its missile fit operated within Latin targeting and data-link practice.",
    systemTitle:"Speed and guided weapons",system:"Gas turbines supported rapid concentration from closely spaced Mediterranean bases. Guided weapons allowed frigates to contribute to surface action without cruiser displacement.",
    service:"The ships operated alongside Alpino frigates rather than replacing them outright. Specific task groups and foreign deployments remain open.",
    transitionTitle:"Frigate force",transition:"The working register assigns eight Lupo and eight Alpino ships to a provisional sixteen-frigate 1985 balance.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-l2k6f writer=g kind=revision created=2026-08-15T15:08:00-06:00 -->The working register assigns eight named Lupo ships as active in 1985. Hull identities and build and active totals remain provisional; individual readiness is open.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"alpino-class-frigate.html",kicker:"Predecessor generation",label:"Alpino Class"},{href:"ardito-class-destroyer.html",kicker:"Fleet screen",label:"Ardito Class"}],
    facts:[["Type","Fast missile frigate"],["Ships built","8 working"],["Introduction","1974–1982"],["Full load","3,800 t"],["Working propulsion","Gas turbines"],["Active, 1985","8 provisional"],["Hull-name status","Registered extrapolation"],["Working construction","Italy"]]
  }),

  "marconi-class-ssn": italianCombatantArticle({
    title:"Marconi-class nuclear attack submarine",type:"Nuclear attack submarine",period:"1971–1985",
    lead:"The postwar Marconi class was an Italian nuclear attack-submarine design introduced across the 1971–1980 period. The working register assigns three 6,100-tonne submerged boats and the names <em>Enrico Fermi</em>, <em>Ettore Majorana</em>, and <em>Giovanni Battista Amici</em>, carrying all three as active in 1985.",
    canon:"The Marconi design family, 1971–1980 introduction band, 6,100-tonne submerged displacement, nuclear propulsion, and attack-submarine role are established. The three-boat build and active totals, individual names and commissioning dates, and Italian construction of every working hull remain provisional allocations. Dimensions, speed, reactor and machinery design, weapons, sensors, crew, builders, endurance, refits, patrols, and detailed service histories remain open.",
    development:"The class established Italy's nuclear attack-submarine branch during the wider Latin transition to compact reactors and advanced underwater sensors. The postwar designation reused the name of an earlier wartime submarine class.",
    registry:italianClassRoster([["Enrico Fermi","Working active allocation"],["Ettore Majorana","Working active allocation"],["Giovanni Battista Amici","Working active allocation"]]),
    design:"Each boat displaced 6,100 tonnes submerged and used nuclear propulsion. The registry fixes the attack role without specifying reactor type, speed, weapons, sonar, quieting, or crew.",
    role:"The class hunted surface ships and submarines, screened Italian carrier groups, watched Mediterranean approaches, and supported longer-range reconnaissance and patrol.",
    systemTitle:"Nuclear undersea operations",system:"Endurance shifted the limiting factors from fuel toward crew, stores, maintenance, weapons, and political access. Shore sensors, aircraft, escorts, and intelligence supported submarine search and targeting.",
    service:"The boats operated in a crowded sea bordered by allied bases, narrow passages, merchant traffic, and opposing surveillance. Individual patrol areas remain open.",
    transitionTitle:"Galileo missile branch",transition:"The Galileo class added a separate guided-missile nuclear branch from 1977. Marconi remained the attack-submarine component.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-f7v3m writer=g kind=revision created=2026-08-15T15:02:00-06:00 -->The working register assigns three named Marconi boats as active in 1985. The hull roster and build and active totals remain provisional; individual readiness and patrol status are open.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"galileo-class-ssgn.html",kicker:"Missile branch",label:"Galileo Class"},{href:"sauro-class-submarine.html",kicker:"Conventional branch",label:"Sauro Class"},{href:"augusto-class-carrier.html",kicker:"Screened force",label:"Augusto Class"}],
    facts:[["Type","Nuclear attack submarine"],["Boats built","3 working"],["Introduction","1971–1980"],["Submerged displacement","6,100 t"],["Propulsion","Nuclear"],["Active, 1985","3 provisional"],["Hull-name status","Registered extrapolation"],["Working construction","Italy"]]
  }),

  "galileo-class-ssgn": italianCombatantArticle({
    title:"Galileo-class guided-missile submarine",type:"Nuclear guided-missile submarine",period:"1977–1985",
    lead:"The Galileo class was an Italian nuclear guided-missile-submarine design introduced across the 1977–1983 period. The working register assigns two 7,600-tonne submerged boats, <em>Galileo Galilei</em> and <em>Ruggero Boscovich</em>, and carries both as active in 1985 for conventional guided-missile attack.",
    canon:"The Galileo design family, 1977–1983 introduction band, 7,600-tonne submerged displacement, nuclear propulsion, and conventional guided-missile-attack role are established. The two-boat build and active totals, individual names and commissioning dates, and Italian construction of every working hull remain provisional allocations. Dimensions, speed, reactor and machinery design, missile type and count, launch arrangement, other weapons, sensors, crew, builders, refits, patrols, and detailed service histories remain open.",
    development:"Galileo created a conventional undersea missile branch after the Marconi attack submarines. Nuclear weapons did not exist; the boats carried guided weapons for conventional fleet and land attack.",
    registry:italianClassRoster([["Galileo Galilei","Working active allocation"],["Ruggero Boscovich","Working active allocation"]]),
    design:"Each boat displaced 7,600 tonnes submerged and used nuclear propulsion. The missile type, magazine, launch geometry, speed, sensors, torpedo armament, and crew remain open.",
    role:"The class approached defended waters covertly and launched conventional guided weapons against ships or fixed targets. It also supplied reconnaissance and fleet-support functions appropriate to a large nuclear submarine.",
    systemTitle:"Conventional missile attack",system:"Mission planning depended on reconnaissance, navigation, communications, and target confirmation. The absence of nuclear warheads made accuracy, magazine size, and repeated conventional effects important.",
    service:"The boats supplemented carriers, surface missiles, and attack submarines within Italian and Latin planning. Exact patrols and target sets remain unsettled.",
    transitionTitle:"Relationship to Marconi",transition:"Galileo did not replace the Marconi attack class. The working register assigns five active Italian nuclear submarines across the two branches in 1985.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-g9x5d writer=g kind=revision created=2026-08-15T15:03:00-06:00 -->The working register assigns two named Galileo boats as active in 1985. The hull roster and build and active totals remain provisional; individual readiness and deployment are open.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"marconi-class-ssn.html",kicker:"Attack branch",label:"Marconi Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Surface missile system",label:"Mediterraneo Class"},{href:"nuclear-weapons-research.html",kicker:"Strategic constraint",label:"Nuclear-Weapons Research"}],
    facts:[["Type","Nuclear guided-missile submarine"],["Boats built","2 working"],["Introduction","1977–1983"],["Submerged displacement","7,600 t"],["Propulsion","Nuclear"],["Warhead doctrine","Conventional"],["Active, 1985","2 provisional"],["Hull-name status","Registered extrapolation"]]
  }),

  "sauro-class-submarine": italianCombatantArticle({
    title:"Sauro-class submarine",type:"Conventional attack submarine",period:"1975–1985",
    lead:"The Sauro class is the larger of two working registered Italian conventional-submarine classes in 1985. The reconstruction assigns four 2,200-tonne submerged diesel-electric boats—<em>Vettor Pisani</em>, <em>Sebastiano Veniero</em>, <em>Francesco Morosini</em>, and <em>Giuseppe Garibaldi</em>—to a quiet Mediterranean attack role.",
    canon:"Italy's complete 1985 fleet includes a conventional-submarine branch, but its exact eight-active-boat allocation remains provisional. The four-boat Sauro division, names, 1975–1980 commissioning sequence, 2,200-tonne submerged displacement, diesel-electric propulsion, quiet Mediterranean-attack role, and individual active statuses are registered working extrapolations rather than class-level explicit canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, refits, patrols, and detailed service histories remain open.",
    development:"The working registry places Sauro after the smaller Toti class and assigns it the quieter, larger conventional-attack role in the later fleet.",
    registry:italianClassRoster([["Vettor Pisani","Working active allocation"],["Sebastiano Veniero","Working active allocation"],["Francesco Morosini","Working active allocation"],["Giuseppe Garibaldi","Working active allocation"]]),
    design:"The registered working design displaces 2,200 tonnes submerged and uses diesel-electric propulsion. All detailed performance, weapons, sensor, crew, and construction characteristics remain open.",
    role:"The boats patrolled straits, approaches, island routes, and confined Mediterranean waters where quiet conventional submarines could exploit geography and short support routes.",
    systemTitle:"Conventional undersea system",system:"Fixed sensors, patrol aircraft, surface escorts, minefields, coastal bases, and intelligence supplied contact information and protected access routes.",
    service:"Conventional boats offered lower procurement and operating demands than nuclear submarines and could concentrate on regional patrols. Exact assignments remain open.",
    transitionTitle:"Relationship to Toti",transition:"The working register assigns four Sauro and four Toti boats to an eight-boat conventional force. Both the wider total and class division remain provisional pending firmer hull canon.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-d3r7w writer=g kind=revision created=2026-08-15T15:00:00-06:00 -->The working register assigns all four named Sauro boats as active within a provisional eight-SSK total. Hull identities, individual statuses, and the wider allocation remain registry extrapolations.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"toti-class-submarine.html",kicker:"Earlier conventional class",label:"Toti Class"},{href:"marconi-class-ssn.html",kicker:"Nuclear branch",label:"Marconi Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats","4 · working register"],["Commissioning","1975–1980 · working"],["Submerged displacement","2,200 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4 provisional"],["Class detail status","Registered extrapolation"],["Wider working total","8 Italian SSKs provisional"]]
  }),

  "toti-class-submarine": italianCombatantArticle({
    title:"Toti-class submarine",type:"Conventional attack submarine",period:"1962–1985",
    lead:"The Toti class is the smaller of two working registered Italian conventional-submarine classes in 1985. The reconstruction assigns four 1,600-tonne submerged diesel-electric boats—<em>Enrico Toti</em>, <em>Ettore Fieramosca</em>, <em>Pietro Micca</em>, and <em>Filippo Corridoni</em>—to a Mediterranean attack role.",
    canon:"Italy's complete 1985 fleet includes a conventional-submarine branch, but its exact eight-active-boat allocation remains provisional. The four-boat Toti division, names, 1962–1967 commissioning sequence, 1,600-tonne submerged displacement, diesel-electric propulsion, Mediterranean-attack role, and individual active statuses are registered working extrapolations rather than class-level explicit canon. Dimensions, speed, machinery, weapons, sensors, crew, builders, refits, patrols, and detailed service histories remain open.",
    development:"The working registry places Toti at the beginning of Italy's postwar conventional-submarine line and retains all four boats through 1985.",
    registry:italianClassRoster([["Enrico Toti","Working active allocation"],["Ettore Fieramosca","Working active allocation"],["Pietro Micca","Working active allocation"],["Filippo Corridoni","Working active allocation"]]),
    design:"The registered working design displaces 1,600 tonnes submerged and uses diesel-electric propulsion. Weapons, sensors, speed, endurance, dimensions, crew, and construction details remain open.",
    role:"The boats conducted Mediterranean attack patrols, coastal and strait surveillance, training, and exercises against Italian surface and anti-submarine forces.",
    systemTitle:"Regional operations",system:"Dense bases and short operating distances reduced the endurance penalty of a small conventional hull. Shallow water, shipping noise, islands, and chokepoints complicated both attack and counter-detection.",
    service:"The class remained useful beside newer Sauro boats and the nuclear force. Individual patrol and training histories are not fixed.",
    transitionTitle:"Sauro development",transition:"The larger working Sauro class followed from 1975. The register assigns four boats to each class within a provisional eight-boat conventional force.",
    status:"<!-- altwwii-writer-block:start id=wb-g-20260815-e5t9b writer=g kind=revision created=2026-08-15T15:01:00-06:00 -->The working register assigns all four named Toti boats as active within a provisional eight-SSK total. Hull identities, individual statuses, and the wider allocation remain registry extrapolations.<!-- altwwii-writer-block:end -->",
    related:[...italianEscortRelated,{href:"sauro-class-submarine.html",kicker:"Later conventional class",label:"Sauro Class"},{href:"marconi-class-ssn.html",kicker:"Nuclear branch",label:"Marconi Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats","4 · working register"],["Commissioning","1962–1967 · working"],["Submerged displacement","1,600 t · working"],["Propulsion","Diesel-electric · working"],["Active, 1985","4 provisional"],["Class detail status","Registered extrapolation"],["Wider working total","8 Italian SSKs provisional"]]
  })
});
