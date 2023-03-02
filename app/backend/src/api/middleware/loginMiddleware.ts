import { NextFunction, Request, Response } from 'express';
import InvalidEmailOrPasswordError from '../helpers/InvalidEmailOrPasswordError';

export default class ValidateLogin {
  static verifyLoginData(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email || !password) {
      return res.status(400)
        .json({ message: 'All fields must be filled' });
    }
    if (!emailRegex.test(email) || password.length < 6) {
      throw new InvalidEmailOrPasswordError('Invalid email or password');
    }
    next();
  }
}
