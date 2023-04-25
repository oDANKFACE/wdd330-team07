import { setLocalStorage, getLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';

const dataSource = new ProductData('tents');

function addProductToCart(product) {
  let items = getLocalStorage('so-cart') || [];
  
  if(!Array.isArray(items)){
    items = [items]
  }
  items.push(product);
  console.log(items);
  
  
  setLocalStorage('so-cart', items);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  console.log(product);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
