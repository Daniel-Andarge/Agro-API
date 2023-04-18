module.exports = (sequelize, Sequelize) => {
const Buyer = sequelize.define('buyer', 
  {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  name: {
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
       /* isAlpha: {
        msg: "Invalid input, Please use letters only"
      }  */
    },
  },
  phone: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter phone'
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

return Buyer;
};