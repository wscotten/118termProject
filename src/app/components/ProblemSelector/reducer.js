const problemSelectorReducer = (selectedProblem = 'radius, &#8736;DAB', { type, payload }) => {
  switch (type) {
    case 'SELECT_PROBLEM':
      return payload;
    default:
      return selectedProblem;
  }
};

export default problemSelectorReducer;
