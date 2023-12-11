import React, { useState } from 'react';
import * as VideoService from '../services/video-service'
import ReactPlayer from 'react-player';

type VideoPlayer={
    videoID: string
}
const VideoPlayer = (props: VideoPlayer) => {
    const videoId=props.videoID;
    const [vid, setvid]=useState();
    

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ReactPlayer
        url={`http://localhost:4000/video/${videoId}`}
        controls
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload', // Disable download button
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
