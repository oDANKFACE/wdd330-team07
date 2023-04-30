import"./style-be2b37a9.js";import{P as r}from"./ProductData-ad4e9437.js";function c(t){return console.log("we should get one",t),`<li class="product-card">
    <a href="product_pages/index.html?product=${t.Id}">
    <img
      src="${t.Image}"
      alt="Image of ${t.Name}"
    />
    <h3 class="card__brand">${t.Brand.Name}</h3>
    <h2 class="card__name">${t.Name}</h2>
    <p class="product-card__price">$${t.FinalPrice}</p></a>
  </li>`}class l{constructor(e,a,s){this.category=e,this.dataSource=a,this.listElement=s}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderListWithTemplate(e,a,s){s.map((n,i)=>{console.log("i?",i),i===2||i===4||(a.innerHTML+=e(n))})}renderList(e){this.renderListWithTemplate(c,this.listElement,e)}}const o=new r("tents"),d=document.querySelector(".product-list"),m=new l("Tents",o,d);m.init();
