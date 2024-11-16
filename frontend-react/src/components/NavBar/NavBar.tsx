import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.jpeg';
import SearchModal from '../../pages/SearchModal';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [profileRoute, setProfileRoute] = useState('/profile'); // Ruta por defecto

  useEffect(() => {
    const loginData = localStorage.getItem('loginData');
    if (loginData) {
      const parsedData = JSON.parse(loginData);
      if (parsedData.type === 'user') {
        setProfileRoute('/user-profile');
      } else if (parsedData.type === 'restaurant') {
        setProfileRoute('/restaurant-profile');
      }
    }
  }, []);

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    logout();
    localStorage.removeItem('token');
    navigate('/login');
    alert("Sesión cerrada exitosamente");
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/notifications">
          <ListItemText primary="Notificaciones" />
        </ListItem>
        <ListItem button component={Link} to="/messages">
          <ListItemText primary="Mensajes" />
        </ListItem>
        <ListItem button component={Link} to={profileRoute}>
          <ListItemText primary="Perfil" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemText primary="Cerrar sesión" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Machaque
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/home" sx={{ textTransform: 'none' }}>Inicio</Button>
          <Button color="inherit" component={Link} to="/notifications" sx={{ textTransform: 'none' }}>Notificaciones</Button>
          <Button color="inherit" component={Link} to="/messages" sx={{ textTransform: 'none' }}>Mensajes</Button>
          <Button color="inherit" component={Link} to={profileRoute} sx={{ textTransform: 'none' }}>Perfil</Button>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Search sx={{ display: { xs: 'none', sm: 'block' } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'search' }}
            onClick={handleOpenSearchModal}
          />
        </Search>
        <IconButton color="inherit" onClick={handleLogout} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
      <SearchModal open={isSearchModalOpen} onClose={handleCloseSearchModal} />
    </AppBar>
  );
};

export default Navbar;




