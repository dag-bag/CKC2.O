"use client";
import Controller from "../grader-carousel/controller";
import { Carousel } from "@mantine/carousel";
import Heading from "@/blocks/atoms/Heading";
import { useElementSize } from "@mantine/hooks";
import { CarouselProps } from "@mantine/carousel";
import { ReactNode, useRef, Children } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const ExploreCarousel: React.FC<Props> = ({ children, title }) => {
  const nextControlRef = useRef<any>(null);
  const prevControlRef = useRef<any>(null);
  const { ref, width } = useElementSize();

  const handleControllerLeft = () => {
    prevControlRef.current.click();
  };
  const handleControllerRight = () => {
    nextControlRef.current.click();
  };

  const hideCarouselDefaultControls = {
    opacity: "0",
    PointerEvent: "none",
    backgound: "red !important",
  };

  const properties: CarouselProps = {
    w: width,
    align: "start",
    slidesToScroll: 1,
    slideGap: { base: "md", sm: "md" },
    slideSize: { base: "50%", sm: "40%", md: "33%", xl: "20%" },
    nextControlProps: {
      ref: nextControlRef,
      style: hideCarouselDefaultControls,
    } as any,
    previousControlProps: {
      ref: prevControlRef,
      style: hideCarouselDefaultControls,
    } as any,
  };

  return (
    <section className="my-5 w-full grid">
      <div className="flex items-center justify-between md:mb-6 mb-5 pl-2">
        <Heading size="medium" varient="white_with_shadow">
          {title}
        </Heading>
        <Controller {...{ handleControllerRight, handleControllerLeft }} />
      </div>
      <div ref={ref} className="w-full relative">
        <Carousel {...properties}>
          {Children.map(children, (child) => (
            <Carousel.Slide>{child}</Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ExploreCarousel;
