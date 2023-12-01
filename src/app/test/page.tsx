"use client";
import useVideoPlayer from "@/hooks/useVideo";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  const { handleProgress, isLoading } = useVideoPlayer({
    userId: "2",
    contentId: "1",
    contentType: "video",
  });
  if (isLoading) return <div>loading...</div>;
  return (
    <ReactPlayer
      url="https://vimeo.com/883775791"
      controls
      playsinline
      onProgress={handleProgress}
      onEnded={() => console.log("end")}
    />
  );
};

export default VideoPlayer;
