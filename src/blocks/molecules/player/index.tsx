"use client";
import Loader from "./loader";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import useVideoPlayer from "@/hooks/useVideo";

interface Props {
  mediaURL: string;
  userId: string;
  thumbnail: string;
  contentId: string;
  contentType: string;
}

const Player: React.FC<Props> = ({
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

  return (
    <div className="w-full">
      <ReactPlayer
        muted
        playing
        controls
        playsinline
        url={mediaURL}
        width={"100%"}
        ref={playerRef}
        height={"100%"}
        onProgress={handleProgress}
        onReady={handleReadyToWatch}
      />
      {isLoading && <Loader thumbnail={thumbnail} />}
    </div>
  );
};

export default Player;
