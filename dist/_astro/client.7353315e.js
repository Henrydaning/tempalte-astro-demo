import{y as u,B as y}from"./preact.module.b1d0a30c.js";const v="modulepreload",S=function(t){return"/nyhxiaoning.github.io/"+t},m={},p=function(l,s,f){if(!s||s.length===0)return l();const d=document.getElementsByTagName("link");return Promise.all(s.map(n=>{if(n=S(n),n in m)return;m[n]=!0;const i=n.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!f)for(let r=d.length-1;r>=0;r--){const c=d[r];if(c.href===n&&(!i||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${a}`))return;const e=document.createElement("link");if(e.rel=i?"stylesheet":v,i||(e.as="script",e.crossOrigin=""),e.href=n,document.head.appendChild(e),i)return new Promise((r,c)=>{e.addEventListener("load",r),e.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>l())},_=({value:t,name:l})=>t?u("astro-slot",{name:l,dangerouslySetInnerHTML:{__html:t}}):null;_.shouldComponentUpdate=()=>!1;var g=_;const h=new Map;var k=t=>async(l,s,{default:f,...d})=>{if(!t.hasAttribute("ssr"))return;for(const[a,o]of Object.entries(d))s[a]=u(g,{value:o,name:a});if(t.dataset.preactSignals){const{signal:a}=await p(()=>import("./signals.module.52d92413.js"),["_astro/signals.module.52d92413.js","_astro/preact.module.b1d0a30c.js","_astro/hooks.module.459b7447.js"]);let o=JSON.parse(t.dataset.preactSignals);for(const[e,r]of Object.entries(o)){if(!h.has(r)){const c=a(s[e]);h.set(r,c)}s[e]=h.get(r)}}function i({children:a}){let o=Object.fromEntries(Array.from(t.attributes).map(e=>[e.name,e.value]));return u(t.localName,o,a)}y(u(i,null,u(l,s,f!=null?u(g,{value:f}):f)),t.parentNode,t)};export{k as default};
