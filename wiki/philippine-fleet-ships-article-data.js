window.deepArticles = window.deepArticles || {};

const philippineFleetShipSources = [
  {href:"../navalArmamentsReference%20-%20AltWWII.md",label:"Naval Armaments Reference — Philippine Independence Fleet registry"},
  {href:"../questionsAndConfirmations%20-%20AltWWII.md",label:"Questions and Confirmations — P1-08 predecessor reconciliation"},
  {href:"../settingBible%20-%20AltWWII.md",label:"Setting Bible — Philippine settlement and Independence Fleet"},
  {href:"../settingTimeline%20-%20AltWWII.md",label:"Setting Timeline — 1960 fleet transfer"},
  {href:"../transcript.md",label:"Master Transcript — transfer terms, refits, missions, and political purpose"}
];

const philippineFleetShipRelated = [
  {href:"philippine-independence-fleet.html",kicker:"Parent formation",label:"Philippine Independence Fleet"},
  {href:"philippines.html",kicker:"Flag state",label:"Philippine Republic"},
  {href:"isidro-cabahug.html",kicker:"Operational advocate",label:"Isidro Cabahug"},
  {href:"japan.html",kicker:"Transferor",label:"Empire of Japan"}
];

const destroyerMissionText = "The destroyer served as a patrol and surface-combat conversion. Its expected work included escorting transports, patrolling the Sulu and South China seas, conducting antisubmarine exercises, supporting amphibious forces, and representing the republic in combined exercises and foreign ports. It was a respectable regional combatant, not a peer of Japan's newest fleet units.";
const escortMissionText = "The escort performed the fleet's less glamorous daily work: coastal and fisheries patrol, smuggling interdiction, convoy escort, rescue, hydrographic support, typhoon response, and training. Its lower operating burden made it more useful to a young navy than prestige alone would suggest.";

const fleetShipArticle = config => ({
  title:`BRP ${config.name}`,
  category:"Naval ships",
  eyebrow:`Philippine Navy · ${config.hull} · commissioned June 1960`,
  infoboxKicker:config.type,
  infoboxTitle:`BRP ${config.name}`,
  flag:{src:"assets/flags/philippines.svg",alt:"Flag of the Philippines",caption:"The ship commissioned under Philippine colors and exclusive Philippine command"},
  lead:`BRP ${config.name} (${config.hull}) was a ${config.type.toLowerCase()} of the Philippine Navy and one of the eight principal ships of the Philippine Independence Fleet. The former IJN ${config.predecessor}, a ${config.className}, was transferred outright by Japan in June 1960 after refit and entered service without lien, repayment, Japanese command, or right of reversion.`,
  canon:`The predecessor identity, Philippine name and hull number, class, June 1960 outright transfer, full-load displacement, standard Philippine complement, retained armament, role, and Philippine ownership are established. The ${config.retirement} decommissioning is a working registry reconstruction. Construction details, wartime service after the 1941 divergence, refit yard and dates, commanding officers, deployments, incidents, and final disposal remain open.`,
  sections:[
    {id:"predecessor",title:`IJN ${config.predecessor}`,html:`<p>${config.predecessor} was a ${config.className} retained in Japanese service through the postwar transition of this timeline. Its detailed wartime and immediate postwar record has not been fixed and cannot be imported unchanged from histories shaped by a different Pacific War.</p><p>By 1960 it was no longer a first-line Japanese unit, but remained sufficiently serviceable to form part of a credible allied fleet after overhaul.</p>`},
    {id:"name",title:`Philippine name and hull number`,html:`<p>${config.nameText}</p><p>The hull number <strong>${config.hull}</strong> placed the ship within the republic's own registry. Japanese names and pennant practice did not remain in use beneath Philippine colors.</p>`},
    {id:"selection",title:"Selection for the Independence Fleet",html:`<p>Captain <a href='isidro-cabahug.html'>Isidro Cabahug</a> argued for a balanced package containing a flagship, combatants, and economical escorts rather than one ceremonial cruiser. ${config.selectionText}</p><p>Tokyo accepted the transfer as a purchase of durable Philippine association rather than a sale of surplus steel.</p>`},
    {id:"refit",title:"Refit for Philippine service",html:`<p>${config.refitText}</p><p>Japan funded the pre-delivery overhaul, initial ammunition, spare machinery, three years of maintenance support, crew training, shore workshops, and naval engineering education. Sensitive current-generation Japanese systems were not included.</p>`},
    {id:"transfer",title:"Transfer and commission",html:`<p>The principal handover occurred on Philippine Independence Day in June 1960. Japanese crews lowered their ensign before Filipino sailors raised national colors; the ship had already been renamed and repainted.</p><p>Invited Japanese instructors could remain aboard, but held no command appointment. The Philippine government possessed the unrestricted right to deploy, refit, retire, or scrap the vessel.</p>`},
    {id:"service",title:"Philippine service",html:`<p>${config.missionText}</p><p>${config.serviceText}</p>`},
    {id:"training",title:"Institution-building role",html:`<p>Operating the ship trained navigators, engineers, signal personnel, gunners, damage-control teams, logisticians, and dockyard workers. An old hull's maintenance demands were part of the institution-building program rather than an incidental burden.</p><p>Shared machinery within its group supported common schooling, spares, crew rotation, and shore tooling.</p>`},
    {id:"retirement",title:"Decommissioning and legacy",html:`<p>The registry places decommissioning in ${config.retirement}, an orderly working reconstruction intended to pass trained personnel into replacement vessels. The precise ceremony, reserve period, and final disposal are not yet established.</p><p>${config.legacyText}</p>`}
  ],
  related:[...philippineFleetShipRelated,...config.related],
  sources:philippineFleetShipSources,
  categories:[`BRP ${config.name}`,"Philippine Independence Fleet","Philippine Navy",config.classCategory,"Ships transferred from Japan"],
  facts:[["Hull number",config.hull],["Former name",`IJN ${config.predecessor}`],["Class",config.className],["Commissioned","June 1960"],["Full-load displacement",config.displacement],["Standard complement",config.complement],["Principal retained armament",config.armament],["Decommissioned",`${config.retirement} (working reconstruction)`]]
});

