"use client";
import Level from "./level";
import Image from "next/image";
import Passenger from "./passanger";
import { motion } from "framer-motion";

const levels = [16, 32, 48, 64, 80, 96];

const GalaxyPath = ({ initialProgress, path }: any) => {
  const animated = () => {};
  ``;
  return (
    <div>
      <div
        id="svg-wrapper"
        className="relative w-full overflow-hidden rounded-xl md:py-20 pt-12 h-[280px]"
      >
        <svg height="" version="1.1" className="block w-full absolute">
          <motion.path
            d={path}
            stroke-width="3"
            fill="transparent"
            stroke="whitesmoke"
            strokeOpacity={0.8}
            strokeDasharray="15"
            strokeLinecap="round"
          />
        </svg>

        {levels.map((lvl, i) => (
          <Level key={i} number={i + 1} progress={lvl} path={path} />
        ))}
        <CosmicHome progress={96} path={path} />
        <Passenger animated={animated} progress={initialProgress} path={path} />
      </div>
    </div>
  );
};
export default GalaxyPath;

const CosmicHome = ({ progress, path }: any) => {
  return (
    <div
      style={{
        rotate: realign(progress),
        offsetPath: `path('${path}')`,
        offsetDistance: `${progress}%`,
      }}
      className="absolute z-[51] center
      md:w-[200px] md:h-[200px] h-[100px] w-[100px]"
    >
      <Image src={"/planet.png"} alt="planet" width={500} height={500} />
    </div>
  );
};

export const realign = (progress: number) => {
  const t: any = {
    16: -15,
    32: 45,
    48: -15,
    64: 40,
    80: -20,
    96: 40,
  };
  return t[progress];
};
