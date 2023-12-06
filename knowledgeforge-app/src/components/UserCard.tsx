import React from "react";
import User from "../models/user";

type UserCardProps ={
    user: User
}

const UserCard :React.FC<UserCardProps> =({ user })=> {

    return(
        <div className="course-card">
            <img src={`${user.profile_picture}`}></img>
            <p>{`${user.userID}`}</p>
            <p>{`${user.userName}`}</p>
            <p>{`${user.contactNumber}`}</p>
            <p>{`${user.email}`}</p>
        </div>
    )
}

export default UserCard;