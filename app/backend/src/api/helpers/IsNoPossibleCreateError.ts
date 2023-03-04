import ApiError from './apiErrors';

export default class IsNoPossibleCreateError extends ApiError {
  constructor(message: string) {
    super(message, 422);
  }
}
