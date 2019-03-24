import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { Container, Row, Col } from 'reactstrap';

import './App.css';
import AppNavbar from './components/AppNavbar';
import PreviewWindow from './components/PreviewWindow';
import EditorWindow from './components/EditorWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppNavbar />
          <Container fluid>
            <Row>
              <Col sm>
                <EditorWindow />
              </Col>
              <Col sm>
                <PreviewWindow />
              </Col>
            </Row>
          </Container>
        </Provider>
      </div>
    );
  }
}

export default App;
