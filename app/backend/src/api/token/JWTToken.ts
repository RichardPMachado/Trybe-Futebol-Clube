import { sign, verify } from 'jsonwebtoken';
import { ILogin } from '../interfaces/UserInterfaces';

export default class JWTToken {
  private secret = 'jwt_secret';

  createToken(payload: ILogin): string {
    const token = sign(payload, this.secret);
    return token;
  }

  authToken(token: string): ILogin {
    const payload = verify(token, this.secret) as ILogin;
    return payload;
  }
}
