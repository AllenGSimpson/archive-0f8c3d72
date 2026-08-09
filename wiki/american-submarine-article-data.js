window.deepArticles = window.deepArticles || {};

const americanSubmarineClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Lineage</th><th>Type</th><th>Introduction</th><th>1985 status</th><th>Registered role</th></tr></thead><tbody><tr><td><a href='tang-barbel-submarines.html'>Tang/Barbel family</a></td><td>SSK</td><td>1951–1965</td><td>20 front-line</td><td>Arctic, Caribbean, and coastal patrol</td></tr><tr><td><a href='sturgeon-class-submarine.html'>Sturgeon class</a></td><td>SSN</td><td>1970–1980</td><td>8 front-line; 4 reserve</td><td>Long-range attack</td></tr><tr><td><a href='los-angeles-class-submarine.html'>Los Angeles class</a></td><td>SSN</td><td>1978–1985</td><td>12 front-line</td><td>Fleet attack and carrier escort</td></tr><tr><td><a href='triton-class-submarine.html'>Triton class</a></td><td>SSGN</td><td>1965–1972</td><td>4 front-line</td><td>Conventional strategic missile attack</td></tr><tr><td><a href='longbow-class-submarine.html'>Longbow class</a></td><td>SSGN</td><td>1976–1983</td><td>4 front-line</td><td>Submerged vertical-launch strike</td></tr></tbody></table></div>";

const americanSubmarineRelated = [
  {href:"us-navy-submarine-force.html",kicker:"Service history",label:"United States Submarine Force"},
  {href:"american-nuclear-attack-submarines.html",kicker:"SSN branch",label:"American Nuclear Attack Submarines"},
  {href:"american-guided-missile-submarines.html",kicker:"SSGN branch",label:"American Guided-Missile Submarines"},
  {href:"american-conventional-submarines.html",kicker:"SSK branch",label:"American Conventional Submarines"}
];

