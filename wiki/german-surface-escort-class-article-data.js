window.deepArticles = window.deepArticles || {};

const germanDestroyerClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Hull range</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Role</th></tr></thead><tbody><tr><td><a href='typ-1944-destroyer.html'>Typ 1944</a></td><td>Z-43–Z-60</td><td>18</td><td>1946–1951</td><td>3,900 t</td><td>0</td><td>Late-war gun and torpedo destroyer</td></tr><tr><td><a href='typ-52-destroyer.html'>Typ 52</a></td><td>Z-61–Z-76</td><td>16</td><td>1953–1961</td><td>4,800 t</td><td>0</td><td>First postwar missile-conversion hull</td></tr><tr><td><a href='typ-64-destroyer.html'>Typ 64</a></td><td>Z-77–Z-88</td><td>12</td><td>1965–1972</td><td>5,900 t</td><td>12</td><td>Fleet air defense and surface attack</td></tr><tr><td><a href='typ-76-destroyer.html'>Typ 76</a></td><td>Z-89–Z-96</td><td>8</td><td>1977–1984</td><td>7,100 t</td><td>8</td><td>Digital VLS fleet escort</td></tr></tbody></table></div>";

const germanFrigateClassTable = "<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Class</th><th>Hull range</th><th>Built</th><th>Introduction</th><th>Full load</th><th>Active, 1985</th><th>Role</th></tr></thead><tbody><tr><td><a href='typ-50-frigate.html'>Typ 50</a></td><td>F-01–F-18</td><td>18</td><td>1951–1958</td><td>2,500 t</td><td>0</td><td>Convoy and coastal escort</td></tr><tr><td><a href='typ-62-frigate.html'>Typ 62</a></td><td>F-19–F-38</td><td>20</td><td>1963–1971</td><td>3,300 t</td><td>18</td><td>ASW and general escort</td></tr><tr><td><a href='typ-74-frigate.html'>Typ 74</a></td><td>F-39–F-54</td><td>16</td><td>1975–1984</td><td>4,200 t</td><td>16</td><td>Quiet long-range towed-array escort</td></tr></tbody></table></div>";

const germanEscortClassArticle = config => navalArticle({
  title:config.title,
  category:"Warship class",
  eyebrow:`Kriegsmarine · ${config.type} · ${config.introduction.split('–')[0]}–`,
  landscape:fleetLandscape,
  lead:config.lead,
  canon:config.canon,
  sections:[
    {id:"development",title:"Development",html:`<p>${config.development}</p>`},
    {id:"registry",title:"Hull registry",html:`<p>${config.registry}</p>`},
    {id:"design",title:"Registered design",html:`<p>Each ${config.singular} displaced ${config.displacement} at full load and used ${config.propulsion}. The registered role was ${config.roleLower}. Dimensions, speed, weapons, sensors, aviation, crew, builders, and detailed machinery remain open.</p>`},
    {id:"operations",title:"Operations",html:`<p>${config.operations}</p>`},
    {id:"transition",title:config.transitionTitle,html:`<p>${config.transition}</p>`},
    {id:"status",title:"Status in 1985",html:`<p>${config.status}</p>`}
  ],
  related:config.related,
  facts:[["Type",config.type],["Hull range",config.hulls],["Built",String(config.built)],["Introduced",config.introduction],["Full load",config.displacement],["Propulsion",config.propulsion],["Active, 1985",String(config.active)],["Registered role",config.role]]
});

