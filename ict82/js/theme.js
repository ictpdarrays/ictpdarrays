/* Light/dark theme toggle. Saves the choice; follows the system setting until the person picks one. */
(function(){
const root=document.documentElement,btn=document.getElementById("tt"),meta=document.querySelector('meta[name=theme-color]'),KEY="ict82-theme";
const mq=matchMedia("(prefers-color-scheme: light)");
function apply(t){
root.setAttribute("data-theme",t);
if(meta)meta.content=t==="light"?"#ffffff":"#000000";
if(btn){const next=t==="light"?"dark":"light";btn.setAttribute("aria-label","Switch to "+next+" mode");btn.title="Switch to "+next+" mode"}}
function saved(){try{const t=localStorage.getItem(KEY);return t==="light"||t==="dark"?t:null}catch(e){return null}}
apply(root.getAttribute("data-theme")||(mq.matches?"light":"dark"));
if(btn)btn.addEventListener("click",()=>{
const t=root.getAttribute("data-theme")==="light"?"dark":"light";
apply(t);try{localStorage.setItem(KEY,t)}catch(e){}});
const onSys=e=>{if(!saved())apply(e.matches?"light":"dark")};
mq.addEventListener?mq.addEventListener("change",onSys):mq.addListener(onSys);
})();
