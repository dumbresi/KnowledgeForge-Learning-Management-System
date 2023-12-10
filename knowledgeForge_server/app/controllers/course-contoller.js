import { response } from 'express';
import * as CourseService from '../services/course-service.js';
import { setResponse, setErrorResponse} from './response-handler.js';
import multer from "multer";
import Course from '../models/course.js';


const storage = multer.memoryStorage();
const uploadImage = multer({ storage: storage });
export const findCourse=async (request, response) =>{
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
        uploadImage.single('image') (req, res,async (error)=>{
            // Assuming 'imageName' is sent in the request body
            if (error) {
                setErrorResponse(error, response);
                return;
              }
              // Extract image data and content type
              const imageData = req.file.buffer;
              const {
                title,
                description,
                instructor,
                category,
                duration,
                fees,
                subCategory,
                noOfModules,
                creationTime,
                avg_star_rating
                // Add more fields as needed
              } = request.body;
          
              // Create a new Image document with additional fields and save it to MongoDB
              const newCourse = new Course({
                title,
                description,
                instructor,
                category,
                duration,
                fees,
                subCategory,
                noOfModules,
                creationTime,
                avg_star_rating,
                thumbnail: imageData,
                
              });
              const course = await CourseService.saveCourse(newCourse);
              setResponse(course, response)
        });
        
        
        
    }catch(err){
        setErrorResponse(err,response);
    }
}

export const updateCourse=async(request,response)=>{
    try{
        const updatedCourse=request.params.body;
        const updatedCourseId=request.params._id;
        const modifiedCourse= await CourseService.updateCourse(updatedCourse,updatedCourseId);
        setResponse(modifiedCourse,response);
    }catch{
        setErrorResponse(err,response);
    }
}

export const deleteCourse= async(request,response)=>{
    try{
        const courseId=request.params._id;
        const removedCourse=await CourseService.removeCourse(courseId);
        setResponse(removedCourse,response);
    }catch(err){
        setErrorResponse(err,response);
    }
}