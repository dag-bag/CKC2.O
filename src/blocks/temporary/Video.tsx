"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ userId, videoId, videoDuration }) => {
  const [played, setPlayed] = useState(0);

  const handleProgress = (progress) => {
    console.log("progress", progress);

    setPlayed(progress.played);
  };

  const handleEnded = () => {
    // Call the API to update progress or trigger rewards when the video is completed
    updateVideoProgress(userId, videoId, videoDuration);
  };

  return (
    <ReactPlayer
      url="https://vimeo.com/883775791"
      controls
      onProgress={handleProgress}
      onEnded={handleEnded}
    />
  );
};

export default VideoPlayer;
