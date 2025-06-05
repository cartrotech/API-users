import express, { Router } from 'express';
import { login, getMe } from '../controllers/authController';
import { authenticate } from '../middlewares/auth';

const router: Router = express.Router();

router.post('/login', login);
router.get('/me', authenticate, getMe);

export default router;