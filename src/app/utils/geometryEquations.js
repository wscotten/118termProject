export const distance = (x1, y1, x2, y2) => {
  const xDistance = (Math.abs(x1 - x2));
  const yDistance = (Math.abs(y1 - y2));
  return Number(Math.sqrt((xDistance * xDistance) + (yDistance * yDistance)).toFixed(2));
};

export const slope = (x1, y1, x2, y2) => Number(((y2 - y1) / (x2 - x1)).toFixed(2));

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
