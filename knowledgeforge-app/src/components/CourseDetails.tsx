import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as moduleService from '../services/module-services';
import Course from '../models/Course';
import ModuleCard from './ModuleCard';
import Module from '../models/modules';

type Props = {};

const CourseDetails = (props: Props) => {
  const location = useLocation();
  const course: Course = location.state;
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module>();

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

  const changeSelectedModule = (mod: Module) => {
    setSelectedModule(mod);
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex md:items-center md:justify-between m-10">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold">{course.title}</h1>
          <p className="text-sm md:text-base">{course.description}</p>
        </div>

        <img className="w-full md:w-1/2 h-auto md:ml-10" alt="loading" src={`${course.thumbnail}`} />
      </div>

      <hr className="w-full bg-black h-1" />

      <div className="md:flex md:justify-between">
        <div className="mb-4 md:mb-0">
          <ul>
            <li className="text-lg">{`${selectedModule?.title}`}</li>
            <li className="text-sm md:text-base">{`${selectedModule?.description}`}</li>
            <li className="text-xs md:text-sm">{"Duration" + `${selectedModule?.duration}`}</li>
          </ul>
        </div>

        <div className="md:mr-20">
          <div>
            {modules.map((moduleItem: Module) => (
              <div key={moduleItem._id} onClick={() => changeSelectedModule(moduleItem)}>
                <ModuleCard module={moduleItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
