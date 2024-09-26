import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordRecovery.css'; // Asegúrate de tener el archivo CSS para estilos

const EmailRecovery: React.FC = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo
    console.log("Correo:", email);
    alert("Se envio un correo electronico a tu cuenta");
    navigate('/password-recovery-token');

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


