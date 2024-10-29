import { Router } from "express";
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { 
    postNewUser,
    postRecoverPassword, 
    postValidateCode,
    putChangePassword,
    postSendMessage,
    postGetMessages
} from "../controllers/users.controllers.js";

const router = Router();

// POST REGISTRO DE USUARIO
router.post("/user/new", postNewUser);

// POST RECUPERAR CONTRASEÑA
router.post("/user/recover", postRecoverPassword);

// POST VALIDAR CÓDIGO DE RECUPERACIÓN
router.post("/user/validate", postValidateCode);

// PUT CAMBIAR CONTRASEÑA
router.put("/user/change", authMiddleware, putChangePassword);

// POST ENVIAR MENSAJE
router.post("/user/send/messages", authMiddleware, postSendMessage);

// GET MENSAJES
router.post("/user/get/messages", authMiddleware, postGetMessages);

export default router;