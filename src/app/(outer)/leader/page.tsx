"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
const LeaderboardData = [
  {
    rank: 1,
    badges: 42,
    name: "Alice",
    stars: "5,678",
    watched_videos: 31,
    readed_comics: 27,
    challanges_completed: 49,
  },
  {
    rank: 2,
    badges: 73,
    name: "Bob",
    stars: 9876,
    watched_videos: 58,
    readed_comics: 14,
    challanges_completed: 68,
  },
  {
    rank: 3,
    badges: 19,
    name: "Charlie",
    stars: 12345,
    watched_videos: 43,
    readed_comics: 30,
    challanges_completed: 55,
  },
  {
    rank: 4,
    badges: 65,
    name: "David",
    stars: 8765,
    watched_videos: 74,
    readed_comics: 10,
    challanges_completed: 41,
  },
  {
    rank: 5,
    badges: 51,
    name: "Eva",
    stars: 4321,
    watched_videos: 22,
    readed_comics: 39,
    challanges_completed: 26,
  },
  {
    rank: 6,
    badges: 37,
    name: "Frank",
    stars: 5432,
    watched_videos: 49,
    readed_comics: 52,
    challanges_completed: 37,
  },
  {
    rank: 7,
    badges: 88,
    name: "Grace",
    stars: 7654,
    watched_videos: 63,
    readed_comics: 18,
    challanges_completed: 71,
  },
  {
    rank: 8,
    badges: 28,
    name: "Hannah",
    stars: 6543,
    watched_videos: 35,
    readed_comics: 46,
    challanges_completed: 60,
  },
  {
    rank: 9,
    badges: 59,
    name: "Isaac",
    stars: 2345,
    watched_videos: 17,
    readed_comics: 25,
    challanges_completed: 33,
  },
  {
    rank: 10,
    badges: 47,
    name: "Jasmine",
    stars: 8765,
    watched_videos: 53,
    readed_comics: 28,
    challanges_completed: 44,
  },
];

import { BsChevronDown, BsDot } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
const solutions = [
  {
    name: "Leader Legends",
    description: "Measure actions your users take",
    href: "##",
    icon: RiGlobalLine,
  },
  {
    name: "October warrior",
    description: "Create your own targeted content",
    href: "##",
    icon: MdOutlineCalendarMonth,
  },
];

