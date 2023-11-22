"use client";
import clsx from "clsx";
import Container from "@/blocks/UI/PageContainer";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
const DashboardPage = () => {
  const [state, setState] = useState<"Comics" | "Videos">("Comics");
  return (
    <Container gridType="single">
      <div className="grid gap-5 px-2">
        <BannerCarousel />
      </div>
      <VideoAndComicsFilter status={state} setState={setState} />
      {state == "Comics" && (
        <Suspense fallback={<Loading />}>
          <Comics />
        </Suspense>
      )}

      {state == "Videos" && (
        <section className="grid grid-cols-4 gap-3">
          <Content type="video" />
          <Content type="video" />
          <Content type="video" />
          <Content type="video" />
          <Content type="video" />
          <Content type="video" />
          <Content type="video" />
          <Content type="video" />
        </section>
      )}
    </Container>
  );
};
export default DashboardPage;

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
import { Suspense, useState } from "react";
import Content from "@/blocks/molecules/content-grid/content";
import Comics from "@/blocks/molecules/sections/comics";
import Loading from "@/blocks/atoms/loading";

const VideoAndComicsFilter = ({ status, setState }: any) => {
  return (
    <div className="py-5 flex gap-5">
      <Button
        onClick={() => {
          setState("Comics");
        }}
        pathname={status}
        href={"Comics"}
        Icon={RiBook2Fill}
      >
        Comics
      </Button>
      <Button
        onClick={() => {
          setState("Videos");
        }}
        pathname={status}
        href={"Videos"}
        Icon={RiLiveFill}
      >
        Videos
      </Button>
    </div>
  );
};

const Button = ({ pathname, href, Icon, children, onClick }: any) => {
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
  );
};
