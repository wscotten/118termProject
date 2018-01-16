import { combineReducers } from 'redux';
import inputFields from './components/Input/reducer';
import selectedProblem from './components/ProblemSelector/reducer';

export default combineReducers({
  inputFields,
  selectedProblem,
});
