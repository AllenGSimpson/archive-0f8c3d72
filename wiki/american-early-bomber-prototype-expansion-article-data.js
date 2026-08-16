(function () {
  const articles = window.deepArticles || {};
  const a = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
  const e = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

  const relatedOnce = (existing, additions) => {
    const seen = new Set();
    return [...(existing || []), ...additions].filter(item => {
      if (!item || seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    });
  };

  const earlierAssessment = article => {
    const section = article.sections.find(item => item.id === "source-status");
    return section ? {...section,id:"earlier-assessment",title:"Earlier source assessment"} : null;
  };

  const xb43 = articles["xb-43-jetmaster"];
  if (xb43) {
    const earlier = earlierAssessment(xb43);
    articles["xb-43-jetmaster"] = {
      ...xb43,
      eyebrow:"United States · first all-jet bomber experiment · late 1940s",
      lead:`The <strong>Douglas XB-43 Jetmaster</strong> was the first American all-jet bomber experiment in the consolidated postwar register. Developed in the late 1940s from the XB-42 Mixmaster lineage, it remained a research aircraft and established neither the production bomber nor the aerodynamic form that the United States later adopted.${a}`,
      canon:`The late-1940s position, first-all-jet-bomber status, experimental function, and research-only disposition are fixed by the consolidated Aerospace Armaments Reference. Douglas manufacture, XB-42 ancestry, buried twin-turbojet arrangement, and its place before B-45 and B-47 remain incorporated reconstruction; exact dates, airframe count, engines, specifications, tests, and final disposition are open.${a}${e}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes XB-43 as the first American all-jet bomber experiment and places it in the late 1940s. It also fixes the limiting result: Jetmaster was research only, not an operational bomber type.${a}</p><p>This later source supersedes the earlier assessment that XB-43 itself was not fixed in the divergent chronology. Details beyond the four registered boundaries remain incorporated or open.${a}</p>`},
        earlier,
        {id:"origin",title:"From Mixmaster to Jetmaster",html:`<p>The incorporated development history derives XB-43 from <a href='douglas-aircraft.html'>Douglas</a>'s XB-42 Mixmaster. Removing the piston installation and aft propellers made room for two early turbojets buried in the fuselage, with side inlets and tail exhausts.${e}</p><p>Using an existing airframe lineage reduced the number of new variables confronting the first jet-bomber experiment. It also meant that Jetmaster inherited a form conceived before jet propulsion had established its own preferred bomber architecture.${e}</p>`},
        {id:"propulsion",title:"Propulsion installation",html:`<p>The installation required more than mounting two engines. Inlet ducts, engine access, fuel supply, starting, cockpit indications, tail exhausts, fire protection, and operation after one engine failed all had to function in a large aircraft.${e}</p><p>J35-class axial-flow practice is compatible with the program, but the exact engines, installation sequence, thrust, and modification history remain open.${e}</p>`},
        {id:"research",title:"Research questions",html:`<p>Jetmaster could answer whether an American all-jet bomber was practicable without deciding the correct production design. Its useful test field included acceleration, asymmetric thrust, fuel consumption, high-altitude engine behavior, braking, maintenance access, and the cockpit procedures needed for multiple turbines.${e}</p><p>Named tests, measured results, pilots, locations, sortie counts, bombing equipment, and reconnaissance trials are not established.${a}</p>`},
        {id:"generation",title:"First jet-bomber generation",html:`<p>XB-43 preceded the competitive generation represented by <a href='b-45-tornado.html'>B-45 Tornado</a>, <a href='xb-46.html'>XB-46</a>, <a href='b-47-stratojet.html'>B-47 Stratojet</a>, and <a href='xb-48.html'>XB-48</a>.${a}</p><p>Those programs tested straight and swept wings, different engine groupings, and different balances between technical risk and speed. Jetmaster's importance lay in opening that comparison, not in supplying the eventual answer.${e}</p>`},
        {id:"industry",title:"Industrial significance",html:`<p>A flying twin-engine jet bomber forced airframe and engine organizations to solve installation, inspection, spares, instruments, and operating-procedure problems at a scale beyond a single-engine fighter. The research aircraft therefore contributed to the industrial school from which later bomber programs could draw.${e}</p><p>It did not create the <a href='american-jet-engine-industry.html'>American jet-engine industry</a> by itself. Engine firms, federal laboratories, service procurement, and several competing airframes developed the field together.${e}</p>`},
        {id:"outcome",title:"Research-only outcome",html:`<p>The fixed record ends XB-43 as a research program. B-45 supplied the first small operational bridge, while B-47 established the swept-wing production school and the strategic emphasis on speed.${a}</p><p>Calling Jetmaster research-only is not equivalent to calling it technically useless. Its success criterion was the evidence it produced before the production form had been chosen.${e}</p>`},
        {id:"limits",title:"Open technical record",html:`<p>First-flight and retirement dates within the late-1940s boundary, airframe count, dimensions, mass, crew, engines, performance, defensive armament, bomb capacity, test organizations, individual flights, modifications, accidents, survivors, and museum disposition remain open.</p>`}
      ].filter(Boolean),
      related:relatedOnce(xb43.related,[
        {href:"xb-46.html",kicker:"Straight-wing competitor",label:"Convair XB-46"},
        {href:"xb-48.html",kicker:"Six-engine competitor",label:"Martin XB-48"},
        {href:"american-strategic-bomber-development.html",kicker:"Program context",label:"American Strategic-Bomber Development"}
      ]),
      facts:[["Register status","Fixed experimental program"],["Country","United States"],["Manufacturer","Douglas Aircraft"],["Period","Late 1940s"],["Distinction","First American all-jet bomber experiment"],["Disposition","Research only"],["Working ancestry","XB-42 Mixmaster"],["Exact airframe count","Open"]]
    };
  }

  const xb46 = articles["xb-46"];
  if (xb46) {
    const earlier = earlierAssessment(xb46);
    articles["xb-46"] = {
      ...xb46,
      lead:`The <strong>Convair XB-46</strong> was the sleek straight-wing prototype competitor of the early-1950s American jet-bomber generation. It remained experimental as the swept-wing B-47 established the production and doctrinal standard.${a}`,
      canon:`The XB-46 identity, early-1950s period, straight-wing competitive role, prototype status, and non-production outcome are fixed by the consolidated Aerospace Armaments Reference. Convair manufacture and detailed configuration remain incorporated reconstruction; exact dates, engines, specifications, crew, trials, costs, and disposition are open.${a}${e}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes XB-46 as an early-1950s sleek straight-wing prototype competitor. It is no longer appropriate to describe the program itself as merely an optional reconstruction.${a}</p><p>The source does not canonize a full historical specification or test history. Those particulars remain incorporated or open even though the aircraft's place in the bomber ladder is fixed.${a}</p>`},
        earlier,
        {id:"competition",title:"First-generation competition",html:`<p>XB-46 belonged to the first American jet-bomber comparison alongside B-45, B-47, and XB-48.${a}</p><p>The field had not yet settled whether a production bomber should refine the straight-wing form or accept the greater aerodynamic and structural risk of sweep. Convair's proposal represented the refined conventional answer: reduce avoidable novelty while learning to operate a large multi-engine jet.${e}</p>`},
        {id:"configuration",title:"Straight-wing arrangement",html:`<p>The incorporated configuration uses a long narrow fuselage, conventional tail, four early turbojets beneath a straight wing, and a crew concentrated forward. That arrangement kept the aircraft legible to organizations coming from piston bombers while jet propulsion changed fuel, runway, maintenance, and engine-out demands.${e}</p><p>Nacelle geometry, undercarriage, defensive equipment, bombing system, and exact engine marks remain open.${a}</p>`},
        {id:"evaluation",title:"Prototype evaluation",html:`<p>The prototype could be compared for takeoff, landing, cruise, handling, engine behavior, maintenance access, and bombing-system integration. Its role was competitive evidence, not merely a flying display.${e}</p><p>The current record does not assign trials, measured results, evaluating units, pilots, bases, or flight totals.${a}</p>`},
        {id:"risk",title:"Risk and development logic",html:`<p>A straight wing reduced aerodynamic uncertainty but could not erase the strategic pressure for speed. The competing judgments concerned how much performance could be gained, how quickly it could be made operational, and whether early engines and manufacturing practice could support the more advanced arrangement.${e}</p><p>XB-46 demonstrated one answer to that trade, while B-47 ultimately defined the accepted school.${e}</p>`},
        {id:"outcome",title:"Prototype outcome",html:`<p>XB-46 did not enter production.${a}</p><p>The B-47's swept wing, podded engines, and high-speed organization proved more influential than further refinement of the conventional form.${e}</p><p>Convair's bomber work did not end with the prototype. The company later returned with the radically different <a href='b-58a-hustler.html'>B-58A Hustler</a>, the first mature American high-supersonic Schnellbomber.${a}</p>`},
        {id:"historical-place",title:"Place in the bomber lineage",html:`<p>The aircraft is significant as a documented alternative inside an unsettled competition. It shows that the B-47 form was selected from rival architectures rather than appearing as the inevitable shape of an American jet bomber.${e}</p>`},
        {id:"limits",title:"Open prototype record",html:`<p>First-flight and cancellation dates within the early-1950s boundary, airframe count, dimensions, mass, engines, performance, crew, armament, bomb load, evaluation results, program cost, assigned organizations, modifications, damage, surviving material, and disposal remain open.</p>`}
      ].filter(Boolean),
      related:relatedOnce(xb46.related,[
        {href:"xb-43-jetmaster.html",kicker:"Experimental prologue",label:"Douglas XB-43 Jetmaster"},
        {href:"b-47-stratojet.html",kicker:"Winning architecture",label:"B-47 Stratojet"},
        {href:"american-strategic-bomber-development.html",kicker:"Program context",label:"American Strategic-Bomber Development"}
      ]),
      facts:[["Register status","Fixed prototype program"],["Country","United States"],["Manufacturer","Convair"],["Period","Early 1950s"],["Configuration","Sleek straight-wing competitor"],["Disposition","Prototype; no production successor"],["Competition winner","B-47 Stratojet"],["Detailed test record","Open"]]
    };
  }

  const xb48 = articles["xb-48"];
  if (xb48) {
    const earlier = earlierAssessment(xb48);
    articles["xb-48"] = {
      ...xb48,
      lead:`The <strong>Martin XB-48</strong> was the six-engine conventional prototype competitor in the early-1950s American jet-bomber field. It tested whether numerous available turbojets and a lower-risk straight-wing arrangement could meet the requirement before the B-47 school prevailed.${a}${e}`,
      canon:`The XB-48 identity, early-1950s position, six-engine conventional configuration, prototype role, and non-production outcome are fixed by the consolidated Aerospace Armaments Reference. Martin manufacture and detailed arrangement remain incorporated reconstruction; engines, specifications, crew, armament, trials, costs, and final disposition are open.${a}${e}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes XB-48 as an early-1950s six-engine conventional prototype competitor. This later entry supersedes the older assessment that the divergent program itself was unfixed.${a}</p><p>Only the broad program boundary is canonical. Historical-looking specifications and a detailed service record cannot be imported automatically.${a}</p>`},
        earlier,
        {id:"requirement",title:"Why six engines",html:`<p>The six-engine arrangement reflected the limited thrust available from early American turbojets. Meeting bomber takeoff, climb, and payload demands required either many existing engines or a delay for larger individual engines.${e}</p><p>XB-48 thus records a propulsion constraint as much as an aerodynamic choice. The same industrial problem later motivated the four-large-engine <a href='xb-56.html'>XB-56</a> experiments.${e}</p>`},
        {id:"configuration",title:"Conventional arrangement",html:`<p>The incorporated airframe placed six engines under a straight wing and retained a conventional tail. Closely grouped engines created work in nacelle access, cooling, fuel distribution, exhaust interaction, vibration, and engine-out control.${e}</p><p>Landing gear, exact nacelle grouping, crew stations, defensive equipment, radar, and engine marks remain open.${a}</p>`},
        {id:"testing",title:"Comparative test role",html:`<p>XB-48 tested whether a conventional wing and numerous engines could produce an acceptable bomber with less development risk than Boeing's swept design. The prototype could generate useful data even if it did not win production.${e}</p><p>Test sites, pilots, individual flights, measured results, failures, and modifications are not established.${a}</p>`},
        {id:"industrial",title:"Martin's large-jet experience",html:`<p>The program gave <a href='martin-aircraft.html'>Martin Aircraft</a> experience integrating multiple turbines, fuel and control systems, a bomber structure, and a large-aircraft test organization. Those capabilities could survive a lost competition even when the airframe did not.${e}</p><p>No specific later transfer, contract, or production facility is fixed by the current register.${a}</p>`},
        {id:"comparison",title:"Comparison with B-47",html:`<p>B-47 made swept-wing performance and podded engines the organizing principle of the new bomber school. XB-48 offered a more conservative route built around the engines and manufacturing confidence already available.${e}</p><p>The production decision therefore distinguished two development strategies, not a flying aircraft from an impossible one.${e}</p>`},
        {id:"outcome",title:"Prototype outcome",html:`<p>XB-48 remained a prototype and did not generate an operational successor. Its place in the register is the conventional six-engine alternative against which the B-47 revelation can be understood.${a}</p>`},
        {id:"limits",title:"Open prototype record",html:`<p>First-flight and cancellation dates within the early-1950s boundary, airframe count, dimensions, mass, engines, performance, crew, armament, bomb load, test organizations, individual flights, damage, costs, surviving components, and disposal remain open.</p>`}
      ].filter(Boolean),
      related:relatedOnce(xb48.related,[
        {href:"xb-43-jetmaster.html",kicker:"Experimental prologue",label:"Douglas XB-43 Jetmaster"},
        {href:"xb-56.html",kicker:"Larger-engine comparison",label:"Boeing XB-56"},
        {href:"american-strategic-bomber-development.html",kicker:"Program context",label:"American Strategic-Bomber Development"}
      ]),
      facts:[["Register status","Fixed prototype program"],["Country","United States"],["Manufacturer","Martin Aircraft"],["Period","Early 1950s"],["Configuration","Conventional straight wing · six engines"],["Disposition","Prototype; no production successor"],["Competition winner","B-47 Stratojet"],["Detailed test record","Open"]]
    };
  }

  const xb55 = articles["xb-55"];
  if (xb55) {
    const earlier = earlierAssessment(xb55);
    articles["xb-55"] = {
      ...xb55,
      lead:`The <strong>Boeing XB-55</strong> was the turboprop range-and-payload alternative in the early American strategic-bomber debate. The project was canceled before service and produced no operational force; the fixed record allows no more than one late demonstrator.${a}`,
      canon:`The XB-55 identity, Boeing origin, turboprop range-and-payload purpose, cancellation before service, “road not taken” status, and boundary of at most one late demonstrator are fixed by the consolidated Aerospace Armaments Reference. Exact dates, hardware completion, engines, propellers, specifications, costs, and cancellation process remain open.${a}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes XB-55 as the turboprop range-and-payload road not taken and states that it was canceled before service. Hardware may have stopped before flight or reached at most one late demonstrator; a larger test or operational fleet is excluded.${a}</p><p>This later boundary supersedes the earlier assessment that the program itself was only a compatible reconstruction.${a}</p>`},
        earlier,
        {id:"proposal",title:"The endurance answer",html:`<p>The register's range-and-payload label describes an endurance answer to the bomber problem. The incorporated program logic asked whether turboprop efficiency could extend strategic reach without accepting the fuel consumption of early turbojets.</p><p>Its central variable was endurance rather than the rapid transit and reduced warning time pursued by the B-47 school. This made the proposal a genuine doctrinal alternative instead of a different engine choice for the same mission concept.${e}</p>`},
        {id:"configuration",title:"Projected aircraft",html:`<p>The incorporated design was a large swept-wing Boeing bomber with four turboprops. High-power engines, reduction gearboxes, propeller controls, shafts, vibration, and the aerodynamic interaction of large propellers with the wing made propulsion integration the central technical problem.${e}</p><p>Engine and propeller types, dimensions, payload, speed, range, crew, defensive equipment, and construction status remain open.${a}</p>`},
        {id:"strategic-debate",title:"Speed against range",html:`<p>The American argument took place while German interceptors and guided defenses continued to improve.${a}</p><p>Additional endurance could extend the route to a target, but it did not necessarily reduce the time a bomber spent inside the defensive system.${e}</p><p>The setting's strategic bombing remained conventional.${a}</p><p>Planners therefore expected repeated penetrations rather than one atomic sortie, and the speed school treated warning time and exposure as force-structure variables.${e}</p>`},
        {id:"hardware",title:"Demonstrator boundary",html:`<p>The source deliberately leaves the final hardware state narrow but unresolved: no more than one late demonstrator. The phrase permits a program ending in studies, mock-ups, partial hardware, or a single late aircraft; it does not select among them.${a}</p><p>Until further canon settles the issue, the wiki should not state that XB-55 definitely flew or that several prototypes existed.${a}</p>`},
        {id:"cancellation",title:"Cancellation before service",html:`<p>XB-55 entered no operational service. The decision preserved the heavy range-and-payload question for the limited <a href='b-52-stratofortress.html'>B-52A/B</a> force while the main strategic line proceeded through B-47, B-58, and B-70.${a}</p><p>The contracting decision, responsible offices, engine delays, costs, and formal cancellation date remain open.${a}</p>`},
        {id:"reputation",title:"The road not taken",html:`<p>Later histories used XB-55 as the range-and-payload road not taken.${a}</p><p>It represented the branch that answered strategic distance with propulsive efficiency and endurance, whereas the accepted Schnellbomber line answered air defense with greater speed and shorter exposure. This retrospective role does not prove that the project would have been cheap, invulnerable, or successful in service.${e}</p>`},
        {id:"limits",title:"Open project record",html:`<p>Requirement and contract dates, engine and propeller marks, projected specifications, drawings, mock-ups, test articles within the one-demonstrator ceiling, flight status, cancellation date, program cost, personnel, facilities, and surviving documentation remain open.</p>`}
      ].filter(Boolean),
      related:relatedOnce(xb55.related,[
        {href:"xb-56.html",kicker:"Large-turbojet alternative",label:"Boeing XB-56"},
        {href:"american-jet-engine-industry.html",kicker:"Propulsion context",label:"American Jet-Engine Industry"},
        {href:"american-strategic-bomber-development.html",kicker:"Program context",label:"American Strategic-Bomber Development"}
      ]),
      facts:[["Register status","Fixed canceled program"],["Country","United States"],["Manufacturer","Boeing Aircraft"],["Role","Turboprop range-and-payload alternative"],["Disposition","Canceled before service"],["Hardware boundary","At most one late demonstrator"],["Historical interpretation","Range/endurance road not taken"],["Exact flight status","Open"]]
    };
  }

  const xb56 = articles["xb-56"];
  if (xb56) {
    const earlier = earlierAssessment(xb56);
    articles["xb-56"] = {
      ...xb56,
      eyebrow:"United States · two large-engine flying laboratories · 1954–55",
      lead:`The <strong>Boeing XB-56</strong> program comprised two B-47-derived flying laboratories in 1954–55. They tested a four-large-engine arrangement in place of the parent bomber's six smaller turbojets and were initially tied to Allison J71 development.${a}`,
      canon:`The XB-56 identity, 1954–55 period, two-aircraft strength, B-47 ancestry, four-large-engine purpose, flying-laboratory status, and initial Allison J71 connection are fixed by the consolidated Aerospace Armaments Reference. Exact parent airframes, engine marks and sequence, specifications, test results, incidents, and disposal remain open.${a}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes two XB-56 flying laboratories in 1954–55. It also fixes their B-47 ancestry, four-large-engine purpose, and initial relationship to Allison J71 development.${a}</p><p>This later entry supersedes the earlier assessment that flight status, quantity, dates, and the J71 connection were only incorporated possibilities.${a}</p>`},
        earlier,
        {id:"origin",title:"From B-47 to XB-56",html:`<p>The program tested four engines of much greater individual thrust in two <a href='b-47-stratojet.html'>B-47</a>-derived flying laboratories.${a}</p><p>A separate XB-56 identity distinguished the propulsion experiment from normal Stratojet production.${e}</p><p>The precise production blocks or serial identities of the two parent airframes remain open.${a}</p>`},
        {id:"conversion",title:"Four-engine conversion",html:`<p>Removing two engine positions changed pylon and wing loads, fuel distribution, controls, vibration, maintenance access, and engine-out behavior. The conversion had to create a fair systems comparison rather than merely demonstrate that four engines could be attached.${e}</p><p>Nacelle geometry, structural reinforcement, fuel-system changes, instruments, and exact configuration differences between the two laboratories remain open.${a}</p>`},
        {id:"j71",title:"Allison J71 connection",html:`<p>The program was initially tied to <a href='allison-j35-j71-engine-family.html'>Allison J71</a> development. This placed XB-56 inside the American effort to move from numerous modest engines toward fewer engines of greater individual thrust.${a}</p><p>The source does not fix that every flight used one J71 mark, whether other candidates were installed, or the order of any changes.${a}</p>`},
        {id:"flight-program",title:"Flying-laboratory program",html:`<p>Two aircraft flew as laboratories during 1954–55.${a}</p><p>Their relevant test field included acceleration, climb, cruise, fuel use, inlet behavior, engine-out control, pylon loads, vibration, maintainability, and sortie generation.${e}</p><p>Flights, pilots, locations, instrument fits, measured results, failures, and damage remain open.${a}</p>`},
        {id:"industry",title:"Large-engine industrial problem",html:`<p>XB-56 connected bomber procurement to a broader engine-industry objective. Larger engines could reduce engine count and associated servicing while increasing the consequence of each engine failure and demanding stronger individual installations.${e}</p><p>The program supplied a bomber-scale test environment for that trade. It did not by itself determine the engines of every later American aircraft.${e}</p>`},
        {id:"outcome",title:"No production B-56",html:`<p>The two laboratories did not lead to an operational B-56 fleet. B-47 remained the established production bomber, B-52 preserved a limited heavy range-and-payload branch, and later strategic prestige moved to B-58 and B-70.${a}</p><p>XB-56's accepted result was experimental.${a}</p><p>Its institutional value lay in converting a proposed engine substitution into a flown body of integration evidence.${e}</p>`},
        {id:"limits",title:"Open test record",html:`<p>Parent-airframe identities, individual engine marks and sequence, dimensions, mass, performance, first and last flight dates within 1954–55, pilots, test sites, instrumentation, sortie count, measured gains, failures, maintenance data, modifications, and final disposition remain open.</p>`}
      ].filter(Boolean),
      related:relatedOnce(xb56.related,[
        {href:"xb-55.html",kicker:"Rejected endurance branch",label:"Boeing XB-55"},
        {href:"american-jet-engine-industry.html",kicker:"Industrial context",label:"American Jet-Engine Industry"},
        {href:"american-strategic-bomber-development.html",kicker:"Program context",label:"American Strategic-Bomber Development"}
      ]),
      facts:[["Register status","Fixed experimental program"],["Country","United States"],["Manufacturer","Boeing Aircraft"],["Period","1954–55"],["Airframes","Two"],["Parent aircraft","B-47 Stratojet"],["Purpose","Four-large-engine flying laboratories"],["Initial engine connection","Allison J71"],["Production B-56","None"]]
    };
  }
})();
