window.deepArticles = window.deepArticles || {};

const britishTankSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — British tank registry and Falklands baseline"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British Commonwealth strategy and industrial recovery"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar rearmament and Falklands War"},
  {href:"https://tankmuseum.org/tank-nuts/tank-collection/centurion/",label:"The Tank Museum — Centurion collection record"},
  {href:"https://tankmuseum.org/article/charioteer-arrives",label:"The Tank Museum — Charioteer history"},
  {href:"https://tankmuseum.org/tank-nuts/tank-collection/conqueror/",label:"The Tank Museum — Conqueror collection record"},
  {href:"https://tankmuseum.org/tank-nuts/tank-collection/chieftain/",label:"The Tank Museum — Chieftain collection record"},
  {href:"https://tankmuseum.org/article/replacing-the-chieftain",label:"The Tank Museum — Chieftain replacement history"}
];

const britishTankLandscape = {
  src:"assets/diagrams/british-tank-lineage.svg",
  alt:"Timeline of British tank development from Cromwell and Comet through Centurion, Chieftain, and Challenger 1",
  caption:"British tank development preserves the universal-tank principle while alternating between fleet vehicles, limited heavy support, and high-value successor programs"
};

const britishTankArticle = config => ({
  category:"Military equipment",
  eyebrow:"British armoured fighting vehicle",
  landscape:britishTankLandscape,
  ...config,
  sources:britishTankSources,
  categories:config.categories || ["United Kingdom","British Commonwealth","Tanks","Royal Armoured Corps","Military equipment"]
});

