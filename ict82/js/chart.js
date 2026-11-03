let raf=0;
function chart(){
return `<div class="chart"><svg viewBox="0 0 500 400" role="img" aria-label="Animated candlestick chart showing liquidity levels and a fair value gap"><defs><pattern id="g" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" style="stroke:var(--grid)"/></pattern></defs><rect width="500" height="400" fill="url(#g)"/>
<rect x="0" y="40" width="500" height="150" style="fill:var(--tx)" opacity=".05"/><rect x="0" y="210" width="500" height="150" style="fill:var(--tx)" opacity=".025"/>
<text class="tag" x="10" y="56">PREMIUM</text><text class="tag" x="10" y="352">DISCOUNT</text>
<line x1="0" y1="200" x2="500" y2="200" style="stroke:var(--mu)" stroke-dasharray="2 5" opacity=".7"/><text class="tag" x="440" y="194">EQ</text>
<g style="stroke:var(--tx)" stroke-dasharray="6 6" opacity=".8"><line x1="0" y1="70" x2="500" y2="70"><animate attributeName="stroke-dashoffset" from="0" to="-48" dur="3s" repeatCount="indefinite"/></line></g>
<g style="stroke:var(--mu)" stroke-dasharray="6 6"><line x1="0" y1="335" x2="500" y2="335"><animate attributeName="stroke-dashoffset" from="0" to="48" dur="3s" repeatCount="indefinite"/></line></g>
<text class="tag" x="380" y="64">BSL</text><text class="tag" x="380" y="329">SSL</text>
<rect id="fvg" x="0" y="226" width="500" height="26" style="fill:var(--tx)" opacity=".14"><animate attributeName="opacity" values=".06;.2;.06" dur="4s" repeatCount="indefinite"/></rect>
<text class="tag" x="10" y="243">FVG</text>
<g id="cs"></g></svg></div>`}
function startChart(){
const g=document.getElementById("cs");if(!g)return;cancelAnimationFrame(raf);
const N=14,W=500/N;let seed=7,p=[],last=250,t=0;
const r=()=>(seed=(seed*9301+49297)%233280)/233280;
for(let i=0;i<N+1;i++){const o=last,c=o+(r()-.5)*60-4;last=Math.max(90,Math.min(320,c));p.push([o,last,Math.max(o,last)+r()*18,Math.min(o,last)-r()*18])}
function draw(sh){let h="";p.forEach((q,i)=>{const x=i*W-sh+W/2,[o,c,hi,lo]=q,up=c<o;h+=`<line x1="${x}" x2="${x}" y1="${hi}" y2="${lo}" style="stroke:var(--tx)" stroke-width="1.5"/><rect x="${x-W*.3}" y="${Math.min(o,c)}" width="${W*.6}" height="${Math.max(3,Math.abs(c-o))}" style="fill:${up?"var(--tx)":"var(--bg2)"};stroke:var(--tx)" stroke-width="1.5"/>`});g.innerHTML=h}
let sh=0,prev=performance.now();
function f(now){if(!document.body.contains(g))return;sh+=(now-prev)*.012;prev=now;if(sh>=W){sh-=W;const o=last,c=o+(r()-.5)*70-4;last=Math.max(90,Math.min(320,c));p.shift();p.push([o,last,Math.max(o,last)+r()*18,Math.min(o,last)-r()*18])}draw(sh);raf=requestAnimationFrame(f)}
if(matchMedia("(prefers-reduced-motion:reduce)").matches){draw(0)}else raf=requestAnimationFrame(f)}
