module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
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
  
    return Role;
  };