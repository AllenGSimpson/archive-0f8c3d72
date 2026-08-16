window.deepArticles = window.deepArticles || {};

const japaneseSubmarineRoleTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>School</th><th>Established 1985 mission</th><th>Registry status</th></tr></thead><tbody><tr><td>High-speed conventional attack</td><td>Coastal denial, strait ambush, training, and economical ocean patrol</td><td>Role fixed; class sequence and total open</td></tr><tr><td>Nuclear fleet attack</td><td>Carrier screening, submarine hunting, distant reconnaissance, and independent attack</td><td>School fixed; class names and total open</td></tr></tbody></table></div>";

const japaneseTransportRoleTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Development basis</th><th>Established mission</th><th>Registry status</th></tr></thead><tbody><tr><td>Wartime transport submarines and special-force carriage</td><td>Marines, swimmers, minisubmarines, high-value cargo, and surprise lodgment</td><td>Role fixed; postwar classes and total open</td></tr></tbody></table></div>";

const japaneseSubmarineClassCanon = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
const japaneseSubmarineClassExtrapolation = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

Object.assign(window.deepArticles, {
  "japanese-attack-submarines": japaneseNavalArticle({
    title:"Japanese postwar attack submarines",
    category:"Submarine development",
    landscape:lineageLandscape,
    lead:`Japan maintains both a high-speed conventional attack school and a nuclear fleet-attack school. Conventional boats provide economical coastal, strait, training, and ocean-patrol capacity; nuclear boats screen carrier forces, hunt submarines, scout at distance, and attack independently.${japaneseSubmarineClassCanon} Their missions are established, but the former Type 30/38 class sequence and the fixed thirty-SSK and sixteen-SSN totals are no longer active canon.${japaneseSubmarineClassExtrapolation}`,
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-b2d8q writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->The conventional and nuclear attack schools, their development bases, and their 1985 missions are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type 30 Uzushio, Type 38 Yūshio, Type 24, and nuclear Type 38 identities, introduction bands, build totals, and fixed 1985 allocations belong to the superseded submarine reconstruction and are reopened.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"schools",title:"Established attack schools",html:`${japaneseSubmarineRoleTable}<p>The two schools overlap in submarine warfare but answer different force-generation problems. One supplies numbers and local persistence without reactor cost; the other supplies sustained submerged mobility for distant fleet work.${japaneseSubmarineClassCanon}${japaneseSubmarineClassExtrapolation}</p>`},
      {id:"inheritance",title:"Wartime and hydrodynamic inheritance",html:`<p>I-201 high-speed experience and later teardrop-hull development form the technical basis of the conventional attack school.${japaneseSubmarineClassCanon} Japan also retains an intact ocean-submarine institution after 1947 rather than rebuilding one after occupation or industrial dissolution.${japaneseSubmarineClassExtrapolation}</p><p>The inheritance provides trained personnel, yards, doctrine, and an existing argument for speed and submerged performance. It does not fix the identities or specifications of the postwar classes.${japaneseSubmarineClassExtrapolation}</p>`},
      {id:"conventional",title:"High-speed conventional attack",html:`<p>The conventional branch performs coastal denial, strait ambush, training, and economical ocean patrol.${japaneseSubmarineClassCanon} These missions favor boats that can be procured and supported in greater numbers than nuclear submarines while still exploiting concealment and favorable geography.${japaneseSubmarineClassExtrapolation}</p><p>Island chains and restricted approaches give the branch useful operating positions, but shallow water, intensive patrol aviation, mines, and fixed sensors can also make those positions dangerous.${japaneseSubmarineClassExtrapolation}</p>`},
      {id:"nuclear",title:"Nuclear fleet attack",html:`<p>First-generation Japanese PWR attack boats appear in the late 1950s and 1960s, followed by compact-PWR improvement. The branch screens carriers, hunts enemy submarines, conducts distant reconnaissance, and attacks independently.${japaneseSubmarineClassCanon}</p><p>Sustained submerged movement lets a nuclear boat reposition with a carrier force and search beyond the economical endurance of the conventional branch. Class identities, hull totals, speeds, weapons, and sensor fits remain open.${japaneseSubmarineClassCanon}${japaneseSubmarineClassExtrapolation}</p>`},
      {id:"carrier",title:"Carrier-screen mission",html:`<p>Attack submarines operate ahead of or beside the <a href='japanese-carrier-system.html'>carrier system</a> rather than as ships inside the visible surface screen. Their task is to discover hostile submarines, examine likely approach routes, and threaten enemy launch positions before contact reaches the carriers.${japaneseSubmarineClassCanon}${japaneseSubmarineClassExtrapolation}</p><p>Coordination is difficult because a submarine gains safety from concealment while a fleet commander wants timely position reports. Operating areas, identification rules, and communications discipline are therefore as important as nominal weapon range.${japaneseSubmarineClassExtrapolation}</p>`},
      {id:"independent",title:"Independent patrol and reconnaissance",html:`<p>Nuclear boats conduct distant reconnaissance and independent attack; conventional boats undertake economical ocean patrol as well as local denial.${japaneseSubmarineClassCanon} Both can observe traffic and force an opponent to spend escorts and patrol aircraft without firing.${japaneseSubmarineClassExtrapolation}</p><p>Exact patrol areas, deployments, bases, and crisis operations remain open.</p>`},
      {id:"weapons",title:"Weapons and sensing",html:`<p>The established missions require passive and active sensing, fire control, torpedoes, countermeasures, and secure navigation and communications. The register does not fix particular sonar suites, torpedo families, missile fits, or magazine arrangements for either attack school.${japaneseSubmarineClassExtrapolation}</p><p>Long-range anti-ship and conventional land-attack missiles belong to a separate <a href='japanese-type-32-submarine.html'>guided-missile school</a>; the existence of that branch does not exclude limited weapons overlap, which remains open.${japaneseSubmarineClassCanon}${japaneseSubmarineClassExtrapolation}</p>`},
      {id:"reactors",title:"Reactor boundary",html:`<p>Pressurized-water reactors remain Japan's operational naval standard through 1985. Compact PWR development improves later nuclear boats.${japaneseSubmarineClassCanon}</p><p>The selected sealed uranium-233 fluoride molten-salt system belongs to the post-1985 <a href='japanese-naval-reactor-development.html'>reactor transition</a>. A mature production MSR must not be placed in the 1985 attack fleet.${japaneseSubmarineClassCanon}</p>`},
      {id:"force",title:"Force mix and availability",html:`<p>The conventional and nuclear branches complement rather than replace one another. Training, maintenance, reactor support, weapons stocks, crew proficiency, and base capacity determine how many boats can patrol even after a class build is known.${japaneseSubmarineClassExtrapolation}</p><p>Because the class register is open, the proportion assigned to carrier screening, local denial, training, or overhaul cannot be calculated for 1985.</p>`},
      {id:"relations",title:"Relations with other submarine schools",html:`<p>The attack force is one part of a five-school submarine arm. Guided-missile boats conduct long-range anti-ship and conventional land attack; aviation submarines provide special reconnaissance and strike; <a href='japanese-transport-submarines.html'>undersea assault transports</a> carry selected troops and cargo.${japaneseSubmarineClassCanon}</p><p>Attack boats can protect or scout for those special missions, but the record does not establish standing mixed formations.${japaneseSubmarineClassExtrapolation}</p>`},
      {id:"withdrawn",title:"Reopened class ledger",html:`<p>The former Type 30/38 conventional sequence, Type 24/38 nuclear sequence, and forty-six-boat attack total are displaced reconstruction. They must not be used to infer hulls, commissioning dates, readiness, or force structure.${japaneseSubmarineClassExtrapolation}</p>`}
    ],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-type-32-submarine.html",kicker:"Open missile branch",label:"Guided-Missile Submarine Branch"},{href:"japanese-transport-submarines.html",kicker:"Special branch",label:"Undersea Assault Transports"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Service","Imperial Japanese Navy"],["Conventional branch","High-speed attack · fixed role"],["Nuclear branch","Fleet attack · fixed school"],["Conventional missions","Coastal denial · strait ambush · training · economical ocean patrol"],["Nuclear missions","Carrier screening · submarine hunting · distant reconnaissance · independent attack"],["Operational reactor standard","PWR through 1985"],["Postwar class names","Open"],["1985 SSK total","Open"],["1985 SSN total","Open"],["Former Type 30/38 ledger","Withdrawn"]]
  }),

  "type-30-uzushio-submarine": japaneseNavalArticle({
    title:"Former Type 30 Uzushio reconstruction",
    category:"Legacy submarine record",
    eyebrow:"Superseded Japanese submarine registry",
    landscape:lineageLandscape,
    lead:"Type 30 Uzushio was the proposed first family in a superseded Japanese postwar conventional-submarine ledger. Its eighteen-boat build, 1970–1978 introduction band, and twelve-boat 1985 allocation are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-c3e9q writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->Japan's high-speed conventional attack school and its coastal-denial, strait-ambush, training, and economical ocean-patrol missions are direct canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type 30 Uzushio identity, specifications, dates, production, and 1985 status are reopened registry extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"status",title:"Registry status",html:"<p>The current naval register leaves the postwar conventional class sequence and total open. This shell remains only to identify the displaced label and prevent its figures from returning as settled force structure.</p>"},{id:"replacement",title:"Established replacement",html:"<p>The supported account is role-first: I-201 and later teardrop-hull experience lead to a continuing conventional attack school, without a fixed class name or hull ledger.</p>"}],
    related:[{href:"japanese-attack-submarines.html",kicker:"Current account",label:"Japanese Attack Submarines"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Former label","Type 30 Uzushio"],["Former build total","18 · withdrawn"],["Former active total","12 · withdrawn"],["Current class identity","Open"],["Current branch","High-speed conventional attack"]]
  }),

  "type-38-yushio-submarine": japaneseNavalArticle({
    title:"Former Type 38 Yūshio reconstruction",
    category:"Legacy submarine record",
    eyebrow:"Superseded Japanese submarine registry",
    landscape:lineageLandscape,
    lead:"Type 38 Yūshio was the proposed modern family in a superseded Japanese postwar conventional-submarine ledger. Its eighteen-boat build, 1978–1985 introduction band, and eighteen-boat 1985 allocation are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-d4f1r writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->Japan's continuing high-speed conventional attack school is direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type 38 Yūshio identity, quieting claims, dates, production, and 1985 status are reopened registry extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"status",title:"Registry status",html:"<p>The current naval register fixes the conventional branch and its missions but not a mature 1980s class name, technical specification, or hull total.</p>"},{id:"withdrawn",title:"Displaced accounting",html:"<p>The former eighteen-built and eighteen-active figures, and the paired use of Type 38 for conventional and nuclear families, must not be treated as settled history.</p>"}],
    related:[{href:"japanese-attack-submarines.html",kicker:"Current account",label:"Japanese Attack Submarines"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Former label","Type 38 Yūshio"],["Former build and active total","18 · withdrawn"],["Current class identity","Open"],["Current branch","High-speed conventional attack"]]
  }),

  "type-24-nuclear-attack-submarine": japaneseNavalArticle({
    title:"Former Type 24 nuclear-attack reconstruction",
    category:"Legacy submarine record",
    eyebrow:"Superseded Japanese submarine registry",
    landscape:lineageLandscape,
    lead:"Type 24 was the proposed first family in a superseded Japanese nuclear-attack-submarine ledger. Its eight-boat build, 1964–1972 introduction band, and eight-boat 1985 allocation are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-e5g2s writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->A first Japanese pressurized-water-reactor attack generation in the late 1950s and 1960s, followed by compact-reactor improvement, is direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type 24 identity, dates, production, specifications, and 1985 status are reopened registry extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"status",title:"Registry status",html:"<p>The nuclear fleet-attack school is fixed; its class names and hull total are open. PWR remains Japan's operational naval-reactor standard through 1985.</p>"},{id:"missions",title:"Established mission",html:"<p>The school supports carrier screening, enemy-submarine hunting, distant reconnaissance, and independent attack without fixing this former class as their platform.</p>"}],
    related:[{href:"japanese-attack-submarines.html",kicker:"Current account",label:"Japanese Attack Submarines"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Former label","Type 24 SSN"],["Former build and active total","8 · withdrawn"],["Current class names","Open"],["Reactor standard","PWR through 1985"]]
  }),

  "type-38-nuclear-attack-submarine": japaneseNavalArticle({
    title:"Former Type 38 nuclear-attack reconstruction",
    category:"Legacy submarine record",
    eyebrow:"Superseded Japanese submarine registry",
    landscape:lineageLandscape,
    lead:"The nuclear Type 38 was the proposed second family in a superseded Japanese nuclear-attack-submarine ledger. Its eight-boat build, 1978–1985 introduction band, and eight-boat 1985 allocation are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-f6h3t writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->Compact-PWR improvement within Japan's nuclear fleet-attack school is direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The nuclear Type 38 identity, dates, production, specifications, and 1985 status are reopened registry extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"status",title:"Registry status",html:"<p>The current register does not fix a second-generation Type 38 class or an eight-boat force. It retains only the nuclear school's development direction and missions.</p>"},{id:"boundary",title:"Technology boundary",html:"<p>Compact PWRs improve later nuclear boats. A mature production molten-salt reactor does not enter a Japanese warship before 1985.</p>"}],
    related:[{href:"japanese-attack-submarines.html",kicker:"Current account",label:"Japanese Attack Submarines"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Former label","Type 38 SSN"],["Former build and active total","8 · withdrawn"],["Current class names","Open"],["Reactor standard","Compact PWR development"]]
  }),

  "japanese-transport-submarines": japaneseNavalArticle({
    title:"Japanese undersea assault transports",
    category:"Naval logistics",
    landscape:lineageLandscape,
    lead:"Japan maintains an undersea assault-transport branch for marines, swimmers, minisubmarines, high-value cargo, and surprise lodgment. The former Type D–Type 18–Type 36 sequence and its detailed class totals are no longer active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-h8j5w writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->The wartime transport and special-force development basis and the postwar assault-transport role are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type D/I-361, Type 18/I-460, and Type 36/I-490 setting sequence, their build totals, specifications, and 1985 allocation are reopened pending role-first reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"role",title:"Established branch",html:japaneseTransportRoleTable},{id:"doctrine",title:"Operational purpose",html:"<p>The branch opens an unexpected access point and delivers selected people, vehicles, or cargo whose timing matters more than tonnage. It does not replace ordinary sealift.</p>"},{id:"registry",title:"Open postwar registry",html:"<p>Postwar class names, propulsion choices, capacities, specifications, and hull totals remain open. The former three-class table is retained only through its legacy shells.</p>"}],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-attack-submarines.html",kicker:"Approach screen",label:"Japanese Attack Submarines"},{href:"german-submersible-transports.html",kicker:"German comparison",label:"German Submersible Transports"}],
    facts:[["Branch","Undersea assault transport"],["Missions","Marines · swimmers · minisubmarines · high-value cargo · surprise lodgment"],["Postwar classes","Open"],["1985 total","Open"],["Former Type D/18/36 ledger","Withdrawn"]]
  }),

  "type-d-i-361-submarine": japaneseNavalArticle({
    title:"Type D / I-361 reference lineage",
    category:"Submarine reference record",
    eyebrow:"Post-divergence historical design context",
    landscape:lineageLandscape,
    lead:"The historical Type D or I-361 transport-submarine design belongs to the post-1 August 1941 reference record. It helps explain Japan's undersea assault-transport school, but its historical or formerly projected setting ledger is not inherited canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-i9k6w writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->Japan's use of wartime transport submarines as the development basis for a later assault-transport branch is direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> Type D was designed after the divergence, so real-world class history is reference context rather than inherited history; the former twelve-boat-through-1947 setting total and detailed specifications are open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"boundary",title:"Canon boundary",html:"<p>The class's 1944 historical development occurs after the setting's divergence. It cannot be marked pre-divergence or imported automatically.</p>"},{id:"legacy",title:"Developmental relevance",html:"<p>Wartime transport-submarine and special-force experience remains the established basis of the later undersea assault-transport role. Exact boats, loads, performance, missions, and survival require a new registry.</p>"}],
    related:[{href:"japanese-transport-submarines.html",kicker:"Current branch",label:"Japanese Undersea Assault Transports"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Historical development","After 1 August 1941"],["Setting role","Development basis"],["Former setting total","12 through 1947 · open"],["Detailed specifications","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/I-361-class_submarine",label:"Wikipedia — historical Type D/I-361 design reference"}]
  }),

  "type-18-i-460-submarine": japaneseNavalArticle({
    title:"Former Type 18 / I-460 reconstruction",
    category:"Legacy submarine record",
    eyebrow:"Superseded Japanese submarine registry",
    landscape:lineageLandscape,
    lead:"Type 18 or I-460 was a proposed postwar class in a superseded Japanese transport-submarine ledger. Its 1958 introduction, four-boat build, capacity, performance, and endurance are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-j1l7x writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->Japan's continuing undersea assault-transport branch is direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type 18/I-460 identity, dates, build total, specifications, and service history are reopened registry extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"status",title:"Registry status",html:"<p>The current naval register leaves postwar assault-transport classes and totals open. This legacy shell records the displaced label without preserving its figures as canon.</p>"}],
    related:[{href:"japanese-transport-submarines.html",kicker:"Current branch",label:"Japanese Undersea Assault Transports"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Former label","Type 18 / I-460"],["Former introduction","1958 · withdrawn"],["Former build total","4 · withdrawn"],["Current class identity","Open"]]
  }),

  "type-36-i-490-submarine": japaneseNavalArticle({
    title:"Former Type 36 / I-490 reconstruction",
    category:"Legacy submarine record",
    eyebrow:"Superseded Japanese submarine registry",
    landscape:lineageLandscape,
    lead:"Type 36 or I-490 was a proposed nuclear class in a superseded Japanese assault-transport ledger. Its 1976 introduction, three-boat build, capacity, secondary vehicles, performance, and endurance are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-k2m8y writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->Japan's undersea assault-transport role, including marines, swimmers, minisubmarines, high-value cargo, and surprise lodgment, is direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type 36/I-490 identity, nuclear propulsion, dates, build total, specifications, and service history are reopened registry extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"status",title:"Registry status",html:"<p>The current naval register does not fix a postwar assault-transport class sequence or total. A future role-first reconstruction may select nuclear or conventional designs without inheriting this former specification.</p>"},{id:"doctrine",title:"Preserved mission",html:"<p>A concealed boat may open an unexpected access point for special forces and selected cargo, but it cannot replace merchant shipping or a surface amphibious force.</p>"}],
    related:[{href:"japanese-transport-submarines.html",kicker:"Current branch",label:"Japanese Undersea Assault Transports"},{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"}],
    facts:[["Former label","Type 36 / I-490"],["Former introduction","1976 · withdrawn"],["Former build total","3 · withdrawn"],["Current class identity","Open"],["Current branch role","Fixed"]]
  })
});
