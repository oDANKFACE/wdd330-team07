const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) 
{
  if (res.ok) 
  {
    return res.json();
  } 
  else 
  {
    throw new Error('Bad Response');
  }
}

export default class ProductData 
{
  constructor() 
  {
    //this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  async getData(category) {

    try{
      const response = await fetch(baseURL + `products/search/${category}`);
      console.log("what is my url", baseURL + `products/search/${category}` )

      //http://server-nodejs.cit.byui.edu:3000/products/search/tents

     

      const data = await convertToJson(response);
      console.log("i am trying ot get data with", category, data.Result)
      return data.Result;
    } catch(err){
      console.log(err)
    }

  }
  
  async findProductById(id) 
  {
    const products = await this.getData();
    console.log("id:", id,)
    return products.find((item) => {
      console.log("itemid", item.Id, id)
      //when you return true it will return the item back
      return item.Id === id
    });


  }
}