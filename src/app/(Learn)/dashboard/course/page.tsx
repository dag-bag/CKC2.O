/* eslint-disable @next/next/no-img-element */
"use client";

import { BiBook, BiTime, BiSpeaker } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { BiHeart, BiShare, BiAddToQueue } from "react-icons/bi";
import { RiCopperDiamondLine } from "react-icons/ri";
const Page = () => {
  return (
    <div>
      <Player />

      <div className=" px-5">
        <div className="mt-5">
          <div>
            <section className="grid grid-cols-[2fr_1fr] gap-10">
              <div>
                <div>
                  <div>
                    <h1 className="text-3xl font-heading font-semibold leading-6 my-2 text-gray-700 ">
                      Learn Next.js 11 - Build Modern Next.js Applications
                    </h1>
                  </div>
                </div>

                <div className="mt-3 ">
                  <Description />
                </div>
              </div>
              <div className="bg-[#FAFAFB] p-10 rounded-lg font-heading">
                <h1 className="text-3xl font-game font-semibold">
                  400.99 <span className="text-sm">CRD</span>
                </h1>

                <section className="hidden">
                  <div>
                    <div>
                      <BiBook />
                    </div>
                    <div>
                      <p>Modules</p>
                      <p>5</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <BiBook />
                    </div>
                    <div>
                      <p>Difficulty</p>
                      <p>Moderate</p>
                    </div>
                  </div>
                </section>

                <section className="mt-5 space-y-1">
                  <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <FiUsers size={16} /> Students <BsDot />
                    </p>
                    <p>3,215</p>
                  </div>
                  <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <BiSpeaker size={16} /> Language <BsDot />
                    </p>
                    <p>English, Hindi</p>
                  </div>
                  <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <BiTime size={16} /> Duration <BsDot />
                    </p>
                    <p>2h 24m</p>
                  </div>

                  <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <FiUsers size={16} /> Modules <BsDot />
                    </p>
                    <p>4 (Activity & Quiz)</p>
                  </div>

                  <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <FiUsers size={16} /> Rewards <BsDot />
                    </p>
                    <p className=" leading-5">Upon completion of the course</p>
                  </div>
                </section>

                <section className="flex gap-2 mt-3">
                  <button className=" mt-3 py-2.5 px-5 flex items-center justify-center text-white  bg-black border rounded-xl font-heading flex-1 gap-2">
                    <BiLockAlt /> Unlock
                  </button>
                  <button className=" mt-3 py-2.5 px-5 flex items-center justify-center  border-gray-500 border rounded-xl font-heading flex-1 gap-2">
                    <BiShare /> Share
                  </button>
                </section>
              </div>
            </section>
            <About />
            <Modules />
            <Quiz />
            {/* <Gallary /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const Player = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/sun.jpg")' }}
      className=" h-[500px] rounded-xl bg-cover bg-no-repeat bg-center center"
    >
      <div className="px-10 py-2 bg-black rounded-full flex text-white gap-2 font-heading">
        <BiLockAlt color="white" size={22} /> Unlock
      </div>
    </div>
  );
};

const Description = () => {
  return (
    <div>
      <h3 className="text-xl font-heading font-semibold mt-8 mb-2 text-gray-700">
        Description
      </h3>
      <p className="text-gray-600 text-md ">
        In practice, digital marketing typically refers to marketing campaigns
        that appear on a computer, phone, tablet, or other device. It can take
        many forms, including online video, display ads, search engine
        marketing, paid social ads and social media posts. Digital marketing is
        often compared to “traditional marketing” such as magazine ads.
      </p>

      <p className="text-gray-600 text-md mt-2 ">
        In practice, digital marketing typically refers to marketing campaigns
        that appear on a computer, phone, tablet, or other device. It can take
        many forms, including online video, display ads, search engine
        marketing, paid social ads and social media posts. Digital marketing is
        often compared to “traditional marketing” such as magazine ads.
      </p>
    </div>
  );
};

const features = [
  {
    title: "Learn Capital Letters",
    description:
      "This course provides a comprehensive understanding of capitalization rules in writing, covering the basics and advanced usage of capital letters.",
  },
  {
    title: "Effective Business Writing",
    description:
      "Enhance your business communication skills through this course focusing on professional writing techniques, including emails, reports, and more.",
  },
  {
    title: "Creative Storytelling",
    description:
      "Explore the art of storytelling, learning various narrative techniques and unleashing your creative potential in writing captivating stories.",
  },
  {
    title: "Introduction to Poetry",
    description:
      "Dive into the world of poetry, discovering its diverse forms and techniques to craft expressive and emotive poetic works.",
  },
  {
    title: "Technical Writing Skills",
    description:
      "Develop essential technical writing abilities required across industries, mastering clarity and precision in conveying complex information.",
  },
  {
    title: "Mastering Grammar and Punctuation",
    description:
      "A comprehensive guide to mastering grammar rules and punctuation usage, ensuring clear and effective communication in writing.",
  },
];

const About = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-heading font-semibold mb-2 text-gray-700">
        Couse Outcomes
      </h3>
      <div className="grid grid-cols-3  rounded-xl overflow-hidden gap-3">
        {features.map((feature, i) => {
          return (
            <div key={i} className="p-10 bg-[#FAFAFB] rounded-xl">
              <span className="text-xl rounded-full font-game font-semibold">
                {i + 1}
              </span>
              <h3 className="font-heading text-xl font-semibold text-gray-800 my-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 ">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const modules = [
  {
    title: "The inner planets",
    unlock: true,
    img: "/sun.jpg",
  },
  {
    title: "The outer planets",
    unlock: false,
    img: "/sun.jpg",
  },

  {
    title: "The Life in the Solar Systems",
    unlock: false,
    img: "/sun.jpg",
  },
  {
    title: "Activity Time!",
    unlock: true,
    img: "/build.jpg",
  },
  {
    title: "Quiz Time! (Earn more Rewards)",
    unlock: false,
    img: "/quiz.jpg",
  },
];

import { BsArrowRight, BsPeople } from "react-icons/bs";

const Modules = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-heading font-semibold mb-2 text-gray-700">
        Modules & Quiz
      </h3>

      <section>
        <Carousel
          slideGap={"10px"}
          withIndicators
          slideSize={"33%"}
          slidesToScroll={3}
          previousControlIcon={
            <button className="w-[50px] h-[50px] bg-white opacity-100 rounded-full center">
              <HiMiniChevronLeft size={22} />
            </button>
          }
          nextControlIcon={
            <button className="w-[50px] h-[50px] bg-white opacity-100 rounded-full center">
              <HiMiniChevronRight size={22} />
            </button>
          }
          height={"100%"}
        >
          {modules.map((feature, i) => {
            return (
              <Carousel.Slide key={i + "lorme"}>
                <Module
                  unlock={feature.unlock}
                  img={feature.img}
                  title={feature.title}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
};

import { BsDot } from "react-icons/bs";

import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { useDisclosure } from "@mantine/hooks";

const Module = ({ title, unlock, img }: any) => {
  // const [state, setState] = useState(false);
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <ModuleScreenPPT />
      </Modal>
      <div className=" bg-white border border-gray-100 rounded-xl p-3">
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={` h-[200px] bg-cover rounded-xl  shadow-md bg-center relative `}
        >
          {unlock ? (
            <p className="center px-5 py-1.5 bg-green-500 text-white text-sm gap-1 rounded-full font-heading absolute top-3 right-3">
              <BiLockOpenAlt />
              Unlocked
            </p>
          ) : (
            <p className="center px-5 py-1.5 bg-white text-sm gap-1 rounded-full font-heading absolute top-3 right-3">
              <BiLockAlt />
              Locked
            </p>
          )}
        </div>
        {unlock && title !== "Activity Time!" && <Progress />}
        <h3 className="font-heading text-lg font-semibold text-gray-800 mt-3 ">
          {title}
          <p className="text-sm text-gray-700 flex items-center mt-1 ">
            <BiTime size={16} className="mr-1" /> Exploration Time <BsDot />
            <span className="text-gray-700 font-medium">3 Minutes</span>
          </p>
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          a. Learn the surface features. <br />
          b. Understand the atmosphere. <br />
          c. Life possibility on these planets
        </p>

        <button
          disabled={!unlock}
          onClick={
            title !== "Activity Time!"
              ? open
              : () => {
                  router.push("/dashboard/course/activity");
                }
          }
          className="font-heading border  px-10 py-2.5 rounded-full mt-5 flex items-center gap-2 disabled:opacity-40"
        >
          Let&apos;s start <BsArrowRight />
        </button>
      </div>
    </>
  );
};

import { Carousel } from "@mantine/carousel";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

const ppt = ["/pp-1.jpg", "/ppt-2.png", "/ppt-3.png"];
import { Modal } from "@mantine/core";
import { useRouter } from "next/navigation";
const ModuleScreenPPT = () => {
  return (
    <div className=" bg-white z-50">
      <div className="h-[100%]">
        <Carousel
          withIndicators
          height={"100%"}
          previousControlIcon={
            <button className="w-[50px] h-[50px] bg-white rounded-full center">
              <HiMiniChevronLeft size={22} />
            </button>
          }
          nextControlIcon={
            <button className="w-[50px] h-[50px] bg-white rounded-full center">
              <HiMiniChevronRight size={22} />
            </button>
          }
        >
          {ppt.map((src) => {
            return (
              <Carousel.Slide key={src}>
                <div>
                  <img
                    src={src}
                    className="w-full object-contain max-h-[calc(100vh-10vh)] border-red-500"
                    alt="any"
                  />
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const Quiz = () => {
  return (
    <div className="mt-8 mb-10">
      <h3 className="text-xl font-heading font-semibold mb-2 text-gray-700">
        Quizes
      </h3>
      <div className="h-[300px] rounded-xl grid grid-cols-[auto_2fr] p-5 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="bg-white shadow-md w-full h-full rounded-xl overflow-hidden">
          <img
            src="/quiz.jpg"
            alt=""
            className="rounded-xl w-[400px]- h-[300px] object-cover"
          />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-heading font-bold text-black opacity-70--">
            Engaging Learning through
            <span className=" text-purple-800 drop-shadow-md">
              {" "}
              Interactive Quizzes
            </span>
          </h1>
          <p className="text-lg mt-2 font-heading text-gray-800 hidden">
            Dive into our interactive quizzes for a fun learning experience!
            Test your knowledge, discover new insights, and enjoy diverse
            challenges. Join us in the quest for knowledge and fun
          </p>

          <div>
            <button className="inline-flex px-10 py-3 mt-5 border border-purple-500 text-purple-800 font-heading rounded-full  items-center gap-2">
              <BiLockAlt /> Unlock Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallary = () => {
  return (
    <div className="mt-8 mb-10">
      <h3 className="text-xl font-heading font-semibold mb-2 text-gray-700">
        Post Your Activity
      </h3>

      <div className="">
        <div
          style={{ backgroundImage: "url('/gallary.jpg')" }}
          className="h-[300px]  w-full border bg-center rounded-xl overflow-hidden"
        >
          <div className="w-full h-full center bg-black/30">
            <h1 className="text-5xl font-heading font-bold text-white">
              Post Your Activity
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 p-5">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/sun.jpg')" }}
        className="h-[200px] bg-cover rounded-xl"
      ></div>
      <div className="grid grid-cols-[40px_auto] gap-2 items-center py-2">
        <div className="h-[40px] w-[40px] rounded-full bg-gray-500"></div>
        <div>
          <h3 className="font-heading leading-4">Deepak Vishwakarma</h3>
          <p className="font-heading text-xs text-gray-500 flex items-center">
            St Marys Convent Bhopal <BsDot /> 6th Grade
          </p>
        </div>
      </div>
      {/* <h2 className="text-xl font-heading">Title of the course.</h2>
      <h2 className="text-sm font-heading">St Marys Convent Bhopal</h2>
      <h2 className="text-sm font-heading">6th </h2> */}
    </div>
  );
};

{
  /* <div className="bg-white mt-5 rounded-xl p-5">
<button className="font-heading flex w-full bg-gray-100 center gap-2 py-2 rounded-xl items-center">
  <GoShareAndroid /> Share
</button>
<p className="font-heading text-sm  font-light  py-2 inline-flex items-center gap-2 rounded-xl ">
  <PiUsersThree size={20} /> 10k Student Enrolled
</p>

<p className="font-heading text-sm  font-light  py-2 inline-flex items-center gap-2 rounded-xl ">
  <PiUsersThree size={20} /> 2h 30m total duration
</p>
</div> */
}

const Progress = () => {
  return (
    <div className="grid grid-cols-10 gap-1 my-3 px-2">
      <div className="h-[5px] bg-green-500 rounded-full"></div>
      <div className="h-[5px] bg-green-500 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
      <div className="h-[5px] bg-gray-200 rounded-full"></div>
    </div>
  );
};
