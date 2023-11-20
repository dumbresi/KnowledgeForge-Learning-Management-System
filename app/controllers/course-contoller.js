import { response } from 'express';
import * as CourseService from '../services/course-service.js'
import { setResponse, setErrorResponse} from './response-handler.js'

export const findCourse=async (request, response) =>{
    console.log(request);
    try{
        const searchQuery= {...request.query};
        const courses = await CourseService.searchCourse(searchQuery);
         setResponse(courses,response);
    }catch(err){
        console.log(err);
        setErrorResponse(err,response);
    }
}

export const postCourse=async (request, response)=>{
    try{
        const newCourse = request.body;
        const course = await CourseService.saveCourse(newCourse);
        setResponse(course, response)
    }catch(err){
        setErrorResponse(err,response);
    }
}