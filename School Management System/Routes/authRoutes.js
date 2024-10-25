import express from 'express';
import { Router } from 'express';
import authController from '../Controllers/authController.js';

const { login, logout } = authController;

const router = Router()
router.post('/login/admin',authController.login('admin'));
router.post('/login/teacher',authController.login('teacher'));
router.post('/login/student',authController.login('student'));
router.get('/logout',authController.logout);

export default router;