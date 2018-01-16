import React, { PureComponent } from 'react';
import { FormControl, ControlLabel, Col } from 'react-bootstrap';

class Input extends PureComponent {
  onChange = (e) => this.props.onChange(this.props.field, e.target.value);

  render() {
    const {
      currentInput,
      disabled,
      name,
    } = this.props;
    return (
      <div>
        <Col componentClass={ControlLabel} sm={2}>
          {name}
        </Col>
        <Col sm={4}>
          {
            disabled &&
            <FormControl disabled style={{ maxWidth: '60%' }} value={currentInput} />
          }
          {
            !disabled &&
            <FormControl
              style={{ maxWidth: '60%' }}
              type="number"
              onChange={this.onChange}
              placeholder="Enter Value"
              value={currentInput}
            />
          }
        </Col>
      </div>
    );
  }
}

export default Input;
