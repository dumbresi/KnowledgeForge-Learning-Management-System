<<<<<<< HEAD
import { response } from "express";

export const setResponse =(data,response)=>{
    response.status(200).json(data);
}

export const setErrorResponse=(err,response)=>{
    console.log(err);
    response.status(500)
        .json({
            code: "ServiceError",
            message:"Error occured while processing your request"
        })
}
=======
export const setResponse = (data,response)=>{
    response.status(200).json(data);
};
export const setErrorResponse = (err,response)=>{
    response.status(500).json({
        code: "ServiceError",
        message: "Error occured while processing your request."
    })
}
>>>>>>> b4f9893a74aea673a0fa24ba71abe74e5c8aeeea
