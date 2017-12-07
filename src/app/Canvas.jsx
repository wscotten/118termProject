import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { drawInputSet1 } from './utils/canvas';
import isSolvable from './utils/isSolvable';

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

    if (selectedProblem === 'asdradius, &#8736;ABD, &#8736;BDA') {
      // draw triangle
      context.beginPath();
      context.arc(150, 150, 3, 0, 360, 0);
      context.fillText('A', 150, 145);
      context.fill();
      context.closePath();

      context.beginPath();
      context.arc(pointB_X, pointB_Y, 3, 0, 360, 0);
      context.fillText('B', pointB_X, pointB_Y - 5);
      context.fill();
      context.closePath();

      context.beginPath();
      context.arc(pointC_X, pointC_Y, 3, 0, 360, 0);
      context.fillText('C', pointC_X, pointC_Y - 5);
      context.fill();
      context.closePath();

      context.beginPath();
      context.arc(pointC_X, pointC_Y, 3, 0, 360, 0);
      context.fillText('C', pointC_X, pointC_Y - 5);
      context.fill();
      context.closePath();

      context.beginPath();
      context.arc(pointD_X, pointD_Y, 3, 0, 360, 0);
      context.fillText('D', pointD_X, pointD_Y - 5);
      context.fill();
      context.closePath();
      //Triangle ABC
      context.beginPath();
      context.lineWidth=2;
      context.moveTo(pointA_X, pointA_Y);
      context.lineTo(pointB_X, pointB_Y);
      context.lineTo(pointC_X, pointC_Y);
      context.closePath();
      context.stroke();
      //Triangle ABD
      context.beginPath();
      context.lineWidth=2;
      context.moveTo(pointA_X, pointA_Y);
      context.lineTo(pointB_X, pointB_Y);
      context.lineTo(pointD_X, pointD_Y);
      context.closePath();
      context.stroke();
      context.fill();
      // draw circle
      context.beginPath();
      context.arc(pointA_X, pointA_Y, radius, 0, 360, 0);
      context.stroke();
      context.closePath();
    } else {
      drawInputSet1(context, radius, angleDAB);
    }
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
            ? <h1 style={{ color: '#86f442' }}>Solvable</h1>
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
