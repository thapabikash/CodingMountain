import './landing.css';

import  Leftlandingpage from './leftsection/leftlandingpage';
import  Rightlandingpage from './rightsection/rightlandingpage';
import {UserProfileProvider} from '../../service/userContext';

import React from 'react';

function Landingpage() {

  /**
   * @inline_css_header -binding inline css property
   */
  const inline_css_header={
        fontWeight:'600',
  }

  const [user,setuser]= React.useState({});

  /**
   * @userprofile - component intereaction through callback child - parent
   * @param {Object} user 
   */
  
  let emit_Userprofile=(user)=>{
     setuser(user)
  }

  return (
   <UserProfileProvider>
   <section className="container userlist">
          <div className="text-center"><h3 style={inline_css_header}>Hellow from coding mountain</h3></div>
                <div className="row">
                      <div className="col-md-6" >
                           <Leftlandingpage  emit_Userprofile={emit_Userprofile}/>
                      </div>
                      <div className="col-md-6" >
                            <Rightlandingpage user={user}>Right Landing Page</Rightlandingpage>
                      </div>
                </div>
     </section> 
   </UserProfileProvider>
  );
}

export default Landingpage;
