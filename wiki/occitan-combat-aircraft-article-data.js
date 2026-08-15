window.deepArticles = window.deepArticles || {};

const occitanAircraftSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Occitan combat-aircraft registry"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Occitania, the Latin Bloc, and aerospace industry"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — French partition and postwar technical development"},
  {href:"../transcript.md",label:"Master Transcript — Occitan technical institutions, exports, and Latin strategy"}
];

const occitanAircraftLandscape = {
  src:"assets/diagrams/occitan-combat-aircraft-lineage.svg",
  alt:"Timeline of seven Occitan combat aircraft from the 1951 MD 450B Ouragan to the 1983 Mirage 2000 C",
  caption:"The evacuation-born lineage moves from first-generation jets through swept-wing, supersonic, Mach 2, multirole, air-superiority, and digital fly-by-wire generations"
};

const occitanAircraftArticle = config => ({
  category:"Military aircraft", eyebrow:"Occitan military aircraft", landscape:occitanAircraftLandscape,
  ...config, sources:[...occitanAircraftSources,...(config.primarySources || [])],
  categories:config.categories || ["Occitania","Latin Bloc","Military aircraft","Combat aircraft","Aerospace industry"]
});

const occitanAircraftListSection = rows => ({
  id:"aircraft",title:"List of Aircraft",
  html:`<p>The internal designation is the manufacturer's project code. The official designation gives the registered service or public title.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p" ? "<sup class='canon-note' data-provenance='p'>[p]</sup>" : provenance === "a" ? "<sup class='canon-note' data-provenance='a'>[a]</sup>" : "<sup class='canon-note' data-provenance='e'>[e]</sup>";
    return `<tr><td>${internal}</td><td>${href ? `<a href='${href}'>${official}</a>` : official}${note}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

Object.assign(window.deepArticles, {
  "md-450b-ouragan": occitanAircraftArticle({
    title:"MD 450B Ouragan", eyebrow:"First indigenous Occitan jet fighter · introduced 1951", infoboxKicker:"First-generation jet fighter", infoboxTitle:"MD 450B Ouragan",
    lead:"The MD 450B Ouragan was the first indigenous jet fighter of Occitania, introduced in 1951. Developed from the aerospace institutions preserved by the Toulouse–Bordeaux evacuation and Mérignac assembly tradition, it established a national combat-aircraft industry only four years after the French partition settlement.",
    canon:"The MD 450B Ouragan designation, 1951 introduction, first-indigenous-Occitan-jet status, 940 km/h maximum speed, 500 km combat radius, four 20×110RB mm cannon, and 1,000 kg stores load are fixed. Designer, manufacturer beyond the preserved Dassault tradition, engine, dimensions, mass, crew, armor, hardpoints, variants, production, users, units, exports, combat history, and retirement remain open.",
    sections:[
      {id:"origin",title:"Evacuation-born industry",html:"<p>The Toulouse–Bordeaux evacuation preserves engineers, tooling, state factories, and Dassault's Mérignac assembly tradition south of the German partition. Ouragan is the first registered indigenous jet product of that system.</p>"},
      {id:"introduction",title:"Introduction in 1951",html:"<p>The aircraft enters service in 1951. Development, prototype, first-flight, acceptance, and first-unit dates remain open.</p>"},
      {id:"role",title:"First indigenous jet fighter",html:"<p>The designation marks national industrial independence as much as a tactical role. The registry does not define interception, escort, strike, or training priorities within ordinary fighter service.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1951</td></tr><tr><th>Mission</th><td>First indigenous Occitan jet fighter</td></tr><tr><th>Maximum speed</th><td>940 km/h</td></tr><tr><th>Combat radius</th><td>500 km</td></tr><tr><th>Cannon</th><td>Four 20×110RB mm</td></tr><tr><th>Stores load</th><td>1,000 kg</td></tr></tbody></table></div>"},
      {id:"weapons",title:"Cannon and stores",html:"<p>Four 20×110RB mm cannon provide fixed armament and the aircraft carries 1,000 kg of stores. Gun models, ammunition, hardpoints, approved loads, and fuel tradeoffs remain open.</p>"},
      {id:"successor",title:"Transition to swept wings",html:"<p>The 1954 <a href='md-452c-mystere-ii.html'>MD 452C Mystère II</a> follows as the registered swept-wing fighter. Direct component or airframe ancestry is not separately fixed.</p>"},
      {id:"exports",title:"Export position",html:"<p>Occitan aircraft are exported widely, but the source does not assign Ouragan quantities or customers among Spain, Portugal, Latin America, Syria, Hashemite forces, or African territories.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Engine, dimensions, crew, equipment, production, units, bases, variants, exports, operations, losses, upgrades, and retirement remain unregistered.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"md-452c-mystere-ii.html",kicker:"1954 successor generation",label:"MD 452C Mystère II"},{href:"super-mystere-b2.html",kicker:"1957 supersonic generation",label:"Super Mystère B2"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Occitania"],["Introduction","1951"],["Type","First indigenous Occitan jet fighter"],["Maximum speed","940 km/h"],["Combat radius","500 km"],["Cannon","Four 20×110RB mm"],["Stores load","1,000 kg"],["Industrial basis","Toulouse–Bordeaux evacuation"]]
  }),

  "md-452c-mystere-ii": occitanAircraftArticle({
    title:"MD 452C Mystère II", eyebrow:"Occitan swept-wing fighter · introduced 1954", infoboxKicker:"Swept-wing jet fighter", infoboxTitle:"MD 452C Mystère II",
    lead:"The MD 452C Mystère II was Occitania's swept-wing fighter introduced in 1954. It followed the first-generation Ouragan with greater speed, combat radius, and a two-cannon 30×113B mm armament, forming the intermediate step before the supersonic Super Mystère B2.",
    canon:"The MD 452C Mystère II designation, 1954 introduction, swept-wing-fighter mission, 1,050 km/h maximum speed, 600 km combat radius, and two 30×113B mm cannon are fixed. Designer, engine, dimensions, mass, crew, wing geometry, stores, variants, production, users, units, exports, combat history, and retirement remain open.",
    sections:[
      {id:"development",title:"Second Occitan jet generation",html:"<p>Mystère II follows three years after the <a href='md-450b-ouragan.html'>Ouragan</a>. The shift to a swept-wing fighter is fixed, while the detailed design lineage and component continuity remain open.</p>"},
      {id:"introduction",title:"Introduction in 1954",html:"<p>The aircraft enters the registry in 1954. Prototype, first-flight, test, acceptance, and squadron dates remain unregistered.</p>"},
      {id:"role",title:"Swept-wing fighter",html:"<p>The mission remains fighter service rather than a separately registered interceptor or fighter-bomber role. Exact doctrine, targets, basing, and sortie profiles are open.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1954</td></tr><tr><th>Mission</th><td>Swept-wing fighter</td></tr><tr><th>Maximum speed</th><td>1,050 km/h</td></tr><tr><th>Combat radius</th><td>600 km</td></tr><tr><th>Armament</th><td>Two 30×113B mm cannon</td></tr></tbody></table></div>"},
      {id:"armament",title:"30 mm cannon",html:"<p>Two 30×113B mm cannon replace the Ouragan's four 20 mm weapons in the registered armament. Models, ammunition capacity, placement, rate of fire, and sight remain open.</p>"},
      {id:"supersonic",title:"Road to the Super Mystère",html:"<p>The 1957 <a href='super-mystere-b2.html'>Super Mystère B2</a> adds supersonic fighter-bomber performance and a large stores load while retaining the two-cannon caliber.</p>"},
      {id:"naming",title:"Designation continuity",html:"<p>The aircraft retains French manufacturer initials, design number, variant letter, and public name within the Occitan registry.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Engine, structure, dimensions, crew, avionics, stores, production, users, units, exports, operations, upgrades, losses, and retirement remain open.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"md-450b-ouragan.html",kicker:"1951 predecessor",label:"MD 450B Ouragan"},{href:"super-mystere-b2.html",kicker:"1957 successor",label:"Super Mystère B2"},{href:"mirage-iii-c.html",kicker:"Later Mach 2 interceptor",label:"Mirage III C"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"}],
    facts:[["Country of origin","Occitania"],["Introduction","1954"],["Type","Swept-wing fighter"],["Maximum speed","1,050 km/h"],["Combat radius","600 km"],["Armament","Two 30×113B mm cannon"],["Predecessor","MD 450B Ouragan"],["Successor generation","Super Mystère B2"]]
  }),

  "super-mystere-b2": occitanAircraftArticle({
    title:"Super Mystère B2", eyebrow:"Occitan supersonic fighter-bomber · introduced 1957", infoboxKicker:"Supersonic fighter-bomber", infoboxTitle:"Super Mystère B2",
    lead:"The Super Mystère B2 was Occitania's supersonic fighter-bomber introduced in 1957. It combined two 30×113B mm cannon with a 2,700 kg stores load, extending the Mystère family from swept-wing fighter service into a registered high-speed strike role.",
    canon:"The Super Mystère B2 designation, 1957 introduction, supersonic fighter-bomber mission, 1,200 km/h maximum speed, 700 km combat radius, two 30×113B mm cannon, and 2,700 kg stores load are fixed. Designer, engine, dimensions, mass, crew, exact supersonic regime, hardpoints, approved weapons, variants, production, users, exports, combat history, and retirement remain open.",
    sections:[
      {id:"development",title:"Supersonic Mystère generation",html:"<p>Super Mystère B2 follows the <a href='md-452c-mystere-ii.html'>MD 452C Mystère II</a> in 1957. The shared name marks program continuity, while exact structural and component inheritance remains open.</p>"},
      {id:"mission",title:"Fighter-bomber mission",html:"<p>The aircraft combines air-combat and strike roles. The registry does not divide time, units, or configurations between them.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1957</td></tr><tr><th>Mission</th><td>Supersonic fighter-bomber</td></tr><tr><th>Maximum speed</th><td>1,200 km/h</td></tr><tr><th>Combat radius</th><td>700 km</td></tr><tr><th>Cannon</th><td>Two 30×113B mm</td></tr><tr><th>Stores load</th><td>2,700 kg</td></tr></tbody></table></div>"},
      {id:"cannon",title:"Cannon armament",html:"<p>Two 30×113B mm cannon continue the registered caliber of Mystère II. Gun models, ammunition, placement, and fire-control equipment remain open.</p>"},
      {id:"stores",title:"Strike stores",html:"<p>The 2,700 kg stores load defines the fighter-bomber's strike capacity. Hardpoints, bombs, rockets, tanks, guided weapons, and load-radius tradeoffs remain unregistered.</p>"},
      {id:"mirage",title:"Before the Mirage generation",html:"<p>The 1961 <a href='mirage-iii-c.html'>Mirage III C</a> shifts the high-speed line toward Mach 2 interception; <a href='mirage-iii-e.html'>Mirage III E</a> later restores a fighter-bomber and reconnaissance combination.</p>"},
      {id:"exports",title:"Export position",html:"<p>The wider Occitan export system is fixed, but no Super Mystère customer, license, quantity, or combat use is assigned.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Engine, dimensions, crew, avionics, weapons, variants, production, users, units, exports, operations, losses, upgrades, and retirement remain open.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"md-452c-mystere-ii.html",kicker:"Swept-wing predecessor",label:"MD 452C Mystère II"},{href:"mirage-iii-c.html",kicker:"Mach 2 successor generation",label:"Mirage III C"},{href:"mirage-iii-e.html",kicker:"Later fighter-bomber",label:"Mirage III E"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"}],
    facts:[["Country of origin","Occitania"],["Introduction","1957"],["Type","Supersonic fighter-bomber"],["Maximum speed","1,200 km/h"],["Combat radius","700 km"],["Cannon","Two 30×113B mm"],["Stores load","2,700 kg"],["Predecessor","MD 452C Mystère II"]]
  }),

  "mirage-iii-c": occitanAircraftArticle({
    title:"Mirage III C", eyebrow:"Occitan Mach 2 interceptor · introduced 1961", infoboxKicker:"Mach 2 interceptor", infoboxTitle:"Mirage III C",
    lead:"The Mirage III C was Occitania's Mach 2 interceptor introduced in 1961. Armed with two 30×113B mm cannon and four missiles, it moved the evacuation-born combat-aircraft industry from early supersonic fighter-bombers into a dedicated high-speed interception system.",
    canon:"The Mirage III C designation, 1961 introduction, Mach 2 interceptor mission, 2,350 km/h maximum speed, 850 km combat radius, two 30×113B mm cannon, and four missiles are fixed. Designer, engine, dimensions, mass, crew, radar, missile types, guidance, ceiling, production, variants, users, exports, combat history, and retirement remain open.",
    sections:[
      {id:"generation",title:"Mach 2 generation",html:"<p>Mirage III C follows the 1957 Super Mystère B2 with nearly twice its registered maximum speed. Exact aerodynamic, engine, and structural development remains open.</p>"},
      {id:"mission",title:"Interceptor mission",html:"<p>The aircraft is registered for interception rather than a general fighter role. Alert doctrine, ground control, target classes, basing, and sortie profile remain open.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1961</td></tr><tr><th>Mission</th><td>Mach 2 interceptor</td></tr><tr><th>Maximum speed</th><td>2,350 km/h</td></tr><tr><th>Combat radius</th><td>850 km</td></tr><tr><th>Cannon</th><td>Two 30×113B mm</td></tr><tr><th>Missiles</th><td>Four</td></tr></tbody></table></div>"},
      {id:"weapons",title:"Cannon and missiles",html:"<p>Two 30 mm cannon complement four missiles. Models, ammunition, missile seekers, ranges, station arrangement, and fire-control integration remain open.</p>"},
      {id:"sensors",title:"Interception system",html:"<p>Radar, identification, navigation, ground control, electronic warfare, and data links are not separately fixed by the aircraft registry.</p>"},
      {id:"mirage-e",title:"Mirage III E derivative generation",html:"<p>The 1964 <a href='mirage-iii-e.html'>Mirage III E</a> retains the same registered maximum speed and cannon count while adding fighter-bomber and reconnaissance roles, greater radius, and a large stores load.</p>"},
      {id:"exports",title:"Export system",html:"<p>Occitan aircraft are widely exported, but exact Mirage III C customers, licenses, quantities, and national variants remain open.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Engine, dimensions, crew, radar, missiles, production, units, exports, operations, interceptions, losses, upgrades, and retirement remain unregistered.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"super-mystere-b2.html",kicker:"Supersonic predecessor",label:"Super Mystère B2"},{href:"mirage-iii-e.html",kicker:"1964 multirole derivative",label:"Mirage III E"},{href:"mirage-f1-c.html",kicker:"Later air-superiority fighter",label:"Mirage F1 C"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"}],
    facts:[["Country of origin","Occitania"],["Introduction","1961"],["Type","Mach 2 interceptor"],["Maximum speed","2,350 km/h"],["Combat radius","850 km"],["Cannon","Two 30×113B mm"],["Missile load","Four"],["Successor variant","Mirage III E"]]
  }),

  "mirage-iii-e": occitanAircraftArticle({
    title:"Mirage III E", eyebrow:"Occitan fighter-bomber and reconnaissance aircraft · introduced 1964", infoboxKicker:"Multirole Mirage variant", infoboxTitle:"Mirage III E",
    lead:"The Mirage III E was Occitania's fighter-bomber and reconnaissance variant introduced in 1964. It retained the Mirage III C's 2,350 km/h speed and two 30×113B mm cannon while increasing combat radius to 1,100 km and carrying 4,000 kg of stores.",
    canon:"The Mirage III E designation, 1964 introduction, fighter-bomber and reconnaissance mission, 2,350 km/h maximum speed, 1,100 km combat radius, two 30×113B mm cannon, and 4,000 kg stores load are fixed. Designer, engine, dimensions, mass, crew, radar, cameras, sensors, hardpoints, approved weapons, variants, production, users, exports, combat history, and retirement remain open.",
    sections:[
      {id:"variant",title:"Mirage III multirole variant",html:"<p>The E variant follows the <a href='mirage-iii-c.html'>Mirage III C</a> by three years. The shared family name establishes program relationship, while exact structural, engine, and avionics changes remain open.</p>"},
      {id:"missions",title:"Fighter-bomber and reconnaissance",html:"<p>The aircraft combines strike and reconnaissance in one registered mission line. The source does not state whether equipment is permanent, removable, or separated by subvariant.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1964</td></tr><tr><th>Mission</th><td>Fighter-bomber and reconnaissance</td></tr><tr><th>Maximum speed</th><td>2,350 km/h</td></tr><tr><th>Combat radius</th><td>1,100 km</td></tr><tr><th>Cannon</th><td>Two 30×113B mm</td></tr><tr><th>Stores load</th><td>4,000 kg</td></tr></tbody></table></div>"},
      {id:"strike",title:"Strike load",html:"<p>A 4,000 kg stores load gives the aircraft the largest registered load in the Occitan table. Weapons, hardpoints, tanks, guided stores, and range tradeoffs remain open.</p>"},
      {id:"recon",title:"Reconnaissance system",html:"<p>Cameras, sensors, pods, navigation, processing, and reporting arrangements are not fixed. The role alone is registered.</p>"},
      {id:"cannon",title:"Retained cannon system",html:"<p>Two 30×113B mm cannon preserve the family armament pattern. Models, ammunition, placement, and sighting remain open.</p>"},
      {id:"later",title:"From Mirage III to Mirage F1",html:"<p>The 1971 <a href='mirage-f1-c.html'>Mirage F1 C</a> becomes the next registered Occitan air-superiority fighter with a longer radius and six missiles.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Engines, avionics, sensors, weapons, variants, production, users, exports, units, operations, losses, upgrades, and retirement remain open.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"mirage-iii-c.html",kicker:"Interceptor family predecessor",label:"Mirage III C"},{href:"mirage-f1-c.html",kicker:"1971 successor generation",label:"Mirage F1 C"},{href:"spanish-military-aviation.html",kicker:"Major export and license partner",label:"Spanish Military Aviation"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"}],
    facts:[["Country of origin","Occitania"],["Introduction","1964"],["Type","Fighter-bomber and reconnaissance aircraft"],["Maximum speed","2,350 km/h"],["Combat radius","1,100 km"],["Cannon","Two 30×113B mm"],["Stores load","4,000 kg"],["Family predecessor","Mirage III C"]]
  }),

  "mirage-f1-c": occitanAircraftArticle({
    title:"Mirage F1 C", eyebrow:"Occitan air-superiority fighter · introduced 1971", infoboxKicker:"Air-superiority fighter", infoboxTitle:"Mirage F1 C",
    lead:"The Mirage F1 C was Occitania's air-superiority fighter introduced in 1971. It combined a 1,200 km combat radius with two 30×113B mm cannon and six missiles, extending the national Mirage sequence beyond the interceptor and multirole III variants.",
    canon:"The Mirage F1 C designation, 1971 introduction, air-superiority-fighter mission, 2,340 km/h maximum speed, 1,200 km combat radius, two 30×113B mm cannon, and six missiles are fixed. Designer, engine, dimensions, mass, crew, radar, missile types, maneuver performance, variants, production, users, exports, combat history, and retirement remain open.",
    sections:[
      {id:"generation",title:"Post-Mirage III generation",html:"<p>Mirage F1 C follows Mirage III E after seven years. The public family name connects the programs, but the registry does not define shared airframe architecture or components.</p>"},
      {id:"mission",title:"Air-superiority role",html:"<p>The aircraft is registered to secure control of contested airspace. Interception, escort, patrol, offensive counter-air, and multirole doctrine remain open.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1971</td></tr><tr><th>Mission</th><td>Air-superiority fighter</td></tr><tr><th>Maximum speed</th><td>2,340 km/h</td></tr><tr><th>Combat radius</th><td>1,200 km</td></tr><tr><th>Cannon</th><td>Two 30×113B mm</td></tr><tr><th>Missiles</th><td>Six</td></tr></tbody></table></div>"},
      {id:"weapons",title:"Two-cannon, six-missile armament",html:"<p>The registered load expands the Mirage III C's four missiles to six while retaining two 30 mm cannon. Missile types, stations, seekers, ranges, gun ammunition, and mixed loads remain open.</p>"},
      {id:"sensors",title:"Air-combat system",html:"<p>Radar, navigation, identification, electronic warfare, data links, and cockpit equipment are not separately fixed.</p>"},
      {id:"exports",title:"Export role",html:"<p>Occitania exports combat aircraft widely, but exact Mirage F1 C customers, license arrangements, quantities, and national variants remain unregistered.</p>"},
      {id:"successor",title:"Digital successor generation",html:"<p>The 1983 <a href='mirage-2000-c.html'>Mirage 2000 C</a> becomes the next registered interceptor, adding digital fly-by-wire and greater speed and radius while retaining the cannon-and-six-missile pattern.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Engine, dimensions, crew, radar, missiles, production, users, exports, units, operations, losses, upgrades, and retirement remain open.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"mirage-iii-e.html",kicker:"1964 predecessor generation",label:"Mirage III E"},{href:"mirage-2000-c.html",kicker:"1983 digital successor",label:"Mirage 2000 C"},{href:"mirage-iii-c.html",kicker:"Earlier interceptor",label:"Mirage III C"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"}],
    facts:[["Country of origin","Occitania"],["Introduction","1971"],["Type","Air-superiority fighter"],["Maximum speed","2,340 km/h"],["Combat radius","1,200 km"],["Cannon","Two 30×113B mm"],["Missile load","Six"],["Successor","Mirage 2000 C"]]
  }),

  "mirage-2000-c": occitanAircraftArticle({
    title:"Mirage 2000 C", eyebrow:"Occitan digital fly-by-wire interceptor · introduced 1983", infoboxKicker:"Digital interceptor", infoboxTitle:"Mirage 2000 C",
    lead:"The Mirage 2000 C was Occitania's digital fly-by-wire interceptor introduced in 1983. With a maximum speed of 2,530 km/h and a 1,300 km combat radius, it was the fastest and longest-ranged aircraft in the registered Occitan combat-aircraft table by 1985.",
    canon:"The Mirage 2000 C designation, 1983 introduction, digital fly-by-wire-interceptor mission, 2,530 km/h maximum speed, 1,300 km combat radius, two 30×113B mm cannon, six missiles, and status as the fastest and longest-ranged registered Occitan aircraft by 1985 are fixed. Designer, engine, dimensions, mass, crew, flight-control architecture, radar, missile types, variants, production, users, exports, combat history, and successor remain open.",
    sections:[
      {id:"digital",title:"Digital fly-by-wire generation",html:"<p>Mirage 2000 C is the first Occitan registry entry defined by digital fly-by-wire control. Computers, redundancy, control laws, backup modes, and certification history remain open.</p>"},
      {id:"introduction",title:"Introduction in 1983",html:"<p>The aircraft enters two years before the registry endpoint. Development, prototype, first-flight, acceptance, unit conversion, and 1985 fleet size remain unregistered.</p>"},
      {id:"mission",title:"Interceptor mission",html:"<p>The C variant is registered for interception. Air-superiority, escort, strike, reconnaissance, and export configurations are not established by this entry.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1983</td></tr><tr><th>Mission</th><td>Digital fly-by-wire interceptor</td></tr><tr><th>Maximum speed</th><td>2,530 km/h</td></tr><tr><th>Combat radius</th><td>1,300 km</td></tr><tr><th>Cannon</th><td>Two 30×113B mm</td></tr><tr><th>Missiles</th><td>Six</td></tr></tbody></table></div>"},
      {id:"weapons",title:"Retained combat armament",html:"<p>Two 30 mm cannon and six missiles continue the Mirage F1 C registered pattern. Models, ammunition, stations, seekers, ranges, and fire-control integration remain open.</p>"},
      {id:"sensors",title:"Digital interception system",html:"<p>Radar, identification, data links, electronic warfare, navigation, displays, and weapons computers are not separately fixed despite the digital control designation.</p>"},
      {id:"position",title:"1985 lineage endpoint",html:"<p>Mirage 2000 C is the latest Occitan fighter in the registry through 1985. Later variants, production growth, export allocations, and successor programs remain open.</p>"},
      {id:"limits",title:"Open service record",html:"<p>Engine, dimensions, crew, flight controls, radar, missiles, production, users, exports, units, readiness, operations, losses, and upgrades remain unregistered.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"mirage-f1-c.html",kicker:"1971 predecessor generation",label:"Mirage F1 C"},{href:"mirage-iii-c.html",kicker:"Earlier Mach 2 interceptor",label:"Mirage III C"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Occitania"],["Introduction","1983"],["Type","Digital fly-by-wire interceptor"],["Maximum speed","2,530 km/h"],["Combat radius","1,300 km"],["Cannon","Two 30×113B mm"],["Missile load","Six"],["1985 status","Latest, fastest, and longest-ranged registered Occitan fighter"]]
  }),

  "dassault-aviation": occitanAircraftArticle({
    title:"Dassault Aviation",category:"Occitan aerospace industry",eyebrow:"Mérignac · combat-aircraft design and assembly · 1929–1985",infoboxKicker:"Occitan aircraft manufacturer",infoboxTitle:"Dassault Aviation",
    lead:"Dassault Aviation is the combat-aircraft design and assembly house whose Mérignac tradition survives the Toulouse–Bordeaux evacuation and French partition. Its MD 450 and MD 452 projects establish Occitania's first indigenous jet generations, followed by the Super Mystère and Mirage families through 1985.",
    canon:"Marcel Bloch's 1929 company foundation is a pre-divergence historical anchor. Preservation of Dassault's Mérignac assembly tradition, the MD 450B and MD 452C line, Super Mystère B2, Mirage III C and E, Mirage F1 C, and Mirage 2000 C are fixed in-setting. The exact legal adoption of the Dassault name, ownership, nationalization settlement, factories, production totals, exports, and 1985 organization remain open.",
    sections:[
      {id:"foundation",title:"Bloch design inheritance",html:"<p>Marcel Bloch established his aircraft company in 1929. Prewar military designs and the Mérignac industrial base supplied the personnel, methods, and facilities inherited by the southern evacuation system.</p>"},
      {id:"evacuation",title:"Mérignac after partition",html:"<p>The Toulouse–Bordeaux evacuation preserves engineers, tooling, state factories, and the Mérignac assembly tradition south of the German partition. The company becomes a principal expression of Occitan technical sovereignty.</p>"},
      {id:"jets",title:"Ouragan and Mystère",html:"<p>The <a href='md-450b-ouragan.html'>MD 450B Ouragan</a> enters in 1951, followed by the <a href='md-452c-mystere-ii.html'>MD 452C Mystère II</a> and <a href='super-mystere-b2.html'>Super Mystère B2</a>. The sequence moves from first-generation jets to swept-wing and supersonic aircraft.</p>"},
      {id:"mirage",title:"Mirage families",html:"<p>Mirage III, Mirage F1, and Mirage 2000 provide interceptor, multirole, air-superiority, and digital fly-by-wire generations. Export and licensed-production work tie the company to the broader Latin aviation market.</p>"},
      occitanAircraftListSection([
        ["MD 450","MD 450B Ouragan","md-450b-ouragan.html","a"],
        ["MD 452","MD 452C Mystère II","md-452c-mystere-ii.html","a"],
        ["MD 460","Super Mystère B2","super-mystere-b2.html","a"],
        ["MD 550","Mirage III C","mirage-iii-c.html","a"],
        ["MD 550","Mirage III E","mirage-iii-e.html","a"],
        ["Mirage F1","Mirage F1 C","mirage-f1-c.html","a"],
        ["Mirage 2000","Mirage 2000 C","mirage-2000-c.html","a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Dassault Aviation is Occitania's principal combat-aircraft prime, supported by state factories, engine, electronics, weapons, test, and export institutions whose exact corporate boundaries remain open.</p>"}
    ],
    related:[{href:"occitan-combat-aircraft-lineage.html",kicker:"National aircraft registry",label:"Occitan Combat Aircraft Lineage"},{href:"md-450b-ouragan.html",kicker:"First indigenous jet",label:"MD 450B Ouragan"},{href:"mirage-2000-c.html",kicker:"1985 lineage endpoint",label:"Mirage 2000 C"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-military-aviation.html",kicker:"Regional aviation system",label:"Latin Military Aviation"}],
    facts:[["Founder","Marcel Bloch"],["Historical foundation","1929"],["Principal assembly center","Mérignac"],["First registered jet","MD 450B Ouragan · 1951"],["Principal postwar family","Mirage"],["1985 position","Principal Occitan combat-aircraft prime"]],
    primarySources:[{href:"https://timeline.dassault-aviation.com/en/foundations/",label:"Dassault Aviation — company and aircraft timeline"},{href:"https://www.dassault-aviation.com/en/passion/history/sites/merignac/",label:"Dassault Aviation — Mérignac site history"}],categories:["Dassault Aviation","Occitania","Aircraft manufacturers","Mérignac","Latin Bloc aviation"]
  })
});
