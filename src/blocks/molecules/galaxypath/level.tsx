import { realign } from ".";
import { motion } from "framer-motion";
import { Tooltip } from "@mantine/core";
import { useRouter } from "next/navigation";
import { BiSolidLockAlt } from "react-icons/bi";

const tooltip: any = {
  16: "Name",
  32: "Grade",
  48: "Birthday",
  64: "Mobile",
  80: "Location",
  96: "Avatar",
};

const pathnames: any = {
  16: "/newboard/name",
  32: "/newboard/grade",
  48: "/newboard/birthday",
  64: "/newboard/mobile",
  80: "/newboard/location",
  96: "/newboard/avatar",
};

interface Props {
  progress: number;
  number: number;
  path: string;
  initial: number;
}

const Level = ({ progress, number, path, initial }: Props) => {
  const router = useRouter();
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

  const handleClick = () => {
    if (progress < initial) {
      router.push(pathnames[progress]);
    }
  };

  return (
    <Tooltip withArrow label={tooltip[progress]}>
      <motion.div
        onClick={handleClick}
        {...Properties}
        className="rounded-full cursor-pointer absolute z-50 w-[50px] h-[50px] md:w-[60px] md:h-[60px] border p-1 border-indigo-300"
      >
        <div className="w-full lg:text-2xl h-full shadow-xl text-white border bg-white rounded-full center gap-0.5 font-semibold bg-gradient-to-t from-blue-500 to-indigo-500">
          {number}{" "}
          {progress > initial && (
            <span className="text-xs md:text-sm">
              <BiSolidLockAlt />
            </span>
          )}
        </div>
      </motion.div>
    </Tooltip>
  );
};

export default Level;
