import React, { PureComponent } from 'react';
import { FormControl } from 'react-bootstrap';
import './App.css';

export default class Form extends PureComponent {
  render() {
    return (
      <div>
        <FormControl />
        <FormControl />
        <FormControl />
      </div>
    );
  }
}
