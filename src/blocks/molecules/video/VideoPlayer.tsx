"use client";

interface Props {
  id: number;
  type: string;
  desc: string;
  title: string;
  price: number;
  grade: string;
  mediaUrl: string;
  thumbnail: string;
  isUnlocked: boolean;
}

import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import PlayerLoader from "../player/loader";
import useRecentlyWatched from "@/hooks/useRecentlyWached";

const VideoPlayer: React.FC<Props> = ({
  id,
  desc,
  type,
  title,
  grade,
  mediaUrl,
  thumbnail,
  isUnlocked,
}) => {
  const { addToRecentlyWatched } = useRecentlyWatched();
  const onPlayHandler = () => {
    addToRecentlyWatched({
      id,
      type,
      title,
      desc,
      grade,
      imgUrl: thumbnail,
    });
  };
  return (
    <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-8 md:aspect-h-5 xl:aspect-w-12 xl:aspect-h-7 ">
      {!isUnlocked ? (
        <Image fill src={thumbnail} alt={title} className="rounded-xl w-full" />
      ) : (
        <Player
          mediaURL={mediaUrl}
          thumbnail={thumbnail}
          onPlayHandler={onPlayHandler}
        />
      )}
    </div>
  );
};

export default VideoPlayer;

interface PlayerProps {
  mediaURL: string;
  thumbnail: string;
  onPlayHandler: () => void;
}

const Player: React.FC<PlayerProps> = ({
  mediaURL,
  thumbnail,
  onPlayHandler,
}) => {
  const [isLoading, setLoading] = useState(true);
  const handleReadyToWatch = () => {
    onPlayHandler();
    setLoading(false);
  };
  return (
    <div>
      <ReactPlayer
        controls
        playsinline
        url={mediaURL}
        width={"100%"}
        height={"100%"}
        onReady={handleReadyToWatch}
      />
      {isLoading && <PlayerLoader thumbnail={thumbnail} />}
    </div>
  );
};
