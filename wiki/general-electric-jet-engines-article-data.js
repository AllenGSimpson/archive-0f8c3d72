window.deepArticles = window.deepArticles || {};

const generalElectricJetLocalSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — American engine and aircraft registers"},
  {href:"../transcript.md",label:"Master Transcript — American jet-engine development"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American aviation and aerospace development"}
];

const generalElectricJetOfficialSources = {
  early:{href:"https://www.nasa.gov/special-projects-laboratory-early-jet-engines/",label:"NASA Glenn — early American jet-engine development"},
  history:{href:"https://www.nasa.gov/wp-content/uploads/2017/12/power-for-flight-tagged.pdf",label:"NASA — Power for Flight"},
  ge:{href:"https://www.ge.com/news/reports/the-first-american-jet-engine-was-born-inside-a-2",label:"General Electric — jet-engine and variable-stator history"},
  j47:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/609991/USAFmuseum/general-electric-j47-turbojet/",label:"National Museum of the U.S. Air Force — General Electric J47"},
  j79:{href:"https://airandspace.si.edu/collection-objects/general-electric-j79-turbojet-engine/nasm_A19690213004",label:"Smithsonian National Air and Space Museum — General Electric J79"},
  j93:{href:"https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19770011069.pdf",label:"NASA Technical Reports Server — J79, YJ93, and sustained-supersonic propulsion"}
};

const generalElectricJetImage = {
  src:"https://commons.wikimedia.org/wiki/Special:FilePath/General%20Electric%20J79.jpg",
  alt:"General Electric J79 turbojet displayed at the National Museum of the United States Air Force",
  caption:"General Electric J79 turbojet · National Museum of the United States Air Force · public domain"
};

const generalElectricJetRelated = [
  {href:"general-electric-jet-engine-programs.html",kicker:"Manufacturer program register",label:"General Electric Jet-Engine Programs"},
  {href:"general-electric.html",kicker:"Parent corporation",label:"General Electric"},
  {href:"american-jet-engine-industry.html",kicker:"National industrial context",label:"American Jet-Engine Industry"}
];

const generalElectricJetArticle = c => ({
  title:c.title,
  category:c.category || "Aircraft engines",
  eyebrow:c.eyebrow,
  infoboxKicker:c.kicker,
  infoboxTitle:c.title,
  landscape:c.landscape === undefined ? false : c.landscape,
  lead:c.lead,
  canon:c.canon,
  sections:c.sections,
  related:[...generalElectricJetRelated,...c.related],
  sources:[...generalElectricJetLocalSources,...c.sources],
  categories:["United States","General Electric","Aircraft engines","Aerospace industry",...(c.categories || [])],
  facts:c.facts
});

