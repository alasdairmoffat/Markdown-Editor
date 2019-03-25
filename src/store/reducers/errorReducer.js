import { UPDATE_ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = {
  code: null,
  message: null,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ERROR:
      return {
        code: action.error.code,
        message: action.error.message,
      };

    case CLEAR_ERROR:
      return {
        code: null,
        message: null,
      };

    default:
      return state;
  }
}