Object.assign(window.deepArticles, {
  "british-tank-lineage": britishTankArticle({
    title:"British Tank Lineage",
    eyebrow:"British armoured development · 1943–1985",
    infoboxKicker:"Universal-tank system",
    infoboxTitle:"British tank lineage",
    lead:"Britain's postwar tank lineage develops from the wartime Cromwell and Comet through the <a href='centurion-tank.html'>Centurion</a> universal tank, the limited <a href='conqueror-tank.html'>Conqueror</a> heavy-support force, the <a href='chieftain-tank.html'>Chieftain</a> main battle tank, and the small early <a href='challenger-1.html'>Challenger 1</a> fleet. Strong rifled guns and prepared-position fighting remain characteristic, while Commonwealth geography imposes strict transport, recovery, and expeditionary limits.",
    canon:"The fourteen registered configurations, introduction dates, weights, crews, guns, engines, road speeds, universal-tank doctrine, Charioteer and Caernarvon boundaries, FV4202 test status, accelerated Chieftain reliability effort, Mk 8 and Mk 10 improvements, Challenger 1's 1984 status, small fleet, British and Canadian support concentration, and absence from the Falklands are fixed. Production totals, armor values, dimensions, ammunition loads, unit establishments, export history beyond the broad Charioteer role, complete variant sequences, losses, and post-1985 development remain open unless inherited from pre-divergence records.",
    sections:[
      {id:"doctrine",title:"Universal-tank doctrine",html:"<p>Britain preserves the idea that one balanced tank should defeat enemy armor, support infantry, and exploit mobility rather than divide the army permanently into cruiser and infantry types. The <a href='centurion-tank.html'>Centurion</a> becomes the enduring expression of that approach.</p><p>The doctrine does not remove specialist vehicles. <a href='conqueror-tank.html'>Conqueror</a> supplies limited long-range heavy support, while <a href='charioteer-tank.html'>Charioteer</a> supplies a reserve and export stopgap.</p>"},
      {id:"registry",title:"Registered sequence",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Vehicle</th><th>Introduction</th><th>Weight</th><th>Main armament</th><th>Road speed</th></tr></thead><tbody><tr><td>Cromwell Mk IV</td><td>1943</td><td>28.0 t</td><td>75 mm ROQF Mk V</td><td>64 km/h</td></tr><tr><td>Comet</td><td>1944</td><td>32.5 t</td><td>76.2 mm 77 mm HV</td><td>51 km/h</td></tr><tr><td><a href='centurion-tank.html'>Centurion Mk 1 / 2 / 3</a></td><td>1945 / 1947 / 1949</td><td>42.0–50.8 t</td><td>17-pounder / 20-pounder</td><td>35 km/h</td></tr><tr><td><a href='charioteer-tank.html'>Charioteer</a></td><td>1952</td><td>28.5 t</td><td>83.4 mm 20-pounder</td><td>51 km/h</td></tr><tr><td><a href='conqueror-tank.html'>Conqueror Mk 2</a></td><td>1956</td><td>66.0 t</td><td>120 mm L1 L/55</td><td>34 km/h</td></tr><tr><td><a href='centurion-tank.html'>Centurion Mk 10 / 13</a></td><td>1959 / 1962</td><td>52.0–52.5 t</td><td>105 mm L7 L/52</td><td>35 km/h</td></tr><tr><td><a href='chieftain-tank.html'>Chieftain Mk 3 / 5 / 8 / 10</a></td><td>1966–1982</td><td>54.0–57.0 t</td><td>120 mm L11 L/55</td><td>40–45 km/h</td></tr><tr><td><a href='challenger-1.html'>Challenger 1 Mk 1</a></td><td>1984</td><td>62.0 t</td><td>120 mm L11A5 L/55</td><td>56 km/h</td></tr></tbody></table></div>"},
      {id:"wartime",title:"Cromwell and Comet",html:"<p>Cromwell Mk IV enters service in 1943 as a fast 28-tonne cruiser. Comet follows in 1944 with the 76.2 mm 77 mm HV gun and becomes the immediate wartime bridge to Centurion.</p><p>The extended European war gives both vehicles a longer combat setting than their historical counterparts. Exact setting-specific campaigns, unit strengths, losses, and rebuilds remain outside the present register.</p>"},
      {id:"centurion",title:"Centurion universal tank",html:"<p><a href='centurion-tank.html'>Centurion</a> enters service in 1945 and develops through the 17-pounder Mk 1 and Mk 2, 20-pounder Mk 3, and 105 mm L7 Mk 10 and Mk 13. The sequence increases weight and firepower while retaining a four-person crew and 35 km/h registered road speed.</p>"},
      {id:"branches",title:"Stopgap and heavy-support branches",html:"<p><a href='charioteer-tank.html'>Charioteer</a> mounts a 20-pounder on the Cromwell automotive base as a reserve and export stopgap. It is not a heavy tank or a developmental ancestor of Chieftain.</p><p><a href='conqueror-tank.html'>Conqueror Mk 2</a> supplies a 120 mm heavy-support tank in 1956. Caernarvon remains a training and development bridge between Centurion and Conqueror rather than a separate service-tank lineage.</p>"},
      {id:"chieftain",title:"Chieftain generation",html:"<p><a href='chieftain-tank.html'>Chieftain</a> reunifies heavy firepower and protection with the universal-tank role from 1966. Britain improves its engine reliability earlier than in historical development because German armor is an immediate strategic threat.</p><p>Mk 8 adds laser ranging and an improved automotive package in 1978. Mk 10 adds composite or applique turret protection, passive night equipment, and improved analog-digital fire control in 1982.</p>"},
      {id:"challenger",title:"Challenger transition",html:"<p><a href='challenger-1.html'>Challenger 1 Mk 1</a> enters service in 1984 with a 1,200 hp engine, 120 mm L11A5 rifled gun, and composite armor. The small fleet's support is concentrated in Britain and Canada.</p><p>The Army does not send Challenger to the Falklands. Recovery difficulty and the risk to the newest sixty-two-ton tank keep it out of the South Atlantic theater.</p>"},
      {id:"falklands",title:"Falklands force boundary",html:"<p>Eighteen <a href='chieftain-tank.html'>Chieftain Mk 10</a> tanks form the registered British theater strength. They fight with carriers, reconnaissance vehicles, artillery, engineers, and recovery teams against Argentine TAM-74A2 and Panzer XI formations.</p><p>Challenger remains in Britain and Canada; Warrior remains in troop trials. The campaign is therefore a contest between mature upgraded systems rather than the newest parade-ground vehicles.</p>"}
    ],
    related:[{href:"centurion-tank.html",kicker:"Universal-tank family",label:"Centurion"},{href:"charioteer-tank.html",kicker:"Reserve and export stopgap",label:"Charioteer"},{href:"conqueror-tank.html",kicker:"Heavy-support branch",label:"Conqueror"},{href:"chieftain-tank.html",kicker:"Principal 1985 tank",label:"Chieftain"},{href:"challenger-1.html",kicker:"1984 successor",label:"Challenger 1"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal campaign battle",label:"Battle of Mount Pleasant"}],
    facts:[["Country","United Kingdom"],["Coverage","1943–1985"],["Registered configurations","Fourteen"],["Core doctrine","Universal tank"],["Principal gun tradition","Rifled tank guns"],["1985 expeditionary tank","Chieftain Mk 10"],["Newest service tank","Challenger 1 Mk 1"],["Challenger in Falklands","No"]]
  }),

  "centurion-tank": britishTankArticle({
    title:"Centurion",
    eyebrow:"British universal tank · service from 1945",
    infoboxKicker:"British universal-tank family",
    infoboxTitle:"Centurion",
    lead:"Centurion is the British universal-tank family introduced in 1945. Across the registered Mk 1, Mk 2, Mk 3, Mk 10, and Mk 13 sequence, its main armament develops from the 17-pounder through the 20-pounder to the 105 mm L7 while the vehicle becomes the foundation of postwar British armored doctrine.",
    canon:"The five registered marks, introduction dates, weights, four-person crew, guns, engines, 35 km/h road speed, universal-tank role, relationship to Conqueror and Chieftain, and Caernarvon and FV4202 boundaries are fixed. Armor values, dimensions, ammunition loads, production totals, detailed subvariants, export customers and combat history after the divergence, unit establishments, and retirement remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Centurion emerges from British wartime experience seeking one vehicle with sufficient firepower, protection, and mobility for tank combat and infantry support. It replaces the older permanent cruiser-versus-infantry division with the universal-tank concept.</p>"},
      {id:"marks",title:"Registered marks",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Mark</th><th>Introduction</th><th>Weight</th><th>Main armament</th><th>Engine</th></tr></thead><tbody><tr><td>Mk 1</td><td>1945</td><td>42.0 t</td><td>76.2 mm 17-pounder</td><td>600 hp</td></tr><tr><td>Mk 2</td><td>1947</td><td>47.0 t</td><td>76.2 mm 17-pounder</td><td>650 hp</td></tr><tr><td>Mk 3</td><td>1949</td><td>50.8 t</td><td>83.4 mm 20-pounder</td><td>650 hp</td></tr><tr><td>Mk 10</td><td>1959</td><td>52.0 t</td><td>105 mm L7 L/52</td><td>650 hp</td></tr><tr><td>Mk 13</td><td>1962</td><td>52.5 t</td><td>105 mm L7 L/52</td><td>650 hp</td></tr></tbody></table></div>"},
      {id:"armament",title:"Armament development",html:"<p>The early 17-pounder marks lead to the 83.4 mm 20-pounder Mk 3 and finally the 105 mm L7 Mk 10 and Mk 13. This gun-growth capacity is central to Centurion's long service and helps make the separate Conqueror heavy-support role temporary.</p>"},
      {id:"mobility",title:"Mobility",html:"<p>All five registered marks have a 35 km/h road speed. Weight grows from 42.0 to 52.5 tonnes while engine output rises from 600 to 650 hp. Range, transmission changes, suspension detail, ground pressure, and bridge classification remain open.</p>"},
      {id:"branches",title:"Related developments",html:"<p>Caernarvon is a training and development bridge between Centurion and <a href='conqueror-tank.html'>Conqueror</a>, not a separate operational lineage. FV4202 is a three-vehicle test program whose work feeds <a href='chieftain-tank.html'>Chieftain</a>; it never becomes a service tank.</p>"},
      {id:"service",title:"Commonwealth service",html:"<p>Centurion becomes a durable British and Commonwealth armored platform. The exact setting-specific national fleets, exports, conversions, campaigns, and retirement schedule have not yet been registered.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Centurion establishes the British preference for a four-person tank with a strong rifled gun and the ability to accept successive upgrades. Chieftain succeeds it in first-line service while preserving the universal-tank principle.</p>"}
    ],
    related:[{href:"british-tank-lineage.html",kicker:"National development sequence",label:"British Tank Lineage"},{href:"charioteer-tank.html",kicker:"Cromwell-based stopgap",label:"Charioteer"},{href:"conqueror-tank.html",kicker:"Heavy-support companion",label:"Conqueror"},{href:"chieftain-tank.html",kicker:"Universal-tank successor",label:"Chieftain"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","United Kingdom"],["Entered service","1945"],["Registered marks","Mk 1, 2, 3, 10, and 13"],["Crew","4"],["Combat weight","42.0–52.5 t"],["Main guns","17-pounder; 20-pounder; 105 mm L7"],["Road speed","35 km/h"],["Doctrine","Universal tank"]]
  }),

  "charioteer-tank": britishTankArticle({
    title:"Charioteer",
    eyebrow:"British reserve and export tank · introduced 1952",
    infoboxKicker:"Cromwell-based gun-tank conversion",
    infoboxTitle:"Charioteer",
    lead:"Charioteer is a British reserve and export stopgap introduced in 1952 by mounting the 83.4 mm 20-pounder gun on the Cromwell automotive base. It supplies additional postwar firepower while Centurion production expands, but it is neither a heavy tank nor an ancestor of Chieftain.",
    canon:"The designation, 1952 introduction, 28.5-tonne combat weight, four-person crew, 83.4 mm 20-pounder, 600 hp engine, 51 km/h road speed, Cromwell basis, reserve and export stopgap role, and exclusion from the Chieftain lineage are fixed. Conversion total, turret design details, armor, ammunition load, manufacturers, export customers in the altered setting, units, combat record, and retirement remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>Britain needs more postwar gun power before new <a href='centurion-tank.html'>Centurions</a> are available in sufficient numbers. Charioteer converts existing Cromwell automotive capacity into a 20-pounder carrier for reserve and export service.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1952</td></tr><tr><th>Combat weight</th><td>28.5 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>83.4 mm 20-pounder</td></tr><tr><th>Engine</th><td>600 hp</td></tr><tr><th>Road speed</th><td>51 km/h</td></tr></tbody></table></div>"},
      {id:"mobility",title:"Mobility",html:"<p>The 600 hp engine gives approximately 21.1 hp per tonne and supports a 51 km/h registered road speed. Range, suspension rebuilds, transmission, ground pressure, and cross-country speed remain open.</p>"},
      {id:"role",title:"Reserve and export service",html:"<p>Charioteer is assigned to reserve and export roles rather than the first-line universal-tank force. Exact British formations, Commonwealth recipients, foreign customers, and service dates in this setting remain unregistered.</p>"},
      {id:"boundary",title:"Lineage boundary",html:"<p>The vehicle is not a heavy tank and does not lead technically to Chieftain. It is a practical conversion branch beside Centurion, while <a href='conqueror-tank.html'>Conqueror</a> occupies the genuine heavy-support role.</p>"},
      {id:"documentation",title:"Documented limits",html:"<p>Armor, dimensions, ammunition stowage, sights, radios, conversion works, procurement totals, exports, losses, and withdrawal remain open. Historical export lists should not be transferred automatically across the setting's altered postwar alliances.</p>"}
    ],
    related:[{href:"british-tank-lineage.html",kicker:"National development sequence",label:"British Tank Lineage"},{href:"centurion-tank.html",kicker:"First-line counterpart",label:"Centurion"},{href:"conqueror-tank.html",kicker:"Heavy-support branch",label:"Conqueror"},{href:"chieftain-tank.html",kicker:"Not a direct successor",label:"Chieftain"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1952"],["Type","Reserve and export gun tank"],["Combat weight","28.5 t"],["Crew","4"],["Main armament","83.4 mm 20-pounder"],["Engine","600 hp"],["Road speed","51 km/h"],["Chieftain ancestor","No"]]
  }),

  "conqueror-tank": britishTankArticle({
    title:"Conqueror",
    eyebrow:"British heavy gun tank · introduced 1956",
    infoboxKicker:"Limited heavy-support tank",
    infoboxTitle:"Conqueror Mk 2",
    lead:"Conqueror Mk 2 is Britain's limited heavy-support tank introduced in 1956. Its 120 mm L1 L/55 gun supplies long-range fire against the heaviest German armor while Centurion remains the main universal tank.",
    canon:"The Conqueror Mk 2 designation, 1956 introduction, 66.0-tonne combat weight, four-person crew, 120 mm L1 L/55 gun, 810 hp engine, 34 km/h road speed, heavy-support relationship to Centurion, and Caernarvon development boundary are fixed. Production total, armor, dimensions, ammunition load, fire-control details, formations, campaign history, and retirement remain open in the altered setting.",
    sections:[
      {id:"requirement",title:"Heavy-support requirement",html:"<p>Britain develops Conqueror to engage heavy enemy armor beyond the comfortable reach of early <a href='centurion-tank.html'>Centurion</a> marks. In service it supports the universal-tank fleet rather than replacing it.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Mark</th><td>Conqueror Mk 2</td></tr><tr><th>Introduction</th><td>1956</td></tr><tr><th>Combat weight</th><td>66.0 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>120 mm L1 L/55</td></tr><tr><th>Engine</th><td>810 hp</td></tr><tr><th>Road speed</th><td>34 km/h</td></tr></tbody></table></div>"},
      {id:"firepower",title:"Firepower",html:"<p>The 120 mm L1 gives the heavy-support force a distinct long-range weapon. Ammunition types, carried load, rangefinding system, stabilization, rate of fire, and setting-specific penetration remain open.</p>"},
      {id:"mobility",title:"Mobility and sustainment",html:"<p>At 66 tonnes, Conqueror imposes bridge, transport, recovery, and maintenance demands beyond Centurion. Its 810 hp engine produces approximately 12.3 hp per tonne and a registered 34 km/h road speed.</p>"},
      {id:"caernarvon",title:"Caernarvon bridge",html:"<p>Caernarvon remains a training and development bridge joining Centurion automotive experience to the heavy-gun program. It does not form a separate service-tank generation in the registry.</p>"},
      {id:"succession",title:"End of the separate heavy branch",html:"<p>The 105 mm Centurion improves universal-tank firepower, and <a href='chieftain-tank.html'>Chieftain</a> later combines a 120 mm gun with the principal fleet role. Exact Conqueror withdrawal and disposal dates remain unregistered.</p>"}
    ],
    related:[{href:"british-tank-lineage.html",kicker:"National development sequence",label:"British Tank Lineage"},{href:"centurion-tank.html",kicker:"Supported universal tank",label:"Centurion"},{href:"chieftain-tank.html",kicker:"Role-consolidating successor",label:"Chieftain"},{href:"charioteer-tank.html",kicker:"Contemporary stopgap",label:"Charioteer"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1956"],["Type","Heavy gun tank"],["Combat weight","66.0 t"],["Crew","4"],["Main armament","120 mm L1 L/55"],["Engine","810 hp"],["Power-to-weight","12.3 hp/t"],["Road speed","34 km/h"]]
  }),

  "chieftain-tank": britishTankArticle({
    title:"Chieftain",
    eyebrow:"British main battle tank · service from 1966",
    infoboxKicker:"British 120 mm universal tank",
    infoboxTitle:"Chieftain",
    lead:"Chieftain is Britain's principal 120 mm main battle tank from 1966. The registered Mk 3, Mk 5, Mk 8, and Mk 10 sequence combines the universal-tank role with a strong rifled gun, increasingly reliable automotive systems, laser ranging, passive night equipment, and improved protection and fire control.",
    canon:"The four registered marks, dates, weights, four-person crew, 120 mm L11 L/55 gun, engines, road speeds, accelerated reliability effort, Mk 8 laser rangefinder and automotive package, Mk 10 composite or applique turret protection, passive night equipment and analog-digital fire control, 1985 first-line role, eighteen-tank Falklands theater strength, and principal Mount Pleasant role are fixed. Armor values, dimensions, ammunition load, detailed engine changes, sight models, production totals, units, losses, and postwar upgrades remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Chieftain absorbs the heavy firepower requirement into the main universal-tank fleet. The three-vehicle FV4202 test program contributes development evidence but never enters service.</p><p>Germany's continuing armored strength makes reliability an immediate strategic requirement. Britain therefore improves the power pack earlier than in historical development.</p>"},
      {id:"marks",title:"Registered marks",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Mark</th><th>Introduction</th><th>Weight</th><th>Engine</th><th>Road speed</th><th>Registered change</th></tr></thead><tbody><tr><td>Mk 3</td><td>1966</td><td>54.0 t</td><td>650 hp</td><td>40 km/h</td><td>Initial registered service mark</td></tr><tr><td>Mk 5</td><td>1972</td><td>55.0 t</td><td>750 hp</td><td>43 km/h</td><td>Automotive development</td></tr><tr><td>Mk 8</td><td>1978</td><td>56.0 t</td><td>800 hp</td><td>45 km/h</td><td>Laser rangefinder; improved automotive package</td></tr><tr><td>Mk 10</td><td>1982</td><td>57.0 t</td><td>800 hp</td><td>45 km/h</td><td>Turret protection; passive night; improved fire control</td></tr></tbody></table></div>"},
      {id:"armament",title:"Armament",html:"<p>All registered marks carry the 120 mm L11 L/55 rifled gun. Ammunition natures, carried load, loading drill, coaxial and commander's weapons, barrel life, and setting-specific penetration remain open.</p>"},
      {id:"fire-control",title:"Observation and fire control",html:"<p>Mk 8 introduces a laser rangefinder. Mk 10 adds passive night equipment and improved analog-digital fire control. Both sides in the Falklands possess first-line laser ranging, stabilization, passive night sights, and APFSDS, but neither possesses universal thermal hunter-killer systems.</p>"},
      {id:"protection",title:"Protection",html:"<p>Mk 10 adds composite or applique turret protection. Exact construction, coverage, thickness, mass distribution, and resistance remain unregistered. The article therefore records the protection class without importing historical Stillbrew details wholesale.</p>"},
      {id:"falklands",title:"Falklands War",html:"<p>Eighteen Chieftain Mk 10 tanks deploy to the South Atlantic. They form the heavy British armored component at <a href='battle-mount-pleasant-1985.html'>Mount Pleasant</a>, working with Cavalier, FV432, CVR(T), artillery, engineers, and recovery teams.</p><p>Chieftain holds the frontal-protection and 120 mm firepower advantage; Argentine TAM vehicles hold mobility, ground-pressure, and recovery advantages. Exact tank losses and individual actions remain open.</p>"},
      {id:"successor",title:"Challenger transition",html:"<p><a href='challenger-1.html'>Challenger 1</a> enters service in 1984 but remains a small, support-intensive fleet in Britain and Canada. Chieftain therefore remains the expeditionary first-line tank in 1985.</p>"}
    ],
    related:[{href:"british-tank-lineage.html",kicker:"National development sequence",label:"British Tank Lineage"},{href:"centurion-tank.html",kicker:"Universal-tank predecessor",label:"Centurion"},{href:"conqueror-tank.html",kicker:"Heavy-gun predecessor",label:"Conqueror"},{href:"challenger-1.html",kicker:"1984 successor",label:"Challenger 1"},{href:"battle-mount-pleasant-1985.html",kicker:"Principal combat",label:"Battle of Mount Pleasant"},{href:"falklands-war.html",kicker:"Parent conflict",label:"Falklands–Malvinas War"}],
    facts:[["Country of origin","United Kingdom"],["Entered service","1966"],["Registered marks","Mk 3, 5, 8, and 10"],["Crew","4"],["Combat weight","54.0–57.0 t"],["Main armament","120 mm L11 L/55"],["Engine output","650–800 hp"],["Road speed","40–45 km/h"],["Falklands variant","Mk 10"],["Falklands theater strength","18"]]
  }),

  "challenger-1": britishTankArticle({
    title:"Challenger 1",
    eyebrow:"British main battle tank · introduced 1984",
    infoboxKicker:"Early composite-armored successor",
    infoboxTitle:"Challenger 1 Mk 1",
    lead:"Challenger 1 Mk 1 is Britain's newest service tank in 1984. The 62-tonne four-person vehicle combines a 1,200 hp engine, 120 mm L11A5 rifled gun, and composite armor, but its small fleet and concentrated British–Canadian support base keep it out of the Falklands War.",
    canon:"The Challenger 1 Mk 1 designation, 1984 introduction, 62.0-tonne combat weight, four-person crew, 120 mm L11A5 L/55 gun, 1,200 hp engine, 56 km/h road speed, composite armor, small fleet, concentrated support in Britain and Canada, successor relationship to Chieftain, and nondeployment to the Falklands are fixed. Development origin, production total, armor composition and values, dimensions, ammunition load, fire-control details, units, Canadian support arrangements, later marks, and combat history remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>Challenger follows <a href='chieftain-tank.html'>Chieftain</a> as Britain's second postwar main-battle-tank generation. It retains a 120 mm rifled gun while adding composite armor and a substantial increase in automotive power.</p><p>The precise procurement path and relationship to historical export programs remain open in the setting registry.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Mark</th><td>Challenger 1 Mk 1</td></tr><tr><th>Introduction</th><td>1984</td></tr><tr><th>Combat weight</th><td>62.0 tonnes</td></tr><tr><th>Crew</th><td>Four</td></tr><tr><th>Main armament</th><td>120 mm L11A5 L/55</td></tr><tr><th>Engine</th><td>1,200 hp</td></tr><tr><th>Road speed</th><td>56 km/h</td></tr></tbody></table></div>"},
      {id:"protection",title:"Composite protection",html:"<p>Challenger is the first registered British service tank in the sequence with composite armor as an integral defining feature. Composition, thickness, coverage, mass, resistance, and repair procedures remain classified or unregistered.</p>"},
      {id:"mobility",title:"Mobility",html:"<p>The 1,200 hp engine supplies approximately 19.4 hp per tonne and a registered 56 km/h road speed. Range, transmission, suspension, ground pressure, bridge classification, and cross-country performance remain open.</p>"},
      {id:"fleet",title:"Early fleet",html:"<p>The 1984 fleet is small, and its specialized support is concentrated in Britain and Canada. Exact regiments, Canadian facilities, vehicle totals, spares, transporters, and readiness remain unregistered.</p>"},
      {id:"falklands",title:"Exclusion from the Falklands",html:"<p>The Army refuses to risk its newest sixty-two-ton tank in a difficult recovery theater. Challenger remains in Britain and Canada while eighteen Chieftain Mk 10s deploy.</p><p>Claims that Challenger fights at Mount Pleasant are superseded and incorrect.</p>"},
      {id:"status",title:"1985 status",html:"<p>Challenger has entered service but has not displaced Chieftain across the force. Later marks, upgrades, exports, combat history, and eventual replacement remain outside the present 1985 register.</p>"}
    ],
    related:[{href:"british-tank-lineage.html",kicker:"National development sequence",label:"British Tank Lineage"},{href:"chieftain-tank.html",kicker:"Principal predecessor",label:"Chieftain"},{href:"centurion-tank.html",kicker:"Universal-tank heritage",label:"Centurion"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"},{href:"falklands-war.html",kicker:"War not entered",label:"Falklands–Malvinas War"},{href:"military-technology.html",kicker:"Capability portal",label:"Military Technology"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1984"],["Mark","Challenger 1 Mk 1"],["Combat weight","62.0 t"],["Crew","4"],["Main armament","120 mm L11A5 L/55"],["Engine","1,200 hp"],["Power-to-weight","19.4 hp/t"],["Road speed","56 km/h"],["Protection","Composite armor"],["Falklands service","None"]]
  })
});

function addBritishTankItem(slug, key, item) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article[key] = article[key] || [];
  if (!article[key].some(existing => (item.id && existing.id === item.id) || (item.href && existing.href === item.href))) article[key].push(item);
}

addBritishTankItem("operation-sceptre","related",{href:"chieftain-tank.html",kicker:"Principal British tank",label:"Chieftain Mk 10"});
addBritishTankItem("battle-mount-pleasant-1985","related",{href:"chieftain-tank.html",kicker:"Principal British tank",label:"Chieftain Mk 10"});
addBritishTankItem("falklands-campaign-1985","related",{href:"british-tank-lineage.html",kicker:"British armored system",label:"British Tank Lineage"});
addBritishTankItem("argentine-armored-systems","related",{href:"british-tank-lineage.html",kicker:"1985 opposing system",label:"British Tank Lineage"});
