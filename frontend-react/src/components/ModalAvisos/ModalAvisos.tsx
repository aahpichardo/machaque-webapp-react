import React from 'react';
import './ModalAvisos.css'; // Importa el archivo de estilos

interface ModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null; // No renderiza nada si el modal no está abierto

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="close-button" onClick={onClose} aria-label="Cerrar modal">&times;</button>
        </div>
        <div className="modal-body">
          <p className="modal-text">{content}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
