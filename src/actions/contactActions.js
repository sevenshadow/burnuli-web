import * as types from './actionTypes';
import contactApi from '../api/contactApi';

export function submitContactFormSuccess(contactInformation) {
  return {
    type: types.SUBMIT_CONTACT_FORM_SUCCESS, 
    contactInformation: contactInformation
  };
}

export function submitContactForm(contactInformation) {
  return function(dispatch, getState) {
    return contactApi.submitContactForm().then(returnedContactInformation => {
      dispatch(submitContactFormSuccess(returnedContactInformation)) ;
    }).catch(error => {
      throw(error);
    });
  };
}