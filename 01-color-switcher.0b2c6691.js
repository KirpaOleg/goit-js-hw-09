const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");const a=()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};let l=null;t.disabled=!0;e.addEventListener("click",(()=>{l=setInterval(a,1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.0b2c6691.js.map
