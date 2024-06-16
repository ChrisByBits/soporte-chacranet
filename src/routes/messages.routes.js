import express from 'express';
import upload from '../middlewares/upload.middleware.js';
import { sendMessage, getMessages } from '../controllers/messages.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/send', auth, upload.single('file'), sendMessage);
router.get('/get/:ticket_id', auth, getMessages);

export default router;