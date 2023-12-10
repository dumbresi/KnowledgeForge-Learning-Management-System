import Course from '../models/course.js'
import multer from "multer";
const storage = multer.memoryStorage();
const uploadImage = multer({ storage: storage });
export const searchCourse = async (params={}) => {
    const courses=await  Course.find(params).exec();
    console.log(courses);
    return courses;
}

export const saveCourse = async (newCourse)=>{
    
    
    return await newCourse.save();
}

export const updateCourse = async(updatedCourse,id)=>{
    const course = await Course.findByIdAndUpdate(id,updatedCourse).exec();
    return course;
}

export const removeCourse = async(id)=>{
    return await Course.findByIdAndDelete(id).exec();
}