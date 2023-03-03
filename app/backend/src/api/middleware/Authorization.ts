import { Request, Response, NextFunction } from 'express';
import TokenNotFoundError from '../helpers/TokenNoFoundError';
import JWTToken from '../token/JWTToken';

const JWT = new JWTToken();

export default class Auth {
  public static checkToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) throw new TokenNotFoundError('Token not found');

    const payload = JWT.authToken(authorization);

    req.body = payload;

    next();
  }
}
