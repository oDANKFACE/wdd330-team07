import ProductData from './ProductData.mjs';
import { getLocalStorage, updateCartNumber, loadHeaderFooter, setLocalStorage } from './utils.mjs';


function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));

  document.querySelector('.product-list').innerHTML = htmlItems.join('');


  let selectorList = document.querySelectorAll(".qSelector");

  for(let i =  0; i < selectorList.length; i++){

    selectorList[i].addEventListener("input", async (e)=>{
      const dataSource = new ProductData()
      const product = await dataSource.findProductById(e.target.getAttribute('data-id'));      
     
      let items = [] ;
      if( localStorage.getItem("so-cart") === null){
          items.push(product)
      } else {
          items = localStorage.getItem("so-cart");
          //local storage stores as a string
          //it needs to be converted going in and out using json parse
          // json stringfy
          items = JSON.parse(items);
          let found = false;
          let index =0;
          for (let i=0; i<items.length; i++){
            if (items[i].Name==product.Name){
              found=true;
              index=i;
            }
          }
          if (!found){
            product.Quantity=1;
            items.push(product);
          }
          else{
            items[index].Quantity=parseInt(e.target.value);
          }
          
      }
      
      //add all items to the cart
      //add all items to the cart store it as text
      items = JSON.stringify(items);
      localStorage.setItem('so-cart', items);
      
      updateCartNumber();

      //add to local storage 
      //loop through cartItems
      //update Quantity: e.target.value
     
     
      //rerender calculateCartQuantityTotal()


  
    })

  }
  
  
 

  let deleteBtnList = document.querySelectorAll('#deleteBtn');

  for(let i = 0; i < deleteBtnList.length; i++){
    deleteBtnList[i].addEventListener('click', deleteItem)
  }
  let total = 0;
  for(let i = 0; i < cartItems.length; i++){
    total += cartItems[i].FinalPrice * cartItems[i].Quantity;
  }
  document.querySelector('#cartTotal').innerHTML = 'Cart Total: $' + total; 
}
//Add quantity to cart line 29
function cartItemTemplate(item) {
  let newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Images.PrimarySmall}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: <input type = 'number' class="qSelector" min = '0' value = '${item.Quantity}' data-id='${item.Id}'></p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
  <button id="deleteBtn" data-id=${item.Id}>Remove Item</button>
</li>

`;

  return newItem;
}


function deleteItem (e){
  let itemId = e.target.getAttribute('data-id');
  console.log('check', e.target.getAttribute('data-id'))

  let cartItems = localStorage.getItem('so-cart');
  cartItems = JSON.parse(cartItems);
  //recreate cart with items deleted
  let newCart = [];
  cartItems.map(c => {
     // if item id is the same as the item you clicked it repopulate a new array without the delete item
    if(c.Id !== itemId){
      newCart.push(c)
    }
    //this wont add the matching one
  })

  newCart = JSON.stringify(newCart);

  localStorage.setItem('so-cart', newCart);
  renderCartContents();
  //Changes number on backpack
  updateCartNumber();
}
//TO DO ADD CHECKOUT BUTTON/LINK TO TAKE US TO CART
//TO DO ADD FORM ON CHECKOUT PAGE 
loadHeaderFooter();


renderCartContents();
updateCartNumber();

// export function updateCartIcon() {
  //const cartItemAmount = document.getElementById("amountInCart");
  //const numItems = getLocalStorage("so-cart");
  //cartItemAmount.innerHTML = numItems.length;
//}




