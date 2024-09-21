import { Router } from "express";
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { 
    postDataUser,

} from "../controllers/users.controllers.js";

const router = Router();

// GET DATA USER POR ID DE USUARIO
router.post("/data/user", authMiddleware, postDataUser);

export default router;