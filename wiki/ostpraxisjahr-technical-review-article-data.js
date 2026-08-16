(function(){
  const article=window.deepArticles&&window.deepArticles["ostpraxisjahr"];
  if(!article) return;

  const append=(id,html)=>{
    const section=article.sections&&article.sections.find(item=>item.id===id);
    if(section) section.html+=html;
  };

  append("supervision",`<!-- altwwii-writer-block:start id=wb-s-20260816-c3h8u writer=s kind=technical created=2026-08-16T14:03:00-06:00 --><p>Supervision distinguished participation from release authority. A trainee could inspect, measure, calculate, prepare a work package, and perform a bounded task after instruction and demonstrated competence. The appointed engineer, works manager, inspector, or other competent supervisor retained authority for work permits, hazardous-energy isolation, acceptance of measurements, critical settings, commissioning, and return to service.</p><p>Responsibility varied with the installation. Bridge alignment, protective-relay settings, pressure-boundary repairs, pipeline hot work, energized electrical work, signaling changes, and safety-system bypasses required explicit authorization and independent checks. Time served did not by itself qualify a trainee to approve them.</p><!-- altwwii-writer-block:end -->`);

  append("fieldwork",`<!-- altwwii-writer-block:start id=wb-s-20260816-d4j9v writer=s kind=technical created=2026-08-16T14:03:00-06:00 --><p>Credible field instruction began with equipment identity, current drawings, known defects, energy sources, isolation state, environmental hazards, parts and instruments, and the criteria by which the task would be accepted. The trainee learned to compare the documented condition with the installation, verify isolation, record as-found measurements, control removed parts and tools, and conduct tests in an authorized sequence.</p><p>Commissioning restored energy in defined steps while personnel, temporary equipment, valve or switch positions, alarms, interlocks, and test instruments were accounted for. An improvised repair carried an operating limit, inspection interval, and expiry or permanent-disposition requirement. A hose, jumper, bypass, substituted component, or temporary setpoint could not remain indefinitely merely because the equipment resumed operation.</p><!-- altwwii-writer-block:end -->`);

  append("certification",`<!-- altwwii-writer-block:start id=wb-s-20260816-e5k1w writer=s kind=technical created=2026-08-16T14:03:00-06:00 --><p>Recognition required evidence of educational work as well as attendance. A usable record identified dates, hours, departments or sites, supervised tasks, tools and instruments, measurements, sketches or calculations, safety instruction, deviations, and the trainee's own technical observations. Host supervisors confirmed the work and absences; the Altreich school, examination office, or professional body decided whether the record met its curriculum.</p><p>This division prevented a host enterprise from granting professional credit solely because it had obtained a year of labor. Incomplete reports, excessive repetition of one low-skill task, unverified attendance, unsafe conduct, or missing curriculum areas could require supplementary work or repetition. The archive does not establish common forms, appeal rules, or the amount of remedial service.</p><!-- altwwii-writer-block:end -->`);

  append("knowledge",`<!-- altwwii-writer-block:start id=wb-s-20260816-f6m2x writer=s kind=technical created=2026-08-16T14:03:00-06:00 --><p>The Altreich design boundary depended upon configuration records rather than geography alone. Eastern personnel documented the as-found condition, marked field dimensions and connections, recorded failed parts and operating history, and submitted deviations or change proposals. Work inside an approved repair or adjustment envelope could remain local; changes to structural capacity, protection logic, pressure limits, control software, interfaces, or design life returned to the responsible design authority.</p><p>Approval then had to reach the physical plant and its documents together. Revised drawings, setpoint lists, procedures, spare-parts records, inspection requirements, and training material followed an accepted change, while rejected and temporary changes remained traceable. This allowed field experience to influence later design without treating every expedient repair as a new standard.</p><!-- altwwii-writer-block:end -->`);

  article.sources=article.sources||[];
  for(const item of [
    {href:"https://www.verw.tu-dresden.de/amtbek/PDF-Dateien/2004-01/12prako27.11.2003.pdf",label:"Technische Universität Dresden — practical-training records, reports, and employer certification"},
    {href:"https://www.maschinenbau.rwth-aachen.de/cms/maschinenbau/studium/studierende/praktikantenamt/how-to-/~skwqw/praktikumsbericht/",label:"RWTH Aachen — engineering-practice report and supervisor confirmation"},
    {href:"https://www.energy.gov/sites/default/files/2026-04/DOE-STD-1073-2016.pdf",label:"United States Department of Energy — facility configuration and change control"},
    {href:"https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147",label:"United States Occupational Safety and Health Administration — control of hazardous energy"}
  ]) if(!article.sources.some(existing=>existing.href===item.href)) article.sources.push(item);

  article.facts=article.facts||[];
  const facts=new Map(article.facts);
  facts.set("Trainee authority","Task-limited; operational release remained with a competent supervisor");
  facts.set("Practice evidence","Activity record, technical report, host confirmation, and Altreich recognition");
  facts.set("Field-to-design record","As-found measurements, failure reports, marked drawings, and change proposals");
  article.facts=Array.from(facts.entries());
})();
