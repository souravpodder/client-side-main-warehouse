import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadinSpinner from '../../LoadinSpinner/LoadinSpinner';

const RequireAuth = ({ children }) => {

  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  //to solve reloading back to login
  if (loading) {
    return <LoadinSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;