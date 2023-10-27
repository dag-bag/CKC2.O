"use client";

import ContentGrid from "@/blocks/molecules/content-grid";
import Image from "next/image";
import { motion } from "framer-motion";
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
          <div className="bg-blue-50 overflow-hidden  h-[600px] rounded-lg bg-[url('https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center ">
            {false && (
              <div className="center w-full h-full bg-black/30 backdrop-blur-sm">
                <div className="bg-white p-10 rounded-2xl w-[500px] space-y-2">
                  <div className="h-[100px] grid grid-cols-[150px_auto] gap-5 mb-16">
                    <div>
                      <Image
                        alt="astro"
                        src={"/astro.png"}
                        width={150}
                        height={150}
                      />
                    </div>
                    <motion.div
                      variants={container}
                      transition={{
                        staggerDirection: 3,
                        staggerChildren: 0.3,
                      }}
                      initial="hidden"
                      animate="show"
                      className="relative"
                    >
                      <motion.div
                        variants={listItem}
                        className="bg-gray-100 inline-block px-5 py-2.5 rounded-full font-fun font-medium  ml-2 border"
                      >
                        You dont have enough points
                      </motion.div>
                      <motion.div
                        variants={listItem}
                        className="bg-gray-100 w-[20px] h-[20px] rounded-full border"
                      />
                      <motion.div
                        variants={listItem}
                        className="bg-gray-100 w-[10px] h-[10px] rounded-full -ml-1 border"
                      />
                    </motion.div>
                  </div>
                  <div className="grid  grid-cols-2 gap-5">
                    <button className="btn w-full bg-indigo-500 text-white">
                      Buy Credits
                    </button>
                    <button className="btn w-full bg-gray-100">Go back</button>
                  </div>
                </div>
              </div>
            )}

            {true && (
              <div className="center w-full h-full bg-black/30 backdrop-blur-sm">
                <div className="bg-white p-5 rounded-lg w-[400px] space-y-2">
                  <h3 className="text-xl font-medium text-center bg-gray-50 py-[5rem] rounded-xl">
                    <span className="bg-purple-300 italic">
                      &quot;How Astronaut Survived! &quot;
                    </span>
                    <br /> It will cost you 50 coins to watch
                  </h3>
                  {/* <div>
                    <label htmlFor="cheakbox" className="space-x-2">
                      <input id="cheakbox" type="checkbox" />
                      <span>Dont remind me again</span>
                    </label>
                  </div> */}
                  <div className="grid grid-cols-2 gap-5">
                    <button className="btn w-full bg-indigo-500  text-white">
                      Play
                    </button>
                    <button className="btn w-full bg-gray-100">Go back</button>
                  </div>
                </div>
              </div>
            )}
          </div>
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
          <ContentGrid title="Recommended Video" />
        </main>
        <aside>.</aside>
      </div>
    </div>
  );
};
export default Page;
