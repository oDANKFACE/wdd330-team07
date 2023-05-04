import { getLocalStorage, setLocalStorage, updateCartNumber } from "./utils.mjs";


function productDetailsTemplate(product) 
{
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
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
    console.log("init", this.dataSource)
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // once we have the product details we can render out the HTML
    console.log("i got product", this.product)
    this.renderProductDetails(".product-detail");
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
      
  }

 addToCart() 
  {
      console.log("get product", this.product)
      let items = [] ;
      if( localStorage.getItem("so-cart") === null){
          console.log(1, items)
          items.push(this.product)
      } else {
          console.log(2, items)
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
      console.log("this is items",items);
      
      //add all items to the cart
      items = JSON.stringify(items);
      localStorage.setItem('so-cart', items);
      
      updateCartNumber();
  }
  renderProductDetails(selector) 

  {

    //next
    const element = document.querySelector(selector);
    console.log("are we outputting?", productDetailsTemplate(this.product) )
    element.innerHTML = productDetailsTemplate(this.product);
   
  }
}

