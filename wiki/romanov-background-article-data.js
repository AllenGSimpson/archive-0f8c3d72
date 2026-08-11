window.deepArticles = window.deepArticles || {};

const romanovBackgroundSources = [
  {href:"../coProsperitySphereReference%20-%20AltWWII.md",label:"Co-Prosperity Sphere Reference — Russian Far Eastern monarchy"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Russian Far Eastern State"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Chita Restoration"},
  {href:"../transcript.md",label:"Master Transcript — Romanov restoration and Siberian legitimacy"},
  {href:"https://en.wikipedia.org/wiki/Prince_Michael_Andreevich_of_Russia",label:"Historical reference — Prince Michael Andreevich of Russia"}
];

const romanovBackgroundLandscape = {
  src:"assets/diagrams/far-eastern-state-formation.svg",
  alt:"The First Far Eastern Republic, Chita Restoration, and Russian Far Eastern monarchy",
  caption:"The Chita restoration draws legitimacy from Romanov genealogy, the 1613 precedent, and a new regional election"
};

const romanovBackgroundArticle = config => ({
  category:config.category || "House of Romanov",
  eyebrow:config.eyebrow || "Historical background · Chita dynastic context",
  infoboxKicker:config.infoboxKicker || "Romanov historical background",
  landscape:config.landscape || romanovBackgroundLandscape,
  ...config,
  sources:[...romanovBackgroundSources,...(config.sources || [])],
  categories:config.categories || ["House of Romanov","Russian Far Eastern State","Russian history"]
});

