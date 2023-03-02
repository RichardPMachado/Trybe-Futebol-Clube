import ApiError from './apiErrors';

export default class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}
