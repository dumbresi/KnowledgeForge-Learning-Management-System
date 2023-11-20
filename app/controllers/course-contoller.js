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
        setErrorResponse(err,reponse);
    }
}

export const postCourse=async (request, reponse)=>{
    try{
        const newCourse = request.body;
        const course = await CourseService.saveCourse(newCourse);
        setResponse(course, reponse)
    }catch(err){
        setErrorResponse(err,reponse);
    }
}