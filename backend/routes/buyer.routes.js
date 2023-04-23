const router = require('express').Router();
const { authJwt } = require("../middlewares");
const cache = require('../middlewares/routeCache');
const controller = require('../controllers/buyer.controller');
const { reqRateLimiter } = require('../middlewares/reqRateLimiter');

module.exports = app => {
// Add buyer
router.post('/', async (req, res, next)=>{
      try{
          const { name, city, phone } = req.body.buyer;
          console.log(name);
                if (!name || !city || !phone) {
                  return res.sendStatus(400);
               }
          const buyer =  await controller.insertBuyer (name, city, phone)
          .then(() => res.json({ message: 'Buyer created.' }));
        } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

// Get all Buyers
router.get('/',cache(100), async (req, res, next)=>{
      try {
          const buyers = await controller.getAllBuyers();
          res.status(200).json({buyers: buyers});
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
   });

router.param('id', async (req, res, next, id)=> {
    try{
        const buyer = await controller.getOneBuyer(id);
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
 router.put('/:buyerid', reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next) => {
    try{
        const { name, city, phone, id } = req.body.buyer;
        if (!name || !city || !phone) {
            return res.sendStatus(400);
         }

      const buyer =  await controller.updateBuyer (name, city, phone,id)
        .then(()=>{return controller.getOneBuyer(id);});
         res.json({buyer: buyer});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete buyer
 router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await controller.deleteBuyer(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/buyers', router); 
}