import"./style-be2b37a9.js";import{g as o}from"./utils-1838695d.js";function l(){const r=o("so-cart").map(e=>n(e));document.querySelector(".product-list").innerHTML=r.join("");let a=document.querySelectorAll("#deleteBtn");for(let e=0;e<a.length;e++)a[e].addEventListener("click",s)}function n(t){return`<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${t.Image}'
      alt='${t.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${t.Name}</h2>
  </a>
  <p class='cart-card__color'>${t.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${t.FinalPrice}</p>
  <button id="deleteBtn" data-id=${t.Id}>Remove Item</button>
</li>

`}function s(t){let r=t.target.getAttribute("data-id");console.log("check",t.target.getAttribute("data-id"));let a=localStorage.getItem("so-cart");a=JSON.parse(a);let e=[];a.map(c=>{c.Id!==r&&e.push(c)}),e=JSON.stringify(e),localStorage.setItem("so-cart",e),l()}l();
