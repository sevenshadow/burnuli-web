import * as types from '../actions/actionTypes';

export default function projectsReducer(state = {}, action= {}) {
  switch(action.type) {
    case types.SUBMIT_CONTACT_FORM_SUCCESS:
      return action.contactResponse;  
    default:
      return state;
  }

}