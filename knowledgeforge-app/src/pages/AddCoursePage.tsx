import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
  const category = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex bg-background-cream">
        <Sidebar category={category} />
        <div className="flex flex-col justify-between items-center p-4">
          <div className="flex flex-col justify-between items-center bg-white rounded-lg p-8 shadow-2xl w-full md:w-96">
            <AddCourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
