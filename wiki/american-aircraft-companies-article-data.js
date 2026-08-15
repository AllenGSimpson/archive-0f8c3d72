window.deepArticles = window.deepArticles || {};

const americanAircraftCompanySources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — American aircraft forces, designations, and reusable-aerospace research"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American neutrality, military modernization, and aerospace institutions"},
  {href:"../transcript.md",label:"Master Transcript — American aircraft development and divided air services"}
];

const americanAircraftCompanyRelated = [
  {href:"american-early-jet-generation.html",kicker:"First postwar jet register",label:"American Early-Jet Generation"},
  {href:"american-army-air-corps-force.html",kicker:"Tactical customer",label:"United States Army Air Corps Force"},
  {href:"american-naval-air-corps-force.html",kicker:"Naval customer",label:"American Naval Air Corps Force"},
  {href:"american-aerospace-force-atmospheric-fleet.html",kicker:"Strategic customer",label:"Aerospace Force Atmospheric Fleet"}
];

const americanAircraftListSection = rows => ({
  id:"aircraft",title:"List of Aircraft",
  html:`<p>The internal designation records the manufacturer's model, proposal, or development code where established. The official designation is the service or registered article title.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p" ? "<sup class='canon-note' data-provenance='p'>[p]</sup>" : provenance === "a" ? "<sup class='canon-note' data-provenance='a'>[a]</sup>" : "<sup class='canon-note' data-provenance='e'>[e]</sup>";
    return `<tr><td>${internal}</td><td>${href ? `<a href='${href}'>${official}</a>` : official}${note}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

const americanAircraftCompany = c => ({
  title:c.title,category:"American aircraft manufacturers",eyebrow:c.eyebrow,infoboxKicker:"Aircraft design and manufacturing company",infoboxTitle:c.infoboxTitle || c.title,
  lead:c.lead,canon:c.canon,
  sections:[
    {id:"formation",title:"Formation and organization",html:c.formation},
    {id:"war",title:"Wartime aircraft",html:c.war},
    {id:"postwar",title:"Postwar programs",html:c.postwar},
    americanAircraftListSection(c.aircraft),
    {id:"position",title:"Position in 1985",html:c.position}
  ],
  related:[...americanAircraftCompanyRelated,...(c.related || [])],
  facts:c.facts,
  sources:[...americanAircraftCompanySources,...(c.primarySources || [])],
  categories:[c.title,"American aerospace industry","Aircraft manufacturers",...(c.extraCategories || [])]
});

Object.assign(window.deepArticles, {
  "lockheed": americanAircraftCompany({
    title:"Lockheed",infoboxTitle:"Lockheed Aircraft Corporation",eyebrow:"California · fighters, interceptors, patrol aircraft, and high-speed reconnaissance · 1926–1985",
    lead:"Lockheed is the California aircraft manufacturer responsible for the Shooting Star, Starfire, Starfighter, Blackbird, and Orion families. Its design offices span tactical jets, continental interception, high-altitude training, Mach 3 reconnaissance, and long-range maritime patrol within the divided American air-service system.",
    canon:"Lockheed's pre-divergence corporate history and P-38 are historical anchors. The P/F-80, F-94C and D, F-104A, NF-104A, R-11A and F-12A Blackbird, and P-3C Orion are fixed in-setting. Exact ownership, wartime output, factories, subsidiaries, production totals, Skunk Works organization, civil-aircraft catalog, and 1985 corporate form remain open.",
    formation:"<p>Allan and Malcolm Loughead established the company lineage in California. The reorganized Lockheed Aircraft Company formed in 1926 and developed a reputation for fast streamlined civil and military aircraft.</p>",
    war:"<p>The P-38 Lightning supplies a twin-engine fighter and reconnaissance foundation. The XP-80 program begins during the war, but American neutrality prevents wartime mass deployment of the jet.</p>",
    postwar:"<p>Shooting Star and Starfire support the first American jet generation. Starfighter and its NF-104A trainer extend high-altitude work, while Blackbird aircraft establish the Mach 3 reconnaissance and interception branch. Orion supplies maritime patrol to the Naval Air Corps.</p>",
    aircraft:[
      ["Model 22","Lockheed P-38 Lightning",null,"p"],["L-140 / XP-80","P-80A-5 Shooting Star","p-80a-5-shooting-star.html","a"],["L-140","F-80C Shooting Star","f-80c-shooting-star.html","a"],
      ["L-188 / YF-94C","F-94C Starfire","f-94c-starfire.html","a"],["F-94D project","F-94D Starfire","f-94d-starfire.html","a"],["L-246","F-104A Starfighter","f-104a-starfighter.html","a"],["NF-104A conversion","NF-104A Starfighter","nf-104a-starfighter.html","a"],
      ["A-12 family","R-11A Blackbird","r-11a-blackbird.html","a"],["YF-12 family","F-12A Blackbird","f-12a-blackbird.html","a"],["Model 185","P-3C Orion","p-3c-orion.html","a"]
    ],
    position:"<p>By 1985 Lockheed is one of the United States' broadest military-aircraft design houses, with separate tactical, interceptor, reconnaissance, aerospace-training, and maritime-support branches.</p>",
    facts:[["Founded","1926 in reorganized form"],["Historical region","California"],["Founding lineage","Allan and Malcolm Loughead"],["First registered jet","P-80A-5 · 1952"],["Mach 3 family","Blackbird"],["Naval patrol family","Orion"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Lockheed_Corporation",label:"Wikipedia — Lockheed corporate history"}]
  }),

  "republic-aviation": americanAircraftCompany({
    title:"Republic Aviation",eyebrow:"Farmingdale, New York · pursuit fighters and tactical strike aircraft · 1931–1985",
    lead:"Republic Aviation is the Long Island aircraft manufacturer descended from Seversky Aircraft. The P-47 Thunderbolt and F-84 Thunderjet and Thunderstreak families make it a principal supplier of rugged Army fighters, escorts, and tactical-strike aircraft.",
    canon:"Alexander de Seversky's company, the Republic name, Farmingdale works, P-47, and the F-84E and F-84F line are retained. Republic's historical F-105 studies inform the setting, but the manufacturer and exact ancestry of A-8A Thunderchief II remain explicitly open and are not assigned here. Exact postwar ownership, mergers, products, production totals, and 1985 legal form remain open.",
    formation:"<p>Alexander de Seversky founded the company lineage in 1931. Reorganization produced Republic Aviation and retained the Farmingdale, Long Island design and manufacturing center.</p>",
    war:"<p>The P-47 Thunderbolt provides a heavy single-engine fighter and fighter-bomber design school. Its structure, turbo-supercharging, range development, and battlefield durability remain part of Republic's institutional reputation.</p>",
    postwar:"<p>The straight-wing F-84E Thunderjet gives the Army escort and fighter-bomber capacity. The swept-wing F-84F Thunderstreak develops the family into a faster tactical-strike aircraft.</p>",
    aircraft:[
      ["AP-10 / XP-47B","Republic P-47 Thunderbolt",null,"p"],["AP-23 / XP-84","F-84E Thunderjet","f-84e-thunderjet.html","a"],["YF-96A / swept-wing F-84","F-84F Thunderstreak","f-84f-thunderstreak.html","a"]
    ],
    position:"<p>By 1985 Republic's precise independent status is open. Its recognized aircraft lineage remains distinct, while Fairchild Republic separately manufactures the A-10A and A-8A's corporate ancestry is unresolved.</p>",
    related:[{href:"fairchild-republic.html",kicker:"Later close-support organization",label:"Fairchild Republic"}],
    facts:[["Corporate predecessor","Seversky Aircraft"],["Principal center","Farmingdale, New York"],["Wartime family","P-47 Thunderbolt"],["Registered jet family","F-84"],["A-8A manufacturer","Open"],["1985 legal form","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Republic_Aviation",label:"Wikipedia — Republic Aviation history"}]
  }),

  "north-american-aviation": americanAircraftCompany({
    title:"North American Aviation",eyebrow:"California and Ohio · fighters, bombers, rocketplanes, and Mach 3 aircraft · 1928–1985",
    lead:"North American Aviation is the American aircraft manufacturer associated with the P-51 Mustang, Fury and Sabre fighters, X-15 rocketplane, F-108 Rapier interceptor, and B-70 Valkyrie bomber. It links Army, naval, strategic, and reusable-aerospace programs.",
    canon:"North American's pre-divergence corporate history, P-51, and wartime design organization are historical anchors. FJ-1, F-86A and F, X-15A, F-108A, and B-70A are fixed in-setting. Exact ownership, factories, production totals, mergers, civil products, spacecraft work, and 1985 corporate form remain open.",
    formation:"<p>North American began as an aviation holding company in 1928 and became a direct manufacturer during the 1930s. Southern California plants and later Ohio research facilities supported a broad engineering organization.</p>",
    war:"<p>The P-51 Mustang supplies the principal high-performance piston-fighter inheritance. Trainers, bombers, and naval studies broaden the company beyond one airframe family.</p>",
    postwar:"<p>Fury introduces the naval jet branch and Sabre the Army's swept-wing fighter line. X-15A develops piloted hypersonic research, while Rapier and Valkyrie form the company's sustained Mach 3 aircraft school.</p>",
    aircraft:[
      ["NA-73X","North American P-51 Mustang",null,"p"],["NA-134","FJ-1 Fury","fj-1-fury.html","a"],["NA-140","F-86A Sabre","f-86a-sabre.html","a"],["NA-172","F-86F Sabre","f-86f-sabre.html","a"],
      ["NA-240","X-15A","x-15a.html","a"],["NA-257","F-108A Rapier","f-108a-rapier.html","a"],["NA-278","B-70A Valkyrie","b-70a-valkyrie.html","a"]
    ],
    position:"<p>By 1985 North American remains a major high-speed-aircraft and aerospace-research institution. Its exact corporate relationship to broader electronics, propulsion, and spacecraft combines remains open.</p>",
    facts:[["Founded","1928"],["Principal historical regions","California · Ohio"],["Wartime fighter","P-51 Mustang"],["Army jet family","F-86 Sabre"],["Research aircraft","X-15A"],["Mach 3 programs","F-108A · B-70A"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/North_American_Aviation",label:"Wikipedia — North American Aviation history"}],extraCategories:["Hypersonic aircraft"]
  }),

  "grumman": americanAircraftCompany({
    title:"Grumman",infoboxTitle:"Grumman Aircraft Engineering Corporation",eyebrow:"Long Island · naval fighters, attack aircraft, and airborne warning · 1929–1985",
    lead:"Grumman is the Long Island naval-aircraft manufacturer whose Wildcat and Hellcat fighters lead into the Intruder, Tomcat, and Hawkeye families. The company specializes in carrier structure, folding and launch systems, all-weather attack, fleet defense, and airborne early warning.",
    canon:"Grumman's 1929 foundation, Long Island organization, and F4F are historical anchors. The WWII F6F is incorporated under the user's WWII-design rule. A-6A Army adoption, A-6E Naval Air Corps service, F-14A, and E-2C are fixed in-setting. Exact ownership, factories, production, civil products, spacecraft work, and 1985 structure remain open.",
    formation:"<p>Leroy Grumman and partners founded the company in 1929. Long Island factories developed naval aircraft around robust structures, carrier handling, folding mechanisms, corrosion control, and maintainability.</p>",
    war:"<p>F4F Wildcat and F6F Hellcat fighters establish the company's carrier-fighter school. American neutrality changes procurement scale and combat history without making the practical naval requirements unreasonable.</p>",
    postwar:"<p>The A-6 family serves both the Army and Naval Air Corps in different attack roles. F-14A supplies fleet air defense and air superiority, while E-2C provides carrier-based airborne warning and command.</p>",
    aircraft:[
      ["G-36","Grumman F4F Wildcat",null,"p"],["G-50","Grumman F6F Hellcat",null,"e"],["G-128 / A2F","A-6A Intruder","a-6a-intruder.html","a"],["G-128","A-6E Intruder","a-6e-intruder.html","a"],
      ["Model 303","F-14A Tomcat","f-14a-tomcat.html","a"],["G-123","E-2C Hawkeye","e-2c-hawkeye.html","a"]
    ],
    position:"<p>By 1985 Grumman is the principal American naval combat-aircraft and airborne-warning prime, while its Intruder family also supplies the Army's all-weather theater-attack requirement.</p>",
    facts:[["Founded","1929"],["Founder","Leroy Grumman and partners"],["Principal region","Long Island, New York"],["Wartime fighters","F4F · F6F"],["Attack family","A-6 Intruder"],["Fleet-defense fighter","F-14A Tomcat"],["Airborne warning","E-2C Hawkeye"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Grumman",label:"Wikipedia — Grumman company history"}],extraCategories:["Naval aviation"]
  }),

  "general-dynamics-aerospace": americanAircraftCompany({
    title:"General Dynamics aerospace",infoboxTitle:"General Dynamics · aerospace divisions",eyebrow:"American industrial combine · compact fighters and aerospace systems · 1950s–1985",
    lead:"General Dynamics' aerospace organization is the American design and manufacturing group responsible for the F-16A Falcon in Army Air Corps service. It combines inherited aircraft divisions with systems engineering, electronics, propulsion integration, and large-scale defense contracting.",
    canon:"General Dynamics manufacture of the F-16A Falcon and the 1978 Army introduction are fixed. The historical postwar formation of General Dynamics and its relationship to Convair are compatible background but not automatically imported in every legal detail. Exact divisional boundaries, ownership, factories, other aircraft programs, production, and 1985 structure remain open.",
    formation:"<p>The company emerges after the divergence as a large defense and aerospace combine built around established American engineering organizations. The exact sequence of mergers and divisional transfers remains open.</p>",
    war:"<p>The corporation itself is postwar. Its inherited plants and engineering traditions include wartime airframe, marine, electronics, and production organizations whose precise consolidation is not fixed.</p>",
    postwar:"<p>General Dynamics develops the F-16 from the Lightweight Fighter program. The compact single-engine aircraft enters Army Air Corps service in 1978 for battlefield air superiority.</p>",
    aircraft:[["Model 401","F-16A Falcon","f-16a-falcon.html","a"]],
    position:"<p>By 1985 General Dynamics is a major American systems prime. The F-16A gives its aerospace division a high-volume tactical-fighter identity distinct from Convair's named B-58 lineage.</p>",
    related:[{href:"convair.html",kicker:"Inherited aircraft division",label:"Convair"}],
    facts:[["Type","Defense and aerospace combine"],["Established aircraft","F-16A Falcon"],["Army introduction","1978"],["Principal role","Compact battlefield air superiority"],["Relationship to Convair","Broad inheritance retained; exact structure open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/General_Dynamics",label:"Wikipedia — General Dynamics corporate history"}]
  }),

  "fairchild-republic": americanAircraftCompany({
    title:"Fairchild Republic",eyebrow:"American close-support aircraft organization · 1960s–1985",
    lead:"Fairchild Republic is the American aircraft organization responsible for the A-10A Thunderbolt II, the Army Air Corps' armored close-support aircraft. Its design work joins Fairchild production resources to the Republic fighter and tactical-aircraft inheritance.",
    canon:"Fairchild Republic manufacture of the A-10A, its armored close-support role, 1977 introduction, heavy cannon, and Army service are fixed. The exact post-divergence transaction joining Fairchild and Republic, ownership, plants, staffing, other products, production totals, and 1985 organization remain open.",
    formation:"<p>Fairchild Republic joins Fairchild's aircraft-manufacturing organization to the Republic name and engineering inheritance. The setting has not fixed the legal date or terms of the combination.</p>",
    war:"<p>Fairchild and Republic enter the postwar period with separate transport, trainer, fighter, and production experience. Their exact wartime workshare remains outside this article's fixed record.</p>",
    postwar:"<p>The A-10 program separates close support from fast interdiction. Armor, loiter, target identification, damage tolerance, a heavy 30 mm cannon, and direct coordination with ground commanders define the aircraft.</p>",
    aircraft:[["YA-10A","A-10A Thunderbolt II","a-10a-thunderbolt-ii.html","a"]],
    position:"<p>By 1985 Fairchild Republic is identified principally with armored close support. Its relationship to the separately remembered Republic Aviation company and other Fairchild divisions remains open.</p>",
    related:[{href:"republic-aviation.html",kicker:"Named industrial inheritance",label:"Republic Aviation"}],
    facts:[["Established aircraft","A-10A Thunderbolt II"],["Introduction","1977"],["Principal service","United States Army Air Corps"],["Specialization","Armored close support"],["Corporate formation","Exact terms open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Fairchild_Republic_A-10_Thunderbolt_II",label:"Wikipedia — Fairchild Republic A-10 development"}]
  }),

  "mcdonnell-aircraft": americanAircraftCompany({
    title:"McDonnell Aircraft",eyebrow:"St. Louis · naval fighters and high-performance aircraft · 1939–1985",
    lead:"McDonnell Aircraft is the St. Louis manufacturer whose experimental wartime work leads into the Phantom and Banshee carrier-jet families. The F2H-2 Banshee gives the Naval Air Corps a stable long-range fighter and escort in 1952.",
    canon:"James Smith McDonnell's 1939 company foundation and St. Louis organization are historical anchors. The WWII XP-67 and FH Phantom are incorporated as real designs; F2H-2 Banshee service is fixed in-setting. Exact wartime contracts, production totals, mergers, missile and spacecraft work, later aircraft, and 1985 corporate form remain open.",
    formation:"<p>James Smith McDonnell founded the company near St. Louis in 1939 after earlier engineering work with other American manufacturers. The company entered military competitions without the production scale of older airframe firms.</p>",
    war:"<p>The XP-67 Bat remains an experimental twin-engine fighter. The FH Phantom provides the practical bridge into carrier jets near the end of the war.</p>",
    postwar:"<p>The F2H Banshee enlarges the Phantom concept with greater range, altitude, weapons capacity, and service practicality. The registered F2H-2 enters Naval Air Corps service in 1952.</p>",
    aircraft:[["Model 1","McDonnell XP-67 Bat",null,"e"],["Model 36","McDonnell FH Phantom",null,"e"],["XF2H-1","F2H-2 Banshee","f2h-2-banshee.html","a"]],
    position:"<p>By 1985 McDonnell's exact corporate independence is open. Its Banshee lineage remains part of the Naval Air Corps' early carrier-jet history.</p>",
    facts:[["Founded","1939"],["Founder","James Smith McDonnell"],["Principal center","St. Louis, Missouri"],["Wartime projects","XP-67 · FH Phantom"],["Registered aircraft","F2H-2 Banshee · 1952"],["1985 form","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/McDonnell_Aircraft_Corporation",label:"Wikipedia — McDonnell Aircraft history"}],extraCategories:["Naval aviation"]
  }),

  "douglas-aircraft": americanAircraftCompany({
    title:"Douglas Aircraft",eyebrow:"Southern California · transports, attack aircraft, and naval jets · 1921–1985",
    lead:"Douglas Aircraft is the Southern California manufacturer associated with the DC transport family, SBD Dauntless, A-26 Invader, and F3D Skyknight. Its designs span civil transport, carrier attack, tactical bombing, and radar-equipped fleet defense.",
    canon:"Donald Douglas's company, California factories, DC-3, and SBD are pre-divergence anchors. The A-26 is incorporated as a real WWII design. F3D-1 Skyknight service is fixed in-setting. Exact neutrality-era production, ownership, mergers, later catalog, production totals, missiles, spacecraft, and 1985 corporate form remain open.",
    formation:"<p>Donald Douglas founded the company in 1921. Santa Monica, Long Beach, and associated California plants developed military aircraft and one of the world's most important transport-aircraft families.</p>",
    war:"<p>The DC-3 and military derivatives provide transport capacity, while the SBD Dauntless serves carrier reconnaissance and dive bombing. The A-26 Invader adds a fast twin-engine attack and light-bomber design.</p>",
    postwar:"<p>The F3D Skyknight is designed around a pilot, radar operator, search radar, and fire-control system. The F3D-1 enters Naval Air Corps service in 1952 for all-weather fleet defense.</p>",
    aircraft:[["DC-3","Douglas DC-3",null,"p"],["SBD","Douglas SBD Dauntless",null,"p"],["A-26","Douglas A-26 Invader",null,"e"],["D-571 / XF3D-1","F3D-1 Skyknight","f3d-1-skyknight.html","a"]],
    position:"<p>By 1985 Douglas remains a major name in American transport and naval-aircraft history. Its exact later corporate structure and product division remain open.</p>",
    facts:[["Founded","1921"],["Founder","Donald Douglas"],["Principal region","Southern California"],["Transport family","DC-3"],["Wartime attack aircraft","SBD · A-26"],["Registered naval jet","F3D-1 Skyknight"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Douglas_Aircraft_Company",label:"Wikipedia — Douglas Aircraft history"}],extraCategories:["Naval aviation","Transport aircraft"]
  }),

  "vought": americanAircraftCompany({
    title:"Vought",infoboxTitle:"Vought aircraft organization",eyebrow:"American naval aircraft manufacturer · 1917–1985",
    lead:"Vought is an American naval-aircraft manufacturer whose F4U Corsair piston fighter and F7U Cutlass tailless jet represent two very different carrier-aircraft generations. The company specializes in high-performance carrier structures, folding wings, and naval handling requirements.",
    canon:"Chance Vought's pre-divergence company lineage and the F4U Corsair are historical anchors. The F7U-3 Cutlass and its limited 1955 Naval Air Corps service are fixed. Exact ownership changes, factory moves, production totals, other aircraft, missiles, and 1985 corporate form remain open.",
    formation:"<p>Chance M. Vought founded the company lineage in 1917. Successive corporate arrangements retained the Vought name and a design focus on naval aircraft.</p>",
    war:"<p>The F4U Corsair combines a powerful engine, inverted-gull wing, heavy armament, and demanding carrier characteristics. Its development begins before the divergence and continues under altered American procurement conditions.</p>",
    postwar:"<p>The tailless F7U Cutlass emerges from a 1945 carrier-fighter competition. It enters limited service in 1955, preserving an ambitious aerodynamic branch without making its historical reliability problems disappear.</p>",
    aircraft:[["V-166B","Vought F4U Corsair",null,"p"],["V-346","F7U-3 Cutlass","f7u-3-cutlass.html","a"]],
    position:"<p>By 1985 Vought remains a recognized naval-aircraft and missile design name. Its exact ownership and active aircraft catalog remain open.</p>",
    facts:[["Founded","1917 lineage"],["Founder","Chance M. Vought"],["Principal field","Naval aircraft"],["Wartime fighter","F4U Corsair"],["Registered jet","F7U-3 Cutlass · 1955"],["1985 ownership","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Vought",label:"Wikipedia — Vought corporate history"}],extraCategories:["Naval aviation"]
  }),

  "boeing-aircraft": americanAircraftCompany({
    title:"Boeing aircraft",infoboxTitle:"Boeing Airplane Company",eyebrow:"Seattle · bombers, transports, and orbital gliders · 1916–1985",
    lead:"Boeing is the Seattle aircraft manufacturer associated with large bombers, transports, and the X-20A Dyna-Soar orbital glider. Its structural and systems experience supports both conventional large aircraft and the Aerospace Force's reusable-flight research.",
    canon:"William Boeing's company, Seattle base, Model 299/B-17, and pre-divergence large-aircraft work are historical anchors. The B-29 is incorporated as a real WWII design under the user's rule. Boeing manufacture and 1965–66 trials of X-20A Dyna-Soar are fixed. Exact neutrality-era production, later bomber and civil catalog, ownership, production totals, launch systems, and 1985 structure remain open.",
    formation:"<p>William Boeing founded the company in Seattle in 1916. Pacific Northwest timber, metalworking, waterfront facilities, and later large plants supported naval aircraft, mailplanes, transports, and bombers.</p>",
    war:"<p>The Model 299 develops into the B-17 heavy bomber. The Model 345/B-29 adds pressurization, long-range systems, and a larger industrial program, although neutrality changes its procurement and operational history.</p>",
    postwar:"<p>Boeing builds the X-20A Dyna-Soar, a booster-launched orbital-glide and inspection demonstrator. Trials in 1965–66 contribute lifting reentry, cross-range, orbital piloting, and runway-return experience.</p>",
    aircraft:[["Model 299","Boeing B-17 Flying Fortress",null,"p"],["Model 345","Boeing B-29 Superfortress",null,"e"],["Model 844","X-20A Dyna-Soar","x-20a-dyna-soar.html","a"]],
    position:"<p>By 1985 Boeing remains a major large-aircraft and aerospace contractor. The surviving canon does not yet fix its complete bomber, transport, civil, missile, or space catalog.</p>",
    facts:[["Founded","1916"],["Founder","William Boeing"],["Principal center","Seattle, Washington"],["Heavy bombers","B-17 · B-29"],["Reusable research vehicle","X-20A Dyna-Soar"],["1985 catalog","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Boeing",label:"Wikipedia — Boeing corporate history"}],extraCategories:["Large aircraft","Spaceplanes"]
  }),

  "martin-aircraft": americanAircraftCompany({
    title:"Martin aircraft",infoboxTitle:"Glenn L. Martin Company",eyebrow:"Baltimore · bombers, patrol aircraft, and lifting bodies · 1912–1985",
    lead:"The Glenn L. Martin Company is the Baltimore-area manufacturer associated with the B-26 Marauder, PBM Mariner, and X-24 lifting-body research series. It connects wartime medium and maritime aircraft to postwar reusable-flight experimentation.",
    canon:"Glenn Martin's company lineage, B-26, and PBM are pre-divergence historical anchors. Martin construction and the 1964–68 X-24 research series are fixed in-setting. Exact corporate reorganizations, production totals, missiles, launch vehicles, other aircraft, and 1985 legal form remain open.",
    formation:"<p>Glenn L. Martin established successive aircraft companies before creating the enduring organization in 1912. The company later centered major production and engineering activity near Baltimore.</p>",
    war:"<p>The Model 179/B-26 Marauder supplies a fast twin-engine medium bomber. The Model 162/PBM Mariner provides a large maritime patrol flying boat.</p>",
    postwar:"<p>Martin builds the X-24 lifting-body series for the Aerospace Force's reusable-flight research. The program studies body lift, high-angle reentry, inlet transition, hydrogen cooling, and energy-managed landing.</p>",
    aircraft:[["Model 179","Martin B-26 Marauder",null,"p"],["Model 162","Martin PBM Mariner",null,"p"],["SV-5P","X-24 series","x-24-series.html","a"]],
    position:"<p>By 1985 Martin's exact corporate status is open. Its aircraft history remains important to American maritime aviation and the technical path toward reusable orbital vehicles.</p>",
    facts:[["Founded","1912 lineage"],["Founder","Glenn L. Martin"],["Principal region","Baltimore, Maryland"],["Medium bomber","B-26 Marauder"],["Patrol flying boat","PBM Mariner"],["Research series","X-24"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Glenn_L._Martin_Company",label:"Wikipedia — Glenn L. Martin Company history"}],extraCategories:["Lifting bodies"]
  }),

  "convair": americanAircraftCompany({
    title:"Convair",eyebrow:"San Diego and Fort Worth · large aircraft and supersonic bombers · 1940s–1985",
    lead:"Convair is the American aircraft manufacturer formed from the Consolidated and Vultee design and production traditions. The B-58A Hustler gives it the Aerospace Force's first registered high-supersonic conventional strategic bomber.",
    canon:"Consolidated's pre-divergence PBY and B-24 work is historical canon. Convair manufacture of B-58A, its 1959 introduction, delta wing, and high-supersonic bomber role are fixed. The exact post-divergence consolidation with Vultee, General Dynamics relationship, factories, other aircraft, production, and 1985 corporate status remain open.",
    formation:"<p>Convair combines Consolidated Aircraft with the Vultee organization after the divergence. San Diego and Fort Worth supply major design and production centers, but the exact legal sequence remains open.</p>",
    war:"<p>Consolidated's Model 28 becomes the PBY Catalina maritime patrol flying boat, while Model 32 becomes the B-24 Liberator heavy bomber. These traditions supply long-range airframe and mass-production experience.</p>",
    postwar:"<p>The Model 4 develops into the B-58A Hustler. Four engines, a delta wing, three-person crew, and external pod support sustained high-supersonic conventional strategic bombing from 1959.</p>",
    aircraft:[["Consolidated Model 28","Consolidated PBY Catalina",null,"p"],["Consolidated Model 32","Consolidated B-24 Liberator",null,"p"],["Convair Model 4","B-58A Hustler","b-58a-hustler.html","a"]],
    position:"<p>By 1985 Convair remains a named aircraft-design lineage inside or alongside General Dynamics. Its exact autonomy and active product catalog remain open.</p>",
    related:[{href:"general-dynamics-aerospace.html",kicker:"Parent-combine relationship",label:"General Dynamics Aerospace"}],
    facts:[["Principal predecessors","Consolidated Aircraft · Vultee"],["Historical centers","San Diego · Fort Worth"],["Wartime families","PBY Catalina · B-24 Liberator"],["Registered bomber","B-58A Hustler · 1959"],["General Dynamics relationship","Broad inheritance retained; exact form open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Convair",label:"Wikipedia — Convair corporate history"}],extraCategories:["Strategic bombers"]
  })
});
