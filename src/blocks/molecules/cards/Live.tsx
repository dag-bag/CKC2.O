const course = {
  garde: "6th",
  duration: "10 M",
  thumbnail: "/jupiter.jpg",
  required_credits: "1,459",
  name: "What if Jupiter never existed in our solar system?",
  desc: "Join us on a mind-bending journey through an alternate solar system...",
};

import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { Tooltip } from "@mantine/core";
import { IoPlay } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";
import { IoPersonAdd } from "react-icons/io5";
import { PiBellRingingFill } from "react-icons/pi";

const actions: any = {
  running: {
    title: "Join",
    Icon: IoPersonAdd,
  },
  upcoming: {
    title: "Set Remainder",
    Icon: PiBellRingingFill,
  },
  recording: {
    title: "Play",
    Icon: IoPlay,
  },
};

const LiveCard = ({
  type,
  thumbsnail,
  title,
  desc,
  grade,
  price,
  premium,
  slug,
  id,
  isUnlocked,
}: any) => {
  const Action = actions[type];
  return (
    <>
      <Link href={`/live/${id}`} className="overflow-hidden relative">
        <div className="content_card group hover:scale-90 scale duration-500">
          <div className="top">
            <Image src={course.thumbnail} alt={course.name} fill />
            {Action && (
              <div className="w-full h-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-200">
                <Tooltip withArrow label={Action.title}>
                  <button className="w-[45px] h-[45px] bg-indigo-500 center gap-1 rounded-full text-white absolute bottom-3 right-3 shadow-xl">
                    <Action.Icon size={20} />{" "}
                  </button>
                </Tooltip>
              </div>
            )}

            {premium && (
              <div className="w-full h-full">
                <button className=" bg-black  border-blue-500 border md:text-sm]  tracking-wide px-5 py-1.5 text-sm center gap-1 rounded-full text-white absolute bottom-3 left-3 shadow-xl">
                  Premium
                </button>
              </div>
            )}
          </div>

          <div className="bottom group-hover:bg-bottom  duration-500 ">
            {type == "upcoming" && (
              <div className="min-w-[60px] hidden md:block">
                <p className="text-sm text-[#4D4D4D] flex items-center mt-2 gap-1 ">
                  <BiCalendar size={17} />
                  <span className="text-[#4D4D4D]">12/11/2023, 3:45 AM</span>
                </p>
              </div>
            )}
            <h3 className="question">{course.name}</h3>
            <p className="description">{course.desc}</p>
            <div className="flex justify-between mt-1">
              {/* Grade Specific  */}
              <p className="md:text-sm text-xs text-[#4D4D4D] flex items-center">
                Grade <BsDot />
                <span>{course.garde}</span>
              </p>
              {/* Credits Required */}
              <p className="text-sm  bg-[#F7991E] shadow-md md:p-1.5 p-1 md:px-5 px-2 rounded-full center md:gap-2 gap-1">
                <Image width={25} height={25} alt="123" src={"/coin3.png"} />
                <span className="text-white font-medium md:text-[15px] tracking-wider text-xs">
                  {course.required_credits}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LiveCard;
