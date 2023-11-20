import Instructor from '../models/instructor.js'

export const searchInstructor = async (params={}) => {
    const instructors=await  Instructor.find(params).exec();
    return instructors;
}

export const saveInstructor = async (newInstructor)=>{
    const instructor = new Instructor(newInstructor);
    return await instructor.save();
}

export const updateInstructor = async(updatedInstructor,id)=>{
    const instructor = await Instructor.findByIdAndUpdate(id,updatedInstructor).exec();
    return course;
}

export const removeInstructor = async(id)=>{
    return await Instructor.findByIdAndRemove(id).exec();
}