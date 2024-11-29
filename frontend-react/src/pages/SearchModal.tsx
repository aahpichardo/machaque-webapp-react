import React from 'react';
import { Modal, Box, Typography, TextField, Button, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Restaurant {
  id: number;
  imageUrl: string;
  title: string;
  distance: string;
  type: string;
  rating: number;
  description: string;
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    imageUrl: 'http://4.bp.blogspot.com/-80rOigfQBUY/T2POOghXCKI/AAAAAAAAAg4/_N_xY-CNsY4/s1600/DSC_1516.JPG',
    title: 'El Farolito',
    distance: '2 km',
    type: 'Cafeteria',
    rating: 4.5,
    description: 'El farolito es un café del cual puedes disfrutar a la par de una gran vista de la ciudad de Chihuahua.',
  },
  {
    id: 2,
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2022%2F11%2FEl-Pollo-Loco-Logo-1997.png&f=1&nofb=1&ipt=a423b07077d7976187f138f2c27aeac7bc8f500064f5d4b6d0286e645b6c57de&ipo=images',
    title: 'Pollo Loco',
    distance: '5 km',
    type: 'Gourmet',
    rating: 4.8,
    description: 'Un pollollon de sabor, ven y disfruta de la mejor comida de pollo en la ciudad.',
  },
  {
    id: 3,
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstreamlinedesigns.com%2Fwp-content%2Fuploads%2F2021%2F03%2Fsun-roll-food-truck.jpg&f=1&nofb=1&ipt=34128b8312a2a835326631cd5746e5bcc9bbfb28c6856a07200239909d3a8ea6&ipo=images',
    title: 'Sun roll',
    distance: '1 km',
    type: 'Buffet',
    rating: 4.2,
    description: 'El mejor buffet de sushi de la ciudad.',
  },
  {
    id: 4,
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2021%2F07%2Fdominos-pizza-logo-0.png&f=1&nofb=1&ipt=ae12971cb19192cb2d66347a47f0a1db3abf49947e5d2bb5c576cffbd12277bb&ipo=images',
    title: 'Dominos',
    distance: '3 km',
    type: 'Pizzeria',
    rating: 4.0,
    description: 'Ven y aprovecha nuestras nuevas promociones.',
  },
];

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '80%',
  bgcolor: '#F9F9F9',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  borderRadius: 4,
  '@media (max-width: 600px)': {
    width: '95%',
    height: '90%',
  },
  '@media (max-width: 960px)': {
    width: '95%',
    height: '85%',
  },
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
};

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropProps={{
        style: {
          backdropFilter: 'blur(5px)', // Aplicar desenfoque
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo con transparencia
        },
      }}
    >
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Busqueda de restaurante
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar"
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
          <Button variant="outlined" sx={{ textTransform: 'none', color: '#333', borderColor: '#FFA500', '&:hover': { color: '#333', borderColor: '#CC7A00' } }}>Precios</Button>
          <Button variant="outlined" sx={{ textTransform: 'none', color: '#333', borderColor: '#FFA500', '&:hover': { color: '#333', borderColor: '#CC7A00' } }}>Cercanos</Button>
          <Button variant="outlined" sx={{ textTransform: 'none', color: '#333', borderColor: '#FFA500', '&:hover': { color: '#333', borderColor: '#CC7A00' } }}>Mejor calificación</Button>
          <Button variant="outlined" sx={{ textTransform: 'none', color: '#333', borderColor: '#FFA500', '&:hover': { color: '#333', borderColor: '#CC7A00' } }}>Promociones</Button>
          <Button variant="outlined" sx={{ textTransform: 'none', color: '#333', borderColor: '#FFA500', '&:hover': { color: '#333', borderColor: '#CC7A00' } }}>Buffets</Button>
          <Button variant="outlined" sx={{ textTransform: 'none', color: '#333', borderColor: '#FFA500', '&:hover': { color: '#333', borderColor: '#CC7A00' } }}>Abiertos 24h</Button>
        </Box>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} sx={{ display: 'flex', mb: 2, borderRadius: 4, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
            <CardMedia
              component="img"
              sx={{ width: 200, borderRadius: '4px 0 0 4px' }}
              image={restaurant.imageUrl}
              alt={restaurant.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ color: '#333' }}>
                  {restaurant.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.distance} • {restaurant.type} • {restaurant.rating} ★
                </Typography>
                <Typography variant="body1" component="div" sx={{ mt: 1, color: '#333' }}>
                  {restaurant.description}
                </Typography>
                <Button variant="contained" sx={{ mt: 2, textTransform: 'none', backgroundColor: '#FFA500', '&:hover': { backgroundColor: '#CC7A00' } }}>
                  Visitar ya
                </Button>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Modal>
  );
}

export default SearchModal;