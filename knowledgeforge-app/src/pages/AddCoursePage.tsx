import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <div className='flex'>
            <AddCourseCard/>
        </div>
        </div>
    );

};

export default AddCoursePage;