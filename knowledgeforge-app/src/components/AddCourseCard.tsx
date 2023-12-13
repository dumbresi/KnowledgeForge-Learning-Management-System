import React, { ChangeEvent, MouseEventHandler, useRef, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import * as Patths from "../resources/paths";
import Course from "../models/Course";

const AddCourseCard = () => {
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    fees: 0,
    category: "",
    subCategory: "",
    thumbnail: null,
    description: "",
    noOfModules: 0,
    creationTime: "",
    avg_star_rating: 0,
    thumbnailBase64: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result?.toString();
        setFormData({
          ...formData,
          thumbnail: file,
          thumbnailBase64: base64String || "", // Extract the base64 string
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleApiCall = () => {
    // Your API call logic here
    const apiData = {
      title: formData.title,
      description: formData.description,
      instructor: formData.instructor,
      duration: formData.duration,
      category: formData.category,
      subCategory: formData.subCategory,
      fees: Number(formData.fees),
      noOfModules: Number(formData.noOfModules),
      thumbnail: formData.thumbnailBase64,
      creationTime: Date().toString(),
    };
    console.log(apiData);
    // Make your API call using apiData
    // Example using fetch:
    const req = fetch("http://localhost:4000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Return the promise for response.json()
          return response.json();
        } else {
          // Handle non-200 status codes (e.g., show an error message)
          throw new Error("Failed to create course");
        }
      })
      .then((res: Course) => {
        // Now you can access the parsed JSON data in the 'res' variable
        navigate(Patths.addModulePage, {
          state: {
            noOfModules: Number(formData.noOfModules),
            courseId: res._id,
          },
        });
        // Return res if you want to use it in the next then block
        return res;
      })
      .then((data) => {
        // Handle the API response
        console.log(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-normal px-4">
      <h3 className="text-3xl font-semibold text-gray-900 mr-20">Add Course</h3>
      <p className="mt-1 text-sm text-gray-500 mr-20">Add a new course</p>

      <div className="mt-8 w-full max-w-md">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Course Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="input-field rounded-lg"
          placeholder="Enter Course Title"
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Course Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="input-field rounded-lg"
          placeholder="Enter Course Description"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="instructor"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Instructor
        </label>
        <input
          id="instructor"
          name="instructor"
          type="text"
          className="input-field rounded-lg"
          placeholder="Enter Instructor Name"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Course Duration
        </label>
        <input
          id="duration"
          name="duration"
          type="text"
          className="input-field rounded-lg"
          placeholder="Enter Course Duration"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Course Category
        </label>
        <select
          id="category"
          name="category"
          className="input-field rounded-lg"
          placeholder="Select Course Category"
          onChange={handleInputChange}
        >
          <option disabled selected>
            {" "}
            Select Course Category{" "}
          </option>
          <option value="DigitalMarketing">Digital Marketing</option>
          <option value="DataScience">Data Science</option>
          <option value="Writing">Writing</option>
          <option value="Psychology">Psychology</option>
          <option value="Finance">Finance</option>
          <option value="Programming">Programming</option>
          <option value="Cooking">Cooking</option>
          <option value="Design">Design</option>
          <option value="ProjectManagement">Project Management</option>
          <option value="Spanish">Spanish</option>
          <option value="EnvironmentalScience">Environmental Science</option>
        </select>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="subCategory"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Course Sub-Category
        </label>
        <input
          id="subCategory"
          name="subCategory"
          className="input-field rounded-lg"
          type="text"
          placeholder="Enter Course Sub-Category"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="fees"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Course Fee ($)
        </label>
        <input
          id="fees"
          name="fees"
          type="number"
          step="0.01"
          className="input-field rounded-lg"
          placeholder="Enter Course Fees"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="noOfModules"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          No of Modules
        </label>
        <input
          id="noOfModules"
          name="noOfModules"
          type="number"
          className="input-field rounded-lg"
          placeholder="Enter Course Modules Count"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 pb-1"
        >
          Upload Image
        </label>
        <div className="flex items-center">
          <input
            type="file"
            accept="image/*"
            id="thumbnail"
            name="thumbnail"
            className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleFileUpload}
          />
          <button
            className="submit-button ml-2"
            //handle onclick
            onClick={handleApiCall}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseCard;
