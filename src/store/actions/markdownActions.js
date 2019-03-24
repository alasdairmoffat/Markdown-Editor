import { UPDATE_MARKDOWN, LOAD_FROM_FILE } from './types';

export const updateMarkdown = markdown => {
  return {
    type: UPDATE_MARKDOWN,
    markdown,
  };
};

export const loadFromFile = file => async dispatch => {
  const markdown = await readFile(file);

  dispatch({
    type: LOAD_FROM_FILE,
    markdown,
  });
};

const readFile = file => {
  return new Promise(resolve => {
    var reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsText(file);
  });
};
