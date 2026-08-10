window.deepArticles = window.deepArticles || {};

const singaporeBattleLocalSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Limited Southern War and permanent Japanese victory"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — Malaya and Singapore, 1941–1942"},
  {href:"../transcript.md",label:"Master Transcript — fall of Singapore and postwar Japanese system"}
];

const singaporeBattleOfficialSources = {
  "japanese-landings-singapore":[
    {href:"https://www.awm.gov.au/articles/blog/1942-fall-of-singapore",label:"Australian War Memorial — Battle of Singapore overview"},
    {href:"https://www.roots.gov.sg/stories-landing/stories/world-war-ii/story",label:"National Heritage Board — Battle of Singapore and occupation overview"}
  ],
  "battle-of-sarimbun-beach":[
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/sarimbun-beach-landing",label:"National Heritage Board — Sarimbun Beach Landing historic site"},
    {href:"https://www.awm.gov.au/articles/blog/1942-fall-of-singapore",label:"Australian War Memorial — northwest landing and Australian defense"}
  ],
  "battle-of-kranji":[
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/Battle-at-Kranji-Beach",label:"National Heritage Board — Battle at Kranji Beach historic site"},
    {href:"https://www.roots.gov.sg/stories-landing/stories/kranji-world-war-ii-story/story",label:"National Heritage Board — Kranji wartime landscape"}
  ],
  "battle-of-bukit-timah":[
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/bukit-timah-battle",label:"National Heritage Board — Battle at Bukit Timah historic site"},
    {href:"https://www.roots.gov.sg/places/places-landing/Places/landmarks/Bukit-Timah-Heritage-Trail-WWII-Legacy-Trail/Former-Ford-Factory",label:"National Heritage Board — Former Ford Factory and Bukit Timah"}
  ],
  "battle-of-pasir-panjang":[
    {href:"https://www.roots.gov.sg/stories-landing/stories/world-war-ii/story",label:"National Heritage Board — Pasir Panjang, Bukit Chandu, and Adnan Saidi"},
    {href:"https://www.nhb.gov.sg/bukitchandu/",label:"National Heritage Board — Reflections at Bukit Chandu"}
  ],
  "alexandra-hospital-massacre":[
    {href:"https://www.roots.gov.sg/places/places-landing/Places/historic-sites/alexandra-hospital",label:"National Heritage Board — Alexandra Hospital historic site"},
    {href:"https://www.roots.gov.sg/Collection-Landing/listing/1194147",label:"National Museum of Singapore — British Military Hospital collection record"}
  ]
};

const singaporeBattleLandscape = {
  src:"assets/diagrams/singapore-island-battle-sequence.svg",
  alt:"Schematic of the Japanese landings on northwestern Singapore and the advance through Sarimbun, Kranji, Bukit Timah, Pasir Panjang and Alexandra Hospital",
  caption:"The island battle moved from two northwestern crossing sectors toward the central roads, reservoirs, and final city perimeter; positions are schematic"
};

const singaporeBattleCommonRelated = [
  {href:"fall-of-singapore.html",kicker:"Parent campaign",label:"Fall of Singapore"},
  {href:"malayan-campaign.html",kicker:"Preceding campaign",label:"Malayan Campaign"},
  {href:"limited-southern-war.html",kicker:"Wider conflict",label:"Limited Southern War"},
  {href:"singapore.html",kicker:"Postwar state",label:"Singapore"}
];

const singaporeBattleArticle = c => ({
  title:c.title,
  category:c.category || "Battles",
  eyebrow:c.eyebrow,
  infoboxKicker:c.infoboxKicker,
  infoboxTitle:c.infoboxTitle || c.title,
  landscape:singaporeBattleLandscape,
  lead:c.lead,
  canon:c.canon,
  sections:c.sections,
  related:[...singaporeBattleCommonRelated,...c.related],
  sources:[...singaporeBattleLocalSources,...singaporeBattleOfficialSources[c.id]],
  facts:c.facts,
  categories:c.categories
});

