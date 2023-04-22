// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const { page, size, city } = req.query;
    var condition = city ? { city: { [Op.iLike]: `${city}%` } } : null;
  
    const { limit, offset } = getPagination(page, size);
  
    Tutorial.findAndCountAll({ where: condition, limit, offset })
      .then(data => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving farmers."
        });
      });
  };