import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#E0E0E0',
        color: '#333',
        py: 3,
        textAlign: 'center',
        borderTop: '1px solid #F9F9F9',
      }}
    >
      <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
        © 2024 Yorchiza. Todos los derechos reservados.
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link
          href="#"
          sx={{
            color: '#333',
          }}
        >
          <FacebookIcon />
        </Link>
        <Link
          href="#"
          sx={{
            color: '#333',
          }}
        >
          <TwitterIcon />
        </Link>
        <Link
          href="#"
          sx={{
            color: '#333',
          }}
        >
          <InstagramIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;


