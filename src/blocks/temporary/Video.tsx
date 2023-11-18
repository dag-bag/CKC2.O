"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const paylaod = {
  content_id: "random123",
  user_id: "random345",
};

const VideoPlayer = ({ userId, videoId, videoDuration }: any) => {
  const [played, setPlayed] = useState(0);

  const handleProgress = (progress: any) => {
    const roundedPlayedSeconds = Math.round(progress.playedSeconds);

    if (roundedPlayedSeconds !== 0) {
      if (roundedPlayedSeconds % 30 === 0) {
        console.log(`>> fetch it, ${roundedPlayedSeconds} seconds played!`);
      }
    }
  };

  const handleEnded = () => {
    // Call the API to update progress or trigger rewards when the video is completed
    // updateVideoProgress(userId, videoId, videoDuration);
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
