
module.exports = (sequelize, Sequelize) => {
const Processor = sequelize.define('processor', 
  {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
},
companyname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter company name'
        },
      }
},
product: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your last name'
        },
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
phone: {
  type: Sequelize.INTEGER,
  allowNull: false,
  validate: {
    notNull: {
      msg: 'Please enter phone'
    },
    
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

return Processor;
};