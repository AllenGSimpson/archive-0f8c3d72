window.deepArticles = window.deepArticles || {};

const japaneseShuTankSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Japanese armored registry and Shu lineage"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese military and industrial system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Japanese armored development"},
  {href:"../transcript.md",label:"Master Transcript — Japanese mechanization and associated-state warfare"}
];

const japaneseShuTankArticle = config => ({
  category:"Military equipment",
  eyebrow:"Japanese main-force tank",
  infoboxKicker:"Main battle tank",
  ...config,
  sources:japaneseShuTankSources,
  categories:config.categories || ["Japan","Main battle tanks","Military vehicles","Imperial Japanese Army"]
});

Object.assign(window.deepArticles, {
  "type-16-shu-ha": japaneseShuTankArticle({
    title:"Type 16 Shu-Ha",
    eyebrow:"Japanese main battle tank · entered service 1956",
    infoboxTitle:"Type 16 Shu-Ha",
    lead:"The Type 16 Shu-Ha is Japan's first main battle tank and the first production vehicle of the Shu main-force lineage. Adopted in 1956, it combines a 90 mm gun, compact diesel power, optical rangefinding, four-person operation, and protection against common medium-caliber weapons in a 36-tonne vehicle designed for maritime transport, restricted bridges, narrow roads, and dispersed imperial service.",
    canon:"The Type 16 designation, Shu-Ha identity, first-cycle development position, 1956 introduction, 36.0-tonne weight, four-person crew, 90 mm Type 16 L/55 gun, 750 hp diesel, 55 km/h road speed, principal design character, 1962 Kai modernization, and limited transfer to Azad Hind are fixed. Manufacturer, dimensions, armor thickness, ammunition stowage, secondary armament, production total, Japanese unit list, trial chronology, and complete combat history remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>Type 16 records acceptance in Imperial Year 2616, or 1956, under the <a href='imperial-armored-materiel-designation-standard.html'>1952 armored-materiel standard</a>. <em>Shu</em> denotes the main-force tank family. <em>Ha</em> is the third Iroha ordinal consumed by the first development cycle.</p><p>The formal registry name is Type 16 Shu-Ha. Type 16 is not a project number, and Shu-Ha is not a manufacturer nickname.</p>"},
      {id:"development",title:"First Shu development cycle",html:"<p>The first cycle compared Shu-I, a lightweight high-mobility prototype, with Shu-Ro, a heavier German-influenced design. Shu-Ha combined their usable features into the production synthesis.</p><p>Its selection marked the replacement of separate medium and heavy battlefield roles by one main-force tank. It did not abolish light armor, assault vehicles, or specialist armored families.</p>"},
      {id:"design",title:"Design and specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1956</td></tr><tr><th>Combat weight</th><td>36.0 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>90 mm Type 16 L/55</td></tr><tr><th>Engine</th><td>750 hp compact diesel</td></tr><tr><th>Road speed</th><td>55 km/h</td></tr></tbody></table></div><p>The four-person arrangement retains a human loader. Dimensions, suspension type, fuel capacity, range, and ammunition load are not fixed by the controlling registry.</p>"},
      {id:"armament",title:"Armament and observation",html:"<p>The 90 mm Type 16 L/55 gun replaces the victory-era Type 7 Chi-Ru's indigenous 88 mm weapon in a much lighter vehicle. Optical rangefinding supports deliberate first-round fire without the later laser and ballistic-computer systems.</p><p>The reference establishes improved stabilization in the Kai but does not specify the original stabilizer, sight magnification, ammunition types, ready racks, or secondary weapons.</p>"},
      {id:"protection",title:"Protection and survivability",html:"<p>The vehicle is protected against the common medium-caliber weapons of its introduction period. Exact plate thickness, slope, material, and internal layout remain open.</p><p>Japanese design accepts less side protection than heavier German vehicles in exchange for lower transport weight and a smaller logistics burden. Survivability consequently depends on observation, movement, route choice, camouflage, and combined-arms support as well as armor.</p>"},
      {id:"mobility",title:"Mobility and imperial geography",html:"<p>The 750 hp diesel gives the 36-tonne tank approximately 20.8 hp per tonne. A 55 km/h road speed and compact power plant support movement through ports, rail systems, weak bridges, restricted roads, mountains, and tropical theaters.</p><p>These requirements are strategic rather than merely automotive. Japan must carry armored formations across sea lanes and sustain them through infrastructure that rarely resembles the European plain.</p>"},
      {id:"kai",title:"Type 16 Shu-Ha Kai",html:"<p>The 1962 Kai modernization raises combat weight to 37.0 tonnes and engine output to 800 hp. It adds improved stabilization and a revised final drive while retaining the base chassis and logistics identity.</p><p><em>Kai</em> marks one substantial accepted modernization, not a new vehicle family. Production split, rebuild policy, and the number of original tanks converted remain open.</p>"},
      {id:"service",title:"Japanese and Azad Hind service",html:"<p>Type 16 equips first-line Japanese formations before the Type 26 transition and later passes into training, reserve, regional, and selected associated-state use. Exact Japanese regiments and retirement dates are not established.</p><p>Japan supplies a limited number to <a href='type-16-shu-ha-azad-hind.html'>Azad Hind before the Northern Indian War</a>. Their experience demonstrates that a refined tank cannot substitute for trained crews, ammunition supply, maintenance, recovery, communications, and combined-arms doctrine.</p>"}
    ],
    related:[
      {href:"shu-main-battle-tank-lineage.html",kicker:"Development family",label:"Shu Main Battle Tank Lineage"},
      {href:"type-26-shu-he.html",kicker:"1966 successor",label:"Type 26 Shu-He"},
      {href:"type-16-shu-ha-azad-hind.html",kicker:"Associated-state service",label:"Type 16 in Azad Hind Service"},
      {href:"imperial-armored-materiel-designation-standard.html",kicker:"Registry system",label:"Armored Materiel Standard"},
      {href:"japan.html",kicker:"Country of origin",label:"Empire of Japan"},
      {href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}
    ],
    facts:[["Country of origin","Japan"],["Development project","Shu-Ha"],["Type designation","Type 16"],["Entered service","1956"],["Combat weight","36.0 t"],["Crew","4"],["Main armament","90 mm Type 16 L/55"],["Engine","750 hp diesel"],["Road speed","55 km/h"],["Modernization","Type 16 Shu-Ha Kai · 1962"],["Modernized weight","37.0 t"],["Modernized engine","800 hp diesel"]]
  }),

  "type-26-shu-he": japaneseShuTankArticle({
    title:"Type 26 Shu-He",
    eyebrow:"Japanese main battle tank · entered service 1966",
    infoboxTitle:"Type 26 Shu-He",
    lead:"The Type 26 Shu-He is the second production tank of Japan's Shu main-force lineage. Entering service in 1966, it introduces hydropneumatic suspension, two-axis stabilization, active-infrared night equipment, and analog ballistic correction around a 105 mm gun, four-person crew, and 40.5-tonne chassis.",
    canon:"The Type 26 designation, Shu-He identity, second-cycle development position, 1966 introduction, 40.5-tonne weight, four-person crew, 105 mm Type 26 L/52 gun, 850 hp diesel, 62 km/h road speed, hydropneumatic suspension, two-axis stabilization, active infrared equipment, analog ballistic correction, and 1971 Kai modernization are fixed. Manufacturer, dimensions, armor values, ammunition load, secondary weapons, production total, unit list, export record, and combat history remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>Type 26 records acceptance in Imperial Year 2626, or 1966. <em>Shu</em> places the vehicle in the main-force family, while <em>He</em> records the sixth Iroha position consumed by the sequence of first- and second-cycle projects.</p><p>The designation follows the same <a href='imperial-armored-materiel-designation-standard.html'>imperial registry</a> as Type 16 Shu-Ha. It does not mean the twenty-sixth Shu design.</p>"},
      {id:"development",title:"Second Shu development cycle",html:"<p>The second cycle compared Shu-Ni, an improved conventional project, with Shu-Ho, a low-profile hydropneumatic design. Shu-He became the production synthesis.</p><p>The result preserves the first tank's four-person logistics while making suspension, stabilized fire, night observation, and ballistic computation part of the standard vehicle rather than isolated experiments.</p>"},
      {id:"design",title:"Design and specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1966</td></tr><tr><th>Combat weight</th><td>40.5 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>105 mm Type 26 L/52</td></tr><tr><th>Engine</th><td>850 hp diesel</td></tr><tr><th>Road speed</th><td>62 km/h</td></tr><tr><th>Suspension</th><td>Hydropneumatic</td></tr></tbody></table></div>"},
      {id:"fire-control",title:"Fire control and night fighting",html:"<p>Two-axis stabilization permits controlled fire during movement and faster engagement after a short halt. Analog ballistic correction turns range and firing data into a repeatable solution while leaving the crew responsible for observation and judgment.</p><p>Active-infrared equipment supplies night capability but can reveal a vehicle to an opponent with suitable detectors. Exact sights, emitters, computer inputs, and stabilization limits remain open.</p>"},
      {id:"mobility",title:"Hydropneumatic mobility",html:"<p>The hydropneumatic system allows the running gear to adapt vehicle attitude and ground clearance to difficult terrain. It becomes one of the clearest Japanese design signatures.</p><p>The 850 hp diesel gives approximately 21.0 hp per tonne, while the 62 km/h road speed improves operational movement over the Type 16. Rail, ship, road, and bridge compatibility continue to constrain growth.</p>"},
      {id:"armament",title:"The 105 mm generation",html:"<p>The 105 mm Type 26 L/52 replaces the earlier 90 mm weapon and establishes the gun caliber retained by the Type 36 generation. A human loader remains part of the four-person crew.</p><p>Exact ammunition stowage and secondary armament are open. The 1971 Kai's updated APDS confirms continued ammunition development within the existing gun system.</p>"},
      {id:"kai",title:"Type 26 Shu-He Kai",html:"<p>The 1971 Kai modernization weighs 41.2 tonnes. It adds a laser rangefinder, improves the transmission, and introduces updated armor-piercing discarding-sabot ammunition.</p><p>The laser addresses the largest remaining ranging limitation without replacing the whole analog fire-control architecture. The modification prepares crews and depots for the more electronic Type 36 generation.</p>"},
      {id:"service",title:"Service and succession",html:"<p>Type 26 serves as Japan's standard main-force tank through the late 1960s and early 1970s. Its hydropneumatic suspension, stabilization, and compact fire-control equipment shape the requirements imposed on every later Shu design.</p><p>Type 36 Shu-Ri succeeds it in 1976. Type 26 vehicles continue in secondary, reserve, training, and regional roles, but exact inventories, transfers, and retirement dates remain open.</p>"}
    ],
    related:[
      {href:"shu-main-battle-tank-lineage.html",kicker:"Development family",label:"Shu Main Battle Tank Lineage"},
      {href:"type-16-shu-ha.html",kicker:"1956 predecessor",label:"Type 16 Shu-Ha"},
      {href:"type-36-shu-ri.html",kicker:"1976 successor",label:"Type 36 Shu-Ri"},
      {href:"imperial-armored-materiel-designation-standard.html",kicker:"Registry system",label:"Armored Materiel Standard"},
      {href:"japan.html",kicker:"Country of origin",label:"Empire of Japan"},
      {href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}
    ],
    facts:[["Country of origin","Japan"],["Development project","Shu-He"],["Type designation","Type 26"],["Entered service","1966"],["Combat weight","40.5 t"],["Crew","4"],["Main armament","105 mm Type 26 L/52"],["Engine","850 hp diesel"],["Road speed","62 km/h"],["Suspension","Hydropneumatic"],["Modernization","Type 26 Shu-He Kai · 1971"],["Modernized weight","41.2 t"]]
  }),

  "type-36-shu-ri": japaneseShuTankArticle({
    title:"Type 36 Shu-Ri",
    eyebrow:"Japanese main battle tank · entered service 1976",
    infoboxTitle:"Type 36 Shu-Ri",
    lead:"The Type 36 Shu-Ri is the third production tank of Japan's Shu main-force lineage and the mature Japanese service tank of the early 1980s. Introduced in 1976, it combines a long 105 mm gun, laser ranging, passive low-light observation, an analog-digital ballistic computer, ceramic-enhanced spaced armor, hydropneumatic running gear, and a 1,000 hp diesel in a 44-tonne four-person vehicle.",
    canon:"The Type 36 designation, Shu-Ri identity, third-cycle development position, 1976 introduction, 44.0-tonne weight, four-person crew, 105 mm Type 36 L/60 gun, 1,000 hp diesel, 70 km/h road speed, laser rangefinder, passive low-light sight, analog-digital ballistic computer, ceramic-enhanced spaced armor, 1981 Kai, 1984 Kai Ni, and position during the Type 45 transition are fixed. Manufacturer, dimensions, armor values, ammunition stowage, secondary armament, production totals, unit list, export record, and complete combat history remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>Type 36 records acceptance in Imperial Year 2636, or 1976. <em>Shu</em> denotes the main-force family and <em>Ri</em> the ninth Iroha position after the projects consumed by the first three development cycles.</p><p>The name belongs to the <a href='imperial-armored-materiel-designation-standard.html'>1952 registry system</a>. The later Kai and Kai Ni terms denote accepted modernizations of the same vehicle.</p>"},
      {id:"development",title:"Third Shu development cycle",html:"<p>The third cycle placed Shu-To, a conservative development of Type 26, beside Shu-Chi, an advanced electronic and automotive prototype. Shu-Ri was selected as the production design.</p><p>The selection integrates the new electronic and protection technologies without abandoning four-person operation or the 105 mm logistics family.</p>"},
      {id:"design",title:"Design and specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1976</td></tr><tr><th>Combat weight</th><td>44.0 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>105 mm Type 36 L/60</td></tr><tr><th>Engine</th><td>1,000 hp diesel</td></tr><tr><th>Road speed</th><td>70 km/h</td></tr><tr><th>Fire control</th><td>Analog-digital ballistic computer</td></tr></tbody></table></div>"},
      {id:"fire-control",title:"Laser and analog-digital fire control",html:"<p>A laser rangefinder supplies rapid distance measurement, while the analog-digital hybrid computer applies ballistic correction. The system advances beyond the Type 26 Kai without yet becoming the fully digital architecture of Type 45.</p><p>The passive low-light sight avoids reliance on an active infrared illuminator. Exact sight models, stabilization, computer inputs, and commander observation equipment remain open.</p>"},
      {id:"armament",title:"Long 105 mm armament",html:"<p>The Type 36 L/60 lengthens the 105 mm gun family and preserves a human loader. It is paired with improving armor-piercing ammunition rather than an immediate move to a heavier caliber.</p><p>Ammunition types are only partly fixed by the modernizations. Ready-round count, total stowage, and secondary weapons remain open.</p>"},
      {id:"protection",title:"Ceramic-enhanced spaced armor",html:"<p>Type 36 introduces ceramic-enhanced spaced armor to the production Shu lineage. The registry does not specify the material stack, thickness, coverage, or equivalent resistance.</p><p>The system improves frontal survivability while remaining bounded by Japanese sea, rail, bridge, and road requirements. Side armor stays subordinate to mobility, observation, and controlled engagement.</p>"},
      {id:"mobility",title:"Mobility and crew",html:"<p>The 1,000 hp diesel gives the 44-tonne vehicle approximately 22.7 hp per tonne and supports a 70 km/h road speed. Hydropneumatic suspension carries forward the Type 26's terrain and attitude control.</p><p>Commander, gunner, loader, and driver remain the standard crew. Japan accepts the additional protected volume until the fourth cycle can prove a compact bustle autoloader.</p>"},
      {id:"modernization",title:"Kai, Kai Ni, and the Type 45 transition",html:"<p>Type 36 Shu-Ri Kai enters in 1981 at 45.0 tonnes with revised ceramic-enhanced armor and improved passive night observation. Kai Ni follows in 1984 at 45.8 tonnes with a thermal gunner sight, digital fire-control elements, and new APFSDS ammunition.</p><p>Kai Ni is the mature Japanese service tank when <a href='type-45-shu-ru.html'>Type 45 Shu-Ru</a> enters low-rate production in 1985. Type 36 remains operational during the new tank's 1986 unit introduction and subsequent transition.</p>"}
    ],
    related:[
      {href:"shu-main-battle-tank-lineage.html",kicker:"Development family",label:"Shu Main Battle Tank Lineage"},
      {href:"type-26-shu-he.html",kicker:"1966 predecessor",label:"Type 26 Shu-He"},
      {href:"type-45-shu-ru.html",kicker:"1985 successor",label:"Type 45 Shu-Ru"},
      {href:"m11-main-battle-tank.html",kicker:"American contemporary",label:"M60 Main Battle Tank"},
      {href:"japan.html",kicker:"Country of origin",label:"Empire of Japan"},
      {href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}
    ],
    facts:[["Country of origin","Japan"],["Development project","Shu-Ri"],["Type designation","Type 36"],["Entered service","1976"],["Combat weight","44.0 t"],["Crew","4"],["Main armament","105 mm Type 36 L/60"],["Engine","1,000 hp diesel"],["Road speed","70 km/h"],["Fire control","Analog-digital with laser ranging"],["Modernizations","Kai · 1981; Kai Ni · 1984"],["1985 status","Mature service tank"]]
  })
});

