const { request } = require("express");
const { Op } = require("sequelize");
Farmer.findAll({
  where: {
    city: {
     [Op.like]: request.query.city,
    }
  }
});

// SELECT * FROM post WHERE authorId = 2;


app.get('/notes/:id', function(req, res) {
    Note.findAll({ where: { id: req.params.id } }).then(notes => res.json(notes));
  });