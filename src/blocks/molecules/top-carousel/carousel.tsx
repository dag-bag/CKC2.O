"use client";
import { useRef } from "react";
import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Carousel as MantineCarousel } from "@mantine/carousel";
interface Props {
  slides: { title: string; desc: string; thumbnail: any }[];
}
const Carousel: React.FC<Props> = ({ slides }) => {
  const nextControlRef = useRef<HTMLButtonElement>(null);
  const prevControlRef = useRef<HTMLButtonElement>(null);
  const handleControllerLeft = () => {
    prevControlRef?.current?.click();
  };
  const handleControllerRight = () => {
    nextControlRef?.current?.click();
  };

  return (
    <div className="relative w-full">
      <MantineCarousel
        classNames={{
          controls: "!hidden",
        }}
        align={"start"}
        slideSize={"100%"}
        slidesToScroll={1}
        nextControlProps={{ ref: nextControlRef } as any}
        previousControlProps={{ ref: prevControlRef } as any}
      >
        {slides?.map((slide, index) => (
          <MantineCarousel.Slide key={index.toString() + slide.title}>
            <div className="relative w-full h-full aspect-w-9 aspect-h-3 bg-white ">
              <Image fill src={slide.thumbnail.at(0).url} alt={slide.title} />

              <div className="bg-gradient-to-b from-transparent  to-gray-500 w-full h-[50%] mt-auto text-white flex items-start justify-end flex-col p-3 md:p-8 font-josefin ">
                <div className="flex justify-between w-full">
                  <div>
                    <Heading size="medium" className="font-amar sm:text-sm">
                      {slide.title}
                    </Heading>
                    <p className="font-fun text-sm hidden md:block">
                      {slide.desc}
                    </p>
                  </div>
                  <div className="center gap-5">
                    <button onClick={handleControllerLeft}>
                      <BiLeftArrow size={20} />
                    </button>
                    <button onClick={handleControllerRight}>
                      <BiRightArrow size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </div>
  );
};

export default Carousel;
