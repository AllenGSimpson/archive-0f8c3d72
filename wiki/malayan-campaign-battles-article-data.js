window.deepArticles = window.deepArticles || {};

const malayanBattleLocalSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Limited Southern War and Japanese victory"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Malaya and Singapore, 1941–1942"},
  {href:"../transcript.md",label:"Master Transcript — Malayan Campaign and fall of Singapore"}
];

const malayanBattleOfficialSources = {
  "kota-bharu-landings":[
    {href:"https://www.awm.gov.au/visit/events/conference/remembering-1941/stephens",label:"Australian War Memorial — RAAF operations at Kota Bharu"},
    {href:"https://www.raf.mod.uk/what-we-do/our-history/air-historical-branch/second-world-war-campaign-narratives/campaigns-in-the-far-east-vol-ii-malaya-netherlands-east-indies-and-burma/",label:"Royal Air Force Historical Branch — Far East campaign narrative"}
  ],
  "battle-of-jitra":[
    {href:"https://www.awm.gov.au/collection/LIB100041364",label:"Australian War Memorial — official-history map of Jitra"},
    {href:"https://www.raf.mod.uk/what-we-do/our-history/air-historical-branch/second-world-war-campaign-narratives/campaigns-in-the-far-east-vol-ii-malaya-netherlands-east-indies-and-burma/",label:"Royal Air Force Historical Branch — Far East campaign narrative"}
  ],
  "battle-of-kampar":[
    {href:"https://www.fepow.family/Supplement/London_Gazette/Malaya_Command/html/p2s33.htm",label:"Malaya Command dispatch — Battle of Kampar"},
    {href:"https://www.govinfo.gov/content/pkg/GOVPUB-D114-PURL-gpo90095/pdf/GOVPUB-D114-PURL-gpo90095.pdf",label:"U.S. Army chronology — Malaya, December 1941–January 1942"}
  ],
  "battle-of-slim-river":[
    {href:"https://www.moore.army.mil/armor/eARMOR/content/issues/1996/MAY_JUN/ArmorMayJune1996web.pdf",label:"U.S. Army Armor — Slim River armored exploitation study"},
    {href:"https://www.awm.gov.au/collection/LIB100041366",label:"Australian War Memorial — official-history map of Slim River"}
  ],
  "battle-of-gemas":[
    {href:"https://www.awm.gov.au/articles/blog/gemencheh-bridge",label:"Australian War Memorial — Gemencheh Bridge and Gemas"},
    {href:"https://www.awm.gov.au/articles/blog/1942-fall-of-singapore",label:"Australian War Memorial — Malaya and Singapore campaign"}
  ],
  "battle-of-muar":[
    {href:"https://www.dva.gov.au/recognition-and-commemoration/memorials/memorials-asia-pacific/malaysia/muar-river-battle-memorial",label:"Australian Department of Veterans' Affairs — Muar River battle"},
    {href:"https://www.awm.gov.au/collection/C253194",label:"Australian War Memorial — Charles Anderson and the Muar withdrawal"}
  ],
  "parit-sulong-massacre":[
    {href:"https://www.awm.gov.au/articles/blog/perspectives_of_parit_sulong",label:"Australian War Memorial — Parit Sulong massacre"},
    {href:"https://www.awm.gov.au/collection/117517",label:"Australian War Memorial — Parit Sulong battle site"}
  ]
};

const malayanBattleLandscape = {
  src:"assets/diagrams/malayan-campaign-battle-sequence.svg",
  alt:"Schematic route of the Malayan Campaign from Kota Bharu and Jitra south through Kampar, Slim River, Gemas, Muar and Parit Sulong to Singapore",
  caption:"The campaign joined successive defensive positions into one rapid southward retreat; route and distances are schematic"
};

const malayanBattleCommonRelated = [
  {href:"malayan-campaign.html",kicker:"Parent campaign",label:"Malayan Campaign"},
  {href:"limited-southern-war.html",kicker:"Wider conflict",label:"Limited Southern War"},
  {href:"fall-of-singapore.html",kicker:"Campaign conclusion",label:"Fall of Singapore"},
  {href:"malaya.html",kicker:"Postwar state",label:"Federated Kingdom of Malaya"}
];

const malayanBattleArticle = c => ({
  title:c.title,
  category:c.category || "Battles",
  eyebrow:c.eyebrow,
  infoboxKicker:c.infoboxKicker,
  infoboxTitle:c.infoboxTitle || c.title,
  landscape:malayanBattleLandscape,
  lead:c.lead,
  canon:c.canon,
  sections:c.sections,
  related:[...malayanBattleCommonRelated,...c.related],
  sources:[...malayanBattleLocalSources,...malayanBattleOfficialSources[c.id]],
  facts:c.facts,
  categories:c.categories
});

