const db = require("../models");
const Farmer = db.farmers;
const Op = db.Sequelize.Op;







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