import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const FormWrapper = styled(Paper)({
  backgroundColor: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  padding: '40px',
  width: '90%',
  maxWidth: '400px',
  textAlign: 'center',
});

const Title = styled(Typography)({
  fontFamily: '"Inter", Helvetica',
  fontWeight: 600,
  color: '#000000',
  fontSize: '24px',
  marginBottom: '20px',
});

const InputGroup = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
});

const SubmitButton = styled(Button)({
  backgroundColor: '#2294F2 ',
  color: '#ffffff',
  borderRadius: '5px',
  padding: '10px 20px',
  fontSize: '18px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1877C2 ',
  },
});

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    if (!validatePassword(newPassword)) {
      alert("La contraseña debe tener al menos 8 caracteres, incluir números, mayúsculas y un carácter especial.");
      return;
    }

    const email = localStorage.getItem('recoveryEmail');
    const token = localStorage.getItem('validationToken');

    if (!email || !token) {
      alert("No se encontraron los datos necesarios. Por favor, inténtalo de nuevo.");
      return;
    }

    try {
      const response = await axios.put('http://localhost:3000/api/user/change',
        { email, password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        alert("Contraseña actualizada");
        localStorage.removeItem('recoveryEmail');
        localStorage.removeItem('validationToken');
        navigate('/login');
      }
    } catch (error) {
      console.error("Hubo un error al cambiar la contraseña", error);
      alert("Hubo un error al intentar cambiar la contraseña. Por favor, inténtalo de nuevo.");
    }

    setErrorMessage(null);
  };

  return (
    <StyledContainer maxWidth="xs">
      <FormWrapper>
        <Title variant="h4">Actualizar Contraseña</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <TextField
              label="Nueva Contraseña"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              variant="outlined"
            />
          </InputGroup>
          <InputGroup>
            <TextField
              label="Confirmar Contraseña"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              variant="outlined"
            />
          </InputGroup>
          {errorMessage && (
            <Box mb={2}>
              <Alert severity="error">{errorMessage}</Alert>
            </Box>
          )}
          <SubmitButton type="submit" fullWidth>
            Actualizar
          </SubmitButton>
        </form>
      </FormWrapper>
    </StyledContainer>
  );
};

export default NewPassword;



