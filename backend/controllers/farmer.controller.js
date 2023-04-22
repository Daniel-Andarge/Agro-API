const db = require('../models/index');
const { Op } = require("sequelize");
/* const getPagination = require('../middlewares/Pagination/getPagination');
const getPagingData = require('../middlewares/Pagination/getPagingData'); */
const Farmer = db.farmers;

// Pagination 
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: farmers } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, farmers, totalPages, currentPage };
};


/*  const insertFarmer = async (req, res) => {
  const {firstname, lastname, farmtype, product, city, address} = req.body;
  await Farmer.create (
    {firstname, lastname, farmtype, product, city, address}
    )
}  */
  // Add Farmer
async function insertFarmer(firstname, lastname, farmtype, product, city, address) {
  await Farmer.create (
    {firstname, lastname, farmtype, product, city, address}
    );
}

 // Get All Farmers 
 const getAllFarmers = async (req, res) => {  
  const { page, size, city } = req.query;
    var condition = city ? { city: { [Op.iLike]: `${city}%` } } : null;
  
    const { limit, offset } = getPagination(page, size);
  
   await Farmer.findAndCountAll({ where: condition, limit, offset })
  // return data;
       .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      }) 
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving farmers."
        });
      }); 
}; 

// Search Farmers by City
async function getFarmersByCity(city) {
  const farmers = await Farmer.findAll({
    limit: 2,
    where: {
      city: {
        [Op.iLike]: `${city}%` 
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


/* module.exports ={

  getAllFarmers
} */
module.exports ={
  insertFarmer,
  getAllFarmers,
  updateFarmer,
  getOneFarmer,
  getFarmersByCity,
  deleteFarmer
};