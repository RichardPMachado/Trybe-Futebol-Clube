import { ModelStatic } from 'sequelize';
import * as bcryptjs from 'bcryptjs';
import User from '../../database/models/UserModel';
import InvalidEmailOrPasswordError from '../helpers/InvalidEmailOrPasswordError';
import { IUserRepository } from '../interfaces/UserInterfaces';
import JWTToken from '../token/JWTToken';

export default class LoginService implements IUserRepository {
  protected model: ModelStatic<User> = User;
  private _jwtToken = new JWTToken();
  async getByLogin(email: string, password: string): Promise<string> {
    const user = await this.model.findOne({
      where: { email },
    });
    if (!user) throw new InvalidEmailOrPasswordError('Invalid email or password');

    const verifypass = bcryptjs.compare(password, user.password);
    if (!verifypass) throw new InvalidEmailOrPasswordError('Invalid email or password');

    const token = this._jwtToken.createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return token;
  }
}
