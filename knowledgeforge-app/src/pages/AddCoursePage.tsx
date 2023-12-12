import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
  const category = () => {};
  return (
    <div className="flex flex-row bg-zinc-100">
      <div className="flex bg-zinc-100">
        <Sidebar category={category} />
      </div>
      <div className="flex-grow flex justify-center items-center p-4">
        <AddCourseCard />
      </div>
    </div>
  );
};

export default AddCoursePage;
