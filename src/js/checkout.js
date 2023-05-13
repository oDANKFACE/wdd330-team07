import { loadHeaderFooter, getLocalStorage } from './utils.mjs';

loadHeaderFooter();



const zipCodeElement = document.querySelector('#zip');
const cartItems = getLocalStorage('so-cart');
const order_summ = document.querySelector('#order_summary');

let num_of_items = 0;
let shipping_total = 0;
let tax_total = 0;

zipCodeElement.addEventListener('change', (event) => 
{
    getShipping();
    getTax();
});

//onchange = (event) => {};
function getShipping()
{
    for(let i = 0; i < cartItems.length; i++)
    {
        num_of_items += cartItems[i].Quantity;
    }

    shipping_total = 10 + ((num_of_items * 2) - 2);
}

function getTax()
{
    let t = 0.06
    let sub_total = 0;
    for(let i = 0; i < cartItems.length; i++)
    {
        sub_total += cartItems[i].FinalPrice * cartItems[i].Quantity;
    }
    let tax = sub_total * t;
    let final_total = (sub_total * t) + sub_total

    let message = `<p>Shipping: $${shipping_total.toFixed(2)}</p> <br> <p>Tax: $${tax.toFixed(2)}</p> <br> <p>Total: $${final_total.toFixed(2)}</p>`

    document.getElementById('order_summary').innerHTML = message;
}

