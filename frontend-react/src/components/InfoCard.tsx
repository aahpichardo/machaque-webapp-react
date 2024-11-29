import { Card, CardContent, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface InfoCardProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
  iconColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description, iconColor = '#FFA500' }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s', // Añadir transición
        '&:hover': {
          transform: 'scale(1.05)', // Efecto de zoom
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Sombra más intensa
        },
      }}
    >
      <CardContent>
        {/* Icono en la parte superior */}
        <Icon sx={{ fontSize: 40, color: iconColor }} />
        {/* Título */}
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {/* Descripción */}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;


