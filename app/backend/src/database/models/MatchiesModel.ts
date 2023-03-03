import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './TeamModel';
// import OtherModel from './OtherModel';

export default class Match extends Model {
  // declare <campo>: <tipo>;
  declare readonly id: number;
  declare homeTeanId: number;
  declare homeTeanGoals: number;
  declare awayTeanId: number;
  declare awayTeanGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  homeTeanId: {
    type: INTEGER,
    field: 'home_tean_id',
    references: {
      model: 'teams',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false,
  },
  homeTeanGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeanId: {
    type: INTEGER,
    field: 'away_tean_id',
    references: {
      model: 'teams',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false,
  },
  awayTeanGoals: {
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
Team.hasMany(Match, { foreignKey: 'id', as: 'matchAwayId' });
Team.hasMany(Match, { foreignKey: 'id', as: 'matchHomeId' });
