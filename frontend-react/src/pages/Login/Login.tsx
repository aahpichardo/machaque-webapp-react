import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Asegúrate de importar el hook
import Modal from '../../components/ModalAvisos/ModalAvisos'; // Asegúrate de importar el modal
import './Login.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode"

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token?: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: ""
  });

  const { login } = useAuth(); // Usar el hook de autenticación
  const navigate = useNavigate(); // Hook para redirigir

  const [error, setError] = useState<string | null>(null); // Para manejar errores si es necesario

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Iniciando sesión...");

    try {
      const response = await axios.post("http://localhost:3000/api/login", loginData);
      const token = response.data.token;

      // Decodifica y guarda el token
      const decoded = jwtDecode(token);
      localStorage.setItem('token', token);

      // Lógica de inicio de sesión
      login(); // Actualiza el estado de autenticación
      navigate('/home');
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        alert("El correo o la contraseña son incorrectos."); // Alert para error 401
      } else {
        console.error("Error al iniciar sesión:", error);
        setError("Error al iniciar sesión. Verifique sus credenciales.");
      }
    }
  };

  // Lógica modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="login-card">
      <h2 className="title">Iniciar sesión</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label" htmlFor="email">Correo</label>
          <input 
            type="email" 
            id="email" 
            className="input" 
            required
            value={loginData.email}
            onChange={handleInputChange} 
          />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            className="input" 
            required
            value={loginData.password}
            onChange={handleInputChange} 
          />
        </div>
        <span className="login-forgot-password">
          <Link to="/password-recovery">¿Olvidaste tu contraseña?</Link>
        </span>
        <button type="submit" className="login-submit-button">Ingresar</button>
      </form>
      <p className="footer-text">
        ¿Nuevo por aquí? <Link to="/register">Regístrate</Link>
      </p>
      <p className="footer-text">
        <button onClick={openModal} style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
          Aviso de privacidad
        </button>
      </p>
      <Modal 
        title="Aviso de Privacidad" 
        content="En Machaque, estamos comprometidos con la protección de la privacidad y la confidencialidad de la información de nuestros usuarios. Este aviso describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales que usted proporciona al utilizar nuestra plataforma.
1. Recopilación de Datos. Recopilamos información personal que incluye, pero no se limita a: nombre, dirección de correo electrónico, número de teléfono, y cualquier otro dato que usted ingrese al registrarse o utilizar nuestros servicios.
2. Uso de la Información. La información personal proporcionada será utilizada únicamente para los fines establecidos en nuestra plataforma, tales como la gestión de su cuenta, la mejora de la experiencia del usuario, y la seguridad de la plataforma.
3. Confidencialidad y Seguridad. Nos comprometemos a no compartir, vender o alquilar su información personal a terceros sin su consentimiento, salvo en los casos necesarios para cumplir con obligaciones legales o proteger los derechos de la plataforma. Hemos implementado medidas de seguridad para proteger sus datos contra accesos no autorizados, pérdida o modificación.
4. Derechos del Usuario. Usted tiene el derecho de acceder, rectificar, cancelar u oponerse al uso de sus datos personales. Para ejercer estos derechos, por favor comuníquese con nuestro equipo a través del correo electrónico machaque@app.com.
5. Modificaciones al Aviso de Privacidad Nos reservamos el derecho de actualizar este aviso en cualquier momento. Cualquier modificación será publicada en nuestra plataforma.
Fecha de última actualización: 25/septiembre/2024" 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Login;


