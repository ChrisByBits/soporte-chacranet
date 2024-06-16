import express from 'express';
import { createTicket, getTickets } from '../controllers/tickets.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create', auth, createTicket);
router.get('/', auth, getTickets);

export default router;