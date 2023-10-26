import Cart from "@/blocks/molecules/cart";
import Profile from "@/blocks/atoms/Profilebar";
import SearchBar from "@/blocks/molecules/Searchbar";
import Balance from "@/blocks/atoms/Balance";

import {
  RiNotification3Fill,
  RiCopperDiamondFill,
  RiHeartAddFill,
  RiAddFill,
} from "react-icons/ri";

const Header = () => {
  return (
    <header className="h-[80px] gap-3 flex items-center fixed top-0 z-50  w-[calc(100vw-300px)]  bg-white bg-opacity-80 backdrop-blur-sm ">
      <div className="flex items-center justify-between ">
        <SearchBar />
      </div>
      <div className="flex items-center justify-end ml-auto gap-5">
        {/* <Balance /> */}

        <MyBalance />

        <Profile />
      </div>
    </header>
  );
};

export default Header;

const MyBalance = () => {
  return (
    <div className=" border-2-- p-2.5">
      <div className="flex gap-5 text-lg ">
        <button className="flex gap-2 items-center">
          <span className="text-xl">🪙</span>{" "}
          <span className="font-heading">1,000</span>
        </button>

        <button className="flex items-center">
          <span className="text-xl mr-2">💎</span>{" "}
          <span className="font-heading">1,000</span>
          <span className="ml-1">
            <RiAddFill size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};
