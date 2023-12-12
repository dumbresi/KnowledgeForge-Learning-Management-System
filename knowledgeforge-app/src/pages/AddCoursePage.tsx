import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
  const category = () => {};
  return (
    <div className="flex flex-row">
      <div className="flex w-1/6 bg-background-cream">
        <Sidebar category={category} />
        <div className="flex flex-col justify-between items-center p-4">
          <div className="flex flex-col justify-between items-center bg-white rounded-lg ml-32 p-8 shadow-2xl w-full md:w-full">
            <AddCourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
