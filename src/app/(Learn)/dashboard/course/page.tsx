/* eslint-disable @next/next/no-img-element */
"use client";

import { BiBook, BiTime, BiSpeaker } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { BiHeart, BiShare, BiAddToQueue } from "react-icons/bi";
import { RiCopperDiamondLine } from "react-icons/ri";
import { useState } from "react";
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
                  {/* <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <FiUsers size={16} /> Students <BsDot />
                    </p>
                    <p>3,215</p>
                  </div> */}
                  <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <BiTime size={16} /> Duration <BsDot />
                    </p>
                    <p>2h 24m</p>
                  </div>
                  <div className="flex gap-2 font-100">
                    <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
                      <BiSpeaker size={16} /> Language <BsDot />
                    </p>
                    <p>English</p>
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
            <Modules />
            <Quiz />
            <Reward />
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
      className=" h-[500px] rounded-xl bg-cover bg-no-repeat bg-center flex items-end justify-end p-10"
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
import Card from "@/blocks/UI/Card";
import { Accordion } from "@mantine/core";
const Modules = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-heading font-semibold mb-2 text-gray-700">
        Modules & Quiz
      </h3>

      <section className="space-y-5">
        <Accordion>
          {modules.map((item, i) => {
            return <Module {...item} key={i} />;
          })}
        </Accordion>
      </section>
    </div>
  );
};

const supplies = [
  {
    title: "Big Dipper Star Poster",
    description:
      "High-quality printed poster of the Big Dipper constellation. Suitable for classroom use or personal reference.",
    type: "printout",
    quantity: "Print 25 copies",
    products: [
      {
        name: "Big Dipper Poster",
        productImage: "/big_dipper_poster.png",
        description: "Glossy finish, A3 size",
      },
    ],
  },

  {
    title: "Starry Night Sky Maps",
    description:
      "A collection of various star maps showing different constellations. Ideal for classroom activities or personal exploration.",
    type: "printout",
    quantity: "Print 20 copies",
    products: [
      {
        name: "Starry Night Maps",
        productImage: "/starry_night_maps.png",
        description: "Variety of constellation maps included",
      },
    ],
  },

  {
    title: "Safety Scissors",
    description:
      "Child-safe scissors suitable for classroom activities or projects. Designed for easy and safe use by kids.",
    type: "tool",
    quantity: "40 Pairs",
    products: [
      {
        name: "Safety Scissors",
        productImage: "/safety_scissors.png",
        description: "Rounded tip, colorful handles",
      },
    ],
  },

  {
    title: "Assorted Color Stickers",
    description:
      "Colorful stickers for marking or highlighting specific stars or constellations on maps. Easy to use and distribute.",
    type: "simple",
    quantity: "150 Sheets",
    products: [
      {
        name: "Colorful Sticker Set",
        productImage: "/color_stickers.png",
        description: "Assorted shapes and sizes",
      },
    ],
  },

  {
    title: "Assorted Push Pins",
    description:
      "Metallic push pins for pinning maps or posters onto boards or walls. Suitable for displaying star maps.",
    type: "simple",
    quantity: "100 Pins",
    products: [],
  },
];

const Product = ({ name, description }: any) => {
  return (
    <div className="grid grid-cols-[80px_120px] gap-1 bg-gray-50 w-[200px] h-[60px] rounded-lg overflow-hidden">
      <div className="w-full h-full bg-[url(/pp-1.jpg)] bg-cover bg-center rounded-lg"></div>
      <div className="p-1.5">
        <h5 className="text-sm capitalize font-heading">
          {name.slice(0, 13)}...
        </h5>
        <p className="text-xs text-gray-500">{description.slice(0, 22)}...</p>
      </div>
    </div>
  );
};

const Activity = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-2 gap-5 mb-5">
      <Card title="Activity Preparation">
        <Accordion value={value} onChange={setValue}>
          {supplies.map((item) => {
            const isActive = value == item.title;
            return (
              <Accordion.Item
                key={item.title}
                value={item.title}
                className={isActive ? "!bg-white" : undefined}
              >
                <Accordion.Control>
                  <div className="flex items-center justify-between pr-5">
                    <h5 className="font-heading">{item.title}</h5>
                    <h6 className="font-heading font-medium text-sm text-gray-500">
                      {item.quantity} {JSON.stringify(isActive)}
                    </h6>
                  </div>
                </Accordion.Control>
                <Accordion.Panel>
                  <section>
                    <p className=" text-gray-800">{item.description}</p>
                  </section>
                  {item?.products?.length !== 0 && (
                    <section className="mt-3">
                      <h5 className="font-heading mb-2">Suggested Products</h5>
                      <div className="flex gap-2">
                        {item.products.map((product, i) => (
                          <Product {...product} key={i} />
                        ))}
                      </div>
                    </section>
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Card>
    </div>
  );
};

import { BsDot } from "react-icons/bs";

import { useDisclosure } from "@mantine/hooks";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

import { BsPlayCircle, BsCloudUpload } from "react-icons/bs";

const Module = ({ title, unlock }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  const isActivityModule = title == "Activity Time!";

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <ModuleScreenPPT />
      </Modal>
      <Accordion.Item value={title}>
        <Accordion.Control
          icon={
            unlock ? (
              <BiLockOpenAlt color="green" />
            ) : (
              <BiLockAlt color="black" />
            )
          }
        >
          <h3 className="font-heading text-lg font-semibold text-gray-800  ">
            {title}
          </h3>
          {unlock && <Progress />}
        </Accordion.Control>
        <Accordion.Panel>
          <p className="text-sm text-gray-700 flex items-center mb-3 ">
            <BiTime size={16} className="mr-1" /> Exploration Time <BsDot />
            <span className="text-gray-700 font-medium">3 Minutes</span>
          </p>
          {!isActivityModule && (
            <p className=" text-gray-600 mb-3">
              a. Learn the surface features. <br />
              b. Understand the atmosphere. <br />
              c. Life possibility on these planets
            </p>
          )}
          {isActivityModule && <Activity />}

          <div className="flex gap-5">
            <button
              disabled={!unlock}
              onClick={open}
              className="font-heading border  px-10 py-2.5 rounded-full flex items-center gap-2 disabled:opacity-40"
            >
              <BsPlayCircle /> {isActivityModule ? "Preview Activity" : "Play"}
            </button>

            {isActivityModule && (
              <button className="font-heading border px-10 py-2.5 rounded-full flex items-center gap-2 disabled:opacity-40">
                <BsCloudUpload /> Upload Activity
              </button>
            )}
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </>
  );
};

import { Carousel } from "@mantine/carousel";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

const ppt = ["/pp-1.jpg", "/ppt-2.png", "/ppt-3.png"];
import { Modal } from "@mantine/core";
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
import Image from "next/image";
const Reward = () => {
  return (
    <div className="mt-8 mb-10">
      <h3 className="text-xl font-heading font-semibold mb-2 text-gray-700">
        Rewards
      </h3>
      <div className="h-[300px] rounded-xl grid grid-cols-5 p-5 bg-gradient-to-r from-purple-50 to-blue-50 gap-5">
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 1</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 2</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 3</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module 4</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After completion Module Quiz</p>
        </div>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <div className="grid grid-cols-10 gap-1 my-1 max-w-sm">
      <div className="h-[2px] bg-green-500 rounded-full"></div>
      <div className="h-[2px] bg-green-500 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
      <div className="h-[2px] bg-gray-200 rounded-full"></div>
    </div>
  );
};
