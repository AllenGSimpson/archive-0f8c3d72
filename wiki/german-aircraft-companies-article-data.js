window.deepArticles = window.deepArticles || {};

const germanAircraftCompanySources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — German design authorities, project registers, and aircraft lineages"},
  {href:"../extrapolatedWWIIDevelopments.md",label:"Extrapolated WWII Developments — German wartime aircraft production and specialization"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German victory, aviation, and postwar industrial continuity"},
  {href:"../transcript.md",label:"Master Transcript — German aircraft roster and design development"}
];

const germanAircraftCompanyRelated = [
  {href:"luftwaffe.html",kicker:"Principal customer",label:"Luftwaffe"}
];

const germanAircraftListSection = rows => ({
  id:"aircraft",title:"List of Aircraft",
  html:`<p>The internal designation records the manufacturer's project or development code where established. “Not fixed” means that the surviving canon gives an official service designation without identifying the preceding company project number.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p" ? "<sup class='canon-note' data-provenance='p'>[p]</sup>" : provenance === "a" ? "<sup class='canon-note' data-provenance='a'>[a]</sup>" : "<sup class='canon-note' data-provenance='e'>[e]</sup>";
    const officialCell = href ? `<a href='${href}'>${official}</a>` : official;
    return `<tr><td>${internal}</td><td>${officialCell}${note}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

const germanAircraftCompany = c => ({
  title:c.title,category:"German aircraft manufacturers",eyebrow:c.eyebrow,infoboxKicker:"Aircraft design and manufacturing company",infoboxTitle:c.infoboxTitle || c.title,
  lead:c.lead,
  canon:c.canon,
  sections:[
    {id:"formation",title:"Formation and organization",html:c.formation},
    {id:"war",title:"Wartime aircraft",html:c.war},
    {id:"postwar",title:"Postwar design authority",html:c.postwar},
    germanAircraftListSection(c.aircraft),
    {id:"position",title:"Position in 1985",html:c.position}
  ],
  related:[...germanAircraftCompanyRelated,...(c.related || [])],
  facts:c.facts,
  sources:[...germanAircraftCompanySources,...(c.primarySources || [])],
  categories:[c.title,"German aerospace industry","Aircraft manufacturers","Luftwaffe",...(c.extraCategories || [])]
});

Object.assign(window.deepArticles, {
  "messerschmitt": germanAircraftCompany({
    title:"Messerschmitt",eyebrow:"Bavaria · fighters, interceptors, and high-speed aircraft · 1923–1985",
    lead:"Messerschmitt is Germany's principal high-speed fighter and interceptor design authority. The company carries the Bf 109, Bf 110, Me 410, Me 264, Me 364, and Me 262 families through the long war, then preserves their aerodynamic and propulsion experience in the postwar heavy-interceptor branch.",
    canon:"Bayerische Flugzeugwerke and Messerschmitt's pre-divergence history, the Bf and Me wartime families, Me 262 service, Me 264 long-range operations, the Me 364 high-altitude bomber, limited HG III production and operational use, and the company's postwar interceptor design authority are established. Arado's later military-design absorption is established without a fixed date. Exact post-1948 acceptance ordinals, corporate ownership, factory allocation, employment, civil products, project-to-service mappings, and 1985 legal form remain open.",
    formation:"<p>Willy Messerschmitt's design organization developed inside Bayerische Flugzeugwerke at Augsburg. The company adopted the Messerschmitt name before the divergence while older Bf designations remained in service.</p>",
    war:"<!-- altwwii-writer-block:start id=wb-g-20260815-d7m2s writer=g kind=revision created=2026-08-15T18:55:00-06:00 --><p>Bf 109 fighters and Bf 110 and Me 410 heavy fighters formed the established piston branches. Me 264 served as the long-range Ural bomber, while the redesigned Me 364 was developed during 1945–46 and fielded in limited numbers as the high-altitude bomber used over Britain in 1947.<sup class='canon-note' data-provenance='a'>[a]</sup> Me 262 became Germany's regular operational jet fighter; its HG III high-speed branch reached a short early-1947 production run and limited combat service before endurance and maintenance penalties ended it.<sup class='canon-note' data-provenance='a'>[a]</sup></p><!-- altwwii-writer-block:end -->",
    postwar:"<p>The company controls the <strong>Me P.####</strong> internal project register. It supplies the heavy and all-weather interceptor line and later receives Arado's military design bureau, while accepted Arado aircraft retain their original Ar designation.</p>",
    aircraft:[
      ["Bf P.1034","Bf 109",null,"p"],["Bf P.1035","Bf 110",null,"p"],["Me 410","Me 410",null,"a"],["Me P.1064","Me 264",null,"a"],["Me 364","Me 364 Höhenbomber",null,"a"],["Me P.1065","Me 262A-1","me-262a-1.html","a"],
      ["Me 262 HG III","Limited-service high-speed development","me-262f.html","a"],["Me P.1092B-2","No service designation — study",null,"a"]
    ],
    position:"<p>By 1985 Messerschmitt remains Germany's principal heavy-interceptor authority and a leading integrator of radar, missiles, propulsion, and high-altitude airframes. Factory work may be distributed beyond the design company.</p>",
    related:[{href:"arado.html",kicker:"Absorbed military design bureau",label:"Arado"}],
    facts:[["Founder and principal designer","Willy Messerschmitt"],["Historical center","Augsburg, Bavaria"],["Internal project register","Me P.####"],["Wartime jet","Me 262"],["Postwar branch","Heavy and all-weather interceptors"],["1985 position","Principal German interceptor design authority"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Messerschmitt",label:"Wikipedia — Messerschmitt company history"}]
  }),

  "focke-wulf": germanAircraftCompany({
    title:"Focke-Wulf",eyebrow:"Bremen · fighters, handling research, and close-support aircraft · 1923–1985",
    lead:"Focke-Wulf is the Bremen aircraft manufacturer whose Fw 190 and Ta 152 piston fighters, Ta 183 jet work, and continuing fighter and close-support branches make it Germany's principal single-seat combat-aircraft design authority.",
    canon:"The 1923 foundation, Bremen base, Focke and Wulf founders, Kurt Tank design leadership, Fw 190 and Ta 152 families, and Ta 183 work are historical anchors. Ta 183 reaches late-war production or immediate postwar adoption, and the postwar Focke-Wulf fighter and close-support lines are fixed at the level of design school. Exact acceptance ordinals, ownership, factories, production, mergers, civil products, project mappings, and 1985 corporate form remain open.",
    formation:"<p>Henrich Focke, Georg Wulf, and Werner Naumann founded the company at Bremen in 1923. Kurt Tank later led the design office associated with its major military-aircraft families.</p>",
    war:"<p>Fw 190 fighters and fighter-bombers become a major Luftwaffe family. Ta 152 high-altitude aircraft extend the piston line, while Ta 183 work supplies a compact swept-wing jet-fighter school for the victory generation.</p>",
    postwar:"<p>The company uses an <strong>Fw P.###</strong> project register. It repeatedly explores wing planform, fighter handling, battlefield survivability, and the separation of air-superiority aircraft from dedicated close support.</p>",
    aircraft:[
      ["Fw 190","Fw 190",null,"p"],["Ta 152","Ta 152",null,"a"],["Ta 183","Ta 183",null,"a"]
    ],
    position:"<p>By 1985 Focke-Wulf maintains two mature design branches: digital air-superiority fighters and armored close-support aircraft. It remains institutionally distinct from Messerschmitt's heavier interceptor office.</p>",
    facts:[["Founded","1923"],["Historical center","Bremen"],["Founders","Henrich Focke · Georg Wulf · Werner Naumann"],["Principal wartime designer","Kurt Tank"],["Internal project register","Fw P.###"],["1985 branches","Air superiority · close support"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Focke-Wulf",label:"Wikipedia — Focke-Wulf company history"}]
  }),

  "horten-gotha": germanAircraftCompany({
    title:"Horten-Gotha",eyebrow:"Flying-wing design authority and Gotha production organization · 1940s–1985",
    lead:"Horten-Gotha is the German flying-wing design and production organization created around the Horten brothers' aerodynamic office and Gothaer Waggonfabrik's industrial capacity. Horten controls military design authority and the internal H project ledger, while Gotha provides the public company identity, production organization, and civil brand. The Ho 229 became a long-running specialist operational family, the Horten XVIII won the first postwar strategic-bomber competition, and the Gotha Weltblick carried the same structural and flight-control school into civil aviation.",
    canon:"The Horten brothers' pre-divergence glider and flying-wing work, Gotha manufacture, Ho 229 operational family, Horten XVIII postwar production, the civilian Gotha Weltblick airliner, and postwar Horten-Gotha design authority are established. Exact charter, ownership, factories, production totals, internal project mappings, post-1948 service ordinals, and 1985 corporate name remain open.",
    formation:"<p>Walter and Reimar Horten developed tailless gliders and powered flying wings before the divergence. Their office supplied aerodynamic concept, configuration work, and the internal H project sequence. Gothaer Waggonfabrik supplied the factory organization, tooling, production engineering, and administrative capacity needed to turn the design group into a continuing manufacturer.</p><p>The partnership did not erase the two identities. Horten remained the name used for the design lineage and military authority; Gotha remained the name most visible to civil customers and passengers. Production engineers translated thin aerodynamic shapes and integrated center sections into structures that could be assembled, inspected, repaired, and delivered in series.</p><p>The accepted record does not fix the combined firm's legal charter, ownership shares, headquarters, plant list, formal date of consolidation, or division of management posts.</p>",
    war:"<p>The H IX became the <a href='ho-229a-2.html'>Ho 229 operational family</a>. It served as a prestigious specialist aircraft rather than the standard machine of every fighter wing. Early roles included high-altitude escort, fast reconnaissance, penetration attack, and other missions able to justify difficult handling, specialized maintenance, and limited unit experience.</p><p>Its planform reduced radar return as a secondary consequence of shape. Wartime and immediate postwar success depended more directly on speed, range, internal volume, engine integration, and the accumulation of experience with unconventional stability and control. Training, landing behavior, weapons employment, engine access, and field repair limited wider substitution for conventional Messerschmitt and Focke-Wulf fighters.</p><p>The later claim that the first aircraft embodied a complete stealth doctrine is not retained. Signature management became a deliberate program only after radar measurement and postwar design work identified which aspects of the planform were useful.</p>",
    postwar:"<p>Horten remained the military design authority, so accepted aircraft used the <strong>Ho</strong> prefix even when Gotha was the public-facing corporation. Internal designs retained the <a href='horten-gotha-project-register.html'>H plus Roman-numeral system</a>, followed by configuration letters and prototype numbers. Company projects could reach drawings, models, test articles, or privately financed flight before receiving a national service identity.</p><p>The <a href='horten-xviii.html'>Horten XVIII</a> defeated the conventional <a href='messerschmitt-me-464.html'>Me 464 proposal</a> and sustained the large military-aircraft branch. Its eight-engine central wing, four dorsal stabilizing fins, drag controls, automatic stabilization, pressure-volume work, and internal stores created a continuing engineering base. The bomber program linked aerodynamicists with engine, control, bombing, navigation, structural, and production groups on a scale the Ho 229 had not required.</p><p>The purpose-built <a href='gotha-weltblick.html'>Gotha Weltblick</a> kept pressure-vessel, high-capacity, civil-certification, and flying-wing production knowledge active outside military orders. Civil experience added passenger evacuation, airport handling, cabin pressure, inspection, airline maintenance, and high-cycle service to a school previously dominated by military requirements.</p><p>Military and civil programs shared some structures, controls, production methods, and supplier knowledge while retaining separate certification and operating needs. The Weltblick was not a bomber conversion, and later military aircraft were not simply armed airliners.</p>",
    aircraft:[
      ["H IX","Ho 229","ho-229a-2.html","a"],["H XVIII","Accepted service designation not fixed","horten-xviii.html","a"],["Civil project number not fixed","Gotha Weltblick","gotha-weltblick.html","a"],["Later H projects","Service identities not reconstructed",null,"e"]
    ],
    position:"<p>By 1985 Horten-Gotha remained Germany's specialist flying-wing authority. It competed in penetration, reconnaissance, strategic bombing, and selected fighter work while maintaining a civil long-range branch. Messerschmitt and Focke-Wulf continued to win requirements for which conventional stability, field handling, training, or maintenance mattered more than Horten's aerodynamic advantages.</p><p>Analog and later digital flight-control development reduced the penalty of tailless instability. Radar testing from the 1950s onward turned the earlier accidental signature advantage into deliberate study of buried engines, inlet and exhaust treatment, internal weapons, surface alignment, antenna placement, and radar-absorbing material.</p><p>The firm retained specialist facilities for large integrated structures, control-law development, radar-signature measurement, pressure testing, and civil cabin manufacture. Exact 1985 programs, workforce, turnover, plant locations, ownership, production totals, and accepted service ordinals remain open.</p>",
    related:[{href:"horten-gotha-project-register.html",kicker:"Internal design ledger",label:"Horten-Gotha Project Register"},{href:"horten-xviii.html",kicker:"Postwar bomber",label:"Horten XVIII"},{href:"messerschmitt-me-464.html",kicker:"Competing proposal",label:"Messerschmitt Me 464"},{href:"gotha-weltblick.html",kicker:"Civil airliner",label:"Gotha Weltblick"}],
    facts:[["Design authorities","Walter and Reimar Horten"],["Production partner","Gothaer Waggonfabrik"],["Military prefix","Ho"],["Internal project register","H plus Roman numeral"],["Defining wartime family","Ho 229"],["Postwar production aircraft","Horten XVIII · Gotha Weltblick"],["Postwar fields","Penetration · reconnaissance · bombers · civil airliners"],["Technical specialties","Flying-wing structures · controls · signature management"],["1985 position","German flying-wing specialist"]],
    primarySources:[{href:"https://airandspace.si.edu/collection-objects/horten-ho-229-v3/nasm_A19600324000",label:"Smithsonian National Air and Space Museum — Horten Ho 229 V3 and historical background"}],extraCategories:["Flying wings"]
  }),

  "junkers-aircraft": germanAircraftCompany({
    title:"Junkers aircraft",infoboxTitle:"Junkers Flugzeug- und Motorenwerke",eyebrow:"Dessau · metal aircraft, research, transports, and maritime systems · 1915–1985",
    lead:"Junkers is the Dessau aircraft and engine organization associated with all-metal construction, transports, bombers, research aircraft, and postwar maritime systems. Its EF research culture survives victory and sustains experimental, heavy-aircraft, and maritime branches without fixing a complete postwar service catalog.",
    canon:"Hugo Junkers, the Dessau organization, all-metal aircraft tradition, Ju 52, Ju 87, Ju 88, Ju 188, Ju 287, and EF studies are historical or setting-established anchors. EF 131 is a sixteen-aircraft evaluation program rather than a standard bomber fleet, while the postwar Junkers maritime branch is fixed at the level of design school. Exact accepted types, ownership after state intervention, factories, engine divisions, production totals, project mappings, and 1985 legal form remain open.",
    formation:"<p>Hugo Junkers established a distinctive metal-aircraft school at Dessau. Corrugated and later stressed-skin construction, transports, engines, wind-tunnel work, and systematic research made the organization broader than a single military family.</p>",
    war:"<p>Ju 52 transports, Ju 87 dive bombers, and the Ju 88 and Ju 188 families cover transport, attack, bombing, night fighting, and reconnaissance. Ju 287 and related EF work investigate forward sweep and high-speed bomber layouts.</p>",
    postwar:"<p>Junkers uses a <strong>Ju EF ###</strong> aircraft-project register and an <strong>EFo</strong> register for research not yet mature enough to be an aircraft program. The later design branch emphasizes maritime patrol, electronic reconnaissance, missile control, and heavy-aircraft systems.</p>",
    aircraft:[
      ["Ju 52","Junkers Ju 52",null,"p"],["Ju 87","Junkers Ju 87",null,"a"],["Ju 88","Junkers Ju 88",null,"a"],["Ju 188","Junkers Ju 188",null,"a"],["Ju 287 / EF 131","EF 131",null,"a"]
    ],
    position:"<p>By 1985 Junkers is Germany's principal long-range maritime-aircraft and systematic research authority. Its projects integrate radar, electronic support, antisubmarine equipment, missiles, and long-duration airframes.</p>",
    facts:[["Founder","Hugo Junkers"],["Historical center","Dessau"],["Internal aircraft register","Ju EF ###"],["Research register","EFo"],["Wartime fields","Transports · bombers · attack · reconnaissance"],["1985 branch","Maritime surveillance and missile control"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Junkers",label:"Wikipedia — Junkers company history"}],extraCategories:["Dessau"]
  }),

  "heinkel": germanAircraftCompany({
    title:"Heinkel",infoboxTitle:"Ernst Heinkel Flugzeugwerke",eyebrow:"Rostock and northern Germany · bombers, night fighters, jets, and engines · 1922–1985",
    lead:"Heinkel is the aircraft and engine manufacturer founded by Ernst Heinkel. Its He 111, He 177, He 219, and He 162 programs span bombers, night fighters, and light jets, while the postwar company preserves an independent He project register and propulsion capability.",
    canon:"Ernst Heinkel's 1922 company, Rostock-area works, record aircraft, He 111, He 177, He 219, He 162, and engine work are historical or setting-established anchors. Heinkel continues aircraft and engine work after victory under its own project register. Exact postwar accepted aircraft, ownership, factories, production, acquisitions, and 1985 organization remain open.",
    formation:"<p>Ernst Heinkel founded his company in 1922. Northern coastal plants supported seaplanes, civil aircraft, record attempts, military production, and a large design organization.</p>",
    war:"<p>He 111 medium bombers, He 177 heavy bombers, and He 219 night fighters occupy different wartime roles. He 162 work remains confined to paper studies and prototypes; it does not create an operational Volksjäger fleet or displace the Me 262 and Ta 183 branches.</p>",
    postwar:"<p>The company retains an <strong>He P.####</strong> project register and continues both aircraft and engine work. Its accepted postwar service sequence remains open.</p>",
    aircraft:[
      ["He 111","Heinkel He 111",null,"a"],["He 177","Heinkel He 177",null,"a"],["He 219","Heinkel He 219",null,"a"],["He P.1073","He 162",null,"a"]
    ],
    position:"<p>By 1985 Heinkel remains a recognized aircraft and propulsion design house, although the surviving canon has not assigned it a clean-register frontline fleet comparable to the Messerschmitt, Focke-Wulf, Arado, Horten, or Junkers branches.</p>",
    facts:[["Founded","1922"],["Founder","Ernst Heinkel"],["Historical region","Rostock and northern Germany"],["Internal project register","He P.####"],["Wartime fields","Bombers · night fighters · light jets"],["Postwar accepted-aircraft sequence","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Heinkel",label:"Wikipedia — Heinkel company history"}]
  }),

  "arado": germanAircraftCompany({
    title:"Arado",infoboxTitle:"Arado Flugzeugwerke",eyebrow:"Brandenburg · fast bombers and reconnaissance aircraft · 1925–postwar absorption",
    lead:"Arado is the German aircraft manufacturer associated with trainers, naval aircraft, and the Ar 234 jet bomber and reconnaissance family. After victory it continues fast-strike and reconnaissance work before its military design bureau is absorbed by Messerschmitt.",
    canon:"Arado's pre-divergence company history, Brandenburg works, trainers and naval aircraft, Ar 234 jet development, postwar fast-strike and reconnaissance branch, and later absorption of the military design bureau by Messerschmitt are established. Later service designations, the absorption date, civil remainder, ownership, factory transfer, workforce, and 1985 legal shell remain open.",
    formation:"<p>The company emerged from the Warnemünde and Brandenburg aircraft industry and adopted the Arado name in the 1920s. It produced trainers and military types before specializing increasingly in high-speed aircraft.</p>",
    war:"<p>The Ar 234 becomes the Luftwaffe's operational jet bomber and reconnaissance aircraft. Its speed and camera or stores capacity make it central to late-war attacks on British radar, airfields, communications, depots, factories, and naval bases.</p>",
    postwar:"<p>Arado uses an <strong>Ar E.###</strong> internal register. Its accepted aircraft retain the Ar prefix permanently even after the military bureau passes to Messerschmitt; new designs produced by the combined organization receive Me designations.</p>",
    aircraft:[
      ["Ar E.370","Ar 234C-3 Blitz","ar-234c-3-blitz.html","a"]
    ],
    position:"<p>By 1985 the Arado name remains attached to the accepted Blitz aircraft and their service history. The independent military design bureau no longer exists; the exact status of civil, production, and corporate remnants remains open.</p>",
    related:[{href:"messerschmitt.html",kicker:"Successor design authority",label:"Messerschmitt"}],
    facts:[["Historical centers","Warnemünde · Brandenburg"],["Internal project register","Ar E.###"],["Defining wartime aircraft","Ar 234"],["Postwar branch","Fast strike and reconnaissance"],["Later design authority","Messerschmitt"],["Absorption date","Open"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Arado_Flugzeugwerke",label:"Wikipedia — Arado company history"}]
  }),

  "dornier": germanAircraftCompany({
    title:"Dornier",infoboxTitle:"Dornier Flugzeugwerke",eyebrow:"Friedrichshafen and Lake Constance · metal aircraft and long-range systems · 1914–1985",
    lead:"Dornier is the aircraft manufacturer founded around Claude Dornier's metal-aircraft work at Friedrichshafen. Flying boats, transports, bombers, reconnaissance aircraft, and high-speed experimental types give it a broad wartime technical base that survives the German victory settlement.",
    canon:"Claude Dornier's Zeppelin-era design work, Lake Constance organization, metal-aircraft practice, the Do 17, Do 18, Do 24, Do 26, and Do 217 families, and Do 335 prototype testing are historical anchors or permitted wartime continuations. Continued postwar German aircraft work is established at the industry level. Exact ownership, factories, accepted postwar types, civil catalog, production totals, and 1985 legal form remain open.",
    formation:"<p>Claude Dornier began aircraft design inside the Zeppelin organization during the First World War. The Lake Constance works developed large metal flying boats and landplanes before the company identity was separated into a continuing aircraft concern.</p>",
    war:"<!-- altwwii-writer-block:start id=wb-g-20260815-h4v8q writer=g kind=revision created=2026-08-15T18:48:00-06:00 --><p>Do 17 and Do 217 aircraft cover bomber, reconnaissance, and night-fighter missions. Do 18, Do 24, and Do 26 preserve a maritime branch, while the Do 335 reaches prototype testing as a high-speed twin-engine experimental aircraft late in the war but does not proceed into production.<sup class='canon-note' data-provenance='a'>[a]</sup></p><!-- altwwii-writer-block:end -->",
    postwar:"<p>Dornier retains knowledge in metal structures, hydrodynamics, distributed production, high-speed propulsion installation, and long-range aircraft. The surviving canon does not yet assign it a named clean-register military family after 1947.</p>",
    aircraft:[
      ["Do 17","Dornier Do 17",null,"p"],["Do 18","Dornier Do 18",null,"p"],["Do 24","Dornier Do 24",null,"p"],["Do 26","Dornier Do 26",null,"p"],["Do 217","Dornier Do 217",null,"p"],["Do 335","Dornier Do 335 prototype",null,"a"]
    ],
    position:"<p>By 1985 Dornier remains a German aircraft and advanced-systems company with a historical specialty in metal structures, maritime aircraft, unusual propulsion arrangements, and long-range development. Its exact military portfolio remains open.</p>",
    facts:[["Founder and principal designer","Claude Dornier"],["Historical center","Friedrichshafen and Lake Constance"],["Early institutional origin","Zeppelin works"],["Wartime fields","Bombers · reconnaissance · flying boats · high-speed aircraft"],["Late-war prototype","Do 335 · no production"],["1985 service-aircraft register","Open"]],
    primarySources:[{href:"https://www.dornier.com/about-us/",label:"Dornier — company and Claude Dornier history"},{href:"https://en.wikipedia.org/wiki/Dornier_Flugzeugwerke",label:"Wikipedia — Dornier Flugzeugwerke history"}],extraCategories:["Flying boats"]
  }),

  "blohm-and-voss": germanAircraftCompany({
    title:"Blohm & Voss",infoboxTitle:"Blohm & Voss aircraft division",eyebrow:"Hamburg-Finkenwerder · maritime aircraft and experimental configurations · 1933–1985",
    lead:"Blohm & Voss is the Hamburg shipbuilding company whose aircraft division began as Hamburger Flugzeugbau in 1933. Large maritime aircraft and Richard Vogt's unconventional structural and aerodynamic studies make it a specialist research and demonstrator organization rather than a source of numerous postwar service fleets.",
    canon:"The 1933 Hamburger Flugzeugbau foundation, Finkenwerder works, 1937 incorporation as the Blohm & Voss aircraft division, Richard Vogt design leadership, and the BV 138 and BV 222 families are historical anchors. The controlling registry fixes later paper projects as demonstrator and research work rather than automatic service aircraft. Exact postwar charter, project selection, prototypes, production, and 1985 organization remain open.",
    formation:"<p>Walther and Rudolf Blohm established Hamburger Flugzeugbau as a shipyard subsidiary in 1933 and built an aircraft plant at Finkenwerder. The concern became the aircraft division of Blohm & Voss in 1937.</p>",
    war:"<p>BV 138 flying boats and BV 222 transports connect naval construction knowledge to large maritime aircraft. BV 155 and BV 238 work extends the high-altitude and very-large-aircraft branches. Richard Vogt's project office also studies asymmetric, mixed-propulsion, and unconventional layouts.</p>",
    postwar:"<p>Selected BV projects continue as prototypes, wind-tunnel programs, structures trials, and demonstrators. A company project number does not imply Luftwaffe acceptance, and the reference register expressly rejects conversion of every paper design into a service type.</p>",
    aircraft:[
      ["BV 138","Blohm & Voss BV 138",null,"p"],["BV 222","Blohm & Voss BV 222",null,"p"],["BV 155","Blohm & Voss BV 155",null,"e"],["BV 238","Blohm & Voss BV 238",null,"e"],["BV P.194","No service designation — research program",null,"a"],["BV P.215","No service designation — research program",null,"a"]
    ],
    position:"<p>By 1985 the aircraft organization remains valuable for maritime structures, configuration research, prototypes, and specialist integration. Its precise corporate relationship to the Blohm & Voss shipyard and larger German aerospace programs remains open.</p>",
    facts:[["Aircraft subsidiary founded","1933"],["Original aircraft name","Hamburger Flugzeugbau"],["Principal plant","Finkenwerder, Hamburg"],["Aircraft division name adopted","1937"],["Principal wartime designer","Richard Vogt"],["Postwar role","Research, demonstrators, and specialist structures"]],
    primarySources:[{href:"https://www.hamburg-aviation.de/en/about-us/aviation-in-hamburg/the-history-of-aviation-in-hamburg/",label:"Hamburg Aviation — history of aircraft construction in Hamburg"},{href:"https://www.walther-blohm-stiftung.de/en/history?type=98",label:"Walther Blohm Foundation — Hamburger Flugzeugbau history"}],extraCategories:["Hamburg","Flying boats","Research aircraft"]
  })
});
