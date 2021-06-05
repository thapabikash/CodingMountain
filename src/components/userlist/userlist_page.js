import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

import Imagerender from './imagerender';


const  User_list_render=props=> {

    let high_priority_images=[];
    const {users,id}=props;
    const name=`${users.firstName} ${users.lastName===undefined?"":users.lastName}`;
    const Priority_rank= ["google", "linkedin", "facebook", "twitter", "office365", undefined];
    
    /**
     * @name {string} name
     * @Priority_rank -["google", "linkedin", "facebook", "twitter", "office365", undefined] 
     * @param {Object} props -{users:{},id}
     * @param {Array} high_priority_images-[{source,url}]
     * @function  filtered_high_priority_image -filter image and placed with ordering acc to @Priority_rank
     */

    function viewUserinfo(event){
         event.preventDefault();
         alert(id);
    }

    const filtered_high_priority_image=()=>{
        const new_Photos = [];
        Priority_rank.forEach((item) => { 
        users.photos.forEach((innerItem)=> {
            if( innerItem.source===undefined){
                new_Photos.push(innerItem)
            }
            else{
                if ( innerItem.source.includes(item)) {
                    new_Photos.push(innerItem)
                }
            }       
        });
    });
    high_priority_images=[...new Set(new_Photos)]
}

filtered_high_priority_image();



const  userProfile=()=>{
        props.userprofile(users)
}

    return (
     <>
       <div className="userlist card">
                  <div className="row">
                      <div className="col-md-2">
                          <Imagerender image={high_priority_images}/>
                      </div>
                      <div className="col-md-5">
                            {name}
                      </div>
                      <div className="col-md-5">
                            <button type="button" className="btn btn-primary" onClick={userProfile}>More..</button>
                            <button type="button" className="btn btn-light">
                                {/* navigate with firstname */}
                            <Link to={'/detail/'+users.firstName}>open with routing..</Link></button>
                      </div>
                  </div>
          </div> 
     </>
    );
  }
  
  export default User_list_render ;
  