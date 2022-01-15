import { UPDATE_MARKDOWN, LOAD_FROM_FILE } from '../actions/types';

const initialState = {
  markdown:
    'Enter Markdown \n===========\n Either\n - **Type**\n - **Load File** from the menu\n - Drag and drop **.md** file',
};

export default function markdownReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      return {
        markdown: action.markdown,
      };

    case LOAD_FROM_FILE:
      return {
        ...state,
        markdown: action.markdown,
      };

    default:
      return state;
  }
}
