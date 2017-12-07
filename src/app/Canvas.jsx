import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

const distance = (x1, y1, x2, y2) => Math.sqrt(
  (Math.abs(x1 - x2) * Math.abs(x1 - x2)) + 
  (Math.abs(y1 - y2) * Math.abs(y1 - y2)));

class CanvasContainer extends PureComponent {
  componentDidMount() {
    this.updateCanvas(this.props.values);
  }

  componentDidUpdate() {
    this.updateCanvas(this.props.values);
  }

  updateCanvas({ 
    pointA_X,
    pointA_Y,
    pointB_X,
    pointB_Y,
    pointC_X,
    pointC_Y,
    pointD_X,
    pointD_Y,
    angleABD,
    angleACB,
    angleADB,
    angleBAD,
    angleBDC,
    angleCBD,
    smallArcBD,
    largeArcBD,
    areaABD,
    areaABC,
    areaBDC,
    areaCircle,
    areaTriangle,
    lineAB,
    lineAC,
    lineAD,
    lineBC,
    lineBD,
    lineCD,
    perimeterCircle,
    perimeterABD,
    perimeterABC,
    perimeterBDC,
  }) {
    const radius = distance(pointA_X, pointA_Y, pointB_X, pointB_Y);
    // setup
    const context = this.refs.canvas.getContext('2d');
    context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
    context.font = '15px Arial';
    context.fillStyle="#3169c0";
    context.lineWidth=1;
    context.fillStyle = "rgba(17, 37, 67, 0.5)";
    // draw triangle
    context.beginPath();
    context.arc(pointA_X, pointA_Y, 3, 0, 360, 0);
    context.fillText('A', pointA_X, pointA_Y - 5);
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
  }

  render() {
    return (
      <canvas
        ref="canvas"
        style={{ border: '2px solid black' }}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
    );
  }
}

const mapStateToProps = state => ({
  values: state.inputFields,
});

const Canvas = connect(mapStateToProps)(CanvasContainer);

export default Canvas;
