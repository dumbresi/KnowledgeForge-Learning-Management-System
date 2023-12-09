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
        <div>
            <h1>{course.title}</h1>
        </div>

    </div>
  )
}

export default CourseDetails