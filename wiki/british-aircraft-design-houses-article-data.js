window.deepArticles = window.deepArticles || {};

const britishDesignHouseSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — British reconstruction, arsenal continuity, civil aviation, and Commonwealth defense"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — British aircraft development and postwar industrial consolidation"},
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — British aircraft lineages, missions, and service chronology"},
  {href:"../transcript.md",label:"Master Transcript — British aerospace anchors, procurement, aircraft programs, and Commonwealth industry"}
];

const britishDesignHouseArticle = config => ({
  category:"British aircraft design houses",
  eyebrow:"British aerospace industry · constituent design house · 1947–1985",
  infoboxKicker:"British aircraft design and manufacturing institution",
  ...config,
  sources:[...britishDesignHouseSources,...(config.primarySources || [])],
  categories:config.categories || ["British aircraft design houses","British aerospace industry","Aircraft manufacturers of Britain","Industrial history"]
});

const designHouseRelated = [
  {href:"aerospace-industry-of-britain.html",kicker:"National system",label:"Aerospace Industry of Britain"},
  {href:"strategic-industries-arsenal-continuity-act.html",kicker:"Postwar framework",label:"Strategic Industries and Arsenal Continuity Act"},
  {href:"british-fighter-development-1944-1964.html",kicker:"Aircraft chronology",label:"British Fighter Development"}
];