Object.assign(window.deepArticles,{
  "kota-bharu-landings":malayanBattleArticle({
    id:"kota-bharu-landings",title:"Kota Bharu landings",eyebrow:"Malayan Campaign · 8 December 1941",infoboxKicker:"Opening battle of the Malayan Campaign",
    lead:"The Kota Bharu landings were the Japanese amphibious assault on the northeastern coast of British Malaya during the opening hours of the Limited Southern War. Japanese troops established a bridgehead despite resistance by the 8th Indian Infantry Brigade and repeated attacks by Australian Hudson bombers, forcing the abandonment of Kota Bharu airfield and opening the eastern line of advance down the peninsula.",
    canon:"The 8 December 1941 landings, simultaneous use of southern Thai ports, 8th Indian Brigade defense, RAAF Hudson attacks, Japanese bridgehead, loss of the airfield, and southward consequence are established. The campaign excludes attacks upon American possessions. Exact alternate transport losses, unit reinforcement, landing strengths, and casualty totals remain unsettled because formations historically sent toward the Philippines were available elsewhere.",
    sections:[
      {id:"directive",title:"A war bounded away from America",html:"<p>The <a href='imperial-limited-war-directive.html'>Imperial Limited-War Directive</a> authorized attacks upon British and Dutch possessions while excluding the Philippines, Guam, Wake, Pearl Harbor, and deliberate American casualties. Kota Bharu therefore became one of the first actual battlefields of the southern war rather than one front in a Japanese–American conflict.</p>"},
      {id:"approach",title:"Approach to the coast",html:"<p>Convoys approached Kota Bharu while other forces entered through Singora and Pattani in southern Thailand. The eastern landing threatened nearby airfields and communications, while the Thai routes supplied the stronger western drive toward Kedah.</p>"},
      {id:"defense",title:"The coastal defense",html:"<p>Indian troops held prepared beach positions behind wire, obstacles, and field works. Surf, darkness, confused landing waves, and defensive fire imposed real losses, but the defenders lacked the air and mobile reserves required to destroy the bridgehead after troops reached shore.</p>"},
      {id:"air",title:"Hudsons over the invasion fleet",html:"<p>RAAF Lockheed Hudsons from No. 1 Squadron attacked transports and landing craft through anti-aircraft fire. Their strikes damaged the assault and became a central Australian memory of the opening day, but Japanese fighters and follow-on attacks rapidly reduced the local air position.</p>"},
      {id:"airfield",title:"Loss of Kota Bharu airfield",html:"<p>Japanese pressure made the airfield untenable within the first day. Surviving aircraft and ground personnel withdrew toward Kuantan, leaving the defenders without the forward air support upon which the local plan had depended.</p>"},
      {id:"bridgehead",title:"The bridgehead holds",html:"<p>The assault survived its difficult opening and expanded inland. The inability to throw it back demonstrated that prepared coastal defense could delay a landing without restoring theater initiative once airfields and roads were exposed.</p>"},
      {id:"neutrality",title:"American observation",html:"<p>American forces in the Philippines observed the opening campaign but did not enter it. Japanese headquarters therefore gained strategic freedom while remaining under strict instructions to keep operations and navigation away from American jurisdiction.</p>"},
      {id:"legacy",title:"Opening the peninsula",html:"<p>Kota Bharu supplied an eastern bridgehead and accelerated the collapse of the northern air system. The decisive ground thrust still came through Thailand and the west-coast roads, leading directly toward the <a href='battle-of-jitra.html'>Jitra position</a>.</p>"}
    ],
    related:[{href:"battle-of-jitra.html",kicker:"Next northern battle",label:"Battle of Jitra"},{href:"imperial-limited-war-directive.html",kicker:"Authorizing decision",label:"Imperial Limited-War Directive"}],
    facts:[["Date","8 December 1941"],["Location","Kota Bharu, Kelantan"],["Attacker","Imperial Japanese Army"],["Defender","8th Indian Infantry Brigade and supporting air units"],["Air response","RAAF No. 1 Squadron Hudsons"],["American belligerency","None"],["Result","Japanese bridgehead established"],["Immediate consequence","Kota Bharu airfield abandoned"]],
    categories:["Kota Bharu landings","Malayan Campaign","Amphibious operations","British Malaya","1941 battles"]
  }),

  "battle-of-jitra":malayanBattleArticle({
    id:"battle-of-jitra",title:"Battle of Jitra",eyebrow:"Malayan Campaign · 11–13 December 1941",infoboxKicker:"Collapse of the northern defensive line",
    lead:"The Battle of Jitra was the defeat of the <a href='eleventh-indian-infantry-division.html'>11th Indian Infantry Division</a> in northern Kedah during the first week of the Malayan Campaign. A partially prepared defensive position, exhausted units, rain, uncertain communications, Japanese infiltration, and armored pressure produced a premature withdrawal that opened the road toward Penang and central Malaya.",
    canon:"The 11–13 December period, 11th Indian Division defense, <a href='japanese-5th-division.html'>Japanese 5th Division</a> pressure, incomplete position, armor and infiltration, confused withdrawal, and strategic loss of northern Kedah are retained. Exact alternate Japanese reserves and casualty totals remain open; the no-Philippines strategy strengthens the campaign system without requiring every tactical event to differ from the recorded battle.",
    sections:[
      {id:"matador",title:"The abandoned forward move",html:"<p><a href='operation-matador.html'>Operation Matador</a> would have advanced into southern Thailand to deny Japanese landing grounds and road access. Political delay and operational uncertainty left the force neither firmly forward nor fully prepared on the Jitra line; the smaller <a href='operation-krohcol.html'>Krohcol</a> movement began too late to recover the approaches.</p>"},
      {id:"ground",title:"The Jitra position",html:"<p>The defense covered roads, waterways, plantations, villages, and jungle approaches in heavy rain. Field works were incomplete, visibility poor, and communications vulnerable. A line that appeared coherent on a staff map depended upon units that had little time to learn the ground.</p>"},
      {id:"forces",title:"11th Indian Division",html:"<p>British and Indian battalions entered the battle after disrupted movement and air attack. Brigades were spread across several approaches, and reports from forward units often reached headquarters after the local situation had already changed.</p>"},
      {id:"attack",title:"Japanese mobile pressure",html:"<p>Japanese infantry infiltrated between positions while tanks and motorized troops pressed the road corridor. The method combined frontal threat with local turning movements, creating repeated fears that a unit holding its own ground had already been passed elsewhere.</p>"},
      {id:"command",title:"Confusion and the withdrawal order",html:"<p>Fragmentary reports encouraged division headquarters to authorize withdrawal before every defended locality had been overrun. Once vehicles, guns, headquarters, and infantry converged upon the same limited roads, an organized movement became a cascading retreat.</p>"},
      {id:"air",title:"Airfields and air superiority",html:"<p>Japanese attacks and the loss of northern airfields deprived the ground force of reliable cover and reconnaissance. Air superiority did not itself take Jitra, but it punished daylight movement and magnified every command delay.</p>"},
      {id:"result",title:"Loss of northern Kedah",html:"<p>The division withdrew south after severe disorganization and equipment loss. The defeat exposed Penang and forced Malaya Command to seek successive delaying positions rather than a stable northern front.</p>"},
      {id:"memory",title:"The first command controversy",html:"<p>Later Commonwealth histories treated Jitra as a study in unprepared positions, divided authority, and retreat ordered from incomplete information. Japanese accounts made it an early proof that tempo could turn a narrow road network from defensive advantage into a trap.</p>"}
    ],
    related:[{href:"david-murray-lyon.html",kicker:"Commonwealth commander",label:"David Murray-Lyon"},{href:"takuro-matsui.html",kicker:"Japanese divisional commander",label:"Takurō Matsui"},{href:"operation-matador.html",kicker:"Abandoned forward plan",label:"Operation Matador"},{href:"operation-krohcol.html",kicker:"Reduced frontier move",label:"Operation Krohcol"},{href:"third-indian-corps.html",kicker:"Higher headquarters",label:"III Indian Corps"},{href:"kota-bharu-landings.html",kicker:"Opening action",label:"Kota Bharu Landings"},{href:"battle-of-kampar.html",kicker:"Next strong position",label:"Battle of Kampar"},{href:"eleventh-indian-infantry-division.html",kicker:"Defending formation",label:"11th Indian Infantry Division"},{href:"japanese-5th-division.html",kicker:"Attacking formation",label:"Japanese 5th Division"}],
    facts:[["Date","11–13 December 1941"],["Location","Jitra, Kedah"],["Attacker","Japanese 5th Division"],["Defender","11th Indian Infantry Division"],["Terrain","Roads, waterways, plantations, and jungle"],["Operational feature","Infiltration and armored road movement"],["Result","Japanese victory"],["Consequence","Northern Malaya abandoned"]],
    categories:["Battle of Jitra","Malayan Campaign","Indian Army","British Malaya","1941 battles"]
  }),

  "battle-of-kampar":malayanBattleArticle({
    id:"battle-of-kampar",title:"Battle of Kampar",eyebrow:"Malayan Campaign · 30 December 1941–2 January 1942",infoboxKicker:"Commonwealth defensive success in Perak",
    lead:"The Battle of Kampar was the successful Commonwealth defense of a strong position in Perak at the turn of 1942. British and Indian troops used commanding ground, open fields of fire, artillery observation, and prepared infantry positions to stop repeated Japanese assaults. They withdrew only after movement elsewhere threatened the road behind them.",
    canon:"The 30 December–2 January period, strong Kampar position, <a href='eleventh-indian-infantry-division.html'>11th Indian Division</a> elements, repeated Japanese assaults, effective artillery and defensive fire, local Commonwealth success, and withdrawal after a wider turning threat are retained. Exact Japanese losses, alternate reinforcement, and the weight of coastal movement remain open.",
    sections:[
      {id:"retreat",title:"A line chosen during retreat",html:"<p>After Jitra and the loss of northern Malaya, the Commonwealth command needed time to reorganize units, move stores, and prepare the approaches farther south. Kampar offered better ground than most positions along the trunk road.</p>"},
      {id:"position",title:"The strongest position in Malaya",html:"<p>The main defense formed a semicircle around Kampar. A mountain protected one flank, mining ground opened fields of fire, and elevated observation allowed artillery to engage approaches more effectively than in close jungle.</p>"},
      {id:"defenders",title:"British and Indian defense",html:"<p>Reorganized brigade groups occupied the position with infantry, machine guns, mortars, and artillery. Troops who had survived the northern retreat recovered confidence when the ground allowed weapons and command arrangements to function as intended.</p>"},
      {id:"assaults",title:"Repeated Japanese assaults",html:"<p>Japanese forces attacked the principal front and sought routes around it. Direct assaults met prepared fire and failed to reproduce the rapid dislocation achieved at Jitra.</p>"},
      {id:"artillery",title:"Artillery and observation",html:"<p>Forward observers on the heights could see assembly areas and approaches. Artillery broke up attacks and gave infantry a depth of support largely absent from the improvised northern positions.</p>"},
      {id:"outflank",title:"The position turned elsewhere",html:"<p>A strong tactical defense could not secure the entire peninsula. Japanese movement toward the coast and rear communications threatened to cut the trunk road, forcing command to weigh continued local success against encirclement.</p>"},
      {id:"withdrawal",title:"Withdrawal after success",html:"<p>The defenders left Kampar in order rather than waiting to be isolated. The decision preserved formations but surrendered another section of central Malaya and moved the campaign toward the Slim River line.</p>"},
      {id:"legacy",title:"What Kampar proved",html:"<p>Kampar demonstrated that Japanese ground forces could be stopped when Commonwealth units possessed preparation, observation, artillery, and secure flanks. Its lesson was operationally cruel: one strong position could not compensate for the loss of airfields, roads, and theater initiative.</p>"}
    ],
    related:[{href:"battle-of-jitra.html",kicker:"Earlier defeat",label:"Battle of Jitra"},{href:"battle-of-slim-river.html",kicker:"Next decisive action",label:"Battle of Slim River"},{href:"eleventh-indian-infantry-division.html",kicker:"Defending formation",label:"11th Indian Infantry Division"},{href:"japanese-5th-division.html",kicker:"Attacking formation",label:"Japanese 5th Division"}],
    facts:[["Date","30 December 1941–2 January 1942"],["Location","Kampar, Perak"],["Attacker","Japanese 5th Division"],["Defender","11th Indian Division elements"],["Defensive advantage","Prepared ground and artillery observation"],["Tactical result","Japanese assaults checked"],["Operational result","Commonwealth withdrawal"],["Consequence","Retreat toward Slim River"]],
    categories:["Battle of Kampar","Malayan Campaign","Indian Army","British Malaya","1941–1942 battles"]
  }),

  "battle-of-slim-river":malayanBattleArticle({
    id:"battle-of-slim-river",title:"Battle of Slim River",eyebrow:"Malayan Campaign · 7 January 1942",infoboxKicker:"Japanese armored breakthrough in Perak",
    lead:"The Battle of Slim River was the Japanese armored penetration that shattered two brigade positions of the <a href='eleventh-indian-infantry-division.html'>11th Indian Infantry Division</a> along the west-coast road and railway. A compact tank and motorized column passed successive roadblocks, headquarters, gun positions, and transport areas before the defenders understood the depth of the breakthrough, opening the route to Kuala Lumpur.",
    canon:"The 7 January date, 11th Indian Division defense, Japanese tank-led night and morning penetration, defeat of successive brigade positions, major equipment loss, and opening of central Malaya are retained. Exact tank numbers, alternate reserve support, losses, and individual timings remain subject to campaign reconstruction.",
    sections:[
      {id:"line",title:"The road-and-rail corridor",html:"<p>The defensive system ran through a narrow corridor near Trolak and Slim River. Jungle constrained cross-country movement, but the road and railway also offered an attacker a direct route through successive headquarters and support areas if the forward blocks failed.</p>"},
      {id:"depth",title:"Defense in depth",html:"<p>Two brigades occupied positions arranged to absorb infiltration and counterattack along the transport corridor. The plan assumed that warning, communications, obstacles, and anti-tank action would slow any vehicle force before it reached the rear.</p>"},
      {id:"attack",title:"Armored exploitation",html:"<p>Japanese tanks attacked in darkness and rain, broke the first defended localities, and continued south instead of halting to reduce every pocket. Motorized infantry and engineers followed the penetration.</p>"},
      {id:"roadblocks",title:"Successive positions overrun",html:"<p>Some Commonwealth units fought effectively in isolation, but warning did not travel faster than the armored column. Tanks reached brigade headquarters, artillery, medical, and transport areas whose weapons faced the wrong direction or had no time to deploy.</p>"},
      {id:"communications",title:"The warning failure",html:"<p>Cut telephone lines, darkness, scattered reports, and the speed of the penetration deprived rear formations of a common picture. The battle became a chain of local surprises rather than one controlled divisional defense.</p>"},
      {id:"loss",title:"Destruction of the divisional position",html:"<p>The 11th Indian Division lost large numbers of personnel, guns, vehicles, and stores. Survivors withdrew in groups, and formations required substantial reorganization before they could again hold a coherent line.</p>"},
      {id:"capital",title:"The road to Kuala Lumpur",html:"<p>Slim River removed the last immediate barrier before Kuala Lumpur. The city was abandoned as Malaya Command shifted its surviving strength toward Johore and the defense of Singapore.</p>"},
      {id:"study",title:"A classic armored case",html:"<p>Military colleges later studied Slim River as an example of exploitation by a small mobile column through a larger but uncoordinated force. Japanese memory emphasized spirit and tempo; Commonwealth analysis emphasized obstacles, anti-tank deployment, communications, and command depth.</p>"}
    ],
    related:[{href:"takuro-matsui.html",kicker:"Japanese divisional commander",label:"Takurō Matsui"},{href:"battle-of-kampar.html",kicker:"Preceding defense",label:"Battle of Kampar"},{href:"battle-of-gemas.html",kicker:"Australian delaying action",label:"Battle of Gemas"},{href:"eleventh-indian-infantry-division.html",kicker:"Defending formation",label:"11th Indian Infantry Division"},{href:"japanese-5th-division.html",kicker:"Attacking formation",label:"Japanese 5th Division"}],
    facts:[["Date","7 January 1942"],["Location","Trolak and Slim River, Perak"],["Attacker","Japanese 5th Division mobile elements"],["Defender","11th Indian Infantry Division"],["Principal method","Tank-led road penetration"],["Defensive failure","Warning and anti-tank depth"],["Result","Japanese breakthrough"],["Consequence","Route to Kuala Lumpur opened"]],
    categories:["Battle of Slim River","Malayan Campaign","Armored warfare","Indian Army","1942 battles"]
  }),

  "battle-of-gemas":malayanBattleArticle({
    id:"battle-of-gemas",title:"Battle of Gemas",eyebrow:"Malayan Campaign · 14–15 January 1942",infoboxKicker:"Gemencheh Bridge ambush",
    lead:"The Battle of Gemas was the Australian ambush at Gemencheh Bridge and the subsequent fighting east of Gemas. The <a href='eighth-australian-division.html'>2/30th Australian Infantry Battalion</a> allowed Japanese advance elements into a prepared killing ground, opened fire, and demolished the bridge. The action inflicted a sharp tactical reverse but did not stop the Japanese campaign once engineers restored the crossing.",
    canon:"The 14–15 January period, 2/30th Battalion ambush, Gemencheh Bridge demolition, Japanese losses, failed artillery coordination, rapid bridge repair, and continued advance are retained. Exact alternate Japanese casualty totals and the strength of follow-on reserves remain open.",
    sections:[
      {id:"australia",title:"The Australians enter ground combat",html:"<p>The action marked the first substantial Australian Army ground contact with Japanese forces in the campaign. The 2/30th Battalion occupied prepared positions west of Gemas under Lieutenant Colonel Frederick Galleghan.</p>"},
      {id:"ground",title:"The Gemencheh killing ground",html:"<p>The road crossed a small wooden bridge and entered cuttings bordered by steep, vegetation-covered sides. B Company concealed men and Bren guns above and below road level while demolition charges prepared the crossing.</p>"},
      {id:"ambush",title:"The bridge ambush",html:"<p>Advance elements were allowed across before the Australians opened fire and destroyed the span. Surprise, grenades, rifles, and machine guns inflicted concentrated losses during an engagement lasting only minutes.</p>"},
      {id:"artillery",title:"The artillery strike that did not arrive",html:"<p>The plan expected artillery to engage Japanese troops massing behind the broken bridge. Scouts cut telephone lines, and restrictions on radio use left no reliable substitute. The ambush therefore achieved less than the ground arrangement had made possible.</p>"},
      {id:"withdrawal",title:"Withdrawal through the jungle",html:"<p>The ambush party disengaged through difficult ground while Japanese troops sought to close its route. Groups returned separately to the main battalion position around Gemas.</p>"},
      {id:"repair",title:"The repaired crossing",html:"<p>Japanese engineers used local timber and labor to restore the bridge rapidly. Tanks crossed by the following morning, demonstrating that a successful demolition required continued fire or a deeper obstacle plan if it was to delay the campaign for more than hours.</p>"},
      {id:"gemas",title:"Fighting east of the town",html:"<p>Further fighting around Gemas delayed the advance and confirmed that disciplined infantry could punish Japanese columns. It could not restore the wider front after Slim River and the abandonment of Kuala Lumpur.</p>"},
      {id:"memory",title:"A tactical victory inside defeat",html:"<p>Australian memory preserved Gemas as proof that the army had not simply collapsed before Singapore. Japanese histories treated it as a costly obstacle overcome by engineering, local initiative, and refusal to allow one ambush to dictate operational tempo.</p>"}
    ],
    related:[{href:"gordon-bennett.html",kicker:"Australian divisional commander",label:"Gordon Bennett"},{href:"takuro-matsui.html",kicker:"Japanese divisional commander",label:"Takurō Matsui"},{href:"battle-of-slim-river.html",kicker:"Northern breakthrough",label:"Battle of Slim River"},{href:"battle-of-muar.html",kicker:"Wider Johore fighting",label:"Battle of Muar"},{href:"eighth-australian-division.html",kicker:"Defending formation",label:"8th Australian Division"},{href:"japanese-5th-division.html",kicker:"Attacking formation",label:"Japanese 5th Division"}],
    facts:[["Date","14–15 January 1942"],["Location","Gemencheh Bridge and Gemas"],["Attacker","Japanese 5th Division elements"],["Defender","2/30th Australian Infantry Battalion"],["Australian commander","Lt Col Frederick Galleghan"],["Principal action","Bridge ambush and demolition"],["Tactical result","Japanese column checked"],["Operational result","Japanese advance resumed"]],
    categories:["Battle of Gemas","Malayan Campaign","Australian Army","Ambushes","1942 battles"]
  }),

  "battle-of-muar":malayanBattleArticle({
    id:"battle-of-muar",title:"Battle of Muar",eyebrow:"Malayan Campaign · 16–22 January 1942",infoboxKicker:"Last major battle on the Malay Peninsula",
    lead:"The Battle of Muar was the last major battle of the Malayan Campaign before the retreat to Singapore. The <a href='japanese-imperial-guards-division.html'>Japanese Imperial Guards Division</a> broke the underprepared 45th Indian Infantry Brigade near the Muar River, but Australian and Indian troops fought severe actions at Bakri and along the road to Parit Sulong. Lieutenant Colonel Charles Anderson led the trapped force in a fighting withdrawal before ordering the survivors to escape through Japanese lines.",
    canon:"The 16–22 January battle, Imperial Guards advance, 45th Indian Brigade collapse, Australian anti-tank action at Bakri, Anderson's combined column, fighting withdrawal, Parit Sulong roadblock, and escape of walking survivors are retained. Exact strengths, losses, tank counts, and alternate Japanese reserves remain open.",
    sections:[
      {id:"river",title:"The Muar line",html:"<p>The western flank in Johore depended upon crossings, roads, plantations, river mouths, and a recently assembled defense. The 45th Indian Brigade arrived with limited training and little time to understand the ground.</p>"},
      {id:"guards",title:"The Imperial Guards attack",html:"<p>Japanese Guards units crossed and infiltrated around the Muar position, breaking communications and separating local defenses. Air and artillery attack struck brigade headquarters and movement routes.</p>"},
      {id:"bakri",title:"Bakri and the anti-tank action",html:"<p>Australian infantry and 2-pounder anti-tank guns engaged Japanese tanks on the Muar–Bakri road at close range. Burning vehicles blocked the road, and the fighting imposed some of the sharpest Japanese losses of the campaign.</p>"},
      {id:"column",title:"Anderson's combined force",html:"<p>Lieutenant Colonel Charles Anderson assumed command of remnants from the 2/19th and 2/29th Australian battalions and the 45th Indian Brigade. The column carried wounded, limited ammunition, and vehicles through a front whose rear had already become contested.</p>"},
      {id:"withdrawal",title:"Fighting withdrawal",html:"<p>The force fought south toward Parit Sulong, clearing roadblocks and resisting attacks from several directions. Anderson repeatedly reorganized the column as units, wounded, and vehicles became separated.</p>"},
      {id:"bridge",title:"Blocked at Parit Sulong",html:"<p>A Japanese roadblock and bridge position prevented the column from reaching friendly forces. Negotiations for passage of the wounded failed because the Japanese demanded surrender of the entire force.</p>"},
      {id:"escape",title:"Breakout on foot",html:"<p>After further attempts to clear the bridge, Anderson ordered vehicles and heavy weapons destroyed. Men capable of walking dispersed through jungle and enemy positions toward Commonwealth lines; wounded unable to move remained behind.</p>"},
      {id:"result",title:"Johore exposed",html:"<p>The battle delayed the Imperial Guards and preserved a cadre of experienced troops, but Westforce could no longer hold the western line. The remaining formations withdrew toward the Johore Strait and Singapore.</p>"}
    ],
    related:[{href:"takuma-nishimura.html",kicker:"Japanese divisional commander",label:"Takuma Nishimura"},{href:"gordon-bennett.html",kicker:"Australian divisional commander",label:"Gordon Bennett"},{href:"battle-of-gemas.html",kicker:"Parallel delaying action",label:"Battle of Gemas"},{href:"parit-sulong-massacre.html",kicker:"Atrocity after the withdrawal",label:"Parit Sulong Massacre"},{href:"japanese-imperial-guards-division.html",kicker:"Attacking formation",label:"Imperial Guards Division"},{href:"eighth-australian-division.html",kicker:"Australian formation",label:"8th Australian Division"}],
    facts:[["Date","16–22 January 1942"],["Location","Muar, Bakri, and Parit Sulong, Johore"],["Attacker","Japanese Imperial Guards Division"],["Defenders","Australian and Indian formations"],["Commonwealth field commander","Lt Col Charles Anderson"],["Noted action","Bakri anti-tank defense"],["Result","Japanese operational victory"],["Consequence","Final retreat toward Singapore"]],
    categories:["Battle of Muar","Malayan Campaign","Australian Army","Indian Army","1942 battles"]
  }),

  "parit-sulong-massacre":malayanBattleArticle({
    id:"parit-sulong-massacre",title:"Parit Sulong massacre",category:"War crimes",eyebrow:"Malayan Campaign · 22 January 1942",infoboxKicker:"Killing of wounded Commonwealth prisoners",
    lead:"The Parit Sulong massacre was the killing of wounded Australian and Indian prisoners left near the Parit Sulong bridge after the Battle of Muar. Japanese troops denied medical evacuation, held the wounded around the roadblock, and killed them before burning or abandoning the bodies. A small number of survivors later supplied the principal eyewitness testimony.",
    canon:"The 22 January 1942 massacre, location, wounded Australian and Indian victims, failed evacuation, approximately 145 prisoners, three surviving Australians, and later war-crime inquiry are retained. Exact individual responsibility, sequence of orders, total by nationality, and treatment of every missing soldier remain contested.",
    sections:[
      {id:"battle",title:"Wounded after Muar",html:"<p>The fighting withdrawal from Bakri concentrated wounded soldiers in ambulances and trucks. When the combined force could not clear the Parit Sulong bridge, men able to walk were ordered to escape while those who could not move remained.</p>"},
      {id:"custody",title:"Japanese custody",html:"<p>The wounded became prisoners under the control of troops around the roadblock. Requests for passage or medical evacuation had already been tied to surrender of the entire Commonwealth column and were refused.</p>"},
      {id:"killing",title:"The killings",html:"<p>Prisoners were crowded together, denied adequate care, tied or grouped, shot, bayoneted, and burned or left among destroyed vehicles and bodies. The violence followed a week in which the Imperial Guards had suffered unexpectedly severe losses.</p>"},
      {id:"victims",title:"Victims",html:"<p>The usual register identifies approximately 145 Australian and Indian wounded, including about 110 Australians. Precise numbers differ because the retreat, battlefield deaths, missing men, and later identification were never recorded in one complete list.</p>"},
      {id:"survivors",title:"Survivor testimony",html:"<p>Three Australians survived and later described the captivity and killing. Their evidence turned a battlefield disappearance into a documented war crime and made Parit Sulong central to Australian memory of Japanese captivity.</p>"},
      {id:"responsibility",title:"Command responsibility",html:"<p>Postwar proceedings examined the role of Imperial Guards officers and the relationship between local execution and higher command. Surviving testimony established the crime more securely than it established one uncontested chain of orders.</p>"},
      {id:"empire",title:"Memory under a victorious Japan",html:"<p>The absence of Japanese defeat prevented a comprehensive Allied occupation archive and broad public reckoning. Commonwealth museums, veterans, churches, and families preserved the case, while official imperial histories minimized or individualized responsibility.</p>"},
      {id:"legacy",title:"A permanent wound in Commonwealth relations",html:"<p>Parit Sulong remained an obstacle to narratives of a clean Japanese liberation of Asia. It joined Singapore captivity, forced labor, and occupation violence in the moral memory underlying the later armed peace between the Commonwealth and the Co-Prosperity Sphere.</p>"}
    ],
    related:[{href:"takuma-nishimura.html",kicker:"Divisional command responsibility",label:"Takuma Nishimura"},{href:"battle-of-muar.html",kicker:"Preceding battle",label:"Battle of Muar"},{href:"japanese-war-memory.html",kicker:"Contested remembrance",label:"Japanese War Memory"}],
    facts:[["Date","22 January 1942"],["Location","Parit Sulong, Johore"],["Victims","Wounded Australian and Indian prisoners"],["Approximate number","145"],["Australian victims","About 110"],["Known Australian survivors","Three"],["Classification","War crime"],["Command responsibility","Contested"]],
    categories:["Parit Sulong massacre","Japanese war crimes","Malayan Campaign","Australian prisoners of war","1942 massacres"]
  })
});

