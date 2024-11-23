import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar/NavBar';
import { Box, Typography, Button, Divider, IconButton, Grid, Paper, TextField } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EditIcon from '@mui/icons-material/Edit';

const RestaurantProfile: React.FC = () => {
  const [loginData, setLoginData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('info'); // Para manejar la pestaña activa
  const [editableData, setEditableData] = useState<any>({}); // Para manejar los datos editables

  useEffect(() => {
    const storedLoginData = localStorage.getItem('loginData');
    if (storedLoginData) {
      const parsedData = JSON.parse(storedLoginData);
      setLoginData(parsedData);
      setEditableData(parsedData); // Inicializar los datos editables
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Guardar los datos editados (puedes agregar lógica para guardar en el servidor o localStorage)
    setLoginData(editableData);
    localStorage.setItem('loginData', JSON.stringify(editableData));
  };

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
      src: 'https://5pfw99y4.cdn.imgeng.in/place/3150/logo/Club-De-Pollos-Pablo-Livas-Guadalupe-Con-Sabores-Locales-By-Reservandonos..png?imgeng=/w_360/f_webp/cmpr_20/width=60/height=60/quality=30/150',
      description: 'Foto de alets123',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkSSzBdldY9PL7TKJ2qjy1w-WzQBwuHbr1w&s/150',
      description: 'Foto de dancam53x',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZV-XSJOGnKbGGBDxZW66D926An1qAdubgHA&s/150',
      description: 'Foto de JuakPacketTracer',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDmZSVRNvxb7WynA_NHjBrnxELDspd3bZnA&s/150',
      description: 'Foto de WilcheZZZZ',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7TT5YUEzwBEI9HNONf6qjYZADlbUWdIY_tCbUf2_fPwAOGixCnmyyAQeM3fLtkNMfRE&usqp=CAU/150',
      description: 'Foto de RubenMonge',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhexqaEcTGv3ZVKrVYYzQ3rvZVJR5Ks93PhVBsQszVwnlgNgC0XWZnxuRepsDqjWVAdk&usqp=CAU/150',
      description: 'Foto de HassanKabande',
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
                <Grid container spacing={2} mb={3}>
                  <Grid item xs={12} md={6}>
                    <Paper 
                      elevation={3} 
                      sx={{ p: 2,
                        transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        borderColor: '#FFEB3B',
                        boxShadow: '0 4px 8px rgba(255, 235, 59, 0.5)',
                      },

                      }}>
                      
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
                        variant="contained"
                        sx={{
                          mt: 2,
                          backgroundColor: '#ffa500',
                          '&:hover': {
                            backgroundColor: '#cc7a00',
                          },
                          textTransform: 'capitalize',
                        }}
                      >
                        Editar
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} 
                      sx={{ p: 2,
                        transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        borderColor: '#FFEB3B',
                        boxShadow: '0 4px 8px rgba(255, 235, 59, 0.5)',
                      }, }}>
                      <Typography variant="h6">Horario</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Ven a visitarnos!
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Lunes - Viernes:</strong> 11am - 9pm
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Sábado - Domingo:</strong> 12pm - 10pm
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          backgroundColor: '#ffa500',
                          '&:hover': {
                            backgroundColor: '#cc7a00',
                          },
                          textTransform: 'capitalize',
                        }}
                      >
                        Editar
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Redes sociales */}
                <Box mb={3}>
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
                          textTransform: 'capitalize',
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#FF0000',
                          '&:hover': {
                            backgroundColor: '#8B0000',
                          },
                          textTransform: 'capitalize',
                        }}
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
                    textTransform: 'capitalize',
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
                            borderColor: '#FFEB3B',
                            boxShadow: '0 4px 8px rgba(255, 235, 59, 0.5)',
                          },
                        }}
                      >
                        <img
                          src={photo.src}
                          alt={`Foto ${index + 1}`}
                          style={{ width: '200px', height: '200px', borderRadius: '8px' }}
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
              <Box display="flex" justifyContent="center">
                <Box>
                  <Typography variant="h6" mb={3}>
                    Ajustes de Usuario
                  </Typography>
                  
                  <Paper elevation={3} sx={{ p: 3, maxWidth: 600 }}>
                    <Box sx={{ mb: 3 }}>
                      <Box display="flex" alignItems="center" mb={3}>
                        {loginData?.pfp ? (
                          <img
                            src={loginData.pfp}
                            alt="Profile"
                            style={{
                              width: '100px',
                              height: '100px',
                              borderRadius: '4px',
                              marginRight: '16px',
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: '100px',
                              height: '100px',
                              backgroundColor: '#f0f0f0',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: '1px solid #ddd',
                            }}
                          >
                            <Typography variant="h3" color="textSecondary">X</Typography>
                          </Box>
                        )}
                        <Button
                          variant="contained"
                          sx={{
                            ml: 2,
                            backgroundColor: '#2294f2',
                            '&:hover': {
                              backgroundColor: '#1877c2',
                            },
                            textTransform: 'capitalize',
                          }}
                          startIcon={<EditIcon />}
                        >
                          Editar info
                        </Button>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="textSecondary" mb={1}>
                          Nombre de usuario
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="name"
                          value={editableData.name || ''}
                          onChange={handleInputChange}
                          sx={{ mb: 2 }}
                        />

                        <Typography variant="subtitle2" color="textSecondary" mb={1}>
                          Email
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={editableData.email || ''}
                          onChange={handleInputChange}
                          sx={{ mb: 2 }}
                        />

                        <Typography variant="subtitle2" color="textSecondary" mb={1}>
                          Teléfono
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          name="phone"
                          value={editableData.phone || ''}
                          onChange={handleInputChange}
                          sx={{ mb: 2 }}
                        />
                      </Box>
                        <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          mt: 2,
                          backgroundColor: '#ffa500',
                          '&:hover': {
                            backgroundColor: '#cc7a00',
                          },
                          textTransform: 'capitalize',
                        }}
                        onClick={handleSave}
                      >
                        Guardar
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              </Box>
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
                  borderColor: '#FFEB3B',
                  boxShadow: '0 4px 8px rgba(255, 235, 59, 0.5)',
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
                  variant="contained"
                  sx={{
                    mt: 1,
                    backgroundColor: '#ffa500',
                    '&:hover': {
                      backgroundColor: '#cc7a00',
                    },
                    textTransform: 'capitalize',
                  }}
                  size="small"
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