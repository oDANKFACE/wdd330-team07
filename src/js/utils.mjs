
// wrapper for querySelector...returns matching element
export function qs(selector, parent = document)
{
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) 
{
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) 
{
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) 
{
  qs(selector).addEventListener('touchend', (event) => 
  {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}
export function getParams(param)
{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function updateCartNumber()
{
  const items = getLocalStorage("so-cart");
  // placeholder for item "Quantity" addition - EC
  let quantity = 0;

  // parse through itmes currently in cart - EC
  for(let i = 0; i < items.length; i++)
  {
    // for each singular item, dive into the "Quantity" attribute and add it to "quantity" - EC
    quantity += items[i].Quantity
  }

  // push true quantity back to HTML (backpack number) - EC
  document.querySelector(".count").innerHTML = quantity;
}

export function renderWithTemplate(template, parent, data, callback) {
  parent.parentElement.insertAdjacentHTML("afterbegin", template);
  if(callback) {
    callback(data);
  }
}

async function loadTemplate(templatePath) {
  const response = await fetch(templatePath);
  const template = document.createElement('template');
  template.innerHTML = await response.text();
  return template;
}

//This was not an export funtion and we had the await before the loadTemplate which I had to remove once I changed it into an export. -HB
export async function loadHeaderFooter() {
  // Load header and footer templates
  const headerTemplate = loadTemplate("../partials/header.html");
  const footerTemplate = loadTemplate("../partials/footer.html");

  // Grab header and footer elements from the DOM
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  // Render header and footer using renderWithTemplate function
  renderWithTemplate(headerTemplate, headerElement, null, null);
  renderWithTemplate(footerTemplate, footerElement, null, null);
}