const destroyer = config => fleetShipArticle({
  type:"Fleet destroyer / escort conversion",
  className:"Kagerō-class destroyer",
  classCategory:"Kagerō-class destroyers",
  displacement:"2,500 t",
  complement:"220",
  armament:"Six 127 mm guns · four 610 mm torpedo tubes · AA · sonar · depth charges",
  selectionText:"The three destroyers were deliberately drawn from one class so boilers, turbines, guns, electrical equipment, training, spares, and dockyard tooling could be shared.",
  refitText:"The Kagerō-class ships were converted toward escort and patrol work. One torpedo mounting was removed or permanently deactivated while radar, sonar, depth charges, antiaircraft weapons, communications, accommodation, firefighting, and damage control were improved.",
  missionText:destroyerMissionText,
  ...config
});

const escort = config => fleetShipArticle({
  type:"Ocean escort",
  className:"Ukuru-class kaibōkan",
  classCategory:"Ukuru-class escorts",
  displacement:"1,020 t",
  complement:"140",
  armament:"Three 120 mm guns · AA · sonar · depth charges",
  selectionText:"The four Ukuru-class escorts gave the transfer an economical working core. Common class machinery and weapons simplified the first Philippine maintenance and training system.",
  refitText:"Japanese yards refurbished the escort for patrol, rescue, and antisubmarine instruction, retaining three 120 mm guns while modernizing the antiaircraft battery, sonar, depth-charge equipment, communications, accommodation, firefighting, and damage control.",
  missionText:escortMissionText,
  ...config
});

