import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextAuth } from '../../context/UseContext';

const ProtectedRout = ({children}) => {
    const { users, loding } = useContext(ContextAuth)
    const location = useLocation()    

    if (loding) {
        return <p>loding..................</p>   
    }
    if (!users) {
    return <Navigate to='/Login' state={{from:location}} replace ></Navigate>;   //option 1

    }
    return children;


// if (users && users.uid) {
//     return children;                         // option2
// }
// return <Navigate to='/Login' state={{from:location}} replace></Navigate>;   
    
};

export default ProtectedRout;