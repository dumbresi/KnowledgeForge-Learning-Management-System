import Course from '../models/course.js';
import Instructor from '../models/instructor.js';
import mongoose from 'mongoose';


export const searchInstructor = async (params = {}) => {
    const instructors = await Instructor.find(params).exec();
    return instructors;
}

export const saveInstructor = async (newInstructor) => {
    
    const instructor = new Instructor(newInstructor);
    
    return await instructor.save().catch((err)=>{
      console.log(err.toString());
    });
}

export const updateInstructor = async (updatedInstructor, email) => {
    const instructor = await Instructor.findOneAndUpdate({email:email},updatedInstructor,{returnOriginal:false});
    return instructor;
}

export const removeInstructor = async (id) => {
    return await Instructor.findByIdAndDelete(id).exec();
}
export const getOneInsrtuctor = async(email)=>{
    const result= await Instructor.aggregate([
        {
            $match: {
              email: email,
            },
          },
          {
            $project: {
              name: 1, 
              email: 1,    
              contactNum: 1,  
              university: 1,
              _id: 0,   

            },
          },
    ]);
    console.log(result);
    return result[0];
}
export const getCourses = async(email)=>{

    const result= await Instructor.aggregate([
        {
            $match: {
              email: email,
            },
          },
          {
            $lookup:{
                from: "courses",
              localField: "myCourses",
              foreignField: "_id",
              as: "courses"
            }
          },
          {
            $project: {
              courses:1,
              _id: 0,      

            },
          },
    ]);
    return result[0];
}
export const addCourse = async (email,courseId) => {
  // Using the 'findByIdAndDelete' method to delete the instructor
  return await Instructor.findOneAndUpdate({email:email},{$push:{myCourses:new mongoose.Types.ObjectId(courseId)}},{returnOriginal:false});
}