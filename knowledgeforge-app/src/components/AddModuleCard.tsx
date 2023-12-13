import React, { ChangeEvent, useState } from "react";

type Props = {
  moduleNo: Number;
  courseId: string;
};

const AddModuleCard = (props: Props) => {
  const date: Date = new Date();
  const courseID = props.courseId;
  const [uploadVideotext,setUploadVideoText]=useState("Upload Video");
  const [addModuletext,setAddModuleText]=useState("Add Module");
  const [isModuleAdded,setisModuleAdded]= useState(false);
  const [isVideoUploaded,setIsVideoUploaded]=useState(false);
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    module_no: props.moduleNo,
    description: "",
    creationTime: date,
    videoId: "",
    courseId: courseID,
    // videoFile: null as File | null,
  });

  const [videoFile, setvideoFile] = useState<Blob>();

  const [videodata, setVideoData] = useState<File>();

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
      console.log("file" + file);
    }
  };

  const handleVideoUpload = async () => {
    const videoFormData: FormData = new FormData();
    videoFormData.append("video", videoFile as Blob);
    const response = await fetch("http://localhost:4000/video", {
      method: "POST",

      body: videoFormData,
    }).then(async (value) => {
      type responseType = { message: string; fileId: string };
      const result: responseType = await value.json(); // Parse JSON response
      const generatedVideoId = result.fileId;
      setFormData({ ...formData, videoId: generatedVideoId });
    });
    setUploadVideoText("Video Uploaded")
    console.log(response);
  };

  const handleApiCall = () => {
    // Your API call logic here
    // Example using fetch:
    fetch("http://localhost:4000/modules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        setAddModuleText("Module Added");
        setisModuleAdded(true);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`m-2 flex flex-col rounded-3xl hover:shadow-lg items-center justify-normal py-5 px-8 border-2 bg-background_cream ${
        isExpanded ? "h-auto bg-white" : "h-20 bg-sky-100"
      } duration-500`}
    >
      <h3
        className="text-xl font-semibold leading-7 text-gray-900 cursor-pointe md:text-2xl"
        onClick={toggleExpansion}
      >
        Add Module
      </h3>
      {isExpanded && (
        <>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Add a new module.
          </p>

          <div className="mt-8 w-full max-w-md">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Module Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="input-field"
              placeholder="Enter module title"
              onChange={handleInputChange}
            />

            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mt-4"
            >
              Module Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="input-field"
              placeholder="Enter module description"
              onChange={handleTextChange}
            ></textarea>

            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mt-4"
            >
              Module Duration
            </label>
            <input
              id="duration"
              name="duration"
              type="text"
              className="input-field"
              placeholder="Enter module duration"
              onChange={handleInputChange}
            ></input>

            <div className="mt-4">
              <label
                htmlFor="videoFile"
                className="block text-sm font-medium text-gray-700"
              >
                {uploadVideotext}
              </label>
              <input
                type="file"
                id="videoFile"
                name="videoFile"
                accept="video/*"
                className="input-field"
                onChange={handleFileChange}
              />
              {videoFile && (
                <button className="submit-button" onClick={!isVideoUploaded? handleVideoUpload:undefined}>
                  Upload Video
                </button>
              )}
            </div>
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={!isModuleAdded ? handleApiCall : undefined}
          >
            {addModuletext}
          </button>
        </>
      )}
    </div>
  );
};

export default AddModuleCard;
