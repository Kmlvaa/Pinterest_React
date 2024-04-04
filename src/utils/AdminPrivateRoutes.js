import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const id = localStorage.getItem('id');
    return (
       id == "5b539870-feb9-494a-bdd1-746832ebbea6" ? <Outlet/> : <Navigate to='/accessDenied'/>
    );
}

export default PrivateRoutes;