const Toggler = () => {
  return (
    <div className="w-full flex justify-center py-5 ">
      <div className="grid grid-cols-3 gap-2 w-[600px] px-2 py-2 border rounded-full">
        {["lifetime", "monthly", "weekly"].map((t) => (
          <button
            className={clsx(
              " bg-white rounded-full font-heading capitalize py-2 ",
              t == "lifetime" ? "!bg-lightblue text-white" : ""
            )}
            key={t}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

const Winners = () => {
  return (
    <div className=" flex justify-center mt-10">
      <div className="flex gap-10 items-end">
        <section>
          <Image
            src="/avatars/asian-man.png"
            alt="user"
            width={130}
            height={130}
            className="rounded-full"
          />
          <p className="text-center text-white font-heading text-md mt-2">
            Balli Kumar
          </p>
        </section>
        <section className="relative">
          <Image
            src="/avatars/punjabi.png"
            alt="user"
            width={180}
            height={180}
            className="rounded-full border-[5px] border-darkgold"
          />
          <Image
            src="/leader.png"
            alt="user"
            width={100}
            height={100}
            className=" absolute right-0 top-[110px] animate-bounce"
          />
          <p className="text-center text-white font-heading text-2xl mt-2">
            Punjabi Singh
          </p>
        </section>
        <section>
          <Image
            src="/avatars/black-man.png"
            alt="user"
            width={130}
            height={130}
            className="rounded-full"
          />
          <p className="text-center text-white font-heading text-md mt-2">
            Kumar Rawat
          </p>
        </section>
      </div>
    </div>
  );
};

const LeaderboardPage = () => {
  const { data } = useQuery({
    queryKey: ["leaderboardData"],
    queryFn: getLeaderBoardData,
  });
  const [leaderboardType, setLeaderboardType] = useState<
    "Leader Legends" | "monthly warrior"
  >("Leader Legends");

  return (
    <div>
      {JSON.stringify(data)}
      <div
        id="header"
        className="bg-black/30  pt-5 pb-20 rounded-xl flex flex-col "
      >
        <Toggler />
        <Winners />
      </div>

      <div className="mt-10 flex flex-col gap-10 max-w-[1000px] mx-auto">
        <h3
          style={{
            textShadow: "2px 2px 2px #18007ac6",
          }}
          className="md:text-3xl text-lg font-semibold tracking-medium font-amar tracking-wide text-white"
        >
          My Rank
        </h3>
        <UserGrid rank={10} />
      </div>

      <div className="mt-10 flex flex-col gap-10 max-w-[1000px] mx-auto">
        <h3
          style={{
            textShadow: "2px 2px 2px #18007ac6",
          }}
          className="md:text-3xl text-lg font-semibold tracking-medium font-amar tracking-wide text-white"
        >
          Global Rankings
        </h3>
        {LeaderboardData.map((users) => (
          <UserGrid key={users.rank} {...users} />
        ))}
      </div>
    </div>
  );
};
export default LeaderboardPage;

import { SlBadge } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { BiSolidVideos } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import clsx from "clsx";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getLeaderBoardData } from "@/strapi/services/custom";

const DataHeader = () => {
  return (
    <div className="grid grid-cols-[200px_auto] items-center py-3">
      <div className="center">
        <span className="font-medium text-sm text-gray-500 uppercase tracking-wider font-heading pl-3">
          Rank
        </span>
      </div>
      <div className="grid grid-cols-[300px_1fr_1fr]  pr-5">
        <span className="font-medium text-sm text-gray-500 uppercase tracking-wider font-heading pl-3">
          Profile
        </span>
        <span className="font-medium text-md text-gray-500 uppercase-- tracking-wider font-heading pl-3">
          Stars
        </span>
        <span className="font-medium text-md text-gray-500 uppercase-- tracking-wider font-heading pl-3">
          Badges
        </span>
      </div>
    </div>
  );
};

const UserGrid = ({ rank, stars, name }: any) => {
  return (
    <div className="relative">
      <div
        id="rank"
        className="font-heading w-[50px] h-[50px] bg-blue-800 rounded-full border-2 center text-white text-2xl absolute -top-[25px] -left-[25px]"
      >
        {rank}
      </div>
      <div className="bg-white  font-heading grid grid-cols-[100px_150px_200px_3fr] gap-5 rounded-xl items-center px-5 py-2">
        <div className="center flex-col">
          <Image
            src="/avatars/black-man.png"
            alt="user"
            width={80}
            height={80}
            className="rounded-full border-2"
          />
          <p className="text-sm text-center text-gray-600 mt-2">{name}</p>
        </div>
        <div className="center flex-col space-y-2">
          <p className="text-sm text-gray-500">POINTS</p>
          <p className="text-xl font-semibold ">{stars}</p>
        </div>
        <div className="center flex-col space-y-2">
          <p className="text-sm text-gray-500">LEVEL</p>
          <div className="w-[65px] h-[65px] center bg-blue-500 rounded-full bg-[url('/pattern-2.jpg')]  text-white text-2xl drop-shadow-lg">
            12
          </div>
        </div>
        <div className="flex items-start flex-col space-y-2">
          <p className="text-sm text-gray-500">RECENT BADGES</p>
          <div className="flex gap-5">
            <div className="w-[65px] h-[65px] center bg-[url('/red.png')] bg-center bg-cover rounded-full text-2xl capitalize text-white">
              a
            </div>
            <div className="w-[65px] h-[65px] center bg-[url('/red.png')] bg-center bg-cover rounded-full text-2xl capitalize text-white">
              b
            </div>
            <div className="w-[65px] h-[65px] center bg-[url('/red.png')] bg-center bg-cover rounded-full text-2xl capitalize text-white">
              c
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
