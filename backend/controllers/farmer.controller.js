const db = require('../models/index');
const {
  sequelize, Op
} = require("../models/index")
const Farmer = db.farmers;
module.exports ={
  insertFarmer,
  getAllFarmers,
  updateFarmer,
  getOneFarmer,
  deleteFarmer
};

async function insertFarmer(firstname, lastname, farmtype, product, city, address) {
 
  await Farmer.create({firstname, lastname, farmtype, product, city, address});
 
}
 async function getAllFarmers() {
      
  const farmers = await Farmer.findAll(/* {
    where: {city: "Addis Ababa"}
  } */);
        return farmers;
        } 

       

/* async function getAllFarmers() {
    const farmers = await Farmer.findAll({
    attributes: [sequelize.fn("AVG", sequelize.col("id"))],
                  raw: true
                });
                return farmers;
                } */


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


