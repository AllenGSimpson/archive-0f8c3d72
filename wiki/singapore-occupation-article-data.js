window.deepArticles = window.deepArticles || {};

const singaporeOccupationLocalSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Limited Southern War and permanent Japanese southern empire"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Singapore conquest, long war, and Lisbon settlement"},
  {href:"../transcript.md",label:"Master Transcript — Japanese victory and Singapore's postwar commercial role"}
];

const singaporeOccupationOfficialSources = {
  "shonan-military-administration":[
    {href:"https://www.roots.gov.sg/stories-landing/stories/world-war-ii/story",label:"Singapore National Heritage Board — Singapore under Japanese rule"},
    {href:"https://www.roots.gov.sg/-/media/Roots/Files/Civic-District-Heritage-Trail/Civic-District-Trail_Booklet.pdf",label:"Singapore National Heritage Board — civic administration in Shōnan"}
  ],
  "sook-ching-massacre":[
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/sook-ching-inspection-centre",label:"Singapore National Heritage Board — Sook Ching screening center"},
    {href:"https://www.roots.gov.sg/places/places-landing/Places/landmarks/bedok-trail/jalan-puay-poon",label:"Singapore National Heritage Board — execution sites and victim estimates"}
  ],
  "dalforce":[
    {href:"https://www.roots.gov.sg/stories-landing/stories/dalforce-dalleys-desperadoes/story",label:"Singapore National Heritage Board — Dalforce history"},
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/Battle-at-Kranji-Beach",label:"Singapore National Heritage Board — Dalforce at Kranji"}
  ],
  "changi-prisoner-system":[
    {href:"https://www.awm.gov.au/articles/encyclopedia/pow/changi",label:"Australian War Memorial — Changi prisoner-of-war system"},
    {href:"https://www.roots.gov.sg/places/places-landing/trails/Changi-Heritage-Trail---War-and-Peace",label:"Singapore National Heritage Board — Changi war and captivity landscape"}
  ],
  "singapore-occupation-economy":[
    {href:"https://www.roots.gov.sg/Collection-Landing/listing/1319462",label:"National Museum of Singapore — Japanese occupation currency and inflation"},
    {href:"https://www.roots.gov.sg/Collection-Landing/listing/1129256",label:"National Museum of Singapore — food rationing under occupation"}
  ],
  "japanese-twenty-fifth-army":[
    {href:"https://www.awm.gov.au/articles/blog/1942-fall-of-singapore",label:"Australian War Memorial — 25th Army in Malaya and Singapore"},
    {href:"https://www.nam.ac.uk/explore/far-east-campaign",label:"National Army Museum — Far East campaign overview"}
  ]
};

const singaporeOccupationLandscape = {
  src:"assets/diagrams/singapore-occupation-system.svg",
  alt:"Diagram of wartime Shōnan showing the 25th Army, military administration, Kempeitai screening, occupation economy, Changi prisoner system, and post-Lisbon civil transition",
  caption:"Japanese victory converted conquest into a five-year military regime and then a civil city-state rather than a restored British colony"
};

const singaporeOccupationCommonRelated = [
  {href:"fall-of-singapore.html",kicker:"Founding conquest",label:"Fall of Singapore"},
  {href:"singapore.html",kicker:"Mature successor",label:"Singapore"},
  {href:"limited-southern-war.html",kicker:"Wider conflict",label:"Limited Southern War"},
  {href:"japanese-war-memory.html",kicker:"Contested interpretation",label:"Japanese War Memory"}
];

const singaporeOccupationArticle = c => ({
  title:c.title,
  category:c.category || "Occupation history",
  eyebrow:c.eyebrow,
  infoboxKicker:c.infoboxKicker,
  infoboxTitle:c.infoboxTitle || c.title,
  landscape:singaporeOccupationLandscape,
  lead:c.lead,
  canon:c.canon,
  sections:c.sections,
  related:[...singaporeOccupationCommonRelated,...c.related],
  sources:[...singaporeOccupationLocalSources,...singaporeOccupationOfficialSources[c.id]],
  facts:c.facts,
  categories:c.categories
});

