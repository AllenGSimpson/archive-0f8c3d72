window.deepArticles = window.deepArticles || {};

const britishInfantrySources = [
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — British infantry-weapons registry and optical interface"},
  {href:"../transcript.md",label:"Master Transcript — India as the first sustained British weapons proving ground"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British Commonwealth strategy and military development"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — postwar Commonwealth conflicts and armament"}
];

const britishInfantryLandscape = {
  src:"assets/diagrams/british-infantry-weapons.svg",
  alt:"Timeline of the British Rifle No. 9 and TADEN infantry-weapons families from 1951 through 1985",
  caption:"Britain keeps 7×43 mm as a common rifle-and-machine-gun system, then adds optics and accessories without adopting the trial 4.85 mm family before 1985"
};

const britishInfantryArticle = config => ({
  category:"Military equipment",
  eyebrow:"British infantry weapon",
  landscape:britishInfantryLandscape,
  ...config,
  sources:britishInfantrySources,
  categories:config.categories || ["United Kingdom","British Commonwealth","Infantry weapons","Small arms","Military equipment"]
});

Object.assign(window.deepArticles, {
  "british-infantry-weapons": britishInfantryArticle({
    title:"British Infantry Weapons, 1951–1985",
    eyebrow:"British 7×43 mm service-weapons system",
    infoboxKicker:"Postwar British small-arms system",
    infoboxTitle:"Rifle No. 9 and TADEN",
    lead:"Britain's postwar infantry-weapons system is built around the 7×43 mm <a href='rifle-no-9.html'>Rifle No. 9</a> bullpup and the belt-fed <a href='l4-taden.html'>L4</a> and <a href='l7-taden.html'>L7 TADEN</a> machine guns. Indian service exposes the young family to dust, monsoon rain, heat, poor roads, and irregular maintenance; later marks improve manufacture, reliability, optics, and accessories without abandoning the common cartridge.",
    canon:"The six registered weapon marks, introduction dates, 7×43 mm cartridge, feed systems, roles, Mk 1's identity as the service EM-2, Mk 4 equipment, Enfield Dovetail Pattern 76, Indian proving-ground role, post-1978 4.85×49 mm trials, and non-adoption before 1985 are fixed. Designers, manufacturers, mechanisms, dimensions, mass, rates of fire, production totals, issue scales, exports, losses, and post-1985 succession remain open.",
    sections:[
      {id:"system",title:"One cartridge system",html:"<p>Britain standardizes rifle, light-machine-gun, general-purpose, tripod, and vehicle weapons around 7×43 mm. The decision reduces the split between individual and supporting ammunition without claiming that every belt, link, magazine, or loading arrangement is interchangeable.</p>"},
      {id:"registry",title:"Registered weapons",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Weapon</th><th>Introduction</th><th>Cartridge</th><th>Feed</th><th>Role</th></tr></thead><tbody><tr><td><a href='rifle-no-9.html'>Rifle No. 9 Mk 1</a></td><td>1951</td><td>7×43 mm</td><td>20-round magazine</td><td>Standard bullpup service rifle</td></tr><tr><td><a href='l4-taden.html'>L4 TADEN</a></td><td>1952</td><td>7×43 mm</td><td>50-round belt</td><td>Bipod light machine gun</td></tr><tr><td><a href='l7-taden.html'>L7 TADEN</a></td><td>1954</td><td>7×43 mm</td><td>100-round belt</td><td>General-purpose and tripod machine gun</td></tr><tr><td><a href='rifle-no-9.html'>Rifle No. 9 Mk 2</a></td><td>1962</td><td>7×43 mm</td><td>25-round magazine</td><td>Reliability and manufacturing improvement</td></tr><tr><td><a href='l7-taden.html'>L7A4 TADEN</a></td><td>1974</td><td>7×43 mm</td><td>100-round belt</td><td>Improved barrel, feed, and optical package</td></tr><tr><td><a href='rifle-no-9.html'>Rifle No. 9 Mk 4</a></td><td>1977</td><td>7×43 mm</td><td>25-round magazine</td><td>Principal 1985 service rifle</td></tr></tbody></table></div>"},
      {id:"india",title:"Indian proving ground",html:"<p>From the early 1950s the Indian Wars become the first sustained field evaluation of Rifle No. 9 and TADEN. British and client forces expose the weapons to dust, heat, monsoon rain, poor roads, and irregular maintenance while firms receive faster defect reports than a controlled range program could provide.</p>"},
      {id:"rifle",title:"Rifle No. 9 development",html:"<p>Mk 1 is the service EM-2 adopted in 1951 because no NATO standardization decision overturns it. Mk 2 improves reliability and manufacture in 1962. Mk 4 becomes the principal 1985 rifle with polymer furniture, a passive night-sight interface, 4× marksman optic, and optional underbarrel 40×46 mm grenade launcher.</p>"},
      {id:"taden",title:"TADEN support weapons",html:"<p>L4 supplies a 50-round-belt bipod light machine gun from 1952. L7 uses a 100-round belt for general-purpose, tripod, and vehicle work from 1954. The 1974 L7A4 improves barrel, feed, and optical fire control.</p>"},
      {id:"interface",title:"Enfield optical interface",html:"<p>The <a href='enfield-dovetail-pattern-76.html'>Enfield Dovetail Pattern 76</a> becomes the standard British optical mounting interface. It is a national standard, not Picatinny, and does not imply cross-bloc compatibility.</p>"},
      {id:"trials",title:"The rejected 4.85 mm transition",html:"<p>Britain begins <a href='british-4-85-mm-trials.html'>4.85×49 mm weapon trials</a> after 1978. The new caliber is not adopted before 1985 because 7×43 mm remains effective and deeply embedded in weapons, ammunition production, training, stocks, and Commonwealth logistics.</p>"}
    ],
    related:[{href:"rifle-no-9.html",kicker:"Standard bullpup rifle",label:"Rifle No. 9"},{href:"l4-taden.html",kicker:"Bipod light machine gun",label:"L4 TADEN"},{href:"l7-taden.html",kicker:"General-purpose machine gun",label:"L7 TADEN"},{href:"enfield-dovetail-pattern-76.html",kicker:"Optical interface",label:"Enfield Dovetail Pattern 76"},{href:"british-4-85-mm-trials.html",kicker:"Unadopted successor family",label:"British 4.85 mm Trials"},{href:"proxy-high-tide.html",kicker:"First sustained field evaluation",label:"Proxy High Tide"}],
    facts:[["Country","United Kingdom"],["Coverage","1951–1985"],["Service cartridge","7×43 mm"],["Principal 1985 rifle","Rifle No. 9 Mk 4"],["Light machine gun","L4 TADEN"],["General-purpose machine gun","L7A4 TADEN"],["Optical interface","Enfield Dovetail Pattern 76"],["4.85 mm adopted by 1985","No"]]
  }),

  "rifle-no-9": britishInfantryArticle({
    title:"Rifle No. 9",
    eyebrow:"British bullpup service-rifle family · 1951–1985",
    infoboxKicker:"British 7×43 mm service rifle",
    infoboxTitle:"Rifle No. 9",
    lead:"Rifle No. 9 is Britain's 7×43 mm bullpup service-rifle family, adopted as the service EM-2 in 1951. Mk 2 improves reliability and manufacture in 1962, while Mk 4 adds modern furniture and sighting interfaces in 1977 and remains the principal British service rifle in 1985.",
    canon:"The family name, Mk 1's identity as service EM-2, three registered marks, introduction dates, 7×43 mm cartridge, magazine capacities, roles, Mk 4 polymer furniture, passive night-sight interface, 4× marksman optic, optional 40×46 mm underbarrel launcher, Indian proving-ground use, and principal 1985 status are fixed. Mechanism, dimensions, mass, barrel, sights, production, units, exports, and losses remain open.",
    sections:[
      {id:"adoption",title:"Adoption of the EM-2",html:"<p>Britain places the EM-2 into service as Rifle No. 9 Mk 1 in 1951. No NATO ammunition standardization overturns adoption, allowing the bullpup and its 7×43 mm cartridge to become the foundation of postwar infantry armament.</p>"},
      {id:"marks",title:"Registered marks",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Mark</th><th>Introduction</th><th>Feed</th><th>Registered role</th></tr></thead><tbody><tr><td>Mk 1</td><td>1951</td><td>20-round magazine</td><td>Standard bullpup service rifle</td></tr><tr><td>Mk 2</td><td>1962</td><td>25-round magazine</td><td>Reliability and manufacturing improvement</td></tr><tr><td>Mk 4</td><td>1977</td><td>25-round magazine</td><td>Principal 1985 service rifle</td></tr></tbody></table></div>"},
      {id:"india",title:"Field evaluation in India",html:"<p>The early family receives its first sustained field experience during the Indian Wars. Dust, monsoon rain, heat, poor transport, and inconsistent local maintenance expose defects and shape later reliability and manufacturing work.</p>"},
      {id:"mk4",title:"Mk 4 equipment",html:"<p>Mk 4 has polymer furniture, a passive night-sight interface, provision for a 4× marksman optic, and an optional underbarrel 40×46 mm grenade launcher. The exact issued quantities and component designs remain open.</p>"},
      {id:"ammunition",title:"7×43 mm continuity",html:"<p>The rifle shares its service cartridge with the TADEN machine-gun family. By 1985 that choice is embedded across ammunition plants, depots, training, allied contracts, and weapons stocks.</p>"},
      {id:"succession",title:"4.85 mm trial boundary",html:"<p>Britain tests 4.85×49 mm weapons after 1978 but does not replace Rifle No. 9 before 1985. No historical SA80 service sequence should be imported into this period.</p>"}
    ],
    related:[{href:"british-infantry-weapons.html",kicker:"National weapon system",label:"British Infantry Weapons"},{href:"l4-taden.html",kicker:"Squad automatic support",label:"L4 TADEN"},{href:"l7-taden.html",kicker:"General-purpose support",label:"L7 TADEN"},{href:"enfield-dovetail-pattern-76.html",kicker:"Optical interface",label:"Enfield Dovetail Pattern 76"},{href:"british-4-85-mm-trials.html",kicker:"Unadopted successor trials",label:"British 4.85 mm Trials"},{href:"proxy-high-tide.html",kicker:"First field proving ground",label:"Proxy High Tide"}],
    facts:[["Country of origin","United Kingdom"],["Adopted","1951"],["Family marks","Mk 1, Mk 2, Mk 4"],["Configuration","Bullpup"],["Cartridge","7×43 mm"],["Magazine","20 rounds, later 25"],["Principal 1985 mark","Mk 4"],["Historical service identity","EM-2"]]
  }),

  "l4-taden": britishInfantryArticle({
    title:"L4 TADEN",
    eyebrow:"British light machine gun · introduced 1952",
    infoboxKicker:"Bipod light machine gun",
    infoboxTitle:"L4 TADEN",
    lead:"L4 TADEN is Britain's 7×43 mm bipod light machine gun, introduced in 1952 with a 50-round belt. It supplies mobile automatic fire within the same cartridge system as Rifle No. 9 while the heavier <a href='l7-taden.html'>L7 TADEN</a> serves general-purpose, tripod, and vehicle roles.",
    canon:"The designation, 1952 introduction, 7×43 mm cartridge, 50-round-belt feed, bipod light-machine-gun role, relationship to L7, and Indian field evaluation are fixed. Designer, manufacturer, mechanism, dimensions, mass, barrel, rate of fire, belt links, production, units, mounts, and losses remain open.",
    sections:[
      {id:"role",title:"Light-machine-gun role",html:"<p>L4 is the mobile bipod member of the TADEN family. Its function is squad and section automatic support rather than the sustained tripod and vehicle work assigned to L7.</p>"},
      {id:"configuration",title:"Registered configuration",html:"<div class='table-wrap'><table class='wiki-table'><tbody><tr><th>Introduction</th><td>1952</td></tr><tr><th>Cartridge</th><td>7×43 mm</td></tr><tr><th>Feed</th><td>50-round belt</td></tr><tr><th>Primary support</th><td>Bipod</td></tr><tr><th>Role</th><td>Light machine gun</td></tr></tbody></table></div>"},
      {id:"system",title:"Common-cartridge system",html:"<p>L4 shares the British service cartridge with Rifle No. 9 and L7. The register does not claim common magazines, belt links, barrels, or internal mechanisms.</p>"},
      {id:"india",title:"Indian proving ground",html:"<p>TADEN weapons receive sustained field evaluation in India soon after adoption. The theater reveals performance under heat, dust, rain, poor roads, and maintenance outside ideal British depots.</p>"},
      {id:"l7",title:"Relationship to L7",html:"<p>L7 enters service in 1954 with a 100-round belt and general-purpose, tripod, and later vehicle roles. L4 remains the lighter bipod weapon rather than a preliminary L7 mark.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Operation, dimensions, mass, barrel changes, rate of fire, belt-link pattern, sights, production, organization, exports, and combat losses remain open.</p>"}
    ],
    related:[{href:"british-infantry-weapons.html",kicker:"National weapon system",label:"British Infantry Weapons"},{href:"rifle-no-9.html",kicker:"Common-cartridge rifle",label:"Rifle No. 9"},{href:"l7-taden.html",kicker:"Heavier TADEN companion",label:"L7 TADEN"},{href:"enfield-dovetail-pattern-76.html",kicker:"Later optical interface",label:"Enfield Dovetail Pattern 76"},{href:"proxy-high-tide.html",kicker:"First field proving ground",label:"Proxy High Tide"},{href:"commonwealth.html",kicker:"Strategic system",label:"British Commonwealth"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1952"],["Type","Bipod light machine gun"],["Cartridge","7×43 mm"],["Feed","50-round belt"],["Family","TADEN"],["Early proving ground","Indian Wars"],["Mechanism","Open"]]
  }),

  "l7-taden": britishInfantryArticle({
    title:"L7 TADEN",
    eyebrow:"British general-purpose machine-gun family · 1954–1985",
    infoboxKicker:"General-purpose and vehicle machine gun",
    infoboxTitle:"L7 TADEN",
    lead:"L7 TADEN is Britain's 7×43 mm general-purpose machine-gun family, introduced in 1954 with a 100-round belt for general-purpose and tripod work. L7A4 follows in 1974 with an improved barrel, feed system, and optical fire-control package, and the family also arms British vehicles including FV432.",
    canon:"The L7 and L7A4 designations, introduction dates, 7×43 mm cartridge, 100-round belt, registered roles and improvements, Indian field evaluation, and FV432 armament use are fixed. Mechanism, dimensions, mass, barrel details, rate of fire, belt links, optical components, production, units, other mounts, and losses remain open.",
    sections:[
      {id:"role",title:"General-purpose role",html:"<p>L7 supplies sustained automatic fire from general-purpose and tripod positions. Vehicle mounting extends the family beyond the dismounted infantry role without changing its cartridge or basic service identity.</p>"},
      {id:"marks",title:"Registered marks",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Mark</th><th>Introduction</th><th>Feed</th><th>Registered role</th></tr></thead><tbody><tr><td>L7 TADEN</td><td>1954</td><td>100-round belt</td><td>General-purpose and tripod machine gun</td></tr><tr><td>L7A4 TADEN</td><td>1974</td><td>100-round belt</td><td>Improved barrel, feed, and optical fire-control package</td></tr></tbody></table></div>"},
      {id:"india",title:"Indian field evaluation",html:"<p>The early L7 family joins Rifle No. 9 and L4 in sustained Indian testing. Manufacturers and services receive operational evidence from harsh climate and imperfect support conditions.</p>"},
      {id:"vehicle",title:"Vehicle armament",html:"<p>The standard <a href='fv432.html'>FV432 Mk 1</a> is registered with a 7 mm L7 TADEN. Exact vehicle mounts, ammunition stowage, and the allocation of later L7A4 equipment remain open.</p>"},
      {id:"a4",title:"L7A4 improvement",html:"<p>The 1974 mark improves barrel, feed, and optical fire control while retaining the 7×43 mm cartridge and 100-round belt category. Specific parts and issued sight models are not yet fixed.</p>"},
      {id:"limits",title:"Documented limits",html:"<p>Mechanism, dimensions, mass, rate of fire, barrel system, links, optical equipment, mounts beyond FV432, production, organizations, exports, and losses remain open.</p>"}
    ],
    related:[{href:"british-infantry-weapons.html",kicker:"National weapon system",label:"British Infantry Weapons"},{href:"rifle-no-9.html",kicker:"Common-cartridge rifle",label:"Rifle No. 9"},{href:"l4-taden.html",kicker:"Light TADEN companion",label:"L4 TADEN"},{href:"enfield-dovetail-pattern-76.html",kicker:"Optical interface",label:"Enfield Dovetail Pattern 76"},{href:"fv432.html",kicker:"Registered vehicle mounting",label:"FV432"},{href:"proxy-high-tide.html",kicker:"First field proving ground",label:"Proxy High Tide"}],
    facts:[["Country of origin","United Kingdom"],["Introduction","1954"],["Improved mark","L7A4, 1974"],["Type","General-purpose machine gun"],["Cartridge","7×43 mm"],["Feed","100-round belt"],["Registered vehicle","FV432"],["Early proving ground","Indian Wars"]]
  }),

  "enfield-dovetail-pattern-76": britishInfantryArticle({
    title:"Enfield Dovetail Pattern 76",
    eyebrow:"British optical mounting interface · standardized 1976",
    infoboxKicker:"National small-arms interface",
    infoboxTitle:"Enfield Dovetail Pattern 76",
    lead:"Enfield Dovetail Pattern 76 is Britain's standard optical mounting interface for infantry weapons. Adopted as a national dovetail standard rather than a universal rail, it supports the mature Rifle No. 9 and TADEN sighting system while remaining distinct from German, Japanese, Latin, and later international interfaces.",
    canon:"The name, British standard status, 1976 designation year, optical-mounting purpose, use with the mature British infantry-weapons system, and explicit non-Picatinny identity are fixed. Geometry, dimensions, locking method, allowable loads, accessories, manufacturers, compatibility list, patent history, and later replacement remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>Pattern 76 provides a governed attachment point for optical equipment without requiring every weapon and sight to use an improvised proprietary mount.</p>"},
      {id:"standard",title:"National standard",html:"<p>The interface belongs to the British weapons system and is not a universal cross-bloc rail. Its adoption supports procurement and training within Britain and participating Commonwealth forces.</p>"},
      {id:"rifle",title:"Rifle No. 9 relationship",html:"<p>Rifle No. 9 Mk 4 enters service in 1977 with a passive night-sight interface and provision for a 4× marksman optic. Pattern 76 supplies the named national mounting standard around that equipment generation.</p>"},
      {id:"taden",title:"TADEN relationship",html:"<p>L7A4's improved optical fire-control package appears in 1974, before the Pattern 76 designation. The register establishes the common British optical system but leaves exact retrofit and compatibility schedules open.</p>"},
      {id:"comparison",title:"Contemporary interfaces",html:"<p>Germany uses Einheitsleiste 79, Japan the Type 41 optical rib, and the Latin system Guida Comune 79. These are parallel national or bloc interfaces, not evidence of an early universal rail.</p>"},
      {id:"boundary",title:"Not Picatinny",html:"<p>Calling Pattern 76 “Picatinny” is anachronistic and technically wrong in the setting. Geometry, accessory compatibility, and any later convergence remain unregistered.</p>"}
    ],
    related:[{href:"british-infantry-weapons.html",kicker:"National weapon system",label:"British Infantry Weapons"},{href:"rifle-no-9.html",kicker:"Principal rifle family",label:"Rifle No. 9"},{href:"l7-taden.html",kicker:"Optically improved support weapon",label:"L7 TADEN"},{href:"einheitsleiste-79.html",kicker:"German contemporary",label:"Einheitsleiste 79"},{href:"type-41-optical-mounting-rib.html",kicker:"Japanese contemporary",label:"Type 41 Optical Rib"},{href:"guida-comune-79.html",kicker:"Latin contemporary",label:"Guida Comune 79"}],
    facts:[["Country of origin","United Kingdom"],["Designation year","1976"],["Type","Optical mounting interface"],["System","British infantry weapons"],["Principal rifle generation","Rifle No. 9 Mk 4"],["Universal standard","No"],["Picatinny","No"],["Exact geometry","Open"]]
  }),

  "british-4-85-mm-trials": britishInfantryArticle({
    title:"British 4.85 mm Trials",
    eyebrow:"Experimental small-arms program · after 1978",
    infoboxKicker:"Unadopted caliber transition",
    infoboxTitle:"4.85×49 mm trials",
    lead:"The British 4.85 mm trials are the post-1978 experimental program examining 4.85×49 mm infantry weapons as a possible successor to the entrenched 7×43 mm Rifle No. 9 and TADEN system. The trials do not produce service adoption before 1985.",
    canon:"The post-1978 timing, 4.85×49 mm caliber, trial status, consideration as a successor to 7×43 mm, and non-adoption before 1985 because the existing system remains effective and logistically entrenched are fixed. Program title, weapons, designers, manufacturers, mechanism, ammunition performance, quantities, units, results, cancellation date, and post-1985 outcome remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:"<p>The program tests whether a smaller-caliber family offers enough practical advantage to justify replacing weapons, ammunition lines, stocks, training, and Commonwealth support arrangements built around 7×43 mm.</p>"},
      {id:"status",title:"Trial status",html:"<p>The effort begins after 1978 and remains experimental through 1985. No trial weapon becomes the principal service rifle, standard light machine gun, or general-purpose machine gun in that period.</p>"},
      {id:"incumbent",title:"The 7×43 mm incumbent",html:"<p>Rifle No. 9 Mk 4 is new in 1977, L7A4 only three years older, and the broader cartridge system remains effective. A challenger must overcome both technical performance and a large installed logistical base.</p>"},
      {id:"logistics",title:"Commonwealth logistics",html:"<p>Adoption would affect ammunition plants, depots, mobilization stocks, training, allied contracts, vehicle weapons, and overseas clients. The trial program measures those transition costs alongside weapon performance.</p>"},
      {id:"boundary",title:"No 1985 SA80 adoption",html:"<p>The historical SA80 sequence is not the setting's 1985 service history. Britain still equips ordinary forces with Rifle No. 9 Mk 4 and TADEN while 4.85 mm remains a trial caliber.</p>"},
      {id:"open",title:"Unresolved outcome",html:"<p>Trial weapon identities, performance, troop reports, procurement decisions after 1985, and the eventual successor to 7×43 mm remain open for later canon.</p>"}
    ],
    related:[{href:"british-infantry-weapons.html",kicker:"Incumbent weapon system",label:"British Infantry Weapons"},{href:"rifle-no-9.html",kicker:"Incumbent service rifle",label:"Rifle No. 9"},{href:"l4-taden.html",kicker:"Incumbent light machine gun",label:"L4 TADEN"},{href:"l7-taden.html",kicker:"Incumbent general-purpose gun",label:"L7 TADEN"},{href:"enfield-dovetail-pattern-76.html",kicker:"Contemporary optical interface",label:"Enfield Dovetail Pattern 76"},{href:"commonwealth.html",kicker:"Procurement system",label:"British Commonwealth"}],
    facts:[["Country","United Kingdom"],["Trials begin","After 1978"],["Cartridge","4.85×49 mm"],["Status in 1985","Experimental"],["Service adoption","No"],["Incumbent cartridge","7×43 mm"],["Principal incumbent rifle","Rifle No. 9 Mk 4"],["Later outcome","Open"]]
  })
});

const addBritishInfantryRelation = (slug, relation) => {
  const article = window.deepArticles[slug];
  if (article && Array.isArray(article.related) && !article.related.some(item => item.href === relation.href)) article.related.push(relation);
};

addBritishInfantryRelation("proxy-high-tide", {href:"british-infantry-weapons.html",kicker:"British weapons evaluated in India",label:"British Infantry Weapons"});
addBritishInfantryRelation("indian-arms-market", {href:"british-infantry-weapons.html",kicker:"British field-test system",label:"British Infantry Weapons"});
addBritishInfantryRelation("british-carriers-and-reconnaissance", {href:"l7-taden.html",kicker:"FV432 machine-gun armament",label:"L7 TADEN"});
addBritishInfantryRelation("fv432", {href:"l7-taden.html",kicker:"Registered machine-gun armament",label:"L7 TADEN"});
