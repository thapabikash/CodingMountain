import React ,{useState,useContext,useEffect} from 'react';
import './userprofile.css';
import {Link} from 'react-router-dom';

function Userprofilepage(props) {
    const uniqueId=props.match.params.id;

  return (
   <div className="userprofilepage">
        <h3 className="text-center">Profile </h3>
        <div className="alert alert-primary" role="alert">
              Required get User by Id/name for this 
               <h2>You Selected {uniqueId}'s Profile</h2>
               <Link to='/'>Go Back</Link>
      </div>
   </div>
  );
}

export default Userprofilepage;
