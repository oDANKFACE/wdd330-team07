import{l as n,u as o}from"./utils-94abd463.js";import{P as c}from"./ProductData-e3e196c0.js";function l(e){return console.log(e),`<li class="product-card">
    <a href="/product_pages/index.html?product=${e.Id}">
    <img
      src="${e.Images.PrimaryMedium}"
      alt="Image of ${e.Name}"
    />
    <h3 class="card__brand">${e.Brand.Name}</h3>
    <h2 class="card__name">${e.Name}</h2>
    <p class="product-card__price">$${e.FinalPrice}</p></a>
  </li>`}class d{constructor(t,a,s){this.category=t,this.dataSource=a,this.listElement=s}async init(){const t=await this.dataSource.getData(this.category);this.renderList(t)}renderListWithTemplate(t,a,s){s.map((i,r)=>{console.log("123"),console.log("i?",r),r===2||r===4||(a.innerHTML+=t(i))})}renderList(t){this.renderListWithTemplate(l,this.listElement,t)}}const m=new c("tents"),h=document.querySelector(".product-list"),u=new d("Tents",m,h);n();u.init();o();
