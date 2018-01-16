import {
  distance,
  slope,
  thirdCoordFromAngleAndRadius,
  tangentPointFromRadiusAndD,
} from '../geometryEquations';

describe('distance', () => {
  it('should handle 0, 2, 10, 5', () => {
    expect(distance(0, 2, 10, 5)).toEqual(10.44);
  });

  it('should handle 0, 55 4, 124', () => {
    expect(distance(0, 55, 4, 124)).toEqual(69.12);
  });
});

describe('slope', () => {
  it('should handle -3, 3, 3, -1', () => {
    expect(slope(-3, 3, 3, -1)).toEqual(-0.67);
  });

  it('should handle 0, 55 4, 124', () => {
    expect(slope(0, 55, 4, 124)).toEqual(17.25);
  });
});

describe('thirdCoordFromAngleAndRadius', () => {
  it('should handle 90 degrees', () => {
    expect(thirdCoordFromAngleAndRadius(150, 50, 100, 90)).toEqual({
      x: 250.00,
      y: 150.00,
    });
  });

  it('should handle 180 degrees', () => {
    expect(thirdCoordFromAngleAndRadius(150, 50, 100, 180)).toEqual({
      x: 150.00,
      y: 250.00,
    });
  });

  it('should handle 270 degrees', () => {
    expect(thirdCoordFromAngleAndRadius(150, 50, 100, 270)).toEqual({
      x: 50.00,
      y: 150.00,
    });
  });

  it('should handle 360 degrees', () => {
    expect(thirdCoordFromAngleAndRadius(150, 50, 100, 360)).toEqual({
      x: 150.00,
      y: 50.00,
    });
  });
});

describe('tangentPointFromRadiusAndD', () => {
  it('should handle 30 degrees', () => {
    expect(tangentPointFromRadiusAndD(50, 175, 106.7)).toEqual({
      x: 178.87,
      y: 100.00,
    });
  });
});

