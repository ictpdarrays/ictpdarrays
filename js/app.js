const app=document.getElementById("app"),bar=document.getElementById("load");
function route(){
let h=decodeURIComponent(location.hash.slice(1)),html,nav="";
if(h.startsWith("category-")&&CATS.find(k=>k.id===h.slice(9))){const k=CATS.find(k=>k.id===h.slice(9));html=V.category(k);nav="concepts";document.title=k.t+" – ICT 82"}
else if(h==="concepts"||h==="about"){html=V[h]();nav=h;document.title=(h==="about"?"About":"Concepts")+" – ICT 82"}
else{const o=ALL.find(o=>o.slug===h);if(o){html=V.concept(o);nav="concepts";document.title=o.name+" – ICT 82"}else{html=V.home();nav="home";document.title="ICT 82 – Learn Smart Money Concepts"}}
bar.style.width="70%";
app.style.animation="none";app.offsetWidth;app.style.animation="";
app.innerHTML=html;
document.querySelectorAll("nav a.n").forEach(a=>a.classList.toggle("on",a.dataset.n===nav));
if(h==="explore"){document.getElementById("explore")&&document.getElementById("explore").scrollIntoView()}else window.scrollTo(0,0);
startChart();setTimeout(()=>{bar.style.width="100%";setTimeout(()=>{bar.style.opacity=0;setTimeout(()=>{bar.style.width=0;bar.style.opacity=1},300)},200)},60)}
window.addEventListener("hashchange",route);route();
