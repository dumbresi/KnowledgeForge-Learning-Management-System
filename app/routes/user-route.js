import express from 'express';
import User from '../models/user.js';
import * as userController from '../controllers/user-controller.js';


const router = express.Router();

router.route('/')
    .get(userController.findUser)
    .post(userController.postUser);

router.route('/:id')
    .put(userController.putUser)
    .delete(userController.deleteUser);
    
export default router;