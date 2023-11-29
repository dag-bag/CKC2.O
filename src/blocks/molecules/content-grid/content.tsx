"use client";

import Link from "next/link";
import Image from "next/image";
import { type ContentType } from ".";
import { BsDot } from "react-icons/bs";
interface Props {
  type?: ContentType;
}

import { BiTime } from "react-icons/bi";
import CourseCard from "../cards/Course";
import Live from "./types/Live";

const course = {
  garde: "6th",
  required_credits: "1,459",
  duration: "10 M",
  name: "What if Jupiter never existed in our solar system?",
};

const Content: React.FC<Props> = ({ type }) => {
  const MotionLink = motion(Link);

  if (type == "comics") {
    return <Comics />;
  }
  if (type == "live_upcoming") {
    return <Live type="upcoming" />;
  }
  if (type == "live_now") {
    return <Live type="running" />;
  }

  if (type == "live_now_premium") {
    return <Live premium type="running" />;
  }

  if (type == "live_past_premium") {
    return <Live premium type="recording" />;
  }

  if (type == "live_upcoming_premium") {
    return <Live premium type="upcoming" />;
  }

  if (type == "live_past") {
    return <Live type="recording" />;
  }

  if (type == "course") {
    return <CourseCard />;
  }

  if (type == "video") {
    return <Video />;
  }

  return <WatchedCard />;
};

import WatchedCard from "../cards/Watched";

const Progress = () => (
  <div className="h-1 absolute top-[98.5%] left-0 w-full">
    <div className="w-[30%] h-1 bg-red-500 rounded-e-full "></div>
  </div>
);

export default Content;

const Video = () => {
  return (
    <Link href="/library/video" className="rounded-xl">
      <div className="rounded-xl border-gray-100 font-heading bg-[url(/gold-pattern.png)] overflow-hidden hover:shadow-lg duration-300 hover:shadow-black ">
        {/* <div className="relative h-[170px] rounded-lg overflow-hidden">
          <Image src="/1.webp" alt="image" fill />
          <div className="absolute top-2 right-2 bg-white z-50  px-3 py-1.5 rounded-full text-sm">
            Best Seller
          </div>
        </div> */}

        <div className="relative aspect-w-10 aspect-h-6 rounded-lg overflow-hidden">
          <Image src="/1.webp" alt="image" fill />
          {/* <div className="absolute top-2 right-2 bg-white z-50  px-3 py-1.5 rounded-full text-sm font-heading">
            Best Seller
          </div> */}
        </div>

        <div className="p-5 bg-gradient-to-t from-black/30 ">
          <p className="text-sm text-black flex items-center mb-2 gap-1 ">
            <BiTime size={17} />
            <span className="text-black font-medium">{course.duration}</span>
          </p>

          <h3
            style={{
              textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
            }}
            className="font-medium text-2xl  leading-6  z-50 relative text-white"
          >
            {course.name}
          </h3>

          <p className=" text-black font-heading my-2 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            dolorum.
          </p>

          <div className="flex justify-between mt-1">
            <p className="md:text-sm text-xs black flex items-center  ">
              Grade <BsDot />
              <span className="black">{course.garde}</span>
            </p>

            <p className="text-sm text-gray-800 bg-white md:p-1.5 p-1 border md:px-5 px-2 rounded-full center md:gap-2 gap-1">
              <Image width={25} height={25} alt="123" src={"/coin3.png"} />
              <span className="text-gray-800 font-medium md:text-md text-xs">
                {course.required_credits}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
import { IoPlay } from "react-icons/io5";
import { motion, useAnimate, useAnimation } from "framer-motion";
const Coursesss = () => {
  const MotionLink = motion(Link);
  const rocket = useAnimation();
  return (
    <>
      <MotionLink
        onHoverStart={() => {
          rocket.start({ x: 0, y: 0, transition: { duration: 1 } });
        }}
        onHoverEnd={() => {
          rocket.start({ x: 100, y: 100, transition: { duration: 1 } });
        }}
        href="/dashboard/course"
        className="rounded-xl"
      >
        <div className="rounded-xl bg-blue-800 font-heading group hover:scale-95 scale duration-200 shadow-sm">
          <div className="relative aspect-w-10 aspect-h-6 rounded-2xl overflow-hidden">
            <Image src="/jupiter.jpg" alt="image" fill />
            {/* <div className="absolute top-2 right-2 bg-white z-50  px-3 py-1.5 rounded-full text-sm font-heading">
            Best Seller
          </div> */}
            <div className="w-full h-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-200">
              <button className="w-[45px] h-[45px] bg-indigo-500 center rounded-full text-white absolute bottom-3 right-3 shadow-xl">
                <IoPlay size={22} />
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundImage: "url(/topography.svg)",
            }}
            className="md:p-5 p-2 pt-3 bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500  rounded-b-xl  "
          >
            <div className="flex items-center justify-between gap-3 ">
              <h3 className="font-medium text-2xl leading-6 mt-1 hidden md:block text-white ">
                {course.name}
              </h3>
              <h3 className="font-medium text-sm leading-5 mt-1 block md:hidden">
                What if Jupiter never existed...
              </h3>
              <div className="min-w-[60px] hidden md:block">
                <p className="text-sm text-gray-200 flex items-center mt-2 gap-1 ">
                  <BiTime size={17} />
                  <span className="text-gray-200 font-semibold">
                    {course.duration}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 font-josefin mt-2 mb-1.5 tracking-[-2%] hidden md:block">
              Join us on a mind-bending journey through an alternate solar
              system...
            </p>

            <div className="flex justify-between mt-1">
              <p className="md:text-sm text-xs text-gray-300 flex items-center  ">
                Grade <BsDot />
                <span className="text-gray-300">{course.garde}</span>
              </p>

              <p className="text-sm text-gray-800 bg-white md:p-1.5 p-1 border md:px-5 px-2 rounded-full center md:gap-2 gap-1">
                <Image width={25} height={25} alt="123" src={"/coin3.png"} />
                <span className="text-gray-800 font-medium md:text-md text-xs">
                  {course.required_credits}
                </span>
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{
            x: 100,
            y: 100,
          }}
          animate={rocket}
          className="absolute z-50 bottom-0"
        >
          <Image width={100} height={100} alt="n" src={"/astro-riding.webp"} />
        </motion.div>
      </MotionLink>
    </>
  );
};

