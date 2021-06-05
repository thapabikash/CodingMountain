import React ,{useState,useContext,useEffect} from 'react';

import User_list_Class_render from '../../userlist/userlist_page_class';
import {UserContext} from '../../../service/userContext';
import './leftlandingpage.css';

function Leftlandingpage(props) {

  const fetchUserApi=process.env.REACT_APP_FETCH_USER;

  /**
   * @param {Object}
   * @function @useContext- Using user provider
   * @param {Array} - collection of object in arrays
   * @fetchUserApi -String from environment
   *    */

  const [users,setUsers] = useContext(UserContext);

  const fetchUserService=async()=>{
        const CodingMountuserlist = fetchUserApi;
        const codingMount_users=await fetch(CodingMountuserlist);
        const fetchusers=await codingMount_users.json();
        if(fetchusers){
               setUsers(fetchusers)
        }
        else{
                setUsers (users)
        }     
  }

  useEffect(async() => {
    fetchUserService()
  }, [users]);


  let userprofile=user=>{
    props.userprofile(user)
 }

  return (
      <div className="codingmountainuserleft">
            <h3 className="text-center">User Profile List 
                  <button type="button" className="btn btn-primary">
                        Total User <span className="badge badge-light">{users.length}</span>
                  </button>
            </h3>
              <ul>
                   {users.map((user,index)=> <User_list_Class_render   users={user} id={index} key={index} userprofile={userprofile}/>)}
              </ul>
      </div>
  );
}

export default Leftlandingpage;
