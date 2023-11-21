import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose';
<<<<<<< HEAD
import registerRouter from './routes/index.js'
import debug from 'debug';
=======
import registerRouter from './routes/index.js';
>>>>>>> b4f9893a74aea673a0fa24ba71abe74e5c8aeeea

const initialize = (app)=>{
    debug
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://gunjalga:Gaurav123@info6150fall2023.lmskm.mongodb.net/codeForge?retryWrites=true&w=majority');
    registerRouter(app);

}
export default initialize;