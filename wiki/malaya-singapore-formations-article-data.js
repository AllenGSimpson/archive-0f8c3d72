window.deepArticles = window.deepArticles || {};

const malayaFormationLocalSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Limited Southern War and Japanese victory"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Malaya, Singapore, and the long war"},
  {href:"../transcript.md",label:"Master Transcript — campaign divergence and postwar settlement"}
];

const malayaFormationOfficialSources = {
  "japanese-5th-division":[
    {href:"https://www.raf.mod.uk/what-we-do/our-history/air-historical-branch/second-world-war-campaign-narratives/campaigns-in-the-far-east-vol-ii-malaya-netherlands-east-indies-and-burma/",label:"Royal Air Force Historical Branch — Far East campaign narrative"},
    {href:"https://www.awm.gov.au/articles/blog/1942-fall-of-singapore",label:"Australian War Memorial — Japanese campaign and Singapore assault"}
  ],
  "japanese-18th-division":[
    {href:"https://www.raf.mod.uk/what-we-do/our-history/air-historical-branch/second-world-war-campaign-narratives/campaigns-in-the-far-east-vol-ii-malaya-netherlands-east-indies-and-burma/",label:"Royal Air Force Historical Branch — Far East campaign narrative"},
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/Battle-at-Pasir-Panjang",label:"Singapore National Heritage Board — Japanese attack at Pasir Panjang"}
  ],
  "japanese-imperial-guards-division":[
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/Battle-at-Kranji-Beach",label:"Singapore National Heritage Board — Imperial Guards crossing at Kranji"},
    {href:"https://www.dva.gov.au/recognition-and-commemoration/memorials/memorials-asia-pacific/malaysia/muar-river-battle-memorial",label:"Australian Department of Veterans' Affairs — Muar River battle"}
  ],
  "eleventh-indian-infantry-division":[
    {href:"https://www.fepow.family/Supplement/London_Gazette/Malaya_Command/html/p2s33.htm",label:"Malaya Command dispatch — 11th Indian Division and Kampar"},
    {href:"https://www.awm.gov.au/collection/LIB100041366",label:"Australian War Memorial — official-history map of Slim River"}
  ],
  "eighth-australian-division":[
    {href:"https://www.awm.gov.au/collection/C2675580",label:"Australian War Memorial — official record, Operations of 8th Australian Division in Malaya"},
    {href:"https://www.awm.gov.au/articles/blog/fall-of-singapore",label:"Australian War Memorial — 8th Division in Malaya, Singapore, and captivity"}
  ],
  "malay-regiment":[
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/Battle-at-Pasir-Panjang",label:"Singapore National Heritage Board — Malay Regiment at Pasir Panjang"},
    {href:"https://www.roots.gov.sg/stories-landing/stories/lieutenant-adnan-and-the-battle-of-bukit-chandu/story",label:"Singapore National Heritage Board — Adnan Saidi and the regiment's foundation"}
  ]
};

const malayaFormationLandscape = {
  src:"assets/diagrams/malaya-singapore-order-of-battle.svg",
  alt:"Order-of-battle diagram linking the Japanese 5th, 18th and Imperial Guards Divisions with the Indian 11th Division, Australian 8th Division and Malay Regiment across Malaya and Singapore",
  caption:"The campaign opposed three principal Japanese divisions to a multinational Commonwealth force whose formations entered battle at different times and strengths"
};

const malayaFormationCommonRelated = [
  {href:"malayan-campaign.html",kicker:"Peninsula campaign",label:"Malayan Campaign"},
  {href:"fall-of-singapore.html",kicker:"Campaign conclusion",label:"Fall of Singapore"},
  {href:"japanese-twenty-fifth-army.html",kicker:"Japanese field command",label:"Japanese Twenty-Fifth Army"},
  {href:"limited-southern-war.html",kicker:"Wider conflict",label:"Limited Southern War"}
];

const malayaFormationArticle = c => ({
  title:c.title,
  category:"Military formations",
  eyebrow:c.eyebrow,
  infoboxKicker:c.infoboxKicker,
  infoboxTitle:c.infoboxTitle || c.title,
  landscape:malayaFormationLandscape,
  lead:c.lead,
  canon:c.canon,
  sections:c.sections,
  related:[...malayaFormationCommonRelated,...c.related],
  sources:[...malayaFormationLocalSources,...malayaFormationOfficialSources[c.id]],
  facts:c.facts,
  categories:c.categories
});

