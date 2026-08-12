window.deepArticles = window.deepArticles || {};

const balochFounderSources = [
  {href:"../transcript.md",label:"Master Transcript — western frontier collapse, Baloch confederation, and Baloch wars"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Baloch successor states and Iranian policy"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Baloch state formation and territorial settlement"},
  {href:"https://www.qdl.qa/en/archive/81055/vdc_100056030084.0x000032",label:"British Library India Office Records via Qatar Digital Library — Baluchistan intelligence summary, 31 December 1947"},
  {href:"https://www.uob.ac.pk/Journals/Balochistan-Review/data/BR%2002%202015/41-60%20Archaeological%20Sites%20of%20Kharan%20and%20their%20Present%20Condition%20A%20Script%20about%20Western%20Region%20of%20Balochistan%2C%20Ghulam%20Farooq%20Baloch1.pdf",label:"University of Balochistan — historical succession of the Nausherwani rulers of Kharan"},
  {href:"https://balochistan.gov.pk/about/history/",label:"Government of Balochistan — historical princely states of Kalat, Makran, Kharan, and Las Bela"}
];

const balochFounderCards = [
  {href:"bai-khan-gichki.html",kicker:"Founding ruler of Makran",label:"Bai Khan Gichki"},
  {href:"habibullah-khan-nausherwani.html",kicker:"Founding ruler of Kharan",label:"Habibullah Khan Nausherwani"},
  {href:"ghulam-qadir-khan.html",kicker:"Founding Jam of Las Bela",label:"Ghulam Qadir Khan"},
  {href:"gichki-dynasty.html",kicker:"Ruling house of Makran",label:"Gichki dynasty"},
  {href:"nausherwani-dynasty.html",kicker:"Ruling house of Kharan",label:"Nausherwani dynasty"},
  {href:"jams-of-las-bela.html",kicker:"Hereditary court of Las Bela",label:"Jams of Las Bela"}
];

const balochFoundingCourtsDiagram = {
  src:"assets/diagrams/baloch-founding-courts.svg",
  alt:"Diagram comparing the rulers, capitals, and political paths of Makran, Kharan, and Las Bela after 1947",
  caption:"Three hereditary courts rejected renewed subordination to Kalat, but war carried Las Bela into the khanate decades before Makran and Kharan."
};

const balochFounderArticle = config => ({
  category:"People",
  eyebrow:"Baloch founding generation · western Indian successor order",
  landscape:balochFoundingCourtsDiagram,
  ...config,
  related:[...(config.related || []),...balochFounderCards.filter(card=>card.href!==config.slug+".html" && !(config.related || []).some(existing=>existing.href===card.href))],
  sources:balochFounderSources,
  categories:config.categories || ["Balochistan","Indian successor states","Baloch ruling houses"]
});

