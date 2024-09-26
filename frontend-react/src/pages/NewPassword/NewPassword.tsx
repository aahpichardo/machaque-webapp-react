import React from 'react';
import './NewPassword.css'; // Asegúrate de tener el archivo CSS para estilos

const LoginRecuperar: React.FC = () => {
  return (
    <div className="login-recuperar">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="div"></div>
          <div className="overlap">
            <div className="text-wrapper">Ingresar</div>
          </div>
          <div className="text-wrapper-2">Nueva contraseña</div>
          <p className="p">Vuelve a ingresar la contraseña</p>
          <div className="text-wrapper-3">Recuperar contraseña</div>
        </div>
      </div>
    </div>
  );
};

export default LoginRecuperar;
