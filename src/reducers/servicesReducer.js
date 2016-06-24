import * as types from '../actions/actionTypes';

export default function servicesReducer(state = [], action= {}) {
  switch(action.type) {
    case types.LOAD_SERVICES_SUCCESS:
      return action.services;  
    default:
      return state;
  }

}