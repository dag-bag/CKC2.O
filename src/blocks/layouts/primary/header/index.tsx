import Link from "next/link";
import MobileHeader from "./mobile-header";
import { LuAlignRight } from "react-icons/lu";
import Profile from "@/blocks/atoms/Profilebar";
import SearchBar from "@/blocks/molecules/searchbar";
import MyBalance, { MobileMyBalance } from "./balance";
const Header = () => {
  return (
    <>
      <MobileHeader />
      <header className="hidden md:flex fixed top-0 w-[calc(100vw-120px)] h-[80px] z-50 bg-white bg-opacity-90 backdrop-blur-sm items-center gap-3">
        <div className="flex items-center max-w-[1440px] 2xl:min-w-[1440px] w-full mx-auto px-2">
          <div className="flex items-center justify-between">
            <SearchBar />
          </div>
          <div className="flex items-center justify-end ml-auto gap-5">
            <LeaderboardButton />
            <MarketplaceButton />
            <MyBalance />
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};

import { RiStoreFill, RiBarChart2Fill } from "react-icons/ri";

const LeaderboardButton = () => {
  return (
    <Link
      href="/leader"
      className="center gap-2 font-heading bg-white h-[45px] px-3 rounded-full text-md"
    >
      <RiBarChart2Fill size={20} />
      {/* Leaderboard */}
    </Link>
  );
};

const MarketplaceButton = () => {
  return (
    <Link
      href="/shop"
      className="center gap-2 font-heading bg-white h-[45px] px-3 rounded-full text-md"
    >
      <RiStoreFill size={20} />
      {/* Marketplace */}
    </Link>
  );
};

export default Header;
