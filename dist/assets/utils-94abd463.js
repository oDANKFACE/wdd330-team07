(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function l(o){return JSON.parse(localStorage.getItem(o))}function u(o){const t=window.location.search;return new URLSearchParams(t).get(o)}function d(){const o=l("so-cart");let t=0;for(let r=0;r<o.length;r++)t+=o[r].Quantity;document.querySelector(".count").innerHTML=t}function s(o,t,r,a){a&&a(r)}async function i(o){const t=await fetch(o),r=document.createElement("template");return r.innerHTML=await t.text(),r}async function f(){const o=await i("../partials/header.html"),t=await i("../partials/footer.html"),r=document.querySelector("#main-header"),a=document.querySelector("#main-footer");s(o,r,null,null),s(t,a,null,null)}export{u as a,l as g,f as l,d as u};