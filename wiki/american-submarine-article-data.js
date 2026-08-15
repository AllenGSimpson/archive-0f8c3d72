window.deepArticles = window.deepArticles || {};

const americanSubmarineRelated = [
  {href:"us-navy-submarine-force.html",kicker:"Service history",label:"United States Submarine Force"},
  {href:"american-nuclear-attack-submarines.html",kicker:"Nuclear branch",label:"American Nuclear Attack Submarines"},
  {href:"american-guided-missile-submarines.html",kicker:"Experimental branch",label:"American Guided-Missile Submarines"},
  {href:"american-conventional-submarines.html",kicker:"Conventional branch",label:"American Conventional Submarines"}
];

Object.assign(window.deepArticles, {
  "us-navy-submarine-force": americanNavalArticle({
    title:"United States Navy submarine force, 1947–1985",
    category:"Submarine history",
    landscape:americanLineageLandscape,
    lead:"The United States Navy inherited eighty-six submarines in 1947, sixty-two operational, and later maintained a capable nuclear reconnaissance-and-attack elite, a conventional coastal and training branch, and a very small experimental guided-missile branch. Exact postwar class names and 1985 totals remain open.",
    canon:"The 1947 totals, the three postwar branches, their bounded roles, and conventional guided-missile armament are established. The former Tang/Barbel, Sturgeon, Los Angeles, Triton, and Longbow allocation and its exact 1985 ledger are withdrawn; replacement classes, totals, specifications, bases, readiness, patrol cycles, and individual histories remain open.",
    sections:[
      {id:"inheritance",title:"1947 inheritance",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-j5m2w writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><p>The Navy held eighty-six submarines afloat and sixty-two operational on 31 December 1947. The United States had not entered the general war, and no American boat had been lost in wartime patrols. The difference between the afloat and operational totals consisted of older hulls, maintenance cases, and boats not ready for immediate service.</p><p>The inheritance supplied hulls and trained personnel for experiments and instruction, but it did not remove the need for new postwar designs.</p><!-- altwwii-writer-block:end -->"},
      {id:"branches",title:"Postwar branches",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-g8q4n writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The postwar force comprised a capable nuclear reconnaissance-and-attack elite, a conventional coastal and training branch, and a very small experimental guided-missile branch. The former named-class allocation overstated the service and is not active canon.</p><!-- altwwii-writer-block:end -->"},
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
    canon:"The nuclear reconnaissance-and-attack branch and its scout, fleet-support attack, submarine-hunting, and independent-raiding roles are established. The former Sturgeon and Los Angeles class allocation, twenty-boat front line, build and reserve counts, introduction bands, and displacements are withdrawn; replacement class names, totals, specifications, and histories remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-h2v6m writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The former eight-front-line Sturgeon and twelve-front-line Los Angeles accounting is not active canon. It belonged to a reconstruction that made the American postwar submarine service larger and more historically derivative than the controlling reference permits.</p><!-- altwwii-writer-block:end -->"},
      {id:"role",title:"Established role",html:"<p>The nuclear branch was an elite force for reconnaissance, attack, fleet support, submarine hunting, and independent raiding. Its limited scale reflected the absence of an American unrestricted Pacific submarine war.</p>"},
      {id:"support",title:"Availability",html:"<p>Reactor maintenance, trained crews, weapons, intelligence, communications, and dockyard capacity constrained availability even within a small elite force.</p>"},
      {id:"open",title:"Open details",html:"<p>Class names, hull totals, introduction dates, reserve categories, displacements, reactors, weapons, sensors, bases, patrols, and individual histories await reconstruction.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-guided-missile-submarines.html",kicker:"Experimental strike branch",label:"American Guided-Missile Submarines"},{href:"american-carrier-force.html",kicker:"Fleet relationship",label:"American Carrier Force"}],
    facts:[["Branch","Nuclear reconnaissance and attack"],["Institutional scale","Capable elite"],["Established roles","Scout · fleet support · attack · raiding"],["Former Sturgeon/Los Angeles ledger","Withdrawn"],["Exact 1985 total","Open"]]
  }),

  "american-guided-missile-submarines": americanNavalArticle({
    title:"American guided-missile submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"The United States maintained a very small experimental guided-missile-submarine branch for concealed conventional strike. Its postwar class names, launch arrangements, and exact 1985 strength remain open.",
    canon:"The very small experimental guided-missile branch and its conventional armament are established. The former Triton and Longbow classes, eight-boat front line, build totals, dates, displacements, and submerged-VLS allocation are withdrawn; replacement class names, totals, specifications, and histories remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-i5m9r writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The former four-boat Triton and four-boat Longbow accounting is not active canon. It overstated the branch that the controlling reference now bounds as very small and experimental.</p><!-- altwwii-writer-block:end -->"},
      {id:"role",title:"Established role",html:"<p>Guided-missile submarines offered concealed approach and conventional attack against operational targets. The branch did not establish a large ballistic-missile deterrent institution.</p>"},
      {id:"open",title:"Open details",html:"<p>Class identities, hull totals, propulsion, launch arrangements, missile models and counts, dates, displacements, sensors, bases, patrols, and individual histories require reconstruction.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Principal nuclear branch",label:"American Nuclear Attack Submarines"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"}],
    facts:[["Branch","Guided-missile submarines"],["Scale","Very small"],["Character","Experimental"],["Warheads","Conventional"],["Former Triton/Longbow ledger","Withdrawn"],["Exact 1985 total","Open"]]
  }),

  "american-conventional-submarines": americanNavalArticle({
    title:"American postwar conventional submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American conventional submarines formed the coastal and training branch of the postwar submarine service. Their exact class names, specifications, and 1985 strength remain open after withdrawal of the former Tang/Barbel ledger.",
    canon:"The conventional coastal and training branch is established. The former Tang/Barbel family, twenty-boat total, dates, displacement, hull-number register, and exact 1985 allocation are withdrawn; replacement class names, totals, propulsion details, missions beyond the bounded role, and histories remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-j7p3c writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The former twenty-boat Tang/Barbel accounting, SSK-01–SSK-20 register, 1951–65 band, and 2,700-tonne specification are not active canon. Exact postwar class names and totals remain open.</p><!-- altwwii-writer-block:end -->"},
      {id:"role",title:"Established role",html:"<p>Conventional submarines supplied coastal patrol and training capacity alongside the nuclear elite. They also preserved a non-reactor operating and instructional base within the service.</p>"},
      {id:"open",title:"Open details",html:"<p>Classes, hull totals, dates, propulsion arrangements, specifications, regional distribution, modernization, readiness, and individual histories await reconstruction.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Nuclear complement",label:"American Nuclear Attack Submarines"},{href:"american-hemisphere.html",kicker:"Strategic setting",label:"American Hemisphere"}],
    facts:[["Branch","Conventional submarines"],["Established roles","Coastal duty · training"],["Former Tang/Barbel ledger","Withdrawn"],["Exact class names","Open"],["Exact 1985 total","Open"]]
  }),

  "tang-barbel-submarines": americanNavalArticle({
    title:"Tang/Barbel submarine reconstruction",
    category:"Legacy record",
    landscape:americanLineageLandscape,
    lead:"The former Tang/Barbel family page is retained as a legacy record. Its combined class identity, twenty-boat ledger, dates, displacement, hull numbers, and 1985 status are not active canon.",
    canon:"No Tang/Barbel postwar family allocation is established. Active canon fixes a conventional coastal and training branch; its replacement class names, totals, and specifications remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-k4n8v writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The Tang/Barbel label, twenty-boat total, 1951–65 introduction band, 2,700-tonne displacement, SSK-01–SSK-20 register, and front-line status belonged to the withdrawn submarine reconstruction.</p><!-- altwwii-writer-block:end -->"},
      {id:"context",title:"Established branch",html:"<p>The United States maintained conventional submarines for coastal duty and training. The controlling reference does not assign that branch a class name or hull total.</p>"},
      {id:"open",title:"Open details",html:"<p>Class identities, dates, totals, propulsion, specifications, modernization, bases, readiness, and individual histories remain open.</p>"}
    ],
    related:americanSubmarineRelated,
    facts:[["Former identity","Tang/Barbel family"],["Current status","Withdrawn reconstruction"],["Established branch","Conventional coastal and training"],["Exact class and 1985 total","Open"]]
  }),

  "sturgeon-class-submarine": americanNavalArticle({
    title:"Sturgeon-class submarine reconstruction",
    category:"Legacy record",
    landscape:americanLineageLandscape,
    lead:"The former Sturgeon-class page is retained as a legacy record. Its twelve-boat build, dates, displacement, reserve division, and 1985 status are not active canon.",
    canon:"No Sturgeon-class allocation is established. Active canon fixes a capable nuclear reconnaissance-and-attack elite; its replacement class names, totals, and specifications remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-l6q2m writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The Sturgeon name, twelve-boat build, 1970–80 band, 4,800-tonne displacement, and eight-front-line/four-reserve allocation belonged to the withdrawn submarine reconstruction.</p><!-- altwwii-writer-block:end -->"},
      {id:"context",title:"Established branch",html:"<p>American nuclear attack submarines served as scouts, fleet-support attackers, submarine hunters, and independent raiders. The controlling reference does not assign those duties to a Sturgeon class.</p>"},
      {id:"open",title:"Open details",html:"<p>Class identities, dates, totals, displacement, reactor, weapons, sensors, bases, readiness, and individual histories remain open.</p>"}
    ],
    related:americanSubmarineRelated,
    facts:[["Former identity","Sturgeon class"],["Current status","Withdrawn reconstruction"],["Established branch","Nuclear reconnaissance and attack"],["Exact class and 1985 total","Open"]]
  }),

  "los-angeles-class-submarine": americanNavalArticle({
    title:"Los Angeles-class submarine reconstruction",
    category:"Legacy record",
    landscape:americanLineageLandscape,
    lead:"The former Los Angeles-class page is retained as a legacy record. Its twelve-boat build, dates, displacement, carrier-escort assignment, and 1985 status are not active canon.",
    canon:"No Los Angeles-class allocation is established. Active canon fixes a capable nuclear reconnaissance-and-attack elite; its replacement class names, totals, and specifications remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-m9v5h writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The Los Angeles name, twelve-boat build and front-line total, 1978–85 band, 6,900-tonne displacement, and class-specific fleet-attack and carrier-escort assignment belonged to the withdrawn submarine reconstruction.</p><!-- altwwii-writer-block:end -->"},
      {id:"context",title:"Established branch",html:"<p>American nuclear attack submarines supported fleets and also operated as scouts, hunters, and independent raiders. The controlling reference does not assign those duties to a Los Angeles class.</p>"},
      {id:"open",title:"Open details",html:"<p>Class identities, dates, totals, displacement, reactor, weapons, sensors, bases, readiness, and individual histories remain open.</p>"}
    ],
    related:americanSubmarineRelated,
    facts:[["Former identity","Los Angeles class"],["Current status","Withdrawn reconstruction"],["Established branch","Nuclear reconnaissance and attack"],["Exact class and 1985 total","Open"]]
  }),

  "triton-class-submarine": americanNavalArticle({
    title:"Triton-class submarine reconstruction",
    category:"Legacy record",
    landscape:americanLineageLandscape,
    lead:"The former Triton-class page is retained as a legacy record. Its four-boat nuclear guided-missile program, dates, displacement, and 1985 status are not active canon.",
    canon:"No Triton-class allocation is established. Active canon fixes a very small experimental guided-missile-submarine branch with conventional armament; its replacement class names, totals, and specifications remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-n2c7p writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The Triton name, four-boat build and front-line total, 1965–72 band, 9,800-tonne displacement, and class-specific strategic-strike assignment belonged to the withdrawn submarine reconstruction.</p><!-- altwwii-writer-block:end -->"},
      {id:"context",title:"Established branch",html:"<p>The United States maintained a very small experimental guided-missile-submarine branch armed for conventional strike. The controlling reference does not assign that role to a Triton class.</p>"},
      {id:"open",title:"Open details",html:"<p>Class identities, dates, totals, propulsion, displacement, launch arrangements, weapons, sensors, bases, readiness, and individual histories remain open.</p>"}
    ],
    related:americanSubmarineRelated,
    facts:[["Former identity","Triton class"],["Current status","Withdrawn reconstruction"],["Established branch","Very small experimental guided-missile force"],["Warheads","Conventional"],["Exact class and 1985 total","Open"]]
  }),

  "longbow-class-submarine": americanNavalArticle({
    title:"Longbow-class submarine reconstruction",
    category:"Legacy record",
    landscape:americanLineageLandscape,
    lead:"The former Longbow-class page is retained as a legacy record. Its four-boat nuclear guided-missile program, dates, displacement, vertical-launch allocation, and 1985 status are not active canon.",
    canon:"No Longbow-class allocation is established. Active canon fixes a very small experimental guided-missile-submarine branch with conventional armament; its replacement class names, totals, and specifications remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-p5r9k writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The Longbow name, four-boat build and front-line total, 1976–83 band, 12,200-tonne displacement, and class-specific submerged-VLS assignment belonged to the withdrawn submarine reconstruction.</p><!-- altwwii-writer-block:end -->"},
      {id:"context",title:"Established branch",html:"<p>The United States maintained a very small experimental guided-missile-submarine branch armed for conventional strike. The controlling reference does not assign that role or a particular launch arrangement to a Longbow class.</p>"},
      {id:"open",title:"Open details",html:"<p>Class identities, dates, totals, propulsion, displacement, launch arrangements, weapons, sensors, bases, readiness, and individual histories remain open.</p>"}
    ],
    related:americanSubmarineRelated,
    facts:[["Former identity","Longbow class"],["Current status","Withdrawn reconstruction"],["Established branch","Very small experimental guided-missile force"],["Warheads","Conventional"],["Exact class and 1985 total","Open"]]
  })
});
