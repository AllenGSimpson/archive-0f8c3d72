window.deepArticles=window.deepArticles||{};

const americanJetOriginsSources=[
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — American jet-engine industrial ladder"},
  {href:"../transcript.md",label:"Master Transcript — American Jet Development conversation"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — American aviation development"}
];

const americanJetOriginsOfficial={
  arnold:{href:"https://www.af.mil/News/Photos/igphoto/2000593112/",label:"United States Air Force — General Henry H. “Hap” Arnold"},
  naca:{href:"https://www.nasa.gov/reference/the-national-advisory-committee-for-aeronautics/",label:"NASA History — National Advisory Committee for Aeronautics"},
  nacaFounding:{href:"https://www.nasa.gov/history/110-years-ago-the-national-advisory-committee-for-aeronautics-founded/",label:"NASA History — establishment and laboratories of the NACA"},
  nacaBios:{href:"https://www.nasa.gov/history/naca/bio.html",label:"NASA History — NACA biographies"},
  committee:{href:"https://www.nasa.gov/wp-content/uploads/2015/04/probing_the_sky.pdf",label:"NASA History — Probing the Sky: the 1941 Special Committee on Jet Propulsion"},
  nasaJet:{href:"https://www.nasa.gov/special-projects-laboratory-early-jet-engines/",label:"NASA Glenn — Special Projects Laboratory and early American jet engines"},
  transfer:{href:"https://www.si.edu/object/general-electric-i-turbojet-engine%3Anasm_A19650239000",label:"Smithsonian National Air and Space Museum — General Electric I-A turbojet"},
  whittle:{href:"https://www.si.edu/object/nasm_A19500082000",label:"Smithsonian National Air and Space Museum — Whittle W.1X turbojet"},
  p59:{href:"https://www.si.edu/object/bell-xp-59a-airacomet%3Anasm_A19450016000",label:"Smithsonian National Air and Space Museum — Bell XP-59A Airacomet"},
  p59Museum:{href:"https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195780/bell-p-59b-airacomet/",label:"National Museum of the United States Air Force — Bell P-59B Airacomet"},
  bell:{href:"https://www.nasa.gov/history/x1/bell.html",label:"NASA History — Lawrence Bell and Bell Aircraft"},
  x1:{href:"https://www.nasa.gov/aeronautics/first-generation-x-1/",label:"NASA — first-generation Bell X-1 research aircraft"},
  durand:{href:"https://engineering.stanford.edu/about/history/heroes/2011-heroes/william-f-durand",label:"Stanford Engineering — William F. Durand"},
  durandArchive:{href:"https://siarchives.si.edu/collections/siris_arc_398500",label:"Smithsonian Institution Archives — William Frederick Durand portrait and record"},
  bush:{href:"https://findingaids.loc.gov/repositories/19/resources/2249",label:"Library of Congress — Vannevar Bush Papers"},
  bushMit:{href:"https://lemelson.mit.edu/resources/vannevar-bush",label:"MIT Lemelson Program — Vannevar Bush"}
};

const jetOriginAuthor="<sup class='canon-note' data-provenance='a'>[a]</sup>";
const jetOriginPre="<sup class='canon-note' data-provenance='p'>[p]</sup>";
const jetOriginExtrapolated="<sup class='canon-note' data-provenance='e'>[e]</sup>";
const arnoldPortrait={src:"https://commons.wikimedia.org/wiki/Special:FilePath/Henry%20H.%20Arnold.jpg",alt:"Black-and-white formal portrait of Henry H. Arnold in uniform",caption:"Henry H. “Hap” Arnold · United States Air Force photograph · public domain"};
const p59Image={src:"https://commons.wikimedia.org/wiki/Special:FilePath/Bell%20P-59%20Airacomet%20060913-F-1234P-011.jpg",alt:"Bell P-59 Airacomet viewed from the left side",caption:"Bell P-59 Airacomet · United States Air Force photograph · public domain"};
const nacaEmblem={src:"https://commons.wikimedia.org/wiki/Special:FilePath/NACA%20logo.svg",alt:"Winged shield emblem bearing the letters NACA",caption:"NACA standard emblem approved 24 April 1941 · federal-government work · public domain"};
const durandPortrait={src:"https://commons.wikimedia.org/wiki/Special:FilePath/William%20Durand.jpg",alt:"Black-and-white portrait of William F. Durand",caption:"William F. Durand · federal-government photograph · public domain"};
const bushPortrait={src:"https://commons.wikimedia.org/wiki/Special:FilePath/Vannevar%20Bush.jpg",alt:"Vannevar Bush seated at a desk",caption:"Vannevar Bush, c. 1940–1944 · Office for Emergency Management photograph · public domain"};

const americanJetOriginArticle=(config)=>({
  category:config.category||"United States",
  ...config,
  sources:[...americanJetOriginsSources,...(config.sources||[])],
  categories:config.categories||[config.title,"United States","American aviation"]
});

Object.assign(window.deepArticles,{
  "henry-h-arnold":americanJetOriginArticle({
    title:"Henry H. Arnold",
    category:"Biographies",
    eyebrow:"Army aviator · Chief of the Air Corps · patron of jet propulsion",
    infoboxTitle:"Henry Harley Arnold",
    infoboxKicker:"Institutional founder of the American jet program",
    portrait:arnoldPortrait,
    lead:`Henry Harley “Hap” Arnold was an American Army aviator and senior air officer who initiated the federal investigation of jet propulsion in 1941. His February request to the National Advisory Committee for Aeronautics produced the Special Committee on Jet Propulsion; his visit to Britain opened the separate transfer of Frank Whittle's turbojet technology. The two initiatives survived the August 1941 divergence and made Arnold the institutional founder of the American jet-engine program.${jetOriginPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo1i2 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->Arnold's birth, education, early aviation career, Air Corps leadership, February 1941 request, British inspection, and pre-divergence jet initiative are inherited history.${jetOriginPre} Continuation of the committee, British transfer, General Electric engine work, and Bell aircraft project after 1 August 1941 is accepted reconstruction from the later American Jet Development transcript.${jetOriginExtrapolated} Later commands, promotions, retirement, health, death, and posthumous rank remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"early",title:"Early life and military aviation",html:`<p>Arnold was born at Gladwyne, Pennsylvania, on 25 June 1886 and graduated from the United States Military Academy in 1907. He learned to fly at the Wright brothers' school and became one of the Army's earliest military aviators.${jetOriginPre}</p><p>His career joined flight experience to administration, procurement, training, and the effort to make aviation a permanent military institution. By 1938 he was Chief of the Air Corps.</p>`},
      {id:"warning",title:"Jet-propulsion warning",html:`<p>Reports of German rocket and turbine work convinced Arnold that conventional fighter development might be overtaken by a new propulsion regime. On 25 February 1941 he asked <a href='national-advisory-committee-for-aeronautics.html'>NACA</a> chairman <a href='vannevar-bush.html'>Vannevar Bush</a> to assemble specialists able to judge jet propulsion rather than leave the subject to isolated firms.${jetOriginPre}</p><p>Bush established the <a href='naca-special-committee-on-jet-propulsion.html'>Special Committee on Jet Propulsion</a> in March under <a href='william-f-durand.html'>William F. Durand</a>. Arnold's intervention therefore produced a national forum before the United States possessed a flightworthy turbojet of its own.</p>`},
      {id:"britain",title:"British mission",html:`<p>During a spring 1941 visit to Britain, Arnold received a briefing on the Gloster experimental aircraft and Frank Whittle's centrifugal-flow engine. He returned with evidence that the turbojet was a practical flight technology rather than a distant laboratory possibility.${jetOriginPre}</p><p>British and American officials opened technical discussions before the divergence. Arnold then sponsored the <a href='british-american-turbojet-transfer.html'>British–American turbojet transfer</a> that placed a W.1X engine and W.2B drawings with General Electric.</p>`},
      {id:"neutrality",title:"Program under continued neutrality",html:`<p>The United States did not enter the European or Japanese wars. Arnold consequently lacked the total-war aircraft establishment that historically turned experimental work into enormous production, but the jet initiative did not stop. General Electric developed the engine, Bell built the <a href='p-59-airacomet.html'>P-59 Airacomet</a>, and NACA laboratories continued propulsion research.${jetOriginAuthor}</p><p>The result was a technically active but procurement-poor program. Engines, test cells, and aircraft could mature while operational jet groups remained politically difficult to fund.</p>`},
      {id:"method",title:"Institutional method",html:`<p>Arnold's two-track response proved more durable than any one early engine. The NACA committee compared domestic approaches; the British transfer gave General Electric working hardware; the Army linked an engine contractor to an aircraft contractor; and federal laboratories retained an independent test role.</p><p>Later American practice strengthened this method by keeping important engines alive in testbeds when an intended airframe failed. The Century Series and reusable-aerospace programs inherited an institution designed to preserve technical options.${jetOriginExtrapolated}</p>`},
      {id:"later",title:"Later biography",html:"<p>The post-divergence record has not established Arnold's exact offices after the early jet program, whether the Army Air Forces organization retained its historical name sequence, his retirement date, his terminal rank, or the date and circumstances of his death. Those real-world biographical events are not imported automatically.</p>"}
    ],
    related:[
      {href:"naca-special-committee-on-jet-propulsion.html",kicker:"Federal technical body",label:"NACA Special Committee on Jet Propulsion"},
      {href:"british-american-turbojet-transfer.html",kicker:"1941 technical transfer",label:"British–American Turbojet Transfer"},
      {href:"american-jet-engine-industry.html",kicker:"Industrial consequence",label:"Jet-Engine Industry of the United States"},
      {href:"p-59-airacomet.html",kicker:"First American jet aircraft",label:"P-59 Airacomet"},
      {href:"bell-aircraft.html",kicker:"Airframe contractor",label:"Bell Aircraft"}
      ,{href:"national-advisory-committee-for-aeronautics.html",kicker:"Federal research establishment",label:"National Advisory Committee for Aeronautics"}
    ],
    sources:[americanJetOriginsOfficial.arnold,americanJetOriginsOfficial.committee,americanJetOriginsOfficial.nasaJet],
    categories:["Henry H. Arnold","American aviators","United States Army Air Corps","Jet propulsion","American military leaders"],
    facts:[["Born","25 June 1886 · Gladwyne, Pennsylvania"],["Education","United States Military Academy · class of 1907"],["Flight instruction","Wright brothers' school"],["Chief of the Air Corps","From 1938"],["Jet-propulsion request","25 February 1941"],["Federal response","NACA Special Committee on Jet Propulsion"],["British technical access","Spring–autumn 1941"],["Post-1941 career","Open"]]
  }),

  "naca-special-committee-on-jet-propulsion":americanJetOriginArticle({
    title:"NACA Special Committee on Jet Propulsion",
    category:"Research institutions",
    eyebrow:"Federal advisory committee · established March 1941",
    infoboxKicker:"First national American jet-propulsion coordinating body",
    lead:`The NACA Special Committee on Jet Propulsion was the American federal advisory body formed in March 1941 to investigate turbine, ducted-flow, rocket, and related aircraft propulsion. <a href='vannevar-bush.html'>Vannevar Bush</a> established it after <a href='henry-h-arnold.html'>Henry H. Arnold</a> warned that foreign propulsion advances could make existing fighters obsolete. Chaired by <a href='william-f-durand.html'>William F. Durand</a>, the committee brought military services, laboratories, universities, and turbine manufacturers into one technical forum before the August 1941 divergence.${jetOriginPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo2i3 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->Arnold's request, Bush's response, Durand's chairmanship, committee membership, and its pre-divergence purpose are inherited history.${jetOriginPre} Continuation under neutrality, connection to the British transfer, support for several industrial paths, and the committee's later propulsion role are accepted reconstruction from the later transcript.${jetOriginExtrapolated} Post-divergence minutes, budgets, contracts, membership changes, reports, superior office, and dissolution remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"formation",title:"Formation",html:`<p>Arnold wrote to <a href='national-advisory-committee-for-aeronautics.html'>NACA</a> chairman <a href='vannevar-bush.html'>Vannevar Bush</a> on 25 February 1941 requesting a group of scientists able to assess jet and rocket propulsion. Bush formally organized the committee in March and appointed retired Stanford engineer <a href='william-f-durand.html'>William F. Durand</a> as chairman.${jetOriginPre}</p><p>The committee was advisory and coordinating rather than a national design bureau. It compared proposals, directed questions toward suitable laboratories and firms, and reported to the federal aviation establishment.</p>`},
      {id:"membership",title:"Membership",html:`<p>Representatives came from the Army Air Corps, Navy Bureau of Aeronautics, National Bureau of Standards, Johns Hopkins University, Massachusetts Institute of Technology, and NACA. Industrial membership included General Electric, Westinghouse, and Allis-Chalmers, firms with turbine or turbosupercharger experience.${jetOriginPre}</p><p>This composition placed users, researchers, and manufacturers in the same room while allowing each organization to retain its own facilities and engineering staff.</p>`},
      {id:"program",title:"Domestic investigations",html:`<p>The committee considered more than a copied British engine. It sponsored or coordinated separate American turbine and jet investigations so that centrifugal, axial, ducted, and other proposals could be compared. Durand's committee treated technical diversity as insurance against an immature field.${jetOriginPre}</p><p>The precise post-divergence division of contracts among General Electric, Westinghouse, Allis-Chalmers, universities, and NACA laboratories remains open.</p>`},
      {id:"transfer",title:"Relationship to the British transfer",html:`<p>The committee and the <a href='british-american-turbojet-transfer.html'>British–American turbojet transfer</a> were connected but not identical. Arnold negotiated access to Whittle hardware through military and diplomatic channels. The committee supplied a national technical framework within which the imported engine could be evaluated beside domestic work.${jetOriginAuthor}</p><p>General Electric received the W.1X engine and W.2B drawings. Bell Aircraft received the associated airframe task, while NACA retained independent research and test responsibilities.</p>`},
      {id:"neutrality",title:"Work after the divergence",html:`<p>American neutrality removed the historical wartime expansion but not the strategic warning that had created the committee. Jet propulsion remained funded as a research and prototype problem. The first American engine and the <a href='p-59-airacomet.html'>P-59</a> therefore advanced without becoming the center of a mass combat-aircraft program.${jetOriginAuthor}</p><p>Committee work contributed to the setting's characteristic condition before the Philippine War: a nation with sophisticated test articles and too few operational jet squadrons.</p>`},
      {id:"legacy",title:"Legacy",html:`<p>The committee established three practices that survived any later reorganization: federal technical comparison, competition among engine firms, and research continuity outside a single aircraft contract. Lewis laboratories, manufacturer test cells, and the mature <a href='american-jet-engine-industry.html'>American jet-engine industry</a> inherited those practices.${jetOriginExtrapolated}</p><p>The date on which the committee was dissolved, renamed, or absorbed into another propulsion body has not been registered.</p>`}
    ],
    related:[
      {href:"henry-h-arnold.html",kicker:"Initiating air officer",label:"Henry H. Arnold"},
      {href:"british-american-turbojet-transfer.html",kicker:"Parallel technical-access program",label:"British–American Turbojet Transfer"},
      {href:"lewis-propulsion-laboratory.html",kicker:"Federal research successor",label:"Lewis Propulsion Laboratory"},
      {href:"american-jet-engine-industry.html",kicker:"Industrial system",label:"Jet-Engine Industry of the United States"},
      {href:"general-electric.html",kicker:"Early industrial participant",label:"General Electric"}
      ,{href:"national-advisory-committee-for-aeronautics.html",kicker:"Parent research establishment",label:"National Advisory Committee for Aeronautics"}
      ,{href:"william-f-durand.html",kicker:"Committee chairman",label:"William F. Durand"}
      ,{href:"vannevar-bush.html",kicker:"Appointing chairman",label:"Vannevar Bush"}
    ],
    sources:[americanJetOriginsOfficial.committee,americanJetOriginsOfficial.nasaJet],
    categories:["NACA","Jet propulsion","American research institutions","Federal advisory committees","American aviation"],
    facts:[["Established","March 1941"],["Initiating request","Henry H. Arnold · 25 February 1941"],["Appointing authority","Vannevar Bush · NACA chairman"],["Chairman","William F. Durand"],["Military members","Army Air Corps · Navy Bureau of Aeronautics"],["Industrial members","General Electric · Westinghouse · Allis-Chalmers"],["Function","Investigation and technical coordination"],["Dissolution or successor","Open"]]
  }),

  "national-advisory-committee-for-aeronautics":americanJetOriginArticle({
    title:"National Advisory Committee for Aeronautics",
    category:"Research institutions",
    eyebrow:"United States federal aeronautical research establishment · founded 1915",
    infoboxTitle:"National Advisory Committee for Aeronautics",
    infoboxKicker:"NACA · federal aviation research and coordination",
    landscape:nacaEmblem,
    lead:`The National Advisory Committee for Aeronautics (NACA) is the federal institution established in 1915 to supervise, coordinate, and conduct the scientific study of flight. It developed from an unpaid advisory committee into a laboratory system linking government, military services, universities, and aircraft manufacturers.${jetOriginPre} Its Langley, Ames, and Cleveland establishments supplied much of the aerodynamic and propulsion research behind American jet aircraft and the later reusable-aerospace program.${jetOriginAuthor}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo3i4 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->NACA's 1915 establishment, statutory purpose, committee system, Langley, pre-divergence Ames and Cleveland expansion, Bush chairmanship, and 1941 jet committee are inherited history.${jetOriginPre} Continued propulsion work, independent swept-wing research, high-speed-flight support, and later reusable-aerospace participation are accepted and subsequently relied-upon transcript reconstruction.${jetOriginExtrapolated} Post-1941 budgets, employment, chairmen, reorganizations, laboratory names, Aerospace Force relationship, and final successor remain open; historical NASA succession is not presumed.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"establishment",title:"Establishment",html:`<p>Congress created NACA on 3 March 1915 through a rider to the Naval Appropriations Act. The twelve-member main committee drew appointed representatives from the military services, federal scientific institutions, and civilian aeronautics. Its statutory duty was to supervise and direct scientific study of the problems of flight and to seek practical solutions.${jetOriginPre}</p><p>The main committee acted as a governing board. An executive committee handled continuing business, while technical subcommittees addressed aerodynamics, power plants, structures and materials, and aircraft operating problems.</p>`},
      {id:"laboratories",title:"Laboratories",html:`<p>NACA began building the Langley Memorial Aeronautical Laboratory in Virginia in 1917; the laboratory entered operation in 1920. Wind tunnels, flight research, engine stands, workshops, and an engineering staff allowed the committee to perform work that manufacturers and universities could not sustain independently.${jetOriginPre}</p><p>European high-speed and propulsion advances prompted a second expansion. Ames Aeronautical Laboratory was established in California in 1939–1940, and construction of the Aircraft Engine Research Laboratory began at Cleveland in January 1941.${jetOriginPre} The Cleveland establishment later became commonly known as <a href='lewis-propulsion-laboratory.html'>Lewis Propulsion Laboratory</a>.${jetOriginAuthor}</p>`},
      {id:"method",title:"Research method",html:`<p>NACA circulated technical reports, operated common test facilities, and accepted research questions from military and civil users. Advisory committees brought together competing firms and public laboratories to identify problems that exceeded a single aircraft contract.${jetOriginPre}</p><p>Manufacturers retained responsibility for their own designs. NACA supplied comparative measurements, tunnel and flight data, test methods, and an independent technical forum.</p>`},
      {id:"expansion",title:"Expansion in 1939–1941",html:`<p><a href='vannevar-bush.html'>Vannevar Bush</a> chaired NACA during the expansion that created the Ames and Cleveland laboratories. Reports from Europe emphasized the need for higher-speed tunnels, engine research, and closer coordination between civilian specialists and the armed services.${jetOriginPre}</p><p>The committee approved its winged-shield standard emblem on 24 April 1941. By the August divergence, NACA possessed a permanent headquarters, an established Virginia laboratory, a new high-speed laboratory in California, and a propulsion laboratory under construction in Ohio.</p>`},
      {id:"jet",title:"Jet propulsion",html:`<p>On 25 February 1941 <a href='henry-h-arnold.html'>Henry H. Arnold</a> asked Bush to organize a group able to evaluate turbine and rocket propulsion. Bush recalled <a href='william-f-durand.html'>William F. Durand</a> to chair the resulting <a href='naca-special-committee-on-jet-propulsion.html'>Special Committee on Jet Propulsion</a>.${jetOriginPre}</p><p>The committee and NACA laboratories continued after the divergence. They evaluated domestic approaches beside the British engine transferred to General Electric and preserved public test capacity during a period of limited operational procurement.${jetOriginAuthor}</p>`},
      {id:"high-speed",title:"High-speed flight",html:`<p>NACA conducted independent swept-wing investigations during 1946–1949, replacing information that the United States did not obtain from a German surrender archive. Wind-tunnel, free-flight, stability, inlet, and control research supported the F-86 and the subsequent <a href='century-series.html'>Century Series</a>.${jetOriginAuthor}</p><p>Instrumented aircraft and laboratory facilities also supported transonic and supersonic flight, combined-cycle propulsion, and the progression from experimental aircraft to runway-to-orbit vehicles.</p>`},
      {id:"space",title:"Aerospace research",html:`<p>NACA laboratories and Aerospace Force institutions dominated the early American reusable-flight program. The setting did not reproduce a single historical NASA monopoly; federal laboratories, military test organizations, manufacturers, and universities retained overlapping responsibilities.${jetOriginAuthor}</p><p>The date and statute of any NACA reorganization, the name of its later federal successor, and the distribution of laboratories in 2012 have not been registered.</p>`}
    ],
    related:[
      {href:"naca-special-committee-on-jet-propulsion.html",kicker:"Propulsion advisory body",label:"NACA Special Committee on Jet Propulsion"},
      {href:"lewis-propulsion-laboratory.html",kicker:"Cleveland establishment",label:"Lewis Propulsion Laboratory"},
      {href:"vannevar-bush.html",kicker:"Chairman during expansion",label:"Vannevar Bush"},
      {href:"william-f-durand.html",kicker:"Founding civilian chairman",label:"William F. Durand"},
      {href:"american-jet-engine-industry.html",kicker:"Industrial field",label:"Jet-Engine Industry of the United States"},
      {href:"century-series.html",kicker:"High-speed research users",label:"Century Series"}
    ],
    sources:[americanJetOriginsOfficial.naca,americanJetOriginsOfficial.nacaFounding,americanJetOriginsOfficial.nacaBios,americanJetOriginsOfficial.committee],
    categories:["National Advisory Committee for Aeronautics","American research institutions","American aviation","Federal agencies","Aeronautical research"],
    facts:[["Established","3 March 1915"],["Jurisdiction","United States federal government"],["Statutory field","Scientific study of flight"],["First laboratory","Langley Memorial Aeronautical Laboratory"],["Pre-divergence expansion","Ames · Aircraft Engine Research Laboratory"],["Jet advisory body","Special Committee on Jet Propulsion"],["Later fields","Incorporated supersonic and reusable-aerospace research"],["Final legal successor","Open"]]
  }),

  "william-f-durand":americanJetOriginArticle({
    title:"William F. Durand",
    category:"Biographies",
    eyebrow:"Naval and mechanical engineer · NACA chairman · jet-propulsion coordinator",
    infoboxTitle:"William Frederick Durand",
    infoboxKicker:"First civilian chairman of NACA",
    portrait:durandPortrait,
    lead:`William Frederick Durand was an American naval and mechanical engineer, Stanford professor, and founding member of the National Advisory Committee for Aeronautics. He served as NACA's first civilian chairman and returned from retirement in 1941, aged eighty-one, to chair the Special Committee on Jet Propulsion. His appointment gave the early American jet program a senior engineer experienced in naval machinery, propeller research, academic administration, and federal technical coordination.${jetOriginPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo4i5 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->Durand's birth, Naval Academy education, engineering and academic career, Stanford work, propeller research, NACA service, retirement, and March 1941 recall are inherited history.${jetOriginPre} His continued chairmanship after 1 August 1941 is incorporated as part of the accepted committee reconstruction.${jetOriginExtrapolated} Its duration, later reports, awards, retirement, death, and post-divergence publications remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"early",title:"Early life and naval service",html:`<p>Durand was born at Beacon Falls, Connecticut, on 5 March 1859. He entered the United States Naval Academy in 1876 and graduated second in the engineering class of 1880. Fleet and shore assignments included naval machinery, steam engineering, inspection, and instruction.${jetOriginPre}</p><p>He resigned his naval commission in 1887 and moved into engineering education.</p>`},
      {id:"academic",title:"Academic career",html:`<p>Durand taught mechanical and marine engineering at Michigan State College and Cornell University before joining Stanford University in 1904. At Stanford he taught mechanical engineering and helped establish aeronautics as a formal engineering subject.${jetOriginPre}</p><p>His research joined theoretical treatment to experimental work. With E. P. Lesley he developed wind-tunnel investigations of aircraft propellers, while his broader work included marine propulsion and engineering research methods.</p>`},
      {id:"naca",title:"National Advisory Committee for Aeronautics",html:`<p>Durand was appointed one of the original members of <a href='national-advisory-committee-for-aeronautics.html'>NACA</a> in 1915. He became its first civilian chairman in 1916, served through 1918, and remained a committee member until 1934.${jetOriginPre}</p><p>He conducted one of the first NACA-sponsored research programs. His committee service helped establish the practice of using independent specialists to define common aeronautical problems and supervise public research.</p>`},
      {id:"propellers",title:"Aerodynamics and propeller work",html:`<p>Durand and his collaborators produced systematic propeller data for designers selecting diameter, pitch, section, and operating conditions. He later edited the multi-volume <i>Aerodynamic Theory</i>, bringing work from several national traditions into a common engineering reference.${jetOriginPre}</p><p>These activities made him familiar with fields in which theory, test apparatus, manufacturer practice, and federal coordination had to be reconciled.</p>`},
      {id:"jet",title:"Special Committee on Jet Propulsion",html:`<p><a href='vannevar-bush.html'>Vannevar Bush</a> recalled Durand in March 1941 to chair the <a href='naca-special-committee-on-jet-propulsion.html'>Special Committee on Jet Propulsion</a>. The committee compared turbine, ducted-flow, rocket, and related proposals submitted by military offices, universities, laboratories, and manufacturers.${jetOriginPre}</p><p>Durand presided over a program that deliberately examined several propulsion paths rather than treating the British Whittle engine as the only possible answer. The exact setting dates of his later meetings and final report remain open.</p>`},
      {id:"later",title:"Later life",html:`<p>The post-divergence record does not establish how long Durand remained committee chairman, the date of his final retirement, his later honors, or the date and circumstances of his death. Real-world events after 1 August 1941 are retained as research references but are not automatically setting biography.</p>`}
    ],
    related:[
      {href:"national-advisory-committee-for-aeronautics.html",kicker:"Federal research institution",label:"National Advisory Committee for Aeronautics"},
      {href:"naca-special-committee-on-jet-propulsion.html",kicker:"1941 appointment",label:"NACA Special Committee on Jet Propulsion"},
      {href:"vannevar-bush.html",kicker:"Appointing chairman",label:"Vannevar Bush"},
      {href:"henry-h-arnold.html",kicker:"Initiating air officer",label:"Henry H. Arnold"},
      {href:"american-jet-engine-industry.html",kicker:"Industrial legacy",label:"Jet-Engine Industry of the United States"}
    ],
    sources:[americanJetOriginsOfficial.nacaBios,americanJetOriginsOfficial.durand,americanJetOriginsOfficial.durandArchive,americanJetOriginsOfficial.committee],
    categories:["William F. Durand","American engineers","NACA","Stanford University faculty","Jet propulsion"],
    facts:[["Born","5 March 1859 · Beacon Falls, Connecticut"],["Education","United States Naval Academy · class of 1880"],["Stanford appointment","1904"],["NACA member","1915–1934"],["NACA chairman","1916–1918"],["Jet-committee recall","March 1941 · aged 81"],["Principal fields","Mechanical engineering · propellers · aerodynamics"],["Post-divergence biography","Open"]]
  }),

  "vannevar-bush":americanJetOriginArticle({
    title:"Vannevar Bush",
    category:"Biographies",
    eyebrow:"Engineer · science administrator · NACA chairman",
    infoboxTitle:"Vannevar Bush",
    infoboxKicker:"Federal science administrator",
    portrait:bushPortrait,
    lead:`Vannevar Bush was an American electrical engineer, inventor, university administrator, and federal science organizer. As chairman of the National Advisory Committee for Aeronautics in 1939–1941, he supervised its laboratory expansion and created the Special Committee on Jet Propulsion at Henry H. Arnold's request. He simultaneously led the federal defense-research organizations formed before the August 1941 divergence.${jetOriginPre}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo5i6 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->Bush's birth, education, MIT career, analog computing, Carnegie Institution presidency, NACA and NDRC leadership, OSRD appointment, and creation of the March 1941 jet committee are inherited history.${jetOriginPre} The effects of continued neutrality on OSRD, his later offices, publications, corporate posts, awards, death, and postwar-computing influence remain open unless separately established.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"early",title:"Early life and education",html:`<p>Bush was born at Everett, Massachusetts, on 11 March 1890. He graduated from Tufts College in 1913 and completed a doctorate in engineering associated with the Massachusetts Institute of Technology and Harvard University in 1916.${jetOriginPre}</p><p>After early teaching and industrial work, he joined MIT's electrical-engineering faculty in 1919.</p>`},
      {id:"mit",title:"Engineering and MIT administration",html:`<p>Bush worked on electrical-network calculation and analog computing. His laboratory developed network analyzers and the differential analyzer, machines that represented mathematical relationships through mechanical and electrical components.${jetOriginPre}</p><p>MIT appointed him vice president and dean of engineering in 1932. In 1939 he became president of the Carnegie Institution of Washington, placing him near the federal scientific establishment.</p>`},
      {id:"naca",title:"Chairman of NACA",html:`<p>Bush chaired the <a href='national-advisory-committee-for-aeronautics.html'>National Advisory Committee for Aeronautics</a> from 1939 into 1941. During his chairmanship the committee expanded beyond Langley through the Ames high-speed laboratory and the Cleveland engine laboratory.${jetOriginPre}</p><p>He treated NACA as both a governing committee and a laboratory network, using specialist subcommittees to connect public facilities, universities, military users, and private firms.</p>`},
      {id:"defense",title:"Federal defense research",html:`<p>Bush proposed the National Defense Research Committee and became its chairman in 1940. The committee coordinated civilian scientific work on military mechanisms and devices. Executive Order 8807 created the Office of Scientific Research and Development in June 1941 and appointed Bush as director.${jetOriginPre}</p><p>These organizations existed at the divergence, but the United States did not enter the European or Japanese wars. Their later setting budgets, project registers, relationship to the armed services, and degree of mobilization remain open.</p>`},
      {id:"jet",title:"Jet-propulsion decision",html:`<p><a href='henry-h-arnold.html'>Henry H. Arnold</a> asked Bush on 25 February 1941 to assemble experts able to evaluate foreign jet and rocket advances. Bush organized the <a href='naca-special-committee-on-jet-propulsion.html'>Special Committee on Jet Propulsion</a> in March and recalled retired Stanford engineer <a href='william-f-durand.html'>William F. Durand</a> as chairman.${jetOriginPre}</p><p>The decision placed turbine manufacturers, laboratories, universities, and the armed services in a common technical forum before the British engine transfer reached General Electric.</p>`},
      {id:"later",title:"Later career",html:`<p>The archive does not import Bush's historical wartime authority, atomic-policy role, postwar science reports, information-machine writings, corporate directorships, awards, or death as completed setting events. Each occurred after the divergence and may have changed under continued neutrality and the setting's different federal research system.</p>`}
    ],
    related:[
      {href:"national-advisory-committee-for-aeronautics.html",kicker:"Aeronautical chairmanship",label:"National Advisory Committee for Aeronautics"},
      {href:"naca-special-committee-on-jet-propulsion.html",kicker:"1941 committee",label:"NACA Special Committee on Jet Propulsion"},
      {href:"william-f-durand.html",kicker:"Committee appointee",label:"William F. Durand"},
      {href:"henry-h-arnold.html",kicker:"Military counterpart",label:"Henry H. Arnold"},
      {href:"american-jet-engine-industry.html",kicker:"Industrial consequence",label:"Jet-Engine Industry of the United States"}
    ],
    sources:[americanJetOriginsOfficial.bush,americanJetOriginsOfficial.bushMit,americanJetOriginsOfficial.naca,americanJetOriginsOfficial.committee],
    categories:["Vannevar Bush","American engineers","Science administrators","NACA","American federal officials"],
    facts:[["Born","11 March 1890 · Everett, Massachusetts"],["Education","Tufts · MIT · Harvard"],["MIT offices","Vice president and dean of engineering · from 1932"],["Carnegie Institution","President · from 1939"],["NACA chairman","1939–1941"],["NDRC chairman","From 1940"],["OSRD director","From June 1941"],["Jet-committee decision","March 1941"],["Post-divergence biography","Open"]]
  }),

  "british-american-turbojet-transfer":americanJetOriginArticle({
    title:"British–American turbojet transfer",
    category:"Technology transfer",
    eyebrow:"United Kingdom–United States technical agreement · 1941",
    infoboxKicker:"Whittle hardware and drawings enter American industry",
    lead:`The British–American turbojet transfer was the 1941 program that placed Frank Whittle's W.1X engine and W.2B production drawings with General Electric and assigned Bell Aircraft to construct the associated American test aircraft. Discussions began before the August 1941 divergence; the transfer and September contracting decisions continued after it. The program gave the United States a working centrifugal-flow starting point without making later American propulsion permanently dependent upon British designs.${jetOriginAuthor}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo6i7 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->Arnold's British inspection and the July 1941 discussions are inherited history.${jetOriginPre} Continuation after 1 August, the September government–GE decision, Bell assignment, W.1X and drawing transfer, General Electric engine work, and P-59 program are accepted reconstruction explicitly proposed in the later jet-development transcript.${jetOriginExtrapolated} Diplomatic notes, compartments, route, contract values, build count, and full personnel remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"background",title:"Background",html:`<p>Frank Whittle and Power Jets developed a practical British centrifugal-flow turbojet during the 1930s. The Gloster E.28/39 demonstrated the engine in flight in May 1941. During a spring visit, <a href='henry-h-arnold.html'>Henry H. Arnold</a> saw the British work and returned convinced that the United States needed immediate access.${jetOriginPre}</p><p>British and American officials met on 22 July 1941 to discuss technical exchange. That contact preceded the setting's point of divergence.</p>`},
      {id:"decision",title:"September 1941 decision",html:`<p>On 4 September American government, Army aviation, and General Electric representatives agreed to begin construction of Whittle-derived engines and three experimental aircraft. Arnold informed Bell of the airframe assignment the following day, and the Army issued the contract later in September.${jetOriginAuthor}</p><p>The decision survived because the United States remained interested in foreign military technology even though it did not become a belligerent. Neutrality changed procurement scale, not the perceived need to understand the turbojet.</p>`},
      {id:"hardware",title:"Transferred hardware",html:`<p>A Power Jets W.1X engine and W.2B production drawings reached General Electric in October 1941. The hardware let engineers measure real compressor, combustor, turbine, bearing, lubrication, fuel-control, and starting behavior instead of relying on general descriptions.${jetOriginAuthor}</p><p>General Electric's turbosupercharger experience supplied relevant rotating machinery, high-temperature materials, manufacturing, and instrumentation. The first American Type I and improved I-A engines remained recognizably Whittle-derived.</p>`},
      {id:"aircraft",title:"Bell aircraft project",html:`<p>The low thrust available from the early engines led to a twin-engine aircraft. <a href='bell-aircraft.html'>Bell Aircraft</a> was selected because it had available engineering capacity, stood comparatively near General Electric, and had a reputation for unconventional aircraft. The resulting <a href='p-59-airacomet.html'>XP-59A Airacomet</a> began American jet flight trials in October 1942.${jetOriginAuthor}</p><p>The reused P-59 designation and misleading external arrangements protected the project from casual observation. Exact setting security procedures and code names remain open.</p>`},
      {id:"limits",title:"Limits of the first transfer",html:`<p>The W.1X and W.2B did not give the United States a mature high-thrust industry. Early engines had modest thrust, the P-59 offered disappointing combat performance, and continued American neutrality limited the incentive for immediate large-scale production.</p><p>The transfer was valuable because it compressed the first learning cycle. It did not eliminate the need for axial compressors, higher turbine temperature, afterburning, reliable controls, high-altitude inlets, production tooling, and independent test establishments.</p>`},
      {id:"legacy",title:"Industrial legacy",html:`<p>Later Nene, Tay, Sapphire, and Olympus licenses repeated the same principle: British technology could serve as apprenticeship, accelerator, or insurance. General Electric's J35/J47 and later J79/J93 work, Pratt & Whitney's J57/J75 school, and American combined-cycle research became increasingly indigenous.${jetOriginAuthor}</p><p>The transfer is therefore remembered as the opening of the <a href='american-jet-engine-industry.html'>American jet-engine industry</a>, not as its permanent technical constitution.</p>`}
    ],
    related:[
      {href:"henry-h-arnold.html",kicker:"American sponsor",label:"Henry H. Arnold"},
      {href:"naca-special-committee-on-jet-propulsion.html",kicker:"Federal technical framework",label:"NACA Special Committee on Jet Propulsion"},
      {href:"p-59-airacomet.html",kicker:"Associated test aircraft",label:"P-59 Airacomet"},
      {href:"bell-aircraft.html",kicker:"Airframe contractor",label:"Bell Aircraft"},
      {href:"general-electric.html",kicker:"Engine contractor",label:"General Electric"},
      {href:"american-jet-engine-industry.html",kicker:"Long-term consequence",label:"Jet-Engine Industry of the United States"}
    ],
    sources:[americanJetOriginsOfficial.transfer,americanJetOriginsOfficial.whittle,americanJetOriginsOfficial.p59,americanJetOriginsOfficial.nasaJet],
    categories:["Technology transfer","Jet propulsion","British–American relations","General Electric","Bell Aircraft","1941 in aviation"],
    facts:[["Participants","United Kingdom · United States"],["Initial discussions","22 July 1941"],["American production decision","Incorporated 4 September 1941"],["Transferred hardware","Power Jets W.1X · incorporated"],["Transferred documentation","W.2B drawings · incorporated"],["Engine contractor","General Electric · incorporated"],["Aircraft contractor","Bell Aircraft · incorporated"],["First aircraft","XP-59A Airacomet · incorporated"]]
  }),

  "p-59-airacomet":americanJetOriginArticle({
    title:"Bell P-59 Airacomet",
    category:"Aircraft",
    eyebrow:"United States · first jet aircraft · experimental and conversion service",
    infoboxTitle:"P-59 Airacomet",
    infoboxKicker:"American first-generation jet test aircraft",
    landscape:p59Image,
    lead:`The Bell P-59 Airacomet was the first American jet aircraft. Developed in secrecy around two General Electric engines derived from Frank Whittle's technology, the XP-59A began flight trials in October 1942. In the setting the program remained an experimental, evaluation, and conversion school rather than a frontline fighter fleet. It taught American pilots, engineers, and ground personnel how to operate jets while exposing the limits of the first centrifugal-flow engines and a conventionally arranged airframe.${jetOriginAuthor}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo7i8 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->The P-59's Bell origin, twin Whittle-derived engines, first-American-jet status, October 1942 trials, experimental and conversion role, disappointing combat performance, absence from frontline service, and contribution to later development all follow the divergence and are incorporated from the accepted jet-development reconstruction.${jetOriginExtrapolated} Prototype and production totals, A/B division, engine blocks, units, bases, armament, performance, accidents, survivors, and retirement remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"origin",title:"Origin",html:`<p>The <a href='british-american-turbojet-transfer.html'>British–American turbojet transfer</a> gave General Electric a W.1X engine and W.2B drawings. On 4 September 1941 the Army aviation establishment authorized engines and three experimental aircraft; <a href='bell-aircraft.html'>Bell Aircraft</a> received the airframe task.${jetOriginAuthor}</p><p>The reused XP-59 designation concealed the program behind an earlier piston-fighter number. Bell developed the aircraft before General Electric could supply complete performance data, forcing close engine–airframe coordination.</p>`},
      {id:"configuration",title:"Configuration",html:`<p>Airacomet used a straight wing, tricycle undercarriage, conventional tail, and two turbojets mounted beside the fuselage with lateral inlets. The arrangement reduced the risk of relying on one low-thrust engine and kept the new propulsion installation accessible.${jetOriginExtrapolated}</p><p>The first Type I-A engines had centrifugal compressors. Later J31-class installations supplied more thrust, but the exact engine progression used by the setting fleet remains open.</p>`},
      {id:"flight",title:"Flight trials",html:`<p>The XP-59A began flight trials at Muroc in early October 1942. Secrecy measures disguised the aircraft during ground movement, while test flying expanded from low hops to altitude, handling, engine, and systems work.${jetOriginAuthor}</p><p>The test program examined throttle response, starting, fuel use, asymmetric thrust, high-altitude behavior, braking, approach speed, engine access, and the unfamiliar hazards of jet exhaust and intake suction.</p>`},
      {id:"evaluation",title:"Evaluation result",html:`<p>The P-59 did not provide a decisive combat advantage over mature piston fighters. Modest thrust, fuel consumption, weight, and an airframe designed before American engineers possessed jet-flight data limited speed and range.</p><p>Continued neutrality made a large purchase even less attractive. The Army retained a small evaluation and familiarization force instead of presenting Airacomet as a production answer to German, British, Italian, or Japanese jets.${jetOriginAuthor}</p>`},
      {id:"conversion",title:"Training and conversion",html:`<p>Airacomet introduced pilots and ground organizations to jet-specific procedure. Conversion work covered starting discipline, slow engine response, fuel planning, high-speed approach, long runway use, intake and exhaust safety, turbine inspection, and engine-change practice.${jetOriginExtrapolated}</p><p>The aircraft also gave NACA and manufacturer engineers a flying platform for instrumentation and propulsion tests. Exact training establishments, course lengths, and unit assignments remain open.</p>`},
      {id:"lineage",title:"Place in American jet development",html:`<p>P-59's value was institutional rather than tactical. It converted the 1941 transfer into a flying body of data and personnel. The later <a href='american-early-jet-generation.html'>early-jet generation</a> could begin from crews and laboratories that had already encountered real turbojet operation.</p><p>General Electric's centrifugal-flow apprenticeship did not define the mature fleet. Axial-flow J35 and J47 work, Pratt & Whitney's twin-spool engines, and later high-speed families carried the industry beyond Airacomet.</p>`},
      {id:"open",title:"Open service record",html:"<p>The archive does not fix setting production totals, serials, prototype and evaluation variants, engine marks, specifications, armament, units, bases, individual flights, incidents, museum preservation, or retirement. Historical P-59A/B totals and assignments are reference points rather than automatically imported setting facts.</p>"}
    ],
    related:[
      {href:"bell-aircraft.html",kicker:"Manufacturer",label:"Bell Aircraft"},
      {href:"british-american-turbojet-transfer.html",kicker:"Technical origin",label:"British–American Turbojet Transfer"},
      {href:"henry-h-arnold.html",kicker:"Program sponsor",label:"Henry H. Arnold"},
      {href:"american-jet-engine-industry.html",kicker:"Engine-industry context",label:"Jet-Engine Industry of the United States"},
      {href:"american-early-jet-generation.html",kicker:"Operational successor generation",label:"American Early-Jet Generation"},
      {href:"general-electric.html",kicker:"Engine manufacturer",label:"General Electric"}
    ],
    sources:[americanJetOriginsOfficial.p59,americanJetOriginsOfficial.p59Museum,americanJetOriginsOfficial.transfer],
    categories:["Bell P-59 Airacomet","American jet aircraft","Experimental aircraft","Training aircraft","Bell Aircraft"],
    facts:[["Country of origin","United States · incorporated"],["Manufacturer","Bell Aircraft · incorporated"],["Type","Experimental jet and conversion aircraft · incorporated"],["First flight trials","Incorporated October 1942"],["Propulsion","Two GE centrifugal turbojets · incorporated"],["Technical origin","British Whittle program · incorporated"],["Operational combat fleet","None · incorporated"],["Principal result","Jet-flight and maintenance experience · incorporated"]]
  }),

  "bell-aircraft":americanJetOriginArticle({
    title:"Bell Aircraft",
    category:"Manufacturers",
    eyebrow:"Buffalo and Niagara Falls · pursuit, experimental, and VTOL aircraft · from 1935",
    infoboxTitle:"Bell Aircraft Corporation",
    infoboxKicker:"American experimental-aircraft design house",
    landscape:p59Image,
    lead:`Bell Aircraft Corporation was an American aircraft manufacturer founded by Lawrence D. Bell in 1935. Its pre-divergence P-39 Airacobra established the company as an unconventional pursuit-aircraft designer. The secret P-59 Airacomet made Bell the builder of the first American jet aircraft, while the later X-109A continued its association with difficult propulsion and control experiments. The setting record treats Bell as a specialist design house rather than assigning it an uninterrupted mass-production fighter line.${jetOriginAuthor}`,
    canon:`<!-- altwwii-writer-block:start id=wb-g-20260816-jo8i9 writer=g kind=revision created=2026-08-16T14:30:00-06:00 -->Bell's 1935 foundation, Lawrence Bell leadership, Buffalo base, and pre-divergence P-39 work are inherited history.${jetOriginPre} Selection for the jet aircraft and P-59 development are incorporated from the accepted 1941 continuation.${jetOriginExtrapolated} The author directly requests that the XF-109 survive as a flying design; its X-109A implementation and Bell manufacture are incorporated details.${jetOriginAuthor}${jetOriginExtrapolated} Wartime output, factories, ownership, helicopters, intervening aircraft, reorganizations, totals, workforce, and 2012 legal status remain open.<!-- altwwii-writer-block:end -->`,
    sections:[
      {id:"formation",title:"Formation",html:`<p>Lawrence D. Bell worked for Glenn L. Martin and Consolidated before forming Bell Aircraft Corporation with associates in Buffalo, New York, in 1935. The company inherited engineering labor and facilities from the western New York aircraft industry.${jetOriginPre}</p><p>Bell's organization accepted layouts and development risks that larger production houses sometimes avoided, creating a durable reputation for unconventional aircraft.</p>`},
      {id:"p39",title:"P-39 Airacobra",html:`<p>The P-39 placed its engine behind the pilot and drove the propeller through a long shaft, leaving the nose available for concentrated armament. The aircraft and its development organization were established before the divergence.${jetOriginPre}</p><p>Setting production, users, variants, and combat employment are not yet registered. Airacobra nevertheless demonstrates the engineering culture that made Bell a plausible choice for the first secret jet contract.</p>`},
      {id:"p59",title:"P-59 Airacomet",html:`<p><a href='henry-h-arnold.html'>Henry H. Arnold</a> assigned Bell the airframe portion of the 1941 <a href='british-american-turbojet-transfer.html'>turbojet transfer</a>. Available engineering capacity, proximity to General Electric, Lawrence Bell's enthusiasm, and the company's unconventional record influenced the choice.${jetOriginAuthor}</p><p>The resulting <a href='p-59-airacomet.html'>P-59 Airacomet</a> became the first American jet aircraft. It remained a test and conversion type, but it gave Bell experience in turbine installations, high-speed flight, systems instrumentation, and secret government development.</p>`},
      {id:"research",title:"Experimental-aircraft practice",html:`<p>Bell's setting reputation rests on small programs in which propulsion, configuration, or control technology mattered more than production quantity. Such work required close collaboration with Army engineering offices, NACA laboratories, engine manufacturers, test pilots, and range organizations.${jetOriginExtrapolated}</p><p>The full register between P-59 and the 1960s has not been fixed. Historical Bell projects are not imported merely because the real company built them.</p>`},
      {id:"x109",title:"X-109A",html:`<p>The <a href='x-109a.html'>X-109A</a> carried Bell's D-188A concept into a 1962–64 flight program. Tilting wingtip nacelles and additional fuselage engines tested hover, transition, supersonic flight, and recovery while the aircraft remained approximately level.${jetOriginAuthor}</p><p>Two or three full-scale aircraft flew. The program produced research rather than an operational fighter, preserving Bell's role as an experimental contractor.</p>`},
      {id:"position",title:"Corporate position",html:"<p>The archive does not yet establish Bell's later merger, helicopter, electronics, missile, or spacecraft history. Its legal form and operating divisions by 2012 remain open. The encyclopedia therefore uses Bell Aircraft as the stable name of the registered fixed-wing design lineage.</p>"}
    ],
    related:[
      {href:"p-59-airacomet.html",kicker:"First American jet",label:"P-59 Airacomet"},
      {href:"x-109a.html",kicker:"Supersonic VTOL research",label:"X-109A"},
      {href:"british-american-turbojet-transfer.html",kicker:"Foundational jet contract",label:"British–American Turbojet Transfer"},
      {href:"american-jet-engine-industry.html",kicker:"Propulsion environment",label:"Jet-Engine Industry of the United States"},
      {href:"american-early-jet-generation.html",kicker:"Later operational generation",label:"American Early-Jet Generation"}
    ],
    sources:[americanJetOriginsOfficial.bell,americanJetOriginsOfficial.p59,americanJetOriginsOfficial.p59Museum],
    categories:["Bell Aircraft","American aircraft manufacturers","Experimental aircraft manufacturers","Jet aircraft manufacturers","VTOL aircraft"],
    facts:[["Founded","1935"],["Founder","Lawrence D. Bell"],["Principal early center","Buffalo, New York"],["Pre-divergence pursuit type","P-39 Airacobra"],["First American jet","P-59 Airacomet · incorporated"],["Later registered research aircraft","X-109A · author-requested survival, incorporated form"],["Characteristic field","Experimental propulsion and control aircraft · incorporated"],["2012 legal form","Open"]]
  })
});

