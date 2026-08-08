window.deepArticles = window.deepArticles || {};

const americanNavalSources = [
  {href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — controlling American class and force register"},
  {href:"../navalAssetRegistry%20-%20AltWWII.csv",label:"Naval Asset Registry — United States Navy hull records"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — American military and hemispheric order"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American intervention and naval crises"},
  {href:"../transcript.md",label:"Master Transcript — American fleet, intervention, and Atlantic strategy"}
];

const americanNavalArticle = config => ({
  category:"Naval history",
  eyebrow:"United States Navy · balanced fleet · 1947–1985",
  infoboxKicker:"American naval system",
  ...config,
  sources:[...americanNavalSources,...(config.additionalSources || [])],
  categories:config.categories || ["United States","United States Navy","Naval history","Military technology"]
});

const americanFleetLandscape = {
  src:"assets/diagrams/american-balanced-fleet.svg",
  alt:"Diagram showing American carriers, battleships, escorts, submarines, amphibious forces, and auxiliaries as a balanced fleet for hemispheric and expeditionary control",
  caption:"American naval doctrine retained several expensive forms of sea power rather than organizing the fleet around one decisive arm"
};

const americanLineageLandscape = {
  src:"assets/diagrams/american-postwar-naval-lineages.svg",
  alt:"Timeline of American battleship, carrier, cruiser, destroyer, frigate, submarine, and amphibious lineages between 1943 and 1985",
  caption:"The undamaged neutral-war inheritance developed into large carrier, missile-escort, nuclear-submarine, amphibious, and support branches"
};

const americanFleet1985 = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Category</th><th>Front-line strength</th></tr></thead><tbody><tr><td>Battleships and large armored combatants</td><td>6</td></tr><tr><td>Fleet carriers</td><td>9</td></tr><tr><td>Light or assault carriers</td><td>5</td></tr><tr><td>Missile and command cruisers</td><td>14</td></tr><tr><td>Destroyers</td><td>42</td></tr><tr><td>Frigates and ocean escorts</td><td>54</td></tr><tr><td>Corvettes and fast missile combatants</td><td>24</td></tr><tr><td>Nuclear attack submarines</td><td>20</td></tr><tr><td>Nuclear guided-missile submarines</td><td>8</td></tr><tr><td>Conventional submarines</td><td>20</td></tr><tr><td>Major amphibious ships</td><td>32</td></tr><tr><td>Mine-warfare ships</td><td>24</td></tr><tr><td>Major replenishment and repair ships</td><td>42</td></tr></tbody></table></div>";

const americanCarrierTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Ships</th><th>Commissioning</th><th>Full load</th><th>Standard air group</th></tr></thead><tbody><tr><td>United States</td><td>3</td><td>1957–1963</td><td>74,000 t</td><td>86</td></tr><tr><td>Enterprise</td><td>2</td><td>1965–1970</td><td>80,000 t</td><td>88</td></tr><tr><td>Saratoga</td><td>4</td><td>1973–1981</td><td>86,000 t</td><td>92</td></tr><tr><td>Wasp assault carrier</td><td>3</td><td>1968–1976</td><td>30,000 t</td><td>32</td></tr><tr><td>America VTOL carrier</td><td>2</td><td>1979–1981</td><td>38,000 t</td><td>40</td></tr></tbody></table></div>";

const americanEscortTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Role</th></tr></thead><tbody><tr><td>Long Beach</td><td>3</td><td>1961–1968</td><td>17,000 t</td><td>3</td><td>Nuclear carrier air defense and command</td></tr><tr><td>California</td><td>5</td><td>1971–1979</td><td>12,500 t</td><td>5</td><td>Nuclear missile escort</td></tr><tr><td>Ticonderoga</td><td>6</td><td>1982–1985</td><td>10,000 t</td><td>6</td><td>Phased-array fleet defense and command</td></tr><tr><td>Charles F. Adams</td><td>24</td><td>1960–1970</td><td>4,800 t</td><td>18</td><td>Missile fleet escort</td></tr><tr><td>Spruance</td><td>24</td><td>1975–1984</td><td>8,000 t</td><td>24</td><td>Quiet multipurpose and ASW destroyer</td></tr><tr><td>Knox</td><td>30</td><td>1968–1977</td><td>4,200 t</td><td>30</td><td>Long-range ASW escort</td></tr><tr><td>Perry</td><td>24</td><td>1977–1985</td><td>4,100 t</td><td>24</td><td>Economical ocean escort</td></tr></tbody></table></div>";

const americanSubmarineTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Type</th><th>Built</th><th>Introduction</th><th>Front-line, 1985</th><th>Role</th></tr></thead><tbody><tr><td>Sturgeon</td><td>SSN</td><td>12</td><td>1970–1980</td><td>8</td><td>Long-range attack</td></tr><tr><td>Los Angeles</td><td>SSN</td><td>12</td><td>1978–1985</td><td>12</td><td>Fleet attack and carrier escort</td></tr><tr><td>Triton</td><td>SSGN</td><td>4</td><td>1965–1972</td><td>4</td><td>Conventional strategic missile attack</td></tr><tr><td>Longbow</td><td>SSGN</td><td>4</td><td>1976–1983</td><td>4</td><td>Submerged VLS strike</td></tr><tr><td>Tang/Barbel</td><td>SSK</td><td>20 active</td><td>1951–1965</td><td>20</td><td>Arctic, Caribbean, and coastal patrol</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "us-navy-postwar": americanNavalArticle({
    title:"United States Navy after the Second World War",
    category:"Military history",
    eyebrow:"American navy · neutral inheritance and balanced expansion",
    landscape:americanFleetLandscape,
    lead:"The United States Navy after 1947 developed from an undamaged neutral-war fleet into the world's most expensive balanced naval force. It retained six missile-modernized battleships, operated nine fleet carriers and five assault carriers, maintained large surface and submarine screens, and supplied the principal amphibious instrument of American hemispheric intervention.",
    canon:"The neutral-war inheritance, balanced-fleet doctrine, service responsibilities, registered class lineages, 1985 totals, conventional-strike role, carrier and battleship prestige, hemispheric missions, and absence of nuclear naval weapons are established. Fleet command organization, base hierarchy, detailed budgets, deployment cycles, aircraft models, weapons fits beyond the register, readiness, and most individual service histories remain open.",
    sections:[
      {id:"inheritance",title:"Neutral-war inheritance",html:"<p>The United States did not enter the general war and suffered no naval combat attrition. On 31 December 1947 it possessed twenty-five capital ships, thirteen carriers, forty-seven cruisers, 145 destroyers, sixty major escorts, and 125 submarines afloat.</p><p>The fleet was smaller than the historical wartime American maximum because the emergency mass carrier, destroyer, and merchant programs never reached the same scale.</p>"},
      {id:"doctrine",title:"Balanced-fleet doctrine",html:"<p>Pearl Harbor never destroyed American battleship prestige. Japanese carrier power nevertheless demonstrated that aviation could not be treated as an auxiliary. The Navy financed battleships, carriers, cruisers, escorts, attack submarines, guided-missile submarines, amphibious shipping, mine warfare, and replenishment at the same time.</p>"},
      {id:"responsibilities",title:"Service responsibilities",html:"<p>The Navy controlled carrier and maritime aviation through the Naval Air Corps. It also held conventional sea-launched strategic strike, amphibious warfare, and hemispheric sea control. The independent Aerospace Force controlled strategic interception, bombing, missiles, spaceplanes, and orbital warfare.</p>"},
      {id:"hemisphere",title:"Hemispheric and expeditionary missions",html:"<p>American naval power supported interventions, blockades, bases, canal defense, Caribbean surveillance, Pacific access, and protection of allied or associated states. The Navy could concentrate far greater force than regional opponents while remaining politically constrained by Congress, presidents, and negotiated crisis limits.</p>"},
      {id:"crises",title:"Atlantic and Pacific pressure",html:"<p>The 1967–1968 Iceland crisis exposed the battleship fleet to modern German submarines. Japanese carrier strength required continuing Pacific surveillance and a fleet capable of operating without assuming technical superiority.</p><p>The Falklands armed-mediation regime showed a different use of naval power: monitoring, interdiction, and enforcement of limits on both belligerents.</p>"},
      {id:"1985",title:"Fleet in 1985",html:americanFleet1985+"<p>The figures describe front-line strength on 1 January 1985. They do not imply that every ship was simultaneously deployed or ready for immediate combat.</p>"},
      {id:"limits",title:"Limits",html:"<p>Balance was expensive. Nuclear carriers and cruisers, armored flagships, escorts, submarines, amphibious forces, and auxiliaries competed for crews, dockyards, maintenance, and procurement authority.</p><p>The fleet was large enough to act globally but remained tied to political decisions about where the American hemisphere ended and what intervention was meant to accomplish.</p>"}
    ],
    related:[{href:"american-balanced-fleet.html",kicker:"Governing doctrine",label:"American Balanced Fleet"},{href:"american-carrier-force.html",kicker:"Naval aviation",label:"American Carrier Force"},{href:"us-navy-submarine-force.html",kicker:"Undersea arm",label:"United States Submarine Force"},{href:"american-amphibious-force.html",kicker:"Intervention arm",label:"American Amphibious Force"},{href:"united-states.html",kicker:"Sovereign state",label:"United States"}],
    facts:[["Service","United States Navy"],["Strategic model","Balanced fleet"],["Capital ships afloat, 1947","25"],["Fleet carriers, 1985","9"],["Battleships, 1985","6"],["Destroyers and frigates, 1985","96"],["Front-line submarines, 1985","48"],["Reference date","1 January 1985"]]
  }),

  "american-balanced-fleet": americanNavalArticle({
    title:"American balanced-fleet doctrine",
    category:"Naval doctrine",
    landscape:americanFleetLandscape,
    lead:"American balanced-fleet doctrine was the postwar decision to retain armored surface power while building carrier aviation, missile defense, submarines, amphibious lift, mine warfare, and mobile logistics at world scale. No single branch received the exclusive strategic primacy found in Japan's carrier system or Germany's U-boat system.",
    canon:"The balanced-fleet characterization, survival of battleship prestige, recognition of Japanese carrier power, Navy responsibilities, 1985 force balance, hemispheric missions, conventional-strike doctrine, and comparison with other fleets are established. Formal doctrinal publication titles, fleet exercise series, planning staffs, budget shares, and exact regional commands remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The absence of Pearl Harbor removed the political shock that historically discredited the battle line. American observers still saw Japan build a carrier-centered empire and Britain survive through naval infrastructure. The resulting policy added aviation and submarines without discarding battleships.</p>"},
      {id:"components",title:"Fleet components",html:"<p>Six battleships provided armored gun and missile power. Fourteen carriers supplied fleet and amphibious aviation. Fourteen cruisers and ninety-six destroyers and frigates formed layered screens. Forty-eight front-line submarines divided attack, missile, and coastal missions.</p>"},
      {id:"information",title:"Information and defense",html:"<p>Phased-array cruisers, carrier aircraft, submarines, escorts, satellites, patrol aviation, and signals intelligence supported detection and threat evaluation. No defense guaranteed interception of a coordinated missile, submarine, aircraft, and mine attack.</p>"},
      {id:"strike",title:"Conventional strategic strike",html:"<p>Carrier aviation, battleship and cruiser missiles, Triton and Longbow SSGNs, and Aerospace Force systems offered overlapping conventional attack methods. Nuclear warheads did not define naval planning.</p>"},
      {id:"intervention",title:"Amphibious intervention",html:"<p>Thirty-two major amphibious ships, five assault carriers, landing forces, Naval Air Corps aviation, and forty-two major auxiliaries supported operations in the Caribbean, Central America, and other maritime approaches.</p>"},
      {id:"cost",title:"Cost and criticism",html:"<p>Critics could attack almost any branch as redundant. Battleship advocates defended armor and gunfire; carrier advocates emphasized reach; submariners emphasized concealment; interventionists demanded lift; escort planners warned that none of the larger ships survived alone.</p>"}
    ],
    related:[{href:"us-navy-postwar.html",kicker:"Fleet history",label:"Postwar United States Navy"},{href:"american-postwar-battleships.html",kicker:"Armored branch",label:"American Battleship Force"},{href:"american-carrier-force.html",kicker:"Aviation branch",label:"American Carrier Force"},{href:"us-navy-submarine-force.html",kicker:"Undersea branch",label:"United States Submarine Force"},{href:"military-technology.html",kicker:"Comparative capability",label:"Military Technology"}],
    facts:[["Adopted","Post-1947 development"],["Defining characteristic","Parallel capital investment"],["Battleships","6"],["Carriers","14"],["Surface escorts","110 cruisers, destroyers, and frigates"],["Submarines","48 front-line"],["Nuclear weapons","None"]]
  }),

  "american-neutral-war-fleet": americanNavalArticle({
    title:"United States neutral-war fleet, 1941–1947",
    category:"Naval history",
    eyebrow:"United States Navy · limited mobilization · armistice inheritance",
    landscape:americanLineageLandscape,
    lead:"The United States neutral-war fleet was the naval force built while America remained formally outside the general war. It suffered no combat attrition, completed modern battleships and thirteen fleet carriers, supplied ships to Britain and Commonwealth customers, and avoided the historical mass-production program created by a two-ocean shooting war.",
    canon:"The 1947 afloat and operational totals, twenty-five-battleship composition, thirteen-carrier total, seventy-two new-destroyer program, transfers to Britain and Commonwealth customers, reduced merchant emergency program, and class-allocation reconstruction are established. Most individual non-capital survival, transfer, and completion records remain registry allocations.",
    sections:[
      {id:"balance",title:"Balance on 31 December 1947",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Category</th><th>Afloat</th><th>Operational</th></tr></thead><tbody><tr><td>Capital ships</td><td>25</td><td>20</td></tr><tr><td>Fleet carriers</td><td>13</td><td>11</td></tr><tr><td>Cruisers</td><td>47</td><td>40</td></tr><tr><td>Destroyers</td><td>145</td><td>105</td></tr><tr><td>Major escorts</td><td>60</td><td>40</td></tr><tr><td>Submarines</td><td>125</td><td>95</td></tr></tbody></table></div>"},
      {id:"battleships",title:"Battleship program",html:"<p>The twenty-five battleships comprised fifteen older standard and pre-standard ships, two North Carolinas, four South Dakotas, and four Iowas. Montana and Ohio remained under construction and commissioned in 1948 and 1950.</p>"},
      {id:"carriers",title:"Carrier program",html:"<p>America completed thirteen fleet carriers by 1947 rather than the much larger historical wartime program. Eleven were operational at the armistice.</p>"},
      {id:"escorts",title:"Destroyers and transfers",html:"<p>The Navy built seventy-two new destroyers for American or export use. Fifty older destroyers and thirty-six modern ships passed to Britain or Commonwealth customers.</p>"},
      {id:"merchant",title:"Merchant construction",html:"<p>The emergency merchant program produced 720 EC2 or Liberty-type ships, 180 faster Victory-type ships, and 250 tankers or specialized cargo hulls. It did not produce the historical 2,710 Liberty ships.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Neutrality preserved ships and industrial capacity while limiting combat experience. Postwar doctrine had to infer the consequences of carrier, submarine, missile, and amphibious warfare from foreign campaigns and American interventions.</p>"}
    ],
    related:[{href:"us-navy-postwar.html",kicker:"Successor fleet",label:"Postwar United States Navy"},{href:"american-postwar-battleships.html",kicker:"Capital inheritance",label:"American Battleship Force"},{href:"american-carrier-force.html",kicker:"Carrier inheritance",label:"American Carrier Force"},{href:"loans-to-a-drowning-man.html",kicker:"Late neutral policy",label:"Loans to a Drowning Man"}],
    facts:[["Reference date","31 December 1947"],["Capital ships afloat","25"],["Fleet carriers afloat","13"],["Cruisers afloat","47"],["Destroyers afloat","145"],["Major escorts afloat","60"],["Submarines afloat","125"]]
  }),

  "american-postwar-battleships": americanNavalArticle({
    title:"United States battleship force after 1947",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"The United States battleship force in 1985 comprised four Iowa-class ships and two completed Montana-class ships. All six carried modern surface- and land-attack missiles, area and close defense, and their original 406 mm main batteries.",
    canon:"Iowa, New Jersey, Missouri, Wisconsin, Montana, and Ohio; class commissioning; 58,000- and 70,000-tonne full-load values; nine- and twelve-gun batteries; missile and defense roles; active 1985 status; and retained prestige are established. Postwar dimensions, detailed missile fits, sensors, armor changes, aviation, crews, refits, deployments, and individual service histories remain open.",
    sections:[
      {id:"prestige",title:"Battleship prestige",html:"<p>The Navy never experienced Pearl Harbor or a domestic wartime narrative in which carriers replaced a destroyed battle line. Battleships remained symbols of industrial and maritime power even as aircraft, submarines, and missiles governed many operational decisions.</p>"},
      {id:"iowa",title:"Iowa class",html:"<p>Iowa, New Jersey, Missouri, and Wisconsin commissioned between 1943 and 1945. Each displaced 58,000 tonnes at full load in 1985 and carried nine 406 mm guns, surface- and land-attack missiles, and layered defensive systems.</p>"},
      {id:"montana",title:"Montana class",html:"<p>Montana and Ohio commissioned in 1948 and 1950. Each displaced 70,000 tonnes at full load and carried twelve 406 mm guns with modern surface, land-attack, area-defense, and close-defense weapons.</p>"},
      {id:"roles",title:"Roles",html:"<p>The ships served as armored flagships, heavy surface-attack units, shore-bombardment platforms, missile carriers, and visible centers of fleet concentration. Their speed and protection differed by class.</p>"},
      {id:"iceland",title:"Iceland crisis",html:"<p>During the 1967–1968 Atlantic confrontation, modern German attack submarines were positioned to strike the American battle line. The crisis demonstrated that armor and surface firepower did not remove undersea vulnerability.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>All six ships remained active. The register does not establish that all operated in one formation or maintained equal readiness.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parallel capital arm",label:"American Carrier Force"},{href:"american-cruiser-force.html",kicker:"Missile screen",label:"American Cruiser Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"},{href:"iceland-crisis.html",kicker:"Undersea warning",label:"Iceland Crisis"}],
    facts:[["Active battleships, 1985","6"],["Iowa class","4 ships; 58,000 t"],["Iowa main battery","Nine 406 mm guns"],["Montana class","2 ships; 70,000 t"],["Montana main battery","Twelve 406 mm guns"],["Missile roles","Surface and land attack"],["Nuclear weapons","None"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Iowa-class_battleship",label:"Wikipedia — historical Iowa-class design context"},{href:"https://en.wikipedia.org/wiki/Montana-class_battleship",label:"Wikipedia — pre-divergence Montana-class design history"}]
  }),

  "american-carrier-force": americanNavalArticle({
    title:"United States carrier force, 1957–1985",
    category:"Naval aviation",
    landscape:americanFleetLandscape,
    lead:"The United States carrier force in 1985 comprised nine fleet carriers in the United States, Enterprise, and Saratoga classes, plus five Wasp and America assault carriers. It was the Navy's principal instrument for long-range air defense, maritime strike, reconnaissance, and support of amphibious operations.",
    canon:"The five classes, fourteen named or registered carriers, commissioning bands, displacements, standard air groups, propulsion categories, active 1985 status, and fleet, VTOL, helicopter, and amphibious roles are established. Aircraft models, air-wing organization, dimensions, speed, reactor and machinery particulars, weapons, sensors, refit calendars, deployments, and individual histories remain open.",
    sections:[
      {id:"doctrine",title:"Carrier doctrine",html:"<p>American planners recognized Japanese carrier strength while refusing to make aviation the sole center of the fleet. Carrier groups operated with missile cruisers, destroyers, frigates, submarines, battleships, replenishment, and land-based Naval Air Corps support.</p>"},
      {id:"lineage",title:"Class lineage",html:americanCarrierTable},
      {id:"fleet",title:"Fleet carriers",html:"<p>United States, Constitution, and Independence used steam propulsion. Enterprise and Franklin introduced the nuclear carrier generation. Saratoga, Ranger, Yorktown, and Lexington formed the largest 1985 class.</p>"},
      {id:"assault",title:"Assault carriers",html:"<p>Wasp, Iwo Jima, and Guadalcanal supported helicopter assault. America and Philippine Sea added VTOL fleet support and amphibious aviation.</p>"},
      {id:"naval-air-corps",title:"Naval Air Corps",html:"<p>The Naval Air Corps owned carrier and maritime aviation. Strategic bombers, orbital vehicles, and military space remained under the independent Aerospace Force, while the Army Air Corps controlled battlefield aviation.</p>"},
      {id:"limits",title:"Availability and limits",html:"<p>Fourteen carriers did not produce fourteen continuously deployable air groups. Refit, reactor or machinery maintenance, aircraft availability, crew training, escort strength, and replenishment determined operational concentration.</p>"}
    ],
    related:[{href:"united-states-class-carrier.html",kicker:"First postwar class",label:"United States Class"},{href:"american-nuclear-carriers.html",kicker:"Nuclear generation",label:"Enterprise and Saratoga Classes"},{href:"american-assault-carriers.html",kicker:"Amphibious aviation",label:"American Assault Carriers"},{href:"american-cruiser-force.html",kicker:"Air-defense screen",label:"American Cruiser Force"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["Fleet carriers, 1985","9"],["Assault carriers, 1985","5"],["Fleet-carrier classes","United States; Enterprise; Saratoga"],["Assault-carrier classes","Wasp; America"],["Principal aviation service","Naval Air Corps"],["All registered carriers","Active"]]
  }),

  "united-states-class-carrier": americanNavalArticle({
    title:"United States-class aircraft carrier",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The United States class was a three-ship steam-powered fleet-carrier class comprising USS United States, USS Constitution, and USS Independence. The ships commissioned between 1957 and 1963 and remained active with standard eighty-six-aircraft groups in 1985.",
    canon:"The three names, 1957–1963 commissioning band, 74,000-tonne full-load displacement, steam propulsion, eighty-six-aircraft standard group, fleet air-defense and strike role, and active status are established. Dimensions, speed, machinery details, aircraft types, weapons, sensors, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class converted America's limited wartime carrier inheritance into a purpose-built postwar platform for larger aircraft, long-range fleet operations, and missile-age escorts.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>USS United States</td><td>1957</td><td>Active</td></tr><tr><td>USS Constitution</td><td>1960</td><td>Active</td></tr><tr><td>USS Independence</td><td>1963</td><td>Active</td></tr></tbody></table></div>"},
      {id:"configuration",title:"Registered configuration",html:"<p>Each ship displaced 74,000 tonnes at full load, used steam-turbine propulsion, and carried a standard air group of eighty-six aircraft in 1985.</p>"},
      {id:"roles",title:"Roles",html:"<p>The class supplied fleet air defense, maritime and land strike, reconnaissance, command, and air support for surface and amphibious formations.</p>"},
      {id:"succession",title:"Succession",html:"<p>Enterprise and Franklin introduced nuclear propulsion after 1965. The four-ship Saratoga class followed from 1973 with larger air groups.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"american-nuclear-carriers.html",kicker:"Successor generation",label:"American Nuclear Carriers"},{href:"american-cruiser-force.html",kicker:"Escort system",label:"American Cruiser Force"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"}],
    facts:[["Ships","United States; Constitution; Independence"],["Commissioned","1957–1963"],["Full load","74,000 t"],["Propulsion","Steam turbine"],["Standard air group","86 aircraft"],["Status, 1985","All active"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/United_States-class_aircraft_carrier",label:"Wikipedia — pre-divergence United States-class design history"}]
  }),

  "american-nuclear-carriers": americanNavalArticle({
    title:"American nuclear fleet carriers",
    category:"Naval aviation",
    landscape:americanLineageLandscape,
    lead:"American nuclear fleet carriers comprised the two-ship Enterprise class and four-ship Saratoga class. Six ships were active in 1985, carrying standard air groups of eighty-eight or ninety-two aircraft and providing the long-endurance center of the United States carrier force.",
    canon:"Enterprise, Franklin, Saratoga, Ranger, Yorktown, and Lexington; commissioning bands; 80,000- and 86,000-tonne full-load values; nuclear propulsion; standard air groups; roles; and active 1985 status are established. Reactor type and count, dimensions, speed, weapons, sensors, crews, aircraft composition, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"enterprise",title:"Enterprise class",html:"<p>Enterprise and Franklin commissioned in 1965 and 1970. Each displaced 80,000 tonnes at full load, used nuclear propulsion, and carried a standard air group of eighty-eight aircraft.</p>"},
      {id:"saratoga",title:"Saratoga class",html:"<p>Saratoga, Ranger, Yorktown, and Lexington commissioned between 1973 and 1981. Each displaced 86,000 tonnes and carried ninety-two aircraft.</p>"},
      {id:"endurance",title:"Endurance",html:"<p>Nuclear propulsion reduced dependence on ship fuel for the carrier itself. Aviation fuel, weapons, food, spares, escort fuel, and aircraft maintenance still required a large replenishment system.</p>"},
      {id:"roles",title:"Roles",html:"<p>The ships provided fleet air defense, long-range strike, reconnaissance, command, and crisis presence. They operated as parts of carrier groups rather than independent capital ships.</p>"},
      {id:"cost",title:"Cost",html:"<p>Nuclear carriers concentrated procurement, dockyard, reactor-support, and crew demands. The two-class, six-ship program embodied the expense of balanced-fleet policy.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"united-states-class-carrier.html",kicker:"Steam predecessor",label:"United States Class"},{href:"american-cruiser-force.html",kicker:"Nuclear escort",label:"American Cruiser Force"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}],
    facts:[["Classes","Enterprise; Saratoga"],["Enterprise class","2 ships; 80,000 t; 88 aircraft"],["Saratoga class","4 ships; 86,000 t; 92 aircraft"],["Propulsion","Nuclear"],["Active, 1985","6"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/USS_Enterprise_(CVN-65)",label:"Wikipedia — historical nuclear-carrier design context"}]
  }),

  "american-assault-carriers": americanNavalArticle({
    title:"American assault-carrier force",
    category:"Amphibious aviation",
    landscape:americanFleetLandscape,
    lead:"The American assault-carrier force comprised three Wasp-class helicopter assault ships and two America-class VTOL and amphibious carriers. The five ships linked naval aviation to Marine and amphibious operations while retaining useful fleet-support roles.",
    canon:"The two classes, five names, commissioning dates, 30,000- and 38,000-tonne full-load values, standard air groups of thirty-two and forty aircraft, steam propulsion, active status, and registered helicopter, VTOL, fleet-support, and amphibious roles are established. Aircraft types, troop and vehicle capacities, dimensions, speed, weapons, sensors, crews, and individual histories remain open.",
    sections:[
      {id:"wasp",title:"Wasp class",html:"<p>Wasp, Iwo Jima, and Guadalcanal commissioned in 1968, 1972, and 1976. Each displaced 30,000 tonnes, used steam propulsion, and carried a standard group of thirty-two aircraft for helicopter and amphibious assault.</p>"},
      {id:"america",title:"America class",html:"<p>America and Philippine Sea commissioned in 1979 and 1981. Each displaced 38,000 tonnes and carried forty aircraft for VTOL fleet support and amphibious aviation.</p>"},
      {id:"missions",title:"Missions",html:"<p>Assault carriers moved and supported landing forces, provided helicopter transport, local air defense, reconnaissance, and strike, and reinforced larger carrier formations where required.</p>"},
      {id:"integration",title:"Amphibious integration",html:"<p>Iwo Jima-class helicopter assault ships, Austin-class landing-platform docks, and Newport fast tank landing ships formed the thirty-two-ship major amphibious balance. Assault carriers supplied the aviation layer above those ships.</p>"},
      {id:"limits",title:"Limits",html:"<p>Air-group size did not state the mix of fighters, assault helicopters, ASW helicopters, transports, or utility aircraft. The register leaves those compositions open.</p>"}
    ],
    related:[{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Carrier system",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}],
    facts:[["Assault carriers, 1985","5"],["Wasp class","3 ships; 30,000 t; 32 aircraft"],["America class","2 ships; 38,000 t; 40 aircraft"],["Propulsion","Steam turbine"],["Status","All active"]]
  })
});

Object.assign(window.deepArticles, {
  "american-cruiser-force": americanNavalArticle({
    title:"United States postwar cruiser force",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"The United States postwar cruiser force comprised three Long Beach-class nuclear command cruisers, five California-class nuclear missile escorts, and six Ticonderoga-class phased-array fleet-defense cruisers. All fourteen were active in 1985.",
    canon:"The three classes, build and active totals, commissioning bands, displacements, propulsion categories, registered names, and air-defense, missile-escort, phased-array, and command roles are established. Detailed weapons and cell counts, reactor designs, sensors beyond phased-array classification, dimensions, speeds, crews, refits, deployments, and individual service histories remain open.",
    sections:[
      {id:"long-beach",title:"Long Beach class",html:"<p>Long Beach, Chicago, and Albany entered service between 1961 and 1968. Each displaced 17,000 tonnes at full load, used nuclear propulsion, and served in carrier air defense and command.</p>"},
      {id:"california",title:"California class",html:"<p>California, South Carolina, Virginia, Texas, and Arkansas entered service from 1971 through 1979. Each displaced 12,500 tonnes, used nuclear propulsion, and served as a missile escort.</p>"},
      {id:"ticonderoga",title:"Ticonderoga class",html:"<p>Ticonderoga, Bunker Hill, Mobile Bay, Antietam, Leyte Gulf, and Valley Forge entered service between 1982 and 1985. Each displaced 10,000 tonnes, used gas-turbine propulsion, and supplied phased-array fleet defense and command.</p>"},
      {id:"carrier",title:"Carrier-group role",html:"<p>Cruisers organized air-defense sectors, managed identification and engagement, and linked carrier aircraft to destroyer and frigate screens. Nuclear propulsion extended endurance for Long Beach and California ships but did not eliminate weapons, crew, and maintenance requirements.</p>"},
      {id:"1985",title:"Force in 1985",html:"<p>All fourteen registered cruisers remained active. Three generations therefore served together, with different propulsion, sensor, and command arrangements.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Primary screened force",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Outer and inner escorts",label:"American Destroyers and Frigates"},{href:"american-postwar-battleships.html",kicker:"Armored flagships",label:"American Battleship Force"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["Active cruisers, 1985","14"],["Long Beach","3 nuclear command cruisers"],["California","5 nuclear missile escorts"],["Ticonderoga","6 phased-array cruisers"],["Introduction span","1961–1985"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/USS_Long_Beach_(CGN-9)",label:"Wikipedia — historical nuclear-cruiser design context"},{href:"https://en.wikipedia.org/wiki/Ticonderoga-class_cruiser",label:"Wikipedia — historical phased-array cruiser context"}]
  }),

  "american-destroyer-frigate-force": americanNavalArticle({
    title:"United States destroyer and frigate force",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"The American destroyer and frigate force consisted in 1985 of forty-two active destroyers and fifty-four active frigates. Charles F. Adams missile escorts and Spruance multipurpose destroyers protected the heavy fleet; Knox and Perry frigates supplied long-range anti-submarine and economical ocean escort capacity.",
    canon:"The four classes, build totals, commissioning bands, displacements, propulsion, roles, hull-number systems, and active 1985 totals are established. Individual personal names are not registered for these postwar classes; detailed weapons, sensors, aircraft, crews, refits, readiness, and deployments remain open.",
    sections:[
      {id:"lineage",title:"Class lineage",html:americanEscortTable},
      {id:"adams",title:"Charles F. Adams class",html:"<p>Twenty-four 4,800-tonne steam-turbine missile escorts entered service between 1960 and 1970. Eighteen remained active in 1985; the registry identifies them by DDG hull numbers rather than settled personal names.</p>"},
      {id:"spruance",title:"Spruance class",html:"<p>Twenty-four 8,000-tonne gas-turbine ships entered service between 1975 and 1984. All remained active as quiet multipurpose and ASW destroyers.</p>"},
      {id:"knox",title:"Knox class",html:"<p>Thirty 4,200-tonne steam-turbine frigates entered service from 1968 through 1977. All remained active as long-range anti-submarine escorts.</p>"},
      {id:"perry",title:"Perry class",html:"<p>Twenty-four 4,100-tonne gas-turbine frigates entered service between 1977 and 1985. They supplied an economical ocean escort for routes and lower-threat formations.</p>"},
      {id:"employment",title:"Employment",html:"<p>Destroyers and frigates screened carriers, battleships, cruisers, amphibious groups, auxiliaries, bases, and convoys. Their value depended on patrol aviation, helicopters, submarines, data links, and current threat classification.</p>"}
    ],
    related:[{href:"american-cruiser-force.html",kicker:"Command layer",label:"American Cruiser Force"},{href:"american-carrier-force.html",kicker:"Primary screened force",label:"American Carrier Force"},{href:"us-navy-submarine-force.html",kicker:"ASW opponent and partner",label:"United States Submarine Force"},{href:"american-amphibious-force.html",kicker:"Expeditionary screen",label:"American Amphibious Force"}],
    facts:[["Active destroyers, 1985","42"],["Charles F. Adams","18 active"],["Spruance","24 active"],["Active frigates, 1985","54"],["Knox","30 active"],["Perry","24 active"]]
  }),

  "us-navy-submarine-force": americanNavalArticle({
    title:"United States Navy submarine force, 1947–1985",
    category:"Submarine history",
    landscape:americanLineageLandscape,
    lead:"The United States Navy submarine force developed from 125 undamaged neutral-war boats into a forty-eight-boat 1985 front line: twenty nuclear attack submarines, eight nuclear guided-missile submarines, and twenty conventional patrol submarines. Earlier nuclear boats continued in training, intelligence, and secondary service outside the front-line total.",
    canon:"The 1947 afloat and operational totals, Tang/Barbel, Sturgeon, Los Angeles, Triton, and Longbow branches, build and front-line totals, registered displacements and roles, earlier-nuclear secondary status, conventional warheads, and 1985 balance are established. Command organization, bases, detailed weapons, sensors, acoustic performance, patrol cycles, readiness, and individual operational histories remain open.",
    sections:[
      {id:"inheritance",title:"1947 inheritance",html:"<p>America had 125 submarines afloat and ninety-five operational on 31 December 1947. None had been lost in combat, although design age, maintenance, and training separated the physical inventory from the usable force.</p>"},
      {id:"lineage",title:"Postwar lineages",html:americanSubmarineTable},
      {id:"attack",title:"Nuclear attack branch",html:"<p>Eight Sturgeon and twelve Los Angeles boats formed the twenty-boat front-line SSN force. Earlier Nautilus, Skate, Permit, and Skipjack generations remained in training, intelligence, reserve, or secondary roles.</p>"},
      {id:"missile",title:"Guided-missile branch",html:"<p>Four Triton and four Longbow SSGNs carried conventional strategic strike. Longbow introduced submerged vertical launch at larger displacement.</p>"},
      {id:"conventional",title:"Conventional branch",html:"<p>Twenty Tang/Barbel-family diesel-electric boats covered Arctic, Caribbean, coastal, and confined-water missions that did not require continuous nuclear endurance.</p>"},
      {id:"missions",title:"Missions",html:"<p>The force hunted ships and submarines, screened carriers, observed routes and bases, supported blockade planning, and attacked operational infrastructure with conventional weapons.</p>"},
      {id:"limits",title:"Limits",html:"<p>Front-line status did not mean simultaneous deployment. Reactor work, battery and machinery maintenance, weapons, intelligence, communications, and trained crews governed availability.</p>"}
    ],
    related:[{href:"american-nuclear-attack-submarines.html",kicker:"SSN branch",label:"American Nuclear Attack Submarines"},{href:"american-guided-missile-submarines.html",kicker:"SSGN branch",label:"American Guided-Missile Submarines"},{href:"american-conventional-submarines.html",kicker:"SSK branch",label:"American Conventional Submarines"},{href:"american-destroyer-frigate-force.html",kicker:"Surface ASW",label:"American Destroyers and Frigates"}],
    facts:[["Submarines afloat, 1947","125"],["Operational, 1947","95"],["SSNs, 1985","20"],["SSGNs, 1985","8"],["SSKs, 1985","20"],["Nuclear weapons","None"]]
  }),

  "american-nuclear-attack-submarines": americanNavalArticle({
    title:"American nuclear attack submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American front-line nuclear attack submarines in 1985 comprised eight Sturgeon-class and twelve Los Angeles-class boats. They performed long-range attack, carrier escort, submarine hunting, reconnaissance, and fleet screening.",
    canon:"Sturgeon and Los Angeles build totals, introduction bands, front-line and reserve counts, 4,800- and 6,900-tonne submerged displacements, nuclear propulsion, registered roles, and twenty-boat 1985 front-line total are established. Personal names, reactor types, dimensions, speed, crew, weapons, sensors, noise data, bases, patrols, and individual histories remain open in the local register.",
    sections:[
      {id:"sturgeon",title:"Sturgeon class",html:"<p>Twelve 4,800-tonne boats entered service between 1970 and 1980. Eight remained front-line in 1985; four early boats stood in mobilization reserve.</p>"},
      {id:"los-angeles",title:"Los Angeles class",html:"<p>Twelve 6,900-tonne boats entered service between 1978 and 1985. All remained active in fleet-attack and carrier-escort roles.</p>"},
      {id:"earlier",title:"Earlier nuclear boats",html:"<p>Nautilus and Skate family boats, Permit-class boats, and Skipjacks continued in training, intelligence, reserve, research, or secondary service. They did not increase the twenty-boat front-line total.</p>"},
      {id:"missions",title:"Missions",html:"<p>SSNs screened carrier groups, hunted submarines, tracked surface formations, watched bases and chokepoints, and supported long-distance reconnaissance. Nuclear propulsion gave endurance and sustained submerged movement, not unlimited tactical freedom.</p>"},
      {id:"comparison",title:"Force balance",html:"<p>America fielded fewer front-line SSNs than Germany but more than Britain or Japan. Numbers alone did not settle quieting, sensors, crew proficiency, geography, or readiness.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-guided-missile-submarines.html",kicker:"Strike complement",label:"American Guided-Missile Submarines"},{href:"american-carrier-force.html",kicker:"Screened formation",label:"American Carrier Force"},{href:"iceland-crisis.html",kicker:"Atlantic confrontation",label:"Iceland Crisis"}],
    facts:[["Front-line SSNs, 1985","20"],["Sturgeon","12 built; 8 active; 4 reserve"],["Sturgeon submerged displacement","4,800 t"],["Los Angeles","12 built and active"],["Los Angeles submerged displacement","6,900 t"],["Propulsion","Nuclear"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Sturgeon-class_submarine",label:"Wikipedia — historical Sturgeon-class context"},{href:"https://en.wikipedia.org/wiki/Los_Angeles-class_submarine",label:"Wikipedia — historical Los Angeles-class context"}]
  }),

  "american-guided-missile-submarines": americanNavalArticle({
    title:"American guided-missile submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American guided-missile submarines comprised four Triton-class and four Longbow-class nuclear boats. All eight remained active in 1985 as concealed conventional-strike platforms against fleets, ports, airfields, radar, communications, and other operational targets.",
    canon:"The Triton and Longbow class totals, introduction bands, 9,800- and 12,200-tonne submerged displacements, nuclear propulsion, conventional strategic-attack and submerged-VLS roles, active status, and absence of nuclear warheads are established. Personal names, missile models and counts, dimensions, speeds, crews, reactor types, sensors, torpedo fits, patrols, and target plans remain open.",
    sections:[
      {id:"triton",title:"Triton class",html:"<p>Four 9,800-tonne Triton-class SSGNs entered service between 1965 and 1972. The class supplied conventional strategic missile attack before submerged vertical launch became the governing arrangement.</p>"},
      {id:"longbow",title:"Longbow class",html:"<p>Four 12,200-tonne Longbow-class boats entered service between 1976 and 1983. Their registered mission was submerged vertical-launch strike.</p>"},
      {id:"weapons",title:"Conventional weapons",html:"<p>The boats carried conventional rather than nuclear warheads. Their targets were military and operational systems whose destruction could alter a campaign without creating an atomic deterrent.</p>"},
      {id:"targeting",title:"Targeting and communications",html:"<p>Submerged strike required external reconnaissance, updated target data, communications, navigation, and mission planning. Missiles did not give the boat independent knowledge of moving targets at long range.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>All eight boats remained front-line. The register does not specify simultaneous patrol numbers, readiness, or regional allocation.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Attack complement",label:"American Nuclear Attack Submarines"},{href:"american-postwar-battleships.html",kicker:"Surface missile complement",label:"American Battleship Force"},{href:"american-balanced-fleet.html",kicker:"Doctrine",label:"American Balanced Fleet"}],
    facts:[["Type","SSGN"],["Triton","4 boats; 9,800 t submerged"],["Longbow","4 boats; 12,200 t submerged"],["Introduction","1965–1983"],["Propulsion","Nuclear"],["Front-line, 1985","8"],["Nuclear warheads","None"]]
  }),

  "american-conventional-submarines": americanNavalArticle({
    title:"American postwar conventional submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American postwar conventional submarines were the twenty active Tang/Barbel-family diesel-electric boats retained for Arctic, Caribbean, coastal, chokepoint, and training missions in 1985. They occupied waters where a smaller quiet boat could be more economical than a nuclear submarine.",
    canon:"The twenty-boat active total, 1951–1965 introduction band, 2,700-tonne submerged reference displacement, diesel-electric propulsion, Arctic, Caribbean, and coastal-patrol role, and hull-number register are established. Division between Tang and Barbel subclasses, names, dimensions, speed, range, crew, weapons, sensors, modernization, bases, and individual service histories remain open.",
    sections:[
      {id:"lineage",title:"Tang and Barbel families",html:"<p>Twenty boats entered service between 1951 and 1965. The controlling register groups them as one Tang/Barbel family because the exact subclass division and individual names remain unsettled.</p>"},
      {id:"design",title:"Registered characteristics",html:"<p>Each registry row uses a 2,700-tonne submerged reference value and diesel-electric propulsion. Hull numbers run from SSK-01 through SSK-20.</p>"},
      {id:"missions",title:"Missions",html:"<p>The boats patrolled Arctic approaches, Caribbean routes, coasts, and confined waters. They also supported training, surveillance, blockade planning, and ambush operations.</p>"},
      {id:"nuclear",title:"Relationship with nuclear boats",html:"<p>SSKs did not duplicate the sustained speed and distant endurance of SSNs. They required less costly infrastructure and could concentrate in regional missions that did not demand continuous ocean pursuit.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>All twenty counted as front-line. Their individual readiness and distribution are not registered.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Nuclear complement",label:"American Nuclear Attack Submarines"},{href:"american-hemisphere.html",kicker:"Operating region",label:"American Hemisphere"},{href:"cuba.html",kicker:"Caribbean contingency",label:"Cuba"}],
    facts:[["Family","Tang/Barbel"],["Type","SSK"],["Active, 1985","20"],["Introduction","1951–1965"],["Submerged displacement","2,700 t"],["Propulsion","Diesel-electric"],["Roles","Arctic, Caribbean, and coastal patrol"]]
  }),

  "american-amphibious-force": americanNavalArticle({
    title:"United States amphibious force, 1961–1985",
    category:"Amphibious warfare",
    landscape:americanFleetLandscape,
    lead:"The United States amphibious force consisted in 1985 of seven Iwo Jima-class helicopter-assault ships, twelve Austin-class landing-platform docks, and thirteen Newport-class fast tank landing ships. Thirty-two major amphibious ships supported Marine operations, hemispheric intervention, evacuation, and reinforcement.",
    canon:"The three classes, build and active totals, commissioning bands, 19,000-, 17,000-, and 8,500-tonne full-load values, registered propulsion and roles, and thirty-two-ship 1985 total are established. Individual personal names, troop and vehicle capacities, landing-craft types, aviation complements, weapons, sensors, crews, formations, and operation-by-operation loads remain open.",
    sections:[
      {id:"iwo-jima",title:"Iwo Jima class",html:"<p>Seven 19,000-tonne steam-turbine helicopter-assault ships entered service between 1961 and 1970. All remained active.</p>"},
      {id:"austin",title:"Austin class",html:"<p>Twelve 17,000-tonne steam-turbine landing-platform docks entered service from 1965 through 1977. Their well decks connected ships, landing craft, and shore forces.</p>"},
      {id:"newport",title:"Newport class",html:"<p>Thirteen 8,500-tonne diesel fast tank landing ships entered service between 1970 and 1983. They supplied vehicles, heavy equipment, and direct shore access.</p>"},
      {id:"assault-carriers",title:"Assault-carrier support",html:"<p>Three Wasp-class and two America-class assault carriers supplied helicopters and VTOL aviation above the thirty-two-ship amphibious fleet.</p>"},
      {id:"missions",title:"Missions",html:"<p>The force supported intervention, evacuation, reinforcement, disaster response, port seizure, and blockade enforcement. It required air cover, mine clearance, ASW escorts, logistics, intelligence, and a defined political objective.</p>"},
      {id:"hemisphere",title:"Hemispheric employment",html:"<p>American operations in the Caribbean and Central America made amphibious availability a recurring instrument of policy. The force could deliver troops rapidly but could not create a durable settlement by ships alone.</p>"}
    ],
    related:[{href:"american-assault-carriers.html",kicker:"Aviation layer",label:"American Assault Carriers"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"},{href:"honduran-security-crisis.html",kicker:"Political use",label:"Honduran Security Crisis"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["Major amphibious ships, 1985","32"],["Iwo Jima","7 helicopter-assault ships"],["Austin","12 landing-platform docks"],["Newport","13 fast tank landing ships"],["Introduction span","1961–1983"]]
  }),

  "american-fleet-support-force": americanNavalArticle({
    title:"United States fleet support force",
    category:"Naval logistics",
    landscape:americanFleetLandscape,
    lead:"The United States fleet support force was the auxiliary, mine-warfare, and small-combatant system sustaining the balanced fleet. In 1985 it included forty-two major replenishment and repair ships, twenty-four Avenger mine-warfare ships, and twenty-four Pegasus corvettes or missile combatants.",
    canon:"The forty-two-auxiliary, twenty-four-mine-warfare, and twenty-four-fast-combatant totals; class labels; introduction bands; registered displacements, propulsion categories, and roles; and relationship with distant carrier and amphibious operations are established. Individual names, subtype allocation, payloads, capacities, crews, builders, detailed commissioning dates, deployments, and service histories remain open.",
    sections:[
      {id:"auxiliaries",title:"Major auxiliaries",html:"<p>Forty-two major fleet auxiliaries entered service between 1970 and 1985. The registry uses an 18,000-tonne full-load reference and diesel or steam-turbine propulsion while leaving the division among oilers, stores ships, repair ships, tenders, transports, and medical ships open.</p>"},
      {id:"mine",title:"Avenger mine-warfare ships",html:"<p>Twenty-four 850-tonne Avenger-class vessels entered service between 1970 and 1985. Mine clearance protected ports, amphibious approaches, carrier routes, and canal access.</p>"},
      {id:"pegasus",title:"Pegasus missile combatants",html:"<p>Twenty-four 650-tonne Pegasus-class corvettes or missile craft entered service between 1970 and 1985. They supplied coastal and regional fighting power below the frigate level.</p>"},
      {id:"carrier",title:"Carrier and submarine support",html:"<p>Nuclear propulsion reduced carrier and submarine demand for propulsion fuel but did not eliminate aviation fuel, weapons, food, spare parts, crew support, or repair. Conventional escorts and amphibious ships remained directly dependent on replenishment fuel.</p>"},
      {id:"hemisphere",title:"Hemispheric infrastructure",html:"<p>Home ports, the Canal Zone, Caribbean facilities, Pacific bases, merchant charters, and repair yards formed the fixed complement to the mobile support force. Exact base and command arrangements remain outside the locked register.</p>"},
      {id:"vulnerability",title:"Vulnerability",html:"<p>Auxiliaries, minesweepers, and small combatants were not secondary in consequence. Loss of fuel, stores, repair, or cleared access could immobilize a larger formation whose capital ships remained intact.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Supported force",label:"American Carrier Force"},{href:"american-amphibious-force.html",kicker:"Supported force",label:"American Amphibious Force"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"},{href:"panama.html",kicker:"Canal infrastructure",label:"Panama"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["Major auxiliaries, 1985","42"],["Auxiliary reference full load","18,000 t"],["Mine-warfare ships","24 Avenger class"],["Fast combatants","24 Pegasus class"],["Introduction span","1970–1985"]]
  })
});