Object.assign(window.deepArticles,{
  "japanese-landings-singapore":singaporeBattleArticle({
    id:"japanese-landings-singapore",title:"Japanese landings on Singapore",eyebrow:"Battle of Singapore · February 1942",infoboxKicker:"Opening operation on Singapore Island",
    lead:"The Japanese landings on Singapore were the night crossings of the Johore Strait that established the <a href='japanese-twenty-fifth-army.html'>25th Army</a> on the island's northwestern shore. The principal assault struck the thinly held Sarimbun sector, followed by an <a href='japanese-imperial-guards-division.html'>Imperial Guards</a> crossing at Kranji. Once both bridgeheads survived, Japanese engineers, artillery, and infantry turned a precarious waterborne assault into the inland advance that ended British rule.",
    canon:"The historical northwestern assault plan, <a href='japanese-5th-division.html'>5th</a> and <a href='japanese-18th-division.html'>18th Divisions</a> at Sarimbun, Imperial Guards at Kranji, Australian coastal defense, deception toward the northeast, and subsequent advance are retained as the operational baseline. The setting fixes the landings in February 1942 but leaves exact alternate wave strengths, losses, timings, and the final surrender day open because formations spared from the Philippines could alter reserves and tempo.",
    sections:[
      {id:"island",title:"An island after the peninsula",html:"<p>The demolition of the Johore Causeway ended the <a href='malayan-campaign.html'>Malayan Campaign</a> without isolating Singapore for long. Commonwealth formations entered the island exhausted, intermingled, and dependent upon a defensive system that had little depth behind its northern beaches.</p><p>Japanese observation from Johore could identify roads, artillery flashes, reservoirs, and coastal sectors. The Strait was an obstacle, but it was too narrow to restore the strategic distance lost with Malaya.</p>"},
      {id:"plan",title:"The northwestern plan",html:"<p>Lieutenant General Tomoyuki Yamashita concentrated the principal crossing against the mangrove, creek, and plantation coast west of the Causeway. The <a href='japanese-5th-division.html'>5th Division</a> and <a href='japanese-18th-division.html'>18th Division</a> would land around Sarimbun, while the Imperial Guards Division would cross near Kranji after the first lodgment drew attention.</p><p>The scheme sought roads and assembly ground rather than the city itself. Once troops reached the Choa Chu Kang and Jurong approaches, they could turn southeast toward Bukit Timah.</p>"},
      {id:"deception",title:"Fire, reconnaissance, and deception",html:"<p>Japanese artillery and aircraft struck defenses, communications, and movement while patrols studied the Strait. Activity opposite the northeastern shore reinforced Commonwealth fears that the assault might fall upon the naval base and eastern approaches.</p><p>The defender therefore had to cover a long circumference. Reserves could not be placed everywhere, and moving them after the first reports required telephone lines and headquarters that were already under pressure.</p>"},
      {id:"crossing",title:"Assault boats in darkness",html:"<p>Infantry crossed from concealed river and shoreline assembly areas in collapsible boats, barges, and other small craft. Darkness reduced the value of coast artillery and air power but magnified navigation errors, congestion, and local surprise.</p><p>At <a href='battle-of-sarimbun-beach.html'>Sarimbun Beach</a>, the first waves met Australian fire before numbers and repeated crossings opened gaps. The lodgment widened faster than the thin coastal companies could seal it.</p>"},
      {id:"second",title:"The Kranji crossing",html:"<p>The following assault at <a href='battle-of-kranji.html'>Kranji</a> met severe resistance from Australian troops and <a href='dalforce.html'>Dalforce</a> volunteers. Burning fuel spread over parts of the water and shoreline, disrupting Imperial Guards units and producing one of the invasion's sharpest local crises.</p><p>A Commonwealth withdrawal from the coast nevertheless yielded a second bridgehead and access toward the damaged Causeway.</p>"},
      {id:"build",title:"From beachhead to land campaign",html:"<p>Japanese engineers improved landing points and repaired communications across the Strait. Artillery ammunition, food, vehicles, and reinforcements followed the infantry, while the Causeway was made usable as soon as practical.</p><p>The operation thereby ceased to be a raid or isolated amphibious lodgment. It became a land campaign supplied directly from conquered Malaya.</p>"},
      {id:"command",title:"The defensive command crisis",html:"<p>Local withdrawals, delayed reports, broken communications, and uncertainty over reserve orders caused the coastal system to fragment. Units that had not been defeated at their own positions could discover that the line beside or behind them had disappeared.</p><p>The unprepared Jurong–Kranji fallback line did not restore coherence. Its early abandonment opened the routes toward <a href='battle-of-bukit-timah.html'>Bukit Timah</a>.</p>"},
      {id:"result",title:"Operational result",html:"<p>The landings succeeded because the 25th Army combined concentration, darkness, artillery, engineering, and tempo against a dispersed defense. They did not make the rest of the battle effortless: Kranji nearly failed locally, and the inland advance met repeated counterattacks.</p><p>Once the bridgeheads joined, however, Britain no longer possessed a continuous northern front. The battle shifted to roads, reservoirs, ridges, hospitals, and the final urban perimeter.</p>"}
    ],
    related:[{href:"battle-of-sarimbun-beach.html",kicker:"Principal first landing",label:"Battle of Sarimbun Beach"},{href:"battle-of-kranji.html",kicker:"Second crossing sector",label:"Battle of Kranji"}],
    facts:[["Date","February 1942; exact alternate timings open"],["Location","Johore Strait and northwestern Singapore"],["Attacker","Japanese 25th Army"],["Principal formations","5th, 18th, and Imperial Guards Divisions"],["Defenders","Australian, Indian, British, local, and volunteer forces"],["Method","Night amphibious crossings"],["Result","Two Japanese bridgeheads established"],["Immediate sequel","Advance toward Bukit Timah"]],
    categories:["Japanese landings on Singapore","Battle of Singapore","Amphibious operations","Imperial Japanese Army","1942 battles"]
  }),

  "battle-of-sarimbun-beach":singaporeBattleArticle({
    id:"battle-of-sarimbun-beach",title:"Battle of Sarimbun Beach",eyebrow:"Battle of Singapore · February 1942",infoboxKicker:"Principal Japanese landing sector",
    lead:"The Battle of Sarimbun Beach was the first and largest Japanese crossing of the Johore Strait during the assault on Singapore. The <a href='eighth-australian-division.html'>Australian 22nd Brigade</a> defended a broad northwestern coast cut by mangroves, creeks, and plantations. Its forward companies repelled and disrupted early landings, but repeated waves passed through gaps, separated local positions, and forced a withdrawal toward the interior.",
    canon:"The historical landing zone between Sarimbun and the Lim Chu Kang approaches, 22nd Australian Brigade defense, <a href='japanese-5th-division.html'>5th</a> and <a href='japanese-18th-division.html'>18th Division</a> assault, night crossing, local resistance, infiltration through gaps, and inland withdrawal are retained. The exact alternate hour, assault strength, company dispositions, and casualty figures remain open.",
    sections:[
      {id:"coast",title:"The northwestern coast",html:"<p>Sarimbun's shoreline was a difficult military landscape of mangrove, mud, tidal creeks, small beaches, plantations, and tracks. It complicated a landing but also prevented defenders from seeing or firing continuously along the coast.</p><p>The sector mattered because roads inland led toward Tengah airfield, Jurong, and the central communications around Bukit Timah.</p>"},
      {id:"defenders",title:"The 22nd Australian Brigade",html:"<p>The brigade covered more coastline than its battalions could occupy as a continuous line. Forward companies held selected beaches and creek mouths, with artillery, searchlights, and reserves expected to support whichever point received the main attack.</p><p>Fatigue and losses from Malaya reduced the margin for error. Dense terrain made lateral reinforcement slow even over short distances.</p>"},
      {id:"preparation",title:"Bombardment and darkness",html:"<p>Japanese artillery struck known positions and communications before assault craft entered the Strait. Darkness concealed the concentration and denied defenders a single clear picture of the crossing.</p><p>Searchlight and artillery arrangements did not produce the fully coordinated barrier envisioned in prewar exercises. Local infantry therefore carried the first defense.</p>"},
      {id:"waves",title:"The first waves",html:"<p>Australian posts fired upon boats and troops reaching shore, sinking craft and causing severe losses in some lanes. Other groups landed in mangrove or between defended localities and began moving inland.</p><p>The battle was not one beach line breaking at once. It was a collection of small fights whose gaps became more important as successive Japanese waves arrived.</p>"},
      {id:"infiltration",title:"Infiltration behind the posts",html:"<p>Japanese parties bypassed positions, cut tracks, and threatened command posts from unexpected directions. Forward companies could remain tactically intact while losing contact with brigade headquarters or neighboring units.</p><p>Reports reached higher command late and often described only one fragment of the landing. Reserve movements began without a stable map of the beachhead.</p>"},
      {id:"withdrawal",title:"Withdrawal from the coast",html:"<p>As the lodgment widened, the 22nd Brigade withdrew toward roads and proposed fallback positions. Some groups retired in order; others dispersed through plantations and rejoined over the next days.</p><p>The movement preserved survivors but surrendered the ground required to contain the crossing before Japanese artillery and supplies could follow.</p>"},
      {id:"airfield",title:"Toward Tengah and Jurong",html:"<p>The bridgehead opened routes toward Tengah airfield and the Jurong–Kranji line. Japanese formations used the same inland tracks the defenders required for reserves and retreat.</p><p>The loss of western depth also made the later Imperial Guards crossing at Kranji harder to isolate.</p>"},
      {id:"memory",title:"Australian memory",html:"<p>Sarimbun became central to Australian arguments over preparation, dispersal, command, and the meaning of Singapore. Veterans rejected the later caricature that the coast had been yielded without resistance.</p><p>Japanese histories emphasized the night crossing and rapid expansion. Singaporean commemoration places the battle within a broader landscape of local volunteers, civilians, occupation, and permanent imperial change.</p>"}
    ],
    related:[{href:"japanese-landings-singapore.html",kicker:"Landing operation",label:"Japanese Landings on Singapore"},{href:"battle-of-kranji.html",kicker:"Second bridgehead",label:"Battle of Kranji"}],
    facts:[["Date","February 1942; historical baseline 8–9 February"],["Location","Sarimbun and Lim Chu Kang coast"],["Attacker","Japanese 5th and 18th Divisions"],["Defender","22nd Australian Brigade"],["Terrain","Mangroves, creeks, beaches, and plantations"],["Method","Night crossing in assault craft"],["Result","Japanese bridgehead established"],["Consequence","Western defensive depth lost"]],
    categories:["Battle of Sarimbun Beach","Battle of Singapore","Australian Army","Amphibious battles","1942 battles"]
  }),

  "battle-of-kranji":singaporeBattleArticle({
    id:"battle-of-kranji",title:"Battle of Kranji",eyebrow:"Battle of Singapore · February 1942",infoboxKicker:"Imperial Guards crossing near the Causeway",
    lead:"The Battle of Kranji was the <a href='japanese-imperial-guards-division.html'>Imperial Guards Division's</a> attempted crossing east of the principal Sarimbun beachhead. Australian troops and <a href='dalforce.html'>Dalforce</a> volunteers met the assault with concentrated fire while burning fuel spread across parts of the Strait and shoreline. The Japanese crossing approached a local reverse, but a disputed Commonwealth withdrawal yielded the coast and allowed the Guards to establish a beachhead beside the Causeway.",
    canon:"The historical Kranji sector, Imperial Guards assault, 27th Australian Brigade and Dalforce defense, burning fuel on the water, severe Japanese disruption, withdrawal from the shore, and establishment of the Kranji–Causeway beachhead are retained. Exact losses, the fuel release sequence, responsibility for withdrawal orders, and alternate timing remain contested or open.",
    sections:[
      {id:"sector",title:"Between river and Causeway",html:"<p>The Kranji sector covered the northern shore between the Sungei Kranji area and the damaged Johore Causeway. Its waterways, mangrove edge, embankments, and industrial fuel installations created both defensive obstacles and hazards.</p><p>A successful landing would provide the Imperial Guards Division access to roads behind the northern defenses and a route for reopening the Causeway.</p>"},
      {id:"defense",title:"Australian and volunteer defense",html:"<p>Elements of the <a href='eighth-australian-division.html'>27th Australian Brigade</a> held the eastern bank and approaches, while the western side included men of Dalforce, the locally raised Chinese volunteer formation. Their positions covered likely boat lanes and the river mouth.</p><p>The defenders had seen the Sarimbun crisis develop to the west but could not know whether Kranji represented a diversion or a second major assault.</p>"},
      {id:"guards",title:"The Imperial Guards cross",html:"<p>Guards units entered the Strait in darkness and attempted to reach the Kranji shore under artillery support. The confined lanes concentrated boats within range of prepared small-arms and artillery fire.</p><p>Unlike the widening gaps at Sarimbun, several Kranji positions could bring overlapping fire upon the assault.</p>"},
      {id:"fire",title:"Fire on the water",html:"<p>Fuel released from installations near the Sungei Mandai Kechil ignited and spread along portions of the water and coast. Flames illuminated craft, disrupted landings, and inflicted or threatened casualties upon troops in the crossing area.</p><p>Later accounts disagree over how deliberate and militarily controlled the release was. Its psychological effect upon the exposed Guards was unmistakable.</p>"},
      {id:"crisis",title:"A Japanese local crisis",html:"<p>Heavy losses and confusion led Guards commander Takuma Nishimura to consider or request withdrawal. The episode became evidence that the island assault could have been checked at an individual sector even after Sarimbun.</p><p>Yamashita's headquarters instead required the division to persist while the wider battle continued west and inland.</p>"},
      {id:"withdrawal",title:"The coastal withdrawal",html:"<p>Commonwealth units withdrew from part of the coast amid uncertain orders and concern for their exposed western flank. The decision remains one of the battle's central command controversies because it surrendered positions that had resisted the crossing.</p><p>Withdrawal did not reflect a simple absence of fighting. It reflected the collapse of confidence in a continuous line after Sarimbun and incomplete information about neighboring forces.</p>"},
      {id:"bridgehead",title:"Kranji to the Causeway",html:"<p>The Guards established a lodgment from Kranji toward the Causeway and joined the wider Japanese front. Engineers could now work toward restoring the most direct supply connection with Johore.</p><p>The second bridgehead also threatened the Jurong–Kranji fallback line from the very ground upon which its northern end depended.</p>"},
      {id:"legacy",title:"The battle's argument",html:"<p>Kranji is remembered less as an inevitable defeat than as a lost defensive opportunity. Australian accounts emphasize successful local resistance undone by command failure; Japanese accounts emphasize persistence after a severe crossing crisis.</p><p>Dalforce participation also makes the battle part of Singapore's Chinese civic and resistance memory, not solely a contest between imperial armies.</p>"}
    ],
    related:[{href:"battle-of-sarimbun-beach.html",kicker:"Principal landing",label:"Battle of Sarimbun Beach"},{href:"battle-of-bukit-timah.html",kicker:"Inland objective",label:"Battle of Bukit Timah"},{href:"dalforce.html",kicker:"Local volunteer defenders",label:"Dalforce"}],
    facts:[["Date","February 1942; historical baseline 9–10 February"],["Location","Kranji coast and Sungei Kranji"],["Attacker","Japanese Imperial Guards Division"],["Defenders","27th Australian Brigade elements and Dalforce"],["Noted feature","Burning fuel across parts of the crossing"],["Local result","Initial assault severely disrupted"],["Operational result","Japanese beachhead established"],["Command issue","Commonwealth withdrawal remains disputed"]],
    categories:["Battle of Kranji","Battle of Singapore","Australian Army","Dalforce","1942 battles"]
  }),

  "battle-of-bukit-timah":singaporeBattleArticle({
    id:"battle-of-bukit-timah",title:"Battle of Bukit Timah",eyebrow:"Battle of Singapore · February 1942",infoboxKicker:"Fight for Singapore's central communications",
    lead:"The Battle of Bukit Timah was the Japanese advance upon the central road junctions, high ground, reservoirs, and supply depots of Singapore Island. After the Jurong–Kranji line dissolved, the Japanese <a href='japanese-5th-division.html'>5th</a> and <a href='japanese-18th-division.html'>18th Divisions</a> converged on Bukit Timah. Commonwealth counterattacks failed to restore the line, and the loss of the village and hill compressed the defense into a perimeter around the city.",
    canon:"The historical convergence of the 5th and 18th Divisions, collapse of the Jurong–Kranji line, Commonwealth counterattack, capture of Bukit Timah village and hill, threat to stores and reservoirs, and withdrawal to the final perimeter are retained. Exact alternate dates, tank and casualty counts, and the timing of Yamashita's surrender demand remain open.",
    sections:[
      {id:"center",title:"The island's strategic center",html:"<p>Bukit Timah stood where trunk roads, rail approaches, high ground, and routes toward the city converged. Major ammunition, fuel, and food depots lay in the district, while nearby reservoirs and catchments shaped the island's water security.</p><p>Possession of the area would let Japan divide surviving Commonwealth sectors and approach the urban perimeter from the northwest.</p>"},
      {id:"line",title:"The empty Jurong–Kranji line",html:"<p>The Jurong–Kranji line was intended as a fallback after the beaches. It had not been prepared as a continuous fortified position, and misread or conflicting instructions caused formations to leave sections before a common defense had formed.</p><p>Japanese troops advancing from <a href='battle-of-sarimbun-beach.html'>Sarimbun</a> and <a href='battle-of-kranji.html'>Kranji</a> therefore found routes through rather than one settled second line.</p>"},
      {id:"advance",title:"Converging Japanese divisions",html:"<p>The 5th Division advanced through the Choa Chu Kang and Bukit Panjang approaches while the 18th Division pressed from the Jurong direction. Tanks, infantry, artillery, and aircraft kept pressure upon units already moving or trying to reassemble.</p><p>The convergence turned Bukit Timah into both a battlefield and a traffic crisis of reserves, wounded, headquarters, and supply columns.</p>"},
      {id:"counterattack",title:"The Commonwealth counterattack",html:"<p>Australian and Indian brigades attempted to retake the Jurong–Kranji line and check the approach to Bukit Timah. Units fought with limited artillery support, incomplete communications, and formations still gathering men lost during the beach withdrawals.</p><p>The attack destroyed some Japanese tanks and delayed the advance but could not restore a continuous front.</p>"},
      {id:"village",title:"Loss of the village",html:"<p>Japanese troops and tanks reached Bukit Timah village after the counterattack failed. Control of the road junction opened several approaches toward the city and exposed the depots around the district.</p><p>Fighting continued beyond the first occupation of the village as scattered Commonwealth forces withdrew through the racecourse and neighboring heights.</p>"},
      {id:"hill",title:"The hill and the reservoirs",html:"<p>The fall of Bukit Timah Hill gave Japan observation over central terrain and placed the water catchment under direct threat. The defenders still held parts of the reservoir system, but damage, uncertainty, and restricted access intensified command fears over civilian supply.</p><p>Water became both a material question and a central argument in the later decision to surrender.</p>"},
      {id:"demand",title:"Yamashita's demand",html:"<p>Yamashita invited or pressured Percival to capitulate while Japanese logistics were themselves strained by the speed of the advance. Percival refused at this stage and contracted the defense toward a perimeter running through the southern ridges and city approaches.</p><p>The Japanese command converted confidence and visible momentum into psychological pressure even where its ammunition position was imperfect.</p>"},
      {id:"legacy",title:"The road to the final perimeter",html:"<p>Bukit Timah broke the possibility of restoring an island-wide defense. The surviving formations now fought for time and local ground around the city rather than for a route back to the north coast.</p><p>The next major struggle on the southwest approach was the <a href='battle-of-pasir-panjang.html'>Battle of Pasir Panjang</a>, while the Ford Factory at Bukit Timah became the remembered site of the eventual surrender conference.</p>"}
    ],
    related:[{href:"battle-of-kranji.html",kicker:"Northern crossing",label:"Battle of Kranji"},{href:"battle-of-pasir-panjang.html",kicker:"Final ridge battle",label:"Battle of Pasir Panjang"}],
    facts:[["Date","February 1942; historical baseline 10–12 February"],["Location","Bukit Timah, central Singapore"],["Attackers","Japanese 5th and 18th Divisions"],["Defenders","Australian, Indian, and British formations"],["Objectives","Roads, depots, high ground, and water catchment"],["Counterattack","Failed to restore the Jurong–Kranji line"],["Result","Japanese capture of village and hill"],["Consequence","Commonwealth retreat to city perimeter"]],
    categories:["Battle of Bukit Timah","Battle of Singapore","Urban approaches","British military defeats","1942 battles"]
  }),

  "battle-of-pasir-panjang":singaporeBattleArticle({
    id:"battle-of-pasir-panjang",title:"Battle of Pasir Panjang",eyebrow:"Battle of Singapore · February 1942",infoboxKicker:"Defense of the southwestern city perimeter",
    lead:"The Battle of Pasir Panjang was the defense of the southwestern ridges leading toward Singapore city, culminating in the <a href='malay-regiment.html'>Malay Regiment's</a> stand at Bukit Chandu. British, Malay, and supporting troops contested the high ground against the <a href='japanese-18th-division.html'>Japanese 18th Division</a> after Bukit Timah had fallen. The position was overwhelmed, but the resistance became one of the principal military memories of Malay service and Singapore's last days under British rule.",
    canon:"The historical Pasir Panjang ridge fighting, 18th Division assault, 1st Malay Regiment defense, final stand at Bukit Chandu, and death of Lieutenant Adnan Saidi are retained. Exact alternate dates, unit strengths, losses, and several celebrated details of the final action remain open or depend upon later testimony.",
    sections:[
      {id:"perimeter",title:"The contracted perimeter",html:"<p>After <a href='battle-of-bukit-timah.html'>Bukit Timah</a>, Percival drew surviving formations into a shorter defense around the city and its immediate approaches. The southwest ridge line protected roads, depots, and access toward Alexandra and the docks.</p><p>The contraction reduced frontage but placed troops, civilians, hospitals, and supply sites within a narrowing battlespace.</p>"},
      {id:"ridge",title:"Pasir Panjang Ridge",html:"<p>The ridge offered observation and a sequence of defensible rises above roads and low ground. Its local names—Pasir Panjang, Kent Ridge, and Bukit Chandu or Opium Hill—later became sites of separate but connected commemorations.</p><p>Japanese possession would open the western approach to the city perimeter and threaten the military hospital at Alexandra.</p>"},
      {id:"regiment",title:"The Malay Regiment",html:"<p>The 1st Battalion, Malay Regiment, fought within the brigade defense under British and Malay officers. The battalion's service made the battle a foundational military memory for postcolonial Malaya and for Singapore's Malay community.</p><p>Lieutenant Adnan Saidi commanded a company sector and became the best-known individual defender of the ridge.</p>"},
      {id:"assault",title:"Japanese attacks along the ridge",html:"<p>Elements of the Japanese 18th Division attacked through artillery, air pressure, infiltration, and infantry assaults. Defenders were forced from forward positions toward the higher ground at Bukit Chandu.</p><p>Fighting at close range reduced the advantage of formal lines and made ammunition, local observation, and control of paths decisive.</p>"},
      {id:"infiltration",title:"The uniform-infiltration account",html:"<p>A celebrated account holds that Japanese troops in captured Commonwealth uniforms approached in an unfamiliar marching formation and were recognized before reaching the position. The episode is embedded in public commemoration, though its precise tactical details rest upon later reconstruction.</p><p>The story expresses the broader reality that deception and infiltration were constant fears during the collapsing island defense.</p>"},
      {id:"chandu",title:"The stand at Bukit Chandu",html:"<p>Adnan's company and attached defenders continued fighting after neighboring positions had fallen. With ammunition exhausted or nearly exhausted, parts of the position ended in close combat before Japanese troops overwhelmed the hill.</p><p>Adnan was captured or incapacitated and killed. Accounts of his final treatment differ in detail but agree that he did not survive the position's fall.</p>"},
      {id:"aftermath",title:"The western approach opens",html:"<p>The loss of Bukit Chandu removed the last substantial ridge defense on the southwestern approach. Japanese troops moved toward Alexandra and the edges of the city perimeter as artillery and air attack continued.</p><p>The front's arrival at a marked military hospital produced the <a href='alexandra-hospital-massacre.html'>Alexandra Hospital massacre</a>.</p>"},
      {id:"memory",title:"Adnan Saidi and national memory",html:"<p>Adnan Saidi became an exemplar of duty across Malayan, Singaporean, and Commonwealth accounts. Later museums and school histories made Bukit Chandu a counterpoint to narratives that Singapore fell because its defenders would not fight.</p><p>Within the Japanese-dominated postwar order, commemoration remains politically charged: it honors local courage while naming the army that founded the regional system as the conquering enemy.</p>"}
    ],
    related:[{href:"battle-of-bukit-timah.html",kicker:"Preceding central battle",label:"Battle of Bukit Timah"},{href:"alexandra-hospital-massacre.html",kicker:"Atrocity after the ridge fell",label:"Alexandra Hospital Massacre"},{href:"malay-regiment.html",kicker:"Defending formation",label:"Malay Regiment"},{href:"japanese-18th-division.html",kicker:"Attacking formation",label:"Japanese 18th Division"}],
    facts:[["Date","February 1942; historical baseline 12–14 February"],["Location","Pasir Panjang Ridge and Bukit Chandu"],["Attacker","Japanese 18th Division elements"],["Defenders","Malay Regiment and supporting Commonwealth units"],["Noted commander","Lieutenant Adnan Saidi"],["Terrain","Ridge and urban approaches"],["Result","Japanese victory"],["Legacy","Principal Malay and Singaporean defense memory"]],
    categories:["Battle of Pasir Panjang","Battle of Singapore","Malay Regiment","Adnan Saidi","1942 battles"]
  }),

  "alexandra-hospital-massacre":singaporeBattleArticle({
    id:"alexandra-hospital-massacre",title:"Alexandra Hospital massacre",category:"War crimes",eyebrow:"Battle of Singapore · February 1942",infoboxKicker:"Killing of patients and medical personnel",
    lead:"The Alexandra Hospital massacre was the killing of wounded soldiers, patients, medical personnel, and staff after Japanese troops entered the British Military Hospital during the final fighting for Singapore. Killings occurred in and around the hospital and continued after a group of captives was removed from the grounds. The atrocity became one of the clearest contradictions of the imperial claim that Singapore had been liberated through disciplined Asian arms.",
    canon:"The historical marked military hospital, Japanese entry during fighting near Pasir Panjang, killing of patients and staff, removal and later killing of captives, and a total commonly reconstructed between roughly two and three hundred are retained. The setting leaves the exact alternate date, victim register, immediate order sequence, and total open.",
    sections:[
      {id:"hospital",title:"The British Military Hospital",html:"<p>Opened shortly before the war, Alexandra was the principal British military hospital for the Far East command. Its wards, operating rooms, laboratories, and support buildings received casualties from Malaya and the island battle.</p><p>As the perimeter contracted, a medical institution designed behind the front found itself near active roads and defensive positions.</p>"},
      {id:"front",title:"The front reaches Alexandra",html:"<p>The fall of <a href='battle-of-pasir-panjang.html'>Pasir Panjang and Bukit Chandu</a> brought Japanese troops toward Alexandra. Retreating Commonwealth soldiers, Japanese assault groups, hospital orderlies, and wounded men occupied the same confused landscape.</p><p>Accounts differ over firing from or near the grounds and the exact approach of the assault troops. None made the wounded and medical staff legitimate targets.</p>"},
      {id:"entry",title:"Entry into the wards",html:"<p>Hospital personnel attempted to identify the site and its protected function. Japanese troops entered buildings and killed patients, doctors, orderlies, and others by bayonet or gunfire.</p><p>The violence moved through wards and corridors where many victims could neither resist nor escape.</p>"},
      {id:"captives",title:"Removal of captives",html:"<p>A larger group of patients and staff was assembled and taken from the hospital. They were confined in severely crowded conditions with inadequate water, ventilation, or medical care.</p><p>The detention extended the event beyond a moment of uncontrolled entry and made later questions of unit and command responsibility unavoidable.</p>"},
      {id:"killing",title:"Killings after detention",html:"<p>Many of the removed captives were killed the following day in the historical reconstruction. A small number survived or escaped sufficiently to provide testimony.</p><p>Because Singapore remained under victorious Japanese authority after the wider war, the record developed through Commonwealth testimony, hospital memory, local archives, and later negotiation rather than an Allied occupation tribunal system.</p>"},
      {id:"victims",title:"Victims and numbers",html:"<p>Public accounts commonly place the deaths between about two hundred and three hundred across the two days. Differences reflect incomplete ward records, battlefield movement, bodies removed or unidentified, and varying definitions of the massacre site.</p><p>The archive therefore treats a precise figure as unsettled while retaining the scale and protected status of the victims.</p>"},
      {id:"responsibility",title:"Responsibility and official treatment",html:"<p>Immediate responsibility lay with troops and officers participating in the entry, confinement, and killing. The larger question concerns how battlefield discipline, anti-surrender doctrine, retaliation, and command climate made violence against helpless patients possible.</p><p>Japanese official narratives often isolated the crime from the conquest's strategic legitimacy. Commonwealth and Singaporean accounts treated it as evidence about the occupation system that followed.</p>"},
      {id:"memory",title:"Hospital memory in the armed peace",html:"<p>Alexandra continued as a hospital and physical site of remembrance. Memorial practice joined staff service, survivor testimony, architectural preservation, and the names of victims.</p><p>The massacre remained difficult for Japanese–Singaporean public history: modern Singapore prospered inside the Co-Prosperity Sphere, but institutional success could not convert the hospital killings into a morally neutral episode.</p>"}
    ],
    related:[{href:"battle-of-pasir-panjang.html",kicker:"Preceding battle",label:"Battle of Pasir Panjang"},{href:"japanese-war-memory.html",kicker:"Contested remembrance",label:"Japanese War Memory"}],
    facts:[["Date","February 1942; exact alternate day open"],["Location","British Military Hospital, Alexandra"],["Victims","Patients, wounded soldiers, medical personnel, and staff"],["Perpetrators","Imperial Japanese Army troops"],["Estimated deaths","Roughly 200–300; exact register unsettled"],["Duration","Killings across two days in the historical baseline"],["Classification","War crime"],["Postwar setting","No Allied occupation tribunal system in Japan"]],
    categories:["Alexandra Hospital massacre","Japanese war crimes","Battle of Singapore","Medical neutrality","1942 massacres"]
  })
});

