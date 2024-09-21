import { Router } from "express";
import { checkUserInDatabase } from "../controllers/users.controllers.js";
import { generateToken } from '../middlewares/generateToken.js';

const router = Router();

router.post('/login', async (req, res) => {
  const { id_usuario, correo } = req.body;

  // LLAMADA A LA FUNCIÓN QUE VERIFICA QUE EL USUARIO EXISTA EN LA BASE DE DATOS
  const user = await checkUserInDatabase(id_usuario, correo);
  if (!user) {
    return res.status(401).json({ error: 'Credenciales invalidas.' });
  }

  // LLAMADA A LA FUNCIÓN QUE GENERA EL TOKEN
  const token = generateToken(user);

  // ENVÍO DEL TOKEN COMO RESPUESTA
  res.json({ token });
});

export default router;