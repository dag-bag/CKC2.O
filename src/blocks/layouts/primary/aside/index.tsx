"use client";
import Image from "next/image";
import Button from "./LinkButton";
import { LeftButton2 } from "./LinkButton";
const Logo = () => {
  return (
    <div className="relative md:h-[70px] md:w-[95px] h-[40px] w-[55px] z-50 my-2 mx-auto">
      <Image alt="running" src={"/logo.png"} fill />
    </div>
  );
};

const LeftAside = () => {
  return (
    <aside className="hidden px-5 md:flex flex-col  gap-2 bg-white">
      <Logo />
      {primary_layout_left_buttons.map(({ title, Icon, hrefs }) => (
        <Button
          Icon={Icon}
          key={title}
          title={title}
          href={hrefs.at(0) as any}
        />
      ))}

      <div className="mt-auto mb-5">
        <button className=" font-josefin font-semibold border-2 w-full rounded-xl p-2 center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 16 16"
          >
            <path
              fill="gold"
              d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"
            ></path>
          </svg>
          Upgrade Plan
        </button>
      </div>
    </aside>
  );
};

export default LeftAside;

import {
  RiSettings4Fill,
  RiHomeSmile2Fill,
  RiStoreFill,
  RiBarChart2Fill,
  RiVipCrown2Fill,
  RiBrainFill,
  RiBook2Fill,
  RiLiveFill,
  RiQuestionFill,
} from "react-icons/ri";

const primary_layout_left_buttons = [
  { title: "Home", hrefs: ["/dashboard"], Icon: RiHomeSmile2Fill },
  { title: "Live", hrefs: ["/live"], Icon: RiLiveFill },
  { title: "Learn", hrefs: ["/learn"], Icon: RiBrainFill },
  { title: "Library", hrefs: ["/library"], Icon: RiBook2Fill },
  { title: "Challanges", hrefs: ["/challanges"], Icon: RiVipCrown2Fill },
  { title: "Leaderboard", hrefs: ["/leader"], Icon: RiBarChart2Fill },
  {
    title: "Discovery Jar",
    hrefs: ["/discovery-jar"],
    Icon: RiQuestionFill,
  },
  { title: "Marketplace", hrefs: ["/shop"], Icon: RiStoreFill },
  {
    title: "Refer & Earn",
    hrefs: ["/referral"],
    Icon: RiSettings4Fill,
  },
];
