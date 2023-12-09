import React, { useState } from "react";
import User from "../models/UserModel";

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen flex items-center justify-end px-4 bg-background_cream pr-32">
    <div className="p-40 max-w-8xl  bg-white w-3/4 rounded-lg shadow-xl">
    <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold leading-7 text-gray-900">{user.userName}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Welcome to your profile.</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded" onClick={handleEditClick}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      {/* <div className="px-4 sm:px-0">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Edit
          </button>
        <h3 className="text-2xl font-semibold leading-7 text-gray-900">User Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Welcome to your profile.</p>
      </div> */}
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            {isEditing ? (
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    defaultValue={user.userName}
                  />
                ) : (
                  `${user.userName}`
                )}
            {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${user.userName}`}</dd> */}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            {isEditing ? (
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    defaultValue={user.email}
                  />
                ) : (
                  `${user.email}`
                )}
            {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${user.email}`}</dd> */}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Contact</dt>
            {isEditing ? (
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    defaultValue={user.contactNumber}
                  />
                ) : (
                  `${user.contactNumber}`
                )}
            {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${user.contactNumber}`}</dd> */}
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd> */}
             {isEditing ? (
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    defaultValue= "// Add default value"
                  />
                ) : (
                  `lorem`
                )}
          </div>
        </dl>
      </div>
    </div>
    </div>
  );
};

export default UserCard;
