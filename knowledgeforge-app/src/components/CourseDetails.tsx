import React from 'react'
import { useLocation } from 'react-router-dom';
import * as moduleService from '../services/module-services'
import Course from '../models/Course';

type Props = {}

const CourseDetails = (props: Props) => {
    const location = useLocation();
    const course: Course = location.state;

    const getModules=()=>{
        const response=  moduleService.getModules(course._id);
    }

    getModules();
    


  return (
    <div>
        <div className='flex flex-row m-auto justify-between m-10'>
            <h1>{course.title}</h1>
            <img className='mr-20'alt='loading' src={`${course.thumbnail}`}></img>
        </div>

        <div>
          Modules
        </div>

    </div>
  )
}

export default CourseDetails