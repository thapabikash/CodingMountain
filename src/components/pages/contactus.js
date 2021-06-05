import React from 'react';
import {  Link } from 'react-router-dom';
class Contact extends React.Component {
    render() {
      return (<div className="contactUs">
                 <h3>Contact Coding Mountain</h3>
                 <div>
                       <Link to='/'>Go Back</Link>
                 </div>
      </div>);
    }
  }
  export default Contact