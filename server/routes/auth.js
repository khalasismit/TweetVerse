import express from 'express';
// import { verifyToken } from '../middleware/verifyToken';
import { register,login } from '../controllers/auth.js';
// const { register, login } = require('../controllers/auth');
const router = express.Router();

router.post('/register',register);
router.post('/login',login);

export default router;