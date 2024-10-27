import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="modal-title">
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <IconButton
          aria-label="Cerrar modal"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" sx={{ color: '#333', textAlign: 'justify', whiteSpace: 'pre-line' }}>
          {content}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;

