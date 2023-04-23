const router = require('express').Router();
const { authJwt } = require("../middlewares");
const cache = require('../middlewares/routeCache');
const controller = require('../controllers/price.controller');
const { reqRateLimiter } = require('../middlewares/reqRateLimiter');

module.exports = app => {
// Add price
router.post('/',  reqRateLimiter, async (req, res, next)=>{
      try{
          const { } = req.body.price;
          console.log(firstname);
                if (!firstname || !lastname || !farmtype || !product || !city || !address) {
                  return res.sendStatus(400);
               }
    
          const price =  await insertPrice(firstname, lastname, farmtype, product, city, address)
          .then(() => res.json({ message: 'Price created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

// Get all Prices
router.get('/',cache(100), async (req, res, next)=>{
       
      try {
          const prices = await getAllPrices();
          res.status(200).json({prices: prices});
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
   });

router.param('id', async (req, res, next, id)=> {
    try{
        const price = await getOnePrice(id);
        req.price = price;
        next(); // go to router.get('/:id')
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get price by id
 router.get('/:id', async   (req, res, next)=>{
    res.status(200).json({price: req.price});
 });

// Get prices by city.
 router.get('/:city',  reqRateLimiter, cache(100), async (req, res, next)=>{
       
    try {
        const prices = await getByCity();
        res.status(200).json({prices: prices});
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });

// Update price
 router.put('/:priceid', reqRateLimiter, async (req, res, next)=>{
    try{
      const firstname = req.body.price.firstname;
      const lastname = req.body.price.lastname;
      const farmtype = req.body.price.farmtype;
      const product = req.body.price.product;
      const city = req.body.price.city;
      const address = req.body.price.address;
      const id = req.body.price.id;
        if (!firstname || !lastname || !farmtype || !product || !city || !address ) {
            return res.sendStatus(400);
      }
      const price =  await updatePrice(firstname, lastname, farmtype, product, city, address,id)
        .then(()=>{return getOnePrice(id);});
         res.json({price: price});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete price
 router.delete('/:id', async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await deletePrice(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/prices', router); 
}