import { ModelStatic } from 'sequelize';
import * as bcryptjs from 'bcryptjs';
import User from '../../database/models/UserModel';
import InvalidEmailOrPasswordError from '../helpers/InvalidEmailOrPasswordError';
import { ILogin, IRole, IUserRepository } from '../interfaces/UserInterfaces';
import JWTToken from '../token/JWTToken';
import TokenNotFoundError from '../helpers/TokenNoFoundError';

export default class LoginService implements IUserRepository {
  protected model: ModelStatic<User> = User;
  private _jwtToken = new JWTToken();
  async getByLogin(email: string, password: string): Promise<string> {
    const user = await this.model.findOne({
      where: { email },
    });
    if (!user) throw new InvalidEmailOrPasswordError('Invalid email or password');

    const verifypass = bcryptjs.compareSync(password, user.password);
    if (!verifypass) throw new InvalidEmailOrPasswordError('Invalid email or password');

    const token = this._jwtToken.createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return token;
  }

  async authLogin(payload: ILogin): Promise<IRole> {
    const user = await this.model.findOne({ where: { email: payload.email } });
    if (!user) throw new TokenNotFoundError('Token must be a valid token');
    return { role: user.role };
  }
}
