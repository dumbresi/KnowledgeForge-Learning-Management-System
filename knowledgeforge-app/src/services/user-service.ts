import * as commonService from './common-service';
import User from '../models/UserModel';
import * as baseService from './base-service';

const userPath = 'http://localhost:4000/user';
const getUserPath='/current'
export const getUser = async (): Promise<User> => {
    try {
        const user = await commonService.commonGETOne<User>(userPath+getUserPath);
        //console.log('Received user data:', user); // Log the received user data
        return user;
    } catch (error) {
        //console.error('Error fetching user data:', error);
        throw new Error('Error fetching user data: ' + error);
    }
};

export const getRegisteredCourses=async () => {
    try {
        const registeredCourses= await baseService.GET(userPath+'/registeredCourses');
        return registeredCourses;
    } catch (error) {
        console.log(error);
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
      const response = await fetch(userPath +'/registeredCourses'+'/'+courseId, {
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

