import React from 'react';
import {  Link } from 'react-router-dom';

import './rightlandingpage.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { Carousel } from 'react-responsive-carousel';
 function Rightlandingpage(props) {

  /**
   * @param {Object} props
   * @param {Object} user
   * @userFullname {string}
   * @function 
   */

  const newuser=props.user;
  const childprops=props.children;
  const userFullname=`${newuser.firstName} ${newuser.lastName===undefined?"":newuser.lastName}`;

  const  Initialize_detail_section=()=> {
    return (
       <div className="initialuserdetailpage">
             <div class="alert alert-warning" role="alert">
                   Clict Left  More Button Section To View Detail
             </div>
        </div>
        );
  }
  
  const  After_event_section=()=> {
    return (
      <>
      <h3 className="text-center">{userFullname}</h3>
         <div className="card">
         <Carousel>
             {newuser.photos.map(em=>
             <div>
                <img src={em.url}/>
                <p className="legend">{em.source}</p>
             </div>
            )}
            </Carousel>
          <div className="card-body">
            <h5 className="card-title"> {newuser.firstName}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <Link to={'/detail/'+newuser.firstName}>View Detail - {childprops}</Link>
          </div>
        </div>
        </>
    );
  }

  const  RenderFinalComponent=()=>{
       return Object.keys(newuser).length>0? <After_event_section/>:<Initialize_detail_section/>
    // if(Object.keys(newuser).length>0){
    //     return <After_event_section/>;
    // }
    // else{
    //       return <Initialize_detail_section/>;
    // }
  }

  return (
    <>
    <div className="codingmountainuserright">
         {<RenderFinalComponent/>}
    </div>
    </>
  );
}

export default Rightlandingpage;
