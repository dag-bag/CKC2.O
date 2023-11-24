"use client";
interface Props {
  title: string;
  type?: ContentType;
}
import { useRef } from "react";
import Content from "./content";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import clsx from "clsx";
export type ContentType =
  | "live_now"
  | "live_past"
  | "live_upcoming"
  | "live_now_premium"
  | "live_past_premium"
  | "live_upcoming_premium"
  | "comics"
  | "course"
  | "video"
  | "watched"
  | "intros";

// this matine carouse is not effective in point of view serverside rendering...

const ContentGrid: React.FC<Props> = ({ title, type }) => {
  // carousel-action-control-refs
  const nextControlRef = useRef<any>(null);
  const prevControlRef = useRef<any>(null);
  // custom controller handlers
  const handleControllerLeft = () => {
    prevControlRef.current.click();
  };
  const handleControllerRight = () => {
    nextControlRef.current.click();
  };

  const breakpoints = {
    A: useMediaQuery("(min-width: 1632px)"),
    B: useMediaQuery("(min-width: 1381px)"),
    C: useMediaQuery("(min-width: 1280px)"),
  };

  const grid_content_columns_size = breakpoints.A
    ? "25%"
    : breakpoints.B
    ? "25%"
    : breakpoints.C
    ? "33%"
    : "50%";

  const hideCarouselDefaultControls = {
    opacity: "0",
    PointerEvent: "none",
    backgound: "red !important",
  };

  return (
    <div
      className={`py-5 my-2  ${clsx(
        type === "intros" &&
          " md:px-12 px-5 md:!py-8 md:rounded-xl bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-50"
      )}`}
    >
      <div className="flex items-center justify-between md:mb-4 mb-2 pl-2 ">
        <h3 className="md:text-2xl text-lg font-bold tracking-medium font-josefin text-gray-800">
          {title}
        </h3>
        <Controller {...{ handleControllerRight, handleControllerLeft }} />
      </div>
      <Carousel
        className="px-2"
        align="start"
        slideGap={"lg"}
        draggable={false}
        slidesToScroll={2}
        slideSize={grid_content_columns_size}
        nextControlProps={
          { ref: nextControlRef, style: hideCarouselDefaultControls } as any
        }
        previousControlProps={
          { ref: prevControlRef, style: hideCarouselDefaultControls } as any
        }
      >
        <Carousel.Slide>
          <Content type={type} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Content type={type} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Content type={type} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Content type={type} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Content type={type} />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default ContentGrid;

const Controller = ({ handleControllerRight, handleControllerLeft }: any) => {
  return (
    <div className="grid grid-cols-2 w-[50px]">
      <button onClick={handleControllerLeft}>
        <HiMiniChevronLeft size={22} />
      </button>
      <button onClick={handleControllerRight}>
        <HiMiniChevronRight size={22} />
      </button>
    </div>
  );
};
