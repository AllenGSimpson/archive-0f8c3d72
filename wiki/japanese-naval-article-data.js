window.deepArticles = window.deepArticles || {};

const japaneseNavalSources = [
  {href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — controlling Japanese class and force register"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese carrier-first maritime doctrine"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Japanese naval development milestones"},
  {href:"../transcript.md",label:"Master Transcript — Japanese fleet, automation, and imperial logistics"}
];

const japaneseMissileSubmarineCanon = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
const japaneseMissileSubmarineExtrapolation = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

const japaneseNavalArticle = config => ({
  category:"Naval history",
  eyebrow:"Imperial Japanese Navy · postwar development · 1947–1985",
  infoboxKicker:"Japanese naval system",
  ...config,
  sources:[...japaneseNavalSources,...(config.additionalSources || [])],
  categories:config.categories || ["Empire of Japan","Imperial Japanese Navy","Naval history","Military technology"]
});

const carrierLandscape = {
  src:"assets/diagrams/japanese-carrier-system.svg",
  alt:"Diagram showing Japanese fleet and light carriers integrated with naval aviation, satellites, island bases, escorts, submarines, and long-range anti-ship weapons",
  caption:"Japan treated the carrier as the center of a wider maritime information, aviation, base, and escort system"
};

const lineageLandscape = {
  src:"assets/diagrams/japanese-postwar-fleet-lineages.svg",
  alt:"Selected Japanese battleship, carrier, cruiser, and escort families beside role-first submarine schools whose postwar class names remain open",
  caption:"Fixed surface families appear beside open submarine registries; the diagram is not a complete hull ledger"
};

Object.assign(window.deepArticles, {
  "imperial-japanese-navy-postwar": japaneseNavalArticle({
    title:"Imperial Japanese Navy after the Second World War",
    category:"Military history",
    landscape:carrierLandscape,
    lead:"After the Second World War, the Imperial Japanese Navy became the carrier-centered armed service of a maritime empire stretching from the northern Pacific through Southeast Asia and into the South Seas. Fleet and light carriers, land-based naval aviation, island airfields, airborne warning, satellites, escorts, submarines, replenishment, and long-range anti-ship weapons operated as one layered system.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-b4h9s writer=g kind=revision created=2026-08-15T23:47:00-06:00 -->The revised 1947 capital, fleet/light-carrier, and submarine inheritance; carrier-first doctrine; eight first-line fleet carriers and four Zuihō II light carriers; four modern carrier-guard battleships; three Yamato-class reserve, support, training, or experimental hulls; Type 42 Tsubaki role; and imperial-base integration are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Exact 1985 cruiser, escort, submarine, amphibious, mine, and auxiliary totals remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"inheritance",title:"Armistice inheritance",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-n8c3q writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><p>Japan ended 1947 with eleven capital ships afloat and nine operational, thirteen fleet/light carriers afloat and ten operational, and approximately eighty ocean or fleet submarines, about fifty-eight front-line. Cruiser, destroyer, and major-escort totals remain open.</p><p>Japan had fought Britain and regional enemies but had not endured American carrier destruction, submarine blockade, mining of the home islands, occupation, or industrial dissolution. The resulting navy possessed an intact institutional memory, trained cadres, yards, aviation establishments, island bases, and imperial supply system.</p><!-- altwwii-writer-block:end -->"},
      {id:"doctrine",title:"Carrier-first doctrine",html:"<p>The governing maxim was that battleships finished damaged formations and supported invasions while carriers created the battle. The <a href='japanese-carrier-system.html'>carrier system</a> joined aircraft and ships to land-based naval aviation, airborne warning, satellites, submarines, island bases, surface escorts, and Type 42 Tsubaki long-range anti-ship weapons.</p>"},
      {id:"empire",title:"Imperial geography",html:"<p>Home-island yards and commands connected to Formosa, Chōsen, the South Seas, Manchukuo, Indochina, the East Indies, and associated-state ports. The same geography supplied depth and imposed extraordinary escort, fuel, repair, weather, and communications demands.</p><p>Direct territories, associated states, and corporate concessions did not form one uniform naval jurisdiction.</p>"},
      {id:"capital",title:"Capital and carrier fleet",html:"<p>Eight <a href='japanese-carrier-system.html'>first-line fleet carriers</a> in four divisions and four Zuihō II light carriers formed the aviation core in 1985. Four modern fast battleships guarded carrier formations. Yamato, Musashi, and Shinano remained in reserve, support, training, or experimental roles rather than the first-line carrier screen.</p>"},
      {id:"screen",title:"Cruiser and escort screen",html:"<p><a href='japanese-cruiser-force.html'>Cruisers</a>, <a href='japanese-surface-escorts.html'>destroyers</a>, frigates, and smaller missile combatants defended carriers, imperial routes, amphibious formations, and bases. Their exact 1985 totals remain open pending reconstruction.</p>"},
      {id:"submarines",title:"Submarine arm",html:"<p>The <a href='japanese-submarine-force.html'>submarine force</a> combined conventional attack, nuclear attack, nuclear guided-missile, and a separate <a href='japanese-transport-submarines.html'>transport lineage</a>. It served fleet attack, scouting, route denial, long-range conventional strike, and surprise amphibious access; exact 1985 category totals remain open.</p>"},
      {id:"1985",title:"Fleet on 1 January 1985",html:"<p>The controlling 1985 register fixes the carrier and capital-ship relationships but leaves exact cruiser, escort, submarine, amphibious, mine-warfare, and auxiliary totals open.</p>"},
      {id:"limits",title:"Strategic limits",html:"<p>The system depended upon fuel, pilots, deck crews, maintenance, replenishment, protected communications, and dispersed bases. Carrier strength could not make every imperial route safe or every associated government obedient.</p><p>Japan's advantage was integration across a broad maritime system; the same breadth was its permanent burden.</p>"}
    ],
    related:[{href:"world-naval-balance-1985.html",kicker:"Comparative strength",label:"World Naval Balance in 1985"},{href:"naval-armistice-inventory-1947.html",kicker:"Five-navy comparison",label:"Naval Armistice Inventory of 1947"},{href:"japanese-armistice-fleet.html",kicker:"National inheritance",label:"Japanese Armistice Fleet"},{href:"japanese-carrier-system.html",kicker:"Principal battle system",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Screen and routes",label:"Japanese Surface Escorts"},{href:"japanese-submarine-force.html",kicker:"Undersea arm",label:"Japanese Submarine Force"},{href:"south-seas-general-government.html",kicker:"Pacific base system",label:"South Seas General Government"}],
    facts:[["Service","Imperial Japanese Navy"],["Strategic center","Carrier-centered maritime system"],["First-line fleet carriers, 1985","8 in four divisions"],["Light carriers, 1985","4 Zuihō II"],["Modern carrier-guard battleships","4"],["Yamato-class hulls","3 in reserve/support/training/experimental roles"],["Other exact 1985 totals","Open"],["Reference date","1 January 1985"]]
  }),

  "japanese-carrier-system": japaneseNavalArticle({
    title:"Japanese carrier system, 1947–1985",
    category:"Naval aviation",
    landscape:carrierLandscape,
    lead:"The Japanese carrier system was the integrated fleet of eight fleet carriers, four light carriers, their air groups, land-based naval aviation, airborne-warning aircraft, island bases, satellites, submarines, surface escorts, replenishment ships, and long-range anti-ship weapons. Japanese doctrine treated the carrier not as an isolated capital ship but as the command and aviation center of a distributed maritime battle.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-c6k2w writer=g kind=revision created=2026-08-15T23:47:00-06:00 -->The integrated system, eight first-line fleet carriers in four divisions, class composition of two Hiryū II, four Taihō II, and two Hakuryū ships, four Zuihō II light carriers, carrier-first doctrine, supporting components, and Type 42 Tsubaki relationship are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Individual ship names within incompletely registered classes, air-wing totals and aircraft types, sortie rates, command procedures, and deployment patterns remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"principle",title:"The carrier creates the battle",html:"<p>Aircraft and sensors found, classified, and attacked before heavy surface forces closed. Battleships could finish damaged formations or support landings; they did not replace the carrier as battle creator.</p>"},
      {id:"fleet",title:"Fleet-carrier composition",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-r2k6h writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class or generation</th><th>First-line ships, 1985</th><th>Position</th></tr></thead><tbody><tr><td><a href='hiryu-ii-class-carrier.html'>Hiryū II</a></td><td>2</td><td>Earlier postwar division</td></tr><tr><td><a href='taiho-ii-class-carrier.html'>Taihō II</a></td><td>4</td><td>Principal mature divisions</td></tr><tr><td><a href='hakuryu-class-carrier.html'>Hakuryū</a></td><td>2</td><td>Latest division</td></tr></tbody></table></div><p>Shinano is not part of the carrier roster: she completed as the third Yamato-class battleship.</p><!-- altwwii-writer-block:end -->"},
      {id:"light",title:"Light-carrier roster",html:"<p>Zuihō, Shōhō, Ryūhō, and Hiyō formed the four-ship Zuihō II force. Each registered a standard 1985 group of twenty-four fighters plus helicopters for reduced fixed-wing operations, anti-submarine work, route defense, and amphibious support.</p>"},
      {id:"information",title:"Information and warning",html:"<p>Airborne warning, carrier and land radar, satellites, patrol aircraft, signals intelligence, submarines, island observers, and data links built the common picture. Japanese advantage depended upon fusing imperfect reports faster than an opponent.</p>"},
      {id:"weapons",title:"Long-range attack",html:"<p>Carrier aircraft and Type 42 Tsubaki long-range anti-ship weapons extended attack beyond gun range. Cruisers, destroyers, and submarines supplied additional launch platforms and forced opponents to defend against several approach geometries.</p>"},
      {id:"bases",title:"Bases and replenishment",html:"<p>Home-island yards, the older Micronesian network, South Seas airfields, Taiwan, Chōsen, and southern-route facilities enabled dispersal and repair. Replenishment and repair ships gave the carrier fleet mobility, but their exact 1985 total remains open and no auxiliary system erased fuel or maintenance limits.</p>"},
      {id:"comparison",title:"Comparison with other fleets",html:"<p>America matched Japan in large-carrier scale but organized aviation through a different political and industrial system. Germany centered submarines. Britain emphasized anti-submarine warfare and Commonwealth route defense. Japan's distinctive strength was the mature integration of carriers with an imperial island and corporate-logistics network.</p>"}
    ],
    related:[{href:"japanese-wartime-carrier-inheritance.html",kicker:"First generation",label:"Wartime Carrier Inheritance"},{href:"hiryu-ii-class-carrier.html",kicker:"First clean-sheet jet carrier",label:"Hiryū II Class"},{href:"taiho-ii-class-carrier.html",kicker:"Production nuclear generation",label:"Taihō II Class"},{href:"hakuryu-class-carrier.html",kicker:"Latest generation",label:"Hakuryū Class"},{href:"zuiho-ii-class.html",kicker:"Light-carrier arm",label:"Zuihō II Class"},{href:"japanese-surface-escorts.html",kicker:"Protective screen",label:"Japanese Surface Escorts"}],
    facts:[["First-line fleet carriers, 1985","8"],["Fleet-carrier divisions","4"],["Fleet-carrier composition","2 Hiryū II · 4 Taihō II · 2 Hakuryū"],["Light carriers, 1985","4 Zuihō II"],["Long-range weapon","Type 42 Tsubaki"],["Core principle","Carriers create the battle"]]
  }),

  "yamato-class-postwar": japaneseNavalArticle({
    title:"Yamato class after the Second World War",
    category:"Warship history",
    eyebrow:"Yamato, Musashi, and Shinano · battleship survival · 1941–1985",
    landscape:lineageLandscape,
    lead:"Yamato, Musashi, and Shinano were the three completed Yamato-class battleships of postwar Japan. By 1985 the three hulls served in reserve, support, training, or experimental roles rather than in the first-line carrier-guard force. They preserved heavy-gun, engineering, and prestige functions without defining Japan's carrier-first battle doctrine.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-d8m5y writer=g kind=revision created=2026-08-15T23:47:00-06:00 -->The survival of Yamato, completion of Musashi and Shinano as battleships, three-hull class, secondary 1985 reserve/support/training/experimental position, Shinano's circa 1970–74 reconstruction as a nuclear battleship and electrical testbed, and subordination to carrier doctrine are established.<sup class='canon-note' data-provenance='a'>[a]</sup> Exact 1985 configuration, refit architecture, weapons, radar, machinery, crews, and individual deployments remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Yamato commissioned in 1941, Musashi completed during the extended war, and Shinano completed as a battleship rather than undergoing the historical carrier conversion. Their design lineage sought qualitative superiority through exceptional displacement, armor, and heavy guns.</p>"},
      {id:"survival",title:"Survival through the long war",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-t7m4n writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><p>Yamato was repaired, while Musashi and Shinano completed as battleships. All three survived into the postwar fleet and became usable symbols, engineering assets, and heavy-gun reserves of the imperial settlement.</p><!-- altwwii-writer-block:end -->"},
      {id:"postwar",title:"Postwar missions",html:"<p>The ships supplied heavy-gun support, command and training capacity, prestige presence, and experimental platforms. Fuel, crews, maintenance, and vulnerability prevented routine use as the center of carrier operations.</p>"},
      {id:"modernization",title:"Postwar reconstruction",html:"<p><a href='shinano-nuclear-reconstruction.html'>Shinano underwent a circa 1970–74 reconstruction</a> as a nuclear battleship and electrical testbed. Exact 1985 propulsion, armament, electronics, and refit configuration for all three hulls remain open.</p>"},
      {id:"doctrine",title:"Relationship to carrier doctrine",html:"<p>Official doctrine held that carriers created the battle. Two <a href='kii-class-battleship.html'>Kii-class</a> and two <a href='suruga-class-battleship.html'>Suruga-class</a> fast battleships, not the three Yamato-class hulls, guarded first-line carrier formations in 1985.</p>"},
      {id:"memory",title:"Public meaning",html:"<p>The three ships embodied endurance, national scale, and victory. Their continued secondary service tied the modern electronics-and-missile navy to a visible prewar imperial lineage.</p>"}
    ],
    related:[{href:"shinano-nuclear-reconstruction.html",kicker:"Experimental conversion",label:"Shinano Nuclear Reconstruction"},{href:"kii-class-battleship.html",kicker:"Conventional carrier guard",label:"Kii Class"},{href:"suruga-class-battleship.html",kicker:"Nuclear carrier guard",label:"Suruga Class"},{href:"japanese-carrier-system.html",kicker:"Doctrinal center",label:"Japanese Carrier System"},{href:"imperial-japanese-navy-postwar.html",kicker:"Service context",label:"Postwar Imperial Japanese Navy"},{href:"japanese-cruiser-force.html",kicker:"Missile command layer",label:"Japanese Cruiser Force"}],
    facts:[["Ships","Yamato · Musashi · Shinano"],["Class size","3 completed battleships"],["Status, 1985","Reserve · support · training · experimental"],["Shinano reconstruction","c. 1970–74"],["Shinano role","Nuclear battleship and electrical testbed"],["First-line carrier guards","4 modern fast battleships"],["Exact 1985 configuration","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Japanese_battleship_Yamato",label:"Wikipedia — pre-divergence Yamato design and early service"}]
  }),

  "japanese-wartime-carrier-inheritance": japaneseNavalArticle({
    title:"Japanese wartime carrier inheritance",
    category:"Naval aviation history",
    landscape:lineageLandscape,
    lead:"Japan's wartime carrier inheritance comprised Taihō and other surviving or completed carrier programs that bridged the long war to the postwar fleet. They preserved armored-flight-deck experience, trained personnel, operating doctrine, and an uninterrupted shipyard base for the Hiryū II, Taihō II, and Hakuryū generations. Shinano completed separately as the third Yamato-class battleship.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260815-f3p7a writer=g kind=revision created=2026-08-15T23:47:00-06:00 -->Continuity from the wartime carrier establishment into the Hiryū II, Taihō II, and Hakuryū generations, Taihō's survival, and Shinano's completion as a battleship are established.<sup class='canon-note' data-provenance='a'>[a]</sup> The complete wartime carrier roster, exact specifications, air groups by year, damage and reconstruction details, and individual service histories remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"taiho",title:"Taihō and wartime carrier continuity",html:"<p>Taihō survived, and the wartime carrier establishment supplied the deck crews, pilots, armored-deck practice, logistics, command doctrine, and shipyard experience used by postwar designs. Exact follow-on hull identities and mature air-group figures remain open.</p>"},
      {id:"shinano",title:"Shinano",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-v3q8p writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><p>Shinano did not enter the carrier inheritance. She completed as the third Yamato-class battleship and later underwent reconstruction as a nuclear battleship and electrical testbed.</p><!-- altwwii-writer-block:end -->"},
      {id:"divergence",title:"Divergence from familiar history",html:"<p>Japan did not fight an American carrier war or suffer the submarine blockade and industrial collapse that historically destroyed its carrier establishment. Taihō survived, while the decision to complete Shinano as a battleship produced a different capital-ship and carrier lineage from familiar history.</p>"},
      {id:"institution",title:"Institutional continuity",html:"<p>The ships preserved deck crews, pilots, aircraft handling, armored-deck practice, fleet logistics, command doctrine, and shipyard expertise. Postwar carrier development did not need to be recreated after defeat or occupation.</p>"},
      {id:"1985",title:"Position in 1985",html:"<p>The eight first-line fleet carriers comprised two Hiryū II, four Taihō II, and two Hakuryū ships. The wartime inheritance remained visible through personnel, doctrine, industrial continuity, and Taihō's survival rather than through a carrier conversion of Shinano.</p>"}
    ],
    related:[{href:"hakuryu-class-carrier.html",kicker:"Latest successor",label:"Hakuryū Class"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"},{href:"yamato-class-postwar.html",kicker:"Shinano's lineage",label:"Yamato Class after the War"}],
    facts:[["Wartime survivor","Taihō"],["Postwar fleet-carrier composition","2 Hiryū II · 4 Taihō II · 2 Hakuryū"],["Shinano","Completed as a Yamato-class battleship"],["Continuity","Personnel · doctrine · yards · carrier aviation"],["Exact wartime roster","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Japanese_aircraft_carrier_Taih%C5%8D",label:"Wikipedia — pre-divergence Taihō design and construction"},{href:"https://en.wikipedia.org/wiki/Japanese_aircraft_carrier_Shinano",label:"Wikipedia — pre-divergence Shinano conversion and construction"}]
  }),

  "amagi-class-carrier": japaneseNavalArticle({
    title:"Former Amagi carrier reconstruction",
    category:"Legacy carrier record",
    eyebrow:"Superseded Japanese carrier registry",
    landscape:lineageLandscape,
    lead:"Amagi was a proposed four-ship standard carrier generation in a superseded Japanese postwar fleet ledger. Its roster, 1957–65 band, 53,000-tonne design, sixty-six-aircraft group, and 1985 allocation are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-y7a4m writer=g kind=revision created=2026-08-16T06:30:00-06:00 -->Japan's carrier-first doctrine and eight first-line carriers in four divisions are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Amagi class identity, four-ship roster, dates, displacement, air group, and active allocation are reopened; Hiryū II, Taihō II, and Hakuryū form the current first-line sequence.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"status",title:"Registry status",html:"<p>The stabilized register fixes two Hiryū II, four Taihō II, and two operational Hakuryū ships in 1985. This shell remains only to identify the displaced Amagi ledger.</p>"}
    ],
    related:[{href:"japanese-wartime-carrier-inheritance.html",kicker:"Predecessor generations",label:"Wartime Carrier Inheritance"},{href:"hakuryu-class-carrier.html",kicker:"Successor generation",label:"Hakuryū Class"},{href:"japanese-carrier-system.html",kicker:"Operational system",label:"Japanese Carrier System"}],
    facts:[["Former class","Amagi"],["Former ships","Amagi · Katsuragi · Aso · Ikoma"],["Former displacement","53,000 t · withdrawn"],["Current status","Not active canon"]]
  }),

  "hakuryu-class-carrier": japaneseNavalArticle({
    title:"Hakuryū-class aircraft carrier",
    category:"Warship class",
    eyebrow:"Nuclear supercarrier generation · 1981–90",
    landscape:lineageLandscape,
    lead:"Hakuryū is Japan's true nuclear-supercarrier generation. Four ships are ordered for introduction from 1981 through 1990; two are operational in 1985.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-z8b5n writer=g kind=revision created=2026-08-16T06:30:00-06:00 -->The Hakuryū name, four-ship order, 1981–90 introduction band, PWR propulsion, nuclear-supercarrier role, and two operational ships in 1985 are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> Individual names, commissioning dates, full-load displacement, air-group size, dimensions, machinery details, weapons, sensors, yards, and deployments remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"origin",title:"Development",html:"<p>The generation provides Japan's largest carrier platform and introduces nuclear propulsion to its true supercarrier program.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Two of four ordered ships are operational. The other hulls and their exact construction or work-up states remain open within the 1981–90 program band.</p>"},
      {id:"role",title:"Fleet role",html:"<p>The two operational ships join two Hiryū II and four Taihō II carriers in the eight-ship first-line force.</p>"},
      {id:"limits",title:"Limits",html:"<p>The class did not make carrier groups invulnerable to submarines, long-range missiles, mines, weather, or concentrated air attack. Its advantage was the scale at which Japan could integrate aviation and information, not immunity.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Parent system",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Protective screen",label:"Japanese Surface Escorts"},{href:"japanese-cruiser-force.html",kicker:"Command screen",label:"Japanese Cruiser Force"}],
    facts:[["Ordered","4"],["Introduction band","1981–90"],["Operational, 1985","2"],["Propulsion","PWR"],["Role","Nuclear supercarrier"],["Full load and air group","Open"]]
  }),

  "zuiho-ii-class": japaneseNavalArticle({
    title:"Zuihō II-class light aircraft carrier",
    category:"Warship class",
    landscape:lineageLandscape,
    lead:"Zuihō II is Japan's four-ship oil-fired light-carrier generation, introduced from 1962 through 1969 for regional cover, anti-submarine warfare, training, and secondary operations. All four remain part of the 1985 light-carrier force.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-a9c6o writer=g kind=revision created=2026-08-16T06:30:00-06:00 -->The Zuihō II name, four-ship build, 1962–69 introduction band, oil-steam propulsion, four-ship 1985 allocation, and regional-cover, ASW, training, and secondary-operations roles are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> Individual ship names, commissioning dates, full-load displacement, air-group size, dimensions, weapons, sensors, yards, and deployments remain open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"concept",title:"Light-carrier concept",html:"<p>The class supplied reduced fixed-wing operations and helicopter support at lower scale than fleet carriers. It could defend routes, reinforce amphibious operations, provide anti-submarine aviation, train crews, and release large carriers for principal theaters.</p>"},
      {id:"status",title:"Class register",html:"<p>Four ships enter service in 1962–69 and remain the 1985 light-carrier allocation. Individual names and dates are not fixed.</p>"},
      {id:"air",title:"Air group",html:"<p>The stabilized register does not retain the former twenty-four-fighters-plus-helicopters standard group. Aircraft types, numbers, and mission mixes remain open.</p>"},
      {id:"empire",title:"Imperial-route role",html:"<p>Light carriers matched the geography of secondary seas, dispersed islands, convoy routes, and limited local crises. They were still major warships, not escort carriers or amphibious helicopter ships.</p>"},
      {id:"fleet",title:"Relationship with fleet carriers",html:"<p>The four light carriers increased geographic presence without diluting the eight-ship fleet-carrier striking core. In major operations they could supply fighters, helicopters, anti-submarine coverage, and replacement capacity.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Parent system",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Escort screen",label:"Japanese Surface Escorts"},{href:"south-seas-general-government.html",kicker:"Imperial geography",label:"South Seas General Government"}],
    facts:[["Built","4"],["Introduced","1962–69"],["Active in 1985","4"],["Propulsion","Oil steam"],["Role","Regional cover · ASW · training · secondary operations"],["Full load and air group","Open"]]
  }),

  "japanese-cruiser-force": japaneseNavalArticle({
    title:"Japanese postwar cruiser force",
    category:"Warship development",
    landscape:lineageLandscape,
    lead:"Japan's postwar cruiser force develops through Takao II conventional command cruisers, Maya II nuclear command cruisers, and the initial Chōkai II generation. The former Ibuki class, exact ten-cruiser total, fixed displacements, and Maya weapons fit are not active canon.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-n5p2b writer=g kind=revision created=2026-08-16T05:10:00-06:00 -->The four-ship Takao II and Maya II generations, four planned Chōkai II ships, introduction bands, broad roles, Maya II nuclear propulsion, and initial Chōkai II hulls by 1985 are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> Full-load designs remain working, while the former Ibuki class, exact ten-active-cruiser total, and detailed Maya fit are withdrawn or open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"takao",title:"Takao II",html:"<p>Four conventional Takao II ships enter service in 1959–66 for carrier-group air defense, information coordination, and command. Their full-load design remains open.</p>"},
      {id:"maya",title:"Maya II",html:"<p>Four Maya II ships enter service in 1970–78 as Japan's first production nuclear command-cruiser generation. Detailed displacement, weapons, sensors, and ship histories remain open.</p>"},
      {id:"chokai",title:"Chōkai II",html:"<p>Four compact-PWR Chōkai II ships are planned for 1983–91, with initial hulls present by 1985. Their final design and exact reference-date status remain working.</p>"},
      {id:"role",title:"Carrier-group role",html:"<p>Cruisers combined command volume, radar, missiles, aviation, and endurance. They coordinated escort screens and gave carrier commanders weapons and sensors that did not consume flight-deck capacity.</p>"},
      {id:"balance",title:"Reopened force total",html:"<p>The former Ibuki aviation-cruiser class and exact ten-active-ship accounting belong to the displaced surface-fleet reconstruction.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Protected core",label:"Japanese Carrier System"},{href:"japanese-surface-escorts.html",kicker:"Destroyer and frigate screen",label:"Japanese Surface Escorts"},{href:"imperial-japanese-navy-postwar.html",kicker:"Fleet context",label:"Postwar Imperial Japanese Navy"}],
    facts:[["Takao II","4 · 1959–66"],["Maya II","4 · 1970–78"],["Chōkai II","4 planned · 1983–91"],["Initial Chōkai II hulls by 1985","Working"],["Former Ibuki class","Withdrawn"],["Exact 1985 cruiser total","Open"]]
  }),

  "japanese-surface-escorts": japaneseNavalArticle({
    title:"Japanese postwar surface escorts",
    category:"Warship development",
    landscape:lineageLandscape,
    lead:"Japanese postwar surface escorts protect carriers, replenishment groups, amphibious forces, imperial routes, and island bases. The current sequence includes Asakaze II, Amatsukaze II, nuclear Inazuma, Hatsuyuki, and Shiranui II generations; postwar frigate families and most exact 1985 totals remain open.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-o6q3c writer=g kind=revision created=2026-08-16T05:10:00-06:00 -->The five destroyer generations, their introduction bands, broad roles, the fixed four-ship Inazuma generation, sixteen Hatsuyuki builds, and the existence of postwar frigate families are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> Most displacements and active allocations are working; frigate class names and totals, and the former thirty-eight-destroyer, forty-six-frigate, and forty-two-small-combatant totals, are reopened.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"destroyers",title:"Destroyer generations",html:"<p>Asakaze II begins the postwar fleet-escort line with twelve ships in 1953–61; fourteen Amatsukaze II follow in 1962–70. Four oversized PWR Inazuma ships enter in 1972–76. Sixteen Hatsuyuki ships enter in 1974–84, and Shiranui II begins around 1980 with its total open.</p>"},
      {id:"frigates",title:"Frigate families",html:"<p>Postwar frigate families provide route defense and the carrier outer screen. Their class sequence, design, and 1985 total remain open.</p>"},
      {id:"screen",title:"Carrier screen",html:"<p>Destroyers supplied air defense, surface attack, and multipurpose response. Frigates and escorts supplied anti-submarine warfare, convoy endurance, and route presence. Together they protected carriers without assuming carriers were their only mission.</p>"},
      {id:"routes",title:"Imperial-route service",html:"<p>The navy must protect food, oil, ore, troops, commercial shipping, and communications across a vast hierarchical sphere. This route burden sustains conventional frigates alongside elite carrier escorts.</p>"},
      {id:"balance",title:"1985 balance",html:"<p>Exact destroyer, frigate, and smaller-combatant totals remain open except for separately fixed class builds. Former aggregate totals must not be treated as a completed readiness ledger.</p>"},
      {id:"limits",title:"Limits",html:"<p>Escort numbers could not provide continuous protection to every route and island. Readiness, crew quality, helicopter availability, weather, and replenishment determined whether paper strength became an effective screen.</p>"}
    ],
    related:[{href:"japanese-carrier-system.html",kicker:"Principal protected system",label:"Japanese Carrier System"},{href:"japanese-cruiser-force.html",kicker:"Command layer",label:"Japanese Cruiser Force"},{href:"japanese-submarine-force.html",kicker:"Undersea partner",label:"Japanese Submarine Force"},{href:"south-seas-general-government.html",kicker:"Route geography",label:"South Seas General Government"}],
    facts:[["Conventional generations","Asakaze II · Amatsukaze II · Hatsuyuki"],["Nuclear generations","Inazuma · Shiranui II"],["Inazuma ships","4"],["Hatsuyuki built","16"],["Frigate families","Names and total open"],["Exact 1985 escort total","Open"]]
  }),

  "japanese-submarine-force": japaneseNavalArticle({
    title:"Japanese submarine force, 1947–1985",
    category:"Submarine warfare",
    landscape:lineageLandscape,
    lead:"The Japanese submarine force combines conventional attack, nuclear fleet-attack, guided-missile, special-aviation, and undersea assault-transport branches. Those five schools and their missions are established; most postwar class names and exact 1985 totals remain open.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-a1c7n writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->The five submarine schools, their development bases and missions, PWR use through 1985, a mature aviation-submarine force of approximately four or five boats, and conventional-only guided-missile attack are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The former Type 30/38 attack ledger, Type 32 SSGN class, Type D/18/36 transport sequence, and fixed thirty-SSK, sixteen-SSN, six-SSGN, and fifty-two-combat-boat totals are reopened.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"schools",title:"Five submarine schools",html:"<p>High-speed conventional boats serve coastal denial, strait ambush, training, and economical ocean patrol. Nuclear fleet-attack boats screen carriers, hunt submarines, conduct distant reconnaissance, and attack independently. Guided-missile boats conduct long-range anti-ship and conventional land attack. Aviation submarines provide covert reconnaissance, special strike, deception, and remote aviation presence. Undersea assault transports carry marines, swimmers, minisubmarines, and high-value cargo for surprise lodgment.</p>"},
      {id:"aviation",title:"Special aviation branch",html:"<p>I-400 wartime experience leads through floatplane, early-jet, VTOL, nuclear, multi-hull, and drone experiments to a tiny mature force of about four or five large boats. I-500 <em>Ryūjin</em> is the lead institutional successor; exact fleet details remain restricted or open.</p>"},
      {id:"reactors",title:"Reactor boundary",html:"<p>Pressurized-water reactors remain the operational naval standard through 1985. Compact PWRs support later improvement; mature production molten-salt reactors enter warships only after the reference period.</p>"},
      {id:"registry",title:"Reopened registry",html:"<p>The former named attack, missile, and transport classes and their exact hull allocations must not be used as settled 1985 force structure. Only the mature aviation branch retains an approximate four-or-five-boat strength.</p>"}
    ],
    related:[{href:"japanese-attack-submarines.html",kicker:"Attack schools",label:"Japanese Attack Submarines"},{href:"japanese-type-32-submarine.html",kicker:"Open missile branch",label:"Guided-Missile Submarine Branch"},{href:"japanese-transport-submarines.html",kicker:"Assault branch",label:"Undersea Assault Transports"},{href:"japanese-carrier-system.html",kicker:"Fleet context",label:"Japanese Carrier System"}],
    facts:[["Established schools","5"],["Conventional attack total","Open"],["Nuclear attack total","Open"],["Guided-missile total","Open"],["Mature aviation boats","Approximately 4–5"],["Assault-transport total","Open"],["Operational reactor standard","PWR through 1985"],["Nuclear warheads","None"]]
  }),

  "japanese-attack-submarines": japaneseNavalArticle({
    title:"Japanese postwar attack submarines",
    category:"Submarine development",
    landscape:lineageLandscape,
    lead:"Japan maintains high-speed conventional and nuclear fleet-attack submarine schools. Their roles are fixed, while the former Type 30/38 sequence and exact 1985 hull totals are reopened.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-b2d8p writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->The conventional and nuclear attack schools, their development bases, and their missions are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> Former Type 30, Type 38, and Type 24 identities, introduction bands, build totals, and the thirty-SSK, sixteen-SSN, and forty-six-attack-boat ledger are reopened.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"conventional",title:"High-speed conventional school",html:"<p>I-201 and later teardrop-hull experience lead to boats for coastal denial, strait ambush, training, and economical ocean patrol. The postwar class sequence and total remain open.</p>"},{id:"nuclear",title:"Nuclear fleet-attack school",html:"<p>First-generation PWR boats in the late 1950s and 1960s lead to compact-PWR improvement. Their missions include carrier screening, submarine hunting, distant reconnaissance, and independent attack; class names and totals remain open.</p>"}],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-type-32-submarine.html",kicker:"Missile complement",label:"Guided-Missile Branch"},{href:"japanese-carrier-system.html",kicker:"Protected fleet",label:"Japanese Carrier System"}],
    facts:[["Conventional school","Fixed role"],["Nuclear school","Fixed role"],["Postwar class names","Open"],["1985 attack total","Open"],["Former Type 30/38 ledger","Withdrawn"]]
  }),

  "japanese-type-32-submarine": japaneseNavalArticle({
    title:"Japanese guided-missile submarine branch",
    category:"Submarine development",
    eyebrow:"Imperial Japanese Navy · concealed conventional missile strike",
    landscape:lineageLandscape,
    lead:`The Japanese guided-missile submarine branch provides concealed long-range anti-ship attack and conventional land strike. It grows from Japan's large ocean-submarine tradition and missile-control experience but does not form a nuclear-deterrent arm: the setting has no nuclear weapons.${japaneseMissileSubmarineCanon} Class identities, propulsion, magazine arrangement, weapons, and the 1985 hull total remain open.${japaneseMissileSubmarineExtrapolation}`,
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-g7i4u writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->Japan's guided-missile submarine school and its long-range anti-ship and conventional land-attack missions are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The Type 32 identity, nuclear propulsion, six-boat total, dates, specifications, and active allocation are reopened registry extrapolation.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"origin",title:"Development basis",html:`<p>Japan enters the postwar period with experience in large ocean-going submarines and later develops the control, navigation, communications, and targeting practices needed to employ guided weapons at long range.${japaneseMissileSubmarineCanon}</p><p>The branch is defined by its mission rather than a settled class ladder. The record does not establish whether the first operational boats were purpose-built, converted, conventional, or nuclear.${japaneseMissileSubmarineExtrapolation}</p>`},
      {id:"mission",title:"Anti-ship and land-attack missions",html:`<p>The branch attacks surface formations at long range and conducts conventional strikes against land targets.${japaneseMissileSubmarineCanon} Appropriate target categories include ports, airfields, radar sites, fuel storage, communications, and other operational infrastructure whose disruption matters to a maritime campaign.${japaneseMissileSubmarineExtrapolation}</p><p>It is not an SSBN force and carries no nuclear warheads.${japaneseMissileSubmarineCanon}</p>`},
      {id:"targeting",title:"Targeting and reconnaissance",html:`<p>A missile's reach is useful only when the firing boat receives a timely and sufficiently reliable target solution. Patrol aircraft, satellites, signals intelligence, island stations, surface groups, and other submarines can contribute observations to the wider Japanese maritime picture.${japaneseMissileSubmarineCanon}${japaneseMissileSubmarineExtrapolation}</p><p>Moving ships present the harder problem. Delayed reports, identification uncertainty, and the risk of striking a neutral or friendly vessel can prevent launch even when a target lies within nominal range.${japaneseMissileSubmarineExtrapolation}</p>`},
      {id:"carrier",title:"Place in the carrier system",html:`<p>The branch supports the <a href='japanese-carrier-system.html'>carrier-centered fleet</a> by threatening hostile formations from concealed bearings and by striking shore systems that support enemy naval operations.${japaneseMissileSubmarineCanon}${japaneseMissileSubmarineExtrapolation}</p><p>Missile boats do not replace carrier aircraft. Aircraft can search, identify, revisit, and adapt in flight; the submarine supplies surprise, persistence, and a launch axis that may force the enemy to divide defenses.${japaneseMissileSubmarineExtrapolation}</p>`},
      {id:"communications",title:"Communications and launch authority",html:`<p>Submerged communications impose a trade between connectivity and concealment. Prearranged patrol areas, brief transmissions, one-way broadcasts, relays, and later satellite reception can reduce exposure while preserving national control.${japaneseMissileSubmarineExtrapolation}</p><p>Exact command arrangements, authentication procedures, data rates, and launch authorities remain open. The absence of nuclear warheads changes the political stakes but does not make an attack on a port or airfield routine.</p>`},
      {id:"platform",title:"Platform and magazine questions",html:`<p>The current register leaves propulsion, launcher arrangement, missile stowage, reload practice, sensors, torpedo fit, dimensions, and crew open.${japaneseMissileSubmarineExtrapolation} A nuclear boat offers sustained submerged mobility; a conventional boat may be cheaper and easier to distribute. Neither option is fixed for the branch.</p><p>Magazine size must be balanced against torpedoes, machinery, habitability, sensors, and reserve buoyancy. A large nominal missile load would therefore require evidence from a future registry rather than inference from the mission alone.${japaneseMissileSubmarineExtrapolation}</p>`},
      {id:"operations",title:"Operational employment",html:`<p>A guided-missile boat may patrol independently, support a carrier operation, reinforce a strait or island-defense plan, or hold a known shore facility at risk. It benefits from attack submarines scouting likely approaches and from the wider fleet supplying identification and timing.${japaneseMissileSubmarineCanon}${japaneseMissileSubmarineExtrapolation}</p><p>Exact patrol zones, firing exercises, combat uses, and deployment cycles remain open.</p>`},
      {id:"survival",title:"Survival and countermeasures",html:`<p>Long-range launch does not remove the submarine's vulnerability. Transit routes, communications windows, missile launch, and predictable operating areas can expose a boat to patrol aircraft, escorts, mines, fixed sensors, and hostile submarines.${japaneseMissileSubmarineExtrapolation}</p><p>Survival depends upon concealment, route planning, acoustic discipline, countermeasures, and coordination with Japanese attack boats and surface forces. No exact defensive suite is fixed.</p>`},
      {id:"registry",title:"Open class registry",html:`<p>The former Type 32 label described a six-boat nuclear family introduced in 1972–79. That identity, propulsion choice, date band, build total, specifications, and active allocation are withdrawn.${japaneseMissileSubmarineExtrapolation}</p><p>The active canon retains the guided-missile school and its two principal missions. It does not provide a substitute class name or hull count.${japaneseMissileSubmarineCanon}</p>`}
    ],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-attack-submarines.html",kicker:"Attack complement",label:"Japanese Attack Submarines"},{href:"japanese-carrier-system.html",kicker:"Wider battle system",label:"Japanese Carrier System"},{href:"type-42-tsubaki.html",kicker:"Surface and aviation missile context",label:"Type 42 Tsubaki"},{href:"japanese-transport-submarines.html",kicker:"Parallel special branch",label:"Undersea Assault Transports"}],
    facts:[["Service","Imperial Japanese Navy"],["Branch","Guided-missile submarine"],["Missions","Long-range anti-ship attack · conventional land strike"],["Development basis","Large ocean submarines · missile-control experience"],["Nuclear warheads","None"],["Class names","Open"],["Propulsion","Open"],["Magazine arrangement","Open"],["1985 total","Open"],["Former label","Type 32 SSGN · withdrawn"]]
  }),

  "japanese-transport-submarines": japaneseNavalArticle({
    title:"Japanese undersea assault transports",
    category:"Naval logistics",
    landscape:lineageLandscape,
    lead:"Japan maintains an undersea assault-transport branch for marines, swimmers, minisubmarines, high-value cargo, and surprise lodgment. Its postwar class names and exact 1985 total remain open.",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-h8j5v writer=g kind=revision created=2026-08-16T04:30:00-06:00 -->The wartime transport-submarine and special-force development basis and the later assault-transport role are direct setting canon.<sup class='canon-note' data-provenance='a'>[a]</sup> The former Type D/I-361, Type 18/I-460, and Type 36/I-490 setting sequence, detailed specifications, build totals, and allocation are reopened.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[{id:"role",title:"Established role",html:"<p>The branch carries marines, swimmers, minisubmarines, high-value cargo, and selected equipment to open an unexpected access point. It supports surprise lodgment rather than routine strategic sealift.</p>"},{id:"registry",title:"Open postwar registry",html:"<p>Postwar class identities, propulsion, capacities, performance, build totals, individual hulls, and 1985 allocation remain open. The former three-class ladder survives only as a legacy record.</p>"}],
    related:[{href:"japanese-submarine-force.html",kicker:"Parent arm",label:"Japanese Submarine Force"},{href:"japanese-attack-submarines.html",kicker:"Approach screen",label:"Japanese Attack Submarines"},{href:"german-submersible-transports.html",kicker:"German comparison",label:"German Submersible Transports"}],
    facts:[["Branch","Undersea assault transport"],["Development basis","Wartime transport and special-force carriage"],["Postwar classes","Open"],["1985 total","Open"],["Former Type D/18/36 ledger","Withdrawn"]]
  })
});
