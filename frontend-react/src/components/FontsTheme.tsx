import { createTheme } from '@mui/material/styles';

// Crear el tema personalizado
const theme = createTheme({
  typography: {
    // Fuente por defecto (para texto general)
    fontFamily: 'Roboto, Arial, sans-serif',
    // Variantes específicas
    h1: { fontFamily: 'Lato, Arial, sans-serif' },
    h2: { fontFamily: 'Lato, Arial, sans-serif' },
    h3: { fontFamily: 'Lato, Arial, sans-serif' },
    h4: { fontFamily: 'Lato, Arial, sans-serif' },
    h5: { fontFamily: 'Lato, Arial, sans-serif' },
    body1: { fontFamily: 'Roboto, Arial, sans-serif' },
    body2: { fontFamily: 'Roboto, Arial, sans-serif' },
  },
});

export default theme;

