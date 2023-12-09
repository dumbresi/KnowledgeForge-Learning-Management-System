import React, { useState, useEffect } from "react";
import InstructorDetailCard from "../components/InstructorDetailCard";
import * as InstructorService from "../services/instructor-service";
import Instructor from "../models/Instructor";

const InstructorDetail = () => {
  const [instructor, setInstructor] = useState<Instructor>(
  {
    name: "",
    email: "",
    // contactNumber: "",
    university: "",
    // password: "",
    // myCourses: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await InstructorService.getInstructors();
        console.log(data);
        setInstructor(data);
      } catch (error) {
        console.error("Error fetching instructor data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="instructor-details-page">
      <h1>Instructor</h1>
      <div className="instructor">
        <InstructorDetailCard instructor={instructor} />
      </div>
    </div>
  );
};

export default InstructorDetail;