Object.assign(window.deepArticles, {
  "general-electric-jet-engine-programs": generalElectricJetArticle({
    title:"General Electric jet-engine programs",category:"Aerospace industry",eyebrow:"United States · axial-flow and high-speed propulsion · 1941–2012",kicker:"Corporate aircraft-turbine register",landscape:generalElectricJetImage,
    lead:"<!-- altwwii-writer-block:start id=wb-g-20260816-g6a7b writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->General Electric's post-divergence route from British-assisted turbines through J35/J47, J79, J93, and later nuclear-electric machinery is an incorporated engine-industry reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup> The author directly requires a capable domestic industry but does not fix this exact corporate program register.<!-- altwwii-writer-block:end -->",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-g6c8d writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->The post-divergence British transfer, GE turbine role, TG-180/J35 transfer, J47, Neumann's 1948 appointment, J79/J93 schools and aircraft applications, nuclear-electric connection, divisions, plants, employment, contracts, blocks, production, costs, derivatives, and 2012 organization remain incorporated extrapolation or open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"origin",title:"British-assisted beginning",html:"<p>General Electric received British Whittle-engine information and hardware in 1941 and placed a small engineering group around the first American centrifugal-flow jet work. Turbo-supercharger experience supplied compressors, turbines, high-temperature alloys, fuel control, instrumentation, and production disciplines already familiar to the company.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>The early program was technically important and operationally small. American neutrality limited the procurement establishment that historically expanded after entry into the world war.</p>"},
      {id:"axial",title:"Axial-flow development",html:"<p>GE began the TG-180/J35 axial-flow engine and later transferred production-development responsibility to <a href='allison-engine-company.html'>Allison</a>. Allison substantially redesigned and supported the J35. General Electric continued the compressor line into J47 and retained an independent high-speed turbine organization.</p><p>The mixed GE–Allison history of J35 records a transfer of engineering responsibility rather than two unrelated engines.</p>"},
      {id:"register",title:"Program register",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Program</th><th>Principal technical role</th><th>Registered setting applications</th></tr></thead><tbody><tr><td>I-A and J31 work</td><td>British-assisted centrifugal-flow entry</td><td>Experimental and first-generation aircraft</td></tr><tr><td>TG-180 / J35</td><td>First American axial-flow line; transferred to Allison</td><td>F-84 and experimental aircraft after Allison development</td></tr><tr><td><a href='general-electric-j47.html'>J47</a></td><td>Production axial-flow turbojet</td><td>F-86 family · B-45 family · B-47 Stratojet</td></tr><tr><td><a href='general-electric-j79.html'>J79</a></td><td>Variable-stator Mach 2 turbojet</td><td>F-104A Starfighter · B-58A Hustler</td></tr><tr><td><a href='general-electric-j93.html'>J93</a></td><td>High-airflow Mach 3 turbojet</td><td>F-108A Rapier · B-70A Valkyrie</td></tr></tbody></table></div><p>The table records program families and principal accepted applications. Engine marks, production blocks, second-source contracts, and complete installation lists remain open.</p>"},
      {id:"neumann",title:"Gerhard Neumann and variable stators",html:"<p><a href='gerhard-neumann.html'>Gerhard Neumann</a> joined General Electric in 1948 after service with the American Volunteer Group and two years at Douglas Aircraft Research. His compressor work centered on movable stator vanes that allowed a high-pressure-ratio compressor to remain stable across starting, subsonic cruise, acceleration, altitude, and supersonic combat conditions.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>J79 converted the variable-stator principle into a major supported engine family. J93 enlarged the high-speed school for sustained operation near Mach 3.</p>"},
      {id:"facilities",title:"Engineering and production",html:"<p>GE's Lynn and Evendale organizations supplied design offices, compressor and turbine rigs, altitude and inlet testing, materials laboratories, controls work, production engineering, technical publications, and depot support. Federal laboratories and aircraft manufacturers supplied altitude chambers, flying testbeds, inlets, nacelles, and full-aircraft integration.</p><p>Exact transfers between facilities, departmental names, employment totals, and subcontracting arrangements are not registered.</p>"},
      {id:"applications",title:"Aircraft integration",html:"<p>J47 made GE a high-volume supplier to the first operational jet generation and to the B-47 fleet. J79 tied the company to Mach 2 point interception and strategic bombing. J93 linked one engine program to the F-108 interceptor and B-70 bomber, allowing test equipment, materials, controls, and production knowledge to serve both aircraft.</p><p>Inlets, afterburners, fuel controls, aircraft accessories, and nacelle installations were developed with airframe contractors and could differ substantially between aircraft sharing a basic engine family.</p>"},
      {id:"later",title:"Later industrial use",html:"<p>Aircraft-engine work fed aeroderivative generators, naval and industrial turbines, materials, controls, and power machinery. The same corporate breadth later supported space power conversion and high-output nuclear-electric propulsion.</p><p>By 2012 terrestrial turbines and extraterrestrial power systems occupied related but organizationally distinct parts of General Electric. Exact divisional boundaries remain open.</p>"},
      {id:"open",title:"Open corporate record",html:"<p>Detailed company organization, executive succession, individual contracts, plant expansion, workforce, engine production totals, licensing, civil-aircraft families, exports, overhaul networks, later turbofans, and 2012 legal structure await further registration.</p>"}
    ],
    related:[{href:"gerhard-neumann.html",kicker:"Compressor engineer",label:"Gerhard Neumann"},{href:"allison-j35-j71-engine-family.html",kicker:"Transferred J35 program",label:"Allison J35 and J71 Programs"},{href:"general-electric-j47.html",kicker:"Production axial-flow family",label:"General Electric J47"},{href:"general-electric-j79.html",kicker:"Mach 2 family",label:"General Electric J79"},{href:"general-electric-j93.html",kicker:"Mach 3 family",label:"General Electric J93"},{href:"american-space-propulsion-industry.html",kicker:"Extraterrestrial successor",label:"American Space-Propulsion Industry"}],
    sources:[generalElectricJetOfficialSources.early,generalElectricJetOfficialSources.history,generalElectricJetOfficialSources.ge],categories:["American companies"],
    facts:[["Canon status","Working post-divergence register"],["Working technical access","British Whittle program · 1941"],["Working axial-flow project","TG-180 / J35"],["Working production family","J47"],["Working Mach 2 family","J79"],["Working Mach 3 family","J93"],["Working principal engineer","Gerhard Neumann"],["Article horizon","5 January 2012"]]
  }),

  "general-electric-j47": generalElectricJetArticle({
    title:"General Electric J47",eyebrow:"United States · production axial-flow turbojet · first postwar jet generation",kicker:"Production axial-flow aircraft engine",
    lead:"<!-- altwwii-writer-block:start id=wb-g-20260816-j7a8b writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->The General Electric J47, its J35 foundation, F-86 and B-47 applications, and place before the variable-stator school are incorporated post-divergence reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-j7c9d writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->GE manufacture, J35 descent, architecture, production status, F-86/B-47/B-45 applications, place before J79, chronology, marks, performance, dimensions, production, contracts, failures, overhaul, and retirement are all incorporated post-divergence extrapolation or open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"development",title:"Development",html:"<p>J47 developed from the General Electric J35/TG-180 axial-flow foundation after production responsibility for J35 moved to Allison. The program retained a straight-through compressor-and-turbine arrangement and revised the engine for greater thrust, reliability, manufacture, and aircraft integration.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>Historical calendar dates provide technical context, but the setting does not yet fix a complete J47 development chronology.</p>"},
      {id:"design",title:"Design",html:"<p>The family used a single-spool axial compressor, annular airflow path, combustion system, axial turbine, accessory drive, fuel control, and a jet exhaust. Particular marks differed in compressor detail, turbine materials, controls, accessories, and afterburning or non-afterburning arrangement.</p><p>The National Museum's J47-GE-25 specimen has a twelve-stage compressor and single-stage turbine. That museum mark is a technical reference rather than a specification assigned to every setting installation.</p>"},
      {id:"applications",title:"Aircraft applications",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft family</th><th>Use in the setting</th></tr></thead><tbody><tr><td>F-86 Sabre</td><td>Principal swept-wing fighter application</td></tr><tr><td>B-45 Tornado</td><td>Later or compatible first-generation bomber installations; exact marks open</td></tr><tr><td><a href='b-47-stratojet.html'>B-47 Stratojet</a></td><td>Major six-engine production-bomber application</td></tr><tr><td>Experimental and auxiliary aircraft</td><td>Flight test, propulsion evaluation, and special installations</td></tr></tbody></table></div>"},
      {id:"production",title:"Production and support",html:"<p>J47 required compressor and turbine manufacture, precision balancing, fuel-control calibration, hot-section inspection, accessory supply, technical orders, field maintenance, and depot overhaul. The B-47 program made six-engine aircraft availability dependent upon both engine production and the repair pipeline.</p><p>The historical engine reached very large production. American neutrality and the divergent Philippine War make the setting total uncertain; no real-world total is imported.</p>"},
      {id:"service",title:"Service characteristics",html:"<p>Early axial-flow engines required careful starting and acceleration schedules and were sensitive to inlet distortion, compressor stall, foreign-object damage, temperature limits, and uneven wear. Aircraft installations added their own ducting, nacelles, bleed systems, generators, pumps, and controls.</p><p>Exact failure rates, inspection intervals, modification orders, and depot locations remain unregistered.</p>"},
      {id:"succession",title:"Succession",html:"<p>J47 established the production base from which General Electric moved toward higher pressure ratio and much wider operating conditions. The <a href='general-electric-j79.html'>J79</a> used variable stator vanes to manage the compressor across Mach 2 aircraft requirements; it was not a simple enlarged J47 mark.</p>"},
      {id:"open",title:"Open technical record",html:"<p>Setting engine marks, thrust ratings, dimensions, mass, fuel consumption, afterburners, control systems, aircraft-by-aircraft installations, production totals, subcontractors, overhaul system, accidents, exports, and retirement remain open.</p>"}
    ],
    related:[{href:"b-47-stratojet.html",kicker:"Principal bomber application",label:"B-47 Stratojet"},{href:"b-45-tornado.html",kicker:"First-generation bomber application",label:"B-45 Tornado"},{href:"f-86a-sabre.html",kicker:"Fighter application",label:"F-86A Sabre"},{href:"general-electric-j79.html",kicker:"High-speed successor",label:"General Electric J79"}],
    sources:[generalElectricJetOfficialSources.j47,generalElectricJetOfficialSources.history],categories:["Turbojet engines"],
    facts:[["Canon status","Working post-divergence engine"],["Working manufacturer","General Electric"],["Working type","Axial-flow turbojet family"],["Working foundation","J35 / TG-180"],["Working bomber","B-47 Stratojet"],["Working fighter family","F-86 Sabre"],["Production total","Open"],["Working successor","J79 variable-stator family"]]
  }),

  "general-electric-j79": generalElectricJetArticle({
    title:"General Electric J79",eyebrow:"United States · variable-stator afterburning turbojet · Mach 2 generation",kicker:"Mach 2 aircraft engine",landscape:generalElectricJetImage,
    lead:"<!-- altwwii-writer-block:start id=wb-g-20260816-j8a9b writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->The General Electric J79, its variable-stator architecture, Neumann association, Mach 2 purpose, and F-104A/B-58A applications are retained as an incorporated post-divergence engine register.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-j8c1d writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->GE manufacture, Neumann's design role, compressor and afterburner architecture, Mach 2 purpose, F-104A/B-58A applications, chronology, marks, stages, performance, dimensions, production, licenses, failures, overhaul, derivatives, and retirement are incorporated post-divergence extrapolation or open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"requirement",title:"Requirement",html:"<p>The engine requirement combined efficient high-subsonic cruise with rapid acceleration and sustained supersonic combat. A fixed-geometry compressor optimized for one condition could lose stall margin or efficiency elsewhere in the envelope.</p><p>General Electric selected the J79 proposal during the early 1950s. The setting retains the technical requirement and engine family while leaving exact contract and test dates open.</p>"},
      {id:"compressor",title:"Variable-stator compressor",html:"<p>Movable inlet guide vanes and stator rows changed the angle at which air entered later compressor stages. The control schedule matched compressor geometry to engine speed, inlet temperature, pressure, altitude, and throttle condition, preserving useful stall margin across a wide operating range.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p><a href='gerhard-neumann.html'>Gerhard Neumann</a> and the General Electric team made this system the defining feature of the engine program.</p>"},
      {id:"design",title:"Engine arrangement",html:"<p>The historical family used a single shaft, a long multistage axial compressor, a cannular combustion system, an axial turbine, and an afterburner. Smithsonian reference material records a seventeen-stage compressor and three-stage turbine for its preserved J79 specimen.</p><p>Stage counts, burner hardware, nozzle, controls, accessories, materials, and installed thrust varied by mark. The reference specimen does not define every setting engine.</p>"},
      {id:"applications",title:"Setting applications",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Registered use</th></tr></thead><tbody><tr><td><a href='f-104a-starfighter.html'>F-104A Starfighter</a></td><td>Mach 2 point interceptor introduced in 1958</td></tr><tr><td><a href='b-58a-hustler.html'>B-58A Hustler</a></td><td>High-supersonic conventional strategic bomber introduced in 1959</td></tr><tr><td>Research and test aircraft</td><td>Compressor, inlet, afterburner, and high-speed integration work; exact register open</td></tr></tbody></table></div>"},
      {id:"integration",title:"Aircraft integration",html:"<p>F-104 required a compact high-thrust installation behind a small frontal area. B-58 used four engines and coordinated them with a delta-wing bomber's inlets, fuel system, mission pod, and sustained high-speed duty. Shared engine ancestry did not make the two nacelle and inlet systems interchangeable.</p>"},
      {id:"production",title:"Production and maintenance",html:"<p>Variable stators added actuators, linkages, scheduling, calibration, inspection, and failure modes to the compressor. The system demanded clean assembly, repeatable geometry, fuel-control coordination, and careful troubleshooting.</p><p>Engine blocks could alter compressor blades, stator schedules, turbine materials, afterburners, nozzles, accessories, and controls. The setting's complete block and production register remains open.</p>"},
      {id:"industrial",title:"Industrial derivatives",html:"<p>J79 compressor and turbine practice influenced later aircraft engines and aeroderivative power machinery. GE adapted aviation turbine methods to electrical generation and industrial service, while variable geometry became part of the company's wider compressor tradition.</p>"},
      {id:"succession",title:"Relationship to J93",html:"<p>The <a href='general-electric-j93.html'>J93</a> enlarged General Electric's high-speed school for much greater airflow and sustained Mach 3 operation. It served the F-108A and B-70A pair rather than replacing J79 in all Mach 2 aircraft.</p>"},
      {id:"open",title:"Open technical record",html:"<p>Installed marks, dimensions, mass, thrust ratings, fuel consumption, materials, stator schedule, afterburner and nozzle blocks, production totals, licenses, depots, failure rates, modifications, exports, derivatives, and retirement remain unregistered.</p>"}
    ],
    related:[{href:"gerhard-neumann.html",kicker:"Principal engineer",label:"Gerhard Neumann"},{href:"f-104a-starfighter.html",kicker:"Interceptor application",label:"F-104A Starfighter"},{href:"b-58a-hustler.html",kicker:"Bomber application",label:"B-58A Hustler"},{href:"general-electric-j47.html",kicker:"Production predecessor",label:"General Electric J47"},{href:"general-electric-j93.html",kicker:"Mach 3 successor",label:"General Electric J93"}],
    sources:[generalElectricJetOfficialSources.j79,generalElectricJetOfficialSources.ge,generalElectricJetOfficialSources.j93],categories:["Turbojet engines","Supersonic aircraft"],
    facts:[["Canon status","Working post-divergence engine"],["Working manufacturer","General Electric"],["Working type","Afterburning axial-flow turbojet"],["Working compressor","Variable stator"],["Working principal engineer","Gerhard Neumann"],["Working regime","Mach 2"],["Working applications","F-104A Starfighter · B-58A Hustler"],["Detailed engine marks","Open"],["Working successor","J93"]]
  }),

  "general-electric-j93": generalElectricJetArticle({
    title:"General Electric J93",eyebrow:"United States · afterburning turbojet · sustained Mach 3 generation",kicker:"Mach 3 aircraft engine",
    lead:"<!-- altwwii-writer-block:start id=wb-g-20260816-j9a1b writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->The General Electric J93, its Mach 3 role, and shared F-108A/B-70A application are retained as incorporated post-divergence engine reconstruction.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    canon:"<!-- altwwii-writer-block:start id=wb-g-20260816-j9c2d writer=g kind=revision created=2026-08-16T11:20:00-06:00 -->GE manufacture, variable-geometry lineage, architecture, Mach 3 purpose, F-108A/B-70A applications, later influence, chronology, marks, performance, dimensions, fuels, materials, production, blocks, failures, depots, derivatives, and retirement are incorporated post-divergence extrapolation or open.<sup class='canon-note' data-provenance='e'>[e]</sup><!-- altwwii-writer-block:end -->",
    sections:[
      {id:"requirement",title:"Mach 3 requirement",html:"<p>Sustained Mach 3 flight imposed high inlet temperature, large airflow, long afterburning periods, severe nozzle and turbine loads, and tight coordination between engine and aircraft inlet. The requirement therefore covered a complete propulsion installation rather than a bare bench engine.</p>"},
      {id:"development",title:"Development",html:"<p>In the incorporated engine register, General Electric enlarges the high-speed compressor, turbine, burner, afterburner, control, and materials school demonstrated by J79. J93 serves both the proposed F-108 interceptor and B-70 bomber, preserving a wider application base for Mach 3 development.<sup class='canon-note' data-provenance='e'>[e]</sup></p><p>The author requires XF-108 to survive and XB/B-70 to end the terrestrial bomber line but does not directly fix their shared engine application.</p>"},
      {id:"design",title:"Engine arrangement",html:"<p>J93 was a large single-stream afterburning turbojet with axial compression, a high-temperature combustion and turbine system, a long afterburner, and a variable exhaust nozzle. Variable geometry and controls coordinated compressor operation with inlet pressure recovery and aircraft speed.</p><p>Exact stage counts, pressure ratio, airflow, turbine cooling, fuel schedule, nozzle geometry, and installed marks remain open.</p>"},
      {id:"applications",title:"Setting applications",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Engine installation</th><th>Service significance</th></tr></thead><tbody><tr><td><a href='f-108a-rapier.html'>F-108A Rapier</a></td><td>Twin-engine interceptor installation</td><td>Long-range Mach 3 strategic interception from 1966</td></tr><tr><td><a href='b-70a-valkyrie.html'>B-70A Valkyrie</a></td><td>Six-engine integrated propulsion package</td><td>Mach 3 conventional strategic bomber from 1969</td></tr></tbody></table></div>"},
      {id:"inlets",title:"Inlet and afterburner integration",html:"<p>At Mach 3 the inlet slowed and compressed air before it reached the compressor. Shock position, boundary-layer control, variable ramps or geometry, bleed, engine airflow demand, and nozzle area had to be coordinated. An inlet disturbance could propagate into compressor instability.</p><p>Afterburning supplied high thrust at the cost of fuel flow and thermal load. The exact operational schedules for interceptor patrol, acceleration, bomber cruise, and recovery remain unregistered.</p>"},
      {id:"materials",title:"Materials and maintenance",html:"<p>High-temperature alloys, coatings, seals, bearings, lubricants, fuel controls, and exhaust structures were life-limited items. Inspection had to account for thermal cycling, vibration, foreign-object damage, inlet disturbances, burner wear, and nozzle distortion.</p><p>F-108 and B-70 shared engine-family knowledge while retaining different nacelles, inlet systems, accessories, duty cycles, and depot requirements.</p>"},
      {id:"industrial",title:"Industrial legacy",html:"<p>J93 data supported later sustained-supersonic studies, high-temperature machinery, large variable-geometry compressors, and General Electric's wider turbine business. The engine's setting production history differs from the historical prototype-only application because both F-108A and B-70A entered service.</p>"},
      {id:"limits",title:"Open technical record",html:"<p>Engine marks, specifications, fuel, thrust, dimensions, mass, aircraft block assignments, production total, test sites, subcontractors, failure rates, depot locations, modification orders, later derivatives, and retirement remain open.</p>"}
    ],
    related:[{href:"f-108a-rapier.html",kicker:"Interceptor application",label:"F-108A Rapier"},{href:"b-70a-valkyrie.html",kicker:"Bomber application",label:"B-70A Valkyrie"},{href:"general-electric-j79.html",kicker:"Variable-stator predecessor",label:"General Electric J79"},{href:"century-series.html",kicker:"Interceptor generation",label:"Century Series"}],
    sources:[generalElectricJetOfficialSources.j93,generalElectricJetOfficialSources.history,generalElectricJetOfficialSources.ge],categories:["Turbojet engines","Hypersonic aircraft"],
    facts:[["Canon status","Working post-divergence engine"],["Working manufacturer","General Electric"],["Working type","Afterburning axial-flow turbojet"],["Working regime","Sustained Mach 3"],["Working interceptor application","F-108A Rapier · two engines"],["Working bomber application","B-70A Valkyrie · six engines"],["Working production status","Operational engine family"],["Detailed setting marks","Open"]]
  })
});

const generalElectricJetLinkFirst = (html,label,href) => html.includes(`href='${href}'`) || html.includes(`href="${href}"`) ? html : html.replace(label,`<a href='${href}'>${label}</a>`);
const generalElectricJetRelatedOnce = (article,item) => {
  if (article && !article.related.some(link => link.href === item.href)) article.related.push(item);
};
const generalElectricJetSection = (article,id) => article && article.sections.find(section => section.id === id);

const geCompany = window.deepArticles["general-electric"];
if (geCompany) {
  const aviation = generalElectricJetSection(geCompany,"aviation");
  if (aviation) {
    aviation.html = generalElectricJetLinkFirst(aviation.html,"jet propulsion","general-electric-jet-engine-programs.html");
    aviation.html += "<p>The <a href='general-electric-j47.html'>J47</a> supplied the first production axial-flow generation. The <a href='general-electric-j79.html'>J79</a> and <a href='general-electric-j93.html'>J93</a> established the company's Mach 2 and Mach 3 engine families.</p>";
  }
  generalElectricJetRelatedOnce(geCompany,{href:"general-electric-jet-engine-programs.html",kicker:"Aircraft-turbine register",label:"General Electric Jet-Engine Programs"});
  generalElectricJetRelatedOnce(geCompany,{href:"general-electric-j79.html",kicker:"Mach 2 engine family",label:"General Electric J79"});
  generalElectricJetRelatedOnce(geCompany,{href:"general-electric-j93.html",kicker:"Mach 3 engine family",label:"General Electric J93"});
}

const jetIndustry = window.deepArticles["american-jet-engine-industry"];
if (jetIndustry) {
  const ge = generalElectricJetSection(jetIndustry,"ge");
  if (ge) {
    ge.html = generalElectricJetLinkFirst(ge.html,"General Electric","general-electric-jet-engine-programs.html");
    ge.html = generalElectricJetLinkFirst(ge.html,"J47","general-electric-j47.html");
    ge.html = generalElectricJetLinkFirst(ge.html,"J79","general-electric-j79.html");
    ge.html = generalElectricJetLinkFirst(ge.html,"J93","general-electric-j93.html");
  }
  generalElectricJetRelatedOnce(jetIndustry,{href:"general-electric-jet-engine-programs.html",kicker:"GE program register",label:"General Electric Jet-Engine Programs"});
  generalElectricJetRelatedOnce(jetIndustry,{href:"general-electric-j47.html",kicker:"Production axial-flow family",label:"General Electric J47"});
  generalElectricJetRelatedOnce(jetIndustry,{href:"general-electric-j79.html",kicker:"Mach 2 family",label:"General Electric J79"});
  generalElectricJetRelatedOnce(jetIndustry,{href:"general-electric-j93.html",kicker:"Mach 3 family",label:"General Electric J93"});
}

const neumann = window.deepArticles["gerhard-neumann"];
if (neumann) {
  const ge = generalElectricJetSection(neumann,"ge");
  if (ge) ge.html = generalElectricJetLinkFirst(ge.html,"J79","general-electric-j79.html");
  generalElectricJetRelatedOnce(neumann,{href:"general-electric-j79.html",kicker:"Principal engine program",label:"General Electric J79"});
  generalElectricJetRelatedOnce(neumann,{href:"general-electric-jet-engine-programs.html",kicker:"Corporate program context",label:"General Electric Jet-Engine Programs"});
}

const century = window.deepArticles["century-series"];
if (century) {
  const programs = generalElectricJetSection(century,"programs");
  if (programs) {
    programs.html = generalElectricJetLinkFirst(programs.html,"General Electric J79","general-electric-j79.html");
    programs.html = generalElectricJetLinkFirst(programs.html,"General Electric J93","general-electric-j93.html");
  }
  const propulsion = generalElectricJetSection(century,"propulsion");
  if (propulsion) {
    propulsion.html = generalElectricJetLinkFirst(propulsion.html,"J79","general-electric-j79.html");
    propulsion.html = generalElectricJetLinkFirst(propulsion.html,"J93","general-electric-j93.html");
  }
  generalElectricJetRelatedOnce(century,{href:"general-electric-j79.html",kicker:"F-104 propulsion",label:"General Electric J79"});
  generalElectricJetRelatedOnce(century,{href:"general-electric-j93.html",kicker:"F-108 propulsion",label:"General Electric J93"});
}

const b47 = window.deepArticles["b-47-stratojet"];
if (b47) {
  const propulsion = generalElectricJetSection(b47,"propulsion");
  if (propulsion) propulsion.html = generalElectricJetLinkFirst(propulsion.html,"General Electric J47","general-electric-j47.html");
  generalElectricJetRelatedOnce(b47,{href:"general-electric-j47.html",kicker:"Principal engine family",label:"General Electric J47"});
}

const f104 = window.deepArticles["f-104a-starfighter"];
if (f104) {
  const development = generalElectricJetSection(f104,"development");
  if (development) development.html = generalElectricJetLinkFirst(development.html,"J79","general-electric-j79.html");
  generalElectricJetRelatedOnce(f104,{href:"general-electric-j79.html",kicker:"Principal engine family",label:"General Electric J79"});
}

const b58 = window.deepArticles["b-58a-hustler"];
if (b58) {
  const development = generalElectricJetSection(b58,"development");
  if (development && !development.html.includes("general-electric-j79.html")) development.html = development.html.replace("four turbojet engines","four <a href='general-electric-j79.html'>General Electric J79</a> turbojet engines");
  generalElectricJetRelatedOnce(b58,{href:"general-electric-j79.html",kicker:"Principal engine family",label:"General Electric J79"});
}

const f108 = window.deepArticles["f-108a-rapier"];
if (f108) {
  const development = generalElectricJetSection(f108,"development");
  if (development) development.html = generalElectricJetLinkFirst(development.html,"J93","general-electric-j93.html");
  generalElectricJetRelatedOnce(f108,{href:"general-electric-j93.html",kicker:"Principal engine family",label:"General Electric J93"});
}

const b70 = window.deepArticles["b-70a-valkyrie"];
if (b70) {
  const development = generalElectricJetSection(b70,"development");
  if (development && !development.html.includes("general-electric-j93.html")) development.html = development.html.replace("six engines","six <a href='general-electric-j93.html'>General Electric J93</a> engines");
  generalElectricJetRelatedOnce(b70,{href:"general-electric-j93.html",kicker:"Principal engine family",label:"General Electric J93"});
}
