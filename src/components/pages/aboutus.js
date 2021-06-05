import React from 'react';
import './about_contact.css';
import {  Link } from 'react-router-dom';
class About extends React.Component {
    render() {
      return (<div className="aboutUs">
                       <h3>About Coding Mountain</h3>
                 <div>
                       <Link to='/'>Go Back</Link>
                 </div>
      </div>);
    }
  }
  export default About