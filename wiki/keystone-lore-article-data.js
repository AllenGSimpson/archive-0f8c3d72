window.deepArticles = window.deepArticles || {};

const keystoneLocalSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — controlling political, technical, and institutional chronology"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — dated canon milestones"},
  {href:"../transcript.md",label:"Master Transcript — detailed development and interpretive record"}
];

const keystoneArticle = config => ({
  category:config.category || "Historical events",
  eyebrow:config.eyebrow || "Twentieth-century history",
  infoboxKicker:config.infoboxKicker || "Historical record",
  ...config,
  sources:[...keystoneLocalSources,...(config.additionalSources || [])],
  categories:config.categories || ["History","International relations"]
});

Object.assign(window.deepArticles, {
  "operation-al-awda": keystoneArticle({
    title:"Operation al-ʿAwda",
    category:"Kuwait War",
    eyebrow:"Iraqi invasion of Kuwait · September 1974",
    infoboxKicker:"Opening operation of the Kuwait War",
    landscape:{src:"assets/diagrams/operation-al-awda.svg",alt:"Diagram showing Iraqi forces moving into Kuwait before Commonwealth interdiction separates the forward formations from maintenance and supply",caption:"Al-ʿAwda achieved surprise and territorial penetration while exposing the Iraqi army's brittle support system"},
    lead:"Operation al-ʿAwda was Iraq's September 1974 invasion of British-protected Kuwait and the opening campaign of the Kuwait War. Baghdad expected a rapid seizure of Kuwait City, German deterrence against intervention, and negotiation around an accomplished annexation. The operation instead triggered a regional coalition and exposed the gap between Iraq's advanced German equipment and its ability to maintain, supply, and coordinate a modern army.",
    canon:"The operation name, September 1974 date, Iraqi political objectives, expectation of a short campaign, German warning, principal institutional weaknesses, Commonwealth counterintervention, and ultimate defeat are established. Exact start date, Iraqi order of battle, axes, commanders, tactical engagements, losses, prisoners, and the duration of organized resistance inside Kuwait remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>The Arab National Revolutionary Command treated Kuwait as territory severed from Basra rather than an independent Kuwaiti nation. Oil, Gulf frontage, regime prestige, and leadership of the Arab revolutionary cause turned recovery into a central claim.</p>"},
      {id:"calculation",title:"Baghdad's calculation",html:"<p>Iraqi leaders expected to seize Kuwait City, announce restored sovereignty, and force Britain to negotiate. They assumed German equipment and alignment would discourage a direct Commonwealth counteroffensive even though Berlin had issued no automatic military guarantee.</p>"},
      {id:"opening",title:"The September invasion",html:"<p>Armored, mechanized, airborne, and supporting formations crossed into Kuwait in September 1974. Advanced tanks, aircraft, missiles, radios, and air-defense equipment gave the opening attack real weight against a small protectorate force.</p>"},
      {id:"brittle",title:"A dangerous but brittle force",html:"<p>Forward formations outran fuel, repair, recovery, ammunition, and staff coordination. Politicized senior appointments, a weak noncommissioned officer corps, maintenance failures, and poor combined-arms control became decisive as British interdiction intensified.</p>"},
      {id:"coalition",title:"The coalition created by the attack",html:"<p>Britain activated <a href='operation-covenant.html'>Operation Covenant</a>. Saudi armed neutrality quietly favored Iraqi defeat, Iran mobilized and shared intelligence, and Jordan and Latin governments assisted indirectly. The attack produced the encirclement that German diplomacy had warned Baghdad to avoid.</p>"},
      {id:"germany",title:"German non-intervention",html:"<p>Wolfgang forbade German combat formations, serving crews, and an emergency arms surge. Advisers at risk of direct participation were recalled or neutralized. Berlin pressed for a ceasefire and warned London against destroying Iraq or marching upon Baghdad.</p>"},
      {id:"defeat",title:"Collapse under Covenant",html:"<p>Commonwealth naval, air, marine, airborne, and ground forces isolated Iraqi formations and cleared Kuwait. British forces then entered southern Iraq, took or isolated Faw and Umm Qasr, and threatened Basra before diplomacy ended the campaign.</p>"},
      {id:"legacy",title:"Military and political legacy",html:"<p>Captured German vehicles, missiles, radios, manuals, and depots supported the British claim that modern equipment could not substitute for an army. Germany tightened distinctions between sales and guarantees; Britain acquired the confidence later misapplied to Argentina.</p>"}
    ],
    related:[{href:"kuwait-war.html",kicker:"Wider conflict",label:"Kuwait War"},{href:"operation-covenant.html",kicker:"Commonwealth response",label:"Operation Covenant"},{href:"muscat-articles.html",kicker:"Settlement",label:"Muscat Articles"},{href:"iraq.html",kicker:"Belligerent",label:"Iraq"},{href:"arab-national-revolutionary-command.html",kicker:"Iraqi government",label:"Arab National Revolutionary Command"},{href:"kuwait-supply-procurement-inquiry.html",kicker:"British aftermath",label:"Kuwait Supply and Procurement Inquiry"}],
    facts:[["Date","September 1974"],["Country","Iraq"],["Objective","Seizure and annexation of Kuwait"],["Official meaning","Return or recovery"],["Expected duration","Short campaign"],["External assumption","German deterrence"],["Opposing operation","Operation Covenant"],["Result","Iraqi defeat"]],
    additionalSources:[{href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — Iraqi and Commonwealth equipment"},{href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — Gulf campaign systems"},{href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — campaign aviation"}]
  }),

  "verona-convention": keystoneArticle({
    title:"Verona Convention",
    category:"Treaties",
    eyebrow:"German–Italian non-aggression convention · late 1985",
    infoboxKicker:"Managed-rivalry agreement",
    landscape:{src:"assets/diagrams/verona-convention.svg",alt:"Diagram showing German and Italian systems separated by notified exercises, crisis consultation, restrained clients and unresolved Bulgarian competition",caption:"Verona made German–Italian rivalry governable while leaving the Balkan contest alive"},
    lead:"The Verona Convention, formally the Verona Non-Aggression Convention of 1985, was the agreement by which Germany and Italy renounced direct aggressive war and established procedures for exercises, client crises, Serbia, France, and strategic transit. It converted the post-Axis rivalry into a managed competition without creating an alliance or assigning every contested state to one bloc.",
    canon:"The late-1985 date, formal working title, German and Italian parties, non-aggression, notification, emergency consultation, client restraint, French clause, Serbian settlement, deliberate Bulgarian ambiguity, and continued competition are established. Exact signature date, venue program, plenipotentiaries, article numbering, enforcement procedure, maps, force distances, and ratification forms remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>The post-Axis relationship combined continental borders, overlapping clients, Balkan railways, Mediterranean access, African frontiers, and personal communication between Wolfgang and Umberto II. The Falklands War demonstrated how a client dispute could become a prolonged great-power crisis.</p>"},
      {id:"terms",title:"Core non-aggression terms",html:"<p>Germany and Italy renounced direct aggressive war. Major exercises near sensitive borders required notification, and an emergency consultation mechanism opened when a client crisis threatened escalation. Each power pledged to discourage recognized clients from beginning war against the other system.</p>"},
      {id:"france",title:"The divided French settlement",html:"<p>Northern France and Occitania were barred from offensive reunification war. The clause preserved rival claims and identities while denying either patron an accepted route to solve the division through a client invasion.</p>"},
      {id:"serbia",title:"Serbia and continental passage",html:"<p>Italy retained political primacy in Serbia. Germany reduced direct military and intelligence interference while preserving rail transit, industrial contracts, communications, and commercial access through the Serbian state.</p>"},
      {id:"bulgaria",title:"The Bulgarian ambiguity",html:"<p>Bulgaria remained deliberately unresolved. Neither signatory accepted exclusive control by the other, and the convention regulated sudden military change while leaving officer influence, air access, railway rights, Black Sea policy, and economic orientation contested.</p>"},
      {id:"turkey",title:"Turkey and the Straits",html:"<p>Ankara initially feared that non-aggression would become a German–Italian condominium. Continued disagreement over Bulgaria, Greece, Syria, the Aegean, Caucasian trade, naval passage, and the Straits preserved Turkey's ability to balance between the systems.</p>"},
      {id:"scope",title:"Détente without alliance",html:"<p>Commercial passage and strategic-notification arrangements survived, and Italian participation at the Orbitaler Raumhafen continued. No integrated command, mutual-defense obligation, common foreign policy, or final partition of the Balkans followed.</p>"},
      {id:"legacy",title:"Place in the 1985 settlement system",html:"<p>Verona complemented the <a href='tehran-concord.html'>Tehran Concord</a>. Tehran managed Germany's eastern rivalry with Japan; Verona bounded its southern rivalry with Italy. Britain accepted narrower safety and incident agreements while rejecting comparable recognition of Germany's European order.</p>"}
    ],
    related:[{href:"german-italian-rivalry.html",kicker:"Strategic background",label:"German–Italian Strategic Rivalry"},{href:"tehran-concord.html",kicker:"Parallel 1985 settlement",label:"Tehran Concord"},{href:"italian-protectorate-serbia.html",kicker:"Balkan clause",label:"Italian Protectorate of Serbia"},{href:"bulgaria.html",kicker:"Deliberately unresolved state",label:"Bulgaria"},{href:"turkey.html",kicker:"Balancing state",label:"Turkey"},{href:"italy.html",kicker:"Signatory",label:"Italy"},{href:"germany.html",kicker:"Signatory",label:"Greater German Reich"}],
    facts:[["Formal name","Verona Non-Aggression Convention"],["Date","Late 1985"],["Parties","Germany and Italy"],["Character","Non-aggression and crisis management"],["Serbia","Italian political primacy; German transit rights"],["Bulgaria","Deliberately unresolved"],["French states","Offensive reunification barred"],["Alliance created","No"]]
  }),

  "raumbote-i": keystoneArticle({
    title:"Raumbote I",
    category:"Spaceflight",
    eyebrow:"First artificial satellite · 1957",
    infoboxKicker:"German orbital spacecraft",
    landscape:{src:"assets/diagrams/raumbote-i.svg",alt:"Diagram of Raumbote I passing over Earth while radio tracking connects Peenemünde, continental stations and foreign observers",caption:"The small satellite mattered less for its payload than for the continental system demonstrated by its orbit"},
    lead:"Raumbote I was the world's first artificial satellite, launched by Germany in 1957. The spacecraft carried a limited radio and scientific payload, but its confirmed orbit demonstrated coordinated launch, guidance, tracking, telemetry, materials, computing, and range operations. Its signal and the retrospective film released after orbital confirmation began the international space race.",
    canon:"The name and meaning, 1957 date, status as the first artificial satellite, post-confirmation announcement, limited scientific and radio payload, retrospective documentary, international strategic shock, and role in Wolfgang's childhood are established. October is the favored working month; exact launch date, launch site, orbit, mass, dimensions, launcher designation, frequencies, experiment list, and operating lifetime remain open.",
    sections:[
      {id:"program",title:"Development program",html:"<p>Peenemünde's postwar rocket establishment joined launch vehicles, guidance, telemetry, tracking, materials, and operations under Wernher von Braun's station-first program. Military support persisted because the same systems served missiles, reconnaissance, communications, and naval surveillance.</p>"},
      {id:"name",title:"Name",html:"<p><em>Raumbote</em> means “space messenger.” The designation distinguished the compact orbital instrument from a larger <em>Raumboot</em> or space boat and supplied the program with a concise public symbol.</p>"},
      {id:"launch",title:"Launch and announcement",html:"<p>Germany announced the mission only after tracking confirmed stable orbit. Program histories generally place the launch around October 1957, though the date and range remain outside settled canon.</p>"},
      {id:"spacecraft",title:"Spacecraft and signal",html:"<p>The satellite carried limited radio and scientific equipment. Its repeated signal allowed German and foreign stations to establish orbital passage, estimate its path, and experience a machine crossing political frontiers beyond conventional air defense.</p>"},
      {id:"film",title:"The retrospective documentary",html:"<p><a href='raumbote-eins-film.html'><em>Raumbote Eins: Der Weg über die Erde</em></a> assembled genuine classified development footage into a polished national narrative. Engineers, controllers, workshops, failures, and launches became part of a durable German documentary culture.</p>"},
      {id:"britain",title:"Silent Overflight",html:"<p>Britain experienced the orbit as the <a href='silent-overflight.html'>Silent Overflight</a>. Newspapers asked whether later satellites could photograph bases, direct U-boats, relay orders, or carry weapons, prompting the Commonwealth Space and Signals Board and High Mast tracking network.</p>"},
      {id:"america",title:"The American satellite shock",html:"<p>Washington joined high-speed aviation, missiles, computing, and orbit into a national aerospace problem. The response produced United States Aerospace Command and a pilot-centered promise to reach orbit through runway-launched spaceplanes.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>Raumbote I gave the late-1950s applied-systems takeoff one public story. It also transformed Wolfgang's childhood interest in machines and maps into a lifelong space vocation, linking the first signal to the later Raumhafen, Moon program, and Marsplan.</p>"}
    ],
    related:[{href:"space-programs.html",kicker:"Wider chronology",label:"The Space Race"},{href:"raumbote-eins-film.html",kicker:"Official documentary",label:"Raumbote Eins"},{href:"silent-overflight.html",kicker:"British reaction",label:"Silent Overflight"},{href:"rocket-awakening.html",kicker:"American reaction",label:"Rocket Awakening"},{href:"wernher-von-braun.html",kicker:"Program architect",label:"Wernher von Braun"},{href:"applied-systems-takeoff.html",kicker:"Industrial context",label:"Applied-Systems Takeoff"}],
    facts:[["Country","Greater German Reich"],["Launch year","1957"],["Working month","October"],["Type","Artificial satellite"],["Historical distinction","First object placed in Earth orbit"],["Payload","Radio and limited scientific instruments"],["Announcement","After orbital confirmation"],["Detailed specifications","Open"]],
    categories:["Germany","Spaceflight","Satellites","1957"]
  }),

  "van-deuren-plan": keystoneArticle({
    title:"Van-Deuren Plan",
    category:"Mittelafrika",
    eyebrow:"Lower Congo development plan · 1925–1948",
    infoboxKicker:"Belgian engineering inheritance",
    landscape:{src:"assets/diagrams/van-deuren-plan.svg",alt:"Diagram showing Atlantic port, Lower Congo navigation works, hydroelectric dams, industrial centers and a connection toward Pool Malebo",caption:"Van Deuren's Lower Congo system became the technical seed for a much larger German imperial project"},
    lead:"The Van-Deuren Plan was Pierre Van Deuren's integrated proposal for navigation, hydroelectric power, ports, and industrial development in the Lower Congo. Conceived in 1925 and published in 1928, it entered German usage after the 1947 seizure of Belgian colonial and SYNEBA archives. The name properly refers to the inherited lower-river concept, not the later decision to flood the central basin at Kongowerk scale.",
    canon:"The 1925 conception, 1926 Congo survey, 1928 publication, principal navigation-power-port elements, SYNEBA study program, 1947 archival seizure, 1948 consultation, three-option commission process, and distinction from the final high-water plan are established. Exact German translation, seized dossier contents, consultant meetings, memoranda, survey revisions, and Van Deuren's private wording remain open.",
    sections:[
      {id:"origins",title:"Belgian origins",html:"<p>Van Deuren approached the Lower Congo as a connected transport and energy problem. Sea-going access toward Stanley Pool, hydroelectric works at the cataracts, an Atlantic port at Banana, and new industrial centers would reinforce one another.</p>"},
      {id:"publication",title:"The 1925 proposal and 1928 publication",html:"<p>An October 1925 memorandum set out the scheme. Van Deuren surveyed the region in 1926 and published <em>Aménagement du Bas-Congo</em> in 1928, giving the project a detailed engineering and public form.</p>"},
      {id:"syneba",title:"SYNEBA studies",html:"<p>The Syndicat d'Études du Bas-Congo organized studies of ports, power, and navigation from 1929. Van Deuren directed surveys and investigations during the early program, while later Belgian work increasingly separated Inga generation from complete river regulation.</p>"},
      {id:"abandonment",title:"Prewar abandonment",html:"<p>Depression finance, technical risk, uncertain industrial demand, and the ability to develop Inga power through narrower works weakened the integrated scheme. The Belgian colonial government did not adopt the full program before the Second World War.</p>"},
      {id:"seizure",title:"German acquisition of the archives",html:"<p>German officials seized colonial-ministry, railway, port, hydrological, and SYNEBA records in 1947. German-aligned Belgium was compelled to supply surviving engineers and documentation to the new Mittelafrika administration.</p>"},
      {id:"commission",title:"The 1948 commission",html:"<p>The <a href='kongo-ausbaukommission.html'>Kongo-Ausbaukommission</a> heard Van Deuren and examined three paths: Inga generation alone, regulated Lower Congo navigation and power, or a full-basin system with the Malebo control structure and staged central impoundment.</p>"},
      {id:"distinction",title:"Van Deuren and the high-water plan",html:"<p>Van Deuren supported dams, navigation, industry, ports, and electrical development. He did not author the final basin-flooding scale chosen by Hitler. Albert Speer's bureaucracy integrated the captured concept; Hitler selected the irreversible geographical monument.</p>"},
      {id:"memory",title:"Appropriation and memory",html:"<p>German propaganda described Kongowerk as completion of an old European vision. Belgian engineers and exiles argued that the Reich attached Van Deuren's respected name to a colonial project whose human coercion and central reservoir he had never endorsed.</p>"}
    ],
    related:[{href:"pierre-van-deuren.html",kicker:"Originating engineer",label:"Pierre Van Deuren"},{href:"kongo-ausbaukommission.html",kicker:"German evaluation",label:"Kongo-Ausbaukommission"},{href:"kongo-gesamtwerk.html",kicker:"Imperial successor",label:"Kongo-Gesamtwerk"},{href:"inga-werke.html",kicker:"Lower-river component",label:"Inga-Werke"},{href:"malebo-sperrwerk.html",kicker:"High-water addition",label:"Malebo-Sperrwerk"},{href:"kongosee.html",kicker:"Resulting reservoir",label:"Kongosee"}],
    facts:[["Originator","Pierre Van Deuren"],["First proposal","1925"],["Published form","1928"],["Original scope","Lower Congo"],["Principal fields","Navigation, power, port, industry"],["German archival acquisition","1947"],["Commission review","1948"],["Central-basin inundation","Not part of Van Deuren's original plan"]],
    additionalSources:[{href:"https://archives.africamuseum.be/agents/corporate_entities/12",label:"AfricaMuseum Archives — Lower Congo and Inga study institutions"},{href:"https://search.worldcat.org/fr/title/37389703",label:"WorldCat — Projet de mise en valeur intégrale du fleuve Congo, 1925"}]
  }),

  "pierre-van-deuren": keystoneArticle({
    title:"Pierre Van Deuren",
    category:"People",
    eyebrow:"Belgian general, mathematician, and engineer · 1878–1956",
    infoboxKicker:"Belgian military engineer",
    landscape:{src:"assets/diagrams/pierre-van-deuren.svg",alt:"Career timeline connecting military engineering, mathematical teaching, wartime communications, the Van Deuren mortar, and Lower Congo development",caption:"Van Deuren's career joined mathematical instruction, military engineering, communications, weapons design, and colonial infrastructure"},
    lead:"Pierre Van Deuren was a Belgian military engineer, mathematician, professor, and honorary major general whose Lower Congo development studies supplied the inherited technical foundation of the Kongowerk. After Germany acquired the Belgian Congo, the elderly Van Deuren was compelled to explain his earlier plan to German authorities. He remained a contested consultant rather than the author of the final high-water reservoir.",
    canon:"Van Deuren's historical birth, death, education, military career, professorship, wartime work, mortar, Congo travel, publications, and SYNEBA role follow the surviving record. His post-1947 consultation, politically uncomfortable position, distinction from the final plan, and appropriation of his reputation are established in-setting. Exact travel restrictions, correspondence, testimony, private views, and final relationship with German and Belgian institutions remain open.",
    sections:[
      {id:"early",title:"Early life and education",html:"<p>Van Deuren was born at Tervuren on 5 May 1878. Trained through the Royal Military Academy and its engineering application school, he completed a doctorate in physical and mathematical sciences at the University of Paris in 1904.</p>"},
      {id:"teaching",title:"Military science and teaching",html:"<p>He taught probability, geodesy, and astronomy at the Royal Military Academy and served as an examiner. His career linked abstract mathematics to surveying, communications, artillery, transport, and hydraulic engineering.</p>"},
      {id:"war",title:"First World War",html:"<p>During the First World War he directed military telegraphy and telephony before serving in trench artillery. He designed the 70 mm Van Deuren mortar, an effective Allied response to German trench weapons, and ended the war as a colonel of engineers.</p>"},
      {id:"congo",title:"Lower Congo studies",html:"<p>Van Deuren traveled to the Congo in 1926 to study navigation between Matadi and Léopoldville, deep-water access, and hydroelectric development. His scheme placed major barrages and generating works inside a transport system rather than treating power as an isolated station.</p>"},
      {id:"publication",title:"Publication and study institutions",html:"<p><em>Aménagement du Bas-Congo</em> appeared in 1928. SYNEBA was formed in 1929 to study port, power, and navigation questions, and Van Deuren directed important surveys through the early 1930s. He continued publishing on Lower Congo transport and infrastructure.</p>"},
      {id:"occupation",title:"The German colonial transfer",html:"<p>German officials seized the Belgian archives in 1947 and compelled surviving technical personnel to assist their review. Van Deuren entered the record as an elderly expert whose authority was useful to a regime he did not control.</p>"},
      {id:"commission",title:"Kongo-Ausbaukommission",html:"<p>Van Deuren explained his lower-river plan to the 1948 commission. His testimony supported navigation, power, ports, and industry. It did not endorse the later Malebo barrier, the full central-basin reservoir, forced clearances, or the colonial registration system attached by German institutions.</p>"},
      {id:"death",title:"Death and contested legacy",html:"<p>Van Deuren died at Etterbeek on 26 July 1956. German accounts presented him as the Belgian precursor of Kongowerk. Belgian professional and exile circles defended a narrower legacy and accused the Reich of using his name to legitimize a project transformed beyond his design.</p>"}
    ],
    related:[{href:"van-deuren-plan.html",kicker:"Principal project",label:"Van-Deuren Plan"},{href:"kongo-ausbaukommission.html",kicker:"Postwar consultation",label:"Kongo-Ausbaukommission"},{href:"kongo-gesamtwerk.html",kicker:"Later appropriation",label:"Kongo-Gesamtwerk"},{href:"inga-werke.html",kicker:"Hydroelectric legacy",label:"Inga-Werke"},{href:"belgium.html",kicker:"Country",label:"Belgium"},{href:"mittelafrika.html",kicker:"Postwar setting",label:"Mittelafrika"}],
    facts:[["Born","5 May 1878 · Tervuren, Belgium"],["Died","26 July 1956 · Etterbeek, Belgium"],["Nationality","Belgian"],["Fields","Military engineering and mathematics"],["Rank","Honorary major general"],["Academic role","Professor, Royal Military Academy"],["Major publication","Aménagement du Bas-Congo, 1928"],["In-setting role","Consultant to the 1948 Kongo-Ausbaukommission"]],
    additionalSources:[{href:"https://www.kaowarsom.be/documents/BULLETINS_MEDEDELINGEN/1957-1.pdf",label:"Royal Academy for Overseas Sciences — Pierre Van Deuren, 1878–1956"},{href:"https://archives.africamuseum.be/agents/corporate_entities/12",label:"AfricaMuseum Archives — SYNEBA and Inga study history"},{href:"https://fr.wikipedia.org/wiki/Pierre_Van_Deuren",label:"French Wikipedia — Pierre Van Deuren"}],
    categories:["People","Belgium","Engineering","Mittelafrika","Hydroelectricity"]
  })
});

