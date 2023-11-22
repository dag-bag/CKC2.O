import Link from "next/link";
import Image from "next/image";
import { type ContentType } from ".";
import { BsDot } from "react-icons/bs";
interface Props {
  type?: ContentType;
  data?: ComicBook | any;
}

import { BiTime } from "react-icons/bi";

import Live from "./types/Live";
import { ComicBook } from "@/types/Content";
import { convertGradeToOrdinal } from "@/utils/grade";
import { estimateReadingTime } from "@/utils/time";

const course = {
  garde: "6th",
  required_credits: 100,
  duration: "10 minutes",
  name: "Quizmania - The untold story",
};

const Content: React.FC<Props> = ({ type, data }) => {
  if (type == "comics") {
    return <Comics {...data} />;
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
    return <Course />;
  }

  if (type == "video") {
    return <Video />;
  }
  return (
    <Link href="/dashboard/slug" className="rounded-xl">
      <div className="rounded-xl p-2">
        <div className="relative h-[170px] rounded-lg overflow-hidden">
          <Image src="/1.webp" alt="image" fill />
          <div className="absolute top-2 right-2 bg-white z-50  px-3 py-1.5 rounded-full text-sm font-heading">
            Best Seller
          </div>
        </div>

        <h3 className="font-medium font-heading mt-2 leading-5">
          Quizmania - The untold story
        </h3>
        <p className="text-sm text-gray-500  ">
          This is untold story of quizmania
        </p>
      </div>
    </Link>
  );
};

export default Content;

const Video = () => {
  return (
    <Link href="/library/video" className="rounded-xl">
      <div className="rounded-xl p-3  border-gray-100 font-heading">
        <div className="relative h-[170px] rounded-lg overflow-hidden">
          <Image src="/1.webp" alt="image" fill />
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

const Course = () => {
  return (
    <Link href="/dashboard/course" className="rounded-xl">
      <div className="rounded-xl p-3  border-gray-100 font-heading">
        <div className="relative h-[170px] rounded-lg overflow-hidden">
          <Image src="/1.webp" alt="image" fill />
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

const Comics = ({ content, name, grade, thumbnail, page_count }: ComicBook) => {
  return (
    <Link href="/library/comics" className="rounded-xl">
      <div className="rounded-xl p-3  border-gray-100 font-heading">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src={thumbnail} alt="image" fill />
          <div className="absolute top-2 right-2 bg-white z-50  px-3 py-1.5 rounded-full text-sm">
            Best Seller
          </div>
        </div>

        <p className="text-sm text-gray-500 flex items-center  mt-2 gap-1 ">
          <BiTime size={17} />
          <span className="text-gray-800 font-medium">
            {estimateReadingTime(page_count, 2)} min
          </span>
        </p>

        <h3 className="font-medium text-[18px] leading-5 mt-1">{name}</h3>

        <p className="text-sm text-gray-500 font-fun my-2 line-clamp-2">
          <span className="!font-heading text-black  ">Description &nbsp;</span>
          {content} Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className="grid grid-cols-2 mt-1">
          <p className="text-sm text-gray-800 flex items-center  ">
            Grade <BsDot />
            <span className="text-gray-800 font-medium">
              {convertGradeToOrdinal(grade)}
            </span>
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
