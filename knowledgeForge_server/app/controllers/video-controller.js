import { request, response } from 'express';
import upload from '../services/video-service.js';
import { setErrorResponse } from './response-handler.js';
import {gridFsBucket} from '../app.js'
import mongoose from 'mongoose';
export const uploadVideo = async (request,response)=>{
    try {
        upload.single('video')(request, response, (err) => {
            if (err) {
                return setErrorResponse(err, response);
            }

            // If upload is successful, send a response
            response.status(201).json({ message: 'Video uploaded successfully' });
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