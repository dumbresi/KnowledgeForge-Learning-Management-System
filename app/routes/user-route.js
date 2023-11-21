import express from 'express';
import User from '../models/user.js';
import * as userController from '../controllers/user-controller.js';


const router = express.Router();

router.route('/')
    .get(userController.findUser)
    .post(userController.postUser);

export default router;