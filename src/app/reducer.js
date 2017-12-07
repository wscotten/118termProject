const initialData = {
  pointA_X: 150,
  pointA_Y: 150,
  pointB_X: 60,
  pointB_Y: 142.37,
  pointC_X: 80,
  pointC_Y: 20,
  pointD_X: 92,
  pointD_Y: 92,
  angleABD: 60,
  angleACB: 60,
  angleADB: 60,
  angleBAD: 60,
  angleBDC: 60,
  angleCBD: 60,
  smallArcBD: 60,
  largeArcBD: 60,
  areaABD: 50,
  areaABC: 50,
  areaBDC: 50,
  areaCircle: 50,
  areaTriangle: 30,
  lineAB: 50,
  lineAC: 50,
  lineAD: 50,
  lineBC: 50,
  lineBD: 50,
  lineCD: 50,
  perimeterCircle: 50,
  perimeterABD: 50,
  perimeterABC: 50,
  perimeterBDC: 50,
};

const socialReachModalReducer = (inputFields = initialData, { type, field, payload }) => {
  switch (type) {
    case 'UPDATE_INPUT':
      return {
        ...inputFields,
        [field]: payload,
      };
    default:
      return inputFields;
  }
};

export default socialReachModalReducer;
