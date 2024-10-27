import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpeg'; // Cambia esta ruta a tu logo


const NavBarInformative: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#2294F2', color: '#F9F9F9' }}>
        <Toolbar>
          {/* Logo y Título */}
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="Logo" style={{ width: '50px', marginRight: '10px', borderRadius: '100%' }} />
            <Typography variant="h6" component="div">
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
                backgroundColor: '#FFA500',
                color: '#fff',
                marginRight: 2,
                textTransform: 'none', // Para evitar que el texto esté en mayúsculas
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