Object.assign(window.deepArticles, {
  "german-surface-escorts": navalArticle({
    title:"German postwar surface escorts",
    category:"Warship development",
    landscape:fleetLandscape,
    lead:"German postwar surface escorts were the numbered destroyers, frigates, and fast missile craft that protected submarine access, carriers, cruisers, replenishment groups, bases, and coastal waters. Development moved from late-war gun ships and early missile conversions to digital vertical-launch fleet defense, long-range towed-array anti-submarine warfare, and coastal missile ambush.",
    canon:"The eight registered classes, build totals, introduction bands, full-load displacements, propulsion categories, hull-number ranges, 1985 active totals, roles, and Z, F, and S designation conventions are established. Exact weapons, sensors, dimensions, speeds, aviation, crews, yards, losses, exports, deployments, and most refit histories remain open.",
    sections:[
      {id:"destroyers",title:"Destroyers",html:germanDestroyerClassTable},
      {id:"frigates",title:"Frigates",html:germanFrigateClassTable},
      {id:"schnellboot",title:"Fast combatants",html:"<p>Twenty-eight <a href='typ-73-schnellboot.html'>Typ 73 Schnellboote</a>, S-01 through S-28, entered service between 1973 and 1984. All remained active for coastal missile ambush, surveillance, and base defense.</p>"},
      {id:"designations",title:"Designation practice",html:"<p>Destroyers retained Z numbers, frigates F numbers, and fast combatants S numbers. Germany normally reserved personal names for carriers and cruiser-sized surface combatants.</p>"},
      {id:"air-defense",title:"Air and surface defense",html:"<p>Typ 64 and Typ 76 destroyers protected surface groups against aircraft, missiles, and hostile ships. The digital vertical-launch generation worked with larger command ships, aircraft, satellites, shore stations, and electronic warfare.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>Typ 62 and Typ 74 frigates escorted convoys and fleet auxiliaries and hunted submarines. Towed arrays, quiet propulsion, aircraft, fixed sensors, and route intelligence formed a combined search system.</p>"},
      {id:"submarine-system",title:"Submarine access and support",html:"<p>Escorts protected U-boat exits, replenishment groups, naval bases, and sensor infrastructure. Surface escort work remained necessary even though submarines were the Kriegsmarine's principal striking arm.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Twenty destroyers, thirty-four frigates, and twenty-eight Typ 73 craft remained active. The older Typ 1944, Typ 52, and Typ 50 generations had left front-line service.</p>"}
    ],
    related:[{href:"typ-64-destroyer.html",kicker:"Fleet air defense",label:"Typ 64 Destroyer"},{href:"typ-76-destroyer.html",kicker:"Digital VLS escort",label:"Typ 76 Destroyer"},{href:"typ-62-frigate.html",kicker:"General ASW escort",label:"Typ 62 Frigate"},{href:"typ-74-frigate.html",kicker:"Towed-array escort",label:"Typ 74 Frigate"},{href:"typ-73-schnellboot.html",kicker:"Coastal combatant",label:"Typ 73 Schnellboot"}],
    facts:[["Active destroyers, 1985","20"],["Active frigates, 1985","34"],["Active Typ 73 craft","28"],["Destroyer prefix","Z"],["Frigate prefix","F"],["Fast-combatant prefix","S"]]
  }),

  "typ-1944-destroyer": germanEscortClassArticle({
    title:"Typ 1944 destroyer",type:"Destroyer",singular:"ship",hulls:"Z-43–Z-60",built:18,introduction:"1946–1951",displacement:"3,900 t",propulsion:"steam turbines",active:0,role:"Late-war gun and torpedo destroyer",roleLower:"late-war gun and torpedo destroyer",
    lead:"The Typ 1944 was an eighteen-ship German destroyer class, Z-43 through Z-60, introduced between 1946 and 1951. The 3,900-tonne steam-turbine ships formed the last late-war gun and torpedo destroyer generation. All had decommissioned by 1972.",
    canon:"The eighteen-hull Z-43–Z-60 registry, individual commissioning and decommissioning years, 3,900-tonne full-load displacement, steam propulsion, late-war gun and torpedo role, and zero active 1985 total are established. The earliest six hulls use registered high-pressure geared steam machinery. Dimensions, speed, weapons, sensors, crews, builders, wartime service, refits, and final dispositions remain open.",
    development:"Typ 1944 carried the destroyer program through the last years of the extended war and into the first four post-armistice years. It retained guns and torpedoes as its principal registered weapons category.",
    registry:"Z-43 through Z-60 commissioned between 1946 and 1951. Decommissioning ran from 1960 through 1972. The ships carried administrative Z numbers rather than personal names.",
    operations:"The class screened surface forces, protected routes and bases, and performed patrol and training work during the transition from gun to missile fleets. Individual operations remain unsettled.",
    transitionTitle:"Replacement",transition:"Typ 52 became the first postwar missile-conversion destroyer generation. Typ 64 later provided purpose-built fleet air defense and surface attack.",
    status:"No Typ 1944 ship remained active. Z-60 was the last registered hull to decommission, in 1972.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"typ-52-destroyer.html",kicker:"Successor",label:"Typ 52 Destroyer"},{href:"kriegsmarine-postwar.html",kicker:"1947 fleet context",label:"Postwar Kriegsmarine"}]
  }),

  "typ-52-destroyer": germanEscortClassArticle({
    title:"Typ 52 destroyer",type:"Destroyer",singular:"ship",hulls:"Z-61–Z-76",built:16,introduction:"1953–1961",displacement:"4,800 t",propulsion:"steam turbines",active:0,role:"First postwar missile-conversion hull",roleLower:"first postwar missile-conversion hull",
    lead:"The Typ 52 was a sixteen-ship German destroyer class, Z-61 through Z-76, introduced between 1953 and 1961. The 4,800-tonne steam-turbine ships formed Germany's first postwar missile-conversion destroyer generation. The last hull decommissioned in 1984.",
    canon:"The sixteen-hull Z-61–Z-76 registry, individual commissioning and decommissioning years, 4,800-tonne full-load displacement, steam propulsion, missile-conversion role, and zero active 1985 total are established. Original hull configuration, conversion dates, missile systems, dimensions, speed, other weapons, sensors, crews, builders, deployments, refits, and final dispositions remain open.",
    development:"Typ 52 carried the destroyer force from late-war gun and torpedo practice into guided weapons. Its class designation records the design generation; individual missile-conversion arrangements remain unsettled.",
    registry:"Z-61 through Z-76 commissioned between 1953 and 1961. Decommissioning proceeded from 1970 through 1984, with Z-76 leaving service last.",
    operations:"The ships defended fleet groups and routes while the Kriegsmarine developed missile guidance, radar, communications, and new command procedures. Specific formations and deployments remain open.",
    transitionTitle:"Replacement",transition:"Typ 64 introduced a purpose-built fleet-air-defense and surface-attack role. Typ 76 later added digital command and vertical launch.",
    status:"No Typ 52 ship remained active on the 1985 reference date. Z-76 had decommissioned during 1984.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"typ-1944-destroyer.html",kicker:"Predecessor",label:"Typ 1944 Destroyer"},{href:"typ-64-destroyer.html",kicker:"Successor",label:"Typ 64 Destroyer"}]
  }),

  "typ-64-destroyer": germanEscortClassArticle({
    title:"Typ 64 destroyer",type:"Destroyer",singular:"ship",hulls:"Z-77–Z-88",built:12,introduction:"1965–1972",displacement:"5,900 t",propulsion:"steam turbines",active:12,role:"Fleet air defense and surface attack",roleLower:"fleet air defense and surface attack",
    lead:"The Typ 64 was a twelve-ship German destroyer class, Z-77 through Z-88, introduced between 1965 and 1972. All twelve 5,900-tonne steam-turbine ships remained active in 1985 for fleet air defense and surface attack.",
    canon:"The twelve-hull Z-77–Z-88 registry, individual commissioning years, 5,900-tonne full-load displacement, steam propulsion, fleet-air-defense and surface-attack roles, and twelve active ships are established. Dimensions, speed, weapons, sensors, aviation, crews, builders, deployments, and refits remain open.",
    development:"Typ 64 followed the missile-converted Typ 52 and supplied the first registered German destroyer generation built around fleet air defense and surface attack from introduction.",
    registry:"Z-77 through Z-88 commissioned between 1965 and 1972. The class used Z numbers exclusively and all twelve hulls remained in the active register.",
    operations:"Typ 64 ships screened carriers, cruisers, large guided-weapon ships, replenishment groups, and U-boat access routes against aircraft and surface attack.",
    transitionTitle:"Typ 76 development",transition:"Typ 76 added gas turbines, digital combat systems, and vertical launch in a larger hull. Typ 64 remained the more numerous active destroyer generation in 1985.",
    status:"All twelve ships remained active. Individual deployments, overhaul schedules, and readiness are not fixed.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"typ-52-destroyer.html",kicker:"Predecessor",label:"Typ 52 Destroyer"},{href:"typ-76-destroyer.html",kicker:"Successor",label:"Typ 76 Destroyer"},{href:"admiral-scheer-class.html",kicker:"Command layer",label:"Admiral Scheer Class"}]
  }),

  "typ-76-destroyer": germanEscortClassArticle({
    title:"Typ 76 destroyer",type:"Destroyer",singular:"ship",hulls:"Z-89–Z-96",built:8,introduction:"1977–1984",displacement:"7,100 t",propulsion:"gas turbines",active:8,role:"Digital VLS fleet escort",roleLower:"digital vertical-launch fleet escort",
    lead:"The Typ 76 was an eight-ship German destroyer class, Z-89 through Z-96, introduced between 1977 and 1984. All eight 7,100-tonne gas-turbine ships remained active in 1985 as digital vertical-launch fleet escorts.",
    canon:"The eight-hull Z-89–Z-96 registry, annual individual commissioning sequence, 7,100-tonne full-load displacement, gas-turbine propulsion, digital VLS fleet-escort role, and eight active ships are established. Dimensions, speed, vertical-cell count, missile allocation, other weapons, sensors, aviation, crews, builders, deployments, and refits remain open.",
    development:"Typ 76 followed Typ 64 and incorporated digital combat direction and vertical launch into Germany's standard high-end destroyer escort. One hull commissioned in each year from 1977 through 1984.",
    registry:"Z-89 commissioned in 1977 and Z-96 in 1984, with the intermediate hulls entering service annually in sequence. All used administrative Z numbers.",
    operations:"The class defended surface groups, coordinated missile engagements, and worked with Wotan-class command ships, Admiral Scheer cruisers, aircraft, satellites, shore stations, and other escorts.",
    transitionTitle:"Digital fleet integration",transition:"Vertical launch allowed a mixed guided-weapon magazine, while digital command connected the ship to a wider fleet picture. Exact cell count and missile types remain open.",
    status:"All eight ships remained active. Several were newly commissioned; work-up, deployment, and readiness are unsettled.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"typ-64-destroyer.html",kicker:"Predecessor",label:"Typ 64 Destroyer"},{href:"wotan-class.html",kicker:"Command ship",label:"Wotan Class"},{href:"german-computing.html",kicker:"Digital systems context",label:"German Computing"}]
  }),

  "typ-50-frigate": germanEscortClassArticle({
    title:"Typ 50 frigate",type:"Frigate",singular:"ship",hulls:"F-01–F-18",built:18,introduction:"1951–1958",displacement:"2,500 t",propulsion:"diesel engines",active:0,role:"Convoy and coastal escort",roleLower:"convoy and coastal escort",
    lead:"The Typ 50 was an eighteen-ship German frigate class, F-01 through F-18, introduced between 1951 and 1958. The 2,500-tonne diesel ships served as convoy and coastal escorts. All had decommissioned by 1980.",
    canon:"The eighteen-hull F-01–F-18 registry, individual commissioning and decommissioning years, 2,500-tonne full-load displacement, diesel propulsion, convoy and coastal-escort role, and zero active 1985 total are established. Dimensions, speed, weapons, sensors, crews, builders, deployments, refits, and final dispositions remain open.",
    development:"Typ 50 was the first registered postwar German frigate generation. It supplied economical convoy and coastal coverage while destroyers protected higher-threat fleet formations.",
    registry:"F-01 through F-18 commissioned between 1951 and 1958. Decommissioning ran from 1967 through 1980. The ships used F numbers rather than personal names.",
    operations:"The class escorted shipping, patrolled coastal approaches, protected bases, and supported training and local anti-submarine work. Individual service histories remain open.",
    transitionTitle:"Replacement",transition:"Typ 62 expanded the frigate role into a larger anti-submarine and general escort. Typ 74 later added quiet long-range towed-array operations.",
    status:"No Typ 50 frigate remained active. F-18 was the last registered hull to decommission, in 1980.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"typ-62-frigate.html",kicker:"Successor",label:"Typ 62 Frigate"},{href:"cape-route.html",kicker:"Opposing route system",label:"Cape Route"}]
  }),

  "typ-62-frigate": germanEscortClassArticle({
    title:"Typ 62 frigate",type:"Frigate",singular:"ship",hulls:"F-19–F-38",built:20,introduction:"1963–1971",displacement:"3,300 t",propulsion:"diesel engines",active:18,role:"ASW and general escort",roleLower:"anti-submarine and general escort",
    lead:"The Typ 62 was a twenty-ship German frigate class, F-19 through F-38, introduced between 1963 and 1971. Eighteen 3,300-tonne diesel ships remained active in 1985 for anti-submarine warfare and general escort.",
    canon:"The twenty-hull F-19–F-38 registry, individual commissioning years, 3,300-tonne full-load displacement, diesel propulsion, ASW and general-escort roles, eighteen active ships, and 1982–1983 decommissioning of F-19 and F-20 are established. Dimensions, speed, weapons, sensors, aviation, crews, builders, deployments, and refits remain open.",
    development:"Typ 62 followed the smaller Typ 50 and gave the frigate force an explicit anti-submarine and general-escort role during the expansion of Germany's oceanic submarine system.",
    registry:"F-19 through F-38 commissioned between 1963 and 1971. F-19 decommissioned in 1982 and F-20 in 1983; F-21 through F-38 remained active.",
    operations:"The ships escorted convoys and replenishment groups, screened surface formations, patrolled U-boat approaches, and hunted hostile submarines with support from aircraft and fixed sensors.",
    transitionTitle:"Typ 74 development",transition:"Typ 74 added quieter machinery and a long-range towed-array role. Typ 62 remained the numerical center of the active frigate force in 1985.",
    status:"Eighteen ships, F-21 through F-38, remained active. Individual deployment, modernization, and readiness are open.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"typ-50-frigate.html",kicker:"Predecessor",label:"Typ 50 Frigate"},{href:"typ-74-frigate.html",kicker:"Successor",label:"Typ 74 Frigate"},{href:"german-submarine-force.html",kicker:"Protected arm",label:"German Submarine Force"}]
  }),

  "typ-74-frigate": germanEscortClassArticle({
    title:"Typ 74 frigate",type:"Frigate",singular:"ship",hulls:"F-39–F-54",built:16,introduction:"1975–1984",displacement:"4,200 t",propulsion:"diesel or gas-turbine machinery",active:16,role:"Quiet long-range towed-array escort",roleLower:"quiet long-range towed-array escort",
    lead:"The Typ 74 was a sixteen-ship German frigate class, F-39 through F-54, introduced between 1975 and 1984. All sixteen 4,200-tonne ships remained active in 1985 as quiet long-range towed-array escorts.",
    canon:"The sixteen-hull F-39–F-54 registry, individual commissioning years, 4,200-tonne full-load displacement, diesel or gas-turbine propulsion category, quiet long-range towed-array role, and sixteen active ships are established. Exact machinery by hull, dimensions, speed, weapons, sonar models, aviation, crews, builders, deployments, and refits remain open.",
    development:"Typ 74 followed the Typ 62 general escort and emphasized quiet operation, long endurance, and towed-array submarine search. Construction continued through 1984.",
    registry:"F-39 through F-54 commissioned between 1975 and 1984. All sixteen remained active. The registry leaves the precise diesel or gas-turbine arrangement of individual hulls open.",
    operations:"The class searched ocean routes and submarine approaches, screened auxiliaries and surface groups, and worked with patrol aircraft, helicopters, fixed sensors, and other escorts.",
    transitionTitle:"Towed-array operations",transition:"The towed sensor placed part of the sonar system away from hull and machinery noise. Effective use depended upon speed, sea state, array handling, processing, and cooperation with the wider ASW system.",
    status:"All sixteen ships remained active, including recently commissioned F-54. Individual work-up, deployment, and readiness are open.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"typ-62-frigate.html",kicker:"Predecessor",label:"Typ 62 Frigate"},{href:"german-submarine-force.html",kicker:"Undersea system",label:"German Submarine Force"},{href:"british-frigate-force.html",kicker:"British comparison",label:"British Frigate Force"}]
  }),

  "typ-73-schnellboot": germanEscortClassArticle({
    title:"Typ 73 Schnellboot",type:"Fast missile combatant",singular:"craft",hulls:"S-01–S-28",built:28,introduction:"1973–1984",displacement:"520 t",propulsion:"diesel engines",active:28,role:"Coastal missile ambush and surveillance",roleLower:"coastal missile ambush and surveillance",
    lead:"The Typ 73 was a twenty-eight-craft German Schnellboot class, S-01 through S-28, introduced between 1973 and 1984. All twenty-eight 520-tonne diesel missile combatants remained active in 1985 for coastal ambush, surveillance, and base defense.",
    canon:"The twenty-eight-hull S-01–S-28 registry, individual commissioning years, 520-tonne full-load displacement, diesel propulsion, coastal missile-ambush and surveillance roles, and twenty-eight active craft are established. Dimensions, speed, missile type and count, other weapons, sensors, crews, builders, bases, deployments, and refits remain open.",
    development:"Typ 73 supplied a modern missile-armed continuation of Germany's Schnellboot tradition. The class used coastal geography, shore sensors, speed, dispersion, and short resupply routes rather than ocean endurance.",
    registry:"S-01 through S-28 commissioned between 1973 and 1984. All carried S numbers and remained active at the 1985 reference date.",
    operations:"The craft watched coastal approaches, defended bases, reported contacts, and prepared short-range missile ambushes. They could disperse among smaller facilities that did not support large surface combatants.",
    transitionTitle:"Coastal system",transition:"Shore radar, communications, reconnaissance aircraft, minefields, patrol craft, and coastal defenses supplied the tactical setting for the class. The boats were one element of a local system rather than miniature destroyers.",
    status:"All twenty-eight craft remained active. Individual base assignments, readiness, and weapon fits are not fixed.",
    related:[{href:"german-surface-escorts.html",kicker:"Force history",label:"German Surface Escorts"},{href:"kriegsmarine-postwar.html",kicker:"Parent service",label:"Postwar Kriegsmarine"},{href:"norway.html",kicker:"Northern operating region",label:"Norway"}]
  })
});
