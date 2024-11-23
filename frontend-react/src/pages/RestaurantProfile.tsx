import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar/NavBar';
import { Box, Typography, Button, Divider, IconButton, Grid, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const RestaurantProfile: React.FC = () => {
  const [loginData, setLoginData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('info'); // Para manejar la pestaña activa

  useEffect(() => {
    const storedLoginData = localStorage.getItem('loginData');
    if (storedLoginData) {
      setLoginData(JSON.parse(storedLoginData));
    }
  }, []);

  const menuItems = [
    {
      name: 'Classic Taco',
      price: 3.5,
      description: 'Carne al pastor, lechuga, costra de queso.',
      promoPrice: 2.99,
    },
    {
      name: 'Burrito Supreme',
      price: 8.99,
      description: 'Cualquier carne, lechuga, costra de queso.',
      promoPrice: null,
    },
  ];

  const photos = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpK-Tf9ZtIQ4slq3ZpWTnUhr9s94zPOiV25w&s/100',
      description: 'Foto del platillo 1',
    },
    {
      src: 'https://via.placeholder.com/100',
      description: 'Foto del platillo 2',
    },
    {
      src: 'https://via.placeholder.com/100',
      description: 'Foto del platillo 3',
    },
    {
      src: 'https://via.placeholder.com/100',
      description: 'Foto del platillo 4',
    },
    {
      src: 'https://via.placeholder.com/100',
      description: 'Foto del platillo 5',
    },
    {
      src: 'https://via.placeholder.com/100',
      description: 'Foto del platillo 6',
    },
  ];

  return (
    <>
      <Navbar />
      <Box p={3}>
        {loginData ? (
          <>
            <Box display="flex" alignItems="center" mb={3}>
              {loginData.pfp ? (
                <img
                  src={loginData.pfp}
                  alt="Restaurant Profile"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    marginRight: '16px',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#ccc',
                    borderRadius: '50%',
                    marginRight: '16px',
                  }}
                />
              )}

              <Box>
                <Typography variant="h5">{loginData.name || 'Nombre del Restaurante'}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {loginData.type || 'Tipo de comida'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ⭐ {loginData.rating || '4.8'}
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              borderBottom="2px solid #e0e0e0"
              mb={3}
              sx={{ overflowX: 'auto' }}
            >
              {['info', 'menu', 'reviews', 'photos', 'settings'].map((tab) => (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  sx={{
                    color: activeTab === tab ? '#1976d2' : '#757575',
                    borderBottom: activeTab === tab ? '2px solid #1976d2' : 'none',
                    textTransform: 'capitalize',
                    fontWeight: activeTab === tab ? 'bold' : 'normal',
                    borderRadius: 0,
                    px: 2,
                  }}
                >
                  {tab === 'info'
                    ? 'Info'
                    : tab === 'menu'
                    ? 'Menú'
                    : tab === 'reviews'
                    ? 'Reseñas'
                    : tab === 'photos'
                    ? 'Fotografías'
                    : 'Ajustes'}
                </Button>
              ))}
            </Box>

            {activeTab === 'info' && (
              <>
                {/* Sección de Info */}
                <Box mb={3}>
                  <Typography variant="h6">Información</Typography>
                  <Typography variant="body2" color="textSecondary" mb={1}>
                    {loginData.description ||
                      'Auténtica comida callejera mexicana sobre ruedas. Llevamos los sabores de México a tu barrio.'}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Dirección:</strong>{' '}
                    {loginData.address || 'Calle #45 Col. Granjas Chihuahua Chih.'}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Teléfono:</strong> {loginData.phone || '+52 614-256-45-23'}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Email:</strong> {loginData.email || 'taco_fiesta@email.com'}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      color: '#ffa500',
                      borderColor: '#ffa500',
                      '&:hover': {
                        backgroundColor: '#cc7a00',
                        borderColor: '#cc7a00',
                        color: 'white',
                      },
                    }}
                  >
                    Editar
                  </Button>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Horario */}
                <Box mb={3}>
                  <Typography variant="h6">Horario</Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Lunes - Viernes:</strong> 11am - 9pm
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Sábado - Domingo:</strong> 12pm - 10pm
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      color: '#ffa500',
                      borderColor: '#ffa500',
                      '&:hover': {
                        backgroundColor: '#cc7a00',
                        borderColor: '#cc7a00',
                        color: 'white',
                      },
                    }}
                  >
                    Editar
                  </Button>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Redes sociales */}
                <Box>
                  <Typography variant="h6">Redes Sociales</Typography>
                  <Box display="flex" gap={2} mt={2}>
                    <IconButton sx={{ color: '#E1306C' }}> {/* Instagram (Rosa) */}
                      <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#1DA1F2' }}> {/* Twitter (Azul) */}
                      <TwitterIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#1877F2' }}> {/* Facebook (Azul oscuro) */}
                      <FacebookIcon />
                    </IconButton>
                  </Box>
                </Box>
              </>
            )}
            {activeTab === 'menu' && (
              <Box>
                <Typography variant="h6" mb={2}>
                  Menú
                </Typography>
                {menuItems.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                    p={2}
                    border="1px solid #e0e0e0"
                    borderRadius="8px"
                  >
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.description}
                      </Typography>
                      <Typography variant="body1" color="primary">
                        ${item.price.toFixed(2)}
                      </Typography>
                      {item.promoPrice && (
                        <Typography variant="body2" color="secondary">
                          Promoción: ${item.promoPrice.toFixed(2)}
                        </Typography>
                      )}
                    </Box>
                    <Box display="flex" gap={1}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#ffa500',
                          '&:hover': {
                            backgroundColor: '#cc7a00',
                          },
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                      >
                        Borrar
                      </Button>
                    </Box>
                  </Box>
                ))}
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: '#ffa500',
                    '&:hover': {
                      backgroundColor: '#cc7a00',
                    },
                  }}
                >
                  Agregar nuevo platillo
                </Button>
              </Box>
            )}
            
            {activeTab === 'photos' && (
              <Box>
                <Typography variant="h6" mb={2}>
                  Fotografías
                </Typography>
                <Grid container spacing={2}>
                  {photos.map((photo, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
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
                        <img
                          src={photo.src}
                          alt={`Foto ${index + 1}`}
                          style={{ width: '95px', height: '95px', borderRadius: '8px' }}
                        />
                        <Typography variant="body2" color="textSecondary" mt={1}>
                          {photo.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
            {activeTab === 'settings' && (
              <Typography variant="h6">Aquí se mostrarán los ajustes del restaurante.</Typography>
            )}
          </>
        ) : (
          <Typography>Cargando datos del restaurante...</Typography>
        )}
      </Box>
      {activeTab === 'reviews' && (
        <Box p={3} mt={-3}>
          <Typography variant="h6" mb={2}>
            Reseñas
          </Typography>
          {[
            {
              date: '20/08/2024',
              name: 'John D.',
              review: 'Los mejores tacos de la ciudad! La salsa es asombrosa.',
              rating: 5,
            },
            {
              date: '19/08/2024',
              name: 'Sarah M.',
              review:
                'Buena comida, pero la espera puede ser larga en horas pico.',
              rating: 4.2,
            },
          ].map((review, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              p={2}
              border="1px solid #e0e0e0"
              borderRadius="8px"
              sx={{
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Box>
                <Typography variant="body2" color="textSecondary">
                  {review.date}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {review.review}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body2" fontWeight="bold">
                  ⭐ {review.rating}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{
                    mt: 1,
                    color: '#ffa500',
                    borderColor: '#ffa500',
                    '&:hover': {
                      backgroundColor: '#cc7a00',
                      borderColor: '#cc7a00',
                      color: 'white',
                    },
                  }}
                >
                  Compartir/Confirmar
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default RestaurantProfile;