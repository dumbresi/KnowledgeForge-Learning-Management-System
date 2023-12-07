import * as baseService from './base-service';
import User from '../models/User'
import Instructor from '../models/Instructor';

const authPath='/auth';

export const registerUser =async (payload:string): Promise<Response> => {
    const newUser= baseService.post<User>(authPath+'/user/register',payload,'');
    return newUser;
}

export const loginUser = async (payload: any):Promise<Response>=>{
    const existingUser=baseService.post<User>(authPath+'/user/login',payload,'');
    return existingUser;
}

export const registerInstructor =async (payload:any):Promise<Response> => {
    const newUser= baseService.post<Instructor>(authPath+'/instructor/register',payload,'');
    return newUser;
}

export const loginInstructor = async (payload: any):Promise<Response>=>{
    const existingUser=baseService.post<Instructor>(authPath+'/instructor/login',payload,'');
    return existingUser;
}