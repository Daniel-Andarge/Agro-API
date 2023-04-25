const db = require('../models/index');
const { Op } = require("sequelize");
const Buyer = db.buyers;

// Pagination 
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: buyers } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, buyers, totalPages, currentPage };
};

  // Add Buyer
async function insertBuyer(name, city, phone) {
  await Buyer.create (
    {name, city, phone}
    );
}

 // Get All Buyers 
 const getAllBuyers = async (req, res) => {  
  const { page, size, city } = req.query;
    var condition = city ? { city: { [Op.iLike]: `${city}%` } } : null;
  
    const { limit, offset } = getPagination(page, size);
  
   await Buyer.findAndCountAll({ where: condition, limit, offset })
  // return data;
       .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      }) 
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving buyers."
        });
      }); 

    }; 

// Search Buyers by City
async function getBuyersByCity(city) {
  const buyers = await Buyer.findAll({
  //  limit: 2,
    where: {
      city: {
        [Op.iLike]: `${city}%` 
      }}
  });
  return buyers;
} 

// Get Buyers by id
async function getOneBuyer(id) {
  const buyer = await Buyer.findByPk(id);
  return buyer;
}

// Update Buyer 
async function updateBuyer(name, city, phone, id) {
  await Buyer.update(
    { name, city, phone },
     { where: {id: id}}
     );
    }

// Delete Buyer  
async function deleteBuyer(id) {
  const buyer = await getOneBuyer(id);
  await buyer.destroy();
}

module.exports ={
  insertBuyer,
  getAllBuyers,
  updateBuyer,
  getOneBuyer,
  getBuyersByCity,
  deleteBuyer
};