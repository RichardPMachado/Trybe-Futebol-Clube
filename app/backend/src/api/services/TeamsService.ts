import { ModelStatic } from 'sequelize';
import { ITeam, ITeamsRepository } from '../interfaces/TeamsInterfaces';
import Team from '../../database/models/TeamModel';

export default class TeamsService implements ITeamsRepository {
  protected model: ModelStatic<Team> = Team;

  async getAll(): Promise<ITeam[]> {
    const result = await this.model.findAll();
    return result;
  }

  async getById(id: number): Promise<ITeam> {
    const result = await this.model.findByPk(id);
    if (!result) throw new Error('O time requisitado não foi encontrado');
    return result;
  }
}