Object.assign(window.deepArticles,{
  "shonan-military-administration":singaporeOccupationArticle({
    id:"shonan-military-administration",title:"Shōnan military administration",eyebrow:"Military government · 1942–post-Lisbon transition",infoboxKicker:"Japanese government of conquered Singapore",
    lead:"The Shōnan military administration was the Japanese military government established after the conquest of Singapore. It renamed the island Shōnan-tō, restored municipal services under military supremacy, imposed security screening and economic controls, and converted the British fortress into the headquarters and clearing center of the southern empire. Unlike occupations ended by Japanese defeat elsewhere in historical writing, Shōnan was succeeded by a Japanese-sponsored civil city-state rather than restored British government.",
    canon:"The name Shōnan-tō, military government, retained local civil servants, Japanese language and place-name program, Kempeitai security, rationing, occupation currency, coercion, and strategic use of the port are historical baselines retained in the setting. Military rule continues through the long war; its exact post-Lisbon dissolution date, civil charter, officeholders, and restoration of Singapore as the principal international name remain open.",
    sections:[
      {id:"conquest",title:"Government after capitulation",html:"<p>The <a href='fall-of-singapore.html'>Commonwealth capitulation</a> transferred a densely populated port, naval base, treasury, municipal system, and prisoner population to the <a href='japanese-twenty-fifth-army.html'>Japanese 25th Army</a>. Military proclamations displaced British authority before any durable civil constitution could be designed.</p><p>Japanese headquarters treated order, security, shipping, and supply as one occupation problem. The city was too important to leave under improvised local control.</p>"},
      {id:"name",title:"Shōnan-tō, Light of the South",html:"<p>The administration renamed Singapore <em>Shōnan-tō</em>, conventionally translated as “Light of the South.” Streets, buildings, institutions, ceremonies, newspapers, and schools received Japanese names or approved terminology.</p><p>The renaming declared a permanent imperial reorientation. Continued popular use of Singapore in several languages nevertheless prevented Shōnan from wholly replacing the older commercial name.</p>"},
      {id:"municipal",title:"Municipal continuity under military supremacy",html:"<p>Local public officers were ordered back to work, and water, fire, sanitation, markets, roads, registration, and police functions resumed where personnel and materials allowed. Existing buildings and files gave the conquerors an administrative framework.</p><p>Continuity did not preserve British sovereignty. Japanese military offices could override municipal decisions, requisition labor or property, and remove officials without ordinary legal appeal.</p>"},
      {id:"security",title:"Kempeitai and preventive terror",html:"<p>The Kempeitai and its auxiliaries operated detention, interrogation, intelligence, censorship, and anti-resistance systems. The <a href='sook-ching-massacre.html'>Sook Ching screenings and executions</a> established terror at the beginning of the regime.</p><p>Security files classified communities by previous political activity, military service, ethnicity, association, and suspected loyalty. Informers and coerced testimony made the classifications unstable and easily abused.</p>"},
      {id:"economy",title:"Rationing and command economy",html:"<p>The <a href='singapore-occupation-economy.html'>occupation economy</a> combined requisition, ration cards, price orders, compulsory currency, black markets, subsistence cultivation, and privileged military supply. Port traffic recovered only within a war system whose shipping remained exposed and whose first claim upon food belonged to armed forces.</p><p>Japanese firms and military agencies began acquiring the warehouses, docks, banks, and commercial knowledge later inherited by the postwar sphere.</p>"},
      {id:"society",title:"Education, language, and public ritual",html:"<p>Schools, newspapers, radio, associations, and public ceremonies taught Japanese imperial geography and the meaning of Asian liberation. Japanese language offered access to government and strategic firms without eliminating Chinese languages, Malay, Tamil, or English from private and commercial life.</p><p>Public compliance ranged from conviction through adaptation to survival. Later biographies rarely fit one stable category of collaborator or resister.</p>"},
      {id:"prisoners",title:"Prisoners and imperial labor",html:"<p>Commonwealth captives and civilian internees entered the <a href='changi-prisoner-system.html'>Changi system</a>, local work parties, and transport networks leading to projects elsewhere in Southeast Asia. Their confinement became a source of labor, security concern, and diplomatic liability.</p><p>Because the general war continued to 1947, captivity lasted beyond the historical Japanese surrender point and ended through negotiated peace arrangements rather than liberation.</p>"},
      {id:"transition",title:"From occupation to city-state",html:"<p>The Lisbon settlement recognized Japanese possession of Singapore but made an indefinite military regime commercially costly. Civil courts, port administration, local nationality, taxation, and corporate law gradually separated from direct army government.</p><p>The mature <a href='singapore.html'>Singapore city-state</a> kept Japanese strategic supremacy while abandoning daily military occupation. The precise charter and year of this conversion remain unresolved in the archive.</p>"}
    ],
    related:[{href:"sook-ching-massacre.html",kicker:"Founding atrocity",label:"Sook Ching Massacre"},{href:"singapore-occupation-economy.html",kicker:"Material life",label:"Singapore Occupation Economy"}],
    facts:[["Official name","Shōnan-tō"],["Began","February 1942"],["Predecessor","British colonial government"],["Authority","Japanese military government"],["Security organ","Kempeitai and auxiliaries"],["Economic system","Rationing, requisition, and compulsory military currency"],["Wartime duration","Through the 1947 peace"],["Successor","Japanese-aligned civil Singapore; exact charter open"]],
    categories:["Shōnan military administration","Japanese occupation of Singapore","Military government","GEACPS history","1942 establishments"]
  }),

  "sook-ching-massacre":singaporeOccupationArticle({
    id:"sook-ching-massacre",title:"Sook Ching massacre",category:"War crimes",eyebrow:"Mass screening and executions · 1942",infoboxKicker:"Mass killing of Singapore's Chinese population",
    lead:"The Sook Ching massacre was the Japanese military screening, detention, and mass execution of Chinese civilians and former volunteers after the conquest of Singapore. Kempeitai officers and local auxiliaries selected alleged anti-Japanese elements through intelligence lists, broad categories, informers, and arbitrary judgment. Victims were transported from screening centers to beaches and other remote sites, killed, and buried in mass graves.",
    canon:"The February–March 1942 screenings, Kempeitai direction, targeting of Chinese men and former volunteers, major inspection and execution sites, mass graves, and death of tens of thousands are retained. Estimates commonly range from 25,000 to 50,000 across Singapore, but the exact setting total, unit-level orders, victim register, and later official admissions remain open because Japan is never occupied and tried by the Allies.",
    sections:[
      {id:"origin",title:"Collective punishment after conquest",html:"<p>Japanese military authorities entered Singapore expecting resistance from a Chinese population that had raised money, organized relief, supported China, and supplied men to <a href='dalforce.html'>Dalforce</a>. The conquest therefore carried a preexisting category of collective suspicion.</p><p>Sook Ching was intended to punish opposition and remove people thought capable of organizing future resistance.</p>"},
      {id:"screening",title:"Screening centers",html:"<p>Chinese men were ordered into enclosed inspection areas at locations including the city center and former racecourse. Barbed wire, guards, registration, and separated exits turned ordinary public space into a system for selecting prisoners.</p><p>Those passed by the screen were released or marked; those rejected were loaded into vehicles and removed.</p>"},
      {id:"categories",title:"Lists, categories, and arbitrary selection",html:"<p>Priority suspects included persons named by military intelligence, volunteer-force members, communists, secret-society members, alleged looters, people possessing weapons, and others denounced as anti-Japanese.</p><p>Few screening teams possessed evidence sufficient for individual judgment. Informers, appearance, documents, association, and chance could determine who entered an execution transport.</p>"},
      {id:"sites",title:"Execution sites",html:"<p>Victims were taken to coastal and isolated locations including Punggol, Changi, Bedok, Siglap, and other sites. Groups were tied, shot, bayoneted, drowned, burned, or buried in mass graves.</p><p>The geographical dispersal concealed the scale from any one neighborhood while leaving a ring of killing sites around the island.</p>"},
      {id:"victims",title:"Victim estimates",html:"<p>Later Singaporean estimates commonly range from 25,000 to 50,000 deaths. Japanese official figures and narrower archival reconstructions have been lower, while mass-grave recovery has demonstrated that no complete contemporary register survived.</p><p>The archive therefore uses “tens of thousands” as the secure description and treats a precise total as unresolved.</p>"},
      {id:"survivors",title:"Survivors, graves, and testimony",html:"<p>Some victims survived shootings or escaped from beaches and later supplied testimony. Fishermen, residents, prisoners ordered to bury bodies, and families of missing men preserved local knowledge that official occupation records did not acknowledge.</p><p>Later construction and erosion repeatedly exposed human remains and personal effects.</p>"},
      {id:"victory",title:"Accountability without Japanese defeat",html:"<p>No Allied occupation of Japan opens the complete military archive or imposes a metropolitan tribunal system. Commonwealth governments, Chinese organizations, Singaporean institutions, and families document the killings from outside the victorious imperial legal order.</p><p>Japanese authorities can prosecute selected individuals or describe excesses without accepting that the purge expressed a wider occupation policy. This limited accountability becomes a permanent diplomatic wound.</p>"},
      {id:"memory",title:"Civilian memory in modern Singapore",html:"<p>Memorial rites, recovered remains, victim lists, museums, school histories, temples, churches, clan associations, and family observance make Sook Ching central to Singaporean civic memory.</p><p>The prosperous postwar city cannot narrate its Japanese security guarantee without also confronting the massacre through which Japanese rule began.</p>"}
    ],
    related:[{href:"dalforce.html",kicker:"Targeted defenders",label:"Dalforce"},{href:"shonan-military-administration.html",kicker:"Occupation regime",label:"Shōnan Military Administration"}],
    facts:[["Period","February–March 1942; exact setting dates open"],["Location","Screening and execution sites across Singapore"],["Perpetrating system","Japanese military and Kempeitai auxiliaries"],["Principal victims","Chinese civilians and former volunteers"],["Selection method","Lists, categories, informers, and arbitrary screening"],["Estimated deaths","Tens of thousands; commonly 25,000–50,000"],["Classification","Massacre and war crime"],["Metropolitan Allied tribunal","Absent"]],
    categories:["Sook Ching massacre","Japanese war crimes","Singaporean Chinese history","Massacres in Singapore","1942 massacres"]
  }),

  "dalforce":singaporeOccupationArticle({
    id:"dalforce",title:"Dalforce",category:"Military organizations",eyebrow:"Volunteer force · January–February 1942",infoboxKicker:"Singapore Overseas Chinese Volunteer Army",
    lead:"Dalforce was the hastily organized Chinese volunteer formation that fought in the defense of Singapore. Recruited only weeks before the Japanese landing, its members included students, laborers, office workers, drivers, secret-society members, political prisoners, women, and older volunteers. Poorly armed and briefly trained, Dalforce detachments nevertheless fought at Kranji, Bukit Timah, and other sectors before the capitulation dissolved the force.",
    canon:"The January 1942 formation, association with Lieutenant Colonel John Dalley, Chinese name Singapore Overseas Chinese Volunteer Army, approximately 3,000 volunteers with about 1,250 enlisted or trained, social diversity, inadequate weapons and preparation, combat around Kranji and Bukit Timah, dissolution at surrender, and subsequent targeting of members are retained. A complete roll and alternate casualty total remain open.",
    sections:[
      {id:"delay",title:"A force authorized too late",html:"<p>Chinese associations had offered men, money, and organization before the final crisis, but British authorities distrusted armed political networks and delayed creating a large volunteer formation. Permission came only when the <a href='malayan-campaign.html'>Malayan Campaign</a> already threatened the island.</p><p>The delay shaped every later weakness in training, command, equipment, and unit cohesion.</p>"},
      {id:"names",title:"Dalley's force and the volunteer army",html:"<p>The British name derived from Lieutenant Colonel John Dalley of the police, who had advocated organizing Chinese volunteers. Chinese participants used a name rendered as the Singapore Overseas Chinese Volunteer Army.</p><p>The different names reveal two claims: an emergency auxiliary attached to colonial command and a locally raised army defending its own community.</p>"},
      {id:"recruitment",title:"Recruitment across the city",html:"<p>Thousands volunteered from Singapore and Malaya. The force drew students, laborers, clerks, drivers, shop workers, political organizers, former prisoners, secret-society members, women, and elderly citizens.</p><p>Roughly 3,000 are commonly associated with the recruitment effort, while about 1,250 received formal enlistment or training before battle.</p>"},
      {id:"training",title:"Weapons and preparation",html:"<p>Training lasted days or weeks rather than months. Rifles, shotguns, grenades, machine guns, uniforms, transport, communications, and medical support were inconsistent.</p><p>Local knowledge and motivation could not replace fire discipline, common command procedure, or adequate ammunition in a rapidly moving combined-arms battle.</p>"},
      {id:"kranji",title:"Kranji and the northern shore",html:"<p>Dalforce volunteers defended the western side of the Sungei Kranji sector during the <a href='battle-of-kranji.html'>Battle of Kranji</a>. Their fire contributed to the severe disruption of the Imperial Guards crossing.</p><p>The later withdrawal from the coast placed survivors inside the same confused movement toward the central defensive line as Australian and Indian units.</p>"},
      {id:"bukit",title:"Bukit Timah and scattered fighting",html:"<p>Other detachments fought around <a href='battle-of-bukit-timah.html'>Bukit Timah</a>, urban approaches, and local defensive positions. Small groups often operated beside Commonwealth troops without the communications required to preserve a complete unit history.</p><p>Stories of individual volunteers, including armed women and elderly defenders, became more durable than a formal operational record.</p>"},
      {id:"dissolution",title:"Dissolution and persecution",html:"<p>The capitulation left no mechanism for Dalforce to surrender as a protected, well-documented formation. Members discarded weapons, hid, returned to civilian life, or sought routes into resistance and escape.</p><p>Previous service made volunteers and suspected supporters targets during the <a href='sook-ching-massacre.html'>Sook Ching screenings</a>.</p>"},
      {id:"legacy",title:"Legacy in a Japanese-aligned city",html:"<p>Dalforce disproves the claim that Singapore's Chinese population waited passively for the outcome of an imperial war. Its memory belongs to anti-Japanese resistance, civic defense, Chinese association history, and criticism of colonial mistrust.</p><p>Official commemoration remains delicate because modern Singapore is secure and wealthy inside the Japanese sphere whose founding army Dalforce opposed.</p>"}
    ],
    related:[{href:"battle-of-kranji.html",kicker:"Principal recorded action",label:"Battle of Kranji"},{href:"sook-ching-massacre.html",kicker:"Post-surrender persecution",label:"Sook Ching Massacre"}],
    facts:[["Active","January–February 1942"],["Chinese name","Singapore Overseas Chinese Volunteer Army"],["British namesake","Lt Col John Dalley"],["Volunteers","About 3,000 associated with recruitment"],["Formally enlisted or trained","About 1,250"],["Composition","Civilian Chinese volunteers from diverse occupations"],["Principal actions","Kranji, Bukit Timah, and local island defenses"],["Fate","Dissolved at capitulation; members persecuted"]],
    categories:["Dalforce","Battle of Singapore","Chinese volunteer forces","Anti-Japanese resistance","1942 disestablishments"]
  }),

  "changi-prisoner-system":singaporeOccupationArticle({
    id:"changi-prisoner-system",title:"Changi prisoner system",category:"Prisoner-of-war history",eyebrow:"Captivity and transit complex · 1942–1947",infoboxKicker:"Commonwealth prisoner and internee system",
    lead:"The Changi prisoner system was the complex of barracks, camps, hospitals, work parties, and civilian internment centered on the Changi Peninsula after Singapore's capitulation. It held British, Australian, Indian, and other Commonwealth prisoners, as well as civilian internees, while serving as a transit point for labor drafts sent across the Japanese southern empire. In the setting, Changi remained active until the negotiated end of the long war rather than being liberated in 1945.",
    canon:"The use of Selarang and other Changi barracks, Changi Gaol, prisoner self-administration, hospitals, gardens, education, labor drafts, tightened discipline, and the Selarang Barracks incident are retained from the historical system. Captivity continues to the 1947 peace; exact 1945–1947 populations, transfers, death totals, camp command, and repatriation schedule remain open.",
    sections:[
      {id:"base",title:"A military base becomes a prison district",html:"<p>Before the war Changi contained British barracks, coastal defenses, air and support facilities, and the civilian gaol. Those buildings allowed Japanese authorities to confine the large prisoner population created by the <a href='fall-of-singapore.html'>capitulation</a>.</p><p>Different compounds acquired distinct national, service, hospital, officer, work, and civilian functions rather than forming one uniform prison.</p>"},
      {id:"arrival",title:"Arrival after surrender",html:"<p>Commonwealth prisoners marched or were transported to Changi after the surrender. Australian formations concentrated around Selarang, while British, Indian, and other groups occupied neighboring barracks and compounds.</p><p>Initial freedom of movement narrowed as fences, guard arrangements, and dedicated prisoner-of-war staff transformed the district into a controlled camp system.</p>"},
      {id:"self",title:"Prisoner self-administration",html:"<p>Japanese authorities relied upon senior captured officers and prisoner organizations for roll calls, discipline, sanitation, kitchens, hospitals, burial, work assignment, and internal communication.</p><p>This delegation preserved military structures and practical expertise but also forced prisoner leaders to transmit orders they could not freely refuse.</p>"},
      {id:"life",title:"Hospitals, gardens, worship, and study",html:"<p>Prisoners restored utilities, cultivated gardens, operated medical facilities, organized worship and performances, and taught courses sometimes remembered as Changi University. These institutions sustained morale and survival without making confinement benign.</p><p>Food, medicine, space, and physical strength declined as the war continued and outside labor demands removed healthier men.</p>"},
      {id:"selarang",title:"The Selarang Barracks incident",html:"<p>When prisoners refused to sign a no-escape declaration, more than fifteen thousand British and Australian captives were crowded into the Selarang area. The confrontation ended only after an order made clear that signatures were given under compulsion.</p><p>The incident became a defining example of collective resistance conducted within the narrow limits of captivity.</p>"},
      {id:"transit",title:"Transit into the labor empire",html:"<p>Changi supplied work parties for Singapore, Malaya, the Burma–Thailand railway, ports, airfields, mines, and construction elsewhere in the southern empire. For many prisoners it was an assembly and transit center rather than the place of longest confinement.</p><p>Transfers broke unit records and family knowledge, complicating every later casualty and repatriation register.</p>"},
      {id:"longwar",title:"The additional years of captivity",html:"<p>In the historical baseline Changi ended with Japanese surrender in 1945. Here Britain and Japan remain at war until the 1947 Lisbon settlement, so no liberation force arrives and prisoner institutions continue under deteriorating wartime conditions.</p><p>The archive does not mechanically extend 1944 population figures for two more years. Death, transfer, labor demand, negotiation, and Japanese logistical strain make the later camp system a major open research field.</p>"},
      {id:"repatriation",title:"Negotiated release and memory",html:"<p>Prisoners leave through armistice and repatriation arrangements rather than victory ceremonies. Medical evacuation, shipping availability, identity verification, disputed criminal cases, and the sequencing of national contingents delay the process.</p><p>Changi becomes a central institution of Siege Commonwealth memory and one of the strongest objections to Japanese narratives of a disciplined southern liberation.</p>"}
    ],
    related:[{href:"shonan-military-administration.html",kicker:"Occupation authority",label:"Shōnan Military Administration"},{href:"siege-commonwealth.html",kicker:"Postwar memory",label:"Siege Commonwealth"}],
    facts:[["Active","1942–1947; final closure sequence open"],["Location","Changi Peninsula, Singapore"],["Facilities","Barracks, Changi Gaol, hospitals, and work camps"],["Prisoners","Commonwealth military personnel and civilian internees"],["Administration","Japanese command with extensive prisoner self-administration"],["Noted incident","Selarang Barracks incident"],["Wider role","Transit point for imperial labor drafts"],["End","Negotiated release after Lisbon, not Allied liberation"]],
    categories:["Changi prisoner system","Prisoners of war","Japanese occupation of Singapore","Commonwealth war memory","1942 establishments"]
  }),

  "singapore-occupation-economy":singaporeOccupationArticle({
    id:"singapore-occupation-economy",title:"Economy of Japanese-occupied Singapore",category:"Economic history",eyebrow:"Rationing, military currency, and black markets · 1942–postwar conversion",infoboxKicker:"Wartime economy of Shōnan",
    lead:"The economy of Japanese-occupied Singapore combined military requisition, rationing, compulsory Japanese-issued currency, controlled trade, subsistence production, and black markets. The conquest severed established shipping and financial networks while assigning food and fuel priority to the Japanese war system. Severe inflation devalued the notes known as banana money, but Japanese victory meant that they required an administered postwar conversion rather than becoming worthless through surrender.",
    canon:"Japanese invasion money denominated in Malayan dollars, the banana-tree note, overissue, inflation, ration cards, food scarcity, military priority, black markets, subsistence cultivation, requisition, and disruption of prewar trade are retained. Because Japan is not defeated in 1945, instant cancellation is excluded; the redemption ratio, successor currency, conversion date, savings treatment, and distributional effects remain open.",
    sections:[
      {id:"rupture",title:"Collapse of the British commercial circuit",html:"<p>The conquest disrupted sterling finance, British insurance, ordinary imports, merchant shipping, and confidence in colonial contracts. Warehouses and port machinery survived unevenly, but the network that supplied them no longer operated under the same money or law.</p><p>The <a href='shonan-military-administration.html'>military administration</a> restored traffic for strategic purposes before it restored an ordinary consumer economy.</p>"},
      {id:"currency",title:"Japanese invasion money",html:"<p>Japan required locally denominated military notes for taxes, wages, purchases, and official accounts. Malayan issues carried identifying letter blocks and used familiar dollars and cents without providing the old currency's institutional backing.</p><p>The ten-dollar note's banana-tree design gave the whole currency its popular name: banana money.</p>"},
      {id:"inflation",title:"Overissue and inflation",html:"<p>Military expenditure, shortages, weak fiscal restraint, counterfeiting fears, and repeated note issue drove prices upward. Smaller denominations ceased to perform useful everyday work as bundles of paper chased scarce food and goods.</p><p>Inflation transferred wealth away from cash savings and fixed wages toward holders of stock, land, foreign money, commodities, and black-market access.</p>"},
      {id:"food",title:"Rationing and hunger",html:"<p>Rice, oil, sugar, salt, fuel, cloth, and other necessities came under ration cards and distribution rules. Military forces received priority while civilian quotas fell below accustomed diets.</p><p>Households substituted tapioca and other crops, cultivated spare land, reused materials, and reorganized meals around availability rather than preference.</p>"},
      {id:"black",title:"Black markets and barter",html:"<p>Official prices could not call forth goods that producers or traders expected to sell at a loss. Smuggling, barter, secret slaughter, stolen military supplies, rural exchange, and payments in jewelry or stable currency filled the gap.</p><p>The same market could preserve a family and expose it to extortion, informers, arrest, or violence.</p>"},
      {id:"labor",title:"Labor, requisition, and corporate entry",html:"<p>Military agencies requisitioned buildings, vehicles, workshops, dock capacity, and labor. Japanese companies entered shipping, warehousing, banking, repair, and resource distribution behind the occupation authority.</p><p>These wartime acquisitions formed part of the corporate infrastructure later inherited by Singapore's role as the southern imperial counting house.</p>"},
      {id:"longwar",title:"A war economy beyond 1945",html:"<p>The absence of Japanese surrender prevents the historical overnight repudiation of occupation notes. It does not cure inflation. Two additional years of war require tighter issue control, new denominations, forced exchange, or monetary reform before normal commercial credit can return.</p><p>Exact policy remains open because the balance among army finance, Tokyo, Singapore merchants, and postwar corporate banks has not been fixed.</p>"},
      {id:"conversion",title:"Post-Lisbon conversion",html:"<p>A civil Singapore cannot become a clearing and insurance center while leaving every wartime balance legally meaningless. The post-Lisbon authorities therefore convert, redeem, consolidate, or replace military notes under a scheduled settlement.</p><p>Whatever formula is chosen creates winners and losers. Recognition of small household balances, treatment of large hoards, debt conversion, and investigation of collaboration become foundational political questions for the city-state.</p>"}
    ],
    related:[{href:"shonan-military-administration.html",kicker:"Governing authority",label:"Shōnan Military Administration"},{href:"greater-east-asia-clearing-yen.html",kicker:"Mature monetary system",label:"Greater East Asia Clearing Yen"}],
    facts:[["Period","1942–post-Lisbon conversion"],["Official wartime currency","Japanese-issued Malayan dollars and cents"],["Popular name","Banana money"],["Price condition","Severe inflation and black-market premiums"],["Distribution","Ration cards and controlled supplies"],["Production response","Subsistence cultivation and substitution"],["1945 cancellation","Absent"],["Postwar settlement","Administered conversion; terms open"]],
    categories:["Economy of Japanese-occupied Singapore","Japanese invasion money","Rationing","Economic history of Singapore","Wartime inflation"]
  }),

  "japanese-twenty-fifth-army":singaporeOccupationArticle({
    id:"japanese-twenty-fifth-army",title:"Japanese Twenty-Fifth Army",category:"Military organizations",eyebrow:"Imperial Japanese Army formation · 1941 onward",infoboxKicker:"Conqueror of Malaya and Singapore",
    lead:"The Japanese Twenty-Fifth Army was the Imperial Japanese Army formation that conquered Malaya and Singapore during the Limited Southern War. Commanded by Lieutenant General Tomoyuki Yamashita, it combined the <a href='japanese-5th-division.html'>5th Division</a>, <a href='japanese-18th-division.html'>18th Division</a>, <a href='japanese-imperial-guards-division.html'>Imperial Guards Division</a>, armor, artillery, engineers, aviation support, transport, and intelligence in a rapid peninsula campaign followed by the Johore Strait assault. Its victory founded the southern imperial order while its troops and security agencies became responsible for captivity, coercion, and mass violence.",
    canon:"Yamashita's command, principal 5th, 18th, and Imperial Guards Divisions, Malayan campaign, Singapore assault, use of mobility and infiltration, and subsequent occupation role are retained. The no-Philippines strategy makes additional Japanese resources available, but exact alternate attachments, reserve strengths, casualties, later transfers, and postwar institutional lineage remain open.",
    sections:[
      {id:"formation",title:"Mission and command",html:"<p>The army was organized to seize British Malaya and Singapore as part of Japan's southern resource strategy. Yamashita received a geographically narrow mission whose success depended upon speed before Britain could reinforce the peninsula or base.</p><p>In this setting the mission sits inside the <a href='imperial-limited-war-directive.html'>Imperial Limited-War Directive</a>, which excludes American possessions and forces.</p>"},
      {id:"forces",title:"Principal formations",html:"<p>The 5th Division, 18th Division, and Imperial Guards Division formed the principal ground components associated with the campaign. Tank, artillery, engineer, transport, signals, reconnaissance, medical, and air-support elements allowed them to operate as more than light jungle infantry.</p><p>Units historically required for the Philippines can reinforce the broader southern system, though no unsupported alternate order of battle is assigned here.</p>"},
      {id:"malaya",title:"Campaign down Malaya",html:"<p>The <a href='malayan-campaign.html'>Malayan Campaign</a> joined landings, movement through southern Thailand, bicycle and motor transport, tank penetrations, air superiority, engineering, and repeated turning movements along the peninsula's restricted roads.</p><p>Jitra, Kampar, Slim River, Gemas, and Muar demonstrated both the army's operational tempo and the defenders' capacity for costly local resistance.</p>"},
      {id:"strait",title:"The Johore Strait assault",html:"<p>The <a href='japanese-landings-singapore.html'>Singapore landings</a> concentrated the 5th and 18th Divisions at Sarimbun and committed the Imperial Guards near Kranji. Artillery, night movement, assault craft, and engineers converted two bridgeheads into an island campaign.</p><p>Kranji showed that even a victorious operation could approach local failure when crossing lanes met prepared fire.</p>"},
      {id:"command",title:"Yamashita's command method",html:"<p>Yamashita demanded momentum and accepted risk, while subordinate commanders translated that demand unevenly. Japanese headquarters used aggressive reconnaissance, deception, psychological pressure, and decentralized local movement to keep the defense reacting.</p><p>Later victory narratives often made one commander the author of a campaign that depended upon staff work, logistics, air power, engineers, intelligence, and failures in Commonwealth command.</p>"},
      {id:"occupation",title:"Army of conquest and occupation",html:"<p>After capitulation, the formation and attached authorities had to feed troops, secure prisoners, reopen ports, police the population, and transfer administrative functions to the <a href='shonan-military-administration.html'>Shōnan military government</a>.</p><p>Operational success did not produce disciplined occupation automatically. Sook Ching, prisoner abuse, requisition, and retaliatory violence became inseparable from the army's historical legacy.</p>"},
      {id:"south",title:"Reorganization across the southern empire",html:"<p>As the Limited Southern War widened, headquarters and formations shifted among Malaya, Singapore, Sumatra, Burma approaches, and other southern commands. Singapore became a strategic base even when the army's operational center moved elsewhere.</p><p>The exact alternate transfer schedule is not fixed because the absence of a Philippine campaign changes reinforcement, garrison, and theater organization.</p>"},
      {id:"legacy",title:"Victory and moral liability",html:"<p>Japanese military history celebrates the Twenty-Fifth Army as proof that concentration and strategic restraint could defeat a larger empire. Commonwealth history remembers the same formation through defeat, captivity, and atrocities.</p><p>Modern Singapore must hold both facts together: the army destroyed British rule and created the geopolitical order in which the city later prospered, but it founded that order through conquest and mass coercion.</p>"}
    ],
    related:[{href:"japanese-landings-singapore.html",kicker:"Culminating assault",label:"Japanese Landings on Singapore"},{href:"shonan-military-administration.html",kicker:"Occupation successor",label:"Shōnan Military Administration"}],
    facts:[["Country","Empire of Japan"],["Branch","Imperial Japanese Army"],["Commander in Malaya","Lt Gen Tomoyuki Yamashita"],["Principal formations","5th, 18th, and Imperial Guards Divisions"],["Campaign","Malaya and Singapore"],["Strategic framework","Limited Southern War"],["American theater","Excluded by directive"],["Alternate detailed order of battle","Open"]],
    categories:["Japanese Twenty-Fifth Army","Imperial Japanese Army","Malayan Campaign","Battle of Singapore","Military organizations"]
  })
});

