// M1 254.206C1 254.206 87.4994 154.928 174.477 254.206C261.454 353.484 339.351 332.425 386.185 254.206C433.019 175.987 508.527 134.046 588.814 254.206C669.1 374.366 801 254.206 801 254.206

"use client";
// Snake.js
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
  "M1 254.206C1 254.206 87.4994 154.928 174.477 254.206C261.454 353.484 339.351 332.425 386.185 254.206C433.019 175.987 508.527 134.046 588.814 254.206C669.1 374.366 801 254.206 801 254.206";

const Snake = () => {
  const [state, setState] = useState(15);
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
      <div className="absolute inset-0 w-full h-full center flex-col ">
        <div className="center flex-col mb-5">
          <h1 className=" font-heading text-3xl  font-bold uppercase ">
            Journey to Space Station
          </h1>
          <p className=" max-w-2xl text-center mt-2 font-heading">
            Fill in info, complete steps, and soar to the CKC Space Station in
            this stellar adventure!
          </p>
        </div>
        <div>
          <div>
            <Path state={state} animated={animated} />
          </div>
        </div>
      </div>

      <Modal
        centered
        opened={false}
        onClose={onPopupClose}
        withCloseButton={false}
        title="Entries"
      >
        <div className="font-fun grid gap-2">
          <Input placeholder="firstname" />
          <Input placeholder="lastname" />
          <Button onClick={onPopupClose}>Next</Button>
        </div>
      </Modal>
    </>
  );
};

export default Snake;

const Path = ({ state, animated }: any) => {
  return (
    <div
      // style={{ backgroundImage: "url('/galac-4.jpg')" }}
      id="svg-wrapper"
      className="relative w-[800px] h-[500px] bg-cover bg-black overflow-hidden rounded-2xl border-2 border-dashed"
    >
      <svg
        height=""
        className="w-[800px] h-[500px] block absolute border-2 border-black"
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
      <Level number={7} state={70 + 5} />
      <Level number={8} state={80 + 5} />

      <Passenger animated={animated} state={state} />

      <Planet className="absolute top-[300px] left-10 z-40" />
      <Planet className="absolute top-[250px] left-[430px] z-40" />
      <Planet className="absolute top-[150px] left-[220px] z-40" />
      <Planet className="absolute top-[120px] left-[650px] z-40" />

      <motion.div
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
      </motion.div>
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
      <div className="w-full h-full bg-[#FDCE01] rounded-full center font-game font-semibold">
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
