const db = require('../models/index');
const Price = db.prices;
module.exports ={
  insertPrice,
  getAllPrice,
  updatePrice,
  priceByCity,
  priceByProduct,
  deletePrice
};
async function insertPrice(product, city, price) {
  await Price.create({product, city, price});
 
}
async function getAllPrice() {
  const prices = await Farmer.findAll();
        return prices;
}
async function priceByCity(city) {
  const price = await Price.findByPk(id);   
       return Price;      
}
async function priceById(id) { 
  const price = await Price.findByPk(id);
      return price;
          
}
async function priceByProduct(product) {
    const price = await Price.findByPk(id);
      return price;
        
}
async function updatePrice(product, city, price, id){
    await Farmer.update({product, city, price}, 
      { where: {id: id}});  
}
 
async function  deletePrice(id) {
  const price = await priceById(id);
   await price.destroy();
}



