import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Asegúrate de importar el hook
import Modal from '../../components/ModalAvisos/ModalAvisos'; // Asegúrate de importar el modal
import './Login.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import LogoApp from '../../assets/logo.jpeg'

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: ""
  });

  const { login } = useAuth(); // Usar el hook de autenticación
  const navigate = useNavigate(); // Hook para redirigir
  const [error, setError] = useState<string | null>(null); // Para manejar errores si es necesario

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Iniciando sesión...");

    try {
      const response = await axios.post("http://localhost:3000/api/login", loginData);
      const token = response.data.token;

      // Decodifica y guarda el token
      const decoded = jwtDecode(token);
      localStorage.setItem('token', token);

      // Lógica de inicio de sesión
      login(); // Actualiza el estado de autenticación
      navigate('/home');
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        alert("El correo o la contraseña son incorrectos."); // Alert para error 401
      } else {
        console.error("Error al iniciar sesión:", error);
        setError("Error al iniciar sesión. Verifique sus credenciales.");
      }
    }
  };

  // Lógica modal
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
      <Card sx={{ width: 500, padding: 4, boxShadow: 4 }}>
        <CardContent>
          {/* Espacio para el logo */}
          <Box textAlign="center" mb={3}>
            <img src={LogoApp} alt="Logo" style={{ width: '100px', height: 'auto', borderRadius: '100%' }} /> {/* Cambia la ruta del logo */}
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            Iniciar sesión
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <TextField
                label="Correo"
                type="email"
                id="email"
                fullWidth
                required
                value={loginData.email}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Contraseña"
                type="password"
                id="password"
                fullWidth
                required
                value={loginData.password}
                onChange={handleInputChange}
                variant="outlined"
              />
            </Box>
            <Box textAlign="center" mb={3}>
              <Link component={RouterLink} to="/password-recovery" color="primary" underline="hover">
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                padding: '12px',
                fontSize: 16,
                fontWeight: 'normal', // Cambiar a 'normal' para evitar mayúsculas
                backgroundColor: '#2294F2', // Color de fondo
                '&:hover': {
                  backgroundColor: '#1877C2', // Color al pasar el mouse
                },
                textTransform: 'none', // Evitar que el texto se transforme a mayúsculas
              }}
            >
              Ingresar
            </Button>
          </form>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 2 }}>
            ¿Nuevo por aquí?{' '}
            <Link component={RouterLink} to="/register" color="primary" underline="hover">
              Regístrate
            </Link>
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1 }}>
            <Button onClick={openModal} sx={{ color: 'primary.main', textDecoration: 'underline' }}>
              Aviso de privacidad
            </Button>
          </Typography>
        </CardContent>
      </Card>
      <Modal 
        title="Aviso de Privacidad" 
        content="En Machaque, estamos comprometidos con la protección de la privacidad y la confidencialidad de la información de nuestros usuarios. Este aviso describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales que usted proporciona al utilizar nuestra plataforma.

        1. Recopilación de Datos. Recopilamos información personal que incluye, pero no se limita a: nombre, dirección de correo electrónico, número de teléfono, y cualquier otro dato que usted ingrese al registrarse o utilizar nuestros servicios.

        2. Uso de la Información. La información personal proporcionada será utilizada únicamente para los fines establecidos en nuestra plataforma, tales como la gestión de su cuenta, la mejora de la experiencia del usuario, y la seguridad de la plataforma.

        3. Confidencialidad y Seguridad. Nos comprometemos a no compartir, vender o alquilar su información personal a terceros sin su consentimiento, salvo en los casos necesarios para cumplir con obligaciones legales o proteger los derechos de la plataforma. Hemos implementado medidas de seguridad para proteger sus datos contra accesos no autorizados, pérdida o modificación.

        4. Derechos del Usuario. Usted tiene el derecho de acceder, rectificar, cancelar u oponerse al uso de sus datos personales. Para ejercer estos derechos, por favor comuníquese con nuestro equipo a través del correo electrónico machaque@app.com.

        5. Modificaciones al Aviso de Privacidad Nos reservamos el derecho de actualizar este aviso en cualquier momento. Cualquier modificación será publicada en nuestra plataforma.

        Fecha de última actualización: 25/septiembre/2024" 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </Box>
  );
};

export default Login;