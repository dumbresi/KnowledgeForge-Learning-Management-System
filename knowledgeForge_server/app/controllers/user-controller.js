import { response } from 'express';
import * as UserService from '../services/user-service.js'
import { setResponse, setErrorResponse} from './response-handler.js'

export const findUser = async (request, response) =>{
    console.log(request);
    try{
        const searchQuery = {...request.query};
        const users = await UserService.searchUser(searchQuery);
        setResponse(users,response);
    }catch(err){
        console.log(err);
        setErrorResponse(err,response);
    }
}

export const postUser = async (request, response)=>{
    try {
        const newUser = request.body;
        const user = await UserService.saveUser(newUser);
        setResponse(user, response)
    } catch(err) {
        setErrorResponse(err,response);
    }
}

export const putUser = async (request, response) => {
    try {
        const userId = request.params.id;
        const updatedUser = request.body;
        const user = await UserService.updateUser(updatedUser, userId);
        setResponse(user, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const deleteUser = async (request, response) => {
    try {
        const userId = request.params.id;
        const result = await UserService.removeUser(userId);
        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}