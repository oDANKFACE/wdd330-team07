import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { updateCartNumber } from "./utils.mjs";
import { loadHeaderFooter, getParams } from './utils.mjs';

loadHeaderFooter();

const category = getParams('category');
const dataSource = new ProductData();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');

console.log("i got category", category)
/*
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);
*/

const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init(); //renders the page

//listing.init();

updateCartNumber();