"use client";

import GalaxyPath from "@/blocks/molecules/galaxypath";
export default function Page() {
  const [state, setState] = useState("/avatars/asian-man.png");
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
            <GalaxyPath initial={65} />
          </div>

          <div>
            <h1 className="text-5xl font-heading mt-10 leading-[4rem] font-semibold">
              We&apos;d like to know more about your location in the Cosmic
              galaxy! 🌍✨
            </h1>
          </div>

          <div className="h-[300px] flex items-center rounded-2xl space-x-3">
            {avatarList.map((a) => (
              <Avatar
                onclick={() => {
                  // setter("avatar", a.src);
                  setState(a.src);
                }}
                key={a.id}
                selected={a.src == state}
                {...a}
              />
            ))}
          </div>

          <div className="space-x-2">
            <button className="px-10 py-3 border-2 box-border rounded-full font-heading capitalize">
              Back
            </button>
            <button className="px-10 py-3 bg-[#00ABED] rounded-full font-heading capitalize text-white">
              Continue
            </button>
          </div>
        </div>
        <div className=" rounded-2xl bg-[url('/3d1.jpg')] bg-cover bg-center border-2"></div>
      </div>
    </div>
  );
}

const avatarList = [
  { src: "/avatars/asian-man.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/black-man.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/punjabi.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/student.png", id: 122, title: "cosmic kids" },
];

import Image from "next/image";
import { useState } from "react";

const Avatar = ({ src, onclick, selected }: any) => {
  return (
    <button
      onClick={onclick}
      style={selected ? { border: "5px #00ABED solid" } : undefined}
      className="relative w-[130px] h-[130px] border-2 rounded-full overflow-hidden"
    >
      <Image src={src} alt={src} width={130} height={130} />
    </button>
  );
};
