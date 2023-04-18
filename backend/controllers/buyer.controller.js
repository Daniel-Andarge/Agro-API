const db = require('../models/index');
const Buyer = db.buyers;
module.exports = {
  insertBuyer,
  getAllBuyers,
  updateBuyer,
  getOneBuyer,
  buyerByCity,
  deleteBuyer
};

async function insertBuyer(name, city, phone) {
  await Buyer.create({name, city, phone});
 
}
async function getAllBuyers() {
  const buyers = await Buyer.findAll();
        return buyers;
}
async function getOneBuyer(id) {
      
  const buyer = await Buyer.findByPk(id);
    
  return buyer;

  }

async function buyerByCity(city) {
  const buyer = await Buyer.findByPk(id);   
       return Buyer;      
}
async function buyerById(id) { 
  const buyer = await Buyer.findByPk(id);
      return buyer;        
}

async function updateBuyer(name, city, phone, id){
    await Buyer.update({name, city, phone}, 
      { where: {id: id}});  
}
async function  deleteBuyer(id) {
  const buyer = await buyerById(id);
   await buyer.destroy();
}



