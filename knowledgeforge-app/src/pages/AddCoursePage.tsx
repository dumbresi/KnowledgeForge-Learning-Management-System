import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
  const category = () => {};
  return (
    <div className="flex flex-row">
      <div className="flex">
        <Sidebar className="" category={category} />
      </div>
      <div className="flex h-3/5 my-5 justify-between items-center bg-white  rounded-3xl ml-32 p-8">
        <AddCourseCard />
      </div>
    </div>
  );
};

export default AddCoursePage;
