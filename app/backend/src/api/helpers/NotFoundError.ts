import ApiError from './apiErrors';

export default class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}
