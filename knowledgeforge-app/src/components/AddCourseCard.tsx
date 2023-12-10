import React, { ChangeEvent, MouseEventHandler, useRef, useState } from "react";

const AddCourseCard = () => {
  const [formData, setFormData] = useState({
    title:'',
    instructor: '',
    duration: '',
    fees: 0,
    category: '',
    subCategory: '',
    thumbnail: null as File | null,
    description: '',
    noOfModules: 0,
    creationTime: '',
    avg_star_rating: 0,
  });

  const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const files = (e.target as HTMLInputElement).files;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'creationTime' ? new Date().toISOString() : files ? files[0] : value,
    }));
  };

  const handleFileUpload = async() => {
    

    // Now 'formData' contains all the necessary data
    
    console.log('Form Data:', formData);
    const response = await fetch('http://localhost:4000/courses',{
      method:'POST',
      credentials:'include',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData)
    });
    console.log(response.json);
    // You can use 'formData' for your upload logic, e.g., send it to the server
    // fetch('/your-upload-endpoint', {
    //   method: 'POST',
    //   body: yourFormDataObject,
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
  };

  return (
    <div className="flex flex-col items-center justify-normal min-h-screen py-8 px-20">
      <h3 className="text-2xl font-semibold leading-7 text-gray-900">Add Course</h3>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Add a new course.</p>

      <div className="mt-8 w-full max-w-md">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Course Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course title"
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-4 w-full max-w-md">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Course Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Instructor
        </label>
        <input
          id="instructor"
          name="instructor"
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Course Duration
        </label>
        <input
          id="duration"
          name="duration"
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Course Category
        </label>
        <input
          id="category"
          name="category"
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Course SubCategory
        </label>
        <input
          id="subCategory"
          name="subCategory"
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Course fee
        </label>
        <input
          id="fees"
          name="fees"
          type="number"
          step="0.01"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          No of Modules
        </label>
        <input
          id="noOfModules"
          name="noOfModules"
          type="number"
          
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <div className="flex items-center">
          <input
            type="file"
            accept="image/*"
            id="thumbnail"
            name="thumbnail"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleInputChange}
            
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            //handle onclick
            onClick={handleFileUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseCard;
