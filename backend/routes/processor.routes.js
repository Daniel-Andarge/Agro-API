const router = require('express').Router();
const { authJwt } = require("../middlewares");
const cache = require('../middlewares/routeCache');
const controller = require("../controllers/processor.controller");
const { reqRateLimiter } = require('../middlewares/reqRateLimiter');

module.exports = app => {
// Add Product
router.post('/',  reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
      try{
          const { companyname, city, phone, product } = req.body.processor;
          console.log(companyname);
                if (!companyname || !city || !phone || !product) {
                  return res.sendStatus(400);
               }
          const farmer =  await  controller.insertProcessor(companyname, city, phone, product)
          .then(() => res.json({ message: 'Processor created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

// Get all Processors
router.get('/',cache(100), async (req, res, next)=>{
       
      try {
          const processors = await controller.getAllProcessors();
          res.status(200).json({processors: processors});
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
   });

router.param('id', async (req, res, next, id)=> {
    try{
        const processor = await controller.getOneProcessor(id);
        req.processor = processor;
        next();
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get processor by id
 router.get('/:id', async   (req, res, next)=>{
    res.status(200).json({farmer: req.processor});
 });

// Update processor
 router.put('/:processorid', reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
    try{
        const { companyname, city, phone, product, id } = req.body.processor;
        if (!companyname || !city || !phone || !product ) {
            return res.sendStatus(400);
      }
      const processor =  await controller.updateProcessor(companyname, city, phone, product,id)
        .then(()=>{return getOneProcessor(id);});
         res.json({processor: processor});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete processor
 router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await controller.deleteProcessor(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/v1/processors', router); 
}