import React ,{useState,createContext} from 'react';
import userList  from './dummy_userlist';
export const UserContext=createContext();
export  const UserProfileProvider=(props)=>{
    const [users,setUsers] = useState(
        userList()
    )
    return(
        <UserContext.Provider 
        value={[users,setUsers] }
        >
            {props.children}
        </UserContext.Provider>
    )
}