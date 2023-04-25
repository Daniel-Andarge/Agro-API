
module.exports = (sequelize, Sequelize) => {
const Veterinary = sequelize.define('veterinary', 
  {
  id: {
      type: Sequelize.INTEGER,
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
  },
},
lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your last name'
        },
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
        len: {
          args: 10,
          msg: "Phone must be  10 characters in length"
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

return Veterinary;
};