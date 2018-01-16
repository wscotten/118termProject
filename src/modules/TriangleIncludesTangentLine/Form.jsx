import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form as BootstrapForm } from 'react-bootstrap';
import Input from '../../components/Input';
import ProblemSelector from '../../components/ProblemSelector';
import update from '../../components/Input/actions';
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
import isSolvable from '../../utils/isSolvable';

class FormContainer extends PureComponent {
  handleChange = (field, value) => this.props.inputTyped(field, value);

  render() {
    const {
      radius,
      angleDAB,
    } = this.props.inputFields;
    const {
      isSolvable,
      selectedProblem,
      pointA_X,
      pointA_Y,
      pointB_X,
      pointB_Y,
      pointC_X,
      pointC_Y,
      pointD_X,
      pointD_Y,
      lineAB,
      lineAC,
      lineAD,
      lineBC,
      lineBD,
      lineCD,
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
    } = this.props;
    return (
      <BootstrapForm horizontal>
        <h4>Problem Inputs</h4>
        <ProblemSelector />
        <h4>Input</h4>
        {
          selectedProblem === 'radius, &#8736;DAB' &&
          <div>
            <Input name="radius" currentInput={radius} inputTyped={this.handleChange} field="radius" />
            <Input name="&#8736;DAB" currentInput={angleDAB} inputTyped={this.handleChange} field="angleDAB" />
          </div>
        }
        {
          isSolvable && 
          <div>
            <h4>Output</h4>
            <Input 
              name="point A: X" 
              disabled 
              currentInput={pointA_X} 
            />
            <Input 
              name="point A: Y" 
              disabled 
              currentInput={pointA_Y} 
            />
            <Input 
              name="point B: X" 
              disabled 
              currentInput={pointB_X} 
            />
            <Input 
              name="point B: Y" 
              disabled 
              currentInput={pointB_Y} 
            />
            <Input 
              name="point C: X" 
              disabled 
              currentInput={pointC_X} 
            />
            <Input 
              name="point C: Y" 
              disabled 
              currentInput={pointC_Y} 
            />
            <Input 
              name="point D: X" 
              disabled 
              currentInput={pointD_X} 
            />
            <Input 
              name="point D: Y" 
              disabled 
              currentInput={pointD_Y} 
            />
            <Input 
              name="line AB" 
              disabled 
              currentInput={lineAB} 
            />
            <Input 
              name="line AC" 
              disabled 
              currentInput={lineAC} 
            />
            <Input 
              name="line AD" 
              disabled 
              currentInput={lineAD} 
            />
            <Input 
              name="line BC" 
              disabled 
              currentInput={lineBC} 
            />
            <Input 
              name="line BD" 
              disabled 
              currentInput={lineBD} 
            />
            <Input 
              name="line CD" 
              disabled 
              currentInput={lineCD} 
            />
            <Input 
              name="per. ABD" 
              disabled 
              currentInput={perimeterABD} 
            />
            <Input 
              name="per. ABC" 
              disabled 
              currentInput={perimeterABC} 
            />
            <Input 
              name="per. BCD" 
              disabled 
              currentInput={perimeterBCD} 
            />
            <Input 
              name="per. circle" 
              disabled 
              currentInput={perimeterCircle} 
            />
            <Input 
              name="area. circle" 
              disabled 
              currentInput={areaCircle} 
            />
            <Input 
              name="angle ABC" 
              disabled 
              currentInput={angleABC} 
            />
            <Input 
              name="angle CAB" 
              disabled 
              currentInput={angleCAB} 
            />
            <Input 
              name="angle BCA" 
              disabled 
              currentInput={angleBCA} 
            />
            <Input 
              name="angle ABD" 
              disabled 
              currentInput={angleABD} 
            />
            <Input 
              name="angle BDA" 
              disabled 
              currentInput={angleBDA} 
            />
            <Input 
              name="angle BDC" 
              disabled 
              currentInput={angleBDC} 
            />
            <Input 
              name="angle CBD" 
              disabled 
              currentInput={angleCBD} 
            />
            <Input 
              name="area ABC" 
              disabled 
              currentInput={areaABC} 
            />
            <Input 
              name="sml arc BD" 
              disabled 
              currentInput={smallArcBD} 
            />
            <Input 
              name="lg arc BD" 
              disabled 
              currentInput={largeArcBD} 
            />
          </div>
        }
      </BootstrapForm>
    );
  }
}

const mapStateToProps = state => ({
  inputFields: state.inputFields,
  isSolvable: isSolvable(state.selectedProblem, state.inputFields),
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
  selectedProblem: state.selectedProblem,
});

const mapDispatchToProps = dispatch => ({
  inputTyped: (field, value) => {
    dispatch(update(field, value));
  },
});

const Form = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormContainer);

export default Form;
