window.deepArticles = window.deepArticles || {};

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
    lead:"The United States carrier force comprised approximately five or six first-line fleet carriers in 1985, supplemented by light and assault ships. American doctrine classified the carrier as an air cruiser and major assault-drone base within a battleship-centered fleet rather than as the fleet's sole capital arm.",
    canon:"Approximately five or six first-line fleet carriers, the first jet/drone generation around 1958, an enlarged conventional generation around 1969, the mature Enterprise nuclear generation around 1979, light and assault aviation ships, carrier-based assault drones, and Naval Air Corps control are established. Post-Essex class names, hull allocations, exact light and assault totals, air groups, dimensions, weapons, sensors, readiness, and individual histories remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>The United States completed twelve fleet/light carriers by the 1947 armistice, nine of them operational. Five Essex-class carriers had completed. This was a substantial neutral-war force, but smaller than the historical emergency carrier program that followed American entry into the war.</p><p>Postwar planners treated Japanese carrier strength as a permanent strategic fact. The absence of Pearl Harbor preserved battleship prestige, so aviation entered a balanced fleet rather than replacing the battle line as its capital arm.</p>"},
      {id:"doctrine",title:"Carrier doctrine",html:"<p>The Navy classified carriers as air cruisers: their aircraft and drones were the battery, and they supplied long-range air defense, attack, reconnaissance, command, and crisis presence. Battleships remained the capital category and armored body of the fleet.</p>"},
      {id:"lineage",title:"Carrier generations",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-j5p7d writer=g kind=revision created=2026-08-15T13:08:00-06:00 --><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Generation</th><th>First major commission</th><th>Established character</th></tr></thead><tbody><tr><td>First jet/drone fleet carrier</td><td>c. 1958</td><td>Conventional carrier for fighters, manned strike aircraft, and a large assault-drone establishment</td></tr><tr><td>Enlarged conventional jet/drone carrier</td><td>c. 1969</td><td>Greater control bandwidth, packed-drone volume, and fleet air defense</td></tr><tr><td>Enterprise nuclear generation</td><td>c. 1979</td><td>First mature nuclear American carrier generation</td></tr></tbody></table></div><!-- altwwii-writer-block:end -->"},
      {id:"fleet-carriers",title:"Fleet carriers",html:"<p>Approximately five or six first-line fleet carriers served in 1985. Exact post-Essex class names and hull allocations remain open. Their principal investments were air defense, control spaces, and folded assault drones rather than the prestige of the largest possible carrier hull.</p>"},
      {id:"assault-carriers",title:"Light and assault carriers",html:"<p>Light and assault aviation ships supported helicopter assault, vertical-takeoff aviation, amphibious operations, and secondary fleet work. Their exact class names and 1985 hull totals remain open.</p>"},
      {id:"aviation",title:"Naval Air Corps",html:"<p>The Naval Air Corps controlled carrier and maritime aviation. The Army Air Corps retained battlefield aviation, while the independent Aerospace Force controlled strategic bombing, interception, missiles, military space, and orbital vehicles. Carrier aircraft therefore belonged to a naval command system even when supporting operations ashore.</p>"},
      {id:"support",title:"Escorts and logistics",html:"<p>Carrier endurance was a property of the whole task group. Cruisers supplied air-defense command; destroyers and frigates supplied missile and anti-submarine screens; SSNs operated in advance or as submerged escorts. Ammunition, aviation fuel, food, spares, aircraft maintenance, escort fuel, and replacement personnel tied every carrier to replenishment and repair forces.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Refit, reactor or machinery maintenance, flight-deck work, aircraft and drone availability, escort strength, and crew training determined how many carriers could deploy together. The approximate first-line total does not establish simultaneous readiness.</p>"}
    ],
    related:[{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"},{href:"american-cruiser-force.html",kicker:"Air-defense screen",label:"American Cruiser Force"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["First-line fleet carriers, 1985","Approximately 5 or 6"],["Institutional classification","Air cruiser"],["First jet/drone generation","c. 1958"],["Enlarged conventional generation","c. 1969"],["Mature nuclear generation","c. 1979"],["Light and assault totals","Open"],["Principal aviation service","Naval Air Corps"]]
  }),

  "united-states-class-carrier": americanNavalArticle({
    title:"United States-class aircraft carrier",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The United States class was part of a former postwar carrier reconstruction that assigned three named steam carriers to the first American jet-carrier generation. The later naval register withdraws that class identity and hull allocation while retaining a first jet/drone fleet-carrier generation around 1958.",
    canon:"A conventional first jet/drone fleet-carrier generation around 1958, built for fighters, manned strike aircraft, and a large assault-drone establishment, is established. The United States class name, three-ship roster, commissioning sequence, displacement, air group, 1985 status, and individual histories are open pending reconstruction.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-q6m2h writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The three-ship United States-class roster, its named hulls, specifications, and active status are withdrawn. Post-Essex class names and hull allocations remain open.</p><!-- altwwii-writer-block:end -->"},
      {id:"generation",title:"Established generation",html:"<p>The first jet/drone fleet carrier entered the postwar sequence around 1958. It was a conventional carrier built around fighters, manned strike aircraft, and a large assault-drone establishment.</p>"},
      {id:"open",title:"Open details",html:"<p>Class name, ship names, hull count, commissioning dates, dimensions, propulsion details, air group, weapons, sensors, builders, service history, and 1985 allocation require reconstruction.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"american-nuclear-carriers.html",kicker:"Nuclear generation",label:"American Nuclear Carriers"},{href:"american-cruiser-force.html",kicker:"Escort system",label:"American Cruiser Force"}],
    facts:[["Former identity","United States class"],["Current status","Withdrawn class reconstruction"],["Established generation","First jet/drone fleet carrier"],["First major commission","c. 1958"],["Established propulsion","Conventional"],["Class name and hull allocation","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/United_States-class_aircraft_carrier",label:"Wikipedia — pre-divergence United States-class design history"}]
  }),

  "american-nuclear-carriers": americanNavalArticle({
    title:"American nuclear fleet carriers",
    category:"Naval aviation",
    landscape:americanLineageLandscape,
    lead:"American surface nuclear propulsion reached a mature carrier generation around 1979 after earlier submarine and cruiser work. The former two-class, six-ship Enterprise and Saratoga roster is withdrawn; exact nuclear-carrier class names, hull totals, and 1985 allocation remain open.",
    canon:"Cheap domestic oil delayed American surface nuclear propulsion; submarines received reactors first, USS Chicago proved a surface plant, and a mature Enterprise nuclear carrier generation appeared around 1979. Exact carrier class names, hull totals, air groups, dimensions, reactors, weapons, readiness, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Cheap domestic oil delayed American surface nuclear propulsion. Submarines received reactors when submerged endurance justified them, and USS Chicago proved the surface plant before a mature carrier generation appeared around 1979.</p>"},
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-r8t4d writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The former Enterprise/Franklin and Saratoga/Ranger/Yorktown/Lexington allocation, its six-ship total, displacements, air groups, and commissioning sequence are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"generation",title:"Enterprise nuclear generation",html:"<p>The first mature nuclear American carrier generation entered the sequence around 1979. It remained institutionally an air cruiser within the battleship-centered fleet.</p>"},
      {id:"roles",title:"Roles",html:"<p>The ships provided fleet air defense, long-range maritime and land strike, reconnaissance, command, and crisis presence. Their speed and endurance also made nuclear cruiser and SSN escorts valuable parts of the task group.</p>"},
      {id:"support",title:"Nuclear support system",html:"<p>Reactor operation required specialized personnel, dockyard facilities, radiological controls, and lengthy overhaul work. The propulsion plant extended ship endurance; it did not make the carrier group independent of ports, tenders, oilers, ammunition ships, or aviation supply.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Nuclear carriers formed part of the approximately five or six first-line fleet-carrier force. Their exact share, class names, and hull allocation remain open.</p>"}
    ],
    related:[{href:"enterprise-class-carrier.html",kicker:"Fixed generation",label:"Enterprise Nuclear Generation"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}],
    facts:[["Established generation","Enterprise nuclear generation"],["First major commission","c. 1979"],["Propulsion","Nuclear"],["Former six-ship roster","Withdrawn"],["Exact class and hull total","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/USS_Enterprise_(CVN-65)",label:"Wikipedia — historical nuclear-carrier design context"}]
  }),

  "american-assault-carriers": americanNavalArticle({
    title:"American assault-carrier force",
    category:"Amphibious aviation",
    landscape:americanFleetLandscape,
    lead:"American light and assault carriers linked naval aviation to Marine, amphibious, helicopter, and vertical-takeoff operations. The former three-ship Wasp and two-ship America allocation is withdrawn; exact class names, hull totals, and 1985 strength remain open.",
    canon:"Light and assault aviation ships, helicopter assault, landing-platform-dock and fast tank-landing functions, vertical-takeoff fleet support, and amphibious aviation are established. The former Wasp and America class identities, five-ship total, specifications, air groups, and individual histories are open pending reconstruction.",
    sections:[
      {id:"development",title:"Development",html:"<p>The assault-carrier branch joined aviation to Marine lift and landing operations. It used smaller, mission-variable aviation ships alongside landing-platform docks, tank landing ships, escorts, and embarked forces.</p>"},
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-s5k9n writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The former Wasp/Iwo Jima/Guadalcanal and America/Philippine Sea roster, its five-ship total, specifications, and air-group figures are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"branches",title:"Established functions",html:"<p>Helicopter assault, vertical-takeoff fleet support, amphibious aviation, landing-platform-dock, and fast tank-landing functions remained part of the postwar Navy. Their alternate class registry has not been reconstructed.</p>"},
      {id:"missions",title:"Missions",html:"<p>Assault carriers provided helicopter transport, local air defense, reconnaissance, strike, landing-force command, evacuation, and support to larger fleet formations. Their exact aircraft mix could be adjusted between vertical-takeoff aircraft, assault helicopters, anti-submarine helicopters, transports, and utility machines.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Exact class names, hull totals, ship names, propulsion, air groups, troop and vehicle capacity, readiness, deployments, and individual histories remain open.</p>"}
    ],
    related:[{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Carrier system",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"}],
    facts:[["Established branches","Light and assault carriers"],["Established roles","Helicopter · VTOL · amphibious aviation"],["Former Wasp/America roster","Withdrawn"],["Exact class and hull totals","Open"]]
  }),

  "enterprise-class-carrier": americanNavalArticle({
    title:"Enterprise nuclear carrier generation",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Enterprise nuclear carrier generation was the first mature American nuclear fleet-carrier generation, entering the postwar sequence around 1979. The former two-ship Enterprise and Franklin class allocation is withdrawn; the generation's exact class identity and hull total remain open.",
    canon:"The Enterprise nuclear generation around 1979, nuclear propulsion, air-cruiser classification, assault-drone establishment, and fleet air-defense and strike roles are established. The Enterprise class name as a fixed two-ship class, Franklin allocation, 1965–1970 band, displacement, air group, 1985 status, and individual histories remain open.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-t2p7v writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The former Enterprise/Franklin roster, 1965–1970 commissioning band, 80,000-tonne displacement, eighty-eight-aircraft group, and two active 1985 hulls are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"development",title:"Development",html:"<p>Cheap domestic oil delayed American surface nuclear propulsion. Submarine reactors and USS Chicago's experimental surface plant preceded the first mature nuclear carrier generation around 1979.</p>"},
      {id:"role",title:"Role",html:"<p>The generation supplied fleet air defense, manned and drone attack, reconnaissance, and command. Nuclear propulsion reduced ship-fuel demand but did not remove aviation fuel, weapons, food, spares, escort fuel, or dockyard requirements.</p>"},
      {id:"status",title:"Open details",html:"<p>Formal class name, ship names, hull total, commissioning dates, displacement, reactor arrangement, air group, weapons, sensors, builders, readiness, deployments, and individual histories remain open.</p>"}
    ],
    related:[{href:"american-nuclear-carriers.html",kicker:"Type history",label:"American Nuclear Carriers"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}],
    facts:[["Generation","Enterprise nuclear"],["First major commission","c. 1979"],["Propulsion","Nuclear"],["Institutional classification","Air cruiser"],["Former two-ship class","Withdrawn"],["Exact class and hull total","Open"]]
  }),

  "saratoga-class-carrier": americanNavalArticle({
    title:"Saratoga-class aircraft carrier",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Saratoga class was a former four-ship nuclear-carrier reconstruction. The later naval register withdraws that identity and instead fixes an enlarged conventional jet/drone carrier generation around 1969 before the mature Enterprise nuclear generation.",
    canon:"An enlarged conventional jet/drone carrier generation around 1969, with greater control bandwidth, packed-drone volume, and fleet air defense, is established. The Saratoga class name, four named ships, nuclear propulsion, 1973–1981 commissioning sequence, displacement, air group, active status, and individual histories remain open.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-v4m8c writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The four-ship Saratoga/Ranger/Yorktown/Lexington roster, its nuclear propulsion, specifications, commissioning sequence, and active 1985 status are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"generation",title:"Established generation",html:"<p>An enlarged conventional jet/drone carrier entered the sequence around 1969. It increased control bandwidth, packed-drone volume, and fleet air-defense capacity.</p>"},
      {id:"status",title:"Open details",html:"<p>Formal class name, ship names, hull total, exact commissioning dates, displacement, propulsion arrangement, air group, weapons, sensors, builders, readiness, deployments, and individual histories remain open.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"enterprise-class-carrier.html",kicker:"Later nuclear generation",label:"Enterprise Nuclear Generation"},{href:"american-cruiser-force.html",kicker:"Air-defense screen",label:"American Cruiser Force"}],
    facts:[["Former identity","Saratoga class"],["Current status","Withdrawn class reconstruction"],["Established generation","Enlarged conventional jet/drone carrier"],["First major commission","c. 1969"],["Exact class and hull total","Open"]]
  }),

  "wasp-class-assault-carrier": americanNavalArticle({
    title:"Wasp-class assault carrier",
    category:"Warship class",
    landscape:americanFleetLandscape,
    lead:"The Wasp class was a former three-ship helicopter-assault-carrier reconstruction. Helicopter assault and amphibious aviation remain established American functions, but the class name, roster, specifications, and 1985 allocation are open.",
    canon:"A postwar helicopter-assault aviation branch and its integration with landing-platform docks, tank-landing ships, escorts, and Marine forces are established. The Wasp class identity, three named ships, 1968–1976 commissioning sequence, displacement, propulsion, air group, active status, and individual histories are open.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-w7q3h writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The Wasp/Iwo Jima/Guadalcanal roster, its three-ship total, specifications, air group, and active 1985 status are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"development",title:"Established function",html:"<p>Dedicated aviation ships placed helicopters, landing-force command, and supporting aviation above amphibious formations whose other ships carried landing craft, vehicles, and heavy stores.</p>"},
      {id:"missions",title:"Missions",html:"<p>Wasp-class ships supported helicopter assault, troop movement, reconnaissance, casualty evacuation, landing control, and air support. They could also carry anti-submarine or utility helicopters when assigned to fleet-support work.</p>"},
      {id:"amphibious",title:"Amphibious group",html:"<p>Helicopter-assault carriers operated with landing-platform docks, fast tank-landing ships, escorts, and Marine units. Exact class names and production totals remain open.</p>"},
      {id:"status",title:"Open details",html:"<p>Class name, ships, hull total, commissioning dates, displacement, propulsion, aircraft group, landing capacity, weapons, sensors, readiness, deployments, and individual histories remain open.</p>"}
    ],
    related:[{href:"american-assault-carriers.html",kicker:"Type history",label:"American Assault Carriers"},{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"}],
    facts:[["Former identity","Wasp class"],["Current status","Withdrawn class reconstruction"],["Established role","Helicopter and amphibious assault"],["Exact class and hull total","Open"]]
  }),

  "america-class-vtol-carrier": americanNavalArticle({
    title:"America-class VTOL carrier",
    category:"Warship class",
    landscape:americanFleetLandscape,
    lead:"The America class was a former two-ship vertical-takeoff and amphibious-carrier reconstruction. VTOL fleet support and amphibious aviation remain established functions, but the class identity, roster, specifications, and 1985 allocation are open.",
    canon:"Vertical-takeoff fleet support, amphibious aviation, local air defense, reconnaissance, strike, landing-force command, and evacuation are established carrier functions. The America class identity, two named ships, 1979/1981 commissioning dates, displacement, propulsion, air group, active status, and individual histories are open.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-x9n5r writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The America/Philippine Sea roster, its two-ship total, specifications, air group, commissioning dates, and active 1985 status are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"development",title:"Established function",html:"<p>Vertical-takeoff aviation supplied fleet support, local air defense, reconnaissance, strike, amphibious aviation, landing-force command, and evacuation from smaller aviation ships.</p>"},
      {id:"missions",title:"Missions",html:"<p>America-class ships provided VTOL fleet support, local air defense, reconnaissance, strike, amphibious aviation, landing-force command, and evacuation. They could reinforce a fleet carrier group or serve as the principal aviation ship of an amphibious force.</p>"},
      {id:"limits",title:"Operational limits",html:"<p>Payload, range, airborne support, magazines, maintenance space, escorts, and replenishment constrained vertical-takeoff operations from light or assault carriers.</p>"},
      {id:"status",title:"Open details",html:"<p>Class name, ships, hull total, commissioning dates, displacement, propulsion, aircraft group, landing capacity, weapons, sensors, readiness, deployments, and individual histories remain open.</p>"}
    ],
    related:[{href:"american-assault-carriers.html",kicker:"Type history",label:"American Assault Carriers"},{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"}],
    facts:[["Former identity","America class"],["Current status","Withdrawn class reconstruction"],["Established roles","VTOL fleet support · amphibious aviation"],["Exact class and hull total","Open"]]
  })
});