const britishAircraftListSection = rows => ({
  id:"aircraft",
  title:"List of Aircraft",
  html:`<p>The internal designation is the manufacturer's project, type, or design-office identifier. A dash indicates that the aircraft had no separate official designation in the present register.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p"
      ? "<sup class='canon-note' data-provenance='p'>[p]</sup>"
      : provenance === "a"
        ? "<sup class='canon-note' data-provenance='a'>[a]</sup>"
        : provenance === "e"
          ? "<sup class='canon-note' data-provenance='e'>[e]</sup>"
          : "";
    const internalCell = href && !official ? `<a href='${href}'>${internal}</a>${note}` : `${internal}${official ? "" : note}`;
    const officialCell = official ? `${href ? `<a href='${href}'>${official}</a>` : official}${note}` : "—";
    return `<tr><td>${internalCell}</td><td>${officialCell}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

Object.assign(window.deepArticles, {
  "hawker-aircraft": britishDesignHouseArticle({
    title:"Hawker Aircraft",infoboxTitle:"Hawker Aircraft Limited",eyebrow:"Kingston, Brooklands, and Langley · fighters and vertical flight · 1920–1985",
    lead:"Hawker Aircraft Limited is the fighter-design house at the center of Hawker Siddeley. Formed from the Sopwith works after the First World War, it becomes identified with Sydney Camm, the Hart family, Hurricane, Sea Fury, Hunter, and the P.1127–Harrier vertical-flight lineage. After the creation of Hawker Siddeley, Hawker remains a recognizable design and manufacturing identity rather than merely a vanished corporate predecessor.",
    canon:"Hawker's Sopwith inheritance, 1920 formation, 1933 company name, Sydney Camm, Kingston–Brooklands–Langley geography, Hart family, Hurricane, Sea Fury, Hunter, P.1127, and Harrier are historical anchors. The Hunter and Harrier lineages, Commonwealth export system, arsenal continuity, and preservation of constituent design names are established in-setting. Exact divisional boundaries, employment, project allocation, ownership instruments, and the legal use of the Hawker name after 1960 remain open.",
    sections:[
      {id:"formation",title:"From Sopwith to Hawker",html:"<p>H. G. Hawker Engineering Company formed in 1920 around the assets and personnel of the Sopwith Aviation Company. Thomas Sopwith, Harry Hawker, Fred Sigrist, and Bill Eyre provided continuity of finance, production, and technical experience.</p><p>The company adopted the name Hawker Aircraft Limited in 1933.</p>"},
      {id:"camm",title:"Sydney Camm and the design office",html:"<p>Sydney Camm joined the predecessor organization and became chief designer in 1925. His office developed a recognizable method: practical structure, concentrated performance, close attention to service requirements, and families of related aircraft rather than isolated demonstrations.</p><p>Kingston upon Thames directed design while Brooklands and later Langley supported manufacture and flight work.</p>"},
      {id:"interwar",title:"The Hart family",html:"<p>The Hart light bomber generated Demon, Audax, Hardy, Hind, Osprey, and related variants. Common structure and engines let Hawker, Gloster, Avro, Bristol, and other factories distribute production while retaining service familiarity.</p><p>This family approach became an important precedent for later Commonwealth standardization.</p>"},
      {id:"war",title:"Hurricane and wartime production",html:"<p>The Hurricane combined monoplane performance with manufacturing techniques familiar to existing workshops. It carried much of Fighter Command's early wartime burden and was adapted for interception, ground attack, naval use, and overseas theaters.</p><p>Typhoon and Tempest development moved the company toward more powerful engines, higher speed, and low-altitude strike.</p>"},
      {id:"postwar",title:"Sea Fury, Sea Hawk, and the jet transition",html:"<p>The Sea Fury completed Hawker's piston-fighter lineage. Experimental P.1040, P.1052, and P.1081 work explored jet propulsion, swept wings, naval operation, and high-speed stability.</p><p>The Sea Hawk entered naval service while the design office pursued a more capable land-based interceptor.</p>"},
      {id:"hunter",title:"The Hunter system",html:"<p>The <a href='hunter-f1.html'>Hunter</a> became Hawker's principal postwar fighter and one of Britain's major exports. Fighter, ground-attack, reconnaissance, and training variants supported a long service life.</p><p>Production, engines, radar, weapons, conversion work, training, and spares connected Hawker to Rolls-Royce, Armstrong Whitworth, Commonwealth air forces, and overseas customers.</p>"},
      {id:"vertical",title:"P.1127 and Harrier",html:"<p>Hawker's P.1127 work joined a compact airframe to Bristol's vectored-thrust engine. Kestrel trials developed the operating methods required for dispersed vertical and short takeoff.</p><p>The <a href='harrier-gr1.html'>Harrier</a> gave the design house a second defining postwar lineage and tied fighter design to engine integration, naval aviation, and rough-field logistics.</p>"},
      britishAircraftListSection([
        ["Hawker Hart","Hart",null,"p"],
        ["Hawker Fury","Fury",null,"p"],
        ["Hawker Hurricane","Hurricane",null,"p"],
        ["Hawker Typhoon","Typhoon",null,"a"],
        ["Hawker Tempest","Tempest",null,"a"],
        ["Hawker Fury / Sea Fury","Sea Fury",null,"a"],
        ["Hawker P.1040","Sea Hawk",null,"a"],
        ["Hawker P.1067","Hunter F.1","hunter-f1.html","a"],
        ["Hawker P.1127","Kestrel FGA.1",null,"a"],
        ["Hawker P.1127 RAF","Harrier GR.1","harrier-gr1.html","a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>Within <a href='hawker-siddeley.html'>Hawker Siddeley</a>, the Hawker name remains associated with fighter configuration, vertical flight, flight test, export support, and the Kingston tradition. Group finance and manufacturing are shared, but technical authorship remains publicly legible.</p><p>Exact late-century company law and site allocation remain open.</p>"}
    ],
    related:[...designHouseRelated,{href:"hawker-siddeley.html",kicker:"Parent group",label:"Hawker Siddeley"},{href:"hunter-f1.html",kicker:"Transonic fighter",label:"Hunter F.1"},{href:"harrier-gr1.html",kicker:"Vertical-flight lineage",label:"Harrier GR.1"},{href:"rolls-royce.html",kicker:"Principal engine partner",label:"Rolls-Royce"}],
    facts:[["Founded","1920 · as H. G. Hawker Engineering"],["Name adopted","Hawker Aircraft Limited · 1933"],["Principal designer","Sydney Camm"],["Principal centers","Kingston upon Thames · Brooklands · Langley"],["Wartime fighter","Hurricane"],["Postwar fighter","Hunter"],["Vertical-flight lineage","P.1127 · Kestrel · Harrier"],["1985 position","Constituent design house of Hawker Siddeley"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/hawker-hunter",label:"BAE Systems Heritage — Hawker Hunter"},{href:"https://heritage.baesystems.com/page/hawker-siddeley",label:"BAE Systems Heritage — Hawker Siddeley genealogy"}]
  }),

  "gloster-aircraft-company": britishDesignHouseArticle({
    title:"Gloster Aircraft Company",infoboxTitle:"Gloster Aircraft Company Limited",eyebrow:"Gloucestershire · jet pioneers and interceptors · 1917–1985",
    lead:"The Gloster Aircraft Company is the Gloucestershire design and manufacturing house that carries British military aviation from the Gladiator biplane through the first Whittle-powered experimental aircraft, the Meteor, and the Javelin. A member of the Hawker and Hawker Siddeley group before the war, Gloster supplies a distinct jet, interceptor, test, and production lineage within the postwar aerospace settlement.",
    canon:"The Gloucestershire Aircraft Company formation in 1917, Gloster name from 1926, Hawker acquisition, Brockworth and Hucclecote, Gladiator, E.28/39, Meteor, and Javelin are historical anchors. The Meteor–Javelin place in the established British fighter sequence and survival of constituent technical identities are established in-setting. Exact post-Javelin design authority, works allocation, employment, group title, and later projects remain open.",
    sections:[
      {id:"formation",title:"Gloucestershire origins",html:"<p>The Gloucestershire Aircraft Company formed in 1917 from the aircraft work of H. H. Martyn & Company. It built wartime aircraft and developed its own designs under figures including George Carter.</p><p>The shorter Gloster name was adopted in 1926 because foreign customers found the original company name difficult to pronounce.</p>"},
      {id:"hawker",title:"Entry into the Hawker group",html:"<p>Hawker acquired Gloster in 1934, and the company entered the Hawker Siddeley organization created the following year. It retained its name, design office, and works while accepting distributed production from the group.</p><p>Brockworth and Hucclecote formed its principal Gloucestershire industrial geography.</p>"},
      {id:"gladiator",title:"The Gladiator",html:"<p>The Gladiator developed from the Gauntlet as a private-venture response to a demanding fighter specification. It became the Royal Air Force's last biplane fighter and served in Britain, the Mediterranean, Scandinavia, the Middle East, and overseas air arms.</p><p>The type represents the mature end of an older fighter tradition immediately before metal monoplanes and jets transformed the field.</p>"},
      {id:"whittle",title:"The Whittle partnership",html:"<p>Gloster designed the E.28/39 as a flying test bed for Frank Whittle's turbojet. Its first flight in 1941 proved the British jet engine in an aircraft designed around the new propulsion system.</p><p>The small experimental machine linked Power Jets, government establishments, engine manufacturers, flight test, and the Gloster design office.</p>"},
      {id:"meteor",title:"Meteor production and development",html:"<p>The <a href='meteor-f3.html'>Meteor</a> became Britain's first operational jet fighter. Twin engines reduced risk during an immature propulsion era, while successive marks improved engines, structure, cockpit, speed, and armament.</p><p>Meteor work trained production workers, pilots, maintainers, suppliers, and test establishments for the postwar jet age.</p>"},
      {id:"javelin",title:"The Javelin interceptor",html:"<p>The <a href='javelin-faw1.html'>Javelin</a> gave Gloster a large delta-wing all-weather interceptor program. Radar, missiles, two crew, high-altitude performance, and ground-controlled interception made it a systems aircraft rather than a simple day fighter.</p><p>Its development connected the company to Britain's air-defense electronics and guided-weapons industries.</p>"},
      {id:"group",title:"A constituent technical identity",html:"<p>Hawker Siddeley increasingly distributes work by program rather than by historic company. In-setting policy nevertheless preserves the Gloster name in design records, test establishments, apprenticeships, and specialist teams.</p><p>The name marks jet and interceptor experience even when final aircraft carry group designations.</p>"},
      britishAircraftListSection([
        ["Gloster SS.19B","Gauntlet",null,"p"],
        ["Gloster SS.37","Gladiator",null,"p"],
        ["Gloster E.28/39",null,null,"p"],
        ["Gloster F.9/40","Meteor F.3","meteor-f3.html","a"],
        ["Gloster GA.5","Javelin FAW.1","javelin-faw1.html","a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Gloster is a Hawker Siddeley constituent identity associated with interceptor development, flight testing, systems integration, production support, and Gloucestershire aerospace skills. It is not an independent competitor to the parent group.</p><p>Its exact legal and administrative form remains open.</p>"}
    ],
    related:[...designHouseRelated,{href:"hawker-siddeley.html",kicker:"Parent group",label:"Hawker Siddeley"},{href:"meteor-f3.html",kicker:"First operational jet",label:"Meteor F.3"},{href:"javelin-faw1.html",kicker:"All-weather interceptor",label:"Javelin FAW.1"},{href:"rolls-royce.html",kicker:"Jet-engine partner",label:"Rolls-Royce"}],
    facts:[["Formed","1917 · Gloucestershire Aircraft Company"],["Gloster name","1926"],["Principal centers","Brockworth · Hucclecote"],["Joined Hawker group","1934"],["Jet demonstrator","E.28/39"],["First operational jet","Meteor"],["Postwar interceptor","Javelin"],["1985 position","Constituent identity of Hawker Siddeley"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/gloster-e.28-39",label:"BAE Systems Heritage — Gloster E.28/39"},{href:"https://heritage.baesystems.com/page/gloster-meteor",label:"BAE Systems Heritage — Gloster Meteor"}]
  }),

  "supermarine": britishDesignHouseArticle({
    title:"Supermarine",infoboxTitle:"Supermarine Aviation Works (Vickers) Limited",eyebrow:"Southampton and the Solent · fighters, seaplanes, and naval jets · 1913–1985",
    lead:"Supermarine is the Southampton and Solent aircraft design house best known for high-performance seaplanes and the Spitfire. Acquired by Vickers before the war and later carried into the British Aircraft Corporation, it retains an institutional identity in fighter aerodynamics, naval aircraft, high-speed flight, and the design culture associated with Reginald Mitchell and his successors.",
    canon:"Pemberton-Billing's 1913 foundation, the Supermarine name, 1928 Vickers acquisition, Woolston and Southampton, Schneider Trophy aircraft, Reginald Mitchell, Spitfire, Seafire, Attacker, Swift, and Scimitar are historical anchors. Vickers–Supermarine is explicitly one of Britain's 1947 aerospace anchors, and constituent-name survival inside BAC is established. Exact post-1960 projects, design authority, works, staffing, and corporate form remain open.",
    sections:[
      {id:"formation",title:"Pemberton-Billing and the Supermarine name",html:"<p>Noel Pemberton-Billing established an aircraft business at Southampton in 1913. Hubert Scott-Paine acquired the enterprise during the First World War and renamed it Supermarine Aviation Works.</p><p>Its coastal location encouraged flying boats, amphibians, naval work, and close attention to water handling.</p>"},
      {id:"seaplanes",title:"Flying boats and racing seaplanes",html:"<p>Supermarine produced civil and military flying boats and became a leading British participant in Schneider Trophy racing. High-powered engines, cooling, floats, drag reduction, and metal construction made the races an aerospace laboratory.</p><p>The S.4, S.5, S.6, and S.6B established a public association between the company and speed.</p>"},
      {id:"vickers",title:"Vickers acquisition",html:"<p>Vickers acquired Supermarine in 1928 while preserving a separate design identity. The combination provided capital, production resources, and access to a larger engineering group without immediately dissolving the Southampton office.</p><p>Reginald Mitchell remained the central designer until his death in 1937.</p>"},
      {id:"spitfire",title:"Spitfire and Seafire",html:"<p>The Spitfire combined an elliptical wing, stressed-skin construction, Rolls-Royce power, and sustained development through many marks. Dispersed production after the destruction of the Southampton works turned one company's design into a national manufacturing program.</p><p>The Seafire adapted the lineage to carrier service.</p>"},
      {id:"jets",title:"Attacker, Swift, and Scimitar",html:"<p>Postwar projects carried Supermarine into jet propulsion, swept wings, naval operation, reconnaissance, and low-level attack. The Attacker, Swift, and Scimitar produced mixed results but sustained a specialized design community.</p><p>Failures and limited runs remained technically valuable within the wider Vickers organization.</p>"},
      {id:"bac",title:"The BAC settlement",html:"<p>Vickers aviation entered the <a href='british-aircraft-corporation.html'>British Aircraft Corporation</a> in 1960. Supermarine ceased to compete as an independent firm but remained a legible technical lineage within Vickers and BAC records.</p><p>Its naval and high-speed expertise contributed to group studies, workshare, and advanced projects.</p>"},
      {id:"memory",title:"A national design name",html:"<p>The Spitfire gives Supermarine a public identity stronger than its later corporate independence. Museums, veterans, apprentices, export publicity, technical societies, and company archives preserve the name.</p><p>In-setting industrial policy finds that this inheritance remains useful for recruiting and prestige.</p>"},
      britishAircraftListSection([
        ["Supermarine S.6B",null,null,"p"],
        ["Supermarine Type 224",null,null,"p"],
        ["Supermarine Type 300","Spitfire",null,"p"],
        ["Supermarine Type 392","Attacker FB.1","attacker-fb1.html","a"],
        ["Supermarine Type 541","Swift",null,"a"],
        ["Supermarine Type 544","Scimitar",null,"a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Supermarine is a named Vickers–BAC design tradition associated with high-speed aerodynamics, naval aircraft, flight test, and the Solent industrial region. It is neither a separate airframe group nor a dormant historical label.</p><p>The exact administrative unit using the name remains open.</p>"}
    ],
    related:[...designHouseRelated,{href:"vickers-armstrongs-aircraft.html",kicker:"Parent aviation organization",label:"Vickers-Armstrongs Aircraft"},{href:"british-aircraft-corporation.html",kicker:"Post-1960 group",label:"British Aircraft Corporation"},{href:"rolls-royce.html",kicker:"Engine partner",label:"Rolls-Royce"},{href:"portsmouth.html",kicker:"Solent naval geography",label:"Portsmouth"}],
    facts:[["Founded","1913 · Pemberton-Billing"],["Supermarine name","1916"],["Principal region","Southampton and the Solent"],["Joined Vickers","1928"],["Principal designer","Reginald J. Mitchell"],["Defining aircraft","Spitfire"],["Postwar jets","Attacker · Swift · Scimitar"],["1985 position","Named Vickers–BAC design tradition"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/vickers-supermarine-spitfire",label:"BAE Systems Heritage — Vickers Supermarine Spitfire"},{href:"https://www.rafmuseum.org.uk/our-collection/collections/archive-collection/company-papers/",label:"Royal Air Force Museum — aircraft-industry company papers"}]
  }),

  "vickers-armstrongs-aircraft": britishDesignHouseArticle({
    title:"Vickers-Armstrongs Aircraft",infoboxTitle:"Vickers-Armstrongs (Aircraft) Limited",eyebrow:"Brooklands and Weybridge · bombers, airliners, and systems aircraft · 1927–1985",
    lead:"Vickers-Armstrongs Aircraft is the aviation arm of one of Britain's largest engineering combines and the principal Vickers constituent of the British Aircraft Corporation. Its geodetic bombers, postwar transports, turboprop airliners, Valiant, Vanguard, and VC10 connect Brooklands and Weybridge design practice to military procurement, BOAC and BEA requirements, and Commonwealth routes.",
    canon:"The 1927 Vickers–Armstrong Whitworth industrial merger, Vickers aviation lineage, Brooklands and Weybridge, Barnes Wallis geodetic construction, Wellington, Viking, Viscount, Valiant, Vanguard, VC10, and 1960 BAC formation are historical anchors. BAC's continued independence through 1985 and visible constituent identities are established in-setting. Exact company law, civil-aircraft sales, production totals, project assignments, and group boundaries remain open.",
    sections:[
      {id:"formation",title:"The Vickers aviation inheritance",html:"<p>Vickers entered aircraft construction before the First World War and developed a broad military and civil design organization. The 1927 merger with Armstrong Whitworth created Vickers-Armstrongs, although not every Armstrong business entered the new combine.</p><p>Brooklands and Weybridge became the central aviation sites.</p>"},
      {id:"geodetic",title:"Geodetic construction",html:"<p>Barnes Wallis developed geodetic airframe structures through the R.100 airship and Wellesley bomber. A lattice of intersecting members distributed loads and produced a light, damage-tolerant shell.</p><p>The method demanded specialized production but gave Vickers a distinctive structural school.</p>"},
      {id:"wellington",title:"Wellington and wartime production",html:"<p>The Wellington served as a principal medium bomber and later in maritime, transport, training, and specialist roles. Its mass production connected Vickers design to dispersed factories and a large repair system.</p><p>Warwick and related aircraft extended the geodetic lineage.</p>"},
      {id:"transport",title:"Viking and postwar transport",html:"<p>The Viking adapted wartime knowledge to civil passenger service. It helped restore airline operations while Britain evaluated the propulsion, pressure-cabin, route, and market questions of the coming air-transport system.</p><p>Military Valetta and Varsity variants sustained transport and training work.</p>"},
      {id:"viscount",title:"Viscount and Vanguard",html:"<p>The Viscount became the first turboprop airliner to enter regular service and one of Britain's strongest postwar civil-aircraft successes. Rolls-Royce Dart engines, passenger comfort, reliability, and suitable route economics made it widely exportable.</p><p>The larger Vanguard served a narrower market but extended the turboprop transport school.</p>"},
      {id:"valiant",title:"Valiant and strategic aircraft",html:"<p>The Valiant gave Vickers a strategic jet bomber and later tanker role. Its relatively conservative structure allowed earlier service than the more radical Vulcan and Victor.</p><p>High-speed military studies also fed the design work that entered BAC.</p>"},
      {id:"vc10",title:"VC10 and BAC",html:"<p>Vickers aviation joined <a href='british-aircraft-corporation.html'>BAC</a> in 1960. The VC10, optimized for long routes and demanding airfields, became the last airliner designed principally under the Vickers-Armstrongs name before the group structure took precedence.</p><p>Its civil, military transport, and tanker value tied the lineage closely to Commonwealth geography.</p>"},
      britishAircraftListSection([
        ["Vickers Type 271","Wellington",null,"p"],
        ["Vickers Type 284","Warwick",null,"a"],
        ["Vickers Type 491","Viking",null,"a"],
        ["Vickers Type 630","Viscount",null,"a"],
        ["Vickers Type 660","Valiant",null,"a"],
        ["Vickers Type 950","Vanguard",null,"a"],
        ["Vickers Type 1100","VC10",null,"a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 the Vickers aviation tradition remains a principal BAC component associated with civil transports, heavy aircraft, structures, systems integration, and Brooklands–Weybridge engineering. The parent group shares production and finance while retaining the Vickers name where it describes technical ancestry.</p>"}
    ],
    related:[...designHouseRelated,{href:"british-aircraft-corporation.html",kicker:"Post-1960 parent group",label:"British Aircraft Corporation"},{href:"supermarine.html",kicker:"Fighter and naval design house",label:"Supermarine"},{href:"commonwealth-civil-aviation.html",kicker:"Principal transport market",label:"Commonwealth Civil Aviation"},{href:"handley-page.html",kicker:"Heavy-aircraft counterpart",label:"Handley Page"}],
    facts:[["Aviation lineage","Vickers aircraft department · from 1911"],["Vickers-Armstrongs formation","1927"],["Principal centers","Brooklands · Weybridge"],["Structural school","Barnes Wallis geodetic construction"],["Major wartime type","Wellington"],["Civil-airliner line","Viking · Viscount · Vanguard · VC10"],["Strategic aircraft","Valiant"],["1985 position","Principal constituent of BAC"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/vickers-viscount",label:"BAE Systems Heritage — Vickers Viscount"},{href:"https://heritage.baesystems.com/page/vickers-vC10",label:"BAE Systems Heritage — Vickers VC10"}]
  }),

  "armstrong-whitworth-aircraft": britishDesignHouseArticle({
    title:"Armstrong Whitworth Aircraft",infoboxTitle:"Sir W. G. Armstrong Whitworth Aircraft Company Limited",eyebrow:"Coventry · bombers, transports, and distributed manufacture · 1912–1985",
    lead:"Armstrong Whitworth Aircraft is the Coventry-centered design and manufacturing house within Hawker Siddeley. Originating in the aviation department of the Armstrong Whitworth engineering empire, it develops interwar aircraft, the Whitley bomber, wartime production programs, and postwar transports culminating in the Argosy. Its works also manufacture aircraft designed elsewhere in the group.",
    canon:"The prewar Armstrong Whitworth aviation department, 1920 aircraft subsidiary, Coventry geography, 1935 Hawker Siddeley entry, Whitley, Albemarle, Meteor production, Apollo, and Argosy are historical anchors. Arsenal continuity and constituent-identity preservation are established in-setting. Exact post-Argosy projects, factories, output, staffing, and the administrative use of the name remain open.",
    sections:[
      {id:"origins",title:"An engineering empire enters aviation",html:"<p>Armstrong Whitworth established an aviation department before the First World War and formed a dedicated aircraft subsidiary in 1920. The organization inherited access to a large engineering culture while developing its own airframe design practice.</p><p>Coventry and nearby airfields became its principal industrial geography.</p>"},
      {id:"interwar",title:"Interwar aircraft",html:"<p>Atlas army-cooperation aircraft, Siskin fighters, transports, and experimental types gave the company experience in metal structures, military requirements, and export work.</p><p>Not every design became a large production success, but the range sustained a broad design office.</p>"},
      {id:"hawker",title:"Hawker Siddeley membership",html:"<p>Armstrong Whitworth Aircraft entered the Hawker Siddeley group in 1935 with Hawker, Avro, Gloster, and Armstrong Siddeley. It retained its company identity while manufacturing and engineering work moved across the group.</p><p>This arrangement became the model for its postwar role.</p>"},
      {id:"whitley",title:"Whitley and the bomber force",html:"<p>The Whitley became one of the Royal Air Force's principal early heavy bombers and later served in transport, training, parachute, and maritime roles. Its production expanded Coventry's skilled aircraft workforce.</p><p>Wartime operational change shifted the company increasingly toward manufacture and adaptation as well as original design.</p>"},
      {id:"production",title:"Distributed wartime and jet production",html:"<p>Armstrong Whitworth built Albemarle transports and produced aircraft designed by other companies. After the war it became an important manufacturer of Gloster Meteor and Hawker Hunter variants.</p><p>Shared production made the company a practical bridge among Hawker Siddeley design houses.</p>"},
      {id:"apollo",title:"Apollo and civil ambition",html:"<p>The Apollo turboprop airliner attempted to enter the postwar transport market but suffered from engine and development difficulties. The program did not establish a major civil line.</p><p>Its lessons in pressurization, turboprop integration, and passenger systems remained available to the group.</p>"},
      {id:"argosy",title:"Argosy transport lineage",html:"<p>The Argosy used a twin-boom configuration and unobstructed cargo hold for military and civil freight. Rough-field use, loading access, airborne supply, and Commonwealth logistics suited the company's transport specialization.</p><p>The aircraft made utility rather than glamour the center of the design argument.</p>"},
      britishAircraftListSection([
        ["Armstrong Whitworth A.W.38","Whitley",null,"p"],
        ["Armstrong Whitworth A.W.41","Albemarle",null,"p"],
        ["Armstrong Whitworth A.W.52",null,null,"a"],
        ["Armstrong Whitworth A.W.55","Apollo",null,"a"],
        ["Armstrong Whitworth A.W.650","Argosy C.1",null,"a"],
        ["Armstrong Whitworth A.W.660","Argosy",null,"a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Armstrong Whitworth remains a Hawker Siddeley technical and manufacturing identity associated with transports, shared production, structural work, conversion, and Coventry aerospace skills. It is not a separate national competitor.</p><p>Exact site and divisional arrangements remain open.</p>"}
    ],
    related:[...designHouseRelated,{href:"hawker-siddeley.html",kicker:"Parent group",label:"Hawker Siddeley"},{href:"gloster-aircraft-company.html",kicker:"Shared Meteor production",label:"Gloster Aircraft Company"},{href:"hawker-aircraft.html",kicker:"Shared Hunter production",label:"Hawker Aircraft"},{href:"coventry.html",kicker:"Industrial center",label:"Coventry"}],
    facts:[["Aircraft department","Established before the First World War"],["Dedicated company","1920"],["Principal region","Coventry and Warwickshire"],["Joined Hawker Siddeley","1935"],["Wartime bomber","Whitley"],["Shared jet manufacture","Meteor · Hunter"],["Postwar transport","Argosy"],["1985 position","Constituent identity of Hawker Siddeley"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/hawker-siddeley",label:"BAE Systems Heritage — Hawker Siddeley genealogy"},{href:"https://www.rafmuseum.org.uk/our-collection/collections/archive-collection/company-papers/",label:"Royal Air Force Museum — Armstrong Whitworth company papers"}]
  }),

  "blackburn-aircraft": britishDesignHouseArticle({
    title:"Blackburn Aircraft",infoboxTitle:"Blackburn Aircraft Limited",eyebrow:"Brough · naval aircraft, heavy transports, and low-level strike · 1914–1985",
    lead:"Blackburn Aircraft is the Brough-centered naval and transport aircraft house within Hawker Siddeley. Founded by Robert Blackburn, it builds seaplanes, carrier aircraft, trainers, wartime subcontract work, the Beverley heavy transport, and the Buccaneer low-level strike aircraft. The Humber works make maritime operation, rugged structure, and production support central to the company's identity.",
    canon:"Robert Blackburn's enterprise, 1914 incorporation, Brough from 1916, naval aircraft, engine interests, General Aircraft merger in 1949, Beverley, Buccaneer, and Hawker Siddeley absorption in 1960 are historical anchors. The wider Royal Navy and Commonwealth aviation settlement and preservation of constituent design identities are established in-setting. Exact later programs, company title, production totals, exports, and 1985 divisional structure remain open.",
    sections:[
      {id:"formation",title:"Robert Blackburn and Brough",html:"<p>Robert Blackburn began aircraft work in Leeds and incorporated the Blackburn Aeroplane and Motor Company in 1914. A factory opened at Brough on the Humber in 1916, where water access supported seaplane testing.</p><p>Brough became one of Britain's longest-lived aircraft-manufacturing sites.</p>"},
      {id:"naval",title:"Naval and maritime specialization",html:"<p>Interwar Blackburn designs included torpedo bombers, reconnaissance aircraft, seaplanes, flying boats, and trainers. Dart, Ripon, Baffin, Shark, Skua, and related types connected Brough closely to the Fleet Air Arm.</p><p>Carrier suitability and maritime corrosion imposed their own design and maintenance disciplines.</p>"},
      {id:"engines",title:"Engines and vertical integration",html:"<p>Blackburn acquired Cirrus Hermes Engineering in 1934 and moved engine work to Brough. The company therefore combined airframe, engine, test, and training interests for part of its history.</p><p>The later British engine consolidation separated much of this lineage from the airframe division.</p>"},
      {id:"war",title:"Wartime production and modification",html:"<p>Brough built Blackburn types, subcontracted other aircraft, adapted large numbers of imported American machines, and repaired damaged airframes. The work emphasized production engineering and modification as much as original design.</p><p>Those skills became important to the postwar arsenal settlement.</p>"},
      {id:"general",title:"General Aircraft merger",html:"<p>Blackburn combined with General Aircraft Limited in 1949. The merger brought the GAL.60 Universal Freighter project from Feltham to Brough and widened experience in transports, gliders, and specialized structures.</p><p>The organization later returned to the Blackburn Aircraft name.</p>"},
      {id:"beverley",title:"The Beverley",html:"<p>The Beverley heavy transport carried troops, vehicles, and outsized loads into austere fields. Its cargo access, high wing, twin-boom tail, and rough-strip utility suited imperial and Commonwealth logistics.</p><p>The aircraft made Brough a center for practical heavy-lift operations.</p>"},
      {id:"buccaneer",title:"The Buccaneer",html:"<p>The Buccaneer was designed for high-speed low-level carrier strike, using boundary-layer control to combine heavy load with operation from compact decks. It later served in land-based strike roles.</p><p>Airframe strength, naval systems, low-level aerodynamics, and weapons integration made it Blackburn's defining jet-age design.</p>"},
      britishAircraftListSection([
        ["Blackburn B.24","Skua",null,"p"],
        ["Blackburn B.25","Roc",null,"p"],
        ["Blackburn B.26","Botha",null,"p"],
        ["Blackburn B.37","Firebrand",null,"a"],
        ["Blackburn B-48","Firecrest",null,"a"],
        ["Blackburn B-101","Beverley C.1",null,"a"],
        ["Blackburn B-103 (NA.39)","Buccaneer S.2","buccaneer-s2.html","a"]
      ]),
      {id:"position",title:"Hawker Siddeley and 1985",html:"<p>Blackburn entered <a href='hawker-siddeley.html'>Hawker Siddeley</a> in 1960. In-setting policy preserves Blackburn and Brough as a visible naval, trainer, strike, and production lineage within the group.</p><p>By 1985 shared programs sustain the works even where aircraft carry Hawker Siddeley designations.</p>"}
    ],
    related:[...designHouseRelated,{href:"hawker-siddeley.html",kicker:"Parent group",label:"Hawker Siddeley"},{href:"royal-navy-postwar.html",kicker:"Principal naval customer",label:"Royal Navy after 1947"},{href:"british-strike-support-aircraft-lineage.html",kicker:"Strike-aircraft system",label:"British Strike and Support Aircraft"},{href:"handley-page.html",kicker:"Heavy-aircraft counterpart",label:"Handley Page"}],
    facts:[["Incorporated","1914"],["Founder","Robert Blackburn"],["Principal works","Brough · from 1916"],["Traditional specialization","Naval and maritime aircraft"],["General Aircraft merger","1949"],["Heavy transport","Beverley"],["Strike aircraft","Buccaneer"],["1985 position","Constituent design and production identity of Hawker Siddeley"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/brough",label:"BAE Systems Heritage — Brough aircraft works"},{href:"https://heritage.baesystems.com/page/blackburn-buccaneer",label:"BAE Systems Heritage — Blackburn Buccaneer"}]
  }),

  "folland-aircraft": britishDesignHouseArticle({
    title:"Folland Aircraft",infoboxTitle:"Folland Aircraft Limited",eyebrow:"Hamble · lightweight fighters and advanced training · 1937–1985",
    lead:"Folland Aircraft is the Hamble design house associated with compact structures, private-venture development, and W. E. W. Petter's Midge–Gnat lightweight fighter and trainer lineage. Acquired by Hawker Siddeley in 1959, it provides a deliberately small-aircraft countertradition inside a group otherwise responsible for increasingly large and complex systems.",
    canon:"British Marine Aircraft, the 1937 Folland name, Henry Folland, Hamble, W. E. W. Petter, Midge, Gnat, RAF training, and Hawker Siddeley acquisition in 1959 provide the compatible historical framework. Commonwealth procurement and preservation of constituent technical names are established in-setting. The historical Indian license is not automatically retained after the breakup of India; exact successor-state orders, later light-aircraft projects, exports, training fleet, employment, and 1985 administrative form remain open.",
    sections:[
      {id:"formation",title:"British Marine Aircraft and Henry Folland",html:"<p>British Marine Aircraft formed in the 1930s and became Folland Aircraft Limited in 1937 under designer Henry Folland. The company established works at Hamble on Southampton Water.</p><p>Early work combined aircraft production, subcontract manufacture, and design studies.</p>"},
      {id:"war",title:"Wartime manufacture",html:"<p>Folland built components and complete airframes for larger wartime programs. Subcontract production trained the workforce in controlled tolerances, interchangeable parts, and dispersed manufacture.</p><p>The company emerged with useful plant but limited capital for major independent programs.</p>"},
      {id:"petter",title:"W. E. W. Petter",html:"<p>W. E. W. Petter joined Folland after leading major Westland and English Electric designs. He argued that new engines made a simple, compact, affordable fighter technically possible.</p><p>The idea challenged the general movement toward heavier aircraft, larger radar sets, and more elaborate weapons systems.</p>"},
      {id:"midge",title:"The Midge demonstrator",html:"<p>The private-venture Midge tested the lightweight configuration with a lower-powered engine while the intended Bristol Orpheus matured. It demonstrated agility and high performance from a small airframe.</p><p>Its loss in 1955 did not end the design argument.</p>"},
      {id:"gnat",title:"The Gnat fighter",html:"<p>The Gnat first flew in 1955 as a lightweight fighter. Britain did not adopt it in that role, but the compact airframe offered smaller air forces an alternative to increasingly heavy interceptors.</p><p>Historical Indian license production is not presumed in a subcontinent divided among successor states. Any Congress, princely, or other Indian order remains open.</p>"},
      {id:"trainer",title:"Advanced jet training",html:"<p>The two-seat Gnat Trainer entered RAF service as an advanced fast-jet trainer. Low operating cost, responsive handling, and compact size made it useful between elementary jet training and front-line fighters.</p><p>Display-team service gave the small aircraft exceptional public visibility.</p>"},
      {id:"hawker",title:"Entry into Hawker Siddeley",html:"<p><a href='hawker-siddeley.html'>Hawker Siddeley</a> acquired Folland in 1959. Group finance and production supported the trainer while Hamble supplied a distinct lightweight-design and manufacturing school.</p><p>The Folland name remains attached to the Gnat and to later internal studies.</p>"},
      britishAircraftListSection([
        ["Folland Fo.108",null,null,"p"],
        ["Folland Fo.139","Midge",null,"a"],
        ["Folland Fo.141","Gnat F.1",null,"a"],
        ["Folland Fo.144","Gnat T.1",null,"a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Folland is a Hawker Siddeley constituent identity associated with trainers, lightweight structures, economical export aircraft, prototypes, and specialized workshare. It provides institutional memory for programs too small to justify a major-group design organization.</p><p>Its precise product line after the Gnat remains open.</p>"}
    ],
    related:[...designHouseRelated,{href:"hawker-siddeley.html",kicker:"Parent group",label:"Hawker Siddeley"},{href:"hawker-aircraft.html",kicker:"Front-line fighter counterpart",label:"Hawker Aircraft"},{href:"hunting-aircraft.html",kicker:"Training-aircraft counterpart",label:"Hunting Aircraft"},{href:"india-successors.html",kicker:"Open export and license market",label:"Indian Successor States"}],
    facts:[["Name adopted","Folland Aircraft Limited · 1937"],["Namesake","Henry P. Folland"],["Principal works","Hamble, Hampshire"],["Principal postwar designer","W. E. W. Petter"],["Demonstrator","Midge · 1954"],["Principal aircraft","Gnat · 1955"],["Joined Hawker Siddeley","1959"],["1985 position","Light-aircraft and training lineage within Hawker Siddeley"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/folland-gnat",label:"BAE Systems Heritage — Folland Gnat"},{href:"https://www.rafmuseum.org.uk/our-collection/collections/archive-collection/company-papers/",label:"Royal Air Force Museum — Folland company papers"}]
  }),

  "hunting-aircraft": britishDesignHouseArticle({
    title:"Hunting Aircraft",infoboxTitle:"Hunting Aircraft Limited",eyebrow:"Luton · trainers, light transports, and civil-jet studies · 1944–1985",
    lead:"Hunting Aircraft is the Luton-centered aircraft company that carries Percival's light-aircraft and trainer tradition into the Hunting group and then the British Aircraft Corporation. The Provost and Jet Provost establish a durable training system, while the H.107 study becomes the conceptual starting point for the BAC One-Eleven short-haul jet.",
    canon:"Percival Aircraft, Hunting acquisition in 1944, Hunting Percival name, Luton, Provost, Jet Provost, Hunting Aircraft name from 1957, H.107, and entry into BAC in 1960 are historical anchors. Continued BAC independence, Commonwealth markets, and visible constituent lineages are established in-setting. Exact later training projects, production sites, civil-aircraft workshare, corporate law, and 1985 name use remain open.",
    sections:[
      {id:"percival",title:"The Percival inheritance",html:"<p>Edgar Percival's company developed light civil aircraft, communications machines, and trainers before the war. Hunting acquired Percival Aircraft in 1944 and joined it to a wider transport, aviation-service, and industrial group.</p><p>The business traded as Hunting Percival before becoming Hunting Aircraft in 1957.</p>"},
      {id:"luton",title:"Luton works and production culture",html:"<p>Luton supported design, prototype construction, production, flight test, repair, and customer service. The company specialized in aircraft whose success depended upon low operating cost and dependable training rather than spectacular performance.</p><p>Its products therefore reached flying schools and smaller air forces as well as major services.</p>"},
      {id:"provost",title:"The Provost trainer",html:"<p>The piston-engined Provost provided side-by-side instruction, predictable handling, and a modern training environment. It prepared pilots for more advanced aircraft while remaining cheaper and simpler than front-line types.</p><p>Export orders established a Commonwealth and overseas support network.</p>"},
      {id:"jet-provost",title:"Jet Provost",html:"<p>The Jet Provost began as a private-venture jet adaptation of the Provost training concept. The prototype flew in 1954, and later marks added more powerful engines, ejection seats, improved undercarriage, and pressurization.</p><p>It made elementary jet instruction possible without using a converted fighter.</p>"},
      {id:"h107",title:"The H.107 civil-jet study",html:"<p>Hunting studied a compact short-haul jet designated H.107. The design did not reach an independent prototype before consolidation, but BAC judged the concept valuable.</p><p>Market enlargement and redesign produced the One-Eleven, giving a small company an important place in a major civil program.</p>"},
      {id:"bac",title:"Entry into BAC",html:"<p>Hunting Aircraft joined <a href='british-aircraft-corporation.html'>British Aircraft Corporation</a> in 1960 with Vickers aviation, English Electric Aviation, and Bristol Aircraft. Training aircraft, light structures, production capacity, and civil studies entered the new group.</p><p>Hunting's identity remained strongest in the Provost and H.107 lineages.</p>"},
      {id:"strikemaster",title:"Training and light attack",html:"<p>BAC developed the pressurized Jet Provost into the Strikemaster light-attack and training aircraft. Export customers valued simple support, rough-field operation, and the ability to combine instruction with armed missions.</p><p>The lineage connected Hunting's economical design culture to BAC's larger sales and systems organization.</p>"},
      britishAircraftListSection([
        ["Percival P.31","Proctor",null,"p"],
        ["Percival P.40","Prentice",null,"a"],
        ["Percival P.50","Prince",null,"a"],
        ["Percival P.56","Provost T.1",null,"a"],
        ["Hunting Percival P.84","Jet Provost T.1",null,"a"],
        ["Hunting H.107","BAC One-Eleven",null,"a"],
        ["BAC 167","Strikemaster",null,"a"]
      ]),
      {id:"position",title:"Position in 1985",html:"<p>By 1985 Hunting is a named BAC technical inheritance in trainers, compact civil aircraft, economical export support, and the Luton design school. The name identifies ancestry and specialist teams rather than a separate national airframe company.</p><p>Exact late-century programs and facilities remain open.</p>"}
    ],
    related:[...designHouseRelated,{href:"british-aircraft-corporation.html",kicker:"Parent group",label:"British Aircraft Corporation"},{href:"folland-aircraft.html",kicker:"Advanced-training counterpart",label:"Folland Aircraft"},{href:"commonwealth-civil-aviation.html",kicker:"Civil market",label:"Commonwealth Civil Aviation"},{href:"bristol-aeroplane-company.html",kicker:"BAC constituent partner",label:"Bristol Aeroplane Company"}],
    facts:[["Principal predecessor","Percival Aircraft"],["Hunting acquisition","1944"],["Hunting Aircraft name","1957"],["Principal works","Luton"],["Piston trainer","Provost"],["Jet trainer","Jet Provost"],["Civil-jet study","H.107 · ancestor of BAC One-Eleven"],["1985 position","Training and light-aircraft lineage within BAC"]],
    primarySources:[{href:"https://heritage.baesystems.com/page/jet-provost",label:"BAE Systems Heritage — Jet Provost"},{href:"https://heritage.baesystems.com/page/bac-one-eleven",label:"BAE Systems Heritage — BAC One-Eleven"}]
  })
});
