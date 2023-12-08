import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const schema = mongoose.Schema;
//schema for the modules
const moduleSchema = new schema({
    title: {
        type: String,
        required: true,
      },
      
    duration: {
        type: String,
        required: true,
      },
    module_no: {
        type: Number,
        required: true,
    },
    no_of_lectures: {
        type: Number,
        required: true,
    },  
    description: {
        type: String,
        required: true,
      },
      
    creationTime: {
        type: Date,
        default: Date.now,
      },
    video:{
      type: ObjectId,
      required: true,
    }   
    
},
{
    versionKey: false,
}
);

const module = mongoose.model('modules',moduleSchema)
export default module;