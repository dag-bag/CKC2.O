"use client";
interface Props {
  value: string;
  question: string;
}
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@mantine/core";
import { IoClose } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import ProgressBar from "@/blocks/layouts/onboarding/Progressbar";

const Header = ({ question, value }: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header>
      <Container size={"lg"}>
        <div className="h-[100px] flex items-center gap-3 mx-auto">
          <button>
            <IoClose size={25} />
          </button>
          <ProgressBar value={value} />
          <span>
            <FaRegStar size={22} />
          </span>
        </div>
        <div className="h-[100px] grid grid-cols-[150px_auto] gap-5">
          <div>
            <Image alt="astro" src={"/astro.png"} width={150} height={150} />
          </div>
          <motion.div
            key={question}
            variants={container}
            transition={{
              staggerDirection: 3,
              staggerChildren: 0.3,
            }}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <motion.div
              variants={listItem}
              className="bg-gray-100 inline-block px-5 py-2.5 rounded-full font-fun font-medium text-lg ml-2 border"
            >
              {question}
            </motion.div>
            <motion.div
              variants={listItem}
              className="bg-gray-100 w-[20px] h-[20px] rounded-full border"
            />
            <motion.div
              variants={listItem}
              className="bg-gray-100 w-[10px] h-[10px] rounded-full -ml-1 border"
            />
          </motion.div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
