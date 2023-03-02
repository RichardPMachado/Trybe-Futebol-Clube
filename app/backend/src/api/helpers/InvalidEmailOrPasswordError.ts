import ApiError from './apiErrors';

export default class InvalidEmailOrPasswordError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
