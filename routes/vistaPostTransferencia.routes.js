import express from 'express';
import {postTransferencia} from '../controller/transaccionesHandler.js';

const router = express.Router();

router.post('/', postTransferencia)

export default router;