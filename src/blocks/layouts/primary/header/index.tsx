import Link from "next/link";
import Image from "next/image";
import MyBalance from "./balance";
import Profile from "@/blocks/atoms/Profilebar";
import MobileHeader from "./mobile/mobile-header";
import SearchBar from "@/blocks/molecules/searchbar";
import UpgradeBlock from "@/blocks/atoms/Upgrade";
const Header = () => {
  return (
    <>
      <MobileHeader />
      <header className="hidden md:flex fixed top-0 w-[calc(100vw-120px)] h-[80px] z-50 bg-white bg-opacity-90 backdrop-blur-sm items-center gap-3 shadow-md ">
        <div className="flex items-center max-w-[1440px] 2xl:min-w-[1440px] w-full mx-auto px-2 gap-5">
          <div className="flex items-center justify-between">
            <SearchBar />
          </div>
          <div className="flex items-center justify-end ml-auto gap-5">
            <UpgradeBlock />
            <NACButton />
            {/* <LeaderboardButton /> */}
            <MarketplaceButton />
            {/* <NotificationButton /> */}
            <MyBalance />
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};

const LeaderboardButton = () => {
  return (
    <Link
      href="/leader"
      className="center gap-2 font-heading bg-white h-[45px]  rounded-xl p-3 text-md"
    >
      <Image
        src={"/assets/leaderboard.png"}
        alt="leaderboard"
        width={40}
        height={40}
      />
    </Link>
  );
};

const NACButton = () => {
  return (
    <Link
      href="/nac"
      className="center gap-2 font-heading bg-white h-[45px] px-3 rounded-lg text-md font-semibold"
    >
      <Image
        src={"/assets/nac-logo.png"}
        alt="leaderboard"
        width={50}
        height={50}
      />
    </Link>
  );
};

const NotificationButton = () => {
  return (
    <Link
      href="/shop"
      className="center gap-2 font-heading bg-white h-[45px]--  rounded-xl p-3 text-md"
    >
      <Image
        src={"/assets/notification.png"}
        alt="leaderboard"
        width={35}
        height={35}
      />
    </Link>
  );
};

const MarketplaceButton = () => {
  return (
    <Link
      href="/shop/virtual"
      className="center gap-2 font-heading bg-white h-[45px]  rounded-xl p-3 text-md"
    >
      <Image
        src={"/assets/shop.png"}
        alt="leaderboard"
        width={40}
        height={40}
      />
    </Link>
  );
};

export default Header;
