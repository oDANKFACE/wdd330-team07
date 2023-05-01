import"./style-be2b37a9.js";import{a}from"./utils-1838695d.js";import{P as i}from"./ProductData-d6956273.js";function s(o){return`<section class="product-detail"> <h3>${o.Brand.Name}</h3>
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
    </div></section>`}class r{constructor(t,e){this.productId=t,this.product={},this.dataSource=e}async init(){console.log("init",this.dataSource),this.product=await this.dataSource.findProductById(this.productId),console.log("i got product",this.product),this.renderProductDetails(".product-detail"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){console.log("get product",this.product);let t=[];localStorage.getItem("so-cart")===null?(console.log(1,t),t.push(this.product)):(console.log(2,t),t=localStorage.getItem("so-cart"),t=JSON.parse(t),t.push(this.product)),console.log("this is items",t),t=JSON.stringify(t),localStorage.setItem("so-cart",t)}renderProductDetails(t){const e=document.querySelector(t);console.log("are we outputting?",s(this.product)),e.innerHTML=s(this.product)}}const c=new i("tents"),d=a(),l=new r(d,c);l.init();
