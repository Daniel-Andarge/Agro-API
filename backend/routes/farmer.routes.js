
const cache = require('../middlewares/routeCache');
const { reqRateLimiter } = require('../middlewares/reqRateLimiter')
const router = require('express').Router();
const {
       insertFarmer, 
       getAllFarmers,
       getOneFarmer,
       getFarmersByCity, 
       updateFarmer,
       deleteFarmer
    } = require('../controllers/farmer.controller')

module.exports = app => {
// Add farmer
router.post('/',  reqRateLimiter, async (req, res, next)=>{
      try{
          const firstname = req.body.farmer.firstname;
          const lastname = req.body.farmer.lastname;
          const farmtype = req.body.farmer.farmtype;
          const product = req.body.farmer.product;
          const city = req.body.farmer.city;
          const address = req.body.farmer.address;
          console.log(firstname);
                if (!firstname || !lastname || !farmtype || !product || !city || !address) {
                  return res.sendStatus(400);
               }
    
          const farmer =  await insertFarmer(firstname, lastname, farmtype, product, city, address)
          .then(() => res.json({ message: 'Farmer created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

 // Get all Farmers OR by Pagination
router.get('/',cache(100), getAllFarmers, async (req, res, next)=>{
   
}); 

 // Get all Farmers
router.get('/search',cache(100), async (req, res, next)=>{
       
    try {
        const city = req.query.city;
        const farmers = await getFarmersByCity(city);
        res.status(200).json({farmers: farmers});
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });  

 router.param('id', async (req, res, next, id)=> {
    try{
        const farmer = await getOneFarmer(id);
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
// Search farmers by city.

/* router.get('/search', async   (req, res)=>{
    let data = await Farmer.find()
    res.status(200).json({farmer: req.farmer});
 });
 */

/*  router.param('city', async (req, res, next, city)=> {
    try{
        const city = await getFarmerscity(req.params.city);
        req.city = city;
        next(); // go to router.get('/:id')
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
// Get farmers by city.
router.get('/:city', async   (req, res, next)=>{
    res.status(200).json({farmer: req.farmer});
 }); */

// Update farmer
 router.put('/:id', reqRateLimiter, async (req, res, next)=>{
    try{
      const firstname = req.body.farmer.firstname;
      const lastname = req.body.farmer.lastname;
      const farmtype = req.body.farmer.farmtype;
      const product = req.body.farmer.product;
      const city = req.body.farmer.city;
      const address = req.body.farmer.address;
      const id = req.body.farmer.id;
        if (!firstname || !lastname || !farmtype || !product || !city || !address ) {
            return res.sendStatus(400);
      }
      const farmer =  await updateFarmer(firstname, lastname, farmtype, product, city, address,id)
        .then(()=>{return getOneFarmer(id);});
         res.json({farmer: farmer});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });


// Delete farmer
 router.delete('/:id', async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await deleteFarmer(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/farmers', router); 
}