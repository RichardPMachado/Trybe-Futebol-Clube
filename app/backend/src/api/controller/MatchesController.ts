import { Request, Response } from 'express';
import { MatchesService } from '../services';

export default class MatchesController {
  private _service: MatchesService;

  constructor(service: MatchesService) {
    this._service = service;
  }

  async getMatches(request: Request, response: Response) {
    const { inProgress } = request.query;

    const matches = inProgress
      ? await this._service.getByQuery()
      : await this._service.getAll();

    return response.status(200).json(matches);
  }
}
