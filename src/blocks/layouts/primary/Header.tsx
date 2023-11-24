import Cart from "@/blocks/molecules/cart";
import { RiAddFill } from "react-icons/ri";
import Notification from "./Notification";
import Profile from "@/blocks/atoms/Profilebar";
import SearchBar from "@/blocks/molecules/Searchbar";

const Header = () => {
  return (
    <>
      <MobileHeader />
      <header className=" hidden md:flex  fixed top-0 w-[calc(100vw-250px)] h-[80px] z-50 bg-blue-50 bg-opacity-80 backdrop-blur-sm  items-center gap-3">
        <div className="flex items-center max-w-[1440px] 2xl:min-w-[1440px] w-full mx-auto px-2">
          <div className="flex items-center justify-between ">
            <SearchBar />
          </div>
          <div className="flex items-center justify-end ml-auto gap-5">
            <MyBalance />
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};
import { LuAlignRight } from "react-icons/lu";

const MobileHeader = () => {
  return (
    <header
      id="mobile-header"
      className=" h-[80px] flex md:hidden items-center justify-between fixed top-0 left-0 w-full  bg-white bg-opacity-80 backdrop-blur-sm z-50 pl-3 pr-5"
    >
      <Profile />
      <div className="flex items-center gap-2">
        <MobileMyBalance />
        <button className="w-[45px] h-[45px] bg-gray-50 center rounded-xl">
          <LuAlignRight size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
const MyBalance = () => {
  return (
    <div className="h-[45px]  flex items-center rounded-full px-5 bg-white ">
      <div className="flex gap-8 text-lg ">
        <button className="flex items-center gap-2 font-josefin">
          <Image width={35} height={35} alt="coin" src={"/coin3.png"} />
          <span className="mt-1 font-semibold">1,945</span>
        </button>

        <button className="flex items-center gap-2 font-josefin">
          <Image
            width={30}
            height={30}
            alt="coin"
            src={"/diamond.png"}
            className=" -rotate-12"
          />
          <span className="mt-1 font-semibold">1,000</span>
        </button>
      </div>
    </div>
  );
};

const MobileMyBalance = () => {
  return (
    <div className="h-[45px]  flex items-center rounded-full px-5 bg-gray-50 ">
      <div className="flex gap-4 text-sm ">
        <button className="flex items-center gap-1 font-josefin">
          <Image width={25} height={25} alt="coin" src={"/coin3.png"} />
          <span className="mt-1 font-semibold">1,945</span>
        </button>

        <button className="flex items-center gap-1 font-josefin ">
          <Image
            width={20}
            height={20}
            alt="coin"
            src={"/diamond.png"}
            className=" -rotate-12"
          />
          <span className="mt-1 font-semibold">1,000</span>
        </button>
      </div>
    </div>
  );
};
