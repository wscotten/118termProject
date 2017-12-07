import { combineReducers } from 'redux';
import inputFields from './app/components/Input/reducer';
import selectedProblem from './app/components/ProblemSelector/reducer';

export default combineReducers({
  inputFields,
  selectedProblem,
});
