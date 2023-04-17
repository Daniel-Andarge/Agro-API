
module.exports = (sequelize, Sequelize) => {

const  Price = sequelize.define('price', 
  {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  product: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter the product name'
        },
        isAlpha: {
          msg: "Invalid name, Please use letters only"
        } 
    },
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter city'
      },
      isAlpha: {
        msg: "Invalid input, Please use letters only"
      }
    },
  },
  price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter price'
        },
        isNumeric: {
          msg: "Invalid price, Please enter number only"
        } 
    },
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

return Price;
};