import React from 'react';
import { Navigate } from 'react-router-dom';
import Unauthorized from './Unauthorized/Unauthorized';

// Define las props que aceptará el componente
interface PrivateRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean; // Esta prop será para verificar si el usuario está autenticado
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated }) => {

    if (!isAuthenticated) {
        return <Unauthorized />;
    }

  // Si el usuario no está autenticado, redirigir a la página de login
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
