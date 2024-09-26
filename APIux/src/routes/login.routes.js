import { Router } from "express";
import { checkUserInDatabase } from "../controllers/users.controllers.js";
import { generateToken } from '../middlewares/generateToken.js';

const router = Router();

router.post('/login', async (req, res) => {
  const {email, password } = req.body;

  // LLAMADA A LA FUNCIÓN QUE VERIFICA QUE EL USUARIO EXISTA EN LA BASE DE DATOS
  const result = await checkUserInDatabase(email, password);

  if (result.status !== 200) {
    return res.status(result.status).json({ error: result.message });
  }

  // LLAMADA A LA FUNCIÓN QUE GENERA EL TOKEN
  const token = generateToken(result.user);

  // ENVÍO DEL TOKEN COMO RESPUESTA
  res.status(200).json({token, user: result.user});
});

export default router;