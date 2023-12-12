import React, { ChangeEvent, MouseEventHandler, useRef, useState } from "react";

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
    fetch("http://localhost:4000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-normal min-h-screen py-8 px-4">
      <h3 className="text-2xl font-semibold text-gray-900">Add Course</h3>
      <p className="mt-1 text-sm text-gray-500">Add a new course.</p>

      <div className="mt-8 w-full max-w-md">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Course Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="input-field"
          placeholder="Enter course title"
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Course Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="input-field"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Instructor
        </label>
        <input
          id="instructor"
          name="instructor"
          type="text"
          className="input-field"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Course Duration
        </label>
        <input
          id="duration"
          name="duration"
          type="text"
          className="input-field"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Course Category
        </label>
        <input
          id="category"
          name="category"
          type="text"
          className="input-field"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Course SubCategory
        </label>
        <input
          id="subCategory"
          name="subCategory"
          type="text"
          className="input-field"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Course fee
        </label>
        <input
          id="fees"
          name="fees"
          type="number"
          step="0.01"
          className="input-field"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          No of Modules
        </label>
        <input
          id="noOfModules"
          name="noOfModules"
          type="number"
          className="input-field"
          placeholder="Enter course description"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Image
        </label>
        <div className="flex items-center">
          <input
            type="file"
            accept="image/*"
            id="thumbnail"
            name="thumbnail"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleFileUpload}
          />
          <button
            className="submit-button"
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
