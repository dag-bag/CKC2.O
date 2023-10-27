"use client"
import Container from "@/blocks/UI/PageContainer";
import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import clsx from "clsx";
const DashboardPage = () => {
  const [state,setState] = useState<"Comics" | "Videos">("Comics")
  return (
    <Container gridType="single">
      <div className="grid gap-5 px-2">
        <BannerCarousel />
      </div>
      <VideoAndComicsFilter status={state} setState={setState}/>
      <ContentGrid title="Videos" />
      <InContentAdvertisement />
      <ContentGrid title="Comics" />  
    </Container>
  );
};
export default DashboardPage;

const InContentAdvertisement = () => {
  return (
    <div className="w-full h-[250px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl center flex-col items-start px-10 gap-2">
      <p className="uppercase tracking-[2px]">ADVERTISEMENT</p>
      <h1 className="text-4xl font-medium">View Latest Videos and Quizes!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, soluta.
      </p>
      <button className="btn">Go</button>
    </div>
  );
};


import {
  RiSettings4Fill,
  RiHomeSmile2Fill,
  RiStoreFill,
  RiBarChart2Fill,
  RiVipCrown2Fill,
  RiBrainFill,
  RiBook2Fill,
  RiLiveFill,
  RiQuestionFill,
} from "react-icons/ri";
import { useState } from "react";

const VideoAndComicsFilter = ({status, setState}: any) => {
  return (
    <div className="py-5 flex gap-5">
    <Button onClick={() => {
      setState("Comics")
    }} pathname={status} href={"Comics"} Icon={RiBook2Fill}>Comics</Button>
    <Button onClick={() => {
      setState("Videos")
    }} pathname={status} href={"Videos"} Icon={RiLiveFill}>Videos</Button>

    </div>
  );
};


const Button = ({pathname, href, Icon, children, onClick}: any) => {
  return (
       <button
       onClick={onClick}
      className={clsx(
        "px-10 py-2.5 rounded-xl flex justify-between gap-5 text-black border",
        pathname == href && " bg-[#2FB2AB]  drop-shadow-lg"
      )}
    >
      <div className="flex gap-2">
        <div className="px-3 center rounded-lg">
          <Icon color={pathname == href ? "white" : "gray"} size={22} />
        </div>
        <div>
          <h3
            className={clsx(
              "text-md font-heading  text-gray-700",
              pathname == href && "  !text-white"
            )}
          >
            {children}
          </h3>
        </div>
      </div>
      <div className="center">{/* <FiChevronRight color="gray" /> */}</div>
    </button>
  )
}