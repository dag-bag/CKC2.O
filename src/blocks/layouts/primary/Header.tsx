import Cart from "@/blocks/molecules/cart";
import { RiAddFill } from "react-icons/ri";
import Notification from "./Notification";
import Profile from "@/blocks/atoms/Profilebar";
import SearchBar from "@/blocks/molecules/Searchbar";

const Header = () => {
  return (
    <header className="fixed top-0 w-[calc(100vw-250px)] h-[80px] z-50 bg-white bg-opacity-80 backdrop-blur-sm flex items-center gap-3">
      <div className="flex items-center max-w-[1440px] 2xl:min-w-[1440px] w-full mx-auto px-2">
        <div className="flex items-center justify-between ">
          <SearchBar />
        </div>
        <div className="flex items-center justify-end ml-auto gap-5">
          <MyBalance />
          {/* <Notification />
          <Cart /> */}
          <Profile />
        </div>
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
