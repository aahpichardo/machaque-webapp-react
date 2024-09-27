import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useAuth } from '../../contexts/AuthContext'; // Asegúrate de ajustar la ruta
import './NavBar.css';
import logo from '../../assets/logo.jpeg';

const Navbar: React.FC = () => {
  const navigate = useNavigate(); // Hook para redirigir
  const { logout } = useAuth(); // Accede a la función logout del contexto

  const handleLogout = () => {
    console.log("Cerrando sesión..."); // Mensaje en consola
    logout(); // Establece isAuthenticated en false
    localStorage.removeItem('token'); // Elimina el token del local storage
    navigate('/login'); // Redirige a la página de login
    alert("Sesión cerrada exitosamente"); // Muestra un mensaje de alerta
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Inicio</Link></li>
        {/*<li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contacto</Link></li>*/}
      </ul>
      <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
};

export default Navbar;


