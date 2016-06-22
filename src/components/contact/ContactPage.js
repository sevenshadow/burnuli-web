import React from 'react';
import {Link} from 'react-router';
import connect from 'react-redux';
import * as contactActions from '../../actions/contactActions';


class ContactPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      contactSubmission: {
          contactName: '',
          contactEmail: '',
          contactMessage: ''
        }
    };

    this.onContactNameChange = this.onContactNameChange.bind(this);
    this.onContactEmailChange = this.onContactEmailChange.bind(this);
    this.onContactMessageChange = this.onContactMessageChange .bind(this);
    this.onClickSubmit = this.onClickSubmit .bind(this);
  }

  onContactNameChange(event) {
    const contactSubmission = this.state.contactSubmission;
    contactSubmission.contactName = event.target.value;
    this.setState({contactSubmission: contactSubmission});
  }
  onContactEmailChange(event) {
    const contactSubmission = this.state.contactSubmission;
    contactSubmission.contactEmail = event.target.value;
    this.setState({contactSubmission: contactSubmission});
  }
  onContactMessageChange(event) {
    const contactSubmission = this.state.contactSubmission;
    contactSubmission.contactMessage = event.target.value;
    this.setState({contactSubmission: contactSubmission});
  }
 
  onClickSubmit(event) {
  //  this.props.dispatch(contactActions.submitContactForm(this.state.contactSubmission));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
          <h1>Contact Us</h1>
             <div className="form-group">
              <label htmlFor="contactName">Email address</label>
              <input type="text" onChange={this.onContactNameChange} value={this.state.contactSubmission.contactName} className="form-control" id="contactName" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail">Email address</label>
              <input type="email" onChange={this.onContactEmailChange} value={this.state.contactSubmission.contactEmail} className="form-control" id="contactEmail" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="contactMessage">Message</label>
              <textarea onChange={this.onContactMessageChange} value={this.state.contactSubmission.contactMessage} className="form-control" id="contactMessage" placeholder="Message" />
            </div>
            
            <button onClick={this.onClickSubmit} className="btn btn-default">Submit</button>
          
        </div>
      </div>
    );
  }
}

ContactPage.propTypes= {
  dispatch: React.PropTypes.func.isRequired,
  contactSubmission: React.PropTypes.object.isRequired
  
};

function mapStateToProps(state, ownProps) {
  return {
    contactSubmission: state.contactSubmission

  };
}

export default connect(mapStateToProps)(ContactPage);