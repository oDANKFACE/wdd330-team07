const baseURL = 'http://server-nodejs.cit.byui.edu:3000/';

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
    //this.path = `../json/${this.category}.json`;
  }
  async getData(category) {

      const response = await fetch(baseURL + `products/search/${category}`);
      const data = await convertToJson(response);
      // console.log(data.Result);
      return data.Result;
    }
  
    async findProductById(id) {
      return await fetch(baseURL + `product/${id}`).then(convertToJson)
      .then((data) => data.Result);
    }


  }
