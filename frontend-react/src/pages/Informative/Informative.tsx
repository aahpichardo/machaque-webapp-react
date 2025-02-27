import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Informative.css"; // Asegúrate de tener el archivo CSS para estilos
import Navbar from "../../components/NavBarInformative";
import Footer from "../../components/Footer";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import imagen1 from "../../assets/img1.jpg";
import imagen2 from "../../assets/img2.jpg";
import imagen3 from "../../assets/img3.jpg";
import InfoCard from "../../components/InfoCard";
import { AccessAlarm, ThreeDRotation, LocalDining, AccountCircle, Group, Star } from "@mui/icons-material"; // Importa los iconos que desees
import SectionTitle from "../../components/SectionTitle";
import ReviewsSection from "../../components/ReviewsSection";
import HelpModal from "../../components/HelpModal";

function Informative(){
  //imagenes para el header
  const items = [{ img: imagen1 }, { img: imagen2 }, { img: imagen3 }];

  const [open, setOpen] = useState(false);

  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />

      {/*Header*/}
      <Box sx={{ position: "relative", height: { xs: "50vh", sm: "60vh", md: "70vh" }, overflow: "hidden" }}>
      <Carousel>
        {items.map((item, index) => (
          <Box
            key={index}
            component="img"
            src={item.img}
            alt={`Image ${index + 1}`}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </Carousel>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#FFFFFF",
          bgcolor: "rgba(77, 77, 77, 0.6)", // Fondo semitransparente para mejorar la legibilidad
          padding: { xs: 2, sm: 3 },
          zIndex: 1, // Asegura que esté por encima de las imágenes
          backdropFilter: "blur(5px)", // Desenfoque de fondo
          width: { xs: "90%", sm: "80%", md: "60%" },
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2.5rem" } }}>
          Únete a la comunidad de amantes de la comida más grande del estado de Chihuahua!
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" } }}>
          Encuentra, valora y disfruta de la mejor comida de restaurantes locales en Chihuahua
        </Typography>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          sx={{
            backgroundColor: "#FFA500",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#CC7A00",
            },
            mt: 2,
            textTransform: "none", // Elimina la transformación a mayúsculas
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
            padding: { xs: "6px 12px", sm: "8px 16px", md: "10px 20px" },
          }}
        >
          Quiero ser parte
        </Button>
      </Box>
    </Box>

      {/*contenido */}

      <SectionTitle title="¿Por qué ser parte de Machaque?" />

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
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

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <InfoCard
          icon={AccountCircle}
          title="Crea una cuenta"
          description="Encuentra la comida más rápida y deliciosa en tu área."
          iconColor="#FF5733" // Cambia el color del icono
        />
        <InfoCard
          icon={Group}
          title="Ingresa a la comunidad"
          description="Descubre nuevos restaurantes o promociona el tuyo"
          iconColor="#4285F4" // Cambia el color del icono
        />
        <InfoCard
          icon={Star}
          title="Puntua o se puntuado"
          description="Disfruta de una amplia variedad de restaurantes y estilos culinarios."
          iconColor="#34A853" // Cambia el color del icono
        />
      </div>

      {/*reviews*/}

      <SectionTitle title="¿Qué dicen nuestros usuarios?" />
      <ReviewsSection />

      {/*final*/}

      <Box
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          bgcolor: "#333", // Fondo semitransparente para mejorar la legibilidad
          padding: 3,
          backdropFilter: "blur(5px)", // Desenfoque de fondo
          marginTop: 4, // Espaciado superior
          marginBottom: 2, // Espaciado inferior para separación del footer
        }}
      >
        <Typography variant="h4" gutterBottom>
          ¿Necesitas ayuda o tuviste algún problema en la aplicación?
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ponte en contacto con nosotros vía correo electrónico
        </Typography>

        <HelpModal open={open} handleClose={handleClose} />
      </Box>

      <Footer />
    </>
  );
};

export default Informative;
