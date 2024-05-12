import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const id = localStorage.getItem('id');
    return (
       id == "f402f0ac-a652-4920-8cb1-fb1a0bc53208" ? <Outlet/> : id == null ? <Navigate to='/login' /> : <Navigate to='/accessDenied'/>
    );
}

export default PrivateRoutes;
