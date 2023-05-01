import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');

  let deleteBtnList = document.querySelectorAll("#deleteBtn");

  for(let i = 0; i < deleteBtnList.length; i++){
    deleteBtnList[i].addEventListener("click", deleteItem)
  }

}

function cartItemTemplate(item) {
  let newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
  <button id="deleteBtn" data-id=${item.Id}>Remove Item</button>
</li>

`;

  return newItem;
}


function deleteItem (e){
  let itemId = e.target.getAttribute("data-id");
  console.log("check", e.target.getAttribute("data-id"))

  let cartItems = localStorage.getItem('so-cart');
  cartItems = JSON.parse(cartItems);

  let newCart = [];
  cartItems.map(c => {
    if(c.Id !== itemId){
      newCart.push(c)
    }
    //we wont add the matching one
  })

  newCart = JSON.stringify(newCart);

  localStorage.setItem('so-cart', newCart );
  renderCartContents();
}



renderCartContents();