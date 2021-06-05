import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Imagerender from './imagerender';

class  User_list_Class_render extends React.Component{

    constructor(props){
        super(props)
        this.high_priority_images=[];
        this.name=`${props.users.firstName} ${props.users.lastName===undefined?"":props.users.lastName}`;
        this.Priority_rank=["google", "linkedin", "facebook", "twitter", "office365", undefined];
        this.filtered_high_priority_image();
        this.userProfile=this.userProfile.bind(this);
    }

    /**
     * @name {string} name
     * @Priority_rank -["google", "linkedin", "facebook", "twitter", "office365", undefined] 
     * @param {Object} props -{users:{},id}
     * @param {Array} high_priority_images-[{source,url}]
     * @function  filtered_high_priority_image -filter image and placed with ordering acc to @Priority_rank
     */

    filtered_high_priority_image=()=>{
        const new_coding_Photos = [];
        this.Priority_rank.forEach((item) => { 
        this.props.users.photos.forEach((innerItem)=> {
            if( innerItem.source===undefined){
                new_coding_Photos.push(innerItem)
            }
            else{
                if ( innerItem.source.includes(item)) {
                    new_coding_Photos.push(innerItem)
                }
            }       
        });
    });
    this.high_priority_images=[...new Set(new_coding_Photos)]
}

userProfile=()=>{
        this.props.userprofile(this.props.users)
}

render(){
    return (
        <div className="userlist card">
                   <div className="row">
                       <div className="col-md-2">
                           <Imagerender image={this.high_priority_images}/>
                       </div>
                       <div className="col-md-5">
                             {this.name}
                       </div>
                       <div className="col-md-5">
                             <button type="button" className="btn btn-primary" onClick={this.userProfile}>More..</button>
                             <button type="button" className="btn btn-light">
                                 {/* navigate with firstname */}
                             <Link to={'/detail/'+this.props.users.firstName}>open with routing..</Link></button>
                       </div>
                   </div>
           </div> 
       );
    }
  
  }
  
  export default User_list_Class_render ;
  