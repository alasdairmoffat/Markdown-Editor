import { UPDATE_ERROR, CLEAR_ERROR } from './types';

export const updateError = error => ({
  type: UPDATE_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
