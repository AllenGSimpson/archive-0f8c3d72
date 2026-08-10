window.deepArticles = window.deepArticles || {};

const germanNavalSources = [
  {href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — controlling class and force register"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German naval doctrine and military divergence"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — submarine, cruiser, and transport milestones"},
  {href:"../transcript.md",label:"Master Transcript — German submarine doctrine, intelligence, and strategy"}
];

const navalArticle = config => ({
  category:"Naval history",
  eyebrow:"Kriegsmarine · postwar development · 1947–1985",
  infoboxKicker:"German naval system",
  ...config,
  sources:[...germanNavalSources,...(config.additionalSources || [])],
  categories:config.categories || ["Germany","Kriegsmarine","Naval history","Military technology"]
});

const fleetLandscape = {
  src:"assets/diagrams/german-postwar-fleet-roles.svg",
  alt:"Diagram contrasting the display and support roles of the German surface fleet with the destructive role of the U-boat arm",
  caption:"German sea power used surface ships to fix, protect, and display while submarines carried the principal striking mission"
};

const submarineLandscape = {
  src:"assets/diagrams/german-submarine-lineage.svg",
  alt:"Timeline of German conventional, nuclear attack, guided-missile, and transport submarine lineages from Type XXI to Type XXXV",
  caption:"The 1947 Elektroboot inheritance divided into conventional attack, nuclear attack, guided-missile, and transport branches"
};

const fleet1985 = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Category</th><th>Front-line strength</th></tr></thead><tbody><tr><td>Large guided-weapon ships</td><td>2</td></tr><tr><td>Light carriers</td><td>2</td></tr><tr><td>Missile cruisers</td><td>6</td></tr><tr><td>Destroyers</td><td>20</td></tr><tr><td>Frigates</td><td>34</td></tr><tr><td>Corvettes and fast missile combatants</td><td>28</td></tr><tr><td>Nuclear attack submarines</td><td>24</td></tr><tr><td>Nuclear guided-missile submarines</td><td>14</td></tr><tr><td>Conventional submarines</td><td>42</td></tr><tr><td>Major amphibious ships</td><td>10</td></tr><tr><td>Mine-warfare ships</td><td>30</td></tr><tr><td>Major replenishment and repair ships</td><td>26</td></tr></tbody></table></div>";

const submarineTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Type</th><th>Built</th><th>Introduction</th><th>Propulsion</th><th>Mission</th><th>Active, 1985</th></tr></thead><tbody><tr><td>XXI</td><td>184</td><td>1944–50</td><td>Diesel-electric</td><td>Ocean attack</td><td>0 front-line</td></tr><tr><td>XXIII</td><td>96</td><td>1944–49</td><td>Diesel-electric</td><td>Coastal attack</td><td>0 front-line</td></tr><tr><td>XXIV</td><td>72</td><td>1951–59</td><td>Diesel-electric</td><td>Long-range ocean attack</td><td>16</td></tr><tr><td>XXVII</td><td>54</td><td>1954–65</td><td>Diesel-electric</td><td>Coastal and export</td><td>10</td></tr><tr><td>XXIX</td><td>36</td><td>1960–69</td><td>Diesel-electric</td><td>Deep-ocean quiet attack</td><td>0 front-line</td></tr><tr><td>XXX</td><td>14</td><td>1962–73</td><td>Nuclear</td><td>First Jagd-U-Boot</td><td>10</td></tr><tr><td>XXXI</td><td>10</td><td>1967–76</td><td>Nuclear</td><td>Guided-missile attack</td><td>8</td></tr><tr><td>XXXII</td><td>24</td><td>1972–84</td><td>Diesel-electric</td><td>Advanced quiet attack</td><td>16</td></tr><tr><td>XXXIII</td><td>18</td><td>1974–85</td><td>Nuclear</td><td>Second-generation attack</td><td>14</td></tr><tr><td>XXXIV</td><td>8</td><td>1981–85</td><td>Nuclear</td><td>Long-range guided-missile attack</td><td>6</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "kriegsmarine-postwar": navalArticle({
    title:"Kriegsmarine after the Second World War",
    category:"Military history",
    eyebrow:"German navy · victory, reduction, and technical reconstruction",
    landscape:fleetLandscape,
    lead:"After the Second World War, the Kriegsmarine became the naval arm of a continental empire whose decisive maritime weapon was the submarine rather than the carrier or battleship. It retained enough surface force to cover Atlantic exits, protect Norway and Iceland, support clients, escort replenishment groups, and display technical power while concentrating war planning upon quiet attack and conventional guided-missile U-boats.",
    canon:"The 1947 inheritance, strategic division of labor, registered class lineages, 1985 force totals, nuclear-propulsion role, absence of nuclear weapons, intelligence uncertainty, and surface-support mission are established. Detailed fleet commands, base order, annual budgets, patrol cycles, individual U-number allocations after 1947, and wartime loss records remain open.",
    sections:[
      {id:"inheritance",title:"Armistice inheritance",html:"<p>Germany ended 1947 with five capital ships, two carriers, eleven cruisers, forty-eight destroyers, sixty-four major escorts, and 820 physically extant submarines. Only 310 U-boats counted as front-line: 110 Type XXI, forty Type XXIII or related coastal Elektroboote, one hundred modernized Type VII and IX boats, and sixty minelaying, transport, reconnaissance, or special boats.</p><p>The excess fleet supplied crews, machinery, test hulls, exports, training, and scrap. Rapid reduction was therefore part of continuity rather than disarmament.</p>"},
      {id:"strategy",title:"Strategic division of labor",html:"<p>The service maxim held that the surface fleet fixed, threatened, and displayed while the U-boat fleet destroyed. <a href='german-surface-fleet.html'>Surface forces</a> protected exits, escorts, bases, and replenishment. The <a href='german-submarine-force.html'>submarine arm</a> threatened fleets, sea lanes, ports, airfields, fuel, rail, radar, and command centers.</p><p>Germany did not try to equal American or Japanese carrier totals. It sought to make the Atlantic unsafe for forces that assumed they could find every attacker.</p>"},
      {id:"geography",title:"Bases and geography",html:"<p>Norwegian ports, the Baltic, North Sea yards, Atlantic facilities, and the later German position in Iceland shortened access to patrol areas and complicated hostile barriers. Surface escorts, patrol aircraft, signals stations, satellites, tenders, and disguised maritime sensors supported the boats.</p><p>The base network remained vulnerable to surveillance and conventional attack. Its strength lay in dispersal, protected facilities, repair depth, and uncertainty about which departures represented combat patrols.</p>"},
      {id:"technology",title:"Technology and industry",html:"<p>The Type XXI inheritance made submerged performance the design center. Anechoic coatings, quiet machinery, batteries, nuclear propulsion, wire-guided torpedoes, passive arrays, submerged missile launch, data links, and computerized threat evaluation followed.</p><p>Nuclear power supplied endurance and speed but no nuclear warheads. Missile submarines were concealed conventional bombardment ships rather than an atomic deterrent.</p>"},
      {id:"surface",title:"Surface reconstruction",html:"<p>The wartime battleships and H-39 ships retired between 1965 and 1975. The <a href='german-carrier-force.html'>carrier arm</a> moved from Graf Zeppelin and Peter Strasser to two Europa-class light carriers. Six <a href='admiral-scheer-class.html'>Admiral Scheer-class cruisers</a> and two <a href='wotan-class.html'>Wotan-class large guided-weapon ships</a> supplied command, missiles, aviation, and visible prestige.</p>"},
      {id:"1985",title:"Fleet in 1985",html:fleet1985+"<p>The figures describe front-line strength on 1 January 1985. They do not imply that every hull was at sea, fully worked up, or available in one theater.</p>"},
      {id:"assessment",title:"Strategic assessment",html:"<p>Foreign governments could observe yards, budgets, launches, and bases but struggled to establish readiness, patrol state, conversion status, or whether repeated similar acoustic contacts represented the same boat. This uncertainty was a designed military effect.</p><p>The fleet's limit was equally real: submarines required intelligence, communications, maintenance, weapons, trained crews, and protected access. A submarine-centered navy was not an invisible or self-sufficient one.</p>"}
    ],
    related:[{href:"world-naval-balance-1985.html",kicker:"Comparative strength",label:"World Naval Balance in 1985"},{href:"naval-armistice-inventory-1947.html",kicker:"Starting inventory",label:"Naval Armistice Inventory of 1947"},{href:"german-submarine-force.html",kicker:"Principal striking arm",label:"German Submarine Force"},{href:"german-surface-fleet.html",kicker:"Supporting fleet",label:"German Surface Fleet"},{href:"german-atlantic-facilities-brittany.html",kicker:"Western base network",label:"German Atlantic Facilities in Brittany"},{href:"germany.html",kicker:"Sovereign power",label:"Greater German Reich"}],
    facts:[["Service","Kriegsmarine"],["Strategic center","U-boat force"],["1947 submarines afloat","820"],["1947 front-line submarines","310"],["1985 front-line submarines","80"],["1985 carriers","2 light carriers"],["Nuclear weapons","None"],["Reference date","1 January 1985"]]
  }),

  "german-surface-fleet": navalArticle({
    title:"German surface fleet, 1947–1985",
    landscape:fleetLandscape,
    lead:"The German surface fleet was the carrier, cruiser, destroyer, frigate, missile-craft, amphibious, mine-warfare, and auxiliary component of the postwar Kriegsmarine. Its task was not to defeat the American or Japanese fleets symmetrically but to enable submarine operations, defend approaches, escort support forces, command regional groups, and make German naval power publicly visible.",
    canon:"The strategic role, registered capital and carrier succession, surface-escort classes, 1985 totals, numbering conventions, and support relationship with the U-boat arm are established. Individual escort names, hull numbers, detailed weapons fits, formations, deployments, and refit calendars remain open unless registered elsewhere.",
    sections:[
      {id:"role",title:"Role in submarine strategy",html:"<p>Surface ships covered U-boat exits, protected Norwegian and Icelandic facilities, escorted replenishment groups, supported client fleets, conducted mine warfare, and forced opponents to allocate aircraft and ships away from submarine barriers.</p><p>Visible cruisers also advertised technology that could not be demonstrated aboard secret patrol boats.</p>"},
      {id:"capital",title:"From battleships to guided-weapon ships",html:"<p>Bismarck and Tirpitz retired in 1965 and 1968. Friedrich der Große and Großdeutschland, the completed H-39 pair, followed in 1972 and 1975. Germany did not replace them with new armored battleships.</p><p>The nuclear-electric <a href='wotan-class.html'>Wotan class</a> took the heavy command and missile role without claiming battleship classification.</p>"},
      {id:"carriers",title:"Carrier arm",html:"<p>Graf Zeppelin and Peter Strasser provided the victory fleet's aviation core and retired in 1972 and 1975. Europa and Hansa, commissioned in 1962 and 1966, remained active as thirty-six-aircraft light carriers in 1985.</p>"},
      {id:"cruisers",title:"Cruisers",html:"<p>Six <a href='admiral-scheer-class.html'>Admiral Scheer-class missile cruisers</a> entered service between 1968 and 1976. Their command facilities, aviation, guns, heavy anti-ship missiles, and vertical cells made them the practical center of surface task groups.</p>"},
      {id:"escorts",title:"Escorts and coastal combatants",html:"<p><a href='german-surface-escorts.html'>Destroyer and frigate development</a> moved from late-war gun hulls and early missile conversions to Typ 64 and Typ 76 fleet escorts and Typ 62 and Typ 74 submarine hunters. Twenty-eight Typ 73 Schnellboote supplied coastal missile ambush and surveillance.</p>"},
      {id:"balance",title:"Surface balance in 1985",html:"<p>The active surface combat system comprised two large guided-weapon ships, two light carriers, six cruisers, twenty destroyers, thirty-four frigates, and twenty-eight corvettes or fast missile combatants. Ten major amphibious ships, thirty mine-warfare ships, and twenty-six major auxiliaries sustained those combatants.</p>"},
      {id:"limits",title:"Limits",html:"<p>Germany lacked a fleet-carrier arm capable of matching Japan or the United States. Surface groups operating beyond land aviation and submarine support risked concentrated carrier attack.</p><p>The fleet was formidable where it could combine missiles, submarines, sensors, mines, and protected geography; it was not designed to seek one decisive mid-ocean gun battle.</p>"}
    ],
    related:[{href:"kriegsmarine-postwar.html",kicker:"Parent service",label:"Postwar Kriegsmarine"},{href:"german-carrier-force.html",kicker:"Naval aviation",label:"German Carrier Force"},{href:"wotan-class.html",kicker:"Heavy command ships",label:"Wotan Class"},{href:"admiral-scheer-class.html",kicker:"Cruiser lineage",label:"Admiral Scheer Class"},{href:"german-surface-escorts.html",kicker:"Destroyers and frigates",label:"German Surface Escorts"}],
    facts:[["Doctrine","Support submarine access and impose visible threat"],["Large guided-weapon ships, 1985","2"],["Light carriers, 1985","2"],["Cruisers, 1985","6"],["Destroyers, 1985","20"],["Frigates, 1985","34"],["Fast combatants, 1985","28"]]
  }),

  "german-capital-ships-postwar": navalArticle({
    title:"German capital ships after 1947",
    category:"Warship history",
    landscape:fleetLandscape,
    lead:"German capital-ship history after 1947 was the managed retirement of the victory fleet's battleships and their replacement by large missile-and-command ships rather than a new armored gun line. Bismarck, Tirpitz, Friedrich der Große, and Großdeutschland remained potent symbols but ceased to define German sea power.",
    canon:"The four principal postwar battleships, commissioning and retirement years, H-39 identity, Wotan succession, and doctrinal shift are established. Postwar refit details, reserve periods, ceremonial dispositions, museum status, and individual operational cruises remain open.",
    sections:[
      {id:"inheritance",title:"Victory fleet",html:"<p>Bismarck and Tirpitz represented the 1940–41 generation. Friedrich der Große commissioned in 1947 after completing H-39 trials, and Großdeutschland followed in 1949. Scharnhorst and Gneisenau survived the armistice but did not define the later capital lineage.</p>"},
      {id:"roles",title:"Postwar roles",html:"<p>The heavy ships served command, coastal bombardment, fleet concentration, training, diplomacy, and deterrent display. Their guns remained destructive, but missiles, aircraft, and submarines increasingly governed naval reach.</p>"},
      {id:"retirement",title:"Retirement sequence",html:"<p>Bismarck retired in 1965, Tirpitz in 1968, Friedrich der Große in 1972, and Großdeutschland in 1975. The sequence avoided one abrupt symbolic break while releasing crews and funds for submarines, escorts, missiles, and aviation.</p>"},
      {id:"successor",title:"The Wotan solution",html:"<p>Wotan and Siegfried entered service in 1978 and 1982. Their 28,000-tonne hulls carried command spaces, ninety-six missile cells, guns, helicopters, electronic warfare, and nuclear-electric propulsion.</p><p>Official classification as <em>Große Lenkwaffenschiffe</em> emphasized that they were not replacement battleships.</p>"},
      {id:"memory",title:"Memory and prestige",html:"<p>The gun ships embodied wartime victory and industrial endurance. The Wotan class embodied a later claim: Germany could retain heavy oceanic presence while letting guidance, sensors, and networked conventional missiles replace armor as the center of prestige.</p>"}
    ],
    related:[{href:"wotan-class.html",kicker:"Missile successor",label:"Wotan Class"},{href:"german-surface-fleet.html",kicker:"Fleet context",label:"German Surface Fleet"},{href:"kriegsmarine-postwar.html",kicker:"Service history",label:"Postwar Kriegsmarine"}],
    facts:[["Wartime pair","Bismarck and Tirpitz"],["H-39 pair","Friedrich der Große and Großdeutschland"],["Retirement period","1965–1975"],["Successor category","Large guided-weapon ship"],["New postwar battleship class","None"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/H-class_battleship_proposals",label:"Wikipedia — pre-divergence H-class design history"}]
  }),

  "german-carrier-force": navalArticle({
    title:"German aircraft-carrier force",
    category:"Naval aviation",
    landscape:fleetLandscape,
    lead:"The German aircraft-carrier force was a deliberately limited naval-aviation arm built around two wartime-generation carriers and two postwar light carriers. It supplied reconnaissance, fleet air defense, strike, anti-submarine aviation, and political presence without attempting to compete numerically with the carrier systems of Japan or the United States.",
    canon:"Graf Zeppelin and Peter Strasser commissioning and retirement, Europa and Hansa commissioning, registered displacements and standard air-group totals, and the limited-carrier doctrine are established. Aircraft types, squadrons, refits, deck arrangements, and operational histories remain open.",
    sections:[
      {id:"wartime",title:"Graf Zeppelin generation",html:"<p>Graf Zeppelin commissioned in 1945 and Peter Strasser in 1947. Each displaced about 35,000 tonnes at full load in its mature registered form and carried a standard forty-eight-aircraft group.</p><p>Their completion gave the victorious navy a real aviation institution, trained deck crews, doctrine, maintenance practice, and a constituency for continued carrier service.</p>"},
      {id:"limits",title:"Limits of the first generation",html:"<p>The ships were smaller than later American and Japanese fleet carriers and entered service before angled decks, steam catapults, jet handling, and helicopter anti-submarine methods matured. Postwar usefulness therefore depended upon refit and bounded missions.</p>"},
      {id:"europa",title:"Europa class",html:"<p>Europa commissioned in 1962 and Hansa in 1966. At 34,000 tonnes full load with standard thirty-six-aircraft groups, they are classified as light carriers despite being comparable in size to the earlier pair.</p><p>They support surface groups, Atlantic barriers, amphibious operations, and fleet reconnaissance rather than forming a mass carrier-strike doctrine.</p>"},
      {id:"retirement",title:"Transition",html:"<p>Graf Zeppelin retired in 1972 and Peter Strasser in 1975. The overlap allowed the service to transfer experienced personnel and preserve deck-aviation continuity without sustaining four active carriers indefinitely.</p>"},
      {id:"1985",title:"Position in 1985",html:"<p>Europa and Hansa formed the complete active carrier arm. Their value lay in giving German task groups organic aircraft and helicopters; land aviation, missiles, and submarines carried the larger strategic burden.</p>"}
    ],
    related:[{href:"german-surface-fleet.html",kicker:"Fleet context",label:"German Surface Fleet"},{href:"german-submarine-force.html",kicker:"Principal naval arm",label:"German Submarine Force"},{href:"wotan-class.html",kicker:"Command partner",label:"Wotan Class"}],
    facts:[["First carrier","Graf Zeppelin, 1945"],["Second carrier","Peter Strasser, 1947"],["Postwar class","Europa and Hansa"],["Active in 1985","2"],["Standard Europa air group","36 aircraft"],["Strategic role","Limited fleet aviation and support"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/German_aircraft_carrier_Graf_Zeppelin",label:"Wikipedia — pre-divergence Graf Zeppelin design and construction"}]
  }),

  "wotan-class": navalArticle({
    title:"Wotan-class large guided-weapon ship",
    category:"Warship class",
    eyebrow:"Große Lenkwaffenschiffe · Wotan and Siegfried · 1978–",
    landscape:fleetLandscape,
    lead:"The Wotan class is a two-ship class of nuclear-electric large guided-weapon ships operated by the Kriegsmarine. Wotan commissioned in 1978 and Siegfried in 1982 as heavily equipped command, air-defense, land-attack, and aviation platforms. They are officially large guided-weapon ships, not battleships.",
    canon:"Names, commissioning years, two-ship class, 28,000-tonne full-load displacement, nuclear-electric propulsion, four 150 mm guns, ninety-six missile cells, three helicopters, command role, conventional land attack, long-range air defense, electronic warfare, and splinter protection are established. Dimensions, speed, crew, reactor count, exact missile families, sensors, and individual deployments remain open.",
    sections:[
      {id:"origin",title:"Origin",html:"<p>The retirement of Germany's last H-39 battleship in 1975 left a prestige and command gap but did not restore a requirement for armor and very heavy guns. Submarine missile technology, naval nuclear propulsion, vertical launch, and digital command offered another solution.</p>"},
      {id:"classification",title:"Classification",html:"<p>The class is designated <em>Großes Lenkwaffenschiff</em>. The category acknowledges cruiser-scale command and missile functions in an unusually large hull without presenting the ships as battleships.</p><p>International fleet tables may group them with battleships or large armored combatants for balance, but German doctrine does not.</p>"},
      {id:"systems",title:"Registered systems",html:"<p>Each ship displaces 28,000 tonnes full load, uses nuclear-electric propulsion, carries four 150 mm guns, ninety-six missile cells, and three helicopters, and provides extensive command spaces, conventional land-attack missiles, long-range surface-to-air missiles, electronic warfare, and splinter protection.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Wotan</td><td>1978</td><td>Active</td></tr><tr><td>Siegfried</td><td>1982</td><td>Active</td></tr></tbody></table></div>"},
      {id:"role",title:"Operational role",html:"<p>The class commands surface groups, supplies deep missile magazines, coordinates air defense and aviation, attacks land targets with conventional weapons, and demonstrates German technical reach. It supports rather than replaces the submarine strike system.</p>"},
      {id:"limits",title:"Limits and open specifications",html:"<p>No registered claim establishes battleship armor, immunity to concentrated missile attack, exact reactor architecture, or one fixed missile load. The ships remain dependent upon escorts, submarines, aircraft, replenishment, and sensor networks.</p>"}
    ],
    related:[{href:"german-capital-ships-postwar.html",kicker:"Predecessor function",label:"German Capital Ships"},{href:"admiral-scheer-class.html",kicker:"Cruiser partner",label:"Admiral Scheer Class"},{href:"german-surface-fleet.html",kicker:"Fleet context",label:"German Surface Fleet"}],
    facts:[["Ships","Wotan; Siegfried"],["Commissioned","1978; 1982"],["Full-load displacement","28,000 t"],["Propulsion","Nuclear-electric"],["Gun armament","Four 150 mm guns"],["Missile capacity","96 cells"],["Aviation","Three helicopters"],["Classification","Large guided-weapon ship"]]
  }),

  "admiral-scheer-class": navalArticle({
    title:"Admiral Scheer-class missile cruiser",
    category:"Warship class",
    eyebrow:"Missile cruiser · six ships · 1968–",
    landscape:fleetLandscape,
    lead:"The Admiral Scheer class is a six-ship class of German missile cruisers commissioned between 1968 and 1976. The ships combine 150 mm guns, vertical-launch cells, heavy anti-ship missiles, two helicopters, fleet-command facilities, and large radar systems in the standard cruiser centerpiece of German surface groups.",
    canon:"Class roster, six ships, commissioning band, 14,500-tonne full-load displacement, four 150 mm guns, sixty-four vertical cells, eight heavy anti-ship missiles, two helicopters, active 1985 status, and public 1974 presentation are established. Per-ship commissioning dates, exact missile and sensor marks, dimensions, speed, crews, yards, and deployments remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class translated submerged missile-launch, guidance, and storage work into a visible surface combatant. It joined the missile age to Germany's named-cruiser tradition while providing the command volume unavailable in destroyers.</p>"},
      {id:"presentation",title:"The 1974 presentation",html:"<p>The public presentation of Admiral Scheer in 1974 revealed vertical launch and guidance capabilities that foreign analysts realized had already existed aboard German guided-missile submarines for several years.</p><p>The cruiser was therefore both a weapon and an inadvertent intelligence disclosure.</p>"},
      {id:"design",title:"Registered characteristics",html:"<p>At 14,500 tonnes full load, each ship carries four 150 mm guns, sixty-four vertical-launch cells, eight heavy anti-ship missiles, and two helicopters. Its principal roles are task-group command, air defense, surface attack, aviation, and long endurance.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioning</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Admiral Scheer</td><td>Within 1968–76 band</td><td>Active</td></tr><tr><td>Prinz Eugen</td><td>Within 1968–76 band</td><td>Active</td></tr><tr><td>Lützow</td><td>Within 1968–76 band</td><td>Active</td></tr><tr><td>Blücher</td><td>Within 1968–76 band</td><td>Active</td></tr><tr><td>Seydlitz</td><td>Within 1968–76 band</td><td>Active</td></tr><tr><td>Admiral Hipper</td><td>Within 1968–76 band</td><td>Active</td></tr></tbody></table></div>"},
      {id:"1985",title:"Position in 1985",html:"<p>All six remained active. They supplied the regular cruiser layer beneath Wotan and Siegfried and above the numbered destroyer and frigate forces.</p>"}
    ],
    related:[{href:"wotan-class.html",kicker:"Heavy command partner",label:"Wotan Class"},{href:"german-surface-escorts.html",kicker:"Escort screen",label:"German Surface Escorts"},{href:"german-guided-missile-submarines.html",kicker:"Hidden technology predecessor",label:"German Guided-Missile Submarines"}],
    facts:[["Ships built","6"],["Commissioning band","1968–1976"],["Full-load displacement","14,500 t"],["Gun armament","Four 150 mm guns"],["Vertical cells","64"],["Heavy anti-ship missiles","8"],["Aviation","Two helicopters"],["Active in 1985","6"]]
  }),

  "german-surface-escorts": navalArticle({
    title:"German postwar surface escorts",
    category:"Warship development",
    landscape:fleetLandscape,
    lead:"German postwar surface escorts were the numbered destroyers, frigates, and fast missile craft that protected submarine access, carriers, cruisers, replenishment groups, bases, and coastal waters. Their development moved from late-war gun and torpedo ships through missile conversion to digital vertical-launch fleet defense and long-range towed-array anti-submarine warfare.",
    canon:"All registered classes, build totals, introduction bands, full-load displacements, 1985 active totals, roles, and Z/F/S numbering conventions are established. Individual hull numbers, names, exact weapons, sensors, propulsion, yards, losses, exports, and refit histories remain open.",
    sections:[
      {id:"destroyers",title:"Destroyer lineage",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Role</th></tr></thead><tbody><tr><td>Typ 1944</td><td>18</td><td>1946–51</td><td>3,900 t</td><td>0</td><td>Late-war gun and torpedo destroyer</td></tr><tr><td>Typ 52</td><td>16</td><td>1953–61</td><td>4,800 t</td><td>0</td><td>First postwar missile-conversion hull</td></tr><tr><td>Typ 64</td><td>12</td><td>1965–72</td><td>5,900 t</td><td>12</td><td>Fleet air defense and surface attack</td></tr><tr><td>Typ 76</td><td>8</td><td>1977–84</td><td>7,100 t</td><td>8</td><td>Digital VLS fleet escort</td></tr></tbody></table></div>"},
      {id:"frigates",title:"Frigate lineage",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Role</th></tr></thead><tbody><tr><td>Typ 50</td><td>18</td><td>1951–58</td><td>2,500 t</td><td>0</td><td>Convoy and coastal escort</td></tr><tr><td>Typ 62</td><td>20</td><td>1963–71</td><td>3,300 t</td><td>18</td><td>ASW and general escort</td></tr><tr><td>Typ 74</td><td>16</td><td>1975–84</td><td>4,200 t</td><td>16</td><td>Quiet long-range towed-array escort</td></tr></tbody></table></div>"},
      {id:"schnellboot",title:"Typ 73 Schnellboot",html:"<p>Twenty-eight 520-tonne Typ 73 fast combatants entered service between 1973 and 1984. All remained active in 1985 for missile ambush, coastal surveillance, base defense, and operations using shore-based sensors and short resupply routes.</p>"},
      {id:"numbers",title:"Designation practice",html:"<p>Destroyers retain Z numbers, frigates F numbers, and fast combatants S numbers. Germany normally reserves personal names for carriers and cruiser-sized surface combatants.</p>"},
      {id:"doctrine",title:"Escort doctrine",html:"<p>Air defense, anti-submarine warfare, mine protection, electronic warfare, and replenishment security mattered because the U-boat fleet still required protected exits and support. The escorts did not merely screen prestige ships; they protected the infrastructure of submarine war.</p>"}
    ],
    related:[{href:"german-surface-fleet.html",kicker:"Parent fleet",label:"German Surface Fleet"},{href:"german-submarine-force.html",kicker:"Protected arm",label:"German Submarine Force"},{href:"admiral-scheer-class.html",kicker:"Cruiser groups",label:"Admiral Scheer Class"}],
    facts:[["Active destroyers, 1985","20"],["Active frigates, 1985","34"],["Active Typ 73 craft","28"],["Destroyer prefix","Z"],["Frigate prefix","F"],["Fast-combatant prefix","S"]]
  }),

  "german-submarine-force": navalArticle({
    title:"German submarine force, 1947–1985",
    category:"Submarine warfare",
    landscape:submarineLandscape,
    lead:"The German submarine force was the principal striking arm of the postwar Kriegsmarine and the world's largest front-line submarine system in 1985. It joined Type XXI submerged-operation doctrine to quiet conventional boats, nuclear Jagd-U-Boote, conventionally armed Lenkwaffen-U-Boote, global sensors, and special transport submarines.",
    canon:"The 1947 inheritance, complete Type XXI–XXXIV build and service register, 1985 total of forty-two SSKs, twenty-four SSNs, and fourteen SSGNs, doctrinal branches, conventional missile role, supporting sensor network, and intelligence uncertainty are established. Exact patrol zones, U-number assignments, weapons loads, reactor specifications, loss histories, and readiness rates remain open.",
    sections:[
      {id:"inheritance",title:"The 1947 mass",html:"<p>Germany commissioned 1,300 U-boats through 1947 and retained 820 extant hulls. Only 310 were front-line. The rest became a reservoir of crews, test beds, machinery, exports, training boats, reserve hulls, and scrap.</p>"},
      {id:"lineage",title:"Registered lineage",html:submarineTable},
      {id:"branches",title:"Combat branches",html:"<p><a href='german-conventional-submarine-line.html'>Conventional boats</a> covered ocean, coastal, export, and quiet ambush missions. <a href='german-nuclear-attack-submarines.html'>Jagd-U-Boote</a> hunted ships and submarines with nuclear endurance. <a href='german-guided-missile-submarines.html'>Lenkwaffen-U-Boote</a> delivered conventional missiles against operational targets. <a href='german-submersible-transports.html'>Transport boats</a> moved small high-value cargoes and specialists.</p>"},
      {id:"network",title:"The sensor and communications system",html:"<p>Satellites, patrol aircraft, signals stations, submarine transmitters, disguised maritime sensors, client reporting, and shore analysis converted contacts into patrol instructions. The network could cue a boat without continuously controlling it.</p><p>Its exact speed and reach were more secret than the existence of the boats themselves.</p>"},
      {id:"stealth",title:"Quieting and deception",html:"<p>Streamlined submerged hulls, anechoic tiles, machinery isolation, passive sonar, disciplined emissions, decoys, and repeated acoustic families complicated identification. Foreign crews could pass from one patrol zone to another and believe they had tracked one exceptional boat.</p>"},
      {id:"1985",title:"Front line in 1985",html:"<p>The locked force comprised forty-two conventional attack submarines, twenty-four nuclear attack submarines, and fourteen nuclear guided-missile submarines: eighty front-line boats. Construction totals were more visible than deployment or readiness.</p>"},
      {id:"limits",title:"Limits",html:"<p>No submarine could remain silent while communicating freely, and no network could classify every contact. Boats needed maintenance, weapons, trained crews, protected bases, and trustworthy intelligence.</p><p>German superiority created uncertainty and high costs for opponents; it did not make the Atlantic transparent to Berlin.</p>"}
    ],
    related:[{href:"elektroboot-heritage.html",kicker:"Design foundation",label:"Elektroboot Heritage"},{href:"german-conventional-submarine-line.html",kicker:"SSK branch",label:"Conventional Submarine Line"},{href:"german-nuclear-attack-submarines.html",kicker:"SSN branch",label:"Nuclear Jagd-U-Boote"},{href:"german-guided-missile-submarines.html",kicker:"SSGN branch",label:"Guided-Missile U-Boats"},{href:"german-submersible-transports.html",kicker:"Special branch",label:"Submersible Transports"}],
    facts:[["1947 extant boats","820"],["1947 front-line boats","310"],["1985 SSKs","42"],["1985 SSNs","24"],["1985 SSGNs","14"],["1985 front line","80"],["Nuclear warheads","None"]]
  }),

  "elektroboot-heritage": navalArticle({
    title:"Elektroboot heritage of the Kriegsmarine",
    category:"Submarine development",
    landscape:submarineLandscape,
    lead:"The Elektroboot heritage was the design, industrial, and doctrinal inheritance of the Type XXI and Type XXIII submarines. It established the postwar German assumption that a submarine should be designed first for submerged movement, sensing, and attack rather than as a surface vessel able to dive temporarily.",
    canon:"Type XXI and XXIII build totals and introduction bands in setting, ocean and coastal roles, 1947 front-line inheritance, postwar influence, rapid reduction, and role as the foundation of Types XXIV–XXXV are established. Individual hull histories, final batch differences, exact postwar modifications, surviving museums, and retirement dates remain open.",
    sections:[
      {id:"origins",title:"Pre-divergence design",html:"<p>Type XXI combined a streamlined hull, large battery installation, snorkel, quiet-running motors, rapid torpedo handling, and sensors around primarily submerged operation. Type XXIII applied the Elektroboot idea to a much smaller coastal boat.</p><p>Their historical design and early production precede the August 1941 divergence; mass service and postwar evolution belong to the setting's extended war.</p>"},
      {id:"production",title:"Setting production",html:"<p>Germany built 184 Type XXI boats from 1944 through 1950 and ninety-six Type XXIII boats from 1944 through 1949. At the 1947 armistice, 110 Type XXI and forty Type XXIII or related coastal Elektroboote counted as front-line.</p>"},
      {id:"doctrine",title:"Doctrinal break",html:"<p>The designs made submerged speed, endurance, quiet approach, passive listening, and snorkel exposure central. They did not provide nuclear endurance or unlimited high speed, but they changed what German designers expected a submarine to be.</p>"},
      {id:"industry",title:"Industrial inheritance",html:"<p>Section construction, battery and motor production, pressure-hull yards, acoustic research, crew schools, torpedo systems, and base infrastructure survived victory. Quality problems in rushed wartime construction also became a postwar argument for tighter standards and test programs.</p>"},
      {id:"successors",title:"Successor lines",html:"<p>Type XXIV extended ocean endurance. Type XXVII supplied coastal and export service, Type XXIX pursued deep-ocean quieting, and Type XXXII renewed the conventional branch. Nuclear Types XXX and XXXIII and missile Types XXXI and XXXIV changed propulsion and weapons while retaining the submerged-first premise.</p>"},
      {id:"retirement",title:"Retirement and memory",html:"<p>Neither Type XXI nor Type XXIII remained front-line in 1985. Their importance was institutional: later boats, training, foreign intelligence, export practice, and public mythology all traced the modern U-boat arm to the Elektroboot generation.</p>"}
    ],
    related:[{href:"german-submarine-force.html",kicker:"Successor system",label:"German Submarine Force"},{href:"german-conventional-submarine-line.html",kicker:"Diesel-electric successors",label:"Conventional Submarine Line"},{href:"kriegsmarine-postwar.html",kicker:"Service history",label:"Postwar Kriegsmarine"}],
    facts:[["Type XXI built","184"],["Type XXI introduction","1944–1950"],["Type XXIII built","96"],["Type XXIII introduction","1944–1949"],["Primary distinction","Designed for submerged operation"],["Front-line in 1985","None"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/German_Type_XXI_submarine",label:"Wikipedia — pre-divergence Type XXI design history"},{href:"https://en.wikipedia.org/wiki/German_Type_XXIII_submarine",label:"Wikipedia — pre-divergence Type XXIII design history"}]
  }),

  "german-conventional-submarine-line": navalArticle({
    title:"German conventional submarine line, 1951–1985",
    category:"Submarine development",
    landscape:submarineLandscape,
    lead:"The German conventional submarine line comprised Types XXIV, XXVII, XXIX, and XXXII: successive diesel-electric ocean, coastal, export, deep-water, and quiet-attack boats developed after the Elektroboot generation. It preserved a large nonnuclear force for missions where cost, numbers, coastal geometry, exportability, or low-speed quieting mattered more than sustained nuclear speed.",
    canon:"Build totals, introduction bands, propulsion, registered missions, 1985 active counts, and forty-two-boat SSK total are established. Displacements, speeds, crews, battery chemistry, torpedo loads, sensors, exact foreign operators, and per-hull histories remain open except where separately registered.",
    sections:[
      {id:"xxiv",title:"Type XXIV",html:"<p>Seventy-two Type XXIV long-range ocean attack boats entered service from 1951 through 1959. Sixteen remained active in 1985. The type was also the basis for exported boats, including Argentina's ARA <em>Salta</em>, received in 1967.</p>"},
      {id:"xxvii",title:"Type XXVII",html:"<p>Fifty-four Type XXVII coastal and export boats entered service between 1954 and 1965. Ten remained active in 1985. The line supplied less expensive regional service where a nuclear boat's endurance was unnecessary.</p>"},
      {id:"xxix",title:"Type XXIX",html:"<p>Thirty-six Type XXIX deep-ocean quiet attack boats entered service from 1960 through 1969. None remained front-line in 1985, but the type formed the bridge between first-generation postwar SSKs and Type XXXII.</p>"},
      {id:"xxxii",title:"Type XXXII",html:"<p>Twenty-four advanced quiet Type XXXII boats entered service from 1972 through 1984. Sixteen remained active in 1985 and formed the newest conventional component.</p>"},
      {id:"missions",title:"Operational niches",html:"<p>Conventional boats guarded chokepoints, operated in coastal and shelf waters, trained crews, supported exports and clients, and formed quiet ambush lines. Nuclear boats dominated sustained high-speed ocean pursuit; conventional boats remained useful precisely because not every patrol required it.</p>"},
      {id:"balance",title:"1985 composition",html:"<p>The forty-two active SSKs comprised sixteen Type XXIV, ten Type XXVII, and sixteen Type XXXII boats. Type XXIX had left the front line.</p>"}
    ],
    related:[{href:"elektroboot-heritage.html",kicker:"Design ancestry",label:"Elektroboot Heritage"},{href:"german-nuclear-attack-submarines.html",kicker:"High-end complement",label:"Nuclear Jagd-U-Boote"},{href:"argentina.html",kicker:"Export customer",label:"Argentina"},{href:"german-submarine-force.html",kicker:"Parent arm",label:"German Submarine Force"}],
    facts:[["Types","XXIV, XXVII, XXIX, XXXII"],["Total built","186"],["Propulsion","Diesel-electric"],["Active SSKs, 1985","42"],["Oldest active type","XXIV"],["Newest active type","XXXII"]]
  }),

  "german-nuclear-attack-submarines": navalArticle({
    title:"German nuclear attack submarines",
    category:"Submarine development",
    eyebrow:"Jagd-U-Boote · Types XXX and XXXIII",
    landscape:submarineLandscape,
    lead:"German nuclear attack submarines, officially Jagd-U-Boote, were the Type XXX and Type XXXIII boats designed to hunt surface ships, carriers, convoys, and hostile submarines over oceanic distances. Nuclear propulsion gave them sustained endurance and speed without producing a nuclear weapons mission.",
    canon:"Jagd-U-Boot terminology and mission, Type XXX and XXXIII build and introduction totals, 1985 active strength, nuclear propulsion, torpedo-centered role, optional encapsulated missile use, and absence of nuclear weapons are established. Reactor type, displacement, speed, crew, armament count, sensors, individual hulls, and patrol areas remain open.",
    sections:[
      {id:"concept",title:"Jagd-U-Boot concept",html:"<p>The attack branch sought ships and submarines rather than fixed land targets. Torpedoes remained the principal weapon, with encapsulated anti-ship missiles available where doctrine and fire control allowed.</p><p>Nuclear propulsion made long submerged patrols and high-speed repositioning possible; it did not make a boat silent at every speed.</p>"},
      {id:"xxx",title:"Type XXX",html:"<p>Fourteen Type XXX boats entered service from 1962 through 1973 as Germany's first nuclear Jagd-U-Boot class. Ten remained active in 1985.</p><p>The program joined naval reactor development to the Type XXI-derived submerged-first design culture.</p>"},
      {id:"xxxiii",title:"Type XXXIII",html:"<p>Eighteen second-generation Type XXXIII boats entered service from 1974 through 1985. Fourteen were active at the reference date.</p><p>The register fixes their role and generation but does not yet establish unregistered claims about speed, pump-jets, weapons loads, or reactor architecture.</p>"},
      {id:"operations",title:"Operations",html:"<p>Attack boats screened guided-missile submarines, cleared routes for transports, hunted carrier and replenishment groups, watched hostile bases, and contested Atlantic barriers. They could also cue or receive information from the wider German sensor network.</p>"},
      {id:"balance",title:"Force in 1985",html:"<p>Ten Type XXX and fourteen Type XXXIII boats produced the locked total of twenty-four SSNs. Readiness and patrol distribution remained hidden even where construction was known.</p>"},
      {id:"weapons",title:"No atomic mission",html:"<p>Neither class carried nuclear warheads because no nuclear arsenal existed. Their strategic importance came from conventional destruction, uncertainty, and the need they imposed upon every hostile carrier, convoy, and port approach.</p>"}
    ],
    related:[{href:"german-guided-missile-submarines.html",kicker:"Missile branch",label:"Guided-Missile U-Boats"},{href:"german-conventional-submarine-line.html",kicker:"Conventional complement",label:"German SSK Line"},{href:"german-submarine-force.html",kicker:"Parent arm",label:"German Submarine Force"}],
    facts:[["Official role name","Jagd-U-Boot"],["Classes","Type XXX; Type XXXIII"],["Type XXX built / active","14 / 10"],["Type XXXIII built / active","18 / 14"],["Active SSNs, 1985","24"],["Principal weapon","Torpedo"],["Nuclear warheads","None"]]
  }),

  "german-guided-missile-submarines": navalArticle({
    title:"German guided-missile submarines",
    category:"Submarine development",
    eyebrow:"Lenkwaffen-U-Boote · Types XXXI and XXXIV",
    landscape:submarineLandscape,
    lead:"German guided-missile submarines, officially Lenkwaffen-U-Boote, were nuclear-powered Type XXXI and Type XXXIV boats carrying conventionally armed missiles for submerged attack against ports, airfields, fuel storage, rail junctions, radar, headquarters, surface fleets, and carrier groups. They were concealed operational bombardment ships, not ballistic-missile submarines in an atomic deterrent.",
    canon:"Lenkwaffen-U-Boot concept and target set, Type XXXI and XXXIV construction and service totals, first Type XXXI commissioning in 1967, vertical submerged launch, 1974 public disclosure, 1985 fourteen-boat SSGN total, and conventional-only weapons are established. Missile designations, cell counts, ranges, dimensions, speed, crews, targeting procedures, patrol zones, and individual boat records remain open.",
    sections:[
      {id:"concept",title:"Conventional operational bombardment",html:"<p>Without nuclear warheads, the missile boats attacked systems rather than cities as atomic hostages. A coordinated opening could damage naval bases, fuel, runways, radar, communications, headquarters, and concentrated ships before surface forces completed their response.</p>"},
      {id:"xxxi",title:"Type XXXI",html:"<p>Ten Type XXXI nuclear guided-missile boats entered service from 1967 through 1976. The first commissioned in 1967. Two were converted to unarmed Type XXXI/T transports beginning in 1974, leaving eight combat boats active in 1985.</p>"},
      {id:"xxxiv",title:"Type XXXIV",html:"<p>Eight long-range Type XXXIV boats entered service from 1981 through 1985. Six were active at the reference date, bringing the combat SSGN force to fourteen.</p>"},
      {id:"launch",title:"Submerged vertical launch",html:"<p>The boats could launch conventionally armed guided missiles from beneath the surface. Guidance, storage, and launch-control work remained classified until the 1974 presentation of the Admiral Scheer cruiser exposed related capabilities.</p>"},
      {id:"targeting",title:"Targeting network",html:"<p>Satellites, patrol aircraft, signals stations, maritime sensors, reconnaissance, and shore analysis supplied contacts and target updates. A missile boat could threaten a carrier group only when the system produced timely and accurate targeting.</p>"},
      {id:"uncertainty",title:"Intelligence problem",html:"<p>Foreign navies knew the class existed but could not reliably establish patrol state, load, readiness, conversion status, or location. The gap between knowing the weapon and locating the boat shaped Atlantic planning.</p>"},
      {id:"classification",title:"Classification",html:"<p>The boats are SSGNs because they combine nuclear propulsion and guided conventional missiles. There is no strategically important SSBN category in the setting because there are no nuclear warheads.</p>"}
    ],
    related:[{href:"admiral-scheer-class.html",kicker:"Public technology disclosure",label:"Admiral Scheer Class"},{href:"german-nuclear-attack-submarines.html",kicker:"Escort and hunting arm",label:"Nuclear Jagd-U-Boote"},{href:"german-submersible-transports.html",kicker:"Type XXXI conversions",label:"Submersible Transports"},{href:"iceland-crisis.html",kicker:"Atlantic confrontation",label:"Iceland Crisis"}],
    facts:[["Official role name","Lenkwaffen-U-Boot"],["Classes","Type XXXI; Type XXXIV"],["First operational class","Type XXXI, 1967"],["Active Type XXXI, 1985","8"],["Active Type XXXIV, 1985","6"],["Active SSGNs, 1985","14"],["Warheads","Conventional only"]]
  }),

  "german-submersible-transports": navalArticle({
    title:"German submersible transports",
    category:"Naval logistics",
    eyebrow:"Unterseefrachter and Unterseetransportschiffe · 1959–1985",
    landscape:submarineLandscape,
    lead:"German submersible transports were unarmed military and nominally commercial cargo submarines designed to move small quantities of high-value material, vehicles, specialists, and technical components through threatened sea routes. The registered line comprised Type XXVIII Unterseefrachter, two Type XXXI/T missile-submarine conversions, and Type XXXV Unterseetransportschiff.",
    canon:"All three types, introduction years, build or conversion totals, submerged displacement, crew, payload, speed, endurance, 1985 status, Type XXXV volume and vehicle capacity, unarmed doctrine, preferred cargoes, Deutsche Ozeanische Reederei cover, and Operation Nachtbrücke role are established. Dimensions, yards, individual names and U-numbers, exact commercial voyages, and complete mission history remain open.",
    sections:[
      {id:"concept",title:"Purpose",html:"<p>Transport submarines did not replace merchant ships. Their payloads were tiny by commercial standards. They moved ammunition, missile seekers, radar parts, engines, sonar equipment, medical cargo, technicians, and other items whose arrival mattered more than volume.</p>"},
      {id:"types",title:"Registered types",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Type</th><th>Introduced</th><th>Built / converted</th><th>Submerged</th><th>Normal payload</th><th>Speed</th><th>Endurance</th><th>1985 status</th></tr></thead><tbody><tr><td>XXVIII Unterseefrachter</td><td>1959</td><td>4</td><td>4,900 t</td><td>500 t</td><td>16 kn</td><td>70 days</td><td>Two reserve or commercial</td></tr><tr><td>XXXI/T</td><td>1974</td><td>2 conversions</td><td>11,800 t</td><td>800 t</td><td>23 kn</td><td>100 days</td><td>Two operational</td></tr><tr><td>XXXV Unterseetransportschiff</td><td>1982</td><td>2</td><td>15,200 t</td><td>1,050 t</td><td>24 kn</td><td>120 days</td><td>Two operational</td></tr></tbody></table></div>"},
      {id:"xxxv",title:"Type XXXV cargo system",html:"<p>Type XXXV provides 2,400 cubic meters of dry cargo volume and two floodable heavy bays. It can carry two medium armored vehicles or five light vehicles, but machinery and specialist cargo normally make better use of the displacement.</p>"},
      {id:"survival",title:"Survival doctrine",html:"<p>All three types are unarmed. They depend upon stealth, decoys, intelligence, route planning, and attack-submarine clearance. Their best defense is not being classified as a transport in time to intercept it.</p>"},
      {id:"cover",title:"Commercial cover",html:"<p>The Deutsche Ozeanische Reederei provides civilian-commercial cover. Navy-built hulls, naval reservists, military navigation data, and classified tasking make the legal distinction fragile.</p>"},
      {id:"nachtbruecke",title:"Operation Nachtbrücke",html:"<p>In 1984 Germany and Argentina prepared Operation Nachtbrücke, or Puente Sumergido, assigning one Type XXXI/T and one Type XXXV to a covert logistics bridge through Puerto Belgrano to East Falkland.</p><p>The plan illustrates the intended mission: a few decisive cargoes through a route too dangerous or politically sensitive for ordinary shipping.</p>"},
      {id:"limits",title:"Limits",html:"<p>Transport submarines could not sustain an army or replace surface logistics. Their value lay in emergency access, secrecy, blockade penetration, and high-value delivery. A failed voyage risked scarce crews, specialized hulls, and politically explosive evidence.</p>"}
    ],
    related:[{href:"german-guided-missile-submarines.html",kicker:"Type XXXI origin",label:"Guided-Missile U-Boats"},{href:"falklands-war.html",kicker:"1984 operational setting",label:"Falklands–Malvinas War"},{href:"argentina.html",kicker:"Operational partner",label:"Argentina"},{href:"kriegsmarine-postwar.html",kicker:"Parent service",label:"Postwar Kriegsmarine"}],
    facts:[["Types","XXVIII; XXXI/T; XXXV"],["Combat armament","None"],["Largest normal payload","1,050 t"],["Longest endurance","120 days"],["Operational transports, 1985","4"],["Commercial cover","Deutsche Ozeanische Reederei"],["Named plan","Operation Nachtbrücke / Puente Sumergido"]]
  })
});
