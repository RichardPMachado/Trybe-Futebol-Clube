import { Request, Response } from 'express';
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
    const match = await this._service.createMatch(
      Number(homeTeamId),
      Number(awayTeamId),
      Number(homeTeamGoals),
      Number(awayTeamGoals),
    );
    return response.status(201).json(match);
  }
}
