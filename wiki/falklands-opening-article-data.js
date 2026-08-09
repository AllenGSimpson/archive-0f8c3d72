window.deepArticles = window.deepArticles || {};

const falklandsOpeningSources = [
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Falklands diplomacy, war, and great-power restraint"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — South Atlantic chronology, 1981–1985"},
  {href:"../transcript.md",label:"Master Transcript — Falklands diplomatic cycle and first year of war"},
  {href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — British and Argentine maritime systems"},
  {href:"../aerospaceArmamentsReference%20-%20AltWWII.md",label:"Aerospace Armaments Reference — South Atlantic aviation and missiles"},
  {href:"../landArmamentsReference%20-%20AltWWII.md",label:"Land Armaments Reference — British and Argentine ground forces"}
];

const falklandsOpeningArticle = config => ({
  category:"Falklands–Malvinas War",
  eyebrow:"South Atlantic crisis · 1981–1985",
  infoboxKicker:"Falklands–Malvinas crisis",
  ...config,
  sources:[...falklandsOpeningSources,...(config.additionalSources || [])],
  categories:config.categories || ["Falklands–Malvinas War","United Kingdom","Argentina","1980s"]
});

Object.assign(window.deepArticles, {
  "falklands-lisbon-talks": falklandsOpeningArticle({
    title:"Falklands Lisbon talks",
    eyebrow:"Portuguese-mediated negotiations · 1981–1982",
    infoboxKicker:"Failed sovereignty negotiations",
    landscape:{src:"assets/diagrams/falklands-lisbon-talks.svg",alt:"Diagram linking Britain, Argentina, Portugal, islander interests, economic access and the unresolved sovereignty timetable",caption:"Lisbon widened practical cooperation while leaving the sovereignty timetable unresolved"},
    lead:"The Falklands Lisbon talks were Portuguese-mediated negotiations between Britain and Argentina in 1981 and 1982. They produced the broadest practical offer of the prewar diplomatic cycle, joining commercial access, fisheries, seabed development, travel, and later discussion of dependencies. They failed when Argentina demanded a dated sovereignty process and Britain refused one that lacked islander consent.",
    canon:"The 1981–1982 period, Portuguese mediation, British package, Argentine demand for an explicit timetable, islander-consent issue, and failure are established. Exact sessions, delegations, draft texts, minute language, public communiqués, and the date on which the talks formally ended remain open.",
    sections:[
      {id:"background",title:"Background",html:"<p>Britain had reinforced the islands after the Atlantic Accord while Argentina spent the 1970s developing a German-compatible force for their recovery. Both governments still preferred a negotiated result if it could preserve their central political claim.</p>"},
      {id:"portugal",title:"Portuguese mediation",html:"<p>Portugal retained old connections with Britain, belonged loosely to the Latin diplomatic world, and wanted to prevent either Germany or Spain from monopolizing South American diplomacy. Lisbon offered a venue associated with neither Washington nor Berlin.</p>"},
      {id:"british",title:"British offer",html:"<p>London proposed expanded Argentine commercial access, shared fisheries, joint petroleum and seabed exploration, easier travel, and eventual discussion of dependencies. The package sought to make the dispute less costly while postponing the constitutional question.</p>"},
      {id:"argentine",title:"Argentine position",html:"<p>Buenos Aires regarded practical cooperation as insufficient unless it led to a stated transfer process. Its negotiators demanded an explicit sovereignty timetable capable of surviving a change of government in London.</p>"},
      {id:"islanders",title:"Islander consent",html:"<p>British policy increasingly treated the island population as a political community whose consent could not be presumed. Argentine negotiators viewed that condition as a British veto embedded inside the local electorate.</p>"},
      {id:"failure",title:"Failure of the talks",html:"<p>The parties could agree upon fields of cooperation and still disagree about what cooperation was for. Britain would discuss the future after confidence-building measures. Argentina wanted the future specified before those measures became another permanent interim arrangement.</p>"},
      {id:"after",title:"From Lisbon to Rio",html:"<p>Brazil and the Vatican tried to bridge the gap in the <a href='rio-formula.html'>Rio formula</a> of 1983. That proposal placed joint administration and a future conference between the British practical package and the Argentine demand for movement.</p>"},
      {id:"legacy",title:"Historical assessment",html:"<p>Later inquiries treated Lisbon as evidence that the war was preceded by serious diplomacy rather than sudden misunderstanding. The same record also showed that economic concessions could not settle a dispute whose parties defined legitimacy differently.</p>"}
    ],
    related:[{href:"rio-formula.html",kicker:"Successor proposal",label:"Rio Formula"},{href:"falklands-war.html",kicker:"Resulting conflict",label:"Falklands–Malvinas War"},{href:"argentina.html",kicker:"Claimant",label:"Argentina"},{href:"commonwealth.html",kicker:"Administering power",label:"British Commonwealth"},{href:"plan-centinela.html",kicker:"Regional pressure",label:"Plan Centinela"}],
    facts:[["Period","1981–1982"],["Venue","Lisbon, Portugal"],["Mediator","Portugal"],["Parties","Britain and Argentina"],["British emphasis","Access and practical cooperation"],["Argentine demand","Explicit sovereignty timetable"],["Central obstacle","Islander consent"],["Outcome","Failed"]]
  }),

  "rio-formula": falklandsOpeningArticle({
    title:"Rio formula",
    eyebrow:"Brazilian–Vatican settlement proposal · 1983",
    infoboxKicker:"Falklands transitional proposal",
    landscape:{src:"assets/diagrams/rio-formula.svg",alt:"Diagram showing joint administration, demilitarization, islander protections, shared resources and a future sovereignty conference",caption:"The Rio formula attempted to turn the sovereignty dispute into a twenty-year managed transition"},
    lead:"The Rio formula was a Brazilian–Vatican proposal of 1983 for a twenty-year joint administration of the Falkland Islands. Supported by the Buchanan administration, it combined Argentine representation, British responsibility for local law, demilitarization, shared resources, islander safeguards, and a final sovereignty conference. Islanders and the Argentine military rejected the same transition for opposite reasons.",
    canon:"The 1983 date, Brazilian authorship, Vatican and American support, twenty-year transitional period, principal clauses, islander rejection, Argentine military rejection, and diplomatic failure are established. The formal document title, negotiators, exact distribution of offices, policing plan, resource shares, and referendum mechanism remain open.",
    sections:[
      {id:"origins",title:"Origins",html:"<p>The failure of the <a href='falklands-lisbon-talks.html'>Lisbon talks</a> left a familiar deadlock. Britain would enlarge cooperation while preserving consent; Argentina required a visible route to sovereignty. Brazil proposed a transition long enough to protect daily life and finite enough to count as movement.</p>"},
      {id:"sponsors",title:"Brazil, the Vatican, and Washington",html:"<p>Brazil supplied regional weight and a venue acceptable to Buenos Aires. The Vatican offered channels to a deeply Catholic Argentine political world. President Buchanan supported a hemispheric settlement that excluded German military penetration and avoided an automatic endorsement of British possession.</p>"},
      {id:"administration",title:"Joint administration",html:"<p>The islands would receive Argentine symbols and representation while Britain retained responsibility for local law and protection of island institutions. The arrangement sought to separate symbolic recognition from immediate coercive control.</p>"},
      {id:"security",title:"Demilitarization and resources",html:"<p>Heavy military competition would be removed from the archipelago. Fisheries, seabed resources, and other development would be shared during the transition, giving both governments a material interest in maintaining it.</p>"},
      {id:"conference",title:"Final sovereignty conference",html:"<p>After twenty years, a conference would reconsider final status. The formula deliberately avoided guaranteeing either permanent British sovereignty or automatic Argentine succession.</p>"},
      {id:"islanders",title:"Islander rejection",html:"<p>The island population judged the probable direction more important than the document's ambiguity. Argentine symbols and a scheduled conference appeared to place them upon a road toward rule they had not chosen.</p>"},
      {id:"argentina",title:"Argentine military rejection",html:"<p>Military leaders regarded another twenty years as indefinite delay with better diplomatic language. Continued British legal authority and the absence of a guaranteed transfer made the proposal inadequate to the recovery project already guiding procurement and planning.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The formula failed in 1983, yet its language survived. Demilitarization, protected local government, shared development, outside guarantees, and a later sovereignty process reappeared in wartime mediation and the <a href='punta-del-este-protocols.html'>Punta del Este settlement</a>.</p>"}
    ],
    related:[{href:"falklands-lisbon-talks.html",kicker:"Earlier diplomacy",label:"Falklands Lisbon Talks"},{href:"south-atlantic-armed-mediation.html",kicker:"Wartime successor",label:"South Atlantic Armed Mediation"},{href:"punta-del-este-protocols.html",kicker:"Postwar settlement",label:"Punta del Este Protocols"},{href:"catholic-church.html",kicker:"Ecclesiastical diplomacy",label:"Catholic Church"},{href:"brazil.html",kicker:"Regional sponsor",label:"Brazil"}],
    facts:[["Year","1983"],["Principal sponsor","Brazil"],["Supporting parties","Vatican and United States"],["Transition","Twenty years"],["Administration","Joint"],["Security","Demilitarization"],["Final mechanism","Sovereignty conference"],["Outcome","Rejected"]]
  }),

  "operacion-rosario": falklandsOpeningArticle({
    title:"Operación Rosario",
    eyebrow:"Argentine recovery operation · April 1984",
    infoboxKicker:"Opening operation of the Falklands War",
    landscape:{src:"assets/diagrams/operacion-rosario.svg",alt:"Operational diagram of Argentine reconnaissance, marine and airborne landings, communications suppression and reinforcement of East Falkland",caption:"Rosario combined a rapid seizure with immediate preparation for the British counterattack"},
    lead:"Operación Rosario was the Argentine seizure of the Falkland Islands in April 1984 and the opening operation of the Falklands–Malvinas War. Conducted as a declared recovery of Argentine territory rather than a traditional declaration of war, the operation defeated a reinforced British garrison after roughly three days of combat and opened the rapid fortification of East Falkland.",
    canon:"The name, April 1984 timing, recovery-operation legal claim, approximate three-day battle, attack methods, meaningful British resistance, surrender rationale, and 12,000–16,000-person reinforcement are established. Exact landing beaches, unit designations, commanders below the senior level, losses, timetable, ships, aircraft, and order of battle remain working or open.",
    sections:[
      {id:"planning",title:"Planning and purpose",html:"<p>Argentina had treated recovery of the islands as its principal long-range military project since the 1970s. German equipment, domestic vehicles, maritime-strike training, airfield engineering, communications, and maintenance were integrated around a theater close to Argentine bases.</p>"},
      {id:"diplomacy",title:"The end of diplomacy",html:"<p>The Rio formula failed in 1983. Buenos Aires then demanded a sovereignty-transfer framework by 31 March 1984. Britain renewed offers of negotiation and economic access while refusing a dated transfer imposed upon the island population.</p>"},
      {id:"legal",title:"A recovery operation",html:"<p>Argentina issued no traditional declaration of war. Its final note claimed restored sovereignty, promised honorable treatment of surrendered troops and protection of civil life, and characterized a British counterattack as aggression against Argentine territory.</p>"},
      {id:"assault",title:"The assault",html:"<p>Special-forces reconnaissance, marine landings, airborne seizure of key ground, naval blockade, communications suppression, and attacks upon the airfield and prepared positions compressed the British defense. Argentina restrained bombardment around Stanley because it intended to govern the settlement and use the runway.</p>"},
      {id:"garrison",title:"British resistance and surrender",html:"<p>The reinforced garrison fought for about three days and inflicted meaningful losses. Surrender followed when Argentine forces threatened to divide the defense and artillery began ranging the civilian settlement. British memory consequently centered upon an overwhelmed garrison rather than a dishonored one.</p>"},
      {id:"occupation",title:"Immediate occupation",html:"<p>Argentina moved roughly 12,000–16,000 personnel, artillery, mobile air defense, anti-ship systems, radar, electronic warfare, engineers, helicopters, fuel, ammunition, and prefabricated shelter into the islands. Most of the strength went to East Falkland.</p>"},
      {id:"airfield",title:"Fortification of East Falkland",html:"<p>German-designed modular engineering expanded and reinforced the Stanley-area runway. The field supported transport, reconnaissance, helicopters, and restricted interceptor operations while coastal defenses anticipated the sheltered inlets most useful to a British landing.</p>"},
      {id:"legacy",title:"Operational legacy",html:"<p>Rosario achieved its immediate objective and denied Britain an easy restoration. It also placed a large Argentine garrison inside a distant maritime siege, making the campaign dependent upon airlift, submarine movement, weather, and German-compatible stores.</p>"}
    ],
    related:[{href:"falklands-war.html",kicker:"Conflict",label:"Falklands–Malvinas War"},{href:"argentina.html",kicker:"Belligerent",label:"Argentina"},{href:"plan-austral.html",kicker:"Technical ecosystem",label:"Plan Austral 82"},{href:"plan-centinela.html",kicker:"Continental constraint",label:"Plan Centinela"},{href:"south-georgia-campaign-1984.html",kicker:"British response",label:"South Georgia Campaign"}],
    facts:[["Date","April 1984"],["Belligerent","Argentina"],["Objective","Seizure of the Falkland Islands"],["Official framing","Recovery operation"],["British resistance","Approximately three days"],["Immediate result","Argentine control"],["Occupation strength","Approximately 12,000–16,000"],["Principal fortress","East Falkland"]]
  }),

  "south-georgia-campaign-1984": falklandsOpeningArticle({
    title:"South Georgia campaign of 1984",
    eyebrow:"British peripheral counterstroke · May 1984",
    infoboxKicker:"Opening British victory",
    landscape:{src:"assets/diagrams/south-georgia-campaign-1984.svg",alt:"Diagram showing the British task force retaking lightly defended South Georgia while the main Argentine fortress remains in the Falklands",caption:"South Georgia restored confidence without deciding the main island campaign"},
    lead:"The South Georgia campaign of May 1984 was Britain's first successful counterstroke after Operación Rosario. Commonwealth forces retook the lightly defended dependency and demonstrated that the task force could fight at South Atlantic distance. The victory produced a public expectation of rapid liberation that the main Falklands defenses did not justify.",
    canon:"The May 1984 timing, British recapture, relatively light Argentine defense, role as an early morale victory, contrasting official interpretations, and contribution to pre-Second Torch confidence are established. Exact dates, British and Argentine units, ships, landing sites, engagements, casualties, prisoners, and command arrangements remain open.",
    sections:[
      {id:"position",title:"Strategic position",html:"<p>South Georgia lay far from the main East Falkland fortress and carried less Argentine military value. Its possession still mattered for legal continuity, navigation, weather, staging, and the visible claim that British authority was returning to the region.</p>"},
      {id:"defense",title:"Argentine defense",html:"<p>Argentina concentrated personnel, artillery, missiles, aircraft support, and engineering on the Falklands themselves. South Georgia received enough force to assert possession but too little to absorb the principal British counterattack.</p>"},
      {id:"operation",title:"British operation",html:"<p>The task force isolated the dependency and restored British control in May. The campaign confirmed that naval, marine, intelligence, and support elements could operate together after a long deployment from the Commonwealth system.</p>"},
      {id:"meaning",title:"A necessary early victory",html:"<p>The recapture gave Britain a success before the public had seen the full difficulty of the Falklands defenses. It helped sustain mobilization and demonstrated that the Argentine seizure would be contested rather than accepted as a completed fact.</p>"},
      {id:"london",title:"Interpretation in London",html:"<p>The Thatcher government presented South Georgia as the first stage of liberation. Submarine pressure upon the Argentine surface fleet and British control around the dependency made a Kuwait-like sequence appear possible: perimeter, enemy fleet, decisive landing.</p>"},
      {id:"buenos",title:"Interpretation in Buenos Aires",html:"<p>Argentina described the action as a peripheral raid against a lightly defended outpost. That claim was also partly true: the principal Argentine war plan centered upon Stanley, Mount Pleasant, East Falkland ridges, and the approaches to likely landing areas.</p>"},
      {id:"false",title:"The false dawn",html:"<p>Public confidence rose faster than British local superiority. South Georgia lacked the integrated air, missile, mine, artillery, electronic, submarine, and ground-defense system awaiting the fleet around East Falkland.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>The campaign remained a genuine British success. Its political danger came from treating a limited and favorable operation as proof that the harder campaign could be forced onto the same timetable. That expectation contributed to <a href='second-torch.html'>Second Torch</a>.</p>"}
    ],
    related:[{href:"operacion-rosario.html",kicker:"Argentine opening",label:"Operación Rosario"},{href:"second-torch.html",kicker:"Next major operation",label:"Second Torch"},{href:"margaret-thatcher.html",kicker:"Prime minister",label:"Margaret Thatcher"},{href:"commonwealth.html",kicker:"War system",label:"British Commonwealth"},{href:"falklands-war.html",kicker:"Wider conflict",label:"Falklands–Malvinas War"}],
    facts:[["Date","May 1984"],["Location","South Georgia"],["Attacker","Britain and Commonwealth forces"],["Defender","Argentina"],["Argentine priority","Main Falkland Islands"],["Result","British recapture"],["Immediate effect","Rise in British confidence"],["Strategic limit","Did not reduce East Falkland fortress"]]
  }),

  "second-torch": falklandsOpeningArticle({
    title:"Second Torch",
    eyebrow:"Failed British East Falkland landing · July 1984",
    infoboxKicker:"British amphibious disaster",
    landscape:{src:"assets/diagrams/second-torch.svg",alt:"Diagram of an East Falkland beachhead compressed by aircraft, anti-ship missiles, artillery, mines, electronic warfare and prepared infantry",caption:"The first major East Falkland lodgment failed inside an intact Argentine defensive envelope"},
    lead:"Second Torch was the name given to Britain's failed major landing on East Falkland in July 1984. The operation attempted to convert naval pressure and the recovery of South Georgia into a decisive lodgment before Argentine airfields, missiles, mines, artillery, submarines, and ground defenses had been reduced. Burning escorts and transports made the failure the defining political image of the war's first year.",
    canon:"The July 1984 timing, East Falkland objective, political pressure for early action, intact Argentine defensive network, failed or withdrawn lodgment, serious shipping losses, parliamentary crisis, ministerial resignation, Thatcher's acceptance of responsibility, and doctrinal reversal are established. Operation title, landing site, detailed plan, units, ships, losses, and exact confidence-vote count remain open.",
    sections:[
      {id:"name",title:"Name and historical analogy",html:"<p>The name compared the landing with the failed Allied North African expedition of the Second World War. Critics used the analogy for an amphibious operation ordered at the edge of air cover after political confidence outran local military superiority.</p>"},
      {id:"pressure",title:"Pressure for a decision",html:"<p>Winter approached, fleet endurance declined, Argentine fortifications improved, and London feared that a divided-island stalemate could become permanent. The public success at South Georgia reinforced the belief that the remaining issue was timing.</p>"},
      {id:"warnings",title:"Military warnings",html:"<p>Mount Pleasant still supported Argentine aircraft. Coastal missiles remained active, minefields and artillery were incompletely mapped, submarine contact was intermittent, helicopter lift was inadequate, and continuous air defense over the landing area could not be guaranteed.</p>"},
      {id:"landing",title:"The landing",html:"<p>British battalion elements reached shore under integrated air attack, missiles, artillery, mines, electronic warfare, and night-equipped infantry. A transport or landing ship was sunk or crippled, escorts suffered heavily, and reinforcement through the existing fire envelope proved unsustainable.</p>"},
      {id:"collapse",title:"Collapse of the lodgment",html:"<p>The beachhead was withdrawn or collapsed before it could expand. The operation was a costly failure rather than the annihilation of the landing force, preserving experienced troops while forfeiting the prospect of an early decision.</p>"},
      {id:"crisis",title:"Political crisis",html:"<p>Thatcher's government appeared capable of falling for roughly ten days. Denis Healey attacked the judgment behind the timetable, antiwar parties demanded settlement, and the imperial right blamed American limits upon mainland attack.</p>"},
      {id:"responsibility",title:"Ministerial responsibility",html:"<p>The Defence Secretary resigned. Thatcher accepted that resignation while stating that Cabinet and the prime minister owned the decision. She survived censure after promising classified opposition briefings, written objectives, a later inquiry, and greater protection of commanders from political operational pressure.</p>"},
      {id:"doctrine",title:"No Third Torch",html:"<p>The government adopted the rule that no operation should occur merely because delay was politically uncomfortable. The resulting <a href='no-third-torch-doctrine.html'>No Third Torch doctrine</a> redirected the war toward West Falkland infrastructure, blockade, attrition, and a later sustainable return to East Falkland.</p>"}
    ],
    related:[{href:"south-georgia-campaign-1984.html",kicker:"Preceding victory",label:"South Georgia Campaign"},{href:"west-falkland-lodgment.html",kicker:"Revised strategy",label:"West Falkland Lodgment"},{href:"no-third-torch-doctrine.html",kicker:"Doctrinal result",label:"No Third Torch Doctrine"},{href:"margaret-thatcher.html",kicker:"Prime minister",label:"Margaret Thatcher"},{href:"denis-healey.html",kicker:"Opposition critic",label:"Denis Healey"},{href:"falklands-commission.html",kicker:"Later inquiry",label:"Falklands Commission"}],
    facts:[["Date","July 1984"],["Location","East Falkland"],["Belligerents","Britain and Argentina"],["Type","Amphibious landing"],["Result","British lodgment failed"],["Principal cause","Intact integrated defensive network"],["Political effect","Government censure crisis"],["Doctrinal result","No Third Torch"]]
  }),

  "west-falkland-lodgment": falklandsOpeningArticle({
    title:"West Falkland lodgment",
    eyebrow:"British island-base campaign · August 1984–early 1985",
    infoboxKicker:"Revised British operational base",
    landscape:{src:"assets/diagrams/west-falkland-lodgment.svg",alt:"Diagram showing reconnaissance and bombardment leading to British control of Port Howard, Fox Bay, high ground, airstrip, repair and supply facilities",caption:"West Falkland converted the campaign from an expedition into a supported island war"},
    lead:"The West Falkland lodgment was the British base system established after the failure of Second Torch. Beginning in August 1984, Commonwealth forces attacked the thinner Argentine positions west of Falkland Sound, captured or isolated the principal settlements, and built artillery, air defense, helicopter, runway, repair, medical, and supply capacity for the later return to East Falkland.",
    canon:"The August–September 1984 opening, reconnaissance and bombardment, thinner Argentine defense, control or isolation of Port Howard and Fox Bay, high-ground capture, temporary airstrip, artillery, air defense, helicopters, repair and supply facilities, and possession of most of West Falkland by January 1985 are established. Operation name, detailed phases, units, losses, airstrip location, port works, and final local boundary remain open.",
    sections:[
      {id:"decision",title:"The West Falkland decision",html:"<p>Second Torch demonstrated that Britain could not yet sustain a beachhead inside the main East Falkland defense. Commanders selected West Falkland as ground where reconnaissance, bombardment, naval access, and a smaller Argentine presence could create local superiority.</p>"},
      {id:"argentine",title:"Argentine dispositions",html:"<p>Argentina had placed the majority of its personnel, air defense, artillery, engineering, radar, and stores around Stanley, Mount Pleasant, and the eastern ridges. Western positions provided warning and depth but were not designed as the principal fortress.</p>"},
      {id:"landing",title:"Landing and consolidation",html:"<p>Prolonged reconnaissance and bombardment preceded the British return. Port Howard, Fox Bay, adjacent high ground, and smaller positions were captured or isolated through a sequence of local actions rather than one decisive assault.</p>"},
      {id:"base",title:"The island base",html:"<p>Artillery, air-defense systems, helicopters, stores, repair facilities, medical support, and a temporary airstrip transformed possession into a viable lodgment. West Falkland shortened tactical distances even though every strategic replacement still crossed the Atlantic.</p>"},
      {id:"politics",title:"Political importance",html:"<p>The Union flag over part of the archipelago prevented Argentina from presenting Rosario as an uncontested recovery. It also gave Parliament a concrete reason to continue the war after the July disaster.</p>"},
      {id:"siege",title:"The divided archipelago",html:"<p>By January 1985 Britain held South Georgia and most of West Falkland. Argentina held Stanley, Mount Pleasant, the major East Falkland settlements, and the strongest ridges. Sea control varied with weather, submarines, aviation, and the risk of mainland escalation.</p>"},
      {id:"winter",title:"Infrastructure before movement",html:"<p>The lodgment made stores, pier repair, mine clearance, runway work, intelligence, weather, and convoy protection the campaign's decisive work. These activities attracted less attention than captured ground while determining whether a second East Falkland landing could survive.</p>"},
      {id:"legacy",title:"Operational legacy",html:"<p>West Falkland became the foundation for <a href='operation-winter-quay.html'>Winter Quay</a>, raids against the eastern warning system, and the later Crown Gate bridgehead. Its method embodied the No Third Torch rule that infrastructure had to precede political timetables.</p>"}
    ],
    related:[{href:"second-torch.html",kicker:"Strategic cause",label:"Second Torch"},{href:"south-atlantic-siege.html",kicker:"Resulting phase",label:"South Atlantic Siege"},{href:"operation-winter-quay.html",kicker:"1985 consolidation",label:"Operation Winter Quay"},{href:"operation-crown-gate.html",kicker:"East Falkland return",label:"Operation Crown Gate"},{href:"falklands-campaign-1985.html",kicker:"Operational successor",label:"1985 Falklands Campaign"}],
    facts:[["Begun","August 1984"],["Principal area","West Falkland"],["British objectives","Base, airstrip, repair, supply"],["Key settlements","Port Howard and Fox Bay"],["Argentine defense","Thinner than East Falkland"],["Method","Reconnaissance, bombardment, local actions"],["Position by January 1985","Most of West Falkland held"],["Successor operation","Winter Quay"]]
  }),

  "south-atlantic-siege": falklandsOpeningArticle({
    title:"South Atlantic siege",
    eyebrow:"Naval-air and divided-island campaign · late 1984–1986",
    infoboxKicker:"Prolonged phase of the Falklands War",
    landscape:{src:"assets/diagrams/south-atlantic-siege.svg",alt:"Logistics diagram showing Britain supplied across the Atlantic and Argentina supplied from the mainland into a divided Falkland archipelago",caption:"The siege was governed by two unequal supply lines, neither of which could be closed quickly"},
    lead:"The South Atlantic siege was the prolonged phase of the Falklands–Malvinas War after Britain secured West Falkland and Argentina retained the East Falkland fortress. It joined submarine blockade, air and missile attrition, covert resupply, runway construction, mine clearance, intelligence, repair, and limited ground operations. Neither side could obtain a quick decision, and both remained capable of preventing the other's political victory.",
    canon:"The divided-island geometry, late-1984 beginning, British and Argentine holdings, principal supply methods, inability to starve the garrison quickly, role of infrastructure and attrition, civilian and conscript risks, and continuation into the 1985–1986 campaign are established. Monthly shipping totals, interception rates, sortie counts, loss tables, local ration levels, and the exact date the phase ended remain open.",
    sections:[
      {id:"geometry",title:"A divided archipelago",html:"<p>Britain held South Georgia and most of West Falkland. Argentina retained Stanley, Mount Pleasant, the larger settlements, and the principal defensive ridges on East Falkland. Falkland Sound became a tactical boundary inside a much larger maritime battlespace.</p>"},
      {id:"british",title:"The British supply line",html:"<p>Every British replacement crossed the Atlantic through a Commonwealth system of ports, repair yards, tankers, requisitioned shipping, escorts, Cape facilities, and forward stores. Distance magnified each lost transport and each maintenance delay.</p>"},
      {id:"argentine",title:"The Argentine supply line",html:"<p>Argentina crossed several hundred miles from dispersed mainland fields and ports. Transport aircraft, low-altitude flights, submarines, fast vessels in poor weather, stored supplies, and local requisitioning prevented a rapid closure of the garrison.</p>"},
      {id:"blockade",title:"Limits of blockade",html:"<p>British submarines made surface reinforcement dangerous and West Falkland tightened the ring. A true starvation strategy still promised a campaign of a year or more and threatened island civilians and Argentine conscripts through hunger, disease, and winter exposure.</p>"},
      {id:"attrition",title:"Air, missile, and submarine attrition",html:"<p>Britain constrained Argentine major surface ships near mainland cover. Argentine aircraft, missiles, reconnaissance, submarines, and small naval units forced the fleet to disperse, maneuver, escort, and consume scarce air-defense and anti-submarine capacity.</p>"},
      {id:"infrastructure",title:"The untelevised campaign",html:"<p>Piers, airstrips, hospitals, fuel storage, weather forecasting, mine clearance, workshops, protected communications, and dry clothing decided endurance. Their political value was difficult to show beside dramatic footage of aircraft, burning ships, and contested hills.</p>"},
      {id:"outside",title:"Third-power restraint and assistance",html:"<p>American monitoring tried to contain German intervention and British mainland attack. Germany's covert <a href='operation-nachtbruecke.html'>Operation Nachtbrücke</a> sustained selected Argentine systems, while Chile's Plan Centinela kept substantial Argentine forces near the Andes.</p>"},
      {id:"end",title:"From siege to methodical victory",html:"<p>The siege changed the local balance enough for Crown Gate, Blackthorn, Sceptre, and the eventual isolation and capture of Stanley. British victory came from sustained access and repair rather than a single uncontested amphibious stroke.</p>"}
    ],
    related:[{href:"west-falkland-lodgment.html",kicker:"British base",label:"West Falkland Lodgment"},{href:"operation-nachtbruecke.html",kicker:"Covert resupply",label:"Operation Nachtbrücke"},{href:"plan-centinela.html",kicker:"Continental constraint",label:"Plan Centinela"},{href:"falklands-campaign-1985.html",kicker:"Ground campaign",label:"1985 Falklands Campaign"},{href:"south-atlantic-armed-mediation.html",kicker:"Escalation control",label:"South Atlantic Armed Mediation"}],
    facts:[["Period","Late 1984–1986"],["British base","West Falkland and South Georgia"],["Argentine fortress","East Falkland"],["British vulnerability","Transatlantic supply"],["Argentine vulnerability","Blockade and finite lift"],["Principal domains","Sea, air, logistics, limited ground combat"],["Outside constraint","American armed mediation"],["Outcome","Methodical British victory"]]
  }),

  "south-atlantic-armed-mediation": falklandsOpeningArticle({
    title:"South Atlantic armed mediation",
    eyebrow:"American containment policy · 1984–1986",
    infoboxKicker:"Hemispheric crisis-management policy",
    landscape:{src:"assets/diagrams/south-atlantic-armed-mediation.svg",alt:"Diagram placing American monitoring between Britain, Argentina and Germany with boundaries around mainland attack, third-power forces and war termination",caption:"Armed mediation used surveillance and military presence to keep a regional war inside finite limits"},
    lead:"South Atlantic armed mediation was the American policy imposed by President Pat Buchanan during the Falklands–Malvinas War and inherited by Ronald Reagan. Washington remained formally neutral while barring German state forces, limiting British attacks upon Argentina proper, policing mass-effect weapons and neutral shipping, monitoring approaches to the theater, and requiring a negotiated status based upon local self-government and demilitarization.",
    canon:"The Buchanan origin, public neutrality, private tilt against a German-backed Argentine fait accompli, exclusion of German state forces, restriction on British mainland war and regime change, American monitoring, mass-effect red line, local-government requirement, and Reagan succession are established. Exact rules changed in formulation during the war; patrol areas, embargo exceptions, intelligence channels, and enforcement orders remain open.",
    sections:[
      {id:"problem",title:"The American dilemma",html:"<p>Argentina lay inside the American hemisphere and rejected European colonial title. Britain remained the principal Atlantic barrier to German power. Washington therefore refused both automatic support for Buenos Aires and an unlimited British war.</p>"},
      {id:"buchanan",title:"Buchanan's policy",html:"<p>Buchanan described the posture as hemispheric armed mediation. American ships, aircraft, satellites, and intelligence entered the wider South Atlantic to observe, separate, warn, and contain rather than serve as an extension of either belligerent fleet.</p>"},
      {id:"germany",title:"The German boundary",html:"<p>German troops, military aircraft, warships, serving advisers, and covert combat formations were barred from the hemisphere. Equipment and commercial support remained contested categories, making Operation Nachtbrücke a continuing test of the line.</p>"},
      {id:"britain",title:"The British boundary",html:"<p>Britain could fight for the islands but could not invade Argentina, pursue regime change, or conduct a general strategic bombing campaign against the mainland. Immediate response to attacks originating there remained a narrower exception.</p>"},
      {id:"argentina",title:"The Argentine boundary",html:"<p>Chemical or biological use would trigger direct hemispheric intervention. Washington also rejected conquest as a sufficient title and watched for actions against neutral American and hemispheric shipping.</p>"},
      {id:"settlement",title:"War-termination condition",html:"<p>The final status had to include protected local self-government, demilitarization, and negotiation. This formula preserved an Argentine diplomatic claim while denying Washington authority to transfer unwilling inhabitants.</p>"},
      {id:"reagan",title:"Reagan's reformulation",html:"<p>Reagan inherited the policy in January 1985 and translated its difficult balance into the more public <a href='five-falklands-rules.html'>Five Falklands Rules</a>. The rules clarified conquest, rival penetration, mainland attack, German combat participation, and islander consent.</p>"},
      {id:"legacy",title:"Legacy",html:"<p>American intelligence tilted increasingly toward Britain as German assistance deepened, yet the limits upon British victory survived. The Punta del Este Protocols made the United States guarantor of a restrained settlement and armed mediation a model for the later armed concert.</p>"}
    ],
    related:[{href:"pat-buchanan.html",kicker:"Originating president",label:"Pat Buchanan"},{href:"five-falklands-rules.html",kicker:"Reagan reformulation",label:"Five Falklands Rules"},{href:"operation-nachtbruecke.html",kicker:"German challenge",label:"Operation Nachtbrücke"},{href:"punta-del-este-protocols.html",kicker:"Settlement",label:"Punta del Este Protocols"},{href:"armed-concert.html",kicker:"Later strategic order",label:"Armed Concert"}],
    facts:[["Period","1984–1986"],["Originating president","Pat Buchanan"],["Successor president","Ronald Reagan"],["Public posture","Neutral mediation"],["German forces","Excluded"],["British mainland war","Restricted"],["Argentine mass-effect weapons","Red line"],["Settlement principle","Self-government and demilitarization"]]
  })
});

