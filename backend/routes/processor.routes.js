const cache = require('../middlewares/routeCache');
const { reqRateLimiter } = require('../middlewares/reqRateLimiter')
const router = require('express').Router();
const {
    insertProcessor,
    getAllProcessors,
    updateProcessor,
    getOneProcessor,
    deleteProcessor
  } = require('../controllers/processor.controller')

module.exports = app => {
// Add Product
router.post('/',  reqRateLimiter, async (req, res, next)=>{
      try{
          const companyname = req.body.processor.companyname;
          const city = req.body.processor.city;
          const phone = req.body.processor.phone;
          const product = req.body.processor.product;
          console.log(companyname);
                if (!companyname || !city || !phone || !product) {
                  return res.sendStatus(400);
               }
    
          const farmer =  await  insertProcessor(companyname, city, phone, product)
          .then(() => res.json({ message: 'Processor created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

// Get all Processors
router.get('/',cache(100), async (req, res, next)=>{
       
      try {
          const processors = await getAllProcessors();
          res.status(200).json({processors: processors});
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
   });

router.param('id', async (req, res, next, id)=> {
    try{
        const processor = await getOneProcessor(id);
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
 router.put('/:processorid', reqRateLimiter, async (req, res, next)=>{
    try{
        const companyname = req.body.processor.companyname;
        const city = req.body.processor.city;
        const phone = req.body.processor.phone;
        const product = req.body.processor.product;
        const id = req.body.processor.id;
        if (!companyname || !city || !phone || !product ) {
            return res.sendStatus(400);
      }
      const processor =  await updateProcessor(companyname, city, phone, product,id)
        .then(()=>{return getOneProcessor(id);});
         res.json({processor: processor});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete processor
 router.delete('/:id', async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await deleteProcessor(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/processors', router); 
}