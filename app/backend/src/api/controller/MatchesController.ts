import { Request, Response } from 'express';
import { MatchesService } from '../services';

export default class MatchesController {
  private _service: MatchesService;

  constructor(service: MatchesService) {
    this._service = service;
  }

  async getAll(_request: Request, response: Response) {
    const matches = await this._service.getAll();
    return response.status(200).json(matches);
  }
}
