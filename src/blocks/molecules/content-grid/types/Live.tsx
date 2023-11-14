"use client";

import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import clsx from "clsx";
const course = {
  garde: "6th",
  required_credits: 100,
  duration: "10 minutes",
  name: "Quizmania - The untold story",
};

interface Props {
  type: "running" | "upcoming" | "recording";
  premium?: boolean;
}

const Live = ({ type, premium }: Props) => {
  const isLive = type == "running";
  const isUpcoming = type == "upcoming";
  const isRecorded = type == "recording";
  return (
    <Link href="/live/slug" className="rounded-xl">
      <div
        className={clsx("rounded-xl p-2 border-gray-100 border font-heading")}
      >
        <div className="relative h-[170px] rounded-lg overflow-hidden">
          <Image src="/1.webp" alt="image" fill />
          {premium && (
            <div className="absolute bottom-2 border border-white right-2 text-yellow-100 bg-gradient-to-r from-yellow-800 to-yellow-500 z-50  px-3 py-1.5 rounded-md text-sm capitalize">
              Premium Content
            </div>
          )}

          {isLive && (
            <div className="absolute flex items-center top-2 border text-white right-2 bg-black z-50  px-5 py-1.5 rounded-md text-sm capitalize">
              Live
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500 flex items-center  mt-2 gap-1 ">
          <BiTime size={17} />
          {isLive && (
            <span className="text-gray-800 font-medium">{course.duration}</span>
          )}
          {isUpcoming && (
            <span className="text-gray-800 font-medium">20 Nov, 12:30</span>
          )}
          {isRecorded && (
            <span className="text-gray-800 font-medium">2h 30m</span>
          )}
        </p>
        <h3 className="font-medium text-[18px] leading-5 mt-1">
          {course.name}
        </h3>
        <div className="grid grid-cols-2 mt-1">
          <p className="text-sm text-gray-800 flex items-center">
            Grade <BsDot />
            <span className="text-gray-800 font-medium">{course.garde}</span>
          </p>

          <p className="text-sm text-gray-800  rounded-full center">
            Credits <BsDot />
            <span className="text-gray-800 font-medium">
              {course.required_credits}
            </span>
          </p>
        </div>
        <div
        // className={clsx(isUpcoming && "grid grid-cols-2 gap-2")}
        >
          {isLive && (
            <button className={"border-2 w-full py-1.5 rounded-full mt-2"}>
              Join
            </button>
          )}

          {isUpcoming && (
            <button className="border-2 w-full py-1.5 rounded-full mt-2 ">
              Set Remainder
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Live;

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const PremiumRequired = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <button
        onClick={open}
        className="border-2 w-full py-1.5 rounded-full mt-2"
      >
        Join
      </button>
      <Modal title="Alert" opened={opened} onClose={close}>
        <div>You need to upgrade plan</div>
        <button className="border-2 w-full py-1.5 rounded-full mt-2 bg-yellow-500 ">
          Upgrade Plan
        </button>
      </Modal>
    </div>
  );
};
