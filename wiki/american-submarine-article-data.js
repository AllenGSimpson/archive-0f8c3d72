window.deepArticles = window.deepArticles || {};

const americanSubmarineRelated = [
  {href:"us-navy-submarine-force.html",kicker:"Service history",label:"United States Submarine Force"},
  {href:"american-nuclear-attack-submarines.html",kicker:"Nuclear branch",label:"American Nuclear Attack Submarines"},
  {href:"american-guided-missile-submarines.html",kicker:"Experimental branch",label:"American Guided-Missile Submarines"},
  {href:"american-conventional-submarines.html",kicker:"Conventional branch",label:"American Conventional Submarines"},
  {href:"tang-barbel-submarines.html",kicker:"Conventional proposal",label:"Tang/Barbel Proposal"},
  {href:"sturgeon-class-submarine.html",kicker:"Attack-submarine proposal",label:"Sturgeon Proposal"},
  {href:"los-angeles-class-submarine.html",kicker:"Fleet-submarine proposal",label:"Los Angeles Proposal"},
  {href:"triton-class-submarine.html",kicker:"Missile-submarine proposal",label:"Triton Proposal"},
  {href:"longbow-class-submarine.html",kicker:"VLS-submarine proposal",label:"Longbow Proposal"}
];

Object.assign(window.deepArticles, {
  "us-navy-submarine-force": americanNavalArticle({
    title:"United States Navy submarine force, 1947–1985",
    category:"Submarine history",
    landscape:americanLineageLandscape,
    lead:"The United States Navy inherited eighty-six submarines in 1947, sixty-two operational, and later maintained a capable nuclear reconnaissance-and-attack elite, a conventional coastal and training branch, and a very small experimental guided-missile branch. Exact postwar class names and 1985 totals remain open.",
    canon:"The 1947 totals, the three postwar branches, their bounded roles, and conventional guided-missile armament are established. Tang/Barbel, Sturgeon, Los Angeles, Triton, and Longbow survive as unselected proposal studies; none supplies the operational 1985 ledger, whose classes, totals, specifications, bases, readiness, patrol cycles, and individual histories remain open.",
    sections:[
      {id:"inheritance",title:"1947 inheritance",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-j5m2w writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><p>The Navy held eighty-six submarines afloat and sixty-two operational on 31 December 1947. The United States had not entered the general war, and no American boat had been lost in wartime patrols. The difference between the afloat and operational totals consisted of older hulls, maintenance cases, and boats not ready for immediate service.</p><p>The inheritance supplied hulls and trained personnel for experiments and instruction, but it did not remove the need for new postwar designs.</p><!-- altwwii-writer-block:end -->"},
      {id:"branches",title:"Postwar branches",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-g8q4n writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The postwar force comprised a capable nuclear reconnaissance-and-attack elite, a conventional coastal and training branch, and a very small experimental guided-missile branch. The five named studies are proposal history, not the class allocation of those operational branches.</p><!-- altwwii-writer-block:end -->"},
      {id:"missions",title:"Missions",html:"<p>Submarines served as scouts, fleet-support attackers, submarine hunters, and independent raiders. The conventional branch covered coastal and training work, while experimental guided-missile boats carried conventional strike weapons.</p>"},
      {id:"institution",title:"Institutional scale",html:"<p>America never fought the unrestricted Pacific submarine war that would have validated a much larger submarine institution. The postwar force was capable but smaller than the former forty-eight-boat front-line reconstruction implied.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Exact class names, hull totals, reserve divisions, readiness, overhaul state, and deployments require a replacement registry.</p>"}
    ],
    related:americanSubmarineRelated,
    facts:[["Submarines afloat, 1947","86"],["Operational, 1947","62"],["Nuclear branch","Reconnaissance and attack elite"],["Conventional branch","Coastal and training"],["Guided-missile branch","Very small and experimental"],["Exact 1985 totals","Open"]]
  }),

  "american-nuclear-attack-submarines": americanNavalArticle({
    title:"American nuclear attack submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American nuclear attack submarines formed a capable but bounded reconnaissance-and-attack elite. They scouted, supported fleet operations, hunted ships and submarines, and operated as independent raiders; their exact postwar classes and 1985 strength remain open.",
    canon:"The nuclear reconnaissance-and-attack branch and its scout, fleet-support attack, submarine-hunting, and independent-raiding roles are established. Sturgeon and Los Angeles survive as unselected design proposals; their twenty-boat model, reserve counts, introduction bands, and displacements do not identify the operational classes, totals, or histories.",
    sections:[
      {id:"registry",title:"Proposal archive",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-h2v6m writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The eight-front-line Sturgeon and twelve-front-line Los Angeles accounting is retained as proposal force modeling. Neither design entered service under that class identity, and the operational nuclear-attack total remains open.</p><!-- altwwii-writer-block:end -->"},
      {id:"role",title:"Established role",html:"<p>The nuclear branch was an elite force for reconnaissance, attack, fleet support, submarine hunting, and independent raiding. Its limited scale reflected the absence of an American unrestricted Pacific submarine war.</p>"},
      {id:"support",title:"Availability",html:"<p>Reactor maintenance, trained crews, weapons, intelligence, communications, and dockyard capacity constrained availability even within a small elite force.</p>"},
      {id:"open",title:"Open details",html:"<p>Class names, hull totals, introduction dates, reserve categories, displacements, reactors, weapons, sensors, bases, patrols, and individual histories await reconstruction.</p>"}
    ],
    related:[{href:"sturgeon-class-submarine.html",kicker:"Design proposal",label:"Sturgeon Proposal"},{href:"los-angeles-class-submarine.html",kicker:"Design proposal",label:"Los Angeles Proposal"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-guided-missile-submarines.html",kicker:"Experimental strike branch",label:"American Guided-Missile Submarines"},{href:"american-carrier-force.html",kicker:"Fleet relationship",label:"American Carrier Force"}],
    facts:[["Branch","Nuclear reconnaissance and attack"],["Institutional scale","Capable elite"],["Established roles","Scout · fleet support · attack · raiding"],["Design archive","Sturgeon and Los Angeles proposals"],["Exact 1985 total","Open"]]
  }),

  "american-guided-missile-submarines": americanNavalArticle({
    title:"American guided-missile submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"The United States maintained a very small experimental guided-missile-submarine branch for concealed conventional strike. Its postwar class names, launch arrangements, and exact 1985 strength remain open.",
    canon:"The very small experimental guided-missile branch and its conventional armament are established. Triton and Longbow survive as unselected proposal studies; their eight-boat model, dates, displacements, and submerged-VLS arrangement do not identify the operational class, total, or history.",
    sections:[
      {id:"registry",title:"Proposal archive",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-i5m9r writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The four-boat Triton and four-boat Longbow schemes are proposal force models. Neither entered service under that class identity, and the operational branch remains very small and experimental.</p><!-- altwwii-writer-block:end -->"},
      {id:"role",title:"Established role",html:"<p>Guided-missile submarines offered concealed approach and conventional attack against operational targets. The branch did not establish a large ballistic-missile deterrent institution.</p>"},
      {id:"open",title:"Open details",html:"<p>Class identities, hull totals, propulsion, launch arrangements, missile models and counts, dates, displacements, sensors, bases, patrols, and individual histories require reconstruction.</p>"}
    ],
    related:[{href:"triton-class-submarine.html",kicker:"Design proposal",label:"Triton Proposal"},{href:"longbow-class-submarine.html",kicker:"Design proposal",label:"Longbow Proposal"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Principal nuclear branch",label:"American Nuclear Attack Submarines"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"}],
    facts:[["Branch","Guided-missile submarines"],["Scale","Very small"],["Character","Experimental"],["Warheads","Conventional"],["Design archive","Triton and Longbow proposals"],["Exact 1985 total","Open"]]
  }),

  "american-conventional-submarines": americanNavalArticle({
    title:"American postwar conventional submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American conventional submarines formed the coastal and training branch of the postwar submarine service. Tang/Barbel survives as an unselected twenty-boat proposal rather than the operational ledger; exact class names, specifications, and 1985 strength remain open.",
    canon:"The conventional coastal and training branch is established. The Tang/Barbel family survives as a proposal whose twenty-boat total, dates, displacement, and hull-number register do not identify commissioned submarines; operational class names, totals, propulsion details, and histories remain open.",
    sections:[
      {id:"registry",title:"Proposal archive",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-j7p3c writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The twenty-boat Tang/Barbel accounting, SSK-01–SSK-20 register, 1951–65 band, and 2,700-tonne figure belong to an unselected design proposal. Exact operational class names and totals remain open.</p><!-- altwwii-writer-block:end -->"},
      {id:"role",title:"Established role",html:"<p>Conventional submarines supplied coastal patrol and training capacity alongside the nuclear elite. They also preserved a non-reactor operating and instructional base within the service.</p>"},
      {id:"open",title:"Open details",html:"<p>Classes, hull totals, dates, propulsion arrangements, specifications, regional distribution, modernization, readiness, and individual histories await reconstruction.</p>"}
    ],
    related:[{href:"tang-barbel-submarines.html",kicker:"Design proposal",label:"Tang/Barbel Proposal"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Nuclear complement",label:"American Nuclear Attack Submarines"},{href:"american-hemisphere.html",kicker:"Strategic setting",label:"American Hemisphere"}],
    facts:[["Branch","Conventional submarines"],["Established roles","Coastal duty · training"],["Design archive","Tang/Barbel proposal"],["Exact class names","Open"],["Exact 1985 total","Open"]]
  }),

  "tang-barbel-submarines": americanUnbuiltNavalProposal({
    title:"Tang/Barbel conventional-submarine proposal",
    block:"wb-g-20260816-t2a3n",
    lead:"The Tang/Barbel family was a twenty-boat conventional-submarine proposal for coastal duty and training. The combined family remained a planning construct and was not selected as the operational postwar class lineage.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-t2a3n writer=g kind=revision created=2026-08-16T12:20:00-06:00 -->The Tang/Barbel family existed as a conventional-submarine proposal but was not selected for construction under that combined identity. Its twenty-boat ledger is a planning objective. Operational conventional-submarine class names and totals remain open.<sup class='canon-note' data-provenance='a'>[a]</sup><!-- altwwii-writer-block:end -->",
    status:"Proposal only; not selected",
    proposal:"The study projected twenty 2,700-tonne conventional boats numbered SSK-01 through SSK-20, with an intended 1951–65 entry window and coastal, training, and limited front-line duties.",
    disposition:"The combined Tang/Barbel scheme did not become the accepted production lineage. Its hull numbers and front-line accounting remained planning assumptions.",
    relationship:"The United States maintained a conventional coastal and training submarine branch, but the classes, totals, propulsion details, bases, and 1985 readiness of that branch remain open.",
    related:[{href:"american-conventional-submarines.html",kicker:"Operational branch",label:"American Conventional Submarines"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"sturgeon-class-submarine.html",kicker:"Nuclear proposal",label:"Sturgeon Proposal"}],
    facts:[["Design objective","20 boats"],["Planning hull numbers","SSK-01–SSK-20"],["Projected entry window","1951–1965"],["Design full load","2,700 t"],["Proposed branch","Conventional coastal and training"]]
  }),

  "sturgeon-class-submarine": americanUnbuiltNavalProposal({
    title:"Sturgeon-class nuclear-attack-submarine proposal",
    block:"wb-g-20260816-s3t4u",
    lead:"The Sturgeon class was a twelve-boat nuclear attack-submarine proposal for reconnaissance, fleet support, and independent hunting. It remained a proposal and was not selected as the identity of the operational nuclear-attack branch.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-s3t4u writer=g kind=revision created=2026-08-16T12:20:00-06:00 -->The Sturgeon class existed as a nuclear attack-submarine proposal but was not selected for construction under that identity. Its twelve-boat and reserve figures are planning data. Operational nuclear-attack classes and totals remain open.<sup class='canon-note' data-provenance='a'>[a]</sup><!-- altwwii-writer-block:end -->",
    status:"Proposal only; not selected",
    proposal:"The study projected twelve 4,800-tonne nuclear boats entering over 1970–80, with an eight-front-line/four-reserve force model and scouting, submarine-hunting, and independent-raiding duties.",
    disposition:"The named class did not proceed as the production design. The front-line and reserve split was a model for force planning, not a 1985 service allocation.",
    relationship:"A capable American nuclear reconnaissance-and-attack elite did serve as scouts, fleet-support attackers, submarine hunters, and raiders. Its accepted class identities and strength remain open.",
    related:[{href:"american-nuclear-attack-submarines.html",kicker:"Operational branch",label:"American Nuclear Attack Submarines"},{href:"los-angeles-class-submarine.html",kicker:"Later proposal",label:"Los Angeles Proposal"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"}],
    facts:[["Design objective","12 boats"],["Projected entry window","1970–1980"],["Design full load","4,800 t"],["Planning allocation","8 front-line · 4 reserve"],["Proposed propulsion","Nuclear"]]
  }),

  "los-angeles-class-submarine": americanUnbuiltNavalProposal({
    title:"Los Angeles-class fleet-attack-submarine proposal",
    block:"wb-g-20260816-l1o2s",
    lead:"The Los Angeles class was a twelve-boat nuclear fleet-attack-submarine proposal optimized for carrier escort and fast fleet support. It was not selected as the operational class identity.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-l1o2s writer=g kind=revision created=2026-08-16T12:20:00-06:00 -->The Los Angeles class existed as a nuclear attack-submarine proposal but was not selected for construction under that identity. Its twelve-boat 1978–85 program is planning data. The active nuclear-attack registry remains open.<sup class='canon-note' data-provenance='a'>[a]</sup><!-- altwwii-writer-block:end -->",
    status:"Proposal only; not selected",
    proposal:"The design study called for twelve 6,900-tonne nuclear boats entering over 1978–85, with fleet-attack, carrier-escort, scouting, and submarine-hunting assignments.",
    disposition:"The named twelve-boat scheme did not become the production class. Its projected active total and fleet assignment do not establish a Los Angeles class in service.",
    relationship:"American nuclear attack submarines supported fleet groups and also operated as scouts, hunters, and independent raiders. Their accepted classes, totals, reactors, weapons, and 1985 allocation remain open.",
    related:[{href:"american-nuclear-attack-submarines.html",kicker:"Operational branch",label:"American Nuclear Attack Submarines"},{href:"sturgeon-class-submarine.html",kicker:"Earlier proposal",label:"Sturgeon Proposal"},{href:"american-carrier-force.html",kicker:"Proposed fleet relationship",label:"American Carrier Force"}],
    facts:[["Design objective","12 boats"],["Projected entry window","1978–1985"],["Design full load","6,900 t"],["Proposed propulsion","Nuclear"],["Proposed role","Fleet attack and carrier escort"]]
  }),

  "triton-class-submarine": americanUnbuiltNavalProposal({
    title:"Triton-class guided-missile-submarine proposal",
    block:"wb-g-20260816-t3r4i",
    lead:"The Triton class was a four-boat nuclear guided-missile-submarine proposal for concealed conventional strike. It remained a proposal and was not selected as the identity of the Navy's small experimental missile-submarine branch.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-t3r4i writer=g kind=revision created=2026-08-16T12:20:00-06:00 -->The Triton class existed as a guided-missile-submarine proposal but was not selected for construction under that identity. Its four-boat 1965–72 program is planning data. American submarine-launched weapons in this branch were conventional, not nuclear.<sup class='canon-note' data-provenance='a'>[a]</sup><!-- altwwii-writer-block:end -->",
    status:"Proposal only; not selected",
    proposal:"The study projected four 9,800-tonne nuclear guided-missile submarines entering over 1965–72 for concealed conventional strike. The earlier 'strategic' label described reach and mission, not nuclear warheads.",
    disposition:"The named four-boat scheme did not proceed as the production class. Its projected active total and design figures remained proposal parameters.",
    relationship:"The United States maintained a very small experimental guided-missile-submarine branch armed for conventional strike. Its accepted class names, totals, and launch arrangements remain open.",
    related:[{href:"american-guided-missile-submarines.html",kicker:"Operational branch",label:"American Guided-Missile Submarines"},{href:"longbow-class-submarine.html",kicker:"Later proposal",label:"Longbow Proposal"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"}],
    facts:[["Design objective","4 boats"],["Projected entry window","1965–1972"],["Design full load","9,800 t"],["Proposed propulsion","Nuclear"],["Proposed armament","Conventional guided missiles"]]
  }),

  "longbow-class-submarine": americanUnbuiltNavalProposal({
    title:"Longbow-class vertical-launch-submarine proposal",
    block:"wb-g-20260816-l2o3n",
    lead:"The Longbow class was a four-boat nuclear guided-missile-submarine proposal built around submerged vertical launch for conventional strike. It remained a proposal and was not selected as the operational class identity.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-l2o3n writer=g kind=revision created=2026-08-16T12:20:00-06:00 -->The Longbow class existed as a vertical-launch guided-missile-submarine proposal but was not selected for construction under that identity. Its four-boat 1976–83 program is planning data. The operational experimental branch and its conventional armament remain separately established.<sup class='canon-note' data-provenance='a'>[a]</sup><!-- altwwii-writer-block:end -->",
    status:"Proposal only; not selected",
    proposal:"The study projected four 12,200-tonne nuclear boats entering over 1976–83 with submerged vertical-launch capacity for conventional guided missiles.",
    disposition:"The named class and its four-boat active allocation were not adopted. The vertical-launch arrangement remains a proposal feature and cannot be assigned to the accepted branch without further canon.",
    relationship:"A very small experimental American guided-missile-submarine branch existed for concealed conventional strike, but its class identities, totals, and launch arrangements remain open.",
    related:[{href:"american-guided-missile-submarines.html",kicker:"Operational branch",label:"American Guided-Missile Submarines"},{href:"triton-class-submarine.html",kicker:"Earlier proposal",label:"Triton Proposal"},{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"}],
    facts:[["Design objective","4 boats"],["Projected entry window","1976–1983"],["Design full load","12,200 t"],["Proposed propulsion","Nuclear"],["Proposed armament","Conventional submerged VLS"]]
  })
});
