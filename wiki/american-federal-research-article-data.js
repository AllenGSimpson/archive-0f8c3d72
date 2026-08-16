window.deepArticles=window.deepArticles||{};

const americanFederalResearchSources=[
  {href:"../transcript.md",label:"Master Transcript — American Jet Development conversation"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American aviation and federal research"}
];

const americanFederalResearchOfficial={
  naca:{href:"https://www.nasa.gov/reference/the-national-advisory-committee-for-aeronautics/",label:"NASA History — National Advisory Committee for Aeronautics"},
  langley:{href:"https://www.nasa.gov/history/from-biplanes-to-supersonic-flight/",label:"NASA History — Langley from biplanes to supersonic flight"},
  ames:{href:"https://www.nasa.gov/reference/ames-history/",label:"NASA History — Ames Aeronautical Laboratory"},
  inspections:{href:"https://www.nasa.gov/history-of-the-naca-inspections/",label:"NASA History — NACA inspections and laboratory expansion"},
  osrd:{href:"https://www.loc.gov/collections/office-of-scientific-research-and-development-reports/about-this-collection/",label:"Library of Congress — Office of Scientific Research and Development reports"},
  osrdGuide:{href:"https://guides.loc.gov/technical-reports/osrd",label:"Library of Congress — OSRD technical-report collection guide"},
  executiveOrder:{href:"https://www.presidency.ucsb.edu/documents/executive-order-8807-establishing-the-office-scientific-research-and-development-the",label:"Executive Order 8807 — Office of Scientific Research and Development"},
  bush:{href:"https://findingaids.loc.gov/repositories/19/resources/2249",label:"Library of Congress — Vannevar Bush Papers"}
};

const americanFederalPre="<sup class='canon-note' data-provenance='p'>[p]</sup>";
const americanFederalCanon="<sup class='canon-note' data-provenance='a'>[a]</sup>";
const americanFederalExtrapolated="<sup class='canon-note' data-provenance='e'>[e]</sup>";

const americanFederalResearchArticle=(config)=>({
  category:config.category||"Research institutions",
  ...config,
  sources:[...americanFederalResearchSources,...(config.sources||[])],
  categories:config.categories||[config.title,"United States","Federal research"]
});

Object.assign(window.deepArticles,{
  "langley-memorial-aeronautical-laboratory":americanFederalResearchArticle({
    title:"Langley Memorial Aeronautical Laboratory",
    eyebrow:"Hampton, Virginia · NACA laboratory · from 1917",
    infoboxTitle:"Langley Memorial Aeronautical Laboratory",
    infoboxKicker:"First permanent NACA research laboratory",
    lead:`Langley Memorial Aeronautical Laboratory is the first permanent research establishment of the National Advisory Committee for Aeronautics. Construction began in 1917 beside the Army airfield near Hampton, Virginia, and the laboratory entered operation in June 1920. Its wind tunnels, flight section, workshops, engine equipment, and technical reports established the federal method of long-duration aerodynamic research later extended to Ames and Cleveland.${americanFederalPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-fr1a2 writer=g kind=revision created=2026-08-16T14:35:00-06:00 -->Langley's location, construction from 1917, June 1920 opening, early staff and facilities, variable-density, full-scale and spin-tunnel work, airfoil research, and role in founding Ames and the Cleveland engine laboratory are inherited history.${americanFederalPre} Its continued operation and participation in the setting's high-speed and reusable-aerospace research are incorporated institutional continuity rather than a directly assigned postwar project register.${americanFederalExtrapolated} Exact post-1941 projects, staff, directors, budgets, name sequence, military relationship, and legal status in 2012 remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"establishment",title:"Establishment",html:`<p><a href='national-advisory-committee-for-aeronautics.html'>NACA</a> selected a tract beside the Army's Langley Field so that its laboratory could share an airfield while remaining a civilian research establishment. Construction began in 1917. The installation was named for Smithsonian secretary and aviation experimenter Samuel Pierpont Langley.${americanFederalPre}</p><p>The laboratory was dedicated on 11 June 1920. Its initial complement comprised four engineers, eleven technicians, and a small group of buildings and test installations.</p>`},
      {id:"facilities",title:"Early facilities",html:`<p>The first establishment included an atmospheric wind tunnel, engine-dynamometer laboratory, hangar, workshop, power plant, warehouse, administration space, and access to the shared flight field. These facilities permitted model, component, engine, and full-aircraft investigations.${americanFederalPre}</p><p>The Variable Density Tunnel entered the program during the 1920s. Pressurizing the test medium improved the relationship between small models and full-scale aircraft, producing systematic airfoil data used by designers.</p>`},
      {id:"research",title:"Research program before 1941",html:`<p>Langley work covered airfoils, drag reduction, cowlings, propellers, stability, control, structural and operating problems, full-scale aerodynamics, and flight measurements. NACA reports circulated results to government users and manufacturers.${americanFederalPre}</p><p>Full-scale and spin tunnels extended the laboratory's ability to investigate complete configurations and dangerous handling regimes. The second spin tunnel was under construction in 1941.</p>`},
      {id:"expansion",title:"Expansion of the laboratory system",html:`<p>By the late 1930s Langley lacked the land, electrical supply, and facility margin needed for every new program. Staff under Smith J. DeFrance helped establish <a href='ames-aeronautical-laboratory.html'>Ames Aeronautical Laboratory</a> at Moffett Field, while the Langley Power Plants Division supplied personnel and experience for the Cleveland engine laboratory.${americanFederalPre}</p><p>Langley remained the original center of the NACA system after these functions dispersed.</p>`},
      {id:"high-speed",title:"High-speed flight",html:`<p>The setting's NACA program continued aerodynamic, stability, control, inlet, swept-wing, transonic, and supersonic research after the divergence. Langley remained one of the principal federal facilities available for that work, alongside Ames, Cleveland, flight-test units, military ranges, and manufacturer laboratories.${americanFederalExtrapolated}</p><p>The division of individual postwar projects among those establishments has not been fixed. Historical project assignments are not imported automatically.</p>`},
      {id:"aerospace",title:"Reusable-aerospace work",html:`<p>NACA laboratories later supported the American progression from high-speed aircraft to runway-to-orbit vehicles. Langley's aerodynamic, structures, guidance, handling-quality, and model-test traditions provided capabilities required by lifting bodies and reusable flight.${americanFederalExtrapolated}</p><p>The archive does not identify a final Langley legal title, superior agency, complete facility list, or program register for 2012.</p>`}
    ],
    related:[
      {href:"national-advisory-committee-for-aeronautics.html",kicker:"Parent institution",label:"National Advisory Committee for Aeronautics"},
      {href:"ames-aeronautical-laboratory.html",kicker:"Second NACA laboratory",label:"Ames Aeronautical Laboratory"},
      {href:"lewis-propulsion-laboratory.html",kicker:"Propulsion laboratory",label:"Lewis Propulsion Laboratory"},
      {href:"century-series.html",kicker:"High-speed aircraft users",label:"Century Series"},
      {href:"american-orbital-vehicle-program.html",kicker:"Later research field",label:"American Orbital Vehicle Program"}
    ],
    sources:[americanFederalResearchOfficial.langley,americanFederalResearchOfficial.naca,americanFederalResearchOfficial.inspections],
    categories:["Langley Memorial Aeronautical Laboratory","NACA","American research institutions","Aeronautical laboratories","Virginia"],
    facts:[["Construction began","1917"],["Opened","11 June 1920"],["Location","Hampton, Virginia · adjoining Langley Field"],["Parent institution","National Advisory Committee for Aeronautics"],["Initial professional staff","Four engineers"],["Initial technical staff","Eleven technicians"],["Principal fields","Aerodynamics · flight · stability and control"],["Postwar legal identity","Open"]]
  }),

  "ames-aeronautical-laboratory":americanFederalResearchArticle({
    title:"Ames Aeronautical Laboratory",
    eyebrow:"Moffett Field, California · NACA high-speed laboratory · from 1939",
    infoboxTitle:"Ames Aeronautical Laboratory",
    infoboxKicker:"Second permanent NACA research laboratory",
    lead:`Ames Aeronautical Laboratory is the National Advisory Committee for Aeronautics establishment at Moffett Field, California. Authorized during the 1939 expansion of federal aeronautical research, it was planned as a second laboratory with room and electrical capacity for high-speed and full-scale wind tunnels, flight research, and new experimental facilities. The NACA approved the name Ames Aeronautical Laboratory in March 1940.${americanFederalPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-fr2a3 writer=g kind=revision created=2026-08-16T14:35:00-06:00 -->The 1939 authorization and site selection, 20 December 1939 groundbreaking, March 1940 name, Moffett Field location, Joseph Sweetman Ames namesake, Smith J. DeFrance leadership, and early tunnel and flight-facility plans are inherited history.${americanFederalPre} Continued high-speed work and participation in the setting's jet, supersonic, and reusable-aerospace programs are incorporated institutional continuity rather than a directly assigned postwar project register.${americanFederalExtrapolated} Exact post-1941 facility completions, projects, staff, directors, budgets, name sequence, and 2012 legal status remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"selection",title:"Site selection",html:`<p>NACA concluded in 1938–1939 that <a href='langley-memorial-aeronautical-laboratory.html'>Langley</a> could not accommodate the full expansion required by European aerodynamic and propulsion advances. A committee chaired by Charles Lindbergh selected Moffett Field after examining candidate locations.${americanFederalPre}</p><p>The California site offered a naval airfield, year-round flying weather, available land, and room for large electrical and tunnel installations.</p>`},
      {id:"construction",title:"Construction",html:`<p>Ground was broken on 20 December 1939. NACA approved the name Ames Aeronautical Laboratory on 12 March 1940 in honor of Joseph Sweetman Ames, a physicist, Johns Hopkins administrator, and former chairman of NACA.${americanFederalPre}</p><p>Smith J. DeFrance led the establishment of the laboratory with a cadre drawn substantially from Langley. Early work proceeded from temporary offices while permanent tunnels, a flight-research hangar, shops, and administration buildings were constructed.</p>`},
      {id:"facilities",title:"Early facilities",html:`<p>The initial plan included a large full-scale low-speed tunnel, a sixteen-foot high-speed tunnel, smaller experimental tunnels, and flight-research support. The forty-by-eighty-foot test section was intended to accept complete aircraft or very large components.${americanFederalPre}</p><p>The exact completion and commissioning chronology after 1 August 1941 remains open in the setting record.</p>`},
      {id:"method",title:"Research method",html:`<p>Ames combined tunnel testing with flight work and rapid comparison between calculated, model, and full-scale results. Its location allowed engineers to use Moffett Field aircraft and nearby manufacturers while remaining part of the federal NACA system.${americanFederalPre}</p><p>Requests could originate with the armed services, NACA committees, civil agencies, or manufacturers. Results entered technical reports and design conferences.</p>`},
      {id:"high-speed",title:"High-speed research",html:`<p>After the divergence, Ames remained part of the NACA high-speed establishment that supplied American jet, swept-wing, inlet, stability, transonic, and supersonic research. This work supported the early-jet generation, the <a href='century-series.html'>Century Series</a>, and later high-Mach aircraft.${americanFederalExtrapolated}</p><p>Individual historical Ames projects and exact tunnel commissioning dates are not imported unless the setting corpus assigns them.</p>`},
      {id:"aerospace",title:"Aerospace research",html:`<p>The NACA and Aerospace Force later used federal laboratories for lifting-body, thermal, guidance, control, simulation, and reusable-flight problems. Ames possessed the large tunnels, flight access, and high-speed institutional tradition required for participation.${americanFederalExtrapolated}</p><p>The laboratory's superior agency, later name, space-science duties, computing organization, and facility roster in 2012 remain open.</p>`}
    ],
    related:[
      {href:"national-advisory-committee-for-aeronautics.html",kicker:"Parent institution",label:"National Advisory Committee for Aeronautics"},
      {href:"langley-memorial-aeronautical-laboratory.html",kicker:"Founding laboratory",label:"Langley Memorial Aeronautical Laboratory"},
      {href:"lewis-propulsion-laboratory.html",kicker:"Propulsion counterpart",label:"Lewis Propulsion Laboratory"},
      {href:"american-early-jet-generation.html",kicker:"Research users",label:"American Early-Jet Generation"},
      {href:"century-series.html",kicker:"Supersonic research users",label:"Century Series"}
    ],
    sources:[americanFederalResearchOfficial.ames,americanFederalResearchOfficial.naca,americanFederalResearchOfficial.inspections],
    categories:["Ames Aeronautical Laboratory","NACA","American research institutions","Aeronautical laboratories","California"],
    facts:[["Established","1939"],["Groundbreaking","20 December 1939"],["Name approved","12 March 1940"],["Location","Moffett Field, California"],["Namesake","Joseph Sweetman Ames"],["First director","Smith J. DeFrance"],["Principal early field","High-speed and full-scale aerodynamics"],["Postwar legal identity","Open"]]
  }),

  "national-defense-research-committee":americanFederalResearchArticle({
    title:"National Defense Research Committee",
    eyebrow:"United States federal defense research · established June 1940",
    infoboxTitle:"National Defense Research Committee",
    infoboxKicker:"NDRC · civilian scientific coordination for national defense",
    lead:`The National Defense Research Committee (NDRC) is the federal body established on 27 June 1940 to correlate and support scientific research on mechanisms and devices of warfare. <a href='vannevar-bush.html'>Vannevar Bush</a> proposed the organization and became its chairman. In June 1941 it was placed within the new Office of Scientific Research and Development while retaining its committee identity.${americanFederalPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-fr3b4 writer=g kind=revision created=2026-08-16T14:35:00-06:00 -->The 27 June 1940 creation, Council of National Defense authority, Vannevar Bush chairmanship, defense-research purpose, initial contracting method, and June 1941 subordination to OSRD are inherited history.${americanFederalPre} Continued American neutrality is direct setting canon, but it does not establish NDRC's post-divergence organization or projects.${americanFederalCanon} Its work after 1 August 1941, budget, divisions, contracts, later chairmen, dissolution, and any Philippine War successor remain open. Historical wartime weapons, Manhattan Project involvement, and 1946 report series are not imported automatically.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"formation",title:"Formation",html:`<p>Bush presented President Franklin D. Roosevelt with a proposal for a compact civilian organization able to connect scientists directly to national-defense problems. On 27 June 1940 Roosevelt approved an order of the revived Council of National Defense creating NDRC.${americanFederalPre}</p><p>The committee was placed within the emergency federal structure rather than constituted as a military service laboratory.</p>`},
      {id:"purpose",title:"Jurisdiction",html:`<p>NDRC was charged with correlating and supporting scientific research on the mechanisms and devices of warfare. It could identify problems, arrange investigations, recommend contracts, and connect military demand to universities, laboratories, and industrial specialists.${americanFederalPre}</p><p>Production, procurement, operational requirements, and command remained with the armed services and established departments.</p>`},
      {id:"organization",title:"Organization",html:`<p>Bush served as chairman. The committee used technical divisions, sections, panels, and outside contractors rather than attempting to employ every specialist in one federal laboratory.${americanFederalPre}</p><p>Its pre-divergence work emphasized research organization, security, contracting, and translation of service problems into scientific tasks. The complete setting division list and project register have not been fixed.</p>`},
      {id:"osrd",title:"Subordination to OSRD",html:`<p>Executive Order 8807 created the <a href='office-of-scientific-research-and-development.html'>Office of Scientific Research and Development</a> on 28 June 1941. NDRC became a subordinate component of OSRD, and Bush moved from committee chairman to director of the superior office.${americanFederalPre}</p><p>The reorganization added a presidentially directed contracting authority and a separate medical-research committee.</p>`},
      {id:"naca",title:"Relationship to NACA",html:`<p>NDRC and the <a href='national-advisory-committee-for-aeronautics.html'>National Advisory Committee for Aeronautics</a> were separate institutions despite Bush's leadership of both. NACA possessed permanent aeronautical laboratories and statutory responsibility for flight research; NDRC coordinated a wider defense-science field.${americanFederalPre}</p><p>The <a href='naca-special-committee-on-jet-propulsion.html'>Special Committee on Jet Propulsion</a> was organized through NACA, not as an NDRC division.</p>`},
      {id:"neutrality",title:"After the divergence",html:`<p>The United States did not enter the European or Japanese wars in 1941. NDRC therefore did not automatically acquire the scale, priorities, foreign relationships, or project portfolio of its historical wartime counterpart.${americanFederalCanon}</p><p>Its exact continuation under neutrality, later reorganization, and role in the Philippine War remain open.</p>`}
    ],
    related:[
      {href:"office-of-scientific-research-and-development.html",kicker:"Superior office from June 1941",label:"Office of Scientific Research and Development"},
      {href:"vannevar-bush.html",kicker:"Founding chairman",label:"Vannevar Bush"},
      {href:"national-advisory-committee-for-aeronautics.html",kicker:"Separate aeronautical institution",label:"National Advisory Committee for Aeronautics"},
      {href:"naca-special-committee-on-jet-propulsion.html",kicker:"Separate jet committee",label:"NACA Special Committee on Jet Propulsion"},
      {href:"american-jet-engine-industry.html",kicker:"Related technical mobilization",label:"Jet-Engine Industry of the United States"}
    ],
    sources:[americanFederalResearchOfficial.osrd,americanFederalResearchOfficial.osrdGuide,americanFederalResearchOfficial.bush],
    categories:["National Defense Research Committee","American federal agencies","Military research","Science policy","Vannevar Bush"],
    facts:[["Established","27 June 1940"],["Creating authority","Council of National Defense order approved by the president"],["Chairman","Vannevar Bush"],["Jurisdiction","Scientific research on mechanisms and devices of warfare"],["Method","Technical divisions and external research contracts"],["Superior office from 28 June 1941","Office of Scientific Research and Development"],["Post-divergence project register","Open"],["Dissolution or successor","Open"]]
  }),

  "office-of-scientific-research-and-development":americanFederalResearchArticle({
    title:"Office of Scientific Research and Development",
    eyebrow:"Executive Office of the President · federal research authority · established June 1941",
    infoboxTitle:"Office of Scientific Research and Development",
    infoboxKicker:"OSRD · presidential defense-science office",
    lead:`The Office of Scientific Research and Development (OSRD) is the presidential research authority established by Executive Order 8807 on 28 June 1941. Located within the Office for Emergency Management of the Executive Office of the President, it was created to assure scientific and medical research for national defense. <a href='vannevar-bush.html'>Vannevar Bush</a> became director, and the National Defense Research Committee became one of its subordinate bodies.${americanFederalPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-fr4a5 writer=g kind=revision created=2026-08-16T14:35:00-06:00 -->Executive Order 8807, the 28 June 1941 establishment, location in the Office for Emergency Management, presidential supervision, Vannevar Bush directorship, NDRC and Committee on Medical Research structure, contracting powers, and existence at the August divergence are inherited history.${americanFederalPre} Continued American neutrality is direct setting canon, but it does not establish OSRD's post-divergence organization or portfolio.${americanFederalCanon} Full setting organization, contracts, appropriations, foreign cooperation, later directors, dissolution, and successors remain open. Historical wartime atomic, radar, weapons, and medical programs after 1 August 1941 are not imported automatically.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"establishment",title:"Establishment",html:`<p>President Franklin D. Roosevelt issued Executive Order 8807 on 28 June 1941 during the declared national emergency. The order placed OSRD inside the Office for Emergency Management and made its director responsible directly to the president.${americanFederalPre}</p><p>Bush, then chairman of NDRC and NACA, received the first directorship.</p>`},
      {id:"duties",title:"Duties and powers",html:`<p>OSRD was responsible for coordinating scientific and medical research related to national defense. Its director could arrange contracts and agreements with universities, hospitals, research institutions, firms, and other agencies for studies, experiments, development, and reports.${americanFederalPre}</p><p>Appropriations, presidential allocations, personnel, supplies, facilities, and shared emergency-office services supported the work.</p>`},
      {id:"organization",title:"Organization",html:`<p>The <a href='national-defense-research-committee.html'>National Defense Research Committee</a> became the principal technical-research component. A Committee on Medical Research addressed medical problems, while an advisory council connected OSRD to the Army, Navy, NACA, and other federal authorities.${americanFederalPre}</p><p>Members of the principal committees served without salary as committee members, though expenses were reimbursable. Contractors performed much of the research.</p>`},
      {id:"relationships",title:"Relations with other institutions",html:`<p>OSRD did not absorb the armed services, <a href='national-advisory-committee-for-aeronautics.html'>NACA</a>, the National Bureau of Standards, universities, or industrial laboratories. It funded and coordinated work across their boundaries while service departments retained procurement and operational responsibility.${americanFederalPre}</p><p>NACA's jet-propulsion committee and laboratories therefore remained identifiable aeronautical institutions alongside the new presidential office.</p>`},
      {id:"divergence",title:"Position at the divergence",html:`<p>OSRD had existed for thirty-four days when the setting diverged on 1 August 1941. Its executive order and initial offices were already in force, but its historical wartime expansion had not yet occurred.${americanFederalPre}</p><p>American neutrality changed the scale and urgency of defense mobilization.${americanFederalCanon} The office could retain research, contracting, and advisory functions without reproducing the historical portfolio created by American belligerency.${americanFederalExtrapolated}</p>`},
      {id:"later",title:"Later history",html:`<p>The archive has not fixed OSRD appropriations, divisions, project numbers, foreign exchanges, role in atomic research, relationship to later computing, Philippine War responsibilities, dissolution, or successor agencies. Post-divergence historical OSRD records remain research analogues rather than setting events.</p>`}
    ],
    related:[
      {href:"national-defense-research-committee.html",kicker:"Subordinate research body",label:"National Defense Research Committee"},
      {href:"vannevar-bush.html",kicker:"First director",label:"Vannevar Bush"},
      {href:"national-advisory-committee-for-aeronautics.html",kicker:"Independent aeronautical institution",label:"National Advisory Committee for Aeronautics"},
      {href:"naca-special-committee-on-jet-propulsion.html",kicker:"Parallel 1941 aeronautical body",label:"NACA Special Committee on Jet Propulsion"},
      {href:"computing.html",kicker:"Related technical field",label:"Computing"}
    ],
    sources:[americanFederalResearchOfficial.executiveOrder,americanFederalResearchOfficial.osrd,americanFederalResearchOfficial.osrdGuide,americanFederalResearchOfficial.bush],
    categories:["Office of Scientific Research and Development","American federal agencies","Science policy","Military research","Executive Office of the President"],
    facts:[["Established","28 June 1941"],["Authority","Executive Order 8807"],["Placement","Office for Emergency Management · Executive Office of the President"],["Director","Vannevar Bush"],["Principal technical body","National Defense Research Committee"],["Medical body","Committee on Medical Research"],["Status on 1 August 1941","Operating for 34 days"],["Post-divergence organization","Open"],["Dissolution or successor","Open"]]
  })
});

