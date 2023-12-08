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
<div className='h-screen bg-background_cream '>
    <div className='flex flex-row justify-center'>
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
    </div>
      
        <h1>All Courses</h1>
        <div className='w-[95%] h-auto rounded-md bg-white ab' >
        <div className="grid gap-1 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-2">
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