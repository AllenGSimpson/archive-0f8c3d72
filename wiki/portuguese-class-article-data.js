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

const portugueseRoster = (ships, yearLabel="Registry year") => `<div class='table-wrap'><table class='wiki-table'><thead><tr><th>Ship</th><th>${yearLabel}</th><th>Status, 1985</th></tr></thead><tbody>${ships.map(([name,year,status="Active"]) => `<tr><td>${name}</td><td>${year}</td><td>${status}</td></tr>`).join("")}</tbody></table></div>`;

const portugueseOverview = window.deepArticles["marinha-portuguesa-postwar"];
if (portugueseOverview) {
  portugueseOverview.canon = "Portugal's strategic routes, class totals, introduction bands, displacements, registered capabilities, 1985 category totals, 57-active-ship total, second-rank oceanic status, national naming practices, and Latin interoperability are established. The two Infante Dom Henrique-class cruiser names are explicit canon; the later escort and submarine hull names are registered extrapolations. Fleet commands, base distribution, deployments, readiness, budgets, exact weapons and sensors, builders by hull, refits, and most individual service histories remain open.";
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
    lead:"The Infante Dom Henrique class was a two-ship Portuguese cruiser class comprising <em>Infante Dom Henrique</em> and <em>Vasco da Gama</em>. The 11,500-tonne steam-turbine ships entered service in 1957 and 1960 for Atlantic and African task-group command. <em>Vasco da Gama</em> was active in 1985; the lead ship remained in mobilization reserve.",
    canon:"The two ships and names, 1957 and 1960 commissioning years, 11,500-tonne full-load displacement, steam-turbine propulsion, Atlantic and African task-group-command role, Portuguese construction, one active ship, and one reserve ship are established. The controlling 1960 date for Vasco da Gama supersedes the asset registry's interim 1959 row. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class provided a national command ship for routes extending from metropolitan Portugal to the Atlantic islands, West and southern Africa, Brazil, and the Indian Ocean. It preceded Portugal's later missile destroyer program.</p>"},
      {id:"ships",title:"Ships",html:portugueseRoster([["Infante Dom Henrique","1957","Mobilization reserve"],["Vasco da Gama","1960","Active"]],"Commissioned")},
      {id:"design",title:"Design",html:"<p>Each ship displaced 11,500 tonnes at full load and used steam turbines. The register does not establish dimensions, speed, range, armor, weapons, sensors, aviation facilities, or complement.</p>"},
      {id:"command",title:"Command facilities",html:"<p>The ships served as command platforms for Atlantic and African task groups. Staff spaces, communications, plotting facilities, and accommodation were part of the operational role, but their arrangement and equipment remain unspecified.</p>"},
      {id:"operations",title:"Operations",html:"<p>The class supported escort groups, patrol forces, amphibious movements, and naval presence along separated Portuguese routes. Particular cruises and crisis deployments are not fixed.</p>"},
      {id:"latin",title:"Latin interoperability",html:"<p>Common communications, replenishment, rescue, and maintenance interfaces allowed the cruisers to work with Italian, Spanish, and Occitan units. Operational command remained Portuguese.</p>"},
      {id:"reserve",title:"Reserve status",html:"<p><em>Infante Dom Henrique</em> was retained in mobilization reserve by 1985. Its readiness, preservation standard, reserve crew, and reactivation time are open.</p>"},
      {id:"status",title:"Status in 1985",html:"<p><em>Vasco da Gama</em> accounted for Portugal's single active cruiser. <em>Infante Dom Henrique</em> remained in reserve.</p>"}
    ],
    related:[...portugueseClassRelated,{href:"bartolomeu-dias-class-destroyer.html",kicker:"Later fleet escort",label:"Bartolomeu Dias Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Type","Task-group command cruiser"],["Ships built","2"],["Ships","Infante Dom Henrique · Vasco da Gama"],["Commissioned","1957 · 1960"],["Full load","11,500 t"],["Propulsion","Steam turbines"],["Active, 1985","1"],["Reserve, 1985","1"]]
  }),

  "bartolomeu-dias-class-destroyer": portugueseClassArticle({
    title:"Bartolomeu Dias-class destroyer",type:"Long-range tropical missile escort",period:"1975–1985",
    lead:"The Bartolomeu Dias class was a six-ship Portuguese long-range missile-destroyer class introduced during the 1975–1983 program band. The 5,200-tonne gas-turbine ships were designed for tropical escort service. All six remained active in 1985.",
    canon:"The six-ship total, 1975–1983 introduction band, 5,200-tonne full-load displacement, gas-turbine propulsion, long-range tropical missile-escort role, Portuguese construction, and six active ships are established. The individual hull names and registry year sequence are extrapolations; the controlling introduction band supersedes the interim row dates. Dimensions, speed, machinery arrangement, weapons, sensors, aviation, crew, builders, range, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class replaced older escort capacity with a gas-turbine destroyer suited to Portugal's separated Atlantic and African commitments. It entered service after the Latin Naval Materiel Board had established common interface work.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Évora","1975"],["Beja","1976"],["Leiria","1978"],["Santarém","1979"],["Guarda","1981"],["Viseu","1982"]])},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 5,200 tonnes at full load and used gas turbines. Tropical and long-range service are fixed requirements. Exact range, accommodation, cooling, weapons, sensors, aviation, speed, dimensions, and crew are open.</p>"},
      {id:"escort",title:"Escort role",html:"<p>The ships escorted cruisers, amphibious groups, auxiliaries, and convoys and supplied guided-weapon defense against aircraft, ships, and submarines.</p>"},
      {id:"tropical",title:"Tropical service",html:"<p>Operations connected Iberian bases with Cape Verde, Guinea, Angola, Mozambique, and Indian Ocean routes. Maintenance, ventilation, stores, freshwater, and crew accommodation formed part of sustained tropical service, although detailed standards are not fixed.</p>"},
      {id:"names",title:"Naming",html:"<p>The six working registry names are Portuguese inland and coastal cities. Hull numbers and squadron assignments remain administrative details not established in the class reference.</p>"},
      {id:"frigates",title:"Escort force",html:"<p>The destroyers operated above the <a href='pereira-da-silva-class-frigate.html'>Pereira da Silva</a> and <a href='joao-belo-class-frigate.html'>João Belo</a> frigates. Together these classes supplied sixteen active destroyers and frigates.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six registered ships were active. Individual readiness, home ports, and deployment cycles remain open.</p>"}
    ],
    related:[...portugueseClassRelated,{href:"infante-dom-henrique-class-cruiser.html",kicker:"Command layer",label:"Infante Dom Henrique Class"},{href:"joao-belo-class-frigate.html",kicker:"Long-range frigate",label:"João Belo Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Type","Long-range missile destroyer"],["Ships built","6"],["Introduction","1975–1983"],["Full load","5,200 t"],["Propulsion","Gas turbines"],["Service requirement","Long-range tropical escort"],["Active, 1985","6"],["Hull-name status","Registered extrapolation"]]
  }),

  "pereira-da-silva-class-frigate": portugueseClassArticle({
    title:"Pereira da Silva-class frigate",type:"Ocean ASW escort",period:"1958–1985",
    lead:"The Pereira da Silva class was an eight-ship Portuguese ocean anti-submarine frigate class introduced during the 1958–1967 program band. The 2,800-tonne diesel ships formed Portugal's earlier postwar frigate generation. Four remained active in 1985 and four had been decommissioned.",
    canon:"The eight-ship total, 1958–1967 introduction band, 2,800-tonne full-load displacement, diesel propulsion, ocean anti-submarine-escort role, Portuguese construction, and four active ships are established. The individual hull names, registry year sequence, and identification of the four decommissioned hulls are extrapolated registry detail; the controlling introduction band supersedes the interim row dates. Dimensions, speed, weapons, sensors, aviation, crew, builders, refits, deployments, decommissioning dates, and dispositions remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class supplied the first large postwar Portuguese ocean-escort program. Diesel machinery supported patrol and convoy work across routes that could not rely on closely spaced bases.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Pedro Álvares Cabral","1958","Decommissioned"],["Duarte Pacheco Pereira","1959","Decommissioned"],["Tristão da Cunha","1960","Decommissioned"],["João de Castro","1961","Decommissioned"],["Nuno Tristão","1963"],["Diogo Cão","1964"],["Fernão de Magalhães","1965"],["Gil Eanes","1966"]])},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 2,800 tonnes at full load and used diesel propulsion. Sonar, weapons, aviation facilities, speed, range, dimensions, and complement are not specified.</p>"},
      {id:"asw",title:"Anti-submarine warfare",html:"<p>The frigates escorted shipping, searched approaches, and worked with patrol aircraft, shore stations, and other escorts. Exact sensor and weapon fits remain open.</p>"},
      {id:"patrol",title:"Ocean patrol",html:"<p>Patrol work covered metropolitan approaches, Atlantic islands, African routes, and local convoy lanes. The class could be assigned independently or within groups led by cruisers and later destroyers.</p>"},
      {id:"names",title:"Naming",html:"<p>The working hull names honor Portuguese navigators and imperial-era figures. Individual hull numbers and home ports are not fixed.</p>"},
      {id:"replacement",title:"João Belo class",html:"<p>The larger <a href='joao-belo-class-frigate.html'>João Belo class</a> followed from 1967. Four Pereira da Silva ships left service while four remained active beside all six later frigates.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Nuno Tristão, Diogo Cão, Fernão de Magalhães, and Gil Eanes were active in the working register. The earlier four hulls were decommissioned; their final dispositions are open.</p>"}
    ],
    related:[...portugueseClassRelated,{href:"joao-belo-class-frigate.html",kicker:"Successor generation",label:"João Belo Class"},{href:"albacora-class-submarine.html",kicker:"ASW environment",label:"Albacora Class"}],
    facts:[["Type","Ocean ASW frigate"],["Ships built","8"],["Introduction","1958–1967"],["Full load","2,800 t"],["Propulsion","Diesel"],["Active, 1985","4"],["Decommissioned by 1985","4 · working registry"],["Hull-name status","Registered extrapolation"]]
  }),

  "joao-belo-class-frigate": portugueseClassArticle({
    title:"João Belo-class frigate",type:"Long-range escort",period:"1967–1985",
    lead:"The João Belo class was a six-ship Portuguese long-range frigate class introduced during the 1967–1975 program band. All six 3,800-tonne diesel escorts remained active in 1985.",
    canon:"The six-ship total, 1967–1975 introduction band, 3,800-tonne full-load displacement, diesel propulsion, long-range escort role, Portuguese construction, and six active ships are established. The individual hull names and registry year sequence are extrapolations; the controlling introduction band supersedes the interim row dates. Dimensions, speed, weapons, sensors, aviation, crew, builders, range, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the smaller Pereira da Silva frigates and increased the weight of Portugal's ocean escort force while retaining diesel propulsion.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Diogo Gomes","1967"],["António de Abreu","1968"],["Francisco de Almeida","1970"],["Martim Afonso de Sousa","1971"],["Garcia de Orta","1973"],["Damião de Góis","1974"]])},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 3,800 tonnes at full load and used diesel propulsion. The long-range escort role is fixed; exact endurance, weapons, sensors, aviation, speed, dimensions, machinery arrangement, and crew are open.</p>"},
      {id:"escort",title:"Escort duties",html:"<p>The frigates protected merchant traffic, auxiliaries, and amphibious formations and supported patrol, surveillance, and anti-submarine work across Portuguese routes.</p>"},
      {id:"routes",title:"Operating areas",html:"<p>Assignments could include the Azores and Madeira, Cape Verde, the African coast, the Cape route, and approaches to Mozambique. Specific deployments remain unsettled.</p>"},
      {id:"names",title:"Naming",html:"<p>The working registry uses names of navigators, administrators, soldiers, and learned figures. Hull numbers and squadron organization are open.</p>"},
      {id:"force",title:"Frigate force",html:"<p>Six João Belo ships and four active <a href='pereira-da-silva-class-frigate.html'>Pereira da Silva</a> ships supplied ten active frigates in 1985.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All six registered ships were active. Individual readiness and current stations are not fixed.</p>"}
    ],
    related:[...portugueseClassRelated,{href:"pereira-da-silva-class-frigate.html",kicker:"Earlier generation",label:"Pereira da Silva Class"},{href:"bartolomeu-dias-class-destroyer.html",kicker:"Destroyer screen",label:"Bartolomeu Dias Class"},{href:"cape-route.html",kicker:"Operating geography",label:"Cape Route"}],
    facts:[["Type","Long-range frigate"],["Ships built","6"],["Introduction","1967–1975"],["Full load","3,800 t"],["Propulsion","Diesel"],["Active, 1985","6"],["Hull-name status","Registered extrapolation"],["Construction","Portugal"]]
  }),

  "joao-coutinho-baptista-de-andrade-class-corvette": portugueseClassArticle({
    title:"João Coutinho / Baptista de Andrade-class corvette",type:"Oceanic patrol corvette",period:"1968–1985",
    lead:"The João Coutinho / Baptista de Andrade designation covered ten Portuguese oceanic patrol corvettes introduced during the 1968–1982 program band. All ten 1,600-tonne diesel ships remained active in 1985. The working registry treats the two names as one combined class lineage.",
    canon:"The combined ten-ship total, 1968–1982 introduction band, 1,600-tonne full-load displacement, diesel propulsion, armed ocean-patrol and convoy-escort role, Portuguese construction, and ten active ships are established. The combined-class treatment, individual hull names, and registry year sequence are working extrapolations; the controlling introduction band supersedes the interim row dates. The division between João Coutinho and Baptista de Andrade subgroups, dimensions, speed, weapons, sensors, aviation, crew, builders, refits, deployments, and detailed service histories remain open.",
    sections:[
      {id:"designation",title:"Designation",html:"<p>The naval class register uses the combined form João Coutinho/Baptista de Andrade. It does not yet assign individual hulls to separate subgroups or define the technical changes between them.</p>"},
      {id:"registry",title:"Registered ships",html:portugueseRoster([["Madeira","1968"],["Porto Santo","1969"],["Santa Maria","1971"],["São Miguel","1972"],["Terceira","1974"],["Graciosa","1975"],["São Jorge","1977"],["Pico","1978"],["Faial","1980"],["Flores","1981"]])},
      {id:"design",title:"Registered design",html:"<p>Each ship displaced 1,600 tonnes at full load and used diesel propulsion. The register fixes armed ocean patrol and convoy escort but leaves weapons, sensors, speed, range, dimensions, machinery arrangement, and crew open.</p>"},
      {id:"patrol",title:"Patrol service",html:"<p>The corvettes maintained presence, inspected shipping, escorted local convoys, and supported surveillance around islands and African routes.</p>"},
      {id:"convoy",title:"Convoy escort",html:"<p>The ships supplemented frigates on routes where a larger escort was unnecessary or unavailable. Shore aircraft, communications stations, auxiliaries, and local port services supported their work.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names comprise Madeira and nine Atlantic islands: Porto Santo, Santa Maria, São Miguel, Terceira, Graciosa, São Jorge, Pico, Faial, and Flores.</p>"},
      {id:"fleet",title:"Place in the fleet",html:"<p>The ten corvettes supplied Portugal's complete active corvette category in the comparative 1985 balance. Mine-warfare craft and smaller patrol vessels are counted separately.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All ten registered ships were active. Individual readiness, stations, and patrol cycles remain open.</p>"}
    ],
    related:[...portugueseClassRelated,{href:"joao-belo-class-frigate.html",kicker:"Larger ocean escort",label:"João Belo Class"},{href:"cape-route.html",kicker:"Patrol geography",label:"Cape Route"}],
    facts:[["Type","Oceanic patrol corvette"],["Ships built","10"],["Introduction","1968–1982"],["Full load","1,600 t"],["Propulsion","Diesel"],["Roles","Armed patrol · convoy escort"],["Active, 1985","10"],["Hull-name status","Registered extrapolation"]]
  }),

  "albacora-class-submarine": portugueseClassArticle({
    title:"Albacora-class submarine",type:"Conventional attack submarine",period:"1964–1985",
    lead:"The Albacora class was a six-boat Portuguese conventional attack-submarine class introduced during the 1964–1972 program band. Four of the 1,900-tonne submerged diesel-electric boats remained active in 1985; two had been decommissioned.",
    canon:"The six-boat total, 1964–1972 introduction band, 1,900-tonne submerged displacement, diesel-electric propulsion, ocean-attack role, Portuguese construction, and four active boats are established. The hull names, registry year sequence, and identification of the two decommissioned boats are extrapolated registry detail; the controlling introduction band supersedes the interim row dates. Dimensions, speed, weapons, sensors, crew, builders, endurance, refits, patrols, decommissioning dates, and dispositions remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class established Portugal's postwar ocean-going submarine force. It provided attack, reconnaissance, barrier-patrol, and training capacity across Atlantic approaches and island routes.</p>"},
      {id:"registry",title:"Registered boats",html:portugueseRoster([["Albacora","1964","Decommissioned"],["Barracuda","1965","Decommissioned"],["Cachalote","1967"],["Narval","1968"],["Tridente","1970"],["Neptuno","1971"]])},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 1,900 tonnes submerged and used diesel-electric propulsion. Weapons, sensors, batteries, speed, range, endurance, dimensions, and complement remain open.</p>"},
      {id:"operations",title:"Operations",html:"<p>The boats patrolled ocean approaches, observed shipping lanes, supported exercises, and provided opposition forces for Portuguese and Latin anti-submarine units.</p>"},
      {id:"support",title:"Support",html:"<p>Submarine operations depended on metropolitan and island ports, repair facilities, communications, intelligence, patrol aircraft, and surface escorts.</p>"},
      {id:"names",title:"Naming",html:"<p>The working names draw from marine animals and older Portuguese submarine naming practice. Individual hull numbers and home ports are not fixed.</p>"},
      {id:"replacement",title:"Tridente class",html:"<p>The larger <a href='tridente-class-submarine.html'>Tridente class</a> followed from 1975. Two Albacora boats left service while four remained active beside the four later boats.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>Cachalote, Narval, Tridente, and Neptuno were active in the working register. Albacora and Barracuda were decommissioned; their final dispositions are open.</p>"}
    ],
    related:[...portugueseClassRelated,{href:"tridente-class-submarine.html",kicker:"Successor generation",label:"Tridente Class"},{href:"pereira-da-silva-class-frigate.html",kicker:"ASW counterpart",label:"Pereira da Silva Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats built","6"],["Introduction","1964–1972"],["Submerged displacement","1,900 t"],["Propulsion","Diesel-electric"],["Active, 1985","4"],["Decommissioned by 1985","2 · working registry"],["Hull-name status","Registered extrapolation"]]
  }),

  "tridente-class-submarine": portugueseClassArticle({
    title:"Tridente-class submarine",type:"Conventional attack submarine",period:"1975–1985",
    lead:"The Tridente class was a four-boat Portuguese conventional attack-submarine class introduced during the 1975–1983 program band. All four 2,600-tonne submerged diesel-electric boats remained active in 1985. The class was registered for collaborative operation within the Latin naval system.",
    canon:"The four-boat total, 1975–1983 introduction band, 2,600-tonne submerged displacement, diesel-electric propulsion, Latin collaborative attack-submarine role, Portuguese construction, and four active boats are established. The individual hull names and registry year sequence are extrapolations; the controlling introduction band supersedes the interim row dates. Dimensions, speed, weapons, sensors, crew, builders, endurance, collaborative-system details, refits, patrols, and detailed service histories remain open.",
    sections:[
      {id:"development",title:"Development",html:"<p>The class followed the smaller Albacora boats and entered service during the mature period of Latin naval interface work. It retained conventional propulsion for Portugal's regional and ocean-route missions.</p>"},
      {id:"registry",title:"Registered boats",html:portugueseRoster([["Tubarão","1975"],["Moreia","1977"],["Marlim","1979"],["Atum","1981"]])},
      {id:"design",title:"Registered design",html:"<p>Each boat displaced 2,600 tonnes submerged and used diesel-electric propulsion. Weapons, sensors, batteries, speed, range, endurance, dimensions, and complement are not specified.</p>"},
      {id:"attack",title:"Attack role",html:"<p>The boats conducted conventional attack, surveillance, reconnaissance, and barrier patrols along Atlantic and African routes.</p>"},
      {id:"collaboration",title:"Latin collaboration",html:"<p>The registered collaborative role covered compatible communications, identification, logistics, rescue, and tactical information. National authorities retained operational command and patrol authorization.</p>"},
      {id:"names",title:"Naming",html:"<p>The working registry names—Tubarão, Moreia, Marlim, and Atum—continue the service's marine-animal naming practice.</p>"},
      {id:"force",title:"Submarine force",html:"<p>Four Tridente boats and four active <a href='albacora-class-submarine.html'>Albacora</a> boats supplied Portugal's eight conventional submarines. Portugal did not operate nuclear submarines.</p>"},
      {id:"status",title:"Status in 1985",html:"<p>All four registered boats were active. Individual readiness and patrol status remain open.</p>"}
    ],
    related:[...portugueseClassRelated,{href:"albacora-class-submarine.html",kicker:"Earlier generation",label:"Albacora Class"},{href:"bartolomeu-dias-class-destroyer.html",kicker:"Surface counterpart",label:"Bartolomeu Dias Class"}],
    facts:[["Type","Conventional attack submarine"],["Boats built","4"],["Introduction","1975–1983"],["Submerged displacement","2,600 t"],["Propulsion","Diesel-electric"],["Operational system","Latin collaborative"],["Active, 1985","4"],["Hull-name status","Registered extrapolation"]]
  })
});
