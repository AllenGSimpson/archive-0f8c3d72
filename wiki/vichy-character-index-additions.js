(()=>{
  const before=document.getElementById("america");
  if(!before)return;
  const heading=document.createElement("h3");
  heading.id="french-persecution-administration";
  heading.textContent="Persecution administration";
  const intro=document.createElement("p");
  intro.textContent="The French and German officials below connected antisemitic law, police records, security command, mass arrest, and deportation. Their wartime responsibility is historical; the setting leaves their later careers open where real outcomes depended upon Allied victory.";
  const wrapper=document.createElement("div");
  wrapper.className="table-wrap";
  wrapper.innerHTML=`<table class="wiki-table"><thead><tr><th>Figure</th><th>Office in France</th><th>Postwar boundary</th></tr></thead><tbody>
    <tr><td><a href="xavier-vallat.html">Xavier Vallat</a></td><td>First commissioner-general for Jewish affairs</td><td>Later office, retirement, and death remain open</td></tr>
    <tr><td><a href="louis-darquier-de-pellepoix.html">Louis Darquier de Pellepoix</a></td><td>Commissioner-general during the first mass deportations</td><td>No Spanish exile or trial in absentia is presumed</td></tr>
    <tr><td><a href="carl-oberg.html">Carl Oberg</a></td><td>Higher SS and Police Leader</td><td>No Allied capture, trials, or pardon is presumed</td></tr>
    <tr><td><a href="theodor-dannecker.html">Theodor Dannecker</a></td><td>RSHA Jewish-affairs specialist under Adolf Eichmann</td><td>Post-France assignments and death remain open</td></tr>
    <tr><td><a href="helmut-knochen.html">Helmut Knochen</a></td><td>Commander of the Security Police and SD</td><td>Later command, retirement, and death remain open</td></tr>
  </tbody></table>`;
  before.before(heading,intro,wrapper);
})();
