import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// FUNCION PARA GENERAR EL TOKEN DE AUTENTICACIÓN CON ID Y EMAIL DEL USUARIO
export const generateToken = (user) => {
  const payload = {
    id: user.id };

  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '12h', // El token expirará en 12 horas
  };

  return jwt.sign(payload, secret, options);
};