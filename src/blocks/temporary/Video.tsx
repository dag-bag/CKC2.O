"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

// this is for testing data;

const purchase = {
  id: "random123",
};

const content = {
  id: "random123",
};

const user = {
  id: "random345",
};

const reward = {
  type: "coin",
  value: 100,
};

const VideoPlayer = () => {
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
    //  at this section we need to
  };

  return (
    <ReactPlayer
      url="https://vimeo.com/883775791"
      controls
      playsinline
      onProgress={handleProgress}
      onEnded={handleEnded}
    />
  );
};

export default VideoPlayer;

// at StartPlaying - we need to make a table which need content_id and user_id and storing and keep updating progress every 30 seconds
// at onEnded - take reward from content and provide reward to user_id

// now no need to store reward at watched table
