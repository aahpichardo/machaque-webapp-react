import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Card, CardContent, Divider, LinearProgress } from '@mui/material';

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

  return (
    <Box sx={{ textAlign: 'center', margin: 4 }}>
      <Typography variant="h4" gutterBottom>
        ¿Qué dicen nuestros usuarios?
      </Typography>

      <Divider sx={{ marginBottom: 2, backgroundColor: '#FFA500', height: 2 }} />

      <Box sx={{ maxWidth: { xs: '90%', sm: '600px' }, margin: '0 auto', position: 'relative' }}>
        <Carousel
          index={activeIndex}
          onChange={(index) => setActiveIndex(index)}
          interval={duration} // Puedes establecerlo en 0 para no usar el intervalo de carrusel
          indicators={false} // Eliminar círculos
          navButtonsAlwaysVisible // Asegurar que los botones de navegación sean visibles
        >
          {reviews.map((review, index) => (
            <Card
              key={index}
              sx={{
                padding: 2,
                margin: 2,
                boxShadow: 3,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '200px', // Tamaño fijo para las tarjetas
              }}
            >
              <CardContent>
                <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                  "{review.text}"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  - {review.author}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
        
        {/* Barra de progreso */}
        <LinearProgress
          sx={{
            position: 'absolute',
            bottom: -5, // Posición ajustada para estar justo debajo de la tarjeta
            left: 0,
            right: 0,
            height: '5px',
            backgroundColor: '#ccc', // Color gris para la barra
          }}
          variant="determinate"
          value={progress}
        />
      </Box>
    </Box>
  );
};

export default ReviewSection;


