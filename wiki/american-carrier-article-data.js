window.deepArticles = window.deepArticles || {};

const americanCarrierLineageTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Ships</th><th>Commissioned</th><th>Full load</th><th>Standard air group</th></tr></thead><tbody><tr><td><a href='united-states-class-carrier.html'>United States</a></td><td>3</td><td>1957–1963</td><td>74,000 t</td><td>86 aircraft</td></tr><tr><td><a href='enterprise-class-carrier.html'>Enterprise</a></td><td>2</td><td>1965–1970</td><td>80,000 t</td><td>88 aircraft</td></tr><tr><td><a href='saratoga-class-carrier.html'>Saratoga</a></td><td>4</td><td>1973–1981</td><td>86,000 t</td><td>92 aircraft</td></tr><tr><td><a href='wasp-class-assault-carrier.html'>Wasp</a></td><td>3</td><td>1968–1976</td><td>30,000 t</td><td>32 aircraft</td></tr><tr><td><a href='america-class-vtol-carrier.html'>America</a></td><td>2</td><td>1979–1981</td><td>38,000 t</td><td>40 aircraft</td></tr></tbody></table></div>";

const americanCarrierRelated = [
  {href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},
  {href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"},
  {href:"american-cruiser-force.html",kicker:"Air-defense screen",label:"American Cruiser Force"},
  {href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}
];

Object.assign(window.deepArticles, {
  "american-carrier-force": americanNavalArticle({
    title:"United States carrier force, 1957–1985",
    category:"Naval aviation",
    landscape:americanFleetLandscape,
    lead:"The United States carrier force comprised nine fleet carriers and five assault carriers on 1 January 1985. Three steam-powered United States-class ships and six nuclear carriers supplied fleet air defense and strike, while three Wasp-class and two America-class ships supported amphibious operations, helicopters, and vertical-takeoff aircraft.",
    canon:"The five classes, fourteen named carriers, individual commissioning years in the registry except the controlling 1965–1970 Enterprise band, full-load displacements, standard air groups, propulsion categories, active 1985 status, and fleet, VTOL, helicopter, and amphibious roles are established. Aircraft models, air-wing organization, dimensions, speed, machinery particulars, weapons, sensors, refit calendars, deployments, and most individual histories remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>The United States completed thirteen fleet carriers by the 1947 armistice. This was a large neutral-war force, but far smaller than the historical emergency carrier program that would have followed American entry into the war. Eleven of the thirteen were operational at the armistice.</p><p>Postwar planners treated Japanese carrier strength as a permanent strategic fact. The absence of Pearl Harbor preserved battleship prestige, so aviation entered a balanced fleet rather than replacing the battle line as its sole capital arm.</p>"},
      {id:"doctrine",title:"Carrier doctrine",html:"<p>Fleet carriers provided long-range air defense, maritime and land attack, reconnaissance, command, and crisis presence. They normally operated with missile cruisers, destroyers, frigates, attack submarines, replenishment ships, and land-based Naval Air Corps support. Battleships could reinforce the same formation with guns, missiles, and armored command facilities.</p>"},
      {id:"lineage",title:"Class lineage",html:americanCarrierLineageTable},
      {id:"fleet-carriers",title:"Fleet carriers",html:"<p><a href='united-states-class-carrier.html'>United States</a>, Constitution, and Independence formed the steam-powered first postwar class. <a href='enterprise-class-carrier.html'>Enterprise</a> and Franklin introduced nuclear propulsion. The four <a href='saratoga-class-carrier.html'>Saratoga-class</a> ships were the largest and newest American carriers in the 1985 register.</p><p>The nine fleet carriers used standard air-group figures between eighty-six and ninety-two aircraft. These figures are planning complements rather than proof that every ship carried the same mix or was fully embarked at all times.</p>"},
      {id:"assault-carriers",title:"Assault carriers",html:"<p>The three <a href='wasp-class-assault-carrier.html'>Wasp-class</a> ships supported helicopter and amphibious assault. The two <a href='america-class-vtol-carrier.html'>America-class</a> ships added vertical-takeoff fleet support to amphibious aviation. Their air groups were smaller than fleet-carrier groups and could be changed according to landing, escort, or support requirements.</p>"},
      {id:"aviation",title:"Naval Air Corps",html:"<p>The Naval Air Corps controlled carrier and maritime aviation. The Army Air Corps retained battlefield aviation, while the independent Aerospace Force controlled strategic bombing, interception, missiles, military space, and orbital vehicles. Carrier aircraft therefore belonged to a naval command system even when supporting operations ashore.</p>"},
      {id:"support",title:"Escorts and logistics",html:"<p>Carrier endurance was a property of the whole task group. Cruisers supplied air-defense command; destroyers and frigates supplied missile and anti-submarine screens; SSNs operated in advance or as submerged escorts. Ammunition, aviation fuel, food, spares, aircraft maintenance, escort fuel, and replacement personnel tied every carrier to replenishment and repair forces.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All fourteen registered carriers were active. Refit, reactor or machinery maintenance, flight-deck work, aircraft availability, escort strength, and crew training determined how many could deploy together. The force register does not state simultaneous readiness.</p>"}
    ],
    related:[{href:"united-states-class-carrier.html",kicker:"Steam generation",label:"United States Class"},{href:"enterprise-class-carrier.html",kicker:"First nuclear class",label:"Enterprise Class"},{href:"saratoga-class-carrier.html",kicker:"Large nuclear class",label:"Saratoga Class"},{href:"wasp-class-assault-carrier.html",kicker:"Helicopter assault",label:"Wasp Class"},{href:"america-class-vtol-carrier.html",kicker:"VTOL assault",label:"America Class"}],
    facts:[["Fleet carriers, 1985","9"],["Assault carriers, 1985","5"],["Fleet-carrier classes","United States; Enterprise; Saratoga"],["Assault-carrier classes","Wasp; America"],["Principal aviation service","Naval Air Corps"],["Registered status","All active"]]
  }),

  "united-states-class-carrier": americanNavalArticle({
    title:"United States-class aircraft carrier",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The United States class was a three-ship steam-powered fleet-carrier class comprising USS United States, USS Constitution, and USS Independence. Commissioned from 1957 through 1963, the ships remained active in 1985 with standard air groups of eighty-six aircraft.",
    canon:"The three names and commissioning years, 74,000-tonne full-load displacement, steam-turbine propulsion, eighty-six-aircraft standard group, fleet air-defense and strike role, and active status are established. Dimensions, speed, machinery details, aircraft types, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class converted the limited neutral-war carrier inheritance into a purpose-built missile-age fleet platform. It was designed for larger postwar aircraft, long ocean operations, and task groups whose air and missile defenses were distributed among several ships.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS United States</td><td>1957</td><td>Active</td></tr><tr><td>USS Constitution</td><td>1960</td><td>Active</td></tr><tr><td>USS Independence</td><td>1963</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 74,000 tonnes at full load and used steam-turbine propulsion. The standard 1985 air group numbered eighty-six aircraft. The register does not settle dimensions, shaft arrangement, speed, defensive weapons, sensors, or detailed aircraft composition.</p>"},
      {id:"service",title:"Service",html:"<p>The class performed fleet air defense, maritime and land strike, reconnaissance, and command. It could support amphibious operations, but remained a fleet-carrier class rather than an assault-carrier design.</p>"},
      {id:"screen",title:"Task-group employment",html:"<p>United States-class ships operated inside cruiser, destroyer, frigate, submarine, and replenishment screens. Steam propulsion required bunker fuel for the carrier as well as aviation fuel and stores for its embarked air group.</p>"},
      {id:"succession",title:"Later classes",html:"<p>The two-ship Enterprise class introduced nuclear propulsion from 1965. The four-ship Saratoga class followed from 1973 with an 86,000-tonne full-load displacement and a ninety-two-aircraft standard group. The older United States ships nevertheless remained front-line in 1985.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"enterprise-class-carrier.html",kicker:"Nuclear successor",label:"Enterprise Class"},{href:"saratoga-class-carrier.html",kicker:"Later generation",label:"Saratoga Class"},{href:"american-cruiser-force.html",kicker:"Escort system",label:"American Cruiser Force"}],
    facts:[["Ships","United States; Constitution; Independence"],["Commissioned","1957; 1960; 1963"],["Full load","74,000 t"],["Propulsion","Steam turbine"],["Standard air group","86 aircraft"],["Status, 1985","All active"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/United_States-class_aircraft_carrier",label:"Wikipedia — pre-divergence United States-class design history"}]
  }),

  "american-nuclear-carriers": americanNavalArticle({
    title:"American nuclear fleet carriers",
    category:"Naval aviation",
    landscape:americanLineageLandscape,
    lead:"American nuclear fleet carriers comprised two Enterprise-class and four Saratoga-class ships. All six were active in 1985, carrying standard air groups of eighty-eight or ninety-two aircraft and providing the long-endurance center of the United States carrier force.",
    canon:"Enterprise, Franklin, Saratoga, Ranger, Yorktown, and Lexington; commissioning years or controlling bands; 80,000- and 86,000-tonne full-load values; nuclear propulsion; standard air groups; roles; and active 1985 status are established. Reactor type and count, dimensions, speed, weapons, sensors, crews, aircraft composition, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Nuclear propulsion entered the carrier fleet with USS Enterprise in 1965. The program reduced the carrier's dependence on ship fuel and supported sustained high-tempo movement, while leaving aviation fuel, weapons, food, spares, aircraft maintenance, and escort fuel within the ordinary replenishment system.</p>"},
      {id:"enterprise",title:"Enterprise class",html:"<p><a href='enterprise-class-carrier.html'>Enterprise and Franklin</a> commissioned within the controlling 1965–1970 band. Each displaced 80,000 tonnes at full load and carried a standard group of eighty-eight aircraft.</p>"},
      {id:"saratoga",title:"Saratoga class",html:"<p><a href='saratoga-class-carrier.html'>Saratoga, Ranger, Yorktown, and Lexington</a> commissioned in 1973, 1976, 1979, and 1981. Each displaced 86,000 tonnes at full load and carried a standard group of ninety-two aircraft.</p>"},
      {id:"roles",title:"Roles",html:"<p>The ships provided fleet air defense, long-range maritime and land strike, reconnaissance, command, and crisis presence. Their speed and endurance also made nuclear cruiser and SSN escorts valuable parts of the task group.</p>"},
      {id:"support",title:"Nuclear support system",html:"<p>Reactor operation required specialized personnel, dockyard facilities, radiological controls, and lengthy overhaul work. The propulsion plant extended ship endurance; it did not make the carrier group independent of ports, tenders, oilers, ammunition ships, or aviation supply.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six nuclear carriers remained active on 1 January 1985. The register does not identify which ships were deployed, refitting, training, or undergoing machinery work on that date.</p>"}
    ],
    related:[{href:"enterprise-class-carrier.html",kicker:"First generation",label:"Enterprise Class"},{href:"saratoga-class-carrier.html",kicker:"Second generation",label:"Saratoga Class"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"united-states-class-carrier.html",kicker:"Steam predecessor",label:"United States Class"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}],
    facts:[["Classes","Enterprise; Saratoga"],["Enterprise class","2 ships; 80,000 t; 88 aircraft"],["Saratoga class","4 ships; 86,000 t; 92 aircraft"],["Propulsion","Nuclear"],["Active, 1985","6"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/USS_Enterprise_(CVN-65)",label:"Wikipedia — historical nuclear-carrier design context"}]
  }),

  "american-assault-carriers": americanNavalArticle({
    title:"American assault-carrier force",
    category:"Amphibious aviation",
    landscape:americanFleetLandscape,
    lead:"The American assault-carrier force comprised three Wasp-class helicopter assault ships and two America-class VTOL and amphibious carriers. All five remained active in 1985 as the aviation component of the Navy's amphibious and expeditionary system.",
    canon:"The two classes, five names and commissioning years, 30,000- and 38,000-tonne full-load values, standard air groups of thirty-two and forty aircraft, steam propulsion, active status, and registered helicopter, VTOL, fleet-support, and amphibious roles are established. Aircraft types, troop and vehicle capacities, dimensions, speed, weapons, sensors, crews, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The assault-carrier branch joined aviation to Marine lift and landing operations. It did not duplicate the nine fleet carriers: its ships carried smaller, mission-variable air groups and worked directly with landing-platform docks, tank landing ships, escorts, and embarked forces.</p>"},
      {id:"wasp",title:"Wasp class",html:"<p><a href='wasp-class-assault-carrier.html'>Wasp, Iwo Jima, and Guadalcanal</a> commissioned in 1968, 1972, and 1976. Each displaced 30,000 tonnes at full load, used steam propulsion, and carried a standard group of thirty-two aircraft for helicopter and amphibious assault.</p>"},
      {id:"america",title:"America class",html:"<p><a href='america-class-vtol-carrier.html'>America and Philippine Sea</a> commissioned in 1979 and 1981. Each displaced 38,000 tonnes at full load and carried a standard group of forty aircraft for VTOL fleet support and amphibious aviation.</p>"},
      {id:"missions",title:"Missions",html:"<p>Assault carriers provided helicopter transport, local air defense, reconnaissance, strike, landing-force command, evacuation, and support to larger fleet formations. Their exact aircraft mix could be adjusted between vertical-takeoff aircraft, assault helicopters, anti-submarine helicopters, transports, and utility machines.</p>"},
      {id:"integration",title:"Amphibious integration",html:"<p>Seven Iwo Jima-class helicopter-assault ships, twelve Austin-class landing-platform docks, and thirteen Newport-class fast tank landing ships formed the thirty-two-ship major amphibious balance. The carrier register counts Wasp and America separately as aviation ships within the wider system.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All five carriers remained active. Air-group planning figures did not establish the embarked mix, troop load, readiness, or deployment of an individual ship.</p>"}
    ],
    related:[{href:"wasp-class-assault-carrier.html",kicker:"Helicopter class",label:"Wasp Class"},{href:"america-class-vtol-carrier.html",kicker:"VTOL class",label:"America Class"},{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Carrier system",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"}],
    facts:[["Assault carriers, 1985","5"],["Wasp class","3 ships; 30,000 t; 32 aircraft"],["America class","2 ships; 38,000 t; 40 aircraft"],["Propulsion","Steam turbine"],["Status","All active"]]
  }),

  "enterprise-class-carrier": americanNavalArticle({
    title:"Enterprise-class aircraft carrier",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Enterprise class was a two-ship American nuclear fleet-carrier class comprising USS Enterprise and USS Franklin. Commissioned within the 1965–1970 program, both ships remained active in 1985 with standard air groups of eighty-eight aircraft.",
    canon:"The two names, 1965–1970 commissioning band, 80,000-tonne full-load displacement, nuclear propulsion, eighty-eight-aircraft standard group, fleet-carrier role, and active status are established. Franklin's exact commissioning year remains subordinate to the controlling band because the current registry differs. Reactor arrangement, dimensions, speed, aircraft types, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the steam-powered United States class and introduced nuclear propulsion to American carrier operations. It entered service while the Navy was also building nuclear missile cruisers and operational nuclear attack submarines.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioning</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS Enterprise</td><td>1965</td><td>Active</td></tr><tr><td>USS Franklin</td><td>By 1970</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 80,000 tonnes at full load, used nuclear propulsion, and carried a standard air group of eighty-eight aircraft. Reactor number and type, dimensions, speed, defensive armament, sensors, and aircraft composition remain open.</p>"},
      {id:"role",title:"Role",html:"<p>Enterprise-class ships supplied fleet air defense, maritime and land strike, reconnaissance, command, and crisis presence. Nuclear propulsion supported sustained movement but did not eliminate the group's aviation and escort logistics.</p>"},
      {id:"escorts",title:"Escorts and replenishment",html:"<p>Nuclear cruisers could accompany the class without requiring ship fuel, while destroyers, frigates, and conventional auxiliaries still required replenishment. SSNs could range ahead or form a submerged anti-submarine screen.</p>"},
      {id:"succession",title:"Saratoga class",html:"<p>The four-ship Saratoga class entered service from 1973 at a higher full-load displacement and with a larger standard air group. Both Enterprise-class ships remained front-line beside it in 1985.</p>"}
    ],
    related:[{href:"american-nuclear-carriers.html",kicker:"Type history",label:"American Nuclear Carriers"},{href:"saratoga-class-carrier.html",kicker:"Successor class",label:"Saratoga Class"},{href:"united-states-class-carrier.html",kicker:"Steam predecessor",label:"United States Class"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"}],
    facts:[["Ships","Enterprise; Franklin"],["Commissioned","1965–1970"],["Full load","80,000 t"],["Propulsion","Nuclear"],["Standard air group","88 aircraft"],["Status, 1985","Both active"]]
  }),

  "saratoga-class-carrier": americanNavalArticle({
    title:"Saratoga-class aircraft carrier",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Saratoga class was a four-ship American nuclear fleet-carrier class comprising USS Saratoga, USS Ranger, USS Yorktown, and USS Lexington. Commissioned between 1973 and 1981, it formed the largest and newest American carrier class in 1985.",
    canon:"The four names and commissioning years, 86,000-tonne full-load displacement, nuclear propulsion, ninety-two-aircraft standard group, large fleet-carrier role, and active status are established. Reactor arrangement, dimensions, speed, aircraft types, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the two Enterprise nuclear carriers and expanded the nuclear fleet-carrier force from two ships to six. Construction continued through the 1970s and delivered the last ship in 1981.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS Saratoga</td><td>1973</td><td>Active</td></tr><tr><td>USS Ranger</td><td>1976</td><td>Active</td></tr><tr><td>USS Yorktown</td><td>1979</td><td>Active</td></tr><tr><td>USS Lexington</td><td>1981</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 86,000 tonnes at full load and carried a standard air group of ninety-two aircraft. The class used nuclear propulsion. Detailed machinery, dimensions, speed, weapons, sensors, and aircraft types remain open.</p>"},
      {id:"role",title:"Role",html:"<p>Saratoga-class ships served as large fleet carriers for air defense, maritime and land strike, reconnaissance, and command. Their task groups joined missile-defense cruisers, ASW escorts, attack submarines, and mobile support ships.</p>"},
      {id:"names",title:"Names",html:"<p>The four names reused prominent American carrier and naval names. They were distinct from the neutral-war vessels USS Saratoga, USS Ranger, USS Yorktown, and USS Lexington, which had left service before the new class commissioned.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four ships remained active on 1 January 1985. The register does not establish their individual readiness or deployment.</p>"}
    ],
    related:[{href:"american-nuclear-carriers.html",kicker:"Type history",label:"American Nuclear Carriers"},{href:"enterprise-class-carrier.html",kicker:"Earlier class",label:"Enterprise Class"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"american-cruiser-force.html",kicker:"Air-defense screen",label:"American Cruiser Force"}],
    facts:[["Ships","Saratoga; Ranger; Yorktown; Lexington"],["Commissioned","1973; 1976; 1979; 1981"],["Full load","86,000 t"],["Propulsion","Nuclear"],["Standard air group","92 aircraft"],["Status, 1985","All active"]]
  }),

  "wasp-class-assault-carrier": americanNavalArticle({
    title:"Wasp-class assault carrier",
    category:"Warship class",
    landscape:americanFleetLandscape,
    lead:"The Wasp class was a three-ship American helicopter-assault-carrier class comprising USS Wasp, USS Iwo Jima, and USS Guadalcanal. Commissioned between 1968 and 1976, the ships carried standard groups of thirty-two aircraft for helicopter and amphibious assault.",
    canon:"The three names and commissioning years, 30,000-tonne full-load displacement, steam-turbine propulsion, thirty-two-aircraft standard group, helicopter and amphibious-assault role, and active status are established. Dimensions, speed, aircraft mix, troop and vehicle capacity, landing craft, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied a dedicated aviation platform for the postwar amphibious force. It placed helicopters, landing-force command, and supporting aviation on a carrier hull while other ships transported landing craft, vehicles, and heavy stores.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS Wasp</td><td>1968</td><td>Active</td></tr><tr><td>USS Iwo Jima</td><td>1972</td><td>Active</td></tr><tr><td>USS Guadalcanal</td><td>1976</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 30,000 tonnes at full load, used steam-turbine propulsion, and carried a standard air group of thirty-two aircraft. The register does not fix helicopter types, landing capacity, defensive armament, speed, sensors, or complement.</p>"},
      {id:"missions",title:"Missions",html:"<p>Wasp-class ships supported helicopter assault, troop movement, reconnaissance, casualty evacuation, landing control, and air support. They could also carry anti-submarine or utility helicopters when assigned to fleet-support work.</p>"},
      {id:"amphibious",title:"Amphibious group",html:"<p>The class operated with Austin landing-platform docks, Newport tank landing ships, escorts, and Marine units. It provided aviation above a larger amphibious formation rather than carrying every element of the landing force itself.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All three ships remained active. Their actual embarked aircraft and troops varied by mission and are not fixed by the standard-group figure.</p>"}
    ],
    related:[{href:"american-assault-carriers.html",kicker:"Type history",label:"American Assault Carriers"},{href:"america-class-vtol-carrier.html",kicker:"Later class",label:"America Class"},{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"}],
    facts:[["Ships","Wasp; Iwo Jima; Guadalcanal"],["Commissioned","1968; 1972; 1976"],["Full load","30,000 t"],["Propulsion","Steam turbine"],["Standard air group","32 aircraft"],["Role","Helicopter and amphibious assault"]]
  }),

  "america-class-vtol-carrier": americanNavalArticle({
    title:"America-class VTOL carrier",
    category:"Warship class",
    landscape:americanFleetLandscape,
    lead:"The America class was a two-ship American vertical-takeoff and amphibious carrier class comprising USS America and USS Philippine Sea. Commissioned in 1979 and 1981, both ships remained active in 1985 with standard groups of forty aircraft.",
    canon:"The two names and commissioning years, 38,000-tonne full-load displacement, steam-turbine propulsion, forty-aircraft standard group, VTOL fleet-support and amphibious-aviation roles, and active status are established. Dimensions, speed, aircraft mix, troop and vehicle capacity, landing craft, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the helicopter-centered Wasp class and added a stronger vertical-takeoff fleet-aviation role. It entered service late in the 1970s as the largest American assault-carrier design in the 1985 register.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS America</td><td>1979</td><td>Active</td></tr><tr><td>USS Philippine Sea</td><td>1981</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 38,000 tonnes at full load, used steam-turbine propulsion, and carried a standard group of forty aircraft. The exact division among vertical-takeoff aircraft, assault helicopters, anti-submarine helicopters, transports, and utility machines remains open.</p>"},
      {id:"missions",title:"Missions",html:"<p>America-class ships provided VTOL fleet support, local air defense, reconnaissance, strike, amphibious aviation, landing-force command, and evacuation. They could reinforce a fleet carrier group or serve as the principal aviation ship of an amphibious force.</p>"},
      {id:"limits",title:"Operational limits",html:"<p>Vertical-takeoff aviation did not make the class equivalent to a 74,000- to 86,000-tonne fleet carrier. Payload, range, airborne support, magazines, maintenance space, escorts, and replenishment determined the missions it could sustain.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both ships remained active on 1 January 1985. The register does not establish their deployment, readiness, or embarked air-group composition.</p>"}
    ],
    related:[{href:"american-assault-carriers.html",kicker:"Type history",label:"American Assault Carriers"},{href:"wasp-class-assault-carrier.html",kicker:"Earlier class",label:"Wasp Class"},{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"}],
    facts:[["Ships","America; Philippine Sea"],["Commissioned","1979; 1981"],["Full load","38,000 t"],["Propulsion","Steam turbine"],["Standard air group","40 aircraft"],["Roles","VTOL fleet support; amphibious aviation"]]
  })
});
