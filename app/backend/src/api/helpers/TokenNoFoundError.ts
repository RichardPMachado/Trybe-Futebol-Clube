import ApiError from './apiErrors';

export default class TokenNotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
