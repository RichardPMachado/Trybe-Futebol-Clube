import ApiError from './apiErrors';

export default class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
