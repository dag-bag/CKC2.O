"use client";

interface Props {
  value: string;
  question: string;
}
import Image from "next/image";
import { Container } from "@mantine/core";
import { IoClose } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import ProgressBar from "@/blocks/layouts/onboarding/Progressbar";

const Header = ({ question, value }: Props) => {
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
          <div className="relative">
            <div className="bg-gray-100 inline-block px-5 py-2.5 rounded-full font-fun font-medium text-md ml-2">
              {question}
            </div>
            <div className="bg-gray-100 w-[20px] h-[20px] rounded-full"></div>
            <div className="bg-gray-100 w-[10px] h-[10px] rounded-full -ml-1"></div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
