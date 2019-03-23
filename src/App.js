import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import PreviewWindow from './components/PreviewWindow';
import EditorWindow from './components/EditorWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h1>Markdown Editor</h1>
          <hr />
          <EditorWindow />
          <hr />
          <PreviewWindow />
        </Provider>
      </div>
    );
  }
}

export default App;
