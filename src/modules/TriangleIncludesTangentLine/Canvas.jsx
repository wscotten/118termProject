import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { drawInputSet1 } from '../../utils/canvas';
import isSolvable from '../../utils/isSolvable';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

class CanvasContainer extends PureComponent {
  componentDidMount() {
    this.updateCanvas(this.props.inputFields);
  }

  componentDidUpdate() {
    this.updateCanvas(this.props.inputFields, this.props.selectedProblem);
  }

  updateCanvas({
    radius,
    angleDAB,
    pointA_X,
    pointA_Y,
    pointB_X,
    pointB_Y,
    pointC_X,
    pointC_Y,
    pointD_X,
    pointD_Y,
  }, selectedProblem) {
    // setup
    const context = this.refs.canvas.getContext('2d');
    context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
    context.font = '15px Arial';
    context.lineWidth=2;
    context.fillStyle = 'rgba(66, 134, 244, 0.5)';
    context.strokeStyle = 'rgb(66, 134, 244)';
    drawInputSet1(context, radius, angleDAB);
  }

  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          style={{ border: '2px solid black' }}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
        />
        {
          this.props.isSolvable
            ? <h1 style={{ color: '#33b73e' }}>Solvable</h1>
            : <h1 style={{ color: '#f44141' }}>Unsolvable</h1>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputFields: state.inputFields,
  isSolvable: isSolvable(state.selectedProblem, state.inputFields),
  selectedProblem: state.selectedProblem,
});

const Canvas = connect(mapStateToProps)(CanvasContainer);

export default Canvas;