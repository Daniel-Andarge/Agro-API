const db = require('../models/index');
const Price = db.prices;
module.exports ={
  insertPrice,
  getAllPrice,
  updatePrice,
  priceByCity,
  deletePrice
};

async function insertPrice(firstname, lastname, farmtype, product, city, address) {
 
  await Farmer.create({firstname, lastname, farmtype, product, city, address});
 
}
 async function getAllFarmers() {
      
        const farmers = await Farmer.findAll();
          
        return farmers;
        }

async function getOneFarmer(id) {
      
          const farmer = await Farmer.findByPk(id);
            
          return farmer;
        
          }

  async function updateFarmer (firstname, lastname, farmtype, product, city, address, id){
   
    await Farmer.update({firstname, lastname, farmtype, product, city, address}, { where: {id: id}});
   
 }
 
 async function deleteFarmer(id) {
 
  const farmer = await getOneFarmer(id);
    
   await farmer.destroy();
 
 
  }



