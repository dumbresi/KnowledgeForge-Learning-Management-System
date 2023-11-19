import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose';

const initialize = (app)=>{
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://gunjalga:Gaurav123@info6150fall2023.lmskm.mongodb.net/codeForge?retryWrites=true&w=majority');
    

}
export default initialize;