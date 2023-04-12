const db = require('../models/index');


const Farmer = db.farmers;

module.exports ={
  getAllFarmers
};




async function getAllFarmers() {
 
  const farmers = await Farmer.findAll();
    
   return farmers;
 
 
  }










/* const db = require("../models");
const Farmer = db.farmers;
const Op = db.Sequelize.Op;


// Create and Save a new Farmer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Farmer
  const farmer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    farmType: req.body.farmType,
    product: req.body.product,
    city: req.body.city,
    address: req.body.address,
  };

  // Save Farmer in the database
  Farmer.create(farmer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Farmer."
      });
    });
};

// Retrieve all Farmers from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Farmer.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving farmers."
        });
      });
  };

  // Find a single Farmer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Farmer.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Farmer with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving farmer with id=" + id
      });
    });
};

// Update a Farmer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Farmer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Farmer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Farmer with id=${id}. Maybe farmer was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating farmer with id=" + id
      });
    });
};

// Delete a Farmer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Farmer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Farmer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Farmer with id=${id}. Maybe Farmer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Farmer with id=" + id
      });
    });
};

// Delete all Farmers from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Farmers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all farmers."
      });
    });
};
 */