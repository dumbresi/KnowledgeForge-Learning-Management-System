// Importing necessary modules and functions
import { response } from 'express';
import * as InstructorService from '../services/instructor-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';
import jwt from 'jsonwebtoken';
import { updateCourse } from './course-contoller.js';


export const findInstructor = async (request, response) => {
    try {
        const searchQuery = { ...request.query };

        const instructors = await InstructorService.searchInstructor(searchQuery);

        setResponse(instructors, response);
    } catch (err) {
        console.log(err);
        setErrorResponse(err, response);
    }
};

export const postInstructor = async (request, response) => {
    try {
        const newInstructor = request.body;

        const instructor = await InstructorService.saveInstructor(newInstructor);

        setResponse(instructor, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
};


export const putInstructor = async (request, response) => {
    const token = request.cookies.token;
    
    if (!token) {
        return response.status(401).json({ message: 'Unauthorized' });
      }
    try {
        
        const updatedInstructor = request.body;
        
        const instructor = jwt.verify(token, 'secret123');
        
        const result = await InstructorService.updateInstructor(updatedInstructor, instructor.email);

        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
};


export const deleteInstructor = async (request, response) => {
    try {
        const instructorId = request.params.id;

        const result = await InstructorService.removeInstructor(instructorId);

        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
};

export const getOneInsrtuctor = async (request, response) => {
    const token = request.cookies.token;
    
        if (!token) {
            return response.status(401).json({ message: 'Unauthorized' });
          }
    try {
        const instructor = jwt.verify(token, 'secret123');
        
        const result = await InstructorService.getOneInsrtuctor(instructor.email);
        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const getInstructorCourses = async (request, response) => {
    const token = request.cookies.token;
    
        if (!token) {
            return response.status(401).json({ message: 'Unauthorized' });
          }
    try {
        const instructor = jwt.verify(token, 'secret123');
        
        const result = await InstructorService.getCourses(instructor.email);
        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}
export const addCourseToInstructor = async (request, response) => {
    const token = request.cookies.token;
    const courseId = request.params.id;
        if (!token) {
            return response.status(401).json({ message: 'Unauthorized' });
          }
    try {
        const instructor = jwt.verify(token, 'secret123');
        
        const result = await InstructorService.addCourse(instructor.email,courseId);
        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

