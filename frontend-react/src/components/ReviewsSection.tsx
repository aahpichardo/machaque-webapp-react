import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, LinearProgress, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const reviews = [
  {
    text: "La comida de Machaque es increíble. ¡Definitivamente volveré!",
    author: "Ana G.",
  },
  {
    text: "Un servicio excelente y una variedad de platillos que nunca pensé encontrar.",
    author: "Carlos M.",
  },
  {
    text: "Machaque ha cambiado la forma en que descubro restaurantes en Chihuahua. ¡Gracias!",
    author: "Lucía R.",
  },
];

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 15000; // Duración total en milisegundos

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + (100 / (duration / 100)) : 0));
    }, 100); // Aumentar el progreso cada 100ms

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setProgress(0); // Reiniciar progreso al cambiar de reseña
    }, duration);

    return () => clearTimeout(timer);
  }, [activeIndex, duration]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    setProgress(0); // Reiniciar progreso al cambiar de reseña
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    setProgress(0); // Reiniciar progreso al cambiar de reseña
  };

  return (
    <Box sx={{ textAlign: 'center', margin: 4 }}>
      <Box sx={{ maxWidth: { xs: '90%', sm: '600px' }, margin: '0 auto', position: 'relative' }}>
        <Card
          sx={{
            padding: 2,
            margin: 2,
            boxShadow: 3,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '200px', // Tamaño fijo para las tarjetas
            backgroundColor: '#f5f5f5',
            position: 'relative',
          }}
        >
          <CardContent>
            <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
              "{reviews[activeIndex].text}"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              - {reviews[activeIndex].author}
            </Typography>
          </CardContent>

          {/* Barra de progreso */}
          <LinearProgress
            sx={{
              position: 'absolute',
              bottom: 16, // Posición ajustada para estar dentro de la tarjeta
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%', // Tamaño ajustado
              height: '8px',
              borderRadius: '5px', // Bordes redondeados
              backgroundColor: '#ccc', // Color gris para la barra
            }}
            variant="determinate"
            value={progress}
          />
        </Card>

        {/* Botones de navegación */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            color: 'black',
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            color: 'black',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ReviewSection;


