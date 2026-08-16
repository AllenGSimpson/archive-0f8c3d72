window.deepArticles = window.deepArticles || {};

const germanProjectRegisterCanon = "<sup class='canon-note' data-provenance='a'>[a]</sup>";

const germanProjectRegisterSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Reichsluftgerätordnung and company project registers"},
  {href:"../transcript.md",label:"Master Transcript — German aircraft nomenclature and six-house project systems"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German postwar aviation and industrial continuity"}
];

const projectRegisterRelated = [
  {href:"german-aircraft-company-project-registers.html",kicker:"Comparative register",label:"German Aircraft Company Project Registers"},
  {href:"reichsluftgeraetordnung-1948.html",kicker:"National service register",label:"Reichsluftgerätordnung 1948"},
  {href:"german-clean-register-generation.html",kicker:"Post-1948 service generation",label:"German Post-1948 Aircraft Register"}
];

const germanProjectRegisterArticle = config => ({
  title:config.title,
  category:"Aircraft designation systems",
  eyebrow:config.eyebrow,
  infoboxKicker:"German company aircraft-project register",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:[...projectRegisterRelated,...(config.related || [])],
  facts:config.facts,
  sources:[...germanProjectRegisterSources,...(config.sources || [])],
  categories:[config.title,"German aerospace industry","Aircraft designation systems",config.company]
});

