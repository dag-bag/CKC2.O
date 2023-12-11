"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import VideoInfo from "../video/Info";

const Header = ({
  thumbnail,
  mediaUrl,
  time_stamps,
  title,
  desc,
  mentor,
  duration,
  price,
  purchases,
  id,
}: any) => {
  const locked =
    price !== 0
      ? !purchases.map((pur: any) => pur.content_id).includes(id.toString())
      : false;
  return (
    <div className="grid xl:grid-cols-[auto_350px] gap-5 rounded-xl">
      <main>
        <div>
          {false ? (
            <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-12 md:aspect-h-5  xl:aspect-w-12 xl:aspect-h-7 ">
              <Image
                fill
                src={thumbnail}
                alt="marval-iamge"
                className="rounded-xl w-full"
              />
            </div>
          ) : (
            <Player {...{ thumbnail, mediaUrl, time_stamps }} />
          )}
        </div>

        <div className="px-5 mt-5">
          <div className="flex justify-between">
            <h1 className="font-amar font-bold text-3xl mb-2">{title}</h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  my-5">
            <Infor title="Author" value={mentor} />
          </div>
          <p className=" font-heading text-gray-600">{desc}</p>
        </div>
      </main>
      <div className="flex flex-col gap-5">
        {locked && (
          <VideoInfo
            {...({
              duration,
              title,
              price,
              reward: 0,
              slug: "hello",
              type: "jar",
              shareableURL: "deepak",
              isLocked: false,
              id: 1,
            } as any)}
          />
        )}
      </div>
    </div>
  );
};

const Chapters = ({ time_stamps, onClick, seconds }: any) => {
  return (
    <div className="p-5 pt-2 rounded-xl mt-5 bg-white">
      <h3 className="font-heading text-xl mb-2">Chapters</h3>
      <div className="flex gap-5">
        {time_stamps.map((time: any) => (
          <div
            onClick={() => {
              onClick(time.start_timestamp);
            }}
            style={
              seconds < time.end_stamp && seconds >= time.start_timestamp
                ? { border: "2px red solid" }
                : undefined
            }
            key={time.title}
            className=" w-[200px] p-3 rounded-xl bg-blue-50 font-heading cursor-pointer"
          >
            <h1 className="text-sm leading-5 mb-2 font-amar">{time.title}</h1>
            <div className="relative h-[30px] center">
              <div className="w-full h-[3px] bg-indigo-100 rounded-full"></div>
              <div className="flex items-center justify-between absolute top-1 left-0 w-full ">
                <span className="bg-indigo-200 p-1 px-2 text-xs rounded-sm ">
                  {formatSeconds(time.start_timestamp)}
                </span>
                <span className="bg-indigo-200 p-1 px-2 text-xs rounded-sm ">
                  {formatSeconds(time.end_stamp)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Player = ({ thumbnail, mediaUrl, time_stamps }: any) => {
  const playerRef = useRef<any>(null);
  const [isLoading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const forceUpdate = (value: number) => {
    if (!playerRef.current) return;
    setPlaying(false);
    playerRef.current.seekTo(value, "seconds");
    setPlaying(true);
  };

  const handleReadyToWatch = () => {
    console.log("here");
    setLoading(false);
    // forceUpdate(lastPlayed);
  };

  const handleClick = (number: number) => {
    setSeconds(number);
    forceUpdate(number);
  };

  const onProgress = (p: any) => {
    setSeconds(p.playedSeconds);
  };

  return (
    <>
      <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-12 md:aspect-h-5  xl:aspect-w-12 xl:aspect-h-7 ">
        <ReactPlayer
          controls
          playsinline
          url={mediaUrl}
          width={"100%"}
          height={"100%"}
          playing={playing}
          ref={playerRef}
          onProgress={onProgress}
          onReady={handleReadyToWatch}
        />
        {isLoading && <PlayerLoader thumbnail={thumbnail} />}
      </div>
      <Chapters
        seconds={seconds}
        onClick={handleClick}
        time_stamps={time_stamps}
      />
    </>
  );
};

import PlayerLoader from "../player/loader";
import ReactPlayer from "react-player";

export default Header;

function formatSeconds(seconds: number): string {
  // Calculate minutes and remaining seconds
  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;

  // Add leading zero if necessary
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds: string =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  // Combine minutes and seconds with a colon
  const formattedTime: string = `${formattedMinutes}:${formattedSeconds}`;

  return formattedTime;
}

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <h5 className="text-lg font-amar font-semibold text-gray-800">{title}</h5>
      <p className="text-gray-700 font-heading">{value}</p>
    </div>
  );
};
