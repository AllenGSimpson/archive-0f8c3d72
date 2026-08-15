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

Object.assign(window.deepArticles, {
  "us-navy-postwar": americanNavalArticle({
    title:"United States Navy after the Second World War",
    category:"Military history",
    eyebrow:"American navy · neutral inheritance and balanced expansion",
    landscape:americanFleetLandscape,
    lead:"The United States Navy after 1947 developed from an undamaged neutral-war fleet into a costly battleship-centered balanced force. By 1985 it maintained approximately five or six first-line fleet carriers alongside light or assault aviation ships, surface forces, submarines, amphibious shipping, and mobile support for hemispheric and expeditionary operations.",
    canon:"The revised neutral-war inheritance, balanced-fleet doctrine, service responsibilities, battleship-centered character, approximate first-line carrier strength, conventional-strike role, hemispheric missions, and absence of nuclear naval weapons are established. The former exact 1985 all-category ledger is withdrawn; exact battleship, cruiser, escort, submarine, amphibious, auxiliary, and class totals remain open pending reconstruction.",
    sections:[
      {id:"inheritance",title:"Neutral-war inheritance",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-f3q9k writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><p>The United States did not enter the general war and suffered no naval combat attrition. On 31 December 1947 it possessed twenty capital ships, twelve fleet/light carriers, thirty-eight cruisers, ninety-six destroyers, forty-four major escorts, and eighty-six submarines afloat. Fourteen, nine, twenty-nine, seventy-two, thirty, and sixty-two respectively were operational.</p><p>The fleet remained below contemporary projections for full belligerent mobilization because the emergency mass carrier, destroyer, and merchant programs never reached the same scale.</p><!-- altwwii-writer-block:end -->"},
      {id:"doctrine",title:"Balanced-fleet doctrine",html:"<p>Pearl Harbor never destroyed American battleship prestige. Japanese carrier power nevertheless demonstrated that aviation could not be treated as an auxiliary. The Navy financed battleships, carriers, cruisers, escorts, attack submarines, guided-missile submarines, amphibious shipping, mine warfare, and replenishment at the same time.</p>"},
      {id:"responsibilities",title:"Service responsibilities",html:"<p>The Navy controlled carrier and maritime aviation through the Naval Air Corps. It also held conventional sea-launched strategic strike, amphibious warfare, and hemispheric sea control. The independent Aerospace Force controlled strategic interception, bombing, missiles, spaceplanes, and orbital warfare.</p>"},
      {id:"hemisphere",title:"Hemispheric and expeditionary missions",html:"<p>American naval power supported interventions, blockades, bases, canal defense, Caribbean surveillance, Pacific access, and protection of allied or associated states. The Navy could concentrate far greater force than regional opponents while remaining politically constrained by Congress, presidents, and negotiated crisis limits.</p>"},
      {id:"crises",title:"Atlantic and Pacific pressure",html:"<p>The 1967–1968 Iceland crisis exposed the battleship fleet to modern German submarines. Japanese carrier strength required continuing Pacific surveillance and a fleet capable of operating without assuming technical superiority.</p><p>The Falklands armed-mediation regime showed a different use of naval power: monitoring, interdiction, and enforcement of limits on both belligerents.</p>"},
      {id:"1985",title:"Fleet in 1985",html:"<p>The Navy remained a battleship-centered balanced force rather than a service organized around one exclusive arm. Approximately five or six first-line fleet carriers operated with light or assault aviation ships. The exact battleship, cruiser, escort, submarine, amphibious, auxiliary, and class totals await a revised register.</p>"},
      {id:"limits",title:"Limits",html:"<p>Balance was expensive. Nuclear carriers and cruisers, armored flagships, escorts, submarines, amphibious forces, and auxiliaries competed for crews, dockyards, maintenance, and procurement authority.</p><p>The fleet was large enough to act globally but remained tied to political decisions about where the American hemisphere ended and what intervention was meant to accomplish.</p>"}
    ],
    related:[{href:"world-naval-balance-1985.html",kicker:"Comparative strength",label:"World Naval Balance in 1985"},{href:"naval-armistice-inventory-1947.html",kicker:"Starting inventory",label:"Naval Armistice Inventory of 1947"},{href:"american-balanced-fleet.html",kicker:"Governing doctrine",label:"American Balanced Fleet"},{href:"american-carrier-force.html",kicker:"Naval aviation",label:"American Carrier Force"},{href:"us-navy-submarine-force.html",kicker:"Undersea arm",label:"United States Submarine Force"},{href:"american-amphibious-force.html",kicker:"Intervention arm",label:"American Amphibious Force"}],
    facts:[["Service","United States Navy"],["Strategic model","Battleship-centered balanced fleet"],["Capital ships afloat / operational, 1947","20 / 14"],["Fleet/light carriers afloat / operational, 1947","12 / 9"],["First-line fleet carriers, 1985","Approximately 5 or 6"],["Other exact 1985 totals","Open pending reconstruction"],["Reference date","1 January 1985"]]
  }),

  "american-balanced-fleet": americanNavalArticle({
    title:"American balanced-fleet doctrine",
    category:"Naval doctrine",
    landscape:americanFleetLandscape,
    lead:"American balanced-fleet doctrine was the postwar decision to retain armored surface power while building carrier aviation, missile defense, submarines, amphibious lift, mine warfare, and mobile logistics at world scale. No single branch received the exclusive strategic primacy found in Japan's carrier system or Germany's U-boat system.",
    canon:"The balanced-fleet characterization, survival of battleship prestige, recognition of Japanese carrier power, Navy responsibilities, bounded 1985 force relationships, hemispheric missions, conventional-strike doctrine, and comparison with other fleets are established. Exact 1985 battleship, cruiser, escort, submarine, amphibious, auxiliary, light-carrier, and assault-carrier totals remain open, as do formal doctrinal publications, exercises, staffs, budgets, and regional commands.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The absence of Pearl Harbor removed the political shock that might have discredited the battle line. American observers still saw Japan build a carrier-centered empire and Britain survive through naval infrastructure. The resulting policy added aviation and submarines without discarding battleships.</p>"},
      {id:"components",title:"Fleet components",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-z6m2h writer=g kind=revision created=2026-08-15T13:43:00-06:00 --><p>Battleships remained the capital-ship and armored-command center. Approximately five or six first-line fleet carriers supplied aviation reach, supplemented by light and assault ships. Cruisers, destroyers, frigates, submarines, amphibious ships, mine-warfare vessels, and auxiliaries completed the balanced system; their exact 1985 totals remain open.</p><!-- altwwii-writer-block:end -->"},
      {id:"information",title:"Information and defense",html:"<p>Phased-array cruisers, carrier aircraft, submarines, escorts, satellites, patrol aviation, and signals intelligence supported detection and threat evaluation. No defense guaranteed interception of a coordinated missile, submarine, aircraft, and mine attack.</p>"},
      {id:"strike",title:"Conventional strategic strike",html:"<p>Carrier aviation, battleship and cruiser missiles, the very small experimental guided-missile-submarine branch, and Aerospace Force systems offered overlapping conventional attack methods. Nuclear warheads did not define naval planning.</p>"},
      {id:"intervention",title:"Amphibious intervention",html:"<p>Helicopter-assault, landing-platform-dock, fast tank-landing, light and assault aviation, landing forces, Naval Air Corps aircraft, and auxiliaries supported operations in the Caribbean, Central America, and other maritime approaches. Exact class and hull totals remain open.</p>"},
      {id:"cost",title:"Cost and criticism",html:"<p>Critics could attack almost any branch as redundant. Battleship advocates defended armor and gunfire; carrier advocates emphasized reach; submariners emphasized concealment; interventionists demanded lift; escort planners warned that none of the larger ships survived alone.</p>"}
    ],
    related:[{href:"us-navy-postwar.html",kicker:"Fleet history",label:"Postwar United States Navy"},{href:"american-postwar-battleships.html",kicker:"Armored branch",label:"American Battleship Force"},{href:"american-carrier-force.html",kicker:"Aviation branch",label:"American Carrier Force"},{href:"us-navy-submarine-force.html",kicker:"Undersea branch",label:"United States Submarine Force"},{href:"military-technology.html",kicker:"Comparative capability",label:"Military Technology"}],
    facts:[["Adopted","Post-1947 development"],["Defining characteristic","Parallel investment across fleet branches"],["Capital-ship category","Battleship"],["First-line fleet carriers, 1985","Approximately 5 or 6"],["Light and assault ships","Present; exact totals open"],["Other exact 1985 totals","Open"],["Nuclear weapons","None"]]
  }),

  "american-neutral-war-fleet": americanNavalArticle({
    title:"United States neutral-war fleet, 1941–1947",
    category:"Naval history",
    eyebrow:"United States Navy · limited mobilization · armistice inheritance",
    landscape:americanLineageLandscape,
    lead:"The United States neutral-war fleet was the naval force built while America remained formally outside the general war. It suffered no combat attrition, completed four Iowa-class and two Montana-class battleships, brought five Essex-class carriers into service, supplied ships to Britain and Commonwealth customers, and avoided the emergency mass-production program associated with a two-ocean shooting war.",
    canon:"The revised 1947 afloat and operational totals, four Iowa-class ships, two Montana-class ships commissioned in 1946–47, Alaska-class inclusion in the capital audit, five Essex-class completions, and limited-mobilization character are established. Exact merchant output, foreign-transfer totals, and most individual non-capital completion and allocation records remain open pending reconstruction.",
    sections:[
      {id:"counting",title:"Counting method",html:"<p><em>Afloat</em> included surviving ships under repair, in reserve, obsolete, or awaiting disposition. <em>Operational</em> counted ships available or reasonably prepared for active service. Neither category included merchant shipping.</p>"},
      {id:"balance",title:"Balance on 31 December 1947",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-h8r4t writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Category</th><th>Afloat</th><th>Operational</th></tr></thead><tbody><tr><td>Capital ships</td><td>20</td><td>14</td></tr><tr><td>Fleet/light carriers</td><td>12</td><td>9</td></tr><tr><td>Cruisers</td><td>38</td><td>29</td></tr><tr><td>Destroyers</td><td>96</td><td>72</td></tr><tr><td>Major escorts</td><td>44</td><td>30</td></tr><tr><td>Submarines</td><td>86</td><td>62</td></tr></tbody></table></div><!-- altwwii-writer-block:end -->"},
      {id:"battleships",title:"Capital-ship program",html:"<p>Twenty capital ships were afloat and fourteen operational. Four Iowa-class ships and two Montana-class ships, the latter commissioned during 1946–47, formed the modern battleship core; the Alaska class is included within the capital-ship audit.</p><p>The complete distribution among older battleships and readiness categories awaits the hull-level reconstruction.</p>"},
      {id:"carriers-cruisers",title:"Carriers and cruisers",html:"<p>Twelve fleet/light carriers were afloat and nine operational. Five Essex-class carriers had completed by 1947. Twenty-nine of thirty-eight cruisers were operational.</p>"},
      {id:"destroyers",title:"Destroyers and major escorts",html:"<p>The revised audit counts ninety-six destroyers and forty-four major escorts afloat; seventy-two destroyers and thirty escorts were operational.</p>"},
      {id:"transfers",title:"Foreign transfers",html:"<p>Transfers to Britain and Commonwealth customers supported convoy protection and route defense while reducing the American reserve burden. Exact transfer totals remain open pending reconciliation with the revised fleet audit.</p>"},
      {id:"submarines",title:"Submarine force",html:"<p>Sixty-two of eighty-six submarines were operational. The remainder included repair, training, reserve, obsolete, and disposition categories. The absence of American combat patrols preserved hulls but limited current operational experience.</p>"},
      {id:"merchant",title:"Merchant construction",html:"<p>The emergency merchant program was substantial but remained below a full belligerent mobilization. Exact output by EC2/Liberty, Victory, tanker, and specialized-cargo type remains open pending industrial audit.</p>"},
      {id:"registry",title:"Registry reconstruction",html:"<p>The revised aggregate totals and the identified modern battleship and Essex-class components are controlling. Individual cruiser, destroyer, escort, submarine, transfer, and older-capital records require a new class and hull allocation within those bounds.</p>"},
      {id:"legacy",title:"Postwar use",html:"<p>Neutrality preserved ships, yards, crews, and industrial capacity while limiting combat experience. During the 1950s the Navy divided the inheritance among active formations, modernization, training, reserve, transfers, and disposal.</p><p>The resulting force developed into the <a href='american-balanced-fleet.html'>balanced fleet</a> rather than a fleet organized around one principal combat arm.</p>"}
    ],
    related:[{href:"naval-armistice-inventory-1947.html",kicker:"Five-navy comparison",label:"Naval Armistice Inventory of 1947"},{href:"us-navy-postwar.html",kicker:"Successor fleet",label:"Postwar United States Navy"},{href:"american-balanced-fleet.html",kicker:"Postwar doctrine",label:"American Balanced Fleet"},{href:"american-postwar-battleships.html",kicker:"Capital inheritance",label:"American Battleship Force"},{href:"american-carrier-force.html",kicker:"Carrier inheritance",label:"American Carrier Force"},{href:"loans-to-a-drowning-man.html",kicker:"Late neutral policy",label:"Loans to a Drowning Man"}],
    facts:[["Reference date","31 December 1947"],["Capital ships afloat / operational","20 / 14"],["Fleet/light carriers afloat / operational","12 / 9"],["Cruisers afloat / operational","38 / 29"],["Destroyers afloat / operational","96 / 72"],["Major escorts afloat / operational","44 / 30"],["Submarines afloat / operational","86 / 62"],["Iowa class","4 ships"],["Montana class","2 commissioned, 1946–47"],["Essex class","5 completed"]]
  }),

  "american-postwar-battleships": americanNavalArticle({
    title:"United States battleship force after 1947",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"The United States retained the battleship as its only capital-ship category after 1947. Four Iowa-class ships and the two Montana-class ships formed the inherited modern core; Kentucky around 1960 and Maine around 1984 mark the principal postwar generations. The exact active 1985 battleship total remains open.",
    canon:"Four Iowa-class ships commissioned during 1943–45, Montana and Ohio commissioned during 1946–47, the Kentucky generation around 1960, the clean-sheet nuclear Maine generation around 1984, and the battleship's armored command role are established. Exact active 1985 totals, detailed specifications, class allocations beyond those bounds, weapons, sensors, crews, refits, deployments, and individual service histories remain open.",
    sections:[
      {id:"prestige",title:"Battleship prestige",html:"<p>The Navy never experienced Pearl Harbor or a domestic wartime narrative in which carriers replaced a destroyed battle line. Battleships remained symbols of industrial and maritime power even as aircraft, submarines, and missiles governed many operational decisions.</p>"},
      {id:"iowa",title:"Iowa class",html:"<p>Iowa, New Jersey, Missouri, and Wisconsin commissioned between 1943 and 1945. They formed the fast battle wing and later received missile, command, and drone-spotting refits; exact 1985 configurations remain open.</p>"},
      {id:"montana",title:"Montana class",html:"<p>Montana and Ohio commissioned during 1946–47 as the heavy American answer to the Yamato family. Later work on one hull included experimental nuclear development; the ship and final configuration remain open.</p>"},
      {id:"generations",title:"Postwar generations",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-b6r2k writer=g kind=revision created=2026-08-15T13:08:00-06:00 --><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Generation</th><th>First major commission</th><th>Established role</th></tr></thead><tbody><tr><td>Iowa</td><td>1943–45</td><td>Fast battle wing; later missile, command, and drone-spotting refits</td></tr><tr><td>Montana</td><td>1946–47</td><td>Heavy answer to the Yamato family</td></tr><tr><td>Kentucky</td><td>c. 1960</td><td>First genuinely postwar missile-and-gun battleship generation</td></tr><tr><td>Maine</td><td>c. 1984</td><td>First clean-sheet nuclear battleship and armored fleet-command center</td></tr></tbody></table></div><!-- altwwii-writer-block:end -->"},
      {id:"roles",title:"Roles",html:"<p>The ships served as armored flagships, heavy surface-attack units, shore-bombardment platforms, missile carriers, and visible centers of fleet concentration. Their speed and protection differed by class.</p>"},
      {id:"iceland",title:"Iceland crisis",html:"<p>During the 1967–1968 Atlantic confrontation, modern German attack submarines were positioned to strike the American battle line. The crisis demonstrated that armor and surface firepower did not remove undersea vulnerability.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>The force remained central to American fleet organization in 1985, but the exact active hull total and distribution among inherited, postwar, reserve, experimental, and refit categories remain open.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parallel capital arm",label:"American Carrier Force"},{href:"american-cruiser-force.html",kicker:"Missile screen",label:"American Cruiser Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"},{href:"iceland-crisis.html",kicker:"Undersea warning",label:"Iceland Crisis"}],
    facts:[["Capital-ship category","Battleship only"],["Iowa class","4 ships commissioned, 1943–45"],["Montana class","Montana and Ohio commissioned, 1946–47"],["Kentucky generation","c. 1960"],["Maine generation","c. 1984; clean-sheet nuclear battleship"],["Exact active total, 1985","Open"],["Nuclear weapons","None"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Iowa-class_battleship",label:"Wikipedia — historical Iowa-class design context"},{href:"https://en.wikipedia.org/wiki/Montana-class_battleship",label:"Wikipedia — pre-divergence Montana-class design history"}]
  }),

  "american-carrier-force": americanNavalArticle({
    title:"United States carrier force, 1957–1985",
    category:"Naval aviation",
    landscape:americanFleetLandscape,
    lead:"The United States carrier force comprised approximately five or six first-line fleet carriers in 1985, supplemented by light and assault ships. American doctrine classified the carrier as an air cruiser and major assault-drone base within a battleship-centered fleet rather than as the fleet's sole capital arm.",
    canon:"Approximately five or six first-line fleet carriers, the first jet/drone generation around 1958, an enlarged conventional generation around 1969, the mature Enterprise nuclear generation around 1979, light and assault aviation ships, carrier-based assault drones, and Naval Air Corps control are established. Post-Essex class names, hull allocations, exact light and assault totals, air groups, dimensions, weapons, sensors, readiness, and individual histories remain open.",
    sections:[
      {id:"doctrine",title:"Carrier doctrine",html:"<p>American planners recognized Japanese carrier strength while refusing to make aviation the sole center of the fleet. Carrier groups operated with missile cruisers, destroyers, frigates, submarines, battleships, replenishment, and land-based Naval Air Corps support.</p>"},
      {id:"lineage",title:"Carrier generations",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-c8m4v writer=g kind=revision created=2026-08-15T13:08:00-06:00 --><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Generation</th><th>First major commission</th><th>Established character</th></tr></thead><tbody><tr><td>First jet/drone fleet carrier</td><td>c. 1958</td><td>Conventional carrier for fighters, manned strike aircraft, and a large assault-drone establishment</td></tr><tr><td>Enlarged conventional jet/drone carrier</td><td>c. 1969</td><td>Greater control bandwidth, packed-drone volume, and fleet air defense</td></tr><tr><td>Enterprise nuclear generation</td><td>c. 1979</td><td>First mature nuclear American carrier generation</td></tr></tbody></table></div><!-- altwwii-writer-block:end -->"},
      {id:"fleet",title:"Fleet carriers",html:"<p>Approximately five or six first-line fleet carriers served in 1985. Exact post-Essex class names and hull allocations remain open. Their principal investments were air defense, control spaces, and folded assault drones rather than the prestige of the largest possible carrier hull.</p>"},
      {id:"assault",title:"Light and assault carriers",html:"<p>Light and assault aviation ships supported helicopter assault, vertical-takeoff aviation, amphibious operations, and secondary fleet work. Their exact class names and 1985 hull totals remain open.</p>"},
      {id:"naval-air-corps",title:"Naval Air Corps",html:"<p>The Naval Air Corps owned carrier and maritime aviation. Strategic bombers, orbital vehicles, and military space remained under the independent Aerospace Force, while the Army Air Corps controlled battlefield aviation.</p>"},
      {id:"limits",title:"Availability and limits",html:"<p>Refit, reactor or machinery maintenance, aircraft and drone availability, crew training, escort strength, and replenishment determined operational concentration. The approximate first-line total does not establish simultaneous readiness.</p>"}
    ],
    related:[{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"},{href:"american-cruiser-force.html",kicker:"Air-defense screen",label:"American Cruiser Force"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["First-line fleet carriers, 1985","Approximately 5 or 6"],["Institutional classification","Air cruiser"],["First jet/drone generation","c. 1958"],["Enlarged conventional generation","c. 1969"],["Mature nuclear generation","c. 1979"],["Light and assault totals","Open"],["Principal aviation service","Naval Air Corps"]]
  }),

  "united-states-class-carrier": americanNavalArticle({
    title:"United States-class aircraft carrier",
    category:"Warship class",
    landscape:americanLineageLandscape,
    lead:"The United States class was part of a former postwar carrier reconstruction that assigned three named steam carriers to the first American jet-carrier generation. The later naval register withdraws that class identity and hull allocation while retaining a first jet/drone fleet-carrier generation around 1958.",
    canon:"A conventional first jet/drone fleet-carrier generation around 1958, built for fighters, manned strike aircraft, and a large assault-drone establishment, is established. The United States class name, three-ship roster, commissioning sequence, displacement, air group, 1985 status, and individual histories are open pending reconstruction.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-m4r8v writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The three-ship United States-class roster, its named hulls, specifications, and active status are withdrawn. Post-Essex class names and hull allocations remain open.</p><!-- altwwii-writer-block:end -->"},
      {id:"generation",title:"Established generation",html:"<p>The first jet/drone fleet carrier entered the postwar sequence around 1958. It was a conventional carrier built around fighters, manned strike aircraft, and a large assault-drone establishment.</p>"},
      {id:"open",title:"Open details",html:"<p>Class name, ship names, hull count, commissioning dates, dimensions, propulsion details, air group, weapons, sensors, builders, service history, and 1985 allocation require reconstruction.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"american-nuclear-carriers.html",kicker:"Successor generation",label:"American Nuclear Carriers"},{href:"american-cruiser-force.html",kicker:"Escort system",label:"American Cruiser Force"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"}],
    facts:[["Former identity","United States class"],["Current status","Withdrawn class reconstruction"],["Established generation","First jet/drone fleet carrier"],["First major commission","c. 1958"],["Established propulsion","Conventional"],["Class name and hull allocation","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/United_States-class_aircraft_carrier",label:"Wikipedia — pre-divergence United States-class design history"}]
  }),

  "american-nuclear-carriers": americanNavalArticle({
    title:"American nuclear fleet carriers",
    category:"Naval aviation",
    landscape:americanLineageLandscape,
    lead:"American surface nuclear propulsion reached a mature carrier generation around 1979 after earlier submarine and cruiser work. The former two-class, six-ship Enterprise and Saratoga roster is withdrawn; exact nuclear-carrier class names, hull totals, and 1985 allocation remain open.",
    canon:"Cheap domestic oil delayed American surface nuclear propulsion; submarines received reactors first, USS Chicago proved a surface plant, and a mature Enterprise nuclear carrier generation appeared around 1979. Exact carrier class names, hull totals, air groups, dimensions, reactors, weapons, readiness, and individual histories remain open.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-n7c2p writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The former Enterprise/Franklin and Saratoga/Ranger/Yorktown/Lexington allocation, its six-ship total, displacements, air groups, and commissioning sequence are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"generation",title:"Enterprise nuclear generation",html:"<p>The first mature nuclear American carrier generation entered the sequence around 1979. It remained institutionally an air cruiser within the battleship-centered fleet.</p>"},
      {id:"endurance",title:"Endurance",html:"<p>Nuclear propulsion reduced dependence on ship fuel for the carrier itself. Aviation fuel, weapons, food, spares, escort fuel, and aircraft maintenance still required a large replenishment system.</p>"},
      {id:"roles",title:"Roles",html:"<p>The ships provided fleet air defense, long-range strike, reconnaissance, command, and crisis presence. They operated as parts of carrier groups rather than independent capital ships.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Nuclear carriers formed part of the approximately five or six first-line fleet-carrier force. Their exact share, class names, and hull allocation remain open.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Parent arm",label:"American Carrier Force"},{href:"united-states-class-carrier.html",kicker:"Steam predecessor",label:"United States Class"},{href:"american-cruiser-force.html",kicker:"Nuclear escort",label:"American Cruiser Force"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}],
    facts:[["Established generation","Enterprise nuclear generation"],["First major commission","c. 1979"],["Propulsion","Nuclear"],["Former six-ship roster","Withdrawn"],["Exact class and hull total","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/USS_Enterprise_(CVN-65)",label:"Wikipedia — historical nuclear-carrier design context"}]
  }),

  "american-assault-carriers": americanNavalArticle({
    title:"American assault-carrier force",
    category:"Amphibious aviation",
    landscape:americanFleetLandscape,
    lead:"American light and assault carriers linked naval aviation to Marine, amphibious, helicopter, and vertical-takeoff operations. The former three-ship Wasp and two-ship America allocation is withdrawn; exact class names, hull totals, and 1985 strength remain open.",
    canon:"Light and assault aviation ships, helicopter assault, landing-platform-dock and fast tank-landing functions, vertical-takeoff fleet support, and amphibious aviation are established. The former Wasp and America class identities, five-ship total, specifications, air groups, and individual histories are open pending reconstruction.",
    sections:[
      {id:"supersession",title:"Registry status",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-p3v9k writer=g kind=revision created=2026-08-15T13:16:00-06:00 --><p>The former Wasp/Iwo Jima/Guadalcanal and America/Philippine Sea roster, its five-ship total, specifications, and air-group figures are withdrawn.</p><!-- altwwii-writer-block:end -->"},
      {id:"branches",title:"Established functions",html:"<p>Helicopter assault, vertical-takeoff fleet support, amphibious aviation, landing-platform-dock, and fast tank-landing functions remained part of the postwar Navy. Their alternate class registry has not been reconstructed.</p>"},
      {id:"missions",title:"Missions",html:"<p>Assault carriers moved and supported landing forces, provided helicopter transport, local air defense, reconnaissance, and strike, and reinforced larger carrier formations where required.</p>"},
      {id:"limits",title:"Open details",html:"<p>Class names, hull totals, ship names, propulsion, air groups, troop and vehicle capacity, weapons, sensors, readiness, deployments, and individual histories remain open.</p>"}
    ],
    related:[{href:"american-amphibious-force.html",kicker:"Landing fleet",label:"American Amphibious Force"},{href:"american-carrier-force.html",kicker:"Carrier system",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"}],
    facts:[["Established branches","Light and assault carriers"],["Established roles","Helicopter · VTOL · amphibious aviation"],["Former Wasp/America roster","Withdrawn"],["Exact class and hull totals","Open"]]
  })
});

Object.assign(window.deepArticles, {
  "american-cruiser-force": americanNavalArticle({
    title:"United States postwar cruiser force",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"The United States postwar cruiser force supplied armored task-group command, fleet air defense, reconnaissance, electronic warfare, communications, and assault-drone control. Its fixed chronology includes an experimental nuclear cruiser named USS Chicago, while exact postwar class names and 1985 totals remain open.",
    canon:"The heavy- and light-cruiser generation sequence, USS Chicago as the experimental nuclear cruiser named for Chicago Pile-1, nuclear surface-propulsion trials, drone and command roles, and a return to a new conventional heavy cruiser in the mid-1980s are established. Other postwar class names, hull totals, displacements, weapons, sensors, crews, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"generations",title:"Cruiser generations",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-d3q9h writer=g kind=revision created=2026-08-15T13:08:00-06:00 --><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Generation</th><th>Introduction</th><th>Role</th></tr></thead><tbody><tr><td>Automatic-gun heavy cruiser</td><td>1950s</td><td>Armored task-group center and battle-line support</td></tr><tr><td>USS Chicago experimental nuclear cruiser</td><td>1960s</td><td>Nuclear-propulsion demonstration, command, and fleet air defense</td></tr><tr><td>Mature drone/C2 heavy cruiser</td><td>Mid-1960s</td><td>Task-group command, assault-drone relay, and distributed air defense</td></tr><tr><td>New conventional heavy cruiser</td><td>Mid-1980s</td><td>Command, missile, gun, and drone architecture after nuclear-cruiser economics disappointed</td></tr><tr><td>Automatic-AA light cruiser</td><td>Early 1950s</td><td>Fleet air defense and reconnaissance</td></tr><tr><td>Scout-information light cruiser</td><td>Mid-1960s</td><td>Radar, electronic warfare, communications, and drone relay</td></tr><tr><td>Mature electronic scout cruiser</td><td>Early 1980s</td><td>Fleet information node with missiles, guns, and drones</td></tr></tbody></table></div><!-- altwwii-writer-block:end -->"},
      {id:"carrier",title:"Carrier-group role",html:"<p>Cruisers organized air-defense sectors, managed identification and engagement, and linked carrier aircraft to destroyer and frigate screens. Nuclear propulsion extended endurance for Long Beach and California ships but did not eliminate weapons, crew, and maintenance requirements.</p>"},
      {id:"1985",title:"Force in 1985",html:"<p>Several heavy- and light-cruiser generations remained in service. Exact class names, active totals, readiness, and assignments require registry reconstruction.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Primary screened force",label:"American Carrier Force"},{href:"american-destroyer-frigate-force.html",kicker:"Outer and inner escorts",label:"American Destroyers and Frigates"},{href:"american-postwar-battleships.html",kicker:"Armored flagships",label:"American Battleship Force"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["Heavy-cruiser roles","Command · battle-line support · drone relay"],["Light-cruiser roles","Air defense · reconnaissance · electronic warfare"],["Experimental nuclear cruiser","USS Chicago"],["Namesake","Chicago Pile-1"],["New conventional heavy cruiser","Mid-1980s"],["Exact active total, 1985","Open"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/USS_Long_Beach_(CGN-9)",label:"Wikipedia — historical nuclear-cruiser design context"},{href:"https://en.wikipedia.org/wiki/Ticonderoga-class_cruiser",label:"Wikipedia — historical phased-array cruiser context"}]
  }),

  "american-destroyer-frigate-force": americanNavalArticle({
    title:"United States destroyer and frigate force",
    category:"Naval history",
    landscape:americanLineageLandscape,
    lead:"American destroyers and frigates supplied the distributed screen around battleships, carriers, cruisers, amphibious groups, auxiliaries, bases, and convoys. Destroyers combined torpedo, gun, air-defense, anti-submarine, and drone work; frigates specialized in submarine hunting and ocean escort. Exact postwar class names and 1985 totals remain open.",
    canon:"The general-purpose destroyer and specialist ocean-frigate branches and their fleet-screening, convoy, air-defense, anti-submarine, torpedo, gun, and drone roles are established. The former Charles F. Adams, Spruance, Knox, and Perry reconstruction, its hull-number system, and its exact 1985 totals are withdrawn; replacement class names, totals, specifications, readiness, and deployments remain open.",
    sections:[
      {id:"lineage",title:"Postwar branches",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-f7v2m writer=g kind=revision created=2026-08-15T13:08:00-06:00 --><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Branch</th><th>Period</th><th>Established role</th></tr></thead><tbody><tr><td>General-purpose destroyer families</td><td>1950s–80s</td><td>Torpedo attack, gun action, distributed air defense, anti-submarine warfare, and drone work</td></tr><tr><td>Ocean frigate families</td><td>1950s–80s</td><td>Specialist anti-submarine warfare and convoy escort</td></tr></tbody></table></div><!-- altwwii-writer-block:end -->"},
      {id:"employment",title:"Employment",html:"<p>Destroyers and frigates screened carriers, battleships, cruisers, amphibious groups, auxiliaries, bases, and convoys. Their value depended on patrol aviation, helicopters, submarines, data links, and current threat classification.</p>"}
    ],
    related:[{href:"american-cruiser-force.html",kicker:"Command layer",label:"American Cruiser Force"},{href:"american-carrier-force.html",kicker:"Primary screened force",label:"American Carrier Force"},{href:"us-navy-submarine-force.html",kicker:"ASW opponent and partner",label:"United States Submarine Force"},{href:"american-amphibious-force.html",kicker:"Expeditionary screen",label:"American Amphibious Force"}],
    facts:[["Destroyer branch","General-purpose families, 1950s–80s"],["Frigate branch","Specialist ASW and ocean escort"],["Primary duties","Fleet screen · convoy protection · route defense"],["Former class reconstruction","Withdrawn"],["Exact active totals, 1985","Open"]]
  }),

  "us-navy-submarine-force": americanNavalArticle({
    title:"United States Navy submarine force, 1947–1985",
    category:"Submarine history",
    landscape:americanLineageLandscape,
    lead:"The United States Navy submarine force developed from an undamaged neutral-war inheritance of eighty-six boats, sixty-two operational, into attack, guided-missile, and conventional postwar branches. The former exact forty-eight-boat 1985 front line is no longer controlling and awaits class-by-class reconstruction.",
    canon:"The revised 1947 total of eighty-six afloat and sixty-two operational, the qualitative attack, guided-missile, and conventional branches, conventional warheads, and their principal roles are established. The former exact 1985 total and class allocations are withdrawn pending reconstruction; command organization, bases, weapons, sensors, acoustic performance, patrol cycles, readiness, and individual histories remain open.",
    sections:[
      {id:"inheritance",title:"1947 inheritance",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-j5m2v writer=g kind=revision created=2026-08-15T12:54:00-06:00 --><p>America had eighty-six submarines afloat and sixty-two operational on 31 December 1947. None had been lost in combat, although design age, maintenance, and training separated the physical inventory from the usable force.</p><!-- altwwii-writer-block:end -->"},
      {id:"lineage",title:"Postwar branches",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-f3m7v writer=g kind=revision created=2026-08-15T13:32:00-06:00 --><p>The postwar force developed a capable nuclear reconnaissance-and-attack elite, a conventional coastal and training branch, and a very small experimental guided-missile branch. The former Tang/Barbel, Sturgeon, Los Angeles, Triton, and Longbow allocation is not active canon; exact postwar class names and 1985 totals remain open.</p><!-- altwwii-writer-block:end -->"},
      {id:"attack",title:"Nuclear attack branch",html:"<p>Nuclear attack submarines served as scouts, fleet-support attackers, submarine hunters, and independent raiders. Their class identities and exact 1985 allocation remain open.</p>"},
      {id:"missile",title:"Guided-missile branch",html:"<p>A very small experimental guided-missile branch supplied concealed conventional strike. Its class identities, launch arrangements, and exact 1985 total remain open.</p>"},
      {id:"conventional",title:"Conventional branch",html:"<p>Conventional submarines covered coastal and training duties that did not require continuous nuclear endurance. Their class identities and exact 1985 strength remain open.</p>"},
      {id:"missions",title:"Missions",html:"<p>The force hunted ships and submarines, screened carriers, observed routes and bases, supported blockade planning, and attacked operational infrastructure with conventional weapons.</p>"},
      {id:"limits",title:"Limits",html:"<p>Front-line status did not mean simultaneous deployment. Reactor work, battery and machinery maintenance, weapons, intelligence, communications, and trained crews governed availability.</p>"}
    ],
    related:[{href:"american-nuclear-attack-submarines.html",kicker:"SSN branch",label:"American Nuclear Attack Submarines"},{href:"american-guided-missile-submarines.html",kicker:"SSGN branch",label:"American Guided-Missile Submarines"},{href:"american-conventional-submarines.html",kicker:"SSK branch",label:"American Conventional Submarines"},{href:"american-destroyer-frigate-force.html",kicker:"Surface ASW",label:"American Destroyers and Frigates"}],
    facts:[["Submarines afloat, 1947","86"],["Operational, 1947","62"],["1985 branches","SSN · SSGN · conventional patrol"],["Exact 1985 totals","Open pending reconstruction"],["Nuclear weapons","None"]]
  }),

  "american-nuclear-attack-submarines": americanNavalArticle({
    title:"American nuclear attack submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American nuclear attack submarines formed a capable reconnaissance-and-attack elite for scouting, fleet support, submarine hunting, and independent raiding. Exact class names and 1985 strength remain open.",
    canon:"The bounded nuclear reconnaissance-and-attack branch and its principal roles are established. The former Sturgeon and Los Angeles class allocation, twenty-boat total, build and reserve counts, dates, and displacements are withdrawn; replacement classes, totals, specifications, and histories remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-q8m4v writer=g kind=revision created=2026-08-15T13:34:00-06:00 --><p>The former eight-Sturgeon/twelve-Los Angeles accounting is not active canon. The current reference leaves exact postwar class names and totals open and bounds the nuclear branch as a capable elite rather than the former twenty-boat front line.</p><!-- altwwii-writer-block:end -->"},
      {id:"missions",title:"Missions",html:"<p>The branch scouted, supported fleet operations, hunted ships and submarines, and conducted independent raids. Nuclear propulsion gave endurance and sustained submerged movement, not unlimited tactical freedom.</p>"},
      {id:"open",title:"Open details",html:"<p>Class names, totals, dates, reserve categories, displacement, reactors, weapons, sensors, bases, readiness, patrols, and individual histories remain open.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-guided-missile-submarines.html",kicker:"Strike complement",label:"American Guided-Missile Submarines"},{href:"american-carrier-force.html",kicker:"Screened formation",label:"American Carrier Force"},{href:"iceland-crisis.html",kicker:"Atlantic confrontation",label:"Iceland Crisis"}],
    facts:[["Branch","Nuclear reconnaissance and attack"],["Scale","Capable elite"],["Roles","Scout · fleet support · attack · raiding"],["Former Sturgeon/Los Angeles ledger","Withdrawn"],["Exact 1985 total","Open"]]
  }),

  "american-guided-missile-submarines": americanNavalArticle({
    title:"American guided-missile submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"The United States maintained a very small experimental guided-missile-submarine branch for concealed conventional strike. Exact class names, launch arrangements, and 1985 strength remain open.",
    canon:"The very small experimental guided-missile branch and conventional armament are established. The former Triton and Longbow allocations, eight-boat total, dates, displacements, and submerged-VLS assignment are withdrawn; replacement classes, totals, specifications, and histories remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-r3v7n writer=g kind=revision created=2026-08-15T13:34:00-06:00 --><p>The former four-Triton/four-Longbow accounting is not active canon. The current reference bounds the branch as very small and experimental while leaving exact postwar class names and totals open.</p><!-- altwwii-writer-block:end -->"},
      {id:"weapons",title:"Conventional weapons",html:"<p>The branch supplied concealed conventional strike rather than a large nuclear-deterrent institution.</p>"},
      {id:"open",title:"Open details",html:"<p>Class names, totals, propulsion, launch arrangements, dates, displacement, weapons, sensors, bases, readiness, patrols, and individual histories remain open.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Attack complement",label:"American Nuclear Attack Submarines"},{href:"american-postwar-battleships.html",kicker:"Surface missile complement",label:"American Battleship Force"},{href:"american-balanced-fleet.html",kicker:"Doctrine",label:"American Balanced Fleet"}],
    facts:[["Branch","Guided-missile submarines"],["Scale","Very small"],["Character","Experimental"],["Warheads","Conventional"],["Former Triton/Longbow ledger","Withdrawn"],["Exact 1985 total","Open"]]
  }),

  "american-conventional-submarines": americanNavalArticle({
    title:"American postwar conventional submarines",
    category:"Submarine development",
    landscape:americanLineageLandscape,
    lead:"American conventional submarines formed the coastal and training branch of the postwar service. Exact class names, specifications, and 1985 strength remain open after withdrawal of the former Tang/Barbel ledger.",
    canon:"The conventional coastal and training branch is established. The former Tang/Barbel family, twenty-boat total, dates, displacement, hull-number register, and exact 1985 allocation are withdrawn; replacement classes, totals, specifications, and histories remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-s6k2p writer=g kind=revision created=2026-08-15T13:34:00-06:00 --><p>The former Tang/Barbel identity, twenty-boat total, 1951–65 band, 2,700-tonne displacement, and SSK hull register are not active canon. Exact postwar class names and totals remain open.</p><!-- altwwii-writer-block:end -->"},
      {id:"missions",title:"Established role",html:"<p>Conventional submarines supplied coastal duty and training alongside the nuclear elite.</p>"},
      {id:"open",title:"Open details",html:"<p>Class names, totals, dates, propulsion, specifications, regional distribution, modernization, readiness, and individual histories remain open.</p>"}
    ],
    related:[{href:"us-navy-submarine-force.html",kicker:"Parent arm",label:"United States Submarine Force"},{href:"american-nuclear-attack-submarines.html",kicker:"Nuclear complement",label:"American Nuclear Attack Submarines"},{href:"american-hemisphere.html",kicker:"Operating region",label:"American Hemisphere"},{href:"cuba.html",kicker:"Caribbean contingency",label:"Cuba"}],
    facts:[["Branch","Conventional submarines"],["Established roles","Coastal duty · training"],["Former Tang/Barbel ledger","Withdrawn"],["Exact class names","Open"],["Exact 1985 total","Open"]]
  }),

  "american-amphibious-force": americanNavalArticle({
    title:"United States postwar amphibious force",
    category:"Amphibious warfare",
    landscape:americanFleetLandscape,
    lead:"American amphibious development remained important after the Philippine War and later hemispheric interventions. The force retained helicopter-assault, landing-platform-dock, and fast tank-landing functions, but its alternate class registry and exact 1985 strength remain open.",
    canon:"Post-Philippine-War amphibious development, its importance to hemispheric intervention, and the three amphibious functions are established. The former Iwo Jima, Austin, and Newport class allocation, thirty-two-ship total, counts, dates, specifications, and exact 1985 status are withdrawn; the alternate class registry remains open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-y3c7k writer=g kind=revision created=2026-08-15T13:41:00-06:00 --><p>The former seven Iwo Jima, twelve Austin, and thirteen Newport allocation is not active canon. Those historical production totals were automatically inherited by an earlier reconstruction; the controlling reference requires an alternate class registry.</p><!-- altwwii-writer-block:end -->"},
      {id:"functions",title:"Established functions",html:"<p>Helicopter-assault ships supplied vertical movement and aviation support. Landing-platform docks connected landing craft, troops, vehicles, and stores with undeveloped shores. Fast tank-landing ships delivered vehicles and heavy equipment directly.</p>"},
      {id:"missions",title:"Missions",html:"<p>The force supported intervention, evacuation, reinforcement, disaster response, port seizure, and blockade enforcement. It required air cover, mine clearance, ASW escorts, logistics, intelligence, and a defined political objective.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All three functions remained in service. Exact class names, hull totals, readiness, embarked units, maintenance state, and regional distribution require reconstruction.</p>"}
    ],
    related:[{href:"american-assault-carriers.html",kicker:"Aviation layer",label:"American Assault Carriers"},{href:"american-fleet-support-force.html",kicker:"Sustainment",label:"American Fleet Support Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort screen",label:"American Destroyers and Frigates"},{href:"honduran-security-crisis.html",kicker:"Political use",label:"Honduran Security Crisis"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["Historical impetus","Philippine War and hemispheric interventions"],["Established functions","Helicopter assault · landing-platform dock · fast tank landing"],["Former Iwo Jima/Austin/Newport ledger","Withdrawn"],["Exact class registry","Open"],["Exact 1985 total","Open"]]
  }),

  "american-fleet-support-force": americanNavalArticle({
    title:"United States fleet support force",
    category:"Naval logistics",
    landscape:americanFleetLandscape,
    lead:"The United States fleet-support system joined mobile replenishment and repair with mine warfare and protected infrastructure. These functions sustained the balanced fleet, but exact 1985 auxiliary and mine-warfare totals and their postwar class registry remain open.",
    canon:"Mobile replenishment and repair, mine-warfare support, protected bases and approaches, and their relationship to carrier and amphibious operations are established. The former forty-two-auxiliary, twenty-four-Avenger, and twenty-four-Pegasus ledger and its specifications are not binding canon; exact American auxiliary and related support totals remain open.",
    sections:[
      {id:"registry",title:"Registry correction",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-u2c6h writer=g kind=revision created=2026-08-15T13:45:00-06:00 --><p>The former forty-two major auxiliaries, twenty-four Avenger mine-warfare ships, and twenty-four Pegasus combatants were inherited from the withdrawn numerical fleet worksheet. The controlling reference leaves exact American auxiliary totals open and does not fix those postwar class allocations.</p><!-- altwwii-writer-block:end -->"},
      {id:"auxiliaries",title:"Major auxiliaries",html:"<p>Mobile oilers, stores ships, ammunition ships, repair ships, tenders, transports, and medical support sustained fleet consumption and maintenance. Their class sequence, subtype division, and totals remain open.</p>"},
      {id:"mine",title:"Mine warfare",html:"<p>Mine-warfare vessels protected ports, canal approaches, amphibious routes, anchorages, and access lanes. Their postwar classes and totals remain open.</p>"},
      {id:"carrier",title:"Carrier and submarine support",html:"<p>Nuclear propulsion reduced carrier and submarine demand for propulsion fuel but did not eliminate aviation fuel, weapons, food, spare parts, crew support, or repair. Conventional escorts and amphibious ships remained directly dependent on replenishment fuel.</p>"},
      {id:"hemisphere",title:"Hemispheric infrastructure",html:"<p>Home ports, the Canal Zone, Caribbean facilities, Pacific bases, merchant charters, and repair yards formed the fixed complement to the mobile support force. Exact base and command arrangements remain outside the locked register.</p>"},
      {id:"vulnerability",title:"Vulnerability",html:"<p>Auxiliaries, minesweepers, and small combatants were not secondary in consequence. Loss of fuel, stores, repair, or cleared access could immobilize a larger formation whose capital ships remained intact.</p>"}
    ],
    related:[{href:"american-carrier-force.html",kicker:"Supported force",label:"American Carrier Force"},{href:"american-amphibious-force.html",kicker:"Supported force",label:"American Amphibious Force"},{href:"american-balanced-fleet.html",kicker:"Fleet doctrine",label:"American Balanced Fleet"},{href:"panama.html",kicker:"Canal infrastructure",label:"Panama"},{href:"us-navy-postwar.html",kicker:"Parent service",label:"Postwar United States Navy"}],
    facts:[["Established functions","Replenishment · repair · mine warfare · protected access"],["Former auxiliary/Avenger/Pegasus ledger","Withdrawn"],["Exact auxiliary total, 1985","Open"],["Exact mine-warfare total, 1985","Open"],["Postwar support class registry","Open"]]
  })
});
