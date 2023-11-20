import express from 'express'
import Courses from '../models/course.js';
import * as courseController from '../controllers/course-contoller.js';


const router = express.Router();

router.route('/')
    .get(courseController.findCourse);
    // .post(courseController.postCourse);

export default router;