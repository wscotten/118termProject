import React, { PureComponent } from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import { Input, DisabledInput } from '../../../components';
import isSolvable from '../../../utils/isSolvable';

export default class Form extends PureComponent {
  onChange = (field, value) => this.props.onChange(field, value);

  render() {
    const {
      inputFields: {
        angleDAB,
        radius,
      },
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
        <h4>Input</h4>
        <div>
          <Input name="radius" currentInput={radius} onChange={this.onChange} field="radius" />
          <Input name="&#8736;DAB" currentInput={angleDAB} onChange={this.onChange} field="angleDAB" />
        </div>
        {
          isSolvable &&
          <div>
            <h4>Output</h4>
            <DisabledInput
              name="point A: X"
              currentInput={pointA_X}
            />
            <DisabledInput
              name="point A: Y"
              currentInput={pointA_Y}
            />
            <DisabledInput
              name="point B: X"
              currentInput={pointB_X}
            />
            <DisabledInput
              name="point B: Y"
              currentInput={pointB_Y}
            />
            <DisabledInput
              name="point C: X"
              currentInput={pointC_X}
            />
            <DisabledInput
              name="point C: Y"
              currentInput={pointC_Y}
            />
            <DisabledInput
              name="point D: X"
              currentInput={pointD_X}
            />
            <DisabledInput
              name="point D: Y"
              currentInput={pointD_Y}
            />
            <DisabledInput
              name="line AB"
              currentInput={lineAB}
            />
            <DisabledInput
              name="line AC"
              currentInput={lineAC}
            />
            <DisabledInput
              name="line AD"
              currentInput={lineAD}
            />
            <DisabledInput
              name="line BC"
              currentInput={lineBC}
            />
            <DisabledInput
              name="line BD"
              currentInput={lineBD}
            />
            <DisabledInput
              name="line CD"
              currentInput={lineCD}
            />
            <DisabledInput
              name="per. ABD"
              currentInput={perimeterABD}
            />
            <DisabledInput
              name="per. ABC"
              currentInput={perimeterABC}
            />
            <DisabledInput
              name="per. BCD"
              currentInput={perimeterBCD}
            />
            <DisabledInput
              name="per. circle"
              currentInput={perimeterCircle}
            />
            <DisabledInput
              name="area. circle"
              currentInput={areaCircle}
            />
            <DisabledInput
              name="angle ABC"
              currentInput={angleABC}
            />
            <DisabledInput
              name="angle CAB"
              currentInput={angleCAB}
            />
            <DisabledInput
              name="angle BCA"
              currentInput={angleBCA}
            />
            <DisabledInput
              name="angle ABD"
              currentInput={angleABD}
            />
            <DisabledInput
              name="angle BDA"
              currentInput={angleBDA}
            />
            <DisabledInput
              name="angle BDC"
              currentInput={angleBDC}
            />
            <DisabledInput
              name="angle CBD"
              currentInput={angleCBD}
            />
            <DisabledInput
              name="area ABC"
              currentInput={areaABC}
            />
            <DisabledInput
              name="sml arc BD"
              currentInput={smallArcBD}
            />
            <DisabledInput
              name="lg arc BD"
              currentInput={largeArcBD}
            />
          </div>
        }
      </BootstrapForm>
    );
  }
}
