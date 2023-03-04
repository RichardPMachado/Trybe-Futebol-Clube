import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchesModel';
import { IMatches, IMatchesRepository } from '../interfaces/MachesInterfaces';
import IsNoPossibleCreateError from '../helpers/IsNoPossibleCreateError';
import NotFoundError from '../helpers/NotFoundError';

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

  async getByQuery(inProgress: boolean): Promise<IMatches[]> {
    const matches = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async getupdateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<string> {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return 'Atualido com sucesso';
  }

  async updateFinishMatch(id: number) {
    await this.model.update({ inProgress: false }, { where: { id } });
    return 'Finish';
  }

  async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IMatches> {
    if (!homeTeamId || !awayTeamId) throw new NotFoundError('There is no team with such id!');
    if (homeTeamId === awayTeamId) {
      throw new IsNoPossibleCreateError(
        'It is not possible to create a match with two equal teams',
      );
    }
    const match = await this.model.create({
      homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true,
    });
    return match;
  }
}
