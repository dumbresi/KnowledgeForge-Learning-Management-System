import React ,{useState, useEffect} from 'react'
import CourseCard from '../components/CourseCard';
import * as CourseService from '../services/course-service';
import Course from '../models/Course';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


const AllCoursePage = ()  => {

    const [courses, setCourses] =useState<Course[]>([]);

    useEffect(() => {
        // Fetch course data from an API
        const fetchData = async () => {
          try {
            const data = CourseService.getCourses();
            setCourses(await data);
          } catch (error) {
            console.error('Error fetching course data:', error);
          }
        };
    
        fetchData();
      }, []);
    

    // const fetchData = async () => {
    //     try{
    //         const data = CourseService.getCourses();
    //         setCourses(await data);
    //     }catch(error){
    //         console.error("Error fetching courses data: "+error);
            
    //     }
    // }
    // fetchData;

  return (
<div>
    <div className='justify-center'>
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
        <h1>All Courses</h1>
        <div className='course-list'>
            {
                courses.map(
                    (courseItem) =>( <CourseCard course={courseItem}/> )
                )
            }
        </div>
    </div>
</div>
  )
}

export default AllCoursePage