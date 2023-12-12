import * as commonService from './common-service';
import User from '../models/UserModel';
import * as baseService from './base-service';
import Course from '../models/Course';import { userDetailsPath } from '../resources/paths';
const localhost='http://localhost:4000'
const userPath = '/user';
const getUserPath='/current'

export const getUser = async (): Promise<User> => {
    try {
        const user = await commonService.commonGETOne<User>(userDetailsPath);
        //console.log('Received user data:', user); // Log the received user data
        return user;
    } catch (error) {
        //console.error('Error fetching user data:', error);
        throw new Error('Error fetching user data: ' + error);
    }
};

export const getRegisteredCourses=async (): Promise<Course[]> => {
    try {
        const registeredCourses= await baseService.GetOne<{myCourses:[]}>(userPath+'/registeredCourses');
        const result= registeredCourses.myCourses;
        return result;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching user data: ' + error);
    }
}

export const registerforCourse=async (payload:string,userId:string) => {
    try {
        const enrolledCourse= await baseService.post(userPath+'/registeredCourses'+'/'+userId,payload,'');
        return enrolledCourse;
    } catch (error) {
        console.log(error);
    }
}

export const checkRegistration = async (courseId: string):Promise<{registered:boolean}>=> {
    try {
      const response = await fetch(localhost+userPath +'/registeredCourses'+'/'+courseId, {
        headers: {
            'Content-Type': 'application/json',
          },
        method: 'GET',
        credentials: 'include',
    })
    const data:{registered:boolean}=await response.json();
    
      return data;
    } catch (error) {
      console.error('Error in checkRegistration:', error);
      throw error;
    }
  };

