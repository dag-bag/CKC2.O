"use client";
import { useRef } from "react";
import Heading from "@/blocks/atoms/Heading";
import { Carousel } from "@mantine/carousel";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
interface Props {
  slides: { title: string; desc: string; mediaUrl: string }[];
}
const InformationCarousel: React.FC<Props> = ({ slides }) => {
  const nextControlRef = useRef<any>(null);
  const prevControlRef = useRef<any>(null);

  const handleControllerLeft = () => {
    prevControlRef.current.click();
  };
  const handleControllerRight = () => {
    nextControlRef.current.click();
  };

  return (
    <div className="relative w-full">
      <Carousel
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
          <Carousel.Slide key={index.toString() + slide.title}>
            <div
              style={{
                backgroundImage: `url(${slide.mediaUrl})`,
              }}
              className="md:h-[360px] h-[150px] bg-no-repeat bg-contain bg-center mb-2 w-full bg-darkblue rounded-xl overflow-hidden"
            >
              <div className="bg-gradient-to-b from-transparent via-transparent to-gray-800 w-full h-full text-white flex items-start justify-end flex-col p-3 md:p-8 font-josefin">
                <div className="flex justify-between w-full">
                  <div>
                    <Heading size="large" className="font-amar">
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
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default InformationCarousel;
