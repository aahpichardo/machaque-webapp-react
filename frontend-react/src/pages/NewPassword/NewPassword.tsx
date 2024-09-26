import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPassword.css'; // Asegúrate de tener el archivo CSS para estilos

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    // Aquí puedes agregar la lógica para actualizar la contraseña
    console.log("Nueva contraseña ingresada:", newPassword);
    alert("Contraseña actualizada");
    navigate('/login');
    // Lógica para enviar la nueva contraseña
    setErrorMessage(''); // Limpiar mensaje de error
  };

  return (
    <div className="new-password-container">
      <div className="form-wrapper">
        <h2 className="form-title">Actualizar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="new-password" className="input-label">Nueva Contraseña</label>
            <input 
              type="password" 
              id="new-password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password" className="input-label">Confirmar Contraseña</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
              className="input-field"
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="button-wrapper">
            <button type="submit" className="submit-button">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;

