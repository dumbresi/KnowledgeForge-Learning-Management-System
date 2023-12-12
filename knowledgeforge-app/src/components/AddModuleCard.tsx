import React, { ChangeEvent, useState } from "react";

type Props = {
    moduleNo: Number
    courseId:string
};

const AddModuleCard = (props: Props) => {
    const date: Date = new Date();;
    const courseID= props.courseId
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    module_no: props.moduleNo,
    description: '',
    creationTime: date,
    videoId: '',
    courseId:courseID
    // videoFile: null as File | null,
  });

  const [videoFile,setvideoFile]= useState<Blob>();

  const [videodata,setVideoData]=useState<File>();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setvideoFile(file);
      console.log("file"+file)
    }
  };

  const handleVideoUpload=async()=>{
    const videoFormData :FormData=new FormData();
    videoFormData.append('video',videoFile as Blob);
    const response = await fetch('http://localhost:4000/video',{
        method:'POST',
        
        body:videoFormData
    }).then(async (value)=>{
        type responseType= {message:string,fileId:string}
        const result:responseType = await value.json(); // Parse JSON response
      const generatedVideoId = result.fileId;
      setFormData({...formData, videoId: generatedVideoId})
    })
    console.log(response);
  }

  const handleApiCall = () => {
    // Your API call logic here
    // Example using fetch:
    fetch('http://localhost:4000/modules', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex flex-col items-center justify-normal py-8 px-20 border-2 ${isExpanded ? 'h-auto' : 'h-20'} overflow-hidden`}>
      <h3 className="text-2xl font-semibold leading-7 text-gray-900 cursor-pointer" onClick={toggleExpansion}>
        Add Module
      </h3>
      {isExpanded && (
        <>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Add a new module.</p>

          <div className="mt-8 w-full max-w-md">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Module Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-black-500 focus:ring-black-500 pl-2"
              placeholder="Enter module title"
              onChange={handleInputChange}
            />

            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">
              Module Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-black-500 focus:ring-black-500 pl-2"
              placeholder="Enter module description"
              onChange={handleTextChange}
            ></textarea>

            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mt-4">
              Module Duration
            </label>
            <input
              id="duration"
              name="duration"
              type="text"
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-black-500 focus:ring-black-500 pl-2"
              placeholder="Enter module duration"
              onChange={handleInputChange}
            ></input>

            <div className="mt-4">
              <label htmlFor="videoFile" className="block text-sm font-medium text-gray-700">
                Upload Video File
              </label>
              <input
                type="file"
                id="videoFile"
                name="videoFile"
                accept="video/*"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                onChange={handleFileChange}
              />
              {videoFile && (
                <button
                  className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleVideoUpload}
                >
                  Upload Video
                </button>
              )}
            </div>
            
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleApiCall}
          >
            Add
          </button>
        </>
      )}
    </div>
  );
};

export default AddModuleCard;