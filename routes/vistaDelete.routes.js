import express from 'express';
import { deleteUsuario } from '../controller/usuariosHandler.js';

const router = express.Router();

router.delete('/', deleteUsuario )

export default router;