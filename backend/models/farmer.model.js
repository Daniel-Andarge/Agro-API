const { DataTypes} = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    
const  Farmer = sequelize.define('farmer', {
    /* id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    }, */
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    createdAt: {
      //allowNull: true,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('NOW()'),
      field: 'created_at',
    },
    updatedAt: {
     // allowNull: true,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('NOW()'),
      field: 'updated_at'
    },
   // freezeTableName: true, // Model tableName will be the same as the model name
    //timestamps: false,
    //underscored: true
   /*  phone: {
      type: Sequelize.INTEGER
    } */
  });
  
    return Farmer;
  };