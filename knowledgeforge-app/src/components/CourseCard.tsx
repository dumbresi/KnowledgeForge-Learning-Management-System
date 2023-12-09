import React from "react";
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'
import Course from "../models/Course";
import * as Paths from '../resources/paths'

type CourseCard ={
    course: Course
}
const CourseCard :React.FC<CourseCard>  =({ course })=> {
    
    return(
        <Link to={Paths.courseDetailsPath} state={course}>
        
        <div className="border border-gray-400 m-2 rounded-md bg-white h-60 flex flex-col hover:bg-gray-300 p-4">
            
            <div className="h-1/3 bg-red-400"><img alt='loading'src={`${course.thumbnail}`}></img></div>
            <div className="px-4 pt-3 pb-2">{`${course.title}`}</div>
            <div className="flex flex-row px-5 py-0">
                <div className="flex flex-col text-xs text-gray-600">
                    Number of lessons
                    <h3>{course.noOfModules}</h3>
                </div>
            </div>
            <hr className="h-2" />
            
            <div className="px-3 text-xs text-gray-600">
                {course.description}
                <p className="text-center">{`${course.category}`}</p>
            </div>

        </div>
        </Link>
    )
}

export default CourseCard