import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import Form from './components/Form';
import Canvas from './components/Canvas';
import isSolvable from '../../utils/isSolvable';

class Container extends PureComponent {
  render() {
    return (
      <div>
        <Col lg={1} xs={4} />
        <Col xs={4} >
          <Canvas {...this.props} />
        </Col>
        <Col lg={7} xs={12} >
          <Form />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputFields: state.inputFields,
  isSolvable: isSolvable(state.inputFields),
});

const App = connect(mapStateToProps)(Container);

export default App;

