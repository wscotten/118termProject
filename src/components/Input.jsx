import React, { PureComponent } from 'react';
import { FormControl, ControlLabel, Col, FormGroup } from 'react-bootstrap';

export default class Input extends PureComponent {
  onChange = (e) => this.props.onChange(this.props.field, e.target.value);

  render() {
    const {
      currentInput,
      name,
    } = this.props;
    return (
      <Col sm={6}>
        <FormGroup>
          <Col componentClass={ControlLabel} xs={4}>
            {name}
          </Col>
          <Col xs={8}>
            <FormControl
              type="number"
              onChange={this.onChange}
              placeholder="Enter Value"
              value={currentInput}
            />
          </Col>
        </FormGroup>
      </Col>
    );
  }
}
