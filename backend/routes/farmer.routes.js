module.exports = app => {
    const farmers = require("../controllers/farmer.controller");

    var router = require('express').Router();


    router.get("/", farmers.findAll);

    app.use('/api/farmers', router);
}