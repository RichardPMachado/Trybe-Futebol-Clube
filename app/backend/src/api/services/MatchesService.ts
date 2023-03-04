import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchesModel';
import { IMatches, IMatchesRepository } from '../interfaces/MachesInterfaces';

export default class MatchesService implements IMatchesRepository {
  protected model: ModelStatic<Match> = Match;

  async getAll(): Promise<IMatches[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  }

  async getByQuery(): Promise<IMatches[]> {
    const matches = await this.model.findAll({
      where: { inProgress: true },
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }
}
