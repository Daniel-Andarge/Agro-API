const db = require('../models/index');
const { Op } = require("sequelize");
const Veterinary = db.veterinaries;

// Pagination 
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: veterinaries } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, veterinaries, totalPages, currentPage };
};

  // Add Veterinary
async function insertVeterinary( firstname, lastname, phone, city, address ) {
  await Veterinary.create (
    { firstname, lastname, phone, city, address }
    );
}

 // Get All Veterinaries 
 const getAllVeterinaries = async (req, res) => {  
  const { page, size, city } = req.query;
    var condition = city ? { city: { [Op.iLike]: `${city}%` } } : null;
  
    const { limit, offset } = getPagination(page, size);
  
   await Veterinary.findAndCountAll({ where: condition, limit, offset })
  // return data;
       .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      }) 
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving veterinaries."
        });
      }); 
}; 

// Search Veterinaries by City
async function getVeterinariesByCity(city) {
  const veterinaries = await Veterinary.findAll({
  //  limit: 2,
    where: {
      city: {
        [Op.iLike]: `${city}%` 
      }}
  });
  return veterinaries;
} 

// Get Veterinaries by id
async function getOneVeterinary(id) {
  const farmer = await Veterinary.findByPk(id);
  return farmer;
}

// Update Veterinary 
async function updateVeterinary( firstname, lastname, phone, city, address, id ) {
  await Veterinary.update(
    { firstname, lastname, phone, city, address },
     { where: {id: id}}
     );
    }

// Delete Veterinary  
async function deleteVeterinary(id) {
  const farmer = await getOneVeterinary(id);
  await farmer.destroy();
}

module.exports ={
  insertVeterinary,
  getAllVeterinaries,
  updateVeterinary,
  getOneVeterinary,
  getVeterinariesByCity,
  deleteVeterinary
};