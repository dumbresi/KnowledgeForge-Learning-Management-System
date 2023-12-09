import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import * as moduleService from '../services/module-services'
import Course from '../models/Course';
import ModuleCard from './ModuleCard';
import Module from '../models/modules';

type Props = {}

const CourseDetails = (props: Props) => {
    const location = useLocation();
    const course: Course = location.state;
    const [modules,setModules]= useState<Module[]>([]);
    const [selectedModule,setSelectedModule]=useState<Module>();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await moduleService.getModules(course._id);
          setModules(data);
          setSelectedModule(data[0]); // Access the first element of the updated state
        } catch (error) {
          console.error('Error fetching course data:', error);
        }
      };
    
      fetchData();
    }, []);
    
    const changeSelectedModule=(mod:Module)=>{
      setSelectedModule(mod);
    }
  


  return (
    <div>
        <div className='flex flex-row m-auto justify-between m-10'>
          <div className='flex flex-col'>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
          </div>
            
            <img className='mr-20'alt='loading' src={`${course.thumbnail}`}></img>
        </div>

        <div className='p-1 w-full  bg-black'></div>
        {/* Divider line between course details and modules */}

        {/* Module container */}
        <div className='flex flex-row justify-between'>
          <div>
            <li>{`${selectedModule?.title}`}</li>
            <li>{`${selectedModule?.description}`}</li>
            <li>"Duration"+{`${selectedModule?.duration}`}</li>
          </div>
            <div className='mr-20'>
              <div>
                {modules.map(
                        (moduleItem:Module) =>( 
                          <div onClick={() => changeSelectedModule(moduleItem)}>
                          <ModuleCard module={moduleItem} />
                          </div>
                        )
                    )}
              </div>
          </div>


        </div>
        

    </div>
  )
}

export default CourseDetails