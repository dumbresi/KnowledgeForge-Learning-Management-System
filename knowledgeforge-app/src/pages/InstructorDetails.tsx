import React from "react";
import AllCoursePage from "./AllCoursePage";
import "./CSS/InstructorDetails.css";

interface InstructorProps {
  instructor_id: string;
  name: string;
  email: string;
  profilePicture: string;
  contactNumber: string;
  university: string;
  courses: string[];
}

const InstructorDetails: React.FC<InstructorProps> = ({
  instructor_id,
  name,
  email,
  profilePicture,
  contactNumber,
  university,
  courses,
}) => {
  return (
    <div className="instructor-details">
      <div>
        <img src="components/profilepicture.png" alt={`Profile of ${name}`} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Contact Number: {contactNumber}</p>
        <p>University: {university}</p>
        <h3>Courses:</h3>
        <ul>
          <AllCoursePage />
        </ul>
      </div>
    </div>
  );
};

export default InstructorDetails;