const fallOfSingaporeOccupation = window.deepArticles["fall-of-singapore"];
if (fallOfSingaporeOccupation) {
  const occupationSection = fallOfSingaporeOccupation.sections && fallOfSingaporeOccupation.sections.find(section => section.id === "occupation");
  if (occupationSection) {
    occupationSection.html = "<p>The <a href='shonan-military-administration.html'>Shōnan military administration</a> converted Singapore from British fleet base into the headquarters and clearing center of the southern empire. Port, shipping, intelligence, military command, and Japanese corporate networks converged there while the <a href='singapore-occupation-economy.html'>wartime economy</a> operated through rationing, requisition, inflation, and compulsory currency.</p><p>The <a href='sook-ching-massacre.html'>Sook Ching massacre</a>, <a href='changi-prisoner-system.html'>Changi captivity</a>, and other coercive systems accompanied the claim that the city had been liberated from European rule.</p>";
  }
  fallOfSingaporeOccupation.related = [
    ...(fallOfSingaporeOccupation.related || []),
    {href:"shonan-military-administration.html",kicker:"Occupation government",label:"Shōnan Military Administration"},
    {href:"sook-ching-massacre.html",kicker:"Mass killing",label:"Sook Ching Massacre"},
    {href:"changi-prisoner-system.html",kicker:"Commonwealth captivity",label:"Changi Prisoner System"}
  ];
}

