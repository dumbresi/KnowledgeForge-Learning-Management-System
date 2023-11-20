import express from 'express'
import Instructor from '../models/instructor.js';
import * as instructorController from '../controllers/instructor-controller.js';


const router = express.Router();

router.route('/')
    .get(instructorController.findInstructor)
    .post(instructorController.postInstructor);

export default router;