import React, { useState } from "react";
import { Modal, Backdrop, Fade, TextField, Button, Box } from "@mui/material";

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
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Contacto</h2>
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