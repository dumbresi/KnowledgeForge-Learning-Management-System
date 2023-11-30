import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();
const initialize = (app)=>{
    //debug
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect(process.env.MONGO_CONN);
    registerRouter(app);

}
export default initialize;