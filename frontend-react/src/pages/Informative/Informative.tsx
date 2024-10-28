import React from 'react';
import { Link } from 'react-router-dom';
import './Informative.css'; // Asegúrate de tener el archivo CSS para estilos
import Navbar from '../../components/NavBarInformative'
import Footer from '../../components/Footer'
import Carousel from 'react-material-ui-carousel';
import { Box, Card, Typography, Button, Divider, CardContent } from '@mui/material';
import imagen1 from '../../assets/img1.jpg';
import imagen2 from '../../assets/img2.jpg';
import imagen3 from '../../assets/img3.jpg';
import InfoCard from '../../components/InfoCard';
import { AccessAlarm, ThreeDRotation, LocalDining } from '@mui/icons-material'; // Importa los iconos que desees
import SectionTitle from '../../components/SectionTitle';
import ReviewsSection from '../../components/ReviewsSection'


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

      <SectionTitle title="¿Por qué ser parte de Machaque?" />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <InfoCard 
        icon={AccessAlarm} 
        title="Rápido y Eficiente" 
        description="Encuentra la comida más rápida y deliciosa en tu área."
        iconColor="#FF5733" // Cambia el color del icono
      />
      <InfoCard 
        icon={ThreeDRotation} 
        title="Innovación" 
        description="Descubre platos innovadores de los mejores chefs locales."
        iconColor="#4285F4" // Cambia el color del icono
      />
      <InfoCard 
        icon={LocalDining} 
        title="Variedad" 
        description="Disfruta de una amplia variedad de restaurantes y estilos culinarios."
        iconColor="#34A853" // Cambia el color del icono
      />
    </div>

    <SectionTitle title="¿Cómo funciona?" />

    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <InfoCard 
        icon={AccessAlarm} 
        title="Rápido y Eficiente" 
        description="Encuentra la comida más rápida y deliciosa en tu área."
        iconColor="#FF5733" // Cambia el color del icono
      />
      <InfoCard 
        icon={ThreeDRotation} 
        title="Innovación" 
        description="Descubre platos innovadores de los mejores chefs locales."
        iconColor="#4285F4" // Cambia el color del icono
      />
      <InfoCard 
        icon={LocalDining} 
        title="Variedad" 
        description="Disfruta de una amplia variedad de restaurantes y estilos culinarios."
        iconColor="#34A853" // Cambia el color del icono
      />
    </div>

    {/*reviews*/}
    <ReviewsSection/>

    {/*final*/}

    <Box
  sx={{
    textAlign: 'center',
    color: '#FFFFFF',
    bgcolor: '#333', // Fondo semitransparente para mejorar la legibilidad
    padding: 3,
    backdropFilter: 'blur(5px)', // Desenfoque de fondo
    marginTop: 4, // Espaciado superior
    marginBottom: 2, // Espaciado inferior para separación del footer
  }}
>
  <Typography variant="h4" gutterBottom>
    ¿Listo para descrubir la mejor comida en el estado?
  </Typography>
  <Typography variant="h6" gutterBottom>
    ¡Unete a nuestra gran comunidad!
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
    Registrarme ahora
  </Button>
</Box>
    

      <Footer/>
    </>
  );
};

export default UserProfile;