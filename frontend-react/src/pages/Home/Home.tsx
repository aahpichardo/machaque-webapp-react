import React from 'react';
import Navbar from '../../components/NavBar/NavBar'; // Asegúrate de que la ruta sea correcta
import './Home.css'; // Si tienes estilos específicos para el componente Home

const Home: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="user-info">
          <h2>¡Bienvenido Usuario!</h2>
          <p>Entusiasta de la Comida</p>
        </div>
        <button className="add-restaurant-button">Añadir nuevo restaurante</button>
      </div>
      <div className="container">
        <div className="left-section">
          <div className="featured-restaurants">
            <h3>Patrocinadores</h3>
            <div className="restaurant-grid">
              {/* Mapa aquí tus tarjetas de restaurantes */}
              <div className="restaurant-card">
                <img src="restaurant-image-url" alt="logo-de-restaurante" className="restaurant-image" />
                <h4>Pollo Loco</h4>
                <p>Platillos Finos • $$$</p>
                <div className="restaurant-actions">
                  <button>Me gusta</button>
                  <button>Comentar</button>
                  <button>Compartir</button>
                </div>
              </div>
              {/* Repetir para más restaurantes */}
            </div>
          </div>
          <div className="recent-uploads">
            <h3>Actualizaciones Recientes</h3>
            <div className="upload-grid">
              {/* Mapa aquí tus tarjetas de subidas recientes */}
              <div className="upload-card">
                <img src="upload-image-url" alt="imagen-de-actualizacion" className="upload-image" />
                <h4>Easy Chicken</h4>
                <p>Comida Casual • $$</p>
                <div className="upload-stats">
                  <span>24 Me gusta</span>
                  <span>8 Comentarios</span>
                </div>
              </div>
              {/* Repetir para más subidas recientes */}
            </div>
          </div>
        </div>
        <div className="trending-restaurants">
          <h3>Restaurantes en Tendencia</h3>
          {/* Lista de restaurantes en tendencia */}
          <ul>
            <li>La Bella Italia • Italiana • $$$</li>
            <li>El Asador Argentino • Parrilla • $$</li>
            <li>Sushi Zen • Japonesa • $$$</li>
            <li>La Casa de las Tapas • Española • $$</li>
            <li>Le Petit Bistro • Francesa • $$$</li>
            <li>Green Garden • Vegetariana • $$</li>
            <li>Spicy Curry House • India • $$</li>
            <li>Ocean's Delight • Mariscos • $$$</li>
            <li>BBQ Heaven • Barbacoa • $$</li>
            <li>La Pizzeria • Italiana • $$</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

