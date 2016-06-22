export default function contactReducer(state = {}, action= {}) {
  switch(action.type) {
    case 'SUBMIT_CONTACT_FORM':
      return Object.assign({}, state);  
    
    default:
      return state;
  }

}