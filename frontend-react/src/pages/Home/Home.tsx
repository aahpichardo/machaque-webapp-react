import React from 'react';
import { Typography, Button, Container, Box, Card, CardMedia, CardContent, CardActions, List, ListItem, ListItemText } from '@mui/material';
import Navbar from '../../components/NavBar/NavBar'; // Asegúrate de que la ruta sea correcta
import './Home.css'; // Si tienes estilos específicos para el componente Home
import SponsorCard from '../../components/SponsorCard';
import restaurant1 from '../../assets/restaurante-logo1.jpg';

interface Restaurants {
  name: string;
  image: string;
  description: string;
}

const Home: React.FC = () => {
  // Aquí puedes definir un estado para los restaurantes patrocinados
  const restaurants: Restaurants[] = [
    {
      name: 'Pollos hermanos',
      image: restaurant1,
      description: 'Pollos fritos y más'
    }
  ]

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

                  {/* Repetir para más restaurantes */}
                </Box>
              </Box>
              <Box className="recent-uploads">
                <Typography variant="h5">Actualizaciones Recientes</Typography>
                <Box className="upload-grid" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  {/* Mapa aquí tus tarjetas de subidas recientes */}
                  <Card className="upload-card" sx={{ width: '100%', maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="imagen-de-actualizacion"
                      height="140"
                      image="upload-image-url"
                      title="Easy Chicken"
                    />
                    <CardContent>
                      <Typography variant="h6">Easy Chicken</Typography>
                      <Typography variant="body2" color="textSecondary">Comida Casual • $$</Typography>
                    </CardContent>
                    <CardActions>
                      <Typography variant="body2" color="textSecondary">24 Me gusta</Typography>
                      <Typography variant="body2" color="textSecondary">8 Comentarios</Typography>
                    </CardActions>
                  </Card>
                  {/* Repetir para más subidas recientes */}
                </Box>
              </Box>
            </Box>
            <Box className="trending-restaurants" sx={{ flex: 1 }}>
              <Typography variant="h5">Restaurantes en Tendencia</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="La Bella Italia • Italiana • $$$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="El Asador Argentino • Parrilla • $$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sushi Zen • Japonesa • $$$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="La Casa de las Tapas • Española • $$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Le Petit Bistro • Francesa • $$$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Green Garden • Vegetariana • $$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Spicy Curry House • India • $$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ocean's Delight • Mariscos • $$$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="BBQ Heaven • Barbacoa • $$" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="La Pizzeria • Italiana • $$" />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;