function addJapaneseShuTankItem(slug, key, item) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article[key] = article[key] || [];
  if (!article[key].some(existing => (item.id && existing.id === item.id) || (item.href && existing.href === item.href))) article[key].push(item);
}

const japaneseShuTankLinks = [
  {href:"type-16-shu-ha.html",kicker:"First production generation",label:"Type 16 Shu-Ha"},
  {href:"type-26-shu-he.html",kicker:"Second production generation",label:"Type 26 Shu-He"},
  {href:"type-36-shu-ri.html",kicker:"Third production generation",label:"Type 36 Shu-Ri"}
];

for (const item of japaneseShuTankLinks) {
  addJapaneseShuTankItem("shu-main-battle-tank-lineage","related",item);
  addJapaneseShuTankItem("imperial-armored-materiel-designation-standard","related",item);
}

addJapaneseShuTankItem("type-45-shu-ru","related",japaneseShuTankLinks[2]);
addJapaneseShuTankItem("type-16-shu-ha-azad-hind","related",japaneseShuTankLinks[0]);
addJapaneseShuTankItem("shu-main-battle-tank-lineage","sections",{id:"dedicated-production-articles",title:"Production-generation articles",html:"<p>Dedicated histories cover the <a href='type-16-shu-ha.html'>Type 16 Shu-Ha</a>, which establishes the main-force category in 1956; the <a href='type-26-shu-he.html'>Type 26 Shu-He</a>, which makes hydropneumatic suspension and analog fire control standard in 1966; and the <a href='type-36-shu-ri.html'>Type 36 Shu-Ri</a>, which adds laser ranging, hybrid computation, and ceramic-enhanced armor in 1976. The existing <a href='type-45-shu-ru.html'>Type 45 Shu-Ru</a> article records the fourth generation and the transition to a three-person autoloading tank.</p>"});