Object.assign(window.deepArticles, {
  "prince-andrei-alexandrovich": romanovBackgroundArticle({
    title:"Prince Andrei Alexandrovich of Russia",category:"People",infoboxKicker:"Father of Tsar Mikhail",
    lead:"Prince Andrei Alexandrovich of Russia was the eldest son of Grand Duke Alexander Mikhailovich and Grand Duchess Xenia Alexandrovna, and the father of Michael Andreevich. His descent joined the male line of Nicholas I to the family of Alexander III, while his 1918 marriage became the principal old-law objection to Michael's dynastic eligibility.",
    canon:"Andrei's birth, imperial family position, service, marriage, children, escape, and English exile are historical baseline. Michael's 1955–56 election makes Andrei father of the Far Eastern sovereign; his residence, court title, public interventions, and date of death after that divergence remain unestablished.",
    sections:[
      {id:"birth",title:"Birth and place in the dynasty",html:"<p>Andrei was born at the Winter Palace in 1897. He was a grandson of Emperor Alexander III through his mother and a male-line great-grandson of Emperor Nicholas I through his father. He therefore carried the rank Prince of the Blood Imperial rather than Grand Duke.</p>"},
      {id:"service",title:"Imperial service",html:"<p>He served in the Imperial Russian Navy and later as an officer of the Chevalier Guards. Revolution ended the career before it could become the military foundation of an independent political following.</p>"},
      {id:"crimea",title:"Revolution and Crimea",html:"<p>After the February Revolution, Andrei joined the extended imperial family in Crimea. German occupation released the household from revolutionary confinement, and he left Russia with his wife and father in December 1918.</p>"},
      {id:"marriage",title:"Marriage to Elisabetta Ruffo",html:"<p>Andrei married <a href='elisabetta-sasso-ruffo.html'>Elisabetta di Sasso Ruffo</a> at Ai-Todor in June 1918. The marriage had parental and family approval but could not receive authorization from the captive Nicholas II. Kirillovich jurists later treated its issue as non-dynastic under the old house law.</p>"},
      {id:"children",title:"Children",html:"<p>The marriage produced Princess Xenia Andreevna, <a href='tsar-mikhail.html'>Michael Andreevich</a>, and Prince Andrew Andreevich. Andrei later married Nadine McDougall and had Princess Olga Andreevna. The wider family supplied several plausible family heads while producing no universally accepted throne claimant.</p>"},
      {id:"exile",title:"Life in Britain",html:"<p>After years in France, Andrei settled in Britain near the households of his mother and British relatives. His country-house existence, artistic work, charity, and Orthodox connections exemplified the social world from which Chita later recruited a sovereign.</p>"},
      {id:"chita",title:"Father of the elected sovereign",html:"<p>Michael's election transforms Andrei's constitutional importance. He is the father of a reigning sovereign inside one Russian successor state, yet he possesses no independent Chita mandate and no authority to enlarge its territorial claim.</p>"},
      {id:"status",title:"Open alternate record",html:"<p>The archive does not establish whether Andrei moves to Chita, accepts a formal court dignity, endorses the Fundamental Law publicly, or dies on the historical date in 1981. Those questions remain separate from the fixed genealogy.</p>"}
    ],
    related:[{href:"tsar-mikhail.html",kicker:"Eldest son",label:"Tsar Mikhail"},{href:"elisabetta-sasso-ruffo.html",kicker:"First wife",label:"Elisabetta di Sasso Ruffo"},{href:"grand-duke-alexander-mikhailovich.html",kicker:"Father",label:"Grand Duke Alexander Mikhailovich"},{href:"grand-duchess-xenia-alexandrovna.html",kicker:"Mother",label:"Grand Duchess Xenia Alexandrovna"},{href:"pauline-laws.html",kicker:"Dynastic law",label:"Pauline Laws"}],
    facts:[["Born","24 January 1897 · Saint Petersburg"],["Father","Grand Duke Alexander Mikhailovich"],["Mother","Grand Duchess Xenia Alexandrovna"],["First wife","Elisabetta di Sasso Ruffo"],["Eldest son","Michael Andreevich"],["Historical residence","France and Britain"],["Chita significance","Father of the elected sovereign"],["Alternate later life","Open"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Prince_Andrei_Alexandrovich_of_Russia",label:"Historical reference — Prince Andrei Alexandrovich"}]
  }),

  "elisabetta-sasso-ruffo": romanovBackgroundArticle({
    title:"Elisabetta di Sasso Ruffo",category:"People",infoboxKicker:"Mother of Tsar Mikhail",
    lead:"Elisabetta di Sasso Ruffo was an Italian-Russian noblewoman, the first wife of Prince Andrei Alexandrovich, and the mother of Michael Andreevich. Her marriage joined a Romanov cadet line to the Ruffo di Calabria family, while its disputed dynastic status later supplied the Kirillovich case against the Chita sovereign.",
    canon:"Her ancestry, first marriage, marriage to Andrei, three children, exile, and 1940 death are historical baseline. Later Chita descriptions of her as the sovereign's mother are commemorative rather than evidence of a retroactive old-law ruling.",
    sections:[
      {id:"origin",title:"Family and background",html:"<p>Elisabetta was born in 1886 to Fabrizio Ruffo, Duke of Sasso-Ruffo, and Natalia Alexandrovna Mescherskaya. Her family combined southern Italian nobility with Russian aristocratic connections.</p>"},
      {id:"first",title:"First marriage",html:"<p>Her first marriage was to Major General Alexander Friederici. She had a daughter from that union and was a widow or divorcée within the revolutionary-era Romanov circle when her relationship with Andrei began.</p>"},
      {id:"aitodor",title:"Marriage at Ai-Todor",html:"<p>Elisabetta and <a href='prince-andrei-alexandrovich.html'>Prince Andrei</a> married in the family chapel at Ai-Todor on 12 June 1918. The ceremony occurred while Nicholas II was imprisoned and ordinary imperial authorization could not be obtained.</p>"},
      {id:"issue",title:"Romanov children",html:"<p>They had Princess Xenia Andreevna, Michael Andreevich, and Prince Andrew Andreevich. Michael's later election made Elisabetta the mother of a reigning sovereign in the alternate Far East.</p>"},
      {id:"law",title:"The equal-marriage objection",html:"<p>Kirill and Vladimir Kirillovich held that Elisabetta did not belong to a reigning or formerly sovereign house of the rank required by the <a href='pauline-laws.html'>imperial family statutes</a>. They styled the descendants Romanovsky-di Sasso Ruffo and denied them succession rights.</p>"},
      {id:"exile",title:"Exile in France and Britain",html:"<p>The family moved through France and then Britain. Their place within the British-connected Romanov exile network later helped make Michael legible to foreign governments and free of a Siberian party machine.</p>"},
      {id:"death",title:"Death in 1940",html:"<p>Elisabetta died in Britain in October 1940 after years of illness and an air raid near the family residence. Her death precedes the postwar Chita restoration.</p>"},
      {id:"memory",title:"Memory in the Far Eastern monarchy",html:"<p>Chita court genealogy presents her as the sovereign's mother and an Italian-Russian link. It does not claim that the Far Eastern election retroactively transformed her marriage into a dynastic union under the defunct empire's law.</p>"}
    ],
    related:[{href:"prince-andrei-alexandrovich.html",kicker:"Husband",label:"Prince Andrei Alexandrovich"},{href:"tsar-mikhail.html",kicker:"Son",label:"Tsar Mikhail"},{href:"pauline-laws.html",kicker:"Marriage dispute",label:"Pauline Laws"},{href:"romanov-legitimacy-dispute-siberia.html",kicker:"Political consequence",label:"Romanov Legitimacy Dispute"}],
    facts:[["Born","1886"],["House","Ruffo di Calabria / Sasso Ruffo"],["Husband","Prince Andrei Alexandrovich"],["Marriage","12 June 1918 · Ai-Todor"],["Children","Xenia, Michael, and Andrew"],["Died","October 1940 · Britain"],["Old-law status","Disputed as non-dynastic"],["Chita status","Mother of Tsar Mikhail"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Elisabetta_di_Sasso_Ruffo",label:"Historical reference — Elisabetta di Sasso Ruffo"}]
  }),

  "grand-duke-alexander-mikhailovich": romanovBackgroundArticle({
    title:"Grand Duke Alexander Mikhailovich of Russia",category:"People",infoboxKicker:"Paternal grandfather of Tsar Mikhail",
    lead:"Grand Duke Alexander Mikhailovich of Russia, commonly called Sandro, was a naval officer, aviation organizer, memoirist, and paternal grandfather of Michael Andreevich. His technical and maritime career became an important retrospective ancestor for the aviation-minded Chita monarchy.",
    canon:"Alexander's imperial service, marriage, children, revolutionary escape, exile, writings, and 1933 death are historical baseline. His posthumous place in Far Eastern state ceremony is a consequence of Michael's later election.",
    sections:[
      {id:"lineage",title:"Lineage and marriage",html:"<p>Born in Tiflis in 1866, Alexander was a male-line grandson of Nicholas I. He married Grand Duchess Xenia Alexandrovna, daughter of Alexander III and sister of Nicholas II, in 1894.</p>"},
      {id:"navy",title:"Naval career",html:"<p>Alexander served in the Imperial Russian Navy, advocated fleet reconstruction after the Russo-Japanese War, and reached vice-admiral rank. His experience connected court politics with the technical administration of a modern service.</p>"},
      {id:"aviation",title:"Military aviation",html:"<p>He supported the creation of an officers' aviation school near Sevastopol and became a senior organizer of the Imperial Russian Air Service during the First World War. Chita biographies later emphasize this work.</p>"},
      {id:"family",title:"Family",html:"<p>Alexander and <a href='grand-duchess-xenia-alexandrovna.html'>Xenia</a> had one daughter and six sons. Their eldest son, <a href='prince-andrei-alexandrovich.html'>Andrei</a>, became Michael's father.</p>"},
      {id:"revolution",title:"Revolution and departure",html:"<p>Alexander's household survived the revolutionary crisis in Crimea. He left Russia with Andrei and Elisabetta in December 1918 and sought foreign support for the White movement.</p>"},
      {id:"exile",title:"Exile and memoirs",html:"<p>He lived chiefly in France and published recollections of imperial court, naval, and political life. The memoirs helped preserve a usable family narrative after the dynasty lost the state that had sustained it.</p>"},
      {id:"death",title:"Death",html:"<p>Alexander died in France in 1933, more than two decades before the Chita Restoration. He therefore exercised no influence over Michael's election.</p>"},
      {id:"chita",title:"Far Eastern commemoration",html:"<p>The Far Eastern court treats him as a technical-service ancestor: naval reformer, aviation patron, exile elder, and patriarch of Mikhail's branch. This memory supports the monarchy's aviation and engineering identity.</p>"}
    ],
    related:[{href:"grand-duchess-xenia-alexandrovna.html",kicker:"Wife",label:"Grand Duchess Xenia Alexandrovna"},{href:"prince-andrei-alexandrovich.html",kicker:"Eldest son",label:"Prince Andrei Alexandrovich"},{href:"tsar-mikhail.html",kicker:"Grandson",label:"Tsar Mikhail"},{href:"far-eastern-civil-aviation.html",kicker:"Later royal patronage",label:"Far Eastern Civil Aviation"}],
    facts:[["Born","13 April 1866 · Tiflis"],["House","Holstein-Gottorp-Romanov"],["Wife","Grand Duchess Xenia Alexandrovna"],["Service","Imperial Russian Navy and Air Service"],["Rank","Vice admiral"],["Children","One daughter and six sons"],["Died","26 February 1933 · France"],["Chita memory","Naval and aviation ancestor"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Grand_Duke_Alexander_Mikhailovich_of_Russia",label:"Historical reference — Grand Duke Alexander Mikhailovich"}]
  }),

  "grand-duchess-xenia-alexandrovna": romanovBackgroundArticle({
    title:"Grand Duchess Xenia Alexandrovna of Russia",category:"People",infoboxKicker:"Maternal grandmother of Tsar Mikhail",
    lead:"Grand Duchess Xenia Alexandrovna of Russia was the eldest daughter of Alexander III, sister of Nicholas II, wife of Grand Duke Alexander Mikhailovich, and maternal grandmother of Michael Andreevich. Her descent gave Michael his closest visible connection to the last reigning emperor's immediate family.",
    canon:"Xenia's imperial family life, charitable patronage, seven children, revolutionary escape, and British exile before 1955 are historical baseline. Her response to Michael's accession, formal Chita status, later travel, and final alternate chronology remain open.",
    sections:[
      {id:"birth",title:"Daughter of Alexander III",html:"<p>Xenia was born in 1875, the elder daughter of the future Alexander III and Maria Feodorovna. She was raised with the future Nicholas II and remained part of his close family circle.</p>"},
      {id:"marriage",title:"Marriage and children",html:"<p>She married her relative Grand Duke Alexander Mikhailovich in 1894. Their daughter and six sons formed one of the largest surviving branches descending closely from Alexander III.</p>"},
      {id:"charity",title:"Charitable work",html:"<p>Before the revolution, Xenia patronized organizations for children, workers, airmen, naval families, and tuberculosis patients. Far Eastern court histories later connect this record to the monarchy's medical and aviation charities.</p>"},
      {id:"revolution",title:"Revolution and escape",html:"<p>Xenia joined the imperial family refuge in Crimea and escaped aboard a British warship in 1919. The murders of Nicholas II and Grand Duke Michael left her among the senior surviving members of the immediate imperial family.</p>"},
      {id:"britain",title:"British exile",html:"<p>She settled in Britain under royal protection, living at Frogmore Cottage and later Wilderness House. Her household became a center of the British-connected Romanov family network in which Michael was raised.</p>"},
      {id:"genealogy",title:"Genealogical significance",html:"<p>Michael is Xenia's grandson and therefore a great-nephew of Nicholas II. This relationship is politically recognizable even to observers who reject his eligibility under the strict male-line marriage rules.</p>"},
      {id:"restoration",title:"The Chita Restoration",html:"<p>Her grandson's election in 1955–56 creates a new crown by Sobor rather than reviving Nicholas II's empire. Xenia's ancestry supplies prestige; it does not grant her power to settle the constitutional dispute.</p>"},
      {id:"open",title:"Open later record",html:"<p>The archive does not yet establish whether she endorses the accession publicly, travels to Chita, receives a court title, or follows her historical 1960 death chronology.</p>"}
    ],
    related:[{href:"grand-duke-alexander-mikhailovich.html",kicker:"Husband",label:"Grand Duke Alexander Mikhailovich"},{href:"prince-andrei-alexandrovich.html",kicker:"Son",label:"Prince Andrei Alexandrovich"},{href:"tsar-mikhail.html",kicker:"Grandson",label:"Tsar Mikhail"},{href:"romanov-emigration.html",kicker:"Exile community",label:"Romanov Emigration"}],
    facts:[["Born","6 April 1875 · Saint Petersburg"],["Father","Alexander III"],["Brother","Nicholas II"],["Husband","Grand Duke Alexander Mikhailovich"],["Children","One daughter and six sons"],["Historical exile","Britain"],["Relation to Mikhail","Maternal grandmother"],["Post-1955 record","Open"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Grand_Duchess_Xenia_Alexandrovna_of_Russia",label:"Historical reference — Grand Duchess Xenia Alexandrovna"}]
  }),

  "kirill-vladimirovich": romanovBackgroundArticle({
    title:"Grand Duke Kirill Vladimirovich of Russia",category:"People",infoboxKicker:"Founder of the Kirillovich claim",
    lead:"Grand Duke Kirill Vladimirovich was a naval officer and émigré claimant who declared himself guardian of the Russian throne in 1924 and later emperor in exile. His strict interpretation of imperial house law became the legal basis through which his branch rejected Michael Andreevich's dynastic eligibility.",
    canon:"Kirill's life, claim, legitimist following, disputes, and 1938 death are historical baseline. The Kirillovich legal position survives in the setting through Vladimir and shapes opposition to the Chita election.",
    sections:[
      {id:"lineage",title:"Lineage",html:"<p>Kirill was born in 1876, a male-line grandson of Alexander II. That position placed him high in the post-1917 order accepted by strict legitimists.</p>"},
      {id:"navy",title:"Naval career and revolution",html:"<p>He served in the Imperial Navy, survived the Russo-Japanese War, and commanded the Naval Guards during the First World War. His public allegiance to the Provisional Government in 1917 later remained a charge against his moral claim.</p>"},
      {id:"marriage",title:"Marriage controversy",html:"<p>Kirill married Victoria Melita in defiance of Nicholas II before the union was later recognized. The episode complicated his own appeal to rigid dynastic legality.</p>"},
      {id:"claim",title:"Claim in exile",html:"<p>After courts recognized Grand Duke Michael Alexandrovich as dead, Kirill declared himself Guardian of the Throne in 1924 and then emperor in exile. Supporters called themselves legitimists.</p>"},
      {id:"opposition",title:"Un-predetermined monarchists",html:"<p>Opponents argued that revolution had broken the automatic succession and that a future <a href='zemsky-sobor-1613.html'>Zemsky Sobor</a> must choose the monarch. This argument later supplied Chita with a ready constitutional vocabulary.</p>"},
      {id:"michael",title:"The Sasso-Ruffo judgment",html:"<p>Kirill denied the children of Andrei Alexandrovich and Elisabetta Ruffo the status of dynasts. He styled Michael Romanovsky-di Sasso Ruffo and excluded him from the imperial succession.</p>"},
      {id:"vladimir",title:"Succession by Vladimir",html:"<p>Kirill died in 1938 and was succeeded as head of his claimant branch by his son <a href='vladimir-kirillovich.html'>Vladimir Kirillovich</a>.</p>"},
      {id:"legacy",title:"Legacy at Chita",html:"<p>Chita accepts the genealogical facts behind Kirill's case and rejects his conclusion. The Far Eastern crown rests on a new election for a defined state, outside the untouched Pauline succession he claimed to administer.</p>"}
    ],
    related:[{href:"vladimir-kirillovich.html",kicker:"Successor",label:"Vladimir Kirillovich"},{href:"pauline-laws.html",kicker:"Legal doctrine",label:"Pauline Laws"},{href:"romanov-legitimacy-dispute-siberia.html",kicker:"Setting dispute",label:"Romanov Legitimacy Dispute"},{href:"zemsky-sobor-1613.html",kicker:"Rival precedent",label:"Zemsky Sobor of 1613"}],
    facts:[["Born","12 October 1876"],["House","Holstein-Gottorp-Romanov"],["Claim","Guardian of the Throne, then emperor in exile"],["Claim began","1924"],["Principal supporters","Legitimists"],["Principal rivals","Un-predetermined monarchists"],["Died","12 October 1938"],["Chita relevance","Source of the strict-law objection"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Grand_Duke_Kirill_Vladimirovich_of_Russia",label:"Historical reference — Grand Duke Kirill Vladimirovich"}]
  }),

  "vladimir-kirillovich": romanovBackgroundArticle({
    title:"Grand Duke Vladimir Kirillovich of Russia",category:"People",infoboxKicker:"Kirillovich claimant during the Chita Restoration",
    lead:"Grand Duke Vladimir Kirillovich was the son and dynastic successor of Kirill Vladimirovich. In the setting he is the principal Romanov claimant whose old-law position collides directly with the 1955–56 election of Michael Andreevich by the Far Eastern Zemsky Sobor.",
    canon:"Vladimir's birth, succession to his father's claim, wartime position, marriage, and historical leadership of the imperial house are baseline through the postwar period. His rejection of Michael's dynastic rights and the continuing Kirillovich objection are established setting consequences; exact manifestos and diplomatic contacts remain open.",
    sections:[
      {id:"birth",title:"Birth in exile",html:"<p>Vladimir was born in Finland in 1917 after the fall of the monarchy. His father later raised him to grand-ducal rank as part of the claimant court's reconstruction of the imperial house.</p>"},
      {id:"head",title:"Head of the Kirillovich branch",html:"<p>He inherited Kirill's position in 1938 and styled himself head of the Russian Imperial House. Strict legitimists treated him as the lawful dynastic center during and after the Second World War.</p>"},
      {id:"war",title:"War and postwar Europe",html:"<p>Vladimir's wartime and postwar life remained European. The destruction and partition of Russia denied his court a territorial base from which to convert claim into government.</p>"},
      {id:"marriage",title:"Marriage and succession",html:"<p>His 1948 marriage to Leonida Bagration-Mukhrani produced one daughter. The status of that marriage and descendants became another major dispute within the extended Romanov family.</p>"},
      {id:"mikhail",title:"Objection to Michael Andreevich",html:"<p>Vladimir maintains that the 1918 Andrei–Elisabetta marriage could not transmit imperial succession rights. Michael's election therefore creates a sovereign whom Vladimir may recognize as a political ruler while rejecting as lawful head of the old imperial house.</p>"},
      {id:"sobor",title:"Objection to a regional Sobor",html:"<p>The Far Eastern assembly represents only a fragment of Russia and meets under Japanese strategic protection. Kirillovich supporters deny that it can dispose of an all-Russian inheritance.</p>"},
      {id:"chita",title:"Chita's answer",html:"<p>Chita declines the all-Russian premise. It claims authority to elect a Romanov sovereign for the Russian Far Eastern State and leaves the rest of the succession dispute unresolved.</p>"},
      {id:"open",title:"Open confrontation",html:"<p>The archive has not fixed Vladimir's public declaration, recognition by individual émigré organizations, personal correspondence with Michael, or the later status of his branch after the Chita monarchy becomes durable.</p>"}
    ],
    related:[{href:"kirill-vladimirovich.html",kicker:"Father",label:"Grand Duke Kirill Vladimirovich"},{href:"tsar-mikhail.html",kicker:"Rival sovereign",label:"Tsar Mikhail"},{href:"romanov-legitimacy-dispute-siberia.html",kicker:"Political dispute",label:"Romanov Legitimacy Dispute"},{href:"pauline-laws.html",kicker:"Claimed legal basis",label:"Pauline Laws"}],
    facts:[["Born","30 August 1917 · Finland"],["Father","Grand Duke Kirill Vladimirovich"],["Claimed position","Head of the Russian Imperial House"],["Tenure began","1938"],["Wife","Leonida Bagration-Mukhrani"],["Issue","One daughter in historical baseline"],["Position on Mikhail","Dynastically ineligible"],["Chita response","Regional election creates a new lawful crown"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Vladimir_Kirillovich,_Grand_Duke_of_Russia",label:"Historical reference — Grand Duke Vladimir Kirillovich"}]
  }),

  "pauline-laws": romanovBackgroundArticle({
    title:"Pauline Laws",category:"Dynastic law",infoboxKicker:"Imperial Russian house and succession law",
    lead:"The Pauline Laws were the house and succession laws established by Emperor Paul I and later incorporated into the Fundamental Laws and Statute of the Imperial Family. Their rules of semi-Salic primogeniture, Orthodox sovereignty, authorized marriage, and equal birth form the strict legal case against Michael Andreevich while remaining only one source of law for the elected Chita crown.",
    canon:"The historical law and its pre-1917 application are baseline. The Far Eastern Fundamental Law does not simply continue the imperial code; it borrows dynastic vocabulary while grounding sovereignty in the 1955–56 election and federal confirmation.",
    sections:[
      {id:"origin",title:"Promulgation in 1797",html:"<p>Paul I established a fixed succession order to replace discretionary designation by the monarch. The law sought to make the identity of the next sovereign ascertainable in advance.</p>"},
      {id:"order",title:"Semi-Salic succession",html:"<p>Male-line primogeniture governed while eligible male dynasts remained. Female and cognatic succession became available only after extinction of the defined male lines.</p>"},
      {id:"religion",title:"Orthodox sovereign",html:"<p>The monarch had to belong to the Eastern Orthodox faith. Court practice also connected dynastic marriage, naming, and public ritual closely to Orthodoxy.</p>"},
      {id:"marriage",title:"Authorized and equal marriage",html:"<p>Imperial authorization was required for family marriages. Later statutes excluded descendants of unions with spouses lacking corresponding royal or ruling rank from succession rights.</p>"},
      {id:"1917",title:"Breakdown in 1917",html:"<p>Nicholas II's abdication for himself and his son, the designation of <a href='michael-alexandrovich-1917.html'>Grand Duke Michael</a>, and Michael's conditional deferral all raised questions the law had not been written to resolve.</p>"},
      {id:"exile",title:"Law in exile",html:"<p>Kirill and Vladimir Kirillovich treated the old code as continuing authority for a throne lacking territory. Rival monarchists argued that revolution required a constituent national act.</p>"},
      {id:"mikhail",title:"Application to Michael Andreevich",html:"<p>Under the strict Kirillovich reading, the Andrei–Elisabetta marriage could not transmit succession. Michael therefore had recognizable Romanov ancestry but no place in the automatic imperial order.</p>"},
      {id:"chita",title:"Place in Far Eastern law",html:"<p>The Chita settlement rejects automatic all-Russian succession. It uses Romanov preference, Orthodox ceremony, sovereign designation, and represented-land confirmation as elements of a new regional constitution.</p>"}
    ],
    related:[{href:"succession-far-eastern-throne.html",kicker:"Alternate successor law",label:"Succession to the Far Eastern Throne"},{href:"michael-alexandrovich-1917.html",kicker:"1917 crisis",label:"Grand Duke Michael and the 1917 Succession"},{href:"kirill-vladimirovich.html",kicker:"Émigré claimant",label:"Grand Duke Kirill Vladimirovich"},{href:"far-eastern-fundamental-law.html",kicker:"Chita constitution",label:"Far Eastern Fundamental Law"}],
    facts:[["Promulgated","1797"],["Author","Emperor Paul I"],["Succession form","Semi-Salic primogeniture"],["Monarch's religion","Eastern Orthodox"],["Marriage rule","Imperial authorization and corresponding rank"],["1917 result","Unresolved abdication and acceptance questions"],["Kirillovich position","Law continues in exile"],["Chita position","Historical source, not sole controlling constitution"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Pauline_Laws",label:"Historical reference — Pauline Laws"}]
  }),

  "michael-alexandrovich-1917": romanovBackgroundArticle({
    title:"Grand Duke Michael and the Russian succession of 1917",category:"Russian Revolution",infoboxKicker:"Conditional royal acceptance and the constituent principle",
    lead:"Grand Duke Michael Alexandrovich's response to Nicholas II's abdication in March 1917 is the principal modern precedent cited by Chita constitutionalists. Michael deferred acceptance of supreme power until an elected assembly determined Russia's form of government, linking monarchy to popular constituent authorization before his murder in 1918.",
    canon:"The abdication, conditional deferral, revolutionary collapse, and Michael's death are historical baseline. Chita's later interpretation of the act as a precedent for an elected limited crown is setting constitutional memory.",
    sections:[
      {id:"position",title:"Heir presumptive",html:"<p>Michael was the younger brother of Nicholas II and stood behind the Tsarevich Alexei in the imperial succession. Alexei's hemophilia and the revolutionary crisis made his position immediately consequential.</p>"},
      {id:"abdication",title:"Nicholas II's abdication",html:"<p>Nicholas abdicated for himself and Alexei and named Michael as successor. The legality of removing Alexei and the lawfulness of abdication itself were both uncertain under the <a href='pauline-laws.html'>Pauline Laws</a>.</p>"},
      {id:"act",title:"Michael's act",html:"<p>Michael declined to exercise supreme authority until the people, through a constituent assembly elected by universal suffrage, determined the form of government and invested him with power.</p>"},
      {id:"meaning",title:"Disputed meaning",html:"<p>Monarchists have described the act as abdication, conditional acceptance, or suspension. Republicans treated it as the practical end of the monarchy. The ambiguity later made it usable by several incompatible traditions.</p>"},
      {id:"death",title:"Arrest and murder",html:"<p>Michael remained inside revolutionary Russia, was arrested, and was murdered near Perm in June 1918. No constituent assembly restored him.</p>"},
      {id:"numeral",title:"The Mikhail numeral",html:"<p>Whether Michael ever reigned affects later use of Mikhail II or Mikhail III. Chita avoids a regnal numeral for Michael Andreevich and thereby avoids choosing one answer.</p>"},
      {id:"chita",title:"Chita interpretation",html:"<p>Far Eastern jurists emphasize the principle that a Romanov crown may depend upon election and represented consent. The 1955–56 Sobor supplies the constituent act that Michael Alexandrovich never received.</p>"},
      {id:"limits",title:"Limits of the precedent",html:"<p>The 1917 act concerned Russia during imperial collapse. It did not authorize a future regional assembly, name Michael Andreevich, or define the federal and Japanese treaty order created at Chita.</p>"}
    ],
    related:[{href:"pauline-laws.html",kicker:"Old succession law",label:"Pauline Laws"},{href:"far-eastern-zemsky-sobor.html",kicker:"Later constituent assembly",label:"Far Eastern Zemsky Sobor"},{href:"romanov-legitimacy-dispute-siberia.html",kicker:"Later dispute",label:"Romanov Legitimacy Dispute"},{href:"tsar-mikhail.html",kicker:"Namesake sovereign",label:"Tsar Mikhail"}],
    facts:[["Principal figure","Grand Duke Michael Alexandrovich"],["Crisis","March 1917"],["Predecessor","Nicholas II"],["Immediate act","Conditional deferral of supreme power"],["Required authority","Elected constituent assembly"],["Died","13 June 1918 · Perm"],["Chita use","Precedent for elected monarchy"],["Regnal-number result","Disputed"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Grand_Duke_Michael_Alexandrovich_of_Russia",label:"Historical reference — Grand Duke Michael Alexandrovich"}]
  }),

  "romanov-emigration": romanovBackgroundArticle({
    title:"Romanov emigration",category:"Russian diaspora",infoboxKicker:"The dispersed imperial family after 1917",
    lead:"Romanov emigration was the dispersed family, household, religious, charitable, social, and political world created by the surviving imperial dynasty after revolution. By 1955 it contained strict legitimists, un-predetermined monarchists, British-connected family circles, rival family heads, and princes with little money or machinery; the Chita invitation converted one branch into a territorial monarchy and deepened every existing division.",
    canon:"The revolutionary dispersal and major claimant divisions are historical baseline. Chita's recruitment of Michael, the resulting flow of monarchists eastward, and the permanent split between a functioning regional crown and all-Russian claims are established setting consequences.",
    sections:[
      {id:"escape",title:"Escape and dispersal",html:"<p>Surviving Romanovs left Russia through Crimea, Finland, the Caucasus, and other routes. France, Britain, Germany, Denmark, and the United States became important family and émigré centers.</p>"},
      {id:"conditions",title:"Life after the court",html:"<p>Exile separated titles from state income. Family members relied on relatives, employment, property, charity, marriage, art, writing, military service, and the hospitality of European courts.</p>"},
      {id:"claims",title:"Competing claims",html:"<p>Kirillovich legitimists defended automatic succession under imperial law. Un-predetermined monarchists argued that a future national assembly must decide. Other relatives favored family solidarity while avoiding a throne claim.</p>"},
      {id:"british",title:"The British-connected branch",html:"<p>Grand Duchess Xenia's close relationship to the British royal family gave her descendants residence and social protection in Britain. Michael's upbringing and wartime service emerged from this network.</p>"},
      {id:"no-machine",title:"Claimants lacking a state",html:"<p>No émigré branch possessed territory, revenue, armed forces, or a recognized population. Dynastic law could order a family claim; it could not create a government inside fragmented postwar Russia.</p>"},
      {id:"invitation",title:"The Chita invitation",html:"<p>The Far Eastern Zemsky Sobor selected Michael partly because he had ancestry and international familiarity while lacking a local army or party. Exile became an asset for a federal compromise.</p>"},
      {id:"division",title:"A family divided by a real crown",html:"<p>After 1955, Romanovs must choose whether to support a functioning limited monarchy under Japanese protection, preserve an all-Russian claimant law, or avoid political recognition. Family and constitutional loyalties no longer coincide.</p>"},
      {id:"drain",title:"From emigration to the Romanov drain",html:"<p>The new court attracts clergy, officers, archivists, teachers, officials, donors, and conservative families. This <a href='romanov-drain.html'>Romanov drain</a> transfers part of the émigré world's institutional memory to Chita.</p>"}
    ],
    related:[{href:"house-of-romanov-russian-far-east.html",kicker:"Territorial dynasty",label:"House of Romanov in the Russian Far East"},{href:"romanov-drain.html",kicker:"Migration consequence",label:"Romanov Drain"},{href:"kirill-vladimirovich.html",kicker:"Legitimist claimant",label:"Grand Duke Kirill Vladimirovich"},{href:"grand-duchess-xenia-alexandrovna.html",kicker:"British family center",label:"Grand Duchess Xenia Alexandrovna"}],
    facts:[["Begins","After the revolutions of 1917"],["Principal centers","France, Britain, Germany, Denmark, and the United States"],["Main legal faction","Kirillovich legitimists"],["Rival principle","Future national or Zemsky Sobor decision"],["Territorial base before 1955","None"],["Chita candidate","Michael Andreevich"],["Post-1955 result","Family and claimant division"],["Institutional migration","Romanov drain toward Chita"]],
    sources:[{href:"https://en.wikipedia.org/wiki/House_of_Romanov",label:"Historical reference — House of Romanov"},{href:"https://en.wikipedia.org/wiki/Grand_Duke_Kirill_Vladimirovich_of_Russia",label:"Historical reference — Kirillovich claim"}]
  }),

  "zemsky-sobor-1613": romanovBackgroundArticle({
    title:"Zemsky Sobor of 1613",category:"Russian constitutional history",infoboxKicker:"Election of Michael Romanov after the Time of Troubles",
    lead:"The Zemsky Sobor of 1613 elected Michael Romanov as tsar after the Time of Troubles. Chita constitutionalists use the event as the oldest recognizable precedent for a represented Russian land choosing a Romanov sovereign during state collapse, while acknowledging that the Far Eastern assembly governs a smaller territory and a different constitutional order.",
    canon:"The 1613 election and foundation of the Romanov dynasty are historical baseline. Its use as an analogy for the 1955–56 Far Eastern election is established setting political doctrine.",
    sections:[
      {id:"troubles",title:"The Time of Troubles",html:"<p>Dynastic extinction, famine, revolt, rival claimants, foreign intervention, and civil war destroyed the ordinary succession after the Rurikid line. Restoration required a political act larger than household genealogy.</p>"},
      {id:"assembly",title:"The assembly",html:"<p>The Sobor brought together ecclesiastical, noble, service, urban, and other represented interests. Its exact composition and freedom remain subjects of historical debate, yet later memory treated it as the voice of the land.</p>"},
      {id:"election",title:"Election of Michael Romanov",html:"<p>Michael Feodorovich Romanov was chosen in 1613. Youth, family connection, Orthodox legitimacy, and relative distance from the strongest armed factions helped make him a candidate for settlement.</p>"},
      {id:"dynasty",title:"Foundation of a dynasty",html:"<p>The election began the Romanov dynasty. Later hereditary rule did not erase the remembered founding claim that the land had called the first tsar.</p>"},
      {id:"memory",title:"Monarchist memory",html:"<p>After 1917, un-predetermined monarchists cited 1613 to argue that a new national catastrophe required a new assembly rather than automatic acceptance of an émigré claimant.</p>"},
      {id:"chita",title:"The Far Eastern analogy",html:"<p>The Chita Restoration presents eastern Russia as a second Time of Troubles. Its Sobor calls another Michael from a Romanov branch who lacks a local army and can stand above competing provincial machines.</p>"},
      {id:"difference",title:"Critical differences",html:"<p>The 1613 Sobor claimed a Russian tsardom. The 1955–56 assembly creates a federal crown from Lake Baikal to the Pacific under a Japanese treaty ceiling and refuses an all-Russian imperial title.</p>"},
      {id:"constitutional",title:"Constitutional use",html:"<p>The precedent justifies election and represented consent. It does not decide modern citizenship, territorial charters, bicameral institutions, ministerial responsibility, Japanese recognition, or later succession.</p>"}
    ],
    related:[{href:"far-eastern-zemsky-sobor.html",kicker:"Modern counterpart",label:"Far Eastern Zemsky Sobor"},{href:"chita-restoration.html",kicker:"Restoration event",label:"Chita Restoration"},{href:"house-of-romanov-russian-far-east.html",kicker:"Elected dynasty",label:"House of Romanov in the Russian Far East"},{href:"pauline-laws.html",kicker:"Later hereditary law",label:"Pauline Laws"}],
    facts:[["Date","1613"],["Context","Time of Troubles"],["Sovereign elected","Michael Feodorovich Romanov"],["Result","Foundation of the Romanov dynasty"],["Later monarchist use","Election after state collapse"],["Far Eastern reuse","1955–56"],["Shared feature","Romanov candidate beyond strongest local factions"],["Principal difference","Regional federal crown under treaty constraint"]],
    sources:[{href:"https://en.wikipedia.org/wiki/Zemsky_Sobor",label:"Historical reference — Zemsky Sobor"},{href:"https://en.wikipedia.org/wiki/Michael_of_Russia",label:"Historical reference — Michael of Russia"}]
  })
});

const addRomanovBackgroundRelated = (slug,items) => {
  const article=window.deepArticles[slug];
  if(!article)return;
  article.related=article.related||[];
  for(const item of items)if(!article.related.some(existing=>existing.href===item.href))article.related.push(item);
};

addRomanovBackgroundRelated("tsar-mikhail",[
  {href:"prince-andrei-alexandrovich.html",kicker:"Father",label:"Prince Andrei Alexandrovich"},
  {href:"elisabetta-sasso-ruffo.html",kicker:"Mother",label:"Elisabetta di Sasso Ruffo"},
  {href:"vladimir-kirillovich.html",kicker:"Dynastic rival",label:"Grand Duke Vladimir Kirillovich"}
]);
addRomanovBackgroundRelated("house-of-romanov-russian-far-east",[
  {href:"romanov-emigration.html",kicker:"Exile background",label:"Romanov Emigration"},
  {href:"pauline-laws.html",kicker:"Old house law",label:"Pauline Laws"}
]);
addRomanovBackgroundRelated("succession-far-eastern-throne",[
  {href:"pauline-laws.html",kicker:"Rejected automatic system",label:"Pauline Laws"},
  {href:"michael-alexandrovich-1917.html",kicker:"Constituent precedent",label:"Grand Duke Michael and the 1917 Succession"}
]);
addRomanovBackgroundRelated("romanov-legitimacy-dispute-siberia",[
  {href:"kirill-vladimirovich.html",kicker:"Claimant tradition",label:"Grand Duke Kirill Vladimirovich"},
  {href:"vladimir-kirillovich.html",kicker:"Contemporary rival",label:"Grand Duke Vladimir Kirillovich"}
]);
addRomanovBackgroundRelated("far-eastern-zemsky-sobor",[
  {href:"zemsky-sobor-1613.html",kicker:"Historical precedent",label:"Zemsky Sobor of 1613"}
]);