const addFalklandsOpeningRelated = (id, items) => {
  const article = window.deepArticles[id];
  if (!article) return;
  article.related = article.related || [];
  for (const item of items) {
    if (!article.related.some(existing => existing.href === item.href)) article.related.push(item);
  }
};

addFalklandsOpeningRelated("margaret-thatcher", [{href:"second-torch.html",kicker:"Defining wartime failure",label:"Second Torch"},{href:"west-falkland-lodgment.html",kicker:"Revised campaign",label:"West Falkland Lodgment"}]);
addFalklandsOpeningRelated("denis-healey", [{href:"second-torch.html",kicker:"Wartime opposition",label:"Second Torch"}]);
addFalklandsOpeningRelated("pat-buchanan", [{href:"south-atlantic-armed-mediation.html",kicker:"Wartime policy",label:"South Atlantic Armed Mediation"}]);
addFalklandsOpeningRelated("ronald-reagan", [{href:"south-atlantic-armed-mediation.html",kicker:"Inherited crisis",label:"South Atlantic Armed Mediation"}]);
addFalklandsOpeningRelated("plan-centinela", [{href:"operacion-rosario.html",kicker:"Parallel Argentine operation",label:"Operación Rosario"},{href:"south-atlantic-siege.html",kicker:"Strategic effect",label:"South Atlantic Siege"}]);
addFalklandsOpeningRelated("no-third-torch-doctrine", [{href:"second-torch.html",kicker:"Originating disaster",label:"Second Torch"},{href:"west-falkland-lodgment.html",kicker:"First application",label:"West Falkland Lodgment"}]);
addFalklandsOpeningRelated("five-falklands-rules", [{href:"south-atlantic-armed-mediation.html",kicker:"Buchanan-era precursor",label:"South Atlantic Armed Mediation"}]);
addFalklandsOpeningRelated("falklands-campaign-1985", [{href:"west-falkland-lodgment.html",kicker:"Operational foundation",label:"West Falkland Lodgment"},{href:"south-atlantic-siege.html",kicker:"Campaign setting",label:"South Atlantic Siege"}]);
addFalklandsOpeningRelated("operation-nachtbruecke", [{href:"south-atlantic-siege.html",kicker:"Operational environment",label:"South Atlantic Siege"},{href:"south-atlantic-armed-mediation.html",kicker:"American boundary",label:"South Atlantic Armed Mediation"}]);
addFalklandsOpeningRelated("punta-del-este-protocols", [{href:"rio-formula.html",kicker:"Diplomatic precursor",label:"Rio Formula"},{href:"south-atlantic-armed-mediation.html",kicker:"American framework",label:"South Atlantic Armed Mediation"}]);
