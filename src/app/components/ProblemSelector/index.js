import React, { PureComponent } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import problemSelected from './actions';

class Container extends PureComponent {
  handleChange = (e) => this.props.problemSelected(e);
  render() {
    return (
      <ToggleButtonGroup
          type="radio"
          name="problem_selector"
          defaultValue={'radius, &#8736;DAB'}
          value={this.props.selectedProblem}
          onChange={this.handleChange}
        >
          <ToggleButton value={'radius, &#8736;DAB'}>radius, &#8736;DAB</ToggleButton>
        </ToggleButtonGroup>
    );
  }
}

const mapStateToProps = state => state.selectedProblem;

const mapDispatchToProps = dispatch => ({
  problemSelected: (value) => {
    dispatch(problemSelected(value));
  },
});

const ProblemSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

export default ProblemSelector;
