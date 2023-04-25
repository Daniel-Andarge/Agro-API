const db = require('../models/index');
const { Op } = require("sequelize");
const Processor = db.processors;

// Pagination 
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: processors } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, processors, totalPages, currentPage };
};

  // Add Processor
async function insertProcessor(firstname, lastname, farmtype, product, city, address) {
  await Processor.create (
    {firstname, lastname, farmtype, product, city, address}
    );
}

 // Get All Processors 
 const getAllProcessors = async (req, res) => {  
  const { page, size, city } = req.query;
    var condition = city ? { city: { [Op.iLike]: `${city}%` } } : null;
  
    const { limit, offset } = getPagination(page, size);
  
   await Processor.findAndCountAll({ where: condition, limit, offset })
  // return data;
       .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      }) 
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving processors."
        });
      }); 
}; 

// Search Processors by City
async function getProcessorsByCity(city) {
  const processors = await Processor.findAll({
  //  limit: 2,
    where: {
      city: {
        [Op.iLike]: `${city}%` 
      }}
  });
  return processors;
} 

// Get Processors by id
async function getOneProcessor(id) {
  const farmer = await Processor.findByPk(id);
  return farmer;
}

// Update Processor 
async function updateProcessor(firstname, lastname, farmtype, product, city, address, id) {
  await Processor.update(
    { firstname, lastname, farmtype, product, city, address },
     { where: {id: id}}
     );
    }

// Delete Processor  
async function deleteProcessor(id) {
  const farmer = await getOneProcessor(id);
  await farmer.destroy();
}

module.exports ={
  insertProcessor,
  getAllProcessors,
  updateProcessor,
  getOneProcessor,
  getProcessorsByCity,
  deleteProcessor
};