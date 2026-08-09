window.deepArticles = window.deepArticles || {};

const britishCruiserClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Principal role</th></tr></thead><tbody><tr><td><a href='tiger-class-command-cruiser.html'>Tiger</a></td><td>3</td><td>1954–1958</td><td>13,800 t</td><td>2</td><td>Fleet command, helicopters, area defense, automatic 152 mm guns</td></tr><tr><td><a href='county-class-guided-missile-cruiser.html'>County</a></td><td>8</td><td>1962–1972</td><td>13,200 t</td><td>5</td><td>Task-group air defense, command, anti-ship missiles, two ASW helicopters</td></tr></tbody></table></div>";

const britishDestroyerClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Purpose</th></tr></thead><tbody><tr><td><a href='battle-class-destroyer.html'>Battle</a></td><td>24</td><td>1944–1950</td><td>3,500 t</td><td>0</td><td>Radar-directed gun defense</td></tr><tr><td><a href='daring-class-destroyer.html'>Daring</a></td><td>16</td><td>1949–1957</td><td>4,300 t</td><td>8</td><td>Large gun destroyer rebuilt with missiles</td></tr><tr><td><a href='bristol-class-destroyer.html'>Bristol</a></td><td>4</td><td>1963–1970</td><td>7,600 t</td><td>4</td><td>Heavy fleet air defense</td></tr><tr><td><a href='sheffield-class-destroyer.html'>Sheffield</a></td><td>16</td><td>1974–1985</td><td>4,900 t</td><td>16</td><td>Standard missile destroyer</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "british-cruiser-force": britishNavalArticle({
    title:"British postwar cruiser force",
    category:"Naval history",
    landscape:britishLineageLandscape,
    lead:"The British postwar cruiser force consisted of three Tiger-class command cruisers and eight County-class guided-missile cruisers. Two Tigers and five Counties remained active in 1985, supplying fleet command, air defense, anti-ship weapons, helicopters, and automatic medium-caliber gunfire.",
    canon:"Tiger and County build totals, introduction bands, full-load displacements, registered roles, active and reserve names, County name substitutions, and seven-ship 1985 balance are established. Machinery details beyond steam propulsion, dimensions, speeds, crews, missile models, cell counts, sensors, refit chronology, and most deployments remain open. The class register and separate South Atlantic formation register retain an unresolved County-name precision issue.",
    sections:[
      {id:"development",title:"Development",html:"<p>The cruiser force moved from large automatic-gun ships completed as command cruisers to purpose-built guided-missile ships. Both generations served the carrier, route-defense, and expeditionary system of the Siege Commonwealth.</p>"},
      {id:"classes",title:"Classes",html:britishCruiserClassTable},
      {id:"tiger",title:"Tiger class",html:"<p><a href='tiger-class-command-cruiser.html'>Tiger, Blake, and Hawke</a> entered service between 1954 and 1958. Tiger and Blake remained active in 1985; Hawke was in mobilization reserve.</p>"},
      {id:"county",title:"County class",html:"<p>Eight <a href='county-class-guided-missile-cruiser.html'>County-class guided-missile cruisers</a> entered service from 1962 through 1972. Dorset, Hampshire, Surrey, Middlesex, and Norfolk were active in 1985. Antrim, Fife, and Glamorgan had decommissioned.</p>"},
      {id:"names",title:"County names",html:"<p>Dorset, Surrey, and Middlesex replaced the historical postwar names Devonshire, Kent, and London because surviving prewar County cruisers still carried those names when the missile ships commissioned.</p>"},
      {id:"employment",title:"Fleet employment",html:"<p>Tiger ships combined automatic 152 mm gunfire, aviation, command spaces, and area defense. County ships supplied task-group command, air defense, anti-ship missiles, and two anti-submarine helicopters. Cruisers led formations and reinforced carriers, amphibious groups, and route defenses.</p>"},
      {id:"registry",title:"South Atlantic registry issue",html:"<p>The separate early-1985 South Atlantic formation register identifies Devonshire and Kent as the two missile cruisers assigned there. Those names conflict with the active County roster and its explicit substitution rule. The discrepancy remains an unresolved registry precision issue rather than a settled second pair of ships.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Seven cruisers were active: Tiger, Blake, and five County ships. Active status does not establish immediate readiness, refit condition, or deployment.</p>"}
    ],
    related:[{href:"tiger-class-command-cruiser.html",kicker:"Gun and command cruiser",label:"Tiger Class"},{href:"county-class-guided-missile-cruiser.html",kicker:"Guided-missile cruiser",label:"County Class"},{href:"british-destroyer-force.html",kicker:"Missile screen",label:"British Destroyer Force"},{href:"british-fleet-carriers.html",kicker:"Protected formations",label:"British Fleet Carriers"},{href:"royal-navy-postwar.html",kicker:"Parent service",label:"Postwar Royal Navy"}],
    facts:[["Active cruisers, 1985","7"],["Tiger class","3 built; 2 active"],["County class","8 built; 5 active"],["Tiger full load","13,800 t"],["County full load","13,200 t"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Tiger-class_cruiser",label:"Wikipedia — historical Tiger-class context"},{href:"https://en.wikipedia.org/wiki/County-class_destroyer",label:"Wikipedia — historical County-class design context"}]
  }),

  "tiger-class-command-cruiser": britishNavalArticle({
    title:"Tiger-class command cruiser",
    category:"Warship class",
    eyebrow:"Royal Navy · command cruiser · 1954–",
    landscape:britishLineageLandscape,
    lead:"The Tiger class comprised the British command cruisers HMS Tiger, HMS Blake, and HMS Hawke. The three 13,800-tonne ships entered service between 1954 and 1958 with automatic 152 mm guns, fleet-command facilities, helicopter aviation, and area-defense weapons. Tiger and Blake remained active in 1985; Hawke was in mobilization reserve.",
    canon:"The three-ship roster, individual commissioning years, 13,800-tonne full-load displacement, steam propulsion, automatic 152 mm guns, command, helicopter, and area-defense roles, and 1985 status are established. Dimensions, machinery arrangement, speed, gun count, missiles, sensors, helicopter type and number, crew, builders, refits, deployments, and individual service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class converted the postwar requirement for large automatic-gun cruisers into ships able to house fleet staffs, aviation, and modern air-defense equipment. They entered service as Britain rebuilt a long-range fleet after the Lisbon settlement.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>HMS Tiger</td><td>1954</td><td>Active</td></tr><tr><td>HMS Blake</td><td>1956</td><td>Active</td></tr><tr><td>HMS Hawke</td><td>1958</td><td>Mobilization reserve</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 13,800 tonnes at full load and used steam propulsion. Automatic 152 mm guns, command facilities, helicopters, and area-defense weapons define the registered fit. Exact batteries, missile systems, sensors, aircraft facilities, and machinery are not settled.</p>"},
      {id:"command",title:"Fleet command",html:"<p>Tiger ships carried staffs and communications for fleet and task-group headquarters. They could coordinate carriers, destroyers, frigates, submarines, aviation, and replenishment while retaining their own gun and air-defense capacity.</p>"},
      {id:"aviation",title:"Aviation and gunfire",html:"<p>Helicopters supported anti-submarine work, liaison, observation, and rescue. Automatic 152 mm guns provided surface and shore fire. The reference does not fix the number of guns or embarked aircraft.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Tiger and Blake remained active. Hawke could be mobilized from reserve, but reserve status did not establish crew readiness, refit time, or material condition.</p>"}
    ],
    related:[{href:"british-cruiser-force.html",kicker:"Force history",label:"British Cruiser Force"},{href:"county-class-guided-missile-cruiser.html",kicker:"Missile successor",label:"County Class"},{href:"british-fleet-carriers.html",kicker:"Fleet context",label:"British Fleet Carriers"},{href:"royal-fleet-auxiliary-postwar.html",kicker:"Fleet support",label:"Royal Fleet Auxiliary"}],
    facts:[["Ships","Tiger; Blake; Hawke"],["Commissioned","1954–1958"],["Full load","13,800 t"],["Propulsion","Steam"],["Active, 1985","2"],["Reserve, 1985","1"],["Main gun category","Automatic 152 mm"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/Tiger-class_cruiser",label:"Wikipedia — historical Tiger-class context"}]
  }),

  "county-class-guided-missile-cruiser": britishNavalArticle({
    title:"County-class guided-missile cruiser",
    category:"Warship class",
    eyebrow:"Royal Navy · guided-missile cruiser · 1962–",
    landscape:britishLineageLandscape,
    lead:"The County class comprised eight British guided-missile cruisers introduced between 1962 and 1972. Each displaced 13,200 tonnes at full load and served in task-group air defense, command, anti-ship attack, and anti-submarine aviation. Five ships remained active in 1985.",
    canon:"The eight-ship roster and commissioning years, 13,200-tonne full-load displacement, steam propulsion, task-group air-defense, command, anti-ship-missile, and two-ASW-helicopter roles, five active and three decommissioned ships, 1980 decommissioning dates, and explicit name substitutions are established. Dimensions, machinery arrangement, speed, missile models and counts, other weapons, sensors, helicopter types, crew, builders, refits, deployments, and individual histories remain open. A separate South Atlantic register retains an unresolved name discrepancy.",
    sections:[
      {id:"development",title:"Development",html:"<p>County followed the Tiger command cruisers and provided a purpose-built guided-missile command ship for carrier groups, independent task groups, and long Commonwealth routes.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>HMS Dorset</td><td>1962</td><td>Active</td></tr><tr><td>HMS Hampshire</td><td>1963</td><td>Active</td></tr><tr><td>HMS Surrey</td><td>1964</td><td>Active</td></tr><tr><td>HMS Middlesex</td><td>1965</td><td>Active</td></tr><tr><td>HMS Norfolk</td><td>1966</td><td>Active</td></tr><tr><td>HMS Antrim</td><td>1968</td><td>Decommissioned 1980</td></tr><tr><td>HMS Fife</td><td>1970</td><td>Decommissioned 1980</td></tr><tr><td>HMS Glamorgan</td><td>1972</td><td>Decommissioned 1980</td></tr></tbody></table></div>"},
      {id:"names",title:"Naming",html:"<p>Dorset, Surrey, and Middlesex replaced the historical postwar names Devonshire, Kent, and London. The older County cruisers bearing those names were still in service when the guided-missile ships commissioned, and the Royal Navy did not duplicate active names.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 13,200 tonnes at full load and used steam propulsion. The role included task-group air defense, command, anti-ship missiles, and two anti-submarine helicopters. Exact weapons, sensors, machinery, and aircraft types remain open.</p>"},
      {id:"service",title:"Service",html:"<p>County ships directed and defended carriers, amphibious formations, replenishment groups, and independent surface forces. Helicopters contributed submarine search, liaison, and rescue. Specific deployments are not settled.</p>"},
      {id:"registry",title:"South Atlantic registry issue",html:"<p>A separate early-1985 formation register uses Devonshire and Kent for two South Atlantic missile cruisers. This conflicts with the fixed substitution rule and active roster. The identity of those two assigned ships remains a register precision issue.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Dorset, Hampshire, Surrey, Middlesex, and Norfolk remained active. Antrim, Fife, and Glamorgan had decommissioned in 1980.</p>"}
    ],
    related:[{href:"british-cruiser-force.html",kicker:"Force history",label:"British Cruiser Force"},{href:"tiger-class-command-cruiser.html",kicker:"Earlier command cruiser",label:"Tiger Class"},{href:"bristol-class-destroyer.html",kicker:"Heavy air-defense partner",label:"Bristol Class"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Ships built","8"],["Commissioned","1962–1972"],["Full load","13,200 t"],["Propulsion","Steam"],["Active, 1985","5"],["Decommissioned","3"],["Aviation","2 ASW helicopters"]],
    additionalSources:[{href:"https://en.wikipedia.org/wiki/County-class_destroyer",label:"Wikipedia — historical County-class design context"}]
  }),

  "british-destroyer-force": britishNavalArticle({
    title:"British postwar destroyer force",
    category:"Naval history",
    landscape:britishLineageLandscape,
    lead:"The British postwar destroyer force developed from radar-directed Battle-class gun ships through missile-rebuilt Darings to purpose-built Bristol and Sheffield fleet air-defense classes. Twenty-eight destroyers were active in 1985: eight Darings, four Bristols, and sixteen Sheffields.",
    canon:"Battle, Daring, Bristol, and Sheffield build totals, introduction bands, registered full-load displacements, roles, individual rosters, and active 1985 totals are established. Detailed propulsion except where registered, dimensions, weapons, sensors, refit blocks, aviation, crews, readiness, deployments, and most service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Wartime radar-directed gun defense remained the starting point after 1947. Missile reconstruction extended part of the large-gun fleet, while later construction separated heavy fleet air defense from the more numerous standard missile-destroyer role.</p>"},
      {id:"classes",title:"Classes",html:britishDestroyerClassTable},
      {id:"battle",title:"Battle class",html:"<p>Twenty-four <a href='battle-class-destroyer.html'>Battle-class destroyers</a> entered service from 1944 through 1950. None remained in the front-line 1985 total.</p>"},
      {id:"daring",title:"Daring class",html:"<p>Sixteen <a href='daring-class-destroyer.html'>Daring-class destroyers</a> entered service between 1949 and 1957. Eight missile-rebuilt ships remained active in 1985.</p>"},
      {id:"bristol",title:"Bristol class",html:"<p><a href='bristol-class-destroyer.html'>Bristol, Bath, Winchester, and Portsmouth</a> entered service from 1963 through 1970. All four 7,600-tonne ships remained active for heavy fleet air defense.</p>"},
      {id:"sheffield",title:"Sheffield class",html:"<p>Sixteen <a href='sheffield-class-destroyer.html'>Sheffield-class destroyers</a> entered service between 1974 and 1985. All remained active as the standard missile-destroyer generation.</p>"},
      {id:"employment",title:"Fleet employment",html:"<p>Destroyers protected carriers, cruisers, amphibious groups, auxiliaries, and merchant formations against aircraft and missiles. They carried useful anti-submarine equipment, while frigates remained the specialized submarine-hunting branch.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>The active force contained twenty-eight ships. Active status did not establish deployment, overhaul, work-up, or immediate readiness.</p>"}
    ],
    related:[{href:"battle-class-destroyer.html",kicker:"Gun generation",label:"Battle Class"},{href:"daring-class-destroyer.html",kicker:"Rebuilt generation",label:"Daring Class"},{href:"bristol-class-destroyer.html",kicker:"Heavy air defense",label:"Bristol Class"},{href:"sheffield-class-destroyer.html",kicker:"Standard missile destroyer",label:"Sheffield Class"},{href:"british-frigate-force.html",kicker:"ASW complement",label:"British Frigate Force"}],
    facts:[["Active destroyers, 1985","28"],["Daring","16 built; 8 active"],["Bristol","4 built and active"],["Sheffield","16 built and active"],["Battle","24 built; 0 active"],["Primary specialization","Fleet air defense"]]
  }),

  "battle-class-destroyer": britishNavalArticle({
    title:"Battle-class destroyer",
    category:"Warship class",
    eyebrow:"Royal Navy · radar-directed gun destroyer · 1944–1975",
    landscape:britishLineageLandscape,
    lead:"The Battle class was a twenty-four-ship British destroyer class introduced between 1944 and 1950 for radar-directed gun defense. The class served through the first three postwar decades, but no ship remained active in 1985.",
    canon:"The twenty-four-ship roster, individual commissioning and decommissioning years, 3,500-tonne full-load displacement, steam propulsion, radar-directed gun-defense role, and zero active 1985 total are established. Dimensions, machinery arrangement, speed, exact armament, sensors, crews, builders, wartime operations, refits, and final dispositions remain open unless historically fixed before divergence.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class originated during the extended war as a radar-directed gun-defense destroyer. Completion continued after the Lisbon settlement, with the last ships entering service in 1950.</p>"},
      {id:"ships",title:"Ships in class",html:"<p>The twenty-four ships were Armada, Barfleur, Cadiz, Camperdown, Finisterre, Gabbard, Gravelines, Hogue, Lagos, Solebay, St James, Saintes, Sluys, St Kitts, Agincourt, Alamein, Trafalgar, Vigo, Aisne, Barrosa, Corunna, Dunkirk, Jutland, and Matapan.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each displaced 3,500 tonnes at full load and used steam propulsion. Radar-directed gun defense was the principal role. Exact gun batteries, torpedoes, anti-submarine weapons, sensors, speed, and complement remain open.</p>"},
      {id:"service",title:"Postwar service",html:"<p>Battle-class ships provided fleet, route, and training service while Britain rebuilt its naval system. Individual operational histories after 1947 have not been settled.</p>"},
      {id:"retirement",title:"Retirement",html:"<p>Decommissioning ran from 1958 through 1975. Matapan was the last registered ship to leave service. The final disposal or transfer of individual hulls remains open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>No Battle-class ship remained active. The class belonged to the wartime and early postwar gun-defense inheritance rather than the 1985 missile fleet.</p>"}
    ],
    related:[{href:"british-destroyer-force.html",kicker:"Force history",label:"British Destroyer Force"},{href:"daring-class-destroyer.html",kicker:"Overlapping successor",label:"Daring Class"},{href:"british-armistice-fleet.html",kicker:"1947 inheritance",label:"British Armistice Fleet"},{href:"second-battle-of-britain.html",kicker:"Wartime setting",label:"Second Battle of Britain"}],
    facts:[["Type","Destroyer"],["Built","24"],["Commissioned","1944–1950"],["Full load","3,500 t"],["Propulsion","Steam"],["Role","Radar-directed gun defense"],["Active, 1985","0"]]
  }),

  "daring-class-destroyer": britishNavalArticle({
    title:"Daring-class destroyer",
    category:"Warship class",
    eyebrow:"Royal Navy · missile-rebuilt destroyer · 1949–",
    landscape:britishLineageLandscape,
    lead:"The Daring class was a sixteen-ship British large-destroyer class introduced between 1949 and 1957. Eight ships received missile reconstruction and remained active in 1985, linking the postwar gun fleet to the later purpose-built missile force.",
    canon:"The sixteen-ship roster, individual commissioning and decommissioning years, 4,300-tonne full-load displacement, steam propulsion, large-gun origin, missile reconstruction, eight active and eight decommissioned ships, and 1985 status are established. Dimensions, machinery arrangement, speed, original and rebuilt weapons, sensors, crews, builders, refit dates, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Daring began as a large postwar gun destroyer and entered service while Battle-class construction was still ending. Missile reconstruction kept half the class in front-line service after purpose-built air-defense ships appeared.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Status, 1985</th><th>Ships</th></tr></thead><tbody><tr><td>Active</td><td>Danae, Dauntless, Deference, Demon, Desire, Desperate, Disdain, Druid</td></tr><tr><td>Decommissioned</td><td>Dainty, Daring, Defender, Diamond, Decoy, Delight, Diana, Duchess</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 4,300 tonnes at full load and used steam propulsion. The class originated as a large gun destroyer and later received missiles. Exact original and rebuilt configurations are open.</p>"},
      {id:"reconstruction",title:"Missile reconstruction",html:"<p>Reconstruction allowed eight hulls to continue as fleet escorts in 1985. The register does not fix refit dates, missile systems, sensor arrangements, or the extent of structural alteration.</p>"},
      {id:"retirements",title:"Decommissioning",html:"<p>The eight ships outside the active group decommissioned between 1974 and 1981. Their final dispositions are not settled.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Danae, Dauntless, Deference, Demon, Desire, Desperate, Disdain, and Druid remained active. Readiness, assignment, and modernization state are open.</p>"}
    ],
    related:[{href:"british-destroyer-force.html",kicker:"Force history",label:"British Destroyer Force"},{href:"battle-class-destroyer.html",kicker:"Gun predecessor",label:"Battle Class"},{href:"bristol-class-destroyer.html",kicker:"Purpose-built successor",label:"Bristol Class"},{href:"british-cruiser-force.html",kicker:"Command layer",label:"British Cruiser Force"}],
    facts:[["Type","Missile-rebuilt destroyer"],["Built","16"],["Commissioned","1949–1957"],["Full load","4,300 t"],["Propulsion","Steam"],["Active, 1985","8"],["Decommissioned","8"]]
  }),

  "bristol-class-destroyer": britishNavalArticle({
    title:"Bristol-class destroyer",
    category:"Warship class",
    eyebrow:"Royal Navy · heavy air-defense destroyer · 1963–",
    landscape:britishLineageLandscape,
    lead:"The Bristol class comprised the British heavy fleet air-defense destroyers HMS Bristol, HMS Bath, HMS Winchester, and HMS Portsmouth. The class occupied the registered 1963–1970 introduction band; the individual roster records commissions in 1963, 1965, 1967, and 1969. All four 7,600-tonne ships remained active in 1985.",
    canon:"The four-ship roster and individual commissioning years, 7,600-tonne full-load displacement, steam propulsion, heavy fleet-air-defense role, and four active ships in 1985 are established. Dimensions, machinery arrangement, speed, weapons, sensors, aviation, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Bristol followed the missile reconstruction of the Daring class and supplied a purpose-built heavy air-defense destroyer. Its introduction overlapped the County guided-missile cruiser program.</p>"},
      {id:"ships",title:"Ships in class",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>HMS Bristol</td><td>1963</td><td>Active</td></tr><tr><td>HMS Bath</td><td>1965</td><td>Active</td></tr><tr><td>HMS Winchester</td><td>1967</td><td>Active</td></tr><tr><td>HMS Portsmouth</td><td>1969</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 7,600 tonnes at full load and used steam propulsion. The registered purpose was heavy fleet air defense. Missile systems, guns, sensors, aircraft facilities, speed, and complement remain open.</p>"},
      {id:"service",title:"Fleet service",html:"<p>Bristol ships defended carriers, command cruisers, amphibious forces, and replenishment groups. Their larger hulls supported the heavy air-defense role but did not remove the need for standard destroyers and frigates.</p>"},
      {id:"comparison",title:"Relationship with Sheffield",html:"<p>The Sheffield class supplied a more numerous standard missile destroyer from 1974. Bristol remained the four-ship heavy layer within the twenty-eight-ship active destroyer force.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four ships remained active. Their individual deployment and overhaul status are not fixed.</p>"}
    ],
    related:[{href:"british-destroyer-force.html",kicker:"Force history",label:"British Destroyer Force"},{href:"daring-class-destroyer.html",kicker:"Earlier missile escort",label:"Daring Class"},{href:"sheffield-class-destroyer.html",kicker:"Standard missile escort",label:"Sheffield Class"},{href:"county-class-guided-missile-cruiser.html",kicker:"Command and air defense",label:"County Class"}],
    facts:[["Ships","Bristol; Bath; Winchester; Portsmouth"],["Introduction band","1963–1970"],["Roster commissions","1963; 1965; 1967; 1969"],["Full load","7,600 t"],["Propulsion","Steam"],["Role","Heavy fleet air defense"],["Active, 1985","4"]]
  }),

  "sheffield-class-destroyer": britishNavalArticle({
    title:"Sheffield-class destroyer",
    category:"Warship class",
    eyebrow:"Royal Navy · missile destroyer · 1974–",
    landscape:britishLineageLandscape,
    lead:"The Sheffield class was a sixteen-ship British missile-destroyer class introduced between 1974 and 1985. All sixteen 4,900-tonne ships remained active at the reference date and formed the Royal Navy's standard missile-destroyer generation.",
    canon:"The sixteen-ship roster and individual commissioning years, 4,900-tonne full-load displacement, missile-destroyer classification, standard fleet role, and sixteen active ships in 1985 are established. Propulsion, dimensions, speed, weapons, sensors, aviation, crew, builders, refits, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Sheffield followed the heavy Bristol class and supplied the numbers required for carrier groups, amphibious formations, routes, and overseas deployments. Commissioning continued through 1985.</p>"},
      {id:"ships",title:"Ships in class",html:"<p>The sixteen ships were Birmingham, Sheffield, Coventry, Glasgow, Cardiff, Newcastle, Exeter, Southampton, Liverpool, Manchester, Edinburgh, Belfast, Leeds, Nottingham, York, and Cambridge.</p>"},
      {id:"commissioning",title:"Commissioning",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Year</th><th>Ships</th></tr></thead><tbody><tr><td>1974</td><td>Birmingham; Sheffield</td></tr><tr><td>1975</td><td>Coventry</td></tr><tr><td>1976</td><td>Glasgow</td></tr><tr><td>1977</td><td>Cardiff; Newcastle</td></tr><tr><td>1978</td><td>Exeter</td></tr><tr><td>1979</td><td>Southampton</td></tr><tr><td>1980</td><td>Liverpool; Manchester</td></tr><tr><td>1981</td><td>Edinburgh</td></tr><tr><td>1982</td><td>Belfast</td></tr><tr><td>1983</td><td>Leeds; Nottingham</td></tr><tr><td>1984</td><td>York</td></tr><tr><td>1985</td><td>Cambridge</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 4,900 tonnes at full load and was classified as a standard missile destroyer. Propulsion, dimensions, speed, missile and gun fits, sensors, aviation arrangements, and complement remain open.</p>"},
      {id:"service",title:"Service",html:"<p>The class protected carriers, cruisers, amphibious groups, replenishment ships, and merchant formations against air and missile attack. It also carried useful anti-submarine equipment, although frigates specialized more heavily in that mission.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All sixteen ships remained active, including newly commissioned Cambridge. Individual work-up, deployment, and readiness are not settled.</p>"}
    ],
    related:[{href:"british-destroyer-force.html",kicker:"Force history",label:"British Destroyer Force"},{href:"bristol-class-destroyer.html",kicker:"Heavy air-defense layer",label:"Bristol Class"},{href:"british-frigate-force.html",kicker:"ASW complement",label:"British Frigate Force"},{href:"falklands-war.html",kicker:"1985 theater",label:"Falklands/Malvinas War"}],
    facts:[["Type","Missile destroyer"],["Built and active","16"],["Commissioned","1974–1985"],["Full load","4,900 t"],["Role","Standard missile destroyer"]]
  })
});
