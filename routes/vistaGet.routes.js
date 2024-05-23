import express from 'express';
import { getUsuarios } from '../controller/usuariosHandler.js'; 

const router = express.Router();

router.get('/', getUsuarios )

export default router;