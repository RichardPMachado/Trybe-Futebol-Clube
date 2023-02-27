'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', { 
      id: {
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        primary: true, 
      },
      clubName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'club_name',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};
