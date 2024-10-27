import React from 'react';
import { Link } from 'react-router-dom';
import './Informative.css'; // Asegúrate de tener el archivo CSS para estilos
import Navbar from '../../components/NavBarInformative'
import Footer from '../../components/Footer'
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Button } from '@mui/material';
import imagen1 from '../../assets/img1.jpg';
import imagen2 from '../../assets/img2.jpg';
import imagen3 from '../../assets/img3.jpg';


const UserProfile: React.FC = () => {
  //imagenes para el header
  const items = [
    { img: imagen1 },
    { img: imagen2 },
    { img: imagen3 },
  ];

  return (
    <>
      <Navbar/>

    {/*Header*/}
      <Box sx={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        <Carousel>
          {items.map((item, index) => (
            <Box
              key={index}
              component="img"
              src={item.img}
              alt={`Image ${index + 1}`}
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          ))}
        </Carousel>

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#FFFFFF',
            bgcolor: 'rgba(77, 77,77, 0.3)', // Fondo semitransparente para mejorar la legibilidad
            padding: 3,
            zIndex: 1, // Asegura que esté por encima de las imágenes
            backdropFilter: 'blur(5px)', // Desenfoque de fondo
          }}
        >
          <Typography variant="h4" gutterBottom>
            Únete a la comunidad de amantes de la comida más grande del estado de Chihuahua!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Encuentra, valora y disfruta de la mejor comida de restaurantes locales en Chihuahua
          </Typography>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{
              backgroundColor: '#FFA500',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#CC7A00',
              },
              mt: 2,
              textTransform: 'none', // Elimina la transformación a mayúsculas
            }}
          >
            Quiero ser parte
          </Button>
        </Box>
      </Box>

      {/*contenido */}
      <div><span>¿Porque ser parte de machaque?</span></div>

      
      <Footer/>
    </>
  );
};

export default UserProfile;