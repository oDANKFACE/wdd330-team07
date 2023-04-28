import { getLocalStorage, setLocalStorage, getParams } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');
const productID = getParams('product');

console.log(dataSource.findProductById(productID));

function addProductToCart(product) 
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


// add to cart button event handler
async function addToCartHandler(e) 
{
  const product = await dataSource.findProductById(e.target.dataset.id);
  console.log(product);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
