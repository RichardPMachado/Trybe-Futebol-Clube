import { NextFunction, Request, Response } from 'express';

export default class ValidateLogin {
  static verifyLoginData(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400)
        .json({ message: 'All fields must be filled' });
    }
    next();
  }
}
