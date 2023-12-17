"use client";

import Image from "next/image";
import VideoInfo from "../video/Info";
import ActionQuizBlock from "../course/ActionQuizBlock";
import ActivityPreparation from "./ActivityPreparation";
import {
  secondsToHoursMinutes,
  numbersStringToOrdinals,
} from "@/libs/convertors";
import Modules from "@/blocks/molecules/course/Modules";

const Header = ({
  thumbnail,
  title,
  desc,
  duration,
  price,
  grade,
  mentor,
  slug,
  mediaUrl,
  id,
  purchases,
  quiz,
  rewards,
  user,
  isAlreadyRewarded,
  trailer,
  modules,
  historyOfModules,
  locked,
  activity_modules,
  achievements,
}: any) => {
  return (
    <div className="grid xl:grid-cols-[auto_350px] gap-5 rounded-xl">
      <main className="mt-5">
        <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-12 md:aspect-h-5  xl:aspect-w-12 xl:aspect-h-7 ">
          {trailer ? (
            <MyPlayer mediaURL={trailer} thumbnail={thumbnail} />
          ) : (
            <Image
              fill
              src={thumbnail}
              alt="marval-image"
              className="rounded-xl w-full"
            />
          )}
        </div>
        <div className="px-5 mt-5">
          <div className="flex justify-between">
            <h1 className="font-amar font-bold text-3xl mb-2">{title}</h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 my-5">
            <Infor title="Author" value={mentor} />
            <Infor title="Credits Required" value={`${price} CRD`} />
            <Infor title="Grade" value={numbersStringToOrdinals(grade)} />
          </div>
          <p className=" font-heading text-gray-600">{desc}</p>
        </div>

        {activity_modules?.prepration_materials && (
          <ActivityPreparation
            prepration_materials={activity_modules.prepration_materials}
          />
        )}

        <Modules
          courseId={id}
          locked={locked}
          modules={modules}
          historyOfModules={historyOfModules}
          activity_modules={activity_modules}
          achievements={achievements}
        />
      </main>
      <aside>
        <div className="max-w-xl">
          <div className="grid gap-2">
            {locked && (
              <VideoInfo
                id={id}
                slug={slug}
                type="course"
                title={title}
                price={price}
                isLocked={locked}
                shareableURL={"something"}
                duration={secondsToHoursMinutes(duration)}
                reward={rewards?.map((rew: any) => rew.title).join(", ")}
              />
            )}
          </div>
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
import { useState } from "react";
import PlayerLoader from "../player/loader";
import ActionRewardBlock from "./ActionRewardBlock";

const MyPlayer = ({ mediaURL, thumbnail }: any) => {
  const [isLoading, setLoading] = useState(true);
  const handleReadyToWatch = () => {
    setLoading(false);
  };
  return (
    <div className="w-full">
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
