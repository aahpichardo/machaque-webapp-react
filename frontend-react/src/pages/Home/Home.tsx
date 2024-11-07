import React from 'react';
import { Typography, Button, Container, Box, Card, CardMedia, CardContent, CardActions, List, ListItem, ListItemText } from '@mui/material';
import Navbar from '../../components/NavBar/NavBar'; // Asegúrate de que la ruta sea correcta
import './Home.css'; // Si tienes estilos específicos para el componente Home
import SponsorCard from '../../components/SponsorCard';
import PostCard from '../../components/PostCard';
import restaurant1 from '../../assets/restaurante-logo1.jpg';
import Footer from '../../components/Footer/Footer';

const restaurants: string[] = [
  "La Bella Italia • Italiana • $$$",
  "El Asador Argentino • Parrilla • $$",
  "Sushi Zen • Japonesa • $$$",
  "La Casa de las Tapas • Española • $$",
  "Le Petit Bistro • Francesa • $$$",
  "Green Garden • Vegetariana • $$",
  "Spicy Curry House • India • $$",
  "Ocean's Delight • Mariscos • $$$",
  "BBQ Heaven • Barbacoa • $$",
  "La Pizzeria • Italiana • $$",
];

const Home: React.FC = () => {
  

  return (
    <>
      <Navbar />
      <Container>
        <Box className="dashboard" sx={{ mt: 3 }}>
          <Box className="dashboard-header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box className="user-info">
              <Typography variant="h4">¡Bienvenido Usuario!</Typography>
              <Typography variant="subtitle1">Entusiasta de la Comida</Typography>
            </Box>
            <Button variant="contained" color="primary" className="add-restaurant-button">
              Añadir nuevo restaurante
            </Button>
          </Box>
          <Box className="container" sx={{ display: 'flex', gap: 3 }}>
            <Box className="left-section" sx={{ flex: 2 }}>
              <Box className="featured-restaurants" sx={{ mb: 3 }}>
                <Typography variant="h5">Patrocinadores</Typography>
                <Box className="restaurant-grid" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  {/* Mapa aquí tus tarjetas de restaurantes */}
                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', p: 2 }}>
                  <Box sx={{ width: 300, mb: 2 }}>   
                        <PostCard
                          imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp8477593.jpg&f=1&nofb=1&ipt=bae81a921de017132156aa0caeab4bb9c4885d8fa26c476e6179adb8a8eef36e&ipo=images"
                          title="Pollos Hermanos"
                          foodType="Comida Casual • $$"
                          />
                    </Box>
                    <Box sx={{ width: 300, mb: 2 }}>   
                        <PostCard
                          imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.offsite.com.cy%2Fsites%2Fdefault%2Ffiles%2Finline-images%2F8bff651a-7ff2-11ea-a8c7-0a58647e8dae_kfc_group.jpg&f=1&nofb=1&ipt=1d210d9f606ad529ff41bae666cb3aae67a6bfe9189c7b4783170ab6a2372204&ipo=images"
                          title="Kentoky"
                          foodType="Comida Casual • $$"
                          />
                    </Box>
                    </Box>

                  {/* Repetir para más restaurantes */}
                </Box>
              </Box>
              <Box className="recent-uploads">
                <Typography variant="h5">Actualizaciones Recientes</Typography>
                <Box className="upload-grid" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  {/* Mapa aquí tus tarjetas de subidas recientes */}
                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', p: 2 }}>
                  <Box sx={{ width: 300, mb: 2 }}>   
                        <PostCard
                          imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmochomos.mx%2Fimg%2Fgaleria%2Frestaurante%2Fmxl1.jpg&f=1&nofb=1&ipt=c065bd02cebedffe7c5b2fcab15d66b3fc959c17dd81d59b999af67ed854653b&ipo=images"
                          title="Mochomos"
                          foodType="Comida Fifi • $$$"
                          />
                    </Box>
                    <Box sx={{ width: 300, mb: 2 }}>   
                        <PostCard
                          imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.urbantj.com%2Fwp-content%2Fuploads%2F2022%2F07%2FTacos-Aaron-5.jpg&f=1&nofb=1&ipt=34ca6ba078222526c0d4f61a27121f1bbcb5dbe7c0ee9ab7f8b200b69cf5b1fd&ipo=images"
                          title="Tacos Kon Aaron"
                          foodType="Comida Callejera • $"
                          />
                    </Box>
                    </Box>
                  {/* Repetir para más subidas recientes */}
                </Box>
              </Box>
            </Box>
            <Box className="trending-restaurants" sx={{ flex: 1 }}>
              <Typography variant="h5">Restaurantes en Tendencia</Typography>
              <List>
      {/* Mapeamos el arreglo para crear los ListItem dinámicamente */}
      {restaurants.map((restaurant, index) => (
        <ListItem key={index}>
          <ListItemText primary={restaurant} />
        </ListItem>
      ))}
    </List>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

