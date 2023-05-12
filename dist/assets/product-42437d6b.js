import{u as d,a as i}from"./utils-94abd463.js";import{P as s}from"./ProductData-e3e196c0.js";function c(e){return console.log("??",e.Images.PrimaryMedium),`<section class="product-detail"> <h3>${e.Brand.Name}</h3>
    <h2 class="divider">${e.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${e.Images.PrimaryLarge}"
      alt="${e.NameWithoutBrand}"
    />
    <p class="product-card__price">$${e.FinalPrice}</p>
    <p class="product__color">${e.Colors[0].ColorName}</p>
    <p class="product__description">
    ${e.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${e.Id}">Add to Cart</button>
    </div></section>`}class l{constructor(t,a){this.productId=t,this.product={},this.dataSource=a}async init(){this.product=await this.dataSource.findProductById(this.productId),console.log(this.productId),console.log(this.dataSource.findProductById(this.productId)),this.renderProductDetails(".product-detail"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let t=[];if(localStorage.getItem("so-cart")===null)t.push(this.product);else{t=localStorage.getItem("so-cart"),t=JSON.parse(t);let a=!1,r=0;for(let o=0;o<t.length;o++)t[o].Name==this.product.Name&&(a=!0,r=o);a?t[r].Quantity=t[r].Quantity+1:(this.product.Quantity=1,t.push(this.product))}t=JSON.stringify(t),localStorage.setItem("so-cart",t),d()}renderProductDetails(t){const a=document.querySelector(t);a.innerHTML=c(this.product)}}const n=new s("tents"),u=i("product"),p=new l(u,n);p.init();
