import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form as BootstrapForm, FormGroup, Col, FormControl, ControlLabel, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Input from './components/Input';
import ProblemSelector from './components/ProblemSelector';
import update from './components/Input/actions';
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
  distance,
  perimeterABD,
  perimeterABC,
  perimeterBCD,
  perimeterCircle,
  areaCircle,
  thirdCoordFromAngleAndRadius,
  tangentPointFromRadiusAndD,
  thirdCoordFromAngleAndRadius2,
  tangentPointFromRadiusAndD2,
} from './utils/geometryEquations';
import isSolvable from './utils/isSolvable';

class FormContainer extends PureComponent {
  handleChange = (field, value) => this.props.inputTyped(field, value);

  render() {
    const {
      radius,
      angleDAB,
    } = this.props.inputFields;
    const isSolvable = this.props.isSolvable;
    const selectedProblem = this.props.selectedProblem;
    const pointA_X = this.props.pointA_X;
    const pointA_Y = this.props.pointA_Y;
    const pointB_X = this.props.pointB_X;
    const pointB_Y = this.props.pointB_Y;
    const pointC_X = this.props.pointC_X;
    const pointC_Y = this.props.pointC_Y;
    const pointD_X = this.props.pointD_X;
    const pointD_Y = this.props.pointD_Y;
    const lineAB = this.props.lineAB;
    const lineAC = this.props.lineAC;
    const lineAD = this.props.lineAD;
    const lineBC = this.props.lineBC;
    const lineBD = this.props.lineBD;
    const lineCD = this.props.lineCD;
    const perimeterABD = this.props.perimeterABD;
    const perimeterABC = this.props.perimeterABC;
    const perimeterBCD = this.props.perimeterBCD;
    const perimeterCircle = this.props.perimeterCircle;
    const areaCircle = this.props.areaCircle;
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
          </div>
        }

        {/* <Input name="&#8736;ABD" currentInput={angleABD} inputTyped={this.handleChange} field="angleABD" />
        <Input name="&#8736;ACB" currentInput={angleACB} inputTyped={this.handleChange} field="angleACB" />
        <Input name="&#8736;ADB" currentInput={angleADB} inputTyped={this.handleChange} field="angleADB" />
        <Input name="&#8736;BAD" currentInput={angleBAD} inputTyped={this.handleChange} field="angleBAD" />
        <Input name="&#8736;BDC" currentInput={angleBDC} inputTyped={this.handleChange} field="angleBDC" />
        <Input name="&#8736;CBD" currentInput={angleCBD} inputTyped={this.handleChange} field="angleCBD" />
        <Input name="sml arc BD" disabled currentInput={this.props.smallArcBD} field="smallArcBD" />
        <Input name="lg arc BD" disabled currentInput={this.props.largeArcBD} field="largeArcBD" />
        <Input name="area ABD" disabled currentInput={this.props.areaABD} field="areaABD" />
        <Input name="area ABC" disabled currentInput={this.props.areaABC} field="areaABC" />
        <Input name="area BDC" disabled currentInput={this.props.areaBDC} field="areaBDC" />
        <Input name="area circle" disabled currentInput={this.props.areaCircle} field="areaCircle" />
        <h4>Output</h4>

        /> */}
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
