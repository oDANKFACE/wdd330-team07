
//Used to generate a list of product cards

function productCardTemplate(product) 
{
  console.log(product)
    return `<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Images.PrimaryMedium}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
  }

export default class ProductListing {
    constructor(category, dataSource, listElement) {
      // We passed in this information to make our class as reusable as possible.
      // Being able to define these things when we use the class will make it very flexible
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
    }

    async init() {


      // our dataSource will return a Promise...so we can use await to resolve it.
      const list = await this.dataSource.getData(this.category);
      // render the list - to be completed
      this.renderList(list);
    }

    renderListWithTemplate (template, element, data ){
      // add that template to his element
      data.map((d, i)=>{
        
        //don't render 2 and 4 because they don't have images
        console.log("i?", i)
        if(i === 2 || i === 4){
   
        } else {
          element.innerHTML += template(d);
        }
        //trying to get image
      })
    }
    
    renderList(list) {
      this.renderListWithTemplate(productCardTemplate, this.listElement, list);
    }



  }
