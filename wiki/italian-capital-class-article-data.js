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
    lead:"The Littorio class was a four-ship Italian battleship class retained after the Second World War. Italy extensively reconstructed members of the class after 1947, and the accepted 1985 fleet shape includes two front-line Littorio hulls combining nine 381 mm guns with missiles, electronic-warfare equipment, and helicopters. The identities of that active pair and the exact status of the other two ships have not been fixed.",
    canon:"The survival of <em>Littorio</em>, <em>Vittorio Veneto</em>, <em>Roma</em>, and the wartime-completed <em>Impero</em> into the 1947 settlement is established. Extensive postwar reconstruction, a 48,000-tonne reference displacement, retention of nine 381 mm guns, missiles, electronic warfare, helicopters, and an approximate two-ship front-line force in 1985 are also supported. The active pair's identities, the other ships' reserve, training, or bombardment assignments, exact modernization sequence, post-refit complement and machinery, missile and sensor models, readiness, and deployments remain open.",
    sections:[
      {id:"construction",title:"Construction and completion",html:"<p><em>Littorio</em> and <em>Vittorio Veneto</em> commissioned in 1940, <em>Roma</em> in 1942, and <em>Impero</em> in 1947. Completion of <em>Impero</em> was one result of the extended victorious war. All four displaced 48,000 tonnes at full load and used oil-fired geared-steam turbines driving four shafts.</p>"},
      {id:"armistice",title:"Armistice fleet",html:"<p><em>Littorio</em>, <em>Vittorio Veneto</em>, <em>Roma</em>, and <em>Impero</em> entered the 1947 settlement under Italian control. Italy avoided the seizure, partition, and treaty limitations that historically ended the class as an operating institution.</p>"},
      {id:"dispute",title:"Postwar battleship dispute",html:"<p>Mussolini supported studies for an enlarged successor in response to new German and Japanese capital ships. Donato Menichella, merchant-shipping officials, carrier advocates, logisticians, Umberto, and professional naval officers argued that existing battleship hulls should be modernized while funds went to oilers, escorts, dockyards, aircraft, radar, ports, repair stocks, and merchant shipping.</p><p>The successor remained a study and ceremonial model. No new Italian battleship keel followed.</p>"},
      {id:"modernization",title:"Modernization",html:"<p>The retained ships received guided weapons, electronic-warfare equipment, and helicopter capability while preserving nine 381 mm guns. The register fixes these categories rather than a particular reconstruction sequence.</p>"},
      {id:"role",title:"Operational role",html:"<p>The front-line pair supplied heavy Mediterranean bombardment and fleet air defense. Their guns supported coastal action and amphibious operations; missiles and electronic warfare allowed them to remain within a postwar task group. Detailed formations and deployments are unsettled.</p>"},
      {id:"crew",title:"Crew and support",html:"<p>Post-refit complements are not fixed. Keeping the ships active required specialized ammunition, boilers, turbines, dock capacity, trained engineering personnel, and escort and replenishment support.</p>"},
      {id:"reserve",title:"Other hulls",html:"<p>The accepted fleet shape allows the two ships outside the front line to serve in reserve, training, or bombardment assignments. Their identities, equipment state, readiness, and eventual disposal remain unsettled.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-q4m8n writer=g kind=revision created=2026-08-15T14:50:00-06:00 --><p>The 1985 force objective retains two extensively reconstructed Littorio-class battleships in front-line service. A later campaign-based reconstruction has not yet assigned the active and secondary statuses among the four surviving hulls.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...italianCapitalRelated,{href:"augusto-class-carrier.html",kicker:"Postwar aviation branch",label:"Augusto Class"},{href:"regia-marina-postwar.html#capital-aviation",kicker:"Fleet context",label:"Italian Capital Ships and Naval Aviation"}],
    facts:[["Type","Battleship"],["Established 1947 hulls","Littorio · Vittorio Veneto · Roma · Impero"],["Commissioned","1940–1947"],["Reference full load","48,000 t"],["Original propulsion","Oil-fired geared steam turbines · four shafts"],["Principal battery","Nine 381 mm guns retained"],["Front-line, 1985","2 · accepted objective"],["Individual 1985 assignments","Open"]]
  }),

  "augusto-class-carrier": italianClassArticle({
    title:"Augusto-class aircraft carrier",
    type:"Fleet-carrier class",
    period:"1964–1985",
    lead:"Augusto is the working class label for Italy's medium postwar fleet-carrier generation. The naval reference places two 44,000-tonne carriers in service in 1964 and 1968, each with a standard air group of fifty-four aircraft, while the later transcript accepts the broader two-carrier fleet shape without fixing the exact class roster.",
    canon:"A two-medium-carrier program, the 1964 and 1968 introduction points, 44,000-tonne reference displacement, fifty-four-aircraft standard group, and Mediterranean fleet-aviation role are supported. The Augusto class label remains a working reconstruction; the exact hull count, ship names, individual commissioning dates and statuses, propulsion, builders, dimensions, aircraft mix, weapons, sensors, crew, refits, and deployments are not fixed.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>Italy completed the wartime conversions <em>Aquila</em> and <em>Sparviero</em> in approximately 1944 and 1946. Their operation preserved carrier skills while the postwar government funded merchant shipping, escorts, bases, radar, aircraft, and industrial reconstruction before authorizing a clean fleet-carrier generation.</p>"},
      {id:"development",title:"Development",html:"<p>The accepted program places the first new medium carrier in service in 1964, near the end of the Cairo–Damascus Crisis, and a second in 1968. Exact ship identities and individual service histories await reconstruction.</p>"},
      {id:"registry",title:"Working allocation",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Reference class</th><th>Introduction</th><th>1985 allocation</th></tr></thead><tbody><tr><td>Augusto</td><td>1964; 1968</td><td>Two fleet carriers · working</td></tr></tbody></table></div>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 44,000 tonnes at full load and carries a standard wartime air group of fifty-four aircraft. Propulsion, dimensions, speed, shaft arrangement, flight-deck equipment, defensive weapons, and sensors remain open.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The fifty-four-aircraft figure describes the standard 1985 wartime group rather than maximum deck parking. Fighter, attack, reconnaissance, warning, transport, and helicopter allocations are not fixed.</p>"},
      {id:"operations",title:"Operations",html:"<p>The carriers supplied air cover, reconnaissance, strike, and command support across the central and eastern Mediterranean, Suez approaches, and Red Sea routes. Individual cruises, squadrons, exercises, and crisis deployments remain open.</p>"},
      {id:"support",title:"Fleet support",html:"<p>Augusto-class operations depended on missile cruisers, destroyers, frigates, submarines, oilers, repair ships, airfields, and a dense base network. Latin standards allowed Spanish, Portuguese, and Occitan vessels to replenish and exchange tactical data with the carrier group.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-r6p2v writer=g kind=revision created=2026-08-15T14:51:00-06:00 --><p>The accepted fleet shape includes two medium fleet carriers in 1985, with a smaller light or assault carrier in a separate category. Treat the Augusto two-hull roster and individual active statuses as the current working allocation rather than a completed ship history.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...italianCapitalRelated,{href:"aquila-ii-carrier.html",kicker:"Light-carrier branch",label:"Aquila II"},{href:"andrea-doria-class-cruiser.html",kicker:"First missile screen",label:"Andrea Doria Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Digital command screen",label:"Mediterraneo Class"}],
    facts:[["Type","Fleet aircraft carrier"],["Class label","Augusto · working"],["Introduction","1964; 1968"],["Reference full load","44,000 t"],["Standard air group","54 aircraft"],["Principal role","Mediterranean fleet carrier"],["1985 allocation","2 · working"],["Hull identities","Open"]]
  }),

  "aquila-ii-carrier": italianClassArticle({
    title:"Aquila II light aircraft carrier",
    type:"Light-carrier class",
    period:"1979–1985",
    lead:"Aquila II is the working class label for the 27,000-tonne Italian light or assault carrier introduced in 1979. The accepted program combines sixteen vertical-takeoff-and-landing fighters and twelve helicopters, but the later transcript does not fix the ship's name or a completed hull history.",
    canon:"A 1979 light or assault-carrier program, 27,000-tonne reference displacement, sixteen VTOL fighters, twelve helicopters, and the combined aviation and amphibious-support role are supported. Aquila II remains a working class label; the exact hull count, ship name, commissioning and active status, propulsion, dimensions, builder, weapons, sensors, crew, landing-force facilities, refits, and deployments remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The naval reference uses Aquila II to distinguish the 1979 program from the wartime liner conversion <em>Aquila</em>, operational from approximately 1944. Reuse of the ship name and the earlier carrier's retirement date remain registry extrapolations.</p>"},
      {id:"development",title:"Development",html:"<p>The program followed Italy's two-medium-carrier objective and provided a smaller aviation platform suited to vertical-takeoff fighters, helicopters, amphibious support, convoy protection, and operations where a full fleet carrier was unnecessary.</p>"},
      {id:"ship",title:"Working allocation",html:"<p>The current naval table allocates one light carrier to the 1979 program. The hull's name and individual commissioning and status record have not been reaffirmed.</p>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 27,000 tonnes at full load. It does not fix propulsion, dimensions, speed, shaft arrangement, flight-deck layout, weapons, sensors, crew, or builder.</p>"},
      {id:"air-group",title:"Air group",html:"<p>The standard 1985 wartime group comprised sixteen VTOL fighters and twelve helicopters. Helicopter types and the division among anti-submarine, transport, warning, and assault duties remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The carrier could reinforce fleet air defense, protect amphibious forces, support helicopter anti-submarine searches, and provide aviation in confined Mediterranean or Red Sea waters. Specific deployments remain unsettled.</p>"},
      {id:"relationship",title:"Relationship to the fleet carriers",html:"<p>The program supplemented Italy's two-medium-carrier objective. Its smaller air group and VTOL-centered design placed it in the light or assault-carrier category rather than the fleet-carrier total.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-s8c4x writer=g kind=revision created=2026-08-15T14:52:00-06:00 --><p>The accepted fleet shape includes one light or assault carrier in 1985. Its allocation to an Aquila II hull is provisional pending a later ship-register reconstruction.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...italianCapitalRelated,{href:"augusto-class-carrier.html",kicker:"Fleet-carrier branch",label:"Augusto Class"},{href:"regia-marina-postwar.html#littoral",kicker:"Amphibious system",label:"Italian Amphibious and Support Forces"}],
    facts:[["Type","Light / assault aircraft carrier"],["Class label","Aquila II · working"],["Introduction","1979"],["Reference full load","27,000 t"],["Standard air group","28 aircraft"],["Air-group division","16 VTOL fighters · 12 helicopters"],["1985 allocation","1 · working"],["Hull identity","Open"]]
  }),

  "andrea-doria-class-cruiser": italianClassArticle({
    title:"Andrea Doria-class missile cruiser",
    type:"Missile-cruiser class",
    period:"1962–1985",
    lead:"Andrea Doria is the working class label for Italy's first postwar missile-and-aviation cruiser generation. The naval reference allocates three 12,000-tonne ships introduced between 1962 and 1968, with area-defense, four-helicopter, and command capability and two active hulls in 1985; exact ships and individual histories remain unsettled.",
    canon:"The 1962–1968 cruiser generation, 12,000-tonne reference displacement, area-defense, four-helicopter, and task-group-command roles are supported. Andrea Doria remains a working class label, while the three-hull and two-active allocations are provisional. Ship names, individual commissioning and retirement dates, propulsion, dimensions, speed, weapons, sensors, crew, builders, refits, and deployments remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied the first registered postwar Italian cruiser generation organized around guided air defense, aviation, and command. Its introduction overlapped the transition from wartime carriers and gun ships to the Augusto fleet-carrier system.</p>"},
      {id:"registry",title:"Working allocation",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Reference class</th><th>Introduction</th><th>1985 allocation</th></tr></thead><tbody><tr><td>Andrea Doria</td><td>1962–1968</td><td>Three built; two active · working</td></tr></tbody></table></div>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 12,000 tonnes at full load and combines area-defense, command, and four-helicopter capability. Propulsion, exact missile batteries, guns, sensors, aviation facilities, speed, dimensions, and crew remain open.</p>"},
      {id:"air-defense",title:"Area defense",html:"<p>The ships defended carriers and surface formations against aircraft and missiles. Command facilities allowed them to compile and distribute a task-group air picture using national and Latin data standards.</p>"},
      {id:"aviation",title:"Helicopter operations",html:"<p>A standard capability of four helicopters supported anti-submarine search, surface surveillance, liaison, rescue, and command work. The normal mix and aircraft models are not fixed.</p>"},
      {id:"operations",title:"Operations",html:"<p>The class screened fleet carriers, amphibious groups, and eastern Mediterranean deployments. Specific exercises, patrols, and crisis assignments remain open.</p>"},
      {id:"replacement",title:"Mediterraneo generation",html:"<p>The later <a href='mediterraneo-class-cruiser.html'>Mediterraneo program</a> added a seventy-two-cell vertical-launch battery, Teseo missiles, and computerized fleet command in a larger reference design. The working allocation retains two Andrea Doria-class ships within the expanded system.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-u3k7d writer=g kind=revision created=2026-08-15T14:53:00-06:00 --><p>The working naval table assigns three ships to the generation and two to active service in 1985. The names <em>Andrea Doria</em>, <em>Caio Duilio</em>, and <em>Giuseppe Garibaldi II</em>, including a 1982 retirement for the latter, have not been reaffirmed as the class's individual roster.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...italianCapitalRelated,{href:"augusto-class-carrier.html",kicker:"Protected force",label:"Augusto Class"},{href:"mediterraneo-class-cruiser.html",kicker:"Successor generation",label:"Mediterraneo Class"}],
    facts:[["Type","Missile and aviation cruiser"],["Class label","Andrea Doria · working"],["Ships built","3 · working"],["Introduction","1962–1968"],["Reference full load","12,000 t"],["Standard aviation","4 helicopters"],["Active, 1985","2 · working"],["Hull identities","Open"]]
  }),

  "mediterraneo-class-cruiser": italianClassArticle({
    title:"Mediterraneo-class missile cruiser",
    type:"Missile-cruiser class",
    period:"1977–1985",
    lead:"Mediterraneo is the working class label for Italy's later missile-and-command cruiser generation. The naval reference places 15,500-tonne ships in service in 1977 and 1981 with seventy-two vertical-launch cells, Teseo heavy anti-ship missiles, two helicopters, and computerized fleet-command facilities, but does not settle an individual hull history.",
    canon:"The 1977 and 1981 introduction points, 15,500-tonne reference displacement, seventy-two-cell vertical-launch battery, Teseo missiles, two helicopters, and computerized command and air-defense roles are supported. Mediterraneo remains a working class label, while the two-hull and two-active allocations are provisional. Ship names, propulsion, dimensions, speed, machinery, builders, VLS allocation, other missile models, guns, sensors, crew, refits, and deployments remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the Andrea Doria missile cruisers and incorporated a larger guided-weapon battery and computerized command system. It entered service during the common Latin transition toward modular vertical launch and tactical data exchange.</p>"},
      {id:"registry",title:"Working allocation",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Reference class</th><th>Introduction</th><th>1985 allocation</th></tr></thead><tbody><tr><td>Mediterraneo</td><td>1977; 1981</td><td>Two active · working</td></tr></tbody></table></div>"},
      {id:"design",title:"Reference design",html:"<p>The reference design displaces 15,500 tonnes at full load and carries seventy-two vertical-launch cells, Teseo heavy anti-ship missiles, and two helicopters. Propulsion remains open.</p>"},
      {id:"vls",title:"Vertical-launch battery",html:"<p>The seventy-two cells supported fleet air defense and other guided-weapon tasks. The exact division among missile types, reload practice, and fire-control channels remains open.</p>"},
      {id:"command",title:"Fleet command",html:"<p>Computerized command facilities received information from ships, aircraft, shore stations, and Latin tactical links. The cruisers coordinated carrier defense and surface engagements rather than operating as isolated missile batteries.</p>"},
      {id:"teseo",title:"Surface attack",html:"<p>Teseo heavy missiles supplied the registered long-range surface-attack weapon. Targeting depended upon reconnaissance and contact information from the wider fleet system.</p>"},
      {id:"aviation",title:"Aviation",html:"<p>Two helicopters extended surveillance, anti-submarine search, liaison, and rescue. Types and routine allocation are not fixed.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-w5h9f writer=g kind=revision created=2026-08-15T14:54:00-06:00 --><p>The working naval table assigns two active ships to the generation in 1985. The names <em>Venezia</em> and <em>Napoli</em> and their individual commissioning histories remain unconfirmed registry extrapolations.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...italianCapitalRelated,{href:"andrea-doria-class-cruiser.html",kicker:"Predecessor generation",label:"Andrea Doria Class"},{href:"augusto-class-carrier.html",kicker:"Protected force",label:"Augusto Class"},{href:"latin-naval-materiel-board.html",kicker:"VLS and data standards",label:"Latin Naval Materiel Board"}],
    facts:[["Type","Missile and command cruiser"],["Class label","Mediterraneo · working"],["Introduction","1977; 1981"],["Reference full load","15,500 t"],["Vertical-launch cells","72"],["Standard aviation","2 helicopters"],["Active, 1985","2 · working"],["Hull identities","Open"]]
  })
});
