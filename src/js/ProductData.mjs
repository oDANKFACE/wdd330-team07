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
  constructor(category) 
  {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() 
  {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
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