import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordRecoveryToken.css'; // Asegúrate de tener el archivo CSS para estilos

const TokenRecovery: React.FC = () => {
  const [token, setToken] = useState('');

  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para verificar el token
    console.log("Token ingresado:", token);
    // Lógica para enviar el token
    alert("Token correcto");
    navigate('/new-password');
  };

  return (
    <div className="token-recovery-container">
      <div className="form-wrapper">
        <h2 className="form-title">Token de Recuperación</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="token" className="input-label">Ingresa tu Token</label>
            <input 
              type="text" 
              id="token" 
              value={token} 
              onChange={(e) => setToken(e.target.value)} 
              required 
              className="input-field"
            />
          </div>
          <div className="button-wrapper">
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TokenRecovery;

