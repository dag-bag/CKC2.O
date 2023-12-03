"use client";
import Loader from "./loader";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import useVideoPlayer from "@/hooks/useVideo";

import { createReward } from "@/strapi/services/custom";

interface Props {
  userId: string;
  mediaURL: string;
  thumbnail: string;
  contentId: string;
  contentType: string;
  rewards: any[];
}

const Player: React.FC<Props> = ({
  rewards,
  mediaURL,
  userId,
  thumbnail,
  contentId,
  contentType,
}) => {
  const playerRef = useRef<any>(null);
  const [isLoading, setLoading] = useState(true);

  // handling records
  const { handleProgress, watchRecords } = useVideoPlayer({
    userId,
    contentId,
    contentType,
  });

  const handleReadyToWatch = () => {
    setLoading(false);
    // resume playing
    if (playerRef.current) {
      playerRef.current.seekTo(
        watchRecords.at(0)?.watch_progress ?? 0,
        "seconds"
      );
    }
  };

  const handleVideoEnd = () => {
    console.log("ended");
    createReward({ reward_id: rewards.at(0).id, user: userId } as any).then(
      () => {
        customToast();
      }
    );

    // Check if the video has reached 80% completion
    // const duration = playerRef.current.getDuration();
    // const progress = (watchRecords.at(0)?.watch_progress ?? 0) / duration;
    // if (progress >= 0.8) {
    //   // Handle the end of the video at 80% completion
    //   console.log("Video reached 80% completion!");
    // }
  };
  return (
    <div className="w-full">
      <ReactPlayer
        controls
        playsinline
        url={mediaURL}
        width={"100%"}
        ref={playerRef}
        height={"100%"}
        onProgress={handleProgress}
        onReady={handleReadyToWatch}
        onEnded={handleVideoEnd}
      />
      {isLoading && <Loader thumbnail={thumbnail} />}
      {/* <button onClick={customToast}>click</button> */}
    </div>
  );
};

export default Player;

import { customToast } from "@/blocks/atoms/Custom";
import Rewards from "../video/reward";
