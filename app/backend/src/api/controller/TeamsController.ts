import { Request, Response } from 'express';
import { ITeamsRepository } from '../interfaces/TeamsInterfaces';

export default class TeamsController {
  constructor(
    private _service: ITeamsRepository,
  ) {}

  async getAll(_request: Request, response: Response) {
    const result = await this._service.getAll();
    return response.status(200).json(result);
  }
}
