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
      <div className="flex flex-col my-10 justify-between  bg-white border-8 border-double border-zinc-500 rounded-3xl p-8 shadow-2xl">
        <div className="flex flex-col h-4/5 rounded-3xl">
          {renderModuleCards()}
        </div>
        <button className="submit-button w-24" onClick={handleSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export default AddModulePage;
