import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import Navbar from '../components/NavBar/NavBar';

interface Notification {
  id: number;
  date: string;
  imageUrl: string;
  reason: string;
  restaurantName: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    date: '12/10/2023',
    imageUrl: 'https://bestofmidlandtx.com/wp-content/uploads/2023/03/cerveceria19-background-768x512.jpeg',
    reason: 'Ha actualizado su menú con nuevos productos',
    restaurantName: 'Cervecería 19',
  },
  {
    id: 2,
    date: '13/10/2023',
    imageUrl: 'https://img.freepik.com/premium-vector/hotdog-logo-mascot-design-hotdog-sandwich-logo-design_1594-607.jpg?w=2000',
    reason: 'Ha iniciado una nueva serie de promociones',
    restaurantName: 'Mackdogo',
  },
  // Agrega más notificaciones según sea necesario
];

const Notifications: React.FC = () => {
  const [readNotifications, setReadNotifications] = useState<number[]>([]);

  const handleMarkAsRead = (id: number) => {
    setReadNotifications((prev) => [...prev, id]);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Card sx={{ width: '80%', p: 2 }}>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            Notificaciones recientes
          </Typography>
          {notifications.map((notification) => (
            <Card key={notification.id} sx={{ display: 'flex', mb: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={notification.imageUrl}
                alt="Notificación"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {notification.restaurantName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {notification.reason}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {notification.date}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: readNotifications.includes(notification.id) ? '#A5A95C' : '#FFA500',
                      '&:hover': {
                        backgroundColor: readNotifications.includes(notification.id) ? '#797c30' : '#CC7A00',
                      },
                      textTransform: 'none',
                      transition: 'background-color 0.3s, color 0.3s',
                    }}
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    {readNotifications.includes(notification.id) ? 'Leído' : 'Marcar como leído'}
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Card>
      </Box>
    </>
  );
};

export default Notifications;