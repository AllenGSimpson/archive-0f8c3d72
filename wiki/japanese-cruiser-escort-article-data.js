window.deepArticles = window.deepArticles || {};

const japaneseCruiserClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Registered role</th></tr></thead><tbody><tr><td><a href='ibuki-class-cruiser.html'>Ibuki</a></td><td>2</td><td>1954–1957</td><td>13,000 t</td><td>2</td><td>Aviation missile cruiser</td></tr><tr><td><a href='takao-ii-class-cruiser.html'>Takao II</a></td><td>4</td><td>1960–1967</td><td>14,000 t</td><td>4</td><td>Carrier-group air defense and surface strike</td></tr><tr><td><a href='maya-class-cruiser.html'>Maya</a></td><td>4</td><td>1974–1982</td><td>16,500 t</td><td>4</td><td>Fleet command; eighty missile cells; two helicopters</td></tr></tbody></table></div>";

const japaneseEscortClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Registered role</th></tr></thead><tbody><tr><td><a href='asakaze-class-destroyer.html'>Asakaze</a></td><td>12</td><td>1954–1961</td><td>4,200 t</td><td>12</td><td>First postwar missile destroyer</td></tr><tr><td><a href='amatsukaze-class-destroyer.html'>Amatsukaze</a></td><td>14</td><td>1962–1970</td><td>5,400 t</td><td>14</td><td>Area defense and carrier escort</td></tr><tr><td><a href='hatsuyuki-class-destroyer.html'>Hatsuyuki</a></td><td>12</td><td>1974–1982</td><td>6,200 t</td><td>12</td><td>Networked multipurpose destroyer</td></tr><tr><td><a href='isuzu-class-escort.html'>Isuzu</a></td><td>14</td><td>1952–1960</td><td>2,400 t</td><td>14</td><td>General escort</td></tr><tr><td><a href='chikugo-class-escort.html'>Chikugo</a></td><td>18</td><td>1961–1970</td><td>3,100 t</td><td>18</td><td>ASW and imperial-route escort</td></tr><tr><td><a href='yubari-class-frigate.html'>Yūbari</a></td><td>14</td><td>1972–1981</td><td>4,000 t</td><td>14</td><td>Missile frigate with helicopter</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "japanese-cruiser-force": japaneseNavalArticle({
    title:"Japanese postwar cruiser force",
    category:"Warship development",
    landscape:lineageLandscape,
    lead:"Japan's postwar cruiser force comprised two Ibuki aviation missile cruisers, four Takao II missile cruisers, and four Maya command cruisers. All ten ships remained active in 1985. They supplied command spaces, large radar installations, missile batteries, and helicopter aviation to carrier groups and independent formations.",
    canon:"The three classes, construction and active totals, introduction bands, full-load displacements, registered roles, and Maya's eighty missile cells and two helicopters are established. Individual ship names, hull numbers, propulsion, dimensions, exact weapons and sensors, yards, deployments, losses, and refit histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The cruiser line developed through three postwar generations. The first combined missile and helicopter functions in a 13,000-tonne hull. The second concentrated on carrier-group air defense and surface strike. The third enlarged the command and missile capacity available to fleet commanders.</p>"},
      {id:"classes",title:"Classes",html:japaneseCruiserClassTable},
      {id:"ibuki",title:"Ibuki class",html:"<p>Two <a href='ibuki-class-cruiser.html'>Ibuki-class aviation missile cruisers</a> entered service between 1954 and 1957. Each displaced 13,000 tonnes at full load. Their registered functions were command, missile employment, and helicopter aviation.</p>"},
      {id:"takao",title:"Takao II class",html:"<p>Four <a href='takao-ii-class-cruiser.html'>Takao II-class missile cruisers</a> entered service from 1960 through 1967. Each displaced 14,000 tonnes at full load and served in carrier-group air defense and surface strike.</p>"},
      {id:"maya",title:"Maya class",html:"<p>Four <a href='maya-class-cruiser.html'>Maya-class command cruisers</a> entered service between 1974 and 1982. Each displaced 16,500 tonnes at full load and carried eighty missile cells, fleet-command facilities, and two helicopters.</p>"},
      {id:"employment",title:"Fleet employment",html:"<p>Cruisers provided command capacity and heavier sensor and missile installations than the destroyer screen. Carrier groups were their principal context, but the ships could also lead surface, amphibious, route-defense, and detached formations. The source register does not fix task-group composition.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All ten registered cruisers remained active. The force contained two 1950s ships, four 1960s ships, and four 1970s–1980s ships; active status does not establish immediate readiness, deployment, or modernization condition.</p>"}
    ],
    related:[{href:"ibuki-class-cruiser.html",kicker:"First generation",label:"Ibuki Class"},{href:"takao-ii-class-cruiser.html",kicker:"Missile cruiser",label:"Takao II Class"},{href:"maya-class-cruiser.html",kicker:"Command cruiser",label:"Maya Class"},{href:"japanese-surface-escorts.html",kicker:"Protective screen",label:"Japanese Surface Escorts"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Active cruisers, 1985","10"],["Ibuki class","2"],["Takao II class","4"],["Maya class","4"],["Introduction span","1954–1982"],["Largest class","Maya, 16,500 t"]]
  }),

  "ibuki-class-cruiser": japaneseNavalArticle({
    title:"Ibuki-class aviation missile cruiser",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · aviation missile cruiser · 1954–",
    landscape:lineageLandscape,
    lead:"The Ibuki class was a two-ship Japanese aviation missile-cruiser class introduced between 1954 and 1957. Both 13,000-tonne ships remained active in 1985 and combined task-group command, missile employment, and helicopter aviation.",
    canon:"Two ships built and active, the 1954–1957 introduction band, 13,000-tonne full-load displacement, aviation missile-cruiser classification, and command, missile, and helicopter roles are established. Names, hull numbers, dimensions, propulsion, speed, weapons, sensors, helicopter complement, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Ibuki was the first registered postwar Japanese cruiser generation. It entered service while the navy was converting its surviving wartime carrier institution into a missile-age fleet and required ships able to coordinate formations beyond the capacity of destroyer flag facilities.</p>"},
      {id:"production",title:"Production",html:"<p>Two ships entered service between 1954 and 1957. Both remained active on 1 January 1985. The class roster and individual commissioning dates have not been settled.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 13,000 tonnes at full load. The classification records command spaces, missile employment, and helicopter aviation. The reference does not establish dimensions, machinery, speed, armor, gun or missile batteries, sensors, aircraft facilities, or complement.</p>"},
      {id:"command",title:"Command service",html:"<p>Ibuki ships could provide a command platform for carrier, surface, amphibious, and route-defense formations. Staff spaces, communications, and plotting functions were part of the class role even when a carrier was present.</p>"},
      {id:"aviation",title:"Helicopter aviation",html:"<p>Shipborne helicopters extended observation, liaison, rescue, and anti-submarine support. The number and types embarked in any period remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both ships were active after nearly three decades of service. The source register does not specify their modernization state, deployments, material condition, or planned retirement.</p>"}
    ],
    related:[{href:"japanese-cruiser-force.html",kicker:"Force history",label:"Japanese Cruiser Force"},{href:"takao-ii-class-cruiser.html",kicker:"Successor generation",label:"Takao II Class"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Escort screen",label:"Japanese Surface Escorts"}],
    facts:[["Type","Aviation missile cruiser"],["Built and active","2"],["Introduced","1954–1957"],["Full load","13,000 t"],["Roles","Command, missiles, helicopter aviation"]]
  }),

  "takao-ii-class-cruiser": japaneseNavalArticle({
    title:"Takao II-class missile cruiser",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · missile cruiser · 1960–",
    landscape:lineageLandscape,
    lead:"The Takao II class was a four-ship Japanese missile-cruiser class introduced between 1960 and 1967. All four 14,000-tonne ships remained active in 1985 for carrier-group air defense and surface strike.",
    canon:"Four ships built and active, the 1960–1967 introduction band, 14,000-tonne full-load displacement, missile-cruiser classification, and carrier-group air-defense and surface-strike roles are established. Names, hull numbers, dimensions, propulsion, weapons, sensors, aviation, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Takao II followed the two Ibuki aviation missile cruisers and accompanied the Amagi fleet-carrier and Amatsukaze destroyer generations. It supplied a larger missile cruiser to formations operating across Japan's Pacific and southern maritime system.</p>"},
      {id:"production",title:"Production",html:"<p>Four ships entered service from 1960 through 1967. All four remained active in 1985. Individual names and commissioning dates are not registered.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 14,000 tonnes at full load. The class was designed for carrier-group air defense and surface strike. The register does not settle propulsion, dimensions, speed, missile capacity, guns, sensors, helicopter facilities, or crew.</p>"},
      {id:"air-defense",title:"Air defense",html:"<p>Takao II ships reinforced the air-defense layer around carriers and other high-value formations. Their performance depended upon warning from ship, aircraft, island, and satellite sensors and upon the quality of the shared tactical picture.</p>"},
      {id:"surface",title:"Surface strike",html:"<p>The class could contribute missile fire against surface formations. Long-range engagements required external reconnaissance and targeting from naval aircraft, submarines, stations, or other ships.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four ships remained active alongside the older Ibuki class and newer Maya command cruisers. Readiness, refit condition, and assignment are not fixed.</p>"}
    ],
    related:[{href:"japanese-cruiser-force.html",kicker:"Force history",label:"Japanese Cruiser Force"},{href:"ibuki-class-cruiser.html",kicker:"Earlier cruiser",label:"Ibuki Class"},{href:"maya-class-cruiser.html",kicker:"Later cruiser",label:"Maya Class"},{href:"amatsukaze-class-destroyer.html",kicker:"Contemporary escort",label:"Amatsukaze Class"}],
    facts:[["Type","Missile cruiser"],["Built and active","4"],["Introduced","1960–1967"],["Full load","14,000 t"],["Roles","Carrier-group air defense and surface strike"]]
  }),

  "maya-class-cruiser": japaneseNavalArticle({
    title:"Maya-class command cruiser",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · command cruiser · 1974–",
    landscape:lineageLandscape,
    lead:"The Maya class was a four-ship Japanese command-cruiser class introduced between 1974 and 1982. Each 16,500-tonne ship carried eighty missile cells, fleet-command facilities, and two helicopters. All four remained active in 1985.",
    canon:"Four ships built and active, the 1974–1982 introduction band, 16,500-tonne full-load displacement, eighty missile cells, fleet-command role, and two-helicopter complement are established. Names, hull numbers, dimensions, propulsion, missile types and allocation, other weapons, sensors, helicopter types, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Maya followed the Ibuki and Takao II classes and entered service during the shift toward networked fleet operations. The class provided the largest registered Japanese cruiser hull and concentrated command, missile, and aviation functions in one platform.</p>"},
      {id:"production",title:"Production",html:"<p>Four ships entered service between 1974 and 1982. All remained active in 1985. The reference leaves names, hull numbers, individual commissioning dates, and builders open.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 16,500 tonnes at full load, carried eighty missile cells, and embarked two helicopters. Missile types, magazine allocation, reload arrangements, other armament, propulsion, speed, sensors, and complement are not fixed.</p>"},
      {id:"command",title:"Fleet command",html:"<p>Maya ships housed the staffs and communications required to direct carrier groups and other major formations. They combined reports from aircraft, satellites, submarines, islands, escorts, and other ships into a fleet picture.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Two helicopters supported reconnaissance, liaison, rescue, and anti-submarine work. The register does not specify whether both aircraft were carried continuously or which missions received priority.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four ships were active, including hulls commissioned only a few years before the reference date. Their individual deployments and readiness remain open.</p>"}
    ],
    related:[{href:"japanese-cruiser-force.html",kicker:"Force history",label:"Japanese Cruiser Force"},{href:"takao-ii-class-cruiser.html",kicker:"Preceding cruiser",label:"Takao II Class"},{href:"hatsuyuki-class-destroyer.html",kicker:"Networked escort",label:"Hatsuyuki Class"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Type","Command cruiser"],["Built and active","4"],["Introduced","1974–1982"],["Full load","16,500 t"],["Missile cells","80"],["Helicopters","2"],["Role","Fleet command"]]
  }),

  "japanese-surface-escorts": japaneseNavalArticle({
    title:"Japanese postwar surface escorts",
    category:"Warship development",
    landscape:lineageLandscape,
    lead:"Japanese postwar surface escorts were the destroyers, escorts, and frigates that protected carriers, replenishment groups, amphibious forces, imperial routes, and island bases. The registered force contained three destroyer classes and three escort or frigate classes; all thirty-eight destroyers and forty-six larger escorts remained active in 1985.",
    canon:"The six classes, build and active totals, introduction bands, full-load displacements, registered roles, thirty-eight-destroyer and forty-six-escort totals, and forty-two smaller missile combatants are established. Individual ship rosters, hull numbers, propulsion, dimensions, detailed weapons and sensors, aircraft, yards, deployments, and refit histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The destroyer line progressed from the first postwar missile destroyer through an area-defense carrier escort to a networked multipurpose design. The smaller line progressed from a general escort through a specialized anti-submarine route escort to a helicopter-equipped missile frigate.</p>"},
      {id:"classes",title:"Classes",html:japaneseEscortClassTable},
      {id:"destroyers",title:"Destroyers",html:"<p>Twelve <a href='asakaze-class-destroyer.html'>Asakaze-class</a>, fourteen <a href='amatsukaze-class-destroyer.html'>Amatsukaze-class</a>, and twelve <a href='hatsuyuki-class-destroyer.html'>Hatsuyuki-class</a> ships supplied thirty-eight active destroyers. Their registered duties emphasized missile escort, area defense, and multipurpose networked operations.</p>"},
      {id:"frigates",title:"Escorts and frigates",html:"<p>Fourteen <a href='isuzu-class-escort.html'>Isuzu-class</a>, eighteen <a href='chikugo-class-escort.html'>Chikugo-class</a>, and fourteen <a href='yubari-class-frigate.html'>Yūbari-class</a> ships supplied forty-six active escorts and frigates. General escort, anti-submarine warfare, route defense, missiles, and helicopter support divided the work.</p>"},
      {id:"employment",title:"Fleet employment",html:"<p>Destroyers normally supplied the heavier air-defense and surface layer around major formations. Escorts and frigates carried much of the routine anti-submarine and shipping-protection burden. Actual formation composition depended upon threat, distance, maintenance, and aircraft availability.</p>"},
      {id:"routes",title:"Imperial routes",html:"<p>The escort force covered approaches to the home islands and the routes linking Chōsen, Formosa, the South Seas, Southeast Asia, associated states, and commercial concessions. No force could provide continuous protection across the entire system.</p>"},
      {id:"smaller",title:"Smaller combatants",html:"<p>Forty-two corvettes and fast missile combatants supplemented the six registered ocean-going classes in patrol, local ambush, island defense, and coastal service. Their class breakdown is not settled.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eighty-four destroyers, escorts, and frigates in the six class lines remained active. Active totals do not indicate how many ships were deployed, training, under repair, or immediately ready.</p>"}
    ],
    related:[{href:"asakaze-class-destroyer.html",kicker:"First missile destroyer",label:"Asakaze Class"},{href:"amatsukaze-class-destroyer.html",kicker:"Area-defense escort",label:"Amatsukaze Class"},{href:"hatsuyuki-class-destroyer.html",kicker:"Networked destroyer",label:"Hatsuyuki Class"},{href:"isuzu-class-escort.html",kicker:"General escort",label:"Isuzu Class"},{href:"chikugo-class-escort.html",kicker:"Route ASW",label:"Chikugo Class"},{href:"yubari-class-frigate.html",kicker:"Helicopter frigate",label:"Yūbari Class"}],
    facts:[["Destroyers active, 1985","38"],["Escorts and frigates active, 1985","46"],["Ocean-going classes","6"],["Smaller missile combatants","42"],["Introduction span","1952–1982"]]
  }),

  "asakaze-class-destroyer": japaneseNavalArticle({
    title:"Asakaze-class destroyer",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · missile destroyer · 1954–",
    landscape:lineageLandscape,
    lead:"The Asakaze class was a twelve-ship Japanese destroyer class introduced between 1954 and 1961. All twelve 4,200-tonne ships remained active in 1985 and were registered as Japan's first postwar missile destroyers.",
    canon:"Twelve ships built and active, the 1954–1961 introduction band, 4,200-tonne full-load displacement, destroyer classification, and first-postwar-missile-destroyer role are established. Names, hull numbers, dimensions, propulsion, weapons, sensors, aviation, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Asakaze supplied the first postwar missile-destroyer generation to a navy that retained wartime carriers, escorts, yards, and trained personnel. The class entered service alongside the Ibuki cruiser generation.</p>"},
      {id:"production",title:"Production",html:"<p>Twelve ships entered service from 1954 through 1961. All remained active in 1985. Individual names, yards, and commissioning dates are not registered.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 4,200 tonnes at full load. The register identifies a missile-destroyer role but does not specify propulsion, speed, missile systems, guns, anti-submarine weapons, sensors, aircraft, or complement.</p>"},
      {id:"service",title:"Service",html:"<p>Asakaze ships escorted carriers, cruisers, replenishment groups, and amphibious formations and performed independent patrol and route-defense duties. Their exact deployments are open.</p>"},
      {id:"succession",title:"Later classes",html:"<p>The larger Amatsukaze class added a registered area-defense and carrier-escort emphasis. Hatsuyuki later became the networked multipurpose destroyer generation.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twelve ships remained active after between twenty-four and thirty-one years of service. Modernization, readiness, and retirement plans are not settled.</p>"}
    ],
    related:[{href:"japanese-surface-escorts.html",kicker:"Force history",label:"Japanese Surface Escorts"},{href:"amatsukaze-class-destroyer.html",kicker:"Successor",label:"Amatsukaze Class"},{href:"ibuki-class-cruiser.html",kicker:"Contemporary cruiser",label:"Ibuki Class"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Type","Missile destroyer"],["Built and active","12"],["Introduced","1954–1961"],["Full load","4,200 t"],["Role","First postwar missile destroyer"]]
  }),

  "amatsukaze-class-destroyer": japaneseNavalArticle({
    title:"Amatsukaze-class destroyer",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · area-defense destroyer · 1962–",
    landscape:lineageLandscape,
    lead:"The Amatsukaze class was a fourteen-ship Japanese destroyer class introduced between 1962 and 1970. All fourteen 5,400-tonne ships remained active in 1985 for area defense and carrier escort.",
    canon:"Fourteen ships built and active, the 1962–1970 introduction band, 5,400-tonne full-load displacement, destroyer classification, and area-defense and carrier-escort roles are established. Names, hull numbers, dimensions, propulsion, weapons, sensors, aviation, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Amatsukaze followed the Asakaze missile destroyer and entered service with the Amagi carrier and Takao II cruiser generations. Its registered purpose emphasized protection of major formations against air attack.</p>"},
      {id:"production",title:"Production",html:"<p>Fourteen ships entered service between 1962 and 1970. All remained active at the 1985 reference date. The class roster is not fixed.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 5,400 tonnes at full load. The reference fixes the area-defense and carrier-escort roles but leaves propulsion, dimensions, speed, weapons, sensors, aviation facilities, and complement open.</p>"},
      {id:"air-defense",title:"Area defense",html:"<p>The class reinforced carrier air defense and protected cruisers, amphibious groups, and replenishment ships. Engagements depended upon reports from airborne warning, ship radar, island stations, and other elements of the Japanese information system.</p>"},
      {id:"other-service",title:"Other service",html:"<p>Carrier escort did not exclude surface, anti-submarine, route-defense, or presence missions. The source register does not establish exact mission equipment or task-group assignments.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All fourteen ships remained active beside the older Asakaze and newer Hatsuyuki classes. Individual readiness and modernization remain open.</p>"}
    ],
    related:[{href:"japanese-surface-escorts.html",kicker:"Force history",label:"Japanese Surface Escorts"},{href:"asakaze-class-destroyer.html",kicker:"Earlier destroyer",label:"Asakaze Class"},{href:"hatsuyuki-class-destroyer.html",kicker:"Later destroyer",label:"Hatsuyuki Class"},{href:"takao-ii-class-cruiser.html",kicker:"Contemporary cruiser",label:"Takao II Class"}],
    facts:[["Type","Area-defense destroyer"],["Built and active","14"],["Introduced","1962–1970"],["Full load","5,400 t"],["Roles","Area defense and carrier escort"]]
  }),

  "hatsuyuki-class-destroyer": japaneseNavalArticle({
    title:"Hatsuyuki-class destroyer",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · multipurpose destroyer · 1974–",
    landscape:lineageLandscape,
    lead:"The Hatsuyuki class was a twelve-ship Japanese destroyer class introduced between 1974 and 1982. All twelve 6,200-tonne ships remained active in 1985 as the fleet's networked multipurpose destroyer generation.",
    canon:"Twelve ships built and active, the 1974–1982 introduction band, 6,200-tonne full-load displacement, destroyer classification, and networked multipurpose role are established. Names, hull numbers, dimensions, propulsion, network architecture, weapons, sensors, aviation, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Hatsuyuki followed the Asakaze and Amatsukaze classes and entered service during Japan's wider adoption of satellite reporting, distributed computing, and data-linked maritime operations.</p>"},
      {id:"production",title:"Production",html:"<p>Twelve ships entered service from 1974 through 1982. All remained active in 1985. Individual names and construction dates are not registered.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 6,200 tonnes at full load. The phrase networked multipurpose destroyer describes its registered role. Propulsion, dimensions, speed, weapon and sensor fits, aircraft, crew, and the technical details of its networks remain open.</p>"},
      {id:"network",title:"Networked operations",html:"<p>The class exchanged reports with carriers, cruisers, aircraft, submarines, satellites, and island facilities. Network participation improved coordination but still depended upon communications availability, data quality, and command procedures.</p>"},
      {id:"missions",title:"Missions",html:"<p>Multipurpose service included formation air defense, surface warfare, anti-submarine work, route escort, and detached patrol. The reference does not establish a fixed weapon package for each mission.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twelve ships remained active. Several had commissioned within the preceding five years; individual work-up and deployment status are not fixed.</p>"}
    ],
    related:[{href:"japanese-surface-escorts.html",kicker:"Force history",label:"Japanese Surface Escorts"},{href:"amatsukaze-class-destroyer.html",kicker:"Preceding destroyer",label:"Amatsukaze Class"},{href:"maya-class-cruiser.html",kicker:"Command layer",label:"Maya Class"},{href:"computing.html",kicker:"Network context",label:"Computing"}],
    facts:[["Type","Multipurpose destroyer"],["Built and active","12"],["Introduced","1974–1982"],["Full load","6,200 t"],["Role","Networked multipurpose destroyer"]]
  }),

  "isuzu-class-escort": japaneseNavalArticle({
    title:"Isuzu-class escort",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · general escort · 1952–",
    landscape:lineageLandscape,
    lead:"The Isuzu class was a fourteen-ship Japanese general-escort class introduced between 1952 and 1960. All fourteen 2,400-tonne ships remained active in 1985 as the oldest registered postwar escort generation.",
    canon:"Fourteen ships built and active, the 1952–1960 introduction band, 2,400-tonne full-load displacement, escort classification, and general-escort role are established. Names, hull numbers, dimensions, propulsion, weapons, sensors, aviation, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Isuzu was the first registered postwar ocean-escort class. It supplemented Japan's large 1947 inheritance while the navy adapted convoy and route protection to a peacetime imperial shipping system.</p>"},
      {id:"production",title:"Production",html:"<p>Fourteen ships entered service from 1952 through 1960. All remained active in 1985. Individual hull identities and commissioning dates are not fixed.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 2,400 tonnes at full load and was classified as a general escort. Propulsion, dimensions, speed, weapons, sensors, endurance, crew, and aviation arrangements remain open.</p>"},
      {id:"service",title:"Service",html:"<p>The class escorted merchant shipping, auxiliaries, amphibious movements, and lower-threat naval formations. Patrol, training, anti-smuggling, disaster-response, and local command duties were compatible with its general designation, but specific records are unsettled.</p>"},
      {id:"succession",title:"Later escorts",html:"<p>Chikugo added an explicit anti-submarine and imperial-route role. Yūbari later combined missiles and a helicopter in a larger frigate hull.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All fourteen ships remained active after twenty-five to thirty-three years of service. Their modernization and material condition are not registered.</p>"}
    ],
    related:[{href:"japanese-surface-escorts.html",kicker:"Force history",label:"Japanese Surface Escorts"},{href:"chikugo-class-escort.html",kicker:"Successor escort",label:"Chikugo Class"},{href:"asakaze-class-destroyer.html",kicker:"Contemporary destroyer",label:"Asakaze Class"},{href:"south-seas-general-government.html",kicker:"Route geography",label:"South Seas General Government"}],
    facts:[["Type","General escort"],["Built and active","14"],["Introduced","1952–1960"],["Full load","2,400 t"],["Role","General escort"]]
  }),

  "chikugo-class-escort": japaneseNavalArticle({
    title:"Chikugo-class escort",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · anti-submarine escort · 1961–",
    landscape:lineageLandscape,
    lead:"The Chikugo class was an eighteen-ship Japanese escort class introduced between 1961 and 1970. All eighteen 3,100-tonne ships remained active in 1985 for anti-submarine warfare and imperial-route escort.",
    canon:"Eighteen ships built and active, the 1961–1970 introduction band, 3,100-tonne full-load displacement, escort classification, and ASW and imperial-route roles are established. Names, hull numbers, dimensions, propulsion, weapons, sensors, aviation, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Chikugo followed the general-purpose Isuzu class and gave the postwar escort line an explicit anti-submarine and long-route function. Its commissioning period overlapped Japan's expanding missile destroyer and carrier programs.</p>"},
      {id:"production",title:"Production",html:"<p>Eighteen ships entered service between 1961 and 1970, the largest build total among the six registered postwar destroyer and escort classes. All eighteen remained active in 1985.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 3,100 tonnes at full load. The registered mission was anti-submarine warfare and imperial-route escort. Propulsion, dimensions, speed, sonar, weapons, aircraft facilities, endurance, and crew remain open.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>Chikugo ships protected merchant routes, carriers, replenishment forces, and amphibious traffic from submarines. Their work relied upon patrol aircraft, helicopters, other escorts, fixed sensors, and intelligence about likely approaches.</p>"},
      {id:"routes",title:"Imperial-route service",html:"<p>Routes connected the home islands to Chōsen, Formosa, the South Seas, Southeast Asia, and associated-state ports. Escort allocation varied with cargo, threat, weather, distance, and available repair facilities.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eighteen ships remained active. The register does not specify their deployments, readiness, modernization, or division among fleet and route commands.</p>"}
    ],
    related:[{href:"japanese-surface-escorts.html",kicker:"Force history",label:"Japanese Surface Escorts"},{href:"isuzu-class-escort.html",kicker:"Earlier escort",label:"Isuzu Class"},{href:"yubari-class-frigate.html",kicker:"Later frigate",label:"Yūbari Class"},{href:"japanese-submarine-force.html",kicker:"Principal threat and partner",label:"Japanese Submarine Force"}],
    facts:[["Type","Escort"],["Built and active","18"],["Introduced","1961–1970"],["Full load","3,100 t"],["Roles","ASW and imperial-route escort"]]
  }),

  "yubari-class-frigate": japaneseNavalArticle({
    title:"Yūbari-class frigate",
    category:"Warship class",
    eyebrow:"Imperial Japanese Navy · missile frigate · 1972–",
    landscape:lineageLandscape,
    lead:"The Yūbari class was a fourteen-ship Japanese frigate class introduced between 1972 and 1981. All fourteen 4,000-tonne ships remained active in 1985 as missile frigates with helicopters.",
    canon:"Fourteen ships built and active, the 1972–1981 introduction band, 4,000-tonne full-load displacement, frigate classification, missile armament category, and helicopter role are established. Names, hull numbers, dimensions, propulsion, missile and sensor fits, helicopter type and number, crew, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Yūbari followed the Isuzu and Chikugo escort classes and moved the smaller ocean-going force into a helicopter-equipped missile generation. Construction overlapped the Maya cruiser and Hatsuyuki destroyer programs.</p>"},
      {id:"production",title:"Production",html:"<p>Fourteen ships entered service from 1972 through 1981. All remained active in 1985. Individual names, hull numbers, and commissioning dates are not registered.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 4,000 tonnes at full load. The class carried missiles and a helicopter, but missile type and count, aviation arrangements, propulsion, dimensions, speed, sensors, other weapons, and complement remain open.</p>"},
      {id:"aviation",title:"Helicopter operations",html:"<p>The embarked helicopter extended search, anti-submarine, liaison, and rescue reach beyond the ship's own sensors. Aircraft availability and embarked type could vary by mission.</p>"},
      {id:"service",title:"Service",html:"<p>Yūbari ships escorted routes and formations, conducted anti-submarine patrols, and supplied missile and aviation capacity where a destroyer or cruiser was unnecessary. Specific deployments remain unsettled.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All fourteen ships remained active. Several were less than ten years old at the reference date; readiness and assignment are not fixed.</p>"}
    ],
    related:[{href:"japanese-surface-escorts.html",kicker:"Force history",label:"Japanese Surface Escorts"},{href:"chikugo-class-escort.html",kicker:"Preceding escort",label:"Chikugo Class"},{href:"hatsuyuki-class-destroyer.html",kicker:"Contemporary destroyer",label:"Hatsuyuki Class"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Type","Missile frigate"],["Built and active","14"],["Introduced","1972–1981"],["Full load","4,000 t"],["Aviation","Helicopter"],["Role","Missile frigate"]]
  })
});
