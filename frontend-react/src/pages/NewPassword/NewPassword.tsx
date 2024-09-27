import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importamos axios
import './NewPassword.css'; // Asegúrate de tener el archivo CSS para estilos

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Hook para redirigir

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    // Validar la nueva contraseña
    if (!validatePassword(newPassword)) {
      alert("La contraseña debe tener al menos 8 caracteres, incluir números, mayúsculas y un carácter especial.");
      return;
    }

    // Recuperar el correo y el token del localStorage
    const email = localStorage.getItem('recoveryEmail');
    const token = localStorage.getItem('validationToken');

    if (!email || !token) {
      alert("No se encontraron los datos necesarios. Por favor, inténtalo de nuevo.");
      return;
    }

    try {
      // Hacer la petición PUT con axios
      const response = await axios.put('http://localhost:3000/api/user/change', 
        { email, password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        alert("Contraseña actualizada");
        localStorage.removeItem('recoveryEmail');
        localStorage.removeItem('validationToken');
        // Redirigir a la página de inicio de sesión
        navigate('/login');
      }
    } catch (error) {
      console.error("Hubo un error al cambiar la contraseña", error);
      alert("Hubo un error al intentar cambiar la contraseña. Por favor, inténtalo de nuevo.");
    }

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


