const { DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    
const  Farmer = sequelize.define('farmer', {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('NOW()'),
      field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('NOW()'),
      field: 'updated_at'
    },

  });
  
    return Farmer;
  };