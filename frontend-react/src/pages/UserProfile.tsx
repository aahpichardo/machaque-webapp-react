import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar/NavBar';
import {
  Box,
  Avatar,
  Typography,
  Tab,
  Tabs,
  Divider,
  Grid,
  IconButton,
  Button,
  Paper,
} from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const UserProfile: React.FC = () => {
  const [loginData, setLoginData] = useState<any>(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // Obtener loginData del localStorage
    const storedLoginData = localStorage.getItem('loginData');
    if (storedLoginData) {
      setLoginData(JSON.parse(storedLoginData));
    }
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Box p={3}>
        {/* Encabezado del perfil */}
        <Box display="flex" alignItems="center" mb={3}>
          {/* Foto de perfil */}
          <Avatar
            src={loginData?.pfp || ''}
            alt="User Profile"
            sx={{ width: 100, height: 100, mr: 2 }}
          />
          {/* Información básica */}
          <Box>
            <Typography variant="h5">
              {loginData?.name || 'Nombre de usuario'}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              @{loginData?.username || 'alets123'}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {loginData?.location || 'Chihuahua, México'}
            </Typography>
          </Box>
        </Box>

        {/* Tabs para Info, Favoritos, Reseñas, Actividad */}
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Info" />
          <Tab label="Favoritos" />
          <Tab label="Reseñas" />
          <Tab label="Actividad" />
        </Tabs>
        <Divider sx={{ my: 2 }} />

        {/* Contenido de cada sección */}
        <Box>
          {tabValue === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Presentación
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={3}>
                {loginData?.bio ||
                  'Amante de comer en la calle y salir con mis amigues.'}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        borderColor: '#FFEB3B',
                        boxShadow: '0 4px 8px rgba(255, 235, 59, 0.5)',
                      },
                    }}
                  >
                    <Typography variant="body2">
                      <strong>Teléfono:</strong> {loginData?.phone || '+52-614-637-8497'}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Email:</strong> {loginData?.email || 'emily.johnson@email.com'}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Miembro desde:</strong> {loginData?.memberSince || 'January 2020'}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        borderColor: '#FFEB3B',
                        boxShadow: '0 4px 8px rgba(255, 235, 59, 0.5)',
                      },
                    }}
                  >
                    <Typography variant="body2">
                      <strong>Comidas favoritas:</strong> {loginData?.favorites || 'Tacos, Sushi'}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Preferencias dietéticas:</strong> {loginData?.diet || 'Variada'}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Insignias:</strong> {loginData?.badges || 'Top Reviewer'}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              {/* Redes sociales */}
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                  Redes Sociales
                </Typography>
                <Box display="flex" gap={2}>
                  <IconButton
                    href="https://facebook.com/emilyjohnson"
                    target="_blank"
                    rel="noopener"
                  >
                    <Facebook sx={{ color: '#4267B2' }} />
                  </IconButton>
                  <IconButton
                    href="https://instagram.com/foodie_emily"
                    target="_blank"
                    rel="noopener"
                  >
                    <Instagram sx={{ color: '#E1306C' }} />
                  </IconButton>
                  <IconButton
                    href="https://twitter.com/foodie_emily"
                    target="_blank"
                    rel="noopener"
                  >
                    <Twitter sx={{ color: '#1DA1F2' }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          )}
          {tabValue === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Favoritos
              </Typography>
              <Grid container spacing={3}>
                {[
                  { name: 'La Hamburguesada', email: 'hamburguesada@example.com', phone: '+52-614-847-8988', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOMO2Nc3rgzS0TS5Imyww74bTDbO8hPZAkg&s/80' },
                  { name: 'B-A Tacos y más', email: 'tacosymas@example.com', phone: '+52-614-847-8988', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMp3fzdS6Wvi14g_qsGumiRcC4CvZbbZuhA&s/80' },
                  { name: 'Tortas el Taz', email: 'tortaseltaz@example.com', phone: '+52-614-847-3091', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi3wBfXl2eqDHOTG8C_J5nbHuXhMK82wfyQ&s/80' },
                  { name: 'Los 3 Dioses', email: 'tresdioses@example.com', phone: '+52-614-347-8988', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLkvGbnD2ZB7J_S4ctc2KSx5VXChQKSGt3A&s/80' },
                  { name: 'Restaurante el Yiorch', email: 'yiorch@example.com', phone: '+52-614-337-3898', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5U5ZWzfhpSMAgOlhApIznoGEEy9tYNlSow&s/80' }
                ].map((fav, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          borderColor: '#FFEB3B',
                          boxShadow: '0 4px 8px rgba(255, 235, 59, 0.5)',
                        },
                      }}
                    >
                      <Avatar
                        src={fav.image}
                        alt={fav.name}
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 2,
                          bgcolor: '#f0f0f0',
                        }}
                      />
                      <Typography variant="subtitle1" fontWeight="bold">
                        {fav.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {fav.email}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {fav.phone}
                      </Typography>
                      {/* Botón para enviar mensaje */}
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{
                          mt: 2,
                          backgroundColor: '#FFA500',
                          '&:hover': {
                            backgroundColor: '#CC7A00',
                          },
                        }}
                      >
                        Enviar mensaje
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {tabValue === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Reseñas
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    date: '20/08/2024',
                    place: 'La Hamburguesada',
                    review: 'Los mejores tacos de la ciudad. ¡La salsa es asombrosa!',
                    rating: 5,
                  },
                  {
                    date: '19/08/2024',
                    place: 'Restaurante el Yiorch',
                    review: 'Buena comida, pero la espera puede ser larga y algunas veces pica.',
                    rating: 4.2,
                  },
                ].map((review, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {review.place}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {review.date}
                      </Typography>
                      <Typography variant="body1" mb={2}>
                        {review.review}
                      </Typography>
                      <Box display="flex" justifyContent="center">
                        <Typography variant="body2">
                          {'⭐'.repeat(Math.floor(review.rating))} {review.rating}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {tabValue === 3 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Actividad
              </Typography>
              <Box>
                {[
                  { date: '20/08/2024', place: 'La Hamburguesada', status: 'Asistencia confirmada' },
                  { date: '19/08/2024', place: 'Restaurante el Yiorch', status: 'Asistencia confirmada' },
                  { date: '19/08/2024', place: 'Villa - Tacos y más', status: 'Asistencia confirmada' },
                ].map((activity, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                      p: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <Typography variant="body1">
                      <strong>{activity.date}</strong> - {activity.place}
                    </Typography>
                    <Typography
                      variant="body2"
                      color={activity.status === 'Asistencia confirmada' ? 'primary' : 'secondary'}
                    >
                      {activity.status}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;