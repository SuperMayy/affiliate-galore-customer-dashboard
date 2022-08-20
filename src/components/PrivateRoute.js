import React from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
    const { currentUser } = useAuth();
    const location = useLocation();

  return (
    currentUser
          ? <Outlet/>
          :<Navigate to="/login"  replace state={{from: location}}/>
  )
}

export default PrivateRoute;