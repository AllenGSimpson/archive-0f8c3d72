window.deepArticles = window.deepArticles || {};

const portugueseClassArticle = config => latinNavyArticle({
  title:config.title,
  eyebrow:`Marinha Portuguesa · ${config.type} · ${config.period}`,
  infoboxKicker:"Portuguese warship class",
  lead:config.lead,
  canon:config.canon,
  sections:config.sections,
  related:config.related,
  facts:config.facts,
  categories:[config.title,"Marinha Portuguesa","Portuguese warships","Naval history","Military technology"]
});

const portugueseClassRelated = [
  {href:"marinha-portuguesa-postwar.html",kicker:"Parent service",label:"Marinha Portuguesa"},
  {href:"latin-naval-system.html",kicker:"Allied fleet system",label:"Latin Naval System"},
  {href:"latin-naval-materiel-board.html",kicker:"Common interfaces",label:"Latin Naval Materiel Board"},
  {href:"portugal.html",kicker:"Sovereign state",label:"Portugal"}
];

const portugueseRoster = (ships, yearLabel="Registry year") => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Working registered ship</th><th>${yearLabel}</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active · provisional"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const portugueseOverview = window.deepArticles["marinha-portuguesa-postwar"];
if (portugueseOverview) {
  const classSection = portugueseOverview.sections.find(section => section.id === "classes");
  if (classSection) {
    classSection.html = classSection.html
      .replace("Infante Dom Henrique cruiser", "<a href='infante-dom-henrique-class-cruiser.html'>Infante Dom Henrique cruiser</a>")
      .replace("Bartolomeu Dias destroyer", "<a href='bartolomeu-dias-class-destroyer.html'>Bartolomeu Dias destroyer</a>")
      .replace("Pereira da Silva frigate", "<a href='pereira-da-silva-class-frigate.html'>Pereira da Silva frigate</a>")
      .replace("João Belo frigate", "<a href='joao-belo-class-frigate.html'>João Belo frigate</a>")
      .replace("João Coutinho/Baptista de Andrade corvette", "<a href='joao-coutinho-baptista-de-andrade-class-corvette.html'>João Coutinho/Baptista de Andrade corvette</a>")
      .replace("Albacora", "<a href='albacora-class-submarine.html'>Albacora</a>")
      .replace("Tridente", "<a href='tridente-class-submarine.html'>Tridente</a>");
  }
  const cruiserSection = portugueseOverview.sections.find(section => section.id === "cruiser");
  if (cruiserSection) cruiserSection.html = cruiserSection.html.replace("Infante Dom Henrique cruiser class", "<a href='infante-dom-henrique-class-cruiser.html'>Infante Dom Henrique cruiser class</a>");
  const escortSection = portugueseOverview.sections.find(section => section.id === "escorts");
  if (escortSection) {
    escortSection.html = escortSection.html
      .replace("Bartolomeu Dias-class destroyers", "<a href='bartolomeu-dias-class-destroyer.html'>Bartolomeu Dias-class destroyers</a>")
      .replace("Pereira da Silva", "<a href='pereira-da-silva-class-frigate.html'>Pereira da Silva</a>")
      .replace("João Belo", "<a href='joao-belo-class-frigate.html'>João Belo</a>");
  }
  const corvetteSection = portugueseOverview.sections.find(section => section.id === "corvettes");
  if (corvetteSection) corvetteSection.html = corvetteSection.html.replace("João Coutinho/Baptista de Andrade corvettes", "<a href='joao-coutinho-baptista-de-andrade-class-corvette.html'>João Coutinho/Baptista de Andrade corvettes</a>");
  const submarineSection = portugueseOverview.sections.find(section => section.id === "submarines");
  if (submarineSection) {
    submarineSection.html = submarineSection.html
      .replace("Albacora boats", "<a href='albacora-class-submarine.html'>Albacora boats</a>")
      .replace("Tridente boats", "<a href='tridente-class-submarine.html'>Tridente boats</a>");
  }
  portugueseOverview.related = [
    {href:"infante-dom-henrique-class-cruiser.html",kicker:"Task-group command",label:"Infante Dom Henrique Class"},
    {href:"bartolomeu-dias-class-destroyer.html",kicker:"Tropical missile escort",label:"Bartolomeu Dias Class"},
    {href:"pereira-da-silva-class-frigate.html",kicker:"Ocean ASW escort",label:"Pereira da Silva Class"},
    {href:"joao-belo-class-frigate.html",kicker:"Long-range escort",label:"João Belo Class"},
    {href:"joao-coutinho-baptista-de-andrade-class-corvette.html",kicker:"Oceanic patrol",label:"João Coutinho / Baptista de Andrade"},
    {href:"albacora-class-submarine.html",kicker:"Earlier conventional branch",label:"Albacora Class"},
    {href:"tridente-class-submarine.html",kicker:"Later conventional branch",label:"Tridente Class"},
    ...portugueseOverview.related
  ];
}

