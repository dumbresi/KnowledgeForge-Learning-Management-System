import mongoose from "mongoose";
import Module from "../models/modules.js";
import Course from "../models/course.js";



export const save=async(newModule)=>{
    const module = new Module(newModule);
    return await module.save();
};


export const remove = async(id)=>{
    return await Module.findByIdAndDelete(id).exec();
}

export const findById=async(id)=>{
    
    return await  Module.findById(id);
    
}

export const getModules = async(courseId)=>{
    
    const result = await Module.find().where({courseId:courseId}).sort([['module_no',1]]);
    return result;
}