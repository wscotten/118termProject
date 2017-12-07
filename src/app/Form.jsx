import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form as BootstrapForm, FormGroup, Col, FormControl, ControlLabel, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Input from './components/Input';
import ProblemSelector from './components/ProblemSelector';
import update from './components/Input/actions';
import perimeterCircle from './utils/perimeterCircle';

class FormContainer extends PureComponent {
  handleChange = (field, value) => this.props.inputTyped(field, value);

  render() {
    const {
      radius,
      angleDAB,
    } = this.props.inputFields;
    const solvable = this.props.solvable;
    const selectedProblem = this.props.selectedProblem;
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
        <h4>Output</h4>
        {
          solvable && 
          <div>
            <Input 
              name="line BC" 
              disabled 
              currentInput={5} 
            />
            <Input 
              name="line BD" 
              disabled 
              currentInput={5} 
            />
          </div>
        }
        {/* <Input name="point B X" currentInput={pointB_X} inputTyped={this.handleChange} field="pointB_X" />
        <Input name="point B Y" currentInput={pointB_Y} inputTyped={this.handleChange} field="pointB_Y" />
        <Input name="point C X" currentInput={pointC_X} inputTyped={this.handleChange} field="pointC_X" />
        <Input name="point C Y" currentInput={pointC_Y} inputTyped={this.handleChange} field="pointC_Y" />
        <Input name="point D X" currentInput={pointD_X} inputTyped={this.handleChange} field="pointD_X" />
        <Input name="point D Y" currentInput={pointD_Y} inputTyped={this.handleChange} field="pointD_Y" /> */}
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
        <Input 
          name="line AB" 
          disabled 
          currentInput={distance(pointA_X, pointA_Y, pointB_X, pointB_Y)} 
        />
        <Input 
          name="line AC" 
          disabled 
          currentInput={distance(pointA_X, pointA_Y, pointC_X, pointC_Y)} 
        />
        <Input 
          name="line AD" 
          disabled 
          currentInput={distance(pointA_X, pointA_Y, pointD_X, pointD_Y)} 
        />
        <Input 
          name="line BC" 
          disabled 
          currentInput={distance(pointB_X, pointB_Y, pointC_X, pointC_Y)} 
        />
        <Input 
          name="line BD" 
          disabled 
          currentInput={distance(pointB_X, pointB_Y, pointD_X, pointD_Y)} 
        />
        <Input 
          name="line CD" 
          disabled 
          currentInput={distance(pointC_X, pointC_Y, pointD_X, pointD_Y)} 
        />
        <Input 
          name="per. circle" 
          disabled 
          currentInput={perimeterCircle(
            distance(pointA_X, pointA_Y, pointB_X, pointB_Y)
          )} 
        />
        <Input 
          name="per ABD" 
          disabled 
          currentInput={
            distance(pointA_X, pointA_Y, pointB_X, pointB_Y) +
            distance(pointA_X, pointA_Y, pointD_X, pointD_Y) +
            distance(pointB_X, pointB_Y, pointD_X, pointD_Y) 
          } 
        />
        <Input 
          name="per ABC" 
          disabled 
          currentInput={
            distance(pointA_X, pointA_Y, pointB_X, pointB_Y) +
            distance(pointA_X, pointA_Y, pointC_X, pointC_Y) +
            distance(pointB_X, pointB_Y, pointC_X, pointC_Y) 
          } 
        />
        <Input 
          name="per BDC" 
          disabled 
          currentInput={
            distance(pointB_X, pointB_Y, pointD_X, pointD_Y) +
            distance(pointB_X, pointB_Y, pointC_X, pointC_Y) +
            distance(pointD_X, pointD_Y, pointC_X, pointC_Y) 
          } 
        /> */}
      </BootstrapForm>
    );
  }
}

const mapStateToProps = state => ({
  inputFields: state.inputFields,
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