Object.assign(window.deepArticles, {
  "brp-lapu-lapu": fleetShipArticle({
    name:"Lapu-Lapu",hull:"CL-1",predecessor:"Tama",type:"Light cruiser; fleet flagship and training cruiser",className:"Kuma-class light cruiser",classCategory:"Kuma-class cruisers",displacement:"7,100 t",complement:"400",armament:"Five 140 mm guns · modernized AA · sonar · depth charges",retirement:"1975",
    nameText:"The name honored Lapu-Lapu as a pre-Spanish, pre-American, maritime, and anti-colonial figure associated with Cebu, where Philippine entry into the Co-Prosperity system was formalized. As the first flagship, the choice asserted a national history older than either American or Japanese patronage.",
    selectionText:"The elderly Tama supplied the command spaces, endurance, accommodation, and ceremonial weight needed for a national flagship even though it could not contest a modern first-line fleet.",
    refitText:"Tama received a limited command-and-training conversion rather than an attempt at complete modernization. Five 140 mm guns remained; obsolete torpedo equipment and inefficient wartime fittings were reduced while antiaircraft weapons, search and navigation radar, sonar, depth charges, communications, cadet spaces, critical-space air conditioning, firefighting, and damage control were improved.",
    missionText:"Lapu-Lapu was a fleet school with guns. It commanded patrol groups, trained officers and engineers, provided gunfire and low-threat convoy support, represented the republic in combined exercises, and offered workshops, boats, communications, and large internal spaces for disaster relief.",
    serviceText:"Its principal effect was political: a Philippine delegation could arrive at a combined naval conference aboard a Philippine cruiser under a Philippine admiral. The flagship made associated sovereignty physically visible without implying parity with the Imperial Japanese Navy.",
    legacyText:"Lapu-Lapu established the fleet's command, engineering, cadet, and ceremonial traditions. Its significance lay less in a battle record than in making the navy legible to Philippine citizens and foreign partners.",
    related:[{href:"brp-andres-bonifacio.html",kicker:"Destroyer division",label:"BRP Andrés Bonifacio"},{href:"brp-samar.html",kicker:"Escort division",label:"BRP Samar"},{href:"baguio-manila-settlement.html",kicker:"Sovereignty settlement",label:"Baguio Truce and Manila Accords"}]
  }),

  "brp-andres-bonifacio": destroyer({
    name:"Andrés Bonifacio",hull:"DD-1",predecessor:"Shiranui",retirement:"1976",
    nameText:"The ship honored Andrés Bonifacio, revolutionary organizer and founder of the Katipunan. Assigning the name to DD-1 placed a Filipino revolutionary figure at the head of the destroyer force rather than preserving an inherited Japanese identity.",
    serviceText:"As DD-1, Andrés Bonifacio naturally served as the senior registry ship of the three-destroyer group, although its commanding officers, squadron appointments, and individual deployments remain open.",
    legacyText:"Its paired significance was operational and symbolic: it gave the republic a fast combatant while associating the new professional navy with a foundational Philippine revolutionary tradition.",
    related:[{href:"brp-antonio-luna.html",kicker:"Sister ship",label:"BRP Antonio Luna"},{href:"brp-diego-silang.html",kicker:"Sister ship",label:"BRP Diego Silang"},{href:"brp-lapu-lapu.html",kicker:"Fleet flagship",label:"BRP Lapu-Lapu"}]
  }),

  "brp-antonio-luna": destroyer({
    name:"Antonio Luna",hull:"DD-2",predecessor:"Kuroshio",retirement:"1977",
    nameText:"The name honored General Antonio Luna and linked the destroyer to a tradition of disciplined national military organization. DD-2 was commissioned as a Philippine ship in its own right, not as Kuroshio temporarily carrying another flag.",
    serviceText:"Antonio Luna formed the common destroyer group with Andrés Bonifacio and Diego Silang. Its comparatively late working retirement in 1977 makes it the last of the three sisters to leave service and a likely bridge into their replacement generation.",
    legacyText:"The ship's common machinery and long reconstructed service made it especially useful for preserving destroyer skills after the other transferred combatants began retiring.",
    related:[{href:"brp-andres-bonifacio.html",kicker:"Sister ship",label:"BRP Andrés Bonifacio"},{href:"brp-diego-silang.html",kicker:"Sister ship",label:"BRP Diego Silang"},{href:"brp-lapu-lapu.html",kicker:"Fleet flagship",label:"BRP Lapu-Lapu"}]
  }),

  "brp-diego-silang": destroyer({
    name:"Diego Silang",hull:"DD-3",predecessor:"Hatsukaze",retirement:"1975",
    nameText:"The ship honored Diego Silang, the eighteenth-century Ilocano revolutionary leader. Its name widened the destroyer division's commemorative geography beyond Manila and made regional resistance part of the republic's naval tradition.",
    serviceText:"Diego Silang shared the standardized destroyer training and patrol burden. The 1975 working retirement places it alongside flagship Lapu-Lapu in the fleet's first major replacement transition.",
    legacyText:"The vessel helped turn a transferred Japanese class into a Philippine destroyer school whose personnel, procedures, and maintenance knowledge outlasted the hull.",
    related:[{href:"brp-andres-bonifacio.html",kicker:"Sister ship",label:"BRP Andrés Bonifacio"},{href:"brp-antonio-luna.html",kicker:"Sister ship",label:"BRP Antonio Luna"},{href:"brp-lapu-lapu.html",kicker:"Fleet flagship",label:"BRP Lapu-Lapu"}]
  }),

  "brp-samar": escort({
    name:"Samar",hull:"DE-1",predecessor:"Chikubu",retirement:"1971",
    nameText:"The geographic name Samar associated the first ocean escort with a major island and wartime region of the eastern Philippines. Together with Leyte, Palawan, and Mindoro, it made the escort division a map of the republic rather than a memorial to Japanese service.",
    serviceText:"As DE-1, Samar headed the escort registry and likely bore an early share of the instructional burden. Its exact patrols and commands remain open, but its type was central to making the fleet function between ceremonial events.",
    legacyText:"Samar was the first of the eight principal transferred ships to leave service under the working reconstruction. Its trained crew and maintenance cadres could move into later patrol and escort vessels.",
    related:[{href:"brp-leyte.html",kicker:"Sister escort",label:"BRP Leyte"},{href:"brp-palawan.html",kicker:"Sister escort",label:"BRP Palawan"},{href:"brp-mindoro.html",kicker:"Sister escort",label:"BRP Mindoro"}]
  }),

  "brp-leyte": escort({
    name:"Leyte",hull:"DE-2",predecessor:"Shisaka",retirement:"1972",
    nameText:"The ship took the name Leyte, placing a central Visayan island and sea corridor in the fleet registry. The quartet of geographic escort names emphasized inter-island service and national territorial connection.",
    serviceText:"Leyte operated within the common Ukuru-class group, where interchangeable schooling and spares mattered more than individual prestige. Its routine escort, rescue, and patrol work expressed the fleet's practical sovereignty.",
    legacyText:"The working 1972 retirement continued the annual replacement sequence begun with Samar, allowing the navy to absorb new hulls without losing an entire escort generation at once.",
    related:[{href:"brp-samar.html",kicker:"Sister escort",label:"BRP Samar"},{href:"brp-palawan.html",kicker:"Sister escort",label:"BRP Palawan"},{href:"brp-mindoro.html",kicker:"Sister escort",label:"BRP Mindoro"}]
  }),

  "brp-palawan": escort({
    name:"Palawan",hull:"DE-3",predecessor:"Habushi",retirement:"1973",
    nameText:"The name Palawan connected the escort division to the republic's long western island facing the South China Sea. It suited a vessel intended for patrol, rescue, and inter-island presence along politically and commercially important waters.",
    serviceText:"Palawan's type was well matched to western patrol, but no permanent station or exact deployment is yet established. Its documented role remains the common escort mission rather than a conjectural individual cruise history.",
    legacyText:"Its working 1973 retirement marks the middle of the escort replacement cycle and preserves the principle that the Philippines, not Japan, decided when a gifted warship had completed its service.",
    related:[{href:"brp-samar.html",kicker:"Sister escort",label:"BRP Samar"},{href:"brp-leyte.html",kicker:"Sister escort",label:"BRP Leyte"},{href:"brp-mindoro.html",kicker:"Sister escort",label:"BRP Mindoro"}]
  }),

  "brp-mindoro": escort({
    name:"Mindoro",hull:"DE-4",predecessor:"Kōzu",retirement:"1974",
    nameText:"The ship took the name Mindoro, completing the escort division's Philippine geographic naming scheme. The national name, DE-4 registry, and Philippine command signaled a permanent transfer rather than the loan of Kōzu.",
    serviceText:"Mindoro served in the same patrol, escort, rescue, hydrographic, and training economy as its sisters. Its later working retirement made it the last Ukuru-class ship in the founding group to leave service.",
    legacyText:"By 1974 the escort quartet had completed a staggered retirement. What remained was a Philippine cadre able to specify, maintain, and command successor vessels without treating Japanese advisers as permanent owners of the institution.",
    related:[{href:"brp-samar.html",kicker:"Sister escort",label:"BRP Samar"},{href:"brp-leyte.html",kicker:"Sister escort",label:"BRP Leyte"},{href:"brp-palawan.html",kicker:"Sister escort",label:"BRP Palawan"}]
  })
});

