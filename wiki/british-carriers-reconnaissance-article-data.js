window.deepArticles = window.deepArticles || {};

const britishCarrierSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — British carriers, IFVs, reconnaissance vehicles, and Falklands baseline"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British Commonwealth strategy and expeditionary doctrine"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar armament and Falklands War"},
  {href:"https://tankmuseum.org/tank-nuts/tank-collection/bulldog/",label:"The Tank Museum — FV432 family history"},
  {href:"https://tankmuseum.org/get-inside-a-warrior-ifv/",label:"The Tank Museum — Warrior development and service context"}
];

const britishCarrierLandscape = {
  src:"assets/diagrams/british-carriers-reconnaissance.svg",
  alt:"Timeline of British carrier, infantry fighting vehicle, antitank carrier, and tracked reconnaissance development from FV432 to Warrior trials",
  caption:"Britain divides protected transport, cannon-armed infantry support, long-range antitank fire, and compact reconnaissance among related but distinct vehicle families"
};

const britishCarrierArticle = config => ({
  category:"Military equipment",
  eyebrow:"British armoured fighting vehicle",
  landscape:britishCarrierLandscape,
  ...config,
  sources:britishCarrierSources,
  categories:config.categories || ["United Kingdom","British Commonwealth","Armoured fighting vehicles","Royal Armoured Corps","Military equipment"]
});

