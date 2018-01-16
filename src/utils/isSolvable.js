import { getPointC } from './geometryEquations';

export default (inputFields) => {
  if (
    getPointC(inputFields)[0] > 300 ||
    getPointC(inputFields)[0] < 0 ||
    getPointC(inputFields)[1] > 300 ||
    getPointC(inputFields)[1] < 0
  ) {
    return false;
  }
  return true;
};
