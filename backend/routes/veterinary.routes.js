const router = require('express').Router();
const { authJwt } = require("../middlewares");
const cache = require('../middlewares/routeCache');
const controller = require('../controllers/veterinary.controller');
const { reqRateLimiter } = require('../middlewares/reqRateLimiter');

module.exports = app => {
// Add veterinary
router.post('/',  reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
      try{
          const { } = req.body.veterinary;
          console.log(firstname);
                if (!firstname || !lastname || !farmtype || !product || !city || !address) {
                  return res.sendStatus(400);
               }
          const veterinary =  await controller.insertVeterinary(firstname, lastname, farmtype, product, city, address)
          .then(() => res.json({ message: 'Veterinary created.' }));    
      } catch(e){
          console.log(e);
          res.sendStatus(400);
      }
   });

// Get all Veterinaries
router.get('/',cache(100), async (req, res, next)=>{
       
      try {
          const veterinaries = await controller.getAllVeterinaries();
          res.status(200).json({veterinaries: veterinaries});
      } catch(e) {
          console.log(e);
          res.sendStatus(500);
      }
   });

router.param('id', async (req, res, next, id)=> {
    try{
        const veterinary = await controller.getOneVeterinary(id);
        req.veterinary = veterinary;
        next(); // go to router.get('/:id')
    } catch(e) {
        console.log(e);
        res.sendStatus(404);
    }
 });
  
 // Get veterinary by id
 router.get('/:id', async   (req, res, next)=>{
    res.status(200).json({veterinary: req.veterinary});
 });

// Get veterinaries by city.
 router.get('/:city',  reqRateLimiter,cache(100), async (req, res, next)=>{
    try {
        const veterinaries = await controller.getVeterinariesByCity();
        res.status(200).json({veterinaries: veterinaries});
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
 });

// Update veterinary
 router.put('/:veterinaryid', reqRateLimiter, [authJwt.verifyToken, authJwt.isModerator], async (req, res, next)=>{
    try{
      const { } = req.body.veterinary;
        if (!firstname || !lastname || !farmtype || !product || !city || !address ) {
            return res.sendStatus(400);
      }
      const veterinary =  await updateVeterinary(firstname, lastname, farmtype, product, city, address,id)
        .then(()=>{return getOneVeterinary(id);});
         res.json({veterinary: veterinary});
         
    } catch(e){
        console.log(e);
        res.sendStatus(400);
    }
 });

// Delete veterinary
 router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], async (req, res, next)=>{
  try{
      const id = req.params.id;
      const response = await deleteVeterinary(id);
      return res.sendStatus(204);
  } catch(e){
      console.log(e);
  }
})
app.use('/api/v1/veterinaries', router); 
}