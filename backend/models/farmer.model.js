module.exports = (sequelize, Sequelize) => {
    
const  Farmer = sequelize.define('farmer', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    farmtype: {
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
   /*  phone: {
      type: Sequelize.INTEGER
    } */
  });
  
    return Farmer;
  };