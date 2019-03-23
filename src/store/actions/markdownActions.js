import { UPDATE_MARKDOWN } from './types';

export const updateMarkdown = markdown => {
  return {
    type: UPDATE_MARKDOWN,
    markdown,
  };
};
