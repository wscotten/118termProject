export default (selectedProblem, inputFields) => {
  switch (selectedProblem) {
    case 'radius, &#8736;DAB': {
      if (
        inputFields &&
        inputFields.radius < 150 &&
        inputFields.angleDAB > 0 &&
        inputFields.angleDAB < 360
      ) {
        return true;
      }
      return false;
    }
    default:
      return false;
  }
};
