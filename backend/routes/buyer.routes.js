const cache = require('../middlewares/routeCache');
const { reqRateLimiter } = require('../middlewares/reqRateLimiter')
const router = require('express').Router();
const {
    insertBuyer,
    getAllBuyers,
    getOneBuyer,
    updateBuyer,
    buyerByCity,
    deleteBuyer
  } = require('../controllers/buyer.controller')

module.exports = app => {
// Add buyer
router.post('/', async (req, res, next)=>{
      try{
          const name = req.body.buyer.name;
          const city = req.body.buyer.city;
          const phone = req.body.buyer.phone;
          console.log(name);
                if (!name || !city || !phone) {
                  return res.sendStatus(400);
               }
    
          const buyer =  await insertBuyer (name, city, phone)
          .then(() => res.json({ message: 'Buyer created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

// Get all Buyers
router.get('/',cache(100), async (req, res, next)=>{
      try {
          const buyers = await getAllBuyers();
          res.status(200).json({buyers: buyers});
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
   });

router.param('id', async (req, res, next, id)=> {
    try{
        const buyer = await getOneBuyer(id);
        req.buyer = buyer;
        next(); 
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get buyer by id
 router.get('/:id', async   (req, res, next)=>{
    res.status(200).json({buyer: req.buyer});
 });


// Update buyer
 router.put('/:buyerid', reqRateLimiter, async (req, res, next)=>{
    try{
        const name = req.body.buyer.name;
        const city = req.body.buyer.city;
        const phone = req.body.buyer.phone;
        const id = req.body.buyer.id;
        if (!name || !city || !phone) {
            return res.sendStatus(400);
         }

      const buyer =  await updateBuyer (name, city, phone,id)
        .then(()=>{return getOneBuyer(id);});
         res.json({buyer: buyer});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete buyer
 router.delete('/:id', async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await deleteBuyer(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/buyers', router); 
}