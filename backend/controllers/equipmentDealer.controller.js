const db = require('../models/index');
const { Op } = require("sequelize");
const EquipmentDealer = db.equipmentDealers;

// Pagination 
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: equipmentDealers } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, equipmentDealers, totalPages, currentPage };
};
  // Add EquipmentDealer
async function insertEquipmentDealer (companyname, state, phone, category, product, city, address) {
  await EquipmentDealer.create (
    {companyname, state, phone, category, product, city, address}
    );
}

 // Get All EquipmentDealers 
const getAllEquipmentDealers = async (req, res) => {  
  const { page, size, city } = req.query;
    var condition = city ? { city: { [Op.iLike]: `${city}%` } } : null;
    const { limit, offset } = getPagination(page, size);
  
   await EquipmentDealer.findAndCountAll({ where: condition, limit, offset })
       .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      }) 
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving EquipmentDealers."
        });
      }); 
}; 

// Search EquipmentDealers by City
async function getEquipmentDealersByCity(city) {
  const equipmentDealers = await EquipmentDealer.findAll({
    limit: 2,
    where: {
      city: {
        [Op.iLike]: `${city}%` 
      }}
  });
  return equipmentDealers;
} 

// Get EquipmentDealers by id
async function getOneEquipmentDealer(id) {
  const equipmentDealer = await EquipmentDealer.findByPk(id);
  return equipmentDealer;
}

// Update EquipmentDealer 
async function updateEquipmentDealer(companyname, state, phone, category, product, city, address, id) {
  await EquipmentDealer.update(
    { companyname, state, phone, category, product, city, address },
     { where: {id: id}}
     );
    }

// Delete EquipmentDealer  
async function deleteEquipmentDealer(id) {
  const equipmentDealer = await getOneEquipmentDealer(id);
  await equipmentDealer.destroy();
}

module.exports ={
  insertEquipmentDealer,
  getAllEquipmentDealers,
  getOneEquipmentDealer,
  getEquipmentDealersByCity,
  updateEquipmentDealer,
  deleteEquipmentDealer
};