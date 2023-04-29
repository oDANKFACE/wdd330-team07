import"./style-be2b37a9.js";import{P as i}from"./ProductData-642f098c.js";function r(t){return`<li class="product-card">
    <a href="product_pages/index.html?product=${t.Id}">
    <img
      src="${t.Image}"
      alt="Image of ${t.Name}"
    />
    <h3 class="card__brand">${t.Brand.Name}</h3>
    <h2 class="card__name">${t.Name}</h2>
    <p class="product-card__price">$${t.FinalPrice}</p></a>
  </li>`}class c{constructor(e,a,s){this.category=e,this.dataSource=a,this.listElement=s}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){renderListWithTemplate(r,this.listElement,e)}}const n=new i("tents"),l=document.querySelector(".product-list"),o=new c("Tents",n,l);o.init();
