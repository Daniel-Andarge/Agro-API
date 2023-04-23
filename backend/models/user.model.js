module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
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
  
    return User;
  };