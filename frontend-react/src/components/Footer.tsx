import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Logo from '../assets/logo.jpeg'; // Cambia esta ruta a tu logo

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f9d56e', padding: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {/* Logo y Nombre */}
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Logo" style={{ width: '40px', marginRight: '10px', borderRadius: '100%' }} />
          <Typography variant="h6">Machaque</Typography>
        </Box>

        {/* Enlaces a la derecha */}
        <Box display="flex" gap={2}>
          <Link href="/sobre-nosotros" color="inherit" underline="hover">Sobre nosotros</Link>
          <Link href="/contacto" color="inherit" underline="hover">Contacto</Link>
          <Link href="/politica-de-privacidad" color="inherit" underline="hover">Política de privacidad</Link>
          <Link href="/terminos-y-condiciones" color="inherit" underline="hover">Términos y condiciones</Link>
        </Box>
      </Box>

      {/* Aviso de Derechos de Autor */}
      <Box textAlign="center" marginTop={2}>
        <Typography variant="body2" color="textSecondary">
          © 2024 Machaque. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
