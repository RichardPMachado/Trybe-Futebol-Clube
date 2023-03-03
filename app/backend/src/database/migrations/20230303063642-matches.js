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
      homeTeamId: {
        type: Sequelize.INTEGER,
        field: 'home_team_id',
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      homeTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'home_team_goals',

      },
      awayTeamId: {
        type: Sequelize.INTEGER,
        field: 'away_team_id',
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      awayTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'away_team_goals',
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        field: 'in_progress'
      }
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
     
  }
};

