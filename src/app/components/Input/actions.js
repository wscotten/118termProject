export default (field, value) => {
  if (isNaN(value) || value < 0 || value.length > 4) return { type: 'DONT_UPDATE' };
  return {
    type: 'UPDATE_INPUT',
    field,
    payload: Number(value),
  };
};
