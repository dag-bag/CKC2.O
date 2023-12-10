"use client";
interface Props {
  title: string;
  children: ReactNode;
}
import { ReactNode, useRef, Children } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

const Grider: React.FC<Props> = ({ title, children }) => {
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
    C: useMediaQuery("(min-width: 120px)"),
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
    <div>
      <div className="flex items-center justify-between md:mb-3 mb-2 pl-2 ">
        <h3
          style={{
            textShadow: "2px 2px 2px #18007ac6",
          }}
          className="md:text-3xl text-lg font-semibold tracking-medium font-amar tracking-wide text-white"
        >
          {title}
        </h3>
        <Controller {...{ handleControllerRight, handleControllerLeft }} />
      </div>
      <Carousel
        classNames={{
          container: "py-3",
        }}
        align="start"
        slideGap={"lg"}
        slidesToScroll={2}
        slideSize={grid_content_columns_size}
        nextControlProps={
          { ref: nextControlRef, style: hideCarouselDefaultControls } as any
        }
        previousControlProps={
          { ref: prevControlRef, style: hideCarouselDefaultControls } as any
        }
      >
        {Children.map(children, (child) => {
          return <Carousel.Slide>{child}</Carousel.Slide>;
        })}
      </Carousel>
    </div>
  );
};

export default Grider;

const Controller = ({ handleControllerRight, handleControllerLeft }: any) => {
  return (
    <div className="grid grid-cols-2 w-[50px] text-white">
      <button onClick={handleControllerLeft}>
        <HiMiniChevronLeft size={22} />
      </button>
      <button onClick={handleControllerRight}>
        <HiMiniChevronRight size={22} />
      </button>
    </div>
  );
};
