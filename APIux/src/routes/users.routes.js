import { Router } from "express";
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { 
    postNewUser,
    postRecoverPassword, 
    postValidateCode,
    putChangePassword
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

export default router;