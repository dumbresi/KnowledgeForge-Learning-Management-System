import React from "react";
import { BrowserRouter, Route, Routes, Link,useNavigate } from 'react-router-dom'
import Course from "../models/Course";
import * as Paths from '../resources/paths'

type CourseCardProps ={
    course: Course
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
      <Link to={Paths.courseDetailsPath} state={course}>
        <div className="flex flex-col border border-gray-300 m-2 rounded-md bg-white shadow-md hover:scale-105 hover:shadow-lg p-4 transition duration-300 h-full">
          <div className="mb-4 h-40 rounded-t-md overflow-hidden">
            {/* {course.thumbnail ? ( */}
            {null ? (
              <img
                alt="loading"
                src={course.thumbnail}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center bg-gray-200 text-gray-400 w-full h-full">
                No Image
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="px-4">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <div className="flex items-center text-gray-600">
                <span className="mr-2">Number of lessons:</span>
                <span className="font-semibold">{course.noOfModules}</span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="px-4 text-gray-600">
              <p>{course.description}</p>
              <p className="text-center mt-2">{course.category}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  
  export default CourseCard;
  