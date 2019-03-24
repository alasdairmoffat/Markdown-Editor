import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { Container, Row, Col } from 'reactstrap';

import './App.css';
import AppNavbar from './components/AppNavbar';
import PreviewWindow from './components/PreviewWindow';
import EditorWindow from './components/EditorWindow';
import FileUpload from './components/FileUpload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppNavbar />
          <Container fluid>
            <FileUpload clickable={false}>
              <Row>
                <Col sm className="full-height editor">
                  <EditorWindow />
                </Col>
                <Col sm className="full-height preview ">
                  <PreviewWindow />
                </Col>
              </Row>
            </FileUpload>
          </Container>
        </Provider>
      </div>
    );
  }
}

export default App;
