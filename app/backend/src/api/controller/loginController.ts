import { Request, Response } from 'express';
import InvalidEmailOrPasswordError from '../helpers/InvalidEmailOrPasswordError';
import { IUserRepository } from '../interfaces/UserInterfaces';

export default class LoginController {
  private _service: IUserRepository;

  constructor(service: IUserRepository) {
    this._service = service;
  }

  async authLogin(request: Request, response: Response) {
    const { email, password } = request.body;
    const token = await this._service.getByLogin(email, password);

    if (!token) {
      throw new InvalidEmailOrPasswordError('Invalid email or password');
    }
    console.log(token);

    return response.status(200).json({ token });
  }
}
