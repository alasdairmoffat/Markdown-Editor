import { UPDATE_MARKDOWN } from '../actions/types';

const initialState = {
  markdown: '# Marked in browser\n\nRendered by **marked**.',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      return {
        markdown: action.markdown,
      };

    default:
      return state;
  }
};
