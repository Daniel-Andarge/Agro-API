const db = require('../models/index');
const { Op } = require("sequelize");
const Farmer = db.farmers;
module.exports ={
  insertFarmer,
  getAllFarmers,
  updateFarmer,
  getOneFarmer,
  getFarmersByCity,
  deleteFarmer
};
  // Add Farmer
async function insertFarmer(firstname, lastname, farmtype, product, city, address) {
  await Farmer.create (
    {firstname, lastname, farmtype, product, city, address}
    );
}

 // Get All Farmers 
async function getAllFarmers() {  
  const farmers = await Farmer.findAll();
      return farmers;
} 

// Search Farmers by City
async function getFarmersByCity(city) {
  const farmers = await Farmer.findAll({
    where: {
      city: {
        [Op.iLike]: city,
      }}
  });
  return farmers;
} 

// Get Farmers by id
async function getOneFarmer(id) {
  const farmer = await Farmer.findByPk(id);
  return farmer;
}

// Update Farmer 
async function updateFarmer(firstname, lastname, farmtype, product, city, address, id) {
  await Farmer.update(
    { firstname, lastname, farmtype, product, city, address },
     { where: {id: id}}
     );
    }

// Delete Farmer  
async function deleteFarmer(id) {
  const farmer = await getOneFarmer(id);
  await farmer.destroy();
}


