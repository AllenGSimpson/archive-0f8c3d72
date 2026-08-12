(()=>{
  const before=document.getElementById("catholic");
  if(!before)return;
  const heading=document.createElement("h2");
  heading.id="afghanistan";
  heading.textContent="Afghanistan";
  const intro=document.createElement("p");
  intro.textContent="The Musahiban monarchy survives the postwar frontier wars. The king provides dynastic continuity while successive royal prime ministers direct occupation, development, and indirect protection.";
  const wrapper=document.createElement("div");
  wrapper.className="table-wrap";
  wrapper.innerHTML=`<table class="wiki-table"><thead><tr><th>Figure</th><th>Office</th><th>Post-divergence role</th></tr></thead><tbody>
    <tr><td><a href="mohammad-zahir-shah.html">Mohammad Zahir Shah</a></td><td>King from 1933</td><td>Sovereign through the 1985 regional settlement; the 1973 overthrow does not occur</td></tr>
    <tr><td><a href="shah-mahmud-khan.html">Shah Mahmud Khan</a></td><td>Prime minister, 1946–53</td><td>Directs the initial southern occupation and provisional military administration</td></tr>
    <tr><td><a href="mohammad-daoud-khan.html">Mohammad Daoud Khan</a></td><td>Prime minister from 1953</td><td>Architect of Pashtunistan policy and the protected-frontier system beneath the crown</td></tr>
  </tbody></table>`;
  before.before(heading,intro,wrapper);
})();
