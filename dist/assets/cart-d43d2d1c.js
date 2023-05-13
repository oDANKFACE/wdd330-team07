import{l as p,u as i,g as f}from"./utils-94abd463.js";import{P as I}from"./ProductData-e3e196c0.js";function g(){const t=f("so-cart"),c=t.map(e=>S(e));document.querySelector(".product-list").innerHTML=c.join("");let l=document.querySelectorAll(".qSelector");for(let e=0;e<l.length;e++)l[e].addEventListener("input",async d=>{const n=await new I().findProductById(d.target.getAttribute("data-id"));let a=[];if(localStorage.getItem("so-cart")===null)a.push(n);else{a=localStorage.getItem("so-cart"),a=JSON.parse(a);let u=!1,m=0;for(let s=0;s<a.length;s++)a[s].Name==n.Name&&(u=!0,m=s);u?a[m].Quantity=parseInt(d.target.value):(n.Quantity=1,a.push(n))}a=JSON.stringify(a),localStorage.setItem("so-cart",a),i()});let r=document.querySelectorAll("#deleteBtn");for(let e=0;e<r.length;e++)r[e].addEventListener("click",y);let o=0;for(let e=0;e<t.length;e++)o+=t[e].FinalPrice*t[e].Quantity;document.querySelector("#cartTotal").innerHTML="Cart Total: $"+o}function S(t){return`<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${t.Images.PrimarySmall}'
      alt='${t.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${t.Name}</h2>
  </a>
  <p class='cart-card__color'>${t.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: <input type = 'number' class="qSelector" min = '0' value = '${t.Quantity}' data-id='${t.Id}'></p>
  <p class='cart-card__price'>$${t.FinalPrice}</p>
  <button id="deleteBtn" data-id=${t.Id}>Remove Item</button>
</li>

`}function y(t){let c=t.target.getAttribute("data-id");console.log("check",t.target.getAttribute("data-id"));let l=localStorage.getItem("so-cart");l=JSON.parse(l);let r=[];l.map(o=>{o.Id!==c&&r.push(o)}),r=JSON.stringify(r),localStorage.setItem("so-cart",r),g(),i()}p();g();i();
