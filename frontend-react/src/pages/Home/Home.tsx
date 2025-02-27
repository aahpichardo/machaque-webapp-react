import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PostCard from "../../components/PostCard";
import "./Home.css";
import ModalNewPost from "../../components/ModalNewPost";

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
  const userData = JSON.parse(localStorage.getItem("loginData") || "{}");
  const userName = userData.name || "Usuario";

  return (
    <>
      <Navbar />

      <Box className="dashboard" sx={{ mt: 3, px: 2 }}>
        <Box
          className="dashboard-header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap", // Ajusta las columnas en pantallas pequeñas
            gap: 2,
          }}
        >
          <Box className="user-info">
            <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
              ¡Bienvenido {userName}!
            </Typography>
            <Typography variant="body1">Entusiasta de la Comida</Typography>
          </Box>
          <ModalNewPost />
        </Box>

        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          <Box className="left-section" sx={{ flex: 2 }}>
            <Box className="featured-restaurants" sx={{ mb: 3 }}>
              <Typography variant="h5">Patrocinadores</Typography>
              <Box
                className="restaurant-grid"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Box sx={{ width: { xs: "100%", sm: 300 }, mb: 2 }}>
                  <PostCard
                    imageUrl="https://wallpapercave.com/wp/wp8477593.jpg"
                    title="Pollos Hermanos"
                    foodType="Comida Casual • $$"
                  />
                </Box>
                <Box sx={{ width: { xs: "100%", sm: 300 }, mb: 2 }}>
                  <PostCard
                    imageUrl="https://www.offsite.com.cy/sites/default/files/inline-images/8bff651a-7ff2-11ea-a8c7-0a58647e8dae_kfc_group.jpg"
                    title="Kentoky"
                    foodType="Comida Casual • $$"
                  />
                </Box>
              </Box>
            </Box>

            <Box className="recent-uploads">
              <Typography variant="h5">Actualizaciones Recientes</Typography>
              <Box
                className="upload-grid"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Box sx={{ width: { xs: "100%", sm: 300 }, mb: 2 }}>
                  <PostCard
                    imageUrl="https://mochomos.mx/img/galeria/restaurante/mxl1.jpg"
                    title="Mochomos"
                    foodType="Comida Fifi • $$$"
                  />
                </Box>
                <Box sx={{ width: { xs: "100%", sm: 300 }, mb: 2 }}>
                  <PostCard
                    imageUrl="https://www.urbantj.com/wp-content/uploads/2022/07/Tacos-Aaron-5.jpg"
                    title="Tacos Kon Aaron"
                    foodType="Comida Callejera • $"
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            className="trending-restaurants"
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "300px" }, // Ancho máximo para móviles
              margin: { xs: "0 auto", md: "0" }, // Centrar en móviles
            }}
          >
            <Typography variant="h5">Restaurantes en Tendencia</Typography>
            <List>
              {restaurants.map((restaurant, index) => (
                <ListItem key={index}>
                  <ListItemText primary={restaurant} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Home;

