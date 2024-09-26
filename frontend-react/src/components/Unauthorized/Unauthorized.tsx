import React from 'react';
import './Unauthorized.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta o ajusta la ruta
import { useNavigate } from 'react-router-dom';

const NoPermission: React.FC = () => {

  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="no-permission-container">
      <h1>No tienes permisos requeridos</h1>
      <p>Lo sentimos, no tienes acceso a esta sección. Comunícate con el administrador si crees que esto es un error.</p>
      <button className="link-button" onClick={handleLoginRedirect}>
      Ir a Iniciar Sesión
    </button>    </div>
  );
};

export default NoPermission;
