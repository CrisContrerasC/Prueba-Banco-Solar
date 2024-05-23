import express from 'express';
import { putUsuario } from '../controller/usuariosHandler.js';

const router = express.Router();

router.put('/:id', putUsuario )

export default router;