Object.assign(window.deepArticles, {
  "infante-dom-henrique-class-cruiser": portugueseClassArticle({
    title:"Infante Dom Henrique-class cruiser",type:"Task-group command cruiser",period:"1957–1985",
    lead:"The working Infante Dom Henrique register describes a two-ship Portuguese cruiser program comprising <em>Infante Dom Henrique</em> and <em>Vasco da Gama</em>. The later transcript directly establishes that Portugal's second cruiser was operational by 1960. The names, 1957 first-hull date, 11,500-tonne reference displacement, machinery, task-group role, and 1985 allocation remain provisional.",
    canon:"Portugal's cruiser capability and the second cruiser's operational status by 1960 are established. The Infante Dom Henrique class label, two names, 1957 first-hull date, 11,500-tonne reference displacement, steam-turbine propulsion, Atlantic and African task-group-command role, Portuguese construction, and one-active/one-reserve 1985 allocation remain provisional. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class provided a national command ship for routes extending from metropolitan Portugal to the Atlantic islands, West and southern Africa, Brazil, and the Indian Ocean. It preceded Portugal's later missile destroyer program.</p>"},
      {id:"ships",title:"Ships",html:portugueseRoster([["Infante Dom Henrique","1957","Mobilization reserve · provisional"],["Vasco da Gama","1960","Active · provisional"]],"Working year")},
      {id:"design",title:"Design",html:"<p>The working design assigns 11,500 tonnes full load and steam-turbine propulsion. The register does not establish dimensions, speed, range, armor, weapons, sensors, aviation facilities, or complement.</p>"},
      {id:"command",title:"Command facilities",html:"<p>The ships served as command platforms for Atlantic and African task groups. Staff spaces, communications, plotting facilities, and accommodation were part of the operational role, but their arrangement and equipment remain unspecified.</p>"},
      {id:"operations",title:"Operations",html:"<p>The class supported escort groups, patrol forces, amphibious movements, and naval presence along separated Portuguese routes. Particular cruises and crisis deployments are not fixed.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Common communications, replenishment, rescue, and maintenance interfaces allowed the cruisers to work with Italian, Spanish, and Occitan units. Operational command remained Portuguese.</p>"},
      {id:"reserve",title:"Reserve status",html:"<p><em>Infante Dom Henrique</em> was retained in mobilization reserve by 1985. Its readiness, preservation standard, reserve crew, and reactivation time are open.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-a3c7e writer=g kind=revision created=2026-08-15T15:31:00-06:00 --><p>The working register assigns <em>Vasco da Gama</em> to active service and <em>Infante Dom Henrique</em> to reserve. Those names and 1985 states remain provisional; the later transcript establishes only that Portugal's second cruiser was operational by 1960.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...portugueseClassRelated,{href:"bartolomeu-dias-class-destroyer.html",kicker:"Later fleet escort",label:"Bartolomeu Dias Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Type","Working task-group cruiser"],["Working ships","2 provisional"],["Working names","Infante Dom Henrique · Vasco da Gama"],["Directly established","Second cruiser operational by 1960"],["Reference full load","11,500 t"],["Working propulsion","Steam turbines"],["Active, 1985","1 provisional"],["Reserve, 1985","1 provisional"]]
  }),

  "bartolomeu-dias-class-destroyer": portugueseClassArticle({
    title:"Bartolomeu Dias-class destroyer",type:"Long-range tropical missile escort",period:"1975–1985",
    lead:"The working Bartolomeu Dias register describes a Portuguese long-range missile-destroyer program in the 1975–1983 reference band. Its six hulls, names, 5,200-tonne reference displacement, gas-turbine machinery, and 1985 allocation remain provisional.",
    canon:"Portugal's destroyer capability, the Bartolomeu Dias design family, 1975–1983 reference band, 5,200-tonne reference displacement, and long-range tropical escort requirement are retained. The six-ship total, individual names and dates, propulsion, Portuguese construction, and six-active 1985 allocation remain provisional. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, range, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class replaced older escort capacity with a gas-turbine destroyer suited to Portugal's separated Atlantic and African commitments. It entered service after the Latin Naval Materiel Board had established common interface work.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Évora","1975"],["Beja","1976"],["Leiria","1978"],["Santarém","1979"],["Guarda","1981"],["Viseu","1982"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 5,200 tonnes full load; the working register assigns gas turbines. Tropical and long-range service are retained requirements. Exact range, accommodation, cooling, weapons, sensors, aviation, speed, dimensions, and crew are open.</p>"},
      {id:"escort",title:"Escort role",html:"<p>The ships escorted cruisers, amphibious groups, auxiliaries, and convoys and supplied guided-weapon defense against aircraft, ships, and submarines.</p>"},
      {id:"tropical",title:"Tropical service",html:"<p>Operations connected Iberian bases with Cape Verde, Guinea, Angola, Mozambique, and Indian Ocean routes. Maintenance, ventilation, stores, freshwater, and crew accommodation formed part of sustained tropical service, although detailed standards are not fixed.</p>"},
      {id:"names",title:"Naming",html:"<p>The six working registry names are Portuguese inland and coastal cities. Hull numbers and squadron assignments remain administrative details not established in the class reference.</p>"},
      {id:"frigates",title:"Escort force",html:"<p>The working destroyer branch operated above the <a href='pereira-da-silva-class-frigate.html'>Pereira da Silva</a> and <a href='joao-belo-class-frigate.html'>João Belo</a> frigate branches. Their combined sixteen-active-escort allocation remains provisional.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-b5d9f writer=g kind=revision created=2026-08-15T15:32:00-06:00 --><p>The current register assigns six named ships to active service. The total, roster, dates, propulsion, construction, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...portugueseClassRelated,{href:"infante-dom-henrique-class-cruiser.html",kicker:"Command layer",label:"Infante Dom Henrique Class"},{href:"joao-belo-class-frigate.html",kicker:"Long-range frigate",label:"João Belo Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Type","Long-range missile destroyer"],["Working ships","6 provisional"],["Reference band","1975–1983"],["Reference full load","5,200 t"],["Working propulsion","Gas turbines"],["Service requirement","Long-range tropical escort"],["Active, 1985","6 provisional"],["Hull-name status","Working register"]]
  }),

  "pereira-da-silva-class-frigate": portugueseClassArticle({
    title:"Pereira da Silva-class frigate",type:"Ocean ASW escort",period:"1958–1985",
    lead:"The working Pereira da Silva register describes Portugal's earlier postwar ocean anti-submarine frigate generation in the 1958–1967 reference band. The eight-hull total, names, 2,800-tonne reference displacement, machinery, and four-active/four-decommissioned 1985 allocation remain provisional.",
    canon:"Portugal's frigate and ocean anti-submarine-escort capability, the Pereira da Silva design family, 1958–1967 reference band, and 2,800-tonne reference displacement are retained. The eight-ship total, diesel propulsion, Portuguese construction, individual names and dates, and four-active/four-decommissioned 1985 allocation remain provisional. Dimensions, speed, weapons, sensors, aviation, crew, builders, refits, deployments, decommissioning dates, and dispositions remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied the first large postwar Portuguese ocean-escort program. Diesel machinery supported patrol and convoy work across routes that could not rely on closely spaced bases.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Pedro Álvares Cabral","1958","Decommissioned · provisional"],["Duarte Pacheco Pereira","1959","Decommissioned · provisional"],["Tristão da Cunha","1960","Decommissioned · provisional"],["João de Castro","1961","Decommissioned · provisional"],["Nuno Tristão","1963"],["Diogo Cão","1964"],["Fernão de Magalhães","1965"],["Gil Eanes","1966"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 2,800 tonnes full load; the working register assigns diesel propulsion. Sonar, weapons, aviation facilities, speed, range, dimensions, and complement are not specified.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>The frigates escorted shipping, searched approaches, and worked with patrol aircraft, shore stations, and other escorts. Exact sensor and weapon fits remain open.</p>"},
      {id:"patrol",title:"Ocean patrol",html:"<p>Patrol work covered metropolitan approaches, Atlantic islands, African routes, and local convoy lanes. The class could be assigned independently or within groups led by cruisers and later destroyers.</p>"},
      {id:"names",title:"Naming",html:"<p>The working hull names honor Portuguese navigators and imperial-era figures. Individual hull numbers and home ports are not fixed.</p>"},
      {id:"replacement",title:"João Belo class",html:"<p>The working <a href='joao-belo-class-frigate.html'>João Belo</a> branch follows in the reference register from 1967. The four-decommissioned/four-active Pereira da Silva split and the six later active frigates remain provisional allocations.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-c7g3j writer=g kind=revision created=2026-08-15T15:33:00-06:00 --><p>The working register assigns four named ships to active service and four to decommissioned status. The total, roster, dates, propulsion, construction, and individual dispositions remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...portugueseClassRelated,{href:"joao-belo-class-frigate.html",kicker:"Successor generation",label:"João Belo Class"},{href:"albacora-class-submarine.html",kicker:"ASW environment",label:"Albacora Class"}],
    facts:[["Type","Ocean ASW frigate"],["Working ships","8 provisional"],["Reference band","1958–1967"],["Reference full load","2,800 t"],["Working propulsion","Diesel"],["Active, 1985","4 provisional"],["Decommissioned by 1985","4 provisional"],["Hull-name status","Working register"]]
  }),

  "joao-belo-class-frigate": portugueseClassArticle({
    title:"João Belo-class frigate",type:"Long-range escort",period:"1967–1985",
    lead:"The working João Belo register describes a Portuguese long-range frigate program in the 1967–1975 reference band. Its six-hull total, names, 3,800-tonne reference displacement, machinery, and 1985 allocation remain provisional.",
    canon:"Portugal's frigate capability, the João Belo design family, 1967–1975 reference band, 3,800-tonne reference displacement, and long-range escort role are retained. The six-ship total, diesel propulsion, Portuguese construction, individual names and dates, and six-active 1985 allocation remain provisional. Dimensions, speed, weapons, sensors, aviation, crew, builders, range, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the smaller Pereira da Silva frigates and increased the weight of Portugal's ocean escort force while retaining diesel propulsion.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Diogo Gomes","1967"],["António de Abreu","1968"],["Francisco de Almeida","1970"],["Martim Afonso de Sousa","1971"],["Garcia de Orta","1973"],["Damião de Góis","1974"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 3,800 tonnes full load; the working register assigns diesel propulsion. The long-range escort role is retained; exact endurance, weapons, sensors, aviation, speed, dimensions, machinery arrangement, and crew are open.</p>"},
      {id:"escort",title:"Escort duties",html:"<p>The frigates protected merchant traffic, auxiliaries, and amphibious formations and supported patrol, surveillance, and anti-submarine work across Portuguese routes.</p>"},
      {id:"routes",title:"Operating areas",html:"<p>Assignments could include the Azores and Madeira, Cape Verde, the African coast, the Cape route, and approaches to Mozambique. Specific deployments remain unsettled.</p>"},
      {id:"names",title:"Naming",html:"<p>The working registry uses names of navigators, administrators, soldiers, and learned figures. Hull numbers and squadron organization are open.</p>"},
      {id:"force",title:"Frigate force",html:"<p>The working register combines six João Belo ships with four active <a href='pereira-da-silva-class-frigate.html'>Pereira da Silva</a> ships. That ten-active-frigate allocation remains provisional.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-d9i5l writer=g kind=revision created=2026-08-15T15:34:00-06:00 --><p>The current register assigns six named ships to active service. The total, roster, dates, propulsion, construction, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...portugueseClassRelated,{href:"pereira-da-silva-class-frigate.html",kicker:"Earlier generation",label:"Pereira da Silva Class"},{href:"bartolomeu-dias-class-destroyer.html",kicker:"Destroyer screen",label:"Bartolomeu Dias Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Type","Long-range frigate"],["Working ships","6 provisional"],["Reference band","1967–1975"],["Reference full load","3,800 t"],["Working propulsion","Diesel"],["Active, 1985","6 provisional"],["Hull-name status","Working register"],["Construction","Provisional"]]
  }),

  "joao-coutinho-baptista-de-andrade-class-corvette": portugueseClassArticle({
    title:"João Coutinho / Baptista de Andrade-class corvette",type:"Oceanic patrol corvette",period:"1968–1985",
    lead:"The working João Coutinho / Baptista de Andrade register describes a Portuguese oceanic patrol-corvette program in the 1968–1982 reference band. The combined-class treatment, ten-hull total, names, 1,600-tonne reference displacement, machinery, and 1985 allocation remain provisional.",
    canon:"Portugal's armed ocean-patrol and convoy-escort capability, the João Coutinho and Baptista de Andrade design families, 1968–1982 reference band, and 1,600-tonne reference displacement are retained. The combined-class treatment, ten-ship total, diesel propulsion, Portuguese construction, individual names and dates, and ten-active 1985 allocation remain provisional. The division between the subgroups, dimensions, speed, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The naval class register uses the combined form João Coutinho/Baptista de Andrade. It does not yet assign individual hulls to separate subgroups or define the technical changes between them.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Madeira","1968"],["Porto Santo","1969"],["Santa Maria","1971"],["São Miguel","1972"],["Terceira","1974"],["Graciosa","1975"],["São Jorge","1977"],["Pico","1978"],["Faial","1980"],["Flores","1981"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 1,600 tonnes full load; the working register assigns diesel propulsion. Armed ocean patrol and convoy escort are retained roles, while weapons, sensors, speed, range, dimensions, machinery arrangement, and crew remain open.</p>"},
      {id:"patrol",title:"Patrol service",html:"<p>The corvettes maintained presence, inspected shipping, escorted local convoys, and supported surveillance around islands and African routes.</p>"},
      {id:"convoy",title:"Convoy escort",html:"<p>The ships supplemented frigates on routes where a larger escort was unnecessary or unavailable. Shore aircraft, communications stations, auxiliaries, and local port services supported their work.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names comprise Madeira and nine Atlantic islands: Porto Santo, Santa Maria, São Miguel, Terceira, Graciosa, São Jorge, Pico, Faial, and Flores.</p>"},
      {id:"fleet",title:"Place in the fleet",html:"<p>The working ten-corvette allocation supplies Portugal's active corvette category in the comparative register. The total is provisional; mine-warfare craft and smaller patrol vessels are counted separately.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-e2k7n writer=g kind=revision created=2026-08-15T15:35:00-06:00 --><p>The current register assigns ten named corvettes to active service. The combined lineage, total, roster, dates, propulsion, construction, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...portugueseClassRelated,{href:"joao-belo-class-frigate.html",kicker:"Larger ocean escort",label:"João Belo Class"},{href:"cape-route.html",kicker:"Patrol geography",label:"Cape Route"}],
    facts:[["Type","Oceanic patrol corvette"],["Working ships","10 provisional"],["Reference band","1968–1982"],["Reference full load","1,600 t"],["Working propulsion","Diesel"],["Roles","Armed patrol · convoy escort"],["Active, 1985","10 provisional"],["Hull-name status","Working register"]]
  }),

  "albacora-class-submarine": portugueseClassArticle({
    title:"Albacora-class submarine",type:"Conventional attack submarine",period:"1964–1985",
    lead:"The Albacora generation of Portuguese conventional attack submarines began entering service in 1964, as the later transcript directly establishes. The working register's six-boat total, names, 1964–1972 band, 1,900-tonne reference displacement, machinery, and four-active/two-decommissioned 1985 allocation remain provisional.",
    canon:"The Albacora submarine generation and its entry into service beginning in 1964 are established. The six-boat total, later program dates, 1,900-tonne reference displacement, diesel-electric propulsion, ocean-attack role, Portuguese construction, individual names and dates, and four-active/two-decommissioned 1985 allocation remain provisional. Dimensions, speed, weapons, sensors, crew, builders, endurance, refits, patrols, decommissioning dates, and dispositions remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class established Portugal's postwar ocean-going submarine force. It provided attack, reconnaissance, barrier-patrol, and training capacity across Atlantic approaches and island routes.</p>"},
      {id:"registry",title:"Registered boats",html:portugueseRoster([["Albacora","1964","Decommissioned · provisional"],["Barracuda","1965","Decommissioned · provisional"],["Cachalote","1967"],["Narval","1968"],["Tridente","1970"],["Neptuno","1971"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 1,900 tonnes submerged; the working register assigns diesel-electric propulsion. Weapons, sensors, batteries, speed, range, endurance, dimensions, and complement remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The boats patrolled ocean approaches, observed shipping lanes, supported exercises, and provided opposition forces for Portuguese and Latin anti-submarine units.</p>"},
      {id:"support",title:"Support",html:"<p>Submarine operations depended on metropolitan and island ports, repair facilities, communications, intelligence, patrol aircraft, and surface escorts.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names draw from marine animals and older Portuguese submarine naming practice. Individual hull numbers and home ports are not fixed.</p>"},
      {id:"replacement",title:"Tridente class",html:"<p>The working <a href='tridente-class-submarine.html'>Tridente</a> branch follows in the reference register from 1975. The two-decommissioned/four-active Albacora split and four later active boats remain provisional allocations.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-f4m9p writer=g kind=revision created=2026-08-15T15:36:00-06:00 --><p>The working register assigns four named boats to active service and two to decommissioned status. Those totals, names, later dates, specifications, and dispositions remain provisional; the 1964 beginning of the Albacora generation is established.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...portugueseClassRelated,{href:"tridente-class-submarine.html",kicker:"Successor generation",label:"Tridente Class"},{href:"pereira-da-silva-class-frigate.html",kicker:"ASW counterpart",label:"Pereira da Silva Class"}],
    facts:[["Type","Conventional attack submarine"],["Working boats","6 provisional"],["Established entry","Begins in 1964"],["Reference displacement","1,900 t submerged"],["Working propulsion","Diesel-electric"],["Active, 1985","4 provisional"],["Decommissioned by 1985","2 provisional"],["Hull-name status","Working register"]]
  }),

  "tridente-class-submarine": portugueseClassArticle({
    title:"Tridente-class submarine",type:"Conventional attack submarine",period:"1975–1985",
    lead:"The working Tridente register describes Portugal's later conventional attack-submarine branch in the 1975–1983 reference band. Its four-boat total, names, 2,600-tonne reference displacement, machinery, collaborative detail, and 1985 allocation remain provisional.",
    canon:"Portugal's conventional-submarine and Latin-interoperability capabilities, the Tridente design family, 1975–1983 reference band, and 2,600-tonne reference displacement are retained. The four-boat total, diesel-electric propulsion, detailed collaborative role, Portuguese construction, individual names and dates, and four-active 1985 allocation remain provisional. Dimensions, speed, weapons, sensors, crew, builders, endurance, collaborative-system details, refits, patrols, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the smaller Albacora boats and entered service during the mature period of Latin naval interface work. It retained conventional propulsion for Portugal's regional and ocean-route missions.</p>"},
      {id:"registry",title:"Registered boats",html:portugueseRoster([["Tubarão","1975"],["Moreia","1977"],["Marlim","1979"],["Atum","1981"]])},
      {id:"design",title:"Registered design",html:"<p>The reference design assigns 2,600 tonnes submerged; the working register assigns diesel-electric propulsion. Weapons, sensors, batteries, speed, range, endurance, dimensions, and complement are not specified.</p>"},
      {id:"attack",title:"Attack role",html:"<p>The boats conducted conventional attack, surveillance, reconnaissance, and barrier patrols along Atlantic and African routes.</p>"},
      {id:"collaboration",title:"Latin collaboration",html:"<p>The registered collaborative role covered compatible communications, identification, logistics, rescue, and tactical information. National authorities retained operational command and patrol authorization.</p>"},
      {id:"names",title:"Naming",html:"<p>The working registry names—Tubarão, Moreia, Marlim, and Atum—continue the service's marine-animal naming practice.</p>"},
      {id:"force",title:"Submarine force",html:"<p>The working register combines four Tridente boats with four active <a href='albacora-class-submarine.html'>Albacora</a> boats. That eight-boat allocation remains provisional; Portugal's established branch is conventional rather than nuclear.</p>"},
      {id:"status",title:"Status in 1985",html:"<!-- altwwii-writer-block:start id=wb-g-20260815-g6p2r writer=g kind=revision created=2026-08-15T15:37:00-06:00 --><p>The current register assigns four named boats to active service. The total, roster, dates, propulsion, construction, collaborative detail, and individual readiness remain provisional.</p><!-- altwwii-writer-block:end -->"}
    ],
    related:[...portugueseClassRelated,{href:"albacora-class-submarine.html",kicker:"Earlier generation",label:"Albacora Class"},{href:"bartolomeu-dias-class-destroyer.html",kicker:"Surface counterpart",label:"Bartolomeu Dias Class"}],
    facts:[["Type","Conventional attack submarine"],["Working boats","4 provisional"],["Reference band","1975–1983"],["Reference displacement","2,600 t submerged"],["Working propulsion","Diesel-electric"],["Operational system","Latin collaborative · provisional detail"],["Active, 1985","4 provisional"],["Hull-name status","Working register"]]
  })
});
