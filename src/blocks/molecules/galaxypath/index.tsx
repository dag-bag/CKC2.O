"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip } from "@mantine/core";
const levels = [16, 32, 48, 64, 80, 96];

const tooltip: any = {
  16: "Name",
  32: "Grade",
  48: "Birthday",
  64: "Mobile",
  80: "Location",
  96: "Avatar",
};

const GalaxyPath = ({ initialProgress, path }: any) => {
  const animated = () => {};
  return (
    <div>
      <Path path={path} animated={animated} progress={initialProgress} />
    </div>
  );
};

export default GalaxyPath;

const Path = ({ progress, animated, path }: any) => {
  return (
    <div
      id="svg-wrapper"
      className="relative w-full overflow-hidden rounded-xl py-20 h-[360px]"
    >
      <svg height="" version="1.1" className="block w-full absolute">
        <motion.path
          d={path}
          stroke="whitesmoke"
          stroke-width="3"
          fill="transparent"
          strokeOpacity={0.8}
          strokeLinecap="round"
          strokeDasharray={"15"}
        ></motion.path>
      </svg>

      <>
        {levels.map((lvl, i) => (
          <Level key={i} number={i + 1} progress={lvl} path={path} />
        ))}
      </>

      <Passenger animated={animated} progress={progress} path={path} />
    </div>
  );
};

const Level = ({ progress, number, path }: any) => {
  return (
    <Tooltip withArrow label={tooltip[progress]}>
      <motion.div
        onClick={() => {
          console.log("here");
        }}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="rounded-full cursor-pointer absolute z-50 w-[20px] h-[20px] md:w-[60px] md:h-[60px] border p-1 border-indigo-300"
        style={{
          rotate: realign(progress),
          offsetPath: `path('${path}')`,
          offsetDistance: `${progress}%`,
        }}
      >
        <div className="w-full text-2xl h-full shadow-xl text-white border bg-white rounded-full center --font-game font-semibold bg-gradient-to-t from-blue-500 to-indigo-500  ">
          {number}
        </div>
      </motion.div>
    </Tooltip>
  );
};

const Passenger = ({ progress, animated, path }: any) => {
  const varients = {
    initial: {
      offsetDistance: `${progress - 16}%`,
      offsetPath: `path('${path}')`,
    },
    animate: {
      rotate: realign(progress),
      offsetDistance: `${progress}%`,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      animate="animate"
      initial="initial"
      variants={varients}
      onAnimationComplete={animated}
      className="rounded-full absolute z-50 w-[60px] h-[40px] md:w-[100px] md:h-[60px] drop-shadow-2xl"
    >
      <Image fill alt="iamge" src={"/ship.png"} className="rounded-full" />
    </motion.div>
  );
};

const realign = (progress: number) => {
  const t: any = {
    16: -15,
    32: 45,
    48: -15,
    64: 40,
    80: -20,
    96: 40,
  };
  return t[progress];
};
