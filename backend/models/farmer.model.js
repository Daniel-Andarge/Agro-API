
module.exports = (sequelize, Sequelize) => {

const  Farmer = sequelize.define('farmer', 
  {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your name'
        },
        isAlpha: {
          msg: "Invalid name, Please use letters only"
        } 
    },
  },
  lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your last name'
        },
        isAlpha: {
          msg: "Invalid name, Please use letters only"
        } 
    },
  },
  phone: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: {
        msg: "Phone number is already taken",
      },
      validate: {
        notNull: {
          msg: 'Please enter your Phone number'
        },
        isNumeric: {
          msg: "Invalid phone, Please use numbers only"
        },
        len: {
          args: 10,
          msg: "Phone must be  10 characters in length"
      }
    },
  },
  farmtype: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter the farm type'
      },
      isAlpha: {
        msg: "Invalid input, Please use letters only"
      }
    },
  },
  product: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your product'
      },
      isAlpha: {
        msg: "Invalid input, Please use letters only"
      }
    },
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your city'
      },
      isAlpha: {
        msg: "Invalid input, Please use letters only"
      }
    },
  },
  address: {
      type: Sequelize.STRING,  
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