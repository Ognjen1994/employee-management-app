import { API_ERROR } from '../types/apiErrorTypes';

export const apiError = (errorMessage: string) => ({
  type: API_ERROR,
  payload: errorMessage,
});
