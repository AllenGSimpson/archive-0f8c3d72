window.deepArticles = window.deepArticles || {};

const japaneseAircraftOrganizationSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Japanese manufacturer codes and revised aircraft lineages"},
  {href:"../extrapolatedWWIIDevelopments.md",label:"Extrapolated WWII Developments — Japanese aircraft development and operational requirements"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Japanese victory and industrial continuity"},
  {href:"../transcript.md",label:"Master Transcript — Japanese aviation development and designation revisions"}
];

const japaneseAircraftOrganizationRelated = [
  {href:"japanese-late-piston-first-jet-generation.html",kicker:"Aircraft registry",label:"Japanese Late-Piston and First-Jet Generation"},
  {href:"far-eastern-aircraft-industry.html",kicker:"Regional industrial system",label:"Far Eastern Aircraft Industry"},
  {href:"japan.html",kicker:"National context",label:"Empire of Japan"}
];

const japaneseOrganizationAircraftList = rows => ({
  id:"aircraft-list",title:"List of Aircraft",
  html:`<p>The internal designation records the company, arsenal, Army, or Navy project identity. The official designation gives the accepted service or public name; research projects without an accepted designation are identified directly.</p><div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal designation</th><th>Official designation</th></tr></thead><tbody>${rows.map(([internal,official,href,provenance]) => {
    const note = provenance === "p" ? "<sup class='canon-note' data-provenance='p'>[p]</sup>" : provenance === "a" ? "<sup class='canon-note' data-provenance='a'>[a]</sup>" : "<sup class='canon-note' data-provenance='e'>[e]</sup>";
    return `<tr><td>${internal}</td><td>${href ? `<a href='${href}'>${official}</a>` : official}${note}</td></tr>`;
  }).join("")}</tbody></table></div>`
});

const japaneseAircraftOrganization = config => ({
  title:config.title,category:"Japanese aircraft design organizations",eyebrow:config.eyebrow,infoboxKicker:config.infoboxKicker,infoboxTitle:config.infoboxTitle || config.title,
  lead:config.lead,canon:config.canon,
  sections:[
    {id:"formation",title:"Formation and organization",html:config.formation},
    {id:"work",title:"Aircraft work",html:config.work},
    {id:"continuity",title:"Continuity after 1947",html:config.continuity},
    japaneseOrganizationAircraftList(config.aircraft),
    {id:"position",title:"Position in 1985",html:config.position}
  ],
  related:[...japaneseAircraftOrganizationRelated,...(config.related || [])],
  facts:config.facts,
  sources:[...japaneseAircraftOrganizationSources,...(config.primarySources || [])],
  categories:[config.title,"Japanese aerospace industry","Aircraft manufacturers","GEACPS",...(config.extraCategories || [])]
});

