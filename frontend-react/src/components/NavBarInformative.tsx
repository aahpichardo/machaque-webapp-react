import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpeg'; // Cambia esta ruta a tu logo

const NavBarInformative: React.FC = () => {
    return (
      <AppBar position="static" sx={{ backgroundColor: '#1877c2', color: '#F9F9F9' }}>
      <Toolbar>
        {/* Logo y Título */}
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="Logo" style={{ width: '50px', marginRight: '10px', borderRadius: '100%' }} />
          <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
            Machaque
          </Typography>
        </Box>

        {/* Botones de Login y Registro */}
        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{
              backgroundColor: '#ffa500',
              color: '#fff',
              marginRight: 2,
              textTransform: 'none', // Para evitar que el texto esté en mayúsculas
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
              padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' },
              '&:hover': {
                backgroundColor: '#CC7A00',
              },
            }}
          >
            Iniciar Sesión
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            sx={{
              backgroundColor: '#FFA500',
              color: '#fff',
              textTransform: 'none', // Para evitar que el texto esté en mayúsculas
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
              padding: { xs: '6px 12px', sm: '8px 16px', md: '10px 20px' },
              '&:hover': {
                backgroundColor: '#CC7A00',
              },
            }}
          >
            Registrarme
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
      );
};

export default NavBarInformative;