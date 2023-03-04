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

  async getFinishMatches(request: Request, response: Response) {
    const { id } = request.params;
    const message = await this._service.getFinishMatch(Number(id));
    return response.status(200).json({ message });
  }
}