Object.assign(window.deepArticles, {
  "us-navy-submarine-force": americanNavalArticle({
    title:"United States Navy submarine force, 1947–1985",
    category:"Submarine history",
    landscape:americanLineageLandscape,
    lead:"The United States Navy submarine force developed from 125 undamaged neutral-war boats into a forty-eight-boat front line by 1 January 1985. Twenty nuclear attack submarines, eight nuclear guided-missile submarines, and twenty diesel-electric patrol boats divided ocean pursuit, carrier screening, conventional missile attack, and regional patrol.",
    canon:"The 1947 afloat and operational totals; Tang/Barbel, Sturgeon, Los Angeles, Triton, and Longbow lineages; build and front-line totals; registered displacements and roles; earlier nuclear boats in secondary service; conventional warheads; and the 1985 balance are established. Command organization, named bases, detailed weapons and sensors, acoustic performance, patrol cycles, readiness, and most individual service histories remain open.",
    sections:[
      {id:"inheritance",title:"1947 inheritance",html:"<p>The Navy held 125 submarines afloat and ninety-five operational on 31 December 1947. The United States had not entered the general war, and no American boat had been lost in wartime patrols. The difference between the afloat and operational totals consisted of older hulls, maintenance cases, and boats not ready for immediate service.</p><p>The inheritance supplied hulls and trained personnel for experiments and instruction, but it did not remove the need for new postwar designs. Battery endurance, underwater speed, sensors, weapons, and the growing German undersea force changed the requirements placed on American boats.</p>"},
      {id:"development",title:"Development",html:"<p>The first postwar branch was the diesel-electric Tang/Barbel family, introduced from 1951. Experimental nuclear propulsion followed during the 1950s. Operational SSNs, wire-guided torpedoes, and submerged missile launch became available during the 1960s; quieter machinery, anechoic treatment, and nuclear SSGNs followed during the 1970s.</p><p>Earlier nuclear boats—including Nautilus, Skate, Permit, and Skipjack generations—remained useful for training, intelligence, research, reserve, and secondary duties. The fleet register excludes them from the twenty-boat front-line SSN total.</p>"},
      {id:"lineages",title:"Front-line lineages",html:americanSubmarineClassTable},
      {id:"attack",title:"Attack-submarine branch",html:"<p>Eight Sturgeon-class and twelve Los Angeles-class boats formed the front-line SSN branch. Sturgeons served as long-range attack submarines. The newer Los Angeles class combined fleet attack with carrier escort, giving a submerged screen the speed and endurance to accompany American carrier formations.</p><p>Attack boats also watched opposing bases and routes, followed surface groups, hunted submarines, and gathered information. Their work depended on patrol aircraft, surface escorts, intelligence services, and communications as well as their own sensors.</p>"},
      {id:"missile",title:"Guided-missile branch",html:"<p>Four Triton-class and four Longbow-class SSGNs supplied concealed conventional strategic attack. Triton established the nuclear-powered missile branch between 1965 and 1972. Longbow entered service from 1976 with submerged vertical launch and a larger registered displacement.</p><p>No boat carried a nuclear warhead. Planned targets included fleets, ports, airfields, radar sites, communications facilities, and other operational infrastructure.</p>"},
      {id:"conventional",title:"Conventional branch",html:"<p>Twenty Tang/Barbel-family boats remained front-line in 1985. They served in Arctic approaches, Caribbean routes, coastal waters, and chokepoints where sustained ocean speed was less important than local familiarity, quiet battery operation, and lower support demands.</p><p>The diesel-electric force also supported exercises and anti-submarine training. Its retention kept regional patrols from consuming the entire nuclear fleet.</p>"},
      {id:"employment",title:"Operational employment",html:"<p>American submarine plans covered sea denial, blockade support, carrier and convoy screening, reconnaissance, surveillance of bases and passages, attack on surface forces, and conventional land attack. The Atlantic problem emphasized German submarines and the approaches exposed during the Iceland crisis. The Pacific problem required attention to Japanese carrier formations and long maritime routes. Caribbean plans were tied to the defence and coercive reach of the American Hemisphere.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>The registered front line numbered forty-eight boats. Front-line status did not mean that every boat was at sea or immediately ready. Reactor overhaul, battery and machinery work, weapons loading, crew qualification, intelligence preparation, and communications availability determined the force that could be assigned to a crisis.</p>"}
    ],
    related:[{href:"sturgeon-class-submarine.html",kicker:"SSN class",label:"Sturgeon Class"},{href:"los-angeles-class-submarine.html",kicker:"SSN class",label:"Los Angeles Class"},{href:"triton-class-submarine.html",kicker:"SSGN class",label:"Triton Class"},{href:"longbow-class-submarine.html",kicker:"SSGN class",label:"Longbow Class"},{href:"tang-barbel-submarines.html",kicker:"SSK lineage",label:"Tang/Barbel Family"}],
    facts:[["Submarines afloat, 1947","125"],["Operational, 1947","95"],["Front-line boats, 1985","48"],["SSNs, 1985","20"],["SSGNs, 1985","8"],["SSKs, 1985","20"],["Nuclear weapons","None"]]
  }),

  "american-nuclear-attack-submarines": americanNavalArticle({
    title:"American nuclear attack submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American front-line nuclear attack submarines in 1985 comprised eight Sturgeon-class and twelve Los Angeles-class boats. They performed long-range attack, carrier escort, submarine hunting, reconnaissance, and fleet screening while earlier nuclear designs continued in training and secondary service.",
    canon:"Sturgeon and Los Angeles build totals, introduction bands, front-line and reserve counts, 4,800- and 6,900-tonne submerged reference displacements, nuclear propulsion, registered roles, and the twenty-boat 1985 front-line total are established. Personal names, reactor types, dimensions, speed, crew, weapons, sensors, noise data, bases, patrols, and individual histories remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Experimental nuclear propulsion began during the 1950s. Nautilus and the Skate family established the machinery, training, and maintenance base; Permit and Skipjack generations extended operational experience. These boats remained in training, intelligence, reserve, research, or secondary service in 1985 and did not increase the front-line total.</p>"},
      {id:"sturgeon",title:"Sturgeon class",html:"<p>Twelve <a href='sturgeon-class-submarine.html'>Sturgeon-class submarines</a> entered service between 1970 and 1980. The register assigns a 4,800-tonne submerged displacement and a long-range attack role. Eight remained in the front line on 1 January 1985, while four early boats stood in mobilization reserve.</p>"},
      {id:"los-angeles",title:"Los Angeles class",html:"<p>Twelve <a href='los-angeles-class-submarine.html'>Los Angeles-class submarines</a> entered service between 1978 and 1985. All twelve remained front-line. Their registered roles were fleet attack and carrier escort, and their submerged reference displacement was 6,900 tonnes.</p>"},
      {id:"missions",title:"Missions",html:"<p>SSNs screened carrier groups, hunted hostile submarines, followed surface formations, watched naval bases and chokepoints, and undertook distant reconnaissance. Carrier escort required sustained submerged speed and coordination with surface and air anti-submarine units. Independent patrols placed greater weight on concealment, passive detection, and secure reporting.</p>"},
      {id:"support",title:"Support and availability",html:"<p>Nuclear propulsion increased submerged endurance but required specialized dockyard work, reactor personnel, radiological controls, and long training. Overhauls and crew qualification removed boats from immediate service even when they remained administratively active.</p>"},
      {id:"force-balance",title:"Force balance",html:"<p>America fielded twenty front-line SSNs in 1985. Germany held the larger attack-submarine force; Britain and Japan maintained smaller front-line nuclear branches. Comparative totals did not establish acoustic advantage, sensor quality, readiness, or crew proficiency.</p>"}
    ],
    related:[{href:"sturgeon-class-submarine.html",kicker:"First-line class",label:"Sturgeon Class"},{href:"los-angeles-class-submarine.html",kicker:"Fleet-escort class",label:"Los Angeles Class"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-guided-missile-submarines.html",kicker:"Strike complement",label:"American Guided-Missile Submarines"},{href:"american-carrier-force.html",kicker:"Screened formation",label:"American Carrier Force"}],
    facts:[["Front-line SSNs, 1985","20"],["Sturgeon","12 built; 8 front-line; 4 reserve"],["Sturgeon submerged displacement","4,800 t"],["Los Angeles","12 built and front-line"],["Los Angeles submerged displacement","6,900 t"],["Propulsion","Nuclear"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Sturgeon-class_submarine",label:"Wikipedia — historical Sturgeon-class context"},{href:"https://en.wikipedia.org/wiki/Los_Angeles-class_submarine",label:"Wikipedia — historical Los Angeles-class context"}]
  }),

  "american-guided-missile-submarines": americanNavalArticle({
    title:"American guided-missile submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American guided-missile submarines comprised four Triton-class and four Longbow-class nuclear boats. All eight remained front-line in 1985 as concealed conventional-strike platforms against fleets, ports, airfields, radar, communications, and other operational targets.",
    canon:"Triton and Longbow totals, introduction bands, 9,800- and 12,200-tonne submerged reference displacements, nuclear propulsion, conventional strategic-attack and submerged-VLS roles, active status, and absence of nuclear warheads are established. Personal names, missile models and counts, dimensions, speed, crew, reactors, sensors, torpedo fits, patrols, and target plans remain open.",
    sections:[
      {id:"formation",title:"Formation of the branch",html:"<p>The Navy retained responsibility for conventional sea-launched strategic strike. Submarines offered concealment and independent approach routes alongside carrier aircraft and missiles carried by battleships and cruisers. Nuclear propulsion gave the missile boats the endurance to remain distant from American ports and to reposition without routine surfacing.</p>"},
      {id:"triton",title:"Triton class",html:"<p>Four <a href='triton-class-submarine.html'>Triton-class SSGNs</a> entered service between 1965 and 1972. Each used a 9,800-tonne submerged reference displacement. The class established the front-line conventional strategic-missile role before vertical launch became the governing arrangement.</p>"},
      {id:"longbow",title:"Longbow class",html:"<p>Four <a href='longbow-class-submarine.html'>Longbow-class SSGNs</a> entered service between 1976 and 1983. At 12,200 tonnes submerged, they were the largest American submarines in the 1985 front-line register. Their defining registered role was submerged vertical-launch strike.</p>"},
      {id:"weapons",title:"Weapons and targets",html:"<p>The boats carried conventional warheads. Their mission was operational and strategic attack against fleets, naval bases, ports, airfields, radar stations, communications nodes, and related infrastructure. They did not form a ballistic-missile deterrent, and the United States maintained no strategically important SSBN force.</p>"},
      {id:"targeting",title:"Targeting and communications",html:"<p>Long-range strike required navigation, external reconnaissance, updated target information, communications, and mission planning. Moving fleets demanded a continuing reconnaissance chain. Fixed installations could be assigned in advance, but changes in readiness and air defence still affected attack planning.</p>"},
      {id:"employment",title:"Employment",html:"<p>SSGNs could operate separately from carrier groups or contribute to a larger conventional attack. Concealed approach complicated warning, while coordination with carrier aviation and surface missiles allowed attacks from several directions. Commanders also had to preserve communications without needlessly exposing the boat.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four Tritons and all four Longbows remained front-line on 1 January 1985. The register does not establish how many were simultaneously on patrol, undergoing maintenance, or available for immediate tasking.</p>"}
    ],
    related:[{href:"triton-class-submarine.html",kicker:"First generation",label:"Triton Class"},{href:"longbow-class-submarine.html",kicker:"VLS generation",label:"Longbow Class"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Attack complement",label:"American Nuclear Attack Submarines"},{href:"american-balanced-fleet.html",kicker:"Doctrine",label:"American Balanced Fleet"}],
    facts:[["Type","SSGN"],["Triton","4 boats; 9,800 t submerged"],["Longbow","4 boats; 12,200 t submerged"],["Introduction","1965–1983"],["Front-line, 1985","8"],["Warheads","Conventional only"]]
  }),

  "american-conventional-submarines": americanNavalArticle({
    title:"American postwar conventional submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American postwar conventional submarines were the twenty active Tang/Barbel-family diesel-electric boats retained for Arctic, Caribbean, coastal, chokepoint, and training missions in 1985. They formed a regional and confined-water branch beside the nuclear ocean fleet.",
    canon:"The twenty-boat active total, 1951–1965 introduction band, 2,700-tonne submerged reference displacement, diesel-electric propulsion, Arctic, Caribbean, and coastal-patrol role, and hull-number register are established. Division between Tang and Barbel subclasses, names, dimensions, speed, range, crew, weapons, sensors, modernization, bases, and individual service histories remain open.",
    sections:[
      {id:"origins",title:"Postwar program",html:"<p>The first new American submarine lineage after 1947 remained diesel-electric. Twenty boats entered service between 1951 and 1965, bridging the neutral-war fleet and the operational nuclear era. The controlling register groups them as a Tang/Barbel family because the exact division between subclasses remains unsettled.</p>"},
      {id:"design",title:"Registered characteristics",html:"<p>The <a href='tang-barbel-submarines.html'>Tang/Barbel family</a> uses a 2,700-tonne submerged reference value and diesel-electric propulsion. The registry assigns hull numbers SSK-01 through SSK-20. It does not yet settle individual names, dimensions, battery types, sensors, or weapon fits.</p>"},
      {id:"arctic",title:"Arctic patrol",html:"<p>Arctic missions covered northern approaches and passages where weather, ice, distance, and limited facilities constrained operations. Conventional boats could watch assigned sectors and support local exercises without drawing a nuclear attack boat from distant fleet duties.</p>"},
      {id:"caribbean",title:"Caribbean and coastal patrol",html:"<p>Caribbean routes, canal approaches, island passages, and continental coasts remained principal operating areas. Missions included surveillance, blockade preparation, ambush, and training with surface and air anti-submarine forces.</p>"},
      {id:"relationship",title:"Relationship with nuclear submarines",html:"<p>SSKs did not match the sustained speed or distant submerged endurance of SSNs. They required different support and could be assigned to regional patrols where long ocean pursuit was not the controlling requirement. Their retention prevented the entire submarine service from depending on reactor-trained crews and nuclear-maintenance capacity.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twenty boats counted as front-line on 1 January 1985. The register does not specify their individual readiness, modernization state, subclass, or distribution among regions.</p>"}
    ],
    related:[{href:"tang-barbel-submarines.html",kicker:"Design family",label:"Tang/Barbel Submarines"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Nuclear complement",label:"American Nuclear Attack Submarines"},{href:"american-hemisphere.html",kicker:"Operating region",label:"American Hemisphere"},{href:"cuba.html",kicker:"Caribbean contingency",label:"Cuba"}],
    facts:[["Family","Tang/Barbel"],["Type","SSK"],["Active, 1985","20"],["Introduction","1951–1965"],["Submerged displacement","2,700 t"],["Propulsion","Diesel-electric"],["Hull numbers","SSK-01–SSK-20"]]
  }),

  "tang-barbel-submarines": americanNavalArticle({
    title:"Tang/Barbel submarine family",
    category:"Submarine class",
    landscape:americanLineageLandscape,
    lead:"The Tang/Barbel family was the United States Navy's postwar diesel-electric submarine lineage. Twenty boats entered service between 1951 and 1965 and remained front-line in 1985 for Arctic, Caribbean, coastal, chokepoint, and training duties.",
    canon:"The combined family designation, twenty-boat total, 1951–1965 introduction band, 2,700-tonne submerged reference displacement, diesel-electric propulsion, front-line status, hull-number sequence, and registered roles are established. The Tang–Barbel division, personal names, detailed specifications, modernization blocks, bases, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The family followed the large neutral-war submarine inventory and preceded the mature American nuclear fleet. Construction extended from 1951 through 1965. The program provided new underwater hulls while nuclear propulsion remained experimental and then scarce.</p>"},
      {id:"classification",title:"Classification",html:"<p>The controlling register treats the twenty boats as a combined Tang/Barbel family and classifies them as SSKs. Hull numbers run from SSK-01 through SSK-20. The exact number assigned to each named design remains open.</p>"},
      {id:"characteristics",title:"Registered characteristics",html:"<p>Each registry entry carries a 2,700-tonne submerged reference displacement and diesel-electric propulsion. The figure is a force-register value rather than a complete design specification. Length, speed, range, crew, weapons, sensors, and battery arrangements have not been fixed.</p>"},
      {id:"service",title:"Service",html:"<p>The family patrolled Arctic approaches, the Caribbean, continental coasts, and confined passages. Boats also supported surveillance, blockade exercises, ambush training, and anti-submarine instruction for American surface and air units.</p>"},
      {id:"modernization",title:"Modernization",html:"<p>Boats entering service across fourteen years could not be assumed to have identical equipment by 1985. The local register has not assigned modernization blocks or retirement dates. All twenty nevertheless remained in the front-line total.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>The Tang/Barbel family made up the entire twenty-boat conventional front line and five-twelfths of the forty-eight-boat submarine force. Individual readiness and regional allocation remain unregistered.</p>"}
    ],
    related:americanSubmarineRelated,
    facts:[["Type","SSK"],["Built and active","20"],["Introduction","1951–1965"],["Submerged displacement","2,700 t"],["Propulsion","Diesel-electric"],["Hull numbers","SSK-01–SSK-20"]]
  }),

  "sturgeon-class-submarine": americanNavalArticle({
    title:"Sturgeon-class submarine",
    category:"Submarine class",
    landscape:americanLineageLandscape,
    lead:"The Sturgeon class was a twelve-boat American nuclear attack-submarine class introduced between 1970 and 1980. Eight boats remained front-line in 1985 as long-range attack submarines; four early boats stood in mobilization reserve.",
    canon:"The SSN classification, twelve-boat build, 1970–1980 introduction band, 4,800-tonne submerged reference displacement, nuclear propulsion, long-range attack role, and eight-active/four-reserve division are established. Names, hull numbers, dimensions, performance, reactor, crew, weapons, sensors, builders, bases, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Sturgeon followed the experimental and early operational American nuclear generations. Construction and commissioning extended from 1970 through 1980, placing the class in the period when quiet machinery and anechoic treatment became normal requirements for leading submarine fleets.</p>"},
      {id:"design",title:"Registered design",html:"<p>The class is registered as a nuclear-powered attack submarine with a 4,800-tonne submerged displacement. The register does not specify dimensions, reactor plant, speed, complement, torpedo fit, sensors, or individual builders.</p>"},
      {id:"role",title:"Role",html:"<p>Sturgeons were assigned long-range attack. This included hunting submarines and surface ships, watching routes and bases, and conducting reconnaissance at distances that placed a premium on submerged endurance.</p>"},
      {id:"service",title:"Service",html:"<p>The class overlapped the arrival of Los Angeles boats after 1978. Sturgeons continued front-line patrols while the newer class increasingly assumed fleet-attack and carrier-escort work.</p>"},
      {id:"reserve",title:"Mobilization reserve",html:"<p>Four early boats had entered mobilization reserve by 1 January 1985. They remained part of the class inventory but did not count toward the twenty-boat front-line SSN total.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Eight of twelve boats remained front-line. Their precise readiness, overhaul condition, regional assignment, and patrol state are not established.</p>"}
    ],
    related:[{href:"american-nuclear-attack-submarines.html",kicker:"Type history",label:"American Nuclear Attack Submarines"},{href:"los-angeles-class-submarine.html",kicker:"Successor class",label:"Los Angeles Class"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"iceland-crisis.html",kicker:"Atlantic setting",label:"Iceland Crisis"}],
    facts:[["Type","SSN"],["Built","12"],["Introduced","1970–1980"],["Submerged displacement","4,800 t"],["Front-line, 1985","8"],["Mobilization reserve","4"],["Role","Long-range attack"]]
  }),

  "los-angeles-class-submarine": americanNavalArticle({
    title:"Los Angeles-class submarine",
    category:"Submarine class",
    landscape:americanLineageLandscape,
    lead:"The Los Angeles class was a twelve-boat American nuclear attack-submarine class introduced between 1978 and 1985. All twelve boats were front-line in 1985 for fleet attack and carrier escort.",
    canon:"The SSN classification, twelve-boat build and active total, 1978–1985 introduction band, 6,900-tonne submerged reference displacement, nuclear propulsion, and fleet-attack and carrier-escort roles are established. Names, hull numbers, dimensions, speed, reactor, crew, weapons, sensors, builders, bases, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Los Angeles followed Sturgeon and entered service from 1978. The class was built for the mature balanced fleet, in which large carrier formations required submerged escorts able to remain with them across ocean distances.</p>"},
      {id:"design",title:"Registered design",html:"<p>The class is registered as a nuclear-powered attack submarine with a 6,900-tonne submerged displacement. Detailed dimensions, performance, reactor plant, crew, weapons, sensors, and individual construction records remain open.</p>"},
      {id:"fleet-attack",title:"Fleet attack",html:"<p>Fleet-attack missions placed the boats against hostile submarines and surface formations. They could range ahead of an American force, watch likely approach routes, and report or attack contacts according to the applicable rules of engagement.</p>"},
      {id:"carrier-escort",title:"Carrier escort",html:"<p>The registered carrier-escort role linked Los Angeles boats to the nine American fleet carriers. A submerged escort supplemented destroyers, frigates, patrol aircraft, and shipborne helicopters in the anti-submarine screen.</p>"},
      {id:"production",title:"Introduction",html:"<p>Twelve boats entered service during the eight years from 1978 through 1985. The register does not divide them into production flights or list differences among early and late boats.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twelve boats remained front-line on 1 January 1985. They formed three-fifths of the active American SSN force.</p>"}
    ],
    related:[{href:"american-nuclear-attack-submarines.html",kicker:"Type history",label:"American Nuclear Attack Submarines"},{href:"sturgeon-class-submarine.html",kicker:"Earlier class",label:"Sturgeon Class"},{href:"american-carrier-force.html",kicker:"Screened formation",label:"American Carrier Force"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"}],
    facts:[["Type","SSN"],["Built","12"],["Introduced","1978–1985"],["Submerged displacement","6,900 t"],["Front-line, 1985","12"],["Roles","Fleet attack; carrier escort"]]
  }),

  "triton-class-submarine": americanNavalArticle({
    title:"Triton-class submarine",
    category:"Submarine class",
    landscape:americanLineageLandscape,
    lead:"The Triton class was a four-boat American nuclear guided-missile-submarine class introduced between 1965 and 1972. It established the Navy's concealed conventional strategic-missile branch before submerged vertical launch became standard in the later Longbow class.",
    canon:"The SSGN classification, four-boat build and active total, 1965–1972 introduction band, 9,800-tonne submerged reference displacement, nuclear propulsion, conventional strategic-missile role, and continued 1985 service are established. Names, hull numbers, dimensions, reactor, speed, crew, missile arrangement and count, other weapons, sensors, bases, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Triton entered service during the period in which operational nuclear submarines and submerged missile launch became established naval technologies. The class gave the United States a purpose-built undersea complement to conventional strike by carrier aircraft and missile-armed surface ships.</p>"},
      {id:"design",title:"Registered design",html:"<p>The class is registered as a nuclear-powered guided-missile submarine with a 9,800-tonne submerged displacement. The record does not yet specify its missile arrangement, missile count, torpedo armament, reactor plant, dimensions, speed, or crew.</p>"},
      {id:"mission",title:"Mission",html:"<p>The registered role was conventional strategic missile attack. Assigned targets could include ports, airfields, radar and communications sites, naval infrastructure, and fleets when adequate targeting information was available.</p>"},
      {id:"warheads",title:"Conventional armament",html:"<p>Triton carried no nuclear warheads. The class is consequently designated SSGN rather than SSBN. Its strike power belonged to campaign planning and conventional escalation rather than an atomic deterrent patrol.</p>"},
      {id:"longbow",title:"Relationship to Longbow",html:"<p>Longbow entered service from 1976 with submerged vertical launch and a higher registered displacement. Triton remained in service beside the newer class instead of being immediately replaced.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four boats remained front-line on 1 January 1985. Patrol state, maintenance availability, modernization, and regional allocation are not established.</p>"}
    ],
    related:[{href:"american-guided-missile-submarines.html",kicker:"Type history",label:"American Guided-Missile Submarines"},{href:"longbow-class-submarine.html",kicker:"Successor class",label:"Longbow Class"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"}],
    facts:[["Type","SSGN"],["Built","4"],["Introduced","1965–1972"],["Submerged displacement","9,800 t"],["Front-line, 1985","4"],["Role","Conventional strategic missile attack"]]
  }),

  "longbow-class-submarine": americanNavalArticle({
    title:"Longbow-class submarine",
    category:"Submarine class",
    landscape:americanLineageLandscape,
    lead:"The Longbow class was a four-boat American nuclear guided-missile-submarine class introduced between 1976 and 1983. Its submerged vertical-launch system supplied concealed conventional strike at a registered submerged displacement of 12,200 tonnes.",
    canon:"The SSGN classification, four-boat build and active total, 1976–1983 introduction band, 12,200-tonne submerged reference displacement, nuclear propulsion, submerged-VLS role, conventional warheads, and continued 1985 service are established. Names, hull numbers, dimensions, reactor, speed, crew, missile model and count, other weapons, sensors, builders, bases, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Longbow followed the Triton class and entered service from 1976. It belonged to the 1970s generation of nuclear SSGNs, quieter submarine construction, and early vertical-launch systems.</p>"},
      {id:"design",title:"Registered design",html:"<p>The class is registered as a nuclear-powered guided-missile submarine displacing 12,200 tonnes submerged. It was the largest American submarine class in the 1985 front-line register. Detailed dimensions, machinery, crew, sensors, and non-missile armament remain open.</p>"},
      {id:"vls",title:"Vertical-launch system",html:"<p>Submerged vertical launch was the class's defining registered role. It allowed missiles to be fired without the older launch arrangement associated with Triton. The local register does not yet fix launcher count or missile model.</p>"},
      {id:"mission",title:"Mission",html:"<p>Longbow boats attacked operational targets with conventional warheads. Plans could include naval bases, ports, airfields, radar, communications, and coordinated attacks on fleets supported by external reconnaissance.</p>"},
      {id:"employment",title:"Employment",html:"<p>A Longbow could approach independently or participate in a multi-axis fleet strike with carriers, battleships, and cruisers. Target updates and secure communications remained necessary, particularly against moving ships.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four boats remained front-line on 1 January 1985. Together with four Tritons they formed the eight-boat American SSGN force.</p>"}
    ],
    related:[{href:"american-guided-missile-submarines.html",kicker:"Type history",label:"American Guided-Missile Submarines"},{href:"triton-class-submarine.html",kicker:"Earlier class",label:"Triton Class"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-postwar-battleships.html",kicker:"Surface strike",label:"American Battleship Force"}],
    facts:[["Type","SSGN"],["Built","4"],["Introduced","1976–1983"],["Submerged displacement","12,200 t"],["Front-line, 1985","4"],["Role","Submerged VLS strike"],["Warheads","Conventional"]]
  })
});
