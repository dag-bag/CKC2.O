"use client";

import Image from "next/image";
import ActionQuizBlock from "../course/ActionQuizBlock";

import {
  secondsToHoursMinutes,
  numbersStringToOrdinals,
} from "@/libs/convertors";

const Header = ({ thumbnail, title, desc, slug, mediaUrl, id }: any) => {
  return (
    <div className="grid xl:grid-cols-[auto_350px] gap-5 rounded-xl">
      <main>
        <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-12 md:aspect-h-5  xl:aspect-w-12 xl:aspect-h-7 ">
          <Player mediaUrl={mediaUrl} thumbnail={thumbnail} />
        </div>
        <div className="px-5 mt-5">
          <div className="flex justify-between">
            <h1 className="font-amar font-bold text-3xl mb-2">{title}</h1>
          </div>
          <p className="font-heading text-gray-600">{desc}</p>
        </div>
      </main>
      <aside>
        <div className="max-w-xl">
          <div className="grid gap-2"></div>
        </div>
      </aside>
    </div>
  );
};

export default Header;

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <h5 className="text-lg font-amar font-semibold text-gray-800">{title}</h5>
      <p className="text-gray-700 font-heading">{value}</p>
    </div>
  );
};

import ReactPlayer from "react-player";
import PlayerLoader from "../player/loader";
import { useState } from "react";
const Player = ({ mediaUrl, thumbnail }: any) => {
  const [isLoading, setLoading] = useState(true);
  const handleReadyToWatch = () => {
    setLoading(false);
  };

  return (
    <div className="w-full">
      <ReactPlayer
        controls
        playsinline
        url={mediaUrl}
        width={"100%"}
        height={"100%"}
        onReady={handleReadyToWatch}
      />
      {isLoading && <PlayerLoader thumbnail={thumbnail} />}
    </div>
  );
};
