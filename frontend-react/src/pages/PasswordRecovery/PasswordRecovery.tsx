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
  Paper
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

const SubmitButton = styled(Button)({
  backgroundColor: '#2294F2',
  color: '#ffffff',
  borderRadius: '5px',
  padding: '10px 20px',
  fontSize: '18px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1877C2',
  },
});

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/user/recover', { email });
      if (response.status === 200) {
        const { code } = response.data;
        alert(`Correcto, el código enviado es: ${code}`);
        localStorage.setItem('recoveryEmail', email);
        navigate('/password-recovery-token');
      }
    } catch (error) {
      console.error("Hubo un error al enviar la solicitud", error);
      setError("Hubo un error al intentar enviar el correo. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <FormWrapper>
        <Title variant="h4">Recuperar Correo</Title>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Ingresa tu Correo Electrónico"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                style: { fontSize: '16px', borderRadius: '5px' },
              }}
              InputLabelProps={{
                style: { fontFamily: '"Inter", Helvetica', color: '#333333' },
              }}
            />
          </Box>
          {error && (
            <Box mb={2}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
          <SubmitButton type="submit" fullWidth>
            Enviar
          </SubmitButton>
        </form>
      </FormWrapper>
    </StyledContainer>
  );
};

export default PasswordRecovery;





