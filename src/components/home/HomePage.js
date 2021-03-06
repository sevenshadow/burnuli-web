import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';


//let myImage = require("../../images/New-York-Background.jpg");

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 main-content">
            <h1>Burnuli</h1>
            <p>Financial Analysis and Application Development</p>
            <div className="add-margin-top-20">
              e. <Link to="mailto:info@sevenshadow.com" target="_self">info@sevenshadow.com</Link> t. <Link to="tel:646-355-8806" target="_self">+1.646.355.8806</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;