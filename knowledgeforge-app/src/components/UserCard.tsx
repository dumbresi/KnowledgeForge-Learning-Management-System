import React from "react";
import User from "../models/User";

type UserCardProps ={
    user: User
}

const UserCard :React.FC<UserCardProps> =({ user })=> {

    return(
        <div className="w-96 p-5 border-2 border-black rounded-2xl">
            {/* <img src={`${user.profile_picture}`}></img> */}
            <p>User Name:- {`${user.userName}`}</p>
            <p>Contact Number:- {`${user.contactNumber}`}</p>
            <p>E-Mail id:- {`${user.email}`}</p>
        </div>
    )
}

export default UserCard;