Object.assign(window.deepArticles,{
  "bai-khan-gichki":balochFounderArticle({
    slug:"bai-khan-gichki",title:"Bai Khan Gichki",infoboxKicker:"Nawab of Makran",infoboxTitle:"Bai Khan Gichki",
    lead:"Nawab Bai Khan Gichki was the Makrani ruler and political leader who carried the Gichki court out of the British paramountcy system and into the founding coalition of the Baloch Confederated State. His opposition to renewed rule from Kalat was already public in 1947. He negotiated separately with British officials, Muhammad Ali Jinnah, and the Sultan of Muscat, and treated Gwadar as a possible source of shelter and supply before it became the confederation's capital.",
    canon:"Bai Khan's historical opposition to Kalat, late-1947 diplomacy, Gichki revenue dispute, relationship with Gwadar, and place in the founding generation of Makran are established. His exact birth and death dates, formal accession date in this timeline, confederal offices, wartime command, domestic program, family, successor, and post-1947 style remain open.",
    sections:[
      {id:"background",title:"Family and regional background",html:"<p>Bai Khan belonged to the <a href='gichki-dynasty.html'>Gichki dynasty</a>, whose principal branches governed Kech and Panjgur within the wider Makran region. The court combined hereditary claims, revenue rights, landholding, and negotiated authority over local chiefs rather than administering a uniformly governed province.</p>"},
      {id:"paramountcy",title:"Position under British paramountcy",html:"<p>British political officers treated Makran as a princely jurisdiction associated with Kalat while repeatedly intervening in disputes between the two courts. This arrangement weakened the Khan of Kalat's practical control without resolving his superior claim. Bai Khan entered the terminal crisis with administrative standing inside Makran and reasons to resist restored subordination.</p>"},
      {id:"1947",title:"Political activity in 1947",html:"<p>A British intelligence summary of 31 December 1947 records Bai Khan refusing Kalat's jirga invitation, demanding the right to collect Gichki revenues directly, and joining the rulers of Kharan and Las Bela in pressure against Kalat. He met Muhammad Ali Jinnah on 3 December and maintained a separate correspondence with the Sultan of Muscat.</p>"},
      {id:"gwadar",title:"Gwadar diplomacy",html:"<p>Bai Khan sought assurances that the authorities at <a href='gwadar.html'>Gwadar</a> would provide shelter and supplies if hostility with Kalat became open. The request preceded the setting's <a href='gwadar-transfer.html'>Gwadar Transfer</a> and shows why the Omani enclave mattered before it became a capital: it was a legally separate coastal refuge beyond Ahmad Yar Khan's immediate control.</p>"},
      {id:"confederation",title:"Formation of the confederation",html:"<p>After British authority broke down, Bai Khan aligned Makran with <a href='habibullah-khan-nausherwani.html'>Habibullah Khan's Kharan</a>, <a href='ghulam-qadir-khan.html'>Ghulam Qadir Khan's Las Bela</a>, and Iranian policy. Their coalition rejected Kalat's account of the three states as dependencies and supplied the dynastic nucleus of the <a href='baloch-confederated-state.html'>Baloch Confederated State</a>.</p>"},
      {id:"war",title:"First Baloch Wars",html:"<p>Makran furnished coast, routes, revenue, levies, and political legitimacy during the <a href='first-baloch-wars.html'>First Baloch Wars</a>. The archive does not assign Bai Khan personal command of particular operations. His central importance lay in sustaining a separate Makrani authority upon which Iranian aid and the Gwadar government could rest.</p>"},
      {id:"rule",title:"Rule in Makran",html:"<p>The confederal bargain left land, customary law, local police, taxation arrangements, and ordinary administration to the component rulers. It is therefore likely that Bai Khan's court retained broad domestic competence while defense, diplomacy, customs, and major concessions moved to Gwadar. The names and powers of his ministers remain open.</p>"},
      {id:"succession",title:"Succession and legacy",html:"<p>The archive has not fixed Bai Khan's death, retirement, or successor in the altered timeline. Later Makrani rulers inherited both the prestige of a founding court and the suspicion that proximity to Gwadar gave Makran disproportionate influence. That tension helped shape the <a href='baloch-centralization-crisis.html'>Baloch Centralization Crisis</a>.</p>"}
    ],
    related:[{href:"makran.html",kicker:"Principality",label:"Makran"},{href:"ahmad-yar-khan.html",kicker:"Principal rival",label:"Ahmad Yar Khan"}],
    facts:[["Title","Nawab of Makran"],["House","Gichki dynasty"],["Principal region","Kech and the Makran coast"],["Political position in 1947","Opposed renewed Kalat suzerainty"],["Known contacts","Jinnah and the Sultan of Muscat"],["Founding alignment","Baloch Confederated State and Iran"],["Exact accession and later offices","Open"],["Death and successor","Open"]]
  }),

  "habibullah-khan-nausherwani":balochFounderArticle({
    slug:"habibullah-khan-nausherwani",title:"Habibullah Khan Nausherwani",infoboxKicker:"Nawab of Kharan",infoboxTitle:"Habibullah Khan Nausherwani",
    lead:"Nawab Habibullah Khan Nausherwani was the long-serving ruler of Kharan who rejected Kalat's claim to restored paramountcy and joined the founding coalition of the Baloch Confederated State. Installed in 1911, he governed through the last decades of British frontier supervision, survived a serious dispute with Kalat in 1939, and entered the post-Raj crisis with an established court, a small armed establishment, and a record of defending Kharan's separate position.",
    canon:"Habibullah's 1911 installation, Nausherwani lineage, long pre-divergence rule, 1939 dispute with Kalat, late-1947 opposition to Ahmad Yar Khan, and founding alignment with the Baloch Confederated State are established. His exact birth and death dates, formal confederal offices, wartime command, domestic legislation, household, and successor in this timeline remain open.",
    sections:[
      {id:"accession",title:"Accession",html:"<p>Habibullah succeeded within the <a href='nausherwani-dynasty.html'>Nausherwani dynasty</a> and was installed as ruler in October 1911. The succession followed Mir Muhammad Yaqoob Khan's short reign and continued a line of chiefs who had governed Kharan while disputing the practical extent of Kalat's authority.</p>"},
      {id:"state",title:"Government of Kharan",html:"<p>Kharan's court ruled a dispersed desert principality through retainers, local intermediaries, revenue arrangements, control of wells and routes, and a small state force. Strategic position near Iran and Afghanistan made communications and frontier relations unusually important to the ruler's authority.</p>"},
      {id:"british",title:"Relations with British authorities",html:"<p>Habibullah received the title Sardar Bahadur in 1919. British supervision grew through a political agent and wazir, especially where Kharan's disputes threatened the wider frontier. The relationship constrained external action but also protected the principality from direct absorption by Kalat.</p>"},
      {id:"kalat",title:"Conflict with Kalat",html:"<p>Kharan and Kalat fought their last major pre-collapse confrontation in 1939 before British officials imposed a compromise. The episode reinforced Habibullah's claim that Kharan possessed a political existence distinct from the khanate, even though Kalat continued to describe the Nausherwani ruler as subordinate.</p>"},
      {id:"1947",title:"The crisis of 1947",html:"<p>Contemporary intelligence placed Habibullah with the Jam of Las Bela and Bai Khan Gichki among the rulers pressing Kalat away from unilateral claims. Kharan effectively disclaimed the khan's suzerainty before British paramountcy had been replaced by any agreed successor system.</p>"},
      {id:"foundation",title:"Founding role",html:"<p>Habibullah joined <a href='bai-khan-gichki.html'>Bai Khan Gichki</a> and <a href='ghulam-qadir-khan.html'>Ghulam Qadir Khan</a> in the Iranian-backed coastal and frontier coalition. Kharan supplied interior depth, routes toward Iran and Chagai, a recognized hereditary court, and an armed establishment to the new <a href='baloch-confederated-state.html'>confederation</a>.</p>"},
      {id:"bargain",title:"Confederal bargain",html:"<p>The settlement preserved Kharan's control of land, customary law, local police, dynastic courts, and ordinary taxation while placing diplomacy, defense, customs, and common finance at Gwadar. The division reflected Habibullah's long defense of separate authority and became a precedent invoked by later Nausherwani rulers.</p>"},
      {id:"legacy",title:"Succession and legacy",html:"<p>The altered timeline has not fixed the end of Habibullah's reign or the identity and date of his successor. His institutional legacy is clearer: later Kharani opposition to Gwadar centralization rested upon a separate court that had resisted Kalat before independence and entered the confederation as a founding partner rather than an administrative district.</p>"}
    ],
    related:[{href:"kharan.html",kicker:"Principality",label:"Kharan"},{href:"baloch-confederated-state.html",kicker:"State he helped found",label:"Baloch Confederated State"}],
    facts:[["Title","Nawab of Kharan"],["House","Nausherwani dynasty"],["Installed","October 1911"],["Pre-collapse conflict","Kalat dispute, 1939"],["Political position in 1947","Disclaimed Kalat suzerainty"],["Founding alignment","Baloch Confederated State and Iran"],["End of reign","Open in this timeline"],["Successor","Open"]]
  }),

  "ghulam-qadir-khan":balochFounderArticle({
    slug:"ghulam-qadir-khan",title:"Ghulam Qadir Khan",infoboxKicker:"Jam Sahib of Las Bela",infoboxTitle:"Ghulam Qadir Khan",
    lead:"Jam Ghulam Qadir Khan was the hereditary ruler of Las Bela during the collapse of British paramountcy and a founding ruler of the Baloch Confederated State. He succeeded while young in 1937 and initially governed under supervised princely arrangements. By 1947 his court had disclaimed Kalat's suzerainty and joined Makran and Kharan in resisting Ahmad Yar Khan. Las Bela's later loss to Kalat separated the Jam's court from the state it had helped establish.",
    canon:"Ghulam Qadir's accession in 1937, title as Jam, late-1947 opposition to Kalat, founding membership in the Baloch coalition, and the later attachment of Las Bela to Kalat are established. His exact birth date, regency, confederal offices, wartime decisions, terms under Kalat, family, death, and succession in this timeline remain open.",
    sections:[
      {id:"accession",title:"Accession",html:"<p>Ghulam Qadir succeeded as Jam Sahib in 1937. His installation and the conditions under which full ruling powers were granted formed part of the late British princely-state system. A wazir and political authorities therefore remained important during the early part of his reign.</p>"},
      {id:"court",title:"The Jam's court",html:"<p>The <a href='jams-of-las-bela.html'>Jams of Las Bela</a> governed the Bela valley, the eastern Makran coast, and routes connecting Karachi with the western coast. Authority joined hereditary status, land, local levies, revenue, and bargaining with chiefs and British officers.</p>"},
      {id:"kalat",title:"Break with Kalat",html:"<p>Las Bela had a disputed relationship with the Khan of Kalat. Ghulam Qadir's government treated the end of paramountcy as an opportunity for separate sovereignty; Ahmad Yar Khan treated the same moment as restoration of lawful subordination. By the end of 1947, Las Bela had effectively disclaimed the khan's suzerainty.</p>"},
      {id:"coalition",title:"Founding coalition",html:"<p>Ghulam Qadir aligned with <a href='bai-khan-gichki.html'>Bai Khan Gichki</a> and <a href='habibullah-khan-nausherwani.html'>Habibullah Khan Nausherwani</a>. Las Bela gave their coalition an eastern coast, the route toward Sindh, and a third princely court able to oppose the claim that the movement was simply a Makrani secession.</p>"},
      {id:"war",title:"First Baloch Wars",html:"<p>Las Bela became the principal maritime prize of the <a href='first-baloch-wars.html'>First Baloch Wars</a>. Kalat's forces and political agents ultimately secured the principality, providing the khanate with access to the Arabian Sea and removing a founding component from the Gwadar confederation. The archive has not assigned Ghulam Qadir a detailed operational role.</p>"},
      {id:"kalat-rule",title:"Rule under Kalat",html:"<p>Las Bela remained directly attached to Kalat under its Jam rather than becoming an ordinary district. This formula allowed the khan to claim restored paramountcy while preserving a local hereditary court. The dates, guarantees, revenue division, and personal terms accepted by Ghulam Qadir remain open.</p>"},
      {id:"later-wars",title:"Later Baloch wars",html:"<p>The confederation continued to claim Las Bela and attempted recovery in the <a href='second-las-bela-war.html'>Second Las Bela War</a>. By the Third Balochistan War, the territory supplied Kalat with a coast and political pressure against Gwadar. The record does not establish whether the Jam personally sponsored, mediated, or merely accommodated those campaigns.</p>"},
      {id:"legacy",title:"Legacy and succession",html:"<p>Ghulam Qadir's reign embodies the divided outcome of the founding coalition: dynastic autonomy survived, but sovereign alignment changed. His death and successor have not been fixed in the altered timeline, and the archive does not yet determine how later Jams represented Las Bela in the <a href='baloch-grand-council.html'>Baloch Grand Council</a>.</p>"}
    ],
    related:[{href:"las-bela.html",kicker:"Principality",label:"Las Bela"},{href:"kalat.html",kicker:"Later paramount state",label:"Kalat"}],
    facts:[["Title","Jam Sahib of Las Bela"],["Accession","1937"],["Seat","Bela"],["Political position in 1947","Disclaimed Kalat suzerainty"],["Founding alignment","Baloch Confederated State"],["Later sovereign alignment","Kalat"],["Personal terms under Kalat","Open"],["Death and successor","Open"]]
  }),

  "gichki-dynasty":balochFounderArticle({
    slug:"gichki-dynasty",title:"Gichki dynasty",category:"Dynasties",eyebrow:"Ruling house · Makran",infoboxKicker:"Baloch ruling dynasty",infoboxTitle:"Gichki dynasty",
    lead:"The Gichki dynasty is the historical ruling house of Makran and the hereditary institution through which the western coastal principality entered the Baloch Confederated State. Its branches held authority in Kech and Panjgur through land, revenue rights, dynastic courts, local alliances, and recognition by larger states. The house retained domestic rule after 1947 and survived Kalat's victory in 1984 as the ruling establishment of a subordinate Makrani principality.",
    canon:"Gichki rule in Makran, the Kech and Panjgur branches, Bai Khan's founding role, retained confederal domestic powers, association with Gwadar, and subordinate princely survival after 1984 are established. Remote origins, complete genealogy, precedence between branches, ruler list, succession law, estates, court offices, and present head remain open.",
    sections:[
      {id:"origins",title:"Origins and traditions",html:"<p>Gichki genealogies preserve traditions connecting the house to earlier immigrant and regional elites. These accounts support dynastic legitimacy but do not provide a single uncontested modern genealogy. The archive therefore treats remote origin claims as court traditions rather than settled fact.</p>"},
      {id:"branches",title:"Kech and Panjgur branches",html:"<p>The dynasty's principal political branches were associated with Kech and Panjgur. Their relationship included shared lineage and regional competition rather than a simple unitary bureaucracy. Kech, Turbat, Panjgur, coastal settlements, and tribal districts each required separate bargains.</p>"},
      {id:"kalat",title:"Relationship with Kalat",html:"<p>Kalat claimed the Gichki rulers as subordinate chiefs or client princes. British political intervention left that legal hierarchy in place while reducing the Khan's practical control. The unresolved distinction between dependency and protected autonomy became a sovereignty dispute when paramountcy ended.</p>"},
      {id:"bai",title:"Bai Khan and independence",html:"<p><a href='bai-khan-gichki.html'>Bai Khan Gichki</a> refused renewed subordination in 1947, asserted direct control of Gichki revenue, and sought external support. His conduct connected the dynasty's local fiscal claims to the formation of an independent Baloch confederation.</p>"},
      {id:"confederal",title:"Position in the confederation",html:"<p>The house retained land, customary jurisdiction, local police, taxation arrangements, a dynastic court, and ordinary administration. The common government at Gwadar held diplomacy, defense, customs, finance, and major concessions. Exact succession and the boundary between court and ministry remain open.</p>"},
      {id:"gwadar",title:"Makrani predominance",html:"<p>Gwadar's position beside Makran gave Gichki officials, clients, and commercial networks easier access to national offices and Iranian supply. Kharan and Chagai later described this geography as Makrani domination. The record does not establish that every Gichki ruler supported centralization.</p>"},
      {id:"1984",title:"Settlement of 1984",html:"<p>Kalat preserved Makran as a subordinate principality after the Third Balochistan War. Hereditary authority, local law, land rights, and representation survived beneath the Khan's restored paramountcy while defense and foreign policy passed to the enlarged state.</p>"},
      {id:"succession",title:"Succession",html:"<p>The ruler sequence after Bai Khan is not fixed. Future additions should distinguish the head of the wider Gichki house, the ruler of Makran, and branch chiefs in Kech or Panjgur rather than assuming that all titles necessarily belonged to one person.</p>"}
    ],
    related:[{href:"makran.html",kicker:"Dynastic territory",label:"Makran"},{href:"government-of-baloch-confederated-state.html",kicker:"Former common government",label:"Confederated Government"}],
    facts:[["Type","Baloch ruling dynasty"],["Principal territory","Makran"],["Principal branches","Kech and Panjgur"],["Founding ruler after 1947","Bai Khan Gichki"],["Confederal status","Component princely house"],["Status after 1984","Subordinate dynasty under Kalat"],["Complete genealogy","Open"],["Present head","Open"]]
  }),

  "nausherwani-dynasty":balochFounderArticle({
    slug:"nausherwani-dynasty",title:"Nausherwani dynasty",category:"Dynasties",eyebrow:"Ruling house · Kharan",infoboxKicker:"Baloch ruling dynasty",infoboxTitle:"Nausherwani dynasty",
    lead:"The Nausherwani dynasty is the hereditary ruling house of Kharan. Its chiefs built and defended a separate desert principality while Kalat claimed superior authority over it. Under Habibullah Khan, the house disclaimed that suzerainty, entered the Baloch Confederated State as a founding court, and preserved broad domestic powers. Its resistance to control from Gwadar later helped fracture the confederation, after which it survived as a subordinate dynasty under Kalat.",
    canon:"Nausherwani rule in Kharan, the established succession from the nineteenth century through Habibullah Khan, recurrent conflict with Kalat, confederal membership, opposition to centralization, and post-1984 subordinate status are established. Remote origin traditions, complete genealogy, succession after Habibullah, court offices, estates, cadet branches, and present head remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The Nausherwanis established Kharan as a distinct state by the early modern period. Court traditions connect the house with older Iranian and Sistan-centered lineages. These traditions explain political identity but remain genealogical claims rather than a single verified descent.</p>"},
      {id:"rulers",title:"Historical succession",html:"<p>Recorded rulers include Mir Abbas Khan, Mir Azad Khan, Mir Nauroz Khan, Mir Muhammad Yaqoob Khan, and <a href='habibullah-khan-nausherwani.html'>Habibullah Khan Nausherwani</a>. The sequence shows durable hereditary government despite changes in British supervision and repeated disputes with Kalat.</p>"},
      {id:"territory",title:"Dynastic authority",html:"<p>The court's authority rested upon control of routes, wells, cultivable districts, retainers, land and revenue relationships, and accommodation with local notables. Sparse settlement made negotiated obedience and mobile force more important than dense district administration.</p>"},
      {id:"kalat",title:"Kalat and British intervention",html:"<p>Kalat described Kharan as a vassal principality; the Nausherwanis defended internal independence. British agents alternately mediated, restrained, and protected the court. Their compromise after the 1939 conflict left the legal relationship unresolved when imperial authority failed.</p>"},
      {id:"confederation",title:"Founding membership",html:"<p>Habibullah rejected renewed subordination and joined Makran and Las Bela in the Iranian-backed <a href='baloch-confederated-state.html'>Baloch Confederated State</a>. The dynasty entered as a partner possessing territory and its own armed establishment, not as an appointed provincial administration.</p>"},
      {id:"autonomy",title:"Confederal autonomy",html:"<p>Kharan retained land, customary law, local police, taxation arrangements, and its court. Common defense and foreign policy were accepted because Kalat posed the larger threat. Later attempts to centralize army appointments, stores, customs, and Iranian aid appeared to undo that bargain.</p>"},
      {id:"crisis",title:"Centralization crisis",html:"<p>Nausherwani interests became a principal center of opposition during 1981–84. Kalat offered hereditary recognition, local law and land, and representation in a Baloch Grand Council. Particular defections and negotiations remain open, but Kharan's institutional incentives are established.</p>"},
      {id:"postwar",title:"Position after 1984",html:"<p>Kharan survived as a subordinate principality under the Khan of Kalat. The dynasty kept domestic functions while common sovereignty moved to the enlarged Kalat-led order. The accession instrument, ruler, revenue division, and present constitutional practice remain open.</p>"}
    ],
    related:[{href:"kharan.html",kicker:"Dynastic territory",label:"Kharan"},{href:"baloch-centralization-crisis.html",kicker:"Institutional rupture",label:"Baloch Centralization Crisis"}],
    facts:[["Type","Baloch ruling dynasty"],["Principal territory","Kharan"],["Recorded accession of Habibullah","1911"],["Pre-collapse rival claim","Kalat suzerainty"],["Confederal status","Founding component house"],["Status after 1984","Subordinate dynasty under Kalat"],["Succession after Habibullah","Open"],["Present head","Open"]]
  }),

  "jams-of-las-bela":balochFounderArticle({
    slug:"jams-of-las-bela",title:"Jams of Las Bela",category:"Dynasties",eyebrow:"Hereditary rulers · Las Bela",infoboxKicker:"Princely title and ruling house",infoboxTitle:"Jams of Las Bela",
    lead:"The Jams of Las Bela are the hereditary rulers of the eastern Baloch coastal principality centered on Bela. Their title joined regional lineage, landholding, local administration, and negotiated relations with Kalat and British political authorities. Under Ghulam Qadir Khan the Jam's court rejected Kalat's suzerainty and helped found the Baloch Confederated State, but Las Bela later entered Kalat while retaining its hereditary ruler.",
    canon:"The Jam title, hereditary rule from Bela, Ghulam Qadir's 1937 accession, founding participation in the Baloch Confederated State, later Kalat attachment, and survival of the local court are established. Remote dynastic origins, complete ruler list, succession law, branches, regencies, estates, council representation, and present Jam remain open.",
    sections:[
      {id:"title",title:"Title and house",html:"<p><em>Jam</em> was the hereditary title of Las Bela's ruler. Genealogical traditions connect the ruling line with Korejo and Samma ancestry and with older Sindh–Baloch coastal politics. The archive records those traditions without fixing one comprehensive genealogy.</p>"},
      {id:"territory",title:"Territorial basis",html:"<p>The court governed the Bela valley, coastal settlements, and the routes between Sindh and Makran. Control of passes, water, land, fishing and coastal revenues, and local levies made the principality more than a ceremonial title.</p>"},
      {id:"kalat",title:"Relationship with Kalat",html:"<p>The Khan of Kalat claimed the Jam as a subordinate ruler. British intervention gave Las Bela substantial separate administration while preserving an ambiguous hierarchy. The court could therefore describe independence in 1947 as the end of paramountcy, while Kalat described it as unlawful secession.</p>"},
      {id:"ghulam",title:"Ghulam Qadir Khan",html:"<p><a href='ghulam-qadir-khan.html'>Ghulam Qadir Khan</a> succeeded in 1937 and governed through the transition from supervised princely rule to the collapse of imperial authority. His court joined the rulers of Makran and Kharan in disclaiming Kalat suzerainty.</p>"},
      {id:"confederation",title:"Confederal foundation",html:"<p>The Jam entered the Baloch Confederated State as one of three principal founding rulers. Las Bela provided the coalition with an eastern maritime outlet and a route toward Karachi. The common government did not abolish the court's domestic authority.</p>"},
      {id:"loss",title:"Attachment to Kalat",html:"<p>Kalat took Las Bela during the Baloch wars and preserved the principality under its Jam. The settlement furnished Kalat a coast while allowing it to present conquest as restoration of historical paramountcy. Exact personal and constitutional terms remain open.</p>"},
      {id:"wars",title:"Dynastic position in later wars",html:"<p>Las Bela remained the object of the confederation's national claim and the field of the 1976–79 recovery war. Its court was locally valuable to Kalat because hereditary continuity reduced the need for direct rule. The position of individual Jams toward later campaigns remains unresolved.</p>"},
      {id:"present",title:"Post-1984 position",html:"<p>The Jam governs a principality directly attached to the Kalat-led state and represented within the proposed confederal order. Las Bela differs from Makran and Kharan because its attachment predates the final 1984 settlement. The current ruler and precise council powers have not been named.</p>"}
    ],
    related:[{href:"las-bela.html",kicker:"Dynastic territory",label:"Las Bela"},{href:"second-las-bela-war.html",kicker:"War over the principality",label:"Second Las Bela War"}],
    facts:[["Title","Jam Sahib"],["Seat","Bela"],["Principal territory","Las Bela"],["Ruler from 1937","Ghulam Qadir Khan"],["Founding alignment","Baloch Confederated State"],["Later alignment","Kalat"],["Dynastic origin traditions","Korejo and Samma"],["Present Jam","Open"]]
  })
});

