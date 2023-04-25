const router = require('express').Router();
const { authJwt } = require("../middlewares");
const cache = require('../middlewares/routeCache');
const { reqRateLimiter } = require('../middlewares/reqRateLimiter')
const controller = require("../controllers/equipmentDealer.controller")

module.exports = app => {
// Add equipmentDealer
router.post('/',  reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
      try{
        const { companyname, state, phone, category, product, city, address } = req.body.equipmentDealer;
          console.log(companyname);
                if (!companyname || !state || !phone || !product || !city || !address || !category) {
                  return res.sendStatus(400);
               }
          const equipmentDealer =  await controller.insertEquipmentDealer(companyname, state, phone, category, product, city, address)
          .then(() => res.json({ message: 'EquipmentDealer created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

 // Get all EquipmentDealers OR by Pagination
router.get('/',cache(100), [authJwt.verifyToken],  controller.getAllEquipmentDealers); 

 // Get all EquipmentDealers
router.get('/search',cache(100), async (req, res, next)=>{     
    try {
        const city = req.query.city;
        const EquipmentDealers = await controller.getEquipmentDealersByCity(city);
        res.status(200).json({EquipmentDealers: EquipmentDealers});
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });  

 router.param('id', async (req, res, next, id)=> {
    try{
        const equipmentDealer = await controller.getOneEquipmentDealer(id);
        req.equipmentDealer = equipmentDealer;
        console.log('hello')
        next(); // go to router.get('/:id')
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get equipmentDealer by id
 router.get('/:id', [authJwt.verifyToken], async   (req, res, next)=>{
    res.status(200).json({equipmentDealer: req.equipmentDealer});
 });

// Update equipmentDealer
 router.put('/:id', reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
    try{
        const {companyname, state, phone, category, product, city, address, id} = req.body.equipmentDealer;
        if (!companyname || !state || !phone || !category || !product || !city || !address ) {
            return res.sendStatus(400);
      }
      const equipmentDealer =  await controller.updateEquipmentDealer(companyname, state, phone, category, product, city, address, id)
        .then(()=>{return controller.getOneEquipmentDealer(id);});
         res.json({equipmentDealer: equipmentDealer});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete equipmentDealer
 router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await controller.deleteEquipmentDealer(id);
      return res.sendStatus(204)
  } catch(e){
      console.log(e);
  }
})
app.use('/api/v1/equipmentDealers', router); 
}