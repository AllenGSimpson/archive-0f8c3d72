window.deepArticles = window.deepArticles || {};

const spanishArmorSources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Spanish weapons, licensed armor, and armored-force composition"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Spain, the Latin Bloc, and postwar strategic development"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Spanish development and Latin military cooperation"},
  {href:"../transcript.md",label:"Master Transcript — Spain, Latin procurement, and the Portuguese-African intervention"}
];

const spanishArmorLandscape = {
  src:"assets/diagrams/spanish-armored-system.svg",
  alt:"Diagram showing Italian Ariete main battle tanks, Occitan light armor, and Spanish-built wheeled carriers and reconnaissance vehicles joining the Spanish armored force",
  caption:"Spain combines licensed allied armor with a domestic wheeled-vehicle branch rather than maintaining a wholly national tank lineage"
};

const spanishArmorArticle = config => ({
  category:"Military equipment", eyebrow:"Spanish armored warfare", landscape:spanishArmorLandscape,
  ...config, sources:spanishArmorSources,
  categories:config.categories || ["Spain","Latin Bloc","Armored forces","Wheeled armored vehicles","Military equipment"]
});

Object.assign(window.deepArticles, {
  "spanish-armored-forces": spanishArmorArticle({
    title:"Spanish Armored Forces", eyebrow:"Mixed national and Latin-bloc armored system · postwar era–1985", infoboxKicker:"National armored-force system", infoboxTitle:"Spanish armored forces",
    lead:"Spain's armored forces combine Italian Ariete-series main battle tanks, Occitan light armor, and <a href='spanish-wheeled-armored-vehicles.html'>Spanish-built wheeled carriers and reconnaissance vehicles</a>. The result is a mixed procurement system: allied tank lineages provide the principal tracked combat vehicles while domestic industry concentrates on road-mobile troop lift, reconnaissance, ammunition, artillery, and support production.",
    canon:"The principal use of Italian Ariete-series MBTs, Occitan light armor, and Spanish-built wheeled carriers and reconnaissance vehicles is fixed. Spain also develops artillery, ammunition, and licensed Italian and Occitan armor. Individual Spanish service designations, exact Ariete or Occitan variants, procurement dates, license arrangements by model, quantities, formations, wheeled-vehicle names, specifications, and complete operational history remain open.",
    sections:[
      {id:"structure",title:"A mixed armored system",html:"<p>Spain does not duplicate the complete Italian or Occitan tank industries. It obtains and builds licensed armor from both partners while preserving a national specialty in wheeled vehicles. The force therefore joins three industrial sources rather than one continuous domestic tank family.</p>"},
      {id:"italian",title:"Italian main battle tanks",html:"<p>Italian <a href='italian-tank-lineage.html'>Ariete-series tanks</a> form the principal main-battle-tank layer. The register does not identify which Ariete generations serve Spain, whether each is imported or license-built, or how long older vehicles remain in reserve.</p>"},
      {id:"occitan",title:"Occitan light armor",html:"<p>Occitan light armor supplies the lighter tracked layer. The <a href='char-leger-55.html'>Char Léger 55</a> belongs to the known Occitan light-tank lineage, but the source does not establish it—or any other named model—as Spain's sole or universal vehicle.</p>"},
      {id:"wheeled",title:"Domestic wheeled branch",html:"<p><a href='spanish-wheeled-armored-vehicles.html'>Spanish-built wheeled carriers and reconnaissance vehicles</a> form the clearly national vehicle branch. They provide troop movement, scouting, route security, convoy work, and a platform base that does not depend on a Spanish heavy-tank design bureau.</p>"},
      {id:"industry",title:"Licensed production and national industry",html:"<p>Spanish industry develops ammunition, artillery, wheeled vehicles, and licensed Italian or Occitan armor. The registry does not divide imported kits, component manufacture, final assembly, depot rebuilding, or full local production by vehicle.</p>"},
      {id:"angola",title:"Portuguese-African operations",html:"<p>During the <a href='angolan-emergency.html'>Angolan Emergency</a>, Spain supplies the Latin coalition's principal foreign ground weight. Motorized troops, armored cars, trucks, engineers, transport, convoy protection, and repair support roads, moving outer blocks, supplies, and the relief of air-landed forces under Portuguese command.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Common Latin ammunition and selective licensing ease cooperation with Italian and Occitan equipment without creating a single bloc vehicle fleet. National service, maintenance, communications, and procurement systems remain distinct.</p>"},
      {id:"limits",title:"Open registry",html:"<p>No Spanish tank designation, wheeled-vehicle model, wheel arrangement, weapon, armor value, engine, unit establishment, production total, or complete 1985 order of battle is presently fixed. Those fields remain open for later canon.</p>"}
    ],
    related:[{href:"spanish-wheeled-armored-vehicles.html",kicker:"Domestic vehicle branch",label:"Spanish Wheeled Armored Vehicles"},{href:"spain.html",kicker:"National context",label:"Spanish State"},{href:"italian-tank-lineage.html",kicker:"Principal MBT source",label:"Italian Tank Lineage"},{href:"occitan-tank-lineage.html",kicker:"Light-armor source",label:"Occitan Tank Lineage"},{href:"spanish-infantry-weapons.html",kicker:"Army weapon system",label:"Spanish Infantry Weapons"},{href:"latin-land-ammunition-standards.html",kicker:"Interoperability context",label:"Latin Land-Ammunition Standards"}],
    facts:[["Country","Spain"],["Coverage","Postwar era–1985"],["Principal MBT source","Italian Ariete series"],["Light-armor source","Occitania"],["Domestic vehicle specialty","Wheeled carriers and reconnaissance"],["Industrial method","National development and licensed production"],["Major documented deployment","Portuguese Angola"],["Exact vehicle registry","Open"]]
  }),

  "spanish-wheeled-armored-vehicles": spanishArmorArticle({
    title:"Spanish Wheeled Armored Vehicles", eyebrow:"Domestic carrier and reconnaissance branch · postwar era–1985", infoboxKicker:"National wheeled-vehicle branch", infoboxTitle:"Spanish wheeled armored vehicles",
    lead:"Spanish wheeled armored vehicles are the domestically built carrier and reconnaissance branch of the <a href='spanish-armored-forces.html'>Spanish armored forces</a>. They give Spain a national road-mobile specialty beside Italian Ariete-series main battle tanks and Occitan light armor, and provide the vehicle type most clearly associated with Spain's ground contribution in Portuguese Angola.",
    canon:"Spanish construction of wheeled carriers and reconnaissance vehicles is fixed, as are the Spanish use of armored cars, trucks, engineers, and motorized troops in Portuguese Angola. Vehicle names, manufacturers, wheel arrangements, dates, weights, crews, armor, weapons, engines, range, amphibious capability, production totals, unit structures, variants, and exports remain open.",
    sections:[
      {id:"branch",title:"National vehicle branch",html:"<p>Wheeled carriers and reconnaissance vehicles are Spain's principal indigenous armored-vehicle specialty. The branch complements licensed tracked armor rather than attempting to replace main battle tanks or light tanks.</p>"},
      {id:"carriers",title:"Carrier role",html:"<p>Carrier vehicles move troops, stores, command personnel, engineers, or specialist teams under protection. The registry does not establish whether one common chassis serves these tasks or whether several unrelated families exist.</p>"},
      {id:"recon",title:"Reconnaissance role",html:"<p>Reconnaissance vehicles support scouting, screening, route observation, security, and liaison. No fixed weapon, sensor, crew, wheel arrangement, or armored-cavalry organization is yet assigned to the branch.</p>"},
      {id:"production",title:"Spanish production",html:"<p>The vehicles are explicitly Spanish-built. Manufacturers, plant locations, imported components, annual output, and the boundary between original design and licensed subsystems remain unregistered.</p>"},
      {id:"mobility",title:"Road mobility and support",html:"<p>The branch fits Spain's wider development of trucks, ammunition, artillery, and repair capacity. Wheeled mobility supports long road movements and convoy duties, although exact range, cross-country performance, and logistical demand remain open.</p>"},
      {id:"angola",title:"Portuguese Angola",html:"<p>Spanish armored cars and motorized troops serve in <a href='portuguese-angola.html'>Portuguese Angola</a> during the 1977–1980 Latin intervention. They form moving outer blocks, secure roads, carry supplies, protect convoys, and relieve air-landed forces while Portugal retains operational command.</p>"},
      {id:"comparisons",title:"Latin context",html:"<p>Spain's branch exists beside <a href='occitan-wheeled-reconnaissance.html'>Occitan wheeled reconnaissance</a> and Italy's later <a href='autoblindo-79-centauro.html'>Autoblindo 79 Centauro</a>. The sources establish parallel national specialties, not a shared chassis or universal Latin wheeled-vehicle standard.</p>"},
      {id:"limits",title:"Open registry",html:"<p>No individual Spanish wheeled armored vehicle is named in the controlling reference. Designations, specifications, service dates, production figures, units, exports, losses, and retirement histories remain open until later canon defines them.</p>"}
    ],
    related:[{href:"spanish-armored-forces.html",kicker:"National force system",label:"Spanish Armored Forces"},{href:"spain.html",kicker:"Country of origin",label:"Spanish State"},{href:"portuguese-angola.html",kicker:"Documented operational theater",label:"Portuguese Angola"},{href:"angolan-airmobile-pursuit-groups.html",kicker:"Coalition ground-air method",label:"Angolan Airmobile Pursuit Groups"},{href:"occitan-wheeled-reconnaissance.html",kicker:"Latin national counterpart",label:"Occitan Wheeled Reconnaissance"},{href:"autoblindo-79-centauro.html",kicker:"Italian wheeled comparison",label:"Autoblindo 79 Centauro"}],
    facts:[["Country of origin","Spain"],["Type","Wheeled carrier and reconnaissance branch"],["Manufacture","Spanish-built"],["Force relationship","Companion to licensed tracked armor"],["Documented theater","Portuguese Angola"],["Documented duties","Road security, outer blocks, supply, relief"],["Named vehicle models","Open"],["Specifications and totals","Open"]]
  })
});

function addSpanishArmorItem(slug, key, item) {
  const article = window.deepArticles[slug];
  if (!article) return;
  article[key] = article[key] || [];
  if (!article[key].some(existing => (item.id && existing.id === item.id) || (item.href && existing.href === item.href))) article[key].push(item);
}

addSpanishArmorItem("spain","sections",{id:"armored-forces",title:"Armored forces",html:"<p>Spain's <a href='spanish-armored-forces.html'>armored forces</a> principally combine Italian Ariete-series main battle tanks, Occitan light armor, and <a href='spanish-wheeled-armored-vehicles.html'>Spanish-built wheeled carriers and reconnaissance vehicles</a>. National industry also develops artillery and ammunition and undertakes licensed Italian and Occitan armor production; exact vehicle models and quantities remain open.<sup class='canon-note' data-provenance='a'>[a]</sup></p>"});
addSpanishArmorItem("spain","related",{href:"spanish-armored-forces.html",kicker:"National ground-force system",label:"Spanish Armored Forces"});
