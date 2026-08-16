window.deepArticles = window.deepArticles || {};

const americanReusableResearchLocalSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — American reusable-aerospace research register"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — corrected runway-to-orbit architecture"},
  {href:"../transcript.md",label:"Master Transcript — X-plane, lifting-body, Apex, and Pathfinder development path"}
];

const americanReusableResearchOfficialSources = {
  overview:{href:"https://www.nasa.gov/wp-content/uploads/2023/04/sp-4531.pdf",label:"NASA — American X-Vehicles: An Inventory, X-1 to X-50"},
  x15:{href:"https://www.nasa.gov/reference/x-15/",label:"NASA — X-15 Hypersonic Research Program"},
  x20:{href:"https://ntrs.nasa.gov/citations/19720063747",label:"NASA Technical Reports Server — X-20 Dyna-Soar Progress Report"},
  x24:{href:"https://www.nasa.gov/aeronautics/nasa-aircraft/lifting-bodies/",label:"NASA — Lifting Bodies and the X-24 program"},
  apex:{href:"https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20120002930.pdf",label:"NASA Technical Reports Server — turbine-based combined-cycle mode-transition research"}
};

const americanReusableResearchLandscape = {
  src:"assets/diagrams/american-reusable-aerospace-research-generation.svg",
  alt:"Working four-path reconstruction from X-15A, X-20A Dyna-Soar, the X-24 series, and Project Apex to an XO-1 Pathfinder milestone in 1969",
  caption:"Four research paths contribute different answers; Pathfinder preserves runway launch and recovery without preserving every experimental vehicle's launch arrangement"
};

const americanReusableResearchArticle = config => ({
  category:"Experimental aerospace vehicles",
  eyebrow:"United States Aerospace Force · reusable-flight research",
  landscape:americanReusableResearchLandscape,
  ...config,
  categories:config.categories || ["United States","United States Aerospace Force","Experimental aircraft","Hypersonic flight","Spaceplanes"]
});

const americanReusableResearchRelated = [
  {href:"american-reusable-aerospace-research-generation.html",kicker:"Research lineage",label:"Reusable Aerospace Research Generation"},
  {href:"american-orbital-vehicle-program.html",kicker:"Operational successor",label:"American Orbital Vehicle Program"},
  {href:"aerospace-doctrine.html",kicker:"Strategic framework",label:"Aerospace Doctrine of the United States"},
  {href:"united-states-aerospace-force.html",kicker:"Operating service",label:"United States Aerospace Force"}
];

const americanReusableResearchType = c => americanReusableResearchArticle({
  title:c.title,
  eyebrow:`American reusable-aerospace research · ${c.period}`,
  infoboxKicker:c.kicker,
  infoboxTitle:c.title,
  lead:c.lead,
  canon:`Direct canon establishes a long American 1960s combined air-breathing and rocket research program behind self-powered runway-to-orbit flight and Pathfinder's first-orbit test status. It does not directly fix this program's ${c.period} period, ${c.role.toLowerCase()} role, ${c.launch.toLowerCase()} launch method, ${c.recovery.toLowerCase()} recovery method, operating regime, or exact contribution to Pathfinder. Those fields are incorporated reconstruction; vehicles, flights, crews, contractors, budgets, accidents, and disposition remain open.`,
  sections:[
    {id:"identity",title:c.identityTitle,html:c.identityHtml},
    {id:"development",title:"Development",html:c.developmentHtml},
    {id:"configuration",title:c.configurationTitle,html:c.configurationHtml},
    {id:"program",title:c.programTitle,html:c.programHtml},
    {id:"register",title:"Working program profile",html:`<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Program period</th><td>${c.period}</td></tr><tr><th>Principal role</th><td>${c.role}</td></tr><tr><th>Launch method</th><td>${c.launch}</td></tr><tr><th>Recovery method</th><td>${c.recovery}</td></tr><tr><th>Operating regime</th><td>${c.regime}</td></tr><tr><th>Principal contribution</th><td>${c.contribution}</td></tr></tbody></table></div><p>The complete profile is incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p>`},
    {id:"research",title:c.researchTitle,html:c.researchHtml},
    {id:"lineage",title:c.lineageTitle,html:c.lineageHtml},
    {id:"limits",title:"Open program history",html:`<p>${c.open || "Airframe count, dimensions, complete propulsion data, flight chronology, crews, test sites, contractors, budgets, accidents, research reports, and final disposition remain unregistered."}</p>`}
  ],
  related:[...americanReusableResearchRelated,...c.related],
  sources:[...americanReusableResearchLocalSources,americanReusableResearchOfficialSources[c.official]],
  facts:[["Canon status","Incorporated research-path register"],["Working service","United States Aerospace Force"],["Working period",c.period],["Working role",c.role],["Working launch",c.launch],["Working recovery",c.recovery],["Working operating regime",c.regime],["Working contribution",c.contribution]]
});

