import mongoose from "mongoose";
import Module from "../models/modules.js";

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