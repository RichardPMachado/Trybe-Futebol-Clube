import * as jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces/UserInterfaces';

export default class JWTToken {
  private secret = 'jwt_secret_tfc';

  createToken(payload: ILogin): string {
    const token = jwt.sign(payload, this.secret);
    return token;
  }

  authToken(token: string): ILogin {
    const payload = jwt.verify(token, this.secret) as ILogin;
    return payload;
  }
}
