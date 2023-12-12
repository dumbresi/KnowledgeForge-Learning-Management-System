import React, { useState, useEffect, startTransition } from "react";
import CourseCard from "../components/CourseCard";
import * as CourseService from "../services/course-service";
import Course from "../models/Course";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import logo from "../resources/knowledgeForge.jpeg";
import Topbar from "../components/Topbar";
import * as Paths from "../resources/paths";
import * as AuthService from "../services/auth-service";
import CoursesGrid from "../components/CoursesGrid";

type AllCoursePageProps = {
  pageType: string;
};
const AllCoursePage = (props: AllCoursePageProps) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CourseService.getCourses();
        setCourses(data);
        setFilteredCourses(data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, []);

  const searchHandler = (query: string) => {
    console.log("search handler called");
    const searchedCourse = courses.filter((c) =>
      c.title.toLowerCase().includes(query.toLowerCase())
    );

    if (query !== "") {
      setFilteredCourses((prevCourses) => [...searchedCourse]);
    } else {
      setFilteredCourses((prevCourses) => [...courses]);
    }
  };

  const handleLogout = async () => {
    const response = await AuthService.logout();

    if (response.status == 200) {
      navigate(Paths.loginPath);
    }
  };

  const filterCoursesByCategory = (category: string) => {
    const searchedCourse = courses.filter((c) =>
      c.category.toLowerCase().includes(category.toLowerCase())
    );

    if (category !== "") {
      setFilteredCourses((prevCourses) => [...searchedCourse]);
    } else {
      setFilteredCourses((prevCourses) => [...courses]);
    }
  };

  return (
    <div className=" bg-zinc-100 flex h-full">
      <div className="flex">
        <Sidebar category={filterCoursesByCategory} />
      </div>

      {/* <div className='flex flex-row justify-center'>
    <nav>
        <ul>
          <li>
            <Link to="/user/register">Register</Link>
          </li>
          <li>
            <Link to="/user/login">Login</Link>
          </li>
          <li>
            <Link to="/user/current">User Details</Link>
          </li>
        </ul>
      </nav>
    </div>  */}

      <div className="w-[95%] h-auto rounded-md bg-zinc-100 ab">
        <div>
          <Topbar onSearch={searchHandler} />
        </div>
        {props.pageType === "allCourses" ? (
          <CoursesGrid courses={filteredCourses} />
        ) : (
          ""
        )}
        {/* <div className="grid gap-1 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-2">
          {filteredCourses.map((courseItem) => (
            <CourseCard course={courseItem} />
          ))} 
        </div> */}
      </div>
    </div>
  );
};

export default AllCoursePage;
