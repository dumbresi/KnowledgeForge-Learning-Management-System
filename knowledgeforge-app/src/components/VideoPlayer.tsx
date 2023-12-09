import React, { useState } from 'react';
import * as VideoService from '../services/video-service'

type VideoPlayer={
    videoID: string
}
const VideoPlayer = (props: VideoPlayer) => {
    const videoId=props.videoID;
    const [vid, setvid]=useState();

    // try {
    //     const data= VideoService.getVideo(videoId);
    //     const videoSource: string=await data;
    //     setvid(videoSource);
    // } catch (error) {
        
    // }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <ReactPlayer
        url={filePath}
        controls
        width="800px"
        height="450px"
      /> */}
      <video autoPlay={false} controls src={'http://localhost:4000/video/'+videoId}>
      </video>
    </div>
  );
};

export default VideoPlayer;
