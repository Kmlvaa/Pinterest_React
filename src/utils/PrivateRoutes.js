import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux'
const PrivateRoutes = () => {
    // const {isLoggedIn, userId, token} = useSelector(x => x.account);
    // console.log(isLoggedIn, userId, token)
    const token = localStorage.getItem('token');

    return (
       token ? <Outlet/> : <Navigate to='/login'/>
    );
}

export default PrivateRoutes;
