import React, { useRef } from "react";

const AddCourseCard = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // Handle file upload logic here
      console.log("Uploaded file:", file);
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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
        ></textarea>
      </div>
      <div className="mt-4 w-full max-w-md">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <div className="flex items-center">
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleFileUpload}
            ref={fileInputRef}
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            //handle onclick
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseCard;
