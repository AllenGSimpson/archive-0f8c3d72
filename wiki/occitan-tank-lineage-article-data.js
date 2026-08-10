window.deepArticles = window.deepArticles || {};

const occitanTankSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Occitan armored registry"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Occitania and the Latin system"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Occitan industrial development"},
  {href:"../transcript.md",label:"Master Transcript — Occitan industry and political development"}
];

const occitanTankLandscape = {
  src:"assets/diagrams/occitan-tank-lineage.svg",
  alt:"Timeline of five Occitan tanks from the Char 48 Languedoc of 1948 to the Char 80 Aigle of 1980",
  caption:"AMO develops five registered tank generations after the Toulouse Evacuation, including two 1950s oscillating-turret families"
};

const occitanTankArticle = config => ({
  category:"Military equipment",
  eyebrow:"Occitan armored fighting vehicle",
  landscape:occitanTankLandscape,
  ...config,
  sources:occitanTankSources,
  categories:config.categories || ["Occitania","Armored fighting vehicles","Latin Bloc","Ateliers Mécaniques d’Occitanie"]
});

Object.assign(window.deepArticles, {
  "occitan-tank-lineage": occitanTankArticle({
    title:"Occitan Tank Lineage",
    eyebrow:"Occitan armored development · 1946–1980",
    infoboxKicker:"National armored-vehicle sequence",
    infoboxTitle:"Occitan tank lineage",
    lead:"Occitania's tank industry begins with the Toulouse Evacuation of 1946–1947 and the formation of Ateliers Mécaniques d’Occitanie. AMO places the Char 48 Languedoc in service in 1948, develops oscillating-turret medium and light vehicles during the 1950s, returns to a conventional turret with the Char 65 Aquitaine, and enters the 1980s with the 120 mm Char 80 Aigle.",
    canon:"The Toulouse Evacuation, participating technical communities, AMO identity, five-vehicle sequence, names, introduction years, combat weights, crew sizes, main armaments, engine outputs, road speeds, 12-round autoloaders on Toulouse and Char Léger, dominance of oscillating turrets in those 1950s families, and the conventional-turret return by 1965 are fixed. Detailed evacuation routes, personnel lists, dimensions, armor, ammunition loads, turret mechanisms, autoloader geometry, suspension, fire control, production totals, units, exports, variants, and combat histories remain open.",
    sections:[
      {id:"evacuation",title:"Toulouse Evacuation",html:"<p>During 1946–1947, selected engineers, drawings, tools, and prototypes from AMX, APX, SOMUA, and artillery organizations move south before the final partition of France. The transfer preserves technical teams and working material inside the territory that becomes <a href='occitania.html'>Occitania</a>.</p><p>The registry does not establish a single convoy, decree, plant list, or complete personnel roll. <em>Toulouse Evacuation</em> is the collective name for the movement.</p>"},
      {id:"amo",title:"Ateliers Mécaniques d’Occitanie",html:"<p><strong>Ateliers Mécaniques d’Occitanie</strong> (AMO) succeeds the evacuated armored-design community. It claims the technical inheritance of French armored engineering but not administrative continuity with the AMX organization remaining under German-controlled Paris.</p><p>AMO's exact legal form, constituent factories, ownership shares, ministries, directors, and relations with Italian capital remain unregistered.</p>"},
      {id:"registry",title:"Production sequence",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Vehicle</th><th>Introduction</th><th>Weight</th><th>Crew</th><th>Main armament</th><th>Engine</th><th>Road speed</th></tr></thead><tbody><tr><td><a href='char-48-languedoc.html'>Char 48 Languedoc</a></td><td>1948</td><td>52.0 t</td><td>5</td><td>90 mm AMO L/50</td><td>650 hp petrol</td><td>40 km/h</td></tr><tr><td><a href='char-53-toulouse.html'>Char 53 Toulouse</a></td><td>1953</td><td>40.0 t</td><td>4</td><td>100 mm AMO L/55; 12-round autoloader</td><td>750 hp petrol</td><td>55 km/h</td></tr><tr><td><a href='char-leger-55.html'>Char Léger 55</a></td><td>1955</td><td>15.0 t</td><td>3</td><td>75 mm AMO L/60; 12-round autoloader</td><td>300 hp petrol</td><td>60 km/h</td></tr><tr><td><a href='char-65-aquitaine.html'>Char 65 Aquitaine</a></td><td>1965</td><td>38.0 t</td><td>4</td><td>105 mm AMO L/52</td><td>720 hp diesel</td><td>65 km/h</td></tr><tr><td><a href='char-80-aigle.html'>Char 80 Aigle</a></td><td>1980</td><td>52.0 t</td><td>4</td><td>120 mm AMO L/44 smoothbore</td><td>1,200 hp diesel</td><td>68 km/h</td></tr></tbody></table></div>"},
      {id:"first-generation",title:"First production generation",html:"<p>The <a href='char-48-languedoc.html'>Char 48 Languedoc</a> enters service one year after the evacuation period. At 52 tonnes with a five-person crew and 90 mm gun, it gives the new state an indigenous armored vehicle before its constitutional and industrial order has fully stabilized.</p>"},
      {id:"oscillating",title:"Oscillating-turret period",html:"<p>Oscillating turrets dominate the <a href='char-53-toulouse.html'>Char 53 Toulouse</a> and <a href='char-leger-55.html'>Char Léger 55</a> families. Both carry twelve-round autoloaders, while their weights and intended vehicle classes differ sharply.</p><p>The source fixes the turret family and autoloader capacity, not the turret geometry, loading cycle, magazine arrangement, replenishment procedure, elevation limits, or reliability.</p>"},
      {id:"conventional",title:"Return to conventional turrets",html:"<p>By 1965, stabilization, sealing, nuclear-biological-chemical protection, and allowance for larger guns lead AMO back to a conventional turret. The <a href='char-65-aquitaine.html'>Char 65 Aquitaine</a> is the first registered production vehicle in that later sequence.</p><p>The <a href='char-80-aigle.html'>Char 80 Aigle</a> continues the conventional-turret line with a 120 mm smoothbore and a larger power plant.</p>"},
      {id:"latin",title:"Latin ammunition policy",html:"<p>Aquitaine's 105 mm and Aigle's 120 mm weapons appear within the Latin bloc's shared tank-ammunition generations. AMO remains a national design institution: common cartridge dimensions do not establish common turrets, guns, sights, projectile loads, or vehicle components.</p><p>The earlier 90 mm, 100 mm, and 75 mm systems belong to national development before those common tank standards.</p>"},
      {id:"service",title:"Service and distribution",html:"<p>The sequence supports Occitania's provincial armed forces and its role as a Latin technical integrator. Later vehicles do not prove the immediate retirement of earlier types; training, reserve, frontier, client, and specialized allocations remain possible.</p><p>Production totals, regiments, depots, exports, upgrades, combat service, and retirement dates have not been registered.</p>"}
    ],
    related:[
      {href:"char-48-languedoc.html",kicker:"First production generation",label:"Char 48 Languedoc"},
      {href:"char-53-toulouse.html",kicker:"Oscillating-turret medium",label:"Char 53 Toulouse"},
      {href:"char-leger-55.html",kicker:"Oscillating-turret light tank",label:"Char Léger 55"},
      {href:"char-65-aquitaine.html",kicker:"Conventional-turret generation",label:"Char 65 Aquitaine"},
      {href:"char-80-aigle.html",kicker:"120 mm generation",label:"Char 80 Aigle"},
      {href:"occitania.html",kicker:"Country of origin",label:"Occitania"}
    ],
    facts:[["Country","Occitania"],["Design institution","Ateliers Mécaniques d’Occitanie"],["Foundation event","Toulouse Evacuation · 1946–1947"],["Coverage","1948–1980"],["Registered production vehicles","Five"],["1950s turret system","Oscillating turret"],["Conventional-turret return","Char 65 Aquitaine · 1965"],["Final registered vehicle","Char 80 Aigle"],["Principal industrial center","Toulouse"],["Alignment","Latin Bloc"]]
  }),

  "char-48-languedoc": occitanTankArticle({
    title:"Char 48 Languedoc",
    eyebrow:"Occitan service tank · entered service 1948",
    infoboxKicker:"First AMO production tank",
    infoboxTitle:"Char 48 Languedoc",
    lead:"The Char 48 Languedoc is Occitania's 52-tonne five-crew service tank of 1948. Armed with the 90 mm AMO L/50 and powered by a 650 hp petrol engine, it is the first registered production vehicle of Ateliers Mécaniques d’Occitanie after the Toulouse Evacuation.",
    canon:"The name, 1948 introduction, 52.0-tonne combat weight, five-person crew, 90 mm AMO L/50, 650 hp petrol engine, 40 km/h road speed, AMO association, and first place in the lineage are fixed. Development chronology, dimensions, armor, ammunition, turret arrangement, suspension, secondary weapons, production total, units, variants, exports, combat history, and retirement remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Languedoc follows the 1946–1947 movement of selected engineers, drawings, tools, and prototypes to the south. Its 1948 introduction turns the evacuated technical inheritance into the first registered tank of the new Occitan industry.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1948</td></tr><tr><th>Combat weight</th><td>52.0 tonnes</td></tr><tr><th>Crew</th><td>Five</td></tr><tr><th>Main armament</th><td>90 mm AMO L/50</td></tr><tr><th>Engine</th><td>650 hp petrol</td></tr><tr><th>Road speed</th><td>40 km/h</td></tr></tbody></table></div>"},
      {id:"armament",title:"Armament",html:"<p>The 90 mm AMO L/50 is the registered main weapon. Cartridge dimensions, projectile family, muzzle velocity, stabilization, sights, ammunition stowage, and secondary weapons remain open.</p>"},
      {id:"crew",title:"Crew and protection",html:"<p>The vehicle carries five crew. The registry does not identify their stations or establish a hull-gunner, assistant-driver, radio-operator, or separate loading arrangement.</p><p>Armor thickness, construction, slope, internal subdivision, and survivability measures have not been fixed.</p>"},
      {id:"mobility",title:"Mobility",html:"<p>The 650 hp petrol engine provides 12.5 hp per tonne. Registered road speed is 40 km/h.</p><p>Range, fuel capacity, transmission, suspension, track width, bridge classification, and cross-country performance remain open.</p>"},
      {id:"service",title:"Service",html:"<p>Languedoc equips the first post-partition armored force and supplies AMO with production, maintenance, and training experience. Specific units, production blocks, deployments, exports, combat actions, rebuilds, and withdrawal dates are unregistered.</p>"},
      {id:"succession",title:"Char 53 Toulouse",html:"<p>The <a href='char-53-toulouse.html'>Char 53 Toulouse</a> follows in 1953 with lower combat weight, a four-person crew, a 100 mm gun, a twelve-round autoloader, greater engine output, and a higher road speed.</p>"}
    ],
    related:[{href:"occitan-tank-lineage.html",kicker:"Development family",label:"Occitan Tank Lineage"},{href:"char-53-toulouse.html",kicker:"1953 successor",label:"Char 53 Toulouse"},{href:"char-leger-55.html",kicker:"1955 light branch",label:"Char Léger 55"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"italian-tank-lineage.html",kicker:"Latin counterpart",label:"Italian Tank Lineage"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Occitania"],["Manufacturer","Ateliers Mécaniques d’Occitanie"],["Entered service","1948"],["Combat weight","52.0 t"],["Crew","5"],["Main armament","90 mm AMO L/50"],["Engine","650 hp petrol"],["Power-to-weight","12.5 hp/t"],["Road speed","40 km/h"],["Successor","Char 53 Toulouse"]]
  }),

  "char-53-toulouse": occitanTankArticle({
    title:"Char 53 Toulouse",
    eyebrow:"Occitan service tank · entered service 1953",
    infoboxKicker:"Oscillating-turret tank",
    infoboxTitle:"Char 53 Toulouse",
    lead:"The Char 53 Toulouse is Occitania's 40-tonne four-crew tank of 1953. Its oscillating turret carries a 100 mm AMO L/55 and twelve-round autoloader; a 750 hp petrol engine gives the vehicle a registered road speed of 55 km/h.",
    canon:"The name, 1953 introduction, 40.0-tonne combat weight, four-person crew, oscillating-turret family, 100 mm AMO L/55, twelve-round autoloader, 750 hp petrol engine, 55 km/h road speed, and AMO association are fixed. Dimensions, armor, turret geometry, loading cycle, magazine and replenishment arrangements, ammunition, suspension, sights, secondary weapons, production total, units, variants, exports, combat history, and retirement remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Toulouse follows the heavy Char 48 Languedoc five years later. AMO reduces combat weight by twelve tonnes while increasing gun caliber, engine output, and registered road speed.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1953</td></tr><tr><th>Combat weight</th><td>40.0 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>100 mm AMO L/55</td></tr><tr><th>Autoloader</th><td>Twelve rounds</td></tr><tr><th>Engine</th><td>750 hp petrol</td></tr><tr><th>Road speed</th><td>55 km/h</td></tr></tbody></table></div>"},
      {id:"turret",title:"Oscillating turret",html:"<p>Toulouse belongs to the oscillating-turret family that dominates AMO's 1950s tank design. The registry does not define the joint, armor layout, gun elevation mechanism, sealing, or turret crew positions.</p>"},
      {id:"autoloader",title:"Twelve-round autoloader",html:"<p>A twelve-round autoloader serves the 100 mm gun. Cycle time, ammunition presentation, selectable ammunition types, replenishment, manual backup, and total carried rounds remain open.</p>"},
      {id:"mobility",title:"Mobility",html:"<p>The 750 hp petrol engine supplies 18.75 hp per tonne and a registered 55 km/h road speed. Range, fuel capacity, transmission, suspension, track system, and terrain performance remain unregistered.</p>"},
      {id:"service",title:"Service",html:"<p>Char 53 represents the principal medium-weight branch of AMO's 1950s oscillating-turret work. Production totals, units, deployments, combat use, exports, rebuilds, and withdrawal dates are open.</p>"},
      {id:"successors",title:"Parallel and later development",html:"<p>The <a href='char-leger-55.html'>Char Léger 55</a> applies the same broad turret and autoloader approach to a much lighter vehicle in 1955. The <a href='char-65-aquitaine.html'>Char 65 Aquitaine</a> returns the production sequence to a conventional turret in 1965.</p>"}
    ],
    related:[{href:"occitan-tank-lineage.html",kicker:"Development family",label:"Occitan Tank Lineage"},{href:"char-48-languedoc.html",kicker:"1948 predecessor",label:"Char 48 Languedoc"},{href:"char-leger-55.html",kicker:"Light parallel",label:"Char Léger 55"},{href:"char-65-aquitaine.html",kicker:"1965 successor generation",label:"Char 65 Aquitaine"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Occitania"],["Manufacturer","Ateliers Mécaniques d’Occitanie"],["Entered service","1953"],["Combat weight","40.0 t"],["Crew","4"],["Main armament","100 mm AMO L/55"],["Turret","Oscillating"],["Autoloader","12 rounds"],["Engine","750 hp petrol"],["Power-to-weight","18.75 hp/t"],["Road speed","55 km/h"]]
  }),

  "char-leger-55": occitanTankArticle({
    title:"Char Léger 55",
    eyebrow:"Occitan light tank · entered service 1955",
    infoboxKicker:"Oscillating-turret light tank",
    infoboxTitle:"Char Léger 55",
    lead:"The Char Léger 55 is Occitania's 15-tonne three-crew light tank of 1955. An oscillating turret carries a 75 mm AMO L/60 and twelve-round autoloader; its 300 hp petrol engine supports a registered road speed of 60 km/h.",
    canon:"The name, 1955 introduction, light-tank role, 15.0-tonne combat weight, three-person crew, oscillating-turret family, 75 mm AMO L/60, twelve-round autoloader, 300 hp petrol engine, 60 km/h road speed, and AMO association are fixed. Dimensions, armor, turret and loading mechanisms, ammunition, suspension, transport method, tactical doctrine, production total, units, variants, exports, combat history, and retirement remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Char Léger 55 follows two years after Char 53 Toulouse and applies AMO's oscillating-turret and autoloader work to a vehicle one third of Toulouse's combat weight.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1955</td></tr><tr><th>Combat weight</th><td>15.0 tonnes</td></tr><tr><th>Crew</th><td>Three</td></tr><tr><th>Main armament</th><td>75 mm AMO L/60</td></tr><tr><th>Autoloader</th><td>Twelve rounds</td></tr><tr><th>Engine</th><td>300 hp petrol</td></tr><tr><th>Road speed</th><td>60 km/h</td></tr></tbody></table></div>"},
      {id:"armament",title:"Armament and autoloader",html:"<p>The 75 mm AMO L/60 is fed by a twelve-round autoloader. Cartridge, projectile types, loading cycle, magazine arrangement, replenishment, manual backup, total stowage, and secondary armament remain open.</p>"},
      {id:"turret",title:"Oscillating turret",html:"<p>The vehicle belongs to the same broad 1950s turret family as Char 53 Toulouse. The smaller vehicle does not prove identical turret components or a shared loading mechanism.</p>"},
      {id:"mobility",title:"Mobility",html:"<p>The 300 hp petrol engine provides 20 hp per tonne. Registered road speed is 60 km/h.</p><p>Operational range, transmission, suspension, track width, ground pressure, amphibious capability, and air-transport arrangements are not fixed.</p>"},
      {id:"role",title:"Service role",html:"<p>The designation and registry identify a light tank. Reconnaissance, airborne, colonial, cavalry, infantry-support, or export allocations have not been assigned and should not be inferred solely from weight and speed.</p>"},
      {id:"service",title:"Service",html:"<p>Production strength, unit structure, deployments, variants, combat history, users outside Occitania, upgrades, and retirement remain unregistered.</p>"}
    ],
    related:[{href:"occitan-tank-lineage.html",kicker:"Development family",label:"Occitan Tank Lineage"},{href:"char-53-toulouse.html",kicker:"Medium parallel",label:"Char 53 Toulouse"},{href:"char-65-aquitaine.html",kicker:"Later conventional-turret tank",label:"Char 65 Aquitaine"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"vcc-72-dardo.html",kicker:"Latin light-vehicle contemporary",label:"VCC-72 Dardo"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","Occitania"],["Manufacturer","Ateliers Mécaniques d’Occitanie"],["Entered service","1955"],["Vehicle class","Light tank"],["Combat weight","15.0 t"],["Crew","3"],["Main armament","75 mm AMO L/60"],["Turret","Oscillating"],["Autoloader","12 rounds"],["Engine","300 hp petrol"],["Power-to-weight","20 hp/t"],["Road speed","60 km/h"]]
  }),

  "char-65-aquitaine": occitanTankArticle({
    title:"Char 65 Aquitaine",
    eyebrow:"Occitan service tank · entered service 1965",
    infoboxKicker:"Conventional-turret 105 mm tank",
    infoboxTitle:"Char 65 Aquitaine",
    lead:"The Char 65 Aquitaine is Occitania's 38-tonne four-crew tank of 1965. It returns AMO production to a conventional turret and carries a 105 mm AMO L/52; a 720 hp diesel gives it a registered road speed of 65 km/h.",
    canon:"The name, 1965 introduction, 38.0-tonne combat weight, four-person crew, conventional-turret position, 105 mm AMO L/52, 720 hp diesel, 65 km/h road speed, AMO association, and place after the oscillating-turret period are fixed. Dimensions, armor, stabilization details, NBC system, ammunition, suspension, sights, secondary weapons, production total, units, variants, exports, combat history, and retirement remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Aquitaine follows the 1950s oscillating-turret families. Requirements for stabilization, sealing, nuclear-biological-chemical protection, and accommodation of larger guns bring AMO back to a conventional turret by 1965.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1965</td></tr><tr><th>Combat weight</th><td>38.0 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>105 mm AMO L/52</td></tr><tr><th>Engine</th><td>720 hp diesel</td></tr><tr><th>Road speed</th><td>65 km/h</td></tr></tbody></table></div>"},
      {id:"turret",title:"Conventional turret",html:"<p>The conventional layout replaces the production oscillating-turret arrangement used on Toulouse and Char Léger. The register fixes the transition, not the armor layout, crew stations, traverse system, gun mount, stabilization accuracy, or protection suite.</p>"},
      {id:"armament",title:"105 mm armament",html:"<p>The 105 mm AMO L/52 appears during the Latin bloc's shared 105 mm tank-ammunition generation. Common cartridge policy does not establish that the AMO gun is identical to Italy's OTO L/52 or that all national projectile loads are interchangeable.</p>"},
      {id:"mobility",title:"Mobility",html:"<p>The 720 hp diesel provides approximately 18.9 hp per tonne and a registered 65 km/h road speed. It is the first diesel-powered vehicle in the registered Occitan sequence.</p><p>Range, transmission, suspension, track system, fuel capacity, and cross-country performance remain open.</p>"},
      {id:"service",title:"Service",html:"<p>Aquitaine enters service as Occitania's modern conventional-turret tank and remains the immediate predecessor of Aigle. Production totals, units, deployments, variants, exports, combat experience, modernization, and retirement have not been fixed.</p>"},
      {id:"successor",title:"Char 80 Aigle",html:"<p>The <a href='char-80-aigle.html'>Char 80 Aigle</a> succeeds the 105 mm generation in 1980 with a 120 mm smoothbore, fourteen tonnes of additional combat weight, and a 1,200 hp diesel.</p>"}
    ],
    related:[{href:"occitan-tank-lineage.html",kicker:"Development family",label:"Occitan Tank Lineage"},{href:"char-53-toulouse.html",kicker:"Earlier medium tank",label:"Char 53 Toulouse"},{href:"char-leger-55.html",kicker:"Earlier light tank",label:"Char Léger 55"},{href:"char-80-aigle.html",kicker:"1980 successor",label:"Char 80 Aigle"},{href:"carro-68-leone-ii.html",kicker:"Italian 105 mm contemporary",label:"Carro 68 Leone II"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"}],
    facts:[["Country of origin","Occitania"],["Manufacturer","Ateliers Mécaniques d’Occitanie"],["Entered service","1965"],["Combat weight","38.0 t"],["Crew","4"],["Main armament","105 mm AMO L/52"],["Turret","Conventional"],["Engine","720 hp diesel"],["Power-to-weight","18.9 hp/t"],["Road speed","65 km/h"],["Successor","Char 80 Aigle"]]
  }),

  "char-80-aigle": occitanTankArticle({
    title:"Char 80 Aigle",
    eyebrow:"Occitan service tank · entered service 1980",
    infoboxKicker:"120 mm tank of the 1980s",
    infoboxTitle:"Char 80 Aigle",
    lead:"The Char 80 Aigle is Occitania's 52-tonne four-crew tank of 1980 and the latest AMO production vehicle registered by 1985. Its conventional turret carries a 120 mm AMO L/44 smoothbore, while a 1,200 hp diesel supports a road speed of 68 km/h.",
    canon:"The name, 1980 introduction, 52.0-tonne combat weight, four-person crew, conventional-turret lineage, 120 mm AMO L/44 smoothbore, 1,200 hp diesel, 68 km/h road speed, AMO association, and status as the latest registered Occitan tank by 1985 are fixed. Dimensions, armor type and array, ammunition, stabilization, sights, fire control, suspension, secondary weapons, production total, units, variants, exports, combat history, and later development remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Aigle follows Char 65 Aquitaine after fifteen years. The vehicle retains a four-person conventional-turret organization while moving from the 105 mm to the 120 mm tank-gun generation.</p>"},
      {id:"specifications",title:"Registered specifications",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1980</td></tr><tr><th>Combat weight</th><td>52.0 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>120 mm AMO L/44 smoothbore</td></tr><tr><th>Engine</th><td>1,200 hp diesel</td></tr><tr><th>Road speed</th><td>68 km/h</td></tr></tbody></table></div>"},
      {id:"armament",title:"120 mm smoothbore",html:"<p>The 120 mm AMO L/44 belongs to the Latin bloc's new 1980s tank-gun generation. The source does not establish projectile types, chamber dimensions, pressure, muzzle energy, ammunition stowage, loading procedure, or interchangeability with every other Latin 120 mm gun.</p>"},
      {id:"turret",title:"Turret and crew",html:"<p>Aigle continues the conventional-turret arrangement adopted with Aquitaine. Four crew are registered; exact duties, internal stations, gun loading, sights, stabilization, fire-control equipment, and commander's observation system remain open.</p>"},
      {id:"mobility",title:"Mobility",html:"<p>The 1,200 hp diesel provides approximately 23.1 hp per tonne and supports a registered road speed of 68 km/h.</p><p>Range, fuel capacity, transmission, suspension, track dimensions, ground pressure, and strategic transport requirements remain unregistered.</p>"},
      {id:"protection",title:"Protection",html:"<p>The registry fixes combat weight but does not identify armor materials, thickness, modularity, internal protection, smoke equipment, or nuclear-biological-chemical arrangements. The fourteen-tonne increase over Aquitaine cannot by itself be converted into a protection estimate.</p>"},
      {id:"service",title:"Service in 1985",html:"<p>Aigle is the latest Occitan production tank in service by 1985. Aquitaine and earlier vehicles may remain in active, reserve, training, provincial, or client use.</p><p>Production strength, unit assignments, deployments, exports, variants, combat record, and replacement plans remain open.</p>"}
    ],
    related:[{href:"occitan-tank-lineage.html",kicker:"Development family",label:"Occitan Tank Lineage"},{href:"char-65-aquitaine.html",kicker:"1965 predecessor",label:"Char 65 Aquitaine"},{href:"carro-80-ariete-ii.html",kicker:"Italian 120 mm contemporary",label:"Carro 80 Ariete II"},{href:"panzer-xii.html",kicker:"German contemporary",label:"Panzer XII"},{href:"occitania.html",kicker:"Country of origin",label:"Occitania"},{href:"latin-land-ammunition-standards.html",kicker:"Ammunition policy",label:"Latin Land-Ammunition Standards"}],
    facts:[["Country of origin","Occitania"],["Manufacturer","Ateliers Mécaniques d’Occitanie"],["Entered service","1980"],["1985 status","Latest registered Occitan tank"],["Combat weight","52.0 t"],["Crew","4"],["Main armament","120 mm AMO L/44 smoothbore"],["Turret","Conventional"],["Engine","1,200 hp diesel"],["Power-to-weight","23.1 hp/t"],["Road speed","68 km/h"]]
  })
});

function addOccitanTankItem(slug, key, item) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article[key] = article[key] || [];
  if (!article[key].some(existing => (item.id && existing.id === item.id) || (item.href && existing.href === item.href))) article[key].push(item);
}

addOccitanTankItem("occitania","sections",{id:"armored-industry",title:"Armored industry",html:"<p>The <a href='occitan-tank-lineage.html'>Occitan tank industry</a> begins with the Toulouse Evacuation of 1946–1947 and the creation of Ateliers Mécaniques d’Occitanie. AMO fields five registered tank generations from the <a href='char-48-languedoc.html'>Char 48 Languedoc</a> to the <a href='char-80-aigle.html'>Char 80 Aigle</a>. Oscillating turrets dominate its 1950s Toulouse and Char Léger families; stabilization, sealing, protection, and gun-growth requirements return the production line to conventional turrets by 1965.</p>"});
addOccitanTankItem("occitania","related",{href:"occitan-tank-lineage.html",kicker:"National armored industry",label:"Occitan Tank Lineage"});
addOccitanTankItem("italian-tank-lineage","related",{href:"occitan-tank-lineage.html",kicker:"Latin procurement competitor",label:"Occitan Tank Lineage"});
