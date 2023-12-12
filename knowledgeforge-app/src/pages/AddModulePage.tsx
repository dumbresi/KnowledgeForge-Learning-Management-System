import React from 'react';
import AddModuleCard from '../components/AddModuleCard';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Paths from '../resources/paths';


const AddModulePage = () => {
  const location = useLocation();
  const noOfModules = location.state.noOfModules;
  const CourseId= location.state.courseId;
  const navigate=useNavigate();
//   const courseID= props.courseId;

  const renderModuleCards = () => {
    console.log("no of modules:"+noOfModules);
    const moduleCards = [];
    for (let i = 0; i < noOfModules; i++) {
      moduleCards.push(<AddModuleCard moduleNo={i+1} courseId={`${CourseId}`}/>);
    }
    return moduleCards;
  };

  const handleSubmit=()=>{
    navigate(Paths.allCoursesPath);
  }

  return (
    <div className='bg-light_blue flex flex-col' >
        AddModule Page
        <div className='m-2'>
        {renderModuleCards()}
        </div>

        <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Done
          </button>
        
    </div>
  );
};

export default AddModulePage;
