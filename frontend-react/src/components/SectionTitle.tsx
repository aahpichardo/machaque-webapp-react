
import { Box, Typography, Divider } from '@mui/material';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Box sx={{ textAlign: 'center', margin: 4 }}>
      {/* Título Grande */}
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
        {title} {/* Título desde el prop */}
      </Typography>

      {/* Otro separador (opcional) */}
      <Divider sx={{ marginTop: 2, backgroundColor: '#FFA500', height: 2 }} />
    </Box>
  );
};

export default SectionTitle;
