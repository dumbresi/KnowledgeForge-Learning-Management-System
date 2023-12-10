import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
    const category=()=>{

    }
    return (
        <div className="flex">
            <Sidebar category={category}/>
            <div className='flex'>
            <AddCourseCard/>
        </div>
        </div>
    );

};

export default AddCoursePage;