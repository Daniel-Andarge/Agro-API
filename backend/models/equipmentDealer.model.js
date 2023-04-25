module.exports = (sequelize, Sequelize) => {
    const  EquipmentDealer = sequelize.define('equipdealer',
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
              msg: 'Please enter your name'
            },
        },
    },
    address: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter state'
          },
        },
    },
    city: {
    type: Sequelize.STRING,
    allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter city'
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
              msg: 'Please enter  Phone number'
            },
            isNumeric: {
              msg: "Invalid phone, Please use numbers only"
            },
        },
    }, 
    product: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter farm type'
          },
        },
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter  category'
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
    
    return EquipmentDealer;
    };