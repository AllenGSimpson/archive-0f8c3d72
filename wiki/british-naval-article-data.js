window.deepArticles = window.deepArticles || {};

const britishNavalSources = [
  {href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — controlling British class, hull, and force register"},
  {href:"../navalAssetRegistry%20-%20AltWWII.csv",label:"Naval Asset Registry — individual Royal Navy and Royal Fleet Auxiliary records"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Siege Commonwealth strategy and naval position"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — British reconstruction, Kuwait, and Falklands milestones"},
  {href:"../transcript.md",label:"Master Transcript — Royal Navy, Cape-route, and Commonwealth strategy"}
];

const britishNavalArticle = config => ({
  category:"Naval history",
  eyebrow:"Royal Navy · Commonwealth maritime system · 1947–1985",
  infoboxKicker:"British naval system",
  ...config,
  sources:[...britishNavalSources,...(config.additionalSources || [])],
  categories:config.categories || ["British Commonwealth","Royal Navy","Naval history","Military technology"]
});

const britishMaritimeLandscape = {
  src:"assets/diagrams/british-maritime-system.svg",
  alt:"Diagram showing the Royal Navy's carrier, anti-submarine, base, amphibious, and auxiliary systems organized around the Atlantic–Cape–Indian Ocean route",
  caption:"The Royal Navy defended a route system: carrier air cover, anti-submarine escorts, bases, lift, and replenishment were parts of the same maritime infrastructure"
};

const britishLineageLandscape = {
  src:"assets/diagrams/royal-navy-postwar-lineages.svg",
  alt:"Timeline of British battleship, carrier, cruiser, destroyer, frigate, conventional-submarine, nuclear-submarine, and amphibious lineages between 1944 and 1985",
  caption:"Postwar construction replaced the vast 1947 emergency fleet with carrier groups, specialized anti-submarine escorts, nuclear submarines, and long-range support ships"
};

const britishFleet1985 = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Category</th><th>Front-line strength</th></tr></thead><tbody><tr><td>Large armored combatants</td><td>2</td></tr><tr><td>Fleet carriers</td><td>4</td></tr><tr><td>Light carriers</td><td>3</td></tr><tr><td>Missile and command cruisers</td><td>7</td></tr><tr><td>Destroyers</td><td>28</td></tr><tr><td>Frigates and ocean escorts</td><td>48</td></tr><tr><td>Corvettes and fast missile combatants</td><td>20</td></tr><tr><td>Nuclear attack submarines</td><td>16</td></tr><tr><td>Nuclear guided-missile submarines</td><td>4</td></tr><tr><td>Conventional submarines</td><td>18</td></tr><tr><td>Major amphibious ships</td><td>18</td></tr><tr><td>Mine-warfare ships</td><td>28</td></tr><tr><td>Major replenishment and repair ships</td><td>36</td></tr></tbody></table></div>";

const britishEscortTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>1985 active</th><th>Principal role</th></tr></thead><tbody><tr><td>Battle</td><td>24</td><td>1944–1950</td><td>0</td><td>Radar-directed gun defense</td></tr><tr><td>Daring</td><td>16</td><td>1949–1957</td><td>8</td><td>Large gun destroyer rebuilt with missiles</td></tr><tr><td>Bristol</td><td>4</td><td>1963–1970</td><td>4</td><td>Heavy fleet air defense</td></tr><tr><td>Sheffield</td><td>16</td><td>1974–1985</td><td>16</td><td>Standard missile destroyer</td></tr><tr><td>Whitby</td><td>16</td><td>1954–1959</td><td>0</td><td>First-generation quiet ASW escort</td></tr><tr><td>Rothesay</td><td>20</td><td>1958–1965</td><td>10</td><td>Helicopter ASW and variable-depth sonar</td></tr><tr><td>Leander</td><td>26</td><td>1962–1973</td><td>20</td><td>General escort with strong ASW specialization</td></tr><tr><td>Broadsword</td><td>18</td><td>1975–1985</td><td>18</td><td>Towed-array hunter and point-defense escort</td></tr></tbody></table></div>";

const britishSubmarineTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Type</th><th>Built</th><th>Introduction</th><th>Submerged displacement</th><th>1985 active</th></tr></thead><tbody><tr><td>Oberon</td><td>SSK</td><td>24 Commonwealth-wide</td><td>1959–1972</td><td>2,450 t</td><td>18 British or pooled</td></tr><tr><td>Valiant</td><td>SSN</td><td>6</td><td>1963–1970</td><td>4,900 t</td><td>6</td></tr><tr><td>Churchill</td><td>SSN</td><td>6</td><td>1970–1977</td><td>5,000 t</td><td>6</td></tr><tr><td>Trafalgar</td><td>SSN</td><td>4</td><td>1981–1985</td><td>5,300 t</td><td>4</td></tr><tr><td>Resolute</td><td>SSGN</td><td>4</td><td>1975–1982</td><td>7,800 t</td><td>4</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "royal-navy-postwar": britishNavalArticle({
    title:"Royal Navy after the Second World War",
    category:"Military history",
    eyebrow:"British fleet · defeat, reconstruction, and the Siege Commonwealth",
    landscape:britishMaritimeLandscape,
    lead:"After Britain's negotiated defeat in 1947, the Royal Navy remained a great fleet and became the armed maritime infrastructure of the Siege Commonwealth. Its central tasks were keeping the Atlantic–Cape–Indian Ocean route open, hunting German submarines, covering convoys and amphibious forces with carrier aircraft, sustaining dispersed bases, and preserving enough heavy surface power that Britain could not be treated as a disarmed island.",
    canon:"The 1947 inheritance, strategic priorities, naming system, registered class lineages, 1985 balance, Commonwealth pooling, Cape-route role, Kuwait and Falklands employment, and German submarine threat are established. Fleet command organization, base hierarchy, annual budgets, readiness rates, detailed weapons fits, deployments outside registered operations, and most individual service histories remain open.",
    sections:[
      {id:"inheritance",title:"Armistice inheritance",html:"<p>Britain ended 1947 with eleven capital ships, twenty-four fleet or light carriers, forty-three cruisers, 168 destroyers, 260 major escorts, and seventy-four submarines afloat. Eight capital ships, fourteen carriers, twenty-nine cruisers, 112 destroyers, 180 escorts, and forty-eight submarines were operational.</p><p>The inventory was large because Britain had fought a long maritime war and continued building replacements. It also contained damaged, exhausted, second-line, and rapidly obsolescent ships.</p>"},
      {id:"strategy",title:"Strategic priorities",html:"<p>Sea-lane survival, anti-submarine warfare, expeditionary logistics, carrier air cover, the defense of Canada and Atlantic possessions, and visible heavy surface power governed postwar planning. The service expected German submarines to be the principal threat to every other mission.</p><p>The navy therefore treated escorts, patrol aircraft, helicopters, bases, repair, merchant shipping, and intelligence as combat systems rather than rear services.</p>"},
      {id:"route",title:"Atlantic–Cape–Indian Ocean route",html:"<p>The loss of Malta, Suez, Singapore, and Gibraltar removed the old imperial chain. British planning organized movement through the home islands, Atlantic ports, West Africa, the Cape of Good Hope, the Indian Ocean, the Gulf, India, and Australasia.</p><p>The route gave Canada, South Africa, Australia, New Zealand, African ports, Gulf bases, and Indian Ocean stations direct operational importance.</p>"},
      {id:"reconstruction",title:"Postwar reconstruction",html:"<p>The emergency fleet contracted while dockyards preserved carrier, radar, sonar, nuclear-propulsion, escort, and amphibious skills. New construction concentrated on four fleet carriers, three light carriers, specialized missile destroyers, forty-eight ASW frigates, sixteen nuclear attack submarines, four guided-missile submarines, and a large auxiliary fleet.</p>"},
      {id:"operations",title:"Return to operations",html:"<p>Operation Covenant in 1974 demonstrated that Britain could assemble naval, air, marine, and logistical forces in the Gulf. The Falklands/Malvinas War placed carrier protection, convoy survival, mines, submarine hunting, amphibious lift, and repair under sustained pressure much farther from home.</p>"},
      {id:"1985",title:"Fleet in 1985",html:britishFleet1985+"<p>The balance is a front-line register for 1 January 1985. It does not state that every ship was deployed, worked up, or simultaneously available.</p>"},
      {id:"limits",title:"Limits",html:"<p>Britain remained behind the United States and Japan in overall naval scale. Its strength depended on Dominion cooperation, protected bases, merchant capacity, overseas repair, trained reserve personnel, and reliable replenishment.</p><p>German submarine superiority remained the private fear beneath public confidence in the fleet.</p>"}
    ],
    related:[{href:"siege-commonwealth-naval-system.html",kicker:"Strategic network",label:"Siege Commonwealth Naval System"},{href:"british-fleet-carriers.html",kicker:"Air power",label:"British Fleet-Carrier Force"},{href:"british-frigate-force.html",kicker:"ASW screen",label:"British Frigate Force"},{href:"royal-navy-submarine-force.html",kicker:"Undersea arm",label:"Royal Navy Submarine Force"},{href:"commonwealth.html",kicker:"Power system",label:"British Commonwealth"}],
    facts:[["Service","Royal Navy"],["Strategic route","Atlantic–Cape–Indian Ocean"],["1947 ships afloat","580 major combatants and submarines"],["1985 fleet carriers","4"],["1985 light carriers","3"],["1985 destroyers and frigates","76"],["1985 submarines","38"],["Reference date","1 January 1985"]]
  }),

  "siege-commonwealth-naval-system": britishNavalArticle({
    title:"Siege Commonwealth naval system",
    category:"Military organization",
    landscape:britishMaritimeLandscape,
    lead:"The Siege Commonwealth naval system was the network of Royal Navy formations, Dominion forces, bases, dockyards, merchant ships, patrol aviation, communications, and auxiliaries that kept Britain connected to Canada, Africa, the Gulf, the Indian Ocean, Australia, and New Zealand after the loss of the Mediterranean route.",
    canon:"The Atlantic–Cape route, distributed Commonwealth roles, pooled Oberon program, carrier and escort priorities, thirty-six-ship auxiliary balance, strategic dependence on bases and merchant shipping, and 1985 South Atlantic concentration are established. A unified Commonwealth navy, exact command boundaries, permanent national force contributions, basing agreements, and peacetime deployment cycles are not established.",
    sections:[
      {id:"route",title:"Route system",html:"<p>The primary line ran from British and Canadian Atlantic ports through West African stations and the Cape, then east to the Gulf, India, and Australasia. It was longer than Suez and required more tankers, stores ships, repair capacity, weather support, and convoy planning.</p>"},
      {id:"participants",title:"Commonwealth participants",html:"<p>Britain supplied the principal fleet headquarters, high-end naval construction, carrier aviation, nuclear submarines, and much of the auxiliary system. Canada anchored the North Atlantic and Arctic approaches. Australia was the southern arsenal and regional naval power. New Zealand specialized in anti-submarine warfare, food, repair, and maritime support.</p><p>South African and African ports occupied the route's central hinge. These roles did not abolish national governments or create one legally unified navy.</p>"},
      {id:"bases",title:"Bases and dockyards",html:"<p>Dispersed ports supplied fuel, ammunition, aviation support, sonar maintenance, medical care, and repair. The system reduced dependence on any single passage but made local politics and host-state cooperation operational concerns.</p>"},
      {id:"pooling",title:"Common procurement and pooling",html:"<p>Twenty-four Oberon-class conventional submarines were built Commonwealth-wide, with eighteen British or pooled boats counted in the 1985 balance. Escort standards, communications, replenishment procedures, training, and stores allowed formations assembled from different territories to work together.</p>"},
      {id:"falklands",title:"South Atlantic concentration",html:"<p>On 1 January 1985 the principal South Atlantic force included two fleet carriers, one light carrier, Lion, and two missile cruisers. Standard simultaneous escort strength was eleven destroyers, eighteen frigates, six SSNs, four SSKs, and seven mine-warfare ships.</p><p>The amphibious and support pool included landing-platform docks, helicopter assault ships, landing ships, troop and vehicle transports, oilers, stores ships, repair ships, casualty ships, and chartered merchants.</p>"},
      {id:"constraints",title:"Political and material constraints",html:"<p>Dominion cooperation was negotiated rather than automatic. Long routes consumed hull time and fuel. British planning had to preserve local defense while concentrating a fleet for Kuwait or the Falklands.</p>"}
    ],
    related:[{href:"royal-navy-postwar.html",kicker:"Principal service",label:"Postwar Royal Navy"},{href:"royal-fleet-auxiliary-postwar.html",kicker:"Mobile support",label:"Royal Fleet Auxiliary"},{href:"british-amphibious-forces.html",kicker:"Expeditionary lift",label:"British Amphibious Forces"},{href:"commonwealth-dominions.html",kicker:"Constitutional partners",label:"Commonwealth Dominions"},{href:"commonwealth.html",kicker:"Political system",label:"British Commonwealth"}],
    facts:[["Form","Network of national and imperial forces"],["Principal route","Atlantic–Cape–Indian Ocean"],["Core service","Royal Navy"],["Pooled submarine class","Oberon"],["Major auxiliaries, 1985","36"],["Unified Commonwealth navy","No"]]
  }),

  "british-armistice-fleet": britishNavalArticle({
    title:"British armistice fleet of 1947",
    category:"Naval history",
    eyebrow:"Royal Navy · surviving wartime inventory · 31 December 1947",
    landscape:britishLineageLandscape,
    lead:"The British armistice fleet was the enormous but uneven Royal Navy inventory remaining when the Lisbon settlement ended the war in 1947. It preserved Britain as an armed maritime power while forcing an immediate distinction between ships that were afloat, operational, repairable, useful for training, or ready for disposal.",
    canon:"The aggregate afloat and operational totals, eleven named capital ships, Hood's survival and 1950 retirement, Prince of Wales and Repulse losses, wartime destroyer and submarine losses, replacement scale, and registry reconstruction rules are established. Survival and service histories for most individual wartime escorts, cruisers, carriers, and submarines are working allocations in the asset registry.",
    sections:[
      {id:"balance",title:"Balance on 31 December 1947",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Category</th><th>Afloat</th><th>Operational</th></tr></thead><tbody><tr><td>Capital ships</td><td>11</td><td>8</td></tr><tr><td>Fleet and light carriers</td><td>24</td><td>14</td></tr><tr><td>Cruisers</td><td>43</td><td>29</td></tr><tr><td>Destroyers</td><td>168</td><td>112</td></tr><tr><td>Frigates, corvettes, and major escorts</td><td>260</td><td>180</td></tr><tr><td>Submarines</td><td>74</td><td>48</td></tr></tbody></table></div>"},
      {id:"capital",title:"Capital ships",html:"<p>The eleven ships were Hood, Renown, Nelson, Rodney, Queen Elizabeth, Valiant, King George V, Duke of York, Anson, Howe, and Vanguard. Hood survived because the Denmark Strait action did not occur, although structural exhaustion forced retirement in 1950.</p><p>Prince of Wales and Repulse remained Far Eastern losses.</p>"},
      {id:"attrition",title:"Wartime attrition",html:"<p>Britain lost 175 destroyers and ninety-five submarines during the extended war. Completion and American or Commonwealth transfer programs left 168 destroyers and 260 major escorts afloat at the settlement.</p>"},
      {id:"condition",title:"Condition and reduction",html:"<p>Afloat did not mean ready for combat. Damage, machinery wear, incomplete training, repair queues, obsolete sensors, and crew shortages separated the physical inventory from the operational fleet.</p><p>Reduction supplied reserve ships, exports, test platforms, training hulks, machinery, and scrap while new classes entered service.</p>"},
      {id:"registry",title:"Registry reconstruction",html:"<p>The aggregate totals are canon. Individual survival after the divergence is reconstructed by class allocation. Historical names and pennants are retained where possible; alternate completions extend period naming families.</p>"},
      {id:"legacy",title:"Postwar legacy",html:"<p>The armistice fleet preserved dockyards, naval aviation, escort experience, and trained personnel. Its replacement created the specialized carrier, missile, ASW, nuclear-submarine, and auxiliary fleet of 1985.</p>"}
    ],
    related:[{href:"royal-navy-postwar.html",kicker:"Successor fleet",label:"Postwar Royal Navy"},{href:"lion-class-missile-battleship.html",kicker:"New capital generation",label:"Lion Class"},{href:"british-fleet-carriers.html",kicker:"Carrier reconstruction",label:"British Fleet-Carrier Force"},{href:"lisbon-conference.html",kicker:"Political settlement",label:"Lisbon Conference"}],
    facts:[["Reference date","31 December 1947"],["Capital ships afloat","11"],["Carriers afloat","24"],["Destroyers afloat","168"],["Major escorts afloat","260"],["Submarines afloat","74"],["Operational major combatants and submarines","391"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/HMS_Hood",label:"Wikipedia — pre-divergence history of HMS Hood"}]
  }),

  "lion-class-missile-battleship": britishNavalArticle({
    title:"Lion-class missile battleship",
    category:"Warship class",
    landscape:britishLineageLandscape,
    lead:"The Lion class comprised HMS Lion and HMS Temeraire, two 58,000-tonne battleships completed after the extended war and rebuilt between 1968 and 1974 as armored missile, aviation, command, and bombardment flagships. They remained Britain's two active large armored combatants in 1985.",
    canon:"The two ships, 1949 and 1952 commissioning years, 58,000-tonne 1985 full load, six 406 mm guns after reconstruction, sixty-four SAM cells, sixteen conventional land-attack missiles, two helicopters, reconstruction period, after-turret removal, roles, active status, and submarine vulnerability are established. Dimensions, machinery, armor details, speed, crew, missile models, refit-yard chronology, deployments, and individual battle records remain open unless separately registered.",
    sections:[
      {id:"construction",title:"Construction",html:"<p>Lion commissioned in 1949 and Temeraire in 1952. The class carried forward the Royal Navy's prewar 406 mm fast-battleship design work into the extended-war industrial program.</p>"},
      {id:"reconstruction",title:"1968–1974 reconstruction",html:"<p>The after main turret was removed. The vacated volume supported missile magazines, aviation facilities, electronics, and command spaces. The surviving two turrets retained six 406 mm guns.</p>"},
      {id:"configuration",title:"1985 configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Full-load displacement</th><td>58,000 t</td></tr><tr><th>Main battery</th><td>Six 406 mm guns</td></tr><tr><th>Air defense</th><td>64 SAM cells</td></tr><tr><th>Land attack</th><td>16 conventional missiles</td></tr><tr><th>Aviation</th><td>Two helicopters</td></tr><tr><th>Status</th><td>Both active</td></tr></tbody></table></div>"},
      {id:"roles",title:"Roles",html:"<p>The class served as bombardment platform, air-defense and command flagship, and visible heavy escort for carrier and amphibious formations. The armored citadel allowed damage tolerance unavailable to lighter missile ships.</p>"},
      {id:"falklands",title:"Falklands deployment",html:"<p>Lion formed part of the principal South Atlantic force on 1 January 1985 alongside Commonwealth, New Zealand, Invincible, and missile cruisers. Coastal aircraft, submarines, mines, and long logistics made protection and repair central to her employment.</p>"},
      {id:"limits",title:"Limits",html:"<p>Large size and armor did not remove the submarine threat. The class required escorts, air cover, replenishment, and protected repair access. Britain built no further postwar battleship class.</p>"}
    ],
    related:[{href:"royal-navy-postwar.html",kicker:"Parent service",label:"Postwar Royal Navy"},{href:"british-fleet-carriers.html",kicker:"Task-group partners",label:"British Fleet Carriers"},{href:"british-cruiser-force.html",kicker:"Missile screen",label:"British Cruiser Force"},{href:"falklands-war.html",kicker:"1985 operation",label:"Falklands/Malvinas War"}],
    facts:[["Ships","HMS Lion; HMS Temeraire"],["Commissioned","1949; 1952"],["Full load","58,000 t"],["Main armament","Six 406 mm guns"],["Missile fit","64 SAM cells; 16 land-attack missiles"],["Aviation","Two helicopters"],["Status, 1985","Both active"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Lion-class_battleship",label:"Wikipedia — pre-divergence Lion-class design history"}]
  }),

  "british-fleet-carriers": britishNavalArticle({
    title:"British fleet-carrier force, 1958–1985",
    category:"Naval aviation",
    landscape:britishMaritimeLandscape,
    lead:"Britain's postwar fleet-carrier force comprised HMS Malta and HMS New Zealand of the Malta class and HMS Commonwealth and HMS Dominion of the Commonwealth class. The four ships supplied long-range air defense, strike, reconnaissance, and fleet command across the Atlantic–Cape system.",
    canon:"The two classes, four named ships, commissioning bands, displacements, standard air groups, active 1985 status, carrier-air-cover role, and South Atlantic employment of Commonwealth and New Zealand are established. Dimensions, machinery, aircraft types, air-wing organization, weapons, sensors, refit dates, deployments, and individual service histories remain open.",
    sections:[
      {id:"requirement",title:"Postwar requirement",html:"<p>The loss of the Mediterranean and Southeast Asian base chains increased the distance between British land airfields. Fleet carriers provided air defense, reconnaissance, strike, and command where shore coverage was absent or politically uncertain.</p>"},
      {id:"malta",title:"Malta class",html:"<p>Malta and New Zealand commissioned in 1958 and 1961. Each displaced 58,500 tonnes at full load and carried a standard air group of fifty-eight aircraft in 1985.</p><p>The class converted wartime large-carrier design work into Britain's first purpose-built postwar fleet-carrier generation.</p>"},
      {id:"commonwealth",title:"Commonwealth class",html:"<p>Commonwealth and Dominion commissioned in 1973 and 1977. Each displaced 64,000 tonnes at full load and carried seventy-two aircraft. The names emphasized the political system sustaining the ships.</p>"},
      {id:"operations",title:"Operations",html:"<p>Carrier groups protected convoys, amphibious forces, replenishment ships, and surface command formations. Their aircraft extended interception and reconnaissance beyond the radar horizon and supported submarine barriers.</p>"},
      {id:"south-atlantic",title:"South Atlantic force",html:"<p>Commonwealth and New Zealand formed the two fleet carriers in the principal South Atlantic formation on 1 January 1985. Invincible supplied a smaller VTOL and helicopter deck.</p>"},
      {id:"limits",title:"Limits",html:"<p>Four active ships allowed global reach but not continuous concentration in every theater. Refit, transit, crew training, air-wing availability, escort strength, and replenishment governed usable carrier power.</p>"}
    ],
    related:[{href:"invincible-class-light-carrier.html",kicker:"Light-carrier complement",label:"Invincible Class"},{href:"british-destroyer-force.html",kicker:"Air-defense screen",label:"British Destroyer Force"},{href:"british-frigate-force.html",kicker:"ASW screen",label:"British Frigate Force"},{href:"royal-fleet-auxiliary-postwar.html",kicker:"Sustainment",label:"Royal Fleet Auxiliary"},{href:"royal-navy-postwar.html",kicker:"Parent service",label:"Postwar Royal Navy"}],
    facts:[["Fleet carriers, 1985","4"],["Malta class","Malta; New Zealand"],["Malta standard air group","58 aircraft"],["Commonwealth class","Commonwealth; Dominion"],["Commonwealth standard air group","72 aircraft"],["Status","All active"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Malta-class_aircraft_carrier",label:"Wikipedia — pre-divergence Malta-class design history"}]
  }),

  "invincible-class-light-carrier": britishNavalArticle({
    title:"Invincible-class light aircraft carrier",
    category:"Warship class",
    landscape:britishMaritimeLandscape,
    lead:"The Invincible class was a three-ship British light-carrier class built for vertical-takeoff fighters, anti-submarine helicopters, fleet command, and expeditionary support. HMS Invincible, HMS Indomitable, and HMS Victorious entered service between 1978 and 1984.",
    canon:"The three names, 1978–1984 introduction band, 23,500-tonne full-load displacement, standard group of sixteen VTOL fighters and twelve helicopters, active status, and VTOL, ASW, and command roles are established. Dimensions, speed, machinery beyond registered gas-turbine propulsion, aircraft marks, sensors, weapons, crew, refits, and individual service histories remain open.",
    sections:[
      {id:"design",title:"Design",html:"<p>The class combined a full-length flight deck with gas-turbine propulsion and a mixed air group. At 23,500 tonnes full load, it was substantially smaller than the Malta and Commonwealth fleet carriers.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>HMS Invincible</td><td>1978</td><td>Active</td></tr><tr><td>HMS Indomitable</td><td>1981</td><td>Active</td></tr><tr><td>HMS Victorious</td><td>1984</td><td>Active</td></tr></tbody></table></div>"},
      {id:"airgroup",title:"Air group",html:"<p>The standard 1985 group comprised sixteen VTOL fighters and twelve helicopters. Fighter operations supplied local air defense and strike; helicopters performed ASW, assault support, surveillance, and utility work.</p>"},
      {id:"roles",title:"Roles",html:"<p>Invincible-class ships operated as light carriers, ASW command ships, and aviation centers for amphibious groups. They could reinforce fleet carriers or support a smaller formation independently.</p>"},
      {id:"falklands",title:"Falklands/Malvinas War",html:"<p>Invincible joined Commonwealth and New Zealand in the principal South Atlantic formation. The theater made the class's combination of fighter and helicopter capacity directly relevant to convoy defense and submarine hunting.</p>"}
    ],
    related:[{href:"british-fleet-carriers.html",kicker:"Fleet-carrier complement",label:"British Fleet Carriers"},{href:"british-amphibious-forces.html",kicker:"Expeditionary role",label:"British Amphibious Forces"},{href:"british-frigate-force.html",kicker:"ASW partners",label:"British Frigate Force"},{href:"falklands-war.html",kicker:"Operational theater",label:"Falklands/Malvinas War"}],
    facts:[["Ships","Invincible; Indomitable; Victorious"],["Introduction","1978–1984"],["Full load","23,500 t"],["Standard fighter group","16 VTOL fighters"],["Standard helicopter group","12 helicopters"],["Propulsion","Gas turbine"],["Status, 1985","All active"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Invincible-class_aircraft_carrier",label:"Wikipedia — historical Invincible-class design context"}]
  }),

  "british-cruiser-force": britishNavalArticle({
    title:"British postwar cruiser force",
    category:"Naval history",
    landscape:britishLineageLandscape,
    lead:"The British postwar cruiser force consisted in 1985 of two active Tiger-class command cruisers and five active County-class guided-missile cruisers. They provided fleet command, area air defense, anti-ship weapons, helicopters, and gunfire between the carrier and destroyer layers.",
    canon:"Tiger and County class totals, introduction bands, displacements, registered roles, active and reserve names, County name substitutions, and seven-ship 1985 balance are established. Machinery details beyond registered steam propulsion, dimensions, speeds, crews, missile models, cell counts, sensors, refit chronology, and individual deployments remain open.",
    sections:[
      {id:"tiger",title:"Tiger command cruisers",html:"<p>Three 13,800-tonne Tiger-class ships entered service from 1954 through 1958. Tiger and Blake remained active in 1985; Hawke was in mobilization reserve.</p><p>Automatic 152 mm guns, missiles, helicopters, and command facilities supported fleet headquarters and area defense.</p>"},
      {id:"county",title:"County guided-missile cruisers",html:"<p>Eight 13,200-tonne County ships entered service between 1962 and 1972. Dorset, Hampshire, Surrey, Middlesex, and Norfolk were active in 1985. Antrim, Fife, and Glamorgan had decommissioned.</p>"},
      {id:"names",title:"Names",html:"<p>Dorset, Surrey, and Middlesex replaced the historical postwar names Devonshire, Kent, and London because surviving prewar County cruisers still carried those names when the missile ships commissioned.</p>"},
      {id:"roles",title:"Roles",html:"<p>County cruisers supplied task-group air defense, command, anti-ship attack, and two ASW helicopters. Tiger ships retained automatic medium-caliber gunfire alongside aviation and missile capabilities.</p>"},
      {id:"1985",title:"Force in 1985",html:"<p>Seven cruisers were active: two Tiger and five County ships. The separate South Atlantic formation register identifies Devonshire and Kent as the two missile cruisers assigned there; their relationship to the class-level active-name list remains a registry precision issue.</p>"}
    ],
    related:[{href:"british-fleet-carriers.html",kicker:"Protected formations",label:"British Fleet Carriers"},{href:"british-destroyer-force.html",kicker:"Missile screen",label:"British Destroyer Force"},{href:"lion-class-missile-battleship.html",kicker:"Heavy flagship",label:"Lion Class"},{href:"royal-navy-postwar.html",kicker:"Parent service",label:"Postwar Royal Navy"}],
    facts:[["Active cruisers, 1985","7"],["Tiger class","3 built; 2 active"],["Tiger full load","13,800 t"],["County class","8 built; 5 active"],["County full load","13,200 t"],["Principal functions","Command, air defense, anti-ship attack, helicopters"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Tiger-class_cruiser",label:"Wikipedia — historical Tiger-class context"},{href:"https://en.wikipedia.org/wiki/County-class_destroyer",label:"Wikipedia — historical County-class design context"}]
  }),

  "british-destroyer-force": britishNavalArticle({
    title:"British postwar destroyer force",
    category:"Naval history",
    landscape:britishLineageLandscape,
    lead:"The British postwar destroyer force moved from wartime radar-directed gun ships through missile-rebuilt Darings to purpose-built Bristol and Sheffield fleet air-defense classes. Twenty-eight destroyers were active in 1985.",
    canon:"Battle, Daring, Bristol, and Sheffield class build totals, introduction bands, registered full-load displacements, roles, and active 1985 totals are established. Individual rosters are registered, but detailed weapons, sensors, refit blocks, readiness, deployments, and service histories remain open unless separately recorded.",
    sections:[
      {id:"lineage",title:"Class lineage",html:britishEscortTable},
      {id:"battle",title:"Battle class",html:"<p>Twenty-four Battle-class destroyers entered service between 1944 and 1950 as radar-directed gun-defense ships. None remained front-line in 1985.</p>"},
      {id:"daring",title:"Daring class",html:"<p>Sixteen 4,300-tonne Darings entered service from 1949 through 1957. Eight remained active after missile reconstruction, bridging the gun and missile fleets.</p>"},
      {id:"bristol",title:"Bristol class",html:"<p>Bristol, Bath, Winchester, and Portsmouth entered service between 1963 and 1970. At 7,600 tonnes full load, all four served as heavy fleet air-defense destroyers in 1985.</p>"},
      {id:"sheffield",title:"Sheffield class",html:"<p>Sixteen 4,900-tonne Sheffield-class ships entered service between 1974 and 1985. All were active and formed the standard missile-destroyer generation.</p>"},
      {id:"mission",title:"Mission",html:"<p>Destroyers defended carriers, cruisers, amphibious groups, and replenishment ships against aircraft and missiles. They carried useful ASW equipment, while the frigate force specialized more heavily in submarine hunting.</p>"}
    ],
    related:[{href:"british-frigate-force.html",kicker:"ASW complement",label:"British Frigate Force"},{href:"british-fleet-carriers.html",kicker:"Primary screened units",label:"British Fleet Carriers"},{href:"british-cruiser-force.html",kicker:"Area-defense command",label:"British Cruiser Force"},{href:"royal-navy-postwar.html",kicker:"Parent service",label:"Postwar Royal Navy"}],
    facts:[["Active destroyers, 1985","28"],["Daring","16 built; 8 active"],["Bristol","4 built; 4 active"],["Sheffield","16 built; 16 active"],["Primary specialization","Fleet air defense"]]
  }),

  "british-frigate-force": britishNavalArticle({
    title:"British postwar frigate and anti-submarine force",
    category:"Anti-submarine warfare",
    landscape:britishMaritimeLandscape,
    lead:"The British postwar frigate force was the specialized anti-submarine screen of the Siege Commonwealth. Forty-eight Rothesay-, Leander-, and Broadsword-class frigates were active in 1985, each carrying a serious ASW suite for convoy, carrier, route, and base defense.",
    canon:"Whitby, Rothesay, Leander, and Broadsword totals, dates, displacements, roles, 1985 active balance, helicopter, variable-depth-sonar, and towed-array progression, and force-wide ASW specialization are established. Detailed sonar models, weapons, helicopter types, machinery except registered propulsion, crews, formations, readiness, and individual histories remain open.",
    sections:[
      {id:"requirement",title:"Requirement",html:"<p>German attack and guided-missile submarines threatened merchant routes, carriers, amphibious ships, and overseas bases. Britain answered with quiet escorts, shipborne helicopters, variable-depth sonar, towed arrays, and pooled Commonwealth patrol coverage.</p>"},
      {id:"lineage",title:"Class lineage",html:britishEscortTable},
      {id:"whitby",title:"Whitby class",html:"<p>Sixteen 2,800-tonne Whitby-class ships entered service between 1954 and 1959. They established the first quiet postwar ASW generation and had left the front line by 1985.</p>"},
      {id:"rothesay",title:"Rothesay class",html:"<p>Twenty 3,000-tonne Rothesays entered service from 1958 through 1965. Ten remained active with helicopter ASW and variable-depth sonar.</p>"},
      {id:"leander",title:"Leander class",html:"<p>Twenty-six 3,600-tonne Leander frigates entered service between 1962 and 1973. Twenty remained active as general escorts with strong ASW specialization.</p>"},
      {id:"broadsword",title:"Broadsword class",html:"<p>Eighteen 4,400-tonne Broadswords entered service between 1975 and 1985. All were active as towed-array submarine hunters and point-defense escorts.</p>"},
      {id:"employment",title:"Employment",html:"<p>Frigates formed convoy screens, patrolled chokepoints, protected replenishment groups, and worked with helicopters, patrol aircraft, submarines, and fixed sensors. Eighteen normally served in the simultaneous South Atlantic escort formation in early 1985.</p>"}
    ],
    related:[{href:"royal-navy-submarine-force.html",kicker:"Undersea opponent and partner",label:"Royal Navy Submarine Force"},{href:"british-destroyer-force.html",kicker:"Air-defense complement",label:"British Destroyer Force"},{href:"siege-commonwealth-naval-system.html",kicker:"Route network",label:"Siege Commonwealth Naval System"},{href:"falklands-war.html",kicker:"Operational test",label:"Falklands/Malvinas War"}],
    facts:[["Active frigates, 1985","48"],["Rothesay","10 active"],["Leander","20 active"],["Broadsword","18 active"],["Primary specialization","Anti-submarine warfare"],["South Atlantic simultaneous strength","18 frigates"]]
  }),

  "royal-navy-submarine-force": britishNavalArticle({
    title:"Royal Navy submarine force, 1947–1985",
    category:"Submarine history",
    landscape:britishLineageLandscape,
    lead:"The Royal Navy submarine force developed from seventy-four surviving wartime boats into a mixed 1985 arm of eighteen conventional attack submarines, sixteen nuclear attack submarines, and four nuclear guided-missile submarines. Its missions included reconnaissance, submarine hunting, fleet screening, chokepoint ambush, and conventional attack on ships and operational infrastructure.",
    canon:"The 1947 afloat and operational totals, Oberon, Valiant, Churchill, Trafalgar, and Resolute lineages, 1985 balance, propulsion categories, registered displacements, conventional-warhead doctrine, and South Atlantic concentration are established. Submarine command organization, bases, detailed weapons and sensors, individual patrols, acoustic performance, readiness, and most operational histories remain open.",
    sections:[
      {id:"inheritance",title:"1947 inheritance",html:"<p>Seventy-four submarines were afloat at the armistice and forty-eight were operational. Britain had lost ninety-five boats during the war, leaving an experienced but heavily attrited service.</p>"},
      {id:"lineage",title:"Postwar classes",html:britishSubmarineTable},
      {id:"conventional",title:"Conventional attack boats",html:"<p>The Commonwealth-wide Oberon program supplied quiet diesel-electric boats for ocean and chokepoint work. Eighteen British or pooled Oberons counted in the 1985 front-line balance.</p>"},
      {id:"nuclear",title:"Nuclear attack boats",html:"<p>Six Valiant-, six Churchill-, and four Trafalgar-class boats supplied sixteen nuclear attack submarines. Their endurance and sustained submerged speed suited distant fleet screening and pursuit.</p>"},
      {id:"missile",title:"Guided-missile boats",html:"<p>Four Resolute-class SSGNs carried conventional cruise missiles for submarine bases, ports, airfields, radar, and missile sites. They did not form a nuclear deterrent.</p>"},
      {id:"falklands",title:"South Atlantic force",html:"<p>Standard simultaneous strength in early 1985 was six SSNs and four SSKs. The first-year theater pool comprised eight SSNs and six SSKs.</p>"},
      {id:"system",title:"Support system",html:"<p>Patrol aircraft, surface escorts, fixed sensors, signals intelligence, satellites, bases, tenders, and repair yards supplied detection and sustainment. Submarines remained dependent on the wider maritime network.</p>"}
    ],
    related:[{href:"british-nuclear-attack-submarines.html",kicker:"Nuclear attack branch",label:"British Nuclear Attack Submarines"},{href:"resolute-class-submarine.html",kicker:"Conventional missile branch",label:"Resolute Class"},{href:"british-frigate-force.html",kicker:"Surface ASW",label:"British Frigate Force"},{href:"royal-navy-postwar.html",kicker:"Parent service",label:"Postwar Royal Navy"}],
    facts:[["Submarines afloat, 1947","74"],["Operational submarines, 1947","48"],["SSKs, 1985","18"],["SSNs, 1985","16"],["SSGNs, 1985","4"],["Nuclear warheads","None"]]
  }),

  "oberon-class-commonwealth": britishNavalArticle({
    title:"Oberon-class Commonwealth submarine",
    category:"Submarine class",
    landscape:britishLineageLandscape,
    lead:"The Oberon class was the Commonwealth's principal postwar conventional attack submarine. Twenty-four boats entered service between 1959 and 1972; eighteen British or pooled boats remained in the 1985 front-line balance.",
    canon:"The twenty-four-boat Commonwealth-wide total, 1959–1972 introduction band, 2,450-tonne submerged displacement, diesel-electric propulsion, quiet chokepoint and ocean-attack role, eighteen-boat 1985 British or pooled balance, and registered individual names are established. Dimensions, speed, range, crew, weapons, sensors, builders, national allocations, modernization blocks, and service histories remain open unless separately registered.",
    sections:[
      {id:"program",title:"Commonwealth program",html:"<p>The class was procured across the Commonwealth rather than as a purely home-island fleet. Pooling allowed Britain and Dominion forces to sustain training, patrol, and regional commitments while retaining national ownership and command arrangements.</p>"},
      {id:"design",title:"Registered characteristics",html:"<p>Each boat displaced 2,450 tonnes submerged and used diesel-electric propulsion. The registered principal role was quiet chokepoint and ocean attack.</p>"},
      {id:"names",title:"Royal Navy names",html:"<p>The registry extends the O-name family from Oberon, Odin, Olympus, Orpheus, Osiris, Onslaught, and Otter through later names including Onyx, Ocelot, Orion, Orontes, Oceanus, Orca, and Odyssey.</p>"},
      {id:"1985",title:"Status in 1985",html:"<p>Six early boats had decommissioned. Eighteen British or pooled boats remained active. The balance did not specify that all eighteen were under British national command at the same moment.</p>"},
      {id:"missions",title:"Missions",html:"<p>Oberons conducted surveillance, chokepoint ambush, route defense, fleet training, and submarine hunting. Four SSKs normally operated with the simultaneous South Atlantic force in early 1985.</p>"}
    ],
    related:[{href:"royal-navy-submarine-force.html",kicker:"Parent arm",label:"Royal Navy Submarine Force"},{href:"british-nuclear-attack-submarines.html",kicker:"Nuclear complement",label:"British Nuclear Attack Submarines"},{href:"siege-commonwealth-naval-system.html",kicker:"Pooling system",label:"Siege Commonwealth Naval System"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Type","SSK"],["Built","24 Commonwealth-wide"],["Introduction","1959–1972"],["Submerged displacement","2,450 t"],["Propulsion","Diesel-electric"],["Active, 1985","18 British or pooled"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Oberon-class_submarine",label:"Wikipedia — historical Oberon-class design and service context"}]
  }),

  "british-nuclear-attack-submarines": britishNavalArticle({
    title:"British nuclear attack submarines",
    category:"Submarine development",
    landscape:britishLineageLandscape,
    lead:"British nuclear attack submarines comprised the Valiant, Churchill, and Trafalgar classes. Sixteen boats were active in 1985, giving the Royal Navy a long-endurance undersea screen for carrier groups, convoy routes, and distant Commonwealth operations.",
    canon:"The three classes, build totals, introduction bands, submerged displacements, individual registered names, nuclear propulsion, quiet attack role, and sixteen-boat 1985 active total are established. Reactor types, dimensions, speeds, crews, weapons, sensors, noise figures, patrol areas, refits, and individual operational histories remain open.",
    sections:[
      {id:"valiant",title:"Valiant class",html:"<p>Six 4,900-tonne Valiant-class boats entered service between 1963 and 1970: Valiant, Warspite, Dreadnought, Conqueror, Courageous, and Centurion. All remained active in 1985.</p>"},
      {id:"churchill",title:"Churchill class",html:"<p>Six 5,000-tonne Churchill-class boats entered service from 1970 through 1977: Winston Churchill, Duke of Wellington, Earl Mountbatten, Lord Nelson, Francis Drake, and Walter Raleigh. All remained active.</p>"},
      {id:"trafalgar",title:"Trafalgar class",html:"<p>Trafalgar, Turbulent, Tireless, and Torbay entered service between 1981 and 1985. Each displaced 5,300 tonnes submerged and represented the newest quiet nuclear-attack generation.</p>"},
      {id:"missions",title:"Missions",html:"<p>The boats hunted submarines and surface forces, screened carriers, observed bases and routes, and supported distant task groups. Nuclear propulsion supplied endurance and sustained submerged movement; it did not imply nuclear armament.</p>"},
      {id:"falklands",title:"South Atlantic employment",html:"<p>Six SSNs formed the standard simultaneous South Atlantic strength in early 1985, with eight boats available in the first-year theater pool. Their tasks included barrier patrol, intelligence, and protection against Argentine and covertly supported undersea operations.</p>"},
      {id:"limits",title:"Limits",html:"<p>Long patrol endurance did not remove requirements for trained crews, reactor support, torpedoes, intelligence, communications, and protected maintenance. The register does not establish that every active boat was immediately deployable.</p>"}
    ],
    related:[{href:"royal-navy-submarine-force.html",kicker:"Parent arm",label:"Royal Navy Submarine Force"},{href:"oberon-class-commonwealth.html",kicker:"Conventional complement",label:"Oberon Class"},{href:"resolute-class-submarine.html",kicker:"Missile branch",label:"Resolute Class"},{href:"british-frigate-force.html",kicker:"Surface ASW",label:"British Frigate Force"}],
    facts:[["Classes","Valiant; Churchill; Trafalgar"],["Valiant","6 active"],["Churchill","6 active"],["Trafalgar","4 active"],["Total active, 1985","16"],["Propulsion","Nuclear"],["Nuclear weapons","None"]]
  }),

  "resolute-class-submarine": britishNavalArticle({
    title:"Resolute-class guided-missile submarine",
    category:"Submarine class",
    landscape:britishLineageLandscape,
    lead:"The Resolute class was a four-ship British nuclear guided-missile-submarine class for conventional attack against submarine bases, ports, airfields, radar, missile sites, and other operational infrastructure. Resolute, Renown, Repulse, and Revenge entered service between 1975 and 1982.",
    canon:"The four ships and names, 1975–1982 introduction band, 7,800-tonne submerged displacement, nuclear propulsion, twenty conventionally armed cruise missiles per boat, target categories, active status, and non-nuclear doctrine are established. Dimensions, speed, crew, reactor, missile model and performance, torpedo fit, sensors, bases, patrols, and individual service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class gave Britain a concealed long-range conventional attack option beyond carrier aircraft and surface missiles. The first boat entered service in 1975.</p>"},
      {id:"ships",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>HMS Resolute</td><td>1975</td><td>Active</td></tr><tr><td>HMS Renown</td><td>1977</td><td>Active</td></tr><tr><td>HMS Repulse</td><td>1980</td><td>Active</td></tr><tr><td>HMS Revenge</td><td>1982</td><td>Active</td></tr></tbody></table></div>"},
      {id:"weapons",title:"Conventional missile armament",html:"<p>Each boat carried twenty conventionally armed cruise missiles. The intended target set included submarine bases, ports, airfields, radar, and missile sites.</p>"},
      {id:"doctrine",title:"Doctrine",html:"<p>The class was designated SSGN by propulsion and guided-missile mission. It did not carry a strategically important nuclear-warhead force and was not a ballistic-missile deterrent.</p>"},
      {id:"network",title:"Targeting and support",html:"<p>Long-range attack required external reconnaissance, signals intelligence, satellite or aircraft reporting, communications, mission planning, and current knowledge of fixed targets. Missile range alone did not create targeting information.</p>"}
    ],
    related:[{href:"royal-navy-submarine-force.html",kicker:"Parent arm",label:"Royal Navy Submarine Force"},{href:"british-nuclear-attack-submarines.html",kicker:"Attack complement",label:"British Nuclear Attack Submarines"},{href:"british-fleet-carriers.html",kicker:"Surface strike complement",label:"British Fleet Carriers"},{href:"royal-navy-postwar.html",kicker:"Service context",label:"Postwar Royal Navy"}],
    facts:[["Type","SSGN"],["Ships","Resolute; Renown; Repulse; Revenge"],["Introduction","1975–1982"],["Submerged displacement","7,800 t"],["Missile load","20 conventional cruise missiles"],["Status, 1985","All active"],["Nuclear warheads","None"]]
  }),

  "british-amphibious-forces": britishNavalArticle({
    title:"British postwar amphibious forces",
    category:"Amphibious warfare",
    landscape:britishMaritimeLandscape,
    lead:"British postwar amphibious forces combined Round Table logistic landing ships, Fearless-class landing-platform docks, Ocean-class helicopter assault ships, Commonwealth heavy landing ships, troop and vehicle transports, landing craft, marines, engineers, and chartered merchant shipping. Eighteen major amphibious ships were active in 1985.",
    canon:"The four registered major-ship classes, build and introduction totals, registered functions and displacements, eighteen-ship 1985 balance, South Atlantic support-pool composition, and dependence on escorts and auxiliaries are established. Troop capacities except where separately registered, landing-craft types, marine formations, weapons, air groups, detailed ship rosters beyond registry names, and operation-by-operation loads remain open.",
    sections:[
      {id:"round-table",title:"Round Table class",html:"<p>Twelve 8,500-tonne diesel logistic landing ships entered service between 1958 and 1967. Five remained active in 1985: Sir Lamorak, Sir Mordred, Sir Kay, Sir Bors, and Sir Agravaine.</p>"},
      {id:"fearless",title:"Fearless class",html:"<p>Fearless, Intrepid, Valorous, and Adventurous entered service between 1964 and 1971 as 16,000-tonne landing-platform docks. All four remained active.</p>"},
      {id:"ocean",title:"Ocean class",html:"<p>Ocean, Albion, and Bulwark entered service between 1972 and 1980. Each displaced 21,000 tonnes and served as a helicopter assault ship.</p>"},
      {id:"heavy",title:"Commonwealth heavy landing ships",html:"<p>Endurance, Protector, Pioneer, Pathfinder, Venture, and Quest entered service between 1976 and 1985. Each displaced 14,500 tonnes and carried vehicles, landing craft, and helicopters.</p>"},
      {id:"1985",title:"South Atlantic pool",html:"<p>The early-1985 theater pool included three landing-platform docks, two helicopter assault ships, six landing ships, eight troop or vehicle transports, and chartered merchants. Oilers, stores ships, repair ships, and casualty ships sustained the group.</p>"},
      {id:"conditions",title:"Conditions for employment",html:"<p>Amphibious ships required air cover, mine clearance, submarine screening, fire support, weather information, protected unloading areas, and follow-on merchant tonnage. The failed East Falkland landing attempt of 1984 made these dependencies politically decisive.</p>"}
    ],
    related:[{href:"royal-fleet-auxiliary-postwar.html",kicker:"Sustainment",label:"Royal Fleet Auxiliary"},{href:"invincible-class-light-carrier.html",kicker:"Aviation cover",label:"Invincible Class"},{href:"british-frigate-force.html",kicker:"ASW escort",label:"British Frigate Force"},{href:"falklands-war.html",kicker:"Operational test",label:"Falklands/Malvinas War"},{href:"kuwait-war.html",kicker:"Earlier campaign",label:"Kuwait War"}],
    facts:[["Major amphibious ships, 1985","18"],["Round Table","12 built; 5 active"],["Fearless","4 active"],["Ocean","3 active"],["Commonwealth heavy landing ship","6 active"],["Primary routes","Cape, Gulf, Indian Ocean, South Atlantic"]]
  }),

  "royal-fleet-auxiliary-postwar": britishNavalArticle({
    title:"Royal Fleet Auxiliary after 1947",
    category:"Naval logistics",
    landscape:britishMaritimeLandscape,
    lead:"The postwar Royal Fleet Auxiliary was the mobile logistical arm that allowed Royal Navy groups to operate across the Atlantic–Cape–Indian Ocean system. Thirty-six major oilers, stores ships, repair ships, aviation transports, and hospital or casualty ships were active in the 1985 register.",
    canon:"RFA prefix usage, thirty-six-ship 1985 major-auxiliary total, registered mixed fleet and names, principal vessel categories, 18,000-tonne registry reference value, South Atlantic oiler, stores, repair, and casualty-ship pool, and strategic role are established. Individual subtype allocation, exact capacities, machinery, crews, builders, detailed commissioning histories, routes, and deployments remain open unless separately registered.",
    sections:[
      {id:"status",title:"Status and naming",html:"<p>Royal Fleet Auxiliary vessels used the prefix RFA rather than HMS. They were part of the naval support system and carried personal names even where the asset registry also assigned administrative AUX numbers.</p>"},
      {id:"fleet",title:"1985 fleet",html:"<p>The register records thirty-six major mixed auxiliaries at a standard 18,000-tonne full-load reference. Names include Tidespring, Tidepool, Olna, Resource, Fort Austin, Fort Victoria, Blue Rover, Bayleaf, Diligence, Assurance, Endeavour, Provider, and Service.</p>"},
      {id:"functions",title:"Functions",html:"<p>Oilers delivered fuel. Stores ships moved ammunition, food, spares, and technical material. Repair ships extended the time a damaged or mechanically troubled formation could remain away from a home dockyard. Aviation transports and hospital or casualty ships supported carrier and amphibious operations.</p>"},
      {id:"route",title:"Route support",html:"<p>The Cape route imposed long transits between Britain, Atlantic Africa, southern Africa, the Indian Ocean, and the Gulf. Mobile support reduced dependence on commercial access through the Italian-controlled Suez system.</p>"},
      {id:"falklands",title:"South Atlantic pool",html:"<p>The amphibious and support pool in early 1985 included six oilers, seven stores ships, three repair ships, and three casualty ships, supplemented by chartered merchants.</p>"},
      {id:"limits",title:"Limits",html:"<p>Auxiliaries were high-value, comparatively vulnerable ships. Their loss reduced the endurance of carriers, escorts, submarines, and landing forces even when no front-line combatant was sunk.</p>"}
    ],
    related:[{href:"siege-commonwealth-naval-system.html",kicker:"Strategic network",label:"Siege Commonwealth Naval System"},{href:"british-amphibious-forces.html",kicker:"Supported force",label:"British Amphibious Forces"},{href:"british-fleet-carriers.html",kicker:"Supported force",label:"British Fleet Carriers"},{href:"commonwealth-standard-ship-programme.html",kicker:"Merchant reconstruction",label:"Commonwealth Standard Ship Programme"},{href:"royal-navy-postwar.html",kicker:"Parent fleet",label:"Postwar Royal Navy"}],
    facts:[["Prefix","RFA"],["Major auxiliaries, 1985","36"],["Registered reference full load","18,000 t"],["Types","Oilers, stores, repair, aviation, hospital ships"],["Primary route","Atlantic–Cape–Indian Ocean"],["South Atlantic support pool","19 major auxiliaries"]]
  })
});
