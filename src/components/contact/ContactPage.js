import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions';

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Contact</h1>
          
      </div>
    );
  }
}

ContactPage.propTypes= {
  contactInformation: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    contactInformation: state.contactInformation || {}
  };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);