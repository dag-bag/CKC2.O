"use client";
import Link from "next/link";
import GalaxyPath from "@/blocks/molecules/galaxypath";
import { Checkbox } from "@mantine/core";
import { useState } from "react";
import Image from "next/image";
export default function Page() {
  const [state, setState] = useState(1);
  return (
    <div className="">
      <div className="grid grid-cols-[auto_450px] w-screen h-screen p-5 py-10 gap-10 max-w-[1440px] mx-auto">
        <div className="space-y-5">
          <div
            id="header"
            className="h-[100px] bg-green-500-- rounded-2xl flex items-center border--"
          >
            <Image src={"/logo.png"} alt="logo" width={100} height={100} />
          </div>
          <div id="header" className="h-[200px] rounded-2xl">
            <GalaxyPath initial={25} />
          </div>

          <div>
            <h1 className="text-5xl font-heading mt-10 leading-[4rem] font-semibold">
              Hello there, Cosmic Kid! <br /> What&apos;s your super cool name?
            </h1>
          </div>

          <div className="bg-gray-50 p-5 flex items-center rounded-2xl space-x-3">
            <div className="grid grid-cols-5 w-full gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div
                  onClick={() => {
                    setState(i);
                  }}
                  className={`bg-blue-100 h-[150px] rounded-xl center text-2xl font-game font-semibold relative`}
                  key={i}
                >
                  {state == i && (
                    <button className="absolute top-5 right-5 ">
                      <Checkbox checked />
                    </button>
                  )}
                  {i}
                </div>
              ))}
            </div>
          </div>

          <div className="space-x-2">
            <button className="px-10 py-3 border-2 box-border rounded-full font-heading capitalize">
              Back
            </button>
            <Link href={"/newboard/birthday"}>
              <button className="px-10 py-3 bg-[#00ABED] rounded-full font-heading capitalize text-white">
                Continue
              </button>
            </Link>
          </div>
        </div>
        <div className=" rounded-2xl bg-[url('/3d1.jpg')] bg-cover bg-center border-2"></div>
      </div>
    </div>
  );
}
