import React, { useState } from "react";
import { Modal, Backdrop, Fade, TextField, Button, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const ModalNewPost: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
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
        Añadir nueva publicación
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Nueva Publicación</Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <form noValidate autoComplete="off">
              <TextField
                required
                fullWidth
                margin="normal"
                id="post-content"
                label="¿Qué estás pensando?"
                variant="outlined"
                multiline
                rows={4}
              />
              <Box display="flex" justifyContent="space-around" sx={{ mt: 2 }}>
                <IconButton>
                  <PhotoCameraIcon color="action" fontSize="large" />
                </IconButton>
                <IconButton>
                  <PersonAddIcon color="action" fontSize="large" />
                </IconButton>
              </Box>
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                sx={{ mt: 2 }}
              >
                Puedes subir fotos o etiquetar personas para personalizar tu publicación.
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
                  textTransform: "none",
                }}
              >
                Publicar
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalNewPost;
