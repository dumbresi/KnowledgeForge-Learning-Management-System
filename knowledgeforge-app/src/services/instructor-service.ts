import * as commonService from './common-service';
import Instructor from '../models/Instructor';

const instructorPath = '/instructor/current';

export const getInstructors = async () : Promise<Instructor> => {
    const instructor = commonService.commonGETOne<Instructor>(instructorPath);
    console.log(instructor);
    return instructor;
}