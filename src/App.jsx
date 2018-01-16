import React, { PureComponent } from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import Container from './modules/TriangleIncludesTangentLine/Container';

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">118 Term Project: A triangle includes a tangent line.</h1>
        </header>
        <Container />
      </div>
    );
  }
}
