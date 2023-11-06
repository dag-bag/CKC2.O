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
export type ContentType =
  | "live_now"
  | "live_upcoming"
  | "live_past"
  | "comics"
  | "course"
  | "video";

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
    ? "20%"
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
    <div className={`my-5`}>
      <div className="flex items-center justify-between mb-2 pl-2">
        <h3 className="text-xl font-semibold tracking-medium font-heading text-gray-800">
          {title}
        </h3>
        <Controller {...{ handleControllerRight, handleControllerLeft }} />
      </div>
      <Carousel
        slideGap="sm"
        align="start"
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
