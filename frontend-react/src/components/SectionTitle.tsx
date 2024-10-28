import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return (
    <Box sx={{ textAlign: 'center', margin: 4 }}>
      {/* Separador */}
      <Divider sx={{ marginBottom: 2, backgroundColor: '#FFA500', height: 2 }} />

      {/* Título Grande */}
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
        {title} {/* Título desde el prop */}
      </Typography>

      {/* Otro separador (opcional) */}
      <Divider sx={{ marginTop: 2, backgroundColor: '#FFA500', height: 2 }} />
    </Box>
  );
};

// PropTypes para validar las props del componente
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired, // Asegura que el título sea una cadena
};

export default SectionTitle;
