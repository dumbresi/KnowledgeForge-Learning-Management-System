import React, { useEffect, useState } from 'react'
import * as UserSerivce from '../services/user-service';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Course from '../models/Course';
import CoursesGrid from '../components/CoursesGrid';

type Props = {}

const UserCourses  = (props: Props) => {
  const [enrolledCourses,setEnrolledCourses]=useState<Course[]>([])
  const { currentUser, loading, error } = useSelector((state:RootState)=>state.user);

  useEffect(()=>{
    if(currentUser){
      const fetchRegisteredCourses=async ()=>{
        const response = await UserSerivce.getRegisteredCourses();
        setEnrolledCourses(response);
      }
      fetchRegisteredCourses();
    }
    
  },[])
  return (
    <div>
       <div className="w-[95%] h-auto rounded-md bg-background_cream ab">
        {/* <div>
          <Topbar onSearch={searchHandler}/>
        </div> */}
        {
        (currentUser && enrolledCourses!==undefined)?<CoursesGrid courses={enrolledCourses}/>: "Please Login to see enrolled courses"
        }

      </div>
    </div>
  )
}

export default UserCourses;