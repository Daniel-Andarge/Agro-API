const db = require('../models/index');
const Processor = db.processors;
module.exports = {
  insertProcessor,
  getAllProcessors,
  updateProcessor,
  getOneProcessor,
  deleteProcessor
};

async function insertProcessor(companyname, product, city, phone) {
 
  await Processor.create({companyname, product, city, phone});
 
}
 async function getAllProcessors() {
      
  const processors = await Processor.findAll(/* {
    where: {city: "Addis Ababa"}
  } */);
        return processors;
        } 

async function getOneProcessor(id) {
      
          const processor = await Processor.findByPk(id);
            
          return processor;
        
          }

  async function updateProcessor (companyname, product, city, phone, id){
   
    await Processor.update({companyname, product, city, phone}, { where: {id: id}});
   
 }
 
 async function deleteProcessor(id) {
 
  const processor = await getOneProcessor(id);
    
   await processor.destroy();
 
 
  }


