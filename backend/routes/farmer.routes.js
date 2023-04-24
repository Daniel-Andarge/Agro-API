const router = require('express').Router();
const { authJwt } = require("../middlewares");
const cache = require('../middlewares/routeCache');
const controller = require("../controllers/farmer.controller");
const { reqRateLimiter } = require('../middlewares/reqRateLimiter');

module.exports = app => {
// Add farmer
router.post('/',  reqRateLimiter,[authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
      try{
      const  { firstname,lastname,farmtype,product,city,address } =  req.body.farmer;
          console.log(firstname);
                if (!firstname || !lastname || !farmtype || !product || !city || !address) {
                  return res.sendStatus(400);
               }
          const farmer =  await controller.insertFarmer(firstname, lastname, farmtype, product, city, address)
          .then(() => res.json({ message: 'Farmer created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

 // Get all Farmers OR by Pagination
router.get('/',cache(100),  [authJwt.verifyToken, authJwt.isModerator], controller.getAllFarmers); 

 // Get all Farmers
router.get('/search',cache(100), async (req, res, next)=>{
       
    try {
        const city = req.query.city;
        const farmers = await controller.getFarmersByCity(city);
        res.status(200).json({farmers: farmers});
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });  

 router.param('id', async (req, res, next, id)=> {
    try{
        const farmer = await controller.getOneFarmer(id);
        req.farmer = farmer;
        console.log('hello')
        next(); // go to router.get('/:id')
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get farmer by id
 router.get('/:id', async   (req, res, next)=>{
    res.status(200).json({farmer: req.farmer});
 });

// Update farmer
 router.put('/:id', reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
    try{
    const  { firstname, lastname, farmtype, product, city, address, id } =  req.body.farmer;
        if (!firstname || !lastname || !farmtype || !product || !city || !address ) {
            return res.sendStatus(400);
      }
      const farmer =  await controller.updateFarmer(firstname, lastname, farmtype, product, city, address,id)
        .then(()=>{return controller.getOneFarmer(id);});
         res.json({farmer: farmer});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete farmer
 router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await controller.deleteFarmer(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/v1/farmers', router); 
}