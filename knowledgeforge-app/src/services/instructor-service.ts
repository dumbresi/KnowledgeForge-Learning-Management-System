import * as commonService from './common-service';
import * as BaseService from './base-service';
import Instructor from '../models/Instructor';
import Course from '../models/Course';

const instructorPath = '/instructor/current';
const instructorCoursePath='/instructor/mycourses';

interface instructorCourses{
    courses:Course[]
}

export const getInstructors = async () : Promise<Instructor> => {
    const instructor = commonService.commonGETOne<Instructor>(instructorPath);
    console.log(instructor);
    return instructor;
}

export const getInstructorCourses=async () =>{
    const response: instructorCourses= await BaseService.GetOne(instructorCoursePath);
    const instCourses= response.courses
    return instCourses;
}