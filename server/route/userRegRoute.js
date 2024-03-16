import express from 'express';
import { userDetails, userLogIn, userRegister } from '../controller/userController.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogIn);
router.post('/add-details', userDetails);

export default router;