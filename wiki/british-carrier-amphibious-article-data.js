window.deepArticles = window.deepArticles || {};

const britishCarrierAmphibiousCanon = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
const britishCarrierAmphibiousHistory = "<sup class='canon-note' data-provenance='p'>[p]</sup>";
const britishCarrierAmphibiousExtrapolation = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

const britishFleetCarrierTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Ships</th><th>Commissioned</th><th>Full load</th><th>Standard 1985 air group</th><th>Status</th></tr></thead><tbody><tr><td><a href='malta-class-aircraft-carrier.html'>Malta</a></td><td>Malta; New Zealand</td><td>1958; 1961</td><td>58,500 t</td><td>58 aircraft</td><td>Active</td></tr><tr><td><a href='commonwealth-class-aircraft-carrier.html'>Commonwealth</a></td><td>Commonwealth; Dominion</td><td>1973; 1977</td><td>64,000 t</td><td>72 aircraft</td><td>Active</td></tr></tbody></table></div>";

const britishAmphibiousClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Function</th></tr></thead><tbody><tr><td><a href='round-table-class-landing-ship.html'>Round Table</a></td><td>12</td><td>1958–1967</td><td>8,500 t</td><td>5</td><td>Logistic landing ship</td></tr><tr><td><a href='fearless-class-landing-platform-dock.html'>Fearless</a></td><td>4</td><td>1964–1971</td><td>16,000 t</td><td>4</td><td>Landing-platform dock</td></tr><tr><td><a href='ocean-class-helicopter-assault-ship.html'>Ocean</a></td><td>3</td><td>1972–1980</td><td>21,000 t</td><td>3</td><td>Helicopter assault ship</td></tr><tr><td><a href='commonwealth-heavy-landing-ship.html'>Commonwealth Heavy Landing Ship</a></td><td>6</td><td>1976–1985</td><td>14,500 t</td><td>6</td><td>Vehicles, landing craft, and helicopters</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "british-fleet-carriers": britishNavalArticle({
    title:"British fleet-carrier force, 1958–1985",
    category:"Naval aviation",
    landscape:britishMaritimeLandscape,
    lead:"Britain's postwar fleet carriers supplied long-range air defense, strike, reconnaissance, anti-submarine support, and command across the Atlantic–Cape system. The current incorporated reconstruction comprises HMS Malta and HMS New Zealand of the Malta class and HMS Commonwealth and HMS Dominion of the Commonwealth class, with all four active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba1j2 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->Later naval doctrine establishes fleet carriers as mobile air-superiority, surveillance, strike, command, and ASW platforms within route defense, important but not supreme over the rest of the fleet.${britishCarrierAmphibiousCanon} The two-class, four-ship register, dates, displacements, propulsion, air-group totals, 1985 balance, and named South Atlantic assignments are incorporated reconstruction whose exact postwar register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed design and service histories remain open.<!-- altwwii-writer-block:end -->`,
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
    lead:"In the current incorporated reconstruction, the Malta class comprised the British fleet carriers HMS Malta and HMS New Zealand, commissioned in 1958 and 1961. Each steam-powered ship displaced 58,500 tonnes at full load and carried a standard 1985 air group of fifty-eight aircraft.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba2k3 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->The Malta design's wartime ancestry is inherited history, while later naval doctrine establishes Britain's need for large fleet carriers within the route-defense system.${britishCarrierAmphibiousHistory}${britishCarrierAmphibiousCanon} The two completed ships, names, dates, displacement, propulsion, air-group total, and 1985 status are incorporated reconstruction whose exact register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed design and service histories remain open.<!-- altwwii-writer-block:end -->`,
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
    lead:"In the current incorporated reconstruction, the Commonwealth class comprised the British fleet carriers HMS Commonwealth and HMS Dominion, commissioned in 1973 and 1977. Each steam-powered ship displaced 64,000 tonnes at full load and carried a standard air group of seventy-two aircraft.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba3l4 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->Later naval doctrine establishes Britain's need for large fleet carriers providing mobile air superiority, surveillance, strike, command, and ASW support across Commonwealth routes.${britishCarrierAmphibiousCanon} Commonwealth's two-ship roster, names, dates, displacement, propulsion, air-group total, and 1985 status are incorporated reconstruction whose exact register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed design and service histories remain open.<!-- altwwii-writer-block:end -->`,
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
    lead:"British postwar amphibious forces combined landing ships, landing-platform docks, helicopter assault ships, troop and vehicle transports, landing craft, marines, engineers, and chartered merchant shipping. The current incorporated reconstruction uses four principal classes and places eighteen major amphibious ships in active service in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba4m5 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->Later naval doctrine establishes amphibious and mobile-intervention forces as part of Britain's route-centered expeditionary system, dependent on air cover, mine clearance, ASW, fire support, and follow-on logistics.${britishCarrierAmphibiousCanon} The Round Table, Fearless, Ocean, and Commonwealth Heavy Landing Ship classes, rosters, dates, displacements, propulsion, exact active totals, and South Atlantic pool are incorporated reconstruction whose exact register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed capacities, equipment, and individual histories remain open.<!-- altwwii-writer-block:end -->`,
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
    lead:"In the current incorporated reconstruction, the Round Table class was a twelve-ship British logistic landing-ship class introduced between 1958 and 1967. Each diesel-powered ship displaced 8,500 tonnes at full load, and five remained active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba5n6 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->Later naval doctrine establishes logistic landing ships as part of Britain's amphibious and mobile-intervention system.${britishCarrierAmphibiousCanon} Round Table's class identity, twelve-ship roster, dates, displacement, propulsion, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed capacities, equipment, deployment, and final dispositions remain open.<!-- altwwii-writer-block:end -->`,
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
    lead:"In the current incorporated reconstruction, the Fearless class comprised the landing-platform docks HMS Fearless, HMS Intrepid, HMS Valorous, and HMS Adventurous. The four 16,000-tonne steam-turbine ships occupied the 1964–1971 introduction band and all remained active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba6o7 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->Later naval doctrine establishes landing-platform docks as part of Britain's amphibious and mobile-intervention system.${britishCarrierAmphibiousCanon} Fearless's class identity, four-ship roster, dates, displacement, propulsion, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed capacities, equipment, deployments, and refits remain open.<!-- altwwii-writer-block:end -->`,
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
    lead:"In the current incorporated reconstruction, the Ocean class comprised the helicopter assault ships HMS Ocean, HMS Albion, and HMS Bulwark. The three 21,000-tonne steam-turbine ships occupied the 1972–1980 introduction band and all remained active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba7p8 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->Later naval doctrine establishes helicopter assault as part of Britain's amphibious and mobile-intervention system.${britishCarrierAmphibiousCanon} Ocean's class identity, three-ship roster, dates, displacement, propulsion, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed aviation, lift, equipment, deployments, and refits remain open.<!-- altwwii-writer-block:end -->`,
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
    lead:"In the current incorporated reconstruction, the Commonwealth Heavy Landing Ship class comprised Endurance, Protector, Pioneer, Pathfinder, Venture, and Quest. The six 14,500-tonne diesel ships occupied the 1976–1985 introduction band and carried vehicles, landing craft, and helicopters.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-ba8q9 writer=g kind=revision created=2026-08-16T16:15:00-06:00 -->Later naval doctrine establishes distributed Commonwealth construction and support standards alongside Britain's amphibious and mobile-intervention requirement.${britishCarrierAmphibiousCanon} This class's identity, six-ship roster, dates, displacement, propulsion, combined lift function, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishCarrierAmphibiousExtrapolation} Detailed design, national shares, deployments, and individual histories remain open.<!-- altwwii-writer-block:end -->`,
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
