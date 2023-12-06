// Importing the 'Instructor' model
import Instructor from '../models/instructor.js';

// Function to search for instructors based on specified parameters
export const searchInstructor = async (params = {}) => {
    // Using the 'find' method to retrieve instructors based on the provided parameters
    const instructors = await Instructor.find(params).exec();
    return instructors;
}

// Function to save a new instructor
export const saveInstructor = async (newInstructor) => {
    console.log(newInstructor);
    // Creating a new instance of the 'Instructor' model with the provided data
    const instructor = new Instructor(newInstructor);
    
    // Saving the new instructor to the database
    return await instructor.save();
}

// Function to update an existing instructor based on the provided ID
export const updateInstructor = async (updatedInstructor, id) => {
    // Using the 'findByIdAndUpdate' method to update the instructor
    const instructor = await Instructor.findByIdAndUpdate(id, updatedInstructor).exec();
    return instructor;
}

// Function to remove an existing instructor based on the provided ID
export const removeInstructor = async (id) => {
    // Using the 'findByIdAndDelete' method to delete the instructor
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
              name: 1, // Include the 'username' field
              email: 1,    // Include the 'email' field
              contactnum: 1,  
              university: 1,
              _id: 0,      // Exclude the '_id' field

            },
          },
    ]);
    return result;
}
