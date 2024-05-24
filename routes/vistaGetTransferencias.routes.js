import express from 'express';
import { getTransferencias } from '../controller/transaccionesHandler.js'; 

const router = express.Router();

router.get('/', getTransferencias )

export default router;