window.deepArticles = window.deepArticles || {};

const americanBattleshipTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Ships</th><th>Commissioned</th><th>Full load, 1985</th><th>Main battery</th></tr></thead><tbody><tr><td><a href='iowa-class-battleship.html'>Iowa</a></td><td>4</td><td>1943–1945</td><td>58,000 t</td><td>Nine 406 mm guns</td></tr><tr><td><a href='montana-class-battleship.html'>Montana</a></td><td>2</td><td>1948; 1950</td><td>70,000 t</td><td>Twelve 406 mm guns</td></tr></tbody></table></div>";

const americanCruiserTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Commissioned</th><th>Full load</th><th>Role</th></tr></thead><tbody><tr><td><a href='long-beach-class-cruiser.html'>Long Beach</a></td><td>3</td><td>1961–1968</td><td>17,000 t</td><td>Nuclear carrier air defense and command</td></tr><tr><td><a href='california-class-cruiser.html'>California</a></td><td>5</td><td>1971–1979</td><td>12,500 t</td><td>Nuclear missile escort</td></tr><tr><td><a href='ticonderoga-class-cruiser.html'>Ticonderoga</a></td><td>6</td><td>1982–1985</td><td>10,000 t</td><td>Phased-array fleet defense and command</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "american-postwar-battleships": americanNavalArticle({
    title:"United States battleship force after 1947",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"The United States battleship force in 1985 comprised four Iowa-class fast battleships and two completed Montana-class battleships. All six retained their 406 mm main batteries and carried modern surface- and land-attack missiles, area defense, and close defense.",
    canon:"Iowa, New Jersey, Missouri, Wisconsin, Montana, and Ohio; class commissioning dates; 58,000- and 70,000-tonne full-load values; nine- and twelve-gun batteries; missile and defense roles; active 1985 status; and retained prestige are established. Postwar dimensions, detailed missile fits, sensors, armor changes, aviation, crews, refits, deployments, and individual service histories remain open.",
    sections:[
      {id:"inheritance",title:"1947 inheritance",html:"<p>Twenty-five American capital ships remained afloat at the armistice and twenty were operational. The force included older standard and pre-standard battleships, two North Carolinas, four South Dakotas, and four Iowas. Montana and Ohio remained under construction.</p><p>The older ships left service during the postwar transition. The Iowas and completed Montanas formed the permanent six-ship force that survived into the missile era.</p>"},
      {id:"prestige",title:"Battleship prestige",html:"<p>The United States never experienced the destruction of its battle line at Pearl Harbor. No wartime political narrative established the carrier as the battleship's unquestioned replacement. Battleships therefore retained institutional and public prestige while the Navy simultaneously built a large carrier, missile-escort, submarine, and amphibious system.</p>"},
      {id:"classes",title:"Classes",html:americanBattleshipTable},
      {id:"iowa",title:"Iowa class",html:"<p><a href='iowa-class-battleship.html'>Iowa, New Jersey, Missouri, and Wisconsin</a> commissioned from 1943 through 1945. Their speed made them useful with carrier formations, and their later missile and defensive systems allowed them to remain armored fleet units rather than ceremonial survivors.</p>"},
      {id:"montana",title:"Montana class",html:"<p><a href='montana-class-battleship.html'>Montana and Ohio</a> commissioned in 1948 and 1950. The 70,000-tonne ships carried twelve 406 mm guns and served as armored missile-and-gun flagships.</p>"},
      {id:"modernization",title:"Missile-age modernization",html:"<p>Both classes received surface- and land-attack missiles, area defense, and close defense while retaining their main batteries. The register does not establish launcher models, ammunition counts, radar fits, electronic warfare systems, or the sequence of refits.</p>"},
      {id:"roles",title:"Roles",html:"<p>The ships served as armored flagships, heavy surface-attack units, shore-bombardment platforms, missile carriers, and visible centers of fleet concentration. They could accompany carrier groups or lead surface and amphibious formations. Their guns supplied sustained bombardment without consuming missile stocks.</p>"},
      {id:"iceland",title:"Iceland crisis",html:"<p>During the 1967–1968 Atlantic confrontation, modern German attack submarines were positioned to strike the American battle line. The crisis demonstrated that armor, speed, and surface firepower did not remove undersea vulnerability. Battleship operations consequently depended on SSNs, escorts, patrol aviation, and route intelligence.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six ships remained active on 1 January 1985. The register does not imply equal readiness or simultaneous concentration in one fleet.</p>"}
    ],
    related:[{href:"iowa-class-battleship.html",kicker:"Fast battleships",label:"Iowa Class"},{href:"montana-class-battleship.html",kicker:"Heavy battleships",label:"Montana Class"},{href:"american-carrier-force.html",kicker:"Parallel capital arm",label:"American Carrier Force"},{href:"american-cruiser-force.html",kicker:"Missile screen",label:"American Cruiser Force"},{href:"iceland-crisis.html",kicker:"Undersea warning",label:"Iceland Crisis"}],
    facts:[["Active battleships, 1985","6"],["Iowa class","4 ships; 58,000 t"],["Iowa main battery","Nine 406 mm guns"],["Montana class","2 ships; 70,000 t"],["Montana main battery","Twelve 406 mm guns"],["Missile roles","Surface and land attack"],["Nuclear weapons","None"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Iowa-class_battleship",label:"Wikipedia — historical Iowa-class design context"},{href:"https://en.wikipedia.org/wiki/Montana-class_battleship",label:"Wikipedia — pre-divergence Montana-class design history"}]
  }),

  "american-cruiser-force": americanNavalArticle({
    title:"United States postwar cruiser force",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"The United States postwar cruiser force comprised three Long Beach-class nuclear command cruisers, five California-class nuclear missile escorts, and six Ticonderoga-class phased-array fleet-defense cruisers. All fourteen were active on 1 January 1985.",
    canon:"The three classes, build and active totals, commissioning dates, displacements, propulsion categories, registered names, and air-defense, missile-escort, phased-array, and command roles are established. Detailed weapons and cell counts, reactor designs, sensors beyond phased-array classification, dimensions, speeds, crews, refits, deployments, and individual service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The cruiser force developed as the command and high-capability missile layer of the American balanced fleet. Its first two postwar classes used nuclear propulsion to accompany nuclear carriers. The third adopted gas turbines and phased-array fleet defense.</p>"},
      {id:"classes",title:"Class lineage",html:americanCruiserTable},
      {id:"long-beach",title:"Long Beach class",html:"<p><a href='long-beach-class-cruiser.html'>Long Beach, Chicago, and Albany</a> commissioned in 1961, 1964, and 1968. Each displaced 17,000 tonnes at full load and served in nuclear carrier air defense and command.</p>"},
      {id:"california",title:"California class",html:"<p><a href='california-class-cruiser.html'>California, South Carolina, Virginia, Texas, and Arkansas</a> commissioned at two-year intervals from 1971 through 1979. Each displaced 12,500 tonnes at full load and served as a nuclear missile escort.</p>"},
      {id:"ticonderoga",title:"Ticonderoga class",html:"<p><a href='ticonderoga-class-cruiser.html'>Ticonderoga, Bunker Hill, Mobile Bay, Antietam, Leyte Gulf, and Valley Forge</a> commissioned from 1982 through 1985. Their phased arrays supported fleet-defense and command functions from a 10,000-tonne gas-turbine hull.</p>"},
      {id:"command",title:"Air-defense command",html:"<p>Cruisers organized surveillance and engagement sectors, supported identification, and connected carrier aircraft to destroyer and frigate screens. The exact command architecture, data links, radar models, missile batteries, and doctrine for allocating targets remain open.</p>"},
      {id:"propulsion",title:"Propulsion and endurance",html:"<p>Nuclear propulsion reduced ship-fuel demand for Long Beach and California ships accompanying nuclear carriers. Weapons, food, spares, crew endurance, and maintenance still required support. Ticonderoga traded reactor infrastructure for gas-turbine machinery and a newer sensor-command arrangement.</p>"},
      {id:"status",title:"Force in 1985",html:"<p>All fourteen registered cruisers remained active. Three generations consequently served together with different propulsion and sensor systems. Their individual readiness and assignment are not registered.</p>"}
    ],
    related:[{href:"long-beach-class-cruiser.html",kicker:"First nuclear class",label:"Long Beach Class"},{href:"california-class-cruiser.html",kicker:"Nuclear escort class",label:"California Class"},{href:"ticonderoga-class-cruiser.html",kicker:"Phased-array class",label:"Ticonderoga Class"},{href:"american-carrier-force.html",kicker:"Primary screened force",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Outer and inner escorts",label:"American Destroyers and Frigates"}],
    facts:[["Active cruisers, 1985","14"],["Long Beach","3 nuclear command cruisers"],["California","5 nuclear missile escorts"],["Ticonderoga","6 phased-array cruisers"],["Introduction span","1961–1985"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/USS_Long_Beach_(CGN-9)",label:"Wikipedia — historical nuclear-cruiser design context"},{href:"https://en.wikipedia.org/wiki/Ticonderoga-class_cruiser",label:"Wikipedia — historical phased-array cruiser context"}]
  }),

  "iowa-class-battleship": americanNavalArticle({
    title:"Iowa-class battleship",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Iowa class was a four-ship American fast-battleship class comprising USS Iowa, USS New Jersey, USS Missouri, and USS Wisconsin. Commissioned between 1943 and 1945, all four remained active in 1985 as 58,000-tonne armored missile-and-gun flagships.",
    canon:"The four names and commissioning years, 58,000-tonne 1985 full-load displacement, steam-turbine propulsion, nine 406 mm guns, surface- and land-attack missiles, area and close defense, fast armored flagship role, and active status are established. Detailed postwar dimensions, speed, armor changes, missiles, sensors, aviation, crew, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The Iowas were the last battleships completed before the 1947 armistice. They entered an undamaged American fleet rather than a Navy transformed by Pearl Harbor and the Pacific War. Their combination of speed, heavy guns, and institutional prestige made them the natural core of postwar battleship modernization.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS Iowa</td><td>1943</td><td>Active</td></tr><tr><td>USS New Jersey</td><td>1943</td><td>Active</td></tr><tr><td>USS Missouri</td><td>1944</td><td>Active</td></tr><tr><td>USS Wisconsin</td><td>1945</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 58,000 tonnes at full load in 1985 and retained three triple 406 mm turrets. Oil-fired geared steam turbines drove four shafts. Detailed speed, armor, secondary batteries, crew, sensors, and aviation facilities after modernization remain open.</p>"},
      {id:"modernization",title:"Missile modernization",html:"<p>The class carried surface- and land-attack missiles together with area and close defense. The new systems allowed the ships to attack beyond gun range and defend themselves inside a missile-age formation. Launcher models, counts, and refit chronology are not settled.</p>"},
      {id:"service",title:"Service",html:"<p>Iowas served as fast armored flagships, surface-attack ships, shore-bombardment platforms, and escorts or companions to carrier forces. Their guns supplied repeated fire against coastal targets while missiles covered distant or specialized targets.</p>"},
      {id:"vulnerability",title:"Protection and vulnerability",html:"<p>Armor protected against many forms of surface damage but did not make the ships invulnerable to submarines, mines, aircraft, or coordinated missile attack. The Iceland crisis reinforced the need for layered anti-submarine screens.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four ships remained active. Their individual readiness, homeports, refit condition, and deployment are not established.</p>"}
    ],
    related:[{href:"american-postwar-battleships.html",kicker:"Force history",label:"American Battleship Force"},{href:"montana-class-battleship.html",kicker:"Heavier class",label:"Montana Class"},{href:"american-carrier-force.html",kicker:"Parallel capital arm",label:"American Carrier Force"},{href:"iceland-crisis.html",kicker:"Atlantic crisis",label:"Iceland Crisis"}],
    facts:[["Ships","Iowa; New Jersey; Missouri; Wisconsin"],["Commissioned","1943–1945"],["Full load, 1985","58,000 t"],["Main battery","Nine 406 mm guns"],["Propulsion","Steam turbine; four shafts"],["Status, 1985","All active"]]
  }),

  "montana-class-battleship": americanNavalArticle({
    title:"Montana-class battleship",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Montana class was a two-ship American battleship class comprising USS Montana and USS Ohio. Commissioned in 1948 and 1950, both ships remained active in 1985 as 70,000-tonne armored flagships carrying twelve 406 mm guns and modern missiles.",
    canon:"The two names and controlling 1948 and 1950 commissioning years, 70,000-tonne 1985 full-load displacement, steam propulsion, twelve 406 mm guns, surface- and land-attack missiles, area and close defense, armored flagship role, and active status are established. The current registry's 1949 Ohio entry is superseded by the controlling armaments reference. Detailed dimensions, speed, armor, missiles, sensors, aviation, crew, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Montana and Ohio were incomplete at the 1947 armistice and commissioned afterward. Their completion demonstrated that the United States intended to preserve a heavy battle line even while beginning purpose-built postwar carriers, nuclear submarines, and missile escorts.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS Montana</td><td>1948</td><td>Active</td></tr><tr><td>USS Ohio</td><td>1950</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 70,000 tonnes at full load in 1985 and carried twelve 406 mm guns in four triple turrets. Steam turbines supplied propulsion. Exact dimensions, speed, shaft arrangement, armor, secondary batteries, sensors, crew, and aviation arrangements remain open.</p>"},
      {id:"modernization",title:"Missile modernization",html:"<p>The class carried surface- and land-attack missiles, area defense, and close defense beside its main battery. The register does not yet specify launchers, missile counts, radar arrays, or the sequence of modernization.</p>"},
      {id:"role",title:"Role",html:"<p>Montana-class ships served as armored missile-and-gun flagships, heavy surface combatants, and bombardment ships. Their four-turret battery distinguished them from the faster Iowas, while both classes operated inside the same screened fleet system.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both ships remained active. Individual readiness, deployment, homeports, and refit condition remain unregistered.</p>"}
    ],
    related:[{href:"american-postwar-battleships.html",kicker:"Force history",label:"American Battleship Force"},{href:"iowa-class-battleship.html",kicker:"Fast class",label:"Iowa Class"},{href:"american-cruiser-force.html",kicker:"Missile screen",label:"American Cruiser Force"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"}],
    facts:[["Ships","Montana; Ohio"],["Commissioned","1948; 1950"],["Full load, 1985","70,000 t"],["Main battery","Twelve 406 mm guns"],["Propulsion","Steam turbine"],["Status, 1985","Both active"]]
  }),

  "long-beach-class-cruiser": americanNavalArticle({
    title:"Long Beach-class cruiser",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Long Beach class was a three-ship American nuclear cruiser class comprising USS Long Beach, USS Chicago, and USS Albany. Commissioned between 1961 and 1968, all three remained active in 1985 for carrier air defense and fleet command.",
    canon:"The three names and commissioning years, 17,000-tonne full-load displacement, nuclear propulsion, carrier-air-defense and command role, and active status are established. Dimensions, reactor arrangement, speed, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class entered service with the first generation of American postwar fleet carriers and nuclear attack submarines. Nuclear propulsion supported long carrier-group operations and reduced the cruiser's dependence on ship fuel.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS Long Beach</td><td>1961</td><td>Active</td></tr><tr><td>USS Chicago</td><td>1964</td><td>Active</td></tr><tr><td>USS Albany</td><td>1968</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 17,000 tonnes at full load and used nuclear propulsion. The register identifies the class as a cruiser but does not fix dimensions, reactor number, speed, missile batteries, guns, radars, data links, or crew.</p>"},
      {id:"air-defense",title:"Carrier air defense",html:"<p>Long Beach ships organized and reinforced the air-defense screen around carrier groups. Their command role connected surveillance, carrier aircraft, missile escorts, and inner-defense ships.</p>"},
      {id:"support",title:"Endurance and support",html:"<p>Nuclear propulsion removed routine bunker-fuel demand for the cruiser. Weapons, food, personnel, spares, and reactor maintenance still required tenders, supply ships, and dockyards.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All three ships remained active beside the later California and Ticonderoga classes. Readiness, deployment, and refit state remain open.</p>"}
    ],
    related:[{href:"american-cruiser-force.html",kicker:"Force history",label:"American Cruiser Force"},{href:"california-class-cruiser.html",kicker:"Nuclear successor",label:"California Class"},{href:"ticonderoga-class-cruiser.html",kicker:"Phased-array generation",label:"Ticonderoga Class"},{href:"american-carrier-force.html",kicker:"Screened force",label:"American Carrier Force"}],
    facts:[["Ships","Long Beach; Chicago; Albany"],["Commissioned","1961; 1964; 1968"],["Full load","17,000 t"],["Propulsion","Nuclear"],["Role","Carrier air defense and command"],["Status, 1985","All active"]]
  }),

  "california-class-cruiser": americanNavalArticle({
    title:"California-class cruiser",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The California class was a five-ship American nuclear missile-cruiser class comprising USS California, USS South Carolina, USS Virginia, USS Texas, and USS Arkansas. Commissioned from 1971 through 1979, all five remained active in 1985 as carrier and fleet escorts.",
    canon:"The five names and commissioning years, 12,500-tonne full-load displacement, nuclear propulsion, missile-escort role, and active status are established. Dimensions, reactor arrangement, speed, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed Long Beach and supplied a larger number of nuclear missile escorts for the expanding carrier fleet. One ship commissioned every two years from 1971 through 1979.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS California</td><td>1971</td><td>Active</td></tr><tr><td>USS South Carolina</td><td>1973</td><td>Active</td></tr><tr><td>USS Virginia</td><td>1975</td><td>Active</td></tr><tr><td>USS Texas</td><td>1977</td><td>Active</td></tr><tr><td>USS Arkansas</td><td>1979</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 12,500 tonnes at full load and used nuclear propulsion. The register does not fix reactor arrangement, dimensions, speed, launcher type, missile count, guns, sensors, data links, or crew.</p>"},
      {id:"escort",title:"Missile escort",html:"<p>California-class ships protected carriers and other major formations against aircraft and missile attack and contributed surface strike and command capacity. Their exact weapons and engagement organization remain open.</p>"},
      {id:"support",title:"Nuclear support",html:"<p>Propulsion endurance allowed the class to accompany nuclear carriers without routine ship refueling. Ammunition, stores, personnel, and reactor overhaul still tied the ships to the fleet-support and dockyard system.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All five ships remained active. They served between the larger Long Beach command cruisers and the newer Ticonderoga phased-array class.</p>"}
    ],
    related:[{href:"american-cruiser-force.html",kicker:"Force history",label:"American Cruiser Force"},{href:"long-beach-class-cruiser.html",kicker:"Earlier nuclear class",label:"Long Beach Class"},{href:"ticonderoga-class-cruiser.html",kicker:"Later sensor generation",label:"Ticonderoga Class"},{href:"american-carrier-force.html",kicker:"Screened force",label:"American Carrier Force"}],
    facts:[["Ships","California; South Carolina; Virginia; Texas; Arkansas"],["Commissioned","1971; 1973; 1975; 1977; 1979"],["Full load","12,500 t"],["Propulsion","Nuclear"],["Role","Missile escort"],["Status, 1985","All active"]]
  }),

  "ticonderoga-class-cruiser": americanNavalArticle({
    title:"Ticonderoga-class cruiser",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The Ticonderoga class was a six-ship American gas-turbine cruiser class comprising USS Ticonderoga, USS Bunker Hill, USS Mobile Bay, USS Antietam, USS Leyte Gulf, and USS Valley Forge. Commissioned between 1982 and 1985, it introduced phased-array fleet defense and command to the cruiser force.",
    canon:"The six names and commissioning years, 10,000-tonne full-load displacement, gas-turbine propulsion, phased-array fleet-defense and command role, and active status are established. Dimensions, speed, weapons and cell counts, radar identity beyond phased-array classification, data links, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class entered service as the newest American cruiser generation. It adopted gas-turbine propulsion and made phased-array sensing and command its defining registered functions rather than extending the earlier nuclear-cruiser line.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS Ticonderoga</td><td>1982</td><td>Active</td></tr><tr><td>USS Bunker Hill</td><td>1983</td><td>Active</td></tr><tr><td>USS Mobile Bay</td><td>1983</td><td>Active</td></tr><tr><td>USS Antietam</td><td>1984</td><td>Active</td></tr><tr><td>USS Leyte Gulf</td><td>1984</td><td>Active</td></tr><tr><td>USS Valley Forge</td><td>1985</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 10,000 tonnes at full load and used gas-turbine propulsion. The register establishes a phased-array sensor category but leaves radar model, weapons, launch cells, dimensions, speed, data links, and crew open.</p>"},
      {id:"defense",title:"Fleet defense",html:"<p>The class assembled wide-area surveillance, track management, engagement coordination, and command aboard one cruiser. It supported carrier aircraft and distributed weapons carried by cruisers, destroyers, and frigates.</p>"},
      {id:"propulsion",title:"Gas-turbine propulsion",html:"<p>Gas turbines simplified some operating and support relationships compared with a nuclear plant while restoring dependence on ship fuel. The choice also distinguished a new command-and-sensor generation from the Long Beach and California nuclear classes.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six ships were active by 1 January 1985. Several were newly commissioned, and the register does not state whether every ship had completed all training and work-up activity.</p>"}
    ],
    related:[{href:"american-cruiser-force.html",kicker:"Force history",label:"American Cruiser Force"},{href:"california-class-cruiser.html",kicker:"Nuclear predecessor",label:"California Class"},{href:"american-carrier-force.html",kicker:"Screened force",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Distributed screen",label:"American Destroyers and Frigates"}],
    facts:[["Ships","Ticonderoga; Bunker Hill; Mobile Bay; Antietam; Leyte Gulf; Valley Forge"],["Commissioned","1982–1985"],["Full load","10,000 t"],["Propulsion","Gas turbine"],["Role","Phased-array fleet defense and command"],["Status, 1985","All active"]]
  })
});
