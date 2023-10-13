"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContentGrid from "@/blocks/molecules/content-grid";
import { DirectionProvider, Divider } from "@mantine/core";
const Page = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="px-5 overflow-y-scroll max-h-[calc(100vh-100px)] hide-scrollbar">
      <div className="grid grid-cols-1 h-full">
        <main>
          <div className="bg-blue-50 overflow-hidden  h-[600px] rounded-lg bg-[url('https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center "></div>
          <div className="">
            <div className="my-3 space-y-2 ">
              <h2 className="text-2xl font-medium">
                How astronaut survived in mars?
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                aliquid quidem, eos autem consectetur voluptates, laboriosam
                beatae nobis officia, minus ex dolorum earum hic sit debitis
                maxime doloribus? Alias, labore.
              </p>
            </div>
            {/* <div className="bg-gray-100"></div> */}
          </div>
        </main>

        <WhatYourWillLearnGrid />
      </div>
    </div>
  );
};
export default Page;

const whatYoutWillLearnData = [
  {
    title: "Learn ABCD",
    description:
      "You'll learn the alphabet from A to Z while watching this video.",
  },
  {
    title: "Learn ABCD",
    description:
      "You'll learn the alphabet from A to Z while watching this video.",
  },
  {
    title: "Learn ABCD",
    description:
      "You'll learn the alphabet from A to Z while watching this video.",
  },
  {
    title: "Learn ABCD",
    description:
      "You'll learn the alphabet from A to Z while watching this video.",
  },
];

const WhatYourWillLearnGrid = () => {
  return (
    <div className="max-w-4xl mx-auto my-5 border-2 p-10 rounded-lg">
      <h3 className="text-4xl text-center font-bold mb-8">
        What you&apos;ll learn?
      </h3>
      <ul className="grid grid-cols-2 gap-5 ">
        {whatYoutWillLearnData.map((data, index) => (
          <li className="" key={index}>
            <h3 className="text-xl font-medium mb-2 ">{data.title}</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              repellat odit provident voluptas sunt adipisci error explicabo
              tempore. Nam exercitationem illo excepturi quo rerum, velit vel
              asperiores unde quis in!
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
