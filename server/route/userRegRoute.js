import express from 'express';
import { userLogIn, userRegister } from '../controller/userController.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogIn);

export default router;