const americanFederalAddRelated=(article,item)=>{
  if(article&&!article.related.some(link=>link.href===item.href))article.related.push(item);
};

const americanFederalNaca=window.deepArticles["national-advisory-committee-for-aeronautics"];
if(americanFederalNaca){
  const laboratories=americanFederalNaca.sections.find(section=>section.id==="laboratories");
  if(laboratories){
    laboratories.html=laboratories.html.replace("Langley Memorial Aeronautical Laboratory","<a href='langley-memorial-aeronautical-laboratory.html'>Langley Memorial Aeronautical Laboratory</a>");
    laboratories.html=laboratories.html.replace("Ames Aeronautical Laboratory","<a href='ames-aeronautical-laboratory.html'>Ames Aeronautical Laboratory</a>");
  }
  americanFederalAddRelated(americanFederalNaca,{href:"langley-memorial-aeronautical-laboratory.html",kicker:"First federal laboratory",label:"Langley Memorial Aeronautical Laboratory"});
  americanFederalAddRelated(americanFederalNaca,{href:"ames-aeronautical-laboratory.html",kicker:"High-speed laboratory",label:"Ames Aeronautical Laboratory"});
}

const americanFederalBush=window.deepArticles["vannevar-bush"];
if(americanFederalBush){
  const defense=americanFederalBush.sections.find(section=>section.id==="defense");
  if(defense){
    defense.html=defense.html.replace("National Defense Research Committee","<a href='national-defense-research-committee.html'>National Defense Research Committee</a>");
    defense.html=defense.html.replace("Office of Scientific Research and Development","<a href='office-of-scientific-research-and-development.html'>Office of Scientific Research and Development</a>");
  }
  americanFederalAddRelated(americanFederalBush,{href:"national-defense-research-committee.html",kicker:"Founding chairmanship",label:"National Defense Research Committee"});
  americanFederalAddRelated(americanFederalBush,{href:"office-of-scientific-research-and-development.html",kicker:"Federal directorship",label:"Office of Scientific Research and Development"});
}
