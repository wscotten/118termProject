export default (field, value) => ({
  type: 'UPDATE_INPUT',
  field,
  payload: Number(value),
});
