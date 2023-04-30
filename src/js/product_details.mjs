import { setLocalStorage } from "./utils.mjs";

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
  async init() 
  {
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

 addProductToCart(product) 
  {
      //change to getLocalStorage. setLocalStorage will replace the item with the new one when adding more than one item.
      let items = getLocalStorage('so-cart') || [];
  
      if(!Array.isArray(items))
      {
          items = [items];
      }
      items.push(product);
      console.log(items);
  
      //add all items to the cart
      setLocalStorage('so-cart', items);
  }
  renderProductDetails(selector) 
  {

    //next
    const element = document.querySelector(selector);
    console.log("are we outputting?", productDetailsTemplate(this.product) )
    element.innerHTML = productDetailsTemplate(this.product);
    /*
    element.insertAdjacentHTML(
      "afterBegin",
      productDetailsTemplate(this.product)
    );
    */
  }


}