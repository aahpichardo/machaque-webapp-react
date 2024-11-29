import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

interface SponsorCardProps {
  name: string;
  image: string;
  description: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, image, description }) => {
  return (
    <Card className="restaurant-card" sx={{ width: '100%', maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={`Imagen de ${name}`}
        height="200"
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Ir al restaurante
        </Button>
      </CardActions>
    </Card>
  );
};

export default SponsorCard;
