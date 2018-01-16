import React, { PureComponent } from 'react';
import { FormControl, ControlLabel, Col } from 'react-bootstrap';

class Input extends PureComponent {
  onChange = (e) => this.props.onChange(this.props.field, e.target.value, );
  render() {
    return (
      <div>
        <Col componentClass={ControlLabel} sm={2}>
          {this.props.name}
        </Col>
        <Col sm={4}>
          {
            this.props.disabled &&
            <FormControl disabled style={{ maxWidth: '60%' }} value={this.props.currentInput} />
          }
          {
            !this.props.disabled &&
            <FormControl
              style={{ maxWidth: '60%' }}
              type="number"
              onChange={this.onChange}
              placeholder="Enter Value"
              value={this.props.currentInput}
            />
          }
        </Col>
      </div>
    );
  }
}

export default Input;
