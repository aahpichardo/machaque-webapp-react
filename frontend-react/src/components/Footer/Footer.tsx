import React from 'react';
import './Footer.css'; // Asegúrate de crear este archivo CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 Yorchiza. Todos los derechos reservados.</p>
        <div className="social-icons">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
