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

  async updateFinishMatch(id: number) {
    await this.model.update({ inProgress: false }, { where: { id } });
    return 'Finished';
  }

  async getupdateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<string> {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return 'Atualizado com sucesso';
  }

  async createMatch(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IMatches | string> {
    const homeTeam = await this.model.findByPk(Number(homeTeamId));
    const awayTeam = await this.model.findByPk(Number(homeTeamId));
    if (!homeTeam || !awayTeam) return 'not found';

    if (homeTeam === awayTeam) return 'is no possible create error';

    const match = await this.model.create({
      homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true,
    });
    return match;
  }
}
