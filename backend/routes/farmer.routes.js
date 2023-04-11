module.exports = app => {
    const farmers = require("../controllers/farmer.controller");

    var router = require('express').Router();

     // Retrieve all Farmers
    router.get("/", farmers.findAll);

     // Retrieve a single Farmer with id
    router.get("/:id", farmers.findOne);

     // Update a Farmer with id
    router.put("/:id", farmers.update);

app.use('/api/farmers', router);
}