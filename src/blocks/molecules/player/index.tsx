"use client";
import useVideoPlayer from "@/hooks/useVideo";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Loader } from "@mantine/core";
import useSession from "@/hooks/use-session";
const Player = ({
  mediaURL,
  thumbnail,
  contentId,
  contentType,
  userId,
}: any) => {
  const [isLoading, setLoading] = useState(true);
  const { handleProgress } = useVideoPlayer({
    contentId: contentId,
    contentType: "video",
    userId: `${userId}`,
  });

  const handleReadyToWatch = () => {
    setLoading(false);
  };

  return (
    <div className="w-full">
      <ReactPlayer
        muted
        controls
        playsinline
        url={mediaURL}
        width={"100%"}
        height={"100%"}
        onProgress={handleProgress}
        onReady={handleReadyToWatch}
      />
      {isLoading && <PlayerLoader thumbnail={thumbnail} />}
    </div>
  );
};

export default Player;

const PlayerLoader = ({ thumbnail }: any) => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="w-full h-full relative overflow-hidden rounded-xl">
        <Image
          src={thumbnail}
          alt="marval-iamge"
          className="rounded-xl w-full"
          fill
        />
        <div className="w-full h-full backdrop-blur-sm absolute top-0 left-0 bg-black/50 center">
          <Loader color="white" />
        </div>
      </div>
    </div>
  );
};
