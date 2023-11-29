import { realign } from ".";
import { Tooltip } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";

const tooltip: any = {
  16: "Name",
  32: "Grade",
  48: "Birthday",
  64: "Mobile",
  80: "Location",
  96: "Avatar",
};

interface Props {
  progress: number;
  number: number;
  path: string;
}

const Level = ({ progress, number, path }: Props) => {
  const Properties = {
    whileHover: {
      scale: 1.2,
    },
    whileTap: {
      scale: 1.2,
    },
    style: {
      rotate: realign(progress),
      offsetPath: `path('${path}')`,
      offsetDistance: `${progress}%`,
    },
  };

  return (
    <Tooltip withArrow label={tooltip[progress]}>
      <motion.div
        {...Properties}
        className="rounded-full cursor-pointer absolute z-50 w-[40px] h-[40px] md:w-[60px] md:h-[60px] border p-1 border-indigo-300"
      >
        <div className="w-full lg:text-2xl h-full shadow-xl text-white border bg-white rounded-full center font-semibold bg-gradient-to-t from-blue-500 to-indigo-500">
          {number}
        </div>
      </motion.div>
    </Tooltip>
  );
};

export default Level;
