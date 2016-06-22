import  {combineReducers} from 'redux';
import contactSubmission from './contactReducer';

const rootReducer = combineReducers({
  contactSubmission: contactSubmission
});

export default rootReducer;