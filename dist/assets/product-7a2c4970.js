import"./style-be2b37a9.js";import{s as d,a as s,g as c}from"./utils-950cc254.js";import{P as i}from"./ProductData-ad4e9437.js";function r(o){return`<section class="product-detail"> <h3>${o.Brand.Name}</h3>
    <h2 class="divider">${o.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${o.Image}"
      alt="${o.NameWithoutBrand}"
    />
    <p class="product-card__price">$${o.FinalPrice}</p>
    <p class="product__color">${o.Colors[0].ColorName}</p>
    <p class="product__description">
    ${o.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${o.Id}">Add to Cart</button>
    </div></section>`}class n{constructor(t,a){this.productId=t,this.product={},this.dataSource=a}async init(){this.product=await this.dataSource.findProductById(this.productId),console.log("i got product",this.product),this.renderProductDetails(".product-detail"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addProductToCart(t){let a=getLocalStorage("so-cart")||[];Array.isArray(a)||(a=[a]),a.push(t),console.log(a),d("so-cart",a)}renderProductDetails(t){const a=document.querySelector(t);console.log("are we outputting?",r(this.product)),a.innerHTML=r(this.product)}}const e=new i("tents"),l=s(),u=new n(l,e);u.init();function p(o){let t=c("so-cart")||[];Array.isArray(t)||(t=[t]),t.push(o),console.log(t),d("so-cart",t)}async function m(o){const t=await e.findProductById(o.target.dataset.id);console.log(t),p(t)}document.getElementById("addToCart").addEventListener("click",m);
