import mongoose from "mongoose";
import Module from "../models/modules.js";
import Course from "../models/course.js";


//method to save new module to database
export const save=async(newModule)=>{
    const module = new Module(newModule);
    return await module.save();
};

//method to remove a module from database uisng ID
export const remove = async(id)=>{
    return await Module.findByIdAndDelete(id).exec();
}

//method to get a particular module from database uisng ID
export const findById=async(id)=>{
    
    return await  Module.findById(id);
    
}

export const getModules = async(courseId)=>{
    console.log('///');
    const result = await Course.aggregate([
        {
            $match:{ _id: new mongoose.Types.ObjectId(courseId) }
        },
        {
            $lookup: {
              from: "modules",
              localField: "moduleIDs",
              foreignField: "_id",
              as: "modules"
            }
          },
        {
            $project:{
                _id: 0, // Exclude the _id field from the output
      title: 1,
      modules:1,
      
            }
        }
    ]).catch(error=>{
        console.log(error);
    });
    console.log(result);
    return result;
}