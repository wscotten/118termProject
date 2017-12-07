import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './app/Container';

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">118 Term Project</h1>
        </header>
        <Container />
      </div>
    );
  }
}
