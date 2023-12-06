// Importing the express module
import express from 'express';

// Importing the 'Instructor' model from the models directory
import Instructor from '../models/instructor.js';

// Importing controller functions from the instructor controller module
import * as instructorController from '../controllers/instructor-controller.js';

// Creating an express Router instance
const router = express.Router();

// Define routes for handling instructor data
router.route('/')
    .get(instructorController.findInstructor) // GET request to retrieve instructor data
    .post(instructorController.postInstructor); // POST request to create a new instructor

router.route('/:id')
    .put(instructorController.putInstructor) // PUT request to update an existing instructor
    .delete(instructorController.deleteInstructor); // DELETE request to remove an existing instructor
router.route('/current')
    .get(instructorController.getOneInsrtuctor);
// Exporting the router for use in other files
export default router;
