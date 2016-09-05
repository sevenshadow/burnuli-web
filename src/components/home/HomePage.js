import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    //        <!-- <Link to="/about" className="btn btn-primary btn-lg">Learn More</Link> -->
    return (
      <div className="jumbotron">
        <h1>Seven Shadow LLC</h1>
        <p>Financial Analysis and Application Development Services</p>
        <p><a className="btn btn-primary btn-lg" href="mailto:charlie@sevenshadow.com">More Information</a></p>
      </div>
    );
  }
}

export default HomePage;