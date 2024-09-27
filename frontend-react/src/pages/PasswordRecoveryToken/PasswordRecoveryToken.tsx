import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importamos axios
import './PasswordRecoveryToken.css'; // Asegúrate de tener el archivo CSS para estilos

const TokenRecovery: React.FC = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Recuperar el correo del localStorage
    const email = localStorage.getItem('recoveryEmail');

    if (!email) {
      alert("No se encontró el correo electrónico. Por favor, inténtalo de nuevo.");
      return;
    }

    try {
      // Hacer la petición POST con axios
      const response = await axios.post('http://localhost:3000/api/user/validate', { email, code: token });
      
      if (response.status === 200) {
        const { token: receivedToken } = response.data; // Extraer el token de la respuesta
        alert("Token correcto");
        
        // Guardar el token en localStorage
        localStorage.setItem('validationToken', receivedToken);

        // Redirigir a la siguiente página
        navigate('/new-password');
      }
    } catch (error) {
      console.error("Hubo un error al validar el token", error);
      alert("El token ingresado es incorrecto. Por favor, inténtalo de nuevo.");
    }
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


