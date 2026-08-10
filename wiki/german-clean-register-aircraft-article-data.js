window.deepArticles = window.deepArticles || {};

const germanCleanAircraftSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — first German clean-register generation"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German military and aerospace development"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar German consolidation and aerospace competition"},
  {href:"../transcript.md",label:"Master Transcript — Luftwaffe organization, technology, and registry decisions"}
];

const germanCleanAircraftLandscape = {
  src:"assets/diagrams/german-clean-register-generation.svg",
  alt:"Timeline of the five German clean-register aircraft introduced between 1956 and 1962",
  caption:"The first 500-series generation separates all-weather interception, frontline fighting, fast strike, penetration reconnaissance, and maritime-electronic patrol"
};

const germanCleanAircraftArticle = config => ({
  category:"Military aircraft", eyebrow:"German 500-series military aircraft", landscape:germanCleanAircraftLandscape,
  ...config, sources:germanCleanAircraftSources,
  categories:config.categories || ["Greater German Reich","Luftwaffe","Military aircraft","Jet aircraft","Aerospace industry"]
});

const cleanGenerationRelated = [
  {href:"german-clean-register-generation.html",kicker:"Aircraft generation",label:"First Clean-Register Generation"},
  {href:"reichsluftgeraetordnung-1948.html",kicker:"Designation authority",label:"Reichsluftgerätordnung 1948"},
  {href:"german-early-jet-generation.html",kicker:"Predecessor generation",label:"German Early Jets"},
  {href:"germany.html",kicker:"Country of origin",label:"Greater German Reich"}
];

