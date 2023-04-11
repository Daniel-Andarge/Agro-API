module.exports = (sequelize, Sequelize) => {
    
const  Farmer = sequelize.define('farmer', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    farmType: {
      type: Sequelize.STRING
    },
    product: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    }
  });
  
    return Farmer;
  };