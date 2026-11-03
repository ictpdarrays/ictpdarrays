/* Search with live suggestions: matches full names and short forms. Needs ALL from data.js. */
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
function searchConcepts(raw){
const q=norm(raw);if(!q)return[];
const rank=o=>{const nm=norm(o.name),ab=norm(o.abbr);
if(ab===q)return 0;if(nm.startsWith(q))return 1;if(ab&&ab.startsWith(q))return 2;
if(q.length<2)return -1;
if(nm.split(" ").some(w=>w.startsWith(q)))return 3;
return nm.includes(q)||(ab&&ab.includes(q))?4:-1};
return ALL.map(o=>[rank(o),o]).filter(x=>x[0]>=0).sort((a,b)=>a[0]-b[0]||a[1].n-b[1].n).map(x=>x[1])}
(function(){
const i=document.getElementById("q"),box=document.getElementById("sl");if(!i||!box)return;
let list=[],act=-1;
const close=()=>{box.classList.remove("on");i.setAttribute("aria-expanded","false");act=-1};
function show(){
list=searchConcepts(i.value);act=-1;
if(!i.value.trim()){close();return}
box.innerHTML=list.length?list.map((o,k)=>`<a role="option" id="so${k}" href="#${o.slug}"><span class="no">${String(o.n).padStart(2,"0")}</span><span>${esc(o.name)}</span><span class="ab">${o.abbr}</span></a>`).join(""):`<div class="em">No concept found for “${esc(i.value.trim())}”.</div>`;
box.classList.add("on");i.setAttribute("aria-expanded","true");box.scrollTop=0}
function mark(n){
const els=box.querySelectorAll("a");if(!els.length)return;
act=(n+els.length)%els.length;
els.forEach((e,k)=>{e.classList.toggle("a",k===act);e.setAttribute("aria-selected",k===act)});
els[act].scrollIntoView({block:"nearest"});i.setAttribute("aria-activedescendant","so"+act)}
i.addEventListener("input",show);
i.addEventListener("focus",()=>{if(i.value.trim())show()});
i.addEventListener("keydown",e=>{
if(e.key==="ArrowDown"){e.preventDefault();mark(act+1)}
else if(e.key==="ArrowUp"){e.preventDefault();mark(act-1)}
else if(e.key==="Enter"){const o=list[act<0?0:act];if(o){e.preventDefault();location.hash=o.slug}}
else if(e.key==="Escape"){close();i.blur()}});
document.addEventListener("click",e=>{if(!e.target.closest(".sw"))close()});
window.addEventListener("hashchange",()=>{i.value="";close();i.blur()});
})();
