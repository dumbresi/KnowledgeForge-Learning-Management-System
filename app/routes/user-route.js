import express from 'express'
import Instructor from '../models/user.js';
import * as instructorController from '../controllers/user-controller.js';


const router = express.Router();

router.route('/')
    .get(userController.findUser)
    .post(userController.postUser);

export default router;