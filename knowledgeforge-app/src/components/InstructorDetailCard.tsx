import React, { useEffect, useState } from "react";
import Instructor from "../models/Instructor";
import { useDispatch } from "react-redux";
import { updateUserSuccess } from "../redux/user/userSlice";
import { useTranslation } from "react-i18next";

type InstructorDetailCardProps = {
  instructor: Instructor;
};

const InstructorDetailCard: React.FC<InstructorDetailCardProps> = ({ instructor }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [editedInstructor, setEditedInstructor] = useState<Instructor>({
    name: instructor.name,
    email: instructor.email,
    university: instructor.university,
    contactNumber: instructor.contactNumber,
    // Add other properties if needed
  });

  useEffect(()=>{

  },[isEditing]);
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedInstructor((prevInstructor) => ({
      ...prevInstructor,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      // Make API call to update instructor data
      // Example:
      // const result = await updateInstructor(editedInstructor);
      
      setIsEditing(false);
      const result = await fetch('http://localhost:4000/instructor',{
        method:'PUT',
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
           "name":editedInstructor.name,
           "contactNumber":editedInstructor.contactNumber
        })

        
      },
      );
      if (result.ok) {
        const updatedUserData = await result.json();
        console.log(updatedUserData); // Log the updated user data
        setEditedInstructor(updatedUserData);
        // setEditedUser(updatedUserData);

        dispatch(updateUserSuccess({
          userName: updatedUserData.name, contactNumber: updatedUserData.contactNumber,
          email: updatedUserData.email,
          userType: "instructor"
        }));
        console.log("User data:"+updatedUserData)
      } else {
        // Handle unsuccessful response
      }
      
      // Simulate API response for demonstration purposes
      // const updatedInstructorData = { ...editedInstructor, id: instructor.id };

      // Update Redux state with the updated data
    } catch (error) {
      console.error("Error updating instructor:", error);
      // Handle error, show error message, etc.
    }
  };

  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex items-center justify-end px-4 bg-background_cream pr-32">
      <div className="p-40 max-w-8xl bg-white w-3/4 rounded-lg shadow-xl">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-semibold leading-7 text-gray-900">
            {isEditing ? t("Edit Instructor") : instructor.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {t("Following are your details")}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">{t("Full name")}</dt>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedInstructor.name}
                  onChange={handleInputChange}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              ) : (
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{editedInstructor.name}</dd>
              )}
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">{t("Email")}</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{instructor.email}</dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">{t("Contact Number")}</dt>
              {isEditing ? (
                <input
                  type="text"
                  name="contactNumber"
                  value={editedInstructor.contactNumber}
                  onChange={handleInputChange}
                  className="border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
              ) : (
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{editedInstructor.contactNumber}</dd>
              )}
            </div>
          </dl>
        </div>
        <button
          className="mt-6 bg-orange-500 hover:bg-orange-700 text-white text-sm font-bold py-2 px-4 rounded"
          onClick={isEditing ? handleSaveClick : handleEditClick}
        >
          {isEditing ? t("Save") : t("Edit")}
        </button>
      </div>
    </div>
  );
};

export default InstructorDetailCard;
