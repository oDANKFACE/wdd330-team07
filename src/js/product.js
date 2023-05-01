import { getLocalStorage, setLocalStorage, getParams } from './utils.mjs';
import ProductData from './ProductData.mjs';
import product_details from './product_details.mjs';

const dataSource = new ProductData('tents');
const productID = getParams('product');

//console.log(dataSource.findProductById(productID)); //filters the data 
const product = new product_details(productID, dataSource); //product detail class
product.init();// May need to comment this out. What is it doing?




