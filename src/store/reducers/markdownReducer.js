import { UPDATE_MARKDOWN, LOAD_FROM_FILE } from '../actions/types';

const initialState = {
  markdown: '# Marked in browser\n\nRendered by **marked**.',
};

export default (state = initialState, action) => {
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
};
