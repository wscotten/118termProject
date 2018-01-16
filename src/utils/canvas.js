import {
  thirdCoordFromAngleAndRadius,
  tangentPointFromRadiusAndD,
} from './geometryEquations';

export const drawInputSet1 = (context, radius, angleDAB) => {
  const A_X = 150;
  const A_Y = 150;
  const B_X = A_X;
  const B_Y = A_Y - radius;

  const {
    x: D_X,
    y: D_Y,
  } = thirdCoordFromAngleAndRadius(B_X, B_Y, radius, angleDAB);
  const {
    x: C_X,
    y: C_Y,
  } = tangentPointFromRadiusAndD(radius, D_X, D_Y);

  // Triangle ABC
  context.beginPath();
  context.moveTo(A_X, A_Y);
  context.lineTo(B_X, B_Y);
  context.lineTo(C_X, C_Y);
  context.closePath();
  context.stroke();
  context.fill();
  // Triangle ABD
  context.beginPath();
  context.moveTo(150, 150);
  context.lineTo(A_X, A_Y);
  context.lineTo(B_X, B_Y);
  context.lineTo(D_X, D_Y);
  context.closePath();
  context.stroke();
  context.fill();
  // // draw circle
  context.beginPath();
  context.arc(150, 150, radius, 0, 360, 0);
  context.stroke();
  context.closePath();

  // draw points
  context.beginPath();
  context.fillStyle = 'rgb(0, 0, 0)';
  context.arc(A_X, A_Y, 3, 0, 360, 0);
  context.fillText('A', A_X, A_Y - 5);
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(B_X, B_Y, 3, 0, 360, 0);
  context.fillText('B', B_X, B_Y - 5);
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(C_X, C_Y, 3, 0, 360, 0);
  context.fillText('C', C_X, C_Y - 5);
  context.fill();
  context.closePath();

  context.beginPath();
  context.arc(D_X, D_Y, 3, 0, 360, 0);
  context.fillText('D', D_X, D_Y - 5);
  context.fill();
  context.closePath();
};

export const lambda = () => 5;
