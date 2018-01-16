const initialData = {
  radius: 50,
  angleDAB: 50,
};

export default (inputFields = initialData, { type, field, payload }) => {
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

export const update = (field, value) => {
  if (isNaN(value) || value < 0 || value.length > 4) return { type: 'DONT_UPDATE' };
  return {
    type: 'UPDATE_INPUT',
    field,
    payload: Number(value),
  };
};

