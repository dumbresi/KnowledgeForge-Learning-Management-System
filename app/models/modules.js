import mongoose from "mongoose";
const Schema = mongoose.Schema;

const moduleSchema = new Schema.Schema({
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
    
},
{
    versionKey: false,
}
);
export default moduleSchema;