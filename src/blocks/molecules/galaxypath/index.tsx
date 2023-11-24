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

const levels = [16, 32, 48, 64, 80, 96];

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
      style={{
        backgroundImage: "url('/spaca-bg.avif')",
      }}
      id="svg-wrapper"
      className="relative w-full h-[200px] overflow-hidden rounded-xl"
    >
      <svg
        height=""
        className="w-[800px] h-[200px] block absolute"
        version="1.1"
      >
        <motion.path
          d={curveyPath}
          stroke-width="3"
          stroke="white"
          fill="transparent"
          strokeLinecap="round"
          strokeOpacity={0.8}
          strokeDasharray={"5"}
        ></motion.path>
      </svg>

      <>
        {levels.map((lvl, i) => (
          <Level key={i} number={i + 1} state={lvl} />
        ))}
      </>

      <Passenger animated={animated} state={state} />
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
        width: "80px",
        height: "80px",
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
        width={80}
        height={80}
        alt="iamge"
        src={"/ufo.png"}
        className="rounded-full"
      />
    </motion.div>
  );
};
