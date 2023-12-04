"use client";
import Loader from "./loader";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import useVideoPlayer from "@/hooks/useVideo";
import { customToast } from "@/blocks/atoms/Custom";
import { createReward } from "@/strapi/services/custom";
interface Props {
  rewards: any[];
  userId: string;
  duration: string;
  mediaURL: string;
  thumbnail: string;
  contentId: string;
  contentType: string;
  isAlreadyRewarded: boolean;
}

const Player: React.FC<Props> = ({
  rewards,
  duration,
  mediaURL,
  userId,
  thumbnail,
  contentId,
  contentType,
  isAlreadyRewarded,
}) => {
  const seconds = useRef<any>([]);
  const playerRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [maxTimePlayed, setMaxTimePlayed] = useState<number>(0);

  // handle forcefully update timestamp with validation
  const forceUpdate = (value: number) => {
    if (!playerRef.current) return;
    setPlaying(false);
    playerRef.current.seekTo(value, "seconds");
    setPlaying(true);
  };

  // handling records
  const { trackProgress, lastPlayed } = useVideoPlayer({
    userId,
    contentId,
    contentType,
  });

  const handleReadyToWatch = () => {
    setLoading(false);
    forceUpdate(lastPlayed);
  };

  const progress = (state: { playedSeconds: number }) => {
    const playedSeconds = Math.round(state.playedSeconds);
    console.log({ duration, played: playedSeconds });

    // sending user completion of video
    if (!isAlreadyRewarded) {
      // [tracking user watched]
      trackProgress(state);
      // [end of video]
      if (parseInt(duration) === playedSeconds) {
        customToast();
        createReward({ reward_id: rewards.at(0).id, user: userId } as any);
      }
    }

    // saving values
    seconds.current.push(Math.round(state.playedSeconds));

    // Check if there's enough data in the array
    if (seconds.current.length < 2) {
      return;
    }

    // Get the last two values
    const [previous, current] = seconds.current.slice(-2);

    console.log({ previous, current, maxTimePlayed });

    // Update the maxTimePlayed if the current played time is greater than the current maxTimePlayed
    if (maxTimePlayed === null || current > maxTimePlayed) {
      setMaxTimePlayed(current);
    }

    // Check if the current played time is less than the last played time
    if (current < previous) {
      console.log(
        "Return: Current played time is less than the last played time"
      );
      return;
    }

    // Check if the difference between the last two played times is greater than 30 seconds
    if (previous !== 0 && maxTimePlayed !== 0) {
      if (current > (maxTimePlayed as any) ?? 0) {
        if (current - previous > 30) {
          console.log(
            "Return: Difference between last two played times is greater than 30 seconds"
          );
          forceUpdate(maxTimePlayed);
          seconds.current = [maxTimePlayed, maxTimePlayed + 1];
          return;
        }
      }
    }

    seconds.current.length > 3 && seconds.current.shift();
  };

  return (
    <div className="w-full">
      <ReactPlayer
        controls
        playsinline
        url={mediaURL}
        width={"100%"}
        height={"100%"}
        ref={playerRef}
        playing={playing}
        onReady={handleReadyToWatch}
        onProgress={!isAlreadyRewarded ? progress : undefined}
      />
      {isLoading && <Loader thumbnail={thumbnail} />}
    </div>
  );
};

export default Player;
