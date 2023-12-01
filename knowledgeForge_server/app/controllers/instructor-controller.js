// Importing necessary modules and functions
import { response } from 'express';
import * as InstructorService from '../services/instructor-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

// Find instructors controller
export const findInstructor = async (request, response) => {
    try {
        // Extract search parameters from the request
        const searchQuery = { ...request.query };

        // Call service to find instructors
        const instructors = await InstructorService.searchInstructor(searchQuery);

        // Set response using helper function
        setResponse(instructors, response);
    } catch (err) {
        // Log and set error response
        console.log(err);
        setErrorResponse(err, response);
    }
};

// Create new instructor controller
export const postInstructor = async (request, response) => {
    try {
        // Extract new instructor data from the request body
        const newInstructor = request.body;

        // Call service to save new instructor
        const instructor = await InstructorService.saveInstructor(newInstructor);

        // Set response using helper function
        setResponse(instructor, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};

// Update existing instructor controller
export const putInstructor = async (request, response) => {
    try {
        // Extract instructor ID and updated data from the request
        const instructorId = request.params.id;
        const updatedInstructor = request.body;

        // Call service to update instructor
        const instructor = await InstructorService.updateInstructor(updatedInstructor, instructorId);

        // Set response using helper function
        setResponse(instructor, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};

// Delete existing instructor controller
export const deleteInstructor = async (request, response) => {
    try {
        // Extract instructor ID from the request
        const instructorId = request.params.id;

        // Call service to remove instructor
        const result = await InstructorService.removeInstructor(instructorId);

        // Set response using helper function
        setResponse(result, response);
    } catch (err) {
        // Set error response
        setErrorResponse(err, response);
    }
};