const addBalochFounderLinks = (slug,links=balochFounderCards) => {
  const article=window.deepArticles[slug];
  if(!article) return;
  article.related=[...(article.related || []),...links.filter(link=>!(article.related || []).some(existing=>existing.href===link.href))];
};

const makranFounder=window.deepArticles["makran"];
if(makranFounder){
  const princely=makranFounder.sections?.find(section=>section.id==="princely");
  if(princely) princely.html=princely.html.replace("governed by Gichki rulers","governed by the <a href='gichki-dynasty.html'>Gichki dynasty</a>");
  const formation=makranFounder.sections?.find(section=>section.id==="confederation");
  if(formation) formation.html=formation.html.replace("Makran rejected","Under <a href='bai-khan-gichki.html'>Bai Khan Gichki</a>, Makran rejected");
  addBalochFounderLinks("makran",[{href:"bai-khan-gichki.html",kicker:"Founding ruler",label:"Bai Khan Gichki"},{href:"gichki-dynasty.html",kicker:"Ruling house",label:"Gichki dynasty"}]);
}

const kharanFounder=window.deepArticles["kharan"];
if(kharanFounder){
  const princely=kharanFounder.sections?.find(section=>section.id==="princely");
  if(princely) princely.html=princely.html.replace("The Nausherwani rulers","The <a href='nausherwani-dynasty.html'>Nausherwani rulers</a>");
  const foundation=kharanFounder.sections?.find(section=>section.id==="confederation");
  if(foundation) foundation.html=foundation.html.replace("Kharan rejected","Under <a href='habibullah-khan-nausherwani.html'>Habibullah Khan Nausherwani</a>, Kharan rejected");
  addBalochFounderLinks("kharan",[{href:"habibullah-khan-nausherwani.html",kicker:"Founding ruler",label:"Habibullah Khan Nausherwani"},{href:"nausherwani-dynasty.html",kicker:"Ruling house",label:"Nausherwani dynasty"}]);
}