Object.assign(window.deepArticles, {
  "british-carriers-and-reconnaissance": britishCarrierArticle({
    title:"British Carriers and Tracked Reconnaissance",
    eyebrow:"British mechanized support system · 1963–1985",
    infoboxKicker:"Carrier and reconnaissance system",
    infoboxTitle:"British carriers and reconnaissance",
    lead:"Britain's postwar light-armour system combines the <a href='fv432.html'>FV432</a> personnel carrier, cannon-armed <a href='fv435-cavalier.html'>FV435 Cavalier</a>, missile-carrying <a href='fv438-swingfire.html'>FV438 Swingfire</a>, and the compact CVR(T) pair of <a href='fv101-scorpion.html'>FV101 Scorpion</a> and <a href='fv107-scimitar.html'>FV107 Scimitar</a>. The larger <a href='fv510-warrior.html'>FV510 Warrior</a> enters troop trials in 1985 but does not join the Falklands force.",
    canon:"The six registered vehicles, introduction dates, weights, crews, armaments, broad roles, Cavalier's FV430-family basis and rear door, its omission of firing ports, CVR(T)'s low ground pressure and transport value, Swingfire's British carrier integration, Warrior's trials-only status, and the five Falklands theater totals are fixed. Dimensions, armor, engine and speed data, ammunition loads, procurement totals, organizations, daily readiness, losses, and post-1985 development remain open.",
    sections:[
      {id:"doctrine",title:"Four complementary functions",html:"<p>The fleet is not one linear replacement series. <a href='fv432.html'>FV432</a> carries infantry, <a href='fv435-cavalier.html'>Cavalier</a> adds turreted cannon fire, <a href='fv438-swingfire.html'>Swingfire</a> supplies long-range antitank engagement, and CVR(T) performs reconnaissance and light fire support.</p><p>This division lets the Army mix mature, transportable vehicles to suit terrain and lift capacity instead of assigning every task to one increasingly heavy design.</p>"},
      {id:"registry",title:"Registered vehicles",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Vehicle</th><th>Introduction</th><th>Weight</th><th>Crew / dismounts</th><th>Principal armament</th><th>Role</th></tr></thead><tbody><tr><td><a href='fv432.html'>FV432 Mk 1</a></td><td>1963</td><td>15.3 t</td><td>2 + 10</td><td>7 mm L7 TADEN</td><td>Tracked personnel carrier</td></tr><tr><td><a href='fv438-swingfire.html'>FV438 Swingfire</a></td><td>1969</td><td>16.2 t</td><td>3</td><td>Four ready Swingfire missiles</td><td>Long-range antitank carrier</td></tr><tr><td><a href='fv101-scorpion.html'>FV101 Scorpion</a></td><td>1971</td><td>8.1 t</td><td>3</td><td>76 mm L23</td><td>Reconnaissance and fire support</td></tr><tr><td><a href='fv107-scimitar.html'>FV107 Scimitar</a></td><td>1971</td><td>8.0 t</td><td>3</td><td>30 mm RARDEN</td><td>Tracked reconnaissance</td></tr><tr><td><a href='fv435-cavalier.html'>FV435 Cavalier</a></td><td>1972</td><td>18.2 t</td><td>3 + 6</td><td>30 mm RARDEN; coaxial 7 mm</td><td>Infantry fighting vehicle</td></tr><tr><td><a href='fv510-warrior.html'>FV510 Warrior</a></td><td>1985 trials</td><td>25.4 t</td><td>3 + 7</td><td>30 mm RARDEN</td><td>Pre-production troop-trial IFV</td></tr></tbody></table></div>"},
      {id:"fv430",title:"FV430-family base",html:"<p>FV432 establishes the standard tracked personnel-carrier fleet from 1963. Its automotive family also supports specialized vehicles, including FV438 and the setting-specific Cavalier. Shared ancestry eases training and sustainment even though the vehicles perform different tactical work.</p>"},
      {id:"cavalier",title:"The Cavalier compromise",html:"<p>The 1972 Cavalier uses FV430-family automotive components, a rear troop door, and no firing ports. Its three-person crew and six infantry dismounts fit into a cramped and imperfect vehicle, but its 30 mm RARDEN prevents Britain from waiting until Warrior for a true cannon-armed infantry fighting vehicle.</p>"},
      {id:"reconnaissance",title:"CVR(T) reconnaissance",html:"<p>Scorpion and Scimitar share the compact CVR(T) concept but carry different weapons. Scorpion's 76 mm L23 supplies light fire support; Scimitar's 30 mm RARDEN supports the reconnaissance fight. Low ground pressure, compact dimensions, and transportability make the family especially useful to Canada, the wider Commonwealth, and the Falklands expedition.</p>"},
      {id:"antitank",title:"Swingfire layer",html:"<p>FV438 carries four ready Swingfire missiles as the force's long-range antitank carrier. Swingfire also appears on CVR(T)-derived vehicles. The British missile system is therefore integrated with domestic carrier families rather than tied to an American chassis.</p>"},
      {id:"warrior",title:"Warrior transition",html:"<p>The 25.4-tonne FV510 Warrior begins pre-production and troop trials in 1985. It carries a three-person crew, seven infantry, and a 30 mm RARDEN, but it has not yet become the Army's normal service IFV. Cavalier remains the deployed cannon-armed infantry vehicle.</p>"},
      {id:"falklands",title:"Falklands force boundary",html:"<p>The registered South Atlantic theater strength includes 36 FV432-family vehicles, 12 Cavaliers, eight FV438 Swingfires, 24 Scimitars, and 12 Scorpions. Actual strength available on a particular day may be lower because of shipping, maintenance, weather, and battle damage.</p><p>Warrior remains in troop trials and does not deploy. This boundary makes the campaign a test of the mature FV430 and CVR(T) systems rather than the successor fleet.</p>"}
    ],
    related:[{href:"fv432.html",kicker:"Standard tracked carrier",label:"FV432"},{href:"fv435-cavalier.html",kicker:"First-generation British IFV",label:"FV435 Cavalier"},{href:"fv438-swingfire.html",kicker:"Long-range antitank carrier",label:"FV438 Swingfire"},{href:"fv101-scorpion.html",kicker:"Light fire support",label:"FV101 Scorpion"},{href:"fv107-scimitar.html",kicker:"Tracked reconnaissance",label:"FV107 Scimitar"},{href:"fv510-warrior.html",kicker:"1985 troop trials",label:"FV510 Warrior"}],
    facts:[["Country","United Kingdom"],["Coverage","1963–1985"],["Registered vehicles","Six"],["Principal families","FV430 and CVR(T)"],["Standard carrier","FV432 Mk 1"],["Deployed IFV","FV435 Cavalier"],["1985 successor","FV510 Warrior, trials only"],["Falklands vehicles","92 registered"]]
  }),

  "fv432": britishCarrierArticle({
    title:"FV432",
    eyebrow:"British tracked personnel carrier · introduced 1963",
    infoboxKicker:"FV430-family personnel carrier",
    infoboxTitle:"FV432 Mk 1",
    lead:"FV432 Mk 1 is Britain's standard tracked personnel carrier from 1963. The 15.3-tonne vehicle carries a crew of two and ten infantry, and its automotive family supplies the basis for specialized British carriers including <a href='fv438-swingfire.html'>FV438 Swingfire</a> and <a href='fv435-cavalier.html'>FV435 Cavalier</a>.",
    canon:"The Mk 1 designation, 1963 introduction, 15.3-tonne weight, crew of two plus ten infantry, 7 mm L7 TADEN, standard tracked-carrier role, FV430-family relationship, and Falklands family total of 36 are fixed. Dimensions, protection, engine, speed, range, amphibious equipment, production, variants, unit allocations, and losses remain open.",
    sections:[
      {id:"role",title:"Role",html:"<p>FV432 moves a full infantry group under tracked protection and provides the basic battlefield transport layer beside Britain's tanks, artillery, engineers, and reconnaissance vehicles.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Mark</th><td>FV432 Mk 1</td></tr><tr><th>Introduction</th><td>1963</td></tr><tr><th>Combat weight</th><td>15.3 tonnes</td></tr><tr><th>Crew and dismounts</th><td>2 + 10</td></tr><tr><th>Armament</th><td>7 mm L7 TADEN</td></tr><tr><th>Role</th><td>Standard tracked personnel carrier</td></tr></tbody></table></div>"},
      {id:"family",title:"FV430 family",html:"<p>The carrier anchors a wider automotive family. <a href='fv438-swingfire.html'>FV438</a> adapts it to long-range guided antitank work, while the setting-specific <a href='fv435-cavalier.html'>Cavalier</a> uses family components for a cannon-armed infantry fighting vehicle.</p>"},
      {id:"infantry",title:"Infantry transport",html:"<p>The two-person vehicle crew leaves room for ten dismounts, larger than Cavalier's six-person infantry group. That capacity keeps FV432 central even after turreted infantry vehicles appear.</p>"},
      {id:"falklands",title:"Falklands service",html:"<p>Thirty-six FV432-family vehicles form the registered theater baseline. They support the British armored and infantry force alongside Cavalier, Swingfire, Scorpion, and Scimitar. The figure is a theater total, not a promise that all thirty-six are operational at once.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>The register does not yet fix engines, road speed, dimensions, armor, range, specialist subvariant breakdown, formations, losses, or retirement. Historical details should not be imported automatically into the altered Commonwealth procurement history.</p>"}
    ],
    related:[{href:"british-carriers-and-reconnaissance.html",kicker:"National vehicle family",label:"British Carriers and Reconnaissance"},{href:"fv435-cavalier.html",kicker:"Cannon-armed family development",label:"FV435 Cavalier"},{href:"fv438-swingfire.html",kicker:"Antitank family vehicle",label:"FV438 Swingfire"},{href:"fv107-scimitar.html",kicker:"Reconnaissance companion",label:"FV107 Scimitar"},{href:"chieftain-tank.html",kicker:"Falklands tank companion",label:"Chieftain"},{href:"falklands-war.html",kicker:"1985 operational theater",label:"Falklands War"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1963"],["Type","Tracked personnel carrier"],["Combat weight","15.3 t"],["Crew","2"],["Dismounts","10"],["Armament","7 mm L7 TADEN"],["Falklands family total","36"]]
  }),

  "fv435-cavalier": britishCarrierArticle({
    title:"FV435 Cavalier",
    eyebrow:"British infantry fighting vehicle · introduced 1972",
    infoboxKicker:"First-generation British IFV",
    infoboxTitle:"FV435 Cavalier",
    lead:"FV435 Cavalier is Britain's first-generation cannon-armed infantry fighting vehicle, introduced in 1972. It combines FV430-family automotive components with a 30 mm RARDEN, coaxial 7 mm weapon, rear troop door, and space for six infantry, giving the Army a deployed IFV more than a decade before <a href='fv510-warrior.html'>Warrior</a> troop trials.",
    canon:"The designation, 1972 introduction, 18.2-tonne weight, crew of three plus six infantry, 30 mm RARDEN and coaxial 7 mm armament, FV430-family automotive basis, rear door, omission of firing ports, cramped and imperfect character, first-generation IFV role, and Falklands total of 12 are fixed. Armor, dimensions, engine, speed, turret mechanics, ammunition load, procurement total, units, and losses remain open.",
    sections:[
      {id:"requirement",title:"Requirement",html:"<p>FV432 provides protected transport but not the turreted cannon support of a true infantry fighting vehicle. Cavalier answers that gap without waiting for a wholly new heavy chassis.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1972</td></tr><tr><th>Combat weight</th><td>18.2 tonnes</td></tr><tr><th>Crew and dismounts</th><td>3 + 6</td></tr><tr><th>Main armament</th><td>30 mm RARDEN, 30×170 mm</td></tr><tr><th>Secondary armament</th><td>Coaxial 7 mm</td></tr><tr><th>Role</th><td>First-generation British IFV</td></tr></tbody></table></div>"},
      {id:"design",title:"FV430-family design",html:"<p>Cavalier reuses FV430-family automotive components and retains a rear door for the infantry group. It deliberately omits firing ports. The exact turret arrangement and automotive subassemblies are not yet registered.</p>"},
      {id:"compromise",title:"A deliberate compromise",html:"<p>The turret, crew of three, and six dismounts produce a cramped vehicle. Cavalier is therefore understood as an imperfect bridge, but one that gives mechanized infantry a 30 mm cannon and preserves a decade of tactical experience before Warrior.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>Twelve Cavaliers form the registered theater strength. They accompany <a href='chieftain-tank.html'>Chieftain Mk 10</a>, FV432 carriers, CVR(T), and Swingfire against Argentine mechanized defenses. Exact daily availability and losses remain open.</p>"},
      {id:"succession",title:"Warrior boundary",html:"<p><a href='fv510-warrior.html'>FV510 Warrior</a> begins troop trials in 1985 but does not deploy to the Falklands. Cavalier consequently remains the British cannon-armed IFV of the campaign rather than disappearing retrospectively beneath the newer program.</p>"}
    ],
    related:[{href:"british-carriers-and-reconnaissance.html",kicker:"National vehicle family",label:"British Carriers and Reconnaissance"},{href:"fv432.html",kicker:"Automotive family basis",label:"FV432"},{href:"fv510-warrior.html",kicker:"Trials-only successor",label:"FV510 Warrior"},{href:"fv107-scimitar.html",kicker:"Shared RARDEN armament",label:"FV107 Scimitar"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal armored battle",label:"Battle of Mount Pleasant"},{href:"vctp-74.html",kicker:"Argentine opposing IFV",label:"VCTP-74"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1972"],["Type","Infantry fighting vehicle"],["Combat weight","18.2 t"],["Crew","3"],["Dismounts","6"],["Main armament","30 mm RARDEN"],["Falklands total","12"]]
  }),

  "fv438-swingfire": britishCarrierArticle({
    title:"FV438 Swingfire",
    eyebrow:"British guided-missile carrier · introduced 1969",
    infoboxKicker:"FV430-family antitank carrier",
    infoboxTitle:"FV438 Swingfire",
    lead:"FV438 Swingfire is Britain's FV430-family long-range antitank carrier, introduced in 1969. Its three-person crew operates four ready Swingfire missiles, supplying guided antitank fire beside tanks, infantry carriers, and compact CVR(T) reconnaissance vehicles.",
    canon:"The designation, 1969 introduction, 16.2-tonne weight, crew of three, four ready Swingfire missiles, long-range antitank role, British carrier-family integration, wider use of Swingfire on CVR(T)-derived vehicles, exclusion of an American carrier basis, and Falklands total of eight FV438s are fixed. Missile range, guidance details, penetration, reload stowage, armor, engine, speed, procurement, units, and losses remain open.",
    sections:[
      {id:"role",title:"Long-range antitank role",html:"<p>FV438 extends British antitank engagement beyond direct-fire cannon vehicles. It works as a specialized carrier within a combined-arms screen rather than as a tank replacement.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1969</td></tr><tr><th>Combat weight</th><td>16.2 tonnes</td></tr><tr><th>Crew</th><td>Three</td></tr><tr><th>Ready armament</th><td>Four Swingfire missiles</td></tr><tr><th>Role</th><td>Long-range antitank carrier</td></tr></tbody></table></div>"},
      {id:"integration",title:"Domestic carrier integration",html:"<p>The missile is carried on FV438 and on CVR(T)-derived vehicles. Britain does not tie Swingfire to an American carrier chassis, preserving domestic mobility, training, and sustainment relationships.</p>"},
      {id:"employment",title:"Employment",html:"<p>Swingfire carriers cover approaches, reinforce defensive positions, and threaten armored reserves while Chieftain and Cavalier fight at direct-fire ranges. Exact batteries, command arrangements, and engagement procedures remain open.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>Eight FV438s form the registered theater strength and provide the British expedition with a guided-missile layer against Argentine armored reserves. Shipping, maintenance, weather, and tactical detachment can reduce the number available at a given engagement.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>The present register intentionally does not fix missile range, penetration, guidance method, reload count, launcher movement, armor, mobility, production, or battle claims. Those details require later canon decisions.</p>"}
    ],
    related:[{href:"british-carriers-and-reconnaissance.html",kicker:"National vehicle family",label:"British Carriers and Reconnaissance"},{href:"fv432.html",kicker:"FV430-family basis",label:"FV432"},{href:"fv435-cavalier.html",kicker:"Mechanized infantry companion",label:"FV435 Cavalier"},{href:"fv101-scorpion.html",kicker:"CVR(T) companion",label:"FV101 Scorpion"},{href:"operation-sceptre.html",kicker:"Falklands armored operation",label:"Operation Sceptre"},{href:"dragon-modelo-70.html",kicker:"Argentine guided weapon",label:"Dragón Modelo 70"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1969"],["Type","Guided antitank missile carrier"],["Combat weight","16.2 t"],["Crew","3"],["Ready missiles","4"],["Chassis family","FV430"],["Falklands total","8"]]
  }),

  "fv101-scorpion": britishCarrierArticle({
    title:"FV101 Scorpion",
    eyebrow:"British light reconnaissance vehicle · introduced 1971",
    infoboxKicker:"CVR(T) fire-support vehicle",
    infoboxTitle:"FV101 Scorpion",
    lead:"FV101 Scorpion is a British CVR(T) light reconnaissance and fire-support vehicle introduced in 1971. Its three-person crew operates a 76 mm L23 in an 8.1-tonne tracked vehicle whose low ground pressure, compact dimensions, and transportability suit Commonwealth and expeditionary service.",
    canon:"The designation, 1971 introduction, 8.1-tonne weight, crew of three, 76 mm L23, reconnaissance and fire-support role, CVR(T) qualities, and Falklands total of 12 are fixed. Armor, dimensions, engine, road speed, range, ammunition load, sights, procurement, national users, units, and losses remain open.",
    sections:[
      {id:"role",title:"Reconnaissance and fire support",html:"<p>Scorpion combines scouting mobility with a 76 mm gun for light direct-fire support. It complements the cannon-armed <a href='fv107-scimitar.html'>Scimitar</a> rather than replacing it.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1971</td></tr><tr><th>Combat weight</th><td>8.1 tonnes</td></tr><tr><th>Crew</th><td>Three</td></tr><tr><th>Main armament</th><td>76 mm L23</td></tr><tr><th>Role</th><td>Light reconnaissance and fire support</td></tr></tbody></table></div>"},
      {id:"cvrt",title:"CVR(T) concept",html:"<p>Low ground pressure, compact dimensions, and transportability make CVR(T) useful where heavier vehicles impose excessive lift or terrain costs. Those qualities fit Canada, the wider Commonwealth, and the Falklands expedition.</p>"},
      {id:"pair",title:"Relationship with Scimitar",html:"<p>The two 1971 vehicles divide armament rather than basic mobility philosophy. Scorpion carries the 76 mm L23 for light fire support; Scimitar carries the 30 mm RARDEN for tracked reconnaissance.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>Twelve Scorpions form the registered theater strength, half the Scimitar total. They operate within a broader light-armour fleet supporting infantry, carriers, antitank teams, and Chieftain tanks.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Exact mobility figures, protection, ammunition, sensors, organization, engagements, losses, and postwar Commonwealth fleet distribution remain open.</p>"}
    ],
    related:[{href:"british-carriers-and-reconnaissance.html",kicker:"National vehicle family",label:"British Carriers and Reconnaissance"},{href:"fv107-scimitar.html",kicker:"CVR(T) reconnaissance companion",label:"FV107 Scimitar"},{href:"fv438-swingfire.html",kicker:"Guided antitank support",label:"FV438 Swingfire"},{href:"fv432.html",kicker:"Tracked infantry carrier",label:"FV432"},{href:"falklands-campaign-1985.html",kicker:"1985 campaign",label:"Falklands Campaign"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1971"],["Family","CVR(T)"],["Type","Reconnaissance and fire support"],["Combat weight","8.1 t"],["Crew","3"],["Main armament","76 mm L23"],["Falklands total","12"]]
  }),

  "fv107-scimitar": britishCarrierArticle({
    title:"FV107 Scimitar",
    eyebrow:"British tracked reconnaissance vehicle · introduced 1971",
    infoboxKicker:"CVR(T) reconnaissance vehicle",
    infoboxTitle:"FV107 Scimitar",
    lead:"FV107 Scimitar is Britain's 30 mm CVR(T) reconnaissance vehicle, introduced in 1971. The 8.0-tonne, three-person vehicle combines RARDEN armament with the low ground pressure, compact dimensions, and transportability that make the CVR(T) family central to Commonwealth expeditionary reconnaissance.",
    canon:"The designation, 1971 introduction, 8.0-tonne weight, crew of three, 30 mm RARDEN in 30×170 mm, tracked reconnaissance role, CVR(T) qualities, and Falklands total of 24 are fixed. Armor, dimensions, engine, speed, range, ammunition, sensors, procurement, national users, organization, and losses remain open.",
    sections:[
      {id:"role",title:"Tracked reconnaissance",html:"<p>Scimitar scouts for heavier British forces while retaining enough cannon armament to fight for information and support exposed patrols. It is the most numerous registered British armored vehicle of its type in the Falklands expedition.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1971</td></tr><tr><th>Combat weight</th><td>8.0 tonnes</td></tr><tr><th>Crew</th><td>Three</td></tr><tr><th>Main armament</th><td>30 mm RARDEN, 30×170 mm</td></tr><tr><th>Role</th><td>Tracked reconnaissance vehicle</td></tr></tbody></table></div>"},
      {id:"cvrt",title:"CVR(T) mobility",html:"<p>The family is valued for low ground pressure, compact dimensions, and transportability. These qualities matter both for Commonwealth geography and for the shipping and terrain constraints of the South Atlantic.</p>"},
      {id:"rarden",title:"RARDEN commonality",html:"<p>Scimitar shares the 30×170 mm RARDEN caliber with <a href='fv435-cavalier.html'>Cavalier</a> and the trials-only <a href='fv510-warrior.html'>Warrior</a>. Exact mount, feed, ammunition, and sighting details are not yet fixed.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>Twenty-four Scimitars form the registered theater strength, twice the Scorpion total. They support route reconnaissance, screening, and combined-arms movement; exact tactical allocations and daily readiness remain open.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Performance, armor, dimensions, production totals, sensors, formations, engagement claims, and losses remain outside the canon register.</p>"}
    ],
    related:[{href:"british-carriers-and-reconnaissance.html",kicker:"National vehicle family",label:"British Carriers and Reconnaissance"},{href:"fv101-scorpion.html",kicker:"CVR(T) fire-support companion",label:"FV101 Scorpion"},{href:"fv435-cavalier.html",kicker:"RARDEN-armed IFV",label:"FV435 Cavalier"},{href:"fv510-warrior.html",kicker:"RARDEN-armed successor",label:"FV510 Warrior"},{href:"operation-sceptre.html",kicker:"Falklands armored operation",label:"Operation Sceptre"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal armored battle",label:"Battle of Mount Pleasant"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1971"],["Family","CVR(T)"],["Type","Tracked reconnaissance"],["Combat weight","8.0 t"],["Crew","3"],["Main armament","30 mm RARDEN"],["Falklands total","24"]]
  }),

  "fv510-warrior": britishCarrierArticle({
    title:"FV510 Warrior",
    eyebrow:"British infantry fighting vehicle · 1985 troop trials",
    infoboxKicker:"Pre-production infantry fighting vehicle",
    infoboxTitle:"FV510 Warrior",
    lead:"FV510 Warrior is Britain's 25.4-tonne next-generation infantry fighting vehicle in pre-production and troop trials during 1985. It carries a crew of three, seven infantry, and a 30 mm RARDEN, but it is not yet a normal service vehicle and does not deploy to the Falklands War.",
    canon:"The designation, 1985 troop-trial status, 25.4-tonne weight, crew of three plus seven infantry, 30 mm RARDEN in 30×170 mm, pre-production fleet boundary, and absence from the Falklands are fixed. Formal service date, production total, engine, speed, dimensions, armor, equipment, unit assignment, trial results, and post-1985 variants remain open in the setting.",
    sections:[
      {id:"program",title:"Next-generation program",html:"<p>Warrior is intended to move beyond the compromised <a href='fv435-cavalier.html'>Cavalier</a> while retaining cannon-armed infantry support. In 1985 it remains a development and training fleet rather than the Army's standard IFV.</p>"},
      {id:"configuration",title:"Registered trial configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Status</th><td>Pre-production and troop trials, 1985</td></tr><tr><th>Combat weight</th><td>25.4 tonnes</td></tr><tr><th>Crew and dismounts</th><td>3 + 7</td></tr><tr><th>Main armament</th><td>30 mm RARDEN, 30×170 mm</td></tr><tr><th>Role</th><td>Next-generation infantry fighting vehicle</td></tr></tbody></table></div>"},
      {id:"capacity",title:"Infantry capacity",html:"<p>The three-person crew and seven dismounts increase infantry capacity by one over Cavalier while preserving the 30 mm armament class. Exact internal layout and protection remain open.</p>"},
      {id:"trials",title:"Troop-trial boundary",html:"<p>Trial vehicles can inform training and doctrine without constituting an operational field force. Describing Warrior as a normal 1985 service IFV would erase this distinction and overstate British re-equipment.</p>"},
      {id:"falklands",title:"Absence from the Falklands",html:"<p>Warrior remains in Britain for trials. The expedition instead deploys twelve Cavaliers and thirty-six FV432-family vehicles, supported by CVR(T) and FV438 Swingfire. No Warrior combat record exists in the campaign.</p>"},
      {id:"open",title:"Future development",html:"<p>Formal acceptance, mass-production timing, final equipment standard, units, exports, operational history, and later variants remain open. Historical post-1985 Warrior history is not automatically canon in the fractured setting.</p>"}
    ],
    related:[{href:"british-carriers-and-reconnaissance.html",kicker:"National vehicle family",label:"British Carriers and Reconnaissance"},{href:"fv435-cavalier.html",kicker:"Operational predecessor",label:"FV435 Cavalier"},{href:"fv432.html",kicker:"Tracked-carrier foundation",label:"FV432"},{href:"fv107-scimitar.html",kicker:"Shared RARDEN armament",label:"FV107 Scimitar"},{href:"challenger-1.html",kicker:"Contemporary tank transition",label:"Challenger 1"},{href:"falklands-war.html",kicker:"Campaign from which it is absent",label:"Falklands War"}],
    facts:[["Country of origin","United Kingdom"],["Status in 1985","Pre-production troop trials"],["Type","Infantry fighting vehicle"],["Combat weight","25.4 t"],["Crew","3"],["Dismounts","7"],["Main armament","30 mm RARDEN"],["Falklands service","None"]]
  })
});

const addBritishCarrierRelation = (slug, relation) => {
  const article = window.deepArticles[slug];
  if (article && Array.isArray(article.related) && !article.related.some(item => item.href === relation.href)) {
    article.related.push(relation);
  }
};

addBritishCarrierRelation("british-tank-lineage", {href:"british-carriers-and-reconnaissance.html",kicker:"Companion vehicle system",label:"British Carriers and Reconnaissance"});
addBritishCarrierRelation("chieftain-tank", {href:"fv435-cavalier.html",kicker:"Falklands infantry companion",label:"FV435 Cavalier"});
addBritishCarrierRelation("argentine-armored-systems", {href:"british-carriers-and-reconnaissance.html",kicker:"Opposing British light armour",label:"British Carriers and Reconnaissance"});
addBritishCarrierRelation("operation-sceptre", {href:"british-carriers-and-reconnaissance.html",kicker:"British support fleet",label:"British Carriers and Reconnaissance"});
addBritishCarrierRelation("battle-mount-pleasant-1985", {href:"fv435-cavalier.html",kicker:"British infantry fighting vehicle",label:"FV435 Cavalier"});
addBritishCarrierRelation("falklands-campaign-1985", {href:"british-carriers-and-reconnaissance.html",kicker:"British theater vehicle system",label:"British Carriers and Reconnaissance"});
