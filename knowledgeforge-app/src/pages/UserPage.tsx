import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import * as UserService from "../services/user-service";
import User from "../models/UserModel";
import LeftNavigationPanel from "../components/LeftNavigationPanel";
import Sidebar from "../components/Sidebar";

const UserPage = () => {
    const [user, setUser] = useState<User | null>(null); // User or null as initial state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await UserService.getUser(); // Fetch a single user
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Sidebar/>
            <div>
            {user ? (
                <UserCard user={user} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </div>
    );
};

export default UserPage;





// const UserPage = () => {

//     const [user, setUser] = useState<User[]>([]);

//     useEffect(() => {
//         // fetch user data from API

//         const fetchData = async () => {
//             try {
//                 const data = UserService.getUser();
//                 setUser(await data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//             };
//             fetchData();
//     }, []);

//     return (
//         <div className='user-page'>
//             <h1>Welcome to your profile!</h1>
//             <div>
//                 {
//                     user.map(
//                         (userItem) =>( <UserCard user={userItem}/> )
//                     )
//                 }
//             </div>
//         </div>
//       )


// }