Object.assign(window.deepArticles,{
  "japanese-5th-division":malayaFormationArticle({
    id:"japanese-5th-division",title:"Japanese 5th Division",eyebrow:"Imperial Japanese Army infantry division · Malaya and Singapore",infoboxKicker:"Principal mobile formation of the 25th Army",
    lead:"The Japanese 5th Division was one of the principal formations of the Twenty-Fifth Army during the conquest of Malaya and Singapore. A veteran regular division under Lieutenant General <a href='takuro-matsui.html'>Takurō Matsui</a>, it supplied infantry, artillery, engineers, reconnaissance, and mobile elements to the western drive through Kedah and Perak, the battles in Johore, and the assault upon Singapore Island. Its operational identity became closely associated with speed along roads, aggressive exploitation, and repeated attacks before Commonwealth commands could restore a stable front.",
    canon:"The division's prewar regular lineage, China service, Matsui's command, central role at Jitra, Kampar, Slim River, Gemas, Johore, Sarimbun, and Bukit Timah are retained as the historical baseline. Exact alternate reinforcements, losses, regimental attachments, occupation duties, and transfers after Singapore remain open because the no-Philippines strategy changes theater resources.",
    sections:[
      {id:"lineage",title:"Regular-army lineage",html:"<p>The 5th Division belonged to the old regional division system of the Imperial Japanese Army and carried institutional experience from earlier continental wars. By 1941 its officers and cadres had absorbed years of operations in China.</p><p>That lineage did not make every soldier a veteran, but it supplied staff habits, artillery practice, engineer experience, and confidence in sustained field movement.</p>"},
      {id:"organization",title:"Organization for the southern campaign",html:"<p>The division combined infantry regiments with artillery, engineers, reconnaissance, signals, transport, medical units, and attached armor or specialized elements. The campaign often broke these into columns able to use one road while neighboring detachments turned through estates or jungle tracks.</p><p>Bicycle and motor movement supplemented marching without turning the division into a fully motorized European-style formation.</p>"},
      {id:"north",title:"Jitra and northern Malaya",html:"<p>The division's pressure helped break the <a href='battle-of-jitra.html'>Jitra position</a>. Tanks, infantry infiltration, rain, air attack, and uncertain Commonwealth reports combined to turn an incomplete line into a disordered withdrawal.</p><p>Japanese accounts made the action a model of tempo; later analysis gives equal weight to the defender's poor preparation and command arrangements.</p>"},
      {id:"perak",title:"Kampar and Slim River",html:"<p>At <a href='battle-of-kampar.html'>Kampar</a>, prepared ground and artillery checked repeated Japanese assaults. The division could not reproduce Jitra against a position with observation and secure local flanks.</p><p>The subsequent <a href='battle-of-slim-river.html'>Slim River</a> penetration restored operational momentum when tank-led elements passed successive positions before warning reached the divisional rear.</p>"},
      {id:"johore",title:"Gemas and the Johore advance",html:"<p>At <a href='battle-of-gemas.html'>Gemas</a>, the 2/30th Australian Battalion ambushed advance elements at Gemencheh Bridge. Japanese engineers restored the crossing, and the division continued through Johore despite costly local resistance.</p><p>The contrast between ambush losses and resumed movement became characteristic of the campaign.</p>"},
      {id:"island",title:"Sarimbun and Bukit Timah",html:"<p>The division crossed the Johore Strait in the principal northwestern assault around <a href='battle-of-sarimbun-beach.html'>Sarimbun Beach</a>. Once the lodgment widened, its columns advanced through Choa Chu Kang and Bukit Panjang toward the island's center.</p><p>At the <a href='battle-of-bukit-timah.html'>Battle of Bukit Timah</a>, it converged with the 18th Division upon roads, depots, high ground, and water catchments.</p>"},
      {id:"method",title:"Mobility, engineering, and limits",html:"<p>The division's success depended upon road reconnaissance, rapid bridge repair, local requisition, engineers, armor, air support, and commanders willing to continue past isolated positions. “Jungle warfare” relied on a logistical and combined-arms system extending far beyond infantry movement through vegetation.</p><p>Kampar and Gemas showed that prepared fire could punish the system even when it could not reverse the campaign.</p>"},
      {id:"after",title:"After Singapore",html:"<p>Victory made the division available for occupation, Burma, China, the East Indies, or theater reserve. The absence of a Philippine campaign changes every historical transfer calculation.</p><p>The archive retains the formation's Malaya–Singapore record while leaving its exact later assignments, losses, demobilization, and postwar lineage open.</p>"}
    ],
    related:[{href:"takuro-matsui.html",kicker:"Divisional commander",label:"Takurō Matsui"},{href:"battle-of-slim-river.html",kicker:"Defining breakthrough",label:"Battle of Slim River"},{href:"battle-of-bukit-timah.html",kicker:"Island culmination",label:"Battle of Bukit Timah"}],
    facts:[["Country","Empire of Japan"],["Branch","Imperial Japanese Army"],["Type","Infantry division with attached mobile elements"],["Commander","Lt Gen Takuro Matsui"],["Higher command","Twenty-Fifth Army"],["Principal theater","Malaya and Singapore"],["Defining actions","Jitra, Slim River, Gemas, Sarimbun, and Bukit Timah"],["Later alternate assignments","Open"]],
    categories:["Japanese 5th Division","Imperial Japanese Army divisions","Malayan Campaign","Battle of Singapore","Military formations"]
  }),

  "japanese-18th-division":malayaFormationArticle({
    id:"japanese-18th-division",title:"Japanese 18th Division",eyebrow:"Imperial Japanese Army infantry division · China, Malaya, and Singapore",infoboxKicker:"Veteran assault formation of the 25th Army",
    lead:"The Japanese 18th Division was a veteran infantry formation that supplied the Kota Bharu assault detachment, reinforced the advance down Malaya, crossed to Singapore at Sarimbun, and fought through Bukit Timah to Pasir Panjang. Commanded by Lieutenant General <a href='renya-mutaguchi.html'>Renya Mutaguchi</a>, it brought extensive China-war experience into the southern campaign and became the principal Japanese formation associated with the final southwestern ridge battles.",
    canon:"The division's early twentieth-century lineage, reconstitution for the China war, Mutaguchi's command, Kota Bharu detachment, Malayan reinforcement, Sarimbun crossing, Bukit Timah advance, and attack at Pasir Panjang are retained. Exact alternate landing strength, regimental distribution, casualties, Burma transfer, and later history remain open.",
    sections:[
      {id:"lineage",title:"Formation, dissolution, and return",html:"<p>The 18th Division originated in the Imperial Army's prewar expansion, was dissolved during interwar retrenchment, and was re-formed for the war in China. Its renewed cadres learned large-scale occupation, river crossing, marching, and assault under difficult supply conditions.</p><p>That history gave the division a different institutional path from continuously retained regular formations such as the 5th.</p>"},
      {id:"china",title:"Experience in China",html:"<p>Operations in China familiarized officers with dispersed columns, harsh requisition, engineer improvisation, and fighting across cities, fields, rivers, and broken communications. It also embedded coercive occupation practices that followed the army south.</p><p>Campaign competence and occupation violence were products of the same institutional experience.</p>"},
      {id:"kota",title:"The Kota Bharu detachment",html:"<p>Elements organized as the Takumi Detachment conducted the difficult <a href='kota-bharu-landings.html'>Kota Bharu landings</a>. Indian beach defenses and Australian Hudson attacks imposed losses before the Japanese bridgehead held.</p><p>The action opened an eastern route and threatened airfields while the stronger western drive moved through Thailand.</p>"},
      {id:"malaya",title:"Reinforcement of the peninsula campaign",html:"<p>As more of the division entered the theater, it supported the central and southern advance and relieved pressure upon units that had carried the opening drive. Additional strength mattered because Japanese tempo consumed vehicles, bridging stores, ammunition, and fit infantry even during victories.</p><p>The no-Philippines strategy can improve reserve availability without fixing every alternate attachment.</p>"},
      {id:"sarimbun",title:"Crossing at Sarimbun",html:"<p>The division joined the principal night crossing against the Australian northwestern coast at <a href='battle-of-sarimbun-beach.html'>Sarimbun</a>. Boats, artillery, engineers, and repeated infantry waves exploited the gaps between dispersed defensive posts.</p><p>Once ashore, units moved toward Jurong and the roads leading to Bukit Timah.</p>"},
      {id:"central",title:"Bukit Timah",html:"<p>The 18th Division advanced from the Jurong direction while the 5th Division approached through Bukit Panjang. Their convergence at <a href='battle-of-bukit-timah.html'>Bukit Timah</a> broke the central Commonwealth position.</p><p>The formation then turned toward the shortened southern and city perimeters rather than halting after the capture of depots and roads.</p>"},
      {id:"pasir",title:"Pasir Panjang and Bukit Chandu",html:"<p>Elements including the 56th Infantry Regiment attacked the <a href='battle-of-pasir-panjang.html'>Pasir Panjang ridge</a>. The <a href='malay-regiment.html'>Malay Regiment</a> and supporting units resisted through artillery, infantry assault, close fighting, and withdrawal toward Bukit Chandu.</p><p>The victory opened the approach to Alexandra and tied the division's name to both a hard-fought battle and the hospital atrocity that followed nearby.</p>"},
      {id:"after",title:"A later history altered by victory",html:"<p>Historically the division's post-Singapore path became entangled with Burma and eventual Japanese defeat. In this setting the southern perimeter is shorter, American forces remain outside the war, and Japan retains strategic initiative.</p><p>Later transfers, command changes, occupation tasks, and institutional survival are consequently treated as open rather than copied from the defeated-imperial record.</p>"}
    ],
    related:[{href:"renya-mutaguchi.html",kicker:"Divisional commander",label:"Renya Mutaguchi"},{href:"kota-bharu-landings.html",kicker:"Opening detachment",label:"Kota Bharu Landings"},{href:"battle-of-pasir-panjang.html",kicker:"Final ridge battle",label:"Battle of Pasir Panjang"}],
    facts:[["Country","Empire of Japan"],["Branch","Imperial Japanese Army"],["Type","Infantry division"],["Commander","Lt Gen Renya Mutaguchi"],["Higher command","Twenty-Fifth Army"],["Opening element","Takumi Detachment at Kota Bharu"],["Singapore actions","Sarimbun, Bukit Timah, and Pasir Panjang"],["Later alternate assignments","Open"]],
    categories:["Japanese 18th Division","Imperial Japanese Army divisions","Kota Bharu landings","Battle of Singapore","Military formations"]
  }),

  "japanese-imperial-guards-division":malayaFormationArticle({
    id:"japanese-imperial-guards-division",title:"Japanese Imperial Guards Division",eyebrow:"Imperial Japanese Army guard formation · Malaya and Singapore",infoboxKicker:"Imperial household formation in the southern campaign",
    lead:"The Japanese Imperial Guards Division was the elite-status formation committed to the Malayan Campaign under Lieutenant General <a href='takuma-nishimura.html'>Takuma Nishimura</a>. It advanced through the southern peninsula, broke the underprepared Indian position at Muar, fought Australian and Indian troops around Bakri and Parit Sulong, and then attempted the costly crossing at Kranji. Prestige did not prevent tactical crisis: the division's assault at Kranji came close to withdrawal before Commonwealth forces abandoned the coast.",
    canon:"The division's imperial guard lineage, Nishimura's command, southern Malaya role, Muar and Bakri fighting, Parit Sulong context, Kranji crossing, heavy local losses, and command friction are retained. Exact alternate strength, casualty totals, culpability of individual subunits, later reorganization, and postwar guard status remain open.",
    sections:[
      {id:"guard",title:"Imperial guard lineage",html:"<p>The formation derived prestige from its association with the emperor and the old Tokyo guard establishment. Its symbolic rank encouraged expectations of discipline, loyalty, and battlefield distinction.</p><p>Guard status did not create immunity from ordinary limitations of training, command, fire, transport, or confused terrain.</p>"},
      {id:"south",title:"Commitment to the southern campaign",html:"<p>The division entered the campaign behind or beside formations driving through northern Malaya. Its later concentration in Johore allowed the Twenty-Fifth Army to apply a relatively fresh formation against the peninsula's western defenses.</p><p>Relations between Nishimura and Yamashita carried professional rivalry and disputes over orders that later histories interpreted through the lens of victory.</p>"},
      {id:"muar",title:"Muar and the 45th Indian Brigade",html:"<p>At the <a href='battle-of-muar.html'>Battle of Muar</a>, Guards units crossed, infiltrated, and dislocated the recently arrived 45th Indian Brigade. The initial success opened the road toward Bakri but did not eliminate organized resistance.</p><p>Australian and Indian survivors formed a combined column that fought toward Parit Sulong.</p>"},
      {id:"bakri",title:"Bakri and anti-tank resistance",html:"<p>Australian 2-pounder guns and infantry destroyed Japanese tanks at close range around Bakri. Roadblocks, plantations, villages, and burning vehicles turned the pursuit into severe local fighting.</p><p>The losses contradicted any claim that guard prestige or campaign momentum made the division tactically invulnerable.</p>"},
      {id:"parit",title:"Parit Sulong",html:"<p>The division's operational area and blocking positions formed the context for the <a href='parit-sulong-massacre.html'>Parit Sulong massacre</a>, in which wounded Australian and Indian prisoners were killed after the trapped column escaped on foot.</p><p>The exact chain of orders remains disputed, but the atrocity is inseparable from the Guards' campaign legacy.</p>"},
      {id:"kranji",title:"The Kranji crossing crisis",html:"<p>At the <a href='battle-of-kranji.html'>Battle of Kranji</a>, boats and landing troops met Australian and <a href='dalforce.html'>Dalforce</a> fire while burning fuel spread across parts of the water and shore. Nishimura considered or requested withdrawal under the pressure.</p><p>The Commonwealth evacuation of defended coastline gave the division a beachhead it had not won cleanly through its first assault.</p>"},
      {id:"command",title:"Nishimura, Yamashita, and victory memory",html:"<p>Later Japanese histories debated whether friction between army and division headquarters reflected justified caution, insubordination, or the ordinary uncertainty of a night crossing. Victory allowed the argument to remain professional rather than judicial.</p><p>Commonwealth accounts made Kranji an example of local success lost through higher command failure.</p>"},
      {id:"after",title:"From guard formation to imperial institution",html:"<p>After Singapore the division could supply occupation troops, theater reserve, or formations for Burma and the East Indies. Continued Japanese victory also preserves the political question of what an imperial guard division should become in a modernized postwar army.</p><p>The final reorganization, honors, command succession, and legal relationship to later guard forces remain open.</p>"}
    ],
    related:[{href:"takuma-nishimura.html",kicker:"Divisional commander",label:"Takuma Nishimura"},{href:"battle-of-muar.html",kicker:"Peninsula battle",label:"Battle of Muar"},{href:"battle-of-kranji.html",kicker:"Crossing crisis",label:"Battle of Kranji"}],
    facts:[["Country","Empire of Japan"],["Branch","Imperial Japanese Army"],["Type","Guard infantry division"],["Commander","Lt Gen Takuma Nishimura"],["Higher command","Twenty-Fifth Army"],["Principal peninsula action","Muar–Bakri–Parit Sulong"],["Singapore action","Kranji crossing"],["Postwar guard lineage","Open"]],
    categories:["Japanese Imperial Guards Division","Imperial Japanese Army divisions","Battle of Muar","Battle of Kranji","Military formations"]
  }),

  "eleventh-indian-infantry-division":malayaFormationArticle({
    id:"eleventh-indian-infantry-division",title:"11th Indian Infantry Division",eyebrow:"British Indian Army formation · Malaya, 1941–1942",infoboxKicker:"Northern and central Malaya field division",
    lead:"The 11th Indian Infantry Division was the principal Commonwealth ground formation in northern and central Malaya during the opening campaign. Raised during wartime expansion and committed before its brigades, communications, transport, and combined-arms training were fully mature, it suffered severe defeats at Jitra and Slim River but also conducted the strongest early defensive battle at Kampar. Its record became a case study in the difference between local courage and divisional preparedness.",
    canon:"The division's wartime formation, <a href='david-murray-lyon.html'>David Murray-Lyon's</a> command during the opening, multinational British Indian Army composition, Jitra defeat, Kampar defense, Slim River destruction, reorganization, and Singapore captivity are retained. Exact alternate brigade composition after January, replacement flow, casualty totals, commander changes, and post-Lisbon institutional continuity remain open.",
    sections:[
      {id:"raising",title:"A wartime division",html:"<p>The division emerged from the rapid expansion of the British Indian Army rather than the long preparation of a settled prewar formation. Brigades brought different regimental traditions, training levels, languages, equipment, and recent movements.</p><p>Divisional headquarters had to create common communications and operational practice while already assigned to defend Malaya.</p>"},
      {id:"composition",title:"Indian and British battalions",html:"<p>Indian infantry battalions served alongside British units, artillery, engineers, signals, medical, transport, and administrative services. Colonial labels often concealed the dependence of the force upon Indian junior leaders, clerks, drivers, craftsmen, and specialists.</p><p>Shortages of modern anti-tank weapons, vehicles, radios, air cover, and training in mobile withdrawal weakened the whole formation.</p>"},
      {id:"jitra",title:"The Jitra defeat",html:"<p>The division occupied the incomplete <a href='battle-of-jitra.html'>Jitra position</a> after political delay had left Operation Matador unexecuted. Rain, disrupted movement, infiltration, tanks, and fragmentary reports produced an early withdrawal order.</p><p>Once guns, headquarters, transport, and infantry crowded the same roads, planned retirement became divisional disorganization.</p>"},
      {id:"kampar",title:"Recovery at Kampar",html:"<p>At <a href='battle-of-kampar.html'>Kampar</a>, division elements used elevated observation, open fields of fire, artillery, and prepared positions to stop repeated Japanese assaults. Troops who had survived Jitra demonstrated that the formation could fight effectively under coherent conditions.</p><p>A threat to the road behind the position forced withdrawal despite tactical success.</p>"},
      {id:"slim",title:"Destruction at Slim River",html:"<p>At <a href='battle-of-slim-river.html'>Slim River</a>, a tank-led Japanese column passed successive roadblocks, headquarters, gun lines, and transport areas before warning moved through the division. Two brigade systems were shattered in one penetration.</p><p>Losses in guns, vehicles, staff organization, and experienced personnel mattered as much as the number of men missing.</p>"},
      {id:"reorganization",title:"Reorganization during retreat",html:"<p>Survivors were grouped, reassigned, reinforced, or absorbed into composite commands as the campaign moved through Johore and onto Singapore. The name of the division persisted more clearly than the order of battle with which it had entered Jitra.</p><p>Exact alternate reconstruction is left open because Japanese reinforcement and Commonwealth loss both differ at the margins.</p>"},
      {id:"captivity",title:"Capitulation and captivity",html:"<p>Personnel remaining on Singapore entered Japanese custody after capitulation. Officers and soldiers were separated by camp, labor need, nationality, health, and later transport across the southern empire.</p><p>The extension of the war to 1947 lengthened captivity and made the post-1945 strength of any coherent divisional organization uncertain.</p>"},
      {id:"memory",title:"An Indian Army memory",html:"<p>British accounts often used the division to explain command failure, while regimental histories preserved local actions and losses. Indian memory also asks why rapidly expanded colonial formations were committed without adequate air, armor, communications, or political authority.</p><p>Kampar prevents the division's history from being reduced to collapse; Jitra and Slim River prevent courage from substituting for institutional preparation.</p>"}
    ],
    related:[{href:"david-murray-lyon.html",kicker:"Opening commander",label:"David Murray-Lyon"},{href:"battle-of-jitra.html",kicker:"Opening defeat",label:"Battle of Jitra"},{href:"battle-of-kampar.html",kicker:"Defensive recovery",label:"Battle of Kampar"}],
    facts:[["Country","British India / British Commonwealth"],["Branch","British Indian Army"],["Type","Infantry division"],["Opening commander","Maj Gen David Murray-Lyon"],["Principal theater","Northern and central Malaya"],["Major actions","Jitra, Kampar, and Slim River"],["Campaign result","Formation shattered and reorganized"],["Final wartime fate","Capitulation and Japanese captivity"]],
    categories:["11th Indian Infantry Division","British Indian Army divisions","Battle of Jitra","Battle of Slim River","Military formations"]
  }),

  "eighth-australian-division":malayaFormationArticle({
    id:"eighth-australian-division",title:"8th Australian Division",eyebrow:"Second Australian Imperial Force formation · Malaya and Singapore",infoboxKicker:"Australian field formation of the Singapore campaign",
    lead:"The 8th Australian Division was the principal Australian Army formation committed to Malaya and Singapore. Raised for the Second Australian Imperial Force under Major General <a href='gordon-bennett.html'>Gordon Bennett</a>, it deployed the 22nd and 27th Brigades to Malaya while other elements were dispersed across northern Australia and island garrisons. The division fought at Gemas, Muar, Sarimbun, Kranji, and Bukit Timah before most of its Malayan force entered Japanese captivity.",
    canon:"The division's 1940 formation, Bennett's command, 22nd and 27th Brigade deployment, dispersal of the 23rd Brigade, Gemas and Muar actions, northwestern Singapore defense, severe losses, command controversy, and captivity are retained. Exact alternate island detachments, casualty totals, surrender strength, Bennett's route, and post-1947 reconstitution remain open.",
    sections:[
      {id:"raising",title:"Formation in the Second AIF",html:"<p>Australia raised the 8th Division as part of its wartime expeditionary army. Headquarters, brigades, artillery, engineers, signals, medical, supply, and service units developed while government debated whether the greatest danger lay in Europe, the Middle East, or Asia.</p><p>The division never concentrated as a complete formation in one theater before the Japanese offensive.</p>"},
      {id:"deployment",title:"A division dispersed",html:"<p>The 22nd and 27th Brigades served in Malaya with divisional troops. The 23rd Brigade and other elements were distributed among northern and island garrisons whose exact setting deployment follows the Limited Southern War rather than an American–Japanese Pacific war.</p><p>Dispersal weakened Bennett's ability to use the division as one operational reserve.</p>"},
      {id:"johore",title:"First combat in Johore",html:"<p>Australian ground troops entered major combat at <a href='battle-of-gemas.html'>Gemas</a>, where the 2/30th Battalion ambushed a Japanese column at Gemencheh Bridge. The action demonstrated careful preparation and fire discipline.</p><p>Rapid bridge repair and movement elsewhere prevented the local success from stopping the campaign.</p>"},
      {id:"muar",title:"Muar, Bakri, and Parit Sulong",html:"<p>Australian battalions and anti-tank guns joined Indian troops in the <a href='battle-of-muar.html'>Muar battle</a>. Lieutenant Colonel Charles Anderson led the trapped combined force from Bakri toward Parit Sulong.</p><p>Walking survivors escaped after the roadblock could not be cleared; wounded left behind were killed in the <a href='parit-sulong-massacre.html'>Parit Sulong massacre</a>.</p>"},
      {id:"beaches",title:"The northwestern island sectors",html:"<p>The depleted 22nd Brigade held the broad coast around <a href='battle-of-sarimbun-beach.html'>Sarimbun</a>. The 27th Brigade and <a href='dalforce.html'>Dalforce</a> defended the Kranji sector, where the Imperial Guards crossing suffered severe disruption.</p><p>Local withdrawals and incomplete orders fractured the Australian front before a stable inland line formed.</p>"},
      {id:"city",title:"Bukit Timah and the final perimeter",html:"<p>Australian units counterattacked toward the Jurong–Kranji line and fought around <a href='battle-of-bukit-timah.html'>Bukit Timah</a>. Losses, separated battalions, limited artillery, air attack, and command uncertainty reduced their ability to restore the island defense.</p><p>Survivors entered the final perimeter around the city before capitulation.</p>"},
      {id:"captivity",title:"The division in captivity",html:"<p>Approximately fifteen thousand members of the historical division force became prisoners at Singapore; exact setting strength remains open. Many passed through the <a href='changi-prisoner-system.html'>Changi system</a> into work parties and labor projects.</p><p>Because Japan does not surrender in 1945, captivity continues until negotiated release after Lisbon and becomes still more central to divisional identity.</p>"},
      {id:"legacy",title:"Military defeat and national consequence",html:"<p>The division's destruction ended Australian confidence that British imperial planning alone could secure the country's approaches. Gemas, Bakri, Sarimbun, and captivity became arguments for industrial mobilization, national command, and heavier Commonwealth burden-sharing.</p><p>Later memory distinguishes the courage of units from the strategic and command system that placed them in an increasingly hopeless position.</p>"}
    ],
    related:[{href:"gordon-bennett.html",kicker:"Divisional commander",label:"Gordon Bennett"},{href:"battle-of-gemas.html",kicker:"First major ground action",label:"Battle of Gemas"},{href:"changi-prisoner-system.html",kicker:"Captivity system",label:"Changi Prisoner System"}],
    facts:[["Country","Commonwealth of Australia"],["Branch","Australian Army / Second AIF"],["Type","Infantry division"],["Commander","Maj Gen Gordon Bennett"],["Malaya brigades","22nd and 27th Brigades"],["Dispersed brigade","23rd Brigade"],["Major actions","Gemas, Muar, Sarimbun, Kranji, and Bukit Timah"],["Fate","Defeat and Japanese captivity"]],
    categories:["8th Australian Division","Australian Army divisions","Malayan Campaign","Battle of Singapore","Military formations"]
  }),

  "malay-regiment":malayaFormationArticle({
    id:"malay-regiment",title:"Malay Regiment",eyebrow:"Malay infantry formation · 1933–1942 wartime lineage",infoboxKicker:"Local regular force of British Malaya",
    lead:"The Malay Regiment was the locally recruited regular infantry formation whose 1st and 2nd Battalions defended Singapore during the final campaign. Created as an experimental Malay company in 1933 and expanded before the war, it combined Malay other ranks and officers with British command elements. Its stand along Pasir Panjang Ridge and at Bukit Chandu, especially the death of Lieutenant <a href='adnan-saidi.html'>Adnan Saidi</a>, became the principal military foundation myth shared by postwar Malaya and Singapore.",
    canon:"The 1933 experimental company, selective early recruitment, expansion into battalions, British and Malay officer structure, approximately 1,400 wartime personnel, Pasir Panjang defense, 159 recorded regimental deaths in the historical battle, Adnan Saidi's final stand, and disarmament after surrender are retained. Exact postwar legal continuity into protected Malaya remains open.",
    sections:[
      {id:"experiment",title:"The 1933 experimental company",html:"<p>The regiment began with a small experimental company intended to test recruitment of Malay regular soldiers. About one thousand candidates sought the first places, and only twenty-five were selected.</p><p>The narrow beginning created a culture of competitive entry, drill, physical standards, and institutional pride.</p>"},
      {id:"growth",title:"From company to battalions",html:"<p>The company expanded as training cadres and confidence grew. By the eve of the Japanese campaign, the regiment fielded two battalions within the broader Malaya command structure.</p><p>Malay officers increasingly held junior command while British officers remained prominent in senior posts and specialist administration.</p>"},
      {id:"identity",title:"Service, monarchy, and colonial command",html:"<p>The regiment offered paid professional service and a specifically Malay military institution within British rule. Its identity connected local society, Malay rulers, martial prestige, and imperial command without resolving the political contradiction among them.</p><p>Japanese conquest later allowed every successor tradition to claim a different meaning from the same service.</p>"},
      {id:"singapore",title:"Defense of Singapore",html:"<p>The battalions entered the island defense within brigade groupings that also contained British and Indian units. As the perimeter contracted, they occupied the southwestern approaches protecting depots, roads, and the city.</p><p>Their local knowledge did not offset Japanese control of air, artillery, initiative, and the central road system.</p>"},
      {id:"pasir",title:"Pasir Panjang Ridge",html:"<p>From 12 to 14 February in the historical baseline, the regiment fought along <a href='battle-of-pasir-panjang.html'>Pasir Panjang Ridge</a>. Japanese artillery, aircraft, infantry, and tanks pressed the position toward Bukit Chandu.</p><p>The regiment fought beside British, Indian, and supporting troops rather than as an isolated national formation.</p>"},
      {id:"adnan",title:"Adnan Saidi and Bukit Chandu",html:"<p>Lieutenant <a href='adnan-saidi.html'>Adnan Saidi</a> led a company sector during the final stand. His troops resisted until ammunition and the position failed, after which Adnan was captured or incapacitated and killed.</p><p>Accounts differ in individual detail, but his refusal to abandon the defense made him the regiment's defining figure.</p>"},
      {id:"loss",title:"Losses, surrender, and dissolution",html:"<p>The historical battle register records 159 regimental dead, including British and Malay officers and other ranks. Exact setting totals remain open because the surrender day and tactical sequence may shift modestly.</p><p>Japanese victory disarmed the regiment. Survivors entered captivity, civilian life, or later security formations under a new political order.</p>"},
      {id:"legacy",title:"A lineage claimed by two states",html:"<p>Protected Malaya treats the regiment as a national military ancestor; Singapore treats Pasir Panjang as a local defense memory. Both claims coexist because the regiment recruited from the peninsula but fought its defining battle on the island.</p><p>The exact legal continuity between the 1933 formation and later Malayan armed forces remains open, but ceremonial lineage, names, memorials, and regimental history preserve the connection.</p>"}
    ],
    related:[{href:"adnan-saidi.html",kicker:"Defining officer",label:"Adnan Saidi"},{href:"battle-of-pasir-panjang.html",kicker:"Defining battle",label:"Battle of Pasir Panjang"},{href:"malaya.html",kicker:"Successor state",label:"Federated Kingdom of Malaya"}],
    facts:[["Founded","1933 as an experimental company"],["Country","British Malaya"],["Branch","Malay regular infantry under Malaya Command"],["Wartime organization","1st and 2nd Battalions"],["Approximate wartime strength","About 1,400"],["Defining battle","Pasir Panjang and Bukit Chandu"],["Noted officer","Lt Adnan Saidi"],["Postwar legal continuity","Open"]],
    categories:["Malay Regiment","Military history of Malaya","Battle of Pasir Panjang","Adnan Saidi","Military formations"]
  })
});

