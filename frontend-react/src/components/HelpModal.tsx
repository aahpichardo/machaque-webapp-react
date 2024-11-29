import React, { useState } from "react";
import { Modal, Backdrop, Fade, TextField, Button, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const HelpModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          backgroundColor: "#FFA500",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#CC7A00",
          },
        }}
      >
        Ponerme en contacto
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backdropFilter: "blur(3px)" },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: '90%', sm: 400 }, // Ajuste de ancho responsivo
              bgcolor: "background.paper",
              borderRadius: 4,
              boxShadow: 24,
              p: { xs: 2, sm: 4 }, // Ajuste de padding responsivo
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Contacto</Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <form noValidate autoComplete="off">
              <TextField
                required
                fullWidth
                margin="normal"
                id="name"
                label="Nombre"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                margin="normal"
                id="email"
                label="Correo Electrónico"
                variant="outlined"
                type="email"
              />
              <TextField
                required
                fullWidth
                margin="normal"
                id="message"
                label="Mensaje"
                variant="outlined"
                multiline
                rows={4}
              />
              <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                El tiempo de respuesta aproximado puede ser desde 24 a 48 horas.
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#FFA500",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#CC7A00",
                  },
                  textTransform: 'none' // Evitar que el texto se transforme a mayúsculas
                }}
              >
                Enviar
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default HelpModal;