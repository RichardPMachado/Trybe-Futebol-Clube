import { NextFunction, Request, Response } from 'express';
import ApiError from '../helpers/apiErrors';

export default (
  error: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal Server Error';
  return res.status(statusCode).json({ message });
};
