import  {combineReducers} from 'redux';
import projects from './projectsReducer';

const rootReducer = combineReducers({
  projects: projects
});

export default rootReducer;