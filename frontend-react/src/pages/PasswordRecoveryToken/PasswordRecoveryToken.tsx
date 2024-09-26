import React from 'react';
import './PasswordRecoveryToken.css'; // Asegúrate de tener el archivo CSS para estilos

const LoginRecuperar: React.FC = () => {
  return (
    <div className="login-recuperar">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="div"></div>
          <div className="rectangle-2"></div>
          <div className="text-wrapper">Iniciar sesión</div>
          <div className="text-wrapper-2">Correo</div>
          <div className="text-wrapper-3">Contraseña</div>
          <div className="text-wrapper-4">Ingresar</div>
          <div className="text-wrapper-5">Bienvenido a nuestra app</div>
          <div className="text-wrapper-6">Olvidé mi contraseña</div>
          <div className="text-wrapper-7">Aviso de privacidad</div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-2"></div>
          <div className="text-wrapper-8">Recuperar contraseña</div>
          <p className="p">Ingresa el código de recuperación</p>
          <div className="text-wrapper-9">Recuperar contraseña</div>
        </div>
      </div>
    </div>
  );
};

export default LoginRecuperar;
