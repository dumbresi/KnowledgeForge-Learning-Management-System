import React ,{useState, useEffect} from 'react'
import CourseCard from '../components/CourseCard';
import * as CourseService from '../services/course-service';
import Course from '../models/Course';

// type Course = {
//     title: string,
//     instructor: string,
//     duration: string,
//     fees: number,
//     category: string,
//     subCategory: string,
//     thumbnail: string,
//     description: string,
//     noOfModules: number,
//     creationTime: string,
//     avg_star_rating: number
// }

const AllCoursePage = ()  => {

    const [courses, setCourses] =useState<Course[]>([]);

    useEffect(() => {
        // Fetch course data from an API
        // For simplicity, let's assume you have a function fetchCourses() to get the data
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
    <div className='all-courses-page'>
        <h1>All Courses</h1>
        <div className='course-list'>
            {
                courses.map(
                    (courseItem) =>( <CourseCard course={courseItem}/> )
                )
            }
        </div>
    </div>
  )
}

export default AllCoursePage