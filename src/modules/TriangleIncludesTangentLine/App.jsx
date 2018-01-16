import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'react-bootstrap';
import Form from './components/Form';
import Canvas from './components/Canvas';
import isSolvable from '../../utils/isSolvable';
import {
  getPointA,
  getPointB,
  getPointC,
  getPointD,
  getLineAB,
  getLineAC,
  getLineAD,
  getLineBC,
  getLineBD,
  getLineCD,
  perimeterABD,
  perimeterABC,
  perimeterBCD,
  perimeterCircle,
  areaCircle,
  angleABC,
  angleCAB,
  angleBCA,
  angleABD,
  angleBDA,
  angleBDC,
  angleCBD,
  areaABC,
  smallArcBD,
  largeArcBD,
} from '../../utils/geometryEquations';
import { onChange } from './redux';

class Container extends PureComponent {
  render() {
    const {
      CanvasProps,
      FormProps,
      onChange,
    } = this.props;
    return (
      <div>
        <Col lg={1} xs={4} />
        <Col xs={4} >
          <Canvas {...CanvasProps} />
        </Col>
        <Col lg={7} xs={12} >
          <Form
            {...FormProps}
            onChange={onChange}
          />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  CanvasProps: {
    inputFields: state.inputFields,
    isSolvable: isSolvable(state.inputFields),
  },
  FormProps: {
    inputFields: state.inputFields,
    isSolvable: isSolvable(state.inputFields),
    pointA_X: getPointA()[0],
    pointA_Y: getPointA()[1],
    pointB_X: getPointB(state.inputFields.radius)[0],
    pointB_Y: getPointB(state.inputFields.radius)[1],
    pointC_X: getPointC(state.inputFields)[0],
    pointC_Y: getPointC(state.inputFields)[1],
    pointD_X: getPointD(state.inputFields)[0],
    pointD_Y: getPointD(state.inputFields)[1],
    lineAB: getLineAB(state.inputFields),
    lineAC: getLineAC(state.inputFields),
    lineAD: getLineAD(state.inputFields),
    lineBD: getLineBD(state.inputFields),
    lineBC: getLineBC(state.inputFields),
    lineCD: getLineCD(state.inputFields),
    perimeterABD: perimeterABD(state.inputFields),
    perimeterABC: perimeterABC(state.inputFields),
    perimeterBCD: perimeterBCD(state.inputFields),
    perimeterCircle: perimeterCircle(state.inputFields.radius),
    areaCircle: areaCircle(state.inputFields),
    angleABC: angleABC(),
    angleCAB: angleCAB(state.inputFields),
    angleBCA: angleBCA(state.inputFields),
    angleABD: angleABD(state.inputFields),
    angleBDA: angleBDA(state.inputFields),
    angleBDC: angleBDC(state.inputFields),
    angleCBD: angleCBD(state.inputFields),
    areaABC: areaABC(state.inputFields),
    smallArcBD: smallArcBD(state.inputFields),
    largeArcBD: largeArcBD(state.inputFields),
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onChange,
}, dispatch);

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

export default App;
