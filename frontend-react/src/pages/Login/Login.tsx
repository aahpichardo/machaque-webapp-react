import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/ModalAvisos/ModalAvisos'; // Asegúrate de importar el modal
import './Login.css';
import axios from 'axios';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse{
  message: string;
  token?: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: ""
  });

  const [error, setError] = useState<string | null>(null); // Para manejar errores si es necesario
  const navigate = useNavigate(); // Hook para redirigir

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("iniciando sesion...")
    navigate('/home');

    /*
    try {
      const response = await axios.post("http://localhost:3000/api/user/new", userData);

      // Si la respuesta es exitosa y contiene el mensaje esperado
      if (response.data.message === "registro exitoso") {
        console.log("Usuario registrado con éxito");
        // Redirige a la página de inicio o a donde desees
        navigate('/home');
      } else {
        setError("Error al registrar. Verifique los datos.");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Ocurrió un error. Por favor, intente de nuevo.");
      setError("Ocurrió un error. Por favor, intente de nuevo.");
    }
  };
    }*/
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
        <span>
        <Link to="/password-recovery">¿Olvidaste tu contraseña?</Link>
          </span>
        <button type="submit" className="submit-button">Ingresar</button>
      </form>
      <p className="footer-text">
        ¿Nuevo por aquí? <Link to="/register">Regístrate</Link>
      </p>
      <p className="footer-text">
        <a href="#" onClick={openModal}>Aviso de privacidad</a>
      </p>
      <Modal 
        title="Aviso de Privacidad" 
        content="Aviso de Privacidad y Confidencialidad de la Información
En Machaque, estamos comprometidos con la protección de la privacidad y la confidencialidad de la información de nuestros usuarios. Este aviso describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales que usted proporciona al utilizar nuestra plataforma.
1. Recopilación de DatosRecopilamos información personal que incluye, pero no se limita a: nombre, dirección de correo electrónico, número de teléfono, y cualquier otro dato que usted ingrese al registrarse o utilizar nuestros servicios.
2. Uso de la InformaciónLa información personal proporcionada será utilizada únicamente para los fines establecidos en nuestra plataforma, tales como la gestión de su cuenta, la mejora de la experiencia del usuario, y la seguridad de la plataforma.
3. Confidencialidad y SeguridadNos comprometemos a no compartir, vender o alquilar su información personal a terceros sin su consentimiento, salvo en los casos necesarios para cumplir con obligaciones legales o proteger los derechos de la plataforma. Hemos implementado medidas de seguridad para proteger sus datos contra accesos no autorizados, pérdida o modificación.
4. Derechos del UsuarioUsted tiene el derecho de acceder, rectificar, cancelar u oponerse al uso de sus datos personales. Para ejercer estos derechos, por favor comuníquese con nuestro equipo a través del correo electrónico [correo de contacto].
5. Modificaciones al Aviso de PrivacidadNos reservamos el derecho de actualizar este aviso en cualquier momento. Cualquier modificación será publicada en nuestra plataforma.
Fecha de última actualización: 25/septiembre/2024" 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Login;

