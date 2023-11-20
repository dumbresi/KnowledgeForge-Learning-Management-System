import Course from '../models/course.js'

export const searchCourse = async (params={}) => {
    const courses=await  Course.find(params).exec();
    console.log(courses);
    return courses;
}

export const saveCourse = async (newCourse)=>{
    const course = new Course(newCourse);
    return await course.save();
}

export const updateCourse = async(updatedCourse,id)=>{
    const course = await Course.findByIdAndUpdate(id,updatedCourse).exec();
    return course;
}

export const removeCourse = async(id)=>{
    return await Course.findByIdAndRemove(id).exec();
}