Object.assign(window.deepArticles, {
  "american-reusable-aerospace-research-generation": americanReusableResearchArticle({
    title:"American reusable-aerospace research generation",
    category:"Aerospace research programs",
    eyebrow:"Rocketplanes · orbital gliders · lifting bodies · combined-cycle demonstrators · 1961–1969",
    infoboxKicker:"Pathfinder precursor system",
    infoboxTitle:"Reusable-aerospace research generation",
    lead:"<!-- altwwii-writer-block:start id=wb-g-20260816-a2a3b writer=g kind=revision created=2026-08-16T10:25:00-06:00 -->The American reusable-aerospace research generation is the working four-path lineage linking X-15A, X-20A Dyna-Soar, the X-24 series, and Project Apex to Pathfinder. The author directly establishes the long 1960s research effort behind self-powered runway-to-orbit flight and Pathfinder's first-orbit test status.<sup class='canon-note' data-provenance='a'>[a]</sup> The four-path taxonomy, exact vehicle marks, detailed contributions, XO-1 identity, and 1969 date are incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-a2c4d writer=g kind=revision created=2026-08-16T10:25:00-06:00 -->Direct canon fixes an American 1960s research-and-development program for combined air-breathing and rocket spaceplanes and Pathfinder as the early vehicle that first attains orbit before the final O-1 reconnaissance variant.<sup class='canon-note' data-provenance='a'>[a]</sup> The four named paths, program years, launch and recovery methods, precise technical transfers, X-20's terminal place, Apex's lineage, XO-1 and 1969, budgets, institutions, vehicle counts, contractors, flights, accidents, crews, reports, and transfer records remain incorporated reconstruction or open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"problem",title:"The American problem after 1957",html:"<p>Germany's first satellite proves ballistic rocketry can establish an orbital lead. The United States answers by treating space as an extension of flight: pilots, reusable structures, controlled reentry, runway recovery, and vehicles that can be inspected and flown again.</p><p>Expendable rockets still launch urgent satellites. The prestige and operational program, however, seeks an aircraft road to orbit rather than a capsule-first culture.</p>"},
      {id:"register",title:"Four research paths",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Program</th><th>Period</th><th>Principal research problem</th></tr></thead><tbody><tr><td><a href='x-15a.html'>X-15A</a></td><td>1961 onward</td><td>Hypersonic heating, reaction control, pilot workload, energy-managed landing</td></tr><tr><td><a href='x-20a-dyna-soar.html'>X-20A Dyna-Soar</a></td><td>1965–66 trials</td><td>Booster-launched reentry, orbital glide, inspection, runway return</td></tr><tr><td><a href='x-24-series.html'>X-24 series</a></td><td>1964–68</td><td>Lifting bodies, inlet transition, hydrogen cooling, high-angle reentry</td></tr><tr><td><a href='project-apex.html'>Project Apex</a></td><td>1967–69</td><td>Combined-cycle propulsion, thermal structure, runway-launched upper-atmosphere flight</td></tr></tbody></table></div>"},
      {id:"rocketplane",title:"The air-launched rocketplane path",html:"<p>X-15A gives pilots direct experience with rocket-powered acceleration, extreme heating, pressure suits, reaction controls, rapid workload transitions, and steep unpowered return. It demonstrates that a human can remain useful inside a carefully computed hypersonic envelope.</p>"},
      {id:"glider",title:"The boosted-glider path",html:"<p>X-20A reaches the regime closest to orbital operations before Pathfinder. It studies a small maneuvering glider, inspection payload, reentry, cross-range, and runway landing after vertical booster launch.</p><p>Its success does not make the booster-glider arrangement the American operational answer. Dyna-Soar becomes the last major boosted glider, not a small Columbia.</p>"},
      {id:"lifting",title:"The lifting-body path",html:"<p>The X-24 series tests how body shape can generate useful lift, how high-angle vehicles remain controlled, how pilots judge steep approach energy, and how inlets and hydrogen systems can be integrated into a reusable configuration. It opens shapes and control solutions that a conventional winged research aircraft cannot answer alone.</p>"},
      {id:"apex",title:"Apex after the Day the Ceiling Closed",html:"<p>The 1966 <a href='maracaibo-shock.html'>Maracaibo Shock</a> gives upper-atmosphere work an immediate strategic purpose. Project Apex tests whether runway-launched vehicles can pass above conventional air-defense geometry, perform useful controlled flight, and return.</p><p>The program neither restores invulnerability nor fields a universal strike weapon. Its most durable products are propulsion transition, thermal structure, guidance, simulation, and operations knowledge.</p>"},
      {id:"convergence",title:"Convergence on Pathfinder",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-z4n8k writer=g kind=revision created=2026-08-15T11:57:55-06:00 --><p>Pathfinder is directly established as the test vehicle that first carries the O-series into orbit, within the American self-powered runway-to-orbit tradition.<sup class='canon-note' data-provenance='a'>[a]</sup> Calling it XO-1, dating the flight to 1969, and assigning exact X-15, X-20, X-24, and Apex contributions are incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup></p><!-- altwwii-writer-block:end -->"},
      {id:"limits",title:"A lineage without false inevitability",html:"<p>The four paths are not consecutive production prototypes. Some solutions conflict, several arrangements end, and the Pathfinder demonstrator requires new engineering beyond all of them. The register fixes technical inheritance without claiming that Pathfinder was a simple enlargement of any one predecessor.</p>"}
    ],
    related:[{href:"ov-1a-pathfinder.html",kicker:"Working 1969 convergence",label:"XO-1 Pathfinder"},{href:"american-orbital-vehicle-program.html",kicker:"Operational lineage",label:"American Orbital Vehicle Program"},{href:"american-aerospace-force-atmospheric-fleet.html",kicker:"Strategic-air context",label:"Aerospace Force Atmospheric Fleet"},{href:"maracaibo-shock.html",kicker:"1966 doctrinal rupture",label:"Maracaibo Shock"},{href:"aerospace-doctrine.html",kicker:"Strategic framework",label:"Aerospace Doctrine of the United States"},{href:"canaveral-aerospace-field.html",kicker:"Operational successor base",label:"Canaveral Aerospace Field"}],
    sources:[...americanReusableResearchLocalSources,americanReusableResearchOfficialSources.overview],
    categories:["United States","United States Aerospace Force","Aerospace research","Experimental aircraft","Spaceplanes"],
    facts:[["Working period","1961–1969"],["Working research paths","Four"],["Rocketplane","X-15A"],["Boosted glider","X-20A Dyna-Soar"],["Lifting body","X-24 series"],["Runway demonstrators","Project Apex"],["Working orbital convergence","XO-1 Pathfinder"],["Directly established architecture","Self-powered runway-to-orbit flight"]]
  }),

  "x-15a": americanReusableResearchType({
    title:"X-15A",period:"1961 research service",role:"Air-launched hypersonic research rocketplane",launch:"Air launch from a carrier aircraft",recovery:"Unpowered energy-managed landing",regime:"Suborbital; 12-minute powered-flight research window",contribution:"Heating, reaction controls, workload, and landing energy",official:"x15",kicker:"Piloted hypersonic research rocketplane",
    lead:"The X-15A was the Aerospace Force's single-seat air-launched hypersonic research rocketplane, entering research service in 1961. Its registered 15.5-tonne mission mass, 0.2-tonne instrument load, reaction controls, suborbital profiles, and energy-managed landing program made it the first practical American school for piloted flight between the atmosphere and space.",
    identityTitle:"A laboratory carried beneath an aircraft",identityHtml:"<p>X-15A is released at altitude rather than taking off from a runway. Rocket propulsion then carries it through speed or altitude profiles before it returns without orbital insertion. This arrangement isolates the most difficult hypersonic questions without requiring a complete launch system.</p>",
    developmentHtml:"<p>North American Aviation develops the historical X-15 foundation with Air Force, Navy, and high-speed-flight researchers. The setting's Aerospace Force gives the program a more direct institutional path into reusable military and civil flight after the German satellite shock.</p>",
    configurationTitle:"Rocket propulsion and dual control regimes",configurationHtml:"<p>A heat-resistant structure, pressure-suited pilot, rocket engine, conventional aerodynamic surfaces, and hydrogen-peroxide reaction controls allow one vehicle to pass from dense-air flight into very low dynamic pressure and back. Exact engine mark and control arrangement remain open where the register does not adopt historical detail.</p>",
    programTitle:"Research service",programHtml:"<p>Speed and altitude missions investigate different loads. Ground simulation, chase aircraft, range tracking, dry-lake recovery, instrument packages, and careful envelope expansion make every flight part of a distributed laboratory.</p>",
    researchTitle:"The pilot inside a computed envelope",researchHtml:"<p>The program studies heating, structural response, stability, control transition, physiology, inertial reference, reaction control, reentry, and terminal energy management. The pilot does not replace computation; the pilot acts within corridors established by wind tunnels, simulation, telemetry, and ground analysis.</p>",
    lineageTitle:"What Pathfinder inherits",lineageHtml:"<p>Pathfinder inherits confidence in heat-resistant reusable structures, pilot control across changing regimes, reaction-control procedure, full-pressure equipment, simulation, and the principle that speed and altitude must be converted into a survivable runway approach.</p><p>It does not inherit air launch or the rocketplane's limited payload architecture.</p>",
    related:[{href:"nf-104a-starfighter.html",kicker:"Aerospace-training contemporary",label:"NF-104A Starfighter"},{href:"ov-1a-pathfinder.html",kicker:"1969 successor",label:"XO-1 Pathfinder"}]
  }),

  "x-20a-dyna-soar": americanReusableResearchType({
    title:"X-20A Dyna-Soar",period:"1965–1966 trials",role:"Booster-launched orbital-glide and inspection demonstrator",launch:"Vertical expendable-booster launch",recovery:"Unpowered runway landing",regime:"160 km trial orbit; up to 9 hours",contribution:"Lifting reentry, cross-range, inspection, and orbital piloting",official:"x20",kicker:"Last major American boosted orbital glider",
    fixed:"Boeing manufacture, slender-delta glider form, and the broad Dyna-Soar research foundation are retained.",
    lead:"The X-20A Dyna-Soar was the one-person booster-launched orbital-glide and inspection demonstrator flown in trials during 1965–66. With a registered 5.2-tonne mission mass, 0.5-tonne payload, 160 km orbit, and nine-hour endurance, it brought the Aerospace Force closest to operational orbital piloting before being rejected as the launch arrangement for the Pathfinder generation.",
    identityTitle:"An orbital aircraft carried by a rocket",identityHtml:"<p>Dyna-Soar combines a vertically launched booster with a piloted maneuvering glider that reenters and lands on a runway. The aircraft portion is reusable; the launch system is not the self-powered runway architecture America ultimately chooses.</p>",
    developmentHtml:"<p>Boeing's X-20 grows from boost-glide studies associated with Dyna-Soar and earlier Sänger-derived concepts. Unlike the abandoned historical proposal, the registered program reaches trials in 1965–66 under sustained Aerospace Force sponsorship.</p>",
    configurationTitle:"Small delta glider and inspection payload",configurationHtml:"<p>The compact glider carries one pilot and up to 0.5 tonnes of internal payload. A heat-resistant lower surface, lifting reentry, maneuver controls, orbital systems, and landing gear support inspection and return. Booster type, materials stack, guidance, and exact bay arrangement remain open.</p>",
    programTitle:"Orbital-glide trials",programHtml:"<p>Trials study launch escape, orbital attitude, inspection, target approach, controlled reentry, cross-range, steep low-lift approach, and runway landing. A nine-hour endurance supports bounded orbital research rather than a general transport mission.</p>",
    researchTitle:"The value of a path not adopted",researchHtml:"<p>X-20 proves that a pilot can operate a lifting orbital vehicle and return it to a prepared runway. It develops cockpit layout, reentry guidance, cross-range reasoning, inspection procedure, and low-lift landing practice even though its booster dependence does not fit the national operating promise.</p>",
    lineageTitle:"The last boosted glider",lineageHtml:"<p>X-20 is not the small ancestor whose complete arrangement simply grows into Columbia or Zenith. It is the last major American boosted glider. Pathfinder inherits orbital glide, maneuver, inspection, and landing knowledge while replacing vertical booster launch with integrated runway ascent.</p>",
    related:[{href:"project-apex.html",kicker:"Runway-launched successor research",label:"Project Apex"},{href:"ov-1a-pathfinder.html",kicker:"1969 successor",label:"XO-1 Pathfinder"}]
  }),

  "x-24-series": americanReusableResearchType({
    title:"X-24 series",period:"1964–1968 research",role:"Lifting-body and integrated-propulsion research series",launch:"Air launch and experimental powered profiles",recovery:"High-angle glide and runway or lakebed landing",regime:"Atmospheric and upper-atmosphere research",contribution:"Body lift, inlet transition, hydrogen cooling, and reentry control",official:"x24",kicker:"American lifting-body and propulsion-integration series",
    fixed:"Martin construction and the broad lifting-body research foundation are retained; the accelerated dates and integrated-propulsion emphasis are specific to the American program.",
    lead:"The X-24 series was the Aerospace Force's 1964–68 lifting-body and integrated-propulsion research family. It investigated vehicles whose bodies generated much of their lift, high-angle reentry, steep energy-managed recovery, inlet transition, hydrogen cooling, and the control problems created when one reusable craft had to function across several propulsion regimes.",
    identityTitle:"Lift without a conventional wing plan",identityHtml:"<p>A lifting body derives useful aerodynamic lift from fuselage shape rather than depending upon a normal wing. That makes it valuable for compact reentry forms, high internal volume, and blunt thermal geometry, while imposing difficult stability and landing-energy problems.</p>",
    developmentHtml:"<p>The series grows from American lifting-body studies and joint flight research at Edwards. Martin's historical X-24 work supplies the recognizable foundation, but the program begins earlier and receives additional inlet, hydrogen, and integrated-propulsion tasks because runway-to-orbit flight is already the national objective.</p>",
    configurationTitle:"A family of shapes and propulsion experiments",configurationHtml:"<p>X-24 describes a research series rather than one fixed operational airframe. Configurations test body shape, fins, control surfaces, inlet placement, cooling paths, rocket assistance, and transition behavior. Exact variants, masses, speeds, and the allocation of individual experiments remain open.</p>",
    programTitle:"Flight and ground research, 1964–68",programHtml:"<p>Wind tunnels, tow or carrier tests, powered profiles, glide approaches, instrumentation, and simulation examine how unconventional shapes behave from high-angle entry to flare and landing. Several tests support combined-cycle inlet and hydrogen-system work later concentrated in Apex.</p>",
    researchTitle:"Energy, stability, and mode transition",researchHtml:"<p>The series studies whether a reusable vehicle can remain controllable as aerodynamic forces, propulsion modes, thermal loads, and lift-to-drag ratio change rapidly. Precise landing depends upon conserving enough energy to reach and flare over a chosen runway without carrying an ordinary aircraft's excess wing.</p>",
    lineageTitle:"Shapes and systems, not a production model",lineageHtml:"<p>Pathfinder does not reproduce one X-24 outline. It inherits a library of shapes, control laws, high-angle behavior, inlet transitions, cooling methods, simulation techniques, and landing practice. The series contributes design freedom rather than one mandatory vehicle form.</p>",
    related:[{href:"project-apex.html",kicker:"Integrated full-scale successor",label:"Project Apex"},{href:"x-15a.html",kicker:"Parallel flight-research path",label:"X-15A"}]
  }),

  "project-apex": americanReusableResearchType({
    title:"Project Apex",period:"1967–1969",role:"Runway-launched upper-atmosphere and boost-glide demonstrator program",launch:"Self-powered runway launch",recovery:"Runway return after upper-atmosphere flight",regime:"Upper atmosphere and boost-glide test corridors",contribution:"Combined-cycle transition, thermal structure, guidance, and compact computing",official:"apex",kicker:"Full-scale runway-launched Pathfinder precursor",
    fixed:"The program name, dates, strategic purpose, runway-launched demonstrator form, research fields, and contribution to Pathfinder are fixed; manufacturer and individual demonstrator identities remain open.",
    lead:"Project Apex was the Aerospace Force's 1967–69 program of full-scale runway-launched upper-atmosphere and boost-glide demonstrators. Created after the Maracaibo Shock, it joined turbine-based and high-speed air-breathing propulsion, onboard rocket transition, hydrogen cooling, thermal structure, inertial guidance, compact integrated-circuit computing, and energy-managed runway return in the last research step before XO-1 Pathfinder.",
    identityTitle:"The runway-launched convergence program",identityHtml:"<p>Apex differs from the air-launched X-15, booster-launched X-20, and specialist X-24 experiments by testing the integrated operating sequence America intends to preserve: departure from a runway, transition through propulsion regimes, useful controlled flight above ordinary defenses, reentry, and runway recovery.</p>",
    developmentHtml:"<p>The Day the Ceiling Closed gives the program urgency. Radar and missiles have defeated a B-58 strike by predicting its route rather than chasing it. Aerospace Force planners therefore investigate corridors above ordinary atmospheric interception while reusable-vehicle engineers need full-scale mode-transition data.</p>",
    configurationTitle:"Combined-cycle demonstrators",configurationHtml:"<p>Apex vehicles combine low-speed turbine propulsion, ramjet or dual-mode high-speed flow paths, hydrogen fuel and cooling, closed-cycle rocket operation, high-temperature structure, reaction controls, inertial navigation, and landing gear. The register does not yet fix manufacturer, geometry, engine count, or individual designations.</p>",
    programTitle:"Upper-atmosphere tests",programHtml:"<p>Flights proceed through bounded speed, altitude, transition, heating, guidance, reentry, and landing envelopes. Some missions emphasize boost-glide strike geometry; others emphasize propulsion mode transition or return. The demonstrators do not form an operational bomber force.</p>",
    researchTitle:"A computational aerospace program",researchHtml:"<p>Hypersonic aerodynamics, changing density, thermal protection, inlet behavior, inertial guidance, target geometry, reentry control, and landing energy require extensive simulation. Aerospace Force laboratories become major customers for Control Data scientific computers, integrated circuits, and real-time minicomputers.</p>",
    lineageTitle:"From strategic experiment to orbital transport",lineageHtml:"<!-- altwwii-writer-block:start id=wb-g-20260815-c9r2m writer=g kind=revision created=2026-08-15T11:57:55-06:00 --><p>Apex's precise transfer of runway-launch, propulsion-transition, thermal, guidance, simulation, and maintenance knowledge into an XO-1 Pathfinder program is incorporated reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup> It remains compatible with the directly established long American research path to a self-powered orbital spaceplane and Pathfinder's first-orbit test role.<sup class='canon-note' data-provenance='a'>[a]</sup></p><!-- altwwii-writer-block:end -->",
    related:[{href:"maracaibo-shock.html",kicker:"Doctrinal cause",label:"Maracaibo Shock"},{href:"ov-1a-pathfinder.html",kicker:"1969 orbital convergence",label:"XO-1 Pathfinder"}]
  })
});
