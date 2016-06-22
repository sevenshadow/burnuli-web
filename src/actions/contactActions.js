export function submitContactForm(contactSubmission) {
  return {
    type: 'SUBMIT_CONTACT_FORM', 
    contactSubmission: contactSubmission
  };
}