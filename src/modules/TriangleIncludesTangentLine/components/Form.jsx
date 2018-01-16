import React, { PureComponent } from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import Input from '../../../components/Input';
import isSolvable from '../../../utils/isSolvable';

export default class Form extends PureComponent {
  onChange = (field, value) => this.props.onChange(field, value);

  render() {
    console.log(this.props.onChange);
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
