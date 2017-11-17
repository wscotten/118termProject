import React, { PureComponent } from 'react';
import { Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">118 Term Project</h1>
        </header>
        <Col xs={3} />
        <Col xs={6}>
          <Form />
        </Col>
      </div>
    );
  }
}
