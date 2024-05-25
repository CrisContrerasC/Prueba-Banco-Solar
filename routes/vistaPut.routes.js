import express from 'express';
import { putUsuario } from '../controller/usuariosHandler.js';

const router = express.Router();

router.put('/', putUsuario )

export default router;