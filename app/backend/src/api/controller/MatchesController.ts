import { Request, Response } from 'express';
import IsNoPossibleCreateError from '../helpers/IsNoPossibleCreateError';
import NotFoundError from '../helpers/NotFoundError';
import { MatchesService } from '../services';

export default class MatchesController {
  private _service: MatchesService;

  constructor(service: MatchesService) {
    this._service = service;
  }

  async getMatches(request: Request, response: Response) {
    const { inProgress } = request.query;
    const query = inProgress === 'true';
    const matches = inProgress
      ? await this._service.getByQuery(query as boolean)
      : await this._service.getAll();

    return response.status(200).json(matches);
  }

  async getupdatehMatch(request: Request, response: Response) {
    const { id } = request.params;
    const { homeTeamGoals, awayTeamGoals } = request.body;
    const message = await this._service.getupdateMatch(Number(id), homeTeamGoals, awayTeamGoals);
    return response.status(200).json({ message });
  }

  async updateFinishMatches(request: Request, response: Response) {
    const { id } = request.params;
    const message = await this._service.updateFinishMatch(Number(id));
    return response.status(200).json({ message });
  }

  async createMatches(request: Request, response: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = request.body;
    if (!homeTeamId || !awayTeamId || !homeTeamGoals || !awayTeamGoals) {
      throw new NotFoundError('There is no team with such id!');
    }
    const match = await this._service.createMatch(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );

    if (match === 'not found') throw new NotFoundError('There is no team with such id!');
    if (match === 'is no possible create error') {
      throw new IsNoPossibleCreateError(
        'It is not possible to create a match with two equal teams',
      );
    }
    return response.status(201).json(match);
  }
}
