import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '../../components/ModalAvisos/ModalAvisos';
import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material';

const Register: React.FC = () => {
  const [isModalOpenPrivacy, setModalOpenPrivacy] = useState(false);
  const [isModalOpenTerms, setModalOpenTerms] = useState(false);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [userData, setUserData] = useState({
    user_name: '',
    user_last_name: '',
    email: '',
    password: '',
    restaurant_name: '',
    user_type: 'consumidor',
    created_at: new Date().toISOString().split('T')[0],
    last_login: new Date().toISOString().split('T')[0],
    fk_user_role: 1,
    fk_endorsement_id: 1,
    user_status: 1,
  });

  const navigate = useNavigate();

  const openModalPrivacy = () => setModalOpenPrivacy(true);
  const closeModalPrivacy = () => setModalOpenPrivacy(false);

  const openModalTerms = () => setModalOpenTerms(true);
  const closeModalTerms = () => setModalOpenTerms(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      user_type: value,
      restaurant_name: value === 'restaurante' ? prevState.restaurant_name : '',
    }));
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword(userData.password)) {
      alert("La contraseña debe tener al menos 8 caracteres, incluir un número, una letra mayúscula y un carácter especial.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/user/new", userData);
      if (response.status === 200) {
        alert('Usuario creado exitosamente');
        navigate('/login');
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert("Ocurrió un error. Por favor, intente de nuevo.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 2, width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>Registro</Typography>
        
        <FormControl component="fieldset" sx={{ mb: 2, width: '100%' }}>
          <FormLabel component="legend">Tipo de usuario</FormLabel>
          <RadioGroup row value={userData.user_type} onChange={handleUserTypeChange} sx={{ justifyContent: 'center' }}>
            <FormControlLabel value="consumidor" control={<Radio />} label="Consumidor" />
            <FormControlLabel value="restaurante" control={<Radio />} label="Restaurante" />
          </RadioGroup>
        </FormControl>

        {userData.user_type === 'restaurante' && (
          <TextField
            fullWidth
            label="Nombre del Restaurante"
            id="restaurant_name"
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        )}

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre"
                id="user_name"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Apellido"
                id="user_last_name"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Correo"
                id="email"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Contraseña"
                id="password"
                required
                onChange={handleChange}
              />
              <Typography variant="body2" color="textSecondary">
                Mínimo 8 caracteres, que incluya números, mayúsculas y un carácter especial
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Confirmar contraseña"
                id="confirm-password"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptedPrivacy}
                    onChange={() => setAcceptedPrivacy(!acceptedPrivacy)}
                  />
                }
                label={
                  <Typography variant="body2">
                    He leído y acepto el{' '}
                    <Button
                      onClick={openModalPrivacy}
                      variant="text"
                      color="primary"
                      sx={{ textTransform: 'none' }}
                    >
                      aviso de privacidad
                    </Button>
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptedTerms}
                    onChange={() => setAcceptedTerms(!acceptedTerms)}
                  />
                }
                label={
                  <Typography variant="body2">
                    He leído y acepto los{' '}
                    <Button
                      onClick={openModalTerms}
                      variant="text"
                      color="primary"
                      sx={{ textTransform: 'none' }}
                    >
                      términos y condiciones
                    </Button>
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!acceptedPrivacy || !acceptedTerms}
                sx={{
                  padding: '12px',
                  fontSize: 16,
                  fontWeight: 'normal',
                  backgroundColor: '#2294F2',
                  '&:hover': {
                    backgroundColor: '#1877C2',
                  },
                  textTransform: 'none',
                }}
              >
                Registrarme
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </Typography>
        </Box>

        <Modal
          title="Aviso de Privacidad"
          content="En Machaque, estamos comprometidos con la protección de la privacidad y la confidencialidad de la información de nuestros usuarios. Este aviso describe cómo recopilamos, usamos, almacenamos y protegemos los datos personales que usted proporciona al utilizar nuestra plataforma.

1. Recopilación de Datos. Recopilamos información personal que incluye, pero no se limita a: nombre, dirección de correo electrónico, número de teléfono, y cualquier otro dato que usted ingrese al registrarse o utilizar nuestros servicios.

2. Uso de la Información. La información personal proporcionada será utilizada únicamente para los fines establecidos en nuestra plataforma, tales como la gestión de su cuenta, la mejora de la experiencia del usuario, y la seguridad de la plataforma.

3. Confidencialidad y Seguridad. Nos comprometemos a no compartir, vender o alquilar su información personal a terceros sin su consentimiento, salvo en los casos necesarios para cumplir con obligaciones legales o proteger los derechos de la plataforma. Hemos implementado medidas de seguridad para proteger sus datos contra accesos no autorizados, pérdida o modificación.

4. Derechos del Usuario. Usted tiene el derecho de acceder, rectificar, cancelar u oponerse al uso de sus datos personales. Para ejercer estos derechos, por favor comuníquese con nuestro equipo a través del correo electrónico machaque@app.com.

5. Modificaciones al Aviso de Privacidad. Nos reservamos el derecho de actualizar este aviso en cualquier momento. Le informaremos sobre cambios significativos en la manera en que tratamos su información personal.

Al registrarse en nuestra plataforma, usted acepta los términos de este aviso de privacidad."
          isOpen={isModalOpenPrivacy}
          onClose={closeModalPrivacy}
        />
        
        <Modal
          title="Términos y Condiciones"
          content="Al registrarse en Machaque, usted acepta los siguientes términos y condiciones. Por favor, lea cuidadosamente antes de continuar.

1. Uso del Servicio. Machaque es una plataforma destinada a facilitar la interacción entre consumidores y restaurantes. Al registrarse, usted acepta utilizar el servicio de manera legal y respetuosa.

2. Registro. Para utilizar nuestra plataforma, usted debe proporcionar información precisa y actualizada. Es su responsabilidad mantener la confidencialidad de su cuenta y notificar cualquier uso no autorizado.

3. Responsabilidad. Machaque no se hace responsable por el contenido publicado por los usuarios ni por las transacciones realizadas entre ellos. Sin embargo, tomaremos medidas para garantizar la seguridad y privacidad de nuestros usuarios.

4. Cambios en el Servicio. Machaque se reserva el derecho de modificar o interrumpir el servicio en cualquier momento, sin previo aviso. 

5. Ley Aplicable. Estos términos se rigen por las leyes del país donde opera Machaque. Cualquier controversia será resuelta en los tribunales correspondientes.

Al registrarse, usted acepta estos términos y condiciones."
          isOpen={isModalOpenTerms}
          onClose={closeModalTerms}
        />
      </Box>
    </Container>
  );
};

export default Register;