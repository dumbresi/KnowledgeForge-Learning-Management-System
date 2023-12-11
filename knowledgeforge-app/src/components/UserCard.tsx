import React, { useEffect, useState } from "react";
import UserModel from "../models/UserModel";
import { useDispatch } from "react-redux";
import { updateUserSuccess } from "../redux/user/userSlice";
import { useTranslation } from "react-i18next";

type UserCardProps = {
  user: {
    userName: string;
    email: string;
    contactNumber: string;
  };
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch=useDispatch();
  const [editedUser, setEditedUser] = useState<UserModel>({
    userName: user.userName,
    email: '',
    contactNumber: user.contactNumber,
    // password: '', // Initialize with an empty string or default value
    // registeredCourses: '', // Initialize with an empty array or default value
  });
    // State to manage the updated user data from the API response
    const [updatedUser, setUpdatedUser] = useState<UserModel>({
      userName: user.userName,
      email: '',
      contactNumber: user.contactNumber,
      // password: '',
      // registeredCourses: '',
    });


  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      // await updateUser(editedUser);
      setIsEditing(false);
      const result = await fetch('http://localhost:4000/user',{
        method:'PUT',
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
           "userName":editedUser.userName,
           "contactNumber":editedUser.contactNumber
        })
      },
      );
      // console.log( result.json());
      // console.log(updatedUser);
      if (result.ok) {
        const updatedUserData = await result.json();
        console.log(updatedUserData); // Log the updated user data
        setUpdatedUser(updatedUserData);
        setEditedUser(updatedUserData);

        dispatch(updateUserSuccess(updatedUserData));
        console.log("User data:"+updatedUserData)
      } else {
        // Handle unsuccessful response
      }
    }
     catch (error) {
      console.error("Error updating user:", error);
      // Handle error, show error message, etc.
    }
  };
  const { t } = useTranslation('common');


  return (
    <div className="min-h-screen items-center justify-center px-4 bg-background-cream">
    <div className="flex-1 max-w-4xl mx-auto pt-8 mt-8 bg-white rounded-lg shadow-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-3xl font-semibold leading-7 text-gray-900">{isEditing ? t("Edit User") : editedUser.userName}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{t("Welcome to your profile.")}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded" onClick={isEditing ? handleSaveClick : handleEditClick}>
            {isEditing ? t("Save") : t("Edit")}
          </button>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">{t("Full name")}</dt>
              {isEditing ? (
                <input
                  type="text"
                  name="userName"
                  value={editedUser.userName}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1 w-full"
                />
              ) : (
                <dd className="mt-1 text-md leading-6 text-gray-700">{editedUser.userName}</dd>
              )}
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">{t("Email")}</dt>
                <dl className="text-md">{user.email}</dl>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-md font-medium leading-6 text-gray-900">{t("Contact")}</dt>
              {isEditing ? (
                <input
                  type="text"
                  name="contactNumber"
                  value={editedUser.contactNumber}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1 w-full"
                />
              ) : (
                <dd className="mt-1 text-md leading-6 text-gray-700">{editedUser.contactNumber}</dd>
              )}
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
