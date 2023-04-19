const db = require('../models/index');
const Price = db.prices;
module.exports ={
  insertVeterinary,
  getAllVeterinaries,
  updateVeterinary,
  VeterinaryByCity,
  deleteVeterinary
};
async function  insertVeterinary(product, city, price) {
  await Price.create({product, city, price});
 
}
async function getAllVeterinaries() {
  const prices = await Farmer.findAll();
        return prices;
}
async function VeterinaryByCity(city) {
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
async function updateVeterinary(product, city, price, id){
    await Farmer.update({product, city, price}, 
      { where: {id: id}});  
}
 
async function  deleteVeterinary(id) {
  const price = await priceById(id);
   await price.destroy();
}



