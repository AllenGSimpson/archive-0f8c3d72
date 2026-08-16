window.deepArticles = window.deepArticles || {};

const britishFrigateSsnCanon = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
const britishFrigateSsnExtrapolation = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

const britishFrigateClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Purpose</th></tr></thead><tbody><tr><td><a href='whitby-class-frigate.html'>Whitby</a></td><td>16</td><td>1954–1959</td><td>2,800 t</td><td>0</td><td>Quiet first-generation postwar ASW</td></tr><tr><td><a href='rothesay-class-frigate.html'>Rothesay</a></td><td>20</td><td>1958–1965</td><td>3,000 t</td><td>10</td><td>Helicopter ASW and variable-depth sonar</td></tr><tr><td><a href='leander-class-frigate.html'>Leander</a></td><td>26</td><td>1962–1973</td><td>3,600 t</td><td>20</td><td>General escort with strong ASW specialization</td></tr><tr><td><a href='broadsword-class-frigate.html'>Broadsword</a></td><td>18</td><td>1975–1985</td><td>4,400 t</td><td>18</td><td>Towed-array submarine hunter and point-defense escort</td></tr></tbody></table></div>";

const britishSsnClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Submerged displacement</th><th>Active, 1985</th></tr></thead><tbody><tr><td><a href='valiant-class-submarine.html'>Valiant</a></td><td>6</td><td>1963–1970</td><td>4,900 t</td><td>6</td></tr><tr><td><a href='churchill-class-submarine.html'>Churchill</a></td><td>6</td><td>1970–1977</td><td>5,000 t</td><td>6</td></tr><tr><td><a href='trafalgar-class-submarine.html'>Trafalgar</a></td><td>4</td><td>1981–1985</td><td>5,300 t</td><td>4</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "british-frigate-force": britishNavalArticle({
    title:"British postwar frigate and anti-submarine force",
    category:"Anti-submarine warfare",
    landscape:britishMaritimeLandscape,
    lead:"The British postwar frigate force was the specialized anti-submarine screen of the Siege Commonwealth. The current incorporated reconstruction places forty-eight Rothesay-, Leander-, and Broadsword-class frigates in active service in 1985 and treats Whitby as the preceding quiet-escort generation, but its exact classes and totals remain provisional.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf1p2 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes Britain's route-centered fleet, unusually strong frigate force, force-wide ASW emphasis, and progression through helicopters, variable-depth sonar, passive processing, and towed arrays.${britishFrigateSsnCanon} The Whitby–Rothesay–Leander–Broadsword register, exact totals, dates, displacements, propulsion, rosters, and 1985 balance are retained as incorporated reconstruction, not settled canon.${britishFrigateSsnExtrapolation} Detailed equipment, crews, formations, readiness, deployments, and individual histories remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"requirement",title:"Requirement",html:"<p>German attack and guided-missile submarines threatened merchant routes, carriers, amphibious ships, and overseas bases. Britain answered with quiet escorts, shipborne helicopters, variable-depth sonar, towed arrays, and Commonwealth patrol coverage.</p>"},
      {id:"classes",title:"Classes",html:britishFrigateClassTable},
      {id:"whitby",title:"Whitby class",html:"<p>Sixteen <a href='whitby-class-frigate.html'>Whitby-class frigates</a> entered service from 1954 through 1959. They established the first quiet postwar ASW generation and had all decommissioned by 1980.</p>"},
      {id:"rothesay",title:"Rothesay class",html:"<p>Twenty <a href='rothesay-class-frigate.html'>Rothesay-class frigates</a> entered service between 1958 and 1965. Ten remained active in 1985 with helicopter ASW and variable-depth sonar.</p>"},
      {id:"leander",title:"Leander class",html:"<p>Twenty-six <a href='leander-class-frigate.html'>Leander-class frigates</a> entered service from 1962 through 1973. Twenty remained active as general escorts with strong anti-submarine specialization.</p>"},
      {id:"broadsword",title:"Broadsword class",html:"<p>Eighteen <a href='broadsword-class-frigate.html'>Broadsword-class frigates</a> entered service between 1975 and 1985. All remained active as towed-array submarine hunters and point-defense escorts.</p>"},
      {id:"employment",title:"Employment",html:"<p>Frigates formed convoy screens, patrolled chokepoints, protected carriers and replenishment groups, and worked with helicopters, patrol aircraft, submarines, and fixed sensors. Eighteen normally served in the simultaneous South Atlantic escort formation in early 1985.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>The active balance contained ten Rothesays, twenty Leanders, and eighteen Broadswords. Every active frigate carried a serious ASW suite. Active status did not establish deployment or immediate readiness.</p>"}
    ],
    related:[{href:"whitby-class-frigate.html",kicker:"First generation",label:"Whitby Class"},{href:"rothesay-class-frigate.html",kicker:"Helicopter ASW",label:"Rothesay Class"},{href:"leander-class-frigate.html",kicker:"General escort",label:"Leander Class"},{href:"broadsword-class-frigate.html",kicker:"Towed-array escort",label:"Broadsword Class"},{href:"british-nuclear-attack-submarines.html",kicker:"Undersea partner",label:"British SSNs"}],
    facts:[["Active frigates, 1985","48"],["Rothesay","10 active"],["Leander","20 active"],["Broadsword","18 active"],["Whitby","16 built; 0 active"],["South Atlantic simultaneous strength","18 frigates"]]
  }),

  "whitby-class-frigate": britishNavalArticle({
    title:"Whitby-class frigate",
    category:"Warship class",
    eyebrow:"Royal Navy · anti-submarine frigate · 1954–1980",
    landscape:britishLineageLandscape,
    lead:"In the current incorporated reconstruction, the Whitby class was a sixteen-ship British anti-submarine frigate class introduced between 1954 and 1959. The 2,800-tonne steam-turbine ships formed Britain's quiet first-generation postwar ASW escort line, and all had decommissioned by 1980.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf2q3 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes a large British quiet-escort line built around submarine detection and route defense.${britishFrigateSsnCanon} Whitby as the first postwar class, its sixteen-ship roster, dates, displacement, propulsion, and retirement balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Dimensions, speed, weapons, sensors, crew, builders, deployments, refits, and final dispositions remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>Whitby was designed for the submarine threat facing the Cape route, Atlantic approaches, and Commonwealth shipping after defeat. Machinery quieting and specialized detection received priority over destroyer-scale fleet air defense.</p>"},
      {id:"ships",title:"Ships in class",html:"<p>The sixteen ships were Scarborough, Torquay, Whitby, Blackpool, Eastbourne, Tenby, Deal, Hastings, Dartmouth, Dover, Harwich, Ilfracombe, Newhaven, Ramsgate, Folkestone, and Southend.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 2,800 tonnes at full load and used steam turbines. The class is registered as a quiet first-generation postwar ASW escort. Exact weapons, sonar, dimensions, speed, and complement remain open.</p>"},
      {id:"service",title:"Service",html:"<p>Whitby ships escorted merchant and naval formations, patrolled approaches and chokepoints, and contributed to fleet training. Specific deployments and submarine contacts are not settled.</p>"},
      {id:"retirement",title:"Retirement",html:"<p>Decommissioning began in 1970 and ended with Folkestone in 1980. Individual disposal, transfer, or reserve histories remain open.</p>"},
      {id:"legacy",title:"Successors",html:"<p>Rothesay added helicopter operations and variable-depth sonar. Leander and Broadsword continued the escort line through general-purpose and towed-array generations.</p>"}
    ],
    related:[{href:"british-frigate-force.html",kicker:"Force history",label:"British Frigate Force"},{href:"rothesay-class-frigate.html",kicker:"Successor",label:"Rothesay Class"},{href:"siege-commonwealth-naval-system.html",kicker:"Route system",label:"Siege Commonwealth Naval System"},{href:"german-submarine-force.html",kicker:"Principal threat",label:"German Submarine Force"}],
    facts:[["Type","Anti-submarine frigate"],["Built","16"],["Commissioned","1954–1959"],["Full load","2,800 t"],["Propulsion","Steam turbine"],["Active, 1985","0"]]
  }),

  "rothesay-class-frigate": britishNavalArticle({
    title:"Rothesay-class frigate",
    category:"Warship class",
    eyebrow:"Royal Navy · helicopter ASW frigate · 1958–",
    landscape:britishLineageLandscape,
    lead:"In the current incorporated reconstruction, the Rothesay class was a twenty-ship British anti-submarine frigate class introduced between 1958 and 1965. The 3,000-tonne steam-turbine ships combined helicopter ASW with variable-depth sonar, and ten remained active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf3r4 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes British use of shipborne helicopters and variable-depth sonar in the developing frigate system.${britishFrigateSsnCanon} Rothesay's name, twenty-ship roster, dates, displacement, propulsion, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Dimensions, speed, weapons, sonar model, helicopter type, crew, builders, deployments, refits, and final dispositions remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>Rothesay followed the quiet Whitby generation and expanded the ship's search area through a helicopter and variable-depth sonar. Construction overlapped the first Leander frigates.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Status, 1985</th><th>Ships</th></tr></thead><tbody><tr><td>Active</td><td>Ardrossan, Greenock, Irvine, Ayr, Oban, Kirkwall, Lerwick, Stornoway, Fraserburgh, Peterhead</td></tr><tr><td>Decommissioned</td><td>Brighton, Londonderry, Rothesay, Campbeltown, Yarmouth, Falmouth, Lowestoft, Plymouth, Rhyl, Weymouth</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 3,000 tonnes at full load and used steam turbines. Helicopter anti-submarine operations and variable-depth sonar define the registered class role. Detailed equipment and aviation arrangements remain open.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>Variable-depth sonar allowed search below surface layers that could conceal submarines from hull-mounted sensors. A helicopter extended localization and attack beyond the ship's immediate position.</p>"},
      {id:"retirements",title:"Decommissioning",html:"<p>Ten ships decommissioned from 1978 through 1984. The other ten remained in the active force; final dispositions of retired hulls are not settled.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Ardrossan through Peterhead remained active. Their individual deployment, modernization, and readiness are open.</p>"}
    ],
    related:[{href:"british-frigate-force.html",kicker:"Force history",label:"British Frigate Force"},{href:"whitby-class-frigate.html",kicker:"Predecessor",label:"Whitby Class"},{href:"leander-class-frigate.html",kicker:"Overlapping successor",label:"Leander Class"},{href:"royal-navy-submarine-force.html",kicker:"Undersea arm",label:"Royal Navy Submarine Force"}],
    facts:[["Type","ASW frigate"],["Built","20"],["Commissioned","1958–1965"],["Full load","3,000 t"],["Propulsion","Steam turbine"],["Active, 1985","10"],["Principal systems","Helicopter and variable-depth sonar"]]
  }),

  "leander-class-frigate": britishNavalArticle({
    title:"Leander-class frigate",
    category:"Warship class",
    eyebrow:"Royal Navy · general escort · 1962–",
    landscape:britishLineageLandscape,
    lead:"In the current incorporated reconstruction, the postwar Leander class was a twenty-six-ship British frigate class introduced between 1962 and 1973. The 3,600-tonne steam-turbine ships served as general escorts with strong anti-submarine specialization, and twenty remained active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf4s5 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes the frigate as Britain's central ASW workhorse within a wider route-defense fleet.${britishFrigateSsnCanon} The postwar Leander name, twenty-six-ship roster, dates, displacement, propulsion, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Its distinction from the surviving prewar cruisers follows that reconstruction; detailed design and service history remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>Leander followed Whitby and Rothesay while broadening the postwar frigate into a general escort. Anti-submarine warfare remained the strongest specialization, but the class served across convoy, fleet, and presence duties.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Status, 1985</th><th>Ships</th></tr></thead><tbody><tr><td>Active</td><td>Pollux, Jason, Medea, Atalanta, Bellerophon, Andromache, Phaeton, Daedalus, Eurydice, Icarus, Calypso, Circe, Electra, Europa, Astraea, Bellona, Ceres, Hebe, Hecate, Telemachus</td></tr><tr><td>Decommissioned</td><td>Hector, Perseus, Theseus, Helen, Paris, Castor</td></tr></tbody></table></div>"},
      {id:"designation",title:"Class designation",html:"<p>The postwar frigate class was distinct from the older Leander-class cruisers that survived into the early postwar period. Shared class naming does not place the cruiser hulls inside the twenty-six-frigate total.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each frigate displaced 3,600 tonnes at full load and used steam turbines. The registered role was general escort with strong ASW specialization. Exact weapons, sensors, aviation, dimensions, speed, and complement remain open.</p>"},
      {id:"service",title:"Service",html:"<p>Leanders protected merchant routes, carriers, amphibious groups, and auxiliaries and performed patrol and presence duties. They worked with helicopters, patrol aircraft, submarines, and other escorts.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Twenty ships remained active. Hector, Perseus, Theseus, Helen, Paris, and Castor had decommissioned between 1980 and 1984.</p>"}
    ],
    related:[{href:"british-frigate-force.html",kicker:"Force history",label:"British Frigate Force"},{href:"rothesay-class-frigate.html",kicker:"Earlier frigate",label:"Rothesay Class"},{href:"broadsword-class-frigate.html",kicker:"Later frigate",label:"Broadsword Class"},{href:"cape-route.html",kicker:"Route geography",label:"Cape Route"}],
    facts:[["Type","General-purpose frigate"],["Built","26"],["Commissioned","1962–1973"],["Full load","3,600 t"],["Propulsion","Steam turbine"],["Active, 1985","20"],["Decommissioned","6"]]
  }),

  "broadsword-class-frigate": britishNavalArticle({
    title:"Broadsword-class frigate",
    category:"Warship class",
    eyebrow:"Royal Navy · towed-array frigate · 1975–",
    landscape:britishLineageLandscape,
    lead:"In the current incorporated reconstruction, the Broadsword class was an eighteen-ship British frigate class introduced between 1975 and 1985. All eighteen 4,400-tonne gas-turbine ships remained active as towed-array submarine hunters and point-defense escorts.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf5t6 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes Britain's mature use of passive processing and towed arrays in a large frigate force, with destroyers retaining the stronger fleet-air-defense emphasis.${britishFrigateSsnCanon} Broadsword's name, eighteen-ship roster, dates, displacement, propulsion, point-defense fit, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Detailed design and individual service histories remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>Broadsword followed the steam-powered Rothesay and Leander generations. Gas turbines, a towed-array role, and point defense supported longer-range submarine hunting and protection of high-value formations.</p>"},
      {id:"ships",title:"Ships in class",html:"<p>The eighteen ships were Battleaxe, Broadsword, Brazen, Brilliant, Boxer, Beaver, Brave, Iron Duke, Monmouth, Montrose, Campbeltown, Chatham, Cornwall, Cumberland, Argyll, Marlborough, Northumberland, and Somerset.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 4,400 tonnes at full load and used gas turbines. The class carried a towed array and point-defense weapons. Exact sonar, missiles, guns, aircraft facilities, dimensions, speed, and crew remain open.</p>"},
      {id:"asw",title:"Towed-array operations",html:"<p>A towed sensor placed part of the sonar system away from hull and machinery noise and allowed search at selected depth. Effective employment depended upon speed, sea state, array handling, signal processing, and cooperation with aircraft and other ships.</p>"},
      {id:"point-defense",title:"Point defense",html:"<p>Point-defense weapons protected the frigate and nearby ships against threats that penetrated wider fleet defenses. The registered role did not make Broadsword a replacement for cruiser or destroyer area defense.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All eighteen ships remained active, including Somerset commissioned in 1985. Work-up, deployment, and readiness are not fixed.</p>"}
    ],
    related:[{href:"british-frigate-force.html",kicker:"Force history",label:"British Frigate Force"},{href:"leander-class-frigate.html",kicker:"Preceding frigate",label:"Leander Class"},{href:"sheffield-class-destroyer.html",kicker:"Air-defense complement",label:"Sheffield Class"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Type","ASW and point-defense frigate"],["Built and active","18"],["Commissioned","1975–1985"],["Full load","4,400 t"],["Propulsion","Gas turbine"],["Principal sensor role","Towed array"]]
  }),

  "british-nuclear-attack-submarines": britishNavalArticle({
    title:"British nuclear attack submarines",
    category:"Submarine development",
    landscape:britishLineageLandscape,
    lead:"British nuclear attack submarines formed the offensive anti-submarine arm of the route-defense fleet. The current incorporated reconstruction comprises the Valiant, Churchill, and Trafalgar classes and places sixteen boats in active service in 1985 for submarine hunting, carrier screening, reconnaissance, and distant fleet attack.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf6u7 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes serious British nuclear-submarine expenditure, nuclear hunter-killers as offensive ASW assets, and missions against German submarines before they reach Commonwealth routes.${britishFrigateSsnCanon} The Valiant–Churchill–Trafalgar sequence, totals, introduction bands, displacements, rosters, commissioning years, and sixteen-boat 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Reactor types, dimensions, performance, weapons, sensors, patrols, refits, and individual histories remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>The postwar SSN line progressed through three nuclear generations while Britain retained quiet conventional Oberons and added Resolute guided-missile submarines. Nuclear propulsion supported sustained submerged movement and distant patrol.</p>"},
      {id:"classes",title:"Classes",html:britishSsnClassTable},
      {id:"valiant",title:"Valiant class",html:"<p>Six <a href='valiant-class-submarine.html'>Valiant-class boats</a> entered service within the 1963–1970 introduction band. All remained active.</p>"},
      {id:"churchill",title:"Churchill class",html:"<p>Six <a href='churchill-class-submarine.html'>Churchill-class boats</a> entered service within the 1970–1977 introduction band. All remained active.</p>"},
      {id:"trafalgar",title:"Trafalgar class",html:"<p>Four <a href='trafalgar-class-submarine.html'>Trafalgar-class boats</a> entered service within the 1981–1985 introduction band. All remained active as the newest quiet nuclear-attack generation.</p>"},
      {id:"missions",title:"Missions",html:"<p>The boats hunted submarines and surface forces, screened carriers, observed bases and routes, and supported distant task groups. Nuclear propulsion did not imply nuclear armament; the setting possessed no strategic nuclear arsenal.</p>"},
      {id:"south-atlantic",title:"South Atlantic force",html:"<p>Six SSNs formed the standard simultaneous South Atlantic strength in early 1985, with eight boats in the first-year theater pool. Individual identities and patrol histories remain open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All sixteen registered boats remained active. Active status did not establish that every boat was immediately deployable.</p>"}
    ],
    related:[{href:"valiant-class-submarine.html",kicker:"First SSN generation",label:"Valiant Class"},{href:"churchill-class-submarine.html",kicker:"Second SSN generation",label:"Churchill Class"},{href:"trafalgar-class-submarine.html",kicker:"Newest SSN generation",label:"Trafalgar Class"},{href:"oberon-class-commonwealth.html",kicker:"Conventional complement",label:"Oberon Class"},{href:"resolute-class-submarine.html",kicker:"Missile branch",label:"Resolute Class"}],
    facts:[["Classes","Valiant; Churchill; Trafalgar"],["Valiant","6 active"],["Churchill","6 active"],["Trafalgar","4 active"],["Total active, 1985","16"],["Propulsion","Nuclear"],["Nuclear weapons","None"]]
  }),

  "valiant-class-submarine": britishNavalArticle({
    title:"Valiant-class submarine",
    category:"Submarine class",
    eyebrow:"Royal Navy · nuclear attack submarine · 1963–",
    landscape:britishLineageLandscape,
    lead:"In the current incorporated reconstruction, the Valiant class comprised six British nuclear attack submarines: Valiant, Warspite, Dreadnought, Conqueror, Courageous, and Centurion. The class occupied the 1963–1970 introduction band, and all six 4,900-tonne boats remained active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf7v8 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes a British nuclear hunter-killer program directed principally toward offensive anti-submarine warfare and route defense.${britishFrigateSsnCanon} Valiant's class identity, six-boat roster, commissioning years, introduction band, displacement, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Detailed design, performance, equipment, and individual histories remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>Valiant established Britain's registered postwar SSN line. The class supplied sustained submerged reach for the Siege Commonwealth's carrier, route-defense, and distant reconnaissance requirements.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th></tr></thead><tbody><tr><td>HMS Valiant</td><td>1963</td></tr><tr><td>HMS Warspite</td><td>1964</td></tr><tr><td>HMS Dreadnought</td><td>1965</td></tr><tr><td>HMS Conqueror</td><td>1967</td></tr><tr><td>HMS Courageous</td><td>1968</td></tr><tr><td>HMS Centurion</td><td>1969</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 4,900 tonnes submerged and used nuclear propulsion. Reactor, dimensions, speed, endurance, crew, weapons, sonar, and acoustic characteristics remain open.</p>"},
      {id:"missions",title:"Missions",html:"<p>Valiant boats conducted fleet attack, submarine hunting, carrier screening, reconnaissance, and distant patrol. They depended upon bases, tenders, intelligence, communications, and reactor support.</p>"},
      {id:"succession",title:"Later classes",html:"<p>Churchill followed in the 1970s with a slightly larger submerged displacement. Trafalgar entered service in the 1980s as the newest quiet SSN generation.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six boats remained active. Their individual deployment, overhaul, and readiness are not fixed.</p>"}
    ],
    related:[{href:"british-nuclear-attack-submarines.html",kicker:"Branch history",label:"British Nuclear Attack Submarines"},{href:"churchill-class-submarine.html",kicker:"Successor",label:"Churchill Class"},{href:"oberon-class-commonwealth.html",kicker:"Conventional complement",label:"Oberon Class"},{href:"german-nuclear-attack-submarines.html",kicker:"Principal rival",label:"German Nuclear Attack Submarines"}],
    facts:[["Type","SSN"],["Ships","Valiant; Warspite; Dreadnought; Conqueror; Courageous; Centurion"],["Introduction band","1963–1970"],["Submerged displacement","4,900 t"],["Propulsion","Nuclear"],["Active, 1985","6"]]
  }),

  "churchill-class-submarine": britishNavalArticle({
    title:"Churchill-class submarine",
    category:"Submarine class",
    eyebrow:"Royal Navy · nuclear attack submarine · 1970–",
    landscape:britishLineageLandscape,
    lead:"In the current incorporated reconstruction, the Churchill class comprised six British nuclear attack submarines named for national military and political figures. The class occupied the 1970–1977 introduction band, and all six 5,000-tonne boats remained active in 1985.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf8w9 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes a continuing British nuclear hunter-killer program directed principally toward offensive anti-submarine warfare and route defense.${britishFrigateSsnCanon} Churchill's class identity, six-boat roster, commissioning years, introduction band, displacement, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Detailed design, performance, equipment, and individual histories remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>Churchill followed the Valiant class and continued Britain's nuclear fleet-attack program through the 1970s. The registered displacement increased to 5,000 tonnes submerged.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th></tr></thead><tbody><tr><td>HMS Winston Churchill</td><td>1970</td></tr><tr><td>HMS Duke of Wellington</td><td>1971</td></tr><tr><td>HMS Earl Mountbatten</td><td>1972</td></tr><tr><td>HMS Lord Nelson</td><td>1974</td></tr><tr><td>HMS Francis Drake</td><td>1975</td></tr><tr><td>HMS Walter Raleigh</td><td>1976</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 5,000 tonnes submerged and used nuclear propulsion. Reactor, dimensions, speed, endurance, crew, weapons, sonar, and acoustic characteristics remain open.</p>"},
      {id:"missions",title:"Missions",html:"<p>Churchill boats hunted submarines and surface formations, screened carriers, watched routes and bases, and supported distant Commonwealth operations. Exact patrol areas and operational histories remain unsettled.</p>"},
      {id:"naming",title:"Naming",html:"<p>The roster used the names Winston Churchill, Duke of Wellington, Earl Mountbatten, Lord Nelson, Francis Drake, and Walter Raleigh. Pennants remained administrative identifiers rather than substitutes for ship names.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six boats remained active alongside six Valiants and four Trafalgars. Individual readiness and refit state are open.</p>"}
    ],
    related:[{href:"british-nuclear-attack-submarines.html",kicker:"Branch history",label:"British Nuclear Attack Submarines"},{href:"valiant-class-submarine.html",kicker:"Predecessor",label:"Valiant Class"},{href:"trafalgar-class-submarine.html",kicker:"Successor",label:"Trafalgar Class"},{href:"royal-navy-submarine-force.html",kicker:"Parent arm",label:"Royal Navy Submarine Force"}],
    facts:[["Type","SSN"],["Ships","Winston Churchill; Duke of Wellington; Earl Mountbatten; Lord Nelson; Francis Drake; Walter Raleigh"],["Introduction band","1970–1977"],["Submerged displacement","5,000 t"],["Propulsion","Nuclear"],["Active, 1985","6"]]
  }),

  "trafalgar-class-submarine": britishNavalArticle({
    title:"Trafalgar-class submarine",
    category:"Submarine class",
    eyebrow:"Royal Navy · nuclear attack submarine · 1981–",
    landscape:britishLineageLandscape,
    lead:"In the current incorporated reconstruction, the Trafalgar class comprised the British nuclear attack submarines Trafalgar, Turbulent, Tireless, and Torbay. The class occupied the 1981–1985 introduction band, and all four 5,300-tonne boats remained active as Britain's newest quiet SSN generation.",
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-bf9x0 writer=g kind=revision created=2026-08-16T15:45:00-06:00 -->Later naval doctrine establishes mature British nuclear hunter-killers as offensive ASW assets in the route-defense fleet.${britishFrigateSsnCanon} Trafalgar's class identity, four-boat roster, commissioning years, introduction band, displacement, and 1985 balance are incorporated reconstruction whose exact register remains provisional.${britishFrigateSsnExtrapolation} Detailed design, performance, equipment, and individual histories remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"development",title:"Development",html:"<p>Trafalgar followed the Valiant and Churchill classes and entered service during the early 1980s expansion of Britain's South Atlantic and Commonwealth maritime commitments.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th></tr></thead><tbody><tr><td>HMS Trafalgar</td><td>1981</td></tr><tr><td>HMS Turbulent</td><td>1982</td></tr><tr><td>HMS Tireless</td><td>1983</td></tr><tr><td>HMS Torbay</td><td>1984</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 5,300 tonnes submerged and used nuclear propulsion. The class is registered as the newest quiet attack generation. Reactor, dimensions, speed, crew, weapons, sonar, and quantified acoustic performance remain open.</p>"},
      {id:"missions",title:"Missions",html:"<p>Trafalgar boats conducted fleet attack, submarine hunting, carrier screening, intelligence collection, and distant patrol. Exact assignments in the South Atlantic and elsewhere are not fixed.</p>"},
      {id:"introduction",title:"Introduction band",html:"<p>The class register uses a 1981–1985 introduction band, while the four named roster commissions fall in 1981–1984. The band remains the controlling class-level period pending any later hull decision.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four boats remained active. Their work-up, deployment, and maintenance status are open.</p>"}
    ],
    related:[{href:"british-nuclear-attack-submarines.html",kicker:"Branch history",label:"British Nuclear Attack Submarines"},{href:"churchill-class-submarine.html",kicker:"Predecessor",label:"Churchill Class"},{href:"resolute-class-submarine.html",kicker:"Missile branch",label:"Resolute Class"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Type","SSN"],["Ships","Trafalgar; Turbulent; Tireless; Torbay"],["Introduction band","1981–1985"],["Roster commissions","1981–1984"],["Submerged displacement","5,300 t"],["Propulsion","Nuclear"],["Active, 1985","4"]]
  })
});
