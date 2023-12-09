import React from "react";
import Instructor from "../models/Instructor";

type InstructorDetailCardProps = {
  instructor: Instructor;
};

const InstructorDetailCard: React.FC<InstructorDetailCardProps> = ({ instructor }) => {
  return (
    <div className="instructor-details">
      <div>
        <h2>Name: {`${instructor.name}`}</h2>
        <p>Email: {`${instructor.email}`}</p>
        {/* <p>Contact Number: {`${instructor.contactNumber}`}</p> */}
        <p>University: {`${instructor.university}`}</p>
        <h3>Courses: </h3>
      </div>
    </div>
  );
};

export default InstructorDetailCard;