const singaporeStateOccupation = window.deepArticles["singapore"];
if (singaporeStateOccupation) {
  singaporeStateOccupation.sections = [
    {id:"occupation-history",title:"Conquest, Shōnan, and civil conversion",html:"<p>The <a href='fall-of-singapore.html'>1942 capitulation</a> replaced British rule with the <a href='shonan-military-administration.html'>Shōnan military administration</a>. The occupation began with the <a href='sook-ching-massacre.html'>Sook Ching massacre</a>, confined Commonwealth prisoners through the <a href='changi-prisoner-system.html'>Changi system</a>, and reorganized the port through a coercive <a href='singapore-occupation-economy.html'>wartime economy</a>.</p><p>Lisbon recognized Japanese possession without restoring Britain. A civil charter gradually separated municipal law, nationality, taxation, and commerce from direct military government while preserving Japanese strategic rights; the exact instrument and year remain open.</p>"},
    ...(singaporeStateOccupation.sections || [])
  ];
  singaporeStateOccupation.related = [
    ...(singaporeStateOccupation.related || []),
    {href:"shonan-military-administration.html",kicker:"Wartime predecessor",label:"Shōnan Military Administration"},
    {href:"sook-ching-massacre.html",kicker:"Founding civic wound",label:"Sook Ching Massacre"},
    {href:"singapore-occupation-economy.html",kicker:"Economic predecessor",label:"Occupation Economy"},
    {href:"changi-prisoner-system.html",kicker:"Captivity memory",label:"Changi Prisoner System"}
  ];
}

const limitedSouthernOccupation = window.deepArticles["limited-southern-war"];
if (limitedSouthernOccupation) {
  limitedSouthernOccupation.related = [
    ...(limitedSouthernOccupation.related || []),
    {href:"japanese-twenty-fifth-army.html",kicker:"Principal field army",label:"Japanese Twenty-Fifth Army"},
    {href:"shonan-military-administration.html",kicker:"Occupation system",label:"Shōnan Military Administration"}
  ];
}

const malayanCampaignOccupation = window.deepArticles["malayan-campaign"];
if (malayanCampaignOccupation) {
  malayanCampaignOccupation.related = [
    ...(malayanCampaignOccupation.related || []),
    {href:"japanese-twenty-fifth-army.html",kicker:"Japanese field command",label:"Japanese Twenty-Fifth Army"}
  ];
}
