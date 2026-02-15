import express from 'express';
import {authMiddleware} from '../middleware/authmiddleware.js';
import {getUserProfile} from '../Controllers/userController.js';
const router= express.Router();

router.get('/profile', authMiddleware, getUserProfile);

export default router;