const addKeystoneRelated = (id, items) => {
  const article = window.deepArticles[id];
  if (!article) return;
  article.related = article.related || [];
  for (const item of items) {
    if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
  }
};

addKeystoneRelated("operation-covenant", [{href:"operation-al-awda.html",kicker:"Iraqi opening",label:"Operation al-ʿAwda"}]);
addKeystoneRelated("muscat-articles", [{href:"operation-al-awda.html",kicker:"War's opening",label:"Operation al-ʿAwda"}]);
addKeystoneRelated("german-italian-rivalry", [{href:"verona-convention.html",kicker:"1985 settlement",label:"Verona Convention"}]);
addKeystoneRelated("silent-overflight", [{href:"raumbote-i.html",kicker:"Triggering spacecraft",label:"Raumbote I"}]);
addKeystoneRelated("raumbote-eins-film", [{href:"raumbote-i.html",kicker:"Subject spacecraft",label:"Raumbote I"}]);
addKeystoneRelated("kongo-gesamtwerk", [{href:"van-deuren-plan.html",kicker:"Belgian technical seed",label:"Van-Deuren Plan"},{href:"pierre-van-deuren.html",kicker:"Originating engineer",label:"Pierre Van Deuren"}]);
addKeystoneRelated("kongo-ausbaukommission", [{href:"van-deuren-plan.html",kicker:"Inherited proposal",label:"Van-Deuren Plan"},{href:"pierre-van-deuren.html",kicker:"Consultant",label:"Pierre Van Deuren"}]);