if (window.deepArticles["philippine-independence-fleet"]) {
  const fleet = window.deepArticles["philippine-independence-fleet"];
  const ships = [
    ["brp-lapu-lapu.html","Flagship","BRP Lapu-Lapu"],
    ["brp-andres-bonifacio.html","Destroyer · DD-1","BRP Andrés Bonifacio"],
    ["brp-antonio-luna.html","Destroyer · DD-2","BRP Antonio Luna"],
    ["brp-diego-silang.html","Destroyer · DD-3","BRP Diego Silang"],
    ["brp-samar.html","Ocean escort · DE-1","BRP Samar"],
    ["brp-leyte.html","Ocean escort · DE-2","BRP Leyte"],
    ["brp-palawan.html","Ocean escort · DE-3","BRP Palawan"],
    ["brp-mindoro.html","Ocean escort · DE-4","BRP Mindoro"]
  ];
  const existing = new Set((fleet.related || []).map(item => item.href));
  fleet.related = [...(fleet.related || []),...ships.filter(item => !existing.has(item[0])).map(([href,kicker,label]) => ({href,kicker,label}))];
  const shipSection = (fleet.sections || []).find(section => section.id === "ships");
  if (shipSection) {
    const links = [
      ["Lapu-Lapu","brp-lapu-lapu.html"],["AndrÃ©s Bonifacio","brp-andres-bonifacio.html"],
      ["Antonio Luna","brp-antonio-luna.html"],["Diego Silang","brp-diego-silang.html"],
      ["Samar","brp-samar.html"],["Leyte","brp-leyte.html"],["Palawan","brp-palawan.html"],["Mindoro","brp-mindoro.html"]
    ];
    for (const [name,href] of links) shipSection.html = shipSection.html.replace(`<em>${name}</em>`,`<a href='${href}'><em>${name}</em></a>`);
  }
}
