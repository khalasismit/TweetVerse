import express from 'express';
import { verifyToken } from '../middleware/verifyToken';
const { register, login } = require('../controllers/auth');
const router = express.Router();

router.post('/register',verifyToken,register);
router.post('/login',verifyToken,login);

export default router;