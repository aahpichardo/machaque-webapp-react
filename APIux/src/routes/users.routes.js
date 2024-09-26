import { Router } from "express";
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { 
    postNewUser
    // postDataUser,
} from "../controllers/users.controllers.js";

const router = Router();

// POST REGISTRO DE USUARIO
router.post("/user/new", postNewUser);

// GET DATA USER POR ID DE USUARIO
// router.post("/data/user", authMiddleware, postDataUser);

export default router;