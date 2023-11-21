import { response } from 'express';
import * as InstructorService from '../services/instructor-service.js'
import { setResponse, setErrorResponse} from './response-handler.js'

export const findInstructor=async (request, response) =>{
    console.log(request);
    try{
        const searchQuery= {...request.query};
        const instructors = await InstructorService.searchInstructor(searchQuery);
        setResponse(instructors,response);
    }catch(err){
        console.log(err);
        setErrorResponse(err,response);
    }
}

export const postInstructor=async (request, response)=>{
    try{
        const newInstructor = request.body;
        const instructor = await InstructorService.saveInstructor(newInstructor);
        setResponse(instructor, response)
    }catch(err){
        setErrorResponse(err,response);
    }
}

export const putInstructor = async (request, response) => {
    try {
        const instructorId = request.params.id;
        const updatedInstructor = request.body;
        const instructor = await InstructorService.updateInstructor(updatedInstructor, instructorId);
        setResponse(instructor, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const deleteInstructor = async (request, response) => {
    try {
        const instructorId = request.params.id;
        const result = await InstructorService.removeInstructor(instructorId);
        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}