Object.assign(window.deepArticles, {
  "german-aircraft-company-project-registers": {
    title:"German aircraft company project registers",
    category:"Aircraft designation systems",
    eyebrow:"Greater German Reich · internal design-office nomenclature",
    infoboxKicker:"German aerospace-industry nomenclature system",
    lead:"German aircraft company project registers are the separate internal numbering systems used by German design houses before an aircraft enters the national military register. The Reichsluftgerätordnung 1948 standardizes service designations after Luftwaffe acceptance but does not standardize how companies identify paper studies, aerodynamic branches, mock-ups, demonstrators, or prototypes. Messerschmitt, Focke-Wulf, Horten-Gotha, Junkers, Heinkel, and Arado consequently retain six recognizable project grammars.",
    canon:"The separation between company and national registers, the six project forms, their branch grammars, common V prototype marker, design-authority prefixes, acceptance sequence, and wiki naming rule are established. Complete project ledgers, the meaning of every historical number, dates, builders, surviving documents, project-to-service mappings, and national acceptance ordinals remain open.",
    sections:[
      {id:"purpose",title:"Purpose",html:`<p>Company registers organize work before the Reich has accepted an aircraft. They can cover paper proposals, wind-tunnel models, engine rigs, full-scale mock-ups, privately financed demonstrators, and government-supported prototypes.</p><p>A project number records a design-office file or development problem. It does not reserve a fighter, bomber, or reconnaissance ordinal in the <a href='reichsluftgeraetordnung-1948.html'>national service register</a>.${germanProjectRegisterCanon}</p>`},
      {id:"procurement",title:"Procurement",html:`<!-- altwwii-writer-block:start id=wb-k-20260816-r8f2d writer=k kind=analysis created=2026-08-16T11:45:00-06:00 --><p>Postwar German military-aircraft development is commonly offer-driven. Design houses use income from civil production to maintain project work and, when sufficiently confident, normally build one company-financed flying demonstrator before receiving a Luftwaffe order. A firm may retain and improve the aircraft until the service expresses a relevant need, then present a design which has already passed through several internal states. Most projects remain studies, models, rigs, or mock-ups, and even serious speculative programs seldom support more than one airframe.${germanProjectRegisterCanon}</p><p>The boundary between company risk and state direction lies at formal evaluation. Once the Luftwaffe takes an interest, public funding supports additional evaluation aircraft, military-equipment integration, service trials, and any subsequent production order. The arrangement preserves competition among design houses while limiting the operational fleet to types which meet service standards. A company <code>V1</code> therefore proves that the firm committed resources to a physical aircraft; it does not prove that the state accepted the design.</p><!-- altwwii-writer-block:end -->`},
      {id:"systems",title:"Six-house system",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Design house</th><th>Internal project form</th><th>Branch grammar</th><th>Illustrative form</th></tr></thead><tbody><tr><td><a href='messerschmitt-project-register.html'>Messerschmitt</a></td><td><code>Me P.####</code></td><td><code>/I</code>, <code>/II</code>, <code>/III</code>; then <code>V#</code></td><td><code>Me P.1147/III V1</code></td></tr><tr><td><a href='focke-wulf-project-register.html'>Focke-Wulf</a></td><td><code>Fw P.###</code></td><td><code>Entwurf I/II/III</code>; then <code>V#</code></td><td><code>Fw P.312, Entwurf II, V1</code></td></tr><tr><td><a href='horten-gotha-project-register.html'>Horten-Gotha</a></td><td><code>H</code> plus Roman numeral</td><td><code>A/B/C</code>; then <code>V#</code></td><td><code>H XXIV B V1</code></td></tr><tr><td><a href='junkers-ef-project-register.html'>Junkers</a></td><td><code>Ju EF ###</code></td><td><code>/1</code>, <code>/2</code>, <code>/3</code>; then <code>V#</code></td><td><code>Ju EF 151/2 V1</code></td></tr><tr><td><a href='heinkel-project-register.html'>Heinkel</a></td><td><code>He P.####</code></td><td><code>A/B/C</code>; then <code>V#</code></td><td><code>He P.1126C V1</code></td></tr><tr><td><a href='arado-project-register.html'>Arado</a></td><td><code>Ar E.###</code></td><td><code>-1</code>, <code>-2</code>, <code>-3</code>; then <code>V#</code></td><td><code>Ar E.612-2 V1</code></td></tr></tbody></table></div><p>The example identifiers show the settled syntax. They do not establish that each numbered project existed, flew, or received a service designation.</p>"},
      {id:"stages",title:"Development stages",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Stage</th><th>Identity</th><th>Administrative meaning</th></tr></thead><tbody><tr><td>Company project</td><td>House-specific project and branch code</td><td>Internal study, model, mock-up, rig, or proposed aircraft</td></tr><tr><td>Prototype</td><td>Project identity plus <code>V1</code>, <code>V2</code>, and later numbers</td><td>A physical experimental airframe exists</td></tr><tr><td>Luftwaffe acceptance</td><td>Design authority + national role ordinal + <code>A-0</code></td><td>The Reich accepts a pre-series military type</td></tr><tr><td>Production standard</td><td>Service designation ending in <code>A-1</code> or a later series and standard</td><td>Standardized production and service configuration</td></tr><tr><td>Individual airframe</td><td>Separate <em>Werknummer</em></td><td>Serial identity of one physical aircraft</td></tr></tbody></table></div>"},
      {id:"prototype",title:"Prototype marker",html:"<p><em>V</em>, for the experimental or prototype airframe, is the common cross-industry convention. A file ending at an unbuilt branch describes paper work. A V1 identifies a flying or otherwise completed company demonstrator. A sequence extending through several V airframes usually indicates increasing Luftwaffe interest and a broader evaluation program.</p><p>Prototype count does not by itself prove acceptance, production, or operational service.</p>"},
      {id:"acceptance",title:"National acceptance",html:"<p>Acceptance replaces neither the company history nor the prototype record. The aircraft gains a national role-series identity whose ordinal depends only upon actual acceptance chronology. An illustrative Messerschmitt project might pass from <code>Me P.1147/III V1</code> to <code>Me J[n]A-0</code>, but the value of <code>[n]</code> cannot be inferred from the project number.</p><p>Internal branch letters and numerals do not dictate the national major-series letter. A Heinkel C branch can enter the service register as an A-0 pre-series aircraft.</p>"},
      {id:"authority",title:"Design authority and factory",html:"<p>The company prefix identifies the design authority, not the plant that assembled an airframe. Production documents and the Werknummer identify the factory and individual aircraft. Types already accepted under an older design authority retain that prefix after mergers or bureau transfers.</p><p>Horten-Gotha uses <code>Ho</code> for accepted military designs because Horten controls the design authority. A separate <code>Go</code> authority would require a corporate split that does not occur in the setting.</p>"},
      {id:"wiki",title:"Article naming rule",html:`<p>Wiki articles give both the internal project number and the RLM or post-RLM designation when both exist. Once a service designation has been assigned, it is the article's primary name. The internal project identity becomes primary only when a design never entered the national register.${germanProjectRegisterCanon}</p>`},
      {id:"other",title:"Other manufacturers",html:"<p>Dornier, Blohm & Voss, and other German firms continue aircraft and research work, but the consolidated reference does not establish their postwar internal grammar at the same level as the six registers above. Their systems must remain open until fixed by a later reference.</p>"}
    ],
    related:[{href:"reichsluftgeraetordnung-1948.html",kicker:"National register",label:"Reichsluftgerätordnung 1948"},{href:"military-designation-systems.html",kicker:"Comparative nomenclature",label:"Military Designation Systems"},{href:"german-clean-register-generation.html",kicker:"Accepted postwar aircraft",label:"German Post-1948 Aircraft Register"}],
    facts:[["Scope","Pre-acceptance company projects"],["National service register","Reichsluftgerätordnung 1948"],["Settled house systems","Six"],["Common prototype marker","V"],["Pre-series service marker","-0"],["Individual-airframe identity","Werknummer"],["Project number determines service ordinal","No"],["Wiki primary name after acceptance","Service designation"],["Article horizon","5 January 2012"]],
    sources:germanProjectRegisterSources,
    categories:["German aircraft company project registers","German aerospace industry","Aircraft designation systems","Luftwaffe"]
  },

  "messerschmitt-project-register": germanProjectRegisterArticle({
    title:"Messerschmitt project register",company:"Messerschmitt",eyebrow:"Messerschmitt · P. four-digit engineering ledger",
    lead:"The Messerschmitt project register is the company's chronological <em>Me P.####</em> aircraft-development ledger. It records projects across different missions without encoding the later Luftwaffe role or national acceptance ordinal. Substantially different approaches within one project use Roman-numbered branches, and completed experimental airframes receive the common V prototype suffix.",
    canon:"The Me P.#### form, chronological company-ledger function, mixed mission content, /I–/III branch grammar, V prototype marker, separation from the national register, and continuation after 1948 are established. Complete number chronology, project titles, dates, specifications, prototypes, and service mappings remain open.",
    sections:[
      {id:"form",title:"Form",html:"<p>The standard form is <code>Me P.####</code>. The four-digit project number identifies an engineering file in approximate company sequence. It does not identify fighter, bomber, transport, reconnaissance, or propulsion category.</p>"},
      {id:"branches",title:"Branches",html:"<p>Alternative major approaches within one project use Roman branches: <code>/I</code>, <code>/II</code>, <code>/III</code>, and later positions when required. A branch can change wing, inlet, engine installation, body arrangement, or another defining feature while remaining inside the same development problem.</p>"},
      {id:"prototype",title:"Prototype aircraft",html:"<p>A completed experimental airframe appends the V number. <code>Me P.1147/III V1</code> therefore identifies the first prototype of the third branch of project 1147. The identifier is illustrative of the grammar and does not establish a fixed aircraft program.</p>"},
      {id:"acceptance",title:"Service acceptance",html:"<p>A successful project receives an independent Reichsluftgerätordnung designation. A fighter could become <code>Me J[n]A-0</code>, with <code>[n]</code> assigned by its position in the national fighter-acceptance sequence. Neither 1147 nor III predicts that value or the A series.</p>"},
      {id:"culture",title:"Design-office use",html:"<p>The register suits an office that repeatedly develops high-speed aircraft through successive aerodynamic and propulsion arrangements. Engineers can continue one technical problem through several branches while the Luftwaffe withholds a service identity until an aircraft is accepted.</p>"},
      {id:"arado",title:"Arado bureau transfer",html:"<p>After Messerschmitt absorbs Arado's military design bureau, new combined military work enters the Me P. ledger. Accepted Arado aircraft retain their Ar service designation, and the surviving Arado project record remains separately identifiable.</p>"},
      {id:"open",title:"Open register",html:"<p>Only specifically established project numbers may be attached to aircraft articles. The complete postwar Me P. sequence, gaps, cancellations, archive numbers, and relation to accepted aircraft remain open.</p>"}
    ],
    related:[{href:"messerschmitt.html",kicker:"Design authority",label:"Messerschmitt"},{href:"arado-project-register.html",kicker:"Absorbed bureau register",label:"Arado Project Register"},{href:"me-262a-1.html",kicker:"Grandfathered service family",label:"Me 262"}],
    facts:[["Design authority","Messerschmitt"],["Internal form","Me P.####"],["Project basis","Chronological company ledger"],["Branch form","/I · /II · /III"],["Prototype form","V1 · V2 · V3"],["Post-acceptance prefix","Me"],["National acceptance ordinal","Independent"],["Complete project ledger","Open"]]
  }),

  "focke-wulf-project-register": germanProjectRegisterArticle({
    title:"Focke-Wulf project register",company:"Focke-Wulf",eyebrow:"Focke-Wulf · P. three-digit ledger and Entwurf branches",
    lead:"The Focke-Wulf project register combines a three-digit <em>Fw P.###</em> project ledger with separately numbered <em>Entwurf</em> configurations. The project number identifies the development problem; the Entwurf identifies an aerodynamic answer pursued within it. Flying demonstrators add the common V prototype suffix.",
    canon:"The Fw P.### form, Entwurf branch grammar, V prototype marker, separation between project problem and aerodynamic solution, Fw post-1948 service prefix, and grandfathering of existing Ta aircraft are established. Complete number chronology, projects, dates, designers, prototypes, and service mappings remain open.",
    sections:[
      {id:"form",title:"Form",html:"<p>The company assigns a three-digit project identifier such as <code>Fw P.312</code>. The number does not encode the aircraft's future role or national service ordinal.</p>"},
      {id:"entwurf",title:"Entwurf configurations",html:"<p>Major aerodynamic alternatives use <code>Entwurf I</code>, <code>Entwurf II</code>, <code>Entwurf III</code>, and later Roman positions. A single project can therefore examine several wings, tail arrangements, control schemes, or propulsion installations without creating a new ledger number for each drawing.</p>"},
      {id:"prototype",title:"Prototype aircraft",html:"<p>A flying example adds V after the selected configuration. <code>Fw P.312, Entwurf II, V1</code> identifies the first prototype of Entwurf II. A project ending at Entwurf IV may never have left paper; a V1 confirms a physical demonstrator, not service acceptance.</p>"},
      {id:"acceptance",title:"Service acceptance",html:"<p>After acceptance, a fighter receives an independent designation such as <code>Fw J[n]A-0</code>. The national ordinal records Reich acceptance chronology. Project 312 does not become J312, and Entwurf II does not force a B production series.</p>"},
      {id:"ta",title:"Fw and Ta identities",html:"<p>Aircraft already registered under a Ta designation retain it until retirement. Newly accepted post-1948 aircraft use Fw because the national prefix identifies the company design authority rather than commemorating an individual chief designer.</p>"},
      {id:"use",title:"Design-office use",html:"<p>The two-level system supports Focke-Wulf's repeated investigation of wing planform, handling, control, and battlefield-aircraft configuration. Project and aerodynamic-choice histories can be reconstructed separately when surviving files permit.</p>"},
      {id:"open",title:"Open register",html:"<p>The complete Fw P. sequence, its starting point, skipped numbers, Entwurf counts, prototype totals, and connections to accepted aircraft remain open.</p>"}
    ],
    related:[{href:"focke-wulf.html",kicker:"Design authority",label:"Focke-Wulf"},{href:"ta-183a-1-huckebein.html",kicker:"Grandfathered development bridge",label:"Ta 183"}],
    facts:[["Design authority","Focke-Wulf"],["Internal form","Fw P.###"],["Project meaning","Development problem"],["Branch form","Entwurf I · II · III"],["Prototype form","V1 · V2 · V3"],["New post-1948 service prefix","Fw"],["Existing Ta identities","Grandfathered"],["Complete project ledger","Open"]]
  }),

  "horten-gotha-project-register": germanProjectRegisterArticle({
    title:"Horten-Gotha project register",company:"Horten-Gotha",eyebrow:"Horten design authority · Roman-numeral aircraft ledger",
    lead:"The Horten-Gotha project register is the Horten design office's chronological sequence of H-prefixed Roman-numeral aircraft identities. Major configurations use letters and experimental airframes use V numbers. The register records company design work independently of Luftwaffe acceptance: a project can stop as a drawing, model, mock-up, or demonstrator without receiving a national service identity. Gotha supplies the public corporate and production organization, while Horten remains the military design authority and gives accepted aircraft the <em>Ho</em> prefix.",
    canon:"The H plus Roman-numeral system, A/B/C configuration branches, V prototype marker, Horten design authority, Gotha corporate identity, Ho military prefix, and absence of a Horten–Gotha split are established. Complete sequence, civil project mappings, postwar numbers, prototypes, service ordinals, and corporate charter remain open.",
    sections:[
      {id:"form",title:"Form",html:"<p>The internal aircraft identity uses H followed by a Roman numeral: H IX, H XVIII, H XIX, H XX, and later positions as assigned. The notation remains deliberately distinct from the decimal ledgers of the other large firms. The numeral identifies the Horten project position rather than mission, year, engine count, or future service number.</p><p>Roman numerals remain in technical files, correspondence, drawings, wind-tunnel records, and prototype logs. Typography varies between spaced and compact forms in secondary use, but the archive normally writes <code>H XVIII</code>.</p>"},
      {id:"configurations",title:"Configurations",html:"<p>Major alternatives add letters: <code>H XXIV A</code>, <code>H XXIV B</code>, and <code>H XXIV C</code>. A branch can represent a different planform, propulsion installation, control arrangement, crew layout, or mission architecture while remaining inside the same project problem.</p><p>The company letter does not determine the major-series letter of a later service designation. Configuration B can become an A-series production aircraft if it is the first accepted major architecture.</p>"},
      {id:"prototype",title:"Prototype aircraft",html:"<p>The common V suffix identifies physical experimental airframes. <code>H XXIV B V1</code> is the first prototype of configuration B of H XXIV. The identifier is an example of syntax rather than a confirmed entry in the aircraft register.</p><p>V1 establishes that a particular configuration reached a physical test airframe. It does not prove Luftwaffe acceptance, production authorization, or combat service. Separate prototypes can test structure, engines, controls, pressure systems, weapons, or operational handling.</p>"},
      {id:"stages",title:"Project stages",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Record form</th><th>Meaning</th></tr></thead><tbody><tr><td><code>H [Roman]</code></td><td>Project position in the Horten internal ledger</td></tr><tr><td><code>H [Roman] A/B/C</code></td><td>Major company configuration within that project</td></tr><tr><td><code>H [Roman] B V1</code></td><td>First physical prototype of configuration B</td></tr><tr><td><code>Ho [role][ordinal]A-0</code></td><td>Independent national pre-series identity after acceptance</td></tr><tr><td>Gotha commercial name</td><td>Public civil identity; internal H number may remain obscure</td></tr></tbody></table></div>"},
      {id:"authority",title:"Horten and Gotha",html:"<p>Gotha is the public-facing company and production organization. It manages industrial tooling, series manufacture, suppliers, civil sales, and the name seen by airline passengers. Horten controls military design and the internal aerodynamic lineage.</p><p>An airline can market a Gotha aircraft while engineers trace its internal Horten ancestry through the H register. The combined organization does not split. <code>Go</code> is therefore not used as a separate postwar military design-authority prefix.</p>"},
      {id:"acceptance",title:"Service acceptance",html:"<p>An accepted aircraft receives the <code>Ho</code> prefix and a national role ordinal under the <a href='reichsluftgeraetordnung-1948.html'>Reichsluftgerätordnung</a>. A fighter project might pass from <code>H XXIV B V1</code> to <code>Ho J[n]A-0</code>. Neither XXIV nor B fixes the J ordinal or A series.</p><p>The H identity can continue in engineering use after acceptance. Service documents, unit records, spares, and public military reporting use the Ho designation once assigned. Projects never accepted retain the internal identity as their principal name.</p>"},
      {id:"known",title:"Established entries and mappings",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Internal identity</th><th>Public or service identity</th><th>Status</th></tr></thead><tbody><tr><td>H IX</td><td><a href='ho-229a-2.html'>Ho 229 family</a></td><td>Operational family</td></tr><tr><td>H XVIII</td><td><a href='horten-xviii.html'>Horten XVIII</a>; service code open</td><td>Postwar production strategic bomber</td></tr><tr><td>Internal number open</td><td><a href='gotha-weltblick.html'>Gotha Weltblick</a></td><td>Purpose-built civil airliner</td></tr></tbody></table></div><p>The table is not a complete Horten ledger. H XIX, H XX, later numerals, branches, and service mappings remain open unless established in a separate article.</p>"},
      {id:"civil",title:"Civil identity",html:"<p>Civil names need not reproduce the project register. Gotha's sales organization uses a public model or poetic product name, while certification, factory, and engineering files retain more technical identities.</p><p>The <a href='gotha-weltblick.html'>Gotha Weltblick</a> is publicly identified through the corporate brand; its precise internal H number remains open. The absence of that number does not make the civil aircraft independent of Horten design authority.</p>"},
      {id:"archives",title:"Archival use",html:"<p>The layered notation allows historians to distinguish an idea from the configuration that answered it, the prototype that flew, and the aircraft accepted by the state. A reference to H XVIII alone may describe a project family broader than one production mark.</p><p>Incomplete files create recurring ambiguity. A surviving V number can prove a physical airframe while leaving its later service disposition unknown; a service type can be known while its internal project branch remains unrecorded.</p>"},
      {id:"open",title:"Open register",html:"<p>The sequence after established Horten projects, allocation of Roman numerals, skipped or reused positions, configuration letters, prototype totals, civil mappings, post-1948 service ordinals, drawing registers, and archival losses remain open.</p>"}
    ],
    related:[{href:"horten-gotha.html",kicker:"Corporate and design organization",label:"Horten-Gotha"},{href:"ho-229a-2.html",kicker:"H IX service family",label:"Ho 229"},{href:"horten-xviii.html",kicker:"Postwar bomber project",label:"Horten XVIII"},{href:"gotha-weltblick.html",kicker:"Civil flying-wing identity",label:"Gotha Weltblick"}],
    facts:[["Design authority","Horten"],["Production and public organization","Gotha"],["Internal form","H plus Roman numeral"],["Configuration form","A · B · C"],["Prototype form","V1 · V2 · V3"],["Military service prefix","Ho"],["Service ordinal basis","National acceptance chronology"],["Civil identity","May use Gotha product name"],["Separate Go authority","Does not arise"],["Complete project ledger","Open"]]
  }),

  "junkers-ef-project-register": germanProjectRegisterArticle({
    title:"Junkers EF project register",company:"Junkers",eyebrow:"Junkers · EF aircraft projects and EFo research files",
    lead:"The Junkers EF project register is the company's chronological sequence of development-aircraft files, written <em>Ju EF ###</em>. Alternative layouts use slash numbers and prototype aircraft use V numbers. A parallel EFo register covers research that has not yet matured into an aircraft program; work promoted from EFo receives a new EF identity.",
    canon:"The Ju EF ### form, chronological project basis, /1–/3 alternatives, V prototype marker, separate EFo research register, promotion from EFo to a new EF number, and independence from service designations are established. Complete number chronology, the expansion of EF and EFo, projects, dates, prototypes, and accepted mappings remain open.",
    sections:[
      {id:"ef",title:"EF aircraft register",html:"<p><em>EF</em> identifies a development-aircraft project. The standard postwar record uses <code>Ju EF ###</code>. Numbers follow the Junkers project ledger and do not encode the future Luftwaffe role.</p>"},
      {id:"alternatives",title:"Alternative layouts",html:"<p>Parallel solutions inside one development use slash numbers: <code>EF 151/1</code>, <code>EF 151/2</code>, and later alternatives. The notation keeps related structural or aerodynamic studies together.</p>"},
      {id:"prototype",title:"Prototype aircraft",html:"<p>A completed experimental airframe adds V: <code>Ju EF 151/2 V1</code>. Several V airframes can support structural, weapons, climate, maintenance, or operational evaluation while the project remains outside the service register.</p>"},
      {id:"efo",title:"EFo research register",html:"<p>EFo covers work that is not yet an aircraft program, including wing research, control systems, structural methods, or propulsion integration. It separates fundamental and component research from a proposal intended to become a complete vehicle.</p><p>If an EFo line matures into an aircraft project, Junkers assigns a new EF number rather than treating the research file as an accepted airframe.</p>"},
      {id:"acceptance",title:"Service acceptance",html:"<p>The Luftwaffe assigns an independent role-series identity after acceptance. EF number, slash alternative, and EFo ancestry do not determine the national ordinal or production series.</p>"},
      {id:"use",title:"Design-office use",html:"<p>The paired registers support Junkers' systematic research culture. Researchers can preserve component and theoretical work in EFo while the EF ledger remains a list of defined aircraft projects.</p>"},
      {id:"open",title:"Open register",html:"<p>The complete EF and EFo sequences, their chronology, gaps, canceled files, prototypes, and links to operational Junkers types remain open.</p>"}
    ],
    related:[{href:"junkers-aircraft.html",kicker:"Design authority",label:"Junkers Aircraft"},{href:"ef-131a-0.html",kicker:"Experimental lineage",label:"Ju 287 / EF 131 Evaluation Program"}],
    facts:[["Design authority","Junkers"],["Aircraft-project form","Ju EF ###"],["Alternative form","/1 · /2 · /3"],["Prototype form","V1 · V2 · V3"],["Research register","EFo"],["EFo promotion","New EF number"],["National service identity","Independent"],["Complete registers","Open"]]
  }),

  "heinkel-project-register": germanProjectRegisterArticle({
    title:"Heinkel project register",company:"Heinkel",eyebrow:"Heinkel · P. four-digit ledger and lettered design branches",
    lead:"The Heinkel project register is the company's <em>He P.####</em> aircraft-development sequence. Unlike Messerschmitt's Roman branches, Heinkel distinguishes major internal configurations with appended letters. A letter belongs to the project file and does not carry into the national production-series sequence after Luftwaffe acceptance.",
    canon:"The He P.#### form, A/B/C branch grammar, V prototype marker, separation from Messerschmitt's branch system, and independence of internal and national series letters are established. Complete chronology, projects, dates, prototypes, and service mappings remain open.",
    sections:[
      {id:"form",title:"Form",html:"<p>The standard form is <code>He P.####</code>. The number identifies a Heinkel project rather than an RLM or post-RLM type and does not encode the aircraft's role.</p>"},
      {id:"branches",title:"Lettered branches",html:"<p>Substantially different company configurations append letters directly to the project: <code>He P.1126A</code>, <code>He P.1126B</code>, and <code>He P.1126C</code>. The letters separate internal aerodynamic or structural answers.</p>"},
      {id:"prototype",title:"Prototype aircraft",html:"<p>A physical experimental aircraft adds the V number, as in <code>He P.1126C V1</code>. This illustrative identifier establishes the form, not the existence of project 1126.</p>"},
      {id:"acceptance",title:"Service acceptance",html:"<p>Internal letters do not carry into the Reichsluftgerätordnung series. A C-branch company prototype can become <code>He J[n]A-0</code> if it is the accepted pre-series form. The J ordinal depends upon national chronology.</p>"},
      {id:"distinction",title:"Distinction from Messerschmitt",html:"<p>Both companies use four-digit P ledgers, but the branch grammar distinguishes their documents. Messerschmitt uses Roman slash branches; Heinkel uses appended letters. The design-authority prefix must therefore be retained with the project number.</p>"},
      {id:"scope",title:"Aircraft and engine work",html:"<p>The aircraft-project register identifies airframes. Heinkel's continuing propulsion work requires separate engine and component documentation and must not be forced into the aircraft P sequence.</p>"},
      {id:"open",title:"Open register",html:"<p>The complete He P. chronology, branch counts, project subjects, prototype totals, and accepted postwar aircraft remain open.</p>"}
    ],
    related:[{href:"heinkel.html",kicker:"Design authority",label:"Heinkel"},{href:"he-162c.html",kicker:"Prototype-only branch",label:"He 162 Program"}],
    facts:[["Design authority","Heinkel"],["Internal form","He P.####"],["Branch form","A · B · C"],["Prototype form","V1 · V2 · V3"],["Internal letter determines service series","No"],["National acceptance ordinal","Independent"],["Engine register","Separate and open"],["Complete project ledger","Open"]]
  }),

  "arado-project-register": germanProjectRegisterArticle({
    title:"Arado project register",company:"Arado",eyebrow:"Arado · E. three-digit ledger and numbered alternatives",
    lead:"The Arado project register is the company's <em>Ar E.###</em> internal aircraft-development sequence. Alternative configurations use hyphenated numbers and prototype airframes use V numbers. The register continues through Arado's independent postwar design work and closes for new military projects when the bureau is absorbed by Messerschmitt.",
    canon:"The Ar E.### form, -1/-2/-3 alternatives, V prototype marker, independence from national service numbers, retention of Ar identities by accepted aircraft, later military-bureau absorption, and transfer of new work to the Messerschmitt register are established. Complete chronology, projects, absorption date, prototypes, transferred files, and service mappings remain open.",
    sections:[
      {id:"form",title:"Form",html:"<p>The standard form is <code>Ar E.###</code>. The three-digit number identifies an Arado development file and does not predict the aircraft's RLM or post-1948 service designation.</p>"},
      {id:"alternatives",title:"Numbered alternatives",html:"<p>Alternative layouts append hyphenated numbers: <code>Ar E.612-1</code>, <code>Ar E.612-2</code>, and <code>Ar E.612-3</code>. These are internal alternatives rather than production-standard numbers.</p>"},
      {id:"prototype",title:"Prototype aircraft",html:"<p>A completed experimental airframe adds V, as in <code>Ar E.612-2 V1</code>. The V convention remains legible to the Luftwaffe test establishment even though the preceding project grammar is unique to Arado.</p>"},
      {id:"acceptance",title:"Service acceptance",html:"<p>An accepted aircraft receives an independent national service designation. The E number and alternative do not determine the national role ordinal, major series, or production standard. Accepted types retain their Ar prefix for their complete service history.</p>"},
      {id:"absorption",title:"Absorption by Messerschmitt",html:"<p>Arado's military design bureau is later absorbed by Messerschmitt. The Ar E ledger ceases to receive new combined military projects. New designs produced by the successor authority enter the Me P register.</p><p>The exact absorption date, archive treatment of unfinished files, and civil continuation remain open.</p>"},
      {id:"retention",title:"Retained Arado identities",html:"<p>Corporate transfer does not rename aircraft already accepted as Arado designs. Service designations identify the authority responsible when the type entered the register rather than the factory or later owner.</p>"},
      {id:"open",title:"Open register",html:"<p>The complete Ar E sequence, its final independent number, unfinished projects, prototypes, service mappings, and relationship to a continuing civil brand remain open.</p>"}
    ],
    related:[{href:"arado.html",kicker:"Design authority",label:"Arado"},{href:"messerschmitt-project-register.html",kicker:"Successor military ledger",label:"Messerschmitt Project Register"},{href:"ar-234c-3-blitz.html",kicker:"Grandfathered service family",label:"Ar 234 Blitz"}],
    facts:[["Design authority","Arado"],["Internal form","Ar E.###"],["Alternative form","-1 · -2 · -3"],["Prototype form","V1 · V2 · V3"],["Later military authority","Messerschmitt"],["Accepted Ar identities","Retained"],["Absorption date","Open"],["Complete project ledger","Open"]]
  })
});

const appendProjectRegisterRelated = (id, items) => {
  const article = window.deepArticles[id];
  if (!article) return;
  article.related = article.related || [];
  for (const item of items) {
    if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
  }
};

appendProjectRegisterRelated("reichsluftgeraetordnung-1948",[
  {href:"german-aircraft-company-project-registers.html",kicker:"Pre-acceptance nomenclature",label:"German Aircraft Company Project Registers"}
]);

appendProjectRegisterRelated("german-clean-register-generation",[
  {href:"german-aircraft-company-project-registers.html",kicker:"Company-project layer",label:"German Aircraft Company Project Registers"}
]);

appendProjectRegisterRelated("messerschmitt",[
  {href:"messerschmitt-project-register.html",kicker:"Internal nomenclature",label:"Messerschmitt Project Register"}
]);

appendProjectRegisterRelated("focke-wulf",[
  {href:"focke-wulf-project-register.html",kicker:"Internal nomenclature",label:"Focke-Wulf Project Register"}
]);

appendProjectRegisterRelated("horten-gotha",[
  {href:"horten-gotha-project-register.html",kicker:"Internal nomenclature",label:"Horten-Gotha Project Register"}
]);

appendProjectRegisterRelated("junkers-aircraft",[
  {href:"junkers-ef-project-register.html",kicker:"Internal nomenclature",label:"Junkers EF Project Register"}
]);

appendProjectRegisterRelated("heinkel",[
  {href:"heinkel-project-register.html",kicker:"Internal nomenclature",label:"Heinkel Project Register"}
]);

appendProjectRegisterRelated("arado",[
  {href:"arado-project-register.html",kicker:"Internal nomenclature",label:"Arado Project Register"}
]);
