const initialData = {
  radius: 50,
  angleDAB: 30,
};

const inputReducer = (inputFields = initialData, { type, field, payload }) => {
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

export default inputReducer;