const Comics = () => {
  return (
    <Link href="/library/comics" className="rounded-xl">
      <div className="rounded-xl p-3  border-gray-100 font-heading">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/comic.jpg" alt="image" fill />
          <div className="absolute top-2 right-2 bg-white z-50  px-3 py-1.5 rounded-full text-sm">
            Best Seller
          </div>
        </div>

        <p className="text-sm text-gray-500 flex items-center  mt-2 gap-1 ">
          <BiTime size={17} />
          <span className="text-gray-800 font-medium">{course.duration}</span>
        </p>

        <h3 className="font-medium text-[18px] leading-5 mt-1">
          {course.name}
        </h3>

        <p className="text-sm text-gray-500 font-fun my-2">
          <span className="!font-heading text-black">Description &nbsp;</span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className="grid grid-cols-2 mt-1">
          <p className="text-sm text-gray-800 flex items-center  ">
            Grade <BsDot />
            <span className="text-gray-800 font-medium">{course.garde}</span>
          </p>

          <p className="text-sm text-gray-800 bg-gray-100 p-2 rounded-full center">
            Credits <BsDot />
            <span className="text-gray-800 font-medium">
              {course.required_credits}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

const LiveContent = () => {
  return (
    <div className="rounded-xl p-2 bg-black text-white ">
      <div className="bg-blue-100 h-[180px] rounded-lg bg-[url('/bg-1.jpg')] bg-cover relative">
        <LiveTag />
      </div>

      <div>
        <h3 className="text-lg font-medium mt-2">Cosmic Quiz Mania Live!</h3>
        <p className="text-sm mb-2 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-white w-full text-black px-5 py-2  gap-2 text-sm font-medium rounded-lg">
          Join Now
        </button>
      </div>
    </div>
  );
};

const LiveUpcomingContent = () => {
  return (
    <div className="rounded-xl p-2 bg-black text-white ">
      <div className="bg-blue-100 h-[180px] rounded-lg bg-[url('/live.avif')] bg-cover relative">
        <p className="text-sm absolute top-2 left-2 rounded-xl inline tracking-wide text-white bg-black px-4 py-2">
          10 days left
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium mt-2">Cosmic Quiz Mania Live!</h3>
        <p className="text-sm rounded-xl inline uppercase tracking-wide text-indigo-300">
          25 December, 5 PM
        </p>
        <p className="text-sm mb-2 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-white w-full text-black px-5 py-1.5  gap-2 text-sm font-medium rounded-lg">
            Notify Me
          </button>
          <button className="bg-white-- w-full text-white border-2 px-5 py-1.5  gap-2 text-sm font-medium rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const LiveTag = () => {
  return (
    <div className="bg-red-500 px-3 py-1 top-2  right-2 absolute text-white rounded-lg flex items-center gap-2 ">
      <div className="w-[8px] h-[8px] bg-white rounded-full "></div>
      <p className="text-sm font-medium">Live</p>
    </div>
  );
};
