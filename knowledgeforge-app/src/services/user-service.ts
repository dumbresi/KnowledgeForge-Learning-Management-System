import * as commonService from './common-service';
import User from '../models/user';

const userPath = '/user';
export const getUser = async (): Promise<User> => {
    try {
        const user = await commonService.commonGETOne<User>(userPath);
        console.log('Received user data:', user); // Log the received user data
        return user;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Error fetching user data: ' + error);
    }
};


// export const getUser = async (): Promise<User> => {
//     try {
//         const user = await commonService.commonGET<User>(userPath);
//         return user;
//     } catch (error) {
//         throw new Error('Error fetching user data: ' + error);
//     }
// };


// import * as commonService from './common-service';
// import User from '../models/user';

// const userPath= '/user';

// export const getUser =async () : Promise<User[]> => {
//     const user= commonService.commonGET<User>(userPath);
//     return user;
// }

