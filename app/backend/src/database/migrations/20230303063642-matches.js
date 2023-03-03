'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
      },
      homeTeanId: {
        type: Sequelize.INTEGER,
        field: 'home_tean_id',
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      homeTeanGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      awayTeanId: {
        type: Sequelize.INTEGER,
        field: 'away_tean_id',
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      awayTeanGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.BO,
      }
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
     
  }
};