const twentyFifthArmyFormations = window.deepArticles["japanese-twenty-fifth-army"];
if (twentyFifthArmyFormations) {
  const forcesSection = twentyFifthArmyFormations.sections && twentyFifthArmyFormations.sections.find(section => section.id === "forces");
  if (forcesSection) {
    forcesSection.html = "<p>The <a href='japanese-5th-division.html'>5th Division</a>, <a href='japanese-18th-division.html'>18th Division</a>, and <a href='japanese-imperial-guards-division.html'>Imperial Guards Division</a> formed the principal ground components associated with the campaign. Tank, artillery, engineer, transport, signals, reconnaissance, medical, and air-support elements allowed them to operate as more than light jungle infantry.</p><p>Units historically required for the Philippines can reinforce the broader southern system, though no unsupported alternate order of battle is assigned here.</p>";
  }
  twentyFifthArmyFormations.landscape = malayaFormationLandscape;
  twentyFifthArmyFormations.related = [
    ...(twentyFifthArmyFormations.related || []),
    {href:"japanese-5th-division.html",kicker:"Mobile western formation",label:"Japanese 5th Division"},
    {href:"japanese-18th-division.html",kicker:"Kota Bharu and Pasir Panjang",label:"Japanese 18th Division"},
    {href:"japanese-imperial-guards-division.html",kicker:"Muar and Kranji",label:"Imperial Guards Division"}
  ];
}

const malayanCampaignFormations = window.deepArticles["malayan-campaign"];
if (malayanCampaignFormations) {
  malayanCampaignFormations.landscape = malayaFormationLandscape;
  malayanCampaignFormations.related = [
    ...(malayanCampaignFormations.related || []),
    {href:"japanese-5th-division.html",kicker:"Japanese formation",label:"Japanese 5th Division"},
    {href:"eleventh-indian-infantry-division.html",kicker:"Commonwealth formation",label:"11th Indian Infantry Division"},
    {href:"eighth-australian-division.html",kicker:"Commonwealth formation",label:"8th Australian Division"}
  ];
}

const singaporeBattleFormations = window.deepArticles["fall-of-singapore"];
if (singaporeBattleFormations) {
  singaporeBattleFormations.related = [
    ...(singaporeBattleFormations.related || []),
    {href:"eighth-australian-division.html",kicker:"Australian formation",label:"8th Australian Division"},
    {href:"malay-regiment.html",kicker:"Local regular formation",label:"Malay Regiment"}
  ];
}
