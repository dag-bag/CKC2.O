"use client";
// Snake.js
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const realign = (state: any) => {
  const realignment: any = {
    30: -120,
    60: -70,
    90: -60,
  };
  return realignment[state];
};

const curveyPath =
  "M262.794 1C262.794 1 362.072 55.0621 262.794 109.423C163.516 163.784 184.575 212.47 262.794 241.741C341.013 271.012 382.954 318.204 262.794 368.384C142.634 418.563 262.794 500 262.794 500";

const Snake = () => {
  const [state, setState] = useState(30);
  return (
    <>
      <div>
        <Path state={state} />
      </div>

      <div className="mt-[500px] absolute z-50 hidden">
        <button
          className="btn"
          onClick={() => {
            setState((p) => p - 25);
            console.log("here");
          }}
        >
          next
        </button>
        <button
          onClick={() => {
            setState((p) => p + 25);
            console.log("here");
          }}
          className="btn"
        >
          previous
        </button>
      </div>
    </>
  );
};

export default Snake;

const Path = ({ state }: any) => {
  return (
    <div
      id="svg-wrapper"
      className="relative w-[500px] h-[500px] bg-cover bg-black"
    >
      <svg
        height=""
        className="w-[500px] h-[500px] block absolute border-2 border-black"
        version="1.1"
      >
        <motion.path
          d={curveyPath}
          stroke-width="3"
          stroke="white"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={"8"}
        ></motion.path>
      </svg>
      <Level number={1} state={30} />
      <Level number={2} state={60} />
      <Level number={3} state={90} />

      <Passenger state={state} />

      <Planet className="absolute top-10 left-10" />
      <Planet className="absolute top-20 left-[300px]" />
      <Planet className="absolute top-[250px] left-[100px]" />
      <Planet className="absolute top-[350px] left-[300px]" />
    </div>
  );
};

const Planet = ({ className }: any) => {
  return (
    <div className={className}>
      <Image
        width={120}
        height={120}
        alt="iamge"
        src={"/planet3.png"}
        className="rounded-full"
      />
    </div>
  );
};

const Level = ({ state, number }: any) => {
  return (
    <motion.div
      className="rounded-full absolute"
      style={{
        width: "50px",
        height: "50px",
        rotate: realign(state),
        offsetDistance: `${state}%`,
        offsetPath: `path('${curveyPath}')`,
      }}
    >
      <div className="w-full h-full bg-[#FDCE01] rounded-full center">
        <div className="  bg-indigo-500 rounded-full w-[40px] h-[40px] center font-game text-white font-semibold">
          {number}
        </div>
      </div>
    </motion.div>
  );
};

const Passenger = ({ state }: any) => {
  return (
    <motion.div
      className="rounded-full absolute z-50"
      style={{
        width: "50px",
        height: "50px",
        rotate: realign(state),
        offsetPath: `path('${curveyPath}')`,
      }}
      animate={{
        offsetDistance: `${state}%`,
        transition: {
          duration: 5,
        },
      }}
    >
      <Image
        width={50}
        height={50}
        alt="iamge"
        src={"/avatars/asian-man.png"}
        className="rounded-full"
      />
    </motion.div>
  );
};
