"use client";
import Loader from "./loader";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import useVideoPlayer from "@/hooks/useVideo";
import toast from "react-hot-toast";
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
  };

  const forceUpdate = (value: number) => {
    console.log("force update << ");
    if (playerRef.current) {
      setPlaying(false);
      playerRef.current.seekTo(value, "seconds");
      setPlaying(true);
    }
  };

  const seconds = useRef<any>([]);
  const [playing, setPlaying] = useState(false);

  const progress = (state: any) => {
    // saving values
    seconds.current.push(Math.round(state.playedSeconds));
    // emptying array
    seconds.current.length > 3 && seconds.current.shift();
    // seperating
    const zones = {
      previous: seconds.current.at(seconds.current.length - 2) ?? 0,
      current: seconds.current.at(seconds.current.length - 1),
    };

    console.log(zones);

    // status
    const signal =
      zones.previous == 0
        ? "green"
        : zones.current - zones.previous > 10 ||
          zones.current - zones.previous == 0
        ? "green"
        : "red";

    // action
    if (signal == "red") {
      toast("you cannot seek");
      forceUpdate(zones.previous);
      seconds.current = [0, 0];
    }
  };

  return (
    <div className="w-full">
      <ReactPlayer
        playing={playing}
        controls
        playsinline
        url={mediaURL}
        width={"100%"}
        ref={playerRef}
        height={"100%"}
        onProgress={progress}
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
