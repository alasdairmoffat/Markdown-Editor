import { combineReducers } from 'redux';
import markdownReducer from './markdownReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  markdown: markdownReducer,
  error: errorReducer,
});
