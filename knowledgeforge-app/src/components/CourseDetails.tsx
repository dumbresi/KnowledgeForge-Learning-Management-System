import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as moduleService from "../services/module-services";
import Course from "../models/Course";
import ModuleCard from "./ModuleCard";
import Module from "../models/modules";
import VideoPlayer from "./VideoPlayer";
import * as UserService from "../services/user-service";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import sampleThumb from "../resources/placeholder.jpg";
import Sidebar from "./Sidebar";
import { FaStar } from "react-icons/fa";

type Props = {};

const placeholderImage = sampleThumb;

const CourseDetails: React.FC<Props> = () => {
  const location = useLocation();
  const course: Course = location.state;
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | undefined>(
    undefined
  );
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const [thumbnailError, setThumbnailError] = useState(false);

  const handleThumbnailError = () => {
    setThumbnailError(true);
  };

  const thumbnailUrl = thumbnailError
    ? placeholderImage
    : course.thumbnail || placeholderImage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await moduleService.getModules(course._id);
        setModules(data);
        setSelectedModule(data[0]); // Access the first element of the updated state
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [course._id]);

  useEffect(() => {
    // Additional logic to handle video player update when selectedModule changes
    // For example, you can set a ref to the VideoPlayer component and manually trigger an update
    // using the ref when selectedModule changes.
    console.log("selectedModule changed");
  }, [selectedModule]);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const response = await UserService.checkRegistration(course._id);
        setIsEnrolled(response.registered);
      } catch (error) {
        console.log(error);
      }
    };
    checkRegistration();
  }, []);

  const changeSelectedModule = (mod: Module) => {
    console.log("module changed");
    setSelectedModule(mod);
  };

  const enrollForCourse = async () => {
    try {
      if (currentUser) {
        const response = await UserService.registerforCourse(
          JSON.stringify({}),
          course._id
        );
        if (response?.status == 200) {
          setIsEnrolled(true);
        }
      } else {
      }
    } catch (error) {
      console.error("Error enrolling for the course:", error);
    }
  };

  const ingore = () => {};

  return (
    <>
      <div className="flex">
        <Sidebar category={ingore} />
        <div className="container mx-auto mt-10 p-4">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {course.title}
              </h1>
              <p className="text-sm md:text-base italic  text-gray-600 mb-4 mt-4">
                {course.description}
              </p>
              <div className="flex flex-row text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            <img
              className={`w-full md:w-1/2 h-36 object-cover shadow-lg rounded-lg md:ml-10 ${
                thumbnailError ? "h-36" : ""
              }`}
              alt="Course Thumbnail"
              src={thumbnailUrl}
              onError={handleThumbnailError}
            />
          </div>

          <hr className="w-full border-t-2 shadow-lg border-gray-300 my-6" />

          {isEnrolled ? (
            <div className="md:flex md:justify-between">
              <div className="mb-4 md:mb-0 md:w-2/3">
                <ul>
                  <li className="mb-2 font-bold text-2xl">
                    {selectedModule?.title}
                  </li>
                  <li className="text-base italic  text-gray-600 mt-4 mb-1">
                    {selectedModule?.description}
                  </li>
                  <li className="text-sm italic  text-gray-600 mb-4">
                    Duration: {selectedModule?.duration}
                  </li>
                </ul>

                <div className="border-2 w-11/12 h-96 rounded-lg shadow-xl overflow-auto">
                  <VideoPlayer videoID={`${selectedModule?.videoId}`} />
                </div>
              </div>

              <div className="md:w-1/3 md:mr-8 flex flex-col items-center">
                <div className="w-full mb-4">
                  <h2 className="font-bold text-xl text-gray-800 mb-4">
                    List of Modules
                  </h2>
                  {modules.map((moduleItem: Module) => (
                    <div
                      key={moduleItem._id}
                      onClick={() => {
                        changeSelectedModule(moduleItem);
                      }}
                      className={`cursor-pointer hover:shadow-lg bg-gray-200 rounded-lg shadow-md p-2 mb-4 duration-300 ${
                        selectedModule?._id === moduleItem._id
                          ? "bg-gray-200"
                          : ""
                      }`}
                    >
                      <ModuleCard module={moduleItem} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              {" "}
              {/* Render something for users who are not enrolled */}
              <p className="text-lg mb-4">
                You are not enrolled in this course.
              </p>
              <button
                onClick={enrollForCourse}
                className="bg-light_blue text-white px-4 py-2 rounded-lg"
              >
                Enroll Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
