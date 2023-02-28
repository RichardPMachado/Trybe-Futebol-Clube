import { ModelStatic } from 'sequelize';
import { ITeam, ITeamsRepository } from '../interfaces/TeamsInterfaces';
import Team from '../../database/models/TeamModel';

export default class TeamsService implements ITeamsRepository {
  protected model: ModelStatic<Team> = Team;

  async getAll(): Promise<ITeam[]> {
    const result = await this.model.findAll();
    return result;
  }
}
