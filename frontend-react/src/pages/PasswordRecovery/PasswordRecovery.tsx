import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importamos axios
import './PasswordRecovery.css'; // Asegúrate de tener el archivo CSS para estilos

const EmailRecovery: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Hacer la petición POST con axios
      const response = await axios.post('http://localhost:3000/api/user/recover', { email });
      
      if (response.status === 200) {
        const { code } = response.data; // Extraer el código de la respuesta
        alert(`Correcto, el código enviado es: ${code}`);

        // Guardar el email en localStorage
        localStorage.setItem('recoveryEmail', email);

        // Redirigir a la siguiente página
        navigate('/password-recovery-token');
      }
    } catch (error) {
      console.error("Hubo un error al enviar la solicitud", error);
      alert("Hubo un error al intentar enviar el correo. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="email-recovery-container">
      <div className="form-wrapper">
        <h2 className="form-title">Recuperar Correo</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Ingresa tu Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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

export default EmailRecovery;




