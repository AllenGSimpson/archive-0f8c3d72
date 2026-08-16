(function () {
  const articles = window.deepArticles || {};
  const a = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
  const e = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

  const sectionById = (article,id) => article.sections.find(section => section.id === id);
  const earlier = (article,ids=["source-status"]) => ({
    id:"earlier-assessment",title:"Earlier source assessment",
    html:ids.map(id => sectionById(article,id)?.html || "").join("")+`<p>The attributed assessment is retained as editorial history. Its program-status conclusion was superseded by the consolidated Aerospace Armaments Reference.${a}</p>`
  });
  const omit = (article,ids) => article.sections.filter(section => !ids.includes(section.id));
  const replace = (sections,id,replacement) => sections.map(section => section.id === id ? replacement : section);

  const fixedTypes = {
    "f-104a-starfighter":{
      lead:`The <strong>F-104A Starfighter</strong> entered Aerospace Command service in 1958 as its Mach 2 point interceptor. First flown in 1956, the Lockheed type combined a 2,260 km/h maximum speed with a 680 km combat radius, 17,700 m service ceiling, one 20×102 mm cannon, and four missiles.${a}`,
      canon:`F-104 flight in 1956, F-104A introduction in 1958, Mach 2 point-interceptor mission, 2,260 km/h maximum speed, 680 km combat radius, 17,700 m service ceiling, cannon, and four-missile battery are fixed. Lockheed and J79 design lineage are retained; exact engine mark, dimensions, production, units, bases, operations, losses, variants, upgrades, and retirement remain open.${a}`,
      year:"1958",mission:"Mach 2 point interceptor",speed:"2,260 km/h",radius:"680 km",ceiling:"17,700 m",load:"One 20×102 mm cannon · four missiles",
      development:`<p>Lockheed developed the F-104 family around a slender fuselage, thin short wings, J79-class power, and a cannon-centered layout. The aircraft first flew in 1956 and F-104A entered Aerospace Command service in 1958.${a}</p><p>Clarence “Kelly” Johnson's detailed design role, exact prototype chronology, engine blocks, and production changes remain retained historical context or open rather than additional fixed register fields.${e}</p>`,
      facts:[["Register status","Fixed operational aircraft"],["Manufacturer","Lockheed"],["First flight","1956"],["Introduction","1958"],["Service","Aerospace Command · later Aerospace Force"],["Mission","Mach 2 point interceptor"],["Maximum speed","2,260 km/h"],["Combat radius","680 km"],["Service ceiling","17,700 m"],["Armament","One 20×102 mm cannon · four missiles"]]
    },
    "nf-104a-starfighter":{
      lead:`The <strong>NF-104A Starfighter</strong> entered the Aerospace Force register in 1963 as a rocket-assisted aerospace trainer. Its 2,300 km/h maximum speed, 520 km radius, 36,800 m zoom ceiling, training instrumentation, and reaction controls placed pilots between conventional jet procedure and the reusable-spacecraft program.${a}`,
      canon:`The NF-104A identity, 1963 introduction, rocket-assisted aerospace-training mission, 2,300 km/h maximum speed, 520 km radius, 36,800 m zoom ceiling, training instrumentation, and reaction controls are fixed. The historical Lockheed conversion foundation is retained; exact airframes, rocket and reaction-control equipment, units, sorties, accidents, upgrades, and retirement remain open.${a}`,
      year:"1963",mission:"Rocket-assisted aerospace trainer",speed:"2,300 km/h",radius:"520 km",ceiling:"36,800 m zoom ceiling",load:"Training instrumentation · reaction controls",
      development:`<p>NF-104A adapted the Starfighter foundation with rocket assistance, reaction controls, and instrumentation for low-dynamic-pressure training. Its governing purpose and 1963 register are fixed.${a}</p><p>Supplemental rocket model, propellant, thruster layout, wing-tip changes, plumbing, inertial equipment, exact cockpit arrangement, and conversion count remain retained historical context or open.${e}</p>`,
      facts:[["Register status","Fixed training aircraft"],["Designation","NF-104A Starfighter"],["Introduction","1963"],["Service","United States Aerospace Force"],["Mission","Rocket-assisted aerospace training"],["Maximum speed","2,300 km/h"],["Radius","520 km"],["Zoom ceiling","36,800 m"],["Equipment","Training instrumentation · reaction controls"],["Combat role","None established"]]
    },
    "f-108a-rapier":{
      lead:`The <strong>F-108A Rapier</strong> entered Aerospace Force service in 1966 as a J93-powered long-range Mach 3 strategic interceptor. First flown as XF-108 in 1961 and developed in concert with B-70 systems, it carried six long-range missiles and extended interception far beyond the F-104 point-defense radius.${a}`,
      canon:`XF-108 first flight in 1961, F-108A service from 1966, J93 propulsion, North American/B-70 development relationship, long-range strategic-interceptor mission, 3,190 km/h maximum speed, 1,850 km combat radius, 24,400 m service ceiling, and six-missile battery are fixed. Detailed sensors, production, units, bases, operations, losses, variants, and retirement remain open.${a}`,
      year:"1966",mission:"Long-range strategic interceptor",speed:"3,190 km/h",radius:"1,850 km",ceiling:"24,400 m",load:"Six long-range missiles",
      development:`<p>North American developed XF-108 in concert with B-70 systems around J93 power, high-temperature structures, sensors, and sustained Mach 3 operation. XF-108 first flew in 1961 and entered service as F-108A in 1966.${a}</p><p>Prototype chronology within those boundaries, crew arrangement, radar, inlet and engine blocks, production form, and the exact division of common work with B-70 remain open.${a}</p>`,
      facts:[["Register status","Fixed operational aircraft"],["Manufacturer","North American Aviation"],["First flight","1961"],["Introduction","1966"],["Service","United States Aerospace Force"],["Mission","Long-range Mach 3 strategic interceptor"],["Maximum speed","3,190 km/h"],["Combat radius","1,850 km"],["Service ceiling","24,400 m"],["Armament","Six long-range missiles"],["Engine family","J93"]]
    },
    "r-11a-blackbird":{
      lead:`The <strong>R-11A Blackbird</strong> entered Aerospace Force service in 1967 as a Mach 3 strategic-reconnaissance aircraft. Its registered 3,540 km/h maximum speed, 2,600 km combat radius, 25,900 m service ceiling, and camera, radar, and signals payload made information collection the reconnaissance counterpart to Blackbird interception.${a}`,
      canon:`The R-11A Blackbird identity, 1967 introduction, Mach 3 strategic-reconnaissance mission, 3,540 km/h maximum speed, 2,600 km combat radius, 25,900 m service ceiling, and camera, radar, and signals-sensor payload are fixed. Lockheed's titanium-intensive Blackbird foundation is retained; exact sensors, engines, dimensions, production, units, bases, operations, losses, variants, upgrades, and retirement remain open.${a}`,
      year:"1967",mission:"Mach 3 strategic reconnaissance",speed:"3,540 km/h",radius:"2,600 km",ceiling:"25,900 m",load:"Cameras · radar · signals sensors",
      development:`<p>R-11A retained the Lockheed Blackbird foundation: a slender high-temperature airframe, chine lift, variable inlets, specialized fuels and seals, and systems designed for sustained Mach 3 heating. The authoritative service designation and 1967 introduction are fixed.${a}</p><p>Exact development ancestry, prototype sequence, engine and inlet blocks, materials distribution, sensor installations, and production chronology remain open.${a}</p>`,
      facts:[["Register status","Fixed operational aircraft"],["Manufacturer","Lockheed"],["Introduction","1967"],["Service","United States Aerospace Force"],["Mission","Mach 3 strategic reconnaissance"],["Maximum speed","3,540 km/h"],["Combat radius","2,600 km"],["Service ceiling","25,900 m"],["Payload","Cameras · radar · signals sensors"],["Interceptor relative","F-12A Blackbird"]]
    },
    "f-12a-blackbird":{
      lead:`The <strong>F-12A Blackbird</strong> entered Aerospace Force service in 1970 as a Mach 3 long-range strategic interceptor and became a major operational Teen-Series type. Its 3,400 km/h maximum speed, 1,800 km combat radius, 24,800 m service ceiling, and four long-range missiles made it the practical patrol counterpart to the more specialized F-13.${a}`,
      canon:`The F-12 Aerospace Force assignment, F-12A Blackbird identity, 1970 introduction, major operational status, Mach 3 strategic-interceptor mission, 3,400 km/h maximum speed, 1,800 km combat radius, 24,800 m service ceiling, and four-missile battery are fixed. Lockheed/YF-12 ancestry is retained; engines, detailed sensors, dimensions, production, units, bases, operations, losses, upgrades, and retirement remain open.${a}`,
      year:"1970",mission:"Mach 3 long-range strategic interceptor",speed:"3,400 km/h",radius:"1,800 km",ceiling:"24,800 m",load:"Four long-range missiles",
      development:`<p>F-12A retained the historical YF-12 interceptor foundation within the Blackbird family: high-temperature structure, variable inlets, a dedicated interception system, a second crew position, and internal missile carriage. It entered Aerospace Force service in 1970.${a}${e}</p><p>The related <a href='r-11a-blackbird.html'>R-11A</a> carried reconnaissance sensors while F-12A carried the long-range interception system. Exact prototype genealogy, radar, engines, and production blocks remain open.${a}</p>`,
      facts:[["Register status","Fixed major operational type"],["Manufacturer","Lockheed"],["Introduction","1970"],["Service","United States Aerospace Force"],["Mission","Mach 3 long-range strategic interceptor"],["Maximum speed","3,400 km/h"],["Combat radius","1,800 km"],["Service ceiling","24,800 m"],["Armament","Four long-range missiles"],["Patrol successor","F-13 does not replace F-12 patrol role"]]
    }
  };

  for (const [slug,cfg] of Object.entries(fixedTypes)) {
    const article = articles[slug];
    if (!article) continue;
    let sections = omit(article,["source-status"]);
    sections = replace(sections,"development",{id:"development",title:"Design lineage",html:cfg.development});
    sections = replace(sections,"performance",{
      id:"performance",title:"Registered performance",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>${cfg.year}</td></tr><tr><th>Mission</th><td>${cfg.mission}</td></tr><tr><th>Maximum speed</th><td>${cfg.speed}</td></tr><tr><th>Combat radius</th><td>${cfg.radius}</td></tr><tr><th>Ceiling</th><td>${cfg.ceiling}</td></tr><tr><th>Standard armament or equipment</th><td>${cfg.load}</td></tr></tbody></table></div><p>The table follows the consolidated American strategic-air register.${a}</p>`
    });
    articles[slug] = {
      ...article,
      lead:cfg.lead,
      canon:cfg.canon,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The aircraft's identity, introduction, mission, headline performance, and registered armament or equipment are fixed in the consolidated Aerospace Armaments Reference.${a}</p><p>The earlier assessment below predated that register and is retained as editorial history.${a}</p>`},
        earlier(article),
        ...sections
      ],
      facts:cfg.facts
    };
  }

  const f13 = articles["f-13"];
  if (f13) {
    let sections = omit(f13,["source-status"]);
    sections = replace(sections,"requirement",{
      id:"requirement",title:"Requirement",html:`<p>F-13 was the Aerospace Force's small operational and research fleet for combined-cycle hypersonic and near-space interception. It took off conventionally, passed from turbine to ramjet propulsion, added rocket thrust for the final climb, and recovered on a runway without achieving orbit.${a}</p><p>The mission sat above F-12's practical Mach 3 patrol regime and below the O-series stable-orbit mission. The accepted aircraft name and final block details remain open.${a}</p>`
    });
    sections = replace(sections,"performance",{
      id:"performance",title:"Registered performance",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Sustained airbreathing speed</th><td>Approximately Mach 3.5–4</td></tr><tr><th>Short-duration dash</th><td>Approximately Mach 4.5</td></tr><tr><th>Rocket-assisted operating region</th><td>Approximately 80–100 km</td></tr><tr><th>Takeoff and recovery</th><td>Conventional runway</td></tr><tr><th>Orbital capability</th><td>None</td></tr><tr><th>Service scale</th><td>Small operational and research fleet</td></tr></tbody></table></div><p>The figures and disposition follow the consolidated Teen-Series register.${a}</p>`
    });
    articles["f-13"] = {
      ...f13,
      lead:`The <strong>F-13</strong> was the Aerospace Force's combined-cycle hypersonic and near-space interceptor, operated as a small service and research fleet within the Teen Series. It linked XF-103 airbreathing research, X-15 rocket and reaction-control practice, and later reusable-spaceflight work without itself achieving orbit.${a}`,
      canon:`The F-13 designation and Aerospace Force assignment, small operational/research disposition, turbine–ramjet–rocket sequence, runway flight cycle, approximately Mach 3.5–4 sustained speed, Mach 4.5 dash, 80–100 km rocket-assisted missions, F-12 patrol relationship, and place between XF-103 and the O-series are fixed. The aircraft's public name, final block details, dates, manufacturer beyond the retained Republic lead, exact engines, dimensions, weapons, sensors, units, bases, operations, losses, and retirement remain open.${a}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>F-13 is a fixed Teen-Series program rather than a merely proposed designation. Its combined-cycle propulsion sequence, mature performance envelope, near-space mission, and small operational/research fleet are established.${a}</p><p>The earlier assessment below predated that consolidated entry and is retained as editorial history.${a}</p>`},
        earlier(f13),
        ...sections
      ],
      facts:[["Register status","Fixed small operational/research fleet"],["Service","United States Aerospace Force"],["Designation","F-13 · public name open"],["Mission","Combined-cycle hypersonic and near-space interception"],["Propulsion","Turbine · ramjet · rocket"],["Sustained speed","Approximately Mach 3.5–4"],["Dash speed","Approximately Mach 4.5"],["Rocket-assisted region","Approximately 80–100 km"],["Orbital capability","None"],["Patrol counterpart","F-12"],["Successor","F-19"]]
    };
  }

  const f19 = articles["f-19"];
  if (f19) {
    let sections = omit(f19,["source-status","operations","lineage"]);
    sections = replace(sections,"requirement",{
      id:"requirement",title:"Requirement",html:`<p>F-19 was the mature Mach 5-class boundary-of-space interceptor in the Aerospace Force branch of the Teen Series. It used operational hydrogen infrastructure and the F-13 combined-cycle school to defend ascent, descent, and suborbital corridors below stable orbit.${a}</p><p>The aircraft formed a small elite force. Its accepted public name and final block details remain open.${a}</p>`
    });
    sections = replace(sections,"structure",{
      id:"structure",title:"Thermal structure",html:`<p>F-19 used high-temperature dark-metal finishes, protected leading edges, limited glazing, and structure designed for sustained hypersonic heating. Its spear nose, broad chines, cranked delta, canards, flattened paired compression inlet, belly engine box, and twin canted tails formed the fixed external grammar.${a}</p><p>Exact alloys, coatings, skin gauges, internal frames, structural limits, inspection intervals, and fatigue life remain open.${a}</p>`
    });
    sections = replace(sections,"performance",{
      id:"performance",title:"Registered performance",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Sustained speed</th><td>Approximately Mach 4.5</td></tr><tr><th>Dash speed</th><td>Above Mach 5</td></tr><tr><th>Normal operating altitude</th><td>Approximately 30–37 km</td></tr><tr><th>Higher trajectories</th><td>Rocket-assisted</td></tr><tr><th>Takeoff and recovery</th><td>Runway</td></tr><tr><th>Orbital capability</th><td>None</td></tr><tr><th>Service scale</th><td>Small elite force</td></tr></tbody></table></div><p>The envelope and disposition follow the consolidated Teen-Series register.${a}</p>`
    });
    articles["f-19"] = {
      ...f19,
      lead:`The <strong>F-19</strong> was the mature Aerospace Force Mach 5-class boundary-of-space interceptor. A small elite force used liquid-hydrogen combined-cycle propulsion, rocket assistance, internal weapons, and a fixed hypersonic configuration to police the atmospheric road to orbit.${a}`,
      canon:`The F-19 designation and Aerospace Force assignment, boundary-of-space mission, small elite disposition, hydrogen combined-cycle and rocket-assisted propulsion, approximately Mach 4.5 sustained speed, above-Mach-5 dash, normal 30–37 km operating band, spear nose, chines, cranked delta, canards, paired compression inlet, belly engine box, canted tails, internal weapons, and relationship to O-7 Zenith are fixed. Public name, final block details, manufacturer, dates, exact systems, quantities, units, operations, losses, and retirement remain open.${a}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>F-19 is a fixed Teen-Series aircraft and small elite operational force. Its performance, propulsion, external configuration, internal carriage, and boundary below stable orbit are established.${a}</p><p>The earlier assessments below predated the consolidated register and are retained as editorial history.${a}</p>`},
        earlier(f19,["source-status","operations","lineage"]),
        ...sections,
        {id:"operations",title:"Operational doctrine",html:`<p>F-19 defended the atmospheric road to space. Ground and orbital sensors projected a target corridor; the aircraft launched, accelerated through turbine and ramjet regimes, and used rocket assistance when the meeting geometry lay above its normal 30–37 km band.${a}</p><p>It could engage high-altitude aircraft, reconnaissance platforms, missile carriers, boost-glide systems, and spacecraft during ascent or descent. It could not chase a target already established in stable orbit; that mission belonged to <a href='project-zenith.html'>O-7 Zenith</a> and later orbital forces.${a}</p>`},
        {id:"lineage",title:"Technical lineage",html:`<p><a href='f-13.html'>F-13</a> supplied combined-cycle and near-space interception practice. <a href='b-70a-valkyrie.html'>B-70A</a> supplied compression-lift, canard, hot-structure, and lifting-centerbody experience. O-series operations supplied reusable reentry, reaction control, orbital navigation, and hydrogen infrastructure.${a}</p><p>F-19 centerbody, inlet, thermal, internal-carriage, and interception work then contributed to the closed military O-7 Zenith branch.${a}</p>`}
      ],
      facts:[["Register status","Fixed small elite force"],["Service","United States Aerospace Force"],["Designation","F-19 · public name open"],["Mission","Boundary-of-space interception"],["Propulsion","Liquid-hydrogen combined cycle · rocket assistance"],["Sustained speed","Approximately Mach 4.5"],["Dash speed","Above Mach 5"],["Normal altitude","Approximately 30–37 km"],["Weapons","Internal carriage"],["Orbital capability","None"],["Orbital counterpart","O-7 Zenith"]]
    };
  }
})();
