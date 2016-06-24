import * as types from './actionTypes';
import contactApi from '../api/contactApi';

export function submitContactFormSuccess(contactResponse) {
  return {
    type: types.SUBMIT_CONTACT_FORM_SUCCESS, 
    contactResponse: contactResponse
  };
}

export function submitContactForm() {
  return function(dispatch) {
    return contactApi.submitContactForm().then(contactResponse => {
      dispatch(submitContactFormSuccess(contactResponse)) ;
    }).catch(error => {
      throw(error);
    });
  };
}