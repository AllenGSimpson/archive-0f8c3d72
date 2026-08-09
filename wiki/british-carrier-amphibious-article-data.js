window.deepArticles = window.deepArticles || {};

const britishFleetCarrierTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Ships</th><th>Commissioned</th><th>Full load</th><th>Standard 1985 air group</th><th>Status</th></tr></thead><tbody><tr><td><a href='malta-class-aircraft-carrier.html'>Malta</a></td><td>Malta; New Zealand</td><td>1958; 1961</td><td>58,500 t</td><td>58 aircraft</td><td>Active</td></tr><tr><td><a href='commonwealth-class-aircraft-carrier.html'>Commonwealth</a></td><td>Commonwealth; Dominion</td><td>1973; 1977</td><td>64,000 t</td><td>72 aircraft</td><td>Active</td></tr></tbody></table></div>";

const britishAmphibiousClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Function</th></tr></thead><tbody><tr><td><a href='round-table-class-landing-ship.html'>Round Table</a></td><td>12</td><td>1958–1967</td><td>8,500 t</td><td>5</td><td>Logistic landing ship</td></tr><tr><td><a href='fearless-class-landing-platform-dock.html'>Fearless</a></td><td>4</td><td>1964–1971</td><td>16,000 t</td><td>4</td><td>Landing-platform dock</td></tr><tr><td><a href='ocean-class-helicopter-assault-ship.html'>Ocean</a></td><td>3</td><td>1972–1980</td><td>21,000 t</td><td>3</td><td>Helicopter assault ship</td></tr><tr><td><a href='commonwealth-heavy-landing-ship.html'>Commonwealth Heavy Landing Ship</a></td><td>6</td><td>1976–1985</td><td>14,500 t</td><td>6</td><td>Vehicles, landing craft, and helicopters</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "british-fleet-carriers": britishNavalArticle({
    title:"British fleet-carrier force, 1958–1985",
    category:"Naval aviation",
    landscape:britishMaritimeLandscape,
    lead:"Britain's postwar fleet-carrier force comprised HMS Malta and HMS New Zealand of the Malta class and HMS Commonwealth and HMS Dominion of the Commonwealth class. All four ships remained active in 1985 and supplied long-range air defense, strike, reconnaissance, anti-submarine support, and fleet command across the Atlantic–Cape system.",
    canon:"The two classes, four named ships, commissioning dates, displacements, steam propulsion, standard air groups, active 1985 status, carrier-air-cover role, and South Atlantic employment of Commonwealth and New Zealand are established. Dimensions, machinery arrangements, aircraft types, air-wing organization, weapons, sensors, refits, builders, deployments, and most individual service histories remain open.",
    sections:[
      {id:"requirement",title:"Postwar requirement",html:"<p>The loss of the Mediterranean and Southeast Asian base chains increased the distance between British land airfields. Fleet carriers provided air defense, reconnaissance, strike, and command where shore coverage was absent or politically uncertain.</p>"},
      {id:"classes",title:"Classes",html:britishFleetCarrierTable},
      {id:"malta",title:"Malta class",html:"<p><a href='malta-class-aircraft-carrier.html'>HMS Malta and HMS New Zealand</a> commissioned in 1958 and 1961. Each displaced 58,500 tonnes at full load and carried a standard 1985 air group of fifty-eight aircraft.</p>"},
      {id:"commonwealth",title:"Commonwealth class",html:"<p><a href='commonwealth-class-aircraft-carrier.html'>HMS Commonwealth and HMS Dominion</a> commissioned in 1973 and 1977. Each displaced 64,000 tonnes at full load and carried a standard group of seventy-two aircraft.</p>"},
      {id:"operations",title:"Operations",html:"<p>Carrier groups protected convoys, amphibious forces, replenishment ships, and surface command formations. Aircraft extended interception and reconnaissance beyond the radar horizon, attacked ships and land targets, and supported anti-submarine barriers.</p>"},
      {id:"south-atlantic",title:"South Atlantic force",html:"<p>Commonwealth and New Zealand formed the two fleet carriers in the principal South Atlantic formation on 1 January 1985. Invincible supplied a smaller VTOL and helicopter deck.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four fleet carriers remained active. Refit, transit, air-wing availability, crew training, escorts, and replenishment determined usable strength.</p>"}
    ],
    related:[{href:"malta-class-aircraft-carrier.html",kicker:"First postwar generation",label:"Malta Class"},{href:"commonwealth-class-aircraft-carrier.html",kicker:"Later fleet carrier",label:"Commonwealth Class"},{href:"invincible-class-light-carrier.html",kicker:"Light-carrier complement",label:"Invincible Class"},{href:"british-destroyer-force.html",kicker:"Air-defense screen",label:"British Destroyer Force"},{href:"royal-fleet-auxiliary-postwar.html",kicker:"Sustainment",label:"Royal Fleet Auxiliary"}],
    facts:[["Fleet carriers, 1985","4"],["Malta class","Malta; New Zealand"],["Malta air group","58 aircraft"],["Commonwealth class","Commonwealth; Dominion"],["Commonwealth air group","72 aircraft"],["Status","All active"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Malta-class_aircraft_carrier",label:"Wikipedia — pre-divergence Malta-class design history"}]
  }),

  "malta-class-aircraft-carrier": britishNavalArticle({
    title:"Malta-class aircraft carrier",
    category:"Warship class",
    eyebrow:"Royal Navy · fleet carrier · 1958–",
    landscape:britishMaritimeLandscape,
    lead:"The Malta class comprised the British fleet carriers HMS Malta and HMS New Zealand, commissioned in 1958 and 1961. Each steam-powered ship displaced 58,500 tonnes at full load and carried a standard 1985 air group of fifty-eight aircraft.",
    canon:"The two-ship roster and commissioning years, 58,500-tonne full-load displacement, steam-turbine propulsion, fifty-eight-aircraft standard 1985 air group, fleet-air-defense and strike role, and active 1985 status are established. Dimensions, machinery arrangement, aircraft types, air-wing organization, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class converted wartime large-carrier design work into Britain's first purpose-built postwar fleet-carrier generation. It entered service after the old Mediterranean and Southeast Asian base chains had been lost.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>HMS Malta</td><td>1958</td><td>Active</td></tr><tr><td>HMS New Zealand</td><td>1961</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 58,500 tonnes at full load and used steam turbines. The standard 1985 air group numbered fifty-eight aircraft. Dimensions, speed, deck arrangement, weapons, sensors, and crew remain open.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The air group provided fleet air defense, strike, reconnaissance, and anti-submarine support. The fifty-eight-aircraft figure is a standard planning group rather than a fixed deployment list; aircraft types and squadron organization remain unsettled.</p>"},
      {id:"service",title:"Service",html:"<p>Malta-class carriers covered Atlantic, Cape, Indian Ocean, and South Atlantic operations. HMS New Zealand served in the principal South Atlantic formation at the beginning of 1985.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both ships remained active. The register does not specify their individual refit, readiness, or air-wing condition outside the named South Atlantic deployment.</p>"}
    ],
    related:[{href:"british-fleet-carriers.html",kicker:"Force history",label:"British Fleet Carriers"},{href:"commonwealth-class-aircraft-carrier.html",kicker:"Successor generation",label:"Commonwealth Class"},{href:"british-frigate-force.html",kicker:"ASW screen",label:"British Frigate Force"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Ships","HMS Malta; HMS New Zealand"],["Commissioned","1958; 1961"],["Full load","58,500 t"],["Propulsion","Steam turbine"],["Standard air group","58 aircraft"],["Status, 1985","Both active"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Malta-class_aircraft_carrier",label:"Wikipedia — pre-divergence Malta-class design history"}]
  }),

  "commonwealth-class-aircraft-carrier": britishNavalArticle({
    title:"Commonwealth-class aircraft carrier",
    category:"Warship class",
    eyebrow:"Royal Navy · fleet carrier · 1973–",
    landscape:britishMaritimeLandscape,
    lead:"The Commonwealth class comprised the British fleet carriers HMS Commonwealth and HMS Dominion, commissioned in 1973 and 1977. Each steam-powered ship displaced 64,000 tonnes at full load and carried a standard air group of seventy-two aircraft.",
    canon:"The two-ship roster and commissioning years, 64,000-tonne full-load displacement, steam-turbine propulsion, seventy-two-aircraft standard group, long-range Commonwealth fleet-carrier role, and active 1985 status are established. Dimensions, machinery arrangement, aircraft types, air-wing organization, weapons, sensors, crew, builders, refits, deployments, and most individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed Malta and New Zealand and enlarged Britain's fleet-carrier air group for long-range Commonwealth operations. Its names emphasized the constitutional and material system that financed, crewed, based, and supplied the ships.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>HMS Commonwealth</td><td>1973</td><td>Active</td></tr><tr><td>HMS Dominion</td><td>1977</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 64,000 tonnes at full load and used steam turbines. The standard air group numbered seventy-two aircraft. Dimensions, speed, deck arrangement, weapons, sensors, and crew remain open.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The air group supplied fleet air defense, strike, reconnaissance, and anti-submarine support. The register does not fix aircraft types, squadron counts, or the division between fixed-wing aircraft and helicopters.</p>"},
      {id:"service",title:"Service",html:"<p>The class operated across the Atlantic–Cape–Indian Ocean system. HMS Commonwealth formed part of the principal South Atlantic force on 1 January 1985.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both ships remained active. Their individual maintenance and deployment schedules remain open beyond Commonwealth's recorded South Atlantic assignment.</p>"}
    ],
    related:[{href:"british-fleet-carriers.html",kicker:"Force history",label:"British Fleet Carriers"},{href:"malta-class-aircraft-carrier.html",kicker:"Preceding generation",label:"Malta Class"},{href:"invincible-class-light-carrier.html",kicker:"Light carrier",label:"Invincible Class"},{href:"siege-commonwealth-naval-system.html",kicker:"Supporting system",label:"Siege Commonwealth Naval System"}],
    facts:[["Ships","HMS Commonwealth; HMS Dominion"],["Commissioned","1973; 1977"],["Full load","64,000 t"],["Propulsion","Steam turbine"],["Standard air group","72 aircraft"],["Status, 1985","Both active"]]
  }),

  "british-amphibious-forces": britishNavalArticle({
    title:"British postwar amphibious forces",
    category:"Amphibious warfare",
    landscape:britishMaritimeLandscape,
    lead:"British postwar amphibious forces combined logistic landing ships, landing-platform docks, helicopter assault ships, Commonwealth heavy landing ships, troop and vehicle transports, landing craft, marines, engineers, and chartered merchant shipping. Eighteen major amphibious ships remained active in 1985.",
    canon:"Round Table, Fearless, Ocean, and Commonwealth Heavy Landing Ship class rosters, introduction bands, registered displacements, propulsion, functions, active totals, South Atlantic pool, and supporting requirements are established. Detailed capacities, landing-craft types, helicopter groups, weapons, sensors, crews, builders, deployments, refits, and most individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The postwar force developed four complementary hull types. Logistic landing ships delivered stores and vehicles to austere shores. Landing-platform docks carried landing craft and command facilities. Helicopter assault ships moved troops vertically. Heavy landing ships combined vehicles, craft, and aviation.</p>"},
      {id:"classes",title:"Classes",html:britishAmphibiousClassTable},
      {id:"round-table",title:"Round Table class",html:"<p>Twelve <a href='round-table-class-landing-ship.html'>Round Table-class ships</a> entered service between 1958 and 1967. Five remained active: Sir Lamorak, Sir Mordred, Sir Kay, Sir Bors, and Sir Agravaine.</p>"},
      {id:"fearless",title:"Fearless class",html:"<p><a href='fearless-class-landing-platform-dock.html'>Fearless, Intrepid, Valorous, and Adventurous</a> entered service within the 1964–1971 band. All four remained active as landing-platform docks.</p>"},
      {id:"ocean",title:"Ocean class",html:"<p><a href='ocean-class-helicopter-assault-ship.html'>Ocean, Albion, and Bulwark</a> entered service within the 1972–1980 band. All three 21,000-tonne helicopter assault ships remained active.</p>"},
      {id:"heavy",title:"Commonwealth Heavy Landing Ship",html:"<p>Six <a href='commonwealth-heavy-landing-ship.html'>Commonwealth Heavy Landing Ships</a> entered service from 1976 through 1984 within the registered 1976–1985 band. All carried vehicles, landing craft, and helicopters.</p>"},
      {id:"south-atlantic",title:"South Atlantic pool",html:"<p>The early-1985 theater pool included three landing-platform docks, two helicopter assault ships, six landing ships, eight troop or vehicle transports, and chartered merchants. Oilers, stores ships, repair ships, and casualty ships sustained the group.</p>"},
      {id:"conditions",title:"Conditions for employment",html:"<p>Amphibious ships required air cover, mine clearance, submarine screening, fire support, weather information, protected unloading areas, and follow-on merchant tonnage. The failed East Falkland landing attempt of 1984 made these dependencies politically decisive.</p>"}
    ],
    related:[{href:"round-table-class-landing-ship.html",kicker:"Logistic landing ship",label:"Round Table Class"},{href:"fearless-class-landing-platform-dock.html",kicker:"Landing-platform dock",label:"Fearless Class"},{href:"ocean-class-helicopter-assault-ship.html",kicker:"Helicopter assault",label:"Ocean Class"},{href:"commonwealth-heavy-landing-ship.html",kicker:"Heavy landing ship",label:"Commonwealth Heavy Landing Ship"},{href:"royal-fleet-auxiliary-postwar.html",kicker:"Sustainment",label:"Royal Fleet Auxiliary"}],
    facts:[["Major amphibious ships, 1985","18"],["Round Table","12 built; 5 active"],["Fearless","4 active"],["Ocean","3 active"],["Commonwealth Heavy Landing Ship","6 active"],["Primary routes","Cape, Gulf, Indian Ocean, South Atlantic"]]
  }),

  "round-table-class-landing-ship": britishNavalArticle({
    title:"Round Table-class landing ship",
    category:"Warship class",
    eyebrow:"Royal Navy · logistic landing ship · 1958–",
    landscape:britishMaritimeLandscape,
    lead:"The Round Table class was a twelve-ship British logistic landing-ship class introduced between 1958 and 1967. Each diesel-powered ship displaced 8,500 tonnes at full load. Five remained active in 1985.",
    canon:"The twelve-ship roster and commissioning years, 1958–1967 introduction band, 8,500-tonne full-load displacement, diesel propulsion, logistic-landing function, five active and seven decommissioned ships, and decommissioning years are established. Dimensions, speed, cargo and vehicle capacity, landing arrangements, weapons, sensors, crew, builders, deployments, refits, and final dispositions remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied practical shore-to-shore logistics during the reconstruction of Britain's expeditionary system. It could deliver vehicles and stores where full port facilities were absent or damaged.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Status, 1985</th><th>Ships</th></tr></thead><tbody><tr><td>Active</td><td>Sir Lamorak, Sir Mordred, Sir Kay, Sir Bors, Sir Agravaine</td></tr><tr><td>Decommissioned</td><td>Sir Galahad, Sir Lancelot, Sir Geraint, Sir Percivale, Sir Tristram, Sir Bedivere, Sir Caradoc</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 8,500 tonnes at full load and used diesel propulsion. The registered function was logistic landing. Cargo volume, vehicle lanes, ramps, landing craft, speed, and crew remain open.</p>"},
      {id:"service",title:"Service",html:"<p>Round Table ships moved vehicles, stores, engineers, troops, and landing equipment along Commonwealth routes and into expeditionary theaters. Specific deployments remain unsettled.</p>"},
      {id:"retirement",title:"Decommissioning",html:"<p>Seven ships left service between 1975 and 1983. The five later hulls remained active; final dispositions of the decommissioned ships are open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Sir Lamorak, Sir Mordred, Sir Kay, Sir Bors, and Sir Agravaine remained active. Readiness and theater assignment are not fixed.</p>"}
    ],
    related:[{href:"british-amphibious-forces.html",kicker:"Force history",label:"British Amphibious Forces"},{href:"fearless-class-landing-platform-dock.html",kicker:"Landing-platform dock",label:"Fearless Class"},{href:"royal-fleet-auxiliary-postwar.html",kicker:"Sustainment",label:"Royal Fleet Auxiliary"},{href:"kuwait-war.html",kicker:"Expeditionary theater",label:"Kuwait War"}],
    facts:[["Type","Logistic landing ship"],["Built","12"],["Commissioned","1958–1967"],["Full load","8,500 t"],["Propulsion","Diesel"],["Active, 1985","5"],["Decommissioned","7"]]
  }),

  "fearless-class-landing-platform-dock": britishNavalArticle({
    title:"Fearless-class landing-platform dock",
    category:"Warship class",
    eyebrow:"Royal Navy · landing-platform dock · 1964–",
    landscape:britishMaritimeLandscape,
    lead:"The Fearless class comprised the British landing-platform docks HMS Fearless, HMS Intrepid, HMS Valorous, and HMS Adventurous. The four 16,000-tonne steam-turbine ships occupied the registered 1964–1971 introduction band and all remained active in 1985.",
    canon:"The four-ship roster and individual commissioning years, 1964–1971 introduction band, 16,000-tonne full-load displacement, steam-turbine propulsion, landing-platform-dock function, and four active ships are established. Dimensions, speed, well-deck and landing-craft capacity, troop and vehicle capacity, aviation, weapons, sensors, crew, builders, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Fearless provided a command and landing-craft platform larger than the Round Table logistic ships. It was intended to organize the ship-to-shore movement of troops, vehicles, engineers, and supplies.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th></tr></thead><tbody><tr><td>HMS Fearless</td><td>1964</td></tr><tr><td>HMS Intrepid</td><td>1966</td></tr><tr><td>HMS Valorous</td><td>1968</td></tr><tr><td>HMS Adventurous</td><td>1970</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 16,000 tonnes at full load and used steam turbines. The class was a landing-platform dock. Well-deck dimensions, landing craft, troop and vehicle capacity, helicopter facilities, speed, and crew remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>Fearless ships carried landing craft, command staffs, troops, vehicles, and supporting equipment. They depended upon escorts, minesweepers, air cover, fire support, and follow-on transports.</p>"},
      {id:"south-atlantic",title:"South Atlantic pool",html:"<p>Three landing-platform docks were available to the early-1985 South Atlantic theater pool. The source register does not identify which one of the four remained outside the pool.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four ships remained active. Individual deployment, overhaul, and readiness are not fixed.</p>"}
    ],
    related:[{href:"british-amphibious-forces.html",kicker:"Force history",label:"British Amphibious Forces"},{href:"round-table-class-landing-ship.html",kicker:"Logistic complement",label:"Round Table Class"},{href:"ocean-class-helicopter-assault-ship.html",kicker:"Vertical assault",label:"Ocean Class"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Type","Landing-platform dock"],["Ships","Fearless; Intrepid; Valorous; Adventurous"],["Introduction band","1964–1971"],["Roster commissions","1964; 1966; 1968; 1970"],["Full load","16,000 t"],["Propulsion","Steam turbine"],["Active, 1985","4"]]
  }),

  "ocean-class-helicopter-assault-ship": britishNavalArticle({
    title:"Ocean-class helicopter assault ship",
    category:"Warship class",
    eyebrow:"Royal Navy · helicopter assault ship · 1972–",
    landscape:britishMaritimeLandscape,
    lead:"The Ocean class comprised the British helicopter assault ships HMS Ocean, HMS Albion, and HMS Bulwark. The three 21,000-tonne steam-turbine ships occupied the registered 1972–1980 introduction band and all remained active in 1985.",
    canon:"The three-ship roster and individual commissioning years, 1972–1980 introduction band, 21,000-tonne full-load displacement, steam-turbine propulsion, helicopter-assault role, and three active ships are established. Dimensions, speed, helicopter group, troop and vehicle capacity, landing craft, weapons, sensors, crew, builders, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Ocean added a dedicated helicopter-assault platform to the landing force. Vertical movement allowed troops and selected equipment to bypass some beach obstacles and reach inland landing zones.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th></tr></thead><tbody><tr><td>HMS Ocean</td><td>1972</td></tr><tr><td>HMS Albion</td><td>1975</td></tr><tr><td>HMS Bulwark</td><td>1978</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 21,000 tonnes at full load and used steam turbines. The registered function was helicopter assault. Air group, troop capacity, vehicle capacity, landing craft, speed, and crew remain open.</p>"},
      {id:"operations",title:"Helicopter assault",html:"<p>Helicopters moved assault troops, reconnaissance parties, engineers, supplies, and casualties. Weather, air defense, aircraft serviceability, fuel, and landing-zone security governed the rate of movement.</p>"},
      {id:"south-atlantic",title:"South Atlantic pool",html:"<p>Two helicopter assault ships were available to the early-1985 South Atlantic pool. Their identities are not fixed in the class-level register.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Ocean, Albion, and Bulwark remained active. Individual assignment and readiness are open.</p>"}
    ],
    related:[{href:"british-amphibious-forces.html",kicker:"Force history",label:"British Amphibious Forces"},{href:"fearless-class-landing-platform-dock.html",kicker:"Landing-craft complement",label:"Fearless Class"},{href:"invincible-class-light-carrier.html",kicker:"Aviation partner",label:"Invincible Class"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Type","Helicopter assault ship"],["Ships","Ocean; Albion; Bulwark"],["Introduction band","1972–1980"],["Roster commissions","1972; 1975; 1978"],["Full load","21,000 t"],["Propulsion","Steam turbine"],["Active, 1985","3"]]
  }),

  "commonwealth-heavy-landing-ship": britishNavalArticle({
    title:"Commonwealth Heavy Landing Ship",
    category:"Warship class",
    eyebrow:"Royal Navy · heavy landing ship · 1976–",
    landscape:britishMaritimeLandscape,
    lead:"The Commonwealth Heavy Landing Ship class comprised Endurance, Protector, Pioneer, Pathfinder, Venture, and Quest. The six 14,500-tonne diesel ships occupied the registered 1976–1985 introduction band and carried vehicles, landing craft, and helicopters.",
    canon:"The six-ship roster and individual commissioning years, 1976–1985 introduction band, 14,500-tonne full-load displacement, diesel propulsion, vehicle, landing-craft, and helicopter function, and six active ships are established. Dimensions, speed, detailed capacities, landing-craft and helicopter types, weapons, sensors, crew, builders, deployments, refits, and national funding shares remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class combined several amphibious functions in one heavy landing ship. It supplemented the specialized Round Table, Fearless, and Ocean classes and reflected distributed Commonwealth requirements.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th></tr></thead><tbody><tr><td>HMS Endurance</td><td>1976</td></tr><tr><td>HMS Protector</td><td>1977</td></tr><tr><td>HMS Pioneer</td><td>1979</td></tr><tr><td>HMS Pathfinder</td><td>1981</td></tr><tr><td>HMS Venture</td><td>1982</td></tr><tr><td>HMS Quest</td><td>1984</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 14,500 tonnes at full load and used diesel propulsion. Vehicles, landing craft, and helicopters formed the registered payload categories. Exact capacities, air group, craft types, speed, and crew remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The class could move a mixed landing package and support dispersed operations along the Cape, Gulf, Indian Ocean, and South Atlantic routes. Escorts, minesweepers, air cover, and auxiliary support remained necessary.</p>"},
      {id:"designation",title:"Designation",html:"<p>“Commonwealth Heavy Landing Ship” was the registered class name. The ships served in the Royal Navy under HMS prefixes; the source does not establish separate Dominion ownership or a pooled command arrangement.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six ships remained active. Individual deployment and readiness are not fixed.</p>"}
    ],
    related:[{href:"british-amphibious-forces.html",kicker:"Force history",label:"British Amphibious Forces"},{href:"round-table-class-landing-ship.html",kicker:"Logistic landing ship",label:"Round Table Class"},{href:"ocean-class-helicopter-assault-ship.html",kicker:"Helicopter assault",label:"Ocean Class"},{href:"commonwealth-dominions.html",kicker:"Political system",label:"Commonwealth Dominions"}],
    facts:[["Type","Heavy landing ship"],["Ships","Endurance; Protector; Pioneer; Pathfinder; Venture; Quest"],["Introduction band","1976–1985"],["Roster commissions","1976–1984"],["Full load","14,500 t"],["Propulsion","Diesel"],["Payload categories","Vehicles, landing craft, helicopters"],["Active, 1985","6"]]
  })
});