const lasBelaFounder=window.deepArticles["las-bela"];
if(lasBelaFounder){
  const princely=lasBelaFounder.sections?.find(section=>section.id==="princely");
  if(princely) princely.html=princely.html.replace("The Jam of Las Bela","The <a href='jams-of-las-bela.html'>Jam of Las Bela</a>");
  const foundation=lasBelaFounder.sections?.find(section=>section.id==="confederation");
  if(foundation) foundation.html=foundation.html.replace("Las Bela joined","Under <a href='ghulam-qadir-khan.html'>Ghulam Qadir Khan</a>, Las Bela joined");
  addBalochFounderLinks("las-bela",[{href:"ghulam-qadir-khan.html",kicker:"Founding ruler",label:"Ghulam Qadir Khan"},{href:"jams-of-las-bela.html",kicker:"Hereditary rulers",label:"Jams of Las Bela"}]);
}

addBalochFounderLinks("baloch-confederated-state");
addBalochFounderLinks("government-of-baloch-confederated-state");
addBalochFounderLinks("western-succession-crisis");
addBalochFounderLinks("first-baloch-wars");
addBalochFounderLinks("kalat");
addBalochFounderLinks("second-las-bela-war",[{href:"ghulam-qadir-khan.html",kicker:"Founding Jam",label:"Ghulam Qadir Khan"},{href:"jams-of-las-bela.html",kicker:"Local court",label:"Jams of Las Bela"}]);
addBalochFounderLinks("baloch-centralization-crisis",[{href:"gichki-dynasty.html",kicker:"Makrani establishment",label:"Gichki dynasty"},{href:"nausherwani-dynasty.html",kicker:"Kharani establishment",label:"Nausherwani dynasty"}]);
