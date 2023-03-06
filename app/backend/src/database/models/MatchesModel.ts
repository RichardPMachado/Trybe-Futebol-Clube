import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './TeamModel';
// import OtherModel from './OtherModel';

class Match extends Model {
  // declare <campo>: <tipo>;
  declare readonly id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  homeTeamId: {
    type: INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamId: {
    type: INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'matches',
});

Match.belongsTo(Team, { foreignKey: 'away_team_id', as: 'awayTeam' });
Match.belongsTo(Team, { foreignKey: 'home_team_id', as: 'homeTeam' });
// Team.hasMany(Match, { foreignKey: 'id', as: 'matchAwayId' });
// Team.hasMany(Match, { foreignKey: 'id', as: 'matchHomeId' });

export default Match;