const jetOriginAppendRelated=(article,item)=>{
  if(article&&!article.related.some(link=>link.href===item.href))article.related.push(item);
};

const jetOriginIndustry=window.deepArticles["american-jet-engine-industry"];
if(jetOriginIndustry){
  const origins=jetOriginIndustry.sections.find(section=>section.id==="origins");
  if(origins){
    origins.html=origins.html.replace("General Henry H. Arnold","<a href='henry-h-arnold.html'>General Henry H. Arnold</a>");
    origins.html=origins.html.replace("Special Committee on Jet Propulsion","<a href='naca-special-committee-on-jet-propulsion.html'>Special Committee on Jet Propulsion</a>");
    origins.html=origins.html.replace("The transfer continued","The <a href='british-american-turbojet-transfer.html'>transfer continued</a>");
    origins.html=origins.html.replace("experimental aircraft","<a href='p-59-airacomet.html'>experimental aircraft</a>");
  }
  jetOriginAppendRelated(jetOriginIndustry,{href:"henry-h-arnold.html",kicker:"Program founder",label:"Henry H. Arnold"});
  jetOriginAppendRelated(jetOriginIndustry,{href:"naca-special-committee-on-jet-propulsion.html",kicker:"Federal origin",label:"NACA Special Committee on Jet Propulsion"});
  jetOriginAppendRelated(jetOriginIndustry,{href:"british-american-turbojet-transfer.html",kicker:"Initial technical access",label:"British–American Turbojet Transfer"});
  jetOriginAppendRelated(jetOriginIndustry,{href:"p-59-airacomet.html",kicker:"First flying testbed",label:"P-59 Airacomet"});
}

const earlyJetGeneration=window.deepArticles["american-early-jet-generation"];
if(earlyJetGeneration){
  const delay=earlyJetGeneration.sections.find(section=>section.id==="delay");
  if(delay&&!delay.html.includes("p-59-airacomet.html"))delay.html=delay.html.replace("American jet research survives",`The <a href='p-59-airacomet.html'>P-59 Airacomet</a> supplies an experimental and conversion school, but no frontline fleet. American jet research survives`);
  jetOriginAppendRelated(earlyJetGeneration,{href:"p-59-airacomet.html",kicker:"Experimental predecessor",label:"P-59 Airacomet"});
  jetOriginAppendRelated(earlyJetGeneration,{href:"british-american-turbojet-transfer.html",kicker:"Technical origin",label:"British–American Turbojet Transfer"});
}

const x109=window.deepArticles["x-109a"];
if(x109){
  const designation=x109.sections.find(section=>section.id==="designation");
  if(designation&&!designation.html.includes("bell-aircraft.html"))designation.html=designation.html.replace("The D-188A","The <a href='bell-aircraft.html'>Bell</a> D-188A");
  jetOriginAppendRelated(x109,{href:"bell-aircraft.html",kicker:"Manufacturer",label:"Bell Aircraft"});
}
