import React from "react";
import AddModuleCard from "../components/AddModuleCard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as Paths from "../resources/paths";
import Sidebar from "../components/Sidebar";

const AddModulePage = () => {
  const location = useLocation();
  const noOfModules = location.state.noOfModules;
  const CourseId = location.state.courseId;
  const navigate = useNavigate();
  const category = () => {};
  //   const courseID= props.courseId;

  const renderModuleCards = () => {
    console.log("no of modules:" + noOfModules);
    const moduleCards = [];
    for (let i = 0; i < noOfModules; i++) {
      moduleCards.push(
        <AddModuleCard moduleNo={i + 1} courseId={`${CourseId}`} />
      );
    }
    return moduleCards;
  };

  const handleSubmit = () => {
    navigate(Paths.allCoursesPath);
  };

  return (
    <div className="flex flex-row">
      <div className="flex w-1/6 h-screen bg-background-cream">
        <Sidebar category={category} />
      </div>
      <div className="flex flex-col justify-between items-center bg-white rounded-lg p-8 shadow-2xl w-full md:w-1/4">
        <div className="flex flex-col justify-between items-center px-10">
          {renderModuleCards()}
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export default AddModulePage;
