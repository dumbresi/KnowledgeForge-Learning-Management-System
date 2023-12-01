import * as commonService from './common-service';
import Course from '../models/Course';

const coursePath= '/courses';

export const getCourses =async () : Promise<Course[]> => {
    const courses= commonService.commonGET<Course>(coursePath);
    return courses;
}

