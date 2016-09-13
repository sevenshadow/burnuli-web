import  {combineReducers} from 'redux';
import projects from './projectsReducer';
import services from './servicesReducer';

const rootReducer = combineReducers({
  projects,
  services
});

export default rootReducer;