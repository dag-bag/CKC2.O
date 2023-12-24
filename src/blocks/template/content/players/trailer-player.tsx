"use client";

interface Props {
  title: string;
  trailerUrl: string;
  thumbnail: string;
}

import Image from "next/image";
import { useState } from "react";
import PlayerLoader from "@/blocks/molecules/player/loader";
import ReactPlayer from "react-player";

const TrailerPlayer: React.FC<Props> = ({ title, trailerUrl, thumbnail }) => {
  return (
    <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-12 md:aspect-h-5 xl:aspect-w-12 xl:aspect-h-7 ">
      {!trailerUrl ? (
        <Image fill src={thumbnail} alt={title} className="rounded-xl w-full" />
      ) : (
        <Player mediaURL={trailerUrl} thumbnail={thumbnail} />
      )}
    </div>
  );
};

export default TrailerPlayer;

interface PlayerProps {
  mediaURL: string;
  thumbnail: string;
}

const Player: React.FC<PlayerProps> = ({ mediaURL, thumbnail }) => {
  const [isLoading, setLoading] = useState(true);
  const handleReadyToWatch = () => {
    setLoading(false);
  };
  return (
    <div className="relative">
      <TrailerTag />
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

const TrailerTag = () => {
  return (
    <div className="bg-lightblue absolute top-10 left-10 text-white border-2 px-10 py-2 rounded-full font-heading text-lg">
      Trailer
    </div>
  );
};
