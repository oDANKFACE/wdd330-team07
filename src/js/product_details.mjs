import  { getLocalStorage, setLocalStorage, updateCartNumber, loadHeaderFooter } from "./utils.mjs";


function productDetailsTemplate(product) {
  // I'm not sure where to grab original price/final price, can't totally tell what's
  const discountPercentage = calculateDiscountPercentage(product.OriginalPrice, product.FinalPrice);
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    ${discountPercentage > 0 ? `<p class="product-card__discount">${discountPercentage}% OFF</p>` : ''}
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}

export default class ProductDetails 
{
  constructor(productId, dataSource) 
  {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
   
  }
  async init() //gets called automtaically by default
  {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
     
    console.log(this.productId)
    console.log(this.dataSource.findProductById(this.productId))
    // once we have the product details we can render out the HTML
    this.renderProductDetails(".product-detail");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
      
  }

 addToCart() 
  {
      let items = [] ;
      if( localStorage.getItem("so-cart") === null){
          items.push(this.product)
      } else {
          items = localStorage.getItem("so-cart");
          //local storage stores as a string
          //it needs to be converted going in and out using json parse
          // json stringfy
          items = JSON.parse(items);
          let found = false;
          let index =0;
          for (let i=0; i<items.length; i++){
            if (items[i].Name==this.product.Name){
              found=true;
              index=i;
            }
          }
          if (!found){
            this.product.Quantity=1;
            items.push(this.product);
          }
          else{
            items[index].Quantity=items[index].Quantity+1;
          }
          
      }
      
      //add all items to the cart
      //add all items to the cart store it as text
      items = JSON.stringify(items);
      localStorage.setItem('so-cart', items);
      
      updateCartNumber();
  }
  renderProductDetails(selector){
  //next
    const element = document.querySelector(selector);
    element.innerHTML = productDetailsTemplate(this.product);
   }
}

function calculateDiscountPercentage(originalPrice, finalPrice) {
  if (originalPrice === finalPrice) {
    return 0;
  }
  return Math.round(((originalPrice - finalPrice) / originalPrice) * 100);
}



