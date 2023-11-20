"use client";
import useVideoPlayer from "@/hooks/useVideo";
import { createWatchRecord, updateWatchRecord } from "@/services/watch";
import React, { useState } from "react";
import ReactPlayer from "react-player";

interface Purchase {
  id: string;
}

interface Content {
  id: string;
}

interface User {
  id: string;
}

interface Reward {
  type: string;
  value: number;
}

const VideoPlayer: React.FC = () => {
  const { handleProgress, handleEnded, isLoading } = useVideoPlayer({
    userId: "33",
    contentId: "33",
  });
  if (isLoading) return <div>loading...</div>;
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
