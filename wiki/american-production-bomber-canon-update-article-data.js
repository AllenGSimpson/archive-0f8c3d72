(function () {
  const articles = window.deepArticles || {};
  const a = "<sup class='canon-note' data-provenance='a'>[a]</sup>";
  const e = "<sup class='canon-note' data-provenance='e'>[e]</sup>";

  const earlierAssessment = article => {
    const sourceStatus = article.sections.find(section => section.id === "source-status");
    return {
      id:"earlier-assessment",
      title:"Earlier source assessment",
      html:`<p>${article.lead}</p><p>${article.canon}</p>${sourceStatus ? sourceStatus.html : ""}<p>The assessment is retained as editorial history. Its conclusion about the program's status was superseded when the consolidated Aerospace Armaments Reference entered the source corpus.${a}</p>`
    };
  };

  const withoutSourceStatus = article => article.sections.filter(section => section.id !== "source-status");
  const replaceSection = (sections, id, replacement) => sections.map(section => section.id === id ? replacement : section);

  const b45 = articles["b-45-tornado"];
  if (b45) {
    let sections = withoutSourceStatus(b45);
    sections = replaceSection(sections,"service",{
      id:"service",title:"Operational service",html:`<p>B-45 entered service during 1952–53 as the small first operational American jet-bomber bridge. The consolidated register places the total at approximately 60–90 aircraft, including reconnaissance and test forms.${a}</p><p>The fleet gave American organizations routine experience with a multi-engine jet bomber. Training extended beyond pilots to navigators, ground controllers, weather officers, fuel services, engine shops, electricians, instrument technicians, armorers, rescue crews, and runway personnel.${e}</p><p>Named units, bases, readiness rates, deployments, Philippine War missions, accidents, attrition, and the exact division among bomber, reconnaissance, and test aircraft remain open.${a}</p>`
    });
    sections = replaceSection(sections,"comparison",{
      id:"comparison",title:"Comparison with the first generation",html:`<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Period</th><th>Principal form</th><th>Disposition</th></tr></thead><tbody><tr><td><a href='xb-43-jetmaster.html'>XB-43 Jetmaster</a></td><td>Late 1940s</td><td>First all-jet bomber experiment</td><td>Research only</td></tr><tr><td>B-45 Tornado</td><td>1952–53</td><td>Straight-wing operational bridge</td><td>Approximately 60–90 aircraft</td></tr><tr><td><a href='xb-46.html'>XB-46</a></td><td>Early 1950s</td><td>Sleek straight-wing competitor</td><td>Prototype</td></tr><tr><td><a href='b-47-stratojet.html'>B-47 Stratojet</a></td><td>First flight 1949–50; service 1954</td><td>Swept-wing podded-engine Schnellbomber</td><td>Major production type</td></tr><tr><td><a href='xb-48.html'>XB-48</a></td><td>Early 1950s</td><td>Six-engine conventional competitor</td><td>Prototype</td></tr></tbody></table></div><p>The program identities, periods, and broad dispositions follow the consolidated register.${a}</p>`
    });
    sections = replaceSection(sections,"register",{
      id:"register",title:"Reference register",html:`<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Field</th><th>Established information</th><th>Open information</th></tr></thead><tbody><tr><td>Manufacturer</td><td>North American Aviation</td><td>Plant and production blocks</td></tr><tr><td>Configuration</td><td>Straight wing · four turbojets</td><td>Dimensions, masses, performance, engine marks</td></tr><tr><td>Status</td><td>First operational American jet-bomber bridge</td><td>Acceptance day and retirement date</td></tr><tr><td>Service entry</td><td>1952–53</td><td>Variant-by-variant dates</td></tr><tr><td>Fleet scale</td><td>Approximately 60–90 aircraft</td><td>Exact total and block distribution</td></tr><tr><td>Forms</td><td>Bomber · reconnaissance · test</td><td>Suffixes, conversions, and equipment</td></tr><tr><td>Successor</td><td>B-47 Stratojet</td><td>Unit conversion chronology</td></tr></tbody></table></div><p>The date, scale, and broad forms are fixed; technical particulars remain open or incorporated reconstruction.${a}</p>`
    });
    articles["b-45-tornado"] = {
      ...b45,
      eyebrow:"United States · first operational jet-bomber bridge · 1952–53",
      lead:`The <strong>North American B-45 Tornado</strong> was the first operational American jet-bomber bridge. Entering service during 1952–53, its small fleet of approximately 60–90 aircraft included bomber, reconnaissance, and test forms and trained the organizations later required by the B-47 force.${a}${e}`,
      canon:`The B-45 identity, 1952–53 service entry, first-operational-jet-bomber position, approximate 60–90-aircraft scale, and inclusion of reconnaissance and test forms are fixed by the consolidated Aerospace Armaments Reference. North American manufacture and broad straight-wing four-engine arrangement are retained technical history; exact variants, engines, specifications, quantities, units, operations, losses, and retirement remain incorporated or open.${a}${e}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes B-45 as the small first operational jet-bomber bridge, entering service in 1952–53 with approximately 60–90 aircraft including reconnaissance and test forms.${a}</p><p>This later source supersedes the previous page-level conclusion that B-45 service itself was only a working reconstruction. The detailed service history remains bounded by what the register does and does not state.${a}</p>`},
        earlierAssessment(b45),
        ...sections
      ],
      facts:[["Register status","Fixed operational program"],["Country","United States"],["Manufacturer","North American Aviation"],["Service entry","1952–53"],["Position","First operational American jet-bomber bridge"],["Fleet scale","Approximately 60–90 aircraft"],["Established forms","Bomber · reconnaissance · test"],["Wing","Straight"],["Engines","Four turbojets · exact family open"],["Weapons doctrine","Conventional only"],["Successor","B-47 Stratojet"],["Retirement","Open"]]
    };
  }

  const b47 = articles["b-47-stratojet"];
  if (b47) {
    let sections = withoutSourceStatus(b47);
    sections = replaceSection(sections,"development",{
      id:"development",title:"Development and entry",html:`<p>B-47 first flew during 1949–50 and entered service in 1954. The first American jet-bomber competition compared conservative straight-wing aircraft with Boeing's swept-wing proposal; Stratojet treated airspeed, drag reduction, propulsion placement, and a compact forward fuselage as one configuration problem.${a}${e}</p><p>The design became the major production winner. Exact prototype dates within the stated interval, evaluation reports, contract awards, and block chronology remain open.${a}</p>`
    });
    sections = replaceSection(sections,"production",{
      id:"production",title:"Production",html:`<p>B-47 became the major Philippine War procurement winner after entering service in 1954. Wartime demand expanded production of airframes, J47-class engines, instruments, runways, fuel handling, and trained personnel.${a}</p><p>The total, annual lots, factory allocation, variant proportions, reserve aircraft, and attrition replacements remain open.${a}</p>`
    });
    sections = replaceSection(sections,"philippine-war",{
      id:"philippine-war",title:"Philippine War",html:`<p>The Philippine War made B-47 the principal procurement winner of its generation. Long Pacific distances and contested airspace forced crews to treat speed, warning time, route reconnaissance, weather, tanker support, navigation, and diversion fields as one operating system.${a}${e}</p><p>Named raids, targets, groups, forward fields, sortie totals, losses, and tactical results remain open. The fixed wartime boundary is the program's accelerated procurement and institutional importance rather than a complete bombing-campaign register.${a}</p>`
    });
    sections = replaceSection(sections,"xb56",{
      id:"xb56",title:"XB-56 development",html:`<p>In 1954–55, two <a href='xb-56.html'>XB-56</a> flying laboratories derived from B-47 tested four large engines in place of six smaller turbojets. The program was initially tied to Allison J71 development.${a}</p><p>XB-56 did not become a production B-56 fleet. Its value lay in propulsion integration and in connecting the B-47 airframe to the American large-engine development problem.${a}${e}</p>`
    });
    sections = replaceSection(sections,"register",{
      id:"register",title:"Reference register",html:`<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Field</th><th>Established information</th><th>Open information</th></tr></thead><tbody><tr><td>Manufacturer</td><td>Boeing Aircraft</td><td>Plants and production lots</td></tr><tr><td>First flight</td><td>1949–50</td><td>Exact day and prototype sequence</td></tr><tr><td>Service entry</td><td>1954</td><td>Acceptance and unit-conversion chronology</td></tr><tr><td>Configuration</td><td>Swept wing · podded engines · Schnellbomber</td><td>Dimensions, masses, engine marks, performance</td></tr><tr><td>Status</td><td>Major production and Philippine War procurement winner</td><td>Total, units, bases, retirement</td></tr><tr><td>Weapons doctrine</td><td>Conventional</td><td>Loads and equipment</td></tr><tr><td>Experimental derivative</td><td>Two XB-56 laboratories · 1954–55</td><td>Parent airframes and test chronology</td></tr></tbody></table></div><p>The chronology, strategic position, and broad disposition follow the consolidated register.${a}</p>`
    });
    articles["b-47-stratojet"] = {
      ...b47,
      eyebrow:"United States · swept-wing Schnellbomber · first flight 1949–50 · service 1954",
      lead:`The <strong>Boeing B-47 Stratojet</strong> was the swept-wing, podded-engine revelation of American postwar bombing. First flown during 1949–50 and entering service in 1954, it became the major Philippine War procurement winner and established the Schnellbomber school later extended by B-58 and B-70.${a}`,
      canon:`The B-47 identity, 1949–50 first-flight interval, 1954 service entry, swept-wing podded-engine Schnellbomber character, major production status, and position as the Philippine War procurement winner are fixed by the consolidated Aerospace Armaments Reference. Detailed configuration, J47 installation, quantities, variants, units, bases, missions, losses, and retirement remain incorporated reconstruction or open.${a}${e}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes B-47 as the swept-wing, podded-engine Schnellbomber revelation, first flown during 1949–50, operational from 1954, and the major American bomber procurement winner of the Philippine War.${a}</p><p>This supersedes the earlier assessment that B-47 service and wartime importance were only proposed reconstruction. Exact program and operational particulars remain open unless separately established.${a}</p>`},
        earlierAssessment(b47),
        ...sections
      ],
      facts:[["Register status","Fixed operational program"],["Country","United States"],["Manufacturer","Boeing Aircraft"],["First flight","1949–50"],["Service entry","1954"],["Type","Swept-wing podded-engine Schnellbomber"],["Program status","Major production type"],["Wartime position","Principal Philippine War procurement winner"],["Working engines","Six J47-class turbojets"],["Weapons doctrine","Conventional only"],["Experimental derivative","Two XB-56 laboratories · 1954–55"],["Production total","Open"]]
    };
  }

  const b52 = articles["b-52-stratofortress"];
  if (b52) {
    let sections = withoutSourceStatus(b52);
    sections = replaceSection(sections,"fleet",{
      id:"fleet",title:"B-52A and B-52B fleet",html:`<p>B-52A and B-52B entered limited service in 1956. The consolidated register fixes the fleet between approximately 24 and 48 aircraft—large enough to sustain operational, test, and research organizations but far smaller than the historical American Stratofortress force.${a}</p><p>The exact total within that range, division between A and B models, production lots, reserves, attrition replacements, conversions, and unit organization remain open.${a}</p>`
    });
    sections = replaceSection(sections,"procurement",{
      id:"procurement",title:"Procurement decision",html:`<p>B-52 did not fail technically. Its range, load, J57 engine experience, and later mothership work remained important. It lost the force-structure argument because a large subsonic bomber remained exposed to improving German interceptors and guided defenses, while conventional weapons required repeated penetrations rather than one atomic mission.${a}</p><p>The government therefore limited the fleet and directed strategic prestige toward B-58 and B-70. Existing B-52s retained missions for which endurance, volume, and stable carriage mattered more than maximum speed.${a}</p>`
    });
    sections = replaceSection(sections,"register",{
      id:"register",title:"Mission register",html:`<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Mission</th><th>Established status</th><th>Open information</th></tr></thead><tbody><tr><td>Heavy conventional bombing</td><td>Limited B-52A/B fleet from 1956</td><td>Loads, units, plans, sorties</td></tr><tr><td>Long-range reconnaissance</td><td>Established role</td><td>Variants, sensors, routes</td></tr><tr><td>Maritime work</td><td>Established role</td><td>Patrol sectors and naval arrangements</td></tr><tr><td>Guided-weapon trials</td><td>Established role</td><td>Weapons, ranges, contractors</td></tr><tr><td>Strategic exercises</td><td>Established role</td><td>Scenarios, participants, results</td></tr><tr><td>X-plane carriage</td><td>Established major function</td><td>Conversions, aircraft identities, flight totals</td></tr></tbody></table></div><p>The mission families and 24–48-aircraft fleet boundary are fixed; their detailed registers remain open.${a}</p>`
    });
    articles["b-52-stratofortress"] = {
      ...b52,
      lead:`The <strong>Boeing B-52 Stratofortress</strong> was the limited heavy range-and-payload branch of American strategic aviation. B-52A and B-52B entered service in 1956 in a fleet of approximately 24–48 aircraft used for conventional bombing, long-range reconnaissance, maritime work, guided-weapon trials, strategic exercises, and X-plane carriage.${a}`,
      canon:`B-52A/B limited service from 1956, the 24–48-aircraft range, the established mission set, the importance of range, payload, J57 experience, and mothership work, and loss of the main force-structure argument to the faster B-58/B-70 school are fixed by the consolidated Aerospace Armaments Reference. Exact quantities, variant division, engines, specifications, units, bases, operations, conversions, losses, upgrades, and retirement remain open.${a}`,
      sections:[
        {id:"current-status",title:"Status in the consolidated register",html:`<p>The current register fixes a limited B-52A/B fleet entering service in 1956, with approximately 24–48 aircraft and a defined set of long-range, maritime, guided-weapon, strategic-exercise, and X-plane-carriage missions.${a}</p><p>This later source supersedes the earlier assessment that the fleet's existence, scale, date, and mission set were only working reconstruction.${a}</p>`},
        earlierAssessment(b52),
        ...sections
      ],
      facts:[["Register status","Fixed limited operational fleet"],["Country","United States"],["Manufacturer","Boeing Aircraft"],["Variants","B-52A · B-52B"],["Service entry","1956"],["Fleet size","Approximately 24–48 aircraft"],["Strategic school","Range and payload"],["Established missions","Conventional bombing · reconnaissance · maritime · guided-weapon trials · exercises · X-plane carriage"],["Propulsion significance","J57 experience"],["Procurement outcome","Limited fleet; B-58/B-70 speed school prevails"],["Weapons doctrine","Conventional only"],["Retirement","Open"]]
    };
  }
})();
