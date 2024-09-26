import React from 'react';
import Navbar from '../../components/NavBar/NavBar'; // Asegúrate de que la ruta sea correcta
import './Home.css'; // Si tienes estilos específicos para el componente Home

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Bienvenido a la Página Principal</h1>
      <p>Aquí puedes agregar contenido relacionado con la sección de inicio.</p>
    </div>
  );
};

export default Home;

