module.exports = app => {
    //const farmers = require("../controllers/farmer.controller");

    const router = require('express').Router();
    const {getAllFarmers,insertFarmer, getOneFarmer, updateFarmer, deleteFarmer} = require('../controllers/farmer.controller')



    router.post('/',  async (req, res, next)=>{
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

          // Retrieve all Farmers
    router.get('/', async (req, res, next)=>{
      try {
          const farmers = await getAllFarmers();
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
        next(); // go to router.get('/:id')
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get a farmer
  
 router.get('/:id',  (req, res, next)=>{
    res.status(200).json({farmer: req.farmer});
 });


// Update a farmer
   router.put('/:id',  async (req, res, next)=>{
    try{
      const firstname = req.body.farmer.firstname;
      const lastname = req.body.farmer.lastname;
      const farmtype = req.body.farmer.farmtype;
      const product = req.body.farmer.product;
      const city = req.body.farmer.city;
      const address = req.body.farmer.address;
      const id = req.body.farmer.id;
   
            if (!firstname || !lastname || !farmtype || !product || !city || !address || !id) {
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

 router.delete('/:id', async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await deleteFarmer(id);
      return res.sendStatus(204);

  } catch(e){
      console.log(e);
  }
})
  // module.exports = apiRouter;

  /*    // Create a new Farmer
    router.post("/", farmers.create);
    
   
    router.get("/", farmers.findAll);

     // Retrieve a single Farmer with id
    router.get("/:id", farmers.findOne);

     // Update a Farmer with id
    router.put("/:id", farmers.update);

      // Delete a Farmer with id
    router.delete("/:id", farmers.delete);

     // Delete all Farmers
    router.delete("/", farmers.deleteAll);
*/

app.use('/api/farmers', router);  
}