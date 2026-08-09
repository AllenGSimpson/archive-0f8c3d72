window.deepArticles = window.deepArticles || {};

const americanSupportTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Branch</th><th>Ships, 1985</th><th>Introduction</th><th>Reference full load</th><th>Role</th></tr></thead><tbody><tr><td><a href='american-major-fleet-auxiliaries.html'>Major fleet auxiliaries</a></td><td>42</td><td>1970–1985</td><td>18,000 t</td><td>Replenishment, repair, and mobile support</td></tr><tr><td><a href='avenger-class-mine-warfare-ship.html'>Avenger class</a></td><td>24</td><td>1970–1985</td><td>850 t</td><td>Mine warfare</td></tr><tr><td><a href='pegasus-class-missile-combatant.html'>Pegasus class</a></td><td>24</td><td>1970–1985</td><td>650 t</td><td>Corvette and missile-combatant duties</td></tr></tbody></table></div>";

Object.assign(window.deepArticles, {
  "american-fleet-support-force": americanNavalArticle({
    title:"United States fleet support force",
    category:"Naval logistics",
    landscape:americanFleetLandscape,
    lead:"The United States fleet support force was the auxiliary, mine-warfare, and small-combatant system sustaining the balanced fleet. In 1985 it included forty-two major replenishment and repair ships, twenty-four Avenger-class mine-warfare ships, and twenty-four Pegasus-class corvettes or missile combatants.",
    canon:"The forty-two-auxiliary, twenty-four-mine-warfare, and twenty-four-fast-combatant totals; class labels; 1970–1985 introduction bands; registered displacements, propulsion categories, hull-number ranges for Avenger and Pegasus, roles, and relationship with distant carrier and amphibious operations are established. Individual names, auxiliary subtype allocation, payloads, capacities, crews, builders, detailed commissioning dates, deployments, and service histories remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>The balanced fleet could concentrate carriers, battleships, cruisers, submarines, and amphibious forces only if fuel, aviation stores, ammunition, food, repairs, cleared approaches, and coastal protection moved with them. The support force joined large auxiliaries to specialized mine-warfare ships and small regional combatants.</p>"},
      {id:"branches",title:"Branches",html:americanSupportTable},
      {id:"auxiliaries",title:"Major auxiliaries",html:"<p>Forty-two <a href='american-major-fleet-auxiliaries.html'>major fleet auxiliaries</a> entered service between 1970 and 1985. The register uses an 18,000-tonne full-load reference and diesel or steam-turbine propulsion while leaving the division among oilers, stores ships, ammunition ships, repair ships, tenders, transports, and medical ships open.</p>"},
      {id:"mine",title:"Mine warfare",html:"<p>Twenty-four <a href='avenger-class-mine-warfare-ship.html'>Avenger-class</a> vessels protected ports, canal approaches, amphibious routes, anchorages, and access lanes. Mine warfare included survey, detection, classification, clearance, route marking, and repeated verification rather than a single passage through a field.</p>"},
      {id:"pegasus",title:"Fast combatants",html:"<p>Twenty-four <a href='pegasus-class-missile-combatant.html'>Pegasus-class</a> corvettes or missile craft supplied coastal and regional fighting power below the frigate level. They could patrol confined seas, protect bases and approaches, and reinforce larger formations close to shore.</p>"},
      {id:"carrier",title:"Carrier and submarine support",html:"<p>Nuclear propulsion reduced carrier and submarine demand for propulsion fuel but did not eliminate aviation fuel, weapons, food, spare parts, crew support, or repair. Conventional escorts and amphibious ships remained directly dependent on replenishment fuel.</p>"},
      {id:"amphibious",title:"Amphibious support",html:"<p>Landing operations required cleared approaches, fuel, ammunition, engineering stores, medical capacity, salvage, and repair. Mine-warfare ships opened routes; auxiliaries sustained the force offshore; small combatants protected local waters and bases.</p>"},
      {id:"infrastructure",title:"Hemispheric infrastructure",html:"<p>Home ports, the Canal Zone, Caribbean facilities, Pacific bases, merchant charters, and repair yards formed the fixed complement to the mobile support force. The register does not yet specify base hierarchy, tender assignments, charter rules, or command organization.</p>"},
      {id:"vulnerability",title:"Operational vulnerability",html:"<p>Loss of fuel, stores, repair capacity, or cleared access could immobilize a formation whose capital ships remained intact. Auxiliaries and mine-warfare ships therefore required escort, dispersal, route planning, and protected anchorages.</p>"}
    ],
    related:[{href:"american-major-fleet-auxiliaries.html",kicker:"Mobile logistics",label:"Major Fleet Auxiliaries"},{href:"avenger-class-mine-warfare-ship.html",kicker:"Mine countermeasures",label:"Avenger Class"},{href:"pegasus-class-missile-combatant.html",kicker:"Regional combatants",label:"Pegasus Class"},{href:"american-carrier-force.html",kicker:"Supported force",label:"American Carrier Force"},{href:"american-amphibious-force.html",kicker:"Supported force",label:"American Amphibious Force"}],
    facts:[["Major auxiliaries, 1985","42"],["Auxiliary reference full load","18,000 t"],["Mine-warfare ships","24 Avenger class"],["Fast combatants","24 Pegasus class"],["Introduction span","1970–1985"]]
  }),

  "american-major-fleet-auxiliaries": americanNavalArticle({
    title:"United States major fleet auxiliaries, 1970–1985",
    category:"Naval logistics",
    landscape:americanFleetLandscape,
    lead:"The United States major fleet auxiliaries were forty-two replenishment, repair, and support ships introduced between 1970 and 1985. Their 18,000-tonne reference category sustained American carrier, battleship, escort, submarine, and amphibious operations beyond fixed bases.",
    canon:"The forty-two-ship 1985 total, 1970–1985 introduction band, 18,000-tonne full-load reference, diesel-or-steam propulsion category, and replenishment-and-repair role are established. The division among oilers, ammunition ships, stores ships, repair ships, tenders, transports, medical ships, and other subtypes; names; hull numbers; capacities; dimensions; crews; builders; deployments; and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The force was built during the same period as nuclear carriers, nuclear cruisers, new destroyers and frigates, missile submarines, and the mature amphibious fleet. Large support ships allowed those formations to operate across the Atlantic, Pacific, Caribbean, and canal approaches without returning to a home yard after every consumption cycle.</p>"},
      {id:"register",title:"Registered force",html:"<p>Forty-two ships entered service between 1970 and 1985. The register assigns an 18,000-tonne full-load reference and diesel or steam-turbine propulsion to the combined category. It does not identify a single class or hull-number sequence.</p>"},
      {id:"functions",title:"Functions",html:"<p>The registered replenishment-and-repair role necessarily covered fuel, ammunition, food, spare parts, workshops, stores, personnel support, and recovery from machinery damage. The exact number of oilers, ammunition ships, stores ships, repair ships, tenders, transports, and medical ships remains open.</p>"},
      {id:"fleet",title:"Fleet operations",html:"<p>Auxiliaries supported carrier and battleship groups, destroyer and frigate screens, submarine tenders, amphibious forces, and dispersed bases. They could be assigned to mobile replenishment groups or staged through fixed facilities.</p>"},
      {id:"nuclear",title:"Nuclear fleet requirements",html:"<p>Nuclear carriers, cruisers, and submarines reduced demand for propulsion fuel aboard those hulls but continued to consume aviation fuel, weapons, stores, spares, and specialized maintenance. Their conventional escorts also required ship fuel.</p>"},
      {id:"protection",title:"Protection",html:"<p>Auxiliaries were high-value and comparatively vulnerable. Escorts, route security, air cover, submarine patrols, mine clearance, dispersal, and protected anchorages preserved their ability to sustain the combat fleet.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All forty-two counted in the major support total. Individual readiness, subtype, location, and maintenance condition remain unregistered.</p>"}
    ],
    related:[{href:"american-fleet-support-force.html",kicker:"Parent system",label:"United States Fleet Support Force"},{href:"american-carrier-force.html",kicker:"Supported force",label:"American Carrier Force"},{href:"american-amphibious-force.html",kicker:"Supported force",label:"United States Amphibious Force"},{href:"american-destroyer-frigate-force.html",kicker:"Escort protection",label:"American Destroyers and Frigates"}],
    facts:[["Ships, 1985","42"],["Introduction","1970–1985"],["Reference full load","18,000 t"],["Propulsion","Diesel or steam turbine"],["Registered role","Replenishment and repair"],["Subtype division","Open"]]
  }),

  "avenger-class-mine-warfare-ship": americanNavalArticle({
    title:"Avenger-class mine-warfare ship",
    category:"Warship class",
    landscape:americanFleetLandscape,
    lead:"The Avenger class was a twenty-four-ship American mine-warfare class introduced between 1970 and 1985. All twenty-four 850-tonne vessels remained active at the 1985 reference date, protecting ports, canal approaches, amphibious routes, and fleet access lanes.",
    canon:"The twenty-four-ship build and active total, 1970–1985 introduction band, 850-tonne full-load displacement, diesel-or-gas-turbine propulsion category, mine-warfare role, and MCM-001–MCM-024 registry are established. Personal names, exact propulsion by hull, dimensions, speed, detection and clearance equipment, weapons, crew, builders, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class accompanied the growth of the American amphibious and mobile-support fleets. Mine threats could close a port, canal approach, anchorage, or landing route without defeating the heavy fleet in open battle.</p>"},
      {id:"production",title:"Production and designation",html:"<p>Twenty-four ships entered service between 1970 and 1985. The registry identifies them as MCM-001 through MCM-024 and leaves personal names open.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 850 tonnes at full load. Propulsion is registered as diesel or gas turbine without assigning a plant to individual hulls. Dimensions, speed, sonar, remotely operated equipment, sweeping gear, weapons, and crew remain open.</p>"},
      {id:"operations",title:"Mine-warfare operations",html:"<p>Avenger ships surveyed approaches, detected and classified suspected mines, cleared or marked routes, and verified that traffic lanes remained usable. Operations often required repeated work after storms, enemy activity, or heavy traffic.</p>"},
      {id:"amphibious",title:"Amphibious and canal service",html:"<p>Mine clearance was required before landing ships, auxiliaries, and large combatants could use confined approaches safely. The Canal Zone and Caribbean bases made this a continuing hemispheric mission as well as a wartime assault task.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twenty-four ships remained active. Individual readiness, equipment fit, basing, and regional assignment are not registered.</p>"}
    ],
    related:[{href:"american-fleet-support-force.html",kicker:"Parent system",label:"United States Fleet Support Force"},{href:"american-amphibious-force.html",kicker:"Cleared approaches",label:"United States Amphibious Force"},{href:"panama.html",kicker:"Canal approaches",label:"Panama"},{href:"pegasus-class-missile-combatant.html",kicker:"Small-combatant partner",label:"Pegasus Class"}],
    facts:[["Type","Mine-warfare ship"],["Built and active","24"],["Introduced","1970–1985"],["Full load","850 t"],["Propulsion","Diesel or gas turbine"],["Hull numbers","MCM-001–MCM-024"]]
  }),

  "pegasus-class-missile-combatant": americanNavalArticle({
    title:"Pegasus-class missile combatant",
    category:"Warship class",
    landscape:americanFleetLandscape,
    lead:"The Pegasus class was a twenty-four-ship American corvette and missile-combatant class introduced between 1970 and 1985. All twenty-four 650-tonne vessels remained active for coastal patrol, base defense, confined-water combat, and regional presence below the frigate level.",
    canon:"The twenty-four-ship build and active total, 1970–1985 introduction band, 650-tonne full-load displacement, diesel-or-gas-turbine propulsion category, corvette and missile-combatant role, and PC-001–PC-024 registry are established. Personal names, exact propulsion by hull, dimensions, speed, missile and gun fits, sensors, crew, builders, basing, deployments, and individual histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied fighting strength between patrol craft and frigates. Its scale suited Caribbean passages, canal approaches, coastal patrol, base defense, and other confined-water duties where a large ocean escort was unnecessary.</p>"},
      {id:"production",title:"Production and designation",html:"<p>Twenty-four ships entered service between 1970 and 1985. The registry identifies them as PC-001 through PC-024 and leaves personal names open.</p>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 650 tonnes at full load. Propulsion is registered as diesel or gas turbine without assigning a plant to individual hulls. Dimensions, speed, missiles, guns, sensors, electronic warfare equipment, and crew remain open.</p>"},
      {id:"missions",title:"Missions",html:"<p>Pegasus ships patrolled coasts and island passages, protected bases and anchorages, escorted local traffic, and supplied rapid missile response in confined waters. They could reinforce larger forces but did not replace frigates in sustained ocean escort.</p>"},
      {id:"hemisphere",title:"Hemispheric employment",html:"<p>The American security corridor through the Caribbean and Central America created persistent demand for small ships able to appear at short notice without committing a carrier group or major amphibious formation.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All twenty-four ships remained active. Individual readiness, weapon fit, basing, and patrol assignment remain unregistered.</p>"}
    ],
    related:[{href:"american-fleet-support-force.html",kicker:"Parent system",label:"United States Fleet Support Force"},{href:"avenger-class-mine-warfare-ship.html",kicker:"Access partner",label:"Avenger Class"},{href:"american-hemisphere.html",kicker:"Operating region",label:"American Hemisphere"},{href:"american-destroyer-frigate-force.html",kicker:"Ocean escorts",label:"American Destroyers and Frigates"}],
    facts:[["Type","Corvette / missile combatant"],["Built and active","24"],["Introduced","1970–1985"],["Full load","650 t"],["Propulsion","Diesel or gas turbine"],["Hull numbers","PC-001–PC-024"]]
  })
});
