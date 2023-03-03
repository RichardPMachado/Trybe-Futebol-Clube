import { Request, Response, NextFunction } from 'express';
import TokenNotFoundError from '../helpers/TokenNoFoundError';
import JWTToken from '../token/JWTToken';

const JWT = new JWTToken();

export default class Auth {
  public static checkToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw new TokenNotFoundError('Token not found');
    const a = authorization.split(' ');
    if (a[0] === 'token') {
      throw new TokenNotFoundError('Token must be a valid token');
    }
    const payload = JWT.authToken(authorization);

    req.body.payload = payload;

    next();
  }
}