const fallOfSingaporeOverview = window.deepArticles["fall-of-singapore"];
if (fallOfSingaporeOverview) {
  fallOfSingaporeOverview.landscape = singaporeBattleLandscape;
  const assaultSection = fallOfSingaporeOverview.sections && fallOfSingaporeOverview.sections.find(section => section.id === "assault");
  if (assaultSection) {
    assaultSection.html = "<p>Japanese reconnaissance, artillery, aviation, deception, and <a href='japanese-landings-singapore.html'>night crossing operations</a> concentrated against the northwestern shore. The principal lodgment opened at <a href='battle-of-sarimbun-beach.html'>Sarimbun Beach</a>; a second assault at <a href='battle-of-kranji.html'>Kranji</a> survived severe losses and gave access toward the Causeway.</p><p>Once the bridgeheads joined, the <a href='japanese-5th-division.html'>5th</a> and <a href='japanese-18th-division.html'>18th Divisions</a> advanced upon <a href='battle-of-bukit-timah.html'>Bukit Timah</a>. Commonwealth counterattacks slowed but did not eliminate the lodgment, and the defense contracted toward <a href='battle-of-pasir-panjang.html'>Pasir Panjang</a> and the city perimeter.</p>";
  }
  fallOfSingaporeOverview.related = [
    ...(fallOfSingaporeOverview.related || []),
    {href:"japanese-landings-singapore.html",kicker:"Opening island operation",label:"Japanese Landings on Singapore"},
    {href:"battle-of-sarimbun-beach.html",kicker:"Principal landing",label:"Battle of Sarimbun Beach"},
    {href:"battle-of-kranji.html",kicker:"Causeway-sector battle",label:"Battle of Kranji"},
    {href:"battle-of-bukit-timah.html",kicker:"Central battle",label:"Battle of Bukit Timah"},
    {href:"battle-of-pasir-panjang.html",kicker:"Final ridge defense",label:"Battle of Pasir Panjang"},
    {href:"alexandra-hospital-massacre.html",kicker:"War crime",label:"Alexandra Hospital Massacre"}
  ];
}

const malayanCampaignForSingapore = window.deepArticles["malayan-campaign"];
if (malayanCampaignForSingapore) {
  malayanCampaignForSingapore.related = [
    ...(malayanCampaignForSingapore.related || []),
    {href:"japanese-landings-singapore.html",kicker:"Crossing the Strait",label:"Japanese Landings on Singapore"},
    {href:"battle-of-bukit-timah.html",kicker:"Island battle",label:"Battle of Bukit Timah"}
  ];
}

const singaporeStateForBattles = window.deepArticles["singapore"];
if (singaporeStateForBattles) {
  singaporeStateForBattles.related = [
    ...(singaporeStateForBattles.related || []),
    {href:"japanese-landings-singapore.html",kicker:"Japanese conquest",label:"Japanese Landings on Singapore"},
    {href:"battle-of-pasir-panjang.html",kicker:"Local defense memory",label:"Battle of Pasir Panjang"},
    {href:"alexandra-hospital-massacre.html",kicker:"Occupation wound",label:"Alexandra Hospital Massacre"}
  ];
}