Object.assign(window.deepArticles, {
  "german-clean-register-generation": germanCleanAircraftArticle({
    title:"First German clean-register aircraft generation", category:"Aircraft lineage", eyebrow:"Luftwaffe 500-series development · 1956–1962", infoboxKicker:"First postwar clean-register generation", infoboxTitle:"German 500-series aircraft",
    lead:"The first German clean-register aircraft generation comprised five operational types introduced between 1956 and 1962 under the Reichsluftgerätordnung 1948. Numbered from Me 501 through Ju 506, the generation replaced victory-era extensions and project-derived stopgaps with purpose-built all-weather interception, frontline fighting, fast strike, penetration reconnaissance, and maritime-electronic patrol aircraft.",
    canon:"The five-aircraft register, designations, introduction years, missions, maximum speeds, combat radii, ceilings, and armament or stores are fixed. The 500-block's origin in the 1948 regulation and the separation of roles are fixed. Exact missing register numbers, procurement competitions, engines, dimensions, crews, radars, production, units, bases, variants, operations, exports, losses, retirement, and detailed design ancestry remain open.",
    sections:[
      {id:"regulation",title:"A clean postwar register",html:"<p>The <a href='reichsluftgeraetordnung-1948.html'>Reichsluftgerätordnung 1948</a> reserves the 500 block for clean-sheet postwar operational aircraft while preserving established designations already in service. The new generation therefore marks an administrative and technical break without erasing the <a href='german-early-jet-generation.html'>victory-era jets</a>.</p>"},
      {id:"registry",title:"Registered aircraft",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Aircraft</th><th>Introduction</th><th>Mission</th><th>Maximum speed</th><th>Combat radius</th></tr></thead><tbody><tr><td><a href='me-501a-1-falke.html'>Me 501A-1 Falke</a></td><td>1956</td><td>Twin-engine all-weather interceptor</td><td>1,620 km/h</td><td>850 km</td></tr><tr><td><a href='fw-502a-1-habicht.html'>Fw 502A-1 Habicht</a></td><td>1957</td><td>Single-engine frontline fighter</td><td>1,490 km/h</td><td>690 km</td></tr><tr><td><a href='ar-503a-1-blitz-ii.html'>Ar 503A-1 Blitz II</a></td><td>1958</td><td>Fast strike and reconnaissance</td><td>1,670 km/h</td><td>1,150 km</td></tr><tr><td><a href='ho-505a-1-nachtfluegel.html'>Ho 505A-1 Nachtflügel</a></td><td>1961</td><td>Flying-wing penetration reconnaissance</td><td>1,080 km/h</td><td>2,200 km</td></tr><tr><td><a href='ju-506a-1.html'>Ju 506A-1</a></td><td>1962</td><td>Maritime patrol and electronic reconnaissance</td><td>680 km/h</td><td>3,500 km</td></tr></tbody></table></div>"},
      {id:"fighters",title:"Interceptor and frontline-fighter pair",html:"<p>The twin-engine Me 501 carries four Luftlanze 55 missiles and heavy cannon for all-weather interception. The single-engine Fw 502 accepts a shorter radius and lighter battery for ordinary frontline fighter service. Shared missile naming does not make the aircraft interchangeable.</p>"},
      {id:"strike",title:"Fast strike and reconnaissance",html:"<p>The Ar 503 combines the generation's highest registered speed with a 4,000 kg stores load and a 1,150 km combat radius. The register preserves strike and reconnaissance as a paired Arado branch.</p>"},
      {id:"penetration",title:"Flying-wing penetration reconnaissance",html:"<p>The Ho 505 trades speed for a 2,200 km radius, 17,800 m ceiling, and 5,000 kg internal load. The public name <em>Nachtflügel</em> and flying-wing mission continue a specialized Horten tradition without proving direct component inheritance from the Ho 229.</p>"},
      {id:"maritime",title:"Maritime and electronic patrol",html:"<p>The Ju 506 is the generation's longest-ranged aircraft. Its 3,500 km combat radius supports patrol and electronic reconnaissance, with sensors, mines, torpedoes, or guided weapons selected by mission.</p>"},
      {id:"systems",title:"Missiles, sensors, and mission systems",html:"<p>The generation enters the practical missile and all-weather era, but the registry does not specify radar models, data links, electronic-warfare suites, navigation equipment, missile guidance, or ground-control networks. Those systems should not be invented from performance figures alone.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The five types establish enduring manufacturer-role branches later represented by the <a href='german-mature-atmospheric-fleet.html'>Me 511 interceptor, Fw 512 fighter, Ar 513 strike aircraft, Fw 514 close-support aircraft, and Ju 516 maritime platform</a>. The registered role continuity does not settle exact design descent.</p>"}
    ],
    related:[{href:"me-501a-1-falke.html",kicker:"All-weather interceptor",label:"Me 501A-1 Falke"},{href:"fw-502a-1-habicht.html",kicker:"Frontline fighter",label:"Fw 502A-1 Habicht"},{href:"ar-503a-1-blitz-ii.html",kicker:"Fast strike aircraft",label:"Ar 503A-1 Blitz II"},{href:"ho-505a-1-nachtfluegel.html",kicker:"Penetration reconnaissance",label:"Ho 505A-1 Nachtflügel"},{href:"ju-506a-1.html",kicker:"Maritime-electronic patrol",label:"Ju 506A-1"},{href:"german-mature-atmospheric-fleet.html",kicker:"Successor system",label:"German Mature Atmospheric Fleet"}],
    facts:[["Period","1956–1962"],["Registered aircraft","Five"],["Designation block","500 series"],["Fastest aircraft","Ar 503A-1 · 1,670 km/h"],["Longest combat radius","Ju 506A-1 · 3,500 km"],["Highest ceiling","Ho 505A-1 · 17,800 m"],["Missile-equipped fighters","Me 501A-1 and Fw 502A-1"],["Governing regulation","Reichsluftgerätordnung 1948"]]
  }),

  "me-501a-1-falke": germanCleanAircraftArticle({
    title:"Me 501A-1 Falke", eyebrow:"Twin-engine all-weather interceptor · introduced 1956", infoboxKicker:"All-weather interceptor", infoboxTitle:"Me 501A-1 Falke",
    lead:"The Me 501A-1 Falke was Germany's twin-engine all-weather interceptor introduced in 1956 and the first registered aircraft of the postwar 500-series generation. It combined a 1,620 km/h maximum speed and 850 km combat radius with two 30×170 mm cannon and four Luftlanze 55 air-to-air missiles.",
    canon:"The Me 501A-1 Falke designation and public name, 1956 introduction, twin-engine-all-weather-interceptor mission, 1,620 km/h maximum speed, 850 km combat radius, 17,500 m ceiling, two 30×170 mm cannon, and four Luftlanze 55 missiles are fixed. Engine, dimensions, mass, crew, radar, missile guidance, avionics, production, units, variants, operations, losses, and retirement remain open.",
    sections:[
      {id:"origin",title:"First operational 500-series type",html:"<p>Falke is the first listed clean-sheet operational aircraft in the 500 block created by the 1948 registry reform. Its number marks administrative regularization as well as a new technical generation.</p>"},
      {id:"ancestry",title:"From Me 262 research",html:"<p>The unclassified Me 262G HG-III research aircraft contributes redesigned engine-installation, wing, and fuselage work to Me 501. This establishes a research relationship, not a claim that Falke is merely another Me 262 variant.</p>"},
      {id:"mission",title:"All-weather interception",html:"<p>The aircraft is registered for twin-engine all-weather interception. Radar, ground control, navigation, crew division, night-fighting procedure, and target priorities remain open.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1956</td></tr><tr><th>Mission</th><td>Twin-engine all-weather interceptor</td></tr><tr><th>Maximum speed</th><td>1,620 km/h</td></tr><tr><th>Combat radius</th><td>850 km</td></tr><tr><th>Ceiling</th><td>17,500 m</td></tr><tr><th>Armament</th><td>Two 30×170 mm cannon; four Luftlanze 55 missiles</td></tr></tbody></table></div>"},
      {id:"weapons",title:"Cannon and missile battery",html:"<p>Two 30×170 mm cannon provide fixed armament and four Luftlanze 55 missiles extend engagement distance. Gun models, ammunition, missile guidance, seeker, range, carriage, and employment rules remain open.</p>"},
      {id:"comparison",title:"Relationship to Habicht",html:"<p>The 1957 <a href='fw-502a-1-habicht.html'>Fw 502A-1 Habicht</a> is a lighter single-engine frontline fighter carrying two missiles. The pair represents distinct force categories rather than high and low variants of one program.</p>"},
      {id:"successor",title:"Interceptor lineage",html:"<p>The 1967 <a href='me-511a-1-adler.html'>Me 511A-1 Adler</a> later assumes the heavy-interceptor mission. Direct component continuity, upgrade paths, and the timing of Falke's replacement remain open.</p>"},
      {id:"limits",title:"Open service history",html:"<p>Prototype dates, engines, crew, radar, production, units, bases, alerts, operations, losses, upgrades, exports, and retirement remain unregistered.</p>"}
    ], related:[...cleanGenerationRelated,{href:"me-262f.html",kicker:"Research predecessor",label:"Me 262F and HG-III Line"},{href:"fw-502a-1-habicht.html",kicker:"Frontline-fighter partner",label:"Fw 502A-1 Habicht"}],
    facts:[["Country of origin","Greater German Reich"],["Introduction","1956"],["Mission","Twin-engine all-weather interceptor"],["Maximum speed","1,620 km/h"],["Combat radius","850 km"],["Ceiling","17,500 m"],["Cannon","Two 30×170 mm"],["Missiles","Four Luftlanze 55"]]
  }),

  "fw-502a-1-habicht": germanCleanAircraftArticle({
    title:"Fw 502A-1 Habicht", eyebrow:"Single-engine frontline fighter · introduced 1957", infoboxKicker:"Frontline jet fighter", infoboxTitle:"Fw 502A-1 Habicht",
    lead:"The Fw 502A-1 Habicht was Germany's single-engine frontline fighter introduced in 1957. It paired a 1,490 km/h maximum speed and 690 km combat radius with two 20×139 mm cannon and two Luftlanze 55 missiles, providing the lighter operational complement to the twin-engine Me 501 interceptor.",
    canon:"The Fw 502A-1 Habicht designation and public name, 1957 introduction, single-engine-frontline-fighter mission, 1,490 km/h maximum speed, 690 km combat radius, 16,300 m ceiling, two 20×139 mm cannon, and two Luftlanze 55 missiles are fixed. Engine, dimensions, mass, crew, radar, avionics, production, units, variants, operations, losses, exports, and retirement remain open.",
    sections:[
      {id:"role",title:"Frontline fighter branch",html:"<p>Habicht is registered for ordinary frontline fighter service rather than long-range or all-weather interception. Exact air-superiority, escort, patrol, and ground-alert doctrine remain open.</p>"},
      {id:"introduction",title:"Introduction in 1957",html:"<p>The aircraft follows the Me 501 by one year as the second listed 500-series type. Prototype, acceptance, first-unit, and production dates remain unregistered.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1957</td></tr><tr><th>Mission</th><td>Single-engine frontline fighter</td></tr><tr><th>Maximum speed</th><td>1,490 km/h</td></tr><tr><th>Combat radius</th><td>690 km</td></tr><tr><th>Ceiling</th><td>16,300 m</td></tr><tr><th>Armament</th><td>Two 20×139 mm cannon; two Luftlanze 55 missiles</td></tr></tbody></table></div>"},
      {id:"weapons",title:"Lighter fighter armament",html:"<p>Two 20×139 mm cannon and two Luftlanze 55 missiles give Habicht a lighter registered battery than Falke. Ammunition, missile guidance, pylons, and alternative loads remain open.</p>"},
      {id:"pair",title:"High-low force distinction",html:"<p>The <a href='me-501a-1-falke.html'>Me 501A-1 Falke</a> has two engines, heavier cannon, four missiles, greater speed, and greater radius. Habicht's separate frontline role preserves fleet depth without treating the fighter as a reduced Falke variant.</p>"},
      {id:"name",title:"Habicht name",html:"<p><em>Habicht</em>, meaning goshawk, is the fixed public name. The naming source, ceremony, unit associations, and propaganda treatment remain open.</p>"},
      {id:"successor",title:"Later Focke-Wulf fighter branch",html:"<p>The 1969 <a href='fw-512a-1-sperber.html'>Fw 512A-1 Sperber</a> and 1980 <a href='fw-522a-1-habicht-ii.html'>Fw 522A-1 Habicht II</a> later occupy air-superiority roles. Detailed design ancestry and replacement schedules remain open.</p>"},
      {id:"limits",title:"Open service history",html:"<p>Engine, structure, avionics, radar, production, units, bases, readiness, operations, losses, exports, upgrades, and retirement remain unregistered.</p>"}
    ], related:[...cleanGenerationRelated,{href:"me-501a-1-falke.html",kicker:"All-weather partner",label:"Me 501A-1 Falke"},{href:"ta-183a-1-huckebein.html",kicker:"Frontline predecessor",label:"Ta 183A-1 Huckebein"}],
    facts:[["Country of origin","Greater German Reich"],["Introduction","1957"],["Mission","Single-engine frontline fighter"],["Maximum speed","1,490 km/h"],["Combat radius","690 km"],["Ceiling","16,300 m"],["Cannon","Two 20×139 mm"],["Missiles","Two Luftlanze 55"]]
  }),

  "ar-503a-1-blitz-ii": germanCleanAircraftArticle({
    title:"Ar 503A-1 Blitz II", eyebrow:"Fast strike and reconnaissance aircraft · introduced 1958", infoboxKicker:"Fast strike aircraft", infoboxTitle:"Ar 503A-1 Blitz II",
    lead:"The Ar 503A-1 Blitz II was Germany's fast strike and reconnaissance aircraft introduced in 1958. The fastest registered aircraft of the first 500-series generation, it combined a 1,670 km/h maximum speed with a 1,150 km combat radius and 4,000 kg stores load.",
    canon:"The Ar 503A-1 Blitz II designation and public name, 1958 introduction, fast-strike-and-reconnaissance mission, 1,670 km/h maximum speed, 1,150 km combat radius, 17,000 m ceiling, and 4,000 kg stores are fixed. Engine, dimensions, mass, crew, sensors, cameras, navigation, armament, production, units, variants, operations, losses, and retirement remain open.",
    sections:[
      {id:"lineage",title:"Blitz strike lineage",html:"<p>The public name continues the Arado fast-bomber and reconnaissance tradition represented by the <a href='ar-234c-3-blitz.html'>Ar 234C-3 Blitz</a>. Exact airframe, component, office, and production continuity remain open.</p>"},
      {id:"mission",title:"Fast strike and reconnaissance",html:"<p>The register pairs strike and reconnaissance in one type. It does not establish whether equipment kits, dedicated subvariants, or mixed units divide those missions.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1958</td></tr><tr><th>Mission</th><td>Fast strike and reconnaissance</td></tr><tr><th>Maximum speed</th><td>1,670 km/h</td></tr><tr><th>Combat radius</th><td>1,150 km</td></tr><tr><th>Ceiling</th><td>17,000 m</td></tr><tr><th>Stores load</th><td>4,000 kg</td></tr></tbody></table></div>"},
      {id:"speed",title:"Generation speed leader",html:"<p>Blitz II is the fastest registered member of the five-aircraft generation, narrowly exceeding Falke. Acceleration, low-altitude performance, dash duration, and reconnaissance profile remain open.</p>"},
      {id:"stores",title:"Strike load",html:"<p>The aircraft carries 4,000 kg of stores. Internal or external arrangement, bombs, tanks, cameras, guided weapons, and load-radius tradeoffs are unregistered.</p>"},
      {id:"recon",title:"Reconnaissance system",html:"<p>Camera types, side-looking sensors, electronic collection, crew stations, data recovery, and all-weather navigation are not fixed by the role label.</p>"},
      {id:"successor",title:"Later Arado branch",html:"<p>The <a href='ar-513a-1-blitz-iii.html'>Ar 513A-1 Blitz III</a> and <a href='ar-523a-1-blitz-iv.html'>Ar 523A-1 Blitz IV</a> later continue theater-strike roles. Exact replacement, shared systems, and production overlap remain open.</p>"},
      {id:"limits",title:"Open service history",html:"<p>Engines, crew, dimensions, avionics, production, variants, units, bases, operations, losses, exports, upgrades, and retirement remain unregistered.</p>"}
    ], related:[...cleanGenerationRelated,{href:"ar-234c-3-blitz.html",kicker:"Victory-era predecessor",label:"Ar 234C-3 Blitz"},{href:"ho-505a-1-nachtfluegel.html",kicker:"Long-range reconnaissance partner",label:"Ho 505A-1 Nachtflügel"}],
    facts:[["Country of origin","Greater German Reich"],["Introduction","1958"],["Mission","Fast strike and reconnaissance"],["Maximum speed","1,670 km/h"],["Combat radius","1,150 km"],["Ceiling","17,000 m"],["Stores load","4,000 kg"],["Generation distinction","Highest maximum speed"]]
  }),

  "ho-505a-1-nachtfluegel": germanCleanAircraftArticle({
    title:"Ho 505A-1 Nachtflügel", eyebrow:"Flying-wing penetration reconnaissance · introduced 1961", infoboxKicker:"Penetration-reconnaissance aircraft", infoboxTitle:"Ho 505A-1 Nachtflügel",
    lead:"The Ho 505A-1 Nachtflügel was Germany's flying-wing penetration-reconnaissance aircraft introduced in 1961. It traded the speed of contemporary interceptors and strike aircraft for a 2,200 km combat radius, 17,800 m ceiling, and 5,000 kg internal stores capacity.",
    canon:"The Ho 505A-1 Nachtflügel designation and public name, 1961 introduction, flying-wing-penetration-reconnaissance mission, 1,080 km/h maximum speed, 2,200 km combat radius, 17,800 m ceiling, and 5,000 kg internal stores are fixed. Engine, dimensions, mass, crew, structure, sensors, radar signature, stores, production, units, variants, operations, losses, and retirement remain open.",
    sections:[
      {id:"tradition",title:"Postwar flying-wing branch",html:"<p>Nachtflügel follows the specialized flying-wing tradition of the <a href='ho-229a-2.html'>Ho 229 family</a>. The shared manufacturer and configuration do not by themselves establish direct component or airframe ancestry.</p>"},
      {id:"mission",title:"Penetration reconnaissance",html:"<p>The aircraft is registered to penetrate defended airspace for reconnaissance. Sensors, photographic equipment, electronic collection, route planning, weather capability, and defensive systems remain open.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1961</td></tr><tr><th>Mission</th><td>Flying-wing penetration reconnaissance</td></tr><tr><th>Maximum speed</th><td>1,080 km/h</td></tr><tr><th>Combat radius</th><td>2,200 km</td></tr><tr><th>Ceiling</th><td>17,800 m</td></tr><tr><th>Internal stores</th><td>5,000 kg</td></tr></tbody></table></div>"},
      {id:"range",title:"Range and altitude",html:"<p>Nachtflügel has the greatest ceiling and second-greatest combat radius of the generation. The registry does not specify whether the 5,000 kg internal capacity represents sensors, fuel, weapons, or interchangeable mission equipment in typical service.</p>"},
      {id:"internal",title:"Internal stores",html:"<p>The internal-load description is fixed. Bay arrangement, cameras, electronic equipment, bombs, fuel, and mission-specific mass fractions remain open.</p>"},
      {id:"signature",title:"Radar-signature caution",html:"<p>The Ho 229 had a useful secondary low radar return, but no mature 1940s stealth doctrine. Nachtflügel's later date does not establish a quantified low-observable requirement or signature-control system without further canon.</p>"},
      {id:"successor",title:"Place in the later register",html:"<p>No direct later Ho-series operational aircraft is listed through 1985. Whether the role passes to other manufacturers, satellites, or unregistered projects remains open.</p>"},
      {id:"limits",title:"Open service history",html:"<p>Engines, crew, dimensions, sensors, production, variants, units, bases, missions, losses, signature data, upgrades, and retirement remain unregistered.</p>"}
    ], related:[...cleanGenerationRelated,{href:"ho-229a-2.html",kicker:"Flying-wing predecessor",label:"Ho 229A-2"},{href:"ar-503a-1-blitz-ii.html",kicker:"Fast reconnaissance partner",label:"Ar 503A-1 Blitz II"}],
    facts:[["Country of origin","Greater German Reich"],["Introduction","1961"],["Mission","Flying-wing penetration reconnaissance"],["Maximum speed","1,080 km/h"],["Combat radius","2,200 km"],["Ceiling","17,800 m"],["Internal stores","5,000 kg"],["Public name","Nachtflügel"]]
  }),

  "ju-506a-1": germanCleanAircraftArticle({
    title:"Ju 506A-1", eyebrow:"Maritime patrol and electronic reconnaissance · introduced 1962", infoboxKicker:"Long-range maritime patrol aircraft", infoboxTitle:"Ju 506A-1",
    lead:"The Ju 506A-1 was Germany's maritime-patrol and electronic-reconnaissance aircraft introduced in 1962. Its 3,500 km combat radius was the longest in the first 500-series generation, supporting missions with sensors, mines, torpedoes, or guided weapons rather than one fixed combat load.",
    canon:"The Ju 506A-1 designation, 1962 introduction, maritime-patrol-and-electronic-reconnaissance mission, 680 km/h maximum speed, 3,500 km combat radius, 11,000 m ceiling, and alternative sensors, mines, torpedoes, or guided-weapons loads are fixed. Engine, dimensions, mass, crew, endurance, sensors, weapon models, production, units, bases, variants, operations, losses, and retirement remain open.",
    sections:[
      {id:"mission",title:"Maritime and electronic patrol",html:"<p>The Ju 506 combines wide-area maritime surveillance with electronic reconnaissance. The registry does not divide aircraft or units between those tasks.</p>"},
      {id:"introduction",title:"Introduction in 1962",html:"<p>The aircraft closes the first clean-register generation six years after Falke. Development, prototype, acceptance, production, and first-patrol dates remain open.</p>"},
      {id:"performance",title:"Registered performance",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1962</td></tr><tr><th>Mission</th><td>Maritime patrol and electronic reconnaissance</td></tr><tr><th>Maximum speed</th><td>680 km/h</td></tr><tr><th>Combat radius</th><td>3,500 km</td></tr><tr><th>Ceiling</th><td>11,000 m</td></tr><tr><th>Load</th><td>Sensors, mines, torpedoes, or guided weapons</td></tr></tbody></table></div>"},
      {id:"range",title:"Generation range leader",html:"<p>The 3,500 km combat radius is the generation's longest. Endurance, loiter time, patrol profile, basing, and refueling are not fixed and cannot be derived directly from radius alone.</p>"},
      {id:"payload",title:"Mission-selectable payload",html:"<p>Sensors, mines, torpedoes, or guided weapons form alternative registered loads. Models, quantities, bays, pylons, sonobuoys, search radar, and electronic-support measures remain open.</p>"},
      {id:"network",title:"Fleet and shore integration",html:"<p>The mission logically requires communication with naval and coastal commands, but the registry does not specify data links, control authority, submarine cooperation, or maritime-warning networks.</p>"},
      {id:"successor",title:"Seeadler succession",html:"<p>The 1972 <a href='ju-516a-1-seeadler.html'>Ju 516A-1 Seeadler</a> later carries maritime patrol and missile-control duties. Direct design ancestry, shared crews, unit conversion, and overlap remain open.</p>"},
      {id:"limits",title:"Open service history",html:"<p>Engines, crew, dimensions, endurance, sensors, weapons, production, variants, units, bases, patrol areas, incidents, losses, upgrades, and retirement remain unregistered.</p>"}
    ], related:[...cleanGenerationRelated,{href:"ar-503a-1-blitz-ii.html",kicker:"Land reconnaissance contemporary",label:"Ar 503A-1 Blitz II"},{href:"military-technology.html#naval",kicker:"Maritime warfare portal",label:"Military Technology"}],
    facts:[["Country of origin","Greater German Reich"],["Introduction","1962"],["Mission","Maritime patrol and electronic reconnaissance"],["Maximum speed","680 km/h"],["Combat radius","3,500 km"],["Ceiling","11,000 m"],["Payload","Sensors, mines, torpedoes, or guided weapons"],["Generation distinction","Longest combat radius"]]
  })
});
