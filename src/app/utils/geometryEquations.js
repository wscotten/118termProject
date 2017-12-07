export const distance = (x1, y1, x2, y2) => {
  const xDistance = (Math.abs(x1 - x2));
  const yDistance = (Math.abs(y1 - y2));
  return Number(Math.sqrt((xDistance * xDistance) + (yDistance * yDistance)).toFixed(2));
};

export const slope = (x1, y1, x2, y2) => Number(((y2 - y1) / (x2 - x1)).toFixed(2));

export const thirdCoordFromAngleAndRadius2 = (x1, y1, radius, degrees) => {
  const angle = ((2 * Math.PI * degrees) / 360);
  return [
    Number((x1 + (radius * Math.sin(angle))).toFixed(2)),
    Number((((y1 * -1) - (radius * (1 - Math.cos(angle)))) * -1).toFixed(2)),
  ];
};

export const tangentPointFromRadiusAndD2 = (radius, D_X, D_Y) => {
  const x = D_X;
  const y = Math.abs(300 - D_Y);
  const resultingY = 150.00 - radius;
  const ADSlope = slope(150, 150, x, y);
  const resultingX = ((150 + radius) - y) / ADSlope;
  return [
    Number((x + resultingX).toFixed(2)),
    resultingY,
  ];
};

export const getPointA = () => [150, 150];
export const getPointB = radius => [150, 150 - radius];
export const getPointD = ({ radius, angleDAB }) =>
  [...thirdCoordFromAngleAndRadius2(...getPointB(radius), radius, angleDAB)];
export const getPointC = inputFields =>
  [...tangentPointFromRadiusAndD2(inputFields.radius, ...getPointD(inputFields))];

export const getLineAB = inputFields => distance(...getPointA(), ...getPointB(inputFields.radius));
export const getLineAC = inputFields => distance(...getPointA(), ...getPointC(inputFields));
export const getLineAD = inputFields => distance(...getPointA(), ...getPointD(inputFields));
export const getLineBC = inputFields =>
  distance(...getPointB(inputFields.radius), ...getPointC(inputFields));
export const getLineBD = inputFields =>
  distance(...getPointB(inputFields.radius), ...getPointD(inputFields));
export const getLineCD = inputFields =>
  distance(...getPointC(inputFields), ...getPointD(inputFields));

export const perimeterABD = inputFields =>
  getLineAB(inputFields) + getLineAD(inputFields) + getLineBD(inputFields);
export const perimeterABC = inputFields =>
  getLineAB(inputFields) + getLineAC(inputFields) + getLineBC(inputFields);
export const perimeterBCD = inputFields =>
  getLineBC(inputFields) + getLineBD(inputFields) + getLineCD(inputFields);

export const perimeterCircle = radius => (Number(radius) * 2 * Math.PI).toFixed(2);
export const areaCircle = ({ radius }) => (radius * radius * Math.PI).toFixed(2);

export const angleABC = () => 90;
export const angleCAB = inputFields => inputFields.angleDAB;
export const angleBCA = inputFields => 90 - inputFields.angleDAB;
export const angleABD = inputFields => (180 - inputFields.angleDAB) / 2;
export const angleBDA = inputFields => (180 - inputFields.angleDAB) / 2;
export const angleCBD = inputFields => 90 - angleABD(inputFields);
export const angleBDC = inputFields => 180 - angleCBD(inputFields) - angleBCA(inputFields);

export const areaABC = inputFields => 0.5 * getLineAB(inputFields) * getLineBC(inputFields);

export const smallArcBD = inputFields =>
  (inputFields.angleDAB / 360) * perimeterCircle(inputFields.radius);

export const largeArcBD = inputFields =>
  perimeterCircle(inputFields.radius) - smallArcBD(inputFields);

export const thirdCoordFromAngleAndRadius = (x1, y1, radius, degrees) => {
  const angle = ((2 * Math.PI * degrees) / 360);
  return {
    x: Number((x1 + (radius * Math.sin(angle))).toFixed(2)),
    y: Number((((y1 * -1) - (radius * (1 - Math.cos(angle)))) * -1).toFixed(2)),
  };
};

export const tangentPointFromRadiusAndD = (radius, D_X, D_Y) => {
  const x = D_X;
  const y = Math.abs(300 - D_Y);
  const resultingY = 150.00 - radius;
  const ADSlope = slope(150, 150, x, y);
  const resultingX = ((150 + radius) - y) / ADSlope;
  return {
    x: Number((x + resultingX).toFixed(2)),
    y: resultingY,
  };
};

