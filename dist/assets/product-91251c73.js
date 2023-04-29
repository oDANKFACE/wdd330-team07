import"./style-be2b37a9.js";import{s as r,a as e,g as c}from"./utils-dfec89da.js";import{P as s}from"./ProductData-642f098c.js";function i(a){return`<section class="product-detail"> <h3>${a.Brand.Name}</h3>
    <h2 class="divider">${a.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${a.Image}"
      alt="${a.NameWithoutBrand}"
    />
    <p class="product-card__price">$${a.FinalPrice}</p>
    <p class="product__color">${a.Colors[0].ColorName}</p>
    <p class="product__description">
    ${a.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${a.Id}">Add to Cart</button>
    </div></section>`}class n{constructor(t,o){this.productId=t,this.product={},this.dataSource=o}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addProductToCart(t){let o=getLocalStorage("so-cart")||[];Array.isArray(o)||(o=[o]),o.push(t),console.log(o),r("so-cart",o)}renderProductDetails(t){document.querySelector(t).insertAdjacentHTML("afterBegin",i(this.product))}}const d=new s("tents"),l=e("product"),u=new n(productId,d);u.init();console.log(d.findProductById(l));function m(a){let t=c("so-cart")||[];Array.isArray(t)||(t=[t]),t.push(a),console.log(t),r("so-cart",t)}async function p(a){const t=await d.findProductById(a.target.dataset.id);console.log(t),m(t)}document.getElementById("addToCart").addEventListener("click",p);
