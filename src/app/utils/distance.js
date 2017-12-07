export default (x1, y1, x2, y2) =>
  Number(Math.sqrt((Math.abs(x1 - x2) * Math.abs(x1 - x2)) + (Math.abs(y1 - y2) * Math.abs(y1 - y2)))
  .toFixed(2));
