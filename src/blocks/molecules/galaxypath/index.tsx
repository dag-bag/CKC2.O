"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input } from "@mantine/core";

const realign = (state: any) => {
  const realignment: any = {
    30: -120,
    60: -70,
    90: -60,
  };
  return realignment[state];
};

const curveyPath =
  "M1 101.682C1 101.682 87.4994 61.9711 174.477 101.682C261.454 141.394 339.351 132.97 386.185 101.682C433.019 70.3947 508.527 53.6182 588.814 101.682C669.1 149.746 801 101.682 801 101.682";

const GalaxyPath = ({ initial }: any) => {
  const [state, setState] = useState(initial);
  const [opened, { open, close }] = useDisclosure(false);

  const animated = () => {
    open();
  };

  const onPopupClose = () => {
    close();
    setState(state + 10);
  };

  return (
    <>
      <div>
        <div>
          <Path state={state} animated={animated} />
        </div>
      </div>
    </>
  );
};

export default GalaxyPath;

const Path = ({ state, animated }: any) => {
  return (
    <div
      id="svg-wrapper"
      className="relative w-full h-[200px] border-2 overflow-hidden rounded-2xl"
    >
      <svg
        height=""
        className="w-[800px] h-[200px] block absolute"
        version="1.1"
      >
        <motion.path
          d={curveyPath}
          stroke-width="3"
          stroke="gray"
          fill="transparent"
          strokeLinecap="round"
          strokeOpacity={0.8}
          strokeDasharray={"5"}
        ></motion.path>
      </svg>
      <Level number={1} state={10 + 5} />
      <Level number={2} state={20 + 5} />
      <Level number={3} state={30 + 5} />
      <Level number={4} state={40 + 5} />
      <Level number={5} state={50 + 5} />
      <Level number={6} state={60 + 5} />
      <Passenger animated={animated} state={state} />
      {/* <Planet className="absolute top-[30px] left-10 z-40" />
      <Planet className="absolute top-[120px] left-[450px] z-40" />
      <Planet className="absolute top-[60px] left-[250px] z-40" />
      <Planet className="absolute top-[70px] left-[650px] z-40" /> */}
      {/* <motion.div
        initial={{ scale: 1 }}
        animate={{ x: -300, y: 500, scale: 0.6 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className={"absolute top-[-20px] left-[400px] z-30"}
      >
        <Image
          width={70}
          height={70}
          alt="iamge"
          src={"/comet.webp"}
          className="rounded-full"
        />
      </motion.div> */}
    </div>
  );
};

const Planet = ({ className }: any) => {
  return (
    <div className={className}>
      <Image
        width={60}
        height={60}
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
      onClick={() => {
        console.log("here");
      }}
      className="rounded-full absolute z-50"
      style={{
        width: "30px",
        height: "30px",
        rotate: realign(state),
        offsetDistance: `${state}%`,
        offsetPath: `path('${curveyPath}')`,
      }}
    >
      <div className="w-full h-full border border-[#00ABED] bg-white rounded-full center font-game font-semibold ">
        {number}
      </div>
    </motion.div>
  );
};

const Passenger = ({ state, animated }: any) => {
  return (
    <motion.div
      onAnimationComplete={animated}
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
          duration: 2,
        },
      }}
    >
      <Image
        width={50}
        height={50}
        alt="iamge"
        src={"/ufo.png"}
        className="rounded-full"
      />
    </motion.div>
  );
};
