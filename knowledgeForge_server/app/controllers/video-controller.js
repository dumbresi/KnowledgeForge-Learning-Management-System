import { request, response } from 'express';
import {upload} from '../app.js';
import { setErrorResponse } from './response-handler.js';
import {gridFsBucket} from '../app.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
dotenv.config();



export const uploadVideo =  (request,response)=>{
    
    
    try {
         upload.single('video')(request, response, (err) => {
            if (err) {
                return setErrorResponse(err, response);
            }
            const fileId = request.file.id;
            // If upload is successful, send a response
            response.status(201).json({ 
                message: 'Video uploaded successfully',
                fileId:fileId
         });
        });
    } catch (error) {
        setErrorResponse(error,response);
    }
};

export const getVideo = async (request,response)=>{
    try {
        console.log(request.params.id);
        const objectId = new mongoose.Types.ObjectId(request.params.id);
    const readstream = gridFsBucket.openDownloadStream(objectId);
    readstream.pipe(response);
    } catch (error) {
        setErrorResponse(error,response);
    }
}