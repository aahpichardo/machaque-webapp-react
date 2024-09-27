import React from 'react';
import { Navigate } from 'react-router-dom';
import Unauthorized from './Unauthorized/Unauthorized';

interface PrivateRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Unauthorized />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

