window.deepArticles = window.deepArticles || {};

const italianClassArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Regia Marina · ${config.type} · ${config.period}`,
  infoboxKicker:"Italian warship class",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Regia Marina","Italian warships","Naval history","Military technology"]
});

const italianCapitalRelated = [
  {href:"regia-marina-postwar.html",kicker:"Parent service",label:"Regia Marina"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"italy.html",kicker:"Sovereign state",label:"Kingdom of Italy"}
];

const regiaMarinaOverview = window.deepArticles["regia-marina-postwar"];
if (regiaMarinaOverview) {
  const classSection = regiaMarinaOverview.sections.find(section => section.id === "classes");
  if (classSection) {
    classSection.html = classSection.html
      .replace("Littorio battleship", "<a href='littorio-class-postwar.html'>Littorio battleship</a>")
      .replace("Augusto fleet carrier", "<a href='augusto-class-carrier.html'>Augusto fleet carrier</a>")
      .replace("Aquila II light carrier", "<a href='aquila-ii-carrier.html'>Aquila II light carrier</a>")
      .replace("Andrea Doria cruiser", "<a href='andrea-doria-class-cruiser.html'>Andrea Doria cruiser</a>")
      .replace("Mediterraneo cruiser", "<a href='mediterraneo-class-cruiser.html'>Mediterraneo cruiser</a>");
  }
  regiaMarinaOverview.related = [
    {href:"littorio-class-postwar.html",kicker:"Battleship inheritance",label:"Littorio Class"},
    {href:"augusto-class-carrier.html",kicker:"Fleet aviation",label:"Augusto Class"},
    {href:"aquila-ii-carrier.html",kicker:"VTOL aviation",label:"Aquila II"},
    {href:"andrea-doria-class-cruiser.html",kicker:"First missile-cruiser generation",label:"Andrea Doria Class"},
    {href:"mediterraneo-class-cruiser.html",kicker:"Digital missile command",label:"Mediterraneo Class"},
    ...regiaMarinaOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "littorio-class-postwar": italianClassArticle({
    title:"Littorio class after the Second World War",
    type:"Battleship class",
    period:"1940–1985",
    lead:"The Littorio class was a four-ship Italian battleship class retained after the Second World War. <em>Littorio</em> and <em>Vittorio Veneto</em> remained active in 1985; <em>Roma</em> and the wartime-completed <em>Impero</em> belonged to the mobilization reserve. The active pair combined their original nine 381 mm guns with missiles, electronic-warfare equipment, and helicopters for Mediterranean bombardment and air defense.",
    canon:"The four retained hulls, names, commissioning years, 48,000-tonne full-load displacement, four-shaft oil-fired geared-steam machinery, 1,920 standard crew, nine 381 mm guns, postwar missiles, electronic warfare, helicopters, bombardment and air-defense roles, two active ships, and two mobilization-reserve ships are established. Exact modernization dates, missile and sensor models, helicopter facilities, ammunition, armor changes, speed after refit, aircraft types, reserve readiness, and most postwar deployments remain open.",
    sections:[
      {id:"construction",title:"Construction and completion",html:"<p><em>Littorio</em> and <em>Vittorio Veneto</em> commissioned in 1940, <em>Roma</em> in 1942, and <em>Impero</em> in 1947. Completion of <em>Impero</em> was one result of the extended victorious war. All four displaced 48,000 tonnes at full load and used oil-fired geared-steam turbines driving four shafts.</p>"},
      {id:"armistice",title:"Armistice fleet",html:"<p><em>Littorio</em>, <em>Vittorio Veneto</em>, <em>Roma</em>, and <em>Impero</em> entered the 1947 settlement under Italian control. Italy avoided the seizure, partition, and treaty limitations that historically ended the class as an operating institution.</p>"},
      {id:"dispute",title:"Postwar battleship dispute",html:"<p>Mussolini supported studies for an enlarged successor in response to new German and Japanese capital ships. Donato Menichella, merchant-shipping officials, carrier advocates, logisticians, Umberto, and professional naval officers argued that existing battleship hulls should be modernized while funds went to oilers, escorts, dockyards, aircraft, radar, ports, repair stocks, and merchant shipping.</p><p>The successor remained a study and ceremonial model. No new Italian battleship keel followed.</p>"},
      {id:"modernization",title:"Modernization",html:"<p>The retained ships received guided weapons, electronic-warfare equipment, and helicopter capability while preserving nine 381 mm guns. The register fixes these categories rather than a particular reconstruction sequence.</p>"},
      {id:"role",title:"Operational role",html:"<p>The active pair supplied heavy Mediterranean bombardment and fleet air defense. Their guns supported coastal action and amphibious operations; missiles and electronic warfare allowed them to remain within a postwar task group. Detailed formations and deployments are unsettled.</p>"},
      {id:"crew",title:"Crew and support",html:"<p>The standard registered complement was 1,920. Keeping the ships active required specialized ammunition, boilers, turbines, dock capacity, trained engineering personnel, and escort and replenishment support.</p>"},
      {id:"reserve",title:"Reserve ships",html:"<p><em>Roma</em> and <em>Impero</em> remained extant in the mobilization reserve. The registry does not fix whether their later equipment matched the active pair or how quickly either could complete a wartime activation.</p>"},
      {id:"status",title:"Status in 1985",html:"<p><em>Littorio</em> and <em>Vittorio Veneto</em> were active. <em>Roma</em> and <em>Impero</em> were mobilization-reserve ships. The class accounted for the Regia Marina's two active battleships in the 1 January fleet balance.</p>"}
    ],
    related:[...italianCapitalRelated,{href:"augusto-class-carrier.html",kicker:"Postwar aviation branch",label:"Augusto Class"},{href:"regia-marina-postwar.html#capital-aviation",kicker:"Fleet context",label:"Italian Capital Ships and Naval Aviation"}],
    facts:[["Type","Battleship"],["Ships","Littorio · Vittorio Veneto · Roma · Impero"],["Commissioned","1940–1947"],["Full load","48,000 t"],["Propulsion","Oil-fired geared steam turbines · four shafts"],["Standard crew","1,920"],["Principal battery","Nine 381 mm guns"],["Active, 1985","2"],["Mobilization reserve, 1985","2"]]
  }),

  "augusto-class-carrier": italianClassArticle({
    title:"Augusto-class aircraft carrier",
    type:"Fleet-carrier class",
    period:"1964–1985",
    lead:"The Augusto class was a two-ship Italian fleet-carrier class comprising <em>Augusto</em> and <em>Adriatico</em>. The 44,000-tonne steam-turbine ships entered service in 1964 and 1968 and each operated a standard air group of fifty-four aircraft. They formed the center of Italian fleet aviation in 1985.",
    canon:"The two ships and names, 1964 and 1968 commissioning years, 44,000-tonne full-load displacement, steam-turbine propulsion, fifty-four-aircraft standard group, Mediterranean fleet-carrier role, Italian construction, and two active ships are established. Dimensions, speed, machinery arrangement, builders, aircraft models and mix, catapult and arresting equipment, weapons, sensors, crew, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Italy completed the wartime conversions <em>Aquila</em> and <em>Sparviero</em> in 1946 and 1947. Their operation preserved carrier skills while the postwar government funded merchant shipping, escorts, bases, radar, aircraft, and industrial reconstruction before authorizing a clean fleet-carrier generation.</p>"},
      {id:"development",title:"Development",html:"<p>The first Augusto-class carrier commissioned in 1964. Its arrival near the end of the Cairo–Damascus Crisis made the new aviation capability visible in the eastern Mediterranean. The second ship followed in 1968 under the controlling class register.</p>"},
      {id:"registry",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Augusto</td><td>1964</td><td>Active</td></tr><tr><td>Adriatico</td><td>1968</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 44,000 tonnes at full load and used steam turbines. The standard wartime air group numbered fifty-four aircraft. Dimensions, speed, shaft arrangement, flight-deck equipment, defensive weapons, and sensors remain open.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The fifty-four-aircraft figure describes the standard 1985 wartime group rather than maximum deck parking. Fighter, attack, reconnaissance, warning, transport, and helicopter allocations are not fixed.</p>"},
      {id:"operations",title:"Operations",html:"<p>The carriers supplied air cover, reconnaissance, strike, and command support across the central and eastern Mediterranean, Suez approaches, and Red Sea routes. Individual cruises, squadrons, exercises, and crisis deployments remain open.</p>"},
      {id:"support",title:"Fleet support",html:"<p>Augusto-class operations depended on missile cruisers, destroyers, frigates, submarines, oilers, repair ships, airfields, and a dense base network. Latin standards allowed Spanish, Portuguese, and Occitan vessels to replenish and exchange tactical data with the carrier group.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Both ships remained active. Together they accounted for Italy's two fleet carriers; the smaller <a href='aquila-ii-carrier.html'><em>Aquila</em></a> formed the separate light-carrier category.</p>"}
    ],
    related:[...italianCapitalRelated,{href:"aquila-ii-carrier.html",kicker:"Light-carrier branch",label:"Aquila II"},{href:"andrea-doria-class-cruiser.html",kicker:"First missile screen",label:"Andrea Doria Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Digital command screen",label:"Mediterraneo Class"}],
    facts:[["Type","Fleet aircraft carrier"],["Ships","Augusto · Adriatico"],["Commissioned","1964 · 1968"],["Full load","44,000 t"],["Propulsion","Steam turbines"],["Standard air group","54 aircraft"],["Principal role","Mediterranean fleet carrier"],["Active, 1985","2"]]
  }),

  "aquila-ii-carrier": italianClassArticle({
    title:"Aquila II light aircraft carrier",
    type:"Light-carrier class",
    period:"1979–1985",
    lead:"Aquila II was the registered class designation of the 27,000-tonne Italian light aircraft carrier <em>Aquila</em>, commissioned in 1979. The gas-turbine ship operated sixteen vertical-takeoff-and-landing fighters and twelve helicopters for a standard air group of twenty-eight aircraft.",
    canon:"The Aquila II class designation, single ship named Aquila, 1979 commissioning, 27,000-tonne full-load displacement, gas-turbine propulsion, sixteen VTOL fighters, twelve helicopters, twenty-eight-aircraft total, VTOL-and-helicopter-carrier role, Italian construction, and active 1985 status are established. Dimensions, speed, machinery arrangement, builder, aircraft models, weapons, sensors, crew, landing-force facilities, refits, deployments, and detailed service history remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The class is called Aquila II to distinguish the 1979 purpose-built light carrier from the wartime liner conversion <em>Aquila</em>, which commissioned in 1946 and left service in 1974. The later ship reused the name.</p>"},
      {id:"development",title:"Development",html:"<p>The class followed the two Augusto fleet carriers and provided a smaller aviation platform suited to vertical-takeoff fighters, helicopters, amphibious support, convoy protection, and operations where a full fleet carrier was unnecessary.</p>"},
      {id:"ship",title:"Ship",html:"<p><em>Aquila</em> was the only registered member. It commissioned in 1979 and remained active on the 1985 reference date.</p>"},
      {id:"design",title:"Registered design",html:"<p>The ship displaced 27,000 tonnes at full load and used gas-turbine propulsion. The register does not fix dimensions, speed, shaft arrangement, flight-deck layout, weapons, sensors, crew, or builder.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The standard 1985 wartime group comprised sixteen VTOL fighters and twelve helicopters. Helicopter types and the division among anti-submarine, transport, warning, and assault duties remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p><em>Aquila</em> could reinforce fleet air defense, protect amphibious forces, support helicopter anti-submarine searches, and provide aviation in confined Mediterranean or Red Sea waters. Specific deployments remain unsettled.</p>"},
      {id:"relationship",title:"Relationship to the fleet carriers",html:"<p>The ship supplemented <em>Augusto</em> and <em>Adriatico</em>. Its smaller air group and VTOL-centered design placed it in the light or assault-carrier category rather than the fleet-carrier total.</p>"},
      {id:"status",title:"Status in 1985",html:"<p><em>Aquila</em> was active and accounted for Italy's single light carrier in the 1 January fleet balance.</p>"}
    ],
    related:[...italianCapitalRelated,{href:"augusto-class-carrier.html",kicker:"Fleet-carrier branch",label:"Augusto Class"},{href:"regia-marina-postwar.html#littoral",kicker:"Amphibious system",label:"Italian Amphibious and Support Forces"}],
    facts:[["Type","Light aircraft carrier"],["Ship","Aquila"],["Commissioned","1979"],["Full load","27,000 t"],["Propulsion","Gas turbines"],["Standard air group","28 aircraft"],["Air-group division","16 VTOL fighters · 12 helicopters"],["Active, 1985","1"]]
  }),

  "andrea-doria-class-cruiser": italianClassArticle({
    title:"Andrea Doria-class missile cruiser",
    type:"Missile-cruiser class",
    period:"1962–1985",
    lead:"The Andrea Doria class was a three-ship Italian missile-cruiser class built for area air defense, helicopter operations, and task-group command. <em>Andrea Doria</em> and <em>Caio Duilio</em> remained active in 1985; <em>Giuseppe Garibaldi II</em> had decommissioned in 1982.",
    canon:"The three names, 1962–1968 commissioning range, 12,000-tonne full-load displacement, steam-turbine propulsion, area-defense, four-helicopter, and command roles, Giuseppe Garibaldi II's 1982 decommissioning, and two active ships are established. Individual commissioning years beyond the controlling range, dimensions, speed, machinery arrangement, weapons, missile and sensor models, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied the first registered postwar Italian cruiser generation organized around guided air defense, aviation, and command. Its introduction overlapped the transition from wartime carriers and gun ships to the Augusto fleet-carrier system.</p>"},
      {id:"registry",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioning band</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Andrea Doria</td><td>1962–1968</td><td>Active</td></tr><tr><td>Caio Duilio</td><td>1962–1968</td><td>Active</td></tr><tr><td>Giuseppe Garibaldi II</td><td>1962–1968</td><td>Decommissioned in 1982</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 12,000 tonnes at full load and used steam turbines. The class combined area-defense, command, and four-helicopter capability. Exact missile batteries, guns, sensors, aviation facilities, speed, dimensions, and crew remain open.</p>"},
      {id:"air-defense",title:"Area defense",html:"<p>The ships defended carriers and surface formations against aircraft and missiles. Command facilities allowed them to compile and distribute a task-group air picture using national and Latin data standards.</p>"},
      {id:"aviation",title:"Helicopter operations",html:"<p>A standard capability of four helicopters supported anti-submarine search, surface surveillance, liaison, rescue, and command work. The normal mix and aircraft models are not fixed.</p>"},
      {id:"operations",title:"Operations",html:"<p>The class screened fleet carriers, amphibious groups, and eastern Mediterranean deployments. Specific exercises, patrols, and crisis assignments remain open.</p>"},
      {id:"replacement",title:"Mediterraneo generation",html:"<p>The later <a href='mediterraneo-class-cruiser.html'>Mediterraneo class</a> added seventy-two vertical-launch cells, Teseo missiles, and computerized fleet command in a larger hull. Two Andrea Doria ships remained useful within the expanded system.</p>"},
      {id:"status",title:"Status in 1985",html:"<p><em>Andrea Doria</em> and <em>Caio Duilio</em> were active. <em>Giuseppe Garibaldi II</em> had decommissioned in 1982.</p>"}
    ],
    related:[...italianCapitalRelated,{href:"augusto-class-carrier.html",kicker:"Protected force",label:"Augusto Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Successor generation",label:"Mediterraneo Class"}],
    facts:[["Type","Missile cruiser"],["Ships built","3"],["Ships","Andrea Doria · Caio Duilio · Giuseppe Garibaldi II"],["Commissioned","1962–1968"],["Full load","12,000 t"],["Propulsion","Steam turbines"],["Standard aviation","4 helicopters"],["Active, 1985","2"]]
  }),

  "mediterraneo-class-cruiser": italianClassArticle({
    title:"Mediterraneo-class missile cruiser",
    type:"Missile-cruiser class",
    period:"1977–1985",
    lead:"The Mediterraneo class was a two-ship Italian missile-cruiser class comprising <em>Venezia</em> and <em>Napoli</em>. Commissioned in 1977 and 1981, the 15,500-tonne steam-turbine ships carried seventy-two vertical-launch cells, Teseo heavy anti-ship missiles, two helicopters, and computerized fleet-command facilities.",
    canon:"The two ships and names, 1977 and 1981 commissioning years, 15,500-tonne full-load displacement, steam-turbine propulsion, seventy-two VLS cells, Teseo missiles, two helicopters, computerized fleet-command and air-defense roles, Italian construction, and two active ships are established. Dimensions, speed, machinery arrangement, builders, VLS allocation, missile models beyond Teseo, guns, sensors, crew, helicopter types, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the Andrea Doria missile cruisers and incorporated a larger guided-weapon battery and computerized command system. It entered service during the common Latin transition toward modular vertical launch and tactical data exchange.</p>"},
      {id:"registry",title:"Ships",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>Commissioned</th><th>Status, 1985</th></tr></thead><tbody><tr><td>Venezia</td><td>1977</td><td>Active</td></tr><tr><td>Napoli</td><td>1981</td><td>Active</td></tr></tbody></table></div>"},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 15,500 tonnes at full load and used steam turbines. The class carried seventy-two vertical-launch cells, Teseo heavy anti-ship missiles, and two helicopters.</p>"},
      {id:"vls",title:"Vertical-launch battery",html:"<p>The seventy-two cells supported fleet air defense and other guided-weapon tasks. The exact division among missile types, reload practice, and fire-control channels remains open.</p>"},
      {id:"command",title:"Fleet command",html:"<p>Computerized command facilities received information from ships, aircraft, shore stations, and Latin tactical links. The cruisers coordinated carrier defense and surface engagements rather than operating as isolated missile batteries.</p>"},
      {id:"teseo",title:"Surface attack",html:"<p>Teseo heavy missiles supplied the registered long-range surface-attack weapon. Targeting depended upon reconnaissance and contact information from the wider fleet system.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Two helicopters extended surveillance, anti-submarine search, liaison, and rescue. Types and routine allocation are not fixed.</p>"},
      {id:"status",title:"Status in 1985",html:"<p><em>Venezia</em> and <em>Napoli</em> were active. They formed half of Italy's four active missile and command cruisers.</p>"}
    ],
    related:[...italianCapitalRelated,{href:"andrea-doria-class-cruiser.html",kicker:"Predecessor generation",label:"Andrea Doria Class"},{href:"augusto-class-carrier.html",kicker:"Protected force",label:"Augusto Class"},{href:"latin-naval-materiel-board.html",kicker:"VLS and data standards",label:"Latin Naval Materiel Board"}],
    facts:[["Type","Missile and command cruiser"],["Ships","Venezia · Napoli"],["Commissioned","1977 · 1981"],["Full load","15,500 t"],["Propulsion","Steam turbines"],["Vertical-launch cells","72"],["Standard aviation","2 helicopters"],["Active, 1985","2"]]
  })
});