Object.assign(window.deepArticles, {
  "kyushu-aircraft": japaneseAircraftOrganization({
    title:"Kyushu Aircraft",infoboxTitle:"Kyūshū Hikōki",infoboxKicker:"Japanese aircraft design and manufacturing company",eyebrow:"Fukuoka · trainers, patrol aircraft, and the Shinden canard family · 1930–1985",
    lead:"Kyushu Aircraft is the Fukuoka aircraft manufacturer descended from the aviation division of Watanabe Iron Works. It produces trainers and patrol aircraft and supplies the airframe organization for the Shinden canard fighter, which transfers from a Navy J7W project to Army acceptance as the Ki-100 family in this setting.",
    canon:"Watanabe Iron Works' aircraft production, the W manufacturer letter, 1943 Kyushu Aircraft name, K9W, K10W, K11W, Q1W, and historical J7W development are real wartime anchors or fixed by the revised aircraft registry. The registry transfers Shinden to Army sponsorship before acceptance as Ki-100-I/II/III and rejects an operational J7W1/J7W2/J7W3 service family. No suicide-aircraft program is included. Exact postwar ownership, factories, later types, production, and 1985 organization remain open.",
    formation:"<p>Watanabe Iron Works established aircraft production in Fukuoka and moved the aviation division to a larger works near Zasshonokuma in 1930. The aircraft business adopted the Kyushu Aircraft name in 1943 while retaining W as its Navy manufacturer letter.</p>",
    work:"<p>Training and utility aircraft gave the company a steady production field. Q1W Tokai supplied a dedicated maritime patrol and antisubmarine design. The canard project begun as J7W transferred to Army sponsorship before formal acceptance and entered the Ki-100 register.</p>",
    continuity:"<p>Japan's 1947 victory settlement imposes no occupation aviation ban or forced liquidation. Kyushu retains its airframe office, factory labor, naval relationships, and distinctive canard-development experience.</p><p>Later complete-aircraft programs and industrial partnerships remain unregistered.</p>",
    aircraft:[
      ["K9W1","Navy Type 2 Primary Trainer Model 11",null,"e"],["K10W1","Navy Type 2 Land-based Intermediate Trainer",null,"e"],["K11W1","Navy Operations Trainer Shiragiku",null,"e"],["Q1W1","Navy Patrol Aircraft Tokai",null,"e"],["Q3W1","Nankai patrol-aircraft prototype",null,"e"],["J7W / Ki-100 project","Ki-100-I Shinden",null,"a"],["Ki-100-II","Ki-100-II Shinden Kai",null,"a"],["Ki-100-III","Ki-100-III Shinden Kai Ni",null,"a"]
    ],
    position:"<p>By 1985 Kyushu Aircraft is a smaller independent airframe house within the Japanese aerospace system. Its historical fields are training, maritime patrol, specialist production, and the Shinden canard school; the mature product register remains open.</p>",
    related:[{href:"nakajima-industrial-company.html",kicker:"Jet-generation counterpart",label:"Nakajima Industrial Company"},{href:"mitsubishi-heavy-industries.html",kicker:"Large system integrator",label:"Mitsubishi Heavy Industries"}],
    facts:[["Predecessor","Watanabe Iron Works aircraft division"],["Principal center","Fukuoka"],["Aircraft works moved","1930"],["Kyushu Aircraft name","1943"],["Navy manufacturer letter","W"],["Fixed fighter family","Ki-100-I/II/III Shinden"]],
    primarySources:[{href:"https://watanabe1886.com/history/shinden/",label:"Watanabe Iron Works — Shinden and company history"},{href:"https://www.ibiblio.org/hyperwar/NHC/NewPDFs/USAAF/United%20States%20Strategic%20Bombing%20Survey/USSBS%20Kyushu%20Airplane%20Co.%2C%20Report%20No.%20XV.pdf",label:"United States Strategic Bombing Survey — Kyushu Airplane Company"}],extraCategories:["Fukuoka","Canard aircraft"]
  }),

  "yokosuka-naval-air-technical-arsenal": japaneseAircraftOrganization({
    title:"Yokosuka Naval Air Technical Arsenal",infoboxKicker:"Imperial Japanese Navy aircraft design arsenal",eyebrow:"Yokosuka · naval research, prototypes, and aircraft design · 1913–1985",
    lead:"The Yokosuka Naval Air Technical Arsenal is the Imperial Japanese Navy's principal aircraft research, design, prototype, and test establishment. Commonly called Kūgishō, it develops aircraft that are then manufactured in quantity by firms such as Aichi, Nakajima, and Kyushu.",
    canon:"The 1913 naval aircraft-factory origin, Yokosuka location, later Kūgishō organization, prototype role, and the D4Y, P1Y, and R2Y projects are historical anchors or permitted wartime continuations. The revised registry fixes R2Y1 as the technical bridge to B8Y1/B8Y2 Keiun and assigns the later B9Y and B10Y families to the Yokosuka manufacturer letter. The historical MXY7 suicide aircraft is omitted; flower names belong to unmanned guided weapons in this setting. Exact postwar departments, budgets, public names, production partners, and 1985 command structure remain open.",
    formation:"<p>The Navy established an aeroplane factory inside the Yokosuka arsenal in 1913. Successive reorganizations joined foreign-aircraft evaluation, aerodynamics, engines, structures, weapons, prototypes, and flight testing under a technical establishment usually identified by its Yokosuka location or the abbreviation Kūgishō.</p>",
    work:"<p>The arsenal designed naval aircraft while private companies handled much of series manufacture. D4Y Suisei passed principally to Aichi production, and P1Y Ginga to Nakajima and other factories. R2Y work created the aerodynamic and systems basis for the B8Y Keiun carrier-attack family; B9Y and B10Y continue the larger twin-engine, two-seat fleet-defense and multirole branch.</p>",
    continuity:"<p>The arsenal remains a Navy institution after 1947. Captured-territory requirements, carrier aviation, patrol systems, and turbine development sustain its design and test functions.</p><p>The absence of organized suicide aviation removes the historical MXY7 line from the aircraft register.</p>",
    aircraft:[
      ["K1Y","Navy Type 13 Trainer",null,"p"],["B4Y1","Navy Type 96 Carrier Attack Aircraft",null,"p"],["D4Y","Navy Type 2 Carrier Bomber Suisei",null,"e"],["P1Y1","Navy Land-based Bomber Ginga",null,"e"],["R2Y1","R2Y1 Keiun development aircraft",null,"a"],["B8Y1","B8Y1 Keiun Kai",null,"a"],["B8Y2","B8Y2 Keiun Kai Ni",null,"a"],["B9Y","B9Y family",null,"a"],["B10Y","B10Y family",null,"a"]
    ],
    position:"<p>By 1985 Yokosuka remains the Navy's principal aircraft research and prototype authority. It sets requirements, builds experimental aircraft, and hands production to industrial firms; exact relations with the unified procurement system remain open.</p>",
    related:[{href:"aichi-aircraft.html",kicker:"Principal production partner",label:"Aichi Aircraft"},{href:"nakajima-industrial-company.html",kicker:"Production partner",label:"Nakajima Industrial Company"}],
    facts:[["Parent service","Imperial Japanese Navy"],["Aircraft-factory origin","1913"],["Principal location","Yokosuka"],["Common abbreviation","Kūgishō"],["Navy manufacturer letter","Y"],["Fixed postwar families","B8Y · B9Y · B10Y"],["Primary functions","Research · design · prototypes · testing"]],
    primarySources:[{href:"https://www.usni.org/magazines/proceedings/1948/march/yokosuka-naval-air-base-and-japanese-naval-aviation",label:"U.S. Naval Institute — Yokosuka naval aviation history"},{href:"https://en.wikipedia.org/wiki/Yokosuka_Naval_Air_Technical_Arsenal",label:"Wikipedia — Yokosuka Naval Air Technical Arsenal"}],extraCategories:["Imperial Japanese Navy","Military research establishments"]
  }),

  "hitachi-aircraft": japaneseAircraftOrganization({
    title:"Hitachi Aircraft",infoboxTitle:"Hitachi Kōkūki",infoboxKicker:"Japanese aircraft and aero-engine manufacturer",eyebrow:"Tokyo region · trainers, engines, and production engineering · 1939–1985",
    lead:"Hitachi Aircraft is the airframe-and-engine company formed in 1939 from aviation plants and technical staff inherited from Tokyo Gas and Electric Industry. Small aero engines, trainer assembly, research-aircraft fabrication, and production engineering define its wartime position more strongly than an independent combat-aircraft design family.",
    canon:"Tokyo Gas and Electric Industry's aircraft and engine work, fabrication of the 1938 Koken research aircraft, May 1939 formation of Hitachi Aircraft, airframe assembly, trainer production, and small-engine specialization are historical anchors. The revised Japanese registry retains Hitachi as manufacturer letter G. Continued existence after Japanese victory is conservative; exact postwar products, ownership, factories, contracts, and 1985 structure remain open.",
    formation:"<p>Hitachi acquired the aviation plants of Tokyo Gas and Electric Industry and organized Hitachi Aircraft in May 1939. Haneda became the principal airframe plant, while Omori and Tachikawa concentrated on engines.</p>",
    work:"<p>The predecessor organization fabricated the Koken-ki designed by Tokyo Imperial University's Aeronautical Research Institute. Hitachi assembled trainers, produced trainer engines, and pursued limited internal civil studies such as HT-3. Licensed and subcontract work exceeded original complete-aircraft design.</p>",
    continuity:"<p>Japanese victory prevents occupation dissolution and permits the company to retain its factories and engine organization. Training, light-aircraft production, engine manufacture, and subcontract structures provide the most conservative postwar roles.</p>",
    aircraft:[
      ["Koken-ki","Koken long-range research aircraft",null,"p"],["T.2","Hitachi T.2 trainer",null,"p"],["HT-3","No service designation — airliner study",null,"p"],["K5Y1","Navy Type 93 Intermediate Trainer",null,"p"],["A6M2-K","Navy Type 0 Training Fighter Model 11",null,"e"],["Ki-57-II","Army Type 100 Transport Model 2",null,"e"]
    ],
    position:"<p>By 1985 Hitachi Aircraft is a specialist engine, training-aircraft, and production company linked to the wider Hitachi industrial system. Its independent complete-aircraft design register remains limited and open.</p>",
    related:[{href:"hitachi.html",kicker:"Industrial lineage",label:"Hitachi"},{href:"tachikawa-aircraft.html",kicker:"Trainer-aircraft counterpart",label:"Tachikawa Aircraft"}],
    facts:[["Formed","May 1939"],["Predecessor","Tokyo Gas and Electric Industry aviation works"],["Historical plants","Haneda · Omori · Tachikawa"],["Principal wartime fields","Small aero engines · trainers · airframe assembly"],["Navy manufacturer letter","G"],["Independent combat-aircraft family","None fixed"]],
    primarySources:[{href:"https://www.hitachihyoron.com/rev/contents/202509/articles/03/index.html",label:"Hitachi Review — Hitachi Aircraft and Koken-ki lineage"},{href:"https://www.ibiblio.org/hyperwar/NHC/NewPDFs/USAAF/United%20States%20Strategic%20Bombing%20Survey/USSBS%20Hitachi%20Aircraft%20Company%2C%20Corp.%20Rprt.%20No.%20VII.pdf",label:"United States Strategic Bombing Survey — Hitachi Aircraft Company"}],extraCategories:["Hitachi","Aircraft engines","Training aircraft"]
  }),

  "hiro-naval-arsenal": japaneseAircraftOrganization({
    title:"Hiro Naval Arsenal",infoboxTitle:"Hiro Kaigun Kōshō",infoboxKicker:"Imperial Japanese Navy aircraft and engine arsenal",eyebrow:"Kure and Hiro · flying boats, land-based aircraft, and aero engines · 1921–1985",
    lead:"Hiro Naval Arsenal is the Imperial Japanese Navy establishment at Hiro near Kure responsible for flying boats, land-based aircraft, aero engines, and production work. Its own H- and G-series designs belong principally to the 1920s and 1930s; later work emphasizes engines and manufacture of aircraft designed elsewhere.",
    canon:"Hiro's naval-aircraft production, flying-boat and engine specialization, and the H1H, H2H, H4H, and G2H aircraft are pre-divergence historical anchors. The revised registry retains H as the domestic Navy manufacturer letter. Survival after Japanese victory follows from the absence of the historical American bombing and occupation sequence; exact postwar mission, facilities, later types, and 1985 command structure remain open.",
    formation:"<p>The Navy established the aircraft works at Hiro near Kure after the First World War. The arsenal combined airframe construction, marine-aircraft development, aero-engine manufacture, and naval production administration.</p>",
    work:"<p>H1H, H2H, and H4H flying boats developed wooden and metal-hull practice. G2H supplied early experience with long-range land-based attack aircraft. In 1932 many designers moved to the reorganized Yokosuka establishment, and Hiro increasingly produced aircraft designed by other bureaus.</p>",
    continuity:"<p>Without the historical 1945 destruction and occupation closure, the arsenal remains available to the Imperial Japanese Navy. Engine work, flying-boat repair, production workshare, and technical support are conservative continuing functions.</p>",
    aircraft:[
      ["H1H","Navy Type 15 Flying Boat",null,"p"],["H2H","Navy Type 89 Flying Boat",null,"p"],["H3H1","No service designation — flying-boat prototype",null,"p"],["H4H","Navy Type 91 Flying Boat",null,"p"],["G2H1","Navy Type 95 Land-based Attack Aircraft",null,"p"],["R-3","No service designation — flying-boat prototype",null,"p"]
    ],
    position:"<p>By 1985 Hiro remains a naval production, engine, repair, and maritime-aircraft support establishment rather than the Navy's principal new-design bureau. Its exact division of work with Yokosuka and private manufacturers remains open.</p>",
    related:[{href:"yokosuka-naval-air-technical-arsenal.html",kicker:"Successor design authority",label:"Yokosuka Naval Air Technical Arsenal"},{href:"kawanishi-aircraft.html",kicker:"Private flying-boat counterpart",label:"Kawanishi Aircraft"}],
    facts:[["Parent service","Imperial Japanese Navy"],["Principal location","Hiro near Kure"],["Common abbreviation","Hiroshō"],["Navy manufacturer letter","H"],["Historic fields","Flying boats · land-based aircraft · aero engines"],["Later wartime role","Production and engine establishment"]],
    primarySources:[{href:"https://en.wikipedia.org/wiki/Hiro_Naval_Arsenal",label:"Wikipedia — Hiro Naval Arsenal"},{href:"https://en.wikipedia.org/wiki/Hiro_G2H",label:"Wikipedia — Hiro G2H development"}],extraCategories:["Imperial Japanese Navy","Flying boats","Aircraft engines"]
  })
});
