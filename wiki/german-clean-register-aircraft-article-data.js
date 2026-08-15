window.deepArticles = window.deepArticles || {};

const germanRegisterSources = [
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — Reichsluftgerätordnung and German design branches"},
  {href:"../transcript.md",label:"Master Transcript — revised German postwar aircraft development"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — German military and aerospace development"}
];

const germanRegisterRelated = [
  {href:"german-clean-register-generation.html",kicker:"Designation overview",label:"German Post-1948 Aircraft Register"},
  {href:"reichsluftgeraetordnung-1948.html",kicker:"Controlling regulation",label:"Reichsluftgerätordnung 1948"},
  {href:"german-early-jet-generation.html",kicker:"Inherited aircraft",label:"German Late-War and Immediate-Postwar Jets"},
  {href:"german-mature-atmospheric-fleet.html",kicker:"Later development",label:"German Postwar Atmospheric Design Branches"}
];

const germanRegisterArticle = config => ({
  category:config.category || "Military aircraft",
  eyebrow:config.eyebrow || "Germany · post-1948 role-series register",
  infoboxKicker:config.infoboxKicker || "German aircraft development branch",
  ...config,
  sources:germanRegisterSources,
  categories:config.categories || ["Greater German Reich","Luftwaffe","Military aircraft","Aircraft designation systems","Aerospace industry"]
});

const germanOpenBranch = config => germanRegisterArticle({
  title:config.title,
  lead:`${config.authority}'s ${config.role} branch continues under the Reichsluftgerätordnung 1948, but its accepted national ordinal, production-series letters, dates, performance, and armament have not yet been fixed. The former 500-series identity attached to this legacy page is withdrawn and is not an operational designation.<sup class='canon-note' data-provenance='a'>[a]</sup>`,
  canon:`The ${config.authority} design authority, its ${config.role} field, the post-1948 role-series system, and the qualitative development emphasis are established. National acceptance ordinal, service designation, public name, entry date, specifications, weapons, production, units, and operations remain open.`,
  sections:[
    {id:"branch",title:"Design branch",html:`<p>${config.lineage}</p>`},
    {id:"register",title:"Designation status",html:"<p>Newly accepted aircraft use a design-authority prefix followed by a role code and national acceptance ordinal. The ordinal is shared across all manufacturers within a role and cannot be inferred from a company's private project number.</p>"},
    {id:"projects",title:"Company projects and acceptance",html:`<p>${config.authority} uses the internal form <strong>${config.projectForm}</strong>. Paper studies, wind-tunnel articles, mock-ups, and company demonstrators do not consume a service number. Both identities are recorded only after national acceptance.</p>`},
    {id:"development",title:"Development emphasis",html:`<p>${config.emphasis}</p>`},
    {id:"limits",title:"Limits of the surviving record",html:"<p>No exact aircraft is restored merely to complete a fleet table. The accepted sequence will remain open until the post-1948 procurement chronology is reconstructed from current canon.</p>"}
  ],
  related:germanRegisterRelated,
  facts:[["Design authority",config.authority],["Role branch",config.role],["Service register","Reichsluftgerätordnung role series"],["Company project form",config.projectForm],["Former 500-series designation","Withdrawn"],["Accepted ordinal","Open"],["Production standard","Open"],["Detailed specifications","Open"]]
});

Object.assign(window.deepArticles, {
  "german-clean-register-generation": germanRegisterArticle({
    title:"German post-1948 aircraft register",category:"Aircraft designation systems",eyebrow:"Reichsluftgerätordnung 1948 · national role-series sequence",infoboxKicker:"German military-aircraft register",
    lead:"The Reichsluftgerätordnung 1948 replaces Germany's old monolithic RLM sequence for newly accepted aircraft with national role-series ordinals. It does not create a 500 block: the former Me 501, Fw 502, Ar 503, Ho 505, Ju 506, and successor catalog has been withdrawn.<sup class='canon-note' data-provenance='a'>[a]</sup>",
    canon:"The 1948 regulation, grandfathering of wartime designations, national role-series ordinals, design-authority prefixes, company project registers, and continued specialized design branches are established. The post-1948 J, S, B, A, Se, T, Sch, H, and Vb acceptance chronologies remain open.",
    sections:[
      {id:"system",title:"National role-series system",html:"<p>The operational form combines design authority, role code, national acceptance ordinal, major-series letter, and production-standard number. A notional <em>Me J4B-2</em> would therefore identify the fourth fighter accepted nationally, not Messerschmitt's fourth fighter project.</p>"},
      {id:"roles",title:"Role categories",html:"<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Code</th><th>Category</th></tr></thead><tbody><tr><td>J</td><td>Fighters and interceptors</td></tr><tr><td>S</td><td>Ground attack and close support</td></tr><tr><td>B</td><td>Bombers</td></tr><tr><td>A</td><td>Reconnaissance and surveillance</td></tr><tr><td>Se</td><td>Maritime patrol and attack</td></tr><tr><td>T / Sch / H / Vb</td><td>Transport, training, rotary-wing, and liaison or utility aircraft</td></tr></tbody></table></div>"},
      {id:"authorities",title:"Design authorities",html:"<p>Messerschmitt, Focke-Wulf, Horten-Gotha, Junkers, Heinkel, and Arado retain distinct company project registers. The manufacturer prefix identifies the design authority rather than every assembly plant.</p>"},
      {id:"inheritance",title:"Grandfathered aircraft",html:"<p>Me 262, Ta 183, Ho 229, Ar 234, and other designations assigned under the wartime system retain those identities. The clean register applies only to newly accepted aircraft and does not relabel the inherited fleet.</p>"},
      {id:"branches",title:"Postwar design branches",html:"<p>Germany preserves separate interceptor, air-superiority, strike, close-support, maritime, reconnaissance, and strategic-bomber work. That qualitative fleet structure is fixed even though exact accepted ordinals and specifications are not.</p>"},
      {id:"open",title:"Unreconstructed chronology",html:"<p>Company projects can proliferate without consuming service numbers. Exact J, S, B, A, and Se ordinals must remain open until the national acceptance chronology is reconstructed.</p>"}
    ],
    related:germanRegisterRelated,
    facts:[["Regulation","Reichsluftgerätordnung 1948"],["Sequence basis","National ordinal within each role"],["Manufacturer prefix","Design authority"],["Wartime designations","Grandfathered"],["500-series block","Withdrawn"],["Exact post-1948 ordinals","Open"],["Project numbers","Do not consume service ordinals"],["Detailed fleet register","Open"]]
  }),

  "me-501a-1-falke": germanOpenBranch({title:"Messerschmitt clean-register interceptor branch",authority:"Messerschmitt",role:"high-speed interceptor",projectForm:"Me P.#### / branch / V#",lineage:"Messerschmitt carries Me 262 and HG III experience into postwar high-speed interceptor projects. HG III contributes wing-root engine integration and aerodynamic research but is not an endless production alphabet.",emphasis:"The branch emphasizes speed, all-weather interception, engine integration, radar, and guided weapons within Germany's wider warning network."}),
  "fw-502a-1-habicht": germanOpenBranch({title:"Focke-Wulf clean-register fighter branch",authority:"Focke-Wulf",role:"frontline and air-superiority fighter",projectForm:"Fw P.### / Entwurf / V#",lineage:"Focke-Wulf's Ta 183 becomes the compact swept-wing bridge into the postwar fighter register rather than being displaced by a fabricated 500-series aircraft.",emphasis:"The branch repeatedly explores wing planform, handling, and the relationship between fighter agility, radar, missiles, and controlled interception."}),
  "ar-503a-1-blitz-ii": germanOpenBranch({title:"Arado clean-register strike branch",authority:"Arado",role:"fast strike and reconnaissance",projectForm:"Ar E.###-# / V#",lineage:"Arado carries the operational Ar 234 bomber and reconnaissance tradition into postwar fast-strike and surveillance work before its military bureau is absorbed.",emphasis:"The branch couples speed, reconnaissance sensors, conventional strike, and penetration work without fixing a particular service type or performance table."}),
  "ho-505a-1-nachtfluegel": germanOpenBranch({title:"Horten-Gotha clean-register flying-wing branch",authority:"Horten-Gotha",role:"flying-wing fighter, penetration, and reconnaissance aircraft",projectForm:"H Roman numeral / branch / V#",lineage:"The operational Ho 229 family gives Horten-Gotha institutional continuity and makes flying-wing experience a major postwar design school rather than a token batch.",emphasis:"Low observable consequences, pressure-vessel work, high-capacity structures, reconnaissance, bombers, fighters, and civilian transports compound across the branch."}),
  "ju-506a-1": germanOpenBranch({title:"Junkers clean-register maritime and heavy-aircraft branch",authority:"Junkers",role:"maritime, heavy-aircraft, and systematic research",projectForm:"Ju EF ### / branch / V#",lineage:"Junkers preserves experimental forward-swept-wing and structural work while emphasizing systematic research and maritime or heavy-aircraft systems.",emphasis:"The branch integrates long-range sensors, maritime missions, heavy structures, and guided-weapon support without assigning a provisional service ordinal."})
});
