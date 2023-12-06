import cors from 'cors'
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import dotenv from 'dotenv';
import Grid from 'gridfs-stream';
import cookieParser from 'cookie-parser';


dotenv.config();
export let gridFsBucket;
const initialize = (app)=>{
    //debug
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cookieParser());
    
    mongoose.connect(process.env.MONGO_CONN);
    const conn = mongoose.connection;
    let gfs;
    
    conn.once('open',()=>{
        gfs = Grid(conn.db,mongoose.mongo);
        gfs.collection('videos');
        console.log('connection open')
        gridFsBucket=new mongoose.mongo.GridFSBucket(conn.db, {
         bucketName: 'videos',
       });
   });
    registerRouter(app);

}

export default initialize;