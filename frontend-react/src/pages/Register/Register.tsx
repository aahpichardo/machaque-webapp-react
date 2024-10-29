import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de tener axios instalado
import Modal from '../../components/ModalAvisos/ModalAvisos'; // Asegúrate de importar el modal
import './Register.css'; // Importa el archivo de estilos

const Register: React.FC = () => {
  const [isModalOpenPrivacy, setModalOpenPrivacy] = useState(false);
  const [isModalOpenTerms, setModalOpenTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [userData, setUserData] = useState({
    user_name: '',
    user_last_name: '',
    email: '',
    phone_number:'',
    password: '',
    created_at: new Date().toISOString().split('T')[0],
    last_login: new Date().toISOString().split('T')[0],
    fk_user_role: 1,
    fk_endorsement_id: 1,
    user_status: 1
  });

  const navigate = useNavigate(); // Hook para redirigir

  const openModalPrivacy = () => setModalOpenPrivacy(true);
  const closeModalPrivacy = () => setModalOpenPrivacy(false);

  const openModalTerms = () => setModalOpenTerms(true);
  const closeModalTerms = () => setModalOpenTerms(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  // Verifica la validez de la contraseña
  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica si la contraseña es válida
    if (!validatePassword(userData.password)) {
      alert("La contraseña debe tener al menos 8 caracteres, incluir un número, una letra mayúscula y un carácter especial.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/user/new", userData);
      if (response.status === 200) {
        alert('Usuario creado exitosamente');
        navigate('/login'); // Redirige a la página de inicio de sesión
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert("Ocurrió un error. Por favor, intente de nuevo.");
    }
  };

  return (
    <div className="registro">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper-4">Registro</div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="label" htmlFor="user_name">Nombre</label>
              <input type="text" id="user_name" className="input" required onChange={handleChange} />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="user_last_name">Apellido</label>
              <input type="text" id="user_last_name" className="input" required onChange={handleChange} />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="email">Correo</label>
              <input type="email" id="email" className="input" required onChange={handleChange} />
            </div>
            <div className="input-group">
        <label className="label" htmlFor="phone_number">Número Telefónico</label>
        <input type="tel" id="phone_number" className="input" pattern="[0-9]{10}" required onChange={handleChange} />
      </div>
            <div className="input-group">
              <label className="label" htmlFor="password">Contraseña</label>
              <input type="password" id="password" className="input" required onChange={handleChange} />
            </div>
            <div className="input-group">
              <label className="label" htmlFor="confirm-password">Confirmar contraseña</label>
              <input type="password" id="confirm-password" className="input" required />
              <p className="p">Mínimo 8 caracteres, que incluya números, mayúsculas y un carácter especial</p>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="privacy"
                checked={acceptedPrivacy}
                onChange={() => setAcceptedPrivacy(!acceptedPrivacy)}
              />
              <label htmlFor="privacy" className="checkbox-label">
                He leído y acepto el <button onClick={openModalPrivacy} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>aviso de privacidad</button>
              </label>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <label htmlFor="terms" className="checkbox-label">
                He leído y acepto los <button onClick={openModalTerms} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>términos y condiciones</button>
              </label>
            </div>
            <div className="div-wrapper">
              <button type="submit" className="text-wrapper-9" disabled={!acceptedPrivacy || !acceptedTerms}>
                Registrarme
              </button>
            </div>
          </form>
          <span>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </span>
          <Modal 
            title="Aviso de Privacidad" 
            content="Aviso de Privacidad y Confidencialidad de la Información
            En Machaque, estamos comprometidos con la protección de la privacidad y la confidencialidad de la información de nuestros usuarios. Este aviso describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales que usted proporciona al utilizar nuestra plataforma." 
            isOpen={isModalOpenPrivacy} 
            onClose={closeModalPrivacy} 
          />
          <Modal 
            title="Términos y Condiciones" 
            content="Términos y Condiciones de Uso
            El uso de la plataforma Machaque está sujeto a los siguientes términos y condiciones." 
            isOpen={isModalOpenTerms} 
            onClose={closeModalTerms} 
          />
        </div>
      </div>
    </div>
  );
};

export default Register;








