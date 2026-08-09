window.deepArticles = window.deepArticles || {};

const japaneseAttackSubmarineTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Family</th><th>Type</th><th>Built</th><th>Introduction</th><th>Active, 1985</th><th>Mission</th></tr></thead><tbody><tr><td><a href='type-30-uzushio-submarine.html'>Type 30 Uzushio</a></td><td>SSK</td><td>18</td><td>1970–1978</td><td>12</td><td>Coastal and ocean attack</td></tr><tr><td><a href='type-38-yushio-submarine.html'>Type 38 Yūshio</a></td><td>SSK</td><td>18</td><td>1978–1985</td><td>18</td><td>Modern quiet conventional attack</td></tr><tr><td><a href='type-24-nuclear-attack-submarine.html'>Type 24 nuclear attack</a></td><td>SSN</td><td>8</td><td>1964–1972</td><td>8</td><td>Fleet attack</td></tr><tr><td><a href='type-38-nuclear-attack-submarine.html'>Type 38 nuclear attack</a></td><td>SSN</td><td>8</td><td>1978–1985</td><td>8</td><td>Second-generation fleet attack</td></tr></tbody></table></div>";

const japaneseTransportSubmarineTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Introduction</th><th>Built</th><th>Submerged displacement</th><th>Crew</th><th>Standard mission load</th><th>Speed</th><th>Endurance</th></tr></thead><tbody><tr><td><a href='type-d-i-361-submarine.html'>Type D / I-361</a></td><td>1944</td><td>12 through 1947</td><td>2,200 t</td><td>55</td><td>90 t cargo or 80 troops</td><td>13 kn</td><td>60 days</td></tr><tr><td><a href='type-18-i-460-submarine.html'>Type 18 / I-460</a></td><td>1958</td><td>4</td><td>3,900 t</td><td>44</td><td>100 troops and 150 t cargo</td><td>18 kn</td><td>65 days</td></tr><tr><td><a href='type-36-i-490-submarine.html'>Type 36 / I-490</a></td><td>1976</td><td>3</td><td>8,800 t</td><td>46</td><td>96 troops and 220 t cargo</td><td>23 kn</td><td>90 days</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "japanese-attack-submarines": japaneseNavalArticle({
    title:"Japanese postwar attack submarines",
    category:"Submarine development",
    landscape:lineageLandscape,
    lead:"Japan's postwar attack-submarine force contained two front-line conventional families and two nuclear families. Type 30 Uzushio and Type 38 Yūshio boats provided thirty active conventional submarines in 1985; Type 24 and Type 38 nuclear boats provided sixteen active fleet-attack submarines.",
    canon:"The four families, SSK and SSN classifications, build totals, introduction bands, active totals, and registered missions are established. Displacements, dimensions, speeds, crews, propulsion details, torpedo and missile loads, sensors, individual hulls, bases, deployments, losses, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The postwar line separated conventional boats suited to coastal and ocean ambush from nuclear boats intended for sustained fleet attack. Older I-201, Type 15 Kuroshio, and Type 23 Oyashio boats remained in training, reserve, export, and experimental use outside the thirty-boat front-line SSK total.</p>"},
      {id:"classes",title:"Classes",html:japaneseAttackSubmarineTable},
      {id:"conventional",title:"Conventional attack submarines",html:"<p>Eighteen <a href='type-30-uzushio-submarine.html'>Type 30 Uzushio</a> boats entered service from 1970 through 1978; twelve remained active. Eighteen <a href='type-38-yushio-submarine.html'>Type 38 Yūshio</a> boats entered service from 1978 through 1985, and all eighteen remained active.</p>"},
      {id:"nuclear",title:"Nuclear attack submarines",html:"<p>Eight <a href='type-24-nuclear-attack-submarine.html'>Type 24 nuclear attack submarines</a> entered service between 1964 and 1972. Eight <a href='type-38-nuclear-attack-submarine.html'>Type 38 nuclear attack submarines</a> followed between 1978 and 1985. All sixteen remained active.</p>"},
      {id:"designation",title:"Type 38 designation",html:"<p>Yūshio and the second-generation nuclear boat both carried the Type 38 year designation. They were separate conventional and nuclear families; the shared number did not identify one class or one propulsion system.</p>"},
      {id:"employment",title:"Fleet employment",html:"<p>Conventional boats served coastal approaches, route defense, ambush, reconnaissance, and ocean attack. Nuclear boats could sustain higher-speed fleet pursuit, distant screening, and rapid redeployment. Both branches worked with carriers, surface escorts, aircraft, satellites, island bases, and signals intelligence.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>The active attack force contained forty-six boats: thirty SSKs and sixteen SSNs. Active totals do not establish how many were deployed, training, under repair, or immediately ready.</p>"}
    ],
    related:[{href:"type-30-uzushio-submarine.html",kicker:"First front-line SSK",label:"Type 30 Uzushio"},{href:"type-38-yushio-submarine.html",kicker:"Quiet SSK",label:"Type 38 Yūshio"},{href:"type-24-nuclear-attack-submarine.html",kicker:"First SSN generation",label:"Type 24 SSN"},{href:"type-38-nuclear-attack-submarine.html",kicker:"Second SSN generation",label:"Type 38 SSN"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Attack boats active, 1985","46"],["Conventional attack","30"],["Nuclear attack","16"],["Conventional families","Type 30 Uzushio; Type 38 Yūshio"],["Nuclear families","Type 24; Type 38"]]
  }),

  "type-30-uzushio-submarine": japaneseNavalArticle({
    title:"Type 30 Uzushio-class submarine",
    category:"Submarine class",
    eyebrow:"Imperial Japanese Navy · conventional attack submarine · 1970–",
    landscape:lineageLandscape,
    lead:"The Type 30 Uzushio class was an eighteen-boat Japanese conventionally powered attack-submarine family introduced between 1970 and 1978. Twelve boats remained active in 1985 for coastal and ocean attack.",
    canon:"SSK classification, eighteen built, the 1970–1978 introduction band, twelve active in 1985, and coastal and ocean attack missions are established. Displacement, dimensions, propulsion, speed, endurance, crew, weapons, sensors, individual I-numbers, yards, deployments, losses, refits, and the disposition of six inactive boats remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Uzushio formed the first front-line conventional family in the registered 1985 force. Its introduction followed Japan's early nuclear-attack program but preserved a numerous conventional branch for missions where quiet ambush, access, and lower operating demands were useful.</p>"},
      {id:"production",title:"Production",html:"<p>Eighteen boats entered service from 1970 through 1978. The source register does not assign individual I-numbers, builders, or commissioning dates.</p>"},
      {id:"design",title:"Registered design",html:"<p>The class was conventionally powered and classified as an SSK. Its displacement, dimensions, machinery, battery system, speed, endurance, weapons, sensors, and complement are not settled.</p>"},
      {id:"missions",title:"Missions",html:"<p>The registered mission covered both coastal and ocean attack. Boats could patrol approaches, watch bases and routes, conduct ambushes, report fleet movements, and support wider submarine and carrier operations.</p>"},
      {id:"replacement",title:"Yūshio introduction",html:"<p>The Type 38 Yūshio family began entering service in 1978 as the modern quiet conventional generation. Six Uzushio boats were no longer active by 1985, but their identities and dispositions remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Twelve of eighteen boats remained active. The register does not distinguish deployed, reserve, overhaul, training, transferred, or retired hulls among the other six.</p>"}
    ],
    related:[{href:"japanese-attack-submarines.html",kicker:"Force history",label:"Japanese Attack Submarines"},{href:"type-38-yushio-submarine.html",kicker:"Successor SSK",label:"Type 38 Yūshio"},{href:"type-24-nuclear-attack-submarine.html",kicker:"Nuclear contemporary",label:"Type 24 SSN"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Type","SSK"],["Built","18"],["Introduced","1970–1978"],["Active, 1985","12"],["Mission","Coastal and ocean attack"]]
  }),

  "type-38-yushio-submarine": japaneseNavalArticle({
    title:"Type 38 Yūshio-class submarine",
    category:"Submarine class",
    eyebrow:"Imperial Japanese Navy · conventional attack submarine · 1978–",
    landscape:lineageLandscape,
    lead:"The Type 38 Yūshio class was an eighteen-boat Japanese conventionally powered attack-submarine family introduced between 1978 and 1985. All eighteen remained active in 1985 as the navy's modern quiet conventional attack boats.",
    canon:"SSK classification, eighteen built and active, the 1978–1985 introduction band, and modern quiet conventional-attack role are established. Displacement, dimensions, propulsion, batteries, speed, endurance, crew, weapons, sensors, individual I-numbers, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Yūshio followed the Type 30 Uzushio family and entered service during the broader Japanese shift toward networked maritime operations. It retained conventional propulsion while the navy simultaneously introduced a second Type 38 nuclear-attack family.</p>"},
      {id:"production",title:"Production",html:"<p>Eighteen boats entered service between 1978 and 1985. All remained active at the reference date. Individual hull identities, builders, and commissioning dates are not registered.</p>"},
      {id:"design",title:"Registered design",html:"<p>The class was an SSK described as a modern quiet conventional attack submarine. The reference does not fix displacement, dimensions, machinery, battery system, speed, endurance, armament, sensors, or complement.</p>"},
      {id:"quieting",title:"Quieting",html:"<p>Quieting was a registered design priority rather than a quantified performance claim. Machinery isolation, propeller design, hull flow, operating practice, and battery endurance would all affect detectability; their details remain open.</p>"},
      {id:"designation",title:"Type designation",html:"<p>The conventional Yūshio and the nuclear Type 38 boats shared a year designation but belonged to separate families. References to “Type 38 submarine” require the propulsion or class name to avoid ambiguity.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eighteen boats remained active, including newly commissioned hulls. Work-up status, patrol assignment, and readiness are not settled.</p>"}
    ],
    related:[{href:"japanese-attack-submarines.html",kicker:"Force history",label:"Japanese Attack Submarines"},{href:"type-30-uzushio-submarine.html",kicker:"Preceding SSK",label:"Type 30 Uzushio"},{href:"type-38-nuclear-attack-submarine.html",kicker:"Separate Type 38 family",label:"Type 38 SSN"},{href:"japanese-surface-escorts.html",kicker:"ASW counterpart",label:"Japanese Surface Escorts"}],
    facts:[["Type","SSK"],["Built and active","18"],["Introduced","1978–1985"],["Role","Modern quiet conventional attack"],["Distinct from","Type 38 nuclear attack submarine"]]
  }),

  "type-24-nuclear-attack-submarine": japaneseNavalArticle({
    title:"Type 24 nuclear attack submarine",
    category:"Submarine class",
    eyebrow:"Imperial Japanese Navy · nuclear attack submarine · 1964–",
    landscape:lineageLandscape,
    lead:"The Type 24 was an eight-boat Japanese nuclear attack-submarine family introduced between 1964 and 1972. All eight remained active in 1985 for fleet attack.",
    canon:"SSN classification, nuclear propulsion, eight built and active, the 1964–1972 introduction band, and fleet-attack mission are established. Class name, displacement, dimensions, reactor, speed, endurance, crew, weapons, sensors, individual I-numbers, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Type 24 established Japan's first registered postwar nuclear attack-submarine generation. Its commissioning period overlapped the Amagi carrier, Takao II cruiser, and Amatsukaze destroyer programs.</p>"},
      {id:"production",title:"Production",html:"<p>Eight boats entered service from 1964 through 1972. All eight remained active in 1985. The class name, individual I-numbers, yards, and dates are not fixed.</p>"},
      {id:"design",title:"Registered design",html:"<p>The boats were nuclear powered and classified as SSNs. Displacement, dimensions, reactor plant, speed, diving depth, endurance, complement, weapons, sensors, and noise characteristics remain open.</p>"},
      {id:"fleet",title:"Fleet attack",html:"<p>The registered mission was fleet attack. Nuclear endurance supported distant patrol, sustained pursuit, rapid repositioning, scouting, and screening for Japanese carrier formations.</p>"},
      {id:"system",title:"Fleet integration",html:"<p>Type 24 boats operated within a wider system of carrier aviation, patrol aircraft, satellites, island stations, signals intelligence, surface escorts, and other submarines. Their exact reporting and command arrangements are not established.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight boats remained active. Their modernization, readiness, patrol distribution, and intended replacement schedule are open.</p>"}
    ],
    related:[{href:"japanese-attack-submarines.html",kicker:"Force history",label:"Japanese Attack Submarines"},{href:"type-38-nuclear-attack-submarine.html",kicker:"Successor SSN",label:"Type 38 SSN"},{href:"japanese-type-32-submarine.html",kicker:"Missile branch",label:"Type 32 SSGN"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Type","SSN"],["Propulsion","Nuclear"],["Built and active","8"],["Introduced","1964–1972"],["Mission","Fleet attack"]]
  }),

  "type-38-nuclear-attack-submarine": japaneseNavalArticle({
    title:"Type 38 nuclear attack submarine",
    category:"Submarine class",
    eyebrow:"Imperial Japanese Navy · nuclear attack submarine · 1978–",
    landscape:lineageLandscape,
    lead:"The nuclear Type 38 was an eight-boat Japanese attack-submarine family introduced between 1978 and 1985. All eight remained active in 1985 as the navy's second-generation fleet-attack SSNs.",
    canon:"SSN classification, nuclear propulsion, eight built and active, the 1978–1985 introduction band, and second-generation fleet-attack mission are established. Class name, displacement, dimensions, reactor, speed, endurance, crew, weapons, sensors, individual I-numbers, yards, deployments, and refits remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The nuclear Type 38 followed the Type 24 SSNs and entered service alongside the Hakuryū carrier, Maya cruiser, and Hatsuyuki destroyer generations. It was the second registered Japanese nuclear fleet-attack family.</p>"},
      {id:"production",title:"Production",html:"<p>Eight boats entered service between 1978 and 1985. All remained active at the reference date. Individual hulls, builders, and commissioning dates are not settled.</p>"},
      {id:"design",title:"Registered design",html:"<p>The family was nuclear powered and classified as an SSN. The source does not establish displacement, dimensions, reactor, speed, diving depth, complement, weapons, sensors, or quieting performance.</p>"},
      {id:"designation",title:"Type designation",html:"<p>The nuclear family shared the Type 38 designation with the conventionally powered Yūshio class. The two families require separate identification in fleet records and historical writing.</p>"},
      {id:"missions",title:"Missions",html:"<p>Second-generation fleet attack included distant reconnaissance, pursuit of major surface formations, attack on hostile submarines, carrier screening, and rapid movement between ocean areas. Specific doctrine and patrol zones remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eight boats remained active, several of them newly commissioned. Work-up, deployment, and readiness are not fixed.</p>"}
    ],
    related:[{href:"japanese-attack-submarines.html",kicker:"Force history",label:"Japanese Attack Submarines"},{href:"type-24-nuclear-attack-submarine.html",kicker:"Preceding SSN",label:"Type 24 SSN"},{href:"type-38-yushio-submarine.html",kicker:"Separate Type 38 family",label:"Type 38 Yūshio"},{href:"japanese-type-32-submarine.html",kicker:"Missile complement",label:"Type 32 SSGN"}],
    facts:[["Type","SSN"],["Propulsion","Nuclear"],["Built and active","8"],["Introduced","1978–1985"],["Role","Second-generation fleet attack"],["Distinct from","Type 38 Yūshio SSK"]]
  }),

  "japanese-transport-submarines": japaneseNavalArticle({
    title:"Japanese transport submarines",
    category:"Naval logistics",
    landscape:lineageLandscape,
    lead:"Japanese transport submarines moved troops, high-value cargo, minisubmarines, and swimmer-delivery vehicles through threatened approaches. The registered lineage ran from the wartime Type D/I-361 through the postwar Type 18/I-460 to the nuclear Type 36/I-490.",
    canon:"The three classes, introduction years, build totals, submerged displacements, crews, standard mission loads, speeds, endurance, Type 36 nuclear propulsion and secondary-vehicle capacity, and surprise-amphibious doctrine are established. Individual hull records beyond lead designations, weapons, dimensions, bases, missions, losses, and command personnel remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The line preserved the wartime practice of moving selected loads underwater and expanded it into a postwar special-transport arm. Capacity increased from ninety tonnes or eighty troops in Type D to ninety-six troops and 220 tonnes in the nuclear Type 36.</p>"},
      {id:"classes",title:"Classes",html:japaneseTransportSubmarineTable},
      {id:"type-d",title:"Type D / I-361",html:"<p>Twelve <a href='type-d-i-361-submarine.html'>Type D boats</a> entered service through 1947 from a 1944 design. Each displaced 2,200 tonnes submerged and carried ninety tonnes of cargo or eighty troops.</p>"},
      {id:"type18",title:"Type 18 / I-460",html:"<p>Four <a href='type-18-i-460-submarine.html'>Type 18 boats</a> entered service from 1958. Each displaced 3,900 tonnes submerged and carried one hundred troops and 150 tonnes of cargo.</p>"},
      {id:"type36",title:"Type 36 / I-490",html:"<p>Three nuclear <a href='type-36-i-490-submarine.html'>Type 36 boats</a> entered service from 1976. Each displaced 8,800 tonnes submerged and carried ninety-six troops and 220 tonnes of cargo, plus either two minisubmarines or four swimmer-delivery vehicles.</p>"},
      {id:"doctrine",title:"Operational doctrine",html:"<p>Japan treated the Type 36 as a means of opening one unexpected amphibious access point. A human command team directed the landing while attack submarines and a signals-intelligence boat screened the approach.</p>"},
      {id:"limits",title:"Capacity limits",html:"<p>None of the classes could move merchant-ship quantities of ordinary cargo. Their value lay in secrecy, reconnaissance, special operations, and first deliveries whose timing mattered more than tonnage.</p>"}
    ],
    related:[{href:"type-d-i-361-submarine.html",kicker:"Wartime class",label:"Type D / I-361"},{href:"type-18-i-460-submarine.html",kicker:"Postwar class",label:"Type 18 / I-460"},{href:"type-36-i-490-submarine.html",kicker:"Nuclear class",label:"Type 36 / I-490"},{href:"japanese-attack-submarines.html",kicker:"Approach screen",label:"Japanese Attack Submarines"},{href:"german-submersible-transports.html",kicker:"German comparison",label:"German Submersible Transports"}],
    facts:[["Classes","Type D; Type 18; Type 36"],["Total built","19"],["Largest class","Type 36, 8,800 t submerged"],["Largest registered cargo","220 t plus 96 troops"],["Maximum endurance","90 days"],["Doctrine","Surprise amphibious access"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/I-361-class_submarine",label:"Wikipedia — pre-divergence Type D/I-361 history"}]
  }),

  "type-d-i-361-submarine": japaneseNavalArticle({
    title:"Type D / I-361-class transport submarine",
    category:"Submarine class",
    eyebrow:"Imperial Japanese Navy · transport submarine · 1944–",
    landscape:lineageLandscape,
    lead:"The Type D or I-361 class was a twelve-boat Japanese transport-submarine class introduced in 1944 and completed through 1947. Each boat displaced 2,200 tonnes submerged, carried a crew of fifty-five, and transported either ninety tonnes of cargo or eighty troops.",
    canon:"The Type D and I-361 designations, 1944 introduction, twelve boats completed through 1947, 2,200-tonne submerged displacement, crew of fifty-five, standard cargo or troop load, thirteen-knot speed, and sixty-day endurance are established. Individual hull histories, dimensions, propulsion, surfaced displacement, weapons, sensors, bases, missions, losses, and postwar disposition remain open except where historical pre-divergence records apply.",
    sections:[
      {id:"development",title:"Development",html:"<p>Type D originated during the extended war as a purpose-built underwater transport. The setting's altered naval war allowed twelve boats to enter service through the 1947 armistice.</p>"},
      {id:"production",title:"Production",html:"<p>Twelve boats were completed from the 1944 introduction through 1947. I-361 supplied the class's alternative designation; the complete in-setting hull roster and individual fates remain unsettled.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Submerged displacement</th><td>2,200 t</td></tr><tr><th>Crew</th><td>55</td></tr><tr><th>Standard mission load</th><td>90 t cargo or 80 troops</td></tr><tr><th>Speed</th><td>13 kn</td></tr><tr><th>Endurance</th><td>60 days</td></tr></tbody></table></div>"},
      {id:"service",title:"Service",html:"<p>The boats moved selected troops, ammunition, food, technical stores, intelligence material, and other loads through threatened approaches. The register does not fix individual wartime or postwar missions.</p>"},
      {id:"succession",title:"Postwar successors",html:"<p>Type 18/I-460 enlarged both troop and cargo capacity in 1958. The nuclear Type 36/I-490 later added longer endurance, higher speed, and secondary underwater vehicles.</p>"},
      {id:"limits",title:"Limits",html:"<p>Ninety tonnes remained a small load beside an ordinary freighter. Type D was useful when concealment or timing outweighed volume.</p>"}
    ],
    related:[{href:"japanese-transport-submarines.html",kicker:"Lineage history",label:"Japanese Transport Submarines"},{href:"type-18-i-460-submarine.html",kicker:"Postwar successor",label:"Type 18 / I-460"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"philippine-war.html",kicker:"Regional war",label:"Philippine War"}],
    facts:[["Type","Transport submarine"],["Introduced","1944"],["Built through 1947","12"],["Submerged displacement","2,200 t"],["Crew","55"],["Load","90 t cargo or 80 troops"],["Speed","13 kn"],["Endurance","60 days"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/I-361-class_submarine",label:"Wikipedia — pre-divergence Type D/I-361 history"}]
  }),

  "type-18-i-460-submarine": japaneseNavalArticle({
    title:"Type 18 / I-460-class transport submarine",
    category:"Submarine class",
    eyebrow:"Imperial Japanese Navy · transport submarine · 1958–",
    landscape:lineageLandscape,
    lead:"The Type 18 or I-460 class was a four-boat Japanese transport-submarine class introduced in 1958. Each boat displaced 3,900 tonnes submerged, carried a crew of forty-four, and transported one hundred troops and 150 tonnes of cargo.",
    canon:"The Type 18 and I-460 designations, 1958 introduction, four-boat build, 3,900-tonne submerged displacement, crew of forty-four, standard troop and cargo load, eighteen-knot speed, and sixty-five-day endurance are established. Individual hulls, dimensions, propulsion, surfaced displacement, weapons, sensors, bases, missions, losses, refits, and disposition remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Type 18 was the first registered postwar Japanese transport-submarine design. It followed the wartime Type D and increased both speed and carrying capacity while reducing the standard crew.</p>"},
      {id:"production",title:"Production",html:"<p>Four boats entered service from 1958. I-460 supplied the class's alternative designation. Individual hull numbers, construction dates, and builders are not settled.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Submerged displacement</th><td>3,900 t</td></tr><tr><th>Crew</th><td>44</td></tr><tr><th>Standard mission load</th><td>100 troops and 150 t cargo</td></tr><tr><th>Speed</th><td>18 kn</td></tr><tr><th>Endurance</th><td>65 days</td></tr></tbody></table></div>"},
      {id:"missions",title:"Missions",html:"<p>The combined troop and cargo load suited reinforcement, raiding parties, engineers, signals teams, supplies, and equipment delivered through guarded approaches. Specific operations remain open.</p>"},
      {id:"succession",title:"Type 36 development",html:"<p>The nuclear Type 36/I-490 followed from 1976 with greater displacement, speed, endurance, cargo capacity, and provision for minisubmarines or swimmer-delivery vehicles.</p>"},
      {id:"limits",title:"Limits",html:"<p>Type 18 carried more than Type D but still served specialized access rather than ordinary strategic sealift. Four hulls could not sustain the supply requirements of a large field army.</p>"}
    ],
    related:[{href:"japanese-transport-submarines.html",kicker:"Lineage history",label:"Japanese Transport Submarines"},{href:"type-d-i-361-submarine.html",kicker:"Wartime predecessor",label:"Type D / I-361"},{href:"type-36-i-490-submarine.html",kicker:"Nuclear successor",label:"Type 36 / I-490"},{href:"south-seas-general-government.html",kicker:"Operational geography",label:"South Seas General Government"}],
    facts:[["Type","Transport submarine"],["Introduced","1958"],["Built","4"],["Submerged displacement","3,900 t"],["Crew","44"],["Load","100 troops and 150 t cargo"],["Speed","18 kn"],["Endurance","65 days"]]
  }),

  "type-36-i-490-submarine": japaneseNavalArticle({
    title:"Type 36 / I-490-class transport submarine",
    category:"Submarine class",
    eyebrow:"Imperial Japanese Navy · nuclear transport submarine · 1976–",
    landscape:lineageLandscape,
    lead:"The Type 36 or I-490 class was a three-boat Japanese nuclear transport-submarine class introduced in 1976. Each boat displaced 8,800 tonnes submerged, carried a crew of forty-six, transported ninety-six troops and 220 tonnes of cargo, and could carry two minisubmarines or four swimmer-delivery vehicles.",
    canon:"The Type 36 and I-490 designations, 1976 introduction, three-boat build, nuclear propulsion, 8,800-tonne submerged displacement, crew of forty-six, registered troop and cargo load, twenty-three-knot speed, ninety-day endurance, secondary-vehicle capacity, and surprise-amphibious doctrine are established. Individual hulls, dimensions, reactor, surfaced displacement, weapons, sensors, bases, missions, losses, refits, and disposition remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Type 36 followed the wartime Type D and postwar Type 18 transport boats. Nuclear propulsion increased sustained reach and allowed a much larger submerged design intended for special amphibious access rather than routine cargo service.</p>"},
      {id:"production",title:"Production",html:"<p>Three boats entered service from 1976. I-490 supplied the class's alternative designation. The individual hull roster, construction dates, and yards are not fixed.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Propulsion</th><td>Nuclear</td></tr><tr><th>Submerged displacement</th><td>8,800 t</td></tr><tr><th>Crew</th><td>46</td></tr><tr><th>Standard mission load</th><td>96 troops and 220 t cargo</td></tr><tr><th>Secondary vehicles</th><td>2 minisubmarines or 4 swimmer-delivery vehicles</td></tr><tr><th>Speed</th><td>23 kn</td></tr><tr><th>Endurance</th><td>90 days</td></tr></tbody></table></div>"},
      {id:"doctrine",title:"Surprise amphibious access",html:"<p>Japan treated the class as a means of opening one unexpected amphibious door. A human command team directed the landing while attack submarines and a signals-intelligence boat screened the approach.</p>"},
      {id:"vehicles",title:"Secondary vehicles",html:"<p>A boat could carry two minisubmarines or four swimmer-delivery vehicles. These craft extended covert reconnaissance, landing, and access options without turning the transport submarine into a conventional amphibious ship.</p>"},
      {id:"limits",title:"Limits",html:"<p>Even 220 tonnes of cargo was small beside surface sealift. The three-boat class could deliver a first party, specialized equipment, and selected stores; it could not maintain a large campaign by itself.</p>"}
    ],
    related:[{href:"japanese-transport-submarines.html",kicker:"Lineage history",label:"Japanese Transport Submarines"},{href:"type-18-i-460-submarine.html",kicker:"Preceding class",label:"Type 18 / I-460"},{href:"japanese-attack-submarines.html",kicker:"Approach screen",label:"Japanese Attack Submarines"},{href:"japanese-type-32-submarine.html",kicker:"Nuclear missile branch",label:"Type 32 SSGN"}],
    facts:[["Type","Nuclear transport submarine"],["Introduced","1976"],["Built","3"],["Submerged displacement","8,800 t"],["Crew","46"],["Load","96 troops and 220 t cargo"],["Secondary vehicles","2 minisubmarines or 4 swimmer-delivery vehicles"],["Speed","23 kn"],["Endurance","90 days"]]
  })
});
