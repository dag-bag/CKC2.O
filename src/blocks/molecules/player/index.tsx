"use client";
import Loader from "./loader";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useVideoPlayer from "@/hooks/useVideo";
import { createReward } from "@/strapi/services/custom";
import RewardPopup from "../popups/reward";
import { useDisclosure } from "@mantine/hooks";
import useRecentlyWatched from "@/hooks/useRecentlyWached";

interface Props {
  rewards: any[];
  userId: string;
  duration: string;
  mediaURL: string;
  thumbnail: string;
  contentId: string;
  contentType: string;
  isAlreadyRewarded: boolean;
  title: string;
  desc: string;
  grade: number;
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
  title,
  desc,
  grade,
}) => {
  const { addToRecentlyWatched, recentlyWatched } = useRecentlyWatched();
  const router = useRouter();
  const seconds = useRef<any>([]);
  const playerRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [opened, popupHandler] = useDisclosure(false);
  const [maxTimePlayed, setMaxTimePlayed] = useState<number>(0);

  // handle forcefully update timestamp with validation
  const forceUpdate = (value: number) => {
    if (!playerRef.current) return;
    setPlaying(false);
    playerRef.current.seekTo(value, "seconds");
    setPlaying(true);
  };

  // handling records

  const handleReadyToWatch = () => {
    addToRecentlyWatched({
      title: title,
      desc: desc,
      imgUrl: thumbnail,
      grade: grade,
      id: parseInt(contentId),
      type: contentType,
    });
    setLoading(false);
  };

  const progress = (state: { playedSeconds: number }) => {
    const playedSeconds = Math.round(state.playedSeconds);
    console.log({ duration, played: playedSeconds });

    // sending user completion of video
    if (!isAlreadyRewarded) {
      // [tracking user watched]
      // [end of video]
      if (parseInt(duration) === playedSeconds) {
        popupHandler.open();
        createReward({
          user: userId,
          reward_id: rewards.at(0).id,
          coins: 100,
          type: "video",
        } as any).then(() => {
          // update({ coins: 100, type: "add" } as any);
        });
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
      if (current - previous < 30) {
        setMaxTimePlayed(current);
      }
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
      {opened && (
        <RewardPopup
          points={100}
          title="Congrats!"
          desc="quiz is unlocked!"
          onClose={() => {
            router.refresh();
            popupHandler.close();
          }}
        />
      )}
      <ReactPlayer
        controls
        playsinline
        url={mediaURL}
        width={"100%"}
        height={"100%"}
        ref={playerRef}
        onReady={handleReadyToWatch}
        onProgress={!isAlreadyRewarded ? progress : undefined}
      />
      {isLoading && <Loader thumbnail={thumbnail} />}
    </div>
  );
};

export default Player;
