import{l as p,g as c}from"./utils-94abd463.js";p();const d=document.querySelector("#zip"),e=c("so-cart");document.querySelector("#order_summary");let a=0,i=0;d.addEventListener("change",t=>{s(),g()});function s(){for(let t=0;t<e.length;t++)a+=e[t].Quantity;i=10+(a*2-2)}function g(){let t=.06,o=0;for(let n=0;n<e.length;n++)o+=e[n].FinalPrice*e[n].Quantity;let l=o*t,r=o*t+o,m=`<p>Shipping: $${i.toFixed(2)}</p> <br> <p>Tax: $${l.toFixed(2)}</p> <br> <p>Total: $${r.toFixed(2)}</p>`;document.getElementById("order_summary").innerHTML=m}