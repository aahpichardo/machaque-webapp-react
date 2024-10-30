import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './NavBar.css';
import logo from '../../assets/logo.jpeg';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    logout();
    localStorage.removeItem('token');
    navigate('/login');
    alert("Sesión cerrada exitosamente");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/mensajes">Perfil</Link></li>
      </ul>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar..." />
      </div>
      <button className="logout-button" onClick={handleLogout}>
        <svg className="logout-logo" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" />
        </svg>
        Salir
      </button>
    </nav>
  );
};

export default Navbar;



