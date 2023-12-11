import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as moduleService from '../services/module-services';
import Course from '../models/Course';
import ModuleCard from './ModuleCard';
import Module from '../models/modules';
import VideoPlayer from './VideoPlayer';
import * as UserService from '../services/user-service';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = {};

const CourseDetails: React.FC<Props> = () => {
  const location = useLocation();
  const course: Course = location.state;
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | undefined>(undefined);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { currentUser, loading, error } = useSelector((state:RootState)=>state.user);

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
  }, [course._id]);

  useEffect(() => {
    // Additional logic to handle video player update when selectedModule changes
    // For example, you can set a ref to the VideoPlayer component and manually trigger an update
    // using the ref when selectedModule changes.
    console.log('selectedModule changed');
  }, [selectedModule]);

  useEffect(()=>{
    const checkRegistration=async ()=>{
      
      try {
        const response = await UserService.checkRegistration(course._id);
        setIsEnrolled(response.registered);
        
         
       
      } catch (error) {
        console.log(error);
      }
    }
    checkRegistration();
    
  },[])

  const changeSelectedModule = (mod: Module) => {
    console.log('module changed');
    setSelectedModule(mod);
  };

  const enrollForCourse = async () => {
    try {
      if(currentUser){
        const response =await UserService.registerforCourse(JSON.stringify({}), course._id);
        if(response?.status==200){
          setIsEnrolled(true);
        }
      }else{

      }
    } catch (error) {
      console.error('Error enrolling for the course:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex md:items-center md:justify-between m-10">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold">{course.title}</h1>
          <p className="text-sm md:text-base">{course.description}</p>
        </div>

        <img className="w-full md:w-1/2 h-auto md:ml-10" alt="loading" src={course.thumbnail} />
      </div>

      <hr className="w-full bg-black h-1" />

      {isEnrolled ? (
        <div className="md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <ul>
              <li className="text-lg">{selectedModule?.title}</li>
              <li className="text-sm md:text-base">{selectedModule?.description}</li>
              <li className="text-xs md:text-sm">Duration: {selectedModule?.duration}</li>
            </ul>

            <div className="border-2 h-2/4">
              <VideoPlayer videoID={`${selectedModule?.videoId}`} />
            </div>
          </div>

          <div className="md:w-1/3 md:mr-8 flex justify-center">
            <div>
              {modules.map((moduleItem: Module) => (
                <div
                  key={moduleItem._id}
                  onClick={() => {
                    changeSelectedModule(moduleItem);
                  }}
                  className={`cursor-pointer ${
                    selectedModule?._id === moduleItem._id ? 'bg-gray-200' : ''
                  }`}
                >
                  <ModuleCard module={moduleItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div> {/* Render something for users who are not enrolled */}
          You are not enrolled in this course.
          <div>
          <button onClick={enrollForCourse}className='bg-light_blue mx-auto'>Enroll Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