const malayanCampaignOverview = window.deepArticles["malayan-campaign"];
if (malayanCampaignOverview) {
  malayanCampaignOverview.landscape = malayanBattleLandscape;
  malayanCampaignOverview.related = [
    ...(malayanCampaignOverview.related || []),
    {href:"kota-bharu-landings.html",kicker:"Opening landing",label:"Kota Bharu Landings"},
    {href:"battle-of-jitra.html",kicker:"Northern collapse",label:"Battle of Jitra"},
    {href:"battle-of-kampar.html",kicker:"Defensive success",label:"Battle of Kampar"},
    {href:"battle-of-slim-river.html",kicker:"Armored breakthrough",label:"Battle of Slim River"},
    {href:"battle-of-gemas.html",kicker:"Australian ambush",label:"Battle of Gemas"},
    {href:"battle-of-muar.html",kicker:"Final peninsula battle",label:"Battle of Muar"},
    {href:"parit-sulong-massacre.html",kicker:"War crime",label:"Parit Sulong Massacre"}
  ];
}

const singaporeOverview = window.deepArticles["fall-of-singapore"];
if (singaporeOverview) {
  singaporeOverview.related = [
    ...(singaporeOverview.related || []),
    {href:"battle-of-slim-river.html",kicker:"Decisive central breakthrough",label:"Battle of Slim River"},
    {href:"battle-of-muar.html",kicker:"Last major peninsula battle",label:"Battle of Muar"},
    {href:"parit-sulong-massacre.html",kicker:"Atrocity during the retreat",label:"Parit Sulong Massacre"}
  ];
}

const malayaCountry = window.deepArticles["malaya"];
if (malayaCountry) {
  malayaCountry.related = [
    ...(malayaCountry.related || []),
    {href:"malayan-campaign.html",kicker:"Wartime conquest",label:"Malayan Campaign"},
    {href:"battle-of-jitra.html",kicker:"Northern battle",label:"Battle of Jitra"},
    {href:"battle-of-kampar.html",kicker:"Perak defense",label:"Battle of Kampar"},
    {href:"battle-of-slim-river.html",kicker:"Central breakthrough",label:"Battle of Slim River"},
    {href:"battle-of-muar.html",kicker:"Johore battle",label:"Battle of Muar"}
  ];
}

const singaporeCountry = window.deepArticles["singapore"];
if (singaporeCountry) {
  singaporeCountry.related = [
    ...(singaporeCountry.related || []),
    {href:"fall-of-singapore.html",kicker:"Wartime conquest",label:"Fall of Singapore"},
    {href:"battle-of-muar.html",kicker:"Last peninsula battle",label:"Battle of Muar"},
    {href:"parit-sulong-massacre.html",kicker:"Commonwealth war memory",label:"Parit Sulong Massacre"}
  ];
}
