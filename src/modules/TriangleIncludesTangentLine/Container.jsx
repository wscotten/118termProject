import React, { PureComponent } from 'react';
import { Col } from 'react-bootstrap';
import Form from './Form';
import Canvas from './Canvas';

export default class Container extends PureComponent {
  render() {
    return (
      <div>
        <Col lg={1} xs={4} />
        <Col xs={4} >
          <Canvas />
        </Col>
        <Col lg={7} xs={12} >
          <Form />
        </Col>
      </div>
    );
  }
}
