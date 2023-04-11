module.exports = app => {
    const farmers = require("../controllers/farmer.controller");

    var router = require('express').Router();

     // Create a new Farmer
    router.post("/", farmers.create);
    
     // Retrieve all Farmers
    router.get("/", farmers.findAll);

     // Retrieve a single Farmer with id
    router.get("/:id", farmers.findOne);

     // Update a Farmer with id
    router.put("/:id", farmers.update);

      // Delete a Farmer with id
    router.delete("/:id", farmers.delete);

     // Delete all Farmers
    router.delete("/", farmers.deleteAll);


app.use('/api/farmers', router);
}