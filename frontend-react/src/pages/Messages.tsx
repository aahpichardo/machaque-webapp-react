import React, { useState } from 'react';
import Navbar from '../components/NavBar/NavBar';
import { Box, List, ListItemText, Typography, Divider, ListItemButton, TextField, Button, Paper, useMediaQuery, useTheme, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'response';
  timestamp: string;
};

type Conversation = {
  id: number;
  name: string;
  lastMessage: string;
  messages: Message[];
};

const conversations: Conversation[] = [
  {
    id: 1,
    name: 'Tortas toxicas',
    lastMessage: 'Sí, tenemos varias opciones disponibles.',
    messages: [
      { id: 1, text: 'Hola, ¿tiene reservaciones disponibles?', sender: 'user', timestamp: '10:00 AM' },
      { id: 2, text: 'Sí, tenemos varias opciones disponibles.', sender: 'response', timestamp: '10:01 AM' },
    ],
  },
  {
    id: 2,
    name: 'C19',
    lastMessage: '¿Estamos abiertos de 9am a 9pm.',
    messages: [
      { id: 1, text: '¿Qué horario tiene?', sender: 'user', timestamp: '11:00 AM' },
      { id: 2, text: 'Estamos abiertos de 9am a 9pm.', sender: 'response', timestamp: '11:01 AM' },
    ],
  },
  {
    id: 3,
    name: 'Wilches',
    lastMessage: '¡Pase a pagar, por favor!',
    messages: [
      { id: 1, text: '¡Pase a pagar, por favor!', sender: 'user', timestamp: '12:00 PM' },
      { id: 2, text: 'Voy en camino.', sender: 'response', timestamp: '12:01 PM' },
    ],
  },
];

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [message, setMessage] = useState<string>('');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const handleSendMessage = () => {
    if (selectedConversation && message.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
      };
      setSelectedConversation({
        ...selectedConversation,
        messages: [...selectedConversation.messages, newMessage],
      });
      setMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="center" p={2} bgcolor="grey.200" height="calc(100vh - 64px)">
        <Paper elevation={3} sx={{ width: '100%', maxWidth: '1200px', height: '90%', display: 'flex', flexDirection: 'column' }}>
          <Box display="flex" height="100%" flexDirection={isMobile ? 'column' : 'row'}>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ alignSelf: 'flex-start', m: 2 }}>
                <MenuIcon />
              </IconButton>
            )}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <Box
                width={250}
                bgcolor="grey.100"
                p={2}
                sx={{ overflowY: 'auto' }}
              >
                <Typography variant="h6" gutterBottom>
                  Conversaciones
                </Typography>
                <List>
                  {conversations.map((conversation) => (
                    <ListItemButton
                      key={conversation.id}
                      onClick={() => handleSelectConversation(conversation)}
                      selected={selectedConversation?.id === conversation.id}
                    >
                      <ListItemText
                        primary={conversation.name}
                        secondary={conversation.lastMessage}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
            {!isMobile && (
              <Box
                width="30%"
                bgcolor="grey.100"
                p={2}
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                sx={{ overflowY: 'auto' }}
              >
                <Typography variant="h6" gutterBottom>
                  Conversaciones
                </Typography>
                <List>
                  {conversations.map((conversation) => (
                    <ListItemButton
                      key={conversation.id}
                      onClick={() => handleSelectConversation(conversation)}
                      selected={selectedConversation?.id === conversation.id}
                    >
                      <ListItemText
                        primary={conversation.name}
                        secondary={conversation.lastMessage}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            )}

            <Box display="flex" flexDirection="column" flex={1} sx={{ position: 'relative' }}>
              {selectedConversation ? (
                <>
                  <Typography variant="h6" p={2}>{selectedConversation.name}</Typography>
                  <Divider />
                  <Box flex={1} sx={{ overflowY: 'auto', p: 2, pb: '70px' }}>
                    {selectedConversation.messages.map((msg) => (
                      <Box
                        key={msg.id}
                        display="flex"
                        justifyContent={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                        mb={2}
                      >
                        <Paper
                          elevation={1}
                          sx={{
                            p: 2,
                            maxWidth: '60%',
                            bgcolor: msg.sender === 'user' ? '#A5A95C' : '#F9D56E',
                          }}
                        >
                          <Typography variant="body1">{msg.text}</Typography>
                          <Typography variant="caption" display="block" align="right">
                            {msg.timestamp}
                          </Typography>
                        </Paper>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    display="flex"
                    p={2}
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'background.paper',
                      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Escribe un mensaje..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ textTransform: "none" }}>
                      Enviar
                    </Button>
                  </Box>
                </>
              ) : (
                <Typography variant="body1" color="textSecondary" p={2}>
                  Selecciona una conversación para ver los mensajes.
                </Typography>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Messages;