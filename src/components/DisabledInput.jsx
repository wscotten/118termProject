import React, { PureComponent } from 'react';
import { FormControl, ControlLabel, Col, FormGroup } from 'react-bootstrap';

export default class DisabledInput extends PureComponent {
  onChange = (e) => this.props.onChange(this.props.field, e.target.value);

  render() {
    const {
      currentInput,
      name,
    } = this.props;
    return (
      <Col sm={6}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} xs={4}>
            {name}
          </Col>
          <Col xs={8}>
            <FormControl disabled value={currentInput} />
          </Col>
        </FormGroup>
      </Col>
    );
  }
}
