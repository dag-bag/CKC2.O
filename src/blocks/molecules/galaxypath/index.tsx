"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const levels = [16, 32, 48, 64, 80, 96];

const svgPaths = {
  xl: "M1 41.3104C1 41.3104 87.4994 -11.9027 174.477 41.3104C261.454 94.5235 339.351 83.2359 386.185 41.3104C433.019 -0.61504 508.527 -23.0955 588.814 41.3104C669.1 105.716 801 41.3104 801 41.3104",
  md: "M1 41.3104C1 41.3104 65.8746 -11.9027 131.108 41.3104C196.34 94.5235 254.764 83.2359 289.889 41.3104C325.014 -0.61504 381.645 -23.0955 441.86 41.3104C502.075 105.716 601 41.3104 601 41.3104",
  sm: "M1 41.251C1 41.251 38.8435 -11.8838 76.896 41.251C114.949 94.3858 149.029 83.1148 169.519 41.251C190.008 -0.612723 223.043 -23.0601 258.168 41.251C293.294 105.562 351 41.251 351 41.251",
};

const GalaxyPath = ({ initialProgress }: any) => {
  const animated = () => {};

  return (
    <div>
      <div className="block md:hidden">
        <Path
          path={svgPaths.sm}
          animated={animated}
          progress={initialProgress}
        />
      </div>
      <div className="hidden md:block xl:hidden">
        <Path
          path={svgPaths.md}
          animated={animated}
          progress={initialProgress}
        />
      </div>
      <div className="hidden xl:block">
        <Path
          path={svgPaths.xl}
          animated={animated}
          progress={initialProgress}
        />
      </div>
    </div>
  );
};

export default GalaxyPath;

const Path = ({ progress, animated, path }: any) => {
  return (
    <div
      id="svg-wrapper"
      style={{
        backgroundImage: "url('/spaca-bg.avif')",
      }}
      className="relative w-full h-[150px] overflow-hidden rounded-xl py-10"
    >
      <svg height="" version="1.1" className="block w-full absolute">
        <motion.path
          d={path}
          stroke="white"
          stroke-width="3"
          fill="transparent"
          strokeOpacity={0.8}
          strokeLinecap="round"
          strokeDasharray={"5"}
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
    <motion.div
      onClick={() => {
        console.log("here");
      }}
      className="rounded-full absolute z-50 w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
      style={{
        offsetDistance: `${progress}%`,
        offsetPath: `path('${path}')`,
      }}
    >
      <div className="w-full h-full border border-[#00ABED] bg-white rounded-full center font-game font-semibold text-xs  ">
        {number}
      </div>
    </motion.div>
  );
};

const Passenger = ({ progress, animated, path }: any) => {
  const varients = {
    initial: {
      offsetDistance: `${progress - 16}%`,
      offsetPath: `path('${path}')`,
    },
    animate: {
      offsetDistance: `${progress}%`,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      animate="animate"
      initial="initial"
      variants={varients}
      onAnimationComplete={animated}
      className="rounded-full absolute z-50 w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
    >
      <Image fill alt="iamge" src={"/ufo.png"} className="rounded-full" />
    </motion.div>
  );
};
