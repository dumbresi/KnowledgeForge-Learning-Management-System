import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
  const category = () => {};
  return (
    <div className="flex-row">
      <div className="flex bg-zinc-100">
        <Sidebar category={category} />
        <div className="flex-grow flex justify-center items-center p-4">
          <div className="flex flex-col items-center bg-white rounded-lg p-8 shadow-2xl w-full md:w-full">
            